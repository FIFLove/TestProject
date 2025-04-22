import React from 'react';

const SubmitButton = ({isActive}) => {

    return (
        <button
            type="submit"
            className={`btn_login ${isActive ? 'active' : ''}`}
            disabled={isActive}
        >
            로그인
        </button>
    );
};

export default SubmitButton;