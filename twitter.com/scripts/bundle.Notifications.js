;(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('3XMw'),
        a = n.n(o),
        i = n('M2x3'),
        c = 'settingsAppBar',
        u = n('/yvb'),
        s = n('rHpw'),
        l = a.a.bb081ea1,
        f = { viewType: 'settings_button' },
        d = r.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            o = e.to
          return r.createElement(u.a, {
            accessibilityLabel: l,
            behavioralEventContext: f,
            hoverLabel: { label: l },
            icon: r.createElement(i.a, null),
            link: o,
            onPress: t,
            pullRight: n,
            style: p.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        p = s.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = d
    },
    QuZr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ce
      })
      n('OZaJ')
      var r,
        o,
        a = n('VrFO'),
        i = n.n(a),
        c = n('Y9Ll'),
        u = n.n(c),
        s = n('1Pcy'),
        l = n.n(s),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        y = n.n(p),
        m = n('AuHH'),
        b = n.n(m),
        h = n('KEM+'),
        v = n.n(h),
        O = (n('2G9S'), n('ERkP')),
        w = n('oQhu'),
        g = n('z2Pn'),
        E = n('rxPX'),
        P = Object(w.a)(function (e, t) {
          return t && t.notificationsModule(e)
        }),
        T = n('FIs5'),
        j = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ezF+')),
        A = n('xZXe'),
        I = n('QIgh'),
        _ = n('8UdT'),
        C = n('AP4B'),
        L =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(6), n.e(213)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        R = j.e(L),
        k = n('b5s6'),
        x = n('rHpw'),
        S = n('VrCx'),
        M = n('yy6l')
      function N(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var U =
          ((o = {}),
          v()(o, _.b.Notification, R),
          v()(
            o,
            _.b.Tweet,
            j.c({
              selectDisplayType: function (e) {
                return e.content.displayType
              },
              handlers:
                ((r = {}),
                v()(
                  r,
                  S.a.Tweet,
                  Object(M.a)({
                    allowDownvote: !0,
                    component: A.a,
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
                v()(
                  r,
                  S.a.QuotedTweet,
                  Object(M.a)({
                    component: k.a,
                    createAdditionalProps: function (e) {
                      return { isCondensed: !0, style: F.quotedTweet }
                    },
                  }),
                ),
                r),
            }),
          ),
          o),
        B = D(D(D({}, Object(I.a)({ tweetDismissable: !0, withMuteConversation: !0 })), U), C.a),
        F = x.a.create(function (e) {
          return {
            quotedTweet: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginTop: 0,
              marginBottom: e.componentDimensions.gutterVertical,
            },
          }
        }),
        H = n('3XMw'),
        Q = n.n(H),
        J = n('f42t'),
        V = n('EUHl'),
        X = n('5waQ'),
        G = n('VE3M'),
        K = n('yoO3'),
        Z = n('fTQJ'),
        W = n('v6aA')
      function Y(e) {
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
            r = b()(e)
          if (t) {
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var z = Q.a.eb75875d,
        q = Q.a.e9f1fbcb,
        $ = Q.a.f287bb3a,
        ee = Q.a.h994ec4f,
        te = Q.a.c06d4305,
        ne = Q.a.bfdb3c12,
        re = Q.a.h1d919eb,
        oe = Q.a.ib4510fd,
        ae = (function (e) {
          d()(n, e)
          var t = Y(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(l()(e), '_getNewItemsPillLabel', function () {
                switch (e.props.notificationsType) {
                  case X.a.All:
                    return oe
                  default:
                    return
                }
              }),
              v()(l()(e), '_getEmptyMessageBody', function () {
                var t = e.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                switch (e.props.notificationsType) {
                  case X.a.Mentions:
                    return te
                  case X.a.Verified:
                    return t ? re : ne
                  default:
                    return t ? ee : $
                }
              }),
              v()(l()(e), '_renderEmptyTimeline', function () {
                return O.createElement(T.a, {
                  header: q,
                  message: e._getEmptyMessageBody(),
                  onImpression: e._handleEmptyTimelineImpression,
                })
              }),
              v()(l()(e), '_handleEmptyTimelineImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(l()(e), '_handleAtTop', function () {
                e._updateLastReadIfNeeded()
              }),
              e
            )
          }
          return (
            u()(n, [
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
                  this._updateLastReadIfNeeded(), n === X.a.All && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.notificationsModule
                  return e
                    ? O.createElement(
                        K.a,
                        null,
                        O.createElement(Z.a, {
                          entryConfiguration: B,
                          key: 'notification-timeline',
                          module: e,
                          newTweetsPillLabel: this._getNewItemsPillLabel(),
                          newTweetsPillMode: V.a.CLIENT,
                          onAtTop: this._handleAtTop,
                          renderEmptyState: this._renderEmptyTimeline,
                          title: z,
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
                    r = e.updateLastRead
                  n && r(t)
                },
              },
            ]),
            n
          )
        })(O.Component)
      v()(ae, 'contextType', W.a)
      var ie = function (e) {
          return Object(J.a)(
            (function (e) {
              return Object(E.a)()
                .propsFromState(function () {
                  return {
                    unreadCount: function (t, n) {
                      var r,
                        o = n.ntabData
                      return null === (r = P(e, o)) || void 0 === r ? void 0 : r.selectUnreadEntriesCount(t)
                    },
                  }
                })
                .adjustStateProps(function (t, n) {
                  var r = t.unreadCount,
                    o = n.ntabData
                  return { ntabData: null, notificationsModule: P(e, o), notificationsType: e, unreadCount: r }
                })
                .propsFromActions(function (t) {
                  var n,
                    r = t.ntabData
                  return {
                    markAllAsRead: null === (n = P(e, r)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: r && r.updateLastSeenCursor,
                    setNotificationsType: g.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: e })
            })(e)(ae),
            { ntabData: G.a },
          )
        },
        ce = function (e) {
          var t = e.notificationsType
          return ie(t)
        }
    },
    WR6I: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationsScreen', function () {
          return D
        })
      n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2G9S')
      var r = n('ERkP'),
        o = n('v6aA'),
        a = n('es0u'),
        i = n('G6rE'),
        c = n('rxPX'),
        u = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: i.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { isLoggedInUserVerified: !!t && t.verified }
          }),
        s = n('pnqf'),
        l = n('dwig'),
        f = n('0+qk'),
        d = n('3XMw'),
        p = n.n(d),
        y = n('5FtR'),
        m = n('wytG'),
        b = n('+Bsv'),
        h = n('VS6U'),
        v = n('7JQg'),
        O = n('mw9i'),
        w = n('k/OQ'),
        g = n('Ty5D'),
        E = p.a.eb75875d,
        P = p.a.f8321d82,
        T = p.a.cdb53d79,
        j = p.a.h3290871,
        A = p.a.a98ba778,
        I = '/notifications',
        _ = '/notifications/mentions',
        C = '/notifications/verified',
        L = r.createElement(b.a, { pullRight: !0, to: '/settings/notifications' }),
        R = p.a.eb75875d,
        k = Object(s.a)(
          Object(m.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        x = Object(s.a)(
          Object(m.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        S = Object(s.a)(
          Object(m.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        M = [
          { to: I, key: P, label: P, retainScrollPosition: !1 },
          { to: _, key: T, label: T, retainScrollPosition: !1 },
        ],
        N = [].concat(M, [{ to: C, key: j, label: j, retainScrollPosition: !1 }]),
        D = function (e) {
          var t,
            n,
            i = r.useContext(o.a).featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            c = e.history,
            u = e.isLoggedInUserVerified,
            s = e.location,
            d = u || i,
            p = r.createElement(
              g.e,
              null,
              r.createElement(g.c, { component: k, exact: !0, path: I }),
              r.createElement(g.c, { component: x, exact: !0, path: _ }),
              r.createElement(g.c, { component: S, exact: !0, path: C }),
            )
          return s.pathname !== C || d
            ? r.createElement(h.a, {
                documentTitle: E,
                history: c,
                primaryContent:
                  ((n = r.createElement(f.a, { history: c })), r.createElement(l.a, { component: O.a, fab: n }, p)),
                rightControl: L,
                secondaryBar: ((t = d ? N : M), r.createElement(w.a, { accessibilityLabel: A, links: t })),
                sidebarContent: r.createElement(a.a, null),
                title: R,
              })
            : r.createElement(y.a, { to: I })
        }
      t.default = Object(v.c)({ page: 'ntab' })(u(D))
    },
    b5s6: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        c = n('ERkP'),
        u = n('v6aA'),
        s = n('XOJV'),
        l = n('eSoz'),
        f = n('rxPX'),
        d = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        y = function (e, t) {
          var n = t.tweetId,
            r = n && s.a.select(e, n)
          return r ? Object(l.f)(e, r) : void 0
        },
        m = Object(f.a)()
          .propsFromState(function () {
            return { community: y, hydratedTweet: s.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: l.b.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        h = n('uCxL'),
        v = n('x5Pi'),
        O = m(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            a = e.hydratedTweet,
            s =
              (e.tweetId,
              i()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            l = c.useContext(u.a),
            f = l.featureSwitches,
            d = l.loggedInUserId,
            p = null == a ? void 0 : a.community_id_str
          c.useEffect(
            function () {
              p && Object(b.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var y = f.isTrue('responsive_web_alt_text_badge_enabled'),
            m = a && Object(v.f)(a, d, t),
            O = m && Object(v.e)(m),
            w = f.isTrue('responsive_web_reactions_enabled')
          return c.createElement(
            h.a,
            o()({}, s, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: y,
              socialContextProps: O,
              tweet: a,
              withReactions: w,
            }),
          )
        })
      t.a = O
    },
    f42t: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      n('OZaJ')
      var r = n('97Jx'),
        o = n.n(r),
        a = n('VrFO'),
        i = n.n(a),
        c = n('Y9Ll'),
        u = n.n(c),
        s = n('1Pcy'),
        l = n.n(s),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        y = n.n(p),
        m = n('AuHH'),
        b = n.n(m),
        h = n('KEM+'),
        v = n.n(h),
        O =
          (n('2G9S'), n('+KXO'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('KOtZ'), n('ERkP'))
      function w(e) {
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
            r = b()(e)
          if (t) {
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var g = (function (e) {
          d()(n, e)
          var t = w(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (e = t.call.apply(t, [this].concat(o))), v()(l()(e), 'state', { isLoaded: !1 }), e
          }
          return (
            u()(n, [
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
                      return n.reduce(function (t, n, r) {
                        return (t[n] = e[r]), t
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
                  return O.Children.only(this.props.children(e || {}))
                },
              },
            ]),
            n
          )
        })(O.Component),
        E = function (e, t) {
          return function (n) {
            return O.createElement(g, { modules: t }, function (t) {
              return O.createElement(e, o()({}, t, n))
            })
          }
        }
    },
    'hCg+': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('5waQ'),
        o = n('QuZr')
      t.default = Object(o.a)({ notificationsType: r.a.All })
    },
    lGAB: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('5waQ'),
        o = n('QuZr')
      t.default = Object(o.a)({ notificationsType: r.a.Mentions })
    },
    qJ6t: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'notificationsModule', function () {
          return h
        }),
        n.d(t, 'updateLastSeenCursor', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        c = n('vWJI'),
        u = n('k49u'),
        s = n('0KEI'),
        l = n('UtAB'),
        f = n('fs1G'),
        d = n('5waQ'),
        p = n('ZNT5')
      function y(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var b = 'APP_UPDATE_NOTIFICATION_LAST_READ',
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.a.All
          return Object(p.a)({
            timelineId: 'notifications-'.concat(e),
            getEndpoint: function (e) {
              return e.URT.fetchNotifications
            },
            getEndpointParams: function (t) {
              t.polling
              var n = i()(t, ['polling'])
              return m({ type: e }, n)
            },
            context: 'FETCH_NOTIFICATIONS_TIMELINE',
            perfKey: 'notifications',
            postFetchAction: l.a,
            staleIntervalMs: 5e3,
          })
        },
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.a.All
          return function (t, n, r) {
            var a = r.api,
              i = h(e),
              l = i && c.e(i.selectEntries(n()))
            if (l) {
              var d = { cursor: c.g(l), type: e },
                p = t(
                  Object(s.createLocalApiErrorHandlerWithContextFactory)(b)(
                    o()({}, u.a.AppInReadOnlyMode, { customAction: f.a }),
                  ),
                )
              a.URT.updateNotificationsLastSeenCursor(d).catch(p)
            }
          }
        }
      t.default = h(d.a.All)
    },
    srGC: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('5waQ'),
        o = n('QuZr')
      t.default = Object(o.a)({ notificationsType: r.a.Verified })
    },
  },
])
//# sourceMappingURL=WIPED
