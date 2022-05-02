;(window.webpackJsonp = window.webpackJsonp || []).push([
  [235],
  {
    QPD4: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ezF+'),
        c = a('VPAj'),
        l = a('Rp9C'),
        i = a('X04g'),
        s = (a('Blm6'), a('ERkP')),
        m = a.n(s),
        u = (a('uFXj'), a('hBpG'), a('7x/C'), a('ajvb')),
        d = a('3XMw'),
        g = a.n(d),
        p = a('qB1G'),
        f = a('pjBI'),
        b = a('t62R'),
        w = g.a.ccc45ee6,
        E = function (e) {
          var t = e.eventState,
            a = e.gameClockPeriod,
            n = e.participants,
            r = e.winnerId,
            o = t === p.a.Completed,
            c = t === p.a.InProgress,
            l = m.a.useMemo(
              function () {
                var e =
                    n &&
                    n.find(function (e) {
                      return e.id === r
                    }),
                  t = null == e ? void 0 : e.shortName
                return o && t ? w({ team: t }) : c && a ? a : null
              },
              [a, o, c, n, r],
            )
          return m.a.createElement(
            f.a,
            null,
            m.a.createElement(
              b.b,
              { color: c ? 'magenta500' : 'gray700', size: 'subtext2', weight: 'bold' },
              Object(u.a)(t),
            ),
            l ? m.a.createElement(b.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, l) : null,
          )
        },
        v = m.a.memo(E),
        y = 864e5,
        h = g.a.f81a95d7,
        C = g.a.ccaa970e,
        S = function (e) {
          var t = e.date,
            a = (function (e) {
              var t = new Date().setHours(0, 0, 0, 0),
                a = t + y
              return e >= t && e < a ? 0 : e >= a && e < t + 1728e5 ? 1 : -1
            })(t),
            n = (0, g.a.d725a288)(t),
            r = C(t),
            o = m.a.createElement(b.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }),
            c = m.a.createElement(b.b, { color: 'gray700', size: 'subtext2' })
          switch (a) {
            case 0:
              return m.a.createElement(
                g.a.I18NFormatMessage,
                { $i18n: 'h0d6f2c5' },
                m.a.cloneElement(o, null, g.a.ed4bea2e),
                m.a.cloneElement(c, null, g.a.j3e0ae78({ formattedTime: n })),
              )
            case 1:
              return m.a.createElement(
                g.a.I18NFormatMessage,
                { $i18n: 'a492659f' },
                m.a.cloneElement(o, null, g.a.cabfdd05),
                m.a.cloneElement(c, null, g.a.abd0f804({ formattedTime: n })),
              )
            default:
              return m.a.createElement(
                f.a,
                null,
                m.a.createElement(b.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, h({ date: r })),
                m.a.createElement(b.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, n),
              )
          }
        },
        I = m.a.memo(S),
        k = a('MWbm'),
        P = a('rHpw'),
        x = function (e) {
          var t = e.category,
            a = e.eventState,
            n = e.gameClockPeriod,
            r = e.participants,
            o = e.startTimeMillis,
            c = e.winnerId,
            l = a === p.a.Scheduled,
            i = o && new Date(o)
          return m.a.createElement(
            k.a,
            { style: z.row },
            m.a.createElement(b.b, { align: 'left', size: 'subtext2', style: z.rowElem, weight: 'bold' }, t),
            m.a.createElement(
              k.a,
              { style: z.eventStateContainer },
              l && i
                ? m.a.createElement(I, { date: i })
                : m.a.createElement(v, { eventState: a, gameClockPeriod: n, participants: r, winnerId: c }),
            ),
          )
        },
        z = P.a.create(function (e) {
          return {
            eventStateContainer: { alignSelf: 'flex-end', flexDirection: 'row' },
            row: { flexDirection: 'row', marginVertical: e.spaces.space4 },
            rowElem: { flexGrow: 1, alignSelf: 'center' },
          }
        }),
        T = m.a.memo(x),
        M = (a('z84I'), a('2G9S'), a('ddV6')),
        j = a.n(M),
        B = a('A91F'),
        D = a('TIdA'),
        H = function (e) {
          var t = e.team,
            a = t.imageUrl,
            n = t.logo,
            r = m.a.useState(!1),
            o = j()(r, 2),
            c = o[0],
            l = o[1],
            i = (!n && !a) || c ? R.translucent : {},
            s = n ? B.a.exact(n.width / n.height) : B.a.SQUARE
          return m.a.createElement(
            k.a,
            { style: R.teamLogoContainer },
            m.a.createElement(
              k.a,
              { style: [n ? R.logoContainer : R.imageContainer, i] },
              m.a.createElement(D.a, {
                accessibilityLabel: '',
                aspectMode: s,
                image: n || a || '',
                onError: function () {
                  return l(!0)
                },
                rounded: !n,
              }),
            ),
          )
        },
        R = P.a.create(function (e) {
          return {
            imageContainer: { width: e.spaces.space32 },
            logoContainer: { width: e.spaces.space40 },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
            teamLogoContainer: {
              alignSelf: 'center',
              alignItems: 'center',
              height: e.spaces.space32,
              width: e.spaces.space40,
            },
          }
        }),
        A = m.a.memo(H),
        F = function (e) {
          var t = e.eventState,
            a = e.team,
            n = e.winnerId,
            r = a.id,
            o = a.score,
            c = a.secondaryScore,
            l = r === n,
            i = !n,
            s = t === p.a.Completed && !l && !i
          return t === p.a.Completed || t === p.a.InProgress
            ? m.a.createElement(
                k.a,
                { style: [G.teamScore, s && G.losingTeam] },
                m.a.createElement(
                  b.b,
                  { color: 'white', numberOfLines: 1, size: c ? 'headline1' : 'title4', weight: 'heavy' },
                  o,
                ),
                c
                  ? m.a.createElement(
                      b.b,
                      { color: 'white', numberOfLines: 1, style: G.specialTeamScoreSecondary, weight: 'bold' },
                      c,
                    )
                  : null,
              )
            : null
        },
        G = P.a.create(function (e) {
          return {
            teamScore: { alignSelf: 'center', marginHorizontal: e.spaces.space12 },
            specialTeamScoreSecondary: { alignSelf: 'flex-end' },
            losingTeam: { opacity: 0.5 },
          }
        }),
        O = m.a.memo(F),
        L = P.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            rowElem: { flexGrow: 1, alignSelf: 'center', marginHorizontal: e.spaces.space12 },
          }
        }),
        U = function (e) {
          var t = e.eventState,
            a = e.fallbackColor,
            n = e.team,
            r = e.winnerId,
            o = n.color,
            c = n.fullName,
            l = {
              backgroundColor:
                (o && 'rgb('.concat(o.red, ', ').concat(o.green, ', ').concat(o.blue, ')')) || P.a.theme.colors[a],
            }
          return m.a.createElement(
            k.a,
            { style: [L.root, l] },
            m.a.createElement(A, { team: n }),
            m.a.createElement(
              b.b,
              { align: 'left', color: 'white', numberOfLines: 1, style: L.rowElem, weight: 'heavy' },
              c,
            ),
            m.a.createElement(O, { eventState: t, team: n, winnerId: r }),
          )
        },
        N = function (e) {
          var t = e.eventState,
            a = e.participants,
            n = e.winnerId
          return m.a.createElement(
            m.a.Fragment,
            null,
            a.map(function (e, a) {
              return m.a.createElement(U, {
                eventState: t,
                fallbackColor: a % 2 == 0 ? 'gray300' : 'gray700',
                key: e.id,
                team: e,
                winnerId: n,
              })
            }),
          )
        },
        _ = m.a.memo(N),
        V = a('htQn'),
        X = function (e) {
          var t = e.category,
            a = e.eventState,
            n = e.gameClock,
            r = e.gameClockPeriod,
            o = e.onClick,
            c = e.onImpression,
            l = e.participants,
            i = e.startTimeMillis,
            s = e.summary,
            u = e.url,
            d = e.winnerId
          return (
            m.a.useEffect(
              function () {
                c()
              },
              [c],
            ),
            l && null != u && u.url
              ? m.a.createElement(
                  V.a,
                  { link: u.url, onClick: o },
                  m.a.createElement(
                    k.a,
                    { style: q.container },
                    m.a.createElement(T, {
                      category: t,
                      eventState: a,
                      gameClock: n,
                      gameClockPeriod: r,
                      participants: l,
                      startTimeMillis: i,
                      summary: s,
                      winnerId: d,
                    }),
                    m.a.createElement(
                      k.a,
                      { style: q.teamsBorder },
                      m.a.createElement(_, { eventState: a, participants: l, winnerId: d }),
                    ),
                  ),
                )
              : null
          )
        },
        q = P.a.create(function (e) {
          return {
            container: {
              flexDirection: 'column',
              marginHorizontal: e.spaces.space16,
              marginBottom: e.spaces.space12,
              marginTop: e.spaces.space4,
            },
            teamsBorder: { borderRadius: e.borderRadii.small, overflow: 'hidden' },
          }
        }),
        Q = m.a.memo(X),
        J = a('Irs7'),
        $ = function (e) {
          var t = e.entry,
            a = Object(J.b)(),
            n = m.a.useCallback(
              function () {
                a.scribeAction('click')
              },
              [a],
            ),
            r = m.a.useCallback(
              function () {
                a.scribeAction('impression')
              },
              [a],
            )
          if (!t.content.scoreEvent.eventState) return null
          var o = t.content.scoreEvent,
            c = o.category,
            l = o.eventState,
            i = o.gameClock,
            s = o.gameClockPeriod,
            u = o.participants,
            d = o.startTimeMillis,
            g = o.summary,
            p = o.url,
            f = o.winnerId
          return m.a.createElement(Q, {
            category: c,
            eventState: l,
            gameClock: i,
            gameClockPeriod: s,
            onClick: n,
            onImpression: r,
            participants: u,
            startTimeMillis: parseInt(d, 10),
            summary: g,
            url: p,
            winnerId: f,
          })
        },
        K = m.a.memo($),
        W = o
          .b({
            component: K,
            isFocusable: Object(c.a)(!0),
            getScribeDataItem: function (e) {
              var t = e.content.scoreEvent.id,
                a = e.itemMetadata.clientEventInfo,
                n = l.a.getAllSurfaceDetails(a)
              if (n) return r()({ item_type: i.a.ItemType.EVENT, event_details: { event_id: t } }, n)
            },
          })
          .getHandler()
      t.default = W
    },
    ajvb: function (e, t, a) {
      'use strict'
      var n = a('3XMw'),
        r = a.n(n),
        o = a('qB1G'),
        c = r.a.f178e38c,
        l = r.a.b6da6b01,
        i = r.a.i9f615c8,
        s = r.a.f897267a,
        m = r.a.f93c4b69
      t.a = function (e) {
        switch (e) {
          case o.a.Scheduled:
            return c
          case o.a.InProgress:
            return l
          case o.a.Completed:
            return i
          case o.a.Postponed:
            return s
          case o.a.Cancelled:
            return m
          default:
            return ''
        }
      }
    },
    qB1G: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f')
      var n = Object.freeze({
        Scheduled: 'Scheduled',
        InProgress: 'InProgress',
        Completed: 'Completed',
        Postponed: 'Postponed',
        Cancelled: 'Cancelled',
        Unused6: '_Unused6',
        Unused7: '_Unused7',
      })
    },
  },
])
//# sourceMappingURL=WIPED
