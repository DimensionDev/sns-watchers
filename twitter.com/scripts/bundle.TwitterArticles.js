;(window.webpackJsonp = window.webpackJsonp || []).push([
  [102],
  {
    '7wkC': function (e, t, r) {
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
        l = r('rxPX'),
        c = function (e, t) {
          return ''
        },
        u = Object(l.a)().propsFromState(function () {
          return { loggedInUserId: i.q, twitterArticleTitle: c }
        }),
        s = r('VS6U'),
        d = r('MWbm'),
        p = r('t62R'),
        f = r('rHpw'),
        m = 'Twitter Article',
        h = function (e) {
          var t = e.twitterArticleTitle
          return o.a.createElement(s.a, {
            history: e.history,
            primaryContent: function () {
              return o.a.createElement(
                d.a,
                { style: w.container },
                o.a.createElement(p.b, { size: 'title2', style: w.title, weight: 'heavy' }, t),
              )
            },
            sidebarContent: o.a.createElement(a.a, null),
            title: m,
          })
        },
        w = f.a.create(function (e) {
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
        y = u(h)
      t.default = y
    },
    I65w: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'EditTwitterArticle', function () {
          return d
        })
      r('uFXj')
      var n = r('ERkP'),
        o = r.n(n),
        a = r('rxPX'),
        i = r('0KEI'),
        l = Object(a.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('EDIT_TWITTER_ARTICLE'),
          }
        }),
        c = r('M2mT'),
        u = r('rHpw'),
        s = r('MWbm'),
        d = function (e) {
          return o.a.createElement(
            c.a,
            { screenType: 'primaryDetail', title: 'Edit Twitter Article' },
            o.a.createElement(s.a, { style: p.container }),
          )
        },
        p = u.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
            },
          }
        }),
        f = l(d)
      t.default = f
    },
    M2mT: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('m3Bd'),
        o = r.n(n),
        a = r('VrFO'),
        i = r.n(a),
        l = r('Y9Ll'),
        c = r.n(l),
        u = r('1Pcy'),
        s = r.n(u),
        d = r('5Yy7'),
        p = r.n(d),
        f = r('N+ot'),
        m = r.n(f),
        h = r('AuHH'),
        w = r.n(h),
        y = r('KEM+'),
        b = r.n(y),
        C = (r('2G9S'), r('i4UL'), r('+/5o')),
        T = r('ERkP'),
        v = r.n(T),
        O = r('HPNB'),
        B = r('VAZu'),
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
      var P = S.a.create(function (e) {
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
        x = r('MWbm'),
        I = r('yw4N'),
        j = r('TnY3'),
        R = r('cHvH'),
        D = r('3xLC')
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
            n = w()(e)
          if (t) {
            var o = w()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return m()(this, r)
        }
      }
      var A = (function (e) {
        p()(r, e)
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
                    x.a,
                    { style: P.fill },
                    v.a.createElement(I.a, { style: P.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
                  )
                : t
            }),
            e
          )
        }
        return (
          c()(r, [
            {
              key: 'render',
              value: function () {
                var e = this
                return v.a.createElement(R.a, null, function (t) {
                  var r = t.windowWidth
                  return O.a.isTwoColumnLayout(r) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                  l = r.documentTitle,
                  c = r.headerless,
                  u = r.history,
                  s = r.leftControl,
                  d = r.middleControl,
                  p = r.onBackClick,
                  f = r.rightControl,
                  m = r.screenType,
                  h = r.searchBoxOptions,
                  w = r.secondaryBar,
                  y = r.showSubtitleOnRoot,
                  b = r.showSubtitleOnWideDetail,
                  T = r.subtitle,
                  O = r.title,
                  g = r.titleIconCell,
                  S = r.titleIconCellSize,
                  k = r.withBottomBorder,
                  L = r.withDetailOpen,
                  I = r.withSearchBox,
                  j = r.withTweetButton,
                  R = 'root' === m,
                  D = 'secondaryRoot' === m,
                  F = 'primaryDetail' === m,
                  A = (F && b) || (R && y),
                  W = R || (F && t),
                  H = R ? C.c : F ? C.a : void 0,
                  M = v.a.createElement(
                    x.a,
                    { style: P.appBarContainer },
                    v.a.createElement(B.a, {
                      backLocation: i,
                      fixed: !1,
                      hideBackButton: W,
                      history: u,
                      leftControl: s,
                      middleControl: d,
                      onBackClick: p,
                      rightControl: f,
                      secondaryBar: w,
                      subtitle: A ? T : void 0,
                      title: O,
                      titleDomId: H,
                      titleIconCell: g,
                      titleIconCellSize: S,
                      withBottomBorder: k,
                    }),
                  ),
                  _ =
                    R || (D && L)
                      ? null
                      : v.a.createElement(E.a.Configure, {
                          SideNavButton: n,
                          TabBar: o,
                          TeamsSwitcher: a,
                          backLocation: i,
                          documentTitle: l,
                          headerless: c,
                          middleControl: d,
                          onBackClick: p,
                          rightControl: f,
                          searchBoxOptions: h,
                          subtitle: T,
                          title: O,
                          withSearchBox: I,
                          withTweetButton: j,
                        })
                return v.a.createElement(v.a.Fragment, null, _, M)
              },
            },
          ]),
          r
        )
      })(v.a.Component)
      b()(A, 'contextType', D.a),
        b()(A, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(j.a)(A)
    },
    fqEn: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'emptyStateHeader', function () {
          return f
        }),
        r.d(t, 'emptyStateMessage', function () {
          return m
        }),
        r.d(t, 'rootDetailScreenTitle', function () {
          return h
        }),
        r.d(t, 'loadingFetchStatusLabel', function () {
          return w
        }),
        r.d(t, 'TwitterArticleList', function () {
          return y
        })
      var n = r('ERkP'),
        o = r.n(n),
        a = r('RqPI'),
        i = r('rxPX'),
        l = Object(i.a)().propsFromState(function () {
          return { loggedInUserId: a.q }
        }),
        c = r('v//M'),
        u = r('M2mT'),
        s = r('MWbm'),
        d = r('FIs5'),
        p = r('rHpw'),
        f = 'No twitter articles yet',
        m = 'Create a Twitter Article!',
        h = 'Twitter Articles',
        w = 'Loading Twitter Articles',
        y = function (e) {
          var t = o.a.createElement(s.a, { style: b.appBarButtons })
          return o.a.createElement(
            u.a,
            { rightControl: t, screenType: 'secondaryRoot', title: h },
            o.a.createElement(
              s.a,
              { style: b.container },
              o.a.createElement(c.a, {
                accessibilityLabel: w,
                fetchStatus: 'loaded',
                render: function () {
                  return o.a.createElement(d.a, { header: f, message: m })
                },
              }),
            ),
          )
        },
        b = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 },
            appBarButtons: { flexDirection: 'row', alignItems: 'center' },
          }
        }),
        C = l(y)
      t.default = C
    },
    txsh: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'emptyStateHeaderLabel', function () {
          return l
        }),
        r.d(t, 'emptyStateMessage', function () {
          return c
        }),
        r.d(t, 'emptyStateButtonText', function () {
          return u
        })
      var n = r('ERkP'),
        o = r.n(n),
        a = r('FIs5'),
        i = r('fs1G'),
        l = "You don't have a draft selected",
        c = 'Choose one from your existing drafts, or start a new one.',
        u = 'New draft'
      t.default = function (e) {
        var t = i.a
        return o.a.createElement(a.a, {
          buttonLink: '/i/twitter-article-composer',
          buttonText: u,
          header: l,
          message: c,
          onButtonPress: t,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
