;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    gLwk: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'ConversationParticipantsScreen', function () {
          return X
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
        I = n('RhWx'),
        _ = n.n(I),
        w = (n('WNMA'), n('KqXw'), n('LW0h'), n('z84I'), n('hqKg')),
        N = n('XOJV'),
        b = n('lnti'),
        E = n('s1N3'),
        O = n('rxPX'),
        R = n('0KEI'),
        S = function (t, e) {
          return e.match.params.screenName
        },
        A = function (t, e) {
          return e.match.params.statusId
        },
        L = function (t, e) {
          return N.a.selectHydrated(t, e.match.params.statusId)
        },
        F = function (t, e) {
          return N.a.selectFetchStatus(t, e.match.params.statusId)
        },
        k = Object(O.a)()
          .propsFromState(function () {
            return {
              fetchStatus: F,
              screenName: S,
              statusId: A,
              participantIds: Object(w.createSelector)(L, function (t) {
                if (!t) return []
                var e = (t.entities || {}).user_mentions,
                  n = void 0 === e ? [] : e,
                  r = { id_str: t.in_reply_to_user_id_str },
                  a = n.filter(function (e) {
                    return e.indices[0] < t.display_text_range[0]
                  }),
                  c = [r].concat(_()(a))
                return Object(b.a)(
                  Object(E.a)(
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
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
                'CONVERSATION_PARTICIPANTS_SCREEN',
              ),
              fetchTweetIfNeeded: N.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'conversation_participants' }),
        C = n('v//M'),
        H = n('W5XZ'),
        P = n('jHSc'),
        j = n('3XMw'),
        g = n.n(j),
        x = n('hqDb')
      function M(t) {
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
      var T = g.a.cdd4aafe,
        W = g.a.aac3fad1,
        X = (function (t) {
          f()(n, t)
          var e = M(n)
          function n() {
            var t
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (t = e.call.apply(e, [this].concat(c))),
              y()(s()(t), '_renderList', function () {
                return v.createElement(x.a, { userIds: t.props.participantIds, withItemBorder: !0 })
              }),
              y()(s()(t), '_handleFetch', function () {
                var e = t.props,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchTweetIfNeeded)(e.statusId).catch(n(H.a))
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
                  return v.createElement(
                    P.b,
                    { backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(a), history: n, title: W },
                    v.createElement(C.a, {
                      accessibilityLabel: T,
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
        })(v.Component),
        q = k(X)
      e.default = q
    },
  },
])
//# sourceMappingURL=WIPED
