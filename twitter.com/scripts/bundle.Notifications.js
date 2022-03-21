;(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    '+Bsv': function (t, e, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        s = n('M2x3'),
        c = 'settingsAppBar',
        l = n('/yvb'),
        u = n('rHpw'),
        p = r.a.bb081ea1,
        d = { viewType: 'settings_button' },
        f = i.a.memo(function (t) {
          var e = t.onPress,
            n = t.pullRight,
            a = t.to
          return i.a.createElement(l.a, {
            accessibilityLabel: p,
            behavioralEventContext: d,
            hoverLabel: { label: p },
            icon: i.a.createElement(s.a, null),
            link: a,
            onPress: e,
            pullRight: n,
            style: m.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        m = u.a.create(function (t) {
          return { button: { marginVertical: 'calc(-'.concat(t.spaces.space12, ')') } }
        })
      e.a = f
    },
    QuZr: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return yt
      })
      var a,
        i,
        o,
        r,
        s = n('97Jx'),
        c = n.n(s),
        l = n('VrFO'),
        u = n.n(l),
        p = n('Y9Ll'),
        d = n.n(p),
        f = n('1Pcy'),
        m = n.n(f),
        y = n('5Yy7'),
        h = n.n(y),
        b = n('2VqO'),
        g = n.n(b),
        v = n('KEM+'),
        _ = n.n(v),
        T = (n('2G9S'), n('ERkP')),
        w = n.n(T),
        E = n('oQhu'),
        M = n('z2Pn'),
        P = n('rxPX'),
        A = Object(E.a)(function (t, e) {
          return e && e.notificationsModule(t)
        }),
        k = n('FIs5'),
        S = n('yiKp'),
        I = n.n(S),
        C = n('ezF+'),
        x = n('QIgh'),
        O = n('8UdT'),
        L = n('AP4B'),
        V =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(7), n.e(227)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        j = C.e(V),
        R = n('rHpw'),
        U = n('VrCx'),
        N = n('xWpm'),
        B =
          ((i = {}),
          _()(i, O.b.Notification, j),
          _()(
            i,
            O.b.Tweet,
            C.c({
              selectDisplayType: function (t) {
                return t.content.displayType
              },
              handlers:
                ((a = {}),
                _()(
                  a,
                  U.a.Tweet,
                  Object(N.f)({
                    allowDownvote: !0,
                    createAdditionalProps: function (t, e) {
                      return { isUnread: e.isUnread }
                    },
                    selectData: function (t) {
                      var e = t.entry,
                        n = t.module
                      return {
                        isUnread: function (t) {
                          return n.selectIsUnread(t, e.entryId)
                        },
                      }
                    },
                    withMuteConversation: !0,
                  }),
                ),
                _()(
                  a,
                  U.a.QuotedTweet,
                  Object(N.c)({
                    createAdditionalProps: function (t) {
                      return { isCondensed: !0, style: Q.quotedTweet }
                    },
                  }),
                ),
                a),
            }),
          ),
          i),
        D = I()(I()(I()({}, Object(x.a)({ tweetDismissable: !0, withMuteConversation: !0 })), B), L.a),
        Q = R.a.create(function (t) {
          return {
            quotedTweet: {
              marginHorizontal: t.componentDimensions.gutterHorizontal,
              marginTop: 0,
              marginBottom: t.componentDimensions.gutterVertical,
            },
          }
        }),
        F = n('3XMw'),
        G = n.n(F),
        H = n('f42t'),
        J = n('EUHl'),
        K = n('5waQ'),
        q = n('VE3M'),
        X = n('yoO3'),
        Y = n('fTQJ'),
        z = n('v6aA'),
        W =
          (n('jQ3i'),
          {
            notifications_alt_a: [
              {
                height: 200,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/rooster-head-400x200.v1.png',
                width: 400,
              },
              {
                height: 400,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/rooster-head-800x400.v1.png',
                width: 800,
              },
              {
                height: 600,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/rooster-head-1200x600.v1.png',
                width: 1200,
              },
            ],
            notifications_alt_b: [
              {
                height: 200,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/bell-400x200.v1.png',
                width: 400,
              },
              {
                height: 400,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/bell-800x400.v1.png',
                width: 800,
              },
              {
                height: 600,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/bell-1200x600.v1.png',
                width: 1200,
              },
            ],
          }),
        Z = {
          notifications_alt_a:
            ((o = {}),
            _()(o, K.a.All, { headerMessage: G.a.b6a43e77, bodyMessage: G.a.f269c47d, buttonText: G.a.g6871092 }),
            _()(o, K.a.Mentions, { headerMessage: G.a.e577e1a1, bodyMessage: G.a.b91e5a3a }),
            o),
          notifications_alt_b:
            ((r = {}),
            _()(r, K.a.All, { headerMessage: G.a.g264f125, bodyMessage: G.a.a3420a9b, buttonText: G.a.g6871092 }),
            _()(r, K.a.Mentions, { headerMessage: G.a.ef0b8028, bodyMessage: G.a.b91e5a3a }),
            r),
        },
        $ = function (t) {
          return ['control', 'notifications_alt_a', 'notifications_alt_b'].includes(t)
        },
        tt = function (t) {
          return W[t]
        },
        et = function (t, e, n) {
          var a, i
          return null === (a = Z[e]) || void 0 === a || null === (i = a[n]) || void 0 === i ? void 0 : i[t]
        },
        nt = function (t, e) {
          return et('headerMessage', t, e)
        },
        at = function (t, e) {
          return et('bodyMessage', t, e)
        },
        it = function (t, e) {
          return et('buttonText', t, e)
        },
        ot = G.a.eb75875d,
        rt = G.a.e9f1fbcb,
        st = G.a.f287bb3a,
        ct = G.a.h994ec4f,
        lt = G.a.c06d4305,
        ut = G.a.bfdb3c12,
        pt = G.a.h1d919eb,
        dt = G.a.ib4510fd,
        ft = (function (t) {
          h()(n, t)
          var e = g()(n)
          function n() {
            var t
            u()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (t = e.call.apply(e, [this].concat(i))),
              _()(m()(t), '_getNewItemsPillLabel', function () {
                switch (t.props.notificationsType) {
                  case K.a.All:
                    return dt
                  default:
                    return
                }
              }),
              _()(m()(t), '_getEmptyMessageBody', function () {
                var e = t.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                switch (t.props.notificationsType) {
                  case K.a.Mentions:
                    return $(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                      ? at(t._emptyStateVariant, t.props.notificationsType)
                      : lt
                  case K.a.Verified:
                    return e ? pt : ut
                  default:
                    return $(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                      ? at(t._emptyStateVariant, t.props.notificationsType)
                      : e
                      ? ct
                      : st
                }
              }),
              _()(m()(t), '_getEmptyMessageHeader', function () {
                return $(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                  ? nt(t._emptyStateVariant, t.props.notificationsType)
                  : rt
              }),
              _()(m()(t), '_renderEmptyTimeline', function () {
                if (
                  ((t._emptyStateVariant = t.context.featureSwitches.getStringValue(
                    'responsive_web_notifications_empty_state_redesign_variant',
                  )),
                  $(t._emptyStateVariant) && 'control' !== t._emptyStateVariant)
                ) {
                  var e = it(t._emptyStateVariant, t.props.notificationsType)
                  return w.a.createElement(
                    k.a,
                    c()({}, e && { buttonLink: '/i/connect_people', buttonText: e }, {
                      header: t._getEmptyMessageHeader(),
                      imageVariants: tt(t._emptyStateVariant),
                      message: t._getEmptyMessageBody(),
                      onButtonPress: t._handleEmptyTimelineButtonPress,
                      onImpression: t._handleEmptyTimelineImpression,
                    }),
                  )
                }
                return w.a.createElement(k.a, {
                  header: t._getEmptyMessageHeader(),
                  message: t._getEmptyMessageBody(),
                  onImpression: t._handleEmptyTimelineImpression,
                })
              }),
              _()(m()(t), '_handleEmptyTimelineImpression', function () {
                t.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              _()(m()(t), '_handleEmptyTimelineButtonPress', function () {
                t.props.analytics.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              }),
              _()(m()(t), '_handleAtTop', function () {
                t._updateLastReadIfNeeded()
              }),
              t
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var t = this.props,
                    e = t.notificationsType
                  ;(0, t.setNotificationsType)(e)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var t = this.props,
                    e = t.markAllAsRead,
                    n = t.notificationsType
                  this._updateLastReadIfNeeded(), n === K.a.All && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props.notificationsModule
                  return t
                    ? w.a.createElement(
                        X.a,
                        null,
                        w.a.createElement(Y.a, {
                          entryConfiguration: D,
                          key: 'notification-timeline',
                          module: t,
                          newTweetsPillLabel: this._getNewItemsPillLabel(),
                          newTweetsPillMode: J.a.CLIENT,
                          onAtTop: this._handleAtTop,
                          renderEmptyState: this._renderEmptyTimeline,
                          title: ot,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_updateLastReadIfNeeded',
                value: function () {
                  var t = this.props,
                    e = t.notificationsType,
                    n = t.unreadCount,
                    a = t.updateLastRead
                  n && a(e)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      _()(ft, 'contextType', z.a)
      var mt = function (t) {
          return Object(H.a)(
            (function (t) {
              return Object(P.a)()
                .propsFromState(function () {
                  return {
                    unreadCount: function (e, n) {
                      var a,
                        i = n.ntabData
                      return null === (a = A(t, i)) || void 0 === a ? void 0 : a.selectUnreadEntriesCount(e)
                    },
                  }
                })
                .adjustStateProps(function (e, n) {
                  var a = e.unreadCount,
                    i = n.ntabData
                  return { ntabData: null, notificationsModule: A(t, i), notificationsType: t, unreadCount: a }
                })
                .propsFromActions(function (e) {
                  var n,
                    a = e.ntabData
                  return {
                    markAllAsRead: null === (n = A(t, a)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: a && a.updateLastSeenCursor,
                    setNotificationsType: M.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: t })
            })(t)(ft),
            { ntabData: q.a },
          )
        },
        yt = function (t) {
          var e = t.notificationsType
          return mt(e)
        }
    },
    WR6I: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'NotificationsScreen', function () {
          return N
        })
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('2G9S')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('v6aA'),
        r = n('es0u'),
        s = n('G6rE'),
        c = n('rxPX'),
        l = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: s.e.selectLoggedInUser }
          })
          .adjustStateProps(function (t) {
            var e = t.loggedInUser
            return { isLoggedInUserVerified: !!e && e.verified }
          })
          .withAnalytics({ page: 'ntab' }),
        u = n('pnqf'),
        p = n('dwig'),
        d = n('0+qk'),
        f = n('3XMw'),
        m = n.n(f),
        y = n('yoO3'),
        h = n('5FtR'),
        b = n('wytG'),
        g = n('+Bsv'),
        v = n('VS6U'),
        _ = n('mw9i'),
        T = n('k/OQ'),
        w = n('zCf4'),
        E = m.a.eb75875d,
        M = m.a.f8321d82,
        P = m.a.cdb53d79,
        A = m.a.h3290871,
        k = m.a.a98ba778,
        S = '/notifications',
        I = '/notifications/mentions',
        C = '/notifications/verified',
        x = i.a.createElement(g.a, { pullRight: !0, to: '/settings/notifications' }),
        O = m.a.eb75875d,
        L = Object(u.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        V = Object(u.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        j = Object(u.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        R = [
          { to: S, key: M, label: M, retainScrollPosition: !1 },
          { to: I, key: P, label: P, retainScrollPosition: !1 },
        ],
        U = [].concat(R, [{ to: C, key: A, label: A, retainScrollPosition: !1 }]),
        N = function (t) {
          var e,
            n,
            a = i.a
              .useContext(o.a)
              .featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            s = t.history,
            c = t.isLoggedInUserVerified,
            l = t.location,
            u = c || a,
            f = i.a.createElement(
              w.d,
              null,
              i.a.createElement(w.b, { component: L, exact: !0, path: S }),
              i.a.createElement(w.b, { component: V, exact: !0, path: I }),
              i.a.createElement(w.b, { component: j, exact: !0, path: C }),
            )
          return l.pathname !== C || u
            ? i.a.createElement(
                y.a,
                null,
                i.a.createElement(v.a, {
                  documentTitle: E,
                  history: s,
                  primaryContent:
                    ((n = i.a.createElement(d.a, { history: s })),
                    i.a.createElement(p.a, { component: _.a, fab: n }, f)),
                  rightControl: x,
                  secondaryBar: ((e = u ? U : R), i.a.createElement(T.a, { accessibilityLabel: k, links: e })),
                  sidebarContent: i.a.createElement(r.a, null),
                  title: O,
                }),
              )
            : i.a.createElement(h.a, { to: S })
        }
      e.default = l(N)
    },
    f42t: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return _
      })
      var a = n('97Jx'),
        i = n.n(a),
        o = n('VrFO'),
        r = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        p = n('5Yy7'),
        d = n.n(p),
        f = n('2VqO'),
        m = n.n(f),
        y = n('KEM+'),
        h = n.n(y),
        b =
          (n('2G9S'),
          n('+KXO'),
          n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('KOtZ'),
          n('ERkP')),
        g = n.n(b),
        v = (function (t) {
          d()(n, t)
          var e = m()(n)
          function n() {
            var t
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (t = e.call.apply(e, [this].concat(i))), h()(u()(t), 'state', { isLoaded: !1 }), t
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  return (this._isMounted = !0), this.load()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  return this.props.modules === t.modules ? null : this.load()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._isMounted = !1
                },
              },
              {
                key: 'load',
                value: function () {
                  var t = this
                  this.setState({ isLoaded: !1 })
                  var e = this.props.modules,
                    n = Object.keys(e)
                  return Promise.all(
                    n.map(function (t) {
                      return e[t]()
                    }),
                  )
                    .then(function (t) {
                      return n.reduce(function (e, n, a) {
                        return (e[n] = t[a]), e
                      }, {})
                    })
                    .then(function (e) {
                      if (!t._isMounted) return null
                      t.setState({ modules: e, isLoaded: !0 })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.state.isLoaded ? this.state.modules : {}
                  return g.a.Children.only(this.props.children(t || {}))
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        _ = function (t, e) {
          return function (n) {
            return g.a.createElement(v, { modules: e }, function (e) {
              return g.a.createElement(t, i()({}, e, n))
            })
          }
        }
    },
    'hCg+': function (t, e, n) {
      'use strict'
      n.r(e)
      var a = n('5waQ'),
        i = n('QuZr')
      e.default = Object(i.a)({ notificationsType: a.a.All })
    },
    lGAB: function (t, e, n) {
      'use strict'
      n.r(e)
      var a = n('5waQ'),
        i = n('QuZr')
      e.default = Object(i.a)({ notificationsType: a.a.Mentions })
    },
    qJ6t: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'notificationsModule', function () {
          return g
        }),
        n.d(e, 'updateLastSeenCursor', function () {
          return v
        })
      var a = n('KEM+'),
        i = n.n(a),
        o = n('yiKp'),
        r = n.n(o),
        s = n('m3Bd'),
        c = n.n(s),
        l = n('vWJI'),
        u = n('k49u'),
        p = n('0KEI'),
        d = n('UtAB'),
        f = n('fs1G'),
        m = n('5waQ'),
        y = n('ZNT5'),
        h = ['polling'],
        b = 'APP_UPDATE_NOTIFICATION_LAST_READ',
        g = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.a.All
          return Object(y.a)({
            timelineId: 'notifications-'.concat(t),
            getEndpoint: function (t) {
              return t.URT.fetchNotifications
            },
            getEndpointParams: function (e) {
              e.polling
              var n = c()(e, h)
              return r()({ type: t }, n)
            },
            context: 'FETCH_NOTIFICATIONS_TIMELINE',
            perfKey: 'notifications',
            postFetchAction: d.a,
            staleIntervalMs: 5e3,
          })
        },
        v = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.a.All
          return function (e, n, a) {
            var o = a.api,
              r = g(t),
              s = r && l.e(r.selectEntries(n()))
            if (s) {
              var c = { cursor: l.g(s), type: t },
                d = e(
                  Object(p.createLocalApiErrorHandlerWithContextFactory)(b)(
                    i()({}, u.a.AppInReadOnlyMode, { customAction: f.a }),
                  ),
                )
              o.URT.updateNotificationsLastSeenCursor(c).catch(d)
            }
          }
        }
      e.default = g(m.a.All)
    },
    srGC: function (t, e, n) {
      'use strict'
      n.r(e)
      var a = n('5waQ'),
        i = n('QuZr')
      e.default = Object(i.a)({ notificationsType: a.a.Verified })
    },
  },
])
//# sourceMappingURL=WIPED
