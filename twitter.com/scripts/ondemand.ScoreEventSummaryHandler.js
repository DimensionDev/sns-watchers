;(window.webpackJsonp = window.webpackJsonp || []).push([
  [223],
  {
    QPD4: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = (r('Blm6'), r('ezF+')),
        c = r('VPAj'),
        i = (r('OZaJ'), r('VrFO')),
        l = r.n(i),
        s = r('Y9Ll'),
        u = r.n(s),
        m = r('1Pcy'),
        d = r.n(m),
        f = r('5Yy7'),
        p = r.n(f),
        g = r('N+ot'),
        y = r.n(g),
        b = r('AuHH'),
        h = r.n(b),
        v = (r('2G9S'), r('z84I'), r('uFXj'), r('ERkP')),
        w = (r('hBpG'), r('ajvb')),
        E = r('3XMw'),
        S = r.n(E),
        C = r('qB1G'),
        I = r('pjBI'),
        P = r('t62R'),
        k = S.a.ccc45ee6
      var O = function (e) {
          var t,
            r,
            n = e.eventState,
            a = e.gameClockPeriod,
            o = e.participants,
            c = e.winnerId,
            i = n === C.a.Completed,
            l = n === C.a.InProgress,
            s =
              ((t =
                o &&
                o.find(function (e) {
                  return e.id === c
                })),
              (r = null == t ? void 0 : t.shortName),
              i && r ? k({ team: r }) : l && a ? a : null)
          return v.createElement(
            I.a,
            null,
            v.createElement(
              P.b,
              { color: l ? 'magenta500' : 'gray700', size: 'subtext2', weight: 'bold' },
              Object(w.a)(n),
            ),
            s ? v.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, s) : null,
          )
        },
        j = 864e5,
        x = S.a.f81a95d7,
        R = S.a.ccaa970e
      var D = function (e) {
          var t,
            r,
            n,
            a = e.date,
            o = (function (e) {
              var t = new Date().setHours(0, 0, 0, 0),
                r = t + j
              return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1
            })(a),
            c = (0, S.a.d725a288)(a)
          return -1 === o
            ? ((n = R(a)),
              v.createElement(
                I.a,
                null,
                v.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, x({ date: n })),
                v.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, c),
              ))
            : ((t = v.createElement(P.b, { color: 'gray700', size: 'subtext2', weight: 'bold' })),
              (r = v.createElement(P.b, { color: 'gray700', size: 'subtext2' })),
              0 === o
                ? v.createElement(
                    S.a.I18NFormatMessage,
                    { $i18n: 'h0d6f2c5' },
                    v.cloneElement(t, null, S.a.ed4bea2e),
                    v.cloneElement(r, null, S.a.j3e0ae78({ formattedTime: c })),
                  )
                : v.createElement(
                    S.a.I18NFormatMessage,
                    { $i18n: 'a492659f' },
                    v.cloneElement(t, null, S.a.cabfdd05),
                    v.cloneElement(r, null, S.a.abd0f804({ formattedTime: c })),
                  ))
        },
        T = r('MWbm'),
        z = r('rHpw')
      var M = z.a.create(function (e) {
          return {
            eventStateContainer: { alignSelf: 'flex-end', flexDirection: 'row' },
            row: { flexDirection: 'row', marginVertical: e.spaces.space4 },
            rowElem: { flexGrow: 1, alignSelf: 'center' },
          }
        }),
        _ = function (e) {
          var t = e.category,
            r = e.eventState,
            n = e.gameClockPeriod,
            a = e.participants,
            o = e.startTimeMillis,
            c = e.winnerId,
            i = r === C.a.Scheduled,
            l = o && new Date(o)
          return v.createElement(
            T.a,
            { style: M.row },
            v.createElement(P.b, { align: 'left', size: 'subtext2', style: M.rowElem, weight: 'bold' }, t),
            v.createElement(
              T.a,
              { style: M.eventStateContainer },
              i && l
                ? v.createElement(D, { date: l })
                : v.createElement(O, { eventState: r, gameClockPeriod: n, participants: a, winnerId: c }),
            ),
          )
        },
        B = r('A91F'),
        H = r('TIdA')
      function A(e) {
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
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return y()(this, r)
        }
      }
      var F = (function (e) {
          p()(r, e)
          var t = A(r)
          function r() {
            var e
            l()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              a()(d()(e), 'state', { imageError: !1 }),
              a()(d()(e), '_renderImage', function () {
                var t = e.props.team,
                  r = t.imageUrl,
                  n = t.logo,
                  a = e.state.imageError,
                  o = (!n && !r) || a ? L.translucent : {},
                  c = n ? B.a.exact(n.width / n.height) : B.a.SQUARE
                return v.createElement(
                  T.a,
                  { style: L.teamLogoContainer },
                  v.createElement(
                    T.a,
                    { style: [n ? L.logoContainer : L.imageContainer, o] },
                    v.createElement(H.a, {
                      accessibilityLabel: '',
                      aspectMode: c,
                      image: n || r || '',
                      onError: e._handleImageError,
                      rounded: !n,
                    }),
                  ),
                )
              }),
              a()(d()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              e
            )
          }
          return (
            u()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fallbackColor,
                    r = e.team,
                    n = r.color,
                    a = r.fullName,
                    o = {
                      backgroundColor:
                        (n && 'rgb('.concat(n.red, ', ').concat(n.green, ', ').concat(n.blue, ')')) ||
                        z.a.theme.colors[t],
                    }
                  return v.createElement(
                    T.a,
                    { style: [L.root, o] },
                    this._renderImage(),
                    v.createElement(
                      P.b,
                      { align: 'left', color: 'white', numberOfLines: 1, style: L.rowElem, weight: 'heavy' },
                      a,
                    ),
                    this._renderScore(),
                  )
                },
              },
              {
                key: '_renderScore',
                value: function () {
                  var e = this.props,
                    t = e.eventState,
                    r = e.team,
                    n = e.winnerId,
                    a = r.id,
                    o = r.score,
                    c = r.secondaryScore,
                    i = a === n,
                    l = !n,
                    s = t === C.a.Completed && !i && !l
                  return t === C.a.Completed || t === C.a.InProgress
                    ? v.createElement(
                        T.a,
                        { style: [L.teamScore, s && L.losingTeam] },
                        v.createElement(
                          P.b,
                          { color: 'white', numberOfLines: 1, size: c ? 'headline1' : 'title4', weight: 'heavy' },
                          o,
                        ),
                        c
                          ? v.createElement(
                              P.b,
                              { color: 'white', numberOfLines: 1, style: L.specialTeamScoreSecondary, weight: 'bold' },
                              c,
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(v.Component),
        L = z.a.create(function (e) {
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
        G = F,
        N = r('htQn')
      function U(e) {
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
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return y()(this, r)
        }
      }
      var X = (function (e) {
          p()(r, e)
          var t = U(r)
          function r() {
            var e
            l()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              a()(d()(e), '_renderTeamRow', function (t, r) {
                var n = e.props,
                  a = n.eventState,
                  o = n.winnerId,
                  c = t.id
                return v.createElement(G, {
                  eventState: a,
                  fallbackColor: r % 2 == 0 ? 'gray300' : 'gray700',
                  key: c,
                  team: t,
                  winnerId: o,
                })
              }),
              e
            )
          }
          return (
            u()(r, [
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
                    t = e.onClick,
                    r = e.participants,
                    n = e.url,
                    a = r && r.map(this._renderTeamRow)
                  return r && null != n && n.url
                    ? v.createElement(
                        N.a,
                        { link: n.url, onClick: t },
                        v.createElement(
                          T.a,
                          { style: V.container },
                          this._renderDetails(),
                          v.createElement(T.a, { style: V.teamsBorder }, a),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderDetails',
                value: function () {
                  var e = this.props,
                    t = e.category,
                    r = e.eventState,
                    n = e.gameClock,
                    a = e.gameClockPeriod,
                    o = e.participants,
                    c = e.startTimeMillis,
                    i = e.summary,
                    l = e.winnerId
                  return v.createElement(_, {
                    category: t,
                    eventState: r,
                    gameClock: n,
                    gameClockPeriod: a,
                    participants: o,
                    startTimeMillis: c,
                    summary: i,
                    winnerId: l,
                  })
                },
              },
            ]),
            r
          )
        })(v.Component),
        V = z.a.create(function (e) {
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
        q = r('zh9S'),
        J = r('Rp9C'),
        Q = r('X04g')
      function K(e, t) {
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
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Y = Object(c.a)({ scribe: q.c }),
        Z = o.g({
          component: X,
          isFocusable: Object(c.a)(!0),
          bindActions: Y,
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeData,
              a = e.scribeNamespace
            if (r.content.scoreEvent.eventState) {
              var o = r.content.scoreEvent,
                c = o.category,
                i = o.eventState,
                l = o.gameClock,
                s = o.gameClockPeriod,
                u = o.participants,
                m = o.startTimeMillis,
                d = o.summary,
                f = o.url,
                p = o.winnerId
              return {
                eventState: i,
                participants: u,
                category: c,
                summary: d,
                startTimeMillis: parseInt(m, 10),
                gameClock: l,
                gameClockPeriod: s,
                winnerId: p,
                url: f,
                onClick: function (e) {
                  t(W(W({}, a), {}, { action: 'click' }), n)
                },
                onImpression: function () {
                  t(W(W({}, a), {}, { action: 'impression' }), n)
                },
              }
            }
            return null
          },
          getScribeDataItem: function (e) {
            var t = e.content.scoreEvent.id,
              r = e.itemMetadata.clientEventInfo,
              n = J.a.getAllSurfaceDetails(r)
            if (n) return W({ item_type: Q.a.ItemType.EVENT, event_details: { event_id: t } }, n)
          },
        })
      t.default = Z
    },
    ajvb: function (e, t, r) {
      'use strict'
      var n = r('3XMw'),
        a = r.n(n),
        o = r('qB1G'),
        c = a.a.f178e38c,
        i = a.a.b6da6b01,
        l = a.a.i9f615c8,
        s = a.a.f897267a,
        u = a.a.f93c4b69
      t.a = function (e) {
        switch (e) {
          case o.a.Scheduled:
            return c
          case o.a.InProgress:
            return i
          case o.a.Completed:
            return l
          case o.a.Postponed:
            return s
          case o.a.Cancelled:
            return u
          default:
            return ''
        }
      }
    },
    qB1G: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('yH/f')
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
