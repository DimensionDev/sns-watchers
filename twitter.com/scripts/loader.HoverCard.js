;(window.webpackJsonp = window.webpackJsonp || []).push([
  [175],
  {
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
    'z2a+': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return U
        })
      var o = n('yiKp'),
        r = n.n(o),
        a = n('97Jx'),
        i = n.n(a),
        d = n('VrFO'),
        s = n.n(d),
        c = n('Y9Ll'),
        u = n.n(c),
        l = n('1Pcy'),
        p = n.n(l),
        h = n('5Yy7'),
        f = n.n(h),
        w = n('2VqO'),
        m = n.n(w),
        b = n('KEM+'),
        v = n.n(b),
        y = (n('yH/f'), n('2G9S'), n('ERkP')),
        _ = n.n(y),
        C = n('zfvc'),
        g = n('siLd'),
        k = n('jHwr'),
        x = n('VY6S'),
        E = n('w9LO'),
        R = n('TCjc'),
        A = n('nb/L'),
        O = n('Oe3h'),
        S = n('0FVZ'),
        F = n('rHpw'),
        P = n('i4Oy'),
        D = n('shC7'),
        H = n('MWbm'),
        U = (function (e) {
          f()(n, e)
          var t = m()(n)
          function n(e, o) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e, o)),
              v()(p()(r), '_renderContent', function () {
                var e = r.props,
                  t = e.animationDuration,
                  n = e.animationType,
                  o = e.enableClickOutsideToDismiss,
                  a = e.onAnimateComplete,
                  d = e.onDismiss,
                  s = e.show,
                  c = e.withArrow,
                  u = e.withContentOverflow,
                  l = e.withFixedPosition,
                  p = e.withFocusContainer,
                  h = e.withMask,
                  f = e.withRoundedSides,
                  w = e.withoutLayer,
                  m = r.state,
                  b = m.bottom,
                  v = m.left,
                  y = m.right,
                  g = m.top,
                  k = void 0 === g && void 0 === b,
                  x = k || !p ? _.a.Fragment : E.a,
                  A = { top: g, bottom: b, left: v, right: y },
                  S = [k ? z.initialRenderWrapper : l ? z.contentWrapperFixed : z.contentWrapperAbsolute, A],
                  F = f ? z.infiniteCornerRadius : z.defaultCornerRadius,
                  P = [z.contentRoot, F, !u && !c && z.overflowHidden]
                return _.a.createElement(
                  R.a.Provider,
                  { value: { isInHoverCard: !0 } },
                  o ? _.a.createElement(H.a, { onClick: d, style: [z.mask, h && z.withMask] }) : null,
                  _.a.createElement(
                    H.a,
                    { onKeyUp: r._handleEsc, ref: r._setContentNode, style: S },
                    _.a.createElement(
                      x,
                      null,
                      _.a.createElement(
                        C.b,
                        { animateMount: !0, duration: t || 'long', onAnimateComplete: a, show: s, type: n || 'fade' },
                        function (e) {
                          var t = e.isAnimating
                          return h || w
                            ? _.a.createElement(H.a, { style: P }, r._renderInnerBody())
                            : _.a.createElement(O.a, { id: 'HoverCard', minimizeReporting: t }, function (e, t) {
                                return _.a.createElement(H.a, i()({ ref: e() }, t({ style: P })), r._renderInnerBody())
                              })
                        },
                      ),
                    ),
                  ),
                )
              }),
              v()(p()(r), '_renderInnerBody', function () {
                var e = r.props,
                  t = e.children,
                  n = e.withArrow
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  n && _.a.createElement(A.a, { style: r._getArrowStyle() }),
                  t,
                )
              }),
              v()(p()(r), '_setContentNode', function (e) {
                ;(r._contentNode = e || void 0), r._scheduleUpdate()
              }),
              v()(p()(r), '_handleEsc', function (e) {
                var t = r.props.onDismiss,
                  n = e.altKey,
                  o = e.ctrlKey,
                  a = e.key,
                  i = e.metaKey
                !(n || o || i) && 'Escape' === a && t && t()
              }),
              v()(p()(r), '_updatePosition', function () {
                if (r._mounted) {
                  var e = r.props,
                    t = e.anchorNode,
                    n = e.preferredHorizontalOrientation,
                    o = e.preferredVerticalOrientation,
                    a = e.withArrow,
                    i = e.withFixedPosition,
                    d = F.a.theme.borderRadiiPx.large,
                    s = Object(g.d)({
                      anchorNode: t,
                      contentNode: r._contentNode,
                      preferredHorizontalOrientation: n,
                      preferredVerticalOrientation: o,
                      withArrow: a,
                      withFixedPosition: i,
                      borderRadius: d,
                    })
                  if (s) {
                    var c = s.arrowPositionStart,
                      u = s.bottom,
                      l = s.left,
                      p = s.right,
                      h = s.top
                    r.setState({ arrowPositionStart: c, bottom: u, left: l, right: p, top: h })
                  }
                }
              }),
              (r.state = Object.freeze({})),
              (r._scheduleUpdate = Object(k.a)(r._updatePosition, window.requestAnimationFrame)),
              (r._scheduleDebouncedUpdate = Object(x.a)(r._scheduleUpdate, 250)),
              r
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), P.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.anchorNode
                  e.anchorNode !== t && this._scheduleDebouncedUpdate()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props.onHoverCardUnmount
                  ;(this._mounted = !1), P.a.removeEventListener('change', this._scheduleDebouncedUpdate), e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.withoutLayer
                    ? this._renderContent()
                    : _.a.createElement(S.a.Dropdown, null, this._renderContent())
                },
              },
              {
                key: '_getArrowStyle',
                value: function () {
                  var e,
                    t = this.state,
                    n = t.arrowPositionStart,
                    o = t.bottom
                  if (n) {
                    e = [z.arrow, o ? z.downArrow : z.upArrow]
                    var r = 'calc('.concat(n, 'px - ').concat(A.a.metadata.width / 2, 'px)')
                    D.a.getConstants().isRTL ? e.push({ right: r }) : e.push({ left: r })
                  }
                  return e
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        z = F.a.create(function (e) {
          return {
            arrow: {
              color: e.colors.cellBackground,
              filter: 'drop-shadow('
                .concat(e.spaces.space1, ' -')
                .concat(e.spaces.space1, ' ')
                .concat(e.spaces.space1, ' ')
                .concat(e.colors.gray200, ')'),
              fontSize: e.fontSizes.subtext2,
              position: 'absolute',
              width: ''.concat(A.a.metadata.width, 'px'),
            },
            contentWrapperAbsolute: { position: 'absolute' },
            contentWrapperFixed: { backfaceVisibility: 'hidden', position: 'fixed' },
            initialRenderWrapper: { opacity: 0, position: 'fixed' },
            contentRoot: { backgroundColor: e.colors.cellBackground, boxShadow: e.boxShadows.medium },
            overflowHidden: { overflow: 'hidden' },
            defaultCornerRadius: { borderRadius: e.borderRadii.xLarge },
            infiniteCornerRadius: { borderRadius: e.borderRadii.infinite },
            mask: r()(r()({}, F.a.absoluteFillObject), {}, { position: 'fixed', userSelect: 'none' }),
            withMask: { backgroundColor: e.colors.maskColor },
            downArrow: { bottom: '-'.concat(e.fontSizes.subtext3), transform: 'rotate(180deg)' },
            upArrow: { top: '-'.concat(e.fontSizes.subtext3) },
          }
        })
    },
  },
])
//# sourceMappingURL=WIPED
