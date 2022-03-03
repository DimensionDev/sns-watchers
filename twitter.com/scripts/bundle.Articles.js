;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    EqEI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ArticleListScreen', function () {
          return X
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('lTEL'), n('7x/C'), n('kYxP'), n('MvUL'), n('ERkP')),
        o = n.n(i),
        l = n('HPNB'),
        c = n('WpDa'),
        s = n('ZNT5'),
        u = 'FETCH_TOP_ARTICLES_TIMELINE',
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 864e5
          return Object(s.a)({
            timelineId: 'articlesTimeline-'.concat(e),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTimeline
            },
            getEndpointParams: function (t) {
              var n = t.count,
                a = t.cursor
              return { timeWindowMillis: e, count: n, cursor: 'string' == typeof a ? a : void 0 }
            },
            context: u,
            perfKey: 'articlesTimeline',
            formatResponse: c.a,
          })
        },
        m = n('v6aA'),
        p = n('qdp+'),
        f = n('EGrD'),
        h = n('rxPX'),
        b = Object(h.a)()
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: f.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        y = n('SrtL'),
        w = n('KEM+'),
        C = n.n(w),
        E = n('yiKp'),
        v = n.n(E),
        g = n('ezF+'),
        T = (n('yH/f'), Object.freeze({ Default: 'Default' })),
        x =
          (n('JtPf'),
          n('87if'),
          {
            loader: function () {
              return n.e(204).then(n.bind(null, 'QvpQ'))
            },
            loaderKey: 'defaultArticleLoader',
            strategy: n('XBtf').a.Critical,
          }),
        k = g.c({
          selectDisplayType: function (e) {
            return e.content.articleDisplayType || T.Default
          },
          handlers: C()({}, T.Default, x),
        }),
        I = n('QIgh'),
        B = n('8UdT'),
        L = v()(v()({}, I.b), {}, C()({}, B.b.Article, k)),
        _ = n('+RfI'),
        O = n('fTQJ'),
        A = n('M2mT'),
        D = n('7n04'),
        S = n('HQ0t'),
        F = n('t62R'),
        M = n('mjJ+'),
        R = n('IG7M'),
        H = n('FIs5'),
        j = n('cHvH'),
        P = n('rHpw'),
        W = n('3XMw'),
        z = n.n(W),
        N = z.a.b7fa0cfd,
        U = z.a.jbd22d48,
        Q = z.a.e950f6ef,
        q = z.a.e15e5636,
        K = function (e) {
          return 60 * e * 60 * 1e3
        },
        V = o.a.createElement(
          z.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          o.a.createElement(F.b, { color: 'link', link: '/i/connect_people' }, z.a.e7dcfb8f),
        ),
        X = function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.loadAdFreeArticleDomainsFromPersistence,
            i = e.match,
            c = o.a.useState(24),
            s = r()(c, 2),
            u = s[0],
            f = s[1],
            h = o.a.useContext(m.a),
            b = h.featureSwitches,
            w = h.userClaims.isTrueAndEnabled('subscriptions_feature_1006'),
            C = b.isTrue('longform_top_articles_time_window_enabled')
          o.a.useEffect(function () {
            w && a()
          })
          var E = o.a.useCallback(
            function () {
              t.scribe({ action: 'impression' })
            },
            [t],
          )
          o.a.useEffect(
            function () {
              E()
            },
            [E],
          )
          var v = function (e) {
              var t = e.entries,
                a = i.params.articleId,
                r = Object(p.a)(t, function (e) {
                  return e.type === B.b.Article && !!e.content && e.content.articleId
                })
              !a && r && n.replace('/i/articles/'.concat(r))
            },
            g = function (e) {
              return function () {
                n.replace('/i/articles'), f(e)
              }
            },
            T = [
              { text: q({ count: 1 }), onClick: g(1) },
              { text: q({ count: 2 }), onClick: g(2) },
              { text: q({ count: 4 }), onClick: g(4) },
              { text: q({ count: 8 }), onClick: g(8) },
              { text: q({ count: 24 }), onClick: g(24) },
            ],
            x = o.a.createElement(R.a, {
              Icon: _.a,
              renderActionMenu: function (e) {
                return o.a.createElement(M.a, { items: T, onCloseRequested: e, shouldCloseOnClick: !0 })
              },
            }),
            k = function () {
              return o.a.createElement(H.a, { header: Q, message: V, style: G.emptyState })
            }
          return o.a.createElement(j.a, null, function (e) {
            var t = e.windowWidth,
              n = l.a.isTwoColumnLayout(t)
            return o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(y.a, { title: N }),
              o.a.createElement(
                A.a,
                {
                  rightControl: C ? x : void 0,
                  screenType: 'root',
                  showSubtitleOnRoot: !0,
                  subtitle: U({ count: u }),
                  title: o.a.createElement(S.a, { text: N }),
                },
                o.a.createElement(O.a, {
                  anchoring: D.a,
                  entryConfiguration: L,
                  module: d(K(u)),
                  onEntriesRendered: n ? v : void 0,
                  renderEmptyState: k,
                  title: N,
                }),
              ),
            )
          })
        },
        G = P.a.create(function (e) {
          return {
            emptyState: {
              height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ')'),
              justifyContent: 'center',
              marginVertical: 0,
            },
          }
        }),
        J = b(X)
      t.default = J
    },
    HQ0t: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('3XMw'),
        l = n.n(o),
        c = n('Q3sg'),
        s = n('rHpw'),
        u = l.a.g4782c0a,
        d = s.a.create(function (e) {
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
          l = a.isTwitterBlueSubscriber(),
          s = e.style,
          m = e.text
        return l && o
          ? r.a.createElement(
              r.a.Fragment,
              null,
              m,
              r.a.createElement(c.a, { accessibilityLabel: u, style: [d.icon, s] }),
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
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        f = n.n(p),
        h = n('KEM+'),
        b = n.n(h),
        y = (n('2G9S'), n('i4UL'), n('+/5o')),
        w = n('ERkP'),
        C = n.n(w),
        E = n('HPNB'),
        v = n('VAZu'),
        g = n('wiP2'),
        T = n('Es6L'),
        x = n('yiKp'),
        k = n.n(x),
        I = n('rHpw'),
        B = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        _ = n('yw4N'),
        O = n('TnY3'),
        A = n('cHvH'),
        D = n('3xLC'),
        S = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        F = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? C.a.createElement(
                      L.a,
                      { style: B.fill },
                      C.a.createElement(
                        _.a,
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
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return C.a.createElement(A.a, null, function (t) {
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
                      r()(e, S))
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    Object(T.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : C.a.createElement(g.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return C.a.createElement(
                    C.a.Fragment,
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
                    l = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    m = n.onBackClick,
                    p = n.rightControl,
                    f = n.screenType,
                    h = n.searchBoxOptions,
                    b = n.secondaryBar,
                    w = n.showSubtitleOnRoot,
                    E = n.showSubtitleOnWideDetail,
                    T = n.subtitle,
                    x = n.title,
                    k = n.titleIconCell,
                    I = n.titleIconCellSize,
                    _ = n.withDetailOpen,
                    O = n.withSearchBox,
                    A = n.withTweetButton,
                    D = 'root' === f,
                    S = 'secondaryRoot' === f,
                    F = 'primaryDetail' === f,
                    M = (F && E) || (D && w),
                    R = D || (F && t),
                    H = D ? y.c : F ? y.a : void 0,
                    j = C.a.createElement(
                      L.a,
                      { style: B.appBarContainer },
                      C.a.createElement(v.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: R,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: m,
                        rightControl: p,
                        secondaryBar: b,
                        subtitle: M ? T : void 0,
                        title: x,
                        titleDomId: H,
                        titleIconCell: k,
                        titleIconCellSize: I,
                      }),
                    ),
                    P =
                      D || (S && _)
                        ? null
                        : C.a.createElement(g.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: m,
                            rightControl: p,
                            searchBoxOptions: h,
                            subtitle: T,
                            title: x,
                            withSearchBox: O,
                            withTweetButton: A,
                          })
                  return C.a.createElement(C.a.Fragment, null, P, j)
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      b()(F, 'contextType', D.a),
        b()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(O.a)(F)
    },
    Q3sg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    byUE: function (e, t, n) {
      'use strict'
      n.r(t)
      n('6U7i'), n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wChl'),
        o = n('WpDa'),
        l = n('ZNT5'),
        c = function (e) {
          return Object(l.a)({
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
        s = n('KEM+'),
        u = n.n(s),
        d = n('QIgh'),
        m = n('8UdT'),
        p = n('IcAo'),
        f = n('VrCx'),
        h = n('ReVx'),
        b = Object(p.a)(
          {},
          d.b,
          u()({}, m.b.Tweet, {
            handlers: u()(
              {},
              f.a.TweetWithoutCard,
              Object(h.a)({
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        y = n('3XMw'),
        w = n.n(y),
        C = n('fTQJ'),
        E = n('M2mT'),
        v = n('7n04'),
        g = n('rHpw'),
        T = n('MWbm'),
        x = n('yw4N'),
        k = n('Irs7'),
        I = w.a.d35d74e3,
        B = g.a.create(function (e) {
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
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: I, withBottomBorder: !0 },
            r.a.createElement(
              T.a,
              { style: B.contentWrapper },
              r.a.createElement(i.a, { id: t, withInternalLink: !1 }),
              r.a.createElement(
                x.a,
                { style: B.viewport },
                r.a.createElement(C.a, { anchoring: v.a, entryConfiguration: b, module: c(t), title: I }),
              ),
            ),
          )
        },
        { section: 'top_articles', component: 'conversation' },
      )
    },
    wChl: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('uFXj'), n('ERkP')),
        o = n.n(i),
        l = n('BUB3'),
        c = n('v6aA'),
        s = (n('TJCb'), n('7x/C'), n('DZ+c'), n('3zvM')),
        u = n('lMB6'),
        d = Object(s.e)({ namespace: 'articles' }),
        m = u.a.register(d),
        p = n('rxPX'),
        f = n('0KEI'),
        h = n('EGrD'),
        b = function (e, t) {
          return m.select(e, t.id.toString())
        },
        y = Object(p.a)()
          .propsFromState(function () {
            return { adFreeDomains: h.c, article: b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('ARTICLE_SUMMARY'),
              fetchAdFreeToken: h.a,
            }
          }),
        w = n('3XMw'),
        C = n.n(w),
        E = n('k89r'),
        v = n('MWbm'),
        g = n('PbQQ'),
        T = n('pjBI'),
        x = n('t62R'),
        k = n('GBcw'),
        I = n('lphh'),
        B = n('/yvb'),
        L = n('9Xij'),
        _ = n('rHpw'),
        O = n('TIdA'),
        A = n('A91F'),
        D = n('Nqmc'),
        S = n('htQn'),
        F = n('cm6r'),
        M = n('LSr9'),
        R = n('6vUc'),
        H = n('IcAo'),
        j = C.a.afb7e8f7,
        P = _.a.create(function (e) {
          return {
            horizontalContainer: { flex: 1, flexDirection: 'row' },
            textContainer: { flex: 1 },
            text: { marginBottom: e.spaces.space4 },
            buttonContainer: { alignItems: 'flex-start', marginTop: e.spaces.space12, marginBottom: e.spaces.space16 },
            imageContainer: {
              borderRadius: e.borderRadii.large,
              height: 100,
              marginLeft: e.componentDimensions.gutterHorizontal,
              overflow: 'hidden',
              width: 100,
            },
            container: {
              flexDirection: 'column',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small },
            middotGroup: { marginBottom: e.spaces.space8 },
            adFreeLabel: { marginTop: e.spaces.space8, width: 'fit-content' },
          }
        }),
        W = y(function (e) {
          var t = e.adFreeDomains,
            n = e.article,
            a = e.createLocalApiErrorHandler,
            i = e.fetchAdFreeToken,
            s = (e.id, e.socialContext),
            u = e.withInternalLink,
            d = o.a.useContext(c.a).userClaims,
            m = Object(E.a)(),
            p = o.a.useContext(g.a.default),
            f = n || {},
            h = f.article_url,
            b = f.description,
            y = f.domain,
            w = f.domain_url,
            C = f.image_url,
            W = f.publish_date,
            z = f.title,
            N = {
              domain: g.b.useOpaqueIdentifier(),
              timestamp: g.b.useOpaqueIdentifier(),
              title: g.b.useOpaqueIdentifier(),
              description: g.b.useOpaqueIdentifier(),
              socialContext: g.b.useOpaqueIdentifier(),
            },
            U = [N.domain, N.timestamp, N.title, N.description, N.socialContext],
            Q = d.isTrueAndEnabled('subscriptions_feature_1006'),
            q = !!Q && Object(M.c)(t, w),
            K = o.a.useMemo(
              function () {
                var e = Object(R.a)(m.contextualScribeData.items || []) || {}
                return {
                  url: h,
                  items: [
                    Object(H.a)({}, e, { article_details: { publisher_name: y, is_showing_label: q, is_ad_free: q } }),
                  ],
                }
              },
              [m.contextualScribeData.items, h, y, q],
            ),
            V = o.a.useCallback(
              function () {
                m.scribe({ action: 'impression', data: K })
              },
              [m, K],
            )
          if (
            (o.a.useEffect(
              function () {
                V()
              },
              [V],
            ),
            !n)
          )
            return null
          var X = s || {},
            G = X.contextImageUrls,
            J = X.landingUrl,
            Y = X.text,
            Z = C ? { url: C, height: 750, width: 1250 } : void 0,
            $ = { pathname: h, external: !0 },
            ee = function (e) {
              if ((m.scribe({ element: u ? 'read_article' : 'article_header', action: 'open_link', data: K }), Q)) {
                var n = new M.a(i, a()).getAdFreeArticlesClickHandler({
                    destinationUrl: h,
                    linkDomain: w,
                    adFreeArticleDomains: t,
                  }),
                  o = r()(n, 2),
                  l = o[0],
                  c = o[1]
                l && c(e)
              }
            },
            te = function () {
              m.scribe({ element: 'conversation_view', action: 'click', data: K })
            },
            ne = J ? p.getLinkFromUrtUrl(J) : void 0,
            ae = ne ? p.withAnchorless(ne) : void 0,
            re = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                v.a,
                { style: P.horizontalContainer },
                o.a.createElement(
                  v.a,
                  { style: P.textContainer },
                  o.a.createElement(
                    T.a,
                    { style: P.middotGroup },
                    y &&
                      o.a.createElement(
                        x.b,
                        { color: 'gray700', nativeID: N.domain, size: 'subtext2', weight: 'bold' },
                        y,
                      ),
                    W &&
                      o.a.createElement(
                        x.b,
                        { color: 'gray700', nativeID: N.timestamp, size: 'subtext2' },
                        o.a.createElement(k.a, { timestamp: W }),
                      ),
                  ),
                  o.a.createElement(
                    x.b,
                    {
                      color: 'text',
                      link: ae,
                      nativeID: N.title,
                      numberOfLines: 3,
                      size: 'headline2',
                      style: P.text,
                      weight: 'bold',
                      withInteractiveStyling: !1,
                    },
                    z,
                  ),
                  b ? o.a.createElement(x.b, { nativeID: N.description, numberOfLines: 2 }, b) : null,
                  q && o.a.createElement(v.a, { style: P.adFreeLabel }, o.a.createElement(I.a, null)),
                  u
                    ? o.a.createElement(
                        v.a,
                        { style: P.buttonContainer },
                        o.a.createElement(B.a, { link: $, onClick: ee, size: 'xSmall', type: 'primaryOutlined' }, j),
                      )
                    : null,
                ),
                Z
                  ? o.a.createElement(
                      v.a,
                      { style: P.imageContainer },
                      o.a.createElement(
                        L.a,
                        { ratio: _.a.theme.aspectRatios.square },
                        o.a.createElement(O.a, { accessibilityLabel: '', aspectMode: A.a.SQUARE, image: Z }),
                      ),
                    )
                  : null,
              ),
              o.a.createElement(D.a, {
                contextType: 'Facepile',
                iconSize: 'large',
                nativeID: N.socialContext,
                text: Y,
                textSize: 'subtext2',
                userAvatarUrls: G,
                withLeftPadding: !1,
                withTextCentered: !0,
              }),
            )
          return u
            ? o.a.createElement(l.a, { exact: !1, path: (null == ae ? void 0 : ae.pathname) || '' }, function (e) {
                return o.a.createElement(
                  S.a,
                  {
                    accessibilityLabelledBy: U,
                    accessibilityRole: 'article',
                    accessibilityState: { selected: e },
                    link: ae,
                    onClick: te,
                    style: P.container,
                  },
                  re,
                )
              })
            : o.a.createElement(F.a, { link: $, onClick: ee, style: [P.container, P.bottomBorder] }, re)
        })
      t.a = W
    },
  },
])
//# sourceMappingURL=WIPED
