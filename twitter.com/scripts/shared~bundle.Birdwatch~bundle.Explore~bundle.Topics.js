'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['shared~bundle.Birdwatch~bundle.Explore~bundle.Topics'],
  {
    612969: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return r
        },
      })
      n(202784)
      var i = n(325686)
      var r = (0, n(820941).Z)(i.Z)
    },
    517847: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return Le
        },
      })
      var i = n(196234),
        r = n(133028),
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
        v = n(790876),
        h = n(612969),
        b = n(509082),
        g = n(815923),
        Z = n(346253),
        y = n(709249),
        E = n(887371),
        C = n(580753),
        T = n(545754),
        w = n(486906),
        k = n(256666),
        I = (n(818178), n(543450), n(296797)),
        S = n(272985),
        _ = n(33988),
        L = n(878149),
        B = n(923335),
        M = n(392160),
        F = function F(e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        x = function x(e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        A = function A(e, t) {
          var n = t.selectedTabId,
            i = x(e, t)
          return (
            i &&
            i.tabs &&
            i.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        }
      var P = (0, M.Z)()
        .propsFromState(function () {
          return { initialFetchStatus: F, pageConfiguration: x, selectedTab: A }
        })
        .propsFromActions(function (e) {
          var t = e.module
          return {
            createLocalApiErrorHandler: (0, B.createLocalApiErrorHandlerWithContextFactory)('RICH_SEGMENTED_TIMELINE'),
            fetchInitial: t.fetchInitial,
          }
        })
        .withAnalytics()
      var D = ['entityToken'],
        N = (function (e) {
          ;(0, T.Z)(n, e)
          var t = (0, w.Z)(n)
          function n() {
            var e
            ;(0, y.Z)(this, n)
            for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++) {
              a[l] = arguments[l]
            }
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, k.Z)((0, C.Z)(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  i = t.createLocalApiErrorHandler,
                  a = t.fetchInitial,
                  o = t.pageConfiguration,
                  l = o ? o.scribeConfig : void 0
                return a().then(function (t) {
                  t.performed &&
                    n.scribe((0, r.Z)((0, r.Z)({}, e._getScribeNamespace(l)), {}, { action: 'get_initial' }))
                }, i(S.M))
              }),
              (0, k.Z)((0, C.Z)(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  i = t.getTabLink,
                  r = t.pageConfiguration,
                  a = t.selectedTab,
                  l = null == r ? void 0 : r.tabs
                if (l && l.tabs) {
                  var c,
                    u = (a && a.id) || l.initialTabId,
                    s = r ? r.scribeConfig : void 0,
                    d = l.tabs.map(function (t, r) {
                      var a,
                        o = t.id === u
                      return (
                        o && (c = r),
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
                          to: i(t.id),
                          token: null === (a = t.scribeConfig) || void 0 === a ? void 0 : a.entityToken,
                        }
                      )
                    })
                  return o.createElement(o.Fragment, null, o.createElement(I.Z, { links: d, visibleItemIndex: c }))
                }
                return null
              }),
              e
            )
          }
          return (
            (0, E.Z)(n, [
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
                  return this.props.initialFetchStatus === L.Z.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function value(e, t) {
                  var n
                  return (
                    e && (n = e),
                    t && (n = (0, r.Z)((0, r.Z)({}, n), t)),
                    (0, r.Z)((0, r.Z)({}, n), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function value(e) {
                  if (e) {
                    e.entityToken
                    return (0, a.Z)(e, D)
                  }
                },
              },
            ]),
            n
          )
        })(o.Component)
      var O = P((0, _.Z)(N))
      var H = n(758122),
        R = n(845855),
        U = n(98701),
        G = n(615372),
        W = function W(e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        V = function V(e, t) {
          var n = t.selectedTabId,
            i = W(e, t)
          return (
            i &&
            i.tabs &&
            i.tabs.tabs.find(function (e) {
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
            createLocalApiErrorHandler: (0, B.createLocalApiErrorHandlerWithContextFactory)('RICH_SEGMENTED_TIMELINE'),
          }
        })
        .withAnalytics()
      var z = ['entityToken']
      var Q = q(
        (function (e) {
          ;(0, T.Z)(n, e)
          var t = (0, w.Z)(n)
          function n() {
            var e
            ;(0, y.Z)(this, n)
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) {
              r[o] = arguments[o]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, k.Z)((0, C.Z)(e), '_getTimelineNamespace', function () {
                var t = e.props,
                  n = t.analytics,
                  i = t.pageConfiguration,
                  r = t.selectedTab,
                  o = (null == r ? void 0 : r.scribeConfig) || (null == i ? void 0 : i.scribeConfig)
                if (o) {
                  o.entityToken
                  return (0, a.Z)(o, z)
                }
                return n.contextualScribeNamespace
              }),
              (0, k.Z)(
                (0, C.Z)(e),
                '_getModule',
                (0, f.Z)(function (e, t, n, i) {
                  if ((null == e ? void 0 : e.id) !== t) {
                    if (null != e && e.urtEndpoint)
                      return (0, G.Z)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: i })
                    if (null != e && e.graphQLTimelineId) return (0, U.R)(e.graphQLTimelineId)
                  }
                  return n
                }),
              ),
              (0, k.Z)((0, C.Z)(e), '_getRefreshIntervalSecForCurrentTab', function () {
                var t,
                  n = e.props,
                  i = n.pageConfiguration,
                  r = n.selectedTab,
                  a = null == i || null === (t = i.tabs) || void 0 === t ? void 0 : t.initialTabId
                if (r) return r.refreshIntervalSec
                if (a) {
                  var o,
                    l =
                      null == i || null === (o = i.tabs) || void 0 === o
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
            (0, E.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t,
                    n = this.props,
                    i = n.entryConfiguration,
                    r = n.initialModule,
                    a = n.pageConfiguration,
                    l = n.prerollDisplayLocation,
                    c = n.refreshControl,
                    u = n.renderEmptyState,
                    s = n.renderUnavailable,
                    d = n.selectedTab,
                    p = n.timelinePrefix,
                    f = n.title,
                    m = n.withoutHeadroom,
                    v = { token: null == a || null === (e = a.scribeConfig) || void 0 === e ? void 0 : e.entityToken },
                    h = this._getModule(
                      d,
                      null == a || null === (t = a.tabs) || void 0 === t ? void 0 : t.initialTabId,
                      r,
                      p,
                    ),
                    b = this._getRefreshIntervalSecForCurrentTab(),
                    g = b ? 1e3 * b : void 0
                  return o.createElement(
                    R.nO,
                    { namespace: this._getTimelineNamespace() },
                    o.createElement(H.Z, {
                      behavioralEventContext: v,
                      entryConfiguration: i,
                      module: h,
                      pollingIntervalMsOverride: g,
                      prerollDisplayLocation: l,
                      refreshControl: c,
                      renderEmptyState: u,
                      renderUnavailable: s,
                      title: f,
                      withoutHeadroom: m,
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
          i = t || {},
          r = i.component,
          a = i.element,
          l = o.useMemo(
            function () {
              return { items: [ee.Z.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          (0, Y.q)(function () {
            n.scribe({ component: r, element: a, action: 'impression', data: l })
          }),
          { namespace: { component: r, element: a }, data: l }
        )
      }
      function ne(e) {
        var t = e.header,
          n = t.clientEventInfo,
          i = t.displayType,
          r = t.facepile,
          a = t.landingContext,
          l = t.topicId,
          c = e.onHeaderVisible,
          u = te(l, n),
          s = u.data,
          d = u.namespace
        return o.createElement(
          K.Z,
          { style: ie.root },
          o.createElement(
            R.nO,
            { data: s, namespace: d },
            o.createElement(X.Z, {
              displayType: i,
              facepile: r,
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
      var ie = s.Z.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        re = n(24949),
        ae = function ae(e, t) {
          return t.module.selectPageConfiguration(e)
        },
        oe = function oe(e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        le = (0, re.P1)(ae, oe, function (e, t) {
          return t !== L.Z.LOADED || (!!e && !!e.tabs)
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
        pe = n(658664),
        fe = n(86098),
        me = n(882426),
        ve = n(759226),
        he = n(173738),
        be = function be(e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return he.Z.select(e, n)
        }
      var ge = (0, M.Z)().propsFromState(function () {
        return { topic: be }
      })
      var Ze = function Ze(e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        ye = function ye(e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        Ee = p().ed88e742
      var Ce = s.Z.create(function (e) {
        return {
          rightControl: { flexDirection: 'row' },
          followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
        }
      })
      var Te = ge(function (e) {
        var t = e.navBar.topicId ? e.navBar.topicId : '',
          n = e.isHeaderOffscreen,
          i = e.navBar.clientEventInfo,
          r = e.pageNamespace,
          a = e.topic,
          l = e.withAppLinks,
          c = e.withOpenGraphMeta,
          u = o.useContext(pe.rC).featureSwitches.isTrue('topic_landing_page_share_enabled'),
          s = te(t, i),
          d = s.data,
          p = s.namespace,
          f = (0, m.Z)({}, r, p)
        return a
          ? o.createElement(
              R.nO,
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
                l ? o.createElement(se.Z, { deepLink: ye(t) }) : null,
                o.createElement(
                  K.Z,
                  { style: Ce.rightControl },
                  o.createElement(
                    K.Z,
                    { style: Ce.followButtonContainer },
                    o.createElement(
                      ue.Z,
                      { animateMount: !0, show: n, type: 'fade' },
                      o.createElement(fe.ZP, { size: 'medium', textMode: me.q.FollowTopic, topic: a }),
                    ),
                  ),
                  u ? o.createElement(ve.ZP, { copyLinkShareLabel: Ee, scribeNamespace: f, url: Ze(t) }) : null,
                ),
              ),
            )
          : null
      })
      var we = ['entityToken'],
        ke = ['entityToken'],
        Ie = p().e9f1fbcc,
        Se = o.createElement(v.Z, null),
        _e = function _e(e) {
          var t = e.TabBar,
            n = e.backLocation,
            c = e.behavioralEventViewType,
            d = e.documentTitle,
            p = e.entryConfiguration,
            v = e.fab,
            y = e.getTabLink,
            E = e.hasTabNavigation,
            C = e.history,
            T = e.initialFetchStatus,
            w = e.initialPageNamespace,
            k = e.logoButton,
            I = e.module,
            S = e.onBackClick,
            _ = e.pageConfiguration,
            B = e.prerollDisplayLocation,
            M = e.renderEmptyState,
            F = e.renderUnavailable,
            x = e.rightControl,
            A = e.searchBoxRef,
            P = e.selectedTabId,
            D = e.sidebarContent,
            N = e.timelinePrefix,
            H = e.title,
            U = e.withAppLinks,
            G = e.withBottomLoginSignupBar,
            W = e.withDeferredView,
            V = e.withOpenGraphMeta,
            q = e.withSearchBox,
            z = e.withTweetButton,
            J = o.useRef(
              (0, f.Z)(function (e, t) {
                return (0, r.Z)((0, r.Z)({}, t), (0, j.Z)({ isWide: e }))
              }),
            ).current,
            K = o.useState(!0),
            X = (0, i.Z)(K, 2),
            Y = X[0],
            $ = X[1],
            ee = _ || {},
            te = ee.header,
            ie = ee.navBar,
            re = ee.subtitle,
            ae = ee.title,
            oe = T === L.Z.LOADED ? ae || H : '',
            le = (function (e, t, n) {
              var i = (null == t ? void 0 : t.scribeConfig) || {},
                r = (i.entityToken, (0, a.Z)(i, we)),
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
              return (0, m.Z)({}, n, r, s)
            })(P, _, w),
            ce = te ? o.createElement(ne, { header: te, onHeaderVisible: $ }) : null,
            ue = ie
              ? o.createElement(Te, {
                  isHeaderOffscreen: !Y,
                  navBar: ie,
                  pageNamespace: le,
                  withAppLinks: U,
                  withOpenGraphMeta: V,
                })
              : null,
            se = W ? h.Z : o.Fragment,
            de = o.createElement(u.Z, null, function (e) {
              var t = e.containerWidth >= s.Z.theme.breakpoints.medium
              return o.createElement(
                o.Fragment,
                null,
                ce,
                o.createElement(
                  se,
                  null,
                  o.createElement(Q, {
                    entryConfiguration: J(t, p),
                    initialModule: I,
                    prerollDisplayLocation: B,
                    renderEmptyState: M,
                    renderUnavailable: F,
                    selectedTabId: P,
                    timelinePrefix: N,
                    title: H,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            pe = v ? o.createElement(b.Z, { component: l.Z, fab: v }, de) : de,
            fe = y && E ? o.createElement(O, { getTabLink: y, module: I, selectedTabId: P }) : void 0
          return o.createElement(
            R.nO,
            { namespace: le },
            o.createElement(
              Z.Z,
              { behavioralEventViewType: c },
              o.createElement(g.Z, {
                TabBar: t,
                backLocation: n,
                documentTitle: d,
                history: C,
                logoButton: k,
                onBackClick: S,
                primaryContent: pe,
                rightControl: ue || x,
                searchBoxRef: A,
                secondaryBar: fe,
                sidebarContent: D,
                subtitle: re,
                title: ce && Y ? H : oe,
                withBottomLoginSignupBar: G,
                withSearchBox: q,
                withTweetButton: z,
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
    820941: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return p
        },
      })
      var i = n(709249),
        r = n(887371),
        a = n(545754),
        o = n(486906),
        l = n(202784),
        c = n(411916),
        u = n.n(c),
        s = n(373463),
        d = n.n(s)
      function p(e) {
        var t = (function (t) {
          ;(0, a.Z)(c, t)
          var n = (0, o.Z)(c)
          function c(e, t) {
            var r
            return (0, i.Z)(this, c), ((r = n.call(this, e, t)).state = { shouldRender: !1 }), (r._mounted = !0), r
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._mounted = !1
                },
              },
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this
                  u()(function () {
                    e._mounted && e.setState({ shouldRender: !0 })
                  })
                },
              },
              {
                key: 'render',
                value: function value() {
                  return this.state.shouldRender ? l.createElement(e, this.props) : null
                },
              },
            ]),
            c
          )
        })(l.Component)
        return d()(t, e)
      }
    },
    615372: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return a
        },
      })
      n(818178)
      var i = n(206319),
        r = n(98701)
      var a = function a(e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          a = e.urtUrl,
          o = a.url,
          l = a.urtEndpointOptions || {},
          c = l.cacheId,
          u = l.requestParams,
          s = l.timeline
        return null != s && s.id
          ? (0, r.R)(s.id)
          : (0, r.Z)({ timelineId: c || ''.concat(n).concat((0, i.Sz)(a)), endpointUrl: o, endpointParams: u || {} })
      }
    },
  },
])

//# sourceMappingURL=WIPED
