import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  {
    disabled = false,
    type = "text",
    className = "",
    defaultValue="",
    ...props
  },
  ref
) {
  const input = ref ? ref : useRef();


  return (
    <input
      {...props}
      type={type}
      className={"border-gray-300 border-b-2 " + className}
      ref={input}
      disabled={disabled}
      defaultValue={defaultValue}
    />
  );
});
