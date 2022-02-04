;(window.webpackJsonp = window.webpackJsonp || []).push([
  [108],
  {
    DghG: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'UserMomentsScreen', function () {
          return x
        })
      var t = r('VrFO'),
        a = r.n(t),
        o = r('Y9Ll'),
        c = r.n(o),
        s = r('1Pcy'),
        i = r.n(s),
        u = r('5Yy7'),
        l = r.n(u),
        m = r('2VqO'),
        d = r.n(m),
        f = r('KEM+'),
        h = r.n(f),
        p = (r('2G9S'), r('ERkP')),
        E = r.n(p),
        M = r('es0u'),
        O = (r('KqXw'), r('WNMA'), r('RqPI')),
        w = r('Fg8X'),
        y = r('G6rE'),
        b = r('rxPX'),
        I = r('0KEI'),
        N = function (e, n) {
          return n.match.params.screenName
        },
        v = function (e, n) {
          var r = N(0, n)
          return y.e.selectByScreenName(e, r)
        },
        C = Object(b.a)()
          .propsFromState(function () {
            return { screenName: N, user: v, loggedInUserId: O.q }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUserId,
              r = e.screenName,
              t = e.user
            return { screenName: r, user: t, userId: null == t ? void 0 : t.id_str, loggedInUserId: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_MOMENTS'),
              createMoment: w.a.create,
              fetchOneUserByScreenNameIfNeeded: y.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'profile', section: 'moments' }),
        g = r('c+OQ'),
        U = r('7wqI'),
        A = r('3XMw'),
        S = r.n(A),
        _ = r('yoO3'),
        P = r('5FtR'),
        L = r('VS6U'),
        T = r('gbni'),
        k = r('yrzJ'),
        F = r('G8HL'),
        j = S.a.b4af8c6a,
        x = (function (e) {
          l()(r, e)
          var n = d()(r)
          function r() {
            var e
            a()(this, r)
            for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++) o[c] = arguments[c]
            return (
              (e = n.call.apply(n, [this].concat(o))),
              h()(i()(e), '_renderTimeline', function () {
                var n = e.props,
                  r = n.screenName,
                  t = n.userId,
                  a = e._isOwnMoments()
                return E.a.createElement(T.a, { isOwnMoments: a, screenName: r, userId: t, withAuthorControls: !1 })
              }),
              h()(i()(e), '_handleFetchUser', function () {
                var n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.fetchOneUserByScreenNameIfNeeded)(n.screenName).catch(r())
              }),
              h()(i()(e), '_handleCreateMoment', function () {
                var n = e.props,
                  r = n.createLocalApiErrorHandler,
                  t = n.createMoment,
                  a = n.history
                t().then(function (e) {
                  e && e.id && a.push({ pathname: '/i/moment_maker/edit/'.concat(e.id) })
                }, r({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.history,
                    r = e.screenName,
                    t = e.user,
                    a = !t || (t && Object(U.b)({ isOwnProfile: this._isOwnMoments(), user: t })),
                    o = this._isOwnMoments() ? E.a.createElement(g.a, { onPress: this._handleCreateMoment }) : void 0
                  return a
                    ? E.a.createElement(
                        _.a,
                        null,
                        E.a.createElement(L.a, {
                          backLocation: '/'.concat(r),
                          history: n,
                          primaryContent: this._renderTimeline(),
                          rightControl: o,
                          sidebarContent: E.a.createElement(M.a, null),
                          subtitle: E.a.createElement(k.a, { screenName: r }),
                          title: j,
                        }),
                      )
                    : E.a.createElement(P.a, { to: '/'.concat(r) })
                },
              },
              {
                key: '_isOwnMoments',
                value: function () {
                  var e = this.props,
                    n = e.loggedInUserId,
                    r = e.userId
                  return !!n && r === n
                },
              },
            ]),
            r
          )
        })(E.a.Component)
      n.default = C(Object(F.a)(x))
    },
    gbni: function (e, n, r) {
      'use strict'
      var t = r('ERkP'),
        a = r.n(t),
        o = r('KEM+'),
        c = r.n(o),
        s = r('k49u'),
        i = r('LVU8'),
        u = r('FIs5'),
        l = r('ezF+'),
        m = r('PnFR'),
        d = r('8UdT'),
        f = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('XBtf')),
        h = function (e) {
          return {
            loader: function () {
              return Promise.all([r.e(0), r.e(220)]).then(r.bind(null, 'Pb8P'))
            },
            loaderOptions: e,
            loaderKey: 'momentSummaryLoader',
            strategy: f.a.Critical,
          }
        },
        p = function (e) {
          var n
          return (
            (n = {}),
            c()(n, d.b.TimelineCursor, Object(m.a)({})),
            c()(
              n,
              d.b.Moment,
              (function (e) {
                var n = e.errorContext,
                  r = e.withAuthorControls
                return l.e(h({ errorContext: n, withAuthorControls: r }))
              })({ withAuthorControls: e, errorContext: 'USER_MOMENTS_TIMELINE' }),
            ),
            c()(n, d.b.MomentAnnotation, l.e(l.a())),
            n
          )
        },
        E = r('3XMw'),
        M = r.n(E),
        O = r('fTQJ'),
        w = r('iUle'),
        y = M.a.fea74b66,
        b = M.a.e14206c3,
        I = M.a.d1e5e327,
        N = M.a.ee75768c,
        v = M.a.f5978663,
        C = M.a.a357d876,
        g = function () {
          return a.a.createElement(u.a, { message: C })
        },
        U = function (e, n) {
          return function () {
            return a.a.createElement(u.a, { header: n ? b : N({ screenName: e }), message: n ? I : v })
          }
        }
      n.a = function (e) {
        var n = e.activeTeamId,
          r = e.isOwnMoments,
          t = e.screenName,
          o = e.userId,
          u = e.withAuthorControls,
          l = a.a.useMemo(
            function () {
              return Object(w.a)(o || '', n, u)
            },
            [o, n, u],
          )
        return a.a.createElement(O.a, {
          apiErrorHandlerMap: c()({}, s.a.TOOMomentsList, {
            customAction: function () {
              Object(i.d)('/explore', { statusCode: 401 })
            },
          }),
          entryConfiguration: p(u),
          module: l,
          renderEmptyState: U(t, r),
          renderUnavailable: g,
          title: y({ screenName: t }),
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
