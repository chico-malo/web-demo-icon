import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { IconCssSprites } from "./src/views/IconCssSprites";

class App extends React.Component {
    render() {
        return (
            <div>
                <IconCssSprites/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('application')
);