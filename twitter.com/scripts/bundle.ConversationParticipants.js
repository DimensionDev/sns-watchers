;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    gLwk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ConversationParticipantsScreen', function () {
          return g
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        s = r.n(c),
        o = r('1Pcy'),
        i = r.n(o),
        u = r('5Yy7'),
        l = r.n(u),
        f = r('N+ot'),
        d = r.n(f),
        h = r('AuHH'),
        p = r.n(h),
        I = r('KEM+'),
        v = r.n(I),
        y = (r('2G9S'), r('ERkP')),
        m = r('RhWx'),
        b = r.n(m),
        E = (r('WNMA'), r('KqXw'), r('LW0h'), r('z84I'), r('hqKg')),
        N = r('XOJV'),
        O = r('lnti'),
        A = r('s1N3'),
        S = r('rxPX'),
        _ = r('0KEI'),
        U = function (e, t) {
          return t.match.params.screenName
        },
        L = function (e, t) {
          return t.match.params.statusId
        },
        R = function (e, t) {
          return N.a.selectHydrated(e, t.match.params.statusId)
        },
        w = function (e, t) {
          return N.a.selectFetchStatus(e, t.match.params.statusId)
        },
        F = Object(S.a)()
          .propsFromState(function () {
            return {
              fetchStatus: w,
              screenName: U,
              statusId: L,
              participantIds: Object(E.createSelector)(R, function (e) {
                if (!e) return []
                var t = (e.entities || {}).user_mentions,
                  r = void 0 === t ? [] : t,
                  n = { id_str: e.in_reply_to_user_id_str },
                  a = r.filter(function (t) {
                    return t.indices[0] < e.display_text_range[0]
                  }),
                  c = [n].concat(b()(a))
                return Object(O.a)(
                  Object(A.a)(
                    c.map(function (e) {
                      return e.id_str
                    }),
                  ),
                )
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'CONVERSATION_PARTICIPANTS_SCREEN',
              ),
              fetchTweetIfNeeded: N.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'conversation_participants' }),
        k = r('v//M'),
        D = r('W5XZ'),
        C = r('jHSc'),
        H = r('3XMw'),
        M = r.n(H),
        x = r('hqDb')
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
          var r,
            n = p()(e)
          if (t) {
            var a = p()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var B = M.a.cdd4aafe,
        j = M.a.aac3fad1,
        g = (function (e) {
          l()(r, e)
          var t = P(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), s = 0; s < n; s++) c[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              v()(i()(e), '_renderList', function () {
                return y.createElement(x.a, { userIds: e.props.participantIds, withItemBorder: !0 })
              }),
              v()(i()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(r(D.a))
              }),
              e
            )
          }
          return (
            s()(r, [
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
                    r = e.history,
                    n = e.screenName,
                    a = e.statusId
                  return y.createElement(
                    C.b,
                    { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(a), history: r, title: j },
                    y.createElement(k.a, {
                      accessibilityLabel: B,
                      fetchStatus: t,
                      onRequestRetry: this._handleFetch,
                      render: this._renderList,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(y.Component),
        T = F(g)
      t.default = T
    },
    hqDb: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('97Jx'),
        a = r.n(n),
        c = r('m3Bd'),
        s = r.n(c),
        o = r('VrFO'),
        i = r.n(o),
        u = r('Y9Ll'),
        l = r.n(u),
        f = r('1Pcy'),
        d = r.n(f),
        h = r('5Yy7'),
        p = r.n(h),
        I = r('N+ot'),
        v = r.n(I),
        y = r('AuHH'),
        m = r.n(y),
        b = r('KEM+'),
        E = r.n(b),
        N = (r('2G9S'), r('ERkP')),
        O = r('k49u'),
        A = (r('LW0h'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        S = r('kGix'),
        _ = r('G6rE'),
        U = r('rxPX'),
        L = r('0KEI'),
        R = function (e, t) {
          return t.userIds
        },
        w = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!_.e.select(e, t)
          })
        },
        F = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = _.e.selectFetchStatus(e, r)
            return (t[r] = n === S.a.NONE ? S.a.LOADING : n), t
          }, {})
        },
        k = Object(U.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(A.a)(w, function (e) {
                return e
              }),
              fetchStatus: Object(A.a)(w, F, R, function (e, t, r) {
                for (var n = S.a.LOADED, a = 0; a < r.length; a++) {
                  var c = r[a]
                  if (-1 === e.indexOf(c)) {
                    var s = t[c] || S.a.LOADING
                    n = n === S.a.LOADED ? s : n
                  }
                  if (n === S.a.LOADED) break
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
              fetchUsersIfNeeded: _.e.fetchManyIfNeeded,
            }
          }),
        D = r('v//M'),
        C = r('3XMw'),
        H = r.n(C),
        M = r('pQ3Z'),
        x = r.n(M),
        P = (r('z84I'), r('cFuS')),
        B = r('Re5t'),
        j = r('MWbm'),
        g = r('88ay'),
        T = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            n = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return N.createElement(
            j.a,
            null,
            n.map(function (e, n) {
              return r
                ? r(e)
                : N.createElement(g.b, {
                    decoration: g.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: P.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      T.defaultProps = { displayMode: B.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var W = T
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return v()(this, r)
        }
      }
      var X = H.a.f5b426c2,
        q = { viewType: 'user_list' },
        G = k(
          (function (e) {
            p()(r, e)
            var t = K(r)
            function r() {
              var e
              i()(this, r)
              for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(c))),
                E()(d()(e), 'state', { allUsersUnavailable: !1 }),
                E()(d()(e), '_renderContent', function () {
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
                  return N.createElement(W, a()({}, n, { userIds: r }))
                }),
                E()(d()(e), '_handleFetch', function () {
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
                    x()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return N.createElement(D.a, {
                      accessibilityLabel: X,
                      behavioralEventContext: q,
                      fetchStatus: this.state.allUsersUnavailable ? S.a.LOADED : this.props.fetchStatus,
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
                        E()(e, O.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        E()(e, O.a.OtherUserSuspended, {
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
          })(N.Component),
        )
      t.a = G
    },
  },
])
//# sourceMappingURL=WIPED
