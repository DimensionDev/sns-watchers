;(window.webpackJsonp = window.webpackJsonp || []).push([
  [228],
  {
    QPD4: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var a = r('KEM+'),
        n = r.n(a),
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
        w = r.n(v),
        E = (r('hBpG'), r('ajvb')),
        S = r('3XMw'),
        C = r.n(S),
        I = r('qB1G'),
        P = r('pjBI'),
        k = r('t62R'),
        O = C.a.ccc45ee6
      var j = function (e) {
          var t,
            r,
            a = e.eventState,
            n = e.gameClockPeriod,
            o = e.participants,
            c = e.winnerId,
            i = a === I.a.Completed,
            l = a === I.a.InProgress,
            s =
              ((t =
                o &&
                o.find(function (e) {
                  return e.id === c
                })),
              (r = null == t ? void 0 : t.shortName),
              i && r ? O({ team: r }) : l && n ? n : null)
          return w.a.createElement(
            P.a,
            null,
            w.a.createElement(
              k.b,
              { color: l ? 'magenta500' : 'gray700', size: 'subtext2', weight: 'bold' },
              Object(E.a)(a),
            ),
            s ? w.a.createElement(k.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, s) : null,
          )
        },
        x = 864e5,
        R = C.a.f81a95d7,
        D = C.a.ccaa970e
      var T = function (e) {
          var t,
            r,
            a,
            n = e.date,
            o = (function (e) {
              var t = new Date().setHours(0, 0, 0, 0),
                r = t + x
              return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1
            })(n),
            c = (0, C.a.d725a288)(n)
          return -1 === o
            ? ((a = D(n)),
              w.a.createElement(
                P.a,
                null,
                w.a.createElement(k.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, R({ date: a })),
                w.a.createElement(k.b, { color: 'gray700', size: 'subtext2', weight: 'normal' }, c),
              ))
            : ((t = w.a.createElement(k.b, { color: 'gray700', size: 'subtext2', weight: 'bold' })),
              (r = w.a.createElement(k.b, { color: 'gray700', size: 'subtext2' })),
              0 === o
                ? w.a.createElement(
                    C.a.I18NFormatMessage,
                    { $i18n: 'h0d6f2c5' },
                    w.a.cloneElement(t, null, C.a.ed4bea2e),
                    w.a.cloneElement(r, null, C.a.j3e0ae78({ formattedTime: c })),
                  )
                : w.a.createElement(
                    C.a.I18NFormatMessage,
                    { $i18n: 'a492659f' },
                    w.a.cloneElement(t, null, C.a.cabfdd05),
                    w.a.cloneElement(r, null, C.a.abd0f804({ formattedTime: c })),
                  ))
        },
        z = r('MWbm'),
        M = r('rHpw')
      var _ = M.a.create(function (e) {
          return {
            eventStateContainer: { alignSelf: 'flex-end', flexDirection: 'row' },
            row: { flexDirection: 'row', marginVertical: e.spaces.space4 },
            rowElem: { flexGrow: 1, alignSelf: 'center' },
          }
        }),
        B = function (e) {
          var t = e.category,
            r = e.eventState,
            a = e.gameClockPeriod,
            n = e.participants,
            o = e.startTimeMillis,
            c = e.winnerId,
            i = r === I.a.Scheduled,
            l = o && new Date(o)
          return w.a.createElement(
            z.a,
            { style: _.row },
            w.a.createElement(k.b, { align: 'left', size: 'subtext2', style: _.rowElem, weight: 'bold' }, t),
            w.a.createElement(
              z.a,
              { style: _.eventStateContainer },
              i && l
                ? w.a.createElement(T, { date: l })
                : w.a.createElement(j, { eventState: r, gameClockPeriod: a, participants: n, winnerId: c }),
            ),
          )
        },
        H = r('A91F'),
        A = r('TIdA')
      function F(e) {
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
            a = h()(e)
          if (t) {
            var n = h()(this).constructor
            r = Reflect.construct(a, arguments, n)
          } else r = a.apply(this, arguments)
          return y()(this, r)
        }
      }
      var L = (function (e) {
          p()(r, e)
          var t = F(r)
          function r() {
            var e
            l()(this, r)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              n()(d()(e), 'state', { imageError: !1 }),
              n()(d()(e), '_renderImage', function () {
                var t = e.props.team,
                  r = t.imageUrl,
                  a = t.logo,
                  n = e.state.imageError,
                  o = (!a && !r) || n ? G.translucent : {},
                  c = a ? H.a.exact(a.width / a.height) : H.a.SQUARE
                return w.a.createElement(
                  z.a,
                  { style: G.teamLogoContainer },
                  w.a.createElement(
                    z.a,
                    { style: [a ? G.logoContainer : G.imageContainer, o] },
                    w.a.createElement(A.a, {
                      accessibilityLabel: '',
                      aspectMode: c,
                      image: a || r || '',
                      onError: e._handleImageError,
                      rounded: !a,
                    }),
                  ),
                )
              }),
              n()(d()(e), '_handleImageError', function () {
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
                    a = r.color,
                    n = r.fullName,
                    o = {
                      backgroundColor:
                        (a && 'rgb('.concat(a.red, ', ').concat(a.green, ', ').concat(a.blue, ')')) ||
                        M.a.theme.colors[t],
                    }
                  return w.a.createElement(
                    z.a,
                    { style: [G.root, o] },
                    this._renderImage(),
                    w.a.createElement(
                      k.b,
                      { align: 'left', color: 'white', numberOfLines: 1, style: G.rowElem, weight: 'heavy' },
                      n,
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
                    a = e.winnerId,
                    n = r.id,
                    o = r.score,
                    c = r.secondaryScore,
                    i = n === a,
                    l = !a,
                    s = t === I.a.Completed && !i && !l
                  return t === I.a.Completed || t === I.a.InProgress
                    ? w.a.createElement(
                        z.a,
                        { style: [G.teamScore, s && G.losingTeam] },
                        w.a.createElement(
                          k.b,
                          { color: 'white', numberOfLines: 1, size: c ? 'headline1' : 'title4', weight: 'heavy' },
                          o,
                        ),
                        c
                          ? w.a.createElement(
                              k.b,
                              { color: 'white', numberOfLines: 1, style: G.specialTeamScoreSecondary, weight: 'bold' },
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
        })(w.a.Component),
        G = M.a.create(function (e) {
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
        N = L,
        U = r('htQn')
      function X(e) {
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
            a = h()(e)
          if (t) {
            var n = h()(this).constructor
            r = Reflect.construct(a, arguments, n)
          } else r = a.apply(this, arguments)
          return y()(this, r)
        }
      }
      var V = (function (e) {
          p()(r, e)
          var t = X(r)
          function r() {
            var e
            l()(this, r)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              n()(d()(e), '_renderTeamRow', function (t, r) {
                var a = e.props,
                  n = a.eventState,
                  o = a.winnerId,
                  c = t.id
                return w.a.createElement(N, {
                  eventState: n,
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
                    a = e.url,
                    n = r && r.map(this._renderTeamRow)
                  return r && null != a && a.url
                    ? w.a.createElement(
                        U.a,
                        { link: a.url, onClick: t },
                        w.a.createElement(
                          z.a,
                          { style: q.container },
                          this._renderDetails(),
                          w.a.createElement(z.a, { style: q.teamsBorder }, n),
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
                    a = e.gameClock,
                    n = e.gameClockPeriod,
                    o = e.participants,
                    c = e.startTimeMillis,
                    i = e.summary,
                    l = e.winnerId
                  return w.a.createElement(B, {
                    category: t,
                    eventState: r,
                    gameClock: a,
                    gameClockPeriod: n,
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
        })(w.a.Component),
        q = M.a.create(function (e) {
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
        J = r('zh9S'),
        Q = r('Rp9C'),
        K = r('X04g')
      function W(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                n()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : W(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Z = Object(c.a)({ scribe: J.c }),
        $ = o.g({
          component: V,
          isFocusable: Object(c.a)(!0),
          bindActions: Z,
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              a = e.scribeData,
              n = e.scribeNamespace
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
                  t(Y(Y({}, n), {}, { action: 'click' }), a)
                },
                onImpression: function () {
                  t(Y(Y({}, n), {}, { action: 'impression' }), a)
                },
              }
            }
            return null
          },
          getScribeDataItem: function (e) {
            var t = e.content.scoreEvent.id,
              r = e.itemMetadata.clientEventInfo,
              a = Q.a.getAllSurfaceDetails(r)
            if (a) return Y({ item_type: K.a.ItemType.EVENT, event_details: { event_id: t } }, a)
          },
        })
      t.default = $
    },
    ajvb: function (e, t, r) {
      'use strict'
      var a = r('3XMw'),
        n = r.n(a),
        o = r('qB1G'),
        c = n.a.f178e38c,
        i = n.a.b6da6b01,
        l = n.a.i9f615c8,
        s = n.a.f897267a,
        u = n.a.f93c4b69
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
        return a
      })
      r('yH/f')
      var a = Object.freeze({
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
