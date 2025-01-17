import React from "react";
import {createRoot} from 'react-dom/client';
import App from './pages/App';
import {getParam, setParam} from "./Param";



const myAppId = document.getElementById('myapp')!;
const root = createRoot(myAppId);
const basename = myAppId.dataset.path;
setParam( 'basename',basename);
console.log(getParam('basename'));

root.render(<App basename={basename!}/>);
