;(window.webpackJsonp = window.webpackJsonp || []).push([
  [215],
  {
    hIbf: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ProfileSidebarContainer', function () {
          return Y
        }),
        r.d(t, 'toRelativePath', function () {
          return Q
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
        b = r('k49u'),
        O = r('es0u'),
        I = (r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ulNE'), r('hqKg')),
        g = r('8UdT'),
        w = r('P1r1'),
        M = r('wrlS'),
        j = r('XOJV'),
        S = r('YjVx'),
        E = r('FLCi'),
        x = r('zrOZ'),
        P = function (e, t) {
          return Object(S.a)(e, t)
        },
        _ = [],
        R = Object(I.createSelector)(
          function (e, t) {
            return P(Object(M.d)(e), t).selectEntries(e)
          },
          j.a.createHydratedSelector,
          w.l,
          function (e, t, r) {
            return Object(E.a)(e, function (e) {
              var n,
                i = e.type === g.b.Tweet && t(e.content.id),
                a =
                  null != i && null !== (n = i.extended_entities) && void 0 !== n && n.media
                    ? Object(x.a)(
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
                ? _
                : i.extended_entities.media.map(function (t) {
                    return { mediaItem: t, entry: e }
                  })
            })
          },
        ),
        A = function (e, t) {
          return P(e, t).fetchInitial()
        },
        L = r('MDbM'),
        k = r('rxPX'),
        F = r('0KEI')
      function D(e, t) {
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
      var N = function (e, t) {
          return R(e, t.userId)
        },
        C = function (e, t) {
          return t.hideMediaModule
            ? L.a.LOADED
            : (function (e, t) {
                return P(Object(M.d)(e), t).selectInitialFetchStatus(e)
              })(e, t.userId) || L.a.LOADING
        },
        U = Object(k.a)()
          .propsFromState(function () {
            return { mediaItemsWithEntry: N, mediaFetchStatus: C }
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
                      ? D(Object(r), !0).forEach(function (t) {
                          v()(e, t, r[t])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : D(Object(r)).forEach(function (t) {
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
              createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)('PROFILE_SIDE_BAR'),
              fetchRecentMediaIfNeeded: A,
            }
          }),
        H = r('kGix'),
        T = r('3XMw'),
        K = r.n(T),
        G = r('fs1G'),
        W = r('q2Cp'),
        B = r('Qwev'),
        J = r('rHpw'),
        V = r('3dad'),
        X = r('v6aA')
      function z(e) {
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
      var Z = K.a.b327c129,
        q = v()({}, b.a.NotAuthorizedToViewUser, { customAction: G.a }),
        Y = (function (e) {
          d()(r, e)
          var t = z(r)
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
                !i && n(e.context.featureSwitches, a).catch(r(q))
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
                  return e && e !== H.a.LOADING
                    ? this._renderSidebar()
                    : y.createElement(B.a, { accessibilityLabel: 'Loading profile sidebar' })
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
                  return y.createElement(
                    O.a,
                    { profileScreenName: n, profileUserId: r, withTopicsToFollow: i },
                    a.length >= 2 && !t
                      ? y.createElement(W.a, {
                          cacheLocationKey: 'profileSidebar',
                          images: a,
                          singleImageMaxAspectRatio: J.a.theme.aspectRatios.landscape,
                          singleImageMinAspectRatio: J.a.theme.aspectRatios.landscape,
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
                          pathname: Q(a.expanded_url),
                          state: {
                            mediaItems: { items: t, index: r },
                            forwardPivotInfo: null === (n = i.content) || void 0 === n ? void 0 : n.forwardPivot,
                          },
                        },
                        c = V.a.getOriginalImage(a)
                      return (
                        c && {
                          width: c.width,
                          height: c.height,
                          url: c.url,
                          backgroundColor: V.a.getBackgroundColor(a),
                          cropCandidates: V.a.getCropCandidates(a),
                          accessibilityLabel: a.ext_alt_text || Z,
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
        })(y.Component)
      v()(Y, 'contextType', X.a)
      var Q = function (e) {
          return e.replace('https://twitter.com', '')
        },
        $ = U(Y)
      t.default = $
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
