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
          { args: null, kind: 'FragmentSpread', name: 'CommunityDetailFacePile_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityShareButton_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityInviteButton_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'fcba88c15f68bb3f4cd44f88c073bd2b',
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
    '08/x': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunitiesSearchItem_item',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityFacePile_community' },
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageThumbnail_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '782e9c4c64c2c403f9d74b62979e20ff',
      }
      t.default = a
    },
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '0weh': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25z',
              }),
              r.a.createElement('path', {
                d: 'M13.37 16.19c0 .76-.61 1.37-1.37 1.37s-1.38-.61-1.38-1.37.62-1.38 1.38-1.38 1.37.62 1.37 1.38zm.35-7.66l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '1Xyu': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      })
      var a,
        l = n('ERkP'),
        i = n.n(l),
        r = n('X00g'),
        o = (n('enFi'), n('jAXQ')),
        s = n.n(o),
        c = function (e) {
          var t = s()(void 0 !== a ? a : (a = n('DCZs')), e),
            l = t.custom_theme,
            o = t.default_theme,
            c = null != l ? l : o
          return i.a.useMemo(
            function () {
              return r.a.getCommunityTheme(c)
            },
            [c],
          )
        }
      t.a = c
    },
    '1rMX': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (t.default = l)
    },
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = l)
    },
    '21U8': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        l = n.n(a),
        i = n('Y9Ll'),
        r = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        u = n.n(c),
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
        L = n('CHgo'),
        M = n('7ep7'),
        x = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        R = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_previousTouchDistance', 0),
              p()(s()(a), '_previousPositionX', 0),
              p()(s()(a), '_previousPositionY', 0),
              p()(s()(a), '_centerPosition', { x: 0, y: 0 }),
              p()(s()(a), '_panResponder', {}),
              p()(s()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  l = t.onPanMove,
                  i = t.onPinchMove,
                  r = t.onWheel
                if (e) {
                  ;(l || n || i) && (a._removeTouchMoveToScrollListener = Object(L.a)(e, a._preventDefaultEvent, !1)),
                    r && (a._removeScrollToScaleListener = Object(L.b)(e, a._preventDefaultEvent, !1))
                  var o = e.getBoundingClientRect()
                  a._centerPosition = { x: o.width / 2 + o.left, y: o.height / 2 + o.top }
                }
              }),
              p()(s()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              p()(s()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  l,
                  i = a.props,
                  r = i.onPanMove,
                  o = i.onPinchMove,
                  s = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (o) {
                    var c =
                        ((n = s[0]),
                        (l = s[1]),
                        Math.sqrt(Math.pow(n.pageY - l.pageY, 2) + Math.pow(n.pageX - l.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(s[0], s[1]),
                      m = u.pageX,
                      d = u.pageY,
                      y = a._previousPositionX ? m - a._previousPositionX : 0,
                      p = a._previousPositionY ? d - a._previousPositionY : 0,
                      g = a._previousTouchDistance ? c - a._previousTouchDistance : 0
                    ;(a._previousPositionX = m), (a._previousPositionY = d), (a._previousTouchDistance = c)
                    var f = a._centerPosition
                    o(g, f.x - m, f.y - d, y, p)
                  }
                } else r && r(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              p()(s()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              p()(s()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  l = e.deltaX,
                  i = e.deltaY,
                  r = a._centerPosition,
                  o = r.x - t,
                  s = r.y - n
                a.props.onWheel && a.props.onWheel(l, i, o, s)
              }),
              (a._panResponder = M.a.create({
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
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, K()(e, x))
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
      var Q = X,
        J = function () {
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
      J.metadata = { width: 24, height: 24 }
      var G = J,
        Y = v.a.d85bc1b8,
        Z = v.a.f596ace8,
        $ = v.a.df031fca,
        ee = v.a.b40332c5,
        te = v.a.e547b368,
        ne = v.a.f7571204,
        ae = v.a.e6e16811,
        le =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a, i
            return (
              l()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_previousLeft', 0),
              p()(s()(a), '_previousTop', 0),
              p()(s()(a), '_panStyles', { top: 0, left: 0 }),
              p()(s()(a), '_shouldShowZoomControl', function () {
                return (!j.b.isMobileOS() || !A.a.isTouchSupported()) && a.props.withZoomControl
              }),
              p()(s()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  l = a.state.aspectRatio,
                  i = t.width / t.height,
                  r = a._shouldShowZoomControl()
                return n || r
                  ? f.a.createElement(
                      E.a,
                      { style: re.controlsContainer },
                      n
                        ? f.a.createElement(
                            E.a,
                            { style: re.ratioContainer },
                            f.a.createElement(h.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: l === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: f.a.createElement(U, null),
                              onPress: a._setAspectRatio(i),
                              size: 'medium',
                            }),
                            f.a.createElement(h.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: l === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: f.a.createElement(V, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            f.a.createElement(h.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === l ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: f.a.createElement(W, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      r
                        ? f.a.createElement(
                            E.a,
                            { style: re.zoomContainer },
                            f.a.createElement(O.a, {
                              accessibilityLabel: Y,
                              max: a._maxScale,
                              maxIcon: f.a.createElement(Q, { style: re.icon }),
                              min: 0,
                              minIcon: f.a.createElement(G, { style: re.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              p()(s()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              p()(s()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              p()(s()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  l = n.height,
                  i = n.width,
                  r = F.a.getCoverDimensions({ width: i, height: l }, t),
                  o = r.height
                return { width: r.width * Math.pow(2, e), height: o * Math.pow(2, e) }
              }),
              p()(s()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  l = e.containerWidth,
                  i = F.a.getContainDimensions({ width: l - 50, height: n - 50 }, t),
                  r = i.height
                return { width: i.width, height: r }
              }),
              p()(s()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  l = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: l })
                  : (a.setState({ containerHeight: n, containerWidth: l }), a._setDefaultCropData())
              }),
              p()(s()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var l = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    r = l / n.width,
                    o = le(i / (t.width * r))
                  a.setState({ imageScale: o })
                  var s = a._getUnscaledCropData(),
                    c = s.left,
                    u = s.top
                  ;(a._panStyles.top = u - t.top * r * Math.pow(2, o)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = c - t.left * r * Math.pow(2, o)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              p()(s()(a), '_handleWheel', function (e, t, n, l) {
                var i = (-1 * t) / 500
                a.setState(function (e) {
                  var t = e.imageScale,
                    r = Math.min(a._maxScale, Math.max(t + i, 0))
                  return (
                    (a._panStyles.left += n * (r - t)),
                    (a._panStyles.top += l * (r - t)),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: r }
                  )
                })
              }),
              p()(s()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              p()(s()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              p()(s()(a), '_handlePinchMove', function (e, t, n, l, i) {
                var r = e / 200
                a.setState(function (e) {
                  var o = e.imageScale,
                    s = Math.min(a._maxScale, Math.max(o + r, 0))
                  return (
                    (a._panStyles.left += t * (s - o) + l),
                    (a._panStyles.top += n * (s - o) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: s }
                  )
                })
              }),
              p()(s()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  l = e.top,
                  i = e.left + e.width - t.width,
                  r = e.top + e.height - t.height,
                  o = !1
                n < 0 && ((o = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  l < 0 && ((o = !0), (a._panStyles.top += l), (a._previousTop += l)),
                  i > 0 && ((o = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  r > 0 && ((o = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  o && a._updateNativeStyles()
              }),
              p()(s()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              p()(s()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  l = a._getMaskDimensions(),
                  i = l.height,
                  r = l.width,
                  o = a._panStyles,
                  s = o.left
                return { top: (t - i) / 2 - o.top, left: (n - r) / 2 - s, width: r, height: i }
              }),
              p()(s()(a), '_setAspectRatio', function (e) {
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
              (a._maxScale = ((i = e.image), Math.max(Math.min(le(i.width / 150), le(i.height / 150), 3), 0.5))),
              a
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    n = e.image,
                    a = e.withZoomControl,
                    l = this._getImageDimensions(),
                    i = l.height,
                    r = l.width,
                    o = this._getMaskDimensions(),
                    s = o.height,
                    c = o.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return f.a.createElement(
                    E.a,
                    { style: re.container },
                    f.a.createElement(
                      R,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: a ? this._handlePinchMove : void 0,
                        onWheel: a ? this._handleWheel : void 0,
                        style: re.root,
                      },
                      u
                        ? f.a.createElement(
                            f.a.Fragment,
                            null,
                            f.a.createElement(_.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: r, height: i },
                              style: re.image,
                            }),
                            f.a.createElement(S, { circle: t, height: s, width: c }),
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
      p()(ie, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var re = k.a.create(function (e) {
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
      t.a = ie
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        l = n('3KVO'),
        i = n('yLYC'),
        r = n('Ud88'),
        o = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var s,
          m = r(),
          d = t.fetchKey,
          y = t.fetchPolicy,
          p = t.source,
          g = t.variables,
          f = t.networkCacheConfig,
          h = i(e, g, f)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          h.request.node.params.name !== t.name && a(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: c(m, h.request.identifier, function () {
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
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && m === t.environment ? p.ifEmpty(b) : (t.environment, b),
            fetchKey: d,
            fetchPolicy: y,
            query: h,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return l(s)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = a.useEffect,
        i = a.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          l(function () {
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
        l = {
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
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (t.default = l)
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        i = n('fyvP'),
        r = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return l.a.createElement(o.a, { style: s.root }, l.a.createElement(i.a, e))
      }
      var s = r.a.create(function (e) {
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
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              r.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '7xtl': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i,
        r,
        o,
        s = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
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
            argumentDefinitions: [a, i, l],
            kind: 'Operation',
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: r,
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
      ;(s.hash = '611e4e6390b7bb405821b13d8b63cd5d'), (t.default = s)
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return d
        })
      var a = n('ERkP'),
        l = n.n(a),
        i = n('3XMw'),
        r = n.n(i),
        o = n('mw9i'),
        s = n('FIs5'),
        c = n('rHpw'),
        u = r.a.c2117be6,
        m = r.a.c2c4dad3
      function d() {
        return l.a.createElement(o.a, { style: y.root }, l.a.createElement(s.a, { header: u, message: m }))
      }
      var y = c.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    '8vG3': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (t.default = l)
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        l = n('ERkP'),
        i = n('Ud88'),
        r = n('K1lQ').commitMutation,
        o = l.useState,
        s = l.useEffect,
        c = l.useRef,
        u = l.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          n = i(),
          l = m(),
          d = c(n),
          y = c(e),
          p = c(new Set()),
          g = o(!1),
          f = g[0],
          h = g[1],
          b = u(
            function (t) {
              d.current === n && y.current === e && (p.current.delete(t), l.current && h(p.current.size > 0))
            },
            [n, l, e],
          )
        s(
          function () {
            ;(d.current === n && y.current === e) ||
              ((p.current = new Set()), l.current && h(!1), (d.current = n), (y.current = e))
          },
          [n, l, e],
        )
        var v = u(
          function (i) {
            var r = t(
              n,
              (0, a.default)(
                (0, a.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    b(r), i.onCompleted && i.onCompleted(e, t)
                  },
                  onError: function (e) {
                    b(r), i.onError && i.onError(e)
                  },
                  onUnsubscribe: function () {
                    b(r), i.onUnsubscribe && i.onUnsubscribe()
                  },
                },
              ),
            )
            return p.current.add(r), l.current && h(!0), r
          },
          [b, t, n, l, e],
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
        l = n.n(a),
        i = n('eb3s'),
        r = n('3XMw'),
        o = n.n(r),
        s = o.a.d45ae5e0,
        c = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return l.a.createElement(i.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: s,
            onCancel: t,
            onConfirm: n,
            text: c,
          })
        }
    },
    BX8b: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (t.default = l)
    },
    C2fM: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                      { args: null, kind: 'FragmentSpread', name: 'actions_update_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (c = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestDenyError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      s,
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  i,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
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
                                  i,
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
                                      r,
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
                              r,
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
                                      r,
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
                          r,
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
                            selections: (d = [i]),
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
                          r,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  c,
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
        l = n.n(a),
        i = n('yiKp'),
        r = n.n(i),
        o = n('ddV6'),
        s = n.n(o),
        c = (n('KqXw'), n('WNMA'), n('LW0h'), n('7x/C'), n('z84I'), n('1Iuc'), n('ERkP')),
        u = n.n(c),
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
      var L = S(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            a = e.inviteActionResult,
            l = e.inviteToCommunity,
            i = e.onInvite,
            r = e.onInviteActionResultChange,
            o = e.userId,
            s = e.viewerInvited,
            c = (function (e) {
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
              a && r(o, a)
            },
            [a, o, r],
          )
          var d = 'UserCommunityInviteAction' === (null == a ? void 0 : a.__typename)
          return !d && !s
            ? null
            : u.a.createElement(
                _.a,
                {
                  accessibilityLabel: c,
                  behavioralEventContext: K,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      l(t, o)
                        .then(function () {
                          return i && i(o)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                c,
              )
        }),
        M = n('5FtR'),
        x = n('4e/K'),
        R = n('MWbm'),
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
        Q = v.a.b772cd65,
        J = v.a.b4f16d00,
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
          i = (t || {}).invites_result,
          o = e.match.params.communityId || '',
          c = u.a.useState(''),
          d = s()(c, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState({}),
          f = s()(g, 2),
          b = f[0],
          v = f[1],
          k = u.a.useState({}),
          E = s()(k, 2),
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
                : 'CommunityInvites' === i.__typename
                ? i.users_to_invite_slice.items.map(D.g).filter(Boolean)
                : ee
            },
            [t, i, y.length],
          ),
          T = u.a.useCallback(
            function (e, t) {
              v(function (n) {
                return r()(r()({}, n), {}, l()({}, e, t))
              })
            },
            [v],
          ),
          K = u.a.useCallback(
            function (e) {
              S(function (t) {
                return r()(r()({}, t), {}, l()({}, e, !0))
              })
            },
            [S],
          ),
          P = o
            ? u.a.createElement(M.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(M.a, { to: '/' }),
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
            Q,
          )
        return 'CommunityInvitesUnavailable' === (null == i ? void 0 : i.__typename)
          ? P
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ne },
              u.a.createElement(
                h.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: H, title: B },
                ((F = (null == i ? void 0 : i.remaining_invite_count) || 0),
                (I = F > 999),
                'CommunityInvites' === (null == i ? void 0 : i.__typename) &&
                  !I &&
                  u.a.createElement(
                    R.a,
                    { style: le.callout },
                    u.a.createElement(O.a, { text: X({ remaining_invite_count: F }) }),
                  )),
                u.a.createElement(x.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: te,
                  getItemDisabledMessage: function (e) {
                    var t
                    if ('user' === e.type) {
                      var n = e.data,
                        a = n.id_str,
                        l = n.screen_name,
                        i = b[a]
                      if ('UserCommunityInviteActionUnavailable' === (null == i ? void 0 : i.__typename))
                        switch (i.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: l })
                          case 'UserIsMember':
                            return z({ screen_name: l })
                          case 'ViewerOutOfInvites':
                            return V
                          default:
                            return null !== (t = i.message) && void 0 !== t ? t : q({ screen_name: l })
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
                  inputStyle: le.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: N,
                  renderEmptyState: function () {
                    return u.a.createElement(j.a, { header: J, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        R.a,
                        { style: le.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, W),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return u.a.createElement(j.a, { header: Y({ query: y }), message: Z })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return u.a.createElement(L, {
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
                  style: le.input,
                }),
              ),
            )
      }
      var le = P.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        ie = f(ae)
      t.default = ie
    },
    DVIF: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i,
        r,
        o,
        s,
        c,
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
        E,
        C = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'cursor' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'query' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'CommunitiesSearchQuery',
            selections: [
              {
                alias: 'communities_search_slice',
                args: [
                  (i = { kind: 'Literal', name: 'count', value: 10 }),
                  (r = { kind: 'Variable', name: 'query', variableName: 'query' }),
                  (o = { kind: 'Literal', name: 's', value: 4 }),
                ],
                concreteType: 'CommunitySearchSlice',
                kind: 'LinkedField',
                name: '__CommunitiesSearchQuery_communities_slice_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'Community',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      { args: null, kind: 'FragmentSpread', name: 'CommunitiesSearchItem_item' },
                      (s = {
                        kind: 'ClientExtension',
                        selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
                      }),
                    ],
                    storageKey: null,
                  },
                  (c = {
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
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [l, a],
            kind: 'Operation',
            name: 'CommunitiesSearchQuery',
            selections: [
              {
                alias: null,
                args: (u = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }, r, o]),
                concreteType: 'CommunitySearchSlice',
                kind: 'LinkedField',
                name: 'communities_search_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'Community',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      (m = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
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
                              (d = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: '__typename',
                                storageKey: null,
                              }),
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
                                  (y = {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  }),
                                  (p = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (g = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'message',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'TimelineRichText',
                                    kind: 'LinkedField',
                                    name: 'unavailable_message',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'alignment',
                                        storageKey: null,
                                      },
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
                                              d,
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
                                                selections: (h = [
                                                  (f = {
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
                                                  p,
                                                  (b = {
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
                                                selections: h,
                                                type: 'TimelineRichTextHashtag',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  b,
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
                                                          d,
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
                                                                  (v = {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'screen_name',
                                                                    storageKey: null,
                                                                  }),
                                                                ],
                                                                storageKey: null,
                                                              },
                                                              y,
                                                              m,
                                                              p,
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
                                                              g,
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
                                                selections: [v, k],
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
                                      f,
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
                      { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiMedia',
                        kind: 'LinkedField',
                        name: 'default_banner_media',
                        plural: !1,
                        selections: (E = [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'media_info',
                            plural: !1,
                            selections: [
                              d,
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
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiMediaRect',
                                    kind: 'LinkedField',
                                    name: 'salient_rect',
                                    plural: !1,
                                    selections: [
                                      { alias: null, args: null, kind: 'ScalarField', name: 'left', storageKey: null },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'top', storageKey: null },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'width', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'height',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                type: 'ApiImage',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          p,
                        ]),
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiMedia',
                        kind: 'LinkedField',
                        name: 'custom_banner_media',
                        plural: !1,
                        selections: E,
                        storageKey: null,
                      },
                      p,
                      s,
                    ],
                    storageKey: null,
                  },
                  c,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: u,
                filters: ['query', 'count', 's'],
                handle: 'slice',
                key: 'CommunitiesSearchQuery_communities_slice',
                kind: 'LinkedHandle',
                name: 'communities_search_slice',
              },
            ],
          },
          params: {
            id: '6ognTidFIQCWJ6zY9-d-Gg',
            metadata: { sliceInfoPath: ['communities_search_slice', 'slice_info'] },
            name: 'CommunitiesSearchQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(C.hash = 'c848c1bd320716d294b5f3f2b34ed1a8'), (t.default = C)
    },
    'Dm5+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                      { args: null, kind: 'FragmentSpread', name: 'actions_update_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (c = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestApproveError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      s,
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  i,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
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
                                  i,
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
                                      r,
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
                              r,
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
                                      r,
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
                          r,
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
                            selections: (d = [i]),
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
                          r,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  c,
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
        l = n.n(a),
        i = n('Y9Ll'),
        r = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        u = n.n(c),
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
              l()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              p()(s()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              p()(s()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    l = e.confirmationSheetConfirmButtonType,
                    i = e.confirmationSheetHeadline,
                    r = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(h.a, { align: t, color: n, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? f.a.createElement(b.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: l,
                          headline: i,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: r,
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
        l = n.n(a),
        i = n('VrFO'),
        r = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('5Yy7'),
        u = n.n(c),
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
            return r()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            s()(n, [
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
                    l = e.media,
                    i = e.withAspectRatioOptions,
                    r = e.withZoomControl,
                    o = this.state.orientedImage,
                    s = l || {},
                    c = s.cropData,
                    u = s.originalMediaFile,
                    m = void 0 === u ? {} : u
                  return o
                    ? p.a.createElement(
                        h.a,
                        { style: F.cropper },
                        p.a.createElement(v.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || n,
                          defaultCropData: a || c,
                          image: { src: o.url, width: m.width, height: m.height },
                          ref: t,
                          withAspectRatioOptions: i,
                          withZoomControl: r,
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
        return p.a.createElement(S, l()({}, e, { cropperRef: t }))
      })
    },
    Eh7u: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i,
        r,
        o,
        s,
        c,
        u,
        m = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityFacePile_community',
          selections: [
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
                    (a = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                      selections: (r = [
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
                                        (o = {
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
                                      selections: r,
                                      type: 'TimelineRichTextHashtag',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        o,
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
                                        (u = {
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
                                                a,
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
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'rest_id',
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    (c = {
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
                                      selections: [s, u],
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
                        c,
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
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(m.hash = '97ecd7a2189f93a563b3695f898d77ab'), (t.default = m)
    },
    FSMj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolsPeopleScreen', function () {
          return C
        })
      var a = n('ddV6'),
        l = n.n(a),
        i = (n('vrRf'), n('ERkP')),
        r = n.n(i),
        o = n('LgBi'),
        s = n('UZ0O'),
        c = n('rxPX'),
        u = Object(c.a)().withAnalytics({ page: 'communities', section: 'people' }),
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
            i = r.a.useState(!1),
            c = l()(i, 2),
            u = c[0],
            m = c[1],
            d = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            C = d ? k : E,
            S = r.a.useMemo(
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
                return r.a.createElement(g.a, { accessibilityLabel: C, links: e })
              },
              [n, C, a],
            )
          return r.a.createElement(
            p.a,
            null,
            r.a.createElement(
              f.a,
              {
                communityId: t.id_str,
                rightControl: d ? r.a.createElement(o.a, { communityId: n }) : void 0,
                title: _,
              },
              r.a.createElement(
                h.a,
                null,
                r.a.createElement(s.a, { community: t, communityId: n, onIsSearchingChange: m }),
                u
                  ? null
                  : r.a.createElement(
                      r.a.Fragment,
                      null,
                      S,
                      r.a.createElement(
                        v.d,
                        null,
                        r.a.createElement(
                          v.b,
                          { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                          r.a.createElement(b.b, {
                            communityId: t.id_str,
                            mode: b.a.Members,
                            userRole: null == t ? void 0 : t.role,
                          }),
                        ),
                        r.a.createElement(
                          v.b,
                          { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                          r.a.createElement(y.a, { community: t }),
                          r.a.createElement(b.b, {
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
          return Q
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return J
        })
      var a = n('97Jx'),
        l = n.n(a),
        i = n('m3Bd'),
        r = n.n(i),
        o = (n('yH/f'), n('KqXw'), n('WNMA'), n('ERkP')),
        s = n.n(o),
        c = n('v6aA'),
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
          return Object.entries(n).flat().includes('tweetId') ? Q.HiddenTweet : Q.RemovedMember
        },
        b = function (e, t) {
          if (h(0, t) === Q.HiddenTweet) {
            var n,
              a = t.match.params.tweetId,
              l = a ? y.a.selectHydrated(e, a) : void 0,
              i = null == l || null === (n = l.community_relationship) || void 0 === n ? void 0 : n.community
            return i ? d.c.select(e, i) : void 0
          }
          var r = t.match.params.communityId
          return r ? d.c.select(e, r) : void 0
        },
        v = function (e, t) {
          if (h(0, t) === Q.HiddenTweet) {
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
        L = n('4zmP'),
        M = n('0yYu'),
        x = n('6vad'),
        R = n('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        P = S.a.icc32e3d,
        D = T.a.getCommunityTheme('Default'),
        B = R.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: R.a.theme.colors.gray50,
              borderRadius: R.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: R.a.theme.spacesPx.space16,
              marginBottom: R.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: R.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
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
            l = e.location,
            i = e.match,
            r = e.tweet,
            o = e.type,
            c = { history: a, location: l, match: i },
            u = null == r ? void 0 : r.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case Q.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case Q.RemovedMember:
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
            ? s.a.createElement(
                w.a,
                { style: B.tweetInfo },
                s.a.createElement(
                  w.a,
                  { style: B.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case Q.HiddenTweet:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            K.b,
                            { color: f, size: 'subtext1', style: B.communityTitle, weight: 'bold' },
                            y,
                          ),
                          s.a.createElement(
                            K.b,
                            { size: 'headline1', style: [B.titleText, B.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          s.a.createElement(I.a, {
                            style: B.tweetContainer,
                            tweetId: null == r ? void 0 : r.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          s.a.createElement(L.a, { headline: A, text: d }),
                          s.a.createElement(K.b, { style: B.helpText }, j),
                        )
                      case Q.RemovedMember:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            K.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            P({ communityName: y }),
                          ),
                          s.a.createElement(
                            w.a,
                            { style: B.removedMemberReason },
                            s.a.createElement(K.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                s.a.createElement(M.a, null),
                s.a.createElement(x.b, { text: h }),
                s.a.createElement(k.b, {
                  badgeStyle: B.badges,
                  ruleContainerStyle: B.rules,
                  rules: p,
                  theme: g,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : s.a.createElement(F.b, c)
        },
        N = n('G1WX'),
        U = n('yoO3'),
        z = n('VS6U'),
        V = n('0KEI'),
        q = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        W = S.a.jf99d610,
        X = { viewType: 'community' },
        Q = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function J(e) {
        var t = s.a.useContext(c.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          a = e.fetchCommunity,
          i = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          g = r()(e, q),
          f = function (e) {
            var t, a
            switch (e) {
              case Q.HiddenTweet:
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
              case Q.RemovedMember:
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
          E = s.a.useEffect(
            function () {
              v && o(v).catch(_)
            },
            [_, o, v],
          ),
          C = s.a.useEffect(
            function () {
              b && a(b).catch(k)
            },
            [b, k, a],
          ),
          S = s.a.createElement(F.b, g)
        return s.a.createElement(N.a, {
          fetchStatus: i,
          onRequestRetry: f(p)._handleRetry,
          render: function () {
            var n = f(p),
              a = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              i = n.isAuthorizedViewer,
              r = n.shouldRenderFeedback
            return i && t
              ? s.a.createElement(
                  u.a,
                  { behavioralEventContext: X },
                  r
                    ? s.a.createElement(
                        U.a,
                        { behavioralEventViewType: a },
                        s.a.createElement(z.a, {
                          backLocation: '/notifications',
                          history: g.history,
                          primaryContent: s.a.createElement(H, l()({}, e, { type: p })),
                          sidebarContent: s.a.createElement(m.a, null),
                          title: W,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var G = _(J)
      t.default = G
    },
    'I/KZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return i
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
        l = Object.freeze({
          Open: 'CommunityOpenMembershipSettings',
          Restricted: 'CommunityRestrictedMembershipSettings',
        }),
        i = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        r = n('ERkP'),
        o = n.n(r),
        s = n('3XMw'),
        c = n.n(s),
        u = n('t62R'),
        m = n('3JAx'),
        d = n('e0ey'),
        y = n('rHpw'),
        p = [
          { label: c.a.fd00a769, value: l.Open, helpText: c.a.a0a16d37 },
          { label: c.a.ce0523a8, value: l.Restricted, helpText: c.a.i1aad6eb },
        ],
        g = c.a.c85960a0,
        f = c.a.ca373cd2,
        h = c.a.j7f554f5,
        b = function (e) {
          var t = e.state,
            n = t.access,
            a = t.invitesPolicy,
            r = e.setters,
            s = r.setAccess,
            c = r.setInvitesPolicy,
            y = !e.hideInvitePolicy,
            b = o.a.useCallback(
              function (e, t) {
                s(t)
              },
              [s],
            ),
            v = o.a.useCallback(
              function (e, t) {
                c(t ? i.Member : i.Moderator)
              },
              [c],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: _.settingsItem }, h),
            o.a.createElement(m.a, { name: 'membershipSetting', onChange: b, options: p, value: n }),
            y &&
              n === l.Restricted &&
              o.a.createElement(d.a, {
                checked: a === i.Member,
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
        F = ((a = {}), S()(a, l.Open, i.Member), S()(a, l.Restricted, i.Moderator), a),
        I = { access: l.Restricted, invitesPolicy: F[l.Restricted] }
      function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          t = o.a.useState(e.access),
          n = E()(t, 2),
          a = n[0],
          l = n[1],
          i = o.a.useState(e.invitesPolicy),
          r = E()(i, 2),
          s = r[0],
          c = r[1],
          u = o.a.useMemo(function () {
            return {
              setAccess: function (e) {
                c(F[e]), l(e)
              },
              setInvitesPolicy: c,
            }
          }, []),
          m = o.a.useMemo(
            function () {
              return { access: a, invitesPolicy: s }
            },
            [a, s],
          )
        return [m, u]
      }
      function T(e) {
        var t, n
        switch (e.access) {
          case l.Open:
            t = 'Open'
            break
          case l.Restricted:
          default:
            t = 'RestrictedJoinRequestsDisabled'
        }
        switch (e.invitesPolicy) {
          case i.Moderator:
            n = 'ModeratorInvitesAllowed'
            break
          case i.Member:
            n = 'MemberInvitesAllowed'
            break
          case i.None:
          default:
            n = 'NoInvitesAllowed'
        }
        return { joinPolicy: t, invitesPolicy: n }
      }
    },
    JAeQ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ddV6'),
        r = n.n(i),
        o = (n('yH/f'), n('kH1Z'), n('6U7i'), n('ERkP')),
        s = n.n(o),
        c = n('3XMw'),
        u = n.n(c),
        m = n('fS8x'),
        d = u.a.b7fb6bd9,
        y = u.a.e71cdf4d,
        p = Object.freeze({ NotStarted: 'not_started', Started: 'started', Completed: 'completed' })
      function g(e) {
        var t = e.aspectRatio,
          n = e.media,
          a = e.onCancel,
          i = e.onCropDone,
          o = s.a.useState({ status: 'not_started' }),
          c = r()(o, 2),
          u = c[0],
          g = c[1],
          f = s.a.useState(!1),
          h = r()(f, 2),
          b = h[0],
          v = h[1],
          _ = s.a.useState(!1),
          k = r()(_, 2),
          E = k[0],
          C = k[1],
          S = u.croppedMediaId,
          F = void 0 === S ? void 0 : S,
          I = u.status
        s.a.useEffect(
          function () {
            I === p.NotStarted && (v(!0), g({ status: 'started' })),
              I === p.Completed && n.id !== F && g({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, n, F],
        )
        var w = s.a.useCallback(
            function () {
              v(!1), g({ status: p.Completed, croppedMediaId: n.id }), a()
            },
            [a, n],
          ),
          T = s.a.useCallback(function () {
            v(!1), C(!0)
          }, []),
          K = s.a.useCallback(function () {
            C(!1), v(!0)
          }, []),
          L = s.a.useCallback(function () {
            C(!1)
          }, []),
          M = s.a.useCallback(
            function (e) {
              g({ status: p.Completed, croppedMediaId: n.id }), null == i || i(e)
            },
            [i, n],
          ),
          x = l()(l()({}, n), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: n.mediaFile, cropData: void 0 })
        return s.a.createElement(
          s.a.Fragment,
          null,
          b ? s.a.createElement(m.a, { defaultAspectRatio: t, media: n, onCancel: w, onDone: T, title: d }) : null,
          E
            ? s.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: x,
                onCancel: K,
                onCropDone: M,
                onDone: L,
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
        l = n.n(a),
        i = (n('hBvt'), n('ERkP')),
        r = n.n(i),
        o = n('BUB3'),
        s = n('shC7'),
        c = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return r.a.createElement(o.a, { exact: !0, path: e.link }, function (t) {
          var n = s.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return r.a.createElement(c.a, l()({ isActive: t }, e, { label: r.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    L47s: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('+Kfv'),
        s = n('3XMw'),
        c = n.n(s),
        u = n('feu+'),
        m = n('ii+P'),
        d = c.a.j24c37b2,
        y = function (e) {
          var t = e.Content,
            n = e.actionLabel,
            a = void 0 === n ? d : n,
            i = e.flag,
            s = e.headline,
            c = e.subtext,
            y = e.behavioralEventContext,
            p = e.withCloseButton,
            g = Object(m.a)(i),
            f = l()(g, 2),
            h = f[0],
            b = f[1]
          if (!h) return null
          var v = r.a.createElement(
            u.a,
            {
              actionLabel: a,
              graphicDisplayMode: 'none',
              headline: s,
              onAction: b,
              onClose: b,
              subtext: c,
              withCloseButton: p,
            },
            r.a.createElement(t, null),
          )
          return y ? r.a.createElement(o.a, { behavioralEventContext: y }, v) : v
        }
      t.a = r.a.memo(y)
    },
    LgBi: function (e, t, n) {
      'use strict'
      var a,
        l = n('97Jx'),
        i = n.n(l),
        r = n('m3Bd'),
        o = n.n(r),
        s = n('ERkP'),
        c = n.n(s),
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
          return c.a.createElement(u.a, i()({ community: a.community }, n))
        },
        h = function (e) {
          return c.a.createElement(
            m.a,
            { errorConfig: p },
            c.a.createElement(f, i()({ communityId: e.communityId }, e)),
          )
        }
      t.a = c.a.memo(h)
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        l = n.n(a),
        i = n('VrFO'),
        r = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
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
        L = n('TnY3'),
        M = n('cHvH'),
        x = n('3xLC'),
        R = [
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
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
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
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(M.a, null, function (t) {
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
                      l()(e, R))
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
                    l = n.TabBar,
                    i = n.TeamsSwitcher,
                    r = n.backLocation,
                    o = n.documentTitle,
                    s = n.headerless,
                    c = n.history,
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
                    L = n.withSearchBox,
                    M = n.withTweetButton,
                    x = 'root' === p,
                    R = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && _) || (x && b),
                    j = x || (O && t),
                    P = x ? h.c : O ? h.a : void 0,
                    D = v.a.createElement(
                      T.a,
                      { style: w.appBarContainer },
                      v.a.createElement(k.a, {
                        backLocation: r,
                        fixed: !1,
                        hideBackButton: j,
                        history: c,
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
                      x || (R && K)
                        ? null
                        : v.a.createElement(E.a.Configure, {
                            SideNavButton: a,
                            TabBar: l,
                            TeamsSwitcher: i,
                            backLocation: r,
                            documentTitle: o,
                            headerless: s,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: y,
                            searchBoxOptions: g,
                            subtitle: C,
                            title: S,
                            withSearchBox: L,
                            withTweetButton: M,
                          })
                  return v.a.createElement(v.a.Fragment, null, B, D)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(O, 'contextType', x.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(L.a)(O)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return C
        })
      var a = n('yiKp'),
        l = n.n(a),
        i = n('97Jx'),
        r = n.n(i),
        o = (n('KqXw'), n('WNMA'), n('ho0z'), n('uFXj'), n('ERkP')),
        s = n.n(o),
        c = n('v6aA'),
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
          var t = s.a.useContext(c.a).featureSwitches,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            g = e.location,
            f = e.match,
            h = f.params.communityId,
            E = t.isTrue('c9s_participation_enabled')
          s.a.useEffect(
            function () {
              h && !n && o !== b.a.LOADED && i(h).catch(a())
            },
            [h, n, a, o, i],
          )
          var C = s.a.useMemo(
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
                sidebarContent: s.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: E && p,
              }
            if (I.length > 0) {
              var K = s.a.createElement(m.b, {
                badgeStyle: F.badgeStyle,
                headerContainerStyle: F.containerStyle,
                headerExplanationStyle: F.explanationStyle,
                ruleContainerStyle: F.ruleContainerStyle,
                rules: I,
                theme: w,
                withBottomMargin: !0,
              })
              return s.a.createElement(
                k.a,
                r()({}, T, {
                  backLocation: '/i/communities/'.concat(h),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: K,
                }),
              )
            }
            var L = l()(l()({}, T), {}, { title: null }),
              M = s.a.createElement(v.b, { history: y, location: g, match: f })
            return s.a.createElement(k.a, r()({}, L, { primaryContent: M }))
          }
          return o === b.a.LOADED || o === b.a.FAILED ? s.a.createElement(_.a, { to: '/' }) : null
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
    MjKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      })
      n('z84I')
      var a,
        l,
        i,
        r,
        o = n('ERkP'),
        s = n.n(o),
        c = n('cHTv'),
        u = (n('enFi'), n('jAXQ')),
        m = n.n(u),
        d = function (e) {
          var t,
            l = m()(void 0 !== a ? a : (a = n('atLU')), e)
          return s.a.useMemo(
            function () {
              var e,
                t,
                n = null == l || null === (e = l.custom_banner_media) || void 0 === e ? void 0 : e.media_info
              if (
                null != n &&
                n.original_img_url &&
                null != n &&
                n.original_img_height &&
                null != n &&
                n.original_img_width &&
                null != n &&
                null !== (t = n.color_info) &&
                void 0 !== t &&
                t.palette
              ) {
                var a = n.color_info.palette
                return {
                  url: n.original_img_url,
                  height: n.original_img_height,
                  width: n.original_img_width,
                  palette: a.map(function (e) {
                    var t = e.percentage,
                      n = e.rgb
                    return { percentage: t, rgb: { blue: n.blue, red: n.red, green: n.green } }
                  }),
                }
              }
            },
            [null == l || null === (t = l.custom_banner_media) || void 0 === t ? void 0 : t.media_info],
          )
        },
        y = function (e) {
          var t,
            a = m()(void 0 !== l ? l : (l = n('xvEL')), e)
          return s.a.useMemo(
            function () {
              var e,
                t = null == a || null === (e = a.default_banner_media) || void 0 === e ? void 0 : e.media_info,
                n = null == t ? void 0 : t.original_img_url,
                l = null == t ? void 0 : t.original_img_height,
                i = null == t ? void 0 : t.original_img_width
              if (n && l && i) return { url: n, height: l, width: i }
            },
            [null == a || null === (t = a.default_banner_media) || void 0 === t ? void 0 : t.media_info],
          )
        }
      t.a = function (e) {
        var t = m()(void 0 !== i ? i : (i = n('dMLx')), e),
          a = d(t),
          l = y(t)
        return a || l || c.c
      }
      var p = function (e) {
          var t,
            a,
            l,
            i,
            o = m()(void 0 !== r ? r : (r = n('N5wd')), e),
            u = d(o),
            p = y(o)
          return s.a.useMemo(
            function () {
              if (u) {
                var e,
                  t,
                  n =
                    null === (e = o.custom_banner_media) || void 0 === e || null === (t = e.media_info) || void 0 === t
                      ? void 0
                      : t.salient_rect
                return { image: u, crop: g(n) }
              }
              if (p) {
                var a,
                  l,
                  i =
                    null === (a = o.default_banner_media) || void 0 === a || null === (l = a.media_info) || void 0 === l
                      ? void 0
                      : l.salient_rect
                return { image: p, crop: g(i) }
              }
              return { image: c.c, crop: c.b }
            },
            [
              null === (t = o.custom_banner_media) || void 0 === t || null === (a = t.media_info) || void 0 === a
                ? void 0
                : a.salient_rect,
              null === (l = o.default_banner_media) || void 0 === l || null === (i = l.media_info) || void 0 === i
                ? void 0
                : i.salient_rect,
              u,
              p,
            ],
          )
        },
        g = function (e) {
          if (!e) return []
          var t = e.height
          return [{ x: e.left, y: e.top, w: e.width, h: t }]
        }
    },
    N5wd: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useCommunityBannerImageThumbnail_community',
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
                          concreteType: 'ApiMediaRect',
                          kind: 'LinkedField',
                          name: 'salient_rect',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'left', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'top', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'width', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'height', storageKey: null },
                          ],
                          storageKey: null,
                        },
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
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageDefault_community' },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageCustom_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = 'bda649c5a293882e2d130676e026a4d7'), (t.default = l)
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
        l = n.n(a),
        i = n('rHpw'),
        r = n('MWbm')
      function o(e) {
        var t = e.spacing
        return l.a.createElement(r.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var s = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    OUEC: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        l = n.n(a),
        i = n('yiKp'),
        r = n.n(i),
        o = n('ezF+'),
        s =
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
        c = o.e(s),
        u = n('QIgh'),
        m = n('8UdT')
      t.a = r()(r()({}, u.b), {}, l()({}, m.b.Community, c))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('ddV6'),
        l = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        r = n.n(i),
        o = n('v6aA'),
        s = n('3XMw'),
        c = n.n(s),
        u = n('Nh1N'),
        m = n('MWbm'),
        d = n('Ig1G'),
        y = n('4zmP'),
        p = n('p+r5'),
        g = n('rHpw'),
        f = c.a.c66769a3,
        h = c.a.ef02695a,
        b = c.a.ef02695a,
        v = c.a.c824202f,
        _ = c.a.d32cf5e6,
        k = c.a.f8fa00c7,
        E = c.a.fc2a5c92,
        C = function (e) {
          var t = r.a.useContext(o.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            a = t.getNumberValue('c9s_max_rule_description_length', 160),
            i = e.description,
            s = e.errorText,
            c = e.name,
            g = e.onChange,
            C = r.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 3, n)
              },
              [n],
            ),
            F = r.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 0, a)
              },
              [a],
            ),
            I = r.a.useState(c),
            w = l()(I, 2),
            T = w[0],
            K = w[1],
            L = r.a.useState(C(c)),
            M = l()(L, 2),
            x = M[0],
            R = M[1],
            O = r.a.useState(void 0),
            A = l()(O, 2),
            j = A[0],
            P = A[1],
            D = r.a.useState(i),
            B = l()(D, 2),
            H = B[0],
            N = B[1],
            U = r.a.useState(F(i)),
            z = l()(U, 2),
            V = z[0],
            q = z[1],
            W = r.a.useState(void 0),
            X = l()(W, 2),
            Q = X[0],
            J = X[1],
            G = r.a.useState('' !== c),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = r.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                C(a) && ((t = !0), P(b({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  R(t),
                  K(a),
                  g({ description: H, name: a, valid: !t && !V })
              },
              [n, H, g, V, C],
            ),
            te = r.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                F(n) && ((t = !0), J(k({ maxCharacterCount: a }))),
                  q(t),
                  N(n),
                  g({ name: T, description: n, valid: !t && !x })
              },
              [a, T, g, x, F],
            ),
            ne = x && j ? void 0 : h({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = V ? void 0 : _({ maxCharacterCount: a }),
            le = s
              ? r.a.createElement(
                  m.a,
                  { style: S.error },
                  r.a.createElement(y.a, { Icon: u.a, headline: E, text: s, type: 'danger' }),
                )
              : void 0
          return r.a.createElement(
            r.a.Fragment,
            null,
            le,
            r.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: j,
              helperText: ne,
              invalid: x && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: T,
            }),
            r.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: Q,
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
        l = {
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
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (t.default = l)
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
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
                args: l,
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
      ;(i.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = i)
    },
    Phky: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, l.default)(e), a = 0; a < n.length; a++) {
            var i = n[a].screenName
            t.push(i)
          }
          return t
        })
      var l = a(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        i = n('v6aA'),
        r = n('xZGM'),
        o = n('L47s'),
        s = n('3XMw'),
        c = n.n(s),
        u = n('MWbm'),
        m = n('X00g'),
        d = n('h0NW'),
        y = n('rHpw'),
        p = n('r9x5'),
        g = n('cOhU'),
        f = n('uCrx'),
        h = c.a.b60e4f77,
        b = c.a.f0fc827d,
        v = c.a.c8e93b51,
        _ = c.a.fc5c6913,
        k = c.a.ad211086,
        E = c.a.gf803ba1,
        C = c.a.e92fe01b,
        S = c.a.h3bb8068,
        F = c.a.a709f8f8,
        I = { viewType: 'welcome_education' },
        w = l.a.memo(function (e) {
          var t = e.forSingleCommunity,
            n = l.a.useContext(i.a).featureSwitches,
            a = l.a.useCallback(
              function () {
                var e = n.isTrue('c9s_ui_colors_enabled_rweb') && (null == t ? void 0 : t.theme),
                  a = [T.decorationContainer, e && { color: m.a.getCommunityUIColor(e) }],
                  i = l.a.createElement(p.a, { style: a }),
                  r = l.a.createElement(g.a, { style: a }),
                  o = l.a.createElement(f.a, { style: a })
                return l.a.createElement(
                  u.a,
                  { style: T.infoItemsContainer },
                  l.a.createElement(d.a, {
                    containerStyle: T.itemContainer,
                    items: [
                      { label: _, description: k, decoration: i },
                      { label: E, description: C, decoration: r },
                      { label: S, description: F, decoration: o },
                    ],
                  }),
                )
              },
              [n, t],
            )
          return !1 === (null == t ? void 0 : t.canJoinCommunity)
            ? null
            : l.a.createElement(o.a, {
                Content: a,
                actionLabel: h,
                behavioralEventContext: I,
                flag: r.j,
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
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityActions',
                    kind: 'LinkedField',
                    name: 'actions',
                    plural: !1,
                    selections: [
                      (c = {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_action_result',
                        plural: !1,
                        selections: (s = [
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  i,
                  r,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityActions',
                    kind: 'LinkedField',
                    name: 'actions',
                    plural: !1,
                    selections: [
                      c,
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
                    selections: s,
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
                      i,
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
                                                          i,
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
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
            id: '8LnZso5PjE7dbFyiQzRdEQ',
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
        l = n.n(a),
        i = n('yiKp'),
        r = n.n(i),
        o = (n('yH/f'), n('oEOe')),
        s = n('kGix'),
        c = n('Ssj5'),
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
          return null !== (n = e[u].fetchStatus[t]) && void 0 !== n ? n : s.a.NONE
        },
        p = Object.freeze({ fetchStatus: {} })
      function g(e) {
        return e.meta.communityId
      }
      var f = function (e) {
        return function (t, n, a) {
          var l = a.api
          return o.b(t, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      c.a.register(
        l()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return r()(r()({}, e), {}, { fetchStatus: r()(r()({}, e.fetchStatus), {}, l()({}, g(t), s.a.LOADING)) })
            case m.FAILURE:
              return r()(
                r()({}, e),
                {},
                { fetchStatus: r()(r()({}, e.fetchStatus), {}, l()({}, g(t), s.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return r()(
                  r()({}, e),
                  {},
                  ((n = {}),
                  l()(n, g(t), t.payload),
                  l()(n, 'fetchStatus', r()(r()({}, e.fetchStatus), {}, l()({}, g(t), s.a.LOADED))),
                  l()(n, 'error', null),
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
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('v6aA'),
        s = n('p+r5'),
        c = n('3XMw'),
        u = n.n(c),
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
            i = e.onChange,
            c = r.a.useContext(o.a).featureSwitches,
            u = r.a.useState(!1),
            d = l()(u, 2),
            p = d[0],
            _ = d[1],
            k = r.a.useState(void 0),
            E = l()(k, 2),
            C = E[0],
            S = E[1],
            F = c.getNumberValue('c9s_max_community_name_length', 30),
            I = r.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.h)(t, 3, F)
                  ? (y()(t).length > 0 || g()(t).length > 0) && ((n = !0), S(v))
                  : ((n = !0), S(b({ minCharacterCount: 3, maxCharacterCount: F }))),
                  _(n),
                  i(t, n)
              },
              [F, i, S],
            ),
            w = h({ minCharacterCount: 3, maxCharacterCount: F })
          return r.a.createElement(s.a, {
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
        l = Math.log,
        i = Math.LN2
      a(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return l(e) / i
          },
        },
      )
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    S91Q: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (t.default = l)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              r.a.createElement('path', {
                d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    SyZD: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesRouter', function () {
          return Y
        })
      var a = n('97Jx'),
        l = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('2G9S'), n('ERkP')),
        r = n.n(i),
        o = n('v6aA'),
        s = n('Ig1G'),
        c = n('rxPX'),
        u = Object(c.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('yoO3'),
        p = n('5FtR'),
        g = n('ddV6'),
        f = n.n(g),
        h = (n('z84I'), n('/yvb')),
        b = n('eSoz'),
        v = n('0KEI'),
        _ = Object(c.a)()
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
            l = e.history,
            i = e.reorderRules,
            o = t.id_str,
            s = t.rules,
            c = t.theme,
            u = r.a.useState(s),
            m = f()(u, 2),
            d = m[0],
            p = m[1],
            g = r.a.useCallback(
              function (e) {
                p(e)
              },
              [p],
            ),
            b = r.a.useCallback(
              function () {
                var e = n({}),
                  t = d.map(function (e) {
                    return e.rest_id
                  })
                i(o, { ruleIds: t })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, i, l, n],
            ),
            v = r.a.createElement(h.a, { onPress: b, size: 'small', type: 'brandFilled' }, F)
          return r.a.createElement(
            y.a,
            null,
            r.a.createElement(
              C.a,
              { communityId: o, rightControl: v, screenType: 'primaryDetail', title: I },
              r.a.createElement(S.b, {
                badgeStyle: E.badgeStyle,
                displayType: S.a.Reorder,
                explanation: a,
                headerContainerStyle: E.headerContainerStyle,
                onReorder: g,
                ruleContainerStyle: E.ruleContainerStyle,
                rules: d,
                theme: c,
              }),
            ),
          )
        }),
        T = n('xZGM'),
        K = n('L47s'),
        L = n('MWbm'),
        M = n('t62R'),
        x = d.a.a9ba79c0,
        R = [d.a.h5482c79, d.a.d5033a7a, d.a.ee8c43af],
        O = d.a.j24c37b2,
        A = function () {
          return r.a.createElement(
            L.a,
            { style: P.content },
            R.map(function (e) {
              return r.a.createElement(M.b, { color: 'gray700', key: e, size: 'body', style: P.item }, e)
            }),
          )
        },
        j = function () {
          return r.a.createElement(K.a, { Content: A, actionLabel: O, flag: T.i, headline: x, subtext: '' })
        },
        P = k.a.create(function (e) {
          return {
            content: { marginTop: '-'.concat(e.spaces.space48), marginBottom: e.spaces.space32 },
            item: { paddingTop: e.spaces.space16 },
          }
        }),
        D = r.a.memo(j),
        B = n('mjJ+'),
        H = n('iY63'),
        N = n('ACHU'),
        U = n('zCf4'),
        z = d.a.gfca5254,
        V = d.a.d94edeb4,
        q = d.a.j560c8ea,
        W = d.a.ab8089ea,
        X = d.a.h63a5c3b,
        Q = r.a.createElement(H.a, null),
        J = r.a.createElement(N.a, null),
        G = { viewType: 'add' },
        Y = function (e) {
          var t = r.a.useContext(o.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            a = t.isTrue('c9s_rule_editing_enabled'),
            i = t.isTrue('c9s_rule_reordering_enabled'),
            c = e.community,
            u = e.history,
            m = e.match,
            d = c.id_str,
            g = c.role,
            f = c.rules,
            b = c.theme,
            v = m.url,
            _ = g === s.a.Admin,
            k =
              n && _
                ? r.a.createElement(h.a, {
                    accessibilityLabel: q,
                    behavioralEventContext: G,
                    icon: Q,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            F = f.length > 1,
            I =
              i && _ && F
                ? r.a.createElement(h.a, {
                    accessibilityLabel: X,
                    icon: J,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: W, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return r.a.createElement(B.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: Z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            T = r.a.createElement(L.a, { style: Z.rightControlStyle }, k, I),
            K = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            _ &&
              a &&
              ((K.displayType = S.a.Pivot),
              (K.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            r.a.createElement(
              U.d,
              null,
              r.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(v, '/') },
                r.a.createElement(
                  y.a,
                  null,
                  r.a.createElement(
                    C.a,
                    { communityId: d, rightControl: T, screenType: 'primaryDetail', title: z },
                    _ ? r.a.createElement(D, null) : null,
                    r.a.createElement(
                      S.b,
                      l()(
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
              r.a.createElement(
                U.b,
                { exact: !0, path: ''.concat(v, '/reorder') },
                r.a.createElement(w, { community: c, explanation: V, history: u }),
              ),
              r.a.createElement(U.b, null, r.a.createElement(p.a, { to: ''.concat(v, '/') })),
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
          return El
        }),
        n.d(t, 'CommunityScreen', function () {
          return Cl
        })
      var a = n('yiKp'),
        l = n.n(a),
        i = (n('ho0z'), n('ERkP')),
        r = n.n(i),
        o = n('+Kfv'),
        s = n('es0u'),
        c = n('v6aA'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('R5kW'),
        y = function (e, t) {
          var n = Object(d.b)(e, t.communityId) || {},
            a = n.pending_join_request_count,
            l = void 0 === a ? 0 : a,
            i = n.tweet_case_count
          return { pending_join_request_count: l, tweet_case_count: void 0 === i ? 0 : i }
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
        L = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      L.metadata = { width: 24, height: 24 }
      var M = L,
        x = n('ACHU'),
        R = _.a.h6beb5fa,
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
            l = void 0 === a ? 0 : a,
            i = (e.history, e.userRole),
            o = r.a.useContext(c.a).featureSwitches,
            s = o.isTrue('c9s_settings_enabled'),
            u = o.isTrue('c9s_report_community_enabled'),
            m = o.isTrue('c9s_moderation_enabled') && t,
            d = s && t,
            y = u && !t,
            p = r.a.useCallback(
              function (e) {
                var t = []
                return (
                  m &&
                    t.push({
                      text: A,
                      subText: j({ count: l }),
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
                  r.a.createElement(E.a, { items: t, onCloseRequested: e })
                )
              },
              [n, l, m, y],
            ),
            g = t ? M : x.a,
            f = t ? (i === b.a.Admin ? H : N) : B
          return r.a.createElement(
            k.a,
            { style: z.root },
            r.a.createElement(C.a, {
              accessibilityLabel: f,
              behavioralEventContext: U,
              hoverLabel: { label: f },
              icon: r.a.createElement(g, null),
              link: d ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: d ? void 0 : p,
              size: 'large',
              type: 'primaryText',
            }),
            m && l > 0
              ? r.a.createElement(S.a, {
                  count: l,
                  style: z.menuControlBadge,
                  truncatedCountFormatter: R,
                  unreadCountLabel: O,
                  withBorder: !1,
                })
              : null,
          )
        })
      var q,
        W,
        X,
        Q,
        J = g(function (e) {
          var t = r.a.useContext(c.a).featureSwitches.isTrue('c9s_request_to_join_enabled'),
            n = e.canModerate,
            a = e.communityId,
            l = e.count,
            i = e.createLocalApiErrorHandler,
            o = e.fetchCommunityModerationData,
            s = e.fetchStatus,
            u = e.userRole,
            m = l.pending_join_request_count,
            d = l.tweet_case_count
          return (
            r.a.useEffect(
              function () {
                s === f.a.NONE && n && o(a).catch(i())
              },
              [i, o, s, a, n],
            ),
            r.a.createElement(V, { canModerate: n, communityId: a, count: t ? m + d : d, userRole: u })
          )
        }),
        G = n('m3Bd'),
        Y = n.n(G),
        Z = n('1Idg'),
        $ = n('eSoz'),
        ee = n('G6rE'),
        te = n('o3oN'),
        ne = n('/ekK'),
        ae = ['loggedInUser'],
        le = function (e, t) {
          var n = Z.c(e, t)
          return !n || Object(ne.a)(e, n, 'mod_education_flag')
        },
        ie = Object(u.a)()
          .propsFromState(function () {
            return {
              communityId: Z.c,
              community: Z.a,
              communityTheme: Z.f,
              fetchStatus: Z.b,
              hasShownModEducation: le,
              membershipsFetchStatus: te.d,
              isCommunityMember: Z.g,
              loggedInUser: ee.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Y()(e, ae)
            return l()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: $.c.fetchOneIfNeeded,
              fetchCommunityMemberships: te.a,
              setFlag: ne.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        re = n('feu+'),
        oe = (n('yH/f'), n('WpDa')),
        se = n('ZNT5'),
        ce = (n('1t7P'), n('jQ/y'), n('jV+4')),
        ue = n('t62R'),
        me = (n('enFi'), n('jAXQ')),
        de = n.n(me),
        ye = function (e) {
          var t,
            a = de()(void 0 !== q ? q : (q = n('pChJ')), e.community),
            l = r.a.useMemo(
              function () {
                return new Date(a.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [a.created_at],
            ),
            i = r.a.useMemo(
              function () {
                var e, t, n
                if ('User' === (null === (e = a.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return r.a.createElement(ce.a, {
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
            ? r.a.createElement(
                ue.b,
                { color: 'gray700' },
                r.a.createElement(_.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, i),
              )
            : null
        },
        pe = r.a.memo(ye),
        ge = n('s8G+'),
        fe = n('6vad'),
        he = n('csss'),
        be = n('h0NW'),
        ve = n('0yYu'),
        _e = n('cOhU'),
        ke = n('DlMI'),
        Ee = n('Lxak'),
        Ce = n('a5gf'),
        Se = r.a.createElement(ue.b, { weight: 'bold' }),
        Fe = _.a.af7c11a9,
        Ie = _.a.db1b9462,
        we = _.a.ea49402d,
        Te = r.a.createElement(_.a.I18NFormatMessage, { $i18n: 'he99cc29' }, r.a.cloneElement(Se, null, _.a.gedb877c)),
        Ke = _.a.fcef2921,
        Le = _.a.c93dd2c8,
        Me = function (e) {
          var t = de()(void 0 !== W ? W : (W = n('1rMX')), e.community),
            a = Object(ge.a)('c9s_request_to_join_enabled'),
            l = r.a.useMemo(
              function () {
                var e,
                  n = function (e) {
                    return r.a.createElement(ue.b, null, e)
                  },
                  l = r.a.createElement(pe, { community: t }),
                  i = t.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: Re, label: n(Ie) },
                    CommunityOpenMembershipEducation: { decoration: Oe, label: Te, description: Ke },
                    CommunityRestrictedMembershipEducation: { decoration: je, label: Te, description: Le },
                    CommunityVisibilityEducation: { decoration: Oe, label: n(we) },
                    OriginationAttributionEducation: { decoration: Ae, label: l },
                  },
                  s = [o.CommunityMemberAllowedActions]
                return (
                  a
                    ? ('CommunityRestrictedMembershipSettings' === i &&
                        s.push(o.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === i && s.push(o.CommunityOpenMembershipEducation))
                    : s.push(o.CommunityVisibilityEducation),
                  'User' === (null === (e = t.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    s.push(o.OriginationAttributionEducation),
                  s
                )
              },
              [t, a],
            )
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(fe.b, { text: Fe }),
            Object(b.g)(t.role) && t.description ? r.a.createElement(he.a, { label: t.description }) : null,
            r.a.createElement(be.a, { containerStyle: xe.containerStyle, items: l }),
            r.a.createElement(ve.a, null),
          )
        },
        xe = F.a.create(function (e) {
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
        Re = r.a.createElement(_e.a, { style: xe.icon }),
        Oe = r.a.createElement(ke.a, { style: xe.icon }),
        Ae = r.a.createElement(Ee.a, { style: xe.icon }),
        je = r.a.createElement(Ce.a, { style: xe.icon }),
        Pe = r.a.memo(Me),
        De = n('fTQJ'),
        Be = (n('z84I'), n('PKbs')),
        He = n('1Xyu'),
        Ne = n('rC8y'),
        Ue = void 0 !== X ? X : (X = n('BX8b')),
        ze = _.a.gfca5254,
        Ve = _.a.ffd9cfe6,
        qe = function (e) {
          var t = e.community,
            n = de()(Ue, t),
            a = n.rules,
            l = Object(He.a)(n),
            i = r.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(fe.b, { text: ze }),
                r.a.createElement(Be.b, {
                  badgeStyle: We.badgeStyle,
                  headerContainerStyle: [We.containerStyle, We.headingContainerStyle],
                  headerExplanationStyle: We.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: We.ruleContainerStyle,
                  rules: i,
                  theme: l,
                }),
                a.length > 5
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(Ne.a, { link: '/i/communities/'.concat(n.rest_id, '/rules'), text: Ve }),
                      ' ',
                      r.a.createElement(ve.a, null),
                    )
                  : null,
              )
        },
        We = F.a.create(function (e) {
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
        Xe = r.a.memo(qe),
        Qe = _.a.i9028824,
        Je = _.a.cc683fb9,
        Ge = function (e) {
          var t = de()(void 0 !== Q ? Q : (Q = n('+BRr')), e.community),
            a = r.a.useMemo(
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
                    formatResponse: oe.a,
                  })
                )
                var e
              },
              [t.rest_id],
            )
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(Pe, { community: t }),
            r.a.createElement(Xe, { community: t }),
            r.a.createElement(De.a, { loadingAccessibilityLabel: Qe, module: a, title: Je }),
          )
        },
        Ye = r.a.memo(Ge),
        Ze = (n('LW0h'), n('7x/C'), n('tVqn'), n('uFXj'), n('97Jx')),
        $e = n.n(Ze),
        et = n('ddV6'),
        tt = n.n(et),
        nt = (n('7xRU'), n('KqXw'), n('WNMA'), n('egQk')),
        at = n('li/m'),
        lt = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || Z.a(e, t)
        },
        it = Object(u.a)()
          .propsFromState(function () {
            return { community: lt, fetchStatus: Z.b, isCommunityMember: Z.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: at.b,
              requestToJoin: $.c.requestToJoin,
              fetchCommunityIfNeeded: $.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        rt = n('MDbM'),
        ot = n('jHSc'),
        st = n('5FtR'),
        ct = _.a.h4fbfa57,
        ut = _.a.ea8cfb1d,
        mt = _.a.dc1b14a1,
        dt = { viewType: 'community' },
        yt = it(function (e) {
          var t,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            i = e.fetchStatus,
            s = e.isCommunityMember,
            c = e.join,
            u = e.match,
            m = e.onDismiss,
            d = e.requestToJoin,
            y = u.params.communityId,
            p =
              'ViewerRequestRequired' ===
              (null == n || null === (t = n.actions.join_action_result) || void 0 === t ? void 0 : t.reason)
          r.a.useEffect(function () {
            y && !n && i !== rt.a.LOADED && l(y).catch(a())
          })
          var g = r.a.useCallback(function (e) {
              return r.a.createElement(ue.b, { size: 'title4', weight: 'bold' }, mt({ communityName: e }))
            }, []),
            f = p ? ut : ct,
            h = r.a.useCallback(
              function () {
                if (n) {
                  var e = n.id_str
                  ;(p ? d : c)(e).then(m).catch(a())
                }
              },
              [n, a, c, p, m, d],
            ),
            b = r.a.useCallback(
              function () {
                return r.a.createElement(C.a, { onPress: h, size: 'small', type: 'brandFilled' }, f)
              },
              [f, h],
            )
          if (n) {
            var v = n.name,
              _ = n.rules,
              k = n.theme
            return _ && _.length && !s
              ? r.a.createElement(
                  o.a,
                  { behavioralEventContext: dt },
                  r.a.createElement(
                    ot.b,
                    {
                      behavioralEventViewType: 'rules',
                      onBackClick: m,
                      rightControl: b(),
                      title: Object(nt.a)({ communityName: v }),
                    },
                    r.a.createElement(Be.b, {
                      badgeStyle: pt.badgeStyle,
                      headerContainerStyle: pt.containerStyle,
                      headerExplanationStyle: pt.headerExplanationStyle,
                      heading: g(v),
                      rules: _,
                      theme: k,
                    }),
                  ),
                )
              : r.a.createElement(st.a, { to: '/i/communities/'.concat(n.id_str) })
          }
          return i === rt.a.LOADED ? r.a.createElement(st.a, { to: '/' }) : null
        }),
        pt = F.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space16 },
            headerExplanationStyle: { marginTop: e.spaces.space8 },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        gt = ['loggedInUser'],
        ft = Object(u.a)()
          .propsFromState(function () {
            return { community: Z.a, loggedInUser: ee.e.selectLoggedInUser, joinActionResultType: Z.h }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Y()(e, gt)
            return l()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: at.b,
              requestToJoin: $.c.requestToJoin,
              leave: at.c,
            }
          }),
        ht = (n('ssJ/'), n('X8FW')),
        bt = n('cHvH'),
        vt = n('sgih'),
        _t = r.a.memo(function (e) {
          var t = Object(bt.b)().windowWidth,
            n = e.children
          return t > F.a.theme.breakpoints.medium
            ? r.a.createElement(ht.b, { modalSize: ht.a.fixed }, n)
            : r.a.createElement(vt.a, { type: 'full' }, n)
        }),
        kt = n('CGyZ'),
        Et = _.a.fad95333,
        Ct = function (e) {
          var t = e.offendingRule
          return r.a.createElement(
            k.a,
            null,
            t
              ? r.a.createElement(
                  k.a,
                  { style: St.offendingRule },
                  (function (e) {
                    return r.a.createElement(
                      _.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      r.a.createElement(ue.b, { weight: 'bold' }, _.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            r.a.createElement(ue.b, null, Et),
          )
        },
        St = F.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        Ft = _.a.hafa07f2,
        It = _.a.fa94c9da,
        wt = _.a.c15bee31,
        Tt = _.a.i859676b,
        Kt = r.a.createElement(
          _.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          r.a.createElement(ue.b, { link: '/settings/audience_and_tagging' }, _.a.e77dfaf0),
        ),
        Lt = _.a.fc2a5c92,
        Mt = _.a.bf7bdb60,
        xt = _.a.h27d695f,
        Rt = _.a.b02360f5,
        Ot = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        At = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        jt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Pt,
        Dt,
        Bt = n('zCf4'),
        Ht = ['community', 'communityId', 'match'],
        Nt = _.a.e6057013,
        Ut = _.a.b533478f,
        zt = { follow: _.a.b171d7c4, following: _.a.aa7ae3f6, unfollow: _.a.bb1d57b6 },
        Vt = _.a.j24c37b2,
        qt = function (e) {
          var t = r.a.useState(void 0),
            n = tt()(t, 2),
            a = n[0],
            i = n[1],
            o = r.a.useState(!1),
            s = tt()(o, 2),
            c = s[0],
            u = s[1],
            m = { history: Object(Bt.f)(), location: Object(Bt.g)(), match: Object(Bt.i)() },
            d = Object(ge.a)('c9s_request_to_join_enabled'),
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
            K = E.reason === jt.ViewerJoinRequestRequired && d,
            L = E.reason === jt.ViewerRequestPending && d,
            M = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !T } },
            x = r.a.useCallback(
              function () {
                var e = y.rules,
                  t = y.viewerViolatedRule,
                  n = (function (e, t, n, a) {
                    var l = e.__typename,
                      i = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      s = function (e) {
                        return { canAction: !1, message: e }
                      },
                      c = s({ headline: Lt, text: Mt })
                    switch (l) {
                      case Ot.joinAvailable:
                        return o()
                      case Ot.joinUnavailable:
                        switch (i) {
                          case jt.ViewerIsRemoved:
                            return s({
                              headline: wt,
                              text: r.a.createElement(Ct, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case jt.ViewerNotInvited:
                            return s({ headline: Ft, text: It })
                          case jt.ViewerIsProtected:
                            return t ? s({ headline: Tt, text: Kt }) : o()
                          case jt.ViewerJoinRequestRequired:
                            return a ? o() : c
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(E, g, t, d),
                  a = n.canAction,
                  l = n.message
                !a && l && i(l), a && (e && e.length > 0 ? u(!0) : K ? v(F).catch(p({})) : f(F).catch(p({})))
              },
              [y, F, p, g, d, f, K, E, v],
            ),
            R = r.a.useCallback(
              function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      a = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      i = l({ headline: Lt, text: Mt })
                    switch (n) {
                      case Ot.leaveAvailable:
                        return { canAction: !0, message: t }
                      case Ot.leaveUnavailable:
                        switch (a) {
                          case At.ViewerIsSoleAdmin:
                            return l({ headline: xt, text: Rt })
                          default:
                            return i
                        }
                      default:
                        return i
                    }
                  })(S),
                  t = e.canAction,
                  n = e.message
                !t && n && i(n), t && h(F).catch(p({}))
              },
              [F, p, h, S],
            ),
            O = r.a.useCallback(function () {
              i(void 0)
            }, []),
            A = r.a.useCallback(function () {
              u(!1)
            }, []),
            j = r.a.useMemo(
              function () {
                return K ? l()(l()({}, zt), {}, { follow: Nt }) : zt
              },
              [K],
            )
          return r.a.createElement(
            k.a,
            { style: Wt.button },
            c ? r.a.createElement(_t, null, r.a.createElement(yt, $e()({ communityId: F, onDismiss: A }, m))) : null,
            L
              ? r.a.createElement(C.a, { disabled: !0, type: 'onMediaOutlined' }, Ut)
              : r.a.createElement(kt.a, {
                  behavioralEventContext: M,
                  buttonText: j,
                  isFollowing: T,
                  name: I,
                  onFollow: x,
                  onUnfollow: R,
                  type: 'community',
                }),
            a
              ? r.a.createElement(re.a, {
                  actionLabel: Vt,
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
        Wt = F.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Xt = ft(function (e) {
          var t = e.community,
            n = (e.communityId, e.match, Y()(e, Ht))
          return t ? r.a.createElement(qt, $e()({ community: t }, n)) : null
        }),
        Qt = n('YeIG'),
        Jt = n('MjKK'),
        Gt = n('TIdA'),
        Yt = n('A91F'),
        Zt = n('9Xij'),
        $t = void 0 !== Pt ? Pt : (Pt = n('fK4d')),
        en = function (e) {
          var t = de()($t, e.community),
            n = Object(Jt.a)(t),
            a = F.a.theme.aspectRatios.communityBanner
          return n && !Object(Qt.a)(n)
            ? r.a.createElement(
                k.a,
                null,
                r.a.createElement(Gt.a, {
                  accessibilityLabel: '',
                  aspectMode: Yt.a.exact(a),
                  backgroundColor: F.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : r.a.createElement(Zt.a, { ratio: a }, r.a.createElement(k.a, { style: tn.placeholderImageContainer }))
        },
        tn = F.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        nn = r.a.memo(en),
        an = n('K1iM'),
        ln = n.n(an),
        rn = (n('2G9S'), n('X00g')),
        on = n('n4Eu'),
        sn = { red: 0, green: 0, blue: 0 },
        cn = '10px',
        un = F.a.create(function (e) {
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
        mn = function (e) {
          var t = e.children,
            a = e.community,
            l = de()(void 0 !== Dt ? Dt : (Dt = n('OBBW')), a),
            i = Object(He.a)(l),
            o = Object(Jt.a)(l).palette,
            s = []
          if (o) {
            var c,
              u = ln()(o)
            try {
              for (u.s(); !(c = u.n()).done; ) {
                var m = c.value
                s.push({ percentage: m.percentage, rgb: { blue: m.rgb.blue, green: m.rgb.green, red: m.rgb.red } })
              }
            } catch (y) {
              u.e(y)
            } finally {
              u.f()
            }
          }
          var d = Object(ge.a)('c9s_ui_colors_enabled_rweb')
          return r.a.createElement(
            k.a,
            null,
            r.a.createElement(k.a, { style: un.descriptionContainer }, t),
            r.a.createElement(k.a, { style: [F.a.absoluteFill, un.backgroundColorWhite] }),
            r.a.createElement(k.a, {
              style: [
                F.a.absoluteFill,
                un.backgroundColor,
                (function (e, t) {
                  if (d) return rn.a.getCommunityGradientStyle(t, cn)
                  var n = e && on.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : sn,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    i = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(cn, ', ')
                      .concat(i, ' ')
                      .concat(cn, ' 100%)'),
                  }
                })(s, i),
              ],
            }),
          )
        },
        dn = n('ogGF'),
        yn = n('CaKu'),
        pn = n('1YZw'),
        gn = Object(u.a)().propsFromActions(function () {
          return { addToast: pn.b }
        }),
        fn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              r.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      fn.metadata = { width: 24, height: 24 }
      var hn,
        bn,
        vn,
        _n,
        kn,
        En = fn,
        Cn = n('I/9y'),
        Sn = n('pwey'),
        Fn = _.a.bec3b8f9,
        In = { viewType: 'share_community' },
        wn = _.a.f88553c8,
        Tn = { viewType: 'copy_link' },
        Kn = { viewType: 'invite_members' },
        Ln = _.a.b139b549,
        Mn = _.a.e05c00b4,
        xn = r.a.createElement(En, null),
        Rn = F.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        On = gn(function (e) {
          var t = de()(void 0 !== hn ? hn : (hn = n('X/n0')), e.community),
            a = e.addToast,
            l = t.rest_id,
            i = t.role,
            o = Object(b.g)(i),
            s = r.a.useCallback(
              function (e) {
                yn.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), a({ text: wn })
              },
              [a, l],
            ),
            c = r.a.useMemo(
              function () {
                return function (e) {
                  var t = []
                  return (
                    t.push({ behavioralEventContext: Tn, text: Mn, Icon: Cn.a, onClick: s }),
                    o &&
                      t.push({
                        behavioralEventContext: Kn,
                        text: Ln,
                        Icon: Sn.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    r.a.createElement(E.a, { items: t, onCloseRequested: e })
                  )
                }
              },
              [o, l, s],
            )
          return r.a.createElement(C.a, {
            accessibilityLabel: Fn,
            behavioralEventContext: In,
            icon: xn,
            renderMenu: c,
            style: Rn.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        An = r.a.memo(On),
        jn = _.a.hb9400db,
        Pn = function (e) {
          var t = e.community,
            a = de()(void 0 !== bn ? bn : (bn = n('ldL/')), t),
            l = a.description,
            i = a.role,
            o = r.a.useState(!1),
            s = tt()(o, 2),
            c = s[0],
            u = s[1],
            m = r.a.useState(!1),
            d = tt()(m, 2),
            y = d[0],
            p = d[1],
            g = r.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), u(!c)
              },
              [c],
            )
          return !l || Object(b.g)(i)
            ? null
            : r.a.createElement(
                k.a,
                { style: Dn.description },
                r.a.createElement(ue.b, { color: 'white', getTextOverflow: p, numberOfLines: c ? void 0 : 2 }, l),
                !c && y ? r.a.createElement(ue.b, { color: 'white', onPress: g, weight: 'bold' }, jn) : null,
              )
        },
        Dn = F.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Bn = r.a.memo(Pn),
        Hn = n('ja7Y'),
        Nn = n('MtXG'),
        Un = _.a.d58baa7e,
        zn = function (e) {
          var t = e.community,
            a = de()(void 0 !== vn ? vn : (vn = n('WuQQ')), t).member_count,
            l = void 0 === a ? 0 : a,
            i = Un(l)
          return r.a.createElement(
            Nn.a.Group,
            null,
            r.a.createElement(
              Nn.a,
              { onMedia: !0 },
              r.a.createElement(
                ue.b,
                { color: 'white' },
                r.a.createElement(
                  _.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  r.a.createElement(Nn.a.Value, null, _.a.ibd0106d({ formattedCount: i })),
                  r.a.createElement(Nn.a.Label, null, _.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        Vn = n('cm6r'),
        qn = n('I4+6').a.generate({
          backgroundColor: F.a.theme.colors.transparent,
          color: F.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Wn = F.a.create(function (e) {
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
        Xn = function (e) {
          var t = e.community,
            a = de()(void 0 !== _n ? _n : (_n = n('weg/')), t),
            l = a.rest_id
          return r.a.createElement(
            Vn.a,
            { interactiveStyles: qn, link: '/i/communities/'.concat(l, '/members'), style: Wn.membersContainer },
            r.a.createElement(Hn.a, { community: a, style: Wn.rightSpace }),
            r.a.createElement(zn, { community: a }),
          )
        },
        Qn = n('yoO3'),
        Jn = n('k/OQ'),
        Gn = _.a.a0e3ece4,
        Yn = _.a.ha8209bb,
        Zn = _.a.d601fc2f,
        $n = _.a.b721eb37,
        ea = { viewType: 'description' },
        ta = { viewType: 'facepiles_with_count' },
        na = function (e) {
          var t = de()(void 0 !== kn ? kn : (kn = n('+BRT')), e.community),
            a = t.rest_id,
            l = Object(ge.a)('c9s_participation_enabled'),
            i = Object(ge.a)('c9s_timelines_ranking_enabled'),
            s = Object(ge.a)('c9s_share_community_enabled'),
            c = Object(Bt.i)(),
            u = r.a.useMemo(
              function () {
                var e = [
                  { to: '/i/communities/'.concat(a), label: Yn, key: Yn },
                  { to: '/i/communities/'.concat(a, '/latest'), label: Zn, key: Zn },
                  { to: '/i/communities/'.concat(a, '/about'), label: $n, key: $n },
                ]
                return r.a.createElement(Jn.a, {
                  accessibilityLabel: Gn,
                  links: i
                    ? e
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== Zn
                        })
                      })(e),
                })
              },
              [a, i],
            )
          return r.a.createElement(
            Qn.a,
            { behavioralEventViewType: 'timeline' },
            r.a.createElement(
              k.a,
              { style: aa.container },
              r.a.createElement(
                k.a,
                null,
                r.a.createElement(nn, { community: t }),
                r.a.createElement(
                  o.a,
                  { behavioralEventContext: ea },
                  r.a.createElement(
                    mn,
                    { community: t },
                    r.a.createElement(
                      ue.b,
                      { color: 'white', size: 'title2', style: aa.name, weight: 'bold' },
                      t.name.trim(),
                    ),
                    r.a.createElement(Bn, { community: t }),
                    r.a.createElement(
                      o.a,
                      { behavioralEventContext: ta },
                      r.a.createElement(
                        k.a,
                        { style: aa.bottomContainer },
                        r.a.createElement(Xn, { community: t }),
                        r.a.createElement(
                          k.a,
                          { style: aa.buttons },
                          s
                            ? r.a.createElement(An, { community: t })
                            : r.a.createElement(dn.a, {
                                community: t,
                                style: aa.inviteButton,
                                type: 'onMediaOutlined',
                              }),
                          l ? r.a.createElement(Xt, { communityId: a, match: c }) : null,
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
        aa = F.a.create(function (e) {
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
        la = r.a.memo(na),
        ia = n('/de5')
      function ra() {
        var e = Object(Bt.f)(),
          t = Object(Bt.g)(),
          n = Object(Bt.i)()
        return r.a.createElement(ia.b, { history: e, location: t, match: n })
      }
      var oa = n('hqKg'),
        sa = n('8Lfv'),
        ca = n('LI/a'),
        ua = function (e, t) {
          return t.communityId
        },
        ma = function (e, t) {
          var n = $.c.select(e, t.communityId)
          return Object(b.g)(null == n ? void 0 : n.role)
        },
        da = Object(u.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: ma,
              rankedTweetsModule: Object(oa.createSelector)(ua, function (e) {
                return Object(ca.b)(e)
              }),
              tweetsModule: Object(oa.createSelector)(ua, function (e) {
                return Object(ca.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: sa.a,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        ya = n('FIs5'),
        pa = n('EUHl'),
        ga = n('7BdX'),
        fa = n('7JQg'),
        ha = _.a.c18e3a3e,
        ba = _.a.d68146c0,
        va = _.a.h5245afa,
        _a = _.a.f05dbeff,
        ka = { page: 'community', section: 'home' },
        Ea = { page: 'community', section: 'latest' },
        Ca = { page: 'community', section: 'tweets' },
        Sa = da(function (e) {
          var t = r.a.useContext(c.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            l = e.isCommunityMember,
            i = e.rankedTweetsModule,
            o = e.tweetsModule,
            s = e.type === ul.Home ? { module: i, scribeNamespace: ka } : { module: o, scribeNamespace: Ea },
            u = t ? s : { module: o, scribeNamespace: Ca },
            m = u.module,
            d = u.scribeNamespace
          r.a.useEffect(
            function () {
              n(m).catch(a())
            },
            [n, a, l, m],
          )
          var y = r.a.useCallback(function () {
            return r.a.createElement(ya.a, { buttonType: 'brandOutlined', header: ha, message: ba })
          }, [])
          return r.a.createElement(
            fa.c,
            { namespace: d },
            r.a.createElement(
              Qn.a,
              { behavioralEventViewType: 'tweets' },
              r.a.createElement(De.a, {
                loadingAccessibilityLabel: _a,
                module: m,
                newTweetsPillMode: pa.a.CLIENT,
                prerollDisplayLocation: ga.c.OTHER,
                refreshControl: null,
                renderEmptyState: y,
                title: va,
              }),
            ),
          )
        }),
        Fa = n('mw9i'),
        Ia =
          (n('MvUL'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(K.a)(
              'svg',
              l()(
                l()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [T.a.root, e.style],
                  viewBox: '0 0 24 24',
                },
              ),
              r.a.createElement(
                'g',
                null,
                r.a.createElement('path', {
                  d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
                }),
                r.a.createElement('path', {
                  d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
                }),
              ),
            )
          })
      Ia.metadata = { width: 24, height: 24 }
      var wa,
        Ta,
        Ka = Ia,
        La = n('wpLu'),
        Ma = _.a.bf359e0d,
        xa = _.a.e8fcdd3a,
        Ra = _.a.b37d580e,
        Oa = _.a.cafca4b2,
        Aa = _.a.ea3b38fa,
        ja = _.a.jd667130,
        Pa = _.a.ca7eeabf,
        Da = _.a.acae4034,
        Ba = _.a.e2186ee2,
        Ha = _.a.j24c37b2,
        Na = function (e) {
          var t = de()(void 0 !== wa ? wa : (wa = n('2rr8')), e.community),
            a = Object(Bt.f)(),
            l = r.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(t.rest_id, '/'))
              },
              [a, t.rest_id],
            ),
            i = r.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: Ua.rulesContainer },
              t.rules.map(function (e) {
                return r.a.createElement(
                  ue.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Ua.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === t.access,
            s = o ? Aa : Ra,
            c = o ? ja : Oa
          return r.a.createElement(
            re.a,
            {
              actionLabel: Ha,
              graphicDisplayMode: 'none',
              headline: Ma,
              isFullHeightOnMobile: !0,
              onAction: l,
              subtext: xa,
            },
            r.a.createElement(
              k.a,
              { style: Ua.infoItemsContainer },
              r.a.createElement(be.a, {
                containerStyle: Ua.itemContainer,
                items: [
                  { label: s, description: c, decoration: r.a.createElement(Ka, { style: Ua.decorationContainer }) },
                  { label: Pa, decoration: r.a.createElement(La.a, { style: Ua.decorationContainer }), description: i },
                  { label: Da, description: Ba, decoration: r.a.createElement(M, { style: Ua.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        Ua = F.a.create(function (e) {
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
        za = r.a.memo(Na),
        Va = n('dwig'),
        qa = n('0+qk'),
        Wa = n('L/9f'),
        Xa = n('3G7m'),
        Qa =
          (n('FtFR'),
          n('hBvt'),
          Object(u.a)()
            .propsFromState(function () {
              return { flags: ne.b }
            })
            .propsFromActions(function () {
              return { setFlag: ne.c }
            })),
        Ja = n('hOZg'),
        Ga = n('WtWS'),
        Ya = n('0ULw'),
        Za = _.a.c66b37f9,
        $a = _.a.g2768d0e,
        el = _.a.b192b58b,
        tl = _.a.gd30278f,
        nl = _.a.cbdddb09,
        al = _.a.h5890b1a,
        ll = [
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
                  text: ''.concat(tl, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        il = r.a.memo(function (e) {
          var t = e.communityId,
            n = e.flags,
            a = e.setFlag,
            l = r.a.useContext(c.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            i = Object(Bt.f)(),
            o = r.a.useCallback(
              function () {
                a(t, 'setup_show_checklist', !1)
              },
              [t, a],
            )
          if (!n.setup_show_checklist || !l) return null
          var s = function (e) {
              a(t, e.flag, !0).then(function () {
                i.push(e.link(t))
              })
            },
            u = function (e, t) {
              13 === t.keyCode && s(e)
            }
          return r.a.createElement(
            k.a,
            { style: rl.wrapper },
            r.a.createElement(
              k.a,
              { style: rl.header },
              r.a.createElement(ue.b, { size: 'title3', weight: 'bold' }, Za),
              r.a.createElement(C.a, {
                accessibilityLabel: el,
                icon: r.a.createElement(Ja.a, { style: rl.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: rl.dismiss,
                type: 'brandText',
              }),
            ),
            r.a.createElement(ue.b, { style: rl.subtext }, $a),
            r.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: rl.list },
              ll.map(function (e) {
                var t = Boolean(n[e.flag])
                return r.a.createElement(
                  k.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : s.bind(null, e),
                    onKeyPress: t ? void 0 : u.bind(null, e),
                    style: [rl.entry, t ? rl.completedEntry : rl.uncompletedEntry],
                  },
                  r.a.createElement(ue.b, { weight: 'bold' }, e.title),
                  t
                    ? r.a.createElement(Ga.a, { accessibilityLabel: nl, style: rl.iconCompleted })
                    : r.a.createElement(Ya.a, { accessibilityLabel: al, style: rl.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        rl = F.a.create(function (e) {
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
        ol = Qa(il),
        sl = n('IAZG'),
        cl = n('QRqA'),
        ul = Object.freeze({ Home: 'home', Latest: 'latest' }),
        ml = void 0 !== Ta ? Ta : (Ta = n('R0yc')),
        dl = function (e) {
          var t = e.communityId,
            n = e.composeOptions,
            a = Object(sl.a)(ml, { communityId: t }).community,
            l = Object(ge.a)('c9s_participation_enabled'),
            i = Object(Bt.f)(),
            o = Object(Bt.g)(),
            s = Object(Bt.i)(),
            c = a.role === b.a.Admin && void 0 !== o.query.show_creation_summary,
            u = Object(b.g)(a.role) && l,
            m = Object(He.a)(a),
            d = r.a.useMemo(
              function () {
                return { canJoinCommunity: 'CommunityJoinAction' === a.actions.join_action_result.__typename, theme: m }
              },
              [m, a.actions.join_action_result],
            ),
            y = r.a.useMemo(
              function () {
                return u
                  ? r.a.createElement(qa.a, {
                      getLocationState: function () {
                        return n
                      },
                      history: i,
                    })
                  : null
              },
              [u, i, n],
            )
          return r.a.createElement(
            Va.a,
            { component: Fa.a, fab: y },
            r.a.createElement(cl.a, { forSingleCommunity: d }),
            c && r.a.createElement(za, { community: a }),
            r.a.createElement(la, { community: a }),
            r.a.createElement(
              Bt.d,
              null,
              r.a.createElement(
                Bt.b,
                { exact: !0, path: '/i/communities/'.concat(t, '/') },
                r.a.createElement(ol, { communityId: t }),
                r.a.createElement(Sa, { communityId: t, location: o, match: s, type: ul.Home }),
              ),
              r.a.createElement(
                Bt.b,
                { path: '/i/communities/'.concat(t, '/latest') },
                r.a.createElement(ol, { communityId: t }),
                r.a.createElement(Sa, { communityId: t, location: o, match: s, type: ul.Latest }),
              ),
              r.a.createElement(
                Bt.b,
                { exact: !0, path: '/i/communities/'.concat(t, '/about') },
                r.a.createElement(Ye, { community: a }),
              ),
            ),
          )
        },
        yl = { page: 'community', section: 'primaryContent' },
        pl = {
          type: 'CustomRetry',
          content: function () {
            return r.a.createElement(ra, null)
          },
        },
        gl = function (e) {
          return r.a.createElement(
            fa.c,
            { namespace: yl },
            r.a.createElement(
              Qn.a,
              { behavioralEventViewType: 'Community' },
              r.a.createElement(
                Wa.a,
                { errorConfig: { context: 'CommunityScreen' }, fallback: pl },
                r.a.createElement(Xa.a, null, r.a.createElement(dl, e)),
              ),
            ),
          )
        },
        fl = n('VS6U'),
        hl = { type: 'serversideContextKey', serversideContextType: 'community' },
        bl = _.a.a7c2e06c,
        vl = _.a.j24c37b2,
        _l = _.a.a94092a1,
        kl = _.a.i1fda797,
        El = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        Cl = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            c = e.fetchCommunityMemberships,
            u = e.hasShownModEducation,
            m = e.history,
            d = e.isCommunityMember,
            y = e.membershipsFetchStatus,
            p = e.screenName,
            g = e.setFlag,
            h = Object(ge.a)('c9s_participation_enabled'),
            v = Object(ge.a)('c9s_edit_moderators_enabled'),
            _ = r.a.useCallback(
              function () {
                n && i(n).catch(a({})), y === f.a.NONE && c().catch(a())
              },
              [y, i, n, c, a],
            )
          r.a.useEffect(
            function () {
              _()
            },
            [_],
          )
          var k = r.a.useCallback(
              function () {
                n && g(n, 'mod_education_flag', !0)
              },
              [n, g],
            ),
            E = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, hl), {}, { serversideContextId: n || '' }), viewType: 'community' }
              },
              [n],
            ),
            C = r.a.useMemo(
              function () {
                return El(n)
              },
              [n],
            ),
            S = null == t ? void 0 : t.name,
            F = null == t ? void 0 : t.role,
            I = !!d && h,
            w = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
            T = v && F === b.a.Moderator && !u,
            K = r.a.useMemo(
              function () {
                return r.a.createElement(J, { canModerate: Object(b.c)(F), communityId: n || '', userRole: F })
              },
              [F, n],
            ),
            L = r.a.useMemo(
              function () {
                return r.a.createElement(s.a, { communityId: n || '', withCommunityRules: w })
              },
              [n, w],
            ),
            M = r.a.useMemo(
              function () {
                return r.a.createElement(gl, { communityId: n || '', composeOptions: C })
              },
              [n, C],
            )
          return n
            ? r.a.createElement(
                o.a,
                { behavioralEventContext: E },
                r.a.createElement(fl.a, {
                  backLocation: p && '/'.concat(p, '/communities'),
                  composeOptions: C,
                  documentTitle: S ? bl({ communityName: S }) : '',
                  history: m,
                  primaryContent: M,
                  rightControl: K,
                  sidebarContent: L,
                  title: S || null,
                  withTweetButton: I,
                }),
                T
                  ? r.a.createElement(re.a, {
                      actionLabel: vl,
                      graphicDisplayMode: 'none',
                      headline: _l,
                      onAction: k,
                      onClose: k,
                      subtext: kl,
                      withCloseButton: !0,
                    })
                  : null,
              )
            : null
        },
        Sl = ie(Cl)
      t.default = Sl
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('ddV6'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        o = n('v6aA'),
        s = n('p+r5'),
        c = n('3XMw'),
        u = n.n(c),
        m = n('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        p = u.a.e988475f,
        g = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityPurpose,
            i = e.onChange,
            c = r.a.useState(void 0),
            u = l()(c, 2),
            g = u[0],
            f = u[1],
            h = r.a.useState(!1),
            b = l()(h, 2),
            v = b[0],
            _ = b[1],
            k = r.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            E = r.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.h)(t, 3, k)
                n && f(p({ minCharacterCount: 3, maxCharacterCount: k })), _(n), i(t, n)
              },
              [k, f, i],
            )
          return r.a.createElement(s.a, {
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
        l = n.n(a),
        i = n('ddV6'),
        r = n.n(i),
        o = (n('KqXw'), n('MvUL'), n('ERkP')),
        s = n.n(o),
        c = n('+Kfv'),
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
        L = b.a.c9d56b71,
        M = b.a.fc2a5c92,
        x = b.a.c1ad5a11,
        R = b.a.f713fbd1,
        O = { viewType: 'community' },
        A = s.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            i = Object(k.a)('c9s_community_creation_form_membership_type_enabled'),
            o = s.a.useState(!0),
            d = r()(o, 2),
            y = d[0],
            p = d[1],
            g = s.a.useState(!1),
            h = r()(g, 2),
            b = h[0],
            I = h[1],
            A = y || b,
            P = s.a.useState(''),
            D = r()(P, 2),
            B = D[0],
            H = D[1],
            N = s.a.useState(''),
            U = r()(N, 2),
            z = U[0],
            V = U[1],
            q = s.a.useState(null),
            W = r()(q, 2),
            X = W[0],
            Q = W[1],
            J = s.a.useCallback(function (e, t) {
              H(e), p(t)
            }, []),
            G = s.a.useCallback(function (e, t) {
              V(e), 0 === e.length ? I(!1) : I(t)
            }, []),
            Y = Object(w.e)(),
            Z = r()(Y, 2),
            $ = Z[0],
            ee = Z[1],
            te = s.a.useCallback(
              function () {
                return i ? l()({ description: z }, Object(w.c)($)) : { description: z }
              },
              [z, i, $],
            ),
            ne = s.a.useCallback(
              function () {
                Q(null),
                  n(B, te())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && a.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && Q(e)
                    })
                    .catch(function (e) {
                      Q({ error: 'GraphQL error', reason: e })
                    })
              },
              [B, n, te, a],
            )
          if (null == t || !t.create) return s.a.createElement(_.a, { to: '/home' })
          var ae = s.a.createElement(C.a, { disabled: A, onClick: ne, size: 'small', type: 'brandFilled' }, T),
            le = X
              ? s.a.createElement(
                  E.a,
                  { style: j.error },
                  s.a.createElement(S.a, { Icon: v.a, headline: M, text: x, type: 'danger' }),
                )
              : void 0
          return s.a.createElement(
            c.a,
            { behavioralEventContext: O },
            s.a.createElement(
              f.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: j.root,
                history: a,
                rightControl: ae,
                title: K,
              },
              s.a.createElement(
                s.a.Fragment,
                null,
                le,
                s.a.createElement(F.b, { color: 'gray700', style: j.text }, L),
                s.a.createElement(u.a, { autoFocus: !0, communityName: B, onChange: J }),
                s.a.createElement(m.a, { communityPurpose: z, onChange: G }),
                i
                  ? s.a.createElement(
                      s.a.Fragment,
                      null,
                      s.a.createElement(F.b, { size: 'headline2', style: j.membership, weight: 'bold' }, R),
                      s.a.createElement(w.d, { hideInvitePolicy: !0, setters: ee, state: $ }),
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
        l = n.n(a),
        i = n('yiKp'),
        r = n.n(i),
        o = n('ddV6'),
        s = n.n(o),
        c = n('ERkP'),
        u = n.n(c),
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
            l = e.userId
          if (
            (u.a.useEffect(
              function () {
                a && n(l, a)
              },
              [a, l, n],
            ),
            !a)
          )
            return null
          var i = a.role,
            r = a.user,
            o = r.id,
            s = r.screen_name
          return u.a.createElement(g.a, { communityId: t, communityRole: i, recordId: o, screenName: s, userId: l })
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
          i = e.onIsSearchingChange,
          o = (null == n ? void 0 : n.role) === k.a.Admin,
          c = u.a.useState(!1),
          d = s()(c, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState(''),
          f = s()(g, 2),
          h = f[0],
          b = f[1],
          F = u.a.useState({}),
          w = s()(F, 2),
          T = w[0],
          K = w[1],
          L = u.a.useCallback(
            function (e, t) {
              K(function (n) {
                return r()(r()({}, n), {}, l()({}, e, t))
              })
            },
            [K],
          ),
          M = u.a.useCallback(
            function () {
              p(!0), i(!0)
            },
            [i],
          ),
          x = u.a.useCallback(
            function (e) {
              b(e)
              var t = !!e
              i(t), p(t)
            },
            [i],
          ),
          R = u.a.useCallback(
            function () {
              h || (i(!1), p(!1))
            },
            [i, h],
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
              onDismiss: R,
              onFocus: M,
              onQueryChange: x,
              placeholder: C,
              renderUserDecoration: function (e) {
                var t = e.userId
                return u.a.createElement(v, { communityId: a, onCommunityRoleChange: L, userId: t })
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
    WWTc: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'MemberRequestsPivotContainerQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'MemberRequestsPivot_community' }],
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
            name: 'MemberRequestsPivotContainerQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: 'communityId', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
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
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'pending_join_request_count',
                            storageKey: null,
                          },
                          (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
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
            id: 'bgIrkbAlmbsKZJGcd7VGYg',
            metadata: {},
            name: 'MemberRequestsPivotContainerQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '9b955902020d0baa1431bc7848010386'), (t.default = r)
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
    atLU: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityBannerImageCustom_community',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiMedia',
            kind: 'LinkedField',
            name: 'custom_banner_media',
            plural: !1,
            selections: [
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
            ],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'f5fb6cadef5e830d674feb387a9eff99',
      }
      t.default = a
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        i = n('m3Bd'),
        r = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        c = n('v6aA'),
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
            i = e.hydratedTweet,
            o = (e.tweetId, r()(e, _)),
            u = s.a.useContext(c.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              y && Object(h.a)(t) && a(y).catch(n())
            },
            [t, y, n, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            g = i && Object(v.f)(i, d, t),
            f = g && Object(v.e)(g),
            k = m.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            b.a,
            l()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: p,
              socialContextProps: f,
              tweet: i,
              withReactions: k,
            }),
          )
        })
      t.a = k
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        l = n('23An'),
        i = n('Ud88'),
        r = n('aQQo'),
        o = r.loadQuery,
        s = r.useTrackLoadQueryInRender,
        c = n('ERkP'),
        u = c.useCallback,
        m = c.useEffect,
        d = c.useRef,
        y = c.useState,
        p = n('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : g,
          r = i()
        s()
        var c = l(),
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
              c.current && (p.current.add(g), v(g))
            },
            [c],
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
              if (c.current) {
                var l,
                  i = o(null !== (l = null == n ? void 0 : n.__environment) && void 0 !== l ? l : r, e, t, a)
                p.current.add(i), v(i)
              }
            },
            [r, e, v, c],
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
              if (c.current) {
                var n,
                  l = (0, a.default)(t)
                try {
                  for (l.s(); !(n = l.n()).done; ) {
                    var i = n.value
                    if (i === b) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (f(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (r) {
                  l.e(r)
                } finally {
                  l.f()
                }
              }
            },
            [b, c, S, e],
          ),
          m(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(p.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var l = t.value
                    'NullQueryReference' !== l.kind &&
                      (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
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
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
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
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                          (r = {
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (s = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                          r,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: s,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityMembers_Query_members_slice',
                    kind: 'LinkedHandle',
                    name: 'members_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  c,
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
        return I
      }),
        n.d(t, 'a', function () {
          return P
        }),
        n.d(t, 'b', function () {
          return N
        })
      var a,
        l,
        i = n('ERkP'),
        r = n.n(i),
        o = (n('enFi'), n('TEoO')),
        s = n('Fr3L'),
        c = (n('ho0z'), n('j57/')),
        u = n('ja7Y'),
        m = n('rHpw'),
        d = n('MjKK'),
        y = n('jAXQ'),
        p = n.n(y),
        g = function (e) {
          var t = e.item,
            l = p()(void 0 !== a ? a : (a = n('08/x')), t),
            i = Object(d.b)(l)
          return r.a.createElement(c.a, {
            communityId: l.rest_id,
            media: i,
            memberCount: l.member_count,
            membersFacepile: r.a.createElement(u.a, { community: l, shouldUseThemeColor: !1, style: f.facepile }),
            name: l.name,
          })
        },
        f = m.a.create(function (e) {
          return { facepile: { justifyContent: 'flex-start' } }
        }),
        h = r.a.memo(g),
        b = n('s8G+'),
        v = n('DQzJ'),
        _ = { context: 'CommunitiesSearchQuery' },
        k = function (e) {
          return e.__id
        },
        E = void 0 !== l ? l : (l = n('DVIF')),
        C = function (e) {
          return r.a.createElement(h, { item: e })
        },
        S = function (e) {
          var t,
            n = e.query,
            a = void 0 === n ? '' : n,
            l = Object(v.a)(E, { query: a }),
            i = l.data,
            s = l.fetchNext,
            c = null == i || null === (t = i.communities_search_slice) || void 0 === t ? void 0 : t.items
          return r.a.createElement(o.a, {
            cacheKey: 'CommunitiesSearch',
            identityFunction: k,
            items: c,
            onNearEnd: s,
            renderer: C,
          })
        },
        F = function (e) {
          var t = e.query
          return Object(b.a)('c9s_communities_search_enabled') && t
            ? r.a.createElement(s.a, { errorConfig: _ }, r.a.createElement(S, { query: t }))
            : null
        },
        I = r.a.memo(F),
        w = n('ddV6'),
        T = n.n(w),
        K = (n('KqXw'), n('MvUL'), n('VY6S')),
        L = n('6OUF'),
        M = n('3XMw'),
        x = n.n(M),
        R = n('VwDm'),
        O = n('zCf4'),
        A = x.a.fbf01e51,
        j = function (e) {
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
            i = T()(l, 2),
            o = i[0],
            s = i[1],
            c = Object(O.f)(),
            u = r.a.useCallback(
              function () {
                s(''), c.replace('/i/communities/suggested')
              },
              [c],
            ),
            m = r.a.useMemo(
              function () {
                return Object(K.a)(function (e) {
                  a.current && (e.length > 0 ? c.replace('/i/communities/suggested?q='.concat(e)) : u())
                }, 1e3)
              },
              [u, c],
            ),
            d = r.a.useCallback(
              function (e) {
                var t = e.target.value
                s(t), m(t)
              },
              [m],
            )
          return r.a.createElement(L.a, {
            Icon: R.a,
            autoComplete: 'off',
            isCompact: !0,
            onChange: d,
            onClear: u,
            placeholder: A,
            value: o,
            withClearButton: !0,
          })
        },
        P = r.a.memo(j),
        D = n('/yvb'),
        B = x.a.fbf01e51,
        H = function (e) {
          return Object(b.a)('c9s_communities_search_enabled')
            ? r.a.createElement(D.a, {
                icon: r.a.createElement(R.a, { accessibilityLabel: B, style: U.searchButton }),
                link: '/i/communities/suggested',
                size: 'medium',
                type: 'brandText',
              })
            : null
        },
        N = r.a.memo(H),
        U = m.a.create(function (e) {
          return { searchButton: { color: e.colors.text } }
        })
    },
    'cd+Z': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'MemberRequestsPivot_community',
        selections: [
          { alias: 'communityId', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
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
        hash: 'aa55c598ec362c825293e24820d368a3',
      }
      t.default = a
    },
    'cz/h': function (e, t, n) {
      'use strict'
      n.r(t)
      n('lTEL'), n('7x/C'), n('87if'), n('kYxP'), n('KrtT'), n('KqXw'), n('LJOr')
      var a = n('ERkP'),
        l = n.n(a),
        i = n('es0u'),
        r = n('WpDa'),
        o = n('ZNT5'),
        s = Object(o.a)({
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
          formatResponse: r.a,
        }),
        c = n('OUEC'),
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
            r = l.a.useCallback(function () {
              return l.a.createElement(y.a, { entryConfiguration: c.a, module: s, refreshControl: null, title: b })
            }, []),
            o = l.a.useMemo(
              function () {
                var e
                return null !== (e = new URLSearchParams(n.search).get('q')) && void 0 !== e ? e : void 0
              },
              [n.search],
            ),
            u = l.a.useCallback(
              function () {
                return o ? l.a.createElement(f.c, { query: o }) : r()
              },
              [r, o],
            ),
            m = a ? u() : r()
          return l.a.createElement(
            d.a,
            { behavioralEventViewType: 'discover' },
            l.a.createElement(p.a, {
              backLocation: '/',
              customSearchBox: a ? l.a.createElement(f.a, { initialValue: o }) : null,
              history: t,
              primaryContent: m,
              sidebarContent: l.a.createElement(i.a, null),
              title: b,
              withSearchBox: a,
            }),
          )
        }
      t.default = l.a.memo(v)
    },
    dMLx: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityBannerImage_community',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageCustom_community' },
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageDefault_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'aecce1c8907386fe71248f72f90e1e26',
      }
      t.default = a
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
        l = n.n(a),
        i = n('VrFO'),
        r = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
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
        L = F.a.gd80afba,
        M = F.a.a753a87f,
        x = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              f()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              f()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return l.a.createElement(
                  T.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: w, type: 'primaryFilled' },
                  M,
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
                    l = n.analytics,
                    i = n.media,
                    r = n.mediaId,
                    o = n.onDone,
                    s = n.processMedia,
                    c = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (i || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(h.a)(r) &&
                    (e
                      ? (e(u), o())
                      : (c({ id: r, cropData: d ? void 0 : u }),
                        s(r).then(function () {
                          a.setState({ isProcessing: !1 }), l.scribe({ action: 'done' }), o()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = l.a.createRef()),
              e.media || e.onCancel(),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    a = e.title,
                    i = e.withAspectRatioOptions,
                    r = e.withZoomControl,
                    o = this._getMedia()
                  return l.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: R.root,
                      documentTitle: a || L,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || L,
                    },
                    l.a.createElement(I.a, {
                      defaultAspectRatio: t,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: i,
                      withZoomControl: r,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(l.a.Component),
        R = K.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(x),
        A = n('X8FW'),
        j = K.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return l.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: j.modal },
          l.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  i,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      r,
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
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                                              r,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  (c = {
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
                                                      i,
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
                                                  s,
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
                                        selections: [c, s],
                                        storageKey: null,
                                      },
                                      s,
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
                                        selections: (u = [r]),
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
                                      s,
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
                          s,
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  s,
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
        l = n.n(a),
        i = n('v6aA'),
        r = n('Ig1G'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('Nh1N'),
        u = n('MWbm'),
        m = n('4zmP'),
        d = n('rHpw'),
        y = s.a.b6e22e15,
        p = s.a.d17c10d9,
        g = s.a.a1ecaf33,
        f = l.a.memo(function (e) {
          var t,
            n = e.community,
            a = l.a.useContext(i.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !n || n.role !== r.a.Admin || a
            ? null
            : l.a.createElement(
                u.a,
                { style: h.info },
                l.a.createElement(m.a, {
                  Icon: c.a,
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
        return r
      })
      n('FtFR')
      var a = n('ERkP'),
        l = n.n(a),
        i = n('wtru')
      function r(e) {
        var t = Object(i.b)()
        return [
          !!t && !t.flags[e],
          l.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    'j57/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = (n('ho0z'), n('ERkP')),
        r = n.n(i),
        o = n('+Kfv'),
        s = n('zCf4'),
        c = n('MWbm'),
        u = n('TIdA'),
        m = n('A91F'),
        d = n('rHpw'),
        y = n('MtXG'),
        p = n('t62R'),
        g = n('htQn'),
        f = n('MAI/'),
        h = n('3XMw'),
        b = n.n(h),
        v = b.a.d58baa7e,
        _ = { type: 'serversideContextKey', serversideContextType: 'community' },
        k = function (e) {
          var t = e.crop,
            n = e.image
          return r.a.createElement(
            c.a,
            { style: S.thumbnailContainer },
            r.a.createElement(u.a, {
              accessibilityLabel: '',
              aspectMode: m.a.SQUARE,
              backgroundColor: d.a.theme.colors.gray300,
              cropCandidates: t,
              image: n,
            }),
          )
        },
        E = function (e) {
          var t = e.communityId,
            n = e.count,
            a = v(n),
            l = '/i/communities/'.concat(t, '/members'),
            i = Object(s.f)(),
            o = r.a.useCallback(
              function (e) {
                e.preventDefault(), i.push(l)
              },
              [i, l],
            )
          return r.a.createElement(
            y.a.Group,
            null,
            r.a.createElement(
              y.a,
              { onPress: o },
              r.a.createElement(
                p.b,
                { color: 'gray700' },
                r.a.createElement(
                  b.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  r.a.createElement(y.a.Value, null, b.a.ibd0106d({ formattedCount: a })),
                  r.a.createElement(y.a.Label, null, b.a.cface2d0({ count: n })),
                ),
              ),
            ),
          )
        },
        C = function (e) {
          var t = e.communityId,
            n = e.media,
            a = e.memberCount,
            i = e.membersFacepile,
            s = e.name,
            u = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, _), {}, { serversideContextId: t }), viewType: 'community_cell' }
              },
              [t],
            ),
            m = '/i/communities/'.concat(t)
          return r.a.createElement(
            o.a,
            { behavioralEventContext: u },
            r.a.createElement(
              g.a,
              { link: m, style: S.root },
              r.a.createElement(
                c.a,
                { style: S.container },
                r.a.createElement(
                  c.a,
                  { style: S.leftColumn },
                  n ? r.a.createElement(k, n) : null,
                  r.a.createElement(
                    c.a,
                    { style: S.attribution },
                    r.a.createElement(
                      c.a,
                      { style: S.name },
                      r.a.createElement(p.b, { numberOfLines: 1, weight: 'bold' }, s),
                    ),
                    r.a.createElement(E, { communityId: t, count: a }),
                    Array.isArray(i)
                      ? r.a.createElement(f.a, { style: S.facepile, userAvatarSize: 'large', userAvatarUrls: i })
                      : i,
                  ),
                ),
              ),
            ),
          )
        }
      t.a = r.a.memo(C)
      var S = d.a.create(function (e) {
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
      })
    },
    ja7Y: function (e, t, n) {
      'use strict'
      n('KOtZ'), n('7x/C')
      var a,
        l = n('ERkP'),
        i = n.n(l),
        r = n('1Xyu'),
        o = n('s8G+'),
        s = n('X00g'),
        c = n('MAI/'),
        u = (n('enFi'), n('jAXQ')),
        m = n.n(u)
      t.a = function (e) {
        var t = e.community,
          l = e.shouldUseThemeColor,
          u = void 0 === l || l,
          d = e.style,
          y = m()(void 0 !== a ? a : (a = n('Eh7u')), t),
          p = Object(o.a)('c9s_ui_colors_enabled_rweb') && u,
          g = (function (e) {
            return e.reduce(function (e, t) {
              var n = t.result
              if ('User' === (null == n ? void 0 : n.__typename)) {
                var a,
                  l = null === (a = n.legacy) || void 0 === a ? void 0 : a.profile_image_url_https
                l && e.push(l)
              }
              return e
            }, [])
          })(y.members_facepile_results),
          f = Object(r.b)(y),
          h = p ? s.a.getCommunityBackgroundColorName(f) : void 0
        return g.length > 0
          ? i.a.createElement(c.a, { borderColor: h, style: d, userAvatarSize: 'large', userAvatarUrls: g })
          : null
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        i = n('m3Bd'),
        r = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        c = n('t62R'),
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
          i = e.label,
          o = r()(e, p),
          f = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          y.a,
          { style: g.container },
          s.a.createElement(
            m.a,
            l()({}, o, { interactiveStyles: f, style: g.root }),
            s.a.createElement(c.b, { align: n, color: a }, i),
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
        l,
        i,
        r = n('ERkP'),
        o = n.n(r),
        s = n('v6aA'),
        c = n('WpDa'),
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
            l = e.userResult,
            i = _()(void 0 !== a ? a : (a = n('tgdH')), l).result
          if (!i || 'User' !== i.__typename || !i.legacy) return null
          var r = i.community_role,
            s = i.id,
            c = i.legacy,
            u = c.id_str,
            d = c.name,
            y = void 0 === d ? '' : d,
            p = c.profile_image_url_https,
            g = c.protected,
            f = c.screen_name,
            v = c.verified
          if (!f || !p || !y) return null
          var k = Object(m.d)(r),
            E = o.a.createElement(h.a, { communityId: t, communityRole: r, recordId: s, screenName: f, userId: u })
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
        S = void 0 !== l ? l : (l = n('cI4y')),
        F = function (e) {
          return e.__id
        },
        I = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(E.a)(S, { communityId: t }),
            l = a.data,
            i = a.fetchNext,
            r = l.community.members_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(t),
            identityFunction: F,
            items: r,
            noItemsRenderer: n,
            onNearEnd: i,
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
        L = void 0 !== i ? i : (i = n('w9f9')),
        M = function (e) {
          return e.__id
        },
        x = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(E.a)(L, { communityId: t }),
            l = a.data,
            i = a.fetchNext,
            r = l.community.moderators_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(t),
            identityFunction: M,
            items: r,
            noItemsRenderer: n,
            onNearEnd: i,
            renderer: function (e) {
              return o.a.createElement(k, { communityId: t, userResult: e })
            },
          })
        },
        R = function (e) {
          return o.a.createElement(f.a, { errorConfig: K }, o.a.createElement(x, e))
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
              formatResponse: c.a,
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
              formatResponse: c.a,
            })
          })(e)
        }),
        z = function () {
          return o.a.createElement(d.a, { header: A, message: j })
        }
      t.b = function (e) {
        var t = o.a.useContext(s.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          n = e.communityId,
          a = e.mode,
          l = e.userRole,
          i = a === H.Moderators
        if (t && l === m.a.Admin)
          return i
            ? o.a.createElement(R, { communityId: n, renderEmptyState: z })
            : o.a.createElement(w, { communityId: n, renderEmptyState: z })
        var r = i ? U(n) : N(n),
          c = i ? D : B
        return o.a.createElement(O.a, { loadingAccessibilityLabel: c, module: r, renderEmptyState: z, title: P })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return we
        })
      n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        l = n.n(a),
        i = n('v6aA'),
        r = n('Ig1G'),
        o = n('EPsT'),
        s = n('eSoz'),
        c = n('rxPX'),
        u = n('0KEI'),
        m = n('R5kW'),
        d = function (e, t) {
          var n,
            a = Object(m.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        y = function (e, t) {
          return Object(m.c)(e, t.communityId)
        },
        p = Object(c.a)()
          .propsFromState(function () {
            return { count: d, moderationFetchStatus: y }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              updateModeratorRole: s.c.updateRole,
              fetchCommunityModerationData: m.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        g = n('kGix'),
        f = n('3XMw'),
        h = n.n(f),
        b = (n('enFi'), n('yiKp')),
        v = n.n(b),
        _ = n('Lsrn'),
        k = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(k.a)(
            'svg',
            v()(
              v()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var C,
        S = E,
        F = n('KQzH'),
        I = n('s8G+'),
        w = n('jAXQ'),
        T = n.n(w),
        K = n('Znyr'),
        L = n('rHpw'),
        M = h.a.gfccba44,
        x = h.a.h6beb5fa,
        R = h.a.dde5f322,
        O = void 0 !== C ? C : (C = n('cd+Z'))
      function A(e) {
        var t = e.community,
          n = Object(I.a)('c9s_request_to_join_enabled'),
          a = T()(O, t),
          i = a.communityId,
          r = a.join_requests_result,
          o = 'CommunityJoinRequests' === r.__typename,
          s = l.a.useCallback(
            function () {
              var e = r.pending_join_request_count,
                t = void 0 === e ? 0 : e
              return t > 0
                ? l.a.createElement(K.a, {
                    count: t,
                    standalone: !0,
                    truncatedCountFormatter: x,
                    unreadCountLabel: R,
                    withBorder: !1,
                  })
                : null
            },
            [r],
          )
        return n && o
          ? l.a.createElement(F.a, {
              label: M,
              link: '/i/communities/'.concat(i, '/moderation/member_requests'),
              renderRightContent: s,
              thumbnail: B,
            })
          : null
      }
      var j,
        P = l.a.memo(A),
        D = L.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        B = l.a.createElement(S, { style: D.thumbnail }),
        H = n('Fr3L'),
        N = n('IAZG'),
        U = { context: 'MemberRequestsPivotContainerQuery' },
        z = void 0 !== j ? j : (j = n('WWTc')),
        V = function (e) {
          var t = e.communityId,
            n = Object(N.a)(z, { communityId: t })
          return l.a.createElement(P, { community: n.community })
        },
        q = function (e) {
          return l.a.createElement(H.a, { errorConfig: U }, l.a.createElement(V, { communityId: e.communityId }))
        },
        W = l.a.memo(q),
        X = n('yoO3'),
        Q = n('mWs5'),
        J = n('MWbm'),
        G = n('6vad'),
        Y = n('csss'),
        Z = n('OOKO'),
        $ = n('zIWA'),
        ee = n('M2x3'),
        te = n('SNyS'),
        ne = n('S+H3'),
        ae = n('PU7B'),
        le = h.a.dce5e1b3,
        ie = h.a.c5d8c93d,
        re = h.a.c8c7f9fc,
        oe = h.a.c045c7b6,
        se = h.a.a87df2ee,
        ce = h.a.dc6ce7b4,
        ue = h.a.gfca5254,
        me = h.a.bb081ea1,
        de = h.a.h6beb5fa,
        ye = h.a.e3f04700,
        pe = h.a.efc26607,
        ge = h.a.adfcc3cd,
        fe = h.a.d0330d9c,
        he = h.a.fd67f7c8,
        be = h.a.gc00d212,
        ve = h.a.a997eca0,
        _e = { label: h.a.c6ea29a1, header: h.a.a6e13fac, text: h.a.e538848b, confirmButtonLabel: h.a.j49e6aa2 },
        ke = L.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        Ee = l.a.createElement($.a, { style: ke.thumbnail }),
        Ce = l.a.createElement(ee.a, { style: ke.thumbnail }),
        Se = l.a.createElement(te.a, { style: ke.thumbnail }),
        Fe = l.a.createElement(ne.a, { style: ke.thumbnail }),
        Ie = l.a.createElement(ae.a, { style: ke.thumbnail }),
        we = function (e) {
          var t = l.a.useContext(i.a),
            n = t.featureSwitches,
            a = t.loggedInUserId,
            s = e.community,
            c = e.communityId,
            u = e.count,
            m = e.createLocalApiErrorHandler,
            d = e.fetchCommunityModerationData,
            y = e.history,
            p = e.match,
            f = e.moderationFetchStatus,
            h = e.updateModeratorRole,
            b = m(),
            v = n.isTrue('c9s_moderation_enabled'),
            _ = n.isTrue('c9s_rule_management_enabled'),
            k = n.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              f === g.a.NONE && v && d(c).catch(b)
            },
            [b, c, d, f, v],
          )
          var E = l.a.useCallback(
              function () {
                return v && u > 0
                  ? l.a.createElement(K.a, {
                      count: u,
                      standalone: !0,
                      truncatedCountFormatter: de,
                      unreadCountLabel: ye,
                      withBorder: !1,
                    })
                  : null
              },
              [u, v],
            ),
            C = s.role,
            S = C === r.a.Admin ? le : ie,
            I = C === r.a.Admin ? ge : fe,
            w = !p.isExact
          return l.a.createElement(
            X.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              Q.a,
              { communityId: c, screenType: 'secondaryRoot', title: S, withDetailOpen: w },
              l.a.createElement(
                J.a,
                null,
                v
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(G.b, { text: re }),
                      l.a.createElement(F.a, {
                        label: oe,
                        link: '/i/communities/'.concat(c, '/moderation/reported_tweets'),
                        renderRightContent: E,
                        thumbnail: Ee,
                      }),
                    )
                  : null,
                l.a.createElement(W, { communityId: c }),
                l.a.createElement(G.b, { text: se }),
                l.a.createElement(F.a, {
                  description: pe({ memberCount: s.member_count }),
                  label: ce,
                  link: '/i/communities/'.concat(c, '/tools/members'),
                  thumbnail: Fe,
                }),
                _
                  ? l.a.createElement(F.a, {
                      description: I,
                      label: ue,
                      link: '/i/communities/'.concat(c, '/tools/rules'),
                      thumbnail: Ie,
                    })
                  : null,
                C === r.a.Admin
                  ? l.a.createElement(F.a, {
                      description: he,
                      label: me,
                      link: '/i/communities/'.concat(c, '/tools/settings'),
                      thumbnail: Ce,
                    })
                  : null,
                l.a.createElement(Y.a, {
                  description: ve,
                  label: be,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: Se,
                }),
                C === r.a.Moderator && k
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(Z.a, { spacing: 'space1' }),
                      l.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: _e.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: _e.header,
                        confirmationSheetText: _e.text,
                        label: _e.label,
                        onConfirmationSheetConfirm: function () {
                          a &&
                            h(c, { userId: a, role: r.a.Member }).then(function () {
                              y.push('i/communities/'.concat(c))
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
        Te = p(we)
      t.default = Te
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
        l,
        i,
        r = n('97Jx'),
        o = n.n(r),
        s = n('m3Bd'),
        c = n.n(s),
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
        L = n.n(K),
        M = n('1YZw'),
        x = n('uDfI'),
        R = n('MWbm'),
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
        V = void 0 !== l ? l : (l = n('Dm5+')),
        q = void 0 !== i ? i : (i = n('C2fM')),
        W = C.a.i22835dd,
        X = C.a.cb59a0fd,
        Q = C.a.ic7db4ea,
        J = void 0 !== H ? H : (H = n('PMbW')),
        G = function (e) {
          var t = e.communityId,
            n = e.communityJoinRequestActions,
            a = e.userId,
            l = P()(J, n),
            i = l.join_request_approve_action_result,
            r = l.join_request_deny_action_result,
            o = (function () {
              var e = B()(V),
                t = L()(e, 2),
                n = t[0],
                a = t[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: l },
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
            s = L()(o, 2),
            c = s[0],
            u = s[1],
            d = (function () {
              var e = B()(q),
                t = L()(e, 2),
                n = t[0],
                a = t[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: l },
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
            y = L()(d, 2),
            p = y[0],
            g = y[1],
            f = Object(x.c)(),
            h = u || g,
            b = 'CommunityJoinRequestDenyAction' === (null == r ? void 0 : r.__typename),
            v = 'CommunityJoinRequestApproveAction' === (null == i ? void 0 : i.__typename),
            _ = m.a.useCallback(
              function () {
                p({ communityId: t, userId: a }).catch(function () {
                  f(Object(M.b)({ text: Q }))
                })
              },
              [f, p, t, a],
            ),
            k = m.a.useCallback(
              function () {
                c({ communityId: t, userId: a }).catch(function () {
                  f(Object(M.b)({ text: Q }))
                })
              },
              [f, c, t, a],
            )
          return m.a.createElement(
            R.a,
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
        le = n('6Rrp'),
        ie = n('5oT/'),
        re = void 0 !== N ? N : (N = n('8vG3')),
        oe = C.a.d7f13fb8,
        se = C.a.a340df66,
        ce = function (e) {
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
            n = P()(re, t),
            a = n.user_relationship.community.id_str,
            l = n.user_relationship.user_results.result,
            i = n.state
          if (!l || 'User' !== l.__typename || !l.legacy) return null
          var r = l.id_str,
            o = l.legacy,
            s = o.blocking,
            c = o.description,
            u = o.followed_by,
            d = o.following,
            y = o.muting,
            p = o.name,
            g = o.profile_image_url_https,
            f = o.screen_name
          if (!g || !f || !p) return null
          switch (i) {
            case 'Approved':
              return m.a.createElement(ce, { icon: ge, label: oe({ screenName: f }) })
            case 'Denied':
              return m.a.createElement(ce, { icon: fe, label: se({ screenName: f }) })
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
            })({ blocking: s, muting: y }),
            _ = m.a.createElement(
              R.a,
              null,
              v && m.a.createElement(ee.b, { color: 'red500', style: pe.bottomText }, v),
              m.a.createElement(G, { communityId: a, communityJoinRequestActions: n.actions, userId: r }),
            )
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(ne.a, {
              avatarUri: g,
              bottomControl: _,
              description: c || void 0,
              displayMode: 'UserDetailed',
              entities: de,
              name: p,
              screenName: f,
              screenNameSuffix: m.a.createElement(ae.a, { color: 'gray700', timestamp: h }),
              socialContext: b,
              userId: r,
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
        ge = m.a.createElement(le.a, { style: pe.icon }),
        fe = m.a.createElement(ie.a, { style: pe.icon }),
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
        Le = void 0 !== z ? z : (z = n('gAl+')),
        Me = function (e) {
          var t = Object(Fe.f)(),
            n = e.communityId,
            a = Object(Ie.a)(Le, { communityId: n }),
            l = a.data,
            i = a.fetchNext,
            r = l.community,
            o = r.join_requests_result,
            s = r.name
          if ('CommunityJoinRequests' === o.__typename) {
            var c = o.pending_join_requests_slice,
              u = m.a.createElement(k.a, {
                communityId: n,
                withCommunityRules: !0,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              d = m.a.createElement(Ce, { communityJoinRequests: c, fetchNext: i })
            return m.a.createElement(
              F.a,
              { behavioralEventViewType: Te },
              m.a.createElement(Se.a, {
                backLocation: '/i/communities/'.concat(n, '/tools'),
                history: t,
                primaryContent: d,
                sidebarContent: u,
                subtitle: s,
                title: we,
              }),
            )
          }
          return m.a.createElement(S.a, null)
        },
        xe = function (e) {
          var t = e.communityId
          return m.a.createElement(I.a, { errorConfig: Ke }, m.a.createElement(Me, { communityId: t }))
        },
        Re = n('/de5'),
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
        Qe = function (e) {
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
        Je = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            a = t.created_at,
            l = t.reporter,
            i = m.a.createElement(ae.a, { timestamp: a })
          return l
            ? m.a.createElement(Ve.a, null, function (e) {
                var a = e.windowWidth
                return m.a.createElement(
                  R.a,
                  { style: n ? Ye.bottomBorder : null },
                  m.a.createElement(ne.a, {
                    avatarUri: l.profile_image_url_https,
                    decoration: i,
                    displayMode: 'UserCompact',
                    isProtected: l.protected,
                    isVerified: l.verified,
                    name: l.name,
                    screenName: l.screen_name,
                    style: a > A.a.theme.breakpoints.small ? Ye.userCell : void 0,
                    userId: l.id_str,
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
            n = L()(t, 2),
            a = n[0],
            l = n[1],
            i = e.reports,
            r = e.tweetCase,
            o = r.report_count,
            s = r.report_created_at_max
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(
              We.a,
              {
                contentStyle: Ye.popover,
                onDismiss: function () {
                  l(!1)
                },
                renderContent: function () {
                  return m.a.createElement(
                    R.a,
                    { style: Ye.contentContainer },
                    i.map(function (e, t) {
                      return m.a.createElement(Je, { key: e.id_str, report: e, withBottomBorder: t < i.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              m.a.createElement(
                ee.b,
                {
                  onPress: function () {
                    l(!0)
                  },
                },
                Qe(o),
              ),
            ),
            m.a.createElement(Xe.a, null),
            m.a.createElement(ae.a, { timestamp: s }),
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
        lt = function (e, t) {
          var n = t.tweetId
          return n ? at.a.selectHydrated(e, n) : void 0
        },
        it = function (e, t) {
          var n = t.tweetId
          return nt.select(e, n)
        },
        rt = function (e, t) {
          var n = lt(e, t)
          return !!n && Object(f.h)(e, n)
        },
        ot = Object(h.a)()
          .propsFromState(function () {
            return { tweet: lt, tweetCase: it, disableRemoveFromCommunity: rt }
          })
          .propsFromActions(function () {
            return { keep: nt.keepTweet, dismiss: nt.dismissTweet }
          }),
        st = n('b5s6'),
        ct = n('mjJ+'),
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
              var l = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                i = [{ label: bt(l), decoration: Et }]
              return m.a.createElement($.a, { accessibilityLabel: ht, containerStyle: _t.container, items: i })
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
        Et = m.a.createElement(le.a, { style: _t.icon }),
        Ct = { page: 'reported_tweets', component: 'tweet' },
        St = { viewType: 'tweet_moderation_case' },
        Ft = C.a.f1d9930c,
        It = C.a.a219e217,
        wt = C.a.fa524057,
        Tt = C.a.g30bc699,
        Kt = C.a.f0306107,
        Lt = C.a.b99364a5,
        Mt = ot(function (e) {
          var t,
            n = m.a.useContext(d.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            l = e.keep,
            i = e.tweet,
            r = e.tweetCase,
            o = e.tweetId,
            s = null == i || null === (t = i.user) || void 0 === t ? void 0 : t.screen_name,
            c = m.a.useCallback(
              function (t) {
                if (i && s) {
                  var a = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: Tt({ screenName: s }),
                      Icon: mt.a,
                      link: '/'.concat(s),
                    },
                    {
                      text: Kt,
                      Icon: dt.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(yt.a.Tweet, '/').concat(i.id_str),
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
                        text: Lt({ screenName: s }),
                        Icon: ie.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(yt.a.RemoveCommunityMember, '/').concat(i.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Ct },
                        },
                        onClick: function () {
                          t()
                        },
                      }),
                    m.a.createElement(ct.a, { items: a, onCloseRequested: t })
                  )
                }
                return null
              },
              [i, s, n, e.disableRemoveFromCommunity],
            ),
            u = function () {
              l(o)
            },
            p = function () {
              a(o)
            }
          if (s && (null == i ? void 0 : i.reportingVisibility) === yt.b.HiddenCommunityTweet)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(vt, { screenName: s, type: gt.Hidden }),
              m.a.createElement(te.a, null),
            )
          if (
            (null != r && r.isDismissed) ||
            'community_tweet_member_removed' === (null == i ? void 0 : i.limited_actions)
          )
            return null
          if (s && null != r && r.isKept)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(vt, { screenName: s, type: gt.Kept }),
              m.a.createElement(te.a, null),
            )
          if (!r) return null
          return m.a.createElement(
            y.a,
            { behavioralEventContext: St },
            m.a.createElement(
              R.a,
              { style: xt.container },
              m.a.createElement(
                R.a,
                { style: xt.reportsBar },
                m.a.createElement(Ge, { tweetCase: r }),
                m.a.createElement(ut.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: c,
                  style: xt.menu,
                }),
              ),
              m.a.createElement(st.a, { tweetId: o }),
              i
                ? m.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= A.a.theme.breakpoints.small
                    return m.a.createElement(
                      R.a,
                      { style: [xt.buttons, t && xt.buttonsMobile] },
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(yt.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Ae()(Ae()({}, Ct), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [xt.button, t && xt.buttonMobile],
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
                          style: [xt.button, t && xt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        wt,
                      ),
                    )
                  })
                : m.a.createElement(
                    R.a,
                    { style: xt.buttons },
                    m.a.createElement(
                      O.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: p,
                        style: xt.button,
                        type: 'primaryOutlined',
                      },
                      It,
                    ),
                  ),
            ),
            m.a.createElement(te.a, null),
          )
        }),
        xt = A.a.create(function (e) {
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
        Rt = n('hqKg'),
        Ot = n('wAC9'),
        At = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        jt = function () {
          return Object(Rt.createSelector)(At, function (e) {
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
            l = e.sliceModule,
            i = n.id_str,
            r = n.name,
            o = (n || []).rules,
            s = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            c = t.isTrue('responsive_web_communities_slices_enabled'),
            u = l
              ? m.a.createElement(Dt.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return m.a.createElement(w.a, { header: Ht, message: Nt })
                  },
                  renderer: function (e) {
                    return m.a.createElement(Mt, { tweetId: e })
                  },
                })
              : null
          return m.a.createElement(
            F.a,
            { behavioralEventViewType: 'reported_tweets' },
            m.a.createElement(Se.a, {
              backLocation: '/i/communities/'.concat(i),
              history: a,
              primaryContent: c ? u : null,
              sidebarContent: m.a.createElement(k.a, {
                communityId: i,
                rulesLimit: null == o ? void 0 : o.length,
                withCommunityRules: s,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: r,
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
          a = c()(e, zt),
          l = a.match.path,
          i = t.isTrue('c9s_request_to_join_enabled')
        return Object(p.c)(n.role)
          ? m.a.createElement(
              y.a,
              { behavioralEventContext: qt },
              m.a.createElement(
                Fe.d,
                null,
                m.a.createElement(
                  Fe.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  m.a.createElement(Ut, o()({}, a, { community: n })),
                ),
                i
                  ? m.a.createElement(
                      Fe.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      m.a.createElement(xe, { communityId: n.id_str }),
                    )
                  : null,
                m.a.createElement(Fe.b, null, m.a.createElement(Re.b, a)),
              ),
            )
          : m.a.createElement(Re.b, a)
      }
      function Xt(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          i = c()(e, Vt),
          r = i.match.params.communityId,
          s = m.a.useCallback(
            function () {
              r && a(r).catch(n())
            },
            [r, n, a],
          )
        return (
          m.a.useEffect(
            function () {
              return s()
            },
            [s],
          ),
          m.a.createElement(_.a, {
            fetchStatus: l,
            onRequestRetry: s,
            render: function () {
              return t ? m.a.createElement(Wt, o()({}, i, { community: t })) : null
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
        l = n.n(a),
        i = n('3XMw'),
        r = n.n(i),
        o = n('M2mT'),
        s = n('zCf4'),
        c = n('MWbm'),
        u = n('mw9i'),
        m = n('0yYu'),
        d = n('/yvb'),
        y = n('rHpw'),
        p = r.a.i2209530
      function g(e) {
        var t = e.children,
          n = e.communityId,
          a = e.onSubmit,
          i = e.rightControl,
          r = e.screenType,
          y = e.secondaryBar,
          g = e.submitDisabled,
          h = e.subtitle,
          b = e.title,
          v = e.withBottomBorder,
          _ = e.withDetailOpen,
          k = Object(s.f)(),
          E = 'secondaryRoot' === r,
          C = '/i/communities/'.concat(n),
          S = ''.concat(C, '/tools'),
          F = E ? C : S,
          I = l.a.useCallback(
            function () {
              E ? k.replace(F) : k.goBack({ backLocation: F })
            },
            [F, k, E],
          )
        return l.a.createElement(
          o.a,
          {
            backLocation: F,
            onBackClick: I,
            rightControl: i,
            screenType: r,
            secondaryBar: y,
            showSubtitleOnWideDetail: !1,
            subtitle: h,
            title: b,
            withBottomBorder: v,
            withDetailOpen: _,
          },
          l.a.createElement(
            u.a,
            { style: f.contentRoot },
            l.a.createElement(c.a, { style: f.chilrenRoot }, t),
            a
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(m.a, null),
                  l.a.createElement(
                    u.a,
                    { style: f.buttonContainer },
                    l.a.createElement(d.a, { disabled: g, onPress: a, style: f.button, type: 'brandFilled' }, p),
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
        l = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        r = n.n(i),
        o = n('v6aA'),
        s = n('eSoz'),
        c = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('1Idg'),
        y = function (e, t) {
          return Object(c.C)(e, c.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: y }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.y)(c.h)
              },
              editRule: s.c.editRule,
              removeRule: s.c.removeRule,
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
        L = b.a.a1c93d73,
        M = b.a.f74a5adb,
        x = b.a.fbb0ed91,
        R = b.a.gea6cc19,
        O = b.a.hed35471,
        A = b.a.c8677445,
        j = b.a.c3a0d44e
      function P(e) {
        var t = r.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          i = e.createLocalApiErrorHandler,
          s = e.editRule,
          c = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          p = a.id_str,
          h = a.rules,
          b = r.a.useState(''),
          w = l()(b, 2),
          P = w[0],
          B = w[1],
          H = r.a.useState(''),
          N = l()(H, 2),
          U = N[0],
          z = N[1],
          V = r.a.useState(!1),
          q = l()(V, 2),
          W = q[0],
          X = q[1],
          Q = r.a.useState(''),
          J = l()(Q, 2),
          G = J[0],
          Y = J[1],
          Z = r.a.useState(!1),
          $ = l()(Z, 2),
          ee = $[0],
          te = $[1],
          ne = r.a.useState(!1),
          ae = l()(ne, 2),
          le = ae[0],
          ie = ae[1],
          re = r.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              B(n), z(t), X(a)
            },
            [B, z, X],
          ),
          oe = r.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : L
                  return Y(n), X(!1), []
                },
              })
              'string' == typeof d &&
                s(p, { ruleId: d, name: P, description: U })
                  .then(function () {
                    c.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, P, U, d, s, c, i],
          ),
          se = r.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : L
                  return Y(n), te(!1), []
                },
              })
              'string' == typeof d &&
                u(p, { ruleId: d })
                  .then(function () {
                    c.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, d, u, c, i],
          )
        if (!d || !m) return r.a.createElement(v.a, { to: '/i/communities/'.concat(p, '/tools/rules') })
        var ce = m.description,
          ue = m.name,
          me = r.a.createElement(
            C.a,
            {
              disabled: !W,
              onPress: function () {
                y ? ie(!0) : oe()
              },
              size: 'small',
              type: 'brandFilled',
            },
            K,
          ),
          de = 1 === h.length,
          ye = t
            ? r.a.createElement(
                E.a,
                { style: D.delete },
                r.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: x,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          pe = de ? r.a.createElement(E.a, { style: D.callout }, r.a.createElement(F.a, { text: M })) : void 0,
          ge = ee
            ? r.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: R,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: se,
                text: O,
              })
            : void 0,
          fe = le
            ? r.a.createElement(k.a, {
                onCancel: function () {
                  ie(!1)
                },
                onConfirm: function () {
                  n(), oe(), ie(!1)
                },
              })
            : void 0
        return r.a.createElement(
          f.b,
          { behavioralEventViewType: 'rules', history: c, rightControl: me, title: T },
          pe,
          r.a.createElement(_.a, { description: ce || '', errorText: G, name: ue, onChange: re }),
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
        l = n.n(a),
        i = n('VrFO'),
        r = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
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
        L = n('bCEw'),
        M = n.n(L),
        x = n('Ud88'),
        R = n.n(x),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(l))), f()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
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
            l = K()(t, n)
          return a({ fetchStatus: C.a.LOADED, data: l, error: null, retry: S.a })
        },
        P = function (e, t) {
          if (_.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                r = n.render,
                o = n.variables,
                s = M()(e),
                c = l()(s, 2),
                u = c[0],
                m = c[1],
                d = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                y = w()(o),
                p = l()(y, 1)[0],
                g = b.a.useCallback(
                  function () {
                    m(p, { fetchPolicy: 'network-only' })
                  },
                  [m, p],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    m(p, { fetchPolicy: i })
                  },
                  [i, m, p],
                ),
                u
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(O, { render: r }) },
                      b.a.createElement(
                        A,
                        { errorHandler: d(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, n) {
                          return t
                            ? r({ fetchStatus: C.a.FAILED, error: t, data: null, retry: n })
                            : b.a.createElement(j, { query: e, queryRef: u, render: r })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var i = a.render,
              r = a.variables,
              o = R()(),
              s = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              c = w()(r),
              u = l()(c, 1)[0],
              m = n.get(o)
            if (m) return m
            var d = b.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: C.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        i({ fetchStatus: C.a.FAILED, data: null, error: e, retry: S.a }))
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
        l = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        r = n.n(i),
        o = n('v6aA'),
        s = n('eSoz'),
        c = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          return Object(c.C)(e, c.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.y)(c.h)
              },
              createRule: s.c.createRule,
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
        var t = r.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          i = e.createLocalApiErrorHandler,
          s = e.createRule,
          c = e.history,
          u = e.shouldShowRuleInformEducation,
          m = a.id_str,
          d = a.rules,
          y = r.a.useState(''),
          f = l()(y, 2),
          h = f[0],
          T = f[1],
          K = r.a.useState(''),
          L = l()(K, 2),
          M = L[0],
          x = L[1],
          R = r.a.useState(!1),
          O = l()(R, 2),
          A = O[0],
          j = O[1],
          P = r.a.useState(!1),
          D = l()(P, 2),
          B = D[0],
          H = D[1],
          N = r.a.useState(''),
          U = l()(N, 2),
          z = U[0],
          V = U[1],
          q = r.a.useState(!1),
          W = l()(q, 2),
          X = W[0],
          Q = W[1],
          J = r.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              V(''), T(n), x(t), j(a)
            },
            [T, x, j],
          ),
          G = r.a.useCallback(
            function () {
              H(!0)
              var e = i({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : S
                  return V(n), j(!1), []
                },
              })
              s(m, { name: h, description: M })
                .then(function () {
                  c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, h, M, s, c, i],
          ),
          Y = r.a.useCallback(
            function () {
              u ? Q(!0) : G()
            },
            [G, u],
          ),
          Z = r.a.createElement(_.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= t,
          ee = r.a.createElement(k.a, {
            confirmButtonLabel: w,
            headline: F,
            onConfirm: function () {
              c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = X
            ? r.a.createElement(v.a, {
                onCancel: function () {
                  Q(!1)
                },
                onConfirm: function () {
                  n(), G(), Q(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : r.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: c, rightControl: Z, title: E },
              r.a.createElement(b.a, { description: '', errorText: z, name: '', onChange: J }),
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
          for (var t = [], n = (0, l.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var l = a(n('yyPN'))
      e.exports = t.default
    },
    ogGF: function (e, t, n) {
      'use strict'
      var a,
        l = n('97Jx'),
        i = n.n(l),
        r = n('m3Bd'),
        o = n.n(r),
        s = n('ERkP'),
        c = n.n(s),
        u = n('/yvb'),
        m = n('3XMw'),
        d = n.n(m),
        y = n('pwey'),
        p = (n('enFi'), n('jAXQ')),
        g = n.n(p),
        f = ['community'],
        h = d.a.b139b549,
        b = c.a.createElement(y.a, null),
        v = function (e) {
          var t = e.community,
            l = o()(e, f),
            r = g()(void 0 !== a ? a : (a = n('qre1')), t)
          if (!r || 'CommunityInvitesUnavailable' === r.invites_result.__typename) return null
          var s = '/i/communities/'.concat(r.rest_id, '/invite')
          return c.a.createElement(u.a, i()({ accessibilityLabel: h, icon: b, link: s, type: 'primaryText' }, l))
        }
      t.a = c.a.memo(v)
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return z
      })
      n('yiKp')
      var a = n('97Jx'),
        l = n.n(a),
        i = n('m3Bd'),
        r = n.n(i),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        u = n.n(c),
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
        L = n('rHpw'),
        M = n('aITJ'),
        x = n('MWbm'),
        R = n('n5fo'),
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
            s()(this, n),
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
                  l = a.state.isPasswordRevealed
                return 'password' === n && t ? (l ? 'text' : 'password') : n
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
                  l,
                  i,
                  r = a.props.type,
                  o =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  s =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (l = n.textInputNode) ||
                    void 0 === l ||
                    null === (i = l.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === r && '' === o && !0 === s
              }),
              b()(d()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              b()(d()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  l = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: l, actualCount: i }), t && t(e)
              }),
              b()(d()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  l = e.currentTarget.value,
                  i = a._calculateLength(l),
                  r = a._getActualCount(l),
                  o = a._getAdjustedMaxLength()
                void 0 !== o && l.length > o && n.length < l.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: r,
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
                  l = t.onKeyPress,
                  i = t.onSubmitEditing
                l && l(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              b()(d()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                M.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              b()(d()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                M.b.isKaiOS() &&
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
                  l = e.validLength,
                  i = !!a,
                  r = 'string' == typeof e.value,
                  o = 'string' == typeof t
                T()(
                  !(!o && r && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  T()(!(n && l && l > n), 'Max length should be equal or greater than valid length.'),
                  T()(
                    !((void 0 !== n && n <= 0) || (void 0 !== l && l <= 0)),
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
            var l = e.defaultValue,
              i = e.value || l || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(i),
                actualCount: B(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
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
                      l = t.validLength,
                      i = t.value,
                      r = e.maxLength,
                      o = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === l && n === r && !!a === !!o && ('string' == typeof i) === ('string' == typeof c)) ||
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
                      l = e.helperText,
                      i = e.style,
                      r = this.state.isFocused,
                      o = this._isFormInvalid()
                    return _.a.createElement(
                      x.a,
                      { style: [q.root, i] },
                      _.a.createElement(
                        x.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            S.a.border,
                            q.textInputFormStyle,
                            o && S.a.invalidBorderColor,
                            r && o && S.a.focusedBorderInvalid,
                            r && !o && S.a.focusedBorderValid,
                            !n && S.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          x.a,
                          { style: q.textInputFormWrapper },
                          _.a.createElement(
                            x.a,
                            { style: q.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        x.a,
                        { style: [q.sidePadding, q.underTextInputForm] },
                        _.a.createElement(
                          x.a,
                          { style: q.subtextWrapper },
                          l ? this._renderHelperText() : null,
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
                      i = (e.style, e.type, e.validLength, r()(e, D))
                    return _.a.createElement(
                      x.a,
                      { style: V.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        E.b,
                        { size: 'headline1', style: V.wrapper },
                        _.a.createElement(
                          P.a,
                          l()({}, i, {
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
                          x.a,
                          { style: q.passwordVisibilityIconContainer },
                          _.a.createElement(C.a, {
                            accessibilityLabel: a ? U : N,
                            focusable: !0,
                            hoverLabel: { label: a ? U : N },
                            icon: a ? _.a.createElement(R.a, null) : _.a.createElement(O.a, null),
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
                      x.a,
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
                      x.a,
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
                      l = I.a.ia24dc8c(e)
                    return _.a.createElement(
                      x.a,
                      { accessibilityLiveRegion: 'polite', style: [q.textInputHeaderItem, q.displayCount] },
                      _.a.createElement(
                        E.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(l, ' / ').concat(a) : '',
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
                      l = 'string' == typeof a ? H(a, n) : 0
                    return 'string' == typeof a && l !== t.displayCount
                      ? { displayCount: l, actualCount: a.length }
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
      var V = L.a.create(function (e) {
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
        q = L.a.create(function (e) {
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
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
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
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [i],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (c = {
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
                      o,
                      s,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'InlineFragment', selections: [r], type: 'CommunityJoinRequests', abstractKey: null },
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
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          c,
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
            id: 'MMT67l6ylVMDenMLi5G-8Q',
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
        l = n.n(a),
        i = n('v6aA')
      t.a = function (e) {
        var t = l.a.useContext(i.a).featureSwitches
        return l.a.useMemo(
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
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [i],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (c = {
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      r,
                      o,
                      s,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'join_requests_result',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'InlineFragment', selections: [r], type: 'CommunityJoinRequests', abstractKey: null },
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
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          c,
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
            id: 's3bbji6oNTSXrOD6TRIpvg',
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
          return M
        })
      var a = n('ddV6'),
        l = n.n(a),
        i = (n('vrRf'), n('ERkP')),
        r = n.n(i),
        o = n('+Kfv'),
        s = n('es0u'),
        c = n('LgBi'),
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
        L = { viewType: 'moderators' },
        M = r.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            m = e.history,
            d = e.location
          r.a.useEffect(
            function () {
              n && i(n).catch(a())
            },
            [n, a, i],
          )
          var y = r.a.useState(!1),
            p = l()(y, 2),
            g = p[0],
            f = p[1],
            h = (null == d ? void 0 : d.pathname) && d.pathname.indexOf('members') > 0,
            M = h ? F : w,
            x = r.a.useMemo(
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
            R = n
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, { community: t, communityId: n, onIsSearchingChange: f }),
                  g
                    ? null
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(k.a, { accessibilityLabel: M, links: x }),
                        r.a.createElement(
                          C.d,
                          null,
                          r.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                            r.a.createElement(
                              o.a,
                              { behavioralEventContext: K },
                              r.a.createElement(E.b, {
                                communityId: n,
                                mode: E.a.Members,
                                userRole: null == t ? void 0 : t.role,
                              }),
                            ),
                          ),
                          r.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                            r.a.createElement(
                              o.a,
                              { behavioralEventContext: L },
                              r.a.createElement(b.a, { community: t }),
                              r.a.createElement(E.b, {
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
          return r.a.createElement(
            o.a,
            { behavioralEventContext: T },
            r.a.createElement(
              v.a,
              { behavioralEventViewType: 'members' },
              r.a.createElement(_.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: S,
                history: m,
                primaryContent: R,
                rightControl: h && n ? r.a.createElement(c.a, { communityId: n }) : null,
                sidebarContent: r.a.createElement(s.a, null),
                title: F,
              }),
            ),
          )
        }),
        x = g(M)
      t.default = x
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesScreen', function () {
          return et
        })
      var a,
        l,
        i = n('VrFO'),
        r = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
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
        L = n.n(K),
        M = n('5oT/'),
        x = n('/yvb'),
        R = n('rHpw'),
        O = (n('enFi'), n('jAXQ')),
        A = n.n(O),
        j = L.a.a226497c,
        P = b.a.memo(function (e) {
          return 'CommunityCreateAction' !== A()(void 0 !== a ? a : (a = n('zum0')), e.createActionResult).__typename
            ? null
            : b.a.createElement(x.a, {
                icon: b.a.createElement(M.a, { accessibilityLabel: j, style: D.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        D = R.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        B = b.a.memo(P),
        H = n('Fr3L'),
        N = n('IAZG'),
        U = { context: 'CommunityCreateButton' },
        z = void 0 !== l ? l : (l = n('S91Q')),
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
        Q = (n('z84I'), n('M+/F'), n('yiKp')),
        J = n.n(Q),
        G = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        Y = n('YeIG'),
        Z = 'community-thumbnail-image',
        $ = 'community-thumbnail-name-container',
        ee = n('MWbm'),
        te = n('X00g'),
        ne = n('htQn'),
        ae = n('9Xij'),
        le = n('TIdA'),
        ie = n('A91F'),
        re = n('t62R'),
        oe = { type: 'serversideContextKey', serversideContextType: 'community' },
        se = R.a.create(function (e) {
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
              width: 'calc(('.concat(R.a.theme.spaces.space36, ' * 3) + ').concat(R.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        ce = function (e) {
          var t = b.a.useContext(G.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            l = n.media,
            i = n.name,
            r = n.theme,
            o = b.a.useMemo(
              function () {
                return { clientEntity: J()(J()({}, oe), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(Y.a)(null == l ? void 0 : l.image) || !i) return null
          var s = null == l ? void 0 : l.image,
            c = null == l ? void 0 : l.crop,
            u = R.a.theme.aspectRatios.communityBanner,
            m = t ? te.a.getCommunityBackgroundColor(r) : R.a.theme.colors.translucentBlack77
          return s
            ? b.a.createElement(
                v.a,
                { behavioralEventContext: o },
                b.a.createElement(
                  ne.a,
                  { link: '/i/communities/'.concat(a), style: se.root },
                  b.a.createElement(
                    ee.a,
                    { style: se.container },
                    b.a.createElement(
                      ae.a,
                      { ratio: u },
                      b.a.createElement(le.a, {
                        accessibilityLabel: '',
                        aspectMode: ie.a.exact(u),
                        backgroundColor: R.a.theme.colors.gray300,
                        cropCandidates: c,
                        image: s,
                        testID: Z,
                      }),
                    ),
                    b.a.createElement(
                      ee.a,
                      { style: [se.name, { backgroundColor: m }], testID: $ },
                      b.a.createElement(
                        re.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        i.trim(),
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
        he = L.a.d228a9a0,
        be = b.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            l = e.fetchStatus,
            i = e.location.pathname
          b.a.useEffect(
            function () {
              l === pe.a.NONE && a().catch(n())
            },
            [n, a, l],
          )
          var r = b.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return b.a.createElement(ce, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(Y.a)(t)
            ? null
            : b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(ge.a, { style: [ve.paddingHorizontal, ve.bottomBorder] }, r),
                t.length > 10 &&
                  b.a.createElement(
                    ee.a,
                    { style: ve.bottomBorder },
                    b.a.createElement(fe.a, { link: '/'.concat(i, '/memberships'), text: he }),
                  ),
              )
        }),
        ve = R.a.create(function (e) {
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
        Le = n('QRqA'),
        Me = n('FIs5'),
        xe = n('mw9i'),
        Re = L.a.c63602d3,
        Oe = L.a.d7346631,
        Ae = L.a.fbd12fea,
        je = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(u()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              f()(
                u()(e),
                '_getModule',
                Object(we.a)(function () {
                  return Ce
                }),
              ),
              f()(u()(e), '_renderEmptyTimeline', function () {
                return b.a.createElement(Me.a, { header: Oe, message: Ae })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    a = e.isLoggedInUser,
                    l = e.location,
                    i = this._getModule(),
                    r = this._c9sParticipationEnabled && t ? b.a.createElement(Ie.a, { history: n }) : null
                  return a && i
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(Le.a, null),
                        b.a.createElement(
                          Fe.a,
                          { container: xe.a, fab: r },
                          b.a.createElement(_e, { location: l }),
                          b.a.createElement(Ke.a, {
                            entryConfiguration: Se.a,
                            module: i,
                            prerollDisplayLocation: Te.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: Re,
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
        ze = L.a.c63602d3,
        Ve = L.a.d7346631,
        qe = L.a.hb01fe46,
        We = Ne(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(l))),
                f()(u()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? b.a.createElement(Me.a, { header: Ve, message: qe }) : null
                }),
                e
              )
            }
            return (
              s()(n, [
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
        Qe = n('Y6L+'),
        Je = n('VS6U'),
        Ge = n('zCf4'),
        Ye = L.a.h02a6fe5,
        Ze = L.a.c63602d3,
        $e = { viewType: 'communities' },
        et = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
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
                  l = t.location,
                  i = t.user,
                  r = e._isLoggedInUser()
                return b.a.createElement(
                  Ge.d,
                  null,
                  b.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Qe.J, '/communities') },
                    b.a.createElement(Pe, { hasCommunityMemberships: n, history: a, isLoggedInUser: r, location: l }),
                  ),
                  b.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Qe.J, '/communities/memberships') },
                    b.a.createElement(We, { isLoggedInUser: r, user: i }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  l = n.fetchOneUserByScreenNameIfNeeded,
                  i = n.screenName
                i && l(i).catch(a(X.a))
              }),
              e
            )
          }
          return (
            s()(n, [
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
                      b.a.createElement(Je.a, {
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
      var tt = R.a.create(function (e) {
          return { rightControl: { color: e.colors.text, display: 'flex', flexDirection: 'row' } }
        }),
        nt = T(et)
      t.default = nt
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        l = n.n(a),
        i = n('Y9Ll'),
        r = n.n(i),
        o = n('5Yy7'),
        s = n.n(o),
        c = n('2VqO'),
        u = n.n(c),
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
          s()(n, e)
          var t = u()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
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
            r()(n, [
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
                    l = e.name,
                    i = e.style,
                    r = k.a.theme.colors[n],
                    o = v.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: r,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    C.a,
                    { style: [w.container, i] },
                    p.a.createElement(
                      _.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [w.choice, w.choiceContainer] },
                      p.a.createElement(S.a, { style: [w.choice, { color: r }] }),
                      Object(E.a)('input', {
                        accessibilityLabel: t,
                        name: l,
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
                        p.a.createElement(F.a, { style: [w.choiceSelected, { backgroundColor: r }] }),
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
        L = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            var e
            return l()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(K, '_LABEL')), (K += 1), e
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    l = t.layout,
                    i = t.onChange,
                    r = t.options,
                    o = t.value,
                    s = 'two-rows' === l,
                    c = [M.root, s && M.flexWrap],
                    u = s ? { width: ''.concat((2 / r.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    C.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: c },
                    r.map(function (t) {
                      var n = t.accessibilityLabel,
                        l = t.colorName
                      return p.a.createElement(T, {
                        accessibilityLabel: n,
                        autoFocus: a && o === l,
                        colorName: l,
                        isSelected: o === l,
                        key: l,
                        name: e._colorPickerId,
                        onChange: i,
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
      d()(L, 'defaultProps', { layout: 'one-row' })
      var M = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = L
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        l = n('42ly'),
        i = n('N9G2'),
        r = n('BIH/'),
        o = n('lhaq'),
        s = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = i(this),
              n = r(t),
              a = s(t, 0)
            return (a.length = l(a, t, t, n, 0, void 0 === e ? 1 : o(e))), a
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
        l,
        i,
        r,
        o,
        s,
        c,
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
                args: (l = [
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
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                          (r = {
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (s = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                          r,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: s,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityModerators_Query_moderators_slice',
                    kind: 'LinkedHandle',
                    name: 'moderators_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  c,
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
    'weg/': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDetailFacePile_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'CommunityFacePile_community' },
          { args: null, kind: 'FragmentSpread', name: 'CommunityMemberCount_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'f7e39a44a3d05288497e302dba9f17fd',
      }
      t.default = a
    },
    xPe1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitySettingsRouter', function () {
          return at
        })
      n('KqXw'), n('WNMA'), n('1t7P'), n('jQ/y'), n('ho0z')
      var a = n('ERkP'),
        l = n.n(a),
        i = n('v6aA'),
        r = n('rxPX'),
        o = Object(r.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        s = n('ddV6'),
        c = n.n(s),
        u = n('jTgF'),
        m = n('AspN'),
        d = n('eSoz'),
        y = n('0KEI'),
        p = function (e, t) {
          var n = t.localMediaId,
            a = n && isFinite(n) ? m.k(e, n) : []
          return c()(a, 1)[0]
        },
        g = Object(r.a)()
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
        L = h.a.ea965b81,
        M = h.a.gea6cc19,
        x = h.a.cfd2f35d,
        R = h.a.j35d3ad6,
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
            i = e.editCommunityBanner,
            r = e.hasCustomMedia,
            o = e.localMedia,
            s = e.localMediaId,
            m = e.media,
            d = e.removeBanner,
            y = e.removeLocalMediaId,
            p = l.a.useState(!1),
            g = c()(p, 2),
            f = g[0],
            h = g[1],
            _ = l.a.useState(!1),
            P = c()(_, 2),
            D = P[0],
            B = P[1],
            N = l.a.useState(!1),
            U = c()(N, 2),
            z = U[0],
            V = U[1],
            q = l.a.useState(!1),
            W = c()(q, 2),
            X = W[0],
            Q = W[1],
            J = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return V(!1), Q(Boolean(e)), e ? t(n, e) : y(n)
            },
            $ = J ? l.a.createElement(F.a, { accessibilityLabel: K, aspectMode: I.a.exact(G), image: J }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            D
              ? l.a.createElement(
                  C.a,
                  { style: H.error },
                  l.a.createElement(w.a, { Icon: b.a, headline: A, text: D, type: 'danger' }),
                )
              : null,
            l.a.createElement(k, {
              accessibilityLabel: L,
              aspectRatio: G,
              currentContent: $,
              location: E.d.CommunityBanner,
              mediaItem: z ? o : void 0,
              onChange: function (e) {
                var t = c()(e, 1)[0]
                B(!1), Z(t)
              },
              onFailure: function () {
                B(j), y(n)
              },
              onRemove:
                r || z
                  ? function () {
                      Z(), h(!0)
                    }
                  : void 0,
            }),
            X && o
              ? l.a.createElement(v.a, {
                  aspectRatio: G,
                  media: o,
                  onCancel: Z,
                  onCropDone: function (e) {
                    Q(!1),
                      s
                        ? (V(!0),
                          i(n, { mediaId: s, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(j) : Y(e)
                          }))
                        : B(j)
                  },
                })
              : null,
            f
              ? l.a.createElement(T.a, {
                  cancelButtonLabel: x,
                  confirmButtonLabel: R,
                  confirmButtonType: 'destructiveFilled',
                  headline: M,
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
        U = Object(r.a)()
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
        Q = U(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            i = e.history,
            r = t.id_str,
            o = l.a.useState(t.access),
            s = c()(o, 2),
            u = s[0],
            m = s[1],
            d = l.a.useCallback(
              function () {
                a(r, { access: u })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(r, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [r, u, a, i, n],
            ),
            y = u !== t.access
          return l.a.createElement(
            z.a,
            null,
            l.a.createElement(
              V.a,
              { communityId: r, onSubmit: d, submitDisabled: !y, title: W },
              l.a.createElement(
                C.a,
                { style: J.root },
                l.a.createElement(q.a, {
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
        J = S.a.create(function (e) {
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
        le = void 0 !== D ? D : (D = n('pd/v')),
        ie = function (e) {
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
        re = n('zCf4'),
        oe = n('Hsf0'),
        se = n.n(oe),
        ce = void 0 !== B ? B : (B = n('tnnC'))
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
            i,
            r,
            o,
            s,
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
              var t = se()(ce, e)
              switch (t.__typename) {
                case $.a.Restricted:
                  return { access: $.a.Restricted, invitesPolicy: t.invites_policy }
                case $.a.Open:
                  return { access: $.a.Open, invitesPolicy: $.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            I = l.a.useState(),
            K = c()(I, 2),
            L = K[0],
            M = K[1],
            x =
              ((t = ne()(ae)),
              (n = c()(t, 2)),
              (a = n[0]),
              (i = n[1]),
              (r = ne()(le)),
              (o = c()(r, 2)),
              (s = o[0]),
              (u = o[1]),
              (m = Object(Z.c)()),
              l.a.useCallback(
                function (e, t) {
                  return i || u
                    ? Promise.reject(new Error('Already updating membership settings'))
                    : new Promise(function (n, l) {
                        var i = t.access,
                          r = t.invitesPolicy
                        i === $.a.Open
                          ? a({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var t = ie(e.community_membership_settings_open_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                          : i === $.a.Restricted &&
                            s({
                              variables: {
                                communityId: e,
                                restrictedMembershipSettings: { invites_policy: r, join_approval_policy: ee.Moderator },
                              },
                              onCompleted: function (e) {
                                var t = ie(e.community_membership_settings_restricted_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                      })
                },
                [a, s, m, i, u],
              )),
            R = Object(re.f)(),
            O = l.a.useState(),
            A = c()(O, 2),
            j = A[0],
            P = A[1],
            D = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            B = Object($.e)(F),
            H = c()(B, 2),
            N = H[0],
            U = H[1],
            z = l.a.useCallback(
              function () {
                var e = D({
                  customErrorHandler: function (e) {
                    var t = c()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : be
                    return P(n), []
                  },
                })
                x(S, N)
                  .then(function () {
                    R.goBack({ backLocation: '/i/communities/'.concat(S, '/tools/settings') })
                  })
                  .catch(e)
              },
              [S, D, R, N, x],
            ),
            q = l.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === $.a.Restricted && t.access === $.a.Open) return h.a.daedd9fa
                })(F, N)
                e ? M(e) : z()
              },
              [F, N, z],
            ),
            W = l.a.useCallback(function () {
              return M(void 0)
            }, []),
            X =
              ((g = N),
              (f = (p = F).access !== g.access),
              (v = p.access === $.a.Restricted && p.invitesPolicy !== g.invitesPolicy),
              !(f || v)),
            Q = j
              ? l.a.createElement(
                  C.a,
                  { style: ke.error },
                  l.a.createElement(w.a, { Icon: b.a, headline: he, text: j, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            V.a,
            { communityId: S, onSubmit: q, submitDisabled: X, title: pe },
            Q,
            l.a.createElement($.d, { setters: U, state: N }),
            L &&
              l.a.createElement(T.a, {
                confirmButtonLabel: ge,
                confirmButtonType: 'primary',
                headline: fe,
                onCancel: W,
                onConfirm: z,
                text: L,
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
          return l.a.createElement(Se, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                i = null == t ? void 0 : t.community
              return l.a.createElement(Ee.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return i ? l.a.createElement(_e, { community: i }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ie = n('ROT1'),
        we = Object(r.a)()
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
        Le = h.a.cb5e6510
      var Me = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        xe = we(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            i = e.history,
            r = t.id_str,
            o = t.name,
            s = l.a.useState(o),
            u = c()(s, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            p = c()(y, 2),
            g = p[0],
            f = p[1],
            h = l.a.useState(void 0),
            v = c()(h, 2),
            _ = v[0],
            k = v[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = c()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Le
                    return k(n), f(!0), []
                  },
                })
                a(r, { name: m })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(r, '/tools/settings') })
                  })
                  .catch(e)
              },
              [r, m, a, i, n],
            )
          return l.a.createElement(
            z.a,
            null,
            l.a.createElement(
              V.a,
              { communityId: r, onSubmit: E, submitDisabled: g, title: Te },
              _
                ? l.a.createElement(
                    C.a,
                    { style: Me.error },
                    l.a.createElement(w.a, { Icon: b.a, headline: Ke, text: _, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ie.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        Re = n('U0Qk'),
        Oe = Object(r.a)()
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
            i = e.history,
            r = t.description,
            o = t.id_str,
            s = l.a.useState(r || ''),
            u = c()(s, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            p = c()(y, 2),
            g = p[0],
            f = p[1],
            h = l.a.useState(void 0),
            v = c()(h, 2),
            _ = v[0],
            k = v[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = c()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Pe
                    return k(n), f(!0), []
                  },
                })
                a(o, { purpose: m })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, m, a, i, n],
            )
          return l.a.createElement(
            z.a,
            null,
            l.a.createElement(
              V.a,
              { communityId: o, onSubmit: E, submitDisabled: g, title: Ae },
              _
                ? l.a.createElement(
                    C.a,
                    { style: De.error },
                    l.a.createElement(w.a, { Icon: b.a, headline: je, text: _, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Re.a, {
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
        Qe = h.a.bb081ea1,
        Je = h.a.h3e55b40,
        Ge = h.a.j8af8ea9,
        Ye = h.a.d5f01115,
        Ze = h.a.c3c04b70,
        $e = { Closed: h.a.ce0523a8, Public: h.a.fd00a769 },
        et = h.a.f4a98e9e,
        tt = h.a.f713fbd1,
        nt = function (e) {
          var t = e.children
          return l.a.createElement(ze.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        at = function (e) {
          var t = e.community,
            n = e.history,
            a = e.match,
            r = t.access,
            o = t.description,
            s = t.hasCustomMedia,
            c = t.id_str,
            u = t.localMediaId,
            m = t.media,
            d = t.membership_settings,
            y = t.name,
            p = t.theme,
            g = l.a.useContext(i.a).featureSwitches,
            f = g.isTrue('c9s_edit_community_name_enabled'),
            h = g.isTrue('c9s_edit_community_description_enabled'),
            b = g.isTrue('c9s_edit_community_membership_settings_enabled'),
            v = g.isTrue('c9s_membership_settings_enabled'),
            _ = g.isTrue('c9s_edit_community_banner_enabled'),
            k = g.isTrue('c9s_edit_community_theme_enabled'),
            E = a.url,
            C = l.a.useMemo(
              function () {
                return v ? (d.__typename === $.a.Open ? $e.Public : $e.Closed) : $e[r]
              },
              [r, v, d.__typename],
            ),
            S = Object(He.e)(t),
            F = Ve.a.getCommunityThemeDisplayName(S),
            I = Ve.a.getCommunityBackgroundColor(p)
          return l.a.createElement(
            re.d,
            null,
            f
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(xe, { community: t, history: n }),
                )
              : null,
            h
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(Be, { community: t, history: n }),
                )
              : null,
            v
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Fe, { communityId: c }),
                )
              : b
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Q, { community: t, history: n }),
                )
              : null,
            l.a.createElement(
              re.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                z.a,
                null,
                l.a.createElement(
                  V.a,
                  { communityId: c, screenType: 'primaryDetail', title: Qe },
                  _ ? l.a.createElement(N, { communityId: c, hasCustomMedia: s, localMediaId: u, media: m }) : null,
                  l.a.createElement(qe.b, { text: et }),
                  l.a.createElement(We.a, {
                    description: l.a.createElement(nt, null, y),
                    label: Je,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(We.a, {
                    description: o ? l.a.createElement(nt, null, o) : void 0,
                    label: Ye,
                    link: h ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(We.a, {
                        description: l.a.createElement(nt, null, F),
                        label: Ze,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(Ne.a, { style: [{ color: I }, lt.themeIcon] })
                        },
                      })
                    : null,
                  v || b
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(Xe.a, null),
                        l.a.createElement(qe.b, { text: tt }),
                        l.a.createElement(We.a, {
                          description: l.a.createElement(nt, null, C),
                          label: Ge,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            l.a.createElement(re.b, null, l.a.createElement(Ue.a, { to: ''.concat(E, '/') })),
          )
        },
        lt =
          ((t.default = o(at)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    xvEL: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityBannerImageDefault_community',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiMedia',
            kind: 'LinkedField',
            name: 'default_banner_media',
            plural: !1,
            selections: [
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
            ],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'da44821ed2bd33fa8de3b5bd8503e57a',
      }
      t.default = a
    },
    xvzJ: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        i = n('yiKp'),
        r = n.n(i),
        o = n('ddV6'),
        s = n.n(o),
        c = (n('yH/f'), n('2G9S'), n('ERkP')),
        u = n.n(c),
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
            r()(
              r()({}, e),
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
            r()(
              r()({}, e),
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
        L = T,
        M = n('boUI'),
        x = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        R = C.a.g30bc699,
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
          i = n.isTrue('c9s_edit_moderators_enabled'),
          o = e.communityId,
          c = e.communityRole,
          f = e.recordId,
          _ = e.screenName,
          E = e.userId,
          C = u.a.useState(null),
          S = s()(C, 2),
          F = S[0],
          I = S[1],
          T = Object(p.c)(),
          K = k()(W),
          A = s()(K, 2),
          j = A[0],
          H = A[1],
          N = u.a.useCallback(
            function (e) {
              var t = e.communityId,
                n = e.errorMessage,
                a = e.recordId,
                l = e.role,
                i = (e.screenName, e.successMessage),
                r = e.userId
              j({
                variables: { communityId: t, userId: r, role: l },
                updater: function (e) {
                  var n = e.get(a)
                  null == n || n.setValue(l, 'community_role(community_id:"'.concat(t, '")')),
                    T(g.b.updateOne(''.concat(t, '_').concat(r), { role: l }))
                },
                onCompleted: function () {
                  T(Object(m.b)({ text: i }))
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
                l,
                i = e.communityId,
                o = e.recordId,
                s = e.roleAction,
                c = e.screenName,
                u = e.userId
              switch (s) {
                case x.PromoteModerator:
                  ;(t = V), (a = y.a.Moderator), (l = P({ screenName: c })), (n = D({ screenName: c }))
                  break
                case x.DemoteModerator:
                  ;(t = q), (a = y.a.Member), (l = U({ screenName: c })), (n = z({ screenName: c }))
                  break
                default:
                  return
              }
              I(
                r()(
                  r()({}, t),
                  {},
                  {
                    text: t.text(c),
                    onConfirm: function () {
                      N({
                        communityId: i,
                        errorMessage: n,
                        recordId: o,
                        role: a,
                        screenName: c,
                        successMessage: l,
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
          Q = u.a.useCallback(
            function (e) {
              var t = []
              if (i)
                switch (c) {
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
                          roleAction: x.DemoteModerator,
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
                      Icon: L,
                      onClick: function () {
                        return X({
                          communityId: o,
                          recordId: f,
                          roleAction: x.PromoteModerator,
                          screenName: _,
                          userId: E,
                        })
                      },
                    })
                }
              return (
                t.push({
                  behavioralEventContext: { viewType: 'view_profile' },
                  text: R({ screenName: _ }),
                  Icon: M.a,
                  link: '/'.concat(_),
                }),
                u.a.createElement(h.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
              )
            },
            [o, X, i, f, c, H, _, E],
          )
        return E !== a
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(b.a, { renderActionMenu: Q }),
              F
                ? u.a.createElement(
                    v.a,
                    l()(
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
        l = n.n(a),
        i = (n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        r = n.n(i),
        o = n('eSoz'),
        s = n('rxPX'),
        c = n('0KEI'),
        u = Object(s.a)()
          .propsFromActions(function () {
            return {
              editTheme: o.c.editTheme,
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
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
          i = e.history,
          o = t.id_str,
          s = t.theme,
          c = f.a.getCommunityBackgroundColorName(s),
          u = r.a.useState(!1),
          y = l()(u, 2),
          p = y[0],
          v = y[1],
          I = r.a.useState(Object(d.e)(t)),
          T = l()(I, 2),
          K = T[0],
          L = T[1],
          M = r.a.useState(f.a.getCommunityThemeDisplayName(K)),
          x = l()(M, 2),
          R = x[0],
          O = x[1],
          A = r.a.useState(c),
          j = l()(A, 2),
          P = j[0],
          D = j[1],
          B = r.a.useState([]),
          H = l()(B, 2),
          N = H[0],
          U = H[1]
        r.a.useEffect(
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
        var z = r.a.useCallback(
            function () {
              a(o, { theme: K })
                .then(function () {
                  i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [o, K, a, i, n],
          ),
          V = r.a.createElement(
            h.a,
            { accessibilityLabel: E({ themeName: R }), disabled: !p, onPress: z, size: 'small', type: 'brandFilled' },
            k,
          )
        return r.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: i, rightControl: V, title: _ },
          r.a.createElement(
            g.a,
            { style: w.themePickerContainer },
            r.a.createElement(b.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var n = F[e],
                  a = n !== Object(d.e)(t)
                L(n), O(f.a.getCommunityThemeDisplayName(n)), D(e), v(a)
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
        l,
        i,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityInviteButtonQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
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
                args: l,
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
                          (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityInvites',
                        abstractKey: null,
                      },
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
            id: 'OgVu1WJu62PoPazegBf3mw',
            metadata: {},
            name: 'CommunityInviteButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '9533cbfb5394a4601514cbc83020138b'), (t.default = r)
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
