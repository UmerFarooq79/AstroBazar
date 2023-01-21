import React from 'react';

const WidgetUserWelcome = () => {
    return (
        <div className="ps-block--user-wellcome">
            <div className="ps-block__left">
                <img src="/img/user/admin.jpg" alt="" />
            </div>
            <div className="ps-block__right">
                <p>
                    Hello,<a href="#">sameed265</a>
                </p>
            </div>
            <div className="ps-block__action">
                <a href="#">
                    <i className="icon-exit"></i>
                </a>
            </div>
        </div>
    );
};

export default WidgetUserWelcome;
