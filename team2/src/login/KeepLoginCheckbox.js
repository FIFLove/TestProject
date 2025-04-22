import React from 'react';

const KeepLoginCheckbox = () => {
    return (
        <div class="btn_group">
            <div class="keep_check">
                <input
                    type="checkbox"
                    id="keep"
                    class="input_keep"
                    defaultChecked
                />
                <label htmlFor="keep" class="keep_text">로그인 상태 유지</label>
            </div>
        </div>
    );
};

export default KeepLoginCheckbox;