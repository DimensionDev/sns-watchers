;(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    '3cwy': function (e, t, n) {
      'use strict'
      var a = n('fHOo')
      t.a = function () {
        return Object(a.a)()
      }
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
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
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(i.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    ALyI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsVideoAutoplay', function () {
          return G
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
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
        S = n('0KEI'),
        O = n('oEGd'),
        _ = n('H9MA'),
        C = Object(w.createSelector)(_.f, _.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        P = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateVideoAutoplay: _.i,
        },
        k = Object(O.g)(C, P),
        x = n('45mF'),
        I = n('3XMw'),
        A = n.n(I),
        D = n('7FtF'),
        R = n('3cwy'),
        j = n('MWbm'),
        F = n('Y3cQ'),
        L = n('t62R'),
        T = n('6v1f')
      function M(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function B(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var H = A.a.a776eed7,
        z = A.a.ede134f2,
        W = A.a.i859a9d3,
        U = { page: 'settings', section: 'autoplay' },
        K = function (e) {
          return { value: e, label: v.a[e] }
        },
        G = (function (e) {
          u()(n, e)
          var t = B(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              b()(l()(o), '_handleItemChanged', function (e, t) {
                var n = o.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.scribeAction,
                  c = n.updateVideoAutoplay
                r(N(N({}, U), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  c(T.b[t]).catch(a(N(N({}, Object(x.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(K(T.b.Always)),
              T.c && o._options.push(K(T.b.WiFiOnly)),
              o._options.push(K(T.b.Off)),
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
                    (!t && Object(R.a)()) || this.props.history.replace('/settings/data')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.videoAutoplay
                  return g.a.createElement(
                    D.a,
                    { location: t, title: H },
                    g.a.createElement(
                      j.a,
                      null,
                      g.a.createElement(F.a, {
                        description: g.a.createElement(
                          g.a.Fragment,
                          null,
                          ''.concat(z, ' '),
                          g.a.createElement(L.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, W),
                        ),
                        label: H,
                        name: 'video_autoplay',
                        onChange: this._handleItemChanged,
                        options: this._options,
                        value: n || T.a,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.default = k(G)
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
      var a = n('SrIh'),
        r = n('JbbX'),
        o = 1e3,
        c = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function i(e) {
        var t = Object(r.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? c.AcceptAllCookies
                : t[2]
                ? c.RefuseNonEssentialCookies
                : (Object(a.a)('Invalid consent signal state'), c.Invalid)
              : c.NotSet
            : c.Invalid
          : c.NotSet
      }
      function l(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function s(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function f(e) {
        var t = Object(r.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
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
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
      var a = n('VrFO'),
        r = n.n(a),
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
        S = Object(E.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        O = n('kGix'),
        _ = n('v//M'),
        C = n('5FtR')
      function P(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var k = (function (e) {
          u()(n, e)
          var t = P(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), 'state', { verificationRequired: !1 }),
              b()(l()(e), '_handleFetch', function () {
                var t,
                  n = e.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    a(
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
                    a = this.state.verificationRequired,
                    r = t === O.a.FAILED && a
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    r
                      ? g.a.createElement(C.a, { to: '/i/flow/verify_account_ownership' })
                      : g.a.createElement(_.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        x = S.forwardRef(k)
      t.a = x
    },
    FPOR: function (e, t, n) {
      'use strict'
      var a,
        r = n('KEM+'),
        o = n.n(r),
        c = n('6v1f'),
        i = n('3XMw'),
        l = n.n(i),
        s = l.a.g1888dc1,
        u = l.a.f724d1a9,
        d = l.a.cf6472c1
      t.a = ((a = {}), o()(a, c.b.Off, s), o()(a, c.b.WiFiOnly, u), o()(a, c.b.Always, d), a)
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = (n('hBvt'), n('ERkP')),
        c = n.n(o),
        i = n('BUB3'),
        l = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return c.a.createElement(i.a, { exact: !0, path: e.link }, function (t) {
          var n = l.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return c.a.createElement(s.a, r()({ isActive: t }, e, { label: c.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
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
          return S
        }),
        n.d(t, 'c', function () {
          return O
        }),
        n.d(t, 'e', function () {
          return _
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('RhWx'),
        r = n.n(a),
        o = n('KEM+'),
        c = n.n(o),
        i = (n('yH/f'), n('LW0h'), n('2G9S'), n('kGix')),
        l = n('Ssj5'),
        s = n('oEOe')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
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
              var a = n.payload || [],
                o = a.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return d(
                d({}, t),
                {},
                { fetchStatus: i.a.LOADED, downloads: d(d({}, t.downloads), {}, { all: a, nonFailed: o }) },
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
                    { nonFailed: (e = [{ status: 'INPROGRESS' }]).concat.apply(e, r()(t.downloads.nonFailed)) },
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
        S = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(s.b)(e, { request: a.UserData.fetchDownloads })({
              actionTypes: h,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        O = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(s.b)(e, { request: a.UserData.createDataDownload })({
              actionTypes: m,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        _ = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(s.d)(t, { params: e, request: r.UserData.markDataAsDownloaded })('MARK_DATA_AS_DOWNLOADED')
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
      var a = n('VrFO'),
        r = n.n(a),
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
        S = n('0KEI'),
        O = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: E.g, downloads: E.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: E.d,
              googleAnalyticsPageView: v.a,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: E.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        _ = n('XYIJ'),
        C = (n('6U7i'), n('3XMw')),
        P = n.n(C),
        k = n('aITJ'),
        x = n('MWbm'),
        I = n('/yvb'),
        A = n('eb3s'),
        D = n('855f')
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var j = P.a.cfd2f35d,
        F = P.a.fc5bfd95,
        L = P.a.gee8110d,
        T = P.a.c326f156,
        M = P.a.c9fe9b56,
        N = P.a.j54b679a,
        B = P.a.ac63840c,
        H = P.a.bcd9b0ed,
        z = (function (e) {
          u()(n, e)
          var t = R(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
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
                  this._shouldDisplayConfirmation = k.b.isMobileOS()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabled,
                    a = e.onConfirm,
                    r = e.url,
                    o = r.size_b,
                    c = r.url,
                    i = N({ size: n.getSizeLabel(o) }),
                    l = t ? T : L
                  return g.a.createElement(
                    x.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? g.a.createElement(
                          x.a,
                          null,
                          g.a.createElement(
                            I.a,
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
                            ? g.a.createElement(A.a, {
                                cancelButtonLabel: j,
                                confirmButtonLabel: F,
                                confirmButtonLink: { pathname: c || '', external: !0 },
                                headline: M,
                                onCancel: this._handleCancel,
                                onConfirm: this._handleConfirm,
                                text: i,
                              })
                            : null,
                        )
                      : g.a.createElement(
                          I.a,
                          {
                            disabled: t,
                            link: c ? { pathname: c, external: !0 } : void 0,
                            onPress: a,
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
          ? B({ size: D.a.getFormattedCount(t) })
          : H({ size: D.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var W = n('7FtF'),
        U = n('ClNT'),
        K = n('t62R'),
        G = n('rHpw'),
        V = n('v6aA')
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var X = P.a.f56af9cc,
        q = P.a.b2ed92c3,
        Q = P.a.ce5d2c46,
        Z = P.a.dd9ec81f,
        J = P.a.c7227886,
        $ = P.a.a0c3f812,
        ee = P.a.ba2e82a1,
        te = P.a.eea30bb4,
        ne = P.a.f2cde471,
        ae = P.a.b7ce9dbe,
        re = P.a.fbc92b61,
        oe = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
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
                    a = n.analytics,
                    r = n.createLocalApiErrorHandler,
                    o = n.fetchDownloads
                  !t.downloaded_at && t.url && e.props.markDataAsDownloaded({ url: t.url }).then(o).catch(r()),
                    a.scribe({ element: 'download_button', action: 'click' })
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
                    a = e.location
                  return g.a.createElement(
                    W.a,
                    { location: a, title: X },
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
                    g.a.createElement(K.b, { size: 'title4' }, Z),
                    g.a.createElement(K.b, { color: 'gray700', style: ce.emptyStateDescription }, $),
                    g.a.createElement(
                      I.a,
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
                value: function (e, t, n, a) {
                  var r = n + 1,
                    o = a.length,
                    c = !(null == t || !t.url)
                  return g.a.createElement(
                    x.a,
                    { key: ''.concat(r), style: [_.a.narrowButtonRow, _.a.bottomBorder, _.a.labelContainer] },
                    g.a.createElement(
                      x.a,
                      null,
                      g.a.createElement(K.b, { weight: 'bold' }, re({ currentIndex: r, count: o })),
                      e.generated
                        ? g.a.createElement(K.b, { color: 'gray700' }, te({ date: ee(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? g.a.createElement(K.b, { color: 'gray700' }, ne({ date: ee(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? g.a.createElement(K.b, { color: 'gray700' }, ae({ size: z.getSizeLabel(t.size_b) }))
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
                    g.a.createElement(K.b, { weight: 'bold' }, re({ currentIndex: 1, count: 1 })),
                    g.a.createElement(
                      I.a,
                      { disabled: !0, size: 'small', style: _.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? q : Q,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(oe, 'contextType', V.a)
      var ce = G.a.create(function (e) {
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
      t.default = O(oe)
    },
    'Q++C': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DataUsageScreen', function () {
          return G
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
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
        S = n('0KEI'),
        O = n('H9MA'),
        _ = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: O.c, videoAutoplay: O.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: O.b,
              updateDataSaverMode: O.g,
              updateSettings: E.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        C = n('45mF'),
        P = n('6v1f'),
        k = n('3XMw'),
        x = n.n(k),
        I = n('yoO3'),
        A = n('7FtF'),
        D = n('3cwy'),
        R = 'dataSaverBooleanItem',
        j = n('v6aA'),
        F = n('xHsv'),
        L = n('cCdp'),
        T = n('csss')
      function M(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function B(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var H = x.a.eafe3287,
        z = x.a.d76fe4fc,
        W = x.a.a57a341b,
        U = x.a.d88102cf,
        K = x.a.a776eed7,
        G = (function (e) {
          u()(n, e)
          var t = B(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              b()(l()(o), '_handleDataSaverChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  c = n.updateDataSaverMode
                a.scribe({ element: e, action: t ? 'on' : 'off' }),
                  c({ enabled: t }).catch(r(N(N({}, Object(C.a)()), {}, { showToast: !0 })))
              }),
              (o._showVideoAutoplaySetting = Object(D.a)()),
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
                    a = e.videoAutoplay
                  return g.a.createElement(
                    I.a,
                    null,
                    g.a.createElement(
                      A.a,
                      { location: n, screenType: 'secondaryDetail', title: H },
                      g.a.createElement(F.a, { description: z }),
                      g.a.createElement(L.a, {
                        checked: t,
                        helpText: U,
                        label: W,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: R,
                      }),
                      this._showVideoAutoplaySetting &&
                        g.a.createElement(T.a, {
                          description: v.a[a || P.a],
                          disabled: t,
                          label: K,
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
      b()(G, 'contextType', j.a)
      t.default = _(G)
    },
    REKA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccessibilityScreen', function () {
          return re
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
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
        S = n('rxPX'),
        O = n('0KEI'),
        _ = n('P1r1'),
        C = n('H9MA'),
        P = Object(S.a)()
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
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              updateSettings: _.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        k = n('6v1f'),
        x = n('3XMw'),
        I = n.n(x),
        A = n('yoO3'),
        D = n('7FtF'),
        R = n('3cwy'),
        j = 'accessibilityScreen',
        F = n('MWbm'),
        L = n('38/B'),
        T = n('rHpw'),
        M = n('xHsv'),
        N = n('6vad'),
        B = n('cCdp'),
        H = n('0yYu'),
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var K = I.a.e3719c15,
        G = I.a.a5208fad,
        V = I.a.d5b646bd,
        Y = I.a.jfe6a3a0,
        X = I.a.add55c97,
        q = I.a.a6d5b010,
        Q = I.a.e8c72272,
        Z = I.a.dba2cdd1,
        J = I.a.d070244e,
        $ = I.a.icfa5e8b,
        ee = I.a.ae41b002,
        te = I.a.e82b294e,
        ne = I.a.ea284ab8,
        ae = I.a.a776eed7,
        re = (function (e) {
          u()(n, e)
          var t = U(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
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
                o._handleSettingChanged(e, t), L.a.setReducedMotion(t)
              }),
              b()(l()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), T.a.setHighContrast(t)
              }),
              b()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  c = n.updateSettings,
                  i = t ? v.a.prompt : null
                a.scribe({ element: ''.concat(e, '_').concat(i || 'off'), action: 'selected' }),
                  c(b()({}, e, i)).catch(r({ showToast: !0 }))
              }),
              b()(l()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  c = n.updateSettings
                a.scribe({ element: e, action: t ? 'on' : 'off' }), c(b()({}, e, t)).catch(r({ showToast: !0 }))
              }),
              (o._showVideoAutoplaySetting = Object(R.a)()),
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
                    a = e.highContrastEnabled,
                    r = e.location,
                    o = e.reducedMotionEnabled,
                    c = e.videoAutoplay,
                    i = w.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return g.a.createElement(
                    A.a,
                    null,
                    g.a.createElement(
                      D.a,
                      { location: r, screenType: 'secondaryDetail', title: K },
                      g.a.createElement(
                        F.a,
                        { testID: j },
                        g.a.createElement(M.a, { description: G }),
                        g.a.createElement(N.b, { text: V }),
                        g.a.createElement(B.a, {
                          checked: a,
                          helpText: Z,
                          label: Q,
                          name: 'highContrastEnabled',
                          onChange: this._handleHighContrastChanged,
                        }),
                      ),
                      this._showVideoAutoplaySetting
                        ? g.a.createElement(
                            F.a,
                            null,
                            g.a.createElement(H.a, null),
                            g.a.createElement(N.b, { text: Y }),
                            g.a.createElement(B.a, {
                              checked: o || i,
                              disabled: i,
                              helpText: i ? ee : $,
                              label: J,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            g.a.createElement(z.a, {
                              description: E.a[c || k.a],
                              disabled: n,
                              label: ae,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextNudgeSetting
                        ? g.a.createElement(
                            F.a,
                            null,
                            g.a.createElement(H.a, null),
                            g.a.createElement(N.b, { text: X }),
                            g.a.createElement(B.a, {
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
                        g.a.createElement(H.a, null),
                        g.a.createElement(N.b, { text: q }),
                        g.a.createElement(B.a, {
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
      b()(re, 'contextType', W.a)
      t.default = P(re)
    },
    XYIJ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('rHpw')
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
      var a = n('ERkP'),
        r = n.n(a),
        o = n('fyvP'),
        c = n('rHpw'),
        i = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(i.a, { style: l.root }, r.a.createElement(o.a, e))
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
          return Qe
        })
      n('OZaJ'), n('M+/F'), n('ho0z'), n('hCOa'), n('87if'), n('1t7P'), n('jQ/y'), n('aLgo')
      var a = n('VrFO'),
        r = n.n(a),
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
        S = n('hqKg'),
        O = n('kGix'),
        _ = n('O0uF'),
        C = n('G6rE'),
        P = n('rxPX'),
        k = n('0KEI'),
        x = Object(S.createSelector)(w.m, E.selectPreferencesFetchStatus, function (e, t) {
          return e ? O.a.LOADED : t
        }),
        I = Object(P.a)()
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
              a = e.loggedInUser,
              r = e.personalizationPreferences
            return {
              withEditableFSes: Object.keys(t.debug).length > 0,
              fetchStatus: n,
              loggedInUser: a,
              personalizationPreferences: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: E.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        A = n('VY6S'),
        D = n('v//M'),
        R = n('uD2z'),
        j = n('3XMw'),
        F = n.n(j),
        L = n('KQzH'),
        T = n('yoO3'),
        M = n('cnVF'),
        N = n('7FtF'),
        B = n('Grlw'),
        H = n('iCwC'),
        z = n('3cwy'),
        W = n('Es6L'),
        U = 'loggedOutPrivacySection',
        K = 'accountLink',
        G = 'accountAccessLink',
        V = 'privacyAndSafetyLink',
        Y = 'notificationsLink',
        X = 'accessibilityLink',
        q = 'aboutLink',
        Q = 'displayLink',
        Z = 'dataLink',
        J = n('ddV6'),
        $ = n.n(J),
        ee = (n('uFXj'), n('3EFP')),
        te = n('woHV'),
        ne = n('tAeL'),
        ae = n('MWbm'),
        re = n('pf9B'),
        oe = n('xoZN'),
        ce = n('/yvb'),
        ie = n('6OUF'),
        le = n('rHpw'),
        se = n('oEoC'),
        ue = n('95Se'),
        de = n('VwDm'),
        fe = F.a.f065ba8c,
        pe = F.a.b08821f3,
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
            a = void 0 !== n && n,
            r = e.dropdownPosition,
            o = void 0 === r ? 'overlap' : r,
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
            S = e.shouldClearOnSelect,
            O = e.shouldFocusOnClear,
            _ = e.shouldRenderEmptyState,
            C = e.source,
            P = e.style,
            k = e.testID,
            x = g.a.useRef(null),
            I = g.a.useRef(null),
            A = g.a.useRef(null),
            D = g.a.useRef(null),
            R = g.a.useState(!1),
            j = $()(R, 2),
            F = j[0],
            L = j[1],
            T = g.a.useState(null),
            M = $()(T, 2),
            N = M[0],
            B = M[1],
            H = g.a.useState(Object(se.b)()),
            z = $()(H, 2),
            W = z[0],
            U = z[1],
            K = g.a.useState(function () {
              return Object(se.f)()
            }),
            G = $()(K, 1)[0],
            V = g.a.useState(''),
            Y = $()(V, 2),
            X = Y[0],
            q = Y[1],
            Q = function (e) {
              var t,
                n = re.a.getCount() > 0
              ;(null != x && null !== (t = x.current) && void 0 !== t && t.contains(e.target)) || n || (F && le())
            }
          g.a.useEffect(function () {
            return (
              window.document.addEventListener('click', Q, !0),
              function () {
                window.document.removeEventListener('click', Q, !0)
              }
            )
          })
          var Z = function () {
              if (null != I && I.current) {
                var e = I.current.getBoundingClientRect().bottom
                e !== N && B(e)
              }
            },
            J = function (e) {
              q(e), null == h || h(e)
            },
            le = function () {
              L(!1), null == d || d()
            },
            me = function () {
              var e
              le(), null == A || null === (e = A.current) || void 0 === e || e.blur()
            },
            be = function (e, t) {
              var n,
                a,
                r = S ? '' : X
              ;(L(!1), A.current) &&
                (S && O
                  ? A.current.focus()
                  : (S && (null === (n = A.current.textInput) || void 0 === n || n.clear()),
                    null === (a = A.current) || void 0 === a || a.blur()))
              J(r), null == d || d(), null == p || p(e, t)
            },
            ye = function () {
              U(Object(se.b)())
            },
            ge = F || t
          return g.a.createElement(
            ae.a,
            { onLayout: Z, ref: x, style: [he.root, P] },
            g.a.createElement(
              oe.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(se.g)(e)) {
                    var a, r
                    if (n === ee.a)
                      return null === (a = D.current) || void 0 === a || a.focusNext(), void e.preventDefault()
                    if (n === ee.b)
                      return null === (r = D.current) || void 0 === r || r.focusPrevious(), void e.preventDefault()
                    if (n === ee.d) return le(), void e.preventDefault()
                    if (n !== ee.f) {
                      var o
                      if (n === ee.c && null !== (t = D.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = D.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      F || L(!0)
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
                      null == A || null === (t = A.current) || void 0 === t || t.blur(),
                      L(!1),
                      null == d || d(),
                      null == m || m()
                  },
                  style: he.wrapper,
                },
                g.a.createElement(
                  ae.a,
                  { ref: I, style: [he.inputContainer, c] },
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
                    ariaOwns: G,
                    ariaRole: 'combobox',
                    autoComplete: 'off',
                    autoCorrect: !1,
                    autoFocus: w,
                    contentBelow: null == v ? void 0 : v(),
                    focusOnClear: O,
                    isCompact: i,
                    onChange: function (e) {
                      J(e.target.value), Z()
                    },
                    onClear: function () {
                      J('')
                    },
                    onFocus: function () {
                      L(!0), Z(), null == f || f()
                    },
                    onLayout: Z,
                    placeholder: b,
                    ref: A,
                    returnKeyType: 'search',
                    spellCheck: 'false',
                    styleType: E ? 'pill' : 'selection',
                    testID: k,
                    value: X,
                    withClearButton: !a && F,
                  }),
                ),
                g.a.createElement(
                  ae.a,
                  { style: [he.typeaheadContainer, !E && he.topBorder] },
                  ge
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [he.dropdown, N ? Object(se.d)(N) : he.wideModeDropdown])
                            : 'overlap' === o && (e = l ? he.modalDropdown : [he.dropdown, he.wideModeDropdown]),
                          y && _
                            ? y({
                                ariaDescendantId: W,
                                domId: G,
                                onDismiss: me,
                                onItemFocusChanged: ye,
                                ref: D,
                                style: e,
                              })
                            : g.a.createElement(ne.a, {
                                ariaDescendantId: W,
                                domId: G,
                                items: s,
                                onItemClick: be,
                                onItemFocusChanged: ye,
                                ref: D,
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
        Se = n('AS3p')
      function Oe(e, t) {
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
            var a = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
              },
              e: function (e) {
                throw e
              },
              f: r,
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
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
        return a
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Pe = F.a.e3719c15,
        ke = F.a.cad53943,
        xe = F.a.bb081ea1,
        Ie = F.a.e95b9448,
        Ae = F.a.eb75875d,
        De = F.a.c4881c66,
        Re = F.a.eafe3287,
        je = F.a.f458a3b1,
        Fe = F.a.e8f57e07,
        Le = F.a.b7fde2b8,
        Te = F.a.ja94f34d,
        Me = F.a.d0b74a5a,
        Ne = F.a.gd4302ec,
        Be = F.a.bdc6f5b7,
        He = F.a.f8645654,
        ze = F.a.cf9b1669,
        We = F.a.bdfa2b8c,
        Ue = F.a.df483b47,
        Ke = F.a.d299431b,
        Ge = F.a.ed21f885,
        Ve = F.a.e435cdff,
        Ye = F.a.b92a21d8,
        Xe = F.a.c170a564,
        qe = F.a.ba8f6f81,
        Qe = (function (e) {
          u()(n, e)
          var t = Ce(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
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
                        ae.a,
                        { accessibilityRole: 'tablist' },
                        g.a.createElement(L.a, { label: Be, link: '/settings/account', testID: K }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        g.a.createElement(L.a, { label: He, link: '/settings/security_and_account_access', testID: G }),
                        g.a.createElement(L.a, { label: ke, link: '/settings/privacy_and_safety', testID: V }),
                        g.a.createElement(L.a, { label: Ae, link: '/settings/notifications', testID: Y }),
                        g.a.createElement(L.a, {
                          label: ze,
                          link: '/settings/accessibility_display_and_languages',
                          testID: X,
                        }),
                        g.a.createElement(L.a, { label: We, link: '/settings/about', testID: q }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              b()(l()(o), '_renderLoggedOut', function () {
                var e = Object(v.b)(M.u, o.context.featureSwitches)
                return g.a.createElement(
                  ae.a,
                  { testID: U },
                  g.a.createElement(ye.b, { text: je }),
                  g.a.createElement(L.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Fe,
                    link: '/settings/account/personalization',
                  }),
                  g.a.createElement(L.a, { label: Le, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? g.a.createElement(L.a, { description: Ne, label: Me, link: '/settings/cookie_preferences' })
                    : null,
                  g.a.createElement(ge.b, { style: H.a.descriptionText }, Te),
                  o._renderGeneral(),
                )
              }),
              b()(l()(o), '_renderSearchInput', function (e) {
                if (!o.context.featureSwitches.isTrue('settings_revamp_search_bar_enabled')) return null
                var t = [],
                  n = o.state,
                  a = n.isSearching,
                  r = n.searchQuery,
                  c = r.length > 2
                if (c) {
                  var i,
                    l = Oe(e.values())
                  try {
                    var s = function () {
                      var e = i.value,
                        n = r.toLocaleLowerCase(),
                        a = e.title.toLocaleLowerCase().includes(n),
                        o = e.synonyms.some(function (e) {
                          return e.toLocaleLowerCase().includes(n)
                        })
                      ;(a || o) &&
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
                  alwaysOpen: a,
                  dropdownPosition: 'inline',
                  inputStyle: Ze.input,
                  items: t,
                  onBackClicked: Object(W.a)() ? o._handleSearchInputBackClicked : void 0,
                  onFocus: o._handleSearchInputFocus,
                  onItemClick: o._handleSearchItemClicked,
                  onQueryChange: o._handleSearchQueryChanged,
                  placeholder: qe,
                  renderEmptyState: function (e) {
                    var t = e.style
                    return c
                      ? g.a.createElement(ve.a, { header: Ye({ query: r }), message: Xe, style: t })
                      : g.a.createElement(
                          ae.a,
                          { style: [t, Ze.searchEmptyState] },
                          g.a.createElement(ge.b, { align: 'center', color: 'gray700' }, Ve),
                        )
                  },
                  rounded: !0,
                  shouldRenderEmptyState: !c || 0 === t.length,
                  source: be.d.SearchBox,
                })
              }),
              b()(l()(o), '_renderGeneral', function () {
                return g.a.createElement(
                  ae.a,
                  null,
                  g.a.createElement(Ee.a, null),
                  g.a.createElement(ye.b, { text: Ie }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? g.a.createElement(L.a, { label: De, link: '/settings/display', testID: Q })
                    : null,
                  o._isUserLoggedIn() ? g.a.createElement(L.a, { label: Re, link: '/settings/data', testID: Z }) : null,
                  o._isUserLoggedIn()
                    ? g.a.createElement(L.a, { label: Pe, link: '/settings/accessibility', testID: X })
                    : null,
                  g.a.createElement(L.a, { label: We, link: '/settings/about', testID: q }),
                )
              }),
              b()(l()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? g.a.createElement(L.a, { label: Ue, link: '/settings/feature_switches' })
                  : null
              }),
              b()(l()(o), '_renderMonetization', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === B.a.Monetization
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? g.a.createElement(L.a, { label: Ke, link: t }) : null
              }),
              b()(l()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === B.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? g.a.createElement(L.a, { label: Ge, link: t }) : null
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
              (o._handleSearchQueryChanged = Object(A.a)(o._handleSearchQueryChanged, 250)),
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
                    T.a,
                    null,
                    g.a.createElement(
                      N.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: xe },
                      this._isUserLoggedIn() || Object(Se.c)(this.context.featureSwitches) === Se.a.AcceptAllCookies
                        ? g.a.createElement(D.a, {
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
                  return Object(R.a)(e)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(Qe, 'contextType', we.a)
      var Ze = le.a.create(function (e) {
        return {
          searchEmptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
          input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
        }
      })
      t.default = I(Qe)
    },
    ctla: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
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
        return r.a.createElement(
          s.b,
          { namespace: m },
          r.a.createElement(
            i.a,
            null,
            r.a.createElement(
              u.a,
              { location: t, title: f },
              r.a.createElement(
                d.a,
                null,
                r.a.createElement(l.a, { label: p, link: '/settings/muted/all' }),
                r.a.createElement(l.a, { label: h, link: '/settings/muted_keywords' }),
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
          return I
        }),
        n.d(t, 'SettingsAboutScreen', function () {
          return A
        })
      n('tQbP'), n('LW0h'), n('vrRf'), n('hBvt'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
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
        S = n('7JQg'),
        O = d.a.cedbb01c,
        _ = d.a.b4f917d0,
        C = d.a.bdfa2b8c,
        P = d.a.j0783ebe,
        k = d.a.c0398892,
        x = { page: 'settings', section: 'about' }
      function I(e) {
        var t = []
        return (
          t.push(r.a.createElement(y.b, { text: k })),
          t.push(
            r.a.createElement(g.a, {
              label: k,
              link: { external: !0, pathname: 'https://twitter.com/i/release_notes' },
            }),
          ),
          r.a.Children.toArray(t)
        )
      }
      function A(e) {
        var t = e.location,
          n = e.scribeAction,
          a = e.viewerCountry ? e.viewerCountry.toLowerCase() : null,
          o = s.a
            .filter(function (e) {
              return !e.excludeOnSettingsPage && (!e.country || e.country.indexOf(a) > -1)
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
        return r.a.createElement(
          S.b,
          { namespace: x },
          r.a.createElement(
            f.a,
            null,
            r.a.createElement(
              p.a,
              { location: t, screenType: 'primaryDetail', title: C },
              r.a.createElement(
                b.a,
                { testID: m },
                r.a.createElement(v.a, { description: P }),
                r.a.createElement(I, { scribeAction: n }),
                r.a.createElement(E.a, null),
                r.a.createElement(y.b, { text: O }),
                c.map(function (e, t) {
                  return r.a.createElement(g.a, {
                    key: e.text,
                    label: e.text,
                    link: { external: !0, pathname: e.link },
                  })
                }),
                l.map(function (e) {
                  return r.a.createElement(
                    w.b,
                    { color: 'gray700', key: e.text, size: 'subtext2', style: [h.a.infoText, h.a.bottomBorder] },
                    e.text,
                  )
                }),
                r.a.createElement(E.a, null),
                r.a.createElement(y.b, { text: _ }),
                i.map(function (e, t) {
                  return r.a.createElement(g.a, {
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
      t.default = Object(S.c)(x)(l(A))
    },
    htPi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DisplayScreen', function () {
          return C
        })
      var a = n('ERkP'),
        r = n.n(a),
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
        S = i.a.ce494bb3,
        O = i.a.c783d45e,
        _ = i.a.h306a357,
        C = function (e) {
          var t = e.location
          return r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: E },
              r.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: P.aboutText, testID: u }, w),
              r.a.createElement(h.a, null),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: S }),
              r.a.createElement(d.a, null),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: O }),
              r.a.createElement(m.a, { style: P.colorPicker }, r.a.createElement(p.a, null)),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: _ }),
              r.a.createElement(m.a, { style: P.backgroundPicker }, r.a.createElement(f.a, null)),
            ),
          )
        },
        P = v.a.create(function (e) {
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
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var a = n('0vv5'),
        r = 500,
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
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
      var a = n('RhWx'),
        r = n.n(a),
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
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
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
          a = l.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? d(d({}, a.scope), {}, { src: t, q: r }) : null
      }
      function p(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(l.b.WordEnd),
          o = r >= 0 ? n.slice(r) : '',
          c = a.search(l.b.WordBoundary),
          i = o + a.slice(0, c)
        return i.trim() ? { start: r, end: e + c, word: i } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function b(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(o))
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
          return Oe
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
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
        S = n('uD2z'),
        O = n('li/m'),
        _ = n('G6rE'),
        C = n('0KEI'),
        P = n('oEGd'),
        k = Object(w.createSelector)(
          v.selectPreferencesFetchStatus,
          v.selectUserPreferences,
          E.g,
          O.d,
          function (e, t, n, a) {
            return { fetchStatus: e, personalizationString: Object(S.a)(t), settings: n, hasCommunityMemberships: a }
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
        I = Object(P.g)(k, x),
        A = n('v//M'),
        D = n('3XMw'),
        R = n.n(D),
        j = n('yoO3'),
        F = n('7FtF'),
        L = 'privacyAndSafetyScreen',
        T = n('MWbm'),
        M = n('Irs7'),
        N = n('v6aA'),
        B = n('6vad'),
        H = n('cCdp'),
        z = n('csss'),
        W = n('0yYu'),
        U = n('eb3s')
      function K(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var G = R.a.cad53943,
        V = R.a.bab1f8b0,
        Y = R.a.f5e59e90,
        X = R.a.i0310b4e,
        q = { headline: R.a.j8bf07ab, text: R.a.ca8034b3, confirmButtonLabel: R.a.c5d4192a },
        Q = { headline: R.a.gea6cc19, text: R.a.j7fc0afc, confirmButtonLabel: R.a.f527b322 },
        Z = R.a.jabb9c9a,
        J = R.a.f56d108e,
        $ = { all: R.a.d165c992, following: R.a.ea339390, none: R.a.e3a761ee },
        ee = R.a.d4986f85,
        te = R.a.h6ce12ed,
        ne = R.a.ebcb68ae,
        ae = R.a.afdf29b8,
        re = R.a.e1929815,
        oe = R.a.d9172541,
        ce = R.a.e84e1c41,
        ie = R.a.hefdc08f,
        le = R.a.b608c1a0,
        se = R.a.j2c3033a,
        ue = R.a.fd4d9068,
        de = R.a.fd4d9068,
        fe = R.a.hfb77cf5,
        pe = R.a.fc1d217b,
        he = R.a.acdcc101,
        me = R.a.hfc86556,
        be = R.a.a5f32aa2,
        ye = R.a.eb75875d,
        ge = R.a.aea62567,
        ve = R.a.e8f57e07,
        Ee = R.a.e8f57e07,
        we = R.a.b59540c2,
        Se = { all: R.a.bd34d8f8, following: R.a.d22dad9e, none: R.a.ad41e8b3 },
        Oe = (function (e) {
          u()(n, e)
          var t = K(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
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
                var a = e.props,
                  r = a.analytics,
                  o = a.patchUser
                n
                  ? e.setState({ showProtectedConfirmation: !0 })
                  : e._updateSettings(b()({}, t, !1)).then(function () {
                      r.scribe({ section: 'privacy', element: 'protected', action: 'disable' }),
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
                  a = t.patchUser
                e._updateSettings({ protected: !0 }).then(function () {
                  n.scribe({ section: 'privacy', element: 'protected', action: 'enable' }),
                    e.context.loggedInUserId && a(e.context.loggedInUserId, { protected: !0 })
                })
              }),
              b()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.personalizationString,
                  a = t.settings,
                  r = $[a.allow_media_tagging],
                  o = Se[a.allow_contributor_request]
                return g.a.createElement(
                  T.a,
                  null,
                  g.a.createElement(B.b, { text: V }),
                  g.a.createElement(H.a, {
                    checked: a.protected,
                    helpText: X,
                    label: Y,
                    learnMoreLink: 'https://support.twitter.com/articles/14016',
                    name: 'protected',
                    onChange: e._handleProtectedChanged,
                  }),
                  g.a.createElement(z.a, { label: Z, link: '/settings/location' }),
                  g.a.createElement(z.a, { description: r, label: J, link: '/settings/tagging' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(B.b, { text: ee }),
                  g.a.createElement(H.a, {
                    checked: 'all' === a.allow_dms_from,
                    helpText: ne,
                    label: te,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receive',
                    name: 'allow_dms_from',
                    onChange: e._handleDMFromChanged,
                  }),
                  g.a.createElement(H.a, {
                    checked: 'enabled' === a.dm_quality_filter,
                    helpText: re,
                    label: ae,
                    learnMoreLink: 'https://support.twitter.com/articles/14606',
                    name: 'dm_quality_filter',
                    onChange: e._handleDMQualityFilterChanged,
                  }),
                  g.a.createElement(H.a, {
                    checked: 'all_enabled' === a.dm_receipt_setting,
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
                      g.a.createElement(B.b, { text: ie }),
                      g.a.createElement(H.a, {
                        checked: a.allow_authenticated_periscope_requests,
                        helpText: se,
                        label: le,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  g.a.createElement(W.a, null),
                  g.a.createElement(B.b, { text: ue }),
                  g.a.createElement(z.a, { label: de, link: '/settings/contacts' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(B.b, { text: fe }),
                  g.a.createElement(H.a, {
                    checked: a.display_sensitive_media,
                    label: pe,
                    name: 'display_sensitive_media',
                    onChange: e._handleItemChanged,
                  }),
                  g.a.createElement(H.a, {
                    checked: a.nsfw_user,
                    disabled: a.nsfw_admin,
                    label: he,
                    name: 'nsfw_user',
                    onChange: e._handleItemChanged,
                  }),
                  g.a.createElement(z.a, { label: me, link: '/settings/mute' }),
                  g.a.createElement(z.a, { label: be, link: '/settings/blocked/all' }),
                  g.a.createElement(z.a, { label: ye, link: '/settings/notifications' }),
                  g.a.createElement(z.a, { label: ge, link: '/settings/search' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(B.b, { text: Ee }),
                  g.a.createElement(z.a, { description: n, label: ve, link: '/settings/account/personalization' }),
                  g.a.createElement(W.a, null),
                  g.a.createElement(B.b, { key: 'header', text: we }),
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
                    a = e.location,
                    r = n ? Q : q
                  return g.a.createElement(
                    T.a,
                    { testID: L },
                    g.a.createElement(
                      F.a,
                      { location: a, screenType: 'primaryDetail', title: G },
                      g.a.createElement(
                        j.a,
                        null,
                        g.a.createElement(A.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                        this.state.showProtectedConfirmation
                          ? g.a.createElement(U.a, {
                              confirmButtonLabel: r.confirmButtonLabel,
                              confirmButtonType: 'primary',
                              headline: r.headline,
                              onCancel: this._handleProtectedCancel,
                              onConfirm: this._handleProtectedConfirm,
                              text: r.text,
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
      b()(Oe, 'contextType', N.a)
      t.default = Object(M.a)(I(Oe), { page: 'settings', section: 'safety' })
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
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.dae57a41,
        c = r.a.i7cbc154,
        i = r.a.e3a761ee,
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
        return a
      })
      n('yH/f')
      var a = Object.freeze({ inline: 'inline', prompt: 'prompt', require: 'require' })
    },
  },
])
//# sourceMappingURL=WIPED
