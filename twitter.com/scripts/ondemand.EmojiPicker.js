;(window.webpackJsonp = window.webpackJsonp || []).push([
  [204],
  {
    '5RdJ': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('97Jx'),
        o = n.n(r),
        i = n('ERkP'),
        a = n.n(i),
        c = n('+cai'),
        s = n('nvLZ')
      t.default = function (e) {
        return a.a.createElement(s.a, o()({}, e, { emojiInfo: c.default }))
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
        p = n.n(h),
        v = n('faxe'),
        m = n('3rX5'),
        y = n('VbCG'),
        g = n('rHpw')
      function _(e) {
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
      var w = (function (e) {
          s()(n, e)
          var t = _(n)
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
                    i = Object(v.b)(n, r)
                  return i
                    ? p.a.createElement(m.a, {
                        accessibilityLabel: t,
                        alt: n.name,
                        draggable: !1,
                        resizeMode: 'stretch',
                        source: i,
                        style: [k.root, o],
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        k = g.a.create(function (e) {
          return { root: { height: y.c.EmojiHeight, width: y.c.EmojiWidth } }
        })
      t.a = w
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
        j = n.n(R),
        b = n('py1r'),
        C = n('I4+6'),
        E = n('oLZl'),
        P = n('rHpw'),
        O = n('MWbm')
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var D = C.a.generate({ backgroundColor: 'transparent', color: P.a.theme.colors.primary }),
        T = (function (e) {
          m()(n, e)
          var t = I(n)
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
                r || o || i || (n === E.a.Enter && (e._handleClick(), t.preventDefault(), t.stopPropagation()))
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
                  return j.a.createElement(b.a, { disabled: o }, function (t) {
                    var i = t.isFocused,
                      a = t.isHovered,
                      c = t.isPressed
                    return j.a.createElement(
                      O.a,
                      { style: x.container },
                      j.a.createElement(
                        O.a,
                        {
                          accessibilityDisabled: o,
                          accessibilityRole: 'button',
                          onClick: e._handleClick,
                          onKeyDown: i ? e._handleKeyDown : void 0,
                          style: [
                            x.iconWrapper,
                            a || r ? void 0 : x.faded,
                            D.transitionStyle,
                            a && D.hoverStyle,
                            c && D.pressedStyle,
                            i && D.focusedStyle,
                          ],
                        },
                        n,
                      ),
                      j.a.createElement(O.a, {
                        style: [x.border, r ? { backgroundColor: P.a.theme.colors.primary } : null],
                      }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(j.a.PureComponent),
        x = P.a.create(function (e) {
          return {
            container: { flex: 1 },
            iconWrapper: { width: '100%', alignItems: 'center', paddingVertical: e.spaces.space4 },
            border: { height: e.borderWidths.large, width: '100%', borderRadius: e.borderRadii.infinite },
            faded: { filter: 'grayscale(100%) contrast(80%)', opacity: 0.5 },
          }
        }),
        F = T,
        L = n('a6L8')
      function H(e) {
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
      var B = {
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
        M = (function (e) {
          m()(n, e)
          var t = H(n)
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
                  return j.a.createElement(
                    O.a,
                    { style: A.root },
                    r.map(function (t) {
                      var r = t.anchorless,
                        a = t.emojis,
                        c = t.id,
                        s = t.name,
                        u = (a && 0 === a.length) || o,
                        l = !!n && t.id === n.id
                      return r
                        ? null
                        : j.a.createElement(F, {
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
                  var n = this.props.emojiData[B[e]]
                  return j.a.createElement(L.a, { accessibilityLabel: t, emoji: n })
                },
              },
            ]),
            n
          )
        })(j.a.PureComponent),
        A = P.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        z = M,
        U = n('t62R'),
        N = n('/yvb'),
        K = n('2ZFc'),
        V = n('ddV6'),
        W = n.n(V),
        G = (n('5BYb'), n('uFXj'), n('VbCG'))
      function J(e) {
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
      var Y = (function (e) {
          m()(n, e)
          var t = J(n)
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
                  return j.a.createElement(
                    b.a,
                    { onFocusRingGained: this._handleFocus, onHoverIn: this._handleHover },
                    function (t) {
                      var i = t.isFocused,
                        c = t.isHovered,
                        s = t.isPressed
                      return j.a.createElement(
                        O.a,
                        {
                          accessibilityLabel: o || r.name,
                          accessibilityRole: 'option',
                          accessibilityState: { selected: !!n },
                          nativeID: n,
                          onClick: e._handleClick,
                          style: [
                            q.container,
                            Z.transitionStyle,
                            c && Z.hoverStyle,
                            s && Z.pressedStyle,
                            (i || n) && Z.focusedStyle,
                          ],
                        },
                        j.a.createElement(O.a, { style: [a, q.emoji] }),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(j.a.PureComponent),
        Z = C.a.generate({ backgroundColor: P.a.theme.colors.transparent, color: P.a.theme.colors.gray700 }),
        q = P.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
              boxSizing: 'border-box',
              padding: G.c.EmojiGutter,
            },
            emoji: { display: 'inline-block', outlineStyle: 'none', height: G.c.EmojiHeight, width: G.c.EmojiWidth },
          }
        }),
        X = Y,
        Q = n('FIs5'),
        $ = n('mtvn'),
        ee = n('7nmT'),
        te = n.n(ee)
      function ne(e) {
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
      var re = (function (e) {
        m()(n, e)
        var t = ne(n)
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
                return j.a.createElement(O.a, { style: [oe.root, r && oe.topBorder, n] }, t)
              },
            },
          ]),
          n
        )
      })(j.a.PureComponent)
      S()(re, 'defaultProps', { withTopBorder: !1 })
      var oe = P.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.borderColor,
              padding: e.spaces.space12,
            },
            topBorder: { borderTopWidth: e.borderWidths.small },
          }
        }),
        ie = re,
        ae = n('m3Bd'),
        ce = n.n(ae),
        se = n('faxe'),
        ue = function (e, t) {
          var n = null == e ? 0 : e.length
          if (!n || t < 1) return []
          for (var r = 0, o = 0, i = new Array(Math.ceil(n / t)); r < n; ) (i[o] = e.slice(r, (r += t))), (o += 1)
          return i
        },
        le = n('OiMc')
      function fe(e, t) {
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
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                S()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = w()(e)
          if (t) {
            var o = w()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var pe = (function (e) {
          m()(n, e)
          var t = he(n)
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
                  i = ce()(n, ['activeSkinTone', 'emoji']),
                  a = r.codepoint,
                  c = o.skin_variations,
                  u = [
                    j.a.createElement(
                      X,
                      s()({}, i, {
                        emoji: de({}, o),
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
                      j.a.createElement(
                        X,
                        s()({}, i, {
                          emoji: de(de({}, o), {}, { text: h }),
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
                var n = ue(e._getEmojisForActiveSkinTone(t), 10)
                return j.a.createElement(
                  O.a,
                  { style: ve.emojisContainer },
                  n.map(function (e, t) {
                    return j.a.createElement(O.a, { key: t, style: ve.row }, e)
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
                    n = (e.onSelect, ce()(e, ['activeSkinTone', 'emoji', 'onSelect']))
                  return j.a.createElement(
                    le.a,
                    { contentStyle: ve.contentStyle, renderContent: this.renderEmojis, withArrow: !0 },
                    j.a.createElement(X, s()({}, n, { emoji: t, spritePosition: t.sprite_position })),
                  )
                },
              },
            ]),
            n
          )
        })(j.a.PureComponent),
        ve = P.a.create(function (e) {
          return {
            row: { flexDirection: 'row' },
            contentStyle: { minWidth: '100%' },
            emojisContainer: { padding: e.spaces.space12 },
          }
        }),
        me = pe
      function ye(e) {
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
      var ge = (function (e) {
        m()(n, e)
        var t = ye(n)
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
                  n = ce()(e, ['activeSkinTone']),
                  r = this.props.emoji,
                  o = r.skin_variations,
                  i = t.codepoint,
                  a = Object(se.c)(o, i),
                  c = i && o && o[i]
                return 0 !== a || c
                  ? 1 === a && c
                    ? j.a.createElement(X, s()({}, n, { spritePosition: c.sprite_position }))
                    : j.a.createElement(me, s()({}, n, { activeSkinTone: t }))
                  : j.a.createElement(X, s()({}, n, { spritePosition: r.sprite_position }))
              },
            },
          ]),
          n
        )
      })(j.a.PureComponent)
      function _e(e) {
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
      var we = j.a.forwardRef(function (e, t) {
          var n = j.a.useState(!0),
            r = W()(n, 2),
            o = r[0],
            i = r[1],
            a = j.a.useRef({
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
          j.a.useLayoutEffect(
            function () {
              o && e.isActiveCategory && i(!1)
            },
            [o, e.isActiveCategory],
          ),
            j.a.useEffect(
              function () {
                var e = a.current,
                  t = e.containerRef,
                  n = e.intersectionObserver
                t && n && n.observe(t)
              },
              [a.current.containerRef, a.current.intersectionObserver],
            )
          var c = j.a.useMemo(
            function () {
              return function (e) {
                var n = te.a.findDOMNode(e)
                n instanceof HTMLElement ? (a.current.containerRef = n) : (a.current.containerRef = null),
                  'function' == typeof t && t(e)
              }
            },
            [t],
          )
          return o
            ? j.a.createElement(ke, s()({ ref: c }, e, { withPlaceholder: !0 }))
            : j.a.createElement(ke, s()({}, e, { ref: t }))
        }),
        ke = (function (e) {
          m()(n, e)
          var t = _e(n)
          function n(e) {
            var r
            return (
              l()(this, n),
              (r = t.call(this, e)),
              S()(p()(r), '_top', 0),
              S()(p()(r), '_bottom', 0),
              S()(p()(r), '_renderEmptyState', function () {
                var e = G.f.notFoundHeader,
                  t = G.f.notFoundMessage
                return j.a.createElement(Q.a, { header: e, message: t })
              }),
              S()(p()(r), 'updatePosition', function () {
                var e = te.a.findDOMNode(r._containerRef.current),
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
                var t = te.a.findDOMNode(r._containerRef.current)
                t && t instanceof window.HTMLElement && t.style && (t.style.display = e ? 'flex' : 'none')
              }),
              (r._containerRef = j.a.createRef()),
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
                  return j.a.createElement(
                    O.a,
                    { key: r, ref: this._containerRef },
                    j.a.createElement(
                      O.a,
                      {
                        accessibilityLabel: r,
                        accessibilityRole: 'group',
                        key: r,
                        ref: this._containerRef,
                        style: a ? Se.shown : Se.hidden,
                      },
                      j.a.createElement(
                        O.a,
                        { ref: o, style: Se.headerContainer },
                        j.a.createElement(
                          ie,
                          { style: Se.headerSection, withTopBorder: !0 },
                          j.a.createElement(U.b, { size: 'headline2', style: Se.header, weight: 'bold' }, r),
                          n,
                        ),
                      ),
                      i ? this._renderEmptyState() : j.a.createElement(ie, null, this._renderEmojis()),
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
                    i = Object($.a)(0, o)
                  return j.a.createElement(
                    O.a,
                    { style: Se.emojiGroup },
                    i.map(function (t) {
                      var o = n.slice(t * r, (t + 1) * r)
                      return j.a.createElement(
                        O.a,
                        { key: 'emoji-row-'.concat(t), style: Se.emojiRow },
                        e.props.withPlaceholder
                          ? j.a.createElement(O.a, { style: [Se.rowItem, Se.spacer] })
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
                  return Object($.a)(0, f).map(function (t) {
                    var f = e[t]
                    if (!f)
                      return j.a.createElement(
                        O.a,
                        { key: 'row-spacer-'.concat(t), style: Se.rowItem },
                        j.a.createElement(O.a, { style: Se.spacer }),
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
                    return j.a.createElement(
                      O.a,
                      { key: h.unified, ref: f === i ? u : void 0, style: Se.rowItem },
                      p ? j.a.createElement(ge, s()({}, y, { activeSkinTone: n })) : j.a.createElement(X, y),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(j.a.PureComponent)
      S()(ke, 'defaultProps', { headerButton: null, rowSize: G.b, withEmptyState: !1 })
      var Se = P.a.create(function (e) {
          return {
            emojiGroup: { flexDirection: 'column', flexWrap: 'wrap' },
            emojiRow: { flexDirection: 'row', justifyContent: 'space-between' },
            header: { paddingHorizontal: e.spaces.space4 },
            headerSection: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            headerContainer: { position: 'sticky', top: 0, zIndex: 1 },
            hidden: { display: 'none' },
            shown: { display: 'flex' },
            rowItem: { flex: 1 },
            spacer: { alignSelf: 'center', margin: G.c.EmojiGutter, height: G.c.EmojiHeight, width: G.c.EmojiWidth },
          }
        }),
        Re = n('zrc3'),
        je = n('Myq3'),
        be = n('EhiH'),
        Ce = (function () {
          function e(t, n, r) {
            l()(this, e), (this._categories = t), (this._rowSize = r), (this._emojis = n)
          }
          return (
            d()(e, [
              {
                key: 'getInitialFocus',
                value: function () {
                  var e = Object(Re.a)(this._categories, function (e) {
                    return e.emojis.length > 0
                  })
                  return this.formatFocusParams(0, 0, this._categories[e])
                },
              },
              {
                key: 'getCategoryById',
                value: function (e) {
                  var t = Object(Re.a)(this._categories, function (t) {
                    return t.id === e
                  })
                  return this._categories[t]
                },
              },
              {
                key: 'getPreviousCategory',
                value: function (e) {
                  if (e !== G.a.Search) {
                    var t = Object(Re.a)(this._categories, function (t) {
                      return t.id === e
                    })
                    return Object(je.a)(this._categories.slice(0, t), function (e) {
                      return e.emojis.length > 0
                    })
                  }
                },
              },
              {
                key: 'getNextCategory',
                value: function (e) {
                  if (e !== G.a.Search) {
                    var t =
                      Object(Re.a)(this._categories, function (t) {
                        return t.id === e
                      }) + 1
                    return Object(be.a)(this._categories.slice(t, this._categories.length), function (e) {
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
        Ee = n('xoZN'),
        Pe = (n('LJOr'), n('KqXw'), n('Ysgh'), n('tQbP'), n('s1N3')),
        Oe = n('tn7R')
      function Ie(e, t) {
        for (var n = a()(t), r = 0, o = e; r < n.length; ) {
          var i = o.children[n[r]]
          if (!i) break
          ;(r += 1), (o = i)
        }
        return { node: o, tail: n.slice(r) }
      }
      function De(e, t, n) {
        var r = Ie(e, t),
          o = r.node,
          i = r.tail,
          a = o
        i.forEach(function (e, t) {
          var n = { results: [], children: {} }
          ;(a.children[e] = n), (a = n)
        }),
          a.results ? a.results.push(n) : (a.results = [n])
      }
      function Te(e, t) {
        var n = Ie(e, t),
          r = n.node,
          o = n.tail
        if (!r || o.length > 0) return []
        var i = []
        return (
          (function e(t) {
            t.results.length && i.push.apply(i, a()(t.results)),
              Object(Oe.a)(t.children).forEach(function (t) {
                return e(t)
              })
          })(r),
          Object(Pe.a)(i)
        )
      }
      var xe = (function () {
          function e(t) {
            l()(this, e),
              S()(this, '_getScoreAndInsertResults', function (e, t, n) {
                var r = {}
                for (var o in e) {
                  var i = e[o],
                    a = i.search.indexOf(t)
                  if (-1 !== a) {
                    var c = a + 1
                    t === o && (c = 0), De(n, t, i), (r[o] = c)
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
                            r = Te(c, e)
                          if (0 === r.length) {
                            var o = n._getScoreAndInsertResults(i, e, c)
                            ;(t = Te(c, e)).sort(function (e, t) {
                              return o[e.id] - o[t.id]
                            })
                          } else t = r
                          return t
                        })
                        .filter(function (e) {
                          return !!e
                        })
                    o = u.length > 1 ? Fe.apply(void 0, a()(u)) : u.length ? u[0] : []
                  }
                  return o.length > r && (o = o.slice(0, r)), o
                },
              },
            ]),
            e
          )
        })(),
        Fe = function (e, t) {
          var n = Object(Pe.a)(e),
            r = Object(Pe.a)(t)
          return n.filter(function (e) {
            return r.indexOf(e) >= 0
          })
        },
        Le = xe,
        He = n('6OUF'),
        Be = n('VwDm'),
        Me = n('fs1G'),
        Ae = n('VY6S'),
        ze = j.a.forwardRef(function (e, t) {
          var n = e.autoFocus,
            r = void 0 !== n && n,
            o = e.maxResults,
            i = void 0 === o ? 75 : o,
            a = e.onSearch,
            c = void 0 === a ? Me.a : a,
            s = e.data,
            u = e.ariaActiveDescendant,
            l = e.categoriesDomId,
            f = j.a.useState('')[1],
            d = j.a.useMemo(
              function () {
                return new Le(s)
              },
              [s],
            ),
            h = j.a.useMemo(
              function () {
                return Object(Ae.a)(function (e) {
                  var t = d.search(e, { maxResults: i })
                  c(e, t)
                }, 100)
              },
              [d, i, c],
            ),
            p = j.a.useCallback(
              function (e) {
                var t = (e.target && e.target.value) || ''
                f(t), h(t)
              },
              [f, h],
            ),
            v = j.a.useCallback(
              function () {
                f(''), h('')
              },
              [f, h],
            )
          return j.a.createElement(
            O.a,
            { accessibilityRole: 'combobox' },
            j.a.createElement(He.a, {
              Icon: Be.a,
              ariaActiveDescendant: u,
              ariaControls: l,
              ariaExpanded: !0,
              ariaLabel: G.f.search,
              autoFocus: r,
              leftAligned: !0,
              onChange: p,
              onClear: v,
              placeholder: G.f.search,
              ref: t,
              style: Ue.fieldTextInput,
              styleType: 'pill',
              withClearButton: !0,
            }),
          )
        }),
        Ue = P.a.create(function (e) {
          return { fieldTextInput: { margin: e.spaces.space4 } }
        }),
        Ne = j.a.memo(ze),
        Ke = n('IMYl')
      function Ve(e) {
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
      var We = (function (e) {
          m()(n, e)
          var t = Ve(n)
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
                r || o || i || (n === E.a.Enter && (e._handleClick(), t.preventDefault(), t.stopPropagation()))
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
                    c = C.a.generate({ backgroundColor: i.color, color: P.a.theme.colors.white })
                  return j.a.createElement(
                    b.a,
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
                      return j.a.createElement(
                        O.a,
                        {
                          accessibilityLabel: n,
                          accessibilityRole: r || 'button',
                          accessibilityState: { checked: !!o },
                          focusable: !0,
                          onClick: e._handleClick,
                          onKeyDown: s ? e._handleKeyDown : void 0,
                          style: a,
                        },
                        j.a.createElement(
                          O.a,
                          {
                            style: [
                              Ge.root,
                              { backgroundColor: i.color },
                              c.transitionStyle,
                              (u || s) && c.focusedStyle,
                              (l || o) && Ge.selected,
                            ],
                          },
                          o ? j.a.createElement(Ke.a, { style: Ge.checkmarkIcon }) : null,
                        ),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(j.a.Component),
        Ge = P.a.create(function (e) {
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
        Je = We
      function Ye(e) {
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
      var Ze = (function (e) {
          m()(n, e)
          var t = Ye(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              S()(p()(e), 'state', { showPalette: !1, focusedOption: void 0, hoveredOption: void 0 }),
              S()(p()(e), '_renderPalette', function () {
                var t = e.props.activeSkinTone
                return j.a.createElement(
                  O.a,
                  { accessibilityRole: 'radiogroup', style: qe.palette },
                  Object(Oe.a)(G.e).map(function (n) {
                    var r = n === t
                    return j.a.createElement(Je, {
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
                      style: qe.skinToneOption,
                    })
                  }),
                )
              }),
              S()(p()(e), '_renderCurrentSkinTone', function () {
                var t = e.props.activeSkinTone
                return j.a.createElement(Je, {
                  accessibilityLabel: G.f.skintext,
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
                  return j.a.createElement(O.a, { style: t }, e ? this._renderPalette() : this._renderCurrentSkinTone())
                },
              },
            ]),
            n
          )
        })(j.a.Component),
        qe = P.a.create(function (e) {
          return { palette: { flexDirection: 'row' }, skinToneOption: { paddingHorizontal: e.spaces.space2 } }
        }),
        Xe = Ze,
        Qe = n('r728'),
        $e = n('Qyxo'),
        et = n('Iok7')
      function tt(e, t) {
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
      function nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? tt(Object(n), !0).forEach(function (t) {
                S()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : tt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function rt(e) {
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
      var ot = 'emojiPicker2',
        it = [G.a.Search, G.a.Recent],
        at = 'emoji_picker_categories_dom_id',
        ct = (function (e) {
          m()(n, e)
          var t = rt(n)
          function n(e) {
            var r
            l()(this, n),
              (r = t.call(this, e)),
              S()(p()(r), '_categoryRefs', {}),
              S()(p()(r), '_scrollRef', j.a.createRef()),
              S()(p()(r), '_searchRef', j.a.createRef()),
              S()(p()(r), '_selectedEmojis', []),
              S()(p()(r), '_shouldScrollToFocusedItem', !0),
              S()(p()(r), '_shouldUpdateScrollPosition', !1),
              S()(p()(r), '_renderAnchors', function (e) {
                var t = r.state,
                  n = t.activeCategory,
                  o = t.query
                return j.a.createElement(z, {
                  activeCategory: o ? void 0 : n,
                  categories: e,
                  disableAll: !!o,
                  emojiData: r._uncompressedData.emojis,
                  onAnchorClick: r._handleAnchorClick,
                })
              }),
              S()(p()(r), '_renderSearch', function () {
                return j.a.createElement(Ne, {
                  ariaActiveDescendant: r.state.ariaDescendantId,
                  autoFocus: !0,
                  categoriesDomId: at,
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
                return j.a.createElement(
                  et.a,
                  {
                    accessibilityRole: 'listbox',
                    nativeID: at,
                    onMouseLeave: r._handleClearPreview,
                    onScroll: r._handleScroll,
                    ref: r._scrollRef,
                    scrollEventThrottle: 100,
                    style: st.categoriesContainer,
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
                      e.id === G.a.Recent &&
                        (p.headerButton = j.a.createElement(
                          N.a,
                          {
                            accessibilityLabel: G.f.clear,
                            onPress: r._handleClearRecent,
                            size: 'xSmall',
                            type: 'brandText',
                          },
                          G.f.clear,
                        )),
                      e.id === G.a.Search && (p.withEmptyState = !e.emojis.length && !!d),
                      j.a.createElement(
                        we,
                        s()({}, p, { key: e.name, ref: r._setCategoryRef('category-'.concat(e.id)) }),
                      )
                    )
                  }),
                )
              }),
              S()(p()(r), '_scrollEmojiIntoViewIfNeeded', function () {
                r._shouldScrollToFocusedItem &&
                  r._focusedItemRef &&
                  (Object(se.e)(r._getScrollParent(), r._focusedItemRef, r._getStickyHeaderOffset()),
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
                return j.a.createElement(N.a, {
                  accessibilityLabel: i.name,
                  icon: j.a.createElement(L.a, { emoji: i, skinTone: a, style: st.twemoji }),
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
                  ? j.a.createElement(
                      U.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        numberOfLines: 1,
                        size: 'subtext2',
                        style: st.emojiDescription,
                      },
                      e.name,
                    )
                  : null
              }),
              S()(p()(r), '_renderFooter', function () {
                var e = r.state.withDescription
                return j.a.createElement(
                  O.a,
                  { style: st.footer },
                  r._renderPreview(),
                  e ? r._renderEmojiDescription() : null,
                  j.a.createElement(Xe, {
                    activeSkinTone: r.state.activeSkinTone,
                    onPreview: r._handleSkinTonePreview,
                    onSelect: r._handleSkinToneSelect,
                    style: st.skinTonePicker,
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
                  return t === E.a.ArrowDown
                    ? (r._updateFocus(r._focusHelper.focusNextRow(l)), void e.preventDefault())
                    : t === E.a.ArrowUp
                    ? (r._updateFocus(r._focusHelper.focusPreviousRow(l)), void e.preventDefault())
                    : t === E.a.ArrowRight
                    ? (r._updateFocus(r._focusHelper.focusNextColumn(l)), void e.preventDefault())
                    : t === E.a.ArrowLeft
                    ? (r._updateFocus(r._focusHelper.focusPreviousColumn(l)), void e.preventDefault())
                    : t === E.a.Enter && u
                    ? (r._handleSelect(r._uncompressedData.emojis[u]), void e.preventDefault())
                    : void 0
              }),
              S()(p()(r), '_updateFocus', function (e) {
                var t = r.state,
                  n = t.ariaDescendantId,
                  o = t.focusItem !== e.focusItem
                ;(r._shouldScrollToFocusedItem = o),
                  r.setState(nt(nt({}, e), {}, { ariaDescendantId: o ? Object(se.a)() : n }))
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
                Object(Oe.a)(r._categoryRefs).forEach(function (t) {
                  t && 'search' !== t.props.id && t.updateDisplay(!e)
                }),
                  r.setState({ searchResults: n, query: e }),
                  r._scrollTo(0)
              }),
              S()(p()(r), '_handleSelect', function (e) {
                var t = r.props.onSelect,
                  n = r.state.activeSkinTone,
                  o = Object(se.d)(e, n)
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
                var e = r._scrollRef.current && te.a.findDOMNode(r._scrollRef.current),
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
                  Object(Oe.a)(r._categoryRefs).forEach(function (e) {
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
                  return -1 === it.indexOf(e.id)
                })
              })
            var o = r.props.emojiInfo
            return (
              (r._uncompressedData = Object(Qe.a)(o || {})),
              (r._categories = r._uncompressedData.categories),
              (r._searchCategoryInitialValue = {
                anchorless: !0,
                id: G.a.Search,
                name: G.f.searchCategoryName,
                emojis: [],
              }),
              (r._recentlyUsedCategoryInitialValue = { id: G.a.Recent, name: G.f.recentCategoryName, emojis: [] }),
              (r._defaultPreviewEmoji = r._uncompressedData.emojis[r.props.previewEmojiCodepoint]),
              r._categories.unshift(r._recentlyUsedCategoryInitialValue),
              (r._focusHelper = new Ce(r._categories, r._uncompressedData.emojis, e.rowSize)),
              (r.state = {
                activeCategory: r._categories[1],
                activeSkinTone: G.e[e.defaultSkinTone],
                ariaDescendantId: Object(se.a)(),
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
                  K.a.set(ot, {
                    recentlyUsed: this._getUpdatedRecentlyUsedEmojiList(),
                    activeSkinToneId: this.state.activeSkinTone.id,
                  })
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  K.a.get(ot).then(function (t) {
                    if (t && 'object' === o()(t)) {
                      var n = t.recentlyUsed,
                        r = void 0 === n ? [] : n,
                        i = t.activeSkinToneId,
                        a = 'string' == typeof i && G.e[i],
                        c = Object.assign(
                          {},
                          {
                            recentlyUsed: Array.isArray(r)
                              ? Object($e.a)(r, function (e) {
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
                    var s = nt(nt({}, this._searchCategoryInitialValue), {}, { emojis: i }),
                      u = nt(
                        nt({}, this._recentlyUsedCategoryInitialValue),
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
                    (this._focusHelper = new Ce(r, this._uncompressedData.emojis, c))
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = te.a.findDOMNode(this._scrollRef.current)
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
                    o = nt(nt({}, this._searchCategoryInitialValue), {}, { emojis: r }),
                    i = nt(
                      nt({}, this._recentlyUsedCategoryInitialValue),
                      {},
                      { emojis: n.length ? a()(n).reverse() : [] },
                    ),
                    c = this._staticCategories(),
                    s = [o, i].concat(c),
                    u = [o, i, c[0]]
                  return j.a.createElement(
                    Ee.a,
                    { onKeyDown: this._handleKeyDown, style: st.root },
                    j.a.createElement(ie, { style: st.searchSection }, this._renderSearch()),
                    j.a.createElement(ie, { style: st.anchorsSection }, this._renderAnchors(s)),
                    this._renderCategories(e ? u : s),
                    j.a.createElement(ie, { style: st.footerContainer, withTopBorder: !0 }, this._renderFooter()),
                  )
                },
              },
            ]),
            n
          )
        })(j.a.PureComponent)
      S()(ct, 'defaultProps', {
        defaultSkinTone: G.d.None,
        partialRender: !1,
        previewEmojiCodepoint: '👋',
        rowSize: G.b,
      })
      var st = P.a.create(function (e) {
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
      t.a = ct
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
