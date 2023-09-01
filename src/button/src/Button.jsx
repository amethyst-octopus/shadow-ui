

export default Button = forwardRef(
  ({ kind = "primary", ...props }, ref) => {
      return <button data-button={`kind:${kind}`} ref={ref} {...props} />;
  },
);