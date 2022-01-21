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
        g = n('FPOR'),
        v = n('zh9S'),
        E = n('hqKg'),
        w = n('0KEI'),
        S = n('oEGd'),
        O = n('H9MA'),
        _ = Object(E.createSelector)(O.f, O.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        C = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: v.a,
          scribeAction: v.c,
          scribePageImpression: v.d,
          updateVideoAutoplay: O.i,
        },
        P = Object(S.g)(_, C),
        k = n('45mF'),
        x = n('3XMw'),
        I = n.n(x),
        A = n('7FtF'),
        D = n('3cwy'),
        R = n('MWbm'),
        j = n('Y3cQ'),
        F = n('t62R'),
        L = n('6v1f')
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
      var B = I.a.a776eed7,
        H = I.a.ede134f2,
        z = I.a.i859a9d3,
        W = { page: 'settings', section: 'autoplay' },
        U = function (e) {
          return { value: e, label: g.a[e] }
        },
        K = (function (e) {
          u()(n, e)
          var t = N(n)
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
                a(M(M({}, W), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  c(L.b[t]).catch(r(M(M({}, Object(k.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(U(L.b.Always)),
              L.c && o._options.push(U(L.b.WiFiOnly)),
              o._options.push(U(L.b.Off)),
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
                  ;(0, e.scribePageImpression)(W),
                    n(W),
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
                    A.a,
                    { location: t, title: B },
                    y.createElement(
                      R.a,
                      null,
                      y.createElement(j.a, {
                        description: y.createElement(
                          y.Fragment,
                          null,
                          ''.concat(H, ' '),
                          y.createElement(F.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, z),
                        ),
                        label: B,
                        name: 'video_autoplay',
                        onChange: this._handleItemChanged,
                        options: this._options,
                        value: n || L.a,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
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
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n('k49u'),
        v = n('rxPX'),
        E = n('0KEI'),
        w = Object(v.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        S = n('kGix'),
        O = n('v//M'),
        _ = n('5FtR')
      function C(e) {
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
          var t = C(n)
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
                      b()(t, g.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      b()(t, g.a.PasswordVerificationRequired, {
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
                  return y.createElement(
                    y.Fragment,
                    null,
                    a
                      ? y.createElement(_.a, { to: '/i/flow/verify_account_ownership' })
                      : y.createElement(O.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component),
        k = w.forwardRef(P)
      t.a = k
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
        S = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.fetchDownloads })({
              actionTypes: h,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        O = function () {
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
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        g = n('zh9S'),
        v = n('NyKK'),
        E = n('rxPX'),
        w = n('0KEI'),
        S = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: v.g, downloads: v.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: v.d,
              googleAnalyticsPageView: g.a,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: v.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        O = n('XYIJ'),
        _ = (n('6U7i'), n('3XMw')),
        C = n.n(_),
        P = n('aITJ'),
        k = n('MWbm'),
        x = n('/yvb'),
        I = n('eb3s'),
        A = n('855f')
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
      var R = C.a.cfd2f35d,
        j = C.a.fc5bfd95,
        F = C.a.gee8110d,
        L = C.a.c326f156,
        T = C.a.c9fe9b56,
        M = C.a.j54b679a,
        N = C.a.ac63840c,
        B = C.a.bcd9b0ed,
        H = (function (e) {
          u()(n, e)
          var t = D(n)
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
                    i = M({ size: n.getSizeLabel(o) }),
                    l = t ? L : F
                  return y.createElement(
                    k.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? y.createElement(
                          k.a,
                          null,
                          y.createElement(
                            x.a,
                            {
                              disabled: t,
                              onPress: this._handleNeedsConfirmationActionCellPress,
                              size: 'small',
                              style: O.a.narrowButton,
                              type: 'brandFilled',
                            },
                            l,
                          ),
                          this.state.showConfirmation && !t
                            ? y.createElement(I.a, {
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
                            style: O.a.narrowButton,
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
      b()(H, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? N({ size: A.a.getFormattedCount(t) })
          : B({ size: A.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var z = n('7FtF'),
        W = n('ClNT'),
        U = n('t62R'),
        K = n('rHpw'),
        G = n('v6aA')
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
      var Y = C.a.f56af9cc,
        X = C.a.b2ed92c3,
        q = C.a.ce5d2c46,
        Q = C.a.dd9ec81f,
        Z = C.a.c7227886,
        J = C.a.a0c3f812,
        $ = C.a.ba2e82a1,
        ee = C.a.eea30bb4,
        te = C.a.f2cde471,
        ne = C.a.b7ce9dbe,
        re = C.a.fbc92b61,
        ae = (function (e) {
          u()(n, e)
          var t = V(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(l()(e), '_render', function () {
                var t = e.props.downloads.nonFailed
                return t.length ? y.createElement(k.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              b()(l()(e), '_renderDownloadItems', function (t, n) {
                return y.createElement(
                  k.a,
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
                  return y.createElement(
                    z.a,
                    { location: r, title: Y },
                    y.createElement(W.a, { fetch: t, fetchStatus: n, renderChildren: this._render }),
                  )
                },
              },
              {
                key: '_renderEmptyState',
                value: function () {
                  return y.createElement(
                    k.a,
                    { style: oe.emptyState },
                    y.createElement(U.b, { size: 'title4' }, Q),
                    y.createElement(U.b, { color: 'gray700', style: oe.emptyStateDescription }, J),
                    y.createElement(
                      x.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: O.a.narrowButton,
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
                    k.a,
                    { key: ''.concat(a), style: [O.a.narrowButtonRow, O.a.bottomBorder, O.a.labelContainer] },
                    y.createElement(
                      k.a,
                      null,
                      y.createElement(U.b, { weight: 'bold' }, re({ currentIndex: a, count: o })),
                      e.generated
                        ? y.createElement(U.b, { color: 'gray700' }, ee({ date: $(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? y.createElement(U.b, { color: 'gray700' }, te({ date: $(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? y.createElement(U.b, { color: 'gray700' }, ne({ size: H.getSizeLabel(t.size_b) }))
                        : null,
                    ),
                    y.createElement(H, { disabled: !c, onConfirm: this._handleConfirm(t), url: t }),
                  )
                },
              },
              {
                key: '_renderUnavailableButton',
                value: function (e) {
                  return y.createElement(
                    k.a,
                    { style: [O.a.narrowButtonRow, O.a.bottomBorder, O.a.labelContainer] },
                    y.createElement(U.b, { weight: 'bold' }, re({ currentIndex: 1, count: 1 })),
                    y.createElement(
                      x.a,
                      { disabled: !0, size: 'small', style: O.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? X : q,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(ae, 'contextType', G.a)
      var oe = K.a.create(function (e) {
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
      t.default = S(ae)
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
        g = n('FPOR'),
        v = n('P1r1'),
        E = n('rxPX'),
        w = n('0KEI'),
        S = n('H9MA'),
        O = Object(E.a)()
          .propsFromState(function () {
            return { dataSaverMode: S.c, videoAutoplay: S.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: S.b,
              updateDataSaverMode: S.g,
              updateSettings: v.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        _ = n('45mF'),
        C = n('6v1f'),
        P = n('3XMw'),
        k = n.n(P),
        x = n('yoO3'),
        I = n('7FtF'),
        A = n('3cwy'),
        D = 'dataSaverBooleanItem',
        R = n('v6aA'),
        j = n('xHsv'),
        F = n('cCdp'),
        L = n('csss')
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
      var B = k.a.eafe3287,
        H = k.a.d76fe4fc,
        z = k.a.a57a341b,
        W = k.a.d88102cf,
        U = k.a.a776eed7,
        K = (function (e) {
          u()(n, e)
          var t = N(n)
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
                  c({ enabled: t }).catch(a(M(M({}, Object(_.a)()), {}, { showToast: !0 })))
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
                  return y.createElement(
                    x.a,
                    null,
                    y.createElement(
                      I.a,
                      { location: n, screenType: 'secondaryDetail', title: B },
                      y.createElement(j.a, { description: H }),
                      y.createElement(F.a, {
                        checked: t,
                        helpText: W,
                        label: z,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: D,
                      }),
                      this._showVideoAutoplaySetting &&
                        y.createElement(L.a, {
                          description: g.a[r || C.a],
                          disabled: t,
                          label: U,
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
      b()(K, 'contextType', R.a)
      t.default = O(K)
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
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n('ye3X'),
        v = n('FPOR'),
        E = n('6/RC'),
        w = n('rxPX'),
        S = n('0KEI'),
        O = n('P1r1'),
        _ = n('H9MA'),
        C = Object(w.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: O.h,
              autoPollNewTweets: O.i,
              dataSaverMode: _.c,
              reducedMotionEnabled: O.x,
              videoAutoplay: _.f,
              highContrastEnabled: O.q,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              updateSettings: O.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        P = n('6v1f'),
        k = n('3XMw'),
        x = n.n(k),
        I = n('yoO3'),
        A = n('7FtF'),
        D = n('3cwy'),
        R = 'accessibilityScreen',
        j = n('MWbm'),
        F = n('38/B'),
        L = n('rHpw'),
        T = n('xHsv'),
        M = n('6vad'),
        N = n('cCdp'),
        B = n('0yYu'),
        H = n('csss'),
        z = n('v6aA')
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
      var U = x.a.e3719c15,
        K = x.a.a5208fad,
        G = x.a.d5b646bd,
        V = x.a.jfe6a3a0,
        Y = x.a.add55c97,
        X = x.a.a6d5b010,
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
          var t = W(n)
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
                o._handleSettingChanged(e, t), L.a.setHighContrast(t)
              }),
              b()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  r = n.analytics,
                  a = n.createLocalApiErrorHandler,
                  c = n.updateSettings,
                  i = t ? g.a.prompt : null
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
                    i = E.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return y.createElement(
                    I.a,
                    null,
                    y.createElement(
                      A.a,
                      { location: a, screenType: 'secondaryDetail', title: U },
                      y.createElement(
                        j.a,
                        { testID: R },
                        y.createElement(T.a, { description: K }),
                        y.createElement(M.b, { text: G }),
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
                            y.createElement(B.a, null),
                            y.createElement(M.b, { text: V }),
                            y.createElement(N.a, {
                              checked: o || i,
                              disabled: i,
                              helpText: i ? $ : J,
                              label: Z,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            y.createElement(H.a, {
                              description: v.a[c || P.a],
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
                            y.createElement(B.a, null),
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
                        y.createElement(B.a, null),
                        y.createElement(M.b, { text: X }),
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
      b()(re, 'contextType', z.a)
      t.default = C(re)
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
          return Ye
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
        g = (n('+KXO'), n('NeAX')),
        v = n('RqPI'),
        E = n('hqKg'),
        w = n('kGix'),
        S = n('O0uF'),
        O = n('G6rE'),
        _ = n('rxPX'),
        C = n('0KEI'),
        P = Object(E.createSelector)(v.m, g.selectPreferencesFetchStatus, function (e, t) {
          return e ? w.a.LOADED : t
        }),
        k = Object(_.a)()
          .propsFromState(function () {
            return {
              fetchStatus: P,
              loggedInUser: O.e.selectLoggedInUser,
              personalizationPreferences: g.selectUserPreferences,
              featureSwitches: S.f,
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
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        x = n('VY6S'),
        I = n('v//M'),
        A = n('uD2z'),
        D = n('3XMw'),
        R = n.n(D),
        j = n('KQzH'),
        F = n('yoO3'),
        L = n('7FtF'),
        T = n('Grlw'),
        M = n('iCwC'),
        N = n('3cwy'),
        B = n('Es6L'),
        H = 'loggedOutPrivacySection',
        z = 'accountLink',
        W = 'accountAccessLink',
        U = 'privacyAndSafetyLink',
        K = 'notificationsLink',
        G = 'accessibilityLink',
        V = 'aboutLink',
        Y = 'displayLink',
        X = 'dataLink',
        q = n('ddV6'),
        Q = n.n(q),
        Z = (n('uFXj'), n('3EFP')),
        J = n('woHV'),
        $ = n('tAeL'),
        ee = n('MWbm'),
        te = n('pf9B'),
        ne = n('xoZN'),
        re = n('/yvb'),
        ae = n('6OUF'),
        oe = n('rHpw'),
        ce = n('oEoC'),
        ie = n('95Se'),
        le = n('VwDm'),
        se = R.a.f065ba8c,
        ue = R.a.b08821f3,
        de = oe.a.create(function (e) {
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
        fe = function (e) {
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
            g = e.renderEmptyState,
            v = e.renderInSearchField,
            E = e.rounded,
            w = e.shouldAutoFocus,
            S = e.shouldClearOnSelect,
            O = e.shouldFocusOnClear,
            _ = e.shouldRenderEmptyState,
            C = e.source,
            P = e.style,
            k = e.testID,
            x = y.useRef(null),
            I = y.useRef(null),
            A = y.useRef(null),
            D = y.useRef(null),
            R = y.useState(!1),
            j = Q()(R, 2),
            F = j[0],
            L = j[1],
            T = y.useState(null),
            M = Q()(T, 2),
            N = M[0],
            B = M[1],
            H = y.useState(Object(ce.b)()),
            z = Q()(H, 2),
            W = z[0],
            U = z[1],
            K = y.useState(function () {
              return Object(ce.f)()
            }),
            G = Q()(K, 1)[0],
            V = y.useState(''),
            Y = Q()(V, 2),
            X = Y[0],
            q = Y[1],
            oe = function (e) {
              var t,
                n = te.a.getCount() > 0
              ;(null != x && null !== (t = x.current) && void 0 !== t && t.contains(e.target)) || n || (F && he())
            }
          y.useEffect(function () {
            return (
              window.document.addEventListener('click', oe, !0),
              function () {
                window.document.removeEventListener('click', oe, !0)
              }
            )
          })
          var fe = function () {
              if (null != I && I.current) {
                var e = I.current.getBoundingClientRect().bottom
                e !== N && B(e)
              }
            },
            pe = function (e) {
              q(e), null == h || h(e)
            },
            he = function () {
              L(!1), null == d || d()
            },
            me = function () {
              var e
              he(), null == A || null === (e = A.current) || void 0 === e || e.blur()
            },
            be = function (e, t) {
              var n,
                r,
                a = S ? '' : X
              ;(L(!1), A.current) &&
                (S && O
                  ? A.current.focus()
                  : (S && (null === (n = A.current.textInput) || void 0 === n || n.clear()),
                    null === (r = A.current) || void 0 === r || r.blur()))
              pe(a), null == d || d(), null == p || p(e, t)
            },
            ye = function () {
              U(Object(ce.b)())
            },
            ge = F || t
          return y.createElement(
            ee.a,
            { onLayout: fe, ref: x, style: [de.root, P] },
            y.createElement(
              ne.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(ce.g)(e)) {
                    var r, a
                    if (n === Z.a)
                      return null === (r = D.current) || void 0 === r || r.focusNext(), void e.preventDefault()
                    if (n === Z.b)
                      return null === (a = D.current) || void 0 === a || a.focusPrevious(), void e.preventDefault()
                    if (n === Z.d) return he(), void e.preventDefault()
                    if (n !== Z.f) {
                      var o
                      if (n === Z.c && null !== (t = D.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = D.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      F || L(!0)
                    } else he()
                  }
                },
                style: de.keydownInputListener,
              },
              y.createElement(
                J.a,
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
                  style: de.wrapper,
                },
                y.createElement(
                  ee.a,
                  { ref: I, style: [de.inputContainer, c] },
                  ge && u
                    ? y.createElement(re.a, {
                        accessibilityLabel: ue,
                        icon: y.createElement(ie.a, null),
                        onClick: function () {
                          he(), null == u || u()
                        },
                        style: de.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  y.createElement(ae.a, {
                    Icon: le.a,
                    ariaActiveDescendant: W,
                    ariaAutocomplete: 'list',
                    ariaExpanded: ge,
                    ariaLabel: se,
                    ariaOwns: G,
                    ariaRole: 'combobox',
                    autoComplete: 'off',
                    autoCorrect: !1,
                    autoFocus: w,
                    contentBelow: null == v ? void 0 : v(),
                    focusOnClear: O,
                    isCompact: i,
                    onChange: function (e) {
                      pe(e.target.value), fe()
                    },
                    onClear: function () {
                      pe('')
                    },
                    onFocus: function () {
                      L(!0), fe(), null == f || f()
                    },
                    onLayout: fe,
                    placeholder: b,
                    ref: A,
                    returnKeyType: 'search',
                    spellCheck: 'false',
                    styleType: E ? 'pill' : 'selection',
                    testID: k,
                    value: X,
                    withClearButton: !r && F,
                  }),
                ),
                y.createElement(
                  ee.a,
                  { style: [de.typeaheadContainer, !E && de.topBorder] },
                  ge
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [de.dropdown, N ? Object(ce.d)(N) : de.wideModeDropdown])
                            : 'overlap' === o && (e = l ? de.modalDropdown : [de.dropdown, de.wideModeDropdown]),
                          g && _
                            ? g({
                                ariaDescendantId: W,
                                domId: G,
                                onDismiss: me,
                                onItemFocusChanged: ye,
                                ref: D,
                                style: e,
                              })
                            : y.createElement($.a, {
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
        pe = n('GZwR'),
        he = n('6vad'),
        me = n('t62R'),
        be = n('FIs5'),
        ye = n('0yYu'),
        ge = n('v6aA'),
        ve = n('AS3p')
      function Ee(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return we(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return we(e, t)
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
      function we(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function Se(e) {
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
      var Oe = R.a.e3719c15,
        _e = R.a.cad53943,
        Ce = R.a.bb081ea1,
        Pe = R.a.e95b9448,
        ke = R.a.eb75875d,
        xe = R.a.c4881c66,
        Ie = R.a.eafe3287,
        Ae = R.a.f458a3b1,
        De = R.a.e8f57e07,
        Re = R.a.b7fde2b8,
        je = R.a.ja94f34d,
        Fe = R.a.d0b74a5a,
        Le = R.a.gd4302ec,
        Te = R.a.bdc6f5b7,
        Me = R.a.f8645654,
        Ne = R.a.cf9b1669,
        Be = R.a.bdfa2b8c,
        He = R.a.df483b47,
        ze = R.a.d299431b,
        We = R.a.ed21f885,
        Ue = R.a.e435cdff,
        Ke = R.a.b92a21d8,
        Ge = R.a.c170a564,
        Ve = R.a.ba8f6f81,
        Ye = (function (e) {
          u()(n, e)
          var t = Se(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(l()(o), '_renderLoggedIn', function () {
                var e = o.props.searchIndex,
                  t = o.state.isSearching
                return y.createElement(
                  y.Fragment,
                  null,
                  o._renderSearchInput(e),
                  t
                    ? null
                    : y.createElement(
                        ee.a,
                        { accessibilityRole: 'tablist' },
                        y.createElement(j.a, { label: Te, link: '/settings/account', testID: z }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        y.createElement(j.a, { label: Me, link: '/settings/security_and_account_access', testID: W }),
                        y.createElement(j.a, { label: _e, link: '/settings/privacy_and_safety', testID: U }),
                        y.createElement(j.a, { label: ke, link: '/settings/notifications', testID: K }),
                        y.createElement(j.a, {
                          label: Ne,
                          link: '/settings/accessibility_display_and_languages',
                          testID: G,
                        }),
                        y.createElement(j.a, { label: Be, link: '/settings/about', testID: V }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              b()(l()(o), '_renderLoggedOut', function () {
                return y.createElement(
                  ee.a,
                  { testID: H },
                  y.createElement(he.b, { text: Ae }),
                  y.createElement(j.a, {
                    description: o._renderPersonalizationDescription(),
                    label: De,
                    link: '/settings/account/personalization',
                  }),
                  y.createElement(j.a, { label: Re, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? y.createElement(j.a, { description: Le, label: Fe, link: '/settings/cookie_preferences' })
                    : null,
                  y.createElement(me.b, { style: M.a.descriptionText }, je),
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
                    l = Ee(e.values())
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
                return y.createElement(fe, {
                  alwaysOpen: r,
                  dropdownPosition: 'inline',
                  inputStyle: Xe.input,
                  items: t,
                  onBackClicked: Object(B.a)() ? o._handleSearchInputBackClicked : void 0,
                  onFocus: o._handleSearchInputFocus,
                  onItemClick: o._handleSearchItemClicked,
                  onQueryChange: o._handleSearchQueryChanged,
                  placeholder: Ve,
                  renderEmptyState: function (e) {
                    var t = e.style
                    return c
                      ? y.createElement(be.a, { header: Ke({ query: a }), message: Ge, style: t })
                      : y.createElement(
                          ee.a,
                          { style: [t, Xe.searchEmptyState] },
                          y.createElement(me.b, { align: 'center', color: 'gray700' }, Ue),
                        )
                  },
                  rounded: !0,
                  shouldRenderEmptyState: !c || 0 === t.length,
                  source: pe.d.SearchBox,
                })
              }),
              b()(l()(o), '_renderGeneral', function () {
                return y.createElement(
                  ee.a,
                  null,
                  y.createElement(ye.a, null),
                  y.createElement(he.b, { text: Pe }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? y.createElement(j.a, { label: xe, link: '/settings/display', testID: Y })
                    : null,
                  o._isUserLoggedIn() ? y.createElement(j.a, { label: Ie, link: '/settings/data', testID: X }) : null,
                  o._isUserLoggedIn()
                    ? y.createElement(j.a, { label: Oe, link: '/settings/accessibility', testID: G })
                    : null,
                  y.createElement(j.a, { label: Be, link: '/settings/about', testID: V }),
                )
              }),
              b()(l()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? y.createElement(j.a, { label: He, link: '/settings/feature_switches' })
                  : null
              }),
              b()(l()(o), '_renderMonetization', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === T.a.Monetization
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? y.createElement(j.a, { label: ze, link: t }) : null
              }),
              b()(l()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === T.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? y.createElement(j.a, { label: We, link: t }) : null
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
              (o._showVideoAutoplaySetting = Object(N.a)()),
              (o._handleSearchQueryChanged = Object(x.a)(o._handleSearchQueryChanged, 250)),
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
                  return y.createElement(
                    F.a,
                    null,
                    y.createElement(
                      L.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: Ce },
                      this._isUserLoggedIn() || Object(ve.c)(this.context.featureSwitches) === ve.a.AcceptAllCookies
                        ? y.createElement(I.a, {
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
                  return Object(A.a)(e)
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(Ye, 'contextType', ge.a)
      var Xe = oe.a.create(function (e) {
        return {
          searchEmptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
          input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
        }
      })
      t.default = k(Ye)
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
          return I
        })
      n('tQbP'), n('LW0h'), n('vrRf'), n('hBvt'), n('z84I')
      var r = n('ERkP'),
        a = n('zh9S'),
        o = n('RqPI'),
        c = n('rxPX'),
        i = Object(c.a)()
          .propsFromState(function () {
            return { viewerCountry: o.w }
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
        m = n('MWbm'),
        b = n('6vad'),
        y = n('csss'),
        g = n('xHsv'),
        v = n('0yYu'),
        E = n('t62R'),
        w = n('7JQg'),
        S = u.a.cedbb01c,
        O = u.a.b4f917d0,
        _ = u.a.bdfa2b8c,
        C = u.a.j0783ebe,
        P = u.a.c0398892,
        k = { page: 'settings', section: 'about' }
      function x(e) {
        var t = []
        return (
          t.push(r.createElement(b.b, { text: P })),
          t.push(
            r.createElement(y.a, { label: P, link: { external: !0, pathname: 'https://twitter.com/i/release_notes' } }),
          ),
          r.Children.toArray(t)
        )
      }
      function I(e) {
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
          w.b,
          { namespace: k },
          r.createElement(
            d.a,
            null,
            r.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: _ },
              r.createElement(
                m.a,
                { testID: h },
                r.createElement(g.a, { description: C }),
                r.createElement(x, { scribeAction: n }),
                r.createElement(v.a, null),
                r.createElement(b.b, { text: S }),
                c.map(function (e, t) {
                  return r.createElement(y.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
                }),
                s.map(function (e) {
                  return r.createElement(
                    E.b,
                    { color: 'gray700', key: e.text, size: 'subtext2', style: [p.a.infoText, p.a.bottomBorder] },
                    e.text,
                  )
                }),
                r.createElement(v.a, null),
                r.createElement(b.b, { text: O }),
                i.map(function (e, t) {
                  return r.createElement(y.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
                }),
              ),
            ),
          ),
        )
      }
      t.default = Object(w.c)(k)(i(I))
    },
    htPi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DisplayScreen', function () {
          return _
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
        m = n('t62R'),
        b = n('0yYu'),
        y = n('6vad'),
        g = n('rHpw'),
        v = c.a.c4881c66,
        E = c.a.a5ce82a4,
        w = c.a.ce494bb3,
        S = c.a.c783d45e,
        O = c.a.h306a357,
        _ = function (e) {
          var t = e.location
          return r.createElement(
            i.a,
            null,
            r.createElement(
              l.a,
              { location: t, screenType: 'secondaryDetail', title: v },
              r.createElement(m.b, { color: 'gray700', size: 'subtext2', style: C.aboutText, testID: s }, E),
              r.createElement(p.a, null),
              r.createElement(b.a, null),
              r.createElement(y.b, { text: w }),
              r.createElement(u.a, null),
              r.createElement(b.a, null),
              r.createElement(y.b, { text: S }),
              r.createElement(h.a, { style: C.colorPicker }, r.createElement(f.a, null)),
              r.createElement(b.a, null),
              r.createElement(y.b, { text: O }),
              r.createElement(h.a, { style: C.backgroundPicker }, r.createElement(d.a, null)),
            ),
          )
        },
        C = g.a.create(function (e) {
          return {
            aboutText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
            colorPicker: { paddingVertical: e.spaces.space4 },
          }
        })
      t.default = Object(a.c)({ page: 'settings', section: 'display' })(_)
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
        g = n('NeAX'),
        v = n('P1r1'),
        E = n('hqKg'),
        w = n('uD2z'),
        S = n('li/m'),
        O = n('G6rE'),
        _ = n('0KEI'),
        C = n('oEGd'),
        P = Object(E.createSelector)(
          g.selectPreferencesFetchStatus,
          g.selectUserPreferences,
          v.g,
          S.d,
          function (e, t, n, r) {
            return { fetchStatus: e, personalizationString: Object(w.a)(t), settings: n, hasCommunityMemberships: r }
          },
        ),
        k = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
          patchUser: O.e.patchUser,
          updateSettings: v.L,
        },
        x = Object(C.g)(P, k),
        I = n('v//M'),
        A = n('3XMw'),
        D = n.n(A),
        R = n('yoO3'),
        j = n('7FtF'),
        F = 'privacyAndSafetyScreen',
        L = n('MWbm'),
        T = n('Irs7'),
        M = n('v6aA'),
        N = n('6vad'),
        B = n('cCdp'),
        H = n('csss'),
        z = n('0yYu'),
        W = n('eb3s')
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
      var K = D.a.cad53943,
        G = D.a.bab1f8b0,
        V = D.a.f5e59e90,
        Y = D.a.i0310b4e,
        X = { headline: D.a.j8bf07ab, text: D.a.ca8034b3, confirmButtonLabel: D.a.c5d4192a },
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
        me = D.a.a5f32aa2,
        be = D.a.eb75875d,
        ye = D.a.aea62567,
        ge = D.a.e8f57e07,
        ve = D.a.e8f57e07,
        Ee = D.a.b59540c2,
        we = { all: D.a.bd34d8f8, following: D.a.d22dad9e, none: D.a.ad41e8b3 },
        Se = (function (e) {
          u()(n, e)
          var t = U(n)
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
                  a = J[r.allow_media_tagging],
                  o = we[r.allow_contributor_request]
                return y.createElement(
                  L.a,
                  null,
                  y.createElement(N.b, { text: G }),
                  y.createElement(B.a, {
                    checked: r.protected,
                    helpText: Y,
                    label: V,
                    learnMoreLink: 'https://support.twitter.com/articles/14016',
                    name: 'protected',
                    onChange: e._handleProtectedChanged,
                  }),
                  y.createElement(H.a, { label: Q, link: '/settings/location' }),
                  y.createElement(H.a, { description: a, label: Z, link: '/settings/tagging' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: $ }),
                  y.createElement(B.a, {
                    checked: 'all' === r.allow_dms_from,
                    helpText: te,
                    label: ee,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receive',
                    name: 'allow_dms_from',
                    onChange: e._handleDMFromChanged,
                  }),
                  y.createElement(B.a, {
                    checked: 'enabled' === r.dm_quality_filter,
                    helpText: re,
                    label: ne,
                    learnMoreLink: 'https://support.twitter.com/articles/14606',
                    name: 'dm_quality_filter',
                    onChange: e._handleDMQualityFilterChanged,
                  }),
                  y.createElement(B.a, {
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
                      y.createElement(B.a, {
                        checked: r.allow_authenticated_periscope_requests,
                        helpText: le,
                        label: ie,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: se }),
                  y.createElement(H.a, { label: ue, link: '/settings/contacts' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: de }),
                  y.createElement(B.a, {
                    checked: r.display_sensitive_media,
                    label: fe,
                    name: 'display_sensitive_media',
                    onChange: e._handleItemChanged,
                  }),
                  y.createElement(B.a, {
                    checked: r.nsfw_user,
                    disabled: r.nsfw_admin,
                    label: pe,
                    name: 'nsfw_user',
                    onChange: e._handleItemChanged,
                  }),
                  y.createElement(H.a, { label: he, link: '/settings/mute' }),
                  y.createElement(H.a, { label: me, link: '/settings/blocked/all' }),
                  y.createElement(H.a, { label: be, link: '/settings/notifications' }),
                  y.createElement(H.a, { label: ye, link: '/settings/search' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { text: ve }),
                  y.createElement(H.a, { description: n, label: ge, link: '/settings/account/personalization' }),
                  y.createElement(z.a, null),
                  y.createElement(N.b, { key: 'header', text: Ee }),
                  y.createElement(H.a, { description: o, key: 'pivot', label: Ee, link: '/settings/teams' }),
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
                    a = n ? q : X
                  return y.createElement(
                    L.a,
                    { testID: F },
                    y.createElement(
                      j.a,
                      { location: r, screenType: 'primaryDetail', title: K },
                      y.createElement(
                        R.a,
                        null,
                        y.createElement(I.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                        this.state.showProtectedConfirmation
                          ? y.createElement(W.a, {
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
      b()(Se, 'contextType', M.a)
      t.default = Object(T.a)(x(Se), { page: 'settings', section: 'safety' })
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
