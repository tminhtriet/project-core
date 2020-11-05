import React from "react";
import {Switch, Route} from "react-router-dom";

import routes from "../../routes";
import App from "../../containers/App";

const FadingRoute = ({component: Component, routes, ...rest}) => (
    <Route {...rest} render={props => (
        <Component {...props} routes={routes}/>
    )}/>
);

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
        // eslint-disable-next-line react/prop-types
        const {location} = this.props;
        return (
            <App location={location} routes={routes}>
                {this.renderRouter(routes, location)}
            </App>
        );
    }
}