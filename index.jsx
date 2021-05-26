import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { IconCssSprites } from "./src/views/IconCssSprites";
import { IconFont } from "./src/views/Iconfont";
import "./src/style/index.css"

class App extends React.Component {
    render() {
        return (
            <div className="application">
                <IconCssSprites/>
                <IconFont/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('application')
);