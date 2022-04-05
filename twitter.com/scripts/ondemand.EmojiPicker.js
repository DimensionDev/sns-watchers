;(window.webpackJsonp = window.webpackJsonp || []).push([
  [208],
  {
    '5RdJ': function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('97Jx'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        s = n('+cai'),
        c = n('nvLZ')
      t.default = function (e) {
        return a.a.createElement(c.a, r()({}, e, { emojiInfo: s.default }))
      }
    },
    VbCG: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return u
      }),
        n.d(t, 'e', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return v
        }),
        n.d(t, 'b', function () {
          return p
        })
      var o,
        r,
        i = n('KEM+'),
        a = n.n(i),
        s = n('3XMw'),
        c = n.n(s),
        l = n('rHpw'),
        u = {
          None: 'none',
          Light: 'light',
          MediumLight: 'medium-light',
          Medium: 'medium',
          MediumDark: 'medium-dark',
          Dark: 'dark',
        },
        d =
          ((o = {}),
          a()(o, u.Light, '1f3fb'),
          a()(o, u.MediumLight, '1f3fc'),
          a()(o, u.Medium, '1f3fd'),
          a()(o, u.MediumDark, '1f3fe'),
          a()(o, u.Dark, '1f3ff'),
          o),
        f =
          ((r = {}),
          a()(r, u.None, { id: u.None, name: c.a.ff3dd27b, color: '#FFDC5D' }),
          a()(r, u.Light, { codepoint: d[u.Light], id: u.Light, name: c.a.b554fcf3, color: '#F7DECE' }),
          a()(r, u.MediumLight, {
            codepoint: d[u.MediumLight],
            id: u.MediumLight,
            name: c.a.j590b148,
            color: '#F3D2A2',
          }),
          a()(r, u.Medium, { codepoint: d[u.Medium], id: u.Medium, name: c.a.e7d4ee85, color: '#D5AB88' }),
          a()(r, u.MediumDark, { codepoint: d[u.MediumDark], id: u.MediumDark, name: c.a.ia423ebb, color: '#AF7E57' }),
          a()(r, u.Dark, { codepoint: d[u.Dark], id: u.Dark, name: c.a.a2cf0941, color: '#7C533E' }),
          r),
        h = {
          search: c.a.j824dc05,
          notFoundHeader: c.a.e39c4391,
          notFoundMessage: c.a.f2625275,
          skintext: c.a.d67ad795,
          clear: c.a.e6388bfa,
          recentCategoryName: c.a.j7c67ec9,
          searchCategoryName: c.a.da539d38,
        },
        m = {
          EmojiWidth: l.a.theme.spaces.space20,
          EmojiHeight: l.a.theme.spaces.space20,
          EmojiGutter: l.a.theme.spaces.space4,
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
        p = 9
    },
    a6L8: function (e, t, n) {
      'use strict'
      n('ho0z')
      var o = n('ERkP'),
        r = n.n(o),
        i = n('faxe'),
        a = n('3rX5'),
        s = n('VbCG')
      var c = n('rHpw').a.create(function (e) {
        return { root: { height: s.c.EmojiHeight, width: s.c.EmojiWidth } }
      })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          n = e.emoji,
          o = e.skinTone,
          s = e.style,
          l = Object(i.b)(n, o)
        return l
          ? r.a.createElement(a.a, {
              accessibilityLabel: t,
              alt: n.name,
              draggable: !1,
              resizeMode: 'stretch',
              source: l,
              style: [c.root, s],
            })
          : null
      }
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
          return s
        }),
        n.d(t, 'a', function () {
          return c
        }),
        n.d(t, 'e', function () {
          return l
        })
      n('vrRf'), n('ho0z')
      var o = n('z4Oz'),
        r = function (e, t) {
          var n = t && t.codepoint
          if (!(n && i(e.skin_variations, n) > 1))
            return n && e.skin_variations && e.skin_variations[n] ? e.skin_variations[n] : void 0
        },
        i = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = 0
          for (var o in e) t && o.indexOf(t) >= 0 && (n += 1)
          return n
        },
        a = function (e, t) {
          var n = (r(e, t) || e).unified
          return o.a.getTwemojiUrl(n)
        },
        s = function (e, t) {
          var n = e.name,
            o = e.short_names,
            i = e.text,
            a = r(e, t),
            s = a ? a.unified : e.unified
          return { id: e.id || o[0], name: n, text: i || s, unified: s }
        },
        c = function () {
          return 'emojiPicker-'.concat(Math.random())
        }
      function l(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
        if (e && t) {
          var o = e.getBoundingClientRect(),
            r = o.height,
            i = o.top,
            a = i + n,
            s = t.getBoundingClientRect(),
            c = s.bottom,
            l = s.top,
            u = r + i
          if (l < a) {
            var d = a - l
            e.scrollTop = Math.max(0, e.scrollTop - d)
          } else if (l > u || c > u) {
            var f = c - u
            e.scrollTop = Math.max(0, e.scrollTop + f)
          }
        }
      }
    },
    nvLZ: function (e, t, n) {
      'use strict'
      var o = n('T0aG'),
        r = n.n(o),
        i = n('RhWx'),
        a = n.n(i),
        s = n('yiKp'),
        c = n.n(s),
        l = n('97Jx'),
        u = n.n(l),
        d = n('VrFO'),
        f = n.n(d),
        h = n('Y9Ll'),
        m = n.n(h),
        v = n('1Pcy'),
        p = n.n(v),
        g = n('5Yy7'),
        y = n.n(g),
        _ = n('2VqO'),
        w = n.n(_),
        k = n('KEM+'),
        S = n.n(k),
        j =
          (n('z84I'),
          n('ho0z'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('vrRf'),
          n('wFPu'),
          n('M+/F'),
          n('2G9S'),
          n('LW0h'),
          n('IAdD'),
          n('ERkP')),
        C = n.n(j),
        b = n('py1r'),
        E = n('I4+6'),
        R = n('oLZl'),
        I = n('rHpw'),
        T = n('MWbm'),
        P = E.a.generate({ backgroundColor: 'transparent', color: I.a.theme.colors.primary }),
        D = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n() {
            var e
            f()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.category
                ;(0, t.onClick)(n)
              }),
              S()(p()(e), '_handleKeyDown', function (t) {
                var n = t.key,
                  o = t.altKey,
                  r = t.ctrlKey,
                  i = t.metaKey
                o || r || i || (n === R.a.Enter && (e._handleClick(), t.preventDefault(), t.stopPropagation()))
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.icon,
                    o = t.isActive,
                    r = t.isDisabled
                  return C.a.createElement(b.a, { disabled: r }, function (t) {
                    var i = t.isFocused,
                      a = t.isHovered,
                      s = t.isPressed
                    return C.a.createElement(
                      T.a,
                      { style: x.container },
                      C.a.createElement(
                        T.a,
                        {
                          accessibilityDisabled: r,
                          accessibilityRole: 'button',
                          onClick: e._handleClick,
                          onKeyDown: i ? e._handleKeyDown : void 0,
                          style: [
                            x.iconWrapper,
                            a || o ? void 0 : x.faded,
                            P.transitionStyle,
                            a && P.hoverStyle,
                            s && P.pressedStyle,
                            i && P.focusedStyle,
                          ],
                        },
                        n,
                      ),
                      C.a.createElement(T.a, {
                        style: [x.border, o ? { backgroundColor: I.a.theme.colors.primary } : null],
                      }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent),
        x = I.a.create(function (e) {
          return {
            container: { flex: 1 },
            iconWrapper: { width: '100%', alignItems: 'center', paddingVertical: e.spaces.space4 },
            border: { height: e.borderWidths.large, width: '100%', borderRadius: e.borderRadii.infinite },
            faded: { filter: 'grayscale(100%) contrast(80%)', opacity: 0.5 },
          }
        }),
        F = D,
        L = n('a6L8'),
        O = {
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
        H = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n() {
            return f()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.activeCategory,
                    o = t.categories,
                    r = t.disableAll,
                    i = t.onAnchorClick
                  return C.a.createElement(
                    T.a,
                    { style: M.root },
                    o.map(function (t) {
                      var o = t.anchorless,
                        a = t.emojis,
                        s = t.id,
                        c = t.name,
                        l = (a && 0 === a.length) || r,
                        u = !!n && t.id === n.id
                      return o
                        ? null
                        : C.a.createElement(F, {
                            category: t,
                            icon: e._getIcon(s, c),
                            isActive: u,
                            isDisabled: l,
                            key: s,
                            onClick: i,
                          })
                    }),
                  )
                },
              },
              {
                key: '_getIcon',
                value: function (e, t) {
                  var n = this.props.emojiData[O[e]]
                  return C.a.createElement(L.a, { accessibilityLabel: t, emoji: n })
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent),
        M = I.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        z = H,
        A = n('t62R'),
        B = n('/yvb'),
        U = n('2ZFc'),
        N = n('ddV6'),
        K = n.n(N),
        V = (n('5BYb'), n('uFXj'), n('VbCG')),
        W = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n() {
            var e
            f()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(p()(e), '_handleHover', function () {
                var t = e.props,
                  n = t.emoji,
                  o = t.onHover
                o && o(n)
              }),
              S()(p()(e), '_handleFocus', function () {
                var t = e.props,
                  n = t.emoji,
                  o = t.onFocus
                o && o(n)
              }),
              S()(p()(e), '_getBackgroundPositionStyle', function () {
                var t = e.props,
                  n = t.emoji,
                  o = t.spriteSheetColumns,
                  r = t.spriteSheetRows,
                  i = e.props.spritePosition || n.sprite_position,
                  a = 100 / (r - 1)
                return ''.concat((100 / (o - 1)) * i[0], '% ').concat(a * i[1], '%')
              }),
              S()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.emoji,
                  o = t.onSelect
                o && o(n)
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescendantId,
                    o = t.emoji,
                    r = t.emojiName,
                    i = t.spriteUrl,
                    a = {
                      backgroundImage: 'url('.concat(i, ')'),
                      backgroundPosition: this._getBackgroundPositionStyle(),
                      backgroundSize: ''
                        .concat(100 * this.props.spriteSheetColumns, '% ')
                        .concat(100 * this.props.spriteSheetRows, '%'),
                    }
                  return C.a.createElement(
                    b.a,
                    { onFocusRingGained: this._handleFocus, onHoverIn: this._handleHover },
                    function (t) {
                      var i = t.isFocused,
                        s = t.isHovered,
                        c = t.isPressed
                      return C.a.createElement(
                        T.a,
                        {
                          accessibilityLabel: r || o.name,
                          accessibilityRole: 'option',
                          accessibilityState: { selected: !!n },
                          nativeID: n,
                          onClick: e._handleClick,
                          style: [
                            J.container,
                            G.transitionStyle,
                            s && G.hoverStyle,
                            c && G.pressedStyle,
                            (i || n) && G.focusedStyle,
                          ],
                        },
                        C.a.createElement(T.a, { style: [a, J.emoji] }),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent),
        G = E.a.generate({ backgroundColor: I.a.theme.colors.transparent, color: I.a.theme.colors.gray700 }),
        J = I.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
              boxSizing: 'border-box',
              padding: V.c.EmojiGutter,
            },
            emoji: { display: 'inline-block', outlineStyle: 'none', height: V.c.EmojiHeight, width: V.c.EmojiWidth },
          }
        }),
        q = W,
        Y = n('FIs5'),
        Z = n('mtvn'),
        X = n('7nmT'),
        Q = n.n(X),
        $ = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n() {
            return f()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.style,
                    o = e.withTopBorder
                  return C.a.createElement(T.a, { style: [ee.root, o && ee.topBorder, n] }, t)
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      S()($, 'defaultProps', { withTopBorder: !1 })
      var ee = I.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.borderColor,
              padding: e.spaces.space12,
            },
            topBorder: { borderTopWidth: e.borderWidths.small },
          }
        }),
        te = $,
        ne = n('m3Bd'),
        oe = n.n(ne),
        re = n('faxe'),
        ie = function (e, t) {
          var n = null == e ? 0 : e.length
          if (!n || t < 1) return []
          for (var o = 0, r = 0, i = new Array(Math.ceil(n / t)); o < n; ) (i[r] = e.slice(o, (o += t))), (r += 1)
          return i
        },
        ae = n('OiMc'),
        se = ['activeSkinTone', 'emoji'],
        ce = ['activeSkinTone', 'emoji', 'onSelect'],
        le = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n() {
            var e
            f()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(p()(e), '_createDismissOnSelect', function (t) {
                return function (n) {
                  var o = e.props.onSelect
                  t(), o && o(n)
                }
              }),
              S()(p()(e), '_getEmojisForActiveSkinTone', function (t) {
                var n = e.props,
                  o = n.activeSkinTone,
                  r = n.emoji,
                  i = oe()(n, se),
                  a = o.codepoint,
                  s = r.skin_variations,
                  l = [
                    C.a.createElement(
                      q,
                      u()({}, i, {
                        emoji: c()({}, r),
                        key: 'none',
                        onSelect: e._createDismissOnSelect(t),
                        spritePosition: r.sprite_position,
                      }),
                    ),
                  ]
                for (var d in s)
                  if (a && d.indexOf(a) >= 0) {
                    var f = s[d],
                      h = f.sprite_position,
                      m = f.unified
                    l.push(
                      C.a.createElement(
                        q,
                        u()({}, i, {
                          emoji: c()(c()({}, r), {}, { text: m }),
                          key: d,
                          onSelect: e._createDismissOnSelect(t),
                          spritePosition: h,
                        }),
                      ),
                    )
                  }
                return l
              }),
              S()(p()(e), 'renderEmojis', function (t) {
                var n = ie(e._getEmojisForActiveSkinTone(t), 10)
                return C.a.createElement(
                  T.a,
                  { style: ue.emojisContainer },
                  n.map(function (e, t) {
                    return C.a.createElement(T.a, { key: t, style: ue.row }, e)
                  }),
                )
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.activeSkinTone, e.emoji),
                    n = (e.onSelect, oe()(e, ce))
                  return C.a.createElement(
                    ae.a,
                    { contentStyle: ue.contentStyle, renderContent: this.renderEmojis, withArrow: !0 },
                    C.a.createElement(q, u()({}, n, { emoji: t, spritePosition: t.sprite_position })),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent),
        ue = I.a.create(function (e) {
          return {
            row: { flexDirection: 'row' },
            contentStyle: { minWidth: '100%' },
            emojisContainer: { padding: e.spaces.space12 },
          }
        }),
        de = le,
        fe = ['activeSkinTone']
      var he = function (e) {
          var t = e.activeSkinTone,
            n = oe()(e, fe),
            o = e.emoji,
            r = o.skin_variations,
            i = t.codepoint,
            a = Object(re.c)(r, i),
            s = i && r && r[i]
          return 0 !== a || s
            ? 1 === a && s
              ? C.a.createElement(q, u()({}, n, { spritePosition: s.sprite_position }))
              : C.a.createElement(de, u()({}, n, { activeSkinTone: t }))
            : C.a.createElement(q, u()({}, n, { spritePosition: o.sprite_position }))
        },
        me = C.a.forwardRef(function (e, t) {
          var n = C.a.useState(!0),
            o = K()(n, 2),
            r = o[0],
            i = o[1],
            a = C.a.useRef({
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
          C.a.useLayoutEffect(
            function () {
              r && e.isActiveCategory && i(!1)
            },
            [r, e.isActiveCategory],
          ),
            C.a.useEffect(
              function () {
                var e = a.current,
                  t = e.containerRef,
                  n = e.intersectionObserver
                t && n && n.observe(t)
              },
              [a.current.containerRef, a.current.intersectionObserver],
            )
          var s = C.a.useMemo(
            function () {
              return function (e) {
                var n = Q.a.findDOMNode(e)
                n instanceof HTMLElement ? (a.current.containerRef = n) : (a.current.containerRef = null),
                  'function' == typeof t && t(e)
              }
            },
            [t],
          )
          return r
            ? C.a.createElement(ve, u()({ ref: s }, e, { withPlaceholder: !0 }))
            : C.a.createElement(ve, u()({}, e, { ref: t }))
        }),
        ve = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n(e) {
            var o
            return (
              f()(this, n),
              (o = t.call(this, e)),
              S()(p()(o), '_top', 0),
              S()(p()(o), '_bottom', 0),
              S()(p()(o), '_renderEmptyState', function () {
                var e = V.f.notFoundHeader,
                  t = V.f.notFoundMessage
                return C.a.createElement(Y.a, { header: e, message: t })
              }),
              S()(p()(o), 'updatePosition', function () {
                var e = Q.a.findDOMNode(o._containerRef.current),
                  t = e && e.parentNode
                if (e && e instanceof window.HTMLElement && t && t instanceof window.HTMLElement) {
                  var n = e.getBoundingClientRect(),
                    r = n.height,
                    i = n.top,
                    a = t.getBoundingClientRect().top
                  ;(o._top = i - a + t.scrollTop), (o._bottom = o._top + r)
                }
              }),
              S()(p()(o), 'getTop', function () {
                return o._top
              }),
              S()(p()(o), 'getBottom', function () {
                return o._bottom
              }),
              S()(p()(o), 'updateDisplay', function (e) {
                var t = Q.a.findDOMNode(o._containerRef.current)
                t && t instanceof window.HTMLElement && t.style && (t.style.display = e ? 'flex' : 'none')
              }),
              (o._containerRef = C.a.createRef()),
              o
            )
          }
          return (
            m()(n, [
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
                    o = e.name,
                    r = e.onStickyHeaderRef,
                    i = e.withEmptyState,
                    a = t.length > 0 || i
                  return C.a.createElement(
                    T.a,
                    { key: o, ref: this._containerRef },
                    C.a.createElement(
                      T.a,
                      {
                        accessibilityLabel: o,
                        accessibilityRole: 'group',
                        key: o,
                        ref: this._containerRef,
                        style: a ? pe.shown : pe.hidden,
                      },
                      C.a.createElement(
                        T.a,
                        { ref: r, style: pe.headerContainer },
                        C.a.createElement(
                          te,
                          { style: pe.headerSection, withTopBorder: !0 },
                          C.a.createElement(A.b, { size: 'headline2', style: pe.header, weight: 'bold' }, o),
                          n,
                        ),
                      ),
                      i ? this._renderEmptyState() : C.a.createElement(te, null, this._renderEmojis()),
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
                    o = t.rowSize,
                    r = Math.ceil(n.length / o),
                    i = Object(Z.a)(0, r)
                  return C.a.createElement(
                    T.a,
                    { style: pe.emojiGroup },
                    i.map(function (t) {
                      var r = n.slice(t * o, (t + 1) * o)
                      return C.a.createElement(
                        T.a,
                        { key: 'emoji-row-'.concat(t), style: pe.emojiRow },
                        e.props.withPlaceholder
                          ? C.a.createElement(T.a, { style: [pe.rowItem, pe.spacer] })
                          : e._renderRow(r),
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
                    o = t.ariaDescendantId,
                    r = t.data,
                    i = t.focusedEmojiId,
                    a = t.onEmojiFocus,
                    s = t.onEmojiHover,
                    c = t.onFocusedEmojiRef,
                    l = t.onSelect,
                    d = t.rowSize,
                    f = t.spriteUrl
                  return Object(Z.a)(0, d).map(function (t) {
                    var d = e[t]
                    if (!d)
                      return C.a.createElement(
                        T.a,
                        { key: 'row-spacer-'.concat(t), style: pe.rowItem },
                        C.a.createElement(T.a, { style: pe.spacer }),
                      )
                    var h = r.emojis[d.toLowerCase()]
                    if (!h) return null
                    var m = !!h.skin_variations,
                      v = r.spriteSheetColumns,
                      p = r.spriteSheetRows,
                      g = {
                        ariaDescendantId: d === i ? o : void 0,
                        emoji: h,
                        onFocus: a,
                        onHover: s,
                        onSelect: l,
                        spriteUrl: f,
                        spriteSheetRows: p,
                        spriteSheetColumns: v,
                      }
                    return C.a.createElement(
                      T.a,
                      { key: h.unified, ref: d === i ? c : void 0, style: pe.rowItem },
                      m ? C.a.createElement(he, u()({}, g, { activeSkinTone: n })) : C.a.createElement(q, g),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      S()(ve, 'defaultProps', { headerButton: null, rowSize: V.b, withEmptyState: !1 })
      var pe = I.a.create(function (e) {
          return {
            emojiGroup: { flexDirection: 'column', flexWrap: 'wrap' },
            emojiRow: { flexDirection: 'row', justifyContent: 'space-between' },
            header: { paddingHorizontal: e.spaces.space4 },
            headerSection: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            headerContainer: { position: 'sticky', top: 0, zIndex: 1 },
            hidden: { display: 'none' },
            shown: { display: 'flex' },
            rowItem: { flex: 1 },
            spacer: { alignSelf: 'center', margin: V.c.EmojiGutter, height: V.c.EmojiHeight, width: V.c.EmojiWidth },
          }
        }),
        ge = n('zrc3'),
        ye = n('Myq3'),
        _e = n('EhiH'),
        we = (function () {
          function e(t, n, o) {
            f()(this, e), (this._categories = t), (this._rowSize = o), (this._emojis = n)
          }
          return (
            m()(e, [
              {
                key: 'getInitialFocus',
                value: function () {
                  var e = Object(ge.a)(this._categories, function (e) {
                    return e.emojis.length > 0
                  })
                  return this.formatFocusParams(0, 0, this._categories[e])
                },
              },
              {
                key: 'getCategoryById',
                value: function (e) {
                  var t = Object(ge.a)(this._categories, function (t) {
                    return t.id === e
                  })
                  return this._categories[t]
                },
              },
              {
                key: 'getPreviousCategory',
                value: function (e) {
                  if (e !== V.a.Search) {
                    var t = Object(ge.a)(this._categories, function (t) {
                      return t.id === e
                    })
                    return Object(ye.a)(this._categories.slice(0, t), function (e) {
                      return e.emojis.length > 0
                    })
                  }
                },
              },
              {
                key: 'getNextCategory',
                value: function (e) {
                  if (e !== V.a.Search) {
                    var t =
                      Object(ge.a)(this._categories, function (t) {
                        return t.id === e
                      }) + 1
                    return Object(_e.a)(this._categories.slice(t, this._categories.length), function (e) {
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
                  var o = n.emojis[e * this._rowSize + t]
                  return {
                    focusRow: e,
                    focusCol: t,
                    focusCategoryId: n.id,
                    focusItem: o,
                    previewEmoji: this._emojis[o],
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
                    o = e.focusRow
                  if (o < 0 || n < 0 || !t) return this.getInitialFocus()
                  var r = o,
                    i = n,
                    a = this.getCategoryById(t)
                  if (r * this._rowSize + i + 1 >= a.emojis.length) {
                    if (!(a = this.getNextCategory(t))) return this.formatFocusParams(o, n, this.getCategoryById(t))
                    ;(r = 0), (i = 0)
                  } else (r += i === this._rowSize - 1 ? 1 : 0), (i = i === this._rowSize - 1 ? 0 : i + 1)
                  return this.formatFocusParams(r, i, a)
                },
              },
              {
                key: 'focusPreviousColumn',
                value: function (e) {
                  var t = e.focusCategoryId,
                    n = e.focusCol,
                    o = e.focusRow
                  if (o < 0 || n < 0 || !t) return this.getInitialFocus()
                  var r = o,
                    i = n,
                    a = this.getCategoryById(t)
                  if (r * this._rowSize + i - 1 < 0) {
                    if (!(a = this.getPreviousCategory(t))) return this.formatFocusParams(o, n, this.getCategoryById(t))
                    ;(r = this.getCategoryLastRow(a)), (i = this.getLastRowLength(a) - 1)
                  } else (r -= 0 === i ? 1 : 0), (i = 0 === i ? this._rowSize - 1 : i - 1)
                  return this.formatFocusParams(r, i, a)
                },
              },
              {
                key: 'focusNextRow',
                value: function (e) {
                  var t = e.focusCategoryId,
                    n = e.focusCol,
                    o = e.focusRow
                  if (o < 0 || n < 0 || !t) return this.getInitialFocus()
                  var r = o,
                    i = n,
                    a = this.getCategoryById(t)
                  if (r * this._rowSize + i + this._rowSize >= a.emojis.length)
                    if (r < this.getCategoryLastRow(a)) (r += 1), (i = this.getLastRowLength(a) - 1)
                    else {
                      if (!(a = this.getNextCategory(t))) return this.formatFocusParams(o, n, this.getCategoryById(t))
                      ;(r = 0), (i = Math.min(i, a.emojis.length - 1))
                    }
                  else r += 1
                  return this.formatFocusParams(r, i, a)
                },
              },
              {
                key: 'focusPreviousRow',
                value: function (e) {
                  var t = e.focusCategoryId,
                    n = e.focusCol,
                    o = e.focusRow
                  if (o < 0 || n < 0 || !t) return this.getInitialFocus()
                  var r = o,
                    i = n,
                    a = this.getCategoryById(t)
                  if (r * this._rowSize + i - this._rowSize < 0) {
                    if (!(a = this.getPreviousCategory(t))) return this.formatFocusParams(o, n, this.getCategoryById(t))
                    ;(r = this.getCategoryLastRow(a)), (i = Math.min(i, this.getLastRowLength(a) - 1))
                  } else r -= 1
                  return this.formatFocusParams(r, i, a)
                },
              },
            ]),
            e
          )
        })(),
        ke = n('xoZN'),
        Se =
          (n('KqXw'),
          n('LJOr'),
          n('iKE+'),
          n('1LXv'),
          n('e/gN'),
          n('DZ+c'),
          n('WNMA'),
          n('Ysgh'),
          n('tQbP'),
          n('tn7R')),
        je = n('s1N3')
      function Ce(e, t) {
        for (var n = a()(t), o = 0, r = e; o < n.length; ) {
          var i = r.children[n[o]]
          if (!i) break
          ;(o += 1), (r = i)
        }
        return { node: r, tail: n.slice(o) }
      }
      function be(e, t, n) {
        var o = Ce(e, t),
          r = o.node,
          i = o.tail,
          a = r
        i.forEach(function (e, t) {
          var n = { results: [], children: {} }
          ;(a.children[e] = n), (a = n)
        }),
          a.results ? a.results.push(n) : (a.results = [n])
      }
      function Ee(e, t) {
        var n = Ce(e, t),
          o = n.node,
          r = n.tail
        if (!o || r.length > 0) return []
        var i = []
        return (
          (function e(t) {
            t.results.length && i.push.apply(i, a()(t.results)),
              Object(Se.a)(t.children).forEach(function (t) {
                return e(t)
              })
          })(o),
          Object(je.a)(i)
        )
      }
      var Re = (function () {
          function e(t) {
            f()(this, e),
              S()(this, '_getRelevantEmojis', function (e, t, n) {
                var o = {}
                for (var r in e) {
                  var i = e[r]
                  ;-1 !== i.search.indexOf(t) && (o[r] = i)
                }
                return o
              }),
              S()(this, '_getScores', function (e, t) {
                var n = {},
                  o = {},
                  r = 0,
                  i = new RegExp('\\b'.concat(t, '\\b'))
                for (var a in e) {
                  var s = e[a].search,
                    c = s.match(i),
                    l = s.split(',')
                  l.shift()
                  var u = Object(ge.a)(l, function (e) {
                      return e === t
                    }),
                    d = -1 !== u ? u : s.indexOf(t)
                  ;(o[a] = d + 1), c && ((n[a] = o[a]), (r = Math.max(r, d)))
                }
                for (var f in e) {
                  var h = e[f].search.match(i)
                  ;-1 !== o[f] && (t === f ? (n[f] = 0) : h || (n[f] = r + o[f]))
                }
                return n
              }),
              S()(this, '_insertEmojisToTrie', function (e, t, n) {
                for (var o in e) {
                  be(n, t, e[o])
                }
              }),
              (this._data = t),
              (this._index = { results: [], children: {} }),
              (this._originalEmojis = this._data.emojis)
          }
          return (
            m()(e, [
              {
                key: 'search',
                value: function (e, t) {
                  var n = this,
                    o = t && t.maxResults ? t.maxResults : 75,
                    r = [],
                    i = this._originalEmojis,
                    s = this._index
                  if (e.length) {
                    var c = e.toLowerCase().split(/[\s|,|\-|_]+/),
                      l = (c = c.slice(0, 2))
                        .map(function (e) {
                          var t = [],
                            o = Ee(s, e),
                            r = new RegExp('\\b'.concat(e, '\\b')),
                            a = n._getRelevantEmojis(i, e, r),
                            c = n._getScores(a, e)
                          return (
                            0 === o.length ? (n._insertEmojisToTrie(a, e, s), (t = Ee(s, e))) : (t = o),
                            t.sort(function (e, t) {
                              return c[e.id] - c[t.id]
                            }),
                            t
                          )
                        })
                        .filter(function (e) {
                          return !!e
                        })
                    r = l.length > 1 ? Ie.apply(void 0, a()(l)) : l.length ? l[0] : []
                  }
                  return r.length > o && (r = r.slice(0, o)), r
                },
              },
            ]),
            e
          )
        })(),
        Ie = function (e, t) {
          var n = Object(je.a)(e),
            o = Object(je.a)(t)
          return n.filter(function (e) {
            return o.indexOf(e) >= 0
          })
        },
        Te = Re,
        Pe = n('6OUF'),
        De = n('VwDm'),
        xe = n('fs1G'),
        Fe = n('VY6S'),
        Le = C.a.forwardRef(function (e, t) {
          var n = e.autoFocus,
            o = void 0 !== n && n,
            r = e.maxResults,
            i = void 0 === r ? 75 : r,
            a = e.onSearch,
            s = void 0 === a ? xe.a : a,
            c = e.data,
            l = e.ariaActiveDescendant,
            u = e.categoriesDomId,
            d = C.a.useState('')[1],
            f = C.a.useMemo(
              function () {
                return new Te(c)
              },
              [c],
            ),
            h = C.a.useMemo(
              function () {
                return Object(Fe.a)(function (e) {
                  var t = f.search(e, { maxResults: i })
                  s(e, t)
                }, 100)
              },
              [f, i, s],
            ),
            m = C.a.useCallback(
              function (e) {
                var t = (e.target && e.target.value) || ''
                d(t), h(t)
              },
              [d, h],
            ),
            v = C.a.useCallback(
              function () {
                d(''), h('')
              },
              [d, h],
            )
          return C.a.createElement(
            T.a,
            { accessibilityRole: 'combobox' },
            C.a.createElement(Pe.a, {
              Icon: De.a,
              ariaActiveDescendant: l,
              ariaControls: u,
              ariaExpanded: !0,
              ariaLabel: V.f.search,
              autoFocus: o,
              leftAligned: !0,
              onChange: m,
              onClear: v,
              placeholder: V.f.search,
              ref: t,
              style: Oe.fieldTextInput,
              styleType: 'pill',
              withClearButton: !0,
            }),
          )
        }),
        Oe = I.a.create(function (e) {
          return { fieldTextInput: { margin: e.spaces.space4 } }
        }),
        He = C.a.memo(Le),
        Me = n('IMYl'),
        ze = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n() {
            var e
            f()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(p()(e), '_handleFocus', function () {
                var t = e.props,
                  n = t.onFocus,
                  o = t.skinTone
                n && n(o)
              }),
              S()(p()(e), '_handleFocusLost', function () {
                var t = e.props,
                  n = t.onFocusLost,
                  o = t.skinTone
                n && n(o)
              }),
              S()(p()(e), '_handleHover', function () {
                var t = e.props,
                  n = t.onHover,
                  o = t.skinTone
                n && n(o)
              }),
              S()(p()(e), '_handleHoverLeave', function () {
                var t = e.props,
                  n = t.onHoverLeave,
                  o = t.skinTone
                n && n(o)
              }),
              S()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.onSelect,
                  o = t.skinTone
                n && n(o)
              }),
              S()(p()(e), '_handleKeyDown', function (t) {
                var n = t.key,
                  o = t.altKey,
                  r = t.ctrlKey,
                  i = t.metaKey
                o || r || i || (n === R.a.Enter && (e._handleClick(), t.preventDefault(), t.stopPropagation()))
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    o = t.accessibilityRole,
                    r = t.isSelected,
                    i = t.skinTone,
                    a = t.style,
                    s = E.a.generate({ backgroundColor: i.color, color: I.a.theme.colors.white })
                  return C.a.createElement(
                    b.a,
                    {
                      onFocusRingGained: this._handleFocus,
                      onFocusRingLost: this._handleFocusLost,
                      onHoverIn: this._handleHover,
                      onHoverOut: this._handleHoverLeave,
                    },
                    function (t) {
                      var c = t.isFocused,
                        l = t.isHovered,
                        u = t.isPressed
                      return C.a.createElement(
                        T.a,
                        {
                          accessibilityLabel: n,
                          accessibilityRole: o || 'button',
                          accessibilityState: { checked: !!r },
                          focusable: !0,
                          onClick: e._handleClick,
                          onKeyDown: c ? e._handleKeyDown : void 0,
                          style: a,
                        },
                        C.a.createElement(
                          T.a,
                          {
                            style: [
                              Ae.root,
                              { backgroundColor: i.color },
                              s.transitionStyle,
                              (l || c) && s.focusedStyle,
                              (u || r) && Ae.selected,
                            ],
                          },
                          r ? C.a.createElement(Me.a, { style: Ae.checkmarkIcon }) : null,
                        ),
                      )
                    },
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component),
        Ae = I.a.create(function (e) {
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
        Be = ze,
        Ue = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n() {
            var e
            f()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(p()(e), 'state', { showPalette: !1, focusedOption: void 0, hoveredOption: void 0 }),
              S()(p()(e), '_renderPalette', function () {
                var t = e.props.activeSkinTone
                return C.a.createElement(
                  T.a,
                  { accessibilityRole: 'radiogroup', style: Ne.palette },
                  Object(Se.a)(V.e).map(function (n) {
                    var o = n === t
                    return C.a.createElement(Be, {
                      accessibilityLabel: n.name,
                      accessibilityRole: 'radio',
                      isSelected: o,
                      key: n.id,
                      onFocus: e._handleSkinToneFocus,
                      onFocusLost: e._handleSkinToneFocusLost,
                      onHover: e._handleSkinToneHover,
                      onHoverLeave: e._handleSkinToneHoverLeave,
                      onSelect: e._handleSkinToneSelectionClick,
                      skinTone: n,
                      style: Ne.skinToneOption,
                    })
                  }),
                )
              }),
              S()(p()(e), '_renderCurrentSkinTone', function () {
                var t = e.props.activeSkinTone
                return C.a.createElement(Be, {
                  accessibilityLabel: V.f.skintext,
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
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showPalette,
                    t = this.props.style
                  return C.a.createElement(T.a, { style: t }, e ? this._renderPalette() : this._renderCurrentSkinTone())
                },
              },
            ]),
            n
          )
        })(C.a.Component),
        Ne = I.a.create(function (e) {
          return { palette: { flexDirection: 'row' }, skinToneOption: { paddingHorizontal: e.spaces.space2 } }
        }),
        Ke = Ue,
        Ve = n('r728'),
        We = n('Qyxo'),
        Ge = n('Iok7'),
        Je = 'emojiPicker2',
        qe = [V.a.Search, V.a.Recent],
        Ye = 'emoji_picker_categories_dom_id',
        Ze = (function (e) {
          y()(n, e)
          var t = w()(n)
          function n(e) {
            var o
            f()(this, n),
              (o = t.call(this, e)),
              S()(p()(o), '_categoryRefs', {}),
              S()(p()(o), '_scrollRef', C.a.createRef()),
              S()(p()(o), '_searchRef', C.a.createRef()),
              S()(p()(o), '_selectedEmojis', []),
              S()(p()(o), '_shouldScrollToFocusedItem', !0),
              S()(p()(o), '_shouldUpdateScrollPosition', !1),
              S()(p()(o), '_renderAnchors', function (e) {
                var t = o.state,
                  n = t.activeCategory,
                  r = t.query
                return C.a.createElement(z, {
                  activeCategory: r ? void 0 : n,
                  categories: e,
                  disableAll: !!r,
                  emojiData: o._uncompressedData.emojis,
                  onAnchorClick: o._handleAnchorClick,
                })
              }),
              S()(p()(o), '_renderSearch', function () {
                return C.a.createElement(He, {
                  ariaActiveDescendant: o.state.ariaDescendantId,
                  autoFocus: !0,
                  categoriesDomId: Ye,
                  data: o._uncompressedData,
                  onSearch: o._handleSearch,
                  ref: o._searchRef,
                })
              }),
              S()(p()(o), '_renderCategories', function (e) {
                var t = o.props,
                  n = t.rowSize,
                  r = t.spriteUrl,
                  i = o.state,
                  a = i.activeCategory,
                  s = i.activeSkinTone,
                  c = i.ariaDescendantId,
                  l = i.focusCategoryId,
                  d = i.focusItem,
                  f = i.query
                return C.a.createElement(
                  Ge.a,
                  {
                    accessibilityRole: 'listbox',
                    nativeID: Ye,
                    onMouseLeave: o._handleClearPreview,
                    onScroll: o._handleScroll,
                    ref: o._scrollRef,
                    scrollEventThrottle: 100,
                    style: Xe.categoriesContainer,
                  },
                  e.map(function (e, t) {
                    var i = l === e.id,
                      h = a && a.id === e.id,
                      m = {
                        activeSkinTone: s,
                        ariaDescendantId: i ? c : void 0,
                        data: o._uncompressedData,
                        emojiIDs: e.emojis,
                        focusedEmojiId: i ? d : void 0,
                        id: e.id,
                        isActiveCategory: h,
                        name: e.name,
                        onEmojiFocus: o._handleEmojiPreview,
                        onEmojiHover: o._handleEmojiPreview,
                        onFocusedEmojiRef: i ? o._handleFocusedItemRef : void 0,
                        onSelect: o._handleSelect,
                        onStickyHeaderRef: h ? o._handleStickyHeaderRef : void 0,
                        rowSize: n,
                        spriteUrl: r,
                      }
                    return (
                      e.id === V.a.Recent &&
                        (m.headerButton = C.a.createElement(
                          B.a,
                          {
                            accessibilityLabel: V.f.clear,
                            onPress: o._handleClearRecent,
                            size: 'xSmall',
                            type: 'brandText',
                          },
                          V.f.clear,
                        )),
                      e.id === V.a.Search && (m.withEmptyState = !e.emojis.length && !!f),
                      C.a.createElement(
                        me,
                        u()({}, m, { key: e.name, ref: o._setCategoryRef('category-'.concat(e.id)) }),
                      )
                    )
                  }),
                )
              }),
              S()(p()(o), '_scrollEmojiIntoViewIfNeeded', function () {
                o._shouldScrollToFocusedItem &&
                  o._focusedItemRef &&
                  (Object(re.e)(o._getScrollParent(), o._focusedItemRef, o._getStickyHeaderOffset()),
                  (o._shouldScrollToFocusedItem = !1))
              }),
              S()(p()(o), '_handleStickyHeaderRef', function (e) {
                ;(o._stickyHeaderRef = e), (o._stickyHeaderHeight = void 0), (o._shouldScrollToFocusedItem = !0)
              }),
              S()(p()(o), '_handleFocusedItemRef', function (e) {
                ;(o._focusedItemRef = e), o._scrollEmojiIntoViewIfNeeded()
              }),
              S()(p()(o), '_getStickyHeaderOffset', function () {
                if (void 0 === o._stickyHeaderHeight) {
                  var e = o._stickyHeaderRef
                  if (e) {
                    var t = e.getBoundingClientRect().height
                    o._stickyHeaderHeight = t
                  }
                }
                return o._stickyHeaderHeight || 0
              }),
              S()(p()(o), '_handleSkinToneSelect', function (e) {
                o.setState({ activeSkinTone: e, previewSkinTone: void 0, withDescription: !0 }), o._focusSearch()
              }),
              S()(p()(o), '_handleSkinTonePreview', function (e) {
                o.setState({ previewSkinTone: e, withDescription: !1 })
              }),
              S()(p()(o), '_renderPreview', function () {
                var e = o.state,
                  t = e.activeSkinTone,
                  n = e.previewEmoji,
                  r = e.previewSkinTone,
                  i = n || o._defaultPreviewEmoji,
                  a = r || t
                return C.a.createElement(B.a, {
                  accessibilityLabel: i.name,
                  icon: C.a.createElement(L.a, { emoji: i, skinTone: a, style: Xe.twemoji }),
                  onClick: o._handlePreviewClick,
                  type: 'brandText',
                })
              }),
              S()(p()(o), '_handlePreviewClick', function () {
                var e = o.state.previewEmoji || o._defaultPreviewEmoji
                o._handleSelect(e)
              }),
              S()(p()(o), '_renderEmojiDescription', function () {
                var e = o.state.previewEmoji
                return e
                  ? C.a.createElement(
                      A.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        numberOfLines: 1,
                        size: 'subtext2',
                        style: Xe.emojiDescription,
                      },
                      e.name,
                    )
                  : null
              }),
              S()(p()(o), '_renderFooter', function () {
                var e = o.state.withDescription
                return C.a.createElement(
                  T.a,
                  { style: Xe.footer },
                  o._renderPreview(),
                  e ? o._renderEmojiDescription() : null,
                  C.a.createElement(Ke, {
                    activeSkinTone: o.state.activeSkinTone,
                    onPreview: o._handleSkinTonePreview,
                    onSelect: o._handleSkinToneSelect,
                    style: Xe.skinTonePicker,
                  }),
                )
              }),
              S()(p()(o), '_setCategoryRef', function (e) {
                return function (t) {
                  t && (o._categoryRefs[e] = t)
                }
              }),
              S()(p()(o), '_handleKeyDown', function (e) {
                var t = e.key,
                  n = e.altKey,
                  r = e.ctrlKey,
                  i = e.metaKey,
                  a = o.state,
                  s = a.focusCategoryId,
                  c = a.focusCol,
                  l = a.focusItem,
                  u = { focusRow: a.focusRow, focusCol: c, focusCategoryId: s }
                if (!(n || r || i))
                  return t === R.a.ArrowDown
                    ? (o._updateFocus(o._focusHelper.focusNextRow(u)), void e.preventDefault())
                    : t === R.a.ArrowUp
                    ? (o._updateFocus(o._focusHelper.focusPreviousRow(u)), void e.preventDefault())
                    : t === R.a.ArrowRight
                    ? (o._updateFocus(o._focusHelper.focusNextColumn(u)), void e.preventDefault())
                    : t === R.a.ArrowLeft
                    ? (o._updateFocus(o._focusHelper.focusPreviousColumn(u)), void e.preventDefault())
                    : t === R.a.Enter && l
                    ? (o._handleSelect(o._uncompressedData.emojis[l]), void e.preventDefault())
                    : void 0
              }),
              S()(p()(o), '_updateFocus', function (e) {
                var t = o.state,
                  n = t.ariaDescendantId,
                  r = t.focusItem !== e.focusItem
                ;(o._shouldScrollToFocusedItem = r),
                  o.setState(c()(c()({}, e), {}, { ariaDescendantId: r ? Object(re.a)() : n }))
              }),
              S()(p()(o), '_handleScroll', function () {
                o._updateActiveCategory()
              }),
              S()(p()(o), '_handleSearch', function (e, t) {
                var n = t
                  ? t.map(function (e) {
                      return e.unified
                    })
                  : []
                Object(Se.a)(o._categoryRefs).forEach(function (t) {
                  t && 'search' !== t.props.id && t.updateDisplay(!e)
                }),
                  o.setState({ searchResults: n, query: e }),
                  o._scrollTo(0)
              }),
              S()(p()(o), '_handleSelect', function (e) {
                var t = o.props.onSelect,
                  n = o.state.activeSkinTone,
                  r = Object(re.d)(e, n)
                t && t(r)
                for (var i = [], a = o._selectedEmojis.length; a >= 0; a--) {
                  var s = a === o._selectedEmojis.length ? e.unified : o._selectedEmojis[a]
                  i.indexOf(s) < 0 && i.push(s)
                }
                o._selectedEmojis = i.reverse()
              }),
              S()(p()(o), '_handleClearRecent', function (e) {
                ;(o._selectedEmojis = []),
                  o.setState({ recentlyUsed: [], activeCategory: o._staticCategories()[0] }, function () {
                    o._shouldUpdateScrollPosition = !0
                  })
              }),
              S()(p()(o), '_getActiveCategory', function () {
                var e = o._scrollRef.current && Q.a.findDOMNode(o._scrollRef.current),
                  t = o.state.activeCategory
                if (e && e instanceof window.HTMLElement)
                  for (var n = e.scrollTop, r = 0; r < o._categories.length; r++) {
                    var i = o._categories[r],
                      a = o._categoryRefs['category-'.concat(i.id)]
                    if (a && n >= a.getTop() && n < a.getBottom()) {
                      t = i
                      break
                    }
                  }
                return t
              }),
              S()(p()(o), '_updateActiveCategory', function () {
                var e = o._getActiveCategory()
                e !== o.state.activeCategory && o.setState({ activeCategory: e })
              }),
              S()(p()(o), '_getUpdatedRecentlyUsedEmojiList', function () {
                var e = o.state.recentlyUsed,
                  t = o.props.rowSize
                if (0 === o._selectedEmojis.length) return e
                var n = -2 * t
                return []
                  .concat(
                    a()(
                      e.filter(function (e) {
                        return o._selectedEmojis.indexOf(e) < 0
                      }),
                    ),
                    a()(o._selectedEmojis),
                  )
                  .slice(n)
              }),
              S()(p()(o), '_handleClearPreview', function () {
                o.state.previewEmoji && o.setState({ previewEmoji: void 0 })
              }),
              S()(p()(o), '_handleEmojiPreview', function (e) {
                e !== o.state.previewEmoji && o.setState({ previewEmoji: e })
              }),
              S()(p()(o), '_handleAnchorClick', function (e) {
                o._shouldUpdateScrollPosition &&
                  ((o._shouldUpdateScrollPosition = !1),
                  Object(Se.a)(o._categoryRefs).forEach(function (e) {
                    return e.updatePosition()
                  }))
                var t = o._categoryRefs['category-'.concat(e.id)]
                0 !== e.emojis.length &&
                  (o.setState({ activeCategory: e }),
                  t && o._scrollTo(t.getTop() + 1),
                  o.state.focusItem && o._updateFocus(o._focusHelper.focusCategory(e.id))),
                  o._focusSearch()
              }),
              S()(p()(o), '_focusSearch', function () {
                o._searchRef.current && o._searchRef.current.focus()
              }),
              S()(p()(o), '_scrollTo', function (e) {
                o._scrollRef.current && o._scrollRef.current.scrollTo({ y: e, animated: !1 })
              }),
              S()(p()(o), '_staticCategories', function () {
                return o._categories.filter(function (e) {
                  return -1 === qe.indexOf(e.id)
                })
              })
            var r = o.props.emojiInfo
            return (
              (o._uncompressedData = Object(Ve.a)(r || {})),
              (o._categories = o._uncompressedData.categories),
              (o._searchCategoryInitialValue = {
                anchorless: !0,
                id: V.a.Search,
                name: V.f.searchCategoryName,
                emojis: [],
              }),
              (o._recentlyUsedCategoryInitialValue = { id: V.a.Recent, name: V.f.recentCategoryName, emojis: [] }),
              (o._defaultPreviewEmoji = o._uncompressedData.emojis[o.props.previewEmojiCodepoint]),
              o._categories.unshift(o._recentlyUsedCategoryInitialValue),
              (o._focusHelper = new we(o._categories, o._uncompressedData.emojis, e.rowSize)),
              (o.state = {
                activeCategory: o._categories[1],
                activeSkinTone: V.e[e.defaultSkinTone],
                ariaDescendantId: Object(re.a)(),
                categories: [o._searchCategoryInitialValue].concat(a()(o._categories)),
                focusRow: -1,
                focusCol: -1,
                recentlyUsed: [],
                previewSkinTone: void 0,
                query: '',
                searchResults: [],
                withDescription: !0,
              }),
              o
            )
          }
          return (
            m()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  U.a.set(Je, {
                    recentlyUsed: this._getUpdatedRecentlyUsedEmojiList(),
                    activeSkinToneId: this.state.activeSkinTone.id,
                  })
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  U.a.get(Je).then(function (t) {
                    if (t && 'object' === r()(t)) {
                      var n = t.recentlyUsed,
                        o = void 0 === n ? [] : n,
                        i = t.activeSkinToneId,
                        a = 'string' == typeof i && V.e[i],
                        s = Object.assign(
                          {},
                          {
                            recentlyUsed: Array.isArray(o)
                              ? Object(We.a)(o, function (e) {
                                  return 'string' == typeof e ? e : void 0
                                })
                              : [],
                            activeCategory: e._categories[1],
                          },
                          a ? { activeSkinTone: a } : {},
                        )
                      e.setState(s), (e._shouldUpdateScrollPosition = !0)
                    }
                  })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.state,
                    o = n.categories,
                    r = n.recentlyUsed,
                    i = n.searchResults,
                    s = this.props.rowSize
                  if (t.searchResults !== i || t.recentlyUsed !== r) {
                    var l = c()(c()({}, this._searchCategoryInitialValue), {}, { emojis: i }),
                      u = c()(
                        c()({}, this._recentlyUsedCategoryInitialValue),
                        {},
                        { emojis: r.length ? a()(r).reverse() : [] },
                      )
                    this.setState({
                      activeCategory: this._getActiveCategory(),
                      categories: [l, u].concat(this._staticCategories()),
                      focusCategoryId: void 0,
                      focusCol: -1,
                      focusRow: -1,
                      focusItem: void 0,
                    })
                  }
                  ;(t.categories === o && e.rowSize === s) ||
                    (this._focusHelper = new we(o, this._uncompressedData.emojis, s))
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Q.a.findDOMNode(this._scrollRef.current)
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
                    o = t.searchResults,
                    r = c()(c()({}, this._searchCategoryInitialValue), {}, { emojis: o }),
                    i = c()(
                      c()({}, this._recentlyUsedCategoryInitialValue),
                      {},
                      { emojis: n.length ? a()(n).reverse() : [] },
                    ),
                    s = this._staticCategories(),
                    l = [r, i].concat(s),
                    u = [r, i, s[0]]
                  return C.a.createElement(
                    ke.a,
                    { onKeyDown: this._handleKeyDown, style: Xe.root },
                    C.a.createElement(te, { style: Xe.searchSection }, this._renderSearch()),
                    C.a.createElement(te, { style: Xe.anchorsSection }, this._renderAnchors(l)),
                    this._renderCategories(e ? u : l),
                    C.a.createElement(te, { style: Xe.footerContainer, withTopBorder: !0 }, this._renderFooter()),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      S()(Ze, 'defaultProps', {
        defaultSkinTone: V.d.None,
        partialRender: !1,
        previewEmojiCodepoint: '👋',
        rowSize: V.b,
      })
      var Xe = I.a.create(function (e) {
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
      t.a = Ze
    },
    r728: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('jwue'), n('7x/C'), n('+oxZ'), n('KqXw'), n('Ysgh'), n('vrRf'), n('ho0z'), n('7xRU'), n('0zG9'), n('LJOr')
      var o = n('iChn'),
        r = { name: 'a', keywords: 'j', sprite_position: 'k', skin_variations: 'l' },
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
        s = function (e, t) {
          for (var n in t) (e[n] = e[t[n]]), delete e[t[n]]
        },
        c = function (e) {
          var t = JSON.parse(JSON.stringify(e))
          for (var n in ((t.compressed = !1), t.emojis)) {
            var c = t.emojis[n]
            s(c, r),
              (c.id = n),
              (c.unified = n),
              (c.short_names = [n]),
              c.text || (c.text = ''),
              (c.search = a(c)),
              c.skin_variations &&
                (c.skin_variations.forEach(function (e) {
                  s(e, i)
                }),
                (c.skin_variations = Object(o.a)(c.skin_variations, function (e) {
                  for (var t = e.skin_tone, n = t[0], o = 1; o < t.length; o++) n += '+'.concat(t[o])
                  return n
                })))
          }
          return t
        }
    },
  },
])
//# sourceMappingURL=WIPED
