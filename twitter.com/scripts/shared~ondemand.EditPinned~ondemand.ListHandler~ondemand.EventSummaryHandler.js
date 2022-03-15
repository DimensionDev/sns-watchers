;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '0mK8': function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return m
      }),
        t.d(a, 'b', function () {
          return p
        }),
        t.d(a, 'c', function () {
          return h
        })
      t('ho0z'), t('uFXj')
      var r = t('ERkP'),
        n = t.n(r),
        o = t('MWbm'),
        c = t('GcQN'),
        i = t('PU7B'),
        l = t('/WPq'),
        s = t('78ol'),
        d = t('jV+4'),
        u = t('rHpw'),
        m = function (e) {
          var a = e.author,
            t = e.color,
            r = void 0 === t ? 'text' : t,
            o = e.size,
            c = void 0 === o ? 'subtext2' : o,
            i = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            u = e.withLink,
            m = void 0 !== u && u,
            p = e.withScreenName,
            h = void 0 !== p && p
          return n.a.createElement(d.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[c],
            color: r,
            isProtected: a.protected,
            isVerified: a.verified,
            name: a.name,
            nameSize: c,
            profileImageUrl: a.profile_image_url_https,
            screenName: a.screen_name,
            screenNameSize: c,
            style: [g.authorUserName, i],
            withHoverCard: s,
            withLink: m,
            withScreenName: h,
          })
        },
        p = function (e) {
          var a = e.style
          return n.a.createElement(
            o.a,
            { style: [g.lightningBadge, a] },
            n.a.createElement(c.a, { style: g.lightningIcon }),
          )
        },
        h = function (e) {
          var a = e.icon
          return n.a.createElement(
            o.a,
            { style: g.placeholderIconContainer },
            'news' === a
              ? n.a.createElement(i.a, { style: g.placeholderIcon })
              : 'lists' === a
              ? n.a.createElement(l.a, { style: g.placeholderIcon })
              : n.a.createElement(s.a, { style: g.placeholderIcon }),
          )
        },
        g = u.a.create(function (e) {
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
    GliE: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return u
      })
      t('2G9S'), t('hBpG'), t('7x/C')
      var r = t('ajvb'),
        n = t('3XMw'),
        o = t.n(n),
        c = t('qB1G'),
        i = o.a.a3484d21,
        l = o.a.aab2efa8,
        s = o.a.ba21c289,
        d = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        u = function (e, a, t, n, o) {
          var u =
              t && o
                ? (function (e, a) {
                    return e && a
                      ? e.find(function (e) {
                          return e.id === a
                        })
                      : void 0
                  })(t, o)
                : void 0,
            m = Object(r.a)(a),
            p = e || '',
            h = t && t[0] ? d(t[0]) : '',
            g = t && t[1] ? d(t[1]) : '',
            f = n || '',
            b = u ? l({ winner: u.fullName }) : '',
            C = a === c.a.Completed ? (u ? b : i) : f
          return s({ gameCategory: p, gameState: m, accessibleGameClockPeriod: C, teamOneLabel: h, teamTwoLabel: g })
        }
    },
    IJsT: function (e, a, t) {
      'use strict'
      t('hBvt')
      var r = t('ERkP'),
        n = t.n(r),
        o = t('I4+6'),
        c = t('cm6r'),
        i = t('rHpw'),
        l = t('MWbm'),
        s = function (e) {
          var a = e.accessibilityLabel,
            t = e.containerStyle,
            r = e.isCompact,
            s = e.link,
            u = e.lower,
            m = e.onClick,
            p = e.stackLayoutLowerStyle,
            h = e.stackLayoutUpperStyle,
            g = e.upper,
            f = e.withInsetFocusRing,
            b = e.withInteractiveStyling,
            C = o.a.generate({
              backgroundColor: i.a.theme.colors.transparent,
              color: i.a.theme.colors.primary,
              insetFocusRing: f,
            }),
            y = n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(l.a, { style: [d.defaultUpperContainerStyle, h, r && { height: 'auto' }] }, g),
              u ? n.a.createElement(l.a, { style: [d.defaultLowerContainerStyle, p] }, u) : null,
            )
          return n.a.createElement(
            c.a,
            {
              accessibilityLabel: a,
              interactive: b,
              interactiveStyles: b ? C : void 0,
              link: s,
              onClick: m,
              style: [d.root, t],
            },
            y,
          )
        }
      s.defaultProps = { withInsetFocusRing: !0, withInteractiveStyling: !1 }
      var d = i.a.create(function (e) {
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
      a.a = s
    },
    Nxr7: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return N
      })
      var r = t('VrFO'),
        n = t.n(r),
        o = t('Y9Ll'),
        c = t.n(o),
        i = t('1Pcy'),
        l = t.n(i),
        s = t('5Yy7'),
        d = t.n(s),
        u = t('2VqO'),
        m = t.n(u),
        p = t('KEM+'),
        h = t.n(p),
        g = (t('2G9S'), t('Blm6'), t('hBpG'), t('7x/C'), t('ERkP')),
        f = t.n(g),
        b = t('t62R'),
        C = 864e5,
        y = function (e) {
          var a = new Date().setHours(0, 0, 0, 0),
            t = a + C
          return e >= a && e < t ? 0 : e >= t && e < a + 1728e5 ? 1 : -1
        },
        v = t('3XMw'),
        S = t.n(v),
        w = t('pjBI'),
        E = t('gmfB'),
        I = S.a.ccaa970e,
        P = S.a.d725a288,
        R = S.a.db355331,
        _ = S.a.a8428d5e,
        k = S.a.a7aad8b9,
        x = S.a.e431f1aa,
        T = S.a.a7391707,
        O = S.a.d2dbfa91,
        z = S.a.cd734f65,
        L = S.a.c8891d06,
        N = (function (e) {
          d()(t, e)
          var a = m()(t)
          function t() {
            var e
            n()(this, t)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = a.call.apply(a, [this].concat(o))),
              h()(l()(e), '_renderCategory', function () {
                var a = e.props.category
                return a
                  ? f.a.createElement(b.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, a)
                  : null
              }),
              h()(l()(e), '_renderGameScheduledDateTime', function () {
                var a = e.props.startTimeMillis
                if (a) {
                  var t = new Date(parseInt(a, 10)),
                    r = y(t)
                  return -1 === r ? e._renderDateTime(t) : e._renderTodayTomorrow(r, t)
                }
                return null
              }),
              h()(l()(e), '_renderTodayTomorrow', function (e, a) {
                var t = P(a)
                return f.a.createElement(
                  w.a,
                  null,
                  f.a.createElement(b.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? z : L),
                  f.a.createElement(b.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              h()(l()(e), '_renderDateTime', function (e) {
                var a = P(e),
                  t = I(e)
                return f.a.createElement(
                  w.a,
                  null,
                  f.a.createElement(b.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, t),
                  f.a.createElement(b.b, { color: 'gray700', size: 'subtext2' }, a),
                )
              }),
              h()(l()(e), '_renderGameStateValue', function (a, t) {
                var r = e.props.gameClockPeriod,
                  n = e._getWinnerName(),
                  o = a && n ? R({ team: n }) : t && r ? r : void 0
                return o ? f.a.createElement(b.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, o) : null
              }),
              h()(l()(e), '_getWinnerName', function () {
                var a = e.props,
                  t = a.teams,
                  r = a.winnerId,
                  n =
                    t &&
                    t.find(function (e) {
                      return e.id === r
                    })
                return n && n.shortName
              }),
              e
            )
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.gameState,
                    t = e.withCategory,
                    r = a === E.a.Scheduled,
                    n = a === E.a.InProgress,
                    o = a === E.a.Completed
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    r
                      ? this._renderGameScheduledDateTime()
                      : f.a.createElement(
                          w.a,
                          null,
                          f.a.createElement(
                            b.b,
                            { color: n ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case E.a.Scheduled:
                                  return _
                                case E.a.InProgress:
                                  return k
                                case E.a.Completed:
                                  return x
                                case E.a.Postponed:
                                  return T
                                case E.a.Cancelled:
                                  return O
                                default:
                                  return null
                              }
                            })(a),
                          ),
                          this._renderGameStateValue(o, n),
                        ),
                    t ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            t
          )
        })(f.a.Component)
      h()(N, 'defaultProps', { withCategory: !0 })
    },
    ajvb: function (e, a, t) {
      'use strict'
      var r = t('3XMw'),
        n = t.n(r),
        o = t('qB1G'),
        c = n.a.f178e38c,
        i = n.a.b6da6b01,
        l = n.a.i9f615c8,
        s = n.a.f897267a,
        d = n.a.f93c4b69
      a.a = function (e) {
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
            return d
          default:
            return ''
        }
      }
    },
    gmfB: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return r
      })
      t('yH/f')
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
    jUPy: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return x
      })
      var r = t('VrFO'),
        n = t.n(r),
        o = t('Y9Ll'),
        c = t.n(o),
        i = t('1Pcy'),
        l = t.n(i),
        s = t('5Yy7'),
        d = t.n(s),
        u = t('2VqO'),
        m = t.n(u),
        p = t('KEM+'),
        h = t.n(p),
        g = (t('2G9S'), t('hBvt'), t('z84I'), t('ERkP')),
        f = t.n(g),
        b = t('IJsT'),
        C = t('Nxr7'),
        y = (t('yH/f'), t('TIdA')),
        v = t('t62R'),
        S = t('A91F'),
        w = t('gmfB'),
        E = t('rHpw'),
        I = t('MWbm'),
        P = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        R = (function (e) {
          d()(t, e)
          var a = m()(t)
          function t() {
            var e
            n()(this, t)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = a.call.apply(a, [this].concat(o))),
              h()(l()(e), 'state', { imageError: !1 }),
              h()(l()(e), '_renderTeamName', function () {
                var a = e.props.team.shortName
                return f.a.createElement(
                  I.a,
                  { style: _.teamNameContainer },
                  f.a.createElement(v.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, a),
                )
              }),
              h()(l()(e), '_renderImage', function () {
                var a = e.props,
                  t = a.isCompact,
                  r = a.team,
                  n = r.imageUrl,
                  o = r.logo,
                  c = e.state.imageError,
                  i = (!o && !n) || c ? _.translucent : {},
                  l = o ? S.a.exact(o.width / o.height) : S.a.SQUARE
                return f.a.createElement(
                  I.a,
                  { style: [_.imageContainer, i, t && _.compactImageContainer] },
                  f.a.createElement(y.a, {
                    accessibilityLabel: '',
                    aspectMode: l,
                    image: o || n || '',
                    onError: e._handleImageError,
                    rounded: !o,
                  }),
                )
              }),
              h()(l()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              h()(l()(e), '_renderScore', function () {
                var a = e.props,
                  t = a.gameState,
                  r = a.team,
                  n = a.winnerId,
                  o = r.id,
                  c = r.score,
                  i = r.secondaryScore,
                  l = o === n,
                  s = !n,
                  d = t === w.a.Completed && !l && !s,
                  u = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(P.SCORE),
                  p = i ? e._getTeamScoreSize(P.SECONDARY_SCORE) : void 0
                return u
                  ? f.a.createElement(
                      I.a,
                      { style: [_.teamScore, d && _.losingTeamScore] },
                      f.a.createElement(v.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, c),
                      i
                        ? f.a.createElement(v.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, i)
                        : null,
                    )
                  : null
              }),
              h()(l()(e), '_getTeamScoreSize', function (a) {
                var t = e.props,
                  r = t.isCompact
                if (!!!t.team.secondaryScore) return r ? 'headline1' : 'title4'
                switch (a) {
                  case P.SCORE:
                    return r ? 'subtext2' : 'headline1'
                  case P.SECONDARY_SCORE:
                    return r ? 'subtext3' : 'body'
                  default:
                    return
                }
              }),
              h()(l()(e), '_shouldRenderScore', function () {
                var a = e.props.gameState
                return a === w.a.Completed || a === w.a.InProgress
              }),
              e
            )
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.fallbackColor,
                    t = e.isCompact,
                    r = e.team.color,
                    n = {
                      backgroundColor:
                        (r && 'rgb('.concat(r.red, ', ').concat(r.green, ', ').concat(r.blue, ')')) ||
                        E.a.theme.colors[a],
                    },
                    o = this._shouldRenderScore(),
                    c = !t || !o
                  return f.a.createElement(
                    I.a,
                    { style: [_.root, n, t && _.compactRoot] },
                    this._renderImage(),
                    c ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            t
          )
        })(f.a.Component)
      h()(R, 'defaultProps', { isCompact: !1 })
      var _ = E.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            imageContainer: { alignSelf: 'center', width: e.spaces.space32, marginRight: e.spaces.space12 },
            compactImageContainer: { width: e.spaces.space20 },
            compactRoot: {
              height: 'calc('
                .concat(e.spaces.space48, ' - (')
                .concat(E.a.theme.spaces.space1, ' + ')
                .concat(E.a.theme.spaces.space2, '))'),
            },
            losingTeamScore: { opacity: 0.5 },
            teamNameContainer: { alignSelf: 'center' },
            teamScore: { flexGrow: 2, alignItems: 'flex-end', alignSelf: 'center' },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
          }
        }),
        k = R,
        x = (function (e) {
          d()(t, e)
          var a = m()(t)
          function t() {
            var e
            n()(this, t)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = a.call.apply(a, [this].concat(o))),
              h()(l()(e), '_renderGameStatus', function () {
                var a = e.props,
                  t = a.category,
                  r = a.gameClock,
                  n = a.gameClockPeriod,
                  o = a.gameState,
                  c = a.isCompact,
                  i = a.startTimeMillis,
                  l = a.teams,
                  s = a.winnerId
                return f.a.createElement(C.a, {
                  category: t,
                  gameClock: r,
                  gameClockPeriod: n,
                  gameState: o,
                  startTimeMillis: i,
                  teams: l,
                  winnerId: s,
                  withCategory: !c,
                })
              }),
              h()(l()(e), '_renderTeamRow', function (a, t) {
                var r = e.props,
                  n = r.gameState,
                  o = r.isCompact,
                  c = r.winnerId,
                  i = a.id
                return f.a.createElement(k, {
                  fallbackColor: t % 2 == 0 ? 'gray300' : 'gray700',
                  gameState: n,
                  isCompact: o,
                  key: i,
                  team: a,
                  winnerId: c,
                })
              }),
              e
            )
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.accessibilityLabel,
                    t = e.containerStyle,
                    r = e.isCompact,
                    n = e.link,
                    o = e.onClick,
                    c = e.teams
                  if (c) {
                    var i = c && c.map(this._renderTeamRow)
                    return f.a.createElement(b.a, {
                      accessibilityLabel: a,
                      containerStyle: t,
                      isCompact: r,
                      link: n,
                      lower: r ? void 0 : this._renderGameStatus(),
                      onClick: o,
                      upper: i,
                      withInteractiveStyling: !0,
                    })
                  }
                  return null
                },
              },
            ]),
            t
          )
        })(f.a.Component)
      h()(x, 'defaultProps', { isCompact: !1 })
    },
    qB1G: function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return r
      })
      t('yH/f')
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
    xZmF: function (e, a, t) {
      'use strict'
      t('yH/f'), t('2G9S')
      var r = t('0mK8'),
        n = t('ERkP'),
        o = t.n(n),
        c = t('GliE'),
        i = t('YeIG'),
        l = t('MWbm'),
        s = t('TIdA'),
        d = t('A91F'),
        u = t('9Xij'),
        m = t('jUPy'),
        p = t('rHpw'),
        h = Object.freeze({ Fixed: 'fixed', Variable: 'variable' }),
        g = function (e) {
          var a = e.cropCandidates,
            t = e.dataSaverMode,
            n = e.icon,
            c = e.image,
            m = e.isCellWithProminentSocialContext,
            p = e.scoreEvent,
            h = e.type,
            g = b({ isCellWithProminentSocialContext: m, type: h })
          return o.a.createElement(
            l.a,
            { style: [C.coverContainer, g] },
            p
              ? f(p)
              : !c || Object(i.a)(c) || t
              ? t || Object(i.a)(c)
                ? o.a.createElement(u.a, { ratio: 1 }, o.a.createElement(r.c, { icon: n }))
                : null
              : o.a.createElement(s.a, { accessibilityLabel: '', aspectMode: d.a.SQUARE, cropCandidates: a, image: c }),
          )
        },
        f = function (e) {
          var a = e.category,
            t = e.eventState,
            r = e.gameClock,
            n = e.gameClockPeriod,
            i = e.participants,
            l = e.startTimeMillis,
            s = e.winnerId,
            d = Object(c.a)(a, t, i, n, s)
          return o.a.createElement(m.a, {
            accessibilityLabel: d,
            category: a,
            containerStyle: C.scoreCardTile,
            gameClock: r,
            gameClockPeriod: n,
            gameState: t,
            isCompact: !0,
            startTimeMillis: l,
            teams: i,
            winnerId: s,
          })
        },
        b = function (e) {
          var a = e.isCellWithProminentSocialContext
          switch (e.type) {
            case h.Fixed:
              return (a && C.fixedCellThumbnailWithProminentSocialContext) || C.fixedCellThumbnail
            case h.Variable:
              return C.variableCellThumbnail
            default:
              return
          }
        }
      g.defaultProps = { type: 'variable' }
      var C = p.a.create(function (e) {
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
      a.a = g
    },
  },
])
//# sourceMappingURL=WIPED
