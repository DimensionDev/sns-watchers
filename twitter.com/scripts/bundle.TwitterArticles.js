;(window.webpackJsonp = window.webpackJsonp || []).push([
  [103],
  {
    '4k/t': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'sidebarLayoutScreenTitle', function () {
          return f
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
        m = r('t62R'),
        p = r('rHpw'),
        f = 'Twitter Article',
        h = function (e) {
          var t = e.twitterArticleTitle
          return o.a.createElement(s.a, {
            history: e.history,
            primaryContent: function () {
              return o.a.createElement(
                d.a,
                { style: w.container },
                o.a.createElement(m.b, { size: 'title2', style: w.title, weight: 'heavy' }, t),
              )
            },
            sidebarContent: o.a.createElement(a.a, null),
            title: f,
          })
        },
        w = p.a.create(function (e) {
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
    M2mT: function (e, t, r) {
      'use strict'
      var n = r('m3Bd'),
        o = r.n(n),
        a = r('VrFO'),
        i = r.n(a),
        l = r('Y9Ll'),
        c = r.n(l),
        u = r('1Pcy'),
        s = r.n(u),
        d = r('5Yy7'),
        m = r.n(d),
        p = r('2VqO'),
        f = r.n(p),
        h = r('KEM+'),
        w = r.n(h),
        y = (r('2G9S'), r('i4UL'), r('+/5o')),
        C = r('ERkP'),
        b = r.n(C),
        T = r('HPNB'),
        v = r('VAZu'),
        E = r('wiP2'),
        B = r('Es6L'),
        S = r('yiKp'),
        g = r.n(S),
        k = r('rHpw'),
        I = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: g()(g()({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = r('MWbm'),
        x = r('yw4N'),
        O = r('TnY3'),
        D = r('cHvH'),
        F = r('3xLC'),
        P = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        A = (function (e) {
          m()(r, e)
          var t = f()(r)
          function r() {
            var e
            i()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              w()(s()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? b.a.createElement(
                      L.a,
                      { style: I.fill },
                      b.a.createElement(
                        x.a,
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
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return b.a.createElement(D.a, null, function (t) {
                    var r = t.windowWidth
                    return T.a.isTwoColumnLayout(r) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      o()(e, P))
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    Object(B.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : b.a.createElement(E.a.Configure, r),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return b.a.createElement(
                    b.a.Fragment,
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
                    m = r.onBackClick,
                    p = r.rightControl,
                    f = r.screenType,
                    h = r.searchBoxOptions,
                    w = r.secondaryBar,
                    C = r.showSubtitleOnRoot,
                    T = r.showSubtitleOnWideDetail,
                    B = r.subtitle,
                    S = r.title,
                    g = r.titleIconCell,
                    k = r.titleIconCellSize,
                    x = r.withDetailOpen,
                    O = r.withSearchBox,
                    D = r.withTweetButton,
                    F = 'root' === f,
                    P = 'secondaryRoot' === f,
                    A = 'primaryDetail' === f,
                    R = (A && T) || (F && C),
                    W = F || (A && t),
                    _ = F ? y.c : A ? y.a : void 0,
                    H = b.a.createElement(
                      L.a,
                      { style: I.appBarContainer },
                      b.a.createElement(v.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: W,
                        history: u,
                        leftControl: s,
                        middleControl: d,
                        onBackClick: m,
                        rightControl: p,
                        secondaryBar: w,
                        subtitle: R ? B : void 0,
                        title: S,
                        titleDomId: _,
                        titleIconCell: g,
                        titleIconCellSize: k,
                      }),
                    ),
                    M =
                      F || (P && x)
                        ? null
                        : b.a.createElement(E.a.Configure, {
                            SideNavButton: n,
                            TabBar: o,
                            TeamsSwitcher: a,
                            backLocation: i,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: m,
                            rightControl: p,
                            searchBoxOptions: h,
                            subtitle: B,
                            title: S,
                            withSearchBox: O,
                            withTweetButton: D,
                          })
                  return b.a.createElement(b.a.Fragment, null, M, H)
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      w()(A, 'contextType', F.a),
        w()(A, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(O.a)(A)
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
            o.a.createElement(s.a, { style: m.container }),
          )
        },
        m = u.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
            },
          }
        }),
        p = l(d)
      t.default = p
    },
    taB0: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'emptyStateHeader', function () {
          return f
        }),
        r.d(t, 'emptyStateMessage', function () {
          return h
        }),
        r.d(t, 'rootDetailScreenTitle', function () {
          return w
        }),
        r.d(t, 'loadingFetchStatusLabel', function () {
          return y
        }),
        r.d(t, 'TwitterArticleList', function () {
          return C
        })
      var n = r('ERkP'),
        o = r.n(n),
        a = r('pxuL'),
        i = r('RqPI'),
        l = r('rxPX'),
        c = Object(l.a)().propsFromState(function () {
          return { loggedInUserId: i.q }
        }),
        u = r('v//M'),
        s = r('M2mT'),
        d = r('MWbm'),
        m = r('FIs5'),
        p = r('rHpw'),
        f = 'No twitter articles yet',
        h = 'Create a Twitter Article!',
        w = 'Twitter Articles',
        y = 'Loading Twitter Articles',
        C = function (e) {
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
          var i = o.a.createElement(d.a, { style: b.appBarButtons })
          return o.a.createElement(
            s.a,
            { rightControl: i, screenType: 'secondaryRoot', title: w },
            o.a.createElement(
              d.a,
              { style: b.container },
              o.a.createElement(u.a, {
                accessibilityLabel: y,
                fetchStatus: 'loaded',
                render: function () {
                  return o.a.createElement(m.a, { header: f, message: h })
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
        T = c(C)
      t.default = T
    },
    uy10: function (e, t, r) {
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
