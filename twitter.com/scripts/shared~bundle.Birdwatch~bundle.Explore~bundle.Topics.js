;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
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
          return a(n, 0).toString()
        },
        a = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), r = t, a = 0; a < n.length; a++) {
            ;(r = (r << 5) - r + n.charCodeAt(a)), (r &= r)
          }
          return r
        }
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var r = n('ERkP')
      function a(e) {
        return null
      }
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var i = n('97Jx'),
        o = n.n(i),
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
        w = n('CaKu')
      n('Cm4o'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP')
      function E(e) {
        var t = new URL(e, 'https://twitter.com')
        return t.searchParams.has('s') || t.searchParams.set('s', '20'), t.href
      }
      var j = n('SrIh'),
        P = n('Irs7'),
        C = n('uDfI'),
        I = n('Ty5D'),
        T = n('jwTb'),
        S = n('SOvA'),
        x = n('I/9y'),
        k = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: T.a,
            text: s.a.fcc684a9,
            testID: h,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: S.a,
            text: s.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return w.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: x.a,
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
      function L(e, t) {
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
            ? L(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function A(e) {
        var t = Object(P.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(C.c)(),
              a = Object(I.g)()
            return r.useMemo(
              function () {
                return function (r) {
                  var i = k[r.type],
                    o = i.isAvailable,
                    c = i.scribeAction,
                    l = g()(i, ['isAvailable', 'scribeAction'])
                  if (!o()) return null
                  var u = D({}, l)
                  function s() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      l = D(D({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      u = { text: i, url: o },
                      s = { analytics: t, dispatch: n, history: a, mergedScribeNamespace: l }
                    !(function (e, t, n) {
                      var r = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return r(), void n.history.push(D(D({}, M(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            w.a.setString(E(t.url)),
                            r(),
                            void n.dispatch(Object(O.b)({ text: B.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            r(),
                            void n.history.push(
                              D(
                                D({ pathname: '/compose/tweet' }, M(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: E(t.url) })
                            .then(r)
                            .catch(function () {
                              n.analytics.scribe(D(D({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(j.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, u, s)
                  }
                  return r.label && (u.text = r.label), D(D({}, u), {}, { onClick: s })
                }
              },
              [t, n, a, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var B = { copyLinkSuccessMessage: s.a.f88553c8, shareTextPrefixFormatter: s.a.gb5851d7 }
      function M(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? B.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var _ = n('T0aG'),
        N = n.n(_),
        F = n('mN6z')
      var R = n('mjJ+'),
        H = n('rHpw')
      function G(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var K = { element: 'share' }
      function W(e) {
        var t = (function (e) {
            var t = r.useRef({ previous: void 0 })
            if ('object' !== N()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var a = t.current.previous
            return a && (e === a || Object(F.a)(e, a)) ? a : n()
          })(U(U({}, K), e.scribeNamespace)),
          n = A(U(U({}, e), {}, { scribeNamespace: t })),
          a = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || Q
        return r.createElement(o, {
          onPress: function () {
            var e = U(U({}, t), {}, { action: 'share_menu_click' })
            a.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? r.Children.forEach(e.children, function (e) {
                    if (r.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              r.createElement(R.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function Q(e) {
        return r.createElement(m, o()({}, e, { style: V.button, testID: v }))
      }
      var V = H.a.create(function (e) {
        return { button: { marginRight: e.spaces.space4 } }
      })
      function Z(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          i = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = g()(e, ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel'])
        return r.createElement(
          W,
          c,
          r.createElement(a, { label: o, type: 'tweet' }),
          r.createElement(a, { label: n, type: 'dm' }),
          r.createElement(a, { label: t, type: 'copy' }),
          r.createElement(a, { label: i, type: 'via' }),
        )
      }
      ;(Z.Action = a), (Z.Custom = W)
      t.a = Z
    },
    UZjl: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
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
        w = (n('uFXj'), n('7JQg')),
        E = n('rHpw'),
        j = n('GKOv'),
        P = n('Rp9C'),
        C = n('Irs7')
      function I(e, t) {
        var n = Object(C.b)(),
          r = t || {},
          a = r.component,
          i = r.element,
          o = { items: [P.a.forTopic(e, t)] }
        return (
          u.useEffect(
            function () {
              n.scribe({ component: a, element: i, action: 'impression', data: o })
            },
            [o, a, i, n],
          ),
          { namespace: { component: a, element: i }, data: o }
        )
      }
      var T = n('MWbm')
      function S(e) {
        var t = e.header,
          n = t.clientEventInfo,
          r = t.displayType,
          a = t.facepile,
          i = t.landingContext,
          o = t.topicId,
          c = e.onHeaderVisible,
          l = I(o, n),
          s = l.data,
          p = l.namespace
        return u.createElement(
          T.a,
          { style: x.root },
          u.createElement(
            w.b,
            { data: s, namespace: p },
            u.createElement(j.a, {
              displayType: r,
              facepile: a,
              onFollowHeaderOffscreen: function (e) {
                var t = e.isOffscreen
                return c(!t)
              },
              topicId: o,
              topicLandingContext: i,
              withDivider: !0,
            }),
          ),
        )
      }
      var x = E.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        k = n('3XMw'),
        L = n.n(k),
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
        W = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        Q = L.a.ed88e742
      var V = E.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        Z = _(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            n = e.isHeaderOffscreen,
            r = e.navBar.clientEventInfo,
            a = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            c = e.withOpenGraphMeta,
            l = u.useContext(A.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            s = I(t, r),
            p = s.data,
            f = s.namespace,
            b = Object(R.a)({}, a, f)
          return i
            ? u.createElement(
                w.b,
                { data: p, namespace: b },
                u.createElement(
                  u.Fragment,
                  null,
                  c
                    ? u.createElement(H.a, {
                        canonical: K(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? u.createElement(D.a, { deepLink: W(t) }) : null,
                  u.createElement(
                    T.a,
                    { style: V.rightControl },
                    u.createElement(
                      T.a,
                      { style: V.followButtonContainer },
                      u.createElement(
                        U.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        u.createElement(F.a, { size: 'medium', textMode: N.a.FollowTopic, topic: i }),
                      ),
                    ),
                    l ? u.createElement(G.a, { copyLinkShareLabel: Q, scribeNamespace: b, url: K(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        J = n('yoO3'),
        X = (n('OZaJ'), n('VrFO')),
        q = n.n(X),
        Y = n('Y9Ll'),
        z = n.n(Y),
        $ = n('1Pcy'),
        ee = n.n($),
        te = n('5Yy7'),
        ne = n.n(te),
        re = n('N+ot'),
        ae = n.n(re),
        ie = n('AuHH'),
        oe = n.n(ie),
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
            var a = oe()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return ae()(this, n)
        }
      }
      var ve = pe(
          (function (e) {
            ne()(n, e)
            var t = me(n)
            function n() {
              var e
              q()(this, n)
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                l()(ee()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    n = t.analytics,
                    r = t.pageConfiguration,
                    a = t.selectedTab,
                    i = (null == a ? void 0 : a.scribeConfig) || (null == r ? void 0 : r.scribeConfig)
                  if (i) {
                    i.entityToken
                    return o()(i, ['entityToken'])
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
                    a = n.selectedTab,
                    i = null == r || null === (t = r.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (a) return a.refreshIntervalSec
                  if (i) {
                    var o,
                      c =
                        null == r || null === (o = r.tabs) || void 0 === o
                          ? void 0
                          : o.tabs.find(function (e) {
                              return i === e.id
                            })
                    return null == c ? void 0 : c.refreshIntervalSec
                  }
                }),
                e
              )
            }
            return (
              z()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      r = n.entryConfiguration,
                      a = n.initialModule,
                      i = n.pageConfiguration,
                      o = n.prerollDisplayLocation,
                      c = n.refreshControl,
                      l = n.renderEmptyState,
                      s = n.renderUnavailable,
                      p = n.selectedTab,
                      f = n.timelinePrefix,
                      b = n.title,
                      d = {
                        token: null == i || null === (e = i.scribeConfig) || void 0 === e ? void 0 : e.entityToken,
                      },
                      m = this._getModule(
                        p,
                        null == i || null === (t = i.tabs) || void 0 === t ? void 0 : t.initialTabId,
                        a,
                        f,
                      ),
                      v = this._getRefreshIntervalSecForCurrentTab(),
                      h = v ? 1e3 * v : void 0
                    return u.createElement(
                      w.b,
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
        we = Object(b.a)()
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
        Ee = n('Nhmk'),
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
            var a = oe()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return ae()(this, n)
        }
      }
      var Se = 'controls',
        xe = (function (e) {
          ne()(n, e)
          var t = Te(n)
          function n() {
            var e
            q()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              l()(ee()(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchInitial,
                  i = t.pageConfiguration,
                  o = i ? i.scribeConfig : void 0
                return a().then(function (t) {
                  t.performed && n.scribe(Ie(Ie({}, e._getScribeNamespace(o)), {}, { action: 'get_initial' }))
                }, r(Ee.a))
              }),
              l()(ee()(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.getTabLink,
                  a = t.pageConfiguration,
                  i = t.selectedTab,
                  o = null == a ? void 0 : a.tabs
                if (o && o.tabs) {
                  var c,
                    l = (i && i.id) || o.initialTabId,
                    s = a ? a.scribeConfig : void 0,
                    p = o.tabs.map(function (t, a) {
                      var i,
                        o = t.id === l
                      return (
                        o && (c = a),
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
                          token: null === (i = t.scribeConfig) || void 0 === i ? void 0 : i.entityToken,
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
            z()(n, [
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
        ke = we(Object(Pe.a)(xe)),
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
            i = e.entryConfiguration,
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
            x = e.selectedTabId,
            k = e.sidebarContent,
            L = e.timelinePrefix,
            D = e.title,
            A = e.withAppLinks,
            B = e.withBottomLoginSignupBar,
            M = e.withDeferredView,
            _ = e.withOpenGraphMeta,
            N = e.withSearchBox,
            F = e.withTweetButton,
            H = u.useState(!0),
            G = a()(H, 2),
            U = G[0],
            K = G[1],
            W = y || {},
            Q = W.header,
            V = W.navBar,
            X = W.subtitle,
            q = W.title,
            Y = b === f.a.LOADED ? q || D : '',
            z = (function (e, t, n) {
              var r = (null == t ? void 0 : t.scribeConfig) || {},
                a = (r.entityToken, o()(r, ['entityToken'])),
                i = null == t ? void 0 : t.tabs,
                c = e || (null == i ? void 0 : i.initialTabId),
                l =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === c
                      }),
                u = (null == l ? void 0 : l.scribeConfig) || {},
                s = (u.entityToken, o()(u, ['entityToken']))
              return Object(R.a)({}, n, a, s)
            })(x, y, d),
            $ = Q ? u.createElement(S, { header: Q, onHeaderVisible: K }) : null,
            ee = V
              ? u.createElement(Z, {
                  isHeaderOffscreen: !U,
                  navBar: V,
                  pageNamespace: z,
                  withAppLinks: A,
                  withOpenGraphMeta: _,
                })
              : null,
            te = M ? g.a : u.Fragment,
            ne = u.createElement(Be.a, null, function (e) {
              var t = e.windowWidth >= E.a.theme.breakpoints.medium
              return u.createElement(
                u.Fragment,
                null,
                $,
                u.createElement(
                  te,
                  null,
                  u.createElement(ve, {
                    entryConfiguration: He(t, i),
                    initialModule: v,
                    prerollDisplayLocation: j,
                    renderEmptyState: P,
                    renderUnavailable: C,
                    selectedTabId: x,
                    timelinePrefix: L,
                    title: D,
                  }),
                ),
              )
            }),
            re = c ? u.createElement(O.a, { component: Me.a, fab: c }, ne) : ne,
            ae = l && s ? u.createElement(ke, { getTabLink: l, module: v, selectedTabId: x }) : void 0
          return u.createElement(
            w.b,
            { namespace: z },
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
                secondaryBar: ae,
                sidebarContent: k,
                subtitle: X,
                title: $ && U ? D : Y,
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
        a = n.n(r),
        i = n('WpDa'),
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
                a()(e, t, n[t])
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
              a = e.cursor
            return l(l({}, t), {}, { cursor: 'string' == typeof a ? a : void 0, count: r, endpointUrl: n })
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
          formatResponse: i.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    v84o: function (e, t, n) {
      'use strict'
      n('2G9S')
      var r = n('180P'),
        a = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          c = i.urtEndpointOptions || {},
          l = c.cacheId,
          u = c.requestParams
        return Object(a.b)({
          timelineId: l || ''.concat(n).concat(Object(r.a)(i)),
          endpointUrl: o,
          endpointParams: u || {},
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
