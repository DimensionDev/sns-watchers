;(window.webpackJsonp = window.webpackJsonp || []).push([
  [222],
  {
    '4AX5': function (e, n, i) {
      'use strict'
      i.r(n)
      var t = i('ERkP'),
        o = i.n(t),
        r = i('G/+M'),
        a = i('+cai'),
        u = i('jrwN'),
        c = i('rHpw')
      n.default = function (e) {
        var n = e.reaction,
          i = e.size
        return o.a.createElement(u.a, {
          emojiInfo: a.default,
          onAnimationEnd: function () {
            r.a(n)
          },
          reaction: n.emoji,
          style: [s.reaction, { height: i, width: i }],
        })
      }
      var s = c.a.create(function (e) {
        return {
          reaction: {
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: e.colors.navigationBackground,
            borderRadius: e.borderRadii.infinite,
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
          },
        }
      })
    },
    VbCG: function (e, n, i) {
      'use strict'
      i.d(n, 'd', function () {
        return d
      }),
        i.d(n, 'e', function () {
          return l
        }),
        i.d(n, 'f', function () {
          return m
        }),
        i.d(n, 'c', function () {
          return p
        }),
        i.d(n, 'a', function () {
          return h
        }),
        i.d(n, 'b', function () {
          return k
        })
      var t,
        o,
        r = i('KEM+'),
        a = i.n(r),
        u = i('3XMw'),
        c = i.n(u),
        s = i('rHpw'),
        d = {
          None: 'none',
          Light: 'light',
          MediumLight: 'medium-light',
          Medium: 'medium',
          MediumDark: 'medium-dark',
          Dark: 'dark',
        },
        f =
          ((t = {}),
          a()(t, d.Light, '1f3fb'),
          a()(t, d.MediumLight, '1f3fc'),
          a()(t, d.Medium, '1f3fd'),
          a()(t, d.MediumDark, '1f3fe'),
          a()(t, d.Dark, '1f3ff'),
          t),
        l =
          ((o = {}),
          a()(o, d.None, { id: d.None, name: c.a.ff3dd27b, color: '#FFDC5D' }),
          a()(o, d.Light, { codepoint: f[d.Light], id: d.Light, name: c.a.b554fcf3, color: '#F7DECE' }),
          a()(o, d.MediumLight, {
            codepoint: f[d.MediumLight],
            id: d.MediumLight,
            name: c.a.j590b148,
            color: '#F3D2A2',
          }),
          a()(o, d.Medium, { codepoint: f[d.Medium], id: d.Medium, name: c.a.e7d4ee85, color: '#D5AB88' }),
          a()(o, d.MediumDark, { codepoint: f[d.MediumDark], id: d.MediumDark, name: c.a.ia423ebb, color: '#AF7E57' }),
          a()(o, d.Dark, { codepoint: f[d.Dark], id: d.Dark, name: c.a.a2cf0941, color: '#7C533E' }),
          o),
        m = {
          search: c.a.j824dc05,
          notFoundHeader: c.a.e39c4391,
          notFoundMessage: c.a.f2625275,
          skintext: c.a.d67ad795,
          clear: c.a.e6388bfa,
          recentCategoryName: c.a.j7c67ec9,
          searchCategoryName: c.a.da539d38,
        },
        p = {
          EmojiWidth: s.a.theme.spaces.space20,
          EmojiHeight: s.a.theme.spaces.space20,
          EmojiGutter: s.a.theme.spaces.space4,
        },
        h = {
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
        k = 9
    },
    a6L8: function (e, n, i) {
      'use strict'
      i('OZaJ')
      var t = i('VrFO'),
        o = i.n(t),
        r = i('Y9Ll'),
        a = i.n(r),
        u = i('5Yy7'),
        c = i.n(u),
        s = i('N+ot'),
        d = i.n(s),
        f = i('AuHH'),
        l = i.n(f),
        m = (i('ho0z'), i('ERkP')),
        p = i.n(m),
        h = i('faxe'),
        k = i('3rX5'),
        j = i('VbCG'),
        v = i('rHpw')
      function g(e) {
        var n = (function () {
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
          var i,
            t = l()(e)
          if (n) {
            var o = l()(this).constructor
            i = Reflect.construct(t, arguments, o)
          } else i = t.apply(this, arguments)
          return d()(this, i)
        }
      }
      var O = (function (e) {
          c()(i, e)
          var n = g(i)
          function i() {
            return o()(this, i), n.apply(this, arguments)
          }
          return (
            a()(i, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.accessibilityLabel,
                    i = e.emoji,
                    t = e.skinTone,
                    o = e.style,
                    r = Object(h.b)(i, t)
                  return r
                    ? p.a.createElement(k.a, {
                        accessibilityLabel: n,
                        alt: i.name,
                        draggable: !1,
                        resizeMode: 'stretch',
                        source: r,
                        style: [E.root, o],
                      })
                    : null
                },
              },
            ]),
            i
          )
        })(p.a.PureComponent),
        E = v.a.create(function (e) {
          return { root: { height: j.c.EmojiHeight, width: j.c.EmojiWidth } }
        })
      n.a = O
    },
    faxe: function (e, n, i) {
      'use strict'
      i.d(n, 'c', function () {
        return r
      }),
        i.d(n, 'b', function () {
          return a
        }),
        i.d(n, 'd', function () {
          return u
        }),
        i.d(n, 'a', function () {
          return c
        }),
        i.d(n, 'e', function () {
          return s
        })
      i('vrRf'), i('ho0z')
      var t = i('z4Oz'),
        o = function (e, n) {
          var i = n && n.codepoint
          if (!(i && r(e.skin_variations, i) > 1))
            return i && e.skin_variations && e.skin_variations[i] ? e.skin_variations[i] : void 0
        },
        r = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            i = 0
          for (var t in e) n && t.indexOf(n) >= 0 && (i += 1)
          return i
        },
        a = function (e, n) {
          var i = (o(e, n) || e).unified
          return t.a.getTwemojiUrl(i)
        },
        u = function (e, n) {
          var i = e.name,
            t = e.short_names,
            r = e.text,
            a = o(e, n),
            u = a ? a.unified : e.unified
          return { id: e.id || t[0], name: i, text: r || u, unified: u }
        },
        c = function () {
          return 'emojiPicker-'.concat(Math.random())
        }
      function s(e, n) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
        if (e && n) {
          var t = e.getBoundingClientRect(),
            o = t.height,
            r = t.top,
            a = r + i,
            u = n.getBoundingClientRect(),
            c = u.bottom,
            s = u.top,
            d = o + r
          if (s < a) {
            var f = a - s
            e.scrollTop = Math.max(0, e.scrollTop - f)
          } else if (s > d || c > d) {
            var l = c - d
            e.scrollTop = Math.max(0, e.scrollTop + l)
          }
        }
      }
    },
    jrwN: function (e, n, i) {
      'use strict'
      i.d(n, 'a', function () {
        return j
      })
      i('+KXO'), i('1t7P'), i('LW0h'), i('daRM'), i('jwue'), i('+oxZ'), i('FtHn')
      var t = i('KEM+'),
        o = i.n(t),
        r = i('ERkP'),
        a = i.n(r),
        u = i('WrBE'),
        c = i('VbCG')
      function s(e) {
        var n,
          i,
          t = (function (e) {
            return !!d[e]
          })(e)
        return {
          rootQualifiedEmoji: t ? (null === (n = d[e]) || void 0 === n ? void 0 : n.qualifiedRootEmoji) : e,
          skinToneOption: t ? (null === (i = d[e]) || void 0 === i ? void 0 : i.skinToneOption) : c.e[c.d.None],
        }
      }
      var d = {
          '👏🏻': { qualifiedRootEmoji: '👏', skinToneOption: c.e[c.d.Light] },
          '👏🏼': { qualifiedRootEmoji: '👏', skinToneOption: c.e[c.d.MediumLight] },
          '👏🏽': { qualifiedRootEmoji: '👏', skinToneOption: c.e[c.d.Medium] },
          '👏🏾': { qualifiedRootEmoji: '👏', skinToneOption: c.e[c.d.MediumDark] },
          '👏🏿': { qualifiedRootEmoji: '👏', skinToneOption: c.e[c.d.Dark] },
          '✊🏻': { qualifiedRootEmoji: '✊', skinToneOption: c.e[c.d.Light] },
          '✊🏼': { qualifiedRootEmoji: '✊', skinToneOption: c.e[c.d.MediumLight] },
          '✊🏽': { qualifiedRootEmoji: '✊', skinToneOption: c.e[c.d.Medium] },
          '✊🏾': { qualifiedRootEmoji: '✊', skinToneOption: c.e[c.d.MediumDark] },
          '✊🏿': { qualifiedRootEmoji: '✊', skinToneOption: c.e[c.d.Dark] },
          '✌🏻': { qualifiedRootEmoji: '✌️', skinToneOption: c.e[c.d.Light] },
          '✌🏼': { qualifiedRootEmoji: '✌️', skinToneOption: c.e[c.d.MediumLight] },
          '✌🏽': { qualifiedRootEmoji: '✌️', skinToneOption: c.e[c.d.Medium] },
          '✌🏾': { qualifiedRootEmoji: '✌️', skinToneOption: c.e[c.d.MediumDark] },
          '✌🏿': { qualifiedRootEmoji: '✌️', skinToneOption: c.e[c.d.Dark] },
          '👋🏻': { qualifiedRootEmoji: '👋', skinToneOption: c.e[c.d.Light] },
          '👋🏼': { qualifiedRootEmoji: '👋', skinToneOption: c.e[c.d.MediumLight] },
          '👋🏽': { qualifiedRootEmoji: '👋', skinToneOption: c.e[c.d.Medium] },
          '👋🏾': { qualifiedRootEmoji: '👋', skinToneOption: c.e[c.d.MediumDark] },
          '👋🏿': { qualifiedRootEmoji: '👋', skinToneOption: c.e[c.d.Dark] },
        },
        f = i('a6L8'),
        l = i('r728')
      function m(e) {
        var n = a.a.useMemo(
            function () {
              return Object(l.a)(e.emojiInfo).emojis
            },
            [e.emojiInfo],
          ),
          i = (function (e, n) {
            var i = s(e),
              t = i.rootQualifiedEmoji,
              o = i.skinToneOption
            return { emojiData: t && n ? n[t] : void 0, skinTone: o }
          })(e.emojiString, n),
          t = i.emojiData,
          o = i.skinTone
        return t ? a.a.createElement(f.a, { emoji: t, skinTone: o, style: e.style }) : null
      }
      var p = i('rHpw')
      function h(e, n) {
        var i = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            i.push.apply(i, t)
        }
        return i
      }
      function k(e) {
        for (var n = 1; n < arguments.length; n++) {
          var i = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? h(Object(i), !0).forEach(function (n) {
                o()(e, n, i[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : h(Object(i)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
              })
        }
        return e
      }
      function j(e) {
        var n = a.a.useRef(new u.a.Value(0)).current,
          i = [0, 1, 2, 3],
          t = {
            translateX: { inputRange: i, outputRange: ['0%', '0%', '40%', '40%'] },
            translateY: { inputRange: i, outputRange: ['0%', '0%', '-30%', '-30%'] },
            scale: { inputRange: i, outputRange: [0, 1.25, 0.6, 0] },
          }
        return (
          a.a.useEffect(
            function () {
              return (
                u.a
                  .sequence([
                    u.a.spring(n, v({ toValue: i[1] })),
                    u.a.spring(n, v({ toValue: i[2] })),
                    u.a.delay(3e3),
                    u.a.spring(n, v({ toValue: i[3] })),
                  ])
                  .start(e.onAnimationEnd),
                function () {
                  n.resetAnimation()
                }
              )
            },
            [e.reaction],
          ),
          a.a.createElement(
            u.a.View,
            {
              style: [
                g.container,
                e.style,
                {
                  transform: [
                    { translate3d: '0, 0, 0' },
                    { translateX: n.interpolate(t.translateX) },
                    { translateY: n.interpolate(t.translateY) },
                    { scale: n.interpolate(t.scale) },
                  ],
                },
              ],
            },
            a.a.createElement(m, { emojiInfo: e.emojiInfo, emojiString: e.reaction, style: g.emoji }),
          )
        )
      }
      function v(e) {
        return k(k({}, e), {}, { bounciness: 2, useNativeDriver: !1 })
      }
      var g = p.a.create(function (e) {
        return { container: { boxShadow: e.boxShadows.xSmall }, emoji: { width: '67%', height: '67%' } }
      })
    },
    r728: function (e, n, i) {
      'use strict'
      i.d(n, 'a', function () {
        return c
      })
      i('jwue'), i('+oxZ'), i('Ysgh'), i('KqXw'), i('vrRf'), i('ho0z'), i('7xRU'), i('LJOr')
      var t = i('iChn'),
        o = { name: 'a', keywords: 'j', sprite_position: 'k', skin_variations: 'l' },
        r = { unified: 'key', skin_tone: 'd', sprite_position: 'k' },
        a = function (e) {
          var n = [],
            i = function (e, i) {
              e &&
                (Array.isArray(e) ? e : [e]).forEach(function (e) {
                  ;(i ? e.split(/[-|_|\s]+/) : [e]).forEach(function (e) {
                    var i = e.toLowerCase()
                    ;-1 === n.indexOf(i) && n.push(i)
                  })
                })
            }
          return i(e.short_names, !0), i(e.name, !0), i(e.keywords, !1), n.join(',')
        },
        u = function (e, n) {
          for (var i in n) (e[i] = e[n[i]]), delete e[n[i]]
        },
        c = function (e) {
          var n = JSON.parse(JSON.stringify(e))
          for (var i in ((n.compressed = !1), n.emojis)) {
            var c = n.emojis[i]
            u(c, o),
              (c.id = i),
              (c.unified = i),
              (c.short_names = [i]),
              c.text || (c.text = ''),
              (c.search = a(c)),
              c.skin_variations &&
                (c.skin_variations.forEach(function (e) {
                  u(e, r)
                }),
                (c.skin_variations = Object(t.a)(c.skin_variations, function (e) {
                  for (var n = e.skin_tone, i = n[0], t = 1; t < n.length; t++) i += '+'.concat(n[t])
                  return i
                })))
          }
          return n
        }
    },
  },
])
//# sourceMappingURL=WIPED
