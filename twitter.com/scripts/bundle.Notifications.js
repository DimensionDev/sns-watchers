;(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    '+Bsv': function (t, e, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        r = n('3XMw'),
        o = n.n(r),
        s = n('M2x3'),
        c = 'settingsAppBar',
        u = n('/yvb'),
        l = n('rHpw'),
        d = o.a.bb081ea1,
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
        r,
        o,
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
        P = Object(E.a)(function (t, e) {
          return e && e.notificationsModule(t)
        }),
        C = n('FIs5'),
        M = n('yiKp'),
        O = n.n(M),
        S = n('ezF+'),
        x = n('QIgh'),
        k = n('8UdT'),
        L = n('AP4B'),
        V =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(5), n.e(224)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        j = S.e(V),
        R = n('meql'),
        N = n('b5s6'),
        U = function (t) {
          return Object(R.a)(O()(O()({}, t), {}, { component: N.a }))
        },
        B = n('rHpw'),
        D = n('VrCx'),
        Q = n('ReVx'),
        F =
          ((i = {}),
          _()(i, k.b.Notification, j),
          _()(
            i,
            k.b.Tweet,
            S.c({
              selectDisplayType: function (t) {
                return t.content.displayType
              },
              handlers:
                ((a = {}),
                _()(
                  a,
                  D.a.Tweet,
                  Object(Q.a)({
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
                  U({
                    createAdditionalProps: function (t) {
                      return { isCondensed: !0, style: J.quotedTweet }
                    },
                  }),
                ),
                a),
            }),
          ),
          i),
        H = O()(O()(O()({}, Object(x.a)({ tweetDismissable: !0, withMuteConversation: !0 })), F), L.a),
        J = B.a.create(function (t) {
          return {
            quotedTweet: {
              marginHorizontal: t.componentDimensions.gutterHorizontal,
              marginTop: 0,
              marginBottom: t.componentDimensions.gutterVertical,
            },
          }
        }),
        G = n('3XMw'),
        K = n.n(G),
        X = n('f42t'),
        q = n('EUHl'),
        Y = n('5waQ'),
        z = n('VE3M'),
        W = n('yoO3'),
        Z = n('fTQJ'),
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
            ((r = {}),
            _()(r, Y.a.All, { headerMessage: K.a.b6a43e77, bodyMessage: K.a.f269c47d, buttonText: K.a.g6871092 }),
            _()(r, Y.a.Mentions, { headerMessage: K.a.e577e1a1, bodyMessage: K.a.b91e5a3a }),
            r),
          notifications_alt_b:
            ((o = {}),
            _()(o, Y.a.All, { headerMessage: K.a.g264f125, bodyMessage: K.a.a3420a9b, buttonText: K.a.g6871092 }),
            _()(o, Y.a.Mentions, { headerMessage: K.a.ef0b8028, bodyMessage: K.a.b91e5a3a }),
            o),
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
        rt = function (t, e) {
          return it('headerMessage', t, e)
        },
        ot = function (t, e) {
          return it('bodyMessage', t, e)
        },
        st = function (t, e) {
          return it('buttonText', t, e)
        },
        ct = K.a.eb75875d,
        ut = K.a.e9f1fbcb,
        lt = K.a.f287bb3a,
        dt = K.a.h994ec4f,
        pt = K.a.c06d4305,
        ft = K.a.bfdb3c12,
        mt = K.a.h1d919eb,
        yt = K.a.ib4510fd,
        ht = (function (t) {
          h()(n, t)
          var e = g()(n)
          function n() {
            var t
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (t = e.call.apply(e, [this].concat(i))),
              _()(m()(t), '_getNewItemsPillLabel', function () {
                switch (t.props.notificationsType) {
                  case Y.a.All:
                    return yt
                  default:
                    return
                }
              }),
              _()(m()(t), '_getEmptyMessageBody', function () {
                var e = t.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                switch (t.props.notificationsType) {
                  case Y.a.Mentions:
                    return nt(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                      ? ot(t._emptyStateVariant, t.props.notificationsType)
                      : pt
                  case Y.a.Verified:
                    return e ? mt : ft
                  default:
                    return nt(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                      ? ot(t._emptyStateVariant, t.props.notificationsType)
                      : e
                      ? dt
                      : lt
                }
              }),
              _()(m()(t), '_getEmptyMessageHeader', function () {
                return nt(t._emptyStateVariant) && 'control' !== t._emptyStateVariant
                  ? rt(t._emptyStateVariant, t.props.notificationsType)
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
                  return T.a.createElement(
                    C.a,
                    c()({}, e && { buttonLink: '/i/connect_people', buttonText: e }, {
                      header: t._getEmptyMessageHeader(),
                      imageVariants: at(t._emptyStateVariant),
                      message: t._getEmptyMessageBody(),
                      onButtonPress: t._handleEmptyTimelineButtonPress,
                      onImpression: t._handleEmptyTimelineImpression,
                    }),
                  )
                }
                return T.a.createElement(C.a, {
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
                  this._updateLastReadIfNeeded(), n === Y.a.All && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props.notificationsModule
                  return t
                    ? T.a.createElement(
                        W.a,
                        null,
                        T.a.createElement(Z.a, {
                          entryConfiguration: H,
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
        })(T.a.Component)
      _()(ht, 'contextType', $.a)
      var bt = function (t) {
          return Object(X.a)(
            (function (t) {
              return Object(A.a)()
                .propsFromState(function () {
                  return {
                    unreadCount: function (e, n) {
                      var a,
                        i = n.ntabData
                      return null === (a = P(t, i)) || void 0 === a ? void 0 : a.selectUnreadEntriesCount(e)
                    },
                  }
                })
                .adjustStateProps(function (e, n) {
                  var a = e.unreadCount,
                    i = n.ntabData
                  return { ntabData: null, notificationsModule: P(t, i), notificationsType: t, unreadCount: a }
                })
                .propsFromActions(function (e) {
                  var n,
                    a = e.ntabData
                  return {
                    markAllAsRead: null === (n = P(t, a)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: a && a.updateLastSeenCursor,
                    setNotificationsType: I.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: t })
            })(t)(ht),
            { ntabData: z.a },
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
          return U
        })
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('2G9S')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('v6aA'),
        o = n('es0u'),
        s = n('G6rE'),
        c = n('rxPX'),
        u = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: s.e.selectLoggedInUser }
          })
          .adjustStateProps(function (t) {
            var e = t.loggedInUser
            return { isLoggedInUserVerified: !!e && e.verified }
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
        v = n('mw9i'),
        _ = n('k/OQ'),
        w = n('7JQg'),
        T = n('zCf4'),
        E = m.a.eb75875d,
        I = m.a.f8321d82,
        A = m.a.cdb53d79,
        P = m.a.h3290871,
        C = m.a.a98ba778,
        M = '/notifications',
        O = '/notifications/mentions',
        S = '/notifications/verified',
        x = i.a.createElement(b.a, { pullRight: !0, to: '/settings/notifications' }),
        k = m.a.eb75875d,
        L = Object(l.a)(
          Object(h.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        V = Object(l.a)(
          Object(h.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        j = Object(l.a)(
          Object(h.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        R = [
          { to: M, key: I, label: I, retainScrollPosition: !1 },
          { to: O, key: A, label: A, retainScrollPosition: !1 },
        ],
        N = [].concat(R, [{ to: S, key: P, label: P, retainScrollPosition: !1 }]),
        U = function (t) {
          var e,
            n,
            a = i.a
              .useContext(r.a)
              .featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            s = t.history,
            c = t.isLoggedInUserVerified,
            u = t.location,
            l = c || a,
            f = i.a.createElement(
              T.d,
              null,
              i.a.createElement(T.b, { component: L, exact: !0, path: M }),
              i.a.createElement(T.b, { component: V, exact: !0, path: O }),
              i.a.createElement(T.b, { component: j, exact: !0, path: S }),
            )
          return u.pathname !== S || l
            ? i.a.createElement(g.a, {
                documentTitle: E,
                history: s,
                primaryContent:
                  ((n = i.a.createElement(p.a, { history: s })), i.a.createElement(d.a, { component: v.a, fab: n }, f)),
                rightControl: x,
                secondaryBar: ((e = l ? N : R), i.a.createElement(_.a, { accessibilityLabel: C, links: e })),
                sidebarContent: i.a.createElement(o.a, null),
                title: k,
              })
            : i.a.createElement(y.a, { to: M })
        }
      e.default = Object(w.a)({ page: 'ntab' })(u(U))
    },
    b5s6: function (t, e, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        r = n('m3Bd'),
        o = n.n(r),
        s = n('ERkP'),
        c = n.n(s),
        u = n('v6aA'),
        l = n('XOJV'),
        d = n('eSoz'),
        p = n('rxPX'),
        f = n('0KEI'),
        m = function (t, e) {
          return e.tweetId
        },
        y = function (t, e) {
          var n = e.tweetId,
            a = n && l.a.select(t, n)
          return a ? Object(d.g)(t, a) : void 0
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
        w = h(function (t) {
          var e = t.community,
            n = t.createLocalApiErrorHandler,
            a = t.fetchCommunityIfNeeded,
            r = t.hydratedTweet,
            s = (t.tweetId, o()(t, _)),
            l = c.a.useContext(u.a),
            d = l.featureSwitches,
            p = l.loggedInUserId,
            f = null == r ? void 0 : r.community_id_str
          c.a.useEffect(
            function () {
              f && Object(b.a)(e) && a(f).catch(n())
            },
            [e, f, n, a],
          )
          var m = d.isTrue('responsive_web_alt_text_badge_enabled'),
            y = r && Object(v.f)(r, p, e),
            h = y && Object(v.e)(y),
            w = d.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            g.a,
            i()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: m,
              socialContextProps: h,
              tweet: r,
              withReactions: w,
            }),
          )
        })
      e.a = w
    },
    f42t: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return _
      })
      var a = n('97Jx'),
        i = n.n(a),
        r = n('VrFO'),
        o = n.n(r),
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
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
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
        r = n('yiKp'),
        o = n.n(r),
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
              return o()({ type: t }, n)
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
            var r = a.api,
              o = g(t),
              s = o && u.e(o.selectEntries(n()))
            if (s) {
              var c = { cursor: u.g(s), type: t },
                p = e(
                  Object(d.createLocalApiErrorHandlerWithContextFactory)(b)(
                    i()({}, l.a.AppInReadOnlyMode, { customAction: f.a }),
                  ),
                )
              r.URT.updateNotificationsLastSeenCursor(c).catch(p)
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
