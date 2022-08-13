(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~tab1-tab1-module~updatecenter-updatecenter-module"],{

/***/ "5mIa":
/*!************************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/functions/video-info.service.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoInfoService = void 0;
var utils_service_1 = __webpack_require__(/*! ./utils.service */ "pHJh");
var urllib = __importStar(__webpack_require__(/*! url */ "CxY0"));
var querystring = __importStar(__webpack_require__(/*! querystring */ "eGbO"));
var VIDEO_EURL = 'https://youtube.googleapis.com/v/';
var INFO_HOST = 'www.youtube.com';
var INFO_PATH = '/get_video_info';
var VideoInfoService = /** @class */ (function () {
    function VideoInfoService(httpClient) {
        this.httpClient = httpClient;
    }
    VideoInfoService.prototype.getVideoInfoPage = function (id, options, httpClient) {
        return __awaiter(this, void 0, void 0, function () {
            var utilsService, url, response, moreinfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        utilsService = new utils_service_1.UtilsService();
                        url = urllib.format({
                            protocol: 'https',
                            host: INFO_HOST,
                            pathname: INFO_PATH,
                            query: {
                                video_id: id,
                                eurl: VIDEO_EURL + id,
                                ps: 'default',
                                gl: 'US',
                                hl: 'en',
                                html5: 1,
                            },
                        });
                        return [4 /*yield*/, httpClient.get(url, {}, {})];
                    case 1:
                        response = _a.sent();
                        moreinfo = querystring.parse(response.data);
                        moreinfo.player_response = utilsService.findPlayerResponse('get_video_info', moreinfo);
                        return [2 /*return*/, moreinfo];
                }
            });
        });
    };
    return VideoInfoService;
}());
exports.VideoInfoService = VideoInfoService;


/***/ }),

/***/ "6MUB":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "8aIM":
/*!**********************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/errors/unrecoverable-error.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnrecoverableError = void 0;
var UnrecoverableError = /** @class */ (function (_super) {
    __extends(UnrecoverableError, _super);
    function UnrecoverableError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnrecoverableError;
}(Error));
exports.UnrecoverableError = UnrecoverableError;


/***/ }),

/***/ "CxY0":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "rWzI");
var util = __webpack_require__(/*! ./util */ "Nehr");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "r8II");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "FPIJ":
/*!**************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/validation.service.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
var unrecoverable_error_1 = __webpack_require__(/*! ./errors/unrecoverable-error */ "8aIM");
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    /*
      Validation
     */
    ValidationService.prototype.validate = function (info) {
        var playErr = this.playError(info.player_response, ['ERROR']);
        var privateErr = this.privateVideoError(info.player_response);
        if (playErr || privateErr) {
            throw playErr || privateErr;
        }
        return info && (info.player_response.streamingData || this.isRental(info.player_response) || this.isNotYetBroadcasted(info.player_response));
    };
    // tslint:disable-next-line:variable-name
    ValidationService.prototype.playError = function (player_response, statuses) {
        var playability = player_response && player_response.playabilityStatus;
        if (playability && statuses.includes(playability.status)) {
            return new Error(playability.reason || (playability.messages && playability.messages[0]));
        }
        return null;
    };
    // tslint:disable-next-line:variable-name
    ValidationService.prototype.privateVideoError = function (player_response) {
        var playability = player_response && player_response.playabilityStatus;
        if (playability && playability.status === 'LOGIN_REQUIRED' && playability.messages &&
            playability.messages.filter(function (m) { return /This is a private video/.test(m); }).length) {
            return new unrecoverable_error_1.UnrecoverableError(playability.reason || (playability.messages && playability.messages[0]));
        }
        else {
            return null;
        }
    };
    // tslint:disable-next-line:variable-name
    ValidationService.prototype.isRental = function (player_response) {
        var playability = player_response.playabilityStatus;
        return playability && playability.status === 'UNPLAYABLE' &&
            playability.errorScreen && playability.errorScreen.playerLegacyDesktopYpcOfferRenderer;
    };
    // tslint:disable-next-line:variable-name
    ValidationService.prototype.isNotYetBroadcasted = function (player_response) {
        var playability = player_response.playabilityStatus;
        return playability && playability.status === 'LIVE_STREAM_OFFLINE';
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;


/***/ }),

