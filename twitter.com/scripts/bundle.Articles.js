;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    EqEI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ArticleListScreen', function () {
          return V
        })
      n('KqXw'), n('WNMA'), n('lTEL'), n('7x/C'), n('kYxP'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('HPNB'),
        o = n('WpDa'),
        c = n('ZNT5'),
        l = 'FETCH_TOP_ARTICLES_TIMELINE',
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 864e5
          return Object(c.a)({
            timelineId: 'articlesTimeline-'.concat(e),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTimeline
            },
            getEndpointParams: function (t) {
              var n = t.count,
                a = t.cursor
              return { timeWindowMillis: e, count: n, cursor: 'string' == typeof a ? a : void 0 }
            },
            context: l,
            perfKey: 'articlesTimeline',
            formatResponse: o.a,
          })
        },
        s = n('v6aA'),
        d = n('qdp+'),
        m = (n('6U7i'), n('EGrD')),
        p = n('rxPX'),
        f = function (e, t) {
          var n,
            a = t.location,
            r = null == a || null === (n = a.query) || void 0 === n ? void 0 : n.time_window
          return Number(r) || 24
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { timeWindowQuery: f }
          })
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: m.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        w = n('SrtL'),
        y = n('KEM+'),
        b = n.n(y),
        v = n('yiKp'),
        E = n.n(v),
        C = n('L+Yr'),
        T = n('QIgh'),
        g = n('8UdT'),
        k = E()(E()({}, T.default), {}, b()({}, g.b.Article, C.a)),
        _ = n('+RfI'),
        I = n('fTQJ'),
        B = n('M2mT'),
        L = n('7n04'),
        x = n('HQ0t'),
        S = n('t62R'),
        O = n('mjJ+'),
        A = n('IG7M'),
        F = n('FIs5'),
        M = n('cHvH'),
        D = n('rHpw'),
        P = n('3XMw'),
        R = n.n(P),
        W = R.a.b7fa0cfd,
        H = R.a.jbd22d48,
        N = R.a.e950f6ef,
        j = R.a.e15e5636,
        K = function (e) {
          return 60 * e * 60 * 1e3
        },
        Q = R.a.a0f01bca,
        q = r.a.createElement(
          R.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          r.a.createElement(S.b, { color: 'link', link: '/i/connect_people' }, R.a.e7dcfb8f),
        ),
        V = function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.loadAdFreeArticleDomainsFromPersistence,
            o = e.location,
            c = e.match,
            l = e.timeWindowQuery,
            m = r.a.useContext(s.a),
            p = m.featureSwitches,
            f = m.userClaims.isTrueAndEnabled('subscriptions_feature_1006'),
            h = p.isTrue('longform_top_articles_time_window_enabled')
          r.a.useEffect(function () {
            f && a()
          })
          var y = function (e) {
              return '?time_window='.concat(e || 24)
            },
            b = r.a.useCallback(
              function () {
                t.scribe({ action: 'impression', data: { context: 'time_window_'.concat(K(l)) } })
              },
              [t, l],
            )
          r.a.useEffect(
            function () {
              b()
            },
            [b],
          )
          var v = function (e) {
              var t,
                a = e.entries,
                r = c.params.articleId,
                i = Object(d.a)(a, function (e) {
                  return e.type === g.b.Article && !!e.content && e.content.articleId
                })
              !r && i
                ? n.replace('/i/articles/'.concat(i).concat(y(l)))
                : !r ||
                  (null != o && null !== (t = o.query) && void 0 !== t && t.time_window) ||
                  n.replace('/i/articles/'.concat(r).concat(y(l)))
            },
            E = function (e) {
              return function () {
                n.replace('/i/articles'.concat(y(e)))
              }
            },
            C = [
              { text: j({ count: 1 }), onClick: E(1) },
              { text: j({ count: 2 }), onClick: E(2) },
              { text: j({ count: 4 }), onClick: E(4) },
              { text: j({ count: 8 }), onClick: E(8) },
              { text: j({ count: 24 }), onClick: E(24) },
            ],
            T = r.a.createElement(A.a, {
              Icon: _.a,
              label: Q,
              renderActionMenu: function (e) {
                return r.a.createElement(O.a, { items: C, onCloseRequested: e, shouldCloseOnClick: !0 })
              },
            }),
            S = function () {
              return r.a.createElement(F.a, { header: N, message: q, style: U.emptyState })
            }
          return r.a.createElement(M.a, null, function (e) {
            var t = e.windowWidth,
              n = i.a.isTwoColumnLayout(t)
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(w.a, { title: W }),
              r.a.createElement(
                B.a,
                {
                  rightControl: h ? T : void 0,
                  screenType: 'root',
                  showSubtitleOnRoot: !0,
                  subtitle: H({ count: l || 24 }),
                  title: r.a.createElement(x.a, { text: W }),
                },
                r.a.createElement(I.a, {
                  anchoring: L.a,
                  entryConfiguration: k,
                  module: u(K(l || 24)),
                  onEntriesRendered: n ? v : void 0,
                  renderEmptyState: S,
                  title: W,
                }),
              ),
            )
          })
        },
        U = D.a.create(function (e) {
          return {
            emptyState: {
              height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ')'),
              justifyContent: 'center',
              marginVertical: 0,
            },
          }
        }),
        X = h(V)
      t.default = X
    },
    HQ0t: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('3XMw'),
        c = n.n(o),
        l = n('Q3sg'),
        u = n('rHpw'),
        s = c.a.g4782c0a,
        d = u.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              marginLeft: e.spaces.space4,
              marginBottom: e.spaces.space2,
              height: e.spaces.space20,
            },
          }
        })
      t.a = function (e) {
        var t = r.a.useContext(i.a),
          n = t.featureSwitches,
          a = t.userClaims,
          o = n.isTrue('subscriptions_blue_premium_labeling_enabled'),
          c = a.isTwitterBlueSubscriber(),
          u = e.style,
          m = e.text
        return c && o
          ? r.a.createElement(
              r.a.Fragment,
              null,
              m,
              r.a.createElement(l.a, { accessibilityLabel: s, style: [d.icon, u] }),
            )
          : m
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        u = n('1Pcy'),
        s = n.n(u),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        f = n.n(p),
        h = n('KEM+'),
        w = n.n(h),
        y = (n('2G9S'), n('i4UL'), n('+/5o')),
        b = n('ERkP'),
        v = n.n(b),
        E = n('HPNB'),
        C = n('VAZu'),
        T = n('wiP2'),
        g = n('Es6L'),
        k = n('yiKp'),
        _ = n.n(k),
        I = n('rHpw'),
        B = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: _()(_()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        x = n('yw4N'),
        S = n('TnY3'),
        O = n('cHvH'),
        A = n('3xLC'),
        F = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        M = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(s()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      L.a,
                      { style: B.fill },
                      v.a.createElement(
                        x.a,
                        { style: B.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(O.a, null, function (t) {
                    var n = t.windowWidth
                    return E.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, F))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(g.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(T.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    i = n.TeamsSwitcher,
                    o = n.backLocation,
                    c = n.documentTitle,
                    l = n.headerless,
                    u = n.history,
                    s = n.leftControl,
                    d = n.middleControl,
                    m = n.onBackClick,
                    p = n.rightControl,
                    f = n.screenType,
                    h = n.searchBoxOptions,
                    w = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    E = n.showSubtitleOnWideDetail,
                    g = n.subtitle,
                    k = n.title,
                    _ = n.titleIconCell,
                    I = n.titleIconCellSize,
                    x = n.withDetailOpen,
                    S = n.withSearchBox,
                    O = n.withTweetButton,
                    A = 'root' === f,
                    F = 'secondaryRoot' === f,
                    M = 'primaryDetail' === f,
                    D = (M && E) || (A && b),
                    P = A || (M && t),
                    R = A ? y.c : M ? y.a : void 0,
                    W = v.a.createElement(
                      L.a,
                      { style: B.appBarContainer },
                      v.a.createElement(C.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: P,
                        history: u,
                        leftControl: s,
                        middleControl: d,
                        onBackClick: m,
                        rightControl: p,
                        secondaryBar: w,
                        subtitle: D ? g : void 0,
                        title: k,
                        titleDomId: R,
                        titleIconCell: _,
                        titleIconCellSize: I,
                      }),
                    ),
                    H =
                      A || (F && x)
                        ? null
                        : v.a.createElement(T.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: c,
                            headerless: l,
                            middleControl: d,
                            onBackClick: m,
                            rightControl: p,
                            searchBoxOptions: h,
                            subtitle: g,
                            title: k,
                            withSearchBox: S,
                            withTweetButton: O,
                          })
                  return v.a.createElement(v.a.Fragment, null, H, W)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      w()(M, 'contextType', A.a),
        w()(M, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(S.a)(M)
    },
    Q3sg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    byUE: function (e, t, n) {
      'use strict'
      n.r(t)
      n('6U7i'), n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wChl'),
        o = n('WpDa'),
        c = n('ZNT5'),
        l = function (e) {
          return Object(c.a)({
            timelineId: 'articleTweetsTimeline-'.concat(e),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTweetsTimeline
            },
            getEndpointParams: function (t) {
              var n = t.count,
                a = t.cursor
              return { articleId: e, count: n, cursor: 'string' == typeof a ? a : void 0 }
            },
            context: 'FETCH_ARTICLE_TWEETS_TIMELINE',
            perfKey: 'articleTweetsTimeline',
            formatResponse: o.a,
          })
        },
        u = n('KEM+'),
        s = n.n(u),
        d = n('QIgh'),
        m = n('8UdT'),
        p = n('IcAo'),
        f = n('VrCx'),
        h = n('xWpm'),
        w = Object(p.a)(
          {},
          d.default,
          s()({}, m.b.Tweet, {
            handlers: s()(
              {},
              f.a.TweetWithoutCard,
              Object(h.f)({
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        y = n('3XMw'),
        b = n.n(y),
        v = n('fTQJ'),
        E = n('M2mT'),
        C = n('7n04'),
        T = n('MWbm'),
        g = n('yw4N'),
        k = n('Irs7'),
        _ = n('t62R'),
        I = n('rHpw'),
        B = b.a.d35d74e3,
        L = b.a.f88e624e,
        x = I.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(k.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return r.a.createElement(
            E.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: B, withBottomBorder: !0 },
            r.a.createElement(
              T.a,
              { style: x.contentWrapper },
              r.a.createElement(
                T.a,
                { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite' },
                r.a.createElement(_.b, { visuallyHidden: !0 }, L),
                r.a.createElement(i.a, { id: t, withInternalLink: !1 }),
              ),
              r.a.createElement(
                g.a,
                { style: x.viewport },
                r.a.createElement(v.a, { anchoring: C.a, entryConfiguration: w, module: l(t), title: B }),
              ),
            ),
          )
        },
        { section: 'top_articles', component: 'conversation' },
      )
    },
  },
])
//# sourceMappingURL=WIPED
