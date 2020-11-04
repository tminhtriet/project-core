import React from "react";
import { ROOT_APP } from "../core/constants/routes";
import LoginPageContainer from "./containers/LoginPageContainer/loginPageContainer";

const routes = [
    {
        path: ROOT_APP,
        exact: false,
        component: LoginPageContainer
    }
];

export default routes;