;(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    '7FtF': function (t, e, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        w = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        b = n.n(y),
        v = n('P1r1'),
        g = n('G6rE'),
        B = n('rxPX'),
        C = n('0KEI'),
        O = Object(B.a)()
          .propsFromState(function () {
            return { fetchStatus: v.o, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: v.f,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        k = n('v//M'),
        S = n('3XMw'),
        E = n.n(S),
        L = n('M2mT'),
        _ = 'settingsDetailSave',
        R = n('mw9i'),
        T = n('0yYu'),
        D = n('/yvb'),
        P = n('rHpw')
      function x(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(t)
          if (e) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var I = E.a.i2209530,
        F = (function (t) {
          s()(n, t)
          var e = x(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              w()(l()(t), '_renderWithFetchSettings', function () {
                var e = t.props.fetchStatus
                return b.a.createElement(k.a, { fetchStatus: e, onRequestRetry: t._handleFetch, render: t._render })
              }),
              w()(l()(t), '_render', function () {
                var e = t.props,
                  n = e.children,
                  r = e.onSubmit,
                  o = e.submitDisabled,
                  a = e.submitLabel,
                  i = e.submitType,
                  c = e.withMarginBottom
                return b.a.createElement(
                  R.a,
                  { style: [A.contentRoot, c && A.withMarginBottom] },
                  n,
                  r
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(T.a, null),
                        b.a.createElement(
                          R.a,
                          { style: A.buttonContainer },
                          b.a.createElement(D.a, { disabled: o, onPress: r, style: A.button, testID: _, type: i }, a),
                        ),
                      )
                    : null,
                )
              }),
              w()(l()(t), '_handleFetch', function () {
                var e = t.props,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchSettingsIfNeeded)().catch(n())
              }),
              t
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
                  var t = this.props,
                    e = t.location,
                    n = t.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return e && e.pathname === n ? '/' : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.loggedInUser,
                    n = t.onBackClick,
                    r = t.rightControl,
                    o = t.screenType,
                    a = t.secondaryBar,
                    i = t.title,
                    c = t.withBottomBorder,
                    l = this.getBackLocation(),
                    u = e ? '@'.concat(e.screen_name) : void 0
                  return b.a.createElement(
                    L.a,
                    {
                      backLocation: l,
                      onBackClick: n,
                      rightControl: r,
                      screenType: o,
                      secondaryBar: a,
                      showSubtitleOnWideDetail: !1,
                      subtitle: u,
                      title: i,
                      withBottomBorder: c,
                    },
                    e ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      w()(F, 'defaultProps', { submitLabel: I, submitType: 'brandFilled', withMarginBottom: !0 })
      var A = P.a.create(function (t) {
        return {
          contentRoot: {
            backgroundColor: t.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
          },
          buttonContainer: {
            backgroundColor: t.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 0,
            marginHorizontal: 'auto',
            paddingVertical: t.spaces.space12,
            paddingHorizontal: 0,
          },
          button: { marginVertical: 0, marginHorizontal: t.spaces.space12 },
          withMarginBottom: {
            marginBottom: 'calc('.concat(t.spaces.space64, ' + ').concat(P.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      e.a = O(F)
    },
    M2mT: function (t, e, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        o = n.n(r),
        a = n('VrFO'),
        i = n.n(a),
        c = n('Y9Ll'),
        l = n.n(c),
        u = n('1Pcy'),
        s = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        w = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        B = n.n(g),
        C = n('HPNB'),
        O = n('v6aA'),
        k = n('VAZu'),
        S = n('wiP2'),
        E = n('Es6L'),
        L = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function _(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? _(Object(n), !0).forEach(function (e) {
                b()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      var T = L.a.create(function (t) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: R(R({}, L.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: t.componentZIndices.appBarZIndex },
          }
        }),
        D = n('MWbm'),
        P = n('yw4N'),
        x = n('TnY3'),
        I = n('cHvH'),
        F = n('3xLC')
      function A(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = w()(t)
          if (e) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var j = (function (t) {
        p()(n, t)
        var e = A(n)
        function n() {
          var t
          i()(this, n)
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
          return (
            (t = e.call.apply(e, [this].concat(o))),
            b()(s()(t), '_renderChildren', function (e) {
              var n = t.props.children
              return t.context.rootDetailPerColumnScroll
                ? B.a.createElement(
                    D.a,
                    { style: T.fill },
                    B.a.createElement(
                      P.a,
                      { style: T.viewportView },
                      e ? t._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      n,
                    ),
                  )
                : n
            }),
            t
          )
        }
        return (
          l()(n, [
            {
              key: 'render',
              value: function () {
                var t = this
                return B.a.createElement(I.a, null, function (e) {
                  var n = e.windowWidth
                  return C.a.isTwoColumnLayout(n) ? t._renderForTwoColumnLayout() : t._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var t = this.props,
                  e = t.children,
                  n =
                    (t.leftControl,
                    t.screenType,
                    t.showSubtitleOnRoot,
                    t.showSubtitleOnWideDetail,
                    t.withBottomBorder,
                    t.withDetailOpen,
                    o()(t, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return B.a.createElement(
                  B.a.Fragment,
                  null,
                  Object(E.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : B.a.createElement(S.a.Configure, n),
                  e,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var t = this,
                  e = this.context.rootDetailPerColumnScroll
                return B.a.createElement(O.a.Consumer, null, function (n) {
                  var r = n.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    o = e
                      ? !r && t._renderInlineNav({ isTwoColumnLayout: !0 })
                      : t._renderInlineNav({ isTwoColumnLayout: !0 })
                  return B.a.createElement(B.a.Fragment, null, o, t._renderChildren(r))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (t) {
                var e = t.appBarScrollEnabled,
                  n = void 0 !== e && e,
                  r = t.isTwoColumnLayout,
                  o = this.props,
                  a = o.SideNavButton,
                  i = o.TabBar,
                  c = o.TeamsSwitcher,
                  l = o.backLocation,
                  u = o.documentTitle,
                  s = o.headerless,
                  d = o.history,
                  p = o.leftControl,
                  f = o.middleControl,
                  h = o.onBackClick,
                  m = o.rightControl,
                  w = o.screenType,
                  y = o.searchBoxOptions,
                  b = o.secondaryBar,
                  g = o.showSubtitleOnRoot,
                  C = o.showSubtitleOnWideDetail,
                  O = o.subtitle,
                  E = o.title,
                  L = o.titleIconCell,
                  _ = o.titleIconCellSize,
                  R = o.withBottomBorder,
                  P = o.withDetailOpen,
                  x = o.withSearchBox,
                  I = o.withTweetButton,
                  F = 'root' === w,
                  A = 'secondaryRoot' === w,
                  j = 'primaryDetail' === w,
                  H = (j && C) || (F && g),
                  M = F || (j && r),
                  U = F ? v.c : j ? v.a : void 0,
                  N = B.a.createElement(
                    D.a,
                    { style: n ? [T.appBarContainer, T.appBarZindex] : T.appBarZindex },
                    B.a.createElement(k.a, {
                      backLocation: l,
                      fixed: !1,
                      hideBackButton: M,
                      history: d,
                      leftControl: p,
                      middleControl: f,
                      onBackClick: h,
                      rightControl: m,
                      secondaryBar: n ? b : null,
                      subtitle: H ? O : void 0,
                      title: E,
                      titleDomId: U,
                      titleIconCell: L,
                      titleIconCellSize: _,
                      withBottomBorder: R,
                    }),
                  ),
                  W =
                    F || (A && P)
                      ? null
                      : B.a.createElement(S.a.Configure, {
                          SideNavButton: a,
                          TabBar: i,
                          TeamsSwitcher: c,
                          backLocation: l,
                          documentTitle: u,
                          headerless: s,
                          middleControl: f,
                          onBackClick: h,
                          rightControl: m,
                          searchBoxOptions: y,
                          subtitle: O,
                          title: E,
                          withSearchBox: x,
                          withTweetButton: I,
                        })
                return B.a.createElement(B.a.Fragment, null, W, N, n ? null : b)
              },
            },
          ]),
          n
        )
      })(B.a.Component)
      b()(j, 'contextType', F.a),
        b()(j, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      e.a = Object(x.a)(j)
    },
    Voxc: function (t, e, n) {
      'use strict'
      n.r(e)
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        w = n.n(m),
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n.n(y),
        v = n('3XMw'),
        g = n.n(v),
        B = n('lOQR'),
        C = n('7FtF'),
        O = n('MWbm'),
        k = n('Irs7'),
        S = n('t62R'),
        E = n('csss'),
        L = n('rHpw')
      function _(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(t)
          if (e) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var R = g.a.afcad7f2,
        T = g.a.hc762e4a,
        D = g.a.c365dcc5,
        P = 'https://twitter.app.link/hfQ1AFOM52',
        x = { android: g.a.i8385a2c, ios: g.a.h201c4c1, windows: g.a.d383acfc },
        I = (function (t) {
          s()(n, t)
          var e = _(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              w()(l()(t), '_appStoreUrls', B.a.getAppStoreURLs('download')),
              w()(l()(t), '_handleDownloadClick', function () {
                t.props.analytics.scribeAction('done')
              }),
              t
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var t = this
                  return b.a.createElement(
                    C.a,
                    { title: R },
                    b.a.createElement(
                      O.a,
                      { style: F.itemContainer },
                      b.a.createElement(S.b, { color: 'gray700', size: 'subtext2' }, T),
                    ),
                    this._appStoreUrls.map(function (e, n) {
                      var r = e.matches,
                        o = e.platform,
                        a = e.url,
                        i = e.webUrl
                      return t._renderAppStoreLink(r() ? a : i, x[o], n)
                    }),
                    b.a.createElement(E.a, {
                      key: 'other',
                      label: D,
                      link: { external: !0, pathname: 'https://help.twitter.com/using-twitter#twitter-on-your-device' },
                      onPress: this._handleDownloadClick,
                    }),
                  )
                },
              },
              {
                key: '_renderAppStoreLink',
                value: function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  return b.a.createElement(E.a, {
                    key: n,
                    label: e,
                    link: { external: !0, pathname: ''.concat(P, '?$fallback_url=').concat(t) },
                    onPress: this._handleDownloadClick,
                  })
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        F = L.a.create(function (t) {
          return {
            itemContainer: {
              alignItems: 'center',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: t.colors.borderColor,
              flexDirection: 'row',
              paddingVertical: t.spaces.space16,
              paddingHorizontal: t.spaces.space12,
              width: '100%',
            },
          }
        })
      e.default = Object(k.a)(I, { page: 'download', section: 'download' })
    },
    lOQR: function (t, e, n) {
      'use strict'
      n('hBpG')
      var r = n('6/RC'),
        o = n.n(r),
        a = n('aITJ'),
        i = {
          setLocation: function (t) {
            document.location = t
          },
          getAppStoreURLs: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah',
              e = c(t),
              n = [e.android, e.ios, e.windows],
              r = n.find(function (t) {
                return t.matches()
              })
            return r ? [r] : n
          },
          getiOSAppStoreLink: function (t) {
            var e = c(t)
            return e.ios.matches() ? e.ios.url : e.ios.webUrl
          },
          getAndroidAppStoreLink: function (t) {
            var e = c(t)
            return e.android.matches() ? e.android.url : e.android.webUrl
          },
          goToAppStore: function () {
            var t = this.getAppStoreURLs()
            t[0] && i.setLocation(t[0].url)
          },
          openApp: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'twitter://timeline'
            o.a.canUseDOM && i.setLocation(t)
          },
        },
        c = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah'
          return {
            android: {
              platform: 'android',
              matches: function () {
                return a.b.isAndroid()
              },
              url: 'market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D'.concat(t),
              webUrl:
                'https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D'.concat(
                  t,
                ),
            },
            ios: {
              platform: 'ios',
              matches: function () {
                return a.b.isIOS()
              },
              url: 'itmss://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(t),
              webUrl: 'https://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(t),
            },
            windows: {
              platform: 'windows',
              matches: function () {
                return a.b.isWindowsPhone()
              },
              url: 'ms-windows-store://pdp/?ProductId=9wzdncrfj140',
              webUrl: 'https://www.microsoft.com/p/twitter/9wzdncrfj140',
            },
          }
        }
      e.a = i
    },
  },
])
//# sourceMappingURL=WIPED
