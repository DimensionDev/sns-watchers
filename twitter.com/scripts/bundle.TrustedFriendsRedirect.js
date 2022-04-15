;(window.webpackJsonp = window.webpackJsonp || []).push([
  [102],
  {
    DVtB: function (t, e, r) {
      'use strict'
      r.d(e, 'b', function () {
        return F
      }),
        r.d(e, 'a', function () {
          return R
        }),
        r.d(e, 'c', function () {
          return l
        })
      var n = r('KEM+'),
        s = r.n(n),
        i = r('yiKp'),
        u = r.n(i),
        a = r('ddV6'),
        d = r.n(a),
        c = (r('yH/f'), r('oEOe')),
        S = r('kGix'),
        E = r('Ssj5'),
        o = 'trustedFriends',
        T = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        f = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        _ = 'rweb/trustedFriendsLists/SET_TRUSTED_FRIENDS_LIST',
        F = function (t) {
          return t.trustedFriends.lists
        },
        L = function () {
          return function (t, e, r) {
            var n = r.api
            return c.b(t, { request: n.TrustedFriends.createTrustedFriendsList })({
              actionTypes: f,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        R = function () {
          return function (t, e) {
            var r = e(),
              n = F(r)
            ;(n.length ? n[0] : void 0) ||
              t(function (t, e, r) {
                var n = r.api
                return c.b(t, { request: n.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: T,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (e) {
                !e.authenticated_user_trusted_friends_lists.length && L && t(L())
              })
          }
        },
        l = function (t) {
          return function (e, r) {
            var n = r(),
              s = F(n),
              i = d()(s, 1)[0]
            if (i) {
              var a = u()(u()({}, i), {}, { member_count: t })
              e({ payload: a, type: _ })
            }
          }
        },
        I = Object.freeze({ lists: [], fetchStatus: S.a.NONE })
      E.a.register(
        s()({}, o, function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            e = arguments.length > 1 ? arguments[1] : void 0
          switch (e.type) {
            case T.REQUEST:
              return u()(u()({}, t), {}, { fetchStatus: S.a.LOADING })
            case T.FAILURE:
              return u()(u()({}, t), {}, { error: e.payload, fetchStatus: S.a.FAILED })
            case T.SUCCESS:
              if (e.payload)
                return u()(
                  u()({}, t),
                  {},
                  { lists: e.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: S.a.LOADED },
                )
              break
            case f.REQUEST:
              return u()(u()({}, t), {}, { fetchStatus: S.a.LOADING })
            case f.FAILURE:
              return u()(u()({}, t), {}, { error: e.payload, fetchStatus: S.a.FAILED })
            case f.SUCCESS:
              if (e.payload)
                return u()(
                  u()({}, t),
                  {},
                  { lists: [e.payload.trusted_friends_list_create], error: null, fetchStatus: S.a.LOADED },
                )
              break
            case _:
              if (e.payload) return u()(u()({}, t), {}, { lists: [e.payload] })
              break
            default:
              return t
          }
          return t
        }),
      )
    },
    lWZU: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'TrustedFriendsRedirect', function () {
          return T
        })
      r('KqXw'), r('MvUL')
      var n = r('ERkP'),
        s = r.n(n),
        i = r('rxPX'),
        u = r('DVtB'),
        a = function (t) {
          var e,
            r = Object(u.b)(t)
          return r.length ? (null === (e = r[0]) || void 0 === e ? void 0 : e.rest_id) : void 0
        },
        d = Object(i.a)()
          .propsFromState(function () {
            return { trustedFriendsListId: a }
          })
          .propsFromActions(function () {
            return { fetchOrCreateTrustedFriendsList: u.a }
          }),
        c = r('kGix'),
        S = r('v//M'),
        E = r('0zXz'),
        o = r('FGLp'),
        T = function (t) {
          var e = t.history,
            r = t.trustedFriendsListId
          return (
            Object(o.a)(function () {
              t.fetchOrCreateTrustedFriendsList()
            }),
            s.a.useEffect(
              function () {
                r && e.replace('/i/circles/'.concat(r, '/members'))
              },
              [e, r],
            ),
            s.a.createElement(S.a, { fetchStatus: c.a.LOADING, render: E.a })
          )
        }
      e.default = d(T)
    },
  },
])
//# sourceMappingURL=WIPED
