;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    EqEI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TabLabels', function () {
          return $
        }),
        n.d(t, 'hasListSeedPath', function () {
          return ee
        }),
        n.d(t, 'ArticleListScreen', function () {
          return te
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o =
          (n('yH/f'),
          n('2G9S'),
          n('iKE+'),
          n('1LXv'),
          n('KqXw'),
          n('e/gN'),
          n('DZ+c'),
          n('WNMA'),
          n('lTEL'),
          n('7x/C'),
          n('kYxP'),
          n('MvUL'),
          n('vrRf'),
          n('z84I'),
          n('ERkP')),
        c = n.n(o),
        l = n('HPNB'),
        u = n('WpDa'),
        s = n('ZNT5'),
        d = 'FETCH_TOP_ARTICLES_TIMELINE',
        m = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 864e5
          return Object(s.a)({
            timelineId: 'articlesTimeline-'.concat(e, '-').concat(t),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTimeline
            },
            getEndpointParams: function (n) {
              var a = n.count,
                r = n.cursor
              return {
                count: a,
                cursor: 'string' == typeof r ? r : void 0,
                articleListSeedType: e,
                timeWindowMillis: t,
              }
            },
            context: d,
            perfKey: 'articlesTimeline',
            formatResponse: u.a,
          })
        },
        p = n('v6aA'),
        f = n('qdp+'),
        h = (n('6U7i'), n('Hw0q')),
        w = n('EGrD'),
        y = n('WyG8'),
        b = n('rxPX'),
        E = function (e, t) {
          var n = t.location,
            a = t.match.params,
            r = ''
          return (
            a && a.tabId && 'string' == typeof a.tabId
              ? (r = a.tabId)
              : n && n.query && n.query.tabId && (r = Object(h.a)(n.query.tabId) || ''),
            r === y.a.FRIENDS_OF_FRIENDS ? y.a.FRIENDS_OF_FRIENDS : y.a.FOLLOWS
          )
        },
        v = function (e, t) {
          var n,
            a = t.location,
            r = null == a || null === (n = a.query) || void 0 === n ? void 0 : n.time_window
          return Number(r) || 24
        },
        C = Object(b.a)()
          .propsFromState(function () {
            return { seedType: E, timeWindowQuery: v }
          })
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: w.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        T = n('SrtL'),
        _ = n('yiKp'),
        I = n.n(_),
        g = n('L+Yr'),
        S = n('QIgh'),
        O = n('8UdT'),
        L = I()(I()({}, S.default), {}, i()({}, O.b.Article, g.a)),
        k = n('+RfI'),
        F = n('fTQJ'),
        B = n('M2mT'),
        x = n('7n04'),
        R = n('HQ0t'),
        D = n('t62R'),
        N = n('mjJ+'),
        A = n('IG7M'),
        W = n('FIs5'),
        H = n('cHvH'),
        M = n('k/OQ'),
        P = n('rHpw'),
        j = n('3XMw'),
        K = n.n(j),
        q = K.a.b7fa0cfd,
        Q = K.a.e15e5636,
        V = K.a.e950f6ef,
        z = K.a.af293dc2,
        U = K.a.f42e882a,
        X = K.a.e15e5636,
        Y = K.a.a0f01bca,
        Z = function (e) {
          return 60 * e * 60 * 1e3
        },
        G = c.a.createElement(
          K.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          c.a.createElement(D.b, { color: 'link', link: '/i/connect_people' }, K.a.e7dcfb8f),
        ),
        J = [y.a.FOLLOWS, y.a.FRIENDS_OF_FRIENDS],
        $ = Object.freeze(((a = {}), i()(a, y.a.FOLLOWS, z), i()(a, y.a.FRIENDS_OF_FRIENDS, U), a)),
        ee = function (e) {
          var t = '('.concat(y.a.FOLLOWS, '|').concat(y.a.FRIENDS_OF_FRIENDS, ')'),
            n = new RegExp(t, 'g')
          return !!e.match(n)
        },
        te = function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.loadAdFreeArticleDomainsFromPersistence,
            r = e.location,
            i = e.match,
            o = e.seedType,
            u = e.timeWindowQuery,
            s = c.a.useContext(p.a),
            d = s.featureSwitches,
            h = s.userClaims.isTrueAndEnabled('subscriptions_feature_1006'),
            w = d.isTrue('longform_top_articles_time_window_enabled'),
            b = d.isTrue('longform_top_articles_friends_of_friends_enabled')
          c.a.useEffect(function () {
            h && a()
          })
          var E = function (e) {
              return '?time_window='.concat(e || 24)
            },
            v = c.a.useCallback(
              function () {
                return o === y.a.FRIENDS_OF_FRIENDS ? 'fof' : 'following'
              },
              [o],
            ),
            C = c.a.useCallback(
              function () {
                t.scribe({
                  action: 'impression',
                  component: 'top_articles_'.concat(v()),
                  data: { context: 'time_window_'.concat(Z(u)) },
                })
              },
              [t, v, u],
            )
          c.a.useEffect(
            function () {
              C()
            },
            [C],
          )
          var _,
            I,
            g = function (e) {
              return function (t) {
                var a = t.entries,
                  c = i.params.articleId,
                  l = Object(f.a)(a, function (e) {
                    return e.type === O.b.Article && !!e.content && e.content.articleId
                  }),
                  s = ee(r.pathname)
                e && !c && l
                  ? n.replace('/i/articles/'.concat(o, '/').concat(l).concat(E(u)))
                  : e || s || n.replace('/i/articles/'.concat(o).concat(E(u)))
              }
            },
            S = function (e) {
              return function () {
                n.replace('/i/articles/'.concat(o).concat(E(e)))
              }
            },
            D = [
              { text: X({ count: 1 }), onClick: S(1) },
              { text: X({ count: 2 }), onClick: S(2) },
              { text: X({ count: 4 }), onClick: S(4) },
              { text: X({ count: 8 }), onClick: S(8) },
              { text: X({ count: 24 }), onClick: S(24) },
            ],
            P = c.a.createElement(A.a, {
              Icon: k.a,
              label: Y,
              renderActionMenu: function (e) {
                return c.a.createElement(N.a, { items: D, onCloseRequested: e, shouldCloseOnClick: !0 })
              },
            }),
            j = function () {
              return c.a.createElement(W.a, { header: V, message: G, style: ne.emptyState })
            },
            K = function (e) {
              return e === o
            },
            z = function (e) {
              return '/i/articles/'.concat(e).concat(E(u))
            },
            U = J.map(function (e) {
              return {
                key: e,
                label: $[e],
                isActive: function () {
                  return K(e)
                },
                to: { pathname: z(e) },
                onClick: function () {
                  t.scribe({ action: 'click', element: 'tab', component: 'top_articles_'.concat(v()) })
                },
              }
            }),
            te = ((_ = o), (I = J.indexOf(_)) > -1 ? I : 0)
          return c.a.createElement(H.a, null, function (e) {
            var t = e.windowWidth,
              n = l.a.isTwoColumnLayout(t)
            return c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(T.a, { title: q }),
              c.a.createElement(
                B.a,
                {
                  rightControl: w ? P : void 0,
                  screenType: 'root',
                  showSubtitleOnRoot: !0,
                  subtitle: Q({ count: u || 24 }),
                  title: c.a.createElement(R.a, { text: q }),
                },
                b ? c.a.createElement(M.a, { links: U, visibleItemIndex: te }) : null,
                c.a.createElement(F.a, {
                  anchoring: x.a,
                  entryConfiguration: L,
                  module: m(o, Z(u || 24)),
                  onEntriesRendered: g(n),
                  renderEmptyState: j,
                  title: q,
                }),
              ),
            )
          })
        },
        ne = P.a.create(function (e) {
          return {
            emptyState: {
              height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ')'),
              justifyContent: 'center',
              marginVertical: 0,
            },
          }
        }),
        ae = C(te)
      t.default = ae
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
        E = n.n(b),
        v = n('HPNB'),
        C = n('VAZu'),
        T = n('wiP2'),
        _ = n('Es6L'),
        I = n('yiKp'),
        g = n.n(I),
        S = n('rHpw'),
        O = S.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: g()(g()({}, S.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        k = n('yw4N'),
        F = n('TnY3'),
        B = n('cHvH'),
        x = n('3xLC'),
        R = [
          'appBarStyle',
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        D = (function (e) {
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
                  ? E.a.createElement(
                      L.a,
                      { style: O.fill },
                      E.a.createElement(
                        k.a,
                        { style: O.viewportView },
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
                  return E.a.createElement(B.a, null, function (t) {
                    var n = t.windowWidth
                    return v.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = (e.appBarStyle, e.children),
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, R))
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    Object(_.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : E.a.createElement(T.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return E.a.createElement(
                    E.a.Fragment,
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
                    o = n.appBarStyle,
                    c = n.backLocation,
                    l = n.documentTitle,
                    u = n.headerless,
                    s = n.history,
                    d = n.leftControl,
                    m = n.middleControl,
                    p = n.onBackClick,
                    f = n.rightControl,
                    h = n.screenType,
                    w = n.searchBoxOptions,
                    b = n.secondaryBar,
                    v = n.showSubtitleOnRoot,
                    _ = n.showSubtitleOnWideDetail,
                    I = n.subtitle,
                    g = n.title,
                    S = n.titleIconCell,
                    k = n.titleIconCellSize,
                    F = n.withDetailOpen,
                    B = n.withSearchBox,
                    x = n.withTweetButton,
                    R = 'root' === h,
                    D = 'secondaryRoot' === h,
                    N = 'primaryDetail' === h,
                    A = (N && _) || (R && v),
                    W = R || (N && t),
                    H = R ? y.c : N ? y.a : void 0,
                    M = E.a.createElement(
                      L.a,
                      { style: O.appBarContainer },
                      E.a.createElement(C.a, {
                        backLocation: c,
                        fixed: !1,
                        hideBackButton: W,
                        history: s,
                        leftControl: d,
                        middleControl: m,
                        onBackClick: p,
                        rightControl: f,
                        secondaryBar: b,
                        style: o,
                        subtitle: A ? I : void 0,
                        title: g,
                        titleDomId: H,
                        titleIconCell: S,
                        titleIconCellSize: k,
                      }),
                    ),
                    P =
                      R || (D && F)
                        ? null
                        : E.a.createElement(T.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: c,
                            documentTitle: l,
                            headerless: u,
                            middleControl: m,
                            onBackClick: p,
                            rightControl: f,
                            searchBoxOptions: w,
                            subtitle: I,
                            title: g,
                            withSearchBox: B,
                            withTweetButton: x,
                          })
                  return E.a.createElement(E.a.Fragment, null, P, M)
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      w()(D, 'contextType', x.a),
        w()(D, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(F.a)(D)
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
              Object(h.e)({
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        y = n('3XMw'),
        b = n.n(y),
        E = n('fTQJ'),
        v = n('M2mT'),
        C = n('7n04'),
        T = n('MWbm'),
        _ = n('yw4N'),
        I = n('Irs7'),
        g = n('t62R'),
        S = n('rHpw'),
        O = b.a.d35d74e3,
        L = b.a.f88e624e,
        k = S.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(I.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return r.a.createElement(
            v.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: O, withBottomBorder: !0 },
            r.a.createElement(
              T.a,
              { style: k.contentWrapper },
              r.a.createElement(
                T.a,
                { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite' },
                r.a.createElement(g.b, { visuallyHidden: !0 }, L),
                r.a.createElement(i.a, { id: t, withInternalLink: !1 }),
              ),
              r.a.createElement(
                _.a,
                { style: k.viewport },
                r.a.createElement(E.a, { anchoring: C.a, entryConfiguration: w, module: l(t), title: O }),
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
