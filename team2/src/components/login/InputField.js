import React from "react";
import { BsXCircleFill } from "react-icons/bs";

import "./css/InputField.css";

const InputField = ({ label, value, onChange, onClear, inputRef }) => {
  return (
    <div className="input_wrap" id="id_wrap">
      <input
        ref={inputRef} // ref를 input에 연결
        type="text"
        id="id_input"
        class="login_input"
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      {value && <BsXCircleFill onClick={onClear} class="btn_clear" />}
      <label class="input_label" for="id_input">
        아이디 또는 전화번호
      </label>
    </div>
  );
};

export default InputField;
