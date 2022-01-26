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
        u = n('5Yy7'),
        s = n.n(u),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('Rqga'), n('2G9S'), n('ERkP')),
        v = n('/yvb'),
        g = n('3XMw'),
        E = n.n(g),
        O = n('3rX5'),
        w = n('rHpw'),
        C = n('MWbm'),
        _ = w.a.create(function (e) {
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
        S = function (e) {
          var t = e.circle,
            n = e.height,
            r = e.width
          return b.createElement(C.a, {
            pointerEvents: 'none',
            style: [_.mask, { width: r, height: n }, t && _.circle],
          })
        },
        j = n('ZvMt'),
        P = n('97Jx'),
        I = n.n(P),
        R = n('m3Bd'),
        M = n.n(R),
        k = n('CHgo'),
        T = n('7ep7')
      function x(e) {
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
          s()(n, e)
          var t = x(n)
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
                  ;(a || n || o) && (r._removeTouchMoveToScrollListener = Object(k.a)(e, r._preventDefaultEvent, !1)),
                    i && (r._removeScrollToScaleListener = Object(k.b)(e, r._preventDefaultEvent, !1))
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
                    var u =
                        ((n = l[0]),
                        (a = l[1]),
                        Math.sqrt(Math.pow(n.pageY - a.pageY, 2) + Math.pow(n.pageX - a.pageX, 2))),
                      s = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      m = s.pageX,
                      d = s.pageY,
                      p = r._previousPositionX ? m - r._previousPositionX : 0,
                      f = r._previousPositionY ? d - r._previousPositionY : 0,
                      y = r._previousTouchDistance ? u - r._previousTouchDistance : 0
                    ;(r._previousPositionX = m), (r._previousPositionY = d), (r._previousTouchDistance = u)
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
              (r._panResponder = T.a.create({
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
                      M()(e, ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel']))
                  return b.createElement(
                    C.a,
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
        })(b.Component),
        L = n('9RkS'),
        D = n('rOXj'),
        H = n('aITJ'),
        F = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        B = n('k/Ka')
      function N(e, t) {
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
            ? N(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var U = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(B.a)(
          'svg',
          z(
            z({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      U.metadata = { width: 24, height: 24 }
      var K = U
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
      function V(e) {
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
      var X = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(B.a)(
          'svg',
          V(
            V({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      X.metadata = { width: 24, height: 24 }
      var Y = X
      function G(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(B.a)(
          'svg',
          Q(
            Q({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
            }),
          ),
        )
      }
      Z.metadata = { width: 24, height: 24 }
      var q = Z
      function J(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ee = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(B.a)(
          'svg',
          $(
            $({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            b.createElement('path', {
              d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
            }),
          ),
        )
      }
      ee.metadata = { width: 24, height: 24 }
      var te = ee
      function ne(e, t) {
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
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ne(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ae = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(B.a)(
          'svg',
          re(
            re({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [F.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            b.createElement('path', {
              d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
            }),
          ),
        )
      }
      ae.metadata = { width: 24, height: 24 }
      var oe = ae
      function ie(e) {
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
      var ce = E.a.d85bc1b8,
        le = E.a.f596ace8,
        ue = E.a.df031fca,
        se = E.a.b40332c5,
        me = E.a.e547b368,
        de = E.a.f7571204,
        pe = E.a.e6e16811,
        fe =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ye = (function (e) {
          s()(n, e)
          var t = ie(n)
          function n(e) {
            var r, o
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(l()(r), '_previousLeft', 0),
              h()(l()(r), '_previousTop', 0),
              h()(l()(r), '_panStyles', { top: 0, left: 0 }),
              h()(l()(r), '_shouldShowZoomControl', function () {
                return (!H.b.isMobileOS() || !D.a.isTouchSupported()) && r.props.withZoomControl
              }),
              h()(l()(r), '_renderControls', function () {
                var e = r.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  a = r.state.aspectRatio,
                  o = t.width / t.height,
                  i = r._shouldShowZoomControl()
                return n || i
                  ? b.createElement(
                      C.a,
                      { style: he.controlsContainer },
                      n
                        ? b.createElement(
                            C.a,
                            { style: he.ratioContainer },
                            b.createElement(v.a, {
                              accessibilityLabel: le,
                              borderColor: 'transparent',
                              color: a === o ? 'primary' : 'gray700',
                              hoverLabel: { label: me },
                              icon: b.createElement(K, null),
                              onPress: r._setAspectRatio(o),
                              size: 'medium',
                            }),
                            b.createElement(v.a, {
                              accessibilityLabel: ue,
                              borderColor: 'transparent',
                              color: a === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: de },
                              icon: b.createElement(Y, null),
                              onPress: r._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            b.createElement(v.a, {
                              accessibilityLabel: se,
                              borderColor: 'transparent',
                              color: 1 === a ? 'primary' : 'gray700',
                              hoverLabel: { label: pe },
                              icon: b.createElement(q, null),
                              onPress: r._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      i
                        ? b.createElement(
                            C.a,
                            { style: he.zoomContainer },
                            b.createElement(L.a, {
                              accessibilityLabel: ce,
                              max: r._maxScale,
                              maxIcon: b.createElement(te, { style: he.icon }),
                              min: 0,
                              minIcon: b.createElement(oe, { style: he.icon }),
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
                  i = j.a.getCoverDimensions({ width: o, height: a }, t),
                  c = i.height
                return { width: i.width * Math.pow(2, e), height: c * Math.pow(2, e) }
              }),
              h()(l()(r), '_getMaskDimensions', function () {
                var e = r.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  a = e.containerWidth,
                  o = j.a.getContainDimensions({ width: a - 50, height: n - 50 }, t),
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
                    c = fe(o / (t.width * i))
                  r.setState({ imageScale: c })
                  var l = r._getUnscaledCropData(),
                    u = l.left,
                    s = l.top
                  ;(r._panStyles.top = s - t.top * i * Math.pow(2, c)),
                    (r._previousTop = r._panStyles.top),
                    (r._panStyles.left = u - t.left * i * Math.pow(2, c)),
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
              (r._maxScale = ((o = e.image), Math.max(Math.min(fe(o.width / 150), fe(o.height / 150), 3), 0.5))),
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
                    u = c.width,
                    s = this.state.containerWidth && this.state.containerHeight
                  return b.createElement(
                    C.a,
                    { style: he.container },
                    b.createElement(
                      A,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: r ? this._handlePinchMove : void 0,
                        onWheel: r ? this._handleWheel : void 0,
                        style: he.root,
                      },
                      s
                        ? b.createElement(
                            b.Fragment,
                            null,
                            b.createElement(O.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: i, height: o },
                              style: he.image,
                            }),
                            b.createElement(S, { circle: t, height: l, width: u }),
                          )
                        : null,
                    ),
                    s ? this._renderControls() : null,
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
        })(b.Component)
      h()(ye, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var he = w.a.create(function (e) {
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
      t.a = ye
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        i = n('Ud88'),
        c = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        l = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        u = l.fetchQueryDeduped,
        s = l.fetchQuery
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
              fetchObservable: u(m, b.request.identifier, function () {
                return m === t.environment && null != f
                  ? m.executeWithSource({ operation: b, source: f })
                  : m.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var v = s(m, b)
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
        u = n('N+ot'),
        s = n.n(u),
        m = n('AuHH'),
        d = n.n(m),
        p = n('ERkP'),
        f = n('rHpw'),
        y = n('MWbm')
      function h(e) {
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
          return s()(this, n)
        }
      }
      var b = (function (e) {
          l()(n, e)
          var t = h(n)
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
                  return p.createElement(y.a, { style: v.root })
                },
              },
            ]),
            n
          )
        })(p.Component),
        v = f.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = b
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
        u = n('N+ot'),
        s = n.n(u),
        m = n('AuHH'),
        d = n.n(m),
        p = n('ERkP'),
        f = n('3XMw'),
        y = n.n(f),
        h = n('rHpw'),
        b = n('+/1j'),
        v = n('MWbm')
      function g(e) {
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
          return s()(this, n)
        }
      }
      var E = y.a.e5b0063d,
        O = 0,
        w = (function (e) {
          l()(n, e)
          var t = g(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(O)), (O += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = E({ title: n })
                  return p.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.createElement(
                      b.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: h.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.createElement(v.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.Component)
      t.a = w
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return m
        })
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        i = n('mw9i'),
        c = n('FIs5'),
        l = n('rHpw'),
        u = o.a.c2117be6,
        s = o.a.c2c4dad3
      function m() {
        return r.createElement(i.a, { style: d.root }, r.createElement(c.a, { header: u, message: s }))
      }
      var d = l.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    AfjF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var r = n('ERkP'),
        a = n('eb3s'),
        o = n('3XMw'),
        i = n.n(o),
        c = i.a.d45ae5e0,
        l = i.a.c1631260,
        u = i.a.d3190bdd,
        s = i.a.ifd6e91b,
        m = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return r.createElement(a.a, {
            cancelButtonLabel: s,
            confirmButtonLabel: u,
            headline: c,
            onCancel: t,
            onConfirm: n,
            text: l,
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
        l = n('sNn6'),
        u = n('rHpw'),
        s = n('MWbm')
      function m(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = u.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: d(
            d({}, u.a.absoluteFillObject),
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
        return c.createElement(l.a, n, function (e) {
          return c.createElement(
            s.a,
            { style: e && p.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? c.createElement(s.a, { pointerEvents: 'none', style: p.overlay }) : null,
          )
        })
      }
    },
    'DV/y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityInviteScreen', function () {
          return te
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = (n('WNMA'), n('KqXw'), n('LW0h'), n('z84I'), n('1Iuc'), n('ERkP')),
        l = n('+Kfv'),
        u = n('eSoz'),
        s = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          var n = t.match.params.communityId
          return n ? u.c.select(e, n) : void 0
        },
        p = Object(s.a)()
          .propsFromState(function () {
            return { community: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_INVITE_SCREEN',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'invite' }),
        f = n('jHSc'),
        y = n('3XMw'),
        h = n.n(y),
        b = n('/yvb'),
        v = (n('2G9S'), n('KhuB')),
        g = n('li/m'),
        E = function (e, t) {
          return t.communityId && t.userId ? v.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        },
        O = Object(s.a)()
          .propsFromState(function () {
            return { inviteActionResult: E }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: g.a,
            }
          }),
        w = h.a.cd133485,
        C = h.a.hb1e378e,
        _ = h.a.bcd6bb0d,
        S = 'primaryFilled',
        j = { viewType: 'invite' }
      var P = O(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            r = e.inviteActionResult,
            a = e.inviteToCommunity,
            o = e.onInvite,
            i = e.onInviteActionResultChange,
            l = e.userId,
            u = e.viewerInvited,
            s = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return w
              switch (e.reason) {
                case 'UserIsMember':
                  return _
                case 'UserIsInvited':
                  return C
                default:
                  return w
              }
            })(r),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return S
              switch (e.reason) {
                case 'UserIsMember':
                  return S
                default:
                  return 'primaryOutlined'
              }
            })(r)
          c.useEffect(
            function () {
              r && i(l, r)
            },
            [r, l, i],
          )
          var d = 'UserCommunityInviteAction' === (null == r ? void 0 : r.__typename)
          return !d && !u
            ? null
            : c.createElement(
                b.a,
                {
                  accessibilityLabel: s,
                  behavioralEventContext: j,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      a(t, l)
                        .then(function () {
                          return o && o(l)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                s,
              )
        }),
        I = n('5FtR'),
        R = n('4e/K'),
        M = n('MWbm'),
        k = n('4zmP'),
        T = n('t62R'),
        x = n('FIs5'),
        A = n('rHpw'),
        L = n('GZwR')
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var F = h.a.b139b549,
        B = h.a.dfddd842,
        N = h.a.cf4898a0,
        z = h.a.a3b3939a,
        U = h.a.db4f0cc9,
        K = h.a.h252ede6,
        W = h.a.a5cd93f9,
        V = h.a.ba5a88e3,
        X = h.a.i6568549,
        Y = h.a.b772cd65,
        G = h.a.b4f16d00,
        Q = h.a.ja1387a7,
        Z = h.a.b92a21d8,
        q = h.a.ae85768c,
        J = { viewType: 'done' },
        $ = [],
        ee = [L.a.CommunityUsers]
      function te(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          r = e.fetchCommunityIfNeeded,
          o = (t || {}).invites_result,
          u = e.match.params.communityId || '',
          s = c.useState(''),
          m = i()(s, 2),
          d = m[0],
          p = m[1],
          y = c.useState({}),
          h = i()(y, 2),
          v = h[0],
          g = h[1],
          E = c.useState({}),
          O = i()(E, 2),
          w = O[0],
          C = O[1]
        c.useEffect(
          function () {
            u && r(u).catch(n())
          },
          [u, n, r],
        )
        var _,
          S,
          j = c.useMemo(
            function () {
              return d.length > 0 || !t
                ? $
                : 'CommunityInvites' === o.__typename
                ? o.users_to_invite_slice.items.map(L.e).filter(Boolean)
                : $
            },
            [t, o, d.length],
          ),
          A = c.useCallback(
            function (e, t) {
              g(function (n) {
                return H(H({}, n), {}, a()({}, e, t))
              })
            },
            [g],
          ),
          D = c.useCallback(
            function (e) {
              C(function (t) {
                return H(H({}, t), {}, a()({}, e, !0))
              })
            },
            [C],
          ),
          te = u
            ? c.createElement(I.a, { to: '/i/communities/'.concat(u, '/members') })
            : c.createElement(I.a, { to: '/' }),
          re = c.createElement(
            b.a,
            {
              behavioralEventContext: J,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            Y,
          )
        return 'CommunityInvitesUnavailable' === (null == o ? void 0 : o.__typename)
          ? te
          : c.createElement(
              l.a,
              { viewType: 'community' },
              c.createElement(
                f.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: re, subtitle: B, title: F },
                ((_ = (null == o ? void 0 : o.remaining_invite_count) || 0),
                (S = _ > 999),
                'CommunityInvites' === (null == o ? void 0 : o.__typename) &&
                  !S &&
                  c.createElement(
                    M.a,
                    { style: ne.callout },
                    c.createElement(k.a, { text: X({ remaining_invite_count: _ }) }),
                  )),
                c.createElement(R.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: ee,
                  getItemDisabledMessage: function (e) {
                    var t
                    if ('user' === e.type) {
                      var n = e.data,
                        r = n.id_str,
                        a = n.screen_name,
                        o = v[r]
                      if ('UserCommunityInviteActionUnavailable' === (null == o ? void 0 : o.__typename))
                        switch (o.reason) {
                          case 'UserIsInvited':
                            return z({ screen_name: a })
                          case 'UserIsMember':
                            return U({ screen_name: a })
                          case 'ViewerOutOfInvites':
                            return K
                          default:
                            return null !== (t = o.message) && void 0 !== t ? t : W({ screen_name: a })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var t = e.data.id_str,
                        n = v[t]
                      return !w[t] && 'UserCommunityInviteAction' !== (null == n ? void 0 : n.__typename)
                    }
                    return !0
                  },
                  injectedItems: j,
                  inputStyle: ne.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: N,
                  renderEmptyState: function () {
                    return c.createElement(x.a, { header: G, message: Q })
                  },
                  renderHeader: function () {
                    return (
                      0 === d.length &&
                      c.createElement(
                        M.a,
                        { style: ne.input },
                        c.createElement(T.b, { size: 'headline2', weight: 'heavy' }, V),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return c.createElement(x.a, { header: Z({ query: d }), message: q })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return c.createElement(P, {
                      communityId: u,
                      onInvite: D,
                      onInviteActionResultChange: A,
                      userId: t,
                      viewerInvited: w[t],
                    })
                  },
                  rounded: !0,
                  shouldAutoFocus: !0,
                  shouldFocusOnClear: !0,
                  source: L.d.CommunityInvites,
                  style: ne.input,
                }),
              ),
            )
      }
      var ne = A.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        re = p(te)
      t.default = re
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
        u = n('5Yy7'),
        s = n.n(u),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('ERkP'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('MWbm'),
        g = n('Qwev'),
        E = n('21U8'),
        O = n('rHpw'),
        w = n('1auM'),
        C = n('eYns')
      function _(e) {
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
      var S = b.a.gff1f69e,
        j = (function (e) {
          s()(n, e)
          var t = _(n)
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
                    Object(C.b)(n).then(function (t) {
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
                    : y.createElement(g.a, { accessibilityLabel: S, style: P.activityIndicator })
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
                    u = l.cropData,
                    s = l.originalMediaFile,
                    m = void 0 === s ? {} : s
                  return c
                    ? y.createElement(
                        v.a,
                        { style: P.cropper },
                        y.createElement(E.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (r && r.aspectRatio) || (u && u.aspectRatio) || n,
                          defaultCropData: r || u,
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
        })(y.Component),
        P = O.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = y.forwardRef(function (e, t) {
        return y.createElement(j, a()({}, e, { cropperRef: t }))
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
        u = n('5Yy7'),
        s = n.n(u),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('ERkP')),
        v = n('rxPX'),
        g = n('0KEI'),
        E = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        O = function (e, t) {
          return t.module.selectItems(e)
        },
        w = Object(v.a)()
          .propsFromState(function (e) {
            return { fetchStatus: E, items: O }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        C = n('v//M'),
        _ = n('sIe2'),
        S = n('3XMw'),
        j = n.n(S),
        P = n('TEoO')
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
      var R = j.a.i9028824,
        M = 'sliceTimeline',
        k = function (e) {
          return e
        },
        T = { viewType: 'timeline' },
        x = (function (e) {
          s()(n, e)
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
                  ? b.createElement(P.a, {
                      cacheKey: M,
                      footer: n,
                      identityFunction: k,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: l,
                    })
                  : b.createElement(_.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: k,
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
                    ? b.createElement(C.a, {
                        accessibilityLabel: R,
                        behavioralEventContext: T,
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
        })(b.Component)
      h()(x, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var A = w(x)
      t.a = A
    },
    FSMj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolsPeopleScreen', function () {
          return v
        })
      n('vrRf')
      var r = n('ERkP'),
        a = n('XtoV'),
        o = n('rxPX'),
        i = Object(o.a)().withAnalytics({ page: 'communities', section: 'people' }),
        c = n('3XMw'),
        l = n.n(c),
        u = n('yoO3'),
        s = n('k/OQ'),
        m = n('mWs5'),
        d = n('MWbm'),
        p = n('krnS'),
        f = n('Ty5D'),
        y = l.a.dc6ce7b4,
        h = l.a.f8321d82,
        b = l.a.ga2aa43c,
        v = function (e) {
          var t = e.community,
            n = e.communityId,
            o = e.location,
            i = null != o && o.pathname && o.pathname.indexOf('members') > 0 ? h : b,
            c = r.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: o.state },
                        label: h,
                        key: h,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: o.state },
                        label: b,
                        key: b,
                      },
                    ]
                  : []
                return r.createElement(s.a, { accessibilityLabel: i, links: e })
              },
              [n, i, o],
            )
          return r.createElement(
            u.a,
            null,
            r.createElement(
              m.a,
              { communityId: t.id_str, rightControl: r.createElement(a.a, { community: t }), title: y },
              r.createElement(
                d.a,
                null,
                c,
                r.createElement(
                  f.e,
                  null,
                  r.createElement(
                    f.c,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                    r.createElement(p.b, { communityId: t.id_str, mode: p.a.Members }),
                  ),
                  r.createElement(
                    f.c,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                    r.createElement(p.b, { communityId: t.id_str, mode: p.a.Moderators }),
                  ),
                ),
              ),
            ),
          )
        }
      t.default = i(v)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return V
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return X
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('yH/f'), n('WNMA'), n('KqXw'), n('ERkP')),
        l = n('v6aA'),
        u = n('+Kfv'),
        s = n('es0u'),
        m = (n('ZVkB'), n('ulNE'), n('jQ3i'), n('x4t0'), n('eSoz')),
        d = n('XOJV'),
        p = n('G6rE'),
        f = n('rxPX'),
        y = function (e, t) {
          var n = t.match.params.tweetId
          return n ? d.a.selectHydrated(e, n) : void 0
        },
        h = function (e, t) {
          var n = t.match.params
          return Object.entries(n).flat().includes('tweetId') ? V.HiddenTweet : V.RemovedMember
        },
        b = function (e, t) {
          if (h(0, t) === V.HiddenTweet) {
            var n,
              r = t.match.params.tweetId,
              a = r ? d.a.selectHydrated(e, r) : void 0,
              o = null == a || null === (n = a.community_relationship) || void 0 === n ? void 0 : n.community
            return o ? m.c.select(e, o) : void 0
          }
          var i = t.match.params.communityId
          return i ? m.c.select(e, i) : void 0
        },
        v = function (e, t) {
          if (h(0, t) === V.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? d.a.selectFetchStatus(e, n) : void 0
          }
          var r = t.match.params.communityId
          return r ? m.c.selectFetchStatus(e, r) : void 0
        },
        g = Object(f.a)()
          .propsFromState(function () {
            return { community: b, fetchStatus: v, loggedInUser: p.e.selectLoggedInUser, tweet: y, type: h }
          })
          .propsFromActions(function () {
            return { fetchCommunity: m.c.fetchOne, fetchTweet: d.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        E = (n('ho0z'), n('PKbs')),
        O = n('egQk'),
        w = n('3XMw'),
        C = n.n(w),
        _ = n('/de5'),
        S = n('b5s6'),
        j = n('MWbm'),
        P = n('X00g'),
        I = n('t62R'),
        R = n('4zmP'),
        M = n('0yYu'),
        k = n('6vad'),
        T = n('rHpw'),
        x = C.a.j643a234,
        A = C.a.c730a21c,
        L = C.a.a5baa7d1,
        D = C.a.icc32e3d,
        H = P.a.getCommunityTheme('Default'),
        F = T.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: T.a.theme.colors.gray50,
              borderRadius: T.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: T.a.theme.spacesPx.space16,
              marginBottom: T.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: T.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        B = function (e) {
          var t,
            n = e.community,
            r = e.history,
            a = e.location,
            o = e.match,
            i = e.tweet,
            l = e.type,
            u = { history: r, location: a, match: o },
            s = null == i ? void 0 : i.community_relationship,
            m = null == s ? void 0 : s.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case V.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case V.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(l)) || void 0 === t
                ? void 0
                : t.name) || '',
            p = null == n ? void 0 : n.name,
            f = null == n ? void 0 : n.rules,
            y = (null == n ? void 0 : n.theme) || H,
            h = P.a.getCommunityUIColorName(y),
            b = Object(O.a)({ communityName: p })
          return y && null != f && f.length
            ? c.createElement(
                j.a,
                { style: F.tweetInfo },
                c.createElement(
                  j.a,
                  { style: F.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case V.HiddenTweet:
                        return c.createElement(
                          c.Fragment,
                          null,
                          c.createElement(
                            I.b,
                            { color: h, size: 'subtext1', style: F.communityTitle, weight: 'bold' },
                            p,
                          ),
                          c.createElement(
                            I.b,
                            { size: 'headline1', style: [F.titleText, F.hiddenTweetWarningText], weight: 'heavy' },
                            x,
                          ),
                          c.createElement(S.a, {
                            style: F.tweetContainer,
                            tweetId: null == i ? void 0 : i.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          c.createElement(R.a, { headline: A, text: d }),
                          c.createElement(I.b, { style: F.helpText }, L),
                        )
                      case V.RemovedMember:
                        return c.createElement(
                          c.Fragment,
                          null,
                          c.createElement(
                            I.b,
                            { size: 'headline1', style: F.titleText, weight: 'heavy' },
                            D({ communityName: p }),
                          ),
                          c.createElement(
                            j.a,
                            { style: F.removedMemberReason },
                            c.createElement(I.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(l),
                ),
                c.createElement(M.a, null),
                c.createElement(k.b, { text: b }),
                c.createElement(E.b, {
                  badgeStyle: F.badges,
                  ruleContainerStyle: F.rules,
                  rules: f,
                  theme: y,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : c.createElement(_.b, u)
        },
        N = n('G1WX'),
        z = n('yoO3'),
        U = n('VS6U'),
        K = n('0KEI'),
        W = C.a.jf99d610,
        V = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function X(e) {
        var t = c.useContext(l.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          r = e.fetchCommunity,
          o = e.fetchStatus,
          m = e.fetchTweet,
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
              case V.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == p ? void 0 : p.user.id_str)),
                  _handleRetry: w,
                  shouldRenderFeedback: Boolean(
                    null == p || null === (t = p.community_relationship) || void 0 === t
                      ? void 0
                      : t.moderation_state.rule,
                  ),
                }
              case V.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == n ? void 0 : n.viewerViolatedRule)),
                  _handleRetry: C,
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
          E = Object(K.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          O = Object(K.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          w = c.useEffect(
            function () {
              g && m(g).catch(E)
            },
            [E, m, g],
          ),
          C = c.useEffect(
            function () {
              v && r(v).catch(O)
            },
            [v, O, r],
          ),
          S = c.createElement(_.b, y)
        return c.createElement(N.a, {
          fetchStatus: o,
          onRequestRetry: h(f)._handleRetry,
          render: function () {
            var n = h(f),
              r = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              o = n.isAuthorizedViewer,
              i = n.shouldRenderFeedback
            return o && t
              ? c.createElement(
                  u.a,
                  { viewType: 'community' },
                  i
                    ? c.createElement(
                        z.a,
                        { behavioralEventViewType: r },
                        c.createElement(U.a, {
                          backLocation: '/notifications',
                          history: y.history,
                          primaryContent: c.createElement(B, a()({}, e, { type: f })),
                          sidebarContent: c.createElement(s.a, null),
                          title: W,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var Y = g(X)
      t.default = Y
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
        i = n('BUB3'),
        c = n('shC7'),
        l = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return o.createElement(i.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return o.createElement(l.a, a()({ isActive: t }, e, { label: o.createElement(u.b, { dir: n }, e.label) }))
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
        u = n('1Pcy'),
        s = n.n(u),
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
        O = n('HPNB'),
        w = n('v6aA'),
        C = n('VAZu'),
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
      function I(e) {
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
      var R = j.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I(I({}, j.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        M = n('MWbm'),
        k = n('yw4N'),
        T = n('TnY3'),
        x = n('cHvH'),
        A = n('3xLC')
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
        var t = L(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(s()(e), '_renderChildren', function (t) {
              var n = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? E.createElement(
                    M.a,
                    { style: R.fill },
                    E.createElement(
                      k.a,
                      { style: R.viewportView },
                      t ? e._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      n,
                    ),
                  )
                : n
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
                return E.createElement(x.a, null, function (t) {
                  var n = t.windowWidth
                  return O.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                return E.createElement(
                  E.Fragment,
                  null,
                  Object(S.a)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : E.createElement(_.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this,
                  t = this.context.rootDetailPerColumnScroll
                return E.createElement(w.a.Consumer, null, function (n) {
                  var r = n.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    a = t
                      ? !r && e._renderInlineNav({ isTwoColumnLayout: !0 })
                      : e._renderInlineNav({ isTwoColumnLayout: !0 })
                  return E.createElement(E.Fragment, null, a, e._renderChildren(r))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.appBarScrollEnabled,
                  n = void 0 !== t && t,
                  r = e.isTwoColumnLayout,
                  a = this.props,
                  o = a.SideNavButton,
                  i = a.TabBar,
                  c = a.TeamsSwitcher,
                  l = a.backLocation,
                  u = a.documentTitle,
                  s = a.headerless,
                  m = a.history,
                  d = a.leftControl,
                  p = a.middleControl,
                  f = a.onBackClick,
                  y = a.rightControl,
                  h = a.screenType,
                  b = a.searchBoxOptions,
                  v = a.secondaryBar,
                  O = a.showSubtitleOnRoot,
                  w = a.showSubtitleOnWideDetail,
                  S = a.subtitle,
                  j = a.title,
                  P = a.titleIconCell,
                  I = a.titleIconCellSize,
                  k = a.withBottomBorder,
                  T = a.withDetailOpen,
                  x = a.withSearchBox,
                  A = a.withTweetButton,
                  L = 'root' === h,
                  D = 'secondaryRoot' === h,
                  H = 'primaryDetail' === h,
                  F = (H && w) || (L && O),
                  B = L || (H && r),
                  N = L ? g.c : H ? g.a : void 0,
                  z = E.createElement(
                    M.a,
                    { style: n ? [R.appBarContainer, R.appBarZindex] : R.appBarZindex },
                    E.createElement(C.a, {
                      backLocation: l,
                      fixed: !1,
                      hideBackButton: B,
                      history: m,
                      leftControl: d,
                      middleControl: p,
                      onBackClick: f,
                      rightControl: y,
                      secondaryBar: n ? v : null,
                      subtitle: F ? S : void 0,
                      title: j,
                      titleDomId: N,
                      titleIconCell: P,
                      titleIconCellSize: I,
                      withBottomBorder: k,
                    }),
                  ),
                  U =
                    L || (D && T)
                      ? null
                      : E.createElement(_.a.Configure, {
                          SideNavButton: o,
                          TabBar: i,
                          TeamsSwitcher: c,
                          backLocation: l,
                          documentTitle: u,
                          headerless: s,
                          middleControl: p,
                          onBackClick: f,
                          rightControl: y,
                          searchBoxOptions: b,
                          subtitle: S,
                          title: j,
                          withSearchBox: x,
                          withTweetButton: A,
                        })
                return E.createElement(E.Fragment, null, U, z, n ? null : v)
              },
            },
          ]),
          n
        )
      })(E.Component)
      v()(D, 'contextType', A.a),
        v()(D, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(T.a)(D)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return _
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('97Jx'),
        i = n.n(o),
        c = (n('WNMA'), n('KqXw'), n('ho0z'), n('uFXj'), n('ERkP')),
        l = n('v6aA'),
        u = n('es0u'),
        s = n('PKbs'),
        m = n('egQk'),
        d = n('1Idg'),
        p = n('eSoz'),
        f = n('rxPX'),
        y = n('0KEI'),
        h = Object(f.a)()
          .propsFromState(function () {
            return { community: d.a, fetchStatus: d.b, isCommunityMember: d.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: p.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        b = n('MDbM'),
        v = n('/de5'),
        g = n('5FtR'),
        E = n('VS6U'),
        O = n('rHpw')
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
      function C(e) {
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
      var _ = function (e) {
          var t = c.useContext(l.a).featureSwitches,
            n = e.community,
            r = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            d = e.history,
            p = e.isCommunityMember,
            f = e.location,
            y = e.match,
            h = y.params.communityId,
            O = t.isTrue('c9s_participation_enabled')
          c.useEffect(function () {
            h && !n && o !== b.a.LOADED && a(h).catch(r())
          })
          var w = c.useMemo(
            function () {
              return { selectedCommunityId: h || '', defaultText: '' }
            },
            [h],
          )
          if (n && h) {
            var _ = n.name,
              S = n.rules,
              P = n.theme,
              I = {
                composeOptions: w,
                history: d,
                sidebarContent: c.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: O && p,
              }
            if (S.length > 0) {
              var R = c.createElement(s.b, {
                badgeStyle: j.badgeStyle,
                headerContainerStyle: j.containerStyle,
                headerExplanationStyle: j.explanationStyle,
                ruleContainerStyle: j.ruleContainerStyle,
                rules: S,
                theme: P,
                withBottomMargin: !0,
              })
              return c.createElement(
                E.a,
                i()({}, I, {
                  backLocation: '/i/communities/'.concat(h),
                  documentTitle: Object(m.a)({ communityName: _ }),
                  primaryContent: R,
                }),
              )
            }
            var M = C(C({}, I), {}, { title: null }),
              k = c.createElement(v.b, { history: d, location: f, match: y })
            return c.createElement(E.a, i()({}, M, { primaryContent: k }))
          }
          return o === b.a.LOADED ? c.createElement(g.a, { to: '/' }) : null
        },
        S = h(_),
        j =
          ((t.default = S),
          O.a.create(function (e) {
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
              return n.e(194).then(n.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: n('XBtf').a.Critical,
          }),
        c = o.e(i),
        l = n('QIgh'),
        u = n('8UdT')
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
      function m(e) {
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
      t.a = m(m({}, l.b), {}, a()({}, u.b.Community, c))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n('v6aA'),
        c = n('3XMw'),
        l = n.n(c),
        u = n('Nh1N'),
        s = n('MWbm'),
        m = n('Ig1G'),
        d = n('4zmP'),
        p = n('p+r5'),
        f = n('rHpw'),
        y = l.a.c66769a3,
        h = l.a.ef02695a,
        b = l.a.ef02695a,
        v = l.a.c824202f,
        g = l.a.d32cf5e6,
        E = l.a.f8fa00c7,
        O = l.a.fc2a5c92,
        w = function (e) {
          var t = o.useContext(i.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            r = t.getNumberValue('c9s_max_rule_description_length', 160),
            c = e.description,
            l = e.errorText,
            f = e.name,
            w = e.onChange,
            _ = o.useCallback(
              function (e) {
                return !Object(m.g)(e, 3, n)
              },
              [n],
            ),
            S = o.useCallback(
              function (e) {
                return !Object(m.g)(e, 0, r)
              },
              [r],
            ),
            j = o.useState(f),
            P = a()(j, 2),
            I = P[0],
            R = P[1],
            M = o.useState(_(f)),
            k = a()(M, 2),
            T = k[0],
            x = k[1],
            A = o.useState(void 0),
            L = a()(A, 2),
            D = L[0],
            H = L[1],
            F = o.useState(c),
            B = a()(F, 2),
            N = B[0],
            z = B[1],
            U = o.useState(S(c)),
            K = a()(U, 2),
            W = K[0],
            V = K[1],
            X = o.useState(void 0),
            Y = a()(X, 2),
            G = Y[0],
            Q = Y[1],
            Z = o.useState('' !== f),
            q = a()(Z, 2),
            J = q[0],
            $ = q[1],
            ee = o.useCallback(
              function (e) {
                var t = !1,
                  r = e.target.value
                _(r) && ((t = !0), H(b({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  x(t),
                  R(r),
                  w({ description: N, name: r, valid: !t && !W })
              },
              [n, N, w, W, _],
            ),
            te = o.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                S(n) && ((t = !0), Q(E({ maxCharacterCount: r }))),
                  V(t),
                  z(n),
                  w({ name: I, description: n, valid: !t && !T })
              },
              [r, I, w, T, S],
            ),
            ne = T && D ? void 0 : h({ minCharacterCount: 3, maxCharacterCount: n }),
            re = W ? void 0 : g({ maxCharacterCount: r }),
            ae = l
              ? o.createElement(
                  s.a,
                  { style: C.error },
                  o.createElement(d.a, { Icon: u.a, headline: O, text: l, type: 'danger' }),
                )
              : void 0
          return o.createElement(
            o.Fragment,
            null,
            ae,
            o.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: m.b,
              errorText: D,
              helperText: ne,
              invalid: T && J,
              label: y,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: I,
            }),
            o.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: m.b,
              errorText: G,
              helperText: re,
              invalid: W,
              label: v,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: r,
              value: N,
            }),
          )
        },
        C = f.a.create(function (e) {
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
        a = n('v6aA'),
        o = n('+Kfv'),
        i = n('xZGM'),
        c = n('rxPX'),
        l = function (e, t) {
          return Object(i.y)(e, i.i)
        },
        u = Object(c.a)()
          .propsFromState(function () {
            return { shouldShowEducation: l }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(i.v)(i.i)
              },
            }
          }),
        s = n('3XMw'),
        m = n.n(s),
        d = n('MWbm'),
        p = n('X00g'),
        f = n('feu+'),
        y = n('h0NW'),
        h = n('rHpw'),
        b = n('r9x5'),
        v = n('cOhU'),
        g = n('uCrx'),
        E = m.a.b60e4f77,
        O = m.a.f0fc827d,
        w = m.a.c8e93b51,
        C = m.a.fc5c6913,
        _ = m.a.ad211086,
        S = m.a.gf803ba1,
        j = m.a.e92fe01b,
        P = m.a.h3bb8068,
        I = m.a.a709f8f8
      var R = h.a.create(function (e) {
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
        M = u(function (e) {
          var t = e.addEducationFlag,
            n = e.forSingleCommunity,
            i = e.shouldShowEducation,
            c = r.useContext(a.a).featureSwitches
          if (!i || !1 === (null == n ? void 0 : n.canJoinCommunity)) return null
          var l = c.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
            u = [R.decorationContainer, l && { color: p.a.getCommunityUIColor(l) }],
            s = r.createElement(b.a, { style: u }),
            m = r.createElement(v.a, { style: u }),
            h = r.createElement(g.a, { style: u }),
            M = function () {
              t()
            }
          return r.createElement(
            o.a,
            { viewType: 'welcome_education' },
            r.createElement(
              f.a,
              {
                actionLabel: E,
                graphicDisplayMode: 'none',
                headline: O,
                onAction: M,
                onClose: M,
                subtext: w,
                withCloseButton: !n,
              },
              r.createElement(
                d.a,
                { style: R.infoItemsContainer },
                r.createElement(y.a, {
                  containerStyle: R.itemContainer,
                  items: [
                    { label: C, description: _, decoration: s },
                    { label: S, description: j, decoration: m },
                    { label: P, description: I, decoration: h },
                  ],
                }),
              ),
            ),
          )
        })
      t.a = M
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
      function u(e) {
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
      var s = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, t) {
          return e[s][t]
        },
        p = function (e, t) {
          var n
          return null !== (n = e[s].fetchStatus[t]) && void 0 !== n ? n : i.a.NONE
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
        a()({}, s, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return u(u({}, e), {}, { fetchStatus: u(u({}, e.fetchStatus), {}, a()({}, y(t), i.a.LOADING)) })
            case m.FAILURE:
              return u(
                u({}, e),
                {},
                { fetchStatus: u(u({}, e.fetchStatus), {}, a()({}, y(t), i.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return u(
                  u({}, e),
                  {},
                  ((n = {}),
                  a()(n, y(t), t.payload),
                  a()(n, 'fetchStatus', u(u({}, e.fetchStatus), {}, a()({}, y(t), i.a.LOADED))),
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
        return g
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('v6aA'),
        c = n('p+r5'),
        l = n('3XMw'),
        u = n.n(l),
        s = n('Ig1G'),
        m = n('nmVb'),
        d = n.n(m),
        p = n('Phky'),
        f = n.n(p),
        y = u.a.h3e55b40,
        h = u.a.dd71d9c9,
        b = u.a.cf65e56a,
        v = u.a.d936eeca,
        g = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            r = e.communityName,
            l = e.onChange,
            u = o.useContext(i.a).featureSwitches,
            m = o.useState(!1),
            p = a()(m, 2),
            g = p[0],
            E = p[1],
            O = o.useState(void 0),
            w = a()(O, 2),
            C = w[0],
            _ = w[1],
            S = u.getNumberValue('c9s_max_community_name_length', 30),
            j = o.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(s.g)(t, 3, S)
                  ? (d()(t).length > 0 || f()(t).length > 0) && ((n = !0), _(v))
                  : ((n = !0), _(b({ minCharacterCount: 3, maxCharacterCount: S }))),
                  E(n),
                  l(t, n)
              },
              [S, l, _],
            ),
            P = h({ minCharacterCount: 3, maxCharacterCount: S })
          return o.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: s.b,
            errorText: C,
            helperText: P,
            invalid: g,
            label: y,
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
        i = n('Lsrn'),
        c = n('k/Ka')
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
      function u(e) {
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
      var s = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
            }),
          ),
        )
      }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SNyS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
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
      function u(e) {
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
      var s = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
            }),
            o.createElement('path', {
              d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
            }),
          ),
        )
      }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SyZD: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesRouter', function () {
          return N
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = (n('WNMA'), n('KqXw'), n('2G9S'), n('ERkP')),
        i = n('v6aA'),
        c = n('Ig1G'),
        l = n('rxPX'),
        u = Object(l.a)().withAnalytics({ page: 'communities', section: 'rules' }),
        s = n('3XMw'),
        m = n.n(s),
        d = n('5FtR'),
        p = n('ddV6'),
        f = n.n(p),
        y = (n('z84I'), n('/yvb')),
        h = n('eSoz'),
        b = n('0KEI'),
        v = Object(l.a)()
          .propsFromActions(function () {
            return {
              reorderRules: h.c.reorderRules,
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        g = n('yoO3'),
        E = n('rHpw'),
        O = E.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        w = n('mWs5'),
        C = n('PKbs'),
        _ = m.a.b772cd65,
        S = m.a.gfca5254
      var j = v(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.explanation,
            a = e.history,
            i = e.reorderRules,
            c = t.id_str,
            l = t.rules,
            u = t.theme,
            s = o.useState(l),
            m = f()(s, 2),
            d = m[0],
            p = m[1],
            h = o.useCallback(
              function (e) {
                p(e)
              },
              [p],
            ),
            b = o.useCallback(
              function () {
                var e = n({}),
                  t = d.map(function (e) {
                    return e.rest_id
                  })
                i(c, { ruleIds: t })
                  .then(function () {
                    a.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/rules') })
                  })
                  .catch(e)
              },
              [c, d, i, a, n],
            ),
            v = o.createElement(y.a, { onPress: b, size: 'small', type: 'brandFilled' }, _)
          return o.createElement(
            g.a,
            null,
            o.createElement(
              w.a,
              { communityId: c, rightControl: v, screenType: 'primaryDetail', title: S },
              o.createElement(C.b, {
                badgeStyle: O.badgeStyle,
                displayType: C.a.Reorder,
                explanation: r,
                headerContainerStyle: O.headerContainerStyle,
                onReorder: h,
                ruleContainerStyle: O.ruleContainerStyle,
                rules: d,
                theme: u,
              }),
            ),
          )
        }),
        P = n('MWbm'),
        I = n('mjJ+'),
        R = n('iY63'),
        M = n('ACHU'),
        k = n('Ty5D'),
        T = m.a.gfca5254,
        x = m.a.d94edeb4,
        A = m.a.j560c8ea,
        L = m.a.ab8089ea,
        D = m.a.h63a5c3b,
        H = o.createElement(R.a, null),
        F = o.createElement(M.a, null),
        B = { viewType: 'add' },
        N = function (e) {
          var t = o.useContext(i.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            r = t.isTrue('c9s_rule_editing_enabled'),
            l = t.isTrue('c9s_rule_reordering_enabled'),
            u = e.community,
            s = e.history,
            m = e.match,
            p = u.id_str,
            f = u.role,
            h = u.rules,
            b = u.theme,
            v = m.url,
            g = f === c.a.Admin,
            E =
              n && g
                ? o.createElement(y.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: B,
                    icon: H,
                    link: '/i/communities/'.concat(p, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            _ = h.length > 1,
            S =
              l && g && _
                ? o.createElement(y.a, {
                    accessibilityLabel: D,
                    icon: F,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: L, link: '/i/communities/'.concat(p, '/tools/rules/reorder') }]
                      return o.createElement(I.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            R = o.createElement(P.a, { style: z.rightControlStyle }, E, S),
            M = { displayType: C.a.Default, getPivotLink: void 0 }
          return (
            g &&
              r &&
              ((M.displayType = C.a.Pivot),
              (M.getPivotLink = function (e) {
                return '/i/communities/'.concat(p, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            o.createElement(
              k.e,
              null,
              o.createElement(
                k.c,
                { exact: !0, path: ''.concat(v, '/') },
                o.createElement(
                  w.a,
                  { communityId: p, rightControl: R, screenType: 'primaryDetail', title: T },
                  o.createElement(
                    C.b,
                    a()(
                      {
                        badgeStyle: O.badgeStyle,
                        explanation: x,
                        headerContainerStyle: O.headerContainerStyle,
                        ruleContainerStyle: O.ruleContainerStyle,
                        rules: h,
                        theme: b,
                      },
                      M,
                    ),
                  ),
                ),
              ),
              o.createElement(
                k.c,
                { exact: !0, path: ''.concat(v, '/reorder') },
                o.createElement(j, { community: u, explanation: x, history: s }),
              ),
              o.createElement(k.c, null, o.createElement(d.a, { to: ''.concat(v, '/') })),
            )
          )
        },
        z = E.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(N)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('5UID'),
        c = n('3GUV'),
        l = n('iBK2'),
        u = o.createElement(c.a, null),
        s = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.createElement(l.b, n)
          return t ? o.createElement(i.a, { title: t }, r) : r
        }
      ;(s.defaultProps = { footer: u }), (t.a = s)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityTimelineType', function () {
          return nr
        }),
        n.d(t, 'CommunityScreen', function () {
          return ar
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r,
        a,
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        u = n('1Pcy'),
        s = n.n(u),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        h = n.n(y),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('yH/f'), n('2G9S'), n('WNMA'), n('KqXw'), n('ho0z'), n('ERkP')),
        E = (n('jQ/y'), n('1Idg')),
        O = n('WpDa'),
        w = n('ZNT5'),
        C = n('hqKg'),
        _ = n('rxPX'),
        S = function (e, t) {
          return t.communityId
        },
        j = function () {
          return Object(C.createSelector)(S, function (e) {
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
                formatResponse: O.a,
              })
            })(e)
          })
        },
        P = Object(_.a)()
          .propsFromState(function () {
            return { community: E.a, creator: E.g, aboutModule: j() }
          })
          .withAnalytics({ page: 'community', section: 'about' }),
        I = n('Ig1G'),
        R = n('yoO3'),
        M = n('fTQJ'),
        k = n('n0Rl'),
        T = n('v//M'),
        x = (n('enFi'), n('z84I'), n('PKbs')),
        A = n('3XMw'),
        L = n.n(A),
        D = n('6vad'),
        H = n('rC8y'),
        F = n('0yYu'),
        B = n('rHpw'),
        N = n('jAXQ'),
        z = n.n(N),
        U = void 0 !== r ? r : (r = n('KK06')),
        K = L.a.gfca5254,
        W = L.a.ffd9cfe6,
        V = B.a.create(function (e) {
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
        X = function (e) {
          var t = e.community,
            n = e.theme,
            r = z()(U, t),
            a = r.rules,
            o = g.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : g.createElement(
                g.Fragment,
                null,
                g.createElement(D.b, { text: K }),
                g.createElement(x.b, {
                  badgeStyle: V.badgeStyle,
                  headerContainerStyle: [V.containerStyle, V.headingContainerStyle],
                  headerExplanationStyle: V.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: V.ruleContainerStyle,
                  rules: o,
                  theme: n,
                }),
                a.length > 5
                  ? g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(H.a, { link: '/i/communities/'.concat(r.rest_id, '/rules'), text: W }),
                      ' ',
                      g.createElement(F.a, null),
                    )
                  : null,
              )
        },
        Y = void 0 !== a ? a : (a = n('GR8q')),
        G = Object(k.b)(Y, { errorConfig: { context: 'RULES' } }),
        Q = function (e) {
          return g.createElement(G, {
            render: function (t) {
              var n = t.data,
                r = (t.error, t.fetchStatus),
                a = t.retry
              return null != n && n.community
                ? g.createElement(T.a, {
                    fetchStatus: r,
                    onRequestRetry: a,
                    render: function () {
                      return g.createElement(X, { community: n.community, theme: e.theme })
                    },
                  })
                : null
            },
            variables: { communityId: e.communityId },
          })
        },
        Z = n('t62R'),
        q = n('csss'),
        J = n('h0NW'),
        $ = n('jV+4'),
        ee = n('v6aA'),
        te = n('cOhU'),
        ne = n('DlMI'),
        re = n('Lxak')
      function ae(e) {
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
      var oe = L.a.i9028824,
        ie = L.a.cc683fb9,
        ce = L.a.af7c11a9,
        le = L.a.db1b9462,
        ue = L.a.ea49402d
      function se(e) {
        var t = e.date,
          n = e.userName
        return g.createElement(L.a.I18NFormatMessage, { $i18n: 'a346641a', date: t }, n)
      }
      var me = (function (e) {
        d()(n, e)
        var t = ae(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(s()(e), '_getItems', function () {
              var t = function (e) {
                  return g.createElement(Z.b, null, e)
                },
                n = e._getCreationAttribution(),
                r = [
                  { decoration: pe, label: t(le) },
                  { decoration: fe, label: t(ue) },
                ]
              return n && r.push({ decoration: ye, label: n }), r
            }),
            v()(s()(e), '_renderInfoSection', function () {
              var t = e.props.community
              if (t) {
                var n = t.description,
                  r = t.role
                return g.createElement(
                  g.Fragment,
                  null,
                  g.createElement(D.b, { text: ce }),
                  Object(I.f)(r) && n ? g.createElement(q.a, { label: n }) : null,
                  g.createElement(J.a, { containerStyle: de.containerStyle, items: e._getItems() }),
                  g.createElement(F.a, null),
                )
              }
              return null
            }),
            v()(s()(e), '_renderRules', function () {
              var t = e.props,
                n = t.community,
                r = t.communityId
              if (n) {
                var a = n.theme
                return g.createElement(Q, { communityId: r, theme: a })
              }
            }),
            v()(s()(e), '_getCreationAttribution', function () {
              var t = e.props,
                n = t.community,
                r = t.creator
              if (!r) return null
              var a = null == n ? void 0 : n.created_at,
                o = null == r ? void 0 : r.screen_name,
                i = r.verified
              if (a && o) {
                var c = new Date(a).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' }),
                  l = g.createElement($.a, { isVerified: i, screenName: o, withLink: !0 })
                return g.createElement(Z.b, { color: 'gray700' }, g.createElement(se, { date: c, userName: l }))
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
                return g.createElement(
                  R.a,
                  { behavioralEventViewType: 'about' },
                  this._renderInfoSection(),
                  this._renderRules(),
                  g.createElement(M.a, { loadingAccessibilityLabel: oe, module: e, title: ie }),
                )
              },
            },
          ]),
          n
        )
      })(g.Component)
      v()(me, 'contextType', ee.a)
      var de = B.a.create(function (e) {
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
        pe = g.createElement(te.a, { style: de.icon }),
        fe = g.createElement(ne.a, { style: de.icon }),
        ye = g.createElement(re.a, { style: de.icon }),
        he = P(me),
        be = n('+Kfv'),
        ve = n('es0u'),
        ge = n('0KEI'),
        Ee = n('R5kW'),
        Oe = function (e, t) {
          var n,
            r = Object(Ee.b)(e, t.communityId)
          return null !== (n = null == r ? void 0 : r.tweet_case_count) && void 0 !== n ? n : 0
        },
        we = function (e, t) {
          return Object(Ee.c)(e, t.communityId)
        },
        Ce = Object(_.a)()
          .propsFromState(function () {
            return { count: Oe, fetchStatus: we }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: Ee.a,
            }
          }),
        _e = n('kGix'),
        Se = n('TnY3'),
        je = n('MWbm'),
        Pe = n('mjJ+'),
        Ie = n('/yvb'),
        Re = n('Znyr'),
        Me = n('zIWA'),
        ke = n('SNyS'),
        Te = n('Lsrn'),
        xe = n('k/Ka')
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
      function Le(e) {
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
      var De = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(xe.a)(
          'svg',
          Le(
            Le({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
            }),
          ),
        )
      }
      De.metadata = { width: 24, height: 24 }
      var He = De,
        Fe = n('ACHU'),
        Be = L.a.h6beb5fa,
        Ne = L.a.e3f04700,
        ze = L.a.e2429f56,
        Ue = L.a.df15d5b7,
        Ke = L.a.e48fbb01,
        We = L.a.c8c6c4e9,
        Ve = L.a.h63a5c3b,
        Xe = L.a.dce5e1b3,
        Ye = L.a.c5d8c93d,
        Ge = { viewType: 'app_bar_button' }
      var Qe = B.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        Ze = Object(Se.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            r = e.count,
            a = void 0 === r ? 0 : r,
            o = (e.history, e.userRole),
            i = g.useContext(ee.a).featureSwitches,
            c = i.isTrue('c9s_settings_enabled'),
            l = i.isTrue('c9s_report_community_enabled'),
            u = i.isTrue('c9s_moderation_enabled') && t,
            s = c && t,
            m = l && !t,
            d = g.useCallback(
              function (e) {
                var t = []
                return (
                  u &&
                    t.push({
                      text: ze,
                      subText: Ue({ count: a }),
                      Icon: Me.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  m &&
                    t.push({
                      text: Ke,
                      Icon: Me.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: We, Icon: ke.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  g.createElement(Pe.a, { items: t, onCloseRequested: e })
                )
              },
              [n, a, u, m],
            ),
            p = t ? He : Fe.a,
            f = t ? (o === I.a.Admin ? Xe : Ye) : Ve
          return g.createElement(
            je.a,
            { style: Qe.root },
            g.createElement(Ie.a, {
              accessibilityLabel: f,
              behavioralEventContext: Ge,
              icon: g.createElement(p, null),
              link: s ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: s ? void 0 : d,
              size: 'xLarge',
              type: 'primaryText',
            }),
            u && a > 0
              ? g.createElement(Re.a, {
                  count: a,
                  style: Qe.menuControlBadge,
                  truncatedCountFormatter: Be,
                  unreadCountLabel: Ne,
                  withBorder: !1,
                })
              : null,
          )
        })
      var qe = Ce(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            r = e.count,
            a = e.createLocalApiErrorHandler,
            o = e.fetchCommunityModerationData,
            i = e.fetchStatus,
            c = e.userRole
          return (
            g.useEffect(
              function () {
                i === _e.a.NONE && t && o(n).catch(a())
              },
              [a, o, i, n, t],
            ),
            g.createElement(Ze, { canModerate: t, communityId: n, count: r, userRole: c })
          )
        }),
        Je = (n('7xRU'), n('tVqn'), n('uFXj'), n('ddV6')),
        $e = n.n(Je),
        et = n('CGyZ'),
        tt = n('feu+'),
        nt = L.a.fad95333,
        rt = function (e) {
          var t = e.offendingRule
          return g.createElement(
            je.a,
            null,
            t
              ? g.createElement(
                  je.a,
                  { style: at.offendingRule },
                  (function (e) {
                    return g.createElement(
                      L.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      g.createElement(Z.b, { weight: 'bold' }, L.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            g.createElement(Z.b, null, nt),
          )
        },
        at = B.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        ot = L.a.hafa07f2,
        it = L.a.fa94c9da,
        ct = L.a.c15bee31,
        lt = L.a.i859676b,
        ut = g.createElement(
          L.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          g.createElement(Z.b, { link: '/settings/audience_and_tagging' }, L.a.e77dfaf0),
        ),
        st = L.a.fc2a5c92,
        mt = L.a.bf7bdb60,
        dt = L.a.h27d695f,
        pt = L.a.b02360f5,
        ft = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        yt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        ht = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
        })
      var bt = { follow: L.a.b171d7c4, following: L.a.aa7ae3f6, unfollow: L.a.bb1d57b6 },
        vt = L.a.j24c37b2,
        gt = function (e) {
          var t = g.useState(void 0),
            n = $e()(t, 2),
            r = n[0],
            a = n[1],
            o = e.community,
            i = e.createLocalApiErrorHandler,
            c = e.history,
            l = e.isProtectedUser,
            u = e.join,
            s = e.leave,
            m = o.actions,
            d = m.join_action_result,
            p = m.leave_action_result,
            f = o.id_str,
            y = o.name,
            h = o.role,
            b = Object(I.f)(h),
            v = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !b } },
            E = function () {
              a(void 0)
            }
          return g.createElement(
            je.a,
            { style: Et.button },
            g.createElement(et.a, {
              behavioralEventContext: v,
              buttonText: bt,
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
                      c = i({ headline: st, text: mt })
                    switch (r) {
                      case ft.joinAvailable:
                        return o()
                      case ft.joinUnavailable:
                        switch (a) {
                          case ht.ViewerIsRemoved:
                            return i({
                              headline: ct,
                              text: g.createElement(rt, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case ht.ViewerNotInvited:
                            return i({ headline: ot, text: it })
                          case ht.ViewerIsProtected:
                            return t ? i({ headline: lt, text: ut }) : o()
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(d, l, t),
                  r = n.canAction,
                  s = n.message
                !r && s && a(s),
                  r &&
                    (e && e.length > 0
                      ? c.push({ pathname: '/i/communities/'.concat(f, '/join'), state: { community: o } })
                      : u(f).catch(i({})))
              },
              onUnfollow: function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      r = e.reason,
                      a = function (e) {
                        return { canAction: !1, message: e }
                      },
                      o = a({ headline: st, text: mt })
                    switch (n) {
                      case ft.leaveAvailable:
                        return { canAction: !0, message: t }
                      case ft.leaveUnavailable:
                        switch (r) {
                          case yt.ViewerIsSoleAdmin:
                            return a({ headline: dt, text: pt })
                          default:
                            return o
                        }
                      default:
                        return o
                    }
                  })(p),
                  t = e.canAction,
                  n = e.message
                !t && n && a(n), t && s(f).catch(i({}))
              },
              type: 'community',
            }),
            r
              ? g.createElement(tt.a, {
                  actionLabel: vt,
                  graphicDisplayMode: 'none',
                  headline: r.headline,
                  onAction: E,
                  onClose: E,
                  subtext: r.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        Et = B.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Ot = n('YeIG'),
        wt = n('TIdA'),
        Ct = n('A91F'),
        _t = n('9Xij'),
        St = function (e) {
          var t = e.bannerMedia,
            n = null == t ? void 0 : t.image,
            r = B.a.theme.aspectRatios.communityBanner
          return n && !Object(Ot.a)(n)
            ? g.createElement(
                je.a,
                null,
                g.createElement(wt.a, {
                  accessibilityLabel: '',
                  aspectMode: Ct.a.exact(r),
                  backgroundColor: B.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : g.createElement(_t.a, { ratio: r }, g.createElement(je.a, { style: jt.placeholderImageContainer }))
        },
        jt = B.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        Pt = n('X00g'),
        It = n('n4Eu'),
        Rt = { red: 0, green: 0, blue: 0 },
        Mt = '10px',
        kt = function (e) {
          var t,
            n = e.children,
            r = e.community,
            a = e.isThemeEnabled,
            o = r.media,
            i = r.theme,
            c = null == o || null === (t = o.image) || void 0 === t ? void 0 : t.palette
          return g.createElement(
            je.a,
            null,
            g.createElement(je.a, { style: Tt.descriptionContainer }, n),
            g.createElement(je.a, { style: [B.a.absoluteFill, Tt.backgroundColorWhite] }),
            g.createElement(je.a, {
              style: [
                B.a.absoluteFill,
                Tt.backgroundColor,
                (function (e, t) {
                  if (a) return Pt.a.getCommunityGradientStyle(t, Mt)
                  var n = e && It.a.get(e),
                    r = n ? (null == n ? void 0 : n.rgb) : Rt,
                    o = 'rgba('.concat(r.red, ',').concat(r.green, ',').concat(r.blue, ', 0.9)'),
                    i = 'rgba('.concat(r.red, ',').concat(r.green, ',').concat(r.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(o, ' ')
                      .concat(Mt, ', ')
                      .concat(i, ' ')
                      .concat(Mt, ' 100%)'),
                  }
                })(c, i),
              ],
            }),
          )
        },
        Tt = B.a.create(function (e) {
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
        xt = n('XtoV'),
        At = n('m3Bd'),
        Lt = n.n(At),
        Dt = n('G6rE'),
        Ht = n('li/m')
      function Ft(e, t) {
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
      var Bt = Object(_.a)()
          .propsFromState(function () {
            return { community: E.a, loggedInUser: Dt.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Lt()(e, ['loggedInUser'])
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Ft(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Ft(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: Ht.b,
              leave: Ht.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        Nt = n('cm6r'),
        zt = n('MAI/'),
        Ut = n('k/OQ'),
        Kt = n('MtXG'),
        Wt = n('I4+6')
      function Vt(e) {
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
      var Xt = L.a.a0e3ece4,
        Yt = L.a.ha8209bb,
        Gt = L.a.d601fc2f,
        Qt = L.a.b721eb37,
        Zt = L.a.hb9400db,
        qt = 'description',
        Jt = 'facepiles_with_count',
        $t = L.a.d58baa7e,
        en = (function (e) {
          d()(n, e)
          var t = Vt(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(s()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              v()(s()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
              v()(
                s()(e),
                '_isTimelinesRankingEnabled',
                e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
              ),
              v()(s()(e), 'state', { shouldShowFullDescription: !1, hasOverflow: void 0 }),
              v()(s()(e), '_renderCommunityDescription', function () {
                var t = e.props,
                  n = t.community,
                  r = t.communityId,
                  a = t.createLocalApiErrorHandler,
                  o = t.history,
                  i = t.isProtectedUser,
                  c = t.join,
                  l = t.leave,
                  u = e.state,
                  s = u.hasOverflow,
                  m = u.shouldShowFullDescription
                if (n) {
                  var d = n.description,
                    p = n.member_count,
                    f = n.membersFacepileUrls,
                    y = n.name,
                    h = n.role,
                    b = n.theme,
                    v = p || 0,
                    E = e._isThemeEnabled ? Pt.a.getCommunityBackgroundColorName(b) : void 0
                  return g.createElement(
                    be.a,
                    { viewType: qt },
                    g.createElement(
                      kt,
                      { community: n, isThemeEnabled: e._isThemeEnabled },
                      g.createElement(
                        Z.b,
                        { color: 'white', size: 'title2', style: tn.name, weight: 'bold' },
                        y.trim(),
                      ),
                      d && !Object(I.f)(h)
                        ? g.createElement(
                            je.a,
                            { style: tn.description },
                            g.createElement(
                              Z.b,
                              {
                                color: 'white',
                                getTextOverflow: e._getDescriptionOverflow,
                                numberOfLines: m ? void 0 : 2,
                              },
                              d,
                            ),
                            s && !m
                              ? g.createElement(
                                  Z.b,
                                  { color: 'white', onPress: e._handleDescriptionClick, weight: 'bold' },
                                  Zt,
                                )
                              : null,
                          )
                        : null,
                      g.createElement(
                        be.a,
                        { viewType: Jt },
                        g.createElement(
                          je.a,
                          { style: tn.bottomContainer },
                          g.createElement(
                            Nt.a,
                            {
                              interactiveStyles: e._getMemberContainerInteractiveStyle(),
                              link: '/i/communities/'.concat(r, '/members'),
                              style: tn.membersContainer,
                            },
                            f
                              ? g.createElement(zt.a, {
                                  borderColor: E,
                                  style: tn.rightSpace,
                                  userAvatarSize: 'large',
                                  userAvatarUrls: f,
                                })
                              : null,
                            e._renderCount(v),
                          ),
                          g.createElement(
                            je.a,
                            { style: tn.buttons },
                            g.createElement(xt.a, { community: n, style: tn.inviteButton, type: 'onMediaOutlined' }),
                            e._isParticipationEnabled
                              ? g.createElement(gt, {
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
              v()(s()(e), '_renderTabs', function () {
                var t = e.props.communityId,
                  n = [
                    { to: '/i/communities/'.concat(t), label: Yt, key: Yt },
                    { to: '/i/communities/'.concat(t, '/latest'), label: Gt, key: Gt },
                    { to: '/i/communities/'.concat(t, '/about'), label: Qt, key: Qt },
                  ]
                return g.createElement(Ut.a, {
                  accessibilityLabel: Xt,
                  links: e._isTimelinesRankingEnabled
                    ? n
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== Gt
                        })
                      })(n),
                })
              }),
              v()(s()(e), '_renderCount', function (e) {
                var t = $t(e)
                return g.createElement(
                  Kt.a.Group,
                  null,
                  g.createElement(
                    Kt.a,
                    { onMedia: !0 },
                    g.createElement(
                      Z.b,
                      { color: 'white' },
                      g.createElement(
                        L.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        g.createElement(Kt.a.Value, null, L.a.ibd0106d({ formattedCount: t })),
                        g.createElement(Kt.a.Label, null, L.a.cface2d0({ count: e })),
                      ),
                    ),
                  ),
                )
              }),
              v()(s()(e), '_getMemberContainerInteractiveStyle', function () {
                return Wt.a.generate({
                  backgroundColor: B.a.theme.colors.transparent,
                  color: B.a.theme.colors.white,
                  customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
                })
              }),
              v()(s()(e), '_handleDescriptionClick', function () {
                var t = e.state.shouldShowFullDescription
                e.setState({ shouldShowFullDescription: !t })
              }),
              v()(s()(e), '_getDescriptionOverflow', function (t) {
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
                    ? g.createElement(
                        R.a,
                        { behavioralEventViewType: 'timeline' },
                        g.createElement(
                          je.a,
                          { style: tn.container },
                          g.createElement(
                            je.a,
                            null,
                            g.createElement(St, { bannerMedia: e.media }),
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
        })(g.Component)
      v()(en, 'contextType', ee.a)
      var tn = B.a.create(function (e) {
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
        nn = Bt(en),
        rn = n('eSoz'),
        an = n('8Lfv'),
        on = n('LI/a'),
        cn = function (e, t) {
          return t.communityId
        },
        ln = function (e, t) {
          var n = rn.c.select(e, t.communityId)
          return Object(I.f)(null == n ? void 0 : n.role)
        },
        un = Object(_.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: ln,
              rankedTweetsModule: Object(C.createSelector)(cn, function (e) {
                return Object(on.b)(e)
              }),
              tweetsModule: Object(C.createSelector)(cn, function (e) {
                return Object(on.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: an.a,
              createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        sn = n('FIs5'),
        mn = n('EUHl'),
        dn = n('7BdX'),
        pn = n('7JQg'),
        fn = L.a.c18e3a3e,
        yn = L.a.d68146c0,
        hn = L.a.h5245afa,
        bn = L.a.f05dbeff,
        vn = { page: 'community', section: 'home' },
        gn = { page: 'community', section: 'latest' },
        En = { page: 'community', section: 'tweets' },
        On = un(function (e) {
          var t = g.useContext(ee.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            r = e.createLocalApiErrorHandler,
            a = e.isCommunityMember,
            o = e.rankedTweetsModule,
            i = e.tweetsModule,
            c = e.type === nr.Home ? { module: o, scribeNamespace: vn } : { module: i, scribeNamespace: gn },
            l = t ? c : { module: i, scribeNamespace: En },
            u = l.module,
            s = l.scribeNamespace
          g.useEffect(
            function () {
              n(u).catch(r())
            },
            [n, r, a, u],
          )
          var m = g.useCallback(function () {
            return g.createElement(sn.a, { buttonType: 'brandOutlined', header: fn, message: yn })
          }, [])
          return g.createElement(
            pn.b,
            { namespace: s },
            g.createElement(
              R.a,
              { behavioralEventViewType: 'tweets' },
              g.createElement(M.a, {
                loadingAccessibilityLabel: bn,
                module: u,
                newTweetsPillMode: mn.a.CLIENT,
                prerollDisplayLocation: dn.c.OTHER,
                refreshControl: null,
                renderEmptyState: m,
                title: hn,
              }),
            ),
          )
        }),
        wn = n('o3oN')
      function Cn(e, t) {
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
      var _n = Object(_.a)()
          .propsFromState(function () {
            return {
              communityId: E.c,
              community: E.a,
              communityTheme: E.f,
              fetchStatus: E.b,
              membershipsFetchStatus: wn.d,
              isCommunityMember: E.h,
              joinActionResultType: E.i,
              loggedInUser: Dt.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Lt()(e, ['loggedInUser'])
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Cn(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Cn(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: rn.c.fetchOneIfNeeded,
              fetchCommunityMemberships: wn.a,
            }
          })
          .withAnalytics({ page: 'community' }),
        Sn = (n('MvUL'), n('Ty5D'))
      function jn(e, t) {
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
      function Pn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? jn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : jn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var In = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(xe.a)(
          'svg',
          Pn(
            Pn({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
            }),
            g.createElement('path', {
              d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
            }),
          ),
        )
      }
      In.metadata = { width: 24, height: 24 }
      var Rn = In,
        Mn = n('wpLu'),
        kn = n('vFjZ'),
        Tn = L.a.bf359e0d,
        xn = L.a.e8fcdd3a,
        An = L.a.h54d99da,
        Ln = L.a.f30c8202,
        Dn = L.a.ca7eeabf,
        Hn = L.a.a55eca58,
        Fn = L.a.e97cf2bc,
        Bn = L.a.j24c37b2,
        Nn = g.memo(function (e) {
          var t = e.community,
            n = t.id_str,
            r = Object(Sn.g)(),
            a = g.useCallback(
              function () {
                r.replace('/i/communities/'.concat(n, '/'))
              },
              [r, n],
            ),
            o = Pt.a.getCommunityThemeDisplayName(Object(I.d)(t)),
            i = g.createElement(
              je.a,
              { accessibilityRole: 'list', style: zn.rulesContainer },
              t.rules.map(function (e) {
                return g.createElement(
                  Z.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: zn.rule },
                  e.name,
                )
              }),
            )
          return g.createElement(
            tt.a,
            {
              actionLabel: Bn,
              graphicDisplayMode: 'none',
              headline: Tn,
              onAction: a,
              onClose: a,
              subtext: xn,
              withCloseButton: !0,
            },
            g.createElement(
              je.a,
              { style: zn.infoItemsContainer },
              g.createElement(J.a, {
                containerStyle: zn.itemContainer,
                items: [
                  { label: An, description: Ln, decoration: g.createElement(Rn, { style: zn.decorationContainer }) },
                  { label: Dn, decoration: g.createElement(Mn.a, { style: zn.decorationContainer }), description: i },
                  {
                    label: Hn({ title: o }),
                    description: Fn,
                    decoration: g.createElement(kn.a, { style: zn.decorationContainer }),
                  },
                ],
              }),
            ),
          )
        }),
        zn = B.a.create(function (e) {
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
        Un = Nn,
        Kn = n('dwig'),
        Wn = n('MDbM'),
        Vn = n('0+qk'),
        Xn = n('oQhu'),
        Yn = n('/de5'),
        Gn = n('VS6U'),
        Qn = n('QRqA'),
        Zn = n('Qwev'),
        qn = n('mw9i')
      function Jn(e, t) {
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
      function $n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Jn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function er(e) {
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
      var tr = { type: 'serversideContextKey', serversideContextType: 'community' },
        nr = Object.freeze({ Home: 'home', Latest: 'latest' }),
        rr = L.a.a7c2e06c,
        ar = (function (e) {
          d()(n, e)
          var t = er(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(s()(e), '_getTweetButtonLocationState', function () {
                return { selectedCommunityId: e.props.communityId, defaultText: '' }
              }),
              v()(
                s()(e),
                '_getClientEntity',
                Object(Xn.a)(function (e) {
                  return $n($n({}, tr), {}, { serversideContextId: e })
                }),
              ),
              v()(
                s()(e),
                '_getWelcomeEducationParams',
                Object(Xn.a)(function (e, t) {
                  return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
                }),
              ),
              v()(s()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.community,
                  r = t.communityId,
                  a = t.fetchStatus,
                  o = t.history,
                  i = t.joinActionResultType,
                  c = t.location,
                  l = t.match,
                  u = (null == n ? void 0 : n.role) === I.a.Admin && void 0 !== c.query.show_creation_summary,
                  s = e._isAllowedToTweet
                    ? g.createElement(Vn.a, { getLocationState: e._getTweetButtonLocationState, history: o })
                    : null
                return r && a === Wn.a.LOADING
                  ? g.createElement(Zn.a, { style: or.topMargin })
                  : r && null != n && n.name && a === Wn.a.LOADED
                  ? g.createElement(
                      Kn.a,
                      { component: qn.a, fab: s },
                      g.createElement(Qn.a, e._getWelcomeEducationParams(n, i)),
                      u && g.createElement(Un, { community: n }),
                      e._renderCommunityDetail(),
                      g.createElement(
                        Sn.c,
                        { exact: !0, path: '/i/communities/'.concat(r, '/about') },
                        g.createElement(he, { communityId: r, match: l }),
                      ),
                      g.createElement(
                        Sn.e,
                        null,
                        g.createElement(
                          Sn.c,
                          { exact: !0, path: '/i/communities/'.concat(r, '/') },
                          g.createElement(On, { communityId: r, location: c, match: l, type: nr.Home }),
                        ),
                        g.createElement(
                          Sn.c,
                          { path: '/i/communities/'.concat(r, '/latest') },
                          g.createElement(On, { communityId: r, location: c, match: l, type: nr.Latest }),
                        ),
                      ),
                    )
                  : g.createElement(Yn.b, { history: o, location: c, match: l })
              }),
              v()(s()(e), '_renderCommunityDetail', function () {
                var t = e.props,
                  n = t.communityId,
                  r = t.history,
                  a = t.match
                return n ? g.createElement(nn, { communityId: n, history: r, match: a }) : null
              }),
              v()(s()(e), '_handleFetchIfNeeded', function () {
                var t = e.props,
                  n = t.communityId,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchCommunityIfNeeded,
                  o = t.fetchCommunityMemberships,
                  i = t.membershipsFetchStatus
                n && a(n).catch(r({})), i === _e.a.NONE && o().catch(r())
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
                      ? g.createElement(qe, {
                          canModerate: Object(I.c)(null == t ? void 0 : t.role),
                          communityId: n,
                          userRole: null == t ? void 0 : t.role,
                        })
                      : null
                  return g.createElement(
                    be.a,
                    { clientEntity: this._getClientEntity(n || ''), viewType: 'community' },
                    g.createElement(Gn.a, {
                      backLocation: a && '/'.concat(a, '/communities'),
                      composeOptions: this._getTweetButtonLocationState(),
                      documentTitle: i ? rr({ communityName: i }) : '',
                      history: r,
                      primaryContent: this._renderPrimaryContent(),
                      rightControl: c,
                      sidebarContent: g.createElement(ve.a, { communityId: n, withCommunityRules: o }),
                      title: i || null,
                      withTweetButton: this._isAllowedToTweet,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      v()(ar, 'contextType', ee.a)
      var or = B.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        ir = _n(ar)
      t.default = ir
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('v6aA'),
        c = n('p+r5'),
        l = n('3XMw'),
        u = n.n(l),
        s = n('Ig1G'),
        m = u.a.e2df7cf1,
        d = u.a.be9bb312,
        p = u.a.e988475f,
        f = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            r = e.communityPurpose,
            l = e.onChange,
            u = o.useState(void 0),
            f = a()(u, 2),
            y = f[0],
            h = f[1],
            b = o.useState(!1),
            v = a()(b, 2),
            g = v[0],
            E = v[1],
            O = o.useContext(i.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            w = o.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(s.g)(t, 3, O)
                n && h(p({ minCharacterCount: 3, maxCharacterCount: O })), E(n), l(t, n)
              },
              [O, h, l],
            )
          return o.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: s.b,
            errorText: y,
            helperText: d,
            invalid: g,
            label: m,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: w,
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
        i = n('+Kfv'),
        c = n('ROT1'),
        l = n('U0Qk'),
        u = n('eSoz'),
        s = n('RqPI'),
        m = n('rxPX'),
        d = Object(m.a)()
          .propsFromState(function () {
            return { communitiesActions: s.f }
          })
          .propsFromActions(function () {
            return { createCommunity: u.b }
          }),
        p = n('jHSc'),
        f = n('3XMw'),
        y = n.n(f),
        h = n('0weh'),
        b = n('5FtR'),
        v = n('MWbm'),
        g = n('/yvb'),
        E = n('4zmP'),
        O = n('t62R'),
        w = n('rHpw'),
        C = y.a.i6e7e298,
        _ = y.a.a226497c,
        S = y.a.c9d56b71,
        j = y.a.fc2a5c92,
        P = y.a.c1ad5a11,
        I = o.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            r = e.history,
            u = o.useState(!0),
            s = a()(u, 2),
            m = s[0],
            d = s[1],
            f = o.useState(!1),
            y = a()(f, 2),
            w = y[0],
            I = y[1],
            M = m || w,
            k = o.useState(''),
            T = a()(k, 2),
            x = T[0],
            A = T[1],
            L = o.useState(''),
            D = a()(L, 2),
            H = D[0],
            F = D[1],
            B = o.useState(null),
            N = a()(B, 2),
            z = N[0],
            U = N[1],
            K = o.useCallback(function (e, t) {
              A(e), d(t)
            }, []),
            W = o.useCallback(function (e, t) {
              F(e), 0 === e.length ? I(!1) : I(t)
            }, []),
            V = o.useCallback(
              function () {
                U(null),
                  n(x, { description: H })
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && r.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && U(e)
                    })
                    .catch(function (e) {
                      U({ error: 'GraphQL error', reason: e })
                    })
              },
              [x, H, n, r],
            )
          if (null == t || !t.create) return o.createElement(b.a, { to: '/home' })
          var X = o.createElement(g.a, { disabled: M, onClick: V, size: 'small', type: 'brandFilled' }, C),
            Y = z
              ? o.createElement(
                  v.a,
                  { style: R.error },
                  o.createElement(E.a, { Icon: h.a, headline: j, text: P, type: 'danger' }),
                )
              : void 0
          return o.createElement(
            i.a,
            { viewType: 'community' },
            o.createElement(
              p.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: R.root,
                history: r,
                rightControl: X,
                title: _,
              },
              o.createElement(
                o.Fragment,
                null,
                Y,
                o.createElement(O.b, { color: 'gray700', style: R.text }, S),
                o.createElement(c.a, { autoFocus: !0, communityName: x, onChange: K }),
                o.createElement(l.a, { communityPurpose: H, onChange: W }),
              ),
            ),
          )
        }),
        R = w.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        M = d(I)
      t.default = M
    },
    XtoV: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n('v6aA'),
        u = n('/yvb'),
        s = n('3XMw'),
        m = n.n(s),
        d = n('pwey'),
        p = m.a.b139b549,
        f = c.createElement(d.a, null),
        y = c.memo(function (e) {
          var t = e.community,
            n = i()(e, ['community'])
          if (
            !c.useContext(l.a).featureSwitches.isTrue('c9s_invites_enabled') ||
            !t ||
            'CommunityInvitesUnavailable' === t.invites_result.__typename
          )
            return null
          var r = '/i/communities/'.concat(t.id_str, '/invite')
          return c.createElement(u.a, a()({ accessibilityLabel: p, icon: f, link: r, type: 'primaryText' }, n))
        })
      t.a = y
    },
    Y3cQ: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('fyvP'),
        o = n('rHpw'),
        i = n('MWbm')
      t.a = function (e) {
        return r.createElement(i.a, { style: c.root }, r.createElement(a.a, e))
      }
      var c = o.a.create(function (e) {
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
        l = n('v6aA'),
        u = n('XOJV'),
        s = n('eSoz'),
        m = n('rxPX'),
        d = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            r = n && u.a.select(e, n)
          return r ? Object(s.g)(e, r) : void 0
        },
        y = Object(m.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: u.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        b = n('uCxL'),
        v = n('x5Pi'),
        g = y(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            u =
              (e.tweetId,
              i()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            s = c.useContext(l.a),
            m = s.featureSwitches,
            d = s.loggedInUserId,
            p = null == o ? void 0 : o.community_id_str
          c.useEffect(
            function () {
              p && Object(h.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var f = m.isTrue('responsive_web_alt_text_badge_enabled'),
            y = o && Object(v.f)(o, d, t),
            g = y && Object(v.e)(y),
            E = m.isTrue('responsive_web_reactions_enabled')
          return c.createElement(
            b.a,
            a()({}, u, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: f,
              socialContextProps: g,
              tweet: o,
              withReactions: E,
            }),
          )
        })
      t.a = g
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        o = n('Ud88'),
        i = n('aQQo'),
        c = i.loadQuery,
        l = i.useTrackLoadQueryInRender,
        u = n('ERkP'),
        s = u.useCallback,
        m = u.useEffect,
        d = u.useRef,
        p = u.useState,
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
        var u = a(),
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
          w = E[1]
        n !== O && (f.current.add(n), w(n), g(n))
        var C = s(
            function () {
              u.current && (f.current.add(y), g(y))
            },
            [u],
          ),
          _ = s(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (u.current) {
                var a,
                  o = c(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : i, e, t, r)
                f.current.add(o), g(o)
              }
            },
            [i, e, g, u],
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
              if (u.current) {
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
            [v, u, _, e],
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
          ['NullQueryReference' === v.kind ? null : v, _, C]
        )
      }
    },
    'cz/h': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesDiscoveryScreen', function () {
          return k
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('ERkP')),
        v = n('es0u'),
        g = n('WpDa'),
        E = n('ZNT5'),
        O = Object(E.a)({
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
          formatResponse: g.a,
        }),
        w = n('OUEC'),
        C = n('3XMw'),
        _ = n.n(C),
        S = n('oQhu'),
        j = n('yoO3'),
        P = n('fTQJ'),
        I = n('VS6U')
      function R(e) {
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
      var M = _.a.cb6adb1f,
        k = (function (e) {
          s()(n, e)
          var t = R(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderPrimaryContent', function () {
                var t = e._getModule()
                return b.createElement(P.a, { entryConfiguration: w.a, module: t, refreshControl: null, title: M })
              }),
              h()(
                l()(e),
                '_getModule',
                Object(S.a)(function () {
                  return O
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
                  return b.createElement(
                    j.a,
                    { behavioralEventViewType: 'discover' },
                    b.createElement(I.a, {
                      backLocation: '/',
                      history: e,
                      primaryContent: this._renderPrimaryContent(),
                      sidebarContent: b.createElement(v.a, null),
                      title: M,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.default = k
    },
    fS8x: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = (n('OZaJ'), n('VrFO')),
        o = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        s = n('5Yy7'),
        m = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        y = n.n(f),
        h = n('KEM+'),
        b = n.n(h),
        v = n('/NU0'),
        g = n('rxPX'),
        E = n('AspN'),
        O = function (e, t) {
          return t.media ? t.media : Object(v.a)(t.mediaId) ? Object(E.k)(e, t.mediaId)[0] : void 0
        },
        w = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        C = Object(g.a)()
          .propsFromState(function () {
            return { media: O, mediaId: w }
          })
          .propsFromActions(function () {
            return { processMedia: E.f, updateMediaUpload: E.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        _ = n('jHSc'),
        S = n('3XMw'),
        j = n.n(S),
        P = n('EeFI'),
        I = 'applyButton',
        R = n('/yvb'),
        M = n('rHpw')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var T = j.a.gd80afba,
        x = j.a.a753a87f,
        A = (function (e) {
          m()(n, e)
          var t = k(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              b()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              b()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return r.createElement(
                  R.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: I, type: 'primaryFilled' },
                  x,
                )
              }),
              b()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              b()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    r = n.analytics,
                    o = n.media,
                    i = n.mediaId,
                    c = n.onDone,
                    l = n.processMedia,
                    u = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var s = t.getCropData(),
                    m = (o || {}).originalMediaFile,
                    d = !m || (0 === s.top && 0 === s.left && s.width === m.width && s.height === m.height)
                  Object(v.a)(i) &&
                    (e
                      ? (e(s), c())
                      : (u({ id: i, cropData: d ? void 0 : s }),
                        l(i).then(function () {
                          a.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), c()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = r.createRef()),
              e.media || e.onCancel(),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    a = e.title,
                    o = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    c = this._getMedia()
                  return r.createElement(
                    _.b,
                    {
                      backButtonType: 'back',
                      containerStyle: L.root,
                      documentTitle: a || T,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || T,
                    },
                    r.createElement(P.a, {
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
        })(r.Component),
        L = M.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        D = C(A),
        H = n('X8FW'),
        F = M.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.createElement(
          H.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: F.modal },
          r.createElement(D, e),
        )
      }
    },
    iY63: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
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
      function u(e) {
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
      var s = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z',
            }),
          ),
        )
      }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        l = n('t62R'),
        u = n('I4+6'),
        s = n('cm6r'),
        m = n('rHpw'),
        d = n('MWbm'),
        p = m.a.create(function (e) {
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
          f = i()(e, ['align', 'color', 'label']),
          y = u.a.generate({
            backgroundColor: m.a.theme.colors.transparent,
            color: m.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return c.createElement(
          d.a,
          { style: p.container },
          c.createElement(
            s.a,
            a()({}, f, { interactiveStyles: y, style: p.root }),
            c.createElement(l.b, { align: n, color: r }, o),
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
        return h
      })
      var r = n('ERkP'),
        a = n('WpDa'),
        o = n('ZNT5'),
        i = n('FIs5'),
        c = n('3XMw'),
        l = n.n(c),
        u = n('oQhu'),
        s = n('fTQJ'),
        m = l.a.cdd87523,
        d = l.a.cca5191f,
        p = l.a.e442bbb4,
        f = l.a.e9488b0d,
        y = l.a.j43fea20,
        h = { Moderators: 'Moderators', Members: 'Members' },
        b = Object(u.a)(function (e) {
          return (function (e) {
            return Object(o.a)({
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
              formatResponse: a.a,
            })
          })(e)
        }),
        v = Object(u.a)(function (e) {
          return (function (e) {
            return Object(o.a)({
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
              formatResponse: a.a,
            })
          })(e)
        }),
        g = function () {
          return r.createElement(i.a, { header: m, message: d })
        }
      t.b = function (e) {
        var t = e.communityId,
          n = e.mode === h.Moderators,
          a = n ? v(t) : b(t),
          o = n ? f : y
        return r.createElement(s.a, { loadingAccessibilityLabel: o, module: a, renderEmptyState: g, title: p })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return Q
        })
      n('WNMA'), n('KqXw')
      var r = n('ERkP'),
        a = n('v6aA'),
        o = n('Ig1G'),
        i = n('rxPX'),
        c = n('0KEI'),
        l = n('R5kW'),
        u = function (e, t) {
          var n,
            r = Object(l.b)(e, t.communityId)
          return null !== (n = null == r ? void 0 : r.tweet_case_count) && void 0 !== n ? n : 0
        },
        s = function (e, t) {
          return Object(l.c)(e, t.communityId)
        },
        m = Object(i.a)()
          .propsFromState(function () {
            return { count: u, moderationFetchStatus: s }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              fetchCommunityModerationData: l.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        d = n('kGix'),
        p = n('3XMw'),
        f = n.n(p),
        y = n('KQzH'),
        h = n('mWs5'),
        b = n('MWbm'),
        v = n('rHpw'),
        g = n('Znyr'),
        E = n('6vad'),
        O = n('csss'),
        w = n('zIWA'),
        C = n('M2x3'),
        _ = n('SNyS'),
        S = n('S+H3'),
        j = n('PU7B'),
        P = f.a.dce5e1b3,
        I = f.a.c5d8c93d,
        R = f.a.c8c7f9fc,
        M = f.a.c045c7b6,
        k = f.a.a87df2ee,
        T = f.a.dc6ce7b4,
        x = f.a.gfca5254,
        A = f.a.bb081ea1,
        L = f.a.h6beb5fa,
        D = f.a.e3f04700,
        H = f.a.efc26607,
        F = f.a.adfcc3cd,
        B = f.a.d0330d9c,
        N = f.a.fd67f7c8,
        z = f.a.gc00d212,
        U = f.a.a997eca0,
        K = v.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        W = r.createElement(w.a, { style: K.thumbnail }),
        V = r.createElement(C.a, { style: K.thumbnail }),
        X = r.createElement(_.a, { style: K.thumbnail }),
        Y = r.createElement(S.a, { style: K.thumbnail }),
        G = r.createElement(j.a, { style: K.thumbnail }),
        Q = function (e) {
          var t = r.useContext(a.a).featureSwitches,
            n = e.community,
            i = e.communityId,
            c = e.count,
            l = e.createLocalApiErrorHandler,
            u = e.fetchCommunityModerationData,
            s = e.match,
            m = e.moderationFetchStatus,
            p = l(),
            f = t.isTrue('c9s_moderation_enabled'),
            v = t.isTrue('c9s_rule_management_enabled')
          r.useEffect(
            function () {
              m === d.a.NONE && f && u(i).catch(p)
            },
            [p, i, u, m, f],
          )
          var w = n.role,
            C = w === o.a.Admin ? P : I,
            _ = w === o.a.Admin ? F : B,
            S = !s.isExact
          return r.createElement(
            h.a,
            { communityId: i, screenType: 'secondaryRoot', title: C, withDetailOpen: S },
            r.createElement(
              b.a,
              null,
              f
                ? r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(E.b, { text: R }),
                    r.createElement(y.a, {
                      label: M,
                      link: '/i/communities/'.concat(i, '/moderation/reported_tweets'),
                      renderRightContent: function () {
                        return f && c > 0
                          ? r.createElement(g.a, {
                              count: c,
                              standalone: !0,
                              truncatedCountFormatter: L,
                              unreadCountLabel: D,
                              withBorder: !1,
                            })
                          : null
                      },
                      thumbnail: W,
                    }),
                  )
                : null,
              r.createElement(E.b, { text: k }),
              r.createElement(y.a, {
                description: H({ memberCount: n.member_count }),
                label: T,
                link: '/i/communities/'.concat(i, '/tools/members'),
                thumbnail: Y,
              }),
              v
                ? r.createElement(y.a, {
                    description: _,
                    label: x,
                    link: '/i/communities/'.concat(i, '/tools/rules'),
                    thumbnail: G,
                  })
                : null,
              w === o.a.Admin
                ? r.createElement(y.a, {
                    description: N,
                    label: A,
                    link: '/i/communities/'.concat(i, '/tools/settings'),
                    thumbnail: V,
                  })
                : null,
              r.createElement(O.a, {
                description: U,
                label: z,
                link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                thumbnail: X,
              }),
            ),
          )
        },
        Z = m(Q)
      t.default = Z
    },
    m0MN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesModerationContainer', function () {
          return $e
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('WNMA'), n('KqXw'), n('ERkP')),
        l = n('+Kfv'),
        u = n('Ig1G'),
        s = n('1Idg'),
        m = n('eSoz'),
        d = n('rxPX'),
        p = n('0KEI'),
        f = Object(d.a)()
          .propsFromState(function () {
            return { community: s.a, fetchStatus: s.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: m.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        y = n('G1WX'),
        h = n('/de5'),
        b = (n('ho0z'), n('v6aA')),
        v = n('es0u'),
        g = n('KEM+'),
        E = n.n(g),
        O =
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
        w = n.n(O),
        C = (n('z84I'), n('3zvM')),
        _ = n('lMB6'),
        S = Object(C.f)({ namespace: 'communityReports' }),
        j = _.a.register(S),
        P = n('G6rE')
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = function (e, t) {
          var n,
            r = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (r ? j.selectMany(e, r) : []).map(function (t) {
            var n = t.user
            return R(R({}, t), {}, { reporter: P.e.select(e, n) })
          })
        },
        k = Object(d.a)().propsFromState(function () {
          return { reports: M }
        }),
        T = n('3XMw'),
        x = n.n(T),
        A = n('MWbm'),
        L = n('t62R'),
        D = n('855f'),
        H = n('GBcw'),
        F = n('cHvH'),
        B = n('IMA+'),
        N = n('rHpw'),
        z = n('5mJL'),
        U = n('efqG'),
        K = n('21zW'),
        W = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return c.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              c.createElement(L.b, { color: 'primary' }, x.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: D.a.getFormattedCount(e) })
        },
        V = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            r = t.created_at,
            a = t.reporter,
            o = c.createElement(H.a, { timestamp: r })
          return a
            ? c.createElement(F.a, null, function (e) {
                var r = e.windowWidth
                return c.createElement(
                  A.a,
                  { style: n ? Y.bottomBorder : null },
                  c.createElement(B.a, {
                    avatarUri: a.profile_image_url_https,
                    decoration: o,
                    displayMode: 'UserCompact',
                    isProtected: a.protected,
                    isVerified: a.verified,
                    name: a.name,
                    screenName: a.screen_name,
                    style: r > N.a.theme.breakpoints.small ? Y.userCell : void 0,
                    userId: a.id_str,
                  }),
                  c.createElement(
                    z.a,
                    { avatarCell: null },
                    c.createElement(L.b, { color: 'gray700', size: 'subtext2', style: Y.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        X = k(function (e) {
          var t = c.useState(!1),
            n = w()(t, 2),
            r = n[0],
            a = n[1],
            o = e.reports,
            i = e.tweetCase,
            l = i.report_count,
            u = i.report_created_at_max
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              U.a,
              {
                contentStyle: Y.popover,
                onDismiss: function () {
                  a(!1)
                },
                renderContent: function () {
                  return c.createElement(
                    A.a,
                    { style: Y.contentContainer },
                    o.map(function (e, t) {
                      return c.createElement(V, { key: e.id_str, report: e, withBottomBorder: t < o.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: r ? 'forceVisible' : 'forceHidden',
              },
              c.createElement(
                L.b,
                {
                  onPress: function () {
                    a(!0)
                  },
                },
                W(l),
              ),
            ),
            c.createElement(K.a, null),
            c.createElement(H.a, { timestamp: u }),
          )
        }),
        Y = N.a.create(function (e) {
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
        G = n('9EWH')
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var q = Object(C.f)({ namespace: 'communityCases' }),
        J = {
          keepTweet: Object(C.c)(q, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(G.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(C.c)(q, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(G.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        $ = Z(Z({}, q), J),
        ee = _.a.register($),
        te = n('XOJV'),
        ne = function (e, t) {
          var n = t.tweetId
          return n ? te.a.selectHydrated(e, n) : void 0
        },
        re = function (e, t) {
          var n = t.tweetId
          return ee.select(e, n)
        },
        ae = Object(d.a)()
          .propsFromState(function () {
            return { tweet: ne, tweetCase: re }
          })
          .propsFromActions(function () {
            return { keep: ee.keepTweet, dismiss: ee.dismissTweet }
          }),
        oe = n('b5s6'),
        ie = n('mjJ+'),
        ce = n('0yYu'),
        le = n('/yvb'),
        ue = n('IG7M'),
        se = n('boUI'),
        me = n('zIWA'),
        de = n('5oT/'),
        pe = n('fz3c'),
        fe = (n('yH/f'), n('h0NW')),
        ye = n('n5fo'),
        he = n('6Rrp'),
        be = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        ve = x.a.ad10c66d,
        ge = x.a.c6caed9c,
        Ee = function (e) {
          return c.createElement(L.b, null, e)
        },
        Oe = function (e) {
          var t = e.screenName
          switch (e.type) {
            case be.Hidden:
              var n = (function (e) {
                  return c.createElement(x.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                r = [{ label: Ee(n), decoration: Ce }]
              return c.createElement(fe.a, { accessibilityLabel: ve, containerStyle: we.container, items: r })
            case be.Kept:
              var a = (function (e) {
                  return c.createElement(x.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                o = [{ label: Ee(a), decoration: _e }]
              return c.createElement(fe.a, { accessibilityLabel: ge, containerStyle: we.container, items: o })
            default:
              return null
          }
        },
        we = N.a.create(function (e) {
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
        Ce = c.createElement(ye.a, { style: we.icon }),
        _e = c.createElement(he.a, { style: we.icon })
      function Se(e, t) {
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
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Se(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Se(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Pe = { page: 'reported_tweets', component: 'tweet' },
        Ie = x.a.f1d9930c,
        Re = x.a.a219e217,
        Me = x.a.fa524057,
        ke = x.a.g30bc699,
        Te = x.a.f0306107,
        xe = x.a.b99364a5,
        Ae = ae(function (e) {
          var t,
            n = c.useContext(b.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            r = e.dismiss,
            a = e.keep,
            o = e.tweet,
            i = e.tweetCase,
            u = e.tweetId,
            s = null == o || null === (t = o.user) || void 0 === t ? void 0 : t.screen_name,
            m = c.useCallback(
              function (e) {
                if (o && s) {
                  var t = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: ke({ screenName: s }),
                      Icon: se.a,
                      link: '/'.concat(s),
                    },
                    {
                      text: Te,
                      Icon: me.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(pe.a.Tweet, '/').concat(o.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: Pe },
                      },
                      onClick: function () {
                        e()
                      },
                    },
                  ]
                  return (
                    n &&
                      t.push({
                        text: xe({ screenName: s }),
                        Icon: de.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(pe.a.RemoveCommunityMember, '/').concat(o.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Pe },
                        },
                        onClick: function () {
                          e()
                        },
                      }),
                    c.createElement(ie.a, { items: t, onCloseRequested: e })
                  )
                }
                return null
              },
              [o, s, n],
            ),
            d = function () {
              a(u)
            },
            p = function () {
              r(u)
            }
          if (s && (null == o ? void 0 : o.reportingVisibility) === pe.b.HiddenCommunityTweet)
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(Oe, { screenName: s, type: be.Hidden }),
              c.createElement(ce.a, null),
            )
          if (
            (null != i && i.isDismissed) ||
            'community_tweet_member_removed' === (null == o ? void 0 : o.limited_actions)
          )
            return null
          if (s && null != i && i.isKept)
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(Oe, { screenName: s, type: be.Kept }),
              c.createElement(ce.a, null),
            )
          if (!i) return null
          return c.createElement(
            l.a,
            { viewType: 'tweet_moderation_case' },
            c.createElement(
              A.a,
              { style: Le.container },
              c.createElement(
                A.a,
                { style: Le.reportsBar },
                c.createElement(X, { tweetCase: i }),
                c.createElement(ue.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: m,
                  style: Le.menu,
                }),
              ),
              c.createElement(oe.a, { tweetId: u }),
              o
                ? c.createElement(F.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= N.a.theme.breakpoints.small
                    return c.createElement(
                      A.a,
                      { style: [Le.buttons, t && Le.buttonsMobile] },
                      c.createElement(
                        le.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(pe.a.HideCommunityTweet, '/').concat(u),
                            state: { scribeNamespace: je(je({}, Pe), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Le.button, t && Le.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Ie,
                      ),
                      c.createElement(
                        le.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: d,
                          size: 'large',
                          style: [Le.button, t && Le.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Me,
                      ),
                    )
                  })
                : c.createElement(
                    A.a,
                    { style: Le.buttons },
                    c.createElement(
                      le.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: p,
                        style: Le.button,
                        type: 'primaryOutlined',
                      },
                      Re,
                    ),
                  ),
            ),
            c.createElement(ce.a, null),
          )
        }),
        Le = N.a.create(function (e) {
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
        De = n('hqKg'),
        He = n('wAC9')
      function Fe(e, t) {
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
      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Fe(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ne = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        ze = function () {
          return Object(De.createSelector)(Ne, function (e) {
            return e
              ? (function (e) {
                  return Object(He.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return Be(Be({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Ue = Object(d.a)()
          .propsFromState(function () {
            return { sliceModule: ze() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Ke = n('FIs5'),
        We = n('yoO3'),
        Ve = n('VS6U'),
        Xe = n('FS1z'),
        Ye = x.a.c045c7b6,
        Ge = x.a.dffb0774,
        Qe = x.a.cbb2a93c,
        Ze = Ue(function (e) {
          var t = c.useContext(b.a).featureSwitches,
            n = e.community,
            r = e.history,
            a = e.sliceModule,
            o = n.id_str,
            i = n.name,
            l = (n || []).rules,
            u = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            s = t.isTrue('responsive_web_communities_slices_enabled'),
            m = a
              ? c.createElement(Xe.a, {
                  module: a,
                  noItemsRenderer: function () {
                    return c.createElement(Ke.a, { header: Ge, message: Qe })
                  },
                  renderer: function (e) {
                    return c.createElement(Ae, { tweetId: e })
                  },
                })
              : null
          return c.createElement(
            We.a,
            { behavioralEventViewType: 'reported_tweets' },
            c.createElement(Ve.a, {
              backLocation: '/i/communities/'.concat(o),
              history: r,
              primaryContent: s ? m : null,
              sidebarContent: c.createElement(v.a, {
                communityId: o,
                rulesLimit: null == l ? void 0 : l.length,
                withCommunityRules: u,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: i,
              title: Ye,
            }),
          )
        }),
        qe = n('Ty5D')
      function Je(e) {
        e.analytics
        var t = e.community,
          n = i()(e, ['analytics', 'community']),
          r = n.match.path
        return Object(u.c)(t.role)
          ? c.createElement(
              l.a,
              { viewType: 'community' },
              c.createElement(
                qe.e,
                null,
                c.createElement(
                  qe.c,
                  { exact: !0, path: ''.concat(r, '/reported_tweets') },
                  c.createElement(Ze, a()({}, n, { community: t })),
                ),
                c.createElement(qe.c, null, c.createElement(h.b, n)),
              ),
            )
          : c.createElement(h.b, n)
      }
      function $e(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          r = e.fetchCommunityIfNeeded,
          o = e.fetchStatus,
          l = i()(e, ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus']),
          u = l.match.params.communityId,
          s = n(),
          m = c.useCallback(
            function () {
              u && r(u).catch(s)
            },
            [u, s, r],
          )
        return (
          c.useEffect(
            function () {
              return m()
            },
            [m],
          ),
          c.createElement(y.a, {
            fetchStatus: o,
            onRequestRetry: m,
            render: function () {
              return t ? c.createElement(Je, a()({}, l, { community: t })) : null
            },
          })
        )
      }
      t.default = f($e)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      n('2G9S')
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        i = n('M2mT'),
        c = n('MWbm'),
        l = n('mw9i'),
        u = n('0yYu'),
        s = n('/yvb'),
        m = n('rHpw'),
        d = o.a.i2209530
      function p(e) {
        var t = e.children,
          n = e.communityId,
          a = e.onSubmit,
          o = e.rightControl,
          m = e.screenType,
          p = e.secondaryBar,
          y = e.submitDisabled,
          h = e.subtitle,
          b = e.title,
          v = e.withBottomBorder,
          g = e.withDetailOpen,
          E = '/i/communities/'.concat(n),
          O = ''.concat(E, '/tools'),
          w = 'secondaryRoot' === m ? E : O
        return r.createElement(
          i.a,
          {
            backLocation: w,
            rightControl: o,
            screenType: m,
            secondaryBar: p,
            showSubtitleOnWideDetail: !1,
            subtitle: h,
            title: b,
            withBottomBorder: v,
            withDetailOpen: g,
          },
          r.createElement(
            l.a,
            { style: f.contentRoot },
            r.createElement(c.a, { style: f.chilrenRoot }, t),
            a
              ? r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(u.a, null),
                  r.createElement(
                    l.a,
                    { style: f.buttonContainer },
                    r.createElement(s.a, { disabled: y, onPress: a, style: f.button, type: 'brandFilled' }, d),
                  ),
                )
              : null,
          ),
        )
      }
      var f = m.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(m.a.iPhoneOffsetBottom, ')'),
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
          return D
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n('v6aA'),
        c = n('eSoz'),
        l = n('xZGM'),
        u = n('rxPX'),
        s = n('0KEI'),
        m = n('1Idg'),
        d = function (e, t) {
          return Object(l.y)(e, l.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: m.e, rule: m.d, shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(l.v)(l.h)
              },
              editRule: c.c.editRule,
              removeRule: c.c.removeRule,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_rule' }),
        f = n('k49u'),
        y = n('jHSc'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('5FtR'),
        g = n('OwKm'),
        E = n('AfjF'),
        O = n('MWbm'),
        w = n('/yvb'),
        C = n('jtO7'),
        _ = n('4zmP'),
        S = n('eb3s'),
        j = n('rHpw'),
        P = b.a.h99020ef,
        I = b.a.i2209530,
        R = b.a.a1c93d73,
        M = b.a.f74a5adb,
        k = b.a.fbb0ed91,
        T = b.a.gea6cc19,
        x = b.a.hed35471,
        A = b.a.c8677445,
        L = b.a.c3a0d44e
      function D(e) {
        var t = o.useContext(i.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          r = e.community,
          c = e.createLocalApiErrorHandler,
          l = e.editRule,
          u = e.history,
          s = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          p = e.shouldShowRuleInformEducation,
          h = r.id_str,
          b = r.rules,
          j = o.useState(''),
          D = a()(j, 2),
          F = D[0],
          B = D[1],
          N = o.useState(''),
          z = a()(N, 2),
          U = z[0],
          K = z[1],
          W = o.useState(!1),
          V = a()(W, 2),
          X = V[0],
          Y = V[1],
          G = o.useState(''),
          Q = a()(G, 2),
          Z = Q[0],
          q = Q[1],
          J = o.useState(!1),
          $ = a()(J, 2),
          ee = $[0],
          te = $[1],
          ne = o.useState(!1),
          re = a()(ne, 2),
          ae = re[0],
          oe = re[1],
          ie = o.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                r = e.valid
              B(n), K(t), Y(r)
            },
            [B, K, Y],
          ),
          ce = o.useCallback(
            function () {
              var e = c({
                customErrorHandler: function (e) {
                  var t = a()(e.errors, 1)[0],
                    n = t.code === f.a.GenericBadRequest && t.message ? t.message : R
                  return q(n), Y(!1), []
                },
              })
              'string' == typeof d &&
                l(h, { ruleId: d, name: F, description: U })
                  .then(function () {
                    u.goBack({ backLocation: '/i/communities/'.concat(h, '/tools/rules') })
                  })
                  .catch(e)
            },
            [h, F, U, d, l, u, c],
          ),
          le = o.useCallback(
            function () {
              var e = c({
                customErrorHandler: function (e) {
                  var t = a()(e.errors, 1)[0],
                    n = t.code === f.a.GenericBadRequest && t.message ? t.message : R
                  return q(n), te(!1), []
                },
              })
              'string' == typeof d &&
                s(h, { ruleId: d })
                  .then(function () {
                    u.goBack({ backLocation: '/i/communities/'.concat(h, '/tools/rules') })
                  })
                  .catch(e)
            },
            [h, d, s, u, c],
          )
        if (!d || !m) return o.createElement(v.a, { to: '/i/communities/'.concat(h, '/tools/rules') })
        var ue = m.description,
          se = m.name,
          me = o.createElement(
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
            ? o.createElement(
                O.a,
                { style: H.delete },
                o.createElement(C.a, {
                  color: 'red500',
                  disabled: de,
                  label: k,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          fe = de ? o.createElement(O.a, { style: H.callout }, o.createElement(_.a, { text: M })) : void 0,
          ye = ee
            ? o.createElement(S.a, {
                cancelButtonLabel: L,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: T,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: le,
                text: x,
              })
            : void 0,
          he = ae
            ? o.createElement(E.a, {
                onCancel: function () {
                  oe(!1)
                },
                onConfirm: function () {
                  n(), ce(), oe(!1)
                },
              })
            : void 0
        return o.createElement(
          y.b,
          { behavioralEventViewType: 'rules', history: u, rightControl: me, title: P },
          fe,
          o.createElement(g.a, { description: ue || '', errorText: Z, name: se, onChange: ie }),
          pe,
          ye,
          he,
        )
      }
      t.default = p(D)
      var H = j.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return B
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        u = n('1Pcy'),
        s = n.n(u),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        h = n.n(y),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        E = n('pXBW'),
        O = n('6/RC'),
        w = n('UIzd'),
        C = n.n(w),
        _ = n('kGix')
      n.d(t, 'a', function () {
        return _.a
      })
      var S = n('fs1G'),
        j = n('0KEI'),
        P = n('lU4h'),
        I = n.n(P),
        R = n('21nk'),
        M = n.n(R),
        k = n('bCEw'),
        T = n.n(k),
        x = n('Ud88'),
        A = n.n(x)
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var D = function (e) {
          return (0, e.render)({ fetchStatus: _.a.LOADING, data: null, error: null, retry: S.a })
        },
        H = (function (e) {
          d()(n, e)
          var t = L(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(a))), v()(s()(e), 'state', { error: null }), e
          }
          return (
            l()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof E.a)) throw e
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
        })(g.Component),
        F = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = M()(t, n)
          return r({ fetchStatus: _.a.LOADED, data: a, error: null, retry: S.a })
        },
        B = function (e, t) {
          if (O.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                o = void 0 === r ? 'store-or-network' : r,
                i = n.render,
                c = n.variables,
                l = T()(e),
                u = a()(l, 2),
                s = u[0],
                m = u[1],
                d = Object(j.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = I()(c),
                f = a()(p, 1)[0],
                y = g.useCallback(
                  function () {
                    m(f, { fetchPolicy: 'network-only' })
                  },
                  [m, f],
                )
              return (
                g.useLayoutEffect(
                  function () {
                    m(f, { fetchPolicy: o })
                  },
                  [o, m, f],
                ),
                s
                  ? g.createElement(
                      g.Suspense,
                      { fallback: g.createElement(D, { render: i }) },
                      g.createElement(
                        H,
                        { errorHandler: d(t.errorConfig.options || {}), key: s.fetchKey, retry: y },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: _.a.FAILED, error: t, data: null, retry: n })
                            : g.createElement(F, { query: e, queryRef: s, render: i })
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
              l = Object(j.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              u = I()(i),
              s = a()(u, 1)[0],
              m = n.get(c)
            if (m) return m
            var d = g.lazy(function () {
              return C()(c, e, s)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: _.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof E.a
                      ? (l(t.errorConfig.options || {})(e),
                        o({ fetchStatus: _.a.FAILED, data: null, error: e, retry: S.a }))
                      : g.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return g.createElement(g.Suspense, null, g.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddRuleScreen', function () {
          return P
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n('v6aA'),
        c = n('eSoz'),
        l = n('xZGM'),
        u = n('rxPX'),
        s = n('0KEI'),
        m = function (e, t) {
          return Object(l.y)(e, l.h)
        },
        d = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: m }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(l.v)(l.h)
              },
              createRule: c.c.createRule,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_ADD_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'add_rule' }),
        p = n('k49u'),
        f = n('jHSc'),
        y = n('3XMw'),
        h = n.n(y),
        b = n('OwKm'),
        v = n('AfjF'),
        g = n('/yvb'),
        E = n('eb3s'),
        O = h.a.j560c8ea,
        w = h.a.i2209530,
        C = h.a.gaa3239a,
        _ = h.a.a67445d5,
        S = h.a.fcbe0992,
        j = h.a.j24c37b2
      function P(e) {
        var t = o.useContext(i.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          r = e.community,
          c = e.createLocalApiErrorHandler,
          l = e.createRule,
          u = e.history,
          s = e.shouldShowRuleInformEducation,
          m = r.id_str,
          d = r.rules,
          y = o.useState(''),
          h = a()(y, 2),
          P = h[0],
          I = h[1],
          R = o.useState(''),
          M = a()(R, 2),
          k = M[0],
          T = M[1],
          x = o.useState(!1),
          A = a()(x, 2),
          L = A[0],
          D = A[1],
          H = o.useState(!1),
          F = a()(H, 2),
          B = F[0],
          N = F[1],
          z = o.useState(''),
          U = a()(z, 2),
          K = U[0],
          W = U[1],
          V = o.useState(!1),
          X = a()(V, 2),
          Y = X[0],
          G = X[1],
          Q = o.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                r = e.valid
              W(''), I(n), T(t), D(r)
            },
            [I, T, D],
          ),
          Z = o.useCallback(
            function () {
              N(!0)
              var e = c({
                customErrorHandler: function (e) {
                  var t = a()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : C
                  return W(n), D(!1), []
                },
              })
              l(m, { name: P, description: k })
                .then(function () {
                  u.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, P, k, l, u, c],
          ),
          q = o.useCallback(
            function () {
              s ? G(!0) : Z()
            },
            [Z, s],
          ),
          J = o.createElement(g.a, { disabled: !L, onPress: q, size: 'small', type: 'brandFilled' }, w),
          $ = d.length >= t,
          ee = o.createElement(E.a, {
            confirmButtonLabel: j,
            headline: _,
            onConfirm: function () {
              u.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: S({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = Y
            ? o.createElement(v.a, {
                onCancel: function () {
                  G(!1)
                },
                onConfirm: function () {
                  n(), Z(), G(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : o.createElement(
              f.b,
              { behavioralEventViewType: 'add_rule', history: u, rightControl: J, title: O },
              o.createElement(b.a, { description: '', errorText: K, name: '', onChange: Q }),
              te,
            )
      }
      t.default = d(P)
    },
    nTxI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesModal', function () {
          return _
        })
      n('7xRU'), n('WNMA'), n('KqXw'), n('ho0z')
      var r = n('ERkP'),
        a = n('+Kfv'),
        o = n('PKbs'),
        i = n('egQk'),
        c = n('1Idg'),
        l = n('eSoz'),
        u = n('li/m'),
        s = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || c.a(e, t)
        },
        p = Object(s.a)()
          .propsFromState(function () {
            return { community: d, fetchStatus: c.b, isCommunityMember: c.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: u.b,
              fetchCommunityIfNeeded: l.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        f = n('MDbM'),
        y = n('jHSc'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('5FtR'),
        g = n('t62R'),
        E = n('/yvb'),
        O = n('rHpw'),
        w = b.a.h4fbfa57,
        C = b.a.dc1b14a1,
        _ = function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            c = e.fetchCommunityIfNeeded,
            l = e.fetchStatus,
            u = e.history,
            s = e.isCommunityMember,
            m = e.join,
            d = e.match.params.communityId
          r.useEffect(function () {
            d && !t && l !== f.a.LOADED && c(d).catch(n())
          })
          var p,
            h = function () {
              if (t) {
                var e = t.id_str
                m(e)
                  .then(function () {
                    u.push('/i/communities/'.concat(e))
                  })
                  .catch(n())
              }
            }
          if (t) {
            var b = t.name,
              O = t.rules,
              _ = t.theme
            return O && O.length && !s
              ? r.createElement(
                  a.a,
                  { viewType: 'community' },
                  r.createElement(
                    y.b,
                    {
                      behavioralEventViewType: 'rules',
                      history: u,
                      rightControl: r.createElement(E.a, { onPress: h, size: 'small', type: 'brandFilled' }, w),
                      title: Object(i.a)({ communityName: b }),
                    },
                    r.createElement(o.b, {
                      badgeStyle: j.badgeStyle,
                      headerContainerStyle: j.containerStyle,
                      headerExplanationStyle: j.headerExplanationStyle,
                      heading:
                        ((p = b), r.createElement(g.b, { size: 'title4', weight: 'bold' }, C({ communityName: p }))),
                      rules: O,
                      theme: _,
                    }),
                  ),
                )
              : r.createElement(v.a, { to: '/i/communities/'.concat(t.id_str) })
          }
          return l === f.a.LOADED ? r.createElement(v.a, { to: '/' }) : null
        },
        S = p(_),
        j =
          ((t.default = S),
          O.a.create(function (e) {
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
        u = n('rHpw')
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
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
            paddingBottom: 'calc(2.5 * '.concat(u.a.theme.spaces.space64, ')'),
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
          return N
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('vrRf'), n('ERkP')),
        v = n('+Kfv'),
        g = n('es0u'),
        E = n('XtoV'),
        O = n('1Idg'),
        w = n('eSoz'),
        C = n('rxPX'),
        _ = n('0KEI'),
        S = Object(C.a)()
          .propsFromState(function () {
            return { community: O.a, communityId: O.c, screenName: O.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: w.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        j = n('3XMw'),
        P = n.n(j),
        I = n('yoO3'),
        R = n('VS6U'),
        M = n('k/OQ'),
        k = n('v6aA'),
        T = n('krnS'),
        x = n('Ty5D')
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var L = P.a.h5245afa,
        D = P.a.dc6ce7b4,
        H = P.a.f8321d82,
        F = P.a.ga2aa43c,
        B = 'moderators',
        N = (function (e) {
          s()(n, e)
          var t = A(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_communityInvitesEnabled', e.context.featureSwitches.isTrue('c9s_invites_enabled')),
              h()(l()(e), '_renderSegmentedControl', function () {
                var t = e.props,
                  n = t.communityId,
                  r = t.location,
                  a = n
                    ? [
                        { to: { pathname: '/i/communities/'.concat(n, '/members'), state: r.state }, label: H, key: H },
                        {
                          to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: r.state },
                          label: F,
                          key: F,
                        },
                      ]
                    : []
                return b.createElement(M.a, { accessibilityLabel: e.getTitle, links: a })
              }),
              h()(l()(e), '_renderPrimaryContent', function () {
                var t = e.props.communityId
                return t
                  ? b.createElement(
                      x.e,
                      null,
                      b.createElement(
                        x.c,
                        { exact: !0, path: '/i/communities/'.concat(t, '/members') },
                        b.createElement(
                          v.a,
                          { viewType: 'all' },
                          b.createElement(T.b, { communityId: t, mode: T.a.Members }),
                        ),
                      ),
                      b.createElement(
                        x.c,
                        { exact: !0, path: '/i/communities/'.concat(t, '/moderators') },
                        b.createElement(
                          v.a,
                          { viewType: B },
                          b.createElement(T.b, { communityId: t, mode: T.a.Moderators }),
                        ),
                      ),
                    )
                  : null
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.communityId,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchCommunityIfNeeded
                n && a(n).catch(r())
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
                key: 'getTitle',
                get: function () {
                  var e = this.props.location
                  return null != e && e.pathname && e.pathname.indexOf('members') > 0 ? D : F
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.community,
                    n = e.communityId,
                    r = e.history
                  return b.createElement(
                    v.a,
                    { viewType: 'community' },
                    b.createElement(
                      I.a,
                      { behavioralEventViewType: 'members' },
                      b.createElement(R.a, {
                        backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                        documentTitle: L,
                        history: r,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: b.createElement(E.a, { community: t }),
                        secondaryBar: this._renderSegmentedControl(),
                        sidebarContent: b.createElement(g.a, null),
                        title: D,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      h()(N, 'contextType', k.a)
      var z = S(N)
      t.default = z
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateButton', function () {
          return Xe
        }),
        n.d(t, 'CommunitiesScreen', function () {
          return Ye
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        u = n('5Yy7'),
        s = n.n(u),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('vrRf'), n('ERkP')),
        v = n('+Kfv'),
        g = n('es0u'),
        E = n('1Idg'),
        O = n('RqPI'),
        w = n('li/m'),
        C = n('G6rE'),
        _ = n('rxPX'),
        S = n('0KEI'),
        j = function (e, t) {
          var n = E.j(e, t)
          if (n) return C.e.selectByScreenName(e, n)
        },
        P = Object(_.a)()
          .propsFromState(function () {
            return { communitiesActions: O.f, hasCommunityMemberships: w.d, screenName: E.j, user: j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: C.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        I = n('GOQE'),
        R = n('3XMw'),
        M = n.n(R),
        k = n('5oT/'),
        T =
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
        x = n('MWbm'),
        A = n('rHpw'),
        L = n('X00g'),
        D = n('htQn'),
        H = n('9Xij'),
        F = n('TIdA'),
        B = n('A91F'),
        N = n('t62R'),
        z = n('YeIG'),
        U = n('oQhu')
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
      function W(e) {
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
      var V = { type: 'serversideContextKey', serversideContextType: 'community' },
        X = Object(U.a)(function (e) {
          return W(W({}, V), {}, { serversideContextId: e })
        }),
        Y = A.a.create(function (e) {
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
              width: 'calc(('.concat(A.a.theme.spaces.space36, ' * 3) + ').concat(A.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        G = function (e) {
          var t = b.useContext(T.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            r = n.id_str,
            a = n.media,
            o = n.name,
            i = n.theme
          if (Object(z.a)(null == a ? void 0 : a.image) || !o) return null
          var c = null == a ? void 0 : a.image,
            l = null == a ? void 0 : a.crop,
            u = A.a.theme.aspectRatios.communityBanner,
            s = t ? L.a.getCommunityBackgroundColor(i) : A.a.theme.colors.translucentBlack77
          return c
            ? b.createElement(
                v.a,
                { clientEntity: X(r || ''), viewType: 'thumbnail' },
                b.createElement(
                  D.a,
                  { link: '/i/communities/'.concat(r), style: Y.root },
                  b.createElement(
                    x.a,
                    { style: Y.container },
                    b.createElement(
                      H.a,
                      { ratio: u },
                      b.createElement(F.a, {
                        accessibilityLabel: '',
                        aspectMode: B.a.exact(u),
                        backgroundColor: A.a.theme.colors.gray300,
                        cropCandidates: l,
                        image: c,
                      }),
                    ),
                    b.createElement(
                      x.a,
                      { style: [Y.name, { backgroundColor: s }] },
                      b.createElement(
                        N.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        o.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        Q = n('eSoz'),
        Z = n('o3oN'),
        q = function (e) {
          var t = Object(Z.c)(e)
          return Q.c.selectMany(e, t)
        },
        J = Object(_.a)()
          .propsFromState(function () {
            return { communities: q, fetchStatus: Z.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: Z.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        $ = n('kGix'),
        ee = n('6iuV'),
        te = n('rC8y'),
        ne = M.a.d228a9a0,
        re = b.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityMemberships,
            a = e.fetchStatus,
            o = e.location.pathname
          b.useEffect(
            function () {
              a === $.a.NONE && r().catch(n())
            },
            [n, r, a],
          )
          var i = b.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return b.createElement(G, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(z.a)(t)
            ? null
            : b.createElement(
                b.Fragment,
                null,
                b.createElement(ee.a, { style: [ae.paddingHorizontal, ae.bottomBorder] }, i),
                t.length > 10 &&
                  b.createElement(
                    x.a,
                    { style: ae.bottomBorder },
                    b.createElement(te.a, { link: '/'.concat(o, '/memberships'), text: ne }),
                  ),
              )
        }),
        ae = A.a.create(function (e) {
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
        oe = J(re),
        ie = n('WpDa'),
        ce = n('ZNT5'),
        le = Object(ce.a)({
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
          formatResponse: ie.a,
        }),
        ue = n('OUEC'),
        se = n('dwig'),
        me = n('0+qk'),
        de = n('7BdX'),
        pe = n('fTQJ'),
        fe = n('QRqA'),
        ye = n('FIs5'),
        he = n('mw9i')
      function be(e) {
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
      var ve = M.a.c63602d3,
        ge = M.a.d7346631,
        Ee = M.a.fbd12fea,
        Oe = (function (e) {
          s()(n, e)
          var t = be(n)
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
                Object(U.a)(function () {
                  return le
                }),
              ),
              h()(l()(e), '_renderEmptyTimeline', function () {
                return b.createElement(ye.a, { header: ge, message: Ee })
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
                    i = this._c9sParticipationEnabled && t ? b.createElement(me.a, { history: n }) : null
                  return r && o
                    ? b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(fe.a, null),
                        b.createElement(
                          se.a,
                          { container: he.a, fab: i },
                          b.createElement(oe, { location: a }),
                          b.createElement(pe.a, {
                            entryConfiguration: ue.a,
                            module: o,
                            prerollDisplayLocation: de.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: ve,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      h()(Oe, 'contextType', T.a)
      var we = Oe,
        Ce = n('wl7o'),
        _e = n('wa7Z'),
        Se = n('hqKg'),
        je = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Pe = function () {
          return Object(Se.createSelector)(je, function (e) {
            return e
              ? (function (e) {
                  return Object(ce.a)({
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
                    formatResponse: ie.a,
                  })
                })(e)
              : void 0
          })
        },
        Ie = Object(_.a)()
          .propsFromState(function () {
            return {
              urtModule: Pe(),
              sliceModule: Object(Se.createSelector)(je, function (e) {
                return e ? Object(_e.a)(e) : void 0
              }),
            }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Re = n('yoO3'),
        Me = n('FS1z')
      function ke(e) {
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
      var Te = M.a.c63602d3,
        xe = M.a.d7346631,
        Ae = M.a.hb01fe46,
        Le = (function (e) {
          s()(n, e)
          var t = ke(n)
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
                return b.createElement(Ce.a, { communityId: e, key: e })
              }),
              h()(l()(e), '_renderEmptyState', function () {
                return e.props.isLoggedInUser ? b.createElement(ye.a, { header: xe, message: Ae }) : null
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
                      ? b.createElement(Me.a, {
                          module: t,
                          noItemsRenderer: this._renderEmptyState,
                          renderer: this._renderCommunityCell,
                        })
                      : null
                    : n
                    ? b.createElement(
                        Re.a,
                        { behavioralEventViewType: 'all' },
                        b.createElement(pe.a, {
                          entryConfiguration: ue.a,
                          module: n,
                          refreshControl: null,
                          renderEmptyState: this._renderEmptyState,
                          title: Te,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      h()(Le, 'contextType', T.a)
      var De = Ie(Le),
        He = n('5FtR'),
        Fe = n('Y6L+'),
        Be = n('VS6U'),
        Ne = n('/yvb'),
        ze = n('Ty5D')
      function Ue(e) {
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
      var Ke = M.a.h02a6fe5,
        We = M.a.c63602d3,
        Ve = M.a.a226497c,
        Xe = b.memo(function (e) {
          var t = e.communitiesActions
          if (null == t || !t.create) return null
          return b.createElement(Ne.a, {
            icon: b.createElement(k.a, { accessibilityLabel: Ve, style: Ge.createButton }),
            link: '/i/communities/create',
            size: 'medium',
            type: 'brandText',
          })
        }),
        Ye = (function (e) {
          s()(n, e)
          var t = Ue(n)
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
                return b.createElement(
                  ze.e,
                  null,
                  b.createElement(
                    ze.c,
                    { exact: !0, path: '/'.concat(Fe.I, '/communities') },
                    b.createElement(we, { hasCommunityMemberships: n, history: r, isLoggedInUser: i, location: a }),
                  ),
                  b.createElement(
                    ze.c,
                    { exact: !0, path: '/'.concat(Fe.I, '/communities/memberships') },
                    b.createElement(De, { isLoggedInUser: i, user: o }),
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
                    var r = this._isMembershipsView() ? We : Ke
                    return b.createElement(
                      v.a,
                      { viewType: 'communities' },
                      b.createElement(Be.a, {
                        backLocation: '/',
                        history: n,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: b.createElement(Xe, { communitiesActions: t }),
                        sidebarContent: b.createElement(g.a, null),
                        title: r,
                      }),
                    )
                  }
                  return b.createElement(He.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(b.Component)
      h()(Ye, 'contextType', T.a)
      var Ge = A.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        Qe = P(Ye)
      t.default = Qe
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
        u = n('N+ot'),
        s = n.n(u),
        m = n('AuHH'),
        d = n.n(m),
        p = n('KEM+'),
        f = n.n(p),
        y = (n('z84I'), n('ERkP')),
        h = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('1Pcy')),
        b = n.n(h),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        g = n('cm6r'),
        E = n('rHpw'),
        O = n('k/Ka'),
        w = n('MWbm'),
        C = n('x0mb'),
        _ = n('IMYl')
      function S(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                f()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function P(e) {
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
          return s()(this, n)
        }
      }
      var I = (function (e) {
          l()(n, e)
          var t = P(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(b()(e), '_radioRef', y.createRef()),
              f()(b()(e), '_handleChange', function () {
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
                    i = E.a.theme.colors[n],
                    c = v.a.generate({
                      backgroundColor: E.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return y.createElement(
                    w.a,
                    { style: [R.container, o] },
                    y.createElement(
                      g.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [R.choice, R.choiceContainer] },
                      y.createElement(C.a, { style: [R.choice, { color: i }] }),
                      Object(O.a)('input', {
                        accessibilityLabel: t,
                        name: a,
                        checked: r,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: R.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    r &&
                      y.createElement(
                        w.a,
                        { style: [R.choice, R.checkMarkContainer] },
                        y.createElement(_.a, { style: [R.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component),
        R = E.a.create(function (e) {
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
            nativeControl: j(
              j({}, E.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        M = I
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
          return s()(this, n)
        }
      }
      var T = 1,
        x = (function (e) {
          l()(n, e)
          var t = k(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(T, '_LABEL')), (T += 1), e
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
                    u = [A.root, l && A.flexWrap],
                    s = l ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return y.createElement(
                    w.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: u },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        a = t.colorName
                      return y.createElement(M, {
                        accessibilityLabel: n,
                        autoFocus: r && c === a,
                        colorName: a,
                        isSelected: c === a,
                        key: a,
                        name: e._colorPickerId,
                        onChange: o,
                        style: s,
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      f()(x, 'defaultProps', { layout: 'one-row' })
      var A = E.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = x
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
        i = n('Lsrn'),
        c = n('k/Ka')
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
      function u(e) {
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
      var s = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878zm7.512-5.785l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
            }),
            o.createElement('path', {
              d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
            }),
          ),
        )
      }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
        u = n('5Yy7'),
        s = n.n(u),
        m = n('N+ot'),
        d = n.n(m),
        p = n('AuHH'),
        f = n.n(p),
        y = n('KEM+'),
        h = n.n(y),
        b = (n('2G9S'), n('ho0z'), n('ERkP')),
        v = n('+Kfv'),
        g = n('eSoz'),
        E = n('rxPX'),
        O = function (e, t) {
          var n = t.communityId
          return n ? g.c.select(e, n) : void 0
        },
        w = Object(E.a)().propsFromState(function () {
          return { community: O }
        }),
        C = n('MWbm'),
        _ = n('TIdA'),
        S = n('A91F'),
        j = n('rHpw'),
        P = n('MtXG'),
        I = n('t62R'),
        R = n('htQn'),
        M = n('MAI/'),
        k = n('3XMw'),
        T = n.n(k),
        x = n('oQhu'),
        A = n('YeIG')
      function L(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
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
      var F = T.a.d58baa7e,
        B = { type: 'serversideContextKey', serversideContextType: 'community' },
        N = w(
          (function (e) {
            s()(n, e)
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
                  Object(x.a)(function (e) {
                    return D(D({}, B), {}, { serversideContextId: e })
                  }),
                ),
                h()(l()(e), '_renderThumbnail', function (e) {
                  var t = e.crop,
                    n = e.image
                  return b.createElement(
                    C.a,
                    { style: z.thumbnailContainer },
                    b.createElement(_.a, {
                      accessibilityLabel: '',
                      aspectMode: S.a.SQUARE,
                      backgroundColor: j.a.theme.colors.gray300,
                      cropCandidates: t,
                      image: n,
                    }),
                  )
                }),
                h()(l()(e), '_renderMembersCount', function (t) {
                  var n = e.props.communityId,
                    r = t.member_count
                  if (r) {
                    var a = F(r),
                      o = '/i/communities/'.concat(n, '/members')
                    return b.createElement(
                      P.a.Group,
                      null,
                      b.createElement(
                        P.a,
                        { link: o },
                        b.createElement(
                          I.b,
                          { color: 'gray700' },
                          b.createElement(
                            T.a.I18NFormatMessage,
                            { $i18n: 'b38e130b' },
                            b.createElement(P.a.Value, null, T.a.ibd0106d({ formattedCount: a })),
                            b.createElement(P.a.Label, null, T.a.cface2d0({ count: r })),
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
                      return b.createElement(
                        v.a,
                        { clientEntity: this._getClientEntity(n || ''), viewType: 'community_cell' },
                        b.createElement(
                          R.a,
                          { link: r, style: z.root },
                          b.createElement(
                            C.a,
                            { style: z.container },
                            b.createElement(
                              C.a,
                              { style: z.leftColumn },
                              a && !Object(A.a)(a) ? this._renderThumbnail(a) : null,
                              b.createElement(
                                C.a,
                                { style: z.attribution },
                                b.createElement(
                                  C.a,
                                  { style: z.name },
                                  b.createElement(I.b, { numberOfLines: 1, weight: 'bold' }, i),
                                ),
                                this._renderMembersCount(t),
                                o
                                  ? b.createElement(M.a, {
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
          })(b.Component),
        ),
        z =
          ((t.a = N),
          j.a.create(function (e) {
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
          return at
        })
      n('WNMA'), n('KqXw'), n('1t7P'), n('jQ/y'), n('ho0z')
      var r = n('ERkP'),
        a = n('v6aA'),
        o = n('rxPX'),
        i = Object(o.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        c = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        l = n.n(c),
        u = n('ddV6'),
        s = n.n(u),
        m = (n('kH1Z'), n('6U7i'), n('jTgF')),
        d = n('AspN'),
        p = n('eSoz'),
        f = n('0KEI'),
        y = function (e, t) {
          var n = t.localMediaId,
            r = n && isFinite(n) ? d.k(e, n) : []
          return s()(r, 1)[0]
        },
        h = Object(o.a)()
          .propsFromState(function () {
            return { localMedia: y }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: p.a,
              removeLocalMediaId: p.e,
              editCommunityBanner: p.d,
              removeBanner: p.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        b = n('3XMw'),
        v = n.n(b),
        g = n('Nh1N'),
        E = n('fS8x'),
        O = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        w = Object(O.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(4), n.e(5), n.e(170)]).then(n.bind(null, 'P68U'))
          },
        }),
        C = n('eyty'),
        _ = n('MWbm'),
        S = n('rHpw'),
        j = n('TIdA'),
        P = n('A91F'),
        I = n('4zmP'),
        R = n('eb3s')
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T = v.a.a49f884d,
        x = v.a.ea965b81,
        A = v.a.c1ca95bd,
        L = v.a.e71cdf4d,
        D = v.a.gea6cc19,
        H = v.a.cfd2f35d,
        F = v.a.j35d3ad6,
        B = v.a.f1e8fb21,
        N = v.a.fc2a5c92,
        z = v.a.e405ec21
      var U,
        K = S.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        W = h(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            o = e.editCommunityBanner,
            i = e.hasCustomMedia,
            c = e.localMedia,
            l = e.localMediaId,
            u = e.media,
            d = e.removeBanner,
            p = e.removeLocalMediaId,
            f = r.useState(!1),
            y = s()(f, 2),
            h = y[0],
            b = y[1],
            v = r.useState(!1),
            O = s()(v, 2),
            M = O[0],
            U = O[1],
            W = r.useState(!1),
            V = s()(W, 2),
            X = V[0],
            Y = V[1],
            G = r.useState(!1),
            Q = s()(G, 2),
            Z = Q[0],
            q = Q[1],
            J = r.useState(!1),
            $ = s()(J, 2),
            ee = $[0],
            te = $[1],
            ne = null == u ? void 0 : u.image,
            re = S.a.theme.aspectRatios.communityBanner,
            ae = a({
              customErrorHandler: function (e) {
                return q(z), []
              },
            }),
            oe = function (e) {
              return te(!1), e ? t(n, e) : p(n)
            },
            ie = c
              ? k(k({}, c), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: c.mediaFile, cropData: void 0 })
              : void 0,
            ce = ne ? r.createElement(j.a, { accessibilityLabel: T, aspectMode: P.a.exact(re), image: ne }) : null
          return r.createElement(
            r.Fragment,
            null,
            Z
              ? r.createElement(
                  _.a,
                  { style: K.error },
                  r.createElement(I.a, { Icon: g.a, headline: N, text: Z, type: 'danger' }),
                )
              : null,
            r.createElement(w, {
              accessibilityLabel: x,
              aspectRatio: re,
              currentContent: ce,
              location: C.d.CommunityBanner,
              mediaItem: ee ? c : void 0,
              onChange: function (e) {
                var t = s()(e, 1)[0]
                q(!1), oe(t), b(!0)
              },
              onFailure: function () {
                q(z), p(n)
              },
              onRemove:
                i || ee
                  ? function () {
                      oe(), Y(!0)
                    }
                  : void 0,
            }),
            h && c
              ? r.createElement(E.a, {
                  defaultAspectRatio: re,
                  media: c,
                  onCancel: function () {
                    b(!1), p(n)
                  },
                  onDone: function () {
                    b(!1), U(!0)
                  },
                  title: A,
                })
              : null,
            M && ie && l
              ? r.createElement(E.a, {
                  defaultAspectRatio: 1,
                  media: ie,
                  onCancel: function () {
                    U(!1), b(!0)
                  },
                  onCropDone: function (e) {
                    !(function (e, t) {
                      te(!0),
                        o(n, { mediaId: e, cropData: t }).catch(function (e) {
                          oe(), Object(m.a)(e) ? q(z) : ae(e)
                        })
                    })(l, e)
                  },
                  onDone: function () {
                    U(!1)
                  },
                  title: L,
                })
              : null,
            X
              ? r.createElement(R.a, {
                  cancelButtonLabel: H,
                  confirmButtonLabel: F,
                  confirmButtonType: 'destructiveFilled',
                  headline: D,
                  onCancel: function () {
                    Y(!1)
                  },
                  onConfirm: function () {
                    d(n).catch(ae), Y(!1)
                  },
                  text: B,
                })
              : null,
          )
        }),
        V = Object(o.a)()
          .propsFromActions(function () {
            return {
              editAccess: p.c.editAccess,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        X = n('mWs5'),
        Y = n('Y3cQ'),
        G = v.a.f713fbd1,
        Q = [
          { label: v.a.fd00a769, value: 'Public', helpText: v.a.d0784408 },
          { label: v.a.ce0523a8, value: 'Closed', helpText: v.a.ccfafe8c },
        ],
        Z = V(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            o = e.history,
            i = t.id_str,
            c = r.useState(t.access),
            l = s()(c, 2),
            u = l[0],
            m = l[1],
            d = r.useCallback(
              function () {
                a(i, { access: u })
                  .then(function () {
                    o.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [i, u, a, o, n],
            ),
            p = u !== t.access
          return r.createElement(
            X.a,
            { communityId: i, onSubmit: d, submitDisabled: !p, title: G },
            r.createElement(
              _.a,
              { style: q.root },
              r.createElement(Y.a, {
                name: 'membershipSetting',
                onChange: function (e, t) {
                  m(t)
                },
                options: Q,
                value: u,
              }),
            ),
          )
        }),
        q = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        J = n('n0Rl'),
        $ = n('Ty5D'),
        ee =
          (n('yH/f'),
          Object.freeze({
            Open: 'CommunityOpenMembershipSettings',
            Restricted: 'CommunityRestrictedMembershipSettings',
          })),
        te = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        ne = Object.freeze({ Disabled: 'NoRequiredApproval', Moderator: 'ModeratorApproval' }),
        re = n('0yYu'),
        ae = n('cCdp'),
        oe = (n('enFi'), n('Hsf0')),
        ie = n.n(oe),
        ce = void 0 !== U ? U : (U = n('tnnC'))
      var le,
        ue,
        se = n('jAXQ'),
        me = n.n(se),
        de = v.a.f713fbd1,
        pe = [
          { label: v.a.fd00a769, value: ee.Open, helpText: v.a.d0784408 },
          { label: v.a.ce0523a8, value: ee.Restricted, helpText: v.a.bccd6510 },
        ],
        fe = v.a.f5b4f127,
        ye = v.a.d2a2687c,
        he = v.a.d1070fd8,
        be = v.a.id6cb134,
        ve = v.a.c5d1634d,
        ge = v.a.b983f9e0,
        Ee = void 0 !== le ? le : (le = n('1tGk')),
        Oe = function (e) {
          var t,
            n,
            a,
            o,
            i = e.community,
            c = me()(Ee, i),
            l = c.membership_settings,
            u = c.rest_id,
            m = (function (e) {
              var t = ie()(ce, e)
              switch (t.__typename) {
                case ee.Restricted:
                  return {
                    access: ee.Restricted,
                    invitesPolicy: t.invites_policy,
                    joinApprovalPolicy: t.join_approval_policy,
                  }
                case ee.Open:
                  return { access: ee.Open, invitesPolicy: te.Member, joinApprovalPolicy: ne.Disabled }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(l),
            d = r.useState(m.access),
            p = s()(d, 2),
            f = p[0],
            y = p[1],
            h = r.useState(m.invitesPolicy),
            b = s()(h, 2),
            g = b[0],
            E = b[1],
            O = r.useState(m.joinApprovalPolicy),
            w = s()(O, 2),
            C = w[0],
            _ = w[1],
            S = r.useState(),
            j = s()(S, 2),
            P = j[0],
            I = j[1],
            M = Object($.g)(),
            k = r.useMemo(
              function () {
                return { access: f, invitesPolicy: g, joinApprovalPolicy: C }
              },
              [f, g, C],
            ),
            T = r.useCallback(function (e, t) {
              y(t)
            }, []),
            x = r.useCallback(function (e, t) {
              _(t ? ne.Moderator : ne.Disabled)
            }, []),
            A = r.useCallback(function (e, t) {
              E(t ? te.Member : te.Moderator)
            }, []),
            L = r.useCallback(
              function () {
                M.goBack({ backLocation: '/i/communities/'.concat(u, '/tools/settings') })
              },
              [u, M],
            ),
            D = r.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === ee.Restricted && t.access === ee.Restricted) {
                    var n = e.invitesPolicy === te.Member && t.invitesPolicy === te.Moderator,
                      r = e.joinApprovalPolicy === ne.Moderator && t.joinApprovalPolicy === ne.Disabled
                    if (n) return v.a.h4c8d3da
                    if (r) return v.a.f9ca1622
                  }
                  if (e.access === ee.Restricted && t.access === ee.Open) {
                    var a = e.joinApprovalPolicy === ne.Disabled,
                      o = e.joinApprovalPolicy === ne.Moderator
                    if (a) return v.a.d2a327a5
                    if (o) return v.a.daedd9fa
                  }
                })(m, k)
                e ? I(e) : L()
              },
              [m, k, L],
            ),
            H = r.useCallback(function () {
              return I(void 0)
            }, []),
            F =
              ((n = k),
              (a = (t = m).access !== n.access),
              (o =
                t.access === ee.Restricted &&
                (t.invitesPolicy !== n.invitesPolicy || t.joinApprovalPolicy !== n.joinApprovalPolicy)),
              !(a || o))
          return r.createElement(
            X.a,
            { communityId: u, onSubmit: D, submitDisabled: F, title: de },
            r.createElement(Y.a, { name: 'membershipSetting', onChange: T, options: pe, value: f }),
            f === ee.Restricted &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(re.a, null),
                r.createElement(ae.a, {
                  checked: C === ne.Moderator,
                  helpText: ye,
                  label: fe,
                  name: 'allowRequests',
                  onChange: x,
                }),
                r.createElement(ae.a, {
                  checked: g === te.Member,
                  helpText: be,
                  label: he,
                  name: 'allowInvites',
                  onChange: A,
                }),
              ),
            P &&
              r.createElement(R.a, {
                confirmButtonLabel: ve,
                confirmButtonType: 'primary',
                headline: ge,
                onCancel: H,
                onConfirm: L,
                text: P,
              }),
          )
        },
        we = n('v//M'),
        Ce = void 0 !== ue ? ue : (ue = n('PbB6')),
        _e = Object(J.b)(Ce, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Se = function (e) {
          var t = { communityId: e.communityId }
          return r.createElement(_e, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                o = null == t ? void 0 : t.community
              return r.createElement(we.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return o ? r.createElement(Oe, { community: o }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        je = n('ROT1'),
        Pe = Object(o.a)()
          .propsFromActions(function () {
            return {
              editName: p.c.editName,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Ie = n('k49u'),
        Re = n('yoO3'),
        Me = v.a.h3c0f1a2,
        ke = v.a.fc2a5c92,
        Te = v.a.cb5e6510
      var xe = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ae = Pe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            o = e.history,
            i = t.id_str,
            c = t.name,
            l = r.useState(c),
            u = s()(l, 2),
            m = u[0],
            d = u[1],
            p = r.useState(!1),
            f = s()(p, 2),
            y = f[0],
            h = f[1],
            b = r.useState(void 0),
            v = s()(b, 2),
            E = v[0],
            O = v[1],
            w = r.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Ie.a.GenericBadRequest && t.message ? t.message : Te
                    return O(n), h(!0), []
                  },
                })
                a(i, { name: m })
                  .then(function () {
                    o.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, m, a, o, n],
            )
          return r.createElement(
            Re.a,
            null,
            r.createElement(
              X.a,
              { communityId: i, onSubmit: w, submitDisabled: y, title: Me },
              E
                ? r.createElement(
                    _.a,
                    { style: xe.error },
                    r.createElement(I.a, { Icon: g.a, headline: ke, text: E, type: 'danger' }),
                  )
                : void 0,
              r.createElement(je.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, t) {
                  d(e), h(t)
                },
              }),
            ),
          )
        }),
        Le = n('U0Qk'),
        De = Object(o.a)()
          .propsFromActions(function () {
            return {
              editPurpose: p.c.editPurpose,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        He = v.a.a895549f,
        Fe = v.a.fc2a5c92,
        Be = v.a.ced22929
      var Ne = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        ze = De(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            o = e.history,
            i = t.description,
            c = t.id_str,
            l = r.useState(i || ''),
            u = s()(l, 2),
            m = u[0],
            d = u[1],
            p = r.useState(!1),
            f = s()(p, 2),
            y = f[0],
            h = f[1],
            b = r.useState(void 0),
            v = s()(b, 2),
            E = v[0],
            O = v[1],
            w = r.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Ie.a.GenericBadRequest && t.message ? t.message : Be
                    return O(n), h(!0), []
                  },
                })
                a(c, { purpose: m })
                  .then(function () {
                    o.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/settings') })
                  })
                  .catch(e)
              },
              [c, m, a, o, n],
            )
          return r.createElement(
            Re.a,
            null,
            r.createElement(
              X.a,
              { communityId: c, onSubmit: w, submitDisabled: y, title: He },
              E
                ? r.createElement(
                    _.a,
                    { style: Ne.error },
                    r.createElement(I.a, { Icon: g.a, headline: Fe, text: E, type: 'danger' }),
                  )
                : void 0,
              r.createElement(Le.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, t) {
                  d(e), h(t)
                },
              }),
            ),
          )
        }),
        Ue = n('Ig1G'),
        Ke = n('x0mb'),
        We = n('5FtR'),
        Ve = n('t62R'),
        Xe = n('X00g'),
        Ye = n('6vad'),
        Ge = n('csss'),
        Qe = v.a.bb081ea1,
        Ze = v.a.h3e55b40,
        qe = v.a.j8af8ea9,
        Je = v.a.d5f01115,
        $e = v.a.c3c04b70,
        et = { Closed: v.a.ce0523a8, Public: v.a.fd00a769 },
        tt = v.a.f4a98e9e,
        nt = v.a.f713fbd1,
        rt = function (e) {
          var t = e.children
          return r.createElement(Ve.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        at = function (e) {
          var t = e.community,
            n = e.history,
            o = e.match,
            i = t.access,
            c = t.description,
            l = t.hasCustomMedia,
            u = t.id_str,
            s = t.localMediaId,
            m = t.media,
            d = t.name,
            p = t.theme,
            f = r.useContext(a.a).featureSwitches,
            y = f.isTrue('c9s_edit_community_name_enabled'),
            h = f.isTrue('c9s_edit_community_description_enabled'),
            b = f.isTrue('c9s_edit_community_membership_settings_enabled'),
            v = f.isTrue('c9s_request_to_join_enabled'),
            g = f.isTrue('c9s_edit_community_banner_enabled'),
            E = f.isTrue('c9s_edit_community_theme_enabled'),
            O = o.url,
            w = et[t.access],
            C = Object(Ue.d)(t),
            _ = Xe.a.getCommunityThemeDisplayName(C),
            S = Xe.a.getCommunityBackgroundColor(p)
          return r.createElement(
            $.e,
            null,
            y
              ? r.createElement(
                  $.c,
                  { exact: !0, path: ''.concat(O, '/name') },
                  r.createElement(Ae, { community: t, history: n }),
                )
              : null,
            h
              ? r.createElement(
                  $.c,
                  { exact: !0, path: ''.concat(O, '/purpose') },
                  r.createElement(ze, { community: t, history: n }),
                )
              : null,
            v
              ? r.createElement(
                  $.c,
                  { exact: !0, path: ''.concat(O, '/membership') },
                  r.createElement(Se, { communityId: u }),
                )
              : b
              ? r.createElement(
                  $.c,
                  { exact: !0, path: ''.concat(O, '/membership') },
                  r.createElement(Z, { community: t, history: n }),
                )
              : null,
            r.createElement(
              $.c,
              { exact: !0, path: ''.concat(O, '/') },
              r.createElement(
                X.a,
                { communityId: u, screenType: 'primaryDetail', title: Qe },
                g ? r.createElement(W, { communityId: u, hasCustomMedia: l, localMediaId: s, media: m }) : null,
                r.createElement(Ye.b, { text: tt }),
                r.createElement(Ge.a, {
                  description: r.createElement(rt, null, d),
                  label: Ze,
                  link: y ? ''.concat(O, '/name') : void 0,
                }),
                c
                  ? r.createElement(Ge.a, {
                      description: r.createElement(rt, null, c),
                      label: Je,
                      link: h ? ''.concat(O, '/purpose') : void 0,
                    })
                  : null,
                E
                  ? r.createElement(Ge.a, {
                      description: r.createElement(rt, null, _),
                      label: $e,
                      link: E ? ''.concat(O, '/theme') : void 0,
                      renderRightContent: function () {
                        return r.createElement(Ke.a, { style: [{ color: S }, ot.themeIcon] })
                      },
                    })
                  : null,
                b && i
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(re.a, null),
                      r.createElement(Ye.b, { text: nt }),
                      r.createElement(Ge.a, {
                        description: r.createElement(rt, null, w),
                        label: qe,
                        link: ''.concat(O, '/membership'),
                      }),
                    )
                  : null,
              ),
            ),
            r.createElement($.c, null, r.createElement(We.a, { to: ''.concat(O, '/') })),
          )
        },
        ot =
          ((t.default = i(at)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return S
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('yH/f'), n('jwue'), n('+oxZ'), n('ERkP')),
        i = n('eSoz'),
        c = n('rxPX'),
        l = n('0KEI'),
        u = Object(c.a)()
          .propsFromActions(function () {
            return {
              editTheme: i.c.editTheme,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_THEME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_theme' }),
        s = n('jHSc'),
        m = n('Ig1G'),
        d = n('3XMw'),
        p = n.n(d),
        f = n('MWbm'),
        y = n('X00g'),
        h = n('/yvb'),
        b = n('uI9t'),
        v = n('rHpw'),
        g = p.a.dbda7beb,
        E = p.a.i2209530,
        O = p.a.hcf35d0c,
        w = p.a.da48b72c,
        C = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        _ = {}
      function S(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          r = e.editTheme,
          i = e.history,
          c = t.id_str,
          l = t.theme,
          u = y.a.getCommunityBackgroundColorName(l),
          d = o.useState(!1),
          p = a()(d, 2),
          v = p[0],
          S = p[1],
          P = o.useState(Object(m.d)(t)),
          I = a()(P, 2),
          R = I[0],
          M = I[1],
          k = o.useState(y.a.getCommunityThemeDisplayName(R)),
          T = a()(k, 2),
          x = T[0],
          A = T[1],
          L = o.useState(u),
          D = a()(L, 2),
          H = D[0],
          F = D[1],
          B = o.useState([]),
          N = a()(B, 2),
          z = N[0],
          U = N[1]
        o.useEffect(
          function () {
            var e
            return (
              U(
                ((e = []),
                C.forEach(function (t) {
                  var n = y.a.getCommunityTheme(t),
                    r = y.a.getCommunityBackgroundColorName(n)
                  ;(_[r] = t), e.push({ accessibilityLabel: y.a.getCommunityThemeDisplayName(t), colorName: r })
                }),
                e),
              ),
              function () {
                U([])
              }
            )
          },
          [U],
        )
        var K = o.useCallback(
            function () {
              r(c, { theme: R })
                .then(function () {
                  i.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [c, R, r, i, n],
          ),
          W = o.createElement(
            h.a,
            { accessibilityLabel: O({ themeName: x }), disabled: !v, onPress: K, size: 'small', type: 'brandFilled' },
            E,
          )
        return o.createElement(
          s.b,
          { behavioralEventViewType: 'edit_theme', history: i, rightControl: W, title: g },
          o.createElement(
            f.a,
            { style: j.themePickerContainer },
            o.createElement(b.a, {
              accessibilityLabel: w,
              layout: 'two-rows',
              onChange: function (e) {
                var n = _[e],
                  r = n !== Object(m.d)(t)
                M(n), A(y.a.getCommunityThemeDisplayName(n)), F(e), S(r)
              },
              options: z,
              value: H,
            }),
          ),
        )
      }
      var j = v.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(S)
    },
  },
])
//# sourceMappingURL=WIPED