/***/ "GZKG":
/*!*******************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/node_modules/querystring/encode.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).filter(Boolean).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "KHRN":
/*!**************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/basic-info.service.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInfoService = void 0;
var validation_service_1 = __webpack_require__(/*! ./validation.service */ "FPIJ");
var watch_json_service_1 = __webpack_require__(/*! ./functions/watch-json.service */ "LXFG");
var watch_html_service_1 = __webpack_require__(/*! ./functions/watch-html.service */ "ZEjO");
var video_info_service_1 = __webpack_require__(/*! ./functions/video-info.service */ "5mIa");
var unrecoverable_error_1 = __webpack_require__(/*! ./errors/unrecoverable-error */ "8aIM");
var BasicInfoService = /** @class */ (function () {
    function BasicInfoService(httpClient) {
        this.httpClient = httpClient;
        this.retryOptions = {
            maxRedirects: 10,
            maxRetries: 0,
            maxReconnects: 0,
            backoff: { inc: 100, max: 10000 },
        };
    }
    BasicInfoService.prototype.getBasicInfo = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var watchJsonService, watchHtmlService, videoInfoService, info, additional;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        watchJsonService = new watch_json_service_1.WatchJsonService(this.httpClient);
                        watchHtmlService = new watch_html_service_1.WatchHtmlService(this.httpClient);
                        videoInfoService = new video_info_service_1.VideoInfoService(this.httpClient);
                        return [4 /*yield*/, this.pipeline([id, options], this.retryOptions, [
                                watchJsonService.getJSONWatchPage,
                                watchHtmlService.getWatchHTMLPage,
                                videoInfoService.getVideoInfoPage
                            ], this.httpClient)];
                    case 1:
                        info = _a.sent();
                        Object.assign(info, {
                            formats: this.parseFormats(info.player_response),
                        });
                        additional = {
                            // Give the standard link to the video.
                            video_url: 'https://www.youtube.com/watch?v=' + id,
                        };
                        info.videoDetails = Object.assign({}, info.player_response && info.player_response.microformat &&
                            info.player_response.microformat.playerMicroformatRenderer, info.player_response && info.player_response.videoDetails, additional);
                        return [2 /*return*/, info];
                }
            });
        });
    };
    BasicInfoService.prototype.parseFormats = function (playerResponse) {
        var formats = [];
        if (playerResponse.streamingData) {
            formats = formats
                .concat(playerResponse.streamingData.formats || [])
                .concat(playerResponse.streamingData.adaptiveFormats || []);
        }
        return formats;
    };
    /**
     * Goes through each endpoint in the pipeline, retrying on failure if the error is recoverable.
     * If unable to succeed with one endpoint, moves onto the next one.
     *
     * @param {Array.<Object>} args
     * @param {Function} validate
     * @param {Object} retryOptions
     * @param {Array.<Function>} endpoints
     * @returns {[Object, Object, Object]}
     */
    BasicInfoService.prototype.pipeline = function (args, retryOptions, endpoints, httpClient) {
        return __awaiter(this, void 0, void 0, function () {
            var validationService, info, _i, endpoints_1, func, newInfo, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validationService = new validation_service_1.ValidationService();
                        _i = 0, endpoints_1 = endpoints;
                        _a.label = 1;
                    case 1:
                        if (!(_i < endpoints_1.length)) return [3 /*break*/, 6];
                        func = endpoints_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.retryFunc(func, args, retryOptions, httpClient)];
                    case 3:
                        newInfo = _a.sent();
                        newInfo.player_response.videoDetails = this.assign(info && info.player_response
                            && info.player_response.videoDetails, newInfo.player_response.videoDetails);
                        newInfo.player_response = this.assign(info && info.player_response, newInfo.player_response);
                        info = this.assign(info, newInfo);
                        if (validationService.validate(info)) {
                            return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        if (err_1 instanceof unrecoverable_error_1.UnrecoverableError || func === endpoints[endpoints.length - 1]) {
                            throw err_1;
                        }
                        else {
                            // tslint:disable-next-line:no-console
                            console.log(err_1);
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, info];
                }
            });
        });
    };
    /**
     * Given a function, calls it with `args` until it's successful,
     * or until it encounters an unrecoverable error.
     * Currently, any error from miniget is considered unrecoverable. Errors such as
     * too many redirects, invalid URL, status code 404, status code 502.
     *
     * @param {Function} func
     * @param {Array.<Object>} args
     * @param {Object} options
     * @param {number} options.maxRetries
     * @param {Object} options.backoff
     * @param {number} options.backoff.inc
     */
    BasicInfoService.prototype.retryFunc = function (func, args, retryOptions, httpClient) {
        return __awaiter(this, void 0, void 0, function () {
            var currentTry, result, _loop_1, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentTry = 0;
                        _loop_1 = function () {
                            var err_2, wait_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 2, , 4]);
                                        return [4 /*yield*/, func.apply(void 0, __spreadArray(__spreadArray([], args), [httpClient]))];
                                    case 1:
                                        result = _b.sent();
                                        return [2 /*return*/, "break"];
                                    case 2:
                                        err_2 = _b.sent();
                                        if (err_2 instanceof unrecoverable_error_1.UnrecoverableError ||
                                            (err_2 && err_2.statusCode < 500) || currentTry >= retryOptions.maxRetries) {
                                            throw err_2;
                                        }
                                        else {
                                            // tslint:disable-next-line:no-console
                                            console.log(err_2);
                                        }
                                        wait_1 = Math.min(++currentTry * retryOptions.backoff.inc, retryOptions.backoff.max);
                                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, wait_1); })];
                                    case 3:
                                        _b.sent();
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        _a.label = 1;
                    case 1:
                        if (!(currentTry <= retryOptions.maxRetries)) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 3];
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Like Object.assign(), but ignores `null` and `undefined` from `source`.
     *
     * @param {Object} target
     * @param {Object} source
     * @returns {Object}
     */
    BasicInfoService.prototype.assign = function (target, source) {
        if (!target || !source) {
            return target || source;
        }
        for (var _i = 0, _a = Object.entries(source); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value !== null && value !== undefined) {
                target[key] = value;
            }
        }
        return target;
    };
    return BasicInfoService;
}());
exports.BasicInfoService = BasicInfoService;


/***/ }),

