;(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    '+Bsv': function (t, e, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('3XMw'),
        a = n.n(o),
        i = n('M2x3'),
        s = 'settingsAppBar',
        c = n('/yvb'),
        u = n('rHpw'),
        l = a.a.bb081ea1,
        f = { viewType: 'settings_button' },
        d = r.memo(function (t) {
          var e = t.onPress,
            n = t.pullRight,
            o = t.to
          return r.createElement(c.a, {
            accessibilityLabel: l,
            behavioralEventContext: f,
            hoverLabel: { label: l },
            icon: r.createElement(i.a, null),
            link: o,
            onPress: e,
            pullRight: n,
            style: p.button,
            testID: s,
            type: 'primaryText',
          })
        }),
        p = u.a.create(function (t) {
          return { button: { marginVertical: 'calc(-'.concat(t.spaces.space12, ')') } }
        })
      e.a = d
    },
    QuZr: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return gt
      })
      n('OZaJ')
      var r,
        o,
        a = n('97Jx'),
        i = n.n(a),
        s = n('VrFO'),
        c = n.n(s),
        u = n('Y9Ll'),
        l = n.n(u),
        f = n('1Pcy'),
        d = n.n(f),
        p = n('5Yy7'),
        m = n.n(p),
        y = n('N+ot'),
        b = n.n(y),
        h = n('AuHH'),
        v = n.n(h),
        g = n('KEM+'),
        w = n.n(g),
        _ = (n('2G9S'), n('ERkP')),
        O = n('oQhu'),
        E = n('z2Pn'),
        T = n('rxPX'),
        P = Object(O.a)(function (t, e) {
          return e && e.notificationsModule(t)
        }),
        j = n('FIs5'),
        A = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        I = n('xZXe'),
        x = n('QIgh'),
        M = n('8UdT'),
        k = n('AP4B'),
        C =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(6), n.e(216)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        L = A.e(C),
        R = n('b5s6'),
        S = n('rHpw'),
        N = n('VrCx'),
        D = n('yy6l')
      function U(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? U(Object(n), !0).forEach(function (e) {
                w()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      var H,
        F,
        Q =
          ((o = {}),
          w()(o, M.b.Notification, L),
          w()(
            o,
            M.b.Tweet,
            A.c({
              selectDisplayType: function (t) {
                return t.content.displayType
              },
              handlers:
                ((r = {}),
                w()(
                  r,
                  N.a.Tweet,
                  Object(D.a)({
                    allowDownvote: !0,
                    component: I.a,
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
                w()(
                  r,
                  N.a.QuotedTweet,
                  Object(D.a)({
                    component: R.a,
                    createAdditionalProps: function (t) {
                      return { isCondensed: !0, style: J.quotedTweet }
                    },
                  }),
                ),
                r),
            }),
          ),
          o),
        V = B(B(B({}, Object(x.a)({ tweetDismissable: !0, withMuteConversation: !0 })), Q), k.a),
        J = S.a.create(function (t) {
          return {
            quotedTweet: {
              marginHorizontal: t.componentDimensions.gutterHorizontal,
              marginTop: 0,
              marginBottom: t.componentDimensions.gutterVertical,
            },
          }
        }),
        X = n('3XMw'),
        G = n.n(X),
        K = n('f42t'),
        Z = n('EUHl'),
        W = n('5waQ'),
        Y = n('VE3M'),
        z = n('yoO3'),
        q = n('fTQJ'),
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
            ((H = {}),
            w()(H, W.a.All, { headerMessage: G.a.b6a43e77, bodyMessage: G.a.f269c47d, buttonText: G.a.g6871092 }),
            w()(H, W.a.Mentions, { headerMessage: G.a.e577e1a1, bodyMessage: G.a.b91e5a3a }),
            H),
          notifications_alt_b:
            ((F = {}),
            w()(F, W.a.All, { headerMessage: G.a.g264f125, bodyMessage: G.a.a3420a9b, buttonText: G.a.g6871092 }),
            w()(F, W.a.Mentions, { headerMessage: G.a.ef0b8028, bodyMessage: G.a.b91e5a3a }),
            F),
        },
        nt = function (t) {
          return ['control', 'notifications_alt_a', 'notifications_alt_b'].includes(t)
        },
        rt = function (t) {
          return tt[t]
        },
        ot = function (t, e, n) {
          var r, o
          return null === (r = et[e]) || void 0 === r || null === (o = r[n]) || void 0 === o ? void 0 : o[t]
        },
        at = function (t, e) {
          return ot('headerMessage', t, e)
        },
        it = function (t, e) {
          return ot('bodyMessage', t, e)
        },
        st = function (t, e) {
          return ot('buttonText', t, e)
        }
      function ct(t) {
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
            r = v()(t)
          if (e) {
            var o = v()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var ut = G.a.eb75875d,
        lt = G.a.e9f1fbcb,
        ft = G.a.f287bb3a,
        dt = G.a.h994ec4f,
        pt = G.a.c06d4305,
        mt = G.a.bfdb3c12,
        yt = G.a.h1d919eb,
        bt = G.a.ib4510fd,
        ht = (function (t) {
          m()(n, t)
          var e = ct(n)
          function n() {
            var t
            c()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (t = e.call.apply(e, [this].concat(o))),
              w()(d()(t), '_getNewItemsPillLabel', function () {
                switch (t.props.notificationsType) {
                  case W.a.All:
                    return bt
                  default:
                    return
                }
              }),
              w()(d()(t), '_getEmptyMessageBody', function () {
                var e = t.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                  n = t.context.featureSwitches.getStringValue(
                    'responsive_web_notifications_empty_state_redesign_variant',
                  )
                switch (t.props.notificationsType) {
                  case W.a.Mentions:
                    return nt(n) && 'control' !== n ? it(n, t.props.notificationsType) : pt
                  case W.a.Verified:
                    return e ? yt : mt
                  default:
                    return nt(n) && 'control' !== n ? it(n, t.props.notificationsType) : e ? dt : ft
                }
              }),
              w()(d()(t), '_getEmptyMessageHeader', function () {
                var e = t.context.featureSwitches.getStringValue(
                  'responsive_web_notifications_empty_state_redesign_variant',
                )
                return nt(e) && 'control' !== e ? at(e, t.props.notificationsType) : lt
              }),
              w()(d()(t), '_renderEmptyTimeline', function () {
                var e = t.context.featureSwitches.getStringValue(
                  'responsive_web_notifications_empty_state_redesign_variant',
                )
                if (nt(e) && 'control' !== e) {
                  var n = st(e, t.props.notificationsType)
                  return _.createElement(
                    j.a,
                    i()({}, n && { buttonLink: '/i/connect_people', buttonText: n }, {
                      header: t._getEmptyMessageHeader(),
                      imageVariants: rt(e),
                      message: t._getEmptyMessageBody(),
                      onButtonPress: t._handleEmptyTimelineButtonPress,
                      onImpression: t._handleEmptyTimelineImpression,
                    }),
                  )
                }
                return _.createElement(j.a, {
                  header: t._getEmptyMessageHeader(),
                  message: t._getEmptyMessageBody(),
                  onImpression: t._handleEmptyTimelineImpression,
                })
              }),
              w()(d()(t), '_handleEmptyTimelineImpression', function () {
                t.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              w()(d()(t), '_handleEmptyTimelineButtonPress', function () {
                t.props.analytics.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              }),
              w()(d()(t), '_handleAtTop', function () {
                t._updateLastReadIfNeeded()
              }),
              t
            )
          }
          return (
            l()(n, [
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
                  this._updateLastReadIfNeeded(), n === W.a.All && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props.notificationsModule
                  return t
                    ? _.createElement(
                        z.a,
                        null,
                        _.createElement(q.a, {
                          entryConfiguration: V,
                          key: 'notification-timeline',
                          module: t,
                          newTweetsPillLabel: this._getNewItemsPillLabel(),
                          newTweetsPillMode: Z.a.CLIENT,
                          onAtTop: this._handleAtTop,
                          renderEmptyState: this._renderEmptyTimeline,
                          title: ut,
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
                    r = t.updateLastRead
                  n && r(e)
                },
              },
            ]),
            n
          )
        })(_.Component)
      w()(ht, 'contextType', $.a)
      var vt = function (t) {
          return Object(K.a)(
            (function (t) {
              return Object(T.a)()
                .propsFromState(function () {
                  return {
                    unreadCount: function (e, n) {
                      var r,
                        o = n.ntabData
                      return null === (r = P(t, o)) || void 0 === r ? void 0 : r.selectUnreadEntriesCount(e)
                    },
                  }
                })
                .adjustStateProps(function (e, n) {
                  var r = e.unreadCount,
                    o = n.ntabData
                  return { ntabData: null, notificationsModule: P(t, o), notificationsType: t, unreadCount: r }
                })
                .propsFromActions(function (e) {
                  var n,
                    r = e.ntabData
                  return {
                    markAllAsRead: null === (n = P(t, r)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: r && r.updateLastSeenCursor,
                    setNotificationsType: E.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: t })
            })(t)(ht),
            { ntabData: Y.a },
          )
        },
        gt = function (t) {
          var e = t.notificationsType
          return vt(e)
        }
    },
    WR6I: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'NotificationsScreen', function () {
          return D
        })
      n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2G9S')
      var r = n('ERkP'),
        o = n('v6aA'),
        a = n('es0u'),
        i = n('G6rE'),
        s = n('rxPX'),
        c = Object(s.a)()
          .propsFromState(function () {
            return { loggedInUser: i.e.selectLoggedInUser }
          })
          .adjustStateProps(function (t) {
            var e = t.loggedInUser
            return { isLoggedInUserVerified: !!e && e.verified }
          }),
        u = n('pnqf'),
        l = n('dwig'),
        f = n('0+qk'),
        d = n('3XMw'),
        p = n.n(d),
        m = n('5FtR'),
        y = n('wytG'),
        b = n('+Bsv'),
        h = n('VS6U'),
        v = n('7JQg'),
        g = n('mw9i'),
        w = n('k/OQ'),
        _ = n('Ty5D'),
        O = p.a.eb75875d,
        E = p.a.f8321d82,
        T = p.a.cdb53d79,
        P = p.a.h3290871,
        j = p.a.a98ba778,
        A = '/notifications',
        I = '/notifications/mentions',
        x = '/notifications/verified',
        M = r.createElement(b.a, { pullRight: !0, to: '/settings/notifications' }),
        k = p.a.eb75875d,
        C = Object(u.a)(
          Object(y.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        L = Object(u.a)(
          Object(y.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        R = Object(u.a)(
          Object(y.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        S = [
          { to: A, key: E, label: E, retainScrollPosition: !1 },
          { to: I, key: T, label: T, retainScrollPosition: !1 },
        ],
        N = [].concat(S, [{ to: x, key: P, label: P, retainScrollPosition: !1 }]),
        D = function (t) {
          var e,
            n,
            i = r.useContext(o.a).featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            s = t.history,
            c = t.isLoggedInUserVerified,
            u = t.location,
            d = c || i,
            p = r.createElement(
              _.e,
              null,
              r.createElement(_.c, { component: C, exact: !0, path: A }),
              r.createElement(_.c, { component: L, exact: !0, path: I }),
              r.createElement(_.c, { component: R, exact: !0, path: x }),
            )
          return u.pathname !== x || d
            ? r.createElement(h.a, {
                documentTitle: O,
                history: s,
                primaryContent:
                  ((n = r.createElement(f.a, { history: s })), r.createElement(l.a, { component: g.a, fab: n }, p)),
                rightControl: M,
                secondaryBar: ((e = d ? N : S), r.createElement(w.a, { accessibilityLabel: j, links: e })),
                sidebarContent: r.createElement(a.a, null),
                title: k,
              })
            : r.createElement(m.a, { to: A })
        }
      e.default = Object(v.c)({ page: 'ntab' })(c(D))
    },
    b5s6: function (t, e, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        s = n('ERkP'),
        c = n('v6aA'),
        u = n('XOJV'),
        l = n('eSoz'),
        f = n('rxPX'),
        d = n('0KEI'),
        p = function (t, e) {
          return e.tweetId
        },
        m = function (t, e) {
          var n = e.tweetId,
            r = n && u.a.select(t, n)
          return r ? Object(l.g)(t, r) : void 0
        },
        y = Object(f.a)()
          .propsFromState(function () {
            return { community: m, hydratedTweet: u.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: l.c.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        h = n('uCxL'),
        v = n('x5Pi'),
        g = y(function (t) {
          var e = t.community,
            n = t.createLocalApiErrorHandler,
            r = t.fetchCommunityIfNeeded,
            a = t.hydratedTweet,
            u =
              (t.tweetId,
              i()(t, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            l = s.useContext(c.a),
            f = l.featureSwitches,
            d = l.loggedInUserId,
            p = null == a ? void 0 : a.community_id_str
          s.useEffect(
            function () {
              p && Object(b.a)(e) && r(p).catch(n())
            },
            [e, p, n, r],
          )
          var m = f.isTrue('responsive_web_alt_text_badge_enabled'),
            y = a && Object(v.f)(a, d, e),
            g = y && Object(v.e)(y),
            w = f.isTrue('responsive_web_reactions_enabled')
          return s.createElement(
            h.a,
            o()({}, u, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: m,
              socialContextProps: g,
              tweet: a,
              withReactions: w,
            }),
          )
        })
      e.a = g
    },
    f42t: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return O
      })
      n('OZaJ')
      var r = n('97Jx'),
        o = n.n(r),
        a = n('VrFO'),
        i = n.n(a),
        s = n('Y9Ll'),
        c = n.n(s),
        u = n('1Pcy'),
        l = n.n(u),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        m = n.n(p),
        y = n('AuHH'),
        b = n.n(y),
        h = n('KEM+'),
        v = n.n(h),
        g =
          (n('2G9S'), n('+KXO'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('KOtZ'), n('ERkP'))
      function w(t) {
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
            r = b()(t)
          if (e) {
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var _ = (function (t) {
          d()(n, t)
          var e = w(n)
          function n() {
            var t
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (t = e.call.apply(e, [this].concat(o))), v()(l()(t), 'state', { isLoaded: !1 }), t
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
                      return n.reduce(function (e, n, r) {
                        return (e[n] = t[r]), e
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
                  return g.Children.only(this.props.children(t || {}))
                },
              },
            ]),
            n
          )
        })(g.Component),
        O = function (t, e) {
          return function (n) {
            return g.createElement(_, { modules: e }, function (e) {
              return g.createElement(t, o()({}, e, n))
            })
          }
        }
    },
    'hCg+': function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('5waQ'),
        o = n('QuZr')
      e.default = Object(o.a)({ notificationsType: r.a.All })
    },
    lGAB: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('5waQ'),
        o = n('QuZr')
      e.default = Object(o.a)({ notificationsType: r.a.Mentions })
    },
    qJ6t: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'notificationsModule', function () {
          return h
        }),
        n.d(e, 'updateLastSeenCursor', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        s = n('vWJI'),
        c = n('k49u'),
        u = n('0KEI'),
        l = n('UtAB'),
        f = n('fs1G'),
        d = n('5waQ'),
        p = n('ZNT5')
      function m(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                o()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      var b = 'APP_UPDATE_NOTIFICATION_LAST_READ',
        h = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.a.All
          return Object(p.a)({
            timelineId: 'notifications-'.concat(t),
            getEndpoint: function (t) {
              return t.URT.fetchNotifications
            },
            getEndpointParams: function (e) {
              e.polling
              var n = i()(e, ['polling'])
              return y({ type: t }, n)
            },
            context: 'FETCH_NOTIFICATIONS_TIMELINE',
            perfKey: 'notifications',
            postFetchAction: l.a,
            staleIntervalMs: 5e3,
          })
        },
        v = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.a.All
          return function (e, n, r) {
            var a = r.api,
              i = h(t),
              l = i && s.e(i.selectEntries(n()))
            if (l) {
              var d = { cursor: s.g(l), type: t },
                p = e(
                  Object(u.createLocalApiErrorHandlerWithContextFactory)(b)(
                    o()({}, c.a.AppInReadOnlyMode, { customAction: f.a }),
                  ),
                )
              a.URT.updateNotificationsLastSeenCursor(d).catch(p)
            }
          }
        }
      e.default = h(d.a.All)
    },
    srGC: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('5waQ'),
        o = n('QuZr')
      e.default = Object(o.a)({ notificationsType: r.a.Verified })
    },
  },
])
//# sourceMappingURL=WIPED
