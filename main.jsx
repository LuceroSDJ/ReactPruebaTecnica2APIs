import {createRoot} from 'react-dom/client';
import React from 'react';
import  {App} from './src/App.jsx';

// After Babel transformed your code which is written with JSX elements,
//  into the React.createElement calls, you can see where React is used. 
//  If you forget to import React, it will be undefined and the createElementcall will fail.

const root = createRoot(document.getElementById('app'));
root.render(<App />);
