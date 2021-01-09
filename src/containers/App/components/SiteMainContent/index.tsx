import React from 'react';
import { SoochowMainCollectionEntry } from './components/MainCollectionEntry';
import { SoochowMainAccessoriesEntry } from './components/MainApparelEntry';
import { SoochowMainFootwareEntry } from './components/MainFootwearEntry';
require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const SoochowMainContentFunc: React.FunctionComponent<Props> = (props) => {
    return (
        <main role="main" id="main-content">
            <SoochowMainCollectionEntry/>
            <SoochowMainAccessoriesEntry/>
            <SoochowMainFootwareEntry/>
        </main>
    )
}

export const SoochowMainContent = SoochowMainContentFunc;