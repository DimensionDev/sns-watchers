;(window.webpackJsonp = window.webpackJsonp || []).push([
  [207],
  {
    XygZ: function (e, t, n) {
      'use strict'
      var o = n('ax0f'),
        i = n('gIHd')
      o(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return i(this, 'a', 'name', e)
          },
        },
      )
    },
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return j
        })
      var o = n('97Jx'),
        i = n.n(o),
        a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        l = n.n(c),
        d = n('1Pcy'),
        s = n.n(d),
        u = n('5Yy7'),
        p = n.n(u),
        h = n('2VqO'),
        f = n.n(h),
        m = n('KEM+'),
        v = n.n(m),
        w = n('yiKp'),
        _ = n.n(w),
        y = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        g = n.n(y),
        b = n('zfvc'),
        O = n('jHwr'),
        R = n('VY6S'),
        H = n('w9LO'),
        E = n('//dC'),
        N = n('lHOd'),
        x = n('Oe3h'),
        C = n('0FVZ'),
        F = n('7N4s'),
        k = n('cHvH'),
        D = n('rHpw'),
        L = n('i4Oy'),
        U = n('shC7'),
        K = n('MWbm'),
        M = D.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: D.a.absoluteFillObject,
            mask: _()(_()({}, D.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: _()(_()({}, D.a.absoluteFillObject), {}, { bottom: void 0 }),
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
        j = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n(e, o) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, o)),
              v()(s()(i), '_handleAnimateComplete', function () {
                var e = i.props.onAnimateComplete
                e && e()
              }),
              v()(s()(i), '_handleEsc', function (e) {
                var t = i.props.onDismiss,
                  n = e.altKey,
                  o = e.ctrlKey,
                  a = e.key,
                  r = e.metaKey
                !(n || o || r) && 'Escape' === a && t()
              }),
              v()(s()(i), '_receiveBodyRectHelperRef', function (e) {
                e && i._bodyRectHelperNode !== e && ((i._bodyRectHelperNode = e), i._scheduleUpdate())
              }),
              v()(s()(i), '_receiveAnchorRef', function (e) {
                e && i._anchorNode !== e && ((i._anchorNode = e), i._scheduleUpdate())
              }),
              v()(s()(i), '_receiveContentRef', function (e) {
                e && i._contentNode !== e && ((i._contentNode = e), i._scheduleUpdate())
              }),
              v()(s()(i), '_updatePosition', function () {
                if (
                  i._mounted &&
                  (i._anchorNode || i.props.position) &&
                  i._contentNode &&
                  i._contentNode instanceof window.HTMLElement &&
                  i._bodyRectHelperNode &&
                  i._bodyRectHelperNode instanceof window.HTMLElement
                ) {
                  var e = i._contentNode.scrollHeight,
                    t = i._contentNode.scrollWidth,
                    n = i._bodyRectHelperNode.getBoundingClientRect(),
                    o = n.left,
                    a = n.top,
                    r = n.width,
                    c = L.a.get('window'),
                    l = c.height,
                    d = c.width,
                    s = { left: 0, top: 0, height: 0, width: 0 }
                  i.props.position
                    ? (s = _()(_()({}, s), i.props.position))
                    : i._anchorNode &&
                      i._anchorNode instanceof window.HTMLElement &&
                      (s = i._anchorNode.getBoundingClientRect())
                  var u = s,
                    p = u.height,
                    h = u.left,
                    f = u.top,
                    m = u.width,
                    v = d - r,
                    w = h - o,
                    y = f - a,
                    g = h + m >= t,
                    b = f + p >= e,
                    O = d - h >= t,
                    R = l - f >= e,
                    H = i.props.preferredVerticalOrientation,
                    E = (function (e) {
                      return U.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(i.props.preferredHorizontalOrientation),
                    N =
                      i.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          o = e.verticalPreference
                        return (n && t) || (!n && !t) ? o : n ? 'up' : 'down'
                      })({ verticalPreference: H, canOrientUp: b, canOrientDown: R }),
                    x =
                      i.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          o = e.horizontalPreference
                        return !t || ('left' !== o && n) ? 'right' : 'left'
                      })({ horizontalPreference: E, canOrientLeft: g, canOrientRight: O }),
                    C = i.props.isFixed ? h : w,
                    F = i.props.isFixed ? f : y,
                    k = 'up' === N ? F + p - e : F,
                    D = 'left' === x ? d - C - m - v : d - C - t - v
                  i.setState({ top: Math.max(k, 0), right: D, verticalOrientation: N, horizontalOrientation: x })
                }
              }),
              (i.state = Object.freeze({})),
              (i._scheduleUpdate = Object(O.a)(i._updatePosition, window.requestAnimationFrame)),
              (i._scheduleDebouncedUpdate = Object(R.a)(i._scheduleUpdate, 250)),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), L.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), L.a.removeEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.animateInDuration,
                    o = t.animateType,
                    a = t.children,
                    r = t.isFixed,
                    c = t.onDismiss,
                    l = t.preventFocusShift,
                    d = t.withKeyboardNavigation,
                    s = this.state,
                    u = s.right,
                    p = s.top,
                    h = s.verticalOrientation,
                    f = void 0 === p,
                    m = 'calc(100vh - '.concat(p || 0, 'px)'),
                    v = [
                      M.content,
                      f && M.contentInitialRender,
                      r && [M.contentFixed, { maxHeight: m }],
                      {
                        top: p,
                        right: U.a.getConstants().isRTL ? void 0 : u,
                        left: U.a.getConstants().isRTL ? u : void 0,
                      },
                    ],
                    w = g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(K.a, { onClick: c, style: M.mask }),
                      g.a.createElement(K.a, { ref: this._receiveBodyRectHelperRef, style: M.bodyRectHelper }),
                      g.a.createElement(k.a, null, function (t) {
                        var r = t.windowWidth
                        return g.a.createElement(
                          K.a,
                          {
                            accessibilityRole: 'menu',
                            onKeyUp: e._handleEsc,
                            ref: e._receiveContentRef,
                            style: [r < D.a.theme.breakpoints.medium ? M.rootNarrow : M.rootWide, v],
                          },
                          f && 'slide' === o
                            ? a
                            : g.a.createElement(
                                b.b,
                                {
                                  animateMount: 'up' !== h,
                                  duration: n,
                                  onAnimateComplete: e._handleAnimateComplete,
                                  show: !0,
                                  type: o,
                                },
                                function (e) {
                                  var t = e.isAnimating
                                  return g.a.createElement(
                                    x.a,
                                    { id: 'Dropdown', minimizeReporting: t },
                                    function (e, t) {
                                      return g.a.createElement(K.a, i()({ ref: e() }, t({})), a)
                                    },
                                  )
                                },
                              ),
                        )
                      }),
                    )
                  return g.a.createElement(
                    K.a,
                    { ref: this._receiveAnchorRef, style: M.anchor },
                    g.a.createElement(
                      C.a.Dropdown,
                      null,
                      g.a.createElement(N.a.Consumer, null, function (e) {
                        return g.a.createElement(F.b.Consumer, null, function (t) {
                          var n = t.isModal
                          return g.a.createElement(
                            E.a,
                            { history: e, isModal: n, onDismiss: c },
                            l ? w : g.a.createElement(H.a, { withKeyboardNavigation: d }, w),
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
        })(g.a.Component)
      v()(j, 'defaultProps', {
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
