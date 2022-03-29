;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    EqEI: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ArticleListScreen', function () {
          return X
        })
      a('KqXw'), a('WNMA'), a('lTEL'), a('7x/C'), a('kYxP'), a('MvUL'), a('2G9S')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('HPNB'),
        o = a('WpDa'),
        l = a('ZNT5'),
        c = 'FETCH_TOP_ARTICLES_TIMELINE',
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 864e5
          return Object(l.a)({
            timelineId: 'articlesTimeline-'.concat(e),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTimeline
            },
            getEndpointParams: function (t) {
              var a = t.count,
                n = t.cursor
              return { timeWindowMillis: e, count: a, cursor: 'string' == typeof n ? n : void 0 }
            },
            context: c,
            perfKey: 'articlesTimeline',
            formatResponse: o.a,
          })
        },
        u = a('v6aA'),
        d = a('qdp+'),
        m = (a('6U7i'), a('EGrD')),
        p = a('rxPX'),
        h = function (e, t) {
          var a,
            n = t.location,
            r = null == n || null === (a = n.query) || void 0 === a ? void 0 : a.time_window
          return Number(r) || 24
        },
        y = Object(p.a)()
          .propsFromState(function () {
            return { timeWindowQuery: h }
          })
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: m.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        f = a('SrtL'),
        b = a('KEM+'),
        w = a.n(b),
        v = a('yiKp'),
        g = a.n(v),
        C = a('ezF+'),
        E = (a('yH/f'), Object.freeze({ Default: 'Default' })),
        x =
          (a('JtPf'),
          a('87if'),
          {
            loader: function () {
              return a.e(203).then(a.bind(null, 'QvpQ'))
            },
            loaderKey: 'defaultArticleLoader',
            strategy: a('XBtf').a.Critical,
          }),
        T = C.c({
          selectDisplayType: function (e) {
            return e.content.articleDisplayType || E.Default
          },
          handlers: w()({}, E.Default, x),
        }),
        k = a('QIgh'),
        B = a('8UdT'),
        L = g()(g()({}, k.b), {}, w()({}, B.b.Article, T)),
        S = a('+RfI'),
        I = a('fTQJ'),
        F = a('M2mT'),
        O = a('7n04'),
        R = a('HQ0t'),
        D = a('t62R'),
        _ = a('mjJ+'),
        H = a('IG7M'),
        M = a('FIs5'),
        A = a('cHvH'),
        P = a('rHpw'),
        z = a('3XMw'),
        j = a.n(z),
        N = j.a.b7fa0cfd,
        W = j.a.jbd22d48,
        K = j.a.e950f6ef,
        U = j.a.e15e5636,
        q = function (e) {
          return 60 * e * 60 * 1e3
        },
        V = j.a.a0f01bca,
        Q = r.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          r.a.createElement(D.b, { color: 'link', link: '/i/connect_people' }, j.a.e7dcfb8f),
        ),
        X = function (e) {
          var t = e.analytics,
            a = e.history,
            n = e.loadAdFreeArticleDomainsFromPersistence,
            o = e.location,
            l = e.match,
            c = e.timeWindowQuery,
            m = r.a.useContext(u.a),
            p = m.featureSwitches,
            h = m.userClaims.isTrueAndEnabled('subscriptions_feature_1006'),
            y = p.isTrue('longform_top_articles_time_window_enabled')
          r.a.useEffect(function () {
            h && n()
          })
          var b = function (e) {
              return '?time_window='.concat(e || 24)
            },
            w = r.a.useCallback(
              function () {
                t.scribe({ action: 'impression', data: { context: 'time_window_'.concat(q(c)) } })
              },
              [t, c],
            )
          r.a.useEffect(
            function () {
              w()
            },
            [w],
          )
          var v = function (e) {
              var t,
                n = e.entries,
                r = l.params.articleId,
                i = Object(d.a)(n, function (e) {
                  return e.type === B.b.Article && !!e.content && e.content.articleId
                })
              !r && i
                ? a.replace('/i/articles/'.concat(i).concat(b(c)))
                : !r ||
                  (null != o && null !== (t = o.query) && void 0 !== t && t.time_window) ||
                  a.replace('/i/articles/'.concat(r).concat(b(c)))
            },
            g = function (e) {
              return function () {
                a.replace('/i/articles'.concat(b(e)))
              }
            },
            C = [
              { text: U({ count: 1 }), onClick: g(1) },
              { text: U({ count: 2 }), onClick: g(2) },
              { text: U({ count: 4 }), onClick: g(4) },
              { text: U({ count: 8 }), onClick: g(8) },
              { text: U({ count: 24 }), onClick: g(24) },
            ],
            E = r.a.createElement(H.a, {
              Icon: S.a,
              label: V,
              renderActionMenu: function (e) {
                return r.a.createElement(_.a, { items: C, onCloseRequested: e, shouldCloseOnClick: !0 })
              },
            }),
            x = function () {
              return r.a.createElement(M.a, { header: K, message: Q, style: G.emptyState })
            }
          return r.a.createElement(A.a, null, function (e) {
            var t = e.windowWidth,
              a = i.a.isTwoColumnLayout(t)
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(f.a, { title: N }),
              r.a.createElement(
                F.a,
                {
                  rightControl: y ? E : void 0,
                  screenType: 'root',
                  showSubtitleOnRoot: !0,
                  subtitle: W({ count: c || 24 }),
                  title: r.a.createElement(R.a, { text: N }),
                },
                r.a.createElement(I.a, {
                  anchoring: O.a,
                  entryConfiguration: L,
                  module: s(q(c || 24)),
                  onEntriesRendered: a ? v : void 0,
                  renderEmptyState: x,
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
        Y = y(X)
      t.default = Y
    },
    FITr: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
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
                d: 'M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    HQ0t: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('v6aA'),
        o = a('3XMw'),
        l = a.n(o),
        c = a('Q3sg'),
        s = a('rHpw'),
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
          a = t.featureSwitches,
          n = t.userClaims,
          o = a.isTrue('subscriptions_blue_premium_labeling_enabled'),
          l = n.isTwitterBlueSubscriber(),
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
    M2mT: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        m = a.n(d),
        p = a('2VqO'),
        h = a.n(p),
        y = a('KEM+'),
        f = a.n(y),
        b = (a('2G9S'), a('i4UL'), a('+/5o')),
        w = a('ERkP'),
        v = a.n(w),
        g = a('HPNB'),
        C = a('VAZu'),
        E = a('wiP2'),
        x = a('Es6L'),
        T = a('yiKp'),
        k = a.n(T),
        B = a('rHpw'),
        L = B.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, B.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        S = a('MWbm'),
        I = a('yw4N'),
        F = a('TnY3'),
        O = a('cHvH'),
        R = a('3xLC'),
        D = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        _ = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      S.a,
                      { style: L.fill },
                      v.a.createElement(
                        I.a,
                        { style: L.viewportView },
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
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(O.a, null, function (t) {
                    var a = t.windowWidth
                    return g.a.isTwoColumnLayout(a) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, D))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(x.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(E.a.Configure, a),
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
                    a = this.props,
                    n = a.SideNavButton,
                    r = a.TabBar,
                    i = a.TeamsSwitcher,
                    o = a.backLocation,
                    l = a.documentTitle,
                    c = a.headerless,
                    s = a.history,
                    u = a.leftControl,
                    d = a.middleControl,
                    m = a.onBackClick,
                    p = a.rightControl,
                    h = a.screenType,
                    y = a.searchBoxOptions,
                    f = a.secondaryBar,
                    w = a.showSubtitleOnRoot,
                    g = a.showSubtitleOnWideDetail,
                    x = a.subtitle,
                    T = a.title,
                    k = a.titleIconCell,
                    B = a.titleIconCellSize,
                    I = a.withDetailOpen,
                    F = a.withSearchBox,
                    O = a.withTweetButton,
                    R = 'root' === h,
                    D = 'secondaryRoot' === h,
                    _ = 'primaryDetail' === h,
                    H = (_ && g) || (R && w),
                    M = R || (_ && t),
                    A = R ? b.c : _ ? b.a : void 0,
                    P = v.a.createElement(
                      S.a,
                      { style: L.appBarContainer },
                      v.a.createElement(C.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: M,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: m,
                        rightControl: p,
                        secondaryBar: f,
                        subtitle: H ? x : void 0,
                        title: T,
                        titleDomId: A,
                        titleIconCell: k,
                        titleIconCellSize: B,
                      }),
                    ),
                    z =
                      R || (D && I)
                        ? null
                        : v.a.createElement(E.a.Configure, {
                            SideNavButton: n,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: m,
                            rightControl: p,
                            searchBoxOptions: y,
                            subtitle: x,
                            title: T,
                            withSearchBox: F,
                            withTweetButton: O,
                          })
                  return v.a.createElement(v.a.Fragment, null, z, P)
                },
              },
            ]),
            a
          )
        })(v.a.Component)
      f()(_, 'contextType', R.a),
        f()(_, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(F.a)(_)
    },
    Nqmc: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        p = a('KEM+'),
        h = a.n(p),
        y = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        f = a('ERkP'),
        b = a.n(f),
        w = a('t62R'),
        v = a('5mJL'),
        g = a('nBUg'),
        C = a('qjak'),
        E = a('dC06'),
        x = a('rHpw'),
        T = a('XIXT'),
        k = a('yDX5'),
        B = a('MWbm'),
        L = [
          'avatarSize',
          'bottomControl',
          'iconStyle',
          'nativeID',
          'onLayout',
          'rightControl',
          'style',
          'testID',
          'textColor',
          'textSize',
          'topControl',
          'weight',
          'withBottomBorder',
          'withLeftPadding',
          'withTextCentered',
        ],
        S = { viewType: 'social_context' },
        I = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            return o()(this, a), t.apply(this, arguments)
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    n = t.bottomControl,
                    i = t.iconStyle,
                    o = t.nativeID,
                    l = t.onLayout,
                    c = t.rightControl,
                    s = t.style,
                    u = t.testID,
                    d = t.textColor,
                    m = t.textSize,
                    p = t.topControl,
                    h = t.weight,
                    f = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, r()(t, L)),
                    x = Object(C.a)(E),
                    T = x.Icon,
                    k = x.accessibilityLabel,
                    I = x.link,
                    O = x.text,
                    R = b.a.createElement(
                      w.b,
                      { accessibilityLabel: k, color: d, nativeID: o, numberOfLines: 2, size: m, testID: u, weight: h },
                      O,
                    ),
                    D = this._getStyles(),
                    _ = D.cellStyle,
                    H = D.viewStyle
                  return O
                    ? b.a.createElement(g.b.UseProps, null, function (t) {
                        return b.a.createElement(
                          y.a,
                          { behavioralEventContext: S },
                          b.a.createElement(
                            b.a.Fragment,
                            null,
                            p || null,
                            b.a.createElement(
                              B.a,
                              {
                                onLayout: l,
                                style: [s, H, t.socialContextRefreshEnabled() && !f && F.socialContextRefresh],
                              },
                              b.a.createElement(
                                v.a,
                                {
                                  avatarCell: T || (f ? null : void 0),
                                  avatarCellStyle: [
                                    i,
                                    F.socialContextIconColumn,
                                    !f && F.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !f && F.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: _,
                                },
                                b.a.createElement(
                                  B.a,
                                  { style: F.cellWrapper },
                                  b.a.createElement(
                                    B.a,
                                    {
                                      style: [
                                        F.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !f && F.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    I ? e._renderLink(I, R) : R,
                                  ),
                                  c || null,
                                ),
                              ),
                              n || null,
                            ),
                          ),
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderLink',
                value: function (e, t) {
                  var a = this.props,
                    n = a.contextType,
                    r = a.nativeID,
                    i = a.onClick,
                    o = a.retweetData,
                    l = a.textColor,
                    c = a.topicData,
                    s = (o || {}).screenName,
                    u = b.a.createElement(w.b, { color: l, link: e, nativeID: r, onClick: i }, t)
                  return n === E.a.Topic && c
                    ? b.a.createElement(T.a, { topicId: c.topicId }, u)
                    : n === E.a.Retweet && s
                    ? b.a.createElement(k.a, { screenName: s }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    n = e.withBottomBorder,
                    r = e.withTextCentered,
                    i = a === E.a.TextOnly,
                    o = n ? [F.bottomBorderMargin, t && F.bottomBorder] : [],
                    l = n && !t ? [F.bottomBorder] : []
                  return (
                    i && l.push(F.topicContext),
                    r && l.push(F.socialContextTextCentered),
                    { viewStyle: o, cellStyle: l }
                  )
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      h()(I, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var F = x.a.create(function (e) {
        return {
          socialContextIconColumn: { alignItems: 'flex-end', justifyContent: 'center' },
          bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical },
          cellWrapper: { flexDirection: 'row' },
          bottomBorder: {
            paddingBottom: e.spaces.space4,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            borderBottomColor: e.colors.borderColor,
          },
          topicContext: { paddingBottom: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')') },
          socialContextTextColumn: { alignItems: 'flex-start', flexShrink: 1, justifyContent: 'center' },
          unsetIconWidth: { flexBasis: 'unset' },
          socialContextRefreshIcon: { marginRight: e.spaces.space8 },
          socialContextRefresh: { marginBottom: e.spaces.space8 },
          socialContextRefreshTextColumn: { minHeight: e.spaces.space32 },
          socialContextTextCentered: { justifyContent: 'center' },
        }
      })
      t.a = I
    },
    Q3sg: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
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
    aPcQ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
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
                d: 'M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    byUE: function (e, t, a) {
      'use strict'
      a.r(t)
      a('6U7i'), a('KqXw'), a('WNMA')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('wChl'),
        o = a('WpDa'),
        l = a('ZNT5'),
        c = function (e) {
          return Object(l.a)({
            timelineId: 'articleTweetsTimeline-'.concat(e),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTweetsTimeline
            },
            getEndpointParams: function (t) {
              var a = t.count,
                n = t.cursor
              return { articleId: e, count: a, cursor: 'string' == typeof n ? n : void 0 }
            },
            context: 'FETCH_ARTICLE_TWEETS_TIMELINE',
            perfKey: 'articleTweetsTimeline',
            formatResponse: o.a,
          })
        },
        s = a('KEM+'),
        u = a.n(s),
        d = a('QIgh'),
        m = a('8UdT'),
        p = a('IcAo'),
        h = a('VrCx'),
        y = a('xWpm'),
        f = Object(p.a)(
          {},
          d.b,
          u()({}, m.b.Tweet, {
            handlers: u()(
              {},
              h.a.TweetWithoutCard,
              Object(y.f)({
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        b = a('3XMw'),
        w = a.n(b),
        v = a('fTQJ'),
        g = a('M2mT'),
        C = a('7n04'),
        E = a('MWbm'),
        x = a('yw4N'),
        T = a('Irs7'),
        k = a('t62R'),
        B = a('rHpw'),
        L = w.a.d35d74e3,
        S = w.a.f88e624e,
        I = B.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(T.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return r.a.createElement(
            g.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: L, withBottomBorder: !0 },
            r.a.createElement(
              E.a,
              { style: I.contentWrapper },
              r.a.createElement(
                E.a,
                { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite' },
                r.a.createElement(k.b, { visuallyHidden: !0 }, S),
                r.a.createElement(i.a, { id: t, withInternalLink: !1 }),
              ),
              r.a.createElement(
                x.a,
                { style: I.viewport },
                r.a.createElement(v.a, { anchoring: C.a, entryConfiguration: f, module: c(t), title: L }),
              ),
            ),
          )
        },
        { section: 'top_articles', component: 'conversation' },
      )
    },
    dC06: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f'), a('ERkP')
      var n = Object.freeze({
        Community: 'Community',
        Pin: 'Pin',
        Retweet: 'Retweet',
        Like: 'Like',
        Follow: 'Follow',
        Moment: 'Moment',
        NewTweets: 'NewTweets',
        Reply: 'Reply',
        Conversation: 'Conversation',
        TextOnly: 'TextOnly',
        Facepile: 'Facepile',
        Feedback: 'Feedback',
        Topic: 'Topic',
        List: 'List',
        Location: 'Location',
        Megaphone: 'Megaphone',
        Bird: 'Bird',
        NewUser: 'NewUser',
        SmartBlockExpiration: 'SmartBlockExpiration',
        FollowMutual: 'FollowMutual',
        FollowFollowing: 'FollowFollowing',
        FollowFollowed: 'FollowFollowed',
        SocialProof: 'SocialProof',
        Spaces: 'Spaces',
        Sparkle: 'Sparkle',
        Trending: 'Trending',
      })
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('t62R'),
        o = a('MAI/'),
        l = a('shC7'),
        c = a('dC06'),
        s = a('rHpw'),
        u = a('3XMw'),
        d = a.n(u),
        m = a('FITr'),
        p = a('yVEN'),
        h = a('uCrx'),
        y = a('6ZHn'),
        f = a('GcQN'),
        b = a('x0mb'),
        w = a('Hp3u'),
        v = a('yiKp'),
        g = a.n(v),
        C = a('Lsrn'),
        E = a('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      x.metadata = { width: 24, height: 24 }
      var T = x,
        k = a('EHV7'),
        B = a('wpLu'),
        L = a('EfHu'),
        S = a('cOhU'),
        I = a('cap5'),
        F = a('r9x5'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var R = O,
        D = a('0qK0'),
        _ = a('aPcQ'),
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var M = H,
        A = a('lUZE'),
        P = d.a.jb767df7,
        z = d.a.bb3323fa,
        j = d.a.db0798ed,
        N = d.a.dc716ec8,
        W = function (e) {
          return r.a.createElement(i.b, { dir: l.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        K = function (e, t) {
          return t
            ? P
            : (function (e) {
                var t = W(e)
                return r.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        U = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        q = s.a.create(function (e) {
          return {
            circle: { color: e.colors.primary, width: '0.5em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorRed: { color: e.colors.magenta500 },
            grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: 'grayscale(100%)' },
            brandColor: { color: e.colors.brandColor },
          }
        })
      t.a = function (e) {
        var t = e.contextType,
          a = e.iconSize,
          n = e.link,
          i = e.retweetData,
          l = e.text,
          s = e.topicData,
          u = e.userAvatarUrls,
          d = i || {},
          v = d.isSelfRetweet,
          g = d.name,
          C = d.screenName,
          E = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              n = U[t],
              i = [q.colorDeepGray, n],
              l = r.a.createElement(m.a, { style: i }),
              s = r.a.createElement(p.a, { style: i }),
              u = r.a.createElement(h.a, { style: i }),
              d = r.a.createElement(y.a, { style: i }),
              v = r.a.createElement(f.a, { style: i }),
              g = r.a.createElement(b.a, { style: q.circle }),
              C = r.a.createElement(w.a, { style: i }),
              E = r.a.createElement(T, { style: i }),
              x = r.a.createElement(k.a, { style: i }),
              O = r.a.createElement(B.a, { style: i }),
              H = r.a.createElement(L.a, { style: i }),
              P = r.a.createElement(S.a, { style: i }),
              z = r.a.createElement(I.a, { style: i }),
              j = r.a.createElement(F.a, { style: i }),
              N = r.a.createElement(R, { style: i }),
              W = r.a.createElement(D.a, { style: i }),
              K = r.a.createElement(_.a, { style: i }),
              V = r.a.createElement(M, { style: i }),
              Q = r.a.createElement(o.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              X = r.a.createElement(A.a, { style: i })
            switch (e) {
              case c.a.Pin:
                return l
              case c.a.Retweet:
                return s
              case c.a.Like:
                return u
              case c.a.Follow:
                return d
              case c.a.Moment:
                return v
              case c.a.NewTweets:
                return g
              case c.a.Reply:
              case c.a.Conversation:
                return C
              case c.a.Feedback:
                return E
              case c.a.Topic:
                return x
              case c.a.List:
                return O
              case c.a.Location:
                return H
              case c.a.Community:
                return P
              case c.a.Spaces:
                return z
              case c.a.Sparkle:
                return j
              case c.a.SmartBlockExpiration:
                return N
              case c.a.SocialProof:
              case c.a.FollowFollowed:
                return V
              case c.a.FollowMutual:
                return K
              case c.a.FollowFollowing:
                return W
              case c.a.Facepile:
                return Q
              case c.a.Bird:
                return X
              case c.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case c.a.Retweet:
            return { Icon: E, text: l || K(g, v), link: C ? 'https://twitter.com/'.concat(C) : void 0 }
          case c.a.Pin:
            return { Icon: E, text: l || z }
          case c.a.Topic:
            return {
              Icon: E,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? N({ topicName: l })
                  : j({ topicName: l }),
              text: l ? W(l) : null,
              link: n,
            }
          default:
            return { Icon: E, text: l ? W(l) : null, link: n }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
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
                d: 'M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    wChl: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        l = (a('6U7i'), a('1t7P'), a('jQ/y'), a('2G9S'), a('uFXj'), a('ERkP')),
        c = a.n(l),
        s = a('BUB3'),
        u = a('v6aA'),
        d = (a('TJCb'), a('7x/C'), a('DZ+c'), a('3zvM')),
        m = a('lMB6'),
        p = Object(d.e)({ namespace: 'articles' }),
        h = m.a.register(p),
        y = a('rxPX'),
        f = a('0KEI'),
        b = a('EGrD'),
        w = function (e, t) {
          return h.select(e, t.id.toString())
        },
        v = Object(y.a)()
          .propsFromState(function () {
            return { adFreeDomains: b.c, article: w }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('ARTICLE_SUMMARY'),
              fetchAdFreeToken: b.a,
            }
          }),
        g = a('3XMw'),
        C = a.n(g),
        E = a('k89r'),
        x = a('MWbm'),
        T = a('TnY3'),
        k = a('PbQQ'),
        B = a('pjBI'),
        L = a('t62R'),
        S = a('GBcw'),
        I = a('lphh'),
        F = a('/yvb'),
        O = a('9Xij'),
        R = a('rHpw'),
        D = a('TIdA'),
        _ = a('A91F'),
        H = a('Nqmc'),
        M = a('htQn'),
        A = a('cm6r'),
        P = a('LSr9'),
        z = a('6vUc'),
        j = a('IcAo'),
        N = C.a.afb7e8f7,
        W = R.a.create(function (e) {
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
      t.a = Object(T.a)(
        v(function (e) {
          var t = e.adFreeDomains,
            a = e.article,
            n = e.createLocalApiErrorHandler,
            i = e.fetchAdFreeToken,
            l = (e.id, e.location),
            d = e.socialContext,
            m = e.withInternalLink,
            p = c.a.useContext(u.a).userClaims,
            h = Object(E.a)(),
            y = c.a.useContext(k.a.default),
            f = a || {},
            b = f.article_url,
            w = f.description,
            v = f.domain,
            g = f.domain_url,
            C = f.image_url,
            T = f.publish_date,
            K = f.title,
            U = {
              domain: k.b.useOpaqueIdentifier(),
              timestamp: k.b.useOpaqueIdentifier(),
              title: k.b.useOpaqueIdentifier(),
              description: k.b.useOpaqueIdentifier(),
              socialContext: k.b.useOpaqueIdentifier(),
            },
            q = [U.domain, U.timestamp, U.title, U.description, U.socialContext],
            V = p.isTrueAndEnabled('subscriptions_feature_1006'),
            Q = !!V && Object(P.c)(t, g),
            X = c.a.useMemo(
              function () {
                var e = Object(z.a)(h.contextualScribeData.items || []) || {}
                return {
                  url: b,
                  items: [
                    Object(j.a)({}, e, { article_details: { publisher_name: v, is_showing_label: Q, is_ad_free: Q } }),
                  ],
                }
              },
              [h.contextualScribeData.items, b, v, Q],
            ),
            G = c.a.useCallback(
              function () {
                h.scribe({ action: 'impression', data: X })
              },
              [h, X],
            )
          if (
            (c.a.useEffect(
              function () {
                G()
              },
              [G],
            ),
            !a)
          )
            return null
          var Y,
            J,
            Z = d || {},
            $ = Z.contextImageUrls,
            ee = Z.landingUrl,
            te = Z.text,
            ae = C ? { url: C, height: 750, width: 1250 } : void 0,
            ne = { pathname: b, external: !0 },
            re = function (e) {
              if ((h.scribe({ element: m ? 'read_article' : 'article_header', action: 'open_link', data: X }), V)) {
                var a = new P.a(i, n()).getAdFreeArticlesClickHandler({
                    destinationUrl: b,
                    linkDomain: g,
                    adFreeArticleDomains: t,
                  }),
                  r = o()(a, 2),
                  l = r[0],
                  c = r[1]
                l && c(e)
              }
            },
            ie = function () {
              h.scribe({ element: 'conversation_view', action: 'click', data: X })
            },
            oe = ee ? y.getLinkFromUrtUrl(ee) : void 0,
            le = oe ? y.withAnchorless(oe) : void 0,
            ce = le
              ? r()(
                  r()({}, le),
                  {},
                  {
                    pathname: ''
                      .concat(le.pathname, '?time_window=')
                      .concat(
                        ((J = null == l || null === (Y = l.query) || void 0 === Y ? void 0 : Y.time_window),
                        Number(J) || 24),
                      ),
                  },
                )
              : void 0,
            se = c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                x.a,
                { style: W.horizontalContainer },
                c.a.createElement(
                  x.a,
                  { style: W.textContainer },
                  c.a.createElement(
                    B.a,
                    { style: W.middotGroup },
                    v &&
                      c.a.createElement(
                        L.b,
                        { color: 'gray700', nativeID: U.domain, size: 'subtext2', weight: 'bold' },
                        v,
                      ),
                    T &&
                      c.a.createElement(
                        L.b,
                        { color: 'gray700', nativeID: U.timestamp, size: 'subtext2' },
                        c.a.createElement(S.a, { timestamp: T }),
                      ),
                  ),
                  c.a.createElement(
                    L.b,
                    {
                      color: 'text',
                      link: ce,
                      nativeID: U.title,
                      numberOfLines: 3,
                      size: 'headline2',
                      style: W.text,
                      weight: 'bold',
                      withInteractiveStyling: !1,
                    },
                    K,
                  ),
                  w ? c.a.createElement(L.b, { nativeID: U.description, numberOfLines: 2 }, w) : null,
                  Q && c.a.createElement(x.a, { style: W.adFreeLabel }, c.a.createElement(I.a, null)),
                  m
                    ? c.a.createElement(
                        x.a,
                        { style: W.buttonContainer },
                        c.a.createElement(F.a, { link: ne, onClick: re, size: 'xSmall', type: 'primaryOutlined' }, N),
                      )
                    : null,
                ),
                ae
                  ? c.a.createElement(
                      x.a,
                      { style: W.imageContainer },
                      c.a.createElement(
                        O.a,
                        { ratio: R.a.theme.aspectRatios.square },
                        c.a.createElement(D.a, { accessibilityLabel: '', aspectMode: _.a.SQUARE, image: ae }),
                      ),
                    )
                  : null,
              ),
              c.a.createElement(H.a, {
                contextType: 'Facepile',
                iconSize: 'large',
                nativeID: U.socialContext,
                text: te,
                textSize: 'subtext2',
                userAvatarUrls: $,
                withLeftPadding: !1,
                withTextCentered: !0,
              }),
            )
          return m
            ? c.a.createElement(s.a, { exact: !1, path: (null == ce ? void 0 : ce.pathname) || '' }, function (e) {
                return c.a.createElement(
                  M.a,
                  {
                    accessibilityLabelledBy: q,
                    accessibilityRole: 'article',
                    accessibilityState: { selected: e },
                    link: ce,
                    onClick: ie,
                    style: W.container,
                  },
                  se,
                )
              })
            : c.a.createElement(A.a, { link: ne, onClick: re, style: [W.container, W.bottomBorder] }, se)
        }),
      )
    },
    x0mb: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
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
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
