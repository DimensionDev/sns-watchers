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
        m = n.n(p),
        f = n('KEM+'),
        h = n.n(f),
        b = (n('+KXO'), n('uFXj'), n('2G9S'), n('vrRf'), n('ERkP')),
        g = n.n(b),
        y = n('P1r1'),
        v = n('RqPI'),
        w = n('rxPX'),
        _ = Object(w.a)()
          .propsFromState(function () {
            return { language: v.p, scale: y.y }
          })
          .propsFromActions(function () {
            return { updateSettings: y.M }
          })
          .withAnalytics(),
        E = n('3XMw'),
        C = n.n(E),
        S = n('huBF'),
        x = n('MWbm'),
        k = n('lzTJ'),
        I = n('rHpw'),
        O = n('t62R'),
        T = n('9RkS'),
        D = k.f.ThemeScaleNames,
        P = Object.keys(D),
        L = P.length - 1,
        A = C.a.d8680056,
        F = C.a.eed02405,
        R = C.a.j59f0b93,
        M = C.a.b81aaad8,
        N = C.a.c704488f,
        B =
          ((a = {}),
          h()(a, D.xSmall, A),
          h()(a, D.small, F),
          h()(a, D.normal, R),
          h()(a, D.large, M),
          h()(a, D.xLarge, N),
          a),
        j = [A, F, R, M, N],
        z = C.a.e46dffa0,
        H = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(s()(e), '_handleSliderChanged', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.updateSettings,
                  o = P[t]
                a.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  I.a.setScale(D[o])
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
                      x.a,
                      { style: V.sliderContainer },
                      g.a.createElement(O.b, { size: 'subtext2' }, 'Aa'),
                      g.a.createElement(
                        x.a,
                        { style: V.slider },
                        g.a.createElement(T.a, {
                          accessibilityLabel: z,
                          accessibilityLabelValueText: B[I.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: j,
                          max: L,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: P.indexOf(I.a.theme.scale),
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
        U = _(H)
      t.a = U
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
        c = n('rHpw'),
        l = c.a.create(function (e) {
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
      var f = c.a.create(function (e) {
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
          h = e.rightControl,
          b = e.style,
          g = e.subtext,
          y = e.testID,
          v = e.text,
          w = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(i.a, { style: l.icon })
              default:
                return null
            }
          })(t),
          _ = g ? null : f.withSubtext,
          E = u.a.generate({
            backgroundColor: c.a.theme.colors.gray0,
            color: c.a.theme.colors.cellBackground,
            customFocusBackgroundColor: c.a.theme.colors.gray0,
            customHoverBackgroundColor: c.a.theme.colors.gray0,
            customPressedBackgroundColor: c.a.theme.colors.gray0,
          })
        return r.a.createElement(
          d.a,
          {
            interactiveStyles: n ? E : null,
            link: null == n ? void 0 : n.url,
            nativeID: a,
            style: [f.root, b],
            testID: y,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: f.mainContent },
            r.a.createElement(p.a, { style: f.icon }, w),
            r.a.createElement(
              o.b,
              { numberOfLines: 3, size: 'headline1', style: _, weight: 'heavy', withHashflags: !0 },
              v,
            ),
            r.a.createElement(
              p.a,
              { style: f.rightControlGroup },
              n ? r.a.createElement(p.a, { style: _ }, r.a.createElement(s.a, { style: f.iconArrow })) : null,
              h ? r.a.createElement(p.a, null, h) : null,
            ),
          ),
          g
            ? r.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: f.subtext, withHashflags: !0 },
                g,
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
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        b = n.n(h),
        g = n('P1r1'),
        y = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        _ = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: g.n, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: g.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        E = n('v//M'),
        C = n('3XMw'),
        S = n.n(C),
        x = n('M2mT'),
        k = 'settingsDetailSave',
        I = n('mw9i'),
        O = n('0yYu'),
        T = n('/yvb'),
        D = n('rHpw'),
        P = S.a.i2209530,
        L = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return b.a.createElement(E.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              f()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  c = t.withMarginBottom
                return b.a.createElement(
                  I.a,
                  { style: [A.contentRoot, c && A.withMarginBottom] },
                  n,
                  a
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(O.a, null),
                        b.a.createElement(
                          I.a,
                          { style: A.buttonContainer },
                          b.a.createElement(T.a, { disabled: r, onPress: a, style: A.button, testID: k, type: i }, o),
                        ),
                      )
                    : null,
                )
              }),
              f()(l()(e), '_handleFetch', function () {
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
                    x.a,
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
      f()(L, 'defaultProps', { submitLabel: P, submitType: 'brandFilled', withMarginBottom: !0 })
      var A = D.a.create(function (e) {
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
      t.a = _(L)
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ezhf')),
        b = n('ERkP'),
        g = n.n(b),
        y = n('HPNB'),
        v = n('v6aA'),
        w = n('P1r1'),
        _ = n('rxPX'),
        E = Object(_.a)()
          .propsFromActions(function () {
            return { updateSettings: w.M }
          })
          .withAnalytics(),
        C = n('3XMw'),
        S = n.n(C),
        x = n('huBF'),
        k = n('lzTJ'),
        I = n('rHpw'),
        O = n('cHvH'),
        T = n('fBvp'),
        D = k.f.ThemePaletteNames,
        P = S.a.ce8a8115,
        L = [
          { label: S.a.j59f0b93, accessibilityLabel: S.a.d3d48f39, backgroundName: D.light },
          { label: S.a.i76f67ed, backgroundName: D.dark },
          { label: S.a.c8f85960, backgroundName: D.darker },
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
              f()(l()(e), '_handleBackgroundChange', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.updateSettings
                a.scribe({ component: 'background_picker', element: 'option', action: t })
                var o = D[t]
                I.a.setPalette(o), r({ themeBackground: o }), h.c(t, e.context.featureSwitches)
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
                    return g.a.createElement(x.a, { themeItem: 'background' }, function (t) {
                      return g.a.createElement(T.a, {
                        accessibilityLabel: P,
                        autoFocus: t,
                        layout: y.a.shouldRenderAsModal(n) ? 'row' : 'column',
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
        })(g.a.Component)
      f()(A, 'contextType', v.a)
      var F = E(A)
      t.a = F
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
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        b = n.n(h),
        g = (n('KqXw'), n('MvUL'), n('ERkP')),
        y = n.n(g),
        v = n('FPOR'),
        w = n('zh9S'),
        _ = n('hqKg'),
        E = n('0KEI'),
        C = n('oEGd'),
        S = n('H9MA'),
        x = Object(_.createSelector)(S.f, S.c, function (e, t) {
          return { videoAutoplay: e, dataSaverMode: t }
        }),
        k = {
          createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
            'DATA_USAGE_SETTINGS_SCREEN',
          ),
          googleAnalyticsPageView: w.googleAnalyticsPageView,
          scribeAction: w.scribeAction,
          scribePageImpression: w.scribePageImpression,
          updateVideoAutoplay: S.i,
        },
        I = Object(C.f)(x, k),
        O = n('45mF'),
        T = n('3XMw'),
        D = n.n(T),
        P = n('7FtF'),
        L = n('3cwy'),
        A = n('MWbm'),
        F = n('3JAx'),
        R = n('t62R'),
        M = n('6v1f'),
        N = D.a.a776eed7,
        B = D.a.ede134f2,
        j = D.a.i859a9d3,
        z = { page: 'settings', section: 'autoplay' },
        H = function (e) {
          return { value: e, label: v.a[e] }
        },
        V = (function (e) {
          p()(n, e)
          var t = f()(n)
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
                i(r()(r()({}, z), {}, { element: 'videoAutoplay', action: t.toLowerCase() })),
                  c(M.b[t]).catch(a(r()(r()({}, Object(O.a)()), {}, { showToast: !0 })))
              }),
              (o._options = []),
              o._options.push(H(M.b.Always)),
              M.c && o._options.push(H(M.b.WiFiOnly)),
              o._options.push(H(M.b.Off)),
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
                  ;(0, e.scribePageImpression)(z),
                    n(z),
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
                    P.a,
                    { location: t, title: N },
                    y.a.createElement(
                      A.a,
                      null,
                      y.a.createElement(F.a, {
                        description: y.a.createElement(
                          y.a.Fragment,
                          null,
                          ''.concat(B, ' '),
                          y.a.createElement(R.b, { link: 'https://help.twitter.com/using-twitter/twitter-videos' }, j),
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
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return b
      }),
        n.d(t, 'a', function () {
          return g
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('z84I'), n('Blm6'), n('lTEL'), n('7x/C'), n('kYxP'), n('LW0h'), n('lnti')),
        l = n('aWyx'),
        s = n('Yatk'),
        u = ['users'],
        d = ['conversation_id', 'participants'],
        p = ['conversation_id', 'participants', 'social_proof'],
        m = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        f = function () {
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
      function h(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var b = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = e.conversation_id,
            o = e.participants,
            c = i()(e, d)
          return r()(
            r()({ conversation_id: a }, c),
            {},
            { entries: t.entryIdsByConversationId[a] || [], participants: f(o, n) },
          )
        },
        g = function (e, t, n) {
          var a = e.conversation_id,
            o = e.participants,
            d = e.social_proof,
            m = i()(e, p),
            b = r()(
              r()({ conversation_id: a }, m),
              {},
              { entries: h(a, t), participants: f(o, n), social_proof: void 0 },
            )
          return (
            d &&
              (b.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === l.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      a = i()(t, u)
                    return r()(
                      r()({}, a),
                      {},
                      {
                        users: Object(c.a)(
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
            b
          )
        }
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        b = n.n(h),
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
        _ = n('kGix'),
        E = n('v//M'),
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
              f()(l()(e), 'state', { verificationRequired: !1 }),
              f()(l()(e), '_handleFetch', function () {
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
                      f()(t, g.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      f()(t, g.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      f()(t, 'showToast', !1),
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
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    r
                      ? b.a.createElement(C.a, { to: '/i/flow/verify_account_ownership' })
                      : b.a.createElement(E.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        x = w.forwardRef(S)
      t.a = x
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
    'IMA+': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        b = n.n(h),
        g = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        y = n('ERkP'),
        v = n.n(y),
        w = n('TIdA'),
        _ = n('t62R'),
        E = n('5mJL'),
        C = n('DNho'),
        S = n('nBUg'),
        x = n('qjak'),
        k = n('ir4X'),
        I = n('htQn'),
        O = n('e5HP'),
        T = n('FBXD'),
        D = n('Nqmc'),
        P = n('rHpw'),
        L = n('oSwX'),
        A = n('1I0O'),
        F = n('pBrB'),
        R = n('jV+4'),
        M = n('MWbm'),
        N = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        B = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        j = w.a.createLayoutCache(),
        z = { viewType: 'user_cell' },
        H = (function (e) {
          p()(n, e)
          var t = f()(n)
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
                  c = t.isFollowedBy,
                  l = t.isProtected,
                  s = t.isVerified,
                  u = t.name,
                  d = t.onScreenNameClick,
                  p = t.promotedContent,
                  m = t.promotedItemType,
                  f = t.screenName,
                  h = t.screenNameSuffix,
                  b = t.translatorType,
                  g = t.withFollowsYou,
                  y = t.withLink,
                  w = v.a.createElement(R.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: l,
                    isVerified: s,
                    name: u,
                    onLinkClick: d,
                    promotedContent: m === N.TWEET ? p : void 0,
                    screenName: f,
                    screenNameSuffix: h,
                    translatorType: b,
                    withFollowsYou: g && c,
                    withHoverCard: !o && !i && y,
                    withLink: !i && y,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? v.a.createElement(
                      M.a,
                      { style: V.disabledMessageContainer },
                      w,
                      v.a.createElement(_.b, { color: 'gray700' }, a),
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
                      return v.a.createElement(D.a, {
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
                    (t && Object(x.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = n.Icon,
                  r = n.text
                return t
                  ? v.a.createElement(
                      M.a,
                      { style: V.userTypeaheadSocialContext },
                      v.a.createElement(M.a, { style: V.userTypeaheadSocialContextIcon }, a),
                      v.a.createElement(
                        _.b,
                        { color: 'gray700', numberOfLines: 1, style: V.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              b()(u()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? v.a.createElement(k.a, { label: t }) : null
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
                Object(T.a)(function (t) {
                  var n = e.props.onCellClick
                  t.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.accessibilityState,
                    a = e.avatarDecoration,
                    o = e.avatarSize,
                    i = e.avatarUri,
                    c = e.bottomControl,
                    l = e.decoration,
                    s = e.displayMode,
                    u = e.isBlocking,
                    d = e.isDisabled,
                    p = e.onAvatarClick,
                    m = e.onCellClick,
                    f = e.onScreenNameClick,
                    h = e.presenceIndicator,
                    b = e.promotedContent,
                    y = e.promotedItemType,
                    w = e.screenName,
                    _ = e.style,
                    S = e.testID,
                    x = e.userId,
                    k = e.withDarkerInteractiveBackground,
                    T = e.withInteractiveStyling,
                    D = e.withLink,
                    P = e.withUsernameCenterAligned,
                    F = D && !u,
                    R = s === B.UserCompact || P,
                    H = s === B.ExperimentalUserTypeahead,
                    U =
                      b && y === N.USER && 'earned' !== (b.disclosure_type && b.disclosure_type.toLowerCase())
                        ? v.a.createElement(O.a, { contentAuthorId: x, promotedContent: b, style: V.promotedIndicator })
                        : null,
                    W = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: j,
                      onClick: p,
                      onHoverCardScreenNameClick: f,
                      promotedContent: b,
                      screenName: w,
                      style: V.avatar,
                      uri: i,
                      withHoverCard: F,
                      withLink: D,
                    },
                    G = v.a.createElement(C.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return h
                        ? v.a.createElement(A.a, r()({}, W, h, { size: t }))
                        : v.a.createElement(L.default, r()({ size: t }, W))
                    }),
                    K = n && 'boolean' == typeof n.checked,
                    Y = void 0 !== m,
                    X = (K ? 'radio' : Y && 'button') || 'listitem',
                    q = this._renderUserName(),
                    Q = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = Q || J || U || c,
                    $ = v.a.createElement(
                      v.a.Fragment,
                      null,
                      Q,
                      J,
                      U,
                      c ? v.a.createElement(M.a, { style: V.bottomControl }, c) : null,
                    )
                  return v.a.createElement(
                    g.a,
                    { behavioralEventContext: z },
                    v.a.createElement(
                      I.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: X,
                        accessibilityState: n,
                        disabled: !!d,
                        focusable: K || Y,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: d ? 'none' : void 0,
                        style: [V.root, _],
                        testID: S,
                        withDarkerInteractiveBackground: k,
                        withInteractiveStyling: null != T ? T : !!m,
                      },
                      H ? null : this._renderSocialContext(),
                      v.a.createElement(
                        E.a,
                        {
                          avatarCell: G,
                          avatarCellStyle: [V.avatarColumn, R && V.bodyColumnCentered],
                          avatarSize: H ? 'xxxLarge' : o,
                          cellStyle: [V.bodyColumn, R && V.bodyColumnCentered],
                        },
                        v.a.createElement(M.a, { style: V.body }, q, l),
                        R ? null : $,
                        H ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && R
                        ? v.a.createElement(
                            E.a,
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
                    ? v.a.createElement(F.a, {
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
      b()(H, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var V = P.a.create(function (e) {
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
      t.a = H
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
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        b = n.n(h),
        g = (n('TJCb'), n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        y = n.n(g),
        v = n('RqPI'),
        w = n('rxPX'),
        _ = Object(w.a)().propsFromState(function () {
          return { language: v.p }
        }),
        E = n('3XMw'),
        C = n.n(E),
        S = n('fs1G'),
        x = n('rHpw'),
        k = n('BLtI'),
        I = n('MWbm'),
        O = 'Twitter',
        T = C.a.ea1c87a5({ mention: O }),
        D = {
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
                text: O,
                indices: [T.indexOf('@'), T.indexOf('@') + O.length + 1],
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
        P = (function (e) {
          p()(n, e)
          var t = f()(n)
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
            return (a._tweet = r()(r()(r()({}, D), l), {}, { lang: c || 'en' })), a
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return y.a.createElement(
                    I.a,
                    { accessibilityHidden: !0, style: e && L.tweetBorder },
                    y.a.createElement(k.b, {
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
                    y.a.createElement(I.a, { style: x.a.absoluteFill }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(P, 'defaultProps', { tweet: D, withTweetBorder: !1 })
      var L = x.a.create(function (e) {
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
        A = _(P)
      t.a = A
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
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        b = n.n(h),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        v = n.n(y),
        w = n('HPNB'),
        _ = n('VAZu'),
        E = n('wiP2'),
        C = n('Es6L'),
        S = n('yiKp'),
        x = n.n(S),
        k = n('rHpw'),
        I = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: x()(x()({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        O = n('MWbm'),
        T = n('yw4N'),
        D = n('TnY3'),
        P = n('cHvH'),
        L = n('3xLC'),
        A = [
          'appBarStyle',
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        F = (function (e) {
          p()(n, e)
          var t = f()(n)
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
                  return v.a.createElement(P.a, null, function (t) {
                    var n = t.windowWidth
                    return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      r()(e, A))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(E.a.Configure, n),
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
                    i = n.appBarStyle,
                    c = n.backLocation,
                    l = n.documentTitle,
                    s = n.headerless,
                    u = n.history,
                    d = n.leftControl,
                    p = n.middleControl,
                    m = n.onBackClick,
                    f = n.rightControl,
                    h = n.screenType,
                    b = n.searchBoxOptions,
                    y = n.secondaryBar,
                    w = n.showSubtitleOnRoot,
                    C = n.showSubtitleOnWideDetail,
                    S = n.subtitle,
                    x = n.title,
                    k = n.titleIconCell,
                    T = n.titleIconCellSize,
                    D = n.withDetailOpen,
                    P = n.withSearchBox,
                    L = n.withTweetButton,
                    A = 'root' === h,
                    F = 'secondaryRoot' === h,
                    R = 'primaryDetail' === h,
                    M = (R && C) || (A && w),
                    N = A || (R && t),
                    B = A ? g.c : R ? g.a : void 0,
                    j = v.a.createElement(
                      O.a,
                      { style: I.appBarContainer },
                      v.a.createElement(_.a, {
                        backLocation: c,
                        fixed: !1,
                        hideBackButton: N,
                        history: u,
                        leftControl: d,
                        middleControl: p,
                        onBackClick: m,
                        rightControl: f,
                        secondaryBar: y,
                        style: i,
                        subtitle: M ? S : void 0,
                        title: x,
                        titleDomId: B,
                        titleIconCell: k,
                        titleIconCellSize: T,
                      }),
                    ),
                    z =
                      A || (F && D)
                        ? null
                        : v.a.createElement(E.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: o,
                            backLocation: c,
                            documentTitle: l,
                            headerless: s,
                            middleControl: p,
                            onBackClick: m,
                            rightControl: f,
                            searchBoxOptions: b,
                            subtitle: S,
                            title: x,
                            withSearchBox: P,
                            withTweetButton: L,
                          })
                  return v.a.createElement(v.a.Fragment, null, z, j)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(F, 'contextType', L.a),
        b()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(D.a)(F)
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
          return _
        }),
        n.d(t, 'd', function () {
          return E
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
        m = 'rweb/'.concat(p),
        f = Object(d.a)(m, 'FETCH_DOWNLOADS'),
        h = Object(d.a)(m, 'CREATE_DOWNLOAD'),
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
            case f.SUCCESS:
              var a = n.payload || [],
                r = a.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return l()(
                l()({}, t),
                {},
                { fetchStatus: s.a.LOADED, downloads: l()(l()({}, t.downloads), {}, { all: a, nonFailed: r }) },
              )
            case f.REQUEST:
              return l()(l()({}, t), {}, { fetchStatus: s.a.LOADING })
            case f.FAILURE:
              return l()(l()({}, t), {}, { error: n.payload, fetchStatus: s.a.FAILED })
            case h.SUCCESS:
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
            case h.FAILURE:
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
        _ = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        E = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(d.b)(e, { request: a.UserData.fetchDownloads })({
              actionTypes: f,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        C = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(d.b)(e, { request: a.UserData.createDataDownload })({
              actionTypes: h,
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n.n(h),
        g = n('zh9S'),
        y = n('NyKK'),
        v = n('rxPX'),
        w = n('0KEI'),
        _ = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: y.g, downloads: y.f }
          })
          .propsFromActions(function () {
            return {
              fetchDownloads: y.d,
              googleAnalyticsPageView: g.googleAnalyticsPageView,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'MARK_DATA_AS_DOWNLOADED',
              ),
              markDataAsDownloaded: y.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'download_data' }),
        E = n('XYIJ'),
        C = (n('6U7i'), n('3XMw')),
        S = n.n(C),
        x = n('aITJ'),
        k = n('MWbm'),
        I = n('/yvb'),
        O = n('eb3s'),
        T = n('855f'),
        D = S.a.cfd2f35d,
        P = S.a.fc5bfd95,
        L = S.a.gee8110d,
        A = S.a.c326f156,
        F = S.a.c9fe9b56,
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
              f()(l()(e), 'state', { showConfirmation: !1 }),
              f()(l()(e), '_shouldDisplayConfirmation', !1),
              f()(l()(e), '_handleCancel', function () {
                e.setState({ showConfirmation: !1 })
              }),
              f()(l()(e), '_handleNeedsConfirmationActionCellPress', function () {
                e.setState({ showConfirmation: !0 })
              }),
              f()(l()(e), '_handleConfirm', function (t) {
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
                  this._shouldDisplayConfirmation = x.b.isMobileOS()
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
                    l = t ? A : L
                  return b.a.createElement(
                    k.a,
                    null,
                    this._shouldDisplayConfirmation
                      ? b.a.createElement(
                          k.a,
                          null,
                          b.a.createElement(
                            I.a,
                            {
                              disabled: t,
                              onPress: this._handleNeedsConfirmationActionCellPress,
                              size: 'small',
                              style: E.a.narrowButton,
                              type: 'brandFilled',
                            },
                            l,
                          ),
                          this.state.showConfirmation && !t
                            ? b.a.createElement(O.a, {
                                cancelButtonLabel: D,
                                confirmButtonLabel: P,
                                confirmButtonLink: { pathname: i || '', external: !0 },
                                headline: F,
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
                            style: E.a.narrowButton,
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
      f()(B, 'getSizeLabel', function (e) {
        var t = Number(e) / 1024
        return t < 1024
          ? M({ size: T.a.getFormattedCount(t) })
          : N({ size: T.a.getFormattedCount(Math.round(t / 1024)) })
      })
      var j = n('7FtF'),
        z = n('ClNT'),
        H = n('t62R'),
        V = n('rHpw'),
        U = n('v6aA'),
        W = S.a.f56af9cc,
        G = S.a.b2ed92c3,
        K = S.a.ce5d2c46,
        Y = S.a.dd9ec81f,
        X = S.a.c7227886,
        q = S.a.a0c3f812,
        Q = S.a.ba2e82a1,
        J = S.a.eea30bb4,
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
              f()(l()(e), '_render', function () {
                var t = e.props.downloads.nonFailed
                return t.length ? b.a.createElement(k.a, null, t.map(e._renderDownloadItems)) : e._renderEmptyState()
              }),
              f()(l()(e), '_renderDownloadItems', function (t, n) {
                return b.a.createElement(
                  k.a,
                  { key: n },
                  t.urls && 'COMPLETED' === t.status
                    ? t.urls.map(e._renderDownloadButtons.bind(l()(e), t))
                    : e._renderUnavailableButton(t),
                )
              }),
              f()(l()(e), '_handleConfirm', function (t) {
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
                    j.a,
                    { location: a, title: W },
                    b.a.createElement(z.a, { fetch: t, fetchStatus: n, renderChildren: this._render }),
                  )
                },
              },
              {
                key: '_renderEmptyState',
                value: function () {
                  return b.a.createElement(
                    k.a,
                    { style: ne.emptyState },
                    b.a.createElement(H.b, { size: 'title4' }, Y),
                    b.a.createElement(H.b, { color: 'gray700', style: ne.emptyStateDescription }, q),
                    b.a.createElement(
                      I.a,
                      {
                        link: '/settings/download_your_data',
                        size: 'small',
                        style: E.a.narrowButton,
                        type: 'brandFilled',
                      },
                      X,
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
                    k.a,
                    { key: ''.concat(r), style: [E.a.narrowButtonRow, E.a.bottomBorder, E.a.labelContainer] },
                    b.a.createElement(
                      k.a,
                      null,
                      b.a.createElement(H.b, { weight: 'bold' }, ee({ currentIndex: r, count: o })),
                      e.generated
                        ? b.a.createElement(H.b, { color: 'gray700' }, J({ date: Q(new Date(e.generated)) }))
                        : null,
                      e.expires
                        ? b.a.createElement(H.b, { color: 'gray700' }, Z({ date: Q(new Date(e.expires)) }))
                        : null,
                      t.size_b
                        ? b.a.createElement(H.b, { color: 'gray700' }, $({ size: B.getSizeLabel(t.size_b) }))
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
                    k.a,
                    { style: [E.a.narrowButtonRow, E.a.bottomBorder, E.a.labelContainer] },
                    b.a.createElement(H.b, { weight: 'bold' }, ee({ currentIndex: 1, count: 1 })),
                    b.a.createElement(
                      I.a,
                      { disabled: !0, size: 'small', style: E.a.narrowButton, type: 'brandFilled' },
                      'INPROGRESS' === e.status ? G : K,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      f()(te, 'contextType', U.a)
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
      t.default = _(te)
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
        c = n('MMRb'),
        l = n('XnpN'),
        s = n('3XMw'),
        u = n.n(s),
        d = n('MWbm'),
        p = n('jV+4'),
        m = n('pjBI'),
        f = n('t62R'),
        h = n('rHpw'),
        b = n('p9G8'),
        g = u.a.cfd94063,
        y = u.a.b93ba92c,
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        w = h.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        _ = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            a = e.perspective
          if (t) {
            if (t.type === c.CONVERSATION_TYPE.ONE_TO_ONE) {
              var o = Object(l.a)(t, a).map(function (e) {
                return e.user
              })
              return r()(o, 1)[0].name
            }
            return Object(b.a)(t, a)
          }
          var i = v(n)
          return Object(b.b)(i, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          o = e.isMessageSearchTitle,
          s = void 0 !== o && o,
          u = e.newConversationParticipants,
          h = e.perspective,
          _ = e.renderTimestamp,
          E = e.textColor,
          C = void 0 === E ? 'text' : E,
          S = e.textSize,
          x = e.titleWeight,
          k = void 0 === x ? 'bold' : x,
          I = e.withParticipantsCount,
          O = void 0 !== I && I,
          T = e.withScreenName,
          D = void 0 === T || T,
          P = e.withVDLRefresh,
          L = void 0 !== P && P
        if (t) {
          var A = _ ? _() : null
          if (t.type === c.CONVERSATION_TYPE.ONE_TO_ONE) {
            var F = Object(l.a)(t, h).map(function (e) {
                return e.user
              }),
              R = r()(F, 1)[0],
              M = i.a.createElement(p.a, {
                color: C,
                isProtected: R.protected,
                isVerified: R.verified,
                name: R.name,
                nameSize: S,
                screenName: R.screen_name,
                weight: k,
                withLink: !1,
                withScreenName: D,
              })
            return (L && !a) || s ? i.a.createElement(m.a, null, M, A) : M
          }
          var N = t.participants.length + (L ? -1 : 0)
          if (a)
            return i.a.createElement(
              m.a,
              { color: C },
              i.a.createElement(
                f.b,
                { color: C, numberOfLines: 1, size: S, style: w.title, weight: k },
                Object(b.a)(t, h, a),
              ),
              L
                ? null
                : i.a.createElement(
                    f.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    g({ peopleCount: N }),
                  ),
            )
          var B = i.a.createElement(
            f.b,
            { color: C, numberOfLines: 1, size: S, weight: k },
            Object(b.a)(t, h, a, L ? 2 : void 0),
          )
          return (L && !a) || s
            ? i.a.createElement(
                d.a,
                { style: w.dmGroup },
                i.a.createElement(m.a, null, B, A),
                O && i.a.createElement(f.b, { color: 'gray700', numberOfLines: 1, size: S }, y({ peopleCount: N })),
              )
            : B
        }
        var j = v(u)
        return i.a.createElement(f.b, { color: C, numberOfLines: 1, size: S, weight: k }, Object(b.b)(j, h))
      }
    },
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return h
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
        m = function (e) {
          return l.a.createElement(e.Icon, { style: f.thumbnail })
        },
        f = s.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function h(e) {
        var t = e.Icon,
          n = i()(e, d)
        return l.a.createElement(
          u.a,
          r()({}, n, { thumbnail: l.a.createElement(m, { Icon: t }), thumbnailSize: 'large' }),
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
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        b = n.n(h),
        g = n('ERkP'),
        y = n.n(g),
        v = n('FPOR'),
        w = n('P1r1'),
        _ = n('rxPX'),
        E = n('0KEI'),
        C = n('H9MA'),
        S = Object(_.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.c, videoAutoplay: C.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_USAGE_SETTINGS_SCREEN',
              ),
              fetchDataUsageSettingsIfNeeded: C.b,
              updateDataSaverMode: C.g,
              updateSettings: w.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'data' }),
        x = n('45mF'),
        k = n('6v1f'),
        I = n('3XMw'),
        O = n.n(I),
        T = n('yoO3'),
        D = n('7FtF'),
        P = n('3cwy'),
        L = 'dataSaverBooleanItem',
        A = n('v6aA'),
        F = n('RKmr'),
        R = n('e0ey'),
        M = n('csss'),
        N = O.a.eafe3287,
        B = O.a.d76fe4fc,
        j = O.a.a57a341b,
        z = O.a.d88102cf,
        H = O.a.a776eed7,
        V = (function (e) {
          p()(n, e)
          var t = f()(n)
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
                  c({ enabled: t }).catch(i(r()(r()({}, Object(x.a)()), {}, { showToast: !0 })))
              }),
              (o._showVideoAutoplaySetting = Object(P.a)()),
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
                      D.a,
                      { location: n, screenType: 'secondaryDetail', title: N },
                      y.a.createElement(F.a, { description: B }),
                      y.a.createElement(R.a, {
                        checked: t,
                        helpText: z,
                        label: j,
                        name: 'dataSaverMode',
                        onChange: this._handleDataSaverChanged,
                        testID: L,
                      }),
                      this._showVideoAutoplaySetting &&
                        y.a.createElement(M.a, {
                          description: v.a[a || k.a],
                          disabled: t,
                          label: H,
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
      b()(V, 'contextType', A.a)
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        b = n.n(h),
        g = n('dDSG'),
        y = n('FPOR'),
        v = n('6/RC'),
        w = n('rxPX'),
        _ = n('0KEI'),
        E = n('2iUg'),
        C = n('P1r1'),
        S = n('H9MA'),
        x = Object(w.a)()
          .propsFromState(function () {
            return {
              altTextNudgeType: E.b,
              autoPollNewTweets: C.h,
              dataSaverMode: S.c,
              reducedMotionEnabled: C.w,
              videoAutoplay: S.f,
              highContrastEnabled: C.p,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'ACCESSIBILITY_SETTINGS_SCREEN',
              ),
              fetchAltTextPromptPreferenceIfNeeded: E.a,
              updateAltTextPromptPreference: E.c,
              updateSettings: C.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'accessibility' }),
        k = n('6v1f'),
        I = n('3XMw'),
        O = n.n(I),
        T = n('yoO3'),
        D = n('7FtF'),
        P = n('OySi'),
        L = n('3cwy'),
        A = 'accessibilityScreen',
        F = n('MWbm'),
        R = n('38/B'),
        M = n('rHpw'),
        N = n('RKmr'),
        B = n('6vad'),
        j = n('e0ey'),
        z = n('0yYu'),
        H = n('csss'),
        V = n('v6aA'),
        U = O.a.e3719c15,
        W = O.a.a5208fad,
        G = O.a.d5b646bd,
        K = O.a.jfe6a3a0,
        Y = O.a.add55c97,
        X = O.a.a6d5b010,
        q = O.a.e8c72272,
        Q = O.a.dba2cdd1,
        J = O.a.d070244e,
        Z = O.a.icfa5e8b,
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
              f()(
                l()(o),
                '_showAltTextPromptPreferenceSetting',
                o.context.featureSwitches.allTrue([
                  'responsive_web_alt_text_nudges_enabled',
                  'responsive_web_alt_text_nudges_settings_enabled',
                ]),
              ),
              f()(
                l()(o),
                '_showAutoPollingSetting',
                o.context.featureSwitches.isTrue('responsive_web_settings_timeline_polling_enabled'),
              ),
              f()(l()(o), '_handleReducedMotionChanged', function (e, t) {
                o._handleSettingChanged(e, t), R.a.setReducedMotion(t)
              }),
              f()(l()(o), '_handleHighContrastChanged', function (e, t) {
                o._handleSettingChanged(e, t), M.a.setHighContrast(t)
              }),
              f()(l()(o), '_handleAltTextNudgeTypeChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateAltTextPromptPreference,
                  c = t ? g.a.prompt : null
                a.scribe({ element: ''.concat(e, '_').concat(c || 'off'), action: 'selected' }),
                  i(c).catch(r({ showToast: !0 }))
              }),
              f()(l()(o), '_handleSettingChanged', function (e, t) {
                var n = o.props,
                  a = n.analytics,
                  r = n.createLocalApiErrorHandler,
                  i = n.updateSettings
                a.scribe({ element: e, action: t ? 'on' : 'off' }), i(f()({}, e, t)).catch(r({ showToast: !0 }))
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
                    c = v.canUseDOM && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches
                  return b.a.createElement(
                    T.a,
                    null,
                    b.a.createElement(
                      D.a,
                      { location: r, screenType: 'secondaryDetail', title: U },
                      b.a.createElement(
                        F.a,
                        { testID: A },
                        b.a.createElement(N.a, { description: W }),
                        b.a.createElement(B.b, { text: G }),
                        b.a.createElement(j.a, {
                          checked: a,
                          helpText: Q,
                          label: q,
                          name: 'highContrastEnabled',
                          onChange: this._handleHighContrastChanged,
                        }),
                      ),
                      this._showVideoAutoplaySetting
                        ? b.a.createElement(
                            F.a,
                            null,
                            b.a.createElement(z.a, null),
                            b.a.createElement(B.b, { text: K }),
                            b.a.createElement(j.a, {
                              checked: o || c,
                              disabled: c,
                              helpText: c ? $ : Z,
                              label: J,
                              name: 'reducedMotionEnabled',
                              onChange: this._handleReducedMotionChanged,
                            }),
                            b.a.createElement(H.a, {
                              description: y.a[i || k.a],
                              disabled: n,
                              label: ne,
                              link: '/settings/autoplay',
                            }),
                          )
                        : null,
                      this._showAltTextPromptPreferenceSetting
                        ? b.a.createElement(
                            F.a,
                            null,
                            b.a.createElement(z.a, null),
                            b.a.createElement(B.b, { text: Y }),
                            b.a.createElement(j.a, {
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
                        F.a,
                        null,
                        b.a.createElement(z.a, null),
                        b.a.createElement(B.b, { text: ae }),
                        b.a.createElement(P.a, { label: re, link: 'https://help.twitter.com/resources/accessibility' }),
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
                        b.a.createElement(z.a, null),
                        b.a.createElement(B.b, { text: X }),
                        b.a.createElement(j.a, {
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
      f()(oe, 'contextType', V.a)
      t.default = x(oe)
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
    XnpN: function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        c = (n('2G9S'), n('tQbP'), n('aWyx')),
        l = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
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
          return Object(l.a)(n.id_str, a.id_str)
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
          l = Object(m.a)(a, function (e) {
            return e.user.id_str === t
          }),
          s = i()(l, 2),
          u = s[0],
          d = s[1]
        return d.length ? (o === c.a.GROUP && 1 === d.length ? [].concat(r()(u), r()(d)) : n ? d.sort(p(n)) : d) : u
      }
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
        return ye
      }),
        n.d(t, 'a', function () {
          return _e
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('ho0z'), n('ERkP')),
        b = n.n(h),
        g = n('+Kfv'),
        y = 'typeaheadResult',
        v = n('v6aA'),
        w = n('AQOc'),
        _ = n('V5Qi'),
        E = n('G6rE'),
        C = n('rxPX'),
        S = function (e, t) {
          return t.conversationId
        },
        x = function (e, t) {
          return Object(_.a)(e, S(0, t))
        },
        k = Object(C.a)()
          .propsFromState(function () {
            return { conversationId: S, conversation: x, users: E.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(w.b)(t.data, void 0, n)), a
          }),
        I = n('aA19'),
        O = n('OhSZ'),
        T = n('5mJL'),
        D = n('rHpw'),
        P = D.a.create(function (e) {
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
        L = k(function (e) {
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
                  avatarCellStyle: P.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: P.bodyColumn,
                  style: [P.root, !a && n && P.disabled],
                },
                b.a.createElement(O.b, {
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
        F = n('LbZ7'),
        R = n('t62R'),
        M = n('9Xij'),
        N = n('TIdA'),
        B = n('A91F'),
        j = (function (e) {
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
                    A.a,
                    { style: H.root },
                    b.a.createElement(
                      F.a,
                      { withGutter: !0 },
                      b.a.createElement(
                        A.a,
                        { style: H.bodyColumn },
                        a ? b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        b.a.createElement(R.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? b.a.createElement(
                            A.a,
                            { style: H.coverContainer },
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
        z = '100px',
        H = D.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: z,
              maxWidth: z,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        V = j,
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
        X = n('EHV7'),
        q = n('Gfoi')
      var Q = D.a.create(function (e) {
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
                      m = s + e.length < i ? e.length : i - s,
                      f = d ? p - 1 : p,
                      h = d ? m - 1 : m
                    r = a
                      ? [f > 0 ? [0, f] : void 0, h !== e.length - 1 ? [h, e.length] : void 0].filter(Boolean)
                      : [[f, h]]
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
                    A.a,
                    { style: Q.context },
                    r && r.types[0] && 'followable_topic' === r.types[0].type
                      ? b.a.createElement(X.a, { style: Q.icon })
                      : null,
                    b.a.createElement(R.b, { color: 'gray700' }, r.display_string || ' '),
                  )
                : null,
            )
          return b.a.createElement(
            A.a,
            { style: [Q.root, n && Q.disabled, i] },
            o
              ? (function (e) {
                  var t = b.a.createElement(Y.a, { Icon: q.a, color: 'neutral', size: 'xxxLarge', style: Q.searchIcon })
                  return b.a.createElement(
                    T.a,
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
              f()(l()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              f()(l()(e), '_handleClick', function () {
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
                    m = e.withNewTypeaheadUI,
                    f = this.context.featureSwitches,
                    h = this._getSocialContext(),
                    g = this._getResultContext() || h,
                    y = u === oe.d.SearchBox,
                    v = p && f.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
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
      f()(de, 'contextType', v.a), f()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(de),
        me = n('htQn'),
        fe = n('iySH'),
        he = n('IMYl'),
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
            f()(l()(o), '_onViewRef', function (e) {
              o._viewRef = e
              var t = o.props.onRef
              t && t(e)
            }),
            f()(l()(o), '_handleClick', function () {
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
                    A.a,
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
                  c = e.renderUserDecoration,
                  l = e.source
                switch (o.type) {
                  case oe.b.User:
                    var s = o.data,
                      u = c ? c({ userId: s.id_str, user: s, isSelected: r }) : void 0,
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
                    var m = this.props.query,
                      f = o.data,
                      h = l === oe.d.SearchBox
                    return b.a.createElement(J, {
                      isDisabled: a,
                      query: m || '',
                      resultContext: f.result_context,
                      showIcon: h,
                      style: h ? we.itemPadding : void 0,
                      topic: f.topic,
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
                    var g = o.data.text
                    return b.a.createElement(
                      A.a,
                      { style: we.navigationLink },
                      b.a.createElement(R.b, { style: we.content, weight: 'bold' }, g),
                      b.a.createElement(fe.a, { style: we.icon }),
                    )
                  case oe.b.Setting:
                    var y = o.data.text
                    return b.a.createElement(
                      A.a,
                      { style: we.navigationLink },
                      b.a.createElement(R.b, { style: we.content }, y),
                      b.a.createElement(fe.a, { style: we.icon }),
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
      f()(ve, 'contextType', v.a)
      var we = D.a.create(function (e) {
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
          return e.isSelected ? b.a.createElement(he.a, { accessibilityHidden: !0, style: we.checkIcon }) : null
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
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('hBpG'), n('7x/C'), n('ERkP')),
        b = n.n(h),
        g = n('mrHL'),
        y = n('yiKp'),
        v = n.n(y),
        w = n('m3Bd'),
        _ = n.n(w),
        E = (n('+KXO'), n('NeAX')),
        C = n('RqPI'),
        S = n('hqKg'),
        x = n('kGix'),
        k = n('O0uF'),
        I = n('G6rE'),
        O = n('rxPX'),
        T = n('0KEI'),
        D = ['featureSwitches'],
        P = Object(S.createSelector)(C.n, E.selectPreferencesFetchStatus, function (e, t) {
          return e ? x.a.LOADED : t
        }),
        L = Object(O.a)()
          .propsFromState(function () {
            return {
              fetchStatus: P,
              loggedInUser: I.e.selectLoggedInUser,
              isActiveCreator: C.l,
              isApprovedCreator: C.m,
              personalizationPreferences: E.selectUserPreferences,
              featureSwitches: k.f,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches,
              n = _()(e, D)
            return v()({ withEditableFSes: Object.keys(t.debug).length > 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_SCREEN'),
              fetchPreferencesIfNeeded: E.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings' }),
        A = n('v//M'),
        F = n('uD2z'),
        R = n('3XMw'),
        M = n.n(R),
        N = n('KQzH'),
        B = n('yoO3'),
        j = n('cnVF'),
        z = n('K1iM'),
        H = n.n(z),
        V = n('ddV6'),
        U = n.n(V)
      n('tVqn'), n('jwue'), n('+oxZ')
      function W(e) {
        var t = e.results,
          n = e.setting,
          a = e.type,
          r = {
            id: n.id,
            type: 'setting',
            data: { text: n.title, location: { pathname: n.path, openInSameFrame: !0 } },
          }
        'setting' === a
          ? t.push(v()(v()({}, r), {}, { type: 'setting' }))
          : 'setting_group' === a && t.push(v()(v()({}, r), {}, { type: 'setting_group' }))
      }
      var G = n('VY6S'),
        K = n('Grlw'),
        Y = n('Es6L'),
        X = (n('uFXj'), n('3EFP')),
        q = n('woHV'),
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
            m = e.onFocus,
            f = e.onItemClick,
            h = e.onQueryChange,
            g = e.onSubmit,
            y = e.placeholder,
            v = e.renderEmptyState,
            w = e.renderInSearchField,
            _ = e.rounded,
            E = e.shouldAutoFocus,
            C = e.shouldClearOnSelect,
            S = e.shouldFocusOnClear,
            x = e.shouldRenderEmptyState,
            k = e.source,
            I = e.style,
            O = e.testID,
            T = b.a.useRef(null),
            D = b.a.useRef(null),
            P = b.a.useRef(null),
            L = b.a.useRef(null),
            A = b.a.useState(!1),
            F = U()(A, 2),
            R = F[0],
            M = F[1],
            N = b.a.useState(null),
            B = U()(N, 2),
            j = B[0],
            z = B[1],
            H = b.a.useState(Object(ae.b)()),
            V = U()(H, 2),
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
              ;(null != T && null !== (t = T.current) && void 0 !== t && t.contains(e.target)) || n || (R && he())
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
              if (null != D && D.current) {
                var e = D.current.getBoundingClientRect().bottom
                e !== j && z(e)
              }
            },
            fe = function (e) {
              de(e), null == h || h(e)
            },
            he = function () {
              M(!1), null == p || p()
            },
            be = function () {
              var e
              he(), null == P || null === (e = P.current) || void 0 === e || e.blur()
            },
            ge = function (e, t) {
              var n,
                a,
                r = C ? '' : ue
              ;(M(!1), P.current) &&
                (C && S
                  ? P.current.focus()
                  : (C && (null === (n = P.current) || void 0 === n || n.clear()),
                    null === (a = P.current) || void 0 === a || a.blur()))
              fe(r), null == p || p(), null == f || f(e, t)
            },
            ye = function () {
              G(Object(ae.b)())
            },
            ve = R || t
          return b.a.createElement(
            J.a,
            { onLayout: me, ref: T, style: [le.root, I] },
            b.a.createElement(
              $.a,
              {
                onKeyDown: function (e) {
                  var t,
                    n = e.key
                  if (Object(ae.g)(e)) {
                    var a, r
                    if (n === X.a)
                      return null === (a = L.current) || void 0 === a || a.focusNext(), void e.preventDefault()
                    if (n === X.b)
                      return null === (r = L.current) || void 0 === r || r.focusPrevious(), void e.preventDefault()
                    if (n === X.d) return he(), void e.preventDefault()
                    if (n !== X.f) {
                      var o
                      if (n === X.c && null !== (t = L.current) && void 0 !== t && t.hasFocusedItem())
                        return (
                          null === (o = L.current) || void 0 === o || o.selectFocusedItem(), void e.preventDefault()
                        )
                      R || M(!0)
                    } else he()
                  }
                },
                style: le.keydownInputListener,
              },
              b.a.createElement(
                q.a,
                {
                  accessibilityLabel: y,
                  accessibilityRole: 'search',
                  onSubmit: function (e) {
                    var t
                    e.preventDefault(),
                      e.stopPropagation(),
                      null == P || null === (t = P.current) || void 0 === t || t.blur(),
                      M(!1),
                      null == p || p(),
                      null == g || g()
                  },
                  style: le.wrapper,
                },
                b.a.createElement(
                  J.a,
                  { ref: D, style: [le.inputContainer, i] },
                  ve && u
                    ? b.a.createElement(ee.a, {
                        accessibilityLabel: ce,
                        icon: b.a.createElement(re.a, null),
                        onClick: function (e) {
                          null == e || e.stopPropagation(), he(), null == u || u()
                        },
                        style: le.backButton,
                        type: 'primaryText',
                      })
                    : null,
                  b.a.createElement(
                    J.a,
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
                      autoFocus: E,
                      contentBelow: null == w ? void 0 : w(),
                      focusOnClear: S,
                      isCompact: c,
                      onChange: function (e) {
                        fe(e.target.value), me()
                      },
                      onClear: function () {
                        fe('')
                      },
                      onFocus: function () {
                        M(!0), me(), null == m || m()
                      },
                      onLayout: me,
                      placeholder: y,
                      ref: P,
                      returnKeyType: 'search',
                      spellCheck: 'false',
                      styleType: _ ? 'pill' : 'selection',
                      testID: O,
                      value: ue,
                      withClearButton: !a && R,
                    }),
                  ),
                ),
                b.a.createElement(
                  J.a,
                  { style: [le.typeaheadContainer, !_ && le.topBorder] },
                  ve
                    ? (function () {
                        var e
                        return (
                          'cover' === o
                            ? (e = [le.dropdown, j ? Object(ae.d)(j) : le.wideModeDropdown])
                            : 'overlap' === o && (e = l ? le.modalDropdown : [le.dropdown, le.wideModeDropdown]),
                          v && x
                            ? v({
                                ariaDescendantId: W,
                                domId: Y,
                                onDismiss: be,
                                onItemFocusChanged: ye,
                                ref: L,
                                style: e,
                              })
                            : b.a.createElement(Q.a, {
                                ariaDescendantId: W,
                                domId: Y,
                                items: s,
                                onItemClick: ge,
                                onItemFocusChanged: ye,
                                ref: L,
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
        ue = n('GZwR'),
        de = n('Irs7'),
        pe = n('s8G+'),
        me = n('zCf4'),
        fe = n('t62R'),
        he = n('FIs5'),
        be = M.a.d94f12b5,
        ge = M.a.b92a21d8,
        ye = M.a.c170a564,
        ve = M.a.ba8f6f81,
        we = { component: 'search', element: 'result' }
      function _e(e) {
        var t = e.isSearching,
          n = e.onChange,
          a = e.searchIndex,
          r = Object(pe.a)('settings_revamp_search_bar_enabled'),
          o = Object(de.b)(),
          i = Object(me.f)(),
          c = b.a.useState(''),
          l = U()(c, 2),
          s = l[0],
          u = l[1],
          d = b.a.useState(void 0),
          p = U()(d, 2),
          m = p[0],
          f = p[1],
          h = b.a.useState(!1),
          g = U()(h, 2),
          y = g[0],
          w = g[1],
          _ = b.a.useState([]),
          E = U()(_, 2),
          C = E[0],
          S = E[1],
          x = b.a.useMemo(
            function () {
              return Object(G.a)(function (e) {
                o.scribe(v()(v()({}, we), {}, { action: e ? 'show' : 'empty' }))
              }, 500)
            },
            [o],
          ),
          k = s.toLocaleLowerCase().trim(),
          I = Boolean(k.length)
        b.a.useEffect(
          function () {
            I
              ? (function () {
                  var e,
                    t = [],
                    n = H()(a)
                  try {
                    var r = function () {
                      var n = e.value,
                        a = !1
                      Array.isArray(n.items) &&
                        n.items.forEach(function (e) {
                          Object(K.b)(k, e) &&
                            (a || ((a = !0), W({ results: t, setting: n, type: 'setting_group' })),
                            W({ results: t, setting: e, type: 'setting' }))
                        }),
                        !a && Object(K.b)(k, n) && W({ results: t, setting: n, type: 'setting_group' })
                    }
                    for (n.s(); !(e = n.n()).done; ) r()
                  } catch (o) {
                    n.e(o)
                  } finally {
                    n.f()
                  }
                  S(t), k !== m && (f(k), x(t.length))
                })()
              : S([])
          },
          [k, I, a, m, x],
        )
        var O = b.a.useCallback(
            function () {
              n(!1)
            },
            [n],
          ),
          T = b.a.useCallback(
            function () {
              n(!0)
            },
            [n],
          ),
          D = b.a.useCallback(
            function () {
              s && n(!0)
            },
            [n, s],
          ),
          P = b.a.useMemo(
            function () {
              return Object(G.a)(function (e) {
                n(!0), u(e)
              }, 100)
            },
            [n],
          ),
          L = b.a.useCallback(
            function (e) {
              !y &&
                e.trim().length &&
                (w(!0), o.scribe({ component: 'search', element: 'search_box', action: 'began_typing' })),
                P(e)
            },
            [y, o, P],
          )
        if (!r) return null
        return b.a.createElement(se, {
          alwaysOpen: t,
          dropdownPosition: 'inline',
          inputStyle: Ee.input,
          items: C,
          onBackClicked: Object(Y.a)() ? O : void 0,
          onClick: T,
          onFocus: D,
          onItemClick: function (e) {
            if ('setting' === e.type || 'setting_group' === e.type) {
              var t = 'string' == typeof e.data.location ? e.data.location : e.data.location.pathname
              o.scribe(v()(v()({}, we), {}, { action: 'click' })), i.push(t, { backLocation: window.location.pathname })
            }
          },
          onQueryChange: L,
          placeholder: ve,
          renderEmptyState: function (e) {
            var t = e.style
            return I
              ? b.a.createElement(he.a, { header: ge({ query: s }), message: ye, style: t })
              : b.a.createElement(
                  J.a,
                  { style: [t, Ee.emptyState] },
                  b.a.createElement(fe.b, { align: 'center', color: 'gray700' }, be),
                )
          },
          rounded: !0,
          shouldRenderEmptyState: t && (!I || 0 === C.length),
          source: ue.d.SearchBox,
        })
      }
      var Ee = ne.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            input: { flexShrink: 1, paddingVertical: e.spacesPx.space8, paddingHorizontal: e.spacesPx.space8 },
          }
        }),
        Ce = n('7FtF'),
        Se = n('iCwC'),
        xe = n('3cwy'),
        ke = 'loggedOutPrivacySection',
        Ie = 'accountLink',
        Oe = 'accountAccessLink',
        Te = 'privacyAndSafetyLink',
        De = 'notificationsLink',
        Pe = 'accessibilityLink',
        Le = 'aboutLink',
        Ae = 'displayLink',
        Fe = 'dataLink',
        Re = n('6vad'),
        Me = n('0yYu'),
        Ne = n('v6aA'),
        Be = n('AS3p'),
        je = M.a.e3719c15,
        ze = M.a.cad53943,
        He = M.a.bb081ea1,
        Ve = M.a.e95b9448,
        Ue = M.a.eb75875d,
        We = M.a.c4881c66,
        Ge = M.a.eafe3287,
        Ke = M.a.f458a3b1,
        Ye = M.a.e8f57e07,
        Xe = M.a.b7fde2b8,
        qe = M.a.ja94f34d,
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
              f()(l()(o), '_renderLoggedIn', function () {
                var e = o.state.isSearching
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  o._renderSearchInput(),
                  e
                    ? null
                    : b.a.createElement(
                        J.a,
                        { accessibilityRole: 'tablist' },
                        b.a.createElement(N.a, { label: Ze, link: '/settings/account', testID: Ie }),
                        o._renderMonetization(),
                        o._renderTwitterBlue(),
                        b.a.createElement(N.a, {
                          label: $e,
                          link: '/settings/security_and_account_access',
                          testID: Oe,
                        }),
                        b.a.createElement(N.a, { label: ze, link: '/settings/privacy_and_safety', testID: Te }),
                        o._renderReportCenter(),
                        b.a.createElement(N.a, { label: Ue, link: '/settings/notifications', testID: De }),
                        b.a.createElement(N.a, {
                          label: et,
                          link: '/settings/accessibility_display_and_languages',
                          testID: Pe,
                        }),
                        b.a.createElement(N.a, { label: tt, link: '/settings/about', testID: Le }),
                        o._renderFeatureSwitch(),
                      ),
                )
              }),
              f()(l()(o), '_renderLoggedOut', function () {
                var e = Object(g.b)(j.u, o.context.featureSwitches)
                return b.a.createElement(
                  J.a,
                  { testID: ke },
                  b.a.createElement(Re.b, { text: Ke }),
                  b.a.createElement(N.a, {
                    description: e ? o._renderPersonalizationDescription() : void 0,
                    label: Ye,
                    link: '/settings/account/personalization',
                  }),
                  b.a.createElement(N.a, { label: Xe, link: '/settings/your_twitter_data' }),
                  o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_banner_enabled')
                    ? b.a.createElement(N.a, { description: Je, label: Qe, link: '/settings/cookie_preferences' })
                    : null,
                  b.a.createElement(fe.b, { style: Se.a.descriptionText }, qe),
                  o._renderGeneral(),
                )
              }),
              f()(l()(o), '_renderSearchInput', function () {
                var e = o.props.searchIndex,
                  t = o.state.isSearching
                return b.a.createElement(_e, {
                  isSearching: t,
                  onChange: function (e) {
                    o.setState({ isSearching: e })
                  },
                  searchIndex: e,
                })
              }),
              f()(l()(o), '_renderGeneral', function () {
                return b.a.createElement(
                  J.a,
                  null,
                  b.a.createElement(Me.a, null),
                  b.a.createElement(Re.b, { text: Ve }),
                  o._renderFeatureSwitch(),
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: We, link: '/settings/display', testID: Ae })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: Ge, link: '/settings/data', testID: Fe })
                    : null,
                  o._isUserLoggedIn()
                    ? b.a.createElement(N.a, { label: je, link: '/settings/accessibility', testID: Pe })
                    : null,
                  b.a.createElement(N.a, { label: tt, link: '/settings/about', testID: Le }),
                )
              }),
              f()(l()(o), '_renderFeatureSwitch', function () {
                return o.props.withEditableFSes
                  ? b.a.createElement(N.a, { label: nt, link: '/settings/feature_switches' })
                  : null
              }),
              f()(l()(o), '_renderMonetization', function () {
                var e = o.context.featureSwitches,
                  t = o.props,
                  n = t.isActiveCreator,
                  a = t.isApprovedCreator,
                  r = e.isTrue('super_follow_web_onboarding_enabled') && a,
                  i = e.isTrue('super_follow_web_edit_perks_enabled') && n
                return r || i ? b.a.createElement(N.a, { label: at, link: '/settings/monetization' }) : null
              }),
              f()(l()(o), '_renderTwitterBlue', function () {
                var e,
                  t =
                    null ===
                      (e = o.props.searchIndex.find(function (e) {
                        return e.id === K.a.TwitterBlue
                      })) || void 0 === e
                      ? void 0
                      : e.path
                return t ? b.a.createElement(N.a, { label: rt, link: t }) : null
              }),
              f()(l()(o), '_renderReportCenter', function () {
                return o.context.featureSwitches.isTrue('report_center_mvp_r2_enabled')
                  ? b.a.createElement(N.a, { label: ot, link: '/settings/report-center' })
                  : null
              }),
              f()(l()(o), '_handleBackClicked', function () {
                var e = o.props.history
                o.state.isSearching ? o.setState({ isSearching: !1 }) : e.goBack()
              }),
              f()(l()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              f()(l()(o), '_isUserLoggedIn', function () {
                return !!o.props.loggedInUser
              }),
              (o._showVideoAutoplaySetting = Object(xe.a)()),
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
                      Ce.a,
                      { location: n, onBackClick: this._handleBackClicked, screenType: 'root', title: He },
                      this._isUserLoggedIn() || Object(Be.c)(this.context.featureSwitches) === Be.a.AcceptAllCookies
                        ? b.a.createElement(A.a, {
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
                  return Object(F.a)(e)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      f()(it, 'contextType', Ne.a)
      t.default = L(it)
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('aWyx'),
        i = n('XnpN'),
        c = n('3XMw'),
        l = n.n(c),
        s = n('aI6n'),
        u = n('rHpw'),
        d = n('TIdA'),
        p = n('A91F'),
        m = n('oSwX'),
        f = n('9Xij'),
        h = n('Znyr'),
        b = n('cm6r'),
        g = n('U+bB'),
        y = n('MWbm'),
        v = l.a.fd48249b,
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
        E = u.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        C = function (e) {
          var t = e.left,
            n = e.right
          return r.a.createElement(
            y.a,
            { style: _.container },
            r.a.createElement(y.a, { style: _.left }, t),
            r.a.createElement(y.a, { style: _.right }, n),
          )
        },
        S = function (e) {
          var t = e.bottom,
            n = e.top
          return r.a.createElement(
            y.a,
            { style: E.container },
            r.a.createElement(y.a, { style: E.top }, n),
            r.a.createElement(y.a, { style: E.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size
            return r.a.createElement(
              y.a,
              { key: t.id_str, style: w.container },
              r.a.createElement(m.default, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  y.a,
                  { key: e.id_str, style: w.container },
                  r.a.createElement(m.default, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(f.a, { ratio: 1 }, r.a.createElement(C, { left: n[1], right: n[0] }))
            var a = r.a.createElement(S, { bottom: n[2], top: n[1] }),
              o = n[0]
            return r.a.createElement(C, { left: a, right: o })
          },
          a = e.conversation,
          c = e.link,
          l = e.perspective,
          _ = e.withBadge,
          E = a && a.avatar_image_https,
          x = a
            ? Object(i.a)(a, l).map(function (e) {
                return e.user
              })
            : [],
          k = x.slice(0, 3),
          I =
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
              return e ? r.a.createElement(g.a, { source: e }) : null
            })(E) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(y.a, { style: w.circle }, n(e))
            })(k),
          O =
            c ||
            (function (e, t) {
              if (e)
                return e.type === o.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === o.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, x),
          T = _ && null != a && a.participants ? a.participants.length - 1 : 0
        return I
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                f.a,
                { ratio: 1 },
                O ? r.a.createElement(b.a, { interactiveStyles: null, link: O, testID: s.a.conversationAvatar }, I) : I,
              ),
              T
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      y.a,
                      { style: w.itemAccessory },
                      r.a.createElement(h.a, {
                        count: t,
                        standalone: !0,
                        style: w.userDecoration,
                        textColor: 'text',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: v,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: T })
                : null,
            )
          : null
      }
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
        c = n('yoO3'),
        l = n('csss'),
        s = n('7JQg'),
        u = n('7FtF'),
        d = n('MWbm'),
        p = i.a.hfc86556,
        m = i.a.daef29b7,
        f = i.a.i0dd9b9d,
        h = { page: 'settings', section: 'mute' }
      t.default = function (e) {
        var t = e.location
        return r.a.createElement(
          s.c,
          { namespace: h },
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              u.a,
              { location: t, title: p },
              r.a.createElement(
                d.a,
                null,
                r.a.createElement(l.a, { label: m, link: '/settings/muted/all' }),
                r.a.createElement(l.a, { label: f, link: '/settings/muted_keywords' }),
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
          return k
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
            return { viewerCountry: o.z }
          })
          .withAnalytics({ page: 'settings', section: 'about' }),
        l = n('dzZ/'),
        s = n('3XMw'),
        u = n.n(s),
        d = n('yoO3'),
        p = n('7FtF'),
        m = n('iCwC'),
        f = 'aboutScreen',
        h = n('MWbm'),
        b = n('6vad'),
        g = n('csss'),
        y = n('RKmr'),
        v = n('0yYu'),
        w = n('t62R'),
        _ = u.a.cedbb01c,
        E = u.a.b4f917d0,
        C = u.a.bdfa2b8c,
        S = u.a.j0783ebe,
        x = u.a.c0398892
      function k(e) {
        var t = []
        return (
          t.push(r.a.createElement(b.b, { text: x })),
          t.push(
            r.a.createElement(g.a, {
              label: x,
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
              h.a,
              { testID: f },
              r.a.createElement(y.a, { description: S }),
              r.a.createElement(k, null),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: _ }),
              o.map(function (e, t) {
                return r.a.createElement(g.a, { key: e.text, label: e.text, link: { external: !0, pathname: e.link } })
              }),
              c.map(function (e) {
                return r.a.createElement(
                  w.b,
                  { color: 'gray700', key: e.text, size: 'subtext2', style: [m.a.infoText, m.a.bottomBorder] },
                  e.text,
                )
              }),
              r.a.createElement(v.a, null),
              r.a.createElement(b.b, { text: E }),
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
        return L
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('z84I'), n('ERkP')),
        b = n.n(h),
        g = n('yiKp'),
        y = n.n(g),
        v = (n('ho0z'), n('uFXj'), n('t62R')),
        w = n('IMYl'),
        _ = n('cm6r'),
        E = n('rHpw'),
        C = n('lzTJ'),
        S = n('k/Ka'),
        x = n('MWbm'),
        k = n('r7ya'),
        I = n('I4+6'),
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              f()(l()(e), '_radioRef', b.a.createRef()),
              f()(l()(e), '_handleChange', function (t) {
                var n = e.props,
                  a = n.backgroundName,
                  r = n.isSelected,
                  o = n.onChange
                o && !r && o(a)
              }),
              (e._selectedInteractiveStyles = I.a.generate({
                backgroundColor: E.a.theme.colors.transparent,
                color: E.a.theme.colors.primary,
                withFocusWithinFocusRing: !0,
              })),
              (e._unselectedInteractiveStyles = I.a.generate({
                backgroundColor: E.a.theme.colors.transparent,
                color: E.a.theme.colors.gray700,
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
                    _.a,
                    { focusable: !1, interactiveStyles: null, style: [T.root, this._getButtonStyles()] },
                    function (t) {
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(
                          _.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: T.radioOuterCircle,
                          },
                          b.a.createElement(
                            x.a,
                            { style: [T.radioInnerCircle, e._getCircleStyles()] },
                            a ? b.a.createElement(w.a, { style: T.checkMark }) : null,
                          ),
                        ),
                        b.a.createElement(
                          x.a,
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
                    borderColor: n ? E.a.theme.colors.primary : E.a.theme.colors.gray200,
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
                    backgroundColor: n ? E.a.theme.colors.primary : E.a.theme.colors.transparent,
                    borderColor: n ? E.a.theme.colors.primary : this._getPalette(t).gray300,
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
                  return e === C.b.dark ? k.a : e === C.b.darker ? k.b : k.c
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        T = E.a.create(function (e) {
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
              y()({}, E.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        D = O,
        P = 1,
        L = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              f()(l()(e), '_handleItemChanged', function (t) {
                return function () {
                  ;(0, e.props.onChange)(t)
                }
              }),
              (e._backgroundPickerName = 'background_picker_'.concat(P)),
              (P += 1),
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
                    x.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: 'row' === r ? A.row : A.column },
                    o.map(function (t) {
                      return b.a.createElement(D, {
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
        A = E.a.create(function (e) {
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
        o = n('3XMw'),
        i = n.n(o),
        c = n('yoO3'),
        l = n('7JQg'),
        s = n('7FtF'),
        u = 'aboutText',
        d = n('5hXE'),
        p = n('A2ey'),
        m = n('vSJw'),
        f = n('KNZn'),
        h = n('MWbm'),
        b = n('t62R'),
        g = n('0yYu'),
        y = n('6vad'),
        v = n('rHpw'),
        w = i.a.c4881c66,
        _ = i.a.a5ce82a4,
        E = i.a.ce494bb3,
        C = i.a.c783d45e,
        S = i.a.h306a357,
        x = { page: 'settings', section: 'display' },
        k = function (e) {
          var t = e.location
          return r.a.createElement(
            l.c,
            { namespace: x },
            r.a.createElement(
              c.a,
              null,
              r.a.createElement(
                s.a,
                { location: t, screenType: 'secondaryDetail', title: w },
                r.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: I.aboutText, testID: u }, _),
                r.a.createElement(f.a, null),
                r.a.createElement(g.a, null),
                r.a.createElement(y.b, { text: E }),
                r.a.createElement(d.a, null),
                r.a.createElement(g.a, null),
                r.a.createElement(y.b, { text: C }),
                r.a.createElement(h.a, { style: I.colorPicker }, r.a.createElement(m.a, null)),
                r.a.createElement(g.a, null),
                r.a.createElement(y.b, { text: S }),
                r.a.createElement(h.a, { style: I.backgroundPicker }, r.a.createElement(p.a, null)),
              ),
            ),
          )
        },
        I = v.a.create(function (e) {
          return {
            aboutText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
            colorPicker: { paddingVertical: e.spaces.space4 },
          }
        })
      t.default = k
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        b = n.n(h),
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
        _ = n('3EFP'),
        E = v(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                f()(l()(e), '_handleKeyDown', function (t) {
                  var n = e.props,
                    a = n.setThemeFocus,
                    r = n.themeItem
                  t.key === _.d || t.key === _.e ? a('') : a(r)
                }),
                f()(l()(e), '_handleMouseDown', function () {
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
      t.a = E
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
          return f
        }),
        n.d(t, 'd', function () {
          return h
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
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function f(e, t) {
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
      var h = Object(c.a)(function (e) {
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
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('ho0z'), n('z84I'), n('LW0h'), n('7x/C'), n('M+/F'), n('Xrkv')),
        i = n('aWyx'),
        c = n('XnpN'),
        l = n('3XMw'),
        s = n.n(l),
        u = s.a.b5b7fb93,
        d = s.a.g755fcde,
        p = s.a.f6b1ff81,
        m = s.a.j652293d
      t.a = function (e, t, n, a) {
        var r = e.type,
          o = e.name,
          l = e.participants,
          s = void 0 === l ? {} : l
        if (r === i.a.GROUP && o) return o
        if (s.length) {
          if (r === i.a.GROUP && n) return u
          var d = Object(c.a)(e, t).map(function (e) {
            return e.user
          })
          return f(d, t, r, a)
        }
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a.GROUP,
          a = arguments.length > 3 ? arguments[3] : void 0,
          c = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (c.length) {
          case 0:
            return d
          case 1:
            var l = r()(c, 1),
              s = l[0]
            return n === i.a.GROUP ? p({ name: s }) : s
          default:
            var u = !0,
              f = Object(o.a)(c.slice(0, a), u)
            return a ? m({ listOfParticipants: f, count: c.length - a }) : f
        }
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        b = n.n(h),
        g = n('NeAX'),
        y = n('P1r1'),
        v = n('hqKg'),
        w = n('uD2z'),
        _ = n('li/m'),
        E = n('G6rE'),
        C = n('0KEI'),
        S = n('oEGd'),
        x = Object(v.createSelector)(
          g.selectPreferencesFetchStatus,
          g.selectUserPreferences,
          y.g,
          _.d,
          function (e, t, n, a) {
            return { fetchStatus: e, personalizationString: Object(w.a)(t), settings: n, hasCommunityMemberships: a }
          },
        ),
        k = {
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PRIVACY_AND_SAFTEY_SCREEN',
          ),
          fetchPreferencesIfNeeded: g.fetchPreferencesIfNeeded,
          patchUser: E.e.patchUser,
          updateSettings: y.M,
        },
        I = Object(S.f)(x, k),
        O = n('v//M'),
        T = n('3XMw'),
        D = n.n(T),
        P = n('yoO3'),
        L = n('7FtF'),
        A = 'privacyAndSafetyScreen',
        F = n('MWbm'),
        R = n('Irs7'),
        M = n('v6aA'),
        N = n('6vad'),
        B = n('e0ey'),
        j = n('csss'),
        z = n('0yYu'),
        H = n('eb3s'),
        V = D.a.cad53943,
        U = D.a.bab1f8b0,
        W = D.a.f5e59e90,
        G = D.a.i0310b4e,
        K = { headline: D.a.j8bf07ab, text: D.a.ca8034b3, confirmButtonLabel: D.a.c5d4192a },
        Y = { headline: D.a.gea6cc19, text: D.a.j7fc0afc, confirmButtonLabel: D.a.f527b322 },
        X = D.a.jabb9c9a,
        q = D.a.f56d108e,
        Q = { all: D.a.d165c992, following: D.a.ea339390, none: D.a.e3a761ee },
        J = D.a.d4986f85,
        Z = D.a.h6ce12ed,
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
        me = D.a.a5f32aa2,
        fe = D.a.eb75875d,
        he = D.a.aea62567,
        be = D.a.e8f57e07,
        ge = D.a.e8f57e07,
        ye = D.a.b59540c2,
        ve = { all: D.a.bd34d8f8, following: D.a.d22dad9e, none: D.a.ad41e8b3 },
        we = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(
                l()(e),
                'showPeriscopeAuthOption',
                e.context.featureSwitches.isTrue('responsive_web_live_video_parity_periscope_auth_enabled'),
              ),
              f()(l()(e), 'state', { showProtectedConfirmation: !1 }),
              f()(l()(e), '_handleItemChanged', function (t, n) {
                e._updateSettings(f()({}, t, n))
              }),
              f()(l()(e), '_handleDMFromChanged', function (t, n) {
                e._updateSettings(f()({}, t, n ? 'all' : 'following'))
              }),
              f()(l()(e), '_handleDMQualityFilterChanged', function (t, n) {
                e._updateSettings(f()({}, t, n ? 'enabled' : 'disabled'))
              }),
              f()(l()(e), '_handleDMReceiptChanged', function (t, n) {
                e._updateSettings(f()({}, t, n ? 'all_enabled' : 'all_disabled'))
              }),
              f()(l()(e), '_handleProtectedChanged', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  o = a.patchUser
                n
                  ? e.setState({ showProtectedConfirmation: !0 })
                  : e._updateSettings(f()({}, t, !1)).then(function () {
                      r.scribe({ section: 'privacy', element: 'protected', action: 'disable' }),
                        e.context.loggedInUserId && o(e.context.loggedInUserId, f()({}, t, !1))
                    })
              }),
              f()(l()(e), '_handleProtectedCancel', function () {
                e.setState({ showProtectedConfirmation: !1 })
              }),
              f()(l()(e), '_handleProtectedConfirm', function () {
                e.setState({ showProtectedConfirmation: !1 })
                var t = e.props,
                  n = t.analytics,
                  a = t.patchUser
                e._updateSettings({ protected: !0 }).then(function () {
                  n.scribe({ section: 'privacy', element: 'protected', action: 'enable' }),
                    e.context.loggedInUserId && a(e.context.loggedInUserId, { protected: !0 })
                })
              }),
              f()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.personalizationString,
                  a = t.settings,
                  r = Q[a.allow_media_tagging],
                  o = ve[a.allow_contributor_request]
                return b.a.createElement(
                  F.a,
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
                  b.a.createElement(j.a, { label: X, link: '/settings/location' }),
                  b.a.createElement(j.a, { description: r, label: q, link: '/settings/tagging' }),
                  b.a.createElement(z.a, null),
                  b.a.createElement(N.b, { text: J }),
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
                      b.a.createElement(z.a, null),
                      b.a.createElement(N.b, { text: re }),
                      b.a.createElement(B.a, {
                        checked: a.allow_authenticated_periscope_requests,
                        helpText: ie,
                        label: oe,
                        name: 'allow_authenticated_periscope_requests',
                        onChange: e._handleItemChanged,
                      }),
                    ),
                  b.a.createElement(z.a, null),
                  b.a.createElement(N.b, { text: ce }),
                  b.a.createElement(j.a, { label: le, link: '/settings/contacts' }),
                  b.a.createElement(z.a, null),
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
                  b.a.createElement(j.a, { label: pe, link: '/settings/mute' }),
                  b.a.createElement(j.a, { label: me, link: '/settings/blocked/all' }),
                  b.a.createElement(j.a, { label: fe, link: '/settings/notifications' }),
                  b.a.createElement(j.a, { label: he, link: '/settings/search' }),
                  b.a.createElement(z.a, null),
                  b.a.createElement(N.b, { text: ge }),
                  b.a.createElement(j.a, { description: n, label: be, link: '/settings/account/personalization' }),
                  b.a.createElement(z.a, null),
                  b.a.createElement(N.b, { key: 'header', text: ye }),
                  b.a.createElement(j.a, { description: o, key: 'pivot', label: ye, link: '/settings/teams' }),
                )
              }),
              f()(l()(e), '_handleFetchPreferences', function () {
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
                    F.a,
                    { testID: A },
                    b.a.createElement(
                      L.a,
                      { location: a, screenType: 'primaryDetail', title: V },
                      b.a.createElement(
                        P.a,
                        null,
                        b.a.createElement(O.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                        this.state.showProtectedConfirmation
                          ? b.a.createElement(H.a, {
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
      f()(we, 'contextType', M.a)
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        b = n.n(h),
        g = n('+Kfv'),
        y = n('0yYu'),
        v = n('7nmT'),
        w = n.n(v),
        _ = n('ddV6'),
        E = n.n(_),
        C = n('3XMw'),
        S = n.n(C),
        x = n('kIAd'),
        k = n('JYMr'),
        I = n('rHpw'),
        O = S.a.f2b3fe06,
        T = I.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        D = function (e) {
          var t = e.isLoading,
            n = b.a.useState(!1),
            a = E()(n, 2),
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
                      }, x.a))
                    : o(!1),
                  function () {
                    return clearTimeout(e)
                  }
                )
              },
              [t],
            ),
            b.a.createElement(k.a, { ariaValueText: r ? O : '', indeterminate: r, style: !r && T.hidden })
          )
        },
        P = n('ZcYN'),
        L = n('MWbm'),
        A = n('oQhu'),
        F = n('w6IS'),
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
              f()(l()(o), '_setFocusedItemRef', function (e) {
                o._shouldScrollToFocusedItem &&
                  e &&
                  (Object(R.c)(o._getScrollParent(), e), (o._shouldScrollToFocusedItem = !1))
              }),
              f()(l()(o), '_resetScroll', function () {
                var e = o._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              f()(
                l()(o),
                '_getFlattenedItems',
                Object(A.a)(function (e) {
                  return Object(F.a)(e)
                }),
              ),
              f()(l()(o), '_handleItemClick', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemClick,
                  i = o._getFlattenedItems(a).indexOf(e)
                e && !t && !o._shouldBlockInteractivity && r(e, i), o._resetFocus()
              }),
              f()(l()(o), '_getResultCount', function () {
                var e = o.props.items
                return o._getFlattenedItems(e).length
              }),
              f()(l()(o), '_setFocusIndex', function (e, t) {
                var n = o.props,
                  a = n.items,
                  r = n.onItemFocusChanged
                ;(o._shouldScrollToFocusedItem = t), o.setState({ focusIndex: e }), r && r(o._getFlattenedItems(a)[e])
              }),
              f()(l()(o), '_resetFocus', function () {
                o._setFocusIndex(o.props.withItemAlwaysSelected ? 0 : -1)
              }),
              f()(l()(o), 'focusNext', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  o._setFocusIndex(n, !0)
                }
              }),
              f()(l()(o), 'focusPrevious', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  o._setFocusIndex(n, !0)
                }
              }),
              f()(l()(o), 'hasFocusedItem', function () {
                var e = o.state.focusIndex,
                  t = o._getResultCount()
                return e >= 0 && t > e
              }),
              f()(l()(o), 'selectFocusedItem', function () {
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
                    u = !(!a && !r.length),
                    d = 0,
                    p = !!l
                  return u
                    ? b.a.createElement(
                        g.a,
                        { behavioralEventContext: M },
                        b.a.createElement(
                          L.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: s },
                          o ? o() : null,
                          b.a.createElement(D, { isLoading: !!a }),
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
                    m = !!s,
                    f = d === t,
                    h = o && o(e, e.data),
                    g = r && r(e, e.data)
                  return b.a.createElement(P.b, {
                    disabledMessage: g,
                    domId: f ? a : void 0,
                    getUserDisplayNameLabel: i,
                    isDisabled: h,
                    isFocused: f,
                    isInMultiSelect: m,
                    isSelected: p,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: f ? this._setFocusedItemRef : void 0,
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
        m = (n('z84I'), n('ERkP')),
        f = n.n(m),
        h = n('yiKp'),
        b = n.n(h),
        g = n('1Pcy'),
        y = n.n(g),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        w = n('cm6r'),
        _ = n('rHpw'),
        E = n('k/Ka'),
        C = n('MWbm'),
        S = n('x0mb'),
        x = n('IMYl'),
        k = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(y()(e), '_radioRef', f.a.createRef()),
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
                    i = _.a.theme.colors[n],
                    c = v.a.generate({
                      backgroundColor: _.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return f.a.createElement(
                    C.a,
                    { style: [I.container, o] },
                    f.a.createElement(
                      w.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [I.choice, I.choiceContainer] },
                      f.a.createElement(S.a, { style: [I.choice, { color: i }] }),
                      Object(E.a)('input', {
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
                      f.a.createElement(
                        C.a,
                        { style: [I.choice, I.checkMarkContainer] },
                        f.a.createElement(x.a, { style: [I.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        I = _.a.create(function (e) {
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
              b()({}, _.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        O = k,
        T = 1,
        D = (function (e) {
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
                    s = [P.root, l && P.flexWrap],
                    u = l ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return f.a.createElement(
                    C.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return f.a.createElement(O, {
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
        })(f.a.Component)
      p()(D, 'defaultProps', { layout: 'one-row' })
      var P = _.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = D
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        b = n.n(h),
        g = n('HPNB'),
        y = n('P1r1'),
        v = n('rxPX'),
        w = Object(v.a)()
          .propsFromActions(function () {
            return { updateSettings: y.M }
          })
          .withAnalytics(),
        _ = n('3XMw'),
        E = n.n(_),
        C = n('huBF'),
        S = n('lzTJ'),
        x = n('rHpw'),
        k = n('cHvH'),
        I = n('uI9t'),
        O = S.f.ThemePrimaryColorNames,
        T = E.a.aefc5b20,
        D = [
          { accessibilityLabel: E.a.a52d0fdd, colorName: O.blue500 },
          { accessibilityLabel: E.a.d818cdd5, colorName: O.yellow500 },
          { accessibilityLabel: E.a.fee1cd64, colorName: O.magenta500 },
          { accessibilityLabel: E.a.cbed7fb2, colorName: O.purple500 },
          { accessibilityLabel: E.a.g697ec02, colorName: O.orange500 },
          { accessibilityLabel: E.a.a7c22049, colorName: O.green500 },
        ],
        P = w(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                f()(l()(e), '_handleColorChange', function (t) {
                  var n = e.props,
                    a = n.analytics,
                    r = n.updateSettings
                  a.scribe({ component: 'color_picker', element: 'option', action: t }),
                    r({ themeColor: O[t] }),
                    x.a.setPrimaryColor(O[t])
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
                    return b.a.createElement(k.a, null, function (t) {
                      var n = t.windowWidth
                      return b.a.createElement(C.a, { themeItem: 'color' }, function (t) {
                        return b.a.createElement(I.a, {
                          accessibilityLabel: T,
                          autoFocus: t,
                          layout: g.a.shouldRenderAsModal(n) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: D,
                          value: x.a.theme.primaryColorName,
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
      t.a = P
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
