/**
 * Logs messages to the console in a somewhat clear way.
 * 
 * type (string): 'error' or 'info', defaults to 'info', though technically
 *                any string that isn't error will be considered info logs
 * message (string): The message you want to log
 * lineLength: The length of the log before starting a new line. defaults to 15
 * delimiter: An alternative way to log using a symbol to parse within the message
 */
module.exports.log = ({ type = 'info', message, lineLength = 50, delimiter = null }) => {
    let symbol = type === 'error' ? '↳' : '✔';
    if (type === 'error') {
        console.error('[!] Error!');

    }

    if (delimiter) {
        message.split(delimiter).forEach( (line) => {
            console.log(`${symbol} ${line}`)
        })
    } else {
        const MAX_TIMES_RUN = Math.ceil(message.length / lineLength);
        let i = 0, start = 0, end = 0;
        while (i < MAX_TIMES_RUN) {
            end = start + lineLength;
            console.log(`${symbol} ${message.substring(start, end)}`)
            start = end + 1;
            i++;
        }
    }
}