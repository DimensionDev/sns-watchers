;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    BUB3: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        i = r.n(n),
        a = r('m3Bd'),
        o = r.n(a),
        c = r('ERkP'),
        l = r('sNn6'),
        s = r('rHpw'),
        u = r('MWbm')
      function p(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var m = s.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: d(
            d({}, s.a.absoluteFillObject),
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
        return c.createElement(l.a, r, function (e) {
          return c.createElement(
            u.a,
            { style: e && m.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? c.createElement(u.a, { pointerEvents: 'none', style: m.overlay }) : null,
          )
        })
      }
    },
    EqEI: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ArticleListScreen', function () {
          return N
        })
      r('WNMA'), r('KqXw'), r('7x/C'), r('lTEL'), r('kYxP'), r('MvUL')
      var n = r('ERkP'),
        i = r('HPNB'),
        a = r('WpDa'),
        o = r('ZNT5'),
        c = Object(o.a)({
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
          formatResponse: a.a,
        }),
        l = r('v6aA'),
        s = r('qdp+'),
        u = r('EGrD'),
        p = r('rxPX'),
        d = Object(p.a)()
          .propsFromActions(function () {
            return { loadAdFreeArticleDomainsFromPersistence: u.b }
          })
          .withAnalytics({ section: 'top_articles', component: 'top_articles' }),
        m = r('SrtL'),
        f = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        b = r.n(f),
        h = r('ezF+'),
        y = (r('yH/f'), Object.freeze({ Default: 'Default' })),
        w = r('wChl'),
        v = r('VPAj'),
        O = r('Rp9C'),
        g = h.c({
          selectDisplayType: function (e) {
            return e.content.articleDisplayType || y.Default
          },
          handlers: b()(
            {},
            y.Default,
            h.g({
              component: w.a,
              createProps: function (e) {
                var t = e.entry,
                  r = (t.content.socialContext || {}).generalContext,
                  n = void 0 === r ? void 0 : r
                return { id: t.content.articleId, socialContext: n, withInternalLink: !0 }
              },
              shouldDisplayBorder: Object(v.a)(!0),
              isFocusable: Object(v.a)(!0),
              getScribeDataItem: function (e) {
                return (function (e) {
                  var t = e.content.articleId
                  return O.a.getArticleItem(t, e.itemMetadata.clientEventInfo)
                })(e)
              },
            }),
          ),
        }),
        E = r('QIgh'),
        C = r('8UdT')
      function j(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                b()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var x = T(T({}, E.b), {}, b()({}, C.b.Article, g)),
        P = r('fTQJ'),
        B = r('M2mT'),
        D = r('7n04'),
        I = r('HQ0t'),
        k = r('t62R'),
        L = r('FIs5'),
        S = r('cHvH'),
        _ = r('rHpw'),
        A = r('3XMw'),
        F = r.n(A),
        R = F.a.b7fa0cfd,
        H = F.a.e2462db4,
        M = F.a.e950f6ef,
        W = n.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'd9cb9d0b' },
          n.createElement(k.b, { color: 'link', link: '/i/connect_people' }, F.a.e7dcfb8f),
        ),
        N = function (e) {
          var t = e.analytics,
            r = e.history,
            a = e.loadAdFreeArticleDomainsFromPersistence,
            o = e.match,
            u = n.useContext(l.a).userClaims.isTrueAndEnabled('subscriptions_feature_1006')
          n.useEffect(function () {
            u && a()
          })
          var p = n.useCallback(
            function () {
              t.scribe({ action: 'impression' })
            },
            [t],
          )
          n.useEffect(
            function () {
              p()
            },
            [p],
          )
          var d = function (e) {
              var t = e.entries,
                n = o.params.articleId,
                i = Object(s.a)(t, function (e) {
                  return e.type === C.b.Article && !!e.content && e.content.articleId
                })
              !n && i && r.replace('/i/articles/'.concat(i))
            },
            f = function () {
              return n.createElement(L.a, { header: M, message: W, style: z.emptyState })
            }
          return n.createElement(S.a, null, function (e) {
            var t = e.windowWidth,
              r = i.a.isTwoColumnLayout(t)
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(m.a, { title: R }),
              n.createElement(
                B.a,
                { screenType: 'root', showSubtitleOnRoot: !0, subtitle: H, title: n.createElement(I.a, { text: R }) },
                n.createElement(P.a, {
                  anchoring: D.a,
                  entryConfiguration: x,
                  module: c,
                  onEntriesRendered: r ? d : void 0,
                  renderEmptyState: f,
                  title: R,
                }),
              ),
            )
          })
        },
        z = _.a.create(function (e) {
          return {
            emptyState: {
              height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ')'),
              justifyContent: 'center',
              marginVertical: 0,
            },
          }
        }),
        U = d(N)
      t.default = U
    },
    HQ0t: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        i = r('v6aA'),
        a = r('3XMw'),
        o = r.n(a),
        c = r('Q3sg'),
        l = r('rHpw'),
        s = o.a.g4782c0a,
        u = l.a.create(function (e) {
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
        var t = n.useContext(i.a),
          r = t.featureSwitches,
          a = t.userClaims,
          o = r.isTrue('subscriptions_blue_premium_labeling_enabled'),
          l = a.isTwitterBlueSubscriber(),
          p = e.style,
          d = e.text
        return l && o
          ? n.createElement(n.Fragment, null, d, n.createElement(c.a, { accessibilityLabel: s, style: [u.icon, p] }))
          : d
      }
    },
    M2mT: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('m3Bd'),
        i = r.n(n),
        a = r('VrFO'),
        o = r.n(a),
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
        v = (r('2G9S'), r('i4UL'), r('+/5o')),
        O = r('ERkP'),
        g = r('HPNB'),
        E = r('v6aA'),
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
      function B(e) {
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
      var D = x.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: B(B({}, x.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        I = r('MWbm'),
        k = r('yw4N'),
        L = r('TnY3'),
        S = r('cHvH'),
        _ = r('3xLC')
      function A(e) {
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
            var i = h()(this).constructor
            r = Reflect.construct(n, arguments, i)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var F = (function (e) {
        d()(r, e)
        var t = A(r)
        function r() {
          var e
          o()(this, r)
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            w()(u()(e), '_renderChildren', function (t) {
              var r = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? O.createElement(
                    I.a,
                    { style: D.fill },
                    O.createElement(
                      k.a,
                      { style: D.viewportView },
                      t ? e._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      r,
                    ),
                  )
                : r
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
                return O.createElement(S.a, null, function (t) {
                  var r = t.windowWidth
                  return g.a.isTwoColumnLayout(r) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                    i()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return O.createElement(
                  O.Fragment,
                  null,
                  Object(T.a)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : O.createElement(j.a.Configure, r),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this,
                  t = this.context.rootDetailPerColumnScroll
                return O.createElement(E.a.Consumer, null, function (r) {
                  var n = r.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    i = t
                      ? !n && e._renderInlineNav({ isTwoColumnLayout: !0 })
                      : e._renderInlineNav({ isTwoColumnLayout: !0 })
                  return O.createElement(O.Fragment, null, i, e._renderChildren(n))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.appBarScrollEnabled,
                  r = void 0 !== t && t,
                  n = e.isTwoColumnLayout,
                  i = this.props,
                  a = i.SideNavButton,
                  o = i.TabBar,
                  c = i.TeamsSwitcher,
                  l = i.backLocation,
                  s = i.documentTitle,
                  u = i.headerless,
                  p = i.history,
                  d = i.leftControl,
                  m = i.middleControl,
                  f = i.onBackClick,
                  b = i.rightControl,
                  h = i.screenType,
                  y = i.searchBoxOptions,
                  w = i.secondaryBar,
                  g = i.showSubtitleOnRoot,
                  E = i.showSubtitleOnWideDetail,
                  T = i.subtitle,
                  x = i.title,
                  P = i.titleIconCell,
                  B = i.titleIconCellSize,
                  k = i.withBottomBorder,
                  L = i.withDetailOpen,
                  S = i.withSearchBox,
                  _ = i.withTweetButton,
                  A = 'root' === h,
                  F = 'secondaryRoot' === h,
                  R = 'primaryDetail' === h,
                  H = (R && E) || (A && g),
                  M = A || (R && n),
                  W = A ? v.c : R ? v.a : void 0,
                  N = O.createElement(
                    I.a,
                    { style: r ? [D.appBarContainer, D.appBarZindex] : D.appBarZindex },
                    O.createElement(C.a, {
                      backLocation: l,
                      fixed: !1,
                      hideBackButton: M,
                      history: p,
                      leftControl: d,
                      middleControl: m,
                      onBackClick: f,
                      rightControl: b,
                      secondaryBar: r ? w : null,
                      subtitle: H ? T : void 0,
                      title: x,
                      titleDomId: W,
                      titleIconCell: P,
                      titleIconCellSize: B,
                      withBottomBorder: k,
                    }),
                  ),
                  z =
                    A || (F && L)
                      ? null
                      : O.createElement(j.a.Configure, {
                          SideNavButton: a,
                          TabBar: o,
                          TeamsSwitcher: c,
                          backLocation: l,
                          documentTitle: s,
                          headerless: u,
                          middleControl: m,
                          onBackClick: f,
                          rightControl: b,
                          searchBoxOptions: y,
                          subtitle: T,
                          title: x,
                          withSearchBox: S,
                          withTweetButton: _,
                        })
                return O.createElement(O.Fragment, null, z, N, r ? null : w)
              },
            },
          ]),
          r
        )
      })(O.Component)
      w()(F, 'contextType', _.a),
        w()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(L.a)(F)
    },
    Q3sg: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        i = r.n(n),
        a = r('ERkP'),
        o = r('Lsrn'),
        c = r('k/Ka')
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    byUE: function (e, t, r) {
      'use strict'
      r.r(t)
      r('6U7i'), r('WNMA'), r('KqXw')
      var n = r('ERkP'),
        i = r('wChl'),
        a = r('WpDa'),
        o = r('ZNT5'),
        c = function (e) {
          return Object(o.a)({
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
            formatResponse: a.a,
          })
        },
        l = r('KEM+'),
        s = r.n(l),
        u = r('xZXe'),
        p = r('QIgh'),
        d = r('8UdT'),
        m = r('IcAo'),
        f = r('VrCx'),
        b = r('yy6l'),
        h = Object(m.a)(
          {},
          p.b,
          s()({}, d.b.Tweet, {
            handlers: s()(
              {},
              f.a.TweetWithoutCard,
              Object(b.a)({
                component: u.a,
                createAdditionalProps: function () {
                  return { withCardLinks: !0 }
                },
              }),
            ),
          }),
        ),
        y = r('3XMw'),
        w = r.n(y),
        v = r('fTQJ'),
        O = r('M2mT'),
        g = r('7n04'),
        E = r('rHpw'),
        C = r('MWbm'),
        j = r('yw4N'),
        T = r('Irs7'),
        x = w.a.d35d74e3,
        P = E.a.create(function (e) {
          return {
            contentWrapper: { height: 'calc(100vh - '.concat(e.componentDimensions.appBarHeight, ' - 1px)') },
            viewport: { flex: 1, height: '100%', overflow: 'auto', width: '100%' },
          }
        })
      t.default = Object(T.a)(
        function (e) {
          var t = Number(e.match.params.articleId)
          return n.createElement(
            O.a,
            { backLocation: '/i/articles', screenType: 'primaryDetail', title: x, withBottomBorder: !0 },
            n.createElement(
              C.a,
              { style: P.contentWrapper },
              n.createElement(i.a, { id: t, withInternalLink: !1 }),
              n.createElement(
                j.a,
                { style: P.viewport },
                n.createElement(v.a, { anchoring: g.a, entryConfiguration: h, module: c(t), title: x }),
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
        i = r.n(n),
        a = (r('1t7P'), r('jQ/y'), r('uFXj'), r('ERkP')),
        o = r('BUB3'),
        c = r('v6aA'),
        l = (r('7x/C'), r('DZ+c'), r('3zvM')),
        s = r('lMB6'),
        u = Object(l.f)({ namespace: 'articles' }),
        p = s.a.register(u),
        d = r('rxPX'),
        m = r('0KEI'),
        f = r('EGrD'),
        b = function (e, t) {
          return p.select(e, t.id.toString())
        },
        h = Object(d.a)()
          .propsFromState(function () {
            return { adFreeDomains: f.c, article: b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('ARTICLE_SUMMARY'),
              fetchAdFreeToken: f.a,
            }
          }),
        y = r('3XMw'),
        w = r.n(y),
        v = r('k89r'),
        O = r('MWbm'),
        g = r('PbQQ'),
        E = r('pjBI'),
        C = r('t62R'),
        j = r('GBcw'),
        T = r('lphh'),
        x = r('/yvb'),
        P = r('9Xij'),
        B = r('rHpw'),
        D = r('TIdA'),
        I = r('A91F'),
        k = r('Nqmc'),
        L = r('htQn'),
        S = r('cm6r'),
        _ = r('LSr9'),
        A = r('6vUc'),
        F = r('IcAo'),
        R = w.a.afb7e8f7,
        H = B.a.create(function (e) {
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
        M = h(function (e) {
          var t = e.adFreeDomains,
            r = e.article,
            n = e.createLocalApiErrorHandler,
            l = e.fetchAdFreeToken,
            s = (e.id, e.socialContext),
            u = e.withInternalLink,
            p = a.useContext(c.a).userClaims,
            d = Object(v.a)(),
            m = a.useContext(g.a.default),
            f = r || {},
            b = f.article_url,
            h = f.description,
            y = f.domain,
            w = f.domain_url,
            M = f.image_url,
            W = f.publish_date,
            N = f.title,
            z = {
              domain: g.b.useOpaqueIdentifier(),
              timestamp: g.b.useOpaqueIdentifier(),
              title: g.b.useOpaqueIdentifier(),
              description: g.b.useOpaqueIdentifier(),
              socialContext: g.b.useOpaqueIdentifier(),
            },
            U = [z.domain, z.timestamp, z.title, z.description, z.socialContext],
            K = p.isTrueAndEnabled('subscriptions_feature_1006'),
            X = !!K && Object(_.c)(t, w),
            Z = Object(A.a)(d.contextualScribeData.items || []) || {},
            Q = {
              url: b,
              items: [
                Object(F.a)({}, Z, { article_details: { publisher_name: y, is_showing_label: X, is_ad_free: X } }),
              ],
            },
            q = a.useCallback(
              function () {
                d.scribe({ action: 'impression', data: Q })
              },
              [d, Q],
            )
          if (
            (a.useEffect(
              function () {
                q()
              },
              [q],
            ),
            !r)
          )
            return null
          var V = s || {},
            G = V.contextImageUrls,
            Y = V.landingUrl,
            J = V.text,
            $ = M ? { url: M, height: 750, width: 1250 } : void 0,
            ee = { pathname: b, external: !0 },
            te = function (e) {
              if ((d.scribe({ element: u ? 'read_article' : 'article_header', action: 'open_link', data: Q }), K)) {
                var r = new _.a(l, n()).getAdFreeArticlesClickHandler({
                    destinationUrl: b,
                    linkDomain: w,
                    adFreeArticleDomains: t,
                  }),
                  a = i()(r, 2),
                  o = a[0],
                  c = a[1]
                o && c(e)
              }
            },
            re = function () {
              d.scribe({ element: 'conversation_view', action: 'click', data: Q })
            },
            ne = Y ? m.getLinkFromUrtUrl(Y) : void 0,
            ie = ne ? m.withAnchorless(ne) : void 0,
            ae = a.createElement(
              a.Fragment,
              null,
              a.createElement(
                O.a,
                { style: H.horizontalContainer },
                a.createElement(
                  O.a,
                  { style: H.textContainer },
                  a.createElement(
                    E.a,
                    { style: H.middotGroup },
                    y &&
                      a.createElement(
                        C.b,
                        { color: 'gray700', nativeID: z.domain, size: 'subtext2', weight: 'bold' },
                        y,
                      ),
                    W &&
                      a.createElement(
                        C.b,
                        { color: 'gray700', nativeID: z.timestamp, size: 'subtext2' },
                        a.createElement(j.a, { timestamp: W }),
                      ),
                  ),
                  a.createElement(
                    C.b,
                    {
                      color: 'text',
                      link: ie,
                      nativeID: z.title,
                      numberOfLines: 3,
                      size: 'headline2',
                      style: H.text,
                      weight: 'bold',
                      withInteractiveStyling: !1,
                    },
                    N,
                  ),
                  h ? a.createElement(C.b, { nativeID: z.description, numberOfLines: 2 }, h) : null,
                  X && a.createElement(O.a, { style: H.adFreeLabel }, a.createElement(T.a, null)),
                  u
                    ? a.createElement(
                        O.a,
                        { style: H.buttonContainer },
                        a.createElement(x.a, { link: ee, onClick: te, size: 'xSmall', type: 'primaryOutlined' }, R),
                      )
                    : null,
                ),
                $
                  ? a.createElement(
                      O.a,
                      { style: H.imageContainer },
                      a.createElement(
                        P.a,
                        { ratio: B.a.theme.aspectRatios.square },
                        a.createElement(D.a, { accessibilityLabel: '', aspectMode: I.a.SQUARE, image: $ }),
                      ),
                    )
                  : null,
              ),
              a.createElement(k.a, {
                contextType: 'Facepile',
                iconSize: 'large',
                nativeID: z.socialContext,
                text: J,
                textSize: 'subtext2',
                userAvatarUrls: G,
                withLeftPadding: !1,
                withTextCentered: !0,
              }),
            )
          return u
            ? a.createElement(o.a, { exact: !1, path: (null == ie ? void 0 : ie.pathname) || '' }, function (e) {
                return a.createElement(
                  L.a,
                  {
                    accessibilityLabelledBy: U,
                    accessibilityRole: 'article',
                    accessibilityState: { selected: e },
                    link: ie,
                    onClick: re,
                    style: H.container,
                  },
                  ae,
                )
              })
            : a.createElement(S.a, { link: ee, onClick: te, style: [H.container, H.bottomBorder] }, ae)
        })
      t.a = M
    },
  },
])
//# sourceMappingURL=WIPED
