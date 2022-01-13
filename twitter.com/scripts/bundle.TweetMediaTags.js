;(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    hqDb: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('97Jx'),
        a = r.n(n),
        c = r('m3Bd'),
        s = r.n(c),
        o = r('VrFO'),
        u = r.n(o),
        i = r('Y9Ll'),
        l = r.n(i),
        d = r('1Pcy'),
        f = r.n(d),
        h = r('5Yy7'),
        p = r.n(h),
        I = r('N+ot'),
        b = r.n(I),
        v = r('AuHH'),
        m = r.n(v),
        y = r('KEM+'),
        E = r.n(y),
        U = (r('2G9S'), r('ERkP')),
        A = r('k49u'),
        S = (r('LW0h'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        w = r('kGix'),
        O = r('G6rE'),
        N = r('rxPX'),
        L = r('0KEI'),
        k = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!O.e.select(e, t)
          })
        },
        D = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = O.e.selectFetchStatus(e, r)
            return (t[r] = n === w.a.NONE ? w.a.LOADING : n), t
          }, {})
        },
        F = Object(N.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(S.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(S.a)(R, D, k, function (e, t, r) {
                for (var n = w.a.LOADED, a = 0; a < r.length; a++) {
                  var c = r[a]
                  if (-1 === e.indexOf(c)) {
                    var s = t[c] || w.a.LOADING
                    n = n === w.a.LOADED ? s : n
                  }
                  if (n === w.a.LOADED) break
                }
                return n
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: O.e.fetchManyIfNeeded,
            }
          }),
        _ = r('v//M'),
        M = r('3XMw'),
        g = r.n(M),
        x = r('pQ3Z'),
        H = r.n(x),
        j = (r('z84I'), r('cFuS')),
        C = r('Re5t'),
        T = r('MWbm'),
        B = r('88ay'),
        P = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            n = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return U.createElement(
            T.a,
            null,
            n.map(function (e, n) {
              return r
                ? r(e)
                : U.createElement(B.b, {
                    decoration: B.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: j.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      P.defaultProps = { displayMode: C.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var X = P
      function G(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var V = g.a.f5b426c2,
        W = { viewType: 'user_list' },
        q = F(
          (function (e) {
            p()(r, e)
            var t = G(r)
            function r() {
              var e
              u()(this, r)
              for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(c))),
                E()(f()(e), 'state', { allUsersUnavailable: !1 }),
                E()(f()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    n =
                      (t.createLocalApiErrorHandler,
                      t.fetchStatus,
                      t.fetchUsersIfNeeded,
                      t.userIds,
                      s()(t, [
                        'availableUserIds',
                        'createLocalApiErrorHandler',
                        'fetchStatus',
                        'fetchUsersIfNeeded',
                        'userIds',
                      ]))
                  return U.createElement(X, a()({}, n, { userIds: r }))
                }),
                E()(f()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              l()(r, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    H()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return U.createElement(_.a, {
                      accessibilityLabel: V,
                      behavioralEventContext: W,
                      fetchStatus: this.state.allUsersUnavailable ? w.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      r = this.props,
                      n = r.availableUserIds,
                      a = r.createLocalApiErrorHandler
                    ;(0, r.fetchUsersIfNeeded)(r.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      a(
                        ((e = {}),
                        E()(e, A.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        E()(e, A.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              r
            )
          })(U.Component),
        )
      t.a = q
    },
    nDeN: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'MediaTagsScreen', function () {
          return k
        })
      var n = r('ddV6'),
        a = r.n(n),
        c = (r('z84I'), r('ERkP')),
        s = (r('WNMA'), r('KqXw'), r('o52z')),
        o = r('XOJV'),
        u = r('rxPX'),
        i = r('0KEI'),
        l = function (e, t) {
          var r = f(e, t) || {}
          return (r.extended_entities && r.extended_entities.media) || Object(s.a)()
        },
        d = function (e, t) {
          return t.match.params.statusId
        },
        f = function (e, t) {
          return o.a.selectHydrated(e, d(0, t))
        },
        h = function (e, t) {
          return o.a.selectFetchStatus(e, d(0, t))
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { fetchStatus: h, mediaItems: l, statusId: d, tweet: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('MEDIA_TAGS_SCREEN'),
              fetchTweetIfNeeded: o.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media_tags' }),
        I = r('v//M'),
        b = r('W5XZ'),
        v = r('jHSc'),
        m = r('3XMw'),
        y = r.n(m),
        E = r('VTxf'),
        U = r('hqDb'),
        A = r('VAyw'),
        S = r('t62R'),
        w = y.a.b98764b1,
        O = y.a.cb2054fa,
        N = y.a.e4ad6bda,
        L = function () {
          return c.createElement(E.a, null)
        }
      function k(e) {
        var t = e.createLocalApiErrorHandler,
          r = e.fetchStatus,
          n = e.fetchTweetIfNeeded,
          s = e.history,
          o = e.mediaItems,
          u = e.statusId,
          i = e.tweet,
          l = c.useState(!1),
          d = a()(l, 2),
          f = d[0],
          h = d[1],
          p = c.useCallback(
            function () {
              n(u).catch(function (e) {
                t(b.a)(e), e && e.status && h(!0)
              })
            },
            [u, n, t, h],
          )
        c.useEffect(
          function () {
            p()
          },
          [p],
        )
        var m = c.useCallback(
            function () {
              var e = A.a.mergeTaggedUsers(o).map(function (e) {
                return e.user_id
              })
              return e.length
                ? c.createElement(U.a, { userIds: e, withItemBorder: !0 })
                : c.createElement(S.b, { align: 'center', color: 'gray700', size: 'headline1' }, w)
            },
            [o],
          ),
          y = i ? i.permalink : '/'
        return c.createElement(
          v.b,
          { backLocation: y, history: s, title: N },
          c.createElement(I.a, {
            accessibilityLabel: O,
            fetchStatus: r,
            onRequestRetry: p,
            render: m,
            renderFailure: L,
            retryable: !f,
          }),
        )
      }
      t.default = p(k)
    },
    o52z: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      })
      var n = r('VPAj'),
        a = Object(n.a)([])
      Object(n.a)({})
    },
  },
])
//# sourceMappingURL=WIPED
