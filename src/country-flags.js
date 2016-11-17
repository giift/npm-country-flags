class CountryFlags
{
    constructor(assets_uri) {
        this.scales_ = {
            'small':'',
            'medium':'250px',
            'large':'1000px'
        };
        this.countries_ = require('../countries.js');
        this.assets_uri = assets_uri;
    }

    getName(code) {
        if (this.countries_[code] !== undefined) {
            return this.countries_[code];
        }
        return null;
    }

    getFlagPngUri(code, scale) {
        if (this.countries_[code] !== undefined) {
            code = code.toLowerCase();
            if (scale === undefined || this.scales_[scale] === undefined) {
                scale = this.scales_['medium'];
            }
            else {
                scale = this.scales_[scale];
            }

            window.console.log(scale);

            return this.assets_uri+'/png/'+scale+'/'+code+'.png';
        }
        return null;
    }

    getFlagSvgUri(code) {
        if (this.countries_[code] !== undefined) {
            code = code.toLowerCase();
            return this.assets_uri+'/svg/'+code+'.svg';
        }
        return null;
    }
}

module.exports = CountryFlags;
