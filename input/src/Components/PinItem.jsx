import React, { forwardRef } from "react";

const style = {
  padding: 10,
  width: 15,
  fontSze: 14,
  margin: 5,
};

const PinItem = forwardRef(({ onChange, max }, ref) => {
  const handleKeyUp = (e) => {
    onChange(e.target.value);
  };
  return (
    <input ref={ref} onKeyUp={handleKeyUp} maxLength={max} style={style} />
  );
});

export default PinItem;
