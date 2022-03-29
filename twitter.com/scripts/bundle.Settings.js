;(window.webpackJsonp = window.webpackJsonp || []).push([
  [87, 12],
  {
    '2qZs': function (e, t, n) {
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
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M2.264 22.983c-.322 0-.638-.126-.88-.368-.374-.374-.473-.926-.25-1.405L2.8 17.58c-1.017-1.7-1.55-3.62-1.55-5.58C1.25 6.072 6.072 1.25 12 1.25S22.75 6.072 22.75 12 17.928 22.75 12 22.75c-1.957 0-3.876-.533-5.55-1.54l-3.66 1.657c-.17.078-.35.116-.526.116zm4.158-3.286c.278 0 .558.077.807.23 1.434.864 3.085 1.323 4.77 1.323 5.1 0 9.25-4.15 9.25-9.25S17.1 2.75 12 2.75 2.75 6.9 2.75 12c0 1.688.458 3.338 1.326 4.774.266.44.298.977.086 1.434l-1.384 3.014 3.016-1.386c.2-.093.413-.14.628-.14z',
              }),
              i.a.createElement('path', {
                d: 'M12 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25zm0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25z',
              }),
              i.a.createElement('path', {
                d: 'M14.5 12.75c-.414 0-.75-.336-.75-.75 0-.965-.785-1.75-1.75-1.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.792 0 3.25 1.458 3.25 3.25 0 .414-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
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
        g = (n('+KXO'), n('uFXj'), n('2G9S'), n('vrRf'), n('ERkP')),
        v = n.n(g),
        b = n('P1r1'),
        y = n('RqPI'),
        w = n('rxPX'),
        _ = Object(w.a)()
          .propsFromState(function () {
            return { language: y.p, scale: b.y }
          })
          .propsFromActions(function () {
            return { updateSettings: b.M }
          })
          .withAnalytics(),
        C = n('3XMw'),
        E = n.n(C),
        x = n('huBF'),
        k = n('MWbm'),
        S = n('lzTJ'),
        T = n('rHpw'),
        I = n('t62R'),
        L = n('9RkS'),
        P = S.f.ThemeScaleNames,
        O = Object.keys(P),
        D = O.length - 1,
        A = E.a.d8680056,
        R = E.a.eed02405,
        F = E.a.j59f0b93,
        M = E.a.b81aaad8,
        B = E.a.c704488f,
        N =
          ((a = {}),
          f()(a, P.xSmall, A),
          f()(a, P.small, R),
          f()(a, P.normal, F),
          f()(a, P.large, M),
          f()(a, P.xLarge, B),
          a),
        H = [A, R, F, M, B],
        j = E.a.e46dffa0,
        U = (function (e) {
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
                  o = O[t]
                a.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  T.a.setScale(P[o])
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
                  return v.a.createElement(x.a, { themeItem: 'textSize' }, function (t) {
                    return v.a.createElement(
                      k.a,
                      { style: z.sliderContainer },
                      v.a.createElement(I.b, { size: 'subtext2' }, 'Aa'),
                      v.a.createElement(
                        k.a,
                        { style: z.slider },
                        v.a.createElement(L.a, {
                          accessibilityLabel: j,
                          accessibilityLabelValueText: N[T.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: H,
                          max: D,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: O.indexOf(T.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      v.a.createElement(I.b, { size: 'headline1' }, 'Aa'),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        z = T.a.create(function (e) {
          return {
            sliderContainer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space16 },
            slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 },
          }
        }),
        W = _(U)
      t.a = W
    },
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('yH/f')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('t62R'),
        i = n('EHV7'),
        l = n('rHpw'),
        c = l.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        s = n('7Mjr'),
        u = n('I4+6'),
        d = n('cm6r'),
        p = n('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var h = l.a.create(function (e) {
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
          a = e.nativeID,
          f = e.rightControl,
          g = e.style,
          v = e.subtext,
          b = e.testID,
          y = e.text,
          w = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(i.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          _ = v ? null : h.withSubtext,
          C = u.a.generate({
            backgroundColor: l.a.theme.colors.gray0,
            color: l.a.theme.colors.cellBackground,
            customFocusBackgroundColor: l.a.theme.colors.gray0,
            customHoverBackgroundColor: l.a.theme.colors.gray0,
            customPressedBackgroundColor: l.a.theme.colors.gray0,
          })
        return r.a.createElement(
          d.a,
          {
            interactiveStyles: n ? C : null,
            link: null == n ? void 0 : n.url,
            nativeID: a,
            style: [h.root, g],
            testID: b,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            r.a.createElement(p.a, { style: h.icon }, w),
            r.a.createElement(
              o.b,
              { numberOfLines: 3, size: 'headline1', style: _, weight: 'heavy', withHashflags: !0 },
              y,
            ),
            r.a.createElement(
              p.a,
              { style: h.rightControlGroup },
              n ? r.a.createElement(p.a, { style: _ }, r.a.createElement(s.a, { style: h.iconArrow })) : null,
              f ? r.a.createElement(p.a, null, f) : null,
            ),
          ),
          v
            ? r.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                v,
              )
            : null,
        )
      }
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
        g = n.n(f),
        v = n('P1r1'),
        b = n('G6rE'),
        y = n('rxPX'),
        w = n('0KEI'),
        _ = Object(y.a)()
          .propsFromState(function () {
            return { fetchStatus: v.n, loggedInUser: b.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: v.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        C = n('v//M'),
        E = n('3XMw'),
        x = n.n(E),
        k = n('M2mT'),
        S = 'settingsDetailSave',
        T = n('mw9i'),
        I = n('0yYu'),
        L = n('/yvb'),
        P = n('rHpw'),
        O = x.a.i2209530,
        D = (function (e) {
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
                return g.a.createElement(C.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              h()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  l = t.withMarginBottom
                return g.a.createElement(
                  T.a,
                  { style: [A.contentRoot, l && A.withMarginBottom] },
                  n,
                  a
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(I.a, null),
                        g.a.createElement(
                          T.a,
                          { style: A.buttonContainer },
                          g.a.createElement(L.a, { disabled: r, onPress: a, style: A.button, testID: S, type: i }, o),
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
                  return g.a.createElement(
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
        })(g.a.Component)
      h()(D, 'defaultProps', { submitLabel: O, submitType: 'brandFilled', withMarginBottom: !0 })
      var A = P.a.create(function (e) {
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
      t.a = _(D)
    },
    '9B+1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var a = n('PbbS'),
        r = function (e) {
          return { topicId: e.topicId, functionalityType: e.functionalityType }
        },
        o = function (e) {
          return e === a.a.Star
            ? a.a.Star
            : e === a.a.Favorite
            ? a.a.Favorite
            : e === a.a.Interested
            ? a.a.Interested
            : a.a.Default
        }
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
        g = n('ERkP'),
        v = n.n(g),
        b = n('HPNB'),
        y = n('v6aA'),
        w = n('P1r1'),
        _ = n('rxPX'),
        C = Object(_.a)()
          .propsFromActions(function () {
            return { updateSettings: w.M }
          })
          .withAnalytics(),
        E = n('3XMw'),
        x = n.n(E),
        k = n('huBF'),
        S = n('lzTJ'),
        T = n('rHpw'),
        I = n('cHvH'),
        L = n('fBvp'),
        P = S.f.ThemePaletteNames,
        O = x.a.ce8a8115,
        D = [
          { label: x.a.j59f0b93, accessibilityLabel: x.a.d3d48f39, backgroundName: P.light },
          { label: x.a.i76f67ed, backgroundName: P.dark },
          { label: x.a.c8f85960, backgroundName: P.darker },
        ],
        A = (function (e) {
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
                var o = P[t]
                T.a.setPalette(o), r({ themeBackground: o }), f.c(t, e.context.featureSwitches)
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
                  return v.a.createElement(I.a, null, function (t) {
                    var n = t.windowWidth
                    return v.a.createElement(k.a, { themeItem: 'background' }, function (t) {
                      return v.a.createElement(L.a, {
                        accessibilityLabel: O,
                        autoFocus: t,
                        layout: b.a.shouldRenderAsModal(n) ? 'row' : 'column',
                        onChange: e._handleBackgroundChange,
                        options: D,
                        value: T.a.theme.paletteName,
                      })
                    })
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(A, 'contextType', y.a)
      var R = C(A)
      t.a = R
    },
    ALyI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsVideoAutoplay', function () {
          return z
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
        g = n.n(f),
        v = (n('KqXw'), n('MvUL'), n('ERkP')),
        b = n.n(v),
        y = n('FPOR'),
        w = n('zh9S'),
        _ = n('hqKg'),
        C = n('0KEI'),
        E = n('oEGd'),
        x = n('H9MA'),
        k = Object(_.createSelector)(x.f, x.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        S = {
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: w.a,
          scribeAction: w.c,
          scribePageImpression: w.d,
          updateVideoAutoplay: x.i,
        },
        T = Object(E.f)(k, S),
        I = n('45mF'),
        L = n('3XMw'),
        P = n.n(L),
        O = n('7FtF'),
        D = n('3cwy'),
        A = n('MWbm'),
        R = n('3JAx'),
        F = n('t62R'),
        M = n('6v1f'),
        B = P.a.a776eed7,
        N = P.a.ede134f2,
        H = P.a.i859a9d3,
        j = { page: 'settings', section: 'autoplay' },
        U = function (e) {
          return { value: e, label: y.a[e] }
        },
        z = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              g()(u()(o), '_handleItemChanged', function (e, t) {
                var n = o.props,
                  a = n.createLocalApiErrorHandler,
                  i = n.scribeAction,
                  l = n.updateVideoAutoplay
                i(r()(r()({}, j), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  l(M.b[t]).catch(a(r()(r()({}, Object(I.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(U(M.b.Always)),
              M.c && o._options.push(U(M.b.WiFiOnly)),
              o._options.push(U(M.b.Off)),
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
                    (!t && Object(D.a)()) || this.props.history.replace('/settings/data')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.videoAutoplay
                  return b.a.createElement(
                    O.a,
                    { location: t, title: B },
                    b.a.createElement(
                      A.a,
                      null,
                      b.a.createElement(R.a, {
                        description: b.a.createElement(
                          b.a.Fragment,
                          null,
                          ''.concat(N, ' '),
                          b.a.createElement(F.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, H),
                        ),
                        label: B,
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
        })(b.a.Component)
      t.default = T(z)
    },
    AOWc: function (e, t, n) {
      'use strict'
      n('ho0z'), n('849X'), n('TJCb')
      function a(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(a.prototype = Object.create(Error.prototype)), (a.prototype.constructor = a)
      t.a = function (e, t) {
        if (!e) throw new a(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
      }
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return g
      }),
        n.d(t, 'a', function () {
          return v
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        l = (n('z84I'), n('Blm6'), n('lTEL'), n('7x/C'), n('kYxP'), n('LW0h'), n('lnti')),
        c = n('aWyx'),
        s = n('Yatk'),
        u = ['users'],
        d = ['conversation_id', 'participants'],
        p = ['conversation_id', 'participants', 'social_proof'],
        m = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.map(function (e) {
            return r()(
              r()({}, e),
              {},
              {
                user: Object(s.a)(t[e.user_id]) || {
                  created_at: '',
                  description: '',
                  entities: {},
                  followed_by: !1,
                  followers_count: 0,
                  following: !1,
                  friends_count: 0,
                  id: parseInt(e.user_id, 10),
                  id_str: e.user_id,
                  name: '',
                  profile_image_url_https: '',
                  protected: !1,
                  screen_name: '',
                  verified: !1,
                },
              },
            )
          })
        }
      function f(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var g = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = e.conversation_id,
            o = e.participants,
            l = i()(e, d)
          return r()(
            r()({ conversation_id: a }, l),
            {},
            { entries: t.entryIdsByConversationId[a] || [], participants: h(o, n) },
          )
        },
        v = function (e, t, n) {
          var a = e.conversation_id,
            o = e.participants,
            d = e.social_proof,
            m = i()(e, p),
            g = r()(
              r()({ conversation_id: a }, m),
              {},
              { entries: f(a, t), participants: h(o, n), social_proof: void 0 },
            )
          return (
            d &&
              (g.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === c.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      a = i()(t, u)
                    return r()(
                      r()({}, a),
                      {},
                      {
                        users: Object(l.a)(
                          n.map(function (t) {
                            return Object(s.a)(e[t])
                          }),
                        ),
                      },
                    )
                  }
                  return t
                })
              })(d, n)),
            g
          )
        }
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
    BLtI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return An
      })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('97Jx'),
        i = n.n(o),
        l = n('yiKp'),
        c = n.n(l),
        s = n('VrFO'),
        u = n.n(s),
        d = n('Y9Ll'),
        p = n.n(d),
        m = n('1Pcy'),
        h = n.n(m),
        f = n('5Yy7'),
        g = n.n(f),
        v = n('2VqO'),
        b = n.n(v),
        y = n('KEM+'),
        w = n.n(y),
        _ =
          (n('2G9S'),
          n('KqXw'),
          n('WNMA'),
          n('hBvt'),
          n('ho0z'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('849X'),
          n('5BYb'),
          n('uFXj'),
          n('ERkP')),
        C = n.n(_),
        E = n('rcen'),
        x = n('Rp9C'),
        k = n('MWbm'),
        S = n('Irs7'),
        T = n('htQn'),
        I = n('t62R'),
        L = n('OOKO'),
        P = n('/yvb'),
        O = n('rHpw'),
        D = n('v6aA'),
        A = n('Lsrn'),
        R = n('k/Ka'),
        F = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(R.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [A.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M20.937 3.223c-.403-.263-.948-.375-1.48-.195-.726.247-1.906.534-3.457.534-1.38 0-2.286-.225-3.273-.472l-.01-.003c-1.01-.252-2.1-.525-3.717-.525-1.67 0-3.235.484-4.357.946-.16.066-.312.132-.455.197V2.75c0-.518-.42-.938-.938-.938s-.937.42-.937.938v18.5c0 .518.42.938.938.938s.94-.42.94-.938v-2.457c.28-.15.682-.35 1.168-.55 1.002-.414 2.312-.806 3.642-.806 1.38 0 2.286.225 3.273.472l.01.002c1.01.253 2.102.525 3.717.525 2.4 0 4.075-.6 4.804-.922.58-.257.883-.823.883-1.378V4.577c0-.612-.343-1.088-.75-1.354zm-3.28 8.717c-.465.226-1.026.03-1.25-.435-.71-1.462-2.598-1.42-3.234.113l-.307.74c-.145.35-.487.58-.866.58-.38 0-.72-.23-.866-.58l-.308-.74c-.636-1.532-2.525-1.576-3.233-.113-.226.466-.786.66-1.252.435-.465-.226-.66-.786-.434-1.252C7.16 8.1 10.392 7.905 12 9.94c1.608-2.035 4.84-1.84 6.094.748.225.466.03 1.026-.436 1.252z',
              }),
            ),
          )
        }
      F.metadata = { width: 24, height: 24 }
      var M = F,
        B = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(R.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [A.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M3.25 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v1.247C5.144 3.453 7.007 2.75 9 2.75c1.592 0 2.655.266 3.682.522.982.246 1.91.478 3.318.478 1.687 0 2.945-.332 3.704-.61.41-.15.87-.086 1.235.168.35.244.56.64.56 1.054V16.21c0 .474-.272.905-.694 1.1-.62.284-2.325.94-4.806.94-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433v2.567c0 .414-.336.75-.75.75zM4 5.683v11.314c1.144-.544 3.007-1.247 5-1.247 1.592 0 2.655.266 3.682.522.982.245 1.91.478 3.318.478 1.975 0 3.36-.458 4-.725v-11.4c-.887.302-2.246.625-4 .625-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433z',
              }),
              C.a.createElement('path', {
                d: 'M17.925 10.77c-1.23-2.543-4.46-2.65-5.925-.496-1.465-2.153-4.695-2.047-5.925.495-.18.372-.025.82.348 1 .373.182.82.026 1.002-.347.78-1.61 2.878-1.556 3.575.123l.308.74c.116.28.39.464.693.464s.578-.182.694-.463l.306-.74c.697-1.68 2.795-1.734 3.575-.124.18.373.63.53 1.002.348.373-.18.53-.628.348-1z',
              }),
            ),
          )
        }
      B.metadata = { width: 24, height: 24 }
      var N = B,
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(R.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [A.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var j = H,
        U = n('7Mjr'),
        z = (function (e) {
          g()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(h()(e), '_scribeAction', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.destinationUrl,
                  o = n.note
                a.scribe({ action: t, data: { items: [x.a.getBirdwatchItem(null == o ? void 0 : o.rest_id, r)] } })
              }),
              w()(h()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              w()(h()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return C.a.createElement(M, { style: W.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return C.a.createElement(N, { style: W.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return C.a.createElement(j, { style: W.birdwatchIcon, testID: 'icon-birdwatch-fill' })
                }
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.callToAction,
                    n = e.destinationUrl,
                    a = e.footer,
                    r = e.iconType,
                    o = e.subtitle,
                    i = e.title,
                    l = '#' === n ? void 0 : { pathname: n, anchorless: !0 },
                    c = l ? this._handlePivotClick : void 0,
                    s = (null == t ? void 0 : t.destinationUrl) || '#',
                    u = '#' === s ? void 0 : s
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    C.a.createElement(
                      T.a,
                      {
                        link: l,
                        onPress: c,
                        style: W.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!l,
                      },
                      C.a.createElement(
                        k.a,
                        { style: W.headerContainer },
                        C.a.createElement(
                          k.a,
                          { style: [W.headerTextContainer, !t && W.headerTextAndThumbnailContainer] },
                          this._getBirdwatchIcon(r),
                          C.a.createElement(I.b, { size: 'subtext1', style: W.birdwatchLabel, weight: 'bold' }, i),
                        ),
                        t ? null : C.a.createElement(U.a, { style: W.icon, testID: 'icon-arrow-right' }),
                      ),
                      o
                        ? C.a.createElement(E.a, {
                            entities: o.entities,
                            size: 'body',
                            style: W.subtitle,
                            text: o.text,
                          })
                        : null,
                      t
                        ? C.a.createElement(
                            C.a.Fragment,
                            null,
                            C.a.createElement(L.a, { spacing: 'space2' }),
                            C.a.createElement(
                              k.a,
                              { style: W.callToActionContainer },
                              C.a.createElement(I.b, { size: 'subtext1' }, t.prompt),
                              C.a.createElement(
                                P.a,
                                { link: u, onPress: this._handlePivotClick, size: 'small', type: 'primaryOutlined' },
                                t.title,
                              ),
                            ),
                          )
                        : null,
                    ),
                    a
                      ? C.a.createElement(E.a, {
                          color: 'gray700',
                          entities: a.entities,
                          size: 'subtext2',
                          style: W.footer,
                          text: a.text,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      w()(z, 'contextType', D.a)
      var W = O.a.create(function (e) {
          return {
            birdwatchLabel: { display: 'flex', alignItems: 'center' },
            footer: { paddingVertical: e.spaces.space12 },
            pivotContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space12,
              overflow: 'hidden',
            },
            headerContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              backgroundColor: e.colors.hoverBlack,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            headerTextContainer: { flexDirection: 'row', width: '100%' },
            headerTextAndThumbnailContainer: { width: '80%' },
            callToActionContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            icon: { color: e.colors.text, paddingLeft: e.spaces.space12, flexShrink: 0 },
            birdwatchIcon: {
              marginRight: e.spacesPx.space4,
              padding: e.spacesPx.space2,
              color: e.colors.primary,
              flexShrink: 0,
            },
            thumbnail: { color: e.colors.whiteOnColor },
            subtitle: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12 },
          }
        }),
        V = Object(S.a)(z, { element: 'birdwatch_pivot' }),
        G = n('6/RC'),
        q = n('3XMw'),
        K = n.n(q),
        Y = n('5S/X'),
        X = n('Ey+e'),
        Q = n('caTy'),
        J = n('Y6L+'),
        Z = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        $ = Object(Z.a)({
          loader: function () {
            return n.e(180).then(n.bind(null, 'mL9d'))
          },
        }),
        ee = n('m3Bd'),
        te = n.n(ee),
        ne = n('xM7j'),
        ae = n('LKCq'),
        re = ['onActionClick'],
        oe = 'inner_tombstone'
      function ie(e) {
        var t,
          n = e.children,
          a = e.config,
          r = e.nativeID,
          o = Object(S.b)()
        if (Y.b) return n
        var l = (null === (t = a.richRevealText) || void 0 === t ? void 0 : t.text) || a.revealText,
          c = a.richText
            ? C.a.createElement(E.a, {
                alignment: a.richText.alignment,
                entities: a.richText.entities,
                onEntityClick: function () {
                  o.scribe({ action: 'open_link', component: oe })
                },
                rtl: a.richText.rtl,
                text: a.richText.text,
              })
            : a.text
        return C.a.createElement(
          k.a,
          { nativeID: r },
          l
            ? C.a.createElement(
                ae.a,
                {
                  label: c,
                  onReveal: function () {
                    o.scribe({ action: 'click', component: oe })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      n = te()(e, re)
                    return C.a.createElement(ne.a, i()({}, n, { inline: !0, onClick: t }))
                  },
                  revealLabel: l,
                },
                n,
              )
            : C.a.createElement(ne.a, { inline: !0 }, c),
        )
      }
      var le = n('PeW/'),
        ce = n('3IPs'),
        se = (n('1t7P'), n('jQ/y'), n('PbbS')),
        ue = n('LWCC'),
        de = n('JUsM'),
        pe = O.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        me = function (e) {
          var t = e.defaultRef,
            n = e.topic,
            a = e.topicFollowPrompt,
            r = (null == a ? void 0 : a.description) || {},
            o = r.entities,
            i = r.text
          return C.a.createElement(
            k.a,
            { style: pe.topicFollowPrompt },
            C.a.createElement(de.a, {
              containerRef: t,
              primaryAction: C.a.createElement(ue.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: se.a.FollowTopic,
                topic: n,
              }),
              text: C.a.createElement(E.a, { entities: o, text: i }),
            }),
          )
        },
        he = n('SrIh'),
        fe = n('gdQ4'),
        ge = n('qbku'),
        ve = n('tocL'),
        be = 'analyticsButton',
        ye = 'promotedIndicator',
        we = 'readerModeBottomBar',
        _e = 'socialContext',
        Ce = 'tweet',
        Ee = n('X04g'),
        xe = n('v/3V'),
        ke = (n('Ysgh'), n('jwue'), n('+oxZ'), n('RqPI')),
        Se = n('3zvM'),
        Te = n('lMB6'),
        Ie = n('iChn'),
        Le = Object(Se.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, n) {
              return e.Tweets.fetchTranslation(t, n).then(Pe)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Pe = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(Ie.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        Oe = Te.a.register(Le),
        De = n('rxPX'),
        Ae = n('0KEI'),
        Re = function (e, t) {
          return Oe.select(e, t.tweetId)
        },
        Fe = function (e, t) {
          return Oe.selectFetchStatus(e, t.tweetId)
        },
        Me = Object(De.a)()
          .propsFromState(function () {
            return { translation: Re, translationFetchStatus: Fe, userLanguage: ke.p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: Oe.fetchOneIfNeeded,
            }
          }),
        Be = n('PdwO'),
        Ne = n('cTG8'),
        He = n('oQhu'),
        je = n('YeIG'),
        Ue = n('Gpeq'),
        ze = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'hitHighlights',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'weight',
          'withOriginalText',
        ],
        We = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        Ve = K.a.b4947556,
        Ge = (function (e) {
          g()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(h()(e), '_fetchTranslation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(n())
              }),
              w()(h()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  n = t.disableTranslation,
                  a = t.displayTextRange,
                  r = t.entities,
                  o = t.lang,
                  i = t.supplementalLang,
                  l = t.text,
                  c = t.userLanguage
                return e._getMemoizedDisableTranslation(n, a, r, l, o, i, c)
              }),
              w()(h()(e), '_renderTranslation', function () {
                var t = e.props,
                  n =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.hitHighlights,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  a = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, te()(t, ze))
                if (n)
                  return C.a.createElement(
                    Ne.a,
                    i()({}, a, {
                      displayTextRange: e._getMemoizedDisplayTextRange(n.text),
                      entities: n.entities,
                      lang: n.destinationLanguage,
                      text: n.text,
                    }),
                  )
              }),
              w()(
                h()(e),
                '_getMemoizedDisplayTextRange',
                Object(He.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              w()(
                h()(e),
                '_getMemoizedDisableTranslation',
                Object(He.a)(function (e, t, n, a, r, o, i) {
                  var l = i && Object(Ue.c)(r.split('-')[0]) !== Object(Ue.c)(i.split('-')[0])
                  return e || !!o || !l || !Object(Ue.b)({ displayTextRange: t, entities: n, text: a, language: r })
                }),
              ),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.onMediaTranslation,
                    a = t.translation
                  if (e.translation !== a && a) {
                    var r,
                      o = this.context.featureSwitches,
                      i = {}
                    ;((null == a || null === (r = a.entities) || void 0 === r ? void 0 : r.media) || []).forEach(
                      function (e) {
                        e.alt_text && (i[e.id_str] = e.alt_text)
                      },
                    ),
                      n && !Object(je.a)(i) && o.isTrue('responsive_web_alt_text_translations_enabled') && n(i)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    n = (e.onMediaTranslation, e.style),
                    a = (e.supplementalLang, e.translation),
                    r = e.translationFetchStatus,
                    o = e.tweetId,
                    i = (e.userLanguage, e.withOriginalText),
                    l = te()(e, We)
                  return C.a.createElement(
                    Be.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: o,
                      originLanguage: a && a.localizedSourceLanguage,
                      style: n,
                      translateButtonText: Ve,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: r,
                      withOriginalText: i,
                    },
                    C.a.createElement(Ne.a, l),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      w()(Ge, 'contextType', D.a)
      var qe = Me(Ge),
        Ke = n('2qZs'),
        Ye = n('wwsH'),
        Xe = { viewType: 'birdwatch' },
        Qe = O.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        Je = function (e) {
          var t = e.onPress,
            n = e.onShow,
            a = e.tweetId,
            r = { pathname: '/i/birdwatch/t/'.concat(a), external: !0 }
          return (
            C.a.useEffect(
              function () {
                n && n()
              },
              [n],
            ),
            C.a.createElement(Ye.a, {
              Icon: Ke.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: Xe,
              link: r,
              onPress: t,
              style: Qe.birdwatchIcon,
            })
          )
        },
        Ze = n('xXop'),
        $e = n('xrkw'),
        et = n('mqpi'),
        tt = K.a.g1fa869c,
        nt = (function (e) {
          g()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(h()(e), '_shouldDisable', et.b.bind(null, e.context.featureSwitches)),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.endControl,
                    n = e.loggedInUserId,
                    a = e.onAnalyticsClick,
                    r = e.style,
                    o = e.tweet
                  return !this._shouldDisable(o, et.a.Analytics) && n === o.user.id_str
                    ? C.a.createElement(
                        k.a,
                        { style: [at.activityContainerWithChildren, r] },
                        C.a.createElement(
                          T.a,
                          {
                            link: ''.concat(o.permalink, '/analytics'),
                            onPress: a,
                            style: at.analyticsButton,
                            testID: be,
                          },
                          C.a.createElement($e.a, { style: at.analyticsIcon }),
                          C.a.createElement(I.b, { color: 'gray700' }, tt),
                        ),
                        t,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      w()(nt, 'contextType', D.a)
      var at = O.a.create(function (e) {
          return {
            analyticsIcon: { color: e.colors.gray700, paddingRight: e.spaces.space4 },
            analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: 'row', flexGrow: 1 },
            activityContainerWithChildren: {
              justifyContent: 'space-between',
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              alignItems: 'center',
            },
          }
        }),
        rt = nt,
        ot = n('tmUV'),
        it = n('YBcl'),
        lt = n('k89r'),
        ct = function (e) {
          var t = Object(lt.a)()
          return C.a.createElement(
            it.a,
            i()({}, e, {
              handleAnchorAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              handleAnchorOpen: function (e) {
                t.scribe({ element: e, action: 'click' })
              },
              handleAnchorSecondaryAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
              handleHeadsUpImpression: function (e, n) {
                t.scribe({ element: 'heads_up_context', action: n, data: { tweet_id: e } })
              },
            }),
          )
        },
        st = n('uFYP'),
        ut = K.a.g6237a1e,
        dt = K.a.d6b5949e,
        pt = function (e) {
          switch (e) {
            case 'paused':
              return dt
            case 'in-progress':
            default:
              return ut
          }
        },
        mt = function (e) {
          var t = e.nativeID,
            n = e.status,
            a = e.style,
            r = 'paused' === n
          return C.a.createElement(
            k.a,
            { style: [ht.root, a] },
            C.a.createElement(st.a, { style: [ht.icon, r ? ht.withGray700 : null] }),
            C.a.createElement(I.b, { color: r ? 'gray700' : 'text', nativeID: t, size: 'subtext2' }, pt(n)),
          )
        },
        ht = O.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        ft = n('TuTd'),
        gt = function (e, t) {
          return Object(ft.a)(e, t.tweetId)
        },
        vt = Object(De.a)()
          .propsFromState(function () {
            return { liveCounts: gt }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        bt = (n('KOtZ'), n('LW0h'), n('tQbP'), n('z84I'), n('Jkc4')),
        yt = n('855f'),
        wt = n('MtXG'),
        _t = n('de1q'),
        Ct = n('cHvH'),
        Et = K.a.fd80ffbf,
        xt = O.a.theme.spacesPx.space20,
        kt = (function (e) {
          g()(n, e)
          var t = b()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              w()(
                h()(r),
                '_reactionsLegacyHeartEnabled',
                r.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              w()(h()(r), '_renderQuoteTweetTimelinePivot', function () {
                var e = r.props.permalink
                return C.a.createElement(
                  T.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: r._handleQuoteTweetPivotScribeOnClick,
                    style: St.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  C.a.createElement(I.b, { color: 'primary' }, Et),
                )
              }),
              w()(h()(r), '_updateStateIfChanged', function (e, t) {
                return function (n) {
                  var a = n.nativeEvent.layout.width
                  a !== e() && t(a)
                }
              }),
              w()(
                h()(r),
                '_handleQuoteTweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.quoteTweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ quoteTweetLabelWidth: e })
                  },
                ),
              ),
              w()(
                h()(r),
                '_handleRetweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.retweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ retweetLabelWidth: e })
                  },
                ),
              ),
              w()(
                h()(r),
                '_handleLikeStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.likeLabelWidth
                  },
                  function (e) {
                    return r.setState({ likeLabelWidth: e })
                  },
                ),
              ),
              w()(
                h()(r),
                '_handleStatGroupLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.groupWidth
                  },
                  function (e) {
                    return r.setState({ groupWidth: e })
                  },
                ),
              ),
              w()(h()(r), '_handleRetweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              w()(h()(r), '_handleQuoteTweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              w()(h()(r), '_handleQuoteTweetPivotScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_pivot', action: 'click' })
              }),
              (r.state = {
                retweetLabelWidth: void 0,
                likeLabelWidth: void 0,
                quoteTweetLabelWidth: void 0,
                groupWidth: void 0,
              }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.isNonCompliantTweet,
                    a = e.quoteTweetCount
                  n && t.scribe({ element: 'quote_tweet_pivot', action: 'impression' }),
                    a && a > 0 && t.scribe({ element: 'quote_tweet_stat', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.isNonCompliantTweet ? this._renderQuoteTweetTimelinePivot() : this._renderStats()
                },
              },
              {
                key: '_renderReaction',
                value: function (e) {
                  var t = this,
                    n = this.props.permalink,
                    a = yt.a.getTruncatedCount(e.count),
                    r = { pathname: ''.concat(n, '/reactions'), state: { reactionType: e.type } }
                  return C.a.createElement(
                    k.a,
                    { key: e.type },
                    C.a.createElement(bt.a, null, function (n) {
                      return C.a.createElement(
                        wt.a,
                        { count: e.count, link: r, onPress: n() },
                        C.a.createElement(
                          k.a,
                          { style: St.reactionStat },
                          C.a.createElement(_t.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: St.reaction,
                          }),
                          C.a.createElement(wt.a.Value, { animated: !0, count: e.count, weight: 'normal' }, a),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderReactionsStatsGroup',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.permalink,
                    a = t.reactionCount,
                    r =
                      (a &&
                        a.reduce(function (e, t) {
                          return (t.count || 0) + e
                        }, 0)) ||
                      0
                  if (!r || !a) return null
                  var o = yt.a.getTruncatedCount(r),
                    i = a
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return C.a.createElement(Ct.a, null, function (t) {
                    var a = t.windowWidth
                    return C.a.createElement(
                      wt.a.Group,
                      { style: [St.detailItemContainer, St.detailItem] },
                      a > O.a.theme.breakpoints.small
                        ? C.a.createElement(
                            k.a,
                            null,
                            C.a.createElement(bt.a, null, function (e) {
                              return C.a.createElement(
                                wt.a,
                                { count: r, link: ''.concat(n, '/reactions'), onPress: e() },
                                C.a.createElement(
                                  K.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  C.a.createElement(
                                    wt.a.Value,
                                    { animated: !0, count: r },
                                    K.a.b4a4e4aa({ displayCountAll: o }),
                                  ),
                                  C.a.createElement(wt.a.Label, null, K.a.ifa70ada({ count: r })),
                                ),
                              )
                            }),
                          )
                        : null,
                      i.map(function (t) {
                        return e._renderReaction(t)
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderLikesStat',
                value: function (e) {
                  var t = yt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return C.a.createElement(
                    k.a,
                    { onLayout: this._handleLikeStatLayout },
                    C.a.createElement(bt.a, null, function (a) {
                      return C.a.createElement(
                        wt.a,
                        { count: e, link: ''.concat(n, '/likes'), onPress: a() },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          C.a.createElement(wt.a.Value, { animated: !0, count: e }, K.a.ha054943({ displayCount: t })),
                          C.a.createElement(wt.a.Label, null, K.a.d260af55({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderRetweetsStat',
                value: function (e) {
                  var t = this,
                    n = yt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    k.a,
                    { onLayout: this._handleRetweetStatLayout },
                    C.a.createElement(bt.a, null, function (r) {
                      return C.a.createElement(
                        wt.a,
                        { count: e, link: ''.concat(a, '/retweets'), onPress: r(t._handleRetweetScribeOnClick) },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          C.a.createElement(wt.a.Value, { animated: !0, count: e }, K.a.j142cb3f({ displayCount: n })),
                          C.a.createElement(wt.a.Label, null, K.a.e59a4e90({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderQuoteTweetsStat',
                value: function (e) {
                  var t = this,
                    n = yt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    k.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    C.a.createElement(bt.a, null, function (r) {
                      return C.a.createElement(
                        wt.a,
                        {
                          count: e,
                          link: ''.concat(a, '/retweets/with_comments'),
                          onPress: r(t._handleQuoteTweetScribeOnClick),
                        },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          C.a.createElement(wt.a.Value, { animated: !0, count: e }, K.a.f6e12705({ displayCount: n })),
                          C.a.createElement(wt.a.Label, null, K.a.e2414184({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderStats',
                value: function () {
                  var e = this.props,
                    t = e.containerStyle,
                    n = e.likeCount,
                    a = e.quoteTweetCount,
                    r = e.reactionCount,
                    o = e.retweetCount,
                    i = e.style,
                    l = e.withReactions,
                    c = this.state,
                    s = c.groupWidth,
                    u = c.likeLabelWidth,
                    d = c.quoteTweetLabelWidth,
                    p = c.retweetLabelWidth,
                    m = p && d && u && s && p + xt + (l ? 0 : u + xt) + d > s,
                    h = s,
                    f = l ? void 0 : n
                  return o || f || a || r
                    ? C.a.createElement(
                        k.a,
                        { onLayout: this._handleStatGroupLayout, style: h ? t : St.hidden },
                        l ? this._renderReactionsStatsGroup() : null,
                        o || f || a
                          ? C.a.createElement(
                              wt.a.Group,
                              { style: [St.detailItemContainer, St.detailItem, St.noWrap, i] },
                              o ? this._renderRetweetsStat(o) : null,
                              a ? this._renderQuoteTweetsStat(a) : null,
                              f && !m ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        m && f
                          ? C.a.createElement(
                              wt.a.Group,
                              { style: [St.detailItemContainer, St.detailItem, i] },
                              this._renderLikesStat(f),
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      w()(kt, 'contextType', D.a)
      var St = O.a.create(function (e) {
          return {
            detailItem: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space16 },
            detailItemContainer: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
            },
            hidden: { visibility: 'hidden' },
            noWrap: { flexWrap: 'nowrap' },
            quoteTweetPivot: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space16,
            },
            reaction: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
            reactionStat: { flexDirection: 'row', alignItems: 'center', display: 'inline-flex' },
          }
        }),
        Tt = Object(S.a)(kt)
      var It = vt(function (e) {
          var t = e.containerStyle,
            n = e.isNonCompliantTweet,
            a = e.liveLikeCount,
            r = e.liveQuoteCount,
            o = e.liveRetweetCount,
            i = e.tweetLikeCount,
            l = e.tweetPermalink,
            c = e.tweetQuoteTweetCount,
            s = e.tweetReactionCount,
            u = e.tweetRetweetCount,
            d = e.withReactions
          return C.a.createElement(Tt, {
            containerStyle: t,
            isNonCompliantTweet: n,
            likeCount: a || i,
            permalink: l,
            quoteTweetCount: r || c,
            reactionCount: s,
            retweetCount: o || u,
            withReactions: d,
          })
        }),
        Lt = n('avOP'),
        Pt = function (e) {
          var t = e.children
          return Y.b ? C.a.createElement(Lt.a, { itemProp: 'articleBody' }, t) : t
        },
        Ot = n('hqKg'),
        Dt = n('B/Qy'),
        At = n('M0jS'),
        Rt = function (e, t) {
          return At.b.select(e, t.userId)
        },
        Ft = Object(De.a)().propsFromState(function () {
          return {
            userSpace: Object(Ot.createSelector)(Rt, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(Dt.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Mt = n('Sksh'),
        Bt = n('1I0O'),
        Nt = n('jhWN'),
        Ht = function (e) {
          var t = e.avatarRef,
            n = e.imageLayoutCache,
            a = e.nativeID,
            r = e.onClick,
            o = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            c = e.screenName,
            s = e.size,
            u = e.style,
            d = e.uri,
            p = e.userId,
            m = e.userSpace,
            h = e.withHoverCard,
            f = e.withLink
          return (
            C.a.useEffect(
              function () {
                return (
                  Mt.a.registerUserInApp(p),
                  function () {
                    Mt.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            m
              ? C.a.createElement(
                  Bt.a,
                  i()(
                    {
                      avatarRef: t,
                      imageLayoutCache: n,
                      nativeID: a,
                      onClick: r,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: c,
                      size: s,
                      style: u,
                      uri: d,
                      withHoverCard: h,
                      withLink: f,
                    },
                    m,
                  ),
                )
              : C.a.createElement(Nt.a, {
                  avatarRef: t,
                  imageLayoutCache: n,
                  nativeID: a,
                  onClick: r,
                  onHoverCardScreenNameClick: o,
                  promotedContent: l,
                  screenName: c,
                  size: s,
                  style: u,
                  uri: d,
                  withHoverCard: h,
                  withLink: f,
                })
          )
        },
        jt = Ft(C.a.memo(Ht)),
        Ut = n('FGLp'),
        zt = n('TIdA'),
        Wt = n('DNho'),
        Vt = zt.a.createLayoutCache(),
        Gt = O.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        qt = function (e) {
          var t = Object(S.b)(),
            n = C.a.useContext(D.a).featureSwitches,
            a = e.avatarRef,
            r = e.nativeID,
            o = e.onClick,
            i = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            c = e.screenName,
            s = e.uri,
            u = e.userId,
            d = e.withHoverCard,
            p = void 0 === d || d,
            m = e.withLink,
            h = void 0 === m || m,
            f = e.withNftAvatar,
            g = e.withUserPresence,
            v = void 0 !== g && g
          return (
            Object(Ut.a)(function () {
              f && n.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            C.a.createElement(
              k.a,
              { style: Gt.avatarWrapper },
              C.a.createElement(Wt.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return v
                  ? C.a.createElement(jt, {
                      avatarRef: a,
                      imageLayoutCache: Vt,
                      nativeID: r,
                      onClick: o,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: Gt.avatar,
                      uri: s,
                      userId: u,
                      withHoverCard: p,
                      withLink: h,
                    })
                  : C.a.createElement(Nt.a, {
                      avatarRef: a,
                      imageLayoutCache: Vt,
                      nativeID: r,
                      onClick: o,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: Gt.avatar,
                      uri: s,
                      withHoverCard: p,
                      withLink: h,
                    })
              }),
            )
          )
        },
        Kt = n('aITJ'),
        Yt = n('E0cF'),
        Xt = n('Z6aJ'),
        Qt = n('dCqJ'),
        Jt = n('Olb6'),
        Zt = n('nBUg'),
        $t = n('r7g+'),
        en = n('PbQQ'),
        tn = n('e5HP'),
        nn = n('JWUO'),
        an = n('9VO7'),
        rn = n('GBcw'),
        on = n('jV+4'),
        ln = n('ir4X'),
        cn = n('aA1u'),
        sn = n('kY28'),
        un = n('6nXH')
      function dn(e, t, n) {
        var a,
          r = Yt.a.getOriginalTweet(e),
          o = null == r || null === (a = r.entities) || void 0 === a ? void 0 : a.hashtags
        if (Array.isArray(o) && !(o.length < 1)) {
          var i = o[0]
          return n &&
            (function (e) {
              var t = Yt.a.getOriginalTweet(e),
                n = t.extended_entities && t.extended_entities.media
              return (
                !!(n && n.length > 0) &&
                n.some(function (e) {
                  return 'animated_gif' === e.type
                })
              )
            })(e) &&
            t.isTrue('responsive_web_hashtag_highlight_is_enabled')
            ? i.text
            : void 0
        }
      }
      function pn(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      n('yH/f')
      var mn = n('9B+1'),
        hn = n('YICZ'),
        fn = n('21zW'),
        gn = n('8bWS'),
        vn = K.a.gf5e9ea6,
        bn = K.a.e2f2b658,
        yn = Object.freeze({
          see_more: K.a.ffd9cfe6,
          discover_more: K.a.d172116a,
          more: K.a.h63a5c3b,
          more_tweets: K.a.iac074c3,
          more_suggestions: K.a.g11ebd34,
          browse: K.a.g4a69019,
          browse_tweets: K.a.b1abb17d,
        })
      var wn = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return C.a.createElement(
            k.a,
            { style: En.tombstone },
            C.a.createElement(ne.a, { actionText: vn, children: bn, inline: !0, onClick: t }),
          )
        },
        _n = Object(S.a)(function (e) {
          var t = e.analytics,
            n = e.bannerText,
            a = e.label,
            r = e.link,
            o = e.linkText,
            i = e.onNotInterestedPress,
            l = e.topic,
            c = e.withRightControl,
            s = n && '' === n.text,
            u = o && '' === o.text,
            d = !u,
            p = !(s || u)
          return C.a.createElement(
            k.a,
            { style: En.topicActions },
            p && C.a.createElement(fn.a, null),
            d &&
              C.a.createElement(
                I.b,
                {
                  color: 'primary',
                  link: r,
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  size: 'subtext2',
                  weight: 'bold',
                },
                o ? C.a.createElement(E.a, o) : a,
              ),
            c
              ? C.a.createElement(
                  k.a,
                  { style: En.notInterestedButtonWrapper },
                  C.a.createElement(hn.a, {
                    onPress: i,
                    size: 'small',
                    topicId: l.id,
                    type: 'brandText',
                    withIconOnly: !0,
                  }),
                )
              : null,
          )
        }),
        Cn = function (e) {
          var t = e.isExpanded,
            n = e.onNotInterestedPress,
            a = e.topic,
            r = a.following ? En.followingTopicButtonWrapper : En.followTopicButtonWrapper,
            o = [t && r, !t && En.followTopicButtonWrapperNotExpanded],
            i = t ? En.largeNotInterestedButtonWrapper : En.notInterestedButtonWrapper
          return C.a.createElement(
            k.a,
            { style: En.topicActions },
            t ? null : C.a.createElement(fn.a, { style: En.topicMiddot }),
            C.a.createElement(
              k.a,
              { style: o },
              C.a.createElement(ue.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: En.followTopicButton,
                textMode: se.a.FollowTopic,
                topic: a,
              }),
            ),
            n || (t && !a.following)
              ? C.a.createElement(
                  k.a,
                  { style: i },
                  C.a.createElement(hn.a, {
                    onPress: n,
                    size: 'small',
                    topicId: a.id,
                    type: t ? 'primaryOutlined' : 'brandText',
                    withIconOnly: !t,
                  }),
                )
              : null,
          )
        }
      var En = O.a.create(function (e) {
          return {
            tombstone: { paddingBottom: e.componentDimensions.gutterVertical },
            iconStyle: {
              paddingBottom: 'calc('.concat(e.spaces.space2, ' + ').concat(e.spaces.space1, ')'),
              marginBottom: e.spaces.space4,
            },
            topicActions: { flexDirection: 'row', flexGrow: 1, alignItems: 'center', minHeight: e.spaces.space32 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            followTopicButton: { marginTop: e.spaces.space1 },
            followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 },
            followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingRight: e.spaces.space4, width: '50%' },
            followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: '100%' },
            notInterestedButtonWrapper: { alignItems: 'flex-end', flexGrow: 1 },
            largeNotInterestedButtonWrapper: {
              marginVertical: e.spaces.space4,
              paddingLeft: e.spaces.space4,
              width: '50%',
            },
          }
        }),
        xn = n('0zXz'),
        kn = n('fs1G'),
        Sn = O.a.theme.aspectRatios.maxTimelineImage,
        Tn = O.a.theme.aspectRatios.minTimelineImage,
        In = K.a.f277e949,
        Ln = K.a.ee79367a,
        Pn = K.a.a2a3824a,
        On = K.a.c14cdb18,
        Dn = K.a.e8adeec8,
        An = (function (e) {
          g()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(h()(e), '_defaultInlinePromptRef', C.a.createRef()),
              w()(h()(e), '_iconContainerRef', C.a.createRef()),
              w()(h()(e), 'state', { mediaAltTranslations: {} }),
              w()(h()(e), '_transformPromotedUrl', xe.a.bind(null, e.context.featureSwitches)),
              w()(
                h()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              w()(h()(e), '_getWithTopLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.isFocal,
                  r = t.tweet,
                  o = Yt.a.getOriginalTweet(r),
                  i = e._getConversationPosition(),
                  l = e._getIsConversationStart(),
                  c = n && n.ancestorConnector,
                  s = n && n.indents,
                  u = (a && !!o.in_reply_to_status_id_str) || (i && !l)
                return s ? 'top' === c : u
              }),
              w()(h()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.tweet,
                  r = Yt.a.getOriginalTweet(a),
                  o = e._getConversationPosition(),
                  i = n && n.indents,
                  l = n && n.descendantConnector,
                  c = o && !o.isEnd
                return i
                  ? l
                  : !(
                      !r.in_reply_to_status_id_str &&
                      'ancestor' !== (null == o ? void 0 : o.position) &&
                      e._isEdgeToEdgeEnabled
                    ) && c
              }),
              w()(h()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  n = t.onMediaHashtagHighlightClick,
                  a = t.promotedContent,
                  r = t.promotedContentAdvertiser,
                  o = t.tweet,
                  i = e.context.featureSwitches,
                  l = {
                    highlightedHashtag: function () {
                      return dn(o, i, Xt.a.isPromoted(a))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return pn(r, i)
                    },
                    shouldUseSmallFontForHashtagHighlight: function () {
                      return i.isTrue('responsive_web_hashtag_highlight_use_small_font')
                    },
                    onMediaHashtagHighlightClick: n,
                  },
                  s = {
                    c9sEnabled: function () {
                      return i.isTrue('c9s_enabled')
                    },
                    trustedFriendsEnabled: function () {
                      return i.isTrue('trusted_friends_consumption_enabled')
                    },
                  },
                  u = e._getWithTopLine(),
                  d = e._getWithBottomLine(),
                  p = !e.props.isFocal && (u || d)
                return c()(
                  c()(c()({}, l), s),
                  {},
                  {
                    withEdgeToEdgeContent: function () {
                      return !p && i.isTrue('media_edge_to_edge_content_enabled')
                    },
                    withEdgeToEdgeTweetAnatomy: function () {
                      return i.isTrue('media_edge_to_edge_content_enabled')
                    },
                    headsUpVariant: function () {
                      return i.getStringValue('conversational_safety_heads_up_treatment_A_enabled')
                    },
                    misinfoLabelRevampTweaksEnabled: function () {
                      return i.isTrue('responsive_web_misinfo_label_revamp_tweaks_enabled')
                    },
                    sensitiveMediaWarningsEnabled: function () {
                      return i.isTrue('sensitive_tweet_warnings_enabled')
                    },
                    tweetRendersPromotedContentBadgeBelowHeader: function () {
                      return i.isTrue('responsive_web_promoted_badge_below_header')
                    },
                    socialContextRefreshEnabled: function () {
                      return e.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                    },
                  },
                )
              }),
              w()(h()(e), '_renderPromotedDetails', function (t) {
                var n = e.props,
                  a = n.onPoliticalSponsorWebsiteClick,
                  r = n.onPromotedDisclaimerLearnMoreClick,
                  o = n.onPromotedIndicatorClick,
                  i = n.promotedContent,
                  l = n.promotedContentAdvertiser,
                  c = n.tweet
                return r && a && o
                  ? C.a.createElement(Qt.a, {
                      onPoliticalSponsorWebsiteClick: a,
                      onPromotedDisclaimerLearnMoreClick: r,
                      onPromotedIndicatorClick: o,
                      promotedContent: i,
                      promotedContentAdvertiser: l,
                      style: Rn.promotedDetails,
                      testID: ye,
                      tweet: c,
                      withCircleIcon: t,
                    })
                  : null
              }),
              w()(h()(e), '_getPromoteButtonOnPress', function (t) {
                var n = e.props,
                  a = n.onPromoteAgainButtonClick,
                  r = n.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? a : r
              }),
              w()(h()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  n = t.tweet,
                  a = t.withBirdwatchPivots,
                  r = Yt.a.getOriginalTweet(n)
                return r.birdwatch_pivot &&
                  a &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? C.a.createElement(V, r.birdwatch_pivot)
                  : null
              }),
              w()(h()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  n = t.hasModeratedReplies,
                  a = t.onModeratedIconClick,
                  r = t.tweet
                return n ? C.a.createElement(Jt.a, { link: ''.concat(r.permalink, '/hidden'), onPress: a }) : null
              }),
              w()(h()(e), '_renderBirdwatchNotesIcon', function () {
                var t = e.props,
                  n = t.onBirdwatchNotesIconClick,
                  a = t.onBirdwatchNotesIconShown,
                  r = t.tweet
                return !(
                  r.birdwatch_pivot &&
                  !0 ===
                    e.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_birdwatch_pivots_enabled')
                ) &&
                  r.has_birdwatch_notes &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_consumption_enabled') &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_contribution_enabled')
                  ? C.a.createElement(Je, { onPress: n, onShow: a, tweetId: r.id_str })
                  : null
              }),
              w()(h()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              w()(h()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.socialContext
                if (n && r && a && a(Ee.a.ItemType.USER)) {
                  var o,
                    i = (null === (o = r.landingUrl) || void 0 === o ? void 0 : o.url.match(J.A.id)) || '',
                    l = r.text || ''
                  n({ topic: { id: i && i[0], name: l, description: Pn, type: ce.a.Topic } })
                }
              }),
              w()(h()(e), '_renderTweetTextHWTweet', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  o = n.isFocal,
                  l = n.linkify,
                  s = n.onEntityClick,
                  u = n.tweet,
                  d = n.tweetTextSize,
                  p = n.withCardLinks,
                  m = n.withInlineMedia,
                  h = n.withQuotedTweetLinks,
                  f = Yt.a.getOriginalTweet(u),
                  g = Yt.a.hasInteractiveText(f),
                  v = d || (g ? 'title4' : t.size),
                  b = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled'),
                  y = c()(
                    c()({}, t),
                    {},
                    {
                      excludeCardUrl: a,
                      hitHighlights: r,
                      linkify: l,
                      onEntityClick: s,
                      size: v,
                      style: g && Rn.interactiveHighlightSpacer,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: f.unmentioned_user_ids,
                      weight: g ? 'heavy' : void 0,
                      withCardLinks: p,
                      withMediaLinks: !m,
                      withQuoteLinks: h || Yt.a.isQuotedTweetUnavailable(f),
                      withUnicodeEmojis: Y.b,
                    },
                  )
                return C.a.createElement(
                  Pt,
                  null,
                  b
                    ? C.a.createElement(
                        qe,
                        i()({}, y, {
                          disableTranslation: f.user.protected,
                          lang: f.lang,
                          onMediaTranslation: e._handleMediaTranslations,
                          supplementalLang: f.supplemental_language,
                          text: f.text,
                          tweetId: f.id_str,
                          withOriginalText: o,
                        }),
                      )
                    : C.a.createElement(Ne.a, y),
                )
              }),
              w()(h()(e), '_renderTweetText', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  o = n.isFocal,
                  i = n.linkify,
                  l = n.onEntityClick,
                  c = n.tweet,
                  s = n.tweetTextSize,
                  u = n.withCardLinks,
                  d = n.withInlineMedia,
                  p = n.withQuotedTweetLinks,
                  m = Yt.a.getOriginalTweet(c),
                  h = Yt.a.hasInteractiveText(m),
                  f = s || (o || h ? 'title4' : 'body'),
                  g = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled')
                return C.a.createElement(
                  Pt,
                  null,
                  o || g
                    ? C.a.createElement(qe, {
                        disableTranslation: m.user.protected,
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: a,
                        hitHighlights: o ? void 0 : r,
                        lang: m.lang,
                        linkify: !!o || i,
                        nativeID: t,
                        onEntityClick: l,
                        onMediaTranslation: e._handleMediaTranslations,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: o ? Rn.expandedTweetText : h && Rn.interactiveHighlightSpacer,
                        supplementalLang: m.supplemental_language,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        tweetId: m.id_str,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withCardLinks: o ? void 0 : u,
                        withMediaLinks: o ? void 0 : !d,
                        withOriginalText: o,
                        withQuoteLinks: (!o && p) || Yt.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: Y.b,
                      })
                    : C.a.createElement(Ne.a, {
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: a,
                        hitHighlights: r,
                        lang: m.lang,
                        linkify: i,
                        nativeID: t,
                        onEntityClick: e.props.onEntityClick,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: h && Rn.interactiveHighlightSpacer,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withCardLinks: u,
                        withMediaLinks: !d,
                        withQuoteLinks: p || Yt.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: Y.b,
                      }),
                )
              }),
              w()(h()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              w()(h()(e), '_transformUrl', function (t) {
                var n
                return e._transformPromotedUrl(
                  t,
                  null === (n = e.props.promotedContent) || void 0 === n ? void 0 : n.click_tracking_info,
                )
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.forwardPivotInfo,
                    o = t.hideConversationControlsEducationText,
                    l = t.hideExclusivityInfoEducationTextInReplies,
                    s = t.hideTrustedFriendsEducationTextInReplies,
                    u = t.isFocal,
                    d = t.loggedInUser,
                    p = t.onBlur,
                    m = t.onClick,
                    h = t.onFocus,
                    f = t.promotedContent,
                    g = t.quotedTweetTombstoneInfo,
                    v = t.readerModeAvailable,
                    b = t.renderCurationActionMenu,
                    y = t.showConversationHeadsUp,
                    w = t.socialContext,
                    _ = t.to,
                    E = t.tweet,
                    x = t.withReaderModeBottomBar,
                    S = t.withTimestamp,
                    T = t.withTimestampLink,
                    L = t.withUnreadStyles,
                    D = Yt.a.getOriginalTweet(E),
                    A = D.has_super_follower,
                    R = D.quick_promote_eligibility,
                    F = D.user,
                    M = null == R ? void 0 : R.eligibility,
                    B = this._getIsQuickPromoteEligible(M),
                    N = Xt.a.isPromoted(f),
                    H = !!N && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    j = !!N && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    U = !(!F.professional || !B),
                    z = 'IneligibleCampaignRunning' === M || 'IneligibleCampaignPaused' === M,
                    W = 'string' == typeof _ ? { pathname: _ } : _,
                    V = n && n.ancestorConnector,
                    q = n && n.indents,
                    K = this._getWithTopLine(),
                    Y = this._getWithBottomLine(),
                    X = K || Y,
                    J = (X && !u) || !this._isEdgeToEdgeEnabled,
                    Z = W ? c()(c()({}, W), {}, { anchorless: !0 }) : void 0,
                    ee = u ? 'detail' : 'inline'
                  return !u &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? C.a.createElement(
                        Zt.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        C.a.createElement(
                          ot.a,
                          { forwardPivotInfo: a, tweet: E },
                          C.a.createElement($t.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: G.canUseDOM ? Z : void 0,
                            onBlur: p,
                            onFocus: h,
                            onPress: m,
                            promotedContent: f,
                            quotedTweetTombstoneInfo: g,
                            renderActionMenu: b && G.canUseDOM ? b : xn.a,
                            renderActionsBar: E.isPreview
                              ? function () {
                                  return C.a.createElement($, { previewTweetId: E.id_str })
                                }
                              : function (t) {
                                  return C.a.createElement(
                                    C.a.Fragment,
                                    null,
                                    e._renderTweetActions({
                                      actionSize: t.actionSize,
                                      displayStyle: t.displayStyle,
                                      nativeID: t.nativeID,
                                      style: t.style,
                                      withCount: t.withCount,
                                      withAnalyticsAction: !0,
                                    }),
                                    e.props.withReaderModeBottomBar
                                      ? C.a.createElement(k.a, { style: Rn.readerBottomBar, testID: we })
                                      : null,
                                  )
                                },
                            renderEducation: function (t) {
                              return C.a.createElement(
                                C.a.Fragment,
                                null,
                                U &&
                                  C.a.createElement(
                                    P.a,
                                    {
                                      link: ''.concat(E.permalink, '/quick_promote_web/intro'),
                                      onPress: e._getPromoteButtonOnPress(M),
                                      style: Rn.promoteButton,
                                      type: 'primaryOutlined',
                                    },
                                    e._getPromoteButtonText(M),
                                  ),
                                C.a.createElement(
                                  ct,
                                  i()({}, t, {
                                    hideConversationControlsEducationText: !!o,
                                    hideExclusivityInfoEducationTextInReplies: !!l,
                                    hideTrustedFriendsEducationTextInReplies: !!s,
                                    loggedInUser: d,
                                  }),
                                ),
                              )
                            },
                            renderHighlightedUserLabel: function (t) {
                              var n
                              return 'AutomatedLabel' !==
                                (null === (n = t.label) || void 0 === n ? void 0 : n.userLabelType) ||
                                e.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                                ? C.a.createElement($t.a.HighlightedUserLabel, t)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return C.a.createElement($t.a.PromotedIndicator, i()({}, e, { withCircleIcon: j }))
                            },
                            renderPromotionStatusBadge: z
                              ? function (t) {
                                  return C.a.createElement(mt, {
                                    nativeID: t.nativeID,
                                    status: e._getTweetPromotionStatus(M),
                                    style: Rn.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (t) {
                              return e._renderReplyContext({ nativeID: t.nativeID })
                            },
                            renderRichContent: function (t) {
                              return e._renderRichContent({ nativeID: t.nativeID, withRoundMediaCorners: J })
                            },
                            renderSelfThreadCTA: function () {
                              return e._renderSelfThreadCTA()
                            },
                            renderSocialContext: function (t) {
                              return e._renderSocialContext({ nativeID: t.nativeID })
                            },
                            renderText: function (t) {
                              return e._renderTweetTextHWTweet(t)
                            },
                            renderTimestamp: S
                              ? function (t) {
                                  return C.a.createElement(
                                    $t.a.Timestamp,
                                    i()({}, t, {
                                      link: T ? t.link : void 0,
                                      nativeID: e._isEdgeToEdgeEnabled ? void 0 : t.nativeID,
                                    }),
                                  )
                                }
                              : xn.a,
                            renderTombstone: function (t) {
                              return e._renderTombstoneHWTweet(t)
                            },
                            renderUserAvatar: function (t) {
                              return e._renderAvatar(t.nativeID)
                            },
                            renderUserName: function (t) {
                              return e._renderUserNameHWTweet(t)
                            },
                            socialContext: w
                              ? {
                                  contextType: w.contextType,
                                  isSelfRetweet: w.isSelfRetweet,
                                  link: w.landingUrl ? Object(Q.b)(w.landingUrl) : void 0,
                                  name: w.name,
                                  screenName: w.screenName,
                                  text: w.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: Ce,
                            tweet: E,
                            withBottomLine: Y,
                            withTopLine: K,
                            withUnreadStyles: L,
                          }),
                        ),
                      )
                    : C.a.createElement(en.c.UseTweetA11yIds, { tweet: E }, function (t) {
                        var i = r()(t, 2),
                          c = i[0],
                          g = i[1],
                          w = H
                            ? Yt.a.hasInteractiveText(D)
                              ? Rn.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : Rn.promotedIndicatorBelowHeader
                            : Rn.promotedIndicator,
                          _ =
                            f && N
                              ? C.a.createElement(tn.a, {
                                  contentAuthorId: F.id_str,
                                  nativeID: c.promotedLabel,
                                  promotedContent: f,
                                  style: w,
                                  withCircleIcon: j,
                                })
                              : null,
                          T = z
                            ? C.a.createElement(mt, {
                                nativeID: c.promotionStatusLabel,
                                status: e._getTweetPromotionStatus(M),
                                style: Rn.promotionStatus,
                              })
                            : null,
                          R = n
                            ? C.a.createElement(
                                I.b,
                                { nativeID: c.conversationLevel, style: O.a.visuallyHidden },
                                Ln({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          B = D.tombstoneInfo || E.tombstoneInfo,
                          W = C.a.createElement(
                            C.a.Fragment,
                            null,
                            B ? e._renderTombstone(B) : null,
                            u || !B
                              ? C.a.createElement(
                                  C.a.Fragment,
                                  null,
                                  e._renderReplyContext({ nativeID: c.replyContext }),
                                  C.a.createElement(k.a, null, e._renderTweetText(c.text)),
                                  C.a.createElement(
                                    k.a,
                                    null,
                                    e._renderRichContent({ nativeID: c.richContent, withRoundMediaCorners: J }),
                                  ),
                                )
                              : null,
                          )
                        return C.a.createElement(
                          Zt.b.Provider,
                          { value: e._getFeatureConfigurationContextProviderValue() },
                          C.a.createElement(
                            ot.a,
                            { forwardPivotInfo: a, tweet: E },
                            C.a.createElement(
                              nn.a,
                              {
                                a11yDomIds: g,
                                actionMenu: b && G.canUseDOM ? b() : null,
                                avatar: e._renderAvatar(c.avatar),
                                footer: e._renderFooter(),
                                header: e._renderHeader(c),
                                indents: q,
                                link: u || !G.canUseDOM ? void 0 : Z,
                                onBlur: p,
                                onFocus: h,
                                onPress: m,
                                testID: Ce,
                                timestamp:
                                  N || e._getUsernameStackedLayoutEnabled() || !S
                                    ? null
                                    : e._renderTweetRelativeTimestamp(c.timestamp),
                                userFollowIndicators: A ? C.a.createElement(an.a, { type: 'superFollower' }) : void 0,
                                userLabel: e._renderUserLabel(F, c.userLabel),
                                userName: e._renderUserName(c.username, c.timestamp),
                                withBottomLine: Y,
                                withElbow: q ? 'side' === V : void 0,
                                withFooterGap: !u,
                                withFullWidthChildren: u || (!X && e._isEdgeToEdgeEnabled),
                                withTopLine: K,
                                withUnreadStyles: L,
                              },
                              H && u ? e._renderPromotedDetails(j) : null,
                              H && !u ? _ : null,
                              R,
                              W,
                              U &&
                                'inline' === ee &&
                                C.a.createElement(
                                  P.a,
                                  {
                                    link: ''.concat(E.permalink, '/quick_promote_web/intro'),
                                    onPress: e._getPromoteButtonOnPress(M),
                                    style: Rn.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  e._getPromoteButtonText(M),
                                ),
                              e._renderFocalContent(H, U, T),
                              'inline' === ee &&
                                C.a.createElement(ct, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!o,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!s,
                                  loggedInUser: d,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: E,
                                }),
                              E.isPreview
                                ? C.a.createElement($, { previewTweetId: E.id_str })
                                : e._renderTweetActions({
                                    actionSize: u ? 'large' : void 0,
                                    displayStyle: u ? 'block' : void 0,
                                    nativeID: c.actionsBar,
                                    style: [
                                      u ? Rn.actionBarFocalTweet : Rn.actionBar,
                                      u && !v && Rn.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !u,
                                    withCount: !u,
                                  }),
                              e._renderReaderModeButton(),
                              H || u ? null : _,
                              u ? null : T,
                              'detail' === ee &&
                                C.a.createElement(ct, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!o,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!s,
                                  loggedInUser: d,
                                  showConversationHeadsUp: y,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: E,
                                }),
                              x ? C.a.createElement(k.a, { style: Rn.readerBottomBar, testID: we }) : null,
                            ),
                          ),
                        )
                      })
                },
              },
              {
                key: '_renderTweetRelativeTimestamp',
                value: function (e) {
                  var t = this.props,
                    n = t.promotedContent,
                    a = t.tweet,
                    r = t.withTimestampLink,
                    o = Yt.a.getOriginalTweet(a)
                  return C.a.createElement(rn.a, {
                    link: r
                      ? { pathname: o.permalink, state: { contextTweetId: o.id_str, promotedContent: n } }
                      : void 0,
                    nativeID: e,
                    timestamp: o.created_at,
                  })
                },
              },
              {
                key: '_renderUserNameHWTweet',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.tweet,
                    o = t.withUserHoverCard,
                    l = t.withUserName,
                    c = Yt.a.getOriginalTweet(r).user
                  return l
                    ? C.a.createElement(
                        $t.a.UserName,
                        i()({}, e, {
                          onAvatarClick: n,
                          onLinkClick: a,
                          onScreenNameClick: a,
                          withHoverCard: o && !c.blocking,
                          withLink: !!a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserName',
                value: function (e, t) {
                  var n = this.props,
                    a = n.isFocal,
                    r = n.onAvatarClick,
                    o = n.onScreenNameClick,
                    i = n.promotedContent,
                    l = n.tweet,
                    c = n.withUserHoverCard,
                    s = n.withUserName,
                    u = Yt.a.getOriginalTweet(l).user,
                    d = Xt.a.isPromoted(i)
                  return s
                    ? C.a.createElement(on.a, {
                        isProtected: u.protected,
                        isVerified: u.verified,
                        name: u.name,
                        nativeID: e,
                        onAvatarClick: r,
                        onLinkClick: o,
                        onScreenNameClick: o,
                        promotedContent: i,
                        screenName: u.screen_name,
                        screenNameSuffix:
                          d || a || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(),
                        withHoverCard: c && !u.blocking,
                        withLink: !!o,
                        withStackedLayout: this._getUsernameStackedLayoutEnabled(),
                      })
                    : null
                },
              },
              {
                key: '_renderUserLabel',
                value: function (e, t) {
                  var n = e.highlightedLabel,
                    a = 'AutomatedLabel' === (null == n ? void 0 : n.userLabelType),
                    r = !!a && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !n || (a && !r) ? null : C.a.createElement(ln.a, { label: n, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, n) {
                  var a = this.props,
                    r = a.isFocal,
                    o = a.onAnalyticsClick,
                    i = a.tweet,
                    l = Yt.a.getOriginalTweet(i),
                    c = l.created_at,
                    s = l.place,
                    u = l.quick_promote_eligibility,
                    d = l.source,
                    p = l.source_name,
                    m = null == u ? void 0 : u.eligibility,
                    h = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                  return r
                    ? C.a.createElement(
                        C.a.Fragment,
                        null,
                        C.a.createElement(
                          k.a,
                          { style: Rn.footerContainer },
                          C.a.createElement(
                            k.a,
                            { style: Rn.footerContent },
                            C.a.createElement(cn.a, {
                              linkColor: 'gray700',
                              place: s && s.full_name,
                              placeLink: s && s.id ? '/places/'.concat(s.id) : void 0,
                              source: d && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: Rn.timeLocSource,
                              timestamp: c,
                              timestampLink: l.permalink,
                            }),
                            C.a.createElement(
                              k.a,
                              { style: Rn.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          n,
                        ),
                        C.a.createElement(rt, {
                          endControl: t
                            ? C.a.createElement(
                                P.a,
                                {
                                  link: ''.concat(i.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(m),
                                  style: Rn.tweetActivityPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(m),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: o,
                          tweet: l,
                        }),
                        C.a.createElement(It, {
                          isNonCompliantTweet: 'non_compliant' === l.limited_actions,
                          tweetId: l.id_str,
                          tweetLikeCount: l.favorite_count,
                          tweetPermalink: l.permalink,
                          tweetQuoteTweetCount: l.quote_count,
                          tweetReactionCount: l.reaction_count,
                          tweetRetweetCount: l.retweet_count,
                          withReactions: h,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderFooter',
                value: function () {
                  var e = this.props,
                    t = e.isFocal,
                    n = e.topic,
                    a = e.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    this._renderSelfThreadCTA(),
                    !t && n && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? me({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: a })
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function (e) {
                  var t = this.props,
                    n = t.isFocal,
                    a = t.topic,
                    r = t.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    n && r && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? me({ defaultRef: this._defaultInlinePromptRef, topic: a, topicFollowPrompt: r })
                      : this._renderSocialContext({ nativeID: e.socialContext }),
                  )
                },
              },
              {
                key: '_renderSelfThreadCTA',
                value: function () {
                  var e = this.props,
                    t = e.onSelfThreadClick,
                    n = e.onSelfThreadImpression,
                    a = e.tweet,
                    r = Yt.a.getOriginalTweet(a),
                    o = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? C.a.createElement(fe.a, {
                        avatarUrl: o ? r.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: n,
                        style: Rn.selfThreadCTA,
                        to: a.permalink,
                        userName: r.user.screen_name,
                        withConversationLine: o,
                      })
                    : null
                },
              },
              {
                key: '_shouldShowSelfThread',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.tweet,
                    a = e.withSelfThread,
                    r = Yt.a.getOriginalTweet(n)
                  return a && !t && r.self_thread && !n.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    n = e.tweet,
                    a = Yt.a.getOriginalTweet(n)
                  return this._shouldShowSelfThread() && t && !a.in_reply_to_status_id_str
                },
              },
              {
                key: '_getConversationPosition',
                value: function () {
                  return this._shouldShowSelfThreadWithAvatar()
                    ? { isStart: !0, isEnd: !1 }
                    : this.props.conversationPosition
                },
              },
              {
                key: '_getIsConversationStart',
                value: function () {
                  var e = this.props.tweet,
                    t = this._getConversationPosition(),
                    n = Yt.a.getOriginalTweet(e)
                  return t && (t.isStart || !n.in_reply_to_status_id_str)
                },
              },
              {
                key: '_getIsQuickPromoteEligible',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                    case 'EligibleWithPreviousCampaign':
                      return !0
                    default:
                      return !1
                  }
                },
              },
              {
                key: '_getPromoteButtonText',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                      return On
                    case 'EligibleWithPreviousCampaign':
                      return Dn
                    default:
                      return (
                        Object(he.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        On
                      )
                  }
                },
              },
              {
                key: '_getTweetPromotionStatus',
                value: function (e) {
                  switch (e) {
                    case 'IneligibleCampaignRunning':
                      return 'in-progress'
                    case 'IneligibleCampaignPaused':
                      return 'paused'
                    default:
                      return (
                        Object(he.a)(
                          new Error(
                            'Tweet promotion badge should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        'in-progress'
                      )
                  }
                },
              },
              {
                key: '_renderSocialContext',
                value: function (e) {
                  var t = e.nativeID,
                    n = this.props,
                    a = n.conversationPosition,
                    r = n.injectedFeedbackItem,
                    o = n.isFocal,
                    l = n.onUndoTopicNotInterestedClick,
                    c = n.promotedContent,
                    s = n.socialContext,
                    u = n.topic
                  if (!n.withSocialContext || !s || Xt.a.isPromoted(c)) return null
                  var d = this.context.featureSwitches,
                    p = a && !this._getIsConversationStart(),
                    m = s.contextType,
                    h = s.isSelfRetweet,
                    f = s.landingUrl,
                    g = s.name,
                    v = s.screenName,
                    b = s.text,
                    y = s.topicContext,
                    w = f ? Object(Q.b)(f) : void 0
                  if (
                    y &&
                    u &&
                    (function (e) {
                      var t = e.featureSwitches,
                        n = e.isExpanded,
                        a = e.topic,
                        r = e.topicContext
                      return (
                        Object(gn.c)(r) &&
                        n &&
                        a.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in yn) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: d, isExpanded: o, topic: u, topicContext: y })
                  )
                    return C.a.createElement(wn, { onUndoTopicNotInterestedClick: l })
                  var _ = {
                      contextType: m,
                      iconSize: 'large',
                      withLeftPadding: this.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                        ? p || !1
                        : !p && !o,
                      text: b,
                    },
                    x =
                      y && u
                        ? (function (e) {
                            var t,
                              n = e.featureSwitches,
                              a = e.iconSize,
                              r = e.injectedFeedbackItem,
                              o = e.isExpanded,
                              i = e.socialContext,
                              l = e.topic,
                              c = e.withLeftPadding,
                              s = i.contextType,
                              u = i.landingUrl,
                              d = i.topicContext,
                              p = u ? Object(Q.b)(u) : void 0,
                              m = d && Object(gn.b)(d),
                              h = d && Object(gn.c)(d),
                              f = n.isTrue('media_edge_to_edge_content_enabled'),
                              g = f ? ve.a.TextOnly : ve.a.Topic,
                              v =
                                null == r || null === (t = r.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              b = d ? Object(mn.a)(d) : void 0,
                              y = null != d && d.bannerText ? C.a.createElement(E.a, d.bannerText) : i.text
                            if (m && n.getStringValue('topics_context_controls_followed_variation') in yn) {
                              var w = yn[n.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: a,
                                contextType: g,
                                rightControl: C.a.createElement(_n, {
                                  bannerText: i.topicContext && i.topicContext.bannerText,
                                  label: w,
                                  link: p,
                                  linkText: i.topicContext && i.topicContext.linkText,
                                  topic: l,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: b,
                                text: y,
                              }
                            }
                            if (h) {
                              if (n.getStringValue('topics_context_controls_implicit_variation') in yn) {
                                var _,
                                  x = yn[n.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: a,
                                  contextType: g,
                                  rightControl: C.a.createElement(_n, {
                                    bannerText: i.topicContext && i.topicContext.bannerText,
                                    label: x,
                                    link: p,
                                    linkText: null === (_ = i.topicContext) || void 0 === _ ? void 0 : _.linkText,
                                    onNotInterestedPress: v,
                                    topic: l,
                                    withRightControl: n.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: b,
                                  text: y,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var k = C.a.createElement(Cn, { isExpanded: o, onNotInterestedPress: v, topic: l })
                              return o
                                ? {
                                    bottomControl: k,
                                    contextType: s,
                                    iconSize: 'xLarge',
                                    iconStyle: En.iconStyle,
                                    textColor: 'text',
                                    textSize: 'headline1',
                                    text: i.text,
                                    topicData: void 0,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                                : {
                                    contextType: s,
                                    iconSize: a,
                                    iconStyle: En.iconStyle,
                                    rightControl: k,
                                    topicData: b,
                                    text: i.text,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                            }
                            return { contextType: s, iconSize: a, text: i.text, withLeftPadding: c }
                          })({
                            featureSwitches: d,
                            iconSize: _.iconSize,
                            injectedFeedbackItem: r,
                            isExpanded: o,
                            socialContext: s,
                            topic: u,
                            withLeftPadding: _.withLeftPadding,
                          })
                        : _
                  return C.a.createElement(
                    ge.a,
                    i()({}, x, {
                      link: w,
                      nativeID: t,
                      onClick: m === ve.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: g, screenName: v, isSelfRetweet: h },
                      style: Rn.socialContext,
                      testID: _e,
                      weight: 'bold',
                    }),
                  )
                },
              },
              {
                key: '_renderReplyContext',
                value: function (e) {
                  var t,
                    n = e.nativeID,
                    a = this.props,
                    r = a.conversationPosition,
                    o = a.conversationTreeMetadata,
                    i = a.isFocal,
                    l = a.onReplyContextClick,
                    c = a.replyContext,
                    s = a.tweet,
                    u = Yt.a.getOriginalTweet(s),
                    d = u.self_thread
                  return this._shouldShowSelfThread() ||
                    c !== sn.a.ReplyContextTypes.Isolated ||
                    !u.in_reply_to_status_id_str ||
                    (o && !i) ||
                    (d && r && !r.isStart) ||
                    (d && i)
                    ? null
                    : C.a.createElement(sn.a, {
                        displayTextRange: u.display_text_range,
                        inReplyToName: u.in_reply_to_name,
                        inReplyToScreenName: u.in_reply_to_screen_name,
                        inReplyToStatusIdStr: u.in_reply_to_status_id_str,
                        inReplyToUserIdStr: u.in_reply_to_user_id_str,
                        nativeID: n,
                        onClick: l,
                        style: [Rn.replyContext, i && Rn.replyContextBig],
                        tweetPermalink: u.permalink,
                        unmentionedUserIds: u.unmentioned_user_ids,
                        userMentionsEntities: null === (t = u.entities) || void 0 === t ? void 0 : t.user_mentions,
                      })
                },
              },
              {
                key: '_renderReaderModeButton',
                value: function () {
                  var e = this.props,
                    t = e.readerModeAvailable,
                    n = e.tweet
                  return t
                    ? C.a.createElement(
                        k.a,
                        { style: Rn.actionBarWithInlineReply },
                        C.a.createElement(le.a, { focalTweet: n, isExpanded: !0, readerModeAvailable: !!t }),
                      )
                    : null
                },
              },
              {
                key: '_renderTweetActions',
                value: function (e) {
                  var t = e.actionSize,
                    n = e.displayStyle,
                    a = e.nativeID,
                    r = e.style,
                    o = e.withAnalyticsAction,
                    i = e.withCount,
                    l = this.props,
                    c = l.allowDownvote,
                    s = l.bookmarkFolderId,
                    u = l.contextTweet,
                    d = l.enableKeyboardShortcuts,
                    p = l.forwardPivotInfo,
                    m = l.onLikeSuccess,
                    h = l.onReplyPress,
                    f = l.promotedContent,
                    g = l.tweet,
                    v = l.withActionsDisabled,
                    b = l.withRemoveFromBookmarks
                  return this.props.withActions
                    ? C.a.createElement(Ze.a, {
                        actionSize: t,
                        allowDownvote: c,
                        bookmarkFolderId: s,
                        displayStyle: n,
                        enableKeyboardShortcuts: d,
                        forwardPivotInfo: g.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: a,
                        onLikeSuccess: m,
                        onReplyPress: h,
                        promotedContent: f,
                        style: r,
                        tweet: u || g,
                        withActionsDisabled: v,
                        withAnalyticsAction: o,
                        withCount: i,
                        withRemoveFromBookmarks: b,
                      })
                    : null
                },
              },
              {
                key: '_renderAvatar',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.promotedContent,
                    o = t.tweet,
                    i = t.withAvatarLink,
                    l = t.withUserAvatar,
                    c = t.withUserHoverCard,
                    s = t.withUserPresence,
                    u = Yt.a.getOriginalTweet(o).user,
                    d = Yt.a.getOriginalTweet(o).user.id_str
                  return l
                    ? C.a.createElement(qt, {
                        avatarRef: this._defaultInlinePromptRef,
                        nativeID: e,
                        onClick: n,
                        onHoverCardScreenNameClick: a,
                        promotedContent: r,
                        screenName: u.screen_name,
                        uri: u.profile_image_url_https,
                        userId: d,
                        withHoverCard: c && !u.blocking,
                        withLink: i,
                        withNftAvatar: u.has_nft_avatar,
                        withUserPresence: s,
                      })
                    : null
                },
              },
              {
                key: '_renderTombstoneHWTweet',
                value: function (e) {
                  var t = e.actionLink,
                    n = e.actionText,
                    a = e.children,
                    r = e.style,
                    o = this.props,
                    i = o.conversationTreeMetadata,
                    l = o.onClick
                  return C.a.createElement(
                    k.a,
                    { style: r },
                    C.a.createElement(
                      ne.a,
                      { actionLink: t, actionText: n, conversationTreeMetadata: i, inline: !0, onClick: l },
                      a,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e) {
                  var t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.isFocal,
                    r = t.onClick,
                    o = t.tweet,
                    i = Yt.a.getOriginalTweet(o),
                    l = e.richText
                  return i && e && l
                    ? C.a.createElement(
                        k.a,
                        { style: Rn.spacingVertical },
                        C.a.createElement(
                          ne.a,
                          {
                            actionLink: a ? void 0 : i.permalink,
                            actionText: a ? void 0 : In,
                            conversationTreeMetadata: n,
                            inline: !0,
                            onClick: a ? void 0 : r,
                          },
                          C.a.createElement(E.a, { entities: l.entities, rtl: l.rtl, text: l.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Yt.a.getOriginalTweet(e),
                    n = t.extended_entities && t.extended_entities.media
                  return (
                    !!(n && n.length > 0) &&
                    n.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_quoteTweetHasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Yt.a.getOriginalTweet(e)
                  return !!(
                    t.quoted_status &&
                    t.quoted_status.entities &&
                    t.quoted_status.entities.media &&
                    t.quoted_status.entities.media.length > 0 &&
                    t.quoted_status.entities.media.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_renderRichContent',
                value: function (e) {
                  var t = e.nativeID,
                    n = e.withRoundMediaCorners,
                    a = this.context.featureSwitches,
                    r = this.props.withActionsDisabled,
                    o = this.props,
                    i = o.enableKeyboardShortcuts,
                    l = o.forwardPivotInfo,
                    c = o.inlineCalloutInfo,
                    s = o.innerForwardPivotInfo,
                    u = o.isFocal,
                    d = o.linkableQuotedTweet,
                    p = o.onCardLinkClick,
                    m = o.onMediaClick,
                    h = o.onQuoteTweetClick,
                    f = o.preventVideoPlayback,
                    g = o.promotedContent,
                    v = o.quoteTweetSocialContextProps,
                    b = o.quotedTweetTombstoneInfo,
                    y = o.tweet,
                    w = o.withCardLinks,
                    _ = o.withInlineMedia,
                    E = o.withUserHoverCard,
                    x = u ? 'DETAIL' : 'TIMELINE',
                    k = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!Kt.b.isDesktopOS() && !u,
                    S = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    T = Yt.a.getOriginalTweet(y)
                  return (
                    (r = r || Object(et.b)(a, T, et.a.VoteOnPoll)),
                    C.a.createElement(
                      C.a.Fragment,
                      null,
                      C.a.createElement(un.a, {
                        cardCacheLocationKey: x,
                        displayMediaMetadata: u,
                        enableKeyboardShortcuts: i,
                        forwardPivotInfo: y.softIntervention || l,
                        inlineCalloutInfo: c,
                        innerForwardPivotInfo: s,
                        isMediaMaxHeightEnabled: k,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: x,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: m,
                        onQuoteTweetClick: h,
                        preventVideoPlayback: f,
                        promotedContent: g,
                        quoteTweetSingleImageMinAspectRatio: Tn,
                        quoteTweetSocialContextProps: v,
                        quotedTweetTombstoneInfo: b,
                        renderQuoteTweetTombstone: function (e) {
                          return C.a.createElement(ie, e)
                        },
                        singleImageMaxAspectRatio: Sn,
                        singleImageMinAspectRatio: u ? 0.1 : Tn,
                        tweet: y,
                        withActionsDisabled: r,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: w,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !u && Yt.a.hasMedia(T, !_),
                        withMediaTagsIcon: u,
                        withQuoteTweetHeaderLinks: !G.canUseDOM,
                        withQuoteTweetLink: d,
                        withQuoteTweetMedia: _,
                        withReactions: S,
                        withRoundMediaCorners: n,
                        withTweetMedia: _,
                        withUserHoverCard: E,
                      }),
                      this._renderBirdwatchPivot(),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      w()(An, 'contextType', D.a),
        w()(An, 'displayName', 'Tweet'),
        w()(An, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: kn.a,
          onModeratedIconClick: kn.a,
          onModeratedIconShown: kn.a,
          replyContext: sn.a.ReplyContextTypes.Isolated,
          withActions: !1,
          withAvatarLink: !0,
          withBirdwatchPivots: !0,
          withCardLinks: !1,
          withInlineMedia: !0,
          withQuotedTweetLinks: !1,
          withRemoveFromBookmarks: !1,
          withSocialContext: !1,
          withTimestampLink: !0,
          withUserHoverCard: !0,
          withUserAvatar: !0,
          withUserName: !0,
          withTimestamp: !0,
        })
      var Rn = O.a.create(function (e) {
        return {
          replyContextBig: { marginTop: e.spaces.space12, marginBottom: 0 },
          replyContext: { marginBottom: e.spaces.space2 },
          selfThreadCTA: { marginHorizontal: 'calc(-1 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
          innerRow: { alignItems: 'baseline', flexDirection: 'row', flexShrink: 1 },
          actionBar: { marginTop: e.spaces.space12 },
          actionBarFocalTweet: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            height: e.spaces.space48,
          },
          actionsBarNarrow: { minWidth: 250, marginRight: 'auto' },
          actionBarWithInlineReply: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
          },
          promoteButton: { marginTop: e.spaces.space12 },
          tweetActivityPromoteButton: { marginVertical: e.spaces.space8 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedDetails: { marginTop: e.spaces.space4 },
          promotionStatus: { marginTop: e.spaces.space12 },
          socialContext: { marginBottom: e.spaces.space4, marginTop: '-'.concat(e.spaces.space4) },
          spacingVertical: { marginVertical: e.spaces.space4 },
          followTopicButton: { justifyContent: 'center' },
          expandedTweetText: { marginTop: e.spaces.space12 },
          footerContainer: { marginVertical: e.spaces.space16 },
          footerContent: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          footerIcons: { flexDirection: 'row' },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
          readerBottomBar: {
            borderBottomColor: e.colors.nestedBorderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            marginTop: e.spaces.space20,
            width: e.spaces.space32,
          },
          timeLocSource: { marginRight: e.spaces.space12 },
          topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) },
        }
      })
      t.b = Object(X.a)(An)
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
        g = n.n(f),
        v = n('k49u'),
        b = n('rxPX'),
        y = n('0KEI'),
        w = Object(b.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        _ = n('kGix'),
        C = n('v//M'),
        E = n('5FtR'),
        x = (function (e) {
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
                      h()(t, v.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      h()(t, v.a.PasswordVerificationRequired, {
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
                    r = t === _.a.FAILED && a
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    r
                      ? g.a.createElement(E.a, { to: '/i/flow/verify_account_ownership' })
                      : g.a.createElement(C.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        k = w.forwardRef(x)
      t.a = k
    },
    'Ey+e': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        l = n('ddV6'),
        c = n.n(l),
        s = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('z84I'), n('ho0z'), n('ERkP'), n('AOWc')),
        u = n('6/RC'),
        d = n('E6XO'),
        p = n('sXY3'),
        m = n('tn7R'),
        h = n('+d3d'),
        f = n('oECP'),
        g = n('fs1G'),
        v = {},
        b = 0,
        y = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        w = function () {
          Object(p.a)(v).forEach(function (e, t) {
            var n = c()(e, 2),
              a = n[0],
              r = n[1],
              o = Object(m.a)(r),
              i = o.length
            o.forEach(function (e) {
              Object(p.a)(y).map(function (t) {
                var n = c()(t, 2),
                  r = n[0],
                  o = c()(n[1], 2),
                  l = o[0],
                  s = o[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(i) &&
                  l in e &&
                  s in e &&
                  Object(d.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, r),
                    { duration_ms: e[l] - e[s] },
                  )
              })
            })
          }),
            Object(d.a)(),
            (v = {})
        },
        _ = Object(h.a)(w, 2e4) || w,
        C = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Object(s.a)(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((b += 1), (a = e.__lifecycleIdentifier = b)),
            (v[n] && v[n][a]) || (v[n] = i()(i()({}, v[n]), {}, r()({}, a, {}))),
            [n, a]
          )
        },
        E = function (e, t, n, a) {
          v[e][t][n] = a
        }
      t.a = u.canUseDOM
        ? function (e) {
            var t = {
              UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || g.a,
              componentDidMount: e.prototype.componentDidMount || g.a,
              UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || g.a,
              componentDidUpdate: e.prototype.componentDidUpdate || g.a,
              componentWillUnmount: e.prototype.componentWillUnmount || g.a,
            }
            return (
              (e.prototype.UNSAFE_componentWillMount = function () {
                for (
                  var e = C(this, !0), n = c()(e, 2), a = n[0], r = n[1], o = arguments.length, i = new Array(o), l = 0;
                  l < o;
                  l++
                )
                  i[l] = arguments[l]
                t.UNSAFE_componentWillMount.apply(this, i), E(a, r, 'willMount', Date.now())
              }),
              (e.prototype.componentDidMount = function () {
                for (
                  var e = C(this), n = c()(e, 2), a = n[0], r = n[1], o = arguments.length, i = new Array(o), l = 0;
                  l < o;
                  l++
                )
                  i[l] = arguments[l]
                t.componentDidMount.apply(this, i), E(a, r, 'didMount', Date.now()), _()
              }),
              (e.prototype.UNSAFE_componentWillUpdate = function () {
                for (
                  var e = C(this, !0), n = c()(e, 2), a = n[0], r = n[1], o = arguments.length, i = new Array(o), l = 0;
                  l < o;
                  l++
                )
                  i[l] = arguments[l]
                t.UNSAFE_componentWillUpdate.apply(this, i), E(a, r, 'willUpdate', Date.now())
              }),
              (e.prototype.componentDidUpdate = function () {
                for (
                  var e = C(this), n = c()(e, 2), a = n[0], r = n[1], o = arguments.length, i = new Array(o), l = 0;
                  l < o;
                  l++
                )
                  i[l] = arguments[l]
                t.componentDidUpdate.apply(this, i), E(a, r, 'didUpdate', Date.now()), _()
              }),
              (e.prototype.componentWillUnmount = function () {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                t.componentWillUnmount.apply(this, n), _()
              }),
              e
            )
          }
        : f.a
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
        g = n.n(f),
        v = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        b = n('ERkP'),
        y = n.n(b),
        w = n('TIdA'),
        _ = n('t62R'),
        C = n('5mJL'),
        E = n('DNho'),
        x = n('nBUg'),
        k = n('qjak'),
        S = n('ir4X'),
        T = n('htQn'),
        I = n('e5HP'),
        L = n('FBXD'),
        P = n('Nqmc'),
        O = n('rHpw'),
        D = n('jhWN'),
        A = n('1I0O'),
        R = n('pBrB'),
        F = n('jV+4'),
        M = n('MWbm'),
        B = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        N = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        H = w.a.createLayoutCache(),
        j = { viewType: 'user_cell' },
        U = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_renderUserName', function () {
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
                  g = t.translatorType,
                  v = t.withFollowsYou,
                  b = t.withLink,
                  w = y.a.createElement(F.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: c,
                    isVerified: s,
                    name: u,
                    onLinkClick: d,
                    promotedContent: m === B.TWEET ? p : void 0,
                    screenName: h,
                    screenNameSuffix: f,
                    translatorType: g,
                    withFollowsYou: v && l,
                    withHoverCard: !o && !i && b,
                    withLink: !i && b,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? y.a.createElement(
                      M.a,
                      { style: z.disabledMessageContainer },
                      w,
                      y.a.createElement(_.b, { color: 'gray700' }, a),
                    )
                  : w
              }),
              g()(u()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  a = t.displayMode,
                  r = t.socialContext
                return r
                  ? y.a.createElement(x.b.UseProps, null, function (e) {
                      return y.a.createElement(P.a, {
                        avatarSize: n,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: z.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== N.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              g()(u()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(k.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = n.Icon,
                  r = n.text
                return t
                  ? y.a.createElement(
                      M.a,
                      { style: z.userTypeaheadSocialContext },
                      y.a.createElement(M.a, { style: z.userTypeaheadSocialContextIcon }, a),
                      y.a.createElement(
                        _.b,
                        { color: 'gray700', numberOfLines: 1, style: z.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              g()(u()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? y.a.createElement(S.a, { label: t }) : null
              }),
              g()(u()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [N.UserDetailed, N.UserConcise].indexOf(t)
              }),
              g()(u()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              g()(
                u()(e),
                '_handleClick',
                Object(L.a)(function (t) {
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
                    g = e.promotedContent,
                    b = e.promotedItemType,
                    w = e.screenName,
                    _ = e.style,
                    x = e.testID,
                    k = e.userId,
                    S = e.withDarkerInteractiveBackground,
                    L = e.withInteractiveStyling,
                    P = e.withLink,
                    O = e.withUsernameCenterAligned,
                    R = P && !u,
                    F = s === N.UserCompact || O,
                    U = s === N.ExperimentalUserTypeahead,
                    W =
                      g && b === B.USER && 'earned' !== (g.disclosure_type && g.disclosure_type.toLowerCase())
                        ? y.a.createElement(I.a, { contentAuthorId: k, promotedContent: g, style: z.promotedIndicator })
                        : null,
                    V = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: H,
                      onClick: p,
                      onHoverCardScreenNameClick: h,
                      promotedContent: g,
                      screenName: w,
                      style: z.avatar,
                      uri: i,
                      withHoverCard: R,
                      withLink: P,
                    },
                    G = y.a.createElement(E.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return f
                        ? y.a.createElement(A.a, r()({}, V, f, { size: t }))
                        : y.a.createElement(D.a, r()({ size: t }, V))
                    }),
                    q = n && 'boolean' == typeof n.checked,
                    K = void 0 !== m,
                    Y = (q ? 'radio' : K && 'button') || 'listitem',
                    X = this._renderUserName(),
                    Q = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = Q || J || W || l,
                    $ = y.a.createElement(
                      y.a.Fragment,
                      null,
                      Q,
                      J,
                      W,
                      l ? y.a.createElement(M.a, { style: z.bottomControl }, l) : null,
                    )
                  return y.a.createElement(
                    v.a,
                    { behavioralEventContext: j },
                    y.a.createElement(
                      T.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: Y,
                        accessibilityState: n,
                        disabled: !!d,
                        focusable: q || K,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [z.root, _],
                        testID: x,
                        withDarkerInteractiveBackground: S,
                        withInteractiveStyling: null != L ? L : !!m,
                      },
                      U ? null : this._renderSocialContext(),
                      y.a.createElement(
                        C.a,
                        {
                          avatarCell: G,
                          avatarCellStyle: [z.avatarColumn, F && z.bodyColumnCentered],
                          avatarSize: U ? 'xxxLarge' : o,
                          cellStyle: [z.bodyColumn, F && z.bodyColumnCentered],
                        },
                        y.a.createElement(M.a, { style: z.body }, X, c),
                        F ? null : $,
                        U ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && F
                        ? y.a.createElement(
                            C.a,
                            { avatarCell: null, avatarCellStyle: z.avatarColumn, cellStyle: z.bodyColumn },
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
                    ? y.a.createElement(R.a, {
                        description: t,
                        entities: a,
                        isConcise: n === N.UserConcise,
                        style: z.bio,
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
        })(y.a.PureComponent)
      g()(U, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var z = O.a.create(function (e) {
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
      t.a = U
    },
    JUsM: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('uFXj'), n('2G9S'), n('ERkP')),
        i = n.n(o),
        l = n('t62R'),
        c = n('rHpw'),
        s = n('shC7'),
        u = n('MWbm'),
        d = c.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              backgroundColor: e.colors.navigationBackground,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              borderColor: e.colors.gray50,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            containerDown: { marginTop: e.spaces.space12 },
            containerUp: { marginTop: e.spaces.space20 },
            text: { flexShrink: 1, alignSelf: 'center', alignItems: 'flex-start' },
            actionsContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: e.spaces.space12 },
            arrowContainer: { position: 'absolute', display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrowDirectionDown: { bottom: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrow: {
              borderStyle: 'solid',
              borderTopWidth: 0,
              borderRightWidth: e.spaces.space1,
              borderBottomWidth: e.spaces.space1,
              borderLeftWidth: 0,
              borderColor: e.colors.gray50,
              width: e.spaces.space12,
              height: e.spaces.space12,
              backgroundColor: e.colors.navigationBackground,
            },
          }
        })
      t.a = function (e) {
        var t = e.containerRef,
          n = e.primaryAction,
          a = e.secondaryAction,
          o = e.text,
          c = i.a.useState(void 0),
          p = r()(c, 2),
          m = p[0],
          h = p[1],
          f = s.a.getConstants().isRTL,
          g = i.a.useRef(0),
          v = i.a.useRef(0),
          b = (function () {
            if (null != t && t.current && m) {
              var e = t.current.getBoundingClientRect(),
                n = e.left,
                a = e.top,
                r = e.width
              g.current = a
              var o = n + r / 2 - m
              return { left: f ? void 0 : o, right: f ? o : void 0 }
            }
          })(),
          y = v.current < g.current,
          w = y ? [d.arrowDirectionDown] : [d.arrowDirectionUp],
          _ = y
            ? f
              ? { transform: 'rotate(-45deg)' }
              : { transform: 'rotate(45deg)' }
            : f
            ? { transform: 'rotate(135deg)' }
            : { transform: 'rotate(-135deg)' },
          C = y ? [d.containerDown] : [d.containerUp]
        return i.a.createElement(
          u.a,
          {
            accessibilityRole: 'text',
            onLayout: function (e) {
              var t = e.nativeEvent.layout,
                n = t.left,
                a = t.top,
                r = t.width
              ;(v.current = a), h(n + r / 2)
            },
            style: [d.root, C],
          },
          null != t && t.current
            ? i.a.createElement(
                u.a,
                { style: [w, d.arrowContainer, b] },
                i.a.createElement(u.a, { style: [d.arrow, _] }),
              )
            : null,
          i.a.createElement(l.b, { style: d.text }, o),
          i.a.createElement(u.a, { style: d.actionsContainer }, n, a),
        )
      }
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
        g = n.n(f),
        v = (n('TJCb'), n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        b = n.n(v),
        y = n('RqPI'),
        w = n('rxPX'),
        _ = Object(w.a)().propsFromState(function () {
          return { language: y.p }
        }),
        C = n('3XMw'),
        E = n.n(C),
        x = n('fs1G'),
        k = n('rHpw'),
        S = n('BLtI'),
        T = n('MWbm'),
        I = 'Twitter',
        L = E.a.ea1c87a5({ mention: I }),
        P = {
          text: L,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, L.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: I,
                indices: [L.indexOf('@'), L.indexOf('@') + I.length + 1],
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
        O = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              g()(u()(a), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var o = a.props,
              l = o.language,
              c = o.tweet
            return (a._tweet = r()(r()(r()({}, P), c), {}, { lang: l || 'en' })), a
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return b.a.createElement(
                    T.a,
                    { accessibilityHidden: !0, style: e && D.tweetBorder },
                    b.a.createElement(S.b, {
                      enableKeyboardShortcuts: !1,
                      onAnalyticsClick: x.a,
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
                    b.a.createElement(T.a, { style: k.a.absoluteFill }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(O, 'defaultProps', { tweet: P, withTweetBorder: !1 })
      var D = k.a.create(function (e) {
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
        A = _(O)
      t.a = A
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
    LWCC: function (e, t, n) {
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
        f = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(f),
        v = n('Zejx'),
        b = n('rxPX'),
        y = n('0KEI'),
        w = Object(b.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: v.a.follow,
              unfollow: v.a.unfollow,
            }
          })
          .withAnalytics(),
        _ = n('CGyZ'),
        C = n('PbbS'),
        E = n('3XMw'),
        x = n.n(E),
        k = n('sUoZ'),
        S = n('Tp1h'),
        T = n('Jkc4'),
        I = n('TnY3'),
        L = Object.freeze({ follow: x.a.i79ab12a, following: x.a.d960b55b, unfollow: x.a.c0f56044 }),
        P = Object.freeze({
          follow: x.a.fcf51fe6,
          following: x.a.e9a90d71,
          unfollow: x.a.bf403715,
          confirmationHeadline: x.a.c9f08e28,
          confirmationSheetText: x.a.abc600f3,
        }),
        O = Object.freeze({
          follow: x.a.cd876e01,
          following: x.a.f2816e02,
          unfollow: x.a.f5b04fbb,
          confirmationHeadline: x.a.c481ae3f,
          confirmationSheetText: x.a.aa3ba123,
        }),
        D = Object.freeze({
          follow: x.a.e0e730b0,
          following: x.a.e0e730b0,
          unfollow: x.a.b1850062,
          confirmationHeadline: x.a.gd3f996f,
          confirmationSheetText: x.a.i36c403c,
        }),
        A = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              h()(c()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case C.a.Favorite:
                  case C.a.Star:
                  case C.a.Interested:
                    return g.a.createElement(k.a, null)
                  case C.a.FollowTopic:
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(c()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? g.a.createElement(g.a.Fragment, null) : void 0
              }),
              h()(c()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case C.a.FollowTopic:
                    return { follow: L.follow, unfollow: L.unfollow, following: L.following }
                  case C.a.Favorite:
                    return {
                      follow: O.follow,
                      unfollow: O.unfollow,
                      following: O.following,
                      confirmationHeadline: O.confirmationHeadline && O.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: O.confirmationSheetText,
                    }
                  case C.a.Star:
                    return {
                      follow: P.follow,
                      unfollow: P.unfollow,
                      following: P.following,
                      confirmationHeadline: P.confirmationHeadline && P.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: P.confirmationSheetText,
                    }
                  case C.a.Interested:
                    return {
                      follow: D.follow,
                      unfollow: D.unfollow,
                      following: D.following,
                      confirmationHeadline: D.confirmationHeadline && D.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: D.confirmationSheetText,
                    }
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(c()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.educateOnFollow,
                  r = t.follow,
                  o = t.history,
                  i = t.topic
                r(i.id).catch(n()),
                  e._handleScribe('follow'),
                  a && i && o.push({ pathname: '/i/topics/education', state: { topicName: i.name } })
              }),
              h()(c()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.topic
                ;(0, t.unfollow)(a.id).catch(n()), e._handleScribe('unfollow')
              }),
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
                    n = t.ariaDescribedBy,
                    a = t.isTransparent,
                    r = t.nativeID,
                    o = t.showRelationshipChangeConfirmation,
                    i = t.size,
                    l = t.style,
                    c = t.textMode,
                    s = t.topic,
                    u = s.following,
                    d = s.name
                  return g.a.createElement(T.a, { customText: d, displayMode: S.a.topic }, function (t) {
                    return g.a.createElement(_.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(c),
                        followingIcon: e._getFollowingButtonIcon(c),
                      },
                      buttonText: e._getButtonText(c),
                      displayMode: e._getDisplayMode(c),
                      isFollowing: u,
                      isTransparent: a,
                      name: d,
                      nativeID: r,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: o,
                      size: i,
                      style: l,
                      type: 'topic',
                      withConfirmationSheetText: u,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(A, 'defaultProps', { size: 'small', textMode: C.a.Default })
      t.a = Object(I.a)(w(A))
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
        g = n.n(f),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        b = n('ERkP'),
        y = n.n(b),
        w = n('HPNB'),
        _ = n('VAZu'),
        C = n('wiP2'),
        E = n('Es6L'),
        x = n('yiKp'),
        k = n.n(x),
        S = n('rHpw'),
        T = S.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, S.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        I = n('MWbm'),
        L = n('yw4N'),
        P = n('TnY3'),
        O = n('cHvH'),
        D = n('3xLC'),
        A = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        R = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? y.a.createElement(
                      I.a,
                      { style: T.fill },
                      y.a.createElement(
                        L.a,
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
                  return y.a.createElement(O.a, null, function (t) {
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
                      r()(e, A))
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    Object(E.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : y.a.createElement(C.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return y.a.createElement(
                    y.a.Fragment,
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
                    g = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    E = n.subtitle,
                    x = n.title,
                    k = n.titleIconCell,
                    S = n.titleIconCellSize,
                    L = n.withDetailOpen,
                    P = n.withSearchBox,
                    O = n.withTweetButton,
                    D = 'root' === h,
                    A = 'secondaryRoot' === h,
                    R = 'primaryDetail' === h,
                    F = (R && w) || (D && b),
                    M = D || (R && t),
                    B = D ? v.c : R ? v.a : void 0,
                    N = y.a.createElement(
                      I.a,
                      { style: T.appBarContainer },
                      y.a.createElement(_.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: M,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: g,
                        subtitle: F ? E : void 0,
                        title: x,
                        titleDomId: B,
                        titleIconCell: k,
                        titleIconCellSize: S,
                      }),
                    ),
                    H =
                      D || (A && L)
                        ? null
                        : y.a.createElement(C.a.Configure, {
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
                            subtitle: E,
                            title: x,
                            withSearchBox: P,
                            withTweetButton: O,
                          })
                  return y.a.createElement(y.a.Fragment, null, H, N)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(R, 'contextType', D.a),
        g()(R, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(P.a)(R)
    },
    NyKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return g
      }),
        n.d(t, 'a', function () {
          return v
        }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'g', function () {
          return w
        }),
        n.d(t, 'h', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'e', function () {
          return x
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
        g = Object.freeze({
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
        v = [g.NEW, g.INPROGRESS, g.INPROGRESS_ASYNC, g.ZIPPING, g.PUBLISHING, g.NOTIFYING],
        b = { fetchStatus: s.a.None, downloads: { all: [], nonFailed: [] } }
      u.a.register(
        r()({}, p, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
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
      var y = function (e) {
          return e.userData.downloads
        },
        w = function (e) {
          return e.userData.fetchStatus
        },
        _ = function (e) {
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
        E = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(d.b)(e, { request: a.UserData.createDataDownload })({
              actionTypes: f,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        x = function (e) {
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
        g = n.n(f),
        v = n('zh9S'),
        b = n('NyKK'),
        y = n('rxPX'),
        w = n('0KEI'),
        _ = Object(y.a)()
          .propsFromState(function () {
            return { fetchStatus: b.g, downloads: b.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: b.d,
              googleAnalyticsPageView: v.a,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: b.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        C = n('XYIJ'),
        E = (n('6U7i'), n('3XMw')),
        x = n.n(E),
        k = n('aITJ'),
        S = n('MWbm'),
        T = n('/yvb'),
        I = n('eb3s'),
        L = n('855f'),
        P = x.a.cfd2f35d,
        O = x.a.fc5bfd95,
        D = x.a.gee8110d,
        A = x.a.c326f156,
        R = x.a.c9fe9b56,
        F = x.a.j54b679a,
        M = x.a.ac63840c,
        B = x.a.bcd9b0ed,
        N = (function (e) {
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
                    l = F({ size: n.getSizeLabel(o) }),
                    c = t ? A : D
                  return g.a.createElement(
                    S.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? g.a.createElement(
                          S.a,
                          null,
                          g.a.createElement(
                            T.a,
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
                            ? g.a.createElement(I.a, {
                                cancelButtonLabel: P,
                                confirmButtonLabel: O,
                                confirmButtonLink: { pathname: i || '', external: !0 },
                                headline: R,
                                onCancel: this._handleCancel,
                                onConfirm: this._handleConfirm,
                                text: l,
                              })
                            : null,
                        )
                      : g.a.createElement(
                          T.a,
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
        })(g.a.Component)
      h()(N, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? M({ size: L.a.getFormattedCount(t) })
          : B({ size: L.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var H = n('7FtF'),
        j = n('ClNT'),
        U = n('t62R'),
        z = n('rHpw'),
        W = n('v6aA'),
        V = x.a.f56af9cc,
        G = x.a.b2ed92c3,
        q = x.a.ce5d2c46,
        K = x.a.dd9ec81f,
        Y = x.a.c7227886,
        X = x.a.a0c3f812,
        Q = x.a.ba2e82a1,
        J = x.a.eea30bb4,
        Z = x.a.f2cde471,
        $ = x.a.b7ce9dbe,
        ee = x.a.fbc92b61,
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
                return t.length ? g.a.createElement(S.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              h()(c()(e), '_renderDownloadItems', function (t, n) {
                return g.a.createElement(
                  S.a,
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
                  return g.a.createElement(
                    H.a,
                    { location: a, title: V },
                    g.a.createElement(j.a, { fetch: t, fetchStatus: n, renderChildren: this._render }),
                  )
                },
              },
              {
                key: '_renderEmptyState',
                value: function () {
                  return g.a.createElement(
                    S.a,
                    { style: ne.emptyState },
                    g.a.createElement(U.b, { size: 'title4' }, K),
                    g.a.createElement(U.b, { color: 'gray700', style: ne.emptyStateDescription }, X),
                    g.a.createElement(
                      T.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: C.a.narrowButton,
                        type: 'brandFilled',
                      },
                      Y,
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
                  return g.a.createElement(
                    S.a,
                    { key: ''.concat(r), style: [C.a.narrowButtonRow, C.a.bottomBorder, C.a.labelContainer] },
                    g.a.createElement(
                      S.a,
                      null,
                      g.a.createElement(U.b, { weight: 'bold' }, ee({ currentIndex: r, count: o })),
                      e.generated
                        ? g.a.createElement(U.b, { color: 'gray700' }, J({ date: Q(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? g.a.createElement(U.b, { color: 'gray700' }, Z({ date: Q(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? g.a.createElement(U.b, { color: 'gray700' }, $({ size: N.getSizeLabel(t.size_b) }))
                        : null,
                    ),
                    g.a.createElement(N, { disabled: !i, onConfirm: this._handleConfirm(t), url: t }),
                  )
                },
              },
              {
                key: '_renderUnavailableButton',
                value: function (e) {
                  return g.a.createElement(
                    S.a,
                    { style: [C.a.narrowButtonRow, C.a.bottomBorder, C.a.labelContainer] },
                    g.a.createElement(U.b, { weight: 'bold' }, ee({ currentIndex: 1, count: 1 })),
                    g.a.createElement(
                      T.a,
                      { disabled: !0, size: 'small', style: C.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? G : q,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(te, 'contextType', W.a)
      var ne = z.a.create(function (e) {
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
      t.default = _(te)
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('rHpw'),
        i = n('MWbm')
      function l(e) {
        var t = e.spacing
        return r.a.createElement(i.a, {
          accessibilityRole: 'separator',
          style: [c.divider, { marginVertical: null != t ? o.a.theme.spaces[t] : void 0 }],
        })
      }
      var c = o.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('z84I'), n('ho0z'), n('ERkP')),
        i = n.n(o),
        l = n('aWyx'),
        c = n('XnpN'),
        s = n('3XMw'),
        u = n.n(s),
        d = n('MWbm'),
        p = n('jV+4'),
        m = n('pjBI'),
        h = n('t62R'),
        f = n('rHpw'),
        g = n('p9G8'),
        v = u.a.cfd94063,
        b = u.a.b93ba92c,
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        w = f.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        _ = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            a = e.perspective
          if (t) {
            if (t.type === l.a.ONE_TO_ONE) {
              var o = Object(c.a)(t, a).map(function (e) {
                return e.user
              })
              return r()(o, 1)[0].name
            }
            return Object(g.a)(t, a)
          }
          var i = y(n)
          return Object(g.b)(i, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          o = e.isMessageSearchTitle,
          s = void 0 !== o && o,
          u = e.newConversationParticipants,
          f = e.perspective,
          _ = e.renderTimestamp,
          C = e.textColor,
          E = void 0 === C ? 'text' : C,
          x = e.titleWeight,
          k = void 0 === x ? 'bold' : x,
          S = e.withParticipantsCount,
          T = void 0 !== S && S,
          I = e.withScreenName,
          L = void 0 === I || I,
          P = e.withVDLRefresh,
          O = void 0 !== P && P
        if (t) {
          var D = _ ? _() : null
          if (t.type === l.a.ONE_TO_ONE) {
            var A = Object(c.a)(t, f).map(function (e) {
                return e.user
              }),
              R = r()(A, 1)[0],
              F = i.a.createElement(p.a, {
                color: E,
                isProtected: R.protected,
                isVerified: R.verified,
                name: R.name,
                screenName: R.screen_name,
                weight: k,
                withLink: !1,
                withScreenName: L,
              })
            return (O && !a) || s ? i.a.createElement(m.a, null, F, D) : F
          }
          var M = t.participants.length + (O ? -1 : 0)
          if (a)
            return i.a.createElement(
              m.a,
              { color: E },
              i.a.createElement(h.b, { color: E, numberOfLines: 1, style: w.title, weight: k }, Object(g.a)(t, f, a)),
              O
                ? null
                : i.a.createElement(
                    h.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: M }),
                  ),
            )
          var B = i.a.createElement(h.b, { color: E, numberOfLines: 1, weight: k }, Object(g.a)(t, f, a))
          return (O && !a) || s
            ? i.a.createElement(
                d.a,
                { style: w.dmGroup },
                i.a.createElement(m.a, null, B, D),
                T && i.a.createElement(h.b, { color: 'gray700', numberOfLines: 1 }, b({ peopleCount: M })),
              )
            : B
        }
        var N = y(u)
        return i.a.createElement(h.b, { color: E, numberOfLines: 1, weight: k }, Object(g.b)(N, f))
      }
    },
    Olb6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('3XMw'),
        i = n.n(o),
        l = n('5cUs'),
        c = n('wwsH'),
        s = i.a.d9fd5570,
        u = { viewType: 'hidden_replies' }
      t.a = function (e) {
        var t = e.link,
          n = e.onPress
        return r.a.createElement(c.a, {
          Icon: l.a,
          accessibilityLabel: s,
          activeColor: 'primary',
          behavioralEventContext: u,
          link: t,
          onPress: n,
        })
      }
    },
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'a', function () {
          return g
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
      function g(e) {
        e.link
        var t = i()(e, p)
        return c.a.createElement(u.a, r()({}, t, { link: { external: !0, pathname: e.link } }))
      }
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f'), n('ERkP')
      var a = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    'Q++C': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DataUsageScreen', function () {
          return z
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
        g = n.n(f),
        v = n('ERkP'),
        b = n.n(v),
        y = n('FPOR'),
        w = n('P1r1'),
        _ = n('rxPX'),
        C = n('0KEI'),
        E = n('H9MA'),
        x = Object(_.a)()
          .propsFromState(function () {
            return { dataSaverMode: E.c, videoAutoplay: E.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: E.b,
              updateDataSaverMode: E.g,
              updateSettings: w.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        k = n('45mF'),
        S = n('6v1f'),
        T = n('3XMw'),
        I = n.n(T),
        L = n('yoO3'),
        P = n('7FtF'),
        O = n('3cwy'),
        D = 'dataSaverBooleanItem',
        A = n('v6aA'),
        R = n('RKmr'),
        F = n('e0ey'),
        M = n('csss'),
        B = I.a.eafe3287,
        N = I.a.d76fe4fc,
        H = I.a.a57a341b,
        j = I.a.d88102cf,
        U = I.a.a776eed7,
        z = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              g()(u()(o), '_handleDataSaverChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  i = n.createLocalApiErrorHandler,
                  l = n.updateDataSaverMode
                a.scribe({ element: e, action: t ? 'on' : 'off' }),
                  l({ enabled: t }).catch(i(r()(r()({}, Object(k.a)()), {}, { showToast: !0 })))
              }),
              (o._showVideoAutoplaySetting = Object(O.a)()),
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
                  return b.a.createElement(
                    L.a,
                    null,
                    b.a.createElement(
                      P.a,
                      { location: n, screenType: 'secondaryDetail', title: B },
                      b.a.createElement(R.a, { description: N }),
                      b.a.createElement(F.a, {
                        checked: t,
                        helpText: j,
                        label: H,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: D,
                      }),
                      this._showVideoAutoplaySetting &&
                        b.a.createElement(M.a, {
                          description: y.a[a || S.a],
                          disabled: t,
                          label: U,
                          link: '/settings/autoplay',
                        }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(z, 'contextType', A.a)
      t.default = x(z)
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
        g = n.n(f),
        v = n('dDSG'),
        b = n('FPOR'),
        y = n('6/RC'),
        w = n('rxPX'),
        _ = n('0KEI'),
        C = n('2iUg'),
        E = n('P1r1'),
        x = n('H9MA'),
        k = Object(w.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: C.b,
              autoPollNewTweets: E.h,
              dataSaverMode: x.c,
              reducedMotionEnabled: E.w,
              videoAutoplay: x.f,
              highContrastEnabled: E.p,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              fetchAltTextPromptPreferenceIfNeeded: C.a,
              updateAltTextPromptPreference: C.c,
              updateSettings: E.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        S = n('6v1f'),
        T = n('3XMw'),
        I = n.n(T),
        L = n('yoO3'),
        P = n('7FtF'),
        O = n('OySi'),
        D = n('3cwy'),
        A = 'accessibilityScreen',
        R = n('MWbm'),
        F = n('38/B'),
        M = n('rHpw'),
        B = n('RKmr'),
        N = n('6vad'),
        H = n('e0ey'),
        j = n('0yYu'),
        U = n('csss'),
        z = n('v6aA'),
        W = I.a.e3719c15,
        V = I.a.a5208fad,
        G = I.a.d5b646bd,
        q = I.a.jfe6a3a0,
        K = I.a.add55c97,
        Y = I.a.a6d5b010,
        X = I.a.e8c72272,
        Q = I.a.dba2cdd1,
        J = I.a.d070244e,
        Z = I.a.icfa5e8b,
        $ = I.a.ae41b002,
        ee = I.a.e82b294e,
        te = I.a.ea284ab8,
        ne = I.a.a776eed7,
        ae = I.a.bd15d030,
        re = I.a.a2dfde67,
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
                o._handleSettingChanged(e, t), F.a.setReducedMotion(t)
              }),
              h()(c()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), M.a.setHighContrast(t)
              }),
              h()(c()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateAltTextPromptPreference,
                  l = t ? v.a.prompt : null
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
              (o._showVideoAutoplaySetting = Object(D.a)()),
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
                    l = y.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return g.a.createElement(
                    L.a,
                    null,
                    g.a.createElement(
                      P.a,
                      { location: r, screenType: 'secondaryDetail', title: W },
                      g.a.createElement(
                        R.a,
                        { testID: A },
                        g.a.createElement(B.a, { description: V }),
                        g.a.createElement(N.b, { text: G }),
                        g.a.createElement(H.a, {
                          checked: a,
                          helpText: Q,
                          label: X,
                          name: 'highContrastEnabled',
                          onChange: this._handleHighContrastChanged,
                        }),
                      ),
                      this._showVideoAutoplaySetting
                        ? g.a.createElement(
                            R.a,
                            null,
                            g.a.createElement(j.a, null),
                            g.a.createElement(N.b, { text: q }),
                            g.a.createElement(H.a, {
                              checked: o || l,
                              disabled: l,
                              helpText: l ? $ : Z,
                              label: J,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            g.a.createElement(U.a, {
                              description: b.a[i || S.a],
                              disabled: n,
                              label: ne,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextPromptPreferenceSetting
                        ? g.a.createElement(
                            R.a,
                            null,
                            g.a.createElement(j.a, null),
                            g.a.createElement(N.b, { text: K }),
                            g.a.createElement(H.a, {
                              checked: t === v.a.prompt,
                              helpText: te,
                              label: ee,
                              name: 'altTextNudgeType',
                              onChange: this._handleAltTextNudgeTypeChanged,
                            }),
                          )
                        : null,
                      this._maybeRenderTimelineSettings(),
                      g.a.createElement(
                        R.a,
                        null,
                        g.a.createElement(j.a, null),
                        g.a.createElement(N.b, { text: ae }),
                        g.a.createElement(O.a, { label: re, link: 'https://help.twitter.com/resources/accessibility' }),
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
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(j.a, null),
                        g.a.createElement(N.b, { text: Y }),
                        g.a.createElement(H.a, {
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
        })(g.a.Component)
      h()(oe, 'contextType', z.a)
      t.default = k(oe)
    },
    Sksh: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('KEM+'),
        c = n.n(l),
        s = (n('+KXO'), n('849X'), n('TJCb'), n('SrIh')),
        u = n('M0jS'),
        d = n('+d3d'),
        p = n('VY6S'),
        m = (function () {
          function e() {
            var t = this
            r()(this, e),
              c()(this, 'usersInApp', {}),
              c()(
                this,
                '_throttledInitialFetch',
                Object(d.a)(function () {
                  t.store.dispatch(u.b.fetchManyIfNeeded(Object.keys(t.usersInApp)))
                }, 1500),
              )
          }
          return (
            i()(e, [
              {
                key: 'init',
                value: function (e) {
                  this.store = e
                },
              },
              {
                key: 'registerUserInApp',
                value: function (e) {
                  Object.keys(this.usersInApp).length > 50 &&
                    ((this.usersInApp = {}),
                    Object(s.a)(new Error('Registered users in app has exceeded 50'), { level: 'warning' })),
                    this.usersInApp[e]
                      ? (this.usersInApp[e] = this.usersInApp[e] + 1)
                      : ((this.usersInApp[e] = 1), Object(p.a)(this._throttledInitialFetch(), 100))
                },
              },
              {
                key: 'deregisterUserInApp',
                value: function (e) {
                  this.usersInApp[e] && this.usersInApp[e] > 1
                    ? (this.usersInApp[e] = this.usersInApp[e] - 1)
                    : delete this.usersInApp[e]
                },
              },
            ]),
            e
          )
        })()
      t.a = new m()
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
    XnpN: function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        l = (n('2G9S'), n('tQbP'), n('aWyx')),
        c = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        u = function (e, t) {
          return s(e.join_time) - s(t.join_time)
        },
        d = function (e, t) {
          var n = e.user,
            a = t.user
          return Object(c.a)(n.id_str, a.id_str)
        },
        p = function (e) {
          return (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return function (e, n) {
              return (
                t
                  .map(function (t) {
                    return t(e, n)
                  })
                  .filter(function (e) {
                    return !!e
                  })[0] || 0
              )
            }
          })(
            (function (e) {
              return function (t, n) {
                var a = t.user,
                  r = n.user
                switch (e) {
                  case a.id_str:
                    return -1
                  case r.id_str:
                    return 1
                  default:
                    return 0
                }
              }
            })(e),
            u,
            d,
          )
        },
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          a = e.participants,
          o = e.type,
          c = Object(m.a)(a, function (e) {
            return e.user.id_str === t
          }),
          s = i()(c, 2),
          u = s[0],
          d = s[1]
        return d.length ? (o === l.a.GROUP && 1 === d.length ? [].concat(r()(u), r()(d)) : n ? d.sort(p(n)) : d) : u
      }
    },
    YICZ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('Zejx'),
        i = n('rxPX'),
        l = n('0KEI'),
        c = Object(i.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'TOPIC_NOT_INTERESTED_CONTEXT',
            ),
            setNotInterested: o.a.notInterested,
          }
        }),
        s = n('3XMw'),
        u = n.n(s),
        d = n('hOZg'),
        p = n('Jkc4'),
        m = n('Irs7'),
        h = n('/yvb'),
        f = n('rHpw'),
        g = u.a.d9b417c4,
        v = u.a.c29d6806,
        b = u.a.e839db39,
        y = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.nativeID,
            a = e.onPress,
            o = e.setNotInterested,
            i = e.size,
            l = e.style,
            c = e.text,
            s = e.topicId,
            u = e.type,
            d = e.withIconOnly,
            f = Object(m.b)(),
            v = r.a.useCallback(
              function (e) {
                e.preventDefault(),
                  a ? a(e) : (f.scribe({ element: 'topic', action: 'not_interested' }), o(s).catch(t()))
              },
              [f, t, a, o, s],
            )
          return r.a.createElement(p.a, null, function (e) {
            return r.a.createElement(
              h.a,
              {
                accessibilityLabel: g,
                hoverLabel: { label: b },
                icon: d ? _ : void 0,
                nativeID: n,
                onPress: e(v),
                pullRight: d,
                size: i,
                style: l,
                type: u,
              },
              d ? null : c,
            )
          })
        }
      y.defaultProps = { size: 'small', text: v, type: 'brandText', withIconOnly: !0 }
      var w = f.a.create(function (e) {
          return { closeIcon: { color: e.colors.gray700 } }
        }),
        _ = r.a.createElement(d.a, { style: w.closeIcon }),
        C = c(y)
      t.a = C
    },
    Yatk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('1t7P'), n('jQ/y'), n('ho0z')
      var a = function (e) {
        if (e)
          return {
            blocking: e.blocking,
            can_dm: e.can_dm,
            can_media_tag: e.can_media_tag,
            created_at: e.created_at,
            description: e.description,
            entities: e.entities,
            followed_by: e.followed_by,
            followers_count: e.followers_count,
            following: e.following,
            friends_count: e.friends_count,
            id: e.id,
            id_str: e.id_str,
            name: e.name,
            profile_image_url_https: e.profile_image_url_https,
            protected: e.protected,
            screen_name: e.screen_name,
            verified: e.verified,
          }
      }
    },
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return be
      }),
        n.d(t, 'a', function () {
          return _e
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
        g = n.n(f),
        v = n('+Kfv'),
        b = 'typeaheadResult',
        y = n('v6aA'),
        w = n('AQOc'),
        _ = n('V5Qi'),
        C = n('G6rE'),
        E = n('rxPX'),
        x = function (e, t) {
          return t.conversationId
        },
        k = function (e, t) {
          return Object(_.a)(e, x(0, t))
        },
        S = Object(E.a)()
          .propsFromState(function () {
            return { conversationId: x, conversation: k, users: C.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(w.b)(t.data, void 0, n)), a
          }),
        T = n('aA19'),
        I = n('OhSZ'),
        L = n('5mJL'),
        P = n('rHpw'),
        O = P.a.create(function (e) {
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
        D = S(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            a = e.isSelected,
            r = e.perspective,
            o = g.a.useContext(y.a).featureSwitches,
            i = o.isTrue('dm_vdl_enabled') && o.isTrue('dm_vdl_inbox_p0_enabled')
          return t
            ? g.a.createElement(
                L.a,
                {
                  avatarCell: g.a.createElement(T.a, { conversation: t, perspective: r, size: 'xLarge' }),
                  avatarCellStyle: O.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: O.bodyColumn,
                  style: [O.root, !a && n && O.disabled],
                },
                g.a.createElement(I.b, {
                  conversation: t,
                  perspective: r,
                  withParticipantsCount: !0,
                  withVDLRefresh: i,
                }),
                _e({ isSelected: a }),
              )
            : null
        }),
        A = (n('uFXj'), n('MWbm')),
        R = n('LbZ7'),
        F = n('t62R'),
        M = n('9Xij'),
        B = n('TIdA'),
        N = n('A91F'),
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
                  return g.a.createElement(
                    A.a,
                    { style: U.root },
                    g.a.createElement(
                      R.a,
                      { withGutter: !0 },
                      g.a.createElement(
                        A.a,
                        { style: U.bodyColumn },
                        a ? g.a.createElement(F.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        g.a.createElement(F.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? g.a.createElement(
                            A.a,
                            { style: U.coverContainer },
                            g.a.createElement(
                              M.a,
                              { ratio: 1 },
                              g.a.createElement(B.a, { accessibilityLabel: '', aspectMode: N.a.SQUARE, image: n }),
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
        })(g.a.PureComponent),
        j = '100px',
        U = P.a.create(function (e) {
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
        z = H,
        W = n('5T6p'),
        V =
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
        G = n.n(V)
      var q = n('FiRh'),
        K = n('j7Bv'),
        Y = n('EHV7'),
        X = n('Gfoi')
      var Q = P.a.create(function (e) {
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
        J = function (e) {
          var t = g.a.useContext(y.a).featureSwitches,
            n = e.isDisabled,
            a = e.query,
            r = e.resultContext,
            o = e.showIcon,
            i = e.style,
            l = (function (e, t) {
              var n,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = G()(e),
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
                  var g = d ? ''.concat(null == e ? void 0 : e.replace('#', '')) : e
                  return {
                    highlights: null !== (n = r) && void 0 !== n && n.length ? r : void 0,
                    text: g,
                    entityType: d ? 'hashtag' : 'text',
                    prefix: d ? '#' : '',
                  }
                })
              }
              return n
            })(e.topic, t.isTrue('responsive_web_typeahead_reverse_bolding_enabled') ? a : '', true),
            c = g.a.createElement(
              F.b,
              null,
              l.map(function (e, t) {
                return g.a.createElement(q.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            s = g.a.createElement(
              g.a.Fragment,
              null,
              c,
              r
                ? g.a.createElement(
                    A.a,
                    { style: Q.context },
                    r && r.types[0] && 'followable_topic' === r.types[0].type
                      ? g.a.createElement(Y.a, { style: Q.icon })
                      : null,
                    g.a.createElement(F.b, { color: 'gray700' }, r.display_string || ' '),
                  )
                : null,
            )
          return g.a.createElement(
            A.a,
            { style: [Q.root, n && Q.disabled, i] },
            o
              ? (function (e) {
                  var t = g.a.createElement(K.a, { Icon: X.a, color: 'neutral', size: 'xxxLarge', style: Q.searchIcon })
                  return g.a.createElement(
                    L.a,
                    {
                      avatarCell: t,
                      avatarCellStyle: Q.searchIconCell,
                      avatarSize: 'xxxLarge',
                      cellStyle: Q.wrapperCellStyle,
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
        ee = Object(E.a)().propsFromState(function () {
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
                    v = this._getResultContext() || f,
                    b = u === oe.d.SearchBox,
                    y = p && h.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
                  return (
                    y && (y.accessibilityLabel = se({ screenName: s })),
                    g.a.createElement(ie.a, {
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
                      presenceIndicator: b ? y : void 0,
                      screenName: s,
                      socialContext: v,
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
        })(g.a.PureComponent)
      h()(de, 'contextType', y.a), h()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(de),
        me = n('htQn'),
        he = n('iySH'),
        fe = n('IMYl'),
        ge = { viewType: 'typeahead_result' },
        ve = function (e) {
          return e.children
        }
      function be(e) {
        return g.a.createElement(ve, { item: e.item }, g.a.createElement(ye, e))
      }
      var ye = (function (e) {
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
                return g.a.createElement(
                  v.a,
                  { behavioralEventContext: ge },
                  g.a.createElement(
                    A.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!r || !o) || void 0,
                        selected: n ? void 0 : (r && o) || (!r && !!a),
                      },
                      nativeID: t,
                      testID: b,
                    },
                    g.a.createElement(
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
                      u = l ? l({ userId: s.id_str, user: s, isSelected: r }) : void 0,
                      d = n ? n(o, s) : void 0
                    return g.a.createElement(pe, {
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
                      ? g.a.createElement(W.a, {
                          image: p.primary_image && p.primary_image.original_info,
                          style: we.itemPadding,
                          supportText: p.supporting_text,
                          title: p.topic,
                          withNewTypeaheadUI: !0,
                        })
                      : g.a.createElement(z, {
                          event: p.topic,
                          image: p.primary_image && p.primary_image.original_info,
                          supportText: p.supporting_text,
                        })
                  case oe.b.Hashtag:
                  case oe.b.Topic:
                    var m = this.props.query,
                      h = o.data,
                      f = c === oe.d.SearchBox
                    return g.a.createElement(J, {
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
                      g.a.createElement(D, {
                        conversationId: o.id,
                        isDisabled: a,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case oe.b.SettingGroup:
                    var v = o.data.text
                    return g.a.createElement(
                      A.a,
                      { style: we.navigationLink },
                      g.a.createElement(F.b, { style: we.content, weight: 'bold' }, v),
                      g.a.createElement(he.a, { style: we.icon }),
                    )
                  case oe.b.Setting:
                    var b = o.data.text
                    return g.a.createElement(
                      A.a,
                      { style: we.navigationLink },
                      g.a.createElement(F.b, { style: we.content }, b),
                      g.a.createElement(he.a, { style: we.icon }),
                    )
                  case oe.b.NoResult:
                    var y = o.data.text
                    return g.a.createElement(F.b, { style: we.noResult }, y)
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
      })(g.a.Component)
      h()(ye, 'contextType', y.a)
      var we = P.a.create(function (e) {
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
        _e = function (e) {
          return e.isSelected ? g.a.createElement(fe.a, { accessibilityHidden: !0, style: we.checkIcon }) : null
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
        g = n.n(f),
        v = n('mrHL'),
        b = n('yiKp'),
        y = n.n(b),
        w = n('m3Bd'),
        _ = n.n(w),
        C = (n('+KXO'), n('NeAX')),
        E = n('RqPI'),
        x = n('hqKg'),
        k = n('kGix'),
        S = n('O0uF'),
        T = n('G6rE'),
        I = n('rxPX'),
        L = n('0KEI'),
        P = ['featureSwitches'],
        O = Object(x.createSelector)(E.n, C.selectPreferencesFetchStatus, function (e, t) {
          return e ? k.a.LOADED : t
        }),
        D = Object(I.a)()
          .propsFromState(function () {
            return {
              fetchStatus: O,
              loggedInUser: T.e.selectLoggedInUser,
              isActiveCreator: E.l,
              isApprovedCreator: E.m,
              personalizationPreferences: C.selectUserPreferences,
              featureSwitches: S.f,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches,
              n = _()(e, P)
            return y()({ withEditableFSes: Object.keys(t.debug).length > 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: C.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        A = n('v//M'),
        R = n('uD2z'),
        F = n('3XMw'),
        M = n.n(F),
        B = n('KQzH'),
        N = n('yoO3'),
        H = n('cnVF'),
        j = n('K1iM'),
        U = n.n(j),
        z = n('ddV6'),
        W = n.n(z)
      n('tVqn'), n('jwue'), n('+oxZ')
      function V(e) {
        var t = e.results,
          n = e.setting,
          a = e.type,
          r = {
            id: n.id,
            type: 'setting',
            data: { text: n.title, location: { pathname: n.path, openInSameFrame: !0 } },
          }
        'setting' === a
          ? t.push(y()(y()({}, r), {}, { type: 'setting' }))
          : 'setting_group' === a && t.push(y()(y()({}, r), {}, { type: 'setting_group' }))
      }
      var G = n('VY6S'),
        q = n('Grlw'),
        K = n('Es6L'),
        Y = (n('uFXj'), n('3EFP')),
        X = n('woHV'),
        Q = n('tAeL'),
        J = n('MWbm'),
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
            v = e.onSubmit,
            b = e.placeholder,
            y = e.renderEmptyState,
            w = e.renderInSearchField,
            _ = e.rounded,
            C = e.shouldAutoFocus,
            E = e.shouldClearOnSelect,
            x = e.shouldFocusOnClear,
            k = e.shouldRenderEmptyState,
            S = e.source,
            T = e.style,
            I = e.testID,
            L = g.a.useRef(null),
            P = g.a.useRef(null),
            O = g.a.useRef(null),
            D = g.a.useRef(null),
            A = g.a.useState(!1),
            R = W()(A, 2),
            F = R[0],
            M = R[1],
            B = g.a.useState(null),
            N = W()(B, 2),
            H = N[0],
            j = N[1],
            U = g.a.useState(Object(ae.b)()),
            z = W()(U, 2),
            V = z[0],
            G = z[1],
            q = g.a.useState(function () {
              return Object(ae.f)()
            }),
            K = W()(q, 1)[0],
            ne = g.a.useState(''),
            se = W()(ne, 2),
            ue = se[0],
            de = se[1],
            pe = function (e) {
              var t,
                n = Z.a.getCount() > 0
              ;(null != L && null !== (t = L.current) && void 0 !== t && t.contains(e.target)) || n || (F && fe())
            }
          g.a.useEffect(function () {
            return (
              window.document.addEventListener('click', pe, !0),
              function () {
                window.document.removeEventListener('click', pe, !0)
              }
            )
          })
          var me = function () {
              if (null != P && P.current) {
                var e = P.current.getBoundingClientRect().bottom
                e !== H && j(e)
              }
            },
            he = function (e) {
              de(e), null == f || f(e)
            },
            fe = function () {
              M(!1), null == p || p()
            },
            ge = function () {
              var e
              fe(), null == O || null === (e = O.current) || void 0 === e || e.blur()
            },
            ve = function (e, t) {
              var n,
                a,
                r = E ? '' : ue
              ;(M(!1), O.current) &&
                (E && x
                  ? O.current.focus()
                  : (E && (null === (n = O.current) || void 0 === n || n.clear()),
                    null === (a = O.current) || void 0 === a || a.blur()))
              he(r), null == p || p(), null == h || h(e, t)
            },
            be = function () {
              G(Object(ae.b)())
            },
            ye = F || t
          return g.a.createElement(
            J.a,
            { onLayout: me, ref: L, style: [ce.root, T] },
            g.a.createElement(
              $.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(ae.g)(e)) {
                    var a, r
                    if (n === Y.a)
                      return null === (a = D.current) || void 0 === a || a.focusNext(), void e.preventDefault()
                    if (n === Y.b)
                      return null === (r = D.current) || void 0 === r || r.focusPrevious(), void e.preventDefault()
                    if (n === Y.d) return fe(), void e.preventDefault()
                    if (n !== Y.f) {
                      var o
                      if (n === Y.c && null !== (t = D.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = D.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      F || M(!0)
                    } else fe()
                  }
                },
                style: ce.keydownInputListener,
              },
              g.a.createElement(
                X.a,
                {
                  accessibilityLabel: b,
                  accessibilityRole: 'search',
                  onSubmit: function (e) {
                    var t
                    e.preventDefault(),
                      e.stopPropagation(),
                      null == O || null === (t = O.current) || void 0 === t || t.blur(),
                      M(!1),
                      null == p || p(),
                      null == v || v()
                  },
                  style: ce.wrapper,
                },
                g.a.createElement(
                  J.a,
                  { ref: P, style: [ce.inputContainer, i] },
                  ye && u
                    ? g.a.createElement(ee.a, {
                        accessibilityLabel: le,
                        icon: g.a.createElement(re.a, null),
                        onClick: function (e) {
                          null == e || e.stopPropagation(), fe(), null == u || u()
                        },
                        style: ce.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  g.a.createElement(
                    J.a,
                    { onClick: d, style: ce.inputWrapper },
                    g.a.createElement(te.a, {
                      Icon: oe.a,
                      ariaActiveDescendant: V,
                      ariaAutocomplete: 'list',
                      ariaExpanded: ye,
                      ariaLabel: ie,
                      ariaOwns: K,
                      ariaRole: 'combobox',
                      autoComplete: 'off',
                      autoCorrect: !1,
                      autoFocus: C,
                      contentBelow: null == w ? void 0 : w(),
                      focusOnClear: x,
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
                      placeholder: b,
                      ref: O,
                      returnKeyType: 'search',
                      spellCheck: 'false',
                      styleType: _ ? 'pill' : 'selection',
                      testID: I,
                      value: ue,
                      withClearButton: !a && F,
                    }),
                  ),
                ),
                g.a.createElement(
                  J.a,
                  { style: [ce.typeaheadContainer, !_ && ce.topBorder] },
                  ye
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [ce.dropdown, H ? Object(ae.d)(H) : ce.wideModeDropdown])
                            : 'overlap' === o && (e = c ? ce.modalDropdown : [ce.dropdown, ce.wideModeDropdown]),
                          y && k
                            ? y({
                                ariaDescendantId: V,
                                domId: K,
                                onDismiss: ge,
                                onItemFocusChanged: be,
                                ref: D,
                                style: e,
                              })
                            : g.a.createElement(Q.a, {
                                ariaDescendantId: V,
                                domId: K,
                                items: s,
                                onItemClick: ve,
                                onItemFocusChanged: be,
                                ref: D,
                                source: S,
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
        ge = M.a.d94f12b5,
        ve = M.a.b92a21d8,
        be = M.a.c170a564,
        ye = M.a.ba8f6f81,
        we = { component: 'search', element: 'result' }
      function _e(e) {
        var t = e.isSearching,
          n = e.onChange,
          a = e.searchIndex,
          r = Object(pe.a)('settings_revamp_search_bar_enabled'),
          o = Object(de.b)(),
          i = Object(me.f)(),
          l = g.a.useState(''),
          c = W()(l, 2),
          s = c[0],
          u = c[1],
          d = g.a.useState(void 0),
          p = W()(d, 2),
          m = p[0],
          h = p[1],
          f = g.a.useState(!1),
          v = W()(f, 2),
          b = v[0],
          w = v[1],
          _ = g.a.useState([]),
          C = W()(_, 2),
          E = C[0],
          x = C[1],
          k = g.a.useMemo(
            function () {
              return Object(G.a)(function (e) {
                o.scribe(y()(y()({}, we), {}, { action: e ? 'show' : 'empty' }))
              }, 500)
            },
            [o],
          ),
          S = s.toLocaleLowerCase().trim(),
          T = Boolean(S.length)
        g.a.useEffect(
          function () {
            T
              ? (function () {
                  var e,
                    t = [],
                    n = U()(a)
                  try {
                    var r = function () {
                      var n = e.value,
                        a = !1
                      Array.isArray(n.items) &&
                        n.items.forEach(function (e) {
                          Object(q.b)(S, e) &&
                            (a || ((a = !0), V({ results: t, setting: n, type: 'setting_group' })),
                            V({ results: t, setting: e, type: 'setting' }))
                        }),
                        !a && Object(q.b)(S, n) && V({ results: t, setting: n, type: 'setting_group' })
                    }
                    for (n.s(); !(e = n.n()).done; ) r()
                  } catch (o) {
                    n.e(o)
                  } finally {
                    n.f()
                  }
                  x(t), S !== m && (h(S), k(t.length))
                })()
              : x([])
          },
          [S, T, a, m, k],
        )
        var I = g.a.useCallback(
            function () {
              n(!1)
            },
            [n],
          ),
          L = g.a.useCallback(
            function () {
              n(!0)
            },
            [n],
          ),
          P = g.a.useCallback(
            function () {
              s && n(!0)
            },
            [n, s],
          ),
          O = g.a.useMemo(
            function () {
              return Object(G.a)(function (e) {
                n(!0), u(e)
              }, 100)
            },
            [n],
          ),
          D = g.a.useCallback(
            function (e) {
              !b &&
                e.trim().length &&
                (w(!0), o.scribe({ component: 'search', element: 'search_box', action: 'began_typing' })),
                O(e)
            },
            [b, o, O],
          )
        if (!r) return null
        return g.a.createElement(se, {
          alwaysOpen: t,
          dropdownPosition: 'inline',
          inputStyle: Ce.input,
          items: E,
          onBackClicked: Object(K.a)() ? I : void 0,
          onClick: L,
          onFocus: P,
          onItemClick: function (e) {
            if ('setting' === e.type || 'setting_group' === e.type) {
              var t = 'string' == typeof e.data.location ? e.data.location : e.data.location.pathname
              o.scribe(y()(y()({}, we), {}, { action: 'click' })), i.push(t, { backLocation: window.location.pathname })
            }
          },
          onQueryChange: D,
          placeholder: ye,
          renderEmptyState: function (e) {
            var t = e.style
            return T
              ? g.a.createElement(fe.a, { header: ve({ query: s }), message: be, style: t })
              : g.a.createElement(
                  J.a,
                  { style: [t, Ce.emptyState] },
                  g.a.createElement(he.b, { align: 'center', color: 'gray700' }, ge),
                )
          },
          rounded: !0,
          shouldRenderEmptyState: t && (!T || 0 === E.length),
          source: ue.d.SearchBox,
        })
      }
      var Ce = ne.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
          }
        }),
        Ee = n('7FtF'),
        xe = n('iCwC'),
        ke = n('3cwy'),
        Se = 'loggedOutPrivacySection',
        Te = 'accountLink',
        Ie = 'accountAccessLink',
        Le = 'privacyAndSafetyLink',
        Pe = 'notificationsLink',
        Oe = 'accessibilityLink',
        De = 'aboutLink',
        Ae = 'displayLink',
        Re = 'dataLink',
        Fe = n('6vad'),
        Me = n('0yYu'),
        Be = n('v6aA'),
        Ne = n('AS3p'),
        He = M.a.e3719c15,
        je = M.a.cad53943,
        Ue = M.a.bb081ea1,
        ze = M.a.e95b9448,
        We = M.a.eb75875d,
        Ve = M.a.c4881c66,
        Ge = M.a.eafe3287,
        qe = M.a.f458a3b1,
        Ke = M.a.e8f57e07,
        Ye = M.a.b7fde2b8,
        Xe = M.a.ja94f34d,
        Qe = M.a.d0b74a5a,
        Je = M.a.gd4302ec,
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
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  o._renderSearchInput(),
                  e
                    ? null
                    : g.a.createElement(
                        J.a,
                        { accessibilityRole: 'tablist' },
                        g.a.createElement(B.a, { label: Ze, link: '/settings/account', testID: Te }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        g.a.createElement(B.a, {
                          label: $e,
                          link: '/settings/security_and_account_access',
                          testID: Ie,
                        }),
                        g.a.createElement(B.a, { label: je, link: '/settings/privacy_and_safety', testID: Le }),
                        o._renderReportCenter(),
                        g.a.createElement(B.a, { label: We, link: '/settings/notifications', testID: Pe }),
                        g.a.createElement(B.a, {
                          label: et,
                          link: '/settings/accessibility_display_and_languages',
                          testID: Oe,
                        }),
                        g.a.createElement(B.a, { label: tt, link: '/settings/about', testID: De }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              h()(c()(o), '_renderLoggedOut', function () {
                var e = Object(v.b)(H.u, o.context.featureSwitches)
                return g.a.createElement(
                  J.a,
                  { testID: Se },
                  g.a.createElement(Fe.b, { text: qe }),
                  g.a.createElement(B.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Ke,
                    link: '/settings/account/personalization',
                  }),
                  g.a.createElement(B.a, { label: Ye, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? g.a.createElement(B.a, { description: Je, label: Qe, link: '/settings/cookie_preferences' })
                    : null,
                  g.a.createElement(he.b, { style: xe.a.descriptionText }, Xe),
                  o._renderGeneral(),
                )
              }),
              h()(c()(o), '_renderSearchInput', function () {
                var e = o.props.searchIndex,
                  t = o.state.isSearching
                return g.a.createElement(_e, {
                  isSearching: t,
                  onChange: function (e) {
                    o.setState({ isSearching: e })
                  },
                  searchIndex: e,
                })
              }),
              h()(c()(o), '_renderGeneral', function () {
                return g.a.createElement(
                  J.a,
                  null,
                  g.a.createElement(Me.a, null),
                  g.a.createElement(Fe.b, { text: ze }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? g.a.createElement(B.a, { label: Ve, link: '/settings/display', testID: Ae })
                    : null,
                  o._isUserLoggedIn()
                    ? g.a.createElement(B.a, { label: Ge, link: '/settings/data', testID: Re })
                    : null,
                  o._isUserLoggedIn()
                    ? g.a.createElement(B.a, { label: He, link: '/settings/accessibility', testID: Oe })
                    : null,
                  g.a.createElement(B.a, { label: tt, link: '/settings/about', testID: De }),
                )
              }),
              h()(c()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? g.a.createElement(B.a, { label: nt, link: '/settings/feature_switches' })
                  : null
              }),
              h()(c()(o), '_renderMonetization', function () {
                var e = o.context.featureSwitches,
                  t = o.props,
                  n = t.isActiveCreator,
                  a = t.isApprovedCreator,
                  r = e.isTrue('super_follow_web_onboarding_enabled') && a,
                  i = e.isTrue('super_follow_web_edit_perks_enabled') && n
                return r || i ? g.a.createElement(B.a, { label: at, link: '/settings/monetization' }) : null
              }),
              h()(c()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === q.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? g.a.createElement(B.a, { label: rt, link: t }) : null
              }),
              h()(c()(o), '_renderReportCenter', function () {
                return o.context.featureSwitches.isTrue('report_center_mvp_r2_enabled')
                  ? g.a.createElement(B.a, { label: ot, link: '/settings/report-center' })
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
                  return g.a.createElement(
                    N.a,
                    null,
                    g.a.createElement(
                      Ee.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: Ue },
                      this._isUserLoggedIn() || Object(Ne.c)(this.context.featureSwitches) === Ne.a.AcceptAllCookies
                        ? g.a.createElement(A.a, {
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
                  return Object(R.a)(e)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(it, 'contextType', Be.a)
      t.default = D(it)
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('aWyx'),
        i = n('XnpN'),
        l = n('3XMw'),
        c = n.n(l),
        s = n('aI6n'),
        u = n('rHpw'),
        d = n('TIdA'),
        p = n('A91F'),
        m = n('jhWN'),
        h = n('9Xij'),
        f = n('Znyr'),
        g = n('cm6r'),
        v = n('U+bB'),
        b = n('MWbm'),
        y = c.a.fd48249b,
        w = u.a.create(function (e) {
          return {
            circle: { borderRadius: e.borderRadii.infinite, overflow: 'hidden' },
            container: { height: 'auto', width: '100%' },
            itemAccessory: {
              top: -e.spacesPx.space24 + e.spacesPx.space1,
              right: -e.spacesPx.space16 - e.spacesPx.space1,
            },
            userDecoration: {
              fontSize: e.fontSizes.subtext3,
              position: 'absolute',
              backgroundColor: e.colors.gray100,
              marginLeft: e.spaces.space8,
              boxSizing: 'border-box',
              width: e.spaces.space24,
              height: e.spaces.space24,
            },
          }
        }),
        _ = u.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            left: { flex: 1 },
            right: {
              flex: 1,
              marginLeft: e.borderWidths.small,
              marginRight: 'calc(-1 * '.concat(e.borderWidths.small, ')'),
            },
          }
        }),
        C = u.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        E = function (e) {
          var t = e.left,
            n = e.right
          return r.a.createElement(
            b.a,
            { style: _.container },
            r.a.createElement(b.a, { style: _.left }, t),
            r.a.createElement(b.a, { style: _.right }, n),
          )
        },
        x = function (e) {
          var t = e.bottom,
            n = e.top
          return r.a.createElement(
            b.a,
            { style: C.container },
            r.a.createElement(b.a, { style: C.top }, n),
            r.a.createElement(b.a, { style: C.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size
            return r.a.createElement(
              b.a,
              { key: t.id_str, style: w.container },
              r.a.createElement(m.a, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  b.a,
                  { key: e.id_str, style: w.container },
                  r.a.createElement(m.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(h.a, { ratio: 1 }, r.a.createElement(E, { left: n[1], right: n[0] }))
            var a = r.a.createElement(x, { bottom: n[2], top: n[1] }),
              o = n[0]
            return r.a.createElement(E, { left: a, right: o })
          },
          a = e.conversation,
          l = e.link,
          c = e.perspective,
          _ = e.withBadge,
          C = a && a.avatar_image_https,
          k = a
            ? Object(i.a)(a, c).map(function (e) {
                return e.user
              })
            : [],
          S = k.slice(0, 3),
          T =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.a.createElement(d.a, {
                    accessibilityLabel: '',
                    aspectMode: p.a.SQUARE,
                    backgroundColor: u.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(a) ||
            (function (e) {
              return e ? r.a.createElement(v.a, { source: e }) : null
            })(C) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(b.a, { style: w.circle }, n(e))
            })(S),
          I =
            l ||
            (function (e, t) {
              if (e)
                return e.type === o.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === o.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, k),
          L = _ && null != a && a.participants ? a.participants.length - 1 : 0
        return T
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                h.a,
                { ratio: 1 },
                I ? r.a.createElement(g.a, { interactiveStyles: null, link: I, testID: s.a.conversationAvatar }, T) : T,
              ),
              L
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      b.a,
                      { style: w.itemAccessory },
                      r.a.createElement(f.a, {
                        count: t,
                        standalone: !0,
                        style: w.userDecoration,
                        textColor: 'text',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: y,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: L })
                : null,
            )
          : null
      }
    },
    aA1u: function (e, t, n) {
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
        g = n.n(f),
        v = n('t62R'),
        b = n('21zW'),
        y = n('rHpw'),
        w = n('3XMw'),
        _ = n.n(w),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_formatTimestamp', function (e) {
                var t = _.a.jade381b,
                  n = _.a.d725a288,
                  a = new Date(e),
                  r = t(a),
                  o = n(a)
                return ''.concat(o, ' · ').concat(r)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.style
                  return g.a.createElement(
                    v.b,
                    { color: 'gray700', style: e },
                    this._renderTimestampAndMaybePlace(),
                    this._maybeRenderSource(),
                  )
                },
              },
              {
                key: '_renderTimestampAndMaybePlace',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onPlaceClick,
                    a = e.onTimestampClick,
                    r = e.place,
                    o = e.placeLink,
                    i = e.timestamp,
                    l = e.timestampLink,
                    c = this._formatTimestamp(i)
                  return r
                    ? g.a.createElement(
                        _.a.I18NFormatMessage,
                        { $i18n: 'ba64a3b2' },
                        g.a.createElement(
                          v.b,
                          { color: l ? t : void 0, link: l, onClick: a },
                          _.a.e9c24489({ date: c }),
                        ),
                        g.a.createElement(
                          v.b,
                          { color: o ? t : void 0, link: o, onClick: n },
                          _.a.a16de8a4({ place: r }),
                        ),
                      )
                    : g.a.createElement(v.b, { color: l ? t : void 0, link: l, onClick: a }, c)
                },
              },
              {
                key: '_maybeRenderSource',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onSourceClick,
                    a = e.source,
                    r = e.sourceLink
                  return a
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(b.a, null),
                        g.a.createElement(v.b, { color: r ? t : void 0, link: r, onClick: n, style: E.source }, a),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(C, 'defaultProps', { linkColor: 'link' })
      var E = y.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = C
    },
    aI6n: function (e, t, n) {
      'use strict'
      t.a = {
        conversationAvatar: 'DM_Conversation_Avatar',
        newDM: 'NewDM_Button',
        untrustedThumbnail: 'DM_Untrusted_Thumbnail',
      }
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
          return S
        }),
        n.d(t, 'SettingsAboutScreen', function () {
          return T
        })
      n('7x/C'), n('JtPf'), n('tQbP'), n('LW0h'), n('vrRf'), n('hBvt'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('RqPI'),
        i = n('rxPX'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { viewerCountry: o.z }
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
        g = n('6vad'),
        v = n('csss'),
        b = n('RKmr'),
        y = n('0yYu'),
        w = n('t62R'),
        _ = u.a.cedbb01c,
        C = u.a.b4f917d0,
        E = u.a.bdfa2b8c,
        x = u.a.j0783ebe,
        k = u.a.c0398892
      function S(e) {
        var t = []
        return (
          t.push(r.a.createElement(g.b, { text: k })),
          t.push(
            r.a.createElement(v.a, {
              label: k,
              link: { external: !0, pathname: 'https://twitter.com/i/release_notes' },
            }),
          ),
          r.a.Children.toArray(t)
        )
      }
      function T(e) {
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
            { location: t, screenType: 'primaryDetail', title: E },
            r.a.createElement(
              f.a,
              { testID: h },
              r.a.createElement(b.a, { description: x }),
              r.a.createElement(S, null),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: _ }),
              o.map(function (e, t) {
                return r.a.createElement(v.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
              l.map(function (e) {
                return r.a.createElement(
                  w.b,
                  { color: 'gray700', key: e.text, size: 'subtext2', style: [m.a.infoText, m.a.bottomBorder] },
                  e.text,
                )
              }),
              r.a.createElement(y.a, null),
              r.a.createElement(g.b, { text: C }),
              i.map(function (e, t) {
                return r.a.createElement(v.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
            ),
          ),
        )
      }
      t.default = l(T)
    },
    dCqJ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('cm6r'),
        i = n('VrFO'),
        l = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        d = n.n(u),
        p = n('5Yy7'),
        m = n.n(p),
        h = n('2VqO'),
        f = n.n(h),
        g = n('KEM+'),
        v = n.n(g),
        b = (n('2G9S'), n('t62R')),
        y = n('rHpw'),
        w = n('3XMw'),
        _ = n.n(w),
        C = _.a.d7e50a66,
        E = 'INDIRECT',
        x = 'NO_SPONSORSHIP',
        k = 'ISSUE',
        S = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(d()(e), '_renderDisclaimerDetails', function () {
                var t = e.props,
                  n = t.onPoliticalSponsorWebsiteClick,
                  a = t.promotedContent
                if (!a.adMetadataContainer) return null
                var o = a.adMetadataContainer,
                  i = o.disclaimerType,
                  l = o.sponsorshipCandidate,
                  c = o.sponsorshipOrganization,
                  s = o.sponsorshipOrganizationWebsite,
                  u = o.sponsorshipType,
                  d =
                    s && i !== k
                      ? r.a.createElement(b.b, { link: s, onClick: n })
                      : r.a.createElement(b.b, { color: 'gray700', size: 'subtext2' })
                if (!c) return null
                var p = r.a.createElement(
                    _.a.I18NFormatMessage,
                    { $i18n: 'e1e348dc' },
                    r.a.cloneElement(d, null, _.a.b1e5bc63({ sponsorshipOrganization: c })),
                  ),
                  m = r.a.createElement(
                    _.a.I18NFormatMessage,
                    { $i18n: 'c7dea0d0' },
                    r.a.cloneElement(d, null, _.a.a84fcff2({ sponsorshipOrganization: c })),
                  ),
                  h = l
                    ? r.a.createElement(
                        _.a.I18NFormatMessage,
                        { $i18n: 'b5c2371a', sponsorshipCandidate: l },
                        r.a.cloneElement(d, null, _.a.fd985325({ sponsorshipOrganization: c })),
                      )
                    : null
                return r.a.createElement(
                  b.b,
                  { color: 'gray700', size: 'subtext2' },
                  i === k ? p : u === x ? m : u === E ? h : p,
                )
              }),
              v()(d()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  n = t.onPromotedDisclaimerLearnMoreClick,
                  a = t.promotedContent,
                  o = t.tweet,
                  i = (a.adMetadataContainer || {}).disclaimerType === k ? 'issue_ad' : 'political_ad',
                  l = 'http://ads.twitter.com/transparency/ads/'.concat(o.user.screen_name, '/tweet/').concat(o.id_str)
                return r.a.createElement(b.b, { link: l, onClick: n(i), size: 'subtext2', style: T.learnMore }, C)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this._renderDisclaimerDetails(),
                    this._renderLearnMoreLink(),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        T = y.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        I = n('e5HP'),
        L = n('Z6aJ'),
        P = n('MWbm')
      t.a = function (e) {
        var t = e.onPoliticalSponsorWebsiteClick,
          n = e.onPromotedDisclaimerLearnMoreClick,
          a = e.onPromotedIndicatorClick,
          i = e.promotedContent,
          l = e.promotedContentAdvertiser,
          c = e.style,
          s = e.testID,
          u = e.tweet,
          d = e.withCircleIcon,
          p = L.a.isPromoted(i),
          m =
            !!i &&
            ((i.adMetadataContainer &&
              ('POLITICAL' === i.adMetadataContainer.disclaimerType ||
                'ISSUE' === i.adMetadataContainer.disclaimerType)) ||
              'political' === L.a.getDisclosureType(i) ||
              'issue' === L.a.getDisclosureType(i))
        return p
          ? r.a.createElement(
              P.a,
              { style: c, testID: s },
              l && i
                ? r.a.createElement(
                    o.a,
                    {
                      interactiveStyles: null,
                      link: {
                        pathname: 'https://twitter.com/'.concat(l.screen_name),
                        state: { promotedTweetState: i },
                      },
                      onPress: a,
                    },
                    r.a.createElement(I.a, { promotedContent: i, withCircleIcon: d }),
                  )
                : !!i && r.a.createElement(I.a, { promotedContent: i }),
              m && i
                ? r.a.createElement(S, {
                    onPoliticalSponsorWebsiteClick: t,
                    onPromotedDisclaimerLearnMoreClick: n,
                    promotedContent: i,
                    tweet: u,
                  })
                : null,
            )
          : null
      }
    },
    fBvp: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return D
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
        g = n.n(f),
        v = n('yiKp'),
        b = n.n(v),
        y = (n('ho0z'), n('uFXj'), n('t62R')),
        w = n('IMYl'),
        _ = n('cm6r'),
        C = n('rHpw'),
        E = n('lzTJ'),
        x = n('k/Ka'),
        k = n('MWbm'),
        S = n('r7ya'),
        T = n('I4+6'),
        I = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              h()(c()(e), '_radioRef', g.a.createRef()),
              h()(c()(e), '_handleChange', function (t) {
                var n = e.props,
                  a = n.backgroundName,
                  r = n.isSelected,
                  o = n.onChange
                o && !r && o(a)
              }),
              (e._selectedInteractiveStyles = T.a.generate({
                backgroundColor: C.a.theme.colors.transparent,
                color: C.a.theme.colors.primary,
                withFocusWithinFocusRing: !0,
              })),
              (e._unselectedInteractiveStyles = T.a.generate({
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
                  return g.a.createElement(
                    _.a,
                    { focusable: !1, interactiveStyles: null, style: [L.root, this._getButtonStyles()] },
                    function (t) {
                      return g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(
                          _.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: L.radioOuterCircle,
                          },
                          g.a.createElement(
                            k.a,
                            { style: [L.radioInnerCircle, e._getCircleStyles()] },
                            a ? g.a.createElement(w.a, { style: L.checkMark }) : null,
                          ),
                        ),
                        g.a.createElement(
                          k.a,
                          { accessibilityHidden: !0, style: L.text },
                          g.a.createElement(y.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, r),
                        ),
                        Object(x.a)('input', {
                          accessibilityLabel: n || r,
                          checked: a,
                          name: o,
                          style: L.nativeControl,
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
                  return e === E.b.dark ? S.a : e === E.b.darker ? S.b : S.c
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        L = C.a.create(function (e) {
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
            nativeControl: b()(
              b()({}, C.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        P = I,
        O = 1,
        D = (function (e) {
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
              (e._backgroundPickerName = 'background_picker_'.concat(O)),
              (O += 1),
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
                  return g.a.createElement(
                    k.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: 'row' === r ? A.row : A.column },
                    o.map(function (t) {
                      return g.a.createElement(P, {
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
        })(g.a.Component),
        A = C.a.create(function (e) {
          return { row: { flexDirection: 'row' }, column: { flexDirection: 'column' } }
        })
    },
    gdQ4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
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
        g = n.n(f),
        v = n('tRj+'),
        b = n('3XMw'),
        y = n.n(b),
        w = n('oQhu'),
        _ = n('MWbm'),
        C = n('htQn'),
        E = n('5mJL'),
        x = n('jhWN'),
        k = n('/yvb'),
        S = n('t62R'),
        T = n('rHpw'),
        I = y.a.e3a24e4b,
        L = y.a.i569ff3e,
        P = (function (e) {
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
                '_getMemoizedBehavioralEventContext',
                Object(w.a)(function (e) {
                  return { viewType: e }
                }),
              ),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUrl,
                    n = e.onClick,
                    a = e.style,
                    r = e.to,
                    o = e.userName,
                    i = e.withButton,
                    l = e.withConversationLine,
                    c = t && o,
                    s = i ? 'add_tweet' : 'see_more',
                    u = this._getMemoizedBehavioralEventContext(s)
                  return g.a.createElement(
                    v.a,
                    { behavioralEventContext: u },
                    g.a.createElement(
                      C.a,
                      { link: r, onClick: n, style: [O.root, a] },
                      g.a.createElement(
                        E.a,
                        {
                          avatarCell: c
                            ? g.a.createElement(
                                _.a,
                                { style: [O.avatarColumn, !l && O.avatarColumnWithoutLine] },
                                l ? g.a.createElement(_.a, { style: O.conversationLine }) : null,
                                g.a.createElement(x.a, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: O.conversationConnector,
                          cellStyle: i ? O.buttonContainer : c ? O.labelWithAvatar : O.label,
                        },
                        i
                          ? g.a.createElement(
                              k.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: O.button, type: 'brandOutlined' },
                              I,
                            )
                          : g.a.createElement(S.b, { color: 'link', style: O.enlargeTouchTarget }, L),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      h()(P, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var O = T.a.create(function (e) {
        return {
          root: {
            overflow: 'hidden',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space2,
          },
          avatarColumn: { flexDirection: 'column', flexGrow: 0, alignItems: 'center', paddingBottom: e.spaces.space4 },
          avatarColumnWithoutLine: { paddingTop: e.spaces.space12 },
          conversationConnector: { alignItems: 'center', display: 'flex', position: 'relative' },
          label: { flexGrow: 1, paddingVertical: e.spaces.space4 },
          labelWithAvatar: { flexGrow: 1, justifyContent: 'center' },
          conversationLine: {
            backgroundColor: e.colors.gray200,
            flexGrow: 1,
            flexShrink: 1,
            width: e.componentDimensions.conversationLineWidth,
            marginBottom: e.spaces.space4,
          },
          buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: 'row', flexGrow: 1 },
          button: { marginVertical: e.spaces.space4 },
          enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
        }
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
        g = n('t62R'),
        v = n('0yYu'),
        b = n('6vad'),
        y = n('rHpw'),
        w = l.a.c4881c66,
        _ = l.a.a5ce82a4,
        C = l.a.ce494bb3,
        E = l.a.c783d45e,
        x = l.a.h306a357,
        k = function (e) {
          var t = e.location
          return r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: w },
              r.a.createElement(g.b, { color: 'gray700', size: 'subtext2', style: S.aboutText, testID: u }, _),
              r.a.createElement(h.a, null),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: C }),
              r.a.createElement(d.a, null),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: E }),
              r.a.createElement(f.a, { style: S.colorPicker }, r.a.createElement(m.a, null)),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: x }),
              r.a.createElement(f.a, { style: S.backgroundPicker }, r.a.createElement(p.a, null)),
            ),
          )
        },
        S = y.a.create(function (e) {
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
        g = n.n(f),
        v = n('rxPX'),
        b = n('z2Pn'),
        y = Object(v.a)()
          .propsFromState(function () {
            return { themeFocus: b.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: b.k }
          }),
        w = n('MWbm'),
        _ = n('3EFP'),
        C = y(
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
                  t.key === _.d || t.key === _.e ? a('') : a(r)
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
                    return g.a.createElement(
                      w.a,
                      { onKeyDown: this._handleKeyDown, onMouseDown: this._handleMouseDown },
                      t(a),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.Component),
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
          return m
        }),
        n.d(t, 'a', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return v
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        l =
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
        c = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n,
          a = c.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? i()(i()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(c.b.WordEnd),
          o = r >= 0 ? n.slice(r) : '',
          i = a.search(c.b.WordBoundary),
          l = o + a.slice(0, i)
        return l.trim() ? { start: r, end: e + i, word: l } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
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
      var f = Object(l.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('ho0z'), n('z84I'), n('LW0h'), n('7x/C'), n('Xrkv')),
        i = n('aWyx'),
        l = n('XnpN'),
        c = n('3XMw'),
        s = n.n(c),
        u = s.a.b5b7fb93,
        d = s.a.g755fcde,
        p = s.a.f6b1ff81
      t.a = function (e, t, n) {
        var a = e.type,
          r = e.name,
          o = e.participants,
          c = void 0 === o ? {} : o
        if (a === i.a.GROUP && r) return r
        if (c.length) {
          if (a === i.a.GROUP && n) return u
          var s = Object(l.a)(e, t).map(function (e) {
            return e.user
          })
          return m(s, t, a)
        }
      }
      var m = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a.GROUP,
          a = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (a.length) {
          case 0:
            return d
          case 1:
            var l = r()(a, 1),
              c = l[0]
            return n === i.a.GROUP ? p({ name: c }) : c
          default:
            var s = !0
            return Object(o.a)(a, s)
        }
      }
    },
    qbku: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        l = n('m3Bd'),
        c = n.n(l),
        s = (n('hBvt'), n('ERkP')),
        u = n.n(s),
        d = n('rxPX'),
        p = Object(d.a)().withAnalytics({ element: 'social_proof' }),
        m = n('aTAq'),
        h = n('Nqmc'),
        f = n('x5Pi'),
        g = ['analytics', 'link'],
        v = p(function (e) {
          var t = u.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var n = e.analytics,
            a = e.link,
            o = c()(e, g),
            l =
              a && !Object(m.a)(a)
                ? i()(
                    i()({}, a),
                    {},
                    {
                      state: i()(
                        i()({}, a.state),
                        {},
                        {
                          referringScribeNamespace: i()(i()({}, n.contextualScribeNamespace), {}, { action: 'click' }),
                        },
                      ),
                    },
                  )
                : a
          return u.a.createElement(
            h.a,
            r()({}, o, {
              link: l,
              onClick: function () {
                var t = e.analytics,
                  n = e.onClick
                t.scribeAction('click'), n && n()
              },
            }),
          )
        })
      t.a = v
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
    sUoZ: function (e, t, n) {
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
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
        g = n.n(f),
        v = n('NeAX'),
        b = n('P1r1'),
        y = n('hqKg'),
        w = n('uD2z'),
        _ = n('li/m'),
        C = n('G6rE'),
        E = n('0KEI'),
        x = n('oEGd'),
        k = Object(y.createSelector)(
          v.selectPreferencesFetchStatus,
          v.selectUserPreferences,
          b.g,
          _.d,
          function (e, t, n, a) {
            return { fetchStatus: e, personalizationString: Object(w.a)(t), settings: n, hasCommunityMemberships: a }
          },
        ),
        S = {
          createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: v.fetchPreferencesIfNeeded,
          patchUser: C.e.patchUser,
          updateSettings: b.M,
        },
        T = Object(x.f)(k, S),
        I = n('v//M'),
        L = n('3XMw'),
        P = n.n(L),
        O = n('yoO3'),
        D = n('7FtF'),
        A = 'privacyAndSafetyScreen',
        R = n('MWbm'),
        F = n('Irs7'),
        M = n('v6aA'),
        B = n('6vad'),
        N = n('e0ey'),
        H = n('csss'),
        j = n('0yYu'),
        U = n('eb3s'),
        z = P.a.cad53943,
        W = P.a.bab1f8b0,
        V = P.a.f5e59e90,
        G = P.a.i0310b4e,
        q = { headline: P.a.j8bf07ab, text: P.a.ca8034b3, confirmButtonLabel: P.a.c5d4192a },
        K = { headline: P.a.gea6cc19, text: P.a.j7fc0afc, confirmButtonLabel: P.a.f527b322 },
        Y = P.a.jabb9c9a,
        X = P.a.f56d108e,
        Q = { all: P.a.d165c992, following: P.a.ea339390, none: P.a.e3a761ee },
        J = P.a.d4986f85,
        Z = P.a.h6ce12ed,
        $ = P.a.ebcb68ae,
        ee = P.a.afdf29b8,
        te = P.a.e1929815,
        ne = P.a.d9172541,
        ae = P.a.e84e1c41,
        re = P.a.hefdc08f,
        oe = P.a.b608c1a0,
        ie = P.a.j2c3033a,
        le = P.a.fd4d9068,
        ce = P.a.fd4d9068,
        se = P.a.hfb77cf5,
        ue = P.a.fc1d217b,
        de = P.a.acdcc101,
        pe = P.a.hfc86556,
        me = P.a.a5f32aa2,
        he = P.a.eb75875d,
        fe = P.a.aea62567,
        ge = P.a.e8f57e07,
        ve = P.a.e8f57e07,
        be = P.a.b59540c2,
        ye = { all: P.a.bd34d8f8, following: P.a.d22dad9e, none: P.a.ad41e8b3 },
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
                  r = Q[a.allow_media_tagging],
                  o = ye[a.allow_contributor_request]
                return g.a.createElement(
                  R.a,
                  null,
                  g.a.createElement(B.b, { text: W }),
                  g.a.createElement(N.a, {
                    checked: a.protected,
                    helpText: G,
                    label: V,
                    learnMoreLink: 'https://support.twitter.com/articles/14016',
                    name: 'protected',
                    onChange: e._handleProtectedChanged,
                  }),
                  g.a.createElement(H.a, { label: Y, link: '/settings/location' }),
                  g.a.createElement(H.a, { description: r, label: X, link: '/settings/tagging' }),
                  g.a.createElement(j.a, null),
                  g.a.createElement(B.b, { text: J }),
                  g.a.createElement(N.a, {
                    checked: 'all' === a.allow_dms_from,
                    helpText: $,
                    label: Z,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receive',
                    name: 'allow_dms_from',
                    onChange: e._handleDMFromChanged,
                  }),
                  g.a.createElement(N.a, {
                    checked: 'enabled' === a.dm_quality_filter,
                    helpText: te,
                    label: ee,
                    learnMoreLink: 'https://support.twitter.com/articles/14606',
                    name: 'dm_quality_filter',
                    onChange: e._handleDMQualityFilterChanged,
                  }),
                  g.a.createElement(N.a, {
                    checked: 'all_enabled' === a.dm_receipt_setting,
                    helpText: ae,
                    label: ne,
                    learnMoreLink: 'https://support.twitter.com/articles/14606#receipts',
                    name: 'dm_receipt_setting',
                    onChange: e._handleDMReceiptChanged,
                  }),
                  e.showPeriscopeAuthOption &&
                    g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(j.a, null),
                      g.a.createElement(B.b, { text: re }),
                      g.a.createElement(N.a, {
                        checked: a.allow_authenticated_periscope_requests,
                        helpText: ie,
                        label: oe,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  g.a.createElement(j.a, null),
                  g.a.createElement(B.b, { text: le }),
                  g.a.createElement(H.a, { label: ce, link: '/settings/contacts' }),
                  g.a.createElement(j.a, null),
                  g.a.createElement(B.b, { text: se }),
                  g.a.createElement(N.a, {
                    checked: a.display_sensitive_media,
                    label: ue,
                    name: 'display_sensitive_media',
                    onChange: e._handleItemChanged,
                  }),
                  g.a.createElement(N.a, {
                    checked: a.nsfw_user,
                    disabled: a.nsfw_admin,
                    label: de,
                    name: 'nsfw_user',
                    onChange: e._handleItemChanged,
                  }),
                  g.a.createElement(H.a, { label: pe, link: '/settings/mute' }),
                  g.a.createElement(H.a, { label: me, link: '/settings/blocked/all' }),
                  g.a.createElement(H.a, { label: he, link: '/settings/notifications' }),
                  g.a.createElement(H.a, { label: fe, link: '/settings/search' }),
                  g.a.createElement(j.a, null),
                  g.a.createElement(B.b, { text: ve }),
                  g.a.createElement(H.a, { description: n, label: ge, link: '/settings/account/personalization' }),
                  g.a.createElement(j.a, null),
                  g.a.createElement(B.b, { key: 'header', text: be }),
                  g.a.createElement(H.a, { description: o, key: 'pivot', label: be, link: '/settings/teams' }),
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
                    r = n ? K : q
                  return g.a.createElement(
                    R.a,
                    { testID: A },
                    g.a.createElement(
                      D.a,
                      { location: a, screenType: 'primaryDetail', title: z },
                      g.a.createElement(
                        O.a,
                        null,
                        g.a.createElement(I.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                        this.state.showProtectedConfirmation
                          ? g.a.createElement(U.a, {
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
        })(g.a.Component)
      h()(we, 'contextType', M.a)
      t.default = Object(F.a)(T(we), { page: 'settings', section: 'safety' })
    },
    tAeL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return B
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
        g = n.n(f),
        v = n('+Kfv'),
        b = n('0yYu'),
        y = n('7nmT'),
        w = n.n(y),
        _ = n('ddV6'),
        C = n.n(_),
        E = n('3XMw'),
        x = n.n(E),
        k = n('kIAd'),
        S = n('JYMr'),
        T = n('rHpw'),
        I = x.a.f2b3fe06,
        L = T.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        P = function (e) {
          var t = e.isLoading,
            n = g.a.useState(!1),
            a = C()(n, 2),
            r = a[0],
            o = a[1]
          return (
            g.a.useEffect(
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
            g.a.createElement(S.a, { ariaValueText: r ? I : '', indeterminate: r, style: !r && L.hidden })
          )
        },
        O = n('ZcYN'),
        D = n('MWbm'),
        A = n('oQhu'),
        R = n('w6IS'),
        F = n('MXDK'),
        M = { viewType: 'typeahead_dropdown' },
        B = (function (e) {
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
                  (Object(F.c)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
              }),
              h()(c()(o), '_resetScroll', function () {
                var e = o._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              h()(
                c()(o),
                '_getFlattenedItems',
                Object(A.a)(function (e) {
                  return Object(R.a)(e)
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
                    ? g.a.createElement(
                        v.a,
                        { behavioralEventContext: M },
                        g.a.createElement(
                          D.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: s },
                          o ? o() : null,
                          g.a.createElement(P, { isLoading: !!a }),
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
                  return g.a.createElement(
                    g.a.Fragment,
                    { key: 'typeaheadGroup-'.concat(t) },
                    o && n ? g.a.createElement(b.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                    e.map(function (e, n) {
                      return r._renderTypeaheadItem(e, t + n)
                    }),
                    o && a ? g.a.createElement(b.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
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
                    v = r && r(e, e.data)
                  return g.a.createElement(O.b, {
                    disabledMessage: v,
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
                    var e = Object(F.a)(w.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
            ]),
            n
          )
        })(g.a.Component)
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
        g = n.n(f),
        v = n('1Pcy'),
        b = n.n(v),
        y = (n('2G9S'), n('ho0z'), n('I4+6')),
        w = n('cm6r'),
        _ = n('rHpw'),
        C = n('k/Ka'),
        E = n('MWbm'),
        x = n('x0mb'),
        k = n('IMYl'),
        S = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(b()(e), '_radioRef', h.a.createRef()),
              p()(b()(e), '_handleChange', function () {
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
                    i = _.a.theme.colors[n],
                    l = y.a.generate({
                      backgroundColor: _.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return h.a.createElement(
                    E.a,
                    { style: [T.container, o] },
                    h.a.createElement(
                      w.a,
                      { accessibilityRole: 'label', interactiveStyles: l, style: [T.choice, T.choiceContainer] },
                      h.a.createElement(x.a, { style: [T.choice, { color: i }] }),
                      Object(C.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: a,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: T.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    a &&
                      h.a.createElement(
                        E.a,
                        { style: [T.choice, T.checkMarkContainer] },
                        h.a.createElement(k.a, { style: [T.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        T = _.a.create(function (e) {
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
            nativeControl: g()(
              g()({}, _.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        I = S,
        L = 1,
        P = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(L, '_LABEL')), (L += 1), e
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
                    s = [O.root, c && O.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return h.a.createElement(
                    E.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return h.a.createElement(I, {
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
      p()(P, 'defaultProps', { layout: 'one-row' })
      var O = _.a.create(function (e) {
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
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        v = n('HPNB'),
        b = n('P1r1'),
        y = n('rxPX'),
        w = Object(y.a)()
          .propsFromActions(function () {
            return { updateSettings: b.M }
          })
          .withAnalytics(),
        _ = n('3XMw'),
        C = n.n(_),
        E = n('huBF'),
        x = n('lzTJ'),
        k = n('rHpw'),
        S = n('cHvH'),
        T = n('uI9t'),
        I = x.f.ThemePrimaryColorNames,
        L = C.a.aefc5b20,
        P = [
          { accessibilityLabel: C.a.a52d0fdd, colorName: I.blue500 },
          { accessibilityLabel: C.a.d818cdd5, colorName: I.yellow500 },
          { accessibilityLabel: C.a.fee1cd64, colorName: I.magenta500 },
          { accessibilityLabel: C.a.cbed7fb2, colorName: I.purple500 },
          { accessibilityLabel: C.a.g697ec02, colorName: I.orange500 },
          { accessibilityLabel: C.a.a7c22049, colorName: I.green500 },
        ],
        O = w(
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
                    r({ themeColor: I[t] }),
                    k.a.setPrimaryColor(I[t])
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
                    return g.a.createElement(S.a, null, function (t) {
                      var n = t.windowWidth
                      return g.a.createElement(E.a, { themeItem: 'color' }, function (t) {
                        return g.a.createElement(T.a, {
                          accessibilityLabel: L,
                          autoFocus: t,
                          layout: v.a.shouldRenderAsModal(n) ? 'one-row' : 'two-rows',
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
          })(g.a.Component),
        )
      t.a = O
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
