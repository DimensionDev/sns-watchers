;(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    '7FtF': function (t, e, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        w = (n('2G9S'), n('ERkP')),
        f = n.n(w),
        y = n('P1r1'),
        b = n('G6rE'),
        g = n('rxPX'),
        v = n('0KEI'),
        C = Object(g.a)()
          .propsFromState(function () {
            return { fetchStatus: y.n, loggedInUser: b.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: y.f,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        k = n('v//M'),
        B = n('3XMw'),
        S = n.n(B),
        L = n('M2mT'),
        E = 'settingsDetailSave',
        O = n('mw9i'),
        _ = n('0yYu'),
        T = n('/yvb'),
        D = n('rHpw'),
        I = S.a.i2209530,
        F = (function (t) {
          u()(n, t)
          var e = p()(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              m()(c()(t), '_renderWithFetchSettings', function () {
                var e = t.props.fetchStatus
                return f.a.createElement(k.a, { fetchStatus: e, onRequestRetry: t._handleFetch, render: t._render })
              }),
              m()(c()(t), '_render', function () {
                var e = t.props,
                  n = e.children,
                  r = e.onSubmit,
                  o = e.submitDisabled,
                  a = e.submitLabel,
                  i = e.submitType,
                  l = e.withMarginBottom
                return f.a.createElement(
                  O.a,
                  { style: [x.contentRoot, l && x.withMarginBottom] },
                  n,
                  r
                    ? f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(_.a, null),
                        f.a.createElement(
                          O.a,
                          { style: x.buttonContainer },
                          f.a.createElement(T.a, { disabled: o, onPress: r, style: x.button, testID: E, type: i }, a),
                        ),
                      )
                    : null,
                )
              }),
              m()(c()(t), '_handleFetch', function () {
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
                    l = t.withBottomBorder,
                    c = this.getBackLocation(),
                    s = e ? '@'.concat(e.screen_name) : void 0
                  return f.a.createElement(
                    L.a,
                    {
                      backLocation: c,
                      onBackClick: n,
                      rightControl: r,
                      screenType: o,
                      secondaryBar: a,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
                      title: i,
                      withBottomBorder: l,
                    },
                    e ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      m()(F, 'defaultProps', { submitLabel: I, submitType: 'brandFilled', withMarginBottom: !0 })
      var x = D.a.create(function (t) {
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
            marginBottom: 'calc('.concat(t.spaces.space64, ' + ').concat(D.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      e.a = C(F)
    },
    M2mT: function (t, e, n) {
      'use strict'
      var r = n('m3Bd'),
        o = n.n(r),
        a = n('VrFO'),
        i = n.n(a),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        w = n('KEM+'),
        f = n.n(w),
        y = (n('2G9S'), n('i4UL'), n('+/5o')),
        b = n('ERkP'),
        g = n.n(b),
        v = n('HPNB'),
        C = n('VAZu'),
        k = n('wiP2'),
        B = n('Es6L'),
        S = n('yiKp'),
        L = n.n(S),
        E = n('rHpw'),
        O = E.a.create(function (t) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: L()(L()({}, E.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: t.componentZIndices.appBarZIndex,
            },
          }
        }),
        _ = n('MWbm'),
        T = n('yw4N'),
        D = n('TnY3'),
        I = n('cHvH'),
        F = n('3xLC'),
        x = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        A = (function (t) {
          p()(n, t)
          var e = m()(n)
          function n() {
            var t
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (t = e.call.apply(e, [this].concat(o))),
              f()(u()(t), '_renderChildren', function () {
                var e = t.props.children
                return t.context.rootDetailPerColumnScroll
                  ? g.a.createElement(
                      _.a,
                      { style: O.fill },
                      g.a.createElement(
                        T.a,
                        { style: O.viewportView },
                        t._renderInlineNav({ isTwoColumnLayout: !0 }),
                        e,
                      ),
                    )
                  : e
              }),
              t
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var t = this
                  return g.a.createElement(I.a, null, function (e) {
                    var n = e.windowWidth
                    return v.a.isTwoColumnLayout(n) ? t._renderForTwoColumnLayout() : t._renderForOneColumnLayout()
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
                      o()(t, x))
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    Object(B.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : g.a.createElement(k.a.Configure, n),
                    e,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var t = this.context.rootDetailPerColumnScroll
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    !t && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (t) {
                  var e = t.isTwoColumnLayout,
                    n = this.props,
                    r = n.SideNavButton,
                    o = n.TabBar,
                    a = n.TeamsSwitcher,
                    i = n.backLocation,
                    l = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    h = n.rightControl,
                    m = n.screenType,
                    w = n.searchBoxOptions,
                    f = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    v = n.showSubtitleOnWideDetail,
                    B = n.subtitle,
                    S = n.title,
                    L = n.titleIconCell,
                    E = n.titleIconCellSize,
                    T = n.withDetailOpen,
                    D = n.withSearchBox,
                    I = n.withTweetButton,
                    F = 'root' === m,
                    x = 'secondaryRoot' === m,
                    A = 'primaryDetail' === m,
                    P = (A && v) || (F && b),
                    R = F || (A && e),
                    M = F ? y.c : A ? y.a : void 0,
                    U = g.a.createElement(
                      _.a,
                      { style: O.appBarContainer },
                      g.a.createElement(C.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: R,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: f,
                        subtitle: P ? B : void 0,
                        title: S,
                        titleDomId: M,
                        titleIconCell: L,
                        titleIconCellSize: E,
                      }),
                    ),
                    V =
                      F || (x && T)
                        ? null
                        : g.a.createElement(k.a.Configure, {
                            SideNavButton: r,
                            TabBar: o,
                            TeamsSwitcher: a,
                            backLocation: i,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: w,
                            subtitle: B,
                            title: S,
                            withSearchBox: D,
                            withTweetButton: I,
                          })
                  return g.a.createElement(g.a.Fragment, null, V, U)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      f()(A, 'contextType', F.a),
        f()(A, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      e.a = Object(D.a)(A)
    },
    Voxc: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        w = (n('2G9S'), n('z84I'), n('ERkP')),
        f = n.n(w),
        y = n('3XMw'),
        b = n.n(y),
        g = n('lOQR'),
        v = n('7FtF'),
        C = n('MWbm'),
        k = n('Irs7'),
        B = n('t62R'),
        S = n('csss'),
        L = n('rHpw'),
        E = b.a.afcad7f2,
        O = b.a.hc762e4a,
        _ = b.a.c365dcc5,
        T = 'https://twitter.app.link/hfQ1AFOM52',
        D = { android: b.a.i8385a2c, ios: b.a.h201c4c1, windows: b.a.d383acfc },
        I = (function (t) {
          u()(n, t)
          var e = p()(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (t = e.call.apply(e, [this].concat(a))),
              m()(c()(t), '_appStoreUrls', g.a.getAppStoreURLs('download')),
              m()(c()(t), '_handleDownloadClick', function () {
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
                  return f.a.createElement(
                    v.a,
                    { title: E },
                    f.a.createElement(
                      C.a,
                      { style: F.itemContainer },
                      f.a.createElement(B.b, { color: 'gray700', size: 'subtext2' }, O),
                    ),
                    this._appStoreUrls.map(function (e, n) {
                      var r = e.matches,
                        o = e.platform,
                        a = e.url,
                        i = e.webUrl
                      return t._renderAppStoreLink(r() ? a : i, D[o], n)
                    }),
                    f.a.createElement(S.a, {
                      key: 'other',
                      label: _,
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
                  return f.a.createElement(S.a, {
                    key: n,
                    label: e,
                    link: { external: !0, pathname: ''.concat(T, '?$fallback_url=').concat(t) },
                    onPress: this._handleDownloadClick,
                  })
                },
              },
            ]),
            n
          )
        })(f.a.Component),
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
      n('hBpG'), n('7x/C')
      var r = n('6/RC'),
        o = n.n(r),
        a = n('aITJ'),
        i = {
          setLocation: function (t) {
            document.location = t
          },
          getAppStoreURLs: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah',
              e = l(t),
              n = [e.android, e.ios, e.windows],
              r = n.find(function (t) {
                return t.matches()
              })
            return r ? [r] : n
          },
          getiOSAppStoreLink: function (t) {
            var e = l(t)
            return e.ios.matches() ? e.ios.url : e.ios.webUrl
          },
          getAndroidAppStoreLink: function (t) {
            var e = l(t)
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
        l = function () {
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
