;(window.webpackJsonp = window.webpackJsonp || []).push([
  [339],
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
          return p
        })
      r('ho0z'), r('uFXj')
      var n = r('ERkP'),
        i = r('MWbm'),
        a = r('GcQN'),
        o = r('PU7B'),
        c = r('/WPq'),
        l = r('78ol'),
        s = r('jV+4'),
        u = r('rHpw'),
        d = function (e) {
          var t = e.author,
            r = e.color,
            i = void 0 === r ? 'normal' : r,
            a = e.size,
            o = void 0 === a ? 'subtext2' : a,
            c = e.style,
            l = e.withHoverCard,
            u = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            b = void 0 !== p && p
          return n.createElement(s.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: i,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [g.authorUserName, c],
            withHoverCard: u,
            withLink: m,
            withScreenName: b,
          })
        },
        m = function (e) {
          var t = e.style
          return n.createElement(
            i.a,
            { style: [g.lightningBadge, t] },
            n.createElement(a.a, { style: g.lightningIcon }),
          )
        },
        p = function (e) {
          var t = e.icon
          return n.createElement(
            i.a,
            { style: g.placeholderIconContainer },
            'news' === t
              ? n.createElement(o.a, { style: g.placeholderIcon })
              : 'lists' === t
              ? n.createElement(c.a, { style: g.placeholderIcon })
              : n.createElement(l.a, { style: g.placeholderIcon }),
          )
        },
        g = u.a.create(function (e) {
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
    '8/3a': function (e, t, r) {
      'use strict'
      r('1t7P'), r('jQ/y')
      var n = r('0mK8'),
        i = r('ERkP'),
        a = (r('jQ3i'), r('x4t0'), r('tVqn'), r('z84I'), r('3XMw')),
        o = r.n(a),
        c = r('caTy'),
        l = r('MWbm'),
        s = r('rHpw'),
        u = r('t62R'),
        d = r('yrzJ'),
        m = r('XrEN'),
        p = r('Q0VY'),
        g = r('FiRh'),
        b = s.a.create(function (e) {
          return { description: { marginTop: e.spaces.space12 } }
        }),
        h = function (e, t, r) {
          return r && !m.a.VIDEO_TYPES.includes(t)
            ? (function (e) {
                var t,
                  r = e.url ? (null === (t = Object(c.a)(e.url)) || void 0 === t ? void 0 : t.pathname) : void 0
                return i.createElement(u.b, { color: 'gray700', link: r }, e.text)
              })(r)
            : e && m.a.VIDEO_TYPES.includes(t)
            ? (function (e, t) {
                return i.createElement(
                  u.b,
                  { color: 'gray700', link: e.permalink },
                  f(t, { screenName: i.createElement(d.a, { screenName: e.user.screen_name }) }),
                )
              })(e, t)
            : null
        },
        f = function (e, t) {
          switch (e) {
            case 'animated_gif':
              return i.createElement(o.a.I18NFormatMessage, { $i18n: 'a5d9d070' }, t.screenName)
            case 'video':
            case 'vine':
              return i.createElement(o.a.I18NFormatMessage, { $i18n: 'i9606e32' }, t.screenName)
            default:
              return i.createElement(o.a.I18NFormatMessage, { $i18n: 'i1a64d47' }, t.screenName)
          }
        },
        v = function (e) {
          var t = e.coverTweet,
            r = e.description,
            n = e.imageAttribution,
            a = e.mediaType,
            o = e.pivotText,
            c = r ? r.trim() : void 0,
            s = c ? p.a.descriptionTextParts(c) : []
          return i.createElement(
            l.a,
            { style: b.description },
            s.length
              ? i.createElement(
                  u.b,
                  null,
                  s.map(function (e, t) {
                    return i.createElement(g.b, { key: 'events_textpart_'.concat(t), linkify: !0, part: e })
                  }),
                )
              : null,
            h(t, a, n),
            o ? i.createElement(u.b, { color: 'gray700' }, o) : null,
          )
        },
        y = r('pjBI'),
        E = s.a.create(function (e) {
          return {
            title: { alignItems: 'center', flexDirection: 'row', paddingTop: e.spaces.space4 },
            timeString: { flexShrink: 0 },
            timeStringMargin: { marginTop: e.spaces.space12 },
            remindMeButton: { marginTop: e.spaces.space12 },
          }
        })
      t.a = function (e) {
        var t = e.author,
          r = e.coverTweet,
          a = e.description,
          o = e.imageAttribution,
          c = e.isTOO,
          s = e.mediaType,
          d = e.pivotText,
          m = e.preTitle,
          p = e.remindMeButton,
          g = e.time,
          b = e.title,
          h = e.withHashflags,
          f = function () {
            return t
              ? i.createElement(
                  l.a,
                  null,
                  i.createElement(n.a, { author: t, size: 'body', withLink: !0, withScreenName: !0 }),
                  g ? w(!0) : null,
                )
              : null
          },
          w = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return i.createElement(
              u.b,
              { color: 'gray700', numberOfLines: 1, size: 'body', style: [E.timeString, e && E.timeStringMargin] },
              g,
            )
          },
          O = function () {
            return m
              ? i.createElement(
                  y.a,
                  null,
                  i.createElement(u.b, { color: 'gray700', numberOfLines: 1, size: 'body', weight: 'bold' }, m),
                  g ? w() : null,
                )
              : null
          }
        return i.createElement(
          i.Fragment,
          null,
          c && m ? O() : f() || O(),
          i.createElement(u.b, { dir: 'auto', size: 'title4', style: E.title, weight: 'heavy', withHashflags: h }, b),
          a || r || o
            ? i.createElement(v, { coverTweet: r, description: a, imageAttribution: o, mediaType: s, pivotText: d })
            : null,
          p ? i.createElement(l.a, { style: E.remindMeButton }, p) : null,
        )
      }
    },
    hX2d: function (e, t, r) {
      'use strict'
      r.r(t)
      r('1t7P'), r('jQ/y')
      var n = r('tPQo'),
        i = (r('hBvt'), r('0mK8')),
        a = r('ERkP'),
        o = r('8/3a'),
        c = r('MWbm'),
        l = r('htQn'),
        s = r('9Xij'),
        u = r('TIdA'),
        d = r('A91F'),
        m = r('rHpw').a.create(function (e) {
          return {
            contentContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            coverContainer: { backgroundColor: e.colors.gray200, height: '100%', overflow: 'hidden', width: '100%' },
          }
        }),
        p = function (e) {
          var t = e.author,
            r = e.description,
            n = e.link,
            p = e.onClick,
            g = e.originalImage,
            b = e.pivotText,
            h = e.title
          return a.createElement(
            l.a,
            { link: n, onClick: p },
            a.createElement(
              c.a,
              { style: m.coverContainer },
              a.createElement(
                s.a,
                { ratio: 16 / 9 },
                g
                  ? a.createElement(u.a, { accessibilityLabel: '', aspectMode: d.a.COVER, image: g })
                  : a.createElement(i.c, { icon: 'news' }),
              ),
            ),
            a.createElement(
              c.a,
              { style: m.contentContainer },
              a.createElement(o.a, { description: r, pivotText: b, preTitle: t, title: h }),
            ),
          )
        }
      t.default = Object(n.a)(p, function (e) {
        var t = e.content
        return { description: t.description, pivotText: t.pivotText }
      })
    },
    tPQo: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        i = r.n(n),
        a = r('ezF+'),
        o = r('VPAj'),
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
                i()(e, t, r[t])
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
          isFocusable: Object(o.a)(!0),
          component: e,
          bindActions: Object(o.a)({ scribe: l.c }),
          selectData: function () {
            return { dataSaverMode: s.k }
          },
          createProps: function (e) {
            var r = e.actions.scribe,
              n = e.data.dataSaverMode,
              i = e.entry,
              a = e.scribeNamespace,
              o = i.content,
              l = o.landingUrl && Object(c.b)(o.landingUrl),
              s = t({ content: o }),
              u = {
                author: o.author,
                link: l,
                originalImage: n ? void 0 : o.originalImage,
                onClick: function () {
                  r(d(d({}, a), {}, { action: 'click' }), void 0)
                },
                title: o.title,
              }
            return d(d({}, u), s)
          },
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
