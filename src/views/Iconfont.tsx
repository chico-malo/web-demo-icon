import * as React from 'react';
import "../style/iconFont.css"

export const IconFont = () => {
    return (
        <div className="iconfontContainer">
            <h1>iconfont</h1>
            <div>
                单色示例：
                <i className="iconfont">&#xe602;</i>
                <i className="iconfont">&#xe7cd;</i>
            </div>
            <div>
                彩色示例：
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-002-flower-1"/>
                </svg>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-001-easter"/>
                </svg>
            </div>
            <div>
                hover示例：
                <i className="iconfont hover-b">&#xe7cd;</i>
                <i className="iconfont hover-s">&#xe7cd;</i>
                <svg className="icon hover-o" aria-hidden="true">
                    <use xlinkHref="#icon-001-easter"/>
                </svg>
            </div>
        </div>
    )
};