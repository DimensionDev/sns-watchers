;(window.webpackJsonp = window.webpackJsonp || []).push([
  [236],
  {
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('fyvP'),
        i = n('rHpw'),
        l = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(l.a, { style: c.root }, r.a.createElement(o.a, e))
      }
      var c = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '7FtF': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        f = (n('2G9S'), n('ERkP')),
        y = n.n(f),
        b = n('P1r1'),
        g = n('G6rE'),
        w = n('rxPX'),
        v = n('0KEI'),
        E = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: b.n, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: b.f,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        C = n('v//M'),
        k = n('3XMw'),
        B = n.n(k),
        S = n('M2mT'),
        x = 'settingsDetailSave',
        T = n('mw9i'),
        F = n('0yYu'),
        O = n('/yvb'),
        I = n('rHpw'),
        L = B.a.i2209530,
        D = (function (e) {
          s()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return y.a.createElement(C.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              h()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  l = t.withMarginBottom
                return y.a.createElement(
                  T.a,
                  { style: [M.contentRoot, l && M.withMarginBottom] },
                  n,
                  a
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(F.a, null),
                        y.a.createElement(
                          T.a,
                          { style: M.buttonContainer },
                          y.a.createElement(O.a, { disabled: r, onPress: a, style: M.button, testID: x, type: i }, o),
                        ),
                      )
                    : null,
                )
              }),
              h()(c()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'getBackLocation',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return t && t.pathname === n ? '/' : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUser,
                    n = e.onBackClick,
                    a = e.rightControl,
                    r = e.screenType,
                    o = e.secondaryBar,
                    i = e.title,
                    l = e.withBottomBorder,
                    c = this.getBackLocation(),
                    u = t ? '@'.concat(t.screen_name) : void 0
                  return y.a.createElement(
                    S.a,
                    {
                      backLocation: c,
                      onBackClick: n,
                      rightControl: a,
                      screenType: r,
                      secondaryBar: o,
                      showSubtitleOnWideDetail: !1,
                      subtitle: u,
                      title: i,
                      withBottomBorder: l,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      h()(D, 'defaultProps', { submitLabel: L, submitType: 'brandFilled', withMarginBottom: !0 })
      var M = I.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
          },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 0,
            marginHorizontal: 'auto',
            paddingVertical: e.spaces.space12,
            paddingHorizontal: 0,
          },
          button: { marginVertical: 0, marginHorizontal: e.spaces.space12 },
          withMarginBottom: {
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(I.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = E(D)
    },
    ElRx: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        o = n('xCYy'),
        i = n('v//M'),
        l = n('3XMw'),
        c = n.n(l),
        u = n('yoO3'),
        s = n('ddV6'),
        d = n.n(s),
        m = n('KEM+'),
        p = n.n(m),
        h = n('yiKp'),
        f = n.n(h),
        y = (n('z84I'), n('1t7P'), n('jQ/y'), n('t62R')),
        b = n('3JAx'),
        g = c.a.aa4342be,
        w = c.a.jfec3aa0,
        v = c.a.c365dcc5,
        E = c.a.c148481f,
        C = c.a.gf143d21,
        k = c.a.fe60d5da,
        B = c.a.db5f208d,
        S = c.a.ga197e25,
        x = c.a.abb4d36d,
        T = function (e) {
          return [
            { label: B, value: B, helpText: e },
            { label: S, value: S },
            { label: x, value: x },
          ]
        },
        F = r.a.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'a470b642' },
          r.a.createElement(y.b, { link: 'https://help.twitter.com/rules-and-policies/media-policy' }, c.a.a7fbeecd),
        ),
        O = r.a.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'db12fdf1' },
          r.a.createElement(y.b, { link: 'https://help.twitter.com/rules-and-policies/media-policy' }, c.a.b95bcbae),
        ),
        I = r.a.createElement(
          c.a.I18NFormatMessage,
          { $i18n: 'a23e791f' },
          r.a.createElement(y.b, { link: 'https://help.twitter.com/rules-and-policies/media-policy' }, c.a.c694628a),
        ),
        L = [
          { title: g, description: F, options: T(E) },
          { title: w, description: O, options: T(C) },
          { title: v, description: I, options: T(k) },
        ],
        D = function (e, t) {
          var n = t.key,
            a = t.value
          return f()(f()({}, e), {}, p()({}, n, a))
        },
        M = function (e) {
          var t,
            n = e.handleUpdate,
            a = void 0 === n ? function () {} : n,
            o = r.a.useReducer(D, ((t = {}), p()(t, w, B), p()(t, g, B), p()(t, v, B), t)),
            i = d()(o, 2),
            l = i[0],
            c = (function (e, t) {
              return function (n, a) {
                n && a && (e({ key: n, value: a }), t())
              }
            })(i[1], a)
          return r.a.createElement(
            r.a.Fragment,
            null,
            L.map(function (e) {
              var t = e.description,
                n = e.options,
                a = e.title,
                o = l[a]
              return r.a.createElement(b.a, {
                description: t,
                key: a,
                label: a,
                name: a,
                onChange: c,
                options: n,
                value: o,
              })
            }),
          )
        },
        R = n('eM8g'),
        P = n('7FtF'),
        _ = n('0yYu'),
        H = n('mw9i'),
        V = c.a.h9f2da68,
        j = c.a.cc94c001,
        N = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {}
          return function () {
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(R.a, null, j),
              r.a.createElement(_.a, null),
              r.a.createElement(M, { handleUpdate: e }),
            )
          }
        }
      t.default = function (e) {
        var t = e.fetchStatus,
          n = e.location,
          a = function () {}
        return r.a.createElement(
          u.a,
          null,
          r.a.createElement(
            P.a,
            { location: n, title: V },
            r.a.createElement(
              o.a,
              null,
              r.a.createElement(
                H.a,
                null,
                r.a.createElement(i.a, { fetchStatus: t, onRequestRetry: a, render: N(undefined) }),
              ),
            ),
          ),
        )
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        l = n('Y9Ll'),
        c = n.n(l),
        u = n('1Pcy'),
        s = n.n(u),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        f = n('KEM+'),
        y = n.n(f),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        w = n.n(g),
        v = n('HPNB'),
        E = n('VAZu'),
        C = n('wiP2'),
        k = n('Es6L'),
        B = n('yiKp'),
        S = n.n(B),
        x = n('rHpw'),
        T = x.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: S()(S()({}, x.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        F = n('MWbm'),
        O = n('yw4N'),
        I = n('TnY3'),
        L = n('cHvH'),
        D = n('3xLC'),
        M = [
          'appBarStyle',
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        R = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(s()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? w.a.createElement(
                      F.a,
                      { style: T.fill },
                      w.a.createElement(
                        O.a,
                        { style: T.viewportView },
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
                  return w.a.createElement(L.a, null, function (t) {
                    var n = t.windowWidth
                    return v.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = (e.appBarStyle, e.children),
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, M))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    Object(k.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : w.a.createElement(C.a.Configure, n),
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
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    o = n.TeamsSwitcher,
                    i = n.appBarStyle,
                    l = n.backLocation,
                    c = n.documentTitle,
                    u = n.headerless,
                    s = n.history,
                    d = n.leftControl,
                    m = n.middleControl,
                    p = n.onBackClick,
                    h = n.rightControl,
                    f = n.screenType,
                    y = n.searchBoxOptions,
                    g = n.secondaryBar,
                    v = n.showSubtitleOnRoot,
                    k = n.showSubtitleOnWideDetail,
                    B = n.subtitle,
                    S = n.title,
                    x = n.titleIconCell,
                    O = n.titleIconCellSize,
                    I = n.withDetailOpen,
                    L = n.withSearchBox,
                    D = n.withTweetButton,
                    M = 'root' === f,
                    R = 'secondaryRoot' === f,
                    P = 'primaryDetail' === f,
                    _ = (P && k) || (M && v),
                    H = M || (P && t),
                    V = M ? b.c : P ? b.a : void 0,
                    j = w.a.createElement(
                      F.a,
                      { style: T.appBarContainer },
                      w.a.createElement(E.a, {
                        backLocation: l,
                        fixed: !1,
                        hideBackButton: H,
                        history: s,
                        leftControl: d,
                        middleControl: m,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: g,
                        style: i,
                        subtitle: _ ? B : void 0,
                        title: S,
                        titleDomId: V,
                        titleIconCell: x,
                        titleIconCellSize: O,
                      }),
                    ),
                    N =
                      M || (R && I)
                        ? null
                        : w.a.createElement(C.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: o,
                            backLocation: l,
                            documentTitle: c,
                            headerless: u,
                            middleControl: m,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: y,
                            subtitle: B,
                            title: S,
                            withSearchBox: L,
                            withTweetButton: D,
                          })
                  return w.a.createElement(w.a.Fragment, null, N, j)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      y()(R, 'contextType', D.a),
        y()(R, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(I.a)(R)
    },
    eM8g: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('MWbm'),
        i = n('t62R'),
        l = n('rHpw')
      t.a = function (e) {
        var t = e.children
        return r.a.createElement(
          o.a,
          { style: c.labelContainer },
          r.a.createElement(
            o.a,
            { style: c.contentContainer },
            r.a.createElement(
              o.a,
              { style: c.appText },
              r.a.createElement(i.b, { color: 'gray700', size: 'subtext2' }, t),
            ),
          ),
        )
      }
      var c = l.a.create(function (e) {
        return {
          contentContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
          labelContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            minHeight: 'calc('
              .concat(l.a.theme.lineHeights.headline1, ' + 2 * ')
              .concat(e.componentDimensions.gutterVertical, ')'),
          },
          appText: { flexShrink: 1, width: '100%' },
        }
      })
    },
    xCYy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('v6aA'),
        i = n('mrHL'),
        l = n('3XMw'),
        c = n.n(l),
        u = n('cnVF'),
        s = n('RqPI'),
        d = n('k89r'),
        m = n('yUQf'),
        p = n('q9Zt'),
        h = n('t62R'),
        f = c.a.ffeb836a,
        y = c.a.f2fb9746
      function b() {
        var e = Object(d.a)()
        return (
          r.a.useEffect(
            function () {
              e.scribe({ element: 'error_page', action: 'show' })
            },
            [e],
          ),
          r.a.createElement(p.a, { title: f }, r.a.createElement(h.b, null, y))
        )
      }
      function g(e) {
        var t = r.a.useContext(o.a).featureSwitches,
          n = Object(m.a)(s.n),
          a = Object(i.b)(u.u, t)
        return n || a ? e.children : r.a.createElement(b, null)
      }
    },
  },
])
//# sourceMappingURL=WIPED