/***/ "LXFG":
/*!************************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/functions/watch-json.service.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchJsonService = void 0;
var utils_service_1 = __webpack_require__(/*! ./utils.service */ "pHJh");
var watch_html_service_1 = __webpack_require__(/*! ./watch-html.service */ "ZEjO");
var identityCache = new Map();
var WatchJsonService = /** @class */ (function () {
    function WatchJsonService(httpClient) {
        this.httpClient = httpClient;
    }
    WatchJsonService.prototype.getJSONWatchPage = function (youtubeId, options, httpClient) {
        return __awaiter(this, void 0, void 0, function () {
            var utilsService, url, ytApi, response, body, parsedBody, watchHtmlService, page, match, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        utilsService = new utils_service_1.UtilsService();
                        url = utilsService.getHTMLWatchURL(youtubeId);
                        ytApi = url + "&pbj=1";
                        return [4 /*yield*/, httpClient.get(ytApi, {}, {
                                'x-youtube-client-name': '1',
                                'x-youtube-client-version': '2.20201203.06.00',
                                'x-youtube-identity-token': identityCache.get('browser') || '',
                            })];
                    case 1:
                        response = _a.sent();
                        body = response.data;
                        parsedBody = utilsService.parseJSON('watch.json', 'body', body);
                        if (!(parsedBody.reload === 'now')) return [3 /*break*/, 3];
                        watchHtmlService = new watch_html_service_1.WatchHtmlService(httpClient);
                        return [4 /*yield*/, watchHtmlService.getHTMLWatchPageBody(youtubeId, {}, utilsService, httpClient)];
                    case 2:
                        page = _a.sent();
                        match = page.match(/(["'])ID_TOKEN\1[:,]\s?"([^"]+)"/);
                        if (match) {
                            identityCache.set('browser', match && match[2]);
                        }
                        _a.label = 3;
                    case 3:
                        if (parsedBody.reload === 'now' || !Array.isArray(parsedBody)) {
                            throw Error('Unable to retrieve video metadata in watch.json');
                        }
                        info = parsedBody.reduce(function (part, curr) { return Object.assign(curr, part); }, {});
                        info.player_response = utilsService.findPlayerResponse('watch.json', info);
                        info.html5player = info.player && info.player.assets && info.player.assets.js;
                        return [2 /*return*/, info];
                }
            });
        });
    };
    return WatchJsonService;
}());
exports.WatchJsonService = WatchJsonService;


/***/ }),

/***/ "Nehr":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "VYOF":
/*!**************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/search.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchVideo = void 0;
var urllib = __importStar(__webpack_require__(/*! url */ "CxY0"));
var basic_info_service_1 = __webpack_require__(/*! ./basic-info.service */ "KHRN");
var cip_service_1 = __webpack_require__(/*! ./cip.service */ "bJm2");
var ngx_1 = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
var utils_service_1 = __webpack_require__(/*! ./functions/utils.service */ "pHJh");
var watch_html_service_1 = __webpack_require__(/*! ./functions/watch-html.service */ "ZEjO");
var format_utils_service_1 = __webpack_require__(/*! ./format-utils.service */ "j1Jr");
function searchVideo(youtubeId, sortType) {
    return __awaiter(this, void 0, void 0, function () {
        var httpClient, options, basicInfoService, info, funcs, utilsService, watchHtmlService, _a, _b, _c, _d, html5player, ciphService, _e, _f, formatUtils, results;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    httpClient = new ngx_1.HTTP();
                    options = {};
                    basicInfoService = new basic_info_service_1.BasicInfoService(httpClient);
                    return [4 /*yield*/, basicInfoService.getBasicInfo(youtubeId, {})];
                case 1:
                    info = _g.sent();
                    funcs = [];
                    if (!info.formats.length) return [3 /*break*/, 5];
                    utilsService = new utils_service_1.UtilsService();
                    watchHtmlService = new watch_html_service_1.WatchHtmlService(httpClient);
                    _a = info;
                    _b = info.html5player;
                    if (_b) return [3 /*break*/, 3];
                    _d = (_c = utilsService).getHTML5player;
                    return [4 /*yield*/, watchHtmlService.getHTMLWatchPageBody(youtubeId, options, utilsService, httpClient)];
                case 2:
                    _b = _d.apply(_c, [_g.sent()]);
                    _g.label = 3;
                case 3:
                    _a.html5player = _b;
                    if (!info.html5player) {
                        throw Error('Unable to find html5player file');
                    }
                    html5player = urllib.resolve(utilsService.VIDEO_URL, info.html5player);
                    ciphService = new cip_service_1.CiphService(httpClient);
                    _f = (_e = funcs).push;
                    return [4 /*yield*/, ciphService.decipherFormats(info.formats, html5player, options)];
                case 4:
                    _f.apply(_e, [_g.sent()]);
                    _g.label = 5;
                case 5:
                    formatUtils = new format_utils_service_1.FormatUtilsService();
                    return [4 /*yield*/, Promise.all(funcs)];
                case 6:
                    results = _g.sent();
                    info.formats = Object.values(Object.assign.apply(Object, __spreadArray([{}], results)));
                    info.formats = info.formats.map(formatUtils.addFormatMeta);
                    if (sortType === 'video') {
                        try {
                            info.formats.sort(formatUtils.sortFormatsByVideo);
                        }
                        catch (e) {
                            // tslint:disable-next-line:no-console
                            console.log(e);
                        }
                    }
                    else {
                        try {
                            info.formats.sort(formatUtils.sortFormatsByAudio);
                        }
                        catch (e) {
                            // tslint:disable-next-line:no-console
                            console.log(e);
                        }
                    }
                    info.full = true;
                    return [2 /*return*/, info];
            }
        });
    });
}
exports.searchVideo = searchVideo;


/***/ }),

