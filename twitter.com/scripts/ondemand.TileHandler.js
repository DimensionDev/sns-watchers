;(window.webpackJsonp = window.webpackJsonp || []).push([
  [233],
  {
    CdHO: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ezF+'),
        o = r('ERkP'),
        i = r.n(o),
        s = r('VPAj'),
        l = r('RoyM'),
        u = r('caTy'),
        p = r('zh9S'),
        f = r('Rp9C'),
        d = r('lzTJ'),
        m = r('rHpw'),
        b = r('iSF/')
      function y(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v = Object(s.a)({ scribe: p.c }),
        h = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            r = f.a.getAllSurfaceDetails(t)
          return r ? { items: [r] } : void 0
        },
        O = function (e) {
          var t = e.entry,
            r = e.scribe,
            n = e.scribeNamespace
          return function () {
            var e = h(t)
            r(g(g({}, n), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        w = function (e) {
          var t = null == e ? void 0 : e.text
          return t
            ? { backgroundColor: Object(d.a)((null == e ? void 0 : e.backgroundColorName) || '') || void 0, text: t }
            : void 0
        },
        S = m.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        C = c.g({
          bindActions: v,
          component: b.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.feedbackItems,
              a = e.scribeNamespace
            if (!(r && r.content && r.content.content && r.content.content.standard)) return null
            var c = r.content,
              o = c.content,
              s = c.image,
              p = c.url,
              f = o.standard,
              d = f.badge,
              m = f.title
            return {
              accessibilityLabel: m,
              badge: w(d),
              containerStyle: S.containerStyle,
              description: m,
              image: s,
              link: p ? Object(u.b)(p) : '',
              onClick: O({ scribeNamespace: a, scribe: t, entry: r }),
              rightControl: i.a.createElement(l.a, { feedbackItems: n }),
            }
          },
          shouldDisplayBorder: Object(s.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              a = h(r)
            t(g(g({}, n), {}, { element: 'tile', action: 'impression' }), a)
          },
        })
      t.default = C
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
    IJsT: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        a = r.n(n),
        c = r('cm6r'),
        o = r('rHpw'),
        i = r('MWbm'),
        s = function (e) {
          var t = e.accessibilityLabel,
            r = e.containerStyle,
            n = e.isCompact,
            o = e.link,
            s = e.lower,
            u = e.onClick,
            p = e.stackLayoutLowerStyle,
            f = e.stackLayoutUpperStyle,
            d = e.upper,
            m = e.withInteractiveStyling,
            b = a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(i.a, { style: [l.defaultUpperContainerStyle, f, n && { height: 'auto' }] }, d),
              s ? a.a.createElement(i.a, { style: [l.defaultLowerContainerStyle, p] }, s) : null,
            )
          return a.a.createElement(
            c.a,
            { accessibilityLabel: t, interactive: m, link: o, onClick: u, style: [l.root, r] },
            b,
          )
        }
      s.defaultProps = { withInteractiveStyling: !1 }
      var l = o.a.create(function (e) {
        return {
          root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large },
          defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: 'flex-end' },
          defaultUpperContainerStyle: {
            height: 'calc('.concat(e.spaces.space48, '*2)'),
            overflow: 'hidden',
            borderRadius: e.borderRadii.large,
          },
        }
      })
      t.a = s
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
        v = r.n(g),
        h = r('t62R'),
        O = 864e5,
        w = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            r = t + O
          return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1
        },
        S = r('3XMw'),
        C = r.n(S),
        E = r('pjBI'),
        j = r('gmfB')
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
      var k = C.a.ccaa970e,
        R = C.a.d725a288,
        I = C.a.db355331,
        L = C.a.a8428d5e,
        _ = C.a.a7aad8b9,
        D = C.a.e431f1aa,
        T = C.a.a7391707,
        x = C.a.d2dbfa91,
        N = C.a.cd734f65,
        M = C.a.c8891d06,
        z = (function (e) {
          u()(r, e)
          var t = P(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? v.a.createElement(h.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              y()(s()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var r = new Date(parseInt(t, 10)),
                    n = w(r)
                  return -1 === n ? e._renderDateTime(r) : e._renderTodayTomorrow(n, r)
                }
                return null
              }),
              y()(s()(e), '_renderTodayTomorrow', function (e, t) {
                var r = R(t)
                return v.a.createElement(
                  E.a,
                  null,
                  v.a.createElement(h.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? N : M),
                  v.a.createElement(h.b, { color: 'gray700', size: 'subtext2' }, r),
                )
              }),
              y()(s()(e), '_renderDateTime', function (e) {
                var t = R(e),
                  r = k(e)
                return v.a.createElement(
                  E.a,
                  null,
                  v.a.createElement(h.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, r),
                  v.a.createElement(h.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              y()(s()(e), '_renderGameStateValue', function (t, r) {
                var n = e.props.gameClockPeriod,
                  a = e._getWinnerName(),
                  c = t && a ? I({ team: a }) : r && n ? n : void 0
                return c ? v.a.createElement(h.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null
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
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    n
                      ? this._renderGameScheduledDateTime()
                      : v.a.createElement(
                          E.a,
                          null,
                          v.a.createElement(
                            h.b,
                            { color: a ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case j.a.Scheduled:
                                  return L
                                case j.a.InProgress:
                                  return _
                                case j.a.Completed:
                                  return D
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
        })(v.a.Component)
      y()(z, 'defaultProps', { withCategory: !0 })
    },
    RoyM: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r.n(n),
        c = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('zb92')),
        o = Object(c.a)({
          loader: function () {
            return r.e(169).then(r.bind(null, 'ACNv'))
          },
        }),
        i = r('4bW+'),
        s = r('IG7M'),
        l = r('rHpw'),
        u = r('Irs7'),
        p = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          r = e.feedbackItems,
          n = e.isDisplayedOnMedia
        if (r && r.length > 0) {
          return a.a.createElement(s.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return a.a.createElement(o, { actionItems: r, onClose: e })
            },
            style: p.curationControl,
            testID: i.a.caret,
            withDarkBackground: n,
          })
        }
        return null
      })
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
        v = r.n(g),
        h = r('TIdA'),
        O = r('t62R'),
        w = r('A91F'),
        S = r('IJsT'),
        C = r('a6qo'),
        E = r('rHpw'),
        j = r('jhWN'),
        P = r('jV+4'),
        k = r('MWbm')
      function R(e) {
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
      var I = (function (e) {
          u()(r, e)
          var t = R(r)
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
                  ? v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(h.a, { accessibilityLabel: r, aspectMode: w.a.COVER, image: a }),
                      n
                        ? v.a.createElement(C.a, { align: 'left', background: n.backgroundColor, bold: !0 }, n.text)
                        : null,
                    )
                  : null
              }),
              y()(s()(e), '_renderUserAvatar', function () {
                var t = e.props.attribution
                return t
                  ? v.a.createElement(
                      k.a,
                      { style: L.accountContainer },
                      v.a.createElement(
                        k.a,
                        { style: L.avatarContainer },
                        v.a.createElement(j.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'xLarge',
                          uri: t.profile_image_url_https,
                          withLink: !1,
                        }),
                      ),
                      v.a.createElement(
                        k.a,
                        { style: L.groupContainer },
                        v.a.createElement(P.a, {
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
                  ? v.a.createElement(
                      k.a,
                      { style: L.eventDescription },
                      v.a.createElement(
                        O.b,
                        { numberOfLines: 2, size: 'subtext2', style: { width: '100%' }, weight: 'bold' },
                        r,
                      ),
                      v.a.createElement(k.a, { style: L.rightControl }, n || null),
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
                  return v.a.createElement(S.a, {
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
        })(v.a.Component),
        L = E.a.create(function (e) {
          return {
            accountContainer: { flexDirection: 'row' },
            avatarContainer: { marginRight: e.spaces.space4 },
            rightControl: { marginTop: e.spaces.space2 },
            groupContainer: { flexDirection: 'row', flexShrink: 1 },
            eventDescription: { flexDirection: 'row' },
          }
        })
      t.a = I
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
        v = r.n(g),
        h = r('IJsT'),
        O = r('Nxr7'),
        w = (r('yH/f'), r('TIdA')),
        S = r('t62R'),
        C = r('A91F'),
        E = r('gmfB'),
        j = r('rHpw'),
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
      var R = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        I = (function (e) {
          u()(r, e)
          var t = k(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), 'state', { imageError: !1 }),
              y()(s()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return v.a.createElement(
                  P.a,
                  { style: L.teamNameContainer },
                  v.a.createElement(S.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              y()(s()(e), '_renderImage', function () {
                var t = e.props,
                  r = t.isCompact,
                  n = t.team,
                  a = n.imageUrl,
                  c = n.logo,
                  o = e.state.imageError,
                  i = (!c && !a) || o ? L.translucent : {},
                  s = c ? C.a.exact(c.width / c.height) : C.a.SQUARE
                return v.a.createElement(
                  P.a,
                  { style: [L.imageContainer, i, r && L.compactImageContainer] },
                  v.a.createElement(w.a, {
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
                  u = r === E.a.Completed && !s && !l,
                  p = e._shouldRenderScore(),
                  f = e._getTeamScoreSize(R.SCORE),
                  d = i ? e._getTeamScoreSize(R.SECONDARY_SCORE) : void 0
                return p
                  ? v.a.createElement(
                      P.a,
                      { style: [L.teamScore, u && L.losingTeamScore] },
                      v.a.createElement(S.b, { color: 'white', numberOfLines: 1, size: f, weight: 'heavy' }, o),
                      i
                        ? v.a.createElement(S.b, { color: 'white', numberOfLines: 1, size: d, weight: 'bold' }, i)
                        : null,
                    )
                  : null
              }),
              y()(s()(e), '_getTeamScoreSize', function (t) {
                var r = e.props,
                  n = r.isCompact
                if (!!!r.team.secondaryScore) return n ? 'headline1' : 'title4'
                switch (t) {
                  case R.SCORE:
                    return n ? 'subtext2' : 'headline1'
                  case R.SECONDARY_SCORE:
                    return n ? 'subtext3' : 'body'
                  default:
                    return
                }
              }),
              y()(s()(e), '_shouldRenderScore', function () {
                var t = e.props.gameState
                return t === E.a.Completed || t === E.a.InProgress
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
                  return v.a.createElement(
                    P.a,
                    { style: [L.root, a, r && L.compactRoot] },
                    this._renderImage(),
                    o ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component)
      y()(I, 'defaultProps', { isCompact: !1 })
      var L = j.a.create(function (e) {
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
        _ = I
      function D(e) {
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
        var t = D(r)
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
              return v.a.createElement(O.a, {
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
              return v.a.createElement(_, {
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
                  return v.a.createElement(h.a, {
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
      })(v.a.Component)
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
        a = r.n(n),
        c = r('t62R'),
        o = r('IJsT'),
        i = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        s = r.n(i),
        l = r('Lsrn'),
        u = r('shC7'),
        p = r('k/Ka')
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
                s()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var m = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(p.a)(
          'svg',
          d(
            d({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [l.a.root, e.style, u.a.getConstants().isRTL && l.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M22.75 12c0-5.928-4.822-10.75-10.75-10.75S1.25 6.072 1.25 12 6.072 22.75 12 22.75 22.75 17.928 22.75 12zm-10.203 3.85c-.146-.147-.22-.34-.22-.53s.073-.385.22-.53l2.038-2.04H7.813c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.772l-2.038-2.038c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l3.32 3.317c.292.29.292.765 0 1.06l-3.32 3.316c-.293.294-.767.294-1.06 0v.003z',
            }),
          ),
        )
      }
      m.metadata = { width: 24, height: 24 }
      var b = m,
        y = r('rHpw').a.create(function (e) {
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
          n = e.onClick,
          i = e.text
        return a.a.createElement(o.a, {
          accessibilityLabel: i,
          containerStyle: [y.center, t],
          link: r,
          lower: a.a.createElement(c.b, { color: 'primary' }, i),
          onClick: n,
          stackLayoutLowerStyle: y.lower,
          stackLayoutUpperStyle: y.upper,
          upper: a.a.createElement(b, { style: y.arrow }),
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
