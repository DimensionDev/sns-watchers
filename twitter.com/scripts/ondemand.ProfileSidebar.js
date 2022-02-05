;(window.webpackJsonp = window.webpackJsonp || []).push([
  [224],
  {
    hIbf: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ProfileSidebarContainer', function () {
          return Q
        }),
        r.d(t, 'toRelativePath', function () {
          return $
        })
      r('OZaJ')
      var n = r('VrFO'),
        i = r.n(n),
        a = r('Y9Ll'),
        o = r.n(a),
        c = r('1Pcy'),
        u = r.n(c),
        s = r('5Yy7'),
        d = r.n(s),
        l = r('N+ot'),
        f = r.n(l),
        p = r('AuHH'),
        h = r.n(p),
        m = r('KEM+'),
        v = r.n(m),
        y = (r('2G9S'), r('LW0h'), r('z84I'), r('MvUL'), r('KqXw'), r('ERkP')),
        b = r.n(y),
        O = r('k49u'),
        I = r('es0u'),
        g = (r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ulNE'), r('hqKg')),
        w = r('8UdT'),
        M = r('P1r1'),
        j = r('wrlS'),
        S = r('XOJV'),
        E = r('YjVx'),
        x = r('FLCi'),
        P = r('zrOZ'),
        _ = function (e, t) {
          return Object(E.a)(e, t)
        },
        R = [],
        A = Object(g.createSelector)(
          function (e, t) {
            return _(Object(j.d)(e), t).selectEntries(e)
          },
          S.a.createHydratedSelector,
          M.l,
          function (e, t, r) {
            return Object(x.a)(e, function (e) {
              var n,
                i = e.type === w.b.Tweet && t(e.content.id),
                a =
                  null != i && null !== (n = i.extended_entities) && void 0 !== n && n.media
                    ? Object(P.a)(
                        i.extended_entities.media
                          .map(function (e) {
                            var t = e.sensitive_media_warning
                            return t
                              ? Object.keys(t).filter(function (e) {
                                  return t[e]
                                })
                              : []
                          })
                          .flat(),
                      )
                    : void 0
              return !i ||
                i.tombstoneInfo ||
                i.isDeleted ||
                (i.possibly_sensitive && !r) ||
                (null != a && a.size) ||
                !i.extended_entities ||
                !i.extended_entities.media
                ? R
                : i.extended_entities.media.map(function (t) {
                    return { mediaItem: t, entry: e }
                  })
            })
          },
        ),
        L = function (e, t) {
          return _(e, t).fetchInitial()
        },
        k = r('MDbM'),
        F = r('rxPX'),
        D = r('0KEI')
      function N(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var C = function (e, t) {
          return A(e, t.userId)
        },
        U = function (e, t) {
          return t.hideMediaModule
            ? k.a.LOADED
            : (function (e, t) {
                return _(Object(j.d)(e), t).selectInitialFetchStatus(e)
              })(e, t.userId) || k.a.LOADING
        },
        H = Object(F.a)()
          .propsFromState(function () {
            return { mediaItemsWithEntry: C, mediaFetchStatus: U }
          })
          .adjustStateProps(function (e) {
            var t = e.mediaFetchStatus,
              r = e.mediaItemsWithEntry
            return {
              mediaItems: r.map(function (e) {
                return (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                      ? N(Object(r), !0).forEach(function (t) {
                          v()(e, t, r[t])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : N(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                  }
                  return e
                })({}, e.mediaItem)
              }),
              mediaItemsWithEntry: r,
              mediaFetchStatus: t,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)('PROFILE_SIDE_BAR'),
              fetchRecentMediaIfNeeded: L,
            }
          }),
        T = r('kGix'),
        K = r('3XMw'),
        G = r.n(K),
        W = r('fs1G'),
        B = r('q2Cp'),
        J = r('Qwev'),
        V = r('rHpw'),
        X = r('3dad'),
        z = r('v6aA')
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
          var r,
            n = h()(e)
          if (t) {
            var i = h()(this).constructor
            r = Reflect.construct(n, arguments, i)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var q = G.a.b327c129,
        Y = v()({}, O.a.NotAuthorizedToViewUser, { customAction: W.a }),
        Q = (function (e) {
          d()(r, e)
          var t = Z(r)
          function r() {
            var e
            i()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_fetchRecentUserMedia', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler,
                  n = t.fetchRecentMediaIfNeeded,
                  i = t.hideMediaModule,
                  a = t.userId
                !i && n(e.context.featureSwitches, a).catch(r(Y))
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(e.userId === this.props.userId && e.hideMediaModule === this.props.hideMediaModule) ||
                    this._fetchRecentUserMedia()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchRecentUserMedia()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.mediaFetchStatus
                  return e && e !== T.a.LOADING
                    ? this._renderSidebar()
                    : b.a.createElement(J.a, { accessibilityLabel: 'Loading profile sidebar' })
                },
              },
              {
                key: '_renderSidebar',
                value: function () {
                  var e = this.props,
                    t = e.hideMediaModule,
                    r = e.userId,
                    n = e.userScreenName,
                    i = e.withTopicsToFollow,
                    a = this._getImages()
                  return b.a.createElement(
                    I.a,
                    { profileScreenName: n, profileUserId: r, withTopicsToFollow: i },
                    a.length >= 2 && !t
                      ? b.a.createElement(B.a, {
                          cacheLocationKey: 'profileSidebar',
                          images: a,
                          singleImageMaxAspectRatio: V.a.theme.aspectRatios.landscape,
                          singleImageMinAspectRatio: V.a.theme.aspectRatios.landscape,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_getImages',
                value: function () {
                  var e = this.props,
                    t = e.mediaItems
                  return e.mediaItemsWithEntry
                    .map(function (e, r) {
                      var n,
                        i = e.entry,
                        a = e.mediaItem,
                        o = {
                          pathname: $(a.expanded_url),
                          state: {
                            mediaItems: { items: t, index: r },
                            forwardPivotInfo: null === (n = i.content) || void 0 === n ? void 0 : n.forwardPivot,
                          },
                        },
                        c = X.a.getOriginalImage(a)
                      return (
                        c && {
                          width: c.width,
                          height: c.height,
                          url: c.url,
                          backgroundColor: X.a.getBackgroundColor(a),
                          cropCandidates: X.a.getCropCandidates(a),
                          accessibilityLabel: a.ext_alt_text || q,
                          shouldShowAltLabel: !1,
                          expandedUrl: o,
                        }
                      )
                    })
                    .filter(Boolean)
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      v()(Q, 'contextType', z.a)
      var $ = function (e) {
          return e.replace('https://twitter.com', '')
        },
        ee = H(Q)
      t.default = ee
    },
    ulNE: function (e, t, r) {
      'use strict'
      var n = r('ax0f'),
        i = r('42ly'),
        a = r('N9G2'),
        o = r('tJVe'),
        c = r('i7Kn'),
        u = r('aoZ+')
      n(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = a(this),
              r = o(t.length),
              n = u(t, 0)
            return (n.length = i(n, t, t, r, 0, void 0 === e ? 1 : c(e))), n
          },
        },
      )
    },
  },
])
//# sourceMappingURL=WIPED
