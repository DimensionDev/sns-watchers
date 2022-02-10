;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    EqEI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ArticleListScreen', function () {
          return W
        })
      n('KqXw'), n('WNMA'), n('lTEL'), n('7x/C'), n('kYxP'), n('MvUL')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('HPNB'),
        o = n('WpDa'),
        l = n('ZNT5'),
        c = Object(l.a)({
          timelineId: 'articlesTimeline',
          getEndpoint: function (e) {
            return e.TopArticles.fetchArticleTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_TOP_ARTICLES_TIMELINE',
          perfKey: 'articlesTimeline',
          formatResponse: o.a,
        }),
        s = n('v6aA'),
        u = n('qdp+'),
        m = n('EGrD'),
        d = n('rxPX'),
        p = Object(d.a)()
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: m.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        f = n('SrtL'),
        h = n('KEM+'),
        b = n.n(h),
        y = n('yiKp'),
        w = n.n(y),
        E = n('ezF+'),
        C = (n('yH/f'), Object.freeze({ Default: 'Default' })),
        v =
          (n('JtPf'),
          n('87if'),
          {
            loader: function () {
              return n.e(202).then(n.bind(null, 'QvpQ'))
            },
            loaderKey: 'defaultArticleLoader',
            strategy: n('XBtf').a.Critical,
          }),
        g = E.c({
          selectDisplayType: function (e) {
            return e.content.articleDisplayType || C.Default
          },
          handlers: b()({}, C.Default, v),
        }),
        T = n('QIgh'),
        x = n('8UdT'),
        I = w()(w()({}, T.b), {}, b()({}, x.b.Article, g)),
        k = n('fTQJ'),
        B = n('M2mT'),
        L = n('7n04'),
        O = n('HQ0t'),
        A = n('t62R'),
        D = n('FIs5'),
        _ = n('cHvH'),
        S = n('rHpw'),
        F = n('3XMw'),
        H = n.n(F),
        M = H.a.b7fa0cfd,
        P = H.a.e2462db4,
        R = H.a.e950f6ef,
        j = r.a.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          r.a.createElement(A.b, { color: 'link', link: '/i/connect_people' }, H.a.e7dcfb8f),
        ),
        W = function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.loadAdFreeArticleDomainsFromPersistence,
            o = e.match,
            l = r.a.useContext(s.a).userClaims.isTrueAndEnabled('subscriptions_feature_1006')
          r.a.useEffect(function () {
            l && a()
          })
          var m = r.a.useCallback(
            function () {
              t.scribe({ action: 'impression' })
            },
            [t],
          )
          r.a.useEffect(
            function () {
              m()
            },
            [m],
          )
          var d = function (e) {
              var t = e.entries,
                a = o.params.articleId,
                r = Object(u.a)(t, function (e) {
                  return e.type === x.b.Article && !!e.content && e.content.articleId
                })
              !a && r && n.replace('/i/articles/'.concat(r))
            },
            p = function () {
              return r.a.createElement(D.a, { header: R, message: j, style: z.emptyState })
            }
          return r.a.createElement(_.a, null, function (e) {
            var t = e.windowWidth,
              n = i.a.isTwoColumnLayout(t)
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(f.a, { title: M }),
              r.a.createElement(
                B.a,
                { screenType: 'root', showSubtitleOnRoot: !0, subtitle: P, title: r.a.createElement(O.a, { text: M }) },
                r.a.createElement(k.a, {
                  anchoring: L.a,
                  entryConfiguration: I,
                  module: c,
                  onEntriesRendered: n ? d : void 0,
                  renderEmptyState: p,
                  title: M,
                }),
              ),
            )
          })
        },
        z = S.a.create(function (e) {
          return {
            emptyState: {
              height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ')'),
              justifyContent: 'center',
              marginVertical: 0,
            },
          }
        }),
        N = p(W)
      t.default = N
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
        m = s.a.create(function (e) {
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
          d = e.text
        return l && o
          ? r.a.createElement(
              r.a.Fragment,
              null,
              d,
              r.a.createElement(c.a, { accessibilityLabel: u, style: [m.icon, s] }),
            )
          : d
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
        m = n('5Yy7'),
        d = n.n(m),
        p = n('2VqO'),
        f = n.n(p),
        h = n('KEM+'),
        b = n.n(h),
        y = (n('2G9S'), n('i4UL'), n('+/5o')),
        w = n('ERkP'),
        E = n.n(w),
        C = n('HPNB'),
        v = n('VAZu'),
        g = n('wiP2'),
        T = n('Es6L'),
        x = n('yiKp'),
        I = n.n(x),
        k = n('rHpw'),
        B = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I()(I()({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        O = n('yw4N'),
        A = n('TnY3'),
        D = n('cHvH'),
        _ = n('3xLC'),
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
          d()(n, e)
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
                  ? E.a.createElement(
                      L.a,
                      { style: B.fill },
                      E.a.createElement(
                        O.a,
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
                  return E.a.createElement(D.a, null, function (t) {
                    var n = t.windowWidth
                    return C.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    Object(T.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : E.a.createElement(g.a.Configure, n),
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
                    o = n.backLocation,
                    l = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    m = n.middleControl,
                    d = n.onBackClick,
                    p = n.rightControl,
                    f = n.screenType,
                    h = n.searchBoxOptions,
                    b = n.secondaryBar,
                    w = n.showSubtitleOnRoot,
                    C = n.showSubtitleOnWideDetail,
                    T = n.subtitle,
                    x = n.title,
                    I = n.titleIconCell,
                    k = n.titleIconCellSize,
                    O = n.withDetailOpen,
                    A = n.withSearchBox,
                    D = n.withTweetButton,
                    _ = 'root' === f,
                    S = 'secondaryRoot' === f,
                    F = 'primaryDetail' === f,
                    H = (F && C) || (_ && w),
                    M = _ || (F && t),
                    P = _ ? y.c : F ? y.a : void 0,
                    R = E.a.createElement(
                      L.a,
                      { style: B.appBarContainer },
                      E.a.createElement(v.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: M,
                        history: s,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: p,
                        secondaryBar: b,
                        subtitle: H ? T : void 0,
                        title: x,
                        titleDomId: P,
                        titleIconCell: I,
                        titleIconCellSize: k,
                      }),
                    ),
                    j =
                      _ || (S && O)
                        ? null
                        : E.a.createElement(g.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: c,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: p,
                            searchBoxOptions: h,
                            subtitle: T,
                            title: x,
                            withSearchBox: A,
                            withTweetButton: D,
                          })
                  return E.a.createElement(E.a.Fragment, null, j, R)
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      b()(F, 'contextType', _.a),
        b()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(F)
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
        m = n('QIgh'),
        d = n('8UdT'),
        p = n('IcAo'),
        f = n('VrCx'),
        h = n('ReVx'),
        b = Object(p.a)(
          {},
          m.b,
          u()({}, d.b.Tweet, {
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
        E = n('fTQJ'),
        C = n('M2mT'),
        v = n('7n04'),
        g = n('rHpw'),
        T = n('MWbm'),
        x = n('yw4N'),
        I = n('Irs7'),
        k = w.a.d35d74e3,
        B = g.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(I.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return r.a.createElement(
            C.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: k, withBottomBorder: !0 },
            r.a.createElement(
              T.a,
              { style: B.contentWrapper },
              r.a.createElement(i.a, { id: t, withInternalLink: !1 }),
              r.a.createElement(
                x.a,
                { style: B.viewport },
                r.a.createElement(E.a, { anchoring: v.a, entryConfiguration: b, module: c(t), title: k }),
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
        m = Object(s.f)({ namespace: 'articles' }),
        d = u.a.register(m),
        p = n('rxPX'),
        f = n('0KEI'),
        h = n('EGrD'),
        b = function (e, t) {
          return d.select(e, t.id.toString())
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
        E = n.n(w),
        C = n('k89r'),
        v = n('MWbm'),
        g = n('PbQQ'),
        T = n('pjBI'),
        x = n('t62R'),
        I = n('GBcw'),
        k = n('lphh'),
        B = n('/yvb'),
        L = n('9Xij'),
        O = n('rHpw'),
        A = n('TIdA'),
        D = n('A91F'),
        _ = n('Nqmc'),
        S = n('htQn'),
        F = n('cm6r'),
        H = n('LSr9'),
        M = n('6vUc'),
        P = n('IcAo'),
        R = E.a.afb7e8f7,
        j = O.a.create(function (e) {
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
            m = o.a.useContext(c.a).userClaims,
            d = Object(C.a)(),
            p = o.a.useContext(g.a.default),
            f = n || {},
            h = f.article_url,
            b = f.description,
            y = f.domain,
            w = f.domain_url,
            E = f.image_url,
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
            Q = m.isTrueAndEnabled('subscriptions_feature_1006'),
            K = !!Q && Object(H.c)(t, w),
            q = o.a.useMemo(
              function () {
                var e = Object(M.a)(d.contextualScribeData.items || []) || {}
                return {
                  url: h,
                  items: [
                    Object(P.a)({}, e, { article_details: { publisher_name: y, is_showing_label: K, is_ad_free: K } }),
                  ],
                }
              },
              [d.contextualScribeData.items, h, y, K],
            ),
            V = o.a.useCallback(
              function () {
                d.scribe({ action: 'impression', data: q })
              },
              [d, q],
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
            Z = E ? { url: E, height: 750, width: 1250 } : void 0,
            $ = { pathname: h, external: !0 },
            ee = function (e) {
              if ((d.scribe({ element: u ? 'read_article' : 'article_header', action: 'open_link', data: q }), Q)) {
                var n = new H.a(i, a()).getAdFreeArticlesClickHandler({
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
              d.scribe({ element: 'conversation_view', action: 'click', data: q })
            },
            ne = J ? p.getLinkFromUrtUrl(J) : void 0,
            ae = ne ? p.withAnchorless(ne) : void 0,
            re = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                v.a,
                { style: j.horizontalContainer },
                o.a.createElement(
                  v.a,
                  { style: j.textContainer },
                  o.a.createElement(
                    T.a,
                    { style: j.middotGroup },
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
                        o.a.createElement(I.a, { timestamp: W }),
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
                      style: j.text,
                      weight: 'bold',
                      withInteractiveStyling: !1,
                    },
                    z,
                  ),
                  b ? o.a.createElement(x.b, { nativeID: N.description, numberOfLines: 2 }, b) : null,
                  K && o.a.createElement(v.a, { style: j.adFreeLabel }, o.a.createElement(k.a, null)),
                  u
                    ? o.a.createElement(
                        v.a,
                        { style: j.buttonContainer },
                        o.a.createElement(B.a, { link: $, onClick: ee, size: 'xSmall', type: 'primaryOutlined' }, R),
                      )
                    : null,
                ),
                Z
                  ? o.a.createElement(
                      v.a,
                      { style: j.imageContainer },
                      o.a.createElement(
                        L.a,
                        { ratio: O.a.theme.aspectRatios.square },
                        o.a.createElement(A.a, { accessibilityLabel: '', aspectMode: D.a.SQUARE, image: Z }),
                      ),
                    )
                  : null,
              ),
              o.a.createElement(_.a, {
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
                    style: j.container,
                  },
                  re,
                )
              })
            : o.a.createElement(F.a, { link: $, onClick: ee, style: [j.container, j.bottomBorder] }, re)
        })
      t.a = W
    },
  },
])
//# sourceMappingURL=WIPED
