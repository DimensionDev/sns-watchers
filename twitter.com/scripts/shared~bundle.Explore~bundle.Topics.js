;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('TJCb'), n('7x/C'), n('DZ+c'), n('KOtZ'), n('0zG9'), n('KqXw'), n('Ysgh'), n('tQbP'), n('7xRU')
      var a = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return r(n, 0).toString()
        },
        r = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), a = t, r = 0; r < n.length; r++) {
            ;(a = (a << 5) - a + n.charCodeAt(r)), (a &= a)
          }
          return a
        }
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a)
      function i(e) {
        return null
      }
      var o = n('97Jx'),
        c = n.n(o),
        l = n('yiKp'),
        u = n.n(l),
        s = (n('jwue'), n('7x/C'), n('+oxZ'), n('3XMw')),
        p = n.n(s),
        d = n('/yvb'),
        f = n('fn9Y'),
        b = p.a.c0530da5,
        m = p.a.ifea3114
      var v = function (e) {
          return r.a.createElement(d.a, {
            accessibilityLabel: b,
            hoverLabel: { label: m },
            icon: r.a.createElement(f.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        h = 'share-button',
        g = 'share-by-tweet',
        y = n('m3Bd'),
        E = n.n(y),
        C = n('1YZw'),
        I = n('CaKu'),
        T = n('y+lG'),
        w = n('SrIh'),
        S = n('Irs7'),
        x = n('uDfI'),
        L = n('zCf4'),
        k = n('jwTb'),
        O = n('SOvA'),
        A = n('I/9y'),
        _ = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: k.a,
            text: p.a.fcc684a9,
            testID: g,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: O.a,
            text: p.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return I.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: A.a,
            text: p.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: f.a,
            text: p.a.if23a251,
          },
        },
        j = ['isAvailable', 'scribeAction']
      function B(e) {
        var t = Object(S.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(x.c)(),
              a = Object(L.f)()
            return r.a.useMemo(
              function () {
                return function (r) {
                  var i = _[r.type],
                    o = i.isAvailable,
                    c = i.scribeAction,
                    l = E()(i, j)
                  if (!o()) return null
                  var s = u()({}, l)
                  function p() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      l = u()(u()({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      s = { text: i, url: o },
                      p = { analytics: t, dispatch: n, history: a, mergedScribeNamespace: l }
                    !(function (e, t, n) {
                      var a = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return a(), void n.history.push(u()(u()({}, N(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            I.a.setString(Object(T.a)(t.url)),
                            a(),
                            void n.dispatch(Object(C.b)({ text: M.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            a(),
                            void n.history.push(
                              u()(
                                u()({ pathname: '/compose/tweet' }, N(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(T.a)(t.url) })
                            .then(a)
                            .catch(function () {
                              n.analytics.scribe(u()(u()({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(w.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, s, p)
                  }
                  return r.label && (s.text = r.label), u()(u()({}, s), {}, { onClick: p })
                }
              },
              [t, n, a, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var M = { copyLinkSuccessMessage: p.a.f88553c8, shareTextPrefixFormatter: p.a.gb5851d7 }
      function N(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? M.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var P = n('mN6z')
      var F = n('mjJ+'),
        D = n('rHpw'),
        H = { element: 'share' }
      function G(e) {
        var t = (function (e) {
            var t = r.a.useRef({ previous: void 0 })
            function n(e) {
              return (t.current.previous = e), e
            }
            var a = t.current.previous
            return a && (e === a || Object(P.a)(e, a)) ? a : n(e)
          })(u()(u()({}, H), e.scribeNamespace)),
          n = B(u()(u()({}, e), {}, { scribeNamespace: t })),
          a = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || R
        return r.a.createElement(o, {
          onPress: function () {
            var e = u()(u()({}, t), {}, { action: 'share_menu_click' })
            a.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? r.a.Children.forEach(e.children, function (e) {
                    if (r.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              r.a.createElement(F.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function R(e) {
        return r.a.createElement(v, c()({}, e, { style: U.button, testID: h }))
      }
      var U = D.a.create(function (e) {
          return { button: { marginRight: e.spaces.space4 } }
        }),
        K = ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel']
      function Q(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          a = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = E()(e, K)
        return r.a.createElement(
          G,
          c,
          r.a.createElement(i, { label: o, type: 'tweet' }),
          r.a.createElement(i, { label: n, type: 'dm' }),
          r.a.createElement(i, { label: t, type: 'copy' }),
          r.a.createElement(i, { label: a, type: 'via' }),
        )
      }
      ;(Q.Action = i), (Q.Custom = G)
      t.a = Q
    },
    UZjl: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('yiKp'),
        l = n.n(c),
        u = (n('hBpG'), n('7x/C'), n('ERkP')),
        s = n.n(u),
        p = n('es0u'),
        d = n('hqKg'),
        f = n('MDbM'),
        b = n('rxPX'),
        m = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        v = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        h = Object(d.createSelector)(m, v, function (e, t) {
          return t !== f.a.LOADED || (!!e && !!e.tabs)
        }),
        g = Object(b.a)()
          .propsFromState(function () {
            return { hasTabNavigation: h, pageConfiguration: m, initialFetchStatus: v }
          })
          .withAnalytics(),
        y = n('QIgh'),
        E = n('s14A'),
        C = n('dwig'),
        I = (n('uFXj'), n('7JQg')),
        T = n('rHpw'),
        w = n('GKOv'),
        S = n('Rp9C'),
        x = n('Irs7')
      function L(e, t) {
        var n = Object(x.b)(),
          a = t || {},
          r = a.component,
          i = a.element,
          o = s.a.useMemo(
            function () {
              return { items: [S.a.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          s.a.useEffect(
            function () {
              n.scribe({ component: r, element: i, action: 'impression', data: o })
            },
            [o, r, i, n],
          ),
          { namespace: { component: r, element: i }, data: o }
        )
      }
      var k = n('MWbm')
      function O(e) {
        var t = e.header,
          n = t.clientEventInfo,
          a = t.displayType,
          r = t.facepile,
          i = t.landingContext,
          o = t.topicId,
          c = e.onHeaderVisible,
          l = L(o, n),
          u = l.data,
          p = l.namespace
        return s.a.createElement(
          k.a,
          { style: A.root },
          s.a.createElement(
            I.c,
            { data: u, namespace: p },
            s.a.createElement(w.a, {
              displayType: a,
              facepile: r,
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
      var A = T.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        _ = n('3XMw'),
        j = n.n(_),
        B = (n('1t7P'), n('jQ/y'), n('ho0z'), n('zI2C')),
        M = n('v6aA'),
        N = n('Zejx'),
        P = function (e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return N.a.select(e, n)
        },
        F = Object(b.a)().propsFromState(function () {
          return { topic: P }
        }),
        D = n('PbbS'),
        H = n('LWCC'),
        G = n('IcAo'),
        R = n('rJoH'),
        U = n('I6Uj'),
        K = n('zfvc'),
        Q = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        V = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        J = j.a.ed88e742
      var W = T.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        q = F(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            n = e.isHeaderOffscreen,
            a = e.navBar.clientEventInfo,
            r = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            c = e.withOpenGraphMeta,
            l = s.a.useContext(M.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            u = L(t, a),
            p = u.data,
            d = u.namespace,
            f = Object(G.a)({}, r, d)
          return i
            ? s.a.createElement(
                I.c,
                { data: p, namespace: f },
                s.a.createElement(
                  s.a.Fragment,
                  null,
                  c
                    ? s.a.createElement(R.a, {
                        canonical: Q(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? s.a.createElement(B.a, { deepLink: V(t) }) : null,
                  s.a.createElement(
                    k.a,
                    { style: W.rightControl },
                    s.a.createElement(
                      k.a,
                      { style: W.followButtonContainer },
                      s.a.createElement(
                        K.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        s.a.createElement(H.a, { size: 'medium', textMode: D.a.FollowTopic, topic: i }),
                      ),
                    ),
                    l ? s.a.createElement(U.a, { copyLinkShareLabel: J, scribeNamespace: f, url: Q(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        z = n('yoO3'),
        Z = n('VrFO'),
        Y = n.n(Z),
        X = n('Y9Ll'),
        $ = n.n(X),
        ee = n('1Pcy'),
        te = n.n(ee),
        ne = n('5Yy7'),
        ae = n.n(ne),
        re = n('2VqO'),
        ie = n.n(re),
        oe = n('KEM+'),
        ce = n.n(oe),
        le = (n('2G9S'), n('v84o')),
        ue = n('0KEI'),
        se = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        pe = function (e, t) {
          var n = t.selectedTabId,
            a = se(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        de = Object(b.a)()
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
        fe = n('doI8'),
        be = n('oQhu'),
        me = n('fTQJ'),
        ve = ['entityToken'],
        he = de(
          (function (e) {
            ae()(n, e)
            var t = ie()(n)
            function n() {
              var e
              Y()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                ce()(te()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    n = t.analytics,
                    a = t.pageConfiguration,
                    r = t.selectedTab,
                    i = (null == r ? void 0 : r.scribeConfig) || (null == a ? void 0 : a.scribeConfig)
                  if (i) {
                    i.entityToken
                    return o()(i, ve)
                  }
                  return n.contextualScribeNamespace
                }),
                ce()(
                  te()(e),
                  '_getModule',
                  Object(be.a)(function (e, t, n, a) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(le.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: a })
                      if (null != e && e.graphQLTimelineId) return Object(fe.a)(e.graphQLTimelineId)
                    }
                    return n
                  }),
                ),
                ce()(te()(e), '_getRefreshIntervalSecForCurrentTab', function () {
                  var t,
                    n = e.props,
                    a = n.pageConfiguration,
                    r = n.selectedTab,
                    i = null == a || null === (t = a.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (r) return r.refreshIntervalSec
                  if (i) {
                    var o,
                      c =
                        null == a || null === (o = a.tabs) || void 0 === o
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
                      a = n.entryConfiguration,
                      r = n.initialModule,
                      i = n.pageConfiguration,
                      o = n.prerollDisplayLocation,
                      c = n.refreshControl,
                      l = n.renderEmptyState,
                      u = n.renderUnavailable,
                      p = n.selectedTab,
                      d = n.timelinePrefix,
                      f = n.title,
                      b = n.withoutHeadroom,
                      m = {
                        token: null == i || null === (e = i.scribeConfig) || void 0 === e ? void 0 : e.entityToken,
                      },
                      v = this._getModule(
                        p,
                        null == i || null === (t = i.tabs) || void 0 === t ? void 0 : t.initialTabId,
                        r,
                        d,
                      ),
                      h = this._getRefreshIntervalSecForCurrentTab(),
                      g = h ? 1e3 * h : void 0
                    return s.a.createElement(
                      I.c,
                      { namespace: this._getTimelineNamespace() },
                      s.a.createElement(me.a, {
                        behavioralEventContext: m,
                        entryConfiguration: a,
                        module: v,
                        pollingIntervalMsOverride: g,
                        prerollDisplayLocation: o,
                        refreshControl: c,
                        renderEmptyState: l,
                        renderUnavailable: u,
                        title: f,
                        withoutHeadroom: b,
                      }),
                    )
                  },
                },
              ]),
              n
            )
          })(s.a.Component),
        ),
        ge = (n('z84I'), n('+Kfv')),
        ye = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        Ee = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        Ce = function (e, t) {
          var n = t.selectedTabId,
            a = Ee(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        Ie = Object(b.a)()
          .propsFromState(function () {
            return { initialFetchStatus: ye, pageConfiguration: Ee, selectedTab: Ce }
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
        Te = n('Nhmk'),
        we = n('k/OQ'),
        Se = n('G8HL'),
        xe = ['entityToken'],
        Le = { viewType: 'controls' },
        ke = (function (e) {
          ae()(n, e)
          var t = ie()(n)
          function n() {
            var e
            Y()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              ce()(te()(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchInitial,
                  i = t.pageConfiguration,
                  o = i ? i.scribeConfig : void 0
                return r().then(function (t) {
                  t.performed && n.scribe(l()(l()({}, e._getScribeNamespace(o)), {}, { action: 'get_initial' }))
                }, a(Te.a))
              }),
              ce()(te()(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.getTabLink,
                  r = t.pageConfiguration,
                  i = t.selectedTab,
                  o = null == r ? void 0 : r.tabs
                if (o && o.tabs) {
                  var c,
                    l = (i && i.id) || o.initialTabId,
                    u = r ? r.scribeConfig : void 0,
                    p = o.tabs.map(function (t, r) {
                      var i,
                        o = t.id === l
                      return (
                        o && (c = r),
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
                          to: a(t.id),
                          token: null === (i = t.scribeConfig) || void 0 === i ? void 0 : i.entityToken,
                        }
                      )
                    })
                  return s.a.createElement(
                    ge.a,
                    { behavioralEventContext: Le },
                    s.a.createElement(we.a, { links: p, visibleItemIndex: c }),
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
                  return this.props.initialFetchStatus === f.a.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function (e, t) {
                  var n
                  return (
                    e && (n = e),
                    t && (n = l()(l()({}, n), t)),
                    l()(l()({}, n), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function (e) {
                  if (e) {
                    e.entityToken
                    return o()(e, xe)
                  }
                },
              },
            ]),
            n
          )
        })(s.a.Component),
        Oe = Ie(Object(Se.a)(ke)),
        Ae = n('VS6U'),
        _e = n('5Y9N'),
        je = n('FIs5'),
        Be = n('cHvH'),
        Me = n('mw9i'),
        Ne = ['entityToken'],
        Pe = ['entityToken'],
        Fe = j.a.e9f1fbcb,
        De = s.a.createElement(p.a, null),
        He = Object(be.a)(function (e, t) {
          return l()(l()({}, t), Object(_e.a)({ isWide: e }))
        }),
        Ge = function (e) {
          var t = e.TabBar,
            n = e.backLocation,
            a = e.behavioralEventViewType,
            i = e.documentTitle,
            c = e.entryConfiguration,
            l = e.fab,
            u = e.getTabLink,
            p = e.hasTabNavigation,
            d = e.history,
            b = e.initialFetchStatus,
            m = e.initialPageNamespace,
            v = e.logoButton,
            h = e.module,
            g = e.onBackClick,
            y = e.pageConfiguration,
            w = e.prerollDisplayLocation,
            S = e.renderEmptyState,
            x = e.renderUnavailable,
            L = e.rightControl,
            k = e.searchBoxRef,
            A = e.selectedTabId,
            _ = e.sidebarContent,
            j = e.timelinePrefix,
            B = e.title,
            M = e.withAppLinks,
            N = e.withBottomLoginSignupBar,
            P = e.withDeferredView,
            F = e.withOpenGraphMeta,
            D = e.withSearchBox,
            H = e.withTweetButton,
            R = s.a.useState(!0),
            U = r()(R, 2),
            K = U[0],
            Q = U[1],
            V = y || {},
            J = V.header,
            W = V.navBar,
            Z = V.subtitle,
            Y = V.title,
            X = b === f.a.LOADED ? Y || B : '',
            $ = (function (e, t, n) {
              var a = (null == t ? void 0 : t.scribeConfig) || {},
                r = (a.entityToken, o()(a, Ne)),
                i = null == t ? void 0 : t.tabs,
                c = e || (null == i ? void 0 : i.initialTabId),
                l =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === c
                      }),
                u = (null == l ? void 0 : l.scribeConfig) || {},
                s = (u.entityToken, o()(u, Pe))
              return Object(G.a)({}, n, r, s)
            })(A, y, m),
            ee = J ? s.a.createElement(O, { header: J, onHeaderVisible: Q }) : null,
            te = W
              ? s.a.createElement(q, {
                  isHeaderOffscreen: !K,
                  navBar: W,
                  pageNamespace: $,
                  withAppLinks: M,
                  withOpenGraphMeta: F,
                })
              : null,
            ne = P ? E.a : s.a.Fragment,
            ae = s.a.createElement(Be.a, null, function (e) {
              var t = e.windowWidth >= T.a.theme.breakpoints.medium
              return s.a.createElement(
                s.a.Fragment,
                null,
                ee,
                s.a.createElement(
                  ne,
                  null,
                  s.a.createElement(he, {
                    entryConfiguration: He(t, c),
                    initialModule: h,
                    prerollDisplayLocation: w,
                    renderEmptyState: S,
                    renderUnavailable: x,
                    selectedTabId: A,
                    timelinePrefix: j,
                    title: B,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            re = l ? s.a.createElement(C.a, { component: Me.a, fab: l }, ae) : ae,
            ie = u && p ? s.a.createElement(Oe, { getTabLink: u, module: h, selectedTabId: A }) : void 0
          return s.a.createElement(
            I.c,
            { namespace: $ },
            s.a.createElement(
              z.a,
              { behavioralEventViewType: a },
              s.a.createElement(Ae.a, {
                TabBar: t,
                backLocation: n,
                documentTitle: i,
                history: d,
                logoButton: v,
                onBackClick: g,
                primaryContent: re,
                rightControl: te || L,
                searchBoxRef: k,
                secondaryBar: ie,
                sidebarContent: _,
                subtitle: Z,
                title: ee && K ? B : X,
                withBottomLoginSignupBar: N,
                withSearchBox: D,
                withTweetButton: H,
              }),
            ),
          )
        }
      Ge.defaultProps = {
        entryConfiguration: y.b,
        renderEmptyState: function () {
          return s.a.createElement(je.a, { header: Fe })
        },
        sidebarContent: De,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var Re = g(Ge)
      t.a = Re
    },
    doI8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('WpDa'),
        o = n('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          n = e.endpointUrl,
          a = e.timelineId
        return Object(o.a)({
          timelineId: a,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var a = e.count,
              i = e.cursor
            return r()(r()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: a, endpointUrl: n })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var c = function (e) {
        return Object(o.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var n = t.count,
              a = t.cursor
            return { cursor: 'string' == typeof a ? a : void 0, count: n, timelineId: e }
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
      var a = n('180P'),
        r = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          c = i.urtEndpointOptions || {},
          l = c.cacheId,
          u = c.requestParams
        return Object(r.b)({
          timelineId: l || ''.concat(n).concat(Object(a.a)(i)),
          endpointUrl: o,
          endpointParams: u || {},
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
