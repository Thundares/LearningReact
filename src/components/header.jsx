import React from 'react';

function HeaderTemplate(props) {
    if(!props.length) {
        props.length = 0;
    }
    const items = [];
    const links = props.link;

    for (let index = 0; index < props.length; index++) {
        items.push(<a href={links[index]}>{props.text[index]}</a>);
    }

    return (
        <div>
            <header>
                {items}
            </header>
        </div>
    )
}

export default HeaderTemplate