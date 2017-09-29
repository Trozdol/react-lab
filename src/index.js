import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = [{
    id: 1,
    name: 'Blog',
    link: 'https://trozlabs.com'
}, {
    id: 2,
    name: 'GitHub',
    link: 'https://github.com/Trozdol'
}, {
    id: 3,
    name: 'Twitter',
    link: 'https://twitter.com/trozdol'
}];


function Menu (props) {

    const menuItems = props.items.map((item) => <a className={'menu-item menu-item-' + item.id} href={item.link}>{item.name}</a>);

    return (
        <nav className="menu">{menuItems}</nav>
    );
}

ReactDOM.render(
    <Menu items={data} />,
    document.getElementById('root')
);
