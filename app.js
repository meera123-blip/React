
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
    "h1",
    {
        id: "head1",
    },
    'hello world-one'
);

const heading2 = React.createElement(
    "h2",
    {
        id: "head2",
    },
    'hello-world-one'
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1, heading2]
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