/***/ "XDyw":
/*!*******************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/node_modules/querystring/decode.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "YcCt":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "YuTi":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "ZEjO":
/*!************************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/functions/watch-html.service.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchHtmlService = void 0;
var utils_service_1 = __webpack_require__(/*! ./utils.service */ "pHJh");
var siteCache = new Map();
var WatchHtmlService = /** @class */ (function () {
    function WatchHtmlService(httpClient) {
        this.httpClient = httpClient;
    }
    WatchHtmlService.prototype.getWatchHTMLPage = function (id, options, httpClient) {
        return __awaiter(this, void 0, void 0, function () {
            var utilsService, watchHtmlService, body, info, args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        utilsService = new utils_service_1.UtilsService();
                        watchHtmlService = new WatchHtmlService(httpClient);
                        return [4 /*yield*/, watchHtmlService.getHTMLWatchPageBody(id, options, utilsService, httpClient)];
                    case 1:
                        body = _a.sent();
                        info = { page: 'watch' };
                        try {
                            // @ts-ignore
                            info.player_response = watchHtmlService.findJSON('watch.html', 'player_response', body, /\bytInitialPlayerResponse\s*=\s*\{/i, '\n', '{', utilsService);
                        }
                        catch (err) {
                            args = watchHtmlService.findJSON('watch.html', 'player_response', body, /\bytplayer\.config\s*=\s*{/, '</script>', '{', utilsService);
                            // @ts-ignore
                            info.player_response = utilsService.findPlayerResponse('watch.html', args);
                        }
                        // @ts-ignore
                        info.response = watchHtmlService.findJSON('watch.html', 'response', body, /\bytInitialData("\])?\s*=\s*\{/i, '\n', '{', utilsService);
                        // @ts-ignore
                        info.html5player = utilsService.getHTML5player(body);
                        return [2 /*return*/, info];
                }
            });
        });
    };
    WatchHtmlService.prototype.findJSON = function (source, varName, body, left, right, prependJSON, utilsService) {
        if (prependJSON === void 0) { prependJSON = ''; }
        var jsonStr = utilsService.between(body, left, right);
        if (!jsonStr) {
            throw Error("Could not find " + varName + " in " + source);
        }
        return utilsService.parseJSON(source, varName, utilsService.cutAfterJSON("" + prependJSON + jsonStr));
    };
    WatchHtmlService.prototype.getHTMLWatchPageBody = function (id, options, utilsService, httpClient) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!siteCache.get(id)) return [3 /*break*/, 1];
                        return [2 /*return*/, siteCache.get(id)];
                    case 1:
                        url = utilsService.getHTMLWatchURL(id);
                        return [4 /*yield*/, httpClient.get(url, {}, {})];
                    case 2:
                        response = _a.sent();
                        siteCache.set(id, response.data);
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    return WatchHtmlService;
}());
exports.WatchHtmlService = WatchHtmlService;


/***/ }),

/***/ "bJm2":
/*!*******************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/cip.service.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiphService = void 0;
var url = __importStar(__webpack_require__(/*! url */ "CxY0"));
var querystring = __importStar(__webpack_require__(/*! querystring */ "eGbO"));
var jsVarStr = '[a-zA-Z_\\$][a-zA-Z_0-9]*';
var jsSingleQuoteStr = "'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'";
var jsDoubleQuoteStr = "\"[^\"\\\\]*(:?\\\\[\\s\\S][^\"\\\\]*)*\"";
var jsQuoteStr = "(?:" + jsSingleQuoteStr + "|" + jsDoubleQuoteStr + ")";
var jsKeyStr = "(?:" + jsVarStr + "|" + jsQuoteStr + ")";
var jsPropStr = "(?:\\." + jsVarStr + "|\\[" + jsQuoteStr + "\\])";
var jsEmptyStr = "(?:''|\"\")";
var reverseStr = ':function\\(a\\)\\{' +
    '(?:return )?a\\.reverse\\(\\)' +
    '\\}';
var sliceStr = ':function\\(a,b\\)\\{' +
    'return a\\.slice\\(b\\)' +
    '\\}';
var spliceStr = ':function\\(a,b\\)\\{' +
    'a\\.splice\\(0,b\\)' +
    '\\}';
var swapStr = ':function\\(a,b\\)\\{' +
    'var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?' +
    '\\}';
var actionsObjRegexp = new RegExp("var (" + jsVarStr + ")=\\{((?:(?:" +
    jsKeyStr + reverseStr + '|' +
    jsKeyStr + sliceStr + '|' +
    jsKeyStr + spliceStr + '|' +
    jsKeyStr + swapStr +
    '),?\\r?\\n?)+)\\};');
var actionsFuncRegexp = new RegExp("function(?: " + jsVarStr + ")?\\(a\\)\\{" +
    ("a=a\\.split\\(" + jsEmptyStr + "\\);\\s*") +
    ("((?:(?:a=)?" + jsVarStr) +
    jsPropStr +
    '\\(a,\\d+\\);)+)' +
    ("return a\\.join\\(" + jsEmptyStr + "\\)") +
    '\\}');
