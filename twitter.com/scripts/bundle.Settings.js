;(window.webpackJsonp = window.webpackJsonp || []).push([
  [89],
  {
    '3EFP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'd', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return c
        }),
        n.d(t, 'f', function () {
          return l
        })
      var a = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        i = 'Escape',
        c = 'ESC',
        l = 'Tab'
    },
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
    '5T6p': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('MWbm'),
        i = n('TIdA'),
        c = n('A91F'),
        l = n('t62R')
      var s = n('rHpw').a.create(function (e) {
        return {
          root: { flexDirection: 'row', flexShrink: 1, flexGrow: 1 },
          bodyColumn: {
            justifyContent: 'center',
            flexDirection: 'column',
            marginRight: e.spaces.space4,
            marginLeft: e.spaces.space12,
            flexShrink: 1,
          },
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 },
          largeCellThumbnail: { height: e.spaces.space56, width: e.spaces.space56 },
        }
      })
      t.a = function (e) {
        var t = e.image,
          n = e.style,
          a = e.supportText,
          u = e.title,
          d = e.withNewTypeaheadUI
        return r.a.createElement(
          o.a,
          { style: [s.root, n] },
          r.a.createElement(
            o.a,
            { style: [s.coverContainer, d ? s.largeCellThumbnail : s.cellThumbnail] },
            t ? r.a.createElement(i.a, { accessibilityLabel: '', aspectMode: c.a.SQUARE, image: t }) : null,
          ),
          r.a.createElement(
            o.a,
            { style: s.bodyColumn },
            a ? r.a.createElement(l.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, a) : null,
            r.a.createElement(l.b, { numberOfLines: 2, weight: 'bold' }, u),
          ),
        )
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
        h = n.n(p),
        m = n('KEM+'),
        f = n.n(m),
        b = (n('+KXO'), n('uFXj'), n('2G9S'), n('vrRf'), n('ERkP')),
        g = n.n(b),
        y = n('P1r1'),
        v = n('RqPI'),
        w = n('rxPX'),
        E = Object(w.a)()
          .propsFromState(function () {
            return { language: v.o, scale: y.y }
          })
          .propsFromActions(function () {
            return { updateSettings: y.M }
          })
          .withAnalytics(),
        _ = n('3XMw'),
        C = n.n(_),
        S = n('huBF'),
        k = n('MWbm'),
        x = n('lzTJ'),
        I = n('rHpw'),
        D = n('t62R'),
        T = n('9RkS'),
        A = x.f.ThemeScaleNames,
        F = Object.keys(A),
        O = F.length - 1,
        P = C.a.d8680056,
        L = C.a.eed02405,
        R = C.a.j59f0b93,
        M = C.a.b81aaad8,
        N = C.a.c704488f,
        B =
          ((a = {}),
          f()(a, A.xSmall, P),
          f()(a, A.small, L),
          f()(a, A.normal, R),
          f()(a, A.large, M),
          f()(a, A.xLarge, N),
          a),
        H = [P, L, R, M, N],
        j = C.a.e46dffa0,
        z = (function (e) {
          d()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(s()(e), '_handleSliderChanged', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.updateSettings,
                  o = F[t]
                a.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  I.a.setScale(A[o])
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
                      g.a.createElement(D.b, { size: 'subtext2' }, 'Aa'),
                      g.a.createElement(
                        k.a,
                        { style: V.slider },
                        g.a.createElement(T.a, {
                          accessibilityLabel: j,
                          accessibilityLabelValueText: B[I.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: H,
                          max: O,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: F.indexOf(I.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      g.a.createElement(D.b, { size: 'headline1' }, 'Aa'),
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
        U = E(z)
      t.a = U
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        g = n('P1r1'),
        y = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: g.n, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: g.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = n('v//M'),
        C = n('3XMw'),
        S = n.n(C),
        k = n('M2mT'),
        x = 'settingsDetailSave',
        I = n('mw9i'),
        D = n('0yYu'),
        T = n('/yvb'),
        A = n('rHpw'),
        F = S.a.i2209530,
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return b.a.createElement(_.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  c = t.withMarginBottom
                return b.a.createElement(
                  I.a,
                  { style: [P.contentRoot, c && P.withMarginBottom] },
                  n,
                  a
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(D.a, null),
                        b.a.createElement(
                          I.a,
                          { style: P.buttonContainer },
                          b.a.createElement(T.a, { disabled: r, onPress: a, style: P.button, testID: x, type: i }, o),
                        ),
                      )
                    : null,
                )
              }),
              m()(l()(e), '_handleFetch', function () {
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
      m()(O, 'defaultProps', { submitLabel: F, submitType: 'brandFilled', withMarginBottom: !0 })
      var P = A.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(A.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = E(O)
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ezhf')),
        b = n('ERkP'),
        g = n.n(b),
        y = n('HPNB'),
        v = n('v6aA'),
        w = n('P1r1'),
        E = n('rxPX'),
        _ = Object(E.a)()
          .propsFromActions(function () {
            return { updateSettings: w.M }
          })
          .withAnalytics(),
        C = n('3XMw'),
        S = n.n(C),
        k = n('huBF'),
        x = n('lzTJ'),
        I = n('rHpw'),
        D = n('cHvH'),
        T = n('fBvp'),
        A = x.f.ThemePaletteNames,
        F = S.a.ce8a8115,
        O = [
          { label: S.a.j59f0b93, accessibilityLabel: S.a.d3d48f39, backgroundName: A.light },
          { label: S.a.i76f67ed, backgroundName: A.dark },
          { label: S.a.c8f85960, backgroundName: A.darker },
        ],
        P = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_handleBackgroundChange', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.updateSettings
                a.scribe({ component: 'background_picker', element: 'option', action: t })
                var o = A[t]
                I.a.setPalette(o), r({ themeBackground: o }), f.c(t, e.context.featureSwitches)
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
                  return g.a.createElement(D.a, null, function (t) {
                    var n = t.windowWidth
                    return g.a.createElement(k.a, { themeItem: 'background' }, function (t) {
                      return g.a.createElement(T.a, {
                        accessibilityLabel: F,
                        autoFocus: t,
                        layout: y.a.shouldRenderAsModal(n) ? 'row' : 'column',
                        onChange: e._handleBackgroundChange,
                        options: O,
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
      m()(P, 'contextType', v.a)
      var L = _(P)
      t.a = L
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
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        b = n.n(f),
        g = (n('KqXw'), n('MvUL'), n('ERkP')),
        y = n.n(g),
        v = n('FPOR'),
        w = n('zh9S'),
        E = n('hqKg'),
        _ = n('0KEI'),
        C = n('oEGd'),
        S = n('H9MA'),
        k = Object(E.createSelector)(S.f, S.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        x = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: w.a,
          scribeAction: w.c,
          scribePageImpression: w.d,
          updateVideoAutoplay: S.i,
        },
        I = Object(C.f)(k, x),
        D = n('45mF'),
        T = n('3XMw'),
        A = n.n(T),
        F = n('7FtF'),
        O = n('3cwy'),
        P = n('MWbm'),
        L = n('3JAx'),
        R = n('t62R'),
        M = n('6v1f'),
        N = A.a.a776eed7,
        B = A.a.ede134f2,
        H = A.a.i859a9d3,
        j = { page: 'settings', section: 'autoplay' },
        z = function (e) {
          return { value: e, label: v.a[e] }
        },
        V = (function (e) {
          p()(n, e)
          var t = m()(n)
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
                  c(M.b[t]).catch(a(r()(r()({}, Object(D.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(z(M.b.Always)),
              M.c && o._options.push(z(M.b.WiFiOnly)),
              o._options.push(z(M.b.Off)),
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
                    (!t && Object(O.a)()) || this.props.history.replace('/settings/data')
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
                    { location: t, title: N },
                    y.a.createElement(
                      P.a,
                      null,
                      y.a.createElement(L.a, {
                        description: y.a.createElement(
                          y.a.Fragment,
                          null,
                          ''.concat(B, ' '),
                          y.a.createElement(R.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, H),
                        ),
                        label: N,
                        name: 'video_autoplay',
                        onChange: this._handleItemChanged,
                        options: this._options,
                        value: n || M.a,
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        g = n('k49u'),
        y = n('rxPX'),
        v = n('0KEI'),
        w = Object(y.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        E = n('kGix'),
        _ = n('v//M'),
        C = n('5FtR'),
        S = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), 'state', { verificationRequired: !1 }),
              m()(l()(e), '_handleFetch', function () {
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
                      m()(t, g.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, g.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, 'showToast', !1),
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
                    r = t === E.a.FAILED && a
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    r
                      ? b.a.createElement(C.a, { to: '/i/flow/verify_account_ownership' })
                      : b.a.createElement(_.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        k = w.forwardRef(S)
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
    Gfoi: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 20.5 20.5',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.03 18.72l-3.66-3.66c1.325-1.57 2.13-3.596 2.13-5.81 0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM2 9.25c0-4.135 3.365-7.5 7.5-7.5S17 5.115 17 9.25s-3.365 7.5-7.5 7.5S2 13.385 2 9.25z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 20.5, height: 20.5 }), (t.a = s)
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
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        b = n.n(f),
        g = (n('TJCb'), n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        y = n.n(g),
        v = n('RqPI'),
        w = n('rxPX'),
        E = Object(w.a)().propsFromState(function () {
          return { language: v.o }
        }),
        _ = n('3XMw'),
        C = n.n(_),
        S = n('fs1G'),
        k = n('rHpw'),
        x = n('BLtI'),
        I = n('MWbm'),
        D = 'Twitter',
        T = C.a.ea1c87a5({ mention: D }),
        A = {
          text: T,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, T.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: D,
                indices: [T.indexOf('@'), T.indexOf('@') + D.length + 1],
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
        F = (function (e) {
          p()(n, e)
          var t = m()(n)
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
            return (a._tweet = r()(r()(r()({}, A), l), {}, { lang: c || 'en' })), a
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return y.a.createElement(
                    I.a,
                    { accessibilityHidden: !0, style: e && O.tweetBorder },
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
      b()(F, 'defaultProps', { tweet: A, withTweetBorder: !1 })
      var O = k.a.create(function (e) {
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
        P = E(F)
      t.a = P
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
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        b = n.n(f),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        v = n.n(y),
        w = n('HPNB'),
        E = n('VAZu'),
        _ = n('wiP2'),
        C = n('Es6L'),
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
        D = n('MWbm'),
        T = n('yw4N'),
        A = n('TnY3'),
        F = n('cHvH'),
        O = n('3xLC'),
        P = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        L = (function (e) {
          p()(n, e)
          var t = m()(n)
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
                      D.a,
                      { style: I.fill },
                      v.a.createElement(
                        T.a,
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
                      r()(e, P))
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
                    h = n.rightControl,
                    m = n.screenType,
                    f = n.searchBoxOptions,
                    b = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    S = n.title,
                    k = n.titleIconCell,
                    x = n.titleIconCellSize,
                    T = n.withDetailOpen,
                    A = n.withSearchBox,
                    F = n.withTweetButton,
                    O = 'root' === m,
                    P = 'secondaryRoot' === m,
                    L = 'primaryDetail' === m,
                    R = (L && w) || (O && y),
                    M = O || (L && t),
                    N = O ? g.c : L ? g.a : void 0,
                    B = v.a.createElement(
                      D.a,
                      { style: I.appBarContainer },
                      v.a.createElement(E.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: M,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: b,
                        subtitle: R ? C : void 0,
                        title: S,
                        titleDomId: N,
                        titleIconCell: k,
                        titleIconCellSize: x,
                      }),
                    ),
                    H =
                      O || (P && T)
                        ? null
                        : v.a.createElement(_.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: o,
                            backLocation: i,
                            documentTitle: c,
                            headerless: l,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: f,
                            subtitle: C,
                            title: S,
                            withSearchBox: A,
                            withTweetButton: F,
                          })
                  return v.a.createElement(v.a.Fragment, null, H, B)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(L, 'contextType', O.a),
        b()(L, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(L)
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
          return w
        }),
        n.d(t, 'h', function () {
          return E
        }),
        n.d(t, 'd', function () {
          return _
        }),
        n.d(t, 'c', function () {
          return C
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
        h = 'rweb/'.concat(p),
        m = Object(d.a)(h, 'FETCH_DOWNLOADS'),
        f = Object(d.a)(h, 'CREATE_DOWNLOAD'),
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
            case m.SUCCESS:
              var a = n.payload || [],
                r = a.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return l()(
                l()({}, t),
                {},
                { fetchStatus: s.a.LOADED, downloads: l()(l()({}, t.downloads), {}, { all: a, nonFailed: r }) },
              )
            case m.REQUEST:
              return l()(l()({}, t), {}, { fetchStatus: s.a.LOADING })
            case m.FAILURE:
              return l()(l()({}, t), {}, { error: n.payload, fetchStatus: s.a.FAILED })
            case f.SUCCESS:
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
            case f.FAILURE:
              return l()(l()({}, t), {}, { fetchStatus: s.a.NONE })
            default:
              return t
          }
        }),
      )
      var v = function (e) {
          return e.userData.downloads
        },
        w = function (e) {
          return e.userData.fetchStatus
        },
        E = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        _ = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(d.b)(e, { request: a.UserData.fetchDownloads })({
              actionTypes: m,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        C = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(d.b)(e, { request: a.UserData.createDataDownload })({
              actionTypes: f,
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n.n(f),
        g = n('zh9S'),
        y = n('NyKK'),
        v = n('rxPX'),
        w = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: y.g, downloads: y.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: y.d,
              googleAnalyticsPageView: g.a,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: y.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        _ = n('XYIJ'),
        C = (n('6U7i'), n('3XMw')),
        S = n.n(C),
        k = n('aITJ'),
        x = n('MWbm'),
        I = n('/yvb'),
        D = n('eb3s'),
        T = n('855f'),
        A = S.a.cfd2f35d,
        F = S.a.fc5bfd95,
        O = S.a.gee8110d,
        P = S.a.c326f156,
        L = S.a.c9fe9b56,
        R = S.a.j54b679a,
        M = S.a.ac63840c,
        N = S.a.bcd9b0ed,
        B = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), 'state', { showConfirmation: !1 }),
              m()(l()(e), '_shouldDisplayConfirmation', !1),
              m()(l()(e), '_handleCancel', function () {
                e.setState({ showConfirmation: !1 })
              }),
              m()(l()(e), '_handleNeedsConfirmationActionCellPress', function () {
                e.setState({ showConfirmation: !0 })
              }),
              m()(l()(e), '_handleConfirm', function (t) {
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
                    l = t ? P : O
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
                              style: _.a.narrowButton,
                              type: 'brandFilled',
                            },
                            l,
                          ),
                          this.state.showConfirmation && !t
                            ? b.a.createElement(D.a, {
                                cancelButtonLabel: A,
                                confirmButtonLabel: F,
                                confirmButtonLink: { pathname: i || '', external: !0 },
                                headline: L,
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
                            style: _.a.narrowButton,
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
      m()(B, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? M({ size: T.a.getFormattedCount(t) })
          : N({ size: T.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var H = n('7FtF'),
        j = n('ClNT'),
        z = n('t62R'),
        V = n('rHpw'),
        U = n('v6aA'),
        W = S.a.f56af9cc,
        G = S.a.b2ed92c3,
        K = S.a.ce5d2c46,
        Y = S.a.dd9ec81f,
        q = S.a.c7227886,
        X = S.a.a0c3f812,
        J = S.a.ba2e82a1,
        Q = S.a.eea30bb4,
        Z = S.a.f2cde471,
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
              m()(l()(e), '_render', function () {
                var t = e.props.downloads.nonFailed
                return t.length ? b.a.createElement(x.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              m()(l()(e), '_renderDownloadItems', function (t, n) {
                return b.a.createElement(
                  x.a,
                  { key: n },
                  t.urls && 'COMPLETED' === t.status
                    ? t.urls.map(e._renderDownloadButtons.bind(l()(e), t))
                    : e._renderUnavailableButton(t),
                )
              }),
              m()(l()(e), '_handleConfirm', function (t) {
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
                    { location: a, title: W },
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
                    b.a.createElement(z.b, { size: 'title4' }, Y),
                    b.a.createElement(z.b, { color: 'gray700', style: ne.emptyStateDescription }, X),
                    b.a.createElement(
                      I.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: _.a.narrowButton,
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
                    { key: ''.concat(r), style: [_.a.narrowButtonRow, _.a.bottomBorder, _.a.labelContainer] },
                    b.a.createElement(
                      x.a,
                      null,
                      b.a.createElement(z.b, { weight: 'bold' }, ee({ currentIndex: r, count: o })),
                      e.generated
                        ? b.a.createElement(z.b, { color: 'gray700' }, Q({ date: J(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? b.a.createElement(z.b, { color: 'gray700' }, Z({ date: J(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? b.a.createElement(z.b, { color: 'gray700' }, $({ size: B.getSizeLabel(t.size_b) }))
                        : null,
                    ),
                    b.a.createElement(B, { disabled: !i, onConfirm: this._handleConfirm(t), url: t }),
                  )
                },
              },
              {
                key: '_renderUnavailableButton',
                value: function (e) {
                  return b.a.createElement(
                    x.a,
                    { style: [_.a.narrowButtonRow, _.a.bottomBorder, _.a.labelContainer] },
                    b.a.createElement(z.b, { weight: 'bold' }, ee({ currentIndex: 1, count: 1 })),
                    b.a.createElement(
                      I.a,
                      { disabled: !0, size: 'small', style: _.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? G : K,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      m()(te, 'contextType', U.a)
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
      t.default = E(te)
    },
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
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
        h = function (e) {
          return l.a.createElement(e.Icon, { style: m.thumbnail })
        },
        m = s.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function f(e) {
        var t = e.Icon,
          n = i()(e, d)
        return l.a.createElement(
          u.a,
          r()({}, n, { thumbnail: l.a.createElement(h, { Icon: t }), thumbnailSize: 'large' }),
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
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        b = n.n(f),
        g = n('ERkP'),
        y = n.n(g),
        v = n('FPOR'),
        w = n('P1r1'),
        E = n('rxPX'),
        _ = n('0KEI'),
        C = n('H9MA'),
        S = Object(E.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.c, videoAutoplay: C.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: C.b,
              updateDataSaverMode: C.g,
              updateSettings: w.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        k = n('45mF'),
        x = n('6v1f'),
        I = n('3XMw'),
        D = n.n(I),
        T = n('yoO3'),
        A = n('7FtF'),
        F = n('3cwy'),
        O = 'dataSaverBooleanItem',
        P = n('v6aA'),
        L = n('RKmr'),
        R = n('e0ey'),
        M = n('csss'),
        N = D.a.eafe3287,
        B = D.a.d76fe4fc,
        H = D.a.a57a341b,
        j = D.a.d88102cf,
        z = D.a.a776eed7,
        V = (function (e) {
          p()(n, e)
          var t = m()(n)
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
                    T.a,
                    null,
                    y.a.createElement(
                      A.a,
                      { location: n, screenType: 'secondaryDetail', title: N },
                      y.a.createElement(L.a, { description: B }),
                      y.a.createElement(R.a, {
                        checked: t,
                        helpText: j,
                        label: H,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: O,
                      }),
                      this._showVideoAutoplaySetting &&
                        y.a.createElement(M.a, {
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
      b()(V, 'contextType', P.a)
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        g = n('dDSG'),
        y = n('FPOR'),
        v = n('6/RC'),
        w = n('rxPX'),
        E = n('0KEI'),
        _ = n('2iUg'),
        C = n('P1r1'),
        S = n('H9MA'),
        k = Object(w.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: _.b,
              autoPollNewTweets: C.h,
              dataSaverMode: S.c,
              reducedMotionEnabled: C.w,
              videoAutoplay: S.f,
              highContrastEnabled: C.p,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              fetchAltTextPromptPreferenceIfNeeded: _.a,
              updateAltTextPromptPreference: _.c,
              updateSettings: C.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        x = n('6v1f'),
        I = n('3XMw'),
        D = n.n(I),
        T = n('yoO3'),
        A = n('7FtF'),
        F = n('OySi'),
        O = n('3cwy'),
        P = 'accessibilityScreen',
        L = n('MWbm'),
        R = n('38/B'),
        M = n('rHpw'),
        N = n('RKmr'),
        B = n('6vad'),
        H = n('e0ey'),
        j = n('0yYu'),
        z = n('csss'),
        V = n('v6aA'),
        U = D.a.e3719c15,
        W = D.a.a5208fad,
        G = D.a.d5b646bd,
        K = D.a.jfe6a3a0,
        Y = D.a.add55c97,
        q = D.a.a6d5b010,
        X = D.a.e8c72272,
        J = D.a.dba2cdd1,
        Q = D.a.d070244e,
        Z = D.a.icfa5e8b,
        $ = D.a.ae41b002,
        ee = D.a.e82b294e,
        te = D.a.ea284ab8,
        ne = D.a.a776eed7,
        ae = D.a.bd15d030,
        re = D.a.a2dfde67,
        oe = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              m()(
                l()(o),
                '_showAltTextPromptPreferenceSetting',
                o.context.featureSwitches.allTrue([
                  'responsive_web_alt_text_nudges_enabled',
                  'responsive_web_alt_text_nudges_settings_enabled',
                ]),
              ),
              m()(
                l()(o),
                '_showAutoPollingSetting',
                o.context.featureSwitches.isTrue('responsive_web_settings_timeline_polling_enabled'),
              ),
              m()(l()(o), '_handleReducedMotionChanged', function (e, t) {
                o._handleSettingChanged(e, t), R.a.setReducedMotion(t)
              }),
              m()(l()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), M.a.setHighContrast(t)
              }),
              m()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateAltTextPromptPreference,
                  c = t ? g.a.prompt : null
                a.scribe({ element: ''.concat(e, '_').concat(c || 'off'), action: 'selected' }),
                  i(c).catch(r({ showToast: !0 }))
              }),
              m()(l()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateSettings
                a.scribe({ element: e, action: t ? 'on' : 'off' }), i(m()({}, e, t)).catch(r({ showToast: !0 }))
              }),
              (o._showVideoAutoplaySetting = Object(O.a)()),
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
                    T.a,
                    null,
                    b.a.createElement(
                      A.a,
                      { location: r, screenType: 'secondaryDetail', title: U },
                      b.a.createElement(
                        L.a,
                        { testID: P },
                        b.a.createElement(N.a, { description: W }),
                        b.a.createElement(B.b, { text: G }),
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
                            L.a,
                            null,
                            b.a.createElement(j.a, null),
                            b.a.createElement(B.b, { text: K }),
                            b.a.createElement(H.a, {
                              checked: o || c,
                              disabled: c,
                              helpText: c ? $ : Z,
                              label: Q,
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
                            L.a,
                            null,
                            b.a.createElement(j.a, null),
                            b.a.createElement(B.b, { text: Y }),
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
                        L.a,
                        null,
                        b.a.createElement(j.a, null),
                        b.a.createElement(B.b, { text: ae }),
                        b.a.createElement(F.a, { label: re, link: 'https://help.twitter.com/resources/accessibility' }),
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
                        b.a.createElement(B.b, { text: q }),
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
      m()(oe, 'contextType', V.a)
      t.default = k(oe)
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('AQ79'),
        r = function (e, t) {
          return e[a.c] ? e[a.c].conversations[t] : null
        }
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
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return ye
      }),
        n.d(t, 'a', function () {
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('ho0z'), n('ERkP')),
        b = n.n(f),
        g = n('+Kfv'),
        y = 'typeaheadResult',
        v = n('v6aA'),
        w = n('AQOc'),
        E = n('V5Qi'),
        _ = n('G6rE'),
        C = n('rxPX'),
        S = function (e, t) {
          return t.conversationId
        },
        k = function (e, t) {
          return Object(E.a)(e, S(0, t))
        },
        x = Object(C.a)()
          .propsFromState(function () {
            return { conversationId: S, conversation: k, users: _.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(w.b)(t.data, void 0, n)), a
          }),
        I = n('aA19'),
        D = n('OhSZ'),
        T = n('5mJL'),
        A = n('rHpw'),
        F = A.a.create(function (e) {
          return {
            root: {
              cursor: 'pointer',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              width: '100%',
            },
            avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: '32px' },
            bodyColumn: { flexGrow: 7, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 },
          }
        }),
        O = x(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            a = e.isSelected,
            r = e.perspective,
            o = b.a.useContext(v.a).featureSwitches,
            i = o.isTrue('dm_vdl_enabled') && o.isTrue('dm_vdl_inbox_p0_enabled')
          return t
            ? b.a.createElement(
                T.a,
                {
                  avatarCell: b.a.createElement(I.a, { conversation: t, perspective: r, size: 'xLarge' }),
                  avatarCellStyle: F.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: F.bodyColumn,
                  style: [F.root, !a && n && F.disabled],
                },
                b.a.createElement(D.b, {
                  conversation: t,
                  perspective: r,
                  withParticipantsCount: !0,
                  withVDLRefresh: i,
                }),
                Ee({ isSelected: a }),
              )
            : null
        }),
        P = (n('uFXj'), n('MWbm')),
        L = n('LbZ7'),
        R = n('t62R'),
        M = n('9Xij'),
        N = n('TIdA'),
        B = n('A91F'),
        H = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.event,
                    n = e.image,
                    a = e.supportText
                  return b.a.createElement(
                    P.a,
                    { style: z.root },
                    b.a.createElement(
                      L.a,
                      { withGutter: !0 },
                      b.a.createElement(
                        P.a,
                        { style: z.bodyColumn },
                        a ? b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        b.a.createElement(R.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? b.a.createElement(
                            P.a,
                            { style: z.coverContainer },
                            b.a.createElement(
                              M.a,
                              { ratio: 1 },
                              b.a.createElement(N.a, { accessibilityLabel: '', aspectMode: B.a.SQUARE, image: n }),
                            ),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent),
        j = '100px',
        z = A.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: j,
              maxWidth: j,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        V = H,
        U = n('5T6p'),
        W =
          (n('z84I'),
          n('2G9S'),
          n('vrRf'),
          n('LW0h'),
          n('7x/C'),
          n('kFen'),
          n('qd3W'),
          n('M+/F'),
          n('jQ3i'),
          n('x4t0'),
          n('KqXw'),
          n('MvUL'),
          n('yyPN')),
        G = n.n(W)
      var K = n('FiRh'),
        Y = n('j7Bv'),
        q = n('EHV7'),
        X = n('Gfoi')
      var J = A.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            context: { alignItems: 'center', flexDirection: 'row' },
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.subtext2,
              paddingRight: e.spaces.space4,
              width: e.fontSizes.subtext2,
            },
            disabled: { backgroundColor: e.colors.gray0 },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
            searchIconCell: { flexDirection: 'row', alignItems: 'center' },
            wrapperCellStyle: { justifyContent: 'center' },
          }
        }),
        Q = function (e) {
          var t = b.a.useContext(v.a).featureSwitches,
            n = e.isDisabled,
            a = e.query,
            r = e.resultContext,
            o = e.showIcon,
            i = e.style,
            c = (function (e, t) {
              var n,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = G()(e),
                o = e.toLowerCase().indexOf(t.toLowerCase()),
                i = o + t.length
              if (0 === r.length) {
                var c = a ? [o > 0 ? [0, o] : void 0, [i, e.length]].filter(Boolean) : [[o, i]]
                n = [{ highlights: -1 !== o ? c : void 0, text: e, entityType: 'text', prefix: '' }]
              } else {
                var l = r.flatMap(function (t, n, a) {
                    var r = t.indices,
                      o = 0 === n ? 0 : a[n - 1].indices[1],
                      i = n === a.length - 1,
                      c = []
                    return (
                      o !== r[0] && c.push(e.slice(o, r[0])),
                      c.push(e.substring(r[0], r[1])),
                      i && e.length !== r[1] && c.push(e.slice(r[1])),
                      c
                    )
                  }),
                  s = 0,
                  u = l.map(function (e, t, n) {
                    s += t > 0 ? n[t - 1].length : 0
                    var a = e.length
                    return { runningTotal: s, containsQuery: -1 !== o && s + a >= o && s < i }
                  })
                n = l.map(function (e, t) {
                  var n,
                    r,
                    c = u[t],
                    l = c.containsQuery,
                    s = c.runningTotal,
                    d = e.includes('#')
                  if (a && !l) r = [[0, e.length]]
                  else if (l) {
                    var p = s < o ? o - s : 0,
                      h = s + e.length < i ? e.length : i - s,
                      m = d ? p - 1 : p,
                      f = d ? h - 1 : h
                    r = a
                      ? [m > 0 ? [0, m] : void 0, f !== e.length - 1 ? [f, e.length] : void 0].filter(Boolean)
                      : [[m, f]]
                  }
                  var b = d ? ''.concat(null == e ? void 0 : e.replace('#', '')) : e
                  return {
                    highlights: null !== (n = r) && void 0 !== n && n.length ? r : void 0,
                    text: b,
                    entityType: d ? 'hashtag' : 'text',
                    prefix: d ? '#' : '',
                  }
                })
              }
              return n
            })(e.topic, t.isTrue('responsive_web_typeahead_reverse_bolding_enabled') ? a : '', true),
            l = b.a.createElement(
              R.b,
              null,
              c.map(function (e, t) {
                return b.a.createElement(K.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            s = b.a.createElement(
              b.a.Fragment,
              null,
              l,
              r
                ? b.a.createElement(
                    P.a,
                    { style: J.context },
                    r && r.types[0] && 'followable_topic' === r.types[0].type
                      ? b.a.createElement(q.a, { style: J.icon })
                      : null,
                    b.a.createElement(R.b, { color: 'gray700' }, r.display_string || ' '),
                  )
                : null,
            )
          return b.a.createElement(
            P.a,
            { style: [J.root, n && J.disabled, i] },
            o
              ? (function (e) {
                  var t = b.a.createElement(Y.a, { Icon: X.a, color: 'neutral', size: 'xxxLarge', style: J.searchIcon })
                  return b.a.createElement(
                    T.a,
                    {
                      avatarCell: t,
                      avatarCellStyle: J.searchIconCell,
                      avatarSize: 'xxxLarge',
                      cellStyle: J.wrapperCellStyle,
                    },
                    e,
                  )
                })(s)
              : s,
          )
        },
        Z = (n('yH/f'), n('M0jS')),
        $ = function (e, t) {
          return Object(Z.c)(e, t.userId)
        },
        ee = Object(C.a)().propsFromState(function () {
          return { userSpace: $ }
        }),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('tocL'),
        re = 'TypeaheadUser',
        oe = n('GZwR'),
        ie = n('IMA+'),
        ce = ne.a.ae2205d1,
        le = ne.a.d960b55b,
        se = ne.a.fd06b02f,
        ue = Object.freeze({
          num_of_followers: ae.a.Follow,
          bio: ae.a.TextOnly,
          location: ae.a.Location,
          num_tweets: ae.a.NewTweets,
          follow_relationship: ae.a.Follow,
          followers_follow: ae.a.Follow,
          social_proof: ae.a.SocialProof,
          follow_relationship_mutual_follow: ae.a.FollowMutual,
          follow_relationship_followed: ae.a.FollowFollowed,
          follow_relationship_following: ae.a.FollowFollowing,
        }),
        de = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              m()(l()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.isDisabled,
                  a = t.item,
                  r = t.onItemClick
                r && r(a, !!n)
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
                    t = e.avatarUri,
                    n = e.decoration,
                    a = e.disabledMessage,
                    r = e.displayNameLabel,
                    o = e.isDisabled,
                    i = e.isProtected,
                    c = e.isVerified,
                    l = e.name,
                    s = e.screenName,
                    u = e.source,
                    d = e.userId,
                    p = e.userSpace,
                    h = e.withNewTypeaheadUI,
                    m = this.context.featureSwitches,
                    f = this._getSocialContext(),
                    g = this._getResultContext() || f,
                    y = u === oe.d.SearchBox,
                    v = p && m.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
                  return (
                    v && (v.accessibilityLabel = se({ screenName: s })),
                    b.a.createElement(ie.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: o ? a : void 0,
                      displayMode: h ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      displayNameLabel: r,
                      isDisabled: o,
                      isProtected: i,
                      isVerified: c,
                      name: l,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: y ? v : void 0,
                      screenName: s,
                      socialContext: g,
                      testID: re,
                      userId: d,
                      withInteractiveStyling: !1,
                      withLink: !1,
                    })
                  )
                },
              },
              {
                key: '_getSocialContext',
                value: function () {
                  var e = this.props.socialContext
                  if (e && e.following) {
                    var t = e.followed_by ? ce : le
                    return { contextType: ae.a.Follow, text: t }
                  }
                },
              },
              {
                key: '_getResultContext',
                value: function () {
                  var e = this.props,
                    t = e.resultContext,
                    n = e.source
                  if (t && t.display_string && t.types && n === oe.d.SearchBox)
                    return {
                      contextType: (t.types.length ? ue[t.types[0].type] : void 0) || ae.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      m()(de, 'contextType', v.a), m()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(de),
        he = n('htQn'),
        me = n('iySH'),
        fe = n('IMYl'),
        be = { viewType: 'typeahead_result' },
        ge = function (e) {
          return e.children
        }
      function ye(e) {
        return b.a.createElement(ge, { item: e.item }, b.a.createElement(ve, e))
      }
      var ve = (function (e) {
        u()(n, e)
        var t = p()(n)
        function n(e, a) {
          var o
          return (
            r()(this, n),
            (o = t.call(this, e, a)),
            m()(l()(o), '_onViewRef', function (e) {
              o._viewRef = e
              var t = o.props.onRef
              t && t(e)
            }),
            m()(l()(o), '_handleClick', function () {
              var e = o.props.item
              e.type !== oe.b.User && o.props.onClick && o.props.onClick(e, o.isDisabled)
            }),
            (o._withNewTypeaheadUI =
              o.context.featureSwitches.isTrue('responsive_web_account_search_readability_enabled') &&
              e.source === oe.d.SearchBox),
            o
          )
        }
        return (
          i()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this
                ;(this._loaded = !0),
                  this._viewRef &&
                    (this._rafId = window.requestAnimationFrame(function () {
                      e._viewRef && e._viewRef.setNativeProps({ style: { opacity: 1 } })
                    }))
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props.onRef
                t && t !== e.onRef && this._viewRef && t(this._viewRef)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._rafId && window.cancelAnimationFrame(this._rafId)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  n = e.isDisabled,
                  a = e.isFocused,
                  r = e.isInMultiSelect,
                  o = e.isSelected,
                  i = e.style
                return b.a.createElement(
                  g.a,
                  { behavioralEventContext: be },
                  b.a.createElement(
                    P.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!r || !o) || void 0,
                        selected: n ? void 0 : (r && o) || (!r && !!a),
                      },
                      nativeID: t,
                      testID: y,
                    },
                    b.a.createElement(
                      he.a,
                      {
                        accessibilityRole: r ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [a && we.focused, we.transitionStyles, this._loaded && we.loaded, i],
                        viewRef: this._onViewRef,
                      },
                      this._renderResult(),
                    ),
                  ),
                )
              },
            },
            {
              key: '_renderResult',
              value: function () {
                var e = this.props,
                  t = e.disabledMessage,
                  n = e.getUserDisplayNameLabel,
                  a = e.isDisabled,
                  r = e.isSelected,
                  o = e.item,
                  i = e.onClick,
                  c = e.renderUserDecoration,
                  l = e.source
                switch (o.type) {
                  case oe.b.User:
                    var s = o.data,
                      u = c ? c({ userId: s.id_str, isSelected: r }) : void 0,
                      d = n ? n(o, s) : void 0
                    return b.a.createElement(pe, {
                      avatarUri: s.profile_image_url_https,
                      canDm: !!s.can_dm,
                      canMediaTag: !!s.can_media_tag,
                      decoration: u || void 0,
                      disabledMessage: t,
                      displayNameLabel: d,
                      isDisabled: a,
                      isProtected: !!s.protected,
                      isVerified: !!s.verified,
                      item: o,
                      name: s.name,
                      onItemClick: i,
                      resultContext: s.result_context,
                      screenName: s.screen_name,
                      socialContext: s.social_context,
                      source: l,
                      userId: s.id_str,
                      withNewTypeaheadUI: this._withNewTypeaheadUI,
                    })
                  case oe.b.Event:
                    var p = o.data
                    return this._withNewTypeaheadUI
                      ? b.a.createElement(U.a, {
                          image: p.primary_image && p.primary_image.original_info,
                          style: we.itemPadding,
                          supportText: p.supporting_text,
                          title: p.topic,
                          withNewTypeaheadUI: !0,
                        })
                      : b.a.createElement(V, {
                          event: p.topic,
                          image: p.primary_image && p.primary_image.original_info,
                          supportText: p.supporting_text,
                        })
                  case oe.b.Hashtag:
                  case oe.b.Topic:
                    var h = this.props.query,
                      m = o.data,
                      f = l === oe.d.SearchBox
                    return b.a.createElement(Q, {
                      isDisabled: a,
                      query: h || '',
                      resultContext: m.result_context,
                      showIcon: f,
                      style: f ? we.itemPadding : void 0,
                      topic: m.topic,
                    })
                  case oe.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      b.a.createElement(O, {
                        conversationId: o.id,
                        isDisabled: a,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case oe.b.SettingGroup:
                    var g = o.data.text
                    return b.a.createElement(
                      P.a,
                      { style: we.navigationLink },
                      b.a.createElement(R.b, { style: we.content, weight: 'bold' }, g),
                      b.a.createElement(me.a, { style: we.icon }),
                    )
                  case oe.b.Setting:
                    var y = o.data.text
                    return b.a.createElement(
                      P.a,
                      { style: we.navigationLink },
                      b.a.createElement(R.b, { style: we.content }, y),
                      b.a.createElement(me.a, { style: we.icon }),
                    )
                  case oe.b.NoResult:
                    var v = o.data.text
                    return b.a.createElement(R.b, { style: we.noResult }, v)
                  default:
                    return null
                }
              },
            },
            {
              key: 'isDisabled',
              get: function () {
                return !!this.props.isDisabled
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      m()(ve, 'contextType', v.a)
      var we = A.a.create(function (e) {
          return {
            checkIcon: { color: e.colors.primary },
            navigationLink: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
            noResult: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            loaded: { opacity: 1 },
            focused: { backgroundColor: e.colors.gray0 },
            transitionStyles: { transitionProperty: 'opacity', transitionDuration: '250ms', opacity: 0 },
          }
        }),
        Ee = function (e) {
          return e.isSelected ? b.a.createElement(fe.a, { accessibilityHidden: !0, style: we.checkIcon }) : null
        }
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('hBpG'), n('7x/C'), n('ERkP')),
        b = n.n(f),
        g = n('mrHL'),
        y = n('yiKp'),
        v = n.n(y),
        w = n('m3Bd'),
        E = n.n(w),
        _ = (n('+KXO'), n('NeAX')),
        C = n('RqPI'),
        S = n('hqKg'),
        k = n('kGix'),
        x = n('O0uF'),
        I = n('G6rE'),
        D = n('rxPX'),
        T = n('0KEI'),
        A = ['featureSwitches'],
        F = Object(S.createSelector)(C.m, _.selectPreferencesFetchStatus, function (e, t) {
          return e ? k.a.LOADED : t
        }),
        O = Object(D.a)()
          .propsFromState(function () {
            return {
              fetchStatus: F,
              loggedInUser: I.e.selectLoggedInUser,
              isActiveCreator: C.l,
              personalizationPreferences: _.selectUserPreferences,
              featureSwitches: x.f,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches,
              n = E()(e, A)
            return v()({ withEditableFSes: Object.keys(t.debug).length > 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: _.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        P = n('v//M'),
        L = n('uD2z'),
        R = n('3XMw'),
        M = n.n(R),
        N = n('KQzH'),
        B = n('yoO3'),
        H = n('cnVF'),
        j = n('K1iM'),
        z = n.n(j),
        V = n('ddV6'),
        U = n.n(V),
        W = (n('tVqn'), n('jwue'), n('+oxZ'), n('Grlw'))
      function G(e) {
        var t = e.isActiveCreator,
          n = e.results,
          a = e.setting,
          r = e.type
        if (!(a.id === W.a.Monetization || a.id === W.a.SuperFollows) || t) {
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
      var K = n('VY6S'),
        Y = n('Es6L'),
        q = (n('uFXj'), n('3EFP')),
        X = n('woHV'),
        J = n('tAeL'),
        Q = n('MWbm'),
        Z = n('pf9B'),
        $ = n('xoZN'),
        ee = n('/yvb'),
        te = n('6OUF'),
        ne = n('rHpw'),
        ae = n('oEoC'),
        re = n('95Se'),
        oe = n('VwDm'),
        ie = M.a.f065ba8c,
        ce = M.a.b08821f3,
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
            h = e.onFocus,
            m = e.onItemClick,
            f = e.onQueryChange,
            g = e.onSubmit,
            y = e.placeholder,
            v = e.renderEmptyState,
            w = e.renderInSearchField,
            E = e.rounded,
            _ = e.shouldAutoFocus,
            C = e.shouldClearOnSelect,
            S = e.shouldFocusOnClear,
            k = e.shouldRenderEmptyState,
            x = e.source,
            I = e.style,
            D = e.testID,
            T = b.a.useRef(null),
            A = b.a.useRef(null),
            F = b.a.useRef(null),
            O = b.a.useRef(null),
            P = b.a.useState(!1),
            L = U()(P, 2),
            R = L[0],
            M = L[1],
            N = b.a.useState(null),
            B = U()(N, 2),
            H = B[0],
            j = B[1],
            z = b.a.useState(Object(ae.b)()),
            V = U()(z, 2),
            W = V[0],
            G = V[1],
            K = b.a.useState(function () {
              return Object(ae.f)()
            }),
            Y = U()(K, 1)[0],
            ne = b.a.useState(''),
            se = U()(ne, 2),
            ue = se[0],
            de = se[1],
            pe = function (e) {
              var t,
                n = Z.a.getCount() > 0
              ;(null != T && null !== (t = T.current) && void 0 !== t && t.contains(e.target)) || n || (R && fe())
            }
          b.a.useEffect(function () {
            return (
              window.document.addEventListener('click', pe, !0),
              function () {
                window.document.removeEventListener('click', pe, !0)
              }
            )
          })
          var he = function () {
              if (null != A && A.current) {
                var e = A.current.getBoundingClientRect().bottom
                e !== H && j(e)
              }
            },
            me = function (e) {
              de(e), null == f || f(e)
            },
            fe = function () {
              M(!1), null == p || p()
            },
            be = function () {
              var e
              fe(), null == F || null === (e = F.current) || void 0 === e || e.blur()
            },
            ge = function (e, t) {
              var n,
                a,
                r = C ? '' : ue
              ;(M(!1), F.current) &&
                (C && S
                  ? F.current.focus()
                  : (C && (null === (n = F.current.textInput) || void 0 === n || n.clear()),
                    null === (a = F.current) || void 0 === a || a.blur()))
              me(r), null == p || p(), null == m || m(e, t)
            },
            ye = function () {
              G(Object(ae.b)())
            },
            ve = R || t
          return b.a.createElement(
            Q.a,
            { onLayout: he, ref: T, style: [le.root, I] },
            b.a.createElement(
              $.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(ae.g)(e)) {
                    var a, r
                    if (n === q.a)
                      return null === (a = O.current) || void 0 === a || a.focusNext(), void e.preventDefault()
                    if (n === q.b)
                      return null === (r = O.current) || void 0 === r || r.focusPrevious(), void e.preventDefault()
                    if (n === q.d) return fe(), void e.preventDefault()
                    if (n !== q.f) {
                      var o
                      if (n === q.c && null !== (t = O.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = O.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      R || M(!0)
                    } else fe()
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
                      null == F || null === (t = F.current) || void 0 === t || t.blur(),
                      M(!1),
                      null == p || p(),
                      null == g || g()
                  },
                  style: le.wrapper,
                },
                b.a.createElement(
                  Q.a,
                  { ref: A, style: [le.inputContainer, i] },
                  ve && u
                    ? b.a.createElement(ee.a, {
                        accessibilityLabel: ce,
                        icon: b.a.createElement(re.a, null),
                        onClick: function (e) {
                          null == e || e.stopPropagation(), fe(), null == u || u()
                        },
                        style: le.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  b.a.createElement(
                    Q.a,
                    { onClick: d, style: le.inputWrapper },
                    b.a.createElement(te.a, {
                      Icon: oe.a,
                      ariaActiveDescendant: W,
                      ariaAutocomplete: 'list',
                      ariaExpanded: ve,
                      ariaLabel: ie,
                      ariaOwns: Y,
                      ariaRole: 'combobox',
                      autoComplete: 'off',
                      autoCorrect: !1,
                      autoFocus: _,
                      contentBelow: null == w ? void 0 : w(),
                      focusOnClear: S,
                      isCompact: c,
                      onChange: function (e) {
                        me(e.target.value), he()
                      },
                      onClear: function () {
                        me('')
                      },
                      onFocus: function () {
                        M(!0), he(), null == h || h()
                      },
                      onLayout: he,
                      placeholder: y,
                      ref: F,
                      returnKeyType: 'search',
                      spellCheck: 'false',
                      styleType: E ? 'pill' : 'selection',
                      testID: D,
                      value: ue,
                      withClearButton: !a && R,
                    }),
                  ),
                ),
                b.a.createElement(
                  Q.a,
                  { style: [le.typeaheadContainer, !E && le.topBorder] },
                  ve
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [le.dropdown, H ? Object(ae.d)(H) : le.wideModeDropdown])
                            : 'overlap' === o && (e = l ? le.modalDropdown : [le.dropdown, le.wideModeDropdown]),
                          v && k
                            ? v({
                                ariaDescendantId: W,
                                domId: Y,
                                onDismiss: be,
                                onItemFocusChanged: ye,
                                ref: O,
                                style: e,
                              })
                            : b.a.createElement(J.a, {
                                ariaDescendantId: W,
                                domId: Y,
                                items: s,
                                onItemClick: ge,
                                onItemFocusChanged: ye,
                                ref: O,
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
        he = n('t62R'),
        me = n('FIs5'),
        fe = M.a.d94f12b5,
        be = M.a.b92a21d8,
        ge = M.a.c170a564,
        ye = M.a.ba8f6f81
      function ve(e) {
        var t = e.isActiveCreator,
          n = e.isSearching,
          a = e.onChange,
          r = e.searchIndex,
          o = Object(de.a)('settings_revamp_search_bar_enabled'),
          i = Object(pe.f)(),
          c = b.a.useState(''),
          l = U()(c, 2),
          s = l[0],
          u = l[1],
          d = b.a.useState([]),
          p = U()(d, 2),
          h = p[0],
          m = p[1],
          f = s.toLocaleLowerCase().trim(),
          g = Boolean(f.length)
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
                          Object(W.b)(f, e) &&
                            (r || ((r = !0), G({ results: n, setting: a, type: 'setting_group', isActiveCreator: t })),
                            G({ results: n, setting: e, type: 'setting', isActiveCreator: t }))
                        }),
                        !r &&
                          Object(W.b)(f, a) &&
                          G({ results: n, setting: a, type: 'setting_group', isActiveCreator: t })
                    }
                    for (a.s(); !(e = a.n()).done; ) o()
                  } catch (i) {
                    a.e(i)
                  } finally {
                    a.f()
                  }
                  m(n)
                })()
              : m([])
          },
          [f, g, r, t],
        )
        var y = b.a.useMemo(
          function () {
            return Object(K.a)(function (e) {
              a(!0), u(e)
            }, 100)
          },
          [a],
        )
        if (!o) return null
        return b.a.createElement(se, {
          alwaysOpen: n,
          dropdownPosition: 'inline',
          inputStyle: we.input,
          items: h,
          onBackClicked: Object(Y.a)()
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
              ? b.a.createElement(me.a, { header: be({ query: s }), message: ge, style: t })
              : b.a.createElement(
                  Q.a,
                  { style: [t, we.emptyState] },
                  b.a.createElement(he.b, { align: 'center', color: 'gray700' }, fe),
                )
          },
          rounded: !0,
          shouldRenderEmptyState: n && (!g || 0 === h.length),
          source: ue.d.SearchBox,
        })
      }
      var we = ne.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
          }
        }),
        Ee = n('7FtF'),
        _e = n('iCwC'),
        Ce = n('3cwy'),
        Se = 'loggedOutPrivacySection',
        ke = 'accountLink',
        xe = 'accountAccessLink',
        Ie = 'privacyAndSafetyLink',
        De = 'notificationsLink',
        Te = 'accessibilityLink',
        Ae = 'aboutLink',
        Fe = 'displayLink',
        Oe = 'dataLink',
        Pe = n('6vad'),
        Le = n('0yYu'),
        Re = n('v6aA'),
        Me = n('AS3p'),
        Ne = M.a.e3719c15,
        Be = M.a.cad53943,
        He = M.a.bb081ea1,
        je = M.a.e95b9448,
        ze = M.a.eb75875d,
        Ve = M.a.c4881c66,
        Ue = M.a.eafe3287,
        We = M.a.f458a3b1,
        Ge = M.a.e8f57e07,
        Ke = M.a.b7fde2b8,
        Ye = M.a.ja94f34d,
        qe = M.a.d0b74a5a,
        Xe = M.a.gd4302ec,
        Je = M.a.bdc6f5b7,
        Qe = M.a.f8645654,
        Ze = M.a.cf9b1669,
        $e = M.a.bdfa2b8c,
        et = M.a.df483b47,
        tt = M.a.d299431b,
        nt = M.a.ed21f885,
        at = M.a.gaac7109,
        rt = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              m()(l()(o), '_renderLoggedIn', function () {
                var e = o.state.isSearching
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  o._renderSearchInput(),
                  e
                    ? null
                    : b.a.createElement(
                        Q.a,
                        { accessibilityRole: 'tablist' },
                        b.a.createElement(N.a, { label: Je, link: '/settings/account', testID: ke }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        b.a.createElement(N.a, {
                          label: Qe,
                          link: '/settings/security_and_account_access',
                          testID: xe,
                        }),
                        b.a.createElement(N.a, { label: Be, link: '/settings/privacy_and_safety', testID: Ie }),
                        o._renderReportCenter(),
                        b.a.createElement(N.a, { label: ze, link: '/settings/notifications', testID: De }),
                        b.a.createElement(N.a, {
                          label: Ze,
                          link: '/settings/accessibility_display_and_languages',
                          testID: Te,
                        }),
                        b.a.createElement(N.a, { label: $e, link: '/settings/about', testID: Ae }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              m()(l()(o), '_renderLoggedOut', function () {
                var e = Object(g.b)(H.u, o.context.featureSwitches)
                return b.a.createElement(
                  Q.a,
                  { testID: Se },
                  b.a.createElement(Pe.b, { text: We }),
                  b.a.createElement(N.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Ge,
                    link: '/settings/account/personalization',
                  }),
                  b.a.createElement(N.a, { label: Ke, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? b.a.createElement(N.a, { description: Xe, label: qe, link: '/settings/cookie_preferences' })
                    : null,
                  b.a.createElement(he.b, { style: _e.a.descriptionText }, Ye),
                  o._renderGeneral(),
                )
              }),
              m()(l()(o), '_renderSearchInput', function () {
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
              m()(l()(o), '_renderGeneral', function () {
                return b.a.createElement(
                  Q.a,
                  null,
                  b.a.createElement(Le.a, null),
                  b.a.createElement(Pe.b, { text: je }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: Ve, link: '/settings/display', testID: Fe })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: Ue, link: '/settings/data', testID: Oe })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: Ne, link: '/settings/accessibility', testID: Te })
                    : null,
                  b.a.createElement(N.a, { label: $e, link: '/settings/about', testID: Ae }),
                )
              }),
              m()(l()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? b.a.createElement(N.a, { label: et, link: '/settings/feature_switches' })
                  : null
              }),
              m()(l()(o), '_renderMonetization', function () {
                var e,
                  t = o.props,
                  n = t.isActiveCreator,
                  a =
                    null ===
                      (e = t.searchIndex.find(function (e) {
                        return e.id === W.a.Monetization
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return n && a ? b.a.createElement(N.a, { label: tt, link: a }) : null
              }),
              m()(l()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === W.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? b.a.createElement(N.a, { label: nt, link: t }) : null
              }),
              m()(l()(o), '_renderReportCenter', function () {
                return o.context.featureSwitches.isTrue('report_center_mvp_r2_enabled')
                  ? b.a.createElement(N.a, { label: at, link: '/settings/report-center' })
                  : null
              }),
              m()(l()(o), '_handleBackClicked', function () {
                var e = o.props.history
                o.state.isSearching ? o.setState({ isSearching: !1 }) : e.goBack()
              }),
              m()(l()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              m()(l()(o), '_isUserLoggedIn', function () {
                return !!o.props.loggedInUser
              }),
              (o._showVideoAutoplaySetting = Object(Ce.a)()),
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
                    B.a,
                    null,
                    b.a.createElement(
                      Ee.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: He },
                      this._isUserLoggedIn() || Object(Me.c)(this.context.featureSwitches) === Me.a.AcceptAllCookies
                        ? b.a.createElement(P.a, {
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
                  return Object(L.a)(e)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      m()(rt, 'contextType', Re.a)
      t.default = O(rt)
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
        h = i.a.daef29b7,
        m = i.a.i0dd9b9d,
        f = { page: 'settings', section: 'mute' }
      t.default = function (e) {
        var t = e.location
        return r.a.createElement(
          s.c,
          { namespace: f },
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              u.a,
              { location: t, title: p },
              r.a.createElement(
                d.a,
                null,
                r.a.createElement(l.a, { label: h, link: '/settings/muted/all' }),
                r.a.createElement(l.a, { label: m, link: '/settings/muted_keywords' }),
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
        h = n('iCwC'),
        m = 'aboutScreen',
        f = n('MWbm'),
        b = n('6vad'),
        g = n('csss'),
        y = n('RKmr'),
        v = n('0yYu'),
        w = n('t62R'),
        E = u.a.cedbb01c,
        _ = u.a.b4f917d0,
        C = u.a.bdfa2b8c,
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
            { location: t, screenType: 'primaryDetail', title: C },
            r.a.createElement(
              f.a,
              { testID: m },
              r.a.createElement(y.a, { description: S }),
              r.a.createElement(x, null),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: E }),
              o.map(function (e, t) {
                return r.a.createElement(g.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
              c.map(function (e) {
                return r.a.createElement(
                  w.b,
                  { color: 'gray700', key: e.text, size: 'subtext2', style: [h.a.infoText, h.a.bottomBorder] },
                  e.text,
                )
              }),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: _ }),
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
        return O
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('z84I'), n('ERkP')),
        b = n.n(f),
        g = n('yiKp'),
        y = n.n(g),
        v = (n('ho0z'), n('uFXj'), n('t62R')),
        w = n('IMYl'),
        E = n('cm6r'),
        _ = n('rHpw'),
        C = n('lzTJ'),
        S = n('k/Ka'),
        k = n('MWbm'),
        x = n('r7ya'),
        I = n('I4+6'),
        D = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              m()(l()(e), '_radioRef', b.a.createRef()),
              m()(l()(e), '_handleChange', function (t) {
                var n = e.props,
                  a = n.backgroundName,
                  r = n.isSelected,
                  o = n.onChange
                o && !r && o(a)
              }),
              (e._selectedInteractiveStyles = I.a.generate({
                backgroundColor: _.a.theme.colors.transparent,
                color: _.a.theme.colors.primary,
                withFocusWithinFocusRing: !0,
              })),
              (e._unselectedInteractiveStyles = I.a.generate({
                backgroundColor: _.a.theme.colors.transparent,
                color: _.a.theme.colors.gray700,
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
                    E.a,
                    { focusable: !1, interactiveStyles: null, style: [T.root, this._getButtonStyles()] },
                    function (t) {
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(
                          E.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: T.radioOuterCircle,
                          },
                          b.a.createElement(
                            k.a,
                            { style: [T.radioInnerCircle, e._getCircleStyles()] },
                            a ? b.a.createElement(w.a, { style: T.checkMark }) : null,
                          ),
                        ),
                        b.a.createElement(
                          k.a,
                          { accessibilityHidden: !0, style: T.text },
                          b.a.createElement(v.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, r),
                        ),
                        Object(S.a)('input', {
                          accessibilityLabel: n || r,
                          checked: a,
                          name: o,
                          style: T.nativeControl,
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
                    borderColor: n ? _.a.theme.colors.primary : _.a.theme.colors.gray200,
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
                    backgroundColor: n ? _.a.theme.colors.primary : _.a.theme.colors.transparent,
                    borderColor: n ? _.a.theme.colors.primary : this._getPalette(t).gray300,
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
                  return e === C.b.dark ? x.a : e === C.b.darker ? x.b : x.c
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        T = _.a.create(function (e) {
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
              y()({}, _.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        A = D,
        F = 1,
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              m()(l()(e), '_handleItemChanged', function (t) {
                return function () {
                  ;(0, e.props.onChange)(t)
                }
              }),
              (e._backgroundPickerName = 'background_picker_'.concat(F)),
              (F += 1),
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
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: 'row' === r ? P.row : P.column },
                    o.map(function (t) {
                      return b.a.createElement(A, {
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
        P = _.a.create(function (e) {
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
        h = n('vSJw'),
        m = n('KNZn'),
        f = n('MWbm'),
        b = n('t62R'),
        g = n('0yYu'),
        y = n('6vad'),
        v = n('rHpw'),
        w = c.a.c4881c66,
        E = c.a.a5ce82a4,
        _ = c.a.ce494bb3,
        C = c.a.c783d45e,
        S = c.a.h306a357,
        k = function (e) {
          var t = e.location
          return r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: w },
              r.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: x.aboutText, testID: u }, E),
              r.a.createElement(m.a, null),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: _ }),
              r.a.createElement(d.a, null),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: C }),
              r.a.createElement(f.a, { style: x.colorPicker }, r.a.createElement(h.a, null)),
              r.a.createElement(g.a, null),
              r.a.createElement(y.b, { text: S }),
              r.a.createElement(f.a, { style: x.backgroundPicker }, r.a.createElement(p.a, null)),
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        g = n('rxPX'),
        y = n('z2Pn'),
        v = Object(g.a)()
          .propsFromState(function () {
            return { themeFocus: y.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: y.k }
          }),
        w = n('MWbm'),
        E = n('3EFP'),
        _ = v(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                m()(l()(e), '_handleKeyDown', function (t) {
                  var n = e.props,
                    a = n.setThemeFocus,
                    r = n.themeItem
                  t.key === E.d || t.key === E.e ? a('') : a(r)
                }),
                m()(l()(e), '_handleMouseDown', function () {
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
                      w.a,
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
      t.a = _
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
          return we
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        g = n('NeAX'),
        y = n('P1r1'),
        v = n('hqKg'),
        w = n('uD2z'),
        E = n('li/m'),
        _ = n('G6rE'),
        C = n('0KEI'),
        S = n('oEGd'),
        k = Object(v.createSelector)(
          g.selectPreferencesFetchStatus,
          g.selectUserPreferences,
          y.g,
          E.d,
          function (e, t, n, a) {
            return { fetchStatus: e, personalizationString: Object(w.a)(t), settings: n, hasCommunityMemberships: a }
          },
        ),
        x = {
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
          patchUser: _.e.patchUser,
          updateSettings: y.M,
        },
        I = Object(S.f)(k, x),
        D = n('v//M'),
        T = n('3XMw'),
        A = n.n(T),
        F = n('yoO3'),
        O = n('7FtF'),
        P = 'privacyAndSafetyScreen',
        L = n('MWbm'),
        R = n('Irs7'),
        M = n('v6aA'),
        N = n('6vad'),
        B = n('e0ey'),
        H = n('csss'),
        j = n('0yYu'),
        z = n('eb3s'),
        V = A.a.cad53943,
        U = A.a.bab1f8b0,
        W = A.a.f5e59e90,
        G = A.a.i0310b4e,
        K = { headline: A.a.j8bf07ab, text: A.a.ca8034b3, confirmButtonLabel: A.a.c5d4192a },
        Y = { headline: A.a.gea6cc19, text: A.a.j7fc0afc, confirmButtonLabel: A.a.f527b322 },
        q = A.a.jabb9c9a,
        X = A.a.f56d108e,
        J = { all: A.a.d165c992, following: A.a.ea339390, none: A.a.e3a761ee },
        Q = A.a.d4986f85,
        Z = A.a.h6ce12ed,
        $ = A.a.ebcb68ae,
        ee = A.a.afdf29b8,
        te = A.a.e1929815,
        ne = A.a.d9172541,
        ae = A.a.e84e1c41,
        re = A.a.hefdc08f,
        oe = A.a.b608c1a0,
        ie = A.a.j2c3033a,
        ce = A.a.fd4d9068,
        le = A.a.fd4d9068,
        se = A.a.hfb77cf5,
        ue = A.a.fc1d217b,
        de = A.a.acdcc101,
        pe = A.a.hfc86556,
        he = A.a.a5f32aa2,
        me = A.a.eb75875d,
        fe = A.a.aea62567,
        be = A.a.e8f57e07,
        ge = A.a.e8f57e07,
        ye = A.a.b59540c2,
        ve = { all: A.a.bd34d8f8, following: A.a.d22dad9e, none: A.a.ad41e8b3 },
        we = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(
                l()(e),
                'showPeriscopeAuthOption',
                e.context.featureSwitches.isTrue('responsive_web_live_video_parity_periscope_auth_enabled'),
              ),
              m()(l()(e), 'state', { showProtectedConfirmation: !1 }),
              m()(l()(e), '_handleItemChanged', function (t, n) {
                e._updateSettings(m()({}, t, n))
              }),
              m()(l()(e), '_handleDMFromChanged', function (t, n) {
                e._updateSettings(m()({}, t, n ? 'all' : 'following'))
              }),
              m()(l()(e), '_handleDMQualityFilterChanged', function (t, n) {
                e._updateSettings(m()({}, t, n ? 'enabled' : 'disabled'))
              }),
              m()(l()(e), '_handleDMReceiptChanged', function (t, n) {
                e._updateSettings(m()({}, t, n ? 'all_enabled' : 'all_disabled'))
              }),
              m()(l()(e), '_handleProtectedChanged', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  o = a.patchUser
                n
                  ? e.setState({ showProtectedConfirmation: !0 })
                  : e._updateSettings(m()({}, t, !1)).then(function () {
                      r.scribe({ section: 'privacy', element: 'protected', action: 'disable' }),
                        e.context.loggedInUserId && o(e.context.loggedInUserId, m()({}, t, !1))
                    })
              }),
              m()(l()(e), '_handleProtectedCancel', function () {
                e.setState({ showProtectedConfirmation: !1 })
              }),
              m()(l()(e), '_handleProtectedConfirm', function () {
                e.setState({ showProtectedConfirmation: !1 })
                var t = e.props,
                  n = t.analytics,
                  a = t.patchUser
                e._updateSettings({ protected: !0 }).then(function () {
                  n.scribe({ section: 'privacy', element: 'protected', action: 'enable' }),
                    e.context.loggedInUserId && a(e.context.loggedInUserId, { protected: !0 })
                })
              }),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.personalizationString,
                  a = t.settings,
                  r = J[a.allow_media_tagging],
                  o = ve[a.allow_contributor_request]
                return b.a.createElement(
                  L.a,
                  null,
                  b.a.createElement(N.b, { text: U }),
                  b.a.createElement(B.a, {
                    checked: a.protected,
                    helpText: G,
                    label: W,
                    learnMoreLink: 'https://support.twitter.com/articles/14016',
                    name: 'protected',
                    onChange: e._handleProtectedChanged,
                  }),
                  b.a.createElement(H.a, { label: q, link: '/settings/location' }),
                  b.a.createElement(H.a, { description: r, label: X, link: '/settings/tagging' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(N.b, { text: Q }),
                  b.a.createElement(B.a, {
                    checked: 'all' === a.allow_dms_from,
                    helpText: $,
                    label: Z,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receive',
                    name: 'allow_dms_from',
                    onChange: e._handleDMFromChanged,
                  }),
                  b.a.createElement(B.a, {
                    checked: 'enabled' === a.dm_quality_filter,
                    helpText: te,
                    label: ee,
                    learnMoreLink: 'https://support.twitter.com/articles/14606',
                    name: 'dm_quality_filter',
                    onChange: e._handleDMQualityFilterChanged,
                  }),
                  b.a.createElement(B.a, {
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
                      b.a.createElement(N.b, { text: re }),
                      b.a.createElement(B.a, {
                        checked: a.allow_authenticated_periscope_requests,
                        helpText: ie,
                        label: oe,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  b.a.createElement(j.a, null),
                  b.a.createElement(N.b, { text: ce }),
                  b.a.createElement(H.a, { label: le, link: '/settings/contacts' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(N.b, { text: se }),
                  b.a.createElement(B.a, {
                    checked: a.display_sensitive_media,
                    label: ue,
                    name: 'display_sensitive_media',
                    onChange: e._handleItemChanged,
                  }),
                  b.a.createElement(B.a, {
                    checked: a.nsfw_user,
                    disabled: a.nsfw_admin,
                    label: de,
                    name: 'nsfw_user',
                    onChange: e._handleItemChanged,
                  }),
                  b.a.createElement(H.a, { label: pe, link: '/settings/mute' }),
                  b.a.createElement(H.a, { label: he, link: '/settings/blocked/all' }),
                  b.a.createElement(H.a, { label: me, link: '/settings/notifications' }),
                  b.a.createElement(H.a, { label: fe, link: '/settings/search' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(N.b, { text: ge }),
                  b.a.createElement(H.a, { description: n, label: be, link: '/settings/account/personalization' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(N.b, { key: 'header', text: ye }),
                  b.a.createElement(H.a, { description: o, key: 'pivot', label: ye, link: '/settings/teams' }),
                )
              }),
              m()(l()(e), '_handleFetchPreferences', function () {
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
                    r = n ? Y : K
                  return b.a.createElement(
                    L.a,
                    { testID: P },
                    b.a.createElement(
                      O.a,
                      { location: a, screenType: 'primaryDetail', title: V },
                      b.a.createElement(
                        F.a,
                        null,
                        b.a.createElement(D.a, {
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
      m()(we, 'contextType', M.a)
      t.default = Object(R.a)(I(we), { page: 'settings', section: 'safety' })
    },
    tAeL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return N
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        b = n.n(f),
        g = n('+Kfv'),
        y = n('0yYu'),
        v = n('7nmT'),
        w = n.n(v),
        E = n('ddV6'),
        _ = n.n(E),
        C = n('3XMw'),
        S = n.n(C),
        k = n('kIAd'),
        x = n('JYMr'),
        I = n('rHpw'),
        D = S.a.f2b3fe06,
        T = I.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        A = function (e) {
          var t = e.isLoading,
            n = b.a.useState(!1),
            a = _()(n, 2),
            r = a[0],
            o = a[1]
          return (
            b.a.useEffect(
              function () {
                var e
                return (
                  t
                    ? (e = setTimeout(function () {
                        return o(!0)
                      }, k.a))
                    : o(!1),
                  function () {
                    return clearTimeout(e)
                  }
                )
              },
              [t],
            ),
            b.a.createElement(x.a, { ariaValueText: r ? D : '', indeterminate: r, style: !r && T.hidden })
          )
        },
        F = n('ZcYN'),
        O = n('MWbm'),
        P = n('oQhu'),
        L = n('w6IS'),
        R = n('MXDK'),
        M = { viewType: 'typeahead_dropdown' },
        N = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e)),
              m()(l()(o), '_setFocusedItemRef', function (e) {
                o._shouldScrollToFocusedItem &&
                  e &&
                  (Object(R.c)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
              }),
              m()(l()(o), '_resetScroll', function () {
                var e = o._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              m()(
                l()(o),
                '_getFlattenedItems',
                Object(P.a)(function (e) {
                  return Object(L.a)(e)
                }),
              ),
              m()(l()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemClick,
                  i = o._getFlattenedItems(a).indexOf(e)
                e && !t && !o._shouldBlockInteractivity && r(e, i), o._resetFocus()
              }),
              m()(l()(o), '_getResultCount', function () {
                var e = o.props.items
                return o._getFlattenedItems(e).length
              }),
              m()(l()(o), '_setFocusIndex', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), r && r(o._getFlattenedItems(a)[e])
              }),
              m()(l()(o), '_resetFocus', function () {
                o._setFocusIndex(o.props.withItemAlwaysSelected ? 0 : -1)
              }),
              m()(l()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              m()(l()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              }),
              m()(l()(o), 'hasFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                return e >= 0 && t > e
              }),
              m()(l()(o), 'selectFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o.props,
                  n = t.getItemIsDisabled,
                  a = t.items
                if (o.hasFocusedItem()) {
                  var r = o._getFlattenedItems(a)[e],
                    i = !!n && n(r, r.data)
                  o._handleItemClick(r, i)
                }
              }),
              (o.state = { focusIndex: e.withItemAlwaysSelected ? 0 : -1 }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._resetFocus()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._interactivityTimeout)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this
                  e.items !== this.props.items &&
                    (this._resetFocus(),
                    this._resetScroll(),
                    this._interactivityTimeout && clearTimeout(this._interactivityTimeout),
                    (this._shouldBlockInteractivity = !0),
                    (this._interactivityTimeout = setTimeout(function () {
                      t._shouldBlockInteractivity = !1
                    }, 500)))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.domId,
                    a = t.isLoading,
                    r = t.items,
                    o = t.renderCallout,
                    i = t.renderHeader,
                    c = t.renderNoResultsState,
                    l = t.selectedItems,
                    s = t.style,
                    u = a || r.length,
                    d = 0,
                    p = !!l
                  return u
                    ? b.a.createElement(
                        g.a,
                        { behavioralEventContext: M },
                        b.a.createElement(
                          O.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: s },
                          o ? o() : null,
                          b.a.createElement(A, { isLoading: !!a }),
                          i ? i() : null,
                          r.length
                            ? r.map(function (t, n) {
                                var a = !Array.isArray(r[n - 1]) && n > 0,
                                  o = n < r.length - 1,
                                  i = Array.isArray(t)
                                    ? e._renderTypeaheadGroup(t, d, a, o)
                                    : e._renderTypeaheadItem(t, d)
                                return (d += Array.isArray(t) ? t.length : 1), i
                              })
                            : null,
                        ),
                      )
                    : c
                    ? c()
                    : null
                },
              },
              {
                key: '_renderTypeaheadGroup',
                value: function (e, t, n, a) {
                  var r = this,
                    o = this.props.withSectionDivider
                  return b.a.createElement(
                    b.a.Fragment,
                    { key: 'typeaheadGroup-'.concat(t) },
                    o && n ? b.a.createElement(y.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                    e.map(function (e, n) {
                      return r._renderTypeaheadItem(e, t + n)
                    }),
                    o && a ? b.a.createElement(y.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
                  )
                },
              },
              {
                key: '_renderTypeaheadItem',
                value: function (e, t) {
                  var n = this.props,
                    a = n.ariaDescendantId,
                    r = n.getItemDisabledMessage,
                    o = n.getItemIsDisabled,
                    i = n.getUserDisplayNameLabel,
                    c = n.query,
                    l = n.renderUserDecoration,
                    s = n.selectedItems,
                    u = n.source,
                    d = this.state.focusIndex,
                    p = !(!s || !e.id) && s.indexOf(e.id) >= 0,
                    h = !!s,
                    m = d === t,
                    f = o && o(e, e.data),
                    g = r && r(e, e.data)
                  return b.a.createElement(F.b, {
                    disabledMessage: g,
                    domId: m ? a : void 0,
                    getUserDisplayNameLabel: i,
                    isDisabled: f,
                    isFocused: m,
                    isInMultiSelect: h,
                    isSelected: p,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: m ? this._setFocusedItemRef : void 0,
                    query: c,
                    renderUserDecoration: l,
                    source: u,
                  })
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(R.a)(w.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
            ]),
            n
          )
        })(b.a.Component)
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
        h = (n('z84I'), n('ERkP')),
        m = n.n(h),
        f = n('yiKp'),
        b = n.n(f),
        g = n('1Pcy'),
        y = n.n(g),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        w = n('cm6r'),
        E = n('rHpw'),
        _ = n('k/Ka'),
        C = n('MWbm'),
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
              p()(y()(e), '_radioRef', m.a.createRef()),
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
                    i = E.a.theme.colors[n],
                    c = v.a.generate({
                      backgroundColor: E.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return m.a.createElement(
                    C.a,
                    { style: [I.container, o] },
                    m.a.createElement(
                      w.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [I.choice, I.choiceContainer] },
                      m.a.createElement(S.a, { style: [I.choice, { color: i }] }),
                      Object(_.a)('input', {
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
                      m.a.createElement(
                        C.a,
                        { style: [I.choice, I.checkMarkContainer] },
                        m.a.createElement(k.a, { style: [I.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        I = E.a.create(function (e) {
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
              b()({}, E.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        D = x,
        T = 1,
        A = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(T, '_LABEL')), (T += 1), e
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
                    s = [F.root, l && F.flexWrap],
                    u = l ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return m.a.createElement(
                    C.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return m.a.createElement(D, {
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
        })(m.a.Component)
      p()(A, 'defaultProps', { layout: 'one-row' })
      var F = E.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = A
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
        h = n('KEM+'),
        m = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        g = n('HPNB'),
        y = n('P1r1'),
        v = n('rxPX'),
        w = Object(v.a)()
          .propsFromActions(function () {
            return { updateSettings: y.M }
          })
          .withAnalytics(),
        E = n('3XMw'),
        _ = n.n(E),
        C = n('huBF'),
        S = n('lzTJ'),
        k = n('rHpw'),
        x = n('cHvH'),
        I = n('uI9t'),
        D = S.f.ThemePrimaryColorNames,
        T = _.a.aefc5b20,
        A = [
          { accessibilityLabel: _.a.a52d0fdd, colorName: D.blue500 },
          { accessibilityLabel: _.a.d818cdd5, colorName: D.yellow500 },
          { accessibilityLabel: _.a.fee1cd64, colorName: D.magenta500 },
          { accessibilityLabel: _.a.cbed7fb2, colorName: D.purple500 },
          { accessibilityLabel: _.a.g697ec02, colorName: D.orange500 },
          { accessibilityLabel: _.a.a7c22049, colorName: D.green500 },
        ],
        F = w(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                m()(l()(e), '_handleColorChange', function (t) {
                  var n = e.props,
                    a = n.analytics,
                    r = n.updateSettings
                  a.scribe({ component: 'color_picker', element: 'option', action: t }),
                    r({ themeColor: D[t] }),
                    k.a.setPrimaryColor(D[t])
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
                      return b.a.createElement(C.a, { themeItem: 'color' }, function (t) {
                        return b.a.createElement(I.a, {
                          accessibilityLabel: T,
                          autoFocus: t,
                          layout: g.a.shouldRenderAsModal(n) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: A,
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
      t.a = F
    },
    woHV: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('ERkP'), n('k/Ka')),
        l = n('rHpw').a.create({
          initial: {
            alignItems: 'stretch',
            borderWidth: 0,
            borderStyle: 'solid',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            position: 'relative',
            zIndex: 0,
            minHeight: 0,
            minWidth: 0,
          },
        }),
        s = ['style']
      t.a = function (e) {
        var t = e.style,
          n = i()(e, s)
        return Object(c.a)('form', r()(r()({}, n), {}, { action: '#', style: [l.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
