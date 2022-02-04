;(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    '3cwy': function (e, t, n) {
      'use strict'
      var a = n('fHOo')
      t.a = function () {
        return Object(a.a)()
      }
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
        o = n('3XMw'),
        i = n.n(o),
        c = n('SrIh'),
        l = i.a.a5d4fda0,
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(c.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '7FtF': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('ERkP')),
        b = n.n(m),
        g = n('P1r1'),
        y = n('G6rE'),
        E = n('rxPX'),
        v = n('0KEI'),
        w = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: g.o, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: g.f,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        S = n('v//M'),
        _ = n('3XMw'),
        C = n.n(_),
        k = n('M2mT'),
        I = 'settingsDetailSave',
        x = n('mw9i'),
        O = n('0yYu'),
        A = n('/yvb'),
        D = n('rHpw'),
        F = C.a.i2209530,
        L = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return b.a.createElement(S.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  c = t.withMarginBottom
                return b.a.createElement(
                  x.a,
                  { style: [T.contentRoot, c && T.withMarginBottom] },
                  n,
                  a
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(O.a, null),
                        b.a.createElement(
                          x.a,
                          { style: T.buttonContainer },
                          b.a.createElement(A.a, { disabled: r, onPress: a, style: T.button, testID: I, type: i }, o),
                        ),
                      )
                    : null,
                )
              }),
              h()(l()(e), '_handleFetch', function () {
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
                    c = e.withBottomBorder,
                    l = this.getBackLocation(),
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return b.a.createElement(
                    k.a,
                    {
                      backLocation: l,
                      onBackClick: n,
                      rightControl: a,
                      screenType: r,
                      secondaryBar: o,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
                      title: i,
                      withBottomBorder: c,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(L, 'defaultProps', { submitLabel: F, submitType: 'brandFilled', withMarginBottom: !0 })
      var T = D.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(D.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = w(L)
    },
    ALyI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsVideoAutoplay', function () {
          return V
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        g = (n('KqXw'), n('MvUL'), n('ERkP')),
        y = n.n(g),
        E = n('FPOR'),
        v = n('zh9S'),
        w = n('hqKg'),
        S = n('0KEI'),
        _ = n('oEGd'),
        C = n('H9MA'),
        k = Object(w.createSelector)(C.f, C.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        I = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: v.a,
          scribeAction: v.c,
          scribePageImpression: v.d,
          updateVideoAutoplay: C.i,
        },
        x = Object(_.g)(k, I),
        O = n('45mF'),
        A = n('3XMw'),
        D = n.n(A),
        F = n('7FtF'),
        L = n('3cwy'),
        T = n('MWbm'),
        P = n('Y3cQ'),
        B = n('t62R'),
        R = n('6v1f'),
        M = D.a.a776eed7,
        N = D.a.ede134f2,
        H = D.a.i859a9d3,
        j = { page: 'settings', section: 'autoplay' },
        z = function (e) {
          return { value: e, label: E.a[e] }
        },
        V = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              b()(u()(o), '_handleItemChanged', function (e, t) {
                var n = o.props,
                  a = n.createLocalApiErrorHandler,
                  i = n.scribeAction,
                  c = n.updateVideoAutoplay
                i(r()(r()({}, j), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  c(R.b[t]).catch(a(r()(r()({}, Object(O.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(z(R.b.Always)),
              R.c && o._options.push(z(R.b.WiFiOnly)),
              o._options.push(z(R.b.Off)),
              o
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.dataSaverMode,
                    n = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(j),
                    n(j),
                    (!t && Object(L.a)()) || this.props.history.replace('/settings/data')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.videoAutoplay
                  return y.a.createElement(
                    F.a,
                    { location: t, title: M },
                    y.a.createElement(
                      T.a,
                      null,
                      y.a.createElement(P.a, {
                        description: y.a.createElement(
                          y.a.Fragment,
                          null,
                          ''.concat(N, ' '),
                          y.a.createElement(B.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, H),
                        ),
                        label: M,
                        name: 'video_autoplay',
                        onChange: this._handleItemChanged,
                        options: this._options,
                        value: n || R.a,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      t.default = x(V)
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return l
        }),
        n.d(t, 'd', function () {
          return s
        }),
        n.d(t, 'e', function () {
          return p
        })
      n('yH/f')
      var a = n('SrIh'),
        r = n('JbbX'),
        o = 1e3,
        i = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function c(e) {
        var t = Object(r.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? i.AcceptAllCookies
                : t[2]
                ? i.RefuseNonEssentialCookies
                : (Object(a.a)('Invalid consent signal state'), i.Invalid)
              : i.NotSet
            : i.Invalid
          : i.NotSet
      }
      function l(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function s(e) {
        Object(r.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(r.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    BUB3: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n.n(c),
        s = n('sNn6'),
        u = n('rHpw'),
        d = n('MWbm'),
        p = ['children'],
        f = u.a.create(function (e) {
          return {
            activeRoot: { backgroundColor: e.colors.gray0 },
            overlay: r()(
              r()({}, u.a.absoluteFillObject),
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
          n = i()(e, p)
        return l.a.createElement(s.a, n, function (e) {
          return l.a.createElement(
            d.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(d.a, { pointerEvents: 'none', style: f.overlay }) : null,
          )
        })
      }
    },
    ClNT: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('ERkP')),
        b = n.n(m),
        g = n('k49u'),
        y = n('rxPX'),
        E = n('0KEI'),
        v = Object(y.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        w = n('kGix'),
        S = n('v//M'),
        _ = n('5FtR'),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { verificationRequired: !1 }),
              h()(l()(e), '_handleFetch', function () {
                var t,
                  n = e.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    a(
                      ((t = {}),
                      h()(t, g.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      h()(t, g.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      h()(t, 'showToast', !1),
                      t),
                    ),
                  )
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
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.renderChildren,
                    a = this.state.verificationRequired,
                    r = t === w.a.FAILED && a
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    r
                      ? b.a.createElement(_.a, { to: '/i/flow/verify_account_ownership' })
                      : b.a.createElement(S.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        k = v.forwardRef(C)
      t.a = k
    },
    FPOR: function (e, t, n) {
      'use strict'
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = n('6v1f'),
        c = n('3XMw'),
        l = n.n(c),
        s = l.a.g1888dc1,
        u = l.a.f724d1a9,
        d = l.a.cf6472c1
      t.a = ((a = {}), o()(a, i.b.Off, s), o()(a, i.b.WiFiOnly, u), o()(a, i.b.Always, d), a)
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = (n('hBvt'), n('ERkP')),
        i = n.n(o),
        c = n('BUB3'),
        l = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return i.a.createElement(c.a, { exact: !0, path: e.link }, function (t) {
          var n = l.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, r()({ isActive: t }, e, { label: i.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        E = n.n(y),
        v = n('HPNB'),
        w = n('VAZu'),
        S = n('wiP2'),
        _ = n('Es6L'),
        C = n('yiKp'),
        k = n.n(C),
        I = n('rHpw'),
        x = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        O = n('MWbm'),
        A = n('yw4N'),
        D = n('TnY3'),
        F = n('cHvH'),
        L = n('3xLC'),
        T = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        P = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? E.a.createElement(
                      O.a,
                      { style: x.fill },
                      E.a.createElement(
                        A.a,
                        { style: x.viewportView },
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
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return E.a.createElement(F.a, null, function (t) {
                    var n = t.windowWidth
                    return v.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      r()(e, T))
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    Object(_.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : E.a.createElement(S.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return E.a.createElement(
                    E.a.Fragment,
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
                    i = n.backLocation,
                    c = n.documentTitle,
                    l = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    f = n.rightControl,
                    h = n.screenType,
                    m = n.searchBoxOptions,
                    b = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    v = n.showSubtitleOnWideDetail,
                    _ = n.subtitle,
                    C = n.title,
                    k = n.titleIconCell,
                    I = n.titleIconCellSize,
                    A = n.withBottomBorder,
                    D = n.withDetailOpen,
                    F = n.withSearchBox,
                    L = n.withTweetButton,
                    T = 'root' === h,
                    P = 'secondaryRoot' === h,
                    B = 'primaryDetail' === h,
                    R = (B && v) || (T && y),
                    M = T || (B && t),
                    N = T ? g.c : B ? g.a : void 0,
                    H = E.a.createElement(
                      O.a,
                      { style: x.appBarContainer },
                      E.a.createElement(w.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: M,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: f,
                        secondaryBar: b,
                        subtitle: R ? _ : void 0,
                        title: C,
                        titleDomId: N,
                        titleIconCell: k,
                        titleIconCellSize: I,
                        withBottomBorder: A,
                      }),
                    ),
                    j =
                      T || (P && D)
                        ? null
                        : E.a.createElement(S.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: o,
                            backLocation: i,
                            documentTitle: c,
                            headerless: l,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: f,
                            searchBoxOptions: m,
                            subtitle: _,
                            title: C,
                            withSearchBox: F,
                            withTweetButton: L,
                          })
                  return E.a.createElement(E.a.Fragment, null, j, H)
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      b()(P, 'contextType', L.a),
        b()(P, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(D.a)(P)
    },
    NyKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return b
      }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'f', function () {
          return E
        }),
        n.d(t, 'g', function () {
          return v
        }),
        n.d(t, 'h', function () {
          return w
        }),
        n.d(t, 'd', function () {
          return S
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'e', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        c = n('yiKp'),
        l = n.n(c),
        s = (n('yH/f'), n('LW0h'), n('7x/C'), n('2G9S'), n('kGix')),
        u = n('Ssj5'),
        d = n('oEOe'),
        p = 'userData',
        f = 'rweb/'.concat(p),
        h = Object(d.a)(f, 'FETCH_DOWNLOADS'),
        m = Object(d.a)(f, 'CREATE_DOWNLOAD'),
        b = Object.freeze({
          NEW: 'NEW',
          INPROGRESS: 'INPROGRESS',
          INPROGRESS_ASYNC: 'INPROGRESS_ASYNC',
          ZIPPING: 'ZIPPING',
          PUBLISHING: 'PUBLISHING',
          NOTIFYING: 'NOTIFYING',
          COMPLETE: 'COMPLETED',
          FAILED: 'FAILED',
          NONE: 'NONE',
        }),
        g = [b.NEW, b.INPROGRESS, b.INPROGRESS_ASYNC, b.ZIPPING, b.PUBLISHING, b.NOTIFYING],
        y = { fetchStatus: s.a.None, downloads: { all: [], nonFailed: [] } }
      u.a.register(
        r()({}, p, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case h.SUCCESS:
              var a = n.payload || [],
                r = a.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return l()(
                l()({}, t),
                {},
                { fetchStatus: s.a.LOADED, downloads: l()(l()({}, t.downloads), {}, { all: a, nonFailed: r }) },
              )
            case h.REQUEST:
              return l()(l()({}, t), {}, { fetchStatus: s.a.LOADING })
            case h.FAILURE:
              return l()(l()({}, t), {}, { error: n.payload, fetchStatus: s.a.FAILED })
            case m.SUCCESS:
              return l()(
                l()({}, t),
                {},
                {
                  downloads: l()(
                    l()({}, t.downloads),
                    {},
                    { nonFailed: (e = [{ status: 'INPROGRESS' }]).concat.apply(e, i()(t.downloads.nonFailed)) },
                  ),
                },
              )
            case m.FAILURE:
              return l()(l()({}, t), {}, { fetchStatus: s.a.NONE })
            default:
              return t
          }
        }),
      )
      var E = function (e) {
          return e.userData.downloads
        },
        v = function (e) {
          return e.userData.fetchStatus
        },
        w = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        S = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(d.b)(e, { request: a.UserData.fetchDownloads })({
              actionTypes: h,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        _ = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(d.b)(e, { request: a.UserData.createDataDownload })({
              actionTypes: m,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(d.d)(t, { params: e, request: r.UserData.markDataAsDownloaded })('MARK_DATA_AS_DOWNLOADED')
          }
        }
    },
    O2Os: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DownloadTwitterArchiveDetailedScreen', function () {
          return te
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n.n(m),
        g = n('zh9S'),
        y = n('NyKK'),
        E = n('rxPX'),
        v = n('0KEI'),
        w = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: y.g, downloads: y.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: y.d,
              googleAnalyticsPageView: g.a,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: y.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        S = n('XYIJ'),
        _ = (n('6U7i'), n('3XMw')),
        C = n.n(_),
        k = n('aITJ'),
        I = n('MWbm'),
        x = n('/yvb'),
        O = n('eb3s'),
        A = n('855f'),
        D = C.a.cfd2f35d,
        F = C.a.fc5bfd95,
        L = C.a.gee8110d,
        T = C.a.c326f156,
        P = C.a.c9fe9b56,
        B = C.a.j54b679a,
        R = C.a.ac63840c,
        M = C.a.bcd9b0ed,
        N = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { showConfirmation: !1 }),
              h()(l()(e), '_shouldDisplayConfirmation', !1),
              h()(l()(e), '_handleCancel', function () {
                e.setState({ showConfirmation: !1 })
              }),
              h()(l()(e), '_handleNeedsConfirmationActionCellPress', function () {
                e.setState({ showConfirmation: !0 })
              }),
              h()(l()(e), '_handleConfirm', function (t) {
                e.setState({ showConfirmation: !1 }), e.props.onConfirm()
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._shouldDisplayConfirmation = k.b.isMobileOS()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabled,
                    a = e.onConfirm,
                    r = e.url,
                    o = r.size_b,
                    i = r.url,
                    c = B({ size: n.getSizeLabel(o) }),
                    l = t ? T : L
                  return b.a.createElement(
                    I.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? b.a.createElement(
                          I.a,
                          null,
                          b.a.createElement(
                            x.a,
                            {
                              disabled: t,
                              onPress: this._handleNeedsConfirmationActionCellPress,
                              size: 'small',
                              style: S.a.narrowButton,
                              type: 'brandFilled',
                            },
                            l,
                          ),
                          this.state.showConfirmation && !t
                            ? b.a.createElement(O.a, {
                                cancelButtonLabel: D,
                                confirmButtonLabel: F,
                                confirmButtonLink: { pathname: i || '', external: !0 },
                                headline: P,
                                onCancel: this._handleCancel,
                                onConfirm: this._handleConfirm,
                                text: c,
                              })
                            : null,
                        )
                      : b.a.createElement(
                          x.a,
                          {
                            disabled: t,
                            link: i ? { pathname: i, external: !0 } : void 0,
                            onPress: a,
                            size: 'small',
                            style: S.a.narrowButton,
                            type: 'brandFilled',
                          },
                          l,
                        ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(N, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? R({ size: A.a.getFormattedCount(t) })
          : M({ size: A.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var H = n('7FtF'),
        j = n('ClNT'),
        z = n('t62R'),
        V = n('rHpw'),
        W = n('v6aA'),
        U = C.a.f56af9cc,
        K = C.a.b2ed92c3,
        G = C.a.ce5d2c46,
        Y = C.a.dd9ec81f,
        q = C.a.c7227886,
        X = C.a.a0c3f812,
        Q = C.a.ba2e82a1,
        Z = C.a.eea30bb4,
        J = C.a.f2cde471,
        $ = C.a.b7ce9dbe,
        ee = C.a.fbc92b61,
        te = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_render', function () {
                var t = e.props.downloads.nonFailed
                return t.length ? b.a.createElement(I.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              h()(l()(e), '_renderDownloadItems', function (t, n) {
                return b.a.createElement(
                  I.a,
                  { key: n },
                  t.urls && 'COMPLETED' === t.status
                    ? t.urls.map(e._renderDownloadButtons.bind(l()(e), t))
                    : e._renderUnavailableButton(t),
                )
              }),
              h()(l()(e), '_handleConfirm', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.createLocalApiErrorHandler,
                    o = n.fetchDownloads
                  !t.downloaded_at && t.url && e.props.markDataAsDownloaded({ url: t.url }).then(o).catch(r()),
                    a.scribe({ element: 'download_button', action: 'click' })
                }
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.googleAnalyticsPageView
                  t.scribePageImpression(), n(t.contextualScribeNamespace)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchDownloads,
                    n = e.fetchStatus,
                    a = e.location
                  return b.a.createElement(
                    H.a,
                    { location: a, title: U },
                    b.a.createElement(j.a, { fetch: t, fetchStatus: n, renderChildren: this._render }),
                  )
                },
              },
              {
                key: '_renderEmptyState',
                value: function () {
                  return b.a.createElement(
                    I.a,
                    { style: ne.emptyState },
                    b.a.createElement(z.b, { size: 'title4' }, Y),
                    b.a.createElement(z.b, { color: 'gray700', style: ne.emptyStateDescription }, X),
                    b.a.createElement(
                      x.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: S.a.narrowButton,
                        type: 'brandFilled',
                      },
                      q,
                    ),
                  )
                },
              },
              {
                key: '_renderDownloadButtons',
                value: function (e, t, n, a) {
                  var r = n + 1,
                    o = a.length,
                    i = !(null == t || !t.url)
                  return b.a.createElement(
                    I.a,
                    { key: ''.concat(r), style: [S.a.narrowButtonRow, S.a.bottomBorder, S.a.labelContainer] },
                    b.a.createElement(
                      I.a,
                      null,
                      b.a.createElement(z.b, { weight: 'bold' }, ee({ currentIndex: r, count: o })),
                      e.generated
                        ? b.a.createElement(z.b, { color: 'gray700' }, Z({ date: Q(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? b.a.createElement(z.b, { color: 'gray700' }, J({ date: Q(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? b.a.createElement(z.b, { color: 'gray700' }, $({ size: N.getSizeLabel(t.size_b) }))
                        : null,
                    ),
                    b.a.createElement(N, { disabled: !i, onConfirm: this._handleConfirm(t), url: t }),
                  )
                },
              },
              {
                key: '_renderUnavailableButton',
                value: function (e) {
                  return b.a.createElement(
                    I.a,
                    { style: [S.a.narrowButtonRow, S.a.bottomBorder, S.a.labelContainer] },
                    b.a.createElement(z.b, { weight: 'bold' }, ee({ currentIndex: 1, count: 1 })),
                    b.a.createElement(
                      x.a,
                      { disabled: !0, size: 'small', style: S.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? K : G,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(te, 'contextType', W.a)
      var ne = V.a.create(function (e) {
        return {
          emptyState: {
            display: 'flex',
            paddingHorizontal: e.spaces.space20,
            paddingVertical: e.spaces.space40,
            alignItems: 'center',
          },
          emptyStateDescription: { paddingVertical: e.spaces.space20 },
        }
      })
      t.default = w(te)
    },
    'Q++C': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DataUsageScreen', function () {
          return V
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        g = n('ERkP'),
        y = n.n(g),
        E = n('FPOR'),
        v = n('P1r1'),
        w = n('rxPX'),
        S = n('0KEI'),
        _ = n('H9MA'),
        C = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: _.c, videoAutoplay: _.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: _.b,
              updateDataSaverMode: _.g,
              updateSettings: v.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        k = n('45mF'),
        I = n('6v1f'),
        x = n('3XMw'),
        O = n.n(x),
        A = n('yoO3'),
        D = n('7FtF'),
        F = n('3cwy'),
        L = 'dataSaverBooleanItem',
        T = n('v6aA'),
        P = n('xHsv'),
        B = n('cCdp'),
        R = n('csss'),
        M = O.a.eafe3287,
        N = O.a.d76fe4fc,
        H = O.a.a57a341b,
        j = O.a.d88102cf,
        z = O.a.a776eed7,
        V = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              b()(u()(o), '_handleDataSaverChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  i = n.createLocalApiErrorHandler,
                  c = n.updateDataSaverMode
                a.scribe({ element: e, action: t ? 'on' : 'off' }),
                  c({ enabled: t }).catch(i(r()(r()({}, Object(k.a)()), {}, { showToast: !0 })))
              }),
              (o._showVideoAutoplaySetting = Object(F.a)()),
              o
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(0, this.props.fetchDataUsageSettingsIfNeeded)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.dataSaverMode,
                    n = e.location,
                    a = e.videoAutoplay
                  return y.a.createElement(
                    A.a,
                    null,
                    y.a.createElement(
                      D.a,
                      { location: n, screenType: 'secondaryDetail', title: M },
                      y.a.createElement(P.a, { description: N }),
                      y.a.createElement(B.a, {
                        checked: t,
                        helpText: j,
                        label: H,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: L,
                      }),
                      this._showVideoAutoplaySetting &&
                        y.a.createElement(R.a, {
                          description: E.a[a || I.a],
                          disabled: t,
                          label: z,
                          link: '/settings/autoplay',
                        }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(V, 'contextType', T.a)
      t.default = C(V)
    },
    REKA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccessibilityScreen', function () {
          return te
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('ERkP')),
        b = n.n(m),
        g = n('ye3X'),
        y = n('FPOR'),
        E = n('6/RC'),
        v = n('rxPX'),
        w = n('0KEI'),
        S = n('P1r1'),
        _ = n('H9MA'),
        C = Object(v.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: S.h,
              autoPollNewTweets: S.i,
              dataSaverMode: _.c,
              reducedMotionEnabled: S.x,
              videoAutoplay: _.f,
              highContrastEnabled: S.q,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              updateSettings: S.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        k = n('6v1f'),
        I = n('3XMw'),
        x = n.n(I),
        O = n('yoO3'),
        A = n('7FtF'),
        D = n('3cwy'),
        F = 'accessibilityScreen',
        L = n('MWbm'),
        T = n('38/B'),
        P = n('rHpw'),
        B = n('xHsv'),
        R = n('6vad'),
        M = n('cCdp'),
        N = n('0yYu'),
        H = n('csss'),
        j = n('v6aA'),
        z = x.a.e3719c15,
        V = x.a.a5208fad,
        W = x.a.d5b646bd,
        U = x.a.jfe6a3a0,
        K = x.a.add55c97,
        G = x.a.a6d5b010,
        Y = x.a.e8c72272,
        q = x.a.dba2cdd1,
        X = x.a.d070244e,
        Q = x.a.icfa5e8b,
        Z = x.a.ae41b002,
        J = x.a.e82b294e,
        $ = x.a.ea284ab8,
        ee = x.a.a776eed7,
        te = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              h()(
                l()(o),
                '_showAltTextNudgeSetting',
                o.context.featureSwitches.allTrue([
                  'responsive_web_alt_text_nudges_enabled',
                  'responsive_web_alt_text_nudges_settings_enabled',
                ]),
              ),
              h()(
                l()(o),
                '_showAutoPollingSetting',
                o.context.featureSwitches.isTrue('responsive_web_settings_timeline_polling_enabled'),
              ),
              h()(l()(o), '_handleReducedMotionChanged', function (e, t) {
                o._handleSettingChanged(e, t), T.a.setReducedMotion(t)
              }),
              h()(l()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), P.a.setHighContrast(t)
              }),
              h()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateSettings,
                  c = t ? g.a.prompt : null
                a.scribe({ element: ''.concat(e, '_').concat(c || 'off'), action: 'selected' }),
                  i(h()({}, e, c)).catch(r({ showToast: !0 }))
              }),
              h()(l()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateSettings
                a.scribe({ element: e, action: t ? 'on' : 'off' }), i(h()({}, e, t)).catch(r({ showToast: !0 }))
              }),
              (o._showVideoAutoplaySetting = Object(D.a)()),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.altTextNudgeType,
                    n = e.dataSaverMode,
                    a = e.highContrastEnabled,
                    r = e.location,
                    o = e.reducedMotionEnabled,
                    i = e.videoAutoplay,
                    c = E.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return b.a.createElement(
                    O.a,
                    null,
                    b.a.createElement(
                      A.a,
                      { location: r, screenType: 'secondaryDetail', title: z },
                      b.a.createElement(
                        L.a,
                        { testID: F },
                        b.a.createElement(B.a, { description: V }),
                        b.a.createElement(R.b, { text: W }),
                        b.a.createElement(M.a, {
                          checked: a,
                          helpText: q,
                          label: Y,
                          name: 'highContrastEnabled',
                          onChange: this._handleHighContrastChanged,
                        }),
                      ),
                      this._showVideoAutoplaySetting
                        ? b.a.createElement(
                            L.a,
                            null,
                            b.a.createElement(N.a, null),
                            b.a.createElement(R.b, { text: U }),
                            b.a.createElement(M.a, {
                              checked: o || c,
                              disabled: c,
                              helpText: c ? Z : Q,
                              label: X,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            b.a.createElement(H.a, {
                              description: y.a[i || k.a],
                              disabled: n,
                              label: ee,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextNudgeSetting
                        ? b.a.createElement(
                            L.a,
                            null,
                            b.a.createElement(N.a, null),
                            b.a.createElement(R.b, { text: K }),
                            b.a.createElement(M.a, {
                              checked: t === g.a.prompt,
                              helpText: $,
                              label: J,
                              name: 'altTextNudgeType',
                              onChange: this._handleAltTextNudgeTypeChanged,
                            }),
                          )
                        : null,
                      this._maybeRenderTimelineSettings(),
                    ),
                  )
                },
              },
              {
                key: '_maybeRenderTimelineSettings',
                value: function () {
                  var e = this.props.autoPollNewTweets
                  return this._showAutoPollingSetting
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(N.a, null),
                        b.a.createElement(R.b, { text: G }),
                        b.a.createElement(M.a, {
                          checked: e,
                          helpText: 'TBD Copy',
                          label: '[TBD Copy] Poll for new Tweets',
                          name: 'autoPollNewTweets',
                          onChange: this._handleSettingChanged,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(te, 'contextType', j.a)
      t.default = C(te)
    },
    XYIJ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('rHpw'),
        i = function (e) {
          return { borderBottomColor: e.colors.borderColor, borderBottomStyle: 'solid', borderBottomWidth: '1px' }
        },
        c = o.a.create(function (e) {
          return {
            labelContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            titleCase: { textTransform: 'capitalize' },
            floatingLink: { paddingLeft: e.spaces.space20 },
            infoItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            locationInfo: { alignItems: 'center', flexDirection: 'row', width: '100%' },
            locationIcon: { marginRight: e.spaces.space12 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space20 },
            noLeftPadding: { paddingLeft: 0 },
            narrowButtonRow: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: r()({}, i(e)),
            narrowButton: { alignSelf: 'center', marginLeft: e.spaces.space12, paddingLeft: e.spaces.space20 },
            helpTextExtraPadded: { paddingTop: e.spaces.space12 },
            featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 },
            featureDisabledTitle: { paddingBottom: e.spaces.space4 },
          }
        })
      t.a = c
    },
    Y3cQ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('fyvP'),
        i = n('rHpw'),
        c = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(c.a, { style: l.root }, r.a.createElement(o.a, e))
      }
      var l = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    Zjav: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsPage', function () {
          return Xe
        })
      var a = n('K1iM'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        h = n.n(f),
        m = n('2VqO'),
        b = n.n(m),
        g = n('KEM+'),
        y = n.n(g),
        E = (n('tVqn'), n('jwue'), n('7x/C'), n('+oxZ'), n('hBpG'), n('ERkP')),
        v = n.n(E),
        w = n('mrHL'),
        S = (n('+KXO'), n('NeAX')),
        _ = n('RqPI'),
        C = n('hqKg'),
        k = n('kGix'),
        I = n('O0uF'),
        x = n('G6rE'),
        O = n('rxPX'),
        A = n('0KEI'),
        D = Object(C.createSelector)(_.m, S.selectPreferencesFetchStatus, function (e, t) {
          return e ? k.a.LOADED : t
        }),
        F = Object(O.a)()
          .propsFromState(function () {
            return {
              fetchStatus: D,
              loggedInUser: x.e.selectLoggedInUser,
              personalizationPreferences: S.selectUserPreferences,
              featureSwitches: I.f,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches,
              n = e.fetchStatus,
              a = e.loggedInUser,
              r = e.personalizationPreferences
            return {
              withEditableFSes: Object.keys(t.debug).length > 0,
              fetchStatus: n,
              loggedInUser: a,
              personalizationPreferences: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: S.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        L = n('VY6S'),
        T = n('v//M'),
        P = n('uD2z'),
        B = n('3XMw'),
        R = n.n(B),
        M = n('KQzH'),
        N = n('yoO3'),
        H = n('cnVF'),
        j = n('7FtF'),
        z = n('iCwC'),
        V = n('3cwy'),
        W = n('Es6L'),
        U = 'loggedOutPrivacySection',
        K = 'accountLink',
        G = 'accountAccessLink',
        Y = 'privacyAndSafetyLink',
        q = 'notificationsLink',
        X = 'accessibilityLink',
        Q = 'aboutLink',
        Z = 'displayLink',
        J = 'dataLink',
        $ = n('ddV6'),
        ee = n.n($),
        te = (n('uFXj'), n('3EFP')),
        ne = n('woHV'),
        ae = n('tAeL'),
        re = n('MWbm'),
        oe = n('pf9B'),
        ie = n('xoZN'),
        ce = n('/yvb'),
        le = n('6OUF'),
        se = n('rHpw'),
        ue = n('oEoC'),
        de = n('95Se'),
        pe = n('VwDm'),
        fe = R.a.f065ba8c,
        he = R.a.b08821f3,
        me = se.a.create(function (e) {
          return {
            root: { flex: 1, flexDirection: 'column', position: 'relative' },
            typeaheadContainer: { flex: 1, position: 'relative' },
            keydownInputListener: { flexShrink: 1 },
            dropdown: {
              backgroundColor: e.colors.cellBackground,
              left: 0,
              right: 0,
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              position: 'absolute',
              top: 0,
              WebkitOverflowScrolling: 'touch',
            },
            modalDropdown: {
              backgroundColor: e.colors.cellBackground,
              flex: 1,
              minHeight: 300,
              position: 'relative',
              overflowY: 'auto',
              overscrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch',
            },
            wideModeDropdown: {
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.medium,
              minHeight: 100,
              maxHeight: 'calc(80vh - '.concat(e.componentDimensions.appBarHeight, ')'),
            },
            wrapper: { alignItems: 'stretch', flex: 1 },
            topBorder: {
              borderTopColor: e.colors.gray200,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
            inputContainer: { flexDirection: 'row', alignItems: 'center' },
            backButton: { marginRight: e.spaces.space4 },
          }
        }),
        be = function (e) {
          var t = e.alwaysOpen,
            n = e.disableClearButton,
            a = void 0 !== n && n,
            r = e.dropdownPosition,
            o = void 0 === r ? 'overlap' : r,
            i = e.inputStyle,
            c = e.isCompact,
            l = e.isModal,
            s = e.items,
            u = e.onBackClicked,
            d = e.onDismiss,
            p = e.onFocus,
            f = e.onItemClick,
            h = e.onQueryChange,
            m = e.onSubmit,
            b = e.placeholder,
            g = e.renderEmptyState,
            y = e.renderInSearchField,
            E = e.rounded,
            w = e.shouldAutoFocus,
            S = e.shouldClearOnSelect,
            _ = e.shouldFocusOnClear,
            C = e.shouldRenderEmptyState,
            k = e.source,
            I = e.style,
            x = e.testID,
            O = v.a.useRef(null),
            A = v.a.useRef(null),
            D = v.a.useRef(null),
            F = v.a.useRef(null),
            L = v.a.useState(!1),
            T = ee()(L, 2),
            P = T[0],
            B = T[1],
            R = v.a.useState(null),
            M = ee()(R, 2),
            N = M[0],
            H = M[1],
            j = v.a.useState(Object(ue.b)()),
            z = ee()(j, 2),
            V = z[0],
            W = z[1],
            U = v.a.useState(function () {
              return Object(ue.f)()
            }),
            K = ee()(U, 1)[0],
            G = v.a.useState(''),
            Y = ee()(G, 2),
            q = Y[0],
            X = Y[1],
            Q = function (e) {
              var t,
                n = oe.a.getCount() > 0
              ;(null != O && null !== (t = O.current) && void 0 !== t && t.contains(e.target)) || n || (P && $())
            }
          v.a.useEffect(function () {
            return (
              window.document.addEventListener('click', Q, !0),
              function () {
                window.document.removeEventListener('click', Q, !0)
              }
            )
          })
          var Z = function () {
              if (null != A && A.current) {
                var e = A.current.getBoundingClientRect().bottom
                e !== N && H(e)
              }
            },
            J = function (e) {
              X(e), null == h || h(e)
            },
            $ = function () {
              B(!1), null == d || d()
            },
            se = function () {
              var e
              $(), null == D || null === (e = D.current) || void 0 === e || e.blur()
            },
            be = function (e, t) {
              var n,
                a,
                r = S ? '' : q
              ;(B(!1), D.current) &&
                (S && _
                  ? D.current.focus()
                  : (S && (null === (n = D.current.textInput) || void 0 === n || n.clear()),
                    null === (a = D.current) || void 0 === a || a.blur()))
              J(r), null == d || d(), null == f || f(e, t)
            },
            ge = function () {
              W(Object(ue.b)())
            },
            ye = P || t
          return v.a.createElement(
            re.a,
            { onLayout: Z, ref: O, style: [me.root, I] },
            v.a.createElement(
              ie.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(ue.g)(e)) {
                    var a, r
                    if (n === te.a)
                      return null === (a = F.current) || void 0 === a || a.focusNext(), void e.preventDefault()
                    if (n === te.b)
                      return null === (r = F.current) || void 0 === r || r.focusPrevious(), void e.preventDefault()
                    if (n === te.d) return $(), void e.preventDefault()
                    if (n !== te.f) {
                      var o
                      if (n === te.c && null !== (t = F.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = F.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      P || B(!0)
                    } else $()
                  }
                },
                style: me.keydownInputListener,
              },
              v.a.createElement(
                ne.a,
                {
                  accessibilityLabel: b,
                  accessibilityRole: 'search',
                  onSubmit: function (e) {
                    var t
                    e.preventDefault(),
                      e.stopPropagation(),
                      null == D || null === (t = D.current) || void 0 === t || t.blur(),
                      B(!1),
                      null == d || d(),
                      null == m || m()
                  },
                  style: me.wrapper,
                },
                v.a.createElement(
                  re.a,
                  { ref: A, style: [me.inputContainer, i] },
                  ye && u
                    ? v.a.createElement(ce.a, {
                        accessibilityLabel: he,
                        icon: v.a.createElement(de.a, null),
                        onClick: function () {
                          $(), null == u || u()
                        },
                        style: me.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  v.a.createElement(le.a, {
                    Icon: pe.a,
                    ariaActiveDescendant: V,
                    ariaAutocomplete: 'list',
                    ariaExpanded: ye,
                    ariaLabel: fe,
                    ariaOwns: K,
                    ariaRole: 'combobox',
                    autoComplete: 'off',
                    autoCorrect: !1,
                    autoFocus: w,
                    contentBelow: null == y ? void 0 : y(),
                    focusOnClear: _,
                    isCompact: c,
                    onChange: function (e) {
                      J(e.target.value), Z()
                    },
                    onClear: function () {
                      J('')
                    },
                    onFocus: function () {
                      B(!0), Z(), null == p || p()
                    },
                    onLayout: Z,
                    placeholder: b,
                    ref: D,
                    returnKeyType: 'search',
                    spellCheck: 'false',
                    styleType: E ? 'pill' : 'selection',
                    testID: x,
                    value: q,
                    withClearButton: !a && P,
                  }),
                ),
                v.a.createElement(
                  re.a,
                  { style: [me.typeaheadContainer, !E && me.topBorder] },
                  ye
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [me.dropdown, N ? Object(ue.d)(N) : me.wideModeDropdown])
                            : 'overlap' === o && (e = l ? me.modalDropdown : [me.dropdown, me.wideModeDropdown]),
                          g && C
                            ? g({
                                ariaDescendantId: V,
                                domId: K,
                                onDismiss: se,
                                onItemFocusChanged: ge,
                                ref: F,
                                style: e,
                              })
                            : v.a.createElement(ae.a, {
                                ariaDescendantId: V,
                                domId: K,
                                items: s,
                                onItemClick: be,
                                onItemFocusChanged: ge,
                                ref: F,
                                source: k,
                                style: e,
                              })
                        )
                      })()
                    : null,
                ),
              ),
            ),
          )
        },
        ge = n('GZwR'),
        ye = n('6vad'),
        Ee = n('t62R'),
        ve = n('FIs5'),
        we = n('0yYu'),
        Se = n('v6aA'),
        _e = n('AS3p'),
        Ce = n('Grlw'),
        ke = R.a.e3719c15,
        Ie = R.a.cad53943,
        xe = R.a.bb081ea1,
        Oe = R.a.e95b9448,
        Ae = R.a.eb75875d,
        De = R.a.c4881c66,
        Fe = R.a.eafe3287,
        Le = R.a.f458a3b1,
        Te = R.a.e8f57e07,
        Pe = R.a.b7fde2b8,
        Be = R.a.ja94f34d,
        Re = R.a.d0b74a5a,
        Me = R.a.gd4302ec,
        Ne = R.a.bdc6f5b7,
        He = R.a.f8645654,
        je = R.a.cf9b1669,
        ze = R.a.bdfa2b8c,
        Ve = R.a.df483b47,
        We = R.a.d299431b,
        Ue = R.a.ed21f885,
        Ke = R.a.e435cdff,
        Ge = R.a.b92a21d8,
        Ye = R.a.c170a564,
        qe = R.a.ba8f6f81,
        Xe = (function (e) {
          h()(n, e)
          var t = b()(n)
          function n(e, a) {
            var o
            return (
              l()(this, n),
              (o = t.call(this, e, a)),
              y()(p()(o), '_renderLoggedIn', function () {
                var e = o.state.isSearching
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  o._renderSearchInput(),
                  e
                    ? null
                    : v.a.createElement(
                        re.a,
                        { accessibilityRole: 'tablist' },
                        v.a.createElement(M.a, { label: Ne, link: '/settings/account', testID: K }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        v.a.createElement(M.a, { label: He, link: '/settings/security_and_account_access', testID: G }),
                        v.a.createElement(M.a, { label: Ie, link: '/settings/privacy_and_safety', testID: Y }),
                        v.a.createElement(M.a, { label: Ae, link: '/settings/notifications', testID: q }),
                        v.a.createElement(M.a, {
                          label: je,
                          link: '/settings/accessibility_display_and_languages',
                          testID: X,
                        }),
                        v.a.createElement(M.a, { label: ze, link: '/settings/about', testID: Q }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              y()(p()(o), '_renderLoggedOut', function () {
                var e = Object(w.b)(H.u, o.context.featureSwitches)
                return v.a.createElement(
                  re.a,
                  { testID: U },
                  v.a.createElement(ye.b, { text: Le }),
                  v.a.createElement(M.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Te,
                    link: '/settings/account/personalization',
                  }),
                  v.a.createElement(M.a, { label: Pe, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? v.a.createElement(M.a, { description: Me, label: Re, link: '/settings/cookie_preferences' })
                    : null,
                  v.a.createElement(Ee.b, { style: z.a.descriptionText }, Be),
                  o._renderGeneral(),
                )
              }),
              y()(p()(o), '_renderSearchInput', function () {
                if (!o.context.featureSwitches.isTrue('settings_revamp_search_bar_enabled')) return null
                var e = o.props.searchIndex,
                  t = [],
                  n = o.state,
                  a = n.isSearching,
                  c = n.searchQuery,
                  l = c.toLocaleLowerCase().trim(),
                  s = !!l.length,
                  u = function (e, n) {
                    var a = {
                      id: e.id,
                      type: 'setting',
                      data: { text: e.title, location: { pathname: e.path, openInSameFrame: !0 } },
                    }
                    'setting' === n
                      ? t.push(i()(i()({}, a), {}, { type: 'setting' }))
                      : 'setting_group' === n && t.push(i()(i()({}, a), {}, { type: 'setting_group' }))
                  }
                if (s) {
                  var d,
                    p = r()(e)
                  try {
                    var f = function () {
                      var e = d.value,
                        t = !1
                      Array.isArray(e.items) &&
                        e.items.forEach(function (n) {
                          Object(Ce.b)(l, n) && (t || ((t = !0), u(e, 'setting_group')), u(n, 'setting'))
                        }),
                        !t && Object(Ce.b)(l, e) && u(e, 'setting_group')
                    }
                    for (p.s(); !(d = p.n()).done; ) f()
                  } catch (h) {
                    p.e(h)
                  } finally {
                    p.f()
                  }
                }
                return v.a.createElement(be, {
                  alwaysOpen: a,
                  dropdownPosition: 'inline',
                  inputStyle: Qe.input,
                  items: t,
                  onBackClicked: Object(W.a)() ? o._handleSearchInputBackClicked : void 0,
                  onFocus: o._handleSearchInputFocus,
                  onItemClick: o._handleSearchItemClicked,
                  onQueryChange: o._handleSearchQueryChanged,
                  placeholder: qe,
                  renderEmptyState: function (e) {
                    var t = e.style
                    return s
                      ? v.a.createElement(ve.a, { header: Ge({ query: c }), message: Ye, style: t })
                      : v.a.createElement(
                          re.a,
                          { style: [t, Qe.searchEmptyState] },
                          v.a.createElement(Ee.b, { align: 'center', color: 'gray700' }, Ke),
                        )
                  },
                  rounded: !0,
                  shouldRenderEmptyState: !s || 0 === t.length,
                  source: ge.d.SearchBox,
                })
              }),
              y()(p()(o), '_renderGeneral', function () {
                return v.a.createElement(
                  re.a,
                  null,
                  v.a.createElement(we.a, null),
                  v.a.createElement(ye.b, { text: Oe }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? v.a.createElement(M.a, { label: De, link: '/settings/display', testID: Z })
                    : null,
                  o._isUserLoggedIn() ? v.a.createElement(M.a, { label: Fe, link: '/settings/data', testID: J }) : null,
                  o._isUserLoggedIn()
                    ? v.a.createElement(M.a, { label: ke, link: '/settings/accessibility', testID: X })
                    : null,
                  v.a.createElement(M.a, { label: ze, link: '/settings/about', testID: Q }),
                )
              }),
              y()(p()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? v.a.createElement(M.a, { label: Ve, link: '/settings/feature_switches' })
                  : null
              }),
              y()(p()(o), '_renderMonetization', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === Ce.a.Monetization
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? v.a.createElement(M.a, { label: We, link: t }) : null
              }),
              y()(p()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === Ce.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? v.a.createElement(M.a, { label: Ue, link: t }) : null
              }),
              y()(p()(o), '_handleBackClicked', function () {
                var e = o.props.history
                o.state.isSearching ? o.setState({ isSearching: !1 }) : e.goBack()
              }),
              y()(p()(o), '_handleSearchInputBackClicked', function () {
                o.setState({ isSearching: !1 })
              }),
              y()(p()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              y()(p()(o), '_isUserLoggedIn', function () {
                return !!o.props.loggedInUser
              }),
              y()(p()(o), '_handleSearchInputFocus', function () {
                o.setState({ isSearching: !0 })
              }),
              y()(p()(o), '_handleSearchQueryChanged', function (e) {
                o.setState({ searchQuery: e })
              }),
              y()(p()(o), '_handleSearchItemClicked', function (e) {
                var t = o.props.history
                if ('setting' === e.type || 'setting_group' === e.type) {
                  var n = 'string' == typeof e.data.location ? e.data.location : e.data.location.pathname
                  t.push(n, { backLocation: window.location.pathname })
                }
              }),
              (o._showVideoAutoplaySetting = Object(V.a)()),
              (o._handleSearchQueryChanged = Object(L.a)(o._handleSearchQueryChanged, 100)),
              (o.state = { isSearching: !1, searchQuery: '' }),
              o
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._isUserLoggedIn() || this._handleFetchPreferences()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return v.a.createElement(
                    N.a,
                    null,
                    v.a.createElement(
                      j.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: xe },
                      this._isUserLoggedIn() || Object(_e.c)(this.context.featureSwitches) === _e.a.AcceptAllCookies
                        ? v.a.createElement(T.a, {
                            fetchStatus: t,
                            onRequestRetry: this._handleFetchPreferences,
                            render: this.context.loggedInUserId ? this._renderLoggedIn : this._renderLoggedOut,
                          })
                        : this._renderLoggedOut(),
                    ),
                  )
                },
              },
              {
                key: '_renderPersonalizationDescription',
                value: function () {
                  var e = this.props.personalizationPreferences
                  return Object(P.a)(e)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(Xe, 'contextType', Se.a)
      var Qe = se.a.create(function (e) {
        return {
          searchEmptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
          input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
        }
      })
      t.default = F(Xe)
    },
    ctla: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        o = n('3XMw'),
        i = n.n(o),
        c = n('yoO3'),
        l = n('csss'),
        s = n('7JQg'),
        u = n('7FtF'),
        d = n('MWbm'),
        p = i.a.hfc86556,
        f = i.a.daef29b7,
        h = i.a.i0dd9b9d,
        m = { page: 'settings', section: 'mute' }
      t.default = function (e) {
        var t = e.location
        return r.a.createElement(
          s.b,
          { namespace: m },
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              u.a,
              { location: t, title: p },
              r.a.createElement(
                d.a,
                null,
                r.a.createElement(l.a, { label: f, link: '/settings/muted/all' }),
                r.a.createElement(l.a, { label: h, link: '/settings/muted_keywords' }),
              ),
            ),
          ),
        )
      }
    },
    dALu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AppInfo', function () {
          return A
        }),
        n.d(t, 'SettingsAboutScreen', function () {
          return D
        })
      n('7x/C'), n('JtPf'), n('tQbP'), n('LW0h'), n('vrRf'), n('hBvt'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('zh9S'),
        i = n('RqPI'),
        c = n('rxPX'),
        l = Object(c.a)()
          .propsFromState(function () {
            return { viewerCountry: i.y }
          })
          .propsFromActions(function () {
            return { scribeAction: o.c }
          }),
        s = n('dzZ/'),
        u = n('3XMw'),
        d = n.n(u),
        p = n('yoO3'),
        f = n('7FtF'),
        h = n('iCwC'),
        m = 'aboutScreen',
        b = n('MWbm'),
        g = n('6vad'),
        y = n('csss'),
        E = n('xHsv'),
        v = n('0yYu'),
        w = n('t62R'),
        S = n('7JQg'),
        _ = d.a.cedbb01c,
        C = d.a.b4f917d0,
        k = d.a.bdfa2b8c,
        I = d.a.j0783ebe,
        x = d.a.c0398892,
        O = { page: 'settings', section: 'about' }
      function A(e) {
        var t = []
        return (
          t.push(r.a.createElement(g.b, { text: x })),
          t.push(
            r.a.createElement(y.a, {
              label: x,
              link: { external: !0, pathname: 'https://twitter.com/i/release_notes' },
            }),
          ),
          r.a.Children.toArray(t)
        )
      }
      function D(e) {
        var t = e.location,
          n = e.scribeAction,
          a = e.viewerCountry ? e.viewerCountry.toLowerCase() : null,
          o = s.a
            .filter(function (e) {
              return !e.excludeOnSettingsPage && (!e.country || e.country.indexOf(a) > -1)
            })
            .sort(function (e, t) {
              return e.text.localeCompare(t.text)
            }),
          i = o.filter(function (e) {
            return e.legal && e.link
          }),
          c = o.filter(function (e) {
            return !e.legal && e.link
          }),
          l = o.filter(function (e) {
            return !e.link
          })
        return r.a.createElement(
          S.b,
          { namespace: O },
          r.a.createElement(
            p.a,
            null,
            r.a.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: k },
              r.a.createElement(
                b.a,
                { testID: m },
                r.a.createElement(E.a, { description: I }),
                r.a.createElement(A, { scribeAction: n }),
                r.a.createElement(v.a, null),
                r.a.createElement(g.b, { text: _ }),
                i.map(function (e, t) {
                  return r.a.createElement(y.a, {
                    key: e.text,
                    label: e.text,
                    link: { external: !0, pathname: e.link },
                  })
                }),
                l.map(function (e) {
                  return r.a.createElement(
                    w.b,
                    { color: 'gray700', key: e.text, size: 'subtext2', style: [h.a.infoText, h.a.bottomBorder] },
                    e.text,
                  )
                }),
                r.a.createElement(v.a, null),
                r.a.createElement(g.b, { text: C }),
                c.map(function (e, t) {
                  return r.a.createElement(y.a, {
                    key: e.text,
                    label: e.text,
                    link: { external: !0, pathname: e.link },
                  })
                }),
              ),
            ),
          ),
        )
      }
      t.default = Object(S.c)(O)(l(D))
    },
    htPi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DisplayScreen', function () {
          return k
        })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('7JQg'),
        i = n('3XMw'),
        c = n.n(i),
        l = n('yoO3'),
        s = n('7FtF'),
        u = 'aboutText',
        d = n('5hXE'),
        p = n('A2ey'),
        f = n('vSJw'),
        h = n('KNZn'),
        m = n('MWbm'),
        b = n('t62R'),
        g = n('0yYu'),
        y = n('6vad'),
        E = n('rHpw'),
        v = c.a.c4881c66,
        w = c.a.a5ce82a4,
        S = c.a.ce494bb3,
        _ = c.a.c783d45e,
        C = c.a.h306a357,
        k = function (e) {
          var t = e.location
          return r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: v },
              r.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: I.aboutText, testID: u }, w),
              r.a.createElement(h.a, null),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: S }),
              r.a.createElement(d.a, null),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: _ }),
              r.a.createElement(m.a, { style: I.colorPicker }, r.a.createElement(f.a, null)),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: C }),
              r.a.createElement(m.a, { style: I.backgroundPicker }, r.a.createElement(p.a, null)),
            ),
          )
        },
        I = E.a.create(function (e) {
          return {
            aboutText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
            colorPicker: { paddingVertical: e.spaces.space4 },
          }
        })
      t.default = Object(o.c)({ page: 'settings', section: 'display' })(k)
    },
    iCwC: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
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
          bottomBorder: r()({}, i(e)),
        }
      })
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var a = n('0vv5'),
        r = 500,
        o = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return f
        }),
        n.d(t, 'a', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'f', function () {
          return g
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        l = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n,
          a = l.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? i()(i()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(l.b.WordEnd),
          o = r >= 0 ? n.slice(r) : '',
          i = a.search(l.b.WordBoundary),
          c = o + a.slice(0, i)
        return c.trim() ? { start: r, end: e + i, word: c } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function f(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function h(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(o))
      }
      var m = Object(c.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        b = 0,
        g = function () {
          return 'typeaheadDropdown-'.concat((b += 1))
        }
    },
    tAN7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PrivacyAndSafetyScreen', function () {
          return ve
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('ERkP')),
        b = n.n(m),
        g = n('NeAX'),
        y = n('P1r1'),
        E = n('hqKg'),
        v = n('uD2z'),
        w = n('li/m'),
        S = n('G6rE'),
        _ = n('0KEI'),
        C = n('oEGd'),
        k = Object(E.createSelector)(
          g.selectPreferencesFetchStatus,
          g.selectUserPreferences,
          y.g,
          w.d,
          function (e, t, n, a) {
            return { fetchStatus: e, personalizationString: Object(v.a)(t), settings: n, hasCommunityMemberships: a }
          },
        ),
        I = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
          patchUser: S.e.patchUser,
          updateSettings: y.L,
        },
        x = Object(C.g)(k, I),
        O = n('v//M'),
        A = n('3XMw'),
        D = n.n(A),
        F = n('yoO3'),
        L = n('7FtF'),
        T = 'privacyAndSafetyScreen',
        P = n('MWbm'),
        B = n('Irs7'),
        R = n('v6aA'),
        M = n('6vad'),
        N = n('cCdp'),
        H = n('csss'),
        j = n('0yYu'),
        z = n('eb3s'),
        V = D.a.cad53943,
        W = D.a.bab1f8b0,
        U = D.a.f5e59e90,
        K = D.a.i0310b4e,
        G = { headline: D.a.j8bf07ab, text: D.a.ca8034b3, confirmButtonLabel: D.a.c5d4192a },
        Y = { headline: D.a.gea6cc19, text: D.a.j7fc0afc, confirmButtonLabel: D.a.f527b322 },
        q = D.a.jabb9c9a,
        X = D.a.f56d108e,
        Q = { all: D.a.d165c992, following: D.a.ea339390, none: D.a.e3a761ee },
        Z = D.a.d4986f85,
        J = D.a.h6ce12ed,
        $ = D.a.ebcb68ae,
        ee = D.a.afdf29b8,
        te = D.a.e1929815,
        ne = D.a.d9172541,
        ae = D.a.e84e1c41,
        re = D.a.hefdc08f,
        oe = D.a.b608c1a0,
        ie = D.a.j2c3033a,
        ce = D.a.fd4d9068,
        le = D.a.fd4d9068,
        se = D.a.hfb77cf5,
        ue = D.a.fc1d217b,
        de = D.a.acdcc101,
        pe = D.a.hfc86556,
        fe = D.a.a5f32aa2,
        he = D.a.eb75875d,
        me = D.a.aea62567,
        be = D.a.e8f57e07,
        ge = D.a.e8f57e07,
        ye = D.a.b59540c2,
        Ee = { all: D.a.bd34d8f8, following: D.a.d22dad9e, none: D.a.ad41e8b3 },
        ve = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(
                l()(e),
                'showPeriscopeAuthOption',
                e.context.featureSwitches.isTrue('responsive_web_live_video_parity_periscope_auth_enabled'),
              ),
              h()(l()(e), 'state', { showProtectedConfirmation: !1 }),
              h()(l()(e), '_handleItemChanged', function (t, n) {
                e._updateSettings(h()({}, t, n))
              }),
              h()(l()(e), '_handleDMFromChanged', function (t, n) {
                e._updateSettings(h()({}, t, n ? 'all' : 'following'))
              }),
              h()(l()(e), '_handleDMQualityFilterChanged', function (t, n) {
                e._updateSettings(h()({}, t, n ? 'enabled' : 'disabled'))
              }),
              h()(l()(e), '_handleDMReceiptChanged', function (t, n) {
                e._updateSettings(h()({}, t, n ? 'all_enabled' : 'all_disabled'))
              }),
              h()(l()(e), '_handleProtectedChanged', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  o = a.patchUser
                n
                  ? e.setState({ showProtectedConfirmation: !0 })
                  : e._updateSettings(h()({}, t, !1)).then(function () {
                      r.scribe({ section: 'privacy', element: 'protected', action: 'disable' }),
                        e.context.loggedInUserId && o(e.context.loggedInUserId, h()({}, t, !1))
                    })
              }),
              h()(l()(e), '_handleProtectedCancel', function () {
                e.setState({ showProtectedConfirmation: !1 })
              }),
              h()(l()(e), '_handleProtectedConfirm', function () {
                e.setState({ showProtectedConfirmation: !1 })
                var t = e.props,
                  n = t.analytics,
                  a = t.patchUser
                e._updateSettings({ protected: !0 }).then(function () {
                  n.scribe({ section: 'privacy', element: 'protected', action: 'enable' }),
                    e.context.loggedInUserId && a(e.context.loggedInUserId, { protected: !0 })
                })
              }),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.personalizationString,
                  a = t.settings,
                  r = Q[a.allow_media_tagging],
                  o = Ee[a.allow_contributor_request]
                return b.a.createElement(
                  P.a,
                  null,
                  b.a.createElement(M.b, { text: W }),
                  b.a.createElement(N.a, {
                    checked: a.protected,
                    helpText: K,
                    label: U,
                    learnMoreLink: 'https://support.twitter.com/articles/14016',
                    name: 'protected',
                    onChange: e._handleProtectedChanged,
                  }),
                  b.a.createElement(H.a, { label: q, link: '/settings/location' }),
                  b.a.createElement(H.a, { description: r, label: X, link: '/settings/tagging' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(M.b, { text: Z }),
                  b.a.createElement(N.a, {
                    checked: 'all' === a.allow_dms_from,
                    helpText: $,
                    label: J,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receive',
                    name: 'allow_dms_from',
                    onChange: e._handleDMFromChanged,
                  }),
                  b.a.createElement(N.a, {
                    checked: 'enabled' === a.dm_quality_filter,
                    helpText: te,
                    label: ee,
                    learnMoreLink: 'https://support.twitter.com/articles/14606',
                    name: 'dm_quality_filter',
                    onChange: e._handleDMQualityFilterChanged,
                  }),
                  b.a.createElement(N.a, {
                    checked: 'all_enabled' === a.dm_receipt_setting,
                    helpText: ae,
                    label: ne,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receipts',
                    name: 'dm_receipt_setting',
                    onChange: e._handleDMReceiptChanged,
                  }),
                  e.showPeriscopeAuthOption &&
                    b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement(j.a, null),
                      b.a.createElement(M.b, { text: re }),
                      b.a.createElement(N.a, {
                        checked: a.allow_authenticated_periscope_requests,
                        helpText: ie,
                        label: oe,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  b.a.createElement(j.a, null),
                  b.a.createElement(M.b, { text: ce }),
                  b.a.createElement(H.a, { label: le, link: '/settings/contacts' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(M.b, { text: se }),
                  b.a.createElement(N.a, {
                    checked: a.display_sensitive_media,
                    label: ue,
                    name: 'display_sensitive_media',
                    onChange: e._handleItemChanged,
                  }),
                  b.a.createElement(N.a, {
                    checked: a.nsfw_user,
                    disabled: a.nsfw_admin,
                    label: de,
                    name: 'nsfw_user',
                    onChange: e._handleItemChanged,
                  }),
                  b.a.createElement(H.a, { label: pe, link: '/settings/mute' }),
                  b.a.createElement(H.a, { label: fe, link: '/settings/blocked/all' }),
                  b.a.createElement(H.a, { label: he, link: '/settings/notifications' }),
                  b.a.createElement(H.a, { label: me, link: '/settings/search' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(M.b, { text: ge }),
                  b.a.createElement(H.a, { description: n, label: be, link: '/settings/account/personalization' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(M.b, { key: 'header', text: ye }),
                  b.a.createElement(H.a, { description: o, key: 'pivot', label: ye, link: '/settings/teams' }),
                )
              }),
              h()(l()(e), '_handleFetchPreferences', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchPreferencesIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchPreferences()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.hasCommunityMemberships,
                    a = e.location,
                    r = n ? Y : G
                  return b.a.createElement(
                    P.a,
                    { testID: T },
                    b.a.createElement(
                      L.a,
                      { location: a, screenType: 'primaryDetail', title: V },
                      b.a.createElement(
                        F.a,
                        null,
                        b.a.createElement(O.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                        this.state.showProtectedConfirmation
                          ? b.a.createElement(z.a, {
                              confirmButtonLabel: r.confirmButtonLabel,
                              confirmButtonType: 'primary',
                              headline: r.headline,
                              onCancel: this._handleProtectedCancel,
                              onConfirm: this._handleProtectedConfirm,
                              text: r.text,
                            })
                          : null,
                      ),
                    ),
                  )
                },
              },
              {
                key: '_updateSettings',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler
                  return (0, t.updateSettings)(e).catch(n({ showToast: !0 }))
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(ve, 'contextType', R.a)
      t.default = Object(B.a)(x(ve), { page: 'settings', section: 'safety' })
    },
    uD2z: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
      }),
        n.d(t, 'a', function () {
          return s
        })
      n('KOtZ'), n('7x/C'), n('+KXO')
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.dae57a41,
        i = r.a.i7cbc154,
        c = r.a.e3a761ee,
        l = function (e) {
          switch (
            (function (e) {
              return Object.keys(e).reduce(function (t, n) {
                return e[n] ? t + 1 : t
              }, 0)
            })(e)
          ) {
            case Object.keys(e).length:
              return 'all'
            case 0:
              return 'none'
            default:
              return 'some'
          }
        },
        s = function (e) {
          return { some: i, none: c, all: o }[l(e)]
        }
    },
    ye3X: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({ inline: 'inline', prompt: 'prompt', require: 'require' })
    },
  },
])
//# sourceMappingURL=WIPED
