import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../../routes";
import App from "../../containers/App";

const FadingRoute = ({component: Component, routes, ...rest}) => {
    <Route {...rest} render={props => (
        <Component {...props} routes={routes} />
    )}/>
};

export default class MainAppView extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRouter(routes, location) {
        let res = null;
        if (routes.length > 0) {
            res = routes.map((route, index) => (
                <FadingRoute 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    routes={route.routes || []}
                />
            ));
        }
        return (
            <Switch location={location}>
                {res}
            </Switch>
        );
    }

    render() {

        return(
            <App location={this.props.location} routes={routes}>
                {this.renderRouter(routes, this.props.location)}
            </App>
        );
    }
}