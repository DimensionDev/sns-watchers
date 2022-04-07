;(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    EqEI: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TabLabels', function () {
          return ae
        }),
        a.d(t, 'ArticleListScreen', function () {
          return ne
        })
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o =
          (a('yH/f'),
          a('KqXw'),
          a('WNMA'),
          a('lTEL'),
          a('7x/C'),
          a('kYxP'),
          a('MvUL'),
          a('2G9S'),
          a('vrRf'),
          a('z84I'),
          a('ERkP')),
        l = a.n(o),
        c = a('HPNB'),
        s = a('WpDa'),
        u = a('ZNT5'),
        d = 'FETCH_TOP_ARTICLES_TIMELINE',
        m = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 864e5
          return Object(u.a)({
            timelineId: 'articlesTimeline-'.concat(e, '-').concat(t),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTimeline
            },
            getEndpointParams: function (a) {
              var n = a.count,
                r = a.cursor
              return {
                count: n,
                cursor: 'string' == typeof r ? r : void 0,
                articleListSeedType: e,
                timeWindowMillis: t,
              }
            },
            context: d,
            perfKey: 'articlesTimeline',
            formatResponse: s.a,
          })
        },
        p = a('v6aA'),
        h = a('qdp+'),
        f = (a('6U7i'), a('Hw0q')),
        y = a('EGrD'),
        b = a('WyG8'),
        v = a('rxPX'),
        w = function (e, t) {
          var a = t.location,
            n = t.match.params,
            r = ''
          return (
            n && n.tabId && 'string' == typeof n.tabId
              ? (r = n.tabId)
              : a && a.query && a.query.tabId && (r = Object(f.a)(a.query.tabId) || ''),
            r === b.a.FRIENDS_OF_FRIENDS ? b.a.FRIENDS_OF_FRIENDS : b.a.FOLLOWS
          )
        },
        E = function (e, t) {
          var a,
            n = t.location,
            r = null == n || null === (a = n.query) || void 0 === a ? void 0 : a.time_window
          return Number(r) || 24
        },
        g = Object(v.a)()
          .propsFromState(function () {
            return { seedType: w, timeWindowQuery: E }
          })
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: y.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        C = a('SrtL'),
        x = a('yiKp'),
        T = a.n(x),
        I = a('ezF+'),
        S = Object.freeze({ Default: 'Default' }),
        k =
          (a('JtPf'),
          a('87if'),
          {
            loader: function () {
              return a.e(201).then(a.bind(null, 'QvpQ'))
            },
            loaderKey: 'defaultArticleLoader',
            strategy: a('XBtf').a.Critical,
          }),
        L = I.c({
          selectDisplayType: function (e) {
            return e.content.articleDisplayType || S.Default
          },
          handlers: i()({}, S.Default, k),
        }),
        B = a('QIgh'),
        F = a('8UdT'),
        O = T()(T()({}, B.b), {}, i()({}, F.b.Article, L)),
        _ = a('+RfI'),
        R = a('fTQJ'),
        D = a('M2mT'),
        H = a('7n04'),
        M = a('HQ0t'),
        A = a('t62R'),
        z = a('mjJ+'),
        P = a('IG7M'),
        N = a('FIs5'),
        j = a('cHvH'),
        W = a('k/OQ'),
        K = a('rHpw'),
        U = a('3XMw'),
        q = a.n(U),
        Q = q.a.b7fa0cfd,
        V = q.a.e15e5636,
        X = q.a.e950f6ef,
        G = q.a.af293dc2,
        Y = q.a.f42e882a,
        J = q.a.e15e5636,
        Z = q.a.a0f01bca,
        $ = function (e) {
          return 60 * e * 60 * 1e3
        },
        ee = l.a.createElement(
          q.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          l.a.createElement(A.b, { color: 'link', link: '/i/connect_people' }, q.a.e7dcfb8f),
        ),
        te = [b.a.FOLLOWS, b.a.FRIENDS_OF_FRIENDS],
        ae = Object.freeze(((n = {}), i()(n, b.a.FOLLOWS, G), i()(n, b.a.FRIENDS_OF_FRIENDS, Y), n)),
        ne = function (e) {
          var t = e.analytics,
            a = e.history,
            n = e.loadAdFreeArticleDomainsFromPersistence,
            r = (e.location, e.match),
            i = e.seedType,
            o = e.timeWindowQuery,
            s = l.a.useContext(p.a),
            u = s.featureSwitches,
            d = s.userClaims.isTrueAndEnabled('subscriptions_feature_1006'),
            f = u.isTrue('longform_top_articles_time_window_enabled'),
            y = u.isTrue('longform_top_articles_friends_of_friends_enabled')
          l.a.useEffect(function () {
            d && n()
          })
          var v = function (e) {
              return '?time_window='.concat(e || 24)
            },
            w = l.a.useCallback(
              function () {
                return i === b.a.FRIENDS_OF_FRIENDS ? 'fof' : 'following'
              },
              [i],
            ),
            E = l.a.useCallback(
              function () {
                t.scribe({
                  action: 'impression',
                  component: 'top_articles_'.concat(w()),
                  data: { context: 'time_window_'.concat($(o)) },
                })
              },
              [t, w, o],
            )
          l.a.useEffect(
            function () {
              E()
            },
            [E],
          )
          var g,
            x,
            T = function (e) {
              var t = e.entries,
                n = r.params.articleId,
                l = Object(h.a)(t, function (e) {
                  return e.type === F.b.Article && !!e.content && e.content.articleId
                })
              !n && l && a.replace('/i/articles/'.concat(i, '/').concat(l).concat(v(o)))
            },
            I = function (e) {
              return function () {
                a.replace('/i/articles/'.concat(i).concat(v(e)))
              }
            },
            S = [
              { text: J({ count: 1 }), onClick: I(1) },
              { text: J({ count: 2 }), onClick: I(2) },
              { text: J({ count: 4 }), onClick: I(4) },
              { text: J({ count: 8 }), onClick: I(8) },
              { text: J({ count: 24 }), onClick: I(24) },
            ],
            k = l.a.createElement(P.a, {
              Icon: _.a,
              label: Z,
              renderActionMenu: function (e) {
                return l.a.createElement(z.a, { items: S, onCloseRequested: e, shouldCloseOnClick: !0 })
              },
            }),
            L = function () {
              return l.a.createElement(N.a, { header: X, message: ee, style: re.emptyState })
            },
            B = function (e) {
              return e === i
            },
            A = function (e) {
              return '/i/articles/'.concat(e)
            },
            K = te.map(function (e) {
              return {
                key: e,
                label: ae[e],
                isActive: function () {
                  return B(e)
                },
                to: { pathname: A(e) },
                onClick: function () {
                  t.scribe({ action: 'click', element: 'tab', component: 'top_articles_'.concat(w()) })
                },
              }
            }),
            U = ((g = i), (x = te.indexOf(g)) > -1 ? x : 0)
          return l.a.createElement(j.a, null, function (e) {
            var t = e.windowWidth,
              a = c.a.isTwoColumnLayout(t)
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(C.a, { title: Q }),
              l.a.createElement(
                D.a,
                {
                  rightControl: f ? k : void 0,
                  screenType: 'root',
                  showSubtitleOnRoot: !0,
                  subtitle: V({ count: o || 24 }),
                  title: l.a.createElement(M.a, { text: Q }),
                },
                y ? l.a.createElement(W.a, { links: K, visibleItemIndex: U }) : null,
                l.a.createElement(R.a, {
                  anchoring: H.a,
                  entryConfiguration: O,
                  module: m(i, $(o || 24)),
                  onEntriesRendered: a ? T : void 0,
                  renderEmptyState: L,
                  title: Q,
                }),
              ),
            )
          })
        },
        re = K.a.create(function (e) {
          return {
            emptyState: {
              height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ')'),
              justifyContent: 'center',
              marginVertical: 0,
            },
          }
        }),
        ie = g(ne)
      t.default = ie
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
        f = a('KEM+'),
        y = a.n(f),
        b = (a('2G9S'), a('i4UL'), a('+/5o')),
        v = a('ERkP'),
        w = a.n(v),
        E = a('HPNB'),
        g = a('VAZu'),
        C = a('wiP2'),
        x = a('Es6L'),
        T = a('yiKp'),
        I = a.n(T),
        S = a('rHpw'),
        k = S.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I()(I()({}, S.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = a('MWbm'),
        B = a('yw4N'),
        F = a('TnY3'),
        O = a('cHvH'),
        _ = a('3xLC'),
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
          m()(a, e)
          var t = h()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? w.a.createElement(
                      L.a,
                      { style: k.fill },
                      w.a.createElement(
                        B.a,
                        { style: k.viewportView },
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
                  return w.a.createElement(O.a, null, function (t) {
                    var a = t.windowWidth
                    return E.a.isTwoColumnLayout(a) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = (e.appBarStyle, e.children),
                    a =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, R))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    Object(x.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : w.a.createElement(C.a.Configure, a),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return w.a.createElement(
                    w.a.Fragment,
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
                    o = a.appBarStyle,
                    l = a.backLocation,
                    c = a.documentTitle,
                    s = a.headerless,
                    u = a.history,
                    d = a.leftControl,
                    m = a.middleControl,
                    p = a.onBackClick,
                    h = a.rightControl,
                    f = a.screenType,
                    y = a.searchBoxOptions,
                    v = a.secondaryBar,
                    E = a.showSubtitleOnRoot,
                    x = a.showSubtitleOnWideDetail,
                    T = a.subtitle,
                    I = a.title,
                    S = a.titleIconCell,
                    B = a.titleIconCellSize,
                    F = a.withDetailOpen,
                    O = a.withSearchBox,
                    _ = a.withTweetButton,
                    R = 'root' === f,
                    D = 'secondaryRoot' === f,
                    H = 'primaryDetail' === f,
                    M = (H && x) || (R && E),
                    A = R || (H && t),
                    z = R ? b.c : H ? b.a : void 0,
                    P = w.a.createElement(
                      L.a,
                      { style: k.appBarContainer },
                      w.a.createElement(g.a, {
                        backLocation: l,
                        fixed: !1,
                        hideBackButton: A,
                        history: u,
                        leftControl: d,
                        middleControl: m,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: v,
                        style: o,
                        subtitle: M ? T : void 0,
                        title: I,
                        titleDomId: z,
                        titleIconCell: S,
                        titleIconCellSize: B,
                      }),
                    ),
                    N =
                      R || (D && F)
                        ? null
                        : w.a.createElement(C.a.Configure, {
                            SideNavButton: n,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: l,
                            documentTitle: c,
                            headerless: s,
                            middleControl: m,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: y,
                            subtitle: T,
                            title: I,
                            withSearchBox: O,
                            withTweetButton: _,
                          })
                  return w.a.createElement(w.a.Fragment, null, N, P)
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      y()(D, 'contextType', _.a),
        y()(D, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(F.a)(D)
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
        f = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        y = a('ERkP'),
        b = a.n(y),
        v = a('t62R'),
        w = a('5mJL'),
        E = a('nBUg'),
        g = a('qjak'),
        C = a('dC06'),
        x = a('rHpw'),
        T = a('XIXT'),
        I = a('yDX5'),
        S = a('MWbm'),
        k = [
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
        L = { viewType: 'social_context' },
        B = (function (e) {
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
                    y = (t.withBottomBorder, t.withLeftPadding),
                    C = (t.withTextCentered, r()(t, k)),
                    x = Object(g.a)(C),
                    T = x.Icon,
                    I = x.accessibilityLabel,
                    B = x.link,
                    O = x.text,
                    _ = b.a.createElement(
                      v.b,
                      { accessibilityLabel: I, color: d, nativeID: o, numberOfLines: 2, size: m, testID: u, weight: h },
                      O,
                    ),
                    R = this._getStyles(),
                    D = R.cellStyle,
                    H = R.viewStyle
                  return O
                    ? b.a.createElement(E.b.UseProps, null, function (t) {
                        return b.a.createElement(
                          f.a,
                          { behavioralEventContext: L },
                          b.a.createElement(
                            b.a.Fragment,
                            null,
                            p || null,
                            b.a.createElement(
                              S.a,
                              {
                                onLayout: l,
                                style: [s, H, t.socialContextRefreshEnabled() && !y && F.socialContextRefresh],
                              },
                              b.a.createElement(
                                w.a,
                                {
                                  avatarCell: T || (y ? null : void 0),
                                  avatarCellStyle: [
                                    i,
                                    F.socialContextIconColumn,
                                    !y && F.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !y && F.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: D,
                                },
                                b.a.createElement(
                                  S.a,
                                  { style: F.cellWrapper },
                                  b.a.createElement(
                                    S.a,
                                    {
                                      style: [
                                        F.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !y && F.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    B ? e._renderLink(B, _) : _,
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
                    u = b.a.createElement(v.b, { color: l, link: e, nativeID: r, onClick: i }, t)
                  return n === C.a.Topic && c
                    ? b.a.createElement(T.a, { topicId: c.topicId }, u)
                    : n === C.a.Retweet && s
                    ? b.a.createElement(I.a, { screenName: s }, u)
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
                    i = a === C.a.TextOnly,
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
      h()(B, 'defaultProps', {
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
      t.a = B
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
        f = a('xWpm'),
        y = Object(p.a)(
          {},
          d.b,
          u()({}, m.b.Tweet, {
            handlers: u()(
              {},
              h.a.TweetWithoutCard,
              Object(f.e)({
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        b = a('3XMw'),
        v = a.n(b),
        w = a('fTQJ'),
        E = a('M2mT'),
        g = a('7n04'),
        C = a('MWbm'),
        x = a('yw4N'),
        T = a('Irs7'),
        I = a('t62R'),
        S = a('rHpw'),
        k = v.a.d35d74e3,
        L = v.a.f88e624e,
        B = S.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(T.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return r.a.createElement(
            E.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: k, withBottomBorder: !0 },
            r.a.createElement(
              C.a,
              { style: B.contentWrapper },
              r.a.createElement(
                C.a,
                { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite' },
                r.a.createElement(I.b, { visuallyHidden: !0 }, L),
                r.a.createElement(i.a, { id: t, withInternalLink: !1 }),
              ),
              r.a.createElement(
                x.a,
                { style: B.viewport },
                r.a.createElement(w.a, { anchoring: g.a, entryConfiguration: y, module: c(t), title: k }),
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
        f = a('6ZHn'),
        y = a('GcQN'),
        b = a('x0mb'),
        v = a('Hp3u'),
        w = a('yiKp'),
        E = a.n(w),
        g = a('Lsrn'),
        C = a('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
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
        I = a('EHV7'),
        S = a('wpLu'),
        k = a('EfHu'),
        L = a('cOhU'),
        B = a('cap5'),
        F = a('r9x5'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
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
      var _ = O,
        R = a('0qK0'),
        D = a('aPcQ'),
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
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
        z = d.a.jb767df7,
        P = d.a.bb3323fa,
        N = d.a.db0798ed,
        j = d.a.dc716ec8,
        W = function (e) {
          return r.a.createElement(i.b, { dir: l.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        K = function (e, t) {
          return t
            ? z
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
          w = d.isSelfRetweet,
          E = d.name,
          g = d.screenName,
          C = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              n = U[t],
              i = [q.colorDeepGray, n],
              l = r.a.createElement(m.a, { style: i }),
              s = r.a.createElement(p.a, { style: i }),
              u = r.a.createElement(h.a, { style: i }),
              d = r.a.createElement(f.a, { style: i }),
              w = r.a.createElement(y.a, { style: i }),
              E = r.a.createElement(b.a, { style: q.circle }),
              g = r.a.createElement(v.a, { style: i }),
              C = r.a.createElement(T, { style: i }),
              x = r.a.createElement(I.a, { style: i }),
              O = r.a.createElement(S.a, { style: i }),
              H = r.a.createElement(k.a, { style: i }),
              z = r.a.createElement(L.a, { style: i }),
              P = r.a.createElement(B.a, { style: i }),
              N = r.a.createElement(F.a, { style: i }),
              j = r.a.createElement(_, { style: i }),
              W = r.a.createElement(R.a, { style: i }),
              K = r.a.createElement(D.a, { style: i }),
              Q = r.a.createElement(M, { style: i }),
              V = r.a.createElement(o.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
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
                return w
              case c.a.NewTweets:
                return E
              case c.a.Reply:
              case c.a.Conversation:
                return g
              case c.a.Feedback:
                return C
              case c.a.Topic:
                return x
              case c.a.List:
                return O
              case c.a.Location:
                return H
              case c.a.Community:
                return z
              case c.a.Spaces:
                return P
              case c.a.Sparkle:
                return N
              case c.a.SmartBlockExpiration:
                return j
              case c.a.SocialProof:
              case c.a.FollowFollowed:
                return Q
              case c.a.FollowMutual:
                return K
              case c.a.FollowFollowing:
                return W
              case c.a.Facepile:
                return V
              case c.a.Bird:
                return X
              case c.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case c.a.Retweet:
            return { Icon: C, text: l || K(E, w), link: g ? 'https://twitter.com/'.concat(g) : void 0 }
          case c.a.Pin:
            return { Icon: C, text: l || P }
          case c.a.Topic:
            return {
              Icon: C,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? j({ topicName: l })
                  : N({ topicName: l }),
              text: l ? W(l) : null,
              link: n,
            }
          default:
            return { Icon: C, text: l ? W(l) : null, link: n }
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
        f = a('rxPX'),
        y = a('0KEI'),
        b = a('EGrD'),
        v = function (e, t) {
          return h.select(e, t.id.toString())
        },
        w = Object(f.a)()
          .propsFromState(function () {
            return { adFreeDomains: b.c, article: v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('ARTICLE_SUMMARY'),
              fetchAdFreeToken: b.a,
            }
          }),
        E = a('3XMw'),
        g = a.n(E),
        C = a('k89r'),
        x = a('MWbm'),
        T = a('TnY3'),
        I = a('PbQQ'),
        S = a('pjBI'),
        k = a('t62R'),
        L = a('GBcw'),
        B = a('lphh'),
        F = a('/yvb'),
        O = a('9Xij'),
        _ = a('rHpw'),
        R = a('TIdA'),
        D = a('A91F'),
        H = a('Nqmc'),
        M = a('htQn'),
        A = a('cm6r'),
        z = a('LSr9'),
        P = a('6vUc'),
        N = a('IcAo'),
        j = g.a.afb7e8f7,
        W = _.a.create(function (e) {
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
        w(function (e) {
          var t = e.adFreeDomains,
            a = e.article,
            n = e.createLocalApiErrorHandler,
            i = e.fetchAdFreeToken,
            l = (e.id, e.location),
            d = e.socialContext,
            m = e.withInternalLink,
            p = c.a.useContext(u.a).userClaims,
            h = Object(C.a)(),
            f = c.a.useContext(I.a.default),
            y = a || {},
            b = y.article_url,
            v = y.description,
            w = y.domain,
            E = y.domain_url,
            g = y.image_url,
            T = y.publish_date,
            K = y.title,
            U = {
              domain: I.b.useOpaqueIdentifier(),
              timestamp: I.b.useOpaqueIdentifier(),
              title: I.b.useOpaqueIdentifier(),
              description: I.b.useOpaqueIdentifier(),
              adFree: I.b.useOpaqueIdentifier(),
              socialContext: I.b.useOpaqueIdentifier(),
            },
            q = p.isTrueAndEnabled('subscriptions_feature_1006'),
            Q = !!q && Object(z.c)(t, E),
            V = [U.domain, U.timestamp, U.title, U.description, Q ? U.adFree : '', U.socialContext],
            X = c.a.useMemo(
              function () {
                var e = Object(P.a)(h.contextualScribeData.items || []) || {}
                return {
                  url: b,
                  items: [
                    Object(N.a)({}, e, { article_details: { publisher_name: w, is_showing_label: Q, is_ad_free: Q } }),
                  ],
                }
              },
              [h.contextualScribeData.items, b, w, Q],
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
            ae = g ? { url: g, height: 750, width: 1250 } : void 0,
            ne = { pathname: b, external: !0 },
            re = function (e) {
              if ((h.scribe({ element: m ? 'read_article' : 'article_header', action: 'open_link', data: X }), q)) {
                var a = new z.a(i, n()).getAdFreeArticlesClickHandler({
                    destinationUrl: b,
                    linkDomain: E,
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
            oe = ee ? f.getLinkFromUrtUrl(ee) : void 0,
            le = oe ? f.withAnchorless(oe) : void 0,
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
                    S.a,
                    { style: W.middotGroup },
                    w &&
                      c.a.createElement(
                        k.b,
                        { color: 'gray700', nativeID: U.domain, size: 'subtext2', weight: 'bold' },
                        w,
                      ),
                    T &&
                      c.a.createElement(
                        k.b,
                        { color: 'gray700', nativeID: U.timestamp, size: 'subtext2' },
                        c.a.createElement(L.a, { timestamp: T }),
                      ),
                  ),
                  c.a.createElement(
                    k.b,
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
                  v ? c.a.createElement(k.b, { nativeID: U.description, numberOfLines: 2 }, v) : null,
                  Q &&
                    c.a.createElement(x.a, { nativeID: U.adFree, style: W.adFreeLabel }, c.a.createElement(B.a, null)),
                  m
                    ? c.a.createElement(
                        x.a,
                        { style: W.buttonContainer },
                        c.a.createElement(F.a, { link: ne, onClick: re, size: 'xSmall', type: 'primaryOutlined' }, j),
                      )
                    : null,
                ),
                ae
                  ? c.a.createElement(
                      x.a,
                      { style: W.imageContainer },
                      c.a.createElement(
                        O.a,
                        { ratio: _.a.theme.aspectRatios.square },
                        c.a.createElement(R.a, { accessibilityLabel: '', aspectMode: D.a.SQUARE, image: ae }),
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
                    accessibilityLabelledBy: V,
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
