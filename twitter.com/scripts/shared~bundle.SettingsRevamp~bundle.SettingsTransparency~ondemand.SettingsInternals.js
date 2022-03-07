;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
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
        y = (n('2G9S'), n('uFXj'), n('ERkP')),
        g = n.n(y),
        b = n('t62R'),
        f = n('rHpw'),
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
                return g.a.createElement(b.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
              }),
              m()(s()(e), '_renderLearnMore', function () {
                var t = e.props,
                  n = t.learnMoreLabel,
                  r = t.learnMoreLink
                return r && n ? g.a.createElement(b.b, { link: r, size: 'subtext2' }, n) : null
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
                  return g.a.createElement(
                    v.a,
                    { style: [x.root, o && x.bottomBorder] },
                    g.a.createElement(b.b, null, t),
                    a
                      ? n && r
                        ? this._renderSubtextAndLink()
                        : g.a.createElement(b.b, { color: 'gray700', size: 'subtext2' }, a)
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(w, 'defaultProps', { withBottomBorder: !0 })
      var x = f.a.create(function (e) {
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
        return y
      }),
        n.d(t, 'b', function () {
          return g
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
      var y = function (e) {
          return e.verifyPassword.fetchStatus
        },
        g = function (e) {
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
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        b = n('P1r1'),
        f = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        x = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: b.o, loggedInUser: f.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: b.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = n('v//M'),
        C = n('3XMw'),
        S = n.n(C),
        E = n('M2mT'),
        I = 'settingsDetailSave',
        L = n('mw9i'),
        k = n('0yYu'),
        B = n('/yvb'),
        T = n('rHpw'),
        F = S.a.i2209530,
        P = (function (e) {
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
                return g.a.createElement(_.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              m()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.onSubmit,
                  a = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  l = t.withMarginBottom
                return g.a.createElement(
                  L.a,
                  { style: [D.contentRoot, l && D.withMarginBottom] },
                  n,
                  r
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(k.a, null),
                        g.a.createElement(
                          L.a,
                          { style: D.buttonContainer },
                          g.a.createElement(B.a, { disabled: a, onPress: r, style: D.button, testID: I, type: i }, o),
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
                  return g.a.createElement(
                    E.a,
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
        })(g.a.Component)
      m()(P, 'defaultProps', { submitLabel: F, submitType: 'brandFilled', withMarginBottom: !0 })
      var D = T.a.create(function (e) {
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
      t.a = x(P)
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
        y = n('KEM+'),
        g = n.n(y),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        f = n('ERkP'),
        v = n.n(f),
        w = n('HPNB'),
        x = n('VAZu'),
        _ = n('wiP2'),
        C = n('Es6L'),
        S = n('yiKp'),
        E = n.n(S),
        I = n('rHpw'),
        L = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: E()(E()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
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
        P = n('3xLC'),
        D = [
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
              g()(u()(e), '_renderChildren', function () {
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
                      a()(e, D))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(_.a.Configure, n),
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
                    y = n.searchBoxOptions,
                    g = n.secondaryBar,
                    f = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    S = n.title,
                    E = n.titleIconCell,
                    I = n.titleIconCellSize,
                    B = n.withDetailOpen,
                    T = n.withSearchBox,
                    F = n.withTweetButton,
                    P = 'root' === m,
                    D = 'secondaryRoot' === m,
                    V = 'primaryDetail' === m,
                    O = (V && w) || (P && f),
                    R = P || (V && t),
                    z = P ? b.c : V ? b.a : void 0,
                    H = v.a.createElement(
                      k.a,
                      { style: L.appBarContainer },
                      v.a.createElement(x.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: R,
                        history: c,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: g,
                        subtitle: O ? C : void 0,
                        title: S,
                        titleDomId: z,
                        titleIconCell: E,
                        titleIconCellSize: I,
                      }),
                    ),
                    K =
                      P || (D && B)
                        ? null
                        : v.a.createElement(_.a.Configure, {
                            SideNavButton: r,
                            TabBar: a,
                            TeamsSwitcher: o,
                            backLocation: i,
                            documentTitle: l,
                            headerless: s,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: y,
                            subtitle: C,
                            title: S,
                            withSearchBox: T,
                            withTweetButton: F,
                          })
                  return v.a.createElement(v.a.Fragment, null, K, H)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(V, 'contextType', P.a),
        g()(V, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
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
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        b = n('k49u'),
        f = n('hqKg'),
        v = n('0KEI'),
        w = n('oEGd'),
        x = n('55TG'),
        _ = Object(f.createSelector)(x.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        C = {
          verifyPassword: x.b,
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        S = Object(w.g)(_, C, null, { pure: !1 }),
        E = n('kGix'),
        I = n('v//M'),
        L = n('3XMw'),
        k = n.n(L),
        B = n('5FtR'),
        T = n('iCwC'),
        F = n('MWbm'),
        P = n('TnY3'),
        D = n('t62R'),
        V = n('6vad'),
        O = n('p+r5'),
        R = n('mw9i'),
        z = n('/yvb'),
        H = n('rHpw'),
        K = n('v6aA'),
        M = k.a.fe36fe1f,
        A = k.a.dec3c9b8,
        W = k.a.hccd9dbd,
        j = k.a.d1091f50,
        U = k.a.g9677c6d,
        N = k.a.c8cb0b4c,
        G = (function (e) {
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
                        m()(t, b.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: N })
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
                      m()(t, b.a.PasswordVerificationRequired, {
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
                  e.fetchStatus === E.a.LOADED && this.props.fetchStatus === E.a.NONE && this._makeFetch()
                },
              },
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props.titleHeader,
                    t = this.state.passwordError,
                    n = g.a.createElement(
                      D.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      j,
                    )
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    e ? g.a.createElement(V.b, { text: e }) : null,
                    g.a.createElement(
                      F.a,
                      { style: [T.a.viewItem, T.a.bottomBorder] },
                      g.a.createElement(D.b, { color: 'gray700', size: 'subtext2' }, W),
                    ),
                    g.a.createElement(O.a, {
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
                    g.a.createElement(
                      R.a,
                      { style: Y.buttonContainer },
                      g.a.createElement(
                        z.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: Y.button, type: 'brandFilled' },
                        U,
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
                    o = t === E.a.FAILED && a
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    o
                      ? this._passwordlessSsoEnabled
                        ? g.a.createElement(B.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : g.a.createElement(I.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(G, 'contextType', K.a), m()(G, 'defaultProps', { titleHeader: M })
      var Y = H.a.create(function (e) {
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
        q = S(G)
      t.a = Object(P.a)(q)
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
        y = n('2VqO'),
        g = n.n(y),
        b = n('KEM+'),
        f = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        w = n.n(v),
        x = n('38/B'),
        _ = n('t62R'),
        C = n('/yvb'),
        S = n('piX5'),
        E = n('3XMw'),
        I = n.n(E),
        L = n('tI3i'),
        k = n.n(L),
        B = n('oQhu'),
        T = n('rHpw'),
        F = n('aITJ'),
        P = n('MWbm'),
        D = n('n5fo'),
        V = n('5emT'),
        O = n('Oib4'),
        R = n('WtWS'),
        z = n('ioan'),
        H = [
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
          var t = g()(n)
          function n(e) {
            var r
            s()(this, n),
              (r = t.call(this, e)),
              f()(p()(r), '_blurOnBackspaceKeyUpForKaiOS', !1),
              f()(p()(r), '_isLabelLarge', function () {
                var e = r.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              f()(
                p()(r),
                '_getTextInputStyle',
                Object(B.a)(function (e) {
                  return [U.root, !e && U.disabled]
                }),
              ),
              f()(p()(r), '_getTextInputType', function () {
                var e = r.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  a = r.state.isPasswordRevealed
                return 'password' === n && t ? (a ? 'text' : 'password') : n
              }),
              f()(p()(r), '_calculateLength', function (e) {
                return M(e, r.props.calculateLength)
              }),
              f()(p()(r), '_shouldRenderDisplayCount', function () {
                var e = r.state.isFocused,
                  t = r._isFormInvalid()
                return Boolean((e || t) && r._getMaxDisplayCount())
              }),
              f()(p()(r), '_isInvalidNumber', function () {
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
              f()(p()(r), '_getActualCount', function (e) {
                var t = e.length
                return r._isInvalidNumber() && (t = 1), t
              }),
              f()(p()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur,
                  n = e.currentTarget.value,
                  a = r._calculateLength(n),
                  o = r._getActualCount(n)
                r.setState({ isFocused: !1, displayCount: a, actualCount: o }), t && t(e)
              }),
              f()(p()(r), '_handleChange', function (e) {
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
              f()(p()(r), '_handleFocus', function (e) {
                var t = r.props.onFocus
                r.setState({ isFocused: !0 }), t && t(e)
              }),
              f()(p()(r), '_handleKeyPress', function (e) {
                var t = r.props,
                  n = t.multiline,
                  a = t.onKeyPress,
                  o = t.onSubmitEditing
                a && a(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !o || (e.preventDefault(), o(e))
              }),
              f()(p()(r), '_handleKeyDown', function (e) {
                var t = r.props.onKeyDown,
                  n = 0 === r.state.displayCount
                F.b.isKaiOS() && 'Backspace' === e.key && n ? (r._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              f()(p()(r), '_handleKeyUp', function (e) {
                var t = r.props.onKeyUp
                F.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  r._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), r.blur()),
                  t && t(e)
              }),
              f()(p()(r), '_handlePasswordVisibilityClick', function (e) {
                r.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              f()(p()(r), '_setTextInputRef', function (e) {
                r._textInput = e
              }),
              f()(p()(r), '_checkComponentPropsUsageCorrectness', function (e) {
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
              f()(p()(r), '_exceedsValidLength', function (e) {
                var t = r._getMaxDisplayCount()
                return !!t && e > t
              }),
              f()(p()(r), '_getMaxDisplayCount', function () {
                return r.props.validLength || r.props.maxLength
              }),
              f()(p()(r), '_getAdjustedMaxLength', function () {
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
                      P.a,
                      { style: [N.root, o] },
                      w.a.createElement(
                        P.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            S.a.border,
                            N.textInputFormStyle,
                            l && S.a.invalidBorderColor,
                            i && l && S.a.focusedBorderInvalid,
                            i && !l && S.a.focusedBorderValid,
                            !n && S.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          P.a,
                          { style: N.textInputFormWrapper },
                          w.a.createElement(
                            P.a,
                            { style: N.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        P.a,
                        { style: [N.sidePadding, N.underTextInputForm] },
                        w.a.createElement(
                          P.a,
                          { style: N.subtextWrapper },
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
                      _.b,
                      {
                        color: r ? 'gray700' : n,
                        numberOfLines: 1,
                        size: r ? 'headline1' : 'subtext2',
                        style: [
                          N.textInputHeaderItem,
                          r && N.placeholderText,
                          !x.a.reducedMotionEnabled && N.transition,
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
                      o = (e.style, e.type, e.validLength, i()(e, H))
                    return w.a.createElement(
                      P.a,
                      { style: U.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        _.b,
                        { size: 'headline1', style: U.wrapper },
                        w.a.createElement(
                          z.a,
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
                          P.a,
                          { style: N.passwordVisibilityIconContainer },
                          w.a.createElement(C.a, {
                            accessibilityLabel: r ? W : A,
                            focusable: !0,
                            hoverLabel: { label: r ? W : A },
                            icon: r ? w.a.createElement(D.a, null) : w.a.createElement(V.a, null),
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
                      P.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        _.b,
                        { color: 'gray700', size: 'subtext2', style: N.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        _.b,
                        { color: 'red500', size: 'subtext2', style: N.subtext },
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
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [N.textInputHeaderItem, N.displayCount] },
                      w.a.createElement(
                        _.b,
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
                      n = [N.icon, t && N.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(O.a, { style: [N.validationIcon, S.a.invalidColor] })
                      : w.a.createElement(R.a, { style: [N.validationIcon, S.a.validColor] })
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
      f()(j, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (j.propTypes = {})
      var U = T.a.create(function (e) {
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
        N = T.a.create(function (e) {
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
