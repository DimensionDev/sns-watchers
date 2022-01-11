;(window.webpackJsonp = window.webpackJsonp || []).push([
  [103],
  {
    DghG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UserMomentsScreen', function () {
          return H
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
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
        v = n('es0u'),
        M = (n('WNMA'), n('KqXw'), n('RqPI')),
        O = n('Fg8X'),
        w = n('G6rE'),
        N = n('rxPX'),
        b = n('0KEI'),
        I = function (e, t) {
          return t.match.params.screenName
        },
        C = function (e, t) {
          var n = I(0, t)
          return w.e.selectByScreenName(e, n)
        },
        g = Object(N.a)()
          .propsFromState(function () {
            return { screenName: I, user: C, loggedInUserId: M.p }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUserId,
              n = e.screenName,
              r = e.user
            return { screenName: n, user: r, userId: null == r ? void 0 : r.id_str, loggedInUserId: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('USER_MOMENTS'),
              createMoment: O.a.create,
              fetchOneUserByScreenNameIfNeeded: w.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'profile', section: 'moments' }),
        A = n('c+OQ'),
        U = n('7wqI'),
        S = n('3XMw'),
        _ = n.n(S),
        P = n('yoO3'),
        L = n('5FtR'),
        R = n('VS6U'),
        T = n('gbni'),
        k = n('yrzJ'),
        F = n('G8HL')
      function x(e) {
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
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var j = _.a.b4af8c6a,
        H = (function (e) {
          l()(n, e)
          var t = x(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(i()(e), '_renderTimeline', function () {
                var t = e.props,
                  n = t.screenName,
                  r = t.userId,
                  o = e._isOwnMoments()
                return E.createElement(T.a, { isOwnMoments: o, screenName: n, userId: r, withAuthorControls: !1 })
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
                  o = t.history
                r().then(function (e) {
                  e && e.id && o.push({ pathname: '/i/moment_maker/edit/'.concat(e.id) })
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
                    o = !r || (r && Object(U.b)({ isOwnProfile: this._isOwnMoments(), user: r })),
                    a = this._isOwnMoments() ? E.createElement(A.a, { onPress: this._handleCreateMoment }) : void 0
                  return o
                    ? E.createElement(
                        P.a,
                        null,
                        E.createElement(R.a, {
                          backLocation: '/'.concat(n),
                          history: t,
                          primaryContent: this._renderTimeline(),
                          rightControl: a,
                          sidebarContent: E.createElement(v.a, null),
                          subtitle: E.createElement(k.a, { screenName: n }),
                          title: j,
                        }),
                      )
                    : E.createElement(L.a, { to: '/'.concat(n) })
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
        })(E.Component)
      t.default = g(Object(F.a)(H))
    },
    gbni: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('KEM+'),
        a = n.n(o),
        c = n('k49u'),
        s = n('LVU8'),
        i = n('FIs5'),
        u = n('ezF+'),
        l = n('PnFR'),
        m = n('8UdT'),
        f = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        d = function (e) {
          return {
            loader: function () {
              return n.e(212).then(n.bind(null, 'Pb8P'))
            },
            loaderOptions: e,
            loaderKey: 'momentSummaryLoader',
            strategy: f.a.Critical,
          }
        },
        h = function (e) {
          var t
          return (
            (t = {}),
            a()(t, m.b.TimelineCursor, Object(l.a)({})),
            a()(
              t,
              m.b.Moment,
              (function (e) {
                var t = e.errorContext,
                  n = e.withAuthorControls
                return u.e(d({ errorContext: t, withAuthorControls: n }))
              })({ withAuthorControls: e, errorContext: 'USER_MOMENTS_TIMELINE' }),
            ),
            a()(t, m.b.MomentAnnotation, u.e(u.a())),
            t
          )
        },
        p = n('3XMw'),
        y = n.n(p),
        E = n('fTQJ'),
        v = n('iUle'),
        M = y.a.fea74b66,
        O = y.a.e14206c3,
        w = y.a.d1e5e327,
        N = y.a.ee75768c,
        b = y.a.f5978663,
        I = y.a.a357d876,
        C = function () {
          return r.createElement(i.a, { message: I })
        },
        g = function (e, t) {
          return function () {
            return r.createElement(i.a, { header: t ? O : N({ screenName: e }), message: t ? w : b })
          }
        }
      t.a = function (e) {
        var t = e.activeTeamId,
          n = e.isOwnMoments,
          o = e.screenName,
          i = e.userId,
          u = e.withAuthorControls,
          l = r.useMemo(
            function () {
              return Object(v.a)(i || '', t, u)
            },
            [i, t, u],
          )
        return r.createElement(E.a, {
          apiErrorHandlerMap: a()({}, c.a.TOOMomentsList, {
            customAction: function () {
              Object(s.d)('/explore', { statusCode: 401 })
            },
          }),
          entryConfiguration: h(u),
          module: l,
          renderEmptyState: g(o, n),
          renderUnavailable: C,
          title: M({ screenName: o }),
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
