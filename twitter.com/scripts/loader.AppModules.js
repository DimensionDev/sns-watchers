;(window.webpackJsonp = window.webpackJsonp || []).push([
  [162],
  {
    '+Aie': function (e, t, n) {
      var r
      !(function (o, i, a) {
        if (o) {
          for (
            var c,
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
              c = null
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
                if (!c) for (var e in ((c = {}), s)) (e > 95 && e < 112) || (s.hasOwnProperty(e) && (c[s[e]] = e))
                return c
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
            a = !1,
            c = !1
          function s(e) {
            e = e || {}
            var t,
              n = !1
            for (t in r) e[t] ? (n = !0) : (r[t] = 0)
            n || (c = !1)
          }
          function u(e, n, o, i, a, c) {
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
                var h = !i && u.combo == a,
                  v = i && u.seq == i && u.level == c
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
          function p(e, t, i, a) {
            function u(t) {
              return function () {
                ;(c = t), ++r[e], clearTimeout(n), (n = setTimeout(s, 1e3))
              }
            }
            function f(t) {
              l(i, t, e), 'keyup' !== a && (o = h(t)), setTimeout(s, 10)
            }
            r[e] = 0
            for (var p = 0; p < t.length; ++p) {
              var d = p + 1 === t.length ? f : u(a || b(t[p + 1]).action)
              v(t[p], d, a, e, p)
            }
          }
          function v(e, n, r, o, i) {
            t._directMap[e + ':' + r] = n
            var a,
              c = (e = e.replace(/\s+/g, ' ')).split(' ')
            c.length > 1
              ? p(e, c, n, r)
              : ((a = b(e, r)),
                (t._callbacks[a.key] = t._callbacks[a.key] || []),
                u(a.key, a.modifiers, { type: a.action }, o, e, i),
                t._callbacks[a.key][o ? 'unshift' : 'push']({
                  callback: n,
                  modifiers: a.modifiers,
                  action: a.action,
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
            var d = 'keypress' == n.type && a
            n.type != c || m(e) || d || s(i), (a = p && 'keydown' == n.type)
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
        a = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
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
        _ = n.n(g),
        w = n('3XMw'),
        S = n.n(w),
        k = n('cnVF'),
        E = n('Ukpf'),
        O = n('BTou'),
        T = n('mrHL'),
        P = 'LoginForm_Login_Button',
        C = n('fEA7'),
        j = n.n(C),
        A = n('MWbm'),
        I = n('Irs7'),
        R = n('v6aA'),
        x = n('/yvb'),
        D = n('rHpw')
      function L(e) {
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
      var B = S.a.e919c3bc,
        M = (function (e) {
          p()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(l()(e), '_mobileLoginToken', j.a.v1().replace(/-/g, '')),
              y()(l()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), O.a.flushHTMLCache(), e._setLoginCookie(), r))
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
                  Object(T.e)(k.q, e._mobileLoginToken, {
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
                  E.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
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
                    a = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    u = e.submitButtonSize,
                    l = e.submitButtonStyle,
                    f = e.submitButtonType,
                    p = 'string' == typeof a ? a.split('?') : [],
                    d = o()(p, 2),
                    h = d[0],
                    m = d[1],
                    v = encodeURI(h || '/'),
                    b = m ? '?'.concat(m) : '',
                    y = ''.concat('').concat(v).concat(b),
                    g = _.a.createElement(
                      A.a,
                      { style: i && N.horizontalFields },
                      _.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: y }),
                      _.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      _.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      _.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      _.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : _.a.createElement(
                            A.a,
                            { style: i && N.loginButtonContainer },
                            _.a.createElement(
                              x.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: u,
                                style: l,
                                testID: P,
                                type: f,
                              },
                              s,
                            ),
                          ),
                    )
                  return _.a.createElement(
                    A.a,
                    { style: N.loginForm },
                    _.a.createElement('form', {
                      action: n,
                      children: g,
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
        })(_.a.Component)
      y()(M, 'contextType', R.a),
        y()(M, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: B,
          submitButtonType: 'brandFilled',
        })
      var N = D.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(I.a)(M, { element: 'inline_login_form' })
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'c', function () {
          return c
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
        a = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function c(e) {
        var t = Object(o.a)(e)
        return t
          ? l(t)
            ? f(t)
              ? t[1]
                ? a.AcceptAllCookies
                : t[2]
                ? a.RefuseNonEssentialCookies
                : (Object(r.a)('Invalid consent signal state'), a.Invalid)
              : a.NotSet
            : a.Invalid
          : a.NotSet
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
        a = n.n(i),
        c = n('Hde2'),
        s = n('H1k/'),
        u = n('Ty5D'),
        l = n('496R')
      function f(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(u.h)(),
          t = a.a.useState(function () {
            return f(e.pathname)
          }),
          n = o()(t, 2),
          r = n[0],
          i = n[1]
        return (
          a.a.useEffect(
            function () {
              i(f(e.pathname))
            },
            [i, e],
          ),
          r
        )
      }
      t.a = Object(l.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = p()
        return !e.hideCookieBannerPicker && t ? a.a.createElement(c.a, null, a.a.createElement(s.a, null)) : null
      })
    },
    'H1k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ie
      })
      var r = n('ERkP'),
        o = n.n(r),
        i = n('v6aA'),
        a = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        c = n.n(a),
        s = n('ddV6'),
        u = n.n(s),
        l = n('AS3p'),
        f = n('KUGV'),
        p = n('Irs7'),
        d = n('MWbm'),
        h = n('t62R'),
        m = n('cHvH'),
        v = n('rHpw'),
        b = n('/yvb'),
        y = n('3XMw'),
        g = n.n(y)
      function _(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = g.a.d8817e36,
        k = g.a.b9288ee6,
        E = g.a.i1390ec2,
        O = { page: 'cookie_compliance_banner' }
      function T() {
        var e = o.a.createElement(
          g.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          o.a.createElement(
            h.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            g.a.id7ef73f,
          ),
        )
        return o.a.createElement(C, { body: e, title: E })
      }
      function P(e) {
        var t = o.a.createElement(
          g.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          o.a.createElement(
            h.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            g.a.gfb2ba0f,
          ),
        )
        return o.a.createElement(C, { body: t, title: E })
      }
      function C(e) {
        return o.a.createElement(
          d.a,
          { style: A.cookieComplianceMessageWrap },
          o.a.createElement(h.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          o.a.createElement(
            h.b,
            { color: 'buttonWhite', size: 'subtext2', style: A.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var j = o.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          o.a.useEffect(
            function () {
              n.scribe(w(w({}, O), {}, { action: 'impression' }))
            },
            [n],
          )
          var r = (function () {
              var e = o.a.useState(!1),
                t = u()(e, 2),
                n = t[0],
                r = t[1],
                i = Object(p.b)()
              return {
                isExpanded: n,
                expand: function () {
                  i.scribe(w(w({}, O), {}, { action: 'click', element: 'expand_message' })), r(!0)
                },
              }
            })(),
            a = r.expand,
            c = r.isExpanded,
            s = (function () {
              var e = Object(p.b)(),
                t = o.a.useContext(i.a).featureSwitches,
                n = o.a.useState(function () {
                  return l.e(t) && !Object(f.a)()
                }),
                r = u()(n, 2),
                a = r[0],
                c = r[1]
              return {
                isBannerOpen: a,
                acceptAllCookies: function () {
                  e.scribe(w(w({}, O), {}, { action: 'click', element: 'accept_all' })), l.b(t), c(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(w(w({}, O), {}, { action: 'click', element: 'refuse_non_essential' })), l.d(t), c(!1)
                },
              }
            })(),
            h = s.acceptAllCookies,
            y = s.isBannerOpen,
            g = s.refuseNonEssentialCookies
          return y
            ? o.a.createElement(m.a, null, function (e) {
                var n = e.windowWidth < v.a.theme.breakpoints.xLarge
                return o.a.createElement(
                  d.a,
                  { ref: t, style: [A.root, n && A.rootNarrow] },
                  c ? o.a.createElement(T, null) : o.a.createElement(P, { onExpand: a }),
                  o.a.createElement(
                    d.a,
                    { style: [A.buttonContainer, n && A.buttonContainerNarrow] },
                    o.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: h,
                        size: 'medium',
                        style: [A.ctaButton, n && A.ctaButtonNarrow],
                        type: v.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      S,
                    ),
                    o.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: g,
                        size: 'medium',
                        style: [A.ctaButton, n && A.ctaButtonNarrow],
                        type: v.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      k,
                    ),
                  ),
                )
              })
            : null
        }),
        A = v.a.create(function (e) {
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
        I = (n('OZaJ'), n('97Jx')),
        R = n.n(I),
        x = n('VrFO'),
        D = n.n(x),
        L = n('Y9Ll'),
        B = n.n(L),
        M = n('1Pcy'),
        N = n.n(M),
        U = n('5Yy7'),
        F = n.n(U),
        H = n('N+ot'),
        K = n.n(H),
        z = n('AuHH'),
        W = n.n(z),
        V = (n('hBvt'), n('RqPI')),
        X = n('rxPX'),
        q = Object(X.a)().propsFromState(function () {
          return { currentCountry: V.y }
        }),
        Y = n('cnVF'),
        G = n('mrHL'),
        J =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          })
      function Z(e) {
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
            r = W()(e)
          if (t) {
            var o = W()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return K()(this, n)
        }
      }
      var Q = g.a.ia5e7487,
        $ = (function (e) {
          F()(n, e)
          var t = Z(n)
          function n(e, r) {
            var i
            D()(this, n),
              (i = t.call(this, e, r)),
              c()(N()(i), 'state', { euWarningIsOpen: !1 }),
              c()(N()(i), '_renderMessage', function () {
                return o.a.createElement(
                  h.b,
                  { color: 'white', size: 'subtext2' },
                  o.a.createElement(
                    g.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    o.a.createElement(
                      h.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: ee.link,
                      },
                      g.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              c()(N()(i), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(G.e)(Y.k, '1', { featureSwitches: e })
                })(i.context.featureSwitches),
                  i.setState({ euWarningIsOpen: !1 })
              })
            var a = i.props.currentCountry,
              s = i.context.featureSwitches,
              u = s.getArrayValue('responsive_web_eu_countries', []),
              l = Object(G.d)({ featureSwitches: s, cookieName: Y.k })
            return (i.state = { euWarningIsOpen: !!a && J(u, a, l) }), i
          }
          return (
            B()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? o.a.createElement(m.a, null, function (t) {
                        var n = t.windowWidth < v.a.theme.breakpoints.medium
                        return o.a.createElement(
                          d.a,
                          { ref: e.props.innerRef, style: [ee.root, n && ee.rootNarrow] },
                          e._renderMessage(),
                          o.a.createElement(
                            b.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [ee.closeButton, n && ee.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            Q,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(o.a.Component)
      c()($, 'contextType', i.a)
      var ee = v.a.create(function (e) {
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
        te = o.a.forwardRef(function (e, t) {
          return o.a.createElement($, R()({}, e, { innerRef: t }))
        }),
        ne = q.forwardRef(te),
        re = n('+d3d')
      function oe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = o.a.useMemo(
            function () {
              return Object(re.a)(function (t) {
                if (e)
                  if (t) {
                    var n = t.getBoundingClientRect()
                    n && e(n)
                  } else e(null)
              }, t)
            },
            [e, t],
          )
        return o.a.useCallback(
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
      function ie(e) {
        var t,
          n = o.a.useContext(i.a).featureSwitches,
          r =
            ((t = e.onHeightChange),
            oe(
              o.a.useMemo(
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
          ? o.a.createElement(j, { ref: r })
          : o.a.createElement(ne, { ref: r })
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
        a = n.n(i),
        c =
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
        s = n.n(c),
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
          var a
          return (
            o()(this, n),
            ((a = t.call(
              this,
              ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(r, ' message: ').concat(i),
            )).url = e),
            (a.status = r),
            a
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
            a()(e, [
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
                  return Object(k.m)(e)
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
                    a = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(a), headers: o, params: r, data: i })
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
            a()(e, [
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
          return a
        }),
        n.d(t, 'b', function () {
          return c
        })
      n('2G9S'), n('Ysgh'), n('KqXw')
      var r = n('mrHL'),
        o = 'external_referer'
      function i(e) {
        return Object(r.d)({ cookieName: o, featureSwitches: e })
      }
      function a(e, t) {
        var n = (t && t.encryptedReferralDetails) || '',
          i = (t && t.encryptedReferer) || '',
          a = t && void 0 !== t.referralType ? ''.concat(t.referralType) : ''
        if (n || i || a) {
          var c = ''.concat(encodeURIComponent(i), '|').concat(a, '|').concat(encodeURIComponent(n))
          Object(r.e)(o, c, {
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
      var c = function (e) {
        var t = i(e)
        if (t && t.split('|').length > 1) {
          var n = t.split('|')
          return { encryptedReferer: n[0], referralType: n[1], encryptedReferralDetails: n[2] }
        }
      }
    },
    XTym: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        o = n.n(r),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
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
        w = n.n(_),
        S = n('t62R'),
        k = n('/yvb'),
        E = n('mw9i'),
        O = n('hOZg'),
        T = n('Oe3h'),
        P = n('0FVZ'),
        C = n('cHvH'),
        j = n('rHpw'),
        A = n('3XMw'),
        I = n.n(A),
        R = n('+/1j'),
        x = n('MWbm')
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
      var L = I.a.af8fa2ad,
        B = w.a.createElement(O.a, null),
        M = 'toast',
        N = (function (e) {
          p()(n, e)
          var t = D(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(l()(e), '_renderAriaOnly', function () {
                var t = e.props,
                  n = t.testID,
                  r = t.text
                return w.a.createElement(
                  x.a,
                  { accessibilityRole: 'alert', style: j.a.visuallyHidden, testID: n },
                  w.a.createElement(R.a, null, r),
                )
              }),
              y()(l()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.action,
                  r = t.text,
                  o = t.withAutoDismiss,
                  i = t.withClearButton
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  w.a.createElement(S.b, { color: 'whiteOnColor', style: U.titleText }, r),
                  w.a.createElement(
                    x.a,
                    { accessibilityHidden: o, style: U.actionButtons },
                    n && e._renderActionLabel(n),
                    i &&
                      w.a.createElement(k.a, {
                        accessibilityLabel: L,
                        borderColor: 'transparent',
                        color: 'white',
                        icon: B,
                        onPress: e._handleClose,
                        style: U.closeButton,
                      }),
                  ),
                )
              }),
              y()(l()(e), '_renderContentWithLayer', function (t) {
                var n = t.windowWidth,
                  r = e.props,
                  i = r.LayerComponent,
                  a = r.behavioralEventEntityToken,
                  c = r.testID,
                  s = a ? { type: 'toast', entityToken: a } : void 0
                return w.a.createElement(
                  i,
                  null,
                  w.a.createElement(
                    E.a,
                    null,
                    w.a.createElement(T.a, { id: 'Toast' }, function (t, r) {
                      return w.a.createElement(
                        g.b,
                        { viewState: s, viewType: M },
                        w.a.createElement(
                          x.a,
                          o()(
                            { ref: t() },
                            r({
                              accessibilityRole: 'alert',
                              style: [U.root, n > j.a.theme.breakpoints.medium && U.rootWide],
                              testID: c,
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
                  a = o ? { type: 'toast', entityToken: o } : void 0
                return w.a.createElement(
                  E.a,
                  null,
                  w.a.createElement(
                    g.b,
                    { viewState: a, viewType: M },
                    w.a.createElement(
                      x.a,
                      {
                        accessibilityRole: 'alert',
                        style: [U.root, n > j.a.theme.breakpoints.medium && U.rootWide],
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
                  a = t.text
                if (t.withAutoDismiss) {
                  var c = o || n.calculateDismissDelay(a, !!r)
                  e._timerId = setTimeout(i, c)
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
                      : w.a.createElement(C.a, null, n ? this._renderContentWithoutLayer : this._renderContentWithLayer)
                  },
                },
                {
                  key: '_renderActionLabel',
                  value: function (e) {
                    var t = e.behavioralEventViewType,
                      n = e.label,
                      r = e.link,
                      o = t || 'action'
                    return w.a.createElement(
                      g.a,
                      { viewType: o },
                      w.a.createElement(S.b, {
                        children: n,
                        color: 'whiteOnColor',
                        link: r,
                        onClick: this._handleActionPress,
                        style: [U.actionText, !r && U.actionMargin],
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
        })(w.a.Component)
      y()(N, 'defaultProps', { withAutoDismiss: !0, withClearButton: !1, LayerComponent: P.a.ModalToasts })
      var U = j.a.create(function (e) {
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
      t.a = N
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
        a = n('Ssj5')
      function c(e, t) {
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
            ? c(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
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
      a.a.register(
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
          return Mt
        }),
        n.d(t, 'BottomCookieBannerPicker', function () {
          return Nt
        }),
        n.d(t, 'DtabBar', function () {
          return Ut
        }),
        n.d(t, 'GlobalKeyboardShortcuts', function () {
          return Ft
        }),
        n.d(t, 'LivePipeline', function () {
          return Ht
        }),
        n.d(t, 'ModalSheet', function () {
          return Kt
        }),
        n.d(t, 'SmartLockPrompt', function () {
          return zt
        }),
        n.d(t, 'Seo', function () {
          return Wt
        }),
        n.d(t, 'Toast', function () {
          return Vt
        }),
        n.d(t, 'appReloader', function () {
          return Xt
        }),
        n.d(t, 'badgeTimers', function () {
          return qt
        }),
        n.d(t, 'bindKeyboardShortcuts', function () {
          return Yt
        }),
        n.d(t, 'ie11Reflower', function () {
          return Gt
        }),
        n.d(t, 'multiAccountListFetcher', function () {
          return Jt
        }),
        n.d(t, 'redirectEmailUser', function () {
          return Zt
        }),
        n.d(t, 'scribeExternalReferer', function () {
          return Qt
        }),
        n.d(t, 'getScreenReaderShortcutsDataAttribute', function () {
          return $t
        }),
        n.d(t, 'altSvc', function () {
          return en
        }),
        n.d(t, 'AppInstallOnLandingPrompt', function () {
          return tn
        }),
        n.d(t, 'AudioModule', function () {
          return nn
        }),
        n.d(t, 'initGeoLocation', function () {
          return rn
        }),
        n.d(t, 'userPresence', function () {
          return on
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
        a = n('3+LL'),
        c = n('VrFO'),
        s = n.n(c),
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
                a = e.target
              ;(!(r || o || i) && ((t = a) instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) ||
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
        K = n.n(H),
        z = n('sebV'),
        W = (n('jQ3i'), n('x4t0'), n('rxPX')),
        V = function (e, t) {
          return t.location.pathname.includes('/intent/')
        },
        X = function (e, t) {
          return t.location.pathname.includes('/login')
        },
        q = Object(W.a)()
          .propsFromState(function () {
            return { isIntentRoute: V, isLoginRoute: X }
          })
          .adjustStateProps(function (e) {
            var t = e.isIntentRoute,
              n = e.isLoginRoute
            return { hideAppPrompt: t || n }
          }),
        Y = n('RxYA'),
        G = n('TnY3'),
        J = n('v6aA')
      function Z(e) {
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
      var Q = (function (e) {
        B()(n, e)
        var t = Z(n)
        function n() {
          var e
          s()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            l()(D()(e), '_isStandaloneApp', z.a.isStandaloneApp()),
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
                  ? K.a.createElement(Y.a, { onClose: this._handleClose, onlyShowOnce: !0, useBottomBanner: !0 })
                  : null
              },
            },
          ]),
          n
        )
      })(K.a.Component)
      l()(Q, 'contextType', J.a)
      var $ = Object(G.a)(q(Q)),
        ee = n('Pc/x'),
        te = n('RqPI'),
        ne = n('k49u'),
        re = n('2g+p'),
        oe = n('auX9'),
        ie = n('fs1G'),
        ae = n('B5iK'),
        ce = n('l0YN'),
        se = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
          window.requestIdleCallback
            ? window.requestIdleCallback(function () {
                return e.fire()
              })
            : setTimeout(function () {
                return e.fire()
              }, t)
        },
        ue = function (e) {
          if (!!te.m(e.getState())) {
            var t = e.dispatch(
                Object(j.createLocalApiErrorHandlerWithContextFactory)('BADGE_TIMERS')(
                  l()({ showToast: !1 }, ne.a.AccessDeniedByBouncer, { customAction: ie.a }),
                ),
              ),
              n = function (n) {
                return e.dispatch(n).catch(t)
              },
              r = new ae.b(3e4).interval(function () {
                'background' !== re.a.currentState && (n(Object(ce.c)()), Object(oe.b)(e.getState()).forEach(n))
              })
            r.start(), se(r)
            re.a.addEventListener('change', function (e) {
              'active' === e && se(r)
            })
          }
        },
        le = (n('3voH'), n('+Aie')),
        fe = n.n(le)
      var pe = n('Chb3'),
        de = (n('7xRU'), n('Cm4o'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('DZ+c'), n('Hde2')),
        he = n('P1r1'),
        me = Object(W.a)()
          .propsFromState(function () {
            return { dtabBarInfo: he.n }
          })
          .adjustStateProps(function (e) {
            var t = e.dtabBarInfo
            return { dtabAll: t && t.dtabAll, dtabRweb: t && t.dtabRweb, hide: t && t.hide, ttsToken: t && t.ttsToken }
          })
          .propsFromActions(function () {
            return { setDtabBarInfo: he.H }
          }),
        ve = n('8jkQ'),
        be = n('/yvb'),
        ye = n('mw9i'),
        ge = n('t62R'),
        _e = n('rHpw')
      function we(e) {
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
      var Se = (function (e) {
        B()(n, e)
        var t = we(n)
        function n(e, r) {
          var o
          return (
            s()(this, n),
            (o = t.call(this, e, r)),
            l()(D()(o), '_renderButtons', function () {
              return K.a.createElement(
                K.a.Fragment,
                null,
                K.a.createElement(be.a, { onClick: o._handleInfo, size: 'xSmall', type: 'destructiveFilled' }, 'Info'),
                K.a.createElement(
                  be.a,
                  { onClick: o._handleClear, size: 'xSmall', type: 'destructiveFilled' },
                  'Clear',
                ),
                K.a.createElement(be.a, { onClick: o._handleClose, size: 'xSmall', type: 'destructiveFilled' }, 'Hide'),
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
                var n = new URL(ve.b.get())
                n.searchParams.set('dtab_local', ''), n.searchParams.set('tts_token', ''), ve.b.navigateTo(n.toString())
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
                      ? K.a.createElement(
                          de.a,
                          { style: ke.root },
                          K.a.createElement(
                            ye.a,
                            { isLarge: !0, style: ke.container, withGutter: !0 },
                            K.a.createElement(
                              ge.b,
                              { color: 'whiteOnColor', numberOfLines: 1, size: 'subtext2', style: ke.text },
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
      })(K.a.PureComponent)
      l()(Se, 'defaultProps', { hide: !1 })
      var ke = _e.a.create(function (e) {
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
        Ee = me(Se),
        Oe = n('OrGc'),
        Te = n('rRIm'),
        Pe = n('aITJ'),
        Ce = {
          init: function (e) {
            Pe.b.isDesktopOS() &&
              Pe.b.isIE() &&
              re.a.addEventListener('change', function (t) {
                if ('active' === t && e && e.body) {
                  var n = e.body.style.display
                  ;(e.body.style.display = 'none'), e.body.clientHeight, (e.body.style.display = n)
                }
              })
          },
        },
        je = (n('JtPf'), n('6/RC')),
        Ae = n('M6MT'),
        Ie = n('a/ea'),
        Re = function (e) {
          return Object(he.p)(e.getState())
            ? (function (e) {
                var t, n, r
                return null !== (t = navigator) && void 0 !== t && t.permissions
                  ? null === (n = navigator) || void 0 === n || null === (r = n.permissions) || void 0 === r
                    ? void 0
                    : r.query({ name: 'geolocation' }).then(function (t) {
                        return (
                          e.dispatch(Object(Ie.e)(t.state)),
                          (t.onchange = function () {
                            e.dispatch(Object(Ie.e)(this.state))
                          }),
                          Promise.resolve(t.state)
                        )
                      })
                  : Promise.resolve()
              })(e).then(function (t) {
                t === Ae.b.granted && e.dispatch(Object(Ie.a)())
              })
            : Promise.resolve()
        },
        xe = (n('z84I'), n('pXBW')),
        De = n('nS6Z')
      function Le(e) {
        return e.json().then(function (e) {
          return e.errors.some(function (e) {
            return 392 === e.code
          })
        })
      }
      function Be(e) {
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
      var Me = n('T0aG'),
        Ne = n.n(Me)
      n('M+/F'), n('KOtZ')
      function Ue(e) {
        return Object.keys(Fe(e))
      }
      function Fe(e) {
        return e.reduce(function (e, t) {
          return (e[t] = !0), e
        }, {})
      }
      var He = (function () {
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
                  a = n.connection
                if (
                  !a ||
                  a.eventSource.readyState !== a.eventSource.CONNECTING ||
                  ((e = a.topics),
                  (t = n._getTopicsForAutoSubscribe()),
                  (r = Fe(e)),
                  (o = Object.keys(r)),
                  (i = Ue(t)),
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
                  if ('object' !== Ne()(t)) throw new Error('EventSource must be defined')
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
      l()(He, 'MAX_AUTO_SUBSCRIBE_TOPICS', 20)
      var Ke = n('+d3d'),
        ze = (function () {
          function e(t) {
            var n = this
            s()(this, e),
              l()(this, 'sessionId', ''),
              l()(this, 'pendingState', { topics: [], forceSubscribeAll: !1 }),
              l()(this, 'appliedState', { topics: [] }),
              l()(this, 'setTopics', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                ;(n.pendingState.topics = Ue(e)), n._applyPendingState()
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
                (this._applyPendingState = Object(Ke.a)(this._applyPendingState, i, { leading: !1 }))
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
      l()(ze, 'DEFAULT_TTL', 12e4),
        l()(ze, 'TIMEOUT_PREEMPT_DURATION', 2e4),
        l()(ze, 'UPDATE_SUBSCRIPTIONS_THROTTLE', 1e3)
      var We,
        Ve = (function () {
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
              (this.livePipelineResubscriber = new ze({
                updateSubscriptions: Be({ promiseFactory: o, condition: Le, sideEffect: this.restartEventSource }),
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
                        (this.eventSourceConnector = new He({
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
      l()(Ve, 'SYSTEM_CONFIG_TOPIC', '/system/config'), l()(Ve, 'UNUSED_CONNECTION_EXPIRY', 3e4)
      var Xe = {
          isSupported: function (e) {
            return 'EventSource' in window && e.isTrue('livepipeline_client_enabled')
          },
          isSupportedAndReady: function (e) {
            return this.isSupported(e) && !!We
          },
          create: function (e, t, n) {
            var r = this
            if (!this.isSupported(e)) throw new Error('This browser does not support LivePipeline')
            if (We) throw new Error('LivePipeline should only be initialized once')
            return (
              (We = new Ve({
                makeEventSource: function (e) {
                  var t = (function (e) {
                    var t = e.map(encodeURIComponent).join(','),
                      r = function (e) {
                        return ''.concat(e, '/live_pipeline/events?topic=').concat(t)
                      },
                      o = r(De.b),
                      i = n.getReplacementHost(new URL(o))
                    return i ? r('https://'.concat(i)) : o
                  })(e)
                  return Promise.resolve(new window.EventSource(t, { withCredentials: !0 }))
                },
                updateSubscriptions: function (e) {
                  return t.LivePipeline.updateSubscriptions(e).catch(function (e) {
                    if (e)
                      if (e instanceof xe.a && Object(ne.c)(e, ne.a.SessionNotFound)) We && We.restartEventSource()
                      else if (!(e instanceof xe.a) && e instanceof Error) return Promise.reject(e)
                    return Promise.resolve()
                  })
                },
              })),
              re.a.addEventListener('change', function (e) {
                return r._handleAppStateChange(e)
              }),
              We
            )
          },
          get: function () {
            if (!We) throw new Error('LivePipeline instance has not been initialized')
            return We
          },
          destroy: function () {
            We && We.teardown(), (We = void 0)
          },
          _handleAppStateChange: function (e) {
            'active' === e ? this.get().resume() : this.get().suspend()
          },
        },
        qe = n('pf9B'),
        Ye = function (e) {
          var t = Object(j.createLocalApiErrorHandlerWithContextFactory)('MULTI_ACCOUNT_LIST_UPDATER'),
            n = e.dispatch(t(l()({ showToast: !1 }, ne.a.AccessDeniedByBouncer, { customAction: ie.a }))),
            r = function (t) {
              return e.dispatch(t).catch(n)
            }
          ;(window.requestIdleCallback || window.requestAnimationFrame)(function () {
            r(Object(oe.d)()).then(function () {
              Object(oe.b)(e.getState()).forEach(r)
            })
          })
        },
        Ge = n('Sksh'),
        Je = (n('MvUL'), n('KqXw'), n('Sp5X')),
        Ze = ['/login/error', '/i/sms_login', '/i/flow/lite_login', '/i/flow/login', '/i/flow/signup'],
        Qe = function (e, t) {
          var n = !te.m(t),
            r = te.h(t),
            o = te.g(t),
            i = Je.a.location.pathname
          ;-1 === Ze.indexOf(i) &&
            (n && r ? Je.a.replace('/i/sms_login') : n && o && Je.a.replace('/i/flow/lite_login'))
        },
        $e = (n('1t7P'), n('daRM'), n('FtHn'), n('Mx3A')),
        et = n('qzfk'),
        tt = n('YeIG'),
        nt = n('TpKd')
      function rt(e, t) {
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
      function ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rt(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var it = { page: 'external', action: 'referred' },
        at = function (e, t, n, r) {
          var o = function (e) {
              return r.dispatch(Object(j.createLocalApiErrorHandlerWithContextFactory)(e)({}))
            },
            i = Je.a && Je.a.location.query,
            a = $e.b({ query: i, httpReferer: document.referrer || '', requestUrl: window.location.href })
          if (Object(tt.a)(a)) return Promise.resolve()
          if (a.referer && !ve.b.isExternalUrl(a.referer) && !ve.b.isInternalRedirect(a.referer))
            return Promise.resolve()
          a.referer || (a.referer = ''),
            a.referral_details_str || (a.referral_details_str = ''),
            a.referral_type || (a.referral_type = 0)
          var c = Object(nt.a)(t)
          c && (a.external_referer_cookie_value = c)
          var s = a.referral_type === $e.a.Access,
            u = ot(ot({}, it), {}, { client: Object(et.a)().clientName })
          c && s && (u.action = 'set_access_referer_cookie')
          var l,
            f,
            p = n.createEventObject(u, 'client_event', a),
            d = n.createPayload([p])
          ;(l = a
            ? e.Ocf.referer({
                landing_url: a.url,
                referral_details: a.referral_details_str || void 0,
                referrer_url: a.referer || void 0,
              }).catch(function () {
                return o('OCF_EXTERNAL_REFERER')
              })
            : Promise.resolve()),
            (f = a
              ? e.Attribution.recordUserEvent({ event: 'open', referring_link_url: a.url }).catch(function () {
                  return o('ATTRIBUTION_EXTERNAL_REFERER')
                })
              : Promise.resolve())
          var h = e.Jot.externalReferer(d)
            .then(function (e) {
              e && Object(nt.c)(t, e[0])
            })
            .catch(function () {
              return o('SCRIBE_EXTERNAL_REFERER')
            })
          return Promise.all([h, l, f])
        },
        ct = n('O6Yq'),
        st = n('muX9'),
        ut = n('Ty5D')
      var lt = function () {
          Object(ut.h)()
          var e,
            t = (je.canUseDOM && (e = window.location.href), e ? Object(ct.a)(e) : null)
          return t ? K.a.createElement(st.a, null, K.a.createElement('link', { href: t, rel: 'canonical' })) : null
        },
        ft =
          (n('ho0z'),
          Object(W.a)()
            .propsFromState(function () {
              return { loginReturnPath: te.r }
            })
            .withAnalytics({ component: 'smartlock_prompt' })),
        pt = n('6oVL'),
        dt = n('SrIh'),
        ht = n('BnI0'),
        mt = n('pQ3Z'),
        vt = n.n(mt),
        bt = n('cnVF'),
        yt = n('MWbm'),
        gt = n('mrHL')
      function _t(e, t) {
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
      function wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _t(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _t(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function St(e) {
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
      var kt = ['/settings', '/signup', '/login/error', '/i/flow/signup', '/login/check'],
        Et = (function (e) {
          B()(n, e)
          var t = St(n)
          function n(e, r) {
            var o
            return (
              s()(this, n),
              ((o = t.call(this, e, r)).state = { autoSubmit: !1, password: '', smartLockDisabled: !1, userName: '' }),
              (o._smartLockSupported =
                !!(window.PasswordCredential && navigator.credentials && navigator.credentials.get) &&
                !r.loggedInUserId),
              (o._isSmartLockDisabledFromCookie =
                '1' === e.getCookie({ featureSwitches: r.featureSwitches, cookieName: bt.y })),
              o
            )
          }
          return (
            R()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  '/login/error' === this.props.location.pathname
                    ? Object(ht.a)(this.context.featureSwitches)
                    : this._checkShouldDisplayPrompt()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  vt()(e.location, this.props.location) || this._checkShouldDisplayPrompt()
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
                    ? K.a.createElement(
                        yt.a,
                        { style: Ot.hidden },
                        K.a.createElement(
                          pt.a,
                          { autoSubmit: n, loginReturnPath: e },
                          K.a.createElement('input', { name: 'session[username_or_email]', type: 'hidden', value: o }),
                          K.a.createElement('input', { name: 'session[password]', type: 'hidden', value: r }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_scribeAction',
                value: function (e, t) {
                  this.props.analytics.scribe(wt(wt({}, t), {}, { action: e }))
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
                                return Object(ht.a)(e.context.featureSwitches)
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
                            Object(dt.a)(e)
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
                        !kt.some(function (e) {
                          return e === n
                        }) &&
                        !this.context.featureSwitches.isTrue('stateful_login_enabled'))
                  return !t && this._smartLockSupported && o
                },
              },
            ]),
            n
          )
        })(K.a.Component)
      l()(Et, 'contextType', J.a), l()(Et, 'defaultProps', { getCookie: gt.d })
      var Ot = _e.a.create(function (e) {
          return { hidden: { display: 'none' } }
        }),
        Tt = Object(G.a)(ft(Et)),
        Pt = n('HPNB'),
        Ct = n('+Kfv'),
        jt = n('1YZw'),
        At = Object(W.a)()
          .propsFromState(function () {
            return { toast: jt.d }
          })
          .propsFromActions(function () {
            return { onClose: jt.c }
          }),
        It = n('ZB2A'),
        Rt = 'toast',
        xt = n('cHvH'),
        Dt = n('0FVZ'),
        Lt = n('XTym'),
        Bt = At(function (e) {
          var t = e.onClose,
            n = e.toast,
            r = Object(ut.h)(),
            o = Object(It.b)(r)
          return n
            ? K.a.createElement(xt.a, null, function (e) {
                var r = e.windowWidth,
                  i = Pt.a.shouldRenderAsModal(r) ? Dt.a.ModalToasts : Dt.a.Toasts
                return K.a.createElement(
                  Ct.a,
                  { viewType: o },
                  K.a.createElement(Lt.a, {
                    LayerComponent: i,
                    action: n.action,
                    ariaOnly: n.ariaOnly,
                    autoDismissDelay: n.autoDismissDelay,
                    behavioralEventEntityToken: n.behavioralEventEntityToken,
                    key: n.id,
                    onClose: t,
                    testID: Rt,
                    text: n.text,
                    withAutoDismiss: n.withAutoDismiss,
                    withClearButton: n.withClearButton,
                  }),
                )
              })
            : null
        }),
        Mt = r,
        Nt = pe.a,
        Ut = Ee,
        Ft = Te.a,
        Ht = Xe,
        Kt = qe.a,
        zt = Tt,
        Wt = lt,
        Vt = Bt,
        Xt = a,
        qt = ue,
        Yt = function (e, t) {
          var n,
            r = Object.keys(e),
            o = !1,
            i = function () {
              o ||
                ((n = fe()(t)),
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
        Gt = Ce,
        Jt = Ye,
        Zt = Qe,
        Qt = at,
        $t = Oe.d,
        en = A,
        tn = $,
        nn = ee.a,
        rn = Re,
        on = Ge.a
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return X
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        l = n.n(u),
        f = n('N+ot'),
        p = n.n(f),
        d = n('AuHH'),
        h = n.n(d),
        m = n('KEM+'),
        v = n.n(m),
        b = (n('2G9S'), n('LJOr'), n('KqXw'), n('ERkP')),
        y = n.n(b),
        g = n('sTyV'),
        _ = n('6/RC'),
        w = n('sebV'),
        S = n('G6rE'),
        k = n('rxPX'),
        E = Object(k.a)()
          .propsFromState(function () {
            return { loggedInUser: S.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        O = n('3XMw'),
        T = n.n(O),
        P = n('OrGc'),
        C = n('QK5w'),
        j = n('aITJ'),
        A = n('MWbm'),
        I = n('TnY3'),
        R = n('rHpw'),
        x = n('t62R'),
        D = n('v6aA'),
        L = n('uScj'),
        B = n('fs1G'),
        M = n('BcsE'),
        N = n('VPAj')
      function U(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function H(e) {
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
      var K = T.a.b47e760d,
        z = T.a.fd2c7b43,
        W = new L.a(),
        V = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        X = function (e) {
          return _.canUseDOM ? W.subscribe(e).unsubscribe : B.a
        },
        q = (function (e) {
          l()(n, e)
          var t = H(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  o = r.history,
                  i = r.loggedInUserScreenName,
                  a = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        W.getListeners().length
                          ? W.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  c =
                    ((t = {}),
                    v()(t, P.e.search, a()),
                    v()(t, P.e.goToUser, a('@')),
                    v()(t, P.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    v()(t, P.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    v()(t, P.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      v()(t, P.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      v()(t, P.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      v()(t, P.e.goLists, function () {
                        return o.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    i && u
                      ? F(
                          F({}, s(i)),
                          {},
                          v()({}, P.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : i
                      ? s(i)
                      : {},
                  f = F(
                    F(F({}, c), l),
                    {},
                    ((n = {}),
                    v()(n, P.e.goHome, function () {
                      return o.push('/home')
                    }),
                    v()(n, P.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    v()(n, P.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    v()(n, P.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    v()(n, P.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    v()(n, P.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    v()(n, P.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    v()(n, P.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    v()(n, P.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? f : c
                e._unbindKeyboardShortcuts = Object(g.a)(p)
              }),
              v()(s()(e), '_handleKeyDown', function (t) {
                V(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              v()(s()(e), '_handleKeyUp', function (t) {
                if (!V(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(M.a)(n) && Date.now() - n < 500,
                    o = Object(C.a)({}, { location: e.props.location })
                  r && o ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    j.b.isKaiOS() &&
                      w.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    j.b.isKaiOS() &&
                      w.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? y.a.createElement(
                        A.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: R.a.visuallyHidden },
                        y.a.createElement(x.b, null, K),
                        y.a.createElement(x.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, z),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(q, 'contextType', D.a)
      var Y = E(q),
        G = _.canUseDOM ? Object(I.a)(Y) : Object(N.a)(null)
      t.a = G
    },
  },
])
//# sourceMappingURL=WIPED
