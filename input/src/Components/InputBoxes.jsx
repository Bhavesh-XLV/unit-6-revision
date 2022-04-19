import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PinItem from "./PinItem";

const InputBoxes = ({ label, length, perBox, onChange }) => {
  const [values, setValues] = React.useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (value, index) => {
    const val = [...values];
    val[index] = value;
    if (value === "" && index > 0) {
      elements.current[index - 1].focus();
    }
    setValues(val);
    if (value.length > 0 && index < length - 1) {
      elements.current[index + 1].focus();
    }

    onChange(val.join(""));
  };

  return (
    <div>
      <h1>{label}</h1>
      {values.map((item, index) => (
        <PinItem
          key={index}
          ref={(n) => (elements.current[index] = n)}
          max={perBox}
          onChange={(v) => {
            handleChange(v, index);
          }}
        />
      ))}
    </div>
  );
};

InputBoxes.propTypes = {
  length: PropTypes.number.isRequired,
  label: PropTypes.string,
};

InputBoxes.defaultProps = {
  label: "Label",
};

export default InputBoxes;