var reverseRegexp = new RegExp("(?:^|,)(" + jsKeyStr + ")" + reverseStr, 'm');
var sliceRegexp = new RegExp("(?:^|,)(" + jsKeyStr + ")" + sliceStr, 'm');
var spliceRegexp = new RegExp("(?:^|,)(" + jsKeyStr + ")" + spliceStr, 'm');
var swapRegexp = new RegExp("(?:^|,)(" + jsKeyStr + ")" + swapStr, 'm');
var CiphService = /** @class */ (function () {
    function CiphService(httpClient) {
        this.httpClient = httpClient;
        this.cache = new Map();
        this.decipher = function (tokens, sig) {
            sig = sig.split('');
            for (var i = 0, len = tokens.length; i < len; i++) {
                // tslint:disable-next-line:prefer-const one-variable-per-declaration
                var token = tokens[i], pos = void 0;
                switch (token[0]) {
                    case 'r':
                        sig = sig.reverse();
                        break;
                    case 'w':
                        // tslint:disable-next-line:no-bitwise
                        pos = ~~token.slice(1);
                        var first = sig[0];
                        sig[0] = sig[pos % sig.length];
                        sig[pos] = first;
                        break;
                    case 's':
                        // tslint:disable-next-line:no-bitwise
                        pos = ~~token.slice(1);
                        sig = sig.slice(pos);
                        break;
                    case 'p':
                        // tslint:disable-next-line:no-bitwise
                        pos = ~~token.slice(1);
                        sig.splice(0, pos);
                        break;
                }
            }
            return sig.join('');
        };
    }
    CiphService.prototype.getTokens = function (html5playerfile, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedTokens, response, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cachedTokens = this.cache.get(html5playerfile);
                        return [4 /*yield*/, this.httpClient.get(html5playerfile, {}, {})];
                    case 1:
                        response = _a.sent();
                        tokens = this.extractActions(response.data);
                        if (!tokens || !tokens.length) {
                            throw new Error('Could not extract signature deciphering actions');
                        }
                        this.cache.set(html5playerfile, tokens);
                        return [2 /*return*/, tokens];
                }
            });
        });
    };
    CiphService.prototype.extractActions = function (body) {
        var objResult = actionsObjRegexp.exec(body);
        var funcResult = actionsFuncRegexp.exec(body);
        if (!objResult || !funcResult) {
            return null;
        }
        var obj = objResult[1].replace(/\$/g, '\\$');
        var objBody = objResult[2].replace(/\$/g, '\\$');
        var funcBody = funcResult[1].replace(/\$/g, '\\$');
        var result = reverseRegexp.exec(objBody);
        var reverseKey = result && result[1]
            .replace(/\$/g, '\\$')
            .replace(/\$|^'|^"|'$|"$/g, '');
        result = sliceRegexp.exec(objBody);
        var sliceKey = result && result[1]
            .replace(/\$/g, '\\$')
            .replace(/\$|^'|^"|'$|"$/g, '');
        result = spliceRegexp.exec(objBody);
        var spliceKey = result && result[1]
            .replace(/\$/g, '\\$')
            .replace(/\$|^'|^"|'$|"$/g, '');
        result = swapRegexp.exec(objBody);
        var swapKey = result && result[1]
            .replace(/\$/g, '\\$')
            .replace(/\$|^'|^"|'$|"$/g, '');
        var keys = "(" + [reverseKey, sliceKey, spliceKey, swapKey].join('|') + ")";
        var myreg = '(?:a=)?' + obj +
            ("(?:\\." + keys + "|\\['" + keys + "'\\]|\\[\"" + keys + "\"\\])") +
            '\\(a,(\\d+)\\)';
        var tokenizeRegexp = new RegExp(myreg, 'g');
        var tokens = [];
        // tslint:disable-next-line:no-conditional-assignment
        while ((result = tokenizeRegexp.exec(funcBody)) !== null) {
            var key = result[1] || result[2] || result[3];
            switch (key) {
                case swapKey:
                    tokens.push('w' + result[4]);
                    break;
                case reverseKey:
                    tokens.push('r');
                    break;
                case sliceKey:
                    tokens.push('s' + result[4]);
                    break;
                case spliceKey:
                    tokens.push('p' + result[4]);
                    break;
            }
        }
        return tokens;
    };
    CiphService.prototype.decipherFormats = function (formats, html5player, options) {
        return __awaiter(this, void 0, void 0, function () {
            var decipheredFormats, tokens;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        decipheredFormats = {};
                        return [4 /*yield*/, this.getTokens(html5player, options)];
                    case 1:
                        tokens = _a.sent();
                        formats.forEach(function (format) {
                            var cipher = format.signatureCipher || format.cipher;
                            if (cipher) {
                                Object.assign(format, querystring.parse(cipher));
                                delete format.signatureCipher;
                                delete format.cipher;
                            }
                            var sig = tokens && format.s ? _this.decipher(tokens, format.s) : null;
                            _this.setDownloadURL(format, sig);
                            decipheredFormats[format.url] = format;
                        });
                        return [2 /*return*/, decipheredFormats];
                }
            });
        });
    };
    CiphService.prototype.setDownloadURL = function (format, sig) {
        var decodedUrl;
        if (format.url) {
            decodedUrl = format.url;
        }
        else {
            return;
        }
        try {
            decodedUrl = decodeURIComponent(decodedUrl);
        }
        catch (err) {
            return;
        }
        // Make some adjustments to the final url.
        var parsedUrl = url.parse(decodedUrl, true);
        // Deleting the `search` part is necessary otherwise changes to
        // `query` won't reflect when running `url.format()`
        // @ts-ignore
        delete parsedUrl.search;
        var query = parsedUrl.query;
        // This is needed for a speedier download.
        // See https://github.com/fent/node-ytdl-core/issues/127
        query.ratebypass = 'yes';
        if (sig) {
            // When YouTube provides a `sp` parameter the signature `sig` must go
            // into the parameter it specifies.
            // See https://github.com/fent/node-ytdl-core/issues/417
            query[format.sp || 'signature'] = sig;
        }
        format.url = url.format(parsedUrl);
    };
    return CiphService;
}());
exports.CiphService = CiphService;


/***/ }),

/***/ "eGbO":
/*!******************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/node_modules/querystring/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "XDyw");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "GZKG");


/***/ }),

