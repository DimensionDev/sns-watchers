;(window.webpackJsonp = window.webpackJsonp || []).push([
  [191],
  {
    '2Jqb': function (e, n, t) {
      ;(function (i) {
        var r
        !(function () {
          var a =
              'function' == typeof Object.defineProperties
                ? Object.defineProperty
                : function (e, n, t) {
                    if (t.get || t.set) throw new TypeError('ES3 does not support getters and setters.')
                    e != Array.prototype && e != Object.prototype && (e[n] = t.value)
                  },
            o = 'undefined' != typeof window && window === this ? this : void 0 !== i && null != i ? i : this
          function c(e, n) {
            if (n) {
              for (var t = o, i = e.split('.'), r = 0; r < i.length - 1; r++) {
                var c = i[r]
                c in t || (t[c] = {}), (t = t[c])
              }
              ;(c = n((r = t[(i = i[i.length - 1])]))) != r &&
                null != c &&
                a(t, i, { configurable: !0, writable: !0, value: c })
            }
          }
          function s(e, n, t) {
            return e.call.apply(e.bind, arguments)
          }
          function d(e, n, t) {
            if (!e) throw Error()
            if (2 < arguments.length) {
              var i = Array.prototype.slice.call(arguments, 2)
              return function () {
                var t = Array.prototype.slice.call(arguments)
                return Array.prototype.unshift.apply(t, i), e.apply(n, t)
              }
            }
            return function () {
              return e.apply(n, arguments)
            }
          }
          function l(e, n, t) {
            return (l =
              Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? s : d).apply(
              null,
              arguments,
            )
          }
          function u(e) {
            var n = []
            return h(new p(), e, n), n.join('')
          }
          function p() {}
          function h(e, n, t) {
            if (null == n) t.push('null')
            else {
              if ('object' == typeof n) {
                if (
                  'array' ==
                  (function (e) {
                    var n = typeof e
                    if ('object' == n) {
                      if (!e) return 'null'
                      if (e instanceof Array) return 'array'
                      if (e instanceof Object) return n
                      var t = Object.prototype.toString.call(e)
                      if ('[object Window]' == t) return 'object'
                      if (
                        '[object Array]' == t ||
                        ('number' == typeof e.length &&
                          void 0 !== e.splice &&
                          void 0 !== e.propertyIsEnumerable &&
                          !e.propertyIsEnumerable('splice'))
                      )
                        return 'array'
                      if (
                        '[object Function]' == t ||
                        (void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable('call'))
                      )
                        return 'function'
                    } else if ('function' == n && void 0 === e.call) return 'object'
                    return n
                  })(n)
                ) {
                  var i = n
                  ;(n = i.length), t.push('[')
                  for (var r = '', a = 0; a < n; a++) t.push(r), h(e, (r = i[a]), t), (r = ',')
                  return void t.push(']')
                }
                if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                  for (i in (t.push('{'), (a = ''), n))
                    Object.prototype.hasOwnProperty.call(n, i) &&
                      'function' != typeof (r = n[i]) &&
                      (t.push(a), m(i, t), t.push(':'), h(e, r, t), (a = ','))
                  return void t.push('}')
                }
                n = n.valueOf()
              }
              switch (typeof n) {
                case 'string':
                  m(n, t)
                  break
                case 'number':
                  t.push(isFinite(n) && !isNaN(n) ? String(n) : 'null')
                  break
                case 'boolean':
                  t.push(String(n))
                  break
                case 'function':
                  t.push('null')
                  break
                default:
                  throw Error('Unknown type: ' + typeof n)
              }
            }
          }
          c('String.prototype.includes', function (e) {
            return (
              e ||
              function (e, n) {
                if (null == this)
                  throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined")
                if (e instanceof RegExp)
                  throw new TypeError('First argument to String.prototype.includes must not be a regular expression')
                return -1 !== (this + '').indexOf(e, n || 0)
              }
            )
          }),
            c('Number.isFinite', function (e) {
              return (
                e ||
                function (e) {
                  return 'number' == typeof e && !isNaN(e) && 1 / 0 !== e && -1 / 0 !== e
                }
              )
            }),
            c('Number.isInteger', function (e) {
              return (
                e ||
                function (e) {
                  return !!Number.isFinite(e) && e === Math.floor(e)
                }
              )
            })
          var f = {
              '"': '\\"',
              '\\': '\\\\',
              '/': '\\/',
              '\b': '\\b',
              '\f': '\\f',
              '\n': '\\n',
              '\r': '\\r',
              '\t': '\\t',
              '\v': '\\u000b',
            },
            b = /\uffff/.test('￿') ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g
          function m(e, n) {
            n.push(
              '"',
              e.replace(b, function (e) {
                var n = f[e]
                return n || ((n = '\\u' + (65536 | e.charCodeAt(0)).toString(16).substr(1)), (f[e] = n)), n
              }),
              '"',
            )
          }
          function g(e) {
            e = String(e)
            try {
              return JSON.parse(e)
            } catch (n) {}
            throw Error('Invalid JSON string: ' + e)
          }
          function _(e) {
            try {
              return 'object' == typeof JSON && 'function' == typeof JSON.stringify ? JSON.stringify(e) : u(e)
            } catch (n) {}
            throw Error('Could not stringify object')
          }
          function y() {
            function e() {
              n.length &&
                n[0](function () {
                  n.shift(), e()
                })
            }
            var n = []
            return function (t) {
              n.push(t), 1 === n.length && e()
            }
          }
          var v = 2,
            w = 200,
            k = 5e3,
            x = '',
            E = {},
            A =
              'undefined' != typeof window &&
              !!(window.performance && window.performance.timing && window.performance.timing.navigationStart),
            S = ''
          function O(e) {
            return e && 'number' == typeof e ? (Date.now() - e).toString() : null
          }
          var C = { didClickJourneyClose: 'Button(X)', didClickJourneyContinue: 'Dismiss Journey text' },
            T = !1,
            I = {
              '/v1/open': { link_identifier: '\\d+' },
              '/v1/pageview': { event: 'pageview' },
              '/v1/dismiss': { event: 'dismiss' },
            },
            j = !1
          function B(e, n) {
            if (e || n) {
              for (
                var t = 'https://bnc.lt/a/' + e + '?',
                  i = 'tags alias channel feature stage campaign type duration sdk source data'.split(' '),
                  r = 0;
                r < i.length;
                r++
              ) {
                var a = i[r],
                  o = n[a]
                if (o)
                  if ('tags' === a && Array.isArray(o))
                    for (var c = 0; c < o.length; c++)
                      t = ('?' === t[t.length - 1] ? t + a : t + '&' + a) + '=' + encodeURIComponent(o[c])
                  else
                    (('string' == typeof o && 0 < o.length) || 'number' == typeof o) &&
                      ('data' === a && 'string' == typeof o && (o = U(o)),
                      (t = ('?' === t[t.length - 1] ? t + a : t + '&' + a) + '=' + encodeURIComponent(o)))
              }
              return t
            }
          }
          function P(e) {
            e &&
              ((e.ha = null),
              (e.N = null),
              (e.H = null),
              (e.A = null),
              (e.g = null),
              (e.D = null),
              e.u && delete e.u,
              e.v && delete e.v,
              e.c.remove('branch_view_enabled'),
              rn(e.c, {}, !0))
          }
          function N(e, n, t) {
            return (
              (e = e.replace(/\$(\d)/g, function (e, t) {
                return n[parseInt(t, 10) - 1]
              })),
              t && (e += '\n Failure Code:' + t),
              e
            )
          }
          function D(e) {
            var n = e.has_app
            return {
              data: e.data || '',
              data_parsed: e.data_parsed || {},
              has_app: void 0 === n ? null : n,
              identity: e.developer_identity || null,
              developer_identity: e.developer_identity || null,
              referring_identity: e.referring_identity || null,
              referring_link: e.referring_link || null,
            }
          }
          function L() {
            return ge() ? document.referrer : String(window.location)
          }
          function R(e) {
            e.source = 'web-sdk'
            var n = e.data
            switch (typeof n) {
              case 'string':
                try {
                  n = g(n)
                } catch (t) {
                  n = { _bncNoEval: !0 }
                }
                break
              case 'object':
                break
              default:
                n = {}
            }
            n.$canonical_url || (n.$canonical_url = L()),
              n.$og_title || (n.$og_title = Z('title')),
              n.$og_description || (n.$og_description = Z('description')),
              n.$og_image_url || (n.$og_image_url = Z('image')),
              n.$og_video || (n.$og_video = Z('video')),
              n.$og_type || (n.$og_type = Z('type')),
              'string' == typeof n.$desktop_url &&
                (n.$desktop_url = n.$desktop_url
                  .replace(/#r:[a-z0-9-_]+$/i, '')
                  .replace(/([\?\&]_branch_match_id=\d+)/, ''))
            try {
              g(n)
            } catch (t) {
              n = u(n)
            }
            return (e.data = n), e
          }
          function H(e) {
            if (!e || 'string' != typeof e) return ''
            var n = document.createElement('a')
            return (
              (n.href = e),
              (e =
                n.pathname &&
                n.pathname.split('/').filter(function (e) {
                  return '' !== e
                })),
              Array.isArray(e) && e.length ? e[e.length - 1] + n.search : n.search
            )
          }
          function $(e, n, t) {
            if (((e && 'object' == typeof e) || (e = {}), !n || 'object' != typeof n)) return e
            for (var i in n)
              if (n.hasOwnProperty(i)) {
                var r = n[i]
                t && null == r ? delete e[i] : (e[i] = r)
              }
            return e
          }
          function M(e) {
            return !!/^((?!chrome|android|crios|firefox|fxios|edg|yabrowser).)*safari/i.test(e)
          }
          function z(e, n) {
            n = n || 11
            var t = /version\/([^ ]*)/i.exec(e)
            if (t && t[1])
              try {
                if (parseFloat(t[1]) >= n) return !0
              } catch (i) {}
            return !1
          }
          function F() {
            var e = navigator.userAgent
            return e.match(/android/i)
              ? 'android'
              : e.match(/ipad/i) ||
                (e && M(e) && e && -1 < e.indexOf('Macintosh') && z(e, 13) && screen.height > screen.width)
              ? 'ipad'
              : e.match(/i(os|p(hone|od))/i)
              ? 'ios'
              : e.match(/\(BB[1-9][0-9]*\;/i)
              ? 'blackberry'
              : e.match(/Windows Phone/i)
              ? 'windows_phone'
              : !!(
                  e.match(/Kindle/i) ||
                  e.match(/Silk/i) ||
                  e.match(/KFTT/i) ||
                  e.match(/KFOT/i) ||
                  e.match(/KFJWA/i) ||
                  e.match(/KFJWI/i) ||
                  e.match(/KFSOWI/i) ||
                  e.match(/KFTHWA/i) ||
                  e.match(/KFTHWI/i) ||
                  e.match(/KFAPWA/i) ||
                  e.match(/KFAPWI/i)
                ) && 'kindle'
          }
          function J() {
            var e = navigator.userAgent
            return !!M(e) && z(e, 11)
          }
          function W() {
            var e = navigator.userAgent
            return (
              !!window.webkitURL &&
              e &&
              e &&
              /(iPad|iPod|iPhone)/.test(e) &&
              !/(chrome|crios)/i.test(e) &&
              !/(fxios|firefox)/i.test(e) &&
              !/edg/i.test(e) &&
              !/(opt|opr)/i.test(e) &&
              !/yabrowser/i.test(e)
            )
          }
          function q(e) {
            try {
              var n = (ge() && _e() ? window.top.location.search : window.location.search)
                .substring(1)
                .match(new RegExp(e + '=([^&]*)'))
              if (n && 1 <= n.length) return n[1]
            } catch (t) {}
          }
          function U(e) {
            var n,
              t,
              i,
              r,
              a,
              o,
              c = '',
              s = 0
            for (e = e.replace(/\r\n/g, '\n'), t = '', i = 0; i < e.length; i++)
              128 > (r = e.charCodeAt(i))
                ? (t += String.fromCharCode(r))
                : (127 < r && 2048 > r
                    ? (t += String.fromCharCode((r >> 6) | 192))
                    : ((t += String.fromCharCode((r >> 12) | 224)), (t += String.fromCharCode(((r >> 6) & 63) | 128))),
                  (t += String.fromCharCode((63 & r) | 128)))
            for (e = t; s < e.length; )
              (r = (n = e.charCodeAt(s++)) >> 2),
                (n = ((3 & n) << 4) | ((t = e.charCodeAt(s++)) >> 4)),
                (a = ((15 & t) << 2) | ((i = e.charCodeAt(s++)) >> 6)),
                (o = 63 & i),
                isNaN(t) ? (o = a = 64) : isNaN(i) && (o = 64),
                (c =
                  c +
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(r) +
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(n) +
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(a) +
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(o))
            return c
          }
          function K(e) {
            return V(e) ? atob(e) : e
          }
          function V(e) {
            if ('string' != typeof e || '' === e || '' === e.trim()) return !1
            try {
              return btoa(atob(e)) === e
            } catch (n) {
              return !1
            }
          }
          function G(e) {
            return (
              e &&
                e.browser_fingerprint_id &&
                !V(e.browser_fingerprint_id) &&
                (e.browser_fingerprint_id = btoa(e.browser_fingerprint_id)),
              e &&
                e.alternative_browser_fingerprint_id &&
                !V(e.alternative_browser_fingerprint_id) &&
                (e.alternative_browser_fingerprint_id = btoa(e.alternative_browser_fingerprint_id)),
              e
            )
          }
          function Y(e) {
            return (
              e && V(e.browser_fingerprint_id) && (e.browser_fingerprint_id = atob(e.browser_fingerprint_id)),
              e &&
                V(e.alternative_browser_fingerprint_id) &&
                (e.alternative_browser_fingerprint_id = atob(e.alternative_browser_fingerprint_id)),
              e
            )
          }
          function X(e, n, t) {
            'function' == typeof e.addEventListener
              ? e.addEventListener(n, t, void 0)
              : 'function' == typeof e.attachEvent
              ? e.attachEvent('on' + n, t)
              : (e['on' + n] = t)
          }
          function Q(e) {
            return e
              ? (-1 < e.indexOf('://') ? (e = e.split('://')[1]) : '/' === e.charAt(0) && (e = e.slice(1)), e)
              : null
          }
          function Z(e) {
            var n
            return (
              (e = String(e)),
              (n = n || null),
              (e = document.querySelector('meta[property="og:' + e + '"]')) && e.content && (n = e.content),
              n
            )
          }
          function ee() {
            var e = document.getElementsByTagName('meta'),
              n = {}
            if (!e || 0 === e.length) return n
            for (
              var t = {
                  hostedIOS: null,
                  hostedAndroid: null,
                  applinksIOS: null,
                  applinksAndroid: null,
                  twitterIOS: null,
                  twitterAndroid: null,
                },
                i = 0;
              i < e.length;
              i++
            )
              if ((e[i].getAttribute('name') || e[i].getAttribute('property')) && e[i].getAttribute('content')) {
                var r = e[i].getAttribute('name'),
                  a = e[i].getAttribute('property')
                3 === (a = (r = r || a).split(':')).length &&
                  'branch' === a[0] &&
                  'deeplink' === a[1] &&
                  ('$ios_deeplink_path' === a[2]
                    ? (t.hostedIOS = Q(e[i].getAttribute('content')))
                    : '$android_deeplink_path' === a[2]
                    ? (t.hostedAndroid = Q(e[i].getAttribute('content')))
                    : (n[a[2]] = e[i].getAttribute('content'))),
                  'al:ios:url' === r && (t.applinksIOS = Q(e[i].getAttribute('content'))),
                  'twitter:app:url:iphone' === r && (t.twitterIOS = Q(e[i].getAttribute('content'))),
                  'al:android:url' === r && (t.applinksAndroid = Q(e[i].getAttribute('content'))),
                  'twitter:app:url:googleplay' === r && (t.twitterAndroid = Q(e[i].getAttribute('content')))
              }
            return (
              t &&
                'object' == typeof t &&
                Object.keys(t).length &&
                (t.hostedIOS
                  ? (n.$ios_deeplink_path = t.hostedIOS)
                  : t.applinksIOS
                  ? (n.$ios_deeplink_path = t.applinksIOS)
                  : t.twitterIOS && (n.$ios_deeplink_path = t.twitterIOS),
                t.hostedAndroid
                  ? (n.$android_deeplink_path = t.hostedAndroid)
                  : t.applinksAndroid
                  ? (n.$android_deeplink_path = t.applinksAndroid)
                  : t.twitterAndroid && (n.$android_deeplink_path = t.twitterAndroid),
                n.hasOwnProperty('$ios_deeplink_path') &&
                  n.hasOwnProperty('$android_deeplink_path') &&
                  n.$ios_deeplink_path === n.$android_deeplink_path &&
                  (n.$deeplink_path = n.$ios_deeplink_path)),
              n
            )
          }
          function ne() {
            var e
            try {
              navigator.languages && 0 < navigator.languages.length
                ? (e = navigator.languages[0])
                : navigator.language && (e = navigator.language),
                (e = e.substring(0, 2).toUpperCase())
            } catch (n) {
              e = null
            }
            return e
          }
          function te(e, n) {
            var t = []
            return (
              n.forEach(function (n) {
                ;-1 === e.indexOf(n) && t.push(n)
              }),
              t
            )
          }
          var ie = ['purchase'],
            re =
              "event name is either missing, of the wrong type or not valid. Please specify 'purchase' as the event name.",
            ae =
              'commerce_data is either missing, of the wrong type or empty. Please ensure that commerce_data is constructed correctly.',
            oe = 'Please remove the following keys from the root of commerce_data: ',
            ce = 'Please remove the following keys from commerce_data.products: ',
            se = 'commerce_data.products must be an array of objects',
            de = 'Each product in the products list must be an object'
          function le(e, n) {
            if (!e || 'string' != typeof e || -1 === ie.indexOf(e.toLowerCase())) return re
            if (!n || 'object' != typeof n || !Object.keys(n).length) return ae
            var t = (function (e) {
              var n = 'sku name price quantity brand category variant'.split(' '),
                t = te(
                  'common type transaction_id currency revenue revenue_in_usd exchange_rate shipping tax coupon affiliation persona products'.split(
                    ' ',
                  ),
                  Object.keys(e),
                )
              if (t.length) return oe + t.join(', ')
              var i,
                r = []
              if (e.hasOwnProperty('products')) {
                if (!Array.isArray(e.products)) return se
                if (
                  (e.products.forEach(function (e) {
                    'object' != typeof e && (i = de), (r = r.concat(te(n, Object.keys(e))))
                  }),
                  i)
                )
                  return i
                if (r.length) return ce + r.join(', ')
              }
              return null
            })(n)
            return t || null
          }
          function ue(e) {
            return 'string' != typeof e ? null : e.replace(/</g, '&lt;').replace(/>/g, '&gt;')
          }
          function pe(e, n, t) {
            if (null != t) {
              if ('object' == typeof t && !Object.keys(t).length) return e
              e[n] = t
            }
            return e
          }
          var he =
              'ADD_TO_CART ADD_TO_WISHLIST VIEW_CART INITIATE_PURCHASE ADD_PAYMENT_INFO PURCHASE SPEND_CREDITS SEARCH VIEW_ITEM VIEW_ITEMS RATE SHARE COMPLETE_REGISTRATION COMPLETE_TUTORIAL ACHIEVE_LEVEL UNLOCK_ACHIEVEMENT LOGIN SUBSCRIBE START_TRIAL INVITE RESERVE VIEW_AD CLICK_AD'.split(
                ' ',
              ),
            fe = 'transaction_id revenue currency shipping tax coupon affiliation search_query description'.split(' ')
          function be(e, n) {
            return (
              !(!n || (null === e && 'object' === n)) &&
              ('array' === n ? Array.isArray(e) : typeof e === n && !Array.isArray(e))
            )
          }
          function me(e) {
            var n = pe((n = {}), 'http_origin', document.URL)
            ;(n = pe(n, 'user_agent', navigator.userAgent)),
              (n = pe(n, 'language', ne())),
              (n = pe(n, 'screen_width', screen.width || 0)),
              (n = pe(n, 'screen_height', screen.height || 0)),
              (n = pe(n, 'http_referrer', document.referrer)),
              (n = pe(n, 'browser_fingerprint_id', e.D)),
              (n = pe(n, 'developer_identity', e.g)),
              (n = pe(n, 'identity', e.g)),
              (n = pe(n, 'sdk', 'web'))
            return pe(n, 'sdk_version', '2.56.2')
          }
          function ge() {
            return window.self !== window.top
          }
          function _e() {
            var e = 'true'
            try {
              window.top.location.search && (e = 'true')
            } catch (n) {
              return !1
            }
            return 'true' === e
          }
          function ye(e) {
            return e || (ge() ? (_e() ? window.top.document.referrer : '') : document.referrer)
          }
          function ve(e) {
            if (!be(e, 'object') || !Object.keys(e).length) return {}
            for (var n in e)
              e.hasOwnProperty(n) && (e[n] = be(e[n], 'object') || be(e[n], 'array') ? _(e[n]) : e[n].toString())
            return e
          }
          function we(e, n) {
            var t = e ? $({}, e) : {}
            return n && 0 < Object.keys(n).length ? (0 < Object.keys(t).length ? $(t, n) : $({}, n)) : t
          }
          function ke(e) {
            '' !== x && e.setAttribute('nonce', x)
          }
          function xe(e, n) {
            isNaN(n) || 0 >= n ? e() : setTimeout(e, n)
          }
          function Ee(e, n) {
            return function (t, i, r) {
              if (T) return !1
              if ('number' == typeof r || r)
                if (0 === n) {
                  if ('object' != typeof r) return N('API request $1, parameter $2 is not $3', [t, i, 'an object'])
                } else if (3 === n) {
                  if (!(r instanceof Array)) return N('API request $1, parameter $2 is not $3', [t, i, 'an array'])
                } else if (2 === n) {
                  if ('number' != typeof r) return N('API request $1, parameter $2 is not $3', [t, i, 'a number'])
                } else if (4 === n) {
                  if ('boolean' != typeof r) return N('API request $1, parameter $2 is not $3', [t, i, 'a boolean'])
                } else {
                  if ('string' != typeof r) return N('API request $1, parameter $2 is not $3', [t, i, 'a string'])
                  if (1 !== n && !n.test(r))
                    return N('API request $1, parameter $2 is not $3', [t, i, 'in the proper format'])
                }
              else if (e) return N('API request $1 missing parameter $2', [t, i])
              return !1
            }
          }
          function Ae(e) {
            return $(e, {
              browser_fingerprint_id: Ee(!0, 1),
              identity_id: Ee(!0, 1),
              sdk: Ee(!0, 1),
              session_id: Ee(!0, 1),
            })
          }
          var Se = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/open',
              method: 'POST',
              a: {
                browser_fingerprint_id: Ee(!1, 1),
                alternative_browser_fingerprint_id: Ee(!1, 1),
                identity_id: Ee(!1, 1),
                link_identifier: Ee(!1, 1),
                sdk: Ee(!1, 1),
                options: Ee(!1, 0),
                initial_referrer: Ee(!1, 1),
                tracking_disabled: Ee(!1, 4),
                current_url: Ee(!1, 1),
                screen_height: Ee(!1, 2),
                screen_width: Ee(!1, 2),
                identity: Ee(!1, 1),
              },
            },
            Oe = {
              destination: 'https://app.link',
              endpoint: '/_r',
              method: 'GET',
              L: !0,
              a: { sdk: Ee(!0, 1), _t: Ee(!1, 1), branch_key: Ee(!0, 1) },
            },
            Ce = { destination: '', endpoint: '', method: 'GET', f: { link_url: Ee(!0, 1) }, a: { click: Ee(!0, 1) } },
            Te = {
              destination: 'https://bnc.lt',
              endpoint: '/c',
              method: 'POST',
              f: { link_url: Ee(!0, 1) },
              a: { sdk: Ee(!1, 1), phone: Ee(!0, 1) },
            },
            Ie = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/referralcode',
              method: 'POST',
              a: Ae({
                amount: Ee(!0, 2),
                bucket: Ee(!1, 1),
                calculation_type: Ee(!0, 2),
                creation_source: Ee(!0, 2),
                expiration: Ee(!1, 1),
                location: Ee(!0, 2),
                prefix: Ee(!1, 1),
                type: Ee(!0, 1),
              }),
            },
            je = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/referralcode',
              method: 'POST',
              f: { code: Ee(!0, 1) },
              a: Ae({}),
            },
            Be = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/applycode',
              method: 'POST',
              f: { code: Ee(!0, 1) },
              a: Ae({}),
            },
            Pe = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/logout',
              method: 'POST',
              a: Ae({ session_id: Ee(!0, 1) }),
            },
            Ne = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/profile',
              method: 'POST',
              a: Ae({ identity_id: Ee(!0, 1), identity: Ee(!0, 1) }),
            },
            De = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/referrals',
              method: 'GET',
              f: { identity_id: Ee(!0, 1) },
              a: Ae({}),
            },
            Le = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/credithistory',
              method: 'GET',
              a: Ae({
                begin_after_id: Ee(!1, 1),
                bucket: Ee(!1, 1),
                direction: Ee(!1, 2),
                length: Ee(!1, 2),
                link_click_id: Ee(!1, 1),
              }),
            },
            Re = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/credits',
              method: 'GET',
              a: Ae({ branch_key: Ee(!0, 1), identity: Ee(!0, 1) }),
            },
            He = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/redeem',
              method: 'POST',
              a: Ae({ amount: Ee(!0, 2), bucket: Ee(!0, 1), identity_id: Ee(!0, 1) }),
            },
            $e = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/url',
              method: 'POST',
              Ba: 'obj',
              a: Ae({
                alias: Ee(!1, 1),
                campaign: Ee(!1, 1),
                channel: Ee(!1, 1),
                data: Ee(!1, 1),
                feature: Ee(!1, 1),
                identity_id: Ee(!0, 1),
                stage: Ee(!1, 1),
                tags: Ee(!1, 3),
                type: Ee(!1, 2),
                source: Ee(!1, 1),
                instrumentation: Ee(!1, 1),
              }),
            },
            Me = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/deepview',
              L: !0,
              method: 'POST',
              a: Ae({
                campaign: Ee(!1, 1),
                _t: Ee(!1, 1),
                channel: Ee(!1, 1),
                data: Ee(!0, 1),
                feature: Ee(!1, 1),
                link_click_id: Ee(!1, 1),
                open_app: Ee(!1, 4),
                append_deeplink_path: Ee(!1, 4),
                stage: Ee(!1, 1),
                tags: Ee(!1, 3),
                deepview_type: Ee(!0, 1),
                source: Ee(!0, 1),
              }),
            },
            ze = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/has-app',
              method: 'GET',
              a: { browser_fingerprint_id: Ee(!0, 1), instrumentation: Ee(!1, 1) },
            },
            Fe = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/event',
              method: 'POST',
              a: Ae({
                event: Ee(!0, 1),
                metadata: Ee(!0, 0),
                initial_referrer: Ee(!1, 1),
                tracking_disabled: Ee(!1, 4),
              }),
            },
            Je = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/event',
              method: 'POST',
              a: Ae({ event: Ee(!0, 1), metadata: Ee(!1, 0), initial_referrer: Ee(!1, 1), commerce_data: Ee(!0, 0) }),
            },
            We = {
              destination: 'https://api2.branch.io',
              endpoint: '/v2/event/standard',
              method: 'POST',
              a: {
                name: Ee(!0, 1),
                user_data: Ee(!0, 1),
                custom_data: Ee(!1, 1),
                event_data: Ee(!1, 1),
                content_items: Ee(!1, 1),
                customer_event_alias: Ee(!1, 1),
              },
            },
            qe = {
              destination: 'https://api2.branch.io',
              endpoint: '/v2/event/custom',
              method: 'POST',
              a: {
                name: Ee(!0, 1),
                user_data: Ee(!0, 1),
                custom_data: Ee(!1, 1),
                content_items: Ee(!1, 1),
                customer_event_alias: Ee(!1, 1),
              },
            },
            Ue = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/pageview',
              method: 'POST',
              a: Ae({
                event: Ee(!0, 1),
                metadata: Ee(!1, 0),
                initial_referrer: Ee(!1, 1),
                tracking_disabled: Ee(!1, 4),
                branch_view_id: Ee(!1, 1),
                no_journeys: Ee(!1, 4),
                user_language: Ee(!1, 1),
                open_app: Ee(!1, 4),
                has_app_websdk: Ee(!1, 4),
                source: Ee(!1, 1),
                feature: Ee(!1, 1),
                is_iframe: Ee(!1, 4),
                data: Ee(!1, 0),
                callback_string: Ee(!1, 1),
                journey_displayed: Ee(!1, 4),
                audience_rule_id: Ee(!1, 1),
                journey_dismissals: Ee(!1, 0),
                identity: Ee(!1, 1),
              }),
            },
            Ke = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/dismiss',
              method: 'POST',
              a: Ae({
                event: Ee(!0, 1),
                metadata: Ee(!1, 0),
                initial_referrer: Ee(!1, 1),
                tracking_disabled: Ee(!1, 4),
                branch_view_id: Ee(!1, 1),
                no_journeys: Ee(!1, 4),
                user_language: Ee(!1, 1),
                open_app: Ee(!1, 4),
                has_app_websdk: Ee(!1, 4),
                source: Ee(!1, 1),
                feature: Ee(!1, 1),
                is_iframe: Ee(!1, 4),
                data: Ee(!1, 0),
                callback_string: Ee(!1, 1),
                journey_displayed: Ee(!1, 4),
                audience_rule_id: Ee(!1, 1),
                journey_dismissals: Ee(!1, 0),
                dismissal_source: Ee(!1, 1),
              }),
            },
            Ve = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/cpid',
              method: 'POST',
              a: { user_data: Ee(!0, 1) },
            },
            Ge = {
              destination: 'https://api2.branch.io',
              endpoint: '/v1/cpid/latd',
              method: 'POST',
              a: { user_data: Ee(!0, 1) },
            }
          function Ye(e) {
            for (var n = 0; n < e.length; n++) {
              var t
              if ((t = 'function' == typeof (t = this[e[n]]) ? t() : t).isEnabled()) return (t.w = {}), t
            }
          }
          function Xe(e) {
            return 'branch_session' === e || 'branch_session_first' === e ? e : 'BRANCH_WEBSDK_KEY' + e
          }
          function Qe(e) {
            return 'true' === e || ('false' !== e && e)
          }
          function Ze(e) {
            return 'branch_session' === e || 'branch_session_first' === e || 0 === e.indexOf('BRANCH_WEBSDK_KEY')
          }
          function en(e) {
            var n = (e = e.trim()).indexOf('=')
            return { name: e.substring(0, n), value: Qe(e.substring(n + 1, e.length)) }
          }
          function nn(e) {
            var n
            try {
              n = e && localStorage ? localStorage : sessionStorage
            } catch (t) {
              return {
                isEnabled: function () {
                  return !1
                },
              }
            }
            return {
              getAll: function () {
                if (void 0 === n) return null
                var e,
                  t = null
                for (e in n)
                  e.indexOf('BRANCH_WEBSDK_KEY') ||
                    (null === t && (t = {}), (t[e.replace('BRANCH_WEBSDK_KEY', '')] = Qe(n.getItem(e))))
                return Y(t)
              },
              get: function (e, t) {
                return 'browser_fingerprint_id' === e || 'alternative_browser_fingerprint_id' === e
                  ? t && localStorage
                    ? K(localStorage.getItem(Xe(e)))
                    : K(n.getItem(Xe(e)))
                  : Qe(t && localStorage ? localStorage.getItem(Xe(e)) : n.getItem(Xe(e)))
              },
              set: function (e, t, i) {
                i && localStorage ? localStorage.setItem(Xe(e), t) : n.setItem(Xe(e), t)
              },
              remove: function (e, t) {
                t && localStorage ? localStorage.removeItem(Xe(e)) : n.removeItem(Xe(e))
              },
              clear: function () {
                Object.keys(n).forEach(function (e) {
                  e.indexOf('BRANCH_WEBSDK_KEY') || n.removeItem(e)
                })
              },
              isEnabled: function () {
                try {
                  return n.setItem('test', ''), n.removeItem('test'), !0
                } catch (t) {
                  return !1
                }
              },
            }
          }
          function tn(e, n) {
            try {
              return Y(g(e.get(n ? 'branch_session_first' : 'branch_session', n)) || null)
            } catch (t) {
              return null
            }
          }
          function rn(e, n, t) {
            ;(n = G(n)), e.set('branch_session', u(n)), t && e.set('branch_session_first', u(n), !0)
          }
          function an(e, n) {
            if (n) {
              var t = u(G($((t = tn(e) || {}), n)))
              e.set('branch_session', t)
            }
          }
          function on(e, n, t) {
            function i(e, n) {
              return G($(g(e), n, t))
            }
            var r = e.get('branch_session', !1) || {}
            e.set('branch_session', u(i(r, n))),
              (r = e.get('branch_session_first', !0) || {}),
              e.set('branch_session_first', u(i(r, n)), !0)
          }
          function cn() {}
          function sn(e, n, t) {
            if (void 0 === n) return ''
            var i = []
            if (n instanceof Array) {
              for (e = 0; e < n.length; e++) i.push(encodeURIComponent(t) + '=' + encodeURIComponent(n[e]))
              return i.join('&')
            }
            for (var r in n)
              n.hasOwnProperty(r) &&
                (n[r] instanceof Array || 'object' == typeof n[r]
                  ? i.push(sn(e, n[r], t ? t + '.' + r : r))
                  : i.push(encodeURIComponent(t ? t + '.' + r : r) + '=' + encodeURIComponent(n[r])))
            return i.join('&')
          }
          function dn(e, n, t, i, r) {
            var a = Date.now(),
              o = S
            !e.h && J() && e.h++
            var c = 'branch_callback__' + e.h++
            ;(e = 0 <= n.indexOf('branch.io') ? '&data=' : '&post_data='),
              (t = 'POST' === i ? encodeURIComponent(U(u(t))) : '')
            var s = window.setTimeout(function () {
              ;(window[c] = function () {}), pe(E, o, O(a)), r(Error('Request timed out'), null, 504)
            }, k)
            ;(window[c] = function (e) {
              window.clearTimeout(s), r(null, e)
            }),
              (function (e, n, t) {
                var i = document.createElement('script')
                ;(i.type = 'text/javascript'),
                  (i.async = !0),
                  (i.src = e),
                  ke(i),
                  !(e = document.getElementsByTagName('head')) || 1 > e.length
                    ? 'function' == typeof n && n()
                    : (e[0].appendChild(i),
                      'function' == typeof n && X(i, 'error', n),
                      'function' == typeof t && X(i, 'load', t))
              })(
                n +
                  (0 > n.indexOf('?') ? '?' : '') +
                  (t ? e + t : '') +
                  (0 <= n.indexOf('/c/') ? '&click=1' : '') +
                  '&callback=' +
                  c,
                function () {
                  r(Error('Request blocked by client, probably adblock'), null)
                },
                function () {
                  pe(E, o, O(a))
                  try {
                    'function' == typeof this.remove ? this.remove() : this.parentNode.removeChild(this)
                  } catch (e) {}
                  delete window[c]
                },
              )
          }
          function ln(e, n, t, i, r) {
            function a() {
              i.get('use_jsonp') || n.L
                ? dn(e, d, t, n.method, o)
                : (function (e, n, t, i, r, a) {
                    var o = Date.now(),
                      c = S,
                      s = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
                    ;(s.ontimeout = function () {
                      pe(E, c, O(o)), a(Error('Request timed out'), null, 504)
                    }),
                      (s.onerror = function (e) {
                        a(Error(e.error || 'Error in API: ' + s.status), null, s.status)
                      }),
                      (s.onreadystatechange = function () {
                        var e
                        if (4 === s.readyState)
                          if ((pe(E, c, O(o)), 200 === s.status)) {
                            try {
                              e = g(s.responseText)
                            } catch (u) {
                              e = {}
                            }
                            a(null, e, s.status)
                          } else
                            402 === s.status
                              ? a(Error('Not enough credits to redeem.'), null, s.status)
                              : ('4' !== s.status.toString().substring(0, 1) &&
                                  '5' !== s.status.toString().substring(0, 1)) ||
                                (s.responseURL && s.responseURL.includes('v2/event')
                                  ? a(s.responseText, null, s.status)
                                  : a(Error('Error in API: ' + s.status), null, s.status))
                      })
                    try {
                      s.open(i, n, !0),
                        (s.timeout = k),
                        s.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                        s.send(t)
                    } catch (d) {
                      r.set('use_jsonp', !0), dn(e, n, t, i, a)
                    }
                  })(e, d, u, n.method, i, o)
            }
            function o(t, i, o) {
              'function' == typeof e.aa && e.aa(d, n.method, l, t, o, i),
                t && 0 < p && '5' === (o || '').toString().substring(0, 1)
                  ? (p--,
                    window.setTimeout(function () {
                      a()
                    }, w))
                  : r(t, i)
            }
            if (
              ((S =
                '/v1/pageview' === n.endpoint && t && t.journey_displayed
                  ? n.endpoint + '-1-brtt'
                  : n.endpoint + '-brtt'),
              ('/v1/url' === n.endpoint || '/v1/has-app' === n.endpoint) &&
                1 < Object.keys(E).length &&
                (delete E['-brtt'], (t.instrumentation = _($({}, E))), (E = {})),
              T)
            )
              for (
                var c = ['browser_fingerprint_id', 'alternative_browser_fingerprint_id', 'identity_id', 'session_id'],
                  s = 0;
                s < c.length;
                s++
              )
                t.hasOwnProperty(c[s]) && delete t[c[s]]
            if (
              (c = (function (e, n, t) {
                function i(e, t) {
                  if ((void 0 === t && (t = {}), e.branch_key && s.test(e.branch_key)))
                    return (t.branch_key = e.branch_key), t
                  if (e.app_id && c.test(e.app_id)) return (t.app_id = e.app_id), t
                  if (!e.instrumentation)
                    throw Error(N('API request $1 missing parameter $2', [n.endpoint, 'branch_key or app_id']))
                  t.instrumentation = e.instrumentation
                }
                var r,
                  a,
                  o = n.destination + n.endpoint,
                  c = /^[0-9]{15,20}$/,
                  s = /key_(live|test)_[A-Za-z0-9]{32}/
                if ('/v1/has-app' === n.endpoint)
                  try {
                    n.f = i(t, n.f)
                  } catch (u) {
                    return { error: u.message }
                  }
                if (void 0 !== n.f)
                  for (r in n.f)
                    if (n.f.hasOwnProperty(r)) {
                      if ((a = 'function' == typeof n.f[r] ? n.f[r](n.endpoint, r, t[r]) : a)) return { error: a }
                      o += '/' + t[r]
                    }
                var d = {}
                if (void 0 !== n.a && '/v1/pageview' !== n.endpoint && '/v1/dismiss' !== n.endpoint) {
                  for (r in n.a)
                    if (n.a.hasOwnProperty(r)) {
                      if ((a = n.a[r](n.endpoint, r, t[r]))) return { error: a }
                      void 0 !== (a = t[r]) && '' !== a && null !== a && (d[r] = a)
                    }
                } else ('/v1/pageview' !== n.endpoint && '/v1/dismiss' !== n.endpoint) || $(d, t)
                if ('POST' === n.method || '/v1/credithistory' === n.endpoint)
                  try {
                    t = i(t, d)
                  } catch (u) {
                    return { error: u.message }
                  }
                return (
                  '/v1/event' === n.endpoint &&
                    ((d.metadata = _(d.metadata || {})),
                    d.hasOwnProperty('commerce_data') && (d.commerce_data = _(d.commerce_data || {}))),
                  ('/v1/pageview' === n.endpoint || '/v1/dismiss' === n.endpoint) &&
                    d.metadata &&
                    (d.metadata = _(d.metadata || {})),
                  '/v1/open' === n.endpoint && (d.options = _(d.options || {})),
                  { data: sn(e, d, ''), url: o.replace(/^\//, '') }
                )
              })(e, n, t)).error
            )
              return r(Error(_({ message: c.error, endpoint: n.endpoint, data: t })))
            var d,
              l,
              u = ''
            'GET' === n.method ? (d = c.url + '?' + c.data) : ((d = c.url), (u = c.data)),
              (l = i.get('use_jsonp') || n.L ? t : u)
            var p = v
            if (
              T &&
              (function (e, n) {
                var t = document.createElement('a')
                if (((t.href = e), '/' != (t = t.pathname)[0] && (t = '/' + t), !(t = I[t]))) return !0
                if (0 < Object.keys(t).length) {
                  if (!n) return !0
                  for (var i in t) {
                    var r = new RegExp(t[i])
                    if (!n.hasOwnProperty(i) || !r.test(n[i])) return !0
                  }
                }
                return !1
              })(d, t)
            )
              return j
                ? o(Error('Requested operation cannot be completed since tracking is disabled'), null, 300)
                : o(null, {}, 200)
            a()
          }
          function un(e) {
            e && e.parentNode.removeChild(e)
          }
          function pn(e, n) {
            e && !e.className.match(new RegExp('(\\s|^)' + n + '(\\s|$)')) && (e.className += ' ' + n)
          }
          function hn(e) {
            var n = document.body
            n &&
              n.className.match(new RegExp('(\\s|^)' + e + '(\\s|$)')) &&
              (n.className = n.className.replace(new RegExp('(\\s|^)' + e + '(\\s|$)'), ' '))
          }
          function fn(e) {
            return document.body.currentStyle
              ? document.body.currentStyle[
                  (function (e) {
                    return e.replace(/(\-\w)/g, function (e) {
                      return e[1].toUpperCase()
                    })
                  })(e)
                ]
              : window.getComputedStyle(document.body).getPropertyValue(e)
          }
          function bn(e) {
            function n(e) {
              function t() {
                return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100
              }
              function i() {
                return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100
              }
              if (!e) return 0
              var r = e.replace(/[0-9,\.]/g, '')
              e = e.match(/\d+/g)
              var a = parseInt(0 < e.length ? e[0] : '0', 10)
              return parseInt(
                {
                  px: function (e) {
                    return e
                  },
                  em: function (e) {
                    return document.body.currentStyle
                      ? e * n(document.body.currentStyle.fontSize)
                      : e * parseFloat(window.getComputedStyle(document.body).fontSize)
                  },
                  rem: function (e) {
                    return document.documentElement.currentStyle
                      ? e * n(document.documentElement.currentStyle.fontSize)
                      : e * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
                  },
                  vw: function (e) {
                    return e * i()
                  },
                  vh: function (e) {
                    return e * t()
                  },
                  vmin: function (e) {
                    return e * Math.min(t(), i())
                  },
                  vmax: function (e) {
                    return e * Math.max(t(), i())
                  },
                  '%': function () {
                    return (document.body.clientWidth / 100) * a
                  },
                }[r](a),
                10,
              )
            }
            return (n('76px') + n(e)).toString() + 'px'
          }
          function mn(e, n) {
            return '#branch-banner-iframe { position: ' + ('top' !== n || e ? 'fixed' : 'absolute') + '; }\n'
          }
          function gn(e, n) {
            var t
            if (e.B || e.M) {
              if (e.B) {
                t = ''
                for (var i = 0; 5 > i; i++)
                  (t +=
                    '<span class="star"><svg class="star" fill="#555555" height="12" viewBox="3 2 20 19" width="12"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="star">☆</span></foreignObject></svg>'),
                    e.B > i &&
                      (t +=
                        i + 1 > e.B && e.B % 1
                          ? '<span class="half"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12"><defs><path d="M0 0h24v24H0V0z" id="a"/></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"/></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg><foreignObject display="none"><span class="half">★</span></foreignObject></span>'
                          : '<span class="full"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="full">★</span></foreignObject></svg> </span>'),
                    (t += '</span>')
                t = '<span class="stars">' + t + '</span>'
              } else t = ''
              t = '<div class="reviews">' + t + (e.M ? '<span class="review-count">' + e.M + '</span>' : '') + '</div>'
            } else t = ''
            return (
              '<div class="content' +
              (e.theme ? ' theme-' + e.theme : '') +
              '"><div class="right">' +
              n +
              '</div><div class="left">' +
              (e.ia ? '' : '<div id="branch-banner-close" class="branch-animation" aria-label="Close">&times;</div>') +
              '<div class="icon"><img src="' +
              e.icon +
              '" alt="Application icon"></div><div class="details vertically-align-middle"><div class="title">' +
              e.title +
              '</div>' +
              t +
              '<div class="description">' +
              e.description +
              '</div></div></div></div>'
            )
          }
          function _n(e, n, t, i) {
            function r() {
              o(),
                (d.style.background = '#FFD4D4'),
                (s.className = 'error'),
                setTimeout(function () {
                  ;(d.style.background = '#FFFFFF'), (s.className = '')
                }, 2e3)
            }
            function a() {
              ;((c = e.createElement('div')).className = 'branch-icon-wrapper'),
                (c.id = 'branch-checkmark'),
                (c.style = 'opacity: 0;'),
                (c.innerHTML = window.ActiveXObject
                  ? '<span class="checkmark">&#x2713;</span>'
                  : '<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve"><path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/></svg>'),
                u.appendChild(c),
                (d.style.opacity = '0'),
                (s.style.opacity = '0'),
                (l.style.opacity = '0'),
                setTimeout(function () {
                  c.style.opacity = '1'
                }, 20),
                (s.value = '')
            }
            function o() {
              d.removeAttribute('disabled'),
                s.removeAttribute('disabled'),
                (d.style.opacity = '1'),
                (s.style.opacity = '1'),
                (l.style.opacity = '0')
            }
            var c,
              s = e.getElementById('branch-sms-phone'),
              d = e.getElementById('branch-sms-send'),
              l = e.getElementById('branch-loader-wrapper'),
              u = e.getElementById('branch-sms-form-container')
            if (s) {
              var p = s.value
              ;/^\d{7,}$/.test(p.replace(/[\s()+\-\.]|ext/gi, ''))
                ? (kt(n, 'willSendBannerSMS'),
                  d.setAttribute('disabled', ''),
                  s.setAttribute('disabled', ''),
                  (d.style.opacity = '.4'),
                  (s.style.opacity = '.4'),
                  (l.style.opacity = '1'),
                  (s.className = ''),
                  n.sendSMS(p, i, t, function (e) {
                    e
                      ? (kt(n, 'sendBannerSMSError'), r())
                      : (kt(n, 'didSendBannerSMS'),
                        a(),
                        setTimeout(function () {
                          u.removeChild(c), o()
                        }, 3e3))
                  }))
                : r()
            }
          }
          function yn(e, n, t, i) {
            function r(e, t) {
              'function' == typeof e && ((t = e), (e = {})),
                (e = e || {}),
                'top' === n.position ? (o.style.top = '-76px') : 'bottom' === n.position && (o.style.bottom = '-76px'),
                'number' == typeof n.K
                  ? i.set(
                      'hideBanner',
                      (function (e) {
                        var n = new Date()
                        return n.setDate(n.getDate() + e)
                      })(n.K),
                      !0,
                    )
                  : i.set('hideBanner', !0, !0),
                e.Z
                  ? ('top' === n.position
                      ? (document.body.style.marginTop = d)
                      : 'bottom' === n.position && (document.body.style.marginBottom = u),
                    hn('branch-banner-is-active'),
                    un(o),
                    un(document.getElementById('branch-css')),
                    t())
                  : (setTimeout(function () {
                      un(o), un(document.getElementById('branch-css')), t()
                    }, 270),
                    setTimeout(function () {
                      'top' === n.position
                        ? (document.body.style.marginTop = d)
                        : 'bottom' === n.position && (document.body.style.marginBottom = u),
                        hn('branch-banner-is-active')
                    }, 20))
            }
            function a() {
              'top' === n.position ? (o.style.top = '0') : 'bottom' === n.position && (o.style.bottom = '0'),
                kt(e, 'didShowBanner')
            }
            if (
              !(function (e, n) {
                var t = e.get('hideBanner', !0)
                if (n.qa && navigator && Number(navigator.doNotTrack)) return !1
                try {
                  'string' == typeof t && (t = g(t))
                } catch (r) {
                  t = !1
                }
                t = 'number' == typeof t ? new Date() >= new Date(t) : !t
                var i = n.K
                return (
                  'number' == typeof i && (i = !1),
                  !document.getElementById('branch-banner') &&
                    !document.getElementById('branch-banner-iframe') &&
                    (t || i) &&
                    ((n.sa && !F()) ||
                      (n.P && 'android' === F()) ||
                      (n.ta && 'ipad' === F()) ||
                      (n.U && 'ios' === F()) ||
                      (n.R && 'blackberry' === F()) ||
                      (n.T && 'windows_phone' === F()) ||
                      (n.S && 'kindle' === F()))
                )
              })(i, n)
            )
              return kt(e, 'willNotShowBanner'), null
            kt(e, 'willShowBanner')
            var o = (function (e, n) {
              var t =
                '<div id="branch-sms-form-container">' +
                (F()
                  ? '<a id="branch-mobile-action" class="button" href="#" target="_parent">' +
                    ((tn(n) || {}).has_app ? e.na : e.ja) +
                    '</a>'
                  : '<div class="branch-icon-wrapper" id="branch-loader-wrapper" style="opacity: 0;"><div id="branch-spinner"></div></div><div id="branch-sms-block"><form id="sms-form"><input type="phone" aria-label="Enter phone number" class="branch-animation" name="branch-sms-phone" id="branch-sms-phone" placeholder="' +
                    e.pa +
                    '"><button type="submit" id="branch-sms-send" class="branch-animation button">' +
                    e.ra +
                    '</button></form></div>') +
                '</div>'
              if (e.F) {
                var i = document.createElement('iframe')
                ;(i.src = 'about:blank'),
                  (i.style.overflow = 'hidden'),
                  (i.scrolling = 'no'),
                  (i.id = 'branch-banner-iframe'),
                  (i.className = 'branch-animation'),
                  ke(i),
                  document.body.appendChild(i)
                var r = F()
                ;(t =
                  '<html><head></head><body class="' +
                  ('ios' === r || 'ipad' === r
                    ? 'branch-banner-ios'
                    : 'android' === r
                    ? 'branch-banner-android'
                    : 'branch-banner-desktop') +
                  '"><div id="branch-banner" class="branch-animation">' +
                  gn(e, t) +
                  '</body></html>'),
                  i.contentWindow.document.open(),
                  i.contentWindow.document.write(t),
                  i.contentWindow.document.close()
              } else
                ((i = document.createElement('div')).id = 'branch-banner'),
                  (i.className = 'branch-animation'),
                  (i.innerHTML = gn(e, t)),
                  document.body.appendChild(i)
              return i
            })(n, i)
            !(function (e, n) {
              var t =
                  '.branch-banner-is-active { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner { width:100%; z-index: 99999; font-family: Helvetica Neue, Sans-serif; -webkit-font-smoothing: antialiased; -webkit-user-select: none; -moz-user-select: none; user-select: none; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n#branch-banner .button{ border: 1px solid ' +
                  (e.buttonBorderColor || ('dark' === e.theme ? 'transparent' : '#ccc')) +
                  '; background: ' +
                  (e.buttonBackgroundColor || '#fff') +
                  '; color: ' +
                  (e.buttonFontColor || '#000') +
                  '; cursor: pointer; margin-top: 0px; font-size: 14px; display: inline-block; margin-left: 5px; font-weight: 400; text-decoration: none;  border-radius: 4px; padding: 6px 12px; transition: all .2s ease;}\n#branch-banner .button:hover {  border: 1px solid ' +
                  (e.buttonBorderColorHover || ('dark' === e.theme ? 'transparent' : '#BABABA')) +
                  '; background: ' +
                  (e.buttonBackgroundColorHover || '#E0E0E0') +
                  '; color: ' +
                  (e.buttonFontColorHover || '#000') +
                  ';}\n#branch-banner .button:focus { outline: none; }\n#branch-banner * { margin-right: 4px; position: relative; line-height: 1.2em; }\n#branch-banner-close { font-weight: 400; cursor: pointer; float: left; z-index: 2;padding: 0 5px 0 5px; margin-right: 0; }\n#branch-banner .content { width:100%; overflow: hidden; height: 76px; background: rgba(255, 255, 255, 0.95); color: #333; ' +
                  ('top' === e.position ? 'border-bottom' : 'border-top') +
                  ': 1px solid #ddd; }\n#branch-banner-close { color: #000; font-size: 24px; top: 14px; opacity: .5; transition: opacity .3s ease; }\n#branch-banner-close:hover { opacity: 1; }\n#branch-banner .title { font-size: 18px; font-weight:bold; color: #555; }\n#branch-banner .description { font-size: 12px; font-weight: normal; color: #777; max-height: 30px; overflow: hidden; }\n#branch-banner .icon { float: left; padding-bottom: 40px; margin-right: 10px; margin-left: 5px; }\n#branch-banner .icon img { width: 63px; height: 63px; margin-right: 0; }\n#branch-banner .reviews { font-size:13px; margin: 1px 0 3px 0; color: #777; }\n#branch-banner .reviews .star { display:inline-block; position: relative; margin-right:0; }\n#branch-banner .reviews .star span { display: inline-block; margin-right: 0; color: #555; position: absolute; top: 0; left: 0; }\n#branch-banner .reviews .review-count { font-size:10px; }\n#branch-banner .reviews .star .half { width: 50%; overflow: hidden; display: block; }\n#branch-banner .content .left { padding: 6px 5px 6px 5px; }\n#branch-banner .vertically-align-middle { top: 50%; transform: translateY(-50%); -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); }\n#branch-banner .details > * { display: block; }\n#branch-banner .content .left { height: 63px; }\n#branch-banner .content .right { float: right; height: 63px; margin-bottom: 50px; padding-top: 22px; z-index: 1; }\n#branch-banner .right > div { float: left; }\n#branch-banner-action { top: 17px; }\n#branch-banner .content:after { content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 1px; background: rgba(0, 0, 0, 0.2); }\n#branch-banner .theme-dark.content { background: rgba(51, 51, 51, 0.95); }\n#branch-banner .theme-dark #branch-banner-close{ color: #fff; text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .details { text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .title { color: #fff; }\n#branch-banner .theme-dark .description { color: #fff; }\n#branch-banner .theme-dark .reviews { color: #888; }\n#branch-banner .theme-dark .reviews .star span{ color: #fff; }\n#branch-banner .theme-dark .reviews .review-count{ color: #fff; }\n',
                i = F()
              ;('ios' !== i && 'ipad' !== i) || !e.U
                ? 'android' === i && e.P
                  ? (t +=
                      '#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n#branch-banner #branch-banner-close,#branch-banner .theme-dark #branch-banner-close { height:17px; width: 17px; text-align: center; font-size: 15px; top: 24px;  border-radius:14px; border:0; line-height:14px; color:#b1b1b3; background:#efefef; padding: 0; opacity: 1; }\n#branch-banner .button { top: 0; text-decoration:none; border-bottom: 3px solid #A4C639; padding: 0 10px; height: 24px; line-height: 24px; text-align: center; color: #fff; margin-top: 2px;  font-weight: bold; background-color: #A4C639; border-radius: 5px; }\n#branch-banner .button:hover { border-bottom:3px solid #8c9c29; background-color: #c1d739; }\n')
                  : ('blackberry' === i && e.R) || ('windows_phone' === i && e.T) || ('kindle' === i && e.S)
                  ? (t +=
                      '#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n')
                  : ((t +=
                      '#branch-banner { position: fixed; min-width: 600px; }\n#branch-sms-block * { vertical-align: bottom; font-size: 15px; }\n#branch-sms-block { display: inline-block; }\n#branch-banner input{ border: 1px solid #ccc;  font-weight: 400;  border-radius: 4px; height: 30px; padding: 5px 7px 4px; width: 145px; font-size: 14px;}\n#branch-banner input:focus { outline: none; }\n#branch-banner input.error { color: rgb(194, 0, 0); border-color: rgb(194, 0, 0); }\n#branch-banner .branch-icon-wrapper { width:25px; height: 25px; vertical-align: middle; display: inline-block; margin-top: -18px; }\n@keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n@-webkit-keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n#branch-spinner { -webkit-animation: branch-spinner 1s ease-in-out infinite; animation: branch-spinner 1s ease-in-out infinite; transition: all 0.7s ease-in-out; border:2px solid #ddd; border-bottom-color:#428bca; width:80%; height:80%; border-radius:50%; -webkit-font-smoothing: antialiased !important; }\n#branch-banner .theme-dark input { border-color: transparent; }\n'),
                    (t = window.ActiveXObject
                      ? t + '#branch-banner .checkmark { color: #428bca; font-size: 22px; }\n'
                      : t +
                        '#branch-banner .checkmark { stroke: #428bca; stroke-dashoffset: 745.74853515625; stroke-dasharray: 745.74853515625; -webkit-animation: dash 2s ease-out forwards; animation: dash 2s ease-out forwards; }\n@-webkit-keyframes dash { 0% { stroke-dashoffset: 745.748535 15625; } 100% { stroke-dashoffset: 0; } }\n@keyframes dash { 0% { stroke-dashoffset: 745.74853515625; } 100% { stroke-dashoffset: 0; } }\n'))
                : (t +=
                    '#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n'),
                (t += e.fa),
                e.F &&
                  ((t += 'body { margin: 0; }\n'),
                  ((i = document.createElement('style')).type = 'text/css'),
                  (i.id = 'branch-iframe-css'),
                  ke(i),
                  (i.innerHTML =
                    'body { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: 76px; z-index: 99999; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n' +
                    (F() ? mn(e.ma, e.position) : mn(e.ga, e.position))),
                  (document.head || document.getElementsByTagName('head')[0]).appendChild(i)),
                ((i = document.createElement('style')).type = 'text/css'),
                (i.id = 'branch-css'),
                (i.innerHTML = t),
                ke(i),
                (t = (t = e.F ? n.contentWindow.document : document).head || t.getElementsByTagName('head')[0]) &&
                  'function' == typeof t.appendChild &&
                  t.appendChild(i),
                'top' === e.position ? (n.style.top = '-76px') : 'bottom' === e.position && (n.style.bottom = '-76px')
            })(n, o),
              (t.channel = t.channel || 'app banner')
            var c = n.F ? o.contentWindow.document : document
            F()
              ? ((n.open_app = n.oa),
                (n.append_deeplink_path = n.da),
                (n.make_new_link = n.la),
                (n.deepview_type = 'banner'),
                e.deepview(t, n),
                (s = c.getElementById('branch-mobile-action')) &&
                  (s.onclick = function (n) {
                    n.preventDefault(), e.deepviewCta()
                  }))
              : c.getElementById('sms-form')
              ? c.getElementById('sms-form').addEventListener('submit', function (i) {
                  i.preventDefault(), _n(c, e, n, t)
                })
              : (o.onload = function () {
                  ;(c = o.contentWindow.document).getElementById('sms-form') &&
                    c.getElementById('sms-form').addEventListener('submit', function (i) {
                      i.preventDefault(), _n(c, e, n, t)
                    })
                })
            var s = fn('margin-top'),
              d = document.body.style.marginTop,
              l = fn('margin-bottom'),
              u = document.body.style.marginBottom,
              p = c.getElementById('branch-banner-close')
            return (
              p &&
                (p.onclick = function (n) {
                  n.preventDefault(),
                    kt(e, 'willCloseBanner'),
                    r({}, function () {
                      kt(e, 'didCloseBanner')
                    })
                }),
              pn(document.body, 'branch-banner-is-active'),
              'top' === n.position
                ? (document.body.style.marginTop = bn(s))
                : 'bottom' === n.position && (document.body.style.marginBottom = bn(l)),
              n.Z ? a() : setTimeout(a, 20),
              r
            )
          }
          ;(Ye.prototype.local = function () {
            return nn(!0)
          }),
            (Ye.prototype.session = function () {
              return nn(!1)
            }),
            (Ye.prototype.cookie = function () {
              return (function () {
                function e(e, n) {
                  n && (e = Xe(e)), (document.cookie = e + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/')
                }
                return {
                  getAll: function () {
                    for (var e = {}, n = document.cookie.split(';'), t = 0; t < n.length; t++) {
                      var i = en(n[t])
                      i &&
                        i.hasOwnProperty('name') &&
                        i.hasOwnProperty('value') &&
                        Ze(i.name) &&
                        (e[i.name.replace('BRANCH_WEBSDK_KEY', '')] = i.value)
                    }
                    return e
                  },
                  get: function (e) {
                    e = Xe(e)
                    for (var n = document.cookie.split(';'), t = 0; t < n.length; t++) {
                      var i = en(n[t])
                      if (i && i.hasOwnProperty('name') && i.hasOwnProperty('value') && i.name === e) return i.value
                    }
                    return null
                  },
                  set: function (e, n) {
                    document.cookie = Xe(e) + '=' + n + '; path=/'
                  },
                  remove: function (n) {
                    e(n, !0)
                  },
                  clear: function () {
                    for (var n = document.cookie.split(';'), t = 0; t < n.length; t++) {
                      var i = en(n[t])
                      i && i.hasOwnProperty('name') && Ze(i.name) && e(i.name, !1)
                    }
                  },
                  isEnabled: function () {
                    return navigator.cookieEnabled
                  },
                }
              })()
            }),
            (Ye.prototype.pojo = {
              getAll: function () {
                return this.w
              },
              get: function (e) {
                return this.w[e] || null
              },
              set: function (e, n) {
                this.w[e] = n
              },
              remove: function (e) {
                delete this.w[e]
              },
              clear: function () {
                this.w = {}
              },
              isEnabled: function () {
                return !0
              },
            }),
            (cn.prototype.h = 0)
          var vn,
            wn = {},
            kn = 1,
            xn = 'top',
            En = 'absolute',
            An = '76px',
            Sn = !1,
            On = !1,
            Cn = [],
            Tn = !1,
            In = window.innerHeight,
            jn = window.innerWidth
          window.innerHeight < window.innerWidth && ((In = window.innerWidth), (jn = window.innerHeight))
          var Bn = 0,
            Pn = 0,
            Nn = !1,
            Dn = /<script type="application\/json">((.|\s)*?)<\/script>/,
            Ln = /<script type="text\/javascript">((.|\s)*?)<\/script>/,
            Rn = /<style type="text\/css" id="branch-css">((.|\s)*?)<\/style>/,
            Hn = /<style type="text\/css" id="branch-iframe-css">((.|\s)*?)<\/style>/,
            $n = /#branch-banner-spacer {((.|\s)*?)}/,
            Mn = /margin-bottom: (.*?);/,
            zn = null,
            Fn = null,
            Jn = !1,
            Wn = !1,
            qn = !1,
            Un = !1,
            Kn = !1,
            Vn = '',
            Gn = [],
            Yn = null
          function Xn(e) {
            if ((e = e.match(Dn))) return g(e[1])
          }
          function Qn(e) {
            var n = document.createElement('style')
            ;(n.type = 'text/css'), (n.id = 'branch-iframe-css')
            var t = +(Bn = fn('margin-top')).slice(0, -2),
              i = +(Pn = fn('margin-bottom')).slice(0, -2),
              r = +An.slice(0, -2)
            e ||
              ('top' === xn
                ? (document.body.style.marginTop = (+r + t).toString() + 'px')
                : 'bottom' === xn && (document.body.style.marginBottom = (+r + i).toString() + 'px')),
              0 < Cn.length &&
                Cn.forEach(function (e) {
                  var n,
                    t = window.getComputedStyle(e)
                  t && (n = Sn && 'fixed' === t.getPropertyValue('position')), n || (e.style.marginTop = An)
                }),
              'top' === Vn &&
                Vn !== xn &&
                Kn &&
                Gn &&
                0 < Gn.length &&
                Gn.forEach(function (e) {
                  e.style.marginTop = 0
                }),
              (Kn = !1),
              (Vn = ''),
              (Gn = []),
              (Un = !1),
              (n.innerHTML =
                e ||
                (function () {
                  var e = '',
                    n = ''
                  return (
                    (document.body.style.transition = ''),
                    document.getElementById('branch-banner-iframe') &&
                      (document.getElementById('branch-banner-iframe').style.transition = ''),
                    qn ||
                      ((e = 'body { -webkit-transition: all 0.375s ease; }\n'),
                      (document.body.style.transition = 'all 00.375s ease'),
                      (n = '-webkit-transition: all 0.25s ease; transition: all 00.25s ease;')),
                    (e || '') +
                      '#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: ' +
                      An +
                      '; z-index: 99999; ' +
                      n +
                      ' }\n#branch-banner-iframe { position: ' +
                      En +
                      '; }\n@media only screen and (orientation: landscape) { body { ' +
                      ('top' === xn ? 'margin-top: ' : 'margin-bottom: ') +
                      (Sn ? jn + 'px' : An) +
                      '; }\n#branch-banner-iframe { height: ' +
                      (Sn ? jn + 'px' : An) +
                      '; }'
                  )
                })()),
              ke(n),
              document.head.appendChild(n)
          }
          function Zn() {
            Tn && nt(!1, !1)
          }
          function et() {
            Tn && (window.pageYOffset > window.innerHeight ? nt(!0, !1) : nt(!1, !1))
          }
          function nt(e, n) {
            var t = document.getElementById('branch-banner-iframe'),
              i = t.offsetHeight,
              r = t.offsetTop,
              a = window.innerHeight
            n && window.pageYOffset
              ? (t.style.bottom = '0')
              : e
              ? (t.style.top = a - i + i / 2 + 'px')
              : a - r != i && (t.style.top = a - i + 'px')
          }
          function tt(e, n, t, i, r, a, o) {
            var c = dt
            i &&
              r &&
              (Array.prototype.forEach.call(
                r.contentWindow.document.querySelectorAll('#branch-mobile-action'),
                function (e) {
                  e.addEventListener('click', function () {
                    kt(zn, 'didClickJourneyCTA', Yn), (Un = !0), i(), ot(r)
                  })
                },
              ),
              it('.branch-banner-continue', 'didClickJourneyContinue', t, r, e, n, a, o, c),
              it('.branch-banner-close', 'didClickJourneyClose', t, r, e, n, a, o, c))
          }
          function it(e, n, t, i, r, a, o, c, s) {
            Array.prototype.forEach.call(i.contentWindow.document.querySelectorAll(e), function (e) {
              e.addEventListener('click', function () {
                !(function (e, n, t, i, r, a, o, c) {
                  var s = o
                    ? 0
                    : (function (e) {
                        if ('number' == typeof (e = e.globalDismissPeriod)) {
                          if (-1 === e) e = !0
                          else {
                            var n = new Date()
                            e = n.setSeconds(n.getSeconds() + e)
                          }
                          return e
                        }
                      })(a)
                  if ((kt(zn, e, Yn), (Un = !0), ot(t), !o))
                    if (
                      (void 0 !== s && n.set('globalJourneysDismiss', s, !0),
                      (function (e, n, t) {
                        var i
                        ;((i = (i = e.get('journeyDismissals', !0)) ? g(i) : {})[t] = {
                          view_id: n,
                          dismiss_time: Date.now(),
                        }),
                          e.set('journeyDismissals', _(i), !0)
                      })(n, i, r),
                      a.dismissRedirect)
                    )
                      window.location = a.dismissRedirect
                    else {
                      var d = function () {
                        zn.removeListener(d)
                        var n = (function (e, n) {
                          var t = {},
                            i = ee()
                          if (
                            (i && 0 < Object.keys(i).length && (t.hosted_deeplink_data = i),
                            (t = e.I(at(null, t), null, zn, !0)),
                            Yn && Yn.journey_link_data)
                          ) {
                            pe(t, 'journey_id', Yn.journey_link_data.journey_id),
                              pe(t, 'journey_name', rt(Yn.journey_link_data.journey_name)),
                              pe(t, 'view_id', Yn.journey_link_data.view_id),
                              pe(t, 'view_name', rt(Yn.journey_link_data.view_name)),
                              pe(t, 'channel', rt(Yn.journey_link_data.channel)),
                              pe(t, 'campaign', rt(Yn.journey_link_data.campaign))
                            try {
                              pe(t, 'tags', JSON.stringify(Yn.journey_link_data.tags))
                            } catch (r) {
                              t.tags = JSON.stringify([])
                            }
                          }
                          return pe(t, 'dismissal_source', n), t
                        })(c, C[e])
                        zn.b(Ke, n, function (e, t) {
                          !e &&
                            'object' == typeof t &&
                            t.template &&
                            c.O(t, null, !1) &&
                            c.J(
                              t.template,
                              n,
                              n.branch_view_id || t.event_data.branch_view_data.id,
                              t.event_data.branch_view_data,
                              !1,
                              t.journey_link_data,
                            )
                        })
                      }
                      zn.addListener('branch_internal_event_didCloseJourney', d)
                    }
                })(n, t, i, r, a, o, c, s)
              })
            })
          }
          function rt(e) {
            return null == e
              ? null
              : e
                  .replace(/&lt;/g, '<')
                  .replace(/&gt;/g, '>')
                  .replace(/&amp;/g, '&')
                  .replace(/&quot;/g, '"')
                  .replace(/&apos;/g, "'")
                  .replace(/&brvbar;/g, '¦')
                  .replace(/&laquo;/g, '«')
                  .replace(/&acute;/g, '´')
                  .replace(/&middot;/g, '·')
                  .replace(/&raquo;/g, '»')
                  .replace(/&amp;/g, '&')
                  .replace(/&iquest;/g, '¿')
                  .replace(/&times;/g, '×')
                  .replace(/&divide;/g, '÷')
                  .replace(/&Agrave;/g, 'À')
                  .replace(/&Aacute;/g, 'Á')
                  .replace(/&Acirc;/g, 'Â')
                  .replace(/&Atilde;/g, 'Ã')
                  .replace(/&Auml;/g, 'Ä')
                  .replace(/&Aring;/g, 'Å')
                  .replace(/&AElig;/g, 'Æ')
                  .replace(/&Ccedil;/g, 'Ç')
                  .replace(/&Egrave;/g, 'È')
                  .replace(/&Eacute;/g, 'É')
                  .replace(/&Ecirc;/g, 'Ê')
                  .replace(/&Euml;/g, 'Ë')
                  .replace(/&Igrave;/g, 'Ì')
                  .replace(/&Iacute;/g, 'Í')
                  .replace(/&Icirc;/g, 'Î')
                  .replace(/&Iuml;/g, 'Ï')
                  .replace(/&ETH;/g, 'Ð')
                  .replace(/&Ntilde;/g, 'Ñ')
                  .replace(/&Ograve;/g, 'Ò')
                  .replace(/&Oacute;/g, 'Ó')
                  .replace(/&Ocirc;/g, 'Ô')
                  .replace(/&Otilde;/g, 'Õ')
                  .replace(/&Ouml;/g, 'Ö')
                  .replace(/&Oslash;/g, 'Ø')
                  .replace(/&Ugrave;/g, 'Ù')
                  .replace(/&Uacute;/g, 'Ú')
                  .replace(/&Ucirc;/g, 'Û')
                  .replace(/&Uuml;/g, 'Ü')
                  .replace(/&Yacute;/g, 'Ý')
                  .replace(/&THORN;/g, 'Þ')
                  .replace(/&szlig;/g, 'ß')
                  .replace(/&agrave;/g, 'à')
                  .replace(/&aacute;/g, 'á')
                  .replace(/&acirc;/g, 'â')
                  .replace(/&atilde;/g, 'ã')
                  .replace(/&auml;/g, 'ä')
                  .replace(/&aring;/g, 'å')
                  .replace(/&aelig;/g, 'æ')
                  .replace(/&ccedil;/g, 'ç')
                  .replace(/&egrave;/g, 'è')
                  .replace(/&eacute;/g, 'é')
                  .replace(/&ecirc;/g, 'ê')
                  .replace(/&euml;/g, 'ë')
                  .replace(/&igrave;/g, 'ì')
                  .replace(/&iacute;/g, 'í')
                  .replace(/&icirc;/g, 'î')
                  .replace(/&iuml;/g, 'ï')
                  .replace(/&eth;/g, 'ð')
                  .replace(/&ntilde;/g, 'ñ')
                  .replace(/&ograve;/g, 'ò')
                  .replace(/&oacute;/g, 'ó')
                  .replace(/&ocirc;/g, 'ô')
                  .replace(/&otilde;/g, 'õ')
                  .replace(/&ouml;/g, 'ö')
                  .replace(/&oslash;/g, 'ø')
                  .replace(/&ugrave;/g, 'ù')
                  .replace(/&uacute;/g, 'ú')
                  .replace(/&ucirc;/g, 'û')
                  .replace(/&uuml;/g, 'ü')
                  .replace(/&yacute;/g, 'ý')
                  .replace(/&thorn;/g, 'þ')
                  .replace(/&yuml;/g, 'ÿ')
          }
          function at(e, n) {
            return $(
              {
                url: (e && e.url) || L(),
                user_agent: navigator.userAgent,
                language: navigator.language,
                screen_width: screen.width || -1,
                screen_height: screen.height || -1,
                window_device_pixel_ratio: window.devicePixelRatio || 1,
              },
              n || {},
            )
          }
          function ot(e, n) {
            if ((Wn || (Nn = !0), qn && !Wn)) {
              ;(document.body.style.transition = 'all 00.375s ease'),
                (document.getElementById('branch-banner-iframe').style.transition = 'all 00.25s ease')
              var t = document.getElementById('branch-iframe-css').innerHTML + '\n'
              ;(document.getElementById('branch-iframe-css').innerHTML = ''),
                (document.getElementById('branch-iframe-css').innerHTML =
                  t +
                  'body { -webkit-transition: all 0.375s ease; }\n#branch-banner-iframe { -webkit-transition: all 0.25s ease; }\n')
            }
            'top' === xn ? (e.style.top = '-' + An) : 'bottom' === xn && (e.style.bottom = '-' + An),
              kt(zn, 'willCloseJourney', Yn),
              setTimeout(
                function () {
                  un(e),
                    un(document.getElementById('branch-css')),
                    un(document.getElementById('branch-iframe-css')),
                    un(document.getElementById('branch-journey-cta')),
                    (!Wn || Un) && Cn && 0 < Cn.length
                      ? Cn.forEach(function (e) {
                          e.style.marginTop = 0
                        })
                      : ((Kn = Wn), (Vn = xn), (Gn = Cn)),
                    'top' === xn
                      ? (document.body.style.marginTop = Bn)
                      : 'bottom' === xn && (document.body.style.marginBottom = Pn),
                    hn('branch-banner-is-active'),
                    hn('branch-banner-no-scroll'),
                    Tn &&
                      ((Tn = !1), window.removeEventListener('resize', Zn), window.removeEventListener('scroll', et)),
                    kt(zn, 'didCloseJourney', Yn),
                    n || kt(zn, 'branch_internal_event_didCloseJourney', Yn),
                    (Jn = !1),
                    setTimeout(function () {
                      Nn = !1
                    }, 250)
                },
                Wn ? 0 : 270,
              )
          }
          function ct() {
            return !!(wn && zn && zn.l && zn.l.data) && zn.l.data.$journeys_cta
          }
          function st() {
            if (ct()) return zn.l.data.$journeys_cta
          }
          var dt = {}
          function lt(e, n) {
            var t,
              i = n ? 'OPEN' : 'GET',
              r = e
            if (
              ((a = Xn(r)) && a.bannerHeight && a.position && a.sticky
                ? ((An = a.bannerHeight), (xn = a.position), (En = a.sticky))
                : (r = r.match($n))
                ? ((xn = 'top'), (r = r[1].match(Mn)) && (An = r[1]), (En = 'absolute'))
                : ((xn = 'bottom'), (En = 'fixed')),
              (-1 === An.indexOf('vh') && -1 === An.indexOf('%')) ||
                ((r = An.indexOf('vh') ? An.slice(0, -2) : An.slice(0, -1)),
                (An = (r / 100) * In + 'px'),
                100 > r ? (On = !0) : (Sn = !0)),
              (r = Xn(e))) &&
              (n && r && r.ctaText && r.ctaText.has_app
                ? (t = r.ctaText.has_app)
                : r && r.ctaText && r.ctaText.no_app && (t = r.ctaText.no_app),
              (i = t),
              (Cn = []),
              r && r.injectorSelector && (t = document.querySelectorAll(r.injectorSelector)))
            )
              for (r = 0; r < t.length; r++) Cn.push(t[r].parentElement)
            ;(t = (t = e.match(Rn)) ? t[1] : void 0),
              (r = e.match(Ln)) &&
                ((r = r[1]),
                ((a = document.createElement('script')).id = 'branch-journey-cta'),
                ke(a),
                (a.innerHTML = r),
                document.body.appendChild(a)),
              (r = (r = e.match(Hn)) ? r[1] : void 0)
            var a,
              o = (a = e).match(Dn),
              c = a.match(Ln),
              s = a.match(Rn),
              d = a.match(Hn)
            ;(o && (a = a.replace(Dn, '')),
            c && (a = a.replace(Ln, '')),
            s && (a = a.replace(Rn, '')),
            d && (a = a.replace(Hn, '')),
            (e = a),
            ((a = document.createElement('iframe')).src = 'about:blank'),
            (a.style.overflow = 'hidden'),
            (a.scrolling = 'no'),
            (a.id = 'branch-banner-iframe'),
            (a.className = 'branch-animation'),
            (a.title = 'Branch Banner'),
            a.setAttribute('aria-label', 'Branch Banner'),
            ke(a),
            document.body.appendChild(a),
            (o =
              '<html><head></head><body class="' +
              ('ios' === (o = F()) || 'ipad' === o
                ? 'branch-banner-ios'
                : 'android' === o
                ? 'branch-banner-android'
                : 'branch-banner-desktop') +
              '">' +
              e +
              '</body></html>'),
            a.contentWindow.document.open(),
            a.contentWindow.document.write(o),
            a.contentWindow.document.close(),
            Qn(r),
            ((o = document.createElement('style')).type = 'text/css'),
            (o.id = 'branch-css'),
            (o.innerHTML = t),
            ke(o),
            (t = a.contentWindow.document).head.appendChild(o),
            On || Sn) &&
              (l = t.getElementsByClassName('branch-banner-content')[0]) &&
              (l.style.height = An)
            'top' === xn ? (a.style.top = '-' + An) : 'bottom' === xn && (a.style.bottom = '-' + An)
            try {
              var l = t.getElementsByClassName('branch-banner-content')[0],
                u = window.getComputedStyle(l).getPropertyValue('background-color').split(', ')
              u[3] && !parseFloat(u[3]) && (a.style.boxShadow = 'none')
            } catch (p) {}
            return (
              (a.contentWindow.document.getElementById('branch-mobile-action').innerHTML = i),
              kt(zn, 'willShowJourney', Yn),
              (function (e, n) {
                pn(document.body, 'branch-banner-is-active'),
                  Sn && 'fixed' === En && pn(document.body, 'branch-banner-no-scroll'),
                  setTimeout(function () {
                    n
                      ? ((e.style.top = null), (e.style.bottom = null))
                      : 'top' === xn
                      ? (e.style.top = '0')
                      : 'bottom' === xn &&
                        (Yn && Yn.journey_link_data && !Yn.journey_link_data.safeAreaRequired
                          ? (e.style.bottom = '0')
                          : ((Tn = !0),
                            (document.getElementById('branch-banner-iframe').style.transition = 'all 0s'),
                            nt(!1, !0),
                            window.addEventListener('resize', Zn),
                            window.addEventListener('scroll', et))),
                      kt(zn, 'didShowJourney', Yn),
                      (Jn = !0)
                  }, 20)
              })(a, r),
              a
            )
          }
          ;(dt.O = function (e, n, t) {
            return (
              !(
                document.getElementById('branch-banner') ||
                document.getElementById('branch-banner-iframe') ||
                document.getElementById('branch-banner-container') ||
                !F() ||
                !e.event_data ||
                !e.template
              ) &&
              (!!t ||
                ((e = !e.event_data.branch_view_data.id || (n && n.no_journeys)) ||
                  (!0 === (n = (e = zn).c.get('globalJourneysDismiss', !0)) || n > Date.now()
                    ? (e = !0)
                    : (e.c.remove('globalJourneysDismiss', !0), (e = !1))),
                !e || ((dt.Aa = 1), !1)))
            )
          }),
            (dt.ka = function (e) {
              zn.b(
                Ue,
                {
                  event: 'pageview',
                  journey_displayed: !0,
                  audience_rule_id: e.audience_rule_id,
                  branch_view_id: e.branch_view_id,
                },
                function () {},
              )
            }),
            (dt.J = function (e, n, t, i, r, a) {
              if (!Nn) {
                ;(vn = t),
                  (function (e) {
                    var n = { banner_id: vn }
                    if (e && 'object' == typeof e && 0 < Object.keys(e).length) {
                      var t = ['browser_fingerprint_id', 'app_id', 'source', 'open_app', 'link_click_id']
                      if (
                        e &&
                        'object' == typeof e &&
                        !Array.isArray(e) &&
                        0 < Object.keys(e).length &&
                        t &&
                        Array.isArray(t) &&
                        0 < t.length
                      )
                        for (var i in e) e.hasOwnProperty(i) && -1 < t.indexOf(i) && delete e[i]
                      ;(n.journey_link_data = {}), $(n.journey_link_data, e)
                    }
                    Yn = n
                  })(a)
                var o = i.audience_rule_id
                ;(a = document.getElementById('branch-iframe-css')) && a.parentElement.removeChild(a),
                  ((a = document.createElement('div')).id = 'branch-banner'),
                  document.body.insertBefore(a, null),
                  pn(a, 'branch-banner-is-active')
                var c = !1,
                  s = n.callback_string,
                  d = null,
                  l = null,
                  u = zn.c
                if (e) {
                  var p = Xn(e) || {}
                  e = (function (e) {
                    try {
                      if (ct() && 0 < st().length)
                        return e
                          .replace(/validate[(].+[)];/g, 'validate("' + st() + '")')
                          .replace('window.top.location.replace(', 'window.top.location = ')
                    } catch (n) {}
                    return e
                  })(e)
                  var h = window.setTimeout(function () {
                    window[s] = function () {}
                  }, k)
                  if (
                    ((window[s] = function (e) {
                      window.clearTimeout(h), c || tt(t, o, u, (l = e), d, p, r)
                    }),
                    (Fn = d = lt(e, n.has_app_websdk)),
                    null === d)
                  )
                    return void (c = !0)
                  tt(t, o, u, l, d, p, r),
                    A && (E['journey-load-time'] = (Date.now() - window.performance.timing.navigationStart).toString())
                }
                document.body.removeChild(a), T || r || dt.ka(i)
              }
            }),
            (dt.I = function (e, n, t, i) {
              ;(zn = t),
                n || (n = {}),
                e || (e = {}),
                (qn = n.disable_entry_animation || !1),
                (Wn = n.disable_exit_animation || !1)
              var r,
                a = $({}, t.l),
                o = tn(t.c) || {},
                c = !!o.hasOwnProperty('has_app') && o.has_app,
                s = t.c.get('journeyDismissals', !0),
                d = (n.user_language || ne() || 'en').toLowerCase() || null,
                l = ye(wt(t))
              return (
                (r = n.branch_view_id) ||
                  ((r = '_branch_view_id'.replace(/[\[\]]/g, '\\$&')),
                  (r =
                    (r = new RegExp('[?&]' + r + '(=([^&#]*)|&|#|$)').exec(L())) && r[2]
                      ? decodeURIComponent(r[2].replace(/\+/g, ' '))
                      : '')),
                (r = r || null),
                (t = n.make_new_link ? null : H(wt(t))),
                (a.event = i ? 'dismiss' : 'pageview'),
                (a.metadata = e),
                (a = pe(a, 'initial_referrer', l)),
                (a = pe(a, 'branch_view_id', r)),
                (a = pe(a, 'no_journeys', n.no_journeys)),
                (a = pe(a, 'is_iframe', ge())),
                ((a = pe(a, 'journey_dismissals', s)).user_language = d),
                (a.open_app = n.open_app || !1),
                (a.has_app_websdk = c),
                (a.feature = 'journeys'),
                (a.callback_string = 'branch_view_callback__' + kn++),
                a.data || (a.data = {}),
                (a.data = $(ee(), a.data)),
                (a.data = $(
                  (function (e) {
                    var n = /^\$journeys_\S+$/,
                      t = e.data,
                      i = {}
                    if (!t) return {}
                    switch (typeof t) {
                      case 'string':
                        try {
                          t = g(t)
                        } catch (a) {
                          t = {}
                        }
                        break
                      case 'object':
                        break
                      default:
                        t = {}
                    }
                    return (
                      Object.keys(t).forEach(function (e) {
                        n.test(e) && (i[e] = t[e])
                      }),
                      i
                    )
                  })(o || {}),
                  a.data,
                )),
                t && (a.data.link_click_id = t),
                (e = o.data ? g(o.data) : null) && e['+referrer'] && (a.data['+referrer'] = e['+referrer']),
                R(a)
              )
            })
          var ut,
            pt = {
              androidAppIndexingTagsPresent: !1,
              iosAppIndexingTagsPresent: !1,
              androidDetailsComplete: !1,
              iosDetailsComplete: !1,
            },
            ht = {}
          function ft(e) {
            'android' === e &&
              pt.androidDetailsComplete &&
              mt(bt('android-app://' + ht.androidPackageName + '/' + ht.androidURL)),
              'ios' === e && pt.iosDetailsComplete && mt(bt('ios-app://' + ht.iosAppId + '/' + ht.iosURL))
          }
          function bt(e) {
            var n = { '~channel': 'Firebase App Indexing', '~feature': 'Auto App Indexing', $canonical_url: L() }
            if ('object' == typeof ht.data)
              for (var t in ht.data) ht.data.hasOwnProperty(t) && !n.hasOwnProperty(t) && (n[t] = ht.data[t])
            return e + (-1 < e.indexOf('?') ? '&' : '?') + 'link_click_id=a-' + btoa(_(n))
          }
          function mt(e) {
            var n = document.createElement('link')
            n.setAttribute('rel', 'alternate'), n.setAttribute('href', e), document.head.appendChild(n)
          }
          function gt(e) {
            'android' === e &&
              'string' == typeof ht.androidPackageName &&
              'string' == typeof ht.androidURL &&
              ((pt.androidDetailsComplete = !0), ft('android')),
              'ios' === e &&
                'string' == typeof ht.iosAppId &&
                'string' == typeof ht.iosURL &&
                ((pt.iosDetailsComplete = !0), ft('ios'))
          }
          function _t(e) {
            for (var n = document.getElementsByTagName('meta'), t = 0; t < n.length; t++) {
              var i = n[t]
              'ios' === e &&
                'al:ios:app_store_id' === i.getAttribute('property') &&
                (ht.iosAppId = i.getAttribute('content')),
                'ios' === e &&
                  'al:ios:url' === i.getAttribute('property') &&
                  (ht.iosURL = i.getAttribute('content').replace('://', '/')),
                'android' === e &&
                  'al:android:package' === i.getAttribute('property') &&
                  (ht.androidPackageName = i.getAttribute('content')),
                'android' === e &&
                  'al:android:url' === i.getAttribute('property') &&
                  (ht.androidURL = i.getAttribute('content').replace('://', '/'))
            }
            gt(e)
          }
          function yt(e, n, t) {
            return function () {
              var i,
                r,
                a = this,
                o = arguments[arguments.length - 1]
              e && 'function' == typeof o
                ? ((i = Array.prototype.slice.call(arguments, 0, arguments.length - 1) || []), (r = o))
                : ((r = function () {}), (i = Array.prototype.slice.call(arguments))),
                a.ba(function (o) {
                  function c(n, t) {
                    try {
                      if (n && !e) throw n
                      1 === e ? r(n) : 2 === e && r(n, t)
                    } finally {
                      o()
                    }
                  }
                  if (!t) {
                    if (1 === a.m)
                      return c(
                        Error(
                          N(
                            'Branch SDK initialization pending and a Branch method was called outside of the queue order',
                          ),
                        ),
                        null,
                      )
                    if (2 === a.m)
                      return c(
                        Error(N('Branch SDK initialization failed, so further methods cannot be called', a.j, a.o)),
                        null,
                      )
                    if (0 === a.m || !a.m) return c(Error(N('Branch SDK not initialized')), null)
                  }
                  i.unshift(c), n.apply(a, i)
                })
            }
          }
          function vt() {
            if (!(this instanceof vt)) return ut || (ut = new vt()), ut
            ;(this.ba = y()),
              (this.c = new Ye(['session', 'cookie', 'pojo'])),
              (this.V = new cn()),
              (this.h = []),
              (this.X = 'web2.56.2'),
              (this.j = this.m = 0),
              (this.o = null)
          }
          function wt(e) {
            var n = tn(e.c)
            return (n = n && n.referring_link) ? n : (e = e.c.get('click_id')) ? 'https://bnc.lt/c/' + e : null
          }
          function kt(e, n, t) {
            for (var i = 0; i < e.h.length; i++) (e.h[i].event && e.h[i].event !== n) || e.h[i].listener(n, t)
          }
          function xt(e, n, t) {
            t = t || {}
            try {
              e.l = g(_(t))
            } finally {
              e.l = e.l || {}
            }
            n()
          }
          ;(vt.prototype.b = function (e, n, t) {
            return (
              this.W && (n.app_id = this.W),
              this.i && (n.branch_key = this.i),
              ((e.a && e.a.session_id) || (e.f && e.f.session_id)) && this.H && (n.session_id = this.H),
              ((e.a && e.a.identity_id) || (e.f && e.f.identity_id)) && this.A && (n.identity_id = this.A),
              0 > e.endpoint.indexOf('/v1/')
                ? ((e.a && e.a.developer_identity) || (e.f && e.f.developer_identity)) &&
                  this.g &&
                  (n.developer_identity = this.g)
                : ((e.a && e.a.identity) || (e.f && e.f.identity)) && this.g && (n.identity = this.g),
              ((e.a && e.a.link_click_id) || (e.f && e.f.link_click_id)) && this.$ && (n.link_click_id = this.$),
              ((e.a && e.a.sdk) || (e.f && e.f.sdk)) && this.X && (n.sdk = this.X),
              ((e.a && e.a.browser_fingerprint_id) || (e.f && e.f.browser_fingerprint_id)) &&
                this.D &&
                (n.browser_fingerprint_id = this.D),
              T && (n.tracking_disabled = T),
              ln(this.V, e, n, this.c, function (e, n) {
                t(e, n)
              })
            )
          }),
            (vt.prototype.init = yt(
              2,
              function (e, n, t) {
                function i() {
                  var e, n
                  void 0 !== document.hidden
                    ? ((e = 'hidden'), (n = 'visibilitychange'))
                    : void 0 !== document.mozHidden
                    ? ((e = 'mozHidden'), (n = 'mozvisibilitychange'))
                    : void 0 !== document.msHidden
                    ? ((e = 'msHidden'), (n = 'msvisibilitychange'))
                    : void 0 !== document.webkitHidden && ((e = 'webkitHidden'), (n = 'webkitvisibilitychange')),
                    n &&
                      !o.ea &&
                      ((o.ea = !0),
                      document.addEventListener(
                        n,
                        function () {
                          document[e] || (a(null), 'function' == typeof o.v && o.v())
                        },
                        !1,
                      ))
                }
                function r(n, i) {
                  if (
                    (i &&
                      ((i = (function (e) {
                        if (
                          (e.link_click_id && (o.$ = e.link_click_id.toString()),
                          e.session_id && (o.H = e.session_id.toString()),
                          e.identity_id && (o.A = e.identity_id.toString()),
                          e.identity && (o.g = e.identity.toString()),
                          e.link && (o.N = e.link),
                          e.referring_link)
                        ) {
                          var n = e.referring_link
                          e.referring_link = n ? ('http' !== n.substring(0, 4) ? 'https://bnc.lt' + n : n) : null
                        }
                        return (
                          !e.click_id && e.referring_link && (e.click_id = H(e.referring_link)),
                          (o.D = e.browser_fingerprint_id),
                          e
                        )
                      })(i)),
                      T ||
                        ((i = (function (e) {
                          return d && (e.identity = o.g), e
                        })(i)),
                        rn(o.c, i, d)),
                      (o.m = 3),
                      (i.data_parsed = i.data && 0 !== i.data.length ? g(i.data) : {})),
                    n)
                  )
                    return (o.m = 2), o.j || ((o.j = 1), (o.o = n.message)), e(n, i && D(i))
                  try {
                    e(n, i && D(i))
                  } catch (l) {
                  } finally {
                    o.renderFinalize()
                  }
                  var r = (function () {
                      var e,
                        n = {}
                      return (
                        (e = pe((e = {}), '$og_title', Z('title'))),
                        (e = pe(e, '$og_description', Z('description'))),
                        (e = pe(e, '$og_image_url', Z('image'))),
                        (e = pe(e, '$og_video', Z('video'))),
                        (e = (e = pe(e, '$og_type', Z('type'))) && 0 < Object.keys(e).length ? e : null),
                        (n = pe(n, 'og_data', e)),
                        (n = pe(n, 'hosted_deeplink_data', ee())),
                        (n = pe(
                          n,
                          'title',
                          0 < (e = document.getElementsByTagName('title')).length ? e[0].innerText : null,
                        )),
                        (n = pe(
                          n,
                          'description',
                          (e = document.querySelector('meta[name="description"]')) && e.content ? e.content : null,
                        )),
                        (n = pe(
                          n,
                          'canonical_url',
                          (e = document.querySelector('link[rel="canonical"]')) && e.href ? e.href : null,
                        )) && 0 < Object.keys(n).length
                          ? n
                          : {}
                      )
                    })(),
                    a = be(t.metadata, 'object') ? t.metadata : null
                  a && (a = we(r.hosted_deeplink_data, a)) && 0 < Object.keys(a).length && (r.hosted_deeplink_data = a)
                  var s = dt.I(at(t, r), t, o, !1)
                  o.renderQueue(function () {
                    o.b(Ue, s, function (e, n) {
                      if (!e && 'object' == typeof n) {
                        var i = !!s.branch_view_id
                        dt.O(n, t, i)
                          ? dt.J(
                              n.template,
                              s,
                              s.branch_view_id || n.event_data.branch_view_data.id,
                              n.event_data.branch_view_data,
                              i,
                              n.journey_link_data,
                            )
                          : ((n.auto_branchify || (!c && q('branchify_url') && wt(o))) &&
                              this.branch.deepview({}, { make_new_link: !1, open_app: !0, auto_branchify: !0 }),
                            kt(zn, 'willNotShowJourney'))
                      }
                      T && (j = !0)
                    })
                  })
                }
                function a(e) {
                  var n = { sdk: '2.56.2', branch_key: o.i },
                    t = tn(o.c) || {},
                    i = tn(o.c, !0) || {}
                  i.browser_fingerprint_id && (n._t = i.browser_fingerprint_id),
                    J() ||
                      W() ||
                      o.b(Oe, n, function (e, n) {
                        e && ((o.j = 3), (o.o = e.message)), n && (t.browser_fingerprint_id = n)
                      }),
                    o.b(ze, { browser_fingerprint_id: t.browser_fingerprint_id }, function (n, i) {
                      n && ((o.j = 4), (o.o = n.message)),
                        n || !i || t.has_app || ((t.has_app = !0), an(o.c, t), kt(o, 'didDownloadApp')),
                        e && e(null, t)
                    })
                }
                A && (E['init-began-at'] = (Date.now() - window.performance.timing.navigationStart).toString())
                var o = this
                ;(o.m = 1),
                  -1 < n.indexOf('key_') ? (o.i = n) : (o.W = n),
                  (t = t && be(t, 'object') ? t : {}),
                  (v = (o.G = t) && t.retries && Number.isInteger(t.retries) ? t.retries : v),
                  (w = t && t.retry_delay && Number.isInteger(t.retry_delay) ? t.retry_delay : w),
                  (k = t && t.timeout && Number.isInteger(t.timeout) ? t.timeout : k),
                  (x = t && t.nonce ? t.nonce : x),
                  (T = !(!t || !t.tracking_disabled || !0 !== t.tracking_disabled)),
                  (j = !1),
                  T && P(o),
                  (n = tn(o.c))
                var c = t && void 0 !== t.branch_match_id && null !== t.branch_match_id ? t.branch_match_id : null,
                  s =
                    c ||
                    q('_branch_match_id') ||
                    (function () {
                      try {
                        var e = (ge() && _e() ? window.top.location.hash : window.location.hash).match(/r:([^&]*)/)
                        if (e && 1 <= e.length) return e[1]
                      } catch (n) {}
                    })(),
                  d = !n || !n.identity_id
                if (((o.C = !!o.c.get('branch_view_enabled')), n && n.session_id && !s && !q('branchify_url')))
                  an(o.c, { data: '' }), an(o.c, { referring_link: '' }), i(), a(r)
                else {
                  n = { sdk: '2.56.2', branch_key: o.i }
                  var l = tn(o.c, !0) || {}
                  l.browser_fingerprint_id && (n._t = l.browser_fingerprint_id), l.identity && (o.g = l.identity)
                  var u = parseInt(q('[?&]_open_delay_ms'), 10)
                  J() || W()
                    ? xe(function () {
                        o.b(
                          Se,
                          {
                            link_identifier: s,
                            browser_fingerprint_id: s || l.browser_fingerprint_id,
                            alternative_browser_fingerprint_id: l.browser_fingerprint_id,
                            options: t,
                            initial_referrer: ye(wt(o)),
                            current_url: ge() && _e() ? window.top.location.href : window.location.href,
                            screen_height: screen.height || 0,
                            screen_width: screen.width || 0,
                          },
                          function (e, n) {
                            e && ((o.j = 2), (o.o = e.message)),
                              e ||
                                'object' != typeof n ||
                                (n.branch_view_enabled &&
                                  ((o.C = !!n.branch_view_enabled), o.c.set('branch_view_enabled', o.C)),
                                s && (n.click_id = s)),
                              i(),
                              r(e, n)
                          },
                        )
                      }, u)
                    : o.b(Oe, n, function (e, n) {
                        if (e) return (o.j = 3), (o.o = e.message), r(e, null)
                        xe(function () {
                          o.b(
                            Se,
                            {
                              link_identifier: s,
                              browser_fingerprint_id: s || n,
                              alternative_browser_fingerprint_id: l.browser_fingerprint_id,
                              options: t,
                              initial_referrer: ye(wt(o)),
                              current_url: ge() && _e() ? window.top.location.href : window.location.href,
                              screen_height: screen.height || 0,
                              screen_width: screen.width || 0,
                            },
                            function (e, n) {
                              e && ((o.j = 2), (o.o = e.message)),
                                e ||
                                  'object' != typeof n ||
                                  (n.branch_view_enabled &&
                                    ((o.C = !!n.branch_view_enabled), o.c.set('branch_view_enabled', o.C)),
                                  s && (n.click_id = s)),
                                i(),
                                r(e, n)
                            },
                          )
                        }, u)
                      })
                }
              },
              !0,
            )),
            (vt.prototype.renderQueue = yt(0, function (e, n) {
              this.ca ? n() : ((this.s = this.s || []), this.s.push(n)), e(null, null)
            })),
            (vt.prototype.renderFinalize = yt(2, function (e) {
              this.s &&
                0 < this.s.length &&
                (this.s.forEach(function (e) {
                  e.call(this)
                }),
                delete this.s),
                (this.ca = !0),
                e(null, null)
            })),
            (vt.prototype.data = yt(2, function (e) {
              var n = D(tn(this.c))
              ;(n.referring_link = wt(this)),
                (n.data_parsed = n.data && 0 !== n.data.length ? g(n.data) : {}),
                e(null, n)
            })),
            (vt.prototype.first = yt(2, function (e) {
              e(null, D(tn(this.c, !0)))
            })),
            (vt.prototype.setIdentity = yt(2, function (e, n) {
              var t = this
              this.b(Ne, { identity: n }, function (i, r) {
                i && e(i),
                  (r = r || {}),
                  (t.A = r.identity_id ? r.identity_id.toString() : null),
                  (t.N = r.link),
                  (t.g = n),
                  (r.developer_identity = n),
                  (r.referring_data_parsed = r.referring_data ? g(r.referring_data) : null),
                  on(t.c, { identity: n }),
                  e(null, r)
              })
            })),
            (vt.prototype.logout = yt(1, function (e) {
              var n = this
              this.b(Pe, {}, function (t, i) {
                t && e(t),
                  (i = {
                    data_parsed: null,
                    data: null,
                    referring_link: null,
                    click_id: null,
                    link_click_id: null,
                    identity: null,
                    session_id: (i = i || {}).session_id,
                    identity_id: i.identity_id,
                    link: i.link,
                    device_fingerprint_id: n.ha || null,
                  }),
                  (n.N = i.link),
                  (n.H = i.session_id),
                  (n.A = i.identity_id),
                  (n.g = null),
                  on(n.c, i, !0),
                  e(null)
              })
            })),
            (vt.prototype.getBrowserFingerprintId = yt(2, function (e) {
              e(null, (tn(this.c, !0) || {}).browser_fingerprint_id || null)
            })),
            (vt.prototype.crossPlatformIds = yt(2, function (e) {
              this.b(Ve, { user_data: _(me(this)) }, function (n, t) {
                return e(n || null, (t && t.user_data) || null)
              })
            })),
            (vt.prototype.lastAttributedTouchData = yt(2, function (e, n) {
              n = be(n, 'number') ? n : null
              var t = me(this)
              pe(t, 'attribution_window', n),
                this.b(Ge, { user_data: _(t) }, function (n, t) {
                  return e(n || null, t || null)
                })
            })),
            (vt.prototype.track = yt(1, function (e, n, t, i) {
              if (((t = t || {}), (x = (i = i || {}).nonce ? i.nonce : x), 'pageview' === n)) {
                ;(n = we(ee(), t)) && 0 < Object.keys(n).length && (t.hosted_deeplink_data = n)
                var r = dt.I(at(i, t), i, this, !1)
                this.b(Ue, r, function (n, t) {
                  if (!n && 'object' == typeof t) {
                    var a = !!r.branch_view_id
                    dt.O(t, i, a)
                      ? dt.J(
                          t.template,
                          r,
                          r.branch_view_id || t.event_data.branch_view_data.id,
                          t.event_data.branch_view_data,
                          a,
                          t.journey_link_data,
                        )
                      : kt(zn, 'willNotShowJourney')
                  }
                  'function' == typeof e && e.apply(this, arguments)
                })
              } else
                this.b(
                  Fe,
                  {
                    event: n,
                    metadata: $({ url: L(), user_agent: navigator.userAgent, language: navigator.language }, t),
                    initial_referrer: ye(wt(this)),
                  },
                  function (n, t) {
                    'function' == typeof e && e.apply(this, arguments)
                  },
                )
            })),
            (vt.prototype.logEvent = yt(1, function (e, n, t, i, r) {
              ;(n = be(n, 'string') ? n : null),
                (t = be(t, 'object') ? t : null),
                (r = be(r, 'string') ? r : null),
                n && -1 < he.indexOf(n)
                  ? ((i = be(i, 'array') ? i : null),
                    (t = (function (e) {
                      if (!e || !Object.keys(e).length) return null
                      for (var n = te(fe, Object.keys(e)), t = {}, i = 0; i < n.length; i++) {
                        var r = n[i]
                        ;(t[r] = e[r]), delete e[r]
                      }
                      return { custom_data: ve(t), event_data: e }
                    })(t)),
                    this.b(
                      We,
                      {
                        name: n,
                        user_data: _(me(this)),
                        custom_data: _((t && t.custom_data) || {}),
                        event_data: _((t && t.event_data) || {}),
                        content_items: _(i || []),
                        customer_event_alias: r,
                      },
                      function (n) {
                        return e(n || null)
                      },
                    ))
                  : this.b(
                      qe,
                      {
                        name: n,
                        user_data: _(me(this)),
                        custom_data: _(ve(t || {})),
                        content_items: _(i || []),
                        customer_event_alias: r,
                      },
                      function (n) {
                        return e(n || null)
                      },
                    )
            })),
            (vt.prototype.link = yt(2, function (e, n) {
              var t = R(n),
                i = this.i
              this.b($e, t, function (n, r) {
                if (n) return e(n, B(i, t))
                e(null, r && r.url)
              })
            })),
            (vt.prototype.sendSMS = yt(1, function (e, n, t, i) {
              function r(t) {
                a.b(Te, { link_url: t, phone: n }, function (n) {
                  e(n || null)
                })
              }
              var a = this
              ;('function' == typeof i || null == i) && (i = {}),
                (i.make_new_link = i.make_new_link || !1),
                (t.channel && 'app banner' !== t.channel) || (t.channel = 'sms')
              var o = wt(a)
              o && !i.make_new_link
                ? r(H(o))
                : a.b($e, R(t), function (n, t) {
                    if (n) return e(n)
                    var i = t.url
                    ;/(bnc.lt\/|app\.link\/)/.test(i) ||
                      (i =
                        'https://bnc.lt/' +
                        (function (e) {
                          return e
                            ? (-1 < e.indexOf('://') && (e = e.split('://')[1]), e.substring(e.indexOf('/') + 1))
                            : null
                        })(i)),
                      a.b(Ce, { link_url: i, click: 'click' }, function (n, t) {
                        if (n) return e(n)
                        r(t.click_id)
                      })
                  })
            })),
            (vt.prototype.deepview = yt(1, function (e, n, t) {
              var i = this
              t || (t = {}),
                (t.deepview_type = void 0 === t.deepview_type ? 'deepview' : 'banner'),
                (n.data = $(ee(), n.data)),
                (n = R((n = ge() ? $({ is_iframe: !0 }, n) : n)))
              var r = B(this.i, n)
              ;(t.open_app || null === t.open_app || void 0 === t.open_app) && (n.open_app = !0),
                (n.append_deeplink_path = !!t.append_deeplink_path),
                (n.deepview_type = t.deepview_type)
              var a = wt(i)
              a && !t.make_new_link && (n.link_click_id = H(a)),
                (n.banner_options = t),
                t.auto_branchify && (n.auto_branchify = !0),
                (i.v = l(this.b, i, Me, n, function (n, t) {
                  if (n)
                    return (
                      T ||
                        (i.u = function () {
                          window.top.location = r
                        }),
                      e(n)
                    )
                  'function' == typeof t && (i.u = t), e(null)
                })),
                i.v()
            })),
            (vt.prototype.deepviewCta = yt(1, function (e) {
              if (void 0 === this.u)
                return e(
                  T
                    ? Error('Requested operation cannot be completed since tracking is disabled')
                    : Error('Cannot call Deepview CTA, please call branch.deepview() first'),
                  null,
                )
              window.event &&
                (window.event.preventDefault ? window.event.preventDefault() : (window.event.returnValue = !1)),
                kt(this, 'didDeepviewCTA'),
                this.u(),
                e()
            })),
            (vt.prototype.referrals = yt(2, function (e) {
              this.b(De, {}, e)
            })),
            (vt.prototype.getCode = yt(2, function (e, n) {
              ;(n.type = 'credit'), (n.creation_source = n.creation_source || 2), this.b(Ie, n, e)
            })),
            (vt.prototype.validateCode = yt(1, function (e, n) {
              this.b(je, { code: n }, e)
            })),
            (vt.prototype.applyCode = yt(1, function (e, n) {
              this.b(Be, { code: n }, e)
            })),
            (vt.prototype.credits = yt(2, function (e) {
              this.b(Re, { branch_key: this.i, identity: this.g }, e)
            })),
            (vt.prototype.creditHistory = yt(2, function (e, n) {
              this.b(Le, n || {}, e)
            })),
            (vt.prototype.redeem = yt(1, function (e, n, t) {
              this.b(He, { amount: n, bucket: t }, function (n) {
                e(n || null)
              })
            })),
            (vt.prototype.addListener = function (e, n) {
              'function' == typeof e && void 0 === n && ((n = e), (e = null)),
                n && this.h.push({ listener: n, event: e || null })
            }),
            (vt.prototype.removeListener = function (e) {
              e &&
                (this.h = this.h.filter(function (n) {
                  if (n.listener !== e) return n
                }))
            }),
            (vt.prototype.setBranchViewData = yt(
              1,
              function (e, n) {
                xt.call(null, this, e, n)
              },
              !0,
            )),
            (vt.prototype.closeJourney = yt(1, function (e) {
              var n = this
              n.renderQueue(function () {
                if (!Fn || !Jn) return e('Journey already dismissed.')
                kt(n, 'didCallJourneyClose', Yn), ot(Fn, !0)
              }),
                e()
            })),
            (vt.prototype.banner = yt(1, function (e, n, t) {
              ;(t = t || {}),
                xt.call(null, this, function () {}, t),
                void 0 === n.showAgain && void 0 !== n.forgetHide && (n.showAgain = n.forgetHide)
              var i = {
                icon: ue(n.icon) || '',
                title: ue(n.title) || '',
                description: ue(n.description) || '',
                M: 'number' == typeof n.reviewCount && 0 < n.reviewCount ? Math.floor(n.reviewCount) : null,
                B: 'number' == typeof n.rating && 5 >= n.rating && 0 < n.rating ? Math.round(2 * n.rating) / 2 : null,
                na: ue(n.openAppButtonText) || 'View in app',
                ja: ue(n.downloadAppButtonText) || 'Download App',
                ra: ue(n.sendLinkText) || 'Send Link',
                pa: ue(n.phonePreviewText) || '(999) 999-9999',
                F: void 0 === n.iframe || n.iframe,
                U: void 0 === n.showiOS || n.showiOS,
                ta: void 0 === n.showiPad || n.showiPad,
                P: void 0 === n.showAndroid || n.showAndroid,
                R: void 0 === n.showBlackberry || n.showBlackberry,
                T: void 0 === n.showWindowsPhone || n.showWindowsPhone,
                S: void 0 === n.showKindle || n.showKindle,
                sa: void 0 === n.showDesktop || n.showDesktop,
                ia: !!n.disableHide,
                K: 'number' == typeof n.forgetHide ? n.forgetHide : !!n.forgetHide,
                qa: void 0 !== n.respectDNT && n.respectDNT,
                position: n.position || 'top',
                fa: n.customCSS || '',
                ma: void 0 !== n.mobileSticky && n.mobileSticky,
                ga: void 0 === n.desktopSticky || n.desktopSticky,
                wa: n.buttonBorderColor || '',
                ua: n.buttonBackgroundColor || '',
                ya: n.buttonFontColor || '',
                xa: n.buttonBorderColorHover || '',
                va: n.buttonBackgroundColorHover || '',
                za: n.buttonFontColorHover || '',
                la: !!n.make_new_link,
                oa: !!n.open_app,
                Z: !!n.immediate,
                da: !!n.append_deeplink_path,
              }
              void 0 !== n.showMobile &&
                ((i.U = n.showMobile),
                (i.P = n.showMobile),
                (i.R = n.showMobile),
                (i.T = n.showMobile),
                (i.S = n.showMobile)),
                (t.data = $(ee(), t.data))
              var r = this
              r.renderQueue(function () {
                r.Y = yn(r, i, t, r.c)
              }),
                e()
            })),
            (vt.prototype.closeBanner = yt(0, function (e) {
              var n = this
              n.renderQueue(function () {
                n.Y &&
                  (kt(n, 'willCloseBanner'),
                  n.Y(function () {
                    kt(n, 'didCloseBanner')
                  }))
              }),
                e()
            })),
            (vt.prototype.autoAppIndex = yt(1, function (e, n) {
              n = n || {}
              var t = document.getElementsByTagName('link'),
                i = t.length
              if (i)
                for (var r = 0; r < i; r++) {
                  var a = t[r],
                    o = a.href
                  o &&
                    (o.includes('ios-app') && ((pt.iosAppIndexingTagsPresent = !0), a.setAttribute('href', bt(o))),
                    o.includes('android-app') &&
                      ((pt.androidAppIndexingTagsPresent = !0), a.setAttribute('href', bt(o))))
                }
              ;(ht = n),
                pt.androidAppIndexingTagsPresent || (gt('android'), pt.androidDetailsComplete || _t('android')),
                pt.iosAppIndexingTagsPresent || (gt('ios'), pt.iosDetailsComplete || _t('ios')),
                pt.iosDetailsComplete || pt.androidDetailsComplete
                  ? e(null)
                  : e('Firebase App Indexing tags were not added to your webpage. Please check your configuration.')
            })),
            (vt.prototype.trackCommerceEvent = yt(1, function (e, n, t, i) {
              var r = this
              r.renderQueue(function () {
                var a = le(n, t)
                if (a) return e(Error(a))
                r.b(
                  Je,
                  {
                    event: n,
                    metadata: $(
                      { url: document.URL, user_agent: navigator.userAgent, language: navigator.language },
                      i || {},
                    ),
                    initial_referrer: ye(wt(r)),
                    commerce_data: t,
                  },
                  function (n) {
                    e(n || null)
                  },
                )
              }),
                e()
            })),
            (vt.prototype.disableTracking = yt(
              1,
              function (e, n) {
                !1 === n || 'false' === n
                  ? ((j = T = !1),
                    this.i &&
                      this.G &&
                      (!0 === this.G.tracking_disabled && delete this.G.tracking_disabled, this.init(this.i, this.G)))
                  : (void 0 !== n && !0 !== n && 'true' !== n) ||
                    (P(this), (j = T = !0), this.closeBanner(), this.closeJourney()),
                  e()
              },
              !0,
            )),
            (vt.prototype.setAPIResponseCallback = yt(
              0,
              function (e, n) {
                ;(this.V.aa = n), e()
              },
              !0,
            ))
          var Et = new vt()
          if (window.branch && window.branch._q)
            for (var At = window.branch._q, St = 0; St < At.length; St++) {
              var Ot = At[St]
              Et[Ot[0]].apply(Et, Ot[1])
            }
          void 0 ===
            (r = function () {
              return Et
            }.call(n, t, n, e)) || (e.exports = r),
            window && (window.branch = Et)
        })()
      }.call(this, t('yLpj')))
    },
    WDmn: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'initBranchSdk', function () {
          return f
        }),
        t.d(n, 'updateBranchTracking', function () {
          return b
        }),
        t.d(n, 'setJourneyDeeplink', function () {
          return g
        })
      t('JtPf'), t('7x/C')
      var i = t('zh9S'),
        r = t('2Jqb'),
        a = t.n(r),
        o = t('6/RC'),
        c = t('LWld')
      t('jwue'), t('+oxZ'), t('2G9S'), t('ho0z')
      var s,
        d = '_originals',
        l = t('TaB8'),
        u = t('ZxDS'),
        p = t('aITJ')
      if (window && p.b.isFirefox()) {
        var h =
          ((s = ['NS_ERROR_FILE_CORRUPTED', 'NS_ERROR_FILE_NO_DEVICE_SPACE']),
          function (e, n) {
            e.hasOwnProperty(d) || (e[d] = {})
            var t = {}
            s.forEach(function (e) {
              t[e] = !0
            }),
              (e[d][n] = e[n]),
              (e[n] = function () {
                try {
                  var e = this._originals[n]
                  if ('function' == typeof e) {
                    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
                    return e.call.apply(e, [this].concat(r))
                  }
                } catch (o) {
                  if (!t[o.name]) throw o
                }
              })
          })
        h(Storage.prototype, 'setItem'), h(Storage.prototype, 'getItem')
      }
      var f = function (e, n, t) {
          var i =
              e.isTrue('responsive_web_branch_sdk_enabled') &&
              !Object(l.a)('responsive_web_3rd_party_category_branch', e),
            r = e.isTrue('responsive_web_branch_cpid_enabled')
          if (!i) return Promise.resolve({})
          try {
            return n.Branch.initSdk()
              .then(function (i) {
                i.is_loading_enabled &&
                  (y(e, t, i.is_tracking_enabled, i.user_identifier), r && i.is_tracking_enabled && m(n))
              })
              .catch(function () {
                return {}
              })
          } catch (a) {
            throw new Error('Branch SDK error while running _initBranch or _getCrossPlatformIds')
          }
        },
        b = function (e, n) {
          if (!e.isTrue('responsive_web_branch_sdk_enabled')) return Promise.resolve({})
          try {
            return n.Branch.initSdk()
              .then(function (e) {
                a.a.disableTracking(!e.is_tracking_enabled)
              })
              .catch(function () {
                return {}
              })
          } catch (t) {
            throw new Error('Branch SDK error while running disableTracking')
          }
        },
        m =
          ((n.default = a.a),
          function (e) {
            a.a.crossPlatformIds(function (n, t) {
              var i = !n && t ? t.cross_platform_id : null
              return e.Branch.callback(i).catch(function () {
                return {}
              })
            })
          }),
        g = function () {
          var e = Object(c.a)(window.location.href)
          e && a.a.setBranchViewData({ data: { $deeplink_path: e, $android_deeplink_path: e, $ios_deeplink_path: e } })
        },
        _ = function (e, n) {
          return function () {
            var t = i.c({ page: 'app', element: 'journeys_banner', action: e })
            n.dispatch(t)
          }
        },
        y = function (e, n, t, r) {
          var c
          o.canUseDOM && (c = document.getElementById('nonce-csp').nonce),
            a.a.init('key_live_knJAF6W45vSHVJiP0wn8figpqFePX59K', { tracking_disabled: !t, nonce: c }, function (e, t) {
              if (!e && t && window && !p.b.isTwitterApp()) {
                var r = t && t.has_app,
                  a = Object(u.a)(window) ? 'webview' : 'browser',
                  o = r ? 'has_app' : 'has_no_app',
                  c = i.c({ page: 'app', section: a, element: o, action: 'launch' })
                n.dispatch(c)
              }
            }),
            r && a.a.setIdentity(r),
            (function (e) {
              a.a.addListener('didShowJourney', _('impression', e)),
                a.a.addListener('didClickJourneyCTA', _('download', e)),
                a.a.addListener('didClickJourneyContinue', _('not_now', e)),
                a.a.addListener('didClickJourneyClose', _('not_now', e))
            })(n)
        }
    },
  },
])
//# sourceMappingURL=WIPED
