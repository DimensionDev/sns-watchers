;(window.webpackJsonp = window.webpackJsonp || []).push([
  [201],
  {
    '5RdJ': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('97Jx'),
        o = n.n(r),
        i = n('ERkP'),
        a = n('+cai'),
        c = n('nvLZ')
      t.default = function (e) {
        return i.createElement(c.a, o()({}, e, { emojiInfo: a.default }))
      }
    },
    VbCG: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return l
      }),
        n.d(t, 'e', function () {
          return d
        }),
        n.d(t, 'f', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return v
        }),
        n.d(t, 'b', function () {
          return m
        })
      var r,
        o,
        i = n('KEM+'),
        a = n.n(i),
        c = n('3XMw'),
        s = n.n(c),
        u = n('rHpw'),
        l = {
          None: 'none',
          Light: 'light',
          MediumLight: 'medium-light',
          Medium: 'medium',
          MediumDark: 'medium-dark',
          Dark: 'dark',
        },
        f =
          ((r = {}),
          a()(r, l.Light, '1f3fb'),
          a()(r, l.MediumLight, '1f3fc'),
          a()(r, l.Medium, '1f3fd'),
          a()(r, l.MediumDark, '1f3fe'),
          a()(r, l.Dark, '1f3ff'),
          r),
        d =
          ((o = {}),
          a()(o, l.None, { id: l.None, name: s.a.ff3dd27b, color: '#FFDC5D' }),
          a()(o, l.Light, { codepoint: f[l.Light], id: l.Light, name: s.a.b554fcf3, color: '#F7DECE' }),
          a()(o, l.MediumLight, {
            codepoint: f[l.MediumLight],
            id: l.MediumLight,
            name: s.a.j590b148,
            color: '#F3D2A2',
          }),
          a()(o, l.Medium, { codepoint: f[l.Medium], id: l.Medium, name: s.a.e7d4ee85, color: '#D5AB88' }),
          a()(o, l.MediumDark, { codepoint: f[l.MediumDark], id: l.MediumDark, name: s.a.ia423ebb, color: '#AF7E57' }),
          a()(o, l.Dark, { codepoint: f[l.Dark], id: l.Dark, name: s.a.a2cf0941, color: '#7C533E' }),
          o),
        h = {
          search: s.a.j824dc05,
          notFoundHeader: s.a.e39c4391,
          notFoundMessage: s.a.f2625275,
          skintext: s.a.d67ad795,
          clear: s.a.e6388bfa,
          recentCategoryName: s.a.j7c67ec9,
          searchCategoryName: s.a.da539d38,
        },
        p = {
          EmojiWidth: u.a.theme.spaces.space20,
          EmojiHeight: u.a.theme.spaces.space20,
          EmojiGutter: u.a.theme.spaces.space4,
        },
        v = {
          Search: 'search',
          Recent: 'recent',
          People: 'people',
          Nature: 'nature',
          Foods: 'foods',
          Activity: 'activity',
          Places: 'places',
          Objects: 'objects',
          Symbols: 'symbols',
          Flags: 'flags',
          Custom: 'custom',
        },
        m = 9
    },
    a6L8: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('5Yy7'),
        s = n.n(c),
        u = n('N+ot'),
        l = n.n(u),
        f = n('AuHH'),
        d = n.n(f),
        h = (n('ho0z'), n('ERkP')),
        p = n('faxe'),
        v = n('3rX5'),
        m = n('VbCG'),
        y = n('rHpw')
      function g(e) {
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
            r = d()(e)
          if (t) {
            var o = d()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var _ = (function (e) {
          s()(n, e)
          var t = g(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.emoji,
                    r = e.skinTone,
                    o = e.style,
                    i = Object(p.b)(n, r)
                  return i
                    ? h.createElement(v.a, {
                        accessibilityLabel: t,
                        alt: n.name,
                        draggable: !1,
                        resizeMode: 'stretch',
                        source: i,
                        style: [w.root, o],
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(h.PureComponent),
        w = y.a.create(function (e) {
          return { root: { height: m.c.EmojiHeight, width: m.c.EmojiWidth } }
        })
      t.a = _
    },
    faxe: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return a
        }),
        n.d(t, 'd', function () {
          return c
        }),
        n.d(t, 'a', function () {
          return s
        }),
        n.d(t, 'e', function () {
          return u
        })
      n('vrRf'), n('ho0z')
      var r = n('z4Oz'),
        o = function (e, t) {
          var n = t && t.codepoint
          if (!(n && i(e.skin_variations, n) > 1))
            return n && e.skin_variations && e.skin_variations[n] ? e.skin_variations[n] : void 0
        },
        i = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = 0
          for (var r in e) t && r.indexOf(t) >= 0 && (n += 1)
          return n
        },
        a = function (e, t) {
          var n = (o(e, t) || e).unified
          return r.a.getTwemojiUrl(n)
        },
        c = function (e, t) {
          var n = e.name,
            r = e.short_names,
            i = e.text,
            a = o(e, t),
            c = a ? a.unified : e.unified
          return { id: e.id || r[0], name: n, text: i || c, unified: c }
        },
        s = function () {
          return 'emojiPicker-'.concat(Math.random())
        }
      function u(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
        if (e && t) {
          var r = e.getBoundingClientRect(),
            o = r.height,
            i = r.top,
            a = i + n,
            c = t.getBoundingClientRect(),
            s = c.bottom,
            u = c.top,
            l = o + i
          if (u < a) {
            var f = a - u
            e.scrollTop = Math.max(0, e.scrollTop - f)
          } else if (u > l || s > l) {
            var d = s - l
            e.scrollTop = Math.max(0, e.scrollTop + d)
          }
        }
      }
    },
    nvLZ: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('T0aG'),
        o = n.n(r),
        i = n('RhWx'),
        a = n.n(i),
        c = n('97Jx'),
        s = n.n(c),
        u = n('VrFO'),
        l = n.n(u),
        f = n('Y9Ll'),
        d = n.n(f),
        h = n('1Pcy'),
        p = n.n(h),
        v = n('5Yy7'),
        m = n.n(v),
        y = n('N+ot'),
        g = n.n(y),
        _ = n('AuHH'),
        w = n.n(_),
        k = n('KEM+'),
        S = n.n(k),
        R =
          (n('z84I'),
          n('ho0z'),
          n('jwue'),
          n('+oxZ'),
          n('vrRf'),
          n('wFPu'),
          n('M+/F'),
          n('2G9S'),
          n('LW0h'),
          n('IAdD'),
          n('ERkP')),
        j = n('py1r'),
        b = n('I4+6'),
        C = n('oLZl'),
        E = n('rHpw'),
        P = n('MWbm')
      function O(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var I = b.a.generate({ backgroundColor: 'transparent', color: E.a.theme.colors.primary }),
        D = (function (e) {
          m()(n, e)
          var t = O(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              S()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.category
                ;(0, t.onClick)(n)
              }),
              S()(p()(e), '_handleKeyDown', function (t) {
                var n = t.key,
                  r = t.altKey,
                  o = t.ctrlKey,
                  i = t.metaKey
                r || o || i || (n === C.a.Enter && (e._handleClick(), t.preventDefault(), t.stopPropagation()))
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.icon,
                    r = t.isActive,
                    o = t.isDisabled
                  return R.createElement(j.a, { disabled: o }, function (t) {
                    var i = t.isFocused,
                      a = t.isHovered,
                      c = t.isPressed
                    return R.createElement(
                      P.a,
                      { style: T.container },
                      R.createElement(
                        P.a,
                        {
                          accessibilityDisabled: o,
                          accessibilityRole: 'button',
                          onClick: e._handleClick,
                          onKeyDown: i ? e._handleKeyDown : void 0,
                          style: [
                            T.iconWrapper,
                            a || r ? void 0 : T.faded,
                            I.transitionStyle,
                            a && I.hoverStyle,
                            c && I.pressedStyle,
                            i && I.focusedStyle,
                          ],
                        },
                        n,
                      ),
                      R.createElement(P.a, {
                        style: [T.border, r ? { backgroundColor: E.a.theme.colors.primary } : null],
                      }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(R.PureComponent),
        T = E.a.create(function (e) {
          return {
            container: { flex: 1 },
            iconWrapper: { width: '100%', alignItems: 'center', paddingVertical: e.spaces.space4 },
            border: { height: e.borderWidths.large, width: '100%', borderRadius: e.borderRadii.infinite },
            faded: { filter: 'grayscale(100%) contrast(80%)', opacity: 0.5 },
          }
        }),
        x = D,
        F = n('a6L8')
      function L(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var H = {
          people: '😀',
          nature: '🐻',
          food: '🍔',
          activity: '⚽️',
          travel: '🚘',
          objects: '💡',
          symbols: '🔣',
          flags: '🚩',
          recent: '🕑',
        },
        B = (function (e) {
          m()(n, e)
          var t = L(n)
          function n() {
            return l()(this, n), t.apply(this, arguments)
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.activeCategory,
                    r = t.categories,
                    o = t.disableAll,
                    i = t.onAnchorClick
                  return R.createElement(
                    P.a,
                    { style: M.root },
                    r.map(function (t) {
                      var r = t.anchorless,
                        a = t.emojis,
                        c = t.id,
                        s = t.name,
                        u = (a && 0 === a.length) || o,
                        l = !!n && t.id === n.id
                      return r
                        ? null
                        : R.createElement(x, {
                            category: t,
                            icon: e._getIcon(c, s),
                            isActive: l,
                            isDisabled: u,
                            key: c,
                            onClick: i,
                          })
                    }),
                  )
                },
              },
              {
                key: '_getIcon',
                value: function (e, t) {
                  var n = this.props.emojiData[H[e]]
                  return R.createElement(F.a, { accessibilityLabel: t, emoji: n })
                },
              },
            ]),
            n
          )
        })(R.PureComponent),
        M = E.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        A = B,
        z = n('t62R'),
        U = n('/yvb'),
        N = n('2ZFc'),
        K = n('ddV6'),
        V = n.n(K),
        W = (n('5BYb'), n('uFXj'), n('VbCG'))
      function G(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var J = (function (e) {
          m()(n, e)
          var t = G(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              S()(p()(e), '_handleHover', function () {
                var t = e.props,
                  n = t.emoji,
                  r = t.onHover
                r && r(n)
              }),
              S()(p()(e), '_handleFocus', function () {
                var t = e.props,
                  n = t.emoji,
                  r = t.onFocus
                r && r(n)
              }),
              S()(p()(e), '_getBackgroundPositionStyle', function () {
                var t = e.props,
                  n = t.emoji,
                  r = t.spriteSheetColumns,
                  o = t.spriteSheetRows,
                  i = e.props.spritePosition || n.sprite_position,
                  a = 100 / (o - 1)
                return ''.concat((100 / (r - 1)) * i[0], '% ').concat(a * i[1], '%')
              }),
              S()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.emoji,
                  r = t.onSelect
                r && r(n)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescendantId,
                    r = t.emoji,
                    o = t.emojiName,
                    i = t.spriteUrl,
                    a = {
                      backgroundImage: 'url('.concat(i, ')'),
                      backgroundPosition: this._getBackgroundPositionStyle(),
                      backgroundSize: ''
                        .concat(100 * this.props.spriteSheetColumns, '% ')
                        .concat(100 * this.props.spriteSheetRows, '%'),
                    }
                  return R.createElement(
                    j.a,
                    { onFocusRingGained: this._handleFocus, onHoverIn: this._handleHover },
                    function (t) {
                      var i = t.isFocused,
                        c = t.isHovered,
                        s = t.isPressed
                      return R.createElement(
                        P.a,
                        {
                          accessibilityLabel: o || r.name,
                          accessibilityRole: 'option',
                          accessibilityState: { selected: !!n },
                          nativeID: n,
                          onClick: e._handleClick,
                          style: [
                            Z.container,
                            Y.transitionStyle,
                            c && Y.hoverStyle,
                            s && Y.pressedStyle,
                            (i || n) && Y.focusedStyle,
                          ],
                        },
                        R.createElement(P.a, { style: [a, Z.emoji] }),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(R.PureComponent),
        Y = b.a.generate({ backgroundColor: E.a.theme.colors.transparent, color: E.a.theme.colors.gray700 }),
        Z = E.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
              boxSizing: 'border-box',
              padding: W.c.EmojiGutter,
            },
            emoji: { display: 'inline-block', outlineStyle: 'none', height: W.c.EmojiHeight, width: W.c.EmojiWidth },
          }
        }),
        q = J,
        X = n('FIs5'),
        Q = n('mtvn'),
        $ = n('7nmT'),
        ee = n.n($)
      function te(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var ne = (function (e) {
        m()(n, e)
        var t = te(n)
        function n() {
          return l()(this, n), t.apply(this, arguments)
        }
        return (
          d()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.style,
                  r = e.withTopBorder
                return R.createElement(P.a, { style: [re.root, r && re.topBorder, n] }, t)
              },
            },
          ]),
          n
        )
      })(R.PureComponent)
      S()(ne, 'defaultProps', { withTopBorder: !1 })
      var re = E.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.borderColor,
              padding: e.spaces.space12,
            },
            topBorder: { borderTopWidth: e.borderWidths.small },
          }
        }),
        oe = ne,
        ie = n('m3Bd'),
        ae = n.n(ie),
        ce = n('faxe'),
        se = function (e, t) {
          var n = null == e ? 0 : e.length
          if (!n || t < 1) return []
          for (var r = 0, o = 0, i = new Array(Math.ceil(n / t)); r < n; ) (i[o] = e.slice(r, (r += t))), (o += 1)
          return i
        },
        ue = n('OiMc')
      function le(e, t) {
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
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                S()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : le(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function de(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var he = (function (e) {
          m()(n, e)
          var t = de(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              S()(p()(e), '_createDismissOnSelect', function (t) {
                return function (n) {
                  var r = e.props.onSelect
                  t(), r && r(n)
                }
              }),
              S()(p()(e), '_getEmojisForActiveSkinTone', function (t) {
                var n = e.props,
                  r = n.activeSkinTone,
                  o = n.emoji,
                  i = ae()(n, ['activeSkinTone', 'emoji']),
                  a = r.codepoint,
                  c = o.skin_variations,
                  u = [
                    R.createElement(
                      q,
                      s()({}, i, {
                        emoji: fe({}, o),
                        key: 'none',
                        onSelect: e._createDismissOnSelect(t),
                        spritePosition: o.sprite_position,
                      }),
                    ),
                  ]
                for (var l in c)
                  if (a && l.indexOf(a) >= 0) {
                    var f = c[l],
                      d = f.sprite_position,
                      h = f.unified
                    u.push(
                      R.createElement(
                        q,
                        s()({}, i, {
                          emoji: fe(fe({}, o), {}, { text: h }),
                          key: l,
                          onSelect: e._createDismissOnSelect(t),
                          spritePosition: d,
                        }),
                      ),
                    )
                  }
                return u
              }),
              S()(p()(e), 'renderEmojis', function (t) {
                var n = se(e._getEmojisForActiveSkinTone(t), 10)
                return R.createElement(
                  P.a,
                  { style: pe.emojisContainer },
                  n.map(function (e, t) {
                    return R.createElement(P.a, { key: t, style: pe.row }, e)
                  }),
                )
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.activeSkinTone, e.emoji),
                    n = (e.onSelect, ae()(e, ['activeSkinTone', 'emoji', 'onSelect']))
                  return R.createElement(
                    ue.a,
                    { contentStyle: pe.contentStyle, renderContent: this.renderEmojis, withArrow: !0 },
                    R.createElement(q, s()({}, n, { emoji: t, spritePosition: t.sprite_position })),
                  )
                },
              },
            ]),
            n
          )
        })(R.PureComponent),
        pe = E.a.create(function (e) {
          return {
            row: { flexDirection: 'row' },
            contentStyle: { minWidth: '100%' },
            emojisContainer: { padding: e.spaces.space12 },
          }
        }),
        ve = he
      function me(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var ye = (function (e) {
        m()(n, e)
        var t = me(n)
        function n() {
          return l()(this, n), t.apply(this, arguments)
        }
        return (
          d()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.activeSkinTone,
                  n = ae()(e, ['activeSkinTone']),
                  r = this.props.emoji,
                  o = r.skin_variations,
                  i = t.codepoint,
                  a = Object(ce.c)(o, i),
                  c = i && o && o[i]
                return 0 !== a || c
                  ? 1 === a && c
                    ? R.createElement(q, s()({}, n, { spritePosition: c.sprite_position }))
                    : R.createElement(ve, s()({}, n, { activeSkinTone: t }))
                  : R.createElement(q, s()({}, n, { spritePosition: r.sprite_position }))
              },
            },
          ]),
          n
        )
      })(R.PureComponent)
      function ge(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var _e = R.forwardRef(function (e, t) {
          var n = R.useState(!0),
            r = V()(n, 2),
            o = r[0],
            i = r[1],
            a = R.useRef({
              containerRef: null,
              intersectionObserver:
                window.IntersectionObserver &&
                new window.IntersectionObserver(function (e, t) {
                  var n = a.current.intersectionObserver
                  e.some(function (e) {
                    return e.isIntersecting
                  }) &&
                    n &&
                    (n.disconnect(), i(!1))
                }),
            })
          R.useLayoutEffect(
            function () {
              o && e.isActiveCategory && i(!1)
            },
            [o, e.isActiveCategory],
          ),
            R.useEffect(
              function () {
                var e = a.current,
                  t = e.containerRef,
                  n = e.intersectionObserver
                t && n && n.observe(t)
              },
              [a.current.containerRef, a.current.intersectionObserver],
            )
          var c = R.useMemo(
            function () {
              return function (e) {
                var n = ee.a.findDOMNode(e)
                n instanceof HTMLElement ? (a.current.containerRef = n) : (a.current.containerRef = null),
                  'function' == typeof t && t(e)
              }
            },
            [t],
          )
          return o
            ? R.createElement(we, s()({ ref: c }, e, { withPlaceholder: !0 }))
            : R.createElement(we, s()({}, e, { ref: t }))
        }),
        we = (function (e) {
          m()(n, e)
          var t = ge(n)
          function n(e) {
            var r
            return (
              l()(this, n),
              (r = t.call(this, e)),
              S()(p()(r), '_top', 0),
              S()(p()(r), '_bottom', 0),
              S()(p()(r), '_renderEmptyState', function () {
                var e = W.f.notFoundHeader,
                  t = W.f.notFoundMessage
                return R.createElement(X.a, { header: e, message: t })
              }),
              S()(p()(r), 'updatePosition', function () {
                var e = ee.a.findDOMNode(r._containerRef.current),
                  t = e && e.parentNode
                if (e && e instanceof window.HTMLElement && t && t instanceof window.HTMLElement) {
                  var n = e.getBoundingClientRect(),
                    o = n.height,
                    i = n.top,
                    a = t.getBoundingClientRect().top
                  ;(r._top = i - a + t.scrollTop), (r._bottom = r._top + o)
                }
              }),
              S()(p()(r), 'getTop', function () {
                return r._top
              }),
              S()(p()(r), 'getBottom', function () {
                return r._bottom
              }),
              S()(p()(r), 'updateDisplay', function (e) {
                var t = ee.a.findDOMNode(r._containerRef.current)
                t && t instanceof window.HTMLElement && t.style && (t.style.display = e ? 'flex' : 'none')
              }),
              (r._containerRef = R.createRef()),
              r
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.updatePosition()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.emojiIDs !== this.props.emojiIDs && this.updatePosition()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.emojiIDs,
                    n = e.headerButton,
                    r = e.name,
                    o = e.onStickyHeaderRef,
                    i = e.withEmptyState,
                    a = t.length > 0 || i
                  return R.createElement(
                    P.a,
                    { key: r, ref: this._containerRef },
                    R.createElement(
                      P.a,
                      {
                        accessibilityLabel: r,
                        accessibilityRole: 'group',
                        key: r,
                        ref: this._containerRef,
                        style: a ? ke.shown : ke.hidden,
                      },
                      R.createElement(
                        P.a,
                        { ref: o, style: ke.headerContainer },
                        R.createElement(
                          oe,
                          { style: ke.headerSection, withTopBorder: !0 },
                          R.createElement(z.b, { size: 'headline2', style: ke.header, weight: 'bold' }, r),
                          n,
                        ),
                      ),
                      i ? this._renderEmptyState() : R.createElement(oe, null, this._renderEmojis()),
                    ),
                  )
                },
              },
              {
                key: '_renderEmojis',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.emojiIDs,
                    r = t.rowSize,
                    o = Math.ceil(n.length / r),
                    i = Object(Q.a)(0, o)
                  return R.createElement(
                    P.a,
                    { style: ke.emojiGroup },
                    i.map(function (t) {
                      var o = n.slice(t * r, (t + 1) * r)
                      return R.createElement(
                        P.a,
                        { key: 'emoji-row-'.concat(t), style: ke.emojiRow },
                        e.props.withPlaceholder
                          ? R.createElement(P.a, { style: [ke.rowItem, ke.spacer] })
                          : e._renderRow(o),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderRow',
                value: function (e) {
                  var t = this.props,
                    n = t.activeSkinTone,
                    r = t.ariaDescendantId,
                    o = t.data,
                    i = t.focusedEmojiId,
                    a = t.onEmojiFocus,
                    c = t.onEmojiHover,
                    u = t.onFocusedEmojiRef,
                    l = t.onSelect,
                    f = t.rowSize,
                    d = t.spriteUrl
                  return Object(Q.a)(0, f).map(function (t) {
                    var f = e[t]
                    if (!f)
                      return R.createElement(
                        P.a,
                        { key: 'row-spacer-'.concat(t), style: ke.rowItem },
                        R.createElement(P.a, { style: ke.spacer }),
                      )
                    var h = o.emojis[f.toLowerCase()]
                    if (!h) return null
                    var p = !!h.skin_variations,
                      v = o.spriteSheetColumns,
                      m = o.spriteSheetRows,
                      y = {
                        ariaDescendantId: f === i ? r : void 0,
                        emoji: h,
                        onFocus: a,
                        onHover: c,
                        onSelect: l,
                        spriteUrl: d,
                        spriteSheetRows: m,
                        spriteSheetColumns: v,
                      }
                    return R.createElement(
                      P.a,
                      { key: h.unified, ref: f === i ? u : void 0, style: ke.rowItem },
                      p ? R.createElement(ye, s()({}, y, { activeSkinTone: n })) : R.createElement(q, y),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(R.PureComponent)
      S()(we, 'defaultProps', { headerButton: null, rowSize: W.b, withEmptyState: !1 })
      var ke = E.a.create(function (e) {
          return {
            emojiGroup: { flexDirection: 'column', flexWrap: 'wrap' },
            emojiRow: { flexDirection: 'row', justifyContent: 'space-between' },
            header: { paddingHorizontal: e.spaces.space4 },
            headerSection: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            headerContainer: { position: 'sticky', top: 0, zIndex: 1 },
            hidden: { display: 'none' },
            shown: { display: 'flex' },
            rowItem: { flex: 1 },
            spacer: { alignSelf: 'center', margin: W.c.EmojiGutter, height: W.c.EmojiHeight, width: W.c.EmojiWidth },
          }
        }),
        Se = n('zrc3'),
        Re = n('Myq3'),
        je = n('EhiH'),
        be = (function () {
          function e(t, n, r) {
            l()(this, e), (this._categories = t), (this._rowSize = r), (this._emojis = n)
          }
          return (
            d()(e, [
              {
                key: 'getInitialFocus',
                value: function () {
                  var e = Object(Se.a)(this._categories, function (e) {
                    return e.emojis.length > 0
                  })
                  return this.formatFocusParams(0, 0, this._categories[e])
                },
              },
              {
                key: 'getCategoryById',
                value: function (e) {
                  var t = Object(Se.a)(this._categories, function (t) {
                    return t.id === e
                  })
                  return this._categories[t]
                },
              },
              {
                key: 'getPreviousCategory',
                value: function (e) {
                  if (e !== W.a.Search) {
                    var t = Object(Se.a)(this._categories, function (t) {
                      return t.id === e
                    })
                    return Object(Re.a)(this._categories.slice(0, t), function (e) {
                      return e.emojis.length > 0
                    })
                  }
                },
              },
              {
                key: 'getNextCategory',
                value: function (e) {
                  if (e !== W.a.Search) {
                    var t =
                      Object(Se.a)(this._categories, function (t) {
                        return t.id === e
                      }) + 1
                    return Object(je.a)(this._categories.slice(t, this._categories.length), function (e) {
                      return e.emojis.length > 0
                    })
                  }
                },
              },
              {
                key: 'getCategoryLastRow',
                value: function (e) {
                  var t = e.emojis.length
                  return t < this._rowSize ? 0 : Math.ceil(t / this._rowSize) - 1
                },
              },
              {
                key: 'getLastRowLength',
                value: function (e) {
                  var t = e.emojis.length
                  return t ? t % this._rowSize || this._rowSize : 0
                },
              },
              {
                key: 'formatFocusParams',
                value: function (e, t, n) {
                  var r = n.emojis[e * this._rowSize + t]
                  return {
                    focusRow: e,
                    focusCol: t,
                    focusCategoryId: n.id,
                    focusItem: r,
                    previewEmoji: this._emojis[r],
                  }
                },
              },
              {
                key: 'focusCategory',
                value: function (e) {
                  return this.formatFocusParams(0, 0, this.getCategoryById(e))
                },
              },
              {
                key: 'focusNextColumn',
                value: function (e) {
                  var t = e.focusCategoryId,
                    n = e.focusCol,
                    r = e.focusRow
                  if (r < 0 || n < 0 || !t) return this.getInitialFocus()
                  var o = r,
                    i = n,
                    a = this.getCategoryById(t)
                  if (o * this._rowSize + i + 1 >= a.emojis.length) {
                    if (!(a = this.getNextCategory(t))) return this.formatFocusParams(r, n, this.getCategoryById(t))
                    ;(o = 0), (i = 0)
                  } else (o += i === this._rowSize - 1 ? 1 : 0), (i = i === this._rowSize - 1 ? 0 : i + 1)
                  return this.formatFocusParams(o, i, a)
                },
              },
              {
                key: 'focusPreviousColumn',
                value: function (e) {
                  var t = e.focusCategoryId,
                    n = e.focusCol,
                    r = e.focusRow
                  if (r < 0 || n < 0 || !t) return this.getInitialFocus()
                  var o = r,
                    i = n,
                    a = this.getCategoryById(t)
                  if (o * this._rowSize + i - 1 < 0) {
                    if (!(a = this.getPreviousCategory(t))) return this.formatFocusParams(r, n, this.getCategoryById(t))
                    ;(o = this.getCategoryLastRow(a)), (i = this.getLastRowLength(a) - 1)
                  } else (o -= 0 === i ? 1 : 0), (i = 0 === i ? this._rowSize - 1 : i - 1)
                  return this.formatFocusParams(o, i, a)
                },
              },
              {
                key: 'focusNextRow',
                value: function (e) {
                  var t = e.focusCategoryId,
                    n = e.focusCol,
                    r = e.focusRow
                  if (r < 0 || n < 0 || !t) return this.getInitialFocus()
                  var o = r,
                    i = n,
                    a = this.getCategoryById(t)
                  if (o * this._rowSize + i + this._rowSize >= a.emojis.length)
                    if (o < this.getCategoryLastRow(a)) (o += 1), (i = this.getLastRowLength(a) - 1)
                    else {
                      if (!(a = this.getNextCategory(t))) return this.formatFocusParams(r, n, this.getCategoryById(t))
                      ;(o = 0), (i = Math.min(i, a.emojis.length - 1))
                    }
                  else o += 1
                  return this.formatFocusParams(o, i, a)
                },
              },
              {
                key: 'focusPreviousRow',
                value: function (e) {
                  var t = e.focusCategoryId,
                    n = e.focusCol,
                    r = e.focusRow
                  if (r < 0 || n < 0 || !t) return this.getInitialFocus()
                  var o = r,
                    i = n,
                    a = this.getCategoryById(t)
                  if (o * this._rowSize + i - this._rowSize < 0) {
                    if (!(a = this.getPreviousCategory(t))) return this.formatFocusParams(r, n, this.getCategoryById(t))
                    ;(o = this.getCategoryLastRow(a)), (i = Math.min(i, this.getLastRowLength(a) - 1))
                  } else o -= 1
                  return this.formatFocusParams(o, i, a)
                },
              },
            ]),
            e
          )
        })(),
        Ce = n('xoZN'),
        Ee = (n('LJOr'), n('KqXw'), n('Ysgh'), n('tQbP'), n('s1N3')),
        Pe = n('tn7R')
      function Oe(e, t) {
        for (var n = a()(t), r = 0, o = e; r < n.length; ) {
          var i = o.children[n[r]]
          if (!i) break
          ;(r += 1), (o = i)
        }
        return { node: o, tail: n.slice(r) }
      }
      function Ie(e, t, n) {
        var r = Oe(e, t),
          o = r.node,
          i = r.tail,
          a = o
        i.forEach(function (e, t) {
          var n = { results: [], children: {} }
          ;(a.children[e] = n), (a = n)
        }),
          a.results ? a.results.push(n) : (a.results = [n])
      }
      function De(e, t) {
        var n = Oe(e, t),
          r = n.node,
          o = n.tail
        if (!r || o.length > 0) return []
        var i = []
        return (
          (function e(t) {
            t.results.length && i.push.apply(i, a()(t.results)),
              Object(Pe.a)(t.children).forEach(function (t) {
                return e(t)
              })
          })(r),
          Object(Ee.a)(i)
        )
      }
      var Te = (function () {
          function e(t) {
            l()(this, e),
              S()(this, '_getScoreAndInsertResults', function (e, t, n) {
                var r = {}
                for (var o in e) {
                  var i = e[o],
                    a = i.search.indexOf(t)
                  if (-1 !== a) {
                    var c = a + 1
                    t === o && (c = 0), Ie(n, t, i), (r[o] = c)
                  }
                }
                return r
              }),
              (this._data = t),
              (this._index = { results: [], children: {} }),
              (this._originalEmojis = this._data.emojis)
          }
          return (
            d()(e, [
              {
                key: 'search',
                value: function (e, t) {
                  var n = this,
                    r = t && t.maxResults ? t.maxResults : 75,
                    o = [],
                    i = this._originalEmojis,
                    c = this._index
                  if (e.length) {
                    var s = e.toLowerCase().split(/[\s|,|\-|_]+/),
                      u = (s = s.slice(0, 2))
                        .map(function (e) {
                          var t = [],
                            r = De(c, e)
                          if (0 === r.length) {
                            var o = n._getScoreAndInsertResults(i, e, c)
                            ;(t = De(c, e)).sort(function (e, t) {
                              return o[e.id] - o[t.id]
                            })
                          } else t = r
                          return t
                        })
                        .filter(function (e) {
                          return !!e
                        })
                    o = u.length > 1 ? xe.apply(void 0, a()(u)) : u.length ? u[0] : []
                  }
                  return o.length > r && (o = o.slice(0, r)), o
                },
              },
            ]),
            e
          )
        })(),
        xe = function (e, t) {
          var n = Object(Ee.a)(e),
            r = Object(Ee.a)(t)
          return n.filter(function (e) {
            return r.indexOf(e) >= 0
          })
        },
        Fe = Te,
        Le = n('6OUF'),
        He = n('VwDm'),
        Be = n('fs1G'),
        Me = n('VY6S'),
        Ae = R.forwardRef(function (e, t) {
          var n = e.autoFocus,
            r = void 0 !== n && n,
            o = e.maxResults,
            i = void 0 === o ? 75 : o,
            a = e.onSearch,
            c = void 0 === a ? Be.a : a,
            s = e.data,
            u = e.ariaActiveDescendant,
            l = e.categoriesDomId,
            f = R.useState('')[1],
            d = R.useMemo(
              function () {
                return new Fe(s)
              },
              [s],
            ),
            h = R.useMemo(
              function () {
                return Object(Me.a)(function (e) {
                  var t = d.search(e, { maxResults: i })
                  c(e, t)
                }, 100)
              },
              [d, i, c],
            ),
            p = R.useCallback(
              function (e) {
                var t = (e.target && e.target.value) || ''
                f(t), h(t)
              },
              [f, h],
            ),
            v = R.useCallback(
              function () {
                f(''), h('')
              },
              [f, h],
            )
          return R.createElement(
            P.a,
            { accessibilityRole: 'combobox' },
            R.createElement(Le.a, {
              Icon: He.a,
              ariaActiveDescendant: u,
              ariaControls: l,
              ariaExpanded: !0,
              ariaLabel: W.f.search,
              autoFocus: r,
              leftAligned: !0,
              onChange: p,
              onClear: v,
              placeholder: W.f.search,
              ref: t,
              style: ze.fieldTextInput,
              styleType: 'pill',
              withClearButton: !0,
            }),
          )
        }),
        ze = E.a.create(function (e) {
          return { fieldTextInput: { margin: e.spaces.space4 } }
        }),
        Ue = R.memo(Ae),
        Ne = n('IMYl')
      function Ke(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Ve = (function (e) {
          m()(n, e)
          var t = Ke(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              S()(p()(e), '_handleFocus', function () {
                var t = e.props,
                  n = t.onFocus,
                  r = t.skinTone
                n && n(r)
              }),
              S()(p()(e), '_handleFocusLost', function () {
                var t = e.props,
                  n = t.onFocusLost,
                  r = t.skinTone
                n && n(r)
              }),
              S()(p()(e), '_handleHover', function () {
                var t = e.props,
                  n = t.onHover,
                  r = t.skinTone
                n && n(r)
              }),
              S()(p()(e), '_handleHoverLeave', function () {
                var t = e.props,
                  n = t.onHoverLeave,
                  r = t.skinTone
                n && n(r)
              }),
              S()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.onSelect,
                  r = t.skinTone
                n && n(r)
              }),
              S()(p()(e), '_handleKeyDown', function (t) {
                var n = t.key,
                  r = t.altKey,
                  o = t.ctrlKey,
                  i = t.metaKey
                r || o || i || (n === C.a.Enter && (e._handleClick(), t.preventDefault(), t.stopPropagation()))
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    r = t.accessibilityRole,
                    o = t.isSelected,
                    i = t.skinTone,
                    a = t.style,
                    c = b.a.generate({ backgroundColor: i.color, color: E.a.theme.colors.white })
                  return R.createElement(
                    j.a,
                    {
                      onFocusRingGained: this._handleFocus,
                      onFocusRingLost: this._handleFocusLost,
                      onHoverIn: this._handleHover,
                      onHoverOut: this._handleHoverLeave,
                    },
                    function (t) {
                      var s = t.isFocused,
                        u = t.isHovered,
                        l = t.isPressed
                      return R.createElement(
                        P.a,
                        {
                          accessibilityLabel: n,
                          accessibilityRole: r || 'button',
                          accessibilityState: { checked: !!o },
                          focusable: !0,
                          onClick: e._handleClick,
                          onKeyDown: s ? e._handleKeyDown : void 0,
                          style: a,
                        },
                        R.createElement(
                          P.a,
                          {
                            style: [
                              We.root,
                              { backgroundColor: i.color },
                              c.transitionStyle,
                              (u || s) && c.focusedStyle,
                              (l || o) && We.selected,
                            ],
                          },
                          o ? R.createElement(Ne.a, { style: We.checkmarkIcon }) : null,
                        ),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(R.Component),
        We = E.a.create(function (e) {
          return {
            outer: { paddingLeft: e.spaces.space4 },
            root: {
              alignItems: 'center',
              justifyContent: 'center',
              height: '1.25em',
              width: '1.25em',
              borderRadius: e.borderRadii.infinite,
            },
            selected: { boxShadow: '0 0 0 '.concat(e.borderWidths.medium, ' ').concat(e.colors.primary) },
            checkmarkIcon: { height: '1em', width: '1em', color: e.colors.cellBackground },
          }
        }),
        Ge = Ve
      function Je(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Ye = (function (e) {
          m()(n, e)
          var t = Je(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              S()(p()(e), 'state', { showPalette: !1, focusedOption: void 0, hoveredOption: void 0 }),
              S()(p()(e), '_renderPalette', function () {
                var t = e.props.activeSkinTone
                return R.createElement(
                  P.a,
                  { accessibilityRole: 'radiogroup', style: Ze.palette },
                  Object(Pe.a)(W.e).map(function (n) {
                    var r = n === t
                    return R.createElement(Ge, {
                      accessibilityLabel: n.name,
                      accessibilityRole: 'radio',
                      isSelected: r,
                      key: n.id,
                      onFocus: e._handleSkinToneFocus,
                      onFocusLost: e._handleSkinToneFocusLost,
                      onHover: e._handleSkinToneHover,
                      onHoverLeave: e._handleSkinToneHoverLeave,
                      onSelect: e._handleSkinToneSelectionClick,
                      skinTone: n,
                      style: Ze.skinToneOption,
                    })
                  }),
                )
              }),
              S()(p()(e), '_renderCurrentSkinTone', function () {
                var t = e.props.activeSkinTone
                return R.createElement(Ge, {
                  accessibilityLabel: W.f.skintext,
                  isSelected: !0,
                  onSelect: e._handleShowPaletteClick,
                  skinTone: t,
                })
              }),
              S()(p()(e), '_handleShowPaletteClick', function () {
                e.setState({ showPalette: !0 })
              }),
              S()(p()(e), '_handleSkinToneSelectionClick', function (t) {
                e.setState({ showPalette: !1 }), e.props.onSelect(t)
              }),
              S()(p()(e), '_handleSkinToneHover', function (t) {
                e.setState({ hoveredOption: t }, e._handlePreview)
              }),
              S()(p()(e), '_handleSkinToneHoverLeave', function (t) {
                e.setState({ hoveredOption: void 0 }, e._handlePreview)
              }),
              S()(p()(e), '_handleSkinToneFocus', function (t) {
                e.setState({ focusedOption: t }, e._handlePreview)
              }),
              S()(p()(e), '_handleSkinToneFocusLost', function (t) {
                e.setState({ focusedOption: void 0 }, e._handlePreview)
              }),
              S()(p()(e), '_handlePreview', function () {
                var t = e.props.onPreview
                t && t(e.state.hoveredOption || e.state.focusedOption)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showPalette,
                    t = this.props.style
                  return R.createElement(P.a, { style: t }, e ? this._renderPalette() : this._renderCurrentSkinTone())
                },
              },
            ]),
            n
          )
        })(R.Component),
        Ze = E.a.create(function (e) {
          return { palette: { flexDirection: 'row' }, skinToneOption: { paddingHorizontal: e.spaces.space2 } }
        }),
        qe = Ye,
        Xe = n('r728'),
        Qe = n('Qyxo'),
        $e = n('Iok7')
      function et(e, t) {
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
      function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? et(Object(n), !0).forEach(function (t) {
                S()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : et(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function nt(e) {
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var rt = 'emojiPicker2',
        ot = [W.a.Search, W.a.Recent],
        it = 'emoji_picker_categories_dom_id',
        at = (function (e) {
          m()(n, e)
          var t = nt(n)
          function n(e) {
            var r
            l()(this, n),
              (r = t.call(this, e)),
              S()(p()(r), '_categoryRefs', {}),
              S()(p()(r), '_scrollRef', R.createRef()),
              S()(p()(r), '_searchRef', R.createRef()),
              S()(p()(r), '_selectedEmojis', []),
              S()(p()(r), '_shouldScrollToFocusedItem', !0),
              S()(p()(r), '_shouldUpdateScrollPosition', !1),
              S()(p()(r), '_renderAnchors', function (e) {
                var t = r.state,
                  n = t.activeCategory,
                  o = t.query
                return R.createElement(A, {
                  activeCategory: o ? void 0 : n,
                  categories: e,
                  disableAll: !!o,
                  emojiData: r._uncompressedData.emojis,
                  onAnchorClick: r._handleAnchorClick,
                })
              }),
              S()(p()(r), '_renderSearch', function () {
                return R.createElement(Ue, {
                  ariaActiveDescendant: r.state.ariaDescendantId,
                  autoFocus: !0,
                  categoriesDomId: it,
                  data: r._uncompressedData,
                  onSearch: r._handleSearch,
                  ref: r._searchRef,
                })
              }),
              S()(p()(r), '_renderCategories', function (e) {
                var t = r.props,
                  n = t.rowSize,
                  o = t.spriteUrl,
                  i = r.state,
                  a = i.activeCategory,
                  c = i.activeSkinTone,
                  u = i.ariaDescendantId,
                  l = i.focusCategoryId,
                  f = i.focusItem,
                  d = i.query
                return R.createElement(
                  $e.a,
                  {
                    accessibilityRole: 'listbox',
                    nativeID: it,
                    onMouseLeave: r._handleClearPreview,
                    onScroll: r._handleScroll,
                    ref: r._scrollRef,
                    scrollEventThrottle: 100,
                    style: ct.categoriesContainer,
                  },
                  e.map(function (e, t) {
                    var i = l === e.id,
                      h = a && a.id === e.id,
                      p = {
                        activeSkinTone: c,
                        ariaDescendantId: i ? u : void 0,
                        data: r._uncompressedData,
                        emojiIDs: e.emojis,
                        focusedEmojiId: i ? f : void 0,
                        id: e.id,
                        isActiveCategory: h,
                        name: e.name,
                        onEmojiFocus: r._handleEmojiPreview,
                        onEmojiHover: r._handleEmojiPreview,
                        onFocusedEmojiRef: i ? r._handleFocusedItemRef : void 0,
                        onSelect: r._handleSelect,
                        onStickyHeaderRef: h ? r._handleStickyHeaderRef : void 0,
                        rowSize: n,
                        spriteUrl: o,
                      }
                    return (
                      e.id === W.a.Recent &&
                        (p.headerButton = R.createElement(
                          U.a,
                          {
                            accessibilityLabel: W.f.clear,
                            onPress: r._handleClearRecent,
                            size: 'xSmall',
                            type: 'brandText',
                          },
                          W.f.clear,
                        )),
                      e.id === W.a.Search && (p.withEmptyState = !e.emojis.length && !!d),
                      R.createElement(_e, s()({}, p, { key: e.name, ref: r._setCategoryRef('category-'.concat(e.id)) }))
                    )
                  }),
                )
              }),
              S()(p()(r), '_scrollEmojiIntoViewIfNeeded', function () {
                r._shouldScrollToFocusedItem &&
                  r._focusedItemRef &&
                  (Object(ce.e)(r._getScrollParent(), r._focusedItemRef, r._getStickyHeaderOffset()),
                  (r._shouldScrollToFocusedItem = !1))
              }),
              S()(p()(r), '_handleStickyHeaderRef', function (e) {
                ;(r._stickyHeaderRef = e), (r._stickyHeaderHeight = void 0), (r._shouldScrollToFocusedItem = !0)
              }),
              S()(p()(r), '_handleFocusedItemRef', function (e) {
                ;(r._focusedItemRef = e), r._scrollEmojiIntoViewIfNeeded()
              }),
              S()(p()(r), '_getStickyHeaderOffset', function () {
                if (void 0 === r._stickyHeaderHeight) {
                  var e = r._stickyHeaderRef
                  if (e) {
                    var t = e.getBoundingClientRect().height
                    r._stickyHeaderHeight = t
                  }
                }
                return r._stickyHeaderHeight || 0
              }),
              S()(p()(r), '_handleSkinToneSelect', function (e) {
                r.setState({ activeSkinTone: e, previewSkinTone: void 0, withDescription: !0 }), r._focusSearch()
              }),
              S()(p()(r), '_handleSkinTonePreview', function (e) {
                r.setState({ previewSkinTone: e, withDescription: !1 })
              }),
              S()(p()(r), '_renderPreview', function () {
                var e = r.state,
                  t = e.activeSkinTone,
                  n = e.previewEmoji,
                  o = e.previewSkinTone,
                  i = n || r._defaultPreviewEmoji,
                  a = o || t
                return R.createElement(U.a, {
                  accessibilityLabel: i.name,
                  icon: R.createElement(F.a, { emoji: i, skinTone: a, style: ct.twemoji }),
                  onClick: r._handlePreviewClick,
                  type: 'brandText',
                })
              }),
              S()(p()(r), '_handlePreviewClick', function () {
                var e = r.state.previewEmoji || r._defaultPreviewEmoji
                r._handleSelect(e)
              }),
              S()(p()(r), '_renderEmojiDescription', function () {
                var e = r.state.previewEmoji
                return e
                  ? R.createElement(
                      z.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        numberOfLines: 1,
                        size: 'subtext2',
                        style: ct.emojiDescription,
                      },
                      e.name,
                    )
                  : null
              }),
              S()(p()(r), '_renderFooter', function () {
                var e = r.state.withDescription
                return R.createElement(
                  P.a,
                  { style: ct.footer },
                  r._renderPreview(),
                  e ? r._renderEmojiDescription() : null,
                  R.createElement(qe, {
                    activeSkinTone: r.state.activeSkinTone,
                    onPreview: r._handleSkinTonePreview,
                    onSelect: r._handleSkinToneSelect,
                    style: ct.skinTonePicker,
                  }),
                )
              }),
              S()(p()(r), '_setCategoryRef', function (e) {
                return function (t) {
                  t && (r._categoryRefs[e] = t)
                }
              }),
              S()(p()(r), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = e.altKey,
                  o = e.ctrlKey,
                  i = e.metaKey,
                  a = r.state,
                  c = a.focusCategoryId,
                  s = a.focusCol,
                  u = a.focusItem,
                  l = { focusRow: a.focusRow, focusCol: s, focusCategoryId: c }
                if (!(n || o || i))
                  return t === C.a.ArrowDown
                    ? (r._updateFocus(r._focusHelper.focusNextRow(l)), void e.preventDefault())
                    : t === C.a.ArrowUp
                    ? (r._updateFocus(r._focusHelper.focusPreviousRow(l)), void e.preventDefault())
                    : t === C.a.ArrowRight
                    ? (r._updateFocus(r._focusHelper.focusNextColumn(l)), void e.preventDefault())
                    : t === C.a.ArrowLeft
                    ? (r._updateFocus(r._focusHelper.focusPreviousColumn(l)), void e.preventDefault())
                    : t === C.a.Enter && u
                    ? (r._handleSelect(r._uncompressedData.emojis[u]), void e.preventDefault())
                    : void 0
              }),
              S()(p()(r), '_updateFocus', function (e) {
                var t = r.state,
                  n = t.ariaDescendantId,
                  o = t.focusItem !== e.focusItem
                ;(r._shouldScrollToFocusedItem = o),
                  r.setState(tt(tt({}, e), {}, { ariaDescendantId: o ? Object(ce.a)() : n }))
              }),
              S()(p()(r), '_handleScroll', function () {
                r._updateActiveCategory()
              }),
              S()(p()(r), '_handleSearch', function (e, t) {
                var n = t
                  ? t.map(function (e) {
                      return e.unified
                    })
                  : []
                Object(Pe.a)(r._categoryRefs).forEach(function (t) {
                  t && 'search' !== t.props.id && t.updateDisplay(!e)
                }),
                  r.setState({ searchResults: n, query: e }),
                  r._scrollTo(0)
              }),
              S()(p()(r), '_handleSelect', function (e) {
                var t = r.props.onSelect,
                  n = r.state.activeSkinTone,
                  o = Object(ce.d)(e, n)
                t && t(o)
                for (var i = [], a = r._selectedEmojis.length; a >= 0; a--) {
                  var c = a === r._selectedEmojis.length ? e.unified : r._selectedEmojis[a]
                  i.indexOf(c) < 0 && i.push(c)
                }
                r._selectedEmojis = i.reverse()
              }),
              S()(p()(r), '_handleClearRecent', function (e) {
                ;(r._selectedEmojis = []),
                  r.setState({ recentlyUsed: [], activeCategory: r._staticCategories()[0] }, function () {
                    r._shouldUpdateScrollPosition = !0
                  })
              }),
              S()(p()(r), '_getActiveCategory', function () {
                var e = r._scrollRef.current && ee.a.findDOMNode(r._scrollRef.current),
                  t = r.state.activeCategory
                if (e && e instanceof window.HTMLElement)
                  for (var n = e.scrollTop, o = 0; o < r._categories.length; o++) {
                    var i = r._categories[o],
                      a = r._categoryRefs['category-'.concat(i.id)]
                    if (a && n >= a.getTop() && n < a.getBottom()) {
                      t = i
                      break
                    }
                  }
                return t
              }),
              S()(p()(r), '_updateActiveCategory', function () {
                var e = r._getActiveCategory()
                e !== r.state.activeCategory && r.setState({ activeCategory: e })
              }),
              S()(p()(r), '_getUpdatedRecentlyUsedEmojiList', function () {
                var e = r.state.recentlyUsed,
                  t = r.props.rowSize
                if (0 === r._selectedEmojis.length) return e
                var n = -2 * t
                return []
                  .concat(
                    a()(
                      e.filter(function (e) {
                        return r._selectedEmojis.indexOf(e) < 0
                      }),
                    ),
                    a()(r._selectedEmojis),
                  )
                  .slice(n)
              }),
              S()(p()(r), '_handleClearPreview', function () {
                r.state.previewEmoji && r.setState({ previewEmoji: void 0 })
              }),
              S()(p()(r), '_handleEmojiPreview', function (e) {
                e !== r.state.previewEmoji && r.setState({ previewEmoji: e })
              }),
              S()(p()(r), '_handleAnchorClick', function (e) {
                r._shouldUpdateScrollPosition &&
                  ((r._shouldUpdateScrollPosition = !1),
                  Object(Pe.a)(r._categoryRefs).forEach(function (e) {
                    return e.updatePosition()
                  }))
                var t = r._categoryRefs['category-'.concat(e.id)]
                0 !== e.emojis.length &&
                  (r.setState({ activeCategory: e }),
                  t && r._scrollTo(t.getTop() + 1),
                  r.state.focusItem && r._updateFocus(r._focusHelper.focusCategory(e.id))),
                  r._focusSearch()
              }),
              S()(p()(r), '_focusSearch', function () {
                r._searchRef.current && r._searchRef.current.focus()
              }),
              S()(p()(r), '_scrollTo', function (e) {
                r._scrollRef.current && r._scrollRef.current.scrollTo({ y: e, animated: !1 })
              }),
              S()(p()(r), '_staticCategories', function () {
                return r._categories.filter(function (e) {
                  return -1 === ot.indexOf(e.id)
                })
              })
            var o = r.props.emojiInfo
            return (
              (r._uncompressedData = Object(Xe.a)(o || {})),
              (r._categories = r._uncompressedData.categories),
              (r._searchCategoryInitialValue = {
                anchorless: !0,
                id: W.a.Search,
                name: W.f.searchCategoryName,
                emojis: [],
              }),
              (r._recentlyUsedCategoryInitialValue = { id: W.a.Recent, name: W.f.recentCategoryName, emojis: [] }),
              (r._defaultPreviewEmoji = r._uncompressedData.emojis[r.props.previewEmojiCodepoint]),
              r._categories.unshift(r._recentlyUsedCategoryInitialValue),
              (r._focusHelper = new be(r._categories, r._uncompressedData.emojis, e.rowSize)),
              (r.state = {
                activeCategory: r._categories[1],
                activeSkinTone: W.e[e.defaultSkinTone],
                ariaDescendantId: Object(ce.a)(),
                categories: [r._searchCategoryInitialValue].concat(a()(r._categories)),
                focusRow: -1,
                focusCol: -1,
                recentlyUsed: [],
                previewSkinTone: void 0,
                query: '',
                searchResults: [],
                withDescription: !0,
              }),
              r
            )
          }
          return (
            d()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  N.a.set(rt, {
                    recentlyUsed: this._getUpdatedRecentlyUsedEmojiList(),
                    activeSkinToneId: this.state.activeSkinTone.id,
                  })
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  N.a.get(rt).then(function (t) {
                    if (t && 'object' === o()(t)) {
                      var n = t.recentlyUsed,
                        r = void 0 === n ? [] : n,
                        i = t.activeSkinToneId,
                        a = 'string' == typeof i && W.e[i],
                        c = Object.assign(
                          {},
                          {
                            recentlyUsed: Array.isArray(r)
                              ? Object(Qe.a)(r, function (e) {
                                  return 'string' == typeof e ? e : void 0
                                })
                              : [],
                            activeCategory: e._categories[1],
                          },
                          a ? { activeSkinTone: a } : {},
                        )
                      e.setState(c), (e._shouldUpdateScrollPosition = !0)
                    }
                  })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.state,
                    r = n.categories,
                    o = n.recentlyUsed,
                    i = n.searchResults,
                    c = this.props.rowSize
                  if (t.searchResults !== i || t.recentlyUsed !== o) {
                    var s = tt(tt({}, this._searchCategoryInitialValue), {}, { emojis: i }),
                      u = tt(
                        tt({}, this._recentlyUsedCategoryInitialValue),
                        {},
                        { emojis: o.length ? a()(o).reverse() : [] },
                      )
                    this.setState({
                      activeCategory: this._getActiveCategory(),
                      categories: [s, u].concat(this._staticCategories()),
                      focusCategoryId: void 0,
                      focusCol: -1,
                      focusRow: -1,
                      focusItem: void 0,
                    })
                  }
                  ;(t.categories === r && e.rowSize === c) ||
                    (this._focusHelper = new be(r, this._uncompressedData.emojis, c))
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = ee.a.findDOMNode(this._scrollRef.current)
                    this._scrollParent = e instanceof window.Element ? e : void 0
                  }
                  return this._scrollParent
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.partialRender,
                    t = this.state,
                    n = t.recentlyUsed,
                    r = t.searchResults,
                    o = tt(tt({}, this._searchCategoryInitialValue), {}, { emojis: r }),
                    i = tt(
                      tt({}, this._recentlyUsedCategoryInitialValue),
                      {},
                      { emojis: n.length ? a()(n).reverse() : [] },
                    ),
                    c = this._staticCategories(),
                    s = [o, i].concat(c),
                    u = [o, i, c[0]]
                  return R.createElement(
                    Ce.a,
                    { onKeyDown: this._handleKeyDown, style: ct.root },
                    R.createElement(oe, { style: ct.searchSection }, this._renderSearch()),
                    R.createElement(oe, { style: ct.anchorsSection }, this._renderAnchors(s)),
                    this._renderCategories(e ? u : s),
                    R.createElement(oe, { style: ct.footerContainer, withTopBorder: !0 }, this._renderFooter()),
                  )
                },
              },
            ]),
            n
          )
        })(R.PureComponent)
      S()(at, 'defaultProps', {
        defaultSkinTone: W.d.None,
        partialRender: !1,
        previewEmojiCodepoint: '👋',
        rowSize: W.b,
      })
      var ct = E.a.create(function (e) {
        return {
          root: { flexShrink: 1, flexGrow: 1 },
          categoriesContainer: { flexShrink: 1, overflowY: 'auto' },
          searchSection: {
            borderTopLeftRadius: e.borderRadii.xLarge,
            borderTopRightRadius: e.borderRadii.xLarge,
            padding: 0,
          },
          anchorsSection: { padding: 0, marginTop: e.spaces.space4 },
          footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden' },
          footerContainer: {
            borderBottomLeftRadius: e.borderRadii.xLarge,
            borderBottomRightRadius: e.borderRadii.xLarge,
          },
          emojiDescription: { paddingHorizontal: e.spaces.space12, maxWidth: '180px', flex: 1 },
          twemoji: { height: '2em', width: '2em' },
          skinTonePicker: { marginHorizontal: e.spaces.space12 },
        }
      })
      t.a = at
    },
    r728: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('jwue'), n('+oxZ'), n('Ysgh'), n('KqXw'), n('vrRf'), n('ho0z'), n('7xRU'), n('LJOr')
      var r = n('iChn'),
        o = { name: 'a', keywords: 'j', sprite_position: 'k', skin_variations: 'l' },
        i = { unified: 'key', skin_tone: 'd', sprite_position: 'k' },
        a = function (e) {
          var t = [],
            n = function (e, n) {
              e &&
                (Array.isArray(e) ? e : [e]).forEach(function (e) {
                  ;(n ? e.split(/[-|_|\s]+/) : [e]).forEach(function (e) {
                    var n = e.toLowerCase()
                    ;-1 === t.indexOf(n) && t.push(n)
                  })
                })
            }
          return n(e.short_names, !0), n(e.name, !0), n(e.keywords, !1), t.join(',')
        },
        c = function (e, t) {
          for (var n in t) (e[n] = e[t[n]]), delete e[t[n]]
        },
        s = function (e) {
          var t = JSON.parse(JSON.stringify(e))
          for (var n in ((t.compressed = !1), t.emojis)) {
            var s = t.emojis[n]
            c(s, o),
              (s.id = n),
              (s.unified = n),
              (s.short_names = [n]),
              s.text || (s.text = ''),
              (s.search = a(s)),
              s.skin_variations &&
                (s.skin_variations.forEach(function (e) {
                  c(e, i)
                }),
                (s.skin_variations = Object(r.a)(s.skin_variations, function (e) {
                  for (var t = e.skin_tone, n = t[0], r = 1; r < t.length; r++) n += '+'.concat(t[r])
                  return n
                })))
          }
          return t
        }
    },
  },
])
//# sourceMappingURL=WIPED
