import * as React from 'react';
import { useState } from 'react';
import '@icon-park/react/styles/index.css';
import { ArrowCircleRight, DEFAULT_ICON_CONFIGS, Excel, FilePdfOne, FilePpt, IconProvider } from "@icon-park/react";

import "../style/iconPark.css"

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export const IconPark = () => {
    // 颜色
    const [stateIsFill, setIsFill] = useState(false)
    const initColor = ['#333', '#2F88FF'];
    const [stateFill, setFill] = useState(initColor)
    const onExcelClick = () => {
        const isFill = !stateIsFill;
        const fill = isFill ? ['#f8e71c', '#242424'] : initColor
        setFill(fill)
        setIsFill(isFill)
    }

    // 旋转
    const [stateSpin, setSpin] = useState(false)
    const onExcelSpin = () => {
        setSpin(!stateSpin)
    }

    return (
        <div className="iconParkContainer">
            <h1>iconPark</h1>
            <div>
                示例：
                <IconProvider value={IconConfig}>
                    <ArrowCircleRight theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="miter"
                                      strokeLinecap="square"/>
                    <FilePdfOne theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="miter"
                                strokeLinecap="square"/>
                    <FilePpt theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="miter"
                             strokeLinecap="square"/>
                    <Excel theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="miter"
                           strokeLinecap="square"
                    />
                </IconProvider>
            </div>
            <div>
                hover示例：
                <Excel theme="multi-color" size="24" fill={stateFill} strokeLinejoin="miter"
                       strokeLinecap="square"
                       onClick={onExcelClick}
                       className="icon-park-excel"
                />

                <Excel theme="two-tone" size="24" fill={initColor} strokeLinejoin="miter"
                       strokeLinecap="square"
                       spin={stateSpin}
                       onClick={onExcelSpin}
                       className="icon-park-excel"
                />


            </div>
        </div>
    )
};