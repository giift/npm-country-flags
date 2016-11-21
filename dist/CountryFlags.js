(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CountryFlags = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = (_module$exports = {
    'AD': 'Andorra',
    'AE': 'United Arab Emirates',
    'AF': 'Afghanistan',
    'AG': 'Antigua and Barbuda',
    'AI': 'Anguilla',
    'AL': 'Albania',
    'AM': 'Armenia',
    'AO': 'Angola',
    'AR': 'Argentina',
    'AS': 'American Samoa',
    'AT': 'Austria',
    'AU': 'Australia',
    'AW': 'Aruba',
    'AX': '\xC5land Islands',
    'AZ': 'Azerbaijan',
    'BA': 'Bosnia and Herzegovina',
    'BB': 'Barbados',
    'BD': 'Bangladesh',
    'BE': 'Belgium',
    'BF': 'Burkina Faso',
    'BG': 'Bulgaria',
    'BH': 'Bahrain',
    'BI': 'Burundi',
    'BJ': 'Benin',
    'BM': 'Bermuda',
    'BN': 'Brunei Darussalam',
    'BO': 'Bolivia, Plurinational State of',
    'BR': 'Brazil',
    'BS': 'Bahamas',
    'BT': 'Bhutan',
    'BW': 'Botswana',
    'BY': 'Belarus',
    'BZ': 'Belize',
    'CA': 'Canada',
    'CC': 'Cocos (Keeling) Islands',
    'CD': 'Congo, the Democratic Republic of the',
    'CF': 'Central African Republic',
    'CG': 'Congo',
    'CH': 'Switzerland',
    'CI': 'C\xF4te d\'Ivoire',
    'CK': 'Cook Islands',
    'CL': 'Chile',
    'CM': 'Cameroon',
    'CN': 'China',
    'CO': 'Colombia',
    'CR': 'Costa Rica',
    'CU': 'Cuba',
    'CV': 'Cape Verde',
    'CW': 'Cura\xE7ao',
    'CX': 'Christmas Island',
    'CY': 'Cyprus',
    'CZ': 'Czech Republic',
    'DE': 'Germany',
    'DJ': 'Djibouti',
    'DK': 'Denmark',
    'DM': 'Dominica',
    'DO': 'Dominican Republic',
    'DZ': 'Algeria',
    'EC': 'Ecuador',
    'EE': 'Estonia',
    'EG': 'Egypt',
    'ER': 'Eritrea',
    'ES': 'Spain',
    'ET': 'Ethiopia',
    'FI': 'Finland',
    'FJ': 'Fiji',
    'FK': 'Falkland Islands (Malvinas)',
    'FM': 'Micronesia, Federated States of',
    'FO': 'Faroe Islands',
    'FR': 'France',
    'GA': 'Gabon',
    'GB': 'United Kingdom',
    'GD': 'Grenada',
    'GE': 'Georgia',
    'GG': 'Guernsey',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GL': 'Greenland',
    'GM': 'Gambia',
    'GN': 'Guinea',
    'GQ': 'Equatorial Guinea',
    'GR': 'Greece',
    'GS': 'South Georgia and the South Sandwich Islands',
    'GT': 'Guatemala',
    'GU': 'Guam',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HK': 'Hong Kong',
    'HN': 'Honduras',
    'HR': 'Croatia',
    'HT': 'Haiti',
    'HU': 'Hungary',
    'ID': 'Indonesia',
    'IE': 'Ireland',
    'IL': 'Israel',
    'IM': 'Isle of Man',
    'IN': 'India',
    'IO': 'British Indian Ocean Territory',
    'IQ': 'Iraq',
    'IR': 'Iran, Islamic Republic of',
    'IS': 'Iceland',
    'IT': 'Italy',
    'JE': 'Jersey',
    'JM': 'Jamaica',
    'JO': 'Jordan',
    'JP': 'Japan',
    'KE': 'Kenya',
    'KG': 'Kyrgyzstan',
    'KH': 'Cambodia',
    'KI': 'Kiribati',
    'KM': 'Comoros',
    'KN': 'Saint Kitts and Nevis',
    'KP': 'Korea, Democratic People\'s Republic of',
    'KR': 'Korea, Republic of',
    'KW': 'Kuwait',
    'KY': 'Cayman Islands',
    'KZ': 'Kazakhstan',
    'LA': 'Lao People\'s Democratic Republic',
    'LB': 'Lebanon',
    'LC': 'Saint Lucia',
    'LI': 'Liechtenstein',
    'LK': 'Sri Lanka',
    'LR': 'Liberia',
    'LS': 'Lesotho',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'LV': 'Latvia',
    'LY': 'Libya',
    'MA': 'Morocco',
    'MC': 'Monaco',
    'MD': 'Moldova, Republic of',
    'ME': 'Montenegro',
    'MG': 'Madagascar',
    'MH': 'Marshall Islands',
    'MK': 'Macedonia, the former Yugoslav Republic of',
    'ML': 'Mali',
    'MM': 'Myanmar',
    'MN': 'Mongolia',
    'MO': 'Macao',
    'MP': 'Northern Mariana Islands',
    'MZ': 'Martinique',
    'MR': 'Mauritania',
    'MS': 'Montserrat',
    'MT': 'Malta',
    'MU': 'Mauritius',
    'MV': 'Maldives',
    'MW': 'Malawi',
    'MX': 'Mexico',
    'MY': 'Malaysia'
}, _defineProperty(_module$exports, 'MZ', 'Mozambique'), _defineProperty(_module$exports, 'NA', 'Namibia'), _defineProperty(_module$exports, 'NC', 'New Caledonia'), _defineProperty(_module$exports, 'NE', 'Niger'), _defineProperty(_module$exports, 'NF', 'Norfolk Island'), _defineProperty(_module$exports, 'NG', 'Nigeria'), _defineProperty(_module$exports, 'NI', 'Nicaragua'), _defineProperty(_module$exports, 'NL', 'Netherlands'), _defineProperty(_module$exports, 'NO', 'Norway'), _defineProperty(_module$exports, 'NP', 'Nepal'), _defineProperty(_module$exports, 'NR', 'Nauru'), _defineProperty(_module$exports, 'NU', 'Niue'), _defineProperty(_module$exports, 'NZ', 'New Zealand'), _defineProperty(_module$exports, 'OM', 'Oman'), _defineProperty(_module$exports, 'PA', 'Panama'), _defineProperty(_module$exports, 'PE', 'Peru'), _defineProperty(_module$exports, 'PF', 'French Polynesia'), _defineProperty(_module$exports, 'PS', 'Palestine'), _defineProperty(_module$exports, 'PG', 'Papua New Guinea'), _defineProperty(_module$exports, 'PH', 'Philippines'), _defineProperty(_module$exports, 'PK', 'Pakistan'), _defineProperty(_module$exports, 'PL', 'Poland'), _defineProperty(_module$exports, 'PN', 'Pitcairn'), _defineProperty(_module$exports, 'PR', 'Puerto Rico'), _defineProperty(_module$exports, 'PT', 'Portugal'), _defineProperty(_module$exports, 'PW', 'Palau'), _defineProperty(_module$exports, 'PY', 'Paraguay'), _defineProperty(_module$exports, 'QA', 'Qatar'), _defineProperty(_module$exports, 'RE', 'Réunion'), _defineProperty(_module$exports, 'RO', 'Romania'), _defineProperty(_module$exports, 'RS', 'Serbia'), _defineProperty(_module$exports, 'RU', 'Russian Federation'), _defineProperty(_module$exports, 'RW', 'Rwanda'), _defineProperty(_module$exports, 'SA', 'Saudi Arabia'), _defineProperty(_module$exports, 'SB', 'Solomon Islands'), _defineProperty(_module$exports, 'SC', 'Seychelles'), _defineProperty(_module$exports, 'SD', 'Sudan'), _defineProperty(_module$exports, 'SE', 'Sweden'), _defineProperty(_module$exports, 'SG', 'Singapore'), _defineProperty(_module$exports, 'SH', 'Saint Helena, Ascension and Tristan da Cunha'), _defineProperty(_module$exports, 'SI', 'Slovenia'), _defineProperty(_module$exports, 'SK', 'Slovakia'), _defineProperty(_module$exports, 'SL', 'Sierra Leone'), _defineProperty(_module$exports, 'SM', 'San Marino'), _defineProperty(_module$exports, 'SN', 'Senegal'), _defineProperty(_module$exports, 'SO', 'Somalia'), _defineProperty(_module$exports, 'SR', 'Suriname'), _defineProperty(_module$exports, 'SS', 'South Sudan'), _defineProperty(_module$exports, 'ST', 'Sao Tome and Principe'), _defineProperty(_module$exports, 'SV', 'El Salvador'), _defineProperty(_module$exports, 'SX', 'Sint Maarten (Dutch part)'), _defineProperty(_module$exports, 'SY', 'Syrian Arab Republic'), _defineProperty(_module$exports, 'SZ', 'Swaziland'), _defineProperty(_module$exports, 'TC', 'Turks and Caicos Islands'), _defineProperty(_module$exports, 'TD', 'Chad'), _defineProperty(_module$exports, 'TF', 'French Southern Territories'), _defineProperty(_module$exports, 'TG', 'Togo'), _defineProperty(_module$exports, 'TH', 'Thailand'), _defineProperty(_module$exports, 'TJ', 'Tajikistan'), _defineProperty(_module$exports, 'TK', 'Tokelau'), _defineProperty(_module$exports, 'TL', 'Timor-Leste'), _defineProperty(_module$exports, 'TM', 'Turkmenistan'), _defineProperty(_module$exports, 'TN', 'Tunisia'), _defineProperty(_module$exports, 'TO', 'Tonga'), _defineProperty(_module$exports, 'TR', 'Turkey'), _defineProperty(_module$exports, 'TT', 'Trinidad and Tobago'), _defineProperty(_module$exports, 'TV', 'Tuvalu'), _defineProperty(_module$exports, 'TZ', 'Tanzania, United Republic of'), _defineProperty(_module$exports, 'TW', 'Taiwan, Province of China'), _defineProperty(_module$exports, 'UA', 'Ukraine'), _defineProperty(_module$exports, 'UG', 'Uganda'), _defineProperty(_module$exports, 'US', 'United States'), _defineProperty(_module$exports, 'UY', 'Uruguay'), _defineProperty(_module$exports, 'UZ', 'Uzbekistan'), _defineProperty(_module$exports, 'VA', 'Holy See (Vatican City State)'), _defineProperty(_module$exports, 'VC', 'Saint Vincent and the Grenadines'), _defineProperty(_module$exports, 'VE', 'Venezuela, Bolivarian Republic of'), _defineProperty(_module$exports, 'VG', 'Virgin Islands, British'), _defineProperty(_module$exports, 'VI', 'Virgin Islands, U.S.'), _defineProperty(_module$exports, 'VN', 'Viet Nam'), _defineProperty(_module$exports, 'VU', 'Vanuatu'), _defineProperty(_module$exports, 'WS', 'Samoa'), _defineProperty(_module$exports, 'YE', 'Yemen'), _defineProperty(_module$exports, 'ZA', 'South Africa'), _defineProperty(_module$exports, 'ZM', 'Zambia'), _defineProperty(_module$exports, 'ZW', 'Zimbabwe'), _module$exports);

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CountryFlags = function () {
    function CountryFlags(assets_uri) {
        _classCallCheck(this, CountryFlags);

        this.scales_ = {
            'small': '',
            'medium': '250px',
            'large': '1000px'
        };
        this.countries_ = require('../countries.js');
        this.assets_uri = assets_uri;
    }

    _createClass(CountryFlags, [{
        key: 'getName',
        value: function getName(code) {
            if (this.countries_[code] !== undefined) {
                return this.countries_[code];
            }
            return null;
        }
    }, {
        key: 'getFlagPngUri',
        value: function getFlagPngUri(code, scale) {
            if (this.countries_[code] !== undefined) {
                code = code.toLowerCase();
                if (scale === undefined || this.scales_[scale] === undefined) {
                    scale = this.scales_['medium'];
                } else {
                    scale = this.scales_[scale];
                }

                return this.assets_uri + '/png/' + scale + '/' + code + '.png';
            }
            return null;
        }
    }, {
        key: 'getFlagSvgUri',
        value: function getFlagSvgUri(code) {
            if (this.countries_[code] !== undefined) {
                code = code.toLowerCase();
                return this.assets_uri + '/svg/' + code + '.svg';
            }
            return null;
        }
    }]);

    return CountryFlags;
}();

module.exports = CountryFlags;

},{"../countries.js":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb3VudHJpZXMuanMiLCJzcmMvY291bnRyeS1mbGFncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE9BQU8sT0FBUDtBQUNJLFVBQU0sU0FEVjtBQUVJLFVBQU0sc0JBRlY7QUFHSSxVQUFNLGFBSFY7QUFJSSxVQUFNLHFCQUpWO0FBS0ksVUFBTSxVQUxWO0FBTUksVUFBTSxTQU5WO0FBT0ksVUFBTSxTQVBWO0FBUUksVUFBTSxRQVJWO0FBU0ksVUFBTSxXQVRWO0FBVUksVUFBTSxnQkFWVjtBQVdJLFVBQU0sU0FYVjtBQVlJLFVBQU0sV0FaVjtBQWFJLFVBQU0sT0FiVjtBQWNJLFVBQU0sa0JBZFY7QUFlSSxVQUFNLFlBZlY7QUFnQkksVUFBTSx3QkFoQlY7QUFpQkksVUFBTSxVQWpCVjtBQWtCSSxVQUFNLFlBbEJWO0FBbUJJLFVBQU0sU0FuQlY7QUFvQkksVUFBTSxjQXBCVjtBQXFCSSxVQUFNLFVBckJWO0FBc0JJLFVBQU0sU0F0QlY7QUF1QkksVUFBTSxTQXZCVjtBQXdCSSxVQUFNLE9BeEJWO0FBeUJJLFVBQU0sU0F6QlY7QUEwQkksVUFBTSxtQkExQlY7QUEyQkksVUFBTSxpQ0EzQlY7QUE0QkksVUFBTSxRQTVCVjtBQTZCSSxVQUFNLFNBN0JWO0FBOEJJLFVBQU0sUUE5QlY7QUErQkksVUFBTSxVQS9CVjtBQWdDSSxVQUFNLFNBaENWO0FBaUNJLFVBQU0sUUFqQ1Y7QUFrQ0ksVUFBTSxRQWxDVjtBQW1DSSxVQUFNLHlCQW5DVjtBQW9DSSxVQUFNLHVDQXBDVjtBQXFDSSxVQUFNLDBCQXJDVjtBQXNDSSxVQUFNLE9BdENWO0FBdUNJLFVBQU0sYUF2Q1Y7QUF3Q0ksVUFBTSxtQkF4Q1Y7QUF5Q0ksVUFBTSxjQXpDVjtBQTBDSSxVQUFNLE9BMUNWO0FBMkNJLFVBQU0sVUEzQ1Y7QUE0Q0ksVUFBTSxPQTVDVjtBQTZDSSxVQUFNLFVBN0NWO0FB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LENBQWEsS0FBYixDQUFSO0FBQ0g7O0FBRUQsdUJBQU8sS0FBSyxVQUFMLEdBQWdCLE9BQWhCLEdBQXdCLEtBQXhCLEdBQThCLEdBQTlCLEdBQWtDLElBQWxDLEdBQXVDLE1BQTlDO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7OztzQ0FFYSxJLEVBQU07QUFDaEIsZ0JBQUksS0FBSyxVQUFMLENBQWdCLElBQWhCLE1BQTBCLFNBQTlCLEVBQXlDO0FBQ3JDLHVCQUFPLEtBQUssV0FBTCxFQUFQO0FBQ0EsdUJBQU8sS0FBSyxVQUFMLEdBQWdCLE9BQWhCLEdBQXdCLElBQXhCLEdBQTZCLE1BQXBDO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7Ozs7OztBQUdMLE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnQUQnOiAnQW5kb3JyYScsXG4gICAgJ0FFJzogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcbiAgICAnQUYnOiAnQWZnaGFuaXN0YW4nLFxuICAgICdBRyc6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcbiAgICAnQUknOiAnQW5ndWlsbGEnLFxuICAgICdBTCc6ICdBbGJhbmlhJyxcbiAgICAnQU0nOiAnQXJtZW5pYScsXG4gICAgJ0FPJzogJ0FuZ29sYScsXG4gICAgJ0FSJzogJ0FyZ2VudGluYScsXG4gICAgJ0FTJzogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICAnQVQnOiAnQXVzdHJpYScsXG4gICAgJ0FVJzogJ0F1c3RyYWxpYScsXG4gICAgJ0FXJzogJ0FydWJhJyxcbiAgICAnQVgnOiAnXFx1MDBjNWxhbmQgSXNsYW5kcycsXG4gICAgJ0FaJzogJ0F6ZXJiYWlqYW4nLFxuICAgICdCQSc6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJyxcbiAgICAnQkInOiAnQmFyYmFkb3MnLFxuICAgICdCRCc6ICdCYW5nbGFkZXNoJyxcbiAgICAnQkUnOiAnQmVsZ2l1bScsXG4gICAgJ0JGJzogJ0J1cmtpbmEgRmFzbycsXG4gICAgJ0JHJzogJ0J1bGdhcmlhJyxcbiAgICAnQkgnOiAnQmFocmFpbicsXG4gICAgJ0JJJzogJ0J1cnVuZGknLFxuICAgICdCSic6ICdCZW5pbicsXG4gICAgJ0JNJzogJ0Jlcm11ZGEnLFxuICAgICdCTic6ICdCcnVuZWkgRGFydXNzYWxhbScsXG4gICAgJ0JPJzogJ0JvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YnLFxuICAgICdCUic6ICdCcmF6aWwnLFxuICAgICdCUyc6ICdCYWhhbWFzJyxcbiAgICAnQlQnOiAnQmh1dGFuJyxcbiAgICAnQlcnOiAnQm90c3dhbmEnLFxuICAgICdCWSc6ICdCZWxhcnVzJyxcbiAgICAnQlonOiAnQmVsaXplJyxcbiAgICAnQ0EnOiAnQ2FuYWRhJyxcbiAgICAnQ0MnOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxuICAgICdDRCc6ICdDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlJyxcbiAgICAnQ0YnOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcbiAgICAnQ0cnOiAnQ29uZ28nLFxuICAgICdDSCc6ICdTd2l0emVybGFuZCcsXG4gICAgJ0NJJzogJ0NcXHUwMGY0dGUgZFxcJ0l2b2lyZScsXG4gICAgJ0NLJzogJ0Nvb2sgSXNsYW5kcycsXG4gICAgJ0NMJzogJ0NoaWxlJyxcbiAgICAnQ00nOiAnQ2FtZXJvb24nLFxuICAgICdDTic6ICdDaGluYScsXG4gICAgJ0NPJzogJ0NvbG9tYmlhJyxcbiAgICAnQ1InOiAnQ29zdGEgUmljYScsXG4gICAgJ0NVJzogJ0N1YmEnLFxuICAgICdDVic6ICdDYXBlIFZlcmRlJyxcbiAgICAnQ1cnOiAnQ3VyYVxcdTAwZTdhbycsXG4gICAgJ0NYJzogJ0NocmlzdG1hcyBJc2xhbmQnLFxuICAgICdDWSc6ICdDeXBydXMnLFxuICAgICdDWic6ICdDemVjaCBSZXB1YmxpYycsXG4gICAgJ0RFJzogJ0dlcm1hbnknLFxuICAgICdESic6ICdEamlib3V0aScsXG4gICAgJ0RLJzogJ0Rlbm1hcmsnLFxuICAgICdETSc6ICdEb21pbmljYScsXG4gICAgJ0RPJzogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gICAgJ0RaJzogJ0FsZ2VyaWEnLFxuICAgICdFQyc6ICdFY3VhZG9yJyxcbiAgICAnRUUnOiAnRXN0b25pYScsXG4gICAgJ0VHJzogJ0VneXB0JyxcbiAgICAnRVInOiAnRXJpdHJlYScsXG4gICAgJ0VTJzogJ1NwYWluJyxcbiAgICAnRVQnOiAnRXRoaW9waWEnLFxuICAgICdGSSc6ICdGaW5sYW5kJyxcbiAgICAnRkonOiAnRmlqaScsXG4gICAgJ0ZLJzogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXG4gICAgJ0ZNJzogJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YnLFxuICAgICdGTyc6ICdGYXJvZSBJc2xhbmRzJyxcbiAgICAnRlInOiAnRnJhbmNlJyxcbiAgICAnR0EnOiAnR2Fib24nLFxuICAgICdHQic6ICdVbml0ZWQgS2luZ2RvbScsXG4gICAgJ0dEJzogJ0dyZW5hZGEnLFxuICAgICdHRSc6ICdHZW9yZ2lhJyxcbiAgICAnR0cnOiAnR3Vlcm5zZXknLFxuICAgICdHSCc6ICdHaGFuYScsXG4gICAgJ0dJJzogJ0dpYnJhbHRhcicsXG4gICAgJ0dMJzogJ0dyZWVubGFuZCcsXG4gICAgJ0dNJzogJ0dhbWJpYScsXG4gICAgJ0dOJzogJ0d1aW5lYScsXG4gICAgJ0dRJzogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgICAnR1InOiAnR3JlZWNlJyxcbiAgICAnR1MnOiAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLFxuICAgICdHVCc6ICdHdWF0ZW1hbGEnLFxuICAgICdHVSc6ICdHdWFtJyxcbiAgICAnR1cnOiAnR3VpbmVhLUJpc3NhdScsXG4gICAgJ0dZJzogJ0d1eWFuYScsXG4gICAgJ0hLJzogJ0hvbmcgS29uZycsXG4gICAgJ0hOJzogJ0hvbmR1cmFzJyxcbiAgICAnSFInOiAnQ3JvYXRpYScsXG4gICAgJ0hUJzogJ0hhaXRpJyxcbiAgICAnSFUnOiAnSHVuZ2FyeScsXG4gICAgJ0lEJzogJ0luZG9uZXNpYScsXG4gICAgJ0lFJzogJ0lyZWxhbmQnLFxuICAgICdJTCc6ICdJc3JhZWwnLFxuICAgICdJTSc6ICdJc2xlIG9mIE1hbicsXG4gICAgJ0lOJzogJ0luZGlhJyxcbiAgICAnSU8nOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcbiAgICAnSVEnOiAnSXJhcScsXG4gICAgJ0lSJzogJ0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YnLFxuICAgICdJUyc6ICdJY2VsYW5kJyxcbiAgICAnSVQnOiAnSXRhbHknLFxuICAgICdKRSc6ICdKZXJzZXknLFxuICAgICdKTSc6ICdKYW1haWNhJyxcbiAgICAnSk8nOiAnSm9yZGFuJyxcbiAgICAnSlAnOiAnSmFwYW4nLFxuICAgICdLRSc6ICdLZW55YScsXG4gICAgJ0tHJzogJ0t5cmd5enN0YW4nLFxuICAgICdLSCc6ICdDYW1ib2RpYScsXG4gICAgJ0tJJzogJ0tpcmliYXRpJyxcbiAgICAnS00nOiAnQ29tb3JvcycsXG4gICAgJ0tOJzogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXG4gICAgJ0tQJzogJ0tvcmVhLCBEZW1vY3JhdGljIFBlb3BsZVxcJ3MgUmVwdWJsaWMgb2YnLFxuICAgICdLUic6ICdLb3JlYSwgUmVwdWJsaWMgb2YnLFxuICAgICdLVyc6ICdLdXdhaXQnLFxuICAgICdLWSc6ICdDYXltYW4gSXNsYW5kcycsXG4gICAgJ0taJzogJ0themFraHN0YW4nLFxuICAgICdMQSc6ICdMYW8gUGVvcGxlXFwncyBEZW1vY3JhdGljIFJlcHVibGljJyxcbiAgICAnTEInOiAnTGViYW5vbicsXG4gICAgJ0xDJzogJ1NhaW50IEx1Y2lhJyxcbiAgICAnTEknOiAnTGllY2h0ZW5zdGVpbicsXG4gICAgJ0xLJzogJ1NyaSBMYW5rYScsXG4gICAgJ0xSJzogJ0xpYmVyaWEnLFxuICAgICdMUyc6ICdMZXNvdGhvJyxcbiAgICAnTFQnOiAnTGl0aHVhbmlhJyxcbiAgICAnTFUnOiAnTHV4ZW1ib3VyZycsXG4gICAgJ0xWJzogJ0xhdHZpYScsXG4gICAgJ0xZJzogJ0xpYnlhJyxcbiAgICAnTUEnOiAnTW9yb2NjbycsXG4gICAgJ01DJzogJ01vbmFjbycsXG4gICAgJ01EJzogJ01vbGRvdmEsIFJlcHVibGljIG9mJyxcbiAgICAnTUUnOiAnTW9udGVuZWdybycsXG4gICAgJ01HJzogJ01hZGFnYXNjYXInLFxuICAgICdNSCc6ICdNYXJzaGFsbCBJc2xhbmRzJyxcbiAgICAnTUsnOiAnTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mJyxcbiAgICAnTUwnOiAnTWFsaScsXG4gICAgJ01NJzogJ015YW5tYXInLFxuICAgICdNTic6ICdNb25nb2xpYScsXG4gICAgJ01PJzogJ01hY2FvJyxcbiAgICAnTVAnOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJyxcbiAgICAnTVonOiAnTWFydGluaXF1ZScsXG4gICAgJ01SJzogJ01hdXJpdGFuaWEnLFxuICAgICdNUyc6ICdNb250c2VycmF0JyxcbiAgICAnTVQnOiAnTWFsdGEnLFxuICAgICdNVSc6ICdNYXVyaXRpdXMnLFxuICAgICdNVic6ICdNYWxkaXZlcycsXG4gICAgJ01XJzogJ01hbGF3aScsXG4gICAgJ01YJzogJ01leGljbycsXG4gICAgJ01ZJzogJ01hbGF5c2lhJyxcbiAgICAnTVonOiAnTW96YW1iaXF1ZScsXG4gICAgJ05BJzogJ05hbWliaWEnLFxuICAgICdOQyc6ICdOZXcgQ2FsZWRvbmlhJyxcbiAgICAnTkUnOiAnTmlnZXInLFxuICAgICdORic6ICdOb3Jmb2xrIElzbGFuZCcsXG4gICAgJ05HJzogJ05pZ2VyaWEnLFxuICAgICdOSSc6ICdOaWNhcmFndWEnLFxuICAgICdOTCc6ICdOZXRoZXJsYW5kcycsXG4gICAgJ05PJzogJ05vcndheScsXG4gICAgJ05QJzogJ05lcGFsJyxcbiAgICAnTlInOiAnTmF1cnUnLFxuICAgICdOVSc6ICdOaXVlJyxcbiAgICAnTlonOiAnTmV3IFplYWxhbmQnLFxuICAgICdPTSc6ICdPbWFuJyxcbiAgICAnUEEnOiAnUGFuYW1hJyxcbiAgICAnUEUnOiAnUGVydScsXG4gICAgJ1BGJzogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxuICAgICdQUyc6ICdQYWxlc3RpbmUnLFxuICAgICdQRyc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICAnUEgnOiAnUGhpbGlwcGluZXMnLFxuICAgICdQSyc6ICdQYWtpc3RhbicsXG4gICAgJ1BMJzogJ1BvbGFuZCcsXG4gICAgJ1BOJzogJ1BpdGNhaXJuJyxcbiAgICAnUFInOiAnUHVlcnRvIFJpY28nLFxuICAgICdQVCc6ICdQb3J0dWdhbCcsXG4gICAgJ1BXJzogJ1BhbGF1JyxcbiAgICAnUFknOiAnUGFyYWd1YXknLFxuICAgICdRQSc6ICdRYXRhcicsXG4gICAgJ1JFJzogJ1LDqXVuaW9uJyxcbiAgICAnUk8nOiAnUm9tYW5pYScsXG4gICAgJ1JTJzogJ1NlcmJpYScsXG4gICAgJ1JVJzogJ1J1c3NpYW4gRmVkZXJhdGlvbicsXG4gICAgJ1JXJzogJ1J3YW5kYScsXG4gICAgJ1NBJzogJ1NhdWRpIEFyYWJpYScsXG4gICAgJ1NCJzogJ1NvbG9tb24gSXNsYW5kcycsXG4gICAgJ1NDJzogJ1NleWNoZWxsZXMnLFxuICAgICdTRCc6ICdTdWRhbicsXG4gICAgJ1NFJzogJ1N3ZWRlbicsXG4gICAgJ1NHJzogJ1NpbmdhcG9yZScsXG4gICAgJ1NIJzogJ1NhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhJyxcbiAgICAnU0knOiAnU2xvdmVuaWEnLFxuICAgICdTSyc6ICdTbG92YWtpYScsXG4gICAgJ1NMJzogJ1NpZXJyYSBMZW9uZScsXG4gICAgJ1NNJzogJ1NhbiBNYXJpbm8nLFxuICAgICdTTic6ICdTZW5lZ2FsJyxcbiAgICAnU08nOiAnU29tYWxpYScsXG4gICAgJ1NSJzogJ1N1cmluYW1lJyxcbiAgICAnU1MnOiAnU291dGggU3VkYW4nLFxuICAgICdTVCc6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxuICAgICdTVic6ICdFbCBTYWx2YWRvcicsXG4gICAgJ1NYJzogJ1NpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydCknLFxuICAgICdTWSc6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXG4gICAgJ1NaJzogJ1N3YXppbGFuZCcsXG4gICAgJ1RDJzogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsXG4gICAgJ1REJzogJ0NoYWQnLFxuICAgICdURic6ICdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMnLFxuICAgICdURyc6ICdUb2dvJyxcbiAgICAnVEgnOiAnVGhhaWxhbmQnLFxuICAgICdUSic6ICdUYWppa2lzdGFuJyxcbiAgICAnVEsnOiAnVG9rZWxhdScsXG4gICAgJ1RMJzogJ1RpbW9yLUxlc3RlJyxcbiAgICAnVE0nOiAnVHVya21lbmlzdGFuJyxcbiAgICAnVE4nOiAnVHVuaXNpYScsXG4gICAgJ1RPJzogJ1RvbmdhJyxcbiAgICAnVFInOiAnVHVya2V5JyxcbiAgICAnVFQnOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gICAgJ1RWJzogJ1R1dmFsdScsXG4gICAgJ1RaJzogJ1RhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2YnLFxuICAgICdUVyc6ICdUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hJyxcbiAgICAnVUEnOiAnVWtyYWluZScsXG4gICAgJ1VHJzogJ1VnYW5kYScsXG4gICAgJ1VTJzogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICdVWSc6ICdVcnVndWF5JyxcbiAgICAnVVonOiAnVXpiZWtpc3RhbicsXG4gICAgJ1ZBJzogJ0hvbHkgU2VlIChWYXRpY2FuIENpdHkgU3RhdGUpJyxcbiAgICAnVkMnOiAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnLFxuICAgICdWRSc6ICdWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YnLFxuICAgICdWRyc6ICdWaXJnaW4gSXNsYW5kcywgQnJpdGlzaCcsXG4gICAgJ1ZJJzogJ1ZpcmdpbiBJc2xhbmRzLCBVLlMuJyxcbiAgICAnVk4nOiAnVmlldCBOYW0nLFxuICAgICdWVSc6ICdWYW51YXR1JyxcbiAgICAnV1MnOiAnU2Ftb2EnLFxuICAgICdZRSc6ICdZZW1lbicsXG4gICAgJ1pBJzogJ1NvdXRoIEFmcmljYScsXG4gICAgJ1pNJzogJ1phbWJpYScsXG4gICAgJ1pXJzogJ1ppbWJhYndlJ1xufVxuIiwiY2xhc3MgQ291bnRyeUZsYWdzXG57XG4gICAgY29uc3RydWN0b3IoYXNzZXRzX3VyaSkge1xuICAgICAgICB0aGlzLnNjYWxlc18gPSB7XG4gICAgICAgICAgICAnc21hbGwnOicnLFxuICAgICAgICAgICAgJ21lZGl1bSc6JzI1MHB4JyxcbiAgICAgICAgICAgICdsYXJnZSc6JzEwMDBweCdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb3VudHJpZXNfID0gcmVxdWlyZSgnLi4vY291bnRyaWVzLmpzJyk7XG4gICAgICAgIHRoaXMuYXNzZXRzX3VyaSA9IGFzc2V0c191cmk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZShjb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50cmllc19bY29kZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyaWVzX1tjb2RlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRGbGFnUG5nVXJpKGNvZGUsIHNjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50cmllc19bY29kZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29kZSA9IGNvZGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChzY2FsZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuc2NhbGVzX1tzY2FsZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5zY2FsZXNfWydtZWRpdW0nXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5zY2FsZXNfW3NjYWxlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRzX3VyaSsnL3BuZy8nK3NjYWxlKycvJytjb2RlKycucG5nJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRGbGFnU3ZnVXJpKGNvZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRyaWVzX1tjb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRzX3VyaSsnL3N2Zy8nK2NvZGUrJy5zdmcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb3VudHJ5RmxhZ3M7XG4iXX0=
