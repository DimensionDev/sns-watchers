;(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    '3cwy': function (e, t, n) {
      'use strict'
      var r = n('fHOo')
      t.a = function () {
        return Object(r.a)()
      }
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('2G9S')
      var r = n('1YZw'),
        a = n('pXBW'),
        o = n('3XMw'),
        c = n.n(o),
        i = n('SrIh'),
        l = c.a.a5d4fda0,
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof a.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(i.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(r.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '7FtF': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        v = n('P1r1'),
        E = n('G6rE'),
        w = n('rxPX'),
        O = n('0KEI'),
        S = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: v.o, loggedInUser: E.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: v.f,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = n('v//M'),
        C = n('3XMw'),
        k = n.n(C),
        P = n('M2mT'),
        x = 'settingsDetailSave',
        D = n('mw9i'),
        I = n('0yYu'),
        A = n('/yvb'),
        j = n('rHpw')
      function R(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var L = k.a.i2209530,
        F = (function (e) {
          u()(n, e)
          var t = R(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return g.a.createElement(_.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              b()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.onSubmit,
                  a = t.submitDisabled,
                  o = t.submitLabel,
                  c = t.submitType,
                  i = t.withMarginBottom
                return g.a.createElement(
                  D.a,
                  { style: [B.contentRoot, i && B.withMarginBottom] },
                  n,
                  r
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(I.a, null),
                        g.a.createElement(
                          D.a,
                          { style: B.buttonContainer },
                          g.a.createElement(A.a, { disabled: a, onPress: r, style: B.button, testID: x, type: c }, o),
                        ),
                      )
                    : null,
                )
              }),
              b()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'getBackLocation',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return t && t.pathname === n ? '/' : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUser,
                    n = e.onBackClick,
                    r = e.rightControl,
                    a = e.screenType,
                    o = e.secondaryBar,
                    c = e.title,
                    i = e.withBottomBorder,
                    l = this.getBackLocation(),
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return g.a.createElement(
                    P.a,
                    {
                      backLocation: l,
                      onBackClick: n,
                      rightControl: r,
                      screenType: a,
                      secondaryBar: o,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
                      title: c,
                      withBottomBorder: i,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(F, 'defaultProps', { submitLabel: L, submitType: 'brandFilled', withMarginBottom: !0 })
      var B = j.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
          },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 0,
            marginHorizontal: 'auto',
            paddingVertical: e.spaces.space12,
            paddingHorizontal: 0,
          },
          button: { marginVertical: 0, marginHorizontal: e.spaces.space12 },
          withMarginBottom: {
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(j.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = S(F)
    },
    ALyI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsVideoAutoplay', function () {
          return K
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('MvUL'), n('KqXw'), n('ERkP')),
        g = n.n(y),
        v = n('FPOR'),
        E = n('zh9S'),
        w = n('hqKg'),
        O = n('0KEI'),
        S = n('oEGd'),
        _ = n('H9MA'),
        C = Object(w.createSelector)(_.f, _.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        k = {
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateVideoAutoplay: _.i,
        },
        P = Object(S.g)(C, k),
        x = n('45mF'),
        D = n('3XMw'),
        I = n.n(D),
        A = n('7FtF'),
        j = n('3cwy'),
        R = n('MWbm'),
        L = n('Y3cQ'),
        F = n('t62R'),
        B = n('6v1f')
      function T(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function M(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var N = I.a.a776eed7,
        z = I.a.ede134f2,
        W = I.a.i859a9d3,
        U = { page: 'settings', section: 'autoplay' },
        V = function (e) {
          return { value: e, label: v.a[e] }
        },
        K = (function (e) {
          u()(n, e)
          var t = M(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(l()(o), '_handleItemChanged', function (e, t) {
                var n = o.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.scribeAction,
                  c = n.updateVideoAutoplay
                a(H(H({}, U), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  c(B.b[t]).catch(r(H(H({}, Object(x.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(V(B.b.Always)),
              B.c && o._options.push(V(B.b.WiFiOnly)),
              o._options.push(V(B.b.Off)),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.dataSaverMode,
                    n = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(U),
                    n(U),
                    (!t && Object(j.a)()) || this.props.history.replace('/settings/data')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.videoAutoplay
                  return g.a.createElement(
                    A.a,
                    { location: t, title: N },
                    g.a.createElement(
                      R.a,
                      null,
                      g.a.createElement(L.a, {
                        description: g.a.createElement(
                          g.a.Fragment,
                          null,
                          ''.concat(z, ' '),
                          g.a.createElement(F.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, W),
                        ),
                        label: N,
                        name: 'video_autoplay',
                        onChange: this._handleItemChanged,
                        options: this._options,
                        value: n || B.a,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.default = P(K)
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'b', function () {
          return l
        }),
        n.d(t, 'd', function () {
          return s
        }),
        n.d(t, 'e', function () {
          return f
        })
      n('yH/f')
      var r = n('SrIh'),
        a = n('JbbX'),
        o = 1e3,
        c = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function i(e) {
        var t = Object(a.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? c.AcceptAllCookies
                : t[2]
                ? c.RefuseNonEssentialCookies
                : (Object(r.a)('Invalid consent signal state'), c.Invalid)
              : c.NotSet
            : c.Invalid
          : c.NotSet
      }
      function l(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function s(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function f(e) {
        var t = Object(a.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        l = n.n(i),
        s = n('sNn6'),
        u = n('rHpw'),
        d = n('MWbm')
      function f(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var h = u.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: p(
            p({}, u.a.absoluteFillObject),
            {},
            {
              borderRightStyle: 'solid',
              borderRightWidth: e.borderWidths.medium,
              borderRightColor: e.colors.primary,
              zIndex: 1,
            },
          ),
        }
      })
      t.a = function (e) {
        var t = e.children,
          n = c()(e, ['children'])
        return l.a.createElement(s.a, n, function (e) {
          return l.a.createElement(
            d.a,
            { style: e && h.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(d.a, { pointerEvents: 'none', style: h.overlay }) : null,
          )
        })
      }
    },
    ClNT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        v = n('k49u'),
        E = n('rxPX'),
        w = n('0KEI'),
        O = Object(E.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        S = n('kGix'),
        _ = n('v//M'),
        C = n('5FtR')
      function k(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var P = (function (e) {
          u()(n, e)
          var t = k(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { verificationRequired: !1 }),
              b()(l()(e), '_handleFetch', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    r(
                      ((t = {}),
                      b()(t, v.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      b()(t, v.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      b()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.renderChildren,
                    r = this.state.verificationRequired,
                    a = t === S.a.FAILED && r
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    a
                      ? g.a.createElement(C.a, { to: '/i/flow/verify_account_ownership' })
                      : g.a.createElement(_.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        x = O.forwardRef(P)
      t.a = x
    },
    FPOR: function (e, t, n) {
      'use strict'
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = n('6v1f'),
        i = n('3XMw'),
        l = n.n(i),
        s = l.a.g1888dc1,
        u = l.a.f724d1a9,
        d = l.a.cf6472c1
      t.a = ((r = {}), o()(r, c.b.Off, s), o()(r, c.b.WiFiOnly, u), o()(r, c.b.Always, d), r)
    },
    KQzH: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = (n('hBvt'), n('ERkP')),
        c = n.n(o),
        i = n('BUB3'),
        l = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return c.a.createElement(i.a, { exact: !0, path: e.link }, function (t) {
          var n = l.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return c.a.createElement(s.a, a()({ isActive: t }, e, { label: c.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        E = n('ERkP'),
        w = n.n(E),
        O = n('HPNB'),
        S = n('VAZu'),
        _ = n('wiP2'),
        C = n('Es6L'),
        k = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function P(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: x(x({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        I = n('MWbm'),
        A = n('yw4N'),
        j = n('TnY3'),
        R = n('cHvH'),
        L = n('3xLC')
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var B = (function (e) {
        f()(n, e)
        var t = F(n)
        function n() {
          var e
          c()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            g()(u()(e), '_renderChildren', function () {
              var t = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? w.a.createElement(
                    I.a,
                    { style: D.fill },
                    w.a.createElement(A.a, { style: D.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
                  )
                : t
            }),
            e
          )
        }
        return (
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e = this
                return w.a.createElement(R.a, null, function (t) {
                  var n = t.windowWidth
                  return O.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n =
                    (e.leftControl,
                    e.screenType,
                    e.showSubtitleOnRoot,
                    e.showSubtitleOnWideDetail,
                    e.withBottomBorder,
                    e.withDetailOpen,
                    a()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  Object(C.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : w.a.createElement(_.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this.context.rootDetailPerColumnScroll
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                  this._renderChildren(),
                )
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.isTwoColumnLayout,
                  n = this.props,
                  r = n.SideNavButton,
                  a = n.TabBar,
                  o = n.TeamsSwitcher,
                  c = n.backLocation,
                  i = n.documentTitle,
                  l = n.headerless,
                  s = n.history,
                  u = n.leftControl,
                  d = n.middleControl,
                  f = n.onBackClick,
                  p = n.rightControl,
                  h = n.screenType,
                  m = n.searchBoxOptions,
                  b = n.secondaryBar,
                  y = n.showSubtitleOnRoot,
                  g = n.showSubtitleOnWideDetail,
                  E = n.subtitle,
                  O = n.title,
                  C = n.titleIconCell,
                  k = n.titleIconCellSize,
                  P = n.withBottomBorder,
                  x = n.withDetailOpen,
                  A = n.withSearchBox,
                  j = n.withTweetButton,
                  R = 'root' === h,
                  L = 'secondaryRoot' === h,
                  F = 'primaryDetail' === h,
                  B = (F && g) || (R && y),
                  T = R || (F && t),
                  H = R ? v.c : F ? v.a : void 0,
                  M = w.a.createElement(
                    I.a,
                    { style: D.appBarContainer },
                    w.a.createElement(S.a, {
                      backLocation: c,
                      fixed: !1,
                      hideBackButton: T,
                      history: s,
                      leftControl: u,
                      middleControl: d,
                      onBackClick: f,
                      rightControl: p,
                      secondaryBar: b,
                      subtitle: B ? E : void 0,
                      title: O,
                      titleDomId: H,
                      titleIconCell: C,
                      titleIconCellSize: k,
                      withBottomBorder: P,
                    }),
                  ),
                  N =
                    R || (L && x)
                      ? null
                      : w.a.createElement(_.a.Configure, {
                          SideNavButton: r,
                          TabBar: a,
                          TeamsSwitcher: o,
                          backLocation: c,
                          documentTitle: i,
                          headerless: l,
                          middleControl: d,
                          onBackClick: f,
                          rightControl: p,
                          searchBoxOptions: m,
                          subtitle: E,
                          title: O,
                          withSearchBox: A,
                          withTweetButton: j,
                        })
                return w.a.createElement(w.a.Fragment, null, N, M)
              },
            },
          ]),
          n
        )
      })(w.a.Component)
      g()(B, 'contextType', L.a),
        g()(B, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(j.a)(B)
    },
    NyKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return b
      }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'g', function () {
          return E
        }),
        n.d(t, 'h', function () {
          return w
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'c', function () {
          return S
        }),
        n.d(t, 'e', function () {
          return _
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i = (n('yH/f'), n('LW0h'), n('2G9S'), n('kGix')),
        l = n('Ssj5'),
        s = n('oEOe')
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = 'userData',
        p = 'rweb/'.concat(f),
        h = Object(s.a)(p, 'FETCH_DOWNLOADS'),
        m = Object(s.a)(p, 'CREATE_DOWNLOAD'),
        b = Object.freeze({
          NEW: 'NEW',
          INPROGRESS: 'INPROGRESS',
          INPROGRESS_ASYNC: 'INPROGRESS_ASYNC',
          ZIPPING: 'ZIPPING',
          PUBLISHING: 'PUBLISHING',
          NOTIFYING: 'NOTIFYING',
          COMPLETE: 'COMPLETED',
          FAILED: 'FAILED',
          NONE: 'NONE',
        }),
        y = [b.NEW, b.INPROGRESS, b.INPROGRESS_ASYNC, b.ZIPPING, b.PUBLISHING, b.NOTIFYING],
        g = { fetchStatus: i.a.None, downloads: { all: [], nonFailed: [] } }
      l.a.register(
        c()({}, f, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case h.SUCCESS:
              var r = n.payload || [],
                o = r.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return d(
                d({}, t),
                {},
                { fetchStatus: i.a.LOADED, downloads: d(d({}, t.downloads), {}, { all: r, nonFailed: o }) },
              )
            case h.REQUEST:
              return d(d({}, t), {}, { fetchStatus: i.a.LOADING })
            case h.FAILURE:
              return d(d({}, t), {}, { error: n.payload, fetchStatus: i.a.FAILED })
            case m.SUCCESS:
              return d(
                d({}, t),
                {},
                {
                  downloads: d(
                    d({}, t.downloads),
                    {},
                    { nonFailed: (e = [{ status: 'INPROGRESS' }]).concat.apply(e, a()(t.downloads.nonFailed)) },
                  ),
                },
              )
            case m.FAILURE:
              return d(d({}, t), {}, { fetchStatus: i.a.NONE })
            default:
              return t
          }
        }),
      )
      var v = function (e) {
          return e.userData.downloads
        },
        E = function (e) {
          return e.userData.fetchStatus
        },
        w = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        O = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.fetchDownloads })({
              actionTypes: h,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        S = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.createDataDownload })({
              actionTypes: m,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        _ = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(s.d)(t, { params: e, request: a.UserData.markDataAsDownloaded })('MARK_DATA_AS_DOWNLOADED')
          }
        }
    },
    O2Os: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DownloadTwitterArchiveDetailedScreen', function () {
          return oe
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        g = n.n(y),
        v = n('zh9S'),
        E = n('NyKK'),
        w = n('rxPX'),
        O = n('0KEI'),
        S = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: E.g, downloads: E.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: E.d,
              googleAnalyticsPageView: v.a,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: E.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        _ = n('XYIJ'),
        C = (n('6U7i'), n('3XMw')),
        k = n.n(C),
        P = n('aITJ'),
        x = n('MWbm'),
        D = n('/yvb'),
        I = n('eb3s'),
        A = n('855f')
      function j(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var R = k.a.cfd2f35d,
        L = k.a.fc5bfd95,
        F = k.a.gee8110d,
        B = k.a.c326f156,
        T = k.a.c9fe9b56,
        H = k.a.j54b679a,
        M = k.a.ac63840c,
        N = k.a.bcd9b0ed,
        z = (function (e) {
          u()(n, e)
          var t = j(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { showConfirmation: !1 }),
              b()(l()(e), '_shouldDisplayConfirmation', !1),
              b()(l()(e), '_handleCancel', function () {
                e.setState({ showConfirmation: !1 })
              }),
              b()(l()(e), '_handleNeedsConfirmationActionCellPress', function () {
                e.setState({ showConfirmation: !0 })
              }),
              b()(l()(e), '_handleConfirm', function (t) {
                e.setState({ showConfirmation: !1 }), e.props.onConfirm()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._shouldDisplayConfirmation = P.b.isMobileOS()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabled,
                    r = e.onConfirm,
                    a = e.url,
                    o = a.size_b,
                    c = a.url,
                    i = H({ size: n.getSizeLabel(o) }),
                    l = t ? B : F
                  return g.a.createElement(
                    x.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? g.a.createElement(
                          x.a,
                          null,
                          g.a.createElement(
                            D.a,
                            {
                              disabled: t,
                              onPress: this._handleNeedsConfirmationActionCellPress,
                              size: 'small',
                              style: _.a.narrowButton,
                              type: 'brandFilled',
                            },
                            l,
                          ),
                          this.state.showConfirmation && !t
                            ? g.a.createElement(I.a, {
                                cancelButtonLabel: R,
                                confirmButtonLabel: L,
                                confirmButtonLink: { pathname: c || '', external: !0 },
                                headline: T,
                                onCancel: this._handleCancel,
                                onConfirm: this._handleConfirm,
                                text: i,
                              })
                            : null,
                        )
                      : g.a.createElement(
                          D.a,
                          {
                            disabled: t,
                            link: c ? { pathname: c, external: !0 } : void 0,
                            onPress: r,
                            size: 'small',
                            style: _.a.narrowButton,
                            type: 'brandFilled',
                          },
                          l,
                        ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(z, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? M({ size: A.a.getFormattedCount(t) })
          : N({ size: A.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var W = n('7FtF'),
        U = n('ClNT'),
        V = n('t62R'),
        K = n('rHpw'),
        G = n('v6aA')
      function Y(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var X = k.a.f56af9cc,
        q = k.a.b2ed92c3,
        Z = k.a.ce5d2c46,
        Q = k.a.dd9ec81f,
        J = k.a.c7227886,
        $ = k.a.a0c3f812,
        ee = k.a.ba2e82a1,
        te = k.a.eea30bb4,
        ne = k.a.f2cde471,
        re = k.a.b7ce9dbe,
        ae = k.a.fbc92b61,
        oe = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), '_render', function () {
                var t = e.props.downloads.nonFailed
                return t.length ? g.a.createElement(x.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              b()(l()(e), '_renderDownloadItems', function (t, n) {
                return g.a.createElement(
                  x.a,
                  { key: n },
                  t.urls && 'COMPLETED' === t.status
                    ? t.urls.map(e._renderDownloadButtons.bind(l()(e), t))
                    : e._renderUnavailableButton(t),
                )
              }),
              b()(l()(e), '_handleConfirm', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.createLocalApiErrorHandler,
                    o = n.fetchDownloads
                  !t.downloaded_at && t.url && e.props.markDataAsDownloaded({ url: t.url }).then(o).catch(a()),
                    r.scribe({ element: 'download_button', action: 'click' })
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
                  var e = this.props,
                    t = e.analytics,
                    n = e.googleAnalyticsPageView
                  t.scribePageImpression(), n(t.contextualScribeNamespace)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchDownloads,
                    n = e.fetchStatus,
                    r = e.location
                  return g.a.createElement(
                    W.a,
                    { location: r, title: X },
                    g.a.createElement(U.a, { fetch: t, fetchStatus: n, renderChildren: this._render }),
                  )
                },
              },
              {
                key: '_renderEmptyState',
                value: function () {
                  return g.a.createElement(
                    x.a,
                    { style: ce.emptyState },
                    g.a.createElement(V.b, { size: 'title4' }, Q),
                    g.a.createElement(V.b, { color: 'gray700', style: ce.emptyStateDescription }, $),
                    g.a.createElement(
                      D.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: _.a.narrowButton,
                        type: 'brandFilled',
                      },
                      J,
                    ),
                  )
                },
              },
              {
                key: '_renderDownloadButtons',
                value: function (e, t, n, r) {
                  var a = n + 1,
                    o = r.length,
                    c = !(null == t || !t.url)
                  return g.a.createElement(
                    x.a,
                    { key: ''.concat(a), style: [_.a.narrowButtonRow, _.a.bottomBorder, _.a.labelContainer] },
                    g.a.createElement(
                      x.a,
                      null,
                      g.a.createElement(V.b, { weight: 'bold' }, ae({ currentIndex: a, count: o })),
                      e.generated
                        ? g.a.createElement(V.b, { color: 'gray700' }, te({ date: ee(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? g.a.createElement(V.b, { color: 'gray700' }, ne({ date: ee(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? g.a.createElement(V.b, { color: 'gray700' }, re({ size: z.getSizeLabel(t.size_b) }))
                        : null,
                    ),
                    g.a.createElement(z, { disabled: !c, onConfirm: this._handleConfirm(t), url: t }),
                  )
                },
              },
              {
                key: '_renderUnavailableButton',
                value: function (e) {
                  return g.a.createElement(
                    x.a,
                    { style: [_.a.narrowButtonRow, _.a.bottomBorder, _.a.labelContainer] },
                    g.a.createElement(V.b, { weight: 'bold' }, ae({ currentIndex: 1, count: 1 })),
                    g.a.createElement(
                      D.a,
                      { disabled: !0, size: 'small', style: _.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? q : Z,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(oe, 'contextType', G.a)
      var ce = K.a.create(function (e) {
        return {
          emptyState: {
            display: 'flex',
            paddingHorizontal: e.spaces.space20,
            paddingVertical: e.spaces.space40,
            alignItems: 'center',
          },
          emptyStateDescription: { paddingVertical: e.spaces.space20 },
        }
      })
      t.default = S(oe)
    },
    'Q++C': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DataUsageScreen', function () {
          return K
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = n('ERkP'),
        g = n.n(y),
        v = n('FPOR'),
        E = n('P1r1'),
        w = n('rxPX'),
        O = n('0KEI'),
        S = n('H9MA'),
        _ = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: S.c, videoAutoplay: S.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: S.b,
              updateDataSaverMode: S.g,
              updateSettings: E.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        C = n('45mF'),
        k = n('6v1f'),
        P = n('3XMw'),
        x = n.n(P),
        D = n('yoO3'),
        I = n('7FtF'),
        A = n('3cwy'),
        j = 'dataSaverBooleanItem',
        R = n('v6aA'),
        L = n('xHsv'),
        F = n('cCdp'),
        B = n('csss')
      function T(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function M(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var N = x.a.eafe3287,
        z = x.a.d76fe4fc,
        W = x.a.a57a341b,
        U = x.a.d88102cf,
        V = x.a.a776eed7,
        K = (function (e) {
          u()(n, e)
          var t = M(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(l()(o), '_handleDataSaverChanged', function (e, t) {
                var n = o.props,
                  r = n.analytics,
                  a = n.createLocalApiErrorHandler,
                  c = n.updateDataSaverMode
                r.scribe({ element: e, action: t ? 'on' : 'off' }),
                  c({ enabled: t }).catch(a(H(H({}, Object(C.a)()), {}, { showToast: !0 })))
              }),
              (o._showVideoAutoplaySetting = Object(A.a)()),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(0, this.props.fetchDataUsageSettingsIfNeeded)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.dataSaverMode,
                    n = e.location,
                    r = e.videoAutoplay
                  return g.a.createElement(
                    D.a,
                    null,
                    g.a.createElement(
                      I.a,
                      { location: n, screenType: 'secondaryDetail', title: N },
                      g.a.createElement(L.a, { description: z }),
                      g.a.createElement(F.a, {
                        checked: t,
                        helpText: U,
                        label: W,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: j,
                      }),
                      this._showVideoAutoplaySetting &&
                        g.a.createElement(B.a, {
                          description: v.a[r || k.a],
                          disabled: t,
                          label: V,
                          link: '/settings/autoplay',
                        }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(K, 'contextType', R.a)
      t.default = _(K)
    },
    REKA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccessibilityScreen', function () {
          return ae
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        v = n('ye3X'),
        E = n('FPOR'),
        w = n('6/RC'),
        O = n('rxPX'),
        S = n('0KEI'),
        _ = n('P1r1'),
        C = n('H9MA'),
        k = Object(O.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: _.h,
              autoPollNewTweets: _.i,
              dataSaverMode: C.c,
              reducedMotionEnabled: _.x,
              videoAutoplay: C.f,
              highContrastEnabled: _.q,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              updateSettings: _.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        P = n('6v1f'),
        x = n('3XMw'),
        D = n.n(x),
        I = n('yoO3'),
        A = n('7FtF'),
        j = n('3cwy'),
        R = 'accessibilityScreen',
        L = n('MWbm'),
        F = n('38/B'),
        B = n('rHpw'),
        T = n('xHsv'),
        H = n('6vad'),
        M = n('cCdp'),
        N = n('0yYu'),
        z = n('csss'),
        W = n('v6aA')
      function U(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var V = D.a.e3719c15,
        K = D.a.a5208fad,
        G = D.a.d5b646bd,
        Y = D.a.jfe6a3a0,
        X = D.a.add55c97,
        q = D.a.a6d5b010,
        Z = D.a.e8c72272,
        Q = D.a.dba2cdd1,
        J = D.a.d070244e,
        $ = D.a.icfa5e8b,
        ee = D.a.ae41b002,
        te = D.a.e82b294e,
        ne = D.a.ea284ab8,
        re = D.a.a776eed7,
        ae = (function (e) {
          u()(n, e)
          var t = U(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(
                l()(o),
                '_showAltTextNudgeSetting',
                o.context.featureSwitches.allTrue([
                  'responsive_web_alt_text_nudges_enabled',
                  'responsive_web_alt_text_nudges_settings_enabled',
                ]),
              ),
              b()(
                l()(o),
                '_showAutoPollingSetting',
                o.context.featureSwitches.isTrue('responsive_web_settings_timeline_polling_enabled'),
              ),
              b()(l()(o), '_handleReducedMotionChanged', function (e, t) {
                o._handleSettingChanged(e, t), F.a.setReducedMotion(t)
              }),
              b()(l()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), B.a.setHighContrast(t)
              }),
              b()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  r = n.analytics,
                  a = n.createLocalApiErrorHandler,
                  c = n.updateSettings,
                  i = t ? v.a.prompt : null
                r.scribe({ element: ''.concat(e, '_').concat(i || 'off'), action: 'selected' }),
                  c(b()({}, e, i)).catch(a({ showToast: !0 }))
              }),
              b()(l()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  r = n.analytics,
                  a = n.createLocalApiErrorHandler,
                  c = n.updateSettings
                r.scribe({ element: e, action: t ? 'on' : 'off' }), c(b()({}, e, t)).catch(a({ showToast: !0 }))
              }),
              (o._showVideoAutoplaySetting = Object(j.a)()),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.altTextNudgeType,
                    n = e.dataSaverMode,
                    r = e.highContrastEnabled,
                    a = e.location,
                    o = e.reducedMotionEnabled,
                    c = e.videoAutoplay,
                    i = w.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return g.a.createElement(
                    I.a,
                    null,
                    g.a.createElement(
                      A.a,
                      { location: a, screenType: 'secondaryDetail', title: V },
                      g.a.createElement(
                        L.a,
                        { testID: R },
                        g.a.createElement(T.a, { description: K }),
                        g.a.createElement(H.b, { text: G }),
                        g.a.createElement(M.a, {
                          checked: r,
                          helpText: Q,
                          label: Z,
                          name: 'highContrastEnabled',
                          onChange: this._handleHighContrastChanged,
                        }),
                      ),
                      this._showVideoAutoplaySetting
                        ? g.a.createElement(
                            L.a,
                            null,
                            g.a.createElement(N.a, null),
                            g.a.createElement(H.b, { text: Y }),
                            g.a.createElement(M.a, {
                              checked: o || i,
                              disabled: i,
                              helpText: i ? ee : $,
                              label: J,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            g.a.createElement(z.a, {
                              description: E.a[c || P.a],
                              disabled: n,
                              label: re,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextNudgeSetting
                        ? g.a.createElement(
                            L.a,
                            null,
                            g.a.createElement(N.a, null),
                            g.a.createElement(H.b, { text: X }),
                            g.a.createElement(M.a, {
                              checked: t === v.a.prompt,
                              helpText: ne,
                              label: te,
                              name: 'altTextNudgeType',
                              onChange: this._handleAltTextNudgeTypeChanged,
                            }),
                          )
                        : null,
                      this._maybeRenderTimelineSettings(),
                    ),
                  )
                },
              },
              {
                key: '_maybeRenderTimelineSettings',
                value: function () {
                  var e = this.props.autoPollNewTweets
                  return this._showAutoPollingSetting
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(N.a, null),
                        g.a.createElement(H.b, { text: q }),
                        g.a.createElement(M.a, {
                          checked: e,
                          helpText: 'TBD Copy',
                          label: '[TBD Copy] Poll for new Tweets',
                          name: 'autoPollNewTweets',
                          onChange: this._handleSettingChanged,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(ae, 'contextType', W.a)
      t.default = k(ae)
    },
    XYIJ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('rHpw')
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function (e) {
          return { borderBottomColor: e.colors.borderColor, borderBottomStyle: 'solid', borderBottomWidth: '1px' }
        },
        s = o.a.create(function (e) {
          return {
            labelContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            titleCase: { textTransform: 'capitalize' },
            floatingLink: { paddingLeft: e.spaces.space20 },
            infoItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            locationInfo: { alignItems: 'center', flexDirection: 'row', width: '100%' },
            locationIcon: { marginRight: e.spaces.space12 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space20 },
            noLeftPadding: { paddingLeft: 0 },
            narrowButtonRow: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: i({}, l(e)),
            narrowButton: { alignSelf: 'center', marginLeft: e.spaces.space12, paddingLeft: e.spaces.space20 },
            helpTextExtraPadded: { paddingTop: e.spaces.space12 },
            featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 },
            featureDisabledTitle: { paddingBottom: e.spaces.space4 },
          }
        })
      t.a = s
    },
    Y3cQ: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('fyvP'),
        c = n('rHpw'),
        i = n('MWbm')
      t.a = function (e) {
        return a.a.createElement(i.a, { style: l.root }, a.a.createElement(o.a, e))
      }
      var l = c.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    Zjav: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsPage', function () {
          return Ze
        })
      n('OZaJ'), n('M+/F'), n('ho0z'), n('hCOa'), n('87if'), n('1t7P'), n('jQ/y'), n('aLgo')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('7x/C'), n('lTEL'), n('kYxP'), n('jQ3i'), n('x4t0'), n('5BYb'), n('hBpG'), n('ERkP')),
        g = n.n(y),
        v = n('mrHL'),
        E = (n('+KXO'), n('NeAX')),
        w = n('RqPI'),
        O = n('hqKg'),
        S = n('kGix'),
        _ = n('O0uF'),
        C = n('G6rE'),
        k = n('rxPX'),
        P = n('0KEI'),
        x = Object(O.createSelector)(w.m, E.selectPreferencesFetchStatus, function (e, t) {
          return e ? S.a.LOADED : t
        }),
        D = Object(k.a)()
          .propsFromState(function () {
            return {
              fetchStatus: x,
              loggedInUser: C.e.selectLoggedInUser,
              personalizationPreferences: E.selectUserPreferences,
              featureSwitches: _.f,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches,
              n = e.fetchStatus,
              r = e.loggedInUser,
              a = e.personalizationPreferences
            return {
              withEditableFSes: Object.keys(t.debug).length > 0,
              fetchStatus: n,
              loggedInUser: r,
              personalizationPreferences: a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: E.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        I = n('VY6S'),
        A = n('v//M'),
        j = n('uD2z'),
        R = n('3XMw'),
        L = n.n(R),
        F = n('KQzH'),
        B = n('yoO3'),
        T = n('cnVF'),
        H = n('7FtF'),
        M = n('Grlw'),
        N = n('iCwC'),
        z = n('3cwy'),
        W = n('Es6L'),
        U = 'loggedOutPrivacySection',
        V = 'accountLink',
        K = 'accountAccessLink',
        G = 'privacyAndSafetyLink',
        Y = 'notificationsLink',
        X = 'accessibilityLink',
        q = 'aboutLink',
        Z = 'displayLink',
        Q = 'dataLink',
        J = n('ddV6'),
        $ = n.n(J),
        ee = (n('uFXj'), n('3EFP')),
        te = n('woHV'),
        ne = n('tAeL'),
        re = n('MWbm'),
        ae = n('pf9B'),
        oe = n('xoZN'),
        ce = n('/yvb'),
        ie = n('6OUF'),
        le = n('rHpw'),
        se = n('oEoC'),
        ue = n('95Se'),
        de = n('VwDm'),
        fe = L.a.f065ba8c,
        pe = L.a.b08821f3,
        he = le.a.create(function (e) {
          return {
            root: { flex: 1, flexDirection: 'column', position: 'relative' },
            typeaheadContainer: { flex: 1, position: 'relative' },
            keydownInputListener: { flexShrink: 1 },
            dropdown: {
              backgroundColor: e.colors.cellBackground,
              left: 0,
              right: 0,
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              position: 'absolute',
              top: 0,
              WebkitOverflowScrolling: 'touch',
            },
            modalDropdown: {
              backgroundColor: e.colors.cellBackground,
              flex: 1,
              minHeight: 300,
              position: 'relative',
              overflowY: 'auto',
              overscrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch',
            },
            wideModeDropdown: {
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.medium,
              minHeight: 100,
              maxHeight: 'calc(80vh - '.concat(e.componentDimensions.appBarHeight, ')'),
            },
            wrapper: { alignItems: 'stretch', flex: 1 },
            topBorder: {
              borderTopColor: e.colors.gray200,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
            inputContainer: { flexDirection: 'row', alignItems: 'center' },
            backButton: { marginRight: e.spaces.space4 },
          }
        }),
        me = function (e) {
          var t = e.alwaysOpen,
            n = e.disableClearButton,
            r = void 0 !== n && n,
            a = e.dropdownPosition,
            o = void 0 === a ? 'overlap' : a,
            c = e.inputStyle,
            i = e.isCompact,
            l = e.isModal,
            s = e.items,
            u = e.onBackClicked,
            d = e.onDismiss,
            f = e.onFocus,
            p = e.onItemClick,
            h = e.onQueryChange,
            m = e.onSubmit,
            b = e.placeholder,
            y = e.renderEmptyState,
            v = e.renderInSearchField,
            E = e.rounded,
            w = e.shouldAutoFocus,
            O = e.shouldClearOnSelect,
            S = e.shouldFocusOnClear,
            _ = e.shouldRenderEmptyState,
            C = e.source,
            k = e.style,
            P = e.testID,
            x = g.a.useRef(null),
            D = g.a.useRef(null),
            I = g.a.useRef(null),
            A = g.a.useRef(null),
            j = g.a.useState(!1),
            R = $()(j, 2),
            L = R[0],
            F = R[1],
            B = g.a.useState(null),
            T = $()(B, 2),
            H = T[0],
            M = T[1],
            N = g.a.useState(Object(se.b)()),
            z = $()(N, 2),
            W = z[0],
            U = z[1],
            V = g.a.useState(function () {
              return Object(se.f)()
            }),
            K = $()(V, 1)[0],
            G = g.a.useState(''),
            Y = $()(G, 2),
            X = Y[0],
            q = Y[1],
            Z = function (e) {
              var t,
                n = ae.a.getCount() > 0
              ;(null != x && null !== (t = x.current) && void 0 !== t && t.contains(e.target)) || n || (L && le())
            }
          g.a.useEffect(function () {
            return (
              window.document.addEventListener('click', Z, !0),
              function () {
                window.document.removeEventListener('click', Z, !0)
              }
            )
          })
          var Q = function () {
              if (null != D && D.current) {
                var e = D.current.getBoundingClientRect().bottom
                e !== H && M(e)
              }
            },
            J = function (e) {
              q(e), null == h || h(e)
            },
            le = function () {
              F(!1), null == d || d()
            },
            me = function () {
              var e
              le(), null == I || null === (e = I.current) || void 0 === e || e.blur()
            },
            be = function (e, t) {
              var n,
                r,
                a = O ? '' : X
              ;(F(!1), I.current) &&
                (O && S
                  ? I.current.focus()
                  : (O && (null === (n = I.current.textInput) || void 0 === n || n.clear()),
                    null === (r = I.current) || void 0 === r || r.blur()))
              J(a), null == d || d(), null == p || p(e, t)
            },
            ye = function () {
              U(Object(se.b)())
            },
            ge = L || t
          return g.a.createElement(
            re.a,
            { onLayout: Q, ref: x, style: [he.root, k] },
            g.a.createElement(
              oe.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(se.g)(e)) {
                    var r, a
                    if (n === ee.a)
                      return null === (r = A.current) || void 0 === r || r.focusNext(), void e.preventDefault()
                    if (n === ee.b)
                      return null === (a = A.current) || void 0 === a || a.focusPrevious(), void e.preventDefault()
                    if (n === ee.d) return le(), void e.preventDefault()
                    if (n !== ee.f) {
                      var o
                      if (n === ee.c && null !== (t = A.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = A.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      L || F(!0)
                    } else le()
                  }
                },
                style: he.keydownInputListener,
              },
              g.a.createElement(
                te.a,
                {
                  accessibilityLabel: b,
                  accessibilityRole: 'search',
                  onSubmit: function (e) {
                    var t
                    e.preventDefault(),
                      e.stopPropagation(),
                      null == I || null === (t = I.current) || void 0 === t || t.blur(),
                      F(!1),
                      null == d || d(),
                      null == m || m()
                  },
                  style: he.wrapper,
                },
                g.a.createElement(
                  re.a,
                  { ref: D, style: [he.inputContainer, c] },
                  ge && u
                    ? g.a.createElement(ce.a, {
                        accessibilityLabel: pe,
                        icon: g.a.createElement(ue.a, null),
                        onClick: function () {
                          le(), null == u || u()
                        },
                        style: he.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  g.a.createElement(ie.a, {
                    Icon: de.a,
                    ariaActiveDescendant: W,
                    ariaAutocomplete: 'list',
                    ariaExpanded: ge,
                    ariaLabel: fe,
                    ariaOwns: K,
                    ariaRole: 'combobox',
                    autoComplete: 'off',
                    autoCorrect: !1,
                    autoFocus: w,
                    contentBelow: null == v ? void 0 : v(),
                    focusOnClear: S,
                    isCompact: i,
                    onChange: function (e) {
                      J(e.target.value), Q()
                    },
                    onClear: function () {
                      J('')
                    },
                    onFocus: function () {
                      F(!0), Q(), null == f || f()
                    },
                    onLayout: Q,
                    placeholder: b,
                    ref: I,
                    returnKeyType: 'search',
                    spellCheck: 'false',
                    styleType: E ? 'pill' : 'selection',
                    testID: P,
                    value: X,
                    withClearButton: !r && L,
                  }),
                ),
                g.a.createElement(
                  re.a,
                  { style: [he.typeaheadContainer, !E && he.topBorder] },
                  ge
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [he.dropdown, H ? Object(se.d)(H) : he.wideModeDropdown])
                            : 'overlap' === o && (e = l ? he.modalDropdown : [he.dropdown, he.wideModeDropdown]),
                          y && _
                            ? y({
                                ariaDescendantId: W,
                                domId: K,
                                onDismiss: me,
                                onItemFocusChanged: ye,
                                ref: A,
                                style: e,
                              })
                            : g.a.createElement(ne.a, {
                                ariaDescendantId: W,
                                domId: K,
                                items: s,
                                onItemClick: be,
                                onItemFocusChanged: ye,
                                ref: A,
                                source: C,
                                style: e,
                              })
                        )
                      })()
                    : null,
                ),
              ),
            ),
          )
        },
        be = n('GZwR'),
        ye = n('6vad'),
        ge = n('t62R'),
        ve = n('FIs5'),
        Ee = n('0yYu'),
        we = n('v6aA'),
        Oe = n('AS3p')
      function Se(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return _e(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _e(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: a,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var o,
          c = !0,
          i = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (c = e.done), e
          },
          e: function (e) {
            ;(i = !0), (o = e)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (i) throw o
            }
          },
        }
      }
      function _e(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function Ce(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ke = L.a.e3719c15,
        Pe = L.a.cad53943,
        xe = L.a.bb081ea1,
        De = L.a.e95b9448,
        Ie = L.a.eb75875d,
        Ae = L.a.c4881c66,
        je = L.a.eafe3287,
        Re = L.a.f458a3b1,
        Le = L.a.e8f57e07,
        Fe = L.a.b7fde2b8,
        Be = L.a.ja94f34d,
        Te = L.a.d0b74a5a,
        He = L.a.gd4302ec,
        Me = L.a.bdc6f5b7,
        Ne = L.a.f8645654,
        ze = L.a.cf9b1669,
        We = L.a.bdfa2b8c,
        Ue = L.a.df483b47,
        Ve = L.a.d299431b,
        Ke = L.a.ed21f885,
        Ge = L.a.e435cdff,
        Ye = L.a.b92a21d8,
        Xe = L.a.c170a564,
        qe = L.a.ba8f6f81,
        Ze = (function (e) {
          u()(n, e)
          var t = Ce(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(l()(o), '_renderLoggedIn', function () {
                var e = o.props.searchIndex,
                  t = o.state.isSearching
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  o._renderSearchInput(e),
                  t
                    ? null
                    : g.a.createElement(
                        re.a,
                        { accessibilityRole: 'tablist' },
                        g.a.createElement(F.a, { label: Me, link: '/settings/account', testID: V }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        g.a.createElement(F.a, { label: Ne, link: '/settings/security_and_account_access', testID: K }),
                        g.a.createElement(F.a, { label: Pe, link: '/settings/privacy_and_safety', testID: G }),
                        g.a.createElement(F.a, { label: Ie, link: '/settings/notifications', testID: Y }),
                        g.a.createElement(F.a, {
                          label: ze,
                          link: '/settings/accessibility_display_and_languages',
                          testID: X,
                        }),
                        g.a.createElement(F.a, { label: We, link: '/settings/about', testID: q }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              b()(l()(o), '_renderLoggedOut', function () {
                var e = Object(v.b)(T.u, o.context.featureSwitches)
                return g.a.createElement(
                  re.a,
                  { testID: U },
                  g.a.createElement(ye.b, { text: Re }),
                  g.a.createElement(F.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Le,
                    link: '/settings/account/personalization',
                  }),
                  g.a.createElement(F.a, { label: Fe, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? g.a.createElement(F.a, { description: He, label: Te, link: '/settings/cookie_preferences' })
                    : null,
                  g.a.createElement(ge.b, { style: N.a.descriptionText }, Be),
                  o._renderGeneral(),
                )
              }),
              b()(l()(o), '_renderSearchInput', function (e) {
                if (!o.context.featureSwitches.isTrue('settings_revamp_search_bar_enabled')) return null
                var t = [],
                  n = o.state,
                  r = n.isSearching,
                  a = n.searchQuery,
                  c = a.length > 2
                if (c) {
                  var i,
                    l = Se(e.values())
                  try {
                    var s = function () {
                      var e = i.value,
                        n = a.toLocaleLowerCase(),
                        r = e.title.toLocaleLowerCase().includes(n),
                        o = e.synonyms.some(function (e) {
                          return e.toLocaleLowerCase().includes(n)
                        })
                      ;(r || o) &&
                        t.push({
                          id: e.id,
                          type: 'setting',
                          data: { text: e.title, location: { pathname: e.path, openInSameFrame: !0 } },
                        })
                    }
                    for (l.s(); !(i = l.n()).done; ) s()
                  } catch (u) {
                    l.e(u)
                  } finally {
                    l.f()
                  }
                }
                return g.a.createElement(me, {
                  alwaysOpen: r,
                  dropdownPosition: 'inline',
                  inputStyle: Qe.input,
                  items: t,
                  onBackClicked: Object(W.a)() ? o._handleSearchInputBackClicked : void 0,
                  onFocus: o._handleSearchInputFocus,
                  onItemClick: o._handleSearchItemClicked,
                  onQueryChange: o._handleSearchQueryChanged,
                  placeholder: qe,
                  renderEmptyState: function (e) {
                    var t = e.style
                    return c
                      ? g.a.createElement(ve.a, { header: Ye({ query: a }), message: Xe, style: t })
                      : g.a.createElement(
                          re.a,
                          { style: [t, Qe.searchEmptyState] },
                          g.a.createElement(ge.b, { align: 'center', color: 'gray700' }, Ge),
                        )
                  },
                  rounded: !0,
                  shouldRenderEmptyState: !c || 0 === t.length,
                  source: be.d.SearchBox,
                })
              }),
              b()(l()(o), '_renderGeneral', function () {
                return g.a.createElement(
                  re.a,
                  null,
                  g.a.createElement(Ee.a, null),
                  g.a.createElement(ye.b, { text: De }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? g.a.createElement(F.a, { label: Ae, link: '/settings/display', testID: Z })
                    : null,
                  o._isUserLoggedIn() ? g.a.createElement(F.a, { label: je, link: '/settings/data', testID: Q }) : null,
                  o._isUserLoggedIn()
                    ? g.a.createElement(F.a, { label: ke, link: '/settings/accessibility', testID: X })
                    : null,
                  g.a.createElement(F.a, { label: We, link: '/settings/about', testID: q }),
                )
              }),
              b()(l()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? g.a.createElement(F.a, { label: Ue, link: '/settings/feature_switches' })
                  : null
              }),
              b()(l()(o), '_renderMonetization', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === M.a.Monetization
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? g.a.createElement(F.a, { label: Ve, link: t }) : null
              }),
              b()(l()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === M.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? g.a.createElement(F.a, { label: Ke, link: t }) : null
              }),
              b()(l()(o), '_handleBackClicked', function () {
                var e = o.props.history
                o.state.isSearching ? o.setState({ isSearching: !1 }) : e.goBack()
              }),
              b()(l()(o), '_handleSearchInputBackClicked', function () {
                o.setState({ isSearching: !1 })
              }),
              b()(l()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              b()(l()(o), '_isUserLoggedIn', function () {
                return !!o.props.loggedInUser
              }),
              b()(l()(o), '_handleSearchInputFocus', function () {
                o.setState({ isSearching: !0 })
              }),
              b()(l()(o), '_handleSearchQueryChanged', function (e) {
                o.setState({ searchQuery: e })
              }),
              b()(l()(o), '_handleSearchItemClicked', function (e) {
                var t = o.props.history
                if ('setting' === e.type) {
                  var n = 'string' == typeof e.data.location ? e.data.location : e.data.location.pathname
                  window.location.pathname !== n && t.push(n, { backLocation: window.location.pathname })
                }
              }),
              (o._showVideoAutoplaySetting = Object(z.a)()),
              (o._handleSearchQueryChanged = Object(I.a)(o._handleSearchQueryChanged, 250)),
              (o.state = { isSearching: !1, searchQuery: '' }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._isUserLoggedIn() || this._handleFetchPreferences()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return g.a.createElement(
                    B.a,
                    null,
                    g.a.createElement(
                      H.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: xe },
                      this._isUserLoggedIn() || Object(Oe.c)(this.context.featureSwitches) === Oe.a.AcceptAllCookies
                        ? g.a.createElement(A.a, {
                            fetchStatus: t,
                            onRequestRetry: this._handleFetchPreferences,
                            render: this.context.loggedInUserId ? this._renderLoggedIn : this._renderLoggedOut,
                          })
                        : this._renderLoggedOut(),
                    ),
                  )
                },
              },
              {
                key: '_renderPersonalizationDescription',
                value: function () {
                  var e = this.props.personalizationPreferences
                  return Object(j.a)(e)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(Ze, 'contextType', we.a)
      var Qe = le.a.create(function (e) {
        return {
          searchEmptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
          input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
        }
      })
      t.default = D(Ze)
    },
    ctla: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        a = n.n(r),
        o = n('3XMw'),
        c = n.n(o),
        i = n('yoO3'),
        l = n('csss'),
        s = n('7JQg'),
        u = n('7FtF'),
        d = n('MWbm'),
        f = c.a.hfc86556,
        p = c.a.daef29b7,
        h = c.a.i0dd9b9d,
        m = { page: 'settings', section: 'mute' }
      t.default = function (e) {
        var t = e.location
        return a.a.createElement(
          s.b,
          { namespace: m },
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(
              u.a,
              { location: t, title: f },
              a.a.createElement(
                d.a,
                null,
                a.a.createElement(l.a, { label: p, link: '/settings/muted/all' }),
                a.a.createElement(l.a, { label: h, link: '/settings/muted_keywords' }),
              ),
            ),
          ),
        )
      }
    },
    dALu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AppInfo', function () {
          return D
        }),
        n.d(t, 'SettingsAboutScreen', function () {
          return I
        })
      n('tQbP'), n('LW0h'), n('vrRf'), n('hBvt'), n('z84I')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('zh9S'),
        c = n('RqPI'),
        i = n('rxPX'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { viewerCountry: c.y }
          })
          .propsFromActions(function () {
            return { scribeAction: o.c }
          }),
        s = n('dzZ/'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('yoO3'),
        p = n('7FtF'),
        h = n('iCwC'),
        m = 'aboutScreen',
        b = n('MWbm'),
        y = n('6vad'),
        g = n('csss'),
        v = n('xHsv'),
        E = n('0yYu'),
        w = n('t62R'),
        O = n('7JQg'),
        S = d.a.cedbb01c,
        _ = d.a.b4f917d0,
        C = d.a.bdfa2b8c,
        k = d.a.j0783ebe,
        P = d.a.c0398892,
        x = { page: 'settings', section: 'about' }
      function D(e) {
        var t = []
        return (
          t.push(a.a.createElement(y.b, { text: P })),
          t.push(
            a.a.createElement(g.a, {
              label: P,
              link: { external: !0, pathname: 'https://twitter.com/i/release_notes' },
            }),
          ),
          a.a.Children.toArray(t)
        )
      }
      function I(e) {
        var t = e.location,
          n = e.scribeAction,
          r = e.viewerCountry ? e.viewerCountry.toLowerCase() : null,
          o = s.a
            .filter(function (e) {
              return !e.excludeOnSettingsPage && (!e.country || e.country.indexOf(r) > -1)
            })
            .sort(function (e, t) {
              return e.text.localeCompare(t.text)
            }),
          c = o.filter(function (e) {
            return e.legal && e.link
          }),
          i = o.filter(function (e) {
            return !e.legal && e.link
          }),
          l = o.filter(function (e) {
            return !e.link
          })
        return a.a.createElement(
          O.b,
          { namespace: x },
          a.a.createElement(
            f.a,
            null,
            a.a.createElement(
              p.a,
              { location: t, screenType: 'primaryDetail', title: C },
              a.a.createElement(
                b.a,
                { testID: m },
                a.a.createElement(v.a, { description: k }),
                a.a.createElement(D, { scribeAction: n }),
                a.a.createElement(E.a, null),
                a.a.createElement(y.b, { text: S }),
                c.map(function (e, t) {
                  return a.a.createElement(g.a, {
                    key: e.text,
                    label: e.text,
                    link: { external: !0, pathname: e.link },
                  })
                }),
                l.map(function (e) {
                  return a.a.createElement(
                    w.b,
                    { color: 'gray700', key: e.text, size: 'subtext2', style: [h.a.infoText, h.a.bottomBorder] },
                    e.text,
                  )
                }),
                a.a.createElement(E.a, null),
                a.a.createElement(y.b, { text: _ }),
                i.map(function (e, t) {
                  return a.a.createElement(g.a, {
                    key: e.text,
                    label: e.text,
                    link: { external: !0, pathname: e.link },
                  })
                }),
              ),
            ),
          ),
        )
      }
      t.default = Object(O.c)(x)(l(I))
    },
    htPi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DisplayScreen', function () {
          return C
        })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('7JQg'),
        c = n('3XMw'),
        i = n.n(c),
        l = n('yoO3'),
        s = n('7FtF'),
        u = 'aboutText',
        d = n('5hXE'),
        f = n('A2ey'),
        p = n('vSJw'),
        h = n('KNZn'),
        m = n('MWbm'),
        b = n('t62R'),
        y = n('0yYu'),
        g = n('6vad'),
        v = n('rHpw'),
        E = i.a.c4881c66,
        w = i.a.a5ce82a4,
        O = i.a.ce494bb3,
        S = i.a.c783d45e,
        _ = i.a.h306a357,
        C = function (e) {
          var t = e.location
          return a.a.createElement(
            l.a,
            null,
            a.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: E },
              a.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: k.aboutText, testID: u }, w),
              a.a.createElement(h.a, null),
              a.a.createElement(y.a, null),
              a.a.createElement(g.b, { text: O }),
              a.a.createElement(d.a, null),
              a.a.createElement(y.a, null),
              a.a.createElement(g.b, { text: S }),
              a.a.createElement(m.a, { style: k.colorPicker }, a.a.createElement(p.a, null)),
              a.a.createElement(y.a, null),
              a.a.createElement(g.b, { text: _ }),
              a.a.createElement(m.a, { style: k.backgroundPicker }, a.a.createElement(f.a, null)),
            ),
          )
        },
        k = v.a.create(function (e) {
          return {
            aboutText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
            colorPicker: { paddingVertical: e.spaces.space4 },
          }
        })
      t.default = Object(o.c)({ page: 'settings', section: 'display' })(C)
    },
    iCwC: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('rHpw')
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function (e) {
        return { borderBottomColor: e.colors.borderColor, borderBottomStyle: 'solid', borderBottomWidth: '1px' }
      }
      t.a = o.a.create(function (e) {
        return {
          descriptionText: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space16,
          },
          searchBox: { margin: e.spaces.space4 },
          infoText: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground },
          viewItem: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            backgroundColor: e.colors.cellBackground,
          },
          calloutTextBlock: {
            paddingVertical: e.spaces.space20,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
          },
          bottomBorder: i({}, l(e)),
        }
      })
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('0vv5'),
        a = 500,
        o = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return f
      }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i =
          (n('hBpG'),
          n('vrRf'),
          n('WNMA'),
          n('KqXw'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        l = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function f(e, t) {
        var n,
          r = l.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? d(d({}, r.scope), {}, { src: t, q: a }) : null
      }
      function p(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(l.b.WordEnd),
          o = a >= 0 ? n.slice(a) : '',
          c = r.search(l.b.WordBoundary),
          i = o + r.slice(0, c)
        return i.trim() ? { start: a, end: e + c, word: i } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function b(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(o))
      }
      var y = Object(i.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    tAN7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PrivacyAndSafetyScreen', function () {
          return Se
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        v = n('NeAX'),
        E = n('P1r1'),
        w = n('hqKg'),
        O = n('uD2z'),
        S = n('li/m'),
        _ = n('G6rE'),
        C = n('0KEI'),
        k = n('oEGd'),
        P = Object(w.createSelector)(
          v.selectPreferencesFetchStatus,
          v.selectUserPreferences,
          E.g,
          S.d,
          function (e, t, n, r) {
            return { fetchStatus: e, personalizationString: Object(O.a)(t), settings: n, hasCommunityMemberships: r }
          },
        ),
        x = {
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: v.fetchPreferencesIfNeeded,
          patchUser: _.e.patchUser,
          updateSettings: E.L,
        },
        D = Object(k.g)(P, x),
        I = n('v//M'),
        A = n('3XMw'),
        j = n.n(A),
        R = n('yoO3'),
        L = n('7FtF'),
        F = 'privacyAndSafetyScreen',
        B = n('MWbm'),
        T = n('Irs7'),
        H = n('v6aA'),
        M = n('6vad'),
        N = n('cCdp'),
        z = n('csss'),
        W = n('0yYu'),
        U = n('eb3s')
      function V(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var K = j.a.cad53943,
        G = j.a.bab1f8b0,
        Y = j.a.f5e59e90,
        X = j.a.i0310b4e,
        q = { headline: j.a.j8bf07ab, text: j.a.ca8034b3, confirmButtonLabel: j.a.c5d4192a },
        Z = { headline: j.a.gea6cc19, text: j.a.j7fc0afc, confirmButtonLabel: j.a.f527b322 },
        Q = j.a.jabb9c9a,
        J = j.a.f56d108e,
        $ = { all: j.a.d165c992, following: j.a.ea339390, none: j.a.e3a761ee },
        ee = j.a.d4986f85,
        te = j.a.h6ce12ed,
        ne = j.a.ebcb68ae,
        re = j.a.afdf29b8,
        ae = j.a.e1929815,
        oe = j.a.d9172541,
        ce = j.a.e84e1c41,
        ie = j.a.hefdc08f,
        le = j.a.b608c1a0,
        se = j.a.j2c3033a,
        ue = j.a.fd4d9068,
        de = j.a.fd4d9068,
        fe = j.a.hfb77cf5,
        pe = j.a.fc1d217b,
        he = j.a.acdcc101,
        me = j.a.hfc86556,
        be = j.a.a5f32aa2,
        ye = j.a.eb75875d,
        ge = j.a.aea62567,
        ve = j.a.e8f57e07,
        Ee = j.a.e8f57e07,
        we = j.a.b59540c2,
        Oe = { all: j.a.bd34d8f8, following: j.a.d22dad9e, none: j.a.ad41e8b3 },
        Se = (function (e) {
          u()(n, e)
          var t = V(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(
                l()(e),
                'showPeriscopeAuthOption',
                e.context.featureSwitches.isTrue('responsive_web_live_video_parity_periscope_auth_enabled'),
              ),
              b()(l()(e), 'state', { showProtectedConfirmation: !1 }),
              b()(l()(e), '_handleItemChanged', function (t, n) {
                e._updateSettings(b()({}, t, n))
              }),
              b()(l()(e), '_handleDMFromChanged', function (t, n) {
                e._updateSettings(b()({}, t, n ? 'all' : 'following'))
              }),
              b()(l()(e), '_handleDMQualityFilterChanged', function (t, n) {
                e._updateSettings(b()({}, t, n ? 'enabled' : 'disabled'))
              }),
              b()(l()(e), '_handleDMReceiptChanged', function (t, n) {
                e._updateSettings(b()({}, t, n ? 'all_enabled' : 'all_disabled'))
              }),
              b()(l()(e), '_handleProtectedChanged', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.patchUser
                n
                  ? e.setState({ showProtectedConfirmation: !0 })
                  : e._updateSettings(b()({}, t, !1)).then(function () {
                      a.scribe({ section: 'privacy', element: 'protected', action: 'disable' }),
                        e.context.loggedInUserId && o(e.context.loggedInUserId, b()({}, t, !1))
                    })
              }),
              b()(l()(e), '_handleProtectedCancel', function () {
                e.setState({ showProtectedConfirmation: !1 })
              }),
              b()(l()(e), '_handleProtectedConfirm', function () {
                e.setState({ showProtectedConfirmation: !1 })
                var t = e.props,
                  n = t.analytics,
                  r = t.patchUser
                e._updateSettings({ protected: !0 }).then(function () {
                  n.scribe({ section: 'privacy', element: 'protected', action: 'enable' }),
                    e.context.loggedInUserId && r(e.context.loggedInUserId, { protected: !0 })
                })
              }),
              b()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.personalizationString,
                  r = t.settings,
                  a = $[r.allow_media_tagging],
                  o = Oe[r.allow_contributor_request]
                return g.a.createElement(
                  B.a,
                  null,
                  g.a.createElement(M.b, { text: G }),
                  g.a.createElement(N.a, {
                    checked: r.protected,
                    helpText: X,
                    label: Y,
                    learnMoreLink: 'https://support.twitter.com/articles/14016',
                    name: 'protected',
                    onChange: e._handleProtectedChanged,
                  }),
                  g.a.createElement(z.a, { label: Q, link: '/settings/location' }),
                  g.a.createElement(z.a, { description: a, label: J, link: '/settings/tagging' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(M.b, { text: ee }),
                  g.a.createElement(N.a, {
                    checked: 'all' === r.allow_dms_from,
                    helpText: ne,
                    label: te,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receive',
                    name: 'allow_dms_from',
                    onChange: e._handleDMFromChanged,
                  }),
                  g.a.createElement(N.a, {
                    checked: 'enabled' === r.dm_quality_filter,
                    helpText: ae,
                    label: re,
                    learnMoreLink: 'https://support.twitter.com/articles/14606',
                    name: 'dm_quality_filter',
                    onChange: e._handleDMQualityFilterChanged,
                  }),
                  g.a.createElement(N.a, {
                    checked: 'all_enabled' === r.dm_receipt_setting,
                    helpText: ce,
                    label: oe,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receipts',
                    name: 'dm_receipt_setting',
                    onChange: e._handleDMReceiptChanged,
                  }),
                  e.showPeriscopeAuthOption &&
                    g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(W.a, null),
                      g.a.createElement(M.b, { text: ie }),
                      g.a.createElement(N.a, {
                        checked: r.allow_authenticated_periscope_requests,
                        helpText: se,
                        label: le,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  g.a.createElement(W.a, null),
                  g.a.createElement(M.b, { text: ue }),
                  g.a.createElement(z.a, { label: de, link: '/settings/contacts' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(M.b, { text: fe }),
                  g.a.createElement(N.a, {
                    checked: r.display_sensitive_media,
                    label: pe,
                    name: 'display_sensitive_media',
                    onChange: e._handleItemChanged,
                  }),
                  g.a.createElement(N.a, {
                    checked: r.nsfw_user,
                    disabled: r.nsfw_admin,
                    label: he,
                    name: 'nsfw_user',
                    onChange: e._handleItemChanged,
                  }),
                  g.a.createElement(z.a, { label: me, link: '/settings/mute' }),
                  g.a.createElement(z.a, { label: be, link: '/settings/blocked/all' }),
                  g.a.createElement(z.a, { label: ye, link: '/settings/notifications' }),
                  g.a.createElement(z.a, { label: ge, link: '/settings/search' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(M.b, { text: Ee }),
                  g.a.createElement(z.a, { description: n, label: ve, link: '/settings/account/personalization' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(M.b, { key: 'header', text: we }),
                  g.a.createElement(z.a, { description: o, key: 'pivot', label: we, link: '/settings/teams' }),
                )
              }),
              b()(l()(e), '_handleFetchPreferences', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchPreferencesIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchPreferences()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.hasCommunityMemberships,
                    r = e.location,
                    a = n ? Z : q
                  return g.a.createElement(
                    B.a,
                    { testID: F },
                    g.a.createElement(
                      L.a,
                      { location: r, screenType: 'primaryDetail', title: K },
                      g.a.createElement(
                        R.a,
                        null,
                        g.a.createElement(I.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                        this.state.showProtectedConfirmation
                          ? g.a.createElement(U.a, {
                              confirmButtonLabel: a.confirmButtonLabel,
                              confirmButtonType: 'primary',
                              headline: a.headline,
                              onCancel: this._handleProtectedCancel,
                              onConfirm: this._handleProtectedConfirm,
                              text: a.text,
                            })
                          : null,
                      ),
                    ),
                  )
                },
              },
              {
                key: '_updateSettings',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler
                  return (0, t.updateSettings)(e).catch(n({ showToast: !0 }))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(Se, 'contextType', H.a)
      t.default = Object(T.a)(D(Se), { page: 'settings', section: 'safety' })
    },
    uD2z: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
      }),
        n.d(t, 'a', function () {
          return s
        })
      n('KOtZ'), n('+KXO')
      var r = n('3XMw'),
        a = n.n(r),
        o = a.a.dae57a41,
        c = a.a.i7cbc154,
        i = a.a.e3a761ee,
        l = function (e) {
          switch (
            (function (e) {
              return Object.keys(e).reduce(function (t, n) {
                return e[n] ? t + 1 : t
              }, 0)
            })(e)
          ) {
            case Object.keys(e).length:
              return 'all'
            case 0:
              return 'none'
            default:
              return 'some'
          }
        },
        s = function (e) {
          return { some: c, none: i, all: o }[l(e)]
        }
    },
    ye3X: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('yH/f')
      var r = Object.freeze({ inline: 'inline', prompt: 'prompt', require: 'require' })
    },
  },
])
//# sourceMappingURL=WIPED
