const superdebug = require("superdebug");
const env = require("../env/production.ENV");

class BasePage{
    constructor(){
        this._baseUrl = env.baseUrl;
        this._auth = env.authKeys;
        this._debug = superdebug();
    }
}

module.exports = BasePage;