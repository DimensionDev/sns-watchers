;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '0mK8': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      }),
        a.d(t, 'b', function () {
          return p
        }),
        a.d(t, 'c', function () {
          return f
        })
      a('ho0z'), a('uFXj')
      var r = a('ERkP'),
        n = a.n(r),
        c = a('MWbm'),
        o = a('GcQN'),
        i = a('PU7B'),
        l = a('/WPq'),
        s = a('78ol'),
        u = a('jV+4'),
        d = a('rHpw'),
        m = function (e) {
          var t = e.author,
            a = e.color,
            r = void 0 === a ? 'normal' : a,
            c = e.size,
            o = void 0 === c ? 'subtext2' : c,
            i = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            f = void 0 !== p && p
          return n.a.createElement(u.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: r,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [h.authorUserName, i],
            withHoverCard: s,
            withLink: m,
            withScreenName: f,
          })
        },
        p = function (e) {
          var t = e.style
          return n.a.createElement(
            c.a,
            { style: [h.lightningBadge, t] },
            n.a.createElement(o.a, { style: h.lightningIcon }),
          )
        },
        f = function (e) {
          var t = e.icon
          return n.a.createElement(
            c.a,
            { style: h.placeholderIconContainer },
            'news' === t
              ? n.a.createElement(i.a, { style: h.placeholderIcon })
              : 'lists' === t
              ? n.a.createElement(l.a, { style: h.placeholderIcon })
              : n.a.createElement(s.a, { style: h.placeholderIcon }),
          )
        },
        h = d.a.create(function (e) {
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
    GliE: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return d
      })
      a('2G9S'), a('hBpG')
      var r = a('ajvb'),
        n = a('3XMw'),
        c = a.n(n),
        o = a('qB1G'),
        i = c.a.a3484d21,
        l = c.a.aab2efa8,
        s = c.a.ba21c289,
        u = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        d = function (e, t, a, n, c) {
          var d =
              a && c
                ? (function (e, t) {
                    return e && t
                      ? e.find(function (e) {
                          return e.id === t
                        })
                      : void 0
                  })(a, c)
                : void 0,
            m = Object(r.a)(t),
            p = e || '',
            f = a && a[0] ? u(a[0]) : '',
            h = a && a[1] ? u(a[1]) : '',
            g = n || '',
            b = d ? l({ winner: d.fullName }) : '',
            y = t === o.a.Completed ? (d ? b : i) : g
          return s({ gameCategory: p, gameState: m, accessibleGameClockPeriod: y, teamOneLabel: f, teamTwoLabel: h })
        }
    },
    IJsT: function (e, t, a) {
      'use strict'
      a('hBvt')
      var r = a('ERkP'),
        n = a.n(r),
        c = a('cm6r'),
        o = a('rHpw'),
        i = a('MWbm'),
        l = function (e) {
          var t = e.accessibilityLabel,
            a = e.containerStyle,
            r = e.isCompact,
            o = e.link,
            l = e.lower,
            u = e.onClick,
            d = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            f = e.withInteractiveStyling,
            h = n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(i.a, { style: [s.defaultUpperContainerStyle, m, r && { height: 'auto' }] }, p),
              l ? n.a.createElement(i.a, { style: [s.defaultLowerContainerStyle, d] }, l) : null,
            )
          return n.a.createElement(
            c.a,
            { accessibilityLabel: t, interactive: f, link: o, onClick: u, style: [s.root, a] },
            h,
          )
        }
      l.defaultProps = { withInteractiveStyling: !1 }
      var s = o.a.create(function (e) {
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
      t.a = l
    },
    Nxr7: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return H
      })
      a('OZaJ')
      var r = a('VrFO'),
        n = a.n(r),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('N+ot'),
        m = a.n(d),
        p = a('AuHH'),
        f = a.n(p),
        h = a('KEM+'),
        g = a.n(h),
        b = (a('2G9S'), a('Blm6'), a('hBpG'), a('ERkP')),
        y = a.n(b),
        C = a('t62R'),
        v = 864e5,
        S = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            a = t + v
          return e >= t && e < a ? 0 : e >= a && e < t + 1728e5 ? 1 : -1
        },
        w = a('3XMw'),
        E = a.n(w),
        R = a('pjBI'),
        I = a('gmfB')
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
          var a,
            r = f()(e)
          if (t) {
            var n = f()(this).constructor
            a = Reflect.construct(r, arguments, n)
          } else a = r.apply(this, arguments)
          return m()(this, a)
        }
      }
      var _ = E.a.ccaa970e,
        k = E.a.d725a288,
        x = E.a.db355331,
        T = E.a.a8428d5e,
        O = E.a.a7aad8b9,
        z = E.a.e431f1aa,
        L = E.a.a7391707,
        N = E.a.d2dbfa91,
        B = E.a.cd734f65,
        G = E.a.c8891d06,
        H = (function (e) {
          u()(a, e)
          var t = P(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? y.a.createElement(C.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              g()(l()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var a = new Date(parseInt(t, 10)),
                    r = S(a)
                  return -1 === r ? e._renderDateTime(a) : e._renderTodayTomorrow(r, a)
                }
                return null
              }),
              g()(l()(e), '_renderTodayTomorrow', function (e, t) {
                var a = k(t)
                return y.a.createElement(
                  R.a,
                  null,
                  y.a.createElement(C.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? B : G),
                  y.a.createElement(C.b, { color: 'gray700', size: 'subtext2' }, a),
                )
              }),
              g()(l()(e), '_renderDateTime', function (e) {
                var t = k(e),
                  a = _(e)
                return y.a.createElement(
                  R.a,
                  null,
                  y.a.createElement(C.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, a),
                  y.a.createElement(C.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              g()(l()(e), '_renderGameStateValue', function (t, a) {
                var r = e.props.gameClockPeriod,
                  n = e._getWinnerName(),
                  c = t && n ? x({ team: n }) : a && r ? r : void 0
                return c ? y.a.createElement(C.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null
              }),
              g()(l()(e), '_getWinnerName', function () {
                var t = e.props,
                  a = t.teams,
                  r = t.winnerId,
                  n =
                    a &&
                    a.find(function (e) {
                      return e.id === r
                    })
                return n && n.shortName
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gameState,
                    a = e.withCategory,
                    r = t === I.a.Scheduled,
                    n = t === I.a.InProgress,
                    c = t === I.a.Completed
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    r
                      ? this._renderGameScheduledDateTime()
                      : y.a.createElement(
                          R.a,
                          null,
                          y.a.createElement(
                            C.b,
                            { color: n ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case I.a.Scheduled:
                                  return T
                                case I.a.InProgress:
                                  return O
                                case I.a.Completed:
                                  return z
                                case I.a.Postponed:
                                  return L
                                case I.a.Cancelled:
                                  return N
                                default:
                                  return null
                              }
                            })(t),
                          ),
                          this._renderGameStateValue(c, n),
                        ),
                    a ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      g()(H, 'defaultProps', { withCategory: !0 })
    },
    ajvb: function (e, t, a) {
      'use strict'
      var r = a('3XMw'),
        n = a.n(r),
        c = a('qB1G'),
        o = n.a.f178e38c,
        i = n.a.b6da6b01,
        l = n.a.i9f615c8,
        s = n.a.f897267a,
        u = n.a.f93c4b69
      t.a = function (e) {
        switch (e) {
          case c.a.Scheduled:
            return o
          case c.a.InProgress:
            return i
          case c.a.Completed:
            return l
          case c.a.Postponed:
            return s
          case c.a.Cancelled:
            return u
          default:
            return ''
        }
      }
    },
    gmfB: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('yH/f')
      var r = Object.freeze({
        Scheduled: 'Scheduled',
        InProgress: 'InProgress',
        Completed: 'Completed',
        Postponed: 'Postponed',
        Cancelled: 'Cancelled',
        Unused6: '_Unused6',
        Unused7: '_Unused7',
      })
    },
    jUPy: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return L
      })
      a('OZaJ')
      var r = a('VrFO'),
        n = a.n(r),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('N+ot'),
        m = a.n(d),
        p = a('AuHH'),
        f = a.n(p),
        h = a('KEM+'),
        g = a.n(h),
        b = (a('2G9S'), a('hBvt'), a('z84I'), a('ERkP')),
        y = a.n(b),
        C = a('IJsT'),
        v = a('Nxr7'),
        S = (a('yH/f'), a('TIdA')),
        w = a('t62R'),
        E = a('A91F'),
        R = a('gmfB'),
        I = a('rHpw'),
        P = a('MWbm')
      function _(e) {
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
          var a,
            r = f()(e)
          if (t) {
            var n = f()(this).constructor
            a = Reflect.construct(r, arguments, n)
          } else a = r.apply(this, arguments)
          return m()(this, a)
        }
      }
      var k = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        x = (function (e) {
          u()(a, e)
          var t = _(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), 'state', { imageError: !1 }),
              g()(l()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return y.a.createElement(
                  P.a,
                  { style: T.teamNameContainer },
                  y.a.createElement(w.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              g()(l()(e), '_renderImage', function () {
                var t = e.props,
                  a = t.isCompact,
                  r = t.team,
                  n = r.imageUrl,
                  c = r.logo,
                  o = e.state.imageError,
                  i = (!c && !n) || o ? T.translucent : {},
                  l = c ? E.a.exact(c.width / c.height) : E.a.SQUARE
                return y.a.createElement(
                  P.a,
                  { style: [T.imageContainer, i, a && T.compactImageContainer] },
                  y.a.createElement(S.a, {
                    accessibilityLabel: '',
                    aspectMode: l,
                    image: c || n || '',
                    onError: e._handleImageError,
                    rounded: !c,
                  }),
                )
              }),
              g()(l()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              g()(l()(e), '_renderScore', function () {
                var t = e.props,
                  a = t.gameState,
                  r = t.team,
                  n = t.winnerId,
                  c = r.id,
                  o = r.score,
                  i = r.secondaryScore,
                  l = c === n,
                  s = !n,
                  u = a === R.a.Completed && !l && !s,
                  d = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(k.SCORE),
                  p = i ? e._getTeamScoreSize(k.SECONDARY_SCORE) : void 0
                return d
                  ? y.a.createElement(
                      P.a,
                      { style: [T.teamScore, u && T.losingTeamScore] },
                      y.a.createElement(w.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, o),
                      i
                        ? y.a.createElement(w.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, i)
                        : null,
                    )
                  : null
              }),
              g()(l()(e), '_getTeamScoreSize', function (t) {
                var a = e.props,
                  r = a.isCompact
                if (!!!a.team.secondaryScore) return r ? 'headline1' : 'title4'
                switch (t) {
                  case k.SCORE:
                    return r ? 'subtext2' : 'headline1'
                  case k.SECONDARY_SCORE:
                    return r ? 'subtext3' : 'body'
                  default:
                    return
                }
              }),
              g()(l()(e), '_shouldRenderScore', function () {
                var t = e.props.gameState
                return t === R.a.Completed || t === R.a.InProgress
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fallbackColor,
                    a = e.isCompact,
                    r = e.team.color,
                    n = {
                      backgroundColor:
                        (r && 'rgb('.concat(r.red, ', ').concat(r.green, ', ').concat(r.blue, ')')) ||
                        I.a.theme.colors[t],
                    },
                    c = this._shouldRenderScore(),
                    o = !a || !c
                  return y.a.createElement(
                    P.a,
                    { style: [T.root, n, a && T.compactRoot] },
                    this._renderImage(),
                    o ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      g()(x, 'defaultProps', { isCompact: !1 })
      var T = I.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            imageContainer: { alignSelf: 'center', width: e.spaces.space32, marginRight: e.spaces.space12 },
            compactImageContainer: { width: e.spaces.space20 },
            compactRoot: {
              height: 'calc('
                .concat(e.spaces.space48, ' - (')
                .concat(I.a.theme.spaces.space1, ' + ')
                .concat(I.a.theme.spaces.space2, '))'),
            },
            losingTeamScore: { opacity: 0.5 },
            teamNameContainer: { alignSelf: 'center' },
            teamScore: { flexGrow: 2, alignItems: 'flex-end', alignSelf: 'center' },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
          }
        }),
        O = x
      function z(e) {
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
          var a,
            r = f()(e)
          if (t) {
            var n = f()(this).constructor
            a = Reflect.construct(r, arguments, n)
          } else a = r.apply(this, arguments)
          return m()(this, a)
        }
      }
      var L = (function (e) {
        u()(a, e)
        var t = z(a)
        function a() {
          var e
          n()(this, a)
          for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            g()(l()(e), '_renderGameStatus', function () {
              var t = e.props,
                a = t.category,
                r = t.gameClock,
                n = t.gameClockPeriod,
                c = t.gameState,
                o = t.isCompact,
                i = t.startTimeMillis,
                l = t.teams,
                s = t.winnerId
              return y.a.createElement(v.a, {
                category: a,
                gameClock: r,
                gameClockPeriod: n,
                gameState: c,
                startTimeMillis: i,
                teams: l,
                winnerId: s,
                withCategory: !o,
              })
            }),
            g()(l()(e), '_renderTeamRow', function (t, a) {
              var r = e.props,
                n = r.gameState,
                c = r.isCompact,
                o = r.winnerId,
                i = t.id
              return y.a.createElement(O, {
                fallbackColor: a % 2 == 0 ? 'gray300' : 'gray700',
                gameState: n,
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
          o()(a, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.accessibilityLabel,
                  a = e.containerStyle,
                  r = e.isCompact,
                  n = e.link,
                  c = e.onClick,
                  o = e.teams
                if (o) {
                  var i = o && o.map(this._renderTeamRow)
                  return y.a.createElement(C.a, {
                    accessibilityLabel: t,
                    containerStyle: a,
                    isCompact: r,
                    link: n,
                    lower: r ? void 0 : this._renderGameStatus(),
                    onClick: c,
                    upper: i,
                    withInteractiveStyling: !0,
                  })
                }
                return null
              },
            },
          ]),
          a
        )
      })(y.a.Component)
      g()(L, 'defaultProps', { isCompact: !1 })
    },
    qB1G: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('yH/f')
      var r = Object.freeze({
        Scheduled: 'Scheduled',
        InProgress: 'InProgress',
        Completed: 'Completed',
        Postponed: 'Postponed',
        Cancelled: 'Cancelled',
        Unused6: '_Unused6',
        Unused7: '_Unused7',
      })
    },
    xZmF: function (e, t, a) {
      'use strict'
      a('yH/f'), a('2G9S')
      var r = a('0mK8'),
        n = a('ERkP'),
        c = a.n(n),
        o = a('GliE'),
        i = a('YeIG'),
        l = a('MWbm'),
        s = a('TIdA'),
        u = a('A91F'),
        d = a('9Xij'),
        m = a('jUPy'),
        p = a('rHpw'),
        f = Object.freeze({ Fixed: 'fixed', Variable: 'variable' }),
        h = function (e) {
          var t = e.cropCandidates,
            a = e.dataSaverMode,
            n = e.icon,
            o = e.image,
            m = e.isCellWithProminentSocialContext,
            p = e.scoreEvent,
            f = e.type,
            h = b({ isCellWithProminentSocialContext: m, type: f })
          return c.a.createElement(
            l.a,
            { style: [y.coverContainer, h] },
            p
              ? g(p)
              : !o || Object(i.a)(o) || a
              ? a || Object(i.a)(o)
                ? c.a.createElement(d.a, { ratio: 1 }, c.a.createElement(r.c, { icon: n }))
                : null
              : c.a.createElement(s.a, { accessibilityLabel: '', aspectMode: u.a.SQUARE, cropCandidates: t, image: o }),
          )
        },
        g = function (e) {
          var t = e.category,
            a = e.eventState,
            r = e.gameClock,
            n = e.gameClockPeriod,
            i = e.participants,
            l = e.startTimeMillis,
            s = e.winnerId,
            u = Object(o.a)(t, a, i, n, s)
          return c.a.createElement(m.a, {
            accessibilityLabel: u,
            category: t,
            containerStyle: y.scoreCardTile,
            gameClock: r,
            gameClockPeriod: n,
            gameState: a,
            isCompact: !0,
            startTimeMillis: l,
            teams: i,
            winnerId: s,
          })
        },
        b = function (e) {
          var t = e.isCellWithProminentSocialContext
          switch (e.type) {
            case f.Fixed:
              return (t && y.fixedCellThumbnailWithProminentSocialContext) || y.fixedCellThumbnail
            case f.Variable:
              return y.variableCellThumbnail
            default:
              return
          }
        }
      h.defaultProps = { type: 'variable' }
      var y = p.a.create(function (e) {
        return {
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          fixedCellThumbnail: { height: p.a.theme.spaces.space48, width: p.a.theme.spaces.space48 },
          fixedCellThumbnailWithProminentSocialContext: {
            height: 'calc('
              .concat(p.a.theme.spaces.space48, ' + ')
              .concat(p.a.theme.spaces.space40, ' + ')
              .concat(p.a.theme.spaces.space1, ' + ')
              .concat(p.a.theme.spaces.space2, ')'),
            width: 'calc('
              .concat(p.a.theme.spaces.space48, ' + ')
              .concat(p.a.theme.spaces.space40, ' + ')
              .concat(p.a.theme.spaces.space1, ' + ')
              .concat(p.a.theme.spaces.space2, ')'),
          },
          scoreCardTile: { padding: 0 },
          variableCellThumbnail: {
            maxHeight: 'calc('.concat(p.a.theme.spaces.space48, ' * 2)'),
            maxWidth: 'calc('.concat(p.a.theme.spaces.space48, ' * 2)'),
            minHeight: 'calc('.concat(p.a.theme.spaces.space48, ' + ').concat(p.a.theme.spaces.space20, ')'),
            minWidth: 'calc('.concat(p.a.theme.spaces.space48, ' + ').concat(p.a.theme.spaces.space20, ')'),
            height: '15%',
            width: '15%',
          },
        }
      })
      t.a = h
    },
  },
])
//# sourceMappingURL=WIPED
