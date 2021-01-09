import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

require("./index.css");

interface OwnProps {
    productName: string;
    categery: string;
    color: string;
    price: number;
    id: string;
    imageSrcs: DisplayImage[];
}

export interface DisplayImage {
    src: string;
    alt: string;
}

type Props = OwnProps;

const DisplayCardFunc: React.FunctionComponent<Props> = (props) => {
    const { productName, color, price, imageSrcs, id } = props;

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="collection-product">
            <div className="product-card">
                <div className="product-card__image-carousel">
                    <Slider {...sliderSetting} id="display-card-slider">
                        {imageSrcs.map((image) => {
                            return(
                                <img src={require(`${image.src}`)} id={id} alt={image.alt}/>
                            )
                        })}
                    </Slider>
                </div>
                <div className="product-card_information">
                    <h1 className="product-card__title">
                        {productName}
                    </h1>
                    <h2 className="product-card__color">{color}</h2>
                    <span className="product-card__price">
                        ￥{price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export const DisplayCard = DisplayCardFunc;