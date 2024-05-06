import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {
    enable as enableDarkMode,
    disable as disableDarkMode,
    auto as followSystemColorScheme,
    exportGeneratedCSS as collectCSS,
    isEnabled as isDarkReaderEnabled
} from 'darkreader';
import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

root.render(<App />);
console.log('lol titty boi');

serviceWorkerRegistration.register();
