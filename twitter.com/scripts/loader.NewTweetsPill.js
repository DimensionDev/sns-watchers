;(window.webpackJsonp = window.webpackJsonp || []).push([
  [171],
  {
    WXWl: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        i = r.n(n),
        o = r('ERkP'),
        a = r('Lsrn'),
        s = r('k/Ka')
      function c(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [a.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    o52z: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return i
      })
      var n = r('VPAj'),
        i = Object(n.a)([])
      Object(n.a)({})
    },
    xAHt: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'NewTweetsPill', function () {
          return U
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        i = r.n(n),
        o = r('Y9Ll'),
        a = r.n(o),
        s = r('1Pcy'),
        c = r.n(s),
        l = r('5Yy7'),
        u = r.n(l),
        p = r('N+ot'),
        h = r.n(p),
        m = r('AuHH'),
        f = r.n(m),
        d = r('KEM+'),
        w = r.n(d),
        y = (r('2G9S'), r('uFXj'), r('ERkP')),
        b = (r('z84I'), r('lnti')),
        v = r('hqKg'),
        g = r('o52z'),
        O = r('G6rE'),
        _ = r('rxPX'),
        j = function (e, t) {
          return (t.alert && t.alert.userIds) || Object(g.a)()
        },
        D = Object(_.a)()
          .propsFromState(function () {
            return {
              userImageUrls: Object(v.createSelector)(O.e.selectAll, j, function (e, t) {
                return t
                  ? Object(b.a)(
                      t.map(function (t) {
                        var r = e[t]
                        return r ? r.profile_image_url_https : void 0
                      }),
                    )
                  : []
              }),
            }
          })
          .withAnalytics(),
        S = r('3XMw'),
        P = r.n(S),
        I = r('WXWl'),
        T = r('IbOt'),
        k = r('fs1G'),
        A = r('rcen'),
        E = r('MWbm'),
        L = r('I4+6'),
        R = r('rHpw'),
        x = r('cm6r'),
        C = r('MAI/'),
        M = r('t62R')
      function H(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                w()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : H(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function F(e) {
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
          var r,
            n = f()(e)
          if (t) {
            var i = f()(this).constructor
            r = Reflect.construct(n, arguments, i)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var V = P.a.gdb8bdcc,
        X = P.a.ac0f6491,
        z = { component: 'new_tweet_prompt' },
        K = {},
        N = {},
        U = (function (e) {
          u()(r, e)
          var t = F(r)
          function r() {
            var e
            i()(this, r)
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              w()(c()(e), 'state', { show: !1 }),
              w()(c()(e), '_getLastShownTime', function () {
                return N[e.props.timelineId]
              }),
              w()(c()(e), '_attemptShow', function () {
                var t = e.props,
                  r = t.alert,
                  n = t.isAtNewest,
                  i = t.removeAlert,
                  o = t.timelineId,
                  a = t.unreadCount
                if ((e._timeoutID && (clearTimeout(e._timeoutID), (e._timeoutID = null)), e._mounted && (r || a > 0))) {
                  var s = e._getDelayRemaining()
                  if (s <= 0) {
                    if (r && n()) return void i()
                    e.setState({ show: !0 }), (K[o] = Date.now()), e._scribeAction('show')
                  } else e._timeoutID = setTimeout(e._attemptShow, s)
                }
              }),
              w()(c()(e), '_handleScrollDown', function () {
                var t = e.props,
                  r = t.alert,
                  n = t.remainVisibleInterval,
                  i = t.timelineId,
                  o = n
                r && r.displayDurationMs && r.displayDurationMs > -1 && (o = r.displayDurationMs),
                  e.state.show && Date.now() >= K[i] + o && (e._scribeAction('dismiss'), e._hide())
              }),
              w()(c()(e), '_handleClick', function () {
                var t = e.props.applyNewTweetsBarInstructions
                e._scribeAction('click'), window.scrollTo(0, 0), t && t(), e._hide()
              }),
              e
            )
          }
          return (
            a()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0),
                    this._getLastShownTime() || this._updateLastShownTime(this.props.timelineId),
                    this._attemptShow(),
                    (this._cancelMomentum = Object(T.a)({ onUp: k.a, onDown: this._handleScrollDown }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var r = this.props,
                    n = r.alert,
                    i = r.timelineId,
                    o = r.unreadCount,
                    a = e.timelineId !== i,
                    s = a && !this._getLastShownTime()
                  a
                    ? (s && this._updateLastShownTime(i),
                      t.show && this._updateLastShownTime(e.timelineId),
                      e.removeAlert && e.removeAlert(),
                      this.setState({ show: !1 }),
                      this._attemptShow())
                    : (((n && !t.show) || o > e.unreadCount) && this._attemptShow(),
                      (!e.alert && 0 !== o) || n || this._hide())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.removeAlert,
                    r = e.timelineId
                  ;(this._mounted = !1),
                    this._timeoutID && clearTimeout(this._timeoutID),
                    this.state.show && (this._updateLastShownTime(r), t && t()),
                    this._cancelMomentum()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    r = t.alert,
                    n = t.label,
                    i = t.userImageUrls,
                    o = this.state.show
                  e = r
                    ? r.richText && y.createElement(A.a, { entities: r.richText.entities, text: r.richText.text })
                    : n
                  var a = L.a.generate({
                    backgroundColor: R.a.theme.colors.primary,
                    color: R.a.theme.colors.whiteOnColor,
                  })
                  return y.createElement(
                    E.a,
                    { accessibilityRole: 'status' },
                    y.createElement(
                      x.a,
                      {
                        accessibilityHidden: !o,
                        accessibilityLabel: X,
                        accessibilityRole: 'button',
                        interactiveStyles: a,
                        onClick: this._handleClick,
                        style: [B.pill, o && B.show],
                      },
                      y.createElement(
                        E.a,
                        { style: B.innerPill },
                        y.createElement(I.a, { style: B.icon }),
                        i && i.length > 0
                          ? y.createElement(
                              E.a,
                              { style: B.facepile },
                              y.createElement(C.a, {
                                borderColor: 'primary',
                                userAvatarSize: 'large',
                                userAvatarUrls: i,
                              }),
                            )
                          : null,
                        y.createElement(M.b, { color: 'whiteOnColor', numberOfLines: 1, style: B.pillText }, e),
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
                    r = e.triggerDelay,
                    n = (t && t.triggerDelayMs) || r
                  return this._getLastShownTime() + n - Date.now()
                },
              },
              {
                key: '_updateLastShownTime',
                value: function (e) {
                  e && (N[e] = Date.now())
                },
              },
              {
                key: '_hide',
                value: function () {
                  var e = this.props,
                    t = e.alert,
                    r = e.removeAlert,
                    n = e.timelineId
                  this._mounted && (this._updateLastShownTime(n), this.setState({ show: !1 })),
                    t &&
                      setTimeout(function () {
                        return r()
                      }, 500)
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  var t = this.props,
                    r = t.analytics,
                    n = W(W(W({}, t.scribeNamespace), z), {}, { action: e })
                  r.scribe(n)
                },
              },
            ]),
            r
          )
        })(y.PureComponent)
      w()(U, 'defaultProps', {
        isAtNewest: function () {
          return !0
        },
        label: V,
        remainVisibleInterval: 3e3,
        triggerDelay: 24e4,
        unreadCount: 0,
      })
      var B = R.a.create(function (e) {
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
        G = D(U)
      t.default = G
    },
  },
])
//# sourceMappingURL=WIPED
