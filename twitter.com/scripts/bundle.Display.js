;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53, 12],
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
        w = (n('+KXO'), n('uFXj'), n('2G9S'), n('vrRf'), n('ERkP')),
        g = n.n(w),
        v = n('P1r1'),
        b = n('RqPI'),
        y = n('rxPX'),
        _ = Object(y.a)()
          .propsFromState(function () {
            return { language: b.p, scale: v.y }
          })
          .propsFromActions(function () {
            return { updateSettings: v.M }
          })
          .withAnalytics(),
        C = n('3XMw'),
        T = n.n(C),
        k = n('huBF'),
        E = n('MWbm'),
        x = n('lzTJ'),
        I = n('rHpw'),
        S = n('t62R'),
        L = n('9RkS'),
        P = x.f.ThemeScaleNames,
        R = Object.keys(P),
        O = R.length - 1,
        M = T.a.d8680056,
        A = T.a.eed02405,
        F = T.a.j59f0b93,
        D = T.a.b81aaad8,
        B = T.a.c704488f,
        H =
          ((a = {}),
          f()(a, P.xSmall, M),
          f()(a, P.small, A),
          f()(a, P.normal, F),
          f()(a, P.large, D),
          f()(a, P.xLarge, B),
          a),
        W = [M, A, F, D, B],
        N = T.a.e46dffa0,
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
                  o = R[t]
                a.scribe({ component: 'text_size_picker', element: 'scale', action: o }),
                  r({ scale: o }),
                  I.a.setScale(P[o])
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
                  return g.a.createElement(k.a, { themeItem: 'textSize' }, function (t) {
                    return g.a.createElement(
                      E.a,
                      { style: z.sliderContainer },
                      g.a.createElement(S.b, { size: 'subtext2' }, 'Aa'),
                      g.a.createElement(
                        E.a,
                        { style: z.slider },
                        g.a.createElement(L.a, {
                          accessibilityLabel: N,
                          accessibilityLabelValueText: H[I.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: W,
                          max: O,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: R.indexOf(I.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      g.a.createElement(S.b, { size: 'headline1' }, 'Aa'),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        z = I.a.create(function (e) {
          return {
            sliderContainer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space16 },
            slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 },
          }
        }),
        j = _(U)
      t.a = j
    },
    '6rLm': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DisplayScreen', function () {
          return W
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
        f = (n('1t7P'), n('jQ/y'), n('ERkP')),
        w = n.n(f),
        g = n('jHSc'),
        v = n('3XMw'),
        b = n.n(v),
        y = n('5hXE'),
        _ = n('A2ey'),
        C = n('vSJw'),
        T = n('KNZn'),
        k = n('MWbm'),
        E = n('Irs7'),
        x = n('t62R'),
        I = n('/yvb'),
        S = n('7N4s'),
        L = n('rHpw'),
        P = b.a.b5b0afa4,
        R = b.a.b772cd65,
        O = b.a.a5ce82a4,
        M = b.a.babfa32c,
        A = b.a.a2a2f98d,
        F = b.a.b4a361cf,
        D = b.a.ce494bb3,
        B = b.a.c783d45e,
        H = b.a.h306a357,
        W = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              h()(c()(o), '_renderModalHeader', function (e) {
                return o.context.isModal
                  ? w.a.createElement(
                      k.a,
                      { style: N.header },
                      w.a.createElement(
                        x.b,
                        { align: 'center', size: 'title4', weight: 'heavy' },
                        o._isWelcomeFlow ? M : P,
                      ),
                    )
                  : e
              }),
              h()(c()(o), '_handleBackClick', function () {
                o.props.history.goBack()
              }),
              (o._isWelcomeFlow = 'true' === e.location.query.welcome),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.isModal,
                    t = this.props.history
                  return w.a.createElement(
                    g.b,
                    { history: t, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? M : P },
                    w.a.createElement(
                      k.a,
                      { style: N.root },
                      w.a.createElement(
                        x.b,
                        { align: 'center', color: 'gray700', style: [N.description, !e && N.descriptionMarginTop] },
                        this._isWelcomeFlow ? F : O,
                      ),
                      w.a.createElement(
                        k.a,
                        { style: [N.tweetExample, e && N.tweetExampleMarginHorizontal] },
                        w.a.createElement(T.a, { withTweetBorder: !0 }),
                      ),
                      w.a.createElement(x.b, { color: 'gray700', style: N.componentTitle, weight: 'bold' }, D),
                      w.a.createElement(k.a, { style: N.component }, w.a.createElement(y.a, null)),
                      w.a.createElement(x.b, { color: 'gray700', style: N.componentTitle, weight: 'bold' }, B),
                      w.a.createElement(k.a, { style: [N.component, N.colorPicker] }, w.a.createElement(C.a, null)),
                      w.a.createElement(x.b, { color: 'gray700', style: N.componentTitle, weight: 'bold' }, H),
                      w.a.createElement(
                        k.a,
                        { style: [N.component, N.backgroundPicker] },
                        w.a.createElement(_.a, null),
                      ),
                      w.a.createElement(
                        k.a,
                        { style: N.buttonContainer },
                        w.a.createElement(
                          I.a,
                          { onPress: this._handleBackClick, type: 'brandFilled' },
                          this._isWelcomeFlow ? A : R,
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      h()(W, 'contextType', S.b), (t.default = Object(E.a)(W, { page: 'display' }))
      var N = L.a.create(function (e) {
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
        w = n('ERkP'),
        g = n.n(w),
        v = n('HPNB'),
        b = n('v6aA'),
        y = n('P1r1'),
        _ = n('rxPX'),
        C = Object(_.a)()
          .propsFromActions(function () {
            return { updateSettings: y.M }
          })
          .withAnalytics(),
        T = n('3XMw'),
        k = n.n(T),
        E = n('huBF'),
        x = n('lzTJ'),
        I = n('rHpw'),
        S = n('cHvH'),
        L = n('fBvp'),
        P = x.f.ThemePaletteNames,
        R = k.a.ce8a8115,
        O = [
          { label: k.a.j59f0b93, accessibilityLabel: k.a.d3d48f39, backgroundName: P.light },
          { label: k.a.i76f67ed, backgroundName: P.dark },
          { label: k.a.c8f85960, backgroundName: P.darker },
        ],
        M = (function (e) {
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
                  return g.a.createElement(S.a, null, function (t) {
                    var n = t.windowWidth
                    return g.a.createElement(E.a, { themeItem: 'background' }, function (t) {
                      return g.a.createElement(L.a, {
                        accessibilityLabel: R,
                        autoFocus: t,
                        layout: v.a.shouldRenderAsModal(n) ? 'row' : 'column',
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
      h()(M, 'contextType', b.a)
      var A = C(M)
      t.a = A
    },
    BLtI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Kn
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
        w = n.n(f),
        g = n('2VqO'),
        v = n.n(g),
        b = n('KEM+'),
        y = n.n(b),
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
        T = n('rcen'),
        k = n('Rp9C'),
        E = n('MWbm'),
        x = n('Irs7'),
        I = n('htQn'),
        S = n('t62R'),
        L = n('OOKO'),
        P = n('/yvb'),
        R = n('rHpw'),
        O = n('v6aA'),
        M = n('Lsrn'),
        A = n('k/Ka'),
        F = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(A.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      var D = F,
        B = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(A.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      var H = B,
        W = n('OKMS'),
        N = n('7Mjr'),
        U = (function (e) {
          w()(n, e)
          var t = v()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_scribeAction', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.destinationUrl,
                  o = n.note
                a.scribe({ action: t, data: { items: [k.a.getBirdwatchItem(null == o ? void 0 : o.rest_id, r)] } })
              }),
              y()(h()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              y()(h()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return C.a.createElement(D, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return C.a.createElement(H, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return C.a.createElement(W.a, { style: z.birdwatchIcon, testID: 'icon-birdwatch-fill' })
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
                      I.a,
                      {
                        link: l,
                        onPress: c,
                        style: z.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!l,
                      },
                      C.a.createElement(
                        E.a,
                        { style: z.headerContainer },
                        C.a.createElement(
                          E.a,
                          { style: [z.headerTextContainer, !t && z.headerTextAndThumbnailContainer] },
                          this._getBirdwatchIcon(r),
                          C.a.createElement(S.b, { size: 'subtext1', style: z.birdwatchLabel, weight: 'bold' }, i),
                        ),
                        t ? null : C.a.createElement(N.a, { style: z.icon, testID: 'icon-arrow-right' }),
                      ),
                      o
                        ? C.a.createElement(T.a, {
                            entities: o.entities,
                            size: 'body',
                            style: z.subtitle,
                            text: o.text,
                          })
                        : null,
                      t
                        ? C.a.createElement(
                            C.a.Fragment,
                            null,
                            C.a.createElement(L.a, { spacing: 'space2' }),
                            C.a.createElement(
                              E.a,
                              { style: z.callToActionContainer },
                              C.a.createElement(S.b, { size: 'subtext1' }, t.prompt),
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
                      ? C.a.createElement(T.a, {
                          color: 'gray700',
                          entities: a.entities,
                          size: 'subtext2',
                          style: z.footer,
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
      y()(U, 'contextType', O.a)
      var z = R.a.create(function (e) {
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
        j = Object(x.a)(U, { element: 'birdwatch_pivot' }),
        V = n('6/RC'),
        q = n('3XMw'),
        K = n.n(q),
        X = n('5S/X')
      n('jwue'), n('+oxZ'), n('z84I')
      function G(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(G.prototype = Object.create(Error.prototype)), (G.prototype.constructor = G)
      var Q = function (e, t) {
          if (!e) throw new G(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
        },
        Y = n('E6XO'),
        J = n('sXY3'),
        Z = n('tn7R'),
        $ = n('+d3d'),
        ee = n('oECP'),
        te = n('fs1G'),
        ne = {},
        ae = 0,
        re = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        oe = function () {
          Object(J.a)(ne).forEach(function (e, t) {
            var n = r()(e, 2),
              a = n[0],
              o = n[1],
              i = Object(Z.a)(o),
              l = i.length
            i.forEach(function (e) {
              Object(J.a)(re).map(function (t) {
                var n = r()(t, 2),
                  o = n[0],
                  i = r()(n[1], 2),
                  c = i[0],
                  s = i[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(l) &&
                  c in e &&
                  s in e &&
                  Object(Y.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, o),
                    { duration_ms: e[c] - e[s] },
                  )
              })
            })
          }),
            Object(Y.a)(),
            (ne = {})
        },
        ie = Object($.a)(oe, 2e4) || oe,
        le = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Q(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((ae += 1), (a = e.__lifecycleIdentifier = ae)),
            (ne[n] && ne[n][a]) || (ne[n] = c()(c()({}, ne[n]), {}, y()({}, a, {}))),
            [n, a]
          )
        },
        ce = function (e, t, n, a) {
          ne[e][t][n] = a
        },
        se = V.canUseDOM
          ? function (e) {
              var t = {
                UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || te.a,
                componentDidMount: e.prototype.componentDidMount || te.a,
                UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || te.a,
                componentDidUpdate: e.prototype.componentDidUpdate || te.a,
                componentWillUnmount: e.prototype.componentWillUnmount || te.a,
              }
              return (
                (e.prototype.UNSAFE_componentWillMount = function () {
                  for (
                    var e = le(this, !0),
                      n = r()(e, 2),
                      a = n[0],
                      o = n[1],
                      i = arguments.length,
                      l = new Array(i),
                      c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c]
                  t.UNSAFE_componentWillMount.apply(this, l), ce(a, o, 'willMount', Date.now())
                }),
                (e.prototype.componentDidMount = function () {
                  for (
                    var e = le(this), n = r()(e, 2), a = n[0], o = n[1], i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c]
                  t.componentDidMount.apply(this, l), ce(a, o, 'didMount', Date.now()), ie()
                }),
                (e.prototype.UNSAFE_componentWillUpdate = function () {
                  for (
                    var e = le(this, !0),
                      n = r()(e, 2),
                      a = n[0],
                      o = n[1],
                      i = arguments.length,
                      l = new Array(i),
                      c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c]
                  t.UNSAFE_componentWillUpdate.apply(this, l), ce(a, o, 'willUpdate', Date.now())
                }),
                (e.prototype.componentDidUpdate = function () {
                  for (
                    var e = le(this), n = r()(e, 2), a = n[0], o = n[1], i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c]
                  t.componentDidUpdate.apply(this, l), ce(a, o, 'didUpdate', Date.now()), ie()
                }),
                (e.prototype.componentWillUnmount = function () {
                  for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                  t.componentWillUnmount.apply(this, n), ie()
                }),
                e
              )
            }
          : ee.a,
        ue = n('caTy'),
        de = n('Y6L+'),
        pe = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        me = Object(pe.a)({
          loader: function () {
            return n.e(180).then(n.bind(null, 'mL9d'))
          },
        }),
        he = n('m3Bd'),
        fe = n.n(he),
        we = n('xM7j'),
        ge = n('LKCq'),
        ve = ['onActionClick'],
        be = 'inner_tombstone'
      function ye(e) {
        var t,
          n = e.children,
          a = e.config,
          r = e.nativeID,
          o = Object(x.b)()
        if (X.b) return n
        var l = (null === (t = a.richRevealText) || void 0 === t ? void 0 : t.text) || a.revealText,
          c = a.richText
            ? C.a.createElement(T.a, {
                alignment: a.richText.alignment,
                entities: a.richText.entities,
                onEntityClick: function () {
                  o.scribe({ action: 'open_link', component: be })
                },
                rtl: a.richText.rtl,
                text: a.richText.text,
              })
            : a.text
        return C.a.createElement(
          E.a,
          { nativeID: r },
          l
            ? C.a.createElement(
                ge.a,
                {
                  label: c,
                  onReveal: function () {
                    o.scribe({ action: 'click', component: be })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      n = fe()(e, ve)
                    return C.a.createElement(we.a, i()({}, n, { inline: !0, onClick: t }))
                  },
                  revealLabel: l,
                },
                n,
              )
            : C.a.createElement(we.a, { inline: !0 }, c),
        )
      }
      var _e = n('PeW/'),
        Ce = n('3IPs'),
        Te = (n('1t7P'), n('jQ/y'), n('PbbS')),
        ke = n('LWCC'),
        Ee = n('JUsM'),
        xe = R.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        Ie = function (e) {
          var t = e.defaultRef,
            n = e.topic,
            a = e.topicFollowPrompt,
            r = (null == a ? void 0 : a.description) || {},
            o = r.entities,
            i = r.text
          return C.a.createElement(
            E.a,
            { style: xe.topicFollowPrompt },
            C.a.createElement(Ee.a, {
              containerRef: t,
              primaryAction: C.a.createElement(ke.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: Te.a.FollowTopic,
                topic: n,
              }),
              text: C.a.createElement(T.a, { entities: o, text: i }),
            }),
          )
        },
        Se = n('SrIh'),
        Le = n('gdQ4'),
        Pe = n('qbku'),
        Re = n('tocL'),
        Oe = 'analyticsButton',
        Me = 'promotedIndicator',
        Ae = 'readerModeBottomBar',
        Fe = 'socialContext',
        De = 'tweet',
        Be = n('X04g'),
        He = n('v/3V'),
        We = (n('Ysgh'), n('RqPI')),
        Ne = n('3zvM'),
        Ue = n('lMB6'),
        ze = n('iChn'),
        je = Object(Ne.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, n) {
              return e.Tweets.fetchTranslation(t, n).then(Ve)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Ve = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(ze.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        qe = Ue.a.register(je),
        Ke = n('rxPX'),
        Xe = n('0KEI'),
        Ge = function (e, t) {
          return qe.select(e, t.tweetId)
        },
        Qe = function (e, t) {
          return qe.selectFetchStatus(e, t.tweetId)
        },
        Ye = Object(Ke.a)()
          .propsFromState(function () {
            return { translation: Ge, translationFetchStatus: Qe, userLanguage: We.p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Xe.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: qe.fetchOneIfNeeded,
            }
          }),
        Je = n('PdwO'),
        Ze = n('cTG8'),
        $e = n('oQhu'),
        et = n('YeIG'),
        tt = n('Gpeq'),
        nt = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'hitHighlights',
          'isFocal',
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
        at = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'isFocal',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        rt = K.a.b4947556,
        ot = (function (e) {
          w()(n, e)
          var t = v()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_fetchTranslation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(n())
              }),
              y()(h()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  n = t.disableTranslation,
                  a = t.displayTextRange,
                  r = t.entities,
                  o = t.isFocal,
                  i = t.lang,
                  l = t.supplementalLang,
                  c = t.text,
                  s = t.userLanguage
                return (
                  e._getMemoizedDisableTranslation(n, a, r, c, i, l, s) ||
                  !(o || e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled'))
                )
              }),
              y()(h()(e), '_renderTranslation', function () {
                var t = e.props,
                  n =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.hitHighlights,
                    t.isFocal,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  a = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, fe()(t, nt))
                if (n)
                  return C.a.createElement(
                    Ze.a,
                    i()({}, a, {
                      displayTextRange: e._getMemoizedDisplayTextRange(n.text),
                      entities: n.entities,
                      lang: n.destinationLanguage,
                      text: n.text,
                    }),
                  )
              }),
              y()(
                h()(e),
                '_getMemoizedDisplayTextRange',
                Object($e.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              y()(
                h()(e),
                '_getMemoizedDisableTranslation',
                Object($e.a)(function (e, t, n, a, r, o, i) {
                  var l = i && Object(tt.c)(r.split('-')[0]) !== Object(tt.c)(i.split('-')[0])
                  return e || !!o || !l || !Object(tt.b)({ displayTextRange: t, entities: n, text: a, language: r })
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
                      n && !Object(et.a)(i) && o.isTrue('responsive_web_alt_text_translations_enabled') && n(i)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    n = (e.isFocal, e.onMediaTranslation, e.style),
                    a = (e.supplementalLang, e.translation),
                    r = e.translationFetchStatus,
                    o = e.tweetId,
                    i = (e.userLanguage, e.withOriginalText),
                    l = fe()(e, at)
                  return C.a.createElement(
                    Je.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: o,
                      originLanguage: a && a.localizedSourceLanguage,
                      style: n,
                      translateButtonText: rt,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: r,
                      withOriginalText: i,
                    },
                    C.a.createElement(Ze.a, l),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      y()(ot, 'contextType', O.a)
      var it = Ye(ot),
        lt = n('2qZs'),
        ct = n('wwsH'),
        st = { viewType: 'birdwatch' },
        ut = R.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        dt = function (e) {
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
            C.a.createElement(ct.a, {
              Icon: lt.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: st,
              link: r,
              onPress: t,
              style: ut.birdwatchIcon,
            })
          )
        },
        pt = n('xXop'),
        mt = n('xrkw'),
        ht = n('mqpi'),
        ft = K.a.g1fa869c,
        wt = (function (e) {
          w()(n, e)
          var t = v()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_shouldDisable', ht.b.bind(null, e.context.featureSwitches)),
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
                  return !this._shouldDisable(o, ht.a.Analytics) && n === o.user.id_str
                    ? C.a.createElement(
                        E.a,
                        { style: [gt.activityContainerWithChildren, r] },
                        C.a.createElement(
                          I.a,
                          {
                            link: ''.concat(o.permalink, '/analytics'),
                            onPress: a,
                            style: gt.analyticsButton,
                            testID: Oe,
                          },
                          C.a.createElement(mt.a, { style: gt.analyticsIcon }),
                          C.a.createElement(S.b, { color: 'gray700' }, ft),
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
      y()(wt, 'contextType', O.a)
      var gt = R.a.create(function (e) {
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
        vt = wt,
        bt = n('tmUV'),
        yt = n('YBcl'),
        _t = n('k89r'),
        Ct = function (e) {
          var t = Object(_t.a)()
          return C.a.createElement(
            yt.a,
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
        Tt = n('uFYP'),
        kt = K.a.g6237a1e,
        Et = K.a.d6b5949e,
        xt = function (e) {
          switch (e) {
            case 'paused':
              return Et
            case 'in-progress':
            default:
              return kt
          }
        },
        It = function (e) {
          var t = e.nativeID,
            n = e.status,
            a = e.style,
            r = 'paused' === n
          return C.a.createElement(
            E.a,
            { style: [St.root, a] },
            C.a.createElement(Tt.a, { style: [St.icon, r ? St.withGray700 : null] }),
            C.a.createElement(S.b, { color: r ? 'gray700' : 'text', nativeID: t, size: 'subtext2' }, xt(n)),
          )
        },
        St = R.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        Lt = n('TuTd'),
        Pt = function (e, t) {
          return Object(Lt.a)(e, t.tweetId)
        },
        Rt = Object(Ke.a)()
          .propsFromState(function () {
            return { liveCounts: Pt }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        Ot = (n('KOtZ'), n('LW0h'), n('tQbP'), n('Jkc4')),
        Mt = n('855f'),
        At = n('MtXG'),
        Ft = n('de1q'),
        Dt = n('cHvH'),
        Bt = K.a.fd80ffbf,
        Ht = R.a.theme.spacesPx.space20,
        Wt = (function (e) {
          w()(n, e)
          var t = v()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              y()(
                h()(r),
                '_reactionsLegacyHeartEnabled',
                r.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              y()(h()(r), '_renderQuoteTweetTimelinePivot', function () {
                var e = r.props.permalink
                return C.a.createElement(
                  I.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: r._handleQuoteTweetPivotScribeOnClick,
                    style: Nt.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  C.a.createElement(S.b, { color: 'primary' }, Bt),
                )
              }),
              y()(h()(r), '_updateStateIfChanged', function (e, t) {
                return function (n) {
                  var a = n.nativeEvent.layout.width
                  a !== e() && t(a)
                }
              }),
              y()(
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
              y()(
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
              y()(
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
              y()(
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
              y()(h()(r), '_handleRetweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              y()(h()(r), '_handleQuoteTweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              y()(h()(r), '_handleQuoteTweetPivotScribeOnClick', function () {
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
                    a = Mt.a.getTruncatedCount(e.count),
                    r = { pathname: ''.concat(n, '/reactions'), state: { reactionType: e.type } }
                  return C.a.createElement(
                    E.a,
                    { key: e.type },
                    C.a.createElement(Ot.a, null, function (n) {
                      return C.a.createElement(
                        At.a,
                        { count: e.count, link: r, onPress: n() },
                        C.a.createElement(
                          E.a,
                          { style: Nt.reactionStat },
                          C.a.createElement(Ft.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: Nt.reaction,
                          }),
                          C.a.createElement(At.a.Value, { animated: !0, count: e.count, weight: 'normal' }, a),
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
                  var o = Mt.a.getTruncatedCount(r),
                    i = a
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return C.a.createElement(Dt.a, null, function (t) {
                    var a = t.windowWidth
                    return C.a.createElement(
                      At.a.Group,
                      { style: [Nt.detailItemContainer, Nt.detailItem] },
                      a > R.a.theme.breakpoints.small
                        ? C.a.createElement(
                            E.a,
                            null,
                            C.a.createElement(Ot.a, null, function (e) {
                              return C.a.createElement(
                                At.a,
                                { count: r, link: ''.concat(n, '/reactions'), onPress: e() },
                                C.a.createElement(
                                  K.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  C.a.createElement(
                                    At.a.Value,
                                    { animated: !0, count: r },
                                    K.a.b4a4e4aa({ displayCountAll: o }),
                                  ),
                                  C.a.createElement(At.a.Label, null, K.a.ifa70ada({ count: r })),
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
                  var t = Mt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return C.a.createElement(
                    E.a,
                    { onLayout: this._handleLikeStatLayout },
                    C.a.createElement(Ot.a, null, function (a) {
                      return C.a.createElement(
                        At.a,
                        { count: e, link: ''.concat(n, '/likes'), onPress: a() },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          C.a.createElement(At.a.Value, { animated: !0, count: e }, K.a.ha054943({ displayCount: t })),
                          C.a.createElement(At.a.Label, null, K.a.d260af55({ count: e })),
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
                    n = Mt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    E.a,
                    { onLayout: this._handleRetweetStatLayout },
                    C.a.createElement(Ot.a, null, function (r) {
                      return C.a.createElement(
                        At.a,
                        { count: e, link: ''.concat(a, '/retweets'), onPress: r(t._handleRetweetScribeOnClick) },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          C.a.createElement(At.a.Value, { animated: !0, count: e }, K.a.j142cb3f({ displayCount: n })),
                          C.a.createElement(At.a.Label, null, K.a.e59a4e90({ count: e })),
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
                    n = Mt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    E.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    C.a.createElement(Ot.a, null, function (r) {
                      return C.a.createElement(
                        At.a,
                        {
                          count: e,
                          link: ''.concat(a, '/retweets/with_comments'),
                          onPress: r(t._handleQuoteTweetScribeOnClick),
                        },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          C.a.createElement(At.a.Value, { animated: !0, count: e }, K.a.f6e12705({ displayCount: n })),
                          C.a.createElement(At.a.Label, null, K.a.e2414184({ count: e })),
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
                    m = p && d && u && s && p + Ht + (l ? 0 : u + Ht) + d > s,
                    h = s,
                    f = l ? void 0 : n
                  return o || f || a || r
                    ? C.a.createElement(
                        E.a,
                        { onLayout: this._handleStatGroupLayout, style: h ? t : Nt.hidden },
                        l ? this._renderReactionsStatsGroup() : null,
                        o || f || a
                          ? C.a.createElement(
                              At.a.Group,
                              { style: [Nt.detailItemContainer, Nt.detailItem, Nt.noWrap, i] },
                              o ? this._renderRetweetsStat(o) : null,
                              a ? this._renderQuoteTweetsStat(a) : null,
                              f && !m ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        m && f
                          ? C.a.createElement(
                              At.a.Group,
                              { style: [Nt.detailItemContainer, Nt.detailItem, i] },
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
      y()(Wt, 'contextType', O.a)
      var Nt = R.a.create(function (e) {
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
        Ut = Object(x.a)(Wt)
      var zt = Rt(function (e) {
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
          return C.a.createElement(Ut, {
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
        jt = n('avOP'),
        Vt = function (e) {
          var t = e.children
          return X.b ? C.a.createElement(jt.a, { itemProp: 'articleBody' }, t) : t
        },
        qt = n('hqKg'),
        Kt = n('B/Qy'),
        Xt = n('M0jS'),
        Gt = function (e, t) {
          return Xt.b.select(e, t.userId)
        },
        Qt = Object(Ke.a)().propsFromState(function () {
          return {
            userSpace: Object(qt.createSelector)(Gt, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(Kt.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Yt = n('Sksh'),
        Jt = n('1I0O'),
        Zt = n('jhWN'),
        $t = function (e) {
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
                  Yt.a.registerUserInApp(p),
                  function () {
                    Yt.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            m
              ? C.a.createElement(
                  Jt.a,
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
              : C.a.createElement(Zt.a, {
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
        en = Qt(C.a.memo($t)),
        tn = n('FGLp'),
        nn = n('TIdA'),
        an = n('DNho'),
        rn = nn.a.createLayoutCache(),
        on = R.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        ln = function (e) {
          var t = Object(x.b)(),
            n = C.a.useContext(O.a).featureSwitches,
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
            w = e.withUserPresence,
            g = void 0 !== w && w
          return (
            Object(tn.a)(function () {
              f && n.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            C.a.createElement(
              E.a,
              { style: on.avatarWrapper },
              C.a.createElement(an.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return g
                  ? C.a.createElement(en, {
                      avatarRef: a,
                      imageLayoutCache: rn,
                      nativeID: r,
                      onClick: o,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: on.avatar,
                      uri: s,
                      userId: u,
                      withHoverCard: p,
                      withLink: h,
                    })
                  : C.a.createElement(Zt.a, {
                      avatarRef: a,
                      imageLayoutCache: rn,
                      nativeID: r,
                      onClick: o,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: c,
                      size: t,
                      style: on.avatar,
                      uri: s,
                      withHoverCard: p,
                      withLink: h,
                    })
              }),
            )
          )
        },
        cn = n('aITJ'),
        sn = n('E0cF'),
        un = n('Z6aJ'),
        dn = n('dCqJ'),
        pn = n('Olb6'),
        mn = n('nBUg'),
        hn = n('r7g+'),
        fn = n('PbQQ'),
        wn = n('e5HP'),
        gn = n('JWUO'),
        vn = n('9VO7'),
        bn = n('GBcw'),
        yn = n('jV+4'),
        _n = n('ir4X'),
        Cn = n('aA1u'),
        Tn = n('kY28'),
        kn = n('6nXH')
      function En(e, t, n) {
        var a,
          r = sn.a.getOriginalTweet(e),
          o = null == r || null === (a = r.entities) || void 0 === a ? void 0 : a.hashtags
        if (Array.isArray(o) && !(o.length < 1)) {
          var i = o[0]
          return n &&
            (function (e) {
              var t = sn.a.getOriginalTweet(e),
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
      function xn(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      n('yH/f')
      var In = n('9B+1'),
        Sn = n('YICZ'),
        Ln = n('21zW'),
        Pn = n('8bWS'),
        Rn = K.a.gf5e9ea6,
        On = K.a.e2f2b658,
        Mn = Object.freeze({
          see_more: K.a.ffd9cfe6,
          discover_more: K.a.d172116a,
          more: K.a.h63a5c3b,
          more_tweets: K.a.iac074c3,
          more_suggestions: K.a.g11ebd34,
          browse: K.a.g4a69019,
          browse_tweets: K.a.b1abb17d,
        })
      var An = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return C.a.createElement(
            E.a,
            { style: Bn.tombstone },
            C.a.createElement(we.a, { actionText: Rn, children: On, inline: !0, onClick: t }),
          )
        },
        Fn = Object(x.a)(function (e) {
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
            E.a,
            { style: Bn.topicActions },
            p && C.a.createElement(Ln.a, null),
            d &&
              C.a.createElement(
                S.b,
                {
                  color: 'primary',
                  link: r,
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  size: 'subtext2',
                  weight: 'bold',
                },
                o ? C.a.createElement(T.a, o) : a,
              ),
            c
              ? C.a.createElement(
                  E.a,
                  { style: Bn.notInterestedButtonWrapper },
                  C.a.createElement(Sn.a, {
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
        Dn = function (e) {
          var t = e.isExpanded,
            n = e.onNotInterestedPress,
            a = e.topic,
            r = a.following ? Bn.followingTopicButtonWrapper : Bn.followTopicButtonWrapper,
            o = [t && r, !t && Bn.followTopicButtonWrapperNotExpanded],
            i = t ? Bn.largeNotInterestedButtonWrapper : Bn.notInterestedButtonWrapper
          return C.a.createElement(
            E.a,
            { style: Bn.topicActions },
            t ? null : C.a.createElement(Ln.a, { style: Bn.topicMiddot }),
            C.a.createElement(
              E.a,
              { style: o },
              C.a.createElement(ke.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: Bn.followTopicButton,
                textMode: Te.a.FollowTopic,
                topic: a,
              }),
            ),
            n || (t && !a.following)
              ? C.a.createElement(
                  E.a,
                  { style: i },
                  C.a.createElement(Sn.a, {
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
      var Bn = R.a.create(function (e) {
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
        Hn = n('0zXz'),
        Wn = R.a.theme.aspectRatios.maxTimelineImage,
        Nn = R.a.theme.aspectRatios.minTimelineImage,
        Un = K.a.f277e949,
        zn = K.a.ee79367a,
        jn = K.a.a2a3824a,
        Vn = K.a.c14cdb18,
        qn = K.a.e8adeec8,
        Kn = (function (e) {
          w()(n, e)
          var t = v()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(h()(e), '_defaultInlinePromptRef', C.a.createRef()),
              y()(h()(e), '_iconContainerRef', C.a.createRef()),
              y()(h()(e), 'state', { mediaAltTranslations: {} }),
              y()(h()(e), '_transformPromotedUrl', He.a.bind(null, e.context.featureSwitches)),
              y()(
                h()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              y()(h()(e), '_getWithTopLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.isFocal,
                  r = t.tweet,
                  o = sn.a.getOriginalTweet(r),
                  i = e._getConversationPosition(),
                  l = e._getIsConversationStart(),
                  c = n && n.ancestorConnector,
                  s = n && n.indents,
                  u = (a && !!o.in_reply_to_status_id_str) || (i && !l)
                return s ? 'top' === c : u
              }),
              y()(h()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.tweet,
                  r = sn.a.getOriginalTweet(a),
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
              y()(h()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  n = t.onMediaHashtagHighlightClick,
                  a = t.promotedContent,
                  r = t.promotedContentAdvertiser,
                  o = t.tweet,
                  i = e.context.featureSwitches,
                  l = {
                    highlightedHashtag: function () {
                      return En(o, i, un.a.isPromoted(a))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return xn(r, i)
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
              y()(h()(e), '_renderPromotedDetails', function (t) {
                var n = e.props,
                  a = n.onPoliticalSponsorWebsiteClick,
                  r = n.onPromotedDisclaimerLearnMoreClick,
                  o = n.onPromotedIndicatorClick,
                  i = n.promotedContent,
                  l = n.promotedContentAdvertiser,
                  c = n.tweet
                return r && a && o
                  ? C.a.createElement(dn.a, {
                      onPoliticalSponsorWebsiteClick: a,
                      onPromotedDisclaimerLearnMoreClick: r,
                      onPromotedIndicatorClick: o,
                      promotedContent: i,
                      promotedContentAdvertiser: l,
                      style: Xn.promotedDetails,
                      testID: Me,
                      tweet: c,
                      withCircleIcon: t,
                    })
                  : null
              }),
              y()(h()(e), '_getPromoteButtonOnPress', function (t) {
                var n = e.props,
                  a = n.onPromoteAgainButtonClick,
                  r = n.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? a : r
              }),
              y()(h()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  n = t.tweet,
                  a = t.withBirdwatchPivots,
                  r = sn.a.getOriginalTweet(n)
                return r.birdwatch_pivot &&
                  a &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? C.a.createElement(j, r.birdwatch_pivot)
                  : null
              }),
              y()(h()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  n = t.hasModeratedReplies,
                  a = t.onModeratedIconClick,
                  r = t.tweet
                return n ? C.a.createElement(pn.a, { link: ''.concat(r.permalink, '/hidden'), onPress: a }) : null
              }),
              y()(h()(e), '_renderBirdwatchNotesIcon', function () {
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
                  ? C.a.createElement(dt, { onPress: n, onShow: a, tweetId: r.id_str })
                  : null
              }),
              y()(h()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              y()(h()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.socialContext
                if (n && r && a && a(Be.a.ItemType.USER)) {
                  var o,
                    i = (null === (o = r.landingUrl) || void 0 === o ? void 0 : o.url.match(de.A.id)) || '',
                    l = r.text || ''
                  n({ topic: { id: i && i[0], name: l, description: jn, type: Ce.a.Topic } })
                }
              }),
              y()(h()(e), '_renderTweetTextHWTweet', function (t) {
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
                  f = sn.a.getOriginalTweet(u),
                  w = sn.a.hasInteractiveText(f),
                  g = d || (w ? 'title4' : t.size),
                  v = c()(
                    c()({}, t),
                    {},
                    {
                      excludeCardUrl: a,
                      hitHighlights: r,
                      linkify: l,
                      onEntityClick: s,
                      size: g,
                      style: w && Xn.interactiveHighlightSpacer,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: f.unmentioned_user_ids,
                      weight: w ? 'heavy' : void 0,
                      withCardLinks: p,
                      withMediaLinks: !m,
                      withQuoteLinks: h || sn.a.isQuotedTweetUnavailable(f),
                      withUnicodeEmojis: X.b,
                    },
                  )
                return C.a.createElement(
                  Vt,
                  null,
                  C.a.createElement(
                    it,
                    i()({}, v, {
                      disableTranslation: f.user.protected,
                      isFocal: o,
                      lang: f.lang,
                      onMediaTranslation: e._handleMediaTranslations,
                      supplementalLang: f.supplemental_language,
                      text: f.text,
                      tweetId: f.id_str,
                      withOriginalText: o,
                    }),
                  ),
                )
              }),
              y()(h()(e), '_renderTweetText', function (t) {
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
                  m = sn.a.getOriginalTweet(c),
                  h = sn.a.hasInteractiveText(m),
                  f = s || (o || h ? 'title4' : 'body')
                return C.a.createElement(
                  Vt,
                  null,
                  C.a.createElement(it, {
                    disableTranslation: m.user.protected,
                    displayTextRange: m.display_text_range,
                    enrichments: m.enrichments,
                    entities: m.entities,
                    excludeCardUrl: a,
                    hitHighlights: o ? void 0 : r,
                    isFocal: o,
                    lang: m.lang,
                    linkify: !!o || i,
                    nativeID: t,
                    onEntityClick: l,
                    onMediaTranslation: e._handleMediaTranslations,
                    quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                    quotedTweetPermalink: m.quoted_status_permalink,
                    size: f,
                    style: o ? Xn.expandedTweetText : h && Xn.interactiveHighlightSpacer,
                    supplementalLang: m.supplemental_language,
                    text: m.text,
                    transformUrl: e._transformUrl,
                    tweetId: m.id_str,
                    unmentionedUserIds: m.unmentioned_user_ids,
                    weight: h ? 'heavy' : void 0,
                    withCardLinks: o ? void 0 : u,
                    withMediaLinks: o ? void 0 : !d,
                    withOriginalText: o,
                    withQuoteLinks: (!o && p) || sn.a.isQuotedTweetUnavailable(m),
                    withUnicodeEmojis: X.b,
                  }),
                )
              }),
              y()(h()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              y()(h()(e), '_transformUrl', function (t) {
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
                    w = t.quotedTweetTombstoneInfo,
                    g = t.readerModeAvailable,
                    v = t.renderCurationActionMenu,
                    b = t.showConversationHeadsUp,
                    y = t.socialContext,
                    _ = t.to,
                    T = t.tweet,
                    k = t.withReaderModeBottomBar,
                    x = t.withTimestamp,
                    I = t.withTimestampLink,
                    L = t.withUnreadStyles,
                    O = sn.a.getOriginalTweet(T),
                    M = O.has_super_follower,
                    A = O.quick_promote_eligibility,
                    F = O.user,
                    D = null == A ? void 0 : A.eligibility,
                    B = this._getIsQuickPromoteEligible(D),
                    H = un.a.isPromoted(f),
                    W = !!H && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    N = !!H && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    U = !(!F.professional || !B),
                    z = 'IneligibleCampaignRunning' === D || 'IneligibleCampaignPaused' === D,
                    j = 'string' == typeof _ ? { pathname: _ } : _,
                    q = n && n.ancestorConnector,
                    K = n && n.indents,
                    X = this._getWithTopLine(),
                    G = this._getWithBottomLine(),
                    Q = X || G,
                    Y = (Q && !u) || !this._isEdgeToEdgeEnabled,
                    J = j ? c()(c()({}, j), {}, { anchorless: !0 }) : void 0,
                    Z = u ? 'detail' : 'inline'
                  return !u &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? C.a.createElement(
                        mn.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        C.a.createElement(
                          bt.a,
                          { forwardPivotInfo: a, tweet: T },
                          C.a.createElement(hn.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: V.canUseDOM ? J : void 0,
                            onBlur: p,
                            onFocus: h,
                            onPress: m,
                            promotedContent: f,
                            quotedTweetTombstoneInfo: w,
                            renderActionMenu: v && V.canUseDOM ? v : Hn.a,
                            renderActionsBar: T.isPreview
                              ? function () {
                                  return C.a.createElement(me, { previewTweetId: T.id_str })
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
                                      ? C.a.createElement(E.a, { style: Xn.readerBottomBar, testID: Ae })
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
                                      link: ''.concat(T.permalink, '/quick_promote_web/intro'),
                                      onPress: e._getPromoteButtonOnPress(D),
                                      style: Xn.promoteButton,
                                      type: 'primaryOutlined',
                                    },
                                    e._getPromoteButtonText(D),
                                  ),
                                C.a.createElement(
                                  Ct,
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
                                ? C.a.createElement(hn.a.HighlightedUserLabel, t)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return C.a.createElement(hn.a.PromotedIndicator, i()({}, e, { withCircleIcon: N }))
                            },
                            renderPromotionStatusBadge: z
                              ? function (t) {
                                  return C.a.createElement(It, {
                                    nativeID: t.nativeID,
                                    status: e._getTweetPromotionStatus(D),
                                    style: Xn.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (t) {
                              return e._renderReplyContext({ nativeID: t.nativeID })
                            },
                            renderRichContent: function (t) {
                              return e._renderRichContent({ nativeID: t.nativeID, withRoundMediaCorners: Y })
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
                            renderTimestamp: x
                              ? function (t) {
                                  return C.a.createElement(
                                    hn.a.Timestamp,
                                    i()({}, t, {
                                      link: I ? t.link : void 0,
                                      nativeID: e._isEdgeToEdgeEnabled ? void 0 : t.nativeID,
                                    }),
                                  )
                                }
                              : Hn.a,
                            renderTombstone: function (t) {
                              return e._renderTombstoneHWTweet(t)
                            },
                            renderUserAvatar: function (t) {
                              return e._renderAvatar(t.nativeID)
                            },
                            renderUserName: function (t) {
                              return e._renderUserNameHWTweet(t)
                            },
                            socialContext: y
                              ? {
                                  contextType: y.contextType,
                                  isSelfRetweet: y.isSelfRetweet,
                                  link: y.landingUrl ? Object(ue.b)(y.landingUrl) : void 0,
                                  name: y.name,
                                  screenName: y.screenName,
                                  text: y.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: De,
                            tweet: T,
                            withBottomLine: G,
                            withTopLine: X,
                            withUnreadStyles: L,
                          }),
                        ),
                      )
                    : C.a.createElement(fn.c.UseTweetA11yIds, { tweet: T }, function (t) {
                        var i = r()(t, 2),
                          c = i[0],
                          w = i[1],
                          y = W
                            ? sn.a.hasInteractiveText(O)
                              ? Xn.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : Xn.promotedIndicatorBelowHeader
                            : Xn.promotedIndicator,
                          _ =
                            f && H
                              ? C.a.createElement(wn.a, {
                                  contentAuthorId: F.id_str,
                                  nativeID: c.promotedLabel,
                                  promotedContent: f,
                                  style: y,
                                  withCircleIcon: N,
                                })
                              : null,
                          I = z
                            ? C.a.createElement(It, {
                                nativeID: c.promotionStatusLabel,
                                status: e._getTweetPromotionStatus(D),
                                style: Xn.promotionStatus,
                              })
                            : null,
                          A = n
                            ? C.a.createElement(
                                S.b,
                                { nativeID: c.conversationLevel, style: R.a.visuallyHidden },
                                zn({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          B = O.tombstoneInfo || T.tombstoneInfo,
                          j = C.a.createElement(
                            C.a.Fragment,
                            null,
                            B ? e._renderTombstone(c.tombstone, B) : null,
                            u || !B
                              ? C.a.createElement(
                                  C.a.Fragment,
                                  null,
                                  e._renderReplyContext({ nativeID: c.replyContext }),
                                  C.a.createElement(E.a, null, e._renderTweetText(c.text)),
                                  C.a.createElement(
                                    E.a,
                                    null,
                                    e._renderRichContent({ nativeID: c.richContent, withRoundMediaCorners: Y }),
                                  ),
                                )
                              : null,
                          )
                        return C.a.createElement(
                          mn.b.Provider,
                          { value: e._getFeatureConfigurationContextProviderValue() },
                          C.a.createElement(
                            bt.a,
                            { forwardPivotInfo: a, tweet: T },
                            C.a.createElement(
                              gn.a,
                              {
                                a11yDomIds: w,
                                actionMenu: v && V.canUseDOM ? v() : null,
                                avatar: e._renderAvatar(c.avatar),
                                footer: e._renderFooter(),
                                header: e._renderHeader(c),
                                indents: K,
                                link: u || !V.canUseDOM ? void 0 : J,
                                onBlur: p,
                                onFocus: h,
                                onPress: m,
                                testID: De,
                                timestamp:
                                  H || e._getUsernameStackedLayoutEnabled() || !x
                                    ? null
                                    : e._renderTweetRelativeTimestamp(c.timestamp),
                                userFollowIndicators: M ? C.a.createElement(vn.a, { type: 'superFollower' }) : void 0,
                                userLabel: e._renderUserLabel(F, c.userLabel),
                                userName: e._renderUserName(c.username, c.timestamp),
                                withBottomLine: G,
                                withElbow: K ? 'side' === q : void 0,
                                withFooterGap: !u,
                                withFullWidthChildren: u || (!Q && e._isEdgeToEdgeEnabled),
                                withTopLine: X,
                                withUnreadStyles: L,
                              },
                              W && u ? e._renderPromotedDetails(N) : null,
                              W && !u ? _ : null,
                              A,
                              j,
                              U &&
                                'inline' === Z &&
                                C.a.createElement(
                                  P.a,
                                  {
                                    link: ''.concat(T.permalink, '/quick_promote_web/intro'),
                                    onPress: e._getPromoteButtonOnPress(D),
                                    style: Xn.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  e._getPromoteButtonText(D),
                                ),
                              e._renderFocalContent(W, U, I),
                              'inline' === Z &&
                                C.a.createElement(Ct, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!o,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!s,
                                  loggedInUser: d,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: T,
                                }),
                              T.isPreview
                                ? C.a.createElement(me, { previewTweetId: T.id_str })
                                : e._renderTweetActions({
                                    actionSize: u ? 'large' : void 0,
                                    displayStyle: u ? 'block' : void 0,
                                    nativeID: c.actionsBar,
                                    style: [
                                      u ? Xn.actionBarFocalTweet : Xn.actionBar,
                                      u && !g && Xn.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !u,
                                    withCount: !u,
                                  }),
                              e._renderReaderModeButton(),
                              W || u ? null : _,
                              u ? null : I,
                              'detail' === Z &&
                                C.a.createElement(Ct, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!o,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!s,
                                  loggedInUser: d,
                                  showConversationHeadsUp: b,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: T,
                                }),
                              k ? C.a.createElement(E.a, { style: Xn.readerBottomBar, testID: Ae }) : null,
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
                    o = sn.a.getOriginalTweet(a)
                  return C.a.createElement(bn.a, {
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
                    c = sn.a.getOriginalTweet(r).user
                  return l
                    ? C.a.createElement(
                        hn.a.UserName,
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
                    u = sn.a.getOriginalTweet(l).user,
                    d = un.a.isPromoted(i)
                  return s
                    ? C.a.createElement(yn.a, {
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
                  return !n || (a && !r) ? null : C.a.createElement(_n.a, { label: n, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, n) {
                  var a = this.props,
                    r = a.isFocal,
                    o = a.onAnalyticsClick,
                    i = a.tweet,
                    l = sn.a.getOriginalTweet(i),
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
                          E.a,
                          { style: Xn.footerContainer },
                          C.a.createElement(
                            E.a,
                            { style: Xn.footerContent },
                            C.a.createElement(Cn.a, {
                              linkColor: 'gray700',
                              place: s && s.full_name,
                              placeLink: s && s.id ? '/places/'.concat(s.id) : void 0,
                              source: d && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: Xn.timeLocSource,
                              timestamp: c,
                              timestampLink: l.permalink,
                            }),
                            C.a.createElement(
                              E.a,
                              { style: Xn.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          n,
                        ),
                        C.a.createElement(vt, {
                          endControl: t
                            ? C.a.createElement(
                                P.a,
                                {
                                  link: ''.concat(i.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(m),
                                  style: Xn.tweetActivityPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(m),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: o,
                          tweet: l,
                        }),
                        C.a.createElement(zt, {
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
                      ? Ie({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: a })
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
                      ? Ie({ defaultRef: this._defaultInlinePromptRef, topic: a, topicFollowPrompt: r })
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
                    r = sn.a.getOriginalTweet(a),
                    o = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? C.a.createElement(Le.a, {
                        avatarUrl: o ? r.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: n,
                        style: Xn.selfThreadCTA,
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
                    r = sn.a.getOriginalTweet(n)
                  return a && !t && r.self_thread && !n.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    n = e.tweet,
                    a = sn.a.getOriginalTweet(n)
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
                    n = sn.a.getOriginalTweet(e)
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
                      return Vn
                    case 'EligibleWithPreviousCampaign':
                      return qn
                    default:
                      return (
                        Object(Se.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        Vn
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
                        Object(Se.a)(
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
                  if (!n.withSocialContext || !s || un.a.isPromoted(c)) return null
                  var d = this.context.featureSwitches,
                    p = a && !this._getIsConversationStart(),
                    m = s.contextType,
                    h = s.isSelfRetweet,
                    f = s.landingUrl,
                    w = s.name,
                    g = s.screenName,
                    v = s.text,
                    b = s.topicContext,
                    y = f ? Object(ue.b)(f) : void 0
                  if (
                    b &&
                    u &&
                    (function (e) {
                      var t = e.featureSwitches,
                        n = e.isExpanded,
                        a = e.topic,
                        r = e.topicContext
                      return (
                        Object(Pn.c)(r) &&
                        n &&
                        a.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in Mn) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: d, isExpanded: o, topic: u, topicContext: b })
                  )
                    return C.a.createElement(An, { onUndoTopicNotInterestedClick: l })
                  var _ = {
                      contextType: m,
                      iconSize: 'large',
                      withLeftPadding: this.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                        ? p || !1
                        : !p && !o,
                      text: v,
                    },
                    k =
                      b && u
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
                              p = u ? Object(ue.b)(u) : void 0,
                              m = d && Object(Pn.b)(d),
                              h = d && Object(Pn.c)(d),
                              f = n.isTrue('media_edge_to_edge_content_enabled'),
                              w = f ? Re.a.TextOnly : Re.a.Topic,
                              g =
                                null == r || null === (t = r.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              v = d ? Object(In.a)(d) : void 0,
                              b = null != d && d.bannerText ? C.a.createElement(T.a, d.bannerText) : i.text
                            if (m && n.getStringValue('topics_context_controls_followed_variation') in Mn) {
                              var y = Mn[n.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: a,
                                contextType: w,
                                rightControl: C.a.createElement(Fn, {
                                  bannerText: i.topicContext && i.topicContext.bannerText,
                                  label: y,
                                  link: p,
                                  linkText: i.topicContext && i.topicContext.linkText,
                                  topic: l,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: v,
                                text: b,
                              }
                            }
                            if (h) {
                              if (n.getStringValue('topics_context_controls_implicit_variation') in Mn) {
                                var _,
                                  k = Mn[n.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: a,
                                  contextType: w,
                                  rightControl: C.a.createElement(Fn, {
                                    bannerText: i.topicContext && i.topicContext.bannerText,
                                    label: k,
                                    link: p,
                                    linkText: null === (_ = i.topicContext) || void 0 === _ ? void 0 : _.linkText,
                                    onNotInterestedPress: g,
                                    topic: l,
                                    withRightControl: n.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: v,
                                  text: b,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var E = C.a.createElement(Dn, { isExpanded: o, onNotInterestedPress: g, topic: l })
                              return o
                                ? {
                                    bottomControl: E,
                                    contextType: s,
                                    iconSize: 'xLarge',
                                    iconStyle: Bn.iconStyle,
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
                                    iconStyle: Bn.iconStyle,
                                    rightControl: E,
                                    topicData: v,
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
                    Pe.a,
                    i()({}, k, {
                      link: y,
                      nativeID: t,
                      onClick: m === Re.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: w, screenName: g, isSelfRetweet: h },
                      style: Xn.socialContext,
                      testID: Fe,
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
                    u = sn.a.getOriginalTweet(s),
                    d = u.self_thread
                  return this._shouldShowSelfThread() ||
                    c !== Tn.a.ReplyContextTypes.Isolated ||
                    !u.in_reply_to_status_id_str ||
                    (o && !i) ||
                    (d && r && !r.isStart) ||
                    (d && i)
                    ? null
                    : C.a.createElement(Tn.a, {
                        displayTextRange: u.display_text_range,
                        inReplyToName: u.in_reply_to_name,
                        inReplyToScreenName: u.in_reply_to_screen_name,
                        inReplyToStatusIdStr: u.in_reply_to_status_id_str,
                        inReplyToUserIdStr: u.in_reply_to_user_id_str,
                        nativeID: n,
                        onClick: l,
                        style: [Xn.replyContext, i && Xn.replyContextBig],
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
                        E.a,
                        { style: Xn.actionBarWithInlineReply },
                        C.a.createElement(_e.a, { focalTweet: n, isExpanded: !0, readerModeAvailable: !!t }),
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
                    w = l.tweet,
                    g = l.withActionsDisabled,
                    v = l.withRemoveFromBookmarks
                  return this.props.withActions
                    ? C.a.createElement(pt.a, {
                        actionSize: t,
                        allowDownvote: c,
                        bookmarkFolderId: s,
                        displayStyle: n,
                        enableKeyboardShortcuts: d,
                        forwardPivotInfo: w.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: a,
                        onLikeSuccess: m,
                        onReplyPress: h,
                        promotedContent: f,
                        style: r,
                        tweet: u || w,
                        withActionsDisabled: g,
                        withAnalyticsAction: o,
                        withCount: i,
                        withRemoveFromBookmarks: v,
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
                    u = sn.a.getOriginalTweet(o).user,
                    d = sn.a.getOriginalTweet(o).user.id_str
                  return l
                    ? C.a.createElement(ln, {
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
                    r = e.nativeID,
                    o = e.style,
                    i = this.props,
                    l = i.conversationTreeMetadata,
                    c = i.onClick
                  return C.a.createElement(
                    E.a,
                    { nativeID: r, style: o },
                    C.a.createElement(
                      we.a,
                      { actionLink: t, actionText: n, conversationTreeMetadata: l, inline: !0, onClick: c },
                      a,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e, t) {
                  var n = this.props,
                    a = n.conversationTreeMetadata,
                    r = n.isFocal,
                    o = n.onClick,
                    i = n.tweet,
                    l = sn.a.getOriginalTweet(i),
                    c = t.richText
                  return l && t && c
                    ? C.a.createElement(
                        E.a,
                        { nativeID: e, style: Xn.spacingVertical },
                        C.a.createElement(
                          we.a,
                          {
                            actionLink: r ? void 0 : l.permalink,
                            actionText: r ? void 0 : Un,
                            conversationTreeMetadata: a,
                            inline: !0,
                            onClick: r ? void 0 : o,
                          },
                          C.a.createElement(T.a, { entities: c.entities, rtl: c.rtl, text: c.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = sn.a.getOriginalTweet(e),
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
                    t = sn.a.getOriginalTweet(e)
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
                    w = o.promotedContent,
                    g = o.quoteTweetSocialContextProps,
                    v = o.quotedTweetTombstoneInfo,
                    b = o.tweet,
                    y = o.withCardLinks,
                    _ = o.withInlineMedia,
                    T = o.withUserHoverCard,
                    k = u ? 'DETAIL' : 'TIMELINE',
                    E = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!cn.b.isDesktopOS() && !u,
                    x = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    I = sn.a.getOriginalTweet(b)
                  return (
                    (r = r || Object(ht.b)(a, I, ht.a.VoteOnPoll)),
                    C.a.createElement(
                      C.a.Fragment,
                      null,
                      C.a.createElement(kn.a, {
                        cardCacheLocationKey: k,
                        displayMediaMetadata: u,
                        enableKeyboardShortcuts: i,
                        forwardPivotInfo: b.softIntervention || l,
                        inlineCalloutInfo: c,
                        innerForwardPivotInfo: s,
                        isMediaMaxHeightEnabled: E,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: k,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: m,
                        onQuoteTweetClick: h,
                        preventVideoPlayback: f,
                        promotedContent: w,
                        quoteTweetSingleImageMinAspectRatio: Nn,
                        quoteTweetSocialContextProps: g,
                        quotedTweetTombstoneInfo: v,
                        renderQuoteTweetTombstone: function (e) {
                          return C.a.createElement(ye, e)
                        },
                        singleImageMaxAspectRatio: Wn,
                        singleImageMinAspectRatio: u ? 0.1 : Nn,
                        tweet: b,
                        withActionsDisabled: r,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: y,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !u && sn.a.hasMedia(I, !_),
                        withMediaTagsIcon: u,
                        withQuoteTweetHeaderLinks: !V.canUseDOM,
                        withQuoteTweetLink: d,
                        withQuoteTweetMedia: _,
                        withReactions: x,
                        withRoundMediaCorners: n,
                        withTweetMedia: _,
                        withUserHoverCard: T,
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
      y()(Kn, 'contextType', O.a),
        y()(Kn, 'displayName', 'Tweet'),
        y()(Kn, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: te.a,
          onModeratedIconClick: te.a,
          onModeratedIconShown: te.a,
          replyContext: Tn.a.ReplyContextTypes.Isolated,
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
      var Xn = R.a.create(function (e) {
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
      t.b = se(Kn)
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
          w = i.a.useRef(0),
          g = i.a.useRef(0),
          v = (function () {
            if (null != t && t.current && m) {
              var e = t.current.getBoundingClientRect(),
                n = e.left,
                a = e.top,
                r = e.width
              w.current = a
              var o = n + r / 2 - m
              return { left: f ? void 0 : o, right: f ? o : void 0 }
            }
          })(),
          b = g.current < w.current,
          y = b ? [d.arrowDirectionDown] : [d.arrowDirectionUp],
          _ = b
            ? f
              ? { transform: 'rotate(-45deg)' }
              : { transform: 'rotate(45deg)' }
            : f
            ? { transform: 'rotate(135deg)' }
            : { transform: 'rotate(-135deg)' },
          C = b ? [d.containerDown] : [d.containerUp]
        return i.a.createElement(
          u.a,
          {
            accessibilityRole: 'text',
            onLayout: function (e) {
              var t = e.nativeEvent.layout,
                n = t.left,
                a = t.top,
                r = t.width
              ;(g.current = a), h(n + r / 2)
            },
            style: [d.root, C],
          },
          null != t && t.current
            ? i.a.createElement(
                u.a,
                { style: [y, d.arrowContainer, v] },
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
        w = n.n(f),
        g = (n('TJCb'), n('7x/C'), n('DZ+c'), n('vrRf'), n('uFXj'), n('ERkP')),
        v = n.n(g),
        b = n('RqPI'),
        y = n('rxPX'),
        _ = Object(y.a)().propsFromState(function () {
          return { language: b.p }
        }),
        C = n('3XMw'),
        T = n.n(C),
        k = n('fs1G'),
        E = n('rHpw'),
        x = n('BLtI'),
        I = n('MWbm'),
        S = 'Twitter',
        L = T.a.ea1c87a5({ mention: S }),
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
                text: S,
                indices: [L.indexOf('@'), L.indexOf('@') + S.length + 1],
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
        R = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              w()(u()(a), '_handleTweetAction', function (e) {
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
                  return v.a.createElement(
                    I.a,
                    { accessibilityHidden: !0, style: e && O.tweetBorder },
                    v.a.createElement(x.b, {
                      enableKeyboardShortcuts: !1,
                      onAnalyticsClick: k.a,
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
                    v.a.createElement(I.a, { style: E.a.absoluteFill }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      w()(R, 'defaultProps', { tweet: P, withTweetBorder: !1 })
      var O = E.a.create(function (e) {
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
        M = _(R)
      t.a = M
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
        w = n.n(f),
        g = n('Zejx'),
        v = n('rxPX'),
        b = n('0KEI'),
        y = Object(v.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: g.a.follow,
              unfollow: g.a.unfollow,
            }
          })
          .withAnalytics(),
        _ = n('CGyZ'),
        C = n('PbbS'),
        T = n('3XMw'),
        k = n.n(T),
        E = n('sUoZ'),
        x = n('Tp1h'),
        I = n('Jkc4'),
        S = n('TnY3'),
        L = Object.freeze({ follow: k.a.i79ab12a, following: k.a.d960b55b, unfollow: k.a.c0f56044 }),
        P = Object.freeze({
          follow: k.a.fcf51fe6,
          following: k.a.e9a90d71,
          unfollow: k.a.bf403715,
          confirmationHeadline: k.a.c9f08e28,
          confirmationSheetText: k.a.abc600f3,
        }),
        R = Object.freeze({
          follow: k.a.cd876e01,
          following: k.a.f2816e02,
          unfollow: k.a.f5b04fbb,
          confirmationHeadline: k.a.c481ae3f,
          confirmationSheetText: k.a.aa3ba123,
        }),
        O = Object.freeze({
          follow: k.a.e0e730b0,
          following: k.a.e0e730b0,
          unfollow: k.a.b1850062,
          confirmationHeadline: k.a.gd3f996f,
          confirmationSheetText: k.a.i36c403c,
        }),
        M = (function (e) {
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
                    return w.a.createElement(E.a, null)
                  case C.a.FollowTopic:
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(c()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? w.a.createElement(w.a.Fragment, null) : void 0
              }),
              h()(c()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case C.a.FollowTopic:
                    return { follow: L.follow, unfollow: L.unfollow, following: L.following }
                  case C.a.Favorite:
                    return {
                      follow: R.follow,
                      unfollow: R.unfollow,
                      following: R.following,
                      confirmationHeadline: R.confirmationHeadline && R.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: R.confirmationSheetText,
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
                      follow: O.follow,
                      unfollow: O.unfollow,
                      following: O.following,
                      confirmationHeadline: O.confirmationHeadline && O.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: O.confirmationSheetText,
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
                  return w.a.createElement(I.a, { customText: d, displayMode: x.a.topic }, function (t) {
                    return w.a.createElement(_.a, {
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
        })(w.a.Component)
      h()(M, 'defaultProps', { size: 'small', textMode: C.a.Default })
      t.a = Object(S.a)(y(M))
    },
    OKMS: function (e, t, n) {
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
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
        w = u.a.d9b417c4,
        g = u.a.c29d6806,
        v = u.a.e839db39,
        b = function (e) {
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
            g = r.a.useCallback(
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
                accessibilityLabel: w,
                hoverLabel: { label: v },
                icon: d ? _ : void 0,
                nativeID: n,
                onPress: e(g),
                pullRight: d,
                size: i,
                style: l,
                type: u,
              },
              d ? null : c,
            )
          })
        }
      b.defaultProps = { size: 'small', text: g, type: 'brandText', withIconOnly: !0 }
      var y = f.a.create(function (e) {
          return { closeIcon: { color: e.colors.gray700 } }
        }),
        _ = r.a.createElement(d.a, { style: y.closeIcon }),
        C = c(b)
      t.a = C
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
        w = n.n(f),
        g = n('t62R'),
        v = n('21zW'),
        b = n('rHpw'),
        y = n('3XMw'),
        _ = n.n(y),
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
                  return w.a.createElement(
                    g.b,
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
                    ? w.a.createElement(
                        _.a.I18NFormatMessage,
                        { $i18n: 'ba64a3b2' },
                        w.a.createElement(
                          g.b,
                          { color: l ? t : void 0, link: l, onClick: a },
                          _.a.e9c24489({ date: c }),
                        ),
                        w.a.createElement(
                          g.b,
                          { color: o ? t : void 0, link: o, onClick: n },
                          _.a.a16de8a4({ place: r }),
                        ),
                      )
                    : w.a.createElement(g.b, { color: l ? t : void 0, link: l, onClick: a }, c)
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
                    ? w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(v.a, null),
                        w.a.createElement(g.b, { color: r ? t : void 0, link: r, onClick: n, style: T.source }, a),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      h()(C, 'defaultProps', { linkColor: 'link' })
      var T = b.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = C
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
        w = n('KEM+'),
        g = n.n(w),
        v = (n('2G9S'), n('t62R')),
        b = n('rHpw'),
        y = n('3XMw'),
        _ = n.n(y),
        C = _.a.d7e50a66,
        T = 'INDIRECT',
        k = 'NO_SPONSORSHIP',
        E = 'ISSUE',
        x = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(d()(e), '_renderDisclaimerDetails', function () {
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
                    s && i !== E
                      ? r.a.createElement(v.b, { link: s, onClick: n })
                      : r.a.createElement(v.b, { color: 'gray700', size: 'subtext2' })
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
                  v.b,
                  { color: 'gray700', size: 'subtext2' },
                  i === E ? p : u === k ? m : u === T ? h : p,
                )
              }),
              g()(d()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  n = t.onPromotedDisclaimerLearnMoreClick,
                  a = t.promotedContent,
                  o = t.tweet,
                  i = (a.adMetadataContainer || {}).disclaimerType === E ? 'issue_ad' : 'political_ad',
                  l = 'http://ads.twitter.com/transparency/ads/'.concat(o.user.screen_name, '/tweet/').concat(o.id_str)
                return r.a.createElement(v.b, { link: l, onClick: n(i), size: 'subtext2', style: I.learnMore }, C)
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
        I = b.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        S = n('e5HP'),
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
                    r.a.createElement(S.a, { promotedContent: i, withCircleIcon: d }),
                  )
                : !!i && r.a.createElement(S.a, { promotedContent: i }),
              m && i
                ? r.a.createElement(x, {
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
        return O
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
        w = n.n(f),
        g = n('yiKp'),
        v = n.n(g),
        b = (n('ho0z'), n('uFXj'), n('t62R')),
        y = n('IMYl'),
        _ = n('cm6r'),
        C = n('rHpw'),
        T = n('lzTJ'),
        k = n('k/Ka'),
        E = n('MWbm'),
        x = n('r7ya'),
        I = n('I4+6'),
        S = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              h()(c()(e), '_radioRef', w.a.createRef()),
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
                  return w.a.createElement(
                    _.a,
                    { focusable: !1, interactiveStyles: null, style: [L.root, this._getButtonStyles()] },
                    function (t) {
                      return w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(
                          _.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: L.radioOuterCircle,
                          },
                          w.a.createElement(
                            E.a,
                            { style: [L.radioInnerCircle, e._getCircleStyles()] },
                            a ? w.a.createElement(y.a, { style: L.checkMark }) : null,
                          ),
                        ),
                        w.a.createElement(
                          E.a,
                          { accessibilityHidden: !0, style: L.text },
                          w.a.createElement(b.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, r),
                        ),
                        Object(k.a)('input', {
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
                  return e === T.b.dark ? x.a : e === T.b.darker ? x.b : x.c
                },
              },
            ]),
            n
          )
        })(w.a.Component),
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
            nativeControl: v()(
              v()({}, C.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        P = S,
        R = 1,
        O = (function (e) {
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
              (e._backgroundPickerName = 'background_picker_'.concat(R)),
              (R += 1),
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
                  return w.a.createElement(
                    E.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: 'row' === r ? M.row : M.column },
                    o.map(function (t) {
                      return w.a.createElement(P, {
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
        })(w.a.Component),
        M = C.a.create(function (e) {
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
        w = n.n(f),
        g = n('tRj+'),
        v = n('3XMw'),
        b = n.n(v),
        y = n('oQhu'),
        _ = n('MWbm'),
        C = n('htQn'),
        T = n('5mJL'),
        k = n('jhWN'),
        E = n('/yvb'),
        x = n('t62R'),
        I = n('rHpw'),
        S = b.a.e3a24e4b,
        L = b.a.i569ff3e,
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
                Object(y.a)(function (e) {
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
                  return w.a.createElement(
                    g.a,
                    { behavioralEventContext: u },
                    w.a.createElement(
                      C.a,
                      { link: r, onClick: n, style: [R.root, a] },
                      w.a.createElement(
                        T.a,
                        {
                          avatarCell: c
                            ? w.a.createElement(
                                _.a,
                                { style: [R.avatarColumn, !l && R.avatarColumnWithoutLine] },
                                l ? w.a.createElement(_.a, { style: R.conversationLine }) : null,
                                w.a.createElement(k.a, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: R.conversationConnector,
                          cellStyle: i ? R.buttonContainer : c ? R.labelWithAvatar : R.label,
                        },
                        i
                          ? w.a.createElement(
                              E.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: R.button, type: 'brandOutlined' },
                              S,
                            )
                          : w.a.createElement(x.b, { color: 'link', style: R.enlargeTouchTarget }, L),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      h()(P, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var R = I.a.create(function (e) {
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
        w = n.n(f),
        g = n('rxPX'),
        v = n('z2Pn'),
        b = Object(g.a)()
          .propsFromState(function () {
            return { themeFocus: v.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: v.k }
          }),
        y = n('MWbm'),
        _ = n('3EFP'),
        C = b(
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
                    return w.a.createElement(
                      y.a,
                      { onKeyDown: this._handleKeyDown, onMouseDown: this._handleMouseDown },
                      t(a),
                    )
                  },
                },
              ]),
              n
            )
          })(w.a.Component),
        )
      t.a = C
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
        w = ['analytics', 'link'],
        g = p(function (e) {
          var t = u.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var n = e.analytics,
            a = e.link,
            o = c()(e, w),
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
      t.a = g
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
        w = n.n(f),
        g = n('1Pcy'),
        v = n.n(g),
        b = (n('2G9S'), n('ho0z'), n('I4+6')),
        y = n('cm6r'),
        _ = n('rHpw'),
        C = n('k/Ka'),
        T = n('MWbm'),
        k = n('x0mb'),
        E = n('IMYl'),
        x = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(v()(e), '_radioRef', h.a.createRef()),
              p()(v()(e), '_handleChange', function () {
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
                    l = b.a.generate({
                      backgroundColor: _.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return h.a.createElement(
                    T.a,
                    { style: [I.container, o] },
                    h.a.createElement(
                      y.a,
                      { accessibilityRole: 'label', interactiveStyles: l, style: [I.choice, I.choiceContainer] },
                      h.a.createElement(k.a, { style: [I.choice, { color: i }] }),
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
                        T.a,
                        { style: [I.choice, I.checkMarkContainer] },
                        h.a.createElement(E.a, { style: [I.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component),
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
            nativeControl: w()(
              w()({}, _.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        S = x,
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
                    s = [R.root, c && R.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return h.a.createElement(
                    T.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return h.a.createElement(S, {
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
      var R = _.a.create(function (e) {
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
        w = n.n(f),
        g = n('HPNB'),
        v = n('P1r1'),
        b = n('rxPX'),
        y = Object(b.a)()
          .propsFromActions(function () {
            return { updateSettings: v.M }
          })
          .withAnalytics(),
        _ = n('3XMw'),
        C = n.n(_),
        T = n('huBF'),
        k = n('lzTJ'),
        E = n('rHpw'),
        x = n('cHvH'),
        I = n('uI9t'),
        S = k.f.ThemePrimaryColorNames,
        L = C.a.aefc5b20,
        P = [
          { accessibilityLabel: C.a.a52d0fdd, colorName: S.blue500 },
          { accessibilityLabel: C.a.d818cdd5, colorName: S.yellow500 },
          { accessibilityLabel: C.a.fee1cd64, colorName: S.magenta500 },
          { accessibilityLabel: C.a.cbed7fb2, colorName: S.purple500 },
          { accessibilityLabel: C.a.g697ec02, colorName: S.orange500 },
          { accessibilityLabel: C.a.a7c22049, colorName: S.green500 },
        ],
        R = y(
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
                    r({ themeColor: S[t] }),
                    E.a.setPrimaryColor(S[t])
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
                    return w.a.createElement(x.a, null, function (t) {
                      var n = t.windowWidth
                      return w.a.createElement(T.a, { themeItem: 'color' }, function (t) {
                        return w.a.createElement(I.a, {
                          accessibilityLabel: L,
                          autoFocus: t,
                          layout: g.a.shouldRenderAsModal(n) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: P,
                          value: E.a.theme.primaryColorName,
                        })
                      })
                    })
                  },
                },
              ]),
              n
            )
          })(w.a.Component),
        )
      t.a = R
    },
  },
])
//# sourceMappingURL=WIPED
