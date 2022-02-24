;(window.webpackJsonp = window.webpackJsonp || []).push([
  [230],
  {
    hIbf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ProfileSidebarContainer', function () {
          return Y
        }),
        n.d(t, 'toRelativePath', function () {
          return Z
        })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        l = n('2VqO'),
        h = n.n(l),
        p = n('KEM+'),
        f = n.n(p),
        m = (n('2G9S'), n('LW0h'), n('7x/C'), n('z84I'), n('KqXw'), n('MvUL'), n('ERkP')),
        I = n.n(m),
        v = n('k49u'),
        b = n('es0u'),
        w = n('yiKp'),
        y = n.n(w),
        g = (n('ulNE'), n('urw/'), n('+KXO'), n('hqKg')),
        M = n('8UdT'),
        S = n('P1r1'),
        _ = n('wrlS'),
        x = n('XOJV'),
        E = n('YjVx'),
        O = n('FLCi'),
        A = n('zrOZ'),
        L = function (e, t) {
          return Object(E.a)(e, t)
        },
        k = [],
        F = Object(g.createSelector)(
          function (e, t) {
            return L(Object(_.d)(e), t).selectEntries(e)
          },
          x.a.createHydratedSelector,
          S.l,
          function (e, t, n) {
            return Object(O.a)(e, function (e) {
              var r,
                a = e.type === M.b.Tweet && t(e.content.id),
                i =
                  null != a && null !== (r = a.extended_entities) && void 0 !== r && r.media
                    ? Object(A.a)(
                        a.extended_entities.media
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
              return !a ||
                a.tombstoneInfo ||
                a.isDeleted ||
                (a.possibly_sensitive && !n) ||
                (null != i && i.size) ||
                !a.extended_entities ||
                !a.extended_entities.media
                ? k
                : a.extended_entities.media.map(function (t) {
                    return { mediaItem: t, entry: e }
                  })
            })
          },
        ),
        R = function (e, t) {
          return L(e, t).fetchInitial()
        },
        j = n('MDbM'),
        C = n('rxPX'),
        N = n('0KEI'),
        P = function (e, t) {
          return F(e, t.userId)
        },
        D = function (e, t) {
          return t.hideMediaModule
            ? j.a.LOADED
            : (function (e, t) {
                return L(Object(_.d)(e), t).selectInitialFetchStatus(e)
              })(e, t.userId) || j.a.LOADING
        },
        U = Object(C.a)()
          .propsFromState(function () {
            return { mediaItemsWithEntry: P, mediaFetchStatus: D }
          })
          .adjustStateProps(function (e) {
            var t = e.mediaFetchStatus,
              n = e.mediaItemsWithEntry
            return {
              mediaItems: n.map(function (e) {
                return y()({}, e.mediaItem)
              }),
              mediaItemsWithEntry: n,
              mediaFetchStatus: t,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)('PROFILE_SIDE_BAR'),
              fetchRecentMediaIfNeeded: R,
            }
          }),
        T = n('kGix'),
        K = n('3XMw'),
        G = n.n(K),
        H = n('fs1G'),
        W = n('q2Cp'),
        q = n('Qwev'),
        V = n('rHpw'),
        X = n('3dad'),
        z = n('v6aA'),
        B = G.a.b327c129,
        J = f()({}, v.a.NotAuthorizedToViewUser, { customAction: H.a }),
        Y = (function (e) {
          s()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(d()(e), '_fetchRecentUserMedia', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.fetchRecentMediaIfNeeded,
                  a = t.hideMediaModule,
                  i = t.userId
                !a && r(e.context.featureSwitches, i).catch(n(J))
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    : I.a.createElement(q.a, { accessibilityLabel: 'Loading profile sidebar' })
                },
              },
              {
                key: '_renderSidebar',
                value: function () {
                  var e = this.props,
                    t = e.hideMediaModule,
                    n = e.userId,
                    r = e.userScreenName,
                    a = e.withTopicsToFollow,
                    i = this._getImages()
                  return I.a.createElement(
                    b.a,
                    { profileScreenName: r, profileUserId: n, withTopicsToFollow: a },
                    i.length >= 2 && !t
                      ? I.a.createElement(W.a, {
                          cacheLocationKey: 'profileSidebar',
                          images: i,
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
                    .map(function (e, n) {
                      var r,
                        a = e.entry,
                        i = e.mediaItem,
                        o = {
                          pathname: Z(i.expanded_url),
                          state: {
                            mediaItems: { items: t, index: n },
                            forwardPivotInfo: null === (r = a.content) || void 0 === r ? void 0 : r.forwardPivot,
                          },
                        },
                        c = X.a.getOriginalImage(i)
                      return (
                        c && {
                          width: c.width,
                          height: c.height,
                          url: c.url,
                          backgroundColor: X.a.getBackgroundColor(i),
                          cropCandidates: X.a.getCropCandidates(i),
                          accessibilityLabel: i.ext_alt_text || B,
                          shouldShowAltLabel: !1,
                          expandedUrl: o,
                        }
                      )
                    })
                    .filter(Boolean)
                },
              },
            ]),
            n
          )
        })(I.a.Component)
      f()(Y, 'contextType', z.a)
      var Z = function (e) {
          return e.replace('https://twitter.com', '')
        },
        Q = U(Y)
      t.default = Q
    },
    ulNE: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        a = n('42ly'),
        i = n('N9G2'),
        o = n('BIH/'),
        c = n('lhaq'),
        d = n('aoZ+')
      r(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = i(this),
              n = o(t),
              r = d(t, 0)
            return (r.length = a(r, t, t, n, 0, void 0 === e ? 1 : c(e))), r
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
  },
])
//# sourceMappingURL=WIPED
