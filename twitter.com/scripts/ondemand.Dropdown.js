;(window.webpackJsonp = window.webpackJsonp || []).push([
  [202],
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
        b = n.n(y),
        g = n('zfvc'),
        O = n('jHwr'),
        R = n('VY6S'),
        H = n('w9LO'),
        E = n('//dC'),
        N = n('lHOd'),
        x = n('Oe3h'),
        C = n('0FVZ'),
        k = n('7N4s'),
        D = n('cHvH'),
        F = n('rHpw'),
        L = n('i4Oy'),
        U = n('shC7'),
        K = n('MWbm'),
        M = F.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: F.a.absoluteFillObject,
            mask: _()(_()({}, F.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: _()(_()({}, F.a.absoluteFillObject), {}, { bottom: void 0 }),
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
                    b = h + m >= t,
                    g = f + p >= e,
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
                      })({ verticalPreference: H, canOrientUp: g, canOrientDown: R }),
                    x =
                      i.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          o = e.horizontalPreference
                        return !t || ('left' !== o && n) ? 'right' : 'left'
                      })({ horizontalPreference: E, canOrientLeft: b, canOrientRight: O }),
                    C = i.props.isFixed ? h : w,
                    k = i.props.isFixed ? f : y,
                    D = 'up' === N ? k + p - e : k,
                    F = 'left' === x ? d - C - m - v : d - C - t - v
                  i.setState({ top: Math.max(D, 0), right: F, verticalOrientation: N, horizontalOrientation: x })
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
                    l = t.withKeyboardNavigation,
                    d = this.state,
                    s = d.right,
                    u = d.top,
                    p = d.verticalOrientation,
                    h = void 0 === u,
                    f = 'calc(100vh - '.concat(u || 0, 'px)'),
                    m = [
                      M.content,
                      h && M.contentInitialRender,
                      r && [M.contentFixed, { maxHeight: f }],
                      {
                        top: u,
                        right: U.a.getConstants().isRTL ? void 0 : s,
                        left: U.a.getConstants().isRTL ? s : void 0,
                      },
                    ]
                  return b.a.createElement(
                    K.a,
                    { ref: this._receiveAnchorRef, style: M.anchor },
                    b.a.createElement(
                      C.a.Dropdown,
                      null,
                      b.a.createElement(N.a.Consumer, null, function (t) {
                        return b.a.createElement(k.b.Consumer, null, function (r) {
                          var d = r.isModal
                          return b.a.createElement(
                            E.a,
                            { history: t, isModal: d, onDismiss: c },
                            b.a.createElement(
                              H.a,
                              { withKeyboardNavigation: l },
                              b.a.createElement(K.a, { onClick: c, style: M.mask }),
                              b.a.createElement(K.a, { ref: e._receiveBodyRectHelperRef, style: M.bodyRectHelper }),
                              b.a.createElement(D.a, null, function (t) {
                                var r = t.windowWidth
                                return b.a.createElement(
                                  K.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: e._handleEsc,
                                    ref: e._receiveContentRef,
                                    style: [r < F.a.theme.breakpoints.medium ? M.rootNarrow : M.rootWide, m],
                                  },
                                  h && 'slide' === o
                                    ? a
                                    : b.a.createElement(
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
                                          return b.a.createElement(
                                            x.a,
                                            { id: 'Dropdown', minimizeReporting: t },
                                            function (e, t) {
                                              return b.a.createElement(K.a, i()({ ref: e() }, t({})), a)
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
        })(b.a.Component)
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
