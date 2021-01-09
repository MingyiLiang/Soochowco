import React from 'react';
import {RedirectButton} from '../../../../../../components/RedirectButton';

require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const SoochowMainFootwareEntryFunc: React.FunctionComponent<Props> = (props) => {
    return (
        <div id="shopify-section-footware">
            <section id="landing_shop_image_section_footware">
                <div id="landing_image_footware-container">
                  <img src={require('./Soochow_Main_Footwear_Entry.jpeg')} id="landing_image_footware" alt="Soochow CO Footware"/>
                </div>
                <div id="homepage-shopping-entry_footware">
                    <div id="homepage-shopping-entry-content_footware">
                        <h1>SOOCHOW CO</h1>
                        <p>Soochow Co's signature footware series.</p>
                        <div id="homepage-btn-container_footware">
                            <RedirectButton url="https://mingyiliang.github.io/soochow/collection" onDark={false} value="SHOP SOOCHOW.CO FOOTWARE"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const SoochowMainFootwareEntry = SoochowMainFootwareEntryFunc;