;(window.webpackJsonp = window.webpackJsonp || []).push([
  [178],
  {
    WXWl: function (e, t, i) {
      'use strict'
      var n = i('yiKp'),
        a = i.n(n),
        s = i('ERkP'),
        o = i.n(s),
        r = i('Lsrn'),
        l = i('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [r.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    o52z: function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return a
      })
      var n = i('VPAj'),
        a = Object(n.a)([])
      Object(n.a)({})
    },
    xAHt: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'NewTweetsPill', function () {
          return W
        })
      var n = i('VrFO'),
        a = i.n(n),
        s = i('Y9Ll'),
        o = i.n(s),
        r = i('1Pcy'),
        l = i.n(r),
        c = i('5Yy7'),
        u = i.n(c),
        m = i('2VqO'),
        h = i.n(m),
        p = i('KEM+'),
        w = i.n(p),
        _ = (i('2G9S'), i('uFXj'), i('ERkP')),
        d = i.n(_),
        y = (i('z84I'), i('lnti')),
        b = i('hqKg'),
        f = i('o52z'),
        v = i('G6rE'),
        g = i('rxPX'),
        T = function (e, t) {
          return (t.alert && t.alert.userIds) || Object(f.a)()
        },
        S = Object(g.a)()
          .propsFromState(function () {
            return {
              userImageUrls: Object(b.createSelector)(v.e.selectAll, T, function (e, t) {
                return t
                  ? Object(y.a)(
                      t.map(function (t) {
                        var i = e[t]
                        return i ? i.profile_image_url_https : void 0
                      }),
                    )
                  : []
              }),
            }
          })
          .withAnalytics({ component: 'new_tweet_prompt' }),
        k = i('3XMw'),
        D = i.n(k),
        A = i('WXWl'),
        I = i('IbOt'),
        x = i('fs1G'),
        L = i('rcen'),
        C = i('MWbm'),
        O = i('I4+6'),
        E = i('rHpw'),
        M = i('cm6r'),
        j = i('MAI/'),
        P = i('t62R'),
        R = i('v6aA'),
        V = D.a.gdb8bdcc,
        z = D.a.ac0f6491,
        N = {},
        U = {},
        W = (function (e) {
          u()(i, e)
          var t = h()(i)
          function i() {
            var e
            a()(this, i)
            for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(s))),
              w()(l()(e), 'state', { show: !1 }),
              w()(l()(e), '_getLastShownTime', function () {
                return U[e.props.timelineId]
              }),
              w()(l()(e), '_hide', function () {
                var t = e.props,
                  i = t.alert,
                  n = t.removeAlert,
                  a = t.timelineId
                e._mounted && (e._updateLastShownTime(a), e.setState({ show: !1 })),
                  i &&
                    setTimeout(function () {
                      return n()
                    }, 500)
              }),
              w()(l()(e), '_attemptShow', function () {
                var t = e.context.featureSwitches,
                  i = e.props,
                  n = i.alert,
                  a = i.isAtNewest,
                  s = i.removeAlert,
                  o = i.timelineId,
                  r = i.unreadCount
                if (
                  (e._attemptShowTimeout && (clearTimeout(e._attemptShowTimeout), (e._attemptShowTimeout = null)),
                  e._mounted && (n || r > 0))
                ) {
                  var l = e._getDelayRemaining()
                  if (l <= 0) {
                    if (n && a()) return void s()
                    e.setState({ show: !0 }), (N[o] = Date.now()), e._scribeAction('show')
                    var c = t.isTrue('responsive_web_home_sticky_new_tweets_pill_enabled'),
                      u = t.getNumberValue('responsive_web_home_sticky_new_tweets_pill_duration_seconds', -1)
                    c && u > 0 && (e._autoDismissTimeout = setTimeout(e._hide, 1e3 * u))
                  } else e._attemptShowTimeout = setTimeout(e._attemptShow, l)
                }
              }),
              w()(l()(e), '_handleScrollDown', function () {
                var t = e.context.featureSwitches,
                  i = e.props,
                  n = i.alert,
                  a = i.remainVisibleInterval,
                  s = i.timelineId
                if (!(n && e.state.show && t.isTrue('responsive_web_home_sticky_new_tweets_pill_enabled'))) {
                  var o = a
                  n && n.displayDurationMs && n.displayDurationMs > -1 && (o = n.displayDurationMs),
                    e.state.show && Date.now() >= N[s] + o && (e._scribeAction('dismiss'), e._hide())
                }
              }),
              w()(l()(e), '_handleClick', function () {
                var t = e.props.applyNewTweetsBarInstructions
                e._scribeAction('click'), window.scrollTo(0, 0), null == t || t(), e._hide()
              }),
              e
            )
          }
          return (
            o()(i, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0),
                    this._getLastShownTime() || this._updateLastShownTime(this.props.timelineId),
                    this._attemptShow(),
                    (this._cancelMomentum = Object(I.a)({ onUp: x.a, onDown: this._handleScrollDown }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var i,
                    n = this.props,
                    a = n.alert,
                    s = n.timelineId,
                    o = n.unreadCount,
                    r = e.timelineId !== s,
                    l = r && !this._getLastShownTime()
                  r
                    ? (l && this._updateLastShownTime(s),
                      t.show && this._updateLastShownTime(e.timelineId),
                      null === (i = e.removeAlert) || void 0 === i || i.call(e),
                      this.setState({ show: !1 }),
                      this._attemptShow())
                    : (((a && !t.show) || o > e.unreadCount) && this._attemptShow(),
                      (!e.alert && 0 !== o) || a || this._hide())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.removeAlert,
                    i = e.timelineId
                  ;(this._mounted = !1),
                    this._attemptShowTimeout && clearTimeout(this._attemptShowTimeout),
                    this._autoDismissTimeout && clearTimeout(this._autoDismissTimeout),
                    this.state.show && (this._updateLastShownTime(i), null == t || t()),
                    this._cancelMomentum()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    i = t.alert,
                    n = t.label,
                    a = t.userImageUrls,
                    s = this.state.show
                  e = i
                    ? i.richText && d.a.createElement(L.a, { entities: i.richText.entities, text: i.richText.text })
                    : n
                  var o = O.a.generate({
                    backgroundColor: E.a.theme.colors.primary,
                    color: E.a.theme.colors.whiteOnColor,
                  })
                  return d.a.createElement(
                    C.a,
                    { accessibilityRole: 'status' },
                    d.a.createElement(
                      M.a,
                      {
                        accessibilityHidden: !s,
                        accessibilityLabel: z,
                        accessibilityRole: 'button',
                        interactiveStyles: o,
                        onClick: this._handleClick,
                        style: [F.pill, s && F.show],
                      },
                      d.a.createElement(
                        C.a,
                        { style: F.innerPill },
                        d.a.createElement(A.a, { style: F.icon }),
                        a && a.length > 0
                          ? d.a.createElement(
                              C.a,
                              { style: F.facepile },
                              d.a.createElement(j.a, {
                                borderColor: 'primary',
                                userAvatarSize: 'large',
                                userAvatarUrls: a,
                              }),
                            )
                          : null,
                        d.a.createElement(P.b, { color: 'whiteOnColor', numberOfLines: 1, style: F.pillText }, e),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_getDelayRemaining',
                value: function () {
                  var e = this.context.featureSwitches,
                    t = this.props,
                    i = t.alert,
                    n = t.triggerDelay,
                    a = e.getNumberValue('responsive_web_home_sticky_new_tweets_pill_delay_seconds', 1),
                    s =
                      e.isTrue('responsive_web_home_sticky_new_tweets_pill_enabled') && a > 0
                        ? 1e3 * a
                        : (i && i.triggerDelayMs) || n
                  return this._getLastShownTime() + s - Date.now()
                },
              },
              {
                key: '_updateLastShownTime',
                value: function (e) {
                  e && (U[e] = Date.now())
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribeAction(e)
                },
              },
            ]),
            i
          )
        })(d.a.PureComponent)
      w()(W, 'contextType', R.a),
        w()(W, 'defaultProps', {
          isAtNewest: function () {
            return !0
          },
          label: V,
          remainVisibleInterval: 3e3,
          triggerDelay: 24e4,
          unreadCount: 0,
        })
      var F = E.a.create(function (e) {
          return {
            pill: {
              boxShadow: e.boxShadows.small,
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.infinite,
              paddingHorizontal: e.spaces.space16,
              opacity: 0,
              justifyContent: 'center',
              transform: [{ translate3d: '0, 0, 0' }],
              transitionProperty: 'transform, opacity',
              transitionDuration: '0.15s',
              transitionTimingFunction: 'ease, ease, step-end',
            },
            innerPill: { flexDirection: 'row', paddingVertical: e.spaces.space4 },
            icon: {
              width: e.spaces.space20,
              marginRight: e.spaces.space4,
              alignSelf: 'center',
              color: e.colors.whiteOnColor,
            },
            facepile: { marginRight: e.spaces.space8 },
            pillText: { alignSelf: 'center' },
            show: {
              opacity: 1,
              transitionTimingFunction: 'ease, ease, step-start',
              transform: [{ translate3d: '0, 3.5em, 0' }],
            },
          }
        }),
        H = S(W)
      t.default = H
    },
  },
])
//# sourceMappingURL=WIPED
