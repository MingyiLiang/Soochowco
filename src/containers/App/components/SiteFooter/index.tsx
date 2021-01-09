import React from 'react';
import FooterEmailSignupFunc from './components/emailSignup'
require('./index.css')
interface OwnProps {}

type Props = OwnProps;

const SoochowFooterFunc: React.FunctionComponent<Props> = (props) => {
    return (
        <div id="shopify-section-footer">
            <footer id="site-footer">
                <nav id="site-footer__nav">
                    <ul id="site-footer__links">
                        <div id="site-footer__parent">
                            <div>SHOP</div>
                            <div><a href="https://mingyiliang.github.io/soochow/apparel">Apparel</a></div>
                            <div><a href="https://mingyiliang.github.io/soochow/collection">Coat</a></div>
                            <div><a href="https://mingyiliang.github.io/soochow/collection">Trousers</a></div>
                            <div><a href="https://mingyiliang.github.io/soochow/collection">Footwear</a></div>
                            <div><a href="https://mingyiliang.github.io/soochow/collection">Accessories</a></div>
                            <div><a href="https://mingyiliang.github.io/soochow/collection">Collection</a></div>
                        </div>
                        <div id="site-footer__parent">
                            <div>SOOCHOW CO</div>
                            <div>About</div>
                            <div>News</div>
                            <div>Location</div>
                            <div>Contact Us</div>
                        </div>
                        <div id="site-footer__parent">
                            <div>LEARN</div>
                            <div>Footwear Sizing</div>
                            <div>Apparel Sizing</div>
                            <div>Returns/Exchanges</div>
                            <div>FAQs</div>
                        </div>
                        <div id="site-footer__parent">
                            <div>SUPPORT</div>
                            <div>Cookie Policy</div>
                            <div>Privacy Statement</div>
                        </div>
                    </ul>
                </nav>
                <section id="email-signup">
                    <FooterEmailSignupFunc/>
                </section>
            </footer>
        </div>
    )
}

export const SoochowFooter = SoochowFooterFunc;