/***/ "j1Jr":
/*!****************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/format-utils.service.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatUtilsService = void 0;
var formats_json_1 = __importDefault(__webpack_require__(/*! ./formats.json */ "uSgu"));
var utils_service_1 = __webpack_require__(/*! ./functions/utils.service */ "pHJh");
var audioEncodingRanks = [
    'mp4a',
    'mp3',
    'vorbis',
    'aac',
    'opus',
    'flac',
];
var videoEncodingRanks = [
    'mp4v',
    'avc1',
    'Sorenson H.283',
    'MPEG-4 Visual',
    'VP8',
    'VP9',
    'H.264',
];
var FormatUtilsService = /** @class */ (function () {
    function FormatUtilsService() {
    }
    /**
     * @param {Object} format
     * @returns {Object}
     */
    FormatUtilsService.prototype.addFormatMeta = function (format) {
        var utilsService = new utils_service_1.UtilsService();
        // @ts-ignore
        format = Object.assign({}, formats_json_1.default[format.itag], format);
        format.hasVideo = !!format.qualityLabel;
        format.hasAudio = !!format.audioBitrate;
        format.container = format.mimeType ?
            format.mimeType.split(';')[0].split('/')[1] : null;
        format.codecs = format.mimeType ?
            utilsService.between(format.mimeType, 'codecs="', '"') : null;
        format.videoCodec = format.hasVideo && format.codecs ?
            format.codecs.split(', ')[0] : null;
        format.audioCodec = format.hasAudio && format.codecs ?
            format.codecs.split(', ').slice(-1)[0] : null;
        format.isLive = /\bsource[/=]yt_live_broadcast\b/.test(format.url);
        format.isHLS = /\/manifest\/hls_(variant|playlist)\//.test(format.url);
        format.isDashMPD = /\/manifest\/dash\//.test(format.url);
        return format;
    };
    /**
     * Sort formats by a list of functions.
     *
     * @param {Object} a
     * @param {Object} b
     * @param {Array.<Function>} sortBy
     * @returns {number}
     */
    FormatUtilsService.prototype.sortFormatsBy = function (a, b, sortBy) {
        var res = 0;
        for (var _i = 0, sortBy_1 = sortBy; _i < sortBy_1.length; _i++) {
            var fn = sortBy_1[_i];
            res = fn(b) - fn(a);
            if (res !== 0) {
                break;
            }
        }
        return res;
    };
    /**
     * Sort formats from highest quality to lowest.
     *
     * @param {Object} a
     * @param {Object} b
     * @returns {number}
     */
    FormatUtilsService.prototype.sortFormatsByVideo = function (a, b) {
        var sortBy = [
            function (format) { return +(format.hasVideo && format.hasAudio); },
            function (format) {
                return +(format.contentLength > 0);
            },
            function (format) {
                // tslint:disable-next-line:radix
                return parseInt(format.qualityLabel);
            },
            function (format) {
                return format.bitrate || 0;
            },
            function (format) {
                return videoEncodingRanks.findIndex(function (enc) { return format.codecs && format.codecs.includes(enc); });
            },
        ];
        var res = 0;
        for (var _i = 0, sortBy_2 = sortBy; _i < sortBy_2.length; _i++) {
            var fn = sortBy_2[_i];
            res = fn(b) - fn(a);
            if (res !== 0) {
                break;
            }
        }
        return res;
    };
    FormatUtilsService.prototype.sortFormatsByAudio = function (a, b) {
        var sortBy = [
            function (format) {
                return +(format.contentLength > 0);
            },
            function (format) { return +(!format.hasVideo && format.hasAudio); },
            function (format) {
                // tslint:disable-next-line:radix
                return parseInt(format.qualityLabel);
            },
            function (format) {
                return format.audioBitrate || 0;
            },
            function (format) {
                return audioEncodingRanks.findIndex(function (enc) { return format.codecs && format.codecs.includes(enc); });
            },
        ];
        var res = 0;
        for (var _i = 0, sortBy_3 = sortBy; _i < sortBy_3.length; _i++) {
            var fn = sortBy_3[_i];
            res = fn(b) - fn(a);
            if (res !== 0) {
                break;
            }
        }
        return res;
    };
    return FormatUtilsService;
}());
exports.FormatUtilsService = FormatUtilsService;


/***/ }),

/***/ "mYd2":
/*!*********************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByType = exports.info = exports.Name = void 0;
var search_1 = __webpack_require__(/*! ./lib/search */ "VYOF");
var Name = function (name) { return "Hello " + name; };
exports.Name = Name;
function info(videoId) {
    return search_1.searchVideo(videoId, 'video');
}
exports.info = info;
function sortByType(videoId, type) {
    return search_1.searchVideo(videoId, type);
}
exports.sortByType = sortByType;


/***/ }),

