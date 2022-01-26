;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '0mK8': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return d
      }),
        a.d(t, 'b', function () {
          return m
        }),
        a.d(t, 'c', function () {
          return p
        })
      a('ho0z'), a('uFXj')
      var r = a('ERkP'),
        n = a('MWbm'),
        c = a('GcQN'),
        o = a('PU7B'),
        i = a('/WPq'),
        l = a('78ol'),
        s = a('jV+4'),
        u = a('rHpw'),
        d = function (e) {
          var t = e.author,
            a = e.color,
            n = void 0 === a ? 'normal' : a,
            c = e.size,
            o = void 0 === c ? 'subtext2' : c,
            i = e.style,
            l = e.withHoverCard,
            u = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            h = void 0 !== p && p
          return r.createElement(s.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: n,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [f.authorUserName, i],
            withHoverCard: u,
            withLink: m,
            withScreenName: h,
          })
        },
        m = function (e) {
          var t = e.style
          return r.createElement(
            n.a,
            { style: [f.lightningBadge, t] },
            r.createElement(c.a, { style: f.lightningIcon }),
          )
        },
        p = function (e) {
          var t = e.icon
          return r.createElement(
            n.a,
            { style: f.placeholderIconContainer },
            'news' === t
              ? r.createElement(o.a, { style: f.placeholderIcon })
              : 'lists' === t
              ? r.createElement(i.a, { style: f.placeholderIcon })
              : r.createElement(l.a, { style: f.placeholderIcon }),
          )
        },
        f = u.a.create(function (e) {
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
        n = a('cm6r'),
        c = a('rHpw'),
        o = a('MWbm'),
        i = function (e) {
          var t = e.accessibilityLabel,
            a = e.containerStyle,
            c = e.isCompact,
            i = e.link,
            s = e.lower,
            u = e.onClick,
            d = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            f = e.withInteractiveStyling,
            h = r.createElement(
              r.Fragment,
              null,
              r.createElement(o.a, { style: [l.defaultUpperContainerStyle, m, c && { height: 'auto' }] }, p),
              s ? r.createElement(o.a, { style: [l.defaultLowerContainerStyle, d] }, s) : null,
            )
          return r.createElement(
            n.a,
            { accessibilityLabel: t, interactive: f, link: i, onClick: u, style: [l.root, a] },
            h,
          )
        }
      i.defaultProps = { withInteractiveStyling: !1 }
      var l = c.a.create(function (e) {
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
      t.a = i
    },
    Nxr7: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return G
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
        y = a('t62R'),
        C = 864e5,
        v = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            a = t + C
          return e >= t && e < a ? 0 : e >= a && e < t + 1728e5 ? 1 : -1
        },
        S = a('3XMw'),
        w = a.n(S),
        E = a('pjBI'),
        R = a('gmfB')
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
          var a,
            r = f()(e)
          if (t) {
            var n = f()(this).constructor
            a = Reflect.construct(r, arguments, n)
          } else a = r.apply(this, arguments)
          return m()(this, a)
        }
      }
      var P = w.a.ccaa970e,
        _ = w.a.d725a288,
        k = w.a.db355331,
        x = w.a.a8428d5e,
        T = w.a.a7aad8b9,
        O = w.a.e431f1aa,
        z = w.a.a7391707,
        L = w.a.d2dbfa91,
        N = w.a.cd734f65,
        B = w.a.c8891d06,
        G = (function (e) {
          u()(a, e)
          var t = I(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? b.createElement(y.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              g()(l()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var a = new Date(parseInt(t, 10)),
                    r = v(a)
                  return -1 === r ? e._renderDateTime(a) : e._renderTodayTomorrow(r, a)
                }
                return null
              }),
              g()(l()(e), '_renderTodayTomorrow', function (e, t) {
                var a = _(t)
                return b.createElement(
                  E.a,
                  null,
                  b.createElement(y.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? N : B),
                  b.createElement(y.b, { color: 'gray700', size: 'subtext2' }, a),
                )
              }),
              g()(l()(e), '_renderDateTime', function (e) {
                var t = _(e),
                  a = P(e)
                return b.createElement(
                  E.a,
                  null,
                  b.createElement(y.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, a),
                  b.createElement(y.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              g()(l()(e), '_renderGameStateValue', function (t, a) {
                var r = e.props.gameClockPeriod,
                  n = e._getWinnerName(),
                  c = t && n ? k({ team: n }) : a && r ? r : void 0
                return c ? b.createElement(y.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null
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
                    r = t === R.a.Scheduled,
                    n = t === R.a.InProgress,
                    c = t === R.a.Completed
                  return b.createElement(
                    b.Fragment,
                    null,
                    r
                      ? this._renderGameScheduledDateTime()
                      : b.createElement(
                          E.a,
                          null,
                          b.createElement(
                            y.b,
                            { color: n ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case R.a.Scheduled:
                                  return x
                                case R.a.InProgress:
                                  return T
                                case R.a.Completed:
                                  return O
                                case R.a.Postponed:
                                  return z
                                case R.a.Cancelled:
                                  return L
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
        })(b.Component)
      g()(G, 'defaultProps', { withCategory: !0 })
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
        return z
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
        y = a('IJsT'),
        C = a('Nxr7'),
        v = (a('yH/f'), a('TIdA')),
        S = a('t62R'),
        w = a('A91F'),
        E = a('gmfB'),
        R = a('rHpw'),
        I = a('MWbm')
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
      var _ = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        k = (function (e) {
          u()(a, e)
          var t = P(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), 'state', { imageError: !1 }),
              g()(l()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return b.createElement(
                  I.a,
                  { style: x.teamNameContainer },
                  b.createElement(S.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              g()(l()(e), '_renderImage', function () {
                var t = e.props,
                  a = t.isCompact,
                  r = t.team,
                  n = r.imageUrl,
                  c = r.logo,
                  o = e.state.imageError,
                  i = (!c && !n) || o ? x.translucent : {},
                  l = c ? w.a.exact(c.width / c.height) : w.a.SQUARE
                return b.createElement(
                  I.a,
                  { style: [x.imageContainer, i, a && x.compactImageContainer] },
                  b.createElement(v.a, {
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
                  u = a === E.a.Completed && !l && !s,
                  d = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(_.SCORE),
                  p = i ? e._getTeamScoreSize(_.SECONDARY_SCORE) : void 0
                return d
                  ? b.createElement(
                      I.a,
                      { style: [x.teamScore, u && x.losingTeamScore] },
                      b.createElement(S.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, o),
                      i ? b.createElement(S.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, i) : null,
                    )
                  : null
              }),
              g()(l()(e), '_getTeamScoreSize', function (t) {
                var a = e.props,
                  r = a.isCompact
                if (!!!a.team.secondaryScore) return r ? 'headline1' : 'title4'
                switch (t) {
                  case _.SCORE:
                    return r ? 'subtext2' : 'headline1'
                  case _.SECONDARY_SCORE:
                    return r ? 'subtext3' : 'body'
                  default:
                    return
                }
              }),
              g()(l()(e), '_shouldRenderScore', function () {
                var t = e.props.gameState
                return t === E.a.Completed || t === E.a.InProgress
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
                        R.a.theme.colors[t],
                    },
                    c = this._shouldRenderScore(),
                    o = !a || !c
                  return b.createElement(
                    I.a,
                    { style: [x.root, n, a && x.compactRoot] },
                    this._renderImage(),
                    o ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            a
          )
        })(b.Component)
      g()(k, 'defaultProps', { isCompact: !1 })
      var x = R.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            imageContainer: { alignSelf: 'center', width: e.spaces.space32, marginRight: e.spaces.space12 },
            compactImageContainer: { width: e.spaces.space20 },
            compactRoot: {
              height: 'calc('
                .concat(e.spaces.space48, ' - (')
                .concat(R.a.theme.spaces.space1, ' + ')
                .concat(R.a.theme.spaces.space2, '))'),
            },
            losingTeamScore: { opacity: 0.5 },
            teamNameContainer: { alignSelf: 'center' },
            teamScore: { flexGrow: 2, alignItems: 'flex-end', alignSelf: 'center' },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
          }
        }),
        T = k
      function O(e) {
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
      var z = (function (e) {
        u()(a, e)
        var t = O(a)
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
              return b.createElement(C.a, {
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
              return b.createElement(T, {
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
                  return b.createElement(y.a, {
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
      })(b.Component)
      g()(z, 'defaultProps', { isCompact: !1 })
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
        c = a('GliE'),
        o = a('YeIG'),
        i = a('MWbm'),
        l = a('TIdA'),
        s = a('A91F'),
        u = a('9Xij'),
        d = a('jUPy'),
        m = a('rHpw'),
        p = Object.freeze({ Fixed: 'fixed', Variable: 'variable' }),
        f = function (e) {
          var t = e.cropCandidates,
            a = e.dataSaverMode,
            c = e.icon,
            d = e.image,
            m = e.isCellWithProminentSocialContext,
            p = e.scoreEvent,
            f = e.type,
            y = g({ isCellWithProminentSocialContext: m, type: f })
          return n.createElement(
            i.a,
            { style: [b.coverContainer, y] },
            p
              ? h(p)
              : !d || Object(o.a)(d) || a
              ? a || Object(o.a)(d)
                ? n.createElement(u.a, { ratio: 1 }, n.createElement(r.c, { icon: c }))
                : null
              : n.createElement(l.a, { accessibilityLabel: '', aspectMode: s.a.SQUARE, cropCandidates: t, image: d }),
          )
        },
        h = function (e) {
          var t = e.category,
            a = e.eventState,
            r = e.gameClock,
            o = e.gameClockPeriod,
            i = e.participants,
            l = e.startTimeMillis,
            s = e.winnerId,
            u = Object(c.a)(t, a, i, o, s)
          return n.createElement(d.a, {
            accessibilityLabel: u,
            category: t,
            containerStyle: b.scoreCardTile,
            gameClock: r,
            gameClockPeriod: o,
            gameState: a,
            isCompact: !0,
            startTimeMillis: l,
            teams: i,
            winnerId: s,
          })
        },
        g = function (e) {
          var t = e.isCellWithProminentSocialContext
          switch (e.type) {
            case p.Fixed:
              return (t && b.fixedCellThumbnailWithProminentSocialContext) || b.fixedCellThumbnail
            case p.Variable:
              return b.variableCellThumbnail
            default:
              return
          }
        }
      f.defaultProps = { type: 'variable' }
      var b = m.a.create(function (e) {
        return {
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          fixedCellThumbnail: { height: m.a.theme.spaces.space48, width: m.a.theme.spaces.space48 },
          fixedCellThumbnailWithProminentSocialContext: {
            height: 'calc('
              .concat(m.a.theme.spaces.space48, ' + ')
              .concat(m.a.theme.spaces.space40, ' + ')
              .concat(m.a.theme.spaces.space1, ' + ')
              .concat(m.a.theme.spaces.space2, ')'),
            width: 'calc('
              .concat(m.a.theme.spaces.space48, ' + ')
              .concat(m.a.theme.spaces.space40, ' + ')
              .concat(m.a.theme.spaces.space1, ' + ')
              .concat(m.a.theme.spaces.space2, ')'),
          },
          scoreCardTile: { padding: 0 },
          variableCellThumbnail: {
            maxHeight: 'calc('.concat(m.a.theme.spaces.space48, ' * 2)'),
            maxWidth: 'calc('.concat(m.a.theme.spaces.space48, ' * 2)'),
            minHeight: 'calc('.concat(m.a.theme.spaces.space48, ' + ').concat(m.a.theme.spaces.space20, ')'),
            minWidth: 'calc('.concat(m.a.theme.spaces.space48, ' + ').concat(m.a.theme.spaces.space20, ')'),
            height: '15%',
            width: '15%',
          },
        }
      })
      t.a = f
    },
  },
])
//# sourceMappingURL=WIPED
