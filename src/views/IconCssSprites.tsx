import * as React from 'react';
import "../style/iconCssSprites.css"

export const IconCssSprites = () => {
    return (
        <ul className="Sprites">
            <h1>css Sprites</h1>
            我是原图：
            <div className="cssBack"/>

            我是实例：
            <li><span className="a1"/><a href="#">WORD文章标题</a></li>
            <li><span className="a2"/><a href="#">PPT内容标题</a></li>
            <li><span className="a3"/><a href="#">Excel内容标题</a></li>
            <li><span className="a4"/><a href="#">PDF内容标题</a></li>
            <li><span className="a5"/><a href="#">文本文档标题</a></li>
        </ul>
    )
};