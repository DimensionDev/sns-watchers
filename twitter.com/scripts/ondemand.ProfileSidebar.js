;(window.webpackJsonp = window.webpackJsonp || []).push([
  [231],
  {
    hIbf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ProfileSidebarContainer', function () {
          return Y
        }),
        n.d(t, 'toRelativePath', function () {
          return Q
        })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        d = n('1Pcy'),
        c = n.n(d),
        s = n('5Yy7'),
        u = n.n(s),
        l = n('2VqO'),
        p = n.n(l),
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('LW0h'), n('7x/C'), n('z84I'), n('KqXw'), n('MvUL'), n('ERkP')),
        I = n.n(f),
        v = n('k49u'),
        b = n('es0u'),
        w = n('yiKp'),
        y = n.n(w),
        g = (n('ulNE'), n('urw/'), n('+KXO'), n('hqKg')),
        M = n('8UdT'),
        S = n('P1r1'),
        _ = n('wrlS'),
        O = n('XOJV'),
        x = n('YjVx'),
        E = n('FLCi'),
        L = n('zrOZ'),
        A = function (e, t) {
          return Object(x.a)(e, t)
        },
        k = [],
        F = Object(g.createSelector)(
          function (e, t) {
            return A(Object(_.d)(e), t).selectEntries(e)
          },
          O.a.createHydratedSelector,
          S.k,
          function (e, t, n) {
            return Object(E.a)(e, function (e) {
              var i,
                r = e.type === M.b.Tweet && t(e.content.id),
                a =
                  null != r && null !== (i = r.extended_entities) && void 0 !== i && i.media
                    ? Object(L.a)(
                        r.extended_entities.media
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
              return !r ||
                r.tombstoneInfo ||
                r.isDeleted ||
                (r.possibly_sensitive && !n) ||
                (null != a && a.size) ||
                !r.extended_entities ||
                !r.extended_entities.media
                ? k
                : r.extended_entities.media.map(function (t) {
                    return { mediaItem: t, entry: e }
                  })
            })
          },
        ),
        R = function (e, t) {
          return A(e, t).fetchInitial()
        },
        j = n('MDbM'),
        C = n('rxPX'),
        P = n('0KEI'),
        D = function (e, t) {
          return F(e, t.userId)
        },
        U = function (e, t) {
          return t.hideMediaModule
            ? j.a.LOADED
            : (function (e, t) {
                return A(Object(_.d)(e), t).selectInitialFetchStatus(e)
              })(e, t.userId) || j.a.LOADING
        },
        N = Object(C.a)()
          .propsFromState(function () {
            return { mediaItemsWithEntry: D, mediaFetchStatus: U }
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
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('PROFILE_SIDE_BAR'),
              fetchRecentMediaIfNeeded: R,
            }
          }),
        T = n('kGix'),
        K = n('3XMw'),
        W = n.n(K),
        G = n('fs1G'),
        H = n('q2Cp'),
        V = n('Qwev'),
        X = n('rHpw'),
        q = n('3dad'),
        z = n('v6aA'),
        B = W.a.b327c129,
        J = m()({}, v.a.NotAuthorizedToViewUser, { customAction: G.a }),
        Y = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(c()(e), '_fetchRecentUserMedia', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  i = t.fetchRecentMediaIfNeeded,
                  r = t.hideMediaModule,
                  a = t.userId
                !r && i(e.context.featureSwitches, a).catch(n(J))
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
                    : I.a.createElement(V.a, { accessibilityLabel: 'Loading profile sidebar' })
                },
              },
              {
                key: '_renderSidebar',
                value: function () {
                  var e = this.props,
                    t = e.hideMediaModule,
                    n = e.userId,
                    i = e.userScreenName,
                    r = e.withTopicsToFollow,
                    a = this._getImages()
                  return I.a.createElement(
                    b.a,
                    { profileScreenName: i, profileUserId: n, withTopicsToFollow: r },
                    a.length >= 2 && !t
                      ? I.a.createElement(H.a, {
                          cacheLocationKey: 'profileSidebar',
                          images: a,
                          singleImageMaxAspectRatio: X.a.theme.aspectRatios.landscape,
                          singleImageMinAspectRatio: X.a.theme.aspectRatios.landscape,
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
                      var i,
                        r = e.entry,
                        a = e.mediaItem,
                        o = {
                          pathname: Q(a.expanded_url),
                          state: {
                            mediaItems: { items: t, index: n },
                            forwardPivotInfo: null === (i = r.content) || void 0 === i ? void 0 : i.forwardPivot,
                          },
                        },
                        d = q.a.getOriginalImage(a)
                      return (
                        d && {
                          width: d.width,
                          height: d.height,
                          url: d.url,
                          backgroundColor: q.a.getBackgroundColor(a),
                          cropCandidates: q.a.getCropCandidates(a),
                          accessibilityLabel: a.ext_alt_text || B,
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
      m()(Y, 'contextType', z.a)
      var Q = function (e) {
          return e.replace('https://twitter.com', '')
        },
        Z = N(Y)
      t.default = Z
    },
  },
])
//# sourceMappingURL=WIPED
