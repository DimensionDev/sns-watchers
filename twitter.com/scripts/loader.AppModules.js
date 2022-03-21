;(window.webpackJsonp = window.webpackJsonp || []).push([
  [166],
  {
    '+Aie': function (e, t, n) {
      var r
      !(function (i, o, a) {
        if (i) {
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
              d = {
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
              var e = g(o)
              for (var t in e)
                '_' !== t.charAt(0) &&
                  (g[t] = (function (t) {
                    return function () {
                      return e[t].apply(e, arguments)
                    }
                  })(t))
            }),
            g.init(),
            (i.Mousetrap = g),
            e.exports && (e.exports = g),
            void 0 ===
              (r = function () {
                return g
              }.call(t, n, t, e)) || (e.exports = r)
        }
        function f(e, t, n) {
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
            i,
            o = []
          for (
            n = (function (e) {
              return '+' === e ? ['+'] : (e = e.replace(/\+{2}/g, '+plus')).split('+')
            })(e),
              i = 0;
            i < n.length;
            ++i
          )
            (r = n[i]),
              d[r] && (r = d[r]),
              t && 'keypress' != t && l[r] && ((r = l[r]), o.push('shift')),
              m(r) && o.push(r)
          return { key: r, modifiers: o, action: (t = v(r, o, t)) }
        }
        function y(e, t) {
          return null !== e && e !== o && (e === t || y(e.parentNode, t))
        }
        function g(e) {
          var t = this
          if (((e = e || o), !(t instanceof g))) return new g(e)
          ;(t.target = e), (t._callbacks = {}), (t._directMap = {})
          var n,
            r = {},
            i = !1,
            a = !1,
            c = !1
          function s(e) {
            e = e || {}
            var t,
              n = !1
            for (t in r) e[t] ? (n = !0) : (r[t] = 0)
            n || (c = !1)
          }
          function u(e, n, i, o, a, c) {
            var s,
              u,
              l,
              d,
              p = [],
              f = i.type
            if (!t._callbacks[e]) return []
            for ('keyup' == f && m(e) && (n = [e]), s = 0; s < t._callbacks[e].length; ++s)
              if (
                ((u = t._callbacks[e][s]),
                (o || !u.seq || r[u.seq] == u.level) &&
                  f == u.action &&
                  (('keypress' == f && !i.metaKey && !i.ctrlKey) ||
                    ((l = n), (d = u.modifiers), l.sort().join(',') === d.sort().join(','))))
              ) {
                var h = !o && u.combo == a,
                  v = o && u.seq == o && u.level == c
                ;(h || v) && t._callbacks[e].splice(s, 1), p.push(u)
              }
            return p
          }
          function l(e, n, r, i) {
            t.stopCallback(n, n.target || n.srcElement, r, i) ||
              (!1 === e(n, r) &&
                ((function (e) {
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
                })(n),
                (function (e) {
                  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
                })(n)))
          }
          function d(e) {
            'number' != typeof e.which && (e.which = e.keyCode)
            var n = h(e)
            n &&
              ('keyup' != e.type || i !== n
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
                : (i = !1))
          }
          function p(e, t, o, a) {
            function u(t) {
              return function () {
                ;(c = t), ++r[e], clearTimeout(n), (n = setTimeout(s, 1e3))
              }
            }
            function d(t) {
              l(o, t, e), 'keyup' !== a && (i = h(t)), setTimeout(s, 10)
            }
            r[e] = 0
            for (var p = 0; p < t.length; ++p) {
              var f = p + 1 === t.length ? d : u(a || b(t[p + 1]).action)
              v(t[p], f, a, e, p)
            }
          }
          function v(e, n, r, i, o) {
            t._directMap[e + ':' + r] = n
            var a,
              c = (e = e.replace(/\s+/g, ' ')).split(' ')
            c.length > 1
              ? p(e, c, n, r)
              : ((a = b(e, r)),
                (t._callbacks[a.key] = t._callbacks[a.key] || []),
                u(a.key, a.modifiers, { type: a.action }, i, e, o),
                t._callbacks[a.key][i ? 'unshift' : 'push']({
                  callback: n,
                  modifiers: a.modifiers,
                  action: a.action,
                  seq: i,
                  level: o,
                  combo: e,
                }))
          }
          ;(t._handleKey = function (e, t, n) {
            var r,
              i = u(e, t, n),
              o = {},
              d = 0,
              p = !1
            for (r = 0; r < i.length; ++r) i[r].seq && (d = Math.max(d, i[r].level))
            for (r = 0; r < i.length; ++r)
              if (i[r].seq) {
                if (i[r].level != d) continue
                ;(p = !0), (o[i[r].seq] = 1), l(i[r].callback, n, i[r].combo, i[r].seq)
              } else p || l(i[r].callback, n, i[r].combo)
            var f = 'keypress' == n.type && a
            n.type != c || m(e) || f || s(o), (a = p && 'keydown' == n.type)
          }),
            (t._bindMultiple = function (e, t, n) {
              for (var r = 0; r < e.length; ++r) v(e[r], t, n)
            }),
            f(e, 'keypress', d),
            f(e, 'keydown', d),
            f(e, 'keyup', d)
        }
      })('undefined' != typeof window ? window : null, 'undefined' != typeof window ? document : null)
    },
    '6oVL': function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        i = n.n(r),
        o = n('VrFO'),
        a = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        b = (n('2G9S'), n('KqXw'), n('MvUL'), n('Ysgh'), n('ERkP')),
        y = n.n(b),
        g = n('3XMw'),
        _ = n.n(g),
        S = n('cnVF'),
        k = n('Ukpf'),
        w = n('BTou'),
        E = n('mrHL'),
        T = 'LoginForm_Login_Button',
        C = n('fEA7'),
        O = n.n(C),
        I = n('MWbm'),
        A = n('Irs7'),
        P = n('v6aA'),
        x = n('/yvb'),
        L = n('rHpw'),
        j = _.a.e919c3bc,
        D = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(l()(e), '_mobileLoginToken', O.a.v1().replace(/-/g, '')),
              v()(l()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), w.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              v()(l()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              v()(l()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              v()(l()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(E.e)(S.q, e._mobileLoginToken, {
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
                    o = e.horizontalLayout,
                    a = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    u = e.submitButtonSize,
                    l = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof a ? a.split('?') : [],
                    f = i()(p, 2),
                    h = f[0],
                    m = f[1],
                    v = encodeURI(h || '/'),
                    b = m ? '?'.concat(m) : '',
                    g = ''.concat('').concat(v).concat(b),
                    _ = y.a.createElement(
                      I.a,
                      { style: o && M.horizontalFields },
                      y.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: g }),
                      y.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      y.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      y.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      y.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : y.a.createElement(
                            I.a,
                            { style: o && M.loginButtonContainer },
                            y.a.createElement(
                              x.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: u,
                                style: l,
                                testID: T,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return y.a.createElement(
                    I.a,
                    { style: M.loginForm },
                    y.a.createElement('form', {
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
        })(y.a.Component)
      v()(D, 'contextType', P.a),
        v()(D, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: j,
          submitButtonType: 'brandFilled',
        })
      var M = L.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(A.a)(D, { element: 'inline_login_form' })
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
        i = n('JbbX'),
        o = 1e3,
        a = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function c(e) {
        var t = Object(i.a)(e)
        return t
          ? l(t)
            ? d(t)
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
        Object(i.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function u(e) {
        Object(i.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function l(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(i.a)(e)
        return !t || !l(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    Chb3: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        i = n.n(r),
        o = (n('jQ3i'), n('ERkP')),
        a = n.n(o),
        c = n('Hde2'),
        s = n('H1k/'),
        u = n('zCf4'),
        l = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(u.g)(),
          t = a.a.useState(function () {
            return d(e.pathname)
          }),
          n = i()(t, 2),
          r = n[0],
          o = n[1]
        return (
          a.a.useEffect(
            function () {
              o(d(e.pathname))
            },
            [o, e],
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
        return ne
      })
      var r = n('ERkP'),
        i = n.n(r),
        o = n('v6aA'),
        a = n('yiKp'),
        c = n.n(a),
        s = n('ddV6'),
        u = n.n(s),
        l = n('AS3p'),
        d = n('KUGV'),
        p = n('Irs7'),
        f = n('MWbm'),
        h = n('t62R'),
        m = n('cHvH'),
        v = n('rHpw'),
        b = n('/yvb'),
        y = n('3XMw'),
        g = n.n(y),
        _ = g.a.d8817e36,
        S = g.a.b9288ee6,
        k = g.a.i1390ec2,
        w = { page: 'cookie_compliance_banner' }
      function E() {
        var e = i.a.createElement(
          g.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          i.a.createElement(
            h.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            g.a.id7ef73f,
          ),
        )
        return i.a.createElement(C, { body: e, title: k })
      }
      function T(e) {
        var t = i.a.createElement(
          g.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          i.a.createElement(
            h.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            g.a.gfb2ba0f,
          ),
        )
        return i.a.createElement(C, { body: t, title: k })
      }
      function C(e) {
        return i.a.createElement(
          f.a,
          { style: I.cookieComplianceMessageWrap },
          i.a.createElement(h.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          i.a.createElement(
            h.b,
            { color: 'buttonWhite', size: 'subtext2', style: I.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var O = i.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          i.a.useEffect(
            function () {
              n.scribe(c()(c()({}, w), {}, { action: 'impression' }))
            },
            [n],
          )
          var r = (function () {
              var e = i.a.useState(!1),
                t = u()(e, 2),
                n = t[0],
                r = t[1],
                o = Object(p.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(c()(c()({}, w), {}, { action: 'click', element: 'expand_message' })), r(!0)
                },
              }
            })(),
            a = r.expand,
            s = r.isExpanded,
            h = (function () {
              var e = Object(p.b)(),
                t = i.a.useContext(o.a).featureSwitches,
                n = i.a.useState(function () {
                  return l.e(t) && !Object(d.a)()
                }),
                r = u()(n, 2),
                a = r[0],
                s = r[1]
              return {
                isBannerOpen: a,
                acceptAllCookies: function () {
                  e.scribe(c()(c()({}, w), {}, { action: 'click', element: 'accept_all' })), l.b(t), s(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(c()(c()({}, w), {}, { action: 'click', element: 'refuse_non_essential' })), l.d(t), s(!1)
                },
              }
            })(),
            y = h.acceptAllCookies,
            g = h.isBannerOpen,
            k = h.refuseNonEssentialCookies
          return g
            ? i.a.createElement(m.a, null, function (e) {
                var n = e.windowWidth < v.a.theme.breakpoints.xLarge
                return i.a.createElement(
                  f.a,
                  { ref: t, style: [I.root, n && I.rootNarrow] },
                  s ? i.a.createElement(E, null) : i.a.createElement(T, { onExpand: a }),
                  i.a.createElement(
                    f.a,
                    { style: [I.buttonContainer, n && I.buttonContainerNarrow] },
                    i.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: y,
                        size: 'medium',
                        style: [I.ctaButton, n && I.ctaButtonNarrow],
                        type: v.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      _,
                    ),
                    i.a.createElement(
                      b.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: k,
                        size: 'medium',
                        style: [I.ctaButton, n && I.ctaButtonNarrow],
                        type: v.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      S,
                    ),
                  ),
                )
              })
            : null
        }),
        I = v.a.create(function (e) {
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
        A = n('97Jx'),
        P = n.n(A),
        x = n('VrFO'),
        L = n.n(x),
        j = n('Y9Ll'),
        D = n.n(j),
        M = n('1Pcy'),
        R = n.n(M),
        B = n('5Yy7'),
        N = n.n(B),
        U = n('2VqO'),
        F = n.n(U),
        K = n('KEM+'),
        H = n.n(K),
        z = (n('hBvt'), n('RqPI')),
        V = n('rxPX'),
        W = Object(V.a)().propsFromState(function () {
          return { currentCountry: z.y }
        }),
        X = n('cnVF'),
        q = n('mrHL'),
        Y =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          }),
        G = g.a.ia5e7487,
        J = (function (e) {
          N()(n, e)
          var t = F()(n)
          function n(e, r) {
            var o
            L()(this, n),
              (o = t.call(this, e, r)),
              H()(R()(o), 'state', { euWarningIsOpen: !1 }),
              H()(R()(o), '_renderMessage', function () {
                return i.a.createElement(
                  h.b,
                  { color: 'white', size: 'subtext2' },
                  i.a.createElement(
                    g.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    i.a.createElement(
                      h.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: Z.link,
                      },
                      g.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              H()(R()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(q.e)(X.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var a = o.props.currentCountry,
              c = o.context.featureSwitches,
              s = c.getArrayValue('responsive_web_eu_countries', []),
              u = Object(q.d)({ featureSwitches: c, cookieName: X.k })
            return (o.state = { euWarningIsOpen: !!a && Y(s, a, u) }), o
          }
          return (
            D()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? i.a.createElement(m.a, null, function (t) {
                        var n = t.windowWidth < v.a.theme.breakpoints.medium
                        return i.a.createElement(
                          f.a,
                          { ref: e.props.innerRef, style: [Z.root, n && Z.rootNarrow] },
                          e._renderMessage(),
                          i.a.createElement(
                            b.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [Z.closeButton, n && Z.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            G,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(i.a.Component)
      H()(J, 'contextType', o.a)
      var Z = v.a.create(function (e) {
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
        Q = i.a.forwardRef(function (e, t) {
          return i.a.createElement(J, P()({}, e, { innerRef: t }))
        }),
        $ = W.forwardRef(Q),
        ee = n('+d3d')
      function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = i.a.useMemo(
            function () {
              return Object(ee.a)(function (t) {
                if (e)
                  if (t) {
                    var n = t.getBoundingClientRect()
                    n && e(n)
                  } else e(null)
              }, t)
            },
            [e, t],
          )
        return i.a.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var r,
                i = n.bind(null, t)
              return (
                i(),
                window.addEventListener('resize', i),
                t && (r = new ResizeObserver(i)).observe(t),
                function () {
                  window.removeEventListener('resize', i), r && r.disconnect(), n.cancel()
                }
              )
            }
          },
          [e, n],
        )
      }
      function ne(e) {
        var t,
          n = i.a.useContext(o.a).featureSwitches,
          r =
            ((t = e.onHeightChange),
            te(
              i.a.useMemo(
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
          ? i.a.createElement(O, { ref: r })
          : i.a.createElement($, { ref: r })
      }
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return i
        })
      n('yH/f')
      var r = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        i = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return U
      })
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        c = (n('849X'), n('TJCb'), n('7x/C'), n('JtPf'), n('KqXw'), n('LJOr'), n('yiKp')),
        s = n.n(c),
        u = n('KEM+'),
        l = n.n(u),
        d = (n('IAdD'), n('0zG9'), n('yH/f'), n('5Yy7')),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('mAxt'),
        v = n.n(m),
        b = (n('2G9S'), n('CEs6')),
        y = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, r, o) {
            var a
            return (
              i()(this, n),
              ((a = t.call(
                this,
                ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(r, ' message: ').concat(o),
              )).url = e),
              (a.status = r),
              a
            )
          }
          return a()(n)
        })(v()(Error))
      l()(y, 'displayName', 'ProxseeApiError')
      var g,
        _,
        S = n('epkG'),
        k = n('SrIh'),
        w = n('RqPI'),
        E = 0,
        T = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L
            i()(this, e),
              l()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.AbusiveBehavior }, e))
                },
              })
            var r = n.httpConfig
            ;(this.client = new S.a(s()(s()({}, j), r))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            a()(e, [
              {
                key: 'init',
                value: function (e) {
                  _ = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!_
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
                  var e = _.store.getState()
                  return Object(w.m)(e)
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
                    i = Object.assign(P(), n.headers),
                    o = JSON.stringify(s()(s()({}, t), {}, { cookie: this._authToken })),
                    a = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(a), headers: i, params: r, data: o })
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
                        : ((this._authPromise = _.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(k.a)('[ProxseeApi] failed to login', { extra: t })
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
                  var t = { jwt: e, vendor_id: x, create_user: !1, direct: !0 }
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
                      i = Object.assign(P(), n.headers),
                      o = JSON.stringify({
                        access_token: e.access_token,
                        cursor: e.cursor,
                        limit: 1e3,
                        since: null,
                        quick_get: !0,
                      })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: i, params: r, data: o })
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
                            Object(k.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
                          })
                      })
                    : Promise.resolve()
                },
              },
              {
                key: 'createClip',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('createClip', e).catch(function (e) {
                      Object(k.a)('[ProxseeApi] failed to create clip', { extra: { err: e } })
                    })
                  })
                },
              },
              {
                key: '_reportSpace',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('markAbuse', e).catch(function (e) {
                      Object(k.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        C = 'X-Idempotence',
        O = 'X-Periscope-User-Agent',
        I = 'X-Attempt',
        A = ((g = {}), l()(g, O, 'Twitter/m5'), l()(g, I, 1), g)
      function P() {
        var e,
          t = Date.now()
        return (
          (E = t <= E ? E + 1 : t),
          Object.assign({}, A, ((e = {}), l()(e, C, E), l()(e, 'content-type', 'application/json'), e))
        )
      }
      var x = 'm5-proxsee-login-a2011357b73e',
        L = {},
        j = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        r = t.status,
                        i = Object(b.a)(t)
                      return new y(n, r, i.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var D,
        M = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        R = new T(),
        B = n('G6rE'),
        N = new Error('[AudioModule] config not initialized'),
        U = new ((function () {
          function e() {
            i()(this, e), (this.proxsee = R)
          }
          return (
            a()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(D = e), R.init(D)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!D
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = D.store.getState()
                    return B.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return D ? D.api.AudioSpaces.byId(e) : Promise.reject(N)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return D ? D.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(N)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return D ? D.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(N)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return D ? D.api.AudioSpaces.search(e, t) : Promise.reject(N)
                },
              },
            ]),
            e
          )
        })())()
    },
    Sksh: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        c = n('KEM+'),
        s = n.n(c),
        u = (n('+KXO'), n('849X'), n('TJCb'), n('SrIh')),
        l = n('M0jS'),
        d = n('+d3d'),
        p = n('VY6S'),
        f = (function () {
          function e() {
            var t = this
            i()(this, e),
              s()(this, 'usersInApp', {}),
              s()(
                this,
                '_throttledInitialFetch',
                Object(d.a)(function () {
                  t.store.dispatch(l.b.fetchManyIfNeeded(Object.keys(t.usersInApp)))
                }, 1500),
              )
          }
          return (
            a()(e, [
              {
                key: 'init',
                value: function (e) {
                  this.store = e
                },
              },
              {
                key: 'registerUserInApp',
                value: function (e) {
                  Object.keys(this.usersInApp).length > 50 &&
                    ((this.usersInApp = {}),
                    Object(u.a)(new Error('Registered users in app has exceeded 50'), { level: 'warning' })),
                    this.usersInApp[e]
                      ? (this.usersInApp[e] = this.usersInApp[e] + 1)
                      : ((this.usersInApp[e] = 1), Object(p.a)(this._throttledInitialFetch(), 100))
                },
              },
              {
                key: 'deregisterUserInApp',
                value: function (e) {
                  this.usersInApp[e] && this.usersInApp[e] > 1
                    ? (this.usersInApp[e] = this.usersInApp[e] - 1)
                    : delete this.usersInApp[e]
                },
              },
            ]),
            e
          )
        })()
      t.a = new f()
    },
    TpKd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'c', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return c
        })
      n('2G9S'), n('KqXw'), n('Ysgh')
      var r = n('mrHL'),
        i = 'external_referer'
      function o(e) {
        return Object(r.d)({ cookieName: i, featureSwitches: e })
      }
      function a(e, t) {
        var n = (t && t.encryptedReferralDetails) || '',
          o = (t && t.encryptedReferer) || '',
          a = t && void 0 !== t.referralType ? ''.concat(t.referralType) : ''
        if (n || o || a) {
          var c = ''.concat(encodeURIComponent(o), '|').concat(a, '|').concat(encodeURIComponent(n))
          Object(r.e)(i, c, {
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
        var t = o(e)
        if (t && t.split('|').length > 1) {
          var n = t.split('|')
          return { encryptedReferer: n[0], referralType: n[1], encryptedReferralDetails: n[2] }
        }
      }
    },
    XTym: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        i = n.n(r),
        o = n('VrFO'),
        a = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        b = (n('2G9S'), n('hBvt'), n('KqXw'), n('Ysgh'), n('uFXj'), n('SV7d')),
        y = n('ERkP'),
        g = n.n(y),
        _ = n('t62R'),
        S = n('/yvb'),
        k = n('mw9i'),
        w = n('hOZg'),
        E = n('Oe3h'),
        T = n('0FVZ'),
        C = n('oQhu'),
        O = n('cHvH'),
        I = n('rHpw'),
        A = n('3XMw'),
        P = n.n(A),
        x = n('+/1j'),
        L = n('MWbm'),
        j = P.a.af8fa2ad,
        D = g.a.createElement(w.a, null),
        M = 'toast',
        R = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(
                l()(e),
                '_getMemoizedBehavioralEventContext',
                Object(C.a)(function (e) {
                  return { viewType: e }
                }),
              ),
              v()(
                l()(e),
                '_getMemoizedToastBehavioralEventContext',
                Object(C.a)(function (e) {
                  return { viewState: e ? { type: 'toast', entityToken: e } : void 0, viewType: M }
                }),
              ),
              v()(l()(e), '_renderAriaOnly', function () {
                var t = e.props,
                  n = t.testID,
                  r = t.text
                return g.a.createElement(
                  L.a,
                  { accessibilityRole: 'alert', style: I.a.visuallyHidden, testID: n },
                  g.a.createElement(x.a, null, r),
                )
              }),
              v()(l()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.action,
                  r = t.text,
                  i = t.withAutoDismiss,
                  o = t.withClearButton
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(_.b, { color: 'whiteOnColor', style: B.titleText }, r),
                  g.a.createElement(
                    L.a,
                    { accessibilityHidden: i, style: B.actionButtons },
                    n && e._renderActionLabel(n),
                    o &&
                      g.a.createElement(S.a, {
                        accessibilityLabel: j,
                        borderColor: 'transparent',
                        color: 'white',
                        icon: D,
                        onPress: e._handleClose,
                        style: B.closeButton,
                      }),
                  ),
                )
              }),
              v()(l()(e), '_renderContentWithLayer', function (t) {
                var n = t.windowWidth,
                  r = e.props,
                  o = r.LayerComponent,
                  a = r.behavioralEventEntityToken,
                  c = r.testID,
                  s = e._getMemoizedToastBehavioralEventContext(a)
                return g.a.createElement(
                  o,
                  null,
                  g.a.createElement(
                    k.a,
                    null,
                    g.a.createElement(E.a, { id: 'Toast' }, function (t, r) {
                      return g.a.createElement(
                        b.b,
                        { behavioralEventContext: s },
                        g.a.createElement(
                          L.a,
                          i()(
                            { ref: t() },
                            r({
                              accessibilityRole: 'alert',
                              style: [B.root, n > I.a.theme.breakpoints.medium && B.rootWide],
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
              v()(l()(e), '_renderContentWithoutLayer', function (t) {
                var n = t.windowWidth,
                  r = e.props,
                  i = r.behavioralEventEntityToken,
                  o = r.testID,
                  a = e._getMemoizedToastBehavioralEventContext(i)
                return g.a.createElement(
                  k.a,
                  null,
                  g.a.createElement(
                    b.b,
                    { behavioralEventContext: a },
                    g.a.createElement(
                      L.a,
                      {
                        accessibilityRole: 'alert',
                        style: [B.root, n > I.a.theme.breakpoints.medium && B.rootWide],
                        testID: o,
                      },
                      e._renderContent(),
                    ),
                  ),
                )
              }),
              v()(l()(e), '_createTimer', function () {
                var t = e.props,
                  r = t.action,
                  i = t.autoDismissDelay,
                  o = t.onClose,
                  a = t.text
                if (t.withAutoDismiss) {
                  var c = i || n.calculateDismissDelay(a, !!r)
                  e._timerId = setTimeout(o, c)
                }
              }),
              v()(l()(e), '_handleActionPress', function (t) {
                e._stopTimer()
                var n = e.props,
                  r = n.action,
                  i = n.onClose
                null != r && r.onAction && r.onAction(t), i(t)
              }),
              v()(l()(e), '_handleClose', function (t) {
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
                      : g.a.createElement(O.a, null, n ? this._renderContentWithoutLayer : this._renderContentWithLayer)
                  },
                },
                {
                  key: '_renderActionLabel',
                  value: function (e) {
                    var t = e.behavioralEventViewType,
                      n = e.label,
                      r = e.link,
                      i = t || 'action',
                      o = this._getMemoizedBehavioralEventContext(i)
                    return g.a.createElement(
                      b.a,
                      { behavioralEventContext: o },
                      g.a.createElement(_.b, {
                        children: n,
                        color: 'whiteOnColor',
                        link: r,
                        onClick: this._handleActionPress,
                        style: [B.actionText, !r && B.actionMargin],
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
        })(g.a.Component)
      v()(R, 'defaultProps', { withAutoDismiss: !0, withClearButton: !1, LayerComponent: T.a.ModalToasts })
      var B = I.a.create(function (e) {
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
      t.a = R
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return d
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
      var r = n('KEM+'),
        i = n.n(r),
        o = n('yiKp'),
        a = n.n(o),
        c = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        s = n('Ssj5'),
        u = 'geoLocation',
        l = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var d = function (e) {
          return e.geoLocation.permissionStatus
        },
        p = function (e) {
          return e.geoLocation.position
        },
        f = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: f }
        },
        m = 'rweb/geoLocation/SET_POSITION',
        v = function () {
          return function (e, t) {
            return y()
              .then(function (t) {
                return e({ payload: t, type: m })
              })
              .catch(function (t) {
                return e(h(c.b.denied)), Promise.reject(t)
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
      s.a.register(
        i()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f:
              return a()(a()({}, e), {}, { permissionStatus: t.payload })
            case m:
              return a()(a()({}, e), {}, { position: t.payload })
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
          return Pt
        }),
        n.d(t, 'BottomCookieBannerPicker', function () {
          return xt
        }),
        n.d(t, 'DtabBar', function () {
          return Lt
        }),
        n.d(t, 'GlobalKeyboardShortcuts', function () {
          return jt
        }),
        n.d(t, 'LivePipeline', function () {
          return Dt
        }),
        n.d(t, 'ModalSheet', function () {
          return Mt
        }),
        n.d(t, 'SmartLockPrompt', function () {
          return Rt
        }),
        n.d(t, 'Seo', function () {
          return Bt
        }),
        n.d(t, 'Toast', function () {
          return Nt
        }),
        n.d(t, 'appReloader', function () {
          return Ut
        }),
        n.d(t, 'badgeTimers', function () {
          return Ft
        }),
        n.d(t, 'bindKeyboardShortcuts', function () {
          return Kt
        }),
        n.d(t, 'ie11Reflower', function () {
          return Ht
        }),
        n.d(t, 'multiAccountListFetcher', function () {
          return zt
        }),
        n.d(t, 'redirectEmailUser', function () {
          return Vt
        }),
        n.d(t, 'scribeExternalReferer', function () {
          return Wt
        }),
        n.d(t, 'getScreenReaderShortcutsDataAttribute', function () {
          return Xt
        }),
        n.d(t, 'altSvc', function () {
          return qt
        }),
        n.d(t, 'AppInstallOnLandingPrompt', function () {
          return Yt
        }),
        n.d(t, 'AudioModule', function () {
          return Gt
        }),
        n.d(t, 'initGeoLocation', function () {
          return Jt
        }),
        n.d(t, 'userPresence', function () {
          return Zt
        })
      var r = {}
      n.r(r),
        n.d(r, 'initialize', function () {
          return k
        }),
        n.d(r, 'detectedTypes', function () {
          return w
        }),
        n.d(r, 'detectedType', function () {
          return E
        }),
        n.d(r, 'register', function () {
          return T
        }),
        n.d(r, 'registerSome', function () {
          return C
        }),
        n.d(r, 'registerEvery', function () {
          return O
        }),
        n.d(r, 'unregister', function () {
          return I
        }),
        n.d(r, 'reset', function () {
          return A
        }),
        n.d(r, 'KEYBOARD', function () {
          return m
        }),
        n.d(r, 'MOUSE', function () {
          return v
        }),
        n.d(r, '_private', function () {
          return P
        })
      var i,
        o,
        a = n('3+LL'),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('VrFO'),
        l = n.n(u),
        d = n('KEM+'),
        p = n.n(d),
        f =
          (n('LW0h'),
          n('7x/C'),
          n('jwue'),
          n('+oxZ'),
          n('+KXO'),
          n('5BYb'),
          n('DfhM'),
          n('vrRf'),
          n('Ee2X'),
          n('z0MJ')),
        h = n.n(f),
        m = 'keyboard',
        v = 'mouse',
        b = [],
        y = ((i = {}), p()(i, m, !1), p()(i, v, !1), i),
        g = s()(function e(t) {
          var n = this
          l()(this, e),
            p()(this, '_handleTimerEnd', function () {
              n._count >= 3 && n._handleDetected(), n._reset()
            }),
            p()(this, '_handleDetected', function () {
              n._reset(), n.detach(), n.detected()
            }),
            p()(this, '_reset', function () {
              clearTimeout(n._timer), (n._timer = void 0), (n._count = 0)
            }),
            p()(this, '_handleMouseMove', function () {
              ;(n._count = n._count + 1),
                n._count >= 3 ? n._handleDetected() : n._timer || (n._timer = setTimeout(n._handleTimerEnd, 500))
            }),
            p()(this, 'attach', function () {
              document.addEventListener('mousemove', n._handleMouseMove),
                document.addEventListener('touchend', n._reset)
            }),
            p()(this, 'detach', function () {
              document.removeEventListener('mousemove', n._handleMouseMove),
                document.removeEventListener('touchend', n._reset)
            }),
            (this.detected = t),
            (this._count = 0)
        }),
        _ = s()(function e(t) {
          var n = this
          l()(this, e),
            p()(this, '_handleKeyDown', function (e) {
              var t,
                r = e.altKey,
                i = e.ctrlKey,
                o = e.metaKey,
                a = e.target
              ;(!(r || i || o) && ((t = a) instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) ||
                (n.detach(), n.detected())
            }),
            p()(this, 'attach', function () {
              document.addEventListener('keydown', n._handleKeyDown)
            }),
            p()(this, 'detach', function () {
              document.removeEventListener('keydown', n._handleKeyDown)
            }),
            (this.detected = t)
        })
      function S(e) {
        y[e] = !0
        var t = b.filter(function (e) {
            return (0, e.matches)()
          }),
          n = b.filter(function (e) {
            return !(0, e.matches)()
          })
        ;(b = n),
          t.forEach(function (e) {
            return (0, e.callback)()
          })
      }
      var k = function () {
          ;(o = [
            new _(function () {
              return S(m)
            }),
            new g(function () {
              return S(v)
            }),
          ]).forEach(function (e) {
            return e.attach()
          })
        },
        w = function () {
          return Object.keys(y).filter(function (e) {
            return y[e]
          })
        },
        E = function (e) {
          return y[e]
        },
        T = function (e, t) {
          var n = function () {
            return y[t]
          }
          n() ? h()(e) : b.push({ matches: n, callback: e })
        },
        C = function (e, t) {
          var n = function () {
            return t.some(function (e) {
              return y[e]
            })
          }
          n() ? h()(e) : b.push({ matches: n, callback: e })
        },
        O = function (e, t) {
          var n = function () {
            return t.every(function (e) {
              return y[e]
            })
          }
          n() ? h()(e) : b.push({ matches: n, callback: e })
        },
        I = function (e) {
          var t = b.indexOf(e)
          t > -1 && b.splice(t, 1)
        },
        A = function () {
          ;(b = []),
            Object.keys(y).forEach(function (e) {
              y[e] = !1
            }),
            o.forEach(function (e) {
              return e.detach()
            })
        },
        P = { MOUSE_INTERVAL_TIME_IN_MS: 500, SUCCESSIVE_MOUSE_EVENTS: 3, detected: S },
        x = n('0KEI'),
        L = function (e, t, n) {
          if (e.isTrue('responsive_web_alt_svc')) {
            var r = n(Object(x.createLocalApiErrorHandlerWithContextFactory)('APP_INITIALIZATION_ALT_SVC')({}))
            t.AltSvc.fetch().catch(r)
          }
        },
        j = n('1Pcy'),
        D = n.n(j),
        M = n('5Yy7'),
        R = n.n(M),
        B = n('2VqO'),
        N = n.n(B),
        U = (n('2G9S'), n('ERkP')),
        F = n.n(U),
        K = n('sebV'),
        H = (n('jQ3i'), n('x4t0'), n('rxPX')),
        z = function (e, t) {
          return t.location.pathname.includes('/intent/')
        },
        V = function (e, t) {
          return t.location.pathname.includes('/login')
        },
        W = Object(H.a)()
          .propsFromState(function () {
            return { isIntentRoute: z, isLoginRoute: V }
          })
          .adjustStateProps(function (e) {
            var t = e.isIntentRoute,
              n = e.isLoginRoute
            return { hideAppPrompt: t || n }
          }),
        X = n('RxYA'),
        q = n('TnY3'),
        Y = n('v6aA'),
        G = (function (e) {
          R()(n, e)
          var t = N()(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(D()(e), '_isStandaloneApp', K.a.isStandaloneApp()),
              p()(D()(e), 'state', {
                showPrompt:
                  !e.props.hideAppPrompt &&
                  !e.context.loggedInUserId &&
                  !e._isStandaloneApp &&
                  e.context.featureSwitches.isTrue('responsive_web_use_app_prompt_enabled') &&
                  !e.context.featureSwitches.isTrue('responsive_web_open_in_app_prompt_enabled'),
              }),
              p()(D()(e), '_handleClose', function () {
                e.setState({ showPrompt: !1 })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  return this.state.showPrompt
                    ? F.a.createElement(X.a, { onClose: this._handleClose, onlyShowOnce: !0, useBottomBanner: !0 })
                    : null
                },
              },
            ]),
            n
          )
        })(F.a.Component)
      p()(G, 'contextType', Y.a)
      var J = Object(q.a)(W(G)),
        Z = n('Pc/x'),
        Q = n('RqPI'),
        $ = n('k49u'),
        ee = n('2g+p'),
        te = n('auX9'),
        ne = n('fs1G'),
        re = n('B5iK'),
        ie = n('l0YN'),
        oe = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
          window.requestIdleCallback
            ? window.requestIdleCallback(function () {
                return e.fire()
              })
            : setTimeout(function () {
                return e.fire()
              }, t)
        },
        ae = function (e) {
          if (!!Q.m(e.getState())) {
            var t = e.dispatch(
                Object(x.createLocalApiErrorHandlerWithContextFactory)('BADGE_TIMERS')(
                  p()({ showToast: !1 }, $.a.AccessDeniedByBouncer, { customAction: ne.a }),
                ),
              ),
              n = function (n) {
                return e.dispatch(n).catch(t)
              },
              r = new re.b(3e4).interval(function () {
                'background' !== ee.a.currentState && (n(Object(ie.c)()), Object(te.b)(e.getState()).forEach(n))
              })
            r.start(), oe(r)
            ee.a.addEventListener('change', function (e) {
              'active' === e && oe(r)
            })
          }
        },
        ce = (n('3voH'), n('+Aie')),
        se = n.n(ce)
      var ue = n('Chb3'),
        le = (n('7xRU'), n('lTEL'), n('87if'), n('kYxP'), n('Cm4o'), n('KrtT'), n('TJCb'), n('DZ+c'), n('Hde2')),
        de = n('P1r1'),
        pe = Object(H.a)()
          .propsFromState(function () {
            return { dtabBarInfo: de.m }
          })
          .adjustStateProps(function (e) {
            var t = e.dtabBarInfo
            return { dtabAll: t && t.dtabAll, dtabRweb: t && t.dtabRweb, hide: t && t.hide, ttsToken: t && t.ttsToken }
          })
          .propsFromActions(function () {
            return { setDtabBarInfo: de.H }
          }),
        fe = n('8jkQ'),
        he = n('/yvb'),
        me = n('mw9i'),
        ve = n('t62R'),
        be = n('rHpw'),
        ye = (function (e) {
          R()(n, e)
          var t = N()(n)
          function n(e, r) {
            var i
            return (
              l()(this, n),
              (i = t.call(this, e, r)),
              p()(D()(i), '_renderButtons', function () {
                return F.a.createElement(
                  F.a.Fragment,
                  null,
                  F.a.createElement(
                    he.a,
                    { onClick: i._handleInfo, size: 'xSmall', type: 'destructiveFilled' },
                    'Info',
                  ),
                  F.a.createElement(
                    he.a,
                    { onClick: i._handleClear, size: 'xSmall', type: 'destructiveFilled' },
                    'Clear',
                  ),
                  F.a.createElement(
                    he.a,
                    { onClick: i._handleClose, size: 'xSmall', type: 'destructiveFilled' },
                    'Hide',
                  ),
                )
              }),
              p()(D()(i), '_handleInfo', function () {
                var e = i._getOverrides()
                window.prompt(e.join('\n'), window.encodeURIComponent(e.join(';')))
              }),
              p()(D()(i), '_getOverrides', function () {
                var e = i.props,
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
              p()(D()(i), '_handleClear', function () {
                var e = i._getOverrides().join('\n'),
                  t = 'OK to clear overrides?\n'.concat(e)
                if (window.confirm(t)) {
                  var n = new URL(fe.b.get())
                  n.searchParams.set('dtab_local', ''),
                    n.searchParams.set('tts_token', ''),
                    fe.b.navigateTo(n.toString())
                }
              }),
              p()(D()(i), '_handleClose', function () {
                var e = i.props,
                  t = e.dtabAll,
                  n = e.dtabRweb,
                  r = e.setDtabBarInfo,
                  o = e.ttsToken
                i.setState({ show: !1 }), r({ dtabAll: t, dtabRweb: n, ttsToken: o, hide: !0 })
              }),
              p()(D()(i), '_shouldShow', function () {
                var e = i.props,
                  t = e.dtabAll,
                  n = e.hide,
                  r = e.ttsToken
                return !(n || (!t && !r))
              }),
              (i.state = { show: i._shouldShow() }),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.dtabAll,
                    n =
                      e.ttsToken || t
                        ? F.a.createElement(
                            le.a,
                            { style: ge.root },
                            F.a.createElement(
                              me.a,
                              { isLarge: !0, style: ge.container, withGutter: !0 },
                              F.a.createElement(
                                ve.b,
                                { color: 'whiteOnColor', numberOfLines: 1, size: 'subtext2', style: ge.text },
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
        })(F.a.PureComponent)
      p()(ye, 'defaultProps', { hide: !1 })
      var ge = be.a.create(function (e) {
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
        _e = pe(ye),
        Se = n('OrGc'),
        ke = n('rRIm'),
        we = n('aITJ'),
        Ee = {
          init: function (e) {
            we.b.isDesktopOS() &&
              we.b.isIE() &&
              ee.a.addEventListener('change', function (t) {
                if ('active' === t && e && e.body) {
                  var n = e.body.style.display
                  ;(e.body.style.display = 'none'), e.body.clientHeight, (e.body.style.display = n)
                }
              })
          },
        },
        Te = (n('JtPf'), n('6/RC')),
        Ce = n('M6MT'),
        Oe = n('a/ea'),
        Ie = function (e) {
          return Object(de.o)(e.getState())
            ? (function (e) {
                var t, n, r
                return null !== (t = navigator) && void 0 !== t && t.permissions
                  ? null === (n = navigator) || void 0 === n || null === (r = n.permissions) || void 0 === r
                    ? void 0
                    : r.query({ name: 'geolocation' }).then(function (t) {
                        return (
                          e.dispatch(Object(Oe.e)(t.state)),
                          (t.onchange = function () {
                            e.dispatch(Object(Oe.e)(this.state))
                          }),
                          Promise.resolve(t.state)
                        )
                      })
                  : Promise.resolve()
              })(e).then(function (t) {
                t === Ce.b.granted && e.dispatch(Object(Oe.a)())
              })
            : Promise.resolve()
        },
        Ae = (n('849X'), n('z84I'), n('pXBW')),
        Pe = n('nS6Z')
      function xe(e) {
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
      var je = n('T0aG'),
        De = n.n(je)
      n('M+/F'), n('KOtZ')
      function Me(e) {
        return Object.keys(Re(e))
      }
      function Re(e) {
        return e.reduce(function (e, t) {
          return (e[t] = !0), e
        }, {})
      }
      var Be = (function () {
        function e(t) {
          var n = this,
            r = t.callback,
            i = t.makeEventSource,
            o = t.topics
          l()(this, e),
            p()(this, 'topics', []),
            p()(this, 'backoffDuration', 0),
            p()(this, '_handleMessage', function (e) {
              var t = e.data
              try {
                var r = JSON.parse(t)
                n.connection && '/system/config' === r.topic && (n.connection.hasConfig = !0), n.callback(r)
              } catch (i) {}
            }),
            p()(this, '_handleError', function () {
              if (n.connection && n.connection.eventSource.readyState !== n.connection.eventSource.OPEN) {
                var e,
                  t,
                  r,
                  i,
                  o,
                  a = n.connection
                if (
                  !a ||
                  a.eventSource.readyState !== a.eventSource.CONNECTING ||
                  ((e = a.topics),
                  (t = n._getTopicsForAutoSubscribe()),
                  (r = Re(e)),
                  (i = Object.keys(r)),
                  (o = Me(t)),
                  i.length !== o.length ||
                    !o.every(function (e) {
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
            p()(this, '_connect', function () {
              n._cleanup()
              var e = n._getTopicsForAutoSubscribe()
              n.makeEventSource(e)
                .then(function (t) {
                  if ('object' !== De()(t)) throw new Error('EventSource must be defined')
                  t.addEventListener('message', n._handleMessage),
                    t.addEventListener('error', n._handleError),
                    (n.connection = { eventSource: t, topics: e, hasConfig: !1 })
                })
                .catch(function () {
                  n._handleError()
                })
            }),
            (this.makeEventSource = i),
            (this.callback = r),
            this.setTopics(o),
            this._connect()
        }
        return (
          s()(e, [
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
      p()(Be, 'MAX_AUTO_SUBSCRIBE_TOPICS', 20)
      var Ne = n('+d3d'),
        Ue = (function () {
          function e(t) {
            var n = this
            l()(this, e),
              p()(this, 'sessionId', ''),
              p()(this, 'pendingState', { topics: [], forceSubscribeAll: !1 }),
              p()(this, 'appliedState', { topics: [] }),
              p()(this, 'setTopics', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                ;(n.pendingState.topics = Me(e)), n._applyPendingState()
              }),
              p()(this, '_subscribeAll', function () {
                ;(n.pendingState.forceSubscribeAll = !0), n._applyPendingState()
              }),
              p()(this, '_applyPendingState', function () {
                var e = n.pendingState.forceSubscribeAll
                    ? n.pendingState.topics
                    : n.pendingState.topics.filter(function (e) {
                        return -1 === n.appliedState.topics.indexOf(e)
                      }),
                  t = n.appliedState.topics.filter(function (e) {
                    return -1 === n.pendingState.topics.indexOf(e)
                  }),
                  r = !n.sessionId,
                  i = 0 === e.length && 0 === t.length
                r ||
                  i ||
                  ((n.appliedState = { topics: n.pendingState.topics }),
                  (n.pendingState = { topics: n.appliedState.topics, forceSubscribeAll: !1 }),
                  n.updateSubscriptions({ toSubscribe: e, toUnsubscribe: t, sessionId: n.sessionId }))
              })
            var r = t.updateSubscriptions,
              i = t.throttlePeriod,
              o = void 0 === i ? e.UPDATE_SUBSCRIPTIONS_THROTTLE : i
            ;(this.updateSubscriptions = r),
              (this.throttlePeriod = o),
              null !== o &&
                o >= 0 &&
                (this._applyPendingState = Object(Ne.a)(this._applyPendingState, o, { leading: !1 }))
          }
          return (
            s()(e, [
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
      p()(Ue, 'DEFAULT_TTL', 12e4),
        p()(Ue, 'TIMEOUT_PREEMPT_DURATION', 2e4),
        p()(Ue, 'UPDATE_SUBSCRIPTIONS_THROTTLE', 1e3)
      var Fe,
        Ke = (function () {
          function e(t) {
            var n = this,
              r = t.makeEventSource,
              i = t.updateSubscriptions
            l()(this, e),
              p()(this, 'isSuspended', !1),
              p()(this, 'eventSourceConnector', null),
              p()(this, 'subscriptionsByTopic', {}),
              p()(this, '_closeEventSource', function () {
                n._clearExpiryTimeout(),
                  n.livePipelineResubscriber.setConfig(null),
                  n.eventSourceConnector && (n.eventSourceConnector.teardown(), (n.eventSourceConnector = null))
              }),
              p()(this, 'restartEventSource', function () {
                n._closeEventSource(), n._reconcileTopics()
              }),
              p()(this, '_handleMessage', function (t) {
                var r = t.payload,
                  i = t.topic
                i === e.SYSTEM_CONFIG_TOPIC &&
                  n.eventSourceConnector &&
                  n.livePipelineResubscriber.setConfig(r, n.eventSourceConnector.getAutoSubscribedTopics())
                var o = Promise.resolve(r)
                return (n.subscriptionsByTopic[i] || []).map(function (e) {
                  return o.then(e.callback)
                })
              }),
              (this.makeEventSource = r),
              (this.livePipelineResubscriber = new Ue({
                updateSubscriptions: Le({ promiseFactory: i, condition: xe, sideEffect: this.restartEventSource }),
              }))
          }
          return (
            s()(e, [
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
                        (this.eventSourceConnector = new Be({
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
      p()(Ke, 'SYSTEM_CONFIG_TOPIC', '/system/config'), p()(Ke, 'UNUSED_CONNECTION_EXPIRY', 3e4)
      var He = {
          isSupported: function (e) {
            return 'EventSource' in window && e.isTrue('livepipeline_client_enabled')
          },
          isSupportedAndReady: function (e) {
            return this.isSupported(e) && !!Fe
          },
          create: function (e, t, n) {
            var r = this
            if (!this.isSupported(e)) throw new Error('This browser does not support LivePipeline')
            if (Fe) throw new Error('LivePipeline should only be initialized once')
            return (
              (Fe = new Ke({
                makeEventSource: function (e) {
                  var t = (function (e) {
                    var t = e.map(encodeURIComponent).join(','),
                      r = function (e) {
                        return ''.concat(e, '/live_pipeline/events?topic=').concat(t)
                      },
                      i = r(Pe.b),
                      o = n.getReplacementHost(new URL(i))
                    return o ? r('https://'.concat(o)) : i
                  })(e)
                  return Promise.resolve(new window.EventSource(t, { withCredentials: !0 }))
                },
                updateSubscriptions: function (e) {
                  return t.LivePipeline.updateSubscriptions(e).catch(function (e) {
                    if (e)
                      if (e instanceof Ae.a && Object($.c)(e, $.a.SessionNotFound)) Fe && Fe.restartEventSource()
                      else if (!(e instanceof Ae.a) && e instanceof Error) return Promise.reject(e)
                    return Promise.resolve()
                  })
                },
              })),
              ee.a.addEventListener('change', function (e) {
                return r._handleAppStateChange(e)
              }),
              Fe
            )
          },
          get: function () {
            if (!Fe) throw new Error('LivePipeline instance has not been initialized')
            return Fe
          },
          destroy: function () {
            Fe && Fe.teardown(), (Fe = void 0)
          },
          _handleAppStateChange: function (e) {
            'active' === e ? this.get().resume() : this.get().suspend()
          },
        },
        ze = n('pf9B'),
        Ve = function (e) {
          var t = Object(x.createLocalApiErrorHandlerWithContextFactory)('MULTI_ACCOUNT_LIST_UPDATER'),
            n = e.dispatch(t(p()({ showToast: !1 }, $.a.AccessDeniedByBouncer, { customAction: ne.a }))),
            r = function (t) {
              return e.dispatch(t).catch(n)
            }
          ;(window.requestIdleCallback || window.requestAnimationFrame)(function () {
            r(Object(te.d)()).then(function () {
              Object(te.b)(e.getState()).forEach(r)
            })
          })
        },
        We = n('Sksh'),
        Xe = (n('KqXw'), n('MvUL'), n('Sp5X')),
        qe = ['/login/error', '/i/sms_login', '/i/flow/lite_login', '/i/flow/login', '/i/flow/signup'],
        Ye = function (e, t) {
          var n = !Q.m(t),
            r = Q.h(t),
            i = Q.g(t),
            o = Xe.a.location.pathname
          ;-1 === qe.indexOf(o) &&
            (n && r ? Xe.a.replace('/i/sms_login') : n && i && Xe.a.replace('/i/flow/lite_login'))
        },
        Ge = n('yiKp'),
        Je = n.n(Ge),
        Ze = n('Mx3A'),
        Qe = n('qzfk'),
        $e = n('YeIG'),
        et = n('TpKd'),
        tt = { page: 'external', action: 'referred' },
        nt = function (e, t, n, r) {
          var i = function (e) {
              return r.dispatch(Object(x.createLocalApiErrorHandlerWithContextFactory)(e)({}))
            },
            o = Xe.a && Xe.a.location.query,
            a = Ze.b({ query: o, httpReferer: document.referrer || '', requestUrl: window.location.href })
          if (Object($e.a)(a)) return Promise.resolve()
          if (a.referer && !fe.b.isExternalUrl(a.referer) && !fe.b.isInternalRedirect(a.referer))
            return Promise.resolve()
          a.referer || (a.referer = ''),
            a.referral_details_str || (a.referral_details_str = ''),
            a.referral_type || (a.referral_type = 0)
          var c = Object(et.a)(t)
          c && (a.external_referer_cookie_value = c)
          var s = a.referral_type === Ze.a.Access,
            u = Je()(Je()({}, tt), {}, { client: Object(Qe.a)().clientName })
          c && s && (u.action = 'set_access_referer_cookie')
          var l,
            d,
            p = n.createEventObject(u, 'client_event', a),
            f = n.createPayload([p])
          ;(l = a
            ? e.Ocf.referer({
                landing_url: a.url,
                referral_details: a.referral_details_str || void 0,
                referrer_url: a.referer || void 0,
              }).catch(function () {
                return i('OCF_EXTERNAL_REFERER')
              })
            : Promise.resolve()),
            (d = a
              ? e.Attribution.recordUserEvent({ event: 'open', referring_link_url: a.url }).catch(function () {
                  return i('ATTRIBUTION_EXTERNAL_REFERER')
                })
              : Promise.resolve())
          var h = e.Jot.externalReferer(f)
            .then(function (e) {
              e && Object(et.c)(t, e[0])
            })
            .catch(function () {
              return i('SCRIBE_EXTERNAL_REFERER')
            })
          return Promise.all([h, l, d])
        },
        rt = n('O6Yq'),
        it = n('muX9'),
        ot = n('zCf4')
      var at = function () {
          Object(ot.g)()
          var e,
            t = (Te.canUseDOM && (e = window.location.href), e ? Object(rt.a)(e) : null)
          return t ? F.a.createElement(it.a, null, F.a.createElement('link', { href: t, rel: 'canonical' })) : null
        },
        ct =
          (n('ho0z'),
          Object(H.a)()
            .propsFromState(function () {
              return { loginReturnPath: Q.r }
            })
            .withAnalytics({ component: 'smartlock_prompt' })),
        st = n('6oVL'),
        ut = n('SrIh'),
        lt = n('BnI0'),
        dt = n('pQ3Z'),
        pt = n.n(dt),
        ft = n('cnVF'),
        ht = n('MWbm'),
        mt = n('mrHL'),
        vt = ['/settings', '/signup', '/login/error', '/i/flow/signup', '/login/check'],
        bt = (function (e) {
          R()(n, e)
          var t = N()(n)
          function n(e, r) {
            var i
            return (
              l()(this, n),
              ((i = t.call(this, e, r)).state = { autoSubmit: !1, password: '', smartLockDisabled: !1, userName: '' }),
              (i._smartLockSupported =
                !!(window.PasswordCredential && navigator.credentials && navigator.credentials.get) &&
                !r.loggedInUserId),
              (i._isSmartLockDisabledFromCookie =
                '1' === e.getCookie({ featureSwitches: r.featureSwitches, cookieName: ft.y })),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  '/login/error' === this.props.location.pathname
                    ? Object(lt.a)(this.context.featureSwitches)
                    : this._checkShouldDisplayPrompt()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  pt()(e.location, this.props.location) || this._checkShouldDisplayPrompt()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.loginReturnPath,
                    t = this.state,
                    n = t.autoSubmit,
                    r = t.password,
                    i = t.userName
                  return this._shouldDisplaySmartLockPrompt()
                    ? F.a.createElement(
                        ht.a,
                        { style: yt.hidden },
                        F.a.createElement(
                          st.a,
                          { autoSubmit: n, loginReturnPath: e },
                          F.a.createElement('input', { name: 'session[username_or_email]', type: 'hidden', value: i }),
                          F.a.createElement('input', { name: 'session[password]', type: 'hidden', value: r }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_scribeAction',
                value: function (e, t) {
                  this.props.analytics.scribe(Je()(Je()({}, t), {}, { action: e }))
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
                      i = !0
                    setTimeout(function () {
                      return (i = !1)
                    }, 250),
                      navigator.credentials.get({ mediation: r, password: !0 }).then(
                        function (t) {
                          if (t) {
                            i
                              ? e._scribeAction('select', { element: 'unmediated' })
                              : e._scribeAction('select', { element: 'mediated' })
                            var n = t.id,
                              r = t.password
                            e.setState({ autoSubmit: !0, userName: n, password: r })
                          } else
                            e._smartLockSupported &&
                              e.setState({ smartLockDisabled: !0 }, function () {
                                return Object(lt.a)(e.context.featureSwitches)
                              }),
                              i
                                ? e._scribeAction('cancel', { element: 'no_credentials' })
                                : e._scribeAction('cancel', { element: 'with_credentials' })
                        },
                        function (e) {
                          e &&
                            'NotSupportedError' !== e.name &&
                            'NotAllowedError' !== e.name &&
                            'InvalidStateError' !== e.name &&
                            Object(ut.a)(e)
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
                    i =
                      '/login' === n ||
                      (!this._isSmartLockDisabledFromCookie &&
                        !r &&
                        !vt.some(function (e) {
                          return e === n
                        }) &&
                        !this.context.featureSwitches.isTrue('stateful_login_enabled'))
                  return !t && this._smartLockSupported && i
                },
              },
            ]),
            n
          )
        })(F.a.Component)
      p()(bt, 'contextType', Y.a), p()(bt, 'defaultProps', { getCookie: mt.d })
      var yt = be.a.create(function (e) {
          return { hidden: { display: 'none' } }
        }),
        gt = Object(q.a)(ct(bt)),
        _t = n('HPNB'),
        St = n('+Kfv'),
        kt = n('1YZw'),
        wt = Object(H.a)()
          .propsFromState(function () {
            return { toast: kt.d }
          })
          .propsFromActions(function () {
            return { onClose: kt.c }
          }),
        Et = n('ZB2A'),
        Tt = 'toast',
        Ct = n('cHvH'),
        Ot = n('0FVZ'),
        It = n('XTym'),
        At = wt(function (e) {
          var t = e.onClose,
            n = e.toast,
            r = Object(ot.g)(),
            i = Object(Et.b)(r),
            o = F.a.useMemo(
              function () {
                return { viewType: i }
              },
              [i],
            )
          return n
            ? F.a.createElement(Ct.a, null, function (e) {
                var r = e.windowWidth,
                  i = _t.a.shouldRenderAsModal(r) ? Ot.a.ModalToasts : Ot.a.Toasts
                return F.a.createElement(
                  St.a,
                  { behavioralEventContext: o },
                  F.a.createElement(It.a, {
                    LayerComponent: i,
                    action: n.action,
                    ariaOnly: n.ariaOnly,
                    autoDismissDelay: n.autoDismissDelay,
                    behavioralEventEntityToken: n.behavioralEventEntityToken,
                    key: n.id,
                    onClose: t,
                    testID: Tt,
                    text: n.text,
                    withAutoDismiss: n.withAutoDismiss,
                    withClearButton: n.withClearButton,
                  }),
                )
              })
            : null
        }),
        Pt = r,
        xt = ue.a,
        Lt = _e,
        jt = ke.a,
        Dt = He,
        Mt = ze.a,
        Rt = gt,
        Bt = at,
        Nt = At,
        Ut = a,
        Ft = ae,
        Kt = function (e, t) {
          var n,
            r = Object.keys(e),
            i = !1,
            o = function () {
              i ||
                ((n = se()(t)),
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
            C(o, [m, v]),
            function () {
              ;(i = !0), I(o), n && n.unbind(r)
            }
          )
        },
        Ht = Ee,
        zt = Ve,
        Vt = Ye,
        Wt = nt,
        Xt = Se.d,
        qt = L,
        Yt = J,
        Gt = Z.a,
        Jt = Ie,
        Zt = We.a
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return z
      })
      var r = n('yiKp'),
        i = n.n(r),
        o = n('VrFO'),
        a = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        b = (n('2G9S'), n('KqXw'), n('LJOr'), n('ERkP')),
        y = n.n(b),
        g = n('sTyV'),
        _ = n('6/RC'),
        S = n('sebV'),
        k = n('G6rE'),
        w = n('rxPX'),
        E = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: k.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        T = n('3XMw'),
        C = n.n(T),
        O = n('OrGc'),
        I = n('QK5w'),
        A = n('aITJ'),
        P = n('MWbm'),
        x = n('TnY3'),
        L = n('rHpw'),
        j = n('t62R'),
        D = n('v6aA'),
        M = n('uScj'),
        R = n('fs1G'),
        B = n('BcsE'),
        N = n('VPAj'),
        U = C.a.b47e760d,
        F = C.a.fd2c7b43,
        K = new M.a(),
        H = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        z = function (e) {
          return _.canUseDOM ? K.subscribe(e).unsubscribe : R.a
        },
        V = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(l()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  o = r.history,
                  a = r.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        K.getListeners().length
                          ? K.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    v()(t, O.e.search, c()),
                    v()(t, O.e.goToUser, c('@')),
                    v()(t, O.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    v()(t, O.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    v()(t, O.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  u = function (e) {
                    var t
                    return (
                      (t = {}),
                      v()(t, O.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      v()(t, O.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      v()(t, O.e.goLists, function () {
                        return o.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  l = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  d =
                    a && l
                      ? i()(
                          i()({}, u(a)),
                          {},
                          v()({}, O.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : a
                      ? u(a)
                      : {},
                  p = i()(
                    i()(i()({}, s), d),
                    {},
                    ((n = {}),
                    v()(n, O.e.goHome, function () {
                      return o.push('/home')
                    }),
                    v()(n, O.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    v()(n, O.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    v()(n, O.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    v()(n, O.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    v()(n, O.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    v()(n, O.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    v()(n, O.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    v()(n, O.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  f = e.props.loggedInUserScreenName ? p : s
                e._unbindKeyboardShortcuts = Object(g.a)(f)
              }),
              v()(l()(e), '_handleKeyDown', function (t) {
                H(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              v()(l()(e), '_handleKeyUp', function (t) {
                if (!H(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(B.a)(n) && Date.now() - n < 500,
                    i = Object(I.a)({}, { location: e.props.location })
                  r && i ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    A.b.isKaiOS() &&
                      S.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    A.b.isKaiOS() &&
                      S.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? y.a.createElement(
                        P.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: L.a.visuallyHidden },
                        y.a.createElement(j.b, null, U),
                        y.a.createElement(j.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, F),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(V, 'contextType', D.a)
      var W = E(V),
        X = _.canUseDOM ? Object(x.a)(W) : Object(N.a)(null)
      t.a = X
    },
  },
])
//# sourceMappingURL=WIPED
