;(window.webpackJsonp = window.webpackJsonp || []).push([
  [223],
  {
    CdHO: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ezF+'),
        o = r('ERkP'),
        i = r('VPAj'),
        s = r('RoyM'),
        l = r('caTy'),
        u = r('zh9S'),
        p = r('Rp9C'),
        f = r('lzTJ'),
        d = r('rHpw'),
        m = r('iSF/')
      function b(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var g = Object(i.a)({ scribe: u.c }),
        v = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            r = p.a.getAllSurfaceDetails(t)
          return r ? { items: [r] } : void 0
        },
        h = function (e) {
          var t = e.entry,
            r = e.scribe,
            n = e.scribeNamespace
          return function () {
            var e = v(t)
            r(y(y({}, n), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        O = function (e) {
          var t = null == e ? void 0 : e.text
          return t
            ? { backgroundColor: Object(f.a)((null == e ? void 0 : e.backgroundColorName) || '') || void 0, text: t }
            : void 0
        },
        w = d.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        S = c.g({
          bindActions: g,
          component: m.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.feedbackItems,
              a = e.scribeNamespace
            if (!(r && r.content && r.content.content && r.content.content.standard)) return null
            var c = r.content,
              i = c.content,
              u = c.image,
              p = c.url,
              f = i.standard,
              d = f.badge,
              m = f.title
            return {
              accessibilityLabel: m,
              badge: O(d),
              containerStyle: w.containerStyle,
              description: m,
              image: u,
              link: p ? Object(l.b)(p) : '',
              onClick: h({ scribeNamespace: a, scribe: t, entry: r }),
              rightControl: o.createElement(s.a, { feedbackItems: n }),
            }
          },
          shouldDisplayBorder: Object(i.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              a = v(r)
            t(y(y({}, n), {}, { element: 'tile', action: 'impression' }), a)
          },
        })
      t.default = S
    },
    FYbo: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ezF+'),
        o = r('VPAj'),
        i = r('GliE'),
        s = r('caTy'),
        l = r('zh9S'),
        u = r('Rp9C'),
        p = r('rHpw'),
        f = r('jUPy')
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
      function m(e) {
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
      var b = Object(o.a)({ scribe: l.c }),
        y = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            r = u.a.getAllSurfaceDetails(t)
          return r ? { items: [r] } : void 0
        },
        g = function (e) {
          var t = e.entry,
            r = e.scribe,
            n = e.scribeNamespace
          return function () {
            var e = y(t)
            r(m(m({}, n), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        v = p.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        h = c.g({
          bindActions: b,
          component: f.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace
            if (
              !(
                r &&
                r.content &&
                r.content.content &&
                r.content.content.scoreCard &&
                r.content.content.scoreCard.scoreEventSummary &&
                r.content.content.scoreCard.scoreEventSummary.scoreEvent
              )
            )
              return null
            var a = r.content,
              c = a.content,
              o = a.url,
              l = c.scoreCard.scoreEventSummary.scoreEvent,
              u = l.category,
              p = l.eventState,
              f = l.gameClock,
              d = l.gameClockPeriod,
              m = l.participants,
              b = l.startTimeMillis,
              y = l.winnerId
            return {
              accessibilityLabel: Object(i.a)(u, p, m, d, y),
              category: u,
              containerStyle: v.containerStyle,
              gameState: p,
              gameClock: f,
              gameClockPeriod: d,
              startTimeMillis: b,
              teams: m,
              winnerId: y,
              link: o ? Object(s.b)(o) : '',
              onClick: g({ scribeNamespace: n, scribe: t, entry: r }),
            }
          },
          shouldDisplayBorder: Object(o.a)(!1),
          isFocusable: Object(o.a)(!0),
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              a = y(r)
            t(m(m({}, n), {}, { element: 'tile', action: 'impression' }), a)
          },
        })
      t.default = h
    },
    GliE: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return p
      })
      r('2G9S'), r('hBpG')
      var n = r('ajvb'),
        a = r('3XMw'),
        c = r.n(a),
        o = r('qB1G'),
        i = c.a.a3484d21,
        s = c.a.aab2efa8,
        l = c.a.ba21c289,
        u = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        p = function (e, t, r, a, c) {
          var p =
              r && c
                ? (function (e, t) {
                    return e && t
                      ? e.find(function (e) {
                          return e.id === t
                        })
                      : void 0
                  })(r, c)
                : void 0,
            f = Object(n.a)(t),
            d = e || '',
            m = r && r[0] ? u(r[0]) : '',
            b = r && r[1] ? u(r[1]) : '',
            y = a || '',
            g = p ? s({ winner: p.fullName }) : '',
            v = t === o.a.Completed ? (p ? g : i) : y
          return l({ gameCategory: d, gameState: f, accessibleGameClockPeriod: v, teamOneLabel: m, teamTwoLabel: b })
        }
    },
    Nxr7: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return z
      })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        p = r('N+ot'),
        f = r.n(p),
        d = r('AuHH'),
        m = r.n(d),
        b = r('KEM+'),
        y = r.n(b),
        g = (r('2G9S'), r('Blm6'), r('hBpG'), r('ERkP')),
        v = r('t62R'),
        h = 864e5,
        O = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            r = t + h
          return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1
        },
        w = r('3XMw'),
        S = r.n(w),
        C = r('pjBI'),
        j = r('gmfB')
      function E(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var P = S.a.ccaa970e,
        k = S.a.d725a288,
        R = S.a.db355331,
        _ = S.a.a8428d5e,
        D = S.a.a7aad8b9,
        I = S.a.e431f1aa,
        T = S.a.a7391707,
        x = S.a.d2dbfa91,
        L = S.a.cd734f65,
        N = S.a.c8891d06,
        z = (function (e) {
          u()(r, e)
          var t = E(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? g.createElement(v.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              y()(s()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var r = new Date(parseInt(t, 10)),
                    n = O(r)
                  return -1 === n ? e._renderDateTime(r) : e._renderTodayTomorrow(n, r)
                }
                return null
              }),
              y()(s()(e), '_renderTodayTomorrow', function (e, t) {
                var r = k(t)
                return g.createElement(
                  C.a,
                  null,
                  g.createElement(v.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? L : N),
                  g.createElement(v.b, { color: 'gray700', size: 'subtext2' }, r),
                )
              }),
              y()(s()(e), '_renderDateTime', function (e) {
                var t = k(e),
                  r = P(e)
                return g.createElement(
                  C.a,
                  null,
                  g.createElement(v.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, r),
                  g.createElement(v.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              y()(s()(e), '_renderGameStateValue', function (t, r) {
                var n = e.props.gameClockPeriod,
                  a = e._getWinnerName(),
                  c = t && a ? R({ team: a }) : r && n ? n : void 0
                return c ? g.createElement(v.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null
              }),
              y()(s()(e), '_getWinnerName', function () {
                var t = e.props,
                  r = t.teams,
                  n = t.winnerId,
                  a =
                    r &&
                    r.find(function (e) {
                      return e.id === n
                    })
                return a && a.shortName
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gameState,
                    r = e.withCategory,
                    n = t === j.a.Scheduled,
                    a = t === j.a.InProgress,
                    c = t === j.a.Completed
                  return g.createElement(
                    g.Fragment,
                    null,
                    n
                      ? this._renderGameScheduledDateTime()
                      : g.createElement(
                          C.a,
                          null,
                          g.createElement(
                            v.b,
                            { color: a ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case j.a.Scheduled:
                                  return _
                                case j.a.InProgress:
                                  return D
                                case j.a.Completed:
                                  return I
                                case j.a.Postponed:
                                  return T
                                case j.a.Cancelled:
                                  return x
                                default:
                                  return null
                              }
                            })(t),
                          ),
                          this._renderGameStateValue(c, a),
                        ),
                    r ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            r
          )
        })(g.Component)
      y()(z, 'defaultProps', { withCategory: !0 })
    },
    ajvb: function (e, t, r) {
      'use strict'
      var n = r('3XMw'),
        a = r.n(n),
        c = r('qB1G'),
        o = a.a.f178e38c,
        i = a.a.b6da6b01,
        s = a.a.i9f615c8,
        l = a.a.f897267a,
        u = a.a.f93c4b69
      t.a = function (e) {
        switch (e) {
          case c.a.Scheduled:
            return o
          case c.a.InProgress:
            return i
          case c.a.Completed:
            return s
          case c.a.Postponed:
            return l
          case c.a.Cancelled:
            return u
          default:
            return ''
        }
      }
    },
    gmfB: function (e, t, r) {
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
    'iSF/': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        p = r('N+ot'),
        f = r.n(p),
        d = r('AuHH'),
        m = r.n(d),
        b = r('KEM+'),
        y = r.n(b),
        g = (r('2G9S'), r('ho0z'), r('1t7P'), r('jQ/y'), r('hBvt'), r('ERkP')),
        v = r('TIdA'),
        h = r('t62R'),
        O = r('A91F'),
        w = r('IJsT'),
        S = r('a6qo'),
        C = r('rHpw'),
        j = r('jhWN'),
        E = r('jV+4'),
        P = r('MWbm')
      function k(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var R = (function (e) {
          u()(r, e)
          var t = k(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), '_renderTileLower', function () {
                return e.props.attribution ? e._renderUserAvatar() : e._renderEventDescription()
              }),
              y()(s()(e), '_renderTileUpper', function () {
                var t = e.props,
                  r = t.accessibilityLabel,
                  n = t.badge,
                  a = t.image
                return a
                  ? g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(v.a, { accessibilityLabel: r, aspectMode: O.a.COVER, image: a }),
                      n
                        ? g.createElement(S.a, { align: 'left', background: n.backgroundColor, bold: !0 }, n.text)
                        : null,
                    )
                  : null
              }),
              y()(s()(e), '_renderUserAvatar', function () {
                var t = e.props.attribution
                return t
                  ? g.createElement(
                      P.a,
                      { style: _.accountContainer },
                      g.createElement(
                        P.a,
                        { style: _.avatarContainer },
                        g.createElement(j.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'xLarge',
                          uri: t.profile_image_url_https,
                          withLink: !1,
                        }),
                      ),
                      g.createElement(
                        P.a,
                        { style: _.groupContainer },
                        g.createElement(E.a, {
                          isVerified: t.verified,
                          name: t.name,
                          nameSize: 'subtext2',
                          screenName: t.screen_name,
                          weight: 'bold',
                          withLink: !1,
                          withScreenName: !0,
                          withStackedLayout: !0,
                        }),
                      ),
                    )
                  : null
              }),
              y()(s()(e), '_renderEventDescription', function () {
                var t = e.props,
                  r = t.description,
                  n = t.rightControl
                return r
                  ? g.createElement(
                      P.a,
                      { style: _.eventDescription },
                      g.createElement(
                        h.b,
                        { numberOfLines: 2, size: 'subtext2', style: { width: '100%' }, weight: 'bold' },
                        r,
                      ),
                      g.createElement(P.a, { style: _.rightControl }, n || null),
                    )
                  : null
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    r = e.containerStyle,
                    n = e.link,
                    a = e.onClick
                  return g.createElement(w.a, {
                    accessibilityLabel: t,
                    containerStyle: r,
                    link: n,
                    lower: this._renderTileLower(),
                    onClick: a,
                    upper: this._renderTileUpper(),
                    withInteractiveStyling: !0,
                  })
                },
              },
            ]),
            r
          )
        })(g.Component),
        _ = C.a.create(function (e) {
          return {
            accountContainer: { flexDirection: 'row' },
            avatarContainer: { marginRight: e.spaces.space4 },
            rightControl: { marginTop: e.spaces.space2 },
            groupContainer: { flexDirection: 'row', flexShrink: 1 },
            eventDescription: { flexDirection: 'row' },
          }
        })
      t.a = R
    },
    jUPy: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return T
      })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        p = r('N+ot'),
        f = r.n(p),
        d = r('AuHH'),
        m = r.n(d),
        b = r('KEM+'),
        y = r.n(b),
        g = (r('2G9S'), r('hBvt'), r('z84I'), r('ERkP')),
        v = r('IJsT'),
        h = r('Nxr7'),
        O = (r('yH/f'), r('TIdA')),
        w = r('t62R'),
        S = r('A91F'),
        C = r('gmfB'),
        j = r('rHpw'),
        E = r('MWbm')
      function P(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var k = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        R = (function (e) {
          u()(r, e)
          var t = P(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), 'state', { imageError: !1 }),
              y()(s()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return g.createElement(
                  E.a,
                  { style: _.teamNameContainer },
                  g.createElement(w.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              y()(s()(e), '_renderImage', function () {
                var t = e.props,
                  r = t.isCompact,
                  n = t.team,
                  a = n.imageUrl,
                  c = n.logo,
                  o = e.state.imageError,
                  i = (!c && !a) || o ? _.translucent : {},
                  s = c ? S.a.exact(c.width / c.height) : S.a.SQUARE
                return g.createElement(
                  E.a,
                  { style: [_.imageContainer, i, r && _.compactImageContainer] },
                  g.createElement(O.a, {
                    accessibilityLabel: '',
                    aspectMode: s,
                    image: c || a || '',
                    onError: e._handleImageError,
                    rounded: !c,
                  }),
                )
              }),
              y()(s()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              y()(s()(e), '_renderScore', function () {
                var t = e.props,
                  r = t.gameState,
                  n = t.team,
                  a = t.winnerId,
                  c = n.id,
                  o = n.score,
                  i = n.secondaryScore,
                  s = c === a,
                  l = !a,
                  u = r === C.a.Completed && !s && !l,
                  p = e._shouldRenderScore(),
                  f = e._getTeamScoreSize(k.SCORE),
                  d = i ? e._getTeamScoreSize(k.SECONDARY_SCORE) : void 0
                return p
                  ? g.createElement(
                      E.a,
                      { style: [_.teamScore, u && _.losingTeamScore] },
                      g.createElement(w.b, { color: 'white', numberOfLines: 1, size: f, weight: 'heavy' }, o),
                      i ? g.createElement(w.b, { color: 'white', numberOfLines: 1, size: d, weight: 'bold' }, i) : null,
                    )
                  : null
              }),
              y()(s()(e), '_getTeamScoreSize', function (t) {
                var r = e.props,
                  n = r.isCompact
                if (!!!r.team.secondaryScore) return n ? 'headline1' : 'title4'
                switch (t) {
                  case k.SCORE:
                    return n ? 'subtext2' : 'headline1'
                  case k.SECONDARY_SCORE:
                    return n ? 'subtext3' : 'body'
                  default:
                    return
                }
              }),
              y()(s()(e), '_shouldRenderScore', function () {
                var t = e.props.gameState
                return t === C.a.Completed || t === C.a.InProgress
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fallbackColor,
                    r = e.isCompact,
                    n = e.team.color,
                    a = {
                      backgroundColor:
                        (n && 'rgb('.concat(n.red, ', ').concat(n.green, ', ').concat(n.blue, ')')) ||
                        j.a.theme.colors[t],
                    },
                    c = this._shouldRenderScore(),
                    o = !r || !c
                  return g.createElement(
                    E.a,
                    { style: [_.root, a, r && _.compactRoot] },
                    this._renderImage(),
                    o ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            r
          )
        })(g.Component)
      y()(R, 'defaultProps', { isCompact: !1 })
      var _ = j.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            imageContainer: { alignSelf: 'center', width: e.spaces.space32, marginRight: e.spaces.space12 },
            compactImageContainer: { width: e.spaces.space20 },
            compactRoot: {
              height: 'calc('
                .concat(e.spaces.space48, ' - (')
                .concat(j.a.theme.spaces.space1, ' + ')
                .concat(j.a.theme.spaces.space2, '))'),
            },
            losingTeamScore: { opacity: 0.5 },
            teamNameContainer: { alignSelf: 'center' },
            teamScore: { flexGrow: 2, alignItems: 'flex-end', alignSelf: 'center' },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
          }
        }),
        D = R
      function I(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var T = (function (e) {
        u()(r, e)
        var t = I(r)
        function r() {
          var e
          a()(this, r)
          for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            y()(s()(e), '_renderGameStatus', function () {
              var t = e.props,
                r = t.category,
                n = t.gameClock,
                a = t.gameClockPeriod,
                c = t.gameState,
                o = t.isCompact,
                i = t.startTimeMillis,
                s = t.teams,
                l = t.winnerId
              return g.createElement(h.a, {
                category: r,
                gameClock: n,
                gameClockPeriod: a,
                gameState: c,
                startTimeMillis: i,
                teams: s,
                winnerId: l,
                withCategory: !o,
              })
            }),
            y()(s()(e), '_renderTeamRow', function (t, r) {
              var n = e.props,
                a = n.gameState,
                c = n.isCompact,
                o = n.winnerId,
                i = t.id
              return g.createElement(D, {
                fallbackColor: r % 2 == 0 ? 'gray300' : 'gray700',
                gameState: a,
                isCompact: c,
                key: i,
                team: t,
                winnerId: o,
              })
            }),
            e
          )
        }
        return (
          o()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.accessibilityLabel,
                  r = e.containerStyle,
                  n = e.isCompact,
                  a = e.link,
                  c = e.onClick,
                  o = e.teams
                if (o) {
                  var i = o && o.map(this._renderTeamRow)
                  return g.createElement(v.a, {
                    accessibilityLabel: t,
                    containerStyle: r,
                    isCompact: n,
                    link: a,
                    lower: n ? void 0 : this._renderGameStatus(),
                    onClick: c,
                    upper: i,
                    withInteractiveStyling: !0,
                  })
                }
                return null
              },
            },
          ]),
          r
        )
      })(g.Component)
      y()(T, 'defaultProps', { isCompact: !1 })
    },
    kthL: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ezF+'),
        o = r('VPAj'),
        i = r('caTy'),
        s = r('zh9S'),
        l = r('Rp9C'),
        u = r('rHpw'),
        p = r('tod0')
      function f(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var m = Object(o.a)({ scribe: s.c }),
        b = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            r = l.a.getAllSurfaceDetails(t)
          return r ? { items: [r] } : void 0
        },
        y = function (e) {
          var t = e.entry,
            r = e.scribe,
            n = e.scribeNamespace
          return function () {
            var e = b(t)
            r(d(d({}, n), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        g = u.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        v = c.g({
          bindActions: m,
          component: p.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace
            if (!(r && r.content && r.content.content && r.content.content.callToAction)) return null
            var a = r.content.url,
              c = r.content.content.callToAction.text,
              o = a && Object(i.b)(a)
            return c && o
              ? {
                  containerStyle: g.containerStyle,
                  link: o,
                  text: c,
                  onClick: y({ entry: r, scribe: t, scribeNamespace: n }),
                }
              : null
          },
          shouldDisplayBorder: Object(o.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              a = b(r)
            t(d(d({}, n), {}, { element: 'tile', action: 'impression' }), a)
          },
        })
      t.default = v
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
    tod0: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        a = r('t62R'),
        c = r('IJsT'),
        o = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        i = r.n(o),
        s = r('Lsrn'),
        l = r('shC7'),
        u = r('k/Ka')
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(u.a)(
          'svg',
          f(
            f({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [s.a.root, e.style, l.a.getConstants().isRTL && s.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          n.createElement(
            'g',
            null,
            n.createElement('path', {
              d: 'M22.75 12c0-5.928-4.822-10.75-10.75-10.75S1.25 6.072 1.25 12 6.072 22.75 12 22.75 22.75 17.928 22.75 12zm-10.203 3.85c-.146-.147-.22-.34-.22-.53s.073-.385.22-.53l2.038-2.04H7.813c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.772l-2.038-2.038c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l3.32 3.317c.292.29.292.765 0 1.06l-3.32 3.316c-.293.294-.767.294-1.06 0v.003z',
            }),
          ),
        )
      }
      d.metadata = { width: 24, height: 24 }
      var m = d,
        b = r('rHpw').a.create(function (e) {
          var t = 'calc(2 * '.concat(e.spaces.space32, ')')
          return {
            upper: { height: t, justifyContent: 'flex-end' },
            lower: { height: t, justifyContent: 'flex-start' },
            center: { alignItems: 'center' },
            arrow: { color: e.colors.primary, height: e.spaces.space32, width: e.spaces.space32 },
          }
        })
      t.a = function (e) {
        var t = e.containerStyle,
          r = e.link,
          o = e.onClick,
          i = e.text
        return n.createElement(c.a, {
          accessibilityLabel: i,
          containerStyle: [b.center, t],
          link: r,
          lower: n.createElement(a.b, { color: 'primary' }, i),
          onClick: o,
          stackLayoutLowerStyle: b.lower,
          stackLayoutUpperStyle: b.upper,
          upper: n.createElement(m, { style: b.arrow }),
        })
      }
    },
    vKPG: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = (r('ho0z'), r('2G9S'), r('ezF+')),
        o = r('VPAj'),
        i = r('caTy'),
        s = r('zh9S'),
        l = r('Rp9C'),
        u = r('G6rE'),
        p = r('lzTJ'),
        f = r('rHpw'),
        d = r('iSF/')
      function m(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var y = Object(o.a)({ scribe: s.c }),
        g = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            r = l.a.getAllSurfaceDetails(t)
          return r ? { items: [r] } : void 0
        },
        v = function (e) {
          var t = e.entry,
            r = e.scribe,
            n = e.scribeNamespace
          return function () {
            var e = g(t)
            r(b(b({}, n), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        h = function (e) {
          var t = null == e ? void 0 : e.text
          return t
            ? { backgroundColor: Object(p.a)((null == e ? void 0 : e.backgroundColorName) || '') || void 0, text: t }
            : void 0
        },
        O = f.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        w = c.g({
          bindActions: y,
          component: d.a,
          selectData: function (e) {
            var t = e.entry
            if (!(t && t.content && t.content.content && t.content.content.broadcast)) return {}
            var r = t.content.content.broadcast.userId
            return {
              user: r
                ? function (e) {
                    return u.e.select(e, r)
                  }
                : Object(o.a)(void 0),
            }
          },
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.data.user,
              n = e.entry,
              a = e.scribeNamespace
            if (!(n && n.content && n.content.content && n.content.content.broadcast && r)) return null
            var c = n.content,
              o = c.content,
              s = c.image,
              l = c.url,
              u = o.broadcast.badge,
              p = r.name,
              f = r.screen_name
            return {
              accessibilityLabel: ''.concat(p, ' ').concat(f),
              attribution: r,
              badge: h(u),
              containerStyle: O.containerStyle,
              image: s,
              link: l ? Object(i.b)(l) : '',
              onClick: v({ scribeNamespace: a, scribe: t, entry: n }),
            }
          },
          shouldDisplayBorder: Object(o.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              a = g(r)
            t(b(b({}, n), {}, { element: 'tile', action: 'impression' }), a)
          },
        })
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
