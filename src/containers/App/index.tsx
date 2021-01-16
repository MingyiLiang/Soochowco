import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { SoochowFooter } from './components/SiteFooter';
import { SoochowHeader } from './components/SiteHeader';
import { SoochowMainContent } from './components/SiteMainContent';
import { ShopCollection } from './components/Product/collection';
import { ShopApparel } from './components/Product/apparel';

interface OwnProps {}

type StateProps = {
    fatalError: string;
    currentPath: string;
    userInfo: string;
}

type Props = OwnProps & StateProps;

export function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
}

export class App extends React.PureComponent<Props> {
    render() {
        return (
            <>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <SoochowHeader/>
                    <Switch>
                        <Route exact path="/" component={SoochowMainContent}/>
                        <Route exact path="/apparel"component={ShopCollection}/>
                        <Route path="/collection" component={ShopApparel}/>
                    </Switch>
                    <SoochowFooter/>
                    {/* <SoochowRecordCase/> */}
                </BrowserRouter>
            </>
        )
    }
}

const ConnectedApp = withRouter(connect(mapDispatchToProps)(App) as any);

export default hot(module)(ConnectedApp) as any;