/***/ "pHJh":
/*!*******************************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/functions/utils.service.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
var jsonClosingChars = /^[)\]}'\s]+/;
var VIDEO_URL = 'https://www.youtube.com/watch?v=';
var UtilsService = /** @class */ (function () {
    function UtilsService() {
        this.VIDEO_URL = VIDEO_URL;
    }
    UtilsService.prototype.getHTMLWatchURL = function (id) {
        var params = '&hl=en';
        return VIDEO_URL + id + params;
    };
    ;
    UtilsService.prototype.findPlayerResponse = function (source, info) {
        // tslint:disable-next-line:variable-name
        var player_response = info && ((info.args && info.args.player_response) ||
            info.player_response || info.playerResponse || info.embedded_player_response);
        return this.parseJSON(source, 'player_response', player_response);
    };
    UtilsService.prototype.cutAfterJSON = function (mixedJson) {
        var open;
        var close;
        if (mixedJson[0] === '[') {
            open = '[';
            close = ']';
        }
        else if (mixedJson[0] === '{') {
            open = '{';
            close = '}';
        }
        if (!open) {
            throw new Error("Can't cut unsupported JSON (need to begin with [ or { ) but got: " + mixedJson[0]);
        }
        // States if the loop is currently in a string
        var isString = false;
        // Current open brackets to be closed
        var counter = 0;
        var i;
        for (i = 0; i < mixedJson.length; i++) {
            // Toggle the isString boolean when leaving/entering string
            if (mixedJson[i] === '"' && mixedJson[i - 1] !== '\\') {
                isString = !isString;
                continue;
            }
            if (isString)
                continue;
            if (mixedJson[i] === open) {
                counter++;
            }
            else if (mixedJson[i] === close) {
                counter--;
            }
            // All brackets have been closed, thus end of JSON is reached
            if (counter === 0) {
                // Return the cut JSON
                return mixedJson.substr(0, i + 1);
            }
        }
        // We ran through the whole string and ended up with an unclosed bracket
        throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
    };
    /*
    * Extract string inbetween another.
    */
    UtilsService.prototype.between = function (haystack, left, right) {
        var pos;
        if (left instanceof RegExp) {
            var match = haystack.match(left);
            if (!match) {
                return '';
            }
            pos = match.index + match[0].length;
        }
        else {
            pos = haystack.indexOf(left);
            if (pos === -1) {
                return '';
            }
            pos += left.length;
        }
        haystack = haystack.slice(pos);
        pos = haystack.indexOf(right);
        if (pos === -1) {
            return '';
        }
        haystack = haystack.slice(0, pos);
        return haystack;
    };
    UtilsService.prototype.parseJSON = function (source, varName, json) {
        if (!json || typeof json === 'object') {
            return json;
        }
        else {
            try {
                json = json.replace(jsonClosingChars, '');
                return JSON.parse(json);
            }
            catch (err) {
                throw Error("Error parsing " + varName + " in " + source + ": " + err.message);
            }
        }
    };
    UtilsService.prototype.getHTML5player = function (body) {
        var html5playerRes = /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/
            .exec(body);
        return html5playerRes ? html5playerRes[1] || html5playerRes[2] : null;
    };
    return UtilsService;
}());
exports.UtilsService = UtilsService;


/***/ }),

/***/ "r8II":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "YcCt");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "6MUB");


/***/ }),

/***/ "rWzI":
/*!************************************************************!*\
  !*** ./node_modules/url/node_modules/punycode/punycode.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "uSgu":
/*!*****************************************************************!*\
  !*** ./node_modules/ionic-youtube-streams/lib/lib/formats.json ***!
  \*****************************************************************/
