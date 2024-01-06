import React from 'react';
import { createRoot } from 'react-dom/client';
function MyButton({ title, disabled }) {
    return React.createElement("button", { disabled: disabled }, title);
}
function MyApp() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hello World"),
        React.createElement(MyButton, { title: "Click me", disabled: true })));
}
const root = createRoot(document.getElementById('app'));
root.render(React.createElement(MyApp, null));
