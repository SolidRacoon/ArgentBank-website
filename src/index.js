// index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// Utilise createRoot depuis react-dom/client
const root = createRoot(rootElement);

root.render(<App />);
