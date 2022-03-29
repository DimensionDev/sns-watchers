;(window.webpackJsonp = window.webpackJsonp || []).push([
  [243],
  {
    CdHO: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ezF+'),
        r = a('VPAj'),
        c = a('XjXc'),
        o = n.b({ component: c.a, shouldDisplayBorder: Object(r.a)(!1) }).getHandler()
      t.default = o
    },
    FYbo: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ezF+'),
        r = a('VPAj'),
        c = a('ERkP'),
        o = a.n(c),
        i = a('GliE'),
        l = a('caTy'),
        s = a('jUPy'),
        u = a('fvaz'),
        d = a('VkVE'),
        m = function (e) {
          var t = e.entry,
            a = (t.content.content.scoreCard && t.content.content.scoreCard.scoreEventSummary.scoreEvent) || {},
            n = a.category,
            r = a.eventState,
            c = a.gameClock,
            m = a.gameClockPeriod,
            p = a.participants,
            f = a.startTimeMillis,
            g = a.winnerId,
            b = Object(d.a)(t).handleTileClick,
            y = t.content.url,
            h = o.a.useMemo(
              function () {
                return y ? Object(l.b)(y) : ''
              },
              [y],
            )
          return o.a.createElement(s.a, {
            accessibilityLabel: Object(i.a)(n, r, p, m, g),
            category: n,
            containerStyle: u.a.containerStyle,
            gameClock: c,
            gameClockPeriod: m,
            gameState: r,
            link: h,
            onClick: b,
            startTimeMillis: f,
            teams: p,
            winnerId: g,
          })
        },
        p = o.a.memo(m),
        f = n.b({ component: p, shouldDisplayBorder: Object(r.a)(!1), isFocusable: Object(r.a)(!0) }).getHandler()
      t.default = f
    },
    GliE: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return d
      })
      a('2G9S'), a('hBpG'), a('7x/C')
      var n = a('ajvb'),
        r = a('3XMw'),
        c = a.n(r),
        o = a('qB1G'),
        i = c.a.a3484d21,
        l = c.a.aab2efa8,
        s = c.a.ba21c289,
        u = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        d = function (e, t, a, r, c) {
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
            m = Object(n.a)(t),
            p = e || '',
            f = a && a[0] ? u(a[0]) : '',
            g = a && a[1] ? u(a[1]) : '',
            b = r || '',
            y = d ? l({ winner: d.fullName }) : '',
            h = t === o.a.Completed ? (d ? y : i) : b
          return s({ gameCategory: p, gameState: m, accessibleGameClockPeriod: h, teamOneLabel: f, teamTwoLabel: g })
        }
    },
    IJsT: function (e, t, a) {
      'use strict'
      a('hBvt')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('I4+6'),
        o = a('cm6r'),
        i = a('rHpw'),
        l = a('MWbm'),
        s = function (e) {
          var t = e.accessibilityLabel,
            a = e.containerStyle,
            n = e.isCompact,
            s = e.link,
            d = e.lower,
            m = e.onClick,
            p = e.stackLayoutLowerStyle,
            f = e.stackLayoutUpperStyle,
            g = e.upper,
            b = e.withInsetFocusRing,
            y = e.withInteractiveStyling,
            h = c.a.generate({
              backgroundColor: i.a.theme.colors.transparent,
              color: i.a.theme.colors.primary,
              insetFocusRing: b,
            }),
            v = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(l.a, { style: [u.defaultUpperContainerStyle, f, n && { height: 'auto' }] }, g),
              d ? r.a.createElement(l.a, { style: [u.defaultLowerContainerStyle, p] }, d) : null,
            )
          return r.a.createElement(
            o.a,
            {
              accessibilityLabel: t,
              interactive: y,
              interactiveStyles: y ? h : void 0,
              link: s,
              onClick: m,
              style: [u.root, a],
            },
            v,
          )
        }
      s.defaultProps = { withInsetFocusRing: !0, withInteractiveStyling: !1 }
      var u = i.a.create(function (e) {
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
    Nxr7: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return z
      })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        p = a('KEM+'),
        f = a.n(p),
        g = (a('2G9S'), a('Blm6'), a('hBpG'), a('7x/C'), a('ERkP')),
        b = a.n(g),
        y = a('t62R'),
        h = 864e5,
        v = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            a = t + h
          return e >= t && e < a ? 0 : e >= a && e < t + 1728e5 ? 1 : -1
        },
        C = a('3XMw'),
        S = a.n(C),
        w = a('pjBI'),
        E = a('gmfB'),
        k = S.a.ccaa970e,
        I = S.a.d725a288,
        _ = S.a.db355331,
        O = S.a.a8428d5e,
        P = S.a.a7aad8b9,
        R = S.a.e431f1aa,
        T = S.a.a7391707,
        L = S.a.d2dbfa91,
        j = S.a.cd734f65,
        x = S.a.c8891d06,
        z = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(l()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? b.a.createElement(y.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              f()(l()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var a = new Date(parseInt(t, 10)),
                    n = v(a)
                  return -1 === n ? e._renderDateTime(a) : e._renderTodayTomorrow(n, a)
                }
                return null
              }),
              f()(l()(e), '_renderTodayTomorrow', function (e, t) {
                var a = I(t)
                return b.a.createElement(
                  w.a,
                  null,
                  b.a.createElement(y.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? j : x),
                  b.a.createElement(y.b, { color: 'gray700', size: 'subtext2' }, a),
                )
              }),
              f()(l()(e), '_renderDateTime', function (e) {
                var t = I(e),
                  a = k(e)
                return b.a.createElement(
                  w.a,
                  null,
                  b.a.createElement(y.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, a),
                  b.a.createElement(y.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              f()(l()(e), '_renderGameStateValue', function (t, a) {
                var n = e.props.gameClockPeriod,
                  r = e._getWinnerName(),
                  c = t && r ? _({ team: r }) : a && n ? n : void 0
                return c ? b.a.createElement(y.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null
              }),
              f()(l()(e), '_getWinnerName', function () {
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
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gameState,
                    a = e.withCategory,
                    n = t === E.a.Scheduled,
                    r = t === E.a.InProgress,
                    c = t === E.a.Completed
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    n
                      ? this._renderGameScheduledDateTime()
                      : b.a.createElement(
                          w.a,
                          null,
                          b.a.createElement(
                            y.b,
                            { color: r ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case E.a.Scheduled:
                                  return O
                                case E.a.InProgress:
                                  return P
                                case E.a.Completed:
                                  return R
                                case E.a.Postponed:
                                  return T
                                case E.a.Cancelled:
                                  return L
                                default:
                                  return null
                              }
                            })(t),
                          ),
                          this._renderGameStateValue(c, r),
                        ),
                    a ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      f()(z, 'defaultProps', { withCategory: !0 })
    },
    RoyM: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        c = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        o = Object(c.a)({
          loader: function () {
            return a.e(174).then(a.bind(null, 'ACNv'))
          },
        }),
        i = a('4bW+'),
        l = a('IG7M'),
        s = a('rHpw'),
        u = a('Irs7'),
        d = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          a = e.feedbackItems,
          n = e.isDisplayedOnMedia
        if (a && a.length > 0) {
          return r.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.a.createElement(o, { actionItems: a, onClose: e })
            },
            style: d.curationControl,
            testID: i.a.caret,
            withDarkBackground: n,
          })
        }
        return null
      })
    },
    VkVE: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return d
      })
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Rp9C'),
        l = a('Irs7'),
        s = { element: 'tile' },
        u = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            a = i.a.getAllSurfaceDetails(t)
          return a ? { items: [a] } : void 0
        },
        d = function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            a = Object(l.b)(),
            n = u(e)
          o.a.useEffect(function () {
            t && a.scribe(r()(r()({}, s), {}, { action: 'impression', data: n }))
          }, [])
          var c = o.a.useCallback(
            function () {
              a.scribe(r()(r()({}, s), {}, { action: 'click', data: n }))
            },
            [a, n],
          )
          return { handleTileClick: c }
        }
    },
    XjXc: function (e, t, a) {
      'use strict'
      a('2G9S'), a('ho0z')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('G6rE'),
        o = a('rxPX'),
        i = function (e, t) {
          if (t.entry.content.content.broadcast) return c.e.select(e, t.entry.content.content.broadcast.userId)
        },
        l = Object(o.a)().propsFromState(function () {
          return { broadcastUser: i }
        }),
        s = a('RoyM'),
        u = a('caTy'),
        d = a('fvaz'),
        m = a('VkVE'),
        p = a('lzTJ'),
        f = a('iSF/'),
        g = function (e) {
          var t,
            a,
            n,
            c = e.broadcastUser,
            o = e.entry,
            i = e.feedbackItems,
            l = o.content,
            g = l.content,
            b = l.image,
            y = l.url
          g.standard
            ? ((t = g.standard.title), (a = g.standard.badge), (n = t))
            : g.broadcast && ((t = c && ''.concat(c.name, ' ').concat(c.screen_name)), (a = g.broadcast.badge))
          var h = r.a.useMemo(
              function () {
                var e,
                  t,
                  n = null === (e = a) || void 0 === e ? void 0 : e.text
                return n
                  ? {
                      backgroundColor:
                        Object(p.a)((null === (t = a) || void 0 === t ? void 0 : t.backgroundColorName) || '') ||
                        void 0,
                      text: n,
                    }
                  : void 0
              },
              [a],
            ),
            v = Object(m.a)(o).handleTileClick,
            C = r.a.useMemo(
              function () {
                return y ? Object(u.b)(y) : ''
              },
              [y],
            ),
            S = r.a.useMemo(
              function () {
                return n ? r.a.createElement(s.a, { feedbackItems: i }) : null
              },
              [n, i],
            )
          return r.a.createElement(f.a, {
            accessibilityLabel: t || '',
            attribution: c,
            badge: h,
            containerStyle: d.a.containerStyle,
            description: n,
            image: b,
            link: C,
            onClick: v,
            rightControl: S,
          })
        }
      t.a = l(r.a.memo(g))
    },
    ajvb: function (e, t, a) {
      'use strict'
      var n = a('3XMw'),
        r = a.n(n),
        c = a('qB1G'),
        o = r.a.f178e38c,
        i = r.a.b6da6b01,
        l = r.a.i9f615c8,
        s = r.a.f897267a,
        u = r.a.f93c4b69
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
    fvaz: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      var n = a('rHpw').a.create(function (e) {
        return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
      })
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
    'iSF/': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        p = a('KEM+'),
        f = a.n(p),
        g = (a('2G9S'), a('ho0z'), a('1t7P'), a('jQ/y'), a('hBvt'), a('ERkP')),
        b = a.n(g),
        y = a('TIdA'),
        h = a('t62R'),
        v = a('A91F'),
        C = a('IJsT'),
        S = a('a6qo'),
        w = a('rHpw'),
        E = a('jhWN'),
        k = a('jV+4'),
        I = a('MWbm'),
        _ = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(l()(e), '_renderTileLower', function () {
                return e.props.attribution ? e._renderUserAvatar() : e._renderEventDescription()
              }),
              f()(l()(e), '_renderTileUpper', function () {
                var t = e.props,
                  a = t.accessibilityLabel,
                  n = t.badge,
                  r = t.image
                return r
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement(y.a, { accessibilityLabel: a, aspectMode: v.a.COVER, image: r }),
                      n
                        ? b.a.createElement(S.a, { align: 'left', background: n.backgroundColor, bold: !0 }, n.text)
                        : null,
                    )
                  : null
              }),
              f()(l()(e), '_renderUserAvatar', function () {
                var t = e.props.attribution
                return t
                  ? b.a.createElement(
                      I.a,
                      { style: O.accountContainer },
                      b.a.createElement(
                        I.a,
                        { style: O.avatarContainer },
                        b.a.createElement(E.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'xLarge',
                          uri: t.profile_image_url_https,
                          withLink: !1,
                        }),
                      ),
                      b.a.createElement(
                        I.a,
                        { style: O.groupContainer },
                        b.a.createElement(k.a, {
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
              f()(l()(e), '_renderEventDescription', function () {
                var t = e.props,
                  a = t.description,
                  n = t.rightControl
                return a
                  ? b.a.createElement(
                      I.a,
                      { style: O.eventDescription },
                      b.a.createElement(
                        h.b,
                        { numberOfLines: 2, size: 'subtext2', style: { width: '100%' }, weight: 'bold' },
                        a,
                      ),
                      b.a.createElement(I.a, { style: O.rightControl }, n || null),
                    )
                  : null
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
                    n = e.link,
                    r = e.onClick
                  return b.a.createElement(C.a, {
                    accessibilityLabel: t,
                    containerStyle: a,
                    link: n,
                    lower: this._renderTileLower(),
                    onClick: r,
                    upper: this._renderTileUpper(),
                    withInteractiveStyling: !0,
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        O = w.a.create(function (e) {
          return {
            accountContainer: { flexDirection: 'row' },
            avatarContainer: { marginRight: e.spaces.space4 },
            rightControl: { marginTop: e.spaces.space2 },
            groupContainer: { flexDirection: 'row', flexShrink: 1 },
            eventDescription: { flexDirection: 'row' },
          }
        })
      t.a = _
    },
    jUPy: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return R
      })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        p = a('KEM+'),
        f = a.n(p),
        g = (a('2G9S'), a('hBvt'), a('z84I'), a('ERkP')),
        b = a.n(g),
        y = a('IJsT'),
        h = a('Nxr7'),
        v = (a('yH/f'), a('TIdA')),
        C = a('t62R'),
        S = a('A91F'),
        w = a('gmfB'),
        E = a('rHpw'),
        k = a('MWbm'),
        I = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        _ = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(l()(e), 'state', { imageError: !1 }),
              f()(l()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return b.a.createElement(
                  k.a,
                  { style: O.teamNameContainer },
                  b.a.createElement(C.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              f()(l()(e), '_renderImage', function () {
                var t = e.props,
                  a = t.isCompact,
                  n = t.team,
                  r = n.imageUrl,
                  c = n.logo,
                  o = e.state.imageError,
                  i = (!c && !r) || o ? O.translucent : {},
                  l = c ? S.a.exact(c.width / c.height) : S.a.SQUARE
                return b.a.createElement(
                  k.a,
                  { style: [O.imageContainer, i, a && O.compactImageContainer] },
                  b.a.createElement(v.a, {
                    accessibilityLabel: '',
                    aspectMode: l,
                    image: c || r || '',
                    onError: e._handleImageError,
                    rounded: !c,
                  }),
                )
              }),
              f()(l()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              f()(l()(e), '_renderScore', function () {
                var t = e.props,
                  a = t.gameState,
                  n = t.team,
                  r = t.winnerId,
                  c = n.id,
                  o = n.score,
                  i = n.secondaryScore,
                  l = c === r,
                  s = !r,
                  u = a === w.a.Completed && !l && !s,
                  d = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(I.SCORE),
                  p = i ? e._getTeamScoreSize(I.SECONDARY_SCORE) : void 0
                return d
                  ? b.a.createElement(
                      k.a,
                      { style: [O.teamScore, u && O.losingTeamScore] },
                      b.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, o),
                      i
                        ? b.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, i)
                        : null,
                    )
                  : null
              }),
              f()(l()(e), '_getTeamScoreSize', function (t) {
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
              f()(l()(e), '_shouldRenderScore', function () {
                var t = e.props.gameState
                return t === w.a.Completed || t === w.a.InProgress
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
                    n = e.team.color,
                    r = {
                      backgroundColor:
                        (n && 'rgb('.concat(n.red, ', ').concat(n.green, ', ').concat(n.blue, ')')) ||
                        E.a.theme.colors[t],
                    },
                    c = this._shouldRenderScore(),
                    o = !a || !c
                  return b.a.createElement(
                    k.a,
                    { style: [O.root, r, a && O.compactRoot] },
                    this._renderImage(),
                    o ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      f()(_, 'defaultProps', { isCompact: !1 })
      var O = E.a.create(function (e) {
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
        P = _,
        R = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(l()(e), '_renderGameStatus', function () {
                var t = e.props,
                  a = t.category,
                  n = t.gameClock,
                  r = t.gameClockPeriod,
                  c = t.gameState,
                  o = t.isCompact,
                  i = t.startTimeMillis,
                  l = t.teams,
                  s = t.winnerId
                return b.a.createElement(h.a, {
                  category: a,
                  gameClock: n,
                  gameClockPeriod: r,
                  gameState: c,
                  startTimeMillis: i,
                  teams: l,
                  winnerId: s,
                  withCategory: !o,
                })
              }),
              f()(l()(e), '_renderTeamRow', function (t, a) {
                var n = e.props,
                  r = n.gameState,
                  c = n.isCompact,
                  o = n.winnerId,
                  i = t.id
                return b.a.createElement(P, {
                  fallbackColor: a % 2 == 0 ? 'gray300' : 'gray700',
                  gameState: r,
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
                    n = e.isCompact,
                    r = e.link,
                    c = e.onClick,
                    o = e.teams
                  if (o) {
                    var i = o && o.map(this._renderTeamRow)
                    return b.a.createElement(y.a, {
                      accessibilityLabel: t,
                      containerStyle: a,
                      isCompact: n,
                      link: r,
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
            a
          )
        })(b.a.Component)
      f()(R, 'defaultProps', { isCompact: !1 })
    },
    kthL: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ezF+'),
        r = a('VPAj'),
        c = a('ERkP'),
        o = a.n(c),
        i = a('caTy'),
        l = a('tod0'),
        s = a('fvaz'),
        u = a('VkVE'),
        d = function (e) {
          var t = e.entry,
            a = (t.content.content.callToAction && t.content.content.callToAction.text) || '',
            n = t.content.url,
            r = o.a.useMemo(
              function () {
                return n ? Object(i.b)(n) : void 0
              },
              [n],
            ),
            c = Object(u.a)(t, !!r).handleTileClick
          return r ? o.a.createElement(l.a, { containerStyle: s.a.containerStyle, link: r, onClick: c, text: a }) : null
        },
        m = n.b({ component: d, shouldDisplayBorder: Object(r.a)(!1) }).getHandler()
      t.default = m
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
    tod0: function (e, t, a) {
      'use strict'
      a('hBvt')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('t62R'),
        o = a('IJsT'),
        i = a('yiKp'),
        l = a.n(i),
        s = a('Lsrn'),
        u = a('shC7'),
        d = a('k/Ka'),
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(d.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style, u.a.getConstants().isRTL && s.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.75 12c0-5.928-4.822-10.75-10.75-10.75S1.25 6.072 1.25 12 6.072 22.75 12 22.75 22.75 17.928 22.75 12zm-10.203 3.85c-.146-.147-.22-.34-.22-.53s.073-.385.22-.53l2.038-2.04H7.813c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.772l-2.038-2.038c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l3.32 3.317c.292.29.292.765 0 1.06l-3.32 3.316c-.293.294-.767.294-1.06 0v.003z',
              }),
            ),
          )
        }
      m.metadata = { width: 24, height: 24 }
      var p = m,
        f = a('rHpw').a.create(function (e) {
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
          a = e.link,
          n = e.onClick,
          i = e.text
        return r.a.createElement(o.a, {
          accessibilityLabel: i,
          containerStyle: [f.center, t],
          link: a,
          lower: r.a.createElement(c.b, { color: 'primary' }, i),
          onClick: n,
          stackLayoutLowerStyle: f.lower,
          stackLayoutUpperStyle: f.upper,
          upper: r.a.createElement(p, { style: f.arrow }),
        })
      }
    },
    vKPG: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ezF+'),
        r = a('VPAj'),
        c = a('XjXc'),
        o = n.b({ component: c.a, shouldDisplayBorder: Object(r.a)(!1) }).getHandler()
      t.default = o
    },
  },
])
//# sourceMappingURL=WIPED
