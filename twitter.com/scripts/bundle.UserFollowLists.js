;(window.webpackJsonp = window.webpackJsonp || []).push([
  [110],
  {
    e5HP: function (e, o, t) {
      'use strict'
      t.d(o, 'a', function () {
        return j
      })
      var r = t('VrFO'),
        n = t.n(r),
        l = t('Y9Ll'),
        a = t.n(l),
        c = t('5Yy7'),
        i = t.n(c),
        s = t('2VqO'),
        u = t.n(s),
        f = t('KEM+'),
        d = t.n(f),
        w = t('ERkP'),
        p = t.n(w),
        h = t('t62R'),
        m = t('3XMw'),
        y = t.n(m),
        b = t('rHpw'),
        g = t('MWbm'),
        v = t('yiKp'),
        _ = t.n(v),
        E = t('Lsrn'),
        O = t('k/Ka'),
        I = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(O.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      I.metadata = { width: 24, height: 24 }
      var L = I,
        F = t('uFYP'),
        C = y.a.f1a1b790,
        S = y.a.if2bf8b3,
        N = y.a.f3624b5c,
        k = y.a.b4b3b113,
        P = y.a.be22205f,
        K = y.a.hcbbe447,
        j = (function (e) {
          i()(t, e)
          var o = u()(t)
          function t() {
            return n()(this, t), o.apply(this, arguments)
          }
          return (
            a()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    o = e.color,
                    t = e.nativeID,
                    r = e.style,
                    n = e.withCircleIcon ? L : F.a
                  return p.a.createElement(
                    g.a,
                    { style: [R.root, r] },
                    p.a.createElement(n, { style: [R.icon, o && R[o]] }),
                    p.a.createElement(h.b, { color: o, nativeID: t, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    o = e.contentAuthorId,
                    t = e.label,
                    r = e.promotedContent,
                    n = r.adMetadataContainer,
                    l = r.advertiser,
                    a = r.advertiser_name,
                    c = r.disclosure_type,
                    i = o && l && o === l.id_str,
                    s = 'string' == typeof c && 'political' === c.toLowerCase(),
                    u = 'string' == typeof c && 'issue' === c.toLowerCase(),
                    f = !(!n || 'POLITICAL' !== n.disclaimerType) || s,
                    d = !(!n || 'ISSUE' !== n.disclaimerType) || u,
                    w = (n || {}).removePromotedAttributionForPreroll
                  return (
                    t ||
                    (!a || i || w
                      ? f
                        ? N
                        : d
                        ? P
                        : S
                      : f
                      ? k({ fullName: a })
                      : d
                      ? K({ fullName: a })
                      : C({ fullName: a }))
                  )
                },
              },
            ]),
            t
          )
        })(p.a.Component)
      d()(j, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var R = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    k1Tk: function (e, o, t) {
      'use strict'
      t.r(o),
        t.d(o, 'FollowersScreen', function () {
          return se
        })
      var r = t('VrFO'),
        n = t.n(r),
        l = t('Y9Ll'),
        a = t.n(l),
        c = t('1Pcy'),
        i = t.n(c),
        s = t('5Yy7'),
        u = t.n(s),
        f = t('2VqO'),
        d = t.n(f),
        w = t('KEM+'),
        p = t.n(w),
        h = (t('2G9S'), t('ho0z'), t('ERkP')),
        m = t.n(h),
        y = t('es0u'),
        b = (t('KqXw'), t('WNMA'), t('XnvM')),
        g = (t('LW0h'), t('7x/C'), t('z84I'), t('8UdT')),
        v = t('WpDa'),
        _ = t('ZNT5'),
        E = t('G6rE'),
        O = t('hqKg'),
        I = t('0KEI'),
        L = t('oEGd'),
        F = t('RqPI'),
        C = function (e, o) {
          return o.match.params.screenName
        },
        S = Object(O.createSelector)(
          function (e, o) {
            var t = (function (e, o) {
              return E.e.selectIdByScreenName(e, C(0, o))
            })(e, o)
            return t ? b.c(e, t) : void 0
          },
          function (e) {
            return e
          },
        ),
        N = Object(O.createSelector)(
          function (e, o) {
            return E.e.selectFetchStatusByScreenName(e, C(0, o))
          },
          F.l,
          function (e, o) {
            return o.match.params.followersSubroute
          },
          C,
          function (e, o) {
            return E.e.selectByScreenName(e, C(0, o))
          },
          F.r,
          S,
          function (e, o, t, r, n, l, a) {
            return {
              fetchStatus: e,
              isActiveCreator: o,
              mode: t,
              screenName: r,
              user: n,
              loggedInUserId: l,
              knownFollowersCount: a,
            }
          },
        ),
        k = {
          cleanupOwnFollowersList: function (e) {
            return function (o, t) {
              var r = t()
              o(
                e
                  .selectEntries(r)
                  .filter(function (e) {
                    if (!e.content || e.type !== g.b.User) return !1
                    var o = e.content.id,
                      t = E.e.select(r, o)
                    return t && !t.followed_by
                  })
                  .map(function (o) {
                    return e.removeEntry(o.entryId)
                  }),
              )
            }
          },
          createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_FOLLOWERS'),
          fetchOneUserByScreenNameIfNeeded: E.e.fetchOneByScreenNameIfNeeded,
          fetchKnownFollowersIfNeeded: b.a,
        },
        P = Object(L.f)(N, k),
        K = t('yiKp'),
        j = t.n(K),
        R = t('QIgh'),
        U = t('88ay'),
        M = t('Ka9G'),
        G = function (e) {
          var o = e.withFollowerActionMenu,
            t = void 0 !== o && o
          return j()(
            j()({}, Object(R.createConfiguration)({})),
            {},
            p()({}, g.b.User, Object(M.a)({ decoration: t ? U.f : void 0 })),
          )
        },
        A = t('7wqI'),
        x = t('GOQE'),
        T = t('v//M'),
        H = t('oQhu'),
        Q = t('yoO3'),
        W = t('txMZ'),
        q = t('5FtR'),
        Y = t('fTQJ'),
        z = t('VS6U'),
        B = t('v6aA'),
        V = t('FIs5'),
        D = t('k/OQ'),
        X = t('3XMw'),
        J = t.n(X),
        Z = J.a.fe9d3af9,
        $ = J.a.fbce8dbd,
        ee = {
          superfollowers: J.a.ab7fc3ee,
          followers_you_follow: J.a.j0d17377,
          followers: J.a.fa9e827f,
          following: J.a.ha979be5,
        },
        oe = {
          superfollowers: J.a.aa4209e8,
          followers_you_follow: J.a.i099d32d,
          followers: J.a.c64974fb,
          following: J.a.d960b55b,
        },
        te = {
          superfollowers: J.a.ed51baba,
          followers_you_follow: J.a.g65f4bab,
          followers: J.a.g65f4bab,
          following: J.a.f9b11c03,
        },
        re = {
          superfollowers: J.a.a1f9e34c,
          followers_you_follow: J.a.j029a4db,
          followers: J.a.j029a4db,
          following: J.a.fdf1390e,
        },
        ne = {
          superfollowers: J.a.j759a7c2,
          followers_you_follow: J.a.d74ee2e2,
          followers: J.a.f69e85ed,
          following: J.a.ae5749c6,
        },
        le = {
          superfollowers: J.a.b2f3c46a,
          followers_you_follow: J.a.ec251f36,
          followers: J.a.c0455f4a,
          following: J.a.i8bd07a9,
        },
        ae = {
          superfollowers: function (e) {
            return Object(_.a)({
              timelineId: 'superFollowersGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchSuperFollowers
              },
              getEndpointParams: function (e) {
                var o = e.count,
                  t = e.cursor
                return { count: o, cursor: 'string' == typeof t ? t : void 0 }
              },
              context: 'FETCH_SUPER_FOLLOWERS',
              perfKey: 'superFollowersGraphQL',
              formatResponse: v.a,
            })
          },
          followers_you_follow: function (e) {
            return Object(_.a)({
              timelineId: 'followersYouKnowGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowersYouKnow
              },
              getEndpointParams: function (o) {
                var t = o.count,
                  r = o.cursor
                return { count: t, cursor: 'string' == typeof r ? r : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWERS_YOU_KNOW',
              perfKey: 'followersYouKnowGraphQL',
              formatResponse: v.a,
            })
          },
          followers: function (e) {
            return Object(_.a)({
              timelineId: 'followersGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowers
              },
              getEndpointParams: function (o) {
                var t = o.count,
                  r = o.cursor
                return { count: t, cursor: 'string' == typeof r ? r : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWERS',
              perfKey: 'followersGraphQL',
              formatResponse: v.a,
            })
          },
          following: function (e) {
            return Object(_.a)({
              timelineId: 'followingGraphQL-'.concat(e),
              getEndpoint: function (e) {
                return e.Graphql.fetchFollowing
              },
              getEndpointParams: function (o) {
                var t = o.count,
                  r = o.cursor
                return { count: t, cursor: 'string' == typeof r ? r : void 0, userId: e }
              },
              context: 'FETCH_FOLLOWING',
              perfKey: 'followingGraphQL',
              formatResponse: v.a,
            })
          },
        },
        ce = Object(H.a)(function (e, o) {
          return e && ae[o](e)
        }),
        ie = Object(H.a)(function (e, o, t, r) {
          return function () {
            var n = o === e,
              l = n && 'following' === r ? $ : void 0,
              a = n && 'following' === r ? '/i/connect_people' : void 0,
              c = n ? te[r] : ne[r]({ screenName: t }),
              i = n ? re[r] : le[r]
            return m.a.createElement(V.a, { buttonLink: a, buttonText: l, header: c, message: i })
          }
        }),
        se = (function (e) {
          u()(t, e)
          var o = d()(t)
          function t() {
            var e
            n()(this, t)
            for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++) l[a] = arguments[a]
            return (
              (e = o.call.apply(o, [this].concat(l))),
              p()(i()(e), '_render', function () {
                var o = e.props,
                  t = o.loggedInUserId,
                  r = o.mode,
                  n = o.screenName,
                  l = o.user,
                  a = ce(null == l ? void 0 : l.id_str, r),
                  c = ie(t, null == l ? void 0 : l.id_str, n, r),
                  i =
                    e._isOwnProfile() &&
                    'followers' === r &&
                    e.context.featureSwitches.isTrue('followers_management_remove_follower_from_followers_list')
                return a
                  ? m.a.createElement(Y.a, {
                      entryConfiguration: e._getMemoizedEntryConfiguration(i),
                      loadingAccessibilityLabel: Z,
                      module: a,
                      renderEmptyState: c,
                      title: oe[r],
                    })
                  : null
              }),
              p()(
                i()(e),
                '_getMemoizedEntryConfiguration',
                Object(H.a)(function (e) {
                  return G({ withFollowerActionMenu: e })
                }),
              ),
              p()(i()(e), '_handleFetchUser', function () {
                var o = e.props,
                  t = o.createLocalApiErrorHandler
                ;(0, o.fetchOneUserByScreenNameIfNeeded)(o.screenName).catch(t(x.a))
              }),
              e
            )
          }
          return (
            a()(t, [
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
                    t = e.history,
                    r = e.isActiveCreator,
                    n = e.knownFollowersCount,
                    l = e.loggedInUserId,
                    a = e.mode,
                    c = e.screenName,
                    i = e.user,
                    s = ee[a]({ screenName: c, fullName: i ? i.name : '' }),
                    u = this._isOwnProfile(),
                    f = u && r,
                    d = !i || Object(A.b)({ isOwnProfile: u, user: i }),
                    w = 'superfollowers' === a ? f : d,
                    p = [
                      i && l === i.id_str && r
                        ? { key: 'superfollowers', to: '/'.concat(c, '/superfollowers'), label: oe.superfollowers }
                        : null,
                      i && l !== i.id_str && n
                        ? {
                            key: 'followers_you_follow',
                            to: '/'.concat(c, '/followers_you_follow'),
                            label: oe.followers_you_follow,
                          }
                        : null,
                      { key: 'followers', to: '/'.concat(c, '/followers'), label: oe.followers },
                      { key: 'following', to: '/'.concat(c, '/following'), label: oe.following },
                    ]
                  return w
                    ? m.a.createElement(
                        W.a,
                        { scribeSection: a, userId: i && i.id_str },
                        m.a.createElement(
                          Q.a,
                          null,
                          m.a.createElement(z.a, {
                            backLocation: '/'.concat(c),
                            documentTitle: s,
                            history: t,
                            primaryContent: m.a.createElement(T.a, {
                              accessibilityLabel: Z,
                              fetchStatus: o,
                              onRequestRetry: this._handleFetchUser,
                              render: this._render,
                            }),
                            secondaryBar: m.a.createElement(D.a, { links: p }),
                            sidebarContent: m.a.createElement(y.a, null),
                            subtitle: '@'.concat(c),
                            title: i ? i.name : null,
                          }),
                        ),
                      )
                    : m.a.createElement(q.a, { to: '/'.concat(c) })
                },
              },
              {
                key: '_fetchKnownFollowersIfNeeded',
                value: function () {
                  var e = this.props,
                    o = e.createLocalApiErrorHandler,
                    t = e.fetchKnownFollowersIfNeeded,
                    r = e.loggedInUserId,
                    n = e.user,
                    l = n && n.protected && !n.following && n.id_str !== r
                  n && n.id_str && !l && t(n.id_str).catch(o({}))
                },
              },
              {
                key: '_isOwnProfile',
                value: function () {
                  var e = this.props,
                    o = e.loggedInUserId,
                    t = e.user
                  return !(!t || t.id_str !== o)
                },
              },
              {
                key: '_handleCleanup',
                value: function (e) {
                  if ('followers' === e && this._isOwnProfile()) {
                    var o = this.props,
                      t = o.cleanupOwnFollowersList,
                      r = o.user,
                      n = ce(null == r ? void 0 : r.id_str, e)
                    n && t(n)
                  }
                },
              },
            ]),
            t
          )
        })(m.a.Component)
      p()(se, 'contextType', B.a)
      o.default = P(se)
    },
    uFYP: function (e, o, t) {
      'use strict'
      var r = t('yiKp'),
        n = t.n(r),
        l = t('ERkP'),
        a = t.n(l),
        c = t('Lsrn'),
        i = t('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(i.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (o.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
