'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['shared~bundle.Explore~bundle.Topics'],
  {
    517847: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return Le
        },
      })
      var r = n(196234),
        i = n(133028),
        a = n(459740),
        o = (n(449228), n(358188), n(202784)),
        l = n(241441),
        c = n(108352),
        u = n(854044),
        s = n(973186),
        d = n(473228),
        p = n.n(d),
        f = n(16587),
        m = n(28412),
        b = n(133252),
        h = n(612969),
        v = n(509082),
        g = n(543467),
        Z = n(845855),
        C = n(878149),
        y = n(963705),
        E = n(709249),
        T = n(887371),
        w = n(580753),
        k = n(545754),
        I = n(486906),
        S = n(256666),
        _ = (n(818178), n(543450), n(296797)),
        L = n(272985),
        B = n(33988),
        F = n(923335),
        M = n(392160),
        x = function x(e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        A = function A(e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        N = function N(e, t) {
          var n = t.selectedTabId,
            r = A(e, t)
          return (
            r &&
            r.tabs &&
            r.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        }
      var D = (0, M.Z)()
        .propsFromState(function () {
          return { initialFetchStatus: x, pageConfiguration: A, selectedTab: N }
        })
        .propsFromActions(function (e) {
          var t = e.module
          return {
            createLocalApiErrorHandler: (0, F.createLocalApiErrorHandlerWithContextFactory)('RICH_SEGMENTED_TIMELINE'),
            fetchInitial: t.fetchInitial,
          }
        })
        .withAnalytics()
      var P = ['entityToken'],
        O = (function (e) {
          ;(0, k.Z)(n, e)
          var t = (0, I.Z)(n)
          function n() {
            var e
            ;(0, E.Z)(this, n)
            for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) {
              a[l] = arguments[l]
            }
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, S.Z)((0, w.Z)(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchInitial,
                  o = t.pageConfiguration,
                  l = o ? o.scribeConfig : void 0
                return a().then(function (t) {
                  t.performed &&
                    n.scribe((0, i.Z)((0, i.Z)({}, e._getScribeNamespace(l)), {}, { action: 'get_initial' }))
                }, r(L.M))
              }),
              (0, S.Z)((0, w.Z)(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.getTabLink,
                  i = t.pageConfiguration,
                  a = t.selectedTab,
                  l = null == i ? void 0 : i.tabs
                if (l && l.tabs) {
                  var c,
                    u = (a && a.id) || l.initialTabId,
                    s = i ? i.scribeConfig : void 0,
                    d = l.tabs.map(function (t, i) {
                      var a,
                        o = t.id === u
                      return (
                        o && (c = i),
                        {
                          isActive: function isActive() {
                            return o
                          },
                          key: t.labelText,
                          label: t.labelText,
                          onClick: function onClick() {
                            n.scribe(
                              e._buildTabNamespace(e._getScribeNamespace(s), e._getScribeNamespace(t.scribeConfig)),
                            )
                          },
                          to: r(t.id),
                          token: null === (a = t.scribeConfig) || void 0 === a ? void 0 : a.entityToken,
                        }
                      )
                    })
                  return o.createElement(o.Fragment, null, o.createElement(_.Z, { links: d, visibleItemIndex: c }))
                }
                return null
              }),
              e
            )
          }
          return (
            (0, T.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  this._fetchPageModule()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
                  ;(e.module === this.props.module && this.props.initialFetchStatus) || this._fetchPageModule()
                },
              },
              {
                key: 'render',
                value: function value() {
                  return this.props.initialFetchStatus === C.Z.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function value(e, t) {
                  var n
                  return (
                    e && (n = e),
                    t && (n = (0, i.Z)((0, i.Z)({}, n), t)),
                    (0, i.Z)((0, i.Z)({}, n), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function value(e) {
                  if (e) {
                    e.entityToken
                    return (0, a.Z)(e, P)
                  }
                },
              },
            ]),
            n
          )
        })(o.Component)
      var H = D((0, B.Z)(O))
      var R = n(98701),
        G = n(615372),
        U = n(440082),
        W = function W(e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        V = function V(e, t) {
          var n = t.selectedTabId,
            r = W(e, t)
          return (
            r &&
            r.tabs &&
            r.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        }
      var q = (0, M.Z)()
        .propsFromState(function () {
          return { pageConfiguration: W, selectedTab: V }
        })
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandler: (0, F.createLocalApiErrorHandlerWithContextFactory)('RICH_SEGMENTED_TIMELINE'),
          }
        })
        .withAnalytics()
      var z = ['entityToken']
      var Q = q(
        (function (e) {
          ;(0, k.Z)(n, e)
          var t = (0, I.Z)(n)
          function n() {
            var e
            ;(0, E.Z)(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
              i[o] = arguments[o]
            }
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, S.Z)((0, w.Z)(e), '_getTimelineNamespace', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.pageConfiguration,
                  i = t.selectedTab,
                  o = (null == i ? void 0 : i.scribeConfig) || (null == r ? void 0 : r.scribeConfig)
                if (o) {
                  o.entityToken
                  return (0, a.Z)(o, z)
                }
                return n.contextualScribeNamespace
              }),
              (0, S.Z)(
                (0, w.Z)(e),
                '_getModule',
                (0, f.Z)(function (e, t, n, r) {
                  if ((null == e ? void 0 : e.id) !== t) {
                    if (null != e && e.urtEndpoint)
                      return (0, G.Z)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: r })
                    if (null != e && e.graphQLTimelineId) return (0, R.R)(e.graphQLTimelineId)
                  }
                  return n
                }),
              ),
              (0, S.Z)((0, w.Z)(e), '_getRefreshIntervalSecForCurrentTab', function () {
                var t,
                  n = e.props,
                  r = n.pageConfiguration,
                  i = n.selectedTab,
                  a = null == r || null === (t = r.tabs) || void 0 === t ? void 0 : t.initialTabId
                if (i) return i.refreshIntervalSec
                if (a) {
                  var o,
                    l =
                      null == r || null === (o = r.tabs) || void 0 === o
                        ? void 0
                        : o.tabs.find(function (e) {
                            return a === e.id
                          })
                  return null == l ? void 0 : l.refreshIntervalSec
                }
              }),
              e
            )
          }
          return (
            (0, T.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.entryConfiguration,
                    r = t.initialModule,
                    i = t.pageConfiguration,
                    a = t.prerollDisplayLocation,
                    l = t.refreshControl,
                    c = t.renderEmptyState,
                    u = t.renderUnavailable,
                    s = t.selectedTab,
                    d = t.timelinePrefix,
                    p = t.title,
                    f = t.withoutHeadroom,
                    m = this._getModule(
                      s,
                      null == i || null === (e = i.tabs) || void 0 === e ? void 0 : e.initialTabId,
                      r,
                      d,
                    ),
                    b = this._getRefreshIntervalSecForCurrentTab(),
                    h = b ? 1e3 * b : void 0
                  return o.createElement(
                    Z.nO,
                    { namespace: this._getTimelineNamespace() },
                    o.createElement(U.Z, {
                      entryConfiguration: n,
                      module: m,
                      pollingIntervalMsOverride: h,
                      prerollDisplayLocation: a,
                      refreshControl: l,
                      renderEmptyState: c,
                      renderUnavailable: u,
                      title: p,
                      withoutHeadroom: f,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(o.Component),
      )
      var j = n(756746),
        J = n(44895),
        K = (n(108532), n(325686)),
        X = n(496204),
        Y = n(765526),
        $ = n(460673),
        ee = n(676275)
      var te = function te(e, t) {
        var n = (0, $.z)(),
          r = t || {},
          i = r.component,
          a = r.element,
          l = o.useMemo(
            function () {
              return { items: [ee.Z.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          (0, Y.q)(function () {
            n.scribe({ component: i, element: a, action: 'impression', data: l })
          }),
          { namespace: { component: i, element: a }, data: l }
        )
      }
      function ne(e) {
        var t = e.header,
          n = t.clientEventInfo,
          r = t.displayType,
          i = t.facepile,
          a = t.landingContext,
          l = t.topicId,
          c = e.onHeaderVisible,
          u = te(l, n),
          s = u.data,
          d = u.namespace
        return o.createElement(
          K.Z,
          { style: re.root },
          o.createElement(
            Z.nO,
            { data: s, namespace: d },
            o.createElement(X.Z, {
              displayType: r,
              facepile: i,
              onFollowHeaderOffscreen: function onFollowHeaderOffscreen(e) {
                var t = e.isOffscreen
                return c(!t)
              },
              topicId: l,
              topicLandingContext: a,
              withDivider: !0,
            }),
          ),
        )
      }
      var re = s.Z.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        ie = n(24949),
        ae = function ae(e, t) {
          return t.module.selectPageConfiguration(e)
        },
        oe = function oe(e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        le = (0, ie.P1)(ae, oe, function (e, t) {
          return t !== C.Z.LOADED || (!!e && !!e.tabs)
        })
      var ce = (0, M.Z)()
        .propsFromState(function () {
          return { hasTabNavigation: le, pageConfiguration: ae, initialFetchStatus: oe }
        })
        .withAnalytics()
      n(334115), n(200634), n(326936)
      var ue = n(611731),
        se = n(967006),
        de = n(1778),
        pe = n(331261),
        fe = n(86098),
        me = n(882426),
        be = n(759226),
        he = n(173738),
        ve = function ve(e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return he.Z.select(e, n)
        }
      var ge = (0, M.Z)().propsFromState(function () {
        return { topic: ve }
      })
      var Ze = function Ze(e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        Ce = function Ce(e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        ye = p().ed88e742
      var Ee = s.Z.create(function (e) {
        return {
          rightControl: { flexDirection: 'row' },
          followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
        }
      })
      var Te = ge(function (e) {
        var t = e.navBar.topicId ? e.navBar.topicId : '',
          n = e.isHeaderOffscreen,
          r = e.navBar.clientEventInfo,
          i = e.pageNamespace,
          a = e.topic,
          l = e.withAppLinks,
          c = e.withOpenGraphMeta,
          u = o.useContext(pe.rC).featureSwitches.isTrue('topic_landing_page_share_enabled'),
          s = te(t, r),
          d = s.data,
          p = s.namespace,
          f = (0, m.Z)({}, i, p)
        return a
          ? o.createElement(
              Z.nO,
              { data: d, namespace: f },
              o.createElement(
                o.Fragment,
                null,
                c
                  ? o.createElement(de.Z, {
                      canonical: Ze(t),
                      description: a.description,
                      title: a.name,
                      type: 'article',
                    })
                  : null,
                l ? o.createElement(se.Z, { deepLink: Ce(t) }) : null,
                o.createElement(
                  K.Z,
                  { style: Ee.rightControl },
                  o.createElement(
                    K.Z,
                    { style: Ee.followButtonContainer },
                    o.createElement(
                      ue.Z,
                      { animateMount: !0, show: n, type: 'fade' },
                      o.createElement(fe.ZP, { size: 'medium', textMode: me.q.FollowTopic, topic: a }),
                    ),
                  ),
                  u ? o.createElement(be.ZP, { copyLinkShareLabel: ye, scribeNamespace: f, url: Ze(t) }) : null,
                ),
              ),
            )
          : null
      })
      var we = ['entityToken'],
        ke = ['entityToken'],
        Ie = p().e9f1fbcc,
        Se = o.createElement(b.Z, null),
        _e = function _e(e) {
          var t = e.TabBar,
            n = e.backLocation,
            c = e.documentTitle,
            d = e.entryConfiguration,
            p = e.fab,
            b = e.getTabLink,
            E = e.hasTabNavigation,
            T = e.history,
            w = e.initialFetchStatus,
            k = e.initialPageNamespace,
            I = e.logoButton,
            S = e.module,
            _ = e.onBackClick,
            L = e.pageConfiguration,
            B = e.prerollDisplayLocation,
            F = e.renderEmptyState,
            M = e.renderUnavailable,
            x = e.rightControl,
            A = e.searchBoxRef,
            N = e.selectedTabId,
            D = e.sidebarContent,
            P = e.timelinePrefix,
            O = e.title,
            R = e.withAppLinks,
            G = e.withBottomLoginSignupBar,
            U = e.withDeferredView,
            W = e.withOpenGraphMeta,
            V = e.withSearchBox,
            q = e.withTweetButton,
            z = o.useRef(
              (0, f.Z)(function (e, t) {
                return (0, i.Z)((0, i.Z)({}, t), (0, j.Z)({ isWide: e }))
              }),
            ).current,
            J = o.useState(!0),
            K = (0, r.Z)(J, 2),
            X = K[0],
            Y = K[1],
            $ = L || {},
            ee = $.header,
            te = $.navBar,
            re = $.subtitle,
            ie = $.title,
            ae = w === C.Z.LOADED ? ie || O : '',
            oe = (function (e, t, n) {
              var r = (null == t ? void 0 : t.scribeConfig) || {},
                i = (r.entityToken, (0, a.Z)(r, we)),
                o = null == t ? void 0 : t.tabs,
                l = e || (null == o ? void 0 : o.initialTabId),
                c =
                  null == o
                    ? void 0
                    : o.tabs.find(function (e) {
                        return e.id === l
                      }),
                u = (null == c ? void 0 : c.scribeConfig) || {},
                s = (u.entityToken, (0, a.Z)(u, ke))
              return (0, m.Z)({}, n, i, s)
            })(N, L, k),
            le = ee ? o.createElement(ne, { header: ee, onHeaderVisible: Y }) : null,
            ce = te
              ? o.createElement(Te, {
                  isHeaderOffscreen: !X,
                  navBar: te,
                  pageNamespace: oe,
                  withAppLinks: R,
                  withOpenGraphMeta: W,
                })
              : null,
            ue = U ? h.Z : o.Fragment,
            se = o.createElement(u.Z, null, function (e) {
              var t = e.containerWidth >= s.Z.theme.breakpoints.medium
              return o.createElement(
                o.Fragment,
                null,
                le,
                o.createElement(
                  ue,
                  null,
                  o.createElement(Q, {
                    entryConfiguration: z(t, d),
                    initialModule: S,
                    prerollDisplayLocation: B,
                    renderEmptyState: F,
                    renderUnavailable: M,
                    selectedTabId: N,
                    timelinePrefix: P,
                    title: O,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            de = p ? o.createElement(v.Z, { component: l.Z, fab: p }, se) : se,
            pe = b && E ? o.createElement(H, { getTabLink: b, module: S, selectedTabId: N }) : void 0
          return o.createElement(
            Z.nO,
            { namespace: oe },
            o.createElement(
              y.Z,
              null,
              o.createElement(g.Z, {
                TabBar: t,
                backLocation: n,
                documentTitle: c,
                history: T,
                logoButton: I,
                onBackClick: _,
                primaryContent: de,
                rightControl: ce || x,
                searchBoxRef: A,
                secondaryBar: pe,
                sidebarContent: D,
                subtitle: re,
                title: le && X ? O : ae,
                withBottomLoginSignupBar: G,
                withSearchBox: V,
                withTweetButton: q,
              }),
            ),
          )
        }
      _e.defaultProps = {
        entryConfiguration: (0, J.G)({}),
        renderEmptyState: function renderEmptyState() {
          return o.createElement(c.Z, { header: Ie })
        },
        sidebarContent: Se,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var Le = ce(_e)
    },
  },
])

//# sourceMappingURL=WIPED
