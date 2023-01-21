import React from 'react';

const NextArrow = (props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`slick-arrow slick-next ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-right"></i>
            )}
        </a>
    );
};

export default NextArrow;
