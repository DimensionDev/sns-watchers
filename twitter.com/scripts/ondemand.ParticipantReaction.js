;(window.webpackJsonp = window.webpackJsonp || []).push([
  [217],
  {
    '4AX5': function (e, i, n) {
      'use strict'
      n.r(i)
      var t = n('ERkP'),
        o = n('G/+M'),
        r = n('+cai'),
        a = n('jrwN'),
        u = n('rHpw')
      i.default = function (e) {
        var i = e.reaction,
          n = e.size
        return t.createElement(a.a, {
          emojiInfo: r.default,
          onAnimationEnd: function () {
            o.a(i)
          },
          reaction: i.emoji,
          style: [c.reaction, { height: n, width: n }],
        })
      }
      var c = u.a.create(function (e) {
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
    VbCG: function (e, i, n) {
      'use strict'
      n.d(i, 'd', function () {
        return d
      }),
        n.d(i, 'e', function () {
          return l
        }),
        n.d(i, 'f', function () {
          return m
        }),
        n.d(i, 'c', function () {
          return p
        }),
        n.d(i, 'a', function () {
          return h
        }),
        n.d(i, 'b', function () {
          return k
        })
      var t,
        o,
        r = n('KEM+'),
        a = n.n(r),
        u = n('3XMw'),
        c = n.n(u),
        s = n('rHpw'),
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
    a6L8: function (e, i, n) {
      'use strict'
      n('OZaJ')
      var t = n('VrFO'),
        o = n.n(t),
        r = n('Y9Ll'),
        a = n.n(r),
        u = n('5Yy7'),
        c = n.n(u),
        s = n('N+ot'),
        d = n.n(s),
        f = n('AuHH'),
        l = n.n(f),
        m = (n('ho0z'), n('ERkP')),
        p = n('faxe'),
        h = n('3rX5'),
        k = n('VbCG'),
        j = n('rHpw')
      function v(e) {
        var i = (function () {
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
            t = l()(e)
          if (i) {
            var o = l()(this).constructor
            n = Reflect.construct(t, arguments, o)
          } else n = t.apply(this, arguments)
          return d()(this, n)
        }
      }
      var g = (function (e) {
          c()(n, e)
          var i = v(n)
          function n() {
            return o()(this, n), i.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    i = e.accessibilityLabel,
                    n = e.emoji,
                    t = e.skinTone,
                    o = e.style,
                    r = Object(p.b)(n, t)
                  return r
                    ? m.createElement(h.a, {
                        accessibilityLabel: i,
                        alt: n.name,
                        draggable: !1,
                        resizeMode: 'stretch',
                        source: r,
                        style: [O.root, o],
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(m.PureComponent),
        O = j.a.create(function (e) {
          return { root: { height: k.c.EmojiHeight, width: k.c.EmojiWidth } }
        })
      i.a = g
    },
    faxe: function (e, i, n) {
      'use strict'
      n.d(i, 'c', function () {
        return r
      }),
        n.d(i, 'b', function () {
          return a
        }),
        n.d(i, 'd', function () {
          return u
        }),
        n.d(i, 'a', function () {
          return c
        }),
        n.d(i, 'e', function () {
          return s
        })
      n('vrRf'), n('ho0z')
      var t = n('z4Oz'),
        o = function (e, i) {
          var n = i && i.codepoint
          if (!(n && r(e.skin_variations, n) > 1))
            return n && e.skin_variations && e.skin_variations[n] ? e.skin_variations[n] : void 0
        },
        r = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = arguments.length > 1 ? arguments[1] : void 0,
            n = 0
          for (var t in e) i && t.indexOf(i) >= 0 && (n += 1)
          return n
        },
        a = function (e, i) {
          var n = (o(e, i) || e).unified
          return t.a.getTwemojiUrl(n)
        },
        u = function (e, i) {
          var n = e.name,
            t = e.short_names,
            r = e.text,
            a = o(e, i),
            u = a ? a.unified : e.unified
          return { id: e.id || t[0], name: n, text: r || u, unified: u }
        },
        c = function () {
          return 'emojiPicker-'.concat(Math.random())
        }
      function s(e, i) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
        if (e && i) {
          var t = e.getBoundingClientRect(),
            o = t.height,
            r = t.top,
            a = r + n,
            u = i.getBoundingClientRect(),
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
    jrwN: function (e, i, n) {
      'use strict'
      n.d(i, 'a', function () {
        return k
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var t = n('KEM+'),
        o = n.n(t),
        r = n('ERkP'),
        a = n('WrBE'),
        u = n('VbCG')
      function c(e) {
        var i,
          n,
          t = (function (e) {
            return !!s[e]
          })(e)
        return {
          rootQualifiedEmoji: t ? (null === (i = s[e]) || void 0 === i ? void 0 : i.qualifiedRootEmoji) : e,
          skinToneOption: t ? (null === (n = s[e]) || void 0 === n ? void 0 : n.skinToneOption) : u.e[u.d.None],
        }
      }
      var s = {
          '👏🏻': { qualifiedRootEmoji: '👏', skinToneOption: u.e[u.d.Light] },
          '👏🏼': { qualifiedRootEmoji: '👏', skinToneOption: u.e[u.d.MediumLight] },
          '👏🏽': { qualifiedRootEmoji: '👏', skinToneOption: u.e[u.d.Medium] },
          '👏🏾': { qualifiedRootEmoji: '👏', skinToneOption: u.e[u.d.MediumDark] },
          '👏🏿': { qualifiedRootEmoji: '👏', skinToneOption: u.e[u.d.Dark] },
          '✊🏻': { qualifiedRootEmoji: '✊', skinToneOption: u.e[u.d.Light] },
          '✊🏼': { qualifiedRootEmoji: '✊', skinToneOption: u.e[u.d.MediumLight] },
          '✊🏽': { qualifiedRootEmoji: '✊', skinToneOption: u.e[u.d.Medium] },
          '✊🏾': { qualifiedRootEmoji: '✊', skinToneOption: u.e[u.d.MediumDark] },
          '✊🏿': { qualifiedRootEmoji: '✊', skinToneOption: u.e[u.d.Dark] },
          '✌🏻': { qualifiedRootEmoji: '✌️', skinToneOption: u.e[u.d.Light] },
          '✌🏼': { qualifiedRootEmoji: '✌️', skinToneOption: u.e[u.d.MediumLight] },
          '✌🏽': { qualifiedRootEmoji: '✌️', skinToneOption: u.e[u.d.Medium] },
          '✌🏾': { qualifiedRootEmoji: '✌️', skinToneOption: u.e[u.d.MediumDark] },
          '✌🏿': { qualifiedRootEmoji: '✌️', skinToneOption: u.e[u.d.Dark] },
          '👋🏻': { qualifiedRootEmoji: '👋', skinToneOption: u.e[u.d.Light] },
          '👋🏼': { qualifiedRootEmoji: '👋', skinToneOption: u.e[u.d.MediumLight] },
          '👋🏽': { qualifiedRootEmoji: '👋', skinToneOption: u.e[u.d.Medium] },
          '👋🏾': { qualifiedRootEmoji: '👋', skinToneOption: u.e[u.d.MediumDark] },
          '👋🏿': { qualifiedRootEmoji: '👋', skinToneOption: u.e[u.d.Dark] },
        },
        d = n('a6L8'),
        f = n('r728')
      function l(e) {
        var i = r.useMemo(
            function () {
              return Object(f.a)(e.emojiInfo).emojis
            },
            [e.emojiInfo],
          ),
          n = (function (e, i) {
            var n = c(e),
              t = n.rootQualifiedEmoji,
              o = n.skinToneOption
            return { emojiData: t && i ? i[t] : void 0, skinTone: o }
          })(e.emojiString, i),
          t = n.emojiData,
          o = n.skinTone
        return t ? r.createElement(d.a, { emoji: t, skinTone: o, style: e.style }) : null
      }
      var m = n('rHpw')
      function p(e, i) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          i &&
            (t = t.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable
            })),
            n.push.apply(n, t)
        }
        return n
      }
      function h(e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? p(Object(n), !0).forEach(function (i) {
                o()(e, i, n[i])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
              })
        }
        return e
      }
      function k(e) {
        var i = r.useRef(new a.a.Value(0)).current,
          n = [0, 1, 2, 3],
          t = {
            translateX: { inputRange: n, outputRange: ['0%', '0%', '40%', '40%'] },
            translateY: { inputRange: n, outputRange: ['0%', '0%', '-30%', '-30%'] },
            scale: { inputRange: n, outputRange: [0, 1.25, 0.6, 0] },
          }
        return (
          r.useEffect(
            function () {
              return (
                a.a
                  .sequence([
                    a.a.spring(i, j({ toValue: n[1] })),
                    a.a.spring(i, j({ toValue: n[2] })),
                    a.a.delay(3e3),
                    a.a.spring(i, j({ toValue: n[3] })),
                  ])
                  .start(e.onAnimationEnd),
                function () {
                  i.resetAnimation()
                }
              )
            },
            [e.reaction],
          ),
          r.createElement(
            a.a.View,
            {
              style: [
                v.container,
                e.style,
                {
                  transform: [
                    { translate3d: '0, 0, 0' },
                    { translateX: i.interpolate(t.translateX) },
                    { translateY: i.interpolate(t.translateY) },
                    { scale: i.interpolate(t.scale) },
                  ],
                },
              ],
            },
            r.createElement(l, { emojiInfo: e.emojiInfo, emojiString: e.reaction, style: v.emoji }),
          )
        )
      }
      function j(e) {
        return h(h({}, e), {}, { bounciness: 2, useNativeDriver: !1 })
      }
      var v = m.a.create(function (e) {
        return { container: { boxShadow: e.boxShadows.xSmall }, emoji: { width: '67%', height: '67%' } }
      })
    },
    r728: function (e, i, n) {
      'use strict'
      n.d(i, 'a', function () {
        return c
      })
      n('jwue'), n('+oxZ'), n('Ysgh'), n('KqXw'), n('vrRf'), n('ho0z'), n('7xRU'), n('LJOr')
      var t = n('iChn'),
        o = { name: 'a', keywords: 'j', sprite_position: 'k', skin_variations: 'l' },
        r = { unified: 'key', skin_tone: 'd', sprite_position: 'k' },
        a = function (e) {
          var i = [],
            n = function (e, n) {
              e &&
                (Array.isArray(e) ? e : [e]).forEach(function (e) {
                  ;(n ? e.split(/[-|_|\s]+/) : [e]).forEach(function (e) {
                    var n = e.toLowerCase()
                    ;-1 === i.indexOf(n) && i.push(n)
                  })
                })
            }
          return n(e.short_names, !0), n(e.name, !0), n(e.keywords, !1), i.join(',')
        },
        u = function (e, i) {
          for (var n in i) (e[n] = e[i[n]]), delete e[i[n]]
        },
        c = function (e) {
          var i = JSON.parse(JSON.stringify(e))
          for (var n in ((i.compressed = !1), i.emojis)) {
            var c = i.emojis[n]
            u(c, o),
              (c.id = n),
              (c.unified = n),
              (c.short_names = [n]),
              c.text || (c.text = ''),
              (c.search = a(c)),
              c.skin_variations &&
                (c.skin_variations.forEach(function (e) {
                  u(e, r)
                }),
                (c.skin_variations = Object(t.a)(c.skin_variations, function (e) {
                  for (var i = e.skin_tone, n = i[0], t = 1; t < i.length; t++) n += '+'.concat(i[t])
                  return n
                })))
          }
          return i
        }
    },
  },
])
//# sourceMappingURL=WIPED
