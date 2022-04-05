;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '3Ohe': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        g = (n('2G9S'), n('uFXj'), n('ERkP')),
        y = n.n(g),
        f = n('t62R'),
        b = n('rHpw'),
        v = n('MWbm'),
        w = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(s()(e), '_renderSubtextAndLink', function () {
                var t = e.props.subtext
                return y.a.createElement(f.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
              }),
              m()(s()(e), '_renderLearnMore', function () {
                var t = e.props,
                  n = t.learnMoreLabel,
                  r = t.learnMoreLink
                return r && n ? y.a.createElement(f.b, { link: r, size: 'subtext2' }, n) : null
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.label,
                    n = e.learnMoreLabel,
                    r = e.learnMoreLink,
                    a = e.subtext,
                    o = e.withBottomBorder
                  return y.a.createElement(
                    v.a,
                    { style: [x.root, o && x.bottomBorder] },
                    y.a.createElement(f.b, null, t),
                    a
                      ? n && r
                        ? this._renderSubtextAndLink()
                        : y.a.createElement(f.b, { color: 'gray700', size: 'subtext2' }, a)
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      m()(w, 'defaultProps', { withBottomBorder: !0 })
      var x = b.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          bottomBorder: {
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
        }
      })
      t.a = w
    },
    '55TG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return y
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = n('yiKp'),
        i = n.n(o),
        l = (n('2G9S'), n('kGix')),
        s = n('XMGw'),
        c = n('Ssj5'),
        u = n('oEOe'),
        d = 'verifyPassword',
        p = 'rweb/'.concat(s.a, '/').concat(d),
        h = Object(u.a)(p, 'VERIFY_PASSWORD'),
        m = { fetchStatus: l.a.NONE }
      c.a.register(
        a()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case h.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: l.a.LOADING })
            case h.SUCCESS:
              return i()(i()({}, e), {}, { fetchStatus: l.a.LOADED })
            case h.FAILURE:
              return i()(i()({}, e), {}, { error: t.payload, fetchStatus: l.a.FAILED })
            default:
              return e
          }
        }),
      )
      var g = function (e) {
          return e.verifyPassword.fetchStatus
        },
        y = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { params: { password: e }, request: a.Settings.verifyPassword })({
              actionTypes: h,
              context: 'VERIFY_PASSWORD',
            })
          }
        }
    },
    '5emT': function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              i.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      n('yH/f')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = n('EHV7'),
        l = n('rHpw'),
        s = l.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        c = n('7Mjr'),
        u = n('I4+6'),
        d = n('cm6r'),
        p = n('MWbm'),
        h = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var m = l.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          r = e.nativeID,
          g = e.rightControl,
          y = e.style,
          f = e.subtext,
          b = e.testID,
          v = e.text,
          w = (function (e) {
            switch (e) {
              case h.TopicFilled:
                return a.a.createElement(i.a, { style: s.icon })
              default:
                return null
            }
          })(t),
          x = f ? null : m.withSubtext,
          C = u.a.generate({
            backgroundColor: l.a.theme.colors.gray0,
            color: l.a.theme.colors.cellBackground,
            customFocusBackgroundColor: l.a.theme.colors.gray0,
            customHoverBackgroundColor: l.a.theme.colors.gray0,
            customPressedBackgroundColor: l.a.theme.colors.gray0,
          })
        return a.a.createElement(
          d.a,
          {
            interactiveStyles: n ? C : null,
            link: null == n ? void 0 : n.url,
            nativeID: r,
            style: [m.root, y],
            testID: b,
          },
          a.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: m.mainContent },
            a.a.createElement(p.a, { style: m.icon }, w),
            a.a.createElement(
              o.b,
              { numberOfLines: 3, size: 'headline1', style: x, weight: 'heavy', withHashflags: !0 },
              v,
            ),
            a.a.createElement(
              p.a,
              { style: m.rightControlGroup },
              n ? a.a.createElement(p.a, { style: x }, a.a.createElement(c.a, { style: m.iconArrow })) : null,
              g ? a.a.createElement(p.a, null, g) : null,
            ),
          ),
          f
            ? a.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: m.subtext, withHashflags: !0 },
                f,
              )
            : null,
        )
      }
    },
    '7FtF': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        g = (n('2G9S'), n('ERkP')),
        y = n.n(g),
        f = n('P1r1'),
        b = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        x = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: f.n, loggedInUser: b.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: f.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        C = n('v//M'),
        _ = n('3XMw'),
        E = n.n(_),
        S = n('M2mT'),
        I = 'settingsDetailSave',
        L = n('mw9i'),
        k = n('0yYu'),
        B = n('/yvb'),
        T = n('rHpw'),
        F = E.a.i2209530,
        D = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(s()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return y.a.createElement(C.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              m()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.onSubmit,
                  a = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  l = t.withMarginBottom
                return y.a.createElement(
                  L.a,
                  { style: [P.contentRoot, l && P.withMarginBottom] },
                  n,
                  r
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(k.a, null),
                        y.a.createElement(
                          L.a,
                          { style: P.buttonContainer },
                          y.a.createElement(B.a, { disabled: a, onPress: r, style: P.button, testID: I, type: i }, o),
                        ),
                      )
                    : null,
                )
              }),
              m()(s()(e), '_handleFetch', function () {
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
                    r = e.rightControl,
                    a = e.screenType,
                    o = e.secondaryBar,
                    i = e.title,
                    l = e.withBottomBorder,
                    s = this.getBackLocation(),
                    c = t ? '@'.concat(t.screen_name) : void 0
                  return y.a.createElement(
                    S.a,
                    {
                      backLocation: s,
                      onBackClick: n,
                      rightControl: r,
                      screenType: a,
                      secondaryBar: o,
                      showSubtitleOnWideDetail: !1,
                      subtitle: c,
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
      m()(D, 'defaultProps', { submitLabel: F, submitType: 'brandFilled', withMarginBottom: !0 })
      var P = T.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(T.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = x(D)
    },
    M2mT: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        g = n('KEM+'),
        y = n.n(g),
        f = (n('2G9S'), n('i4UL'), n('+/5o')),
        b = n('ERkP'),
        v = n.n(b),
        w = n('HPNB'),
        x = n('VAZu'),
        C = n('wiP2'),
        _ = n('Es6L'),
        E = n('yiKp'),
        S = n.n(E),
        I = n('rHpw'),
        L = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: S()(S()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        k = n('MWbm'),
        B = n('yw4N'),
        T = n('TnY3'),
        F = n('cHvH'),
        D = n('3xLC'),
        P = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        V = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      k.a,
                      { style: L.fill },
                      v.a.createElement(
                        B.a,
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
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(F.a, null, function (t) {
                    var n = t.windowWidth
                    return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      a()(e, P))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(_.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(C.a.Configure, n),
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
                    n = this.props,
                    r = n.SideNavButton,
                    a = n.TabBar,
                    o = n.TeamsSwitcher,
                    i = n.backLocation,
                    l = n.documentTitle,
                    s = n.headerless,
                    c = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    h = n.rightControl,
                    m = n.screenType,
                    g = n.searchBoxOptions,
                    y = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    _ = n.subtitle,
                    E = n.title,
                    S = n.titleIconCell,
                    I = n.titleIconCellSize,
                    B = n.withDetailOpen,
                    T = n.withSearchBox,
                    F = n.withTweetButton,
                    D = 'root' === m,
                    P = 'secondaryRoot' === m,
                    V = 'primaryDetail' === m,
                    O = (V && w) || (D && b),
                    z = D || (V && t),
                    H = D ? f.c : V ? f.a : void 0,
                    R = v.a.createElement(
                      k.a,
                      { style: L.appBarContainer },
                      v.a.createElement(x.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: z,
                        history: c,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: y,
                        subtitle: O ? _ : void 0,
                        title: E,
                        titleDomId: H,
                        titleIconCell: S,
                        titleIconCellSize: I,
                      }),
                    ),
                    K =
                      D || (P && B)
                        ? null
                        : v.a.createElement(C.a.Configure, {
                            SideNavButton: r,
                            TabBar: a,
                            TeamsSwitcher: o,
                            backLocation: i,
                            documentTitle: l,
                            headerless: s,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: g,
                            subtitle: _,
                            title: E,
                            withSearchBox: T,
                            withTweetButton: F,
                          })
                  return v.a.createElement(v.a.Fragment, null, K, R)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(V, 'contextType', D.a),
        y()(V, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(T.a)(V)
    },
    PK8P: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        h = n('KEM+'),
        m = n.n(h),
        g = (n('2G9S'), n('ERkP')),
        y = n.n(g),
        f = n('k49u'),
        b = n('hqKg'),
        v = n('0KEI'),
        w = n('oEGd'),
        x = n('55TG'),
        C = Object(b.createSelector)(x.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        _ = {
          verifyPassword: x.b,
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        E = Object(w.f)(C, _, null, { pure: !1 }),
        S = n('kGix'),
        I = n('v//M'),
        L = n('3XMw'),
        k = n.n(L),
        B = n('5FtR'),
        T = n('iCwC'),
        F = n('MWbm'),
        D = n('TnY3'),
        P = n('t62R'),
        V = n('6vad'),
        O = n('p+r5'),
        z = n('mw9i'),
        H = n('/yvb'),
        R = n('rHpw'),
        K = n('v6aA'),
        M = k.a.fe36fe1f,
        A = k.a.dec3c9b8,
        W = k.a.hccd9dbd,
        j = k.a.d1091f50,
        G = k.a.g9677c6d,
        U = k.a.c8cb0b4c,
        N = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(s()(e), 'state', { password: '' }),
              m()(
                s()(e),
                '_passwordlessSsoEnabled',
                e.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              m()(s()(e), '_handlePasswordSubmit', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.verifyPassword,
                  o = e.state.password
                '' !== o &&
                  a(o)
                    .then(function () {
                      e.setState({ password: '', verificationRequired: !1 }), e._makeFetch()
                    })
                    .catch(
                      r(
                        ((t = {}),
                        m()(t, f.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: U })
                          },
                        }),
                        m()(t, 'showToast', !0),
                        t),
                      ),
                    )
              }),
              m()(s()(e), '_makeFetch', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    r(
                      ((t = {}),
                      m()(t, f.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              m()(s()(e), '_handleFetch', e._makeFetch),
              m()(s()(e), '_handleChange', function (t) {
                e.setState({ passwordError: void 0, password: t.target.value })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._makeFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.fetchStatus === S.a.LOADED && this.props.fetchStatus === S.a.NONE && this._makeFetch()
                },
              },
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props.titleHeader,
                    t = this.state.passwordError,
                    n = y.a.createElement(
                      P.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      j,
                    )
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    e ? y.a.createElement(V.b, { text: e }) : null,
                    y.a.createElement(
                      F.a,
                      { style: [T.a.viewItem, T.a.bottomBorder] },
                      y.a.createElement(P.b, { color: 'gray700', size: 'subtext2' }, W),
                    ),
                    y.a.createElement(O.a, {
                      errorText: t,
                      helperText: n,
                      invalid: !!t,
                      label: A,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    y.a.createElement(
                      z.a,
                      { style: Y.buttonContainer },
                      y.a.createElement(
                        H.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: Y.button, type: 'brandFilled' },
                        G,
                      ),
                    ),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location,
                    r = e.render,
                    a = this.state.verificationRequired,
                    o = t === S.a.FAILED && a
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    o
                      ? this._passwordlessSsoEnabled
                        ? y.a.createElement(B.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : y.a.createElement(I.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      m()(N, 'contextType', K.a), m()(N, 'defaultProps', { titleHeader: M })
      var Y = R.a.create(function (e) {
          return {
            buttonContainer: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 0,
              marginHorizontal: 'auto',
              paddingBottom: e.spaces.space12,
              paddingHorizontal: 0,
            },
            button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        q = E(N)
      t.a = Object(D.a)(q)
    },
    iCwC: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('rHpw'),
        i = function (e) {
          return { borderBottomColor: e.colors.borderColor, borderBottomStyle: 'solid', borderBottomWidth: '1px' }
        }
      t.a = o.a.create(function (e) {
        return {
          descriptionText: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space16,
          },
          searchBox: { margin: e.spaces.space4 },
          infoText: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground },
          viewItem: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            backgroundColor: e.colors.cellBackground,
          },
          calloutTextBlock: {
            paddingVertical: e.spaces.space20,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
          },
          bottomBorder: a()({}, i(e)),
        }
      })
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return j
      })
      n('yiKp')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        g = n('2VqO'),
        y = n.n(g),
        f = n('KEM+'),
        b = n.n(f),
        v = (n('2G9S'), n('ERkP')),
        w = n.n(v),
        x = n('38/B'),
        C = n('t62R'),
        _ = n('/yvb'),
        E = n('piX5'),
        S = n('3XMw'),
        I = n.n(S),
        L = n('tI3i'),
        k = n.n(L),
        B = n('oQhu'),
        T = n('rHpw'),
        F = n('aITJ'),
        D = n('MWbm'),
        P = n('n5fo'),
        V = n('5emT'),
        O = n('Oib4'),
        z = n('WtWS'),
        H = n('ioan'),
        R = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        K = function (e) {
          return e.length
        },
        M = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K
          return t(e)
        },
        A = I.a.de540c32,
        W = I.a.b4abfdb3,
        j = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e) {
            var r
            s()(this, n),
              (r = t.call(this, e)),
              b()(p()(r), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(p()(r), '_isLabelLarge', function () {
                var e = r.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              b()(
                p()(r),
                '_getTextInputStyle',
                Object(B.a)(function (e) {
                  return [G.root, !e && G.disabled]
                }),
              ),
              b()(p()(r), '_getTextInputType', function () {
                var e = r.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  a = r.state.isPasswordRevealed
                return 'password' === n && t ? (a ? 'text' : 'password') : n
              }),
              b()(p()(r), '_calculateLength', function (e) {
                return M(e, r.props.calculateLength)
              }),
              b()(p()(r), '_shouldRenderDisplayCount', function () {
                var e = r.state.isFocused,
                  t = r._isFormInvalid()
                return Boolean((e || t) && r._getMaxDisplayCount())
              }),
              b()(p()(r), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  a,
                  o,
                  i = r.props.type,
                  l =
                    null === (e = r._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  s =
                    null === (n = r._textInput) ||
                    void 0 === n ||
                    null === (a = n.textInputNode) ||
                    void 0 === a ||
                    null === (o = a.validity) ||
                    void 0 === o
                      ? void 0
                      : o.badInput
                return 'number' === i && '' === l && !0 === s
              }),
              b()(p()(r), '_getActualCount', function (e) {
                var t = e.length
                return r._isInvalidNumber() && (t = 1), t
              }),
              b()(p()(r), '_handleBlur', function () {
                var e,
                  t = r.props.onBlur,
                  n = (null === (e = r._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  a = r._calculateLength(n),
                  o = r._getActualCount(n)
                r.setState({ isFocused: !1, displayCount: a, actualCount: o }), t && t()
              }),
              b()(p()(r), '_handleChange', function (e) {
                var t = r.props.onChange,
                  n = r.state.previousValue,
                  a = e.currentTarget.value,
                  o = r._calculateLength(a),
                  i = r._getActualCount(a),
                  l = r._getAdjustedMaxLength()
                void 0 !== l && a.length > l && n.length < a.length
                  ? (e.currentTarget.value = n)
                  : (r.setState({
                      isFocused: !0,
                      displayCount: o,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              b()(p()(r), '_handleFocus', function () {
                var e = r.props.onFocus
                r.setState({ isFocused: !0 }), e && e()
              }),
              b()(p()(r), '_handleKeyPress', function (e) {
                var t = r.props,
                  n = t.multiline,
                  a = t.onKeyPress,
                  o = t.onSubmitEditing
                a && a(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !o || (e.preventDefault(), o(e))
              }),
              b()(p()(r), '_handleKeyDown', function (e) {
                var t = r.props.onKeyDown,
                  n = 0 === r.state.displayCount
                F.b.isKaiOS() && 'Backspace' === e.key && n ? (r._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              b()(p()(r), '_handleKeyUp', function (e) {
                var t = r.props.onKeyUp
                F.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  r._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), r.blur()),
                  t && t(e)
              }),
              b()(p()(r), '_handlePasswordVisibilityClick', function (e) {
                r.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(p()(r), '_setTextInputRef', function (e) {
                r._textInput = e
              }),
              b()(p()(r), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  r = e.onChange,
                  a = e.validLength,
                  o = !!r,
                  i = 'string' == typeof e.value,
                  l = 'string' == typeof t
                k()(
                  !(!l && i && !o),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  k()(!(n && a && a > n), 'Max length should be equal or greater than valid length.'),
                  k()(
                    !((void 0 !== n && n <= 0) || (void 0 !== a && a <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(p()(r), '_exceedsValidLength', function (e) {
                var t = r._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(p()(r), '_getMaxDisplayCount', function () {
                return r.props.validLength || r.props.maxLength
              }),
              b()(p()(r), '_getAdjustedMaxLength', function () {
                var e = r.props.maxLength,
                  t = r.getValue(),
                  n = r._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              r._checkComponentPropsUsageCorrectness(e)
            var a = e.defaultValue,
              o = e.value || a || ''
            return (
              (r.state = {
                displayCount: r._calculateLength(o),
                actualCount: K(o),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: o,
              }),
              r
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      r = t.onChange,
                      a = t.validLength,
                      o = t.value,
                      i = e.maxLength,
                      l = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === a && n === i && !!r === !!l && ('string' == typeof o) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      r = e.errorText,
                      a = e.helperText,
                      o = e.style,
                      i = this.state.isFocused,
                      l = this._isFormInvalid()
                    return w.a.createElement(
                      D.a,
                      { style: [U.root, o] },
                      w.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            E.a.border,
                            U.textInputFormStyle,
                            l && E.a.invalidBorderColor,
                            i && l && E.a.focusedBorderInvalid,
                            i && !l && E.a.focusedBorderValid,
                            !n && E.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          D.a,
                          { style: U.textInputFormWrapper },
                          w.a.createElement(
                            D.a,
                            { style: U.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        D.a,
                        { style: [U.sidePadding, U.underTextInputForm] },
                        w.a.createElement(
                          D.a,
                          { style: U.subtextWrapper },
                          a ? this._renderHelperText() : null,
                          l && r ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      r = this._isLabelLarge()
                    return w.a.createElement(
                      C.b,
                      {
                        color: r ? 'gray700' : n,
                        numberOfLines: 1,
                        size: r ? 'headline1' : 'subtext2',
                        style: [
                          U.textInputHeaderItem,
                          r && U.placeholderText,
                          !x.a.reducedMotionEnabled && U.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      r =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      o = (e.style, e.type, e.validLength, i()(e, R))
                    return w.a.createElement(
                      D.a,
                      { style: G.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        C.b,
                        { size: 'headline1', style: G.wrapper },
                        w.a.createElement(
                          H.a,
                          a()({}, o, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      r && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      r = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? w.a.createElement(
                          D.a,
                          { style: U.passwordVisibilityIconContainer },
                          w.a.createElement(_.a, {
                            accessibilityLabel: r ? W : A,
                            focusable: !0,
                            hoverLabel: { label: r ? W : A },
                            icon: r ? w.a.createElement(P.a, null) : w.a.createElement(V.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return w.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        C.b,
                        { color: 'gray700', size: 'subtext2', style: U.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        C.b,
                        { color: 'red500', size: 'subtext2', style: U.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      r = t && I.a.ia24dc8c(t),
                      a = I.a.ia24dc8c(e)
                    return w.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'polite', style: [U.textInputHeaderItem, U.displayCount] },
                      w.a.createElement(
                        C.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        r ? ''.concat(a, ' / ').concat(r) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [U.icon, t && U.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(O.a, { style: [U.validationIcon, E.a.invalidColor] })
                      : w.a.createElement(z.a, { style: [U.validationIcon, E.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      r = e.value,
                      a = 'string' == typeof r ? M(r, n) : 0
                    return 'string' == typeof r && a !== t.displayCount
                      ? { displayCount: a, actualCount: r.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(w.a.Component)
      b()(j, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (j.propTypes = {})
      var G = T.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        U = T.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var r = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = r
    },
  },
])
//# sourceMappingURL=WIPED
