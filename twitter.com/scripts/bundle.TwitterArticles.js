;(window.webpackJsonp = window.webpackJsonp || []).push([
  [102],
  {
    '4k/t': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'sidebarLayoutScreenTitle', function () {
          return m
        }),
        r.d(t, 'TwitterArticle', function () {
          return h
        })
      r('uFXj')
      var n = r('ERkP'),
        o = r.n(n),
        a = r('es0u'),
        i = r('RqPI'),
        c = r('rxPX'),
        l = function (e, t) {
          return ''
        },
        u = Object(c.a)().propsFromState(function () {
          return { loggedInUserId: i.q, twitterArticleTitle: l }
        }),
        s = r('VS6U'),
        d = r('MWbm'),
        f = r('t62R'),
        p = r('rHpw'),
        m = 'Twitter Article',
        h = function (e) {
          var t = e.twitterArticleTitle
          return o.a.createElement(s.a, {
            history: e.history,
            primaryContent: function () {
              return o.a.createElement(
                d.a,
                { style: y.container },
                o.a.createElement(f.b, { size: 'title2', style: y.title, weight: 'heavy' }, t),
              )
            },
            sidebarContent: o.a.createElement(a.a, null),
            title: m,
          })
        },
        y = p.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
              padding: e.spaces.space24,
            },
            author: { paddingBottom: e.spaces.space24 },
            title: { paddingBottom: e.spaces.space24 },
          }
        }),
        w = u(h)
      t.default = w
    },
    M2mT: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('m3Bd'),
        o = r.n(n),
        a = r('VrFO'),
        i = r.n(a),
        c = r('Y9Ll'),
        l = r.n(c),
        u = r('1Pcy'),
        s = r.n(u),
        d = r('5Yy7'),
        f = r.n(d),
        p = r('N+ot'),
        m = r.n(p),
        h = r('AuHH'),
        y = r.n(h),
        w = r('KEM+'),
        b = r.n(w),
        C = (r('2G9S'), r('i4UL'), r('+/5o')),
        T = r('ERkP'),
        v = r.n(T),
        B = r('HPNB'),
        O = r('VAZu'),
        E = r('wiP2'),
        g = r('Es6L'),
        S = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('rHpw'))
      function k(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                b()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var x = S.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: L(L({}, S.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        I = r('MWbm'),
        P = r('yw4N'),
        D = r('TnY3'),
        j = r('cHvH'),
        R = r('3xLC')
      function F(e) {
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
            n = y()(e)
          if (t) {
            var o = y()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return m()(this, r)
        }
      }
      var A = (function (e) {
        f()(r, e)
        var t = F(r)
        function r() {
          var e
          i()(this, r)
          for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            b()(s()(e), '_renderChildren', function () {
              var t = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? v.a.createElement(
                    I.a,
                    { style: x.fill },
                    v.a.createElement(P.a, { style: x.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
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
                return v.a.createElement(j.a, null, function (t) {
                  var r = t.windowWidth
                  return B.a.isTwoColumnLayout(r) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                    o()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  Object(g.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : v.a.createElement(E.a.Configure, r),
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
                  r = this.props,
                  n = r.SideNavButton,
                  o = r.TabBar,
                  a = r.TeamsSwitcher,
                  i = r.backLocation,
                  c = r.documentTitle,
                  l = r.headerless,
                  u = r.history,
                  s = r.leftControl,
                  d = r.middleControl,
                  f = r.onBackClick,
                  p = r.rightControl,
                  m = r.screenType,
                  h = r.searchBoxOptions,
                  y = r.secondaryBar,
                  w = r.showSubtitleOnRoot,
                  b = r.showSubtitleOnWideDetail,
                  T = r.subtitle,
                  B = r.title,
                  g = r.titleIconCell,
                  S = r.titleIconCellSize,
                  k = r.withBottomBorder,
                  L = r.withDetailOpen,
                  P = r.withSearchBox,
                  D = r.withTweetButton,
                  j = 'root' === m,
                  R = 'secondaryRoot' === m,
                  F = 'primaryDetail' === m,
                  A = (F && b) || (j && w),
                  W = j || (F && t),
                  H = j ? C.c : F ? C.a : void 0,
                  M = v.a.createElement(
                    I.a,
                    { style: x.appBarContainer },
                    v.a.createElement(O.a, {
                      backLocation: i,
                      fixed: !1,
                      hideBackButton: W,
                      history: u,
                      leftControl: s,
                      middleControl: d,
                      onBackClick: f,
                      rightControl: p,
                      secondaryBar: y,
                      subtitle: A ? T : void 0,
                      title: B,
                      titleDomId: H,
                      titleIconCell: g,
                      titleIconCellSize: S,
                      withBottomBorder: k,
                    }),
                  ),
                  N =
                    j || (R && L)
                      ? null
                      : v.a.createElement(E.a.Configure, {
                          SideNavButton: n,
                          TabBar: o,
                          TeamsSwitcher: a,
                          backLocation: i,
                          documentTitle: c,
                          headerless: l,
                          middleControl: d,
                          onBackClick: f,
                          rightControl: p,
                          searchBoxOptions: h,
                          subtitle: T,
                          title: B,
                          withSearchBox: P,
                          withTweetButton: D,
                        })
                return v.a.createElement(v.a.Fragment, null, N, M)
              },
            },
          ]),
          r
        )
      })(v.a.Component)
      b()(A, 'contextType', R.a),
        b()(A, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(D.a)(A)
    },
    QdNu: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'TwitterArticleComposer', function () {
          return d
        })
      r('uFXj')
      var n = r('ERkP'),
        o = r.n(n),
        a = r('rxPX'),
        i = r('0KEI'),
        c = Object(a.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('EDIT_TWITTER_ARTICLE'),
          }
        }),
        l = r('M2mT'),
        u = r('rHpw'),
        s = r('MWbm'),
        d = function (e) {
          return o.a.createElement(
            l.a,
            { screenType: 'primaryDetail', title: 'Edit Twitter Article' },
            o.a.createElement(s.a, { style: f.container }),
          )
        },
        f = u.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
            },
          }
        }),
        p = c(d)
      t.default = p
    },
    taB0: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'emptyStateHeader', function () {
          return m
        }),
        r.d(t, 'emptyStateMessage', function () {
          return h
        }),
        r.d(t, 'rootDetailScreenTitle', function () {
          return y
        }),
        r.d(t, 'loadingFetchStatusLabel', function () {
          return w
        }),
        r.d(t, 'TwitterArticleList', function () {
          return b
        })
      var n = r('ERkP'),
        o = r.n(n),
        a = r('pxuL'),
        i = r('RqPI'),
        c = r('rxPX'),
        l = Object(c.a)().propsFromState(function () {
          return { loggedInUserId: i.q }
        }),
        u = r('v//M'),
        s = r('M2mT'),
        d = r('MWbm'),
        f = r('FIs5'),
        p = r('rHpw'),
        m = 'No twitter articles yet',
        h = 'Create a Twitter Article!',
        y = 'Twitter Articles',
        w = 'Loading Twitter Articles',
        b = function (e) {
          var t = o.a.useContext(a.a),
            r = t.decrementDmDrawerInhibitorCount,
            n = t.incrementDmDrawerInhibitorCount
          o.a.useEffect(
            function () {
              return (
                n(),
                function () {
                  r()
                }
              )
            },
            [r, n],
          )
          var i = o.a.createElement(d.a, { style: C.appBarButtons })
          return o.a.createElement(
            s.a,
            { rightControl: i, screenType: 'secondaryRoot', title: y },
            o.a.createElement(
              d.a,
              { style: C.container },
              o.a.createElement(u.a, {
                accessibilityLabel: w,
                fetchStatus: 'loaded',
                render: function () {
                  return o.a.createElement(f.a, { header: m, message: h })
                },
              }),
            ),
          )
        },
        C = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 },
            appBarButtons: { flexDirection: 'row', alignItems: 'center' },
          }
        }),
        T = l(b)
      t.default = T
    },
    uy10: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'emptyStateHeaderLabel', function () {
          return c
        }),
        r.d(t, 'emptyStateMessage', function () {
          return l
        }),
        r.d(t, 'emptyStateButtonText', function () {
          return u
        })
      var n = r('ERkP'),
        o = r.n(n),
        a = r('FIs5'),
        i = r('fs1G'),
        c = "You don't have a draft selected",
        l = 'Choose one from your existing drafts, or start a new one.',
        u = 'New draft'
      t.default = function (e) {
        var t = i.a
        return o.a.createElement(a.a, {
          buttonLink: '/i/twitter-article-composer',
          buttonText: u,
          header: c,
          message: l,
          onButtonPress: t,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
