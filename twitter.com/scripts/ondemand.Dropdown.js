;(window.webpackJsonp = window.webpackJsonp || []).push([
  [201],
  {
    XygZ: function (e, t, n) {
      'use strict'
      var o = n('ax0f'),
        r = n('gIHd')
      o(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return r(this, 'a', 'name', e)
          },
        },
      )
    },
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return A
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var o = n('97Jx'),
        r = n.n(o),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        d = n.n(s),
        u = n('5Yy7'),
        p = n.n(u),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        w = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        O = n.n(w),
        g = n('zfvc'),
        _ = n('jHwr'),
        R = n('VY6S'),
        H = n('w9LO'),
        E = n('//dC'),
        N = n('lHOd'),
        j = n('Oe3h'),
        x = n('0FVZ'),
        P = n('7N4s'),
        C = n('cHvH'),
        D = n('rHpw'),
        k = n('i4Oy'),
        F = n('shC7'),
        L = n('MWbm')
      function U(e) {
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
          var n,
            o = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return h()(this, n)
        }
      }
      function M(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var z = D.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: D.a.absoluteFillObject,
            mask: K(K({}, D.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: K(K({}, D.a.absoluteFillObject), {}, { bottom: void 0 }),
            content: {
              borderRadius: e.borderRadii.small,
              position: 'absolute',
              overflow: 'hidden',
              backgroundColor: e.colors.navigationBackground,
              boxShadow: e.boxShadows.medium,
            },
            contentInitialRender: { position: 'fixed', opacity: 0 },
            contentFixed: { position: 'fixed', overflowY: 'auto', overscrollBehavior: 'contain' },
          }
        }),
        A = (function (e) {
          p()(n, e)
          var t = U(n)
          function n(e, o) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e, o)),
              b()(d()(r), '_handleAnimateComplete', function () {
                var e = r.props.onAnimateComplete
                e && e()
              }),
              b()(d()(r), '_handleEsc', function (e) {
                var t = r.props.onDismiss,
                  n = e.altKey,
                  o = e.ctrlKey,
                  i = e.key,
                  a = e.metaKey
                !(n || o || a) && 'Escape' === i && t()
              }),
              b()(d()(r), '_receiveBodyRectHelperRef', function (e) {
                e && r._bodyRectHelperNode !== e && ((r._bodyRectHelperNode = e), r._scheduleUpdate())
              }),
              b()(d()(r), '_receiveAnchorRef', function (e) {
                e && r._anchorNode !== e && ((r._anchorNode = e), r._scheduleUpdate())
              }),
              b()(d()(r), '_receiveContentRef', function (e) {
                e && r._contentNode !== e && ((r._contentNode = e), r._scheduleUpdate())
              }),
              b()(d()(r), '_updatePosition', function () {
                if (
                  r._mounted &&
                  (r._anchorNode || r.props.position) &&
                  r._contentNode &&
                  r._contentNode instanceof window.HTMLElement &&
                  r._bodyRectHelperNode &&
                  r._bodyRectHelperNode instanceof window.HTMLElement
                ) {
                  var e = r._contentNode.scrollHeight,
                    t = r._contentNode.scrollWidth,
                    n = r._bodyRectHelperNode.getBoundingClientRect(),
                    o = n.left,
                    i = n.top,
                    a = n.width,
                    c = k.a.get('window'),
                    l = c.height,
                    s = c.width,
                    d = { left: 0, top: 0, height: 0, width: 0 }
                  r.props.position
                    ? (d = K(K({}, d), r.props.position))
                    : r._anchorNode &&
                      r._anchorNode instanceof window.HTMLElement &&
                      (d = r._anchorNode.getBoundingClientRect())
                  var u = d,
                    p = u.height,
                    f = u.left,
                    h = u.top,
                    m = u.width,
                    v = s - a,
                    y = f - o,
                    b = h - i,
                    w = f + m >= t,
                    O = h + p >= e,
                    g = s - f >= t,
                    _ = l - h >= e,
                    R = r.props.preferredVerticalOrientation,
                    H = (function (e) {
                      return F.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(r.props.preferredHorizontalOrientation),
                    E =
                      r.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          o = e.verticalPreference
                        return (n && t) || (!n && !t) ? o : n ? 'up' : 'down'
                      })({ verticalPreference: R, canOrientUp: O, canOrientDown: _ }),
                    N =
                      r.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          o = e.horizontalPreference
                        return !t || ('left' !== o && n) ? 'right' : 'left'
                      })({ horizontalPreference: H, canOrientLeft: w, canOrientRight: g }),
                    j = r.props.isFixed ? f : y,
                    x = r.props.isFixed ? h : b,
                    P = 'up' === E ? x + p - e : x,
                    C = 'left' === N ? s - j - m - v : s - j - t - v
                  r.setState({ top: Math.max(P, 0), right: C, verticalOrientation: E, horizontalOrientation: N })
                }
              }),
              (r.state = Object.freeze({})),
              (r._scheduleUpdate = Object(_.a)(r._updatePosition, window.requestAnimationFrame)),
              (r._scheduleDebouncedUpdate = Object(R.a)(r._scheduleUpdate, 250)),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), k.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), k.a.removeEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.animateInDuration,
                    o = t.animateType,
                    i = t.children,
                    a = t.isFixed,
                    c = t.onDismiss,
                    l = t.withKeyboardNavigation,
                    s = this.state,
                    d = s.right,
                    u = s.top,
                    p = s.verticalOrientation,
                    f = void 0 === u,
                    h = 'calc(100vh - '.concat(u || 0, 'px)'),
                    m = [
                      z.content,
                      f && z.contentInitialRender,
                      a && [z.contentFixed, { maxHeight: h }],
                      {
                        top: u,
                        right: F.a.getConstants().isRTL ? void 0 : d,
                        left: F.a.getConstants().isRTL ? d : void 0,
                      },
                    ]
                  return O.a.createElement(
                    L.a,
                    { ref: this._receiveAnchorRef, style: z.anchor },
                    O.a.createElement(
                      x.a.Dropdown,
                      null,
                      O.a.createElement(N.a.Consumer, null, function (t) {
                        return O.a.createElement(P.b.Consumer, null, function (a) {
                          var s = a.isModal
                          return O.a.createElement(
                            E.a,
                            { history: t, isModal: s, onDismiss: c },
                            O.a.createElement(
                              H.a,
                              { withKeyboardNavigation: l },
                              O.a.createElement(L.a, { onClick: c, style: z.mask }),
                              O.a.createElement(L.a, { ref: e._receiveBodyRectHelperRef, style: z.bodyRectHelper }),
                              O.a.createElement(C.a, null, function (t) {
                                var a = t.windowWidth
                                return O.a.createElement(
                                  L.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: e._handleEsc,
                                    ref: e._receiveContentRef,
                                    style: [a < D.a.theme.breakpoints.medium ? z.rootNarrow : z.rootWide, m],
                                  },
                                  f && 'slide' === o
                                    ? i
                                    : O.a.createElement(
                                        g.b,
                                        {
                                          animateMount: 'up' !== p,
                                          duration: n,
                                          onAnimateComplete: e._handleAnimateComplete,
                                          show: !0,
                                          type: o,
                                        },
                                        function (e) {
                                          var t = e.isAnimating
                                          return O.a.createElement(
                                            j.a,
                                            { id: 'Dropdown', minimizeReporting: t },
                                            function (e, t) {
                                              return O.a.createElement(L.a, r()({ ref: e() }, t({})), i)
                                            },
                                          )
                                        },
                                      ),
                                )
                              }),
                            ),
                          )
                        })
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(O.a.Component)
      b()(A, 'defaultProps', {
        preferredHorizontalOrientation: 'left',
        preferredVerticalOrientation: 'down',
        animateType: 'slide',
        animateInDuration: 'normal',
        withKeyboardNavigation: !0,
      })
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          o = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(o)), n
        }
      }
    },
  },
])
//# sourceMappingURL=WIPED
