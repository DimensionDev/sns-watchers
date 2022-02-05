;(window.webpackJsonp = window.webpackJsonp || []).push([
  [197],
  {
    '+/sI': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      }),
        n.d(t, 'b', function () {
          return w
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        f = n.n(d),
        h = (n('Wd/2'), n('M+/F'), n('2G9S'), n('ERkP')),
        p = n.n(h),
        m = n('TGcR'),
        y = n('t62R'),
        b = n('a6qo'),
        g = n('rHpw')
      function v(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var _ = 'animated_gif',
        w = 'video',
        E = (function (e) {
          s()(n, e)
          var t = v(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.durationInMilliseconds,
                    r = t.type
                  if (r === _ || 'vine' === r)
                    e =
                      r === _
                        ? p.a.createElement(y.b, { weight: 'bold' }, 'GIF')
                        : p.a.createElement(m.a, { style: T.icon })
                  else if (r === w && n) {
                    var a = Math.trunc(n / 6e4),
                      o = '0'.concat(Math.trunc((n % 6e4) / 1e3)).slice(-2)
                    e = p.a.createElement(y.b, { color: 'white' }, ''.concat(a, ':').concat(o))
                  }
                  return e ? p.a.createElement(b.a, { align: 'left' }, e) : null
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        T = g.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = E
    },
    '6XNv': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('N+ot'),
        p = n.n(h),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(v),
        w = n('t62R'),
        E = n('piX5'),
        T = n('4r2z'),
        D = n('FG+G'),
        O = n('rHpw'),
        S = (n('aWzz'), n('k/Ka')),
        C = n('shC7'),
        x = n('MWbm')
      function R(e) {
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
          return p()(this, n)
        }
      }
      function j(e, t) {
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
            ? j(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var I = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', P(P({}, e), {}, { ref: t }))
        }),
        F = function (e) {
          return Object(S.a)('option', e)
        },
        k = 1,
        L = (function (e) {
          f()(n, e)
          var t = R(n)
          function n(e) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e)),
              g()(u()(r), '_selectRef', _.a.createRef()),
              g()(u()(r), 'state', { isFocused: !1 }),
              g()(u()(r), '_handleChange', function (e) {
                var t = r.props,
                  n = t.onChange,
                  a = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  c = o.value
                n && n(c, i - (a ? 1 : 0))
              }),
              g()(u()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur
                r.setState({ isFocused: !1 }), t && t()
              }),
              g()(u()(r), '_handleFocus', function (e) {
                var t = r.props.onFocus
                r.setState({ isFocused: !0 }), t && t()
              }),
              (r._id = 'SELECTOR_'.concat(k)),
              (r._errorID = ''.concat(r._id, '_ERROR')),
              (r._helperID = ''.concat(r._id, '_HELP')),
              (r._labelID = ''.concat(r._id, '_LABEL')),
              (k += 1),
              r
            )
          }
          return (
            s()(n, [
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
                    c = e.options,
                    s = e.style,
                    l = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    f = this.state.isFocused,
                    h = w.b.getLanguage(),
                    p =
                      'ja' === h
                        ? O.a.theme.fontFamilies.japan
                        : C.a.getConstants().isRTL || T.a.isLocaleRTL(h)
                        ? O.a.theme.fontFamilies.rtl
                        : O.a.theme.fontFamilies.normal,
                    m = void 0 === o ? !!r : o,
                    y = new Set()
                  r && y.add(this._errorID), t && y.add(t), i && y.add(this._helperID)
                  var b = y.size ? a()(y).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      x.a,
                      {
                        style: [
                          E.a.border,
                          B.container,
                          n && E.a.disabled,
                          f && E.a.focusedBorderValid,
                          m && E.a.invalidBorderColor,
                          f && m && E.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        I,
                        {
                          accessibilityDescribedBy: b,
                          accessibilityInvalid: m,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [B.select, { fontFamily: p }, n && E.a.disabled],
                          testID: l || '',
                          value: u,
                        },
                        d ? _.a.createElement(F, { disabled: !0, style: B.option, value: '' }) : null,
                        c.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            r = e.value
                          return _.a.createElement(
                            F,
                            { disabled: t, key: ''.concat(n, '-').concat(r), style: B.option, value: r },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(D.a, {
                        style: [B.dropdownCaret, f && E.a.validColor, (o || r) && E.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    m && r ? this._renderErrorText() : null,
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
                  return _.a.createElement(
                    w.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : a ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: B.label,
                    },
                    r,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    x.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'gray700', nativeID: this._helperID, style: B.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    x.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'red500', nativeID: this._errorID, style: B.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      g()(L, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (L.propTypes = {})
      var B = O.a.create(function (e) {
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
      t.a = L
    },
    '77Ml': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return H
      })
      n('OZaJ')
      var r,
        a = n('ddV6'),
        o = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        u = n('1Pcy'),
        d = n.n(u),
        f = n('5Yy7'),
        h = n.n(f),
        p = n('N+ot'),
        m = n.n(p),
        y = n('AuHH'),
        b = n.n(y),
        g = n('KEM+'),
        v = n.n(g),
        _ = n('RhWx'),
        w = n.n(_),
        E =
          (n('7x/C'),
          n('lTEL'),
          n('kYxP'),
          n('M+/F'),
          n('2G9S'),
          n('Blm6'),
          n('z84I'),
          n('DZ+c'),
          n('WNMA'),
          n('KqXw'),
          n('Ysgh'),
          n('ERkP')),
        T = n.n(E),
        D = n('t62R'),
        O = n('p+r5'),
        S = n('6XNv'),
        C = n('rHpw'),
        x = n('aITJ'),
        R = n('MWbm'),
        j = (n('aWzz'), n('T0aG')),
        P = n.n(j),
        I =
          (n('FwaZ'),
          (r = {}),
          function (e) {
            var t = void 0 === e ? 'undefined' : e.toString()
            if (!r.hasOwnProperty(t)) {
              var n = { use24HourTime: !!e, hourFormat: e ? '2-digit' : 'numeric', minuteFormat: '2-digit' }
              if ('object' === P()(window.Intl)) {
                var a = new window.Intl.DateTimeFormat('default', {
                  hour12: void 0 === e ? void 0 : !e,
                  hour: 'numeric',
                  minute: 'numeric',
                }).resolvedOptions()
                ;(n.use24HourTime = !a.hour12),
                  (n.hourFormat = a.hour || n.hourFormat),
                  (n.minuteFormat = a.minute || n.minuteFormat)
              }
              r[t] = n
            }
            return r[t]
          }),
        F = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '0',
            r = n.repeat(t),
            a = 'number' == typeof e ? ''.concat(e) : ''
          return a.length >= t ? a : ''.concat(r).concat(a).slice(-t)
        }
      function k(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var L = w()(Array(24).keys()),
        B = w()(Array(13).keys()).slice(1),
        M = w()(Array(60).keys()),
        H = (function (e) {
          h()(n, e)
          var t = k(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(d()(e), '_handleChange', function (t) {
                var n = e.props,
                  r = n.hour,
                  a = n.minute,
                  o = n.onChange
                ;(t.hour === r && t.minute === a) || o(t)
              }),
              v()(d()(e), '_handleNativeChange', function (t) {
                var n = t.target.value
                e._handleChange(A.parse(n))
              }),
              v()(d()(e), '_handleHourChange', function (t) {
                var n,
                  r = e._getLocale().use24HourTime,
                  a = e.props,
                  o = a.hour,
                  i = a.minute
                t && ((n = parseInt(t, 10)), r || 'number' != typeof o || (o > 12 ? (n = (n + 12) % 24) : (n %= 12))),
                  e._handleChange(new A(n, i))
              }),
              v()(d()(e), '_handleMinuteChange', function (t) {
                var n = e.props.hour,
                  r = t ? parseInt(t, 10) : void 0
                e._handleChange(new A(n, r))
              }),
              v()(d()(e), '_handleAmPmChange', function (t) {
                var n = e.props.hour,
                  r = e.props.minute
                switch (t) {
                  case 'am':
                    'number' == typeof n && n >= 12 && (n -= 12)
                    break
                  case 'pm':
                    'number' == typeof n && n < 12 && (n += 12)
                }
                e._handleChange(new A(n, r))
              }),
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
                    n = e.disabled,
                    r = e.errorText,
                    a = e.helperText,
                    o = e.invalid,
                    i = e.label,
                    c = e.style,
                    s = !!o,
                    l = x.b.isMobileOS()
                  return T.a.createElement(
                    R.a,
                    { style: [n && z.disabled, c] },
                    T.a.createElement(
                      R.a,
                      { accessibilityLabel: t || i, accessibilityRole: 'group' },
                      T.a.createElement(D.b, { color: 'gray700' }, i),
                      l
                        ? T.a.createElement(R.a, { style: z.containerNative }, this._renderNativeInput())
                        : T.a.createElement(R.a, { style: z.containerSelectors }, this._renderSelectors()),
                    ),
                    T.a.createElement(
                      R.a,
                      { style: z.subtextWrapper },
                      a ? this._renderHelperText() : null,
                      s && r ? this._renderErrorText() : null,
                    ),
                  )
                },
              },
              {
                key: '_getLocale',
                value: function () {
                  var e = this.props.use24HourTime
                  return I(e)
                },
              },
              {
                key: '_getFields',
                value: function () {
                  var e = this.props,
                    t = e.amPmLabel,
                    n = e.hour,
                    r = e.hourLabel,
                    a = e.minute,
                    o = e.minuteLabel,
                    i = new A(n, a),
                    c = i.hour,
                    s = i.minute,
                    l = this._getLocale(),
                    u = l.hourFormat,
                    d = l.minuteFormat,
                    f = l.use24HourTime,
                    h = 'number' == typeof c ? (c < 12 ? 'am' : 'pm') : void 0,
                    p = f ? L : B,
                    m = M,
                    y = '2-digit' === u ? 2 : 1,
                    b = '2-digit' === d ? 2 : 1,
                    g = []
                  return (
                    g.push({
                      label: r,
                      options: p.map(function (e) {
                        return { label: F(e, y), value: ''.concat(e) }
                      }),
                      onChange: this._handleHourChange,
                      value: 'number' == typeof c ? ''.concat(f ? c : c % 12 || 12) : '',
                      withEmptyOption: !0,
                    }),
                    g.push({
                      label: o,
                      options: m.map(function (e) {
                        return { label: F(e, b), value: ''.concat(e) }
                      }),
                      onChange: this._handleMinuteChange,
                      value: 'number' == typeof s ? ''.concat(s) : '',
                      withEmptyOption: !0,
                    }),
                    f ||
                      g.push({
                        label: t,
                        options: [
                          { label: 'AM', value: 'am' },
                          { label: 'PM', value: 'pm' },
                        ],
                        onChange: this._handleAmPmChange,
                        value: void 0 !== h ? h : '',
                        withEmptyOption: void 0 === c || void 0 === s,
                      }),
                    g
                  )
                },
              },
              {
                key: '_renderNativeInput',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.disabled,
                    r = e.hour,
                    a = e.label,
                    o = e.minute,
                    i = new A(r, o)
                  return T.a.createElement(O.a, {
                    autoCapitalize: 'none',
                    autoComplete: 'off',
                    autoCorrect: !1,
                    autoFocus: t,
                    editable: !n,
                    label: a,
                    name: 'timeInput',
                    numberOfLines: 1,
                    onChange: this._handleNativeChange,
                    spellCheck: 'false',
                    style: z.native,
                    type: 'time',
                    value: i.toString(),
                  })
                },
              },
              {
                key: '_renderSelectors',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.disabled,
                    r = !!e.invalid,
                    a = this._getFields()
                  return T.a.createElement(
                    T.a.Fragment,
                    null,
                    a.map(function (e, a) {
                      return T.a.createElement(S.a, {
                        autofocus: 0 === a ? t : void 0,
                        disabled: n,
                        hasError: r,
                        key: e.label,
                        label: e.label,
                        onChange: e.onChange,
                        options: e.options,
                        value: e.value,
                        withEmptyOption: e.withEmptyOption,
                      })
                    }),
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  var e = this.props.helperText
                  return T.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    T.a.createElement(D.b, { color: 'gray700', style: z.subtext }, e),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  var e = this.props.errorText
                  return T.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'assertive' },
                    T.a.createElement(D.b, { color: 'magenta500', style: z.subtext }, e),
                  )
                },
              },
            ]),
            n
          )
        })(T.a.Component)
      v()(H, 'defaultProps', { amPmLabel: 'AM/PM', hourLabel: 'Hour', minuteLabel: 'Minute' }), (H.propTypes = {})
      var A = (function () {
          function e(t, n) {
            c()(this, e)
            var r = 'number' == typeof t ? Math.max(Math.min(t, 23), 0) : void 0,
              a = 'number' == typeof n ? Math.max(Math.min(n, 59), 0) : void 0
            Object.defineProperty(this, 'hour', { value: r, enumerable: !0 }),
              Object.defineProperty(this, 'minute', { value: a, enumerable: !0 })
          }
          return (
            l()(
              e,
              [
                {
                  key: 'toString',
                  value: function () {
                    var e = 'number' == typeof this.hour,
                      t = 'number' == typeof this.minute
                    return e && t ? ''.concat(F(this.hour), ':').concat(F(this.minute)) : ''
                  },
                },
              ],
              [
                {
                  key: 'parse',
                  value: function (t) {
                    var n, r
                    if (t && t.match(/^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/)) {
                      var a = t.split(':'),
                        i = o()(a, 2),
                        c = i[0],
                        s = i[1]
                      ;(n = parseInt(c, 10)), (r = parseInt(s, 10))
                    }
                    return new e(n, r)
                  },
                },
              ],
            ),
            e
          )
        })(),
        z = C.a.create(function (e) {
          return {
            containerNative: { paddingTop: e.spaces.space2 },
            containerSelectors: {
              display: 'grid',
              gridColumnGap: e.spaces.space12,
              gridTemplateColumns: '1fr 1fr 1fr',
              paddingTop: e.spaces.space2,
            },
            disabled: { cursor: 'default', opacity: 0.5 },
            native: { paddingVertical: 0, paddingHorizontal: 0 },
            subtextWrapper: { flexDirection: 'column', flex: 1 },
            subtext: { paddingTop: e.spaces.space4 },
          }
        })
    },
    DFWg: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Unsent', function () {
          return $e
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r,
        a = n('Y9Ll'),
        o = n.n(a),
        i = n('1Pcy'),
        c = n.n(i),
        s = n('KEM+'),
        l = n.n(s),
        u = n('VrFO'),
        d = n.n(u),
        f = n('5Yy7'),
        h = n.n(f),
        p = n('N+ot'),
        m = n.n(p),
        y = n('AuHH'),
        b = n.n(y),
        g = n('mAxt'),
        v = n.n(g),
        _ =
          (n('2G9S'),
          n('jQ3i'),
          n('x4t0'),
          n('z84I'),
          n('LW0h'),
          n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('WNMA'),
          n('KqXw'),
          n('Ysgh'),
          n('KOtZ'),
          n('uFXj'),
          n('ERkP')),
        w = n.n(_),
        E = n('xVN5'),
        T = n('1YZw'),
        D = n('AspN'),
        O = n('rxPX'),
        S = n('0KEI'),
        C = n('rU/Q'),
        x = n('XpKj'),
        R = Object(O.a)()
          .propsFromState(function () {
            return { draftTweets: C.e, draftsFetchStatus: C.f, scheduledTweets: x.f, scheduledFetchStatus: x.e }
          })
          .propsFromActions(function () {
            return {
              addMedia: D.b,
              setMediaMetadata: D.n,
              addToast: T.b,
              createDraftTweetApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(C.d),
              createScheduledTweetApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(x.d),
              deleteDraftTweet: C.a,
              deleteScheduledTweet: x.a,
              fetchDraftTweets: C.c,
              fetchScheduledTweets: x.c,
              updateSingleComposer: E.x,
            }
          })
          .withAnalytics({ page: 'unsent_tweets' }),
        j = n('JYYi'),
        P = n('c0ZR'),
        I = n('v//M'),
        F = n('jHSc'),
        k = n('3XMw'),
        L = n.n(k),
        B = n('Y6L+'),
        M = (n('ho0z'), n('vrRf'), n('QbaN')),
        H = n('Oib4'),
        A = n('YeIG'),
        z = n('S1qy'),
        U = n.n(z),
        Y = n('zmS9'),
        W = n('q2Cp'),
        N = Object(O.a)().propsFromActions(function (e) {
          var t = e.isDraft
          return {
            createLocalApiErrorHandler: t
              ? Object(S.createLocalApiErrorHandlerWithContextFactory)(C.b)
              : Object(S.createLocalApiErrorHandlerWithContextFactory)(x.b),
            deleteUnsentTweet: function (e) {
              return t ? Object(C.a)(e) : Object(x.a)(e)
            },
          }
        }),
        V = n('k49u'),
        q = n('LVU8'),
        K = L.a.g3472106,
        X = ((r = {}), l()(r, V.a.InternalError, { toast: Object(q.a)(K) }), l()(r, 'showToast', !0), r),
        G = n('eb3s'),
        Z = n('/yvb'),
        J = n('rHpw')
      function Q(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var $ = L.a.d96cf7cd,
        ee = L.a.cfd2f35d,
        te = L.a.d4ab68e2,
        ne = L.a.f842d5d4,
        re = L.a.b3a7362d,
        ae = (function (e) {
          h()(n, e)
          var t = Q(n)
          function n() {
            var e
            d()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              l()(c()(e), 'state', { showDiscardConfirmation: !1 }),
              l()(c()(e), '_maybeRenderConfirmationDialog', function () {
                if (e.state.showDiscardConfirmation)
                  return w.a.createElement(G.a, {
                    cancelButtonLabel: ee,
                    confirmButtonLabel: te,
                    confirmButtonType: 'destructiveFilled',
                    headline: ne,
                    onCancel: e._handleDiscardCancel,
                    onConfirm: e._handleDiscard,
                    onMaskClick: e._handleDiscardCancel,
                    text: re,
                  })
              }),
              l()(c()(e), '_handleDiscardCancel', function () {
                e.setState({ showDiscardConfirmation: !1 })
              }),
              l()(c()(e), '_handleDiscard', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.deleteUnsentTweet,
                  a = t.unsentTweetId
                e.setState({ showDiscardConfirmation: !1 }), r(a).catch(n(X))
              }),
              l()(c()(e), '_handleDelete', function () {
                e.setState({ showDiscardConfirmation: !0 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      Z.a,
                      {
                        onPress: this._handleDelete,
                        size: 'xSmall',
                        style: oe.deleteButton,
                        type: 'destructiveFilled',
                      },
                      $,
                    ),
                    this._maybeRenderConfirmationDialog(),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        oe = J.a.create(function (e) {
          return { deleteButton: { marginTop: e.spaces.space12 } }
        }),
        ie = N(ae),
        ce = n('MWbm'),
        se = n('t62R'),
        le = n('kY28'),
        ue = n('Nqmc'),
        de = n('cTG8'),
        fe = n('+/sI')
      function he(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var pe = L.a.f9f69d31,
        me = L.a.g0ff8c0b,
        ye = L.a.c5ceafc8,
        be = (function (e) {
          h()(n, e)
          var t = he(n)
          function n() {
            var e
            d()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              l()(c()(e), '_renderReplyContext', function () {
                var t,
                  n,
                  r = e.props.unsentTweet,
                  a = r.replied_tweet_results,
                  o = r.tweet_create_request,
                  i = null == a ? void 0 : a.result,
                  c = 'Tweet' === (null == i ? void 0 : i.__typename) ? i : void 0
                if (!c || Object(A.a)(c)) return w.a.createElement(se.b, { color: 'gray700', size: 'subtext2' }, ye)
                var s,
                  l = (o && o.exclude_reply_user_ids) || []
                c.core &&
                  null !== (t = c.core.user_results) &&
                  void 0 !== t &&
                  t.result &&
                  'User' === c.core.user_results.result.__typename &&
                  (s = c.core.user_results.result)
                var u = null === (n = s) || void 0 === n ? void 0 : n.legacy,
                  d = u && u.id_str,
                  f = u && u.screen_name,
                  h = c.legacy && c.legacy.entities,
                  p = (h && h.user_mentions) || [],
                  m = e._getFilteredMentions(p, l),
                  y = w.a.createElement(le.a, {
                    displayTextRange: [280, 280],
                    inReplyToScreenName: f,
                    inReplyToUserIdStr: d,
                    linkType: 'none',
                    size: 'subtext2',
                    tweetPermalink: '',
                    userMentionsEntities: m,
                  })
                return w.a.createElement(ue.a, {
                  contextType: 'Reply',
                  iconSize: 'large',
                  style: ge.socialContext,
                  text: y,
                  weight: 'bold',
                  withLeftPadding: !1,
                })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.unsentTweet,
                    t = e.media_entities,
                    n = e.replied_tweet_results,
                    r = e.tweet_create_request,
                    a = e.scheduling_info ? e.scheduling_info.execute_at : void 0,
                    o = e.scheduling_info ? e.scheduling_info.state : void 0,
                    i = null == n ? void 0 : n.result,
                    c = 'Tweet' === (null == i ? void 0 : i.__typename) ? i : void 0
                  if (!r || 'PostTweetRequest' !== r.type) return null
                  var s = r.attachment_url,
                    l = a ? Object(M.e)(a) : void 0,
                    u = r.status || '',
                    d = 'Failed' === o,
                    f = r.in_reply_to_status_id,
                    h = Boolean(f && Object(A.a)(c)),
                    p = U()(u),
                    m = p.displayRangeEnd,
                    y = p.displayRangeStart,
                    b = this._getImages(t),
                    g = this._getLabelInfo(t)
                  return w.a.createElement(
                    ce.a,
                    { style: [ge.listItem, d && ge.scheduleFail] },
                    w.a.createElement(ce.a, { style: ge.content }, this._renderLegend(o, l, h)),
                    w.a.createElement(
                      ce.a,
                      { style: ge.tweetContent },
                      f && this._renderReplyContext(),
                      s &&
                        w.a.createElement(ue.a, {
                          contextType: 'Retweet',
                          iconSize: 'large',
                          style: ge.socialContext,
                          text: s,
                          weight: 'bold',
                          withLeftPadding: !1,
                        }),
                      w.a.createElement(
                        ce.a,
                        { style: ge.content },
                        w.a.createElement(
                          ce.a,
                          { style: ge.leftColumn },
                          w.a.createElement(de.a, { displayTextRange: [y, m], style: ge.tweetText, text: u }),
                          (d || h) && w.a.createElement(ie, { isDraft: !l, unsentTweetId: e.rest_id }),
                        ),
                        b.length > 0 &&
                          w.a.createElement(
                            ce.a,
                            { style: [ge.imageContainer, ge.rightColumn] },
                            w.a.createElement(W.a, {
                              cacheLocationKey: 'unsentTweets',
                              hideAcceptOverlay: !0,
                              images: b,
                              onClick: this._handleImageClick,
                              singleImageMaxAspectRatio: 1,
                              singleImageMinAspectRatio: 1,
                            }),
                            g &&
                              w.a.createElement(
                                se.b,
                                { size: 'subtext3' },
                                w.a.createElement(fe.c, { durationInMilliseconds: g.duration, type: g.type }),
                              ),
                          ),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_getFilteredMentions',
                value: function (e, t) {
                  return e
                    .map(function (e) {
                      var t = e.id_str,
                        n = e.indices,
                        r = e.name,
                        a = e.screen_name
                      return t && n && a && r ? { id_str: t, indices: n, screen_name: a, name: r } : {}
                    })
                    .filter(function (e) {
                      return !!Object.keys(e).length && (!t || t.indexOf(e.id_str) < 0)
                    })
                },
              },
              {
                key: '_renderLegend',
                value: function (e, t, n) {
                  var r = 'Failed' === e
                  return r || n
                    ? w.a.createElement(
                        ce.a,
                        { style: ge.failedView },
                        w.a.createElement(H.a, { style: [ge.failed, ge.failedIcon] }),
                        w.a.createElement(se.b, { color: 'magenta500' }, r ? pe : me),
                      )
                    : t
                    ? w.a.createElement(Y.a, { scheduledFor: t })
                    : void 0
                },
              },
              {
                key: '_getLabelInfo',
                value: function (e) {
                  if (e && !(e.length > 1)) {
                    var t = e[0].media_info
                    if (t) {
                      var n = t.__typename,
                        r = 'ApiVideo' === n && t.duration_millis ? t.duration_millis : null
                      if (r) return { type: fe.b, duration: r }
                      if ('ApiGif' === n) return { type: fe.a }
                    }
                  }
                },
              },
              {
                key: '_getImages',
                value: function (e) {
                  return e
                    ? e
                        .map(function (e) {
                          var t = e.media_info
                          if (!t) return null
                          var n = t.preview_image ? t.preview_image : t,
                            r = t.alt_text || ''
                          return n.original_img_url && n.original_img_width && n.original_img_height
                            ? {
                                url: n.original_img_url,
                                expandedUrl: n.original_img_url,
                                width: n.original_img_width,
                                height: n.original_img_height,
                                accessibilityLabel: r,
                                backgroundColor: { red: 0, green: 0, blue: 0 },
                                shouldShowAltLabel: !1,
                                cropCandidates: [],
                              }
                            : void 0
                        })
                        .filter(Boolean)
                    : []
                },
              },
              {
                key: '_handleImageClick',
                value: function (e) {
                  e && e.preventDefault()
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        ge = J.a.create(function (e) {
          return {
            content: { flexDirection: 'row', flexGrow: 1 },
            tweetContent: { flexDirection: 'column', flexGrow: 1 },
            listItem: { flexGrow: 1, flexDirection: 'column', flexShrink: 1 },
            imageContainer: {
              alignSelf: 'center',
              borderRadius: e.borderRadii.small,
              maxHeight: '75px',
              overflow: 'hidden',
              width: '75px',
            },
            leftColumn: { alignItems: 'flex-start', flex: 1, flexShrink: 1 },
            rightColumn: { marginLeft: e.spaces.space12 },
            socialContext: { marginBottom: e.spaces.space2 },
            tweetText: { marginTop: e.spaces.space4, width: '100%' },
            failedView: { flexDirection: 'row' },
            failed: { color: e.colors.magenta500 },
            failedIcon: { marginRight: e.spaces.space4 },
            scheduleFail: { opacity: 0.6 },
          }
        }),
        ve = n('aITJ'),
        _e = n('v6aA'),
        we = n('k/OQ'),
        Ee = n('JYMr'),
        Te = n('FIs5'),
        De = n('XiMS'),
        Oe = n('htQn'),
        Se = n('eyty'),
        Ce = n('ONCy')
      function xe(e, t) {
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
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xe(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function je(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Pe = L.a.c5b77cf0,
        Ie = L.a.i26eed05,
        Fe = L.a.db99d355,
        ke = L.a.cd0ae176,
        Le = L.a.g29f1100,
        Be = L.a.f26ece11,
        Me = L.a.g700c084,
        He = L.a.a133d13e,
        Ae = L.a.d4ebc798,
        ze = L.a.f8464691,
        Ue = L.a.d96cf7cd,
        Ye = L.a.b772cd65,
        We = L.a.abd845fd,
        Ne = L.a.e8bd47f1,
        Ve = L.a.j2b145d3,
        qe = L.a.cfd2f35d,
        Ke = L.a.d96cf7cd,
        Xe = L.a.df9f719a,
        Ge = L.a.hb0c8242,
        Ze = '/compose/tweet/unsent/drafts',
        Je = '/compose/tweet/unsent/scheduled',
        Qe = (function (e) {
          h()(n, e)
          var t = je(n)
          function n(e) {
            var r
            return d()(this, n), ((r = t.call(this)).failedIds = e), r
          }
          return n
        })(v()(Error)),
        $e = (function (e) {
          h()(n, e)
          var t = je(n)
          function n() {
            var e
            d()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              l()(c()(e), 'state', {
                isEditingDrafts: !1,
                isEditingScheduled: !1,
                selectedDrafts: [],
                selectedScheduledTweets: [],
                showDiscardConfirmation: !1,
                isDeleting: !1,
                deleteProgress: 0,
              }),
              l()(c()(e), '_fetchScheduledTweets', function () {
                var t = e.props,
                  n = t.createScheduledTweetApiErrorHandler
                ;(0, t.fetchScheduledTweets)().catch(n())
              }),
              l()(c()(e), '_fetchDraftTweets', function () {
                var t = e.props,
                  n = t.createDraftTweetApiErrorHandler
                ;(0, t.fetchDraftTweets)().catch(n())
              }),
              l()(c()(e), '_handleFetchUnsentTweets', function () {
                e.isDraftsTab && e._fetchDraftTweets(), e.isDraftsTab || e._fetchScheduledTweets()
              }),
              l()(c()(e), '_scribeAction', function (t) {
                var n = e.props.analytics,
                  r = e.isDraftsTab ? 'draft_tweet' : 'scheduled_tweet'
                n.scribe({ component: r, action: t })
              }),
              l()(c()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.draftTweets,
                  r = t.scheduledTweets
                return e.isDraftsTab && n.length
                  ? e._renderUnsentTweets(n)
                  : !e.isDraftsTab && r.length
                  ? e._renderUnsentTweets(r)
                  : e.isDraftsTab || 0 !== r.length
                  ? e._renderPlaceholder(ke)
                  : e._renderPlaceholder(Le)
              }),
              l()(c()(e), '_renderSegmentedControl', function () {
                var e = [
                  { to: Ze, key: Ae, label: Ae },
                  { to: Je, key: ze, label: ze },
                ]
                return w.a.createElement(we.a, { accessibilityLabel: He, links: e })
              }),
              l()(c()(e), '_renderBottomBar', function () {
                var t = e.state,
                  n = t.deleteProgress,
                  r = t.isDeleting,
                  a = e.props,
                  o = a.draftTweets
                if (a.scheduledTweets.length || o.length)
                  return w.a.createElement(
                    ce.a,
                    null,
                    r && w.a.createElement(Ee.a, { ariaValueText: Me, progress: r ? Math.max(n, 0.02) : 0 }),
                    w.a.createElement(
                      ce.a,
                      { style: et.bottomBar },
                      w.a.createElement(
                        Z.a,
                        { onPress: e._handleSelectionToggle, style: et.deselectButton, type: 'brandText' },
                        e.selectedTweets.length > 0 ? Ve : Ne,
                      ),
                      w.a.createElement(
                        Z.a,
                        { disabled: !e.selectedTweets.length, onPress: e._handleDelete, type: 'destructiveText' },
                        Ue,
                      ),
                    ),
                  )
              }),
              l()(c()(e), '_renderConfirmationDialog', function () {
                if (e.state.showDiscardConfirmation)
                  return w.a.createElement(G.a, {
                    cancelButtonLabel: qe,
                    confirmButtonLabel: Ke,
                    confirmButtonType: 'destructiveFilled',
                    headline: Xe,
                    onCancel: e._handleDiscardCancel,
                    onConfirm: e._handleDiscard,
                    onMaskClick: e._handleDiscardCancel,
                    text: Ge,
                  })
              }),
              l()(c()(e), '_renderPlaceholder', function (e) {
                return w.a.createElement(Te.a, { header: e, message: Be })
              }),
              l()(c()(e), '_renderCheckbox', function (t) {
                var n = e.selectedTweets.includes(t)
                return w.a.createElement(De.a, {
                  checked: n,
                  key: t,
                  onChange: e._handleCheckboxChange(t),
                  style: et.checkbox,
                })
              }),
              l()(c()(e), '_renderUnsentTweets', function (t) {
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  t.map(function (t) {
                    var n = t.replied_tweet_results,
                      r = t.rest_id,
                      a = t.tweet_create_request,
                      o = null == n ? void 0 : n.result,
                      i = 'Tweet' === (null == o ? void 0 : o.__typename) ? o : void 0,
                      c = a && 'PostTweetRequest' === a.type ? a.in_reply_to_status_id : void 0,
                      s = Boolean(c && Object(A.a)(i)),
                      l = t.scheduling_info ? t.scheduling_info.state : void 0,
                      u = !e.isEditing && l !== M.a.FAILED && !s,
                      d = u ? e._handleClick(t) : void 0,
                      f = u ? void 0 : 'label'
                    return w.a.createElement(
                      Oe.a,
                      { accessibilityRole: f, key: r, onClick: d, style: et.checkboxContainer },
                      e.isEditing ? e._renderCheckbox(r) : null,
                      w.a.createElement(be, { unsentTweet: t }),
                    )
                  }),
                  e._renderConfirmationDialog(),
                )
              }),
              l()(c()(e), '_handleCheckboxChange', function (t) {
                return function () {
                  var n
                  ;(n =
                    e.selectedTweets && e.selectedTweets.includes(t)
                      ? e.selectedTweets.filter(function (e) {
                          return e !== t
                        })
                      : e.selectedTweets.concat([t])),
                    e._handleUpdateSelectedTweets(n)
                }
              }),
              l()(c()(e), '_handleSelectionToggle', function () {
                return e.selectedTweets.length ? e._deselectAllTweets() : e._selectAllTweets()
              }),
              l()(c()(e), '_handleDelete', function () {
                e.setState({ showDiscardConfirmation: !0 }), e._scribeAction('delete_prompt')
              }),
              l()(c()(e), '_handleDiscardCancel', function () {
                e.setState({ showDiscardConfirmation: !1 }), e._scribeAction('cancel')
              }),
              l()(c()(e), '_handleDeletionProgress', function (t) {
                var n = e.props,
                  r = n.deleteDraftTweet,
                  a = n.deleteScheduledTweet,
                  o = e.isDraftsTab ? r : a,
                  i = 0
                return Promise.all(
                  t.map(function (n) {
                    return o(n)
                      .then(function () {
                        ;(i += 1), e.setState({ deleteProgress: i / t.length }), e._scribeAction('delete')
                      })
                      .catch(function () {
                        return n
                      })
                  }),
                ).then(function (e) {
                  var t = e.filter(Boolean)
                  if (t.length) throw new Qe(t)
                })
              }),
              l()(c()(e), '_handleDiscard', function () {
                var t = e.props.addToast
                if (e.selectedTweets.length) {
                  e.setState({ deleteProgress: 0, isDeleting: !0, showDiscardConfirmation: !1 })
                  var n = e.isDraftsTab
                  e._handleDeletionProgress(e.selectedTweets)
                    .then(
                      function () {
                        return { selectedTweets: [], text: Ie }
                      },
                      function (t) {
                        return { selectedTweets: t.failedIds || e.selectedTweets, text: Pe }
                      },
                    )
                    .then(function (r) {
                      var a = r.selectedTweets,
                        o = r.text
                      e.setState({ deleteProgress: 0, isDeleting: !1 }),
                        e._handleUpdateSelectedTweets(a, n),
                        t({ text: o })
                    })
                }
              }),
              l()(c()(e), '_handleEditing', function () {
                var t
                e.isDraftsTab
                  ? ((t = e.state.isEditingDrafts ? 'disable_deletion' : 'enable_deletion'),
                    e.setState(function (e) {
                      return { isEditingDrafts: !e.isEditingDrafts, selectedDrafts: [] }
                    }))
                  : ((t = e.state.isEditingScheduled ? 'disable_deletion' : 'enable_deletion'),
                    e.setState(function (e) {
                      return { isEditingScheduled: !e.isEditingScheduled, selectedScheduledTweets: [] }
                    })),
                  e._scribeAction(t)
              }),
              l()(c()(e), '_handleClick', function (t) {
                return function () {
                  var n = t.scheduling_info && t.scheduling_info.execute_at
                  if (e.isDraftsTab || n) {
                    var r = e.props,
                      a = r.addMedia,
                      o = r.history,
                      i = r.setMediaMetadata,
                      c = r.updateSingleComposer,
                      s = t.rest_id,
                      l = t.tweet_create_request,
                      u = l && 'PostTweetRequest' === l.type ? l.status : '',
                      d = l && 'PostTweetRequest' === l.type ? l.in_reply_to_status_id : void 0,
                      f = l && 'PostTweetRequest' === l.type ? l.attachment_url : void 0,
                      h = f && f.split('/status/')[1].match(B.A.id),
                      p = h ? h[0] : void 0,
                      m = t.media_entities ? Object(M.d)(t.media_entities) : {},
                      y = (t.media_entities || []).reduce(function (e, t) {
                        return e || (t.media_origin ? { found_media_origin: t.media_origin } : void 0)
                      }, void 0),
                      b = Promise.resolve([])
                    if (m.externalMedia) {
                      var g = m.externalMedia
                      b = Promise.all(
                        g.map(function (e) {
                          var t = e.url
                          return Object(P.a)(t)
                        }),
                      )
                        .then(function (t) {
                          var n
                          return a(t, {
                            location: Se.d.Tweet,
                            isAmplify: g[0].isAmplify,
                            canUploadLongVideo: Object(Se.e)(
                              null === (n = e.context) || void 0 === n ? void 0 : n.userClaims,
                            ),
                          })
                        })
                        .then(function (e) {
                          return e.map(function (e, t) {
                            var n = g[t],
                              r = n.altText,
                              a = n.sensitiveMediaWarning
                            return (
                              (r || a) &&
                                i(
                                  e.id,
                                  Re(
                                    Re({}, Object(Ce.a)(r ? { altText: r } : null)),
                                    Object(Ce.a)(a ? { sensitiveMediaWarning: a } : null),
                                  ),
                                ),
                              e.id
                            )
                          })
                        })
                    }
                    b.then(function (t) {
                      var r = j.a.modal
                      if (e.isDraftsTab)
                        c({ updates: { draftTweetId: s, gifMetadata: y, mediaIds: t, text: u }, parentKey: r })
                      else {
                        var a = n ? Object(M.e)(n) : void 0
                        c({
                          updates: { scheduledFor: a, gifMetadata: y, scheduledTweetId: s, mediaIds: t, text: u },
                          parentKey: r,
                        })
                      }
                      e._scribeAction('edit_intent'),
                        o.push({ pathname: '/compose/tweet', state: { inReplyToStatusId: d, quotedStatusId: p } })
                    })
                  }
                }
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUnsentTweets()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.draftsFetchStatus,
                    n = e.history,
                    r = e.scheduledFetchStatus,
                    a = ve.b.isMobileOS()
                  return w.a.createElement(
                    F.b,
                    {
                      backButtonType: 'back',
                      bottomBar: this.isEditing ? this._renderBottomBar() : null,
                      documentTitle: He,
                      history: n,
                      rightControl: this.isEditing ? this._renderDoneButton() : this._renderEditButton(),
                      secondaryBar: this._renderSegmentedControl(),
                      title: He,
                    },
                    w.a.createElement(
                      ce.a,
                      { style: et.root },
                      w.a.createElement(I.a, {
                        accessibilityLabel: Fe,
                        fetchStatus: this.isDraftsTab ? t : r,
                        onRequestRetry: this._handleFetchUnsentTweets,
                        render: this._renderContent,
                      }),
                      this.isEditing && a ? w.a.createElement(ce.a, { style: et.bottomBarSpacer }) : null,
                    ),
                  )
                },
              },
              {
                key: '_renderDoneButton',
                value: function () {
                  return w.a.createElement(
                    Z.a,
                    { onPress: this._handleEditing, size: 'small', type: 'primaryFilled' },
                    Ye,
                  )
                },
              },
              {
                key: '_renderEditButton',
                value: function () {
                  var e = this.props,
                    t = e.draftTweets,
                    n = e.scheduledTweets,
                    r = (!this.isDraftsTab && n.length) || (this.isDraftsTab && t.length)
                  if (!this.isEditing && r)
                    return w.a.createElement(
                      ce.a,
                      null,
                      w.a.createElement(
                        Z.a,
                        { onPress: this._handleEditing, size: 'small', type: 'primaryFilled' },
                        We,
                      ),
                    )
                },
              },
              {
                key: '_deselectAllTweets',
                value: function () {
                  this._handleUpdateSelectedTweets([])
                },
              },
              {
                key: '_selectAllTweets',
                value: function () {
                  var e = this.props,
                    t = e.draftTweets,
                    n = e.scheduledTweets,
                    r = (this.isDraftsTab ? t : n).map(function (e) {
                      return e.rest_id
                    })
                  this._handleUpdateSelectedTweets(r)
                },
              },
              {
                key: '_handleUpdateSelectedTweets',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.isDraftsTab
                  t ? this.setState({ selectedDrafts: e }) : this.setState({ selectedScheduledTweets: e })
                },
              },
              {
                key: 'isDraftsTab',
                get: function () {
                  return this.props.location.pathname === Ze
                },
              },
              {
                key: 'isEditing',
                get: function () {
                  var e = this.state,
                    t = e.isEditingDrafts,
                    n = e.isEditingScheduled
                  return this.isDraftsTab ? t : n
                },
              },
              {
                key: 'selectedTweets',
                get: function () {
                  var e = this.state,
                    t = e.selectedDrafts,
                    n = e.selectedScheduledTweets
                  return this.isDraftsTab ? t : n
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      l()($e, 'contextType', _e.a)
      var et = J.a.create(function (e) {
          return {
            deselectButton: { marginRight: 'auto' },
            checkboxContainer: {
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              boxSizing: 'border-box',
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
            },
            checkbox: { justifyContent: 'center', paddingRight: e.spaces.space12 },
            root: { height: '600px' },
            bottomBar: { display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: e.spaces.space4 },
            bottomBarSpacer: { height: e.spaces.space48 },
          }
        }),
        tt = R($e)
      t.default = tt
    },
    FwaZ: function (e, t, n) {
      n('ax0f')({ target: 'String', proto: !0 }, { repeat: n('ovzZ') })
    },
    S8sr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return L
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        h = n('AuHH'),
        p = n.n(h),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('Blm6'), n('Ysgh'), n('KqXw'), n('z84I'), n('jQ3i'), n('x4t0'), n('ERkP')),
        g = n.n(b),
        v = n('nS1w'),
        _ = n('t62R'),
        w = n('p+r5'),
        E = n('3XMw'),
        T = n.n(E),
        D = n('6XNv'),
        O = n('rHpw'),
        S = n('aITJ'),
        C = n('MWbm')
      function x(e, t) {
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function j(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var P = T.a.jf83d091,
        I = T.a.af4abf2f,
        F = T.a.b871f28f,
        k = 1,
        L = (function (e) {
          u()(n, e)
          var t = j(n)
          function n(e) {
            var r
            a()(this, n),
              (r = t.call(this, e)),
              y()(s()(r), '_handleSelectorChange', function (e, t) {
                var n = r.props,
                  a = R(R({}, { day: n.day, month: n.month, year: n.year }), {}, y()({}, e, parseInt(t, 10)))
                r.props.onChange(a)
              }),
              y()(s()(r), '_handleDayChange', function (e) {
                r._handleSelectorChange('day', e)
              }),
              y()(s()(r), '_handleMonthChange', function (e) {
                r._handleSelectorChange('month', e)
              }),
              y()(s()(r), '_handleYearChange', function (e) {
                r._handleSelectorChange('year', e)
              }),
              y()(s()(r), '_handleDateChange', function (e) {
                var t = e.target.value.split('-'),
                  n = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) }
                r.props.onChange(n)
              })
            var o = e.day,
              i = e.maxSelectableYear,
              c = e.minSelectableYear,
              l = e.month,
              u = e.year
            return (
              (r._errorID = 'DATE_INPUT_'.concat(k, '_ERROR')),
              (r._monthOptions = v.c()),
              (r._nativeDefaultValue = v.e(o, l, u)),
              (r._nativeMaxDate = v.e(31, 12, i)),
              (r._nativeMinDate = v.e(1, 1, c)),
              (k += 1),
              r
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.day,
                    r = t.month,
                    a = t.onChange,
                    o = t.year,
                    i = r && r !== e.month,
                    c = o && o !== e.year
                  ;(i || c) &&
                    (v
                      .b(r, o)
                      .map(function (e) {
                        return parseInt(e.value, 10)
                      })
                      .includes(n) ||
                      a({ month: r, year: o, day: void 0 }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.errorMessage
                  return g.a.createElement(
                    C.a,
                    null,
                    S.b.isMobileOS() ? this._renderNativeDateInput() : this._renderSelectors(),
                    e ? g.a.createElement(_.b, { color: 'red500', nativeID: this._errorID }, e) : null,
                  )
                },
              },
              {
                key: '_renderSelectors',
                value: function () {
                  var e = this.props,
                    t = e.day,
                    n = e.month,
                    r = e.year,
                    a = e.errors,
                    o = void 0 === a ? {} : a,
                    i = e.label,
                    c = e.autofocus,
                    s = e.monthSelectorTestID,
                    l = e.daySelectorTestID,
                    u = e.yearSelectorTestID,
                    d = e.style,
                    f = e.minSelectableYear,
                    h = e.maxSelectableYear,
                    p = v.b(n, r),
                    m = v.d(f, h, t, n)
                  return g.a.createElement(
                    C.a,
                    { accessibilityLabel: i, accessibilityRole: 'group', style: [B.selectorsContainer, d] },
                    g.a.createElement(D.a, {
                      accessibilityDescribedBy: o.month ? this._errorID : void 0,
                      autofocus: c,
                      hasError: o.month,
                      label: I,
                      onChange: this._handleMonthChange,
                      options: this._monthOptions,
                      style: B.monthSelector,
                      testID: s,
                      value: n ? ''.concat(n) : '',
                      withEmptyOption: !0,
                    }),
                    g.a.createElement(D.a, {
                      accessibilityDescribedBy: o.day ? this._errorID : void 0,
                      hasError: o.day,
                      label: P,
                      onChange: this._handleDayChange,
                      options: p,
                      style: B.daySelector,
                      testID: l,
                      value: t ? ''.concat(t) : '',
                      withEmptyOption: !0,
                    }),
                    g.a.createElement(D.a, {
                      accessibilityDescribedBy: o.year ? this._errorID : void 0,
                      hasError: o.year,
                      label: F,
                      onChange: this._handleYearChange,
                      options: m,
                      style: B.yearSelector,
                      testID: u,
                      value: r ? ''.concat(r) : '',
                      withEmptyOption: !0,
                    }),
                  )
                },
              },
              {
                key: '_renderNativeDateInput',
                value: function () {
                  var e = this.props.label
                  return g.a.createElement(w.a, {
                    defaultValue: this._nativeDefaultValue,
                    label: e,
                    max: this._nativeMaxDate,
                    min: this._nativeMinDate,
                    name: e,
                    numberOfLines: 1,
                    onChange: this._handleDateChange,
                    style: B.dateInputRoot,
                    type: 'date',
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        B = O.a.create(function (e) {
          return {
            selectorsContainer: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            monthSelector: { flexGrow: 2, marginRight: e.spaces.space12 },
            daySelector: { flexGrow: 1, marginRight: e.spaces.space12 },
            yearSelector: { flexGrow: 1 },
            dateInputRoot: { paddingHorizontal: 0 },
          }
        })
    },
    XpKj: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'f', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return v
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'a', function () {
          return w
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('LW0h'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('oEOe')),
        i = n('kGix'),
        c = n('Ssj5')
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
      function l(e) {
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
      var u = 'scheduledTweets',
        d = { fetchStatus: i.a.NONE, scheduledTweets: [] },
        f = 'FETCH_SCHEDULED_TWEETS',
        h = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE',
        }),
        p = 'DELETE_SCHEDULED_TWEET',
        m = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        y = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case h.SUCCESS:
            if (t.payload) return l(l({}, e), {}, { fetchStatus: i.a.LOADED, scheduledTweets: t.payload })
            break
          case h.FAILURE:
            return l(l({}, e), {}, { fetchStatus: i.a.FAILED })
          case h.REQUEST:
            return l(l({}, e), {}, { fetchStatus: i.a.LOADING })
          case m.SUCCESS:
            var n = t.meta
            return n && n.deleteScheduledTweetId
              ? l(l({}, e), {}, { scheduledTweets: y(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(a()({}, u, b))
      var g = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        v = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        _ = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(o.b)(e, { request: r.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: h,
              context: f,
            }).then(function () {})
          }
        },
        w = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(o.b)(t, { request: a.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: m,
              context: p,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    c0ZR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('JtPf'), n('7x/C')
      var r = function (e) {
        return new Promise(function (t, n) {
          var r = new window.XMLHttpRequest()
          ;(r.responseType = 'blob'),
            (r.onreadystatechange = function () {
              r.readyState === window.XMLHttpRequest.DONE &&
                (200 === r.status ? t(r.response) : n(new Error('Unexpected status code')))
            }),
            (r.onerror = function (e) {
              return n(e)
            }),
            (r.ontimeout = function (e) {
              return n(e)
            }),
            r.open('GET', e, !0),
            r.send()
        })
      }
    },
    kW3F: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FIVE_DAYS_IN_MS', function () {
          return se
        }),
        n.d(t, 'Schedule', function () {
          return le
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        h = n('AuHH'),
        p = n.n(h),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('vrRf'), n('MvUL'), n('KqXw'), n('ERkP')),
        g = n.n(b),
        v = n('xVN5'),
        _ = n('1YZw'),
        w = n('hqKg'),
        E = n('XpKj'),
        T = n('zh9S'),
        D = n('RqPI'),
        O = n('oEGd'),
        S = Object(w.createSelector)(
          v.o,
          function (e) {
            var t = v.j(e)
            return v.l(e)[t].scheduledTweetId
          },
          D.o,
          function (e, t, n) {
            return { scheduledFor: e, scheduledTweetId: t, language: n }
          },
        ),
        C = { addToast: _.b, deleteScheduledTweet: E.a, updateSingleComposer: v.x, scribeAction: T.c },
        x = Object(O.g)(S, C),
        R = n('jHSc'),
        j = n('Gpeq'),
        P = n('3XMw'),
        I = n.n(P),
        F = n('/NU0'),
        k = n('zmS9'),
        L = 'scheduledConfirmationPrimaryAction',
        B = n('MWbm'),
        M = n('/yvb'),
        H = n('t62R'),
        A = n('S8sr'),
        z = n('77Ml'),
        U = n('rHpw'),
        Y = n('7JQg'),
        W = n('QbaN')
      function N(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function q(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var K = I.a.b1ab9c26,
        X = I.a.e4e4e50a,
        G = I.a.h735a98d,
        Z = I.a.dbd5d40f,
        J = I.a.g9677c6d,
        Q = I.a.h3701ffd,
        $ = I.a.c5dd0190,
        ee = I.a.edeff231,
        te = I.a.c2b358ce,
        ne = I.a.b43679d2,
        re = I.a.f1fce85d,
        ae = I.a.fddf24b4,
        oe = I.a.a0368088,
        ie = I.a.h9833726,
        ce = { page: 'schedule' },
        se = 432e6,
        le = (function (e) {
          u()(n, e)
          var t = q(n)
          function n(e) {
            var r
            a()(this, n),
              (r = t.call(this, e)),
              y()(s()(r), '_setAppBarRef', function (e) {
                r._appBarRef = e
              }),
              y()(s()(r), '_goBack', function () {
                r._appBarRef && r._appBarRef.goBack()
              }),
              y()(s()(r), '_handleClear', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.deleteScheduledTweet,
                  a = e.scheduledTweetId,
                  o = e.scribeAction,
                  i = e.updateSingleComposer
                a
                  ? n(a)
                      .then(function () {
                        i({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }), r._goBack()
                      })
                      .catch(function () {
                        t({ text: K })
                      })
                  : (i({ updates: { scheduledFor: void 0 } }), r._goBack()),
                  o(V(V({}, ce), {}, { action: 'clear' }))
              }),
              y()(s()(r), '_handleAdd', function () {
                var e = r.props,
                  t = e.scheduledFor,
                  n = e.scribeAction,
                  a = e.updateSingleComposer,
                  o = r.state,
                  i = { date: o.scheduleDate, time: o.scheduleTime },
                  c = !!t,
                  s = Object(W.c)(i)
                s &&
                  s > Date.now() &&
                  !Object(W.g)(s) &&
                  (a({ updates: { scheduledFor: i } }),
                  r._appBarRef && r._appBarRef.goBack(),
                  n(V(V({}, ce), {}, { action: c ? 'update' : 'add' })))
              }),
              y()(s()(r), '_handleTimeChange', function (e) {
                r.setState({ scheduleTime: e }, r._validateDateTime)
              }),
              y()(s()(r), '_handleDateChange', function (e) {
                r.setState({ scheduleDate: e }, r._validateDateTime)
              }),
              y()(s()(r), '_validateDateTime', function () {
                var e = r.state,
                  t = e.scheduleDate,
                  n = e.scheduleTime,
                  a = Object(W.c)({ date: t, time: n }),
                  o = new Date(Date.now()),
                  i = !1,
                  c = !1,
                  s = !1,
                  l = !1
                a && a <= o
                  ? o.getFullYear() === t.year && o.getMonth() + 1 === t.month && o.getDate() === t.day
                    ? (c = !0)
                    : (i = !0)
                  : a && Object(W.g)(a) && ((i = !0), (s = !0)),
                  (Object(F.a)(t.year) &&
                    Object(F.a)(t.month) &&
                    Object(F.a)(t.day) &&
                    Object(F.a)(n.hour) &&
                    Object(F.a)(n.minute)) ||
                    (l = !0),
                  r.setState({ timeError: c, tooFarInFuture: s, dateError: i, invalidDateTime: l })
              }),
              y()(s()(r), '_getTimeZone', function (e) {
                var t = r.state,
                  n = t.scheduleDate,
                  a = t.scheduleTime
                try {
                  var o = Object(W.c)({ date: n, time: a }) || new Date(),
                    i = Object(j.a)(e || 'en'),
                    c = o.toLocaleDateString(i),
                    s = o.toLocaleDateString(i, { timeZoneName: 'long' }),
                    l = s.indexOf(c)
                  return l >= 0
                    ? (s.substring(0, l) + s.substring(l + c.length)).replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '')
                    : s
                } catch (u) {
                  return null
                }
              }),
              y()(s()(r), '_handleButtonPress', function () {
                r.props.history.push('/compose/tweet/unsent/scheduled')
              }),
              y()(s()(r), '_renderBottomBar', function () {
                return g.a.createElement(
                  B.a,
                  { style: ue.bottomBar },
                  g.a.createElement(M.a, { onPress: r._handleButtonPress, size: 'xSmall', type: 'brandText' }, X),
                )
              }),
              (r._scheduledForDate = Object(W.c)(e.scheduledFor))
            var o = r._scheduledForDate ? r._scheduledForDate : new Date(Date.now() + se)
            return (
              (r.state = {
                scheduleDate: { year: o.getFullYear(), month: o.getMonth() + 1, day: o.getDate() },
                scheduleTime: { hour: o.getHours(), minute: o.getMinutes() },
                dateError: !1,
                timeError: !1,
                tooFarInFuture: !1,
                invalidDateTime: !1,
              }),
              r
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.language,
                    r = e.scheduledFor,
                    a = this.state,
                    o = a.dateError,
                    i = a.invalidDateTime,
                    c = a.scheduleDate,
                    s = a.scheduleTime,
                    l = a.timeError,
                    u = a.tooFarInFuture,
                    d = s.hour,
                    f = s.minute,
                    h = c.day,
                    p = c.month,
                    m = c.year,
                    y = new Date(Date.now()).getFullYear(),
                    b = y + 2,
                    v = !!r,
                    _ = this._getTimeZone(n),
                    w = { date: c, time: s },
                    E = u ? ie : oe
                  return g.a.createElement(
                    R.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backButtonType: 'close',
                      bottomBar: this._renderBottomBar(),
                      documentTitle: G,
                      history: t,
                      rightControl: g.a.createElement(
                        B.a,
                        { style: ue.actionButtonContainer },
                        this._scheduledForDate
                          ? g.a.createElement(
                              M.a,
                              {
                                onPress: this._handleClear,
                                size: 'small',
                                style: ue.actionButton,
                                type: 'primaryText',
                              },
                              Z,
                            )
                          : null,
                        g.a.createElement(
                          M.a,
                          {
                            disabled: o || l || i,
                            onPress: this._handleAdd,
                            size: 'small',
                            style: ue.actionButton,
                            testID: L,
                            type: 'primaryFilled',
                          },
                          v ? Q : J,
                        ),
                      ),
                      title: G,
                    },
                    g.a.createElement(
                      B.a,
                      { style: ue.form },
                      g.a.createElement(B.a, { style: ue.formItem }, g.a.createElement(k.a, { scheduledFor: w })),
                      g.a.createElement(
                        B.a,
                        { style: ue.formItem },
                        g.a.createElement(H.b, { color: 'gray700' }, ee),
                        g.a.createElement(A.a, {
                          day: h,
                          errorMessage: o ? E : '',
                          errors: o ? { year: !0, month: !0, day: !0 } : {},
                          label: ee,
                          maxSelectableYear: b,
                          minSelectableYear: y,
                          month: p,
                          onChange: this._handleDateChange,
                          style: ue.date,
                          year: m,
                        }),
                      ),
                      g.a.createElement(
                        B.a,
                        { style: ue.formItem },
                        g.a.createElement(z.a, {
                          amPmLabel: te,
                          errorText: l ? oe : '',
                          hour: d,
                          hourLabel: ne,
                          invalid: l,
                          label: $,
                          minute: f,
                          minuteLabel: re,
                          onChange: this._handleTimeChange,
                        }),
                      ),
                      _ &&
                        g.a.createElement(
                          B.a,
                          { style: ue.formItem },
                          g.a.createElement(H.b, { color: 'gray700' }, ae),
                          g.a.createElement(H.b, { size: 'headline1' }, _),
                        ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ue = U.a.create(function (e) {
          return {
            actionButtonContainer: { flexDirection: 'row' },
            actionButton: { marginLeft: e.spaces.space12 },
            bottomBar: {
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            form: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            formItem: { marginBottom: e.spaces.space20 },
            date: { marginVertical: 0, marginTop: e.spaces.space2 },
          }
        })
      t.default = Object(Y.c)(ce)(x(le))
    },
    nS1w: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return m
      }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return v
        })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        i = (n('z84I'), n('+KXO'), n('LW0h'), n('wFPu'), n('2G9S'), n('3XMw')),
        c = n.n(i),
        s = n('mtvn'),
        l =
          ((r = {}),
          o()(r, 1, { label: c.a.hac89abf, numDays: 31 }),
          o()(r, 2, { label: c.a.ef30b309, numDays: 28, numDaysLeapYear: 29 }),
          o()(r, 3, { label: c.a.b56920fa, numDays: 31 }),
          o()(r, 4, { label: c.a.b1a0f1ec, numDays: 30 }),
          o()(r, 5, { label: c.a.daf779c8, numDays: 31 }),
          o()(r, 6, { label: c.a.c6ad074d, numDays: 30 }),
          o()(r, 7, { label: c.a.f1db106b, numDays: 31 }),
          o()(r, 8, { label: c.a.i4e80b7a, numDays: 31 }),
          o()(r, 9, { label: c.a.efa6cc1d, numDays: 30 }),
          o()(r, 10, { label: c.a.f40a0cbe, numDays: 31 }),
          o()(r, 11, { label: c.a.ac74a31c, numDays: 30 }),
          o()(r, 12, { label: c.a.i6c1e4b2, numDays: 31 }),
          r),
        u = function (e) {
          return { label: ''.concat(e), value: ''.concat(e) }
        },
        d = Object(s.a)(1, 29).map(u),
        f = Object(s.a)(1, 30).map(u),
        h = Object(s.a)(1, 31).map(u),
        p = Object(s.a)(1, 32).map(u),
        m = function () {
          return Object.keys(l).map(function (e) {
            return { label: l[e].label, value: e }
          })
        },
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = t || new Date(Date.now()).getFullYear()
          return Object(s.a)(e, a + 1)
            .reverse()
            .filter(function (e) {
              return 2 === r && 29 === n ? b(e) : e
            })
            .map(u)
        },
        b = function (e) {
          return 1 === new Date(e, 1, 29).getMonth()
        },
        g = function (e, t) {
          if (!e) return p
          switch (2 === e && (!t || (t && b(t))) ? l[e].numDaysLeapYear : l[e].numDays) {
            case 28:
              return d
            case 29:
              return f
            case 30:
              return h
            case 31:
            default:
              return p
          }
        },
        v = function (e, t, n) {
          if ('number' == typeof e && 'number' == typeof t && 'number' == typeof n) {
            var r = t < 10 ? '0'.concat(t) : ''.concat(t),
              a = e < 10 ? '0'.concat(e) : ''.concat(e)
            return ''.concat(n, '-').concat(r, '-').concat(a)
          }
          return ''
        }
      t.a = { getFormattedDateValue: v }
    },
    zmS9: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('3XMw'),
        i = n.n(o),
        c = n('J0mu'),
        s = n('t62R'),
        l = n('rHpw'),
        u = n('QbaN'),
        d = i.a.bfb895b1,
        f = l.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          n = e.scheduledFor,
          r = e.testID,
          o = Object(u.c)(n),
          i = !!o && Object(u.h)(n) && !Object(u.g)(o) && !Object(u.f)(o),
          l = Boolean(t)
        return o && i
          ? a.a.createElement(
              s.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: r, withInteractiveStyling: l },
              a.a.createElement(c.a, { style: f.icon }),
              d({ date: Object(u.b)(o), time: Object(u.i)(o) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
