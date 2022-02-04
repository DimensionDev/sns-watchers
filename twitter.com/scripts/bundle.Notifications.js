;(window.webpackJsonp = window.webpackJsonp || []).push([
  [73],
  {
    '+Bsv': function (e, t, n) {
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
        f = i.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return i.a.createElement(u.a, {
            accessibilityLabel: d,
            behavioralEventContext: p,
            hoverLabel: { label: d },
            icon: i.a.createElement(s.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: m.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        m = l.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = f
    },
    QuZr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return be
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
        w = (n('2G9S'), n('ERkP')),
        T = n.n(w),
        E = n('oQhu'),
        I = n('z2Pn'),
        A = n('rxPX'),
        P = Object(E.a)(function (e, t) {
          return t && t.notificationsModule(e)
        }),
        x = n('FIs5'),
        C = n('yiKp'),
        M = n.n(C),
        O = n('ezF+'),
        k = n('xZXe'),
        L = n('QIgh'),
        S = n('8UdT'),
        j = n('AP4B'),
        N =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(5), n.e(221)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        R = O.e(N),
        U = n('b5s6'),
        B = n('rHpw'),
        V = n('VrCx'),
        D = n('yy6l'),
        Q =
          ((i = {}),
          _()(i, S.b.Notification, R),
          _()(
            i,
            S.b.Tweet,
            O.c({
              selectDisplayType: function (e) {
                return e.content.displayType
              },
              handlers:
                ((a = {}),
                _()(
                  a,
                  V.a.Tweet,
                  Object(D.a)({
                    allowDownvote: !0,
                    component: k.a,
                    createAdditionalProps: function (e, t) {
                      return { isUnread: t.isUnread }
                    },
                    selectData: function (e) {
                      var t = e.entry,
                        n = e.module
                      return {
                        isUnread: function (e) {
                          return n.selectIsUnread(e, t.entryId)
                        },
                      }
                    },
                    withMuteConversation: !0,
                  }),
                ),
                _()(
                  a,
                  V.a.QuotedTweet,
                  Object(D.a)({
                    component: U.a,
                    createAdditionalProps: function (e) {
                      return { isCondensed: !0, style: H.quotedTweet }
                    },
                  }),
                ),
                a),
            }),
          ),
          i),
        F = M()(M()(M()({}, Object(L.a)({ tweetDismissable: !0, withMuteConversation: !0 })), Q), j.a),
        H = B.a.create(function (e) {
          return {
            quotedTweet: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginTop: 0,
              marginBottom: e.componentDimensions.gutterVertical,
            },
          }
        }),
        J = n('3XMw'),
        G = n.n(J),
        K = n('f42t'),
        X = n('EUHl'),
        Y = n('5waQ'),
        q = n('VE3M'),
        z = n('yoO3'),
        W = n('fTQJ'),
        Z = n('v6aA'),
        $ =
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
        ee = {
          notifications_alt_a:
            ((o = {}),
            _()(o, Y.a.All, { headerMessage: G.a.b6a43e77, bodyMessage: G.a.f269c47d, buttonText: G.a.g6871092 }),
            _()(o, Y.a.Mentions, { headerMessage: G.a.e577e1a1, bodyMessage: G.a.b91e5a3a }),
            o),
          notifications_alt_b:
            ((r = {}),
            _()(r, Y.a.All, { headerMessage: G.a.g264f125, bodyMessage: G.a.a3420a9b, buttonText: G.a.g6871092 }),
            _()(r, Y.a.Mentions, { headerMessage: G.a.ef0b8028, bodyMessage: G.a.b91e5a3a }),
            r),
        },
        te = function (e) {
          return ['control', 'notifications_alt_a', 'notifications_alt_b'].includes(e)
        },
        ne = function (e) {
          return $[e]
        },
        ae = function (e, t, n) {
          var a, i
          return null === (a = ee[t]) || void 0 === a || null === (i = a[n]) || void 0 === i ? void 0 : i[e]
        },
        ie = function (e, t) {
          return ae('headerMessage', e, t)
        },
        oe = function (e, t) {
          return ae('bodyMessage', e, t)
        },
        re = function (e, t) {
          return ae('buttonText', e, t)
        },
        se = G.a.eb75875d,
        ce = G.a.e9f1fbcb,
        ue = G.a.f287bb3a,
        le = G.a.h994ec4f,
        de = G.a.c06d4305,
        pe = G.a.bfdb3c12,
        fe = G.a.h1d919eb,
        me = G.a.ib4510fd,
        ye = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(m()(e), '_getNewItemsPillLabel', function () {
                switch (e.props.notificationsType) {
                  case Y.a.All:
                    return me
                  default:
                    return
                }
              }),
              _()(m()(e), '_getEmptyMessageBody', function () {
                var t = e.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                  n = e.context.featureSwitches.getStringValue(
                    'responsive_web_notifications_empty_state_redesign_variant',
                  )
                switch (e.props.notificationsType) {
                  case Y.a.Mentions:
                    return te(n) && 'control' !== n ? oe(n, e.props.notificationsType) : de
                  case Y.a.Verified:
                    return t ? fe : pe
                  default:
                    return te(n) && 'control' !== n ? oe(n, e.props.notificationsType) : t ? le : ue
                }
              }),
              _()(m()(e), '_getEmptyMessageHeader', function () {
                var t = e.context.featureSwitches.getStringValue(
                  'responsive_web_notifications_empty_state_redesign_variant',
                )
                return te(t) && 'control' !== t ? ie(t, e.props.notificationsType) : ce
              }),
              _()(m()(e), '_renderEmptyTimeline', function () {
                var t = e.context.featureSwitches.getStringValue(
                  'responsive_web_notifications_empty_state_redesign_variant',
                )
                if (te(t) && 'control' !== t) {
                  var n = re(t, e.props.notificationsType)
                  return T.a.createElement(
                    x.a,
                    c()({}, n && { buttonLink: '/i/connect_people', buttonText: n }, {
                      header: e._getEmptyMessageHeader(),
                      imageVariants: ne(t),
                      message: e._getEmptyMessageBody(),
                      onButtonPress: e._handleEmptyTimelineButtonPress,
                      onImpression: e._handleEmptyTimelineImpression,
                    }),
                  )
                }
                return T.a.createElement(x.a, {
                  header: e._getEmptyMessageHeader(),
                  message: e._getEmptyMessageBody(),
                  onImpression: e._handleEmptyTimelineImpression,
                })
              }),
              _()(m()(e), '_handleEmptyTimelineImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              _()(m()(e), '_handleEmptyTimelineButtonPress', function () {
                e.props.analytics.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              }),
              _()(m()(e), '_handleAtTop', function () {
                e._updateLastReadIfNeeded()
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.notificationsType
                  ;(0, e.setNotificationsType)(t)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.markAllAsRead,
                    n = e.notificationsType
                  this._updateLastReadIfNeeded(), n === Y.a.All && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.notificationsModule
                  return e
                    ? T.a.createElement(
                        z.a,
                        null,
                        T.a.createElement(W.a, {
                          entryConfiguration: F,
                          key: 'notification-timeline',
                          module: e,
                          newTweetsPillLabel: this._getNewItemsPillLabel(),
                          newTweetsPillMode: X.a.CLIENT,
                          onAtTop: this._handleAtTop,
                          renderEmptyState: this._renderEmptyTimeline,
                          title: se,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_updateLastReadIfNeeded',
                value: function () {
                  var e = this.props,
                    t = e.notificationsType,
                    n = e.unreadCount,
                    a = e.updateLastRead
                  n && a(t)
                },
              },
            ]),
            n
          )
        })(T.a.Component)
      _()(ye, 'contextType', Z.a)
      var he = function (e) {
          return Object(K.a)(
            (function (e) {
              return Object(A.a)()
                .propsFromState(function () {
                  return {
                    unreadCount: function (t, n) {
                      var a,
                        i = n.ntabData
                      return null === (a = P(e, i)) || void 0 === a ? void 0 : a.selectUnreadEntriesCount(t)
                    },
                  }
                })
                .adjustStateProps(function (t, n) {
                  var a = t.unreadCount,
                    i = n.ntabData
                  return { ntabData: null, notificationsModule: P(e, i), notificationsType: e, unreadCount: a }
                })
                .propsFromActions(function (t) {
                  var n,
                    a = t.ntabData
                  return {
                    markAllAsRead: null === (n = P(e, a)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: a && a.updateLastSeenCursor,
                    setNotificationsType: I.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: e })
            })(e)(ye),
            { ntabData: q.a },
          )
        },
        be = function (e) {
          var t = e.notificationsType
          return he(t)
        }
    },
    WR6I: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationsScreen', function () {
          return B
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
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { isLoggedInUserVerified: !!t && t.verified }
          }),
        l = n('pnqf'),
        d = n('dwig'),
        p = n('0+qk'),
        f = n('3XMw'),
        m = n.n(f),
        y = n('5FtR'),
        h = n('wytG'),
        b = n('+Bsv'),
        g = n('VS6U'),
        v = n('7JQg'),
        _ = n('mw9i'),
        w = n('k/OQ'),
        T = n('zCf4'),
        E = m.a.eb75875d,
        I = m.a.f8321d82,
        A = m.a.cdb53d79,
        P = m.a.h3290871,
        x = m.a.a98ba778,
        C = '/notifications',
        M = '/notifications/mentions',
        O = '/notifications/verified',
        k = i.a.createElement(b.a, { pullRight: !0, to: '/settings/notifications' }),
        L = m.a.eb75875d,
        S = Object(l.a)(
          Object(h.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        j = Object(l.a)(
          Object(h.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        N = Object(l.a)(
          Object(h.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        R = [
          { to: C, key: I, label: I, retainScrollPosition: !1 },
          { to: M, key: A, label: A, retainScrollPosition: !1 },
        ],
        U = [].concat(R, [{ to: O, key: P, label: P, retainScrollPosition: !1 }]),
        B = function (e) {
          var t,
            n,
            a = i.a
              .useContext(o.a)
              .featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            s = e.history,
            c = e.isLoggedInUserVerified,
            u = e.location,
            l = c || a,
            f = i.a.createElement(
              T.d,
              null,
              i.a.createElement(T.b, { component: S, exact: !0, path: C }),
              i.a.createElement(T.b, { component: j, exact: !0, path: M }),
              i.a.createElement(T.b, { component: N, exact: !0, path: O }),
            )
          return u.pathname !== O || l
            ? i.a.createElement(g.a, {
                documentTitle: E,
                history: s,
                primaryContent:
                  ((n = i.a.createElement(p.a, { history: s })), i.a.createElement(d.a, { component: _.a, fab: n }, f)),
                rightControl: k,
                secondaryBar: ((t = l ? U : R), i.a.createElement(w.a, { accessibilityLabel: x, links: t })),
                sidebarContent: i.a.createElement(r.a, null),
                title: L,
              })
            : i.a.createElement(y.a, { to: C })
        }
      t.default = Object(v.c)({ page: 'ntab' })(u(B))
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        o = n('m3Bd'),
        r = n.n(o),
        s = n('ERkP'),
        c = n.n(s),
        u = n('v6aA'),
        l = n('XOJV'),
        d = n('eSoz'),
        p = n('rxPX'),
        f = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        y = function (e, t) {
          var n = t.tweetId,
            a = n && l.a.select(e, n)
          return a ? Object(d.g)(e, a) : void 0
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { community: y, hydratedTweet: l.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        g = n('uCxL'),
        v = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        w = h(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            s = (e.tweetId, r()(e, _)),
            l = c.a.useContext(u.a),
            d = l.featureSwitches,
            p = l.loggedInUserId,
            f = null == o ? void 0 : o.community_id_str
          c.a.useEffect(
            function () {
              f && Object(b.a)(t) && a(f).catch(n())
            },
            [t, f, n, a],
          )
          var m = d.isTrue('responsive_web_alt_text_badge_enabled'),
            y = o && Object(v.f)(o, p, t),
            h = y && Object(v.e)(y),
            w = d.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            g.a,
            i()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: m,
              socialContextProps: h,
              tweet: o,
              withReactions: w,
            }),
          )
        })
      t.a = w
    },
    f42t: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
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
        v = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(i))), h()(l()(e), 'state', { isLoaded: !1 }), e
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
                value: function (e) {
                  return this.props.modules === e.modules ? null : this.load()
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
                  var e = this
                  this.setState({ isLoaded: !1 })
                  var t = this.props.modules,
                    n = Object.keys(t)
                  return Promise.all(
                    n.map(function (e) {
                      return t[e]()
                    }),
                  )
                    .then(function (e) {
                      return n.reduce(function (t, n, a) {
                        return (t[n] = e[a]), t
                      }, {})
                    })
                    .then(function (t) {
                      if (!e._isMounted) return null
                      e.setState({ modules: t, isLoaded: !0 })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isLoaded ? this.state.modules : {}
                  return g.a.Children.only(this.props.children(e || {}))
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        _ = function (e, t) {
          return function (n) {
            return g.a.createElement(v, { modules: t }, function (t) {
              return g.a.createElement(e, i()({}, t, n))
            })
          }
        }
    },
    'hCg+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('5waQ'),
        i = n('QuZr')
      t.default = Object(i.a)({ notificationsType: a.a.All })
    },
    lGAB: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('5waQ'),
        i = n('QuZr')
      t.default = Object(i.a)({ notificationsType: a.a.Mentions })
    },
    qJ6t: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'notificationsModule', function () {
          return g
        }),
        n.d(t, 'updateLastSeenCursor', function () {
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
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.a.All
          return Object(y.a)({
            timelineId: 'notifications-'.concat(e),
            getEndpoint: function (e) {
              return e.URT.fetchNotifications
            },
            getEndpointParams: function (t) {
              t.polling
              var n = c()(t, h)
              return r()({ type: e }, n)
            },
            context: 'FETCH_NOTIFICATIONS_TIMELINE',
            perfKey: 'notifications',
            postFetchAction: p.a,
            staleIntervalMs: 5e3,
          })
        },
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.a.All
          return function (t, n, a) {
            var o = a.api,
              r = g(e),
              s = r && u.e(r.selectEntries(n()))
            if (s) {
              var c = { cursor: u.g(s), type: e },
                p = t(
                  Object(d.createLocalApiErrorHandlerWithContextFactory)(b)(
                    i()({}, l.a.AppInReadOnlyMode, { customAction: f.a }),
                  ),
                )
              o.URT.updateNotificationsLastSeenCursor(c).catch(p)
            }
          }
        }
      t.default = g(m.a.All)
    },
    srGC: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('5waQ'),
        i = n('QuZr')
      t.default = Object(i.a)({ notificationsType: a.a.Verified })
    },
  },
])
//# sourceMappingURL=WIPED
