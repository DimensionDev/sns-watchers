;(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    '5lkF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CountryScreen', function () {
          return W
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        b = n('KEM+'),
        y = n.n(b),
        g = (n('2G9S'), n('MvUL'), n('KqXw'), n('ERkP')),
        m = n('P1r1'),
        v = (n('+KXO'), n('7xRU'), n('tQbP'), n('LW0h'), n('z84I'), []),
        O = {},
        E = n('O0uF'),
        S = n('RqPI'),
        w = n('rxPX'),
        C = n('0KEI'),
        L = n('S/HT'),
        _ = [],
        R = function (e) {
          var t = Object(E.h)(e, 'account_country_setting_countries_whitelist'),
            n = Object(L.c)(e)
          return Array.isArray(t)
            ? (function (e, t) {
                if (!e.length || 0 === Object.keys(t).length) return v
                var n = e.join()
                return (
                  O[n] ||
                    (O[n] = e
                      .map(function (e) {
                        return { label: t[e.toUpperCase()], value: e }
                      })
                      .filter(function (e) {
                        return e.label
                      })
                      .sort(function (e, t) {
                        return e.label.localeCompare(t.label)
                      })),
                  O[n]
                )
              })(t, n)
            : _
        },
        P = function (e, t) {
          var n, r
          return null === (n = t.location) || void 0 === n || null === (r = n.query) || void 0 === r
            ? void 0
            : r.flow_status
        },
        B = Object(w.a)()
          .propsFromState(function () {
            return { countryCode: m.j, countryList: R, changeCountryFlowStatus: P, lang: S.n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_COUNTRY_SCREEN',
              ),
              fetchCountryNamesIfNeeded: L.a,
              updateSettings: m.L,
              fetchSettings: m.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'country' }),
        j = n('q82E'),
        F = n('yoO3'),
        D = n('7FtF'),
        T = 'Settings_Country_Selector',
        k = n('MWbm'),
        I = n('t62R'),
        x = n('6XNv'),
        A = n('rHpw'),
        N = n('3XMw'),
        H = n.n(N)
      function U(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var M = H.a.c21037d0,
        z = H.a.i2209530,
        G = H.a.j924d222,
        W = (function (e) {
          s()(n, e)
          var t = U(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(l()(e), '_handleCountryChange', function (t) {
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
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.changeCountryFlowStatus,
                    n = e.createLocalApiErrorHandler,
                    r = e.fetchCountryNamesIfNeeded,
                    a = e.fetchSettings,
                    o = e.lang
                  t === j.f.Success && a().catch(n()), r(o || '').catch(n())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.changeCountryFlowStatus,
                    n = e.createLocalApiErrorHandler,
                    r = e.fetchSettings
                  t === j.f.Success && r().catch(n())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.countryCode,
                    n = e.countryList,
                    r = e.location,
                    a = g.createElement(
                      H.a.I18NFormatMessage,
                      { $i18n: 'e12a6840' },
                      g.createElement(I.b, { link: 'https://support.twitter.com/articles/20169220' }, H.a.ia15900d),
                    )
                  return g.createElement(
                    F.a,
                    null,
                    g.createElement(
                      D.a,
                      { location: r, submitLabel: z, title: G },
                      g.createElement(
                        k.a,
                        { style: K.countrySelector },
                        g.createElement(x.a, {
                          helperText: a,
                          label: M,
                          onChange: this._handleCountryChange,
                          options: n,
                          testID: T,
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
        })(g.Component),
        K = A.a.create(function (e) {
          return { countrySelector: { margin: e.spaces.space20 } }
        })
      t.default = B(W)
    },
    '6XNv': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        l = n.n(i),
        u = n('1Pcy'),
        s = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        b = n('AuHH'),
        y = n.n(b),
        g = n('KEM+'),
        m = n.n(g),
        v = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        O = n('t62R'),
        E = n('piX5'),
        S = n('4r2z'),
        w = n('FG+G'),
        C = n('rHpw'),
        L = (n('aWzz'), n('k/Ka')),
        _ = n('shC7'),
        R = n('MWbm')
      function P(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      function B(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var F = v.forwardRef(function (e, t) {
          return Object(L.a)('select', j(j({}, e), {}, { ref: t }))
        }),
        D = function (e) {
          return Object(L.a)('option', e)
        },
        T = 1,
        k = (function (e) {
          p()(n, e)
          var t = P(n)
          function n(e) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e)),
              m()(s()(r), '_selectRef', v.createRef()),
              m()(s()(r), 'state', { isFocused: !1 }),
              m()(s()(r), '_handleChange', function (e) {
                var t = r.props,
                  n = t.onChange,
                  a = t.withEmptyOption,
                  o = e.target,
                  c = o.selectedIndex,
                  i = o.value
                n && n(i, c - (a ? 1 : 0))
              }),
              m()(s()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur
                r.setState({ isFocused: !1 }), t && t()
              }),
              m()(s()(r), '_handleFocus', function (e) {
                var t = r.props.onFocus
                r.setState({ isFocused: !0 }), t && t()
              }),
              (r._id = 'SELECTOR_'.concat(T)),
              (r._errorID = ''.concat(r._id, '_ERROR')),
              (r._helperID = ''.concat(r._id, '_HELP')),
              (r._labelID = ''.concat(r._id, '_LABEL')),
              (T += 1),
              r
            )
          }
          return (
            l()(n, [
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
                    c = e.helperText,
                    i = e.options,
                    l = e.style,
                    u = e.testID,
                    s = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    f = O.b.getLanguage(),
                    h =
                      'ja' === f
                        ? C.a.theme.fontFamilies.japan
                        : _.a.getConstants().isRTL || S.a.isLocaleRTL(f)
                        ? C.a.theme.fontFamilies.rtl
                        : C.a.theme.fontFamilies.normal,
                    b = void 0 === o ? !!r : o,
                    y = new Set()
                  r && y.add(this._errorID), t && y.add(t), c && y.add(this._helperID)
                  var g = y.size ? a()(y).join(' ') : void 0
                  return v.createElement(
                    v.Fragment,
                    null,
                    v.createElement(
                      R.a,
                      {
                        style: [
                          E.a.border,
                          I.container,
                          n && E.a.disabled,
                          p && E.a.focusedBorderValid,
                          b && E.a.invalidBorderColor,
                          p && b && E.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      v.createElement(
                        F,
                        {
                          accessibilityDescribedBy: g,
                          accessibilityInvalid: b,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [I.select, { fontFamily: h }, n && E.a.disabled],
                          testID: u || '',
                          value: s,
                        },
                        d ? v.createElement(D, { disabled: !0, style: I.option, value: '' }) : null,
                        i.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            r = e.value
                          return v.createElement(
                            D,
                            { disabled: t, key: ''.concat(n, '-').concat(r), style: I.option, value: r },
                            n,
                          )
                        }),
                      ),
                      v.createElement(w.a, {
                        style: [I.dropdownCaret, p && E.a.validColor, (o || r) && E.a.invalidColor],
                      }),
                    ),
                    c ? this._renderHelperText() : null,
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
                  return v.createElement(
                    O.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : a ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: I.label,
                    },
                    r,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return v.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    v.createElement(
                      O.b,
                      { color: 'gray700', nativeID: this._helperID, style: I.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return v.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    v.createElement(
                      O.b,
                      { color: 'red500', nativeID: this._errorID, style: I.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.PureComponent)
      m()(k, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (k.propTypes = {})
      var I = C.a.create(function (e) {
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
      t.a = k
    },
    '7FtF': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        b = n('KEM+'),
        y = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        m = n('P1r1'),
        v = n('G6rE'),
        O = n('rxPX'),
        E = n('0KEI'),
        S = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: m.o, loggedInUser: v.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: m.f,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        w = n('v//M'),
        C = n('3XMw'),
        L = n.n(C),
        _ = n('M2mT'),
        R = 'settingsDetailSave',
        P = n('mw9i'),
        B = n('0yYu'),
        j = n('/yvb'),
        F = n('rHpw')
      function D(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var T = L.a.i2209530,
        k = (function (e) {
          s()(n, e)
          var t = D(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return g.createElement(w.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              y()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.onSubmit,
                  a = t.submitDisabled,
                  o = t.submitLabel,
                  c = t.submitType,
                  i = t.withMarginBottom
                return g.createElement(
                  P.a,
                  { style: [I.contentRoot, i && I.withMarginBottom] },
                  n,
                  r
                    ? g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(B.a, null),
                        g.createElement(
                          P.a,
                          { style: I.buttonContainer },
                          g.createElement(j.a, { disabled: a, onPress: r, style: I.button, testID: R, type: c }, o),
                        ),
                      )
                    : null,
                )
              }),
              y()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    n = e.rightControl,
                    r = e.screenType,
                    a = e.secondaryBar,
                    o = e.title,
                    c = e.withBottomBorder,
                    i = this.getBackLocation(),
                    l = t ? '@'.concat(t.screen_name) : void 0
                  return g.createElement(
                    _.a,
                    {
                      backLocation: i,
                      rightControl: n,
                      screenType: r,
                      secondaryBar: a,
                      showSubtitleOnWideDetail: !1,
                      subtitle: l,
                      title: o,
                      withBottomBorder: c,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      y()(k, 'defaultProps', { submitLabel: T, submitType: 'brandFilled', withMarginBottom: !0 })
      var I = F.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(F.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = S(k)
    },
    FDFL: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('ho0z'), n('tQbP'), n('hBpG'), n('JtPf'), n('7x/C'), n('oEOe')),
        c = n('kGix'),
        i = n('ikiw'),
        l = n('Ssj5'),
        u = n('RqPI')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = 'availableLanguages',
        f = 'rweb/'.concat(p),
        h = o.a(f, 'FETCH_AVAILABLE_LANGUAGES'),
        b = { fetchStatus: c.a.NONE, languages: [] }
      function y() {
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
          case h.REQUEST:
            return d(d({}, e), {}, { fetchStatus: c.a.LOADING })
          case h.FAILURE:
            return d(d({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
          case h.SUCCESS:
            return d(d({}, e), {}, { languages: t.payload.sort(a), fetchStatus: c.a.LOADED })
          default:
            return e
        }
      }
      l.a.register(a()({}, p, y))
      var g = function (e) {
          return e[p].languages
        },
        m = function (e, t) {
          var n = Object(i.c)(t).toLowerCase(),
            r = e[p].languages.find(function (e) {
              return e.code === n
            })
          return r ? r.name : null
        },
        v = function () {
          return function (e, t) {
            return t()[p].fetchStatus === c.a.LOADED ? Promise.resolve() : e(O())
          }
        },
        O = function (e) {
          return function (t, n, r) {
            var a = r.api
            return o.b(t, { params: e, meta: { lang: Object(u.n)(n()) }, request: a.FeatureSwitch.fetchLanguages })({
              actionTypes: h,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
    },
    M2mT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        l = n.n(i),
        u = n('1Pcy'),
        s = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        b = n('AuHH'),
        y = n.n(b),
        g = n('KEM+'),
        m = n.n(g),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        O = n('ERkP'),
        E = n('HPNB'),
        S = n('v6aA'),
        w = n('VAZu'),
        C = n('wiP2'),
        L = n('Es6L'),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function R(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var B = _.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: P(P({}, _.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        j = n('MWbm'),
        F = n('yw4N'),
        D = n('TnY3'),
        T = n('cHvH'),
        k = n('3xLC')
      function I(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var x = (function (e) {
        p()(n, e)
        var t = I(n)
        function n() {
          var e
          c()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            m()(s()(e), '_renderChildren', function (t) {
              var n = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? O.createElement(
                    j.a,
                    { style: B.fill },
                    O.createElement(
                      F.a,
                      { style: B.viewportView },
                      t ? e._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      n,
                    ),
                  )
                : n
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
                return O.createElement(T.a, null, function (t) {
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
                    a()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return O.createElement(
                  O.Fragment,
                  null,
                  Object(L.a)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : O.createElement(C.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this,
                  t = this.context.rootDetailPerColumnScroll
                return O.createElement(S.a.Consumer, null, function (n) {
                  var r = n.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    a = t
                      ? !r && e._renderInlineNav({ isTwoColumnLayout: !0 })
                      : e._renderInlineNav({ isTwoColumnLayout: !0 })
                  return O.createElement(O.Fragment, null, a, e._renderChildren(r))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.appBarScrollEnabled,
                  n = void 0 !== t && t,
                  r = e.isTwoColumnLayout,
                  a = this.props,
                  o = a.SideNavButton,
                  c = a.TabBar,
                  i = a.TeamsSwitcher,
                  l = a.backLocation,
                  u = a.documentTitle,
                  s = a.headerless,
                  d = a.history,
                  p = a.leftControl,
                  f = a.middleControl,
                  h = a.onBackClick,
                  b = a.rightControl,
                  y = a.screenType,
                  g = a.searchBoxOptions,
                  m = a.secondaryBar,
                  E = a.showSubtitleOnRoot,
                  S = a.showSubtitleOnWideDetail,
                  L = a.subtitle,
                  _ = a.title,
                  R = a.titleIconCell,
                  P = a.titleIconCellSize,
                  F = a.withBottomBorder,
                  D = a.withDetailOpen,
                  T = a.withSearchBox,
                  k = a.withTweetButton,
                  I = 'root' === y,
                  x = 'secondaryRoot' === y,
                  A = 'primaryDetail' === y,
                  N = (A && S) || (I && E),
                  H = I || (A && r),
                  U = I ? v.c : A ? v.a : void 0,
                  M = O.createElement(
                    j.a,
                    { style: n ? [B.appBarContainer, B.appBarZindex] : B.appBarZindex },
                    O.createElement(w.a, {
                      backLocation: l,
                      fixed: !1,
                      hideBackButton: H,
                      history: d,
                      leftControl: p,
                      middleControl: f,
                      onBackClick: h,
                      rightControl: b,
                      secondaryBar: n ? m : null,
                      subtitle: N ? L : void 0,
                      title: _,
                      titleDomId: U,
                      titleIconCell: R,
                      titleIconCellSize: P,
                      withBottomBorder: F,
                    }),
                  ),
                  z =
                    I || (x && D)
                      ? null
                      : O.createElement(C.a.Configure, {
                          SideNavButton: o,
                          TabBar: c,
                          TeamsSwitcher: i,
                          backLocation: l,
                          documentTitle: u,
                          headerless: s,
                          middleControl: f,
                          onBackClick: h,
                          rightControl: b,
                          searchBoxOptions: g,
                          subtitle: L,
                          title: _,
                          withSearchBox: T,
                          withTweetButton: k,
                        })
                return O.createElement(O.Fragment, null, z, M, n ? null : m)
              },
            },
          ]),
          n
        )
      })(O.Component)
      m()(x, 'contextType', k.a),
        m()(x, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(D.a)(x)
    },
    'S/HT': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return b
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('kGix')),
        c = n('Ssj5')
      function i(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = 'countryNames',
        s = { fetchStatus: o.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(u, '_REQUEST'), FAILURE: ''.concat(u, '_FAILURE'), SUCCESS: ''.concat(u, '_SUCCESS') },
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              return l(l({}, e), {}, { fetchStatus: o.a.LOADING })
            case d.FAILURE:
              return l(l({}, e), {}, { fetchStatus: o.a.NONE })
            case d.SUCCESS:
              return l(l({}, e), {}, { countries: t.payload, fetchStatus: o.a.LOADED })
            default:
              return e
          }
        }
      c.a.register(a()({}, u, p))
      var f = function (e) {
          return e.countryNames.countries
        },
        h = function (e, t) {
          var n = t && t.toUpperCase()
          return e.countryNames.countries[n]
        },
        b = function e(t) {
          return function (r, a) {
            return a().countryNames.fetchStatus === o.a.LOADED
              ? Promise.resolve()
              : (r({ type: d.REQUEST }),
                (function (e) {
                  switch (e) {
                    case 'ar':
                      return n.e(233).then(n.t.bind(null, 'heBS', 3))
                    case 'bg':
                      return n.e(234).then(n.t.bind(null, '9kpF', 3))
                    case 'bn':
                      return n.e(235).then(n.t.bind(null, 'GG9y', 3))
                    case 'ca':
                      return n.e(236).then(n.t.bind(null, 'icrD', 3))
                    case 'cs':
                      return n.e(237).then(n.t.bind(null, 'rxOR', 3))
                    case 'da':
                      return n.e(238).then(n.t.bind(null, '6Nxr', 3))
                    case 'de':
                      return n.e(239).then(n.t.bind(null, 'zSOo', 3))
                    case 'el':
                      return n.e(240).then(n.t.bind(null, 'MOmn', 3))
                    case 'en-GB':
                      return n.e(242).then(n.t.bind(null, 'vzeG', 3))
                    case 'en':
                      return n.e(241).then(n.t.bind(null, 'WqZ6', 3))
                    case 'es':
                      return n.e(243).then(n.t.bind(null, 'v4/g', 3))
                    case 'eu':
                      return n.e(244).then(n.t.bind(null, 'KXIK', 3))
                    case 'fa':
                      return n.e(245).then(n.t.bind(null, 'vzCi', 3))
                    case 'fi':
                      return n.e(246).then(n.t.bind(null, 'YthM', 3))
                    case 'fil':
                      return n.e(247).then(n.t.bind(null, 'AcRS', 3))
                    case 'fr':
                      return n.e(248).then(n.t.bind(null, 'PuNY', 3))
                    case 'ga':
                      return n.e(249).then(n.t.bind(null, 'FSy8', 3))
                    case 'gl':
                      return n.e(250).then(n.t.bind(null, 'igcB', 3))
                    case 'gu':
                      return n.e(251).then(n.t.bind(null, 'DaQw', 3))
                    case 'he':
                      return n.e(252).then(n.t.bind(null, '8mgg', 3))
                    case 'hi':
                      return n.e(253).then(n.t.bind(null, 'w88S', 3))
                    case 'hr':
                      return n.e(254).then(n.t.bind(null, 'dvLs', 3))
                    case 'hu':
                      return n.e(255).then(n.t.bind(null, '9fGX', 3))
                    case 'id':
                      return n.e(256).then(n.t.bind(null, 'elf3', 3))
                    case 'it':
                      return n.e(257).then(n.t.bind(null, 'sxFK', 3))
                    case 'ja':
                      return n.e(258).then(n.t.bind(null, '1/Dg', 3))
                    case 'kn':
                      return n.e(259).then(n.t.bind(null, 'nFOI', 3))
                    case 'ko':
                      return n.e(260).then(n.t.bind(null, 'RRUG', 3))
                    case 'mr':
                      return n.e(261).then(n.t.bind(null, 'EpxJ', 3))
                    case 'ms':
                      return n.e(262).then(n.t.bind(null, 'cSS2', 3))
                    case 'nb':
                      return n.e(263).then(n.t.bind(null, 'bg3k', 3))
                    case 'nl':
                      return n.e(264).then(n.t.bind(null, 'eXnI', 3))
                    case 'pl':
                      return n.e(265).then(n.t.bind(null, 'ACpo', 3))
                    case 'pt':
                      return n.e(266).then(n.t.bind(null, 'J0At', 3))
                    case 'ro':
                      return n.e(267).then(n.t.bind(null, 'hxXa', 3))
                    case 'ru':
                      return n.e(268).then(n.t.bind(null, 'gXfs', 3))
                    case 'sk':
                      return n.e(269).then(n.t.bind(null, 'fy2h', 3))
                    case 'sr':
                      return n.e(270).then(n.t.bind(null, 'FmvU', 3))
                    case 'sv':
                      return n.e(271).then(n.t.bind(null, 'prb2', 3))
                    case 'ta':
                      return n.e(272).then(n.t.bind(null, '8KkY', 3))
                    case 'th':
                      return n.e(273).then(n.t.bind(null, 'g4c5', 3))
                    case 'tr':
                      return n.e(274).then(n.t.bind(null, 'NngR', 3))
                    case 'uk':
                      return n.e(275).then(n.t.bind(null, '62bs', 3))
                    case 'ur':
                      return n.e(276).then(n.t.bind(null, 'aKQ3', 3))
                    case 'zh-Hant':
                      return n.e(278).then(n.t.bind(null, 'Wk8C', 3))
                    case 'zh':
                      return n.e(277).then(n.t.bind(null, 'YXaK', 3))
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
          return _
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        c = (n('z84I'), n('ho0z'), n('2G9S'), n('P1r1')),
        i = n('ikiw'),
        l = n('3XMw'),
        u = n.n(l),
        s = n('RqPI'),
        d = n('rxPX'),
        p = n('0KEI'),
        f = n('FDFL'),
        h = u.a.cef33711,
        b = Object(d.a)()
          .propsFromState(function () {
            return { languageCode: s.n, languageList: f.c }
          })
          .adjustStateProps(function (e) {
            var t = e.languageCode,
              n = e.languageList
            return {
              languageCode: Object(i.c)(t).toLowerCase(),
              languageList: n.map(function (e) {
                var t = e.code,
                  n = e.local_name,
                  r = e.name,
                  a = 'beta' === e.status ? h({ languageName: r }) : r
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
              updateSettings: c.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'language' }),
        y = n('yoO3'),
        g = n('7FtF'),
        m = 'languageSelector',
        v = n('MWbm'),
        O = n('6XNv'),
        E = n('rHpw'),
        S = u.a.a4b69cbb,
        w = u.a.i2209530,
        C = u.a.f953f53a,
        L = u.a.b67e1fc0,
        _ = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchAvailableLanguagesIfNeeded,
            r = e.languageCode,
            c = e.languageList,
            i = e.location,
            l = o.useState(r),
            u = a()(l, 2),
            s = u[0],
            d = u[1]
          o.useEffect(
            function () {
              n().catch(t({ showToast: !0 }))
            },
            [t, n],
          )
          var p = o.useCallback(function (e) {
            return d(e)
          }, [])
          return o.createElement(
            y.a,
            null,
            o.createElement(
              g.a,
              {
                location: i,
                onSubmit: function () {
                  var t = e.analytics,
                    n = e.createLocalApiErrorHandler,
                    r = e.updateSettings
                  t.scribe({ action: 'edit' }),
                    r({ lang: s })
                      .then(function () {
                        window.location.reload(!0)
                      })
                      .catch(n({ showToast: !0 }))
                },
                submitDisabled: s === r,
                submitLabel: w,
                title: C,
              },
              o.createElement(
                v.a,
                { style: R.languageSelector, testID: m },
                o.createElement(O.a, { helperText: L, label: S, onChange: p, options: c, value: s }),
              ),
            ),
          )
        },
        R = E.a.create(function (e) {
          return { languageSelector: { margin: e.spaces.space20 } }
        })
      t.default = b(_)
    },
  },
])
//# sourceMappingURL=WIPED
