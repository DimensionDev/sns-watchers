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
      var r = n('ERkP'),
        a = n.n(r)
      function i(e) {
        return null
      }
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var o = n('97Jx'),
        c = n.n(o),
        l = n('KEM+'),
        u = n.n(l),
        s = (n('jwue'), n('+oxZ'), n('3XMw')),
        p = n.n(s),
        f = n('/yvb'),
        b = n('fn9Y'),
        d = p.a.c0530da5,
        m = p.a.ifea3114
      var v = function (e) {
          return a.a.createElement(f.a, {
            accessibilityLabel: d,
            hoverLabel: { label: m },
            icon: a.a.createElement(b.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        h = 'share-button',
        y = 'share-by-tweet',
        g = n('m3Bd'),
        O = n.n(g),
        E = n('1YZw'),
        w = n('CaKu'),
        j = n('y+lG'),
        P = n('SrIh'),
        C = n('RqPI'),
        I = n('Irs7'),
        T = n('uDfI'),
        S = n('Ty5D'),
        k = n('yUQf'),
        x = n('jwTb'),
        L = n('SOvA'),
        D = n('I/9y'),
        A = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: x.a,
            text: p.a.fcc684a9,
            testID: y,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: L.a,
            text: p.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return w.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: D.a,
            text: p.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: b.a,
            text: p.a.if23a251,
          },
        }
      function B(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function _(e) {
        var t = Object(I.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(T.c)(),
              r = Object(S.g)(),
              i = Object(k.a)(C.v)
            return a.a.useMemo(
              function () {
                return function (a) {
                  var o = A[a.type],
                    c = o.isAvailable,
                    l = o.scribeAction,
                    u = O()(o, ['isAvailable', 'scribeAction'])
                  if (!c()) return null
                  var s = M({}, u)
                  function p() {
                    var o = a.shareText || e.shareText,
                      c = e.url,
                      u = M(M({}, e.scribeNamespace), {}, { action: l }, a.scribeNamespace),
                      s = { text: o, url: c },
                      p = { analytics: t, dispatch: n, history: r, mergedScribeNamespace: u, sessionToken: i }
                    !(function (e, t, n) {
                      var r = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return r(), void n.history.push(M(M({}, F(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            w.a.setString(Object(j.a)(t.url, n.sessionToken)),
                            r(),
                            void n.dispatch(Object(E.b)({ text: N.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            r(),
                            void n.history.push(
                              M(
                                M({ pathname: '/compose/tweet' }, F(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(j.a)(t.url, n.sessionToken) })
                            .then(r)
                            .catch(function () {
                              n.analytics.scribe(M(M({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(P.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(a.type, s, p)
                  }
                  return a.label && (s.text = a.label), M(M({}, s), {}, { onClick: p })
                }
              },
              [t, n, r, i, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var N = { copyLinkSuccessMessage: p.a.f88553c8, shareTextPrefixFormatter: p.a.gb5851d7 }
      function F(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? N.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var R = n('T0aG'),
        H = n.n(R),
        G = n('mN6z')
      var U = n('mjJ+'),
        K = n('rHpw')
      function Q(e, t) {
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
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var V = { element: 'share' }
      function Z(e) {
        var t = (function (e) {
            var t = a.a.useRef({ previous: void 0 })
            if ('object' !== H()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var r = t.current.previous
            return r && (e === r || Object(G.a)(e, r)) ? r : n()
          })(W(W({}, V), e.scribeNamespace)),
          n = _(W(W({}, e), {}, { scribeNamespace: t })),
          r = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || J
        return a.a.createElement(o, {
          onPress: function () {
            var e = W(W({}, t), {}, { action: 'share_menu_click' })
            r.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? a.a.Children.forEach(e.children, function (e) {
                    if (a.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              a.a.createElement(U.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function J(e) {
        return a.a.createElement(v, c()({}, e, { style: q.button, testID: h }))
      }
      var q = K.a.create(function (e) {
        return { button: { marginRight: e.spaces.space4 } }
      })
      function X(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          r = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = O()(e, ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel'])
        return a.a.createElement(
          Z,
          c,
          a.a.createElement(i, { label: o, type: 'tweet' }),
          a.a.createElement(i, { label: n, type: 'dm' }),
          a.a.createElement(i, { label: t, type: 'copy' }),
          a.a.createElement(i, { label: r, type: 'via' }),
        )
      }
      ;(X.Action = i), (X.Custom = Z)
      t.a = X
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
        s = n.n(u),
        p = n('es0u'),
        f = n('hqKg'),
        b = n('MDbM'),
        d = n('rxPX'),
        m = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        v = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        h = Object(f.createSelector)(m, v, function (e, t) {
          return t !== b.a.LOADED || (!!e && !!e.tabs)
        }),
        y = Object(d.a)()
          .propsFromState(function () {
            return { hasTabNavigation: h, pageConfiguration: m, initialFetchStatus: v }
          })
          .withAnalytics(),
        g = n('QIgh'),
        O = n('s14A'),
        E = n('dwig'),
        w = (n('uFXj'), n('7JQg')),
        j = n('rHpw'),
        P = n('GKOv'),
        C = n('Rp9C'),
        I = n('Irs7')
      function T(e, t) {
        var n = Object(I.b)(),
          r = t || {},
          a = r.component,
          i = r.element,
          o = { items: [C.a.forTopic(e, t)] }
        return (
          s.a.useEffect(
            function () {
              n.scribe({ component: a, element: i, action: 'impression', data: o })
            },
            [o, a, i, n],
          ),
          { namespace: { component: a, element: i }, data: o }
        )
      }
      var S = n('MWbm')
      function k(e) {
        var t = e.header,
          n = t.clientEventInfo,
          r = t.displayType,
          a = t.facepile,
          i = t.landingContext,
          o = t.topicId,
          c = e.onHeaderVisible,
          l = T(o, n),
          u = l.data,
          p = l.namespace
        return s.a.createElement(
          S.a,
          { style: x.root },
          s.a.createElement(
            w.b,
            { data: u, namespace: p },
            s.a.createElement(P.a, {
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
      var x = j.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        L = n('3XMw'),
        D = n.n(L),
        A = (n('jQ/y'), n('ho0z'), n('zI2C')),
        B = n('v6aA'),
        M = n('Zejx'),
        _ = function (e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return M.a.select(e, n)
        },
        N = Object(d.a)().propsFromState(function () {
          return { topic: _ }
        }),
        F = n('PbbS'),
        R = n('LWCC'),
        H = n('IcAo'),
        G = n('rJoH'),
        U = n('I6Uj'),
        K = n('zfvc'),
        Q = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        W = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        V = D.a.ed88e742
      var Z = j.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        J = N(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            n = e.isHeaderOffscreen,
            r = e.navBar.clientEventInfo,
            a = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            c = e.withOpenGraphMeta,
            l = s.a.useContext(B.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            u = T(t, r),
            p = u.data,
            f = u.namespace,
            b = Object(H.a)({}, a, f)
          return i
            ? s.a.createElement(
                w.b,
                { data: p, namespace: b },
                s.a.createElement(
                  s.a.Fragment,
                  null,
                  c
                    ? s.a.createElement(G.a, {
                        canonical: Q(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? s.a.createElement(A.a, { deepLink: W(t) }) : null,
                  s.a.createElement(
                    S.a,
                    { style: Z.rightControl },
                    s.a.createElement(
                      S.a,
                      { style: Z.followButtonContainer },
                      s.a.createElement(
                        K.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        s.a.createElement(R.a, { size: 'medium', textMode: F.a.FollowTopic, topic: i }),
                      ),
                    ),
                    l ? s.a.createElement(U.a, { copyLinkShareLabel: V, scribeNamespace: b, url: Q(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        q = n('yoO3'),
        X = (n('OZaJ'), n('VrFO')),
        z = n.n(X),
        Y = n('Y9Ll'),
        $ = n.n(Y),
        ee = n('1Pcy'),
        te = n.n(ee),
        ne = n('5Yy7'),
        re = n.n(ne),
        ae = n('N+ot'),
        ie = n.n(ae),
        oe = n('AuHH'),
        ce = n.n(oe),
        le = (n('2G9S'), n('v84o')),
        ue = n('0KEI'),
        se = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        pe = function (e, t) {
          var n = t.selectedTabId,
            r = se(e, t)
          return (
            r &&
            r.tabs &&
            r.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        fe = Object(d.a)()
          .propsFromState(function () {
            return { pageConfiguration: se, selectedTab: pe }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
            }
          })
          .withAnalytics(),
        be = n('doI8'),
        de = n('oQhu'),
        me = n('fTQJ')
      function ve(e) {
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
            r = ce()(e)
          if (t) {
            var a = ce()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return ie()(this, n)
        }
      }
      var he = fe(
          (function (e) {
            re()(n, e)
            var t = ve(n)
            function n() {
              var e
              z()(this, n)
              for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                l()(te()(e), '_getTimelineNamespace', function () {
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
                  te()(e),
                  '_getModule',
                  Object(de.a)(function (e, t, n, r) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(le.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: r })
                      if (null != e && e.graphQLTimelineId) return Object(be.a)(e.graphQLTimelineId)
                    }
                    return n
                  }),
                ),
                l()(te()(e), '_getRefreshIntervalSecForCurrentTab', function () {
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
              $()(n, [
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
                      u = n.renderUnavailable,
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
                    return s.a.createElement(
                      w.b,
                      { namespace: this._getTimelineNamespace() },
                      s.a.createElement(me.a, {
                        behavioralEventContext: d,
                        entryConfiguration: r,
                        module: m,
                        pollingIntervalMsOverride: h,
                        prerollDisplayLocation: o,
                        refreshControl: c,
                        renderEmptyState: l,
                        renderUnavailable: u,
                        title: b,
                      }),
                    )
                  },
                },
              ]),
              n
            )
          })(s.a.Component),
        ),
        ye = (n('z84I'), n('+Kfv')),
        ge = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        Oe = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        Ee = function (e, t) {
          var n = t.selectedTabId,
            r = Oe(e, t)
          return (
            r &&
            r.tabs &&
            r.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        we = Object(d.a)()
          .propsFromState(function () {
            return { initialFetchStatus: ge, pageConfiguration: Oe, selectedTab: Ee }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
              fetchInitial: t.fetchInitial,
            }
          })
          .withAnalytics(),
        je = n('Nhmk'),
        Pe = n('k/OQ'),
        Ce = n('G8HL')
      function Ie(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ie(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ie(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Se(e) {
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
            r = ce()(e)
          if (t) {
            var a = ce()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return ie()(this, n)
        }
      }
      var ke = 'controls',
        xe = (function (e) {
          re()(n, e)
          var t = Se(n)
          function n() {
            var e
            z()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              l()(te()(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchInitial,
                  i = t.pageConfiguration,
                  o = i ? i.scribeConfig : void 0
                return a().then(function (t) {
                  t.performed && n.scribe(Te(Te({}, e._getScribeNamespace(o)), {}, { action: 'get_initial' }))
                }, r(je.a))
              }),
              l()(te()(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.getTabLink,
                  a = t.pageConfiguration,
                  i = t.selectedTab,
                  o = null == a ? void 0 : a.tabs
                if (o && o.tabs) {
                  var c,
                    l = (i && i.id) || o.initialTabId,
                    u = a ? a.scribeConfig : void 0,
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
                              e._buildTabNamespace(e._getScribeNamespace(u), e._getScribeNamespace(t.scribeConfig)),
                            )
                          },
                          to: r(t.id),
                          token: null === (i = t.scribeConfig) || void 0 === i ? void 0 : i.entityToken,
                        }
                      )
                    })
                  return s.a.createElement(
                    ye.a,
                    { viewType: ke },
                    s.a.createElement(Pe.a, { links: p, visibleItemIndex: c }),
                  )
                }
                return null
              }),
              e
            )
          }
          return (
            $()(n, [
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
                  return this.props.initialFetchStatus === b.a.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function (e, t) {
                  var n
                  return (
                    e && (n = e), t && (n = Te(Te({}, n), t)), Te(Te({}, n), {}, { element: 'tab', action: 'navigate' })
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
        })(s.a.Component),
        Le = we(Object(Ce.a)(xe)),
        De = n('VS6U'),
        Ae = n('5Y9N'),
        Be = n('FIs5'),
        Me = n('cHvH'),
        _e = n('mw9i')
      function Ne(e, t) {
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
      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ne(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ne(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Re = D.a.e9f1fbcb,
        He = s.a.createElement(p.a, null),
        Ge = Object(de.a)(function (e, t) {
          return Fe(Fe({}, t), Object(Ae.a)({ isWide: e }))
        }),
        Ue = function (e) {
          var t = e.TabBar,
            n = e.backLocation,
            r = e.behavioralEventViewType,
            i = e.entryConfiguration,
            c = e.fab,
            l = e.getTabLink,
            u = e.hasTabNavigation,
            p = e.history,
            f = e.initialFetchStatus,
            d = e.initialPageNamespace,
            m = e.logoButton,
            v = e.module,
            h = e.onBackClick,
            y = e.pageConfiguration,
            g = e.prerollDisplayLocation,
            P = e.renderEmptyState,
            C = e.renderUnavailable,
            I = e.rightControl,
            T = e.searchBoxRef,
            S = e.selectedTabId,
            x = e.sidebarContent,
            L = e.timelinePrefix,
            D = e.title,
            A = e.withAppLinks,
            B = e.withBottomLoginSignupBar,
            M = e.withDeferredView,
            _ = e.withOpenGraphMeta,
            N = e.withSearchBox,
            F = e.withTweetButton,
            R = s.a.useState(!0),
            G = a()(R, 2),
            U = G[0],
            K = G[1],
            Q = y || {},
            W = Q.header,
            V = Q.navBar,
            Z = Q.subtitle,
            X = Q.title,
            z = f === b.a.LOADED ? X || D : '',
            Y = (function (e, t, n) {
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
              return Object(H.a)({}, n, a, s)
            })(S, y, d),
            $ = W ? s.a.createElement(k, { header: W, onHeaderVisible: K }) : null,
            ee = V
              ? s.a.createElement(J, {
                  isHeaderOffscreen: !U,
                  navBar: V,
                  pageNamespace: Y,
                  withAppLinks: A,
                  withOpenGraphMeta: _,
                })
              : null,
            te = M ? O.a : s.a.Fragment,
            ne = s.a.createElement(Me.a, null, function (e) {
              var t = e.windowWidth >= j.a.theme.breakpoints.medium
              return s.a.createElement(
                s.a.Fragment,
                null,
                $,
                s.a.createElement(
                  te,
                  null,
                  s.a.createElement(he, {
                    entryConfiguration: Ge(t, i),
                    initialModule: v,
                    prerollDisplayLocation: g,
                    renderEmptyState: P,
                    renderUnavailable: C,
                    selectedTabId: S,
                    timelinePrefix: L,
                    title: D,
                  }),
                ),
              )
            }),
            re = c ? s.a.createElement(E.a, { component: _e.a, fab: c }, ne) : ne,
            ae = l && u ? s.a.createElement(Le, { getTabLink: l, module: v, selectedTabId: S }) : void 0
          return s.a.createElement(
            w.b,
            { namespace: Y },
            s.a.createElement(
              q.a,
              { behavioralEventViewType: r },
              s.a.createElement(De.a, {
                TabBar: t,
                backLocation: n,
                history: p,
                logoButton: m,
                onBackClick: h,
                primaryContent: re,
                rightControl: ee || I,
                searchBoxRef: T,
                secondaryBar: ae,
                sidebarContent: x,
                subtitle: Z,
                title: $ && U ? D : z,
                withBottomLoginSignupBar: B,
                withSearchBox: N,
                withTweetButton: F,
              }),
            ),
          )
        }
      Ue.defaultProps = {
        entryConfiguration: g.b,
        renderEmptyState: function () {
          return s.a.createElement(Be.a, { header: Re })
        },
        sidebarContent: He,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var Ke = y(Ue)
      t.a = Ke
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
