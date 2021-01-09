import React from 'react';
import { DisplayCard, DisplayImage } from '../../../../../components/DisplayCard';
import { FilterMenu } from '../../filterMenu';
require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const ShopApparelFunc: React.FunctionComponent<Props> = (props) => {
    const displayImageForCollectionChenQiang: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_5-a.jpeg",
            alt: "suzhou_museum_5-a"
        },
        {
            src: "./images/suzhou_museum_5-b.jpeg",
            alt: "suzhou_museum_5-b"
        },
        {
            src: "./images/suzhou_museum_5-c.jpeg",
            alt: "suzhou_museum_5-c"
        }
    ];

    const displayImageForCollectionWindow: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_6-a.jpeg",
            alt: "suzhou_museum_6-a"
        },
        {
            src: "./images/suzhou_museum_6-b.jpeg",
            alt: "suzhou_museum_6-b"
        }
    ];

    const displayImageForCollectionRiver: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_7-a.jpeg",
            alt: "suzhou_museum_7-a"
        },
        {
            src: "./images/suzhou_museum_7-b.jpeg",
            alt: "suzhou_museum_7-b"
        },
        {
            src: "./images/suzhou_museum_7-c.jpeg",
            alt: "suzhou_museum_7-c"
        }
    ];

    const displayImageForCollectionInspiration: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_8-a.jpeg",
            alt: "suzhou_museum_8-a"
        },
        {
            src: "./images/suzhou_museum_8-b.jpeg",
            alt: "suzhou_museum_8-b"
        },
        {
            src: "./images/suzhou_museum_8-c.jpeg",
            alt: "suzhou_museum_8-c"
        }
    ];

    const displayImageForCollectionSeed: DisplayImage[] = [
        {
            src: "./images/suzhou_museum_9-a.jpeg",
            alt: "suzhou_museum_9-a"
        },
        {
            src: "./images/suzhou_museum_9-b.jpeg",
            alt: "suzhou_museum_9-b"
        },
        {
            src: "./images/suzhou_museum_9-c.jpeg",
            alt: "suzhou_museum_9-c"
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
                                        SOOCHOW CO COLLECTION FOR SUZHOU MUSEUM
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <ul className="collection-products">
                            <DisplayCard 
                                productName="SOOCHOW CO 贝聿铭建筑物语几何卫衣情侣款卫衣"
                                categery="collection"
                                color="彩色拼接"
                                price={268}
                                imageSrcs={displayImageForCollectionChenQiang}
                                id="suzhou-chen-qiang-collection"
                            />
                            <DisplayCard 
                                productName="SOOCHOW CO 双喜牛奶系列情侣卫衣"
                                categery="collection"
                                color="黑色/白色"
                                price={268}
                                imageSrcs={displayImageForCollectionWindow}
                                id="suzhou-window-collection"
                            />
                            <DisplayCard 
                                productName="SOOCHOW CO 贝聿铭建筑物语光影卫衣加厚加绒连帽打底衫情侣卫衣"
                                categery="collection"
                                color="黑色"
                                price={268}
                                imageSrcs={displayImageForCollectionRiver}
                                id="suzhou-river-collection"
                            />
                            <DisplayCard 
                                productName="SOOCHOW CO 贝聿铭建筑物语灵感卫衣男女同款卫衣秋冬加绒打底衫"
                                categery="collection"
                                color="黑色"
                                price={205}
                                imageSrcs={displayImageForCollectionInspiration}
                                id="suzhou-inspiration-collection"
                            />
                            <DisplayCard 
                                productName="SOOCHOW CO 贝聿铭建筑物语萌芽卫衣男女同款卫衣加绒连帽打底衫"
                                categery="collection"
                                color="白色"
                                price={232}
                                imageSrcs={displayImageForCollectionSeed}
                                id="suzhou-seed-collection"
                            />
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}

export const ShopApparel = ShopApparelFunc;


