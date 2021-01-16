import { size } from 'lodash';
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
                            <div><a href="/apparel">Apparel</a></div>
                            <div><a href="/collection">Coat</a></div>
                            <div><a href="/collection">Trousers</a></div>
                            <div><a href="/collection">Footwear</a></div>
                            <div><a href="/collection">Accessories</a></div>
                            <div><a href="/collection">Collection</a></div>
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

                <section className="site-footer__copyright">
                    <div className="site-footer__copyright__content">
                        <div style={{marginRight:"1rem"}}>苏州织勤服饰有限公司版权所有</div>
                        <div>
                            <a href="https://beian.miit.gov.cn" style={{color:"#7e7e7e"}}>苏ICP备20004184号</a>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export const SoochowFooter = SoochowFooterFunc;
