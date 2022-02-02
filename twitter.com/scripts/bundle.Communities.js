;(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'screen_EditMembershipType_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'membership_settings',
              plural: !1,
              selections: [
                {
                  kind: 'InlineDataFragmentSpread',
                  name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      ],
                      type: 'CommunityOpenMembershipSettings',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        r,
                        { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'join_approval_policy',
                          storageKey: null,
                        },
                      ],
                      type: 'CommunityRestrictedMembershipSettings',
                      abstractKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(a.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = a)
    },
    '21U8': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('Rqga'), n('2G9S'), n('ERkP')),
        v = n.n(b),
        g = n('/yvb'),
        E = n('3XMw'),
        O = n.n(E),
        C = n('3rX5'),
        w = n('rHpw'),
        _ = n('MWbm'),
        S = w.a.create(function (e) {
          return {
            mask: {
              backgroundColor: 'transparent',
              borderWidth: e.spaces.space4,
              borderColor: e.colors.primary,
              boxShadow: '0 0 0 9999px '.concat(e.colors.activeFaintGray),
            },
            circle: { borderRadius: e.borderRadii.infinite },
          }
        }),
        j = function (e) {
          var t = e.circle,
            n = e.height,
            r = e.width
          return v.a.createElement(_.a, {
            pointerEvents: 'none',
            style: [S.mask, { width: r, height: n }, t && S.circle],
          })
        },
        P = n('ZvMt'),
        k = n('97Jx'),
        I = n.n(k),
        M = n('m3Bd'),
        R = n.n(M),
        T = n('CHgo'),
        x = n('7ep7')
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var A = (function (e) {
          u()(n, e)
          var t = L(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(l()(r), '_previousTouchDistance', 0),
              h()(l()(r), '_previousPositionX', 0),
              h()(l()(r), '_previousPositionY', 0),
              h()(l()(r), '_centerPosition', { x: 0, y: 0 }),
              h()(l()(r), '_panResponder', {}),
              h()(l()(r), '_setRef', function (e) {
                var t = r.props,
                  n = t.onPanEnd,
                  a = t.onPanMove,
                  o = t.onPinchMove,
                  i = t.onWheel
                if (e) {
                  ;(a || n || o) && (r._removeTouchMoveToScrollListener = Object(T.a)(e, r._preventDefaultEvent, !1)),
                    i && (r._removeScrollToScaleListener = Object(T.b)(e, r._preventDefaultEvent, !1))
                  var c = e.getBoundingClientRect()
                  r._centerPosition = { x: c.width / 2 + c.left, y: c.height / 2 + c.top }
                }
              }),
              h()(l()(r), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(l()(r), '_handlePanResponderMove', function (e, t) {
                var n,
                  a,
                  o = r.props,
                  i = o.onPanMove,
                  c = o.onPinchMove,
                  l = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (c) {
                    var s =
                        ((n = l[0]),
                        (a = l[1]),
                        Math.sqrt(Math.pow(n.pageY - a.pageY, 2) + Math.pow(n.pageX - a.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      m = u.pageX,
                      d = u.pageY,
                      p = r._previousPositionX ? m - r._previousPositionX : 0,
                      f = r._previousPositionY ? d - r._previousPositionY : 0,
                      y = r._previousTouchDistance ? s - r._previousTouchDistance : 0
                    ;(r._previousPositionX = m), (r._previousPositionY = d), (r._previousTouchDistance = s)
                    var h = r._centerPosition
                    c(y, h.x - m, h.y - d, p, f)
                  }
                } else i && i(t.dx, t.dy)
                document.addEventListener('selectstart', r._preventDefaultEvent, !1)
              }),
              h()(l()(r), '_handlePanResponderEnd', function (e, t) {
                r.props.onPanEnd && r.props.onPanEnd(t.dx, t.dy),
                  r.props.onPinchMove && (r._previousTouchDistance = 0),
                  (r._previousPositionX = 0),
                  (r._previousPositionY = 0),
                  r._removeSelectStartListener()
              }),
              h()(l()(r), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  a = e.deltaX,
                  o = e.deltaY,
                  i = r._centerPosition,
                  c = i.x - t,
                  l = i.y - n
                r.props.onWheel && r.props.onWheel(a, o, c, l)
              }),
              (r._panResponder = x.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: r._handlePanResponderMove,
                onPanResponderRelease: r._handlePanResponderEnd,
                onPanResponderTerminate: r._handlePanResponderEnd,
              })),
              (r._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', r._preventDefaultEvent, !1)
              }),
              r
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t =
                      (e.children,
                      e.onPanEnd,
                      e.onPanMove,
                      e.onPinchMove,
                      e.onWheel,
                      R()(e, ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel']))
                  return v.a.createElement(
                    _.a,
                    I()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
                    this.props.children,
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(),
                    this._removeScrollToScaleListener && this._removeScrollToScaleListener(),
                    this._removeSelectStartListener()
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        D = n('9RkS'),
        F = n('rOXj'),
        H = n('aITJ'),
        B = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        N = n('k/Ka')
      function K(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var U = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(N.a)(
          'svg',
          z(
            z({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [B.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.a.createElement(
            'g',
            null,
            v.a.createElement('path', {
              d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      U.metadata = { width: 24, height: 24 }
      var V = U
      function W(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Y = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(N.a)(
          'svg',
          X(
            X({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [B.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.a.createElement(
            'g',
            null,
            v.a.createElement('path', {
              d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      Y.metadata = { width: 24, height: 24 }
      var G = Y
      function Q(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(N.a)(
          'svg',
          q(
            q({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [B.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.a.createElement(
            'g',
            null,
            v.a.createElement('path', {
              d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      Z.metadata = { width: 24, height: 24 }
      var J = Z
      function $(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var te = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(N.a)(
          'svg',
          ee(
            ee({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [B.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.a.createElement(
            'g',
            null,
            v.a.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            v.a.createElement('path', {
              d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
            }),
          ),
        )
      }
      te.metadata = { width: 24, height: 24 }
      var ne = te
      function re(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? re(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : re(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var oe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(N.a)(
          'svg',
          ae(
            ae({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [B.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.a.createElement(
            'g',
            null,
            v.a.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            v.a.createElement('path', {
              d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
            }),
          ),
        )
      }
      oe.metadata = { width: 24, height: 24 }
      var ie = oe
      function ce(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var le = O.a.d85bc1b8,
        se = O.a.f596ace8,
        ue = O.a.df031fca,
        me = O.a.b40332c5,
        de = O.a.e547b368,
        pe = O.a.f7571204,
        fe = O.a.e6e16811,
        ye =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        he = (function (e) {
          u()(n, e)
          var t = ce(n)
          function n(e) {
            var r, o
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(l()(r), '_previousLeft', 0),
              h()(l()(r), '_previousTop', 0),
              h()(l()(r), '_panStyles', { top: 0, left: 0 }),
              h()(l()(r), '_shouldShowZoomControl', function () {
                return (!H.b.isMobileOS() || !F.a.isTouchSupported()) && r.props.withZoomControl
              }),
              h()(l()(r), '_renderControls', function () {
                var e = r.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  a = r.state.aspectRatio,
                  o = t.width / t.height,
                  i = r._shouldShowZoomControl()
                return n || i
                  ? v.a.createElement(
                      _.a,
                      { style: be.controlsContainer },
                      n
                        ? v.a.createElement(
                            _.a,
                            { style: be.ratioContainer },
                            v.a.createElement(g.a, {
                              accessibilityLabel: se,
                              borderColor: 'transparent',
                              color: a === o ? 'primary' : 'gray700',
                              hoverLabel: { label: de },
                              icon: v.a.createElement(V, null),
                              onPress: r._setAspectRatio(o),
                              size: 'medium',
                            }),
                            v.a.createElement(g.a, {
                              accessibilityLabel: ue,
                              borderColor: 'transparent',
                              color: a === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: pe },
                              icon: v.a.createElement(G, null),
                              onPress: r._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            v.a.createElement(g.a, {
                              accessibilityLabel: me,
                              borderColor: 'transparent',
                              color: 1 === a ? 'primary' : 'gray700',
                              hoverLabel: { label: fe },
                              icon: v.a.createElement(J, null),
                              onPress: r._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      i
                        ? v.a.createElement(
                            _.a,
                            { style: be.zoomContainer },
                            v.a.createElement(D.a, {
                              accessibilityLabel: le,
                              max: r._maxScale,
                              maxIcon: v.a.createElement(ne, { style: be.icon }),
                              min: 0,
                              minIcon: v.a.createElement(ie, { style: be.icon }),
                              onChange: r._handleScaleChange,
                              step: 'any',
                              value: r.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              h()(l()(r), '_setImageRef', function (e) {
                r._imageRef = e
              }),
              h()(l()(r), '_handleScaleChange', function (e) {
                r.setState({ imageScale: e })
              }),
              h()(l()(r), '_getImageDimensions', function () {
                var e = r.state.imageScale,
                  t = r.props.image.width / r.props.image.height,
                  n = r._getMaskDimensions(),
                  a = n.height,
                  o = n.width,
                  i = P.a.getCoverDimensions({ width: o, height: a }, t),
                  c = i.height
                return { width: i.width * Math.pow(2, e), height: c * Math.pow(2, e) }
              }),
              h()(l()(r), '_getMaskDimensions', function () {
                var e = r.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  a = e.containerWidth,
                  o = P.a.getContainDimensions({ width: a - 50, height: n - 50 }, t),
                  i = o.height
                return { width: o.width, height: i }
              }),
              h()(l()(r), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  a = t.width
                r.state.containerHeight || r.state.containerWidth
                  ? r.setState({ containerHeight: n, containerWidth: a })
                  : (r.setState({ containerHeight: n, containerWidth: a }), r._setDefaultCropData())
              }),
              h()(l()(r), '_setDefaultCropData', function () {
                var e = r.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var a = r._getImageDimensions().width,
                    o = r._getMaskDimensions().width,
                    i = a / n.width,
                    c = ye(o / (t.width * i))
                  r.setState({ imageScale: c })
                  var l = r._getUnscaledCropData(),
                    s = l.left,
                    u = l.top
                  ;(r._panStyles.top = u - t.top * i * Math.pow(2, c)),
                    (r._previousTop = r._panStyles.top),
                    (r._panStyles.left = s - t.left * i * Math.pow(2, c)),
                    (r._previousLeft = r._panStyles.left),
                    r._updateNativeStyles()
                }
              }),
              h()(l()(r), '_handleWheel', function (e, t, n, a) {
                var o = (-1 * t) / 500
                r.setState(function (e) {
                  var t = e.imageScale,
                    i = Math.min(r._maxScale, Math.max(t + o, 0))
                  return (
                    (r._panStyles.left += n * (i - t)),
                    (r._panStyles.top += a * (i - t)),
                    (r._previousLeft = r._panStyles.left),
                    (r._previousTop = r._panStyles.top),
                    { imageScale: i }
                  )
                })
              }),
              h()(l()(r), '_handlePanMove', function (e, t) {
                ;(r._panStyles.left = r._previousLeft + e),
                  (r._panStyles.top = r._previousTop + t),
                  r._updateNativeStyles(),
                  r._adjustToInBounds()
              }),
              h()(l()(r), '_handlePanEnd', function (e, t) {
                ;(r._previousLeft = r._panStyles.left), (r._previousTop = r._panStyles.top)
              }),
              h()(l()(r), '_handlePinchMove', function (e, t, n, a, o) {
                var i = e / 200
                r.setState(function (e) {
                  var c = e.imageScale,
                    l = Math.min(r._maxScale, Math.max(c + i, 0))
                  return (
                    (r._panStyles.left += t * (l - c) + a),
                    (r._panStyles.top += n * (l - c) + o),
                    (r._previousLeft = r._panStyles.left),
                    (r._previousTop = r._panStyles.top),
                    { imageScale: l }
                  )
                })
              }),
              h()(l()(r), '_adjustToInBounds', function () {
                var e = r._getUnscaledCropData(),
                  t = r._getImageDimensions(),
                  n = e.left,
                  a = e.top,
                  o = e.left + e.width - t.width,
                  i = e.top + e.height - t.height,
                  c = !1
                n < 0 && ((c = !0), (r._panStyles.left += n), (r._previousLeft += n)),
                  a < 0 && ((c = !0), (r._panStyles.top += a), (r._previousTop += a)),
                  o > 0 && ((c = !0), (r._panStyles.left += o), (r._previousLeft += o)),
                  i > 0 && ((c = !0), (r._panStyles.top += i), (r._previousTop += i)),
                  c && r._updateNativeStyles()
              }),
              h()(l()(r), '_updateNativeStyles', function () {
                var e = r._panStyles,
                  t = e.left,
                  n = e.top
                r._imageRef &&
                  r._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              h()(l()(r), '_getUnscaledCropData', function () {
                var e = r._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  a = r._getMaskDimensions(),
                  o = a.height,
                  i = a.width,
                  c = r._panStyles,
                  l = c.left
                return { top: (t - o) / 2 - c.top, left: (n - i) / 2 - l, width: i, height: o }
              }),
              h()(l()(r), '_setAspectRatio', function (e) {
                return function () {
                  r.setState({ aspectRatio: e })
                }
              }),
              (r.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (r._maxScale = ((o = e.image), Math.max(Math.min(ye(o.width / 150), ye(o.height / 150), 3), 0.5))),
              r
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    n = e.image,
                    r = e.withZoomControl,
                    a = this._getImageDimensions(),
                    o = a.height,
                    i = a.width,
                    c = this._getMaskDimensions(),
                    l = c.height,
                    s = c.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return v.a.createElement(
                    _.a,
                    { style: be.container },
                    v.a.createElement(
                      A,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: r ? this._handlePinchMove : void 0,
                        onWheel: r ? this._handleWheel : void 0,
                        style: be.root,
                      },
                      u
                        ? v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(C.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: i, height: o },
                              style: be.image,
                            }),
                            v.a.createElement(j, { circle: t, height: l, width: s }),
                          )
                        : null,
                    ),
                    u ? this._renderControls() : null,
                  )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this._updateNativeStyles(), this._adjustToInBounds()
                },
              },
              {
                key: 'getCropData',
                value: function () {
                  var e = this._getImageDimensions().width,
                    t = this.props.image.width / e,
                    n = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(t * n.top),
                    left: Math.round(t * n.left),
                    width: Math.round(t * n.width),
                    height: Math.round(t * n.height),
                  }
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(he, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var be = w.a.create(function (e) {
        return {
          container: { flexGrow: 1, flexShrink: 1 },
          controlsContainer: {
            backgroundColor: e.colors.navigationBackground,
            minHeight: e.spaces.space20,
            flexDirection: 'row',
            paddingVertical: e.spaces.space4,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
          },
          ratioContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          zoomContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 1,
            justifyContent: 'center',
            height: e.spaces.space40,
            paddingHorizontal: e.spaces.space20,
            maxWidth: 400,
          },
          root: {
            flexGrow: 1,
            flexShrink: 1,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'move',
          },
          image: { position: 'absolute' },
          icon: { color: e.colors.gray700 },
        }
      })
      t.a = he
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        i = n('Ud88'),
        c = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        l = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = l.fetchQueryDeduped,
        u = l.fetchQuery
      e.exports = function (e, t, n) {
        c()
        var l,
          m = i(),
          d = t.fetchKey,
          p = t.fetchPolicy,
          f = t.source,
          y = t.variables,
          h = t.networkCacheConfig,
          b = o(e, y, h)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && r(!1),
            (l = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: s(m, b.request.identifier, function () {
                return m === t.environment && null != f
                  ? m.executeWithSource({ operation: b, source: f })
                  : m.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var v = u(m, b)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && m === t.environment ? f.ifEmpty(v) : (t.environment, v),
            fetchKey: d,
            fetchPolicy: p,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(l)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        o = r.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          a(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        m = n('AuHH'),
        d = n.n(m),
        p = n('ERkP'),
        f = n.n(p),
        y = n('rHpw'),
        h = n('MWbm')
      function b(e) {
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
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var v = (function (e) {
          l()(n, e)
          var t = b(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.a.createElement(h.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        g = y.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        m = n('AuHH'),
        d = n.n(m),
        p = n('ERkP'),
        f = n.n(p),
        y = n('3XMw'),
        h = n.n(y),
        b = n('rHpw'),
        v = n('+/1j'),
        g = n('MWbm')
      function E(e) {
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
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var O = h.a.e5b0063d,
        C = 0,
        w = (function (e) {
          l()(n, e)
          var t = E(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(C)), (C += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = O({ title: n })
                  return f.a.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.a.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: b.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.a.createElement(g.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      t.a = w
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return d
        })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('3XMw'),
        i = n.n(o),
        c = n('mw9i'),
        l = n('FIs5'),
        s = n('rHpw'),
        u = i.a.c2117be6,
        m = i.a.c2c4dad3
      function d() {
        return a.a.createElement(c.a, { style: p.root }, a.a.createElement(l.a, { header: u, message: m }))
      }
      var p = s.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('yiKp')),
        a = n('ERkP'),
        o = n('Ud88'),
        i = n('K1lQ').commitMutation,
        c = a.useState,
        l = a.useEffect,
        s = a.useRef,
        u = a.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = o(),
          a = m(),
          d = s(n),
          p = s(e),
          f = s(new Set()),
          y = c(!1),
          h = y[0],
          b = y[1],
          v = u(
            function (t) {
              d.current === n && p.current === e && (f.current.delete(t), a.current && b(f.current.size > 0))
            },
            [n, a, e],
          )
        l(
          function () {
            ;(d.current === n && p.current === e) ||
              ((f.current = new Set()), a.current && b(!1), (d.current = n), (p.current = e))
          },
          [n, a, e],
        )
        var g = u(
          function (o) {
            var i = t(
              n,
              (0, r.default)(
                (0, r.default)({}, o),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    v(i), o.onCompleted && o.onCompleted(e, t)
                  },
                  onError: function (e) {
                    v(i), o.onError && o.onError(e)
                  },
                  onUnsubscribe: function () {
                    v(i), o.onUnsubscribe && o.onUnsubscribe()
                  },
                },
              ),
            )
            return f.current.add(i), a.current && b(!0), i
          },
          [v, t, n, a, e],
        )
        return [g, h]
      }
    },
    AfjF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('eb3s'),
        i = n('3XMw'),
        c = n.n(i),
        l = c.a.d45ae5e0,
        s = c.a.c1631260,
        u = c.a.d3190bdd,
        m = c.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return a.a.createElement(o.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: l,
            onCancel: t,
            onConfirm: n,
            text: s,
          })
        }
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n.n(c),
        s = n('sNn6'),
        u = n('rHpw'),
        m = n('MWbm')
      function d(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = u.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: p(
            p({}, u.a.absoluteFillObject),
            {},
            {
              borderRightStyle: 'solid',
              borderRightWidth: e.borderWidths.medium,
              borderRightColor: e.colors.primary,
              zIndex: 1,
            },
          ),
        }
      })
      t.a = function (e) {
        var t = e.children,
          n = i()(e, ['children'])
        return l.a.createElement(s.a, n, function (e) {
          return l.a.createElement(
            m.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(m.a, { pointerEvents: 'none', style: f.overlay }) : null,
          )
        })
      }
    },
    'DV/y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityInviteScreen', function () {
          return ne
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = (n('WNMA'), n('KqXw'), n('LW0h'), n('z84I'), n('1Iuc'), n('ERkP')),
        l = n.n(c),
        s = n('+Kfv'),
        u = n('eSoz'),
        m = n('rxPX'),
        d = n('0KEI'),
        p = function (e, t) {
          var n = t.match.params.communityId
          return n ? u.c.select(e, n) : void 0
        },
        f = Object(m.a)()
          .propsFromState(function () {
            return { community: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_INVITE_SCREEN',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'invite' }),
        y = n('jHSc'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('/yvb'),
        g = (n('2G9S'), n('KhuB')),
        E = n('li/m'),
        O = function (e, t) {
          return t.communityId && t.userId ? g.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        },
        C = Object(m.a)()
          .propsFromState(function () {
            return { inviteActionResult: O }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: E.a,
            }
          }),
        w = b.a.cd133485,
        _ = b.a.hb1e378e,
        S = b.a.bcd6bb0d,
        j = 'primaryFilled',
        P = { viewType: 'invite' }
      var k = C(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            r = e.inviteActionResult,
            a = e.inviteToCommunity,
            o = e.onInvite,
            i = e.onInviteActionResultChange,
            c = e.userId,
            s = e.viewerInvited,
            u = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return w
              switch (e.reason) {
                case 'UserIsMember':
                  return S
                case 'UserIsInvited':
                  return _
                default:
                  return w
              }
            })(r),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return j
              switch (e.reason) {
                case 'UserIsMember':
                  return j
                default:
                  return 'primaryOutlined'
              }
            })(r)
          l.a.useEffect(
            function () {
              r && i(c, r)
            },
            [r, c, i],
          )
          var d = 'UserCommunityInviteAction' === (null == r ? void 0 : r.__typename)
          return !d && !s
            ? null
            : l.a.createElement(
                v.a,
                {
                  accessibilityLabel: u,
                  behavioralEventContext: P,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      a(t, c)
                        .then(function () {
                          return o && o(c)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                u,
              )
        }),
        I = n('5FtR'),
        M = n('4e/K'),
        R = n('MWbm'),
        T = n('4zmP'),
        x = n('t62R'),
        L = n('FIs5'),
        A = n('rHpw'),
        D = n('GZwR')
      function F(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var B = b.a.b139b549,
        N = b.a.dfddd842,
        K = b.a.cf4898a0,
        z = b.a.a3b3939a,
        U = b.a.db4f0cc9,
        V = b.a.h252ede6,
        W = b.a.a5cd93f9,
        X = b.a.ba5a88e3,
        Y = b.a.i6568549,
        G = b.a.b772cd65,
        Q = b.a.b4f16d00,
        q = b.a.ja1387a7,
        Z = b.a.b92a21d8,
        J = b.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        te = [D.a.CommunityUsers]
      function ne(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          r = e.fetchCommunityIfNeeded,
          o = (t || {}).invites_result,
          c = e.match.params.communityId || '',
          u = l.a.useState(''),
          m = i()(u, 2),
          d = m[0],
          p = m[1],
          f = l.a.useState({}),
          h = i()(f, 2),
          b = h[0],
          g = h[1],
          E = l.a.useState({}),
          O = i()(E, 2),
          C = O[0],
          w = O[1]
        l.a.useEffect(
          function () {
            c && r(c).catch(n())
          },
          [c, n, r],
        )
        var _,
          S,
          j = l.a.useMemo(
            function () {
              return d.length > 0 || !t
                ? ee
                : 'CommunityInvites' === o.__typename
                ? o.users_to_invite_slice.items.map(D.g).filter(Boolean)
                : ee
            },
            [t, o, d.length],
          ),
          P = l.a.useCallback(
            function (e, t) {
              g(function (n) {
                return H(H({}, n), {}, a()({}, e, t))
              })
            },
            [g],
          ),
          A = l.a.useCallback(
            function (e) {
              w(function (t) {
                return H(H({}, t), {}, a()({}, e, !0))
              })
            },
            [w],
          ),
          F = c
            ? l.a.createElement(I.a, { to: '/i/communities/'.concat(c, '/members') })
            : l.a.createElement(I.a, { to: '/' }),
          ne = l.a.createElement(
            v.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            G,
          )
        return 'CommunityInvitesUnavailable' === (null == o ? void 0 : o.__typename)
          ? F
          : l.a.createElement(
              s.a,
              { viewType: 'community' },
              l.a.createElement(
                y.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ne, subtitle: N, title: B },
                ((_ = (null == o ? void 0 : o.remaining_invite_count) || 0),
                (S = _ > 999),
                'CommunityInvites' === (null == o ? void 0 : o.__typename) &&
                  !S &&
                  l.a.createElement(
                    R.a,
                    { style: re.callout },
                    l.a.createElement(T.a, { text: Y({ remaining_invite_count: _ }) }),
                  )),
                l.a.createElement(M.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: te,
                  getItemDisabledMessage: function (e) {
                    var t
                    if ('user' === e.type) {
                      var n = e.data,
                        r = n.id_str,
                        a = n.screen_name,
                        o = b[r]
                      if ('UserCommunityInviteActionUnavailable' === (null == o ? void 0 : o.__typename))
                        switch (o.reason) {
                          case 'UserIsInvited':
                            return z({ screen_name: a })
                          case 'UserIsMember':
                            return U({ screen_name: a })
                          case 'ViewerOutOfInvites':
                            return V
                          default:
                            return null !== (t = o.message) && void 0 !== t ? t : W({ screen_name: a })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var t = e.data.id_str,
                        n = b[t]
                      return !C[t] && 'UserCommunityInviteAction' !== (null == n ? void 0 : n.__typename)
                    }
                    return !0
                  },
                  injectedItems: j,
                  inputStyle: re.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: K,
                  renderEmptyState: function () {
                    return l.a.createElement(L.a, { header: Q, message: q })
                  },
                  renderHeader: function () {
                    return (
                      0 === d.length &&
                      l.a.createElement(
                        R.a,
                        { style: re.input },
                        l.a.createElement(x.b, { size: 'headline2', weight: 'heavy' }, X),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return l.a.createElement(L.a, { header: Z({ query: d }), message: J })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return l.a.createElement(k, {
                      communityId: c,
                      onInvite: A,
                      onInviteActionResultChange: P,
                      userId: t,
                      viewerInvited: C[t],
                    })
                  },
                  rounded: !0,
                  shouldAutoFocus: !0,
                  shouldFocusOnClear: !0,
                  source: D.d.CommunityInvites,
                  style: re.input,
                }),
              ),
            )
      }
      var re = A.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        ae = f(ne)
      t.default = ae
    },
    EeFI: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('ERkP'),
        h = n.n(y),
        b = n('3XMw'),
        v = n.n(b),
        g = n('MWbm'),
        E = n('Qwev'),
        O = n('21U8'),
        C = n('rHpw'),
        w = n('1auM'),
        _ = n('eYns')
      function S(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var j = v.a.gff1f69e,
        P = (function (e) {
          u()(n, e)
          var t = S(n)
          function n(e) {
            var r
            return i()(this, n), ((r = t.call(this, e)).state = { orientedImage: null }), r
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof w.a &&
                    Object(_.b)(n).then(function (t) {
                      return new w.a(t).withDimensionsAndOrientation().then(function (t) {
                        e.setState({ orientedImage: t })
                      })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.orientedImage
                    ? this._renderCropper()
                    : h.a.createElement(E.a, { accessibilityLabel: j, style: k.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    n = e.defaultAspectRatio,
                    r = e.defaultCropData,
                    a = e.media,
                    o = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    c = this.state.orientedImage,
                    l = a || {},
                    s = l.cropData,
                    u = l.originalMediaFile,
                    m = void 0 === u ? {} : u
                  return c
                    ? h.a.createElement(
                        g.a,
                        { style: k.cropper },
                        h.a.createElement(O.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (r && r.aspectRatio) || (s && s.aspectRatio) || n,
                          defaultCropData: r || s,
                          image: { src: c.url, width: m.width, height: m.height },
                          ref: t,
                          withAspectRatioOptions: o,
                          withZoomControl: i,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        k = C.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(P, a()({}, e, { cropperRef: t }))
      })
    },
    FS1z: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('ERkP')),
        v = n.n(b),
        g = n('rxPX'),
        E = n('0KEI'),
        O = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        C = function (e, t) {
          return t.module.selectItems(e)
        },
        w = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: O, items: C }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        _ = n('v//M'),
        S = n('sIe2'),
        j = n('3XMw'),
        P = n.n(j),
        k = n('TEoO')
      function I(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var M = P.a.i9028824,
        R = 'sliceTimeline',
        T = function (e) {
          return e
        },
        x = { viewType: 'timeline' },
        L = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  c = t.renderer,
                  l = t.withoutHeadroom
                return !r || o < 1
                  ? null
                  : 1 === o
                  ? v.a.createElement(k.a, {
                      cacheKey: R,
                      footer: n,
                      identityFunction: T,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: l,
                    })
                  : v.a.createElement(S.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: T,
                      numColumns: o,
                      renderItem: c,
                    })
              }),
              h()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetch,
                  o = t.fetchIfNeeded
                ;(n ? a : o)().catch(r())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.module
                  e.module !== t && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.module,
                    r = e.retryMessage
                  return n
                    ? v.a.createElement(_.a, {
                        accessibilityLabel: M,
                        behavioralEventContext: x,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: r,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(L, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var A = w(L)
      t.a = A
    },
    FSMj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolsPeopleScreen', function () {
          return E
        })
      n('vrRf')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('XtoV'),
        i = n('rxPX'),
        c = Object(i.a)().withAnalytics({ page: 'communities', section: 'people' }),
        l = n('3XMw'),
        s = n.n(l),
        u = n('gDCe'),
        m = n('yoO3'),
        d = n('k/OQ'),
        p = n('mWs5'),
        f = n('MWbm'),
        y = n('krnS'),
        h = n('Ty5D'),
        b = s.a.dc6ce7b4,
        v = s.a.f8321d82,
        g = s.a.ga2aa43c,
        E = function (e) {
          var t = e.community,
            n = e.communityId,
            r = e.location,
            i = (null == r ? void 0 : r.pathname) && r.pathname.indexOf('members') > 0,
            c = i ? v : g,
            l = a.a.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: r.state },
                        label: v,
                        key: v,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: r.state },
                        label: g,
                        key: g,
                      },
                    ]
                  : []
                return a.a.createElement(d.a, { accessibilityLabel: c, links: e })
              },
              [n, c, r],
            )
          return a.a.createElement(
            m.a,
            null,
            a.a.createElement(
              p.a,
              { communityId: t.id_str, rightControl: i ? a.a.createElement(o.a, { community: t }) : void 0, title: b },
              a.a.createElement(
                f.a,
                null,
                l,
                a.a.createElement(
                  h.e,
                  null,
                  a.a.createElement(
                    h.c,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                    a.a.createElement(y.b, { communityId: t.id_str, mode: y.a.Members }),
                  ),
                  a.a.createElement(
                    h.c,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                    a.a.createElement(u.a, { community: t }),
                    a.a.createElement(y.b, { communityId: t.id_str, mode: y.a.Moderators }),
                  ),
                ),
              ),
            ),
          )
        }
      t.default = c(E)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return X
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return Y
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('yH/f'), n('WNMA'), n('KqXw'), n('ERkP')),
        l = n.n(c),
        s = n('v6aA'),
        u = n('+Kfv'),
        m = n('es0u'),
        d = (n('ZVkB'), n('ulNE'), n('jQ3i'), n('x4t0'), n('eSoz')),
        p = n('XOJV'),
        f = n('G6rE'),
        y = n('rxPX'),
        h = function (e, t) {
          var n = t.match.params.tweetId
          return n ? p.a.selectHydrated(e, n) : void 0
        },
        b = function (e, t) {
          var n = t.match.params
          return Object.entries(n).flat().includes('tweetId') ? X.HiddenTweet : X.RemovedMember
        },
        v = function (e, t) {
          if (b(0, t) === X.HiddenTweet) {
            var n,
              r = t.match.params.tweetId,
              a = r ? p.a.selectHydrated(e, r) : void 0,
              o = null == a || null === (n = a.community_relationship) || void 0 === n ? void 0 : n.community
            return o ? d.c.select(e, o) : void 0
          }
          var i = t.match.params.communityId
          return i ? d.c.select(e, i) : void 0
        },
        g = function (e, t) {
          if (b(0, t) === X.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? p.a.selectFetchStatus(e, n) : void 0
          }
          var r = t.match.params.communityId
          return r ? d.c.selectFetchStatus(e, r) : void 0
        },
        E = Object(y.a)()
          .propsFromState(function () {
            return { community: v, fetchStatus: g, loggedInUser: f.e.selectLoggedInUser, tweet: h, type: b }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: p.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        O = (n('ho0z'), n('PKbs')),
        C = n('egQk'),
        w = n('3XMw'),
        _ = n.n(w),
        S = n('/de5'),
        j = n('b5s6'),
        P = n('MWbm'),
        k = n('X00g'),
        I = n('t62R'),
        M = n('4zmP'),
        R = n('0yYu'),
        T = n('6vad'),
        x = n('rHpw'),
        L = _.a.j643a234,
        A = _.a.c730a21c,
        D = _.a.a5baa7d1,
        F = _.a.icc32e3d,
        H = k.a.getCommunityTheme('Default'),
        B = x.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: x.a.theme.colors.gray50,
              borderRadius: x.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: x.a.theme.spacesPx.space16,
              marginBottom: x.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: x.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        N = function (e) {
          var t,
            n = e.community,
            r = e.history,
            a = e.location,
            o = e.match,
            i = e.tweet,
            c = e.type,
            s = { history: r, location: a, match: o },
            u = null == i ? void 0 : i.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case X.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case X.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(c)) || void 0 === t
                ? void 0
                : t.name) || '',
            p = null == n ? void 0 : n.name,
            f = null == n ? void 0 : n.rules,
            y = (null == n ? void 0 : n.theme) || H,
            h = k.a.getCommunityUIColorName(y),
            b = Object(C.a)({ communityName: p })
          return y && null != f && f.length
            ? l.a.createElement(
                P.a,
                { style: B.tweetInfo },
                l.a.createElement(
                  P.a,
                  { style: B.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case X.HiddenTweet:
                        return l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            I.b,
                            { color: h, size: 'subtext1', style: B.communityTitle, weight: 'bold' },
                            p,
                          ),
                          l.a.createElement(
                            I.b,
                            { size: 'headline1', style: [B.titleText, B.hiddenTweetWarningText], weight: 'heavy' },
                            L,
                          ),
                          l.a.createElement(j.a, {
                            style: B.tweetContainer,
                            tweetId: null == i ? void 0 : i.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          l.a.createElement(M.a, { headline: A, text: d }),
                          l.a.createElement(I.b, { style: B.helpText }, D),
                        )
                      case X.RemovedMember:
                        return l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            I.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            F({ communityName: p }),
                          ),
                          l.a.createElement(
                            P.a,
                            { style: B.removedMemberReason },
                            l.a.createElement(I.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(c),
                ),
                l.a.createElement(R.a, null),
                l.a.createElement(T.b, { text: b }),
                l.a.createElement(O.b, {
                  badgeStyle: B.badges,
                  ruleContainerStyle: B.rules,
                  rules: f,
                  theme: y,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : l.a.createElement(S.b, s)
        },
        K = n('G1WX'),
        z = n('yoO3'),
        U = n('VS6U'),
        V = n('0KEI'),
        W = _.a.jf99d610,
        X = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function Y(e) {
        var t = l.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          r = e.fetchCommunity,
          o = e.fetchStatus,
          c = e.fetchTweet,
          d = e.loggedInUser,
          p = e.tweet,
          f = e.type,
          y = i()(e, [
            'analytics',
            'community',
            'fetchCommunity',
            'fetchStatus',
            'fetchTweet',
            'loggedInUser',
            'tweet',
            'type',
          ]),
          h = function (e) {
            var t, r
            switch (e) {
              case X.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == p ? void 0 : p.user.id_str)),
                  _handleRetry: C,
                  shouldRenderFeedback: Boolean(
                    null == p || null === (t = p.community_relationship) || void 0 === t
                      ? void 0
                      : t.moderation_state.rule,
                  ),
                }
              case X.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == n ? void 0 : n.viewerViolatedRule)),
                  _handleRetry: w,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == n || null === (r = n.viewer_relationship) || void 0 === r
                        ? void 0
                        : r.moderation_state.__typename),
                  ),
                }
              default:
                return {}
            }
          },
          b = e.match.params,
          v = b.communityId,
          g = b.tweetId,
          E = Object(V.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          O = Object(V.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          C = l.a.useEffect(
            function () {
              g && c(g).catch(E)
            },
            [E, c, g],
          ),
          w = l.a.useEffect(
            function () {
              v && r(v).catch(O)
            },
            [v, O, r],
          ),
          _ = l.a.createElement(S.b, y)
        return l.a.createElement(K.a, {
          fetchStatus: o,
          onRequestRetry: h(f)._handleRetry,
          render: function () {
            var n = h(f),
              r = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              o = n.isAuthorizedViewer,
              i = n.shouldRenderFeedback
            return o && t
              ? l.a.createElement(
                  u.a,
                  { viewType: 'community' },
                  i
                    ? l.a.createElement(
                        z.a,
                        { behavioralEventViewType: r },
                        l.a.createElement(U.a, {
                          backLocation: '/notifications',
                          history: y.history,
                          primaryContent: l.a.createElement(N, a()({}, e, { type: f })),
                          sidebarContent: l.a.createElement(m.a, null),
                          title: W,
                        }),
                      )
                    : _,
                )
              : _
          },
        })
      }
      var G = E(Y)
      t.default = G
    },
    GR8q: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        o,
        i,
        c = {
          fragment: {
            argumentDefinitions: (r = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'RulesQuery',
            selections: [
              {
                alias: 'community',
                args: (a = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'screenRules_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'RulesQuery',
            selections: [
              {
                alias: 'community',
                args: a,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (o = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      o,
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  i,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'EACaQ7O6I3NYJbrDRlU38w',
            metadata: {},
            name: 'RulesQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(c.hash = 'fb7e1508e8b30ad6d32d4a14bced22ba'), (t.default = c)
    },
    KK06: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'screenRules_community',
          selections: [
            (r = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [
                r,
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              ],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(a.hash = 'c0df28cb25c103d0a917071132ca7c84'), (t.default = a)
    },
    KQzH: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = (n('hBvt'), n('ERkP')),
        i = n.n(o),
        c = n('BUB3'),
        l = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return i.a.createElement(c.a, { exact: !0, path: e.link }, function (t) {
          var n = l.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, a()({ isActive: t }, e, { label: i.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        h = n.n(y),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        E = n('ERkP'),
        O = n.n(E),
        C = n('HPNB'),
        w = n('VAZu'),
        _ = n('wiP2'),
        S = n('Es6L'),
        j = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function P(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var I = j.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k(k({}, j.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        M = n('MWbm'),
        R = n('yw4N'),
        T = n('TnY3'),
        x = n('cHvH'),
        L = n('3xLC')
      function A(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var D = (function (e) {
        d()(n, e)
        var t = A(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(u()(e), '_renderChildren', function () {
              var t = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? O.a.createElement(
                    M.a,
                    { style: I.fill },
                    O.a.createElement(R.a, { style: I.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
                  )
                : t
            }),
            e
          )
        }
        return (
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e = this
                return O.a.createElement(x.a, null, function (t) {
                  var n = t.windowWidth
                  return C.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n =
                    (e.leftControl,
                    e.screenType,
                    e.showSubtitleOnRoot,
                    e.showSubtitleOnWideDetail,
                    e.withBottomBorder,
                    e.withDetailOpen,
                    a()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  Object(S.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : O.a.createElement(_.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this.context.rootDetailPerColumnScroll
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                  this._renderChildren(),
                )
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.isTwoColumnLayout,
                  n = this.props,
                  r = n.SideNavButton,
                  a = n.TabBar,
                  o = n.TeamsSwitcher,
                  i = n.backLocation,
                  c = n.documentTitle,
                  l = n.headerless,
                  s = n.history,
                  u = n.leftControl,
                  m = n.middleControl,
                  d = n.onBackClick,
                  p = n.rightControl,
                  f = n.screenType,
                  y = n.searchBoxOptions,
                  h = n.secondaryBar,
                  b = n.showSubtitleOnRoot,
                  v = n.showSubtitleOnWideDetail,
                  E = n.subtitle,
                  C = n.title,
                  S = n.titleIconCell,
                  j = n.titleIconCellSize,
                  P = n.withBottomBorder,
                  k = n.withDetailOpen,
                  R = n.withSearchBox,
                  T = n.withTweetButton,
                  x = 'root' === f,
                  L = 'secondaryRoot' === f,
                  A = 'primaryDetail' === f,
                  D = (A && v) || (x && b),
                  F = x || (A && t),
                  H = x ? g.c : A ? g.a : void 0,
                  B = O.a.createElement(
                    M.a,
                    { style: I.appBarContainer },
                    O.a.createElement(w.a, {
                      backLocation: i,
                      fixed: !1,
                      hideBackButton: F,
                      history: s,
                      leftControl: u,
                      middleControl: m,
                      onBackClick: d,
                      rightControl: p,
                      secondaryBar: h,
                      subtitle: D ? E : void 0,
                      title: C,
                      titleDomId: H,
                      titleIconCell: S,
                      titleIconCellSize: j,
                      withBottomBorder: P,
                    }),
                  ),
                  N =
                    x || (L && k)
                      ? null
                      : O.a.createElement(_.a.Configure, {
                          SideNavButton: r,
                          TabBar: a,
                          TeamsSwitcher: o,
                          backLocation: i,
                          documentTitle: c,
                          headerless: l,
                          middleControl: m,
                          onBackClick: d,
                          rightControl: p,
                          searchBoxOptions: y,
                          subtitle: E,
                          title: C,
                          withSearchBox: R,
                          withTweetButton: T,
                        })
                return O.a.createElement(O.a.Fragment, null, N, B)
              },
            },
          ]),
          n
        )
      })(O.a.Component)
      v()(D, 'contextType', L.a),
        v()(D, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(T.a)(D)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return S
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('97Jx'),
        i = n.n(o),
        c = (n('WNMA'), n('KqXw'), n('ho0z'), n('uFXj'), n('ERkP')),
        l = n.n(c),
        s = n('v6aA'),
        u = n('es0u'),
        m = n('PKbs'),
        d = n('egQk'),
        p = n('1Idg'),
        f = n('eSoz'),
        y = n('rxPX'),
        h = n('0KEI'),
        b = Object(y.a)()
          .propsFromState(function () {
            return { community: p.a, fetchStatus: p.b, isCommunityMember: p.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: f.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        v = n('MDbM'),
        g = n('/de5'),
        E = n('5FtR'),
        O = n('VS6U'),
        C = n('rHpw')
      function w(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function (e) {
          var t = l.a.useContext(s.a).featureSwitches,
            n = e.community,
            r = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            c = e.history,
            p = e.isCommunityMember,
            f = e.location,
            y = e.match,
            h = y.params.communityId,
            b = t.isTrue('c9s_participation_enabled')
          l.a.useEffect(function () {
            h && !n && o !== v.a.LOADED && a(h).catch(r())
          })
          var C = l.a.useMemo(
            function () {
              return { selectedCommunityId: h || '', defaultText: '' }
            },
            [h],
          )
          if (n && h) {
            var w = n.name,
              S = n.rules,
              j = n.theme,
              k = {
                composeOptions: C,
                history: c,
                sidebarContent: l.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: b && p,
              }
            if (S.length > 0) {
              var I = l.a.createElement(m.b, {
                badgeStyle: P.badgeStyle,
                headerContainerStyle: P.containerStyle,
                headerExplanationStyle: P.explanationStyle,
                ruleContainerStyle: P.ruleContainerStyle,
                rules: S,
                theme: j,
                withBottomMargin: !0,
              })
              return l.a.createElement(
                O.a,
                i()({}, k, {
                  backLocation: '/i/communities/'.concat(h),
                  documentTitle: Object(d.a)({ communityName: w }),
                  primaryContent: I,
                }),
              )
            }
            var M = _(_({}, k), {}, { title: null }),
              R = l.a.createElement(g.b, { history: c, location: f, match: y })
            return l.a.createElement(O.a, i()({}, M, { primaryContent: R }))
          }
          return o === v.a.LOADED ? l.a.createElement(E.a, { to: '/' }) : null
        },
        j = b(S),
        P =
          ((t.default = j),
          C.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                borderBottomColor: e.colors.gray50,
                borderBottomStyle: 'solid',
                borderBottomWidth: e.borderWidths.small,
              },
              ruleContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
              explanationStyle: { color: e.colors.text },
            }
          }))
    },
    OUEC: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ezF+'),
        i =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(196).then(n.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: n('XBtf').a.Critical,
          }),
        c = o.e(i),
        l = n('QIgh'),
        s = n('8UdT')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = m(m({}, l.b), {}, a()({}, s.b.Community, c))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(o),
        c = n('v6aA'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('Nh1N'),
        m = n('MWbm'),
        d = n('Ig1G'),
        p = n('4zmP'),
        f = n('p+r5'),
        y = n('rHpw'),
        h = s.a.c66769a3,
        b = s.a.ef02695a,
        v = s.a.ef02695a,
        g = s.a.c824202f,
        E = s.a.d32cf5e6,
        O = s.a.f8fa00c7,
        C = s.a.fc2a5c92,
        w = function (e) {
          var t = i.a.useContext(c.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            r = t.getNumberValue('c9s_max_rule_description_length', 160),
            o = e.description,
            l = e.errorText,
            s = e.name,
            y = e.onChange,
            w = i.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 3, n)
              },
              [n],
            ),
            S = i.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 0, r)
              },
              [r],
            ),
            j = i.a.useState(s),
            P = a()(j, 2),
            k = P[0],
            I = P[1],
            M = i.a.useState(w(s)),
            R = a()(M, 2),
            T = R[0],
            x = R[1],
            L = i.a.useState(void 0),
            A = a()(L, 2),
            D = A[0],
            F = A[1],
            H = i.a.useState(o),
            B = a()(H, 2),
            N = B[0],
            K = B[1],
            z = i.a.useState(S(o)),
            U = a()(z, 2),
            V = U[0],
            W = U[1],
            X = i.a.useState(void 0),
            Y = a()(X, 2),
            G = Y[0],
            Q = Y[1],
            q = i.a.useState('' !== s),
            Z = a()(q, 2),
            J = Z[0],
            $ = Z[1],
            ee = i.a.useCallback(
              function (e) {
                var t = !1,
                  r = e.target.value
                w(r) && ((t = !0), F(v({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  x(t),
                  I(r),
                  y({ description: N, name: r, valid: !t && !V })
              },
              [n, N, y, V, w],
            ),
            te = i.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                S(n) && ((t = !0), Q(O({ maxCharacterCount: r }))),
                  W(t),
                  K(n),
                  y({ name: k, description: n, valid: !t && !T })
              },
              [r, k, y, T, S],
            ),
            ne = T && D ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: n }),
            re = V ? void 0 : E({ maxCharacterCount: r }),
            ae = l
              ? i.a.createElement(
                  m.a,
                  { style: _.error },
                  i.a.createElement(p.a, { Icon: u.a, headline: C, text: l, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            i.a.Fragment,
            null,
            ae,
            i.a.createElement(f.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: D,
              helperText: ne,
              invalid: T && J,
              label: h,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: k,
            }),
            i.a.createElement(f.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: G,
              helperText: re,
              invalid: V,
              label: g,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: r,
              value: N,
            }),
          )
        },
        _ = y.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        o = {
          fragment: {
            argumentDefinitions: (r = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (a = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'screen_EditMembershipType_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: a,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_approval_policy',
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityRestrictedMembershipSettings',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Ait9u_LZpvdybQ5u8YzViw',
            metadata: {},
            name: 'EditMembershipTypeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = o)
    },
    Phky: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, a.default)(e), r = 0; r < n.length; r++) {
            var o = n[r].screenName
            t.push(o)
          }
          return t
        })
      var a = r(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        i = n('+Kfv'),
        c = n('xZGM'),
        l = n('rxPX'),
        s = function (e, t) {
          return Object(c.z)(e, c.i)
        },
        u = Object(l.a)()
          .propsFromState(function () {
            return { shouldShowEducation: s }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(c.w)(c.i)
              },
            }
          }),
        m = n('3XMw'),
        d = n.n(m),
        p = n('MWbm'),
        f = n('X00g'),
        y = n('feu+'),
        h = n('h0NW'),
        b = n('rHpw'),
        v = n('r9x5'),
        g = n('cOhU'),
        E = n('uCrx'),
        O = d.a.b60e4f77,
        C = d.a.f0fc827d,
        w = d.a.c8e93b51,
        _ = d.a.fc5c6913,
        S = d.a.ad211086,
        j = d.a.gf803ba1,
        P = d.a.e92fe01b,
        k = d.a.h3bb8068,
        I = d.a.a709f8f8
      var M = b.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingLeft: 0, paddingRight: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
          }
        }),
        R = u(function (e) {
          var t = e.addEducationFlag,
            n = e.forSingleCommunity,
            r = e.shouldShowEducation,
            c = a.a.useContext(o.a).featureSwitches
          if (!r || !1 === (null == n ? void 0 : n.canJoinCommunity)) return null
          var l = c.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
            s = [M.decorationContainer, l && { color: f.a.getCommunityUIColor(l) }],
            u = a.a.createElement(v.a, { style: s }),
            m = a.a.createElement(g.a, { style: s }),
            d = a.a.createElement(E.a, { style: s }),
            b = function () {
              t()
            }
          return a.a.createElement(
            i.a,
            { viewType: 'welcome_education' },
            a.a.createElement(
              y.a,
              {
                actionLabel: O,
                graphicDisplayMode: 'none',
                headline: C,
                onAction: b,
                onClose: b,
                subtext: w,
                withCloseButton: !n,
              },
              a.a.createElement(
                p.a,
                { style: M.infoItemsContainer },
                a.a.createElement(h.a, {
                  containerStyle: M.itemContainer,
                  items: [
                    { label: _, description: S, decoration: u },
                    { label: j, description: P, decoration: m },
                    { label: k, description: I, decoration: d },
                  ],
                }),
              ),
            ),
          )
        })
      t.a = R
    },
    R5kW: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return h
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('oEOe')),
        i = n('kGix'),
        c = n('Ssj5')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, t) {
          return e[u][t]
        },
        p = function (e, t) {
          var n
          return null !== (n = e[u].fetchStatus[t]) && void 0 !== n ? n : i.a.NONE
        },
        f = Object.freeze({ fetchStatus: {} })
      function y(e) {
        return e.meta.communityId
      }
      var h = function (e) {
        return function (t, n, r) {
          var a = r.api
          return o.b(t, { params: { communityId: e }, request: a.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      c.a.register(
        a()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return s(s({}, e), {}, { fetchStatus: s(s({}, e.fetchStatus), {}, a()({}, y(t), i.a.LOADING)) })
            case m.FAILURE:
              return s(
                s({}, e),
                {},
                { fetchStatus: s(s({}, e.fetchStatus), {}, a()({}, y(t), i.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return s(
                  s({}, e),
                  {},
                  ((n = {}),
                  a()(n, y(t), t.payload),
                  a()(n, 'fetchStatus', s(s({}, e.fetchStatus), {}, a()({}, y(t), i.a.LOADED))),
                  a()(n, 'error', null),
                  n),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    ROT1: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('v6aA'),
        l = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = n('nmVb'),
        p = n.n(d),
        f = n('Phky'),
        y = n.n(f),
        h = u.a.h3e55b40,
        b = u.a.dd71d9c9,
        v = u.a.cf65e56a,
        g = u.a.d936eeca,
        E = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            r = e.communityName,
            o = e.onChange,
            s = i.a.useContext(c.a).featureSwitches,
            u = i.a.useState(!1),
            d = a()(u, 2),
            f = d[0],
            E = d[1],
            O = i.a.useState(void 0),
            C = a()(O, 2),
            w = C[0],
            _ = C[1],
            S = s.getNumberValue('c9s_max_community_name_length', 30),
            j = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.g)(t, 3, S)
                  ? (p()(t).length > 0 || y()(t).length > 0) && ((n = !0), _(g))
                  : ((n = !0), _(v({ minCharacterCount: 3, maxCharacterCount: S }))),
                  E(n),
                  o(t, n)
              },
              [S, o, _],
            ),
            P = b({ minCharacterCount: 3, maxCharacterCount: S })
          return i.a.createElement(l.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: w,
            helperText: P,
            invalid: f,
            label: h,
            name: 'typedCommunityName',
            onChange: j,
            spellCheck: 'false',
            validLength: S,
            value: r,
          })
        }
    },
    Rqga: function (e, t, n) {
      var r = n('ax0f'),
        a = Math.log,
        o = Math.LN2
      r(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return a(e) / o
          },
        },
      )
    },
    'S+H3': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var m = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
            }),
          ),
        )
      }
      ;(m.metadata = { width: 24, height: 24 }), (t.a = m)
    },
    SNyS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var m = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
            }),
            i.a.createElement('path', {
              d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
            }),
          ),
        )
      }
      ;(m.metadata = { width: 24, height: 24 }), (t.a = m)
    },
    SyZD: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesRouter', function () {
          return K
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = (n('WNMA'), n('KqXw'), n('2G9S'), n('ERkP')),
        i = n.n(o),
        c = n('v6aA'),
        l = n('Ig1G'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'rules' }),
        m = n('3XMw'),
        d = n.n(m),
        p = n('5FtR'),
        f = n('ddV6'),
        y = n.n(f),
        h = (n('z84I'), n('/yvb')),
        b = n('eSoz'),
        v = n('0KEI'),
        g = Object(s.a)()
          .propsFromActions(function () {
            return {
              reorderRules: b.c.reorderRules,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        E = n('yoO3'),
        O = n('rHpw'),
        C = O.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        w = n('mWs5'),
        _ = n('PKbs'),
        S = d.a.b772cd65,
        j = d.a.gfca5254
      var P = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.explanation,
            a = e.history,
            o = e.reorderRules,
            c = t.id_str,
            l = t.rules,
            s = t.theme,
            u = i.a.useState(l),
            m = y()(u, 2),
            d = m[0],
            p = m[1],
            f = i.a.useCallback(
              function (e) {
                p(e)
              },
              [p],
            ),
            b = i.a.useCallback(
              function () {
                var e = n({}),
                  t = d.map(function (e) {
                    return e.rest_id
                  })
                o(c, { ruleIds: t })
                  .then(function () {
                    a.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/rules') })
                  })
                  .catch(e)
              },
              [c, d, o, a, n],
            ),
            v = i.a.createElement(h.a, { onPress: b, size: 'small', type: 'brandFilled' }, S)
          return i.a.createElement(
            E.a,
            null,
            i.a.createElement(
              w.a,
              { communityId: c, rightControl: v, screenType: 'primaryDetail', title: j },
              i.a.createElement(_.b, {
                badgeStyle: C.badgeStyle,
                displayType: _.a.Reorder,
                explanation: r,
                headerContainerStyle: C.headerContainerStyle,
                onReorder: f,
                ruleContainerStyle: C.ruleContainerStyle,
                rules: d,
                theme: s,
              }),
            ),
          )
        }),
        k = n('MWbm'),
        I = n('mjJ+'),
        M = n('iY63'),
        R = n('ACHU'),
        T = n('Ty5D'),
        x = d.a.gfca5254,
        L = d.a.d94edeb4,
        A = d.a.j560c8ea,
        D = d.a.ab8089ea,
        F = d.a.h63a5c3b,
        H = i.a.createElement(M.a, null),
        B = i.a.createElement(R.a, null),
        N = { viewType: 'add' },
        K = function (e) {
          var t = i.a.useContext(c.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            r = t.isTrue('c9s_rule_editing_enabled'),
            o = t.isTrue('c9s_rule_reordering_enabled'),
            s = e.community,
            u = e.history,
            m = e.match,
            d = s.id_str,
            f = s.role,
            y = s.rules,
            b = s.theme,
            v = m.url,
            g = f === l.a.Admin,
            E =
              n && g
                ? i.a.createElement(h.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: N,
                    icon: H,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            O = y.length > 1,
            S =
              o && g && O
                ? i.a.createElement(h.a, {
                    accessibilityLabel: F,
                    icon: B,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: D, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return i.a.createElement(I.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            j = i.a.createElement(k.a, { style: z.rightControlStyle }, E, S),
            M = { displayType: _.a.Default, getPivotLink: void 0 }
          return (
            g &&
              r &&
              ((M.displayType = _.a.Pivot),
              (M.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            i.a.createElement(
              T.e,
              null,
              i.a.createElement(
                T.c,
                { exact: !0, path: ''.concat(v, '/') },
                i.a.createElement(
                  w.a,
                  { communityId: d, rightControl: j, screenType: 'primaryDetail', title: x },
                  i.a.createElement(
                    _.b,
                    a()(
                      {
                        badgeStyle: C.badgeStyle,
                        explanation: L,
                        headerContainerStyle: C.headerContainerStyle,
                        ruleContainerStyle: C.ruleContainerStyle,
                        rules: y,
                        theme: b,
                      },
                      M,
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                T.c,
                { exact: !0, path: ''.concat(v, '/reorder') },
                i.a.createElement(P, { community: s, explanation: L, history: u }),
              ),
              i.a.createElement(T.c, null, i.a.createElement(p.a, { to: ''.concat(v, '/') })),
            )
          )
        },
        z = O.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(K)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('5UID'),
        l = n('3GUV'),
        s = n('iBK2'),
        u = i.a.createElement(l.a, null),
        m = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = i.a.createElement(s.b, n)
          return t ? i.a.createElement(c.a, { title: t }, r) : r
        }
      ;(m.defaultProps = { footer: u }), (t.a = m)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityTimelineType', function () {
          return Fr
        }),
        n.d(t, 'CommunityScreen', function () {
          return Br
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r,
        a,
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        h = n.n(y),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('yH/f'), n('2G9S'), n('WNMA'), n('KqXw'), n('ho0z'), n('ERkP')),
        E = n.n(g),
        O = (n('jQ/y'), n('1Idg')),
        C = n('WpDa'),
        w = n('ZNT5'),
        _ = n('hqKg'),
        S = n('rxPX'),
        j = function (e, t) {
          return t.communityId
        },
        P = function () {
          return Object(_.createSelector)(j, function (e) {
            return (function (e) {
              return Object(w.a)({
                timelineId: 'communityAbout-'.concat(e),
                getEndpoint: function (e) {
                  return e.Communities.fetchAboutTimeline
                },
                getEndpointParams: function (t) {
                  return { communityId: e }
                },
                context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                perfKey: 'communityAbout',
                formatResponse: C.a,
              })
            })(e)
          })
        },
        k = Object(S.a)()
          .propsFromState(function () {
            return { community: O.a, creator: O.g, aboutModule: P() }
          })
          .withAnalytics({ page: 'community', section: 'about' }),
        I = n('Ig1G'),
        M = n('yoO3'),
        R = n('fTQJ'),
        T = n('n0Rl'),
        x = n('v//M'),
        L = (n('enFi'), n('z84I'), n('PKbs')),
        A = n('3XMw'),
        D = n.n(A),
        F = n('6vad'),
        H = n('rC8y'),
        B = n('0yYu'),
        N = n('rHpw'),
        K = n('jAXQ'),
        z = n.n(K),
        U = void 0 !== r ? r : (r = n('KK06')),
        V = D.a.gfca5254,
        W = D.a.ffd9cfe6,
        X = N.a.create(function (e) {
          return {
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
          }
        }),
        Y = function (e) {
          var t = e.community,
            n = e.theme,
            r = z()(U, t),
            a = r.rules,
            o = E.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : E.a.createElement(
                E.a.Fragment,
                null,
                E.a.createElement(F.b, { text: V }),
                E.a.createElement(L.b, {
                  badgeStyle: X.badgeStyle,
                  headerContainerStyle: [X.containerStyle, X.headingContainerStyle],
                  headerExplanationStyle: X.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: X.ruleContainerStyle,
                  rules: o,
                  theme: n,
                }),
                a.length > 5
                  ? E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(H.a, { link: '/i/communities/'.concat(r.rest_id, '/rules'), text: W }),
                      ' ',
                      E.a.createElement(B.a, null),
                    )
                  : null,
              )
        },
        G = void 0 !== a ? a : (a = n('GR8q')),
        Q = Object(T.b)(G, { errorConfig: { context: 'RULES' } }),
        q = function (e) {
          return E.a.createElement(Q, {
            render: function (t) {
              var n = t.data,
                r = (t.error, t.fetchStatus),
                a = t.retry
              return null != n && n.community
                ? E.a.createElement(x.a, {
                    fetchStatus: r,
                    onRequestRetry: a,
                    render: function () {
                      return E.a.createElement(Y, { community: n.community, theme: e.theme })
                    },
                  })
                : null
            },
            variables: { communityId: e.communityId },
          })
        },
        Z = n('t62R'),
        J = n('csss'),
        $ = n('h0NW'),
        ee = n('jV+4'),
        te = n('v6aA'),
        ne = n('cOhU'),
        re = n('DlMI'),
        ae = n('Lxak')
      function oe(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ie = D.a.i9028824,
        ce = D.a.cc683fb9,
        le = D.a.af7c11a9,
        se = D.a.db1b9462,
        ue = D.a.ea49402d
      function me(e) {
        var t = e.date,
          n = e.userName
        return E.a.createElement(D.a.I18NFormatMessage, { $i18n: 'a346641a', date: t }, n)
      }
      var de = (function (e) {
        d()(n, e)
        var t = oe(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(u()(e), '_getItems', function () {
              var t = function (e) {
                  return E.a.createElement(Z.b, null, e)
                },
                n = e._getCreationAttribution(),
                r = [
                  { decoration: fe, label: t(se) },
                  { decoration: ye, label: t(ue) },
                ]
              return n && r.push({ decoration: he, label: n }), r
            }),
            v()(u()(e), '_renderInfoSection', function () {
              var t = e.props.community
              if (t) {
                var n = t.description,
                  r = t.role
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(F.b, { text: le }),
                  Object(I.f)(r) && n ? E.a.createElement(J.a, { label: n }) : null,
                  E.a.createElement($.a, { containerStyle: pe.containerStyle, items: e._getItems() }),
                  E.a.createElement(B.a, null),
                )
              }
              return null
            }),
            v()(u()(e), '_renderRules', function () {
              var t = e.props,
                n = t.community,
                r = t.communityId
              if (n) {
                var a = n.theme
                return E.a.createElement(q, { communityId: r, theme: a })
              }
            }),
            v()(u()(e), '_getCreationAttribution', function () {
              var t = e.props,
                n = t.community,
                r = t.creator
              if (!r) return null
              var a = null == n ? void 0 : n.created_at,
                o = null == r ? void 0 : r.screen_name,
                i = r.verified
              if (a && o) {
                var c = new Date(a).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' }),
                  l = E.a.createElement(ee.a, { isVerified: i, screenName: o, withLink: !0 })
                return E.a.createElement(Z.b, { color: 'gray700' }, E.a.createElement(me, { date: c, userName: l }))
              }
            }),
            e
          )
        }
        return (
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.aboutModule
                return E.a.createElement(
                  M.a,
                  { behavioralEventViewType: 'about' },
                  this._renderInfoSection(),
                  this._renderRules(),
                  E.a.createElement(R.a, { loadingAccessibilityLabel: ie, module: e, title: ce }),
                )
              },
            },
          ]),
          n
        )
      })(E.a.Component)
      v()(de, 'contextType', te.a)
      var pe = N.a.create(function (e) {
          return {
            text: { marginVertical: e.spaces.space12 },
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            icon: {
              marginLeft: '6px',
              marginRight: e.spaces.space20,
              color: e.colors.gray700,
              height: e.spaces.space24,
              width: e.spaces.space24,
            },
          }
        }),
        fe = E.a.createElement(ne.a, { style: pe.icon }),
        ye = E.a.createElement(re.a, { style: pe.icon }),
        he = E.a.createElement(ae.a, { style: pe.icon }),
        be = k(de),
        ve = n('+Kfv'),
        ge = n('es0u'),
        Ee = n('0KEI'),
        Oe = n('R5kW'),
        Ce = function (e, t) {
          var n,
            r = Object(Oe.b)(e, t.communityId)
          return null !== (n = null == r ? void 0 : r.tweet_case_count) && void 0 !== n ? n : 0
        },
        we = function (e, t) {
          return Object(Oe.c)(e, t.communityId)
        },
        _e = Object(S.a)()
          .propsFromState(function () {
            return { count: Ce, fetchStatus: we }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ee.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: Oe.a,
            }
          }),
        Se = n('kGix'),
        je = n('TnY3'),
        Pe = n('MWbm'),
        ke = n('mjJ+'),
        Ie = n('/yvb'),
        Me = n('Znyr'),
        Re = n('zIWA'),
        Te = n('SNyS'),
        xe = n('Lsrn'),
        Le = n('k/Ka')
      function Ae(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ae(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Fe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Le.a)(
          'svg',
          De(
            De({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [xe.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          E.a.createElement(
            'g',
            null,
            E.a.createElement('path', {
              d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
            }),
          ),
        )
      }
      Fe.metadata = { width: 24, height: 24 }
      var He = Fe,
        Be = n('ACHU'),
        Ne = D.a.h6beb5fa,
        Ke = D.a.e3f04700,
        ze = D.a.e2429f56,
        Ue = D.a.df15d5b7,
        Ve = D.a.e48fbb01,
        We = D.a.c8c6c4e9,
        Xe = D.a.h63a5c3b,
        Ye = D.a.dce5e1b3,
        Ge = D.a.c5d8c93d,
        Qe = { viewType: 'app_bar_button' }
      var qe = N.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        Ze = Object(je.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            r = e.count,
            a = void 0 === r ? 0 : r,
            o = (e.history, e.userRole),
            i = E.a.useContext(te.a).featureSwitches,
            c = i.isTrue('c9s_settings_enabled'),
            l = i.isTrue('c9s_report_community_enabled'),
            s = i.isTrue('c9s_moderation_enabled') && t,
            u = c && t,
            m = l && !t,
            d = E.a.useCallback(
              function (e) {
                var t = []
                return (
                  s &&
                    t.push({
                      text: ze,
                      subText: Ue({ count: a }),
                      Icon: Re.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  m &&
                    t.push({
                      text: Ve,
                      Icon: Re.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: We, Icon: Te.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  E.a.createElement(ke.a, { items: t, onCloseRequested: e })
                )
              },
              [n, a, s, m],
            ),
            p = t ? He : Be.a,
            f = t ? (o === I.a.Admin ? Ye : Ge) : Xe
          return E.a.createElement(
            Pe.a,
            { style: qe.root },
            E.a.createElement(Ie.a, {
              accessibilityLabel: f,
              behavioralEventContext: Qe,
              icon: E.a.createElement(p, null),
              link: u ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: u ? void 0 : d,
              size: 'xLarge',
              type: 'primaryText',
            }),
            s && a > 0
              ? E.a.createElement(Me.a, {
                  count: a,
                  style: qe.menuControlBadge,
                  truncatedCountFormatter: Ne,
                  unreadCountLabel: Ke,
                  withBorder: !1,
                })
              : null,
          )
        })
      var Je = _e(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            r = e.count,
            a = e.createLocalApiErrorHandler,
            o = e.fetchCommunityModerationData,
            i = e.fetchStatus,
            c = e.userRole
          return (
            E.a.useEffect(
              function () {
                i === Se.a.NONE && t && o(n).catch(a())
              },
              [a, o, i, n, t],
            ),
            E.a.createElement(Ze, { canModerate: t, communityId: n, count: r, userRole: c })
          )
        }),
        $e = (n('7xRU'), n('tVqn'), n('uFXj'), n('ddV6')),
        et = n.n($e),
        tt = n('CGyZ'),
        nt = n('feu+'),
        rt = D.a.fad95333,
        at = function (e) {
          var t = e.offendingRule
          return E.a.createElement(
            Pe.a,
            null,
            t
              ? E.a.createElement(
                  Pe.a,
                  { style: ot.offendingRule },
                  (function (e) {
                    return E.a.createElement(
                      D.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      E.a.createElement(Z.b, { weight: 'bold' }, D.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            E.a.createElement(Z.b, null, rt),
          )
        },
        ot = N.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        it = D.a.hafa07f2,
        ct = D.a.fa94c9da,
        lt = D.a.c15bee31,
        st = D.a.i859676b,
        ut = E.a.createElement(
          D.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          E.a.createElement(Z.b, { link: '/settings/audience_and_tagging' }, D.a.e77dfaf0),
        ),
        mt = D.a.fc2a5c92,
        dt = D.a.bf7bdb60,
        pt = D.a.h27d695f,
        ft = D.a.b02360f5,
        yt = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        ht = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        bt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
        })
      var vt = { follow: D.a.b171d7c4, following: D.a.aa7ae3f6, unfollow: D.a.bb1d57b6 },
        gt = D.a.j24c37b2,
        Et = function (e) {
          var t = E.a.useState(void 0),
            n = et()(t, 2),
            r = n[0],
            a = n[1],
            o = e.community,
            i = e.createLocalApiErrorHandler,
            c = e.history,
            l = e.isProtectedUser,
            s = e.join,
            u = e.leave,
            m = o.actions,
            d = m.join_action_result,
            p = m.leave_action_result,
            f = o.id_str,
            y = o.name,
            h = o.role,
            b = Object(I.f)(h),
            v = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !b } },
            g = function () {
              a(void 0)
            }
          return E.a.createElement(
            Pe.a,
            { style: Ot.button },
            E.a.createElement(tt.a, {
              behavioralEventContext: v,
              buttonText: vt,
              isFollowing: b,
              name: y,
              onFollow: function () {
                var e = o.rules,
                  t = o.viewerViolatedRule,
                  n = (function (e, t, n) {
                    var r = e.__typename,
                      a = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      i = function (e) {
                        return { canAction: !1, message: e }
                      },
                      c = i({ headline: mt, text: dt })
                    switch (r) {
                      case yt.joinAvailable:
                        return o()
                      case yt.joinUnavailable:
                        switch (a) {
                          case bt.ViewerIsRemoved:
                            return i({
                              headline: lt,
                              text: E.a.createElement(at, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case bt.ViewerNotInvited:
                            return i({ headline: it, text: ct })
                          case bt.ViewerIsProtected:
                            return t ? i({ headline: st, text: ut }) : o()
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(d, l, t),
                  r = n.canAction,
                  u = n.message
                !r && u && a(u),
                  r &&
                    (e && e.length > 0
                      ? c.push({ pathname: '/i/communities/'.concat(f, '/join'), state: { community: o } })
                      : s(f).catch(i({})))
              },
              onUnfollow: function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      r = e.reason,
                      a = function (e) {
                        return { canAction: !1, message: e }
                      },
                      o = a({ headline: mt, text: dt })
                    switch (n) {
                      case yt.leaveAvailable:
                        return { canAction: !0, message: t }
                      case yt.leaveUnavailable:
                        switch (r) {
                          case ht.ViewerIsSoleAdmin:
                            return a({ headline: pt, text: ft })
                          default:
                            return o
                        }
                      default:
                        return o
                    }
                  })(p),
                  t = e.canAction,
                  n = e.message
                !t && n && a(n), t && u(f).catch(i({}))
              },
              type: 'community',
            }),
            r
              ? E.a.createElement(nt.a, {
                  actionLabel: gt,
                  graphicDisplayMode: 'none',
                  headline: r.headline,
                  onAction: g,
                  onClose: g,
                  subtext: r.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        Ot = N.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Ct = n('YeIG'),
        wt = n('TIdA'),
        _t = n('A91F'),
        St = n('9Xij'),
        jt = function (e) {
          var t = e.bannerMedia,
            n = null == t ? void 0 : t.image,
            r = N.a.theme.aspectRatios.communityBanner
          return n && !Object(Ct.a)(n)
            ? E.a.createElement(
                Pe.a,
                null,
                E.a.createElement(wt.a, {
                  accessibilityLabel: '',
                  aspectMode: _t.a.exact(r),
                  backgroundColor: N.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : E.a.createElement(St.a, { ratio: r }, E.a.createElement(Pe.a, { style: Pt.placeholderImageContainer }))
        },
        Pt = N.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        kt = n('X00g'),
        It = n('n4Eu'),
        Mt = { red: 0, green: 0, blue: 0 },
        Rt = '10px',
        Tt = function (e) {
          var t,
            n = e.children,
            r = e.community,
            a = e.isThemeEnabled,
            o = r.media,
            i = r.theme,
            c = null == o || null === (t = o.image) || void 0 === t ? void 0 : t.palette
          return E.a.createElement(
            Pe.a,
            null,
            E.a.createElement(Pe.a, { style: xt.descriptionContainer }, n),
            E.a.createElement(Pe.a, { style: [N.a.absoluteFill, xt.backgroundColorWhite] }),
            E.a.createElement(Pe.a, {
              style: [
                N.a.absoluteFill,
                xt.backgroundColor,
                (function (e, t) {
                  if (a) return kt.a.getCommunityGradientStyle(t, Rt)
                  var n = e && It.a.get(e),
                    r = n ? (null == n ? void 0 : n.rgb) : Mt,
                    o = 'rgba('.concat(r.red, ',').concat(r.green, ',').concat(r.blue, ', 0.9)'),
                    i = 'rgba('.concat(r.red, ',').concat(r.green, ',').concat(r.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(o, ' ')
                      .concat(Rt, ', ')
                      .concat(i, ' ')
                      .concat(Rt, ' 100%)'),
                  }
                })(c, i),
              ],
            }),
          )
        },
        xt = N.a.create(function (e) {
          return {
            descriptionContainer: {
              paddingHorizontal: e.spaces.space16,
              paddingTop: e.spaces.space24,
              paddingBottom: e.spaces.space12,
              justifyContent: 'flex-end',
              zIndex: 2,
            },
            backgroundColor: { height: '100%', width: '100%', zIndex: 1 },
            backgroundColorWhite: { height: '100%', width: '100%', backgroundColor: e.colors.white, zIndex: 0 },
          }
        }),
        Lt = n('XtoV'),
        At = n('97Jx'),
        Dt = n.n(At),
        Ft = n('m3Bd'),
        Ht = n.n(Ft)
      function Bt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Bt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Bt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Kt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Le.a)(
          'svg',
          Nt(
            Nt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [xe.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          E.a.createElement(
            'g',
            null,
            E.a.createElement('path', {
              d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
            }),
            E.a.createElement('path', {
              d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
            }),
          ),
        )
      }
      Kt.metadata = { width: 24, height: 24 }
      var zt = Kt,
        Ut = E.a.createElement(zt, null),
        Vt = function (e) {
          var t = e.renderMenu,
            n = Ht()(e, ['renderMenu']),
            r = n.accessibilityLabel,
            a = n.behavioralEventContext,
            o = Ht()(n, ['accessibilityLabel', 'behavioralEventContext'])
          return E.a.createElement(
            Ie.a,
            Dt()({ accessibilityLabel: r, behavioralEventContext: a, icon: Ut, renderMenu: t, type: 'primaryText' }, o),
          )
        },
        Wt = n('1YZw'),
        Xt = n('G6rE'),
        Yt = n('li/m')
      function Gt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      var Qt = Object(S.a)()
          .propsFromState(function () {
            return { community: O.a, loggedInUser: Xt.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Ht()(e, ['loggedInUser'])
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Gt(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Gt(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              addToast: Wt.b,
              createLocalApiErrorHandler: Object(Ee.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: Yt.b,
              leave: Yt.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        qt = n('oQhu'),
        Zt = n('cm6r'),
        Jt = n('MAI/'),
        $t = n('k/OQ'),
        en = n('MtXG'),
        tn = n('I4+6'),
        nn = n('CaKu'),
        rn = n('I/9y'),
        an = n('pwey')
      function on(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var cn = D.a.a0e3ece4,
        ln = D.a.bec3b8f9,
        sn = D.a.e05c00b4,
        un = D.a.f88553c8,
        mn = D.a.b139b549,
        dn = D.a.ha8209bb,
        pn = D.a.d601fc2f,
        fn = D.a.b721eb37,
        yn = D.a.hb9400db,
        hn = 'description',
        bn = 'facepiles_with_count',
        vn = { viewType: 'share_community' },
        gn = { viewType: 'copy_link' },
        En = { viewType: 'invite_members' },
        On = D.a.d58baa7e,
        Cn = (function (e) {
          d()(n, e)
          var t = on(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              v()(u()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
              v()(
                u()(e),
                '_isTimelinesRankingEnabled',
                e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
              ),
              v()(
                u()(e),
                '_isCommunitiesSharingEnabled',
                e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
              ),
              v()(u()(e), 'state', { shouldShowFullDescription: !1, hasOverflow: void 0 }),
              v()(u()(e), '_renderCommunityDescription', function () {
                var t = e.props,
                  n = t.community,
                  r = t.communityId,
                  a = t.createLocalApiErrorHandler,
                  o = t.history,
                  i = t.isProtectedUser,
                  c = t.join,
                  l = t.leave,
                  s = e.state,
                  u = s.hasOverflow,
                  m = s.shouldShowFullDescription
                if (n) {
                  var d = n.description,
                    p = n.member_count,
                    f = n.membersFacepileUrls,
                    y = n.name,
                    h = n.role,
                    b = n.theme,
                    v = p || 0,
                    g = e._isThemeEnabled ? kt.a.getCommunityBackgroundColorName(b) : void 0
                  return E.a.createElement(
                    ve.a,
                    { viewType: hn },
                    E.a.createElement(
                      Tt,
                      { community: n, isThemeEnabled: e._isThemeEnabled },
                      E.a.createElement(
                        Z.b,
                        { color: 'white', size: 'title2', style: wn.name, weight: 'bold' },
                        y.trim(),
                      ),
                      d && !Object(I.f)(h)
                        ? E.a.createElement(
                            Pe.a,
                            { style: wn.description },
                            E.a.createElement(
                              Z.b,
                              {
                                color: 'white',
                                getTextOverflow: e._getDescriptionOverflow,
                                numberOfLines: m ? void 0 : 2,
                              },
                              d,
                            ),
                            u && !m
                              ? E.a.createElement(
                                  Z.b,
                                  { color: 'white', onPress: e._handleDescriptionClick, weight: 'bold' },
                                  yn,
                                )
                              : null,
                          )
                        : null,
                      E.a.createElement(
                        ve.a,
                        { viewType: bn },
                        E.a.createElement(
                          Pe.a,
                          { style: wn.bottomContainer },
                          E.a.createElement(
                            Zt.a,
                            {
                              interactiveStyles: e._getMemberContainerInteractiveStyle(),
                              link: '/i/communities/'.concat(r, '/members'),
                              style: wn.membersContainer,
                            },
                            f
                              ? E.a.createElement(Jt.a, {
                                  borderColor: g,
                                  style: wn.rightSpace,
                                  userAvatarSize: 'large',
                                  userAvatarUrls: f,
                                })
                              : null,
                            e._renderCount(v),
                          ),
                          E.a.createElement(
                            Pe.a,
                            { style: wn.buttons },
                            e._isCommunitiesSharingEnabled
                              ? E.a.createElement(Vt, {
                                  accessibilityLabel: ln,
                                  behavioralEventContext: vn,
                                  renderMenu: e._renderActionMenu,
                                  style: wn.inviteButton,
                                  type: 'onMediaOutlined',
                                })
                              : E.a.createElement(Lt.a, {
                                  community: n,
                                  style: wn.inviteButton,
                                  type: 'onMediaOutlined',
                                }),
                            e._isParticipationEnabled
                              ? E.a.createElement(Et, {
                                  community: n,
                                  createLocalApiErrorHandler: a,
                                  history: o,
                                  isProtectedUser: i,
                                  join: c,
                                  leave: l,
                                })
                              : null,
                          ),
                        ),
                      ),
                    ),
                  )
                }
              }),
              v()(u()(e), '_renderTabs', function () {
                var t = e.props.communityId,
                  n = [
                    { to: '/i/communities/'.concat(t), label: dn, key: dn },
                    { to: '/i/communities/'.concat(t, '/latest'), label: pn, key: pn },
                    { to: '/i/communities/'.concat(t, '/about'), label: fn, key: fn },
                  ]
                return E.a.createElement($t.a, {
                  accessibilityLabel: cn,
                  links: e._isTimelinesRankingEnabled
                    ? n
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== pn
                        })
                      })(n),
                })
              }),
              v()(u()(e), '_renderCount', function (e) {
                var t = On(e)
                return E.a.createElement(
                  en.a.Group,
                  null,
                  E.a.createElement(
                    en.a,
                    { onMedia: !0 },
                    E.a.createElement(
                      Z.b,
                      { color: 'white' },
                      E.a.createElement(
                        D.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        E.a.createElement(en.a.Value, null, D.a.ibd0106d({ formattedCount: t })),
                        E.a.createElement(en.a.Label, null, D.a.cface2d0({ count: e })),
                      ),
                    ),
                  ),
                )
              }),
              v()(
                u()(e),
                '_getCommunityShareItems',
                Object(qt.a)(function (t, n) {
                  var r = []
                  return (
                    r.push({ behavioralEventContext: gn, text: sn, Icon: rn.a, onClick: e._handleCopyLink }),
                    t &&
                      r.push({
                        behavioralEventContext: En,
                        text: mn,
                        Icon: an.a,
                        link: '/i/communities/'.concat(n, '/invite'),
                      }),
                    r
                  )
                }),
              ),
              v()(u()(e), '_renderActionMenu', function (t) {
                var n = e.props,
                  r = n.community,
                  a = n.communityId,
                  o = null == r ? void 0 : r.role,
                  i = Object(I.f)(o),
                  c = e._getCommunityShareItems(i, a)
                return E.a.createElement(ke.a, { items: c, onCloseRequested: t })
              }),
              v()(u()(e), '_handleCopyLink', function (t) {
                var n = e.props,
                  r = n.addToast,
                  a = n.communityId
                nn.a.setString('https://twitter.com/i/communities/'.concat(a)), t(), r({ text: un })
              }),
              v()(u()(e), '_getMemberContainerInteractiveStyle', function () {
                return tn.a.generate({
                  backgroundColor: N.a.theme.colors.transparent,
                  color: N.a.theme.colors.white,
                  customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
                })
              }),
              v()(u()(e), '_handleDescriptionClick', function () {
                var t = e.state.shouldShowFullDescription
                e.setState({ shouldShowFullDescription: !t })
              }),
              v()(u()(e), '_getDescriptionOverflow', function (t) {
                void 0 === e.state.hasOverflow && e.setState({ hasOverflow: t })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.community
                  return e
                    ? E.a.createElement(
                        M.a,
                        { behavioralEventViewType: 'timeline' },
                        E.a.createElement(
                          Pe.a,
                          { style: wn.container },
                          E.a.createElement(
                            Pe.a,
                            null,
                            E.a.createElement(jt, { bannerMedia: e.media }),
                            this._renderCommunityDescription(),
                          ),
                          this._renderTabs(),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      v()(Cn, 'contextType', te.a)
      var wn = N.a.create(function (e) {
          return {
            access: { alignSelf: 'stretch', flexDirection: 'row' },
            name: { flexDirection: 'column', justifyContent: 'left', marginBottom: e.spaces.space8 },
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            button: { justifyContent: 'right' },
            bottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            membersContainer: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              left: -e.spacesPx.space4,
              top: -e.spacesPx.space2,
              padding: e.spaces.space4,
              borderRadius: e.borderRadii.small,
            },
            inviteButton: { marginRight: e.spaces.space8 },
            buttons: { flexDirection: 'row', height: 'fit-content' },
            description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
            rightSpace: { marginRight: e.spaces.space12 },
          }
        }),
        _n = Qt(Cn),
        Sn = n('eSoz'),
        jn = n('8Lfv'),
        Pn = n('LI/a'),
        kn = function (e, t) {
          return t.communityId
        },
        In = function (e, t) {
          var n = Sn.c.select(e, t.communityId)
          return Object(I.f)(null == n ? void 0 : n.role)
        },
        Mn = Object(S.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: In,
              rankedTweetsModule: Object(_.createSelector)(kn, function (e) {
                return Object(Pn.b)(e)
              }),
              tweetsModule: Object(_.createSelector)(kn, function (e) {
                return Object(Pn.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: jn.a,
              createLocalApiErrorHandler: Object(Ee.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        Rn = n('FIs5'),
        Tn = n('EUHl'),
        xn = n('7BdX'),
        Ln = n('7JQg'),
        An = D.a.c18e3a3e,
        Dn = D.a.d68146c0,
        Fn = D.a.h5245afa,
        Hn = D.a.f05dbeff,
        Bn = { page: 'community', section: 'home' },
        Nn = { page: 'community', section: 'latest' },
        Kn = { page: 'community', section: 'tweets' },
        zn = Mn(function (e) {
          var t = E.a.useContext(te.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            r = e.createLocalApiErrorHandler,
            a = e.isCommunityMember,
            o = e.rankedTweetsModule,
            i = e.tweetsModule,
            c = e.type === Fr.Home ? { module: o, scribeNamespace: Bn } : { module: i, scribeNamespace: Nn },
            l = t ? c : { module: i, scribeNamespace: Kn },
            s = l.module,
            u = l.scribeNamespace
          E.a.useEffect(
            function () {
              n(s).catch(r())
            },
            [n, r, a, s],
          )
          var m = E.a.useCallback(function () {
            return E.a.createElement(Rn.a, { buttonType: 'brandOutlined', header: An, message: Dn })
          }, [])
          return E.a.createElement(
            Ln.b,
            { namespace: u },
            E.a.createElement(
              M.a,
              { behavioralEventViewType: 'tweets' },
              E.a.createElement(R.a, {
                loadingAccessibilityLabel: Hn,
                module: s,
                newTweetsPillMode: Tn.a.CLIENT,
                prerollDisplayLocation: xn.c.OTHER,
                refreshControl: null,
                renderEmptyState: m,
                title: Fn,
              }),
            ),
          )
        }),
        Un = n('o3oN')
      function Vn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      var Wn = Object(S.a)()
          .propsFromState(function () {
            return {
              communityId: O.c,
              community: O.a,
              communityTheme: O.f,
              fetchStatus: O.b,
              membershipsFetchStatus: Un.d,
              isCommunityMember: O.h,
              joinActionResultType: O.i,
              loggedInUser: Xt.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Ht()(e, ['loggedInUser'])
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Vn(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Vn(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ee.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: Sn.c.fetchOneIfNeeded,
              fetchCommunityMemberships: Un.a,
            }
          })
          .withAnalytics({ page: 'community' }),
        Xn = (n('MvUL'), n('Ty5D'))
      function Yn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Gn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Yn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Qn = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Le.a)(
          'svg',
          Gn(
            Gn({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [xe.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          E.a.createElement(
            'g',
            null,
            E.a.createElement('path', {
              d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
            }),
            E.a.createElement('path', {
              d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
            }),
          ),
        )
      }
      Qn.metadata = { width: 24, height: 24 }
      var qn = Qn,
        Zn = n('wpLu'),
        Jn = n('vFjZ'),
        $n = D.a.bf359e0d,
        er = D.a.e8fcdd3a,
        tr = D.a.h54d99da,
        nr = D.a.f30c8202,
        rr = D.a.ca7eeabf,
        ar = D.a.a55eca58,
        or = D.a.e97cf2bc,
        ir = D.a.j24c37b2,
        cr = E.a.memo(function (e) {
          var t = e.community,
            n = t.id_str,
            r = Object(Xn.g)(),
            a = E.a.useCallback(
              function () {
                r.replace('/i/communities/'.concat(n, '/'))
              },
              [r, n],
            ),
            o = kt.a.getCommunityThemeDisplayName(Object(I.d)(t)),
            i = E.a.createElement(
              Pe.a,
              { accessibilityRole: 'list', style: lr.rulesContainer },
              t.rules.map(function (e) {
                return E.a.createElement(
                  Z.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: lr.rule },
                  e.name,
                )
              }),
            )
          return E.a.createElement(
            nt.a,
            {
              actionLabel: ir,
              graphicDisplayMode: 'none',
              headline: $n,
              onAction: a,
              onClose: a,
              subtext: er,
              withCloseButton: !0,
            },
            E.a.createElement(
              Pe.a,
              { style: lr.infoItemsContainer },
              E.a.createElement($.a, {
                containerStyle: lr.itemContainer,
                items: [
                  { label: tr, description: nr, decoration: E.a.createElement(qn, { style: lr.decorationContainer }) },
                  { label: rr, decoration: E.a.createElement(Zn.a, { style: lr.decorationContainer }), description: i },
                  {
                    label: ar({ title: o }),
                    description: or,
                    decoration: E.a.createElement(Jn.a, { style: lr.decorationContainer }),
                  },
                ],
              }),
            ),
          )
        }),
        lr = N.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingHorizontal: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
            rulesContainer: { marginTop: e.spaces.space4, marginLeft: e.spaces.space8 },
            rule: { display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' },
          }
        }),
        sr = cr,
        ur = n('dwig'),
        mr = n('MDbM'),
        dr = n('0+qk'),
        pr = n('/de5'),
        fr = (n('FtFR'), n('hBvt'), n('/ekK')),
        yr = Object(S.a)()
          .propsFromState(function () {
            return { flags: fr.b }
          })
          .propsFromActions(function () {
            return { setFlag: fr.c, retrieveFlagsIfNeeded: fr.a }
          }),
        hr = n('XiMS'),
        br = n('hOZg'),
        vr = n('iySH'),
        gr = D.a.a841c4ea,
        Er = D.a.fd36e4f7,
        Or = D.a.b192b58b,
        Cr = D.a.gd30278f,
        wr = D.a.cbdddb09,
        _r = D.a.h5890b1a,
        Sr = [
          {
            flag: 'setup_clicked_rules',
            title: D.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: D.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: D.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: D.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(Cr, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        jr = E.a.memo(function (e) {
          var t = e.community.id_str,
            n = e.flags,
            r = e.retrieveFlagsIfNeeded,
            a = e.setFlag,
            o = E.a.useContext(te.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            i = Object(Xn.g)()
          E.a.useEffect(
            function () {
              o && r(t)
            },
            [t, o, r],
          )
          var c = E.a.useCallback(
            function () {
              a(t, 'setup_show_checklist', !1)
            },
            [t, a],
          )
          if (!n.setup_show_checklist || !o) return null
          var l = function (e) {
            a(t, e.flag, !0).then(function () {
              i.push(e.link(t))
            })
          }
          return E.a.createElement(
            Pe.a,
            { style: Pr.wrapper },
            E.a.createElement(Ie.a, {
              accessibilityLabel: Or,
              icon: E.a.createElement(br.a, { style: Pr.close }),
              onClick: c,
              pullRight: !0,
              size: 'medium',
              style: Pr.dismiss,
              type: 'brandText',
            }),
            E.a.createElement(Z.b, { size: 'title3', style: Pr.headline, weight: 'bold' }, gr),
            E.a.createElement(Z.b, { style: Pr.subtext }, Er),
            E.a.createElement(
              Pe.a,
              { accessibilityRole: 'list', style: Pr.list },
              Sr.map(function (e) {
                var t = Boolean(n[e.flag])
                return E.a.createElement(
                  Pe.a,
                  {
                    accessibilityLabel: t ? wr : _r,
                    accessibilityRole: 'listitem',
                    key: e.flag,
                    onClick: t ? void 0 : l.bind(null, e),
                    style: [Pr.entry, t ? Pr.completedEntry : Pr.uncompletedEntry],
                  },
                  E.a.createElement(hr.a, { accessibilityState: { hidden: !0 }, checked: t }),
                  E.a.createElement(Z.b, null, e.title),
                  E.a.createElement(vr.a, { style: Pr.chevron }),
                )
              }),
            ),
          )
        }),
        Pr = N.a.create(function (e) {
          return {
            wrapper: {
              padding: e.spaces.space32,
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.gray200,
              color: e.colors.text,
            },
            dismiss: { marginLeft: 'auto' },
            headline: { paddingBottom: e.spaces.space4 },
            subtext: { color: e.colors.gray700, paddingBottom: e.spaces.space16 },
            close: { color: e.colors.text },
            list: { gap: e.spaces.space20 },
            entry: { display: 'flex', flexDirection: 'row', gap: e.spaces.space8, listStylePosition: 'inside' },
            completedEntry: {},
            uncompletedEntry: { cursor: 'pointer' },
            chevron: { color: e.colors.gray300, marginLeft: 'auto' },
          }
        }),
        kr = yr(jr),
        Ir = n('VS6U'),
        Mr = n('QRqA'),
        Rr = n('Qwev'),
        Tr = n('mw9i')
      function xr(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Lr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xr(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : xr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ar(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Dr = { type: 'serversideContextKey', serversideContextType: 'community' },
        Fr = Object.freeze({ Home: 'home', Latest: 'latest' }),
        Hr = D.a.a7c2e06c,
        Br = (function (e) {
          d()(n, e)
          var t = Ar(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_getTweetButtonLocationState', function () {
                return { selectedCommunityId: e.props.communityId, defaultText: '' }
              }),
              v()(
                u()(e),
                '_getClientEntity',
                Object(qt.a)(function (e) {
                  return Lr(Lr({}, Dr), {}, { serversideContextId: e })
                }),
              ),
              v()(
                u()(e),
                '_getWelcomeEducationParams',
                Object(qt.a)(function (e, t) {
                  return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
                }),
              ),
              v()(u()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.community,
                  r = t.communityId,
                  a = t.fetchStatus,
                  o = t.history,
                  i = t.joinActionResultType,
                  c = t.location,
                  l = t.match,
                  s = (null == n ? void 0 : n.role) === I.a.Admin && void 0 !== c.query.show_creation_summary,
                  u = e._isAllowedToTweet
                    ? E.a.createElement(dr.a, { getLocationState: e._getTweetButtonLocationState, history: o })
                    : null
                return r && a === mr.a.LOADING
                  ? E.a.createElement(Rr.a, { style: Nr.topMargin })
                  : r && null != n && n.name && a === mr.a.LOADED
                  ? E.a.createElement(
                      ur.a,
                      { component: Tr.a, fab: u },
                      E.a.createElement(Mr.a, e._getWelcomeEducationParams(n, i)),
                      s && E.a.createElement(sr, { community: n }),
                      e._renderCommunityDetail(),
                      E.a.createElement(kr, { community: n }),
                      E.a.createElement(
                        Xn.c,
                        { exact: !0, path: '/i/communities/'.concat(r, '/about') },
                        E.a.createElement(be, { communityId: r, match: l }),
                      ),
                      E.a.createElement(
                        Xn.e,
                        null,
                        E.a.createElement(
                          Xn.c,
                          { exact: !0, path: '/i/communities/'.concat(r, '/') },
                          E.a.createElement(zn, { communityId: r, location: c, match: l, type: Fr.Home }),
                        ),
                        E.a.createElement(
                          Xn.c,
                          { path: '/i/communities/'.concat(r, '/latest') },
                          E.a.createElement(zn, { communityId: r, location: c, match: l, type: Fr.Latest }),
                        ),
                      ),
                    )
                  : E.a.createElement(pr.b, { history: o, location: c, match: l })
              }),
              v()(u()(e), '_renderCommunityDetail', function () {
                var t = e.props,
                  n = t.communityId,
                  r = t.history,
                  a = t.match
                return n ? E.a.createElement(_n, { communityId: n, history: r, match: a }) : null
              }),
              v()(u()(e), '_handleFetchIfNeeded', function () {
                var t = e.props,
                  n = t.communityId,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchCommunityIfNeeded,
                  o = t.fetchCommunityMemberships,
                  i = t.membershipsFetchStatus
                n && a(n).catch(r({})), i === Se.a.NONE && o().catch(r())
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchIfNeeded()
                },
              },
              {
                key: '_isAllowedToTweet',
                get: function () {
                  var e = this.props.isCommunityMember
                  return this.context.featureSwitches.isTrue('c9s_participation_enabled') && e
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.community,
                    n = e.communityId,
                    r = e.history,
                    a = e.screenName,
                    o = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
                    i = null == t ? void 0 : t.name,
                    c = n
                      ? E.a.createElement(Je, {
                          canModerate: Object(I.c)(null == t ? void 0 : t.role),
                          communityId: n,
                          userRole: null == t ? void 0 : t.role,
                        })
                      : null
                  return E.a.createElement(
                    ve.a,
                    { clientEntity: this._getClientEntity(n || ''), viewType: 'community' },
                    E.a.createElement(Ir.a, {
                      backLocation: a && '/'.concat(a, '/communities'),
                      composeOptions: this._getTweetButtonLocationState(),
                      documentTitle: i ? Hr({ communityName: i }) : '',
                      history: r,
                      primaryContent: this._renderPrimaryContent(),
                      rightControl: c,
                      sidebarContent: E.a.createElement(ge.a, { communityId: n, withCommunityRules: o }),
                      title: i || null,
                      withTweetButton: this._isAllowedToTweet,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      v()(Br, 'contextType', te.a)
      var Nr = N.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        Kr = Wn(Br)
      t.default = Kr
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('v6aA'),
        l = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = u.a.e2df7cf1,
        p = u.a.be9bb312,
        f = u.a.e988475f,
        y = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            r = e.communityPurpose,
            o = e.onChange,
            s = i.a.useState(void 0),
            u = a()(s, 2),
            y = u[0],
            h = u[1],
            b = i.a.useState(!1),
            v = a()(b, 2),
            g = v[0],
            E = v[1],
            O = i.a.useContext(c.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            C = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.g)(t, 3, O)
                n && h(f({ minCharacterCount: 3, maxCharacterCount: O })), E(n), o(t, n)
              },
              [O, h, o],
            )
          return i.a.createElement(l.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: y,
            helperText: p,
            invalid: g,
            label: d,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: C,
            spellCheck: 'false',
            validLength: O,
            value: r,
          })
        }
    },
    U3Z9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateCommunityModal', function () {
          return I
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('MvUL'), n('KqXw'), n('ERkP')),
        i = n.n(o),
        c = n('+Kfv'),
        l = n('ROT1'),
        s = n('U0Qk'),
        u = n('eSoz'),
        m = n('RqPI'),
        d = n('rxPX'),
        p = Object(d.a)()
          .propsFromState(function () {
            return { communitiesActions: m.f }
          })
          .propsFromActions(function () {
            return { createCommunity: u.b }
          }),
        f = n('jHSc'),
        y = n('3XMw'),
        h = n.n(y),
        b = n('0weh'),
        v = n('5FtR'),
        g = n('MWbm'),
        E = n('/yvb'),
        O = n('4zmP'),
        C = n('t62R'),
        w = n('rHpw'),
        _ = h.a.i6e7e298,
        S = h.a.a226497c,
        j = h.a.c9d56b71,
        P = h.a.fc2a5c92,
        k = h.a.c1ad5a11,
        I = i.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            r = e.history,
            o = i.a.useState(!0),
            u = a()(o, 2),
            m = u[0],
            d = u[1],
            p = i.a.useState(!1),
            y = a()(p, 2),
            h = y[0],
            w = y[1],
            I = m || h,
            R = i.a.useState(''),
            T = a()(R, 2),
            x = T[0],
            L = T[1],
            A = i.a.useState(''),
            D = a()(A, 2),
            F = D[0],
            H = D[1],
            B = i.a.useState(null),
            N = a()(B, 2),
            K = N[0],
            z = N[1],
            U = i.a.useCallback(function (e, t) {
              L(e), d(t)
            }, []),
            V = i.a.useCallback(function (e, t) {
              H(e), 0 === e.length ? w(!1) : w(t)
            }, []),
            W = i.a.useCallback(
              function () {
                z(null),
                  n(x, { description: F })
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && r.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && z(e)
                    })
                    .catch(function (e) {
                      z({ error: 'GraphQL error', reason: e })
                    })
              },
              [x, F, n, r],
            )
          if (null == t || !t.create) return i.a.createElement(v.a, { to: '/home' })
          var X = i.a.createElement(E.a, { disabled: I, onClick: W, size: 'small', type: 'brandFilled' }, _),
            Y = K
              ? i.a.createElement(
                  g.a,
                  { style: M.error },
                  i.a.createElement(O.a, { Icon: b.a, headline: P, text: k, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            c.a,
            { viewType: 'community' },
            i.a.createElement(
              f.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: M.root,
                history: r,
                rightControl: X,
                title: S,
              },
              i.a.createElement(
                i.a.Fragment,
                null,
                Y,
                i.a.createElement(C.b, { color: 'gray700', style: M.text }, j),
                i.a.createElement(l.a, { autoFocus: !0, communityName: x, onChange: U }),
                i.a.createElement(s.a, { communityPurpose: F, onChange: V }),
              ),
            ),
          )
        }),
        M = w.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        R = p(I)
      t.default = R
    },
    XtoV: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n.n(c),
        s = n('/yvb'),
        u = n('3XMw'),
        m = n.n(u),
        d = n('pwey'),
        p = m.a.b139b549,
        f = l.a.createElement(d.a, null),
        y = l.a.memo(function (e) {
          var t = e.community,
            n = i()(e, ['community'])
          if (!t || 'CommunityInvitesUnavailable' === t.invites_result.__typename) return null
          var r = '/i/communities/'.concat(t.id_str, '/invite')
          return l.a.createElement(s.a, a()({ accessibilityLabel: p, icon: f, link: r, type: 'primaryText' }, n))
        })
      t.a = y
    },
    Y3cQ: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('fyvP'),
        i = n('rHpw'),
        c = n('MWbm')
      t.a = function (e) {
        return a.a.createElement(c.a, { style: l.root }, a.a.createElement(o.a, e))
      }
      var l = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    b5s6: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n.n(c),
        s = n('v6aA'),
        u = n('XOJV'),
        m = n('eSoz'),
        d = n('rxPX'),
        p = n('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        y = function (e, t) {
          var n = t.tweetId,
            r = n && u.a.select(e, n)
          return r ? Object(m.g)(e, r) : void 0
        },
        h = Object(d.a)()
          .propsFromState(function () {
            return { community: y, hydratedTweet: u.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: m.c.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        v = n('uCxL'),
        g = n('x5Pi'),
        E = h(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            c =
              (e.tweetId,
              i()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = l.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            p = null == o ? void 0 : o.community_id_str
          l.a.useEffect(
            function () {
              p && Object(b.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var f = m.isTrue('responsive_web_alt_text_badge_enabled'),
            y = o && Object(g.f)(o, d, t),
            h = y && Object(g.e)(y),
            E = m.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            v.a,
            a()({}, c, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: f,
              socialContextProps: h,
              tweet: o,
              withReactions: E,
            }),
          )
        })
      t.a = E
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        o = n('Ud88'),
        i = n('aQQo'),
        c = i.loadQuery,
        l = i.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        m = s.useEffect,
        d = s.useRef,
        p = s.useState,
        f = n('K1lQ').getRequest,
        y = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : y,
          i = o()
        l()
        var s = a(),
          f = d(new Set([n])),
          b = p(function () {
            return n
          }),
          v = b[0],
          g = b[1],
          E = p(function () {
            return n
          }),
          O = E[0],
          C = E[1]
        n !== O && (f.current.add(n), C(n), g(n))
        var w = u(
            function () {
              s.current && (f.current.add(y), g(y))
            },
            [s],
          ),
          _ = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var a,
                  o = c(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : i, e, t, r)
                f.current.add(o), g(o)
              }
            },
            [i, e, g, s],
          ),
          S = d(!1)
        return (
          m(function () {
            return function () {
              S.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === S.current)
                return (
                  (S.current = !1),
                  void (
                    'NullQueryReference' !== v.kind &&
                    _(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var t = f.current
              if (s.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var o = n.value
                    if (o === v) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (h(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [v, s, _, e],
          ),
          m(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(f.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (h(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (o) {
                  n.e(o)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === v.kind ? null : v, _, w]
        )
      }
    },
    'cz/h': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesDiscoveryScreen', function () {
          return T
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('ERkP')),
        v = n.n(b),
        g = n('es0u'),
        E = n('WpDa'),
        O = n('ZNT5'),
        C = Object(O.a)({
          timelineId: 'communitiesDiscoveryTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunityDiscoveryTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_DISCOVERY_TIMELINE',
          perfKey: 'communitiesDiscoveryTimeline',
          formatResponse: E.a,
        }),
        w = n('OUEC'),
        _ = n('3XMw'),
        S = n.n(_),
        j = n('oQhu'),
        P = n('yoO3'),
        k = n('fTQJ'),
        I = n('VS6U')
      function M(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var R = S.a.cb6adb1f,
        T = (function (e) {
          u()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderPrimaryContent', function () {
                var t = e._getModule()
                return v.a.createElement(k.a, { entryConfiguration: w.a, module: t, refreshControl: null, title: R })
              }),
              h()(
                l()(e),
                '_getModule',
                Object(j.a)(function () {
                  return C
                }),
              ),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return v.a.createElement(
                    P.a,
                    { behavioralEventViewType: 'discover' },
                    v.a.createElement(I.a, {
                      backLocation: '/',
                      history: e,
                      primaryContent: this._renderPrimaryContent(),
                      sidebarContent: v.a.createElement(g.a, null),
                      title: R,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.default = T
    },
    fS8x: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('OZaJ'), n('VrFO')),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        h = n.n(y),
        b = n('KEM+'),
        v = n.n(b),
        g = n('/NU0'),
        E = n('rxPX'),
        O = n('AspN'),
        C = function (e, t) {
          return t.media ? t.media : Object(g.a)(t.mediaId) ? Object(O.k)(e, t.mediaId)[0] : void 0
        },
        w = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        _ = Object(E.a)()
          .propsFromState(function () {
            return { media: C, mediaId: w }
          })
          .propsFromActions(function () {
            return { processMedia: O.f, updateMediaUpload: O.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        S = n('jHSc'),
        j = n('3XMw'),
        P = n.n(j),
        k = n('EeFI'),
        I = 'applyButton',
        M = n('/yvb'),
        R = n('rHpw')
      function T(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var x = P.a.gd80afba,
        L = P.a.a753a87f,
        A = (function (e) {
          d()(n, e)
          var t = T(n)
          function n(e) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e)),
              v()(u()(r), '_getMedia', function () {
                var e = r.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              v()(u()(r), '_renderAppBarRightControl', function () {
                var e = r.state.isProcessing
                return a.a.createElement(
                  M.a,
                  { disabled: e, onPress: r._handleApplyButtonClick, size: 'small', testID: I, type: 'primaryFilled' },
                  L,
                )
              }),
              v()(u()(r), '_handleBackClick', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              v()(u()(r), '_handleApplyButtonClick', function () {
                var e = r.props.onCropDone,
                  t = r._cropper.current
                if (t) {
                  var n = r.props,
                    a = n.analytics,
                    o = n.media,
                    i = n.mediaId,
                    c = n.onDone,
                    l = n.processMedia,
                    s = n.updateMediaUpload
                  r.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (o || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(g.a)(i) &&
                    (e
                      ? (e(u), c())
                      : (s({ id: i, cropData: d ? void 0 : u }),
                        l(i).then(function () {
                          r.setState({ isProcessing: !1 }), a.scribe({ action: 'done' }), c()
                        })))
                }
              }),
              (r.state = { isProcessing: !1 }),
              (r._cropper = a.a.createRef()),
              e.media || e.onCancel(),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    r = e.title,
                    o = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    c = this._getMedia()
                  return a.a.createElement(
                    S.b,
                    {
                      backButtonType: 'back',
                      containerStyle: D.root,
                      documentTitle: r || x,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: r || x,
                    },
                    a.a.createElement(k.a, {
                      defaultAspectRatio: t,
                      media: c,
                      ref: this._cropper,
                      withAspectRatioOptions: o,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(a.a.Component),
        D = R.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        F = _(A),
        H = n('X8FW'),
        B = R.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return a.a.createElement(
          H.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: B.modal },
          a.a.createElement(F, e),
        )
      }
    },
    gDCe: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('Ig1G'),
        i = n('3XMw'),
        c = n.n(i),
        l = n('Nh1N'),
        s = n('MWbm'),
        u = n('4zmP'),
        m = n('rHpw'),
        d = c.a.b6e22e15,
        p = c.a.d17c10d9,
        f = c.a.a1ecaf33,
        y = a.a.memo(function (e) {
          var t,
            n = e.community
          return n && n.role === o.a.Admin
            ? a.a.createElement(
                s.a,
                { style: h.info },
                a.a.createElement(u.a, {
                  Icon: l.a,
                  action: {
                    label: f,
                    link: {
                      pathname: '/messages/compose',
                      query: {
                        recipient_id: '1433894099178774532',
                        text:
                          ((t = n.id_str),
                          'Hi, my community is (https://twitter.com/i/communities/'.concat(
                            t,
                            ') and I would like to add the following accounts as moderators: ',
                          )),
                      },
                    },
                  },
                  headline: d,
                  text: p,
                  type: 'primary',
                }),
              )
            : null
        }),
        h = m.a.create(function (e) {
          return { info: { padding: e.spaces.space12 } }
        })
      t.a = y
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n.n(c),
        s = n('t62R'),
        u = n('I4+6'),
        m = n('cm6r'),
        d = n('rHpw'),
        p = n('MWbm'),
        f = d.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          r = e.color,
          o = e.label,
          c = i()(e, ['align', 'color', 'label']),
          y = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          p.a,
          { style: f.container },
          l.a.createElement(
            m.a,
            a()({}, c, { interactiveStyles: y, style: f.root }),
            l.a.createElement(s.b, { align: n, color: r }, o),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('0vv5'),
        a = 500,
        o = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    krnS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('WpDa'),
        i = n('ZNT5'),
        c = n('FIs5'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('oQhu'),
        m = n('fTQJ'),
        d = s.a.cdd87523,
        p = s.a.cca5191f,
        f = s.a.e442bbb4,
        y = s.a.e9488b0d,
        h = s.a.j43fea20,
        b = { Moderators: 'Moderators', Members: 'Members' },
        v = Object(u.a)(function (e) {
          return (function (e) {
            return Object(i.a)({
              timelineId: 'communityMembers-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityMembers
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  r = t.cursor
                return { count: n, cursor: 'string' == typeof r ? r : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MEMBERS_TIMELINE',
              perfKey: 'communityMembers',
              formatResponse: o.a,
            })
          })(e)
        }),
        g = Object(u.a)(function (e) {
          return (function (e) {
            return Object(i.a)({
              timelineId: 'communityModerators-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityModerators
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  r = t.cursor
                return { count: n, cursor: 'string' == typeof r ? r : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MODERATORS_TIMELINE',
              perfKey: 'communityModerators',
              formatResponse: o.a,
            })
          })(e)
        }),
        E = function () {
          return a.a.createElement(c.a, { header: d, message: p })
        }
      t.b = function (e) {
        var t = e.communityId,
          n = e.mode === b.Moderators,
          r = n ? g(t) : v(t),
          o = n ? y : h
        return a.a.createElement(m.a, { loadingAccessibilityLabel: o, module: r, renderEmptyState: E, title: f })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return le
        })
      n('WNMA'), n('KqXw')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        i = n('Ig1G'),
        c = n('eSoz'),
        l = n('rxPX'),
        s = n('0KEI'),
        u = n('R5kW'),
        m = function (e, t) {
          var n,
            r = Object(u.b)(e, t.communityId)
          return null !== (n = null == r ? void 0 : r.tweet_case_count) && void 0 !== n ? n : 0
        },
        d = function (e, t) {
          var n = Object(c.h)(e, t.communityId)
          return 'CommunityJoinRequests' === (null == n ? void 0 : n.__typename) ? n.pending_join_request_count : 0
        },
        p = function (e, t) {
          return Object(u.c)(e, t.communityId)
        },
        f = Object(l.a)()
          .propsFromState(function () {
            return { count: m, joinRequestCount: d, moderationFetchStatus: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              fetchCommunityModerationData: u.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        y = n('kGix'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('KQzH'),
        g = n('mWs5'),
        E = n('MWbm'),
        O = n('rHpw'),
        C = n('Znyr'),
        w = n('6vad'),
        _ = n('csss'),
        S = n('zIWA'),
        j = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        P = n.n(j),
        k = n('Lsrn'),
        I = n('k/Ka')
      function M(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                P()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(I.a)(
          'svg',
          R(
            R({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [k.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z',
            }),
          ),
        )
      }
      T.metadata = { width: 24, height: 24 }
      var x = T,
        L = n('M2x3'),
        A = n('SNyS'),
        D = n('S+H3'),
        F = n('PU7B'),
        H = b.a.dce5e1b3,
        B = b.a.c5d8c93d,
        N = b.a.c8c7f9fc,
        K = b.a.c045c7b6,
        z = b.a.a87df2ee,
        U = b.a.dc6ce7b4,
        V = b.a.gfca5254,
        W = b.a.bb081ea1,
        X = b.a.h6beb5fa,
        Y = b.a.e3f04700,
        G = b.a.efc26607,
        Q = b.a.gfccba44,
        q = b.a.adfcc3cd,
        Z = b.a.d0330d9c,
        J = b.a.fd67f7c8,
        $ = b.a.gc00d212,
        ee = b.a.a997eca0,
        te = O.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        ne = a.a.createElement(S.a, { style: te.thumbnail }),
        re = a.a.createElement(x, { style: te.thumbnail }),
        ae = a.a.createElement(L.a, { style: te.thumbnail }),
        oe = a.a.createElement(A.a, { style: te.thumbnail }),
        ie = a.a.createElement(D.a, { style: te.thumbnail }),
        ce = a.a.createElement(F.a, { style: te.thumbnail }),
        le = function (e) {
          var t = a.a.useContext(o.a).featureSwitches,
            n = e.community,
            r = e.communityId,
            c = e.count,
            l = e.createLocalApiErrorHandler,
            s = e.fetchCommunityModerationData,
            u = e.joinRequestCount,
            m = e.match,
            d = e.moderationFetchStatus,
            p = l(),
            f = t.isTrue('c9s_moderation_enabled'),
            h = t.isTrue('c9s_rule_management_enabled'),
            b = t.isTrue('c9s_request_to_join_enabled')
          a.a.useEffect(
            function () {
              d === y.a.NONE && f && s(r).catch(p)
            },
            [p, r, s, d, f],
          )
          var O = a.a.useCallback(
              function () {
                return f && c > 0
                  ? a.a.createElement(C.a, {
                      count: c,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: Y,
                      withBorder: !1,
                    })
                  : null
              },
              [c, f],
            ),
            S = a.a.useCallback(
              function () {
                return b && u > 0
                  ? a.a.createElement(C.a, {
                      count: u,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: Y,
                      withBorder: !1,
                    })
                  : null
              },
              [u, b],
            ),
            j = n.role,
            P = j === i.a.Admin ? H : B,
            k = j === i.a.Admin ? q : Z,
            I = !m.isExact
          return a.a.createElement(
            g.a,
            { communityId: r, screenType: 'secondaryRoot', title: P, withDetailOpen: I },
            a.a.createElement(
              E.a,
              null,
              f
                ? a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(w.b, { text: N }),
                    a.a.createElement(v.a, {
                      label: K,
                      link: '/i/communities/'.concat(r, '/moderation/reported_tweets'),
                      renderRightContent: O,
                      thumbnail: ne,
                    }),
                  )
                : null,
              b
                ? a.a.createElement(v.a, {
                    label: Q,
                    link: '/i/communities/'.concat(r, '/moderation/member_requests'),
                    renderRightContent: S,
                    thumbnail: re,
                  })
                : null,
              a.a.createElement(w.b, { text: z }),
              a.a.createElement(v.a, {
                description: G({ memberCount: n.member_count }),
                label: U,
                link: '/i/communities/'.concat(r, '/tools/members'),
                thumbnail: ie,
              }),
              h
                ? a.a.createElement(v.a, {
                    description: k,
                    label: V,
                    link: '/i/communities/'.concat(r, '/tools/rules'),
                    thumbnail: ce,
                  })
                : null,
              j === i.a.Admin
                ? a.a.createElement(v.a, {
                    description: J,
                    label: W,
                    link: '/i/communities/'.concat(r, '/tools/settings'),
                    thumbnail: ae,
                  })
                : null,
              a.a.createElement(_.a, {
                description: ee,
                label: $,
                link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                thumbnail: oe,
              }),
            ),
          )
        },
        se = f(le)
      t.default = se
    },
    m0MN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesModerationContainer', function () {
          return et
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('WNMA'), n('KqXw'), n('ERkP')),
        l = n.n(c),
        s = n('+Kfv'),
        u = n('Ig1G'),
        m = n('1Idg'),
        d = n('eSoz'),
        p = n('rxPX'),
        f = n('0KEI'),
        y = Object(p.a)()
          .propsFromState(function () {
            return { community: m.a, fetchStatus: m.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        h = n('G1WX'),
        b = n('/de5'),
        v = (n('ho0z'), n('v6aA')),
        g = n('es0u'),
        E = n('KEM+'),
        O = n.n(E),
        C =
          (n('2G9S'),
          n('uFXj'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('ddV6')),
        w = n.n(C),
        _ = (n('z84I'), n('3zvM')),
        S = n('lMB6'),
        j = Object(_.f)({ namespace: 'communityReports' }),
        P = S.a.register(j),
        k = n('G6rE')
      function I(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var R = function (e, t) {
          var n,
            r = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (r ? P.selectMany(e, r) : []).map(function (t) {
            var n = t.user
            return M(M({}, t), {}, { reporter: k.e.select(e, n) })
          })
        },
        T = Object(p.a)().propsFromState(function () {
          return { reports: R }
        }),
        x = n('3XMw'),
        L = n.n(x),
        A = n('MWbm'),
        D = n('t62R'),
        F = n('855f'),
        H = n('GBcw'),
        B = n('cHvH'),
        N = n('IMA+'),
        K = n('rHpw'),
        z = n('5mJL'),
        U = n('efqG'),
        V = n('21zW'),
        W = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return l.a.createElement(
              L.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              l.a.createElement(D.b, { color: 'primary' }, L.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: F.a.getFormattedCount(e) })
        },
        X = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            r = t.created_at,
            a = t.reporter,
            o = l.a.createElement(H.a, { timestamp: r })
          return a
            ? l.a.createElement(B.a, null, function (e) {
                var r = e.windowWidth
                return l.a.createElement(
                  A.a,
                  { style: n ? G.bottomBorder : null },
                  l.a.createElement(N.a, {
                    avatarUri: a.profile_image_url_https,
                    decoration: o,
                    displayMode: 'UserCompact',
                    isProtected: a.protected,
                    isVerified: a.verified,
                    name: a.name,
                    screenName: a.screen_name,
                    style: r > K.a.theme.breakpoints.small ? G.userCell : void 0,
                    userId: a.id_str,
                  }),
                  l.a.createElement(
                    z.a,
                    { avatarCell: null },
                    l.a.createElement(D.b, { color: 'gray700', size: 'subtext2', style: G.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        Y = T(function (e) {
          var t = l.a.useState(!1),
            n = w()(t, 2),
            r = n[0],
            a = n[1],
            o = e.reports,
            i = e.tweetCase,
            c = i.report_count,
            s = i.report_created_at_max
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              U.a,
              {
                contentStyle: G.popover,
                onDismiss: function () {
                  a(!1)
                },
                renderContent: function () {
                  return l.a.createElement(
                    A.a,
                    { style: G.contentContainer },
                    o.map(function (e, t) {
                      return l.a.createElement(X, { key: e.id_str, report: e, withBottomBorder: t < o.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: r ? 'forceVisible' : 'forceHidden',
              },
              l.a.createElement(
                D.b,
                {
                  onPress: function () {
                    a(!0)
                  },
                },
                W(c),
              ),
            ),
            l.a.createElement(V.a, null),
            l.a.createElement(H.a, { timestamp: s }),
          )
        }),
        G = K.a.create(function (e) {
          return {
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingBottom: e.spaces.space12,
            },
            contentContainer: { paddingBottom: e.componentDimensions.gutterVertical },
            popover: { maxWidth: '100%' },
            userCell: { width: e.breakpoints.small },
            rule: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Q = n('9EWH')
      function q(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var J = Object(_.f)({ namespace: 'communityCases' }),
        $ = {
          keepTweet: Object(_.c)(J, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Q.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(_.c)(J, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Q.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        ee = Z(Z({}, J), $),
        te = S.a.register(ee),
        ne = n('XOJV'),
        re = function (e, t) {
          var n = t.tweetId
          return n ? ne.a.selectHydrated(e, n) : void 0
        },
        ae = function (e, t) {
          var n = t.tweetId
          return te.select(e, n)
        },
        oe = Object(p.a)()
          .propsFromState(function () {
            return { tweet: re, tweetCase: ae }
          })
          .propsFromActions(function () {
            return { keep: te.keepTweet, dismiss: te.dismissTweet }
          }),
        ie = n('b5s6'),
        ce = n('mjJ+'),
        le = n('0yYu'),
        se = n('/yvb'),
        ue = n('IG7M'),
        me = n('boUI'),
        de = n('zIWA'),
        pe = n('5oT/'),
        fe = n('fz3c'),
        ye = (n('yH/f'), n('h0NW')),
        he = n('n5fo'),
        be = n('6Rrp'),
        ve = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        ge = L.a.ad10c66d,
        Ee = L.a.c6caed9c,
        Oe = function (e) {
          return l.a.createElement(D.b, null, e)
        },
        Ce = function (e) {
          var t = e.screenName
          switch (e.type) {
            case ve.Hidden:
              var n = (function (e) {
                  return l.a.createElement(L.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                r = [{ label: Oe(n), decoration: _e }]
              return l.a.createElement(ye.a, { accessibilityLabel: ge, containerStyle: we.container, items: r })
            case ve.Kept:
              var a = (function (e) {
                  return l.a.createElement(L.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                o = [{ label: Oe(a), decoration: Se }]
              return l.a.createElement(ye.a, { accessibilityLabel: Ee, containerStyle: we.container, items: o })
            default:
              return null
          }
        },
        we = K.a.create(function (e) {
          return {
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            container: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        _e = l.a.createElement(he.a, { style: we.icon }),
        Se = l.a.createElement(be.a, { style: we.icon })
      function je(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ke = { page: 'reported_tweets', component: 'tweet' },
        Ie = L.a.f1d9930c,
        Me = L.a.a219e217,
        Re = L.a.fa524057,
        Te = L.a.g30bc699,
        xe = L.a.f0306107,
        Le = L.a.b99364a5,
        Ae = oe(function (e) {
          var t,
            n = l.a.useContext(v.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            r = e.dismiss,
            a = e.keep,
            o = e.tweet,
            i = e.tweetCase,
            c = e.tweetId,
            u = null == o || null === (t = o.user) || void 0 === t ? void 0 : t.screen_name,
            m = l.a.useCallback(
              function (e) {
                if (o && u) {
                  var t = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: Te({ screenName: u }),
                      Icon: me.a,
                      link: '/'.concat(u),
                    },
                    {
                      text: xe,
                      Icon: de.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(fe.a.Tweet, '/').concat(o.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: ke },
                      },
                      onClick: function () {
                        e()
                      },
                    },
                  ]
                  return (
                    n &&
                      t.push({
                        text: Le({ screenName: u }),
                        Icon: pe.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(fe.a.RemoveCommunityMember, '/').concat(o.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: ke },
                        },
                        onClick: function () {
                          e()
                        },
                      }),
                    l.a.createElement(ce.a, { items: t, onCloseRequested: e })
                  )
                }
                return null
              },
              [o, u, n],
            ),
            d = function () {
              a(c)
            },
            p = function () {
              r(c)
            }
          if (u && (null == o ? void 0 : o.reportingVisibility) === fe.b.HiddenCommunityTweet)
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(Ce, { screenName: u, type: ve.Hidden }),
              l.a.createElement(le.a, null),
            )
          if (
            (null != i && i.isDismissed) ||
            'community_tweet_member_removed' === (null == o ? void 0 : o.limited_actions)
          )
            return null
          if (u && null != i && i.isKept)
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(Ce, { screenName: u, type: ve.Kept }),
              l.a.createElement(le.a, null),
            )
          if (!i) return null
          return l.a.createElement(
            s.a,
            { viewType: 'tweet_moderation_case' },
            l.a.createElement(
              A.a,
              { style: De.container },
              l.a.createElement(
                A.a,
                { style: De.reportsBar },
                l.a.createElement(Y, { tweetCase: i }),
                l.a.createElement(ue.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: m,
                  style: De.menu,
                }),
              ),
              l.a.createElement(ie.a, { tweetId: c }),
              o
                ? l.a.createElement(B.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= K.a.theme.breakpoints.small
                    return l.a.createElement(
                      A.a,
                      { style: [De.buttons, t && De.buttonsMobile] },
                      l.a.createElement(
                        se.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(fe.a.HideCommunityTweet, '/').concat(c),
                            state: { scribeNamespace: Pe(Pe({}, ke), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [De.button, t && De.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Ie,
                      ),
                      l.a.createElement(
                        se.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: d,
                          size: 'large',
                          style: [De.button, t && De.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Re,
                      ),
                    )
                  })
                : l.a.createElement(
                    A.a,
                    { style: De.buttons },
                    l.a.createElement(
                      se.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: p,
                        style: De.button,
                        type: 'primaryOutlined',
                      },
                      Me,
                    ),
                  ),
            ),
            l.a.createElement(le.a, null),
          )
        }),
        De = K.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            buttonsMobile: { justifyContent: 'space-between' },
            button: { marginRight: e.spaces.space12 },
            buttonMobile: { flex: 1 },
            container: { marginHorizontal: e.spaces.space20 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            hiddenTweetContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            menu: { marginLeft: 'auto' },
            reportsBar: { marginVertical: e.spaces.space16, flexDirection: 'row' },
          }
        }),
        Fe = n('hqKg'),
        He = n('wAC9')
      function Be(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Be(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Be(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ke = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        ze = function () {
          return Object(Fe.createSelector)(Ke, function (e) {
            return e
              ? (function (e) {
                  return Object(He.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return Ne(Ne({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Ue = Object(p.a)()
          .propsFromState(function () {
            return { sliceModule: ze() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Ve = n('FIs5'),
        We = n('yoO3'),
        Xe = n('VS6U'),
        Ye = n('FS1z'),
        Ge = L.a.c045c7b6,
        Qe = L.a.dffb0774,
        qe = L.a.cbb2a93c,
        Ze = Ue(function (e) {
          var t = l.a.useContext(v.a).featureSwitches,
            n = e.community,
            r = e.history,
            a = e.sliceModule,
            o = n.id_str,
            i = n.name,
            c = (n || []).rules,
            s = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            u = t.isTrue('responsive_web_communities_slices_enabled'),
            m = a
              ? l.a.createElement(Ye.a, {
                  module: a,
                  noItemsRenderer: function () {
                    return l.a.createElement(Ve.a, { header: Qe, message: qe })
                  },
                  renderer: function (e) {
                    return l.a.createElement(Ae, { tweetId: e })
                  },
                })
              : null
          return l.a.createElement(
            We.a,
            { behavioralEventViewType: 'reported_tweets' },
            l.a.createElement(Xe.a, {
              backLocation: '/i/communities/'.concat(o),
              history: r,
              primaryContent: u ? m : null,
              sidebarContent: l.a.createElement(g.a, {
                communityId: o,
                rulesLimit: null == c ? void 0 : c.length,
                withCommunityRules: s,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: i,
              title: Ge,
            }),
          )
        }),
        Je = n('Ty5D')
      function $e(e) {
        e.analytics
        var t = e.community,
          n = i()(e, ['analytics', 'community']),
          r = n.match.path
        return Object(u.c)(t.role)
          ? l.a.createElement(
              s.a,
              { viewType: 'community' },
              l.a.createElement(
                Je.e,
                null,
                l.a.createElement(
                  Je.c,
                  { exact: !0, path: ''.concat(r, '/reported_tweets') },
                  l.a.createElement(Ze, a()({}, n, { community: t })),
                ),
                l.a.createElement(Je.c, null, l.a.createElement(b.b, n)),
              ),
            )
          : l.a.createElement(b.b, n)
      }
      function et(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          r = e.fetchCommunityIfNeeded,
          o = e.fetchStatus,
          c = i()(e, ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus']),
          s = c.match.params.communityId,
          u = n(),
          m = l.a.useCallback(
            function () {
              s && r(s).catch(u)
            },
            [s, u, r],
          )
        return (
          l.a.useEffect(
            function () {
              return m()
            },
            [m],
          ),
          l.a.createElement(h.a, {
            fetchStatus: o,
            onRequestRetry: m,
            render: function () {
              return t ? l.a.createElement($e, a()({}, c, { community: t })) : null
            },
          })
        )
      }
      t.default = y(et)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      n('MvUL'), n('KqXw'), n('2G9S')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('3XMw'),
        i = n.n(o),
        c = n('M2mT'),
        l = n('Ty5D'),
        s = n('MWbm'),
        u = n('mw9i'),
        m = n('0yYu'),
        d = n('/yvb'),
        p = n('rHpw'),
        f = i.a.i2209530
      function y(e) {
        var t = e.children,
          n = e.communityId,
          r = e.onSubmit,
          o = e.rightControl,
          i = e.screenType,
          p = e.secondaryBar,
          y = e.submitDisabled,
          b = e.subtitle,
          v = e.title,
          g = e.withBottomBorder,
          E = e.withDetailOpen,
          O = Object(l.g)(),
          C = 'secondaryRoot' === i,
          w = '/i/communities/'.concat(n),
          _ = ''.concat(w, '/tools'),
          S = C ? w : _,
          j = a.a.useCallback(
            function () {
              C ? O.replace(S) : O.goBack({ backLocation: S })
            },
            [S, O, C],
          )
        return a.a.createElement(
          c.a,
          {
            backLocation: S,
            onBackClick: j,
            rightControl: o,
            screenType: i,
            secondaryBar: p,
            showSubtitleOnWideDetail: !1,
            subtitle: b,
            title: v,
            withBottomBorder: g,
            withDetailOpen: E,
          },
          a.a.createElement(
            u.a,
            { style: h.contentRoot },
            a.a.createElement(s.a, { style: h.chilrenRoot }, t),
            r
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(m.a, null),
                  a.a.createElement(
                    u.a,
                    { style: h.buttonContainer },
                    a.a.createElement(d.a, { disabled: y, onPress: r, style: h.button, type: 'brandFilled' }, f),
                  ),
                )
              : null,
          ),
        )
      }
      var h = p.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(p.a.iPhoneOffsetBottom, ')'),
          },
          chilrenRoot: { paddingBottom: e.spaces.space12 },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: e.spaces.space12,
          },
          button: { marginHorizontal: e.spaces.space12 },
        }
      })
    },
    mys5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditRuleScreen', function () {
          return F
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(o),
        c = n('v6aA'),
        l = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('1Idg'),
        p = function (e, t) {
          return Object(s.z)(e, s.h)
        },
        f = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: p }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              editRule: l.c.editRule,
              removeRule: l.c.removeRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_rule' }),
        y = n('k49u'),
        h = n('jHSc'),
        b = n('3XMw'),
        v = n.n(b),
        g = n('5FtR'),
        E = n('OwKm'),
        O = n('AfjF'),
        C = n('MWbm'),
        w = n('/yvb'),
        _ = n('jtO7'),
        S = n('4zmP'),
        j = n('eb3s'),
        P = n('rHpw'),
        k = v.a.h99020ef,
        I = v.a.i2209530,
        M = v.a.a1c93d73,
        R = v.a.f74a5adb,
        T = v.a.fbb0ed91,
        x = v.a.gea6cc19,
        L = v.a.hed35471,
        A = v.a.c8677445,
        D = v.a.c3a0d44e
      function F(e) {
        var t = i.a.useContext(c.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          r = e.community,
          o = e.createLocalApiErrorHandler,
          l = e.editRule,
          s = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          p = e.shouldShowRuleInformEducation,
          f = r.id_str,
          b = r.rules,
          v = i.a.useState(''),
          P = a()(v, 2),
          F = P[0],
          B = P[1],
          N = i.a.useState(''),
          K = a()(N, 2),
          z = K[0],
          U = K[1],
          V = i.a.useState(!1),
          W = a()(V, 2),
          X = W[0],
          Y = W[1],
          G = i.a.useState(''),
          Q = a()(G, 2),
          q = Q[0],
          Z = Q[1],
          J = i.a.useState(!1),
          $ = a()(J, 2),
          ee = $[0],
          te = $[1],
          ne = i.a.useState(!1),
          re = a()(ne, 2),
          ae = re[0],
          oe = re[1],
          ie = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                r = e.valid
              B(n), U(t), Y(r)
            },
            [B, U, Y],
          ),
          ce = i.a.useCallback(
            function () {
              var e = o({
                customErrorHandler: function (e) {
                  var t = a()(e.errors, 1)[0],
                    n = t.code === y.a.GenericBadRequest && t.message ? t.message : M
                  return Z(n), Y(!1), []
                },
              })
              'string' == typeof d &&
                l(f, { ruleId: d, name: F, description: z })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(f, '/tools/rules') })
                  })
                  .catch(e)
            },
            [f, F, z, d, l, s, o],
          ),
          le = i.a.useCallback(
            function () {
              var e = o({
                customErrorHandler: function (e) {
                  var t = a()(e.errors, 1)[0],
                    n = t.code === y.a.GenericBadRequest && t.message ? t.message : M
                  return Z(n), te(!1), []
                },
              })
              'string' == typeof d &&
                u(f, { ruleId: d })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(f, '/tools/rules') })
                  })
                  .catch(e)
            },
            [f, d, u, s, o],
          )
        if (!d || !m) return i.a.createElement(g.a, { to: '/i/communities/'.concat(f, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = i.a.createElement(
            w.a,
            {
              disabled: !X,
              onPress: function () {
                p ? oe(!0) : ce()
              },
              size: 'small',
              type: 'brandFilled',
            },
            I,
          ),
          de = 1 === b.length,
          pe = t
            ? i.a.createElement(
                C.a,
                { style: H.delete },
                i.a.createElement(_.a, {
                  color: 'red500',
                  disabled: de,
                  label: T,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          fe = de ? i.a.createElement(C.a, { style: H.callout }, i.a.createElement(S.a, { text: R })) : void 0,
          ye = ee
            ? i.a.createElement(j.a, {
                cancelButtonLabel: D,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: x,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: le,
                text: L,
              })
            : void 0,
          he = ae
            ? i.a.createElement(O.a, {
                onCancel: function () {
                  oe(!1)
                },
                onConfirm: function () {
                  n(), ce(), oe(!1)
                },
              })
            : void 0
        return i.a.createElement(
          h.b,
          { behavioralEventViewType: 'rules', history: s, rightControl: me, title: k },
          fe,
          i.a.createElement(E.a, { description: se || '', errorText: q, name: ue, onChange: ie }),
          pe,
          ye,
          he,
        )
      }
      t.default = f(F)
      var H = P.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        h = n.n(y),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        E = n.n(g),
        O = n('pXBW'),
        C = n('6/RC'),
        w = n('UIzd'),
        _ = n.n(w),
        S = n('kGix')
      n.d(t, 'a', function () {
        return S.a
      })
      var j = n('fs1G'),
        P = n('0KEI'),
        k = n('lU4h'),
        I = n.n(k),
        M = n('21nk'),
        R = n.n(M),
        T = n('bCEw'),
        x = n.n(T),
        L = n('Ud88'),
        A = n.n(L)
      function D(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var F = function (e) {
          return (0, e.render)({ fetchStatus: S.a.LOADING, data: null, error: null, retry: j.a })
        },
        H = (function (e) {
          d()(n, e)
          var t = D(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(a))), v()(u()(e), 'state', { error: null }), e
          }
          return (
            l()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof O.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(E.a.Component),
        B = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = R()(t, n)
          return r({ fetchStatus: S.a.LOADED, data: a, error: null, retry: j.a })
        },
        N = function (e, t) {
          if (C.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                o = void 0 === r ? 'store-or-network' : r,
                i = n.render,
                c = n.variables,
                l = x()(e),
                s = a()(l, 2),
                u = s[0],
                m = s[1],
                d = Object(P.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = I()(c),
                f = a()(p, 1)[0],
                y = E.a.useCallback(
                  function () {
                    m(f, { fetchPolicy: 'network-only' })
                  },
                  [m, f],
                )
              return (
                E.a.useLayoutEffect(
                  function () {
                    m(f, { fetchPolicy: o })
                  },
                  [o, m, f],
                ),
                u
                  ? E.a.createElement(
                      E.a.Suspense,
                      { fallback: E.a.createElement(F, { render: i }) },
                      E.a.createElement(
                        H,
                        { errorHandler: d(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: S.a.FAILED, error: t, data: null, retry: n })
                            : E.a.createElement(B, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var o = r.render,
              i = r.variables,
              c = A()(),
              l = Object(P.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = I()(i),
              u = a()(s, 1)[0],
              m = n.get(c)
            if (m) return m
            var d = E.a.lazy(function () {
              return _()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: S.a.LOADED, data: e, error: null, retry: j.a })
                  },
                  function (e) {
                    return e instanceof O.a
                      ? (l(t.errorConfig.options || {})(e),
                        o({ fetchStatus: S.a.FAILED, data: null, error: e, retry: j.a }))
                      : E.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return E.a.createElement(E.a.Suspense, null, E.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddRuleScreen', function () {
          return k
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(o),
        c = n('v6aA'),
        l = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          return Object(s.z)(e, s.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              createRule: l.c.createRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_ADD_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'add_rule' }),
        f = n('k49u'),
        y = n('jHSc'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('OwKm'),
        g = n('AfjF'),
        E = n('/yvb'),
        O = n('eb3s'),
        C = b.a.j560c8ea,
        w = b.a.i2209530,
        _ = b.a.gaa3239a,
        S = b.a.a67445d5,
        j = b.a.fcbe0992,
        P = b.a.j24c37b2
      function k(e) {
        var t = i.a.useContext(c.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          r = e.community,
          o = e.createLocalApiErrorHandler,
          l = e.createRule,
          s = e.history,
          u = e.shouldShowRuleInformEducation,
          m = r.id_str,
          d = r.rules,
          p = i.a.useState(''),
          h = a()(p, 2),
          b = h[0],
          k = h[1],
          I = i.a.useState(''),
          M = a()(I, 2),
          R = M[0],
          T = M[1],
          x = i.a.useState(!1),
          L = a()(x, 2),
          A = L[0],
          D = L[1],
          F = i.a.useState(!1),
          H = a()(F, 2),
          B = H[0],
          N = H[1],
          K = i.a.useState(''),
          z = a()(K, 2),
          U = z[0],
          V = z[1],
          W = i.a.useState(!1),
          X = a()(W, 2),
          Y = X[0],
          G = X[1],
          Q = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                r = e.valid
              V(''), k(n), T(t), D(r)
            },
            [k, T, D],
          ),
          q = i.a.useCallback(
            function () {
              N(!0)
              var e = o({
                customErrorHandler: function (e) {
                  var t = a()(e.errors, 1)[0],
                    n = t.code === f.a.GenericBadRequest && t.message ? t.message : _
                  return V(n), D(!1), []
                },
              })
              l(m, { name: b, description: R })
                .then(function () {
                  s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, R, l, s, o],
          ),
          Z = i.a.useCallback(
            function () {
              u ? G(!0) : q()
            },
            [q, u],
          ),
          J = i.a.createElement(E.a, { disabled: !A, onPress: Z, size: 'small', type: 'brandFilled' }, w),
          $ = d.length >= t,
          ee = i.a.createElement(O.a, {
            confirmButtonLabel: P,
            headline: S,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: j({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = Y
            ? i.a.createElement(g.a, {
                onCancel: function () {
                  G(!1)
                },
                onConfirm: function () {
                  n(), q(), G(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : i.a.createElement(
              y.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: J, title: C },
              i.a.createElement(v.a, { description: '', errorText: U, name: '', onChange: Q }),
              te,
            )
      }
      t.default = p(k)
    },
    nTxI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesModal', function () {
          return S
        })
      n('7xRU'), n('WNMA'), n('KqXw'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('+Kfv'),
        i = n('PKbs'),
        c = n('egQk'),
        l = n('1Idg'),
        s = n('eSoz'),
        u = n('li/m'),
        m = n('rxPX'),
        d = n('0KEI'),
        p = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || l.a(e, t)
        },
        f = Object(m.a)()
          .propsFromState(function () {
            return { community: p, fetchStatus: l.b, isCommunityMember: l.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: u.b,
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        y = n('MDbM'),
        h = n('jHSc'),
        b = n('3XMw'),
        v = n.n(b),
        g = n('5FtR'),
        E = n('t62R'),
        O = n('/yvb'),
        C = n('rHpw'),
        w = v.a.h4fbfa57,
        _ = v.a.dc1b14a1,
        S = function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            l = e.fetchStatus,
            s = e.history,
            u = e.isCommunityMember,
            m = e.join,
            d = e.match.params.communityId
          a.a.useEffect(function () {
            d && !t && l !== y.a.LOADED && r(d).catch(n())
          })
          var p,
            f = function () {
              if (t) {
                var e = t.id_str
                m(e)
                  .then(function () {
                    s.push('/i/communities/'.concat(e))
                  })
                  .catch(n())
              }
            }
          if (t) {
            var b = t.name,
              v = t.rules,
              C = t.theme
            return v && v.length && !u
              ? a.a.createElement(
                  o.a,
                  { viewType: 'community' },
                  a.a.createElement(
                    h.b,
                    {
                      behavioralEventViewType: 'rules',
                      history: s,
                      rightControl: a.a.createElement(O.a, { onPress: f, size: 'small', type: 'brandFilled' }, w),
                      title: Object(c.a)({ communityName: b }),
                    },
                    a.a.createElement(i.b, {
                      badgeStyle: P.badgeStyle,
                      headerContainerStyle: P.containerStyle,
                      headerExplanationStyle: P.headerExplanationStyle,
                      heading:
                        ((p = b), a.a.createElement(E.b, { size: 'title4', weight: 'bold' }, _({ communityName: p }))),
                      rules: v,
                      theme: C,
                    }),
                  ),
                )
              : a.a.createElement(g.a, { to: '/i/communities/'.concat(t.id_str) })
          }
          return l === y.a.LOADED ? a.a.createElement(g.a, { to: '/' }) : null
        },
        j = f(S),
        P =
          ((t.default = j),
          C.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              headerExplanationStyle: { marginTop: e.spaces.space8 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
              },
            }
          }))
    },
    nmVb: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, a.default)(e), r = 0; r < n.length; r++) t.push(n[r].hashtag)
          return t
        })
      var a = r(n('yyPN'))
      e.exports = t.default
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'g', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return b
        }),
        n.d(t, 'f', function () {
          return g
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        i = n.n(o),
        c =
          (n('hBpG'),
          n('vrRf'),
          n('WNMA'),
          n('KqXw'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        l = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function d(e, t) {
        var n,
          r = l.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? m(m({}, r.scope), {}, { src: t, q: a }) : null
      }
      function p(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(l.b.WordEnd),
          o = a >= 0 ? n.slice(a) : '',
          i = r.search(l.b.WordBoundary),
          c = o + r.slice(0, i)
        return c.trim() ? { start: a, end: e + i, word: c } : { start: -1, end: -1, word: '' }
      }
      function f() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function y(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function h(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(o))
      }
      var b = Object(c.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        v = 0,
        g = function () {
          return 'typeaheadDropdown-'.concat((v += 1))
        }
    },
    'pd/v': function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        o,
        i,
        c,
        l,
        s,
        u,
        m,
        d,
        p = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'restrictedMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: (a = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  {
                    kind: 'Variable',
                    name: 'restricted_membership_settings',
                    variableName: 'restrictedMembershipSettings',
                  },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (c = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          o,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: a,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  o,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      c,
                      l,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          o,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'FqEbFNXw1mnkDrNk7OQl-Q',
            metadata: {},
            name: 'edit_CommunityRestricted_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(p.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (t.default = p)
    },
    tFuX: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        o,
        i,
        c,
        l,
        s,
        u,
        m,
        d,
        p = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'openMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: (a = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (c = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          o,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: a,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  o,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      c,
                      l,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          o,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'T8cVbovU4L1jOLVfHdJ-Tg',
            metadata: {},
            name: 'edit_CommunityOpen_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(p.hash = 'ea1908fb41cb57016d070125122b615d'), (t.default = p)
    },
    tnnC: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      t.default = r
    },
    tot2: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityPeopleScreen', function () {
          return S
        })
      n('vrRf')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('+Kfv'),
        i = n('es0u'),
        c = n('XtoV'),
        l = n('1Idg'),
        s = n('eSoz'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { community: l.a, communityId: l.c, screenName: l.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        p = n('3XMw'),
        f = n.n(p),
        y = n('gDCe'),
        h = n('yoO3'),
        b = n('VS6U'),
        v = n('k/OQ'),
        g = n('krnS'),
        E = n('Ty5D'),
        O = f.a.h5245afa,
        C = f.a.dc6ce7b4,
        w = f.a.f8321d82,
        _ = f.a.ga2aa43c,
        S = a.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            r = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            s = e.history,
            u = e.location
          a.a.useEffect(
            function () {
              n && l(n).catch(r())
            },
            [n, r, l],
          )
          var m = (null == u ? void 0 : u.pathname) && u.pathname.indexOf('members') > 0,
            d = m ? C : _,
            p = a.a.useMemo(
              function () {
                return n
                  ? [
                      { to: { pathname: '/i/communities/'.concat(n, '/members'), state: u.state }, label: w, key: w },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: u.state },
                        label: _,
                        key: _,
                      },
                    ]
                  : []
              },
              [n, u.state],
            ),
            f = n
              ? a.a.createElement(
                  E.e,
                  null,
                  a.a.createElement(
                    E.c,
                    { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                    a.a.createElement(
                      o.a,
                      { viewType: 'all' },
                      a.a.createElement(g.b, { communityId: n, mode: g.a.Members }),
                    ),
                  ),
                  a.a.createElement(
                    E.c,
                    { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                    a.a.createElement(
                      o.a,
                      { viewType: 'moderators' },
                      a.a.createElement(y.a, { community: t }),
                      a.a.createElement(g.b, { communityId: n, mode: g.a.Moderators }),
                    ),
                  ),
                )
              : null
          return a.a.createElement(
            o.a,
            { viewType: 'community' },
            a.a.createElement(
              h.a,
              { behavioralEventViewType: 'members' },
              a.a.createElement(b.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: O,
                history: s,
                primaryContent: f,
                rightControl: m ? a.a.createElement(c.a, { community: t }) : null,
                secondaryBar: a.a.createElement(v.a, { accessibilityLabel: d, links: p }),
                sidebarContent: a.a.createElement(i.a, null),
                title: C,
              }),
            ),
          )
        }),
        j = d(S)
      t.default = j
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateButton', function () {
          return Qe
        }),
        n.d(t, 'CommunitiesScreen', function () {
          return qe
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('vrRf'), n('ERkP')),
        v = n.n(b),
        g = n('+Kfv'),
        E = n('es0u'),
        O = n('1Idg'),
        C = n('RqPI'),
        w = n('li/m'),
        _ = n('G6rE'),
        S = n('rxPX'),
        j = n('0KEI'),
        P = function (e, t) {
          var n = O.j(e, t)
          if (n) return _.e.selectByScreenName(e, n)
        },
        k = Object(S.a)()
          .propsFromState(function () {
            return { communitiesActions: C.f, hasCommunityMemberships: w.d, screenName: O.j, user: P }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: _.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        I = n('GOQE'),
        M = n('3XMw'),
        R = n.n(M),
        T = n('5oT/'),
        x =
          (n('z84I'),
          n('M+/F'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('ho0z'),
          n('tVqn'),
          n('uFXj'),
          n('v6aA')),
        L = 'community-thumbnail-image',
        A = 'community-thumbnail-name-container',
        D = n('MWbm'),
        F = n('rHpw'),
        H = n('X00g'),
        B = n('htQn'),
        N = n('9Xij'),
        K = n('TIdA'),
        z = n('A91F'),
        U = n('t62R'),
        V = n('YeIG'),
        W = n('oQhu')
      function X(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var G = { type: 'serversideContextKey', serversideContextType: 'community' },
        Q = Object(W.a)(function (e) {
          return Y(Y({}, G), {}, { serversideContextId: e })
        }),
        q = F.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space4,
              marginHorizontal: e.spaces.space4,
              marginTop: e.spaces.space2,
              marginBottom: e.spaces.space8,
              borderRadius: e.borderRadii.large,
            },
            container: {
              width: 'calc(('.concat(F.a.theme.spaces.space36, ' * 3) + ').concat(F.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        Z = function (e) {
          var t = v.a.useContext(x.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            r = n.id_str,
            a = n.media,
            o = n.name,
            i = n.theme
          if (Object(V.a)(null == a ? void 0 : a.image) || !o) return null
          var c = null == a ? void 0 : a.image,
            l = null == a ? void 0 : a.crop,
            s = F.a.theme.aspectRatios.communityBanner,
            u = t ? H.a.getCommunityBackgroundColor(i) : F.a.theme.colors.translucentBlack77
          return c
            ? v.a.createElement(
                g.a,
                { clientEntity: Q(r || ''), viewType: 'thumbnail' },
                v.a.createElement(
                  B.a,
                  { link: '/i/communities/'.concat(r), style: q.root },
                  v.a.createElement(
                    D.a,
                    { style: q.container },
                    v.a.createElement(
                      N.a,
                      { ratio: s },
                      v.a.createElement(K.a, {
                        accessibilityLabel: '',
                        aspectMode: z.a.exact(s),
                        backgroundColor: F.a.theme.colors.gray300,
                        cropCandidates: l,
                        image: c,
                        testID: L,
                      }),
                    ),
                    v.a.createElement(
                      D.a,
                      { style: [q.name, { backgroundColor: u }], testID: A },
                      v.a.createElement(
                        U.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        o.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        J = n('eSoz'),
        $ = n('o3oN'),
        ee = function (e) {
          var t = Object($.c)(e)
          return J.c.selectMany(e, t)
        },
        te = Object(S.a)()
          .propsFromState(function () {
            return { communities: ee, fetchStatus: $.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: $.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        ne = n('kGix'),
        re = n('6iuV'),
        ae = n('rC8y'),
        oe = R.a.d228a9a0,
        ie = v.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityMemberships,
            a = e.fetchStatus,
            o = e.location.pathname
          v.a.useEffect(
            function () {
              a === ne.a.NONE && r().catch(n())
            },
            [n, r, a],
          )
          var i = v.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return v.a.createElement(Z, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(V.a)(t)
            ? null
            : v.a.createElement(
                v.a.Fragment,
                null,
                v.a.createElement(re.a, { style: [ce.paddingHorizontal, ce.bottomBorder] }, i),
                t.length > 10 &&
                  v.a.createElement(
                    D.a,
                    { style: ce.bottomBorder },
                    v.a.createElement(ae.a, { link: '/'.concat(o, '/memberships'), text: oe }),
                  ),
              )
        }),
        ce = F.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            paddingHorizontal: { paddingHorizontal: e.spaces.space4 },
            bottomBorder: {
              borderBottomWidth: e.spaces.space1,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        le = te(ie),
        se = n('WpDa'),
        ue = n('ZNT5'),
        me = Object(ue.a)({
          timelineId: 'communitiesMainTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMainTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_MAIN_TIMELINE',
          perfKey: 'communitiesMainTimeline',
          formatResponse: se.a,
        }),
        de = n('OUEC'),
        pe = n('dwig'),
        fe = n('0+qk'),
        ye = n('7BdX'),
        he = n('fTQJ'),
        be = n('QRqA'),
        ve = n('FIs5'),
        ge = n('mw9i')
      function Ee(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Oe = R.a.c63602d3,
        Ce = R.a.d7346631,
        we = R.a.fbd12fea,
        _e = (function (e) {
          u()(n, e)
          var t = Ee(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              h()(
                l()(e),
                '_getModule',
                Object(W.a)(function () {
                  return me
                }),
              ),
              h()(l()(e), '_renderEmptyTimeline', function () {
                return v.a.createElement(ve.a, { header: Ce, message: we })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    r = e.isLoggedInUser,
                    a = e.location,
                    o = this._getModule(),
                    i = this._c9sParticipationEnabled && t ? v.a.createElement(fe.a, { history: n }) : null
                  return r && o
                    ? v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(be.a, null),
                        v.a.createElement(
                          pe.a,
                          { container: ge.a, fab: i },
                          v.a.createElement(le, { location: a }),
                          v.a.createElement(he.a, {
                            entryConfiguration: de.a,
                            module: o,
                            prerollDisplayLocation: ye.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: Oe,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(_e, 'contextType', x.a)
      var Se = _e,
        je = n('wl7o'),
        Pe = n('wa7Z'),
        ke = n('hqKg'),
        Ie = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Me = function () {
          return Object(ke.createSelector)(Ie, function (e) {
            return e
              ? (function (e) {
                  return Object(ue.a)({
                    timelineId: 'communityMemberships-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchCommunityMemberships
                    },
                    getEndpointParams: function (t) {
                      var n = t.cursor
                      return { cursor: 'string' == typeof n ? n : void 0, userId: e }
                    },
                    context: 'FETCH_COMMUNITY_MEMBERSHIPS_TIMELINE',
                    perfKey: 'communityMemberships',
                    formatResponse: se.a,
                  })
                })(e)
              : void 0
          })
        },
        Re = Object(S.a)()
          .propsFromState(function () {
            return {
              urtModule: Me(),
              sliceModule: Object(ke.createSelector)(Ie, function (e) {
                return e ? Object(Pe.a)(e) : void 0
              }),
            }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Te = n('yoO3'),
        xe = n('FS1z')
      function Le(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Ae = R.a.c63602d3,
        De = R.a.d7346631,
        Fe = R.a.hb01fe46,
        He = (function (e) {
          u()(n, e)
          var t = Le(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(
                l()(e),
                '_slicesEnabled',
                e.context.featureSwitches.isTrue('responsive_web_communities_slices_enabled'),
              ),
              h()(l()(e), '_renderCommunityCell', function (e) {
                return v.a.createElement(je.a, { communityId: e, key: e })
              }),
              h()(l()(e), '_renderEmptyState', function () {
                return e.props.isLoggedInUser ? v.a.createElement(ve.a, { header: De, message: Fe }) : null
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.sliceModule,
                    n = e.urtModule
                  return this._slicesEnabled
                    ? t
                      ? v.a.createElement(xe.a, {
                          module: t,
                          noItemsRenderer: this._renderEmptyState,
                          renderer: this._renderCommunityCell,
                        })
                      : null
                    : n
                    ? v.a.createElement(
                        Te.a,
                        { behavioralEventViewType: 'all' },
                        v.a.createElement(he.a, {
                          entryConfiguration: de.a,
                          module: n,
                          refreshControl: null,
                          renderEmptyState: this._renderEmptyState,
                          title: Ae,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(He, 'contextType', x.a)
      var Be = Re(He),
        Ne = n('5FtR'),
        Ke = n('Y6L+'),
        ze = n('VS6U'),
        Ue = n('/yvb'),
        Ve = n('Ty5D')
      function We(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Xe = R.a.h02a6fe5,
        Ye = R.a.c63602d3,
        Ge = R.a.a226497c,
        Qe = v.a.memo(function (e) {
          var t = e.communitiesActions
          if (null == t || !t.create) return null
          return v.a.createElement(Ue.a, {
            icon: v.a.createElement(T.a, { accessibilityLabel: Ge, style: Ze.createButton }),
            link: '/i/communities/create',
            size: 'medium',
            type: 'brandText',
          })
        }),
        qe = (function (e) {
          u()(n, e)
          var t = We(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  r = t.history,
                  a = t.location,
                  o = t.user,
                  i = e._isLoggedInUser()
                return v.a.createElement(
                  Ve.e,
                  null,
                  v.a.createElement(
                    Ve.c,
                    { exact: !0, path: '/'.concat(Ke.J, '/communities') },
                    v.a.createElement(Se, { hasCommunityMemberships: n, history: r, isLoggedInUser: i, location: a }),
                  ),
                  v.a.createElement(
                    Ve.c,
                    { exact: !0, path: '/'.concat(Ke.J, '/communities/memberships') },
                    v.a.createElement(Be, { isLoggedInUser: i, user: o }),
                  ),
                )
              }),
              h()(l()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.fetchOneUserByScreenNameIfNeeded,
                  o = n.screenName
                o && a(o).catch(r(I.a))
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: '_isLoggedInUser',
                value: function () {
                  var e = this.props.user,
                    t = this.context.loggedInUserId
                  return (null == e ? void 0 : e.id_str) === t
                },
              },
              {
                key: '_isMembershipsView',
                value: function () {
                  return this.props.location.pathname.indexOf('memberships') >= 0
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.communitiesActions,
                    n = e.history
                  if (this._isLoggedInUser()) {
                    var r = this._isMembershipsView() ? Ye : Xe
                    return v.a.createElement(
                      g.a,
                      { viewType: 'communities' },
                      v.a.createElement(ze.a, {
                        backLocation: '/',
                        history: n,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: v.a.createElement(Qe, { communitiesActions: t }),
                        sidebarContent: v.a.createElement(E.a, null),
                        title: r,
                      }),
                    )
                  }
                  return v.a.createElement(Ne.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(qe, 'contextType', x.a)
      var Ze = F.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        Je = k(qe)
      t.default = Je
    },
    uI9t: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        m = n('AuHH'),
        d = n.n(m),
        p = n('KEM+'),
        f = n.n(p),
        y = (n('z84I'), n('ERkP')),
        h = n.n(y),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('1Pcy')),
        v = n.n(b),
        g = (n('2G9S'), n('ho0z'), n('I4+6')),
        E = n('cm6r'),
        O = n('rHpw'),
        C = n('k/Ka'),
        w = n('MWbm'),
        _ = n('x0mb'),
        S = n('IMYl')
      function j(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                f()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function k(e) {
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
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var I = (function (e) {
          l()(n, e)
          var t = k(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(v()(e), '_radioRef', h.a.createRef()),
              f()(v()(e), '_handleChange', function () {
                var t = e.props,
                  n = t.colorName
                ;(0, t.onChange)(n)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.colorName,
                    r = e.isSelected,
                    a = e.name,
                    o = e.style,
                    i = O.a.theme.colors[n],
                    c = g.a.generate({
                      backgroundColor: O.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return h.a.createElement(
                    w.a,
                    { style: [M.container, o] },
                    h.a.createElement(
                      E.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [M.choice, M.choiceContainer] },
                      h.a.createElement(_.a, { style: [M.choice, { color: i }] }),
                      Object(C.a)('input', {
                        accessibilityLabel: t,
                        name: a,
                        checked: r,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: M.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    r &&
                      h.a.createElement(
                        w.a,
                        { style: [M.choice, M.checkMarkContainer] },
                        h.a.createElement(S.a, { style: [M.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        M = O.a.create(function (e) {
          return {
            container: { alignItems: 'center', paddingVertical: e.spaces.space4, userSelect: 'none' },
            choice: { cursor: 'pointer', height: 45, width: 45 },
            checkMarkContainer: { alignItems: 'center', justifyContent: 'center', position: 'absolute' },
            choiceSelected: { color: e.colors.whiteOnColor, height: 25, width: 25 },
            choiceContainer: { borderRadius: e.borderRadii.infinite },
            transitionStyle: { transitionProperty: 'transform', transitionDuration: '0.1s' },
            focusedStyle: { outlineStyle: 'none' },
            hoverStyle: { transform: [{ scale: 1.1 }] },
            pressedStyle: { transform: [{ scale: 0.95 }] },
            nativeControl: P(
              P({}, O.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        R = I
      function T(e) {
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
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var x = 1,
        L = (function (e) {
          l()(n, e)
          var t = T(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(x, '_LABEL')), (x += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    r = t.autoFocus,
                    a = t.layout,
                    o = t.onChange,
                    i = t.options,
                    c = t.value,
                    l = 'two-rows' === a,
                    s = [A.root, l && A.flexWrap],
                    u = l ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return h.a.createElement(
                    w.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        a = t.colorName
                      return h.a.createElement(R, {
                        accessibilityLabel: n,
                        autoFocus: r && c === a,
                        colorName: a,
                        isSelected: c === a,
                        key: a,
                        name: e._colorPickerId,
                        onChange: o,
                        style: u,
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      f()(L, 'defaultProps', { layout: 'one-row' })
      var A = O.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = L
    },
    ulNE: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        a = n('42ly'),
        o = n('N9G2'),
        i = n('tJVe'),
        c = n('i7Kn'),
        l = n('aoZ+')
      r(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = i(t.length),
              r = l(t, 0)
            return (r.length = a(r, t, t, n, 0, void 0 === e ? 1 : c(e))), r
          },
        },
      )
    },
    vFjZ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var m = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878zm7.512-5.785l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
            }),
            i.a.createElement('path', {
              d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
            }),
          ),
        )
      }
      ;(m.metadata = { width: 24, height: 24 }), (t.a = m)
    },
    wa7Z: function (e, t, n) {
      'use strict'
      var r = n('wAC9')
      t.a = function (e) {
        return Object(r.a)({
          contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMembershipsSlice
          },
          getEndpointParams: function (e) {
            return e
          },
          sliceKey: 'communitiesMembershipsSlice-'.concat(e),
        })
      }
    },
    wl7o: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('ho0z'), n('ERkP')),
        v = n.n(b),
        g = n('+Kfv'),
        E = n('eSoz'),
        O = n('rxPX'),
        C = function (e, t) {
          var n = t.communityId
          return n ? E.c.select(e, n) : void 0
        },
        w = Object(O.a)().propsFromState(function () {
          return { community: C }
        }),
        _ = n('MWbm'),
        S = n('TIdA'),
        j = n('A91F'),
        P = n('rHpw'),
        k = n('MtXG'),
        I = n('t62R'),
        M = n('htQn'),
        R = n('MAI/'),
        T = n('3XMw'),
        x = n.n(T),
        L = n('oQhu'),
        A = n('YeIG')
      function D(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function H(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var B = x.a.d58baa7e,
        N = { type: 'serversideContextKey', serversideContextType: 'community' },
        K = w(
          (function (e) {
            u()(n, e)
            var t = H(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(
                  l()(e),
                  '_getClientEntity',
                  Object(L.a)(function (e) {
                    return F(F({}, N), {}, { serversideContextId: e })
                  }),
                ),
                h()(l()(e), '_renderThumbnail', function (e) {
                  var t = e.crop,
                    n = e.image
                  return v.a.createElement(
                    _.a,
                    { style: z.thumbnailContainer },
                    v.a.createElement(S.a, {
                      accessibilityLabel: '',
                      aspectMode: j.a.SQUARE,
                      backgroundColor: P.a.theme.colors.gray300,
                      cropCandidates: t,
                      image: n,
                    }),
                  )
                }),
                h()(l()(e), '_renderMembersCount', function (t) {
                  var n = e.props.communityId,
                    r = t.member_count
                  if (r) {
                    var a = B(r),
                      o = '/i/communities/'.concat(n, '/members')
                    return v.a.createElement(
                      k.a.Group,
                      null,
                      v.a.createElement(
                        k.a,
                        { link: o },
                        v.a.createElement(
                          I.b,
                          { color: 'gray700' },
                          v.a.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'b38e130b' },
                            v.a.createElement(k.a.Value, null, x.a.ibd0106d({ formattedCount: a })),
                            v.a.createElement(k.a.Label, null, x.a.cface2d0({ count: r })),
                          ),
                        ),
                      ),
                    )
                  }
                  return null
                }),
                e
              )
            }
            return (
              i()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.community,
                      n = e.communityId,
                      r = '/i/communities/'.concat(n)
                    if (t) {
                      var a = t.media,
                        o = t.membersFacepileUrls,
                        i = t.name
                      return v.a.createElement(
                        g.a,
                        { clientEntity: this._getClientEntity(n || ''), viewType: 'community_cell' },
                        v.a.createElement(
                          M.a,
                          { link: r, style: z.root },
                          v.a.createElement(
                            _.a,
                            { style: z.container },
                            v.a.createElement(
                              _.a,
                              { style: z.leftColumn },
                              a && !Object(A.a)(a) ? this._renderThumbnail(a) : null,
                              v.a.createElement(
                                _.a,
                                { style: z.attribution },
                                v.a.createElement(
                                  _.a,
                                  { style: z.name },
                                  v.a.createElement(I.b, { numberOfLines: 1, weight: 'bold' }, i),
                                ),
                                this._renderMembersCount(t),
                                o
                                  ? v.a.createElement(R.a, {
                                      style: z.facepile,
                                      userAvatarSize: 'large',
                                      userAvatarUrls: o,
                                    })
                                  : null,
                              ),
                            ),
                          ),
                        ),
                      )
                    }
                    return null
                  },
                },
              ]),
              n
            )
          })(v.a.Component),
        ),
        z =
          ((t.a = K),
          P.a.create(function (e) {
            return {
              root: {
                backgroundColor: e.colors.cellBackground,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingVertical: e.componentDimensions.gutterVertical,
              },
              container: { flexDirection: 'row' },
              leftColumn: { alignItems: 'center', flexDirection: 'row', flex: 1, flexShrink: 1 },
              attribution: { height: '100%', justifyContent: 'space-between', flexShrink: 1 },
              facepile: { justifyContent: 'flex-start' },
              name: { marginBottom: e.spaces.space2, flexDirection: 'row' },
              thumbnailContainer: {
                width: '96px',
                marginRight: e.spaces.space12,
                borderRadius: e.borderRadii.large,
                overflow: 'hidden',
              },
            }
          }))
    },
    xPe1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitySettingsRouter', function () {
          return pt
        })
      n('WNMA'), n('KqXw'), n('1t7P'), n('jQ/y'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        i = n('rxPX'),
        c = Object(i.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        l = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        s = n.n(l),
        u = n('ddV6'),
        m = n.n(u),
        d = (n('kH1Z'), n('6U7i'), n('jTgF')),
        p = n('AspN'),
        f = n('eSoz'),
        y = n('0KEI'),
        h = function (e, t) {
          var n = t.localMediaId,
            r = n && isFinite(n) ? p.k(e, n) : []
          return m()(r, 1)[0]
        },
        b = Object(i.a)()
          .propsFromState(function () {
            return { localMedia: h }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: f.a,
              removeLocalMediaId: f.e,
              editCommunityBanner: f.d,
              removeBanner: f.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        v = n('3XMw'),
        g = n.n(v),
        E = n('Nh1N'),
        O = n('fS8x'),
        C = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        w = Object(C.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(4), n.e(5), n.e(173)]).then(n.bind(null, 'P68U'))
          },
        }),
        _ = n('eyty'),
        S = n('MWbm'),
        j = n('rHpw'),
        P = n('TIdA'),
        k = n('A91F'),
        I = n('4zmP'),
        M = n('eb3s')
      function R(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var x = g.a.a49f884d,
        L = g.a.ea965b81,
        A = g.a.c1ca95bd,
        D = g.a.e71cdf4d,
        F = g.a.gea6cc19,
        H = g.a.cfd2f35d,
        B = g.a.j35d3ad6,
        N = g.a.f1e8fb21,
        K = g.a.fc2a5c92,
        z = g.a.e405ec21
      var U,
        V,
        W,
        X = j.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Y = b(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            r = e.createLocalApiErrorHandler,
            o = e.editCommunityBanner,
            i = e.hasCustomMedia,
            c = e.localMedia,
            l = e.localMediaId,
            s = e.media,
            u = e.removeBanner,
            p = e.removeLocalMediaId,
            f = a.a.useState(!1),
            y = m()(f, 2),
            h = y[0],
            b = y[1],
            v = a.a.useState(!1),
            g = m()(v, 2),
            C = g[0],
            R = g[1],
            U = a.a.useState(!1),
            V = m()(U, 2),
            W = V[0],
            Y = V[1],
            G = a.a.useState(!1),
            Q = m()(G, 2),
            q = Q[0],
            Z = Q[1],
            J = a.a.useState(!1),
            $ = m()(J, 2),
            ee = $[0],
            te = $[1],
            ne = null == s ? void 0 : s.image,
            re = j.a.theme.aspectRatios.communityBanner,
            ae = r({
              customErrorHandler: function (e) {
                return Z(z), []
              },
            }),
            oe = function (e) {
              return te(!1), e ? t(n, e) : p(n)
            },
            ie = c
              ? T(T({}, c), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: c.mediaFile, cropData: void 0 })
              : void 0,
            ce = ne ? a.a.createElement(P.a, { accessibilityLabel: x, aspectMode: k.a.exact(re), image: ne }) : null
          return a.a.createElement(
            a.a.Fragment,
            null,
            q
              ? a.a.createElement(
                  S.a,
                  { style: X.error },
                  a.a.createElement(I.a, { Icon: E.a, headline: K, text: q, type: 'danger' }),
                )
              : null,
            a.a.createElement(w, {
              accessibilityLabel: L,
              aspectRatio: re,
              currentContent: ce,
              location: _.d.CommunityBanner,
              mediaItem: ee ? c : void 0,
              onChange: function (e) {
                var t = m()(e, 1)[0]
                Z(!1), oe(t), b(!0)
              },
              onFailure: function () {
                Z(z), p(n)
              },
              onRemove:
                i || ee
                  ? function () {
                      oe(), Y(!0)
                    }
                  : void 0,
            }),
            h && c
              ? a.a.createElement(O.a, {
                  defaultAspectRatio: re,
                  media: c,
                  onCancel: function () {
                    b(!1), p(n)
                  },
                  onDone: function () {
                    b(!1), R(!0)
                  },
                  title: A,
                })
              : null,
            C && ie && l
              ? a.a.createElement(O.a, {
                  defaultAspectRatio: 1,
                  media: ie,
                  onCancel: function () {
                    R(!1), b(!0)
                  },
                  onCropDone: function (e) {
                    !(function (e, t) {
                      te(!0),
                        o(n, { mediaId: e, cropData: t }).catch(function (e) {
                          oe(), Object(d.a)(e) ? Z(z) : ae(e)
                        })
                    })(l, e)
                  },
                  onDone: function () {
                    R(!1)
                  },
                  title: D,
                })
              : null,
            W
              ? a.a.createElement(M.a, {
                  cancelButtonLabel: H,
                  confirmButtonLabel: B,
                  confirmButtonType: 'destructiveFilled',
                  headline: F,
                  onCancel: function () {
                    Y(!1)
                  },
                  onConfirm: function () {
                    u(n).catch(ae), Y(!1)
                  },
                  text: N,
                })
              : null,
          )
        }),
        G = Object(i.a)()
          .propsFromActions(function () {
            return {
              editAccess: f.c.editAccess,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        Q = n('mWs5'),
        q = n('Y3cQ'),
        Z = g.a.f713fbd1,
        J = [
          { label: g.a.fd00a769, value: 'Public', helpText: g.a.d0784408 },
          { label: g.a.ce0523a8, value: 'Closed', helpText: g.a.ccfafe8c },
        ],
        $ = G(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.editAccess,
            o = e.history,
            i = t.id_str,
            c = a.a.useState(t.access),
            l = m()(c, 2),
            s = l[0],
            u = l[1],
            d = a.a.useCallback(
              function () {
                r(i, { access: s })
                  .then(function () {
                    o.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [i, s, r, o, n],
            ),
            p = s !== t.access
          return a.a.createElement(
            Q.a,
            { communityId: i, onSubmit: d, submitDisabled: !p, title: Z },
            a.a.createElement(
              S.a,
              { style: ee.root },
              a.a.createElement(q.a, {
                name: 'membershipSetting',
                onChange: function (e, t) {
                  u(t)
                },
                options: J,
                value: s,
              }),
            ),
          )
        }),
        ee = j.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        te = n('n0Rl'),
        ne =
          (n('yH/f'),
          Object.freeze({
            Open: 'CommunityOpenMembershipSettings',
            Restricted: 'CommunityRestrictedMembershipSettings',
          })),
        re = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        ae = Object.freeze({ Disabled: 'NoRequiredApproval', Moderator: 'ModeratorApproval' }),
        oe = n('uDfI'),
        ie = (n('enFi'), n('9SqB')),
        ce = n.n(ie),
        le = void 0 !== U ? U : (U = n('tFuX')),
        se = void 0 !== V ? V : (V = n('pd/v')),
        ue = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case ne.Open:
                t = { __typename: ne.Open }
                break
              case ne.Restricted:
                t = {
                  __typename: ne.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        me = n('Ty5D'),
        de = n('0yYu'),
        pe = n('cCdp'),
        fe = n('Hsf0'),
        ye = n.n(fe),
        he = void 0 !== W ? W : (W = n('tnnC'))
      var be,
        ve,
        ge = n('jAXQ'),
        Ee = n.n(ge),
        Oe = g.a.f713fbd1,
        Ce = [
          { label: g.a.fd00a769, value: ne.Open, helpText: g.a.d0784408 },
          { label: g.a.ce0523a8, value: ne.Restricted, helpText: g.a.bccd6510 },
        ],
        we = g.a.f5b4f127,
        _e = g.a.d2a2687c,
        Se = g.a.d1070fd8,
        je = g.a.id6cb134,
        Pe = g.a.c5d1634d,
        ke = g.a.b983f9e0,
        Ie = void 0 !== be ? be : (be = n('1tGk')),
        Me = function (e) {
          var t,
            n,
            r,
            o,
            i,
            c,
            l,
            s,
            u,
            d,
            p,
            y,
            h,
            b = e.community,
            v = Ee()(Ie, b),
            E = v.membership_settings,
            O = v.rest_id,
            C = (function (e) {
              var t = ye()(he, e)
              switch (t.__typename) {
                case ne.Restricted:
                  return {
                    access: ne.Restricted,
                    invitesPolicy: t.invites_policy,
                    joinApprovalPolicy: t.join_approval_policy,
                  }
                case ne.Open:
                  return { access: ne.Open, invitesPolicy: re.Member, joinApprovalPolicy: ae.Disabled }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            w = a.a.useState(C.access),
            _ = m()(w, 2),
            S = _[0],
            j = _[1],
            P = a.a.useState(C.invitesPolicy),
            k = m()(P, 2),
            I = k[0],
            R = k[1],
            T = a.a.useState(C.joinApprovalPolicy),
            x = m()(T, 2),
            L = x[0],
            A = x[1],
            D = a.a.useState(),
            F = m()(D, 2),
            H = F[0],
            B = F[1],
            N =
              ((t = ce()(le)),
              (n = m()(t, 2)),
              (r = n[0]),
              (o = n[1]),
              (i = ce()(se)),
              (c = m()(i, 2)),
              (l = c[0]),
              (s = c[1]),
              (u = Object(oe.c)()),
              function (e, t) {
                return o || s
                  ? Promise.reject(new Error('Already updating membership settings'))
                  : new Promise(function (n, a) {
                      var o = t.access,
                        i = t.invitesPolicy,
                        c = t.joinApprovalPolicy
                      o === ne.Open
                        ? r({
                            variables: { communityId: e, openMembershipSettings: {} },
                            onCompleted: function (e) {
                              var t = ue(e.community_membership_settings_open_update)
                              t && u(f.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              a(e)
                            },
                          })
                        : o === ne.Restricted &&
                          l({
                            variables: {
                              communityId: e,
                              restrictedMembershipSettings: { invites_policy: i, join_approval_policy: c },
                            },
                            onCompleted: function (e) {
                              var t = ue(e.community_membership_settings_restricted_update)
                              t && u(f.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              a(e)
                            },
                          })
                    })
              }),
            K = Object(me.g)(),
            z = a.a.useMemo(
              function () {
                return { access: S, invitesPolicy: I, joinApprovalPolicy: L }
              },
              [S, I, L],
            ),
            U = a.a.useCallback(function (e, t) {
              j(t)
            }, []),
            V = a.a.useCallback(function (e, t) {
              A(t ? ae.Moderator : ae.Disabled)
            }, []),
            W = a.a.useCallback(function (e, t) {
              R(t ? re.Member : re.Moderator)
            }, []),
            X = a.a.useCallback(
              function () {
                N(O, z).then(function () {
                  K.goBack({ backLocation: '/i/communities/'.concat(O, '/tools/settings') })
                })
              },
              [O, K, z, N],
            ),
            Y = a.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === ne.Restricted && t.access === ne.Restricted) {
                    var n = e.invitesPolicy === re.Member && t.invitesPolicy === re.Moderator,
                      r = e.joinApprovalPolicy === ae.Moderator && t.joinApprovalPolicy === ae.Disabled
                    if (n) return g.a.h4c8d3da
                    if (r) return g.a.f9ca1622
                  }
                  if (e.access === ne.Restricted && t.access === ne.Open) {
                    var a = e.joinApprovalPolicy === ae.Disabled,
                      o = e.joinApprovalPolicy === ae.Moderator
                    if (a) return g.a.d2a327a5
                    if (o) return g.a.daedd9fa
                  }
                })(C, z)
                e ? B(e) : X()
              },
              [C, z, X],
            ),
            G = a.a.useCallback(function () {
              return B(void 0)
            }, []),
            Z =
              ((p = z),
              (y = (d = C).access !== p.access),
              (h =
                d.access === ne.Restricted &&
                (d.invitesPolicy !== p.invitesPolicy || d.joinApprovalPolicy !== p.joinApprovalPolicy)),
              !(y || h))
          return a.a.createElement(
            Q.a,
            { communityId: O, onSubmit: Y, submitDisabled: Z, title: Oe },
            a.a.createElement(q.a, { name: 'membershipSetting', onChange: U, options: Ce, value: S }),
            S === ne.Restricted &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(de.a, null),
                a.a.createElement(pe.a, {
                  checked: L === ae.Moderator,
                  helpText: _e,
                  label: we,
                  name: 'allowRequests',
                  onChange: V,
                }),
                a.a.createElement(pe.a, {
                  checked: I === re.Member,
                  helpText: je,
                  label: Se,
                  name: 'allowInvites',
                  onChange: W,
                }),
              ),
            H &&
              a.a.createElement(M.a, {
                confirmButtonLabel: Pe,
                confirmButtonType: 'primary',
                headline: ke,
                onCancel: G,
                onConfirm: X,
                text: H,
              }),
          )
        },
        Re = n('v//M'),
        Te = void 0 !== ve ? ve : (ve = n('PbB6')),
        xe = Object(te.b)(Te, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Le = function (e) {
          var t = { communityId: e.communityId }
          return a.a.createElement(xe, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                r = e.retry,
                o = null == t ? void 0 : t.community
              return a.a.createElement(Re.a, {
                fetchStatus: n,
                onRequestRetry: r,
                render: function () {
                  return o ? a.a.createElement(Me, { community: o }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ae = n('ROT1'),
        De = Object(i.a)()
          .propsFromActions(function () {
            return {
              editName: f.c.editName,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Fe = n('k49u'),
        He = n('yoO3'),
        Be = g.a.h3c0f1a2,
        Ne = g.a.fc2a5c92,
        Ke = g.a.cb5e6510
      var ze = j.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ue = De(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.editName,
            o = e.history,
            i = t.id_str,
            c = t.name,
            l = a.a.useState(c),
            s = m()(l, 2),
            u = s[0],
            d = s[1],
            p = a.a.useState(!1),
            f = m()(p, 2),
            y = f[0],
            h = f[1],
            b = a.a.useState(void 0),
            v = m()(b, 2),
            g = v[0],
            O = v[1],
            C = a.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === Fe.a.GenericBadRequest && t.message ? t.message : Ke
                    return O(n), h(!0), []
                  },
                })
                r(i, { name: u })
                  .then(function () {
                    o.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, u, r, o, n],
            )
          return a.a.createElement(
            He.a,
            null,
            a.a.createElement(
              Q.a,
              { communityId: i, onSubmit: C, submitDisabled: y, title: Be },
              g
                ? a.a.createElement(
                    S.a,
                    { style: ze.error },
                    a.a.createElement(I.a, { Icon: E.a, headline: Ne, text: g, type: 'danger' }),
                  )
                : void 0,
              a.a.createElement(Ae.a, {
                autoFocus: !0,
                communityName: u,
                onChange: function (e, t) {
                  d(e), h(t)
                },
              }),
            ),
          )
        }),
        Ve = n('U0Qk'),
        We = Object(i.a)()
          .propsFromActions(function () {
            return {
              editPurpose: f.c.editPurpose,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        Xe = g.a.a895549f,
        Ye = g.a.fc2a5c92,
        Ge = g.a.ced22929
      var Qe = j.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        qe = We(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.editPurpose,
            o = e.history,
            i = t.description,
            c = t.id_str,
            l = a.a.useState(i || ''),
            s = m()(l, 2),
            u = s[0],
            d = s[1],
            p = a.a.useState(!1),
            f = m()(p, 2),
            y = f[0],
            h = f[1],
            b = a.a.useState(void 0),
            v = m()(b, 2),
            g = v[0],
            O = v[1],
            C = a.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === Fe.a.GenericBadRequest && t.message ? t.message : Ge
                    return O(n), h(!0), []
                  },
                })
                r(c, { purpose: u })
                  .then(function () {
                    o.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/settings') })
                  })
                  .catch(e)
              },
              [c, u, r, o, n],
            )
          return a.a.createElement(
            He.a,
            null,
            a.a.createElement(
              Q.a,
              { communityId: c, onSubmit: C, submitDisabled: y, title: Xe },
              g
                ? a.a.createElement(
                    S.a,
                    { style: Qe.error },
                    a.a.createElement(I.a, { Icon: E.a, headline: Ye, text: g, type: 'danger' }),
                  )
                : void 0,
              a.a.createElement(Ve.a, {
                autoFocus: !0,
                communityPurpose: u,
                onChange: function (e, t) {
                  d(e), h(t)
                },
              }),
            ),
          )
        }),
        Ze = n('Ig1G'),
        Je = n('x0mb'),
        $e = n('5FtR'),
        et = n('t62R'),
        tt = n('X00g'),
        nt = n('6vad'),
        rt = n('csss'),
        at = g.a.bb081ea1,
        ot = g.a.h3e55b40,
        it = g.a.j8af8ea9,
        ct = g.a.d5f01115,
        lt = g.a.c3c04b70,
        st = { Closed: g.a.ce0523a8, Public: g.a.fd00a769 },
        ut = g.a.f4a98e9e,
        mt = g.a.f713fbd1,
        dt = function (e) {
          var t = e.children
          return a.a.createElement(et.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        pt = function (e) {
          var t = e.community,
            n = e.history,
            r = e.match,
            i = t.access,
            c = t.description,
            l = t.hasCustomMedia,
            s = t.id_str,
            u = t.localMediaId,
            m = t.media,
            d = t.membership_settings,
            p = t.name,
            f = t.theme,
            y = a.a.useContext(o.a).featureSwitches,
            h = y.isTrue('c9s_edit_community_name_enabled'),
            b = y.isTrue('c9s_edit_community_description_enabled'),
            v = y.isTrue('c9s_edit_community_membership_settings_enabled'),
            g = y.isTrue('c9s_request_to_join_enabled'),
            E = y.isTrue('c9s_edit_community_banner_enabled'),
            O = y.isTrue('c9s_edit_community_theme_enabled'),
            C = r.url,
            w = a.a.useMemo(
              function () {
                return g ? (d.__typename === ne.Open ? st.Public : st.Closed) : st[i]
              },
              [i, g, d.__typename],
            ),
            _ = Object(Ze.d)(t),
            S = tt.a.getCommunityThemeDisplayName(_),
            j = tt.a.getCommunityBackgroundColor(f)
          return a.a.createElement(
            me.e,
            null,
            h
              ? a.a.createElement(
                  me.c,
                  { exact: !0, path: ''.concat(C, '/name') },
                  a.a.createElement(Ue, { community: t, history: n }),
                )
              : null,
            b
              ? a.a.createElement(
                  me.c,
                  { exact: !0, path: ''.concat(C, '/purpose') },
                  a.a.createElement(qe, { community: t, history: n }),
                )
              : null,
            g
              ? a.a.createElement(
                  me.c,
                  { exact: !0, path: ''.concat(C, '/membership') },
                  a.a.createElement(Le, { communityId: s }),
                )
              : v
              ? a.a.createElement(
                  me.c,
                  { exact: !0, path: ''.concat(C, '/membership') },
                  a.a.createElement($, { community: t, history: n }),
                )
              : null,
            a.a.createElement(
              me.c,
              { exact: !0, path: ''.concat(C, '/') },
              a.a.createElement(
                Q.a,
                { communityId: s, screenType: 'primaryDetail', title: at },
                E ? a.a.createElement(Y, { communityId: s, hasCustomMedia: l, localMediaId: u, media: m }) : null,
                a.a.createElement(nt.b, { text: ut }),
                a.a.createElement(rt.a, {
                  description: a.a.createElement(dt, null, p),
                  label: ot,
                  link: h ? ''.concat(C, '/name') : void 0,
                }),
                c
                  ? a.a.createElement(rt.a, {
                      description: a.a.createElement(dt, null, c),
                      label: ct,
                      link: b ? ''.concat(C, '/purpose') : void 0,
                    })
                  : null,
                O
                  ? a.a.createElement(rt.a, {
                      description: a.a.createElement(dt, null, S),
                      label: lt,
                      link: O ? ''.concat(C, '/theme') : void 0,
                      renderRightContent: function () {
                        return a.a.createElement(Je.a, { style: [{ color: j }, ft.themeIcon] })
                      },
                    })
                  : null,
                g || v
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(de.a, null),
                      a.a.createElement(nt.b, { text: mt }),
                      a.a.createElement(rt.a, {
                        description: a.a.createElement(dt, null, w),
                        label: it,
                        link: ''.concat(C, '/membership'),
                      }),
                    )
                  : null,
              ),
            ),
            a.a.createElement(me.c, null, a.a.createElement($e.a, { to: ''.concat(C, '/') })),
          )
        },
        ft =
          ((t.default = c(pt)),
          j.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return j
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('yH/f'), n('jwue'), n('+oxZ'), n('ERkP')),
        i = n.n(o),
        c = n('eSoz'),
        l = n('rxPX'),
        s = n('0KEI'),
        u = Object(l.a)()
          .propsFromActions(function () {
            return {
              editTheme: c.c.editTheme,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_THEME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_theme' }),
        m = n('jHSc'),
        d = n('Ig1G'),
        p = n('3XMw'),
        f = n.n(p),
        y = n('MWbm'),
        h = n('X00g'),
        b = n('/yvb'),
        v = n('uI9t'),
        g = n('rHpw'),
        E = f.a.dbda7beb,
        O = f.a.i2209530,
        C = f.a.hcf35d0c,
        w = f.a.da48b72c,
        _ = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        S = {}
      function j(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          r = e.editTheme,
          o = e.history,
          c = t.id_str,
          l = t.theme,
          s = h.a.getCommunityBackgroundColorName(l),
          u = i.a.useState(!1),
          p = a()(u, 2),
          f = p[0],
          g = p[1],
          j = i.a.useState(Object(d.d)(t)),
          k = a()(j, 2),
          I = k[0],
          M = k[1],
          R = i.a.useState(h.a.getCommunityThemeDisplayName(I)),
          T = a()(R, 2),
          x = T[0],
          L = T[1],
          A = i.a.useState(s),
          D = a()(A, 2),
          F = D[0],
          H = D[1],
          B = i.a.useState([]),
          N = a()(B, 2),
          K = N[0],
          z = N[1]
        i.a.useEffect(
          function () {
            var e
            return (
              z(
                ((e = []),
                _.forEach(function (t) {
                  var n = h.a.getCommunityTheme(t),
                    r = h.a.getCommunityBackgroundColorName(n)
                  ;(S[r] = t), e.push({ accessibilityLabel: h.a.getCommunityThemeDisplayName(t), colorName: r })
                }),
                e),
              ),
              function () {
                z([])
              }
            )
          },
          [z],
        )
        var U = i.a.useCallback(
            function () {
              r(c, { theme: I })
                .then(function () {
                  o.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [c, I, r, o, n],
          ),
          V = i.a.createElement(
            b.a,
            { accessibilityLabel: C({ themeName: x }), disabled: !f, onPress: U, size: 'small', type: 'brandFilled' },
            O,
          )
        return i.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: o, rightControl: V, title: E },
          i.a.createElement(
            y.a,
            { style: P.themePickerContainer },
            i.a.createElement(v.a, {
              accessibilityLabel: w,
              layout: 'two-rows',
              onChange: function (e) {
                var n = S[e],
                  r = n !== Object(d.d)(t)
                M(n), L(h.a.getCommunityThemeDisplayName(n)), H(e), g(r)
              },
              options: K,
              value: F,
            }),
          ),
        )
      }
      var P = g.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(j)
    },
  },
])
//# sourceMappingURL=WIPED
