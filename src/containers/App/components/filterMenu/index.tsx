import React from 'react';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { Dropdown } from 'semantic-ui-react';
require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const FilterMenuFunc: React.FunctionComponent<Props> = (props) => {
    const collectionOptions = ["Suzhou Museum", "Wenzheng Collage", "Tongli National Wetland Park"];
    const categoryOptions = ["Footware", "Apparel", "Coat", "Trousers", "Accessories"];
    const sortByOptions = [
        {
            key: 'PRICE: LOW TO HIGH',
            value: 'PRICE: LOW TO HIGH',
            text: 'PRICE: LOW TO HIGH'
        },
        {
            key: 'PRICE: HIGH TO LOW',
            value: 'PRICE: HIGH TO LOW',
            text: 'PRICE: HIGH TO LOW',
        },
        {
            key: 'A-Z',
            value: 'A-Z',
            text: 'A-Z',
        },
        {
            key: 'Z-A',
            value: 'Z-A',
            text: 'Z-A',
        }
    ];

    return (
        <div id="filter-menu-drawer">
            <div id="filter-menu-overflow-container">
                <DropdownMenu placeHolder="VIEW ALL COLLECTIONS" dropdownOptions={collectionOptions}/>
                <Dropdown selection placeholder="SORT BY" options={sortByOptions} fluid/>
                <DropdownMenu placeHolder="CATEGORY" dropdownOptions={categoryOptions}/>
            </div>
        </div>
    )
}

export const FilterMenu = FilterMenuFunc;