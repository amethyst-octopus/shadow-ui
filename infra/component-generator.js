/**
 * Auxilliary app that allows us to create our own
 * components quicker.
 */

const fs = require('fs');
const Logger = require('./logger');

// create file structure
// npm run component -- <Component Name>

if (process.argv.length === 2) {
    const config = {
        message: "Expected: A component name/Usage: npm run component <COMPONENT_NAME>",
        type: 'error',
        delimiter: '/'
    };
    Logger.log(config);
    process.exit(1);
}

const component = process.argv[2]
const dir = `./src/${component.toLowerCase()}`;
const CONTENT = {
    JSX: `import { useState } from "react";
import "./${component}.css";

export const ${component} = () => {

    return (
        <h1>Hello</h1>
    );
}`,
    STORIES: `import { ${component} } from "./${component}"

export default {
    title: 'Components/${component}',
    component: ${component}
}

export const Type_One = {
    argTypes: {},
    args: {}
}
`
}


const createDirectory = (dir) => {
    if (!fs.existsSync(dir)) {
        Logger.log({message: `creating ${dir}`})
        fs.mkdirSync(dir);
    }
    else {
        Logger.log({
            message: `${dir} already exists!`,
            type: 'error'
        });
        process.exit(1);
    }
};

const createFile = (filepath, content) => {
    if (!fs.existsSync(filepath)) { 
        Logger.log({message: `creating ${filepath}`})
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                Logger.log({ message: err.message, type: 'error' });
                process.exit(1);
            }
        })
    } else {
        Logger.log({
            message: `${filepath} already exists!`,
            type: 'error'
        });
        process.exit(1);
    }
}

// create component root directory
createDirectory(dir);
// create component/src directory
createDirectory(`${dir}/src`);
// create component/index.js file
createFile(`${dir}/index.js`, `export * from "./src/${component}"`);
// create jsx file
createFile(`${dir}/src/${component}.jsx`, CONTENT.JSX);
// create stories file
createFile(`${dir}/src/${component}.stories.jsx`,CONTENT.STORIES);
// create css file
createFile(`${dir}/src/${component}.css`, '');