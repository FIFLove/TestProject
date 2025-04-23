import React, { useState } from "react";
import "./css/KeepLoginCheckbox.css";

const KeepLoginCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="btn_group">
      <div className="keep_check" onClick={() => setChecked(!checked)}>
        <span className={`check_icon ${checked ? "checked" : ""}`}>
          <i
            className={`bi ${
              checked ? "bi-check-circle-fill" : "bi-check-circle"
            }`}
          ></i>
        </span>
        <label className="keep_text">로그인 상태 유지</label>
      </div>
    </div>
  );
};

export default KeepLoginCheckbox;
