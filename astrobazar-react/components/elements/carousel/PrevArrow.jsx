import React from 'react';

const PrevArrow = (props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`slick-arrow slick-prev ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-left"></i>
            )}
        </a>
    );
};

export default PrevArrow;
