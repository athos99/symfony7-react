import React, {ReactNode, StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'

const NoStrictMode = (param: { children: React.ReactNode }) => {
    return <> {param.children}</>;
};
const rootElement = document.getElementById("root");
if (rootElement) {
    const basename = rootElement.dataset.path;
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App basename={basename}/>
        </StrictMode>
    );
}