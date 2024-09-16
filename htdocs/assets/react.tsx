import React from "react";
import {createRoot} from 'react-dom/client';

import App from './pages/App';



const myAppId = document.getElementById('myapp')!;
const root = createRoot(myAppId);
const basename = myAppId.dataset.path;
root.render(<App basename={basename}/>);
