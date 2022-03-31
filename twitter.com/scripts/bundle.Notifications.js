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
        u = n('/yvb'),
        l = n('rHpw'),
        d = r.a.bb081ea1,
        p = { viewType: 'settings_button' },
        f = i.a.memo(function (t) {
          var e = t.onPress,
            n = t.pullRight,
            a = t.to
          return i.a.createElement(u.a, {
            accessibilityLabel: d,
            behavioralEventContext: p,
            hoverLabel: { label: d },
            icon: i.a.createElement(s.a, null),
            link: a,
            onPress: e,
            pullRight: n,
            style: m.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        m = l.a.create(function (t) {
          return { button: { marginVertical: 'calc(-'.concat(t.spaces.space12, ')') } }
        })
      e.a = f
    },
    QuZr: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return gt
      })
      var a,
        i,
        o,
        r,
        s = n('97Jx'),
        c = n.n(s),
        u = n('VrFO'),
        l = n.n(u),
        d = n('Y9Ll'),
        p = n.n(d),
        f = n('1Pcy'),
        m = n.n(f),
        y = n('5Yy7'),
        h = n.n(y),
        b = n('2VqO'),
        g = n.n(b),
        v = n('KEM+'),
        _ = n.n(v),
        T = (n('2G9S'), n('ERkP')),
        E = n.n(T),
        w = n('oQhu'),
        M = n('z2Pn'),
        P = n('xZGM'),
        S = n('rxPX'),
        A = Object(w.a)(function (t, e) {
          return e && e.notificationsModule(t)
        }),
        k = n('FIs5'),
        C = n('yiKp'),
        x = n.n(C),
        I = n('ezF+'),
        O = n('QIgh'),
        L = n('8UdT'),
        V = n('AP4B'),
        j =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(0), n.e(3), n.e(5), n.e(8), n.e(227)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        U = I.e(j),
        R = n('rHpw'),
        D = n('VrCx'),
        N = n('xWpm'),
        B =
          ((i = {}),
          _()(i, L.b.Notification, U),
          _()(
            i,
            L.b.Tweet,
            I.c({
              selectDisplayType: function (t) {
                return t.content.displayType
              },
              handlers:
                ((a = {}),
                _()(
                  a,
                  D.a.Tweet,
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
                  D.a.QuotedTweet,
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
        F = x()(x()(x()({}, Object(O.a)({ tweetDismissable: !0, withMuteConversation: !0 })), B), V.a),
        Q = R.a.create(function (t) {
          return {
            quotedTweet: {
              marginHorizontal: t.componentDimensions.gutterHorizontal,
              marginTop: 0,
              marginBottom: t.componentDimensions.gutterVertical,
            },
          }
        }),
        H = n('3XMw'),
        G = n.n(H),
        J = n('f42t'),
        K = n('zb92'),
        z = Object(K.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(5), n.e(219)]).then(n.bind(null, 'REvk'))
          },
        }),
        q = n('EUHl'),
        X = n('5waQ'),
        Y = n('VE3M'),
        Z = n('yoO3'),
        W = n('fTQJ'),
        $ = n('v6aA'),
        tt =
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
        et = {
          notifications_alt_a:
            ((o = {}),
            _()(o, X.a.All, { headerMessage: G.a.b6a43e77, bodyMessage: G.a.f269c47d, buttonText: G.a.g6871092 }),
            _()(o, X.a.Mentions, { headerMessage: G.a.e577e1a1, bodyMessage: G.a.b91e5a3a }),
            o),
          notifications_alt_b:
            ((r = {}),
            _()(r, X.a.All, { headerMessage: G.a.g264f125, bodyMessage: G.a.a3420a9b, buttonText: G.a.g6871092 }),
            _()(r, X.a.Mentions, { headerMessage: G.a.ef0b8028, bodyMessage: G.a.b91e5a3a }),
            r),
        },
        nt = function (t) {
          return ['control', 'notifications_alt_a', 'notifications_alt_b'].includes(t)
        },
        at = function (t) {
          return tt[t]
        },
        it = function (t, e, n) {
          var a, i
          return null === (a = et[e]) || void 0 === a || null === (i = a[n]) || void 0 === i ? void 0 : i[t]
        },
        ot = function (t, e) {
          return it('headerMessage', t, e)
        },
        rt = function (t, e) {
          return it('bodyMessage', t, e)
        },
        st = function (t, e) {
          return it('buttonText', t, e)
        },
        ct = G.a.eb75875d,
        ut = G.a.e9f1fbcb,
        lt = G.a.f287bb3a,
        dt = G.a.h994ec4f,
        pt = G.a.c06d4305,
        ft = G.a.bfdb3c12,
        mt = G.a.h1d919eb,
        yt = G.a.ib4510fd,
        ht = (function (t) {
          h()(n, t)
          var e = g()(n)
          function n() {
            var t
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (t = e.call.apply(e, [this].concat(i))),
              _()(m()(t), '_getNewItemsPillLabel', function () {
                switch (t.props.notificationsType) {
                  case X.a.All:
                    return yt
                  default:
                    return
                }
              }),
              _()(m()(t), '_getEmptyMessageBody', function () {
                var e = t.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                switch (t.props.notificationsType) {
                  case X.a.Mentions:
                    return nt(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                      ? rt(t._emptyStateVariant, t.props.notificationsType)
                      : pt
                  case X.a.Verified:
                    return e ? mt : ft
                  default:
                    return nt(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                      ? rt(t._emptyStateVariant, t.props.notificationsType)
                      : e
                      ? dt
                      : lt
                }
              }),
              _()(m()(t), '_getEmptyMessageHeader', function () {
                return nt(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                  ? ot(t._emptyStateVariant, t.props.notificationsType)
                  : ut
              }),
              _()(m()(t), '_renderEmptyTimeline', function () {
                if (
                  ((t._emptyStateVariant = t.context.featureSwitches.getStringValue(
                    'responsive_web_notifications_empty_state_redesign_variant',
                  )),
                  nt(t._emptyStateVariant) && 'control' !== t._emptyStateVariant)
                ) {
                  var e = st(t._emptyStateVariant, t.props.notificationsType)
                  return E.a.createElement(
                    k.a,
                    c()({}, e && { buttonLink: '/i/connect_people', buttonText: e }, {
                      header: t._getEmptyMessageHeader(),
                      imageVariants: at(t._emptyStateVariant),
                      message: t._getEmptyMessageBody(),
                      onButtonPress: t._handleEmptyTimelineButtonPress,
                      onImpression: t._handleEmptyTimelineImpression,
                    }),
                  )
                }
                return E.a.createElement(k.a, {
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
              _()(m()(t), '_renderTimelineHeader', function () {
                var e = t.props,
                  n = e.addLeaveThisConversationEducationFlag,
                  a = e.notificationsType
                return e.shouldShowUnmentionEducation &&
                  a === X.a.Mentions &&
                  t.context.featureSwitches.isTrue('dont_mention_me_mentions_tab_education_enabled')
                  ? E.a.createElement(z, { onDismiss: n })
                  : void 0
              }),
              t
            )
          }
          return (
            p()(n, [
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
                  this._updateLastReadIfNeeded(), n === X.a.All && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props.notificationsModule
                  return t
                    ? E.a.createElement(
                        Z.a,
                        null,
                        E.a.createElement(W.a, {
                          entryConfiguration: F,
                          header: this._renderTimelineHeader(),
                          key: 'notification-timeline',
                          module: t,
                          newTweetsPillLabel: this._getNewItemsPillLabel(),
                          newTweetsPillMode: q.a.CLIENT,
                          onAtTop: this._handleAtTop,
                          renderEmptyState: this._renderEmptyTimeline,
                          title: ct,
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
        })(E.a.Component)
      _()(ht, 'contextType', $.a)
      var bt = function (t) {
          return Object(J.a)(
            (function (t) {
              return Object(S.a)()
                .propsFromState(function () {
                  return {
                    shouldShowUnmentionEducation: function (t) {
                      return Object(P.D)(t, P.o)
                    },
                    unreadCount: function (e, n) {
                      var a,
                        i = n.ntabData
                      return null === (a = A(t, i)) || void 0 === a ? void 0 : a.selectUnreadEntriesCount(e)
                    },
                  }
                })
                .adjustStateProps(function (e, n) {
                  var a = e.shouldShowUnmentionEducation,
                    i = e.unreadCount,
                    o = n.ntabData
                  return {
                    ntabData: null,
                    notificationsModule: A(t, o),
                    notificationsType: t,
                    shouldShowUnmentionEducation: a,
                    unreadCount: i,
                  }
                })
                .propsFromActions(function (e) {
                  var n,
                    a = e.ntabData
                  return {
                    addLeaveThisConversationEducationFlag: function () {
                      return Object(P.z)(P.o)
                    },
                    markAllAsRead: null === (n = A(t, a)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: a && a.updateLastSeenCursor,
                    setNotificationsType: M.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: t })
            })(t)(ht),
            { ntabData: Y.a },
          )
        },
        gt = function (t) {
          var e = t.notificationsType
          return bt(e)
        }
    },
    WR6I: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'NotificationsScreen', function () {
          return D
        })
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('2G9S')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('v6aA'),
        r = n('es0u'),
        s = n('G6rE'),
        c = n('rxPX'),
        u = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: s.e.selectLoggedInUser }
          })
          .adjustStateProps(function (t) {
            var e = t.loggedInUser
            return { isLoggedInUserVerified: !!e && e.verified }
          })
          .withAnalytics({ page: 'ntab' }),
        l = n('pnqf'),
        d = n('dwig'),
        p = n('0+qk'),
        f = n('3XMw'),
        m = n.n(f),
        y = n('yoO3'),
        h = n('5FtR'),
        b = n('wytG'),
        g = n('+Bsv'),
        v = n('VS6U'),
        _ = n('mw9i'),
        T = n('k/OQ'),
        E = n('zCf4'),
        w = m.a.eb75875d,
        M = m.a.f8321d82,
        P = m.a.cdb53d79,
        S = m.a.h3290871,
        A = m.a.a98ba778,
        k = '/notifications',
        C = '/notifications/mentions',
        x = '/notifications/verified',
        I = i.a.createElement(g.a, { pullRight: !0, to: '/settings/notifications' }),
        O = m.a.eb75875d,
        L = Object(l.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        V = Object(l.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        j = Object(l.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        U = [
          { to: k, key: M, label: M, retainScrollPosition: !1 },
          { to: C, key: P, label: P, retainScrollPosition: !1 },
        ],
        R = [].concat(U, [{ to: x, key: S, label: S, retainScrollPosition: !1 }]),
        D = function (t) {
          var e,
            n,
            a = i.a
              .useContext(o.a)
              .featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            s = t.history,
            c = t.isLoggedInUserVerified,
            u = t.location,
            l = c || a,
            f = i.a.createElement(
              E.d,
              null,
              i.a.createElement(E.b, { component: L, exact: !0, path: k }),
              i.a.createElement(E.b, { component: V, exact: !0, path: C }),
              i.a.createElement(E.b, { component: j, exact: !0, path: x }),
            )
          return u.pathname !== x || l
            ? i.a.createElement(
                y.a,
                null,
                i.a.createElement(v.a, {
                  documentTitle: w,
                  history: s,
                  primaryContent:
                    ((n = i.a.createElement(p.a, { history: s })),
                    i.a.createElement(d.a, { component: _.a, fab: n }, f)),
                  rightControl: I,
                  secondaryBar: ((e = l ? R : U), i.a.createElement(T.a, { accessibilityLabel: A, links: e })),
                  sidebarContent: i.a.createElement(r.a, null),
                  title: O,
                }),
              )
            : i.a.createElement(h.a, { to: k })
        }
      e.default = u(D)
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
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
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
          p()(n, t)
          var e = m()(n)
          function n() {
            var t
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (t = e.call.apply(e, [this].concat(i))), h()(l()(t), 'state', { isLoaded: !1 }), t
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
        u = n('vWJI'),
        l = n('k49u'),
        d = n('0KEI'),
        p = n('UtAB'),
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
            postFetchAction: p.a,
            staleIntervalMs: 5e3,
          })
        },
        v = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.a.All
          return function (e, n, a) {
            var o = a.api,
              r = g(t),
              s = r && u.e(r.selectEntries(n()))
            if (s) {
              var c = { cursor: u.g(s), type: t },
                p = e(
                  Object(d.createLocalApiErrorHandlerWithContextFactory)(b)(
                    i()({}, l.a.AppInReadOnlyMode, { customAction: f.a }),
                  ),
                )
              o.URT.updateNotificationsLastSeenCursor(c).catch(p)
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
