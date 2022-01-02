;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
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
    ALyI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsVideoAutoplay', function () {
          return G
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
        b = n('KEM+'),
        m = n.n(b),
        y = (n('MvUL'), n('KqXw'), n('ERkP')),
        g = n('FPOR'),
        E = n('zh9S'),
        v = n('hqKg'),
        O = n('0KEI'),
        _ = n('oEGd'),
        w = n('H9MA'),
        S = Object(v.createSelector)(w.f, w.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        P = {
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateVideoAutoplay: w.i,
        },
        C = Object(_.g)(S, P),
        A = n('45mF'),
        x = n('3XMw'),
        k = n.n(x),
        I = n('7FtF'),
        D = n('3cwy'),
        R = n('MWbm'),
        j = n('Y3cQ'),
        L = n('t62R'),
        F = n('6v1f')
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function N(e) {
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
      var H = k.a.a776eed7,
        B = k.a.ede134f2,
        z = k.a.i859a9d3,
        U = { page: 'settings', section: 'autoplay' },
        W = function (e) {
          return { value: e, label: g.a[e] }
        },
        G = (function (e) {
          u()(n, e)
          var t = N(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              m()(l()(o), '_handleItemChanged', function (e, t) {
                var n = o.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.scribeAction,
                  c = n.updateVideoAutoplay
                a(M(M({}, U), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  c(F.b[t]).catch(r(M(M({}, Object(A.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(W(F.b.Always)),
              F.c && o._options.push(W(F.b.WiFiOnly)),
              o._options.push(W(F.b.Off)),
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
                    (!t && Object(D.a)()) || this.props.history.replace('/settings/data')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.videoAutoplay
                  return y.createElement(
                    I.a,
                    { location: t, title: H },
                    y.createElement(
                      R.a,
                      null,
                      y.createElement(j.a, {
                        description: y.createElement(
                          y.Fragment,
                          null,
                          ''.concat(B, ' '),
                          y.createElement(L.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, z),
                        ),
                        label: H,
                        name: 'video_autoplay',
                        onChange: this._handleItemChanged,
                        options: this._options,
                        value: n || F.a,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = C(G)
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
        l = n('sNn6'),
        s = n('rHpw'),
        u = n('MWbm')
      function d(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = s.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: f(
            f({}, s.a.absoluteFillObject),
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
        return i.createElement(l.a, n, function (e) {
          return i.createElement(
            u.a,
            { style: e && p.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? i.createElement(u.a, { pointerEvents: 'none', style: p.overlay }) : null,
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
        b = n('KEM+'),
        m = n.n(b),
        y = (n('2G9S'), n('ERkP')),
        g = n('k49u'),
        E = n('rxPX'),
        v = n('0KEI'),
        O = Object(E.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        _ = n('kGix'),
        w = n('v//M'),
        S = n('5FtR')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var C = (function (e) {
          u()(n, e)
          var t = P(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), 'state', { verificationRequired: !1 }),
              m()(l()(e), '_handleFetch', function () {
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
                      m()(t, g.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, g.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, 'showToast', !1),
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
                    a = t === _.a.FAILED && r
                  return y.createElement(
                    y.Fragment,
                    null,
                    a
                      ? y.createElement(S.a, { to: '/i/flow/verify_account_ownership' })
                      : y.createElement(w.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component),
        A = O.forwardRef(C)
      t.a = A
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
        c = n('BUB3'),
        i = n('shC7'),
        l = n('csss'),
        s = n('t62R')
      t.a = function (e) {
        return o.createElement(c.a, { exact: !0, path: e.link }, function (t) {
          var n = i.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return o.createElement(l.a, a()({ isActive: t }, e, { label: o.createElement(s.b, { dir: n }, e.label) }))
        })
      }
    },
    NyKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return E
        }),
        n.d(t, 'g', function () {
          return v
        }),
        n.d(t, 'h', function () {
          return O
        }),
        n.d(t, 'd', function () {
          return _
        }),
        n.d(t, 'c', function () {
          return w
        }),
        n.d(t, 'e', function () {
          return S
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
        b = Object(s.a)(p, 'CREATE_DOWNLOAD'),
        m = Object.freeze({
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
        y = [m.NEW, m.INPROGRESS, m.INPROGRESS_ASYNC, m.ZIPPING, m.PUBLISHING, m.NOTIFYING],
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
            case b.SUCCESS:
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
            case b.FAILURE:
              return d(d({}, t), {}, { fetchStatus: i.a.NONE })
            default:
              return t
          }
        }),
      )
      var E = function (e) {
          return e.userData.downloads
        },
        v = function (e) {
          return e.userData.fetchStatus
        },
        O = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        _ = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.fetchDownloads })({
              actionTypes: h,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        w = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.createDataDownload })({
              actionTypes: b,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        S = function (e) {
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
        b = n('KEM+'),
        m = n.n(b),
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        g = n('zh9S'),
        E = n('NyKK'),
        v = n('rxPX'),
        O = n('0KEI'),
        _ = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: E.g, downloads: E.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: E.d,
              googleAnalyticsPageView: g.a,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: E.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        w = n('XYIJ'),
        S = (n('6U7i'), n('3XMw')),
        P = n.n(S),
        C = n('aITJ'),
        A = n('MWbm'),
        x = n('/yvb'),
        k = n('eb3s'),
        I = n('855f')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var R = P.a.cfd2f35d,
        j = P.a.fc5bfd95,
        L = P.a.gee8110d,
        F = P.a.c326f156,
        T = P.a.c9fe9b56,
        M = P.a.j54b679a,
        N = P.a.ac63840c,
        H = P.a.bcd9b0ed,
        B = (function (e) {
          u()(n, e)
          var t = D(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), 'state', { showConfirmation: !1 }),
              m()(l()(e), '_shouldDisplayConfirmation', !1),
              m()(l()(e), '_handleCancel', function () {
                e.setState({ showConfirmation: !1 })
              }),
              m()(l()(e), '_handleNeedsConfirmationActionCellPress', function () {
                e.setState({ showConfirmation: !0 })
              }),
              m()(l()(e), '_handleConfirm', function (t) {
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
                  this._shouldDisplayConfirmation = C.b.isMobileOS()
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
                    i = M({ size: n.getSizeLabel(o) }),
                    l = t ? F : L
                  return y.createElement(
                    A.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? y.createElement(
                          A.a,
                          null,
                          y.createElement(
                            x.a,
                            {
                              disabled: t,
                              onPress: this._handleNeedsConfirmationActionCellPress,
                              size: 'small',
                              style: w.a.narrowButton,
                              type: 'brandFilled',
                            },
                            l,
                          ),
                          this.state.showConfirmation && !t
                            ? y.createElement(k.a, {
                                cancelButtonLabel: R,
                                confirmButtonLabel: j,
                                confirmButtonLink: { pathname: c || '', external: !0 },
                                headline: T,
                                onCancel: this._handleCancel,
                                onConfirm: this._handleConfirm,
                                text: i,
                              })
                            : null,
                        )
                      : y.createElement(
                          x.a,
                          {
                            disabled: t,
                            link: c ? { pathname: c, external: !0 } : void 0,
                            onPress: r,
                            size: 'small',
                            style: w.a.narrowButton,
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
        })(y.Component)
      m()(B, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? N({ size: I.a.getFormattedCount(t) })
          : H({ size: I.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var z = n('7FtF'),
        U = n('ClNT'),
        W = n('t62R'),
        G = n('rHpw'),
        K = n('v6aA')
      function X(e) {
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
      var Y = P.a.f56af9cc,
        V = P.a.b2ed92c3,
        q = P.a.ce5d2c46,
        Q = P.a.dd9ec81f,
        Z = P.a.c7227886,
        J = P.a.a0c3f812,
        $ = P.a.ba2e82a1,
        ee = P.a.eea30bb4,
        te = P.a.f2cde471,
        ne = P.a.b7ce9dbe,
        re = P.a.fbc92b61,
        ae = (function (e) {
          u()(n, e)
          var t = X(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_render', function () {
                var t = e.props.downloads.nonFailed
                return t.length ? y.createElement(A.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              m()(l()(e), '_renderDownloadItems', function (t, n) {
                return y.createElement(
                  A.a,
                  { key: n },
                  t.urls && 'COMPLETED' === t.status
                    ? t.urls.map(e._renderDownloadButtons.bind(l()(e), t))
                    : e._renderUnavailableButton(t),
                )
              }),
              m()(l()(e), '_handleConfirm', function (t) {
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
                  return y.createElement(
                    z.a,
                    { location: r, title: Y },
                    y.createElement(U.a, { fetch: t, fetchStatus: n, renderChildren: this._render }),
                  )
                },
              },
              {
                key: '_renderEmptyState',
                value: function () {
                  return y.createElement(
                    A.a,
                    { style: oe.emptyState },
                    y.createElement(W.b, { size: 'title4' }, Q),
                    y.createElement(W.b, { color: 'gray700', style: oe.emptyStateDescription }, J),
                    y.createElement(
                      x.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: w.a.narrowButton,
                        type: 'brandFilled',
                      },
                      Z,
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
                  return y.createElement(
                    A.a,
                    { key: ''.concat(a), style: [w.a.narrowButtonRow, w.a.bottomBorder, w.a.labelContainer] },
                    y.createElement(
                      A.a,
                      null,
                      y.createElement(W.b, { weight: 'bold' }, re({ currentIndex: a, count: o })),
                      e.generated
                        ? y.createElement(W.b, { color: 'gray700' }, ee({ date: $(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? y.createElement(W.b, { color: 'gray700' }, te({ date: $(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? y.createElement(W.b, { color: 'gray700' }, ne({ size: B.getSizeLabel(t.size_b) }))
                        : null,
                    ),
                    y.createElement(B, { disabled: !c, onConfirm: this._handleConfirm(t), url: t }),
                  )
                },
              },
              {
                key: '_renderUnavailableButton',
                value: function (e) {
                  return y.createElement(
                    A.a,
                    { style: [w.a.narrowButtonRow, w.a.bottomBorder, w.a.labelContainer] },
                    y.createElement(W.b, { weight: 'bold' }, re({ currentIndex: 1, count: 1 })),
                    y.createElement(
                      x.a,
                      { disabled: !0, size: 'small', style: w.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? V : q,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      m()(ae, 'contextType', K.a)
      var oe = G.a.create(function (e) {
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
      t.default = _(ae)
    },
    'Q++C': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DataUsageScreen', function () {
          return G
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
        b = n('KEM+'),
        m = n.n(b),
        y = n('ERkP'),
        g = n('FPOR'),
        E = n('P1r1'),
        v = n('rxPX'),
        O = n('0KEI'),
        _ = n('H9MA'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { dataSaverMode: _.c, videoAutoplay: _.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: _.b,
              updateDataSaverMode: _.g,
              updateSettings: E.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        S = n('45mF'),
        P = n('6v1f'),
        C = n('3XMw'),
        A = n.n(C),
        x = n('yoO3'),
        k = n('7FtF'),
        I = n('3cwy'),
        D = 'dataSaverBooleanItem',
        R = n('v6aA'),
        j = n('xHsv'),
        L = n('cCdp'),
        F = n('csss')
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function N(e) {
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
      var H = A.a.eafe3287,
        B = A.a.d76fe4fc,
        z = A.a.a57a341b,
        U = A.a.d88102cf,
        W = A.a.a776eed7,
        G = (function (e) {
          u()(n, e)
          var t = N(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              m()(l()(o), '_handleDataSaverChanged', function (e, t) {
                var n = o.props,
                  r = n.analytics,
                  a = n.createLocalApiErrorHandler,
                  c = n.updateDataSaverMode
                r.scribe({ element: e, action: t ? 'on' : 'off' }),
                  c({ enabled: t }).catch(a(M(M({}, Object(S.a)()), {}, { showToast: !0 })))
              }),
              (o._showVideoAutoplaySetting = Object(I.a)()),
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
                  return y.createElement(
                    x.a,
                    null,
                    y.createElement(
                      k.a,
                      { location: n, screenType: 'secondaryDetail', title: H },
                      y.createElement(j.a, { description: B }),
                      y.createElement(L.a, {
                        checked: t,
                        helpText: U,
                        label: z,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: D,
                      }),
                      this._showVideoAutoplaySetting &&
                        y.createElement(F.a, {
                          description: g.a[r || P.a],
                          disabled: t,
                          label: W,
                          link: '/settings/autoplay',
                        }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      m()(G, 'contextType', R.a)
      t.default = w(G)
    },
    REKA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccessibilityScreen', function () {
          return re
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
        b = n('KEM+'),
        m = n.n(b),
        y = (n('2G9S'), n('ERkP')),
        g = n('ye3X'),
        E = n('FPOR'),
        v = n('6/RC'),
        O = n('rxPX'),
        _ = n('0KEI'),
        w = n('P1r1'),
        S = n('H9MA'),
        P = Object(O.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: w.h,
              autoPollNewTweets: w.i,
              dataSaverMode: S.c,
              reducedMotionEnabled: w.x,
              videoAutoplay: S.f,
              highContrastEnabled: w.q,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              updateSettings: w.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        C = n('6v1f'),
        A = n('3XMw'),
        x = n.n(A),
        k = n('yoO3'),
        I = n('7FtF'),
        D = n('3cwy'),
        R = 'accessibilityScreen',
        j = n('MWbm'),
        L = n('38/B'),
        F = n('rHpw'),
        T = n('xHsv'),
        M = n('6vad'),
        N = n('cCdp'),
        H = n('0yYu'),
        B = n('csss'),
        z = n('v6aA')
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
      var W = x.a.e3719c15,
        G = x.a.a5208fad,
        K = x.a.d5b646bd,
        X = x.a.jfe6a3a0,
        Y = x.a.add55c97,
        V = x.a.a6d5b010,
        q = x.a.e8c72272,
        Q = x.a.dba2cdd1,
        Z = x.a.d070244e,
        J = x.a.icfa5e8b,
        $ = x.a.ae41b002,
        ee = x.a.e82b294e,
        te = x.a.ea284ab8,
        ne = x.a.a776eed7,
        re = (function (e) {
          u()(n, e)
          var t = U(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              m()(
                l()(o),
                '_showAltTextNudgeSetting',
                o.context.featureSwitches.allTrue([
                  'responsive_web_alt_text_nudges_enabled',
                  'responsive_web_alt_text_nudges_settings_enabled',
                ]),
              ),
              m()(
                l()(o),
                '_showAutoPollingSetting',
                o.context.featureSwitches.isTrue('responsive_web_settings_timeline_polling_enabled'),
              ),
              m()(l()(o), '_handleReducedMotionChanged', function (e, t) {
                o._handleSettingChanged(e, t), L.a.setReducedMotion(t)
              }),
              m()(l()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), F.a.setHighContrast(t)
              }),
              m()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  r = n.analytics,
                  a = n.createLocalApiErrorHandler,
                  c = n.updateSettings,
                  i = t ? g.a.prompt : null
                r.scribe({ element: ''.concat(e, '_').concat(i || 'off'), action: 'selected' }),
                  c(m()({}, e, i)).catch(a({ showToast: !0 }))
              }),
              m()(l()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  r = n.analytics,
                  a = n.createLocalApiErrorHandler,
                  c = n.updateSettings
                r.scribe({ element: e, action: t ? 'on' : 'off' }), c(m()({}, e, t)).catch(a({ showToast: !0 }))
              }),
              (o._showVideoAutoplaySetting = Object(D.a)()),
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
                    i = v.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return y.createElement(
                    k.a,
                    null,
                    y.createElement(
                      I.a,
                      { location: a, screenType: 'secondaryDetail', title: W },
                      y.createElement(
                        j.a,
                        { testID: R },
                        y.createElement(T.a, { description: G }),
                        y.createElement(M.b, { text: K }),
                        y.createElement(N.a, {
                          checked: r,
                          helpText: Q,
                          label: q,
                          name: 'highContrastEnabled',
                          onChange: this._handleHighContrastChanged,
                        }),
                      ),
                      this._showVideoAutoplaySetting
                        ? y.createElement(
                            j.a,
                            null,
                            y.createElement(H.a, null),
                            y.createElement(M.b, { text: X }),
                            y.createElement(N.a, {
                              checked: o || i,
                              disabled: i,
                              helpText: i ? $ : J,
                              label: Z,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            y.createElement(B.a, {
                              description: E.a[c || C.a],
                              disabled: n,
                              label: ne,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextNudgeSetting
                        ? y.createElement(
                            j.a,
                            null,
                            y.createElement(H.a, null),
                            y.createElement(M.b, { text: Y }),
                            y.createElement(N.a, {
                              checked: t === g.a.prompt,
                              helpText: te,
                              label: ee,
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
                    ? y.createElement(
                        y.Fragment,
                        null,
                        y.createElement(H.a, null),
                        y.createElement(M.b, { text: V }),
                        y.createElement(N.a, {
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
        })(y.Component)
      m()(re, 'contextType', z.a)
      t.default = P(re)
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
        a = n('fyvP'),
        o = n('rHpw'),
        c = n('MWbm')
      t.a = function (e) {
        return r.createElement(c.a, { style: i.root }, r.createElement(a.a, e))
      }
      var i = o.a.create(function (e) {
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
          return ke
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
        b = n('KEM+'),
        m = n.n(b),
        y = (n('7x/C'), n('lTEL'), n('kYxP'), n('jQ3i'), n('x4t0'), n('5BYb'), n('hBpG'), n('ERkP')),
        g = (n('+KXO'), n('NeAX')),
        E = n('RqPI'),
        v = n('hqKg'),
        O = n('kGix'),
        _ = n('O0uF'),
        w = n('G6rE'),
        S = n('rxPX'),
        P = n('0KEI'),
        C = Object(v.createSelector)(E.l, g.selectPreferencesFetchStatus, function (e, t) {
          return e ? O.a.LOADED : t
        }),
        A = Object(S.a)()
          .propsFromState(function () {
            return {
              fetchStatus: C,
              loggedInUser: w.e.selectLoggedInUser,
              personalizationPreferences: g.selectUserPreferences,
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
              fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        x = n('VY6S'),
        k = n('v//M'),
        I = n('uD2z'),
        D = n('3XMw'),
        R = n.n(D),
        j = n('KQzH'),
        L = n('yoO3'),
        F = n('7FtF'),
        T = n('Grlw'),
        M = n('iCwC'),
        N = n('3cwy'),
        H = 'loggedOutPrivacySection',
        B = 'accountLink',
        z = 'accountAccessLink',
        U = 'privacyAndSafetyLink',
        W = 'notificationsLink',
        G = 'accessibilityLink',
        K = 'aboutLink',
        X = 'displayLink',
        Y = 'dataLink',
        V = n('8t44'),
        q = n('GZwR'),
        Q = n('MWbm'),
        Z = n('6vad'),
        J = n('t62R'),
        $ = n('0yYu'),
        ee = n('rHpw'),
        te = n('v6aA'),
        ne = n('AS3p')
      function re(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return ae(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
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
      function ae(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function oe(e) {
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
      var ce = R.a.e3719c15,
        ie = R.a.cad53943,
        le = R.a.bb081ea1,
        se = R.a.e95b9448,
        ue = R.a.eb75875d,
        de = R.a.c4881c66,
        fe = R.a.eafe3287,
        pe = R.a.f458a3b1,
        he = R.a.e8f57e07,
        be = R.a.b7fde2b8,
        me = R.a.ja94f34d,
        ye = R.a.d0b74a5a,
        ge = R.a.gd4302ec,
        Ee = R.a.bdc6f5b7,
        ve = R.a.f8645654,
        Oe = R.a.cf9b1669,
        _e = R.a.bdfa2b8c,
        we = R.a.df483b47,
        Se = R.a.d299431b,
        Pe = R.a.ed21f885,
        Ce = R.a.e435cdff,
        Ae = R.a.ae3d6086,
        xe = R.a.ba8f6f81,
        ke = (function (e) {
          u()(n, e)
          var t = oe(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              m()(l()(o), '_renderLoggedIn', function () {
                var e = o.props.searchIndex
                return y.createElement(
                  y.Fragment,
                  null,
                  o._renderSearchInput(e),
                  y.createElement(
                    Q.a,
                    { accessibilityRole: 'tablist' },
                    y.createElement(j.a, { label: Ee, link: '/settings/account', testID: B }),
                    o._renderMonetization(),
                    o._renderTwitterBlue(),
                    y.createElement(j.a, { label: ve, link: '/settings/security_and_account_access', testID: z }),
                    y.createElement(j.a, { label: ie, link: '/settings/privacy_and_safety', testID: U }),
                    y.createElement(j.a, { label: ue, link: '/settings/notifications', testID: W }),
                    y.createElement(j.a, {
                      label: Oe,
                      link: '/settings/accessibility_display_and_languages',
                      testID: G,
                    }),
                    y.createElement(j.a, { label: _e, link: '/settings/about', testID: K }),
                    o._renderFeatureSwitch(),
                  ),
                )
              }),
              m()(l()(o), '_renderLoggedOut', function () {
                return y.createElement(
                  Q.a,
                  { testID: H },
                  y.createElement(Z.b, { text: pe }),
                  y.createElement(j.a, {
                    description: o._renderPersonalizationDescription(),
                    label: he,
                    link: '/settings/account/personalization',
                  }),
                  y.createElement(j.a, { label: be, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? y.createElement(j.a, { description: ge, label: ye, link: '/settings/cookie_preferences' })
                    : null,
                  y.createElement(J.b, { style: M.a.descriptionText }, me),
                  o._renderGeneral(),
                )
              }),
              m()(l()(o), '_renderSearchInput', function (e) {
                if (!o.context.featureSwitches.isTrue('settings_revamp_search_bar_enabled')) return null
                var t = [],
                  n = o.state.searchQuery,
                  r = n.length > 2
                if (r) {
                  var a,
                    c = re(e.values())
                  try {
                    var i = function () {
                      var e = a.value,
                        r = n.toLocaleLowerCase(),
                        o = e.title.toLocaleLowerCase().includes(r),
                        c = e.synonyms.some(function (e) {
                          return e.toLocaleLowerCase().includes(r)
                        })
                      ;(o || c) &&
                        t.push({
                          id: e.id,
                          type: 'navigation_link',
                          data: { text: e.title, location: { pathname: e.path, openInSameFrame: !0 } },
                        })
                    }
                    for (c.s(); !(a = c.n()).done; ) i()
                  } catch (l) {
                    c.e(l)
                  } finally {
                    c.f()
                  }
                }
                return y.createElement(
                  Q.a,
                  { style: Ie.root },
                  y.createElement(V.a, {
                    inputStyle: Ie.input,
                    items: t,
                    onItemClick: o._handleSearchItemClicked,
                    onQueryChange: o._handleSearchQueryChanged,
                    placeholder: xe,
                    renderEmptyState: function (e) {
                      var t = e.style
                      return y.createElement(
                        Q.a,
                        { style: [t, Ie.emptyState] },
                        y.createElement(J.b, { align: 'center', color: 'gray700' }, r ? Ae : Ce),
                      )
                    },
                    rounded: !0,
                    shouldClearOnSelect: !0,
                    shouldRenderEmptyState: !r || 0 === t.length,
                    source: q.d.SearchBox,
                  }),
                )
              }),
              m()(l()(o), '_renderGeneral', function () {
                return y.createElement(
                  Q.a,
                  null,
                  y.createElement($.a, null),
                  y.createElement(Z.b, { text: se }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? y.createElement(j.a, { label: de, link: '/settings/display', testID: X })
                    : null,
                  o._isUserLoggedIn() ? y.createElement(j.a, { label: fe, link: '/settings/data', testID: Y }) : null,
                  o._isUserLoggedIn()
                    ? y.createElement(j.a, { label: ce, link: '/settings/accessibility', testID: G })
                    : null,
                  y.createElement(j.a, { label: _e, link: '/settings/about', testID: K }),
                )
              }),
              m()(l()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? y.createElement(j.a, { label: we, link: '/settings/feature_switches' })
                  : null
              }),
              m()(l()(o), '_renderMonetization', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === T.a.Monetization
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? y.createElement(j.a, { label: Se, link: t }) : null
              }),
              m()(l()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === T.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? y.createElement(j.a, { label: Pe, link: t }) : null
              }),
              m()(l()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              m()(l()(o), '_isUserLoggedIn', function () {
                return !!o.props.loggedInUser
              }),
              m()(l()(o), '_handleSearchQueryChanged', function (e) {
                o.setState({ searchQuery: e })
              }),
              m()(l()(o), '_handleSearchItemClicked', function (e) {
                var t = o.props.history
                if ('navigation_link' === e.type) {
                  var n = 'string' == typeof e.data.location ? e.data.location : e.data.location.pathname
                  t.push(n)
                }
              }),
              (o._showVideoAutoplaySetting = Object(N.a)()),
              (o._handleSearchQueryChanged = Object(x.a)(o._handleSearchQueryChanged, 250)),
              (o.state = { searchQuery: '' }),
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
                  return y.createElement(
                    L.a,
                    null,
                    y.createElement(
                      F.a,
                      { location: n, screenType: 'root', title: le },
                      this._isUserLoggedIn() || Object(ne.c)(this.context.featureSwitches) === ne.a.AcceptAllCookies
                        ? y.createElement(k.a, {
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
                  return Object(I.a)(e)
                },
              },
            ]),
            n
          )
        })(y.Component)
      m()(ke, 'contextType', te.a)
      var Ie = ee.a.create(function (e) {
        return {
          root: { paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8, zIndex: 1 },
          emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
          input: { flexShrink: 1 },
        }
      })
      t.default = A(ke)
    },
    ctla: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        c = n('yoO3'),
        i = n('csss'),
        l = n('7JQg'),
        s = n('7FtF'),
        u = n('MWbm'),
        d = o.a.hfc86556,
        f = o.a.daef29b7,
        p = o.a.i0dd9b9d,
        h = { page: 'settings', section: 'mute' }
      t.default = function (e) {
        var t = e.location
        return r.createElement(
          l.b,
          { namespace: h },
          r.createElement(
            c.a,
            null,
            r.createElement(
              s.a,
              { location: t, title: d },
              r.createElement(
                u.a,
                null,
                r.createElement(i.a, { label: f, link: '/settings/muted/all' }),
                r.createElement(i.a, { label: p, link: '/settings/muted_keywords' }),
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
          return x
        }),
        n.d(t, 'SettingsAboutScreen', function () {
          return k
        })
      n('tQbP'), n('LW0h'), n('vrRf'), n('hBvt'), n('z84I')
      var r = n('ERkP'),
        a = n('zh9S'),
        o = n('RqPI'),
        c = n('rxPX'),
        i = Object(c.a)()
          .propsFromState(function () {
            return { viewerCountry: o.v }
          })
          .propsFromActions(function () {
            return { scribeAction: a.c }
          }),
        l = n('dzZ/'),
        s = n('3XMw'),
        u = n.n(s),
        d = n('yoO3'),
        f = n('7FtF'),
        p = n('iCwC'),
        h = 'aboutScreen',
        b = n('MWbm'),
        m = n('6vad'),
        y = n('csss'),
        g = n('xHsv'),
        E = n('0yYu'),
        v = n('t62R'),
        O = n('7JQg'),
        _ = u.a.cedbb01c,
        w = u.a.b4f917d0,
        S = u.a.bdfa2b8c,
        P = u.a.j0783ebe,
        C = u.a.c0398892,
        A = { page: 'settings', section: 'about' }
      function x(e) {
        var t = []
        return (
          t.push(r.createElement(m.b, { text: C })),
          t.push(
            r.createElement(y.a, { label: C, link: { external: !0, pathname: 'https://twitter.com/i/release_notes' } }),
          ),
          r.Children.toArray(t)
        )
      }
      function k(e) {
        var t = e.location,
          n = e.scribeAction,
          a = e.viewerCountry ? e.viewerCountry.toLowerCase() : null,
          o = l.a
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
          s = o.filter(function (e) {
            return !e.link
          })
        return r.createElement(
          O.b,
          { namespace: A },
          r.createElement(
            d.a,
            null,
            r.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: S },
              r.createElement(
                b.a,
                { testID: h },
                r.createElement(g.a, { description: P }),
                r.createElement(x, { scribeAction: n }),
                r.createElement(E.a, null),
                r.createElement(m.b, { text: _ }),
                c.map(function (e, t) {
                  return r.createElement(y.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
                }),
                s.map(function (e) {
                  return r.createElement(
                    v.b,
                    { color: 'gray700', key: e.text, size: 'subtext2', style: [p.a.infoText, p.a.bottomBorder] },
                    e.text,
                  )
                }),
                r.createElement(E.a, null),
                r.createElement(m.b, { text: w }),
                i.map(function (e, t) {
                  return r.createElement(y.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
                }),
              ),
            ),
          ),
        )
      }
      t.default = Object(O.c)(A)(i(k))
    },
    htPi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DisplayScreen', function () {
          return S
        })
      var r = n('ERkP'),
        a = n('7JQg'),
        o = n('3XMw'),
        c = n.n(o),
        i = n('yoO3'),
        l = n('7FtF'),
        s = 'aboutText',
        u = n('5hXE'),
        d = n('A2ey'),
        f = n('vSJw'),
        p = n('KNZn'),
        h = n('MWbm'),
        b = n('t62R'),
        m = n('0yYu'),
        y = n('6vad'),
        g = n('rHpw'),
        E = c.a.c4881c66,
        v = c.a.a5ce82a4,
        O = c.a.ce494bb3,
        _ = c.a.c783d45e,
        w = c.a.h306a357,
        S = function (e) {
          var t = e.location
          return r.createElement(
            i.a,
            null,
            r.createElement(
              l.a,
              { location: t, screenType: 'secondaryDetail', title: E },
              r.createElement(b.b, { color: 'gray700', size: 'subtext2', style: P.aboutText, testID: s }, v),
              r.createElement(p.a, null),
              r.createElement(m.a, null),
              r.createElement(y.b, { text: O }),
              r.createElement(u.a, null),
              r.createElement(m.a, null),
              r.createElement(y.b, { text: _ }),
              r.createElement(h.a, { style: P.colorPicker }, r.createElement(f.a, null)),
              r.createElement(m.a, null),
              r.createElement(y.b, { text: w }),
              r.createElement(h.a, { style: P.backgroundPicker }, r.createElement(d.a, null)),
            ),
          )
        },
        P = g.a.create(function (e) {
          return {
            aboutText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
            colorPicker: { paddingVertical: e.spaces.space4 },
          }
        })
      t.default = Object(a.c)({ page: 'settings', section: 'display' })(S)
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
          return b
        }),
        n.d(t, 'a', function () {
          return m
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return E
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
      function b(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function m(e, t) {
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
        E = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    tAN7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PrivacyAndSafetyScreen', function () {
          return _e
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
        b = n('KEM+'),
        m = n.n(b),
        y = (n('2G9S'), n('ERkP')),
        g = n('NeAX'),
        E = n('P1r1'),
        v = n('hqKg'),
        O = n('uD2z'),
        _ = n('RqPI'),
        w = n('G6rE'),
        S = n('0KEI'),
        P = n('oEGd'),
        C = Object(v.createSelector)(
          g.selectPreferencesFetchStatus,
          g.selectUserPreferences,
          E.g,
          _.j,
          function (e, t, n, r) {
            return { fetchStatus: e, personalizationString: Object(O.a)(t), settings: n, hasCommunityMemberships: r }
          },
        ),
        A = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
          patchUser: w.e.patchUser,
          updateSettings: E.L,
        },
        x = Object(P.g)(C, A),
        k = n('v//M'),
        I = n('3XMw'),
        D = n.n(I),
        R = n('yoO3'),
        j = n('7FtF'),
        L = 'privacyAndSafetyScreen',
        F = n('MWbm'),
        T = n('Irs7'),
        M = n('v6aA'),
        N = n('6vad'),
        H = n('cCdp'),
        B = n('csss'),
        z = n('0yYu'),
        U = n('eb3s')
      function W(e) {
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
      var G = D.a.cad53943,
        K = D.a.bab1f8b0,
        X = D.a.f5e59e90,
        Y = D.a.i0310b4e,
        V = { headline: D.a.j8bf07ab, text: D.a.ca8034b3, confirmButtonLabel: D.a.c5d4192a },
        q = { headline: D.a.gea6cc19, text: D.a.j7fc0afc, confirmButtonLabel: D.a.f527b322 },
        Q = D.a.jabb9c9a,
        Z = D.a.f56d108e,
        J = { all: D.a.d165c992, following: D.a.ea339390, none: D.a.e3a761ee },
        $ = D.a.d4986f85,
        ee = D.a.h6ce12ed,
        te = D.a.ebcb68ae,
        ne = D.a.afdf29b8,
        re = D.a.e1929815,
        ae = D.a.d9172541,
        oe = D.a.e84e1c41,
        ce = D.a.hefdc08f,
        ie = D.a.b608c1a0,
        le = D.a.j2c3033a,
        se = D.a.fd4d9068,
        ue = D.a.fd4d9068,
        de = D.a.hfb77cf5,
        fe = D.a.fc1d217b,
        pe = D.a.acdcc101,
        he = D.a.hfc86556,
        be = D.a.a5f32aa2,
        me = D.a.eb75875d,
        ye = D.a.aea62567,
        ge = D.a.e8f57e07,
        Ee = D.a.e8f57e07,
        ve = D.a.b59540c2,
        Oe = { all: D.a.bd34d8f8, following: D.a.d22dad9e, none: D.a.ad41e8b3 },
        _e = (function (e) {
          u()(n, e)
          var t = W(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(
                l()(e),
                'showPeriscopeAuthOption',
                e.context.featureSwitches.isTrue('responsive_web_live_video_parity_periscope_auth_enabled'),
              ),
              m()(l()(e), 'state', { showProtectedConfirmation: !1 }),
              m()(l()(e), '_handleItemChanged', function (t, n) {
                e._updateSettings(m()({}, t, n))
              }),
              m()(l()(e), '_handleDMFromChanged', function (t, n) {
                e._updateSettings(m()({}, t, n ? 'all' : 'following'))
              }),
              m()(l()(e), '_handleDMQualityFilterChanged', function (t, n) {
                e._updateSettings(m()({}, t, n ? 'enabled' : 'disabled'))
              }),
              m()(l()(e), '_handleDMReceiptChanged', function (t, n) {
                e._updateSettings(m()({}, t, n ? 'all_enabled' : 'all_disabled'))
              }),
              m()(l()(e), '_handleProtectedChanged', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.patchUser
                n
                  ? e.setState({ showProtectedConfirmation: !0 })
                  : e._updateSettings(m()({}, t, !1)).then(function () {
                      a.scribe({ section: 'privacy', element: 'protected', action: 'disable' }),
                        e.context.loggedInUserId && o(e.context.loggedInUserId, m()({}, t, !1))
                    })
              }),
              m()(l()(e), '_handleProtectedCancel', function () {
                e.setState({ showProtectedConfirmation: !1 })
              }),
              m()(l()(e), '_handleProtectedConfirm', function () {
                e.setState({ showProtectedConfirmation: !1 })
                var t = e.props,
                  n = t.analytics,
                  r = t.patchUser
                e._updateSettings({ protected: !0 }).then(function () {
                  n.scribe({ section: 'privacy', element: 'protected', action: 'enable' }),
                    e.context.loggedInUserId && r(e.context.loggedInUserId, { protected: !0 })
                })
              }),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.personalizationString,
                  r = t.settings,
                  a = J[r.allow_media_tagging],
                  o = Oe[r.allow_contributor_request]
                return y.createElement(
                  F.a,
                  null,
                  y.createElement(N.b, { text: K }),
                  y.createElement(H.a, {
                    checked: r.protected,
                    helpText: Y,
                    label: X,
                    learnMoreLink: 'https://support.twitter.com/articles/14016',
                    name: 'protected',
                    onChange: e._handleProtectedChanged,
                  }),
                  y.createElement(B.a, { label: Q, link: '/settings/location' }),
                  y.createElement(B.a, { description: a, label: Z, link: '/settings/tagging' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: $ }),
                  y.createElement(H.a, {
                    checked: 'all' === r.allow_dms_from,
                    helpText: te,
                    label: ee,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receive',
                    name: 'allow_dms_from',
                    onChange: e._handleDMFromChanged,
                  }),
                  y.createElement(H.a, {
                    checked: 'enabled' === r.dm_quality_filter,
                    helpText: re,
                    label: ne,
                    learnMoreLink: 'https://support.twitter.com/articles/14606',
                    name: 'dm_quality_filter',
                    onChange: e._handleDMQualityFilterChanged,
                  }),
                  y.createElement(H.a, {
                    checked: 'all_enabled' === r.dm_receipt_setting,
                    helpText: oe,
                    label: ae,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receipts',
                    name: 'dm_receipt_setting',
                    onChange: e._handleDMReceiptChanged,
                  }),
                  e.showPeriscopeAuthOption &&
                    y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(z.a, null),
                      y.createElement(N.b, { text: ce }),
                      y.createElement(H.a, {
                        checked: r.allow_authenticated_periscope_requests,
                        helpText: le,
                        label: ie,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: se }),
                  y.createElement(B.a, { label: ue, link: '/settings/contacts' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: de }),
                  y.createElement(H.a, {
                    checked: r.display_sensitive_media,
                    label: fe,
                    name: 'display_sensitive_media',
                    onChange: e._handleItemChanged,
                  }),
                  y.createElement(H.a, {
                    checked: r.nsfw_user,
                    disabled: r.nsfw_admin,
                    label: pe,
                    name: 'nsfw_user',
                    onChange: e._handleItemChanged,
                  }),
                  y.createElement(B.a, { label: he, link: '/settings/mute' }),
                  y.createElement(B.a, { label: be, link: '/settings/blocked/all' }),
                  y.createElement(B.a, { label: me, link: '/settings/notifications' }),
                  y.createElement(B.a, { label: ye, link: '/settings/search' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: Ee }),
                  y.createElement(B.a, { description: n, label: ge, link: '/settings/account/personalization' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { key: 'header', text: ve }),
                  y.createElement(B.a, { description: o, key: 'pivot', label: ve, link: '/settings/teams' }),
                )
              }),
              m()(l()(e), '_handleFetchPreferences', function () {
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
                    a = n ? q : V
                  return y.createElement(
                    F.a,
                    { testID: L },
                    y.createElement(
                      j.a,
                      { location: r, screenType: 'primaryDetail', title: G },
                      y.createElement(
                        R.a,
                        null,
                        y.createElement(k.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                        this.state.showProtectedConfirmation
                          ? y.createElement(U.a, {
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
        })(y.Component)
      m()(_e, 'contextType', M.a)
      t.default = Object(T.a)(x(_e), { page: 'settings', section: 'safety' })
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
