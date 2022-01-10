;(window.webpackJsonp = window.webpackJsonp || []).push([
  [330],
  {
    '0mK8': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return d
      }),
        r.d(t, 'b', function () {
          return m
        }),
        r.d(t, 'c', function () {
          return g
        })
      r('ho0z'), r('uFXj')
      var n = r('ERkP'),
        o = r('MWbm'),
        a = r('GcQN'),
        i = r('PU7B'),
        c = r('/WPq'),
        l = r('78ol'),
        s = r('jV+4'),
        u = r('rHpw'),
        d = function (e) {
          var t = e.author,
            r = e.color,
            o = void 0 === r ? 'normal' : r,
            a = e.size,
            i = void 0 === a ? 'subtext2' : a,
            c = e.style,
            l = e.withHoverCard,
            u = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            g = e.withScreenName,
            f = void 0 !== g && g
          return n.createElement(s.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[i],
            color: o,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: i,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: i,
            style: [h.authorUserName, c],
            withHoverCard: u,
            withLink: m,
            withScreenName: f,
          })
        },
        m = function (e) {
          var t = e.style
          return n.createElement(
            o.a,
            { style: [h.lightningBadge, t] },
            n.createElement(a.a, { style: h.lightningIcon }),
          )
        },
        g = function (e) {
          var t = e.icon
          return n.createElement(
            o.a,
            { style: h.placeholderIconContainer },
            'news' === t
              ? n.createElement(i.a, { style: h.placeholderIcon })
              : 'lists' === t
              ? n.createElement(c.a, { style: h.placeholderIcon })
              : n.createElement(l.a, { style: h.placeholderIcon }),
          )
        },
        h = u.a.create(function (e) {
          return {
            authorUserName: { alignItems: 'center' },
            lightningBadge: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: e.borderRadii.small,
              position: 'absolute',
            },
            lightningIcon: {
              boxSizing: 'border-box',
              color: e.colors.white,
              height: e.spaces.space20,
              paddingVertical: '0.25rem',
              paddingHorizontal: '0.2rem',
            },
            middot: { paddingHorizontal: e.spaces.space4 },
            placeholderIcon: { color: e.colors.gray700, height: '2em' },
            placeholderIconContainer: {
              alignItems: 'center',
              borderWidth: e.borderWidths.small,
              borderStyle: 'solid',
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.xLarge,
              backgroundColor: e.colors.gray0,
              height: '100%',
              justifyContent: 'center',
            },
          }
        })
    },
    'a+ad': function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('tPQo'),
        o = (r('hBvt'), r('0mK8')),
        a = r('ERkP'),
        i = r('zOwA'),
        c = r('MWbm'),
        l = r('htQn'),
        s = r('t62R'),
        u = r('9Xij'),
        d = r('TIdA'),
        m = r('A91F'),
        g = r('rHpw'),
        h = '100px',
        f = '70px',
        b = g.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            coverImage: { height: '100%', width: '100%' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.xLarge,
              height: '15%',
              maxHeight: h,
              maxWidth: h,
              minHeight: f,
              minWidth: f,
              overflow: 'hidden',
              width: '15%',
            },
            details: { flex: 1, marginRight: e.spaces.space12 },
            title: { marginHorizontal: 0, marginVertical: e.spaces.space2 },
          }
        }),
        p = function (e) {
          var t = e.author,
            r = e.contextImage,
            n = e.contextLabel,
            g = e.link,
            h = e.onClick,
            f = e.originalImage,
            p = e.title
          return a.createElement(
            l.a,
            { link: g, onClick: h, style: b.root },
            a.createElement(
              c.a,
              { style: b.details },
              a.createElement(s.b, { color: 'gray700', size: 'subtext2' }, t),
              a.createElement(s.b, { style: b.title, weight: 'bold' }, p),
              n ? a.createElement(i.a, { image: r, label: n, textSize: 'subtext2' }) : null,
            ),
            a.createElement(
              c.a,
              { style: b.coverContainer },
              a.createElement(
                u.a,
                { ratio: 1 },
                f
                  ? a.createElement(d.a, { accessibilityLabel: '', aspectMode: m.a.SQUARE, image: f })
                  : a.createElement(o.c, { icon: 'news' }),
              ),
            ),
          )
        }
      t.default = Object(n.a)(p, function (e) {
        var t = e.content.socialProof,
          r = (t && t.generalContext) || void 0
        return { contextImage: r && r.contextImageUrls && r.contextImageUrls[0], contextLabel: r && r.text }
      })
    },
    tPQo: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ezF+'),
        i = r('VPAj'),
        c = r('caTy'),
        l = r('zh9S'),
        s = r('P1r1')
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      t.a = function (e, t) {
        return a.g({
          isFocusable: Object(i.a)(!0),
          component: e,
          bindActions: Object(i.a)({ scribe: l.c }),
          selectData: function () {
            return { dataSaverMode: s.k }
          },
          createProps: function (e) {
            var r = e.actions.scribe,
              n = e.data.dataSaverMode,
              o = e.entry,
              a = e.scribeNamespace,
              i = o.content,
              l = i.landingUrl && Object(c.b)(i.landingUrl),
              s = t({ content: i }),
              u = {
                author: i.author,
                link: l,
                originalImage: n ? void 0 : i.originalImage,
                onClick: function () {
                  r(d(d({}, a), {}, { action: 'click' }), void 0)
                },
                title: i.title,
              }
            return d(d({}, u), s)
          },
        })
      }
    },
    zOwA: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return E
      })
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('5Yy7'),
        l = r.n(c),
        s = r('N+ot'),
        u = r.n(s),
        d = r('AuHH'),
        m = r.n(d),
        g = r('KEM+'),
        h = r.n(g),
        f = r('ERkP'),
        b = r('9Xij'),
        p = r('t62R'),
        y = r('rHpw'),
        v = r('U+bB'),
        w = r('MWbm')
      function x(e) {
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
            n = m()(e)
          if (t) {
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var E = (function (e) {
        l()(r, e)
        var t = x(r)
        function r() {
          return o()(this, r), t.apply(this, arguments)
        }
        return (
          i()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.color,
                  r = e.image,
                  n = e.label,
                  o = e.textSize
                return f.createElement(
                  w.a,
                  { style: O.root },
                  r
                    ? f.createElement(
                        w.a,
                        { style: O.imageContainer },
                        f.createElement(b.a, { ratio: 1 }, f.createElement(v.a, { source: r, style: O.image })),
                      )
                    : null,
                  f.createElement(p.b, { color: t, size: o }, n),
                )
              },
            },
          ]),
          r
        )
      })(f.PureComponent)
      h()(E, 'defaultProps', { color: 'gray700', textSize: 'body' })
      var O = y.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          imageContainer: {
            alignSelf: 'flex-start',
            backgroundColor: e.colors.gray200,
            flexShrink: 0,
            height: e.fontSizes.headline1,
            marginRight: e.spaces.space4,
            width: e.fontSizes.headline1,
            borderRadius: e.borderRadii.infinite,
          },
          image: { height: '100%', width: '100%', borderRadius: e.borderRadii.infinite },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
