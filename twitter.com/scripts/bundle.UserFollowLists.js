;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    k1Tk: function (e, o, r) {
      'use strict'
      r.r(o),
        r.d(o, 'FollowersScreen', function () {
          return fe
        })
      r('OZaJ')
      var t = r('VrFO'),
        n = r.n(t),
        l = r('Y9Ll'),
        a = r.n(l),
        c = r('1Pcy'),
        s = r.n(c),
        u = r('5Yy7'),
        f = r.n(u),
        i = r('N+ot'),
        d = r.n(i),
        w = r('AuHH'),
        p = r.n(w),
        h = r('KEM+'),
        m = r.n(h),
        y = (r('2G9S'), r('ho0z'), r('ERkP')),
        _ = r('es0u'),
        b = (r('WNMA'), r('KqXw'), r('XnvM')),
        v = (r('LW0h'), r('z84I'), r('8UdT')),
        g = r('WpDa'),
        E = r('ZNT5'),
        O = r('G6rE'),
        F = r('hqKg'),
        I = r('0KEI'),
        L = r('oEGd'),
        N = r('RqPI'),
        S = function (e, o) {
          return o.match.params.screenName
        },
        k = Object(F.createSelector)(
          function (e, o) {
            var r = (function (e, o) {
              return O.e.selectIdByScreenName(e, S(0, o))
            })(e, o)
            return r ? b.c(e, r) : void 0
          },
          function (e) {
            return e
          },
        ),
        R = Object(F.createSelector)(
          function (e, o) {
            return O.e.selectFetchStatusByScreenName(e, S(0, o))
          },
          N.k,
          function (e, o) {
            return o.match.params.followersSubroute
          },
          S,
          function (e, o) {
            return O.e.selectByScreenName(e, S(0, o))
          },
          N.p,
          k,
          function (e, o, r, t, n, l, a) {
            return {
              fetchStatus: e,
              isActiveCreator: o,
              mode: r,
              screenName: t,
              user: n,
              loggedInUserId: l,
              knownFollowersCount: a,
            }
          },
        ),
        U = {
          cleanupFollowersList: function (e) {
            return function (o, r) {
              var t = r()
              o(
                e
                  .selectEntries(t)
                  .filter(function (e) {
                    if (!e.content || e.type !== v.b.User) return !1
                    var o = e.content.id,
                      r = O.e.select(t, o)
                    return r && !r.followed_by
                  })
                  .map(function (o) {
                    return e.removeEntry(o.entryId)
                  }),
              )
            }
          },
          createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_FOLLOWERS'),
          fetchOneUserByScreenNameIfNeeded: O.e.fetchOneByScreenNameIfNeeded,
          fetchKnownFollowersIfNeeded: b.a,
        },
        j = Object(L.g)(R, U),
        G = r('QIgh'),
        K = r('IcAo'),
        C = r('88ay'),
        A = r('Ka9G'),
        P = function (e) {
          var o = e.withFollowerActionMenu,
            r = void 0 !== o && o
          return Object(K.a)({}, Object(G.a)({}), m()({}, v.b.User, Object(A.a)({ decoration: r ? C.f : void 0 })))
        },
        Q = r('7wqI'),
        T = r('GOQE'),
        W = r('v//M'),
        x = r('oQhu'),
        H = r('yoO3'),
        M = r('txMZ'),
        q = r('5FtR'),
        B = r('fTQJ'),
        Y = r('VS6U'),
        J = r('v6aA'),
        D = r('FIs5'),
        X = r('k/OQ'),
        Z = r('3XMw'),
        z = r.n(Z)
      function V(e) {
        var o = (function () {
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
            t = p()(e)
          if (o) {
            var n = p()(this).constructor
            r = Reflect.construct(t, arguments, n)
          } else r = t.apply(this, arguments)
          return d()(this, r)
        }
      }
      var $ = z.a.fe9d3af9,
        ee = z.a.fbce8dbd,
        oe = {
          superfollowers: z.a.ab7fc3ee,
          followers_you_follow: z.a.j0d17377,
          followers: z.a.fa9e827f,
          following: z.a.ha979be5,
        },
        re = {
          superfollowers: z.a.aa4209e8,
          followers_you_follow: z.a.i099d32d,
          followers: z.a.c64974fb,
          following: z.a.d960b55b,
        },
        te = {
          superfollowers: z.a.ed51baba,
          followers_you_follow: z.a.g65f4bab,
          followers: z.a.g65f4bab,
          following: z.a.f9b11c03,
        },
        ne = {
          superfollowers: z.a.a1f9e34c,
          followers_you_follow: z.a.j029a4db,
          followers: z.a.j029a4db,
          following: z.a.fdf1390e,
        },
        le = {
          superfollowers: z.a.j759a7c2,
          followers_you_follow: z.a.d74ee2e2,
          followers: z.a.f69e85ed,
          following: z.a.ae5749c6,
        },
        ae = {
          superfollowers: z.a.b2f3c46a,
          followers_you_follow: z.a.ec251f36,
          followers: z.a.c0455f4a,
          following: z.a.i8bd07a9,
        },
        ce = {
          superfollowers: function (e) {
            return Object(E.a)({
              timelineId: 'superFollowersGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchSuperFollowers
              },
              getEndpointParams: function (e) {
                var o = e.count,
                  r = e.cursor
                return { count: o, cursor: 'string' == typeof r ? r : void 0 }
              },
              context: 'FETCH_SUPER_FOLLOWERS',
              perfKey: 'superFollowersGraphQL',
              formatResponse: g.a,
            })
          },
          followers_you_follow: function (e) {
            return Object(E.a)({
              timelineId: 'followersYouKnowGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowersYouKnow
              },
              getEndpointParams: function (o) {
                var r = o.count,
                  t = o.cursor
                return { count: r, cursor: 'string' == typeof t ? t : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWERS_YOU_KNOW',
              perfKey: 'followersYouKnowGraphQL',
              formatResponse: g.a,
            })
          },
          followers: function (e) {
            return Object(E.a)({
              timelineId: 'followersGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowers
              },
              getEndpointParams: function (o) {
                var r = o.count,
                  t = o.cursor
                return { count: r, cursor: 'string' == typeof t ? t : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWERS',
              perfKey: 'followersGraphQL',
              formatResponse: g.a,
            })
          },
          following: function (e) {
            return Object(E.a)({
              timelineId: 'followingGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowing
              },
              getEndpointParams: function (o) {
                var r = o.count,
                  t = o.cursor
                return { count: r, cursor: 'string' == typeof t ? t : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWING',
              perfKey: 'followingGraphQL',
              formatResponse: g.a,
            })
          },
        },
        se = Object(x.a)(function (e, o) {
          return e && ce[o](e)
        }),
        ue = Object(x.a)(function (e, o, r, t) {
          return function () {
            var n = o === e,
              l = n && 'following' === t ? ee : void 0,
              a = n && 'following' === t ? '/i/connect_people' : void 0,
              c = n ? te[t] : le[t]({ screenName: r }),
              s = n ? ne[t] : ae[t]
            return y.createElement(D.a, { buttonLink: a, buttonText: l, header: c, message: s })
          }
        }),
        fe = (function (e) {
          f()(r, e)
          var o = V(r)
          function r() {
            var e
            n()(this, r)
            for (var t = arguments.length, l = new Array(t), a = 0; a < t; a++) l[a] = arguments[a]
            return (
              (e = o.call.apply(o, [this].concat(l))),
              m()(s()(e), '_render', function () {
                var o = e.props,
                  r = o.loggedInUserId,
                  t = o.mode,
                  n = o.screenName,
                  l = o.user,
                  a = se(null == l ? void 0 : l.id_str, t),
                  c = ue(r, null == l ? void 0 : l.id_str, n, t),
                  s =
                    e._isOwnProfile() &&
                    'followers' === t &&
                    e.context.featureSwitches.isTrue('followers_management_remove_follower_from_followers_list')
                return a
                  ? y.createElement(B.a, {
                      entryConfiguration: P({ withFollowerActionMenu: s }),
                      loadingAccessibilityLabel: $,
                      module: a,
                      renderEmptyState: c,
                      title: re[t],
                    })
                  : null
              }),
              m()(s()(e), '_handleFetchUser', function () {
                var o = e.props,
                  r = o.createLocalApiErrorHandler
                ;(0, o.fetchOneUserByScreenNameIfNeeded)(o.screenName).catch(r(T.a))
              }),
              e
            )
          }
          return (
            a()(r, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleCleanup(this.props.mode), this._fetchKnownFollowersIfNeeded()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.mode !== this.props.mode && this._handleCleanup(this.props.mode),
                    this._fetchKnownFollowersIfNeeded()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    o = e.fetchStatus,
                    r = e.history,
                    t = e.isActiveCreator,
                    n = e.knownFollowersCount,
                    l = e.loggedInUserId,
                    a = e.mode,
                    c = e.screenName,
                    s = e.user,
                    u = oe[a]({ screenName: c, fullName: s ? s.name : '' }),
                    f = this._isOwnProfile(),
                    i = f && t,
                    d = !s || Object(Q.b)({ isOwnProfile: f, user: s }),
                    w = 'superfollowers' === a ? i : d,
                    p = [
                      s && l === s.id_str && t
                        ? { key: 'superfollowers', to: '/'.concat(c, '/superfollowers'), label: re.superfollowers }
                        : null,
                      s && l !== s.id_str && n
                        ? {
                            key: 'followers_you_follow',
                            to: '/'.concat(c, '/followers_you_follow'),
                            label: re.followers_you_follow,
                          }
                        : null,
                      { key: 'followers', to: '/'.concat(c, '/followers'), label: re.followers },
                      { key: 'following', to: '/'.concat(c, '/following'), label: re.following },
                    ]
                  return w
                    ? y.createElement(
                        M.a,
                        { scribeSection: a, userId: s && s.id_str },
                        y.createElement(
                          H.a,
                          null,
                          y.createElement(Y.a, {
                            backLocation: '/'.concat(c),
                            documentTitle: u,
                            history: r,
                            primaryContent: y.createElement(W.a, {
                              accessibilityLabel: $,
                              fetchStatus: o,
                              onRequestRetry: this._handleFetchUser,
                              render: this._render,
                            }),
                            secondaryBar: y.createElement(X.a, { links: p }),
                            sidebarContent: y.createElement(_.a, null),
                            subtitle: '@'.concat(c),
                            title: s ? s.name : null,
                          }),
                        ),
                      )
                    : y.createElement(q.a, { to: '/'.concat(c) })
                },
              },
              {
                key: '_fetchKnownFollowersIfNeeded',
                value: function () {
                  var e = this.props,
                    o = e.createLocalApiErrorHandler,
                    r = e.fetchKnownFollowersIfNeeded,
                    t = e.loggedInUserId,
                    n = e.user,
                    l = n && n.protected && !n.following && n.id_str !== t
                  n && n.id_str && !l && r(n.id_str).catch(o({}))
                },
              },
              {
                key: '_isOwnProfile',
                value: function () {
                  var e = this.props,
                    o = e.loggedInUserId,
                    r = e.user
                  return !(!r || r.id_str !== o)
                },
              },
              {
                key: '_handleCleanup',
                value: function (e) {
                  if ('followers' === e) {
                    var o = this.props,
                      r = o.cleanupFollowersList,
                      t = o.user,
                      n = se(null == t ? void 0 : t.id_str, e)
                    n && r(n)
                  }
                },
              },
            ]),
            r
          )
        })(y.Component)
      m()(fe, 'contextType', J.a)
      o.default = j(fe)
    },
  },
])
//# sourceMappingURL=WIPED
