;(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    EqEI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ArticleListScreen', function () {
          return X
        })
      n('KqXw'), n('WNMA'), n('lTEL'), n('7x/C'), n('kYxP'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('HPNB'),
        o = n('WpDa'),
        c = n('ZNT5'),
        l = 'FETCH_TOP_ARTICLES_TIMELINE',
        s = function () {
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
        u = n('v6aA'),
        m = n('qdp+'),
        d = (n('6U7i'), n('EGrD')),
        p = n('rxPX'),
        f = function (e, t) {
          var n,
            a = t.location,
            i = null == a || null === (n = a.query) || void 0 === n ? void 0 : n.time_window
          return Number(i) || 24
        },
        b = Object(p.a)()
          .propsFromState(function () {
            return { timeWindowQuery: f }
          })
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: d.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        h = n('SrtL'),
        w = n('KEM+'),
        y = n.n(w),
        v = n('yiKp'),
        E = n.n(v),
        C = n('ezF+'),
        g = (n('yH/f'), Object.freeze({ Default: 'Default' })),
        T =
          (n('JtPf'),
          n('87if'),
          {
            loader: function () {
              return n.e(205).then(n.bind(null, 'QvpQ'))
            },
            loaderKey: 'defaultArticleLoader',
            strategy: n('XBtf').a.Critical,
          }),
        x = C.c({
          selectDisplayType: function (e) {
            return e.content.articleDisplayType || g.Default
          },
          handlers: y()({}, g.Default, T),
        }),
        k = n('QIgh'),
        _ = n('8UdT'),
        I = E()(E()({}, k.b), {}, y()({}, _.b.Article, x)),
        L = n('+RfI'),
        B = n('fTQJ'),
        O = n('M2mT'),
        A = n('7n04'),
        S = n('HQ0t'),
        D = n('t62R'),
        F = n('mjJ+'),
        M = n('IG7M'),
        R = n('FIs5'),
        H = n('cHvH'),
        j = n('rHpw'),
        P = n('3XMw'),
        W = n.n(P),
        N = W.a.b7fa0cfd,
        z = W.a.jbd22d48,
        U = W.a.e950f6ef,
        Q = W.a.e15e5636,
        q = function (e) {
          return 60 * e * 60 * 1e3
        },
        K = W.a.a0f01bca,
        V = i.a.createElement(
          W.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          i.a.createElement(D.b, { color: 'link', link: '/i/connect_people' }, W.a.e7dcfb8f),
        ),
        X = function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.loadAdFreeArticleDomainsFromPersistence,
            o = e.location,
            c = e.match,
            l = e.timeWindowQuery,
            d = i.a.useContext(u.a),
            p = d.featureSwitches,
            f = d.userClaims.isTrueAndEnabled('subscriptions_feature_1006'),
            b = p.isTrue('longform_top_articles_time_window_enabled')
          i.a.useEffect(function () {
            f && a()
          })
          var w = function (e) {
              return '?time_window='.concat(e || 24)
            },
            y = i.a.useCallback(
              function () {
                t.scribe({ action: 'impression', data: { context: 'time_window_'.concat(q(l)) } })
              },
              [t, l],
            )
          i.a.useEffect(
            function () {
              y()
            },
            [y],
          )
          var v = function (e) {
              var t,
                a = e.entries,
                i = c.params.articleId,
                r = Object(m.a)(a, function (e) {
                  return e.type === _.b.Article && !!e.content && e.content.articleId
                })
              !i && r
                ? n.replace('/i/articles/'.concat(r).concat(w(l)))
                : !i ||
                  (null != o && null !== (t = o.query) && void 0 !== t && t.time_window) ||
                  n.replace('/i/articles/'.concat(i).concat(w(l)))
            },
            E = function (e) {
              return function () {
                n.replace('/i/articles'.concat(w(e)))
              }
            },
            C = [
              { text: Q({ count: 1 }), onClick: E(1) },
              { text: Q({ count: 2 }), onClick: E(2) },
              { text: Q({ count: 4 }), onClick: E(4) },
              { text: Q({ count: 8 }), onClick: E(8) },
              { text: Q({ count: 24 }), onClick: E(24) },
            ],
            g = i.a.createElement(M.a, {
              Icon: L.a,
              label: K,
              renderActionMenu: function (e) {
                return i.a.createElement(F.a, { items: C, onCloseRequested: e, shouldCloseOnClick: !0 })
              },
            }),
            T = function () {
              return i.a.createElement(R.a, { header: U, message: V, style: G.emptyState })
            }
          return i.a.createElement(H.a, null, function (e) {
            var t = e.windowWidth,
              n = r.a.isTwoColumnLayout(t)
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(h.a, { title: N }),
              i.a.createElement(
                O.a,
                {
                  rightControl: b ? g : void 0,
                  screenType: 'root',
                  showSubtitleOnRoot: !0,
                  subtitle: z({ count: l || 24 }),
                  title: i.a.createElement(S.a, { text: N }),
                },
                i.a.createElement(B.a, {
                  anchoring: A.a,
                  entryConfiguration: I,
                  module: s(q(l || 24)),
                  onEntriesRendered: n ? v : void 0,
                  renderEmptyState: T,
                  title: N,
                }),
              ),
            )
          })
        },
        G = j.a.create(function (e) {
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
        i = n.n(a),
        r = n('v6aA'),
        o = n('3XMw'),
        c = n.n(o),
        l = n('Q3sg'),
        s = n('rHpw'),
        u = c.a.g4782c0a,
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
        var t = i.a.useContext(r.a),
          n = t.featureSwitches,
          a = t.userClaims,
          o = n.isTrue('subscriptions_blue_premium_labeling_enabled'),
          c = a.isTwitterBlueSubscriber(),
          s = e.style,
          d = e.text
        return c && o
          ? i.a.createElement(
              i.a.Fragment,
              null,
              d,
              i.a.createElement(l.a, { accessibilityLabel: u, style: [m.icon, s] }),
            )
          : d
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        i = n.n(a),
        r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('2VqO'),
        f = n.n(p),
        b = n('KEM+'),
        h = n.n(b),
        w = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        v = n.n(y),
        E = n('HPNB'),
        C = n('VAZu'),
        g = n('wiP2'),
        T = n('Es6L'),
        x = n('yiKp'),
        k = n.n(x),
        _ = n('rHpw'),
        I = _.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, _.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        B = n('yw4N'),
        O = n('TnY3'),
        A = n('cHvH'),
        S = n('3xLC'),
        D = [
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
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      L.a,
                      { style: I.fill },
                      v.a.createElement(
                        B.a,
                        { style: I.viewportView },
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
                  return v.a.createElement(A.a, null, function (t) {
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
                      i()(e, D))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(T.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(g.a.Configure, n),
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
                    i = n.TabBar,
                    r = n.TeamsSwitcher,
                    o = n.backLocation,
                    c = n.documentTitle,
                    l = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    m = n.middleControl,
                    d = n.onBackClick,
                    p = n.rightControl,
                    f = n.screenType,
                    b = n.searchBoxOptions,
                    h = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    E = n.showSubtitleOnWideDetail,
                    T = n.subtitle,
                    x = n.title,
                    k = n.titleIconCell,
                    _ = n.titleIconCellSize,
                    B = n.withDetailOpen,
                    O = n.withSearchBox,
                    A = n.withTweetButton,
                    S = 'root' === f,
                    D = 'secondaryRoot' === f,
                    F = 'primaryDetail' === f,
                    M = (F && E) || (S && y),
                    R = S || (F && t),
                    H = S ? w.c : F ? w.a : void 0,
                    j = v.a.createElement(
                      L.a,
                      { style: I.appBarContainer },
                      v.a.createElement(C.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: R,
                        history: s,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: p,
                        secondaryBar: h,
                        subtitle: M ? T : void 0,
                        title: x,
                        titleDomId: H,
                        titleIconCell: k,
                        titleIconCellSize: _,
                      }),
                    ),
                    P =
                      S || (D && B)
                        ? null
                        : v.a.createElement(g.a.Configure, {
                            SideNavButton: a,
                            TabBar: i,
                            TeamsSwitcher: r,
                            backLocation: o,
                            documentTitle: c,
                            headerless: l,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: p,
                            searchBoxOptions: b,
                            subtitle: T,
                            title: x,
                            withSearchBox: O,
                            withTweetButton: A,
                          })
                  return v.a.createElement(v.a.Fragment, null, P, j)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(F, 'contextType', S.a),
        h()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(O.a)(F)
    },
    Q3sg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('ERkP'),
        o = n.n(r),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    byUE: function (e, t, n) {
      'use strict'
      n.r(t)
      n('6U7i'), n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('wChl'),
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
        s = n('KEM+'),
        u = n.n(s),
        m = n('QIgh'),
        d = n('8UdT'),
        p = n('IcAo'),
        f = n('VrCx'),
        b = n('xWpm'),
        h = Object(p.a)(
          {},
          m.b,
          u()({}, d.b.Tweet, {
            handlers: u()(
              {},
              f.a.TweetWithoutCard,
              Object(b.f)({
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        w = n('3XMw'),
        y = n.n(w),
        v = n('fTQJ'),
        E = n('M2mT'),
        C = n('7n04'),
        g = n('MWbm'),
        T = n('yw4N'),
        x = n('Irs7'),
        k = n('t62R'),
        _ = n('rHpw'),
        I = y.a.d35d74e3,
        L = y.a.f88e624e,
        B = _.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(x.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return i.a.createElement(
            E.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: I, withBottomBorder: !0 },
            i.a.createElement(
              g.a,
              { style: B.contentWrapper },
              i.a.createElement(
                g.a,
                { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite' },
                i.a.createElement(k.b, { visuallyHidden: !0 }, L),
                i.a.createElement(r.a, { id: t, withInternalLink: !1 }),
              ),
              i.a.createElement(
                T.a,
                { style: B.viewport },
                i.a.createElement(v.a, { anchoring: C.a, entryConfiguration: h, module: l(t), title: I }),
              ),
            ),
          )
        },
        { section: 'top_articles', component: 'conversation' },
      )
    },
    wChl: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('ddV6'),
        o = n.n(r),
        c = (n('6U7i'), n('1t7P'), n('jQ/y'), n('2G9S'), n('uFXj'), n('ERkP')),
        l = n.n(c),
        s = n('BUB3'),
        u = n('v6aA'),
        m = (n('TJCb'), n('7x/C'), n('DZ+c'), n('3zvM')),
        d = n('lMB6'),
        p = Object(m.e)({ namespace: 'articles' }),
        f = d.a.register(p),
        b = n('rxPX'),
        h = n('0KEI'),
        w = n('EGrD'),
        y = function (e, t) {
          return f.select(e, t.id.toString())
        },
        v = Object(b.a)()
          .propsFromState(function () {
            return { adFreeDomains: w.c, article: y }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('ARTICLE_SUMMARY'),
              fetchAdFreeToken: w.a,
            }
          }),
        E = n('3XMw'),
        C = n.n(E),
        g = n('k89r'),
        T = n('MWbm'),
        x = n('TnY3'),
        k = n('PbQQ'),
        _ = n('pjBI'),
        I = n('t62R'),
        L = n('GBcw'),
        B = n('lphh'),
        O = n('/yvb'),
        A = n('9Xij'),
        S = n('rHpw'),
        D = n('TIdA'),
        F = n('A91F'),
        M = n('Nqmc'),
        R = n('htQn'),
        H = n('cm6r'),
        j = n('LSr9'),
        P = n('6vUc'),
        W = n('IcAo'),
        N = C.a.afb7e8f7,
        z = S.a.create(function (e) {
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
        })
      t.a = Object(x.a)(
        v(function (e) {
          var t = e.adFreeDomains,
            n = e.article,
            a = e.createLocalApiErrorHandler,
            r = e.fetchAdFreeToken,
            c = (e.id, e.location),
            m = e.socialContext,
            d = e.withInternalLink,
            p = l.a.useContext(u.a).userClaims,
            f = Object(g.a)(),
            b = l.a.useContext(k.a.default),
            h = n || {},
            w = h.article_url,
            y = h.description,
            v = h.domain,
            E = h.domain_url,
            C = h.image_url,
            x = h.publish_date,
            U = h.title,
            Q = {
              domain: k.b.useOpaqueIdentifier(),
              timestamp: k.b.useOpaqueIdentifier(),
              title: k.b.useOpaqueIdentifier(),
              description: k.b.useOpaqueIdentifier(),
              socialContext: k.b.useOpaqueIdentifier(),
            },
            q = [Q.domain, Q.timestamp, Q.title, Q.description, Q.socialContext],
            K = p.isTrueAndEnabled('subscriptions_feature_1006'),
            V = !!K && Object(j.c)(t, E),
            X = l.a.useMemo(
              function () {
                var e = Object(P.a)(f.contextualScribeData.items || []) || {}
                return {
                  url: w,
                  items: [
                    Object(W.a)({}, e, { article_details: { publisher_name: v, is_showing_label: V, is_ad_free: V } }),
                  ],
                }
              },
              [f.contextualScribeData.items, w, v, V],
            ),
            G = l.a.useCallback(
              function () {
                f.scribe({ action: 'impression', data: X })
              },
              [f, X],
            )
          if (
            (l.a.useEffect(
              function () {
                G()
              },
              [G],
            ),
            !n)
          )
            return null
          var J,
            Y,
            Z = m || {},
            $ = Z.contextImageUrls,
            ee = Z.landingUrl,
            te = Z.text,
            ne = C ? { url: C, height: 750, width: 1250 } : void 0,
            ae = { pathname: w, external: !0 },
            ie = function (e) {
              if ((f.scribe({ element: d ? 'read_article' : 'article_header', action: 'open_link', data: X }), K)) {
                var n = new j.a(r, a()).getAdFreeArticlesClickHandler({
                    destinationUrl: w,
                    linkDomain: E,
                    adFreeArticleDomains: t,
                  }),
                  i = o()(n, 2),
                  c = i[0],
                  l = i[1]
                c && l(e)
              }
            },
            re = function () {
              f.scribe({ element: 'conversation_view', action: 'click', data: X })
            },
            oe = ee ? b.getLinkFromUrtUrl(ee) : void 0,
            ce = oe ? b.withAnchorless(oe) : void 0,
            le = ce
              ? i()(
                  i()({}, ce),
                  {},
                  {
                    pathname: ''
                      .concat(ce.pathname, '?time_window=')
                      .concat(
                        ((Y = null == c || null === (J = c.query) || void 0 === J ? void 0 : J.time_window),
                        Number(Y) || 24),
                      ),
                  },
                )
              : void 0,
            se = l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                T.a,
                { style: z.horizontalContainer },
                l.a.createElement(
                  T.a,
                  { style: z.textContainer },
                  l.a.createElement(
                    _.a,
                    { style: z.middotGroup },
                    v &&
                      l.a.createElement(
                        I.b,
                        { color: 'gray700', nativeID: Q.domain, size: 'subtext2', weight: 'bold' },
                        v,
                      ),
                    x &&
                      l.a.createElement(
                        I.b,
                        { color: 'gray700', nativeID: Q.timestamp, size: 'subtext2' },
                        l.a.createElement(L.a, { timestamp: x }),
                      ),
                  ),
                  l.a.createElement(
                    I.b,
                    {
                      color: 'text',
                      link: le,
                      nativeID: Q.title,
                      numberOfLines: 3,
                      size: 'headline2',
                      style: z.text,
                      weight: 'bold',
                      withInteractiveStyling: !1,
                    },
                    U,
                  ),
                  y ? l.a.createElement(I.b, { nativeID: Q.description, numberOfLines: 2 }, y) : null,
                  V && l.a.createElement(T.a, { style: z.adFreeLabel }, l.a.createElement(B.a, null)),
                  d
                    ? l.a.createElement(
                        T.a,
                        { style: z.buttonContainer },
                        l.a.createElement(O.a, { link: ae, onClick: ie, size: 'xSmall', type: 'primaryOutlined' }, N),
                      )
                    : null,
                ),
                ne
                  ? l.a.createElement(
                      T.a,
                      { style: z.imageContainer },
                      l.a.createElement(
                        A.a,
                        { ratio: S.a.theme.aspectRatios.square },
                        l.a.createElement(D.a, { accessibilityLabel: '', aspectMode: F.a.SQUARE, image: ne }),
                      ),
                    )
                  : null,
              ),
              l.a.createElement(M.a, {
                contextType: 'Facepile',
                iconSize: 'large',
                nativeID: Q.socialContext,
                text: te,
                textSize: 'subtext2',
                userAvatarUrls: $,
                withLeftPadding: !1,
                withTextCentered: !0,
              }),
            )
          return d
            ? l.a.createElement(s.a, { exact: !1, path: (null == le ? void 0 : le.pathname) || '' }, function (e) {
                return l.a.createElement(
                  R.a,
                  {
                    accessibilityLabelledBy: q,
                    accessibilityRole: 'article',
                    accessibilityState: { selected: e },
                    link: le,
                    onClick: re,
                    style: z.container,
                  },
                  se,
                )
              })
            : l.a.createElement(H.a, { link: ae, onClick: ie, style: [z.container, z.bottomBorder] }, se)
        }),
      )
    },
  },
])
//# sourceMappingURL=WIPED
