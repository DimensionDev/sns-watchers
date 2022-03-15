;(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    '3EFP': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      }),
        a.d(t, 'b', function () {
          return r
        }),
        a.d(t, 'c', function () {
          return o
        }),
        a.d(t, 'd', function () {
          return i
        }),
        a.d(t, 'e', function () {
          return c
        }),
        a.d(t, 'f', function () {
          return l
        })
      var n = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        i = 'Escape',
        c = 'ESC',
        l = 'Tab'
    },
    '5hXE': function (e, t, a) {
      'use strict'
      var n,
        r = a('VrFO'),
        o = a.n(r),
        i = a('Y9Ll'),
        c = a.n(i),
        l = a('1Pcy'),
        s = a.n(l),
        u = a('5Yy7'),
        d = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        m = a('KEM+'),
        y = a.n(m),
        b = (a('+KXO'), a('uFXj'), a('2G9S'), a('vrRf'), a('ERkP')),
        f = a.n(b),
        g = a('P1r1'),
        w = a('RqPI'),
        v = a('rxPX'),
        k = Object(v.a)()
          .propsFromState(function () {
            return { language: w.o, scale: g.y }
          })
          .propsFromActions(function () {
            return { updateSettings: g.M }
          })
          .withAnalytics(),
        C = a('3XMw'),
        _ = a.n(C),
        E = a('huBF'),
        S = a('MWbm'),
        x = a('lzTJ'),
        F = a('rHpw'),
        R = a('t62R'),
        P = a('9RkS'),
        M = x.f.ThemeScaleNames,
        L = Object.keys(M),
        T = L.length - 1,
        I = _.a.d8680056,
        O = _.a.eed02405,
        N = _.a.j59f0b93,
        A = _.a.b81aaad8,
        B = _.a.c704488f,
        H =
          ((n = {}),
          y()(n, M.xSmall, I),
          y()(n, M.small, O),
          y()(n, M.normal, N),
          y()(n, M.large, A),
          y()(n, M.xLarge, B),
          n),
        z = [I, O, N, A, B],
        j = _.a.e46dffa0,
        W = (function (e) {
          d()(a, e)
          var t = h()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(s()(e), '_handleSliderChanged', function (t) {
                var a = e.props,
                  n = a.analytics,
                  r = a.updateSettings,
                  o = L[t]
                n.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  F.a.setScale(M[o])
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return f.a.createElement(E.a, { themeItem: 'textSize' }, function (t) {
                    return f.a.createElement(
                      S.a,
                      { style: D.sliderContainer },
                      f.a.createElement(R.b, { size: 'subtext2' }, 'Aa'),
                      f.a.createElement(
                        S.a,
                        { style: D.slider },
                        f.a.createElement(P.a, {
                          accessibilityLabel: j,
                          accessibilityLabelValueText: H[F.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: z,
                          max: T,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: L.indexOf(F.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      f.a.createElement(R.b, { size: 'headline1' }, 'Aa'),
                    )
                  })
                },
              },
            ]),
            a
          )
        })(f.a.Component),
        D = F.a.create(function (e) {
          return {
            sliderContainer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space16 },
            slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 },
          }
        }),
        K = k(W)
      t.a = K
    },
    '6rLm': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'DisplayScreen', function () {
          return z
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('1t7P'), a('jQ/y'), a('ERkP')),
        b = a.n(y),
        f = a('jHSc'),
        g = a('3XMw'),
        w = a.n(g),
        v = a('5hXE'),
        k = a('A2ey'),
        C = a('vSJw'),
        _ = a('KNZn'),
        E = a('MWbm'),
        S = a('Irs7'),
        x = a('t62R'),
        F = a('/yvb'),
        R = a('7N4s'),
        P = a('rHpw'),
        M = w.a.b5b0afa4,
        L = w.a.b772cd65,
        T = w.a.a5ce82a4,
        I = w.a.babfa32c,
        O = w.a.a2a2f98d,
        N = w.a.b4a361cf,
        A = w.a.ce494bb3,
        B = w.a.c783d45e,
        H = w.a.h306a357,
        z = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a(e, n) {
            var o
            return (
              r()(this, a),
              (o = t.call(this, e, n)),
              m()(l()(o), '_renderModalHeader', function (e) {
                return o.context.isModal
                  ? b.a.createElement(
                      E.a,
                      { style: j.header },
                      b.a.createElement(
                        x.b,
                        { align: 'center', size: 'title4', weight: 'heavy' },
                        o._isWelcomeFlow ? I : M,
                      ),
                    )
                  : e
              }),
              m()(l()(o), '_handleBackClick', function () {
                o.props.history.goBack()
              }),
              (o._isWelcomeFlow = 'true' === e.location.query.welcome),
              o
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.isModal,
                    t = this.props.history
                  return b.a.createElement(
                    f.b,
                    { history: t, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? I : M },
                    b.a.createElement(
                      E.a,
                      { style: j.root },
                      b.a.createElement(
                        x.b,
                        { align: 'center', color: 'gray700', style: [j.description, !e && j.descriptionMarginTop] },
                        this._isWelcomeFlow ? N : T,
                      ),
                      b.a.createElement(
                        E.a,
                        { style: [j.tweetExample, e && j.tweetExampleMarginHorizontal] },
                        b.a.createElement(_.a, { withTweetBorder: !0 }),
                      ),
                      b.a.createElement(x.b, { color: 'gray700', style: j.componentTitle, weight: 'bold' }, A),
                      b.a.createElement(E.a, { style: j.component }, b.a.createElement(v.a, null)),
                      b.a.createElement(x.b, { color: 'gray700', style: j.componentTitle, weight: 'bold' }, B),
                      b.a.createElement(E.a, { style: [j.component, j.colorPicker] }, b.a.createElement(C.a, null)),
                      b.a.createElement(x.b, { color: 'gray700', style: j.componentTitle, weight: 'bold' }, H),
                      b.a.createElement(
                        E.a,
                        { style: [j.component, j.backgroundPicker] },
                        b.a.createElement(k.a, null),
                      ),
                      b.a.createElement(
                        E.a,
                        { style: j.buttonContainer },
                        b.a.createElement(
                          F.a,
                          { onPress: this._handleBackClick, type: 'brandFilled' },
                          this._isWelcomeFlow ? O : L,
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      m()(z, 'contextType', R.b), (t.default = Object(S.a)(z, { page: 'display' }))
      var j = P.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space32, paddingHorizontal: e.spaces.space32 },
          header: { marginBottom: e.spaces.space12, marginTop: e.spaces.space32 },
          description: { marginBottom: e.spaces.space20 },
          descriptionMarginTop: { marginTop: e.spaces.space20 },
          componentTitle: { fontSize: e.fontSizes.subtext2, marginBottom: e.spaces.space4 },
          component: {
            backgroundColor: e.colors.gray0,
            borderRadius: e.borderRadii.xLarge,
            marginBottom: e.spaces.space12,
          },
          buttonContainer: { alignItems: 'center', marginTop: e.spaces.space16 },
          tweetExample: { marginBottom: e.spaces.space16 },
          tweetExampleMarginHorizontal: { marginHorizontal: e.spaces.space32 },
          backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
          colorPicker: { paddingVertical: e.spaces.space4 },
        }
      })
    },
    A2ey: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('2G9S'), a('ezhf')),
        b = a('ERkP'),
        f = a.n(b),
        g = a('HPNB'),
        w = a('v6aA'),
        v = a('P1r1'),
        k = a('rxPX'),
        C = Object(k.a)()
          .propsFromActions(function () {
            return { updateSettings: v.M }
          })
          .withAnalytics(),
        _ = a('3XMw'),
        E = a.n(_),
        S = a('huBF'),
        x = a('lzTJ'),
        F = a('rHpw'),
        R = a('cHvH'),
        P = a('fBvp'),
        M = x.f.ThemePaletteNames,
        L = E.a.ce8a8115,
        T = [
          { label: E.a.j59f0b93, accessibilityLabel: E.a.d3d48f39, backgroundName: M.light },
          { label: E.a.i76f67ed, backgroundName: M.dark },
          { label: E.a.c8f85960, backgroundName: M.darker },
        ],
        I = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_handleBackgroundChange', function (t) {
                var a = e.props,
                  n = a.analytics,
                  r = a.updateSettings
                n.scribe({ component: 'background_picker', element: 'option', action: t })
                var o = M[t]
                F.a.setPalette(o), r({ themeBackground: o }), y.c(t, e.context.featureSwitches)
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return f.a.createElement(R.a, null, function (t) {
                    var a = t.windowWidth
                    return f.a.createElement(S.a, { themeItem: 'background' }, function (t) {
                      return f.a.createElement(P.a, {
                        accessibilityLabel: L,
                        autoFocus: t,
                        layout: g.a.shouldRenderAsModal(a) ? 'row' : 'column',
                        onChange: e._handleBackgroundChange,
                        options: T,
                        value: F.a.theme.paletteName,
                      })
                    })
                  })
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      m()(I, 'contextType', w.a)
      var O = C(I)
      t.a = O
    },
    KNZn: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        l = a.n(c),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        y = a('KEM+'),
        b = a.n(y),
        f = (a('TJCb'), a('7x/C'), a('DZ+c'), a('vrRf'), a('uFXj'), a('ERkP')),
        g = a.n(f),
        w = a('RqPI'),
        v = a('rxPX'),
        k = Object(v.a)().propsFromState(function () {
          return { language: w.o }
        }),
        C = a('3XMw'),
        _ = a.n(C),
        E = a('fs1G'),
        S = a('rHpw'),
        x = a('BLtI'),
        F = a('MWbm'),
        R = 'Twitter',
        P = _.a.ea1c87a5({ mention: R }),
        M = {
          text: P,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, P.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: R,
                indices: [P.indexOf('@'), P.indexOf('@') + R.length + 1],
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
        L = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            i()(this, a),
              (n = t.call(this, e)),
              b()(u()(n), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var o = n.props,
              c = o.language,
              l = o.tweet
            return (n._tweet = r()(r()(r()({}, M), l), {}, { lang: c || 'en' })), n
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return g.a.createElement(
                    F.a,
                    { accessibilityHidden: !0, style: e && T.tweetBorder },
                    g.a.createElement(x.b, {
                      enableKeyboardShortcuts: !1,
                      onAnalyticsClick: E.a,
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
                    g.a.createElement(F.a, { style: S.a.absoluteFill }),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      b()(L, 'defaultProps', { tweet: M, withTweetBorder: !1 })
      var T = S.a.create(function (e) {
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
        I = k(L)
      t.a = I
    },
    fBvp: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return T
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('z84I'), a('ERkP')),
        b = a.n(y),
        f = a('yiKp'),
        g = a.n(f),
        w = (a('ho0z'), a('uFXj'), a('t62R')),
        v = a('IMYl'),
        k = a('cm6r'),
        C = a('rHpw'),
        _ = a('lzTJ'),
        E = a('k/Ka'),
        S = a('MWbm'),
        x = a('r7ya'),
        F = a('I4+6'),
        R = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            return (
              r()(this, a),
              (e = t.call(this)),
              m()(l()(e), '_radioRef', b.a.createRef()),
              m()(l()(e), '_handleChange', function (t) {
                var a = e.props,
                  n = a.backgroundName,
                  r = a.isSelected,
                  o = a.onChange
                o && !r && o(n)
              }),
              (e._selectedInteractiveStyles = F.a.generate({
                backgroundColor: C.a.theme.colors.transparent,
                color: C.a.theme.colors.primary,
                withFocusWithinFocusRing: !0,
              })),
              (e._unselectedInteractiveStyles = F.a.generate({
                backgroundColor: C.a.theme.colors.transparent,
                color: C.a.theme.colors.gray700,
                withFocusWithinFocusRing: !0,
              })),
              e
            )
          }
          return (
            i()(a, [
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
                    a = t.accessibilityLabel,
                    n = t.isSelected,
                    r = t.label,
                    o = t.name
                  return b.a.createElement(
                    k.a,
                    { focusable: !1, interactiveStyles: null, style: [P.root, this._getButtonStyles()] },
                    function (t) {
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(
                          k.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: P.radioOuterCircle,
                          },
                          b.a.createElement(
                            S.a,
                            { style: [P.radioInnerCircle, e._getCircleStyles()] },
                            n ? b.a.createElement(v.a, { style: P.checkMark }) : null,
                          ),
                        ),
                        b.a.createElement(
                          S.a,
                          { accessibilityHidden: !0, style: P.text },
                          b.a.createElement(w.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, r),
                        ),
                        Object(E.a)('input', {
                          accessibilityLabel: a || r,
                          checked: n,
                          name: o,
                          style: P.nativeControl,
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
                    a = e.isSelected
                  return {
                    backgroundColor: this._getPalette(t).cellBackground,
                    borderColor: a ? C.a.theme.colors.primary : C.a.theme.colors.gray200,
                    borderWidth: a ? '2px' : '1px',
                  }
                },
              },
              {
                key: '_getCircleStyles',
                value: function () {
                  var e = this.props,
                    t = e.backgroundName,
                    a = e.isSelected
                  return {
                    backgroundColor: a ? C.a.theme.colors.primary : C.a.theme.colors.transparent,
                    borderColor: a ? C.a.theme.colors.primary : this._getPalette(t).gray300,
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
            a
          )
        })(b.a.Component),
        P = C.a.create(function (e) {
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
        M = R,
        L = 1,
        T = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            return (
              r()(this, a),
              (e = t.call(this)),
              m()(l()(e), '_handleItemChanged', function (t) {
                return function () {
                  ;(0, e.props.onChange)(t)
                }
              }),
              (e._backgroundPickerName = 'background_picker_'.concat(L)),
              (L += 1),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.accessibilityLabel,
                    n = t.autoFocus,
                    r = t.layout,
                    o = t.options,
                    i = t.value
                  return b.a.createElement(
                    S.a,
                    { accessibilityLabel: a, accessibilityRole: 'radiogroup', style: 'row' === r ? I.row : I.column },
                    o.map(function (t) {
                      return b.a.createElement(M, {
                        accessibilityLabel: t.accessibilityLabel,
                        autoFocus: n && t.backgroundName === i,
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
            a
          )
        })(b.a.Component),
        I = C.a.create(function (e) {
          return { row: { flexDirection: 'row' }, column: { flexDirection: 'column' } }
        })
    },
    huBF: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('2G9S'), a('ERkP')),
        b = a.n(y),
        f = a('rxPX'),
        g = a('z2Pn'),
        w = Object(f.a)()
          .propsFromState(function () {
            return { themeFocus: g.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: g.k }
          }),
        v = a('MWbm'),
        k = a('3EFP'),
        C = w(
          (function (e) {
            u()(a, e)
            var t = p()(a)
            function a() {
              var e
              r()(this, a)
              for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                m()(l()(e), '_handleKeyDown', function (t) {
                  var a = e.props,
                    n = a.setThemeFocus,
                    r = a.themeItem
                  t.key === k.d || t.key === k.e ? n('') : n(r)
                }),
                m()(l()(e), '_handleMouseDown', function () {
                  e.props.setThemeFocus('')
                }),
                e
              )
            }
            return (
              i()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.children,
                      a = e.themeFocus,
                      n = e.themeItem === a
                    return b.a.createElement(
                      v.a,
                      { onKeyDown: this._handleKeyDown, onMouseDown: this._handleMouseDown },
                      t(n),
                    )
                  },
                },
              ]),
              a
            )
          })(b.a.Component),
        )
      t.a = C
    },
    uI9t: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('5Yy7'),
        l = a.n(c),
        s = a('2VqO'),
        u = a.n(s),
        d = a('KEM+'),
        p = a.n(d),
        h = (a('z84I'), a('ERkP')),
        m = a.n(h),
        y = a('yiKp'),
        b = a.n(y),
        f = a('1Pcy'),
        g = a.n(f),
        w = (a('2G9S'), a('ho0z'), a('I4+6')),
        v = a('cm6r'),
        k = a('rHpw'),
        C = a('k/Ka'),
        _ = a('MWbm'),
        E = a('x0mb'),
        S = a('IMYl'),
        x = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(g()(e), '_radioRef', m.a.createRef()),
              p()(g()(e), '_handleChange', function () {
                var t = e.props,
                  a = t.colorName
                ;(0, t.onChange)(a)
              }),
              e
            )
          }
          return (
            i()(a, [
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
                    a = e.colorName,
                    n = e.isSelected,
                    r = e.name,
                    o = e.style,
                    i = k.a.theme.colors[a],
                    c = w.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return m.a.createElement(
                    _.a,
                    { style: [F.container, o] },
                    m.a.createElement(
                      v.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [F.choice, F.choiceContainer] },
                      m.a.createElement(E.a, { style: [F.choice, { color: i }] }),
                      Object(C.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: n,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: F.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    n &&
                      m.a.createElement(
                        _.a,
                        { style: [F.choice, F.checkMarkContainer] },
                        m.a.createElement(S.a, { style: [F.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(m.a.Component),
        F = k.a.create(function (e) {
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
              b()({}, k.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        R = x,
        P = 1,
        M = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            var e
            return r()(this, a), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(P, '_LABEL')), (P += 1), e
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.accessibilityLabel,
                    n = t.autoFocus,
                    r = t.layout,
                    o = t.onChange,
                    i = t.options,
                    c = t.value,
                    l = 'two-rows' === r,
                    s = [L.root, l && L.flexWrap],
                    u = l ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return m.a.createElement(
                    _.a,
                    { accessibilityLabel: a, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var a = t.accessibilityLabel,
                        r = t.colorName
                      return m.a.createElement(R, {
                        accessibilityLabel: a,
                        autoFocus: n && c === r,
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
            a
          )
        })(m.a.Component)
      p()(M, 'defaultProps', { layout: 'one-row' })
      var L = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = M
    },
    vSJw: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('2G9S'), a('ERkP')),
        b = a.n(y),
        f = a('HPNB'),
        g = a('P1r1'),
        w = a('rxPX'),
        v = Object(w.a)()
          .propsFromActions(function () {
            return { updateSettings: g.M }
          })
          .withAnalytics(),
        k = a('3XMw'),
        C = a.n(k),
        _ = a('huBF'),
        E = a('lzTJ'),
        S = a('rHpw'),
        x = a('cHvH'),
        F = a('uI9t'),
        R = E.f.ThemePrimaryColorNames,
        P = C.a.aefc5b20,
        M = [
          { accessibilityLabel: C.a.a52d0fdd, colorName: R.blue500 },
          { accessibilityLabel: C.a.d818cdd5, colorName: R.yellow500 },
          { accessibilityLabel: C.a.fee1cd64, colorName: R.magenta500 },
          { accessibilityLabel: C.a.cbed7fb2, colorName: R.purple500 },
          { accessibilityLabel: C.a.g697ec02, colorName: R.orange500 },
          { accessibilityLabel: C.a.a7c22049, colorName: R.green500 },
        ],
        L = v(
          (function (e) {
            u()(a, e)
            var t = p()(a)
            function a() {
              var e
              r()(this, a)
              for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                m()(l()(e), '_handleColorChange', function (t) {
                  var a = e.props,
                    n = a.analytics,
                    r = a.updateSettings
                  n.scribe({ component: 'color_picker', element: 'option', action: t }),
                    r({ themeColor: R[t] }),
                    S.a.setPrimaryColor(R[t])
                }),
                e
              )
            }
            return (
              i()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return b.a.createElement(x.a, null, function (t) {
                      var a = t.windowWidth
                      return b.a.createElement(_.a, { themeItem: 'color' }, function (t) {
                        return b.a.createElement(F.a, {
                          accessibilityLabel: P,
                          autoFocus: t,
                          layout: f.a.shouldRenderAsModal(a) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: M,
                          value: S.a.theme.primaryColorName,
                        })
                      })
                    })
                  },
                },
              ]),
              a
            )
          })(b.a.Component),
        )
      t.a = L
    },
  },
])
//# sourceMappingURL=WIPED
