import React from 'react';
import { DisplayCard, DisplayImage } from '../../../../../components/DisplayCard';
import { FilterMenu } from '../../filterMenu';
require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const ShopCollectionFunc: React.FunctionComponent<Props> = (props) => {
    const displayImageForCollectionChenQiang: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_1-a.jpeg",
            alt: "suzhou_museum_1-a"
        },
        {
            src: "./images/suzhou_museum_1-b.jpeg",
            alt: "suzhou_museum_1-b"
        },
        {
            src: "./images/suzhou_museum_1-c.jpeg",
            alt: "suzhou_museum_1-c"
        }
    ];

    const displayImageForCollectionWindow: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_2-a.jpeg",
            alt: "suzhou_museum_2-a"
        },
        {
            src: "./images/suzhou_museum_2-b.jpeg",
            alt: "suzhou_museum_2-b"
        },
        {
            src: "./images/suzhou_museum_2-c.jpeg",
            alt: "suzhou_museum_2-c"
        }
    ];

    const displayImageForCollectionRiver: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_3-a.jpeg",
            alt: "suzhou_museum_3-a"
        },
        {
            src: "./images/suzhou_museum_3-b.jpeg",
            alt: "suzhou_museum_3-b"
        },
        {
            src: "./images/suzhou_museum_3-c.jpeg",
            alt: "suzhou_museum_3-c"
        }
    ];

    const displayImageForCollectionNoodle: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_4-a.jpeg",
            alt: "suzhou_museum_4-a"
        },
        {
            src: "./images/suzhou_museum_4-b.jpeg",
            alt: "suzhou_museum_4-b"
        },
        {
            src: "./images/suzhou_museum_4-c.jpeg",
            alt: "suzhou_museum_4-c"
        }
    ];
    return(
        <main role="main" id="MainContent">
            <div id="collection-template">
                <section className="collection-content">
                    <FilterMenu/>
                    <div className="collection__right">
                        <div className="collection-header">
                            <div className="collection-header__card">
                                <div className="collection-header__content ">
                                    <h1 className="collection-header__title">
                                    LIVE IN THE VIBE OF SOOCHOW CO.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <ul className="collection-products">
                            <DisplayCard 
                                productName="原创国潮SOOCHOW CO.蘇潮製作 SS20 苏州特色城门男女同款"
                                categery="collection"
                                color="黑色/白色"
                                price={188}
                                imageSrcs={displayImageForCollectionChenQiang}
                                id="suzhou-chen-qiang-collection"
                            />
                            <DisplayCard 
                                productName="原创国潮 SOOCHOW CO.蘇潮製作 SS2020 苏州特色园林窗花男女同款"
                                categery="collection"
                                color="黑色/白色"
                                price={188}
                                imageSrcs={displayImageForCollectionWindow}
                                id="suzhou-window-collection"
                            />
                            <DisplayCard 
                                productName="原创国潮SOOCHOW CO.蘇潮製作 SS20 苏州特色小桥流水男女同款"
                                categery="collection"
                                color="黑色/白色"
                                price={188}
                                imageSrcs={displayImageForCollectionRiver}
                                id="suzhou-river-collection"
                            />
                            <DisplayCard 
                                productName="原创国潮 SOOCHOW CO.蘇潮製作 SS20 苏州特色苏面男女同款"
                                categery="collection"
                                color="黑色/白色"
                                price={188}
                                imageSrcs={displayImageForCollectionNoodle}
                                id="suzhou-noodle-collection"
                            />
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}

export const ShopCollection = ShopCollectionFunc;


