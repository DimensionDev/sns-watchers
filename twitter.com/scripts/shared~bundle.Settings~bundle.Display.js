;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
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
        h = a('2VqO'),
        m = a.n(h),
        p = a('KEM+'),
        y = a.n(p),
        f = (a('+KXO'), a('uFXj'), a('2G9S'), a('vrRf'), a('ERkP')),
        b = a.n(f),
        g = a('P1r1'),
        v = a('RqPI'),
        w = a('rxPX'),
        k = Object(w.a)()
          .propsFromState(function () {
            return { language: v.o, scale: g.z }
          })
          .propsFromActions(function () {
            return { updateSettings: g.N }
          })
          .withAnalytics(),
        C = a('3XMw'),
        _ = a.n(C),
        S = a('huBF'),
        x = a('MWbm'),
        E = a('lzTJ'),
        R = a('rHpw'),
        F = a('t62R'),
        P = a('9RkS'),
        L = E.f.ThemeScaleNames,
        I = Object.keys(L),
        N = I.length - 1,
        O = _.a.d8680056,
        M = _.a.eed02405,
        A = _.a.j59f0b93,
        T = _.a.b81aaad8,
        j = _.a.c704488f,
        B =
          ((n = {}),
          y()(n, L.xSmall, O),
          y()(n, L.small, M),
          y()(n, L.normal, A),
          y()(n, L.large, T),
          y()(n, L.xLarge, j),
          n),
        z = [O, M, A, T, j],
        D = _.a.e46dffa0,
        H = (function (e) {
          d()(a, e)
          var t = m()(a)
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
                  o = I[t]
                n.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  R.a.setScale(L[o])
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
                  return b.a.createElement(S.a, { themeItem: 'textSize' }, function (t) {
                    return b.a.createElement(
                      x.a,
                      { style: K.sliderContainer },
                      b.a.createElement(F.b, { size: 'subtext2' }, 'Aa'),
                      b.a.createElement(
                        x.a,
                        { style: K.slider },
                        b.a.createElement(P.a, {
                          accessibilityLabel: D,
                          accessibilityLabelValueText: B[R.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: z,
                          max: N,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: I.indexOf(R.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      b.a.createElement(F.b, { size: 'headline1' }, 'Aa'),
                    )
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        K = R.a.create(function (e) {
          return {
            sliderContainer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space16 },
            slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 },
          }
        }),
        W = k(H)
      t.a = W
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
        h = a.n(d),
        m = a('KEM+'),
        p = a.n(m),
        y = (a('2G9S'), a('ezhf')),
        f = a('ERkP'),
        b = a.n(f),
        g = a('HPNB'),
        v = a('v6aA'),
        w = a('P1r1'),
        k = a('rxPX'),
        C = Object(k.a)()
          .propsFromActions(function () {
            return { updateSettings: w.N }
          })
          .withAnalytics(),
        _ = a('3XMw'),
        S = a.n(_),
        x = a('huBF'),
        E = a('lzTJ'),
        R = a('rHpw'),
        F = a('cHvH'),
        P = a('fBvp'),
        L = E.f.ThemePaletteNames,
        I = S.a.ce8a8115,
        N = [
          { label: S.a.j59f0b93, accessibilityLabel: S.a.d3d48f39, backgroundName: L.light },
          { label: S.a.i76f67ed, backgroundName: L.dark },
          { label: S.a.c8f85960, backgroundName: L.darker },
        ],
        O = (function (e) {
          u()(a, e)
          var t = h()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(l()(e), '_handleBackgroundChange', function (t) {
                var a = e.props,
                  n = a.analytics,
                  r = a.updateSettings
                n.scribe({ component: 'background_picker', element: 'option', action: t })
                var o = L[t]
                R.a.setPalette(o), r({ themeBackground: o }), y.c(t, e.context.featureSwitches)
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
                  return b.a.createElement(F.a, null, function (t) {
                    var a = t.windowWidth
                    return b.a.createElement(x.a, { themeItem: 'background' }, function (t) {
                      return b.a.createElement(P.a, {
                        accessibilityLabel: I,
                        autoFocus: t,
                        layout: g.a.shouldRenderAsModal(a) ? 'row' : 'column',
                        onChange: e._handleBackgroundChange,
                        options: N,
                        value: R.a.theme.paletteName,
                      })
                    })
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      p()(O, 'contextType', v.a)
      var M = C(O)
      t.a = M
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
        h = a.n(d),
        m = a('2VqO'),
        p = a.n(m),
        y = a('KEM+'),
        f = a.n(y),
        b = (a('TJCb'), a('7x/C'), a('DZ+c'), a('vrRf'), a('uFXj'), a('ERkP')),
        g = a.n(b),
        v = a('RqPI'),
        w = a('rxPX'),
        k = Object(w.a)().propsFromState(function () {
          return { language: v.o }
        }),
        C = a('3XMw'),
        _ = a.n(C),
        S = a('fs1G'),
        x = a('rHpw'),
        E = a('BLtI'),
        R = a('MWbm'),
        F = 'Twitter',
        P = _.a.ea1c87a5({ mention: F }),
        L = {
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
                text: F,
                indices: [P.indexOf('@'), P.indexOf('@') + F.length + 1],
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
        I = (function (e) {
          h()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            i()(this, a),
              (n = t.call(this, e)),
              f()(u()(n), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var o = n.props,
              c = o.language,
              l = o.tweet
            return (n._tweet = r()(r()(r()({}, L), l), {}, { lang: c || 'en' })), n
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return g.a.createElement(
                    R.a,
                    { accessibilityHidden: !0, style: e && N.tweetBorder },
                    g.a.createElement(E.b, {
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
                    g.a.createElement(R.a, { style: x.a.absoluteFill }),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      f()(I, 'defaultProps', { tweet: L, withTweetBorder: !1 })
      var N = x.a.create(function (e) {
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
        O = k(I)
      t.a = O
    },
    fBvp: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return N
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
        h = a.n(d),
        m = a('KEM+'),
        p = a.n(m),
        y = (a('z84I'), a('ERkP')),
        f = a.n(y),
        b = a('yiKp'),
        g = a.n(b),
        v = (a('ho0z'), a('uFXj'), a('t62R')),
        w = a('IMYl'),
        k = a('cm6r'),
        C = a('rHpw'),
        _ = a('lzTJ'),
        S = a('k/Ka'),
        x = a('MWbm'),
        E = a('r7ya'),
        R = a('I4+6'),
        F = (function (e) {
          u()(a, e)
          var t = h()(a)
          function a() {
            var e
            return (
              r()(this, a),
              (e = t.call(this)),
              p()(l()(e), '_radioRef', f.a.createRef()),
              p()(l()(e), '_handleChange', function (t) {
                var a = e.props,
                  n = a.backgroundName,
                  r = a.isSelected,
                  o = a.onChange
                o && !r && o(n)
              }),
              (e._selectedInteractiveStyles = R.a.generate({
                backgroundColor: C.a.theme.colors.transparent,
                color: C.a.theme.colors.primary,
                withFocusWithinFocusRing: !0,
              })),
              (e._unselectedInteractiveStyles = R.a.generate({
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
                  return f.a.createElement(
                    k.a,
                    { focusable: !1, interactiveStyles: null, style: [P.root, this._getButtonStyles()] },
                    function (t) {
                      return f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(
                          k.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: P.radioOuterCircle,
                          },
                          f.a.createElement(
                            x.a,
                            { style: [P.radioInnerCircle, e._getCircleStyles()] },
                            n ? f.a.createElement(w.a, { style: P.checkMark }) : null,
                          ),
                        ),
                        f.a.createElement(
                          x.a,
                          { accessibilityHidden: !0, style: P.text },
                          f.a.createElement(v.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, r),
                        ),
                        Object(S.a)('input', {
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
                  return e === _.b.dark ? E.a : e === _.b.darker ? E.b : E.c
                },
              },
            ]),
            a
          )
        })(f.a.Component),
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
        L = F,
        I = 1,
        N = (function (e) {
          u()(a, e)
          var t = h()(a)
          function a() {
            var e
            return (
              r()(this, a),
              (e = t.call(this)),
              p()(l()(e), '_handleItemChanged', function (t) {
                return function () {
                  ;(0, e.props.onChange)(t)
                }
              }),
              (e._backgroundPickerName = 'background_picker_'.concat(I)),
              (I += 1),
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
                  return f.a.createElement(
                    x.a,
                    { accessibilityLabel: a, accessibilityRole: 'radiogroup', style: 'row' === r ? O.row : O.column },
                    o.map(function (t) {
                      return f.a.createElement(L, {
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
        })(f.a.Component),
        O = C.a.create(function (e) {
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
        h = a.n(d),
        m = a('KEM+'),
        p = a.n(m),
        y = (a('2G9S'), a('ERkP')),
        f = a.n(y),
        b = a('rxPX'),
        g = a('z2Pn'),
        v = Object(b.a)()
          .propsFromState(function () {
            return { themeFocus: g.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: g.k }
          }),
        w = a('MWbm'),
        k = a('3EFP'),
        C = v(
          (function (e) {
            u()(a, e)
            var t = h()(a)
            function a() {
              var e
              r()(this, a)
              for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                p()(l()(e), '_handleKeyDown', function (t) {
                  var a = e.props,
                    n = a.setThemeFocus,
                    r = a.themeItem
                  t.key === k.d || t.key === k.e ? n('') : n(r)
                }),
                p()(l()(e), '_handleMouseDown', function () {
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
                    return f.a.createElement(
                      w.a,
                      { onKeyDown: this._handleKeyDown, onMouseDown: this._handleMouseDown },
                      t(n),
                    )
                  },
                },
              ]),
              a
            )
          })(f.a.Component),
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
        h = a.n(d),
        m = (a('z84I'), a('ERkP')),
        p = a.n(m),
        y = a('yiKp'),
        f = a.n(y),
        b = a('1Pcy'),
        g = a.n(b),
        v = (a('2G9S'), a('ho0z'), a('I4+6')),
        w = a('cm6r'),
        k = a('rHpw'),
        C = a('k/Ka'),
        _ = a('MWbm'),
        S = a('x0mb'),
        x = a('IMYl'),
        E = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(g()(e), '_radioRef', p.a.createRef()),
              h()(g()(e), '_handleChange', function () {
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
                    c = v.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    _.a,
                    { style: [R.container, o] },
                    p.a.createElement(
                      w.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [R.choice, R.choiceContainer] },
                      p.a.createElement(S.a, { style: [R.choice, { color: i }] }),
                      Object(C.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: n,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: R.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    n &&
                      p.a.createElement(
                        _.a,
                        { style: [R.choice, R.checkMarkContainer] },
                        p.a.createElement(x.a, { style: [R.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(p.a.Component),
        R = k.a.create(function (e) {
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
            nativeControl: f()(
              f()({}, k.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        F = E,
        P = 1,
        L = (function (e) {
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
                    s = [I.root, l && I.flexWrap],
                    u = l ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    _.a,
                    { accessibilityLabel: a, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var a = t.accessibilityLabel,
                        r = t.colorName
                      return p.a.createElement(F, {
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
        })(p.a.Component)
      h()(L, 'defaultProps', { layout: 'one-row' })
      var I = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = L
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
        h = a.n(d),
        m = a('KEM+'),
        p = a.n(m),
        y = (a('2G9S'), a('ERkP')),
        f = a.n(y),
        b = a('HPNB'),
        g = a('P1r1'),
        v = a('rxPX'),
        w = Object(v.a)()
          .propsFromActions(function () {
            return { updateSettings: g.N }
          })
          .withAnalytics(),
        k = a('3XMw'),
        C = a.n(k),
        _ = a('huBF'),
        S = a('lzTJ'),
        x = a('rHpw'),
        E = a('cHvH'),
        R = a('uI9t'),
        F = S.f.ThemePrimaryColorNames,
        P = C.a.aefc5b20,
        L = [
          { accessibilityLabel: C.a.a52d0fdd, colorName: F.blue500 },
          { accessibilityLabel: C.a.d818cdd5, colorName: F.yellow500 },
          { accessibilityLabel: C.a.fee1cd64, colorName: F.magenta500 },
          { accessibilityLabel: C.a.cbed7fb2, colorName: F.purple500 },
          { accessibilityLabel: C.a.g697ec02, colorName: F.orange500 },
          { accessibilityLabel: C.a.a7c22049, colorName: F.green500 },
        ],
        I = w(
          (function (e) {
            u()(a, e)
            var t = h()(a)
            function a() {
              var e
              r()(this, a)
              for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                p()(l()(e), '_handleColorChange', function (t) {
                  var a = e.props,
                    n = a.analytics,
                    r = a.updateSettings
                  n.scribe({ component: 'color_picker', element: 'option', action: t }),
                    r({ themeColor: F[t] }),
                    x.a.setPrimaryColor(F[t])
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
                    return f.a.createElement(E.a, null, function (t) {
                      var a = t.windowWidth
                      return f.a.createElement(_.a, { themeItem: 'color' }, function (t) {
                        return f.a.createElement(R.a, {
                          accessibilityLabel: P,
                          autoFocus: t,
                          layout: b.a.shouldRenderAsModal(a) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: L,
                          value: x.a.theme.primaryColorName,
                        })
                      })
                    })
                  },
                },
              ]),
              a
            )
          })(f.a.Component),
        )
      t.a = I
    },
  },
])
//# sourceMappingURL=WIPED
