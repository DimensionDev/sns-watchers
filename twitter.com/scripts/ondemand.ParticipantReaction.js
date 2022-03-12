;(window.webpackJsonp = window.webpackJsonp || []).push([
  [230],
  {
    '4AX5': function (i, e, n) {
      'use strict'
      n.r(e)
      var o = n('ERkP'),
        t = n.n(o),
        a = n('G/+M'),
        r = n('+cai'),
        u = n('x7CM'),
        d = n('rHpw')
      e.default = function (i) {
        var e = i.reaction,
          n = i.size
        return t.a.createElement(u.a, {
          emojiInfo: r.default,
          onAnimationEnd: function () {
            a.a(e)
          },
          reaction: e.emoji,
          style: [s.reaction, { height: n, width: n }],
        })
      }
      var s = d.a.create(function (i) {
        return {
          reaction: {
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: i.colors.navigationBackground,
            borderRadius: i.borderRadii.infinite,
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
          },
        }
      })
    },
    VbCG: function (i, e, n) {
      'use strict'
      n.d(e, 'd', function () {
        return c
      }),
        n.d(e, 'e', function () {
          return m
        }),
        n.d(e, 'f', function () {
          return l
        }),
        n.d(e, 'c', function () {
          return p
        }),
        n.d(e, 'a', function () {
          return k
        }),
        n.d(e, 'b', function () {
          return h
        })
      var o,
        t,
        a = n('KEM+'),
        r = n.n(a),
        u = n('3XMw'),
        d = n.n(u),
        s = n('rHpw'),
        c = {
          None: 'none',
          Light: 'light',
          MediumLight: 'medium-light',
          Medium: 'medium',
          MediumDark: 'medium-dark',
          Dark: 'dark',
        },
        f =
          ((o = {}),
          r()(o, c.Light, '1f3fb'),
          r()(o, c.MediumLight, '1f3fc'),
          r()(o, c.Medium, '1f3fd'),
          r()(o, c.MediumDark, '1f3fe'),
          r()(o, c.Dark, '1f3ff'),
          o),
        m =
          ((t = {}),
          r()(t, c.None, { id: c.None, name: d.a.ff3dd27b, color: '#FFDC5D' }),
          r()(t, c.Light, { codepoint: f[c.Light], id: c.Light, name: d.a.b554fcf3, color: '#F7DECE' }),
          r()(t, c.MediumLight, {
            codepoint: f[c.MediumLight],
            id: c.MediumLight,
            name: d.a.j590b148,
            color: '#F3D2A2',
          }),
          r()(t, c.Medium, { codepoint: f[c.Medium], id: c.Medium, name: d.a.e7d4ee85, color: '#D5AB88' }),
          r()(t, c.MediumDark, { codepoint: f[c.MediumDark], id: c.MediumDark, name: d.a.ia423ebb, color: '#AF7E57' }),
          r()(t, c.Dark, { codepoint: f[c.Dark], id: c.Dark, name: d.a.a2cf0941, color: '#7C533E' }),
          t),
        l = {
          search: d.a.j824dc05,
          notFoundHeader: d.a.e39c4391,
          notFoundMessage: d.a.f2625275,
          skintext: d.a.d67ad795,
          clear: d.a.e6388bfa,
          recentCategoryName: d.a.j7c67ec9,
          searchCategoryName: d.a.da539d38,
        },
        p = {
          EmojiWidth: s.a.theme.spaces.space20,
          EmojiHeight: s.a.theme.spaces.space20,
          EmojiGutter: s.a.theme.spaces.space4,
        },
        k = {
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
        h = 9
    },
    a6L8: function (i, e, n) {
      'use strict'
      n('ho0z')
      var o = n('ERkP'),
        t = n.n(o),
        a = n('faxe'),
        r = n('3rX5'),
        u = n('VbCG')
      var d = n('rHpw').a.create(function (i) {
        return { root: { height: u.c.EmojiHeight, width: u.c.EmojiWidth } }
      })
      e.a = function (i) {
        var e = i.accessibilityLabel,
          n = i.emoji,
          o = i.skinTone,
          u = i.style,
          s = Object(a.b)(n, o)
        return s
          ? t.a.createElement(r.a, {
              accessibilityLabel: e,
              alt: n.name,
              draggable: !1,
              resizeMode: 'stretch',
              source: s,
              style: [d.root, u],
            })
          : null
      }
    },
    faxe: function (i, e, n) {
      'use strict'
      n.d(e, 'c', function () {
        return a
      }),
        n.d(e, 'b', function () {
          return r
        }),
        n.d(e, 'd', function () {
          return u
        }),
        n.d(e, 'a', function () {
          return d
        }),
        n.d(e, 'e', function () {
          return s
        })
      n('vrRf'), n('ho0z')
      var o = n('z4Oz'),
        t = function (i, e) {
          var n = e && e.codepoint
          if (!(n && a(i.skin_variations, n) > 1))
            return n && i.skin_variations && i.skin_variations[n] ? i.skin_variations[n] : void 0
        },
        a = function () {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = 0
          for (var o in i) e && o.indexOf(e) >= 0 && (n += 1)
          return n
        },
        r = function (i, e) {
          var n = (t(i, e) || i).unified
          return o.a.getTwemojiUrl(n)
        },
        u = function (i, e) {
          var n = i.name,
            o = i.short_names,
            a = i.text,
            r = t(i, e),
            u = r ? r.unified : i.unified
          return { id: i.id || o[0], name: n, text: a || u, unified: u }
        },
        d = function () {
          return 'emojiPicker-'.concat(Math.random())
        }
      function s(i, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
        if (i && e) {
          var o = i.getBoundingClientRect(),
            t = o.height,
            a = o.top,
            r = a + n,
            u = e.getBoundingClientRect(),
            d = u.bottom,
            s = u.top,
            c = t + a
          if (s < r) {
            var f = r - s
            i.scrollTop = Math.max(0, i.scrollTop - f)
          } else if (s > c || d > c) {
            var m = d - c
            i.scrollTop = Math.max(0, i.scrollTop + m)
          }
        }
      }
    },
    r728: function (i, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return d
      })
      n('jwue'), n('7x/C'), n('+oxZ'), n('KqXw'), n('Ysgh'), n('vrRf'), n('ho0z'), n('7xRU'), n('0zG9'), n('LJOr')
      var o = n('iChn'),
        t = { name: 'a', keywords: 'j', sprite_position: 'k', skin_variations: 'l' },
        a = { unified: 'key', skin_tone: 'd', sprite_position: 'k' },
        r = function (i) {
          var e = [],
            n = function (i, n) {
              i &&
                (Array.isArray(i) ? i : [i]).forEach(function (i) {
                  ;(n ? i.split(/[-|_|\s]+/) : [i]).forEach(function (i) {
                    var n = i.toLowerCase()
                    ;-1 === e.indexOf(n) && e.push(n)
                  })
                })
            }
          return n(i.short_names, !0), n(i.name, !0), n(i.keywords, !1), e.join(',')
        },
        u = function (i, e) {
          for (var n in e) (i[n] = i[e[n]]), delete i[e[n]]
        },
        d = function (i) {
          var e = JSON.parse(JSON.stringify(i))
          for (var n in ((e.compressed = !1), e.emojis)) {
            var d = e.emojis[n]
            u(d, t),
              (d.id = n),
              (d.unified = n),
              (d.short_names = [n]),
              d.text || (d.text = ''),
              (d.search = r(d)),
              d.skin_variations &&
                (d.skin_variations.forEach(function (i) {
                  u(i, a)
                }),
                (d.skin_variations = Object(o.a)(d.skin_variations, function (i) {
                  for (var e = i.skin_tone, n = e[0], o = 1; o < e.length; o++) n += '+'.concat(e[o])
                  return n
                })))
          }
          return e
        }
    },
    x7CM: function (i, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return k
      })
      var o = n('yiKp'),
        t = n.n(o),
        a = n('ERkP'),
        r = n.n(a),
        u = n('WrBE'),
        d = n('VbCG')
      function s(i) {
        var e,
          n,
          o = (function (i) {
            return !!c[i]
          })(i)
        return {
          rootQualifiedEmoji: o ? (null === (e = c[i]) || void 0 === e ? void 0 : e.qualifiedRootEmoji) : i,
          skinToneOption: o ? (null === (n = c[i]) || void 0 === n ? void 0 : n.skinToneOption) : d.e[d.d.None],
        }
      }
      var c = {
          '👏🏻': { qualifiedRootEmoji: '👏', skinToneOption: d.e[d.d.Light] },
          '👏🏼': { qualifiedRootEmoji: '👏', skinToneOption: d.e[d.d.MediumLight] },
          '👏🏽': { qualifiedRootEmoji: '👏', skinToneOption: d.e[d.d.Medium] },
          '👏🏾': { qualifiedRootEmoji: '👏', skinToneOption: d.e[d.d.MediumDark] },
          '👏🏿': { qualifiedRootEmoji: '👏', skinToneOption: d.e[d.d.Dark] },
          '✊🏻': { qualifiedRootEmoji: '✊', skinToneOption: d.e[d.d.Light] },
          '✊🏼': { qualifiedRootEmoji: '✊', skinToneOption: d.e[d.d.MediumLight] },
          '✊🏽': { qualifiedRootEmoji: '✊', skinToneOption: d.e[d.d.Medium] },
          '✊🏾': { qualifiedRootEmoji: '✊', skinToneOption: d.e[d.d.MediumDark] },
          '✊🏿': { qualifiedRootEmoji: '✊', skinToneOption: d.e[d.d.Dark] },
          '✌🏻': { qualifiedRootEmoji: '✌️', skinToneOption: d.e[d.d.Light] },
          '✌🏼': { qualifiedRootEmoji: '✌️', skinToneOption: d.e[d.d.MediumLight] },
          '✌🏽': { qualifiedRootEmoji: '✌️', skinToneOption: d.e[d.d.Medium] },
          '✌🏾': { qualifiedRootEmoji: '✌️', skinToneOption: d.e[d.d.MediumDark] },
          '✌🏿': { qualifiedRootEmoji: '✌️', skinToneOption: d.e[d.d.Dark] },
          '👋🏻': { qualifiedRootEmoji: '👋', skinToneOption: d.e[d.d.Light] },
          '👋🏼': { qualifiedRootEmoji: '👋', skinToneOption: d.e[d.d.MediumLight] },
          '👋🏽': { qualifiedRootEmoji: '👋', skinToneOption: d.e[d.d.Medium] },
          '👋🏾': { qualifiedRootEmoji: '👋', skinToneOption: d.e[d.d.MediumDark] },
          '👋🏿': { qualifiedRootEmoji: '👋', skinToneOption: d.e[d.d.Dark] },
        },
        f = n('a6L8'),
        m = n('r728')
      function l(i) {
        var e = r.a.useMemo(
            function () {
              return Object(m.a)(i.emojiInfo).emojis
            },
            [i.emojiInfo],
          ),
          n = (function (i, e) {
            var n = s(i),
              o = n.rootQualifiedEmoji,
              t = n.skinToneOption
            return { emojiData: o && e ? e[o] : void 0, skinTone: t }
          })(i.emojiString, e),
          o = n.emojiData,
          t = n.skinTone
        return o ? r.a.createElement(f.a, { emoji: o, skinTone: t, style: i.style }) : null
      }
      var p = n('rHpw')
      function k(i) {
        var e = r.a.useRef(new u.a.Value(0)).current,
          n = [0, 1, 2, 3],
          o = {
            translateX: { inputRange: n, outputRange: ['0%', '0%', '40%', '40%'] },
            translateY: { inputRange: n, outputRange: ['0%', '0%', '-30%', '-30%'] },
            scale: { inputRange: n, outputRange: [0, 1.25, 0.6, 0] },
          }
        return (
          r.a.useEffect(
            function () {
              return (
                u.a
                  .sequence([
                    u.a.spring(e, h({ toValue: n[1] })),
                    u.a.spring(e, h({ toValue: n[2] })),
                    u.a.delay(3e3),
                    u.a.spring(e, h({ toValue: n[3] })),
                  ])
                  .start(i.onAnimationEnd),
                function () {
                  e.resetAnimation()
                }
              )
            },
            [i.reaction],
          ),
          r.a.createElement(
            u.a.View,
            {
              style: [
                g.container,
                i.style,
                {
                  transform: [
                    { translate3d: '0, 0, 0' },
                    { translateX: e.interpolate(o.translateX) },
                    { translateY: e.interpolate(o.translateY) },
                    { scale: e.interpolate(o.scale) },
                  ],
                },
              ],
            },
            r.a.createElement(l, { emojiInfo: i.emojiInfo, emojiString: i.reaction, style: g.emoji }),
          )
        )
      }
      function h(i) {
        return t()(t()({}, i), {}, { bounciness: 2, useNativeDriver: !1 })
      }
      var g = p.a.create(function (i) {
        return { container: { boxShadow: i.boxShadows.xSmall }, emoji: { width: '67%', height: '67%' } }
      })
    },
  },
])
//# sourceMappingURL=WIPED
