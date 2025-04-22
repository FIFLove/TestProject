import React, {useState} from 'react';
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import KeepLoginCheckbox from "./KeepLoginCheckbox";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const isValid = userId !== "" && password !== "";

    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리
    };

    return (
        <main id="container" >
            <section className="content">
                <form
                    onSubmit={handleSubmit}
                    className="login_form"
                >
                    <InputField
                        label=""
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        onClear={() => setUserId("")}
                    />
                    <PasswordField
                        label=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onClear={() => setPassword("")}
                    />
                    <KeepLoginCheckbox />
                    <SubmitButton isActive={isValid} />
                </form>
            </section>
        </main>
    );
};

export default LoginForm;