;(window.webpackJsonp = window.webpackJsonp || []).push([
  [230],
  {
    QPD4: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = t('yiKp'),
        r = t.n(n),
        o = (t('Blm6'), t('ezF+')),
        i = t('VPAj'),
        c = t('VrFO'),
        l = t.n(c),
        s = t('Y9Ll'),
        m = t.n(s),
        u = t('1Pcy'),
        d = t.n(u),
        p = t('5Yy7'),
        g = t.n(p),
        f = t('2VqO'),
        b = t.n(f),
        h = t('KEM+'),
        v = t.n(h),
        w = (t('2G9S'), t('z84I'), t('uFXj'), t('ERkP')),
        y = t.n(w),
        E = (t('hBpG'), t('7x/C'), t('ajvb')),
        S = t('3XMw'),
        C = t.n(S),
        I = t('qB1G'),
        k = t('pjBI'),
        P = t('t62R'),
        x = C.a.ccc45ee6
      var T = function (e) {
          var a,
            t,
            n = e.eventState,
            r = e.gameClockPeriod,
            o = e.participants,
            i = e.winnerId,
            c = n === I.a.Completed,
            l = n === I.a.InProgress,
            s =
              ((a =
                o &&
                o.find(function (e) {
                  return e.id === i
                })),
              (t = null == a ? void 0 : a.shortName),
              c && t ? x({ team: t }) : l && r ? r : null)
          return y.a.createElement(
            k.a,
            null,
            y.a.createElement(
              P.b,
              { color: l ? 'magenta500' : 'gray700', size: 'subtext2', weight: 'bold' },
              Object(E.a)(n),
            ),
            s ? y.a.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, s) : null,
          )
        },
        z = 864e5,
        M = C.a.f81a95d7,
        _ = C.a.ccaa970e
      var D = function (e) {
          var a,
            t,
            n,
            r = e.date,
            o = (function (e) {
              var a = new Date().setHours(0, 0, 0, 0),
                t = a + z
              return e >= a && e < t ? 0 : e >= t && e < a + 1728e5 ? 1 : -1
            })(r),
            i = (0, C.a.d725a288)(r)
          return -1 === o
            ? ((n = _(r)),
              y.a.createElement(
                k.a,
                null,
                y.a.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, M({ date: n })),
                y.a.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, i),
              ))
            : ((a = y.a.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'bold' })),
              (t = y.a.createElement(P.b, { color: 'gray700', size: 'subtext2' })),
              0 === o
                ? y.a.createElement(
                    C.a.I18NFormatMessage,
                    { $i18n: 'h0d6f2c5' },
                    y.a.cloneElement(a, null, C.a.ed4bea2e),
                    y.a.cloneElement(t, null, C.a.j3e0ae78({ formattedTime: i })),
                  )
                : y.a.createElement(
                    C.a.I18NFormatMessage,
                    { $i18n: 'a492659f' },
                    y.a.cloneElement(a, null, C.a.cabfdd05),
                    y.a.cloneElement(t, null, C.a.abd0f804({ formattedTime: i })),
                  ))
        },
        j = t('MWbm'),
        R = t('rHpw')
      var B = R.a.create(function (e) {
          return {
            eventStateContainer: { alignSelf: 'flex-end', flexDirection: 'row' },
            row: { flexDirection: 'row', marginVertical: e.spaces.space4 },
            rowElem: { flexGrow: 1, alignSelf: 'center' },
          }
        }),
        O = function (e) {
          var a = e.category,
            t = e.eventState,
            n = e.gameClockPeriod,
            r = e.participants,
            o = e.startTimeMillis,
            i = e.winnerId,
            c = t === I.a.Scheduled,
            l = o && new Date(o)
          return y.a.createElement(
            j.a,
            { style: B.row },
            y.a.createElement(P.b, { align: 'left', size: 'subtext2', style: B.rowElem, weight: 'bold' }, a),
            y.a.createElement(
              j.a,
              { style: B.eventStateContainer },
              c && l
                ? y.a.createElement(D, { date: l })
                : y.a.createElement(T, { eventState: t, gameClockPeriod: n, participants: r, winnerId: i }),
            ),
          )
        },
        A = t('A91F'),
        F = t('TIdA'),
        G = (function (e) {
          g()(t, e)
          var a = b()(t)
          function t() {
            var e
            l()(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = a.call.apply(a, [this].concat(r))),
              v()(d()(e), 'state', { imageError: !1 }),
              v()(d()(e), '_renderImage', function () {
                var a = e.props.team,
                  t = a.imageUrl,
                  n = a.logo,
                  r = e.state.imageError,
                  o = (!n && !t) || r ? H.translucent : {},
                  i = n ? A.a.exact(n.width / n.height) : A.a.SQUARE
                return y.a.createElement(
                  j.a,
                  { style: H.teamLogoContainer },
                  y.a.createElement(
                    j.a,
                    { style: [n ? H.logoContainer : H.imageContainer, o] },
                    y.a.createElement(F.a, {
                      accessibilityLabel: '',
                      aspectMode: i,
                      image: n || t || '',
                      onError: e._handleImageError,
                      rounded: !n,
                    }),
                  ),
                )
              }),
              v()(d()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              e
            )
          }
          return (
            m()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.fallbackColor,
                    t = e.team,
                    n = t.color,
                    r = t.fullName,
                    o = {
                      backgroundColor:
                        (n && 'rgb('.concat(n.red, ', ').concat(n.green, ', ').concat(n.blue, ')')) ||
                        R.a.theme.colors[a],
                    }
                  return y.a.createElement(
                    j.a,
                    { style: [H.root, o] },
                    this._renderImage(),
                    y.a.createElement(
                      P.b,
                      { align: 'left', color: 'white', numberOfLines: 1, style: H.rowElem, weight: 'heavy' },
                      r,
                    ),
                    this._renderScore(),
                  )
                },
              },
              {
                key: '_renderScore',
                value: function () {
                  var e = this.props,
                    a = e.eventState,
                    t = e.team,
                    n = e.winnerId,
                    r = t.id,
                    o = t.score,
                    i = t.secondaryScore,
                    c = r === n,
                    l = !n,
                    s = a === I.a.Completed && !c && !l
                  return a === I.a.Completed || a === I.a.InProgress
                    ? y.a.createElement(
                        j.a,
                        { style: [H.teamScore, s && H.losingTeam] },
                        y.a.createElement(
                          P.b,
                          { color: 'white', numberOfLines: 1, size: i ? 'headline1' : 'title4', weight: 'heavy' },
                          o,
                        ),
                        i
                          ? y.a.createElement(
                              P.b,
                              { color: 'white', numberOfLines: 1, style: H.specialTeamScoreSecondary, weight: 'bold' },
                              i,
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            t
          )
        })(y.a.Component),
        H = R.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            imageContainer: { width: e.spaces.space32 },
            logoContainer: { width: e.spaces.space40 },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
            teamLogoContainer: {
              alignSelf: 'center',
              alignItems: 'center',
              height: e.spaces.space32,
              width: e.spaces.space40,
            },
            teamScore: { alignSelf: 'center', marginHorizontal: e.spaces.space12 },
            specialTeamScoreMain: { alignSelf: 'center', flexDirection: 'column', display: 'flex' },
            specialTeamScoreSecondary: { alignSelf: 'flex-end' },
            rowElem: { flexGrow: 1, alignSelf: 'center', marginHorizontal: e.spaces.space12 },
            losingTeam: { opacity: 0.5 },
          }
        }),
        L = G,
        N = t('htQn'),
        U = (function (e) {
          g()(t, e)
          var a = b()(t)
          function t() {
            var e
            l()(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = a.call.apply(a, [this].concat(r))),
              v()(d()(e), '_renderTeamRow', function (a, t) {
                var n = e.props,
                  r = n.eventState,
                  o = n.winnerId,
                  i = a.id
                return y.a.createElement(L, {
                  eventState: r,
                  fallbackColor: t % 2 == 0 ? 'gray300' : 'gray700',
                  key: i,
                  team: a,
                  winnerId: o,
                })
              }),
              e
            )
          }
          return (
            m()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.onClick,
                    t = e.participants,
                    n = e.url,
                    r = t && t.map(this._renderTeamRow)
                  return t && null != n && n.url
                    ? y.a.createElement(
                        N.a,
                        { link: n.url, onClick: a },
                        y.a.createElement(
                          j.a,
                          { style: V.container },
                          this._renderDetails(),
                          y.a.createElement(j.a, { style: V.teamsBorder }, r),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderDetails',
                value: function () {
                  var e = this.props,
                    a = e.category,
                    t = e.eventState,
                    n = e.gameClock,
                    r = e.gameClockPeriod,
                    o = e.participants,
                    i = e.startTimeMillis,
                    c = e.summary,
                    l = e.winnerId
                  return y.a.createElement(O, {
                    category: a,
                    eventState: t,
                    gameClock: n,
                    gameClockPeriod: r,
                    participants: o,
                    startTimeMillis: i,
                    summary: c,
                    winnerId: l,
                  })
                },
              },
            ]),
            t
          )
        })(y.a.Component),
        V = R.a.create(function (e) {
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
        q = t('zh9S'),
        X = t('Rp9C'),
        Q = t('X04g'),
        J = Object(i.a)({ scribe: q.c }),
        K = o.g({
          component: U,
          isFocusable: Object(i.a)(!0),
          bindActions: J,
          createProps: function (e) {
            var a = e.actions.scribe,
              t = e.entry,
              n = e.scribeData,
              o = e.scribeNamespace
            if (t.content.scoreEvent.eventState) {
              var i = t.content.scoreEvent,
                c = i.category,
                l = i.eventState,
                s = i.gameClock,
                m = i.gameClockPeriod,
                u = i.participants,
                d = i.startTimeMillis,
                p = i.summary,
                g = i.url,
                f = i.winnerId
              return {
                eventState: l,
                participants: u,
                category: c,
                summary: p,
                startTimeMillis: parseInt(d, 10),
                gameClock: s,
                gameClockPeriod: m,
                winnerId: f,
                url: g,
                onClick: function (e) {
                  a(r()(r()({}, o), {}, { action: 'click' }), n)
                },
                onImpression: function () {
                  a(r()(r()({}, o), {}, { action: 'impression' }), n)
                },
              }
            }
            return null
          },
          getScribeDataItem: function (e) {
            var a = e.content.scoreEvent.id,
              t = e.itemMetadata.clientEventInfo,
              n = X.a.getAllSurfaceDetails(t)
            if (n) return r()({ item_type: Q.a.ItemType.EVENT, event_details: { event_id: a } }, n)
          },
        })
      a.default = K
    },
    ajvb: function (e, a, t) {
      'use strict'
      var n = t('3XMw'),
        r = t.n(n),
        o = t('qB1G'),
        i = r.a.f178e38c,
        c = r.a.b6da6b01,
        l = r.a.i9f615c8,
        s = r.a.f897267a,
        m = r.a.f93c4b69
      a.a = function (e) {
        switch (e) {
          case o.a.Scheduled:
            return i
          case o.a.InProgress:
            return c
          case o.a.Completed:
            return l
          case o.a.Postponed:
            return s
          case o.a.Cancelled:
            return m
          default:
            return ''
        }
      }
    },
    qB1G: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return n
      })
      t('yH/f')
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
