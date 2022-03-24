;(window.webpackJsonp = window.webpackJsonp || []).push([
  [112],
  {
    DghG: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'UserMomentsScreen', function () {
          return R
        })
      var r = t('VrFO'),
        a = t.n(r),
        o = t('Y9Ll'),
        c = t.n(o),
        s = t('1Pcy'),
        i = t.n(s),
        u = t('5Yy7'),
        m = t.n(u),
        l = t('2VqO'),
        d = t.n(l),
        h = t('KEM+'),
        f = t.n(h),
        p = (t('2G9S'), t('ERkP')),
        E = t.n(p),
        M = t('es0u'),
        O = (t('KqXw'), t('WNMA'), t('RqPI')),
        b = t('Fg8X'),
        w = t('G6rE'),
        I = t('rxPX'),
        N = t('0KEI'),
        v = function (e, n) {
          return n.match.params.screenName
        },
        y = function (e, n) {
          var t = v(0, n)
          return w.e.selectByScreenName(e, t)
        },
        g = Object(I.a)()
          .propsFromState(function () {
            return { screenName: v, user: y, loggedInUserId: O.q }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUserId,
              t = e.screenName,
              r = e.user
            return { screenName: t, user: r, userId: null == r ? void 0 : r.id_str, loggedInUserId: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)('USER_MOMENTS'),
              createMoment: b.a.create,
              fetchOneUserByScreenNameIfNeeded: w.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'profile', section: 'moments' }),
        U = t('c+OQ'),
        _ = t('7wqI'),
        C = t('3XMw'),
        S = t.n(C),
        A = t('yoO3'),
        F = t('5FtR'),
        T = t('VS6U'),
        j = t('gbni'),
        k = t('yrzJ'),
        L = t('G8HL'),
        P = S.a.b4af8c6a,
        R = (function (e) {
          m()(t, e)
          var n = d()(t)
          function t() {
            var e
            a()(this, t)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = n.call.apply(n, [this].concat(o))),
              f()(i()(e), '_renderTimeline', function () {
                var n = e.props,
                  t = n.screenName,
                  r = n.userId,
                  a = e._isOwnMoments()
                return E.a.createElement(j.a, { isOwnMoments: a, screenName: t, userId: r, withAuthorControls: !1 })
              }),
              f()(i()(e), '_handleFetchUser', function () {
                var n = e.props,
                  t = n.createLocalApiErrorHandler
                ;(0, n.fetchOneUserByScreenNameIfNeeded)(n.screenName).catch(t())
              }),
              f()(i()(e), '_handleCreateMoment', function () {
                var n = e.props,
                  t = n.createLocalApiErrorHandler,
                  r = n.createMoment,
                  a = n.history
                r().then(function (e) {
                  e && e.id && a.push({ pathname: '/i/moment_maker/edit/'.concat(e.id) })
                }, t({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            c()(t, [
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
                    t = e.screenName,
                    r = e.user,
                    a = !r || (r && Object(_.b)({ isOwnProfile: this._isOwnMoments(), user: r })),
                    o = this._isOwnMoments() ? E.a.createElement(U.a, { onPress: this._handleCreateMoment }) : void 0
                  return a
                    ? E.a.createElement(
                        A.a,
                        null,
                        E.a.createElement(T.a, {
                          backLocation: '/'.concat(t),
                          history: n,
                          primaryContent: this._renderTimeline(),
                          rightControl: o,
                          sidebarContent: E.a.createElement(M.a, null),
                          subtitle: E.a.createElement(k.a, { screenName: t }),
                          title: P,
                        }),
                      )
                    : E.a.createElement(F.a, { to: '/'.concat(t) })
                },
              },
              {
                key: '_isOwnMoments',
                value: function () {
                  var e = this.props,
                    n = e.loggedInUserId,
                    t = e.userId
                  return !!n && t === n
                },
              },
            ]),
            t
          )
        })(E.a.Component)
      n.default = g(Object(L.a)(R))
    },
    gbni: function (e, n, t) {
      'use strict'
      var r = t('ERkP'),
        a = t.n(r),
        o = t('KEM+'),
        c = t.n(o),
        s = t('k49u'),
        i = t('LVU8'),
        u = t('FIs5'),
        m = t('ezF+'),
        l = t('PnFR'),
        d = t('8UdT'),
        h = t('Wjib'),
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
        p = t('3XMw'),
        E = t.n(p),
        M = t('fTQJ'),
        O = t('iUle'),
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
          t = e.isOwnMoments,
          r = e.screenName,
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
          renderEmptyState: U(r, t),
          renderUnavailable: g,
          title: b({ screenName: r }),
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
