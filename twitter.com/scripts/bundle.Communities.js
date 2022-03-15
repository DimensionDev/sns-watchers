;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    '+BRT': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDetail_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityBannerImage_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionContainer_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionToggle_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityFacePile_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityShareButton_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityInviteButton_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '5df6e53462b5169f1ce54924808d6373',
      }
      t.default = a
    },
    '+BRr': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityAbout_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityInfo_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'e3c054cb8c0d4897f6061cc9b1669019',
      }
      t.default = a
    },
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '0weh': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25z',
              }),
              i.a.createElement('path', {
                d: 'M13.37 16.19c0 .76-.61 1.37-1.37 1.37s-1.38-.61-1.38-1.37.62-1.38 1.38-1.38 1.37.62 1.37 1.38zm.35-7.66l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '1rMX': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityInfo_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
            { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'UserResults',
              kind: 'LinkedField',
              name: 'creator_results',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'result',
                  plural: !1,
                  selections: (a = [
                    { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  ]),
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'membership_settings',
              plural: !1,
              selections: a,
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'CommunityOriginationAttributes_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (t.default = r)
    },
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
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
                        (a = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      ],
                      type: 'CommunityOpenMembershipSettings',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        a,
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
      ;(r.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = r)
    },
    '21U8': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        g = (n('Rqga'), n('2G9S'), n('ERkP')),
        f = n.n(g),
        h = n('/yvb'),
        b = n('3XMw'),
        v = n.n(b),
        _ = n('3rX5'),
        k = n('rHpw'),
        E = n('MWbm'),
        C = k.a.create(function (e) {
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
            a = e.width
          return f.a.createElement(E.a, {
            pointerEvents: 'none',
            style: [C.mask, { width: a, height: n }, t && C.circle],
          })
        },
        F = n('ZvMt'),
        I = n('97Jx'),
        w = n.n(I),
        T = n('m3Bd'),
        K = n.n(T),
        M = n('CHgo'),
        x = n('7ep7'),
        R = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        L = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(c()(a), '_previousTouchDistance', 0),
              p()(c()(a), '_previousPositionX', 0),
              p()(c()(a), '_previousPositionY', 0),
              p()(c()(a), '_centerPosition', { x: 0, y: 0 }),
              p()(c()(a), '_panResponder', {}),
              p()(c()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  l = t.onPinchMove,
                  i = t.onWheel
                if (e) {
                  ;(r || n || l) && (a._removeTouchMoveToScrollListener = Object(M.a)(e, a._preventDefaultEvent, !1)),
                    i && (a._removeScrollToScaleListener = Object(M.b)(e, a._preventDefaultEvent, !1))
                  var o = e.getBoundingClientRect()
                  a._centerPosition = { x: o.width / 2 + o.left, y: o.height / 2 + o.top }
                }
              }),
              p()(c()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              p()(c()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  l = a.props,
                  i = l.onPanMove,
                  o = l.onPinchMove,
                  c = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (o) {
                    var s =
                        ((n = c[0]),
                        (r = c[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(c[0], c[1]),
                      m = u.pageX,
                      d = u.pageY,
                      y = a._previousPositionX ? m - a._previousPositionX : 0,
                      p = a._previousPositionY ? d - a._previousPositionY : 0,
                      g = a._previousTouchDistance ? s - a._previousTouchDistance : 0
                    ;(a._previousPositionX = m), (a._previousPositionY = d), (a._previousTouchDistance = s)
                    var f = a._centerPosition
                    o(g, f.x - m, f.y - d, y, p)
                  }
                } else i && i(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              p()(c()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              p()(c()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  l = e.deltaY,
                  i = a._centerPosition,
                  o = i.x - t,
                  c = i.y - n
                a.props.onWheel && a.props.onWheel(r, l, o, c)
              }),
              (a._panResponder = x.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: a._handlePanResponderMove,
                onPanResponderRelease: a._handlePanResponderEnd,
                onPanResponderTerminate: a._handlePanResponderEnd,
              })),
              (a._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, K()(e, R))
                  return f.a.createElement(
                    E.a,
                    w()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
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
        })(f.a.Component),
        O = n('9RkS'),
        A = n('rOXj'),
        j = n('aITJ'),
        P = n('yiKp'),
        D = n.n(P),
        B = n('Lsrn'),
        H = n('k/Ka'),
        N = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            D()(
              D()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      N.metadata = { width: 24, height: 24 }
      var U = N,
        z = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            D()(
              D()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      z.metadata = { width: 24, height: 24 }
      var V = z,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            D()(
              D()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      q.metadata = { width: 24, height: 24 }
      var W = q,
        X = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            D()(
              D()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              f.a.createElement('path', {
                d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      X.metadata = { width: 24, height: 24 }
      var J = X,
        Q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            D()(
              D()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [B.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              f.a.createElement('path', {
                d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
              }),
            ),
          )
        }
      Q.metadata = { width: 24, height: 24 }
      var G = Q,
        Y = v.a.d85bc1b8,
        Z = v.a.f596ace8,
        $ = v.a.df031fca,
        ee = v.a.b40332c5,
        te = v.a.e547b368,
        ne = v.a.f7571204,
        ae = v.a.e6e16811,
        re =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        le = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a, l
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(c()(a), '_previousLeft', 0),
              p()(c()(a), '_previousTop', 0),
              p()(c()(a), '_panStyles', { top: 0, left: 0 }),
              p()(c()(a), '_shouldShowZoomControl', function () {
                return (!j.b.isMobileOS() || !A.a.isTouchSupported()) && a.props.withZoomControl
              }),
              p()(c()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  l = t.width / t.height,
                  i = a._shouldShowZoomControl()
                return n || i
                  ? f.a.createElement(
                      E.a,
                      { style: ie.controlsContainer },
                      n
                        ? f.a.createElement(
                            E.a,
                            { style: ie.ratioContainer },
                            f.a.createElement(h.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: r === l ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: f.a.createElement(U, null),
                              onPress: a._setAspectRatio(l),
                              size: 'medium',
                            }),
                            f.a.createElement(h.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: f.a.createElement(V, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            f.a.createElement(h.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: f.a.createElement(W, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      i
                        ? f.a.createElement(
                            E.a,
                            { style: ie.zoomContainer },
                            f.a.createElement(O.a, {
                              accessibilityLabel: Y,
                              max: a._maxScale,
                              maxIcon: f.a.createElement(J, { style: ie.icon }),
                              min: 0,
                              minIcon: f.a.createElement(G, { style: ie.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              p()(c()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              p()(c()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              p()(c()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  l = n.width,
                  i = F.a.getCoverDimensions({ width: l, height: r }, t),
                  o = i.height
                return { width: i.width * Math.pow(2, e), height: o * Math.pow(2, e) }
              }),
              p()(c()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  l = F.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  i = l.height
                return { width: l.width, height: i }
              }),
              p()(c()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              p()(c()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    l = a._getMaskDimensions().width,
                    i = r / n.width,
                    o = re(l / (t.width * i))
                  a.setState({ imageScale: o })
                  var c = a._getUnscaledCropData(),
                    s = c.left,
                    u = c.top
                  ;(a._panStyles.top = u - t.top * i * Math.pow(2, o)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = s - t.left * i * Math.pow(2, o)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              p()(c()(a), '_handleWheel', function (e, t, n, r) {
                var l = (-1 * t) / 500
                a.setState(function (e) {
                  var t = e.imageScale,
                    i = Math.min(a._maxScale, Math.max(t + l, 0))
                  return (
                    (a._panStyles.left += n * (i - t)),
                    (a._panStyles.top += r * (i - t)),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: i }
                  )
                })
              }),
              p()(c()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              p()(c()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              p()(c()(a), '_handlePinchMove', function (e, t, n, r, l) {
                var i = e / 200
                a.setState(function (e) {
                  var o = e.imageScale,
                    c = Math.min(a._maxScale, Math.max(o + i, 0))
                  return (
                    (a._panStyles.left += t * (c - o) + r),
                    (a._panStyles.top += n * (c - o) + l),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: c }
                  )
                })
              }),
              p()(c()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  l = e.left + e.width - t.width,
                  i = e.top + e.height - t.height,
                  o = !1
                n < 0 && ((o = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((o = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  l > 0 && ((o = !0), (a._panStyles.left += l), (a._previousLeft += l)),
                  i > 0 && ((o = !0), (a._panStyles.top += i), (a._previousTop += i)),
                  o && a._updateNativeStyles()
              }),
              p()(c()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              p()(c()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  l = r.height,
                  i = r.width,
                  o = a._panStyles,
                  c = o.left
                return { top: (t - l) / 2 - o.top, left: (n - i) / 2 - c, width: i, height: l }
              }),
              p()(c()(a), '_setAspectRatio', function (e) {
                return function () {
                  a.setState({ aspectRatio: e })
                }
              }),
              (a.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (a._maxScale = ((l = e.image), Math.max(Math.min(re(l.width / 150), re(l.height / 150), 3), 0.5))),
              a
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
                    a = e.withZoomControl,
                    r = this._getImageDimensions(),
                    l = r.height,
                    i = r.width,
                    o = this._getMaskDimensions(),
                    c = o.height,
                    s = o.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return f.a.createElement(
                    E.a,
                    { style: ie.container },
                    f.a.createElement(
                      L,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: a ? this._handlePinchMove : void 0,
                        onWheel: a ? this._handleWheel : void 0,
                        style: ie.root,
                      },
                      u
                        ? f.a.createElement(
                            f.a.Fragment,
                            null,
                            f.a.createElement(_.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: i, height: l },
                              style: ie.image,
                            }),
                            f.a.createElement(S, { circle: t, height: c, width: s }),
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
        })(f.a.Component)
      p()(le, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var ie = k.a.create(function (e) {
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
      t.a = le
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        l = n('yLYC'),
        i = n('Ud88'),
        o = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var c,
          m = i(),
          d = t.fetchKey,
          y = t.fetchPolicy,
          p = t.source,
          g = t.variables,
          f = t.networkCacheConfig,
          h = l(e, g, f)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          h.request.node.params.name !== t.name && a(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: s(m, h.request.identifier, function () {
                return m === t.environment && null != p
                  ? m.executeWithSource({ operation: h, source: p })
                  : m.execute({ operation: h })
              }),
              fetchPolicy: y,
              query: h,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(m, h)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && m === t.environment ? p.ifEmpty(b) : (t.environment, b),
            fetchKey: d,
            fetchPolicy: y,
            query: h,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        l = a.useRef
      e.exports = function () {
        var e = l(!0)
        return (
          r(function () {
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
    '2rr8': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityCreationSummary_community',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [a, { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (t.default = r)
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('fyvP'),
        i = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(o.a, { style: c.root }, r.a.createElement(l.a, e))
      }
      var c = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              i.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '7xtl': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: (i = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'role', variableName: 'role' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_role_put',
                plural: !1,
                selections: [
                  (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [a, l, r],
            kind: 'Operation',
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: i,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_role_put',
                plural: !1,
                selections: [o, { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '-z7ecfy5Y04vSJHD3xQ1aA',
            metadata: {},
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(c.hash = '611e4e6390b7bb405821b13d8b63cd5d'), (t.default = c)
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return d
        })
      var a = n('ERkP'),
        r = n.n(a),
        l = n('3XMw'),
        i = n.n(l),
        o = n('mw9i'),
        c = n('FIs5'),
        s = n('rHpw'),
        u = i.a.c2117be6,
        m = i.a.c2c4dad3
      function d() {
        return r.a.createElement(o.a, { style: y.root }, r.a.createElement(c.a, { header: u, message: m }))
      }
      var y = s.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    '8vG3': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'cell_CommunityJoinRequest',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
            { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'UserCommunityRelationship',
              kind: 'LinkedField',
              name: 'user_relationship',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'UserResults',
                  kind: 'LinkedField',
                  name: 'user_results',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'result',
                      plural: !1,
                      selections: [
                        { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                        {
                          kind: 'InlineFragment',
                          selections: [
                            (a = {
                              alias: 'id_str',
                              args: null,
                              kind: 'ScalarField',
                              name: 'rest_id',
                              storageKey: null,
                            }),
                            {
                              alias: null,
                              args: null,
                              concreteType: 'ApiUser',
                              kind: 'LinkedField',
                              name: 'legacy',
                              plural: !1,
                              selections: [
                                { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'profile_image_url_https',
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: 'User',
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'Community',
                  kind: 'LinkedField',
                  name: 'community',
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'CommunityJoinRequestActions',
              kind: 'LinkedField',
              name: 'actions',
              plural: !1,
              selections: [{ args: null, kind: 'FragmentSpread', name: 'controls_CommunityJoinRequestActions' }],
              storageKey: null,
            },
          ],
          type: 'CommunityJoinRequest',
          abstractKey: null,
        }
      ;(r.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (t.default = r)
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        r = n('ERkP'),
        l = n('Ud88'),
        i = n('K1lQ').commitMutation,
        o = r.useState,
        c = r.useEffect,
        s = r.useRef,
        u = r.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = l(),
          r = m(),
          d = s(n),
          y = s(e),
          p = s(new Set()),
          g = o(!1),
          f = g[0],
          h = g[1],
          b = u(
            function (t) {
              d.current === n && y.current === e && (p.current.delete(t), r.current && h(p.current.size > 0))
            },
            [n, r, e],
          )
        c(
          function () {
            ;(d.current === n && y.current === e) ||
              ((p.current = new Set()), r.current && h(!1), (d.current = n), (y.current = e))
          },
          [n, r, e],
        )
        var v = u(
          function (l) {
            var i = t(
              n,
              (0, a.default)(
                (0, a.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    b(i), l.onCompleted && l.onCompleted(e, t)
                  },
                  onError: function (e) {
                    b(i), l.onError && l.onError(e)
                  },
                  onUnsubscribe: function () {
                    b(i), l.onUnsubscribe && l.onUnsubscribe()
                  },
                },
              ),
            )
            return p.current.add(i), r.current && h(!0), i
          },
          [b, t, n, r, e],
        )
        return [v, f]
      }
    },
    AfjF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n('ERkP'),
        r = n.n(a),
        l = n('eb3s'),
        i = n('3XMw'),
        o = n.n(i),
        c = o.a.d45ae5e0,
        s = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return r.a.createElement(l.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: c,
            onCancel: t,
            onConfirm: n,
            text: s,
          })
        }
    },
    BX8b: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityRules_community',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [
                a,
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (t.default = r)
    },
    C2fM: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'userId' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'actions_denyMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                      { args: null, kind: 'FragmentSpread', name: 'actions_update_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (s = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestDenyError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      c,
                    ],
                    type: 'CommunityJoinRequestDenyActionUnavailable',
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'actions_denyMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  l,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserCommunityRelationship',
                        kind: 'LinkedField',
                        name: 'user_relationship',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'user_results',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'result',
                                plural: !1,
                                selections: [
                                  l,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      (m = {
                                        alias: 'id_str',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'rest_id',
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'ApiUser',
                                        kind: 'LinkedField',
                                        name: 'legacy',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'blocking',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'description',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'followed_by',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'following',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'muting',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'name',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'profile_image_url_https',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'screen_name',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        filters: null,
                                        handle: 'defaultScalars',
                                        key: '',
                                        kind: 'LinkedHandle',
                                        name: 'legacy',
                                      },
                                      i,
                                    ],
                                    type: 'User',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Community',
                            kind: 'LinkedField',
                            name: 'community',
                            plural: !1,
                            selections: [
                              m,
                              i,
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'join_requests_result',
                                plural: !1,
                                selections: [
                                  l,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      i,
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'pending_join_request_count',
                                        storageKey: null,
                                      },
                                    ],
                                    type: 'CommunityJoinRequests',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'CommunityJoinRequestActions',
                        kind: 'LinkedField',
                        name: 'actions',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_approve_action_result',
                            plural: !1,
                            selections: (d = [l]),
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_deny_action_result',
                            plural: !1,
                            selections: d,
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  s,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'f8oINMArsIzMhaM6B3oI0w',
            metadata: {},
            name: 'actions_denyMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '994dfbaa33f6514fd6bf940e12397869'), (t.default = y)
    },
    DCZs: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityTheme_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '8e7a3fa0cf4dcd04e0d8c3c8397e274b',
      }
      t.default = a
    },
    'DV/y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityInviteScreen', function () {
          return ae
        })
      var a = n('KEM+'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = n('ddV6'),
        c = n.n(o),
        s = (n('KqXw'), n('WNMA'), n('LW0h'), n('7x/C'), n('z84I'), n('1Iuc'), n('ERkP')),
        u = n.n(s),
        m = n('+Kfv'),
        d = n('eSoz'),
        y = n('rxPX'),
        p = n('0KEI'),
        g = function (e, t) {
          var n = t.match.params.communityId
          return n ? d.c.select(e, n) : void 0
        },
        f = Object(y.a)()
          .propsFromState(function () {
            return { community: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_INVITE_SCREEN',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'invite' }),
        h = n('jHSc'),
        b = n('3XMw'),
        v = n.n(b),
        _ = n('/yvb'),
        k = (n('2G9S'), n('KhuB')),
        E = n('li/m'),
        C = function (e, t) {
          return t.communityId && t.userId ? k.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        },
        S = Object(y.a)()
          .propsFromState(function () {
            return { inviteActionResult: C }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: E.a,
            }
          }),
        F = v.a.cd133485,
        I = v.a.hb1e378e,
        w = v.a.bcd6bb0d,
        T = 'primaryFilled',
        K = { viewType: 'invite' }
      var M = S(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            a = e.inviteActionResult,
            r = e.inviteToCommunity,
            l = e.onInvite,
            i = e.onInviteActionResultChange,
            o = e.userId,
            c = e.viewerInvited,
            s = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return F
              switch (e.reason) {
                case 'UserIsMember':
                  return w
                case 'UserIsInvited':
                  return I
                default:
                  return F
              }
            })(a),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return T
              switch (e.reason) {
                case 'UserIsMember':
                  return T
                default:
                  return 'primaryOutlined'
              }
            })(a)
          u.a.useEffect(
            function () {
              a && i(o, a)
            },
            [a, o, i],
          )
          var d = 'UserCommunityInviteAction' === (null == a ? void 0 : a.__typename)
          return !d && !c
            ? null
            : u.a.createElement(
                _.a,
                {
                  accessibilityLabel: s,
                  behavioralEventContext: K,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      r(t, o)
                        .then(function () {
                          return l && l(o)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                s,
              )
        }),
        x = n('5FtR'),
        R = n('4e/K'),
        L = n('MWbm'),
        O = n('4zmP'),
        A = n('t62R'),
        j = n('FIs5'),
        P = n('rHpw'),
        D = n('GZwR'),
        B = v.a.b139b549,
        H = v.a.dfddd842,
        N = v.a.cf4898a0,
        U = v.a.a3b3939a,
        z = v.a.db4f0cc9,
        V = v.a.h252ede6,
        q = v.a.a5cd93f9,
        W = v.a.ba5a88e3,
        X = v.a.i6568549,
        J = v.a.b772cd65,
        Q = v.a.b4f16d00,
        G = v.a.ja1387a7,
        Y = v.a.b92a21d8,
        Z = v.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        te = [D.a.CommunityUsers],
        ne = { viewType: 'community' }
      function ae(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = (t || {}).invites_result,
          o = e.match.params.communityId || '',
          s = u.a.useState(''),
          d = c()(s, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState({}),
          f = c()(g, 2),
          b = f[0],
          v = f[1],
          k = u.a.useState({}),
          E = c()(k, 2),
          C = E[0],
          S = E[1]
        u.a.useEffect(
          function () {
            o && a(o).catch(n())
          },
          [o, n, a],
        )
        var F,
          I,
          w = u.a.useMemo(
            function () {
              return y.length > 0 || !t
                ? ee
                : 'CommunityInvites' === l.__typename
                ? l.users_to_invite_slice.items.map(D.g).filter(Boolean)
                : ee
            },
            [t, l, y.length],
          ),
          T = u.a.useCallback(
            function (e, t) {
              v(function (n) {
                return i()(i()({}, n), {}, r()({}, e, t))
              })
            },
            [v],
          ),
          K = u.a.useCallback(
            function (e) {
              S(function (t) {
                return i()(i()({}, t), {}, r()({}, e, !0))
              })
            },
            [S],
          ),
          P = o
            ? u.a.createElement(x.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(x.a, { to: '/' }),
          ae = u.a.createElement(
            _.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            J,
          )
        return 'CommunityInvitesUnavailable' === (null == l ? void 0 : l.__typename)
          ? P
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ne },
              u.a.createElement(
                h.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: H, title: B },
                ((F = (null == l ? void 0 : l.remaining_invite_count) || 0),
                (I = F > 999),
                'CommunityInvites' === (null == l ? void 0 : l.__typename) &&
                  !I &&
                  u.a.createElement(
                    L.a,
                    { style: re.callout },
                    u.a.createElement(O.a, { text: X({ remaining_invite_count: F }) }),
                  )),
                u.a.createElement(R.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: te,
                  getItemDisabledMessage: function (e) {
                    var t
                    if ('user' === e.type) {
                      var n = e.data,
                        a = n.id_str,
                        r = n.screen_name,
                        l = b[a]
                      if ('UserCommunityInviteActionUnavailable' === (null == l ? void 0 : l.__typename))
                        switch (l.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: r })
                          case 'UserIsMember':
                            return z({ screen_name: r })
                          case 'ViewerOutOfInvites':
                            return V
                          default:
                            return null !== (t = l.message) && void 0 !== t ? t : q({ screen_name: r })
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
                  injectedItems: w,
                  inputStyle: re.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: N,
                  renderEmptyState: function () {
                    return u.a.createElement(j.a, { header: Q, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        L.a,
                        { style: re.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, W),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return u.a.createElement(j.a, { header: Y({ query: y }), message: Z })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return u.a.createElement(M, {
                      communityId: o,
                      onInvite: K,
                      onInviteActionResultChange: T,
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
      var re = P.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        le = f(ae)
      t.default = le
    },
    'Dm5+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'userId' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'actions_approveMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                      { args: null, kind: 'FragmentSpread', name: 'actions_update_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (s = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestApproveError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      c,
                    ],
                    type: 'CommunityJoinRequestApproveActionUnavailable',
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'actions_approveMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  l,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserCommunityRelationship',
                        kind: 'LinkedField',
                        name: 'user_relationship',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'user_results',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'result',
                                plural: !1,
                                selections: [
                                  l,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      (m = {
                                        alias: 'id_str',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'rest_id',
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'ApiUser',
                                        kind: 'LinkedField',
                                        name: 'legacy',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'blocking',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'description',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'followed_by',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'following',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'muting',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'name',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'profile_image_url_https',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'screen_name',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        filters: null,
                                        handle: 'defaultScalars',
                                        key: '',
                                        kind: 'LinkedHandle',
                                        name: 'legacy',
                                      },
                                      i,
                                    ],
                                    type: 'User',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Community',
                            kind: 'LinkedField',
                            name: 'community',
                            plural: !1,
                            selections: [
                              m,
                              i,
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'join_requests_result',
                                plural: !1,
                                selections: [
                                  l,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      i,
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'pending_join_request_count',
                                        storageKey: null,
                                      },
                                    ],
                                    type: 'CommunityJoinRequests',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'CommunityJoinRequestActions',
                        kind: 'LinkedField',
                        name: 'actions',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_approve_action_result',
                            plural: !1,
                            selections: (d = [l]),
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_deny_action_result',
                            plural: !1,
                            selections: d,
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  s,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Q7qnoflnLrXWUqeHBn9WxA',
            metadata: {},
            name: 'actions_approveMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = 'cccb7f84865368f471eb927f82edccec'), (t.default = y)
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var a = n('VrFO'),
        r = n.n(a),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        g = n('ERkP'),
        f = n.n(g),
        h = n('jtO7'),
        b = n('eb3s'),
        v = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(c()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              p()(c()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              p()(c()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    l = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(h.a, { align: t, color: n, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? f.a.createElement(b.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: l,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: i,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(v, 'defaultProps', { color: 'red500', align: 'center' })
    },
    EeFI: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('ERkP'),
        p = n.n(y),
        g = n('3XMw'),
        f = n.n(g),
        h = n('MWbm'),
        b = n('Qwev'),
        v = n('21U8'),
        _ = n('rHpw'),
        k = n('1auM'),
        E = n('eYns'),
        C = f.a.gff1f69e,
        S = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return i()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof k.a &&
                    Object(E.b)(n).then(function (t) {
                      return new k.a(t).withDimensionsAndOrientation().then(function (t) {
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
                    : p.a.createElement(b.a, { accessibilityLabel: C, style: F.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    n = e.defaultAspectRatio,
                    a = e.defaultCropData,
                    r = e.media,
                    l = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    o = this.state.orientedImage,
                    c = r || {},
                    s = c.cropData,
                    u = c.originalMediaFile,
                    m = void 0 === u ? {} : u
                  return o
                    ? p.a.createElement(
                        h.a,
                        { style: F.cropper },
                        p.a.createElement(v.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (s && s.aspectRatio) || n,
                          defaultCropData: a || s,
                          image: { src: o.url, width: m.width, height: m.height },
                          ref: t,
                          withAspectRatioOptions: l,
                          withZoomControl: i,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        F = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = p.a.forwardRef(function (e, t) {
        return p.a.createElement(S, r()({}, e, { cropperRef: t }))
      })
    },
    Eh7u: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityFacePile_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'UserResults',
              kind: 'LinkedField',
              name: 'members_facepile_results',
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'result',
                  plural: !1,
                  selections: [
                    (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'ApiUser',
                          kind: 'LinkedField',
                          name: 'legacy',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'profile_image_url_https',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: 'User',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (l = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                        {
                          alias: null,
                          args: null,
                          concreteType: 'TimelineRichText',
                          kind: 'LinkedField',
                          name: 'unavailable_message',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'alignment', storageKey: null },
                            {
                              alias: null,
                              args: null,
                              concreteType: 'TimelineRichTextEntity',
                              kind: 'LinkedField',
                              name: 'entities',
                              plural: !0,
                              selections: [
                                {
                                  alias: 'fromIndex',
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'from_index',
                                  storageKey: null,
                                },
                                {
                                  alias: 'toIndex',
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'to_index',
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'format', storageKey: null },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'ref',
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: 'type',
                                      args: null,
                                      kind: 'ScalarField',
                                      name: '__typename',
                                      storageKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: (o = [
                                        (i = {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'text',
                                          storageKey: null,
                                        }),
                                      ]),
                                      type: 'TimelineRichTextCashtag',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                                        (c = {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'url',
                                          storageKey: null,
                                        }),
                                      ],
                                      type: 'TimelineRichTextList',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: o,
                                      type: 'TimelineRichTextHashtag',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        c,
                                        {
                                          alias: 'urlType',
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'url_type',
                                          storageKey: null,
                                        },
                                        {
                                          alias: 'urtEndpointOptions',
                                          args: null,
                                          concreteType: 'TimelineUrtEndpointOptions',
                                          kind: 'LinkedField',
                                          name: 'urt_endpoint_options',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: 'cacheId',
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'cache_id',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'subtitle',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'title',
                                              storageKey: null,
                                            },
                                            {
                                              alias: 'requestParams',
                                              args: null,
                                              concreteType: 'RequestParamsEntry',
                                              kind: 'LinkedField',
                                              name: 'request_params',
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'key',
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'value',
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: 'TimelineUrl',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        (m = {
                                          alias: null,
                                          args: null,
                                          concreteType: 'UserResults',
                                          kind: 'LinkedField',
                                          name: 'user_results',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: 'LinkedField',
                                              name: 'result',
                                              plural: !1,
                                              selections: [
                                                r,
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: 'ApiUser',
                                                      kind: 'LinkedField',
                                                      name: 'legacy',
                                                      plural: !1,
                                                      selections: [
                                                        (s = {
                                                          alias: null,
                                                          args: null,
                                                          kind: 'ScalarField',
                                                          name: 'screen_name',
                                                          storageKey: null,
                                                        }),
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    a,
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    (u = {
                                                      alias: 'reason',
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'unavailable_reason',
                                                      storageKey: null,
                                                    }),
                                                    l,
                                                  ],
                                                  type: 'UserUnavailable',
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        }),
                                      ],
                                      type: 'TimelineRichTextUser',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [s, m],
                                      type: 'TimelineRichTextMention',
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            { alias: null, args: null, kind: 'ScalarField', name: 'rtl', storageKey: null },
                            i,
                          ],
                          storageKey: null,
                        },
                        u,
                      ],
                      type: 'UserUnavailable',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'CommunityMemberCount_community' },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(d.hash = 'e2457666463c59c1a72f329db4ba964b'), (t.default = d)
    },
    FSMj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolsPeopleScreen', function () {
          return C
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('vrRf'), n('ERkP')),
        i = n.n(l),
        o = n('LgBi'),
        c = n('UZ0O'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'people' }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('gDCe'),
        p = n('yoO3'),
        g = n('k/OQ'),
        f = n('mWs5'),
        h = n('MWbm'),
        b = n('krnS'),
        v = n('zCf4'),
        _ = d.a.dc6ce7b4,
        k = d.a.f8321d82,
        E = d.a.ga2aa43c,
        C = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.location,
            l = i.a.useState(!1),
            s = r()(l, 2),
            u = s[0],
            m = s[1],
            d = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            C = d ? k : E,
            S = i.a.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: a.state },
                        label: k,
                        key: k,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: a.state },
                        label: E,
                        key: E,
                      },
                    ]
                  : []
                return i.a.createElement(g.a, { accessibilityLabel: C, links: e })
              },
              [n, C, a],
            )
          return i.a.createElement(
            p.a,
            null,
            i.a.createElement(
              f.a,
              {
                communityId: t.id_str,
                rightControl: d ? i.a.createElement(o.a, { communityId: n }) : void 0,
                title: _,
              },
              i.a.createElement(
                h.a,
                null,
                i.a.createElement(c.a, { community: t, communityId: n, onIsSearchingChange: m }),
                u
                  ? null
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      S,
                      i.a.createElement(
                        v.d,
                        null,
                        i.a.createElement(
                          v.b,
                          { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                          i.a.createElement(b.b, {
                            communityId: t.id_str,
                            mode: b.a.Members,
                            userRole: null == t ? void 0 : t.role,
                          }),
                        ),
                        i.a.createElement(
                          v.b,
                          { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                          i.a.createElement(y.a, { community: t }),
                          i.a.createElement(b.b, {
                            communityId: t.id_str,
                            mode: b.a.Moderators,
                            userRole: null == t ? void 0 : t.role,
                          }),
                        ),
                      ),
                    ),
              ),
            ),
          )
        }
      t.default = u(C)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return J
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return Q
        })
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = (n('yH/f'), n('KqXw'), n('WNMA'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('+Kfv'),
        m = n('es0u'),
        d = (n('ZVkB'), n('ulNE'), n('urw/'), n('jQ3i'), n('x4t0'), n('eSoz')),
        y = n('XOJV'),
        p = n('G6rE'),
        g = n('rxPX'),
        f = function (e, t) {
          var n = t.match.params.tweetId
          return n ? y.a.selectHydrated(e, n) : void 0
        },
        h = function (e, t) {
          var n = t.match.params
          return Object.entries(n).flat().includes('tweetId') ? J.HiddenTweet : J.RemovedMember
        },
        b = function (e, t) {
          if (h(0, t) === J.HiddenTweet) {
            var n,
              a = t.match.params.tweetId,
              r = a ? y.a.selectHydrated(e, a) : void 0,
              l = null == r || null === (n = r.community_relationship) || void 0 === n ? void 0 : n.community
            return l ? d.c.select(e, l) : void 0
          }
          var i = t.match.params.communityId
          return i ? d.c.select(e, i) : void 0
        },
        v = function (e, t) {
          if (h(0, t) === J.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? y.a.selectFetchStatus(e, n) : void 0
          }
          var a = t.match.params.communityId
          return a ? d.c.selectFetchStatus(e, a) : void 0
        },
        _ = Object(g.a)()
          .propsFromState(function () {
            return { community: b, fetchStatus: v, loggedInUser: p.e.selectLoggedInUser, tweet: f, type: h }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: y.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        k = (n('ho0z'), n('PKbs')),
        E = n('egQk'),
        C = n('3XMw'),
        S = n.n(C),
        F = n('/de5'),
        I = n('b5s6'),
        w = n('MWbm'),
        T = n('X00g'),
        K = n('t62R'),
        M = n('4zmP'),
        x = n('0yYu'),
        R = n('6vad'),
        L = n('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        P = S.a.icc32e3d,
        D = T.a.getCommunityTheme('Default'),
        B = L.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: L.a.theme.colors.gray50,
              borderRadius: L.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: L.a.theme.spacesPx.space16,
              marginBottom: L.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: L.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        H = function (e) {
          var t,
            n = e.community,
            a = e.history,
            r = e.location,
            l = e.match,
            i = e.tweet,
            o = e.type,
            s = { history: a, location: r, match: l },
            u = null == i ? void 0 : i.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case J.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case J.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === t
                ? void 0
                : t.name) || '',
            y = null == n ? void 0 : n.name,
            p = null == n ? void 0 : n.rules,
            g = (null == n ? void 0 : n.theme) || D,
            f = T.a.getCommunityUIColorName(g),
            h = Object(E.a)({ communityName: y })
          return g && null != p && p.length
            ? c.a.createElement(
                w.a,
                { style: B.tweetInfo },
                c.a.createElement(
                  w.a,
                  { style: B.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case J.HiddenTweet:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { color: f, size: 'subtext1', style: B.communityTitle, weight: 'bold' },
                            y,
                          ),
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: [B.titleText, B.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          c.a.createElement(I.a, {
                            style: B.tweetContainer,
                            tweetId: null == i ? void 0 : i.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          c.a.createElement(M.a, { headline: A, text: d }),
                          c.a.createElement(K.b, { style: B.helpText }, j),
                        )
                      case J.RemovedMember:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            P({ communityName: y }),
                          ),
                          c.a.createElement(
                            w.a,
                            { style: B.removedMemberReason },
                            c.a.createElement(K.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                c.a.createElement(x.a, null),
                c.a.createElement(R.b, { text: h }),
                c.a.createElement(k.b, {
                  badgeStyle: B.badges,
                  ruleContainerStyle: B.rules,
                  rules: p,
                  theme: g,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : c.a.createElement(F.b, s)
        },
        N = n('G1WX'),
        U = n('yoO3'),
        z = n('VS6U'),
        V = n('0KEI'),
        q = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        W = S.a.jf99d610,
        X = { viewType: 'community' },
        J = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function Q(e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          a = e.fetchCommunity,
          l = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          g = i()(e, q),
          f = function (e) {
            var t, a
            switch (e) {
              case J.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == y ? void 0 : y.user.id_str)),
                  _handleRetry: E,
                  shouldRenderFeedback: Boolean(
                    null == y || null === (t = y.community_relationship) || void 0 === t
                      ? void 0
                      : t.moderation_state.rule,
                  ),
                }
              case J.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == n ? void 0 : n.viewerViolatedRule)),
                  _handleRetry: C,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == n || null === (a = n.viewer_relationship) || void 0 === a
                        ? void 0
                        : a.moderation_state.__typename),
                  ),
                }
              default:
                return {}
            }
          },
          h = e.match.params,
          b = h.communityId,
          v = h.tweetId,
          _ = Object(V.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          k = Object(V.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          E = c.a.useEffect(
            function () {
              v && o(v).catch(_)
            },
            [_, o, v],
          ),
          C = c.a.useEffect(
            function () {
              b && a(b).catch(k)
            },
            [b, k, a],
          ),
          S = c.a.createElement(F.b, g)
        return c.a.createElement(N.a, {
          fetchStatus: l,
          onRequestRetry: f(p)._handleRetry,
          render: function () {
            var n = f(p),
              a = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              l = n.isAuthorizedViewer,
              i = n.shouldRenderFeedback
            return l && t
              ? c.a.createElement(
                  u.a,
                  { behavioralEventContext: X },
                  i
                    ? c.a.createElement(
                        U.a,
                        { behavioralEventViewType: a },
                        c.a.createElement(z.a, {
                          backLocation: '/notifications',
                          history: g.history,
                          primaryContent: c.a.createElement(H, r()({}, e, { type: p })),
                          sidebarContent: c.a.createElement(m.a, null),
                          title: W,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var G = _(Q)
      t.default = G
    },
    'I/KZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return l
        }),
        n.d(t, 'd', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return w
        }),
        n.d(t, 'c', function () {
          return T
        })
      n('yH/f')
      var a,
        r = Object.freeze({
          Open: 'CommunityOpenMembershipSettings',
          Restricted: 'CommunityRestrictedMembershipSettings',
        }),
        l = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        i = n('ERkP'),
        o = n.n(i),
        c = n('3XMw'),
        s = n.n(c),
        u = n('t62R'),
        m = n('3JAx'),
        d = n('e0ey'),
        y = n('rHpw'),
        p = [
          { label: s.a.fd00a769, value: r.Open, helpText: s.a.a0a16d37 },
          { label: s.a.ce0523a8, value: r.Restricted, helpText: s.a.i1aad6eb },
        ],
        g = s.a.c85960a0,
        f = s.a.ca373cd2,
        h = s.a.j7f554f5,
        b = function (e) {
          var t = e.state,
            n = t.access,
            a = t.invitesPolicy,
            i = e.setters,
            c = i.setAccess,
            s = i.setInvitesPolicy,
            y = !e.hideInvitePolicy,
            b = o.a.useCallback(
              function (e, t) {
                c(t)
              },
              [c],
            ),
            v = o.a.useCallback(
              function (e, t) {
                s(t ? l.Member : l.Moderator)
              },
              [s],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: _.settingsItem }, h),
            o.a.createElement(m.a, { name: 'membershipSetting', onChange: b, options: p, value: n }),
            y &&
              n === r.Restricted &&
              o.a.createElement(d.a, {
                checked: a === l.Member,
                helpText: f,
                label: g,
                name: 'allowInvites',
                onChange: v,
              }),
          )
        },
        v = o.a.memo(b),
        _ = y.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        k = n('ddV6'),
        E = n.n(k),
        C = n('KEM+'),
        S = n.n(C),
        F = ((a = {}), S()(a, r.Open, l.Member), S()(a, r.Restricted, l.Moderator), a),
        I = { access: r.Restricted, invitesPolicy: F[r.Restricted] }
      function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          t = o.a.useState(e.access),
          n = E()(t, 2),
          a = n[0],
          r = n[1],
          l = o.a.useState(e.invitesPolicy),
          i = E()(l, 2),
          c = i[0],
          s = i[1],
          u = o.a.useMemo(function () {
            return {
              setAccess: function (e) {
                s(F[e]), r(e)
              },
              setInvitesPolicy: s,
            }
          }, []),
          m = o.a.useMemo(
            function () {
              return { access: a, invitesPolicy: c }
            },
            [a, c],
          )
        return [m, u]
      }
      function T(e) {
        var t, n
        switch (e.access) {
          case r.Open:
            t = 'Open'
            break
          case r.Restricted:
          default:
            t = 'RestrictedJoinRequestsDisabled'
        }
        switch (e.invitesPolicy) {
          case l.Moderator:
            n = 'ModeratorInvitesAllowed'
            break
          case l.Member:
            n = 'MemberInvitesAllowed'
            break
          case l.None:
          default:
            n = 'NoInvitesAllowed'
        }
        return { joinPolicy: t, invitesPolicy: n }
      }
    },
    Iqvj: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'MemberRequestsBadgeQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'MemberRequestsBadge_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'MemberRequestsBadgeQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'pending_join_request_count',
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  l,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Pa1zNbA87WEj2_NZ545kYA',
            metadata: {},
            name: 'MemberRequestsBadgeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '6a17e1b7d37fde19bd4ae3cf11983c91'), (t.default = i)
    },
    JAeQ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ddV6'),
        i = n.n(l),
        o = (n('yH/f'), n('kH1Z'), n('6U7i'), n('ERkP')),
        c = n.n(o),
        s = n('3XMw'),
        u = n.n(s),
        m = n('fS8x'),
        d = u.a.b7fb6bd9,
        y = u.a.e71cdf4d,
        p = Object.freeze({ NotStarted: 'not_started', Started: 'started', Completed: 'completed' })
      function g(e) {
        var t = e.aspectRatio,
          n = e.media,
          a = e.onCancel,
          l = e.onCropDone,
          o = c.a.useState({ status: 'not_started' }),
          s = i()(o, 2),
          u = s[0],
          g = s[1],
          f = c.a.useState(!1),
          h = i()(f, 2),
          b = h[0],
          v = h[1],
          _ = c.a.useState(!1),
          k = i()(_, 2),
          E = k[0],
          C = k[1],
          S = u.croppedMediaId,
          F = void 0 === S ? void 0 : S,
          I = u.status
        c.a.useEffect(
          function () {
            I === p.NotStarted && (v(!0), g({ status: 'started' })),
              I === p.Completed && n.id !== F && g({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, n, F],
        )
        var w = c.a.useCallback(
            function () {
              v(!1), g({ status: p.Completed, croppedMediaId: n.id }), a()
            },
            [a, n],
          ),
          T = c.a.useCallback(function () {
            v(!1), C(!0)
          }, []),
          K = c.a.useCallback(function () {
            C(!1), v(!0)
          }, []),
          M = c.a.useCallback(function () {
            C(!1)
          }, []),
          x = c.a.useCallback(
            function (e) {
              g({ status: p.Completed, croppedMediaId: n.id }), null == l || l(e)
            },
            [l, n],
          ),
          R = r()(r()({}, n), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: n.mediaFile, cropData: void 0 })
        return c.a.createElement(
          c.a.Fragment,
          null,
          b ? c.a.createElement(m.a, { defaultAspectRatio: t, media: n, onCancel: w, onDone: T, title: d }) : null,
          E
            ? c.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: R,
                onCancel: K,
                onCropDone: x,
                onDone: M,
                title: y,
              })
            : null,
        )
      }
    },
    Jt8P: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'list_communityJoinRequestsSlice',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'CommunityJoinRequest',
            kind: 'LinkedField',
            name: 'items',
            plural: !0,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
              { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
            ],
            storageKey: null,
          },
        ],
        type: 'CommunityJoinRequestsSlice',
        abstractKey: null,
        hash: '53ebb4923797f8ac8a789c20901e1a59',
      }
      t.default = a
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = (n('hBvt'), n('ERkP')),
        i = n.n(l),
        o = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return i.a.createElement(o.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, r()({ isActive: t }, e, { label: i.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    L47s: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('+Kfv'),
        c = n('3XMw'),
        s = n.n(c),
        u = n('feu+'),
        m = n('ii+P'),
        d = s.a.j24c37b2,
        y = function (e) {
          var t = e.Content,
            n = e.actionLabel,
            a = void 0 === n ? d : n,
            l = e.flag,
            c = e.headline,
            s = e.subtext,
            y = e.behavioralEventContext,
            p = e.withCloseButton,
            g = Object(m.a)(l),
            f = r()(g, 2),
            h = f[0],
            b = f[1]
          if (!h) return null
          var v = i.a.createElement(
            u.a,
            {
              actionLabel: a,
              graphicDisplayMode: 'none',
              headline: c,
              onAction: b,
              onClose: b,
              subtext: s,
              withCloseButton: p,
            },
            i.a.createElement(t, null),
          )
          return y ? i.a.createElement(o.a, { behavioralEventContext: y }, v) : v
        }
      t.a = i.a.memo(y)
    },
    LgBi: function (e, t, n) {
      'use strict'
      var a,
        r = n('97Jx'),
        l = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        u = n('ogGF'),
        m = (n('enFi'), n('Fr3L')),
        d = n('IAZG'),
        y = ['communityId'],
        p = { context: 'CommunityInviteButtonQuery' },
        g = void 0 !== a ? a : (a = n('zakg')),
        f = function (e) {
          var t = e.communityId,
            n = o()(e, y),
            a = Object(d.a)(g, { communityId: t })
          return s.a.createElement(u.a, l()({ community: a.community }, n))
        },
        h = function (e) {
          return s.a.createElement(
            m.a,
            { errorConfig: p },
            s.a.createElement(f, l()({ communityId: e.communityId }, e)),
          )
        }
      t.a = s.a.memo(h)
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        h = (n('2G9S'), n('i4UL'), n('+/5o')),
        b = n('ERkP'),
        v = n.n(b),
        _ = n('HPNB'),
        k = n('VAZu'),
        E = n('wiP2'),
        C = n('Es6L'),
        S = n('yiKp'),
        F = n.n(S),
        I = n('rHpw'),
        w = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: F()(F()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        T = n('MWbm'),
        K = n('yw4N'),
        M = n('TnY3'),
        x = n('cHvH'),
        R = n('3xLC'),
        L = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        O = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      T.a,
                      { style: w.fill },
                      v.a.createElement(
                        K.a,
                        { style: w.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(x.a, null, function (t) {
                    var n = t.windowWidth
                    return _.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      r()(e, L))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(E.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return v.a.createElement(
                    v.a.Fragment,
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
                    a = n.SideNavButton,
                    r = n.TabBar,
                    l = n.TeamsSwitcher,
                    i = n.backLocation,
                    o = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    m = n.middleControl,
                    d = n.onBackClick,
                    y = n.rightControl,
                    p = n.screenType,
                    g = n.searchBoxOptions,
                    f = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    _ = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    S = n.title,
                    F = n.titleIconCell,
                    I = n.titleIconCellSize,
                    K = n.withDetailOpen,
                    M = n.withSearchBox,
                    x = n.withTweetButton,
                    R = 'root' === p,
                    L = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && _) || (R && b),
                    j = R || (O && t),
                    P = R ? h.c : O ? h.a : void 0,
                    D = v.a.createElement(
                      T.a,
                      { style: w.appBarContainer },
                      v.a.createElement(k.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: j,
                        history: s,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: y,
                        secondaryBar: f,
                        subtitle: A ? C : void 0,
                        title: S,
                        titleDomId: P,
                        titleIconCell: F,
                        titleIconCellSize: I,
                      }),
                    ),
                    B =
                      R || (L && K)
                        ? null
                        : v.a.createElement(E.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: l,
                            backLocation: i,
                            documentTitle: o,
                            headerless: c,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: y,
                            searchBoxOptions: g,
                            subtitle: C,
                            title: S,
                            withSearchBox: M,
                            withTweetButton: x,
                          })
                  return v.a.createElement(v.a.Fragment, null, B, D)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(O, 'contextType', R.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(M.a)(O)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return C
        })
      var a = n('yiKp'),
        r = n.n(a),
        l = n('97Jx'),
        i = n.n(l),
        o = (n('KqXw'), n('WNMA'), n('ho0z'), n('uFXj'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('es0u'),
        m = n('PKbs'),
        d = n('egQk'),
        y = n('1Idg'),
        p = n('eSoz'),
        g = n('rxPX'),
        f = n('0KEI'),
        h = Object(g.a)()
          .propsFromState(function () {
            return { community: y.a, fetchStatus: y.b, isCommunityMember: y.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: p.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        b = n('MDbM'),
        v = n('/de5'),
        _ = n('5FtR'),
        k = n('VS6U'),
        E = n('rHpw'),
        C = function (e) {
          var t = c.a.useContext(s.a).featureSwitches,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            g = e.location,
            f = e.match,
            h = f.params.communityId,
            E = t.isTrue('c9s_participation_enabled')
          c.a.useEffect(
            function () {
              h && !n && o !== b.a.LOADED && l(h).catch(a())
            },
            [h, n, a, o, l],
          )
          var C = c.a.useMemo(
            function () {
              return { selectedCommunityId: h || '', defaultText: '' }
            },
            [h],
          )
          if (n && h) {
            var S = n.name,
              I = n.rules,
              w = n.theme,
              T = {
                composeOptions: C,
                history: y,
                sidebarContent: c.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: E && p,
              }
            if (I.length > 0) {
              var K = c.a.createElement(m.b, {
                badgeStyle: F.badgeStyle,
                headerContainerStyle: F.containerStyle,
                headerExplanationStyle: F.explanationStyle,
                ruleContainerStyle: F.ruleContainerStyle,
                rules: I,
                theme: w,
                withBottomMargin: !0,
              })
              return c.a.createElement(
                k.a,
                i()({}, T, {
                  backLocation: '/i/communities/'.concat(h),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: K,
                }),
              )
            }
            var M = r()(r()({}, T), {}, { title: null }),
              x = c.a.createElement(v.b, { history: y, location: g, match: f })
            return c.a.createElement(k.a, i()({}, M, { primaryContent: x }))
          }
          return o === b.a.LOADED || o === b.a.FAILED ? c.a.createElement(_.a, { to: '/' }) : null
        },
        S = h(C),
        F =
          ((t.default = S),
          E.a.create(function (e) {
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
    OBBW: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDescriptionContainer_community',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImage_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '7160dd73830957dbef0814fa82a0296d',
      }
      t.default = a
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('rHpw'),
        i = n('MWbm')
      function o(e) {
        var t = e.spacing
        return r.a.createElement(i.a, {
          accessibilityRole: 'separator',
          style: [c.divider, { marginVertical: null != t ? l.a.theme.spaces[t] : void 0 }],
        })
      }
      var c = l.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    OUEC: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = n('ezF+'),
        c =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(202).then(n.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: n('XBtf').a.Critical,
          }),
        s = o.e(c),
        u = n('QIgh'),
        m = n('8UdT')
      t.a = i()(i()({}, u.b), {}, r()({}, m.b.Community, s))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('3XMw'),
        s = n.n(c),
        u = n('Nh1N'),
        m = n('MWbm'),
        d = n('Ig1G'),
        y = n('4zmP'),
        p = n('p+r5'),
        g = n('rHpw'),
        f = s.a.c66769a3,
        h = s.a.ef02695a,
        b = s.a.ef02695a,
        v = s.a.c824202f,
        _ = s.a.d32cf5e6,
        k = s.a.f8fa00c7,
        E = s.a.fc2a5c92,
        C = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            a = t.getNumberValue('c9s_max_rule_description_length', 160),
            l = e.description,
            c = e.errorText,
            s = e.name,
            g = e.onChange,
            C = i.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 3, n)
              },
              [n],
            ),
            F = i.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 0, a)
              },
              [a],
            ),
            I = i.a.useState(s),
            w = r()(I, 2),
            T = w[0],
            K = w[1],
            M = i.a.useState(C(s)),
            x = r()(M, 2),
            R = x[0],
            L = x[1],
            O = i.a.useState(void 0),
            A = r()(O, 2),
            j = A[0],
            P = A[1],
            D = i.a.useState(l),
            B = r()(D, 2),
            H = B[0],
            N = B[1],
            U = i.a.useState(F(l)),
            z = r()(U, 2),
            V = z[0],
            q = z[1],
            W = i.a.useState(void 0),
            X = r()(W, 2),
            J = X[0],
            Q = X[1],
            G = i.a.useState('' !== s),
            Y = r()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = i.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                C(a) && ((t = !0), P(b({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  L(t),
                  K(a),
                  g({ description: H, name: a, valid: !t && !V })
              },
              [n, H, g, V, C],
            ),
            te = i.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                F(n) && ((t = !0), Q(k({ maxCharacterCount: a }))),
                  q(t),
                  N(n),
                  g({ name: T, description: n, valid: !t && !R })
              },
              [a, T, g, R, F],
            ),
            ne = R && j ? void 0 : h({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = V ? void 0 : _({ maxCharacterCount: a }),
            re = c
              ? i.a.createElement(
                  m.a,
                  { style: S.error },
                  i.a.createElement(y.a, { Icon: u.a, headline: E, text: c, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            i.a.Fragment,
            null,
            re,
            i.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: j,
              helperText: ne,
              invalid: R && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: T,
            }),
            i.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: J,
              helperText: ae,
              invalid: V,
              label: v,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: a,
              value: H,
            }),
          )
        },
        S = g.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    PMbW: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'controls_CommunityJoinRequestActions',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'join_request_approve_action_result',
              plural: !1,
              selections: (a = [
                { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              ]),
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'join_request_deny_action_result',
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: 'CommunityJoinRequestActions',
          abstractKey: null,
        }
      ;(r.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (t.default = r)
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: r,
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
      ;(l.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = l)
    },
    Phky: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) {
            var l = n[a].screenName
            t.push(l)
          }
          return t
        })
      var r = a(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA'),
        i = n('xZGM'),
        o = n('L47s'),
        c = n('3XMw'),
        s = n.n(c),
        u = n('MWbm'),
        m = n('X00g'),
        d = n('h0NW'),
        y = n('rHpw'),
        p = n('r9x5'),
        g = n('cOhU'),
        f = n('uCrx'),
        h = s.a.b60e4f77,
        b = s.a.f0fc827d,
        v = s.a.c8e93b51,
        _ = s.a.fc5c6913,
        k = s.a.ad211086,
        E = s.a.gf803ba1,
        C = s.a.e92fe01b,
        S = s.a.h3bb8068,
        F = s.a.a709f8f8,
        I = { viewType: 'welcome_education' },
        w = r.a.memo(function (e) {
          var t = e.forSingleCommunity,
            n = r.a.useContext(l.a).featureSwitches,
            a = r.a.useCallback(
              function () {
                var e = n.isTrue('c9s_ui_colors_enabled_rweb') && (null == t ? void 0 : t.theme),
                  a = [T.decorationContainer, e && { color: m.a.getCommunityUIColor(e) }],
                  l = r.a.createElement(p.a, { style: a }),
                  i = r.a.createElement(g.a, { style: a }),
                  o = r.a.createElement(f.a, { style: a })
                return r.a.createElement(
                  u.a,
                  { style: T.infoItemsContainer },
                  r.a.createElement(d.a, {
                    containerStyle: T.itemContainer,
                    items: [
                      { label: _, description: k, decoration: l },
                      { label: E, description: C, decoration: i },
                      { label: S, description: F, decoration: o },
                    ],
                  }),
                )
              },
              [n, t],
            )
          return !1 === (null == t ? void 0 : t.canJoinCommunity)
            ? null
            : r.a.createElement(o.a, {
                Content: a,
                actionLabel: h,
                behavioralEventContext: I,
                flag: i.j,
                headline: b,
                subtext: v,
                withCloseButton: !t,
              })
        }),
        T = y.a.create(function (e) {
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
        })
      t.a = w
    },
    R0yc: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y,
        p,
        g,
        f,
        h,
        b,
        v,
        _,
        k,
        E = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'PrimaryContentQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityActions',
                    kind: 'LinkedField',
                    name: 'actions',
                    plural: !1,
                    selections: [
                      (s = {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_action_result',
                        plural: !1,
                        selections: (c = [
                          (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                        ]),
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityAbout_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityInfo_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityCreationSummary_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityDetail_community' },
                  { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'PrimaryContentQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  l,
                  i,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityActions',
                    kind: 'LinkedField',
                    name: 'actions',
                    plural: !1,
                    selections: [
                      s,
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  (m = { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'creator_results',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'result',
                        plural: !1,
                        selections: [
                          o,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              u,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  (d = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'screen_name',
                                    storageKey: null,
                                  }),
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                ],
                                storageKey: null,
                              },
                              (y = {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'defaultScalars',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'legacy',
                              }),
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      l,
                      m,
                      (p = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                      u,
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
                  p,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'custom_banner_media',
                    plural: !1,
                    selections: (g = [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'media_info',
                        plural: !1,
                        selections: [
                          o,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'MediaColorInfo',
                                kind: 'LinkedField',
                                name: 'color_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'MediaColorPaletteItem',
                                    kind: 'LinkedField',
                                    name: 'palette',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'MediaColor',
                                        kind: 'LinkedField',
                                        name: 'rgb',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'red',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'green',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'blue',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'percentage',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'original_img_url',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'original_img_width',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'original_img_height',
                                storageKey: null,
                              },
                            ],
                            type: 'ApiImage',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      u,
                    ]),
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'default_banner_media',
                    plural: !1,
                    selections: g,
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'members_facepile_results',
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'result',
                        plural: !1,
                        selections: [
                          o,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'profile_image_url_https',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              y,
                              u,
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (f = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'TimelineRichText',
                                kind: 'LinkedField',
                                name: 'unavailable_message',
                                plural: !1,
                                selections: [
                                  { alias: null, args: null, kind: 'ScalarField', name: 'alignment', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'TimelineRichTextEntity',
                                    kind: 'LinkedField',
                                    name: 'entities',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: 'fromIndex',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'from_index',
                                        storageKey: null,
                                      },
                                      {
                                        alias: 'toIndex',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'to_index',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'format',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'ref',
                                        plural: !1,
                                        selections: [
                                          o,
                                          { kind: 'TypeDiscriminator', abstractKey: '__isTimelineReferenceObject' },
                                          {
                                            alias: 'type',
                                            args: null,
                                            kind: 'ScalarField',
                                            name: '__typename',
                                            storageKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: (b = [
                                              (h = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                            ]),
                                            type: 'TimelineRichTextCashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              u,
                                              (v = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'url',
                                                storageKey: null,
                                              }),
                                            ],
                                            type: 'TimelineRichTextList',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: b,
                                            type: 'TimelineRichTextHashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              v,
                                              {
                                                alias: 'urlType',
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'url_type',
                                                storageKey: null,
                                              },
                                              {
                                                alias: 'urtEndpointOptions',
                                                args: null,
                                                concreteType: 'TimelineUrtEndpointOptions',
                                                kind: 'LinkedField',
                                                name: 'urt_endpoint_options',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: 'cacheId',
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'cache_id',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'subtitle',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'title',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: 'requestParams',
                                                    args: null,
                                                    concreteType: 'RequestParamsEntry',
                                                    kind: 'LinkedField',
                                                    name: 'request_params',
                                                    plural: !0,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'key',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'value',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'TimelineUrl',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              (k = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'user_results',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: 'LinkedField',
                                                    name: 'result',
                                                    plural: !1,
                                                    selections: [
                                                      o,
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: 'ApiUser',
                                                            kind: 'LinkedField',
                                                            name: 'legacy',
                                                            plural: !1,
                                                            selections: [d],
                                                            storageKey: null,
                                                          },
                                                          y,
                                                          l,
                                                          u,
                                                        ],
                                                        type: 'User',
                                                        abstractKey: null,
                                                      },
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          (_ = {
                                                            alias: 'reason',
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'unavailable_reason',
                                                            storageKey: null,
                                                          }),
                                                          f,
                                                        ],
                                                        type: 'UserUnavailable',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              }),
                                            ],
                                            type: 'TimelineRichTextUser',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [d, k],
                                            type: 'TimelineRichTextMention',
                                            abstractKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'rtl', storageKey: null },
                                  h,
                                ],
                                storageKey: null,
                              },
                              _,
                            ],
                            type: 'UserUnavailable',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'invites_result',
                    plural: !1,
                    selections: [
                      o,
                      { kind: 'InlineFragment', selections: [u], type: 'CommunityInvites', abstractKey: null },
                    ],
                    storageKey: null,
                  },
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'JrDziDMJ_IXU4Iyzr1gqQg',
            metadata: {},
            name: 'PrimaryContentQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(E.hash = '90ab0e63de690e9ae88ff94c2bcc61d6'), (t.default = E)
    },
    R5kW: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return f
        })
      var a = n('KEM+'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = (n('yH/f'), n('oEOe')),
        c = n('kGix'),
        s = n('Ssj5'),
        u = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, t) {
          return e[u][t]
        },
        y = function (e, t) {
          var n
          return null !== (n = e[u].fetchStatus[t]) && void 0 !== n ? n : c.a.NONE
        },
        p = Object.freeze({ fetchStatus: {} })
      function g(e) {
        return e.meta.communityId
      }
      var f = function (e) {
        return function (t, n, a) {
          var r = a.api
          return o.b(t, { params: { communityId: e }, request: r.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      s.a.register(
        r()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: i()(i()({}, e.fetchStatus), {}, r()({}, g(t), c.a.LOADING)) })
            case m.FAILURE:
              return i()(
                i()({}, e),
                {},
                { fetchStatus: i()(i()({}, e.fetchStatus), {}, r()({}, g(t), c.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return i()(
                  i()({}, e),
                  {},
                  ((n = {}),
                  r()(n, g(t), t.payload),
                  r()(n, 'fetchStatus', i()(i()({}, e.fetchStatus), {}, r()({}, g(t), c.a.LOADED))),
                  r()(n, 'error', null),
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
        return _
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = n('nmVb'),
        y = n.n(d),
        p = n('Phky'),
        g = n.n(p),
        f = u.a.h3e55b40,
        h = u.a.dd71d9c9,
        b = u.a.cf65e56a,
        v = u.a.d936eeca,
        _ = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityName,
            l = e.onChange,
            s = i.a.useContext(o.a).featureSwitches,
            u = i.a.useState(!1),
            d = r()(u, 2),
            p = d[0],
            _ = d[1],
            k = i.a.useState(void 0),
            E = r()(k, 2),
            C = E[0],
            S = E[1],
            F = s.getNumberValue('c9s_max_community_name_length', 30),
            I = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.h)(t, 3, F)
                  ? (y()(t).length > 0 || g()(t).length > 0) && ((n = !0), S(v))
                  : ((n = !0), S(b({ minCharacterCount: 3, maxCharacterCount: F }))),
                  _(n),
                  l(t, n)
              },
              [F, l, S],
            ),
            w = h({ minCharacterCount: 3, maxCharacterCount: F })
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: C,
            helperText: w,
            invalid: p,
            label: f,
            name: 'typedCommunityName',
            onChange: I,
            spellCheck: 'false',
            validLength: F,
            value: a,
          })
        }
    },
    Rqga: function (e, t, n) {
      var a = n('ax0f'),
        r = Math.log,
        l = Math.LN2
      a(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return r(e) / l
          },
        },
      )
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    S91Q: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'CommunitiesCreateButtonQuery',
            selections: [
              {
                alias: 'viewer',
                args: (a = [{ kind: 'Literal', name: 's', value: 23 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'create_community_action_result',
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: 'FragmentSpread',
                        name: 'CommunitiesCreateButton_create_community_action_result',
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'CommunitiesCreateButtonQuery',
            selections: [
              {
                alias: 'viewer',
                args: a,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'create_community_action_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      { kind: 'TypeDiscriminator', abstractKey: '__isCommunityCreateActionResult' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
          },
          params: {
            id: '8daJzV6tGCTssiKBRFpXtQ',
            metadata: {},
            name: 'CommunitiesCreateButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (t.default = r)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SyZD: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesRouter', function () {
          return Y
        })
      var a = n('97Jx'),
        r = n.n(a),
        l = (n('KqXw'), n('WNMA'), n('2G9S'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('Ig1G'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('yoO3'),
        p = n('5FtR'),
        g = n('ddV6'),
        f = n.n(g),
        h = (n('z84I'), n('/yvb')),
        b = n('eSoz'),
        v = n('0KEI'),
        _ = Object(s.a)()
          .propsFromActions(function () {
            return {
              reorderRules: b.c.reorderRules,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        k = n('rHpw'),
        E = k.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        C = n('mWs5'),
        S = n('PKbs'),
        F = d.a.b772cd65,
        I = d.a.gfca5254
      var w = _(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.explanation,
            r = e.history,
            l = e.reorderRules,
            o = t.id_str,
            c = t.rules,
            s = t.theme,
            u = i.a.useState(c),
            m = f()(u, 2),
            d = m[0],
            p = m[1],
            g = i.a.useCallback(
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
                l(o, { ruleIds: t })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, l, r, n],
            ),
            v = i.a.createElement(h.a, { onPress: b, size: 'small', type: 'brandFilled' }, F)
          return i.a.createElement(
            y.a,
            null,
            i.a.createElement(
              C.a,
              { communityId: o, rightControl: v, screenType: 'primaryDetail', title: I },
              i.a.createElement(S.b, {
                badgeStyle: E.badgeStyle,
                displayType: S.a.Reorder,
                explanation: a,
                headerContainerStyle: E.headerContainerStyle,
                onReorder: g,
                ruleContainerStyle: E.ruleContainerStyle,
                rules: d,
                theme: s,
              }),
            ),
          )
        }),
        T = n('xZGM'),
        K = n('L47s'),
        M = n('MWbm'),
        x = n('t62R'),
        R = d.a.a9ba79c0,
        L = [d.a.h5482c79, d.a.d5033a7a, d.a.ee8c43af],
        O = d.a.j24c37b2,
        A = function () {
          return i.a.createElement(
            M.a,
            { style: P.content },
            L.map(function (e) {
              return i.a.createElement(x.b, { color: 'gray700', key: e, size: 'body', style: P.item }, e)
            }),
          )
        },
        j = function () {
          return i.a.createElement(K.a, { Content: A, actionLabel: O, flag: T.i, headline: R, subtext: '' })
        },
        P = k.a.create(function (e) {
          return {
            content: { marginTop: '-'.concat(e.spaces.space48), marginBottom: e.spaces.space32 },
            item: { paddingTop: e.spaces.space16 },
          }
        }),
        D = i.a.memo(j),
        B = n('mjJ+'),
        H = n('iY63'),
        N = n('ACHU'),
        U = n('zCf4'),
        z = d.a.gfca5254,
        V = d.a.d94edeb4,
        q = d.a.j560c8ea,
        W = d.a.ab8089ea,
        X = d.a.h63a5c3b,
        J = i.a.createElement(H.a, null),
        Q = i.a.createElement(N.a, null),
        G = { viewType: 'add' },
        Y = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            a = t.isTrue('c9s_rule_editing_enabled'),
            l = t.isTrue('c9s_rule_reordering_enabled'),
            s = e.community,
            u = e.history,
            m = e.match,
            d = s.id_str,
            g = s.role,
            f = s.rules,
            b = s.theme,
            v = m.url,
            _ = g === c.a.Admin,
            k =
              n && _
                ? i.a.createElement(h.a, {
                    accessibilityLabel: q,
                    behavioralEventContext: G,
                    icon: J,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            F = f.length > 1,
            I =
              l && _ && F
                ? i.a.createElement(h.a, {
                    accessibilityLabel: X,
                    icon: Q,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: W, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return i.a.createElement(B.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: Z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            T = i.a.createElement(M.a, { style: Z.rightControlStyle }, k, I),
            K = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            _ &&
              a &&
              ((K.displayType = S.a.Pivot),
              (K.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            i.a.createElement(
              U.d,
              null,
              i.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(v, '/') },
                i.a.createElement(
                  y.a,
                  null,
                  i.a.createElement(
                    C.a,
                    { communityId: d, rightControl: T, screenType: 'primaryDetail', title: z },
                    _ ? i.a.createElement(D, null) : null,
                    i.a.createElement(
                      S.b,
                      r()(
                        {
                          badgeStyle: E.badgeStyle,
                          explanation: V,
                          headerContainerStyle: E.headerContainerStyle,
                          ruleContainerStyle: E.ruleContainerStyle,
                          rules: f,
                          theme: b,
                        },
                        K,
                      ),
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(v, '/reorder') },
                i.a.createElement(w, { community: s, explanation: V, history: u }),
              ),
              i.a.createElement(U.b, null, i.a.createElement(p.a, { to: ''.concat(v, '/') })),
            )
          )
        },
        Z = k.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(Y)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'getTweetButtonLocationState', function () {
          return wr
        }),
        n.d(t, 'CommunityScreen', function () {
          return Tr
        })
      var a = n('yiKp'),
        r = n.n(a),
        l = (n('ho0z'), n('ERkP')),
        i = n.n(l),
        o = n('+Kfv'),
        c = n('es0u'),
        s = n('v6aA'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('R5kW'),
        y = function (e, t) {
          var n = Object(d.b)(e, t.communityId) || {},
            a = n.pending_join_request_count,
            r = void 0 === a ? 0 : a,
            l = n.tweet_case_count
          return { pending_join_request_count: r, tweet_case_count: void 0 === l ? 0 : l }
        },
        p = function (e, t) {
          return Object(d.c)(e, t.communityId)
        },
        g = Object(u.a)()
          .propsFromState(function () {
            return { count: y, fetchStatus: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: d.a,
            }
          }),
        f = n('kGix'),
        h = n('TnY3'),
        b = n('Ig1G'),
        v = n('3XMw'),
        _ = n.n(v),
        k = n('MWbm'),
        E = n('mjJ+'),
        C = n('/yvb'),
        S = n('Znyr'),
        F = n('rHpw'),
        I = n('zIWA'),
        w = n('SNyS'),
        T = n('Lsrn'),
        K = n('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var x = M,
        R = n('ACHU'),
        L = _.a.h6beb5fa,
        O = _.a.e3f04700,
        A = _.a.e2429f56,
        j = _.a.df15d5b7,
        P = _.a.e48fbb01,
        D = _.a.c8c6c4e9,
        B = _.a.h63a5c3b,
        H = _.a.dce5e1b3,
        N = _.a.c5d8c93d,
        U = { viewType: 'app_bar_button' }
      var z = F.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        V = Object(h.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            r = void 0 === a ? 0 : a,
            l = (e.history, e.userRole),
            o = i.a.useContext(s.a).featureSwitches,
            c = o.isTrue('c9s_settings_enabled'),
            u = o.isTrue('c9s_report_community_enabled'),
            m = o.isTrue('c9s_moderation_enabled') && t,
            d = c && t,
            y = u && !t,
            p = i.a.useCallback(
              function (e) {
                var t = []
                return (
                  m &&
                    t.push({
                      text: A,
                      subText: j({ count: r }),
                      Icon: I.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  y &&
                    t.push({
                      text: P,
                      Icon: I.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: D, Icon: w.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  i.a.createElement(E.a, { items: t, onCloseRequested: e })
                )
              },
              [n, r, m, y],
            ),
            g = t ? x : R.a,
            f = t ? (l === b.a.Admin ? H : N) : B
          return i.a.createElement(
            k.a,
            { style: z.root },
            i.a.createElement(C.a, {
              accessibilityLabel: f,
              behavioralEventContext: U,
              hoverLabel: { label: f },
              icon: i.a.createElement(g, null),
              link: d ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: d ? void 0 : p,
              size: 'large',
              type: 'primaryText',
            }),
            m && r > 0
              ? i.a.createElement(S.a, {
                  count: r,
                  style: z.menuControlBadge,
                  truncatedCountFormatter: L,
                  unreadCountLabel: O,
                  withBorder: !1,
                })
              : null,
          )
        })
      var q,
        W,
        X,
        J,
        Q,
        G = g(function (e) {
          var t = i.a.useContext(s.a).featureSwitches.isTrue('c9s_request_to_join_enabled'),
            n = e.canModerate,
            a = e.communityId,
            r = e.count,
            l = e.createLocalApiErrorHandler,
            o = e.fetchCommunityModerationData,
            c = e.fetchStatus,
            u = e.userRole,
            m = r.pending_join_request_count,
            d = r.tweet_case_count
          return (
            i.a.useEffect(
              function () {
                c === f.a.NONE && n && o(a).catch(l())
              },
              [l, o, c, a, n],
            ),
            i.a.createElement(V, { canModerate: n, communityId: a, count: t ? m + d : d, userRole: u })
          )
        }),
        Y = n('m3Bd'),
        Z = n.n(Y),
        $ = n('1Idg'),
        ee = n('eSoz'),
        te = n('G6rE'),
        ne = n('o3oN'),
        ae = n('/ekK'),
        re = ['loggedInUser'],
        le = function (e, t) {
          var n = $.c(e, t)
          return !n || Object(ae.a)(e, n, 'mod_education_flag')
        },
        ie = Object(u.a)()
          .propsFromState(function () {
            return {
              communityId: $.c,
              community: $.a,
              communityTheme: $.f,
              fetchStatus: $.b,
              hasShownModEducation: le,
              membershipsFetchStatus: ne.d,
              isCommunityMember: $.g,
              loggedInUser: te.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Z()(e, re)
            return r()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: ee.c.fetchOneIfNeeded,
              fetchCommunityMemberships: ne.a,
              setFlag: ae.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        oe = n('feu+'),
        ce = (n('yH/f'), n('WpDa')),
        se = n('ZNT5'),
        ue = (n('1t7P'), n('jQ/y'), n('jV+4')),
        me = n('t62R'),
        de = (n('enFi'), n('jAXQ')),
        ye = n.n(de),
        pe = function (e) {
          var t,
            a = ye()(void 0 !== q ? q : (q = n('pChJ')), e.community),
            r = i.a.useMemo(
              function () {
                return new Date(a.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [a.created_at],
            ),
            l = i.a.useMemo(
              function () {
                var e, t, n
                if ('User' === (null === (e = a.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return i.a.createElement(ue.a, {
                    isVerified:
                      (null === (t = a.creator_results.result.legacy) || void 0 === t ? void 0 : t.verified) || !1,
                    screenName:
                      (null === (n = a.creator_results.result.legacy) || void 0 === n ? void 0 : n.screen_name) || '',
                    withLink: !0,
                  })
              },
              [a],
            )
          return a.creator_results &&
            'User' === (null === (t = a.creator_results.result) || void 0 === t ? void 0 : t.__typename)
            ? i.a.createElement(
                me.b,
                { color: 'gray700' },
                i.a.createElement(_.a.I18NFormatMessage, { $i18n: 'a346641a', date: r }, l),
              )
            : null
        },
        ge = i.a.memo(pe),
        fe = n('s8G+'),
        he = n('6vad'),
        be = n('csss'),
        ve = n('h0NW'),
        _e = n('0yYu'),
        ke = n('cOhU'),
        Ee = n('DlMI'),
        Ce = n('Lxak'),
        Se = n('a5gf'),
        Fe = i.a.createElement(me.b, { weight: 'bold' }),
        Ie = _.a.af7c11a9,
        we = _.a.db1b9462,
        Te = _.a.ea49402d,
        Ke = i.a.createElement(_.a.I18NFormatMessage, { $i18n: 'he99cc29' }, i.a.cloneElement(Fe, null, _.a.gedb877c)),
        Me = _.a.fcef2921,
        xe = _.a.c93dd2c8,
        Re = function (e) {
          var t = ye()(void 0 !== W ? W : (W = n('1rMX')), e.community),
            a = Object(fe.a)('c9s_request_to_join_enabled'),
            r = i.a.useMemo(
              function () {
                var e,
                  n = function (e) {
                    return i.a.createElement(me.b, null, e)
                  },
                  r = i.a.createElement(ge, { community: t }),
                  l = t.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: Oe, label: n(we) },
                    CommunityOpenMembershipEducation: { decoration: Ae, label: Ke, description: Me },
                    CommunityRestrictedMembershipEducation: { decoration: Pe, label: Ke, description: xe },
                    CommunityVisibilityEducation: { decoration: Ae, label: n(Te) },
                    OriginationAttributionEducation: { decoration: je, label: r },
                  },
                  c = [o.CommunityMemberAllowedActions]
                return (
                  a
                    ? ('CommunityRestrictedMembershipSettings' === l &&
                        c.push(o.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === l && c.push(o.CommunityOpenMembershipEducation))
                    : c.push(o.CommunityVisibilityEducation),
                  'User' === (null === (e = t.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    c.push(o.OriginationAttributionEducation),
                  c
                )
              },
              [t, a],
            )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(he.b, { text: Ie }),
            Object(b.g)(t.role) && t.description ? i.a.createElement(be.a, { label: t.description }) : null,
            i.a.createElement(ve.a, { containerStyle: Le.containerStyle, items: r }),
            i.a.createElement(_e.a, null),
          )
        },
        Le = F.a.create(function (e) {
          return {
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            icon: {
              marginLeft: '6px',
              marginRight: e.spaces.space20,
              color: e.colors.gray700,
              height: e.spaces.space24,
              width: e.spaces.space24,
            },
          }
        }),
        Oe = i.a.createElement(ke.a, { style: Le.icon }),
        Ae = i.a.createElement(Ee.a, { style: Le.icon }),
        je = i.a.createElement(Ce.a, { style: Le.icon }),
        Pe = i.a.createElement(Se.a, { style: Le.icon }),
        De = i.a.memo(Re),
        Be = n('fTQJ'),
        He = (n('z84I'), n('PKbs')),
        Ne = n('X00g'),
        Ue = function (e) {
          var t = ye()(void 0 !== X ? X : (X = n('DCZs')), e),
            a = t.custom_theme,
            r = t.default_theme,
            l = null != a ? a : r
          return i.a.useMemo(
            function () {
              return Ne.a.getCommunityTheme(l)
            },
            [l],
          )
        },
        ze = Ue,
        Ve = n('rC8y'),
        qe = void 0 !== J ? J : (J = n('BX8b')),
        We = _.a.gfca5254,
        Xe = _.a.ffd9cfe6,
        Je = function (e) {
          var t = e.community,
            n = ye()(qe, t),
            a = n.rules,
            r = ze(n),
            l = i.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(he.b, { text: We }),
                i.a.createElement(He.b, {
                  badgeStyle: Qe.badgeStyle,
                  headerContainerStyle: [Qe.containerStyle, Qe.headingContainerStyle],
                  headerExplanationStyle: Qe.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: Qe.ruleContainerStyle,
                  rules: l,
                  theme: r,
                }),
                a.length > 5
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(Ve.a, { link: '/i/communities/'.concat(n.rest_id, '/rules'), text: Xe }),
                      ' ',
                      i.a.createElement(_e.a, null),
                    )
                  : null,
              )
        },
        Qe = F.a.create(function (e) {
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
        Ge = i.a.memo(Je),
        Ye = _.a.i9028824,
        Ze = _.a.cc683fb9,
        $e = function (e) {
          var t = ye()(void 0 !== Q ? Q : (Q = n('+BRr')), e.community),
            a = i.a.useMemo(
              function () {
                return (
                  (e = t.rest_id),
                  Object(se.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (t) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: ce.a,
                  })
                )
                var e
              },
              [t.rest_id],
            )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(De, { community: t }),
            i.a.createElement(Ge, { community: t }),
            i.a.createElement(Be.a, { loadingAccessibilityLabel: Ye, module: a, title: Ze }),
          )
        },
        et = i.a.memo($e),
        tt = (n('LW0h'), n('7x/C'), n('tVqn'), n('uFXj'), n('97Jx')),
        nt = n.n(tt),
        at = n('ddV6'),
        rt = n.n(at),
        lt = (n('7xRU'), n('KqXw'), n('WNMA'), n('egQk')),
        it = n('li/m'),
        ot = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || $.a(e, t)
        },
        ct = Object(u.a)()
          .propsFromState(function () {
            return { community: ot, fetchStatus: $.b, isCommunityMember: $.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: it.b,
              requestToJoin: ee.c.requestToJoin,
              fetchCommunityIfNeeded: ee.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        st = n('MDbM'),
        ut = n('jHSc'),
        mt = n('5FtR'),
        dt = _.a.h4fbfa57,
        yt = _.a.ea8cfb1d,
        pt = _.a.dc1b14a1,
        gt = { viewType: 'community' },
        ft = ct(function (e) {
          var t,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            l = e.fetchStatus,
            c = e.isCommunityMember,
            s = e.join,
            u = e.match,
            m = e.onDismiss,
            d = e.requestToJoin,
            y = u.params.communityId,
            p =
              'ViewerRequestRequired' ===
              (null == n || null === (t = n.actions.join_action_result) || void 0 === t ? void 0 : t.reason)
          i.a.useEffect(function () {
            y && !n && l !== st.a.LOADED && r(y).catch(a())
          })
          var g = i.a.useCallback(function (e) {
              return i.a.createElement(me.b, { size: 'title4', weight: 'bold' }, pt({ communityName: e }))
            }, []),
            f = p ? yt : dt,
            h = i.a.useCallback(
              function () {
                if (n) {
                  var e = n.id_str
                  ;(p ? d : s)(e).then(m).catch(a())
                }
              },
              [n, a, s, p, m, d],
            ),
            b = i.a.useCallback(
              function () {
                return i.a.createElement(C.a, { onPress: h, size: 'small', type: 'brandFilled' }, f)
              },
              [f, h],
            )
          if (n) {
            var v = n.name,
              _ = n.rules,
              k = n.theme
            return _ && _.length && !c
              ? i.a.createElement(
                  o.a,
                  { behavioralEventContext: gt },
                  i.a.createElement(
                    ut.b,
                    {
                      behavioralEventViewType: 'rules',
                      onBackClick: m,
                      rightControl: b(),
                      title: Object(lt.a)({ communityName: v }),
                    },
                    i.a.createElement(He.b, {
                      badgeStyle: ht.badgeStyle,
                      headerContainerStyle: ht.containerStyle,
                      headerExplanationStyle: ht.headerExplanationStyle,
                      heading: g(v),
                      rules: _,
                      theme: k,
                    }),
                  ),
                )
              : i.a.createElement(mt.a, { to: '/i/communities/'.concat(n.id_str) })
          }
          return l === st.a.LOADED ? i.a.createElement(mt.a, { to: '/' }) : null
        }),
        ht = F.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space16 },
            headerExplanationStyle: { marginTop: e.spaces.space8 },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        bt = ['loggedInUser'],
        vt = Object(u.a)()
          .propsFromState(function () {
            return { community: $.a, loggedInUser: te.e.selectLoggedInUser, joinActionResultType: $.h }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Z()(e, bt)
            return r()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: it.b,
              requestToJoin: ee.c.requestToJoin,
              leave: it.c,
            }
          }),
        _t = (n('ssJ/'), n('X8FW')),
        kt = n('cHvH'),
        Et = n('sgih'),
        Ct = i.a.memo(function (e) {
          var t = Object(kt.b)().windowWidth,
            n = e.children
          return t > F.a.theme.breakpoints.medium
            ? i.a.createElement(_t.b, { modalSize: _t.a.fixed }, n)
            : i.a.createElement(Et.a, { type: 'full' }, n)
        }),
        St = n('CGyZ'),
        Ft = _.a.fad95333,
        It = function (e) {
          var t = e.offendingRule
          return i.a.createElement(
            k.a,
            null,
            t
              ? i.a.createElement(
                  k.a,
                  { style: wt.offendingRule },
                  (function (e) {
                    return i.a.createElement(
                      _.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      i.a.createElement(me.b, { weight: 'bold' }, _.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            i.a.createElement(me.b, null, Ft),
          )
        },
        wt = F.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        Tt = _.a.hafa07f2,
        Kt = _.a.fa94c9da,
        Mt = _.a.c15bee31,
        xt = _.a.i859676b,
        Rt = i.a.createElement(
          _.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          i.a.createElement(me.b, { link: '/settings/audience_and_tagging' }, _.a.e77dfaf0),
        ),
        Lt = _.a.fc2a5c92,
        Ot = _.a.bf7bdb60,
        At = _.a.h27d695f,
        jt = _.a.b02360f5,
        Pt = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        Dt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        Bt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Ht,
        Nt,
        Ut,
        zt = n('zCf4'),
        Vt = ['community', 'communityId', 'match'],
        qt = _.a.e6057013,
        Wt = _.a.b533478f,
        Xt = { follow: _.a.b171d7c4, following: _.a.aa7ae3f6, unfollow: _.a.bb1d57b6 },
        Jt = _.a.j24c37b2,
        Qt = function (e) {
          var t = i.a.useState(void 0),
            n = rt()(t, 2),
            a = n[0],
            l = n[1],
            o = i.a.useState(!1),
            c = rt()(o, 2),
            s = c[0],
            u = c[1],
            m = { history: Object(zt.f)(), location: Object(zt.g)(), match: Object(zt.i)() },
            d = Object(fe.a)('c9s_request_to_join_enabled'),
            y = e.community,
            p = e.createLocalApiErrorHandler,
            g = e.isProtectedUser,
            f = e.join,
            h = e.leave,
            v = e.requestToJoin,
            _ = y.actions,
            E = _.join_action_result,
            S = _.leave_action_result,
            F = y.id_str,
            I = y.name,
            w = y.role,
            T = Object(b.g)(w),
            K = E.reason === Bt.ViewerJoinRequestRequired && d,
            M = E.reason === Bt.ViewerRequestPending && d,
            x = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !T } },
            R = i.a.useCallback(
              function () {
                var e = y.rules,
                  t = y.viewerViolatedRule,
                  n = (function (e, t, n, a) {
                    var r = e.__typename,
                      l = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      c = function (e) {
                        return { canAction: !1, message: e }
                      },
                      s = c({ headline: Lt, text: Ot })
                    switch (r) {
                      case Pt.joinAvailable:
                        return o()
                      case Pt.joinUnavailable:
                        switch (l) {
                          case Bt.ViewerIsRemoved:
                            return c({
                              headline: Mt,
                              text: i.a.createElement(It, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case Bt.ViewerNotInvited:
                            return c({ headline: Tt, text: Kt })
                          case Bt.ViewerIsProtected:
                            return t ? c({ headline: xt, text: Rt }) : o()
                          case Bt.ViewerJoinRequestRequired:
                            return a ? o() : s
                          default:
                            return s
                        }
                      default:
                        return s
                    }
                  })(E, g, t, d),
                  a = n.canAction,
                  r = n.message
                !a && r && l(r), a && (e && e.length > 0 ? u(!0) : K ? v(F).catch(p({})) : f(F).catch(p({})))
              },
              [y, F, p, g, d, f, K, E, v],
            ),
            L = i.a.useCallback(
              function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      a = e.reason,
                      r = function (e) {
                        return { canAction: !1, message: e }
                      },
                      l = r({ headline: Lt, text: Ot })
                    switch (n) {
                      case Pt.leaveAvailable:
                        return { canAction: !0, message: t }
                      case Pt.leaveUnavailable:
                        switch (a) {
                          case Dt.ViewerIsSoleAdmin:
                            return r({ headline: At, text: jt })
                          default:
                            return l
                        }
                      default:
                        return l
                    }
                  })(S),
                  t = e.canAction,
                  n = e.message
                !t && n && l(n), t && h(F).catch(p({}))
              },
              [F, p, h, S],
            ),
            O = i.a.useCallback(function () {
              l(void 0)
            }, []),
            A = i.a.useCallback(function () {
              u(!1)
            }, []),
            j = i.a.useMemo(
              function () {
                return K ? r()(r()({}, Xt), {}, { follow: qt }) : Xt
              },
              [K],
            )
          return i.a.createElement(
            k.a,
            { style: Gt.button },
            s ? i.a.createElement(Ct, null, i.a.createElement(ft, nt()({ communityId: F, onDismiss: A }, m))) : null,
            M
              ? i.a.createElement(C.a, { disabled: !0, type: 'onMediaOutlined' }, Wt)
              : i.a.createElement(St.a, {
                  behavioralEventContext: x,
                  buttonText: j,
                  isFollowing: T,
                  name: I,
                  onFollow: R,
                  onUnfollow: L,
                  type: 'community',
                }),
            a
              ? i.a.createElement(oe.a, {
                  actionLabel: Jt,
                  graphicDisplayMode: 'none',
                  headline: a.headline,
                  onAction: O,
                  onClose: O,
                  subtext: a.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        Gt = F.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Yt = vt(function (e) {
          var t = e.community,
            n = (e.communityId, e.match, Z()(e, Vt))
          return t ? i.a.createElement(Qt, nt()({ community: t }, n)) : null
        }),
        Zt = n('YeIG'),
        $t = n('cHTv'),
        en = function (e) {
          var t = ye()(void 0 !== Ht ? Ht : (Ht = n('dMLx')), e)
          return i.a.useMemo(
            function () {
              return (
                (function (e) {
                  var t,
                    n,
                    a = null == e || null === (t = e.custom_banner_media) || void 0 === t ? void 0 : t.media_info
                  if (
                    null != a &&
                    a.original_img_url &&
                    null != a &&
                    a.original_img_height &&
                    null != a &&
                    a.original_img_width &&
                    null != a &&
                    null !== (n = a.color_info) &&
                    void 0 !== n &&
                    n.palette
                  ) {
                    var r = a.color_info.palette
                    return {
                      url: a.original_img_url,
                      height: a.original_img_height,
                      width: a.original_img_width,
                      palette: r,
                    }
                  }
                })(t) ||
                (function (e) {
                  var t,
                    n = null == e || null === (t = e.default_banner_media) || void 0 === t ? void 0 : t.media_info
                  if (
                    null != n &&
                    n.original_img_url &&
                    null != n &&
                    n.original_img_height &&
                    null != n &&
                    n.original_img_width
                  )
                    return { url: n.original_img_url, height: n.original_img_height, width: n.original_img_width }
                })(t) ||
                $t.b
              )
            },
            [t],
          )
        },
        tn = n('TIdA'),
        nn = n('A91F'),
        an = n('9Xij'),
        rn = void 0 !== Nt ? Nt : (Nt = n('fK4d')),
        ln = function (e) {
          var t = ye()(rn, e.community),
            n = en(t),
            a = F.a.theme.aspectRatios.communityBanner
          return n && !Object(Zt.a)(n)
            ? i.a.createElement(
                k.a,
                null,
                i.a.createElement(tn.a, {
                  accessibilityLabel: '',
                  aspectMode: nn.a.exact(a),
                  backgroundColor: F.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : i.a.createElement(an.a, { ratio: a }, i.a.createElement(k.a, { style: on.placeholderImageContainer }))
        },
        on = F.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        cn = i.a.memo(ln),
        sn = n('K1iM'),
        un = n.n(sn),
        mn = (n('2G9S'), n('n4Eu')),
        dn = { red: 0, green: 0, blue: 0 },
        yn = '10px',
        pn = F.a.create(function (e) {
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
        gn = function (e) {
          var t = e.children,
            a = e.community,
            r = ye()(void 0 !== Ut ? Ut : (Ut = n('OBBW')), a),
            l = ze(r),
            o = en(r).palette,
            c = []
          if (o) {
            var s,
              u = un()(o)
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var m = s.value
                c.push({ percentage: m.percentage, rgb: { blue: m.rgb.blue, green: m.rgb.green, red: m.rgb.red } })
              }
            } catch (y) {
              u.e(y)
            } finally {
              u.f()
            }
          }
          var d = Object(fe.a)('c9s_ui_colors_enabled_rweb')
          return i.a.createElement(
            k.a,
            null,
            i.a.createElement(k.a, { style: pn.descriptionContainer }, t),
            i.a.createElement(k.a, { style: [F.a.absoluteFill, pn.backgroundColorWhite] }),
            i.a.createElement(k.a, {
              style: [
                F.a.absoluteFill,
                pn.backgroundColor,
                (function (e, t) {
                  if (d) return Ne.a.getCommunityGradientStyle(t, yn)
                  var n = e && mn.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : dn,
                    r = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(r, ' ')
                      .concat(yn, ', ')
                      .concat(l, ' ')
                      .concat(yn, ' 100%)'),
                  }
                })(c, l),
              ],
            }),
          )
        },
        fn = n('ogGF'),
        hn = n('CaKu'),
        bn = n('1YZw'),
        vn = Object(u.a)().propsFromActions(function () {
          return { addToast: bn.b }
        }),
        _n = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              i.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      _n.metadata = { width: 24, height: 24 }
      var kn,
        En,
        Cn,
        Sn,
        Fn,
        In = _n,
        wn = n('I/9y'),
        Tn = n('pwey'),
        Kn = _.a.bec3b8f9,
        Mn = { viewType: 'share_community' },
        xn = _.a.f88553c8,
        Rn = { viewType: 'copy_link' },
        Ln = { viewType: 'invite_members' },
        On = _.a.b139b549,
        An = _.a.e05c00b4,
        jn = i.a.createElement(In, null),
        Pn = F.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        Dn = vn(function (e) {
          var t = ye()(void 0 !== kn ? kn : (kn = n('X/n0')), e.community),
            a = e.addToast,
            r = t.rest_id,
            l = t.role,
            o = Object(b.g)(l),
            c = i.a.useCallback(
              function (e) {
                hn.a.setString('https://twitter.com/i/communities/'.concat(r)), e(), a({ text: xn })
              },
              [a, r],
            ),
            s = i.a.useMemo(
              function () {
                return function (e) {
                  var t = []
                  return (
                    t.push({ behavioralEventContext: Rn, text: An, Icon: wn.a, onClick: c }),
                    o &&
                      t.push({
                        behavioralEventContext: Ln,
                        text: On,
                        Icon: Tn.a,
                        link: '/i/communities/'.concat(r, '/invite'),
                      }),
                    i.a.createElement(E.a, { items: t, onCloseRequested: e })
                  )
                }
              },
              [o, r, c],
            )
          return i.a.createElement(C.a, {
            accessibilityLabel: Kn,
            behavioralEventContext: Mn,
            icon: jn,
            renderMenu: s,
            style: Pn.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        Bn = i.a.memo(Dn),
        Hn = _.a.hb9400db,
        Nn = function (e) {
          var t = e.community,
            a = ye()(void 0 !== En ? En : (En = n('ldL/')), t),
            r = a.description,
            l = a.role,
            o = i.a.useState(!1),
            c = rt()(o, 2),
            s = c[0],
            u = c[1],
            m = i.a.useState(!1),
            d = rt()(m, 2),
            y = d[0],
            p = d[1],
            g = i.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), u(!s)
              },
              [s],
            )
          return !r || Object(b.g)(l)
            ? null
            : i.a.createElement(
                k.a,
                { style: Un.description },
                i.a.createElement(me.b, { color: 'white', getTextOverflow: p, numberOfLines: s ? void 0 : 2 }, r),
                !s && y ? i.a.createElement(me.b, { color: 'white', onPress: g, weight: 'bold' }, Hn) : null,
              )
        },
        Un = F.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        zn = i.a.memo(Nn),
        Vn = n('MtXG'),
        qn = _.a.d58baa7e,
        Wn = function (e) {
          var t = e.community,
            a = ye()(void 0 !== Cn ? Cn : (Cn = n('WuQQ')), t).member_count,
            r = void 0 === a ? 0 : a,
            l = qn(r)
          return i.a.createElement(
            Vn.a.Group,
            null,
            i.a.createElement(
              Vn.a,
              { onMedia: !0 },
              i.a.createElement(
                me.b,
                { color: 'white' },
                i.a.createElement(
                  _.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  i.a.createElement(Vn.a.Value, null, _.a.ibd0106d({ formattedCount: l })),
                  i.a.createElement(Vn.a.Label, null, _.a.cface2d0({ count: r })),
                ),
              ),
            ),
          )
        },
        Xn = n('cm6r'),
        Jn = n('MAI/'),
        Qn = n('I4+6'),
        Gn = Qn.a.generate({
          backgroundColor: F.a.theme.colors.transparent,
          color: F.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Yn = F.a.create(function (e) {
          return {
            description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
            membersContainer: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              left: -e.spacesPx.space4,
              top: -e.spacesPx.space2,
              padding: e.spaces.space4,
              borderRadius: e.borderRadii.small,
            },
            rightSpace: { marginRight: e.spaces.space12 },
          }
        }),
        Zn = function (e) {
          var t = e.community,
            a = ye()(void 0 !== Sn ? Sn : (Sn = n('Eh7u')), t),
            r = Object(fe.a)('c9s_ui_colors_enabled_rweb'),
            l = a.members_facepile_results,
            o = a.rest_id,
            c = (function (e) {
              var t,
                n = [],
                a = un()(e)
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var r = t.value.result
                  if ('User' === (null == r ? void 0 : r.__typename)) {
                    var l,
                      i = null === (l = r.legacy) || void 0 === l ? void 0 : l.profile_image_url_https
                    i && n.push(i)
                  }
                }
              } catch (o) {
                a.e(o)
              } finally {
                a.f()
              }
              return n
            })(l),
            s = Ue(a),
            u = r ? Ne.a.getCommunityBackgroundColorName(s) : void 0
          return i.a.createElement(
            Xn.a,
            { interactiveStyles: Gn, link: '/i/communities/'.concat(o, '/members'), style: Yn.membersContainer },
            c.length > 0
              ? i.a.createElement(Jn.a, {
                  borderColor: u,
                  style: Yn.rightSpace,
                  userAvatarSize: 'large',
                  userAvatarUrls: c,
                })
              : null,
            i.a.createElement(Wn, { community: a }),
          )
        },
        $n = n('yoO3'),
        ea = n('k/OQ'),
        ta = _.a.a0e3ece4,
        na = _.a.ha8209bb,
        aa = _.a.d601fc2f,
        ra = _.a.b721eb37,
        la = { viewType: 'description' },
        ia = { viewType: 'facepiles_with_count' },
        oa = function (e) {
          var t = ye()(void 0 !== Fn ? Fn : (Fn = n('+BRT')), e.community),
            a = t.rest_id,
            r = Object(fe.a)('c9s_participation_enabled'),
            l = Object(fe.a)('c9s_timelines_ranking_enabled'),
            c = Object(fe.a)('c9s_share_community_enabled'),
            s = Object(zt.i)(),
            u = i.a.useMemo(
              function () {
                var e = [
                  { to: '/i/communities/'.concat(a), label: na, key: na },
                  { to: '/i/communities/'.concat(a, '/latest'), label: aa, key: aa },
                  { to: '/i/communities/'.concat(a, '/about'), label: ra, key: ra },
                ]
                return i.a.createElement(ea.a, {
                  accessibilityLabel: ta,
                  links: l
                    ? e
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== aa
                        })
                      })(e),
                })
              },
              [a, l],
            )
          return i.a.createElement(
            $n.a,
            { behavioralEventViewType: 'timeline' },
            i.a.createElement(
              k.a,
              { style: ca.container },
              i.a.createElement(
                k.a,
                null,
                i.a.createElement(cn, { community: t }),
                i.a.createElement(
                  o.a,
                  { behavioralEventContext: la },
                  i.a.createElement(
                    gn,
                    { community: t },
                    i.a.createElement(
                      me.b,
                      { color: 'white', size: 'title2', style: ca.name, weight: 'bold' },
                      t.name.trim(),
                    ),
                    i.a.createElement(zn, { community: t }),
                    i.a.createElement(
                      o.a,
                      { behavioralEventContext: ia },
                      i.a.createElement(
                        k.a,
                        { style: ca.bottomContainer },
                        i.a.createElement(Zn, { community: t }),
                        i.a.createElement(
                          k.a,
                          { style: ca.buttons },
                          c
                            ? i.a.createElement(Bn, { community: t })
                            : i.a.createElement(fn.a, {
                                community: t,
                                style: ca.inviteButton,
                                type: 'onMediaOutlined',
                              }),
                          r ? i.a.createElement(Yt, { communityId: a, match: s }) : null,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              u,
            ),
          )
        },
        ca = F.a.create(function (e) {
          return {
            name: { flexDirection: 'column', justifyContent: 'left', marginBottom: e.spaces.space8 },
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            bottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            buttons: { flexDirection: 'row', height: 'fit-content' },
            inviteButton: { marginRight: e.spaces.space8 },
          }
        }),
        sa = i.a.memo(oa),
        ua = n('/de5')
      function ma() {
        var e = Object(zt.f)(),
          t = Object(zt.g)(),
          n = Object(zt.i)()
        return i.a.createElement(ua.b, { history: e, location: t, match: n })
      }
      var da = n('hqKg'),
        ya = n('8Lfv'),
        pa = n('LI/a'),
        ga = function (e, t) {
          return t.communityId
        },
        fa = function (e, t) {
          var n = ee.c.select(e, t.communityId)
          return Object(b.g)(null == n ? void 0 : n.role)
        },
        ha = Object(u.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: fa,
              rankedTweetsModule: Object(da.createSelector)(ga, function (e) {
                return Object(pa.b)(e)
              }),
              tweetsModule: Object(da.createSelector)(ga, function (e) {
                return Object(pa.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: ya.a,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        ba = n('FIs5'),
        va = n('EUHl'),
        _a = n('7BdX'),
        ka = n('7JQg'),
        Ea = _.a.c18e3a3e,
        Ca = _.a.d68146c0,
        Sa = _.a.h5245afa,
        Fa = _.a.f05dbeff,
        Ia = { page: 'community', section: 'home' },
        wa = { page: 'community', section: 'latest' },
        Ta = { page: 'community', section: 'tweets' },
        Ka = ha(function (e) {
          var t = i.a.useContext(s.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            r = e.isCommunityMember,
            l = e.rankedTweetsModule,
            o = e.tweetsModule,
            c = e.type === gr.Home ? { module: l, scribeNamespace: Ia } : { module: o, scribeNamespace: wa },
            u = t ? c : { module: o, scribeNamespace: Ta },
            m = u.module,
            d = u.scribeNamespace
          i.a.useEffect(
            function () {
              n(m).catch(a())
            },
            [n, a, r, m],
          )
          var y = i.a.useCallback(function () {
            return i.a.createElement(ba.a, { buttonType: 'brandOutlined', header: Ea, message: Ca })
          }, [])
          return i.a.createElement(
            ka.c,
            { namespace: d },
            i.a.createElement(
              $n.a,
              { behavioralEventViewType: 'tweets' },
              i.a.createElement(Be.a, {
                loadingAccessibilityLabel: Fa,
                module: m,
                newTweetsPillMode: va.a.CLIENT,
                prerollDisplayLocation: _a.c.OTHER,
                refreshControl: null,
                renderEmptyState: y,
                title: Sa,
              }),
            ),
          )
        }),
        Ma = n('mw9i'),
        xa =
          (n('MvUL'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(K.a)(
              'svg',
              r()(
                r()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [T.a.root, e.style],
                  viewBox: '0 0 24 24',
                },
              ),
              i.a.createElement(
                'g',
                null,
                i.a.createElement('path', {
                  d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
                }),
                i.a.createElement('path', {
                  d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
                }),
              ),
            )
          })
      xa.metadata = { width: 24, height: 24 }
      var Ra,
        La,
        Oa = xa,
        Aa = n('wpLu'),
        ja = _.a.bf359e0d,
        Pa = _.a.e8fcdd3a,
        Da = _.a.b37d580e,
        Ba = _.a.cafca4b2,
        Ha = _.a.ea3b38fa,
        Na = _.a.jd667130,
        Ua = _.a.ca7eeabf,
        za = _.a.acae4034,
        Va = _.a.e2186ee2,
        qa = _.a.j24c37b2,
        Wa = function (e) {
          var t = ye()(void 0 !== Ra ? Ra : (Ra = n('2rr8')), e.community),
            a = Object(zt.f)(),
            r = i.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(t.rest_id, '/'))
              },
              [a, t.rest_id],
            ),
            l = i.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: Xa.rulesContainer },
              t.rules.map(function (e) {
                return i.a.createElement(
                  me.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Xa.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === t.access,
            c = o ? Ha : Da,
            s = o ? Na : Ba
          return i.a.createElement(
            oe.a,
            {
              actionLabel: qa,
              graphicDisplayMode: 'none',
              headline: ja,
              isFullHeightOnMobile: !0,
              onAction: r,
              subtext: Pa,
            },
            i.a.createElement(
              k.a,
              { style: Xa.infoItemsContainer },
              i.a.createElement(ve.a, {
                containerStyle: Xa.itemContainer,
                items: [
                  { label: c, description: s, decoration: i.a.createElement(Oa, { style: Xa.decorationContainer }) },
                  { label: Ua, decoration: i.a.createElement(Aa.a, { style: Xa.decorationContainer }), description: l },
                  { label: za, description: Va, decoration: i.a.createElement(x, { style: Xa.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        Xa = F.a.create(function (e) {
          return {
            infoItemsContainer: { paddingBottom: e.spaces.space32 },
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
        Ja = i.a.memo(Wa),
        Qa = n('dwig'),
        Ga = n('0+qk'),
        Ya = n('L/9f'),
        Za = n('3G7m'),
        $a =
          (n('FtFR'),
          n('hBvt'),
          Object(u.a)()
            .propsFromState(function () {
              return { flags: ae.b }
            })
            .propsFromActions(function () {
              return { setFlag: ae.c }
            })),
        er = n('hOZg'),
        tr = n('WtWS'),
        nr = n('0ULw'),
        ar = _.a.c66b37f9,
        rr = _.a.g2768d0e,
        lr = _.a.b192b58b,
        ir = _.a.gd30278f,
        or = _.a.cbdddb09,
        cr = _.a.h5890b1a,
        sr = [
          {
            flag: 'setup_clicked_rules',
            title: _.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: _.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: _.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: _.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(ir, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        ur = i.a.memo(function (e) {
          var t = e.communityId,
            n = e.flags,
            a = e.setFlag,
            r = i.a.useContext(s.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            l = Object(zt.f)(),
            o = i.a.useCallback(
              function () {
                a(t, 'setup_show_checklist', !1)
              },
              [t, a],
            )
          if (!n.setup_show_checklist || !r) return null
          var c = function (e) {
              a(t, e.flag, !0).then(function () {
                l.push(e.link(t))
              })
            },
            u = function (e, t) {
              13 === t.keyCode && c(e)
            }
          return i.a.createElement(
            k.a,
            { style: mr.wrapper },
            i.a.createElement(
              k.a,
              { style: mr.header },
              i.a.createElement(me.b, { size: 'title3', weight: 'bold' }, ar),
              i.a.createElement(C.a, {
                accessibilityLabel: lr,
                icon: i.a.createElement(er.a, { style: mr.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: mr.dismiss,
                type: 'brandText',
              }),
            ),
            i.a.createElement(me.b, { style: mr.subtext }, rr),
            i.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: mr.list },
              sr.map(function (e) {
                var t = Boolean(n[e.flag])
                return i.a.createElement(
                  k.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : c.bind(null, e),
                    onKeyPress: t ? void 0 : u.bind(null, e),
                    style: [mr.entry, t ? mr.completedEntry : mr.uncompletedEntry],
                  },
                  i.a.createElement(me.b, { weight: 'bold' }, e.title),
                  t
                    ? i.a.createElement(tr.a, { accessibilityLabel: or, style: mr.iconCompleted })
                    : i.a.createElement(nr.a, { accessibilityLabel: cr, style: mr.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        mr = F.a.create(function (e) {
          return {
            wrapper: {
              padding: e.spaces.space32,
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.gray200,
              color: e.colors.text,
            },
            header: { display: 'flex', flexDirection: 'row', paddingBottom: e.spaces.space4, alignItems: 'start' },
            dismiss: { marginLeft: 'auto' },
            subtext: { color: e.colors.gray700, paddingBottom: e.spaces.space16 },
            close: { color: e.colors.text },
            list: { gap: e.spaces.space16 },
            entry: { display: 'flex', flexDirection: 'row', gap: e.spaces.space8, listStylePosition: 'inside' },
            completedEntry: {},
            uncompletedEntry: { cursor: 'pointer' },
            iconCompleted: { marginLeft: 'auto', color: e.colors.green500 },
            iconUncompleted: { marginLeft: 'auto', color: e.colors.gray300 },
          }
        }),
        dr = $a(ur),
        yr = n('IAZG'),
        pr = n('QRqA'),
        gr = Object.freeze({ Home: 'home', Latest: 'latest' }),
        fr = void 0 !== La ? La : (La = n('R0yc')),
        hr = function (e) {
          var t = e.communityId,
            n = e.composeOptions,
            a = Object(yr.a)(fr, { communityId: t }).community,
            r = Object(fe.a)('c9s_participation_enabled'),
            l = Object(zt.f)(),
            o = Object(zt.g)(),
            c = Object(zt.i)(),
            s = a.role === b.a.Admin && void 0 !== o.query.show_creation_summary,
            u = Object(b.g)(a.role) && r,
            m = ze(a),
            d = i.a.useMemo(
              function () {
                return { canJoinCommunity: 'CommunityJoinAction' === a.actions.join_action_result.__typename, theme: m }
              },
              [m, a.actions.join_action_result],
            ),
            y = i.a.useMemo(
              function () {
                return u
                  ? i.a.createElement(Ga.a, {
                      getLocationState: function () {
                        return n
                      },
                      history: l,
                    })
                  : null
              },
              [u, l, n],
            )
          return i.a.createElement(
            Qa.a,
            { component: Ma.a, fab: y },
            i.a.createElement(pr.a, { forSingleCommunity: d }),
            s && i.a.createElement(Ja, { community: a }),
            i.a.createElement(sa, { community: a }),
            i.a.createElement(
              zt.d,
              null,
              i.a.createElement(
                zt.b,
                { exact: !0, path: '/i/communities/'.concat(t, '/') },
                i.a.createElement(dr, { communityId: t }),
                i.a.createElement(Ka, { communityId: t, location: o, match: c, type: gr.Home }),
              ),
              i.a.createElement(
                zt.b,
                { path: '/i/communities/'.concat(t, '/latest') },
                i.a.createElement(dr, { communityId: t }),
                i.a.createElement(Ka, { communityId: t, location: o, match: c, type: gr.Latest }),
              ),
              i.a.createElement(
                zt.b,
                { exact: !0, path: '/i/communities/'.concat(t, '/about') },
                i.a.createElement(et, { community: a }),
              ),
            ),
          )
        },
        br = { page: 'community', section: 'primaryContent' },
        vr = {
          type: 'CustomRetry',
          content: function () {
            return i.a.createElement(ma, null)
          },
        },
        _r = function (e) {
          return i.a.createElement(
            ka.c,
            { namespace: br },
            i.a.createElement(
              $n.a,
              { behavioralEventViewType: 'Community' },
              i.a.createElement(
                Ya.a,
                { errorConfig: { context: 'CommunityScreen' }, fallback: vr },
                i.a.createElement(Za.a, null, i.a.createElement(hr, e)),
              ),
            ),
          )
        },
        kr = n('VS6U'),
        Er = { type: 'serversideContextKey', serversideContextType: 'community' },
        Cr = _.a.a7c2e06c,
        Sr = _.a.j24c37b2,
        Fr = _.a.a94092a1,
        Ir = _.a.i1fda797,
        wr = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        Tr = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            s = e.fetchCommunityMemberships,
            u = e.hasShownModEducation,
            m = e.history,
            d = e.isCommunityMember,
            y = e.membershipsFetchStatus,
            p = e.screenName,
            g = e.setFlag,
            h = Object(fe.a)('c9s_participation_enabled'),
            v = Object(fe.a)('c9s_edit_moderators_enabled'),
            _ = i.a.useCallback(
              function () {
                n && l(n).catch(a({})), y === f.a.NONE && s().catch(a())
              },
              [y, l, n, s, a],
            )
          i.a.useEffect(
            function () {
              _()
            },
            [_],
          )
          var k = i.a.useCallback(
              function () {
                n && g(n, 'mod_education_flag', !0)
              },
              [n, g],
            ),
            E = i.a.useMemo(
              function () {
                return { clientEntity: r()(r()({}, Er), {}, { serversideContextId: n || '' }), viewType: 'community' }
              },
              [n],
            ),
            C = i.a.useMemo(
              function () {
                return wr(n)
              },
              [n],
            ),
            S = null == t ? void 0 : t.name,
            F = null == t ? void 0 : t.role,
            I = !!d && h,
            w = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
            T = v && F === b.a.Moderator && !u,
            K = i.a.useMemo(
              function () {
                return i.a.createElement(G, { canModerate: Object(b.c)(F), communityId: n || '', userRole: F })
              },
              [F, n],
            ),
            M = i.a.useMemo(
              function () {
                return i.a.createElement(c.a, { communityId: n || '', withCommunityRules: w })
              },
              [n, w],
            ),
            x = i.a.useMemo(
              function () {
                return i.a.createElement(_r, { communityId: n || '', composeOptions: C })
              },
              [n, C],
            )
          return n
            ? i.a.createElement(
                o.a,
                { behavioralEventContext: E },
                i.a.createElement(kr.a, {
                  backLocation: p && '/'.concat(p, '/communities'),
                  composeOptions: C,
                  documentTitle: S ? Cr({ communityName: S }) : '',
                  history: m,
                  primaryContent: x,
                  rightControl: K,
                  sidebarContent: M,
                  title: S || null,
                  withTweetButton: I,
                }),
                T
                  ? i.a.createElement(oe.a, {
                      actionLabel: Sr,
                      graphicDisplayMode: 'none',
                      headline: Fr,
                      onAction: k,
                      onClose: k,
                      subtext: Ir,
                      withCloseButton: !0,
                    })
                  : null,
              )
            : null
        },
        Kr = ie(Tr)
      t.default = Kr
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = n('ERkP'),
        i = n.n(l),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        p = u.a.e988475f,
        g = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityPurpose,
            l = e.onChange,
            s = i.a.useState(void 0),
            u = r()(s, 2),
            g = u[0],
            f = u[1],
            h = i.a.useState(!1),
            b = r()(h, 2),
            v = b[0],
            _ = b[1],
            k = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            E = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.h)(t, 3, k)
                n && f(p({ minCharacterCount: 3, maxCharacterCount: k })), _(n), l(t, n)
              },
              [k, f, l],
            )
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: g,
            helperText: y,
            invalid: v,
            label: d,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: E,
            spellCheck: 'false',
            validLength: k,
            value: a,
          })
        }
    },
    U3Z9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateCommunityModal', function () {
          return A
        })
      var a = n('yiKp'),
        r = n.n(a),
        l = n('ddV6'),
        i = n.n(l),
        o = (n('KqXw'), n('MvUL'), n('ERkP')),
        c = n.n(o),
        s = n('+Kfv'),
        u = n('ROT1'),
        m = n('U0Qk'),
        d = n('eSoz'),
        y = n('RqPI'),
        p = n('rxPX'),
        g = Object(p.a)()
          .propsFromState(function () {
            return { communitiesActions: y.f }
          })
          .propsFromActions(function () {
            return { createCommunity: d.b }
          }),
        f = n('jHSc'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('0weh'),
        _ = n('5FtR'),
        k = n('s8G+'),
        E = n('MWbm'),
        C = n('/yvb'),
        S = n('4zmP'),
        F = n('t62R'),
        I = n('rHpw'),
        w = n('I/KZ'),
        T = b.a.i6e7e298,
        K = b.a.a226497c,
        M = b.a.c9d56b71,
        x = b.a.fc2a5c92,
        R = b.a.c1ad5a11,
        L = b.a.f713fbd1,
        O = { viewType: 'community' },
        A = c.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            l = Object(k.a)('c9s_community_creation_form_membership_type_enabled'),
            o = c.a.useState(!0),
            d = i()(o, 2),
            y = d[0],
            p = d[1],
            g = c.a.useState(!1),
            h = i()(g, 2),
            b = h[0],
            I = h[1],
            A = y || b,
            P = c.a.useState(''),
            D = i()(P, 2),
            B = D[0],
            H = D[1],
            N = c.a.useState(''),
            U = i()(N, 2),
            z = U[0],
            V = U[1],
            q = c.a.useState(null),
            W = i()(q, 2),
            X = W[0],
            J = W[1],
            Q = c.a.useCallback(function (e, t) {
              H(e), p(t)
            }, []),
            G = c.a.useCallback(function (e, t) {
              V(e), 0 === e.length ? I(!1) : I(t)
            }, []),
            Y = Object(w.e)(),
            Z = i()(Y, 2),
            $ = Z[0],
            ee = Z[1],
            te = c.a.useCallback(
              function () {
                return l ? r()({ description: z }, Object(w.c)($)) : { description: z }
              },
              [z, l, $],
            ),
            ne = c.a.useCallback(
              function () {
                J(null),
                  n(B, te())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && a.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && J(e)
                    })
                    .catch(function (e) {
                      J({ error: 'GraphQL error', reason: e })
                    })
              },
              [B, n, te, a],
            )
          if (null == t || !t.create) return c.a.createElement(_.a, { to: '/home' })
          var ae = c.a.createElement(C.a, { disabled: A, onClick: ne, size: 'small', type: 'brandFilled' }, T),
            re = X
              ? c.a.createElement(
                  E.a,
                  { style: j.error },
                  c.a.createElement(S.a, { Icon: v.a, headline: x, text: R, type: 'danger' }),
                )
              : void 0
          return c.a.createElement(
            s.a,
            { behavioralEventContext: O },
            c.a.createElement(
              f.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: j.root,
                history: a,
                rightControl: ae,
                title: K,
              },
              c.a.createElement(
                c.a.Fragment,
                null,
                re,
                c.a.createElement(F.b, { color: 'gray700', style: j.text }, M),
                c.a.createElement(u.a, { autoFocus: !0, communityName: B, onChange: Q }),
                c.a.createElement(m.a, { communityPurpose: z, onChange: G }),
                l
                  ? c.a.createElement(
                      c.a.Fragment,
                      null,
                      c.a.createElement(F.b, { size: 'headline2', style: j.membership, weight: 'bold' }, L),
                      c.a.createElement(w.d, { hideInvitePolicy: !0, setters: ee, state: $ }),
                    )
                  : null,
              ),
            ),
          )
        }),
        j = I.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
            membership: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 },
          }
        }),
        P = g(A)
      t.default = P
    },
    UZ0O: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      var a = n('KEM+'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = n('ddV6'),
        c = n.n(o),
        s = n('ERkP'),
        u = n.n(s),
        m = n('v6aA'),
        d = n('3XMw'),
        y = n.n(d),
        p = n('rHpw'),
        g = n('xvzJ'),
        f = (n('2G9S'), n('CxAY')),
        h = n('rxPX'),
        b = function (e, t) {
          return t.communityId && t.userId ? f.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        }
      var v = Object(h.a)().propsFromState(function () {
          return { userCommunityRoleRelationship: b }
        })(function (e) {
          var t = e.communityId,
            n = e.onCommunityRoleChange,
            a = e.userCommunityRoleRelationship,
            r = e.userId
          if (
            (u.a.useEffect(
              function () {
                a && n(r, a)
              },
              [a, r, n],
            ),
            !a)
          )
            return null
          var l = a.role,
            i = a.user,
            o = i.id,
            c = i.screen_name
          return u.a.createElement(g.a, { communityId: t, communityRole: l, recordId: o, screenName: c, userId: r })
        }),
        _ = n('4e/K'),
        k = n('Ig1G'),
        E = n('GZwR'),
        C = y.a.cf4898a0,
        S = [E.a.CommunityMembers]
      function F(e) {
        var t = u.a.useContext(m.a).featureSwitches.isTrue('c9s_members_list_search_enabled'),
          n = e.community,
          a = e.communityId,
          l = e.onIsSearchingChange,
          o = (null == n ? void 0 : n.role) === k.a.Admin,
          s = u.a.useState(!1),
          d = c()(s, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState(''),
          f = c()(g, 2),
          h = f[0],
          b = f[1],
          F = u.a.useState({}),
          w = c()(F, 2),
          T = w[0],
          K = w[1],
          M = u.a.useCallback(
            function (e, t) {
              K(function (n) {
                return i()(i()({}, n), {}, r()({}, e, t))
              })
            },
            [K],
          ),
          x = u.a.useCallback(
            function () {
              p(!0), l(!0)
            },
            [l],
          ),
          R = u.a.useCallback(
            function (e) {
              b(e)
              var t = !!e
              l(t), p(t)
            },
            [l],
          ),
          L = u.a.useCallback(
            function () {
              h || (l(!1), p(!1))
            },
            [l, h],
          )
        if (!a) return null
        return t && o
          ? u.a.createElement(_.default, {
              alwaysOpen: y,
              communityId: a,
              filter: S,
              getUserDisplayNameLabel: function (e) {
                if ('user' === e.type) {
                  var t = e.data.id_str,
                    n = T[t]
                  if (n) return Object(k.d)(n.role)
                }
              },
              inputStyle: I.textInput,
              isModal: !0,
              onDismiss: L,
              onFocus: x,
              onQueryChange: R,
              placeholder: C,
              renderUserDecoration: function (e) {
                var t = e.userId
                return u.a.createElement(v, { communityId: a, onCommunityRoleChange: M, userId: t })
              },
              rounded: !0,
              source: E.d.CommunityMemberSearch,
              style: I.input,
            })
          : null
      }
      var I = p.a.create(function (e) {
        return {
          input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
          textInput: { marginBottom: e.spaces.space8 },
        }
      })
    },
    WuQQ: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityMemberCount_community',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null }],
        type: 'Community',
        abstractKey: null,
        hash: '793bedf8ae1b012c222a20424e8123bb',
      }
      t.default = a
    },
    'X/n0': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityShareButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '37cc56f41a8f3f8d99f58a4ba79f83e9',
      }
      t.default = a
    },
    aJqr: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'MemberRequestsBadge_community',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'join_requests_result',
            plural: !1,
            selections: [
              {
                kind: 'InlineFragment',
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'pending_join_request_count',
                    storageKey: null,
                  },
                ],
                type: 'CommunityJoinRequests',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'c9e131a34a481514621ffb32e3b7fd1d',
      }
      t.default = a
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = n('ERkP'),
        c = n.n(o),
        s = n('v6aA'),
        u = n('XOJV'),
        m = n('eSoz'),
        d = n('rxPX'),
        y = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        g = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(m.g)(e, a) : void 0
        },
        f = Object(d.a)()
          .propsFromState(function () {
            return { community: g, hydratedTweet: u.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: m.c.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        b = n('uCxL'),
        v = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = f(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            l = e.hydratedTweet,
            o = (e.tweetId, i()(e, _)),
            u = c.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == l ? void 0 : l.community_id_str
          c.a.useEffect(
            function () {
              y && Object(h.a)(t) && a(y).catch(n())
            },
            [t, y, n, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            g = l && Object(v.f)(l, d, t),
            f = g && Object(v.e)(g),
            k = m.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            b.a,
            r()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: p,
              socialContextProps: f,
              tweet: l,
              withReactions: k,
            }),
          )
        })
      t.a = k
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        l = n('Ud88'),
        i = n('aQQo'),
        o = i.loadQuery,
        c = i.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        m = s.useEffect,
        d = s.useRef,
        y = s.useState,
        p = n('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : g,
          i = l()
        c()
        var s = r(),
          p = d(new Set([n])),
          h = y(function () {
            return n
          }),
          b = h[0],
          v = h[1],
          _ = y(function () {
            return n
          }),
          k = _[0],
          E = _[1]
        n !== k && (p.current.add(n), E(n), v(n))
        var C = u(
            function () {
              s.current && (p.current.add(g), v(g))
            },
            [s],
          ),
          S = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var r,
                  l = o(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : i, e, t, a)
                p.current.add(l), v(l)
              }
            },
            [i, e, v, s],
          ),
          F = d(!1)
        return (
          m(function () {
            return function () {
              F.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === F.current)
                return (
                  (F.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    S(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var t = p.current
              if (s.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var l = n.value
                    if (l === b) break
                    t.delete(l),
                      'NullQueryReference' !== l.kind &&
                        (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [b, s, S, e],
          ),
          m(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(p.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (f(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (l) {
                  n.e(l)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, S, C]
        )
      }
    },
    cI4y: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'members_slice',
                    args: [(l = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityMembers_Query_members_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (i = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (o = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [l, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'members_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiUser',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'profile_image_url_https',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'protected',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'screen_name',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'verified',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  },
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: c,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityMembers_Query_members_slice',
                    kind: 'LinkedHandle',
                    name: 'members_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'OwzlW0I_RTCIsN-W8XScdQ',
            metadata: { sliceInfoPath: ['community', 'members_slice', 'slice_info'] },
            name: 'membersSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'd5eb23d40bcb19e36e32afc95695f334'), (t.default = u)
    },
    cL2e: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return v
        }),
        n.d(t, 'b', function () {
          return S
        })
      var a = n('ERkP'),
        r = n.n(a),
        l = n('t62R'),
        i = n('s8G+'),
        o = function (e) {
          return Object(i.a)('c9s_communities_search_enabled') ? r.a.createElement(l.b, null, 'To be filled') : null
        },
        c = r.a.memo(o),
        s = n('ddV6'),
        u = n.n(s),
        m = (n('KqXw'), n('MvUL'), n('VY6S')),
        d = n('6OUF'),
        y = n('3XMw'),
        p = n.n(y),
        g = n('VwDm'),
        f = n('zCf4'),
        h = p.a.fbf01e51,
        b = function (e) {
          var t = e.initialValue,
            n = void 0 === t ? '' : t,
            a = r.a.useRef(!1)
          r.a.useEffect(function () {
            return (
              (a.current = !0),
              function () {
                a.current = !1
              }
            )
          }, [])
          var l = r.a.useState(n),
            i = u()(l, 2),
            o = i[0],
            c = i[1],
            s = Object(f.f)(),
            y = r.a.useCallback(
              function () {
                c(''), s.replace('/i/communities/suggested')
              },
              [s],
            ),
            p = r.a.useMemo(
              function () {
                return Object(m.a)(function (e) {
                  a.current && (e.length > 0 ? s.replace('/i/communities/suggested?q='.concat(e)) : y())
                }, 1e3)
              },
              [y, s],
            ),
            b = r.a.useCallback(
              function (e) {
                var t = e.target.value
                c(t), p(t)
              },
              [p],
            )
          return r.a.createElement(d.a, {
            Icon: g.a,
            autoComplete: 'off',
            isCompact: !0,
            onChange: b,
            onClear: y,
            placeholder: h,
            value: o,
            withClearButton: !0,
          })
        },
        v = r.a.memo(b),
        _ = n('/yvb'),
        k = n('rHpw'),
        E = p.a.fbf01e51,
        C = function (e) {
          return Object(i.a)('c9s_communities_search_enabled')
            ? r.a.createElement(_.a, {
                icon: r.a.createElement(g.a, { accessibilityLabel: E, style: F.searchButton }),
                link: '/i/communities/suggested',
                size: 'medium',
                type: 'brandText',
              })
            : null
        },
        S = r.a.memo(C),
        F = k.a.create(function (e) {
          return { searchButton: { color: e.colors.text } }
        })
    },
    'cz/h': function (e, t, n) {
      'use strict'
      n.r(t)
      n('lTEL'), n('7x/C'), n('87if'), n('kYxP'), n('KrtT'), n('KqXw'), n('LJOr')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('es0u'),
        i = n('WpDa'),
        o = n('ZNT5'),
        c = Object(o.a)({
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
          formatResponse: i.a,
        }),
        s = n('OUEC'),
        u = n('3XMw'),
        m = n.n(u),
        d = n('yoO3'),
        y = n('fTQJ'),
        p = n('VS6U'),
        g = n('s8G+'),
        f = n('cL2e'),
        h = n('zCf4'),
        b = m.a.cb6adb1f,
        v = function (e) {
          var t = Object(h.f)(),
            n = Object(h.g)(),
            a = Object(g.a)('c9s_communities_search_enabled'),
            i = r.a.useCallback(function () {
              return r.a.createElement(y.a, { entryConfiguration: s.a, module: c, refreshControl: null, title: b })
            }, []),
            o = r.a.useMemo(
              function () {
                var e
                return null !== (e = new URLSearchParams(n.search).get('q')) && void 0 !== e ? e : void 0
              },
              [n.search],
            ),
            u = r.a.useCallback(
              function () {
                return o ? r.a.createElement(f.c, { query: o }) : i()
              },
              [i, o],
            ),
            m = a ? u() : i()
          return r.a.createElement(
            d.a,
            { behavioralEventViewType: 'discover' },
            r.a.createElement(p.a, {
              backLocation: '/',
              customSearchBox: a ? r.a.createElement(f.a, { initialValue: o }) : null,
              history: t,
              primaryContent: m,
              sidebarContent: r.a.createElement(l.a, null),
              title: b,
              withSearchBox: a,
            }),
          )
        }
      t.default = r.a.memo(v)
    },
    dMLx: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useCommunityBannerImage_community',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'ApiMedia',
              kind: 'LinkedField',
              name: 'custom_banner_media',
              plural: !1,
              selections: (a = [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'media_info',
                  plural: !1,
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'MediaColorInfo',
                          kind: 'LinkedField',
                          name: 'color_info',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'MediaColorPaletteItem',
                              kind: 'LinkedField',
                              name: 'palette',
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'MediaColor',
                                  kind: 'LinkedField',
                                  name: 'rgb',
                                  plural: !1,
                                  selections: [
                                    { alias: null, args: null, kind: 'ScalarField', name: 'red', storageKey: null },
                                    { alias: null, args: null, kind: 'ScalarField', name: 'green', storageKey: null },
                                    { alias: null, args: null, kind: 'ScalarField', name: 'blue', storageKey: null },
                                  ],
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'percentage', storageKey: null },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_url', storageKey: null },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_width', storageKey: null },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_height', storageKey: null },
                      ],
                      type: 'ApiImage',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ]),
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'ApiMedia',
              kind: 'LinkedField',
              name: 'default_banner_media',
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = '66a8dff93611f1369bc53655a9aacb32'), (t.default = r)
    },
    fK4d: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityBannerImage_community',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImage_community' }],
        type: 'Community',
        abstractKey: null,
        hash: 'ac657dadcf91c9440fdfcd1862830fd1',
      }
      t.default = a
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        h = n('/NU0'),
        b = n('rxPX'),
        v = n('AspN'),
        _ = function (e, t) {
          return t.media ? t.media : Object(h.a)(t.mediaId) ? Object(v.k)(e, t.mediaId)[0] : void 0
        },
        k = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        E = Object(b.a)()
          .propsFromState(function () {
            return { media: _, mediaId: k }
          })
          .propsFromActions(function () {
            return { processMedia: v.f, updateMediaUpload: v.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = n('jHSc'),
        S = n('3XMw'),
        F = n.n(S),
        I = n('EeFI'),
        w = 'applyButton',
        T = n('/yvb'),
        K = n('rHpw'),
        M = F.a.gd80afba,
        x = F.a.a753a87f,
        R = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              f()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              f()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return r.a.createElement(
                  T.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: w, type: 'primaryFilled' },
                  x,
                )
              }),
              f()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              f()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    r = n.analytics,
                    l = n.media,
                    i = n.mediaId,
                    o = n.onDone,
                    c = n.processMedia,
                    s = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (l || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(h.a)(i) &&
                    (e
                      ? (e(u), o())
                      : (s({ id: i, cropData: d ? void 0 : u }),
                        c(i).then(function () {
                          a.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), o()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = r.a.createRef()),
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
                    l = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    o = this._getMedia()
                  return r.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: L.root,
                      documentTitle: a || M,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || M,
                    },
                    r.a.createElement(I.a, {
                      defaultAspectRatio: t,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: l,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        L = K.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(R),
        A = n('X8FW'),
        j = K.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: j.modal },
          r.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'MemberRequests_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: 'pending_join_requests_slice',
                            args: null,
                            concreteType: 'CommunityJoinRequestsSlice',
                            kind: 'LinkedField',
                            name: '__MemberRequests_Query_members_slice_slice',
                            plural: !1,
                            selections: [
                              (o = {
                                alias: null,
                                args: null,
                                concreteType: 'SliceInfo',
                                kind: 'LinkedField',
                                name: 'slice_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'next_cursor',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'previous_cursor',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              }),
                              { args: null, kind: 'FragmentSpread', name: 'list_communityJoinRequestsSlice' },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'MemberRequests_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  l,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      i,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'CommunityJoinRequestsSlice',
                            kind: 'LinkedField',
                            name: 'pending_join_requests_slice',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'CommunityJoinRequest',
                                kind: 'LinkedField',
                                name: 'items',
                                plural: !0,
                                selections: [
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'created_at',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'UserCommunityRelationship',
                                    kind: 'LinkedField',
                                    name: 'user_relationship',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'UserResults',
                                        kind: 'LinkedField',
                                        name: 'user_results',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: 'LinkedField',
                                            name: 'result',
                                            plural: !1,
                                            selections: [
                                              i,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  (s = {
                                                    alias: 'id_str',
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'rest_id',
                                                    storageKey: null,
                                                  }),
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiUser',
                                                    kind: 'LinkedField',
                                                    name: 'legacy',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'blocking',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'description',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'followed_by',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'following',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'muting',
                                                        storageKey: null,
                                                      },
                                                      l,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'profile_image_url_https',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'screen_name',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    filters: null,
                                                    handle: 'defaultScalars',
                                                    key: '',
                                                    kind: 'LinkedHandle',
                                                    name: 'legacy',
                                                  },
                                                  c,
                                                ],
                                                type: 'User',
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'Community',
                                        kind: 'LinkedField',
                                        name: 'community',
                                        plural: !1,
                                        selections: [s, c],
                                        storageKey: null,
                                      },
                                      c,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'CommunityJoinRequestActions',
                                    kind: 'LinkedField',
                                    name: 'actions',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'join_request_approve_action_result',
                                        plural: !1,
                                        selections: (u = [i]),
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'join_request_deny_action_result',
                                        plural: !1,
                                        selections: u,
                                        storageKey: null,
                                      },
                                      c,
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              o,
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            filters: [],
                            handle: 'slice',
                            key: 'MemberRequests_Query_members_slice',
                            kind: 'LinkedHandle',
                            name: 'pending_join_requests_slice',
                          },
                          c,
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  c,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '5xZZjyUMx-lzjmohhjoOyg',
            metadata: {
              sliceInfoPath: ['community', 'join_requests_result', 'pending_join_requests_slice', 'slice_info'],
            },
            name: 'MemberRequests_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(m.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (t.default = m)
    },
    gDCe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA'),
        i = n('Ig1G'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('Nh1N'),
        u = n('MWbm'),
        m = n('4zmP'),
        d = n('rHpw'),
        y = c.a.b6e22e15,
        p = c.a.d17c10d9,
        g = c.a.a1ecaf33,
        f = r.a.memo(function (e) {
          var t,
            n = e.community,
            a = r.a.useContext(l.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !n || n.role !== i.a.Admin || a
            ? null
            : r.a.createElement(
                u.a,
                { style: h.info },
                r.a.createElement(m.a, {
                  Icon: s.a,
                  action: {
                    label: g,
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
                  headline: y,
                  text: p,
                  type: 'primary',
                }),
              )
        }),
        h = d.a.create(function (e) {
          return { info: { padding: e.spaces.space12 } }
        })
      t.a = f
    },
    'i/x0': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'actions_update_CommunityJoinRequest',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'UserCommunityRelationship',
            kind: 'LinkedField',
            name: 'user_relationship',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'pending_join_request_count',
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'CommunityJoinRequest',
        abstractKey: null,
        hash: '2ad61c8011c9d2c59400842c56843678',
      }
      t.default = a
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      n('FtFR')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('wtru')
      function i(e) {
        var t = Object(l.b)()
        return [
          !!t && !t.flags[e],
          r.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = n('ERkP'),
        c = n.n(o),
        s = n('t62R'),
        u = n('I4+6'),
        m = n('cm6r'),
        d = n('rHpw'),
        y = n('MWbm'),
        p = ['align', 'color', 'label'],
        g = d.a.create(function (e) {
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
          a = e.color,
          l = e.label,
          o = i()(e, p),
          f = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          y.a,
          { style: g.container },
          c.a.createElement(
            m.a,
            r()({}, o, { interactiveStyles: f, style: g.root }),
            c.a.createElement(s.b, { align: n, color: a }, l),
          ),
        )
      }
    },
    krnS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return H
      })
      var a,
        r,
        l,
        i = n('ERkP'),
        o = n.n(i),
        c = n('v6aA'),
        s = n('WpDa'),
        u = n('ZNT5'),
        m = n('Ig1G'),
        d = n('FIs5'),
        y = n('3XMw'),
        p = n.n(y),
        g = (n('enFi'), n('TEoO')),
        f = n('Fr3L'),
        h = (n('ho0z'), n('xvzJ')),
        b = n('IMA+'),
        v = n('jAXQ'),
        _ = n.n(v),
        k = function (e) {
          var t = e.communityId,
            r = e.userResult,
            l = _()(void 0 !== a ? a : (a = n('tgdH')), r).result
          if (!l || 'User' !== l.__typename || !l.legacy) return null
          var i = l.community_role,
            c = l.id,
            s = l.legacy,
            u = s.id_str,
            d = s.name,
            y = void 0 === d ? '' : d,
            p = s.profile_image_url_https,
            g = s.protected,
            f = s.screen_name,
            v = s.verified
          if (!f || !p || !y) return null
          var k = Object(m.d)(i),
            E = o.a.createElement(h.a, { communityId: t, communityRole: i, recordId: c, screenName: f, userId: u })
          return o.a.createElement(b.a, {
            avatarUri: p,
            decoration: E,
            displayMode: 'UserCompact',
            displayNameLabel: k,
            isProtected: g,
            isVerified: v,
            name: y,
            screenName: f,
            userId: u,
          })
        },
        E = n('DQzJ'),
        C = { context: 'members' },
        S = void 0 !== r ? r : (r = n('cI4y')),
        F = function (e) {
          return e.__id
        },
        I = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(E.a)(S, { communityId: t }),
            r = a.data,
            l = a.fetchNext,
            i = r.community.members_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(t),
            identityFunction: F,
            items: i,
            noItemsRenderer: n,
            onNearEnd: l,
            renderer: function (e) {
              return o.a.createElement(k, { communityId: t, userResult: e })
            },
          })
        },
        w = function (e) {
          return o.a.createElement(f.a, { errorConfig: C }, o.a.createElement(I, e))
        },
        T = n('oQhu'),
        K = { context: 'members' },
        M = void 0 !== l ? l : (l = n('w9f9')),
        x = function (e) {
          return e.__id
        },
        R = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(E.a)(M, { communityId: t }),
            r = a.data,
            l = a.fetchNext,
            i = r.community.moderators_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(t),
            identityFunction: x,
            items: i,
            noItemsRenderer: n,
            onNearEnd: l,
            renderer: function (e) {
              return o.a.createElement(k, { communityId: t, userResult: e })
            },
          })
        },
        L = function (e) {
          return o.a.createElement(f.a, { errorConfig: K }, o.a.createElement(R, e))
        },
        O = n('fTQJ'),
        A = p.a.cdd87523,
        j = p.a.cca5191f,
        P = p.a.e442bbb4,
        D = p.a.e9488b0d,
        B = p.a.j43fea20,
        H = { Moderators: 'Moderators', Members: 'Members' },
        N = Object(T.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityMembers-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityMembers
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MEMBERS_TIMELINE',
              perfKey: 'communityMembers',
              formatResponse: s.a,
            })
          })(e)
        }),
        U = Object(T.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityModerators-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityModerators
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MODERATORS_TIMELINE',
              perfKey: 'communityModerators',
              formatResponse: s.a,
            })
          })(e)
        }),
        z = function () {
          return o.a.createElement(d.a, { header: A, message: j })
        }
      t.b = function (e) {
        var t = o.a.useContext(c.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          n = e.communityId,
          a = e.mode,
          r = e.userRole,
          l = a === H.Moderators
        if (t && r === m.a.Admin)
          return l
            ? o.a.createElement(L, { communityId: n, renderEmptyState: z })
            : o.a.createElement(w, { communityId: n, renderEmptyState: z })
        var i = l ? U(n) : N(n),
          s = l ? D : B
        return o.a.createElement(O.a, { loadingAccessibilityLabel: s, module: i, renderEmptyState: z, title: P })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return Ie
        })
      n('KqXw'), n('WNMA')
      var a,
        r,
        l = n('ERkP'),
        i = n.n(l),
        o = n('v6aA'),
        c = n('Ig1G'),
        s = n('EPsT'),
        u = n('eSoz'),
        m = n('rxPX'),
        d = n('0KEI'),
        y = n('R5kW'),
        p = function (e, t) {
          var n,
            a = Object(y.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        g = function (e, t) {
          var n = Object(u.h)(e, t.communityId)
          return 'CommunityJoinRequests' === (null == n ? void 0 : n.__typename)
        },
        f = function (e, t) {
          return Object(y.c)(e, t.communityId)
        },
        h = Object(m.a)()
          .propsFromState(function () {
            return { canReviewMemberRequests: g, count: p, moderationFetchStatus: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              updateModeratorRole: u.c.updateRole,
              fetchCommunityModerationData: y.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        b = n('kGix'),
        v = n('3XMw'),
        _ = n.n(v),
        k = (n('enFi'), n('Znyr')),
        E = n('jAXQ'),
        C = n.n(E),
        S = _.a.h6beb5fa,
        F = _.a.dde5f322,
        I = void 0 !== a ? a : (a = n('aJqr')),
        w = function (e) {
          var t,
            n = e.community,
            a = null !== (t = C()(I, n).join_requests_result.pending_join_request_count) && void 0 !== t ? t : 0
          return a > 0
            ? i.a.createElement(k.a, {
                count: a,
                standalone: !0,
                truncatedCountFormatter: S,
                unreadCountLabel: F,
                withBorder: !1,
              })
            : null
        },
        T = i.a.memo(w),
        K = n('Fr3L'),
        M = n('IAZG'),
        x = { context: 'MemberRequestsBadgeContainerQuery' },
        R = void 0 !== r ? r : (r = n('Iqvj')),
        L = function (e) {
          var t = e.communityId,
            n = Object(M.a)(R, { communityId: t })
          return i.a.createElement(T, { community: n.community })
        },
        O = function (e) {
          return i.a.createElement(K.a, { errorConfig: x }, i.a.createElement(L, { communityId: e.communityId }))
        },
        A = i.a.memo(O),
        j = n('KQzH'),
        P = n('yoO3'),
        D = n('mWs5'),
        B = n('MWbm'),
        H = n('rHpw'),
        N = n('6vad'),
        U = n('csss'),
        z = n('OOKO'),
        V = n('zIWA'),
        q = n('yiKp'),
        W = n.n(q),
        X = n('Lsrn'),
        J = n('k/Ka'),
        Q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(J.a)(
            'svg',
            W()(
              W()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [X.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z',
              }),
            ),
          )
        }
      Q.metadata = { width: 24, height: 24 }
      var G = Q,
        Y = n('M2x3'),
        Z = n('SNyS'),
        $ = n('S+H3'),
        ee = n('PU7B'),
        te = _.a.dce5e1b3,
        ne = _.a.c5d8c93d,
        ae = _.a.c8c7f9fc,
        re = _.a.c045c7b6,
        le = _.a.a87df2ee,
        ie = _.a.dc6ce7b4,
        oe = _.a.gfca5254,
        ce = _.a.bb081ea1,
        se = _.a.h6beb5fa,
        ue = _.a.e3f04700,
        me = _.a.efc26607,
        de = _.a.gfccba44,
        ye = _.a.adfcc3cd,
        pe = _.a.d0330d9c,
        ge = _.a.fd67f7c8,
        fe = _.a.gc00d212,
        he = _.a.a997eca0,
        be = { label: _.a.c6ea29a1, header: _.a.a6e13fac, text: _.a.e538848b, confirmButtonLabel: _.a.j49e6aa2 },
        ve = H.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        _e = i.a.createElement(V.a, { style: ve.thumbnail }),
        ke = i.a.createElement(G, { style: ve.thumbnail }),
        Ee = i.a.createElement(Y.a, { style: ve.thumbnail }),
        Ce = i.a.createElement(Z.a, { style: ve.thumbnail }),
        Se = i.a.createElement($.a, { style: ve.thumbnail }),
        Fe = i.a.createElement(ee.a, { style: ve.thumbnail }),
        Ie = function (e) {
          var t = i.a.useContext(o.a),
            n = t.featureSwitches,
            a = t.loggedInUserId,
            r = e.canReviewMemberRequests,
            l = e.community,
            u = e.communityId,
            m = e.count,
            d = e.createLocalApiErrorHandler,
            y = e.fetchCommunityModerationData,
            p = e.history,
            g = e.match,
            f = e.moderationFetchStatus,
            h = e.updateModeratorRole,
            v = d(),
            _ = n.isTrue('c9s_moderation_enabled'),
            E = n.isTrue('c9s_rule_management_enabled'),
            C = n.isTrue('c9s_request_to_join_enabled'),
            S = n.isTrue('c9s_edit_moderators_enabled')
          i.a.useEffect(
            function () {
              f === b.a.NONE && _ && y(u).catch(v)
            },
            [v, u, y, f, _],
          )
          var F = i.a.useCallback(
              function () {
                return _ && m > 0
                  ? i.a.createElement(k.a, {
                      count: m,
                      standalone: !0,
                      truncatedCountFormatter: se,
                      unreadCountLabel: ue,
                      withBorder: !1,
                    })
                  : null
              },
              [m, _],
            ),
            I = i.a.useCallback(
              function () {
                return i.a.createElement(A, { communityId: u })
              },
              [u],
            ),
            w = l.role,
            T = w === c.a.Admin ? te : ne,
            K = w === c.a.Admin ? ye : pe,
            M = !g.isExact
          return i.a.createElement(
            P.a,
            { locationKey: 'communitySettingsRoot' },
            i.a.createElement(
              D.a,
              { communityId: u, screenType: 'secondaryRoot', title: T, withDetailOpen: M },
              i.a.createElement(
                B.a,
                null,
                _
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(N.b, { text: ae }),
                      i.a.createElement(j.a, {
                        label: re,
                        link: '/i/communities/'.concat(u, '/moderation/reported_tweets'),
                        renderRightContent: F,
                        thumbnail: _e,
                      }),
                    )
                  : null,
                C && r
                  ? i.a.createElement(j.a, {
                      label: de,
                      link: '/i/communities/'.concat(u, '/moderation/member_requests'),
                      renderRightContent: I,
                      thumbnail: ke,
                    })
                  : null,
                i.a.createElement(N.b, { text: le }),
                i.a.createElement(j.a, {
                  description: me({ memberCount: l.member_count }),
                  label: ie,
                  link: '/i/communities/'.concat(u, '/tools/members'),
                  thumbnail: Se,
                }),
                E
                  ? i.a.createElement(j.a, {
                      description: K,
                      label: oe,
                      link: '/i/communities/'.concat(u, '/tools/rules'),
                      thumbnail: Fe,
                    })
                  : null,
                w === c.a.Admin
                  ? i.a.createElement(j.a, {
                      description: ge,
                      label: ce,
                      link: '/i/communities/'.concat(u, '/tools/settings'),
                      thumbnail: Ee,
                    })
                  : null,
                i.a.createElement(U.a, {
                  description: he,
                  label: fe,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: Ce,
                }),
                w === c.a.Moderator && S
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(z.a, { spacing: 'space1' }),
                      i.a.createElement(s.a, {
                        confirmationSheetConfirmButtonLabel: be.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: be.header,
                        confirmationSheetText: be.text,
                        label: be.label,
                        onConfirmationSheetConfirm: function () {
                          a &&
                            h(u, { userId: a, role: c.a.Member }).then(function () {
                              p.push('i/communities/'.concat(u))
                            })
                        },
                        withBottomBorder: !1,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        we = h(Ie)
      t.default = we
    },
    'ldL/': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDescriptionToggle_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'b0d158b55a32cd7c45788562b8f71a71',
      }
      t.default = a
    },
    m0MN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesModerationContainer', function () {
          return Xt
        })
      var a,
        r,
        l,
        i = n('97Jx'),
        o = n.n(i),
        c = n('m3Bd'),
        s = n.n(c),
        u = (n('KqXw'), n('WNMA'), n('ERkP')),
        m = n.n(u),
        d = n('v6aA'),
        y = n('+Kfv'),
        p = n('Ig1G'),
        g = n('1Idg'),
        f = n('eSoz'),
        h = n('rxPX'),
        b = n('0KEI'),
        v = Object(h.a)()
          .propsFromState(function () {
            return { community: g.a, fetchStatus: g.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: f.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        _ = n('G1WX'),
        k = (n('ho0z'), n('es0u')),
        E = n('3XMw'),
        C = n.n(E),
        S = n('VTxf'),
        F = n('yoO3'),
        I = n('Fr3L'),
        w = n('FIs5'),
        T = n('TEoO'),
        K = (n('1t7P'), n('jQ/y'), n('ddV6')),
        M = n.n(K),
        x = n('1YZw'),
        R = n('uDfI'),
        L = n('MWbm'),
        O = n('/yvb'),
        A = n('rHpw'),
        j = (n('enFi'), n('jAXQ')),
        P = n.n(j),
        D = (n('7x/C'), n('JtPf'), n('849X'), n('TJCb'), n('9SqB')),
        B = n.n(D)
      void 0 !== a || (a = n('i/x0'))
      var H,
        N,
        U,
        z,
        V = void 0 !== r ? r : (r = n('Dm5+')),
        q = void 0 !== l ? l : (l = n('C2fM')),
        W = C.a.i22835dd,
        X = C.a.cb59a0fd,
        J = C.a.ic7db4ea,
        Q = void 0 !== H ? H : (H = n('PMbW')),
        G = function (e) {
          var t = e.communityId,
            n = e.communityJoinRequestActions,
            a = e.userId,
            r = P()(Q, n),
            l = r.join_request_approve_action_result,
            i = r.join_request_deny_action_result,
            o = (function () {
              var e = B()(V),
                t = M()(e, 2),
                n = t[0],
                a = t[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      r = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: r },
                            onCompleted: function (t) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [n, a],
                ),
                a,
              ]
            })(),
            c = M()(o, 2),
            s = c[0],
            u = c[1],
            d = (function () {
              var e = B()(q),
                t = M()(e, 2),
                n = t[0],
                a = t[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      r = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: r },
                            onCompleted: function (t) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [n, a],
                ),
                a,
              ]
            })(),
            y = M()(d, 2),
            p = y[0],
            g = y[1],
            f = Object(R.c)(),
            h = u || g,
            b = 'CommunityJoinRequestDenyAction' === (null == i ? void 0 : i.__typename),
            v = 'CommunityJoinRequestApproveAction' === (null == l ? void 0 : l.__typename),
            _ = m.a.useCallback(
              function () {
                p({ communityId: t, userId: a }).catch(function () {
                  f(Object(x.b)({ text: J }))
                })
              },
              [f, p, t, a],
            ),
            k = m.a.useCallback(
              function () {
                s({ communityId: t, userId: a }).catch(function () {
                  f(Object(x.b)({ text: J }))
                })
              },
              [f, s, t, a],
            )
          return m.a.createElement(
            L.a,
            { style: Y.buttons },
            m.a.createElement(O.a, { disabled: !b || h, onPress: _, style: Y.button, type: 'destructiveOutlined' }, X),
            m.a.createElement(O.a, { disabled: !v || h, onPress: k, style: Y.button, type: 'primaryOutlined' }, W),
          )
        },
        Y = A.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        Z = n('tocL'),
        $ = n('h0NW'),
        ee = n('t62R'),
        te = n('0yYu'),
        ne = n('IMA+'),
        ae = n('GBcw'),
        re = n('6Rrp'),
        le = n('5oT/'),
        ie = void 0 !== N ? N : (N = n('8vG3')),
        oe = C.a.d7f13fb8,
        ce = C.a.a340df66,
        se = function (e) {
          var t = e.icon,
            n = e.label
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement($.a, {
              containerStyle: pe.container,
              items: [{ label: m.a.createElement(ee.b, null, n), decoration: t }],
            }),
            m.a.createElement(te.a, null),
          )
        },
        ue = { blocking: C.a.g8907fde, muting: C.a.f69c2298 },
        me = {
          mutual: { contextType: Z.a.FollowMutual, text: C.a.ae2205d1 },
          following: { contextType: Z.a.FollowFollowing, text: C.a.d960b55b },
          followedBy: { contextType: Z.a.FollowFollowed, text: C.a.b7f1e58a },
        },
        de = {},
        ye = function (e) {
          var t = e.communityJoinRequest,
            n = P()(ie, t),
            a = n.user_relationship.community.id_str,
            r = n.user_relationship.user_results.result,
            l = n.state
          if (!r || 'User' !== r.__typename || !r.legacy) return null
          var i = r.id_str,
            o = r.legacy,
            c = o.blocking,
            s = o.description,
            u = o.followed_by,
            d = o.following,
            y = o.muting,
            p = o.name,
            g = o.profile_image_url_https,
            f = o.screen_name
          if (!g || !f || !p) return null
          switch (l) {
            case 'Approved':
              return m.a.createElement(se, { icon: ge, label: oe({ screenName: f }) })
            case 'Denied':
              return m.a.createElement(se, { icon: fe, label: ce({ screenName: f }) })
            case 'Invalid':
              return null
          }
          var h = n.created_at,
            b = (function (e) {
              var t = e.following,
                n = e.isFollowedBy
              return t && n ? me.mutual : t ? me.following : n ? me.followedBy : void 0
            })({ isFollowedBy: u, following: d }),
            v = (function (e) {
              var t = e.blocking,
                n = e.muting
              return t ? ue.blocking : n ? ue.muting : void 0
            })({ blocking: c, muting: y }),
            _ = m.a.createElement(
              L.a,
              null,
              v && m.a.createElement(ee.b, { color: 'red500', style: pe.bottomText }, v),
              m.a.createElement(G, { communityId: a, communityJoinRequestActions: n.actions, userId: i }),
            )
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(ne.a, {
              avatarUri: g,
              bottomControl: _,
              description: s || void 0,
              displayMode: 'UserDetailed',
              entities: de,
              name: p,
              screenName: f,
              screenNameSuffix: m.a.createElement(ae.a, { color: 'gray700', timestamp: h }),
              socialContext: b,
              userId: i,
            }),
            m.a.createElement(te.a, null),
          )
        },
        pe = A.a.create(function (e) {
          return {
            actioned: { flexDirection: 'row' },
            bottomText: { marginTop: e.spaces.space12 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            container: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        ge = m.a.createElement(re.a, { style: pe.icon }),
        fe = m.a.createElement(le.a, { style: pe.icon }),
        he = C.a.addbb11e,
        be = C.a.c38131de,
        ve = void 0 !== U ? U : (U = n('Jt8P')),
        _e = function (e) {
          return e.id
        },
        ke = function (e) {
          return m.a.createElement(ye, { communityJoinRequest: e })
        },
        Ee = function () {
          return m.a.createElement(w.a, { header: he, message: be })
        },
        Ce = function (e) {
          var t = e.communityJoinRequests,
            n = e.fetchNext,
            a = P()(ve, t).items
          return m.a.createElement(T.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: _e,
            items: a,
            noItemsRenderer: Ee,
            onNearEnd: n,
            renderer: ke,
          })
        },
        Se = n('VS6U'),
        Fe = n('zCf4'),
        Ie = n('DQzJ'),
        we = C.a.gfccba44,
        Te = 'member_requests',
        Ke = { context: Te },
        Me = void 0 !== z ? z : (z = n('gAl+')),
        xe = function (e) {
          var t = Object(Fe.f)(),
            n = e.communityId,
            a = Object(Ie.a)(Me, { communityId: n }),
            r = a.data,
            l = a.fetchNext,
            i = r.community,
            o = i.join_requests_result,
            c = i.name
          if ('CommunityJoinRequests' === o.__typename) {
            var s = o.pending_join_requests_slice,
              u = m.a.createElement(k.a, {
                communityId: n,
                withCommunityRules: !0,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              d = m.a.createElement(Ce, { communityJoinRequests: s, fetchNext: l })
            return m.a.createElement(
              F.a,
              { behavioralEventViewType: Te },
              m.a.createElement(Se.a, {
                backLocation: '/i/communities/'.concat(n, '/tools'),
                history: t,
                primaryContent: d,
                sidebarContent: u,
                subtitle: c,
                title: we,
              }),
            )
          }
          return m.a.createElement(S.a, null)
        },
        Re = function (e) {
          var t = e.communityId
          return m.a.createElement(I.a, { errorConfig: Ke }, m.a.createElement(xe, { communityId: t }))
        },
        Le = n('/de5'),
        Oe = n('yiKp'),
        Ae = n.n(Oe),
        je = (n('2G9S'), n('uFXj'), n('z84I'), n('3zvM')),
        Pe = n('lMB6'),
        De = Object(je.e)({ namespace: 'communityReports' }),
        Be = Pe.a.register(De),
        He = n('G6rE'),
        Ne = function (e, t) {
          var n,
            a = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (a ? Be.selectMany(e, a) : []).map(function (t) {
            var n = t.user
            return Ae()(Ae()({}, t), {}, { reporter: He.e.select(e, n) })
          })
        },
        Ue = Object(h.a)().propsFromState(function () {
          return { reports: Ne }
        }),
        ze = n('855f'),
        Ve = n('cHvH'),
        qe = n('5mJL'),
        We = n('efqG'),
        Xe = n('21zW'),
        Je = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return m.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              m.a.createElement(ee.b, { color: 'primary' }, C.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: ze.a.getFormattedCount(e) })
        },
        Qe = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            a = t.created_at,
            r = t.reporter,
            l = m.a.createElement(ae.a, { timestamp: a })
          return r
            ? m.a.createElement(Ve.a, null, function (e) {
                var a = e.windowWidth
                return m.a.createElement(
                  L.a,
                  { style: n ? Ye.bottomBorder : null },
                  m.a.createElement(ne.a, {
                    avatarUri: r.profile_image_url_https,
                    decoration: l,
                    displayMode: 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    screenName: r.screen_name,
                    style: a > A.a.theme.breakpoints.small ? Ye.userCell : void 0,
                    userId: r.id_str,
                  }),
                  m.a.createElement(
                    qe.a,
                    { avatarCell: null },
                    m.a.createElement(ee.b, { color: 'gray700', size: 'subtext2', style: Ye.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        Ge = Ue(function (e) {
          var t = m.a.useState(!1),
            n = M()(t, 2),
            a = n[0],
            r = n[1],
            l = e.reports,
            i = e.tweetCase,
            o = i.report_count,
            c = i.report_created_at_max
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(
              We.a,
              {
                contentStyle: Ye.popover,
                onDismiss: function () {
                  r(!1)
                },
                renderContent: function () {
                  return m.a.createElement(
                    L.a,
                    { style: Ye.contentContainer },
                    l.map(function (e, t) {
                      return m.a.createElement(Qe, { key: e.id_str, report: e, withBottomBorder: t < l.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              m.a.createElement(
                ee.b,
                {
                  onPress: function () {
                    r(!0)
                  },
                },
                Je(o),
              ),
            ),
            m.a.createElement(Xe.a, null),
            m.a.createElement(ae.a, { timestamp: c }),
          )
        }),
        Ye = A.a.create(function (e) {
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
        Ze = n('9EWH'),
        $e = Object(je.e)({ namespace: 'communityCases' }),
        et = {
          keepTweet: Object(je.c)($e, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ze.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(je.c)($e, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ze.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        tt = Ae()(Ae()({}, $e), et),
        nt = Pe.a.register(tt),
        at = n('XOJV'),
        rt = function (e, t) {
          var n = t.tweetId
          return n ? at.a.selectHydrated(e, n) : void 0
        },
        lt = function (e, t) {
          var n = t.tweetId
          return nt.select(e, n)
        },
        it = function (e, t) {
          var n = rt(e, t)
          return !!n && Object(f.i)(e, n)
        },
        ot = Object(h.a)()
          .propsFromState(function () {
            return { tweet: rt, tweetCase: lt, disableRemoveFromCommunity: it }
          })
          .propsFromActions(function () {
            return { keep: nt.keepTweet, dismiss: nt.dismissTweet }
          }),
        ct = n('b5s6'),
        st = n('mjJ+'),
        ut = n('IG7M'),
        mt = n('boUI'),
        dt = n('zIWA'),
        yt = n('fz3c'),
        pt = (n('yH/f'), n('n5fo')),
        gt = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        ft = C.a.ad10c66d,
        ht = C.a.c6caed9c,
        bt = function (e) {
          return m.a.createElement(ee.b, null, e)
        },
        vt = function (e) {
          var t = e.screenName
          switch (e.type) {
            case gt.Hidden:
              var n = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                a = [{ label: bt(n), decoration: kt }]
              return m.a.createElement($.a, { accessibilityLabel: ft, containerStyle: _t.container, items: a })
            case gt.Kept:
              var r = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                l = [{ label: bt(r), decoration: Et }]
              return m.a.createElement($.a, { accessibilityLabel: ht, containerStyle: _t.container, items: l })
            default:
              return null
          }
        },
        _t = A.a.create(function (e) {
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
        kt = m.a.createElement(pt.a, { style: _t.icon }),
        Et = m.a.createElement(re.a, { style: _t.icon }),
        Ct = { page: 'reported_tweets', component: 'tweet' },
        St = { viewType: 'tweet_moderation_case' },
        Ft = C.a.f1d9930c,
        It = C.a.a219e217,
        wt = C.a.fa524057,
        Tt = C.a.g30bc699,
        Kt = C.a.f0306107,
        Mt = C.a.b99364a5,
        xt = ot(function (e) {
          var t,
            n = m.a.useContext(d.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            r = e.keep,
            l = e.tweet,
            i = e.tweetCase,
            o = e.tweetId,
            c = null == l || null === (t = l.user) || void 0 === t ? void 0 : t.screen_name,
            s = m.a.useCallback(
              function (t) {
                if (l && c) {
                  var a = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: Tt({ screenName: c }),
                      Icon: mt.a,
                      link: '/'.concat(c),
                    },
                    {
                      text: Kt,
                      Icon: dt.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(yt.a.Tweet, '/').concat(l.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: Ct },
                      },
                      onClick: function () {
                        t()
                      },
                    },
                  ]
                  return (
                    n &&
                      !e.disableRemoveFromCommunity &&
                      a.push({
                        text: Mt({ screenName: c }),
                        Icon: le.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(yt.a.RemoveCommunityMember, '/').concat(l.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Ct },
                        },
                        onClick: function () {
                          t()
                        },
                      }),
                    m.a.createElement(st.a, { items: a, onCloseRequested: t })
                  )
                }
                return null
              },
              [l, c, n, e.disableRemoveFromCommunity],
            ),
            u = function () {
              r(o)
            },
            p = function () {
              a(o)
            }
          if (c && (null == l ? void 0 : l.reportingVisibility) === yt.b.HiddenCommunityTweet)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(vt, { screenName: c, type: gt.Hidden }),
              m.a.createElement(te.a, null),
            )
          if (
            (null != i && i.isDismissed) ||
            'community_tweet_member_removed' === (null == l ? void 0 : l.limited_actions)
          )
            return null
          if (c && null != i && i.isKept)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(vt, { screenName: c, type: gt.Kept }),
              m.a.createElement(te.a, null),
            )
          if (!i) return null
          return m.a.createElement(
            y.a,
            { behavioralEventContext: St },
            m.a.createElement(
              L.a,
              { style: Rt.container },
              m.a.createElement(
                L.a,
                { style: Rt.reportsBar },
                m.a.createElement(Ge, { tweetCase: i }),
                m.a.createElement(ut.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: s,
                  style: Rt.menu,
                }),
              ),
              m.a.createElement(ct.a, { tweetId: o }),
              l
                ? m.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= A.a.theme.breakpoints.small
                    return m.a.createElement(
                      L.a,
                      { style: [Rt.buttons, t && Rt.buttonsMobile] },
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(yt.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Ae()(Ae()({}, Ct), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Rt.button, t && Rt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Ft,
                      ),
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [Rt.button, t && Rt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        wt,
                      ),
                    )
                  })
                : m.a.createElement(
                    L.a,
                    { style: Rt.buttons },
                    m.a.createElement(
                      O.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: p,
                        style: Rt.button,
                        type: 'primaryOutlined',
                      },
                      It,
                    ),
                  ),
            ),
            m.a.createElement(te.a, null),
          )
        }),
        Rt = A.a.create(function (e) {
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
        Lt = n('hqKg'),
        Ot = n('wAC9'),
        At = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        jt = function () {
          return Object(Lt.createSelector)(At, function (e) {
            return e
              ? (function (e) {
                  return Object(Ot.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return Ae()(Ae()({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Pt = Object(h.a)()
          .propsFromState(function () {
            return { sliceModule: jt() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Dt = n('FS1z'),
        Bt = C.a.c045c7b6,
        Ht = C.a.dffb0774,
        Nt = C.a.cbb2a93c,
        Ut = Pt(function (e) {
          var t = m.a.useContext(d.a).featureSwitches,
            n = e.community,
            a = e.history,
            r = e.sliceModule,
            l = n.id_str,
            i = n.name,
            o = (n || []).rules,
            c = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            s = t.isTrue('responsive_web_communities_slices_enabled'),
            u = r
              ? m.a.createElement(Dt.a, {
                  module: r,
                  noItemsRenderer: function () {
                    return m.a.createElement(w.a, { header: Ht, message: Nt })
                  },
                  renderer: function (e) {
                    return m.a.createElement(xt, { tweetId: e })
                  },
                })
              : null
          return m.a.createElement(
            F.a,
            { behavioralEventViewType: 'reported_tweets' },
            m.a.createElement(Se.a, {
              backLocation: '/i/communities/'.concat(l),
              history: a,
              primaryContent: s ? u : null,
              sidebarContent: m.a.createElement(k.a, {
                communityId: l,
                rulesLimit: null == o ? void 0 : o.length,
                withCommunityRules: c,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: i,
              title: Bt,
            }),
          )
        }),
        zt = ['analytics', 'community'],
        Vt = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        qt = { viewType: 'community' }
      function Wt(e) {
        var t = m.a.useContext(d.a).featureSwitches,
          n = (e.analytics, e.community),
          a = s()(e, zt),
          r = a.match.path,
          l = t.isTrue('c9s_request_to_join_enabled')
        return Object(p.c)(n.role)
          ? m.a.createElement(
              y.a,
              { behavioralEventContext: qt },
              m.a.createElement(
                Fe.d,
                null,
                m.a.createElement(
                  Fe.b,
                  { exact: !0, path: ''.concat(r, '/reported_tweets') },
                  m.a.createElement(Ut, o()({}, a, { community: n })),
                ),
                l
                  ? m.a.createElement(
                      Fe.b,
                      { exact: !0, path: ''.concat(r, '/member_requests') },
                      m.a.createElement(Re, { communityId: n.id_str }),
                    )
                  : null,
                m.a.createElement(Fe.b, null, m.a.createElement(Le.b, a)),
              ),
            )
          : m.a.createElement(Le.b, a)
      }
      function Xt(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          r = e.fetchStatus,
          l = s()(e, Vt),
          i = l.match.params.communityId,
          c = m.a.useCallback(
            function () {
              i && a(i).catch(n())
            },
            [i, n, a],
          )
        return (
          m.a.useEffect(
            function () {
              return c()
            },
            [c],
          ),
          m.a.createElement(_.a, {
            fetchStatus: r,
            onRequestRetry: c,
            render: function () {
              return t ? m.a.createElement(Wt, o()({}, l, { community: t })) : null
            },
          })
        )
      }
      t.default = v(Xt)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      n('KqXw'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('3XMw'),
        i = n.n(l),
        o = n('M2mT'),
        c = n('zCf4'),
        s = n('MWbm'),
        u = n('mw9i'),
        m = n('0yYu'),
        d = n('/yvb'),
        y = n('rHpw'),
        p = i.a.i2209530
      function g(e) {
        var t = e.children,
          n = e.communityId,
          a = e.onSubmit,
          l = e.rightControl,
          i = e.screenType,
          y = e.secondaryBar,
          g = e.submitDisabled,
          h = e.subtitle,
          b = e.title,
          v = e.withBottomBorder,
          _ = e.withDetailOpen,
          k = Object(c.f)(),
          E = 'secondaryRoot' === i,
          C = '/i/communities/'.concat(n),
          S = ''.concat(C, '/tools'),
          F = E ? C : S,
          I = r.a.useCallback(
            function () {
              E ? k.replace(F) : k.goBack({ backLocation: F })
            },
            [F, k, E],
          )
        return r.a.createElement(
          o.a,
          {
            backLocation: F,
            onBackClick: I,
            rightControl: l,
            screenType: i,
            secondaryBar: y,
            showSubtitleOnWideDetail: !1,
            subtitle: h,
            title: b,
            withBottomBorder: v,
            withDetailOpen: _,
          },
          r.a.createElement(
            u.a,
            { style: f.contentRoot },
            r.a.createElement(s.a, { style: f.chilrenRoot }, t),
            a
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(m.a, null),
                  r.a.createElement(
                    u.a,
                    { style: f.buttonContainer },
                    r.a.createElement(d.a, { disabled: g, onPress: a, style: f.button, type: 'brandFilled' }, p),
                  ),
                )
              : null,
          ),
        )
      }
      var f = y.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(y.a.iPhoneOffsetBottom, ')'),
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
          return P
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('1Idg'),
        y = function (e, t) {
          return Object(s.C)(e, s.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: y }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.y)(s.h)
              },
              editRule: c.c.editRule,
              removeRule: c.c.removeRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_rule' }),
        g = n('k49u'),
        f = n('jHSc'),
        h = n('3XMw'),
        b = n.n(h),
        v = n('5FtR'),
        _ = n('OwKm'),
        k = n('AfjF'),
        E = n('MWbm'),
        C = n('/yvb'),
        S = n('jtO7'),
        F = n('4zmP'),
        I = n('eb3s'),
        w = n('rHpw'),
        T = b.a.h99020ef,
        K = b.a.i2209530,
        M = b.a.a1c93d73,
        x = b.a.f74a5adb,
        R = b.a.fbb0ed91,
        L = b.a.gea6cc19,
        O = b.a.hed35471,
        A = b.a.c8677445,
        j = b.a.c3a0d44e
      function P(e) {
        var t = i.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          l = e.createLocalApiErrorHandler,
          c = e.editRule,
          s = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          p = a.id_str,
          h = a.rules,
          b = i.a.useState(''),
          w = r()(b, 2),
          P = w[0],
          B = w[1],
          H = i.a.useState(''),
          N = r()(H, 2),
          U = N[0],
          z = N[1],
          V = i.a.useState(!1),
          q = r()(V, 2),
          W = q[0],
          X = q[1],
          J = i.a.useState(''),
          Q = r()(J, 2),
          G = Q[0],
          Y = Q[1],
          Z = i.a.useState(!1),
          $ = r()(Z, 2),
          ee = $[0],
          te = $[1],
          ne = i.a.useState(!1),
          ae = r()(ne, 2),
          re = ae[0],
          le = ae[1],
          ie = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              B(n), z(t), X(a)
            },
            [B, z, X],
          ),
          oe = i.a.useCallback(
            function () {
              var e = l({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), X(!1), []
                },
              })
              'string' == typeof d &&
                c(p, { ruleId: d, name: P, description: U })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, P, U, d, c, s, l],
          ),
          ce = i.a.useCallback(
            function () {
              var e = l({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), te(!1), []
                },
              })
              'string' == typeof d &&
                u(p, { ruleId: d })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, d, u, s, l],
          )
        if (!d || !m) return i.a.createElement(v.a, { to: '/i/communities/'.concat(p, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = i.a.createElement(
            C.a,
            {
              disabled: !W,
              onPress: function () {
                y ? le(!0) : oe()
              },
              size: 'small',
              type: 'brandFilled',
            },
            K,
          ),
          de = 1 === h.length,
          ye = t
            ? i.a.createElement(
                E.a,
                { style: D.delete },
                i.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: R,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          pe = de ? i.a.createElement(E.a, { style: D.callout }, i.a.createElement(F.a, { text: x })) : void 0,
          ge = ee
            ? i.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: L,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: ce,
                text: O,
              })
            : void 0,
          fe = re
            ? i.a.createElement(k.a, {
                onCancel: function () {
                  le(!1)
                },
                onConfirm: function () {
                  n(), oe(), le(!1)
                },
              })
            : void 0
        return i.a.createElement(
          f.b,
          { behavioralEventViewType: 'rules', history: s, rightControl: me, title: T },
          pe,
          i.a.createElement(_.a, { description: se || '', errorText: G, name: ue, onChange: ie }),
          ye,
          ge,
          fe,
        )
      }
      t.default = p(P)
      var D = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return P
      })
      var a = n('ddV6'),
        r = n.n(a),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        h = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        b = n.n(h),
        v = n('pXBW'),
        _ = n('6/RC'),
        k = n('UIzd'),
        E = n.n(k),
        C = n('kGix')
      n.d(t, 'a', function () {
        return C.a
      })
      var S = n('fs1G'),
        F = n('0KEI'),
        I = n('lU4h'),
        w = n.n(I),
        T = n('21nk'),
        K = n.n(T),
        M = n('bCEw'),
        x = n.n(M),
        R = n('Ud88'),
        L = n.n(R),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (e = t.call.apply(t, [this].concat(r))), f()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof v.a)) throw e
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
        })(b.a.Component),
        j = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = K()(t, n)
          return a({ fetchStatus: C.a.LOADED, data: r, error: null, retry: S.a })
        },
        P = function (e, t) {
          if (_.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                l = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                o = n.variables,
                c = x()(e),
                s = r()(c, 2),
                u = s[0],
                m = s[1],
                d = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                y = w()(o),
                p = r()(y, 1)[0],
                g = b.a.useCallback(
                  function () {
                    m(p, { fetchPolicy: 'network-only' })
                  },
                  [m, p],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    m(p, { fetchPolicy: l })
                  },
                  [l, m, p],
                ),
                u
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(O, { render: i }) },
                      b.a.createElement(
                        A,
                        { errorHandler: d(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: C.a.FAILED, error: t, data: null, retry: n })
                            : b.a.createElement(j, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var l = a.render,
              i = a.variables,
              o = L()(),
              c = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = w()(i),
              u = r()(s, 1)[0],
              m = n.get(o)
            if (m) return m
            var d = b.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return l({ fetchStatus: C.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (c(t.errorConfig.options || {})(e),
                        l({ fetchStatus: C.a.FAILED, data: null, error: e, retry: S.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(o, e).get.bind(n, o) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddRuleScreen', function () {
          return T
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(l),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          return Object(s.C)(e, s.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.y)(s.h)
              },
              createRule: c.c.createRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_ADD_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'add_rule' }),
        p = n('k49u'),
        g = n('jHSc'),
        f = n('3XMw'),
        h = n.n(f),
        b = n('OwKm'),
        v = n('AfjF'),
        _ = n('/yvb'),
        k = n('eb3s'),
        E = h.a.j560c8ea,
        C = h.a.i2209530,
        S = h.a.gaa3239a,
        F = h.a.a67445d5,
        I = h.a.fcbe0992,
        w = h.a.j24c37b2
      function T(e) {
        var t = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          l = e.createLocalApiErrorHandler,
          c = e.createRule,
          s = e.history,
          u = e.shouldShowRuleInformEducation,
          m = a.id_str,
          d = a.rules,
          y = i.a.useState(''),
          f = r()(y, 2),
          h = f[0],
          T = f[1],
          K = i.a.useState(''),
          M = r()(K, 2),
          x = M[0],
          R = M[1],
          L = i.a.useState(!1),
          O = r()(L, 2),
          A = O[0],
          j = O[1],
          P = i.a.useState(!1),
          D = r()(P, 2),
          B = D[0],
          H = D[1],
          N = i.a.useState(''),
          U = r()(N, 2),
          z = U[0],
          V = U[1],
          q = i.a.useState(!1),
          W = r()(q, 2),
          X = W[0],
          J = W[1],
          Q = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              V(''), T(n), R(t), j(a)
            },
            [T, R, j],
          ),
          G = i.a.useCallback(
            function () {
              H(!0)
              var e = l({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : S
                  return V(n), j(!1), []
                },
              })
              c(m, { name: h, description: x })
                .then(function () {
                  s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, h, x, c, s, l],
          ),
          Y = i.a.useCallback(
            function () {
              u ? J(!0) : G()
            },
            [G, u],
          ),
          Z = i.a.createElement(_.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= t,
          ee = i.a.createElement(k.a, {
            confirmButtonLabel: w,
            headline: F,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = X
            ? i.a.createElement(v.a, {
                onCancel: function () {
                  J(!1)
                },
                onConfirm: function () {
                  n(), G(), J(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : i.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: E },
              i.a.createElement(b.a, { description: '', errorText: z, name: '', onChange: Q }),
              te,
            )
      }
      t.default = y(T)
    },
    nmVb: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var r = a(n('yyPN'))
      e.exports = t.default
    },
    ogGF: function (e, t, n) {
      'use strict'
      var a,
        r = n('97Jx'),
        l = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        u = n('/yvb'),
        m = n('3XMw'),
        d = n.n(m),
        y = n('pwey'),
        p = (n('enFi'), n('jAXQ')),
        g = n.n(p),
        f = ['community'],
        h = d.a.b139b549,
        b = s.a.createElement(y.a, null),
        v = function (e) {
          var t = e.community,
            r = o()(e, f),
            i = g()(void 0 !== a ? a : (a = n('qre1')), t)
          if (!i || 'CommunityInvitesUnavailable' === i.invites_result.__typename) return null
          var c = '/i/communities/'.concat(i.rest_id, '/invite')
          return s.a.createElement(u.a, l()({ accessibilityLabel: h, icon: b, link: c, type: 'primaryText' }, r))
        }
      t.a = s.a.memo(v)
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return z
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        l = n('m3Bd'),
        i = n.n(l),
        o = n('VrFO'),
        c = n.n(o),
        s = n('Y9Ll'),
        u = n.n(s),
        m = n('1Pcy'),
        d = n.n(m),
        y = n('5Yy7'),
        p = n.n(y),
        g = n('2VqO'),
        f = n.n(g),
        h = n('KEM+'),
        b = n.n(h),
        v = (n('2G9S'), n('ERkP')),
        _ = n.n(v),
        k = n('38/B'),
        E = n('t62R'),
        C = n('/yvb'),
        S = n('piX5'),
        F = n('3XMw'),
        I = n.n(F),
        w = n('tI3i'),
        T = n.n(w),
        K = n('oQhu'),
        M = n('rHpw'),
        x = n('aITJ'),
        R = n('MWbm'),
        L = n('n5fo'),
        O = n('5emT'),
        A = n('Oib4'),
        j = n('WtWS'),
        P = n('ioan'),
        D = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        B = function (e) {
          return e.length
        },
        H = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B
          return t(e)
        },
        N = I.a.de540c32,
        U = I.a.b4abfdb3,
        z = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            c()(this, n),
              (a = t.call(this, e)),
              b()(d()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(d()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              b()(
                d()(a),
                '_getTextInputStyle',
                Object(K.a)(function (e) {
                  return [V.root, !e && V.disabled]
                }),
              ),
              b()(d()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              b()(d()(a), '_calculateLength', function (e) {
                return H(e, a.props.calculateLength)
              }),
              b()(d()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              b()(d()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  l,
                  i = a.props.type,
                  o =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (l = r.validity) ||
                    void 0 === l
                      ? void 0
                      : l.badInput
                return 'number' === i && '' === o && !0 === c
              }),
              b()(d()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              b()(d()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  l = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: l }), t && t(e)
              }),
              b()(d()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  l = a._calculateLength(r),
                  i = a._getActualCount(r),
                  o = a._getAdjustedMaxLength()
                void 0 !== o && r.length > o && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: l,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              b()(d()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
              }),
              b()(d()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  l = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !l || (e.preventDefault(), l(e))
              }),
              b()(d()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                x.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              b()(d()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                x.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              b()(d()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(d()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              b()(d()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  l = !!a,
                  i = 'string' == typeof e.value,
                  o = 'string' == typeof t
                T()(
                  !(!o && i && !l),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  T()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  T()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(d()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(d()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              b()(d()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              l = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(l),
                actualCount: B(l),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: l,
              }),
              a
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      a = t.onChange,
                      r = t.validLength,
                      l = t.value,
                      i = e.maxLength,
                      o = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === r && n === i && !!a === !!o && ('string' == typeof l) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
                      r = e.helperText,
                      l = e.style,
                      i = this.state.isFocused,
                      o = this._isFormInvalid()
                    return _.a.createElement(
                      R.a,
                      { style: [q.root, l] },
                      _.a.createElement(
                        R.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            S.a.border,
                            q.textInputFormStyle,
                            o && S.a.invalidBorderColor,
                            i && o && S.a.focusedBorderInvalid,
                            i && !o && S.a.focusedBorderValid,
                            !n && S.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          R.a,
                          { style: q.textInputFormWrapper },
                          _.a.createElement(
                            R.a,
                            { style: q.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        R.a,
                        { style: [q.sidePadding, q.underTextInputForm] },
                        _.a.createElement(
                          R.a,
                          { style: q.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          o && a ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      a = this._isLabelLarge()
                    return _.a.createElement(
                      E.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          q.textInputHeaderItem,
                          a && q.placeholderText,
                          !k.a.reducedMotionEnabled && q.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      a =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      l = (e.style, e.type, e.validLength, i()(e, D))
                    return _.a.createElement(
                      R.a,
                      { style: V.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        E.b,
                        { size: 'headline1', style: V.wrapper },
                        _.a.createElement(
                          P.a,
                          r()({}, l, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? _.a.createElement(
                          R.a,
                          { style: q.passwordVisibilityIconContainer },
                          _.a.createElement(C.a, {
                            accessibilityLabel: a ? U : N,
                            focusable: !0,
                            hoverLabel: { label: a ? U : N },
                            icon: a ? _.a.createElement(L.a, null) : _.a.createElement(O.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return _.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        E.b,
                        { color: 'gray700', size: 'subtext2', style: q.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return _.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        E.b,
                        { color: 'red500', size: 'subtext2', style: q.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      a = t && I.a.ia24dc8c(t),
                      r = I.a.ia24dc8c(e)
                    return _.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'polite', style: [q.textInputHeaderItem, q.displayCount] },
                      _.a.createElement(
                        E.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(r, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [q.icon, t && q.focusedIcon]
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(A.a, { style: [q.validationIcon, S.a.invalidColor] })
                      : _.a.createElement(j.a, { style: [q.validationIcon, S.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      a = e.value,
                      r = 'string' == typeof a ? H(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component)
      b()(z, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (z.propTypes = {})
      var V = M.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        q = M.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    pChJ: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityOriginationAttributes_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'UserResults',
            kind: 'LinkedField',
            name: 'creator_results',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: 'LinkedField',
                name: 'result',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiUser',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'User',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'dccf59f4f7179587525bc0082363441a',
      }
      t.default = a
    },
    'pd/v': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'restrictedMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
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
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  l,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      c,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
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
      ;(y.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (t.default = y)
    },
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var a = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = a
    },
    qre1: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityInviteButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'invites_result',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'b7ab87af666f9d231a6b2be83eed0762',
      }
      t.default = a
    },
    's8G+': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA')
      t.a = function (e) {
        var t = r.a.useContext(l.a).featureSwitches
        return r.a.useMemo(
          function () {
            return t.isTrue(e)
          },
          [e, t],
        )
      }
    },
    tFuX: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'openMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  l,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      c,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          l,
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
      ;(y.hash = 'ea1908fb41cb57016d070125122b615d'), (t.default = y)
    },
    tgdH: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }],
        kind: 'Fragment',
        metadata: null,
        name: 'communityPeopleSliceItem_userResult',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'result',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              {
                kind: 'InlineFragment',
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                  {
                    alias: null,
                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                    kind: 'ScalarField',
                    name: 'community_role',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiUser',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'profile_image_url_https',
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                    ],
                    storageKey: null,
                  },
                ],
                type: 'User',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'UserResults',
        abstractKey: null,
        hash: '8207e707560a4795bb4bc55f48b8501c',
      }
      t.default = a
    },
    tnnC: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      t.default = a
    },
    tot2: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityPeopleScreen', function () {
          return x
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('vrRf'), n('ERkP')),
        i = n.n(l),
        o = n('+Kfv'),
        c = n('es0u'),
        s = n('LgBi'),
        u = n('UZ0O'),
        m = n('1Idg'),
        d = n('eSoz'),
        y = n('rxPX'),
        p = n('0KEI'),
        g = Object(y.a)()
          .propsFromState(function () {
            return { community: m.a, communityId: m.c, screenName: m.i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        f = n('3XMw'),
        h = n.n(f),
        b = n('gDCe'),
        v = n('yoO3'),
        _ = n('VS6U'),
        k = n('k/OQ'),
        E = n('krnS'),
        C = n('zCf4'),
        S = h.a.h5245afa,
        F = h.a.dc6ce7b4,
        I = h.a.f8321d82,
        w = h.a.ga2aa43c,
        T = { viewType: 'community' },
        K = { viewType: 'all' },
        M = { viewType: 'moderators' },
        x = i.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            m = e.history,
            d = e.location
          i.a.useEffect(
            function () {
              n && l(n).catch(a())
            },
            [n, a, l],
          )
          var y = i.a.useState(!1),
            p = r()(y, 2),
            g = p[0],
            f = p[1],
            h = (null == d ? void 0 : d.pathname) && d.pathname.indexOf('members') > 0,
            x = h ? F : w,
            R = i.a.useMemo(
              function () {
                return n
                  ? [
                      { to: { pathname: '/i/communities/'.concat(n, '/members'), state: d.state }, label: I, key: I },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: d.state },
                        label: w,
                        key: w,
                      },
                    ]
                  : []
              },
              [n, d.state],
            ),
            L = n
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(u.a, { community: t, communityId: n, onIsSearchingChange: f }),
                  g
                    ? null
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(k.a, { accessibilityLabel: x, links: R }),
                        i.a.createElement(
                          C.d,
                          null,
                          i.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                            i.a.createElement(
                              o.a,
                              { behavioralEventContext: K },
                              i.a.createElement(E.b, {
                                communityId: n,
                                mode: E.a.Members,
                                userRole: null == t ? void 0 : t.role,
                              }),
                            ),
                          ),
                          i.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                            i.a.createElement(
                              o.a,
                              { behavioralEventContext: M },
                              i.a.createElement(b.a, { community: t }),
                              i.a.createElement(E.b, {
                                communityId: n,
                                mode: E.a.Moderators,
                                userRole: null == t ? void 0 : t.role,
                              }),
                            ),
                          ),
                        ),
                      ),
                )
              : null
          return i.a.createElement(
            o.a,
            { behavioralEventContext: T },
            i.a.createElement(
              v.a,
              { behavioralEventViewType: 'members' },
              i.a.createElement(_.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: S,
                history: m,
                primaryContent: L,
                rightControl: h && n ? i.a.createElement(s.a, { communityId: n }) : null,
                sidebarContent: i.a.createElement(c.a, null),
                title: F,
              }),
            ),
          )
        }),
        R = g(x)
      t.default = R
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesScreen', function () {
          return et
        })
      var a,
        r,
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        h = (n('2G9S'), n('vrRf'), n('ERkP')),
        b = n.n(h),
        v = n('+Kfv'),
        _ = n('es0u'),
        k = n('cL2e'),
        E = n('1Idg'),
        C = n('li/m'),
        S = n('G6rE'),
        F = n('rxPX'),
        I = n('0KEI'),
        w = function (e, t) {
          var n = E.i(e, t)
          if (n) return S.e.selectByScreenName(e, n)
        },
        T = Object(F.a)()
          .propsFromState(function () {
            return { hasCommunityMemberships: C.d, screenName: E.i, user: w }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: S.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        K = n('3XMw'),
        M = n.n(K),
        x = n('5oT/'),
        R = n('/yvb'),
        L = n('rHpw'),
        O = (n('enFi'), n('jAXQ')),
        A = n.n(O),
        j = M.a.a226497c,
        P = b.a.memo(function (e) {
          return 'CommunityCreateAction' !== A()(void 0 !== a ? a : (a = n('zum0')), e.createActionResult).__typename
            ? null
            : b.a.createElement(R.a, {
                icon: b.a.createElement(x.a, { accessibilityLabel: j, style: D.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        D = L.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        B = b.a.memo(P),
        H = n('Fr3L'),
        N = n('IAZG'),
        U = { context: 'CommunityCreateButton' },
        z = void 0 !== r ? r : (r = n('S91Q')),
        V = function (e) {
          var t,
            n =
              null === (t = Object(N.a)(z, {}, { fetchPolicy: 'store-and-network' }).viewer) || void 0 === t
                ? void 0
                : t.create_community_action_result
          return n ? b.a.createElement(B, { createActionResult: n }) : null
        },
        q = function (e) {
          return b.a.createElement(H.a, { errorConfig: U }, b.a.createElement(V, null))
        },
        W = b.a.memo(q),
        X = n('GOQE'),
        J = (n('z84I'), n('M+/F'), n('yiKp')),
        Q = n.n(J),
        G = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        Y = n('YeIG'),
        Z = 'community-thumbnail-image',
        $ = 'community-thumbnail-name-container',
        ee = n('MWbm'),
        te = n('X00g'),
        ne = n('htQn'),
        ae = n('9Xij'),
        re = n('TIdA'),
        le = n('A91F'),
        ie = n('t62R'),
        oe = { type: 'serversideContextKey', serversideContextType: 'community' },
        ce = L.a.create(function (e) {
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
              width: 'calc(('.concat(L.a.theme.spaces.space36, ' * 3) + ').concat(L.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        se = function (e) {
          var t = b.a.useContext(G.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            r = n.media,
            l = n.name,
            i = n.theme,
            o = b.a.useMemo(
              function () {
                return { clientEntity: Q()(Q()({}, oe), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(Y.a)(null == r ? void 0 : r.image) || !l) return null
          var c = null == r ? void 0 : r.image,
            s = null == r ? void 0 : r.crop,
            u = L.a.theme.aspectRatios.communityBanner,
            m = t ? te.a.getCommunityBackgroundColor(i) : L.a.theme.colors.translucentBlack77
          return c
            ? b.a.createElement(
                v.a,
                { behavioralEventContext: o },
                b.a.createElement(
                  ne.a,
                  { link: '/i/communities/'.concat(a), style: ce.root },
                  b.a.createElement(
                    ee.a,
                    { style: ce.container },
                    b.a.createElement(
                      ae.a,
                      { ratio: u },
                      b.a.createElement(re.a, {
                        accessibilityLabel: '',
                        aspectMode: le.a.exact(u),
                        backgroundColor: L.a.theme.colors.gray300,
                        cropCandidates: s,
                        image: c,
                        testID: Z,
                      }),
                    ),
                    b.a.createElement(
                      ee.a,
                      { style: [ce.name, { backgroundColor: m }], testID: $ },
                      b.a.createElement(
                        ie.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        l.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        ue = n('eSoz'),
        me = n('o3oN'),
        de = function (e) {
          var t = Object(me.c)(e)
          return ue.c.selectMany(e, t)
        },
        ye = Object(F.a)()
          .propsFromState(function () {
            return { communities: de, fetchStatus: me.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: me.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        pe = n('kGix'),
        ge = n('6iuV'),
        fe = n('rC8y'),
        he = M.a.d228a9a0,
        be = b.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            r = e.fetchStatus,
            l = e.location.pathname
          b.a.useEffect(
            function () {
              r === pe.a.NONE && a().catch(n())
            },
            [n, a, r],
          )
          var i = b.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return b.a.createElement(se, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(Y.a)(t)
            ? null
            : b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(ge.a, { style: [ve.paddingHorizontal, ve.bottomBorder] }, i),
                t.length > 10 &&
                  b.a.createElement(
                    ee.a,
                    { style: ve.bottomBorder },
                    b.a.createElement(fe.a, { link: '/'.concat(l, '/memberships'), text: he }),
                  ),
              )
        }),
        ve = L.a.create(function (e) {
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
        _e = ye(be),
        ke = n('WpDa'),
        Ee = n('ZNT5'),
        Ce = Object(Ee.a)({
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
          formatResponse: ke.a,
        }),
        Se = n('OUEC'),
        Fe = n('dwig'),
        Ie = n('0+qk'),
        we = n('oQhu'),
        Te = n('7BdX'),
        Ke = n('fTQJ'),
        Me = n('QRqA'),
        xe = n('FIs5'),
        Re = n('mw9i'),
        Le = M.a.c63602d3,
        Oe = M.a.d7346631,
        Ae = M.a.fbd12fea,
        je = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(u()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              f()(
                u()(e),
                '_getModule',
                Object(we.a)(function () {
                  return Ce
                }),
              ),
              f()(u()(e), '_renderEmptyTimeline', function () {
                return b.a.createElement(xe.a, { header: Oe, message: Ae })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    a = e.isLoggedInUser,
                    r = e.location,
                    l = this._getModule(),
                    i = this._c9sParticipationEnabled && t ? b.a.createElement(Ie.a, { history: n }) : null
                  return a && l
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(Me.a, null),
                        b.a.createElement(
                          Fe.a,
                          { container: Re.a, fab: i },
                          b.a.createElement(_e, { location: r }),
                          b.a.createElement(Ke.a, {
                            entryConfiguration: Se.a,
                            module: l,
                            prerollDisplayLocation: Te.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: Le,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      f()(je, 'contextType', G.a)
      var Pe = je,
        De = n('hqKg'),
        Be = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        He = function () {
          return Object(De.createSelector)(Be, function (e) {
            return e
              ? (function (e) {
                  return Object(Ee.a)({
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
                    formatResponse: ke.a,
                  })
                })(e)
              : void 0
          })
        },
        Ne = Object(F.a)()
          .propsFromState(function () {
            return { urtModule: He() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Ue = n('yoO3'),
        ze = M.a.c63602d3,
        Ve = M.a.d7346631,
        qe = M.a.hb01fe46,
        We = Ne(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                f()(u()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? b.a.createElement(xe.a, { header: Ve, message: qe }) : null
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.urtModule
                    return e
                      ? b.a.createElement(
                          Ue.a,
                          { behavioralEventViewType: 'all' },
                          b.a.createElement(Ke.a, {
                            entryConfiguration: Se.a,
                            module: e,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyState,
                            title: ze,
                          }),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(b.a.Component),
        ),
        Xe = n('5FtR'),
        Je = n('Y6L+'),
        Qe = n('VS6U'),
        Ge = n('zCf4'),
        Ye = M.a.h02a6fe5,
        Ze = M.a.c63602d3,
        $e = { viewType: 'communities' },
        et = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(u()(e), '_renderRightControl', function () {
                return b.a.createElement(
                  ee.a,
                  { style: tt.rightControl },
                  b.a.createElement(k.b, null),
                  b.a.createElement(W, null),
                )
              }),
              f()(u()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  a = t.history,
                  r = t.location,
                  l = t.user,
                  i = e._isLoggedInUser()
                return b.a.createElement(
                  Ge.d,
                  null,
                  b.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Je.J, '/communities') },
                    b.a.createElement(Pe, { hasCommunityMemberships: n, history: a, isLoggedInUser: i, location: r }),
                  ),
                  b.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Je.J, '/communities/memberships') },
                    b.a.createElement(We, { isLoggedInUser: i, user: l }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.fetchOneUserByScreenNameIfNeeded,
                  l = n.screenName
                l && r(l).catch(a(X.a))
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  var e = this.props.history
                  if (this._isLoggedInUser()) {
                    var t = this._isMembershipsView() ? Ze : Ye
                    return b.a.createElement(
                      v.a,
                      { behavioralEventContext: $e },
                      b.a.createElement(Qe.a, {
                        backLocation: '/',
                        history: e,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: b.a.createElement(_.a, null),
                        title: t,
                      }),
                    )
                  }
                  return b.a.createElement(Xe.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      f()(et, 'contextType', G.a)
      var tt = L.a.create(function (e) {
          return { rightControl: { color: e.colors.text, display: 'flex', flexDirection: 'row' } }
        }),
        nt = T(et)
      t.default = nt
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('5Yy7'),
        c = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        m = n('KEM+'),
        d = n.n(m),
        y = (n('z84I'), n('ERkP')),
        p = n.n(y),
        g = n('yiKp'),
        f = n.n(g),
        h = n('1Pcy'),
        b = n.n(h),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        _ = n('cm6r'),
        k = n('rHpw'),
        E = n('k/Ka'),
        C = n('MWbm'),
        S = n('x0mb'),
        F = n('IMYl'),
        I = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              d()(b()(e), '_radioRef', p.a.createRef()),
              d()(b()(e), '_handleChange', function () {
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
                    a = e.isSelected,
                    r = e.name,
                    l = e.style,
                    i = k.a.theme.colors[n],
                    o = v.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    C.a,
                    { style: [w.container, l] },
                    p.a.createElement(
                      _.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [w.choice, w.choiceContainer] },
                      p.a.createElement(S.a, { style: [w.choice, { color: i }] }),
                      Object(E.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: a,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: w.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    a &&
                      p.a.createElement(
                        C.a,
                        { style: [w.choice, w.checkMarkContainer] },
                        p.a.createElement(F.a, { style: [w.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        w = k.a.create(function (e) {
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
            nativeControl: f()(
              f()({}, k.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        T = I,
        K = 1,
        M = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(K, '_LABEL')), (K += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    r = t.layout,
                    l = t.onChange,
                    i = t.options,
                    o = t.value,
                    c = 'two-rows' === r,
                    s = [x.root, c && x.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    C.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return p.a.createElement(T, {
                        accessibilityLabel: n,
                        autoFocus: a && o === r,
                        colorName: r,
                        isSelected: o === r,
                        key: r,
                        name: e._colorPickerId,
                        onChange: l,
                        style: u,
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      d()(M, 'defaultProps', { layout: 'one-row' })
      var x = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = M
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        l = n('N9G2'),
        i = n('BIH/'),
        o = n('lhaq'),
        c = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = l(this),
              n = i(t),
              a = c(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : o(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    w9f9: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'moderators_slice',
                    args: [(l = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityModerators_Query_moderators_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (i = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (o = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [l, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'moderators_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiUser',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'profile_image_url_https',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'protected',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'screen_name',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'verified',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  },
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: c,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityModerators_Query_moderators_slice',
                    kind: 'LinkedHandle',
                    name: 'moderators_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'lxb2peKfpD2yYwE4T2_Muw',
            metadata: { sliceInfoPath: ['community', 'moderators_slice', 'slice_info'] },
            name: 'moderatorsSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (t.default = u)
    },
    xPe1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitySettingsRouter', function () {
          return at
        })
      n('KqXw'), n('WNMA'), n('1t7P'), n('jQ/y'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        l = n('v6aA'),
        i = n('rxPX'),
        o = Object(i.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        c = n('ddV6'),
        s = n.n(c),
        u = n('jTgF'),
        m = n('AspN'),
        d = n('eSoz'),
        y = n('0KEI'),
        p = function (e, t) {
          var n = t.localMediaId,
            a = n && isFinite(n) ? m.k(e, n) : []
          return s()(a, 1)[0]
        },
        g = Object(i.a)()
          .propsFromState(function () {
            return { localMedia: p }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: d.a,
              removeLocalMediaId: d.e,
              editCommunityBanner: d.d,
              removeBanner: d.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        f = n('3XMw'),
        h = n.n(f),
        b = n('Nh1N'),
        v = n('JAeQ'),
        _ = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        k = Object(_.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(5), n.e(8), n.e(179)]).then(n.bind(null, 'P68U'))
          },
        }),
        E = n('eyty'),
        C = n('MWbm'),
        S = n('rHpw'),
        F = n('TIdA'),
        I = n('A91F'),
        w = n('4zmP'),
        T = n('eb3s'),
        K = h.a.a49f884d,
        M = h.a.ea965b81,
        x = h.a.gea6cc19,
        R = h.a.cfd2f35d,
        L = h.a.j35d3ad6,
        O = h.a.f1e8fb21,
        A = h.a.fc2a5c92,
        j = h.a.e405ec21
      var P,
        D,
        B,
        H = S.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        N = g(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            l = e.editCommunityBanner,
            i = e.hasCustomMedia,
            o = e.localMedia,
            c = e.localMediaId,
            m = e.media,
            d = e.removeBanner,
            y = e.removeLocalMediaId,
            p = r.a.useState(!1),
            g = s()(p, 2),
            f = g[0],
            h = g[1],
            _ = r.a.useState(!1),
            P = s()(_, 2),
            D = P[0],
            B = P[1],
            N = r.a.useState(!1),
            U = s()(N, 2),
            z = U[0],
            V = U[1],
            q = r.a.useState(!1),
            W = s()(q, 2),
            X = W[0],
            J = W[1],
            Q = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return V(!1), J(Boolean(e)), e ? t(n, e) : y(n)
            },
            $ = Q ? r.a.createElement(F.a, { accessibilityLabel: K, aspectMode: I.a.exact(G), image: Q }) : null
          return r.a.createElement(
            r.a.Fragment,
            null,
            D
              ? r.a.createElement(
                  C.a,
                  { style: H.error },
                  r.a.createElement(w.a, { Icon: b.a, headline: A, text: D, type: 'danger' }),
                )
              : null,
            r.a.createElement(k, {
              accessibilityLabel: M,
              aspectRatio: G,
              currentContent: $,
              location: E.d.CommunityBanner,
              mediaItem: z ? o : void 0,
              onChange: function (e) {
                var t = s()(e, 1)[0]
                B(!1), Z(t)
              },
              onFailure: function () {
                B(j), y(n)
              },
              onRemove:
                i || z
                  ? function () {
                      Z(), h(!0)
                    }
                  : void 0,
            }),
            X && o
              ? r.a.createElement(v.a, {
                  aspectRatio: G,
                  media: o,
                  onCancel: Z,
                  onCropDone: function (e) {
                    J(!1),
                      c
                        ? (V(!0),
                          l(n, { mediaId: c, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(j) : Y(e)
                          }))
                        : B(j)
                  },
                })
              : null,
            f
              ? r.a.createElement(T.a, {
                  cancelButtonLabel: R,
                  confirmButtonLabel: L,
                  confirmButtonType: 'destructiveFilled',
                  headline: x,
                  onCancel: function () {
                    h(!1)
                  },
                  onConfirm: function () {
                    d(n).catch(Y), h(!1)
                  },
                  text: O,
                })
              : null,
          )
        }),
        U = Object(i.a)()
          .propsFromActions(function () {
            return {
              editAccess: d.c.editAccess,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        z = n('yoO3'),
        V = n('mWs5'),
        q = n('3JAx'),
        W = h.a.f713fbd1,
        X = [
          { label: h.a.fd00a769, value: 'Public', helpText: h.a.d0784408 },
          { label: h.a.ce0523a8, value: 'Closed', helpText: h.a.ccfafe8c },
        ],
        J = U(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            l = e.history,
            i = t.id_str,
            o = r.a.useState(t.access),
            c = s()(o, 2),
            u = c[0],
            m = c[1],
            d = r.a.useCallback(
              function () {
                a(i, { access: u })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [i, u, a, l, n],
            ),
            y = u !== t.access
          return r.a.createElement(
            z.a,
            null,
            r.a.createElement(
              V.a,
              { communityId: i, onSubmit: d, submitDisabled: !y, title: W },
              r.a.createElement(
                C.a,
                { style: Q.root },
                r.a.createElement(q.a, {
                  name: 'membershipSetting',
                  onChange: function (e, t) {
                    m(t)
                  },
                  options: X,
                  value: u,
                }),
              ),
            ),
          )
        }),
        Q = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        G = n('n0Rl'),
        Y = n('k49u'),
        Z = (n('849X'), n('TJCb'), n('uDfI')),
        $ = (n('yH/f'), n('I/KZ')),
        ee = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        te = (n('enFi'), n('9SqB')),
        ne = n.n(te),
        ae = void 0 !== P ? P : (P = n('tFuX')),
        re = void 0 !== D ? D : (D = n('pd/v')),
        le = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case $.a.Open:
                t = { __typename: $.a.Open }
                break
              case $.a.Restricted:
                t = {
                  __typename: $.a.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        ie = n('zCf4'),
        oe = n('Hsf0'),
        ce = n.n(oe),
        se = void 0 !== B ? B : (B = n('tnnC'))
      var ue,
        me,
        de = n('jAXQ'),
        ye = n.n(de),
        pe = h.a.f713fbd1,
        ge = h.a.c5d1634d,
        fe = h.a.b983f9e0,
        he = h.a.fc2a5c92,
        be = h.a.a1c93d73,
        ve = void 0 !== ue ? ue : (ue = n('1tGk')),
        _e = function (e) {
          var t,
            n,
            a,
            l,
            i,
            o,
            c,
            u,
            m,
            p,
            g,
            f,
            v,
            _ = e.community,
            k = ye()(ve, _),
            E = k.membership_settings,
            S = k.rest_id,
            F = (function (e) {
              var t = ce()(se, e)
              switch (t.__typename) {
                case $.a.Restricted:
                  return { access: $.a.Restricted, invitesPolicy: t.invites_policy }
                case $.a.Open:
                  return { access: $.a.Open, invitesPolicy: $.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            I = r.a.useState(),
            K = s()(I, 2),
            M = K[0],
            x = K[1],
            R =
              ((t = ne()(ae)),
              (n = s()(t, 2)),
              (a = n[0]),
              (l = n[1]),
              (i = ne()(re)),
              (o = s()(i, 2)),
              (c = o[0]),
              (u = o[1]),
              (m = Object(Z.c)()),
              r.a.useCallback(
                function (e, t) {
                  return l || u
                    ? Promise.reject(new Error('Already updating membership settings'))
                    : new Promise(function (n, r) {
                        var l = t.access,
                          i = t.invitesPolicy
                        l === $.a.Open
                          ? a({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var t = le(e.community_membership_settings_open_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: r,
                            })
                          : l === $.a.Restricted &&
                            c({
                              variables: {
                                communityId: e,
                                restrictedMembershipSettings: { invites_policy: i, join_approval_policy: ee.Moderator },
                              },
                              onCompleted: function (e) {
                                var t = le(e.community_membership_settings_restricted_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: r,
                            })
                      })
                },
                [a, c, m, l, u],
              )),
            L = Object(ie.f)(),
            O = r.a.useState(),
            A = s()(O, 2),
            j = A[0],
            P = A[1],
            D = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            B = Object($.e)(F),
            H = s()(B, 2),
            N = H[0],
            U = H[1],
            z = r.a.useCallback(
              function () {
                var e = D({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : be
                    return P(n), []
                  },
                })
                R(S, N)
                  .then(function () {
                    L.goBack({ backLocation: '/i/communities/'.concat(S, '/tools/settings') })
                  })
                  .catch(e)
              },
              [S, D, L, N, R],
            ),
            q = r.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === $.a.Restricted && t.access === $.a.Open) return h.a.daedd9fa
                })(F, N)
                e ? x(e) : z()
              },
              [F, N, z],
            ),
            W = r.a.useCallback(function () {
              return x(void 0)
            }, []),
            X =
              ((g = N),
              (f = (p = F).access !== g.access),
              (v = p.access === $.a.Restricted && p.invitesPolicy !== g.invitesPolicy),
              !(f || v)),
            J = j
              ? r.a.createElement(
                  C.a,
                  { style: ke.error },
                  r.a.createElement(w.a, { Icon: b.a, headline: he, text: j, type: 'danger' }),
                )
              : void 0
          return r.a.createElement(
            V.a,
            { communityId: S, onSubmit: q, submitDisabled: X, title: pe },
            J,
            r.a.createElement($.d, { setters: U, state: N }),
            M &&
              r.a.createElement(T.a, {
                confirmButtonLabel: ge,
                confirmButtonType: 'primary',
                headline: fe,
                onCancel: W,
                onConfirm: z,
                text: M,
              }),
          )
        },
        ke = S.a.create(function (e) {
          return { error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ee = n('v//M'),
        Ce = void 0 !== me ? me : (me = n('PbB6')),
        Se = Object(G.b)(Ce, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Fe = function (e) {
          var t = { communityId: e.communityId }
          return r.a.createElement(Se, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                l = null == t ? void 0 : t.community
              return r.a.createElement(Ee.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return l ? r.a.createElement(_e, { community: l }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ie = n('ROT1'),
        we = Object(i.a)()
          .propsFromActions(function () {
            return {
              editName: d.c.editName,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Te = h.a.h3c0f1a2,
        Ke = h.a.fc2a5c92,
        Me = h.a.cb5e6510
      var xe = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Re = we(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            l = e.history,
            i = t.id_str,
            o = t.name,
            c = r.a.useState(o),
            u = s()(c, 2),
            m = u[0],
            d = u[1],
            y = r.a.useState(!1),
            p = s()(y, 2),
            g = p[0],
            f = p[1],
            h = r.a.useState(void 0),
            v = s()(h, 2),
            _ = v[0],
            k = v[1],
            E = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Me
                    return k(n), f(!0), []
                  },
                })
                a(i, { name: m })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, m, a, l, n],
            )
          return r.a.createElement(
            z.a,
            null,
            r.a.createElement(
              V.a,
              { communityId: i, onSubmit: E, submitDisabled: g, title: Te },
              _
                ? r.a.createElement(
                    C.a,
                    { style: xe.error },
                    r.a.createElement(w.a, { Icon: b.a, headline: Ke, text: _, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(Ie.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        Le = n('U0Qk'),
        Oe = Object(i.a)()
          .propsFromActions(function () {
            return {
              editPurpose: d.c.editPurpose,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        Ae = h.a.a895549f,
        je = h.a.fc2a5c92,
        Pe = h.a.ced22929
      var De = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Be = Oe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            l = e.history,
            i = t.description,
            o = t.id_str,
            c = r.a.useState(i || ''),
            u = s()(c, 2),
            m = u[0],
            d = u[1],
            y = r.a.useState(!1),
            p = s()(y, 2),
            g = p[0],
            f = p[1],
            h = r.a.useState(void 0),
            v = s()(h, 2),
            _ = v[0],
            k = v[1],
            E = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Pe
                    return k(n), f(!0), []
                  },
                })
                a(o, { purpose: m })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, m, a, l, n],
            )
          return r.a.createElement(
            z.a,
            null,
            r.a.createElement(
              V.a,
              { communityId: o, onSubmit: E, submitDisabled: g, title: Ae },
              _
                ? r.a.createElement(
                    C.a,
                    { style: De.error },
                    r.a.createElement(w.a, { Icon: b.a, headline: je, text: _, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(Le.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        He = n('Ig1G'),
        Ne = n('x0mb'),
        Ue = n('5FtR'),
        ze = n('t62R'),
        Ve = n('X00g'),
        qe = n('6vad'),
        We = n('csss'),
        Xe = n('0yYu'),
        Je = h.a.bb081ea1,
        Qe = h.a.h3e55b40,
        Ge = h.a.j8af8ea9,
        Ye = h.a.d5f01115,
        Ze = h.a.c3c04b70,
        $e = { Closed: h.a.ce0523a8, Public: h.a.fd00a769 },
        et = h.a.f4a98e9e,
        tt = h.a.f713fbd1,
        nt = function (e) {
          var t = e.children
          return r.a.createElement(ze.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        at = function (e) {
          var t = e.community,
            n = e.history,
            a = e.match,
            i = t.access,
            o = t.description,
            c = t.hasCustomMedia,
            s = t.id_str,
            u = t.localMediaId,
            m = t.media,
            d = t.membership_settings,
            y = t.name,
            p = t.theme,
            g = r.a.useContext(l.a).featureSwitches,
            f = g.isTrue('c9s_edit_community_name_enabled'),
            h = g.isTrue('c9s_edit_community_description_enabled'),
            b = g.isTrue('c9s_edit_community_membership_settings_enabled'),
            v = g.isTrue('c9s_membership_settings_enabled'),
            _ = g.isTrue('c9s_edit_community_banner_enabled'),
            k = g.isTrue('c9s_edit_community_theme_enabled'),
            E = a.url,
            C = r.a.useMemo(
              function () {
                return v ? (d.__typename === $.a.Open ? $e.Public : $e.Closed) : $e[i]
              },
              [i, v, d.__typename],
            ),
            S = Object(He.e)(t),
            F = Ve.a.getCommunityThemeDisplayName(S),
            I = Ve.a.getCommunityBackgroundColor(p)
          return r.a.createElement(
            ie.d,
            null,
            f
              ? r.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  r.a.createElement(Re, { community: t, history: n }),
                )
              : null,
            h
              ? r.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  r.a.createElement(Be, { community: t, history: n }),
                )
              : null,
            v
              ? r.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  r.a.createElement(Fe, { communityId: s }),
                )
              : b
              ? r.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  r.a.createElement(J, { community: t, history: n }),
                )
              : null,
            r.a.createElement(
              ie.b,
              { exact: !0, path: ''.concat(E, '/') },
              r.a.createElement(
                z.a,
                null,
                r.a.createElement(
                  V.a,
                  { communityId: s, screenType: 'primaryDetail', title: Je },
                  _ ? r.a.createElement(N, { communityId: s, hasCustomMedia: c, localMediaId: u, media: m }) : null,
                  r.a.createElement(qe.b, { text: et }),
                  r.a.createElement(We.a, {
                    description: r.a.createElement(nt, null, y),
                    label: Qe,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  r.a.createElement(We.a, {
                    description: o ? r.a.createElement(nt, null, o) : void 0,
                    label: Ye,
                    link: h ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? r.a.createElement(We.a, {
                        description: r.a.createElement(nt, null, F),
                        label: Ze,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return r.a.createElement(Ne.a, { style: [{ color: I }, rt.themeIcon] })
                        },
                      })
                    : null,
                  v || b
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(Xe.a, null),
                        r.a.createElement(qe.b, { text: tt }),
                        r.a.createElement(We.a, {
                          description: r.a.createElement(nt, null, C),
                          label: Ge,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            r.a.createElement(ie.b, null, r.a.createElement(Ue.a, { to: ''.concat(E, '/') })),
          )
        },
        rt =
          ((t.default = o(at)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    xvzJ: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        l = n('yiKp'),
        i = n.n(l),
        o = n('ddV6'),
        c = n.n(o),
        s = (n('yH/f'), n('2G9S'), n('ERkP')),
        u = n.n(s),
        m = n('1YZw'),
        d = n('v6aA'),
        y = n('Ig1G'),
        p = n('uDfI'),
        g = n('CxAY'),
        f = n('yrzJ'),
        h = n('mjJ+'),
        b = n('IG7M'),
        v = n('eb3s'),
        _ = (n('enFi'), n('9SqB')),
        k = n.n(_),
        E = n('3XMw'),
        C = n.n(E),
        S = n('Lsrn'),
        F = n('k/Ka'),
        I = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [S.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M21.248 10.242c-.098 0-.196.02-.287.057-.09.038-.173.094-.243.163-.07.07-.125.153-.162.244-.038.09-.057.189-.057.287v1.839c.012 1.1-.195 2.19-.608 3.21-.414 1.019-1.026 1.945-1.8 2.726-.698-.957-1.61-1.736-2.665-2.275-1.055-.538-2.22-.821-3.405-.825h-.04c-1.185.003-2.353.286-3.408.824-1.055.539-1.968 1.319-2.666 2.276-.774-.78-1.386-1.707-1.799-2.727-.413-1.018-.62-2.11-.608-3.209V4.705c3.213-1.64 6.832-2.318 10.421-1.949.098.011.198.003.293-.024.095-.028.183-.074.26-.136.077-.062.14-.139.187-.226.047-.087.076-.183.085-.281.02-.198-.038-.396-.163-.55-.125-.155-.306-.254-.504-.275-4.04-.414-8.113.397-11.686 2.329-.119.064-.218.16-.287.275-.07.116-.106.249-.106.384v8.58c-.009 1.431.296 2.848.893 4.149.597 1.3 1.472 2.455 2.563 3.382.062.085.142.156.234.208h.012c1.8 1.47 3.888 2.544 6.13 3.155.111.027.227.027.338 0 2.242-.609 4.33-1.682 6.13-3.151h.015c.092-.052.171-.123.233-.209 1.092-.927 1.966-2.082 2.563-3.384.596-1.302.9-2.719.89-4.151v-1.84c0-.099-.02-.196-.058-.287-.038-.091-.093-.174-.163-.244s-.153-.124-.244-.162c-.091-.037-.19-.056-.288-.056zM12 22.227c-1.793-.499-3.476-1.331-4.96-2.453.547-.806 1.285-1.465 2.147-1.92.863-.454 1.823-.69 2.798-.686h.036c.974-.003 1.934.232 2.795.687.862.454 1.599 1.113 2.146 1.918-1.485 1.123-3.168 1.955-4.962 2.454zM12 6C9.936 6 8.52 7.369 8.21 9.66c-.151.6-.172 1.226-.061 1.835.111.609.352 1.187.705 1.695.417.394.914.692 1.457.875.543.183 1.12.246 1.69.185.569.06 1.144-.002 1.687-.185.542-.183 1.039-.481 1.455-.874.354-.508.594-1.087.705-1.696.111-.609.09-1.235-.06-1.835C15.475 7.369 14.06 6 12 6zm2.014 6.2c-.282.22-.606.382-.952.477-.345.094-.706.119-1.062.073-.356.046-.717.022-1.063-.073-.347-.094-.67-.256-.954-.477-.388-.715-.49-1.552-.283-2.339.142-1.077.66-2.361 2.3-2.361 1.641 0 2.155 1.284 2.3 2.361.205.788.102 1.624-.288 2.339h.002zm8.836-9.915L21.136 4l1.714 1.715c.133.142.205.33.201.524-.003.195-.082.38-.22.518-.137.137-.322.216-.516.22-.195.003-.383-.07-.525-.202l-1.715-1.714-1.715 1.714c-.069.074-.151.133-.243.174-.092.04-.192.063-.292.065-.101.001-.201-.017-.294-.055-.094-.038-.179-.094-.25-.165-.071-.071-.127-.156-.165-.25-.038-.093-.056-.193-.054-.294.001-.1.023-.2.064-.292.041-.092.1-.174.174-.243L19.014 4 17.3 2.285c-.073-.069-.133-.151-.174-.243-.04-.092-.063-.192-.064-.292-.002-.101.016-.201.054-.295.038-.093.094-.178.165-.25.071-.07.156-.126.25-.164.093-.038.193-.056.294-.055.1.002.2.024.292.065.092.041.174.1.243.174l1.715 1.714 1.715-1.714c.142-.133.33-.205.525-.201.194.003.38.082.517.22.137.137.216.322.22.516.003.195-.07.383-.202.525z',
              }),
            ),
          )
        }
      I.metadata = { width: 24, height: 24 }
      var w = I,
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [S.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M21.248 10.242c-.098 0-.196.02-.287.057-.09.038-.173.094-.243.163-.07.07-.125.153-.162.244-.038.091-.057.189-.057.287v1.839c.012 1.1-.195 2.19-.608 3.21-.414 1.019-1.026 1.945-1.8 2.726-.698-.957-1.61-1.736-2.665-2.275-1.055-.538-2.22-.821-3.405-.825h-.04c-1.185.003-2.353.286-3.408.824-1.055.539-1.968 1.319-2.666 2.276-.774-.78-1.386-1.707-1.799-2.726-.413-1.02-.62-2.11-.608-3.21V4.705c3.213-1.64 6.832-2.318 10.421-1.949.098.012.198.004.293-.024.095-.027.183-.073.26-.136.077-.062.14-.139.188-.226.046-.087.075-.183.084-.281.02-.198-.038-.396-.163-.55-.125-.155-.306-.254-.504-.275-4.04-.414-8.113.397-11.686 2.329-.119.064-.218.16-.287.275-.07.116-.106.249-.106.384v8.58c-.009 1.431.296 2.848.893 4.149.597 1.3 1.472 2.455 2.563 3.382.062.085.142.156.234.208h.012c1.8 1.47 3.888 2.544 6.13 3.155.111.027.227.027.338 0 2.242-.609 4.33-1.682 6.13-3.151h.015c.092-.052.171-.123.233-.209 1.092-.927 1.966-2.082 2.563-3.384.596-1.302.9-2.719.89-4.151v-1.84c0-.099-.02-.196-.058-.287-.038-.091-.093-.174-.163-.244s-.153-.124-.244-.162c-.091-.037-.19-.056-.288-.056zM12 22.227c-1.793-.499-3.476-1.331-4.96-2.453.547-.806 1.285-1.465 2.147-1.92.863-.454 1.823-.69 2.798-.686h.036c.974-.003 1.934.233 2.795.687.862.454 1.599 1.113 2.146 1.918-1.485 1.123-3.168 1.955-4.962 2.454zM12 6C9.936 6 8.52 7.369 8.21 9.66c-.151.6-.172 1.226-.061 1.835.111.609.352 1.187.705 1.695.417.394.914.692 1.457.875.543.183 1.12.246 1.69.185.569.06 1.144-.002 1.687-.185.542-.183 1.039-.481 1.455-.874.354-.508.594-1.087.705-1.696.111-.609.09-1.235-.06-1.835C15.475 7.369 14.06 6 12 6zm2.014 6.2c-.282.22-.606.382-.952.477-.345.094-.706.119-1.062.073-.356.046-.717.022-1.063-.073-.347-.094-.67-.256-.954-.477-.388-.715-.49-1.552-.283-2.339.142-1.077.66-2.361 2.3-2.361 1.641 0 2.155 1.284 2.3 2.361.205.788.102 1.624-.288 2.339h.002zM24 4c0 .199-.079.39-.22.53-.14.141-.33.22-.53.22h-2.425v2.425c0 .199-.079.39-.22.53-.14.141-.33.22-.53.22-.199 0-.39-.079-.53-.22-.14-.14-.22-.331-.22-.53V4.75H16.9c-.199 0-.39-.079-.53-.22-.14-.14-.22-.331-.22-.53s.08-.39.22-.53c.14-.141.331-.22.53-.22h2.425V.825c0-.199.08-.39.22-.53.14-.141.331-.22.53-.22.2 0 .39.079.53.22.141.14.22.331.22.53V3.25h2.425c.2 0 .39.079.53.22.141.14.22.331.22.53z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var K,
        M = T,
        x = n('boUI'),
        R = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        L = C.a.g30bc699,
        O = C.a.e585d844,
        A = C.a.cab7c6f8,
        j = C.a.af40a8ef,
        P = C.a.e96d5254,
        D = C.a.f348a395,
        B = C.a.c3a1aebd,
        H = C.a.c273c8a6,
        N = C.a.e68b09b4,
        U = C.a.c0eb2a52,
        z = C.a.a5808125,
        V = {
          confirmButtonLabel: j,
          headline: A,
          text: function (e) {
            return u.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'd46c6e8f' },
              u.a.createElement(f.a, { screenName: e }),
            )
          },
        },
        q = {
          confirmButtonLabel: N,
          headline: H,
          text: function (e) {
            return u.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'c3a1f2be' },
              u.a.createElement(f.a, { screenName: e }),
            )
          },
        },
        W = void 0 !== K ? K : (K = n('7xtl'))
      t.a = function (e) {
        var t = u.a.useContext(d.a),
          n = t.featureSwitches,
          a = t.loggedInUserId,
          l = n.isTrue('c9s_edit_moderators_enabled'),
          o = e.communityId,
          s = e.communityRole,
          f = e.recordId,
          _ = e.screenName,
          E = e.userId,
          C = u.a.useState(null),
          S = c()(C, 2),
          F = S[0],
          I = S[1],
          T = Object(p.c)(),
          K = k()(W),
          A = c()(K, 2),
          j = A[0],
          H = A[1],
          N = u.a.useCallback(
            function (e) {
              var t = e.communityId,
                n = e.errorMessage,
                a = e.recordId,
                r = e.role,
                l = (e.screenName, e.successMessage),
                i = e.userId
              j({
                variables: { communityId: t, userId: i, role: r },
                updater: function (e) {
                  var n = e.get(a)
                  null == n || n.setValue(r, 'community_role(community_id:"'.concat(t, '")')),
                    T(g.b.updateOne(''.concat(t, '_').concat(i), { role: r }))
                },
                onCompleted: function () {
                  T(Object(m.b)({ text: l }))
                },
                onError: function () {
                  T(Object(m.b)({ text: n }))
                },
              })
            },
            [j, T],
          ),
          X = u.a.useCallback(
            function (e) {
              var t,
                n,
                a,
                r,
                l = e.communityId,
                o = e.recordId,
                c = e.roleAction,
                s = e.screenName,
                u = e.userId
              switch (c) {
                case R.PromoteModerator:
                  ;(t = V), (a = y.a.Moderator), (r = P({ screenName: s })), (n = D({ screenName: s }))
                  break
                case R.DemoteModerator:
                  ;(t = q), (a = y.a.Member), (r = U({ screenName: s })), (n = z({ screenName: s }))
                  break
                default:
                  return
              }
              I(
                i()(
                  i()({}, t),
                  {},
                  {
                    text: t.text(s),
                    onConfirm: function () {
                      N({
                        communityId: l,
                        errorMessage: n,
                        recordId: o,
                        role: a,
                        screenName: s,
                        successMessage: r,
                        userId: u,
                      }),
                        I(null)
                    },
                    onCancel: function () {
                      I(null)
                    },
                  },
                ),
              )
            },
            [N],
          ),
          J = u.a.useCallback(
            function (e) {
              var t = []
              if (l)
                switch (s) {
                  case y.a.Moderator:
                    t.push({
                      behavioralEventContext: { viewType: 'remove_moderator' },
                      disabled: H,
                      text: B,
                      Icon: w,
                      onClick: function () {
                        return X({
                          communityId: o,
                          recordId: f,
                          roleAction: R.DemoteModerator,
                          screenName: _,
                          userId: E,
                        })
                      },
                    })
                    break
                  case y.a.Member:
                    t.push({
                      behavioralEventContext: { viewType: 'add_moderator' },
                      disabled: H,
                      text: O,
                      Icon: M,
                      onClick: function () {
                        return X({
                          communityId: o,
                          recordId: f,
                          roleAction: R.PromoteModerator,
                          screenName: _,
                          userId: E,
                        })
                      },
                    })
                }
              return (
                t.push({
                  behavioralEventContext: { viewType: 'view_profile' },
                  text: L({ screenName: _ }),
                  Icon: x.a,
                  link: '/'.concat(_),
                }),
                u.a.createElement(h.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
              )
            },
            [o, X, l, f, s, H, _, E],
          )
        return E !== a
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(b.a, { renderActionMenu: J }),
              F
                ? u.a.createElement(
                    v.a,
                    r()(
                      {
                        confirmButtonType: 'primary',
                        onCancel: function () {
                          I(null)
                        },
                      },
                      F,
                    ),
                  )
                : null,
            )
          : null
      }
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return I
        })
      var a = n('ddV6'),
        r = n.n(a),
        l = (n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        i = n.n(l),
        o = n('eSoz'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = Object(c.a)()
          .propsFromActions(function () {
            return {
              editTheme: o.c.editTheme,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_THEME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_theme' }),
        m = n('jHSc'),
        d = n('Ig1G'),
        y = n('3XMw'),
        p = n.n(y),
        g = n('MWbm'),
        f = n('X00g'),
        h = n('/yvb'),
        b = n('uI9t'),
        v = n('rHpw'),
        _ = p.a.dbda7beb,
        k = p.a.i2209530,
        E = p.a.hcf35d0c,
        C = p.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        F = {}
      function I(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.editTheme,
          l = e.history,
          o = t.id_str,
          c = t.theme,
          s = f.a.getCommunityBackgroundColorName(c),
          u = i.a.useState(!1),
          y = r()(u, 2),
          p = y[0],
          v = y[1],
          I = i.a.useState(Object(d.e)(t)),
          T = r()(I, 2),
          K = T[0],
          M = T[1],
          x = i.a.useState(f.a.getCommunityThemeDisplayName(K)),
          R = r()(x, 2),
          L = R[0],
          O = R[1],
          A = i.a.useState(s),
          j = r()(A, 2),
          P = j[0],
          D = j[1],
          B = i.a.useState([]),
          H = r()(B, 2),
          N = H[0],
          U = H[1]
        i.a.useEffect(
          function () {
            var e
            return (
              U(
                ((e = []),
                S.forEach(function (t) {
                  var n = f.a.getCommunityTheme(t),
                    a = f.a.getCommunityBackgroundColorName(n)
                  ;(F[a] = t), e.push({ accessibilityLabel: f.a.getCommunityThemeDisplayName(t), colorName: a })
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
        var z = i.a.useCallback(
            function () {
              a(o, { theme: K })
                .then(function () {
                  l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [o, K, a, l, n],
          ),
          V = i.a.createElement(
            h.a,
            { accessibilityLabel: E({ themeName: L }), disabled: !p, onPress: z, size: 'small', type: 'brandFilled' },
            k,
          )
        return i.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: l, rightControl: V, title: _ },
          i.a.createElement(
            g.a,
            { style: w.themePickerContainer },
            i.a.createElement(b.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var n = F[e],
                  a = n !== Object(d.e)(t)
                M(n), O(f.a.getCommunityThemeDisplayName(n)), D(e), v(a)
              },
              options: N,
              value: P,
            }),
          ),
        )
      }
      var w = v.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(I)
    },
    zakg: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        l,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityInviteButtonQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityInviteButton_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'CommunityInviteButtonQuery',
            selections: [
              {
                alias: 'community',
                args: r,
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
                    name: 'invites_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityInvites',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  l,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'OgVu1WJu62PoPazegBf3mw',
            metadata: {},
            name: 'CommunityInviteButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '9533cbfb5394a4601514cbc83020138b'), (t.default = i)
    },
    zum0: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunitiesCreateButton_create_community_action_result',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
        type: 'CommunityCreateActionResult',
        abstractKey: '__isCommunityCreateActionResult',
        hash: '4ec23170ec30a580f998dd33b20018aa',
      }
      t.default = a
    },
  },
])
//# sourceMappingURL=WIPED
