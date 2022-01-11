;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '5hXE': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n,
        o = r('VrFO'),
        a = r.n(o),
        c = r('Y9Ll'),
        i = r.n(c),
        l = r('1Pcy'),
        u = r.n(l),
        s = r('5Yy7'),
        f = r.n(s),
        h = r('N+ot'),
        p = r.n(h),
        d = r('AuHH'),
        y = r.n(d),
        m = r('KEM+'),
        b = r.n(m),
        v = (r('+KXO'), r('uFXj'), r('2G9S'), r('vrRf'), r('ERkP')),
        g = r('P1r1'),
        w = r('RqPI'),
        R = r('rxPX'),
        O = Object(R.a)()
          .propsFromState(function () {
            return { language: w.n, scale: g.y }
          })
          .propsFromActions(function () {
            return { updateSettings: g.L }
          })
          .withAnalytics(),
        k = r('3XMw'),
        C = r.n(k),
        P = r('huBF'),
        _ = r('MWbm'),
        S = r('lzTJ'),
        x = r('rHpw'),
        j = r('t62R'),
        E = r('9RkS')
      function F(e) {
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
          var r,
            n = y()(e)
          if (t) {
            var o = y()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var L = S.f.ThemeScaleNames,
        N = Object.keys(L),
        B = N.length - 1,
        H = C.a.d8680056,
        I = C.a.eed02405,
        A = C.a.j59f0b93,
        M = C.a.b81aaad8,
        D = C.a.c704488f,
        T =
          ((n = {}),
          b()(n, L.xSmall, H),
          b()(n, L.small, I),
          b()(n, L.normal, A),
          b()(n, L.large, M),
          b()(n, L.xLarge, D),
          n),
        W = [H, I, A, M, D],
        K = C.a.e46dffa0,
        z = (function (e) {
          f()(r, e)
          var t = F(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(u()(e), '_handleSliderChanged', function (t) {
                var r = e.props,
                  n = r.analytics,
                  o = r.updateSettings,
                  a = N[t]
                n.scribe({ component: 'text_size_picker', element: 'scale', action: a }),
                  o({ scale: a }),
                  x.a.setScale(L[a])
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.createElement(P.a, { themeItem: 'textSize' }, function (t) {
                    return v.createElement(
                      _.a,
                      { style: X.sliderContainer },
                      v.createElement(j.b, { size: 'subtext2' }, 'Aa'),
                      v.createElement(
                        _.a,
                        { style: X.slider },
                        v.createElement(E.a, {
                          accessibilityLabel: K,
                          accessibilityLabelValueText: T[x.a.theme.scale],
                          autoFocus: t,
                          hoverLabels: W,
                          max: B,
                          min: 0,
                          onChange: e._handleSliderChanged,
                          value: N.indexOf(x.a.theme.scale),
                          withMarkers: !0,
                        }),
                      ),
                      v.createElement(j.b, { size: 'headline1' }, 'Aa'),
                    )
                  })
                },
              },
            ]),
            r
          )
        })(v.Component),
        X = x.a.create(function (e) {
          return {
            sliderContainer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space16 },
            slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 },
          }
        }),
        Y = O(z)
      t.a = Y
    },
    A2ey: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        h = r.n(f),
        p = r('AuHH'),
        d = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        b = (r('2G9S'), r('ezhf')),
        v = r('ERkP'),
        g = r('HPNB'),
        w = r('v6aA'),
        R = r('P1r1'),
        O = r('rxPX'),
        k = Object(O.a)()
          .propsFromActions(function () {
            return { updateSettings: R.L }
          })
          .withAnalytics(),
        C = r('3XMw'),
        P = r.n(C),
        _ = r('huBF'),
        S = r('lzTJ'),
        x = r('rHpw'),
        j = r('cHvH'),
        E = r('fBvp')
      function F(e) {
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
          var r,
            n = d()(e)
          if (t) {
            var o = d()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var L = S.f.ThemePaletteNames,
        N = P.a.ce8a8115,
        B = [
          { label: P.a.j59f0b93, accessibilityLabel: P.a.d3d48f39, backgroundName: L.light },
          { label: P.a.i76f67ed, backgroundName: L.dark },
          { label: P.a.c8f85960, backgroundName: L.darker },
        ],
        H = (function (e) {
          s()(r, e)
          var t = F(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(l()(e), '_handleBackgroundChange', function (t) {
                var r = e.props,
                  n = r.analytics,
                  o = r.updateSettings
                n.scribe({ component: 'background_picker', element: 'option', action: t })
                var a = L[t]
                x.a.setPalette(a), o({ themeBackground: a }), b.c(t, e.context.featureSwitches)
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.createElement(j.a, null, function (t) {
                    var r = t.windowWidth
                    return v.createElement(_.a, { themeItem: 'background' }, function (t) {
                      return v.createElement(E.a, {
                        accessibilityLabel: N,
                        autoFocus: t,
                        layout: g.a.shouldRenderAsModal(r) ? 'row' : 'column',
                        onChange: e._handleBackgroundChange,
                        options: B,
                        value: x.a.theme.paletteName,
                      })
                    })
                  })
                },
              },
            ]),
            r
          )
        })(v.Component)
      m()(H, 'contextType', w.a)
      var I = k(H)
      t.a = I
    },
    KNZn: function (e, t, r) {
      'use strict'
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        h = r.n(f),
        p = r('AuHH'),
        d = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        b = (r('7x/C'), r('DZ+c'), r('vrRf'), r('uFXj'), r('ERkP')),
        v = r('RqPI'),
        g = r('rxPX'),
        w = Object(g.a)().propsFromState(function () {
          return { language: v.n }
        }),
        R = r('3XMw'),
        O = r.n(R),
        k = r('fs1G'),
        C = r('rHpw'),
        P = r('BLtI'),
        _ = r('MWbm')
      function S(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = d()(e)
          if (t) {
            var o = d()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var E = 'Twitter',
        F = O.a.ea1c87a5({ mention: E }),
        L = {
          text: F,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, F.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: E,
                indices: [F.indexOf('@'), F.indexOf('@') + E.length + 1],
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
        N = (function (e) {
          s()(r, e)
          var t = j(r)
          function r(e) {
            var n
            o()(this, r),
              (n = t.call(this, e)),
              m()(l()(n), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var a = n.props,
              c = a.language,
              i = a.tweet
            return (n._tweet = x(x(x({}, L), i), {}, { lang: c || 'en' })), n
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return b.createElement(
                    _.a,
                    { accessibilityHidden: !0, style: e && B.tweetBorder },
                    b.createElement(P.b, {
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
                    b.createElement(_.a, { style: C.a.absoluteFill }),
                  )
                },
              },
            ]),
            r
          )
        })(b.Component)
      m()(N, 'defaultProps', { tweet: L, withTweetBorder: !1 })
      var B = C.a.create(function (e) {
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
        H = w(N)
      t.a = H
    },
    fBvp: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return H
      })
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        h = r.n(f),
        p = r('AuHH'),
        d = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        b = (r('z84I'), r('ERkP')),
        v =
          (r('+KXO'),
          r('1t7P'),
          r('LW0h'),
          r('daRM'),
          r('jwue'),
          r('+oxZ'),
          r('FtHn'),
          r('ho0z'),
          r('uFXj'),
          r('t62R')),
        g = r('IMYl'),
        w = r('cm6r'),
        R = r('rHpw'),
        O = r('lzTJ'),
        k = r('k/Ka'),
        C = r('MWbm'),
        P = r('r7ya'),
        _ = r('I4+6')
      function S(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = d()(e)
          if (t) {
            var o = d()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var E = (function (e) {
          s()(r, e)
          var t = j(r)
          function r() {
            var e
            return (
              o()(this, r),
              (e = t.call(this)),
              m()(l()(e), '_radioRef', b.createRef()),
              m()(l()(e), '_handleChange', function (t) {
                var r = e.props,
                  n = r.backgroundName,
                  o = r.isSelected,
                  a = r.onChange
                a && !o && a(n)
              }),
              (e._selectedInteractiveStyles = _.a.generate({
                backgroundColor: R.a.theme.colors.transparent,
                color: R.a.theme.colors.primary,
                withFocusWithinFocusRing: !0,
              })),
              (e._unselectedInteractiveStyles = _.a.generate({
                backgroundColor: R.a.theme.colors.transparent,
                color: R.a.theme.colors.gray700,
                withFocusWithinFocusRing: !0,
              })),
              e
            )
          }
          return (
            c()(r, [
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
                    r = t.accessibilityLabel,
                    n = t.isSelected,
                    o = t.label,
                    a = t.name
                  return b.createElement(
                    w.a,
                    { focusable: !1, interactiveStyles: null, style: [F.root, this._getButtonStyles()] },
                    function (t) {
                      return b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(
                          w.a,
                          {
                            accessibilityRole: 'radio',
                            focusable: !1,
                            interactiveStyles: e._getInteractiveRadioStyles(),
                            interactivityState: t,
                            style: F.radioOuterCircle,
                          },
                          b.createElement(
                            C.a,
                            { style: [F.radioInnerCircle, e._getCircleStyles()] },
                            n ? b.createElement(g.a, { style: F.checkMark }) : null,
                          ),
                        ),
                        b.createElement(
                          C.a,
                          { accessibilityHidden: !0, style: F.text },
                          b.createElement(v.b, { numberOfLines: 1, style: e._getTextStyles(), weight: 'bold' }, o),
                        ),
                        Object(k.a)('input', {
                          accessibilityLabel: r || o,
                          checked: n,
                          name: a,
                          style: F.nativeControl,
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
                    r = e.isSelected
                  return {
                    backgroundColor: this._getPalette(t).cellBackground,
                    borderColor: r ? R.a.theme.colors.primary : R.a.theme.colors.gray200,
                    borderWidth: r ? '2px' : '1px',
                  }
                },
              },
              {
                key: '_getCircleStyles',
                value: function () {
                  var e = this.props,
                    t = e.backgroundName,
                    r = e.isSelected
                  return {
                    backgroundColor: r ? R.a.theme.colors.primary : R.a.theme.colors.transparent,
                    borderColor: r ? R.a.theme.colors.primary : this._getPalette(t).gray300,
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
                  return e === O.b.dark ? P.a : e === O.b.darker ? P.b : P.c
                },
              },
            ]),
            r
          )
        })(b.Component),
        F = R.a.create(function (e) {
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
            nativeControl: x(
              x({}, R.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        L = E
      function N(e) {
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
          var r,
            n = d()(e)
          if (t) {
            var o = d()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var B = 1,
        H = (function (e) {
          s()(r, e)
          var t = N(r)
          function r() {
            var e
            return (
              o()(this, r),
              (e = t.call(this)),
              m()(l()(e), '_handleItemChanged', function (t) {
                return function () {
                  ;(0, e.props.onChange)(t)
                }
              }),
              (e._backgroundPickerName = 'background_picker_'.concat(B)),
              (B += 1),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.accessibilityLabel,
                    n = t.autoFocus,
                    o = t.layout,
                    a = t.options,
                    c = t.value
                  return b.createElement(
                    C.a,
                    { accessibilityLabel: r, accessibilityRole: 'radiogroup', style: 'row' === o ? I.row : I.column },
                    a.map(function (t) {
                      return b.createElement(L, {
                        accessibilityLabel: t.accessibilityLabel,
                        autoFocus: n && t.backgroundName === c,
                        backgroundName: t.backgroundName,
                        isSelected: t.backgroundName === c,
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
            r
          )
        })(b.Component),
        I = R.a.create(function (e) {
          return { row: { flexDirection: 'row' }, column: { flexDirection: 'column' } }
        })
    },
    huBF: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        h = r.n(f),
        p = r('AuHH'),
        d = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        b = (r('2G9S'), r('ERkP')),
        v = r('rxPX'),
        g = r('z2Pn'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { themeFocus: g.f }
          })
          .propsFromActions(function () {
            return { setThemeFocus: g.k }
          }),
        R = r('MWbm'),
        O = r('3EFP')
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
          var r,
            n = d()(e)
          if (t) {
            var o = d()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var C = w(
        (function (e) {
          s()(r, e)
          var t = k(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(l()(e), '_handleKeyDown', function (t) {
                var r = e.props,
                  n = r.setThemeFocus,
                  o = r.themeItem
                t.key === O.d || t.key === O.e ? n('') : n(o)
              }),
              m()(l()(e), '_handleMouseDown', function () {
                e.props.setThemeFocus('')
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.themeFocus,
                    n = e.themeItem === r
                  return b.createElement(
                    R.a,
                    { onKeyDown: this._handleKeyDown, onMouseDown: this._handleMouseDown },
                    t(n),
                  )
                },
              },
            ]),
            r
          )
        })(b.Component),
      )
      t.a = C
    },
    uI9t: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('5Yy7'),
        l = r.n(i),
        u = r('N+ot'),
        s = r.n(u),
        f = r('AuHH'),
        h = r.n(f),
        p = r('KEM+'),
        d = r.n(p),
        y = (r('z84I'), r('ERkP')),
        m = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('1Pcy')),
        b = r.n(m),
        v = (r('2G9S'), r('ho0z'), r('I4+6')),
        g = r('cm6r'),
        w = r('rHpw'),
        R = r('k/Ka'),
        O = r('MWbm'),
        k = r('x0mb'),
        C = r('IMYl')
      function P(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                d()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function S(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return s()(this, r)
        }
      }
      var x = (function (e) {
          l()(r, e)
          var t = S(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              d()(b()(e), '_radioRef', y.createRef()),
              d()(b()(e), '_handleChange', function () {
                var t = e.props,
                  r = t.colorName
                ;(0, t.onChange)(r)
              }),
              e
            )
          }
          return (
            c()(r, [
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
                    r = e.colorName,
                    n = e.isSelected,
                    o = e.name,
                    a = e.style,
                    c = w.a.theme.colors[r],
                    i = v.a.generate({
                      backgroundColor: w.a.theme.colors.transparent,
                      color: c,
                      withFocusWithinFocusRing: !0,
                    })
                  return y.createElement(
                    O.a,
                    { style: [j.container, a] },
                    y.createElement(
                      g.a,
                      { accessibilityRole: 'label', interactiveStyles: i, style: [j.choice, j.choiceContainer] },
                      y.createElement(k.a, { style: [j.choice, { color: c }] }),
                      Object(R.a)('input', {
                        accessibilityLabel: t,
                        name: o,
                        checked: n,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: j.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    n &&
                      y.createElement(
                        O.a,
                        { style: [j.choice, j.checkMarkContainer] },
                        y.createElement(C.a, { style: [j.choiceSelected, { backgroundColor: c }] }),
                      ),
                  )
                },
              },
            ]),
            r
          )
        })(y.Component),
        j = w.a.create(function (e) {
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
            nativeControl: _(
              _({}, w.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        E = x
      function F(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return s()(this, r)
        }
      }
      var L = 1,
        N = (function (e) {
          l()(r, e)
          var t = F(r)
          function r() {
            var e
            return o()(this, r), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(L, '_LABEL')), (L += 1), e
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.accessibilityLabel,
                    n = t.autoFocus,
                    o = t.layout,
                    a = t.onChange,
                    c = t.options,
                    i = t.value,
                    l = 'two-rows' === o,
                    u = [B.root, l && B.flexWrap],
                    s = l ? { width: ''.concat((2 / c.length) * 100, '%') } : void 0
                  return y.createElement(
                    O.a,
                    { accessibilityLabel: r, accessibilityRole: 'radiogroup', style: u },
                    c.map(function (t) {
                      var r = t.accessibilityLabel,
                        o = t.colorName
                      return y.createElement(E, {
                        accessibilityLabel: r,
                        autoFocus: n && i === o,
                        colorName: o,
                        isSelected: i === o,
                        key: o,
                        name: e._colorPickerId,
                        onChange: a,
                        style: s,
                      })
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(y.Component)
      d()(N, 'defaultProps', { layout: 'one-row' })
      var B = w.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = N
    },
    vSJw: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        c = r.n(a),
        i = r('1Pcy'),
        l = r.n(i),
        u = r('5Yy7'),
        s = r.n(u),
        f = r('N+ot'),
        h = r.n(f),
        p = r('AuHH'),
        d = r.n(p),
        y = r('KEM+'),
        m = r.n(y),
        b = (r('2G9S'), r('ERkP')),
        v = r('HPNB'),
        g = r('P1r1'),
        w = r('rxPX'),
        R = Object(w.a)()
          .propsFromActions(function () {
            return { updateSettings: g.L }
          })
          .withAnalytics(),
        O = r('3XMw'),
        k = r.n(O),
        C = r('huBF'),
        P = r('lzTJ'),
        _ = r('rHpw'),
        S = r('cHvH'),
        x = r('uI9t')
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
          var r,
            n = d()(e)
          if (t) {
            var o = d()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var E = P.f.ThemePrimaryColorNames,
        F = k.a.aefc5b20,
        L = [
          { accessibilityLabel: k.a.a52d0fdd, colorName: E.blue500 },
          { accessibilityLabel: k.a.d818cdd5, colorName: E.yellow500 },
          { accessibilityLabel: k.a.fee1cd64, colorName: E.magenta500 },
          { accessibilityLabel: k.a.cbed7fb2, colorName: E.purple500 },
          { accessibilityLabel: k.a.g697ec02, colorName: E.orange500 },
          { accessibilityLabel: k.a.a7c22049, colorName: E.green500 },
        ],
        N = R(
          (function (e) {
            s()(r, e)
            var t = j(r)
            function r() {
              var e
              o()(this, r)
              for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                m()(l()(e), '_handleColorChange', function (t) {
                  var r = e.props,
                    n = r.analytics,
                    o = r.updateSettings
                  n.scribe({ component: 'color_picker', element: 'option', action: t }),
                    o({ themeColor: E[t] }),
                    _.a.setPrimaryColor(E[t])
                }),
                e
              )
            }
            return (
              c()(r, [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return b.createElement(S.a, null, function (t) {
                      var r = t.windowWidth
                      return b.createElement(C.a, { themeItem: 'color' }, function (t) {
                        return b.createElement(x.a, {
                          accessibilityLabel: F,
                          autoFocus: t,
                          layout: v.a.shouldRenderAsModal(r) ? 'one-row' : 'two-rows',
                          onChange: e._handleColorChange,
                          options: L,
                          value: _.a.theme.primaryColorName,
                        })
                      })
                    })
                  },
                },
              ]),
              r
            )
          })(b.Component),
        )
      t.a = N
    },
  },
])
//# sourceMappingURL=WIPED
