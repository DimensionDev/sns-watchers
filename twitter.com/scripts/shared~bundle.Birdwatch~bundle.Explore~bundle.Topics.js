;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('7x/C'), n('DZ+c'), n('KOtZ'), n('Ysgh'), n('KqXw'), n('tQbP'), n('7xRU')
      var r = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return i(n, 0).toString()
        },
        i = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), r = t, i = 0; i < n.length; i++) {
            ;(r = (r << 5) - r + n.charCodeAt(i)), (r &= r)
          }
          return r
        }
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var r = n('ERkP')
      function i(e) {
        return null
      }
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var a = n('97Jx'),
        o = n.n(a),
        c = n('KEM+'),
        l = n.n(c),
        u = (n('jwue'), n('+oxZ'), n('3XMw')),
        s = n.n(u),
        p = n('/yvb'),
        f = n('fn9Y'),
        b = s.a.c0530da5,
        d = s.a.ifea3114
      var m = function (e) {
          return r.createElement(p.a, {
            accessibilityLabel: b,
            hoverLabel: { label: d },
            icon: r.createElement(f.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        v = 'share-button',
        h = 'share-by-tweet',
        y = n('m3Bd'),
        g = n.n(y),
        O = n('1YZw'),
        E = n('CaKu'),
        w = n('y+lG'),
        j = n('SrIh'),
        P = n('RqPI'),
        C = n('Irs7'),
        I = n('uDfI'),
        T = n('Ty5D'),
        S = n('yUQf'),
        k = n('jwTb'),
        x = n('SOvA'),
        L = n('I/9y'),
        D = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: k.a,
            text: s.a.fcc684a9,
            testID: h,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: x.a,
            text: s.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return E.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: L.a,
            text: s.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: f.a,
            text: s.a.if23a251,
          },
        }
      function A(e, t) {
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function M(e) {
        var t = Object(C.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(I.c)(),
              i = Object(T.g)(),
              a = Object(S.a)(P.v)
            return r.useMemo(
              function () {
                return function (r) {
                  var o = D[r.type],
                    c = o.isAvailable,
                    l = o.scribeAction,
                    u = g()(o, ['isAvailable', 'scribeAction'])
                  if (!c()) return null
                  var s = B({}, u)
                  function p() {
                    var o = r.shareText || e.shareText,
                      c = e.url,
                      u = B(B({}, e.scribeNamespace), {}, { action: l }, r.scribeNamespace),
                      s = { text: o, url: c },
                      p = { analytics: t, dispatch: n, history: i, mergedScribeNamespace: u, sessionToken: a }
                    !(function (e, t, n) {
                      var r = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return r(), void n.history.push(B(B({}, N(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            E.a.setString(Object(w.a)(t.url, n.sessionToken)),
                            r(),
                            void n.dispatch(Object(O.b)({ text: _.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            r(),
                            void n.history.push(
                              B(
                                B({ pathname: '/compose/tweet' }, N(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(w.a)(t.url, n.sessionToken) })
                            .then(r)
                            .catch(function () {
                              n.analytics.scribe(B(B({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(j.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, s, p)
                  }
                  return r.label && (s.text = r.label), B(B({}, s), {}, { onClick: p })
                }
              },
              [t, n, i, a, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var _ = { copyLinkSuccessMessage: s.a.f88553c8, shareTextPrefixFormatter: s.a.gb5851d7 }
      function N(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? _.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var F = n('T0aG'),
        R = n.n(F),
        H = n('mN6z')
      var G = n('mjJ+'),
        U = n('rHpw')
      function K(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var W = { element: 'share' }
      function V(e) {
        var t = (function (e) {
            var t = r.useRef({ previous: void 0 })
            if ('object' !== R()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var i = t.current.previous
            return i && (e === i || Object(H.a)(e, i)) ? i : n()
          })(Q(Q({}, W), e.scribeNamespace)),
          n = M(Q(Q({}, e), {}, { scribeNamespace: t })),
          i = n.analytics,
          a = n.getActionItem
        var o = e.ButtonComponent || Z
        return r.createElement(o, {
          onPress: function () {
            var e = Q(Q({}, t), {}, { action: 'share_menu_click' })
            i.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? r.Children.forEach(e.children, function (e) {
                    if (r.isValidElement(e)) {
                      var t = a(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = a({ type: e })
                    t && n.push(t)
                  }),
              r.createElement(G.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function Z(e) {
        return r.createElement(m, o()({}, e, { style: J.button, testID: v }))
      }
      var J = U.a.create(function (e) {
        return { button: { marginRight: e.spaces.space4 } }
      })
      function q(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          a = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = g()(e, ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel'])
        return r.createElement(
          V,
          c,
          r.createElement(i, { label: o, type: 'tweet' }),
          r.createElement(i, { label: n, type: 'dm' }),
          r.createElement(i, { label: t, type: 'copy' }),
          r.createElement(i, { label: a, type: 'via' }),
        )
      }
      ;(q.Action = i), (q.Custom = V)
      t.a = q
    },
    UZjl: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        i = n.n(r),
        a = n('m3Bd'),
        o = n.n(a),
        c = n('KEM+'),
        l = n.n(c),
        u = (n('hBpG'), n('ERkP')),
        s = n('es0u'),
        p = n('hqKg'),
        f = n('MDbM'),
        b = n('rxPX'),
        d = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        m = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        v = Object(p.createSelector)(d, m, function (e, t) {
          return t !== f.a.LOADED || (!!e && !!e.tabs)
        }),
        h = Object(b.a)()
          .propsFromState(function () {
            return { hasTabNavigation: v, pageConfiguration: d, initialFetchStatus: m }
          })
          .withAnalytics(),
        y = n('QIgh'),
        g = n('s14A'),
        O = n('dwig'),
        E = (n('uFXj'), n('7JQg')),
        w = n('rHpw'),
        j = n('GKOv'),
        P = n('Rp9C'),
        C = n('Irs7')
      function I(e, t) {
        var n = Object(C.b)(),
          r = t || {},
          i = r.component,
          a = r.element,
          o = { items: [P.a.forTopic(e, t)] }
        return (
          u.useEffect(
            function () {
              n.scribe({ component: i, element: a, action: 'impression', data: o })
            },
            [o, i, a, n],
          ),
          { namespace: { component: i, element: a }, data: o }
        )
      }
      var T = n('MWbm')
      function S(e) {
        var t = e.header,
          n = t.clientEventInfo,
          r = t.displayType,
          i = t.facepile,
          a = t.landingContext,
          o = t.topicId,
          c = e.onHeaderVisible,
          l = I(o, n),
          s = l.data,
          p = l.namespace
        return u.createElement(
          T.a,
          { style: k.root },
          u.createElement(
            E.b,
            { data: s, namespace: p },
            u.createElement(j.a, {
              displayType: r,
              facepile: i,
              onFollowHeaderOffscreen: function (e) {
                var t = e.isOffscreen
                return c(!t)
              },
              topicId: o,
              topicLandingContext: a,
              withDivider: !0,
            }),
          ),
        )
      }
      var k = w.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        x = n('3XMw'),
        L = n.n(x),
        D = (n('jQ/y'), n('ho0z'), n('zI2C')),
        A = n('v6aA'),
        B = n('Zejx'),
        M = function (e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return B.a.select(e, n)
        },
        _ = Object(b.a)().propsFromState(function () {
          return { topic: M }
        }),
        N = n('PbbS'),
        F = n('LWCC'),
        R = n('IcAo'),
        H = n('rJoH'),
        G = n('I6Uj'),
        U = n('zfvc'),
        K = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        Q = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        W = L.a.ed88e742
      var V = w.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        Z = _(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            n = e.isHeaderOffscreen,
            r = e.navBar.clientEventInfo,
            i = e.pageNamespace,
            a = e.topic,
            o = e.withAppLinks,
            c = e.withOpenGraphMeta,
            l = u.useContext(A.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            s = I(t, r),
            p = s.data,
            f = s.namespace,
            b = Object(R.a)({}, i, f)
          return a
            ? u.createElement(
                E.b,
                { data: p, namespace: b },
                u.createElement(
                  u.Fragment,
                  null,
                  c
                    ? u.createElement(H.a, {
                        canonical: K(t),
                        description: a.description,
                        title: a.name,
                        type: 'article',
                      })
                    : null,
                  o ? u.createElement(D.a, { deepLink: Q(t) }) : null,
                  u.createElement(
                    T.a,
                    { style: V.rightControl },
                    u.createElement(
                      T.a,
                      { style: V.followButtonContainer },
                      u.createElement(
                        U.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        u.createElement(F.a, { size: 'medium', textMode: N.a.FollowTopic, topic: a }),
                      ),
                    ),
                    l ? u.createElement(G.a, { copyLinkShareLabel: W, scribeNamespace: b, url: K(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        J = n('yoO3'),
        q = (n('OZaJ'), n('VrFO')),
        X = n.n(q),
        z = n('Y9Ll'),
        Y = n.n(z),
        $ = n('1Pcy'),
        ee = n.n($),
        te = n('5Yy7'),
        ne = n.n(te),
        re = n('N+ot'),
        ie = n.n(re),
        ae = n('AuHH'),
        oe = n.n(ae),
        ce = (n('2G9S'), n('v84o')),
        le = n('0KEI'),
        ue = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        se = function (e, t) {
          var n = t.selectedTabId,
            r = ue(e, t)
          return (
            r &&
            r.tabs &&
            r.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        pe = Object(b.a)()
          .propsFromState(function () {
            return { pageConfiguration: ue, selectedTab: se }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(le.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
            }
          })
          .withAnalytics(),
        fe = n('doI8'),
        be = n('oQhu'),
        de = n('fTQJ')
      function me(e) {
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
            r = oe()(e)
          if (t) {
            var i = oe()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return ie()(this, n)
        }
      }
      var ve = pe(
          (function (e) {
            ne()(n, e)
            var t = me(n)
            function n() {
              var e
              X()(this, n)
              for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                l()(ee()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    n = t.analytics,
                    r = t.pageConfiguration,
                    i = t.selectedTab,
                    a = (null == i ? void 0 : i.scribeConfig) || (null == r ? void 0 : r.scribeConfig)
                  if (a) {
                    a.entityToken
                    return o()(a, ['entityToken'])
                  }
                  return n.contextualScribeNamespace
                }),
                l()(
                  ee()(e),
                  '_getModule',
                  Object(be.a)(function (e, t, n, r) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(ce.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: r })
                      if (null != e && e.graphQLTimelineId) return Object(fe.a)(e.graphQLTimelineId)
                    }
                    return n
                  }),
                ),
                l()(ee()(e), '_getRefreshIntervalSecForCurrentTab', function () {
                  var t,
                    n = e.props,
                    r = n.pageConfiguration,
                    i = n.selectedTab,
                    a = null == r || null === (t = r.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (i) return i.refreshIntervalSec
                  if (a) {
                    var o,
                      c =
                        null == r || null === (o = r.tabs) || void 0 === o
                          ? void 0
                          : o.tabs.find(function (e) {
                              return a === e.id
                            })
                    return null == c ? void 0 : c.refreshIntervalSec
                  }
                }),
                e
              )
            }
            return (
              Y()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      r = n.entryConfiguration,
                      i = n.initialModule,
                      a = n.pageConfiguration,
                      o = n.prerollDisplayLocation,
                      c = n.refreshControl,
                      l = n.renderEmptyState,
                      s = n.renderUnavailable,
                      p = n.selectedTab,
                      f = n.timelinePrefix,
                      b = n.title,
                      d = {
                        token: null == a || null === (e = a.scribeConfig) || void 0 === e ? void 0 : e.entityToken,
                      },
                      m = this._getModule(
                        p,
                        null == a || null === (t = a.tabs) || void 0 === t ? void 0 : t.initialTabId,
                        i,
                        f,
                      ),
                      v = this._getRefreshIntervalSecForCurrentTab(),
                      h = v ? 1e3 * v : void 0
                    return u.createElement(
                      E.b,
                      { namespace: this._getTimelineNamespace() },
                      u.createElement(de.a, {
                        behavioralEventContext: d,
                        entryConfiguration: r,
                        module: m,
                        pollingIntervalMsOverride: h,
                        prerollDisplayLocation: o,
                        refreshControl: c,
                        renderEmptyState: l,
                        renderUnavailable: s,
                        title: b,
                      }),
                    )
                  },
                },
              ]),
              n
            )
          })(u.Component),
        ),
        he = (n('z84I'), n('+Kfv')),
        ye = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        ge = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        Oe = function (e, t) {
          var n = t.selectedTabId,
            r = ge(e, t)
          return (
            r &&
            r.tabs &&
            r.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        Ee = Object(b.a)()
          .propsFromState(function () {
            return { initialFetchStatus: ye, pageConfiguration: ge, selectedTab: Oe }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(le.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
              fetchInitial: t.fetchInitial,
            }
          })
          .withAnalytics(),
        we = n('Nhmk'),
        je = n('k/OQ'),
        Pe = n('G8HL')
      function Ce(e, t) {
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
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Te(e) {
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
            r = oe()(e)
          if (t) {
            var i = oe()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return ie()(this, n)
        }
      }
      var Se = 'controls',
        ke = (function (e) {
          ne()(n, e)
          var t = Te(n)
          function n() {
            var e
            X()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              l()(ee()(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  i = t.fetchInitial,
                  a = t.pageConfiguration,
                  o = a ? a.scribeConfig : void 0
                return i().then(function (t) {
                  t.performed && n.scribe(Ie(Ie({}, e._getScribeNamespace(o)), {}, { action: 'get_initial' }))
                }, r(we.a))
              }),
              l()(ee()(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.getTabLink,
                  i = t.pageConfiguration,
                  a = t.selectedTab,
                  o = null == i ? void 0 : i.tabs
                if (o && o.tabs) {
                  var c,
                    l = (a && a.id) || o.initialTabId,
                    s = i ? i.scribeConfig : void 0,
                    p = o.tabs.map(function (t, i) {
                      var a,
                        o = t.id === l
                      return (
                        o && (c = i),
                        {
                          isActive: function () {
                            return o
                          },
                          key: t.labelText,
                          label: t.labelText,
                          onClick: function () {
                            n.scribe(
                              e._buildTabNamespace(e._getScribeNamespace(s), e._getScribeNamespace(t.scribeConfig)),
                            )
                          },
                          to: r(t.id),
                          token: null === (a = t.scribeConfig) || void 0 === a ? void 0 : a.entityToken,
                        }
                      )
                    })
                  return u.createElement(
                    he.a,
                    { viewType: Se },
                    u.createElement(je.a, { links: p, visibleItemIndex: c }),
                  )
                }
                return null
              }),
              e
            )
          }
          return (
            Y()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchPageModule()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(e.module === this.props.module && this.props.initialFetchStatus) || this._fetchPageModule()
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.initialFetchStatus === f.a.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function (e, t) {
                  var n
                  return (
                    e && (n = e), t && (n = Ie(Ie({}, n), t)), Ie(Ie({}, n), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function (e) {
                  if (e) {
                    e.entityToken
                    return o()(e, ['entityToken'])
                  }
                },
              },
            ]),
            n
          )
        })(u.Component),
        xe = Ee(Object(Pe.a)(ke)),
        Le = n('VS6U'),
        De = n('5Y9N'),
        Ae = n('FIs5'),
        Be = n('cHvH'),
        Me = n('mw9i')
      function _e(e, t) {
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
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Fe = L.a.e9f1fbcb,
        Re = u.createElement(s.a, null),
        He = Object(be.a)(function (e, t) {
          return Ne(Ne({}, t), Object(De.a)({ isWide: e }))
        }),
        Ge = function (e) {
          var t = e.TabBar,
            n = e.backLocation,
            r = e.behavioralEventViewType,
            a = e.entryConfiguration,
            c = e.fab,
            l = e.getTabLink,
            s = e.hasTabNavigation,
            p = e.history,
            b = e.initialFetchStatus,
            d = e.initialPageNamespace,
            m = e.logoButton,
            v = e.module,
            h = e.onBackClick,
            y = e.pageConfiguration,
            j = e.prerollDisplayLocation,
            P = e.renderEmptyState,
            C = e.renderUnavailable,
            I = e.rightControl,
            T = e.searchBoxRef,
            k = e.selectedTabId,
            x = e.sidebarContent,
            L = e.timelinePrefix,
            D = e.title,
            A = e.withAppLinks,
            B = e.withBottomLoginSignupBar,
            M = e.withDeferredView,
            _ = e.withOpenGraphMeta,
            N = e.withSearchBox,
            F = e.withTweetButton,
            H = u.useState(!0),
            G = i()(H, 2),
            U = G[0],
            K = G[1],
            Q = y || {},
            W = Q.header,
            V = Q.navBar,
            q = Q.subtitle,
            X = Q.title,
            z = b === f.a.LOADED ? X || D : '',
            Y = (function (e, t, n) {
              var r = (null == t ? void 0 : t.scribeConfig) || {},
                i = (r.entityToken, o()(r, ['entityToken'])),
                a = null == t ? void 0 : t.tabs,
                c = e || (null == a ? void 0 : a.initialTabId),
                l =
                  null == a
                    ? void 0
                    : a.tabs.find(function (e) {
                        return e.id === c
                      }),
                u = (null == l ? void 0 : l.scribeConfig) || {},
                s = (u.entityToken, o()(u, ['entityToken']))
              return Object(R.a)({}, n, i, s)
            })(k, y, d),
            $ = W ? u.createElement(S, { header: W, onHeaderVisible: K }) : null,
            ee = V
              ? u.createElement(Z, {
                  isHeaderOffscreen: !U,
                  navBar: V,
                  pageNamespace: Y,
                  withAppLinks: A,
                  withOpenGraphMeta: _,
                })
              : null,
            te = M ? g.a : u.Fragment,
            ne = u.createElement(Be.a, null, function (e) {
              var t = e.windowWidth >= w.a.theme.breakpoints.medium
              return u.createElement(
                u.Fragment,
                null,
                $,
                u.createElement(
                  te,
                  null,
                  u.createElement(ve, {
                    entryConfiguration: He(t, a),
                    initialModule: v,
                    prerollDisplayLocation: j,
                    renderEmptyState: P,
                    renderUnavailable: C,
                    selectedTabId: k,
                    timelinePrefix: L,
                    title: D,
                  }),
                ),
              )
            }),
            re = c ? u.createElement(O.a, { component: Me.a, fab: c }, ne) : ne,
            ie = l && s ? u.createElement(xe, { getTabLink: l, module: v, selectedTabId: k }) : void 0
          return u.createElement(
            E.b,
            { namespace: Y },
            u.createElement(
              J.a,
              { behavioralEventViewType: r },
              u.createElement(Le.a, {
                TabBar: t,
                backLocation: n,
                history: p,
                logoButton: m,
                onBackClick: h,
                primaryContent: re,
                rightControl: ee || I,
                searchBoxRef: T,
                secondaryBar: ie,
                sidebarContent: x,
                subtitle: q,
                title: $ && U ? D : z,
                withBottomLoginSignupBar: B,
                withSearchBox: N,
                withTweetButton: F,
              }),
            ),
          )
        }
      Ge.defaultProps = {
        entryConfiguration: y.b,
        renderEmptyState: function () {
          return u.createElement(Ae.a, { header: Fe })
        },
        sidebarContent: Re,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var Ue = h(Ge)
      t.a = Ue
    },
    doI8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        a = n('WpDa'),
        o = n('ZNT5')
      function c(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.b = function (e) {
        var t = e.endpointParams,
          n = e.endpointUrl,
          r = e.timelineId
        return Object(o.a)({
          timelineId: r,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var r = e.count,
              i = e.cursor
            return l(l({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: r, endpointUrl: n })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var u = function (e) {
        return Object(o.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var n = t.count,
              r = t.cursor
            return { cursor: 'string' == typeof r ? r : void 0, count: n, timelineId: e }
          },
          formatResponse: a.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    v84o: function (e, t, n) {
      'use strict'
      n('2G9S')
      var r = n('180P'),
        i = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          a = e.urtUrl,
          o = a.url,
          c = a.urtEndpointOptions || {},
          l = c.cacheId,
          u = c.requestParams
        return Object(i.b)({
          timelineId: l || ''.concat(n).concat(Object(r.a)(a)),
          endpointUrl: o,
          endpointParams: u || {},
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
