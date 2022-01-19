;(window.webpackJsonp = window.webpackJsonp || []).push([
  [159],
  {
    '+Aie': function (e, t, n) {
      var r
      !(function (o, i, c) {
        if (o) {
          for (
            var a,
              s = {
                8: 'backspace',
                9: 'tab',
                13: 'enter',
                16: 'shift',
                17: 'ctrl',
                18: 'alt',
                20: 'capslock',
                27: 'esc',
                32: 'space',
                33: 'pageup',
                34: 'pagedown',
                35: 'end',
                36: 'home',
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down',
                45: 'ins',
                46: 'del',
                91: 'meta',
                93: 'meta',
                224: 'meta',
              },
              u = {
                106: '*',
                107: '+',
                109: '-',
                110: '.',
                111: '/',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: "'",
              },
              l = {
                '~': '`',
                '!': '1',
                '@': '2',
                '#': '3',
                $: '4',
                '%': '5',
                '^': '6',
                '&': '7',
                '*': '8',
                '(': '9',
                ')': '0',
                _: '-',
                '+': '=',
                ':': ';',
                '"': "'",
                '<': ',',
                '>': '.',
                '?': '/',
                '|': '\\',
              },
              f = {
                option: 'alt',
                command: 'meta',
                return: 'enter',
                escape: 'esc',
                plus: '+',
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl',
              },
              p = 1;
            p < 20;
            ++p
          )
            s[111 + p] = 'f' + p
          for (p = 0; p <= 9; ++p) s[p + 96] = p.toString()
          ;(g.prototype.bind = function (e, t, n) {
            var r = this
            return (e = e instanceof Array ? e : [e]), r._bindMultiple.call(r, e, t, n), r
          }),
            (g.prototype.unbind = function (e, t) {
              return this.bind.call(this, e, function () {}, t)
            }),
            (g.prototype.trigger = function (e, t) {
              var n = this
              return n._directMap[e + ':' + t] && n._directMap[e + ':' + t]({}, e), n
            }),
            (g.prototype.reset = function () {
              var e = this
              return (e._callbacks = {}), (e._directMap = {}), e
            }),
            (g.prototype.stopCallback = function (e, t) {
              if ((' ' + t.className + ' ').indexOf(' mousetrap ') > -1) return !1
              if (y(t, this.target)) return !1
              if ('composedPath' in e && 'function' == typeof e.composedPath) {
                var n = e.composedPath()[0]
                n !== e.target && (t = n)
              }
              return 'INPUT' == t.tagName || 'SELECT' == t.tagName || 'TEXTAREA' == t.tagName || t.isContentEditable
            }),
            (g.prototype.handleKey = function () {
              var e = this
              return e._handleKey.apply(e, arguments)
            }),
            (g.addKeycodes = function (e) {
              for (var t in e) e.hasOwnProperty(t) && (s[t] = e[t])
              a = null
            }),
            (g.init = function () {
              var e = g(i)
              for (var t in e)
                '_' !== t.charAt(0) &&
                  (g[t] = (function (t) {
                    return function () {
                      return e[t].apply(e, arguments)
                    }
                  })(t))
            }),
            g.init(),
            (o.Mousetrap = g),
            e.exports && (e.exports = g),
            void 0 ===
              (r = function () {
                return g
              }.call(t, n, t, e)) || (e.exports = r)
        }
        function d(e, t, n) {
          e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent('on' + t, n)
        }
        function h(e) {
          if ('keypress' == e.type) {
            var t = String.fromCharCode(e.which)
            return e.shiftKey || (t = t.toLowerCase()), t
          }
          return s[e.which] ? s[e.which] : u[e.which] ? u[e.which] : String.fromCharCode(e.which).toLowerCase()
        }
        function m(e) {
          return 'shift' == e || 'ctrl' == e || 'alt' == e || 'meta' == e
        }
        function v(e, t, n) {
          return (
            n ||
              (n = (function () {
                if (!a) for (var e in ((a = {}), s)) (e > 95 && e < 112) || (s.hasOwnProperty(e) && (a[s[e]] = e))
                return a
              })()[e]
                ? 'keydown'
                : 'keypress'),
            'keypress' == n && t.length && (n = 'keydown'),
            n
          )
        }
        function b(e, t) {
          var n,
            r,
            o,
            i = []
          for (
            n = (function (e) {
              return '+' === e ? ['+'] : (e = e.replace(/\+{2}/g, '+plus')).split('+')
            })(e),
              o = 0;
            o < n.length;
            ++o
          )
            (r = n[o]),
              f[r] && (r = f[r]),
              t && 'keypress' != t && l[r] && ((r = l[r]), i.push('shift')),
              m(r) && i.push(r)
          return { key: r, modifiers: i, action: (t = v(r, i, t)) }
        }
        function y(e, t) {
          return null !== e && e !== i && (e === t || y(e.parentNode, t))
        }
        function g(e) {
          var t = this
          if (((e = e || i), !(t instanceof g))) return new g(e)
          ;(t.target = e), (t._callbacks = {}), (t._directMap = {})
          var n,
            r = {},
            o = !1,
            c = !1,
            a = !1
          function s(e) {
            e = e || {}
            var t,
              n = !1
            for (t in r) e[t] ? (n = !0) : (r[t] = 0)
            n || (a = !1)
          }
          function u(e, n, o, i, c, a) {
            var s,
              u,
              l,
              f,
              p = [],
              d = o.type
            if (!t._callbacks[e]) return []
            for ('keyup' == d && m(e) && (n = [e]), s = 0; s < t._callbacks[e].length; ++s)
              if (
                ((u = t._callbacks[e][s]),
                (i || !u.seq || r[u.seq] == u.level) &&
                  d == u.action &&
                  (('keypress' == d && !o.metaKey && !o.ctrlKey) ||
                    ((l = n), (f = u.modifiers), l.sort().join(',') === f.sort().join(','))))
              ) {
                var h = !i && u.combo == c,
                  v = i && u.seq == i && u.level == a
                ;(h || v) && t._callbacks[e].splice(s, 1), p.push(u)
              }
            return p
          }
          function l(e, n, r, o) {
            t.stopCallback(n, n.target || n.srcElement, r, o) ||
              (!1 === e(n, r) &&
                ((function (e) {
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
                })(n),
                (function (e) {
                  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
                })(n)))
          }
          function f(e) {
            'number' != typeof e.which && (e.which = e.keyCode)
            var n = h(e)
            n &&
              ('keyup' != e.type || o !== n
                ? t.handleKey(
                    n,
                    (function (e) {
                      var t = []
                      return (
                        e.shiftKey && t.push('shift'),
                        e.altKey && t.push('alt'),
                        e.ctrlKey && t.push('ctrl'),
                        e.metaKey && t.push('meta'),
                        t
                      )
                    })(e),
                    e,
                  )
                : (o = !1))
          }
          function p(e, t, i, c) {
            function u(t) {
              return function () {
                ;(a = t), ++r[e], clearTimeout(n), (n = setTimeout(s, 1e3))
              }
            }
            function f(t) {
              l(i, t, e), 'keyup' !== c && (o = h(t)), setTimeout(s, 10)
            }
            r[e] = 0
            for (var p = 0; p < t.length; ++p) {
              var d = p + 1 === t.length ? f : u(c || b(t[p + 1]).action)
              v(t[p], d, c, e, p)
            }
          }
          function v(e, n, r, o, i) {
            t._directMap[e + ':' + r] = n
            var c,
              a = (e = e.replace(/\s+/g, ' ')).split(' ')
            a.length > 1
              ? p(e, a, n, r)
              : ((c = b(e, r)),
                (t._callbacks[c.key] = t._callbacks[c.key] || []),
                u(c.key, c.modifiers, { type: c.action }, o, e, i),
                t._callbacks[c.key][o ? 'unshift' : 'push']({
                  callback: n,
                  modifiers: c.modifiers,
                  action: c.action,
                  seq: o,
                  level: i,
                  combo: e,
                }))
          }
          ;(t._handleKey = function (e, t, n) {
            var r,
              o = u(e, t, n),
              i = {},
              f = 0,
              p = !1
            for (r = 0; r < o.length; ++r) o[r].seq && (f = Math.max(f, o[r].level))
            for (r = 0; r < o.length; ++r)
              if (o[r].seq) {
                if (o[r].level != f) continue
                ;(p = !0), (i[o[r].seq] = 1), l(o[r].callback, n, o[r].combo, o[r].seq)
              } else p || l(o[r].callback, n, o[r].combo)
            var d = 'keypress' == n.type && c
            n.type != a || m(e) || d || s(i), (c = p && 'keydown' == n.type)
          }),
            (t._bindMultiple = function (e, t, n) {
              for (var r = 0; r < e.length; ++r) v(e[r], t, n)
            }),
            d(e, 'keypress', f),
            d(e, 'keydown', f),
            d(e, 'keyup', f)
        }
      })('undefined' != typeof window ? window : null, 'undefined' != typeof window ? document : null)
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('ddV6'),
        o = n.n(r),
        i = n('VrFO'),
        c = n.n(i),
        a = n('Y9Ll'),
        s = n.n(a),
        u = n('1Pcy'),
        l = n.n(u),
        f = n('5Yy7'),
        p = n.n(f),
        d = n('N+ot'),
        h = n.n(d),
        m = n('AuHH'),
        v = n.n(m),
        b = n('KEM+'),
        y = n.n(b),
        g = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        _ = n('3XMw'),
        w = n.n(_),
        S = n('cnVF'),
        k = n('Ukpf'),
        E = n('BTou'),
        O = n('mrHL'),
        T = 'LoginForm_Login_Button',
        P = n('fEA7'),
        C = n.n(P),
        j = n('MWbm'),
        A = n('Irs7'),
        I = n('v6aA'),
        R = n('/yvb'),
        x = n('rHpw')
      function D(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = v()(e)
          if (t) {
            var o = v()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var L = w.a.e919c3bc,
        B = (function (e) {
          p()(n, e)
          var t = D(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(l()(e), '_mobileLoginToken', C.a.v1().replace(/-/g, '')),
              y()(l()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), E.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              y()(l()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              y()(l()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              y()(l()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(O.e)(S.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  k.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    r = e.hideSubmitButton,
                    i = e.horizontalLayout,
                    c = e.loginReturnPath,
                    a = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    u = e.submitButtonSize,
                    l = e.submitButtonStyle,
                    f = e.submitButtonType,
                    p = 'string' == typeof c ? c.split('?') : [],
                    d = o()(p, 2),
                    h = d[0],
                    m = d[1],
                    v = encodeURI(h || '/'),
                    b = m ? '?'.concat(m) : '',
                    y = ''.concat('').concat(v).concat(b),
                    _ = g.createElement(
                      j.a,
                      { style: i && M.horizontalFields },
                      g.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: y }),
                      g.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      g.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      g.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      g.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : g.createElement(
                            j.a,
                            { style: i && M.loginButtonContainer },
                            g.createElement(
                              R.a,
                              {
                                disabled: a,
                                onPress: this._handleSubmitButtonClick,
                                size: u,
                                style: l,
                                testID: T,
                                type: f,
                              },
                              s,
                            ),
                          ),
                    )
                  return g.createElement(
                    j.a,
                    { style: M.loginForm },
                    g.createElement('form', {
                      action: n,
                      children: _,
                      method: 'post',
                      noValidate: !0,
                      onSubmit: this._handleSubmit,
                      ref: this._setFormRef,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      y()(B, 'contextType', I.a),
        y()(B, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: L,
          submitButtonType: 'brandFilled',
        })
      var M = x.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(A.a)(B, { element: 'inline_login_form' })
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'd', function () {
          return u
        }),
        n.d(t, 'e', function () {
          return p
        })
      n('yH/f')
      var r = n('SrIh'),
        o = n('JbbX'),
        i = 1e3,
        c = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function a(e) {
        var t = Object(o.a)(e)
        return t
          ? l(t)
            ? f(t)
              ? t[1]
                ? c.AcceptAllCookies
                : t[2]
                ? c.RefuseNonEssentialCookies
                : (Object(r.a)('Invalid consent signal state'), c.Invalid)
              : c.NotSet
            : c.Invalid
          : c.NotSet
      }
      function s(e) {
        Object(o.b)({ consent_version: 2, text_version: i, 1: !0 }, e)
      }
      function u(e) {
        Object(o.b)({ consent_version: 2, text_version: i, 2: !0 }, e)
      }
      function l(e) {
        return !(e[1] && e[2])
      }
      function f(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(o.a)(e)
        return !t || !l(t) || !f(t) || t.consent_version < 2 || t.text_version < i
      }
    },
    Chb3: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        o = n.n(r),
        i = (n('jQ3i'), n('ERkP')),
        c = n('Hde2'),
        a = n('H1k/'),
        s = n('Ty5D'),
        u = n('496R')
      function l(e) {
        return !['/i/flow/login'].includes(e)
      }
      function f() {
        var e = Object(s.h)(),
          t = i.useState(function () {
            return l(e.pathname)
          }),
          n = o()(t, 2),
          r = n[0],
          c = n[1]
        return (
          i.useEffect(
            function () {
              c(l(e.pathname))
            },
            [c, e],
          ),
          r
        )
      }
      t.a = Object(u.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = f()
        return !e.hideCookieBannerPicker && t ? i.createElement(c.a, null, i.createElement(a.a, null)) : null
      })
    },
    'H1k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return oe
      })
      var r = n('ERkP'),
        o = n('v6aA'),
        i = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        c = n.n(i),
        a = n('ddV6'),
        s = n.n(a),
        u = n('AS3p'),
        l = n('KUGV'),
        f = n('Irs7'),
        p = n('MWbm'),
        d = n('t62R'),
        h = n('cHvH'),
        m = n('rHpw'),
        v = n('/yvb'),
        b = n('3XMw'),
        y = n.n(b)
      function g(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = y.a.d8817e36,
        S = y.a.b9288ee6,
        k = y.a.i1390ec2,
        E = { page: 'cookie_compliance_banner' }
      function O() {
        var e = r.createElement(
          y.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          r.createElement(
            d.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            y.a.id7ef73f,
          ),
        )
        return r.createElement(P, { body: e, title: k })
      }
      function T(e) {
        var t = r.createElement(
          y.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          r.createElement(
            d.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            y.a.gfb2ba0f,
          ),
        )
        return r.createElement(P, { body: t, title: k })
      }
      function P(e) {
        return r.createElement(
          p.a,
          { style: j.cookieComplianceMessageWrap },
          r.createElement(d.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          r.createElement(
            d.b,
            { color: 'buttonWhite', size: 'subtext2', style: j.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var C = r.forwardRef(function (e, t) {
          var n = Object(f.b)()
          r.useEffect(
            function () {
              n.scribe(_(_({}, E), {}, { action: 'impression' }))
            },
            [n],
          )
          var i = (function () {
              var e = r.useState(!1),
                t = s()(e, 2),
                n = t[0],
                o = t[1],
                i = Object(f.b)()
              return {
                isExpanded: n,
                expand: function () {
                  i.scribe(_(_({}, E), {}, { action: 'click', element: 'expand_message' })), o(!0)
                },
              }
            })(),
            c = i.expand,
            a = i.isExpanded,
            d = (function () {
              var e = Object(f.b)(),
                t = r.useContext(o.a).featureSwitches,
                n = r.useState(function () {
                  return u.e(t) && !Object(l.a)()
                }),
                i = s()(n, 2),
                c = i[0],
                a = i[1]
              return {
                isBannerOpen: c,
                acceptAllCookies: function () {
                  e.scribe(_(_({}, E), {}, { action: 'click', element: 'accept_all' })), u.b(t), a(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(_(_({}, E), {}, { action: 'click', element: 'refuse_non_essential' })), u.d(t), a(!1)
                },
              }
            })(),
            b = d.acceptAllCookies,
            y = d.isBannerOpen,
            g = d.refuseNonEssentialCookies
          return y
            ? r.createElement(h.a, null, function (e) {
                var n = e.windowWidth < m.a.theme.breakpoints.xLarge
                return r.createElement(
                  p.a,
                  { ref: t, style: [j.root, n && j.rootNarrow] },
                  a ? r.createElement(O, null) : r.createElement(T, { onExpand: c }),
                  r.createElement(
                    p.a,
                    { style: [j.buttonContainer, n && j.buttonContainerNarrow] },
                    r.createElement(
                      v.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: b,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: m.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      w,
                    ),
                    r.createElement(
                      v.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: g,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: m.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      S,
                    ),
                  ),
                )
              })
            : null
        }),
        j = m.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.xSmall,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              backgroundColor: e.colors.buttonBlack,
            },
            rootNarrow: {
              flexDirection: 'column',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingTop: e.spaces.space20,
              backgroundColor: e.colors.buttonBlack,
            },
            buttonContainer: {
              flexDirection: 'column',
              marginVertical: e.spaces.space16,
              marginLeft: e.spaces.space20,
            },
            buttonContainerNarrow: {
              width: '100%',
              maxWidth: 550,
              marginLeft: 0,
              flexDirection: 'column',
              flexWrap: 'wrap',
            },
            ctaButton: {
              height: e.spaces.space40,
              marginBottom: e.spaces.space8,
              width: 420,
              flexGrow: 0,
              flexShrink: 0,
            },
            ctaButtonNarrow: { marginLeft: 0, width: '100%' },
            cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 },
            cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 },
            background: { backgroundColor: e.colors.buttonBlack },
          }
        }),
        A = (n('OZaJ'), n('97Jx')),
        I = n.n(A),
        R = n('VrFO'),
        x = n.n(R),
        D = n('Y9Ll'),
        L = n.n(D),
        B = n('1Pcy'),
        M = n.n(B),
        N = n('5Yy7'),
        U = n.n(N),
        F = n('N+ot'),
        H = n.n(F),
        K = n('AuHH'),
        z = n.n(K),
        W = (n('hBvt'), n('RqPI')),
        V = n('rxPX'),
        X = Object(V.a)().propsFromState(function () {
          return { currentCountry: W.v }
        }),
        q = n('cnVF'),
        Y = n('mrHL'),
        G =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          })
      function J(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = z()(e)
          if (t) {
            var o = z()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return H()(this, n)
        }
      }
      var Z = y.a.ia5e7487,
        Q = (function (e) {
          U()(n, e)
          var t = J(n)
          function n(e, o) {
            var i
            x()(this, n),
              (i = t.call(this, e, o)),
              c()(M()(i), 'state', { euWarningIsOpen: !1 }),
              c()(M()(i), '_renderMessage', function () {
                return r.createElement(
                  d.b,
                  { color: 'white', size: 'subtext2' },
                  r.createElement(
                    y.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    r.createElement(
                      d.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: $.link,
                      },
                      y.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              c()(M()(i), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(Y.e)(q.k, '1', { featureSwitches: e })
                })(i.context.featureSwitches),
                  i.setState({ euWarningIsOpen: !1 })
              })
            var a = i.props.currentCountry,
              s = i.context.featureSwitches,
              u = s.getArrayValue('responsive_web_eu_countries', []),
              l = Object(Y.d)({ featureSwitches: s, cookieName: q.k })
            return (i.state = { euWarningIsOpen: !!a && G(u, a, l) }), i
          }
          return (
            L()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? r.createElement(h.a, null, function (t) {
                        var n = t.windowWidth < m.a.theme.breakpoints.medium
                        return r.createElement(
                          p.a,
                          { ref: e.props.innerRef, style: [$.root, n && $.rootNarrow] },
                          e._renderMessage(),
                          r.createElement(
                            v.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [$.closeButton, n && $.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            Z,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(r.Component)
      c()(Q, 'contextType', o.a)
      var $ = m.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              backgroundColor: e.colors.gray1100,
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spaces.space20,
            },
            rootNarrow: { flexDirection: 'column' },
            container: { alignItems: 'center', flexShrink: 1 },
            closeButton: { marginLeft: e.spaces.space12, marginTop: 0, flexGrow: 0, flexShrink: 0 },
            closeButtonNarrow: { marginLeft: 0, marginTop: e.spaces.space12, width: '100%' },
            link: { textDecorationLine: 'underline' },
          }
        }),
        ee = r.forwardRef(function (e, t) {
          return r.createElement(Q, I()({}, e, { innerRef: t }))
        }),
        te = X.forwardRef(ee),
        ne = n('+d3d')
      function re(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = r.useCallback(
            Object(ne.a)(function (t) {
              if (e)
                if (t) {
                  var n = t.getBoundingClientRect()
                  n && e(n)
                } else e(null)
            }, t),
            [e, t],
          )
        return r.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var r,
                o = n.bind(null, t)
              return (
                o(),
                window.addEventListener('resize', o),
                t && (r = new ResizeObserver(o)).observe(t),
                function () {
                  window.removeEventListener('resize', o), r && r.disconnect(), n.cancel()
                }
              )
            }
          },
          [e, n],
        )
      }
      function oe(e) {
        var t,
          n = r.useContext(o.a).featureSwitches,
          i =
            ((t = e.onHeightChange),
            re(
              r.useMemo(
                function () {
                  return 'function' == typeof t
                    ? function (e) {
                        t(e ? e.height : null)
                      }
                    : void 0
                },
                [t],
              ),
            ))
        return n.isTrue('responsive_web_cookie_compliance_banner_enabled')
          ? r.createElement(C, { ref: i })
          : r.createElement(te, { ref: i })
      }
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return o
        })
      n('yH/f')
      var r = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return K
      })
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        a =
          (n('JtPf'),
          n('7x/C'),
          n('LJOr'),
          n('KqXw'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('KEM+')),
        s = n.n(a),
        u = (n('IAdD'), n('yH/f'), n('OZaJ'), n('5Yy7')),
        l = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        h = n.n(d),
        m = n('mAxt'),
        v = n.n(m),
        b = (n('2G9S'), n('CEs6'))
      function y(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var g = (function (e) {
        l()(n, e)
        var t = y(n)
        function n(e, r, i) {
          var c
          return (
            o()(this, n),
            ((c = t.call(
              this,
              ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(r, ' message: ').concat(i),
            )).url = e),
            (c.status = r),
            c
          )
        }
        return n
      })(v()(Error))
      s()(g, 'displayName', 'ProxseeApiError')
      var _,
        w = n('epkG'),
        S = n('SrIh'),
        k = n('RqPI')
      function E(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T,
        P = 0,
        C = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L
            o()(this, e),
              s()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(O({ abuse_type: N.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(O({ abuse_type: N.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(O({ abuse_type: N.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(O({ abuse_type: N.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(O({ abuse_type: N.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(O({ abuse_type: N.AbusiveBehavior }, e))
                },
              })
            var r = n.httpConfig
            ;(this.client = new w.a(O(O({}, B), r))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            c()(e, [
              {
                key: 'init',
                value: function (e) {
                  T = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!T
                },
              },
              {
                key: 'isLoggedIn',
                value: function () {
                  return !!this._authToken
                },
              },
              {
                key: 'isTwitterAuthenticated',
                value: function () {
                  if (!this.initialized()) return !1
                  var e = T.store.getState()
                  return Object(k.l)(e)
                },
              },
              {
                key: 'authToken',
                value: function () {
                  return this._authToken
                },
              },
              {
                key: 'dispatch',
                value: function (e) {
                  return this.initialized()
                    ? this.client.dispatch(e).then(b.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.params,
                    o = Object.assign(x(), n.headers),
                    i = JSON.stringify(O(O({}, t), {}, { cookie: this._authToken })),
                    c = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(c), headers: o, params: r, data: i })
                },
              },
              {
                key: 'login',
                value: function () {
                  var e = this
                  return this._authPromise
                    ? this._authPromise
                    : this.initialized()
                    ? this.isTwitterAuthenticated()
                      ? this.isLoggedIn()
                        ? Promise.resolve()
                        : ((this._authPromise = T.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(S.a)('[ProxseeApi] failed to login', { extra: t })
                            })
                            .then(function () {
                              e._authPromise = null
                            })),
                          this._authPromise)
                      : Promise.resolve()
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'loginTwitterToken',
                value: function (e) {
                  var t = { jwt: e, vendor_id: D, create_user: !1, direct: !0 }
                  return this.post('loginTwitterToken', t)
                },
              },
              {
                key: 'publicPath',
                value: function (e) {
                  return this.isLoggedIn() ? e : ''.concat(e, 'Public')
                },
              },
              {
                key: 'accessChat',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post(t.publicPath('accessChat'), { chat_token: e })
                  })
                },
              },
              {
                key: 'getChatHistory',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return this.login().then(function () {
                    var r = n.params,
                      o = Object.assign(x(), n.headers),
                      i = JSON.stringify({ access_token: e.access_token, cursor: e.cursor, limit: 1e3, since: null })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: o, params: r, data: i })
                  })
                },
              },
              {
                key: 'trackAudiospaceClientEvent',
                value: function (e) {
                  var t = this
                  return e.length
                    ? this.login().then(function () {
                        return t
                          .post(t.publicPath('trackAudiospaceClientEvent'), { time: Date.now(), log: e })
                          .catch(function (e) {
                            Object(S.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
                          })
                      })
                    : Promise.resolve()
                },
              },
              {
                key: '_reportSpace',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('markAbuse', e).catch(function (e) {
                      Object(S.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        j = 'X-Idempotence',
        A = 'X-Periscope-User-Agent',
        I = 'X-Attempt',
        R = ((_ = {}), s()(_, A, 'Twitter/m5'), s()(_, I, 1), _)
      function x() {
        var e,
          t = Date.now()
        return (
          (P = t <= P ? P + 1 : t),
          Object.assign({}, R, ((e = {}), s()(e, j, P), s()(e, 'content-type', 'application/json'), e))
        )
      }
      var D = 'm5-proxsee-login-a2011357b73e',
        L = {},
        B = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        r = t.status,
                        o = Object(b.a)(t)
                      return new g(n, r, o.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var M,
        N = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        U = new C(),
        F = n('G6rE'),
        H = new Error('[AudioModule] config not initialized'),
        K = new ((function () {
          function e() {
            o()(this, e), (this.proxsee = U)
          }
          return (
            c()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(M = e), U.init(M)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!M
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = M.store.getState()
                    return F.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return M ? M.api.AudioSpaces.byId(e) : Promise.reject(H)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return M ? M.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(H)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return M ? M.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(H)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return M ? M.api.AudioSpaces.search(e, t) : Promise.reject(H)
                },
              },
            ]),
            e
          )
        })())()
    },
    TpKd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return a
        })
      n('2G9S'), n('Ysgh'), n('KqXw')
      var r = n('mrHL'),
        o = 'external_referer'
      function i(e) {
        return Object(r.d)({ cookieName: o, featureSwitches: e })
      }
      function c(e, t) {
        var n = (t && t.encryptedReferralDetails) || '',
          i = (t && t.encryptedReferer) || '',
          c = t && void 0 !== t.referralType ? ''.concat(t.referralType) : ''
        if (n || i || c) {
          var a = ''.concat(encodeURIComponent(i), '|').concat(c, '|').concat(encodeURIComponent(n))
          Object(r.e)(o, a, {
            cookieOptions: {
              maxAge: 604800,
              encode: function (e) {
                return e
              },
            },
            featureSwitches: e,
          })
        }
      }
      var a = function (e) {
        var t = i(e)
        if (t && t.split('|').length > 1) {
          var n = t.split('|')
          return { encryptedReferer: n[0], referralType: n[1], encryptedReferralDetails: n[2] }
        }
      }
    },
    Ukpf: function (e, t, n) {
      'use strict'
      var r = {
        inject: function (e) {
          var t = e.callback,
            n = e.scriptId,
            r = e.src
          if (document.getElementById(n)) t && t()
          else {
            var o = document.createElement('script')
            ;(o.src = r),
              (o.id = n),
              (o.async = !0),
              (o.defer = !0),
              document.body.appendChild(o),
              (o.onload = function () {
                t && t()
              })
          }
        },
        replace: function (e) {
          var t,
            n = e.callback,
            o = e.scriptId,
            i = e.src,
            c = document.getElementById(o)
          c && (null === (t = c.parentNode) || void 0 === t || t.removeChild(c))
          r.inject({ callback: n, scriptId: o, src: i })
        },
      }
      t.a = r
    },
    XTym: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        o = n.n(r),
        i = n('VrFO'),
        c = n.n(i),
        a = n('Y9Ll'),
        s = n.n(a),
        u = n('1Pcy'),
        l = n.n(u),
        f = n('5Yy7'),
        p = n.n(f),
        d = n('N+ot'),
        h = n.n(d),
        m = n('AuHH'),
        v = n.n(m),
        b = n('KEM+'),
        y = n.n(b),
        g = (n('2G9S'), n('hBvt'), n('Ysgh'), n('KqXw'), n('uFXj'), n('SV7d')),
        _ = n('ERkP'),
        w = n('t62R'),
        S = n('/yvb'),
        k = n('mw9i'),
        E = n('hOZg'),
        O = n('Oe3h'),
        T = n('0FVZ'),
        P = n('cHvH'),
        C = n('rHpw'),
        j = n('3XMw'),
        A = n.n(j),
        I = n('+/1j'),
        R = n('MWbm')
      function x(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = v()(e)
          if (t) {
            var o = v()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var D = A.a.af8fa2ad,
        L = _.createElement(E.a, null),
        B = (function (e) {
          p()(n, e)
          var t = x(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(l()(e), '_renderAriaOnly', function () {
                var t = e.props,
                  n = t.testID,
                  r = t.text
                return _.createElement(
                  R.a,
                  { accessibilityRole: 'alert', style: C.a.visuallyHidden, testID: n },
                  _.createElement(I.a, null, r),
                )
              }),
              y()(l()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.action,
                  r = t.text,
                  o = t.withAutoDismiss,
                  i = t.withClearButton
                return _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(w.b, { color: 'whiteOnColor', style: M.titleText }, r),
                  _.createElement(
                    R.a,
                    { accessibilityHidden: o, style: M.actionButtons },
                    n && e._renderActionLabel(n),
                    i &&
                      _.createElement(S.a, {
                        accessibilityLabel: D,
                        borderColor: 'transparent',
                        color: 'white',
                        icon: L,
                        onPress: e._handleClose,
                        style: M.closeButton,
                      }),
                  ),
                )
              }),
              y()(l()(e), '_renderContentWithLayer', function (t) {
                var n = t.windowWidth,
                  r = e.props,
                  i = r.LayerComponent,
                  c = r.behavioralEventEntityToken,
                  a = r.testID,
                  s = c ? { type: 'toast', entityToken: c } : void 0
                return _.createElement(
                  i,
                  null,
                  _.createElement(
                    k.a,
                    null,
                    _.createElement(O.a, { id: 'Toast' }, function (t, r) {
                      return _.createElement(
                        g.b,
                        { viewState: s, viewType: 'toast' },
                        _.createElement(
                          R.a,
                          o()(
                            { ref: t() },
                            r({
                              accessibilityRole: 'alert',
                              style: [M.root, n > C.a.theme.breakpoints.medium && M.rootWide],
                              testID: a,
                            }),
                          ),
                          e._renderContent(),
                        ),
                      )
                    }),
                  ),
                )
              }),
              y()(l()(e), '_renderContentWithoutLayer', function (t) {
                var n = t.windowWidth,
                  r = e.props,
                  o = r.behavioralEventEntityToken,
                  i = r.testID,
                  c = o ? { type: 'toast', entityToken: o } : void 0
                return _.createElement(
                  k.a,
                  null,
                  _.createElement(
                    g.b,
                    { viewState: c, viewType: 'toast' },
                    _.createElement(
                      R.a,
                      {
                        accessibilityRole: 'alert',
                        style: [M.root, n > C.a.theme.breakpoints.medium && M.rootWide],
                        testID: i,
                      },
                      e._renderContent(),
                    ),
                  ),
                )
              }),
              y()(l()(e), '_createTimer', function () {
                var t = e.props,
                  r = t.action,
                  o = t.autoDismissDelay,
                  i = t.onClose,
                  c = t.text
                if (t.withAutoDismiss) {
                  var a = o || n.calculateDismissDelay(c, !!r)
                  e._timerId = setTimeout(i, a)
                }
              }),
              y()(l()(e), '_handleActionPress', function (t) {
                e._stopTimer()
                var n = e.props,
                  r = n.action,
                  o = n.onClose
                null != r && r.onAction && r.onAction(t), o(t)
              }),
              y()(l()(e), '_handleClose', function (t) {
                e._stopTimer(), e.props.onClose(t)
              }),
              e
            )
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._createTimer()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this._stopTimer()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.ariaOnly,
                      n = e.withoutLayer
                    return t
                      ? this._renderAriaOnly()
                      : _.createElement(P.a, null, n ? this._renderContentWithoutLayer : this._renderContentWithLayer)
                  },
                },
                {
                  key: '_renderActionLabel',
                  value: function (e) {
                    var t = e.behavioralEventViewType,
                      n = e.label,
                      r = e.link,
                      o = t || 'action'
                    return _.createElement(
                      g.a,
                      { viewType: o },
                      _.createElement(w.b, {
                        children: n,
                        color: 'whiteOnColor',
                        link: r,
                        onClick: this._handleActionPress,
                        style: [M.actionText, !r && M.actionMargin],
                        weight: 'bold',
                        withInteractiveStyling: !0,
                      }),
                    )
                  },
                },
                {
                  key: '_stopTimer',
                  value: function () {
                    clearTimeout(this._timerId)
                  },
                },
              ],
              [
                {
                  key: 'calculateDismissDelay',
                  value: function (e, t) {
                    var n = (1e3 * ('string' == typeof e ? e.split(' ').length : 0)) / 5 + 225
                    return (n < 4e3 ? 4e3 : n) + (t ? 2e3 : 0)
                  },
                },
              ],
            ),
            n
          )
        })(_.Component)
      y()(B, 'defaultProps', { withAutoDismiss: !0, withClearButton: !1, LayerComponent: T.a.ModalToasts })
      var M = C.a.create(function (e) {
        return {
          root: {
            alignItems: 'center',
            backgroundColor: e.colors.primary,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: e.spaces.space12,
          },
          rootWide: { alignSelf: 'center', borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 },
          titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 },
          actionText: { alignSelf: 'center', whiteSpace: 'nowrap', marginRight: e.spaces.space12 },
          actionButtons: { flexDirection: 'row' },
          actionMargin: { marginHorizontal: e.spaces.space12 },
          closeButton: { marginLeft: e.spaces.space12, paddingHorizontal: e.spaces.space4 },
        }
      })
      t.a = B
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return f
      }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return v
        }),
        n.d(t, 'b', function () {
          return b
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        i = (n('yH/f'), n('JtPf'), n('7x/C'), n('M6MT')),
        c = n('Ssj5')
      function a(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = 'geoLocation',
        l = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var f = function (e) {
          return e.geoLocation.permissionStatus
        },
        p = function (e) {
          return e.geoLocation.position
        },
        d = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: d }
        },
        m = 'rweb/geoLocation/SET_POSITION',
        v = function () {
          return function (e, t) {
            return y()
              .then(function (t) {
                return e({ payload: t, type: m })
              })
              .catch(function (t) {
                return e(h(i.b.denied)), Promise.reject(t)
              })
          }
        },
        b = function () {
          return function (e, t) {
            return p(t()) ? Promise.resolve() : e(v())
          }
        },
        y = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var n = {
                timestamp: t.timestamp,
                coords: {
                  latitude: t.coords.latitude,
                  longitude: t.coords.longitude,
                  altitude: t.coords.altitude,
                  accuracy: t.coords.accuracy,
                  altitudeAccuracy: t.coords.altitudeAccuracy,
                  heading: t.coords.heading,
                  speed: t.coords.speed,
                },
              }
              return e(n)
            }, t)
          })
        }
      c.a.register(
        o()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d:
              return s(s({}, e), {}, { permissionStatus: t.payload })
            case m:
              return s(s({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    donR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'inputDetect', function () {
          return Bt
        }),
        n.d(t, 'BottomCookieBannerPicker', function () {
          return Mt
        }),
        n.d(t, 'DtabBar', function () {
          return Nt
        }),
        n.d(t, 'GlobalKeyboardShortcuts', function () {
          return Ut
        }),
        n.d(t, 'LivePipeline', function () {
          return Ft
        }),
        n.d(t, 'ModalSheet', function () {
          return Ht
        }),
        n.d(t, 'SmartLockPrompt', function () {
          return Kt
        }),
        n.d(t, 'Seo', function () {
          return zt
        }),
        n.d(t, 'Toast', function () {
          return Wt
        }),
        n.d(t, 'appReloader', function () {
          return Vt
        }),
        n.d(t, 'badgeTimers', function () {
          return Xt
        }),
        n.d(t, 'bindKeyboardShortcuts', function () {
          return qt
        }),
        n.d(t, 'ie11Reflower', function () {
          return Yt
        }),
        n.d(t, 'multiAccountListFetcher', function () {
          return Gt
        }),
        n.d(t, 'redirectEmailUser', function () {
          return Jt
        }),
        n.d(t, 'scribeExternalReferer', function () {
          return Zt
        }),
        n.d(t, 'getScreenReaderShortcutsDataAttribute', function () {
          return Qt
        }),
        n.d(t, 'altSvc', function () {
          return $t
        }),
        n.d(t, 'AppInstallOnLandingPrompt', function () {
          return en
        }),
        n.d(t, 'AudioModule', function () {
          return tn
        }),
        n.d(t, 'initGeoLocation', function () {
          return nn
        }),
        n.d(t, 'userPresence', function () {
          return rn
        })
      var r = {}
      n.r(r),
        n.d(r, 'initialize', function () {
          return _
        }),
        n.d(r, 'detectedTypes', function () {
          return w
        }),
        n.d(r, 'detectedType', function () {
          return S
        }),
        n.d(r, 'register', function () {
          return k
        }),
        n.d(r, 'registerSome', function () {
          return E
        }),
        n.d(r, 'registerEvery', function () {
          return O
        }),
        n.d(r, 'unregister', function () {
          return T
        }),
        n.d(r, 'reset', function () {
          return P
        }),
        n.d(r, 'KEYBOARD', function () {
          return d
        }),
        n.d(r, 'MOUSE', function () {
          return h
        }),
        n.d(r, '_private', function () {
          return C
        })
      var o,
        i,
        c = n('3+LL'),
        a = n('VrFO'),
        s = n.n(a),
        u = n('KEM+'),
        l = n.n(u),
        f = (n('LW0h'), n('jwue'), n('+oxZ'), n('+KXO'), n('5BYb'), n('DfhM'), n('vrRf'), n('Ee2X'), n('z0MJ')),
        p = n.n(f),
        d = 'keyboard',
        h = 'mouse',
        m = [],
        v = ((o = {}), l()(o, d, !1), l()(o, h, !1), o),
        b = function e(t) {
          var n = this
          s()(this, e),
            l()(this, '_handleTimerEnd', function () {
              n._count >= 3 && n._handleDetected(), n._reset()
            }),
            l()(this, '_handleDetected', function () {
              n._reset(), n.detach(), n.detected()
            }),
            l()(this, '_reset', function () {
              clearTimeout(n._timer), (n._timer = void 0), (n._count = 0)
            }),
            l()(this, '_handleMouseMove', function () {
              ;(n._count = n._count + 1),
                n._count >= 3 ? n._handleDetected() : n._timer || (n._timer = setTimeout(n._handleTimerEnd, 500))
            }),
            l()(this, 'attach', function () {
              document.addEventListener('mousemove', n._handleMouseMove),
                document.addEventListener('touchend', n._reset)
            }),
            l()(this, 'detach', function () {
              document.removeEventListener('mousemove', n._handleMouseMove),
                document.removeEventListener('touchend', n._reset)
            }),
            (this.detected = t),
            (this._count = 0)
        },
        y = function e(t) {
          var n = this
          s()(this, e),
            l()(this, '_handleKeyDown', function (e) {
              var t,
                r = e.altKey,
                o = e.ctrlKey,
                i = e.metaKey,
                c = e.target
              ;(!(r || o || i) && ((t = c) instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) ||
                (n.detach(), n.detected())
            }),
            l()(this, 'attach', function () {
              document.addEventListener('keydown', n._handleKeyDown)
            }),
            l()(this, 'detach', function () {
              document.removeEventListener('keydown', n._handleKeyDown)
            }),
            (this.detected = t)
        }
      function g(e) {
        v[e] = !0
        var t = m.filter(function (e) {
            return (0, e.matches)()
          }),
          n = m.filter(function (e) {
            return !(0, e.matches)()
          })
        ;(m = n),
          t.forEach(function (e) {
            return (0, e.callback)()
          })
      }
      var _ = function () {
          ;(i = [
            new y(function () {
              return g(d)
            }),
            new b(function () {
              return g(h)
            }),
          ]).forEach(function (e) {
            return e.attach()
          })
        },
        w = function () {
          return Object.keys(v).filter(function (e) {
            return v[e]
          })
        },
        S = function (e) {
          return v[e]
        },
        k = function (e, t) {
          var n = function () {
            return v[t]
          }
          n() ? p()(e) : m.push({ matches: n, callback: e })
        },
        E = function (e, t) {
          var n = function () {
            return t.some(function (e) {
              return v[e]
            })
          }
          n() ? p()(e) : m.push({ matches: n, callback: e })
        },
        O = function (e, t) {
          var n = function () {
            return t.every(function (e) {
              return v[e]
            })
          }
          n() ? p()(e) : m.push({ matches: n, callback: e })
        },
        T = function (e) {
          var t = m.indexOf(e)
          t > -1 && m.splice(t, 1)
        },
        P = function () {
          ;(m = []),
            Object.keys(v).forEach(function (e) {
              v[e] = !1
            }),
            i.forEach(function (e) {
              return e.detach()
            })
        },
        C = { MOUSE_INTERVAL_TIME_IN_MS: 500, SUCCESSIVE_MOUSE_EVENTS: 3, detected: g },
        j = n('0KEI'),
        A = function (e, t, n) {
          if (e.isTrue('responsive_web_alt_svc')) {
            var r = n(Object(j.createLocalApiErrorHandlerWithContextFactory)('APP_INITIALIZATION_ALT_SVC')({}))
            t.AltSvc.fetch().catch(r)
          }
        },
        I = (n('OZaJ'), n('Y9Ll')),
        R = n.n(I),
        x = n('1Pcy'),
        D = n.n(x),
        L = n('5Yy7'),
        B = n.n(L),
        M = n('N+ot'),
        N = n.n(M),
        U = n('AuHH'),
        F = n.n(U),
        H = (n('2G9S'), n('ERkP')),
        K = n('sebV'),
        z = (n('jQ3i'), n('x4t0'), n('rxPX')),
        W = function (e, t) {
          return t.location.pathname.includes('/intent/')
        },
        V = function (e, t) {
          return t.location.pathname.includes('/login')
        },
        X = Object(z.a)()
          .propsFromState(function () {
            return { isIntentRoute: W, isLoginRoute: V }
          })
          .adjustStateProps(function (e) {
            var t = e.isIntentRoute,
              n = e.isLoginRoute
            return { hideAppPrompt: t || n }
          }),
        q = n('RxYA'),
        Y = n('TnY3'),
        G = n('v6aA')
      function J(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = F()(e)
          if (t) {
            var o = F()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return N()(this, n)
        }
      }
      var Z = (function (e) {
        B()(n, e)
        var t = J(n)
        function n() {
          var e
          s()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            l()(D()(e), '_isStandaloneApp', K.a.isStandaloneApp()),
            l()(D()(e), 'state', {
              showPrompt:
                !e.props.hideAppPrompt &&
                !e.context.loggedInUserId &&
                !e._isStandaloneApp &&
                e.context.featureSwitches.isTrue('responsive_web_use_app_prompt_enabled') &&
                !e.context.featureSwitches.isTrue('responsive_web_open_in_app_prompt_enabled'),
            }),
            l()(D()(e), '_handleClose', function () {
              e.setState({ showPrompt: !1 })
            }),
            e
          )
        }
        return (
          R()(n, [
            {
              key: 'render',
              value: function () {
                return this.state.showPrompt
                  ? H.createElement(q.a, { onClose: this._handleClose, onlyShowOnce: !0, useBottomBanner: !0 })
                  : null
              },
            },
          ]),
          n
        )
      })(H.Component)
      l()(Z, 'contextType', G.a)
      var Q = Object(Y.a)(X(Z)),
        $ = n('Pc/x'),
        ee = n('RqPI'),
        te = n('k49u'),
        ne = n('2g+p'),
        re = n('auX9'),
        oe = n('fs1G'),
        ie = n('B5iK'),
        ce = n('l0YN'),
        ae = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
          window.requestIdleCallback
            ? window.requestIdleCallback(function () {
                return e.fire()
              })
            : setTimeout(function () {
                return e.fire()
              }, t)
        },
        se = function (e) {
          if (!!ee.l(e.getState())) {
            var t = e.dispatch(
                Object(j.createLocalApiErrorHandlerWithContextFactory)('BADGE_TIMERS')(
                  l()({ showToast: !1 }, te.a.AccessDeniedByBouncer, { customAction: oe.a }),
                ),
              ),
              n = function (n) {
                return e.dispatch(n).catch(t)
              },
              r = new ie.b(3e4).interval(function () {
                'background' !== ne.a.currentState && (n(Object(ce.c)()), Object(re.b)(e.getState()).forEach(n))
              })
            r.start(), ae(r)
            ne.a.addEventListener('change', function (e) {
              'active' === e && ae(r)
            })
          }
        },
        ue = (n('3voH'), n('+Aie')),
        le = n.n(ue)
      var fe = n('Chb3'),
        pe = (n('7xRU'), n('Cm4o'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('DZ+c'), n('Hde2')),
        de = n('P1r1'),
        he = Object(z.a)()
          .propsFromState(function () {
            return { dtabBarInfo: de.n }
          })
          .adjustStateProps(function (e) {
            var t = e.dtabBarInfo
            return { dtabAll: t && t.dtabAll, dtabRweb: t && t.dtabRweb, hide: t && t.hide, ttsToken: t && t.ttsToken }
          })
          .propsFromActions(function () {
            return { setDtabBarInfo: de.H }
          }),
        me = n('8jkQ'),
        ve = n('/yvb'),
        be = n('mw9i'),
        ye = n('t62R'),
        ge = n('rHpw')
      function _e(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = F()(e)
          if (t) {
            var o = F()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return N()(this, n)
        }
      }
      var we = (function (e) {
        B()(n, e)
        var t = _e(n)
        function n(e, r) {
          var o
          return (
            s()(this, n),
            (o = t.call(this, e, r)),
            l()(D()(o), '_renderButtons', function () {
              return H.createElement(
                H.Fragment,
                null,
                H.createElement(ve.a, { onClick: o._handleInfo, size: 'xSmall', type: 'destructiveFilled' }, 'Info'),
                H.createElement(ve.a, { onClick: o._handleClear, size: 'xSmall', type: 'destructiveFilled' }, 'Clear'),
                H.createElement(ve.a, { onClick: o._handleClose, size: 'xSmall', type: 'destructiveFilled' }, 'Hide'),
              )
            }),
            l()(D()(o), '_handleInfo', function () {
              var e = o._getOverrides()
              window.prompt(e.join('\n'), window.encodeURIComponent(e.join(';')))
            }),
            l()(D()(o), '_getOverrides', function () {
              var e = o.props,
                t = e.dtabAll,
                n = e.ttsToken,
                r = []
              return (
                t && !n ? (r = t) : n && (r = ['tts_token='.concat(n)]),
                r.filter(function (e) {
                  return !!e
                })
              )
            }),
            l()(D()(o), '_handleClear', function () {
              var e = o._getOverrides().join('\n'),
                t = 'OK to clear overrides?\n'.concat(e)
              if (window.confirm(t)) {
                var n = new URL(me.b.get())
                n.searchParams.set('dtab_local', ''), n.searchParams.set('tts_token', ''), me.b.navigateTo(n.toString())
              }
            }),
            l()(D()(o), '_handleClose', function () {
              var e = o.props,
                t = e.dtabAll,
                n = e.dtabRweb,
                r = e.setDtabBarInfo,
                i = e.ttsToken
              o.setState({ show: !1 }), r({ dtabAll: t, dtabRweb: n, ttsToken: i, hide: !0 })
            }),
            l()(D()(o), '_shouldShow', function () {
              var e = o.props,
                t = e.dtabAll,
                n = e.hide,
                r = e.ttsToken
              return !(n || (!t && !r))
            }),
            (o.state = { show: o._shouldShow() }),
            o
          )
        }
        return (
          R()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.dtabAll,
                  n =
                    e.ttsToken || t
                      ? H.createElement(
                          pe.a,
                          { style: Se.root },
                          H.createElement(
                            be.a,
                            { isLarge: !0, style: Se.container, withGutter: !0 },
                            H.createElement(
                              ye.b,
                              { color: 'whiteOnColor', numberOfLines: 1, size: 'subtext2', style: Se.text },
                              'Staging override is active',
                            ),
                            this._renderButtons(),
                          ),
                        )
                      : null
                return this.state.show ? n : null
              },
            },
          ]),
          n
        )
      })(H.PureComponent)
      l()(we, 'defaultProps', { hide: !1 })
      var Se = ge.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.red500 },
            container: {
              alignItems: 'center',
              flexDirection: 'row',
              height: e.spaces.space40,
              justifyContent: 'space-between',
            },
            text: { width: '100%' },
          }
        }),
        ke = he(we),
        Ee = n('OrGc'),
        Oe = n('rRIm'),
        Te = n('aITJ'),
        Pe = {
          init: function (e) {
            Te.b.isDesktopOS() &&
              Te.b.isIE() &&
              ne.a.addEventListener('change', function (t) {
                if ('active' === t && e && e.body) {
                  var n = e.body.style.display
                  ;(e.body.style.display = 'none'), e.body.clientHeight, (e.body.style.display = n)
                }
              })
          },
        },
        Ce = (n('JtPf'), n('6/RC')),
        je = n('M6MT'),
        Ae = n('a/ea'),
        Ie = function (e) {
          return Object(de.p)(e.getState())
            ? (function (e) {
                var t, n, r
                return null !== (t = navigator) && void 0 !== t && t.permissions
                  ? null === (n = navigator) || void 0 === n || null === (r = n.permissions) || void 0 === r
                    ? void 0
                    : r.query({ name: 'geolocation' }).then(function (t) {
                        return (
                          e.dispatch(Object(Ae.e)(t.state)),
                          (t.onchange = function () {
                            e.dispatch(Object(Ae.e)(this.state))
                          }),
                          Promise.resolve(t.state)
                        )
                      })
                  : Promise.resolve()
              })(e).then(function (t) {
                t === je.b.granted && e.dispatch(Object(Ae.a)())
              })
            : Promise.resolve()
        },
        Re = (n('z84I'), n('pXBW')),
        xe = n('nS6Z')
      function De(e) {
        return e.json().then(function (e) {
          return e.errors.some(function (e) {
            return 392 === e.code
          })
        })
      }
      function Le(e) {
        var t = e.condition,
          n = e.promiseFactory,
          r = e.sideEffect
        return function () {
          var e = n.apply(void 0, arguments)
          return e
            .then(t)
            .then(function (e) {
              e && r()
            })
            .then(
              function () {
                return e
              },
              function () {
                return e
              },
            )
        }
      }
      var Be = n('T0aG'),
        Me = n.n(Be)
      n('M+/F'), n('KOtZ')
      function Ne(e) {
        return Object.keys(Ue(e))
      }
      function Ue(e) {
        return e.reduce(function (e, t) {
          return (e[t] = !0), e
        }, {})
      }
      var Fe = (function () {
        function e(t) {
          var n = this,
            r = t.callback,
            o = t.makeEventSource,
            i = t.topics
          s()(this, e),
            l()(this, 'topics', []),
            l()(this, 'backoffDuration', 0),
            l()(this, '_handleMessage', function (e) {
              var t = e.data
              try {
                var r = JSON.parse(t)
                n.connection && '/system/config' === r.topic && (n.connection.hasConfig = !0), n.callback(r)
              } catch (o) {}
            }),
            l()(this, '_handleError', function () {
              if (n.connection && n.connection.eventSource.readyState !== n.connection.eventSource.OPEN) {
                var e,
                  t,
                  r,
                  o,
                  i,
                  c = n.connection
                if (
                  !c ||
                  c.eventSource.readyState !== c.eventSource.CONNECTING ||
                  ((e = c.topics),
                  (t = n._getTopicsForAutoSubscribe()),
                  (r = Ue(e)),
                  (o = Object.keys(r)),
                  (i = Ne(t)),
                  o.length !== i.length ||
                    !i.every(function (e) {
                      return r[e]
                    }))
                )
                  n._cleanup(),
                    n.connection && n.connection.hasConfig
                      ? (n.backoffDuration = 1e3)
                      : (n.backoffDuration = Math.max(1e3, Math.min(2 * n.backoffDuration, 6e4))),
                    (n.backoffTimeoutId = setTimeout(n._connect, n.backoffDuration * (0.5 + Math.random())))
              }
            }),
            l()(this, '_connect', function () {
              n._cleanup()
              var e = n._getTopicsForAutoSubscribe()
              n.makeEventSource(e)
                .then(function (t) {
                  if ('object' !== Me()(t)) throw new Error('EventSource must be defined')
                  t.addEventListener('message', n._handleMessage),
                    t.addEventListener('error', n._handleError),
                    (n.connection = { eventSource: t, topics: e, hasConfig: !1 })
                })
                .catch(function () {
                  n._handleError()
                })
            }),
            (this.makeEventSource = o),
            (this.callback = r),
            this.setTopics(i),
            this._connect()
        }
        return (
          R()(e, [
            {
              key: 'setTopics',
              value: function (e) {
                this.topics = e
              },
            },
            {
              key: 'getAutoSubscribedTopics',
              value: function () {
                return this.connection ? this.connection.topics : []
              },
            },
            {
              key: '_getTopicsForAutoSubscribe',
              value: function () {
                return this.topics.slice(0, e.MAX_AUTO_SUBSCRIBE_TOPICS)
              },
            },
            {
              key: '_cleanup',
              value: function () {
                var e = this.connection
                e &&
                  (e.eventSource.removeEventListener('message', this._handleMessage),
                  e.eventSource.removeEventListener('error', this._handleError),
                  e.eventSource.close(),
                  (this.connection = null)),
                  clearTimeout(this.backoffTimeoutId)
              },
            },
            {
              key: 'teardown',
              value: function () {
                this._cleanup()
              },
            },
          ]),
          e
        )
      })()
      l()(Fe, 'MAX_AUTO_SUBSCRIBE_TOPICS', 20)
      var He = n('+d3d'),
        Ke = (function () {
          function e(t) {
            var n = this
            s()(this, e),
              l()(this, 'sessionId', ''),
              l()(this, 'pendingState', { topics: [], forceSubscribeAll: !1 }),
              l()(this, 'appliedState', { topics: [] }),
              l()(this, 'setTopics', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                ;(n.pendingState.topics = Ne(e)), n._applyPendingState()
              }),
              l()(this, '_subscribeAll', function () {
                ;(n.pendingState.forceSubscribeAll = !0), n._applyPendingState()
              }),
              l()(this, '_applyPendingState', function () {
                var e = n.pendingState.forceSubscribeAll
                    ? n.pendingState.topics
                    : n.pendingState.topics.filter(function (e) {
                        return -1 === n.appliedState.topics.indexOf(e)
                      }),
                  t = n.appliedState.topics.filter(function (e) {
                    return -1 === n.pendingState.topics.indexOf(e)
                  }),
                  r = !n.sessionId,
                  o = 0 === e.length && 0 === t.length
                r ||
                  o ||
                  ((n.appliedState = { topics: n.pendingState.topics }),
                  (n.pendingState = { topics: n.appliedState.topics, forceSubscribeAll: !1 }),
                  n.updateSubscriptions({ toSubscribe: e, toUnsubscribe: t, sessionId: n.sessionId }))
              })
            var r = t.updateSubscriptions,
              o = t.throttlePeriod,
              i = void 0 === o ? e.UPDATE_SUBSCRIPTIONS_THROTTLE : o
            ;(this.updateSubscriptions = r),
              (this.throttlePeriod = i),
              null !== i &&
                i >= 0 &&
                (this._applyPendingState = Object(He.a)(this._applyPendingState, i, { leading: !1 }))
          }
          return (
            R()(e, [
              {
                key: 'setConfig',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  if ((clearInterval(this.intervalId), t && t.config)) {
                    ;(this.sessionId = t.config.session_id),
                      (this.appliedState = { topics: n }),
                      this._applyPendingState()
                    var r = (t.config.subscription_ttl_millis || e.DEFAULT_TTL) - e.TIMEOUT_PREEMPT_DURATION
                    this.intervalId = setInterval(this._subscribeAll, r)
                  }
                },
              },
              {
                key: 'teardown',
                value: function () {
                  clearInterval(this.intervalId),
                    this.updateSubscriptions({
                      toSubscribe: [],
                      toUnsubscribe: this.appliedState.topics,
                      sessionId: this.sessionId,
                    })
                },
              },
            ]),
            e
          )
        })()
      l()(Ke, 'DEFAULT_TTL', 12e4),
        l()(Ke, 'TIMEOUT_PREEMPT_DURATION', 2e4),
        l()(Ke, 'UPDATE_SUBSCRIPTIONS_THROTTLE', 1e3)
      var ze,
        We = (function () {
          function e(t) {
            var n = this,
              r = t.makeEventSource,
              o = t.updateSubscriptions
            s()(this, e),
              l()(this, 'isSuspended', !1),
              l()(this, 'eventSourceConnector', null),
              l()(this, 'subscriptionsByTopic', {}),
              l()(this, '_closeEventSource', function () {
                n._clearExpiryTimeout(),
                  n.livePipelineResubscriber.setConfig(null),
                  n.eventSourceConnector && (n.eventSourceConnector.teardown(), (n.eventSourceConnector = null))
              }),
              l()(this, 'restartEventSource', function () {
                n._closeEventSource(), n._reconcileTopics()
              }),
              l()(this, '_handleMessage', function (t) {
                var r = t.payload,
                  o = t.topic
                o === e.SYSTEM_CONFIG_TOPIC &&
                  n.eventSourceConnector &&
                  n.livePipelineResubscriber.setConfig(r, n.eventSourceConnector.getAutoSubscribedTopics())
                var i = Promise.resolve(r)
                return (n.subscriptionsByTopic[o] || []).map(function (e) {
                  return i.then(e.callback)
                })
              }),
              (this.makeEventSource = r),
              (this.livePipelineResubscriber = new Ke({
                updateSubscriptions: Le({ promiseFactory: o, condition: De, sideEffect: this.restartEventSource }),
              }))
          }
          return (
            R()(e, [
              {
                key: 'teardown',
                value: function () {
                  this._clearExpiryTimeout(),
                    (this.subscriptionsByTopic = {}),
                    this.livePipelineResubscriber.teardown(),
                    this.eventSourceConnector &&
                      (this.eventSourceConnector.teardown(), (this.eventSourceConnector = null))
                },
              },
              {
                key: 'suspend',
                value: function () {
                  ;(this.isSuspended = !0), this._reconcileTopics()
                },
              },
              {
                key: 'resume',
                value: function () {
                  ;(this.isSuspended = !1), this._reconcileTopics()
                },
              },
              {
                key: 'subscribeTopic',
                value: function (e, t) {
                  var n = this
                  if (!e) return { teardown: function () {} }
                  var r = { topic: e, callback: t }
                  return (
                    (this.subscriptionsByTopic[e] = this.subscriptionsByTopic[e] || []),
                    this.subscriptionsByTopic[e].push(r),
                    this._reconcileTopics(),
                    {
                      teardown: function () {
                        var t = (n.subscriptionsByTopic[e] || []).filter(function (e) {
                          return e !== r
                        })
                        0 === t.length ? delete n.subscriptionsByTopic[e] : (n.subscriptionsByTopic[e] = t),
                          n._reconcileTopics()
                      },
                    }
                  )
                },
              },
              {
                key: '_reconcileTopics',
                value: function () {
                  var t = this.isSuspended ? [] : Object.keys(this.subscriptionsByTopic),
                    n = t.length > 0
                  n && this._clearExpiryTimeout(),
                    this.livePipelineResubscriber.setTopics(t),
                    this.eventSourceConnector && this.eventSourceConnector.setTopics(t),
                    n && !this.eventSourceConnector
                      ? (this._closeEventSource(),
                        (this.eventSourceConnector = new Fe({
                          makeEventSource: this.makeEventSource,
                          callback: this._handleMessage,
                          topics: t,
                        })))
                      : n ||
                        !this.eventSourceConnector ||
                        this.connectionExpiryTimeoutId ||
                        (this.connectionExpiryTimeoutId = setTimeout(
                          this._closeEventSource,
                          e.UNUSED_CONNECTION_EXPIRY,
                        ))
                },
              },
              {
                key: '_clearExpiryTimeout',
                value: function () {
                  clearTimeout(this.connectionExpiryTimeoutId), (this.connectionExpiryTimeoutId = null)
                },
              },
            ]),
            e
          )
        })()
      l()(We, 'SYSTEM_CONFIG_TOPIC', '/system/config'), l()(We, 'UNUSED_CONNECTION_EXPIRY', 3e4)
      var Ve = {
          isSupported: function (e) {
            return 'EventSource' in window && e.isTrue('livepipeline_client_enabled')
          },
          isSupportedAndReady: function (e) {
            return this.isSupported(e) && !!ze
          },
          create: function (e, t, n) {
            var r = this
            if (!this.isSupported(e)) throw new Error('This browser does not support LivePipeline')
            if (ze) throw new Error('LivePipeline should only be initialized once')
            return (
              (ze = new We({
                makeEventSource: function (e) {
                  var t = (function (e) {
                    var t = e.map(encodeURIComponent).join(','),
                      r = function (e) {
                        return ''.concat(e, '/live_pipeline/events?topic=').concat(t)
                      },
                      o = r(xe.b),
                      i = n.getReplacementHost(new URL(o))
                    return i ? r('https://'.concat(i)) : o
                  })(e)
                  return Promise.resolve(new window.EventSource(t, { withCredentials: !0 }))
                },
                updateSubscriptions: function (e) {
                  return t.LivePipeline.updateSubscriptions(e).catch(function (e) {
                    if (e)
                      if (e instanceof Re.a && Object(te.c)(e, te.a.SessionNotFound)) ze && ze.restartEventSource()
                      else if (!(e instanceof Re.a) && e instanceof Error) return Promise.reject(e)
                    return Promise.resolve()
                  })
                },
              })),
              ne.a.addEventListener('change', function (e) {
                return r._handleAppStateChange(e)
              }),
              ze
            )
          },
          get: function () {
            if (!ze) throw new Error('LivePipeline instance has not been initialized')
            return ze
          },
          destroy: function () {
            ze && ze.teardown(), (ze = void 0)
          },
          _handleAppStateChange: function (e) {
            'active' === e ? this.get().resume() : this.get().suspend()
          },
        },
        Xe = n('pf9B'),
        qe = function (e) {
          var t = Object(j.createLocalApiErrorHandlerWithContextFactory)('MULTI_ACCOUNT_LIST_UPDATER'),
            n = e.dispatch(t(l()({ showToast: !1 }, te.a.AccessDeniedByBouncer, { customAction: oe.a }))),
            r = function (t) {
              return e.dispatch(t).catch(n)
            }
          ;(window.requestIdleCallback || window.requestAnimationFrame)(function () {
            r(Object(re.d)()).then(function () {
              Object(re.b)(e.getState()).forEach(r)
            })
          })
        },
        Ye = n('Sksh'),
        Ge = (n('MvUL'), n('KqXw'), n('Sp5X')),
        Je = ['/login/error', '/i/sms_login', '/i/flow/lite_login', '/i/flow/login', '/i/flow/signup'],
        Ze = function (e, t) {
          var n = !ee.l(t),
            r = ee.g(t),
            o = ee.f(t),
            i = Ge.a.location.pathname
          ;-1 === Je.indexOf(i) &&
            (n && r ? Ge.a.replace('/i/sms_login') : n && o && Ge.a.replace('/i/flow/lite_login'))
        },
        Qe = (n('1t7P'), n('daRM'), n('FtHn'), n('Mx3A')),
        $e = n('qzfk'),
        et = n('YeIG'),
        tt = n('TpKd')
      function nt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nt(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ot = { page: 'external', action: 'referred' },
        it = function (e, t, n, r) {
          var o = function (e) {
              return r.dispatch(Object(j.createLocalApiErrorHandlerWithContextFactory)(e)({}))
            },
            i = Ge.a && Ge.a.location.query,
            c = Qe.b({ query: i, httpReferer: document.referrer || '', requestUrl: window.location.href })
          if (Object(et.a)(c)) return Promise.resolve()
          if (c.referer && !me.b.isExternalUrl(c.referer) && !me.b.isInternalRedirect(c.referer))
            return Promise.resolve()
          c.referer || (c.referer = ''),
            c.referral_details_str || (c.referral_details_str = ''),
            c.referral_type || (c.referral_type = 0)
          var a = Object(tt.a)(t)
          a && (c.external_referer_cookie_value = a)
          var s = c.referral_type === Qe.a.Access,
            u = rt(rt({}, ot), {}, { client: Object($e.a)().clientName })
          a && s && (u.action = 'set_access_referer_cookie')
          var l,
            f,
            p = n.createEventObject(u, 'client_event', c),
            d = n.createPayload([p])
          ;(l = c
            ? e.Ocf.referer({
                landing_url: c.url,
                referral_details: c.referral_details_str || void 0,
                referrer_url: c.referer || void 0,
              }).catch(function () {
                return o('OCF_EXTERNAL_REFERER')
              })
            : Promise.resolve()),
            (f = c
              ? e.Attribution.recordUserEvent({ event: 'open', referring_link_url: c.url }).catch(function () {
                  return o('ATTRIBUTION_EXTERNAL_REFERER')
                })
              : Promise.resolve())
          var h = e.Jot.externalReferer(d)
            .then(function (e) {
              e && Object(tt.c)(t, e[0])
            })
            .catch(function () {
              return o('SCRIBE_EXTERNAL_REFERER')
            })
          return Promise.all([h, l, f])
        },
        ct = n('O6Yq'),
        at = n('muX9'),
        st = n('Ty5D')
      var ut = function () {
          Object(st.h)()
          var e,
            t = (Ce.canUseDOM && (e = window.location.href), e ? Object(ct.a)(e) : null)
          return t ? H.createElement(at.a, null, H.createElement('link', { href: t, rel: 'canonical' })) : null
        },
        lt =
          (n('ho0z'),
          Object(z.a)()
            .propsFromState(function () {
              return { loginReturnPath: ee.q }
            })
            .withAnalytics({ component: 'smartlock_prompt' })),
        ft = n('6oVL'),
        pt = n('SrIh'),
        dt = n('BnI0'),
        ht = n('pQ3Z'),
        mt = n.n(ht),
        vt = n('cnVF'),
        bt = n('MWbm'),
        yt = n('mrHL')
      function gt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gt(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function wt(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = F()(e)
          if (t) {
            var o = F()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return N()(this, n)
        }
      }
      var St = ['/settings', '/signup', '/login/error', '/i/flow/signup', '/login/check'],
        kt = (function (e) {
          B()(n, e)
          var t = wt(n)
          function n(e, r) {
            var o
            return (
              s()(this, n),
              ((o = t.call(this, e, r)).state = { autoSubmit: !1, password: '', smartLockDisabled: !1, userName: '' }),
              (o._smartLockSupported =
                !!(window.PasswordCredential && navigator.credentials && navigator.credentials.get) &&
                !r.loggedInUserId),
              (o._isSmartLockDisabledFromCookie =
                '1' === e.getCookie({ featureSwitches: r.featureSwitches, cookieName: vt.y })),
              o
            )
          }
          return (
            R()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  '/login/error' === this.props.location.pathname
                    ? Object(dt.a)(this.context.featureSwitches)
                    : this._checkShouldDisplayPrompt()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  mt()(e.location, this.props.location) || this._checkShouldDisplayPrompt()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.loginReturnPath,
                    t = this.state,
                    n = t.autoSubmit,
                    r = t.password,
                    o = t.userName
                  return this._shouldDisplaySmartLockPrompt()
                    ? H.createElement(
                        bt.a,
                        { style: Et.hidden },
                        H.createElement(
                          ft.a,
                          { autoSubmit: n, loginReturnPath: e },
                          H.createElement('input', { name: 'session[username_or_email]', type: 'hidden', value: o }),
                          H.createElement('input', { name: 'session[password]', type: 'hidden', value: r }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_scribeAction',
                value: function (e, t) {
                  this.props.analytics.scribe(_t(_t({}, t), {}, { action: e }))
                },
              },
              {
                key: '_checkShouldDisplayPrompt',
                value: function () {
                  var e = this,
                    t = this.props.location.pathname,
                    n = this.state.smartLockDisabled
                  if (this._shouldDisplaySmartLockPrompt()) {
                    this._scribeAction('impression')
                    var r = (n || this._isSmartLockDisabledFromCookie) && '/login' === t ? 'required' : 'optional',
                      o = !0
                    setTimeout(function () {
                      return (o = !1)
                    }, 250),
                      navigator.credentials.get({ mediation: r, password: !0 }).then(
                        function (t) {
                          if (t) {
                            o
                              ? e._scribeAction('select', { element: 'unmediated' })
                              : e._scribeAction('select', { element: 'mediated' })
                            var n = t.id,
                              r = t.password
                            e.setState({ autoSubmit: !0, userName: n, password: r })
                          } else
                            e._smartLockSupported &&
                              e.setState({ smartLockDisabled: !0 }, function () {
                                return Object(dt.a)(e.context.featureSwitches)
                              }),
                              o
                                ? e._scribeAction('cancel', { element: 'no_credentials' })
                                : e._scribeAction('cancel', { element: 'with_credentials' })
                        },
                        function (e) {
                          e &&
                            'NotSupportedError' !== e.name &&
                            'NotAllowedError' !== e.name &&
                            'InvalidStateError' !== e.name &&
                            Object(pt.a)(e)
                        },
                      )
                  }
                },
              },
              {
                key: '_shouldDisplaySmartLockPrompt',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                    t = this.context.loggedInUserId,
                    n = e.location.pathname,
                    r = this.state.smartLockDisabled,
                    o =
                      '/login' === n ||
                      (!this._isSmartLockDisabledFromCookie &&
                        !r &&
                        !St.some(function (e) {
                          return e === n
                        }) &&
                        !this.context.featureSwitches.isTrue('stateful_login_enabled'))
                  return !t && this._smartLockSupported && o
                },
              },
            ]),
            n
          )
        })(H.Component)
      l()(kt, 'contextType', G.a), l()(kt, 'defaultProps', { getCookie: yt.d })
      var Et = ge.a.create(function (e) {
          return { hidden: { display: 'none' } }
        }),
        Ot = Object(Y.a)(lt(kt)),
        Tt = n('HPNB'),
        Pt = n('+Kfv'),
        Ct = n('1YZw'),
        jt = Object(z.a)()
          .propsFromState(function () {
            return { toast: Ct.d }
          })
          .propsFromActions(function () {
            return { onClose: Ct.c }
          }),
        At = n('ZB2A'),
        It = 'toast',
        Rt = n('cHvH'),
        xt = n('0FVZ'),
        Dt = n('XTym'),
        Lt = jt(function (e) {
          var t = e.onClose,
            n = e.toast,
            r = Object(st.h)(),
            o = Object(At.b)(r)
          return n
            ? H.createElement(Rt.a, null, function (e) {
                var r = e.windowWidth,
                  i = Tt.a.shouldRenderAsModal(r) ? xt.a.ModalToasts : xt.a.Toasts
                return H.createElement(
                  Pt.a,
                  { viewType: o },
                  H.createElement(Dt.a, {
                    LayerComponent: i,
                    action: n.action,
                    ariaOnly: n.ariaOnly,
                    autoDismissDelay: n.autoDismissDelay,
                    behavioralEventEntityToken: n.behavioralEventEntityToken,
                    key: n.id,
                    onClose: t,
                    testID: It,
                    text: n.text,
                    withAutoDismiss: n.withAutoDismiss,
                    withClearButton: n.withClearButton,
                  }),
                )
              })
            : null
        }),
        Bt = r,
        Mt = fe.a,
        Nt = ke,
        Ut = Oe.a,
        Ft = Ve,
        Ht = Xe.a,
        Kt = Ot,
        zt = ut,
        Wt = Lt,
        Vt = c,
        Xt = se,
        qt = function (e, t) {
          var n,
            r = Object.keys(e),
            o = !1,
            i = function () {
              o ||
                ((n = le()(t)),
                r.forEach(function (t) {
                  return n.bind(t, function (n) {
                    var r
                    window.location.pathname.startsWith('/i/flow') ||
                      ((r = e[t]),
                      function (e) {
                        e.preventDefault(), e.stopPropagation(), r(e)
                      })(n)
                  })
                }))
            }
          return (
            E(i, [d, h]),
            function () {
              ;(o = !0), T(i), n && n.unbind(r)
            }
          )
        },
        Yt = Pe,
        Gt = qe,
        Jt = Ze,
        Zt = it,
        Qt = Ee.d,
        $t = A,
        en = Q,
        tn = $.a,
        nn = Ie,
        rn = Ye.a
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return V
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        a = n('1Pcy'),
        s = n.n(a),
        u = n('5Yy7'),
        l = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        h = n.n(d),
        m = n('KEM+'),
        v = n.n(m),
        b = (n('2G9S'), n('LJOr'), n('KqXw'), n('ERkP')),
        y = n('sTyV'),
        g = n('6/RC'),
        _ = n('sebV'),
        w = n('G6rE'),
        S = n('rxPX'),
        k = Object(S.a)()
          .propsFromState(function () {
            return { loggedInUser: w.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        E = n('3XMw'),
        O = n.n(E),
        T = n('OrGc'),
        P = n('QK5w'),
        C = n('aITJ'),
        j = n('MWbm'),
        A = n('TnY3'),
        I = n('rHpw'),
        R = n('t62R'),
        x = n('v6aA'),
        D = n('uScj'),
        L = n('fs1G'),
        B = n('BcsE'),
        M = n('VPAj')
      function N(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function F(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var H = O.a.b47e760d,
        K = O.a.fd2c7b43,
        z = new D.a(),
        W = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        V = function (e) {
          return g.canUseDOM ? z.subscribe(e).unsubscribe : L.a
        },
        X = (function (e) {
          l()(n, e)
          var t = F(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  o = r.history,
                  i = r.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        z.getListeners().length
                          ? z.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  a =
                    ((t = {}),
                    v()(t, T.e.search, c()),
                    v()(t, T.e.goToUser, c('@')),
                    v()(t, T.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    v()(t, T.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    v()(t, T.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      v()(t, T.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      v()(t, T.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      v()(t, T.e.goLists, function () {
                        return o.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    i && u
                      ? U(
                          U({}, s(i)),
                          {},
                          v()({}, T.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : i
                      ? s(i)
                      : {},
                  f = U(
                    U(U({}, a), l),
                    {},
                    ((n = {}),
                    v()(n, T.e.goHome, function () {
                      return o.push('/home')
                    }),
                    v()(n, T.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    v()(n, T.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    v()(n, T.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    v()(n, T.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    v()(n, T.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    v()(n, T.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    v()(n, T.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    v()(n, T.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? f : a
                e._unbindKeyboardShortcuts = Object(y.a)(p)
              }),
              v()(s()(e), '_handleKeyDown', function (t) {
                W(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              v()(s()(e), '_handleKeyUp', function (t) {
                if (!W(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(B.a)(n) && Date.now() - n < 500,
                    o = Object(P.a)({}, { location: e.props.location })
                  r && o ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    C.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    C.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? b.createElement(
                        j.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: I.a.visuallyHidden },
                        b.createElement(R.b, null, H),
                        b.createElement(R.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, K),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      v()(X, 'contextType', x.a)
      var q = k(X),
        Y = g.canUseDOM ? Object(A.a)(q) : Object(M.a)(null)
      t.a = Y
    },
  },
])
//# sourceMappingURL=WIPED
