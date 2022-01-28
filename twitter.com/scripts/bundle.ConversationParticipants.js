;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    gLwk: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'ConversationParticipantsScreen', function () {
          return q
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        f = n.n(u),
        d = n('N+ot'),
        l = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        v = (n('2G9S'), n('ERkP')),
        I = n.n(v),
        _ = n('RhWx'),
        w = n.n(_),
        N = (n('WNMA'), n('KqXw'), n('LW0h'), n('z84I'), n('hqKg')),
        b = n('XOJV'),
        E = n('lnti'),
        O = n('s1N3'),
        R = n('rxPX'),
        S = n('0KEI'),
        A = function (t, e) {
          return e.match.params.screenName
        },
        L = function (t, e) {
          return e.match.params.statusId
        },
        F = function (t, e) {
          return b.a.selectHydrated(t, e.match.params.statusId)
        },
        k = function (t, e) {
          return b.a.selectFetchStatus(t, e.match.params.statusId)
        },
        C = Object(R.a)()
          .propsFromState(function () {
            return {
              fetchStatus: k,
              screenName: A,
              statusId: L,
              participantIds: Object(N.createSelector)(F, function (t) {
                if (!t) return []
                var e = (t.entities || {}).user_mentions,
                  n = void 0 === e ? [] : e,
                  r = { id_str: t.in_reply_to_user_id_str },
                  a = n.filter(function (e) {
                    return e.indices[0] < t.display_text_range[0]
                  }),
                  c = [r].concat(w()(a))
                return Object(E.a)(
                  Object(O.a)(
                    c.map(function (t) {
                      return t.id_str
                    }),
                  ),
                )
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'CONVERSATION_PARTICIPANTS_SCREEN',
              ),
              fetchTweetIfNeeded: b.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'conversation_participants' }),
        H = n('v//M'),
        P = n('W5XZ'),
        j = n('jHSc'),
        g = n('3XMw'),
        x = n.n(g),
        M = n('hqDb')
      function T(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(t)
          if (e) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var W = x.a.cdd4aafe,
        X = x.a.aac3fad1,
        q = (function (t) {
          f()(n, t)
          var e = T(n)
          function n() {
            var t
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (t = e.call.apply(e, [this].concat(c))),
              y()(s()(t), '_renderList', function () {
                return I.a.createElement(M.a, { userIds: t.props.participantIds, withItemBorder: !0 })
              }),
              y()(s()(t), '_handleFetch', function () {
                var e = t.props,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchTweetIfNeeded)(e.statusId).catch(n(P.a))
              }),
              t
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.fetchStatus,
                    n = t.history,
                    r = t.screenName,
                    a = t.statusId
                  return I.a.createElement(
                    j.b,
                    { backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(a), history: n, title: X },
                    I.a.createElement(H.a, {
                      accessibilityLabel: W,
                      fetchStatus: e,
                      onRequestRetry: this._handleFetch,
                      render: this._renderList,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(I.a.Component),
        J = C(q)
      e.default = J
    },
  },
])
//# sourceMappingURL=WIPED
