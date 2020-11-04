import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import {ROOT_APP} from "../core/constants/routes";
import * as myStore from "../core/store/myStore";

import MainAppContainer from "./containers/MainAppContainer/mainAppContainer";

const store = myStore.getStore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path={ROOT_APP} component={MainAppContainer} />
                </BrowserRouter>
            </Provider>
        );
    }
} 