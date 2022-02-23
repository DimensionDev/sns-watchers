;(window.webpackJsonp = window.webpackJsonp || []).push([
  [200],
  {
    V5fj: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ezF+'),
        r = n('ERkP'),
        o = n.n(r),
        i = n('yiKp'),
        l = n.n(i),
        c = n('VrFO'),
        m = n.n(c),
        u = n('Y9Ll'),
        s = n.n(u),
        d = n('1Pcy'),
        b = n.n(d),
        p = n('5Yy7'),
        f = n.n(p),
        y = n('2VqO'),
        h = n.n(y),
        v = n('KEM+'),
        g = n.n(v),
        E = (n('2G9S'), n('ho0z'), n('+Kfv')),
        C = n('eSoz'),
        w = n('rxPX'),
        x = function (e, t) {
          var n = t.communityId
          return n ? C.c.select(e, n) : void 0
        },
        k = Object(w.a)().propsFromState(function () {
          return { community: x }
        }),
        M = n('MWbm'),
        I = n('TIdA'),
        j = n('A91F'),
        z = n('rHpw'),
        A = n('MtXG'),
        O = n('t62R'),
        _ = n('htQn'),
        F = n('MAI/'),
        S = n('3XMw'),
        V = n.n(S),
        D = n('oQhu'),
        R = n('YeIG'),
        B = 'community_cell',
        T = V.a.d58baa7e,
        G = { type: 'serversideContextKey', serversideContextType: 'community' },
        H = k(
          (function (e) {
            f()(n, e)
            var t = h()(n)
            function n() {
              var e
              m()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                g()(
                  b()(e),
                  '_getMemoizedBehavioralEventContext',
                  Object(D.a)(function (e) {
                    return { clientEntity: l()(l()({}, G), {}, { serversideContextId: e }), viewType: B }
                  }),
                ),
                g()(b()(e), '_renderThumbnail', function (e) {
                  var t = e.crop,
                    n = e.image
                  return o.a.createElement(
                    M.a,
                    { style: K.thumbnailContainer },
                    o.a.createElement(I.a, {
                      accessibilityLabel: '',
                      aspectMode: j.a.SQUARE,
                      backgroundColor: z.a.theme.colors.gray300,
                      cropCandidates: t,
                      image: n,
                    }),
                  )
                }),
                g()(b()(e), '_renderMembersCount', function (t) {
                  var n = e.props.communityId,
                    a = t.member_count
                  if (a) {
                    var r = T(a),
                      i = '/i/communities/'.concat(n, '/members')
                    return o.a.createElement(
                      A.a.Group,
                      null,
                      o.a.createElement(
                        A.a,
                        { link: i },
                        o.a.createElement(
                          O.b,
                          { color: 'gray700' },
                          o.a.createElement(
                            V.a.I18NFormatMessage,
                            { $i18n: 'b38e130b' },
                            o.a.createElement(A.a.Value, null, V.a.ibd0106d({ formattedCount: r })),
                            o.a.createElement(A.a.Label, null, V.a.cface2d0({ count: a })),
                          ),
                        ),
                      ),
                    )
                  }
                  return null
                }),
                e
              )
            }
            return (
              s()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.community,
                      n = e.communityId,
                      a = '/i/communities/'.concat(n),
                      r = this._getMemoizedBehavioralEventContext(n)
                    if (t) {
                      var i = t.media,
                        l = t.membersFacepileUrls,
                        c = t.name
                      return o.a.createElement(
                        E.a,
                        { behavioralEventContext: r },
                        o.a.createElement(
                          _.a,
                          { link: a, style: K.root },
                          o.a.createElement(
                            M.a,
                            { style: K.container },
                            o.a.createElement(
                              M.a,
                              { style: K.leftColumn },
                              i && !Object(R.a)(i) ? this._renderThumbnail(i) : null,
                              o.a.createElement(
                                M.a,
                                { style: K.attribution },
                                o.a.createElement(
                                  M.a,
                                  { style: K.name },
                                  o.a.createElement(O.b, { numberOfLines: 1, weight: 'bold' }, c),
                                ),
                                this._renderMembersCount(t),
                                l
                                  ? o.a.createElement(F.a, {
                                      style: K.facepile,
                                      userAvatarSize: 'large',
                                      userAvatarUrls: l,
                                    })
                                  : null,
                              ),
                            ),
                          ),
                        ),
                      )
                    }
                    return null
                  },
                },
              ]),
              n
            )
          })(o.a.Component),
        ),
        K = z.a.create(function (e) {
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
        }),
        L = function (e) {
          var t = e.entry.content.id
          return o.a.createElement(H, { communityId: t })
        },
        P = o.a.memo(L),
        Q = n('VPAj'),
        U = a.b({ component: P, shouldDisplayBorder: Object(Q.a)(!1), isFocusable: Object(Q.a)(!0) }).getHandler()
      t.default = U
    },
  },
])
//# sourceMappingURL=WIPED
