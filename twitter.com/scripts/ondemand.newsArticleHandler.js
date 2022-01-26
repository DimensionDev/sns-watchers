;(window.webpackJsonp = window.webpackJsonp || []).push([
  [337],
  {
    '0mK8': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
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
        d = r('rHpw'),
        u = function (e) {
          var t = e.author,
            r = e.color,
            o = void 0 === r ? 'normal' : r,
            a = e.size,
            i = void 0 === a ? 'subtext2' : a,
            c = e.style,
            l = e.withHoverCard,
            d = void 0 === l || l,
            u = e.withLink,
            m = void 0 !== u && u,
            g = e.withScreenName,
            h = void 0 !== g && g
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
            style: [b.authorUserName, c],
            withHoverCard: d,
            withLink: m,
            withScreenName: h,
          })
        },
        m = function (e) {
          var t = e.style
          return n.createElement(
            o.a,
            { style: [b.lightningBadge, t] },
            n.createElement(a.a, { style: b.lightningIcon }),
          )
        },
        g = function (e) {
          var t = e.icon
          return n.createElement(
            o.a,
            { style: b.placeholderIconContainer },
            'news' === t
              ? n.createElement(i.a, { style: b.placeholderIcon })
              : 'lists' === t
              ? n.createElement(c.a, { style: b.placeholderIcon })
              : n.createElement(l.a, { style: b.placeholderIcon }),
          )
        },
        b = d.a.create(function (e) {
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
        i = r('MWbm'),
        c = r('htQn'),
        l = r('t62R'),
        s = r('9Xij'),
        d = r('TIdA'),
        u = r('A91F'),
        m = r('rHpw'),
        g = '100px',
        b = '70px',
        h = m.a.create(function (e) {
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
              maxHeight: g,
              maxWidth: g,
              minHeight: b,
              minWidth: b,
              overflow: 'hidden',
              width: '15%',
            },
            details: { flex: 1, marginRight: e.spaces.space12 },
            title: { marginHorizontal: 0, marginVertical: e.spaces.space2 },
          }
        }),
        p = function (e) {
          var t = e.author,
            r = e.link,
            n = e.onClick,
            m = e.originalImage,
            g = e.title
          return a.createElement(
            c.a,
            { link: r, onClick: n, style: h.root },
            a.createElement(
              i.a,
              { style: h.details },
              a.createElement(l.b, { color: 'gray700', size: 'subtext2' }, t),
              a.createElement(l.b, { style: h.title, weight: 'bold' }, g),
            ),
            a.createElement(
              i.a,
              { style: h.coverContainer },
              a.createElement(
                s.a,
                { ratio: 1 },
                m
                  ? a.createElement(d.a, { accessibilityLabel: '', aspectMode: u.a.SQUARE, image: m })
                  : a.createElement(o.c, { icon: 'news' }),
              ),
            ),
          )
        }
      t.default = Object(n.a)(p, function () {})
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
      function d(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
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
              d = {
                author: i.author,
                link: l,
                originalImage: n ? void 0 : i.originalImage,
                onClick: function () {
                  r(u(u({}, a), {}, { action: 'click' }), void 0)
                },
                title: i.title,
              }
            return u(u({}, d), s)
          },
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
