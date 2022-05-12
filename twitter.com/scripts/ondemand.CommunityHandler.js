;(window.webpackJsonp = window.webpackJsonp || []).push([
  [200],
  {
    V5fj: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ezF+'),
        r = a('ERkP'),
        o = a.n(r),
        i = (a('ho0z'), a('j57/')),
        c = a('eSoz'),
        m = a('rxPX'),
        l = function (e, t) {
          var a = t.communityId
          return a ? c.c.select(e, a) : void 0
        },
        u = function (e) {
          var t = e.community,
            a = e.communityId
          if (t) {
            var n = t.media,
              r = t.member_count,
              c = t.membersFacepileUrls,
              m = t.name
            return o.a.createElement(i.a, { communityId: a, media: n, memberCount: r, membersFacepile: c, name: m })
          }
          return null
        },
        s = Object(m.a)().propsFromState(function () {
          return { community: l }
        })(o.a.memo(u)),
        d = function (e) {
          var t = e.entry.content.id
          return o.a.createElement(s, { communityId: t })
        },
        b = o.a.memo(d),
        f = a('VPAj'),
        p = n.b({ component: b, shouldDisplayBorder: Object(f.a)(!1), isFocusable: Object(f.a)(!0) }).getHandler()
      t.default = p
    },
    'j57/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = (a('ho0z'), a('ERkP')),
        i = a.n(o),
        c = a('+Kfv'),
        m = a('MWbm'),
        l = a('TIdA'),
        u = a('A91F'),
        s = a('rHpw'),
        d = a('MtXG'),
        b = a('t62R'),
        f = a('htQn'),
        p = a('MAI/'),
        y = a('3XMw'),
        E = a.n(y),
        g = E.a.d58baa7e,
        v = { serversideContextType: 'community' },
        h = function (e) {
          var t = e.crop,
            a = e.image
          return i.a.createElement(
            m.a,
            { style: x.thumbnailContainer },
            i.a.createElement(l.a, {
              accessibilityLabel: '',
              aspectMode: u.a.SQUARE,
              backgroundColor: s.a.theme.colors.gray300,
              cropCandidates: t,
              image: a,
            }),
          )
        },
        w = function (e) {
          e.communityId
          var t = e.count,
            a = g(t)
          return i.a.createElement(
            d.a.Group,
            null,
            i.a.createElement(
              d.a,
              null,
              i.a.createElement(
                b.b,
                { color: 'gray700' },
                i.a.createElement(
                  E.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  i.a.createElement(d.a.Value, null, E.a.ibd0106d({ formattedCount: a })),
                  i.a.createElement(d.a.Label, null, E.a.cface2d0({ count: t })),
                ),
              ),
            ),
          )
        },
        C = function (e) {
          var t = e.communityId,
            a = e.media,
            n = e.memberCount,
            o = e.membersFacepile,
            l = e.name,
            u = i.a.useMemo(
              function () {
                return { clientEntity: r()(r()({}, v), {}, { serversideContextId: t }), viewType: 'community_cell' }
              },
              [t],
            ),
            s = '/i/communities/'.concat(t)
          return i.a.createElement(
            c.a,
            { behavioralEventContext: u },
            i.a.createElement(
              f.a,
              { link: s, style: x.root },
              i.a.createElement(
                m.a,
                { style: x.container },
                i.a.createElement(
                  m.a,
                  { style: x.leftColumn },
                  a ? i.a.createElement(h, a) : null,
                  i.a.createElement(
                    m.a,
                    { style: x.attribution },
                    i.a.createElement(
                      m.a,
                      { style: x.name },
                      i.a.createElement(b.b, { numberOfLines: 1, weight: 'bold' }, l),
                    ),
                    i.a.createElement(w, { communityId: t, count: n }),
                    Array.isArray(o)
                      ? i.a.createElement(p.a, { style: x.facepile, userAvatarSize: 'large', userAvatarUrls: o })
                      : o,
                  ),
                ),
              ),
            ),
          )
        }
      t.a = i.a.memo(C)
      var x = s.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          container: { flexDirection: 'row' },
          leftColumn: { alignItems: 'center', flexDirection: 'row', flex: 1, flexShrink: 1 },
          attribution: { height: '100%', justifyContent: 'space-between', flexShrink: 1 },
          facepile: { justifyContent: 'flex-start' },
          name: { marginBottom: e.spaces.space2, flexDirection: 'row' },
          thumbnailContainer: {
            width: '96px',
            marginRight: e.spaces.space12,
            borderRadius: e.borderRadii.large,
            overflow: 'hidden',
          },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
