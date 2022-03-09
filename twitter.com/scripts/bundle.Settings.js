;(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    '3JAx': function (e, t, n) {
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
    '5hXE': function (e, t, n) {
      'use strict'
      var a,
        r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        u = n('5Yy7'),
        d = n.n(u),
        p = n('2VqO'),
        f = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        b = (n('+KXO'), n('uFXj'), n('2G9S'), n('vrRf'), n('ERkP')),
        g = n.n(b),
        y = n('P1r1'),
        v = n('RqPI'),
        E = n('rxPX'),
        w = Object(E.a)()
          .propsFromState(function () {
            return { language: v.o, scale: y.y }
          })
          .propsFromActions(function () {
            return { updateSettings: y.M }
          })
          .withAnalytics(),
        C = n('3XMw'),
        _ = n.n(C),
        S = n('huBF'),
        k = n('MWbm'),
        x = n('lzTJ'),
        I = n('rHpw'),
        O = n('t62R'),
        A = n('9RkS'),
        P = x.f.ThemeScaleNames,
        D = Object.keys(P),
        F = D.length - 1,
        L = _.a.d8680056,
        T = _.a.eed02405,
        R = _.a.j59f0b93,
        B = _.a.b81aaad8,
        M = _.a.c704488f,
        N =
          ((a = {}),
          m()(a, P.xSmall, L),
          m()(a, P.small, T),
          m()(a, P.normal, R),
          m()(a, P.large, B),
          m()(a, P.xLarge, M),
          a),
        H = [L, T, R, B, M],
        j = _.a.e46dffa0,
        z = (function (e) {
          d()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              m()(s()(e), '_handleSliderChanged', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.updateSettings,
                  o = D[t]
                a.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  I.a.setScale(P[o])
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
                  return g.a.createElement(S.a, { themeItem: 'textSize' }, function (t) {
                    return g.a.createElement(
                      k.a,
                      { style: V.sliderContainer },
                      g.a.createElement(O.b, { size: 'subtext2' }, 'Aa'),
                      g.a.createElement(
                        k.a,
                        { style: V.slider },
                        g.a.createElement(A.a, {
                          accessibilityLabel: j,
                          accessibilityLabelValueText: N[I.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: H,
                          max: F,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: D.indexOf(I.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      g.a.createElement(O.b, { size: 'headline1' }, 'Aa'),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        V = I.a.create(function (e) {
          return {
            sliderContainer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space16 },
            slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 },
          }
        }),
        W = w(z)
      t.a = W
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
        v = n('rxPX'),
        E = n('0KEI'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: g.n, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: g.f,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        C = n('v//M'),
        _ = n('3XMw'),
        S = n.n(_),
        k = n('M2mT'),
        x = 'settingsDetailSave',
        I = n('mw9i'),
        O = n('0yYu'),
        A = n('/yvb'),
        P = n('rHpw'),
        D = S.a.i2209530,
        F = (function (e) {
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
                return b.a.createElement(C.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
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
                  I.a,
                  { style: [L.contentRoot, c && L.withMarginBottom] },
                  n,
                  a
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(O.a, null),
                        b.a.createElement(
                          I.a,
                          { style: L.buttonContainer },
                          b.a.createElement(A.a, { disabled: r, onPress: a, style: L.button, testID: x, type: i }, o),
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
      h()(F, 'defaultProps', { submitLabel: D, submitType: 'brandFilled', withMarginBottom: !0 })
      var L = P.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(P.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = w(F)
    },
    A2ey: function (e, t, n) {
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
        m = (n('2G9S'), n('ezhf')),
        b = n('ERkP'),
        g = n.n(b),
        y = n('HPNB'),
        v = n('v6aA'),
        E = n('P1r1'),
        w = n('rxPX'),
        C = Object(w.a)()
          .propsFromActions(function () {
            return { updateSettings: E.M }
          })
          .withAnalytics(),
        _ = n('3XMw'),
        S = n.n(_),
        k = n('huBF'),
        x = n('lzTJ'),
        I = n('rHpw'),
        O = n('cHvH'),
        A = n('fBvp'),
        P = x.f.ThemePaletteNames,
        D = S.a.ce8a8115,
        F = [
          { label: S.a.j59f0b93, accessibilityLabel: S.a.d3d48f39, backgroundName: P.light },
          { label: S.a.i76f67ed, backgroundName: P.dark },
          { label: S.a.c8f85960, backgroundName: P.darker },
        ],
        L = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleBackgroundChange', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.updateSettings
                a.scribe({ component: 'background_picker', element: 'option', action: t })
                var o = P[t]
                I.a.setPalette(o), r({ themeBackground: o }), m.c(t, e.context.featureSwitches)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return g.a.createElement(O.a, null, function (t) {
                    var n = t.windowWidth
                    return g.a.createElement(k.a, { themeItem: 'background' }, function (t) {
                      return g.a.createElement(A.a, {
                        accessibilityLabel: D,
                        autoFocus: t,
                        layout: y.a.shouldRenderAsModal(n) ? 'row' : 'column',
                        onChange: e._handleBackgroundChange,
                        options: F,
                        value: I.a.theme.paletteName,
                      })
                    })
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(L, 'contextType', v.a)
      var T = C(L)
      t.a = T
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
        v = n('FPOR'),
        E = n('zh9S'),
        w = n('hqKg'),
        C = n('0KEI'),
        _ = n('oEGd'),
        S = n('H9MA'),
        k = Object(w.createSelector)(S.f, S.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        x = {
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateVideoAutoplay: S.i,
        },
        I = Object(_.f)(k, x),
        O = n('45mF'),
        A = n('3XMw'),
        P = n.n(A),
        D = n('7FtF'),
        F = n('3cwy'),
        L = n('MWbm'),
        T = n('3JAx'),
        R = n('t62R'),
        B = n('6v1f'),
        M = P.a.a776eed7,
        N = P.a.ede134f2,
        H = P.a.i859a9d3,
        j = { page: 'settings', section: 'autoplay' },
        z = function (e) {
          return { value: e, label: v.a[e] }
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
                  c(B.b[t]).catch(a(r()(r()({}, Object(O.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(z(B.b.Always)),
              B.c && o._options.push(z(B.b.WiFiOnly)),
              o._options.push(z(B.b.Off)),
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
                    (!t && Object(F.a)()) || this.props.history.replace('/settings/data')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.videoAutoplay
                  return y.a.createElement(
                    D.a,
                    { location: t, title: M },
                    y.a.createElement(
                      L.a,
                      null,
                      y.a.createElement(T.a, {
                        description: y.a.createElement(
                          y.a.Fragment,
                          null,
                          ''.concat(N, ' '),
                          y.a.createElement(R.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, H),
                        ),
                        label: M,
                        name: 'video_autoplay',
                        onChange: this._handleItemChanged,
                        options: this._options,
                        value: n || B.a,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      t.default = I(V)
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
        v = n('0KEI'),
        E = Object(y.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        w = n('kGix'),
        C = n('v//M'),
        _ = n('5FtR'),
        S = (function (e) {
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
                      : b.a.createElement(C.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        k = E.forwardRef(S)
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
    KNZn: function (e, t, n) {
      'use strict'
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
        g = (n('TJCb'), n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        y = n.n(g),
        v = n('RqPI'),
        E = n('rxPX'),
        w = Object(E.a)().propsFromState(function () {
          return { language: v.o }
        }),
        C = n('3XMw'),
        _ = n.n(C),
        S = n('fs1G'),
        k = n('rHpw'),
        x = n('BLtI'),
        I = n('MWbm'),
        O = 'Twitter',
        A = _.a.ea1c87a5({ mention: O }),
        P = {
          text: A,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, A.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: O,
                indices: [A.indexOf('@'), A.indexOf('@') + O.length + 1],
              },
            ],
          },
          user: {
            id: 783214,
            id_str: '783214',
            name: 'Twitter',
            screen_name: 'Twitter',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_normal.jpg',
            verified: !0,
          },
        },
        D = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              b()(u()(a), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var o = a.props,
              c = o.language,
              l = o.tweet
            return (a._tweet = r()(r()(r()({}, P), l), {}, { lang: c || 'en' })), a
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return y.a.createElement(
                    I.a,
                    { accessibilityHidden: !0, style: e && F.tweetBorder },
                    y.a.createElement(x.b, {
                      enableKeyboardShortcuts: !1,
                      onAnalyticsClick: S.a,
                      onAvatarClick: this._handleTweetAction,
                      onEntityClick: this._handleTweetAction,
                      onMediaClick: this._handleTweetAction,
                      onReplyContextClick: this._handleTweetAction,
                      tweet: this._tweet,
                      withActions: !1,
                      withAvatarLink: !1,
                      withTimestampLink: !1,
                      withUserHoverCard: !1,
                    }),
                    y.a.createElement(I.a, { style: k.a.absoluteFill }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(D, 'defaultProps', { tweet: P, withTweetBorder: !1 })
      var F = k.a.create(function (e) {
          return {
            tweetBorder: {
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.xLarge,
              outlineStyle: 'none',
            },
          }
        }),
        L = w(D)
      t.a = L
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
        v = n.n(y),
        E = n('HPNB'),
        w = n('VAZu'),
        C = n('wiP2'),
        _ = n('Es6L'),
        S = n('yiKp'),
        k = n.n(S),
        x = n('rHpw'),
        I = x.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, x.a.absoluteFillObject), {}, { overflowY: 'auto' }),
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
        P = n('TnY3'),
        D = n('cHvH'),
        F = n('3xLC'),
        L = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        T = (function (e) {
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
                  ? v.a.createElement(
                      O.a,
                      { style: I.fill },
                      v.a.createElement(
                        A.a,
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
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(D.a, null, function (t) {
                    var n = t.windowWidth
                    return E.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      r()(e, L))
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
                    E = n.showSubtitleOnWideDetail,
                    _ = n.subtitle,
                    S = n.title,
                    k = n.titleIconCell,
                    x = n.titleIconCellSize,
                    A = n.withDetailOpen,
                    P = n.withSearchBox,
                    D = n.withTweetButton,
                    F = 'root' === h,
                    L = 'secondaryRoot' === h,
                    T = 'primaryDetail' === h,
                    R = (T && E) || (F && y),
                    B = F || (T && t),
                    M = F ? g.c : T ? g.a : void 0,
                    N = v.a.createElement(
                      O.a,
                      { style: I.appBarContainer },
                      v.a.createElement(w.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: B,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: f,
                        secondaryBar: b,
                        subtitle: R ? _ : void 0,
                        title: S,
                        titleDomId: M,
                        titleIconCell: k,
                        titleIconCellSize: x,
                      }),
                    ),
                    H =
                      F || (L && A)
                        ? null
                        : v.a.createElement(C.a.Configure, {
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
                            title: S,
                            withSearchBox: P,
                            withTweetButton: D,
                          })
                  return v.a.createElement(v.a.Fragment, null, H, N)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(T, 'contextType', F.a),
        b()(T, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(P.a)(T)
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
          return v
        }),
        n.d(t, 'g', function () {
          return E
        }),
        n.d(t, 'h', function () {
          return w
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'e', function () {
          return S
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
      var v = function (e) {
          return e.userData.downloads
        },
        E = function (e) {
          return e.userData.fetchStatus
        },
        w = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        C = function () {
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
        S = function (e) {
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
        v = n('rxPX'),
        E = n('0KEI'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: y.g, downloads: y.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: y.d,
              googleAnalyticsPageView: g.a,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: y.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        C = n('XYIJ'),
        _ = (n('6U7i'), n('3XMw')),
        S = n.n(_),
        k = n('aITJ'),
        x = n('MWbm'),
        I = n('/yvb'),
        O = n('eb3s'),
        A = n('855f'),
        P = S.a.cfd2f35d,
        D = S.a.fc5bfd95,
        F = S.a.gee8110d,
        L = S.a.c326f156,
        T = S.a.c9fe9b56,
        R = S.a.j54b679a,
        B = S.a.ac63840c,
        M = S.a.bcd9b0ed,
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
                    c = R({ size: n.getSizeLabel(o) }),
                    l = t ? L : F
                  return b.a.createElement(
                    x.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? b.a.createElement(
                          x.a,
                          null,
                          b.a.createElement(
                            I.a,
                            {
                              disabled: t,
                              onPress: this._handleNeedsConfirmationActionCellPress,
                              size: 'small',
                              style: C.a.narrowButton,
                              type: 'brandFilled',
                            },
                            l,
                          ),
                          this.state.showConfirmation && !t
                            ? b.a.createElement(O.a, {
                                cancelButtonLabel: P,
                                confirmButtonLabel: D,
                                confirmButtonLink: { pathname: i || '', external: !0 },
                                headline: T,
                                onCancel: this._handleCancel,
                                onConfirm: this._handleConfirm,
                                text: c,
                              })
                            : null,
                        )
                      : b.a.createElement(
                          I.a,
                          {
                            disabled: t,
                            link: i ? { pathname: i, external: !0 } : void 0,
                            onPress: a,
                            size: 'small',
                            style: C.a.narrowButton,
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
          ? B({ size: A.a.getFormattedCount(t) })
          : M({ size: A.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var H = n('7FtF'),
        j = n('ClNT'),
        z = n('t62R'),
        V = n('rHpw'),
        W = n('v6aA'),
        K = S.a.f56af9cc,
        G = S.a.b2ed92c3,
        Y = S.a.ce5d2c46,
        U = S.a.dd9ec81f,
        q = S.a.c7227886,
        X = S.a.a0c3f812,
        J = S.a.ba2e82a1,
        Z = S.a.eea30bb4,
        Q = S.a.f2cde471,
        $ = S.a.b7ce9dbe,
        ee = S.a.fbc92b61,
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
                return t.length ? b.a.createElement(x.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              h()(l()(e), '_renderDownloadItems', function (t, n) {
                return b.a.createElement(
                  x.a,
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
                    { location: a, title: K },
                    b.a.createElement(j.a, { fetch: t, fetchStatus: n, renderChildren: this._render }),
                  )
                },
              },
              {
                key: '_renderEmptyState',
                value: function () {
                  return b.a.createElement(
                    x.a,
                    { style: ne.emptyState },
                    b.a.createElement(z.b, { size: 'title4' }, U),
                    b.a.createElement(z.b, { color: 'gray700', style: ne.emptyStateDescription }, X),
                    b.a.createElement(
                      I.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: C.a.narrowButton,
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
                    x.a,
                    { key: ''.concat(r), style: [C.a.narrowButtonRow, C.a.bottomBorder, C.a.labelContainer] },
                    b.a.createElement(
                      x.a,
                      null,
                      b.a.createElement(z.b, { weight: 'bold' }, ee({ currentIndex: r, count: o })),
                      e.generated
                        ? b.a.createElement(z.b, { color: 'gray700' }, Z({ date: J(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? b.a.createElement(z.b, { color: 'gray700' }, Q({ date: J(new Date(e.expires)) }))
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
                    x.a,
                    { style: [C.a.narrowButtonRow, C.a.bottomBorder, C.a.labelContainer] },
                    b.a.createElement(z.b, { weight: 'bold' }, ee({ currentIndex: 1, count: 1 })),
                    b.a.createElement(
                      I.a,
                      { disabled: !0, size: 'small', style: C.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? G : Y,
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
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return b
        })
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('hBvt'), n('ERkP')),
        l = n.n(c),
        s = n('rHpw'),
        u = n('csss'),
        d = ['Icon'],
        p = ['link'],
        f = function (e) {
          return l.a.createElement(e.Icon, { style: h.thumbnail })
        },
        h = s.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function m(e) {
        var t = e.Icon,
          n = i()(e, d)
        return l.a.createElement(
          u.a,
          r()({}, n, { thumbnail: l.a.createElement(f, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function b(e) {
        e.link
        var t = i()(e, p)
        return l.a.createElement(u.a, r()({}, t, { link: { external: !0, pathname: e.link } }))
      }
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
        v = n('FPOR'),
        E = n('P1r1'),
        w = n('rxPX'),
        C = n('0KEI'),
        _ = n('H9MA'),
        S = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: _.c, videoAutoplay: _.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: _.b,
              updateDataSaverMode: _.g,
              updateSettings: E.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        k = n('45mF'),
        x = n('6v1f'),
        I = n('3XMw'),
        O = n.n(I),
        A = n('yoO3'),
        P = n('7FtF'),
        D = n('3cwy'),
        F = 'dataSaverBooleanItem',
        L = n('v6aA'),
        T = n('RKmr'),
        R = n('e0ey'),
        B = n('csss'),
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
              (o._showVideoAutoplaySetting = Object(D.a)()),
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
                      P.a,
                      { location: n, screenType: 'secondaryDetail', title: M },
                      y.a.createElement(T.a, { description: N }),
                      y.a.createElement(R.a, {
                        checked: t,
                        helpText: j,
                        label: H,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: F,
                      }),
                      this._showVideoAutoplaySetting &&
                        y.a.createElement(B.a, {
                          description: v.a[a || x.a],
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
      b()(V, 'contextType', L.a)
      t.default = S(V)
    },
    REKA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccessibilityScreen', function () {
          return oe
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
        g = n('dDSG'),
        y = n('FPOR'),
        v = n('6/RC'),
        E = n('rxPX'),
        w = n('0KEI'),
        C = n('2iUg'),
        _ = n('P1r1'),
        S = n('H9MA'),
        k = Object(E.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: C.b,
              autoPollNewTweets: _.h,
              dataSaverMode: S.c,
              reducedMotionEnabled: _.w,
              videoAutoplay: S.f,
              highContrastEnabled: _.p,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              fetchAltTextPromptPreferenceIfNeeded: C.a,
              updateAltTextPromptPreference: C.c,
              updateSettings: _.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        x = n('6v1f'),
        I = n('3XMw'),
        O = n.n(I),
        A = n('yoO3'),
        P = n('7FtF'),
        D = n('OySi'),
        F = n('3cwy'),
        L = 'accessibilityScreen',
        T = n('MWbm'),
        R = n('38/B'),
        B = n('rHpw'),
        M = n('RKmr'),
        N = n('6vad'),
        H = n('e0ey'),
        j = n('0yYu'),
        z = n('csss'),
        V = n('v6aA'),
        W = O.a.e3719c15,
        K = O.a.a5208fad,
        G = O.a.d5b646bd,
        Y = O.a.jfe6a3a0,
        U = O.a.add55c97,
        q = O.a.a6d5b010,
        X = O.a.e8c72272,
        J = O.a.dba2cdd1,
        Z = O.a.d070244e,
        Q = O.a.icfa5e8b,
        $ = O.a.ae41b002,
        ee = O.a.e82b294e,
        te = O.a.ea284ab8,
        ne = O.a.a776eed7,
        ae = O.a.bd15d030,
        re = O.a.a2dfde67,
        oe = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              h()(
                l()(o),
                '_showAltTextPromptPreferenceSetting',
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
                o._handleSettingChanged(e, t), R.a.setReducedMotion(t)
              }),
              h()(l()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), B.a.setHighContrast(t)
              }),
              h()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateAltTextPromptPreference,
                  c = t ? g.a.prompt : null
                a.scribe({ element: ''.concat(e, '_').concat(c || 'off'), action: 'selected' }),
                  i(c).catch(r({ showToast: !0 }))
              }),
              h()(l()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateSettings
                a.scribe({ element: e, action: t ? 'on' : 'off' }), i(h()({}, e, t)).catch(r({ showToast: !0 }))
              }),
              (o._showVideoAutoplaySetting = Object(F.a)()),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(0, this.props.fetchAltTextPromptPreferenceIfNeeded)()
                },
              },
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
                    c = v.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return b.a.createElement(
                    A.a,
                    null,
                    b.a.createElement(
                      P.a,
                      { location: r, screenType: 'secondaryDetail', title: W },
                      b.a.createElement(
                        T.a,
                        { testID: L },
                        b.a.createElement(M.a, { description: K }),
                        b.a.createElement(N.b, { text: G }),
                        b.a.createElement(H.a, {
                          checked: a,
                          helpText: J,
                          label: X,
                          name: 'highContrastEnabled',
                          onChange: this._handleHighContrastChanged,
                        }),
                      ),
                      this._showVideoAutoplaySetting
                        ? b.a.createElement(
                            T.a,
                            null,
                            b.a.createElement(j.a, null),
                            b.a.createElement(N.b, { text: Y }),
                            b.a.createElement(H.a, {
                              checked: o || c,
                              disabled: c,
                              helpText: c ? $ : Q,
                              label: Z,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            b.a.createElement(z.a, {
                              description: y.a[i || x.a],
                              disabled: n,
                              label: ne,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextPromptPreferenceSetting
                        ? b.a.createElement(
                            T.a,
                            null,
                            b.a.createElement(j.a, null),
                            b.a.createElement(N.b, { text: U }),
                            b.a.createElement(H.a, {
                              checked: t === g.a.prompt,
                              helpText: te,
                              label: ee,
                              name: 'altTextNudgeType',
                              onChange: this._handleAltTextNudgeTypeChanged,
                            }),
                          )
                        : null,
                      this._maybeRenderTimelineSettings(),
                      b.a.createElement(
                        T.a,
                        null,
                        b.a.createElement(j.a, null),
                        b.a.createElement(N.b, { text: ae }),
                        b.a.createElement(D.a, { label: re, link: 'https://help.twitter.com/resources/accessibility' }),
                      ),
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
                        b.a.createElement(j.a, null),
                        b.a.createElement(N.b, { text: q }),
                        b.a.createElement(H.a, {
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
      h()(oe, 'contextType', V.a)
      t.default = k(oe)
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
    Zjav: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsPage', function () {
          return rt
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
        m = (n('hBpG'), n('7x/C'), n('ERkP')),
        b = n.n(m),
        g = n('mrHL'),
        y = n('yiKp'),
        v = n.n(y),
        E = n('m3Bd'),
        w = n.n(E),
        C = (n('+KXO'), n('NeAX')),
        _ = n('RqPI'),
        S = n('hqKg'),
        k = n('kGix'),
        x = n('O0uF'),
        I = n('G6rE'),
        O = n('rxPX'),
        A = n('0KEI'),
        P = ['featureSwitches'],
        D = Object(S.createSelector)(_.m, C.selectPreferencesFetchStatus, function (e, t) {
          return e ? k.a.LOADED : t
        }),
        F = Object(O.a)()
          .propsFromState(function () {
            return {
              fetchStatus: D,
              loggedInUser: I.e.selectLoggedInUser,
              isActiveCreator: _.l,
              personalizationPreferences: C.selectUserPreferences,
              featureSwitches: x.f,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches,
              n = w()(e, P)
            return v()({ withEditableFSes: Object.keys(t.debug).length > 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: C.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        L = n('v//M'),
        T = n('uD2z'),
        R = n('3XMw'),
        B = n.n(R),
        M = n('KQzH'),
        N = n('yoO3'),
        H = n('cnVF'),
        j = n('K1iM'),
        z = n.n(j),
        V = n('ddV6'),
        W = n.n(V),
        K = (n('tVqn'), n('jwue'), n('+oxZ'), n('Grlw'))
      function G(e) {
        var t = e.isActiveCreator,
          n = e.results,
          a = e.setting,
          r = e.type
        if (!(a.id === K.a.Monetization || a.id === K.a.SuperFollows) || t) {
          var o = {
            id: a.id,
            type: 'setting',
            data: { text: a.title, location: { pathname: a.path, openInSameFrame: !0 } },
          }
          'setting' === r
            ? n.push(v()(v()({}, o), {}, { type: 'setting' }))
            : 'setting_group' === r && n.push(v()(v()({}, o), {}, { type: 'setting_group' }))
        }
      }
      var Y = n('VY6S'),
        U = n('Es6L'),
        q = (n('uFXj'), n('3EFP')),
        X = n('woHV'),
        J = n('tAeL'),
        Z = n('MWbm'),
        Q = n('pf9B'),
        $ = n('xoZN'),
        ee = n('/yvb'),
        te = n('6OUF'),
        ne = n('rHpw'),
        ae = n('oEoC'),
        re = n('95Se'),
        oe = n('VwDm'),
        ie = B.a.f065ba8c,
        ce = B.a.b08821f3,
        le = ne.a.create(function (e) {
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
            inputWrapper: { flex: 1 },
            backButton: { marginRight: e.spaces.space4 },
          }
        }),
        se = function (e) {
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
            d = e.onClick,
            p = e.onDismiss,
            f = e.onFocus,
            h = e.onItemClick,
            m = e.onQueryChange,
            g = e.onSubmit,
            y = e.placeholder,
            v = e.renderEmptyState,
            E = e.renderInSearchField,
            w = e.rounded,
            C = e.shouldAutoFocus,
            _ = e.shouldClearOnSelect,
            S = e.shouldFocusOnClear,
            k = e.shouldRenderEmptyState,
            x = e.source,
            I = e.style,
            O = e.testID,
            A = b.a.useRef(null),
            P = b.a.useRef(null),
            D = b.a.useRef(null),
            F = b.a.useRef(null),
            L = b.a.useState(!1),
            T = W()(L, 2),
            R = T[0],
            B = T[1],
            M = b.a.useState(null),
            N = W()(M, 2),
            H = N[0],
            j = N[1],
            z = b.a.useState(Object(ae.b)()),
            V = W()(z, 2),
            K = V[0],
            G = V[1],
            Y = b.a.useState(function () {
              return Object(ae.f)()
            }),
            U = W()(Y, 1)[0],
            ne = b.a.useState(''),
            se = W()(ne, 2),
            ue = se[0],
            de = se[1],
            pe = function (e) {
              var t,
                n = Q.a.getCount() > 0
              ;(null != A && null !== (t = A.current) && void 0 !== t && t.contains(e.target)) || n || (R && me())
            }
          b.a.useEffect(function () {
            return (
              window.document.addEventListener('click', pe, !0),
              function () {
                window.document.removeEventListener('click', pe, !0)
              }
            )
          })
          var fe = function () {
              if (null != P && P.current) {
                var e = P.current.getBoundingClientRect().bottom
                e !== H && j(e)
              }
            },
            he = function (e) {
              de(e), null == m || m(e)
            },
            me = function () {
              B(!1), null == p || p()
            },
            be = function () {
              var e
              me(), null == D || null === (e = D.current) || void 0 === e || e.blur()
            },
            ge = function (e, t) {
              var n,
                a,
                r = _ ? '' : ue
              ;(B(!1), D.current) &&
                (_ && S
                  ? D.current.focus()
                  : (_ && (null === (n = D.current.textInput) || void 0 === n || n.clear()),
                    null === (a = D.current) || void 0 === a || a.blur()))
              he(r), null == p || p(), null == h || h(e, t)
            },
            ye = function () {
              G(Object(ae.b)())
            },
            ve = R || t
          return b.a.createElement(
            Z.a,
            { onLayout: fe, ref: A, style: [le.root, I] },
            b.a.createElement(
              $.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(ae.g)(e)) {
                    var a, r
                    if (n === q.a)
                      return null === (a = F.current) || void 0 === a || a.focusNext(), void e.preventDefault()
                    if (n === q.b)
                      return null === (r = F.current) || void 0 === r || r.focusPrevious(), void e.preventDefault()
                    if (n === q.d) return me(), void e.preventDefault()
                    if (n !== q.f) {
                      var o
                      if (n === q.c && null !== (t = F.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = F.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      R || B(!0)
                    } else me()
                  }
                },
                style: le.keydownInputListener,
              },
              b.a.createElement(
                X.a,
                {
                  accessibilityLabel: y,
                  accessibilityRole: 'search',
                  onSubmit: function (e) {
                    var t
                    e.preventDefault(),
                      e.stopPropagation(),
                      null == D || null === (t = D.current) || void 0 === t || t.blur(),
                      B(!1),
                      null == p || p(),
                      null == g || g()
                  },
                  style: le.wrapper,
                },
                b.a.createElement(
                  Z.a,
                  { ref: P, style: [le.inputContainer, i] },
                  ve && u
                    ? b.a.createElement(ee.a, {
                        accessibilityLabel: ce,
                        icon: b.a.createElement(re.a, null),
                        onClick: function (e) {
                          null == e || e.stopPropagation(), me(), null == u || u()
                        },
                        style: le.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  b.a.createElement(
                    Z.a,
                    { onClick: d, style: le.inputWrapper },
                    b.a.createElement(te.a, {
                      Icon: oe.a,
                      ariaActiveDescendant: K,
                      ariaAutocomplete: 'list',
                      ariaExpanded: ve,
                      ariaLabel: ie,
                      ariaOwns: U,
                      ariaRole: 'combobox',
                      autoComplete: 'off',
                      autoCorrect: !1,
                      autoFocus: C,
                      contentBelow: null == E ? void 0 : E(),
                      focusOnClear: S,
                      isCompact: c,
                      onChange: function (e) {
                        he(e.target.value), fe()
                      },
                      onClear: function () {
                        he('')
                      },
                      onFocus: function () {
                        B(!0), fe(), null == f || f()
                      },
                      onLayout: fe,
                      placeholder: y,
                      ref: D,
                      returnKeyType: 'search',
                      spellCheck: 'false',
                      styleType: w ? 'pill' : 'selection',
                      testID: O,
                      value: ue,
                      withClearButton: !a && R,
                    }),
                  ),
                ),
                b.a.createElement(
                  Z.a,
                  { style: [le.typeaheadContainer, !w && le.topBorder] },
                  ve
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [le.dropdown, H ? Object(ae.d)(H) : le.wideModeDropdown])
                            : 'overlap' === o && (e = l ? le.modalDropdown : [le.dropdown, le.wideModeDropdown]),
                          v && k
                            ? v({
                                ariaDescendantId: K,
                                domId: U,
                                onDismiss: be,
                                onItemFocusChanged: ye,
                                ref: F,
                                style: e,
                              })
                            : b.a.createElement(J.a, {
                                ariaDescendantId: K,
                                domId: U,
                                items: s,
                                onItemClick: ge,
                                onItemFocusChanged: ye,
                                ref: F,
                                source: x,
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
        ue = n('GZwR'),
        de = n('s8G+'),
        pe = n('zCf4'),
        fe = n('t62R'),
        he = n('FIs5'),
        me = B.a.d94f12b5,
        be = B.a.b92a21d8,
        ge = B.a.c170a564,
        ye = B.a.ba8f6f81
      function ve(e) {
        var t = e.isActiveCreator,
          n = e.isSearching,
          a = e.onChange,
          r = e.searchIndex,
          o = Object(de.a)('settings_revamp_search_bar_enabled'),
          i = Object(pe.f)(),
          c = b.a.useState(''),
          l = W()(c, 2),
          s = l[0],
          u = l[1],
          d = b.a.useState([]),
          p = W()(d, 2),
          f = p[0],
          h = p[1],
          m = s.toLocaleLowerCase().trim(),
          g = Boolean(m.length)
        b.a.useEffect(
          function () {
            g
              ? (function () {
                  var e,
                    n = [],
                    a = z()(r)
                  try {
                    var o = function () {
                      var a = e.value,
                        r = !1
                      Array.isArray(a.items) &&
                        a.items.forEach(function (e) {
                          Object(K.b)(m, e) &&
                            (r || ((r = !0), G({ results: n, setting: a, type: 'setting_group', isActiveCreator: t })),
                            G({ results: n, setting: e, type: 'setting', isActiveCreator: t }))
                        }),
                        !r &&
                          Object(K.b)(m, a) &&
                          G({ results: n, setting: a, type: 'setting_group', isActiveCreator: t })
                    }
                    for (a.s(); !(e = a.n()).done; ) o()
                  } catch (i) {
                    a.e(i)
                  } finally {
                    a.f()
                  }
                  h(n)
                })()
              : h([])
          },
          [m, g, r, t],
        )
        var y = b.a.useMemo(
          function () {
            return Object(Y.a)(function (e) {
              a(!0), u(e)
            }, 100)
          },
          [a],
        )
        if (!o) return null
        return b.a.createElement(se, {
          alwaysOpen: n,
          dropdownPosition: 'inline',
          inputStyle: Ee.input,
          items: f,
          onBackClicked: Object(U.a)()
            ? function () {
                a(!1)
              }
            : void 0,
          onClick: function () {
            a(!0)
          },
          onFocus: function () {
            s && a(!0)
          },
          onItemClick: function (e) {
            if ('setting' === e.type || 'setting_group' === e.type) {
              var t = 'string' == typeof e.data.location ? e.data.location : e.data.location.pathname
              i.push(t, { backLocation: window.location.pathname })
            }
          },
          onQueryChange: y,
          placeholder: ye,
          renderEmptyState: function (e) {
            var t = e.style
            return g
              ? b.a.createElement(he.a, { header: be({ query: s }), message: ge, style: t })
              : b.a.createElement(
                  Z.a,
                  { style: [t, Ee.emptyState] },
                  b.a.createElement(fe.b, { align: 'center', color: 'gray700' }, me),
                )
          },
          rounded: !0,
          shouldRenderEmptyState: n && (!g || 0 === f.length),
          source: ue.d.SearchBox,
        })
      }
      var Ee = ne.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
          }
        }),
        we = n('7FtF'),
        Ce = n('iCwC'),
        _e = n('3cwy'),
        Se = 'loggedOutPrivacySection',
        ke = 'accountLink',
        xe = 'accountAccessLink',
        Ie = 'privacyAndSafetyLink',
        Oe = 'notificationsLink',
        Ae = 'accessibilityLink',
        Pe = 'aboutLink',
        De = 'displayLink',
        Fe = 'dataLink',
        Le = n('6vad'),
        Te = n('0yYu'),
        Re = n('v6aA'),
        Be = n('AS3p'),
        Me = B.a.e3719c15,
        Ne = B.a.cad53943,
        He = B.a.bb081ea1,
        je = B.a.e95b9448,
        ze = B.a.eb75875d,
        Ve = B.a.c4881c66,
        We = B.a.eafe3287,
        Ke = B.a.f458a3b1,
        Ge = B.a.e8f57e07,
        Ye = B.a.b7fde2b8,
        Ue = B.a.ja94f34d,
        qe = B.a.d0b74a5a,
        Xe = B.a.gd4302ec,
        Je = B.a.bdc6f5b7,
        Ze = B.a.f8645654,
        Qe = B.a.cf9b1669,
        $e = B.a.bdfa2b8c,
        et = B.a.df483b47,
        tt = B.a.d299431b,
        nt = B.a.ed21f885,
        at = B.a.gaac7109,
        rt = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              h()(l()(o), '_renderLoggedIn', function () {
                var e = o.state.isSearching
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  o._renderSearchInput(),
                  e
                    ? null
                    : b.a.createElement(
                        Z.a,
                        { accessibilityRole: 'tablist' },
                        b.a.createElement(M.a, { label: Je, link: '/settings/account', testID: ke }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        b.a.createElement(M.a, {
                          label: Ze,
                          link: '/settings/security_and_account_access',
                          testID: xe,
                        }),
                        b.a.createElement(M.a, { label: Ne, link: '/settings/privacy_and_safety', testID: Ie }),
                        o._renderReportCenter(),
                        b.a.createElement(M.a, { label: ze, link: '/settings/notifications', testID: Oe }),
                        b.a.createElement(M.a, {
                          label: Qe,
                          link: '/settings/accessibility_display_and_languages',
                          testID: Ae,
                        }),
                        b.a.createElement(M.a, { label: $e, link: '/settings/about', testID: Pe }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              h()(l()(o), '_renderLoggedOut', function () {
                var e = Object(g.b)(H.u, o.context.featureSwitches)
                return b.a.createElement(
                  Z.a,
                  { testID: Se },
                  b.a.createElement(Le.b, { text: Ke }),
                  b.a.createElement(M.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Ge,
                    link: '/settings/account/personalization',
                  }),
                  b.a.createElement(M.a, { label: Ye, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? b.a.createElement(M.a, { description: Xe, label: qe, link: '/settings/cookie_preferences' })
                    : null,
                  b.a.createElement(fe.b, { style: Ce.a.descriptionText }, Ue),
                  o._renderGeneral(),
                )
              }),
              h()(l()(o), '_renderSearchInput', function () {
                var e = o.props,
                  t = e.isActiveCreator,
                  n = e.searchIndex,
                  a = o.state.isSearching
                return b.a.createElement(ve, {
                  isActiveCreator: t,
                  isSearching: a,
                  onChange: function (e) {
                    o.setState({ isSearching: e })
                  },
                  searchIndex: n,
                })
              }),
              h()(l()(o), '_renderGeneral', function () {
                return b.a.createElement(
                  Z.a,
                  null,
                  b.a.createElement(Te.a, null),
                  b.a.createElement(Le.b, { text: je }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? b.a.createElement(M.a, { label: Ve, link: '/settings/display', testID: De })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(M.a, { label: We, link: '/settings/data', testID: Fe })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(M.a, { label: Me, link: '/settings/accessibility', testID: Ae })
                    : null,
                  b.a.createElement(M.a, { label: $e, link: '/settings/about', testID: Pe }),
                )
              }),
              h()(l()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? b.a.createElement(M.a, { label: et, link: '/settings/feature_switches' })
                  : null
              }),
              h()(l()(o), '_renderMonetization', function () {
                var e,
                  t = o.props,
                  n = t.isActiveCreator,
                  a =
                    null ===
                      (e = t.searchIndex.find(function (e) {
                        return e.id === K.a.Monetization
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return n && a ? b.a.createElement(M.a, { label: tt, link: a }) : null
              }),
              h()(l()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === K.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? b.a.createElement(M.a, { label: nt, link: t }) : null
              }),
              h()(l()(o), '_renderReportCenter', function () {
                return o.context.featureSwitches.isTrue('report_center_mvp_r2_enabled')
                  ? b.a.createElement(M.a, { label: at, link: '/settings/report-center' })
                  : null
              }),
              h()(l()(o), '_handleBackClicked', function () {
                var e = o.props.history
                o.state.isSearching ? o.setState({ isSearching: !1 }) : e.goBack()
              }),
              h()(l()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              h()(l()(o), '_isUserLoggedIn', function () {
                return !!o.props.loggedInUser
              }),
              (o._showVideoAutoplaySetting = Object(_e.a)()),
              (o.state = { isSearching: !1 }),
              o
            )
          }
          return (
            i()(n, [
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
                  return b.a.createElement(
                    N.a,
                    null,
                    b.a.createElement(
                      we.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: He },
                      this._isUserLoggedIn() || Object(Be.c)(this.context.featureSwitches) === Be.a.AcceptAllCookies
                        ? b.a.createElement(L.a, {
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
                  return Object(T.a)(e)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(rt, 'contextType', Re.a)
      t.default = F(rt)
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
          s.c,
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
          return x
        }),
        n.d(t, 'SettingsAboutScreen', function () {
          return I
        })
      n('7x/C'), n('JtPf'), n('tQbP'), n('LW0h'), n('vrRf'), n('hBvt'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('RqPI'),
        i = n('rxPX'),
        c = Object(i.a)()
          .propsFromState(function () {
            return { viewerCountry: o.y }
          })
          .withAnalytics({ page: 'settings', section: 'about' }),
        l = n('dzZ/'),
        s = n('3XMw'),
        u = n.n(s),
        d = n('yoO3'),
        p = n('7FtF'),
        f = n('iCwC'),
        h = 'aboutScreen',
        m = n('MWbm'),
        b = n('6vad'),
        g = n('csss'),
        y = n('RKmr'),
        v = n('0yYu'),
        E = n('t62R'),
        w = u.a.cedbb01c,
        C = u.a.b4f917d0,
        _ = u.a.bdfa2b8c,
        S = u.a.j0783ebe,
        k = u.a.c0398892
      function x(e) {
        var t = []
        return (
          t.push(r.a.createElement(b.b, { text: k })),
          t.push(
            r.a.createElement(g.a, {
              label: k,
              link: { external: !0, pathname: 'https://twitter.com/i/release_notes' },
            }),
          ),
          r.a.Children.toArray(t)
        )
      }
      function I(e) {
        var t = e.location,
          n = e.viewerCountry ? e.viewerCountry.toLowerCase() : null,
          a = l.a
            .filter(function (e) {
              return !e.excludeOnSettingsPage && (!e.country || e.country.indexOf(n) > -1)
            })
            .sort(function (e, t) {
              return e.text.localeCompare(t.text)
            }),
          o = a.filter(function (e) {
            return e.legal && e.link
          }),
          i = a.filter(function (e) {
            return !e.legal && e.link
          }),
          c = a.filter(function (e) {
            return !e.link
          })
        return r.a.createElement(
          d.a,
          null,
          r.a.createElement(
            p.a,
            { location: t, screenType: 'primaryDetail', title: _ },
            r.a.createElement(
              m.a,
              { testID: h },
              r.a.createElement(y.a, { description: S }),
              r.a.createElement(x, null),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: w }),
              o.map(function (e, t) {
                return r.a.createElement(g.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
              c.map(function (e) {
                return r.a.createElement(
                  E.b,
                  { color: 'gray700', key: e.text, size: 'subtext2', style: [f.a.infoText, f.a.bottomBorder] },
                  e.text,
                )
              }),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: C }),
              i.map(function (e, t) {
                return r.a.createElement(g.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
            ),
          ),
        )
      }
      t.default = c(I)
    },
    fBvp: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
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
        m = (n('z84I'), n('ERkP')),
        b = n.n(m),
        g = n('yiKp'),
        y = n.n(g),
        v = (n('ho0z'), n('uFXj'), n('t62R')),
        E = n('IMYl'),
        w = n('cm6r'),
        C = n('rHpw'),
        _ = n('lzTJ'),
        S = n('k/Ka'),
        k = n('MWbm'),
        x = n('r7ya'),
        I = n('I4+6'),
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              h()(l()(e), '_radioRef', b.a.createRef()),
              h()(l()(e), '_handleChange', function (t) {
                var n = e.props,
                  a = n.backgroundName,
                  r = n.isSelected,
                  o = n.onChange
                o && !r && o(a)
              }),
              (e._selectedInteractiveStyles = I.a.generate({
                backgroundColor: C.a.theme.colors.transparent,
                color: C.a.theme.colors.primary,
                withFocusWithinFocusRing: !0,
              })),
              (e._unselectedInteractiveStyles = I.a.generate({
                backgroundColor: C.a.theme.colors.transparent,
                color: C.a.theme.colors.gray700,
                withFocusWithinFocusRing: !0,
              })),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.isSelected,
                    r = t.label,
                    o = t.name
                  return b.a.createElement(
                    w.a,
                    { focusable: !1, interactiveStyles: null, style: [A.root, this._getButtonStyles()] },
                    function (t) {
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(
                          w.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: A.radioOuterCircle,
                          },
                          b.a.createElement(
                            k.a,
                            { style: [A.radioInnerCircle, e._getCircleStyles()] },
                            a ? b.a.createElement(E.a, { style: A.checkMark }) : null,
                          ),
                        ),
                        b.a.createElement(
                          k.a,
                          { accessibilityHidden: !0, style: A.text },
                          b.a.createElement(v.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, r),
                        ),
                        Object(S.a)('input', {
                          accessibilityLabel: n || r,
                          checked: a,
                          name: o,
                          style: A.nativeControl,
                          type: 'radio',
                          onChange: e._handleChange,
                          ref: e._radioRef,
                        }),
                      )
                    },
                  )
                },
              },
              {
                key: '_getButtonStyles',
                value: function () {
                  var e = this.props,
                    t = e.backgroundName,
                    n = e.isSelected
                  return {
                    backgroundColor: this._getPalette(t).cellBackground,
                    borderColor: n ? C.a.theme.colors.primary : C.a.theme.colors.gray200,
                    borderWidth: n ? '2px' : '1px',
                  }
                },
              },
              {
                key: '_getCircleStyles',
                value: function () {
                  var e = this.props,
                    t = e.backgroundName,
                    n = e.isSelected
                  return {
                    backgroundColor: n ? C.a.theme.colors.primary : C.a.theme.colors.transparent,
                    borderColor: n ? C.a.theme.colors.primary : this._getPalette(t).gray300,
                  }
                },
              },
              {
                key: '_getTextStyles',
                value: function () {
                  var e = this.props.backgroundName
                  return { color: this._getPalette(e).text }
                },
              },
              {
                key: '_getInteractiveRadioStyles',
                value: function () {
                  return this.props.isSelected ? this._selectedInteractiveStyles : this._unselectedInteractiveStyles
                },
              },
              {
                key: '_getPalette',
                value: function (e) {
                  return e === _.b.dark ? x.a : e === _.b.darker ? x.b : x.c
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        A = C.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: '20px',
              flexDirection: 'row',
              flex: 1,
              borderRadius: e.borderRadii.small,
              cursor: 'pointer',
              minHeight: '64px',
              margin: e.spaces.space4,
              alignItems: 'center',
            },
            radioOuterCircle: {
              borderRadius: e.borderRadii.infinite,
              userSelect: 'none',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: '-11px',
            },
            radioInnerCircle: {
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
              borderRadius: e.spaces.space32,
              justifyContent: 'center',
              height: '20px',
              width: '20px',
            },
            text: {
              flexGrow: 1,
              justifyContent: 'center',
              cursor: 'pointer',
              alignItems: 'center',
              marginLeft: '5px',
              width: '80%',
            },
            checkMark: { color: e.colors.white, width: '18px', height: '18px' },
            nativeControl: y()(
              y()({}, C.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        P = O,
        D = 1,
        F = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              h()(l()(e), '_handleItemChanged', function (t) {
                return function () {
                  ;(0, e.props.onChange)(t)
                }
              }),
              (e._backgroundPickerName = 'background_picker_'.concat(D)),
              (D += 1),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    r = t.layout,
                    o = t.options,
                    i = t.value
                  return b.a.createElement(
                    k.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: 'row' === r ? L.row : L.column },
                    o.map(function (t) {
                      return b.a.createElement(P, {
                        accessibilityLabel: t.accessibilityLabel,
                        autoFocus: a && t.backgroundName === i,
                        backgroundName: t.backgroundName,
                        isSelected: t.backgroundName === i,
                        key: t.backgroundName,
                        label: t.label,
                        name: e._backgroundPickerName,
                        onChange: e._handleItemChanged(t.backgroundName),
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        L = C.a.create(function (e) {
          return { row: { flexDirection: 'row' }, column: { flexDirection: 'column' } }
        })
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
        v = n('rHpw'),
        E = c.a.c4881c66,
        w = c.a.a5ce82a4,
        C = c.a.ce494bb3,
        _ = c.a.c783d45e,
        S = c.a.h306a357,
        k = function (e) {
          var t = e.location
          return r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: E },
              r.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: x.aboutText, testID: u }, w),
              r.a.createElement(h.a, null),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: C }),
              r.a.createElement(d.a, null),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: _ }),
              r.a.createElement(m.a, { style: x.colorPicker }, r.a.createElement(f.a, null)),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: S }),
              r.a.createElement(m.a, { style: x.backgroundPicker }, r.a.createElement(p.a, null)),
            ),
          )
        },
        x = v.a.create(function (e) {
          return {
            aboutText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
            colorPicker: { paddingVertical: e.spaces.space4 },
          }
        })
      t.default = Object(o.a)({ page: 'settings', section: 'display' })(k)
    },
    huBF: function (e, t, n) {
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
        g = n('rxPX'),
        y = n('z2Pn'),
        v = Object(g.a)()
          .propsFromState(function () {
            return { themeFocus: y.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: y.k }
          }),
        E = n('MWbm'),
        w = n('3EFP'),
        C = v(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(l()(e), '_handleKeyDown', function (t) {
                  var n = e.props,
                    a = n.setThemeFocus,
                    r = n.themeItem
                  t.key === w.d || t.key === w.e ? a('') : a(r)
                }),
                h()(l()(e), '_handleMouseDown', function () {
                  e.props.setThemeFocus('')
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
                      t = e.children,
                      n = e.themeFocus,
                      a = e.themeItem === n
                    return b.a.createElement(
                      E.a,
                      { onKeyDown: this._handleKeyDown, onMouseDown: this._handleMouseDown },
                      t(a),
                    )
                  },
                },
              ]),
              n
            )
          })(b.a.Component),
        )
      t.a = C
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
    's8G+': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('v6aA')
      t.a = function (e) {
        var t = r.a.useContext(o.a).featureSwitches
        return r.a.useMemo(
          function () {
            return t.isTrue(e)
          },
          [e, t],
        )
      }
    },
    tAN7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PrivacyAndSafetyScreen', function () {
          return Ee
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
        v = n('hqKg'),
        E = n('uD2z'),
        w = n('li/m'),
        C = n('G6rE'),
        _ = n('0KEI'),
        S = n('oEGd'),
        k = Object(v.createSelector)(
          g.selectPreferencesFetchStatus,
          g.selectUserPreferences,
          y.g,
          w.d,
          function (e, t, n, a) {
            return { fetchStatus: e, personalizationString: Object(E.a)(t), settings: n, hasCommunityMemberships: a }
          },
        ),
        x = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
          patchUser: C.e.patchUser,
          updateSettings: y.M,
        },
        I = Object(S.f)(k, x),
        O = n('v//M'),
        A = n('3XMw'),
        P = n.n(A),
        D = n('yoO3'),
        F = n('7FtF'),
        L = 'privacyAndSafetyScreen',
        T = n('MWbm'),
        R = n('Irs7'),
        B = n('v6aA'),
        M = n('6vad'),
        N = n('e0ey'),
        H = n('csss'),
        j = n('0yYu'),
        z = n('eb3s'),
        V = P.a.cad53943,
        W = P.a.bab1f8b0,
        K = P.a.f5e59e90,
        G = P.a.i0310b4e,
        Y = { headline: P.a.j8bf07ab, text: P.a.ca8034b3, confirmButtonLabel: P.a.c5d4192a },
        U = { headline: P.a.gea6cc19, text: P.a.j7fc0afc, confirmButtonLabel: P.a.f527b322 },
        q = P.a.jabb9c9a,
        X = P.a.f56d108e,
        J = { all: P.a.d165c992, following: P.a.ea339390, none: P.a.e3a761ee },
        Z = P.a.d4986f85,
        Q = P.a.h6ce12ed,
        $ = P.a.ebcb68ae,
        ee = P.a.afdf29b8,
        te = P.a.e1929815,
        ne = P.a.d9172541,
        ae = P.a.e84e1c41,
        re = P.a.hefdc08f,
        oe = P.a.b608c1a0,
        ie = P.a.j2c3033a,
        ce = P.a.fd4d9068,
        le = P.a.fd4d9068,
        se = P.a.hfb77cf5,
        ue = P.a.fc1d217b,
        de = P.a.acdcc101,
        pe = P.a.hfc86556,
        fe = P.a.a5f32aa2,
        he = P.a.eb75875d,
        me = P.a.aea62567,
        be = P.a.e8f57e07,
        ge = P.a.e8f57e07,
        ye = P.a.b59540c2,
        ve = { all: P.a.bd34d8f8, following: P.a.d22dad9e, none: P.a.ad41e8b3 },
        Ee = (function (e) {
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
                  r = J[a.allow_media_tagging],
                  o = ve[a.allow_contributor_request]
                return b.a.createElement(
                  T.a,
                  null,
                  b.a.createElement(M.b, { text: W }),
                  b.a.createElement(N.a, {
                    checked: a.protected,
                    helpText: G,
                    label: K,
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
                    label: Q,
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
                    r = n ? U : Y
                  return b.a.createElement(
                    T.a,
                    { testID: L },
                    b.a.createElement(
                      F.a,
                      { location: a, screenType: 'primaryDetail', title: V },
                      b.a.createElement(
                        D.a,
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
      h()(Ee, 'contextType', B.a)
      t.default = Object(R.a)(I(Ee), { page: 'settings', section: 'safety' })
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
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('2VqO'),
        u = n.n(s),
        d = n('KEM+'),
        p = n.n(d),
        f = (n('z84I'), n('ERkP')),
        h = n.n(f),
        m = n('yiKp'),
        b = n.n(m),
        g = n('1Pcy'),
        y = n.n(g),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        E = n('cm6r'),
        w = n('rHpw'),
        C = n('k/Ka'),
        _ = n('MWbm'),
        S = n('x0mb'),
        k = n('IMYl'),
        x = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(y()(e), '_radioRef', h.a.createRef()),
              p()(y()(e), '_handleChange', function () {
                var t = e.props,
                  n = t.colorName
                ;(0, t.onChange)(n)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.colorName,
                    a = e.isSelected,
                    r = e.name,
                    o = e.style,
                    i = w.a.theme.colors[n],
                    c = v.a.generate({
                      backgroundColor: w.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return h.a.createElement(
                    _.a,
                    { style: [I.container, o] },
                    h.a.createElement(
                      E.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [I.choice, I.choiceContainer] },
                      h.a.createElement(S.a, { style: [I.choice, { color: i }] }),
                      Object(C.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: a,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: I.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    a &&
                      h.a.createElement(
                        _.a,
                        { style: [I.choice, I.checkMarkContainer] },
                        h.a.createElement(k.a, { style: [I.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        I = w.a.create(function (e) {
          return {
            container: { alignItems: 'center', paddingVertical: e.spaces.space4, userSelect: 'none' },
            choice: { cursor: 'pointer', height: 45, width: 45 },
            checkMarkContainer: { alignItems: 'center', justifyContent: 'center', position: 'absolute' },
            choiceSelected: { color: e.colors.whiteOnColor, height: 25, width: 25 },
            choiceContainer: { borderRadius: e.borderRadii.infinite },
            transitionStyle: { transitionProperty: 'transform', transitionDuration: '0.1s' },
            focusedStyle: { outlineStyle: 'none' },
            hoverStyle: { transform: [{ scale: 1.1 }] },
            pressedStyle: { transform: [{ scale: 0.95 }] },
            nativeControl: b()(
              b()({}, w.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        O = x,
        A = 1,
        P = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(A, '_LABEL')), (A += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    r = t.layout,
                    o = t.onChange,
                    i = t.options,
                    c = t.value,
                    l = 'two-rows' === r,
                    s = [D.root, l && D.flexWrap],
                    u = l ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return h.a.createElement(
                    _.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return h.a.createElement(O, {
                        accessibilityLabel: n,
                        autoFocus: a && c === r,
                        colorName: r,
                        isSelected: c === r,
                        key: r,
                        name: e._colorPickerId,
                        onChange: o,
                        style: u,
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(P, 'defaultProps', { layout: 'one-row' })
      var D = w.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = P
    },
    vSJw: function (e, t, n) {
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
        g = n('HPNB'),
        y = n('P1r1'),
        v = n('rxPX'),
        E = Object(v.a)()
          .propsFromActions(function () {
            return { updateSettings: y.M }
          })
          .withAnalytics(),
        w = n('3XMw'),
        C = n.n(w),
        _ = n('huBF'),
        S = n('lzTJ'),
        k = n('rHpw'),
        x = n('cHvH'),
        I = n('uI9t'),
        O = S.f.ThemePrimaryColorNames,
        A = C.a.aefc5b20,
        P = [
          { accessibilityLabel: C.a.a52d0fdd, colorName: O.blue500 },
          { accessibilityLabel: C.a.d818cdd5, colorName: O.yellow500 },
          { accessibilityLabel: C.a.fee1cd64, colorName: O.magenta500 },
          { accessibilityLabel: C.a.cbed7fb2, colorName: O.purple500 },
          { accessibilityLabel: C.a.g697ec02, colorName: O.orange500 },
          { accessibilityLabel: C.a.a7c22049, colorName: O.green500 },
        ],
        D = E(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(l()(e), '_handleColorChange', function (t) {
                  var n = e.props,
                    a = n.analytics,
                    r = n.updateSettings
                  a.scribe({ component: 'color_picker', element: 'option', action: t }),
                    r({ themeColor: O[t] }),
                    k.a.setPrimaryColor(O[t])
                }),
                e
              )
            }
            return (
              i()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return b.a.createElement(x.a, null, function (t) {
                      var n = t.windowWidth
                      return b.a.createElement(_.a, { themeItem: 'color' }, function (t) {
                        return b.a.createElement(I.a, {
                          accessibilityLabel: A,
                          autoFocus: t,
                          layout: g.a.shouldRenderAsModal(n) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: P,
                          value: k.a.theme.primaryColorName,
                        })
                      })
                    })
                  },
                },
              ]),
              n
            )
          })(b.a.Component),
        )
      t.a = D
    },
  },
])
//# sourceMappingURL=WIPED
