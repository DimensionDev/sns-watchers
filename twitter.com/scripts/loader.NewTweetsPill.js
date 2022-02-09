;(window.webpackJsonp = window.webpackJsonp || []).push([
  [178],
  {
    WXWl: function (e, t, i) {
      'use strict'
      var n = i('yiKp'),
        a = i.n(n),
        r = i('ERkP'),
        o = i.n(r),
        s = i('Lsrn'),
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
                style: [s.a.root, e.style],
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
          return K
        })
      var n = i('yiKp'),
        a = i.n(n),
        r = i('VrFO'),
        o = i.n(r),
        s = i('Y9Ll'),
        l = i.n(s),
        c = i('1Pcy'),
        u = i.n(c),
        h = i('5Yy7'),
        m = i.n(h),
        p = i('2VqO'),
        d = i.n(p),
        w = i('KEM+'),
        f = i.n(w),
        y = (i('2G9S'), i('uFXj'), i('ERkP')),
        _ = i.n(y),
        v = (i('z84I'), i('lnti')),
        b = i('hqKg'),
        g = i('o52z'),
        S = i('G6rE'),
        D = i('rxPX'),
        I = function (e, t) {
          return (t.alert && t.alert.userIds) || Object(g.a)()
        },
        T = Object(D.a)()
          .propsFromState(function () {
            return {
              userImageUrls: Object(b.createSelector)(S.e.selectAll, I, function (e, t) {
                return t
                  ? Object(v.a)(
                      t.map(function (t) {
                        var i = e[t]
                        return i ? i.profile_image_url_https : void 0
                      }),
                    )
                  : []
              }),
            }
          })
          .withAnalytics(),
        k = i('3XMw'),
        A = i.n(k),
        L = i('WXWl'),
        C = i('IbOt'),
        O = i('fs1G'),
        E = i('rcen'),
        x = i('MWbm'),
        M = i('I4+6'),
        j = i('rHpw'),
        P = i('cm6r'),
        R = i('MAI/'),
        V = i('t62R'),
        z = A.a.gdb8bdcc,
        U = A.a.ac0f6491,
        W = { component: 'new_tweet_prompt' },
        F = {},
        H = {},
        K = (function (e) {
          m()(i, e)
          var t = d()(i)
          function i() {
            var e
            o()(this, i)
            for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(u()(e), 'state', { show: !1 }),
              f()(u()(e), '_getLastShownTime', function () {
                return H[e.props.timelineId]
              }),
              f()(u()(e), '_attemptShow', function () {
                var t = e.props,
                  i = t.alert,
                  n = t.isAtNewest,
                  a = t.removeAlert,
                  r = t.timelineId,
                  o = t.unreadCount
                if ((e._timeoutID && (clearTimeout(e._timeoutID), (e._timeoutID = null)), e._mounted && (i || o > 0))) {
                  var s = e._getDelayRemaining()
                  if (s <= 0) {
                    if (i && n()) return void a()
                    e.setState({ show: !0 }), (F[r] = Date.now()), e._scribeAction('show')
                  } else e._timeoutID = setTimeout(e._attemptShow, s)
                }
              }),
              f()(u()(e), '_handleScrollDown', function () {
                var t = e.props,
                  i = t.alert,
                  n = t.remainVisibleInterval,
                  a = t.timelineId,
                  r = n
                i && i.displayDurationMs && i.displayDurationMs > -1 && (r = i.displayDurationMs),
                  e.state.show && Date.now() >= F[a] + r && (e._scribeAction('dismiss'), e._hide())
              }),
              f()(u()(e), '_handleClick', function () {
                var t = e.props.applyNewTweetsBarInstructions
                e._scribeAction('click'), window.scrollTo(0, 0), t && t(), e._hide()
              }),
              e
            )
          }
          return (
            l()(i, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0),
                    this._getLastShownTime() || this._updateLastShownTime(this.props.timelineId),
                    this._attemptShow(),
                    (this._cancelMomentum = Object(C.a)({ onUp: O.a, onDown: this._handleScrollDown }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var i = this.props,
                    n = i.alert,
                    a = i.timelineId,
                    r = i.unreadCount,
                    o = e.timelineId !== a,
                    s = o && !this._getLastShownTime()
                  o
                    ? (s && this._updateLastShownTime(a),
                      t.show && this._updateLastShownTime(e.timelineId),
                      e.removeAlert && e.removeAlert(),
                      this.setState({ show: !1 }),
                      this._attemptShow())
                    : (((n && !t.show) || r > e.unreadCount) && this._attemptShow(),
                      (!e.alert && 0 !== r) || n || this._hide())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.removeAlert,
                    i = e.timelineId
                  ;(this._mounted = !1),
                    this._timeoutID && clearTimeout(this._timeoutID),
                    this.state.show && (this._updateLastShownTime(i), t && t()),
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
                    r = this.state.show
                  e = i
                    ? i.richText && _.a.createElement(E.a, { entities: i.richText.entities, text: i.richText.text })
                    : n
                  var o = M.a.generate({
                    backgroundColor: j.a.theme.colors.primary,
                    color: j.a.theme.colors.whiteOnColor,
                  })
                  return _.a.createElement(
                    x.a,
                    { accessibilityRole: 'status' },
                    _.a.createElement(
                      P.a,
                      {
                        accessibilityHidden: !r,
                        accessibilityLabel: U,
                        accessibilityRole: 'button',
                        interactiveStyles: o,
                        onClick: this._handleClick,
                        style: [N.pill, r && N.show],
                      },
                      _.a.createElement(
                        x.a,
                        { style: N.innerPill },
                        _.a.createElement(L.a, { style: N.icon }),
                        a && a.length > 0
                          ? _.a.createElement(
                              x.a,
                              { style: N.facepile },
                              _.a.createElement(R.a, {
                                borderColor: 'primary',
                                userAvatarSize: 'large',
                                userAvatarUrls: a,
                              }),
                            )
                          : null,
                        _.a.createElement(V.b, { color: 'whiteOnColor', numberOfLines: 1, style: N.pillText }, e),
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
                    n = (t && t.triggerDelayMs) || i
                  return this._getLastShownTime() + n - Date.now()
                },
              },
              {
                key: '_updateLastShownTime',
                value: function (e) {
                  e && (H[e] = Date.now())
                },
              },
              {
                key: '_hide',
                value: function () {
                  var e = this.props,
                    t = e.alert,
                    i = e.removeAlert,
                    n = e.timelineId
                  this._mounted && (this._updateLastShownTime(n), this.setState({ show: !1 })),
                    t &&
                      setTimeout(function () {
                        return i()
                      }, 500)
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  var t = this.props,
                    i = t.analytics,
                    n = t.scribeNamespace,
                    r = a()(a()(a()({}, n), W), {}, { action: e })
                  i.scribe(r)
                },
              },
            ]),
            i
          )
        })(_.a.PureComponent)
      f()(K, 'defaultProps', {
        isAtNewest: function () {
          return !0
        },
        label: z,
        remainVisibleInterval: 3e3,
        triggerDelay: 24e4,
        unreadCount: 0,
      })
      var N = j.a.create(function (e) {
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
        X = T(K)
      t.default = X
    },
  },
])
//# sourceMappingURL=WIPED
