import React from "react";
import PropTypes from "prop-types";

import * as myStore from "../../core/store/myStore";
import configureStore from "../../core/store/configureStore";

myStore.init(configureStore);

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fimo-app-wrapper">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;