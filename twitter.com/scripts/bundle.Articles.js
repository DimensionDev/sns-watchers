;(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    BUB3: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        i = r('m3Bd'),
        o = r.n(i),
        c = r('ERkP'),
        l = r.n(c),
        s = r('sNn6'),
        u = r('rHpw'),
        p = r('MWbm')
      function d(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var f = u.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: m(
            m({}, u.a.absoluteFillObject),
            {},
            {
              borderRightStyle: 'solid',
              borderRightWidth: e.borderWidths.medium,
              borderRightColor: e.colors.primary,
              zIndex: 1,
            },
          ),
        }
      })
      t.a = function (e) {
        var t = e.children,
          r = o()(e, ['children'])
        return l.a.createElement(s.a, r, function (e) {
          return l.a.createElement(
            p.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(p.a, { pointerEvents: 'none', style: f.overlay }) : null,
          )
        })
      }
    },
    EqEI: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ArticleListScreen', function () {
          return W
        })
      r('WNMA'), r('KqXw'), r('7x/C'), r('lTEL'), r('kYxP'), r('MvUL')
      var n = r('ERkP'),
        a = r.n(n),
        i = r('HPNB'),
        o = r('WpDa'),
        c = r('ZNT5'),
        l = Object(c.a)({
          timelineId: 'articlesTimeline',
          getEndpoint: function (e) {
            return e.TopArticles.fetchArticleTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              r = e.cursor
            return { count: t, cursor: 'string' == typeof r ? r : void 0 }
          },
          context: 'FETCH_TOP_ARTICLES_TIMELINE',
          perfKey: 'articlesTimeline',
          formatResponse: o.a,
        }),
        s = r('v6aA'),
        u = r('qdp+'),
        p = r('EGrD'),
        d = r('rxPX'),
        m = Object(d.a)()
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: p.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        f = r('SrtL'),
        b = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        h = r.n(b),
        y = r('ezF+'),
        w = (r('yH/f'), Object.freeze({ Default: 'Default' })),
        O =
          (r('JtPf'),
          r('87if'),
          {
            loader: function () {
              return r.e(199).then(r.bind(null, 'QvpQ'))
            },
            loaderKey: 'defaultArticleLoader',
            strategy: r('XBtf').a.Critical,
          }),
        v = y.c({
          selectDisplayType: function (e) {
            return e.content.articleDisplayType || w.Default
          },
          handlers: h()({}, w.Default, O),
        }),
        g = r('QIgh'),
        E = r('8UdT')
      function C(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                h()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var T = j(j({}, g.b), {}, h()({}, E.b.Article, v)),
        x = r('fTQJ'),
        P = r('M2mT'),
        D = r('7n04'),
        B = r('HQ0t'),
        k = r('t62R'),
        I = r('FIs5'),
        L = r('cHvH'),
        S = r('rHpw'),
        A = r('3XMw'),
        _ = r.n(A),
        F = _.a.b7fa0cfd,
        R = _.a.e2462db4,
        H = _.a.e950f6ef,
        M = a.a.createElement(
          _.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          a.a.createElement(k.b, { color: 'link', link: '/i/connect_people' }, _.a.e7dcfb8f),
        ),
        W = function (e) {
          var t = e.analytics,
            r = e.history,
            n = e.loadAdFreeArticleDomainsFromPersistence,
            o = e.match,
            c = a.a.useContext(s.a).userClaims.isTrueAndEnabled('subscriptions_feature_1006')
          a.a.useEffect(function () {
            c && n()
          })
          var p = a.a.useCallback(
            function () {
              t.scribe({ action: 'impression' })
            },
            [t],
          )
          a.a.useEffect(
            function () {
              p()
            },
            [p],
          )
          var d = function (e) {
              var t = e.entries,
                n = o.params.articleId,
                a = Object(u.a)(t, function (e) {
                  return e.type === E.b.Article && !!e.content && e.content.articleId
                })
              !n && a && r.replace('/i/articles/'.concat(a))
            },
            m = function () {
              return a.a.createElement(I.a, { header: H, message: M, style: N.emptyState })
            }
          return a.a.createElement(L.a, null, function (e) {
            var t = e.windowWidth,
              r = i.a.isTwoColumnLayout(t)
            return a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(f.a, { title: F }),
              a.a.createElement(
                P.a,
                { screenType: 'root', showSubtitleOnRoot: !0, subtitle: R, title: a.a.createElement(B.a, { text: F }) },
                a.a.createElement(x.a, {
                  anchoring: D.a,
                  entryConfiguration: T,
                  module: l,
                  onEntriesRendered: r ? d : void 0,
                  renderEmptyState: m,
                  title: F,
                }),
              ),
            )
          })
        },
        N = S.a.create(function (e) {
          return {
            emptyState: {
              height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ')'),
              justifyContent: 'center',
              marginVertical: 0,
            },
          }
        }),
        z = m(W)
      t.default = z
    },
    HQ0t: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r.n(n),
        i = r('v6aA'),
        o = r('3XMw'),
        c = r.n(o),
        l = r('Q3sg'),
        s = r('rHpw'),
        u = c.a.g4782c0a,
        p = s.a.create(function (e) {
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
        var t = a.a.useContext(i.a),
          r = t.featureSwitches,
          n = t.userClaims,
          o = r.isTrue('subscriptions_blue_premium_labeling_enabled'),
          c = n.isTwitterBlueSubscriber(),
          s = e.style,
          d = e.text
        return c && o
          ? a.a.createElement(
              a.a.Fragment,
              null,
              d,
              a.a.createElement(l.a, { accessibilityLabel: u, style: [p.icon, s] }),
            )
          : d
      }
    },
    M2mT: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('m3Bd'),
        a = r.n(n),
        i = r('VrFO'),
        o = r.n(i),
        c = r('Y9Ll'),
        l = r.n(c),
        s = r('1Pcy'),
        u = r.n(s),
        p = r('5Yy7'),
        d = r.n(p),
        m = r('N+ot'),
        f = r.n(m),
        b = r('AuHH'),
        h = r.n(b),
        y = r('KEM+'),
        w = r.n(y),
        O = (r('2G9S'), r('i4UL'), r('+/5o')),
        v = r('ERkP'),
        g = r.n(v),
        E = r('HPNB'),
        C = r('VAZu'),
        j = r('wiP2'),
        T = r('Es6L'),
        x = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('rHpw'))
      function P(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                w()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var B = x.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: D(D({}, x.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        k = r('MWbm'),
        I = r('yw4N'),
        L = r('TnY3'),
        S = r('cHvH'),
        A = r('3xLC')
      function _(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var F = (function (e) {
        d()(r, e)
        var t = _(r)
        function r() {
          var e
          o()(this, r)
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            w()(u()(e), '_renderChildren', function () {
              var t = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? g.a.createElement(
                    k.a,
                    { style: B.fill },
                    g.a.createElement(I.a, { style: B.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
                  )
                : t
            }),
            e
          )
        }
        return (
          l()(r, [
            {
              key: 'render',
              value: function () {
                var e = this
                return g.a.createElement(S.a, null, function (t) {
                  var r = t.windowWidth
                  return E.a.isTwoColumnLayout(r) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var e = this.props,
                  t = e.children,
                  r =
                    (e.leftControl,
                    e.screenType,
                    e.showSubtitleOnRoot,
                    e.showSubtitleOnWideDetail,
                    e.withBottomBorder,
                    e.withDetailOpen,
                    a()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  Object(T.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : g.a.createElement(j.a.Configure, r),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this.context.rootDetailPerColumnScroll
                return g.a.createElement(
                  g.a.Fragment,
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
                  r = this.props,
                  n = r.SideNavButton,
                  a = r.TabBar,
                  i = r.TeamsSwitcher,
                  o = r.backLocation,
                  c = r.documentTitle,
                  l = r.headerless,
                  s = r.history,
                  u = r.leftControl,
                  p = r.middleControl,
                  d = r.onBackClick,
                  m = r.rightControl,
                  f = r.screenType,
                  b = r.searchBoxOptions,
                  h = r.secondaryBar,
                  y = r.showSubtitleOnRoot,
                  w = r.showSubtitleOnWideDetail,
                  v = r.subtitle,
                  E = r.title,
                  T = r.titleIconCell,
                  x = r.titleIconCellSize,
                  P = r.withBottomBorder,
                  D = r.withDetailOpen,
                  I = r.withSearchBox,
                  L = r.withTweetButton,
                  S = 'root' === f,
                  A = 'secondaryRoot' === f,
                  _ = 'primaryDetail' === f,
                  F = (_ && w) || (S && y),
                  R = S || (_ && t),
                  H = S ? O.c : _ ? O.a : void 0,
                  M = g.a.createElement(
                    k.a,
                    { style: B.appBarContainer },
                    g.a.createElement(C.a, {
                      backLocation: o,
                      fixed: !1,
                      hideBackButton: R,
                      history: s,
                      leftControl: u,
                      middleControl: p,
                      onBackClick: d,
                      rightControl: m,
                      secondaryBar: h,
                      subtitle: F ? v : void 0,
                      title: E,
                      titleDomId: H,
                      titleIconCell: T,
                      titleIconCellSize: x,
                      withBottomBorder: P,
                    }),
                  ),
                  W =
                    S || (A && D)
                      ? null
                      : g.a.createElement(j.a.Configure, {
                          SideNavButton: n,
                          TabBar: a,
                          TeamsSwitcher: i,
                          backLocation: o,
                          documentTitle: c,
                          headerless: l,
                          middleControl: p,
                          onBackClick: d,
                          rightControl: m,
                          searchBoxOptions: b,
                          subtitle: v,
                          title: E,
                          withSearchBox: I,
                          withTweetButton: L,
                        })
                return g.a.createElement(g.a.Fragment, null, W, M)
              },
            },
          ]),
          r
        )
      })(g.a.Component)
      w()(F, 'contextType', A.a),
        w()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(L.a)(F)
    },
    Q3sg: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        i = r('ERkP'),
        o = r.n(i),
        c = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var p = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(p.metadata = { width: 24, height: 24 }), (t.a = p)
    },
    byUE: function (e, t, r) {
      'use strict'
      r.r(t)
      r('6U7i'), r('WNMA'), r('KqXw')
      var n = r('ERkP'),
        a = r.n(n),
        i = r('wChl'),
        o = r('WpDa'),
        c = r('ZNT5'),
        l = function (e) {
          return Object(c.a)({
            timelineId: 'articleTweetsTimeline-'.concat(e),
            getEndpoint: function (e) {
              return e.TopArticles.fetchArticleTweetsTimeline
            },
            getEndpointParams: function (t) {
              var r = t.count,
                n = t.cursor
              return { articleId: e, count: r, cursor: 'string' == typeof n ? n : void 0 }
            },
            context: 'FETCH_ARTICLE_TWEETS_TIMELINE',
            perfKey: 'articleTweetsTimeline',
            formatResponse: o.a,
          })
        },
        s = r('KEM+'),
        u = r.n(s),
        p = r('xZXe'),
        d = r('QIgh'),
        m = r('8UdT'),
        f = r('IcAo'),
        b = r('VrCx'),
        h = r('yy6l'),
        y = Object(f.a)(
          {},
          d.b,
          u()({}, m.b.Tweet, {
            handlers: u()(
              {},
              b.a.TweetWithoutCard,
              Object(h.a)({
                component: p.a,
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        w = r('3XMw'),
        O = r.n(w),
        v = r('fTQJ'),
        g = r('M2mT'),
        E = r('7n04'),
        C = r('rHpw'),
        j = r('MWbm'),
        T = r('yw4N'),
        x = r('Irs7'),
        P = O.a.d35d74e3,
        D = C.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(x.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return a.a.createElement(
            g.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: P, withBottomBorder: !0 },
            a.a.createElement(
              j.a,
              { style: D.contentWrapper },
              a.a.createElement(i.a, { id: t, withInternalLink: !1 }),
              a.a.createElement(
                T.a,
                { style: D.viewport },
                a.a.createElement(v.a, { anchoring: E.a, entryConfiguration: y, module: l(t), title: P }),
              ),
            ),
          )
        },
        { section: 'top_articles', component: 'conversation' },
      )
    },
    wChl: function (e, t, r) {
      'use strict'
      var n = r('ddV6'),
        a = r.n(n),
        i = (r('1t7P'), r('jQ/y'), r('uFXj'), r('ERkP')),
        o = r.n(i),
        c = r('BUB3'),
        l = r('v6aA'),
        s = (r('7x/C'), r('DZ+c'), r('3zvM')),
        u = r('lMB6'),
        p = Object(s.f)({ namespace: 'articles' }),
        d = u.a.register(p),
        m = r('rxPX'),
        f = r('0KEI'),
        b = r('EGrD'),
        h = function (e, t) {
          return d.select(e, t.id.toString())
        },
        y = Object(m.a)()
          .propsFromState(function () {
            return { adFreeDomains: b.c, article: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('ARTICLE_SUMMARY'),
              fetchAdFreeToken: b.a,
            }
          }),
        w = r('3XMw'),
        O = r.n(w),
        v = r('k89r'),
        g = r('MWbm'),
        E = r('PbQQ'),
        C = r('pjBI'),
        j = r('t62R'),
        T = r('GBcw'),
        x = r('lphh'),
        P = r('/yvb'),
        D = r('9Xij'),
        B = r('rHpw'),
        k = r('TIdA'),
        I = r('A91F'),
        L = r('Nqmc'),
        S = r('htQn'),
        A = r('cm6r'),
        _ = r('LSr9'),
        F = r('6vUc'),
        R = r('IcAo'),
        H = O.a.afb7e8f7,
        M = B.a.create(function (e) {
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
            r = e.article,
            n = e.createLocalApiErrorHandler,
            i = e.fetchAdFreeToken,
            s = (e.id, e.socialContext),
            u = e.withInternalLink,
            p = o.a.useContext(l.a).userClaims,
            d = Object(v.a)(),
            m = o.a.useContext(E.a.default),
            f = r || {},
            b = f.article_url,
            h = f.description,
            y = f.domain,
            w = f.domain_url,
            O = f.image_url,
            W = f.publish_date,
            N = f.title,
            z = {
              domain: E.b.useOpaqueIdentifier(),
              timestamp: E.b.useOpaqueIdentifier(),
              title: E.b.useOpaqueIdentifier(),
              description: E.b.useOpaqueIdentifier(),
              socialContext: E.b.useOpaqueIdentifier(),
            },
            U = [z.domain, z.timestamp, z.title, z.description, z.socialContext],
            K = p.isTrueAndEnabled('subscriptions_feature_1006'),
            X = !!K && Object(_.c)(t, w),
            Q = o.a.useMemo(
              function () {
                var e = Object(F.a)(d.contextualScribeData.items || []) || {}
                return {
                  url: b,
                  items: [
                    Object(R.a)({}, e, { article_details: { publisher_name: y, is_showing_label: X, is_ad_free: X } }),
                  ],
                }
              },
              [d.contextualScribeData.items, b, y, X],
            ),
            Z = o.a.useCallback(
              function () {
                d.scribe({ action: 'impression', data: Q })
              },
              [d, Q],
            )
          if (
            (o.a.useEffect(
              function () {
                Z()
              },
              [Z],
            ),
            !r)
          )
            return null
          var q = s || {},
            V = q.contextImageUrls,
            G = q.landingUrl,
            J = q.text,
            Y = O ? { url: O, height: 750, width: 1250 } : void 0,
            $ = { pathname: b, external: !0 },
            ee = function (e) {
              if ((d.scribe({ element: u ? 'read_article' : 'article_header', action: 'open_link', data: Q }), K)) {
                var r = new _.a(i, n()).getAdFreeArticlesClickHandler({
                    destinationUrl: b,
                    linkDomain: w,
                    adFreeArticleDomains: t,
                  }),
                  o = a()(r, 2),
                  c = o[0],
                  l = o[1]
                c && l(e)
              }
            },
            te = function () {
              d.scribe({ element: 'conversation_view', action: 'click', data: Q })
            },
            re = G ? m.getLinkFromUrtUrl(G) : void 0,
            ne = re ? m.withAnchorless(re) : void 0,
            ae = o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                g.a,
                { style: M.horizontalContainer },
                o.a.createElement(
                  g.a,
                  { style: M.textContainer },
                  o.a.createElement(
                    C.a,
                    { style: M.middotGroup },
                    y &&
                      o.a.createElement(
                        j.b,
                        { color: 'gray700', nativeID: z.domain, size: 'subtext2', weight: 'bold' },
                        y,
                      ),
                    W &&
                      o.a.createElement(
                        j.b,
                        { color: 'gray700', nativeID: z.timestamp, size: 'subtext2' },
                        o.a.createElement(T.a, { timestamp: W }),
                      ),
                  ),
                  o.a.createElement(
                    j.b,
                    {
                      color: 'text',
                      link: ne,
                      nativeID: z.title,
                      numberOfLines: 3,
                      size: 'headline2',
                      style: M.text,
                      weight: 'bold',
                      withInteractiveStyling: !1,
                    },
                    N,
                  ),
                  h ? o.a.createElement(j.b, { nativeID: z.description, numberOfLines: 2 }, h) : null,
                  X && o.a.createElement(g.a, { style: M.adFreeLabel }, o.a.createElement(x.a, null)),
                  u
                    ? o.a.createElement(
                        g.a,
                        { style: M.buttonContainer },
                        o.a.createElement(P.a, { link: $, onClick: ee, size: 'xSmall', type: 'primaryOutlined' }, H),
                      )
                    : null,
                ),
                Y
                  ? o.a.createElement(
                      g.a,
                      { style: M.imageContainer },
                      o.a.createElement(
                        D.a,
                        { ratio: B.a.theme.aspectRatios.square },
                        o.a.createElement(k.a, { accessibilityLabel: '', aspectMode: I.a.SQUARE, image: Y }),
                      ),
                    )
                  : null,
              ),
              o.a.createElement(L.a, {
                contextType: 'Facepile',
                iconSize: 'large',
                nativeID: z.socialContext,
                text: J,
                textSize: 'subtext2',
                userAvatarUrls: V,
                withLeftPadding: !1,
                withTextCentered: !0,
              }),
            )
          return u
            ? o.a.createElement(c.a, { exact: !1, path: (null == ne ? void 0 : ne.pathname) || '' }, function (e) {
                return o.a.createElement(
                  S.a,
                  {
                    accessibilityLabelledBy: U,
                    accessibilityRole: 'article',
                    accessibilityState: { selected: e },
                    link: ne,
                    onClick: te,
                    style: M.container,
                  },
                  ae,
                )
              })
            : o.a.createElement(A.a, { link: $, onClick: ee, style: [M.container, M.bottomBorder] }, ae)
        })
      t.a = W
    },
  },
])
//# sourceMappingURL=WIPED
