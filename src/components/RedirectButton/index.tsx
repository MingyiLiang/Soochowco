import React from 'react';
require('./index.css');

interface OwnProps {
    url: string;
    onDark: boolean;
    value: string | JSX.Element;
}

type Props = OwnProps;

const RedirectButtonFunc: React.FunctionComponent<Props> = (props) => {
    const {url, onDark, value} = props;
    const buttonClassName = onDark ? "btn-on-dark" : "btn-on-light";
    return (
        <div id="redirect-button">
            <a 
                className={buttonClassName}
                href={url}
            >
                {value}
            </a>
        </div>
    )
}

export const RedirectButton = RedirectButtonFunc;