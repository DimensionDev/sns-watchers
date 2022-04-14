;(window.webpackJsonp = window.webpackJsonp || []).push([
  [111],
  {
    DghG: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'UserMomentsScreen', function () {
          return R
        })
      var t = r('VrFO'),
        a = r.n(t),
        o = r('Y9Ll'),
        c = r.n(o),
        s = r('1Pcy'),
        i = r.n(s),
        u = r('5Yy7'),
        m = r.n(u),
        l = r('2VqO'),
        d = r.n(l),
        h = r('KEM+'),
        f = r.n(h),
        p = (r('2G9S'), r('ERkP')),
        E = r.n(p),
        M = r('es0u'),
        O = (r('KqXw'), r('WNMA'), r('RqPI')),
        b = r('Fg8X'),
        w = r('G6rE'),
        I = r('rxPX'),
        N = r('0KEI'),
        v = function (e, n) {
          return n.match.params.screenName
        },
        y = function (e, n) {
          var r = v(0, n)
          return w.e.selectByScreenName(e, r)
        },
        g = Object(I.a)()
          .propsFromState(function () {
            return { screenName: v, user: y, loggedInUserId: O.r }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUserId,
              r = e.screenName,
              t = e.user
            return { screenName: r, user: t, userId: null == t ? void 0 : t.id_str, loggedInUserId: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)('USER_MOMENTS'),
              createMoment: b.a.create,
              fetchOneUserByScreenNameIfNeeded: w.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'profile', section: 'moments' }),
        U = r('c+OQ'),
        _ = r('7wqI'),
        C = r('3XMw'),
        S = r.n(C),
        A = r('yoO3'),
        F = r('5FtR'),
        T = r('VS6U'),
        j = r('gbni'),
        k = r('yrzJ'),
        L = r('G8HL'),
        P = S.a.b4af8c6a,
        R = (function (e) {
          m()(r, e)
          var n = d()(r)
          function r() {
            var e
            a()(this, r)
            for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++) o[c] = arguments[c]
            return (
              (e = n.call.apply(n, [this].concat(o))),
              f()(i()(e), '_renderTimeline', function () {
                var n = e.props,
                  r = n.screenName,
                  t = n.userId,
                  a = e._isOwnMoments()
                return E.a.createElement(j.a, { isOwnMoments: a, screenName: r, userId: t, withAuthorControls: !1 })
              }),
              f()(i()(e), '_handleFetchUser', function () {
                var n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.fetchOneUserByScreenNameIfNeeded)(n.screenName).catch(r())
              }),
              f()(i()(e), '_handleCreateMoment', function () {
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
                    a = !t || (t && Object(_.b)({ isOwnProfile: this._isOwnMoments(), user: t })),
                    o = this._isOwnMoments() ? E.a.createElement(U.a, { onPress: this._handleCreateMoment }) : void 0
                  return a
                    ? E.a.createElement(
                        A.a,
                        null,
                        E.a.createElement(T.a, {
                          backLocation: '/'.concat(r),
                          history: n,
                          primaryContent: this._renderTimeline(),
                          rightControl: o,
                          sidebarContent: E.a.createElement(M.a, null),
                          subtitle: E.a.createElement(k.a, { screenName: r }),
                          title: P,
                        }),
                      )
                    : E.a.createElement(F.a, { to: '/'.concat(r) })
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
      n.default = g(Object(L.a)(R))
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
        m = r('ezF+'),
        l = r('PnFR'),
        d = r('8UdT'),
        h = r('Wjib'),
        f = function (e) {
          var n
          return (
            (n = {}),
            c()(n, d.b.TimelineCursor, Object(l.a)({})),
            c()(n, d.b.Moment, Object(h.a)({ withAuthorControls: e, errorContext: 'USER_MOMENTS_TIMELINE' })),
            c()(n, d.b.MomentAnnotation, m.e(m.a())),
            n
          )
        },
        p = r('3XMw'),
        E = r.n(p),
        M = r('fTQJ'),
        O = r('iUle'),
        b = E.a.fea74b66,
        w = E.a.e14206c3,
        I = E.a.d1e5e327,
        N = E.a.ee75768c,
        v = E.a.f5978663,
        y = E.a.a357d876,
        g = function () {
          return a.a.createElement(u.a, { message: y })
        },
        U = function (e, n) {
          return function () {
            return a.a.createElement(u.a, { header: n ? w : N({ screenName: e }), message: n ? I : v })
          }
        }
      n.a = function (e) {
        var n = e.activeTeamId,
          r = e.isOwnMoments,
          t = e.screenName,
          o = e.userId,
          u = e.withAuthorControls,
          m = a.a.useMemo(
            function () {
              return Object(O.a)(o || '', n, u)
            },
            [o, n, u],
          )
        return a.a.createElement(M.a, {
          apiErrorHandlerMap: c()({}, s.a.TOOMomentsList, {
            customAction: function () {
              Object(i.d)('/explore', { statusCode: 401 })
            },
          }),
          entryConfiguration: f(u),
          module: m,
          renderEmptyState: U(t, r),
          renderUnavailable: g,
          title: b({ screenName: t }),
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
