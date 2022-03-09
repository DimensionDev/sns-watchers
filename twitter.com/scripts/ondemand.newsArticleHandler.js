;(window.webpackJsonp = window.webpackJsonp || []).push([
  [352],
  {
    '0mK8': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return u
      }),
        a.d(t, 'b', function () {
          return g
        }),
        a.d(t, 'c', function () {
          return h
        })
      a('ho0z'), a('uFXj')
      var r = a('ERkP'),
        n = a.n(r),
        i = a('MWbm'),
        o = a('GcQN'),
        c = a('PU7B'),
        l = a('/WPq'),
        s = a('78ol'),
        d = a('jV+4'),
        m = a('rHpw'),
        u = function (e) {
          var t = e.author,
            a = e.color,
            r = void 0 === a ? 'text' : a,
            i = e.size,
            o = void 0 === i ? 'subtext2' : i,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            m = e.withLink,
            u = void 0 !== m && m,
            g = e.withScreenName,
            h = void 0 !== g && g
          return n.a.createElement(d.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: r,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [b.authorUserName, c],
            withHoverCard: s,
            withLink: u,
            withScreenName: h,
          })
        },
        g = function (e) {
          var t = e.style
          return n.a.createElement(
            i.a,
            { style: [b.lightningBadge, t] },
            n.a.createElement(o.a, { style: b.lightningIcon }),
          )
        },
        h = function (e) {
          var t = e.icon
          return n.a.createElement(
            i.a,
            { style: b.placeholderIconContainer },
            'news' === t
              ? n.a.createElement(c.a, { style: b.placeholderIcon })
              : 'lists' === t
              ? n.a.createElement(l.a, { style: b.placeholderIcon })
              : n.a.createElement(s.a, { style: b.placeholderIcon }),
          )
        },
        b = m.a.create(function (e) {
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
    'a+ad': function (e, t, a) {
      'use strict'
      a.r(t)
      var r = a('tPQo'),
        n = (a('hBvt'), a('0mK8')),
        i = a('ERkP'),
        o = a.n(i),
        c = a('MWbm'),
        l = a('htQn'),
        s = a('t62R'),
        d = a('9Xij'),
        m = a('TIdA'),
        u = a('A91F'),
        g = a('rHpw'),
        h = '100px',
        b = '70px',
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
              maxHeight: h,
              maxWidth: h,
              minHeight: b,
              minWidth: b,
              overflow: 'hidden',
              width: '15%',
            },
            details: { flex: 1, marginRight: e.spaces.space12 },
            title: { marginHorizontal: 0, marginVertical: e.spaces.space2 },
          }
        }),
        f = function (e) {
          var t = e.author,
            a = e.link,
            r = e.onClick,
            i = e.originalImage,
            g = e.title
          return o.a.createElement(
            l.a,
            { link: a, onClick: r, style: p.root },
            o.a.createElement(
              c.a,
              { style: p.details },
              o.a.createElement(s.b, { color: 'gray700', size: 'subtext2' }, t),
              o.a.createElement(s.b, { style: p.title, weight: 'bold' }, g),
            ),
            o.a.createElement(
              c.a,
              { style: p.coverContainer },
              o.a.createElement(
                d.a,
                { ratio: 1 },
                i
                  ? o.a.createElement(m.a, { accessibilityLabel: '', aspectMode: u.a.SQUARE, image: i })
                  : o.a.createElement(n.c, { icon: 'news' }),
              ),
            ),
          )
        }
      t.default = Object(r.a)(f, function () {})
    },
    tPQo: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        i = a('ezF+'),
        o = a('VPAj'),
        c = a('caTy'),
        l = a('zh9S'),
        s = a('P1r1')
      t.a = function (e, t) {
        return i.g({
          isFocusable: Object(o.a)(!0),
          component: e,
          bindActions: Object(o.a)({ scribe: l.c }),
          selectData: function () {
            return { dataSaverMode: s.j }
          },
          createProps: function (e) {
            var a = e.actions.scribe,
              r = e.data.dataSaverMode,
              i = e.entry,
              o = e.scribeNamespace,
              l = i.content,
              s = l.landingUrl && Object(c.b)(l.landingUrl),
              d = t({ content: l }),
              m = {
                author: l.author,
                link: s,
                originalImage: r ? void 0 : l.originalImage,
                onClick: function () {
                  a(n()(n()({}, o), {}, { action: 'click' }), void 0)
                },
                title: l.title,
              }
            return n()(n()({}, m), d)
          },
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
