import React from 'react';

const CustomPagination = () => {
    return (
        <div className="ps-pagination">
            <ul className="pagination">
                <li className="active">
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li>
                    <a href="#">
                        Next Page
                        <i className="icon-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CustomPagination;
