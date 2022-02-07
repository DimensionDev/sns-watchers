;(window.webpackJsonp = window.webpackJsonp || []).push([
  [235],
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
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ezF+'),
        o = a('VPAj'),
        i = a('GliE'),
        l = a('caTy'),
        s = a('zh9S'),
        u = a('Rp9C'),
        d = a('rHpw'),
        m = a('jUPy'),
        p = Object(o.a)({ scribe: s.c }),
        f = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            a = u.a.getAllSurfaceDetails(t)
          return a ? { items: [a] } : void 0
        },
        b = function (e) {
          var t = e.entry,
            a = e.scribe,
            n = e.scribeNamespace
          return function () {
            var e = f(t)
            a(r()(r()({}, n), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        g = d.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        y = c.g({
          bindActions: p,
          component: m.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              a = e.entry,
              n = e.scribeNamespace
            if (
              !(
                a &&
                a.content &&
                a.content.content &&
                a.content.content.scoreCard &&
                a.content.content.scoreCard.scoreEventSummary &&
                a.content.content.scoreCard.scoreEventSummary.scoreEvent
              )
            )
              return null
            var r = a.content,
              c = r.content,
              o = r.url,
              s = c.scoreCard.scoreEventSummary.scoreEvent,
              u = s.category,
              d = s.eventState,
              m = s.gameClock,
              p = s.gameClockPeriod,
              f = s.participants,
              y = s.startTimeMillis,
              h = s.winnerId
            return {
              accessibilityLabel: Object(i.a)(u, d, f, p, h),
              category: u,
              containerStyle: g.containerStyle,
              gameState: d,
              gameClock: m,
              gameClockPeriod: p,
              startTimeMillis: y,
              teams: f,
              winnerId: h,
              link: o ? Object(l.b)(o) : '',
              onClick: b({ scribeNamespace: n, scribe: t, entry: a }),
            }
          },
          shouldDisplayBorder: Object(o.a)(!1),
          isFocusable: Object(o.a)(!0),
          onImpression: function (e) {
            var t = e.actions.scribe,
              a = e.entry,
              n = e.scribeNamespace,
              c = f(a)
            t(r()(r()({}, n), {}, { element: 'tile', action: 'impression' }), c)
          },
        })
      t.default = y
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
            b = a && a[1] ? u(a[1]) : '',
            g = r || '',
            y = d ? l({ winner: d.fullName }) : '',
            h = t === o.a.Completed ? (d ? y : i) : g
          return s({ gameCategory: p, gameState: m, accessibleGameClockPeriod: h, teamOneLabel: f, teamTwoLabel: b })
        }
    },
    IJsT: function (e, t, a) {
      'use strict'
      a('hBvt')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('cm6r'),
        o = a('rHpw'),
        i = a('MWbm'),
        l = function (e) {
          var t = e.accessibilityLabel,
            a = e.containerStyle,
            n = e.isCompact,
            o = e.link,
            l = e.lower,
            u = e.onClick,
            d = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            f = e.withInteractiveStyling,
            b = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(i.a, { style: [s.defaultUpperContainerStyle, m, n && { height: 'auto' }] }, p),
              l ? r.a.createElement(i.a, { style: [s.defaultLowerContainerStyle, d] }, l) : null,
            )
          return r.a.createElement(
            c.a,
            { accessibilityLabel: t, interactive: f, link: o, onClick: u, style: [s.root, a] },
            b,
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
        b = (a('2G9S'), a('Blm6'), a('hBpG'), a('7x/C'), a('ERkP')),
        g = a.n(b),
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
        P = S.a.a8428d5e,
        O = S.a.a7aad8b9,
        L = S.a.e431f1aa,
        R = S.a.a7391707,
        T = S.a.d2dbfa91,
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
                  ? g.a.createElement(y.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
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
                return g.a.createElement(
                  w.a,
                  null,
                  g.a.createElement(y.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? j : x),
                  g.a.createElement(y.b, { color: 'gray700', size: 'subtext2' }, a),
                )
              }),
              f()(l()(e), '_renderDateTime', function (e) {
                var t = I(e),
                  a = k(e)
                return g.a.createElement(
                  w.a,
                  null,
                  g.a.createElement(y.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, a),
                  g.a.createElement(y.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              f()(l()(e), '_renderGameStateValue', function (t, a) {
                var n = e.props.gameClockPeriod,
                  r = e._getWinnerName(),
                  c = t && r ? _({ team: r }) : a && n ? n : void 0
                return c ? g.a.createElement(y.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null
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
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    n
                      ? this._renderGameScheduledDateTime()
                      : g.a.createElement(
                          w.a,
                          null,
                          g.a.createElement(
                            y.b,
                            { color: r ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case E.a.Scheduled:
                                  return P
                                case E.a.InProgress:
                                  return O
                                case E.a.Completed:
                                  return L
                                case E.a.Postponed:
                                  return R
                                case E.a.Cancelled:
                                  return T
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
        })(g.a.Component)
      f()(z, 'defaultProps', { withCategory: !0 })
    },
    RoyM: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        c = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        o = Object(c.a)({
          loader: function () {
            return a.e(171).then(a.bind(null, 'ACNv'))
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
        l = Object(o.a)()
          .propsFromState(function () {
            return { broadcastUser: i }
          })
          .withAnalytics({ element: 'tile' }),
        s = a('RoyM'),
        u = a('caTy'),
        d = a('Rp9C'),
        m = a('lzTJ'),
        p = a('iSF/'),
        f = a('rHpw'),
        b = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            a = d.a.getAllSurfaceDetails(t)
          return a ? { items: [a] } : void 0
        },
        g = function (e) {
          var t,
            a,
            n,
            c = e.analytics,
            o = e.broadcastUser,
            i = e.entry,
            l = e.feedbackItems,
            d = i.content,
            f = d.content,
            g = d.image,
            h = d.url
          f.standard
            ? ((t = f.standard.title), (a = f.standard.badge), (n = t))
            : f.broadcast && ((t = o && ''.concat(o.name, ' ').concat(o.screen_name)), (a = f.broadcast.badge)),
            r.a.useEffect(function () {
              c.scribe({ action: 'impression', data: b(i) })
            }, [])
          var v = r.a.useCallback(
              function () {
                c.scribe({ action: 'click', data: b(i) })
              },
              [c, i],
            ),
            C = r.a.useMemo(
              function () {
                var e,
                  t,
                  n = null === (e = a) || void 0 === e ? void 0 : e.text
                return n
                  ? {
                      backgroundColor:
                        Object(m.a)((null === (t = a) || void 0 === t ? void 0 : t.backgroundColorName) || '') ||
                        void 0,
                      text: n,
                    }
                  : void 0
              },
              [a],
            ),
            S = r.a.useMemo(
              function () {
                return h ? Object(u.b)(h) : ''
              },
              [h],
            ),
            w = r.a.useMemo(
              function () {
                return n ? r.a.createElement(s.a, { feedbackItems: l }) : null
              },
              [n, l],
            )
          return r.a.createElement(p.a, {
            accessibilityLabel: t || '',
            attribution: o,
            badge: C,
            containerStyle: y.containerStyle,
            description: n,
            image: g,
            link: S,
            onClick: v,
            rightControl: w,
          })
        },
        y = f.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        })
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
        b = (a('2G9S'), a('ho0z'), a('1t7P'), a('jQ/y'), a('hBvt'), a('ERkP')),
        g = a.n(b),
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
                  ? g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(y.a, { accessibilityLabel: a, aspectMode: v.a.COVER, image: r }),
                      n
                        ? g.a.createElement(S.a, { align: 'left', background: n.backgroundColor, bold: !0 }, n.text)
                        : null,
                    )
                  : null
              }),
              f()(l()(e), '_renderUserAvatar', function () {
                var t = e.props.attribution
                return t
                  ? g.a.createElement(
                      I.a,
                      { style: P.accountContainer },
                      g.a.createElement(
                        I.a,
                        { style: P.avatarContainer },
                        g.a.createElement(E.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'xLarge',
                          uri: t.profile_image_url_https,
                          withLink: !1,
                        }),
                      ),
                      g.a.createElement(
                        I.a,
                        { style: P.groupContainer },
                        g.a.createElement(k.a, {
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
                  ? g.a.createElement(
                      I.a,
                      { style: P.eventDescription },
                      g.a.createElement(
                        h.b,
                        { numberOfLines: 2, size: 'subtext2', style: { width: '100%' }, weight: 'bold' },
                        a,
                      ),
                      g.a.createElement(I.a, { style: P.rightControl }, n || null),
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
                  return g.a.createElement(C.a, {
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
        })(g.a.Component),
        P = w.a.create(function (e) {
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
        return L
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
        b = (a('2G9S'), a('hBvt'), a('z84I'), a('ERkP')),
        g = a.n(b),
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
                return g.a.createElement(
                  k.a,
                  { style: P.teamNameContainer },
                  g.a.createElement(C.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              f()(l()(e), '_renderImage', function () {
                var t = e.props,
                  a = t.isCompact,
                  n = t.team,
                  r = n.imageUrl,
                  c = n.logo,
                  o = e.state.imageError,
                  i = (!c && !r) || o ? P.translucent : {},
                  l = c ? S.a.exact(c.width / c.height) : S.a.SQUARE
                return g.a.createElement(
                  k.a,
                  { style: [P.imageContainer, i, a && P.compactImageContainer] },
                  g.a.createElement(v.a, {
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
                  ? g.a.createElement(
                      k.a,
                      { style: [P.teamScore, u && P.losingTeamScore] },
                      g.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, o),
                      i
                        ? g.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, i)
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
                  return g.a.createElement(
                    k.a,
                    { style: [P.root, r, a && P.compactRoot] },
                    this._renderImage(),
                    o ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      f()(_, 'defaultProps', { isCompact: !1 })
      var P = E.a.create(function (e) {
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
        O = _,
        L = (function (e) {
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
                return g.a.createElement(h.a, {
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
                return g.a.createElement(O, {
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
                    return g.a.createElement(y.a, {
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
        })(g.a.Component)
      f()(L, 'defaultProps', { isCompact: !1 })
    },
    kthL: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ezF+'),
        o = a('VPAj'),
        i = a('caTy'),
        l = a('zh9S'),
        s = a('Rp9C'),
        u = a('rHpw'),
        d = a('tod0'),
        m = Object(o.a)({ scribe: l.c }),
        p = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            a = s.a.getAllSurfaceDetails(t)
          return a ? { items: [a] } : void 0
        },
        f = function (e) {
          var t = e.entry,
            a = e.scribe,
            n = e.scribeNamespace
          return function () {
            var e = p(t)
            a(r()(r()({}, n), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        b = u.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        g = c.g({
          bindActions: m,
          component: d.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              a = e.entry,
              n = e.scribeNamespace
            if (!(a && a.content && a.content.content && a.content.content.callToAction)) return null
            var r = a.content.url,
              c = a.content.content.callToAction.text,
              o = r && Object(i.b)(r)
            return c && o
              ? {
                  containerStyle: b.containerStyle,
                  link: o,
                  text: c,
                  onClick: f({ entry: a, scribe: t, scribeNamespace: n }),
                }
              : null
          },
          shouldDisplayBorder: Object(o.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              a = e.entry,
              n = e.scribeNamespace,
              c = p(a)
            t(r()(r()({}, n), {}, { element: 'tile', action: 'impression' }), c)
          },
        })
      t.default = g
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
