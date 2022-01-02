;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    gLwk: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'ConversationParticipantsScreen', function () {
          return x
        })
      n('OZaJ')
      var r = n('VrFO'),
        c = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        f = n.n(u),
        d = n('N+ot'),
        l = n.n(d),
        h = n('AuHH'),
        p = n.n(h),
        y = n('KEM+'),
        m = n.n(y),
        v = (n('2G9S'), n('ERkP')),
        I = n('RhWx'),
        _ = n.n(I),
        b = (n('WNMA'), n('KqXw'), n('LW0h'), n('z84I'), n('hqKg')),
        w = n('XOJV'),
        O = n('lnti'),
        E = n('s1N3'),
        N = n('0KEI'),
        R = n('oEGd'),
        S = function (t) {
          return function (e, n) {
            return n.match.params[t]
          }
        },
        L = Object(b.createSelector)(
          function (t, e) {
            return w.a.selectHydrated(t, e.match.params.statusId)
          },
          function (t) {
            if (!t) return []
            var e = (t.entities || {}).user_mentions,
              n = void 0 === e ? [] : e,
              r = { id_str: t.in_reply_to_user_id_str },
              c = n.filter(function (e) {
                return e.indices[0] < t.display_text_range[0]
              }),
              a = [r].concat(_()(c))
            return Object(O.a)(
              Object(E.a)(
                a.map(function (t) {
                  return t.id_str
                }),
              ),
            )
          },
        ),
        A = Object(b.createSelector)(
          function (t, e) {
            return w.a.selectFetchStatus(t, e.match.params.statusId)
          },
          S('screenName'),
          S('statusId'),
          L,
          function (t, e, n, r) {
            return { fetchStatus: t, screenName: e, statusId: n, participantIds: r }
          },
        ),
        j = {
          createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)(
            'CONVERSATION_PARTICIPANTS_SCREEN',
          ),
          fetchTweetIfNeeded: w.a.fetchOneIfNeeded,
        },
        g = Object(R.g)(A, j),
        k = n('v//M'),
        C = n('W5XZ'),
        H = n('jHSc'),
        F = n('3XMw'),
        P = n.n(F),
        J = n('hqDb'),
        M = n('7JQg')
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
            r = p()(t)
          if (e) {
            var c = p()(this).constructor
            n = Reflect.construct(r, arguments, c)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var W = P.a.cdd4aafe,
        q = P.a.aac3fad1,
        x = (function (t) {
          f()(n, t)
          var e = T(n)
          function n() {
            var t
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              m()(s()(t), '_renderList', function () {
                return v.createElement(J.a, { userIds: t.props.participantIds, withItemBorder: !0 })
              }),
              m()(s()(t), '_handleFetch', function () {
                var e = t.props,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchTweetIfNeeded)(e.statusId).catch(n(C.a))
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
                    c = t.statusId
                  return v.createElement(
                    H.b,
                    { backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(c), history: n, title: q },
                    v.createElement(k.a, {
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
        })(v.Component)
      e.default = Object(M.c)({ page: 'conversation_participants' })(g(x))
    },
  },
])
//# sourceMappingURL=WIPED
