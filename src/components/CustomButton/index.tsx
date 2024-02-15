import React from "react";
import { ButtonPropsType } from "../../types";

const CustomButton = ({
  disabled,
  designs,
  title,
  btnType,
}: ButtonPropsType) => {
  return (
    <button
      disabled={disabled}
      type={btnType}
      className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
