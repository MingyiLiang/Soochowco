import React, { useEffect, useState } from 'react';
require('./index.css');

interface OwnProps {
    placeHolder: string;
    dropdownOptions: string[];
}

type Props = OwnProps;

const DropdownMenuFunc: React.FunctionComponent<Props> = (props) => {
    const { placeHolder, dropdownOptions } = props;
    const [collapsed, updateCollapsed] = useState(false);
    const [className, updateClassName] = useState("scroll-content__header");
    const [ulStyle, updateUlStyle] = useState({display: "block"});

    useEffect(() => {
        if (collapsed) {
            updateClassName("scroll-content__header hide-content");
            updateUlStyle({display: 'none'});
        } else {
            updateClassName("scroll-content__header");
            updateUlStyle({display: 'block'});
        }
    }, [collapsed, updateCollapsed])

    return(
        <div id="filter-menu__collection-list">
            <button 
                className={className}
                aria-label="Expand Accordion"
                onClick={() => {
                    updateCollapsed(!collapsed);
                }}
            >
                {placeHolder}
            </button>
            <ul
                className="scroll-content__content"
                style={ulStyle}
            >
                {dropdownOptions.map((option) => {
                    return(
                        <li>
                            <a href="https://mingyiliang.github.io/soochow/">{option}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export const DropdownMenu = DropdownMenuFunc;