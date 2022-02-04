;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    CdHO: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        r = n.n(a),
        c = n('ezF+'),
        i = n('ERkP'),
        o = n.n(i),
        s = n('VPAj'),
        l = n('RoyM'),
        u = n('caTy'),
        d = n('zh9S'),
        m = n('Rp9C'),
        p = n('lzTJ'),
        b = n('rHpw'),
        f = n('iSF/'),
        y = Object(s.a)({ scribe: d.c }),
        g = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            n = m.a.getAllSurfaceDetails(t)
          return n ? { items: [n] } : void 0
        },
        v = function (e) {
          var t = e.entry,
            n = e.scribe,
            a = e.scribeNamespace
          return function () {
            var e = g(t)
            n(r()(r()({}, a), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        h = function (e) {
          var t = null == e ? void 0 : e.text
          return t
            ? { backgroundColor: Object(p.a)((null == e ? void 0 : e.backgroundColorName) || '') || void 0, text: t }
            : void 0
        },
        C = b.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        S = c.g({
          bindActions: y,
          component: f.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              a = e.feedbackItems,
              r = e.scribeNamespace
            if (!(n && n.content && n.content.content && n.content.content.standard)) return null
            var c = n.content,
              i = c.content,
              s = c.image,
              d = c.url,
              m = i.standard,
              p = m.badge,
              b = m.title
            return {
              accessibilityLabel: b,
              badge: h(p),
              containerStyle: C.containerStyle,
              description: b,
              image: s,
              link: d ? Object(u.b)(d) : '',
              onClick: v({ scribeNamespace: r, scribe: t, entry: n }),
              rightControl: o.a.createElement(l.a, { feedbackItems: a }),
            }
          },
          shouldDisplayBorder: Object(s.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              a = e.scribeNamespace,
              c = g(n)
            t(r()(r()({}, a), {}, { element: 'tile', action: 'impression' }), c)
          },
        })
      t.default = S
    },
    FYbo: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        r = n.n(a),
        c = n('ezF+'),
        i = n('VPAj'),
        o = n('GliE'),
        s = n('caTy'),
        l = n('zh9S'),
        u = n('Rp9C'),
        d = n('rHpw'),
        m = n('jUPy'),
        p = Object(i.a)({ scribe: l.c }),
        b = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            n = u.a.getAllSurfaceDetails(t)
          return n ? { items: [n] } : void 0
        },
        f = function (e) {
          var t = e.entry,
            n = e.scribe,
            a = e.scribeNamespace
          return function () {
            var e = b(t)
            n(r()(r()({}, a), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        y = d.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        g = c.g({
          bindActions: p,
          component: m.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              a = e.scribeNamespace
            if (
              !(
                n &&
                n.content &&
                n.content.content &&
                n.content.content.scoreCard &&
                n.content.content.scoreCard.scoreEventSummary &&
                n.content.content.scoreCard.scoreEventSummary.scoreEvent
              )
            )
              return null
            var r = n.content,
              c = r.content,
              i = r.url,
              l = c.scoreCard.scoreEventSummary.scoreEvent,
              u = l.category,
              d = l.eventState,
              m = l.gameClock,
              p = l.gameClockPeriod,
              b = l.participants,
              g = l.startTimeMillis,
              v = l.winnerId
            return {
              accessibilityLabel: Object(o.a)(u, d, b, p, v),
              category: u,
              containerStyle: y.containerStyle,
              gameState: d,
              gameClock: m,
              gameClockPeriod: p,
              startTimeMillis: g,
              teams: b,
              winnerId: v,
              link: i ? Object(s.b)(i) : '',
              onClick: f({ scribeNamespace: a, scribe: t, entry: n }),
            }
          },
          shouldDisplayBorder: Object(i.a)(!1),
          isFocusable: Object(i.a)(!0),
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              a = e.scribeNamespace,
              c = b(n)
            t(r()(r()({}, a), {}, { element: 'tile', action: 'impression' }), c)
          },
        })
      t.default = g
    },
    GliE: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      n('2G9S'), n('hBpG'), n('7x/C')
      var a = n('ajvb'),
        r = n('3XMw'),
        c = n.n(r),
        i = n('qB1G'),
        o = c.a.a3484d21,
        s = c.a.aab2efa8,
        l = c.a.ba21c289,
        u = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        d = function (e, t, n, r, c) {
          var d =
              n && c
                ? (function (e, t) {
                    return e && t
                      ? e.find(function (e) {
                          return e.id === t
                        })
                      : void 0
                  })(n, c)
                : void 0,
            m = Object(a.a)(t),
            p = e || '',
            b = n && n[0] ? u(n[0]) : '',
            f = n && n[1] ? u(n[1]) : '',
            y = r || '',
            g = d ? s({ winner: d.fullName }) : '',
            v = t === i.a.Completed ? (d ? g : o) : y
          return l({ gameCategory: p, gameState: m, accessibleGameClockPeriod: v, teamOneLabel: b, teamTwoLabel: f })
        }
    },
    IJsT: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        c = n('cm6r'),
        i = n('rHpw'),
        o = n('MWbm'),
        s = function (e) {
          var t = e.accessibilityLabel,
            n = e.containerStyle,
            a = e.isCompact,
            i = e.link,
            s = e.lower,
            u = e.onClick,
            d = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            b = e.withInteractiveStyling,
            f = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(o.a, { style: [l.defaultUpperContainerStyle, m, a && { height: 'auto' }] }, p),
              s ? r.a.createElement(o.a, { style: [l.defaultLowerContainerStyle, d] }, s) : null,
            )
          return r.a.createElement(
            c.a,
            { accessibilityLabel: t, interactive: b, link: i, onClick: u, style: [l.root, n] },
            f,
          )
        }
      s.defaultProps = { withInteractiveStyling: !1 }
      var l = i.a.create(function (e) {
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
    Nxr7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return N
      })
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        b = n.n(p),
        f = (n('2G9S'), n('Blm6'), n('hBpG'), n('7x/C'), n('ERkP')),
        y = n.n(f),
        g = n('t62R'),
        v = 864e5,
        h = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            n = t + v
          return e >= t && e < n ? 0 : e >= n && e < t + 1728e5 ? 1 : -1
        },
        C = n('3XMw'),
        S = n.n(C),
        w = n('pjBI'),
        E = n('gmfB'),
        k = S.a.ccaa970e,
        I = S.a.d725a288,
        O = S.a.db355331,
        _ = S.a.a8428d5e,
        P = S.a.a7aad8b9,
        T = S.a.e431f1aa,
        L = S.a.a7391707,
        R = S.a.d2dbfa91,
        j = S.a.cd734f65,
        x = S.a.c8891d06,
        N = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              b()(s()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? y.a.createElement(g.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              b()(s()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var n = new Date(parseInt(t, 10)),
                    a = h(n)
                  return -1 === a ? e._renderDateTime(n) : e._renderTodayTomorrow(a, n)
                }
                return null
              }),
              b()(s()(e), '_renderTodayTomorrow', function (e, t) {
                var n = I(t)
                return y.a.createElement(
                  w.a,
                  null,
                  y.a.createElement(g.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? j : x),
                  y.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, n),
                )
              }),
              b()(s()(e), '_renderDateTime', function (e) {
                var t = I(e),
                  n = k(e)
                return y.a.createElement(
                  w.a,
                  null,
                  y.a.createElement(g.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, n),
                  y.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              b()(s()(e), '_renderGameStateValue', function (t, n) {
                var a = e.props.gameClockPeriod,
                  r = e._getWinnerName(),
                  c = t && r ? O({ team: r }) : n && a ? a : void 0
                return c ? y.a.createElement(g.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, c) : null
              }),
              b()(s()(e), '_getWinnerName', function () {
                var t = e.props,
                  n = t.teams,
                  a = t.winnerId,
                  r =
                    n &&
                    n.find(function (e) {
                      return e.id === a
                    })
                return r && r.shortName
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gameState,
                    n = e.withCategory,
                    a = t === E.a.Scheduled,
                    r = t === E.a.InProgress,
                    c = t === E.a.Completed
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    a
                      ? this._renderGameScheduledDateTime()
                      : y.a.createElement(
                          w.a,
                          null,
                          y.a.createElement(
                            g.b,
                            { color: r ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case E.a.Scheduled:
                                  return _
                                case E.a.InProgress:
                                  return P
                                case E.a.Completed:
                                  return T
                                case E.a.Postponed:
                                  return L
                                case E.a.Cancelled:
                                  return R
                                default:
                                  return null
                              }
                            })(t),
                          ),
                          this._renderGameStateValue(c, r),
                        ),
                    n ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(N, 'defaultProps', { withCategory: !0 })
    },
    RoyM: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        c = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        i = Object(c.a)({
          loader: function () {
            return n.e(171).then(n.bind(null, 'ACNv'))
          },
        }),
        o = n('4bW+'),
        s = n('IG7M'),
        l = n('rHpw'),
        u = n('Irs7'),
        d = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          a = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return r.a.createElement(s.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.a.createElement(i, { actionItems: n, onClose: e })
            },
            style: d.curationControl,
            testID: o.a.caret,
            withDarkBackground: a,
          })
        }
        return null
      })
    },
    ajvb: function (e, t, n) {
      'use strict'
      var a = n('3XMw'),
        r = n.n(a),
        c = n('qB1G'),
        i = r.a.f178e38c,
        o = r.a.b6da6b01,
        s = r.a.i9f615c8,
        l = r.a.f897267a,
        u = r.a.f93c4b69
      t.a = function (e) {
        switch (e) {
          case c.a.Scheduled:
            return i
          case c.a.InProgress:
            return o
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
    gmfB: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
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
    'iSF/': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        b = n.n(p),
        f = (n('2G9S'), n('ho0z'), n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        y = n.n(f),
        g = n('TIdA'),
        v = n('t62R'),
        h = n('A91F'),
        C = n('IJsT'),
        S = n('a6qo'),
        w = n('rHpw'),
        E = n('jhWN'),
        k = n('jV+4'),
        I = n('MWbm'),
        O = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              b()(s()(e), '_renderTileLower', function () {
                return e.props.attribution ? e._renderUserAvatar() : e._renderEventDescription()
              }),
              b()(s()(e), '_renderTileUpper', function () {
                var t = e.props,
                  n = t.accessibilityLabel,
                  a = t.badge,
                  r = t.image
                return r
                  ? y.a.createElement(
                      y.a.Fragment,
                      null,
                      y.a.createElement(g.a, { accessibilityLabel: n, aspectMode: h.a.COVER, image: r }),
                      a
                        ? y.a.createElement(S.a, { align: 'left', background: a.backgroundColor, bold: !0 }, a.text)
                        : null,
                    )
                  : null
              }),
              b()(s()(e), '_renderUserAvatar', function () {
                var t = e.props.attribution
                return t
                  ? y.a.createElement(
                      I.a,
                      { style: _.accountContainer },
                      y.a.createElement(
                        I.a,
                        { style: _.avatarContainer },
                        y.a.createElement(E.a, {
                          accessibilityHidden: !0,
                          focusable: !1,
                          size: 'xLarge',
                          uri: t.profile_image_url_https,
                          withLink: !1,
                        }),
                      ),
                      y.a.createElement(
                        I.a,
                        { style: _.groupContainer },
                        y.a.createElement(k.a, {
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
              b()(s()(e), '_renderEventDescription', function () {
                var t = e.props,
                  n = t.description,
                  a = t.rightControl
                return n
                  ? y.a.createElement(
                      I.a,
                      { style: _.eventDescription },
                      y.a.createElement(
                        v.b,
                        { numberOfLines: 2, size: 'subtext2', style: { width: '100%' }, weight: 'bold' },
                        n,
                      ),
                      y.a.createElement(I.a, { style: _.rightControl }, a || null),
                    )
                  : null
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.containerStyle,
                    a = e.link,
                    r = e.onClick
                  return y.a.createElement(C.a, {
                    accessibilityLabel: t,
                    containerStyle: n,
                    link: a,
                    lower: this._renderTileLower(),
                    onClick: r,
                    upper: this._renderTileUpper(),
                    withInteractiveStyling: !0,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        _ = w.a.create(function (e) {
          return {
            accountContainer: { flexDirection: 'row' },
            avatarContainer: { marginRight: e.spaces.space4 },
            rightControl: { marginTop: e.spaces.space2 },
            groupContainer: { flexDirection: 'row', flexShrink: 1 },
            eventDescription: { flexDirection: 'row' },
          }
        })
      t.a = O
    },
    jUPy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        b = n.n(p),
        f = (n('2G9S'), n('hBvt'), n('z84I'), n('ERkP')),
        y = n.n(f),
        g = n('IJsT'),
        v = n('Nxr7'),
        h = (n('yH/f'), n('TIdA')),
        C = n('t62R'),
        S = n('A91F'),
        w = n('gmfB'),
        E = n('rHpw'),
        k = n('MWbm'),
        I = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        O = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              b()(s()(e), 'state', { imageError: !1 }),
              b()(s()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return y.a.createElement(
                  k.a,
                  { style: _.teamNameContainer },
                  y.a.createElement(C.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              b()(s()(e), '_renderImage', function () {
                var t = e.props,
                  n = t.isCompact,
                  a = t.team,
                  r = a.imageUrl,
                  c = a.logo,
                  i = e.state.imageError,
                  o = (!c && !r) || i ? _.translucent : {},
                  s = c ? S.a.exact(c.width / c.height) : S.a.SQUARE
                return y.a.createElement(
                  k.a,
                  { style: [_.imageContainer, o, n && _.compactImageContainer] },
                  y.a.createElement(h.a, {
                    accessibilityLabel: '',
                    aspectMode: s,
                    image: c || r || '',
                    onError: e._handleImageError,
                    rounded: !c,
                  }),
                )
              }),
              b()(s()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              b()(s()(e), '_renderScore', function () {
                var t = e.props,
                  n = t.gameState,
                  a = t.team,
                  r = t.winnerId,
                  c = a.id,
                  i = a.score,
                  o = a.secondaryScore,
                  s = c === r,
                  l = !r,
                  u = n === w.a.Completed && !s && !l,
                  d = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(I.SCORE),
                  p = o ? e._getTeamScoreSize(I.SECONDARY_SCORE) : void 0
                return d
                  ? y.a.createElement(
                      k.a,
                      { style: [_.teamScore, u && _.losingTeamScore] },
                      y.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, i),
                      o
                        ? y.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, o)
                        : null,
                    )
                  : null
              }),
              b()(s()(e), '_getTeamScoreSize', function (t) {
                var n = e.props,
                  a = n.isCompact
                if (!!!n.team.secondaryScore) return a ? 'headline1' : 'title4'
                switch (t) {
                  case I.SCORE:
                    return a ? 'subtext2' : 'headline1'
                  case I.SECONDARY_SCORE:
                    return a ? 'subtext3' : 'body'
                  default:
                    return
                }
              }),
              b()(s()(e), '_shouldRenderScore', function () {
                var t = e.props.gameState
                return t === w.a.Completed || t === w.a.InProgress
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fallbackColor,
                    n = e.isCompact,
                    a = e.team.color,
                    r = {
                      backgroundColor:
                        (a && 'rgb('.concat(a.red, ', ').concat(a.green, ', ').concat(a.blue, ')')) ||
                        E.a.theme.colors[t],
                    },
                    c = this._shouldRenderScore(),
                    i = !n || !c
                  return y.a.createElement(
                    k.a,
                    { style: [_.root, r, n && _.compactRoot] },
                    this._renderImage(),
                    i ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(O, 'defaultProps', { isCompact: !1 })
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
        P = O,
        T = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              b()(s()(e), '_renderGameStatus', function () {
                var t = e.props,
                  n = t.category,
                  a = t.gameClock,
                  r = t.gameClockPeriod,
                  c = t.gameState,
                  i = t.isCompact,
                  o = t.startTimeMillis,
                  s = t.teams,
                  l = t.winnerId
                return y.a.createElement(v.a, {
                  category: n,
                  gameClock: a,
                  gameClockPeriod: r,
                  gameState: c,
                  startTimeMillis: o,
                  teams: s,
                  winnerId: l,
                  withCategory: !i,
                })
              }),
              b()(s()(e), '_renderTeamRow', function (t, n) {
                var a = e.props,
                  r = a.gameState,
                  c = a.isCompact,
                  i = a.winnerId,
                  o = t.id
                return y.a.createElement(P, {
                  fallbackColor: n % 2 == 0 ? 'gray300' : 'gray700',
                  gameState: r,
                  isCompact: c,
                  key: o,
                  team: t,
                  winnerId: i,
                })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.containerStyle,
                    a = e.isCompact,
                    r = e.link,
                    c = e.onClick,
                    i = e.teams
                  if (i) {
                    var o = i && i.map(this._renderTeamRow)
                    return y.a.createElement(g.a, {
                      accessibilityLabel: t,
                      containerStyle: n,
                      isCompact: a,
                      link: r,
                      lower: a ? void 0 : this._renderGameStatus(),
                      onClick: c,
                      upper: o,
                      withInteractiveStyling: !0,
                    })
                  }
                  return null
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(T, 'defaultProps', { isCompact: !1 })
    },
    kthL: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        r = n.n(a),
        c = n('ezF+'),
        i = n('VPAj'),
        o = n('caTy'),
        s = n('zh9S'),
        l = n('Rp9C'),
        u = n('rHpw'),
        d = n('tod0'),
        m = Object(i.a)({ scribe: s.c }),
        p = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            n = l.a.getAllSurfaceDetails(t)
          return n ? { items: [n] } : void 0
        },
        b = function (e) {
          var t = e.entry,
            n = e.scribe,
            a = e.scribeNamespace
          return function () {
            var e = p(t)
            n(r()(r()({}, a), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        f = u.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        y = c.g({
          bindActions: m,
          component: d.a,
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              a = e.scribeNamespace
            if (!(n && n.content && n.content.content && n.content.content.callToAction)) return null
            var r = n.content.url,
              c = n.content.content.callToAction.text,
              i = r && Object(o.b)(r)
            return c && i
              ? {
                  containerStyle: f.containerStyle,
                  link: i,
                  text: c,
                  onClick: b({ entry: n, scribe: t, scribeNamespace: a }),
                }
              : null
          },
          shouldDisplayBorder: Object(i.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              a = e.scribeNamespace,
              c = p(n)
            t(r()(r()({}, a), {}, { element: 'tile', action: 'impression' }), c)
          },
        })
      t.default = y
    },
    qB1G: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
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
    tod0: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        c = n('t62R'),
        i = n('IJsT'),
        o = n('yiKp'),
        s = n.n(o),
        l = n('Lsrn'),
        u = n('shC7'),
        d = n('k/Ka'),
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(d.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style, u.a.getConstants().isRTL && l.a.iconRTL],
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
        b = n('rHpw').a.create(function (e) {
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
          n = e.link,
          a = e.onClick,
          o = e.text
        return r.a.createElement(i.a, {
          accessibilityLabel: o,
          containerStyle: [b.center, t],
          link: n,
          lower: r.a.createElement(c.b, { color: 'primary' }, o),
          onClick: a,
          stackLayoutLowerStyle: b.lower,
          stackLayoutUpperStyle: b.upper,
          upper: r.a.createElement(p, { style: b.arrow }),
        })
      }
    },
    vKPG: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        r = n.n(a),
        c = (n('ho0z'), n('2G9S'), n('ezF+')),
        i = n('VPAj'),
        o = n('caTy'),
        s = n('zh9S'),
        l = n('Rp9C'),
        u = n('G6rE'),
        d = n('lzTJ'),
        m = n('rHpw'),
        p = n('iSF/'),
        b = Object(i.a)({ scribe: s.c }),
        f = function (e) {
          var t = e.itemMetadata.clientEventInfo,
            n = l.a.getAllSurfaceDetails(t)
          return n ? { items: [n] } : void 0
        },
        y = function (e) {
          var t = e.entry,
            n = e.scribe,
            a = e.scribeNamespace
          return function () {
            var e = f(t)
            n(r()(r()({}, a), {}, { element: 'tile', action: 'click' }), e)
          }
        },
        g = function (e) {
          var t = null == e ? void 0 : e.text
          return t
            ? { backgroundColor: Object(d.a)((null == e ? void 0 : e.backgroundColorName) || '') || void 0, text: t }
            : void 0
        },
        v = m.a.create(function (e) {
          return { containerStyle: { width: 'calc('.concat(e.spaces.space36, '*5)') } }
        }),
        h = c.g({
          bindActions: b,
          component: p.a,
          selectData: function (e) {
            var t = e.entry
            if (!(t && t.content && t.content.content && t.content.content.broadcast)) return {}
            var n = t.content.content.broadcast.userId
            return {
              user: n
                ? function (e) {
                    return u.e.select(e, n)
                  }
                : Object(i.a)(void 0),
            }
          },
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.data.user,
              a = e.entry,
              r = e.scribeNamespace
            if (!(a && a.content && a.content.content && a.content.content.broadcast && n)) return null
            var c = a.content,
              i = c.content,
              s = c.image,
              l = c.url,
              u = i.broadcast.badge,
              d = n.name,
              m = n.screen_name
            return {
              accessibilityLabel: ''.concat(d, ' ').concat(m),
              attribution: n,
              badge: g(u),
              containerStyle: v.containerStyle,
              image: s,
              link: l ? Object(o.b)(l) : '',
              onClick: y({ scribeNamespace: r, scribe: t, entry: a }),
            }
          },
          shouldDisplayBorder: Object(i.a)(!1),
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              a = e.scribeNamespace,
              c = f(n)
            t(r()(r()({}, a), {}, { element: 'tile', action: 'impression' }), c)
          },
        })
      t.default = h
    },
  },
])
//# sourceMappingURL=WIPED
