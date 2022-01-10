;(window.webpackJsonp = window.webpackJsonp || []).push([
  [169],
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
        O = n('zfvc'),
        g = n('siLd'),
        _ = n('jHwr'),
        C = n('VY6S'),
        R = n('w9LO'),
        k = n('TCjc'),
        P = n('nb/L'),
        x = n('Oe3h'),
        j = n('0FVZ'),
        E = n('rHpw'),
        S = n('i4Oy'),
        A = n('shC7'),
        D = n('MWbm')
      function H(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function L(e) {
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
      var U = (function (e) {
          p()(n, e)
          var t = L(n)
          function n(e, o) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, o)),
              y()(d()(i), '_renderContent', function () {
                var e = i.props,
                  t = e.enableClickOutsideToDismiss,
                  n = e.onAnimateComplete,
                  o = e.onDismiss,
                  a = e.show,
                  c = e.withArrow,
                  s = e.withContentOverflow,
                  u = e.withFixedPosition,
                  d = e.withFocusContainer,
                  l = e.withMask,
                  p = e.withRoundedSides,
                  f = e.withoutLayer,
                  h = i.state,
                  w = h.bottom,
                  m = h.left,
                  b = h.right,
                  y = h.top,
                  g = void 0 === y && void 0 === w,
                  _ = g || !d ? v.Fragment : R.a,
                  C = { top: y, bottom: w, left: m, right: b },
                  P = [g ? z.initialRenderWrapper : u ? z.contentWrapperFixed : z.contentWrapperAbsolute, C],
                  j = p ? z.infiniteCornerRadius : z.defaultCornerRadius,
                  E = [z.contentRoot, j, !s && !c && z.overflowHidden]
                return v.createElement(
                  k.a.Provider,
                  { value: { isInHoverCard: !0 } },
                  t ? v.createElement(D.a, { onClick: o, style: [z.mask, l && z.withMask] }) : null,
                  v.createElement(
                    D.a,
                    { onKeyUp: i._handleEsc, ref: i._setContentNode, style: P },
                    v.createElement(
                      _,
                      null,
                      v.createElement(
                        O.b,
                        { animateMount: !0, duration: 'long', onAnimateComplete: n, show: a, type: 'fade' },
                        function (e) {
                          var t = e.isAnimating
                          return l || f
                            ? v.createElement(D.a, { style: E }, i._renderInnerBody())
                            : v.createElement(x.a, { id: 'HoverCard', minimizeReporting: t }, function (e, t) {
                                return v.createElement(D.a, r()({ ref: e() }, t({ style: E })), i._renderInnerBody())
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
                return v.createElement(v.Fragment, null, n && v.createElement(P.a, { style: i._getArrowStyle() }), t)
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
                    c = E.a.theme.borderRadiiPx.large,
                    s = Object(g.c)({
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
              (i._scheduleUpdate = Object(_.a)(i._updatePosition, window.requestAnimationFrame)),
              (i._scheduleDebouncedUpdate = Object(C.a)(i._scheduleUpdate, 250)),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), S.a.addEventListener('change', this._scheduleDebouncedUpdate)
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
                  ;(this._mounted = !1), S.a.removeEventListener('change', this._scheduleDebouncedUpdate), e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.withoutLayer
                    ? this._renderContent()
                    : v.createElement(j.a.Dropdown, null, this._renderContent())
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
                    var r = 'calc('.concat(n, 'px - ').concat(P.a.metadata.width / 2, 'px)')
                    A.a.getConstants().isRTL ? e.push({ right: r }) : e.push({ left: r })
                  }
                  return e
                },
              },
            ]),
            n
          )
        })(v.Component),
        z = E.a.create(function (e) {
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
              width: ''.concat(P.a.metadata.width, 'px'),
            },
            contentWrapperAbsolute: { position: 'absolute' },
            contentWrapperFixed: { backfaceVisibility: 'hidden', position: 'fixed' },
            initialRenderWrapper: { opacity: 0, position: 'fixed' },
            contentRoot: { backgroundColor: e.colors.cellBackground, boxShadow: e.boxShadows.medium },
            overflowHidden: { overflow: 'hidden' },
            defaultCornerRadius: { borderRadius: e.borderRadii.xLarge },
            infiniteCornerRadius: { borderRadius: e.borderRadii.infinite },
            mask: F(F({}, E.a.absoluteFillObject), {}, { position: 'fixed', userSelect: 'none' }),
            withMask: { backgroundColor: e.colors.maskColor },
            downArrow: { bottom: '-'.concat(e.fontSizes.subtext3), transform: 'rotate(180deg)' },
            upArrow: { top: '-'.concat(e.fontSizes.subtext3) },
          }
        })
    },
  },
])
//# sourceMappingURL=WIPED
