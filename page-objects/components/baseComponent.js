const superdebug = require("superdebug");

const env = require("../../env/variables.ENV");

class BaseComponent{
    constructor(){
        this._baseUrl = env.baseUrl;
        this._auth = env.authKeys;
        this._debug = superdebug();
    }
}

module.exports = BaseComponent;