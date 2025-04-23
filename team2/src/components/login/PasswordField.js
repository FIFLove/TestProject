import React, { useState } from "react";
import { BsXCircleFill, BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

import "./css/PasswordField.css";

const PasswordField = ({ label, value, onChange, onClear, inputRef }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    onClear();
    // ❌ 포커스 주지 않음
  };

  const toggleShow = () => {
    setShowPassword((prev) => !prev);
    // 👁 포커스 유지
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="input_wrap" id="pw_wrap">
      <input
        ref={inputRef} // ref를 input에 연결
        id="pw_input"
        className="login_input"
        maxLength={16}
        type={showPassword ? "text" : "password"}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      {value && (
        <>
          <BsXCircleFill
            onClick={handleClear}
            className="btn_clear"
            id="pw_clear"
          />
          {showPassword ? (
            <BsEyeFill
              onClick={toggleShow}
              className="btn_toggle_pw"
              id="pw_toggle"
            />
          ) : (
            <BsEyeSlashFill
              onClick={toggleShow}
              className="btn_toggle_pw"
              id="pw_toggle"
            />
          )}
        </>
      )}
      <label className="input_label" htmlFor="pw_input">
        비밀번호
      </label>
    </div>
  );
};

export default PasswordField;
