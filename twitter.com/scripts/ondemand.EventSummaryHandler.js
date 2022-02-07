;(window.webpackJsonp = window.webpackJsonp || []).push([
  [207],
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
          return g
        })
      a('ho0z'), a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('MWbm'),
        i = a('GcQN'),
        c = a('PU7B'),
        l = a('/WPq'),
        s = a('78ol'),
        d = a('jV+4'),
        u = a('rHpw'),
        m = function (e) {
          var t = e.author,
            a = e.color,
            n = void 0 === a ? 'normal' : a,
            o = e.size,
            i = void 0 === o ? 'subtext2' : o,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            u = e.withLink,
            m = void 0 !== u && u,
            p = e.withScreenName,
            g = void 0 !== p && p
          return r.a.createElement(d.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[i],
            color: n,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: i,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: i,
            style: [h.authorUserName, c],
            withHoverCard: s,
            withLink: m,
            withScreenName: g,
          })
        },
        p = function (e) {
          var t = e.style
          return r.a.createElement(
            o.a,
            { style: [h.lightningBadge, t] },
            r.a.createElement(i.a, { style: h.lightningIcon }),
          )
        },
        g = function (e) {
          var t = e.icon
          return r.a.createElement(
            o.a,
            { style: h.placeholderIconContainer },
            'news' === t
              ? r.a.createElement(c.a, { style: h.placeholderIcon })
              : 'lists' === t
              ? r.a.createElement(l.a, { style: h.placeholderIcon })
              : r.a.createElement(s.a, { style: h.placeholderIcon }),
          )
        },
        h = u.a.create(function (e) {
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
        return u
      })
      a('2G9S'), a('hBpG'), a('7x/C')
      var n = a('ajvb'),
        r = a('3XMw'),
        o = a.n(r),
        i = a('qB1G'),
        c = o.a.a3484d21,
        l = o.a.aab2efa8,
        s = o.a.ba21c289,
        d = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        u = function (e, t, a, r, o) {
          var u =
              a && o
                ? (function (e, t) {
                    return e && t
                      ? e.find(function (e) {
                          return e.id === t
                        })
                      : void 0
                  })(a, o)
                : void 0,
            m = Object(n.a)(t),
            p = e || '',
            g = a && a[0] ? d(a[0]) : '',
            h = a && a[1] ? d(a[1]) : '',
            f = r || '',
            v = u ? l({ winner: u.fullName }) : '',
            b = t === i.a.Completed ? (u ? v : c) : f
          return s({ gameCategory: p, gameState: m, accessibleGameClockPeriod: b, teamOneLabel: g, teamTwoLabel: h })
        }
    },
    IJsT: function (e, t, a) {
      'use strict'
      a('hBvt')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('cm6r'),
        i = a('rHpw'),
        c = a('MWbm'),
        l = function (e) {
          var t = e.accessibilityLabel,
            a = e.containerStyle,
            n = e.isCompact,
            i = e.link,
            l = e.lower,
            d = e.onClick,
            u = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            g = e.withInteractiveStyling,
            h = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(c.a, { style: [s.defaultUpperContainerStyle, m, n && { height: 'auto' }] }, p),
              l ? r.a.createElement(c.a, { style: [s.defaultLowerContainerStyle, u] }, l) : null,
            )
          return r.a.createElement(
            o.a,
            { accessibilityLabel: t, interactive: g, link: i, onClick: d, style: [s.root, a] },
            h,
          )
        }
      l.defaultProps = { withInteractiveStyling: !1 }
      var s = i.a.create(function (e) {
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
        return F
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        m = a.n(u),
        p = a('KEM+'),
        g = a.n(p),
        h = (a('2G9S'), a('Blm6'), a('hBpG'), a('7x/C'), a('ERkP')),
        f = a.n(h),
        v = a('t62R'),
        b = 864e5,
        C = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            a = t + b
          return e >= t && e < a ? 0 : e >= a && e < t + 1728e5 ? 1 : -1
        },
        y = a('3XMw'),
        S = a.n(y),
        E = a('pjBI'),
        w = a('gmfB'),
        x = S.a.ccaa970e,
        I = S.a.d725a288,
        T = S.a.db355331,
        k = S.a.a8428d5e,
        P = S.a.a7aad8b9,
        _ = S.a.e431f1aa,
        M = S.a.a7391707,
        O = S.a.d2dbfa91,
        R = S.a.cd734f65,
        L = S.a.c8891d06,
        F = (function (e) {
          d()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? f.a.createElement(v.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              g()(l()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var a = new Date(parseInt(t, 10)),
                    n = C(a)
                  return -1 === n ? e._renderDateTime(a) : e._renderTodayTomorrow(n, a)
                }
                return null
              }),
              g()(l()(e), '_renderTodayTomorrow', function (e, t) {
                var a = I(t)
                return f.a.createElement(
                  E.a,
                  null,
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? R : L),
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2' }, a),
                )
              }),
              g()(l()(e), '_renderDateTime', function (e) {
                var t = I(e),
                  a = x(e)
                return f.a.createElement(
                  E.a,
                  null,
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, a),
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              g()(l()(e), '_renderGameStateValue', function (t, a) {
                var n = e.props.gameClockPeriod,
                  r = e._getWinnerName(),
                  o = t && r ? T({ team: r }) : a && n ? n : void 0
                return o ? f.a.createElement(v.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, o) : null
              }),
              g()(l()(e), '_getWinnerName', function () {
                var t = e.props,
                  a = t.teams,
                  n = t.winnerId,
                  r =
                    a &&
                    a.find(function (e) {
                      return e.id === n
                    })
                return r && r.shortName
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gameState,
                    a = e.withCategory,
                    n = t === w.a.Scheduled,
                    r = t === w.a.InProgress,
                    o = t === w.a.Completed
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    n
                      ? this._renderGameScheduledDateTime()
                      : f.a.createElement(
                          E.a,
                          null,
                          f.a.createElement(
                            v.b,
                            { color: r ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case w.a.Scheduled:
                                  return k
                                case w.a.InProgress:
                                  return P
                                case w.a.Completed:
                                  return _
                                case w.a.Postponed:
                                  return M
                                case w.a.Cancelled:
                                  return O
                                default:
                                  return null
                              }
                            })(t),
                          ),
                          this._renderGameStateValue(o, r),
                        ),
                    a ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      g()(F, 'defaultProps', { withCategory: !0 })
    },
    RoyM: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        o = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        i = Object(o.a)({
          loader: function () {
            return a.e(171).then(a.bind(null, 'ACNv'))
          },
        }),
        c = a('4bW+'),
        l = a('IG7M'),
        s = a('rHpw'),
        d = a('Irs7'),
        u = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(d.a)(function (e) {
        var t = e.analytics,
          a = e.feedbackItems,
          n = e.isDisplayedOnMedia
        if (a && a.length > 0) {
          return r.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.a.createElement(i, { actionItems: a, onClose: e })
            },
            style: u.curationControl,
            testID: c.a.caret,
            withDarkBackground: n,
          })
        }
        return null
      })
    },
    ajvb: function (e, t, a) {
      'use strict'
      var n = a('3XMw'),
        r = a.n(n),
        o = a('qB1G'),
        i = r.a.f178e38c,
        c = r.a.b6da6b01,
        l = r.a.i9f615c8,
        s = r.a.f897267a,
        d = r.a.f93c4b69
      t.a = function (e) {
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
            return d
          default:
            return ''
        }
      }
    },
    gmfB: function (e, t, a) {
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
    hxu0: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(c.a.Consumer, null, function (a) {
            return i.a.createElement(e, r()({}, t, { isInSidebar: a }))
          })
        }
      }
    },
    jUPy: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return _
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        m = a.n(u),
        p = a('KEM+'),
        g = a.n(p),
        h = (a('2G9S'), a('hBvt'), a('z84I'), a('ERkP')),
        f = a.n(h),
        v = a('IJsT'),
        b = a('Nxr7'),
        C = (a('yH/f'), a('TIdA')),
        y = a('t62R'),
        S = a('A91F'),
        E = a('gmfB'),
        w = a('rHpw'),
        x = a('MWbm'),
        I = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        T = (function (e) {
          d()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), 'state', { imageError: !1 }),
              g()(l()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return f.a.createElement(
                  x.a,
                  { style: k.teamNameContainer },
                  f.a.createElement(y.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              g()(l()(e), '_renderImage', function () {
                var t = e.props,
                  a = t.isCompact,
                  n = t.team,
                  r = n.imageUrl,
                  o = n.logo,
                  i = e.state.imageError,
                  c = (!o && !r) || i ? k.translucent : {},
                  l = o ? S.a.exact(o.width / o.height) : S.a.SQUARE
                return f.a.createElement(
                  x.a,
                  { style: [k.imageContainer, c, a && k.compactImageContainer] },
                  f.a.createElement(C.a, {
                    accessibilityLabel: '',
                    aspectMode: l,
                    image: o || r || '',
                    onError: e._handleImageError,
                    rounded: !o,
                  }),
                )
              }),
              g()(l()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              g()(l()(e), '_renderScore', function () {
                var t = e.props,
                  a = t.gameState,
                  n = t.team,
                  r = t.winnerId,
                  o = n.id,
                  i = n.score,
                  c = n.secondaryScore,
                  l = o === r,
                  s = !r,
                  d = a === E.a.Completed && !l && !s,
                  u = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(I.SCORE),
                  p = c ? e._getTeamScoreSize(I.SECONDARY_SCORE) : void 0
                return u
                  ? f.a.createElement(
                      x.a,
                      { style: [k.teamScore, d && k.losingTeamScore] },
                      f.a.createElement(y.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, i),
                      c
                        ? f.a.createElement(y.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, c)
                        : null,
                    )
                  : null
              }),
              g()(l()(e), '_getTeamScoreSize', function (t) {
                var a = e.props,
                  n = a.isCompact
                if (!!!a.team.secondaryScore) return n ? 'headline1' : 'title4'
                switch (t) {
                  case I.SCORE:
                    return n ? 'subtext2' : 'headline1'
                  case I.SECONDARY_SCORE:
                    return n ? 'subtext3' : 'body'
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
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fallbackColor,
                    a = e.isCompact,
                    n = e.team.color,
                    r = {
                      backgroundColor:
                        (n && 'rgb('.concat(n.red, ', ').concat(n.green, ', ').concat(n.blue, ')')) ||
                        w.a.theme.colors[t],
                    },
                    o = this._shouldRenderScore(),
                    i = !a || !o
                  return f.a.createElement(
                    x.a,
                    { style: [k.root, r, a && k.compactRoot] },
                    this._renderImage(),
                    i ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      g()(T, 'defaultProps', { isCompact: !1 })
      var k = w.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            imageContainer: { alignSelf: 'center', width: e.spaces.space32, marginRight: e.spaces.space12 },
            compactImageContainer: { width: e.spaces.space20 },
            compactRoot: {
              height: 'calc('
                .concat(e.spaces.space48, ' - (')
                .concat(w.a.theme.spaces.space1, ' + ')
                .concat(w.a.theme.spaces.space2, '))'),
            },
            losingTeamScore: { opacity: 0.5 },
            teamNameContainer: { alignSelf: 'center' },
            teamScore: { flexGrow: 2, alignItems: 'flex-end', alignSelf: 'center' },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
          }
        }),
        P = T,
        _ = (function (e) {
          d()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), '_renderGameStatus', function () {
                var t = e.props,
                  a = t.category,
                  n = t.gameClock,
                  r = t.gameClockPeriod,
                  o = t.gameState,
                  i = t.isCompact,
                  c = t.startTimeMillis,
                  l = t.teams,
                  s = t.winnerId
                return f.a.createElement(b.a, {
                  category: a,
                  gameClock: n,
                  gameClockPeriod: r,
                  gameState: o,
                  startTimeMillis: c,
                  teams: l,
                  winnerId: s,
                  withCategory: !i,
                })
              }),
              g()(l()(e), '_renderTeamRow', function (t, a) {
                var n = e.props,
                  r = n.gameState,
                  o = n.isCompact,
                  i = n.winnerId,
                  c = t.id
                return f.a.createElement(P, {
                  fallbackColor: a % 2 == 0 ? 'gray300' : 'gray700',
                  gameState: r,
                  isCompact: o,
                  key: c,
                  team: t,
                  winnerId: i,
                })
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.containerStyle,
                    n = e.isCompact,
                    r = e.link,
                    o = e.onClick,
                    i = e.teams
                  if (i) {
                    var c = i && i.map(this._renderTeamRow)
                    return f.a.createElement(v.a, {
                      accessibilityLabel: t,
                      containerStyle: a,
                      isCompact: n,
                      link: r,
                      lower: n ? void 0 : this._renderGameStatus(),
                      onClick: o,
                      upper: c,
                      withInteractiveStyling: !0,
                    })
                  }
                  return null
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      g()(_, 'defaultProps', { isCompact: !1 })
    },
    prG5: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return _
      })
      var n = a('97Jx'),
        r = a.n(n),
        o = a('m3Bd'),
        i = a.n(o),
        c = a('VrFO'),
        l = a.n(c),
        s = a('Y9Ll'),
        d = a.n(s),
        u = a('1Pcy'),
        m = a.n(u),
        p = a('5Yy7'),
        g = a.n(p),
        h = a('2VqO'),
        f = a.n(h),
        v = a('KEM+'),
        b = a.n(v),
        C = (a('2G9S'), a('ERkP')),
        y = a.n(C),
        S = a('nT9l'),
        E = a('3XMw'),
        w = a.n(E),
        x = 'image',
        I = a('TIdA'),
        T = a('a6qo'),
        k = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        P = w.a.f93bb3ee,
        _ = (function (e) {
          g()(a, e)
          var t = f()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(m()(e), '_renderContent', function (t) {
                var a = t.resourceSelectionHandler,
                  n = t.useMinimumData,
                  o = e.props,
                  c = o.accessibilityLabel,
                  l = (o.hideAcceptOverlay, o.shouldShowAltLabel),
                  s = i()(o, k)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    I.a,
                    r()({}, s, { accessibilityLabel: c, onVariantSelection: a, previewMode: n, testID: x }),
                  ),
                  l ? y.a.createElement(T.a, { align: 'left', altLabel: c }) : null,
                )
              }),
              e
            )
          }
          return (
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hideAcceptOverlay,
                    a = e.image
                  return y.a.createElement(S.a, {
                    acceptLabel: P,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof a ? a : a.url,
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component)
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
    'tg+X': function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('t62R'),
        i = a('3XMw'),
        c = a.n(i),
        l = a('rHpw'),
        s = function (e) {
          var t = e.groupedTrends,
            a = e.linkColor,
            n = e.textColor,
            i = d(t, a)
          return i ? r.a.createElement(o.b, { color: n, numberOfLines: 2, size: 'subtext2', style: g.root }, i) : null
        }
      s.defaultProps = { textColor: 'gray700' }
      var d = function (e, t) {
          return e.length >= 2 ? m(e, t) : 1 === e.length ? u(e[0], t) : null
        },
        u = function (e, t) {
          return r.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, p(e, t, !0))
        },
        m = function (e, t) {
          return r.a.createElement(c.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return r.a.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: a && g.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        g = l.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = s
    },
    uuEz: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ezF+'),
        i = a('VPAj'),
        c = a('97Jx'),
        l = a.n(c),
        s = a('m3Bd'),
        d = a.n(s),
        u = a('ERkP'),
        m = a.n(u),
        p = (a('z84I'), a('ho0z'), a('k+3s')),
        g = a('x5Pi'),
        h = a('tI3i'),
        f = a.n(h),
        v = a('6rlp'),
        b = a('caTy'),
        C = a('Zejx'),
        y = a('G6rE'),
        S = a('rxPX'),
        E = a('0KEI'),
        w = function (e, t) {
          return t.entry.content
        },
        x = function (e, t) {
          var a = w(0, t),
            n = a.socialContext && a.socialContext.topicContext && a.socialContext.topicContext.topicId
          return n ? C.a.select(e, n) : void 0
        },
        I = function (e, t) {
          var a = w(0, t).publisherId
          return a ? y.e.select(e, a) : void 0
        },
        T = Object(S.a)()
          .propsFromState(function () {
            return { eventSummary: w, publisher: I, topic: x }
          })
          .adjustStateProps(function (e) {
            var t = e.eventSummary,
              a = e.publisher,
              n = e.topic,
              r = t.displayType,
              o = t.groupedTrends,
              i = t.promotedMetadata,
              c = t.richContext,
              l = Object(b.b)(t.url)
            f()(l, 'link cannot be undefined in EventSummaryHero')
            var s = Object(g.d)({
                isCellWithProminentSocialContext: r === p.a.CellWithProminentSocialContext,
                socialContext: t.socialContext,
                topic: n,
              }),
              d = (o || []).map(function (e) {
                return { name: e.name, link: Object(b.b)(e.url) }
              })
            return {
              badge: t.badge,
              displayType: t.displayType,
              groupedTrends: d,
              image: t.image,
              link: l,
              promotedMetadata: i,
              publisher: a,
              richContext: c,
              socialContext: s,
              supportingText: t.supportingText,
              timeString: t.timeString,
              title: t.title,
            }
          })
          .propsFromActions(function () {
            return {
              logTrend: v.c,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('URT_EVENT_SUMMARY'),
            }
          })
          .withAnalytics(),
        k = (a('hBvt'), a('xZmF')),
        P = a('wtjx'),
        _ = a('P1r1'),
        M = function (e, t) {
          return t.entry.content
        },
        O = function (e, t) {
          var a = M(0, t),
            n = a.socialContext && a.socialContext.topicContext && a.socialContext.topicContext.topicId
          return n ? C.a.select(e, n) : void 0
        },
        R = function (e, t) {
          return t.entry.content.displayType === p.a.CellWithProminentSocialContext
        },
        L = Object(S.a)()
          .propsFromState(function () {
            return { dataSaverMode: _.k, eventSummary: M, hasProminentSocialContext: R, topic: O }
          })
          .adjustStateProps(function (e) {
            var t,
              a = e.dataSaverMode,
              n = e.eventSummary,
              r = e.hasProminentSocialContext,
              o = e.topic
            if (r && n.scoreEvent) {
              var i = n.scoreEvent,
                c = i.category,
                l = i.eventState,
                s = i.gameClock,
                d = i.gameClockPeriod,
                u = i.participants
              t = {
                category: c,
                eventState: l,
                gameClock: s,
                gameClockPeriod: d,
                startTimeMillis: i.startTimeMillis,
                participants: u,
                winnerId: i.winnerId,
              }
            }
            return { dataSaverMode: a, hasProminentSocialContext: r, id: n.id, scoreEvent: t, topic: o }
          })
          .propsFromActions(function () {
            return { saveAsRecentSearch: P.a }
          }),
        F = a('RoyM'),
        z = (a('KqXw'), a('WNMA'), a('MvUL'), a('0mK8')),
        j = a('rcen'),
        A = a('MWbm'),
        H = a('pjBI'),
        D = a('t62R'),
        W = a('tg+X'),
        N = a('e5HP'),
        G = a('jV+4'),
        B = a('Nxr7'),
        V = a('Wms4'),
        U = a('rHpw'),
        X = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        Y = function (e) {
          var t = e.badge,
            a = e.groupedTrends,
            n = e.hasProminentSocialContext,
            r = e.linkColor,
            o = e.promotedContent,
            i = e.promotedTrendDescription,
            c = e.publisher,
            l = e.publisherTitleColor,
            s = void 0 === l ? 'normal' : l,
            d = e.richContext,
            u = e.scoreEvent,
            p = e.shouldTruncateTitle,
            g = e.style,
            h = e.supportingText,
            f = e.textColor,
            v = void 0 === f ? 'gray700' : f,
            b = e.timeString,
            C = e.title,
            y = e.titleFontSize,
            S = void 0 === y ? 'body' : y,
            E = e.titleWeight,
            w = void 0 === E ? 'bold' : E,
            x = C.replace('#', '').charAt(0).match(X) ? 'rtl' : 'ltr',
            I = n ? void 0 : Q.title
          return m.a.createElement(
            A.a,
            { style: g },
            n
              ? null
              : m.a.createElement(
                  H.a,
                  { color: v, style: Q.aboveTitle },
                  h ? m.a.createElement(D.b, { color: v, numberOfLines: 1, size: 'subtext2' }, h) : null,
                  c ? m.a.createElement(z.a, { author: c, color: s, size: 'subtext2' }) : null,
                  t || b ? J(b, t, v) : null,
                ),
            m.a.createElement(
              D.b,
              { color: s, dir: x, numberOfLines: p ? 3 : void 0, size: S, style: I, weight: w, withHashflags: !0 },
              C,
            ),
            m.a.createElement(W.a, { groupedTrends: a, linkColor: r, textColor: v }),
            n
              ? m.a.createElement(
                  A.a,
                  { style: Q.belowTitle },
                  u
                    ? K(u)
                    : (t || b) && c
                    ? q({ badge: t, publisher: c, textColor: v, timeString: b }) || J(b, t, v)
                    : null,
                )
              : null,
            o && o.advertiser
              ? m.a.createElement(
                  m.a.Fragment,
                  null,
                  m.a.createElement(D.b, { color: v }, i),
                  m.a.createElement(N.a, { color: 'white', promotedContent: o, style: Q.promotedIndicator }),
                )
              : null,
            d
              ? m.a.createElement(j.a, { color: v, entities: d.entities, rtl: d.rtl, size: 'subtext2', text: d.text })
              : null,
          )
        },
        q = function (e) {
          var t = e.badge,
            a = e.publisher,
            n = e.textColor,
            r = e.timeString,
            o = m.a.createElement(G.a, {
              isProtected: a.protected,
              isVerified: a.verified,
              name: a.name,
              nameSize: 'subtext2',
              profileImageUrl: a.profile_image_url_https,
            })
          return m.a.createElement(H.a, { style: Q.publisherRow }, o, J(r, t, n))
        },
        K = function (e) {
          var t = e.category,
            a = e.eventState,
            n = e.gameClock,
            r = e.gameClockPeriod,
            o = e.participants,
            i = e.startTimeMillis,
            c = e.winnerId
          return m.a.createElement(B.a, {
            category: t,
            gameClock: n,
            gameClockPeriod: r,
            gameState: a,
            startTimeMillis: i,
            teams: o,
            winnerId: c,
            withCategory: !1,
          })
        },
        J = function (e, t, a) {
          return t && t.text
            ? m.a.createElement(V.a, { type: 'live' }, t.text)
            : e
            ? m.a.createElement(
                A.a,
                { style: Q.timestamp },
                m.a.createElement(D.b, { color: a, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        Q = U.a.create(function (e) {
          return {
            aboveTitle: { alignItems: 'center', flexDirection: 'row' },
            belowTitle: { marginTop: e.spaces.space4 },
            promotedIndicator: { marginTop: e.spaces.space12 },
            publisherRow: { alignItems: 'center' },
            timestamp: { maxWidth: '50%' },
            title: { marginVertical: e.spaces.space2 },
          }
        }),
        Z = m.a.memo(Y),
        $ = a('PbbS'),
        ee = a('LWCC'),
        te = a('9B+1'),
        ae = a('8bWS'),
        ne = a('3IPs'),
        re = a('qbku'),
        oe = a('X04g'),
        ie = a('PbQQ'),
        ce = a('htQn'),
        le = a('5mJL'),
        se = a('21zW'),
        de = a('hxu0'),
        ue = function (e) {
          var t = e.badge,
            a = e.dataSaverMode,
            n = e.feedbackItems,
            r = e.groupedTrends,
            o = e.hasProminentSocialContext,
            i = e.id,
            c = e.image,
            l = e.isInSidebar,
            s = e.link,
            d = e.onClick,
            u = e.onImpression,
            p = e.publisher,
            g = e.richContext,
            h = e.saveAsRecentSearch,
            f = e.scoreEvent,
            v = e.shouldStoreTypeaheadItem,
            b = e.socialContext,
            C = e.supportingText,
            y = e.timeString,
            S = e.title,
            E = e.topic
          m.a.useEffect(function () {
            u && u()
          }, [])
          var w = m.a.useCallback(
              function () {
                d(),
                  h &&
                    v &&
                    v(oe.a.ItemType.EVENT) &&
                    h({
                      event: {
                        id: i,
                        image: c || { url: '', height: 0, width: 0 },
                        supportText: C,
                        title: S,
                        type: ne.a.Event,
                      },
                    })
              },
              [i, c, d, h, v, C, S],
            ),
            x = m.a.useMemo(
              function () {
                return null != n && n.length ? m.a.createElement(F.a, { feedbackItems: n }) : null
              },
              [n],
            )
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              ce.a,
              { link: e.withAnchorless(s), onClick: w, style: ge.rootLink, withDarkerInteractiveBackground: l },
              o && b
                ? m.a.createElement(
                    le.a,
                    { rightControl: x, style: ge.socialContextRow },
                    m.a.createElement(pe, { socialContext: b, topic: E }),
                  )
                : null,
              m.a.createElement(
                A.a,
                { style: ge.row },
                m.a.createElement(Z, {
                  badge: t,
                  groupedTrends: r,
                  hasProminentSocialContext: o,
                  publisher: p,
                  richContext: g,
                  scoreEvent: f,
                  style: ge.details,
                  supportingText: C,
                  timeString: y,
                  title: S,
                }),
                m.a.createElement(k.a, {
                  dataSaverMode: a,
                  icon: 'news',
                  image: c,
                  isCellWithProminentSocialContext: o,
                  scoreEvent: f,
                  type: o ? 'fixed' : void 0,
                }),
              ),
            )
          })
        },
        me = function (e) {
          var t = e.socialContext,
            a = e.topic,
            n = t.contextType,
            r = t.landingUrl,
            o = t.text,
            i = t.topicContext,
            c = i && Object(ae.c)(i),
            l = m.a.useMemo(
              function () {
                return a
                  ? m.a.createElement(
                      m.a.Fragment,
                      null,
                      m.a.createElement(se.a, { style: ge.topicMiddot }),
                      m.a.createElement(ee.a, {
                        isTransparent: !0,
                        size: 'smallCompact',
                        textMode: $.a.FollowTopic,
                        topic: a,
                      }),
                    )
                  : null
              },
              [a],
            )
          return m.a.createElement(re.a, {
            contextType: n,
            link: r ? Object(b.b)(r) : void 0,
            rightControl: c ? l : void 0,
            text: o,
            topicData: a && i ? Object(te.a)(i) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        pe = m.a.memo(me),
        ge = U.a.create(function (e) {
          return {
            details: { flex: 1, marginRight: e.spaces.space12 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            rootLink: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            row: { flexDirection: 'row' },
            socialContextRow: { justifyContent: 'space-between', marginBottom: e.spaces.space4 },
          }
        }),
        he = Object(de.a)(L(m.a.memo(ue))),
        fe = (a('hBpG'), a('7x/C'), a('29/U')),
        ve = a('Fg8X'),
        be = a('XOJV'),
        Ce = function (e, t) {
          return t.entry.content
        },
        ye = function (e, t) {
          var a,
            n,
            r,
            o =
              null === (a = t.entry.content.media) ||
              void 0 === a ||
              null === (n = a.mediaEntity) ||
              void 0 === n ||
              null === (r = n.tweetMedia) ||
              void 0 === r
                ? void 0
                : r.momentId
          return ve.a.select(e, o)
        },
        Se = function (e, t) {
          var a,
            n,
            r,
            o =
              null === (a = t.entry.content.media) ||
              void 0 === a ||
              null === (n = a.mediaEntity) ||
              void 0 === n ||
              null === (r = n.tweetMedia) ||
              void 0 === r
                ? void 0
                : r.tweetId
          return o ? be.a.select(e, o) : void 0
        },
        Ee = function (e, t) {
          var a,
            n = null === (a = t.entry.content.promotedMetadata) || void 0 === a ? void 0 : a.advertiserId
          return n ? y.e.select(e, n) : void 0
        },
        we = function (e) {
          var t = e.eventSummary,
            a = e.tweet
          if (a) {
            var n,
              r,
              o,
              i,
              c = null === (n = t.media) || void 0 === n || null === (r = n.mediaKey) || void 0 === r ? void 0 : r.id
            return null === (o = a.extended_entities) || void 0 === o || null === (i = o.media) || void 0 === i
              ? void 0
              : i.find(function (e) {
                  return e.id_str === c
                })
          }
        },
        xe = Object(S.a)()
          .propsFromState(function () {
            return { advertiser: Ee, eventSummary: Ce, moment: ye, tweet: Se }
          })
          .adjustStateProps(function (e) {
            var t = e.advertiser,
              a = e.eventSummary,
              n = e.moment,
              r = e.tweet,
              o = a.promotedMetadata
            return {
              coverMediaFromTweet: we({ tweet: r, eventSummary: a }),
              manualCrops: Object(fe.f)(n),
              promotedContent: o
                ? {
                    advertiser: { id_str: o.advertiserId },
                    advertiser_name: t ? t.name : void 0,
                    impression_id: o.impressionId,
                    disclosure_type: 'NoDisclosure',
                  }
                : void 0,
              promotedTrendDescription: o ? o.promotedTrendDescription : void 0,
              tweetId: null == r ? void 0 : r.id_str,
            }
          }),
        Ie = a('VrFO'),
        Te = a.n(Ie),
        ke = a('Y9Ll'),
        Pe = a.n(ke),
        _e = a('5Yy7'),
        Me = a.n(_e),
        Oe = a('2VqO'),
        Re = a.n(Oe),
        Le = (a('2G9S'), a('prG5')),
        Fe = a('Modb'),
        ze = a('lklz'),
        je = a('9Xij'),
        Ae = a('XrEN'),
        He = a('3dad'),
        De = a('A91F'),
        We = { red: 0, green: 0, blue: 0 },
        Ne = (function (e) {
          Me()(a, e)
          var t = Re()(a)
          function a() {
            return Te()(this, a), t.apply(this, arguments)
          }
          return (
            Pe()(a, [
              {
                key: 'render',
                value: function () {
                  var e = U.a.theme.aspectRatios.landscape
                  return m.a.createElement(
                    je.a,
                    { ratio: e },
                    m.a.createElement(
                      A.a,
                      { style: [Ge.maxHeightWidth, this._getBackgroundColorStyle()] },
                      this._renderCover(),
                    ),
                    m.a.createElement(A.a, { style: [U.a.absoluteFill, this._getGradientColorStyle()] }),
                  )
                },
              },
              {
                key: '_renderCover',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet,
                    a = e.image,
                    n = e.promotedContent,
                    r = e.tweetId
                  if (r && t && 'photo' !== t.type) {
                    var o = Ae.a.extractVideoProps(ze.b.forTweet(r), t)
                    return m.a.createElement(
                      Fe.a,
                      l()({}, o, {
                        aspectRatio: U.a.theme.aspectRatios.landscape,
                        displayOptions: { objectFitVideo: 'cover', hideLeftBadges: !0, hidePosterImage: !0 },
                        forceLoop: !0,
                        hideDataSaverAcceptOverlay: !0,
                        hidePreviewPlayButton: !0,
                        promotedContent: n,
                        showControls: !1,
                      }),
                    )
                  }
                  if (t) {
                    var i = t.ext_alt_text || '',
                      c = He.a.getOriginalImage(t)
                    return this._renderCoverImage(c, i)
                  }
                  return this._renderCoverImage(a)
                },
              },
              {
                key: '_renderCoverImage',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
                  return e
                    ? m.a.createElement(Le.a, {
                        accessibilityLabel: t,
                        aspectMode: De.a.exact(U.a.theme.aspectRatios.landscape),
                        cropCandidates: this._getCropCandidates(),
                        hideAcceptOverlay: !0,
                        image: e,
                      })
                    : null
                },
              },
              {
                key: '_getBackgroundColorStyle',
                value: function () {
                  var e = this._getDominantColor()
                  return {
                    backgroundColor: e
                      ? 'rgb('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ')')
                      : U.a.theme.colors.primary,
                  }
                },
              },
              {
                key: '_getGradientColorStyle',
                value: function () {
                  var e = We,
                    t = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.70)'),
                    a = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.80)')
                  return {
                    backgroundImage: 'linear-gradient(transparent 0%, transparent 25%, '
                      .concat(t, ' 75%, ')
                      .concat(a, ' 100%)'),
                  }
                },
              },
              {
                key: '_getCropCandidates',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet
                  return e.manualCrops || (t && He.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && He.a.getBackgroundColor(e)
                },
              },
            ]),
            a
          )
        })(m.a.Component),
        Ge = U.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        Be = 'eventHero',
        Ve = a('cm6r'),
        Ue = 'white',
        Xe = function (e) {
          var t = e.badge,
            a = e.coverMediaFromTweet,
            n = e.feedbackItems,
            r = e.groupedTrends,
            o = e.image,
            i = e.link,
            c = e.manualCrops,
            l = e.onClick,
            s = e.onImpression,
            d = e.promotedContent,
            u = e.promotedTrendDescription,
            p = e.publisher,
            g = e.richContext,
            h = e.supportingText,
            f = e.timeString,
            v = e.title,
            b = e.tweetId
          m.a.useEffect(function () {
            s && s()
          }, [])
          var C = v.length > 80 ? 'headline1' : 'title4'
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(
                Ve.a,
                { link: e.withAnchorless(i), onClick: l, testID: Be },
                m.a.createElement(Ne, {
                  coverMediaFromTweet: a,
                  image: o,
                  manualCrops: c,
                  promotedContent: d,
                  tweetId: b,
                }),
                m.a.createElement(
                  A.a,
                  { style: [U.a.absoluteFill, Ye.details] },
                  m.a.createElement(Z, {
                    badge: t,
                    groupedTrends: r,
                    linkColor: Ue,
                    promotedContent: d,
                    promotedTrendDescription: u,
                    publisher: p,
                    publisherTitleColor: Ue,
                    richContext: g,
                    shouldTruncateTitle: !0,
                    supportingText: h,
                    textColor: Ue,
                    timeString: f,
                    title: v,
                    titleFontSize: C,
                    titleWeight: 'heavy',
                  }),
                ),
              ),
              null != n && n.length
                ? m.a.createElement(
                    A.a,
                    { style: Ye.menuContainer },
                    m.a.createElement(F.a, { feedbackItems: n, isDisplayedOnMedia: !0 }),
                  )
                : null,
            )
          })
        },
        Ye = U.a.create(function (e) {
          return {
            coverContainer: { width: '100%' },
            menuContainer: { position: 'absolute', top: e.spaces.space12, right: e.spaces.space16 },
            details: {
              justifyContent: 'flex-end',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        qe = xe(m.a.memo(Xe)),
        Ke = a('cFuS'),
        Je = ['analytics', 'createLocalApiErrorHandler', 'logTrend', 'promotedMetadata'],
        Qe = function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            n = e.logTrend,
            r = e.promotedMetadata,
            o = d()(e, Je),
            i = m.a.useCallback(
              function (e) {
                r &&
                  r.promotedTrendId &&
                  n({ promoted_trend_id: r.promotedTrendId, impression_id: r.impressionId, event: e }).catch(a())
              },
              [r, n, a],
            ),
            c = m.a.useCallback(
              function () {
                t.scribeAction('click'), i(Ke.d.SPOTLIGHT_CLICK)
              },
              [t, i],
            ),
            s = m.a.useCallback(
              function () {
                t.scribeAction('impression'), i(Ke.d.SPOTLIGHT_IMPRESSION)
              },
              [t, i],
            )
          switch (e.displayType) {
            case p.a.CellWithProminentSocialContext:
            case p.a.Cell:
              return m.a.createElement(he, l()({}, o, { onClick: c, onImpression: s }))
            case p.a.Hero:
              return m.a.createElement(qe, l()({}, o, { onClick: c, onImpression: s }))
            default:
              return null
          }
        },
        Ze = T(m.a.memo(Qe)),
        $e = a('Rp9C')
      t.default = function (e) {
        return o
          .b({
            component: Ze,
            getScribeDataItem: function (e) {
              return (function (e) {
                var t = e.content.promotedMetadata,
                  a = e.content.id,
                  n = r()(
                    { item_type: oe.a.ItemType.EVENT, event_details: { event_id: a } },
                    $e.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo),
                  )
                return t && ((n.disclosure_type = t.disclosureType), (n.promoted_id = t.impressionId)), n
              })(e)
            },
            isFocusable: Object(i.a)(!0),
          })
          .getHandler(function () {
            return e
          })
      }
    },
    xZmF: function (e, t, a) {
      'use strict'
      a('yH/f'), a('2G9S')
      var n = a('0mK8'),
        r = a('ERkP'),
        o = a.n(r),
        i = a('GliE'),
        c = a('YeIG'),
        l = a('MWbm'),
        s = a('TIdA'),
        d = a('A91F'),
        u = a('9Xij'),
        m = a('jUPy'),
        p = a('rHpw'),
        g = Object.freeze({ Fixed: 'fixed', Variable: 'variable' }),
        h = function (e) {
          var t = e.cropCandidates,
            a = e.dataSaverMode,
            r = e.icon,
            i = e.image,
            m = e.isCellWithProminentSocialContext,
            p = e.scoreEvent,
            g = e.type,
            h = v({ isCellWithProminentSocialContext: m, type: g })
          return o.a.createElement(
            l.a,
            { style: [b.coverContainer, h] },
            p
              ? f(p)
              : !i || Object(c.a)(i) || a
              ? a || Object(c.a)(i)
                ? o.a.createElement(u.a, { ratio: 1 }, o.a.createElement(n.c, { icon: r }))
                : null
              : o.a.createElement(s.a, { accessibilityLabel: '', aspectMode: d.a.SQUARE, cropCandidates: t, image: i }),
          )
        },
        f = function (e) {
          var t = e.category,
            a = e.eventState,
            n = e.gameClock,
            r = e.gameClockPeriod,
            c = e.participants,
            l = e.startTimeMillis,
            s = e.winnerId,
            d = Object(i.a)(t, a, c, r, s)
          return o.a.createElement(m.a, {
            accessibilityLabel: d,
            category: t,
            containerStyle: b.scoreCardTile,
            gameClock: n,
            gameClockPeriod: r,
            gameState: a,
            isCompact: !0,
            startTimeMillis: l,
            teams: c,
            winnerId: s,
          })
        },
        v = function (e) {
          var t = e.isCellWithProminentSocialContext
          switch (e.type) {
            case g.Fixed:
              return (t && b.fixedCellThumbnailWithProminentSocialContext) || b.fixedCellThumbnail
            case g.Variable:
              return b.variableCellThumbnail
            default:
              return
          }
        }
      h.defaultProps = { type: 'variable' }
      var b = p.a.create(function (e) {
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
