import React, {useState} from 'react';
import {BsXCircleFill, BsEyeSlashFill, BsEyeFill} from "react-icons/bs";

const PasswordField = ({ label, value, onChange, onClear }) => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div class="input_wrap" id="pw_wrap">
            <input
                id="pw_input"
                class="login_input"
                maxLength={16}
                type={showPassword ? "text" : "password"}
                placeholder={label}
                value={value}
                onChange={onChange}
            />
            {value && (
                <>
                    <BsXCircleFill
                        onClick={onClear}
                        class="btn_clear"
                        id="pw_clear"
                    />
                    {showPassword ? (
                        <BsEyeSlashFill
                            onClick={() => setShowPassword(false)}
                            class="btn_toggle_pw"
                            id="pw_toggle"
                        />
                    ) : (
                        <BsEyeFill
                            onClick={() => setShowPassword(true)}
                            class="btn_toggle_pw"
                            id="pw_toggle"
                        />
                    )}
                </>
            )}
            <label className="input_label" htmlFor="pw_input">비밀번호</label>
        </div>
    );
};

export default PasswordField;