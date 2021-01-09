import React from 'react';
import {Icon} from 'semantic-ui-react';
require('./index.css');

interface OwnProps {}

type Props = OwnProps;

//const block: Block = new Block('shopify-section-header');

const SoochowHeaderFunc: React.FunctionComponent<Props> = (props) => {
    return (
      <div id="shopify-section-header">
        <section id="header-section">
          <header id="site-header"> 
            <div id="logo">
              <a href="/">
                SOOCHOW CO
              </a> 
            </div>
            <nav id="main-nav">
              <ul id="nav-list">
                <div><a href={process.env.PUBLIC_URL + '/apparel'}>APPAREL</a></div>
                <div><a href="/apparel">COAT</a></div>
                <div><a href="/apparel">TROUSERS</a></div>
                <div><a href="/apparel">FOOTWEAR</a></div>
                <div><a href="/apparel">ACCESSORIES</a></div>
                <div><a href="/collection">COLLECTION</a></div>
            
                <Icon name='user'/>
                <Icon name='shopping bag'/>
                <Icon name='search'/>
              </ul>
            </nav>
          </header>
        </section>
      </div>
    );
}

export const SoochowHeader = SoochowHeaderFunc;