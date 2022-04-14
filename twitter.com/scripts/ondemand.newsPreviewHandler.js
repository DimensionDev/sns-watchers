;(window.webpackJsonp = window.webpackJsonp || []).push([
  [354],
  {
    '0mK8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'c', function () {
          return g
        })
      n('ho0z'), n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('MWbm'),
        o = n('GcQN'),
        c = n('PU7B'),
        l = n('/WPq'),
        s = n('78ol'),
        d = n('jV+4'),
        u = n('rHpw'),
        m = function (e) {
          var t = e.author,
            n = e.color,
            r = void 0 === n ? 'text' : n,
            i = e.size,
            o = void 0 === i ? 'subtext2' : i,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            u = e.withLink,
            m = void 0 !== u && u,
            p = e.withScreenName,
            g = void 0 !== p && p
          return a.a.createElement(d.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: r,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [h.authorUserName, c],
            withHoverCard: s,
            withLink: m,
            withScreenName: g,
          })
        },
        p = function (e) {
          var t = e.style
          return a.a.createElement(
            i.a,
            { style: [h.lightningBadge, t] },
            a.a.createElement(o.a, { style: h.lightningIcon }),
          )
        },
        g = function (e) {
          var t = e.icon
          return a.a.createElement(
            i.a,
            { style: h.placeholderIconContainer },
            'news' === t
              ? a.a.createElement(c.a, { style: h.placeholderIcon })
              : 'lists' === t
              ? a.a.createElement(l.a, { style: h.placeholderIcon })
              : a.a.createElement(s.a, { style: h.placeholderIcon }),
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
    '8/3a': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y')
      var r = n('0mK8'),
        a = n('ERkP'),
        i = n.n(a),
        o = (n('jQ3i'), n('x4t0'), n('tVqn'), n('z84I'), n('3XMw')),
        c = n.n(o),
        l = n('caTy'),
        s = n('MWbm'),
        d = n('rHpw'),
        u = n('t62R'),
        m = n('yrzJ'),
        p = n('XrEN'),
        g = n('Q0VY'),
        h = n('FiRh'),
        b = d.a.create(function (e) {
          return { description: { marginTop: e.spaces.space12 } }
        }),
        v = function (e, t, n) {
          return n && !p.a.VIDEO_TYPES.includes(t)
            ? (function (e) {
                var t,
                  n = e.url ? (null === (t = Object(l.a)(e.url)) || void 0 === t ? void 0 : t.pathname) : void 0
                return i.a.createElement(u.b, { color: 'gray700', link: n }, e.text)
              })(n)
            : e && p.a.VIDEO_TYPES.includes(t)
            ? (function (e, t) {
                return i.a.createElement(
                  u.b,
                  { color: 'gray700', link: e.permalink },
                  f(t, { screenName: i.a.createElement(m.a, { screenName: e.user.screen_name }) }),
                )
              })(e, t)
            : null
        },
        f = function (e, t) {
          switch (e) {
            case 'animated_gif':
              return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a5d9d070' }, t.screenName)
            case 'video':
            case 'vine':
              return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'i9606e32' }, t.screenName)
            default:
              return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'i1a64d47' }, t.screenName)
          }
        },
        y = function (e) {
          var t = e.coverTweet,
            n = e.description,
            r = e.descriptionEntities,
            a = e.imageAttribution,
            o = e.mediaType,
            c = e.pivotText,
            l = n ? n.trim() : void 0,
            d = r
              ? {
                  description: {
                    urls: r.map(function (e) {
                      return { display_url: e.displayUrl, expanded_url: e.expandedUrl, url: e.url, indices: e.indices }
                    }),
                  },
                }
              : void 0,
            m = l ? g.a.descriptionTextParts(l, d) : []
          return i.a.createElement(
            s.a,
            { style: b.description },
            m.length
              ? i.a.createElement(
                  u.b,
                  null,
                  m.map(function (e, t) {
                    return i.a.createElement(h.b, { key: 'events_textpart_'.concat(t), linkify: !0, part: e })
                  }),
                )
              : null,
            v(t, o, a),
            c ? i.a.createElement(u.b, { color: 'gray700' }, c) : null,
          )
        },
        E = n('pjBI'),
        w = d.a.create(function (e) {
          return {
            title: { alignItems: 'center', flexDirection: 'row', paddingTop: e.spaces.space4 },
            timeString: { flexShrink: 0 },
            timeStringMargin: { marginTop: e.spaces.space12 },
            remindMeButton: { marginTop: e.spaces.space12 },
          }
        })
      t.a = function (e) {
        var t = e.author,
          n = e.coverTweet,
          a = e.description,
          o = e.descriptionEntities,
          c = e.imageAttribution,
          l = e.isTOO,
          d = e.mediaType,
          m = e.pivotText,
          p = e.preTitle,
          g = e.remindMeButton,
          h = e.time,
          b = e.title,
          v = e.withHashflags,
          f = function () {
            return t
              ? i.a.createElement(
                  s.a,
                  null,
                  i.a.createElement(r.a, { author: t, size: 'body', withLink: !0, withScreenName: !0 }),
                  h ? T(!0) : null,
                )
              : null
          },
          T = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return i.a.createElement(
              u.b,
              { color: 'gray700', numberOfLines: 1, size: 'body', style: [w.timeString, e && w.timeStringMargin] },
              h,
            )
          },
          k = function () {
            return p
              ? i.a.createElement(
                  E.a,
                  null,
                  i.a.createElement(u.b, { color: 'gray700', numberOfLines: 1, size: 'body', weight: 'bold' }, p),
                  h ? T() : null,
                )
              : null
          }
        return i.a.createElement(
          i.a.Fragment,
          null,
          l && p ? k() : f() || k(),
          i.a.createElement(u.b, { dir: 'auto', size: 'title4', style: w.title, weight: 'heavy', withHashflags: v }, b),
          a || n || c
            ? i.a.createElement(y, {
                coverTweet: n,
                description: a,
                descriptionEntities: o,
                imageAttribution: c,
                mediaType: d,
                pivotText: m,
              })
            : null,
          g ? i.a.createElement(s.a, { style: w.remindMeButton }, g) : null,
        )
      }
    },
    hX2d: function (e, t, n) {
      'use strict'
      n.r(t)
      n('1t7P'), n('jQ/y')
      var r = n('tPQo'),
        a = (n('hBvt'), n('0mK8')),
        i = n('ERkP'),
        o = n.n(i),
        c = n('8/3a'),
        l = n('MWbm'),
        s = n('htQn'),
        d = n('9Xij'),
        u = n('TIdA'),
        m = n('A91F'),
        p = n('rHpw').a.create(function (e) {
          return {
            contentContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            coverContainer: { backgroundColor: e.colors.gray200, height: '100%', overflow: 'hidden', width: '100%' },
          }
        }),
        g = function (e) {
          var t = e.author,
            n = e.description,
            r = e.link,
            i = e.onClick,
            g = e.originalImage,
            h = e.pivotText,
            b = e.title
          return o.a.createElement(
            s.a,
            { link: r, onClick: i },
            o.a.createElement(
              l.a,
              { style: p.coverContainer },
              o.a.createElement(
                d.a,
                { ratio: 16 / 9 },
                g
                  ? o.a.createElement(u.a, { accessibilityLabel: '', aspectMode: m.a.COVER, image: g })
                  : o.a.createElement(a.c, { icon: 'news' }),
              ),
            ),
            o.a.createElement(
              l.a,
              { style: p.contentContainer },
              o.a.createElement(c.a, { description: n, pivotText: h, preTitle: t, title: b }),
            ),
          )
        }
      t.default = Object(r.a)(g, function (e) {
        var t = e.content
        return { description: t.description, pivotText: t.pivotText }
      })
    },
    tPQo: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ezF+'),
        o = n('VPAj'),
        c = n('caTy'),
        l = n('zh9S'),
        s = n('P1r1')
      t.a = function (e, t) {
        return i.g({
          isFocusable: Object(o.a)(!0),
          component: e,
          bindActions: Object(o.a)({ scribe: l.scribeAction }),
          selectData: function () {
            return { dataSaverMode: s.j }
          },
          createProps: function (e) {
            var n = e.actions.scribe,
              r = e.data.dataSaverMode,
              i = e.entry,
              o = e.scribeNamespace,
              l = i.content,
              s = l.landingUrl && Object(c.b)(l.landingUrl),
              d = t({ content: l }),
              u = {
                author: l.author,
                link: s,
                originalImage: r ? void 0 : l.originalImage,
                onClick: function () {
                  n(a()(a()({}, o), {}, { action: 'click' }), void 0)
                },
                title: l.title,
              }
            return a()(a()({}, u), d)
          },
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
