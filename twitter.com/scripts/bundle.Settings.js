;(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
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
          return l
        }),
        n.d(t, 'f', function () {
          return c
        })
      var a = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        i = 'Escape',
        l = 'ESC',
        c = 'Tab'
    },
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
        l = n('SrIh'),
        c = i.a.a5d4fda0,
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(l.a)(n, { extra: { context: o, isStrato: !0 } }),
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
        l = n('A91F'),
        c = n('t62R')
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
            t ? r.a.createElement(i.a, { accessibilityLabel: '', aspectMode: l.a.SQUARE, image: t }) : null,
          ),
          r.a.createElement(
            o.a,
            { style: s.bodyColumn },
            a ? r.a.createElement(c.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, a) : null,
            r.a.createElement(c.b, { numberOfLines: 2, weight: 'bold' }, u),
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
        l = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        d = n.n(u),
        p = n('2VqO'),
        m = n.n(p),
        h = n('KEM+'),
        f = n.n(h),
        b = (n('+KXO'), n('uFXj'), n('2G9S'), n('vrRf'), n('ERkP')),
        y = n.n(b),
        g = n('P1r1'),
        v = n('RqPI'),
        w = n('rxPX'),
        E = Object(w.a)()
          .propsFromState(function () {
            return { language: v.o, scale: g.y }
          })
          .propsFromActions(function () {
            return { updateSettings: g.M }
          })
          .withAnalytics(),
        C = n('3XMw'),
        _ = n.n(C),
        S = n('huBF'),
        k = n('MWbm'),
        x = n('lzTJ'),
        I = n('rHpw'),
        T = n('t62R'),
        D = n('9RkS'),
        O = x.f.ThemeScaleNames,
        A = Object.keys(O),
        L = A.length - 1,
        F = _.a.d8680056,
        P = _.a.eed02405,
        R = _.a.j59f0b93,
        M = _.a.b81aaad8,
        N = _.a.c704488f,
        B =
          ((a = {}),
          f()(a, O.xSmall, F),
          f()(a, O.small, P),
          f()(a, O.normal, R),
          f()(a, O.large, M),
          f()(a, O.xLarge, N),
          a),
        H = [F, P, R, M, N],
        j = _.a.e46dffa0,
        z = (function (e) {
          d()(n, e)
          var t = m()(n)
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
                  o = A[t]
                a.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  I.a.setScale(O[o])
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
                  return y.a.createElement(S.a, { themeItem: 'textSize' }, function (t) {
                    return y.a.createElement(
                      k.a,
                      { style: V.sliderContainer },
                      y.a.createElement(T.b, { size: 'subtext2' }, 'Aa'),
                      y.a.createElement(
                        k.a,
                        { style: V.slider },
                        y.a.createElement(D.a, {
                          accessibilityLabel: j,
                          accessibilityLabelValueText: B[I.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: H,
                          max: L,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: A.indexOf(I.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      y.a.createElement(T.b, { size: 'headline1' }, 'Aa'),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component),
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        y = n('P1r1'),
        g = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: y.n, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: y.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        C = n('v//M'),
        _ = n('3XMw'),
        S = n.n(_),
        k = n('M2mT'),
        x = 'settingsDetailSave',
        I = n('mw9i'),
        T = n('0yYu'),
        D = n('/yvb'),
        O = n('rHpw'),
        A = S.a.i2209530,
        L = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return b.a.createElement(C.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              h()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  l = t.withMarginBottom
                return b.a.createElement(
                  I.a,
                  { style: [F.contentRoot, l && F.withMarginBottom] },
                  n,
                  a
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(T.a, null),
                        b.a.createElement(
                          I.a,
                          { style: F.buttonContainer },
                          b.a.createElement(D.a, { disabled: r, onPress: a, style: F.button, testID: x, type: i }, o),
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
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return b.a.createElement(
                    k.a,
                    {
                      backLocation: c,
                      onBackClick: n,
                      rightControl: a,
                      screenType: r,
                      secondaryBar: o,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
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
        })(b.a.Component)
      h()(L, 'defaultProps', { submitLabel: A, submitType: 'brandFilled', withMarginBottom: !0 })
      var F = O.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(O.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = E(L)
    },
    A2ey: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ezhf')),
        b = n('ERkP'),
        y = n.n(b),
        g = n('HPNB'),
        v = n('v6aA'),
        w = n('P1r1'),
        E = n('rxPX'),
        C = Object(E.a)()
          .propsFromActions(function () {
            return { updateSettings: w.M }
          })
          .withAnalytics(),
        _ = n('3XMw'),
        S = n.n(_),
        k = n('huBF'),
        x = n('lzTJ'),
        I = n('rHpw'),
        T = n('cHvH'),
        D = n('fBvp'),
        O = x.f.ThemePaletteNames,
        A = S.a.ce8a8115,
        L = [
          { label: S.a.j59f0b93, accessibilityLabel: S.a.d3d48f39, backgroundName: O.light },
          { label: S.a.i76f67ed, backgroundName: O.dark },
          { label: S.a.c8f85960, backgroundName: O.darker },
        ],
        F = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_handleBackgroundChange', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.updateSettings
                a.scribe({ component: 'background_picker', element: 'option', action: t })
                var o = O[t]
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
                  return y.a.createElement(T.a, null, function (t) {
                    var n = t.windowWidth
                    return y.a.createElement(k.a, { themeItem: 'background' }, function (t) {
                      return y.a.createElement(D.a, {
                        accessibilityLabel: A,
                        autoFocus: t,
                        layout: g.a.shouldRenderAsModal(n) ? 'row' : 'column',
                        onChange: e._handleBackgroundChange,
                        options: L,
                        value: I.a.theme.paletteName,
                      })
                    })
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      h()(F, 'contextType', v.a)
      var P = C(F)
      t.a = P
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
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        b = n.n(f),
        y = (n('KqXw'), n('MvUL'), n('ERkP')),
        g = n.n(y),
        v = n('FPOR'),
        w = n('zh9S'),
        E = n('hqKg'),
        C = n('0KEI'),
        _ = n('oEGd'),
        S = n('H9MA'),
        k = Object(E.createSelector)(S.f, S.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        x = {
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: w.a,
          scribeAction: w.c,
          scribePageImpression: w.d,
          updateVideoAutoplay: S.i,
        },
        I = Object(_.f)(k, x),
        T = n('45mF'),
        D = n('3XMw'),
        O = n.n(D),
        A = n('7FtF'),
        L = n('3cwy'),
        F = n('MWbm'),
        P = n('3JAx'),
        R = n('t62R'),
        M = n('6v1f'),
        N = O.a.a776eed7,
        B = O.a.ede134f2,
        H = O.a.i859a9d3,
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
                  l = n.updateVideoAutoplay
                i(r()(r()({}, j), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  l(M.b[t]).catch(a(r()(r()({}, Object(T.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(z(M.b.Always)),
              M.c && o._options.push(z(M.b.WiFiOnly)),
              o._options.push(z(M.b.Off)),
              o
            )
          }
          return (
            c()(n, [
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
                  return g.a.createElement(
                    A.a,
                    { location: t, title: N },
                    g.a.createElement(
                      F.a,
                      null,
                      g.a.createElement(P.a, {
                        description: g.a.createElement(
                          g.a.Fragment,
                          null,
                          ''.concat(B, ' '),
                          g.a.createElement(R.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, H),
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
        })(g.a.Component)
      t.default = I(V)
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'c', function () {
          return l
        }),
        n.d(t, 'b', function () {
          return c
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
      function l(e) {
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
      function c(e) {
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        y = n('k49u'),
        g = n('rxPX'),
        v = n('0KEI'),
        w = Object(g.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        E = n('kGix'),
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
              h()(c()(e), 'state', { verificationRequired: !1 }),
              h()(c()(e), '_handleFetch', function () {
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
                      h()(t, y.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      h()(t, y.a.PasswordVerificationRequired, {
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
                    r = t === E.a.FAILED && a
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
        k = w.forwardRef(S)
      t.a = k
    },
    FPOR: function (e, t, n) {
      'use strict'
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = n('6v1f'),
        l = n('3XMw'),
        c = n.n(l),
        s = c.a.g1888dc1,
        u = c.a.f724d1a9,
        d = c.a.cf6472c1
      t.a = ((a = {}), o()(a, i.b.Off, s), o()(a, i.b.WiFiOnly, u), o()(a, i.b.Always, d), a)
    },
    Gfoi: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    'IMA+': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        b = n.n(f),
        y = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        g = n('ERkP'),
        v = n.n(g),
        w = n('TIdA'),
        E = n('t62R'),
        C = n('5mJL'),
        _ = n('DNho'),
        S = n('nBUg'),
        k = n('qjak'),
        x = n('ir4X'),
        I = n('htQn'),
        T = n('e5HP'),
        D = n('FBXD'),
        O = n('Nqmc'),
        A = n('rHpw'),
        L = n('jhWN'),
        F = n('1I0O'),
        P = n('pBrB'),
        R = n('jV+4'),
        M = n('MWbm'),
        N = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        B = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        H = w.a.createLayoutCache(),
        j = { viewType: 'user_cell' },
        z = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(u()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.badgeContext,
                  a = t.disabledMessage,
                  r = t.displayNameLabel,
                  o = t.isBlocking,
                  i = t.isDisabled,
                  l = t.isFollowedBy,
                  c = t.isProtected,
                  s = t.isVerified,
                  u = t.name,
                  d = t.onScreenNameClick,
                  p = t.promotedContent,
                  m = t.promotedItemType,
                  h = t.screenName,
                  f = t.screenNameSuffix,
                  b = t.translatorType,
                  y = t.withFollowsYou,
                  g = t.withLink,
                  w = v.a.createElement(R.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: c,
                    isVerified: s,
                    name: u,
                    onLinkClick: d,
                    promotedContent: m === N.TWEET ? p : void 0,
                    screenName: h,
                    screenNameSuffix: f,
                    translatorType: b,
                    withFollowsYou: y && l,
                    withHoverCard: !o && !i && g,
                    withLink: !i && g,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? v.a.createElement(
                      M.a,
                      { style: V.disabledMessageContainer },
                      w,
                      v.a.createElement(E.b, { color: 'gray700' }, a),
                    )
                  : w
              }),
              b()(u()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  a = t.displayMode,
                  r = t.socialContext
                return r
                  ? v.a.createElement(S.b.UseProps, null, function (e) {
                      return v.a.createElement(O.a, {
                        avatarSize: n,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: V.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== B.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              b()(u()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(k.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = n.Icon,
                  r = n.text
                return t
                  ? v.a.createElement(
                      M.a,
                      { style: V.userTypeaheadSocialContext },
                      v.a.createElement(M.a, { style: V.userTypeaheadSocialContextIcon }, a),
                      v.a.createElement(
                        E.b,
                        { color: 'gray700', numberOfLines: 1, style: V.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              b()(u()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? v.a.createElement(x.a, { label: t }) : null
              }),
              b()(u()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [B.UserDetailed, B.UserConcise].indexOf(t)
              }),
              b()(u()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              b()(
                u()(e),
                '_handleClick',
                Object(D.a)(function (t) {
                  var n = e.props.onCellClick
                  t.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.accessibilityState,
                    a = e.avatarDecoration,
                    o = e.avatarSize,
                    i = e.avatarUri,
                    l = e.bottomControl,
                    c = e.decoration,
                    s = e.displayMode,
                    u = e.isBlocking,
                    d = e.isDisabled,
                    p = e.onAvatarClick,
                    m = e.onCellClick,
                    h = e.onScreenNameClick,
                    f = e.presenceIndicator,
                    b = e.promotedContent,
                    g = e.promotedItemType,
                    w = e.screenName,
                    E = e.style,
                    S = e.testID,
                    k = e.userId,
                    x = e.withDarkerInteractiveBackground,
                    D = e.withInteractiveStyling,
                    O = e.withLink,
                    A = e.withUsernameCenterAligned,
                    P = O && !u,
                    R = s === B.UserCompact || A,
                    z = s === B.ExperimentalUserTypeahead,
                    U =
                      b && g === N.USER && 'earned' !== (b.disclosure_type && b.disclosure_type.toLowerCase())
                        ? v.a.createElement(T.a, { contentAuthorId: k, promotedContent: b, style: V.promotedIndicator })
                        : null,
                    W = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: H,
                      onClick: p,
                      onHoverCardScreenNameClick: h,
                      promotedContent: b,
                      screenName: w,
                      style: V.avatar,
                      uri: i,
                      withHoverCard: P,
                      withLink: O,
                    },
                    K = v.a.createElement(_.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return f
                        ? v.a.createElement(F.a, r()({}, W, f, { size: t }))
                        : v.a.createElement(L.a, r()({ size: t }, W))
                    }),
                    G = n && 'boolean' == typeof n.checked,
                    Y = void 0 !== m,
                    q = (G ? 'radio' : Y && 'button') || 'listitem',
                    X = this._renderUserName(),
                    J = this._renderHighlightedUserLabel(),
                    Q = this._renderBio(),
                    Z = J || Q || U || l,
                    $ = v.a.createElement(
                      v.a.Fragment,
                      null,
                      J,
                      Q,
                      U,
                      l ? v.a.createElement(M.a, { style: V.bottomControl }, l) : null,
                    )
                  return v.a.createElement(
                    y.a,
                    { behavioralEventContext: j },
                    v.a.createElement(
                      I.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: q,
                        accessibilityState: n,
                        disabled: !!d,
                        focusable: G || Y,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [V.root, E],
                        testID: S,
                        withDarkerInteractiveBackground: x,
                        withInteractiveStyling: null != D ? D : !!m,
                      },
                      z ? null : this._renderSocialContext(),
                      v.a.createElement(
                        C.a,
                        {
                          avatarCell: K,
                          avatarCellStyle: [V.avatarColumn, R && V.bodyColumnCentered],
                          avatarSize: z ? 'xxxLarge' : o,
                          cellStyle: [V.bodyColumn, R && V.bodyColumnCentered],
                        },
                        v.a.createElement(M.a, { style: V.body }, X, c),
                        R ? null : $,
                        z ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && R
                        ? v.a.createElement(
                            C.a,
                            { avatarCell: null, avatarCellStyle: V.avatarColumn, cellStyle: V.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.displayMode,
                    a = e.entities,
                    r = e.userId,
                    o = e.withheldDescription,
                    i = e.withheldEntities
                  return a && t && this._isEligibleForBio()
                    ? v.a.createElement(P.a, {
                        description: t,
                        entities: a,
                        isConcise: n === B.UserConcise,
                        style: V.bio,
                        userId: r,
                        withheldDescription: o,
                        withheldEntities: i,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      b()(z, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var V = A.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      t.a = z
    },
    KNZn: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        b = n.n(f),
        y = (n('TJCb'), n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        g = n.n(y),
        v = n('RqPI'),
        w = n('rxPX'),
        E = Object(w.a)().propsFromState(function () {
          return { language: v.o }
        }),
        C = n('3XMw'),
        _ = n.n(C),
        S = n('fs1G'),
        k = n('rHpw'),
        x = n('BLtI'),
        I = n('MWbm'),
        T = 'Twitter',
        D = _.a.ea1c87a5({ mention: T }),
        O = {
          text: D,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, D.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: T,
                indices: [D.indexOf('@'), D.indexOf('@') + T.length + 1],
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
        A = (function (e) {
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
              l = o.language,
              c = o.tweet
            return (a._tweet = r()(r()(r()({}, O), c), {}, { lang: l || 'en' })), a
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return g.a.createElement(
                    I.a,
                    { accessibilityHidden: !0, style: e && L.tweetBorder },
                    g.a.createElement(x.b, {
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
                    g.a.createElement(I.a, { style: k.a.absoluteFill }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(A, 'defaultProps', { tweet: O, withTweetBorder: !1 })
      var L = k.a.create(function (e) {
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
        F = E(A)
      t.a = F
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = (n('hBvt'), n('ERkP')),
        i = n.n(o),
        l = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return i.a.createElement(l.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
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
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        b = n.n(f),
        y = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        v = n.n(g),
        w = n('HPNB'),
        E = n('VAZu'),
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
        T = n('MWbm'),
        D = n('yw4N'),
        O = n('TnY3'),
        A = n('cHvH'),
        L = n('3xLC'),
        F = [
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
                  ? v.a.createElement(
                      T.a,
                      { style: I.fill },
                      v.a.createElement(
                        D.a,
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
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(A.a, null, function (t) {
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
                      r()(e, F))
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
                    l = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    m = n.rightControl,
                    h = n.screenType,
                    f = n.searchBoxOptions,
                    b = n.secondaryBar,
                    g = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    _ = n.subtitle,
                    S = n.title,
                    k = n.titleIconCell,
                    x = n.titleIconCellSize,
                    D = n.withDetailOpen,
                    O = n.withSearchBox,
                    A = n.withTweetButton,
                    L = 'root' === h,
                    F = 'secondaryRoot' === h,
                    P = 'primaryDetail' === h,
                    R = (P && w) || (L && g),
                    M = L || (P && t),
                    N = L ? y.c : P ? y.a : void 0,
                    B = v.a.createElement(
                      T.a,
                      { style: I.appBarContainer },
                      v.a.createElement(E.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: M,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: b,
                        subtitle: R ? _ : void 0,
                        title: S,
                        titleDomId: N,
                        titleIconCell: k,
                        titleIconCellSize: x,
                      }),
                    ),
                    H =
                      L || (F && D)
                        ? null
                        : v.a.createElement(C.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: o,
                            backLocation: i,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: m,
                            searchBoxOptions: f,
                            subtitle: _,
                            title: S,
                            withSearchBox: O,
                            withTweetButton: A,
                          })
                  return v.a.createElement(v.a.Fragment, null, H, B)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(P, 'contextType', L.a),
        b()(P, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(O.a)(P)
    },
    NyKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return b
      }),
        n.d(t, 'a', function () {
          return y
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
        l = n('yiKp'),
        c = n.n(l),
        s = (n('yH/f'), n('LW0h'), n('7x/C'), n('2G9S'), n('kGix')),
        u = n('Ssj5'),
        d = n('oEOe'),
        p = 'userData',
        m = 'rweb/'.concat(p),
        h = Object(d.a)(m, 'FETCH_DOWNLOADS'),
        f = Object(d.a)(m, 'CREATE_DOWNLOAD'),
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
        y = [b.NEW, b.INPROGRESS, b.INPROGRESS_ASYNC, b.ZIPPING, b.PUBLISHING, b.NOTIFYING],
        g = { fetchStatus: s.a.None, downloads: { all: [], nonFailed: [] } }
      u.a.register(
        r()({}, p, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case h.SUCCESS:
              var a = n.payload || [],
                r = a.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return c()(
                c()({}, t),
                {},
                { fetchStatus: s.a.LOADED, downloads: c()(c()({}, t.downloads), {}, { all: a, nonFailed: r }) },
              )
            case h.REQUEST:
              return c()(c()({}, t), {}, { fetchStatus: s.a.LOADING })
            case h.FAILURE:
              return c()(c()({}, t), {}, { error: n.payload, fetchStatus: s.a.FAILED })
            case f.SUCCESS:
              return c()(
                c()({}, t),
                {},
                {
                  downloads: c()(
                    c()({}, t.downloads),
                    {},
                    { nonFailed: (e = [{ status: 'INPROGRESS' }]).concat.apply(e, i()(t.downloads.nonFailed)) },
                  ),
                },
              )
            case f.FAILURE:
              return c()(c()({}, t), {}, { fetchStatus: s.a.NONE })
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n.n(f),
        y = n('zh9S'),
        g = n('NyKK'),
        v = n('rxPX'),
        w = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: g.g, downloads: g.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: g.d,
              googleAnalyticsPageView: y.a,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: g.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        C = n('XYIJ'),
        _ = (n('6U7i'), n('3XMw')),
        S = n.n(_),
        k = n('aITJ'),
        x = n('MWbm'),
        I = n('/yvb'),
        T = n('eb3s'),
        D = n('855f'),
        O = S.a.cfd2f35d,
        A = S.a.fc5bfd95,
        L = S.a.gee8110d,
        F = S.a.c326f156,
        P = S.a.c9fe9b56,
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
              h()(c()(e), 'state', { showConfirmation: !1 }),
              h()(c()(e), '_shouldDisplayConfirmation', !1),
              h()(c()(e), '_handleCancel', function () {
                e.setState({ showConfirmation: !1 })
              }),
              h()(c()(e), '_handleNeedsConfirmationActionCellPress', function () {
                e.setState({ showConfirmation: !0 })
              }),
              h()(c()(e), '_handleConfirm', function (t) {
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
                    l = R({ size: n.getSizeLabel(o) }),
                    c = t ? F : L
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
                            c,
                          ),
                          this.state.showConfirmation && !t
                            ? b.a.createElement(T.a, {
                                cancelButtonLabel: O,
                                confirmButtonLabel: A,
                                confirmButtonLink: { pathname: i || '', external: !0 },
                                headline: P,
                                onCancel: this._handleCancel,
                                onConfirm: this._handleConfirm,
                                text: l,
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
                          c,
                        ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(B, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? M({ size: D.a.getFormattedCount(t) })
          : N({ size: D.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var H = n('7FtF'),
        j = n('ClNT'),
        z = n('t62R'),
        V = n('rHpw'),
        U = n('v6aA'),
        W = S.a.f56af9cc,
        K = S.a.b2ed92c3,
        G = S.a.ce5d2c46,
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
              h()(c()(e), '_render', function () {
                var t = e.props.downloads.nonFailed
                return t.length ? b.a.createElement(x.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              h()(c()(e), '_renderDownloadItems', function (t, n) {
                return b.a.createElement(
                  x.a,
                  { key: n },
                  t.urls && 'COMPLETED' === t.status
                    ? t.urls.map(e._renderDownloadButtons.bind(c()(e), t))
                    : e._renderUnavailableButton(t),
                )
              }),
              h()(c()(e), '_handleConfirm', function (t) {
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
                    { style: [C.a.narrowButtonRow, C.a.bottomBorder, C.a.labelContainer] },
                    b.a.createElement(z.b, { weight: 'bold' }, ee({ currentIndex: 1, count: 1 })),
                    b.a.createElement(
                      I.a,
                      { disabled: !0, size: 'small', style: C.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? K : G,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(te, 'contextType', U.a)
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
        l = (n('hBvt'), n('ERkP')),
        c = n.n(l),
        s = n('rHpw'),
        u = n('csss'),
        d = ['Icon'],
        p = ['link'],
        m = function (e) {
          return c.a.createElement(e.Icon, { style: h.thumbnail })
        },
        h = s.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function f(e) {
        var t = e.Icon,
          n = i()(e, d)
        return c.a.createElement(
          u.a,
          r()({}, n, { thumbnail: c.a.createElement(m, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function b(e) {
        e.link
        var t = i()(e, p)
        return c.a.createElement(u.a, r()({}, t, { link: { external: !0, pathname: e.link } }))
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
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        b = n.n(f),
        y = n('ERkP'),
        g = n.n(y),
        v = n('FPOR'),
        w = n('P1r1'),
        E = n('rxPX'),
        C = n('0KEI'),
        _ = n('H9MA'),
        S = Object(E.a)()
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
              updateSettings: w.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        k = n('45mF'),
        x = n('6v1f'),
        I = n('3XMw'),
        T = n.n(I),
        D = n('yoO3'),
        O = n('7FtF'),
        A = n('3cwy'),
        L = 'dataSaverBooleanItem',
        F = n('v6aA'),
        P = n('RKmr'),
        R = n('e0ey'),
        M = n('csss'),
        N = T.a.eafe3287,
        B = T.a.d76fe4fc,
        H = T.a.a57a341b,
        j = T.a.d88102cf,
        z = T.a.a776eed7,
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
                  l = n.updateDataSaverMode
                a.scribe({ element: e, action: t ? 'on' : 'off' }),
                  l({ enabled: t }).catch(i(r()(r()({}, Object(k.a)()), {}, { showToast: !0 })))
              }),
              (o._showVideoAutoplaySetting = Object(A.a)()),
              o
            )
          }
          return (
            c()(n, [
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
                  return g.a.createElement(
                    D.a,
                    null,
                    g.a.createElement(
                      O.a,
                      { location: n, screenType: 'secondaryDetail', title: N },
                      g.a.createElement(P.a, { description: B }),
                      g.a.createElement(R.a, {
                        checked: t,
                        helpText: j,
                        label: H,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: L,
                      }),
                      this._showVideoAutoplaySetting &&
                        g.a.createElement(M.a, {
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
        })(g.a.Component)
      b()(V, 'contextType', F.a)
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        y = n('dDSG'),
        g = n('FPOR'),
        v = n('6/RC'),
        w = n('rxPX'),
        E = n('0KEI'),
        C = n('2iUg'),
        _ = n('P1r1'),
        S = n('H9MA'),
        k = Object(w.a)()
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
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
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
        T = n.n(I),
        D = n('yoO3'),
        O = n('7FtF'),
        A = n('OySi'),
        L = n('3cwy'),
        F = 'accessibilityScreen',
        P = n('MWbm'),
        R = n('38/B'),
        M = n('rHpw'),
        N = n('RKmr'),
        B = n('6vad'),
        H = n('e0ey'),
        j = n('0yYu'),
        z = n('csss'),
        V = n('v6aA'),
        U = T.a.e3719c15,
        W = T.a.a5208fad,
        K = T.a.d5b646bd,
        G = T.a.jfe6a3a0,
        Y = T.a.add55c97,
        q = T.a.a6d5b010,
        X = T.a.e8c72272,
        J = T.a.dba2cdd1,
        Q = T.a.d070244e,
        Z = T.a.icfa5e8b,
        $ = T.a.ae41b002,
        ee = T.a.e82b294e,
        te = T.a.ea284ab8,
        ne = T.a.a776eed7,
        ae = T.a.bd15d030,
        re = T.a.a2dfde67,
        oe = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              h()(
                c()(o),
                '_showAltTextPromptPreferenceSetting',
                o.context.featureSwitches.allTrue([
                  'responsive_web_alt_text_nudges_enabled',
                  'responsive_web_alt_text_nudges_settings_enabled',
                ]),
              ),
              h()(
                c()(o),
                '_showAutoPollingSetting',
                o.context.featureSwitches.isTrue('responsive_web_settings_timeline_polling_enabled'),
              ),
              h()(c()(o), '_handleReducedMotionChanged', function (e, t) {
                o._handleSettingChanged(e, t), R.a.setReducedMotion(t)
              }),
              h()(c()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), M.a.setHighContrast(t)
              }),
              h()(c()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateAltTextPromptPreference,
                  l = t ? y.a.prompt : null
                a.scribe({ element: ''.concat(e, '_').concat(l || 'off'), action: 'selected' }),
                  i(l).catch(r({ showToast: !0 }))
              }),
              h()(c()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateSettings
                a.scribe({ element: e, action: t ? 'on' : 'off' }), i(h()({}, e, t)).catch(r({ showToast: !0 }))
              }),
              (o._showVideoAutoplaySetting = Object(L.a)()),
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
                    l = v.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return b.a.createElement(
                    D.a,
                    null,
                    b.a.createElement(
                      O.a,
                      { location: r, screenType: 'secondaryDetail', title: U },
                      b.a.createElement(
                        P.a,
                        { testID: F },
                        b.a.createElement(N.a, { description: W }),
                        b.a.createElement(B.b, { text: K }),
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
                            P.a,
                            null,
                            b.a.createElement(j.a, null),
                            b.a.createElement(B.b, { text: G }),
                            b.a.createElement(H.a, {
                              checked: o || l,
                              disabled: l,
                              helpText: l ? $ : Z,
                              label: Q,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            b.a.createElement(z.a, {
                              description: g.a[i || x.a],
                              disabled: n,
                              label: ne,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextPromptPreferenceSetting
                        ? b.a.createElement(
                            P.a,
                            null,
                            b.a.createElement(j.a, null),
                            b.a.createElement(B.b, { text: Y }),
                            b.a.createElement(H.a, {
                              checked: t === y.a.prompt,
                              helpText: te,
                              label: ee,
                              name: 'altTextNudgeType',
                              onChange: this._handleAltTextNudgeTypeChanged,
                            }),
                          )
                        : null,
                      this._maybeRenderTimelineSettings(),
                      b.a.createElement(
                        P.a,
                        null,
                        b.a.createElement(j.a, null),
                        b.a.createElement(B.b, { text: ae }),
                        b.a.createElement(A.a, { label: re, link: 'https://help.twitter.com/resources/accessibility' }),
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
      h()(oe, 'contextType', V.a)
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
        l = o.a.create(function (e) {
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
      t.a = l
    },
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return ge
      }),
        n.d(t, 'a', function () {
          return Ee
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('ho0z'), n('ERkP')),
        b = n.n(f),
        y = n('+Kfv'),
        g = 'typeaheadResult',
        v = n('v6aA'),
        w = n('AQOc'),
        E = n('V5Qi'),
        C = n('G6rE'),
        _ = n('rxPX'),
        S = function (e, t) {
          return t.conversationId
        },
        k = function (e, t) {
          return Object(E.a)(e, S(0, t))
        },
        x = Object(_.a)()
          .propsFromState(function () {
            return { conversationId: S, conversation: k, users: C.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(w.b)(t.data, void 0, n)), a
          }),
        I = n('aA19'),
        T = n('OhSZ'),
        D = n('5mJL'),
        O = n('rHpw'),
        A = O.a.create(function (e) {
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
        L = x(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            a = e.isSelected,
            r = e.perspective,
            o = b.a.useContext(v.a).featureSwitches,
            i = o.isTrue('dm_vdl_enabled') && o.isTrue('dm_vdl_inbox_p0_enabled')
          return t
            ? b.a.createElement(
                D.a,
                {
                  avatarCell: b.a.createElement(I.a, { conversation: t, perspective: r, size: 'xLarge' }),
                  avatarCellStyle: A.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: A.bodyColumn,
                  style: [A.root, !a && n && A.disabled],
                },
                b.a.createElement(T.b, {
                  conversation: t,
                  perspective: r,
                  withParticipantsCount: !0,
                  withVDLRefresh: i,
                }),
                Ee({ isSelected: a }),
              )
            : null
        }),
        F = (n('uFXj'), n('MWbm')),
        P = n('LbZ7'),
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
                    F.a,
                    { style: z.root },
                    b.a.createElement(
                      P.a,
                      { withGutter: !0 },
                      b.a.createElement(
                        F.a,
                        { style: z.bodyColumn },
                        a ? b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        b.a.createElement(R.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? b.a.createElement(
                            F.a,
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
        z = O.a.create(function (e) {
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
        K = n.n(W)
      var G = n('FiRh'),
        Y = n('j7Bv'),
        q = n('EHV7'),
        X = n('Gfoi')
      var J = O.a.create(function (e) {
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
            l = (function (e, t) {
              var n,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = K()(e),
                o = e.toLowerCase().indexOf(t.toLowerCase()),
                i = o + t.length
              if (0 === r.length) {
                var l = a ? [o > 0 ? [0, o] : void 0, [i, e.length]].filter(Boolean) : [[o, i]]
                n = [{ highlights: -1 !== o ? l : void 0, text: e, entityType: 'text', prefix: '' }]
              } else {
                var c = r.flatMap(function (t, n, a) {
                    var r = t.indices,
                      o = 0 === n ? 0 : a[n - 1].indices[1],
                      i = n === a.length - 1,
                      l = []
                    return (
                      o !== r[0] && l.push(e.slice(o, r[0])),
                      l.push(e.substring(r[0], r[1])),
                      i && e.length !== r[1] && l.push(e.slice(r[1])),
                      l
                    )
                  }),
                  s = 0,
                  u = c.map(function (e, t, n) {
                    s += t > 0 ? n[t - 1].length : 0
                    var a = e.length
                    return { runningTotal: s, containsQuery: -1 !== o && s + a >= o && s < i }
                  })
                n = c.map(function (e, t) {
                  var n,
                    r,
                    l = u[t],
                    c = l.containsQuery,
                    s = l.runningTotal,
                    d = e.includes('#')
                  if (a && !c) r = [[0, e.length]]
                  else if (c) {
                    var p = s < o ? o - s : 0,
                      m = s + e.length < i ? e.length : i - s,
                      h = d ? p - 1 : p,
                      f = d ? m - 1 : m
                    r = a
                      ? [h > 0 ? [0, h] : void 0, f !== e.length - 1 ? [f, e.length] : void 0].filter(Boolean)
                      : [[h, f]]
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
            c = b.a.createElement(
              R.b,
              null,
              l.map(function (e, t) {
                return b.a.createElement(G.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            s = b.a.createElement(
              b.a.Fragment,
              null,
              c,
              r
                ? b.a.createElement(
                    F.a,
                    { style: J.context },
                    r && r.types[0] && 'followable_topic' === r.types[0].type
                      ? b.a.createElement(q.a, { style: J.icon })
                      : null,
                    b.a.createElement(R.b, { color: 'gray700' }, r.display_string || ' '),
                  )
                : null,
            )
          return b.a.createElement(
            F.a,
            { style: [J.root, n && J.disabled, i] },
            o
              ? (function (e) {
                  var t = b.a.createElement(Y.a, { Icon: X.a, color: 'neutral', size: 'xxxLarge', style: J.searchIcon })
                  return b.a.createElement(
                    D.a,
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
        ee = Object(_.a)().propsFromState(function () {
          return { userSpace: $ }
        }),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('tocL'),
        re = 'TypeaheadUser',
        oe = n('GZwR'),
        ie = n('IMA+'),
        le = ne.a.ae2205d1,
        ce = ne.a.d960b55b,
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
              h()(c()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              h()(c()(e), '_handleClick', function () {
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
                    l = e.isVerified,
                    c = e.name,
                    s = e.screenName,
                    u = e.source,
                    d = e.userId,
                    p = e.userSpace,
                    m = e.withNewTypeaheadUI,
                    h = this.context.featureSwitches,
                    f = this._getSocialContext(),
                    y = this._getResultContext() || f,
                    g = u === oe.d.SearchBox,
                    v = p && h.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
                  return (
                    v && (v.accessibilityLabel = se({ screenName: s })),
                    b.a.createElement(ie.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: o ? a : void 0,
                      displayMode: m ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      displayNameLabel: r,
                      isDisabled: o,
                      isProtected: i,
                      isVerified: l,
                      name: c,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: g ? v : void 0,
                      screenName: s,
                      socialContext: y,
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
                    var t = e.followed_by ? le : ce
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
      h()(de, 'contextType', v.a), h()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(de),
        me = n('htQn'),
        he = n('iySH'),
        fe = n('IMYl'),
        be = { viewType: 'typeahead_result' },
        ye = function (e) {
          return e.children
        }
      function ge(e) {
        return b.a.createElement(ye, { item: e.item }, b.a.createElement(ve, e))
      }
      var ve = (function (e) {
        u()(n, e)
        var t = p()(n)
        function n(e, a) {
          var o
          return (
            r()(this, n),
            (o = t.call(this, e, a)),
            h()(c()(o), '_onViewRef', function (e) {
              o._viewRef = e
              var t = o.props.onRef
              t && t(e)
            }),
            h()(c()(o), '_handleClick', function () {
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
                  y.a,
                  { behavioralEventContext: be },
                  b.a.createElement(
                    F.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!r || !o) || void 0,
                        selected: n ? void 0 : (r && o) || (!r && !!a),
                      },
                      nativeID: t,
                      testID: g,
                    },
                    b.a.createElement(
                      me.a,
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
                  l = e.renderUserDecoration,
                  c = e.source
                switch (o.type) {
                  case oe.b.User:
                    var s = o.data,
                      u = l ? l({ userId: s.id_str, isSelected: r }) : void 0,
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
                      source: c,
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
                    var m = this.props.query,
                      h = o.data,
                      f = c === oe.d.SearchBox
                    return b.a.createElement(Q, {
                      isDisabled: a,
                      query: m || '',
                      resultContext: h.result_context,
                      showIcon: f,
                      style: f ? we.itemPadding : void 0,
                      topic: h.topic,
                    })
                  case oe.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      b.a.createElement(L, {
                        conversationId: o.id,
                        isDisabled: a,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case oe.b.SettingGroup:
                    var y = o.data.text
                    return b.a.createElement(
                      F.a,
                      { style: we.navigationLink },
                      b.a.createElement(R.b, { style: we.content, weight: 'bold' }, y),
                      b.a.createElement(he.a, { style: we.icon }),
                    )
                  case oe.b.Setting:
                    var g = o.data.text
                    return b.a.createElement(
                      F.a,
                      { style: we.navigationLink },
                      b.a.createElement(R.b, { style: we.content }, g),
                      b.a.createElement(he.a, { style: we.icon }),
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
      h()(ve, 'contextType', v.a)
      var we = O.a.create(function (e) {
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
          return it
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('hBpG'), n('7x/C'), n('ERkP')),
        b = n.n(f),
        y = n('mrHL'),
        g = n('yiKp'),
        v = n.n(g),
        w = n('m3Bd'),
        E = n.n(w),
        C = (n('+KXO'), n('NeAX')),
        _ = n('RqPI'),
        S = n('hqKg'),
        k = n('kGix'),
        x = n('O0uF'),
        I = n('G6rE'),
        T = n('rxPX'),
        D = n('0KEI'),
        O = ['featureSwitches'],
        A = Object(S.createSelector)(_.m, C.selectPreferencesFetchStatus, function (e, t) {
          return e ? k.a.LOADED : t
        }),
        L = Object(T.a)()
          .propsFromState(function () {
            return {
              fetchStatus: A,
              loggedInUser: I.e.selectLoggedInUser,
              isActiveCreator: _.l,
              personalizationPreferences: C.selectUserPreferences,
              featureSwitches: x.f,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches,
              n = E()(e, O)
            return v()({ withEditableFSes: Object.keys(t.debug).length > 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: C.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        F = n('v//M'),
        P = n('uD2z'),
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
      function K(e) {
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
      var G = n('VY6S'),
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
        le = M.a.b08821f3,
        ce = ne.a.create(function (e) {
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
            l = e.isCompact,
            c = e.isModal,
            s = e.items,
            u = e.onBackClicked,
            d = e.onClick,
            p = e.onDismiss,
            m = e.onFocus,
            h = e.onItemClick,
            f = e.onQueryChange,
            y = e.onSubmit,
            g = e.placeholder,
            v = e.renderEmptyState,
            w = e.renderInSearchField,
            E = e.rounded,
            C = e.shouldAutoFocus,
            _ = e.shouldClearOnSelect,
            S = e.shouldFocusOnClear,
            k = e.shouldRenderEmptyState,
            x = e.source,
            I = e.style,
            T = e.testID,
            D = b.a.useRef(null),
            O = b.a.useRef(null),
            A = b.a.useRef(null),
            L = b.a.useRef(null),
            F = b.a.useState(!1),
            P = U()(F, 2),
            R = P[0],
            M = P[1],
            N = b.a.useState(null),
            B = U()(N, 2),
            H = B[0],
            j = B[1],
            z = b.a.useState(Object(ae.b)()),
            V = U()(z, 2),
            W = V[0],
            K = V[1],
            G = b.a.useState(function () {
              return Object(ae.f)()
            }),
            Y = U()(G, 1)[0],
            ne = b.a.useState(''),
            se = U()(ne, 2),
            ue = se[0],
            de = se[1],
            pe = function (e) {
              var t,
                n = Z.a.getCount() > 0
              ;(null != D && null !== (t = D.current) && void 0 !== t && t.contains(e.target)) || n || (R && fe())
            }
          b.a.useEffect(function () {
            return (
              window.document.addEventListener('click', pe, !0),
              function () {
                window.document.removeEventListener('click', pe, !0)
              }
            )
          })
          var me = function () {
              if (null != O && O.current) {
                var e = O.current.getBoundingClientRect().bottom
                e !== H && j(e)
              }
            },
            he = function (e) {
              de(e), null == f || f(e)
            },
            fe = function () {
              M(!1), null == p || p()
            },
            be = function () {
              var e
              fe(), null == A || null === (e = A.current) || void 0 === e || e.blur()
            },
            ye = function (e, t) {
              var n,
                a,
                r = _ ? '' : ue
              ;(M(!1), A.current) &&
                (_ && S
                  ? A.current.focus()
                  : (_ && (null === (n = A.current) || void 0 === n || n.clear()),
                    null === (a = A.current) || void 0 === a || a.blur()))
              he(r), null == p || p(), null == h || h(e, t)
            },
            ge = function () {
              K(Object(ae.b)())
            },
            ve = R || t
          return b.a.createElement(
            Q.a,
            { onLayout: me, ref: D, style: [ce.root, I] },
            b.a.createElement(
              $.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(ae.g)(e)) {
                    var a, r
                    if (n === q.a)
                      return null === (a = L.current) || void 0 === a || a.focusNext(), void e.preventDefault()
                    if (n === q.b)
                      return null === (r = L.current) || void 0 === r || r.focusPrevious(), void e.preventDefault()
                    if (n === q.d) return fe(), void e.preventDefault()
                    if (n !== q.f) {
                      var o
                      if (n === q.c && null !== (t = L.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = L.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      R || M(!0)
                    } else fe()
                  }
                },
                style: ce.keydownInputListener,
              },
              b.a.createElement(
                X.a,
                {
                  accessibilityLabel: g,
                  accessibilityRole: 'search',
                  onSubmit: function (e) {
                    var t
                    e.preventDefault(),
                      e.stopPropagation(),
                      null == A || null === (t = A.current) || void 0 === t || t.blur(),
                      M(!1),
                      null == p || p(),
                      null == y || y()
                  },
                  style: ce.wrapper,
                },
                b.a.createElement(
                  Q.a,
                  { ref: O, style: [ce.inputContainer, i] },
                  ve && u
                    ? b.a.createElement(ee.a, {
                        accessibilityLabel: le,
                        icon: b.a.createElement(re.a, null),
                        onClick: function (e) {
                          null == e || e.stopPropagation(), fe(), null == u || u()
                        },
                        style: ce.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  b.a.createElement(
                    Q.a,
                    { onClick: d, style: ce.inputWrapper },
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
                      autoFocus: C,
                      contentBelow: null == w ? void 0 : w(),
                      focusOnClear: S,
                      isCompact: l,
                      onChange: function (e) {
                        he(e.target.value), me()
                      },
                      onClear: function () {
                        he('')
                      },
                      onFocus: function () {
                        M(!0), me(), null == m || m()
                      },
                      onLayout: me,
                      placeholder: g,
                      ref: A,
                      returnKeyType: 'search',
                      spellCheck: 'false',
                      styleType: E ? 'pill' : 'selection',
                      testID: T,
                      value: ue,
                      withClearButton: !a && R,
                    }),
                  ),
                ),
                b.a.createElement(
                  Q.a,
                  { style: [ce.typeaheadContainer, !E && ce.topBorder] },
                  ve
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [ce.dropdown, H ? Object(ae.d)(H) : ce.wideModeDropdown])
                            : 'overlap' === o && (e = c ? ce.modalDropdown : [ce.dropdown, ce.wideModeDropdown]),
                          v && k
                            ? v({
                                ariaDescendantId: W,
                                domId: Y,
                                onDismiss: be,
                                onItemFocusChanged: ge,
                                ref: L,
                                style: e,
                              })
                            : b.a.createElement(J.a, {
                                ariaDescendantId: W,
                                domId: Y,
                                items: s,
                                onItemClick: ye,
                                onItemFocusChanged: ge,
                                ref: L,
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
        de = n('Irs7'),
        pe = n('s8G+'),
        me = n('zCf4'),
        he = n('t62R'),
        fe = n('FIs5'),
        be = M.a.d94f12b5,
        ye = M.a.b92a21d8,
        ge = M.a.c170a564,
        ve = M.a.ba8f6f81,
        we = { component: 'search', element: 'result' }
      function Ee(e) {
        var t = e.isActiveCreator,
          n = e.isSearching,
          a = e.onChange,
          r = e.searchIndex,
          o = Object(pe.a)('settings_revamp_search_bar_enabled'),
          i = Object(de.b)(),
          l = Object(me.f)(),
          c = b.a.useState(''),
          s = U()(c, 2),
          u = s[0],
          d = s[1],
          p = b.a.useState(void 0),
          m = U()(p, 2),
          h = m[0],
          f = m[1],
          y = b.a.useState(!1),
          g = U()(y, 2),
          w = g[0],
          E = g[1],
          C = b.a.useState([]),
          _ = U()(C, 2),
          S = _[0],
          k = _[1],
          x = b.a.useMemo(
            function () {
              return Object(G.a)(function (e) {
                i.scribe(v()(v()({}, we), {}, { action: e ? 'show' : 'empty' }))
              }, 500)
            },
            [i],
          ),
          I = u.toLocaleLowerCase().trim(),
          T = Boolean(I.length)
        b.a.useEffect(
          function () {
            T
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
                          Object(W.b)(I, e) &&
                            (r || ((r = !0), K({ results: n, setting: a, type: 'setting_group', isActiveCreator: t })),
                            K({ results: n, setting: e, type: 'setting', isActiveCreator: t }))
                        }),
                        !r &&
                          Object(W.b)(I, a) &&
                          K({ results: n, setting: a, type: 'setting_group', isActiveCreator: t })
                    }
                    for (a.s(); !(e = a.n()).done; ) o()
                  } catch (i) {
                    a.e(i)
                  } finally {
                    a.f()
                  }
                  k(n), I !== h && (f(I), x(n.length))
                })()
              : k([])
          },
          [I, T, r, t, h, x],
        )
        var D = b.a.useCallback(
            function () {
              a(!1)
            },
            [a],
          ),
          O = b.a.useCallback(
            function () {
              a(!0)
            },
            [a],
          ),
          A = b.a.useCallback(
            function () {
              u && a(!0)
            },
            [a, u],
          ),
          L = b.a.useMemo(
            function () {
              return Object(G.a)(function (e) {
                a(!0), d(e)
              }, 100)
            },
            [a],
          ),
          F = b.a.useCallback(
            function (e) {
              !w &&
                e.trim().length &&
                (E(!0), i.scribe({ component: 'search', element: 'search_box', action: 'began_typing' })),
                L(e)
            },
            [w, i, L],
          )
        if (!o) return null
        return b.a.createElement(se, {
          alwaysOpen: n,
          dropdownPosition: 'inline',
          inputStyle: Ce.input,
          items: S,
          onBackClicked: Object(Y.a)() ? D : void 0,
          onClick: O,
          onFocus: A,
          onItemClick: function (e) {
            if ('setting' === e.type || 'setting_group' === e.type) {
              var t = 'string' == typeof e.data.location ? e.data.location : e.data.location.pathname
              i.scribe(v()(v()({}, we), {}, { action: 'click' })), l.push(t, { backLocation: window.location.pathname })
            }
          },
          onQueryChange: F,
          placeholder: ve,
          renderEmptyState: function (e) {
            var t = e.style
            return T
              ? b.a.createElement(fe.a, { header: ye({ query: u }), message: ge, style: t })
              : b.a.createElement(
                  Q.a,
                  { style: [t, Ce.emptyState] },
                  b.a.createElement(he.b, { align: 'center', color: 'gray700' }, be),
                )
          },
          rounded: !0,
          shouldRenderEmptyState: n && (!T || 0 === S.length),
          source: ue.d.SearchBox,
        })
      }
      var Ce = ne.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
          }
        }),
        _e = n('7FtF'),
        Se = n('iCwC'),
        ke = n('3cwy'),
        xe = 'loggedOutPrivacySection',
        Ie = 'accountLink',
        Te = 'accountAccessLink',
        De = 'privacyAndSafetyLink',
        Oe = 'notificationsLink',
        Ae = 'accessibilityLink',
        Le = 'aboutLink',
        Fe = 'displayLink',
        Pe = 'dataLink',
        Re = n('6vad'),
        Me = n('0yYu'),
        Ne = n('v6aA'),
        Be = n('AS3p'),
        He = M.a.e3719c15,
        je = M.a.cad53943,
        ze = M.a.bb081ea1,
        Ve = M.a.e95b9448,
        Ue = M.a.eb75875d,
        We = M.a.c4881c66,
        Ke = M.a.eafe3287,
        Ge = M.a.f458a3b1,
        Ye = M.a.e8f57e07,
        qe = M.a.b7fde2b8,
        Xe = M.a.ja94f34d,
        Je = M.a.d0b74a5a,
        Qe = M.a.gd4302ec,
        Ze = M.a.bdc6f5b7,
        $e = M.a.f8645654,
        et = M.a.cf9b1669,
        tt = M.a.bdfa2b8c,
        nt = M.a.df483b47,
        at = M.a.d299431b,
        rt = M.a.ed21f885,
        ot = M.a.gaac7109,
        it = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              h()(c()(o), '_renderLoggedIn', function () {
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
                        b.a.createElement(N.a, { label: Ze, link: '/settings/account', testID: Ie }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        b.a.createElement(N.a, {
                          label: $e,
                          link: '/settings/security_and_account_access',
                          testID: Te,
                        }),
                        b.a.createElement(N.a, { label: je, link: '/settings/privacy_and_safety', testID: De }),
                        o._renderReportCenter(),
                        b.a.createElement(N.a, { label: Ue, link: '/settings/notifications', testID: Oe }),
                        b.a.createElement(N.a, {
                          label: et,
                          link: '/settings/accessibility_display_and_languages',
                          testID: Ae,
                        }),
                        b.a.createElement(N.a, { label: tt, link: '/settings/about', testID: Le }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              h()(c()(o), '_renderLoggedOut', function () {
                var e = Object(y.b)(H.u, o.context.featureSwitches)
                return b.a.createElement(
                  Q.a,
                  { testID: xe },
                  b.a.createElement(Re.b, { text: Ge }),
                  b.a.createElement(N.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Ye,
                    link: '/settings/account/personalization',
                  }),
                  b.a.createElement(N.a, { label: qe, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? b.a.createElement(N.a, { description: Qe, label: Je, link: '/settings/cookie_preferences' })
                    : null,
                  b.a.createElement(he.b, { style: Se.a.descriptionText }, Xe),
                  o._renderGeneral(),
                )
              }),
              h()(c()(o), '_renderSearchInput', function () {
                var e = o.props,
                  t = e.isActiveCreator,
                  n = e.searchIndex,
                  a = o.state.isSearching
                return b.a.createElement(Ee, {
                  isActiveCreator: t,
                  isSearching: a,
                  onChange: function (e) {
                    o.setState({ isSearching: e })
                  },
                  searchIndex: n,
                })
              }),
              h()(c()(o), '_renderGeneral', function () {
                return b.a.createElement(
                  Q.a,
                  null,
                  b.a.createElement(Me.a, null),
                  b.a.createElement(Re.b, { text: Ve }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: We, link: '/settings/display', testID: Fe })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: Ke, link: '/settings/data', testID: Pe })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: He, link: '/settings/accessibility', testID: Ae })
                    : null,
                  b.a.createElement(N.a, { label: tt, link: '/settings/about', testID: Le }),
                )
              }),
              h()(c()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? b.a.createElement(N.a, { label: nt, link: '/settings/feature_switches' })
                  : null
              }),
              h()(c()(o), '_renderMonetization', function () {
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
                return n && a ? b.a.createElement(N.a, { label: at, link: a }) : null
              }),
              h()(c()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === W.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? b.a.createElement(N.a, { label: rt, link: t }) : null
              }),
              h()(c()(o), '_renderReportCenter', function () {
                return o.context.featureSwitches.isTrue('report_center_mvp_r2_enabled')
                  ? b.a.createElement(N.a, { label: ot, link: '/settings/report-center' })
                  : null
              }),
              h()(c()(o), '_handleBackClicked', function () {
                var e = o.props.history
                o.state.isSearching ? o.setState({ isSearching: !1 }) : e.goBack()
              }),
              h()(c()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              h()(c()(o), '_isUserLoggedIn', function () {
                return !!o.props.loggedInUser
              }),
              (o._showVideoAutoplaySetting = Object(ke.a)()),
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
                      _e.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: ze },
                      this._isUserLoggedIn() || Object(Be.c)(this.context.featureSwitches) === Be.a.AcceptAllCookies
                        ? b.a.createElement(F.a, {
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
        })(b.a.Component)
      h()(it, 'contextType', Ne.a)
      t.default = L(it)
    },
    ctla: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        o = n('3XMw'),
        i = n.n(o),
        l = n('yoO3'),
        c = n('csss'),
        s = n('7JQg'),
        u = n('7FtF'),
        d = n('MWbm'),
        p = i.a.hfc86556,
        m = i.a.daef29b7,
        h = i.a.i0dd9b9d,
        f = { page: 'settings', section: 'mute' }
      t.default = function (e) {
        var t = e.location
        return r.a.createElement(
          s.c,
          { namespace: f },
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              u.a,
              { location: t, title: p },
              r.a.createElement(
                d.a,
                null,
                r.a.createElement(c.a, { label: m, link: '/settings/muted/all' }),
                r.a.createElement(c.a, { label: h, link: '/settings/muted_keywords' }),
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
        l = Object(i.a)()
          .propsFromState(function () {
            return { viewerCountry: o.y }
          })
          .withAnalytics({ page: 'settings', section: 'about' }),
        c = n('dzZ/'),
        s = n('3XMw'),
        u = n.n(s),
        d = n('yoO3'),
        p = n('7FtF'),
        m = n('iCwC'),
        h = 'aboutScreen',
        f = n('MWbm'),
        b = n('6vad'),
        y = n('csss'),
        g = n('RKmr'),
        v = n('0yYu'),
        w = n('t62R'),
        E = u.a.cedbb01c,
        C = u.a.b4f917d0,
        _ = u.a.bdfa2b8c,
        S = u.a.j0783ebe,
        k = u.a.c0398892
      function x(e) {
        var t = []
        return (
          t.push(r.a.createElement(b.b, { text: k })),
          t.push(
            r.a.createElement(y.a, {
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
          a = c.a
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
          l = a.filter(function (e) {
            return !e.link
          })
        return r.a.createElement(
          d.a,
          null,
          r.a.createElement(
            p.a,
            { location: t, screenType: 'primaryDetail', title: _ },
            r.a.createElement(
              f.a,
              { testID: h },
              r.a.createElement(g.a, { description: S }),
              r.a.createElement(x, null),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: E }),
              o.map(function (e, t) {
                return r.a.createElement(y.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
              l.map(function (e) {
                return r.a.createElement(
                  w.b,
                  { color: 'gray700', key: e.text, size: 'subtext2', style: [m.a.infoText, m.a.bottomBorder] },
                  e.text,
                )
              }),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: C }),
              i.map(function (e, t) {
                return r.a.createElement(y.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
            ),
          ),
        )
      }
      t.default = l(I)
    },
    fBvp: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return L
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('z84I'), n('ERkP')),
        b = n.n(f),
        y = n('yiKp'),
        g = n.n(y),
        v = (n('ho0z'), n('uFXj'), n('t62R')),
        w = n('IMYl'),
        E = n('cm6r'),
        C = n('rHpw'),
        _ = n('lzTJ'),
        S = n('k/Ka'),
        k = n('MWbm'),
        x = n('r7ya'),
        I = n('I4+6'),
        T = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              h()(c()(e), '_radioRef', b.a.createRef()),
              h()(c()(e), '_handleChange', function (t) {
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
                    E.a,
                    { focusable: !1, interactiveStyles: null, style: [D.root, this._getButtonStyles()] },
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
                            style: D.radioOuterCircle,
                          },
                          b.a.createElement(
                            k.a,
                            { style: [D.radioInnerCircle, e._getCircleStyles()] },
                            a ? b.a.createElement(w.a, { style: D.checkMark }) : null,
                          ),
                        ),
                        b.a.createElement(
                          k.a,
                          { accessibilityHidden: !0, style: D.text },
                          b.a.createElement(v.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, r),
                        ),
                        Object(S.a)('input', {
                          accessibilityLabel: n || r,
                          checked: a,
                          name: o,
                          style: D.nativeControl,
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
        D = C.a.create(function (e) {
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
            nativeControl: g()(
              g()({}, C.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        O = T,
        A = 1,
        L = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              h()(c()(e), '_handleItemChanged', function (t) {
                return function () {
                  ;(0, e.props.onChange)(t)
                }
              }),
              (e._backgroundPickerName = 'background_picker_'.concat(A)),
              (A += 1),
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
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: 'row' === r ? F.row : F.column },
                    o.map(function (t) {
                      return b.a.createElement(O, {
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
        F = C.a.create(function (e) {
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
        l = n.n(i),
        c = n('yoO3'),
        s = n('7FtF'),
        u = 'aboutText',
        d = n('5hXE'),
        p = n('A2ey'),
        m = n('vSJw'),
        h = n('KNZn'),
        f = n('MWbm'),
        b = n('t62R'),
        y = n('0yYu'),
        g = n('6vad'),
        v = n('rHpw'),
        w = l.a.c4881c66,
        E = l.a.a5ce82a4,
        C = l.a.ce494bb3,
        _ = l.a.c783d45e,
        S = l.a.h306a357,
        k = function (e) {
          var t = e.location
          return r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: w },
              r.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: x.aboutText, testID: u }, E),
              r.a.createElement(h.a, null),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: C }),
              r.a.createElement(d.a, null),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: _ }),
              r.a.createElement(f.a, { style: x.colorPicker }, r.a.createElement(m.a, null)),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: S }),
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        y = n('rxPX'),
        g = n('z2Pn'),
        v = Object(y.a)()
          .propsFromState(function () {
            return { themeFocus: g.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: g.k }
          }),
        w = n('MWbm'),
        E = n('3EFP'),
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
                h()(c()(e), '_handleKeyDown', function (t) {
                  var n = e.props,
                    a = n.setThemeFocus,
                    r = n.themeItem
                  t.key === E.d || t.key === E.e ? a('') : a(r)
                }),
                h()(c()(e), '_handleMouseDown', function () {
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        y = n('NeAX'),
        g = n('P1r1'),
        v = n('hqKg'),
        w = n('uD2z'),
        E = n('li/m'),
        C = n('G6rE'),
        _ = n('0KEI'),
        S = n('oEGd'),
        k = Object(v.createSelector)(
          y.selectPreferencesFetchStatus,
          y.selectUserPreferences,
          g.g,
          E.d,
          function (e, t, n, a) {
            return { fetchStatus: e, personalizationString: Object(w.a)(t), settings: n, hasCommunityMemberships: a }
          },
        ),
        x = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: y.fetchPreferencesIfNeeded,
          patchUser: C.e.patchUser,
          updateSettings: g.M,
        },
        I = Object(S.f)(k, x),
        T = n('v//M'),
        D = n('3XMw'),
        O = n.n(D),
        A = n('yoO3'),
        L = n('7FtF'),
        F = 'privacyAndSafetyScreen',
        P = n('MWbm'),
        R = n('Irs7'),
        M = n('v6aA'),
        N = n('6vad'),
        B = n('e0ey'),
        H = n('csss'),
        j = n('0yYu'),
        z = n('eb3s'),
        V = O.a.cad53943,
        U = O.a.bab1f8b0,
        W = O.a.f5e59e90,
        K = O.a.i0310b4e,
        G = { headline: O.a.j8bf07ab, text: O.a.ca8034b3, confirmButtonLabel: O.a.c5d4192a },
        Y = { headline: O.a.gea6cc19, text: O.a.j7fc0afc, confirmButtonLabel: O.a.f527b322 },
        q = O.a.jabb9c9a,
        X = O.a.f56d108e,
        J = { all: O.a.d165c992, following: O.a.ea339390, none: O.a.e3a761ee },
        Q = O.a.d4986f85,
        Z = O.a.h6ce12ed,
        $ = O.a.ebcb68ae,
        ee = O.a.afdf29b8,
        te = O.a.e1929815,
        ne = O.a.d9172541,
        ae = O.a.e84e1c41,
        re = O.a.hefdc08f,
        oe = O.a.b608c1a0,
        ie = O.a.j2c3033a,
        le = O.a.fd4d9068,
        ce = O.a.fd4d9068,
        se = O.a.hfb77cf5,
        ue = O.a.fc1d217b,
        de = O.a.acdcc101,
        pe = O.a.hfc86556,
        me = O.a.a5f32aa2,
        he = O.a.eb75875d,
        fe = O.a.aea62567,
        be = O.a.e8f57e07,
        ye = O.a.e8f57e07,
        ge = O.a.b59540c2,
        ve = { all: O.a.bd34d8f8, following: O.a.d22dad9e, none: O.a.ad41e8b3 },
        we = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(
                c()(e),
                'showPeriscopeAuthOption',
                e.context.featureSwitches.isTrue('responsive_web_live_video_parity_periscope_auth_enabled'),
              ),
              h()(c()(e), 'state', { showProtectedConfirmation: !1 }),
              h()(c()(e), '_handleItemChanged', function (t, n) {
                e._updateSettings(h()({}, t, n))
              }),
              h()(c()(e), '_handleDMFromChanged', function (t, n) {
                e._updateSettings(h()({}, t, n ? 'all' : 'following'))
              }),
              h()(c()(e), '_handleDMQualityFilterChanged', function (t, n) {
                e._updateSettings(h()({}, t, n ? 'enabled' : 'disabled'))
              }),
              h()(c()(e), '_handleDMReceiptChanged', function (t, n) {
                e._updateSettings(h()({}, t, n ? 'all_enabled' : 'all_disabled'))
              }),
              h()(c()(e), '_handleProtectedChanged', function (t, n) {
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
              h()(c()(e), '_handleProtectedCancel', function () {
                e.setState({ showProtectedConfirmation: !1 })
              }),
              h()(c()(e), '_handleProtectedConfirm', function () {
                e.setState({ showProtectedConfirmation: !1 })
                var t = e.props,
                  n = t.analytics,
                  a = t.patchUser
                e._updateSettings({ protected: !0 }).then(function () {
                  n.scribe({ section: 'privacy', element: 'protected', action: 'enable' }),
                    e.context.loggedInUserId && a(e.context.loggedInUserId, { protected: !0 })
                })
              }),
              h()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.personalizationString,
                  a = t.settings,
                  r = J[a.allow_media_tagging],
                  o = ve[a.allow_contributor_request]
                return b.a.createElement(
                  P.a,
                  null,
                  b.a.createElement(N.b, { text: U }),
                  b.a.createElement(B.a, {
                    checked: a.protected,
                    helpText: K,
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
                  b.a.createElement(N.b, { text: le }),
                  b.a.createElement(H.a, { label: ce, link: '/settings/contacts' }),
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
                  b.a.createElement(H.a, { label: me, link: '/settings/blocked/all' }),
                  b.a.createElement(H.a, { label: he, link: '/settings/notifications' }),
                  b.a.createElement(H.a, { label: fe, link: '/settings/search' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(N.b, { text: ye }),
                  b.a.createElement(H.a, { description: n, label: be, link: '/settings/account/personalization' }),
                  b.a.createElement(j.a, null),
                  b.a.createElement(N.b, { key: 'header', text: ge }),
                  b.a.createElement(H.a, { description: o, key: 'pivot', label: ge, link: '/settings/teams' }),
                )
              }),
              h()(c()(e), '_handleFetchPreferences', function () {
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
                    { testID: F },
                    b.a.createElement(
                      L.a,
                      { location: a, screenType: 'primaryDetail', title: V },
                      b.a.createElement(
                        A.a,
                        null,
                        b.a.createElement(T.a, {
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
      h()(we, 'contextType', M.a)
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        b = n.n(f),
        y = n('+Kfv'),
        g = n('0yYu'),
        v = n('7nmT'),
        w = n.n(v),
        E = n('ddV6'),
        C = n.n(E),
        _ = n('3XMw'),
        S = n.n(_),
        k = n('kIAd'),
        x = n('JYMr'),
        I = n('rHpw'),
        T = S.a.f2b3fe06,
        D = I.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        O = function (e) {
          var t = e.isLoading,
            n = b.a.useState(!1),
            a = C()(n, 2),
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
            b.a.createElement(x.a, { ariaValueText: r ? T : '', indeterminate: r, style: !r && D.hidden })
          )
        },
        A = n('ZcYN'),
        L = n('MWbm'),
        F = n('oQhu'),
        P = n('w6IS'),
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
              h()(c()(o), '_setFocusedItemRef', function (e) {
                o._shouldScrollToFocusedItem &&
                  e &&
                  (Object(R.c)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
              }),
              h()(c()(o), '_resetScroll', function () {
                var e = o._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              h()(
                c()(o),
                '_getFlattenedItems',
                Object(F.a)(function (e) {
                  return Object(P.a)(e)
                }),
              ),
              h()(c()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemClick,
                  i = o._getFlattenedItems(a).indexOf(e)
                e && !t && !o._shouldBlockInteractivity && r(e, i), o._resetFocus()
              }),
              h()(c()(o), '_getResultCount', function () {
                var e = o.props.items
                return o._getFlattenedItems(e).length
              }),
              h()(c()(o), '_setFocusIndex', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), r && r(o._getFlattenedItems(a)[e])
              }),
              h()(c()(o), '_resetFocus', function () {
                o._setFocusIndex(o.props.withItemAlwaysSelected ? 0 : -1)
              }),
              h()(c()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              h()(c()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              }),
              h()(c()(o), 'hasFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                return e >= 0 && t > e
              }),
              h()(c()(o), 'selectFocusedItem', function () {
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
                    l = t.renderNoResultsState,
                    c = t.selectedItems,
                    s = t.style,
                    u = a || r.length,
                    d = 0,
                    p = !!c
                  return u
                    ? b.a.createElement(
                        y.a,
                        { behavioralEventContext: M },
                        b.a.createElement(
                          L.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: s },
                          o ? o() : null,
                          b.a.createElement(O, { isLoading: !!a }),
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
                    : l
                    ? l()
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
                    o && n ? b.a.createElement(g.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                    e.map(function (e, n) {
                      return r._renderTypeaheadItem(e, t + n)
                    }),
                    o && a ? b.a.createElement(g.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
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
                    l = n.query,
                    c = n.renderUserDecoration,
                    s = n.selectedItems,
                    u = n.source,
                    d = this.state.focusIndex,
                    p = !(!s || !e.id) && s.indexOf(e.id) >= 0,
                    m = !!s,
                    h = d === t,
                    f = o && o(e, e.data),
                    y = r && r(e, e.data)
                  return b.a.createElement(A.b, {
                    disabledMessage: y,
                    domId: h ? a : void 0,
                    getUserDisplayNameLabel: i,
                    isDisabled: f,
                    isFocused: h,
                    isInMultiSelect: m,
                    isSelected: p,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: h ? this._setFocusedItemRef : void 0,
                    query: l,
                    renderUserDecoration: c,
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
        return c
      }),
        n.d(t, 'a', function () {
          return s
        })
      n('KOtZ'), n('7x/C'), n('+KXO')
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.dae57a41,
        i = r.a.i7cbc154,
        l = r.a.e3a761ee,
        c = function (e) {
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
          return { some: i, none: l, all: o }[c(e)]
        }
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = n('KEM+'),
        p = n.n(d),
        m = (n('z84I'), n('ERkP')),
        h = n.n(m),
        f = n('yiKp'),
        b = n.n(f),
        y = n('1Pcy'),
        g = n.n(y),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        w = n('cm6r'),
        E = n('rHpw'),
        C = n('k/Ka'),
        _ = n('MWbm'),
        S = n('x0mb'),
        k = n('IMYl'),
        x = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(g()(e), '_radioRef', h.a.createRef()),
              p()(g()(e), '_handleChange', function () {
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
                    l = v.a.generate({
                      backgroundColor: E.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return h.a.createElement(
                    _.a,
                    { style: [I.container, o] },
                    h.a.createElement(
                      w.a,
                      { accessibilityRole: 'label', interactiveStyles: l, style: [I.choice, I.choiceContainer] },
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
        T = x,
        D = 1,
        O = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(D, '_LABEL')), (D += 1), e
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
                    l = t.value,
                    c = 'two-rows' === r,
                    s = [A.root, c && A.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return h.a.createElement(
                    _.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return h.a.createElement(T, {
                        accessibilityLabel: n,
                        autoFocus: a && l === r,
                        colorName: r,
                        isSelected: l === r,
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
      p()(O, 'defaultProps', { layout: 'one-row' })
      var A = E.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = O
    },
    vSJw: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        y = n('HPNB'),
        g = n('P1r1'),
        v = n('rxPX'),
        w = Object(v.a)()
          .propsFromActions(function () {
            return { updateSettings: g.M }
          })
          .withAnalytics(),
        E = n('3XMw'),
        C = n.n(E),
        _ = n('huBF'),
        S = n('lzTJ'),
        k = n('rHpw'),
        x = n('cHvH'),
        I = n('uI9t'),
        T = S.f.ThemePrimaryColorNames,
        D = C.a.aefc5b20,
        O = [
          { accessibilityLabel: C.a.a52d0fdd, colorName: T.blue500 },
          { accessibilityLabel: C.a.d818cdd5, colorName: T.yellow500 },
          { accessibilityLabel: C.a.fee1cd64, colorName: T.magenta500 },
          { accessibilityLabel: C.a.cbed7fb2, colorName: T.purple500 },
          { accessibilityLabel: C.a.g697ec02, colorName: T.orange500 },
          { accessibilityLabel: C.a.a7c22049, colorName: T.green500 },
        ],
        A = w(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(c()(e), '_handleColorChange', function (t) {
                  var n = e.props,
                    a = n.analytics,
                    r = n.updateSettings
                  a.scribe({ component: 'color_picker', element: 'option', action: t }),
                    r({ themeColor: T[t] }),
                    k.a.setPrimaryColor(T[t])
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
                          accessibilityLabel: D,
                          autoFocus: t,
                          layout: y.a.shouldRenderAsModal(n) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: O,
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
      t.a = A
    },
    woHV: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        l = (n('ERkP'), n('k/Ka')),
        c = n('rHpw').a.create({
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
        return Object(l.a)('form', r()(r()({}, n), {}, { action: '#', style: [c.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
