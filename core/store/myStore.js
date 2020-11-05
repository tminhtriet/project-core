(function test(){
    let store = undefined;

    exports.init = (configureStore) => {
        store = configureStore();
    };

    exports.getStore = () => {
        return store;
    };
}());