;(window.webpackJsonp = window.webpackJsonp || []).push([
  [107],
  {
    DghG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UserMomentsScreen', function () {
          return B
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        i = n.n(s),
        u = n('5Yy7'),
        l = n.n(u),
        m = n('N+ot'),
        f = n.n(m),
        d = n('AuHH'),
        h = n.n(d),
        p = n('KEM+'),
        y = n.n(p),
        E = (n('2G9S'), n('ERkP')),
        v = n.n(E),
        M = n('es0u'),
        O = (n('WNMA'), n('KqXw'), n('RqPI')),
        w = n('Fg8X'),
        N = n('G6rE'),
        b = n('rxPX'),
        I = n('0KEI'),
        C = function (e, t) {
          return t.match.params.screenName
        },
        g = function (e, t) {
          var n = C(0, t)
          return N.e.selectByScreenName(e, n)
        },
        A = Object(b.a)()
          .propsFromState(function () {
            return { screenName: C, user: g, loggedInUserId: O.q }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUserId,
              n = e.screenName,
              r = e.user
            return { screenName: n, user: r, userId: null == r ? void 0 : r.id_str, loggedInUserId: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_MOMENTS'),
              createMoment: w.a.create,
              fetchOneUserByScreenNameIfNeeded: N.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'profile', section: 'moments' }),
        U = n('c+OQ'),
        P = n('7wqI'),
        S = n('3XMw'),
        _ = n.n(S),
        L = n('yoO3'),
        R = n('5FtR'),
        T = n('VS6U'),
        k = n('gbni'),
        F = n('yrzJ'),
        x = n('G8HL')
      function j(e) {
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var H = _.a.b4af8c6a,
        B = (function (e) {
          l()(n, e)
          var t = j(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(i()(e), '_renderTimeline', function () {
                var t = e.props,
                  n = t.screenName,
                  r = t.userId,
                  a = e._isOwnMoments()
                return v.a.createElement(k.a, { isOwnMoments: a, screenName: n, userId: r, withAuthorControls: !1 })
              }),
              y()(i()(e), '_handleFetchUser', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchOneUserByScreenNameIfNeeded)(t.screenName).catch(n())
              }),
              y()(i()(e), '_handleCreateMoment', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.createMoment,
                  a = t.history
                r().then(function (e) {
                  e && e.id && a.push({ pathname: '/i/moment_maker/edit/'.concat(e.id) })
                }, n({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    t = e.history,
                    n = e.screenName,
                    r = e.user,
                    a = !r || (r && Object(P.b)({ isOwnProfile: this._isOwnMoments(), user: r })),
                    o = this._isOwnMoments() ? v.a.createElement(U.a, { onPress: this._handleCreateMoment }) : void 0
                  return a
                    ? v.a.createElement(
                        L.a,
                        null,
                        v.a.createElement(T.a, {
                          backLocation: '/'.concat(n),
                          history: t,
                          primaryContent: this._renderTimeline(),
                          rightControl: o,
                          sidebarContent: v.a.createElement(M.a, null),
                          subtitle: v.a.createElement(F.a, { screenName: n }),
                          title: H,
                        }),
                      )
                    : v.a.createElement(R.a, { to: '/'.concat(n) })
                },
              },
              {
                key: '_isOwnMoments',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUserId,
                    n = e.userId
                  return !!t && n === t
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.default = A(Object(x.a)(B))
    },
    gbni: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        s = n('k49u'),
        i = n('LVU8'),
        u = n('FIs5'),
        l = n('ezF+'),
        m = n('PnFR'),
        f = n('8UdT'),
        d = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        h = function (e) {
          return {
            loader: function () {
              return Promise.all([n.e(0), n.e(219)]).then(n.bind(null, 'Pb8P'))
            },
            loaderOptions: e,
            loaderKey: 'momentSummaryLoader',
            strategy: d.a.Critical,
          }
        },
        p = function (e) {
          var t
          return (
            (t = {}),
            c()(t, f.b.TimelineCursor, Object(m.a)({})),
            c()(
              t,
              f.b.Moment,
              (function (e) {
                var t = e.errorContext,
                  n = e.withAuthorControls
                return l.e(h({ errorContext: t, withAuthorControls: n }))
              })({ withAuthorControls: e, errorContext: 'USER_MOMENTS_TIMELINE' }),
            ),
            c()(t, f.b.MomentAnnotation, l.e(l.a())),
            t
          )
        },
        y = n('3XMw'),
        E = n.n(y),
        v = n('fTQJ'),
        M = n('iUle'),
        O = E.a.fea74b66,
        w = E.a.e14206c3,
        N = E.a.d1e5e327,
        b = E.a.ee75768c,
        I = E.a.f5978663,
        C = E.a.a357d876,
        g = function () {
          return a.a.createElement(u.a, { message: C })
        },
        A = function (e, t) {
          return function () {
            return a.a.createElement(u.a, { header: t ? w : b({ screenName: e }), message: t ? N : I })
          }
        }
      t.a = function (e) {
        var t = e.activeTeamId,
          n = e.isOwnMoments,
          r = e.screenName,
          o = e.userId,
          u = e.withAuthorControls,
          l = a.a.useMemo(
            function () {
              return Object(M.a)(o || '', t, u)
            },
            [o, t, u],
          )
        return a.a.createElement(v.a, {
          apiErrorHandlerMap: c()({}, s.a.TOOMomentsList, {
            customAction: function () {
              Object(i.d)('/explore', { statusCode: 401 })
            },
          }),
          entryConfiguration: p(u),
          module: l,
          renderEmptyState: A(r, n),
          renderUnavailable: g,
          title: O({ screenName: r }),
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
