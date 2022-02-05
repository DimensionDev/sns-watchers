;(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    '+Bsv': function (t, e, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('3XMw'),
        i = n.n(o),
        s = n('M2x3'),
        c = 'settingsAppBar',
        u = n('/yvb'),
        l = n('rHpw'),
        f = i.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = a.a.memo(function (t) {
          var e = t.onPress,
            n = t.pullRight,
            r = t.to
          return a.a.createElement(u.a, {
            accessibilityLabel: f,
            behavioralEventContext: d,
            hoverLabel: { label: f },
            icon: a.a.createElement(s.a, null),
            link: r,
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
      e.a = p
    },
    QuZr: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return wt
      })
      n('OZaJ')
      var r,
        a,
        o = n('97Jx'),
        i = n.n(o),
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
        O = n.n(_),
        E = n('oQhu'),
        T = n('z2Pn'),
        P = n('rxPX'),
        j = Object(E.a)(function (t, e) {
          return e && e.notificationsModule(t)
        }),
        A = n('FIs5'),
        I = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        x = n('xZXe'),
        M = n('QIgh'),
        k = n('8UdT'),
        C = n('AP4B'),
        L =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(6), n.e(220)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        R = I.e(L),
        S = n('b5s6'),
        N = n('rHpw'),
        D = n('VrCx'),
        U = n('yy6l')
      function B(t, e) {
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
      function H(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? B(Object(n), !0).forEach(function (e) {
                w()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      var F,
        Q,
        V =
          ((a = {}),
          w()(a, k.b.Notification, R),
          w()(
            a,
            k.b.Tweet,
            I.c({
              selectDisplayType: function (t) {
                return t.content.displayType
              },
              handlers:
                ((r = {}),
                w()(
                  r,
                  D.a.Tweet,
                  Object(U.a)({
                    allowDownvote: !0,
                    component: x.a,
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
                  D.a.QuotedTweet,
                  Object(U.a)({
                    component: S.a,
                    createAdditionalProps: function (t) {
                      return { isCondensed: !0, style: X.quotedTweet }
                    },
                  }),
                ),
                r),
            }),
          ),
          a),
        J = H(H(H({}, Object(M.a)({ tweetDismissable: !0, withMuteConversation: !0 })), V), C.a),
        X = N.a.create(function (t) {
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
        Z = n('f42t'),
        W = n('EUHl'),
        Y = n('5waQ'),
        z = n('VE3M'),
        q = n('yoO3'),
        $ = n('fTQJ'),
        tt = n('v6aA'),
        et =
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
        nt = {
          notifications_alt_a:
            ((F = {}),
            w()(F, Y.a.All, { headerMessage: K.a.b6a43e77, bodyMessage: K.a.f269c47d, buttonText: K.a.g6871092 }),
            w()(F, Y.a.Mentions, { headerMessage: K.a.e577e1a1, bodyMessage: K.a.b91e5a3a }),
            F),
          notifications_alt_b:
            ((Q = {}),
            w()(Q, Y.a.All, { headerMessage: K.a.g264f125, bodyMessage: K.a.a3420a9b, buttonText: K.a.g6871092 }),
            w()(Q, Y.a.Mentions, { headerMessage: K.a.ef0b8028, bodyMessage: K.a.b91e5a3a }),
            Q),
        },
        rt = function (t) {
          return ['control', 'notifications_alt_a', 'notifications_alt_b'].includes(t)
        },
        at = function (t) {
          return et[t]
        },
        ot = function (t, e, n) {
          var r, a
          return null === (r = nt[e]) || void 0 === r || null === (a = r[n]) || void 0 === a ? void 0 : a[t]
        },
        it = function (t, e) {
          return ot('headerMessage', t, e)
        },
        st = function (t, e) {
          return ot('bodyMessage', t, e)
        },
        ct = function (t, e) {
          return ot('buttonText', t, e)
        }
      function ut(t) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var lt = K.a.eb75875d,
        ft = K.a.e9f1fbcb,
        dt = K.a.f287bb3a,
        pt = K.a.h994ec4f,
        mt = K.a.c06d4305,
        yt = K.a.bfdb3c12,
        bt = K.a.h1d919eb,
        ht = K.a.ib4510fd,
        vt = (function (t) {
          m()(n, t)
          var e = ut(n)
          function n() {
            var t
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              w()(d()(t), '_getNewItemsPillLabel', function () {
                switch (t.props.notificationsType) {
                  case Y.a.All:
                    return ht
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
                  case Y.a.Mentions:
                    return rt(n) && 'control' !== n ? st(n, t.props.notificationsType) : mt
                  case Y.a.Verified:
                    return e ? bt : yt
                  default:
                    return rt(n) && 'control' !== n ? st(n, t.props.notificationsType) : e ? pt : dt
                }
              }),
              w()(d()(t), '_getEmptyMessageHeader', function () {
                var e = t.context.featureSwitches.getStringValue(
                  'responsive_web_notifications_empty_state_redesign_variant',
                )
                return rt(e) && 'control' !== e ? it(e, t.props.notificationsType) : ft
              }),
              w()(d()(t), '_renderEmptyTimeline', function () {
                var e = t.context.featureSwitches.getStringValue(
                  'responsive_web_notifications_empty_state_redesign_variant',
                )
                if (rt(e) && 'control' !== e) {
                  var n = ct(e, t.props.notificationsType)
                  return O.a.createElement(
                    A.a,
                    i()({}, n && { buttonLink: '/i/connect_people', buttonText: n }, {
                      header: t._getEmptyMessageHeader(),
                      imageVariants: at(e),
                      message: t._getEmptyMessageBody(),
                      onButtonPress: t._handleEmptyTimelineButtonPress,
                      onImpression: t._handleEmptyTimelineImpression,
                    }),
                  )
                }
                return O.a.createElement(A.a, {
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
                  this._updateLastReadIfNeeded(), n === Y.a.All && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props.notificationsModule
                  return t
                    ? O.a.createElement(
                        q.a,
                        null,
                        O.a.createElement($.a, {
                          entryConfiguration: J,
                          key: 'notification-timeline',
                          module: t,
                          newTweetsPillLabel: this._getNewItemsPillLabel(),
                          newTweetsPillMode: W.a.CLIENT,
                          onAtTop: this._handleAtTop,
                          renderEmptyState: this._renderEmptyTimeline,
                          title: lt,
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
        })(O.a.Component)
      w()(vt, 'contextType', tt.a)
      var gt = function (t) {
          return Object(Z.a)(
            (function (t) {
              return Object(P.a)()
                .propsFromState(function () {
                  return {
                    unreadCount: function (e, n) {
                      var r,
                        a = n.ntabData
                      return null === (r = j(t, a)) || void 0 === r ? void 0 : r.selectUnreadEntriesCount(e)
                    },
                  }
                })
                .adjustStateProps(function (e, n) {
                  var r = e.unreadCount,
                    a = n.ntabData
                  return { ntabData: null, notificationsModule: j(t, a), notificationsType: t, unreadCount: r }
                })
                .propsFromActions(function (e) {
                  var n,
                    r = e.ntabData
                  return {
                    markAllAsRead: null === (n = j(t, r)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: r && r.updateLastSeenCursor,
                    setNotificationsType: T.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: t })
            })(t)(vt),
            { ntabData: z.a },
          )
        },
        wt = function (t) {
          var e = t.notificationsType
          return gt(e)
        }
    },
    WR6I: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'NotificationsScreen', function () {
          return U
        })
      n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2G9S')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        i = n('es0u'),
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
        f = n('dwig'),
        d = n('0+qk'),
        p = n('3XMw'),
        m = n.n(p),
        y = n('5FtR'),
        b = n('wytG'),
        h = n('+Bsv'),
        v = n('VS6U'),
        g = n('7JQg'),
        w = n('mw9i'),
        _ = n('k/OQ'),
        O = n('Ty5D'),
        E = m.a.eb75875d,
        T = m.a.f8321d82,
        P = m.a.cdb53d79,
        j = m.a.h3290871,
        A = m.a.a98ba778,
        I = '/notifications',
        x = '/notifications/mentions',
        M = '/notifications/verified',
        k = a.a.createElement(h.a, { pullRight: !0, to: '/settings/notifications' }),
        C = m.a.eb75875d,
        L = Object(l.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        R = Object(l.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        S = Object(l.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        N = [
          { to: I, key: T, label: T, retainScrollPosition: !1 },
          { to: x, key: P, label: P, retainScrollPosition: !1 },
        ],
        D = [].concat(N, [{ to: M, key: j, label: j, retainScrollPosition: !1 }]),
        U = function (t) {
          var e,
            n,
            r = a.a
              .useContext(o.a)
              .featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            s = t.history,
            c = t.isLoggedInUserVerified,
            u = t.location,
            l = c || r,
            p = a.a.createElement(
              O.e,
              null,
              a.a.createElement(O.c, { component: L, exact: !0, path: I }),
              a.a.createElement(O.c, { component: R, exact: !0, path: x }),
              a.a.createElement(O.c, { component: S, exact: !0, path: M }),
            )
          return u.pathname !== M || l
            ? a.a.createElement(v.a, {
                documentTitle: E,
                history: s,
                primaryContent:
                  ((n = a.a.createElement(d.a, { history: s })), a.a.createElement(f.a, { component: w.a, fab: n }, p)),
                rightControl: k,
                secondaryBar: ((e = l ? D : N), a.a.createElement(_.a, { accessibilityLabel: A, links: e })),
                sidebarContent: a.a.createElement(i.a, null),
                title: C,
              })
            : a.a.createElement(y.a, { to: I })
        }
      e.default = Object(g.c)({ page: 'ntab' })(u(U))
    },
    b5s6: function (t, e, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        s = n('ERkP'),
        c = n.n(s),
        u = n('v6aA'),
        l = n('XOJV'),
        f = n('eSoz'),
        d = n('rxPX'),
        p = n('0KEI'),
        m = function (t, e) {
          return e.tweetId
        },
        y = function (t, e) {
          var n = e.tweetId,
            r = n && l.a.select(t, n)
          return r ? Object(f.g)(t, r) : void 0
        },
        b = Object(d.a)()
          .propsFromState(function () {
            return { community: y, hydratedTweet: l.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: f.c.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        v = n('uCxL'),
        g = n('x5Pi'),
        w = b(function (t) {
          var e = t.community,
            n = t.createLocalApiErrorHandler,
            r = t.fetchCommunityIfNeeded,
            o = t.hydratedTweet,
            s =
              (t.tweetId,
              i()(t, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            l = c.a.useContext(u.a),
            f = l.featureSwitches,
            d = l.loggedInUserId,
            p = null == o ? void 0 : o.community_id_str
          c.a.useEffect(
            function () {
              p && Object(h.a)(e) && r(p).catch(n())
            },
            [e, p, n, r],
          )
          var m = f.isTrue('responsive_web_alt_text_badge_enabled'),
            y = o && Object(g.f)(o, d, e),
            b = y && Object(g.e)(y),
            w = f.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            v.a,
            a()({}, s, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: m,
              socialContextProps: b,
              tweet: o,
              withReactions: w,
            }),
          )
        })
      e.a = w
    },
    f42t: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return E
      })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
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
          (n('2G9S'),
          n('+KXO'),
          n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('z84I'),
          n('KOtZ'),
          n('ERkP')),
        w = n.n(g)
      function _(t) {
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
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var O = (function (t) {
          d()(n, t)
          var e = _(n)
          function n() {
            var t
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (t = e.call.apply(e, [this].concat(a))), v()(l()(t), 'state', { isLoaded: !1 }), t
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
                  return w.a.Children.only(this.props.children(t || {}))
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        E = function (t, e) {
          return function (n) {
            return w.a.createElement(O, { modules: e }, function (e) {
              return w.a.createElement(t, a()({}, e, n))
            })
          }
        }
    },
    'hCg+': function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('5waQ'),
        a = n('QuZr')
      e.default = Object(a.a)({ notificationsType: r.a.All })
    },
    lGAB: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('5waQ'),
        a = n('QuZr')
      e.default = Object(a.a)({ notificationsType: r.a.Mentions })
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
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
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
                a()(t, e, n[e])
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
            var o = r.api,
              i = h(t),
              l = i && s.e(i.selectEntries(n()))
            if (l) {
              var d = { cursor: s.g(l), type: t },
                p = e(
                  Object(u.createLocalApiErrorHandlerWithContextFactory)(b)(
                    a()({}, c.a.AppInReadOnlyMode, { customAction: f.a }),
                  ),
                )
              o.URT.updateNotificationsLastSeenCursor(d).catch(p)
            }
          }
        }
      e.default = h(d.a.All)
    },
    srGC: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('5waQ'),
        a = n('QuZr')
      e.default = Object(a.a)({ notificationsType: r.a.Verified })
    },
  },
])
//# sourceMappingURL=WIPED
