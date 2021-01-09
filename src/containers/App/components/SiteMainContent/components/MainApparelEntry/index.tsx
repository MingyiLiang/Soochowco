import React from 'react';
import {RedirectButton} from '../../../../../../components/RedirectButton';

require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const SoochowMainAccessoriesEntryFunc: React.FunctionComponent<Props> = (props) => {
    return (
        <div id="shopify-section-apparel">
            <section id="landing_shop_image_section_apparel">
                <div id="anding_image_apparel-container">
                    <img src={require('./Soochow_Main_Apparel_Entry.jpeg')} id="landing_image_apparel" alt="Soochow CO Apparel"/>
                </div>
                <div id="homepage-shopping-entry_apparel">
                    <div id="homepage-shopping-entry-content_apparel">
                        <h1>SOOCHOW CO</h1>
                        <p>Soochow Co's signature apparel series.</p>
                        <div id="homepage-btn-container_apparel">
                            <RedirectButton url="/apparel" onDark={false} value="SHOP SOOCHOW.CO APPAREL"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const SoochowMainAccessoriesEntry = SoochowMainAccessoriesEntryFunc;