/*! exports provided: 5, 6, 13, 17, 18, 22, 34, 35, 36, 37, 38, 43, 44, 45, 46, 82, 83, 84, 85, 91, 92, 93, 94, 95, 96, 100, 101, 102, 120, 127, 128, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 151, 160, 171, 172, 242, 243, 244, 247, 248, 249, 250, 251, 264, 266, 271, 272, 278, 298, 299, 300, 302, 303, 308, 313, 315, 330, 331, 332, 333, 334, 335, 336, 337, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"5\":{\"mimeType\":\"video/flv; codecs=\\\"Sorenson H.283, mp3\\\"\",\"qualityLabel\":\"240p\",\"bitrate\":250000,\"audioBitrate\":64},\"6\":{\"mimeType\":\"video/flv; codecs=\\\"Sorenson H.263, mp3\\\"\",\"qualityLabel\":\"270p\",\"bitrate\":800000,\"audioBitrate\":64},\"13\":{\"mimeType\":\"video/3gp; codecs=\\\"MPEG-4 Visual, aac\\\"\",\"qualityLabel\":null,\"bitrate\":500000,\"audioBitrate\":null},\"17\":{\"mimeType\":\"video/3gp; codecs=\\\"MPEG-4 Visual, aac\\\"\",\"qualityLabel\":\"144p\",\"bitrate\":50000,\"audioBitrate\":24},\"18\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":500000,\"audioBitrate\":96},\"22\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":2000000,\"audioBitrate\":192},\"34\":{\"mimeType\":\"video/flv; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":500000,\"audioBitrate\":128},\"35\":{\"mimeType\":\"video/flv; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"480p\",\"bitrate\":800000,\"audioBitrate\":128},\"36\":{\"mimeType\":\"video/3gp; codecs=\\\"MPEG-4 Visual, aac\\\"\",\"qualityLabel\":\"240p\",\"bitrate\":175000,\"audioBitrate\":32},\"37\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"1080p\",\"bitrate\":3000000,\"audioBitrate\":192},\"38\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"3072p\",\"bitrate\":3500000,\"audioBitrate\":192},\"43\":{\"mimeType\":\"video/webm; codecs=\\\"VP8, vorbis\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":500000,\"audioBitrate\":128},\"44\":{\"mimeType\":\"video/webm; codecs=\\\"VP8, vorbis\\\"\",\"qualityLabel\":\"480p\",\"bitrate\":1000000,\"audioBitrate\":128},\"45\":{\"mimeType\":\"video/webm; codecs=\\\"VP8, vorbis\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":2000000,\"audioBitrate\":192},\"46\":{\"mimeType\":\"audio/webm; codecs=\\\"vp8, vorbis\\\"\",\"qualityLabel\":\"1080p\",\"bitrate\":null,\"audioBitrate\":192},\"82\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":500000,\"audioBitrate\":96},\"83\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"240p\",\"bitrate\":500000,\"audioBitrate\":96},\"84\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":2000000,\"audioBitrate\":192},\"85\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"1080p\",\"bitrate\":3000000,\"audioBitrate\":192},\"91\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"144p\",\"bitrate\":100000,\"audioBitrate\":48},\"92\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"240p\",\"bitrate\":150000,\"audioBitrate\":48},\"93\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":500000,\"audioBitrate\":128},\"94\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"480p\",\"bitrate\":800000,\"audioBitrate\":128},\"95\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":1500000,\"audioBitrate\":256},\"96\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"1080p\",\"bitrate\":2500000,\"audioBitrate\":256},\"100\":{\"mimeType\":\"audio/webm; codecs=\\\"VP8, vorbis\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":null,\"audioBitrate\":128},\"101\":{\"mimeType\":\"audio/webm; codecs=\\\"VP8, vorbis\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":null,\"audioBitrate\":192},\"102\":{\"mimeType\":\"audio/webm; codecs=\\\"VP8, vorbis\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":null,\"audioBitrate\":192},\"120\":{\"mimeType\":\"video/flv; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":2000000,\"audioBitrate\":128},\"127\":{\"mimeType\":\"audio/ts; codecs=\\\"aac\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":96},\"128\":{\"mimeType\":\"audio/ts; codecs=\\\"aac\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":96},\"132\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"240p\",\"bitrate\":150000,\"audioBitrate\":48},\"133\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"240p\",\"bitrate\":200000,\"audioBitrate\":null},\"134\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":300000,\"audioBitrate\":null},\"135\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"480p\",\"bitrate\":500000,\"audioBitrate\":null},\"136\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":1000000,\"audioBitrate\":null},\"137\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"1080p\",\"bitrate\":2500000,\"audioBitrate\":null},\"138\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"4320p\",\"bitrate\":13500000,\"audioBitrate\":null},\"139\":{\"mimeType\":\"audio/mp4; codecs=\\\"aac\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":48},\"140\":{\"mimeType\":\"audio/m4a; codecs=\\\"aac\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":128},\"141\":{\"mimeType\":\"audio/mp4; codecs=\\\"aac\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":256},\"151\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":50000,\"audioBitrate\":24},\"160\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"144p\",\"bitrate\":100000,\"audioBitrate\":null},\"171\":{\"mimeType\":\"audio/webm; codecs=\\\"vorbis\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":128},\"172\":{\"mimeType\":\"audio/webm; codecs=\\\"vorbis\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":192},\"242\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"240p\",\"bitrate\":100000,\"audioBitrate\":null},\"243\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"360p\",\"bitrate\":250000,\"audioBitrate\":null},\"244\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"480p\",\"bitrate\":500000,\"audioBitrate\":null},\"247\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":700000,\"audioBitrate\":null},\"248\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"1080p\",\"bitrate\":1500000,\"audioBitrate\":null},\"249\":{\"mimeType\":\"audio/webm; codecs=\\\"opus\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":48},\"250\":{\"mimeType\":\"audio/webm; codecs=\\\"opus\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":64},\"251\":{\"mimeType\":\"audio/webm; codecs=\\\"opus\\\"\",\"qualityLabel\":null,\"bitrate\":null,\"audioBitrate\":160},\"264\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"1440p\",\"bitrate\":4000000,\"audioBitrate\":null},\"266\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"2160p\",\"bitrate\":12500000,\"audioBitrate\":null},\"271\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"1440p\",\"bitrate\":9000000,\"audioBitrate\":null},\"272\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"4320p\",\"bitrate\":20000000,\"audioBitrate\":null},\"278\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"144p 30fps\",\"bitrate\":80000,\"audioBitrate\":null},\"298\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":3000000,\"audioBitrate\":null},\"299\":{\"mimeType\":\"video/mp4; codecs=\\\"H.264\\\"\",\"qualityLabel\":\"1080p\",\"bitrate\":5500000,\"audioBitrate\":null},\"300\":{\"mimeType\":\"video/ts; codecs=\\\"H.264, aac\\\"\",\"qualityLabel\":\"720p\",\"bitrate\":1318000,\"audioBitrate\":48},\"302\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"720p HFR\",\"bitrate\":2500000,\"audioBitrate\":null},\"303\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"1080p HFR\",\"bitrate\":5000000,\"audioBitrate\":null},\"308\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"1440p HFR\",\"bitrate\":10000000,\"audioBitrate\":null},\"313\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"2160p\",\"bitrate\":13000000,\"audioBitrate\":null},\"315\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"2160p HFR\",\"bitrate\":20000000,\"audioBitrate\":null},\"330\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"144p HDR, HFR\",\"bitrate\":80000,\"audioBitrate\":null},\"331\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"240p HDR, HFR\",\"bitrate\":100000,\"audioBitrate\":null},\"332\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"360p HDR, HFR\",\"bitrate\":250000,\"audioBitrate\":null},\"333\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"240p HDR, HFR\",\"bitrate\":500000,\"audioBitrate\":null},\"334\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"720p HDR, HFR\",\"bitrate\":1000000,\"audioBitrate\":null},\"335\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"1080p HDR, HFR\",\"bitrate\":1500000,\"audioBitrate\":null},\"336\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"1440p HDR, HFR\",\"bitrate\":5000000,\"audioBitrate\":null},\"337\":{\"mimeType\":\"video/webm; codecs=\\\"VP9\\\"\",\"qualityLabel\":\"2160p HDR, HFR\",\"bitrate\":12000000,\"audioBitrate\":null}}");

/***/ })

}]);
//# sourceMappingURL=default~home-home-module~tab1-tab1-module~updatecenter-updatecenter-module.js.map