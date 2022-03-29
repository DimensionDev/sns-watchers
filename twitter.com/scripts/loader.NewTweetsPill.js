;(window.webpackJsonp = window.webpackJsonp || []).push([
  [179],
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
        d = i.n(p),
        _ = (i('uFXj'), i('ERkP')),
        w = i.n(_),
        y = (i('z84I'), i('lnti')),
        f = i('hqKg'),
        v = i('o52z'),
        b = i('G6rE'),
        S = i('rxPX'),
        g = function (e, t) {
          return (t.alert && t.alert.userIds) || Object(v.a)()
        },
        T = Object(S.a)()
          .propsFromState(function () {
            return {
              userImageUrls: Object(f.createSelector)(b.e.selectAll, g, function (e, t) {
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
        O = i('fs1G'),
        x = i('rcen'),
        L = i('MWbm'),
        C = i('I4+6'),
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
          function i(e, n) {
            var s
            return (
              a()(this, i),
              (s = t.call(this, e, n)),
              d()(l()(s), 'state', { show: !1 }),
              d()(l()(s), '_getLastShownTime', function () {
                return U[s.props.timelineId]
              }),
              d()(l()(s), '_hide', function () {
                var e = s.props,
                  t = e.alert,
                  i = e.removeAlert,
                  n = e.timelineId
                s._mounted && (s._updateLastShownTime(n), s.setState({ show: !1 })),
                  t &&
                    setTimeout(function () {
                      return i()
                    }, 500)
              }),
              d()(l()(s), '_attemptShow', function () {
                var e = s.props,
                  t = e.alert,
                  i = e.isAtNewest,
                  n = e.removeAlert,
                  a = e.timelineId,
                  o = e.unreadCount
                if (
                  (s._attemptShowTimeout && (clearTimeout(s._attemptShowTimeout), (s._attemptShowTimeout = null)),
                  s._mounted && (t || o > 0))
                ) {
                  var r = s._getDelayRemaining()
                  if (r <= 0) {
                    if (t && i()) return void n()
                    s.setState({ show: !0 }),
                      (N[a] = Date.now()),
                      s._scribeAction('show'),
                      s._isSticky &&
                        s._stickyDurationSeconds > 0 &&
                        (s._autoDismissTimeout = setTimeout(s._hide, 1e3 * s._stickyDurationSeconds))
                  } else s._attemptShowTimeout = setTimeout(s._attemptShow, r)
                }
              }),
              d()(l()(s), '_handleScrollDown', function () {
                var e = s.props,
                  t = e.alert,
                  i = e.remainVisibleInterval,
                  n = e.timelineId,
                  a = i
                t && t.displayDurationMs && t.displayDurationMs > -1 && (a = t.displayDurationMs),
                  s.state.show && Date.now() >= N[n] + a && (s._scribeAction('dismiss'), s._hide())
              }),
              d()(l()(s), '_handleClick', function () {
                var e = s.props.applyNewTweetsBarInstructions
                s._scribeAction('click'), window.scrollTo(0, 0), null == e || e(), s._hide()
              }),
              (s._isSticky = s.context.featureSwitches.isTrue('responsive_web_home_sticky_new_tweets_pill_enabled')),
              (s._stickyDurationSeconds = s.context.featureSwitches.getNumberValue(
                'responsive_web_home_sticky_new_tweets_pill_duration_seconds',
                -1,
              )),
              (s._delayOverrideSeconds = s.context.featureSwitches.getNumberValue(
                'responsive_web_home_sticky_new_tweets_pill_delay_seconds',
                1,
              )),
              s
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
                    (this._cancelMomentum = Object(I.a)({
                      onUp: O.a,
                      onDown: this._isSticky ? O.a : this._handleScrollDown,
                    }))
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
                    ? i.richText && w.a.createElement(x.a, { entities: i.richText.entities, text: i.richText.text })
                    : n
                  var o = C.a.generate({
                    backgroundColor: E.a.theme.colors.primary,
                    color: E.a.theme.colors.whiteOnColor,
                  })
                  return w.a.createElement(
                    L.a,
                    { accessibilityRole: 'status' },
                    w.a.createElement(
                      M.a,
                      {
                        accessibilityHidden: !s,
                        accessibilityLabel: z,
                        accessibilityRole: 'button',
                        interactiveStyles: o,
                        onClick: this._handleClick,
                        style: [F.pill, s && F.show],
                      },
                      w.a.createElement(
                        L.a,
                        { style: F.innerPill },
                        w.a.createElement(A.a, { style: F.icon }),
                        a && a.length > 0
                          ? w.a.createElement(
                              L.a,
                              { style: F.facepile },
                              w.a.createElement(j.a, {
                                borderColor: 'primary',
                                userAvatarSize: 'large',
                                userAvatarUrls: a,
                              }),
                            )
                          : null,
                        w.a.createElement(P.b, { color: 'whiteOnColor', numberOfLines: 1, style: F.pillText }, e),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_getDelayRemaining',
                value: function () {
                  var e = this.props,
                    t = e.alert,
                    i = e.triggerDelay,
                    n =
                      this._isSticky && this._delayOverrideSeconds > 0
                        ? 1e3 * this._delayOverrideSeconds
                        : (t && t.triggerDelayMs) || i
                  return this._getLastShownTime() + n - Date.now()
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
        })(w.a.PureComponent)
      d()(W, 'contextType', R.a),
        d()(W, 'defaultProps', {
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
        H = T(W)
      t.default = H
    },
  },
])
//# sourceMappingURL=WIPED
