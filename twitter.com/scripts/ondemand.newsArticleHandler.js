;(window.webpackJsonp = window.webpackJsonp || []).push([
  [342],
  {
    '0mK8': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return m
      }),
        r.d(t, 'b', function () {
          return g
        }),
        r.d(t, 'c', function () {
          return b
        })
      r('ho0z'), r('uFXj')
      var n = r('ERkP'),
        a = r.n(n),
        o = r('MWbm'),
        i = r('GcQN'),
        c = r('PU7B'),
        l = r('/WPq'),
        s = r('78ol'),
        d = r('jV+4'),
        u = r('rHpw'),
        m = function (e) {
          var t = e.author,
            r = e.color,
            n = void 0 === r ? 'normal' : r,
            o = e.size,
            i = void 0 === o ? 'subtext2' : o,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            u = e.withLink,
            m = void 0 !== u && u,
            g = e.withScreenName,
            b = void 0 !== g && g
          return a.a.createElement(d.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[i],
            color: n,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: i,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: i,
            style: [h.authorUserName, c],
            withHoverCard: s,
            withLink: m,
            withScreenName: b,
          })
        },
        g = function (e) {
          var t = e.style
          return a.a.createElement(
            o.a,
            { style: [h.lightningBadge, t] },
            a.a.createElement(i.a, { style: h.lightningIcon }),
          )
        },
        b = function (e) {
          var t = e.icon
          return a.a.createElement(
            o.a,
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
    'a+ad': function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('tPQo'),
        a = (r('hBvt'), r('0mK8')),
        o = r('ERkP'),
        i = r.n(o),
        c = r('MWbm'),
        l = r('htQn'),
        s = r('t62R'),
        d = r('9Xij'),
        u = r('TIdA'),
        m = r('A91F'),
        g = r('rHpw'),
        b = '100px',
        h = '70px',
        p = g.a.create(function (e) {
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
              maxHeight: b,
              maxWidth: b,
              minHeight: h,
              minWidth: h,
              overflow: 'hidden',
              width: '15%',
            },
            details: { flex: 1, marginRight: e.spaces.space12 },
            title: { marginHorizontal: 0, marginVertical: e.spaces.space2 },
          }
        }),
        f = function (e) {
          var t = e.author,
            r = e.link,
            n = e.onClick,
            o = e.originalImage,
            g = e.title
          return i.a.createElement(
            l.a,
            { link: r, onClick: n, style: p.root },
            i.a.createElement(
              c.a,
              { style: p.details },
              i.a.createElement(s.b, { color: 'gray700', size: 'subtext2' }, t),
              i.a.createElement(s.b, { style: p.title, weight: 'bold' }, g),
            ),
            i.a.createElement(
              c.a,
              { style: p.coverContainer },
              i.a.createElement(
                d.a,
                { ratio: 1 },
                o
                  ? i.a.createElement(u.a, { accessibilityLabel: '', aspectMode: m.a.SQUARE, image: o })
                  : i.a.createElement(a.c, { icon: 'news' }),
              ),
            ),
          )
        }
      t.default = Object(n.a)(f, function () {})
    },
    tPQo: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ezF+'),
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
                a()(e, t, r[t])
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
        return o.g({
          isFocusable: Object(i.a)(!0),
          component: e,
          bindActions: Object(i.a)({ scribe: l.c }),
          selectData: function () {
            return { dataSaverMode: s.k }
          },
          createProps: function (e) {
            var r = e.actions.scribe,
              n = e.data.dataSaverMode,
              a = e.entry,
              o = e.scribeNamespace,
              i = a.content,
              l = i.landingUrl && Object(c.b)(i.landingUrl),
              s = t({ content: i }),
              d = {
                author: i.author,
                link: l,
                originalImage: n ? void 0 : i.originalImage,
                onClick: function () {
                  r(u(u({}, o), {}, { action: 'click' }), void 0)
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
