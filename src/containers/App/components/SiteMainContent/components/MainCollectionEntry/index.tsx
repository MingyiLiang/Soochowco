import React from 'react';
import {RedirectButton} from '../../../../../../components/RedirectButton';
require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const SoochowMainCollectionEntryFunc: React.FunctionComponent<Props> = (props) => {
    return (
        <div id="shopify-section-collections">
            <section id="homepage-collection">
                <div id="suzhou-museum-collection_background">
                    <img src={require('./suzhou_museum_collection_main.jpeg')} id="landing_image" alt="Suzhou Museum Collection"/>
                </div>
                <div id="homepage-shopping-entry">
                    <h1>SOOCHOW CO</h1>
                    <p>Suzhou Museum Collection</p>
                    <div id="homepage_btn-container-collection">
                        <RedirectButton url="https://mingyiliang.github.io/soochow/collection" onDark={true} value="SHOP THE COLLECTION"/>
                        <RedirectButton url="https://mingyiliang.github.io/soochow/apparel" onDark={true} value="SHOP SOOCHOW.CO APPAREL"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const SoochowMainCollectionEntry = SoochowMainCollectionEntryFunc;