;(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    '5lkF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CountryScreen', function () {
          return z
        })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        p = n('KEM+'),
        f = n.n(p),
        b = (n('2G9S'), n('KqXw'), n('MvUL'), n('ERkP')),
        g = n.n(b),
        m = n('P1r1'),
        y = (n('+KXO'), n('7xRU'), n('tQbP'), n('LW0h'), n('7x/C'), n('z84I'), []),
        v = {},
        E = n('O0uF'),
        C = n('RqPI'),
        S = n('rxPX'),
        w = n('0KEI'),
        L = n('S/HT'),
        _ = [],
        k = function (e) {
          var t = Object(E.h)(e, 'account_country_setting_countries_whitelist'),
            n = Object(L.c)(e)
          return Array.isArray(t)
            ? (function (e, t) {
                if (!e.length || 0 === Object.keys(t).length) return y
                var n = e.join()
                return (
                  v[n] ||
                    (v[n] = e
                      .map(function (e) {
                        return { label: t[e.toUpperCase()], value: e }
                      })
                      .filter(function (e) {
                        return e.label
                      })
                      .sort(function (e, t) {
                        return e.label.localeCompare(t.label)
                      })),
                  v[n]
                )
              })(t, n)
            : _
        },
        F = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.query) || void 0 === r
            ? void 0
            : r.flow_status
        },
        I = Object(S.a)()
          .propsFromState(function () {
            return { countryCode: m.j, countryList: k, changeCountryFlowStatus: F, lang: C.o }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_COUNTRY_SCREEN',
              ),
              fetchCountryNamesIfNeeded: L.a,
              updateSettings: m.N,
              fetchSettings: m.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'country' }),
        T = n('q82E'),
        B = n('yoO3'),
        O = n('7FtF'),
        x = 'Settings_Country_Selector',
        R = n('MWbm'),
        D = n('t62R'),
        A = n('6XNv'),
        N = n('rHpw'),
        P = n('3XMw'),
        H = n.n(P),
        U = H.a.c21037d0,
        j = H.a.i2209530,
        G = H.a.j924d222,
        z = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(c()(e), '_handleCountryChange', function (t) {
                e.props.history.replace({
                  pathname: '/i/flow/settings/change_country',
                  query: { return_path: '/settings/country' },
                  state: { input: { country_code: t } },
                })
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
                    t = e.changeCountryFlowStatus,
                    n = e.createLocalApiErrorHandler,
                    r = e.fetchCountryNamesIfNeeded,
                    a = e.fetchSettings,
                    o = e.lang
                  t === T.g.Success && a().catch(n()), r(o || '').catch(n())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.changeCountryFlowStatus,
                    n = e.createLocalApiErrorHandler,
                    r = e.fetchSettings
                  t === T.g.Success && r().catch(n())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.countryCode,
                    n = e.countryList,
                    r = e.location,
                    a = g.a.createElement(
                      H.a.I18NFormatMessage,
                      { $i18n: 'e12a6840' },
                      g.a.createElement(D.b, { link: 'https://support.twitter.com/articles/20169220' }, H.a.ia15900d),
                    )
                  return g.a.createElement(
                    B.a,
                    null,
                    g.a.createElement(
                      O.a,
                      { location: r, submitLabel: j, title: G },
                      g.a.createElement(
                        R.a,
                        { style: M.countrySelector },
                        g.a.createElement(A.a, {
                          helperText: a,
                          label: U,
                          onChange: this._handleCountryChange,
                          options: n,
                          testID: x,
                          value: t || '',
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        M = N.a.create(function (e) {
          return { countrySelector: { margin: e.spaces.space20 } }
        })
      t.default = I(z)
    },
    '6XNv': function (e, t, n) {
      'use strict'
      var r = n('RhWx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        f = n.n(p),
        b = n('KEM+'),
        g = n.n(b),
        m = n('yiKp'),
        y = n.n(m),
        v = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        E = n.n(v),
        C = n('t62R'),
        S = n('piX5'),
        w = n('4r2z'),
        L = n('FG+G'),
        _ = n('rHpw'),
        k = n('k/Ka'),
        F = n('shC7'),
        I = n('MWbm'),
        T = E.a.forwardRef(function (e, t) {
          return Object(k.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        B = function (e) {
          return Object(k.a)('option', e)
        },
        O = 1,
        x = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n(e) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e)),
              g()(u()(r), '_selectRef', E.a.createRef()),
              g()(u()(r), 'state', { isFocused: !1 }),
              g()(u()(r), '_handleChange', function (e) {
                var t = r.props,
                  n = t.onChange,
                  a = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  l = o.value
                n && n(l, i - (a ? 1 : 0))
              }),
              g()(u()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur
                r.setState({ isFocused: !1 }), t && t()
              }),
              g()(u()(r), '_handleFocus', function (e) {
                var t = r.props.onFocus
                r.setState({ isFocused: !0 }), t && t()
              }),
              (r._id = 'SELECTOR_'.concat(O)),
              (r._errorID = ''.concat(r._id, '_ERROR')),
              (r._helperID = ''.concat(r._id, '_HELP')),
              (r._labelID = ''.concat(r._id, '_LABEL')),
              (O += 1),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    n = e.disabled,
                    r = e.errorText,
                    o = e.hasError,
                    i = e.helperText,
                    l = e.options,
                    c = e.style,
                    s = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    h = this.state.isFocused,
                    p = C.b.getLanguage(),
                    f =
                      'ja' === p
                        ? _.a.theme.fontFamilies.japan
                        : F.a.getConstants().isRTL || w.a.isLocaleRTL(p)
                        ? _.a.theme.fontFamilies.rtl
                        : _.a.theme.fontFamilies.normal,
                    b = void 0 === o ? !!r : o,
                    g = new Set()
                  r && g.add(this._errorID), t && g.add(t), i && g.add(this._helperID)
                  var m = g.size ? a()(g).join(' ') : void 0
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(
                      I.a,
                      {
                        style: [
                          S.a.border,
                          R.container,
                          n && S.a.disabled,
                          h && S.a.focusedBorderValid,
                          b && S.a.invalidBorderColor,
                          h && b && S.a.focusedBorderInvalid,
                          c,
                        ],
                      },
                      this._renderLabel(),
                      E.a.createElement(
                        T,
                        {
                          accessibilityDescribedBy: m,
                          accessibilityInvalid: b,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [R.select, { fontFamily: f }, n && S.a.disabled],
                          testID: s || '',
                          value: u,
                        },
                        d ? E.a.createElement(B, { disabled: !0, style: R.option, value: '' }) : null,
                        l.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            r = e.value
                          return E.a.createElement(
                            B,
                            { disabled: t, key: ''.concat(n, '-').concat(r), style: R.option, value: r },
                            n,
                          )
                        }),
                      ),
                      E.a.createElement(L.a, {
                        style: [R.dropdownCaret, h && S.a.validColor, (o || r) && S.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    b && r ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    n = e.hasError,
                    r = e.label,
                    a = this.state.isFocused
                  return E.a.createElement(
                    C.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : a ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: R.label,
                    },
                    r,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return E.a.createElement(
                    I.a,
                    { accessibilityLiveRegion: 'polite' },
                    E.a.createElement(
                      C.b,
                      { color: 'gray700', nativeID: this._helperID, style: R.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return E.a.createElement(
                    I.a,
                    { accessibilityLiveRegion: 'polite' },
                    E.a.createElement(
                      C.b,
                      { color: 'red500', nativeID: this._errorID, style: R.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent)
      g()(x, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (x.propTypes = {})
      var R = _.a.create(function (e) {
        return {
          container: { backgroundColor: e.colors.cellBackground },
          dropdownCaret: {
            color: e.colors.gray700,
            height: ''.concat(1.5, 'em'),
            pointerEvents: 'none',
            position: 'absolute',
            marginTop: '-'.concat(0.75, 'em'),
            top: '50%',
            right: e.spaces.space12,
          },
          label: {
            position: 'absolute',
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space8,
            pointerEvents: 'none',
            lineHeight: e.lineHeights.subtext2,
          },
          option: { backgroundColor: e.colors.navigationBackground },
          select: {
            appearance: 'none',
            backgroundColor: 'transparent',
            borderRadius: e.borderRadii.none,
            borderWidth: e.borderWidths.none,
            color: e.colors.text,
            cursor: 'pointer',
            fontSize: e.fontSizes.headline2,
            lineHeight: e.lineHeights.headline2,
            margin: 0,
            marginTop: e.spaces.space16,
            outlineStyle: 'none',
            padding: 0,
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space8,
            paddingHorizontal: e.spaces.space8,
          },
          helperText: {
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space2,
          },
        }
      })
      t.a = x
    },
    '7FtF': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        p = n('KEM+'),
        f = n.n(p),
        b = (n('2G9S'), n('ERkP')),
        g = n.n(b),
        m = n('P1r1'),
        y = n('G6rE'),
        v = n('rxPX'),
        E = n('0KEI'),
        C = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: m.o, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: m.f,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        S = n('v//M'),
        w = n('3XMw'),
        L = n.n(w),
        _ = n('M2mT'),
        k = 'settingsDetailSave',
        F = n('mw9i'),
        I = n('0yYu'),
        T = n('/yvb'),
        B = n('rHpw'),
        O = L.a.i2209530,
        x = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(c()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return g.a.createElement(S.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              f()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.onSubmit,
                  a = t.submitDisabled,
                  o = t.submitLabel,
                  i = t.submitType,
                  l = t.withMarginBottom
                return g.a.createElement(
                  F.a,
                  { style: [R.contentRoot, l && R.withMarginBottom] },
                  n,
                  r
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(I.a, null),
                        g.a.createElement(
                          F.a,
                          { style: R.buttonContainer },
                          g.a.createElement(T.a, { disabled: a, onPress: r, style: R.button, testID: k, type: i }, o),
                        ),
                      )
                    : null,
                )
              }),
              f()(c()(e), '_handleFetch', function () {
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
                    c = this.getBackLocation(),
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return g.a.createElement(
                    _.a,
                    {
                      backLocation: c,
                      onBackClick: n,
                      rightControl: r,
                      screenType: a,
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
      f()(x, 'defaultProps', { submitLabel: O, submitType: 'brandFilled', withMarginBottom: !0 })
      var R = B.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(B.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = C(x)
    },
    FDFL: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return v
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = n('yiKp'),
        i = n.n(o),
        l = (n('ho0z'), n('tQbP'), n('hBpG'), n('7x/C'), n('JtPf'), n('oEOe')),
        c = n('kGix'),
        s = n('ikiw'),
        u = n('Ssj5'),
        d = n('RqPI'),
        h = 'availableLanguages',
        p = 'rweb/'.concat(h),
        f = l.a(p, 'FETCH_AVAILABLE_LANGUAGES'),
        b = { fetchStatus: c.a.NONE, languages: [] }
      function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.meta && t.meta.lang ? t.meta.lang : 'en',
          r = 'undefined' != typeof Intl && Intl.Collator && new Intl.Collator(n),
          a = r
            ? function (e, t) {
                return r.compare(e.name, t.name)
              }
            : void 0
        switch (t.type) {
          case f.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: c.a.LOADING })
          case f.FAILURE:
            return i()(i()({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
          case f.SUCCESS:
            return i()(i()({}, e), {}, { languages: t.payload.sort(a), fetchStatus: c.a.LOADED })
          default:
            return e
        }
      }
      u.a.register(a()({}, h, g))
      var m = function (e) {
          return e[h].languages
        },
        y = function (e, t) {
          var n = Object(s.c)(t).toLowerCase(),
            r = e[h].languages.find(function (e) {
              return e.code === n
            })
          return r ? r.name : null
        },
        v = function () {
          return function (e, t) {
            return t()[h].fetchStatus === c.a.LOADED ? Promise.resolve() : e(E())
          }
        },
        E = function (e) {
          return function (t, n, r) {
            var a = r.api
            return l.b(t, { params: e, meta: { lang: Object(d.o)(n()) }, request: a.FeatureSwitch.fetchLanguages })({
              actionTypes: f,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('2VqO'),
        f = n.n(p),
        b = n('KEM+'),
        g = n.n(b),
        m = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        v = n.n(y),
        E = n('HPNB'),
        C = n('VAZu'),
        S = n('wiP2'),
        w = n('Es6L'),
        L = n('yiKp'),
        _ = n.n(L),
        k = n('rHpw'),
        F = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: _()(_()({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        I = n('MWbm'),
        T = n('yw4N'),
        B = n('TnY3'),
        O = n('cHvH'),
        x = n('3xLC'),
        R = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        D = (function (e) {
          h()(n, e)
          var t = f()(n)
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
                      I.a,
                      { style: F.fill },
                      v.a.createElement(
                        T.a,
                        { style: F.viewportView },
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
                  return v.a.createElement(O.a, null, function (t) {
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
                      a()(e, R))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(w.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(S.a.Configure, n),
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
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    h = n.onBackClick,
                    p = n.rightControl,
                    f = n.screenType,
                    b = n.searchBoxOptions,
                    g = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    E = n.showSubtitleOnWideDetail,
                    w = n.subtitle,
                    L = n.title,
                    _ = n.titleIconCell,
                    k = n.titleIconCellSize,
                    T = n.withDetailOpen,
                    B = n.withSearchBox,
                    O = n.withTweetButton,
                    x = 'root' === f,
                    R = 'secondaryRoot' === f,
                    D = 'primaryDetail' === f,
                    A = (D && E) || (x && y),
                    N = x || (D && t),
                    P = x ? m.c : D ? m.a : void 0,
                    H = v.a.createElement(
                      I.a,
                      { style: F.appBarContainer },
                      v.a.createElement(C.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: N,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: h,
                        rightControl: p,
                        secondaryBar: g,
                        subtitle: A ? w : void 0,
                        title: L,
                        titleDomId: P,
                        titleIconCell: _,
                        titleIconCellSize: k,
                      }),
                    ),
                    U =
                      x || (R && T)
                        ? null
                        : v.a.createElement(S.a.Configure, {
                            SideNavButton: r,
                            TabBar: a,
                            TeamsSwitcher: o,
                            backLocation: i,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: h,
                            rightControl: p,
                            searchBoxOptions: b,
                            subtitle: w,
                            title: L,
                            withSearchBox: B,
                            withTweetButton: O,
                          })
                  return v.a.createElement(v.a.Fragment, null, U, H)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(D, 'contextType', x.a),
        g()(D, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(B.a)(D)
    },
    'S/HT': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'a', function () {
          return b
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = n('yiKp'),
        i = n.n(o),
        l = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('849X'), n('TJCb'), n('kGix')),
        c = n('Ssj5'),
        s = 'countryNames',
        u = { fetchStatus: l.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(s, '_REQUEST'), FAILURE: ''.concat(s, '_FAILURE'), SUCCESS: ''.concat(s, '_SUCCESS') },
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: l.a.LOADING })
            case d.FAILURE:
              return i()(i()({}, e), {}, { fetchStatus: l.a.NONE })
            case d.SUCCESS:
              return i()(i()({}, e), {}, { countries: t.payload, fetchStatus: l.a.LOADED })
            default:
              return e
          }
        }
      c.a.register(a()({}, s, h))
      var p = function (e) {
          return e.countryNames.countries
        },
        f = function (e, t) {
          var n = t && t.toUpperCase()
          return e.countryNames.countries[n]
        },
        b = function e(t) {
          return function (r, a) {
            return a().countryNames.fetchStatus === l.a.LOADED
              ? Promise.resolve()
              : (r({ type: d.REQUEST }),
                (function (e) {
                  switch (e) {
                    case 'ar':
                      return n.e(251).then(n.t.bind(null, 'heBS', 3))
                    case 'bg':
                      return n.e(252).then(n.t.bind(null, '9kpF', 3))
                    case 'bn':
                      return n.e(253).then(n.t.bind(null, 'GG9y', 3))
                    case 'ca':
                      return n.e(254).then(n.t.bind(null, 'icrD', 3))
                    case 'cs':
                      return n.e(255).then(n.t.bind(null, 'rxOR', 3))
                    case 'da':
                      return n.e(256).then(n.t.bind(null, '6Nxr', 3))
                    case 'de':
                      return n.e(257).then(n.t.bind(null, 'zSOo', 3))
                    case 'el':
                      return n.e(258).then(n.t.bind(null, 'MOmn', 3))
                    case 'en-GB':
                      return n.e(260).then(n.t.bind(null, 'vzeG', 3))
                    case 'en':
                      return n.e(259).then(n.t.bind(null, 'WqZ6', 3))
                    case 'es':
                      return n.e(261).then(n.t.bind(null, 'v4/g', 3))
                    case 'eu':
                      return n.e(262).then(n.t.bind(null, 'KXIK', 3))
                    case 'fa':
                      return n.e(263).then(n.t.bind(null, 'vzCi', 3))
                    case 'fi':
                      return n.e(264).then(n.t.bind(null, 'YthM', 3))
                    case 'fil':
                      return n.e(265).then(n.t.bind(null, 'AcRS', 3))
                    case 'fr':
                      return n.e(266).then(n.t.bind(null, 'PuNY', 3))
                    case 'ga':
                      return n.e(267).then(n.t.bind(null, 'FSy8', 3))
                    case 'gl':
                      return n.e(268).then(n.t.bind(null, 'igcB', 3))
                    case 'gu':
                      return n.e(269).then(n.t.bind(null, 'DaQw', 3))
                    case 'he':
                      return n.e(270).then(n.t.bind(null, '8mgg', 3))
                    case 'hi':
                      return n.e(271).then(n.t.bind(null, 'w88S', 3))
                    case 'hr':
                      return n.e(272).then(n.t.bind(null, 'dvLs', 3))
                    case 'hu':
                      return n.e(273).then(n.t.bind(null, '9fGX', 3))
                    case 'id':
                      return n.e(274).then(n.t.bind(null, 'elf3', 3))
                    case 'it':
                      return n.e(275).then(n.t.bind(null, 'sxFK', 3))
                    case 'ja':
                      return n.e(276).then(n.t.bind(null, '1/Dg', 3))
                    case 'kn':
                      return n.e(277).then(n.t.bind(null, 'nFOI', 3))
                    case 'ko':
                      return n.e(278).then(n.t.bind(null, 'RRUG', 3))
                    case 'mr':
                      return n.e(279).then(n.t.bind(null, 'EpxJ', 3))
                    case 'ms':
                      return n.e(280).then(n.t.bind(null, 'cSS2', 3))
                    case 'nb':
                      return n.e(281).then(n.t.bind(null, 'bg3k', 3))
                    case 'nl':
                      return n.e(282).then(n.t.bind(null, 'eXnI', 3))
                    case 'pl':
                      return n.e(283).then(n.t.bind(null, 'ACpo', 3))
                    case 'pt':
                      return n.e(284).then(n.t.bind(null, 'J0At', 3))
                    case 'ro':
                      return n.e(285).then(n.t.bind(null, 'hxXa', 3))
                    case 'ru':
                      return n.e(286).then(n.t.bind(null, 'gXfs', 3))
                    case 'sk':
                      return n.e(287).then(n.t.bind(null, 'fy2h', 3))
                    case 'sr':
                      return n.e(288).then(n.t.bind(null, 'FmvU', 3))
                    case 'sv':
                      return n.e(289).then(n.t.bind(null, 'prb2', 3))
                    case 'ta':
                      return n.e(290).then(n.t.bind(null, '8KkY', 3))
                    case 'th':
                      return n.e(291).then(n.t.bind(null, 'g4c5', 3))
                    case 'tr':
                      return n.e(292).then(n.t.bind(null, 'NngR', 3))
                    case 'uk':
                      return n.e(293).then(n.t.bind(null, '62bs', 3))
                    case 'ur':
                      return n.e(294).then(n.t.bind(null, 'aKQ3', 3))
                    case 'zh-Hant':
                      return n.e(296).then(n.t.bind(null, 'Wk8C', 3))
                    case 'zh':
                      return n.e(295).then(n.t.bind(null, 'YXaK', 3))
                    default:
                      return Promise.reject(
                        new Error('Tried to import country names for unknown language key: '.concat(e)),
                      )
                  }
                })(t)
                  .then(function (e) {
                    var n = e.main[t].localeDisplayNames.territories
                    r({ type: d.SUCCESS, payload: n })
                  })
                  .catch(function () {
                    r('en' === t ? { type: d.FAILURE } : e('en'))
                  }))
          }
        }
    },
    oK9f: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LanguageScreen', function () {
          return F
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        l = (n('z84I'), n('ho0z'), n('2G9S'), n('P1r1')),
        c = n('ikiw'),
        s = n('3XMw'),
        u = n.n(s),
        d = n('RqPI'),
        h = n('rxPX'),
        p = n('0KEI'),
        f = n('FDFL'),
        b = u.a.cef33711,
        g = Object(h.a)()
          .propsFromState(function () {
            return { languageCode: d.o, languageList: f.c }
          })
          .adjustStateProps(function (e) {
            var t = e.languageCode,
              n = e.languageList
            return {
              languageCode: Object(c.c)(t).toLowerCase(),
              languageList: n.map(function (e) {
                var t = e.code,
                  n = e.local_name,
                  r = e.name,
                  a = 'beta' === e.status ? b({ languageName: r }) : r
                return { label: r === n ? a : ''.concat(a, ' - ').concat(n), value: t }
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_LANGUAGE_SCREEN',
              ),
              fetchAvailableLanguagesIfNeeded: f.a,
              updateSettings: l.N,
            }
          })
          .withAnalytics({ page: 'settings', section: 'language' }),
        m = n('yoO3'),
        y = n('7FtF'),
        v = 'languageSelector',
        E = n('MWbm'),
        C = n('6XNv'),
        S = n('rHpw'),
        w = u.a.a4b69cbb,
        L = u.a.i2209530,
        _ = u.a.f953f53a,
        k = u.a.b67e1fc0,
        F = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchAvailableLanguagesIfNeeded,
            r = e.languageCode,
            o = e.languageList,
            l = e.location,
            c = i.a.useState(r),
            s = a()(c, 2),
            u = s[0],
            d = s[1]
          i.a.useEffect(
            function () {
              n().catch(t({ showToast: !0 }))
            },
            [t, n],
          )
          var h = i.a.useCallback(function (e) {
            return d(e)
          }, [])
          return i.a.createElement(
            m.a,
            null,
            i.a.createElement(
              y.a,
              {
                location: l,
                onSubmit: function () {
                  var t = e.analytics,
                    n = e.createLocalApiErrorHandler,
                    r = e.updateSettings
                  t.scribe({ action: 'edit' }),
                    r({ lang: u })
                      .then(function () {
                        window.location.reload(!0)
                      })
                      .catch(n({ showToast: !0 }))
                },
                submitDisabled: u === r,
                submitLabel: L,
                title: _,
              },
              i.a.createElement(
                E.a,
                { style: I.languageSelector, testID: v },
                i.a.createElement(C.a, { helperText: k, label: w, onChange: h, options: o, value: u }),
              ),
            ),
          )
        },
        I = S.a.create(function (e) {
          return { languageSelector: { margin: e.spaces.space20 } }
        })
      t.default = g(F)
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
