;(window.webpackJsonp = window.webpackJsonp || []).push([
  [171],
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
          return z
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('97Jx'),
        r = n.n(o),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        d = n.n(u),
        l = n('5Yy7'),
        p = n.n(l),
        f = n('N+ot'),
        h = n.n(f),
        w = n('AuHH'),
        m = n.n(w),
        b = n('KEM+'),
        y = n.n(b),
        v = (n('yH/f'), n('2G9S'), n('ERkP')),
        O = n.n(v),
        g = n('zfvc'),
        _ = n('siLd'),
        C = n('jHwr'),
        R = n('VY6S'),
        k = n('w9LO'),
        P = n('TCjc'),
        x = n('nb/L'),
        j = n('Oe3h'),
        E = n('0FVZ'),
        S = n('rHpw'),
        A = n('i4Oy'),
        D = n('shC7'),
        H = n('MWbm')
      function F(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            o = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return h()(this, n)
        }
      }
      var z = (function (e) {
          p()(n, e)
          var t = U(n)
          function n(e, o) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, o)),
              y()(d()(i), '_renderContent', function () {
                var e = i.props,
                  t = e.animationDuration,
                  n = e.animationType,
                  o = e.enableClickOutsideToDismiss,
                  a = e.onAnimateComplete,
                  c = e.onDismiss,
                  s = e.show,
                  u = e.withArrow,
                  d = e.withContentOverflow,
                  l = e.withFixedPosition,
                  p = e.withFocusContainer,
                  f = e.withMask,
                  h = e.withRoundedSides,
                  w = e.withoutLayer,
                  m = i.state,
                  b = m.bottom,
                  y = m.left,
                  v = m.right,
                  _ = m.top,
                  C = void 0 === _ && void 0 === b,
                  R = C || !p ? O.a.Fragment : k.a,
                  x = { top: _, bottom: b, left: y, right: v },
                  E = [C ? N.initialRenderWrapper : l ? N.contentWrapperFixed : N.contentWrapperAbsolute, x],
                  S = h ? N.infiniteCornerRadius : N.defaultCornerRadius,
                  A = [N.contentRoot, S, !d && !u && N.overflowHidden]
                return O.a.createElement(
                  P.a.Provider,
                  { value: { isInHoverCard: !0 } },
                  o ? O.a.createElement(H.a, { onClick: c, style: [N.mask, f && N.withMask] }) : null,
                  O.a.createElement(
                    H.a,
                    { onKeyUp: i._handleEsc, ref: i._setContentNode, style: E },
                    O.a.createElement(
                      R,
                      null,
                      O.a.createElement(
                        g.b,
                        { animateMount: !0, duration: t || 'long', onAnimateComplete: a, show: s, type: n || 'fade' },
                        function (e) {
                          var t = e.isAnimating
                          return f || w
                            ? O.a.createElement(H.a, { style: A }, i._renderInnerBody())
                            : O.a.createElement(j.a, { id: 'HoverCard', minimizeReporting: t }, function (e, t) {
                                return O.a.createElement(H.a, r()({ ref: e() }, t({ style: A })), i._renderInnerBody())
                              })
                        },
                      ),
                    ),
                  ),
                )
              }),
              y()(d()(i), '_renderInnerBody', function () {
                var e = i.props,
                  t = e.children,
                  n = e.withArrow
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  n && O.a.createElement(x.a, { style: i._getArrowStyle() }),
                  t,
                )
              }),
              y()(d()(i), '_setContentNode', function (e) {
                ;(i._contentNode = e || void 0), i._scheduleUpdate()
              }),
              y()(d()(i), '_handleEsc', function (e) {
                var t = i.props.onDismiss,
                  n = e.altKey,
                  o = e.ctrlKey,
                  r = e.key,
                  a = e.metaKey
                !(n || o || a) && 'Escape' === r && t && t()
              }),
              y()(d()(i), '_updatePosition', function () {
                if (i._mounted) {
                  var e = i.props,
                    t = e.anchorNode,
                    n = e.preferredHorizontalOrientation,
                    o = e.preferredVerticalOrientation,
                    r = e.withArrow,
                    a = e.withFixedPosition,
                    c = S.a.theme.borderRadiiPx.large,
                    s = Object(_.d)({
                      anchorNode: t,
                      contentNode: i._contentNode,
                      preferredHorizontalOrientation: n,
                      preferredVerticalOrientation: o,
                      withArrow: r,
                      withFixedPosition: a,
                      borderRadius: c,
                    })
                  if (s) {
                    var u = s.arrowPositionStart,
                      d = s.bottom,
                      l = s.left,
                      p = s.right,
                      f = s.top
                    i.setState({ arrowPositionStart: u, bottom: d, left: l, right: p, top: f })
                  }
                }
              }),
              (i.state = Object.freeze({})),
              (i._scheduleUpdate = Object(C.a)(i._updatePosition, window.requestAnimationFrame)),
              (i._scheduleDebouncedUpdate = Object(R.a)(i._scheduleUpdate, 250)),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), A.a.addEventListener('change', this._scheduleDebouncedUpdate)
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
                  ;(this._mounted = !1), A.a.removeEventListener('change', this._scheduleDebouncedUpdate), e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.withoutLayer
                    ? this._renderContent()
                    : O.a.createElement(E.a.Dropdown, null, this._renderContent())
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
                    e = [N.arrow, o ? N.downArrow : N.upArrow]
                    var r = 'calc('.concat(n, 'px - ').concat(x.a.metadata.width / 2, 'px)')
                    D.a.getConstants().isRTL ? e.push({ right: r }) : e.push({ left: r })
                  }
                  return e
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        N = S.a.create(function (e) {
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
              width: ''.concat(x.a.metadata.width, 'px'),
            },
            contentWrapperAbsolute: { position: 'absolute' },
            contentWrapperFixed: { backfaceVisibility: 'hidden', position: 'fixed' },
            initialRenderWrapper: { opacity: 0, position: 'fixed' },
            contentRoot: { backgroundColor: e.colors.cellBackground, boxShadow: e.boxShadows.medium },
            overflowHidden: { overflow: 'hidden' },
            defaultCornerRadius: { borderRadius: e.borderRadii.xLarge },
            infiniteCornerRadius: { borderRadius: e.borderRadii.infinite },
            mask: L(L({}, S.a.absoluteFillObject), {}, { position: 'fixed', userSelect: 'none' }),
            withMask: { backgroundColor: e.colors.maskColor },
            downArrow: { bottom: '-'.concat(e.fontSizes.subtext3), transform: 'rotate(180deg)' },
            upArrow: { top: '-'.concat(e.fontSizes.subtext3) },
          }
        })
    },
  },
])
//# sourceMappingURL=WIPED
