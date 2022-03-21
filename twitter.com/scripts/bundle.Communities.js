;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    '+BRT': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    '+BRr': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    '08/x': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    '0ULw': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('Lsrn'),
        s = t('k/Ka'),
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
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    '0weh': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('Lsrn'),
        s = t('k/Ka'),
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
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    '1Xyu': function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return c
      })
      var a,
        l = t('ERkP'),
        i = t.n(l),
        r = t('X00g'),
        o = (t('enFi'), t('jAXQ')),
        s = t.n(o),
        c = function (e) {
          var n = s()(void 0 !== a ? a : (a = t('DCZs')), e),
            l = n.custom_theme,
            o = n.default_theme,
            c = null != l ? l : o
          return i.a.useMemo(
            function () {
              return r.a.getCommunityTheme(c)
            },
            [c],
          )
        }
      n.a = c
    },
    '1rMX': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (n.default = l)
    },
    '1tGk': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (n.default = l)
    },
    '21U8': function (e, n, t) {
      'use strict'
      var a = t('VrFO'),
        l = t.n(a),
        i = t('Y9Ll'),
        r = t.n(i),
        o = t('1Pcy'),
        s = t.n(o),
        c = t('5Yy7'),
        u = t.n(c),
        m = t('2VqO'),
        d = t.n(m),
        y = t('KEM+'),
        p = t.n(y),
        g = (t('Rqga'), t('2G9S'), t('ERkP')),
        f = t.n(g),
        h = t('/yvb'),
        b = t('3XMw'),
        v = t.n(b),
        _ = t('3rX5'),
        k = t('rHpw'),
        E = t('MWbm'),
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
          var n = e.circle,
            t = e.height,
            a = e.width
          return f.a.createElement(E.a, {
            pointerEvents: 'none',
            style: [C.mask, { width: a, height: t }, n && C.circle],
          })
        },
        F = t('ZvMt'),
        I = t('97Jx'),
        w = t.n(I),
        K = t('m3Bd'),
        T = t.n(K),
        M = t('CHgo'),
        x = t('7ep7'),
        L = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        R = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t(e) {
            var a
            return (
              l()(this, t),
              (a = n.call(this, e)),
              p()(s()(a), '_previousTouchDistance', 0),
              p()(s()(a), '_previousPositionX', 0),
              p()(s()(a), '_previousPositionY', 0),
              p()(s()(a), '_centerPosition', { x: 0, y: 0 }),
              p()(s()(a), '_panResponder', {}),
              p()(s()(a), '_setRef', function (e) {
                var n = a.props,
                  t = n.onPanEnd,
                  l = n.onPanMove,
                  i = n.onPinchMove,
                  r = n.onWheel
                if (e) {
                  ;(l || t || i) && (a._removeTouchMoveToScrollListener = Object(M.a)(e, a._preventDefaultEvent, !1)),
                    r && (a._removeScrollToScaleListener = Object(M.b)(e, a._preventDefaultEvent, !1))
                  var o = e.getBoundingClientRect()
                  a._centerPosition = { x: o.width / 2 + o.left, y: o.height / 2 + o.top }
                }
              }),
              p()(s()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              p()(s()(a), '_handlePanResponderMove', function (e, n) {
                var t,
                  l,
                  i = a.props,
                  r = i.onPanMove,
                  o = i.onPinchMove,
                  s = e.nativeEvent.touches
                if (2 === n.numberActiveTouches) {
                  if (o) {
                    var c =
                        ((t = s[0]),
                        (l = s[1]),
                        Math.sqrt(Math.pow(t.pageY - l.pageY, 2) + Math.pow(t.pageX - l.pageX, 2))),
                      u = (function (e, n) {
                        return {
                          pageX: Math.min(n.pageX, e.pageX) + Math.abs(n.pageX - e.pageX) / 2,
                          pageY: Math.min(n.pageY, e.pageY) + Math.abs(n.pageY - e.pageY) / 2,
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
                } else r && r(n.dx, n.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              p()(s()(a), '_handlePanResponderEnd', function (e, n) {
                a.props.onPanEnd && a.props.onPanEnd(n.dx, n.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              p()(s()(a), '_handleWheel', function (e) {
                var n = e.clientX,
                  t = e.clientY,
                  l = e.deltaX,
                  i = e.deltaY,
                  r = a._centerPosition,
                  o = r.x - n,
                  s = r.y - t
                a.props.onWheel && a.props.onWheel(l, i, o, s)
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
            r()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, T()(e, L))
                  return f.a.createElement(
                    E.a,
                    w()({}, n, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
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
            t
          )
        })(f.a.Component),
        O = t('9RkS'),
        A = t('rOXj'),
        j = t('aITJ'),
        P = t('yiKp'),
        D = t.n(P),
        B = t('Lsrn'),
        H = t('k/Ka'),
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
                d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      Q.metadata = { width: 24, height: 24 }
      var X = Q,
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
        ne = v.a.e547b368,
        te = v.a.f7571204,
        ae = v.a.e6e16811,
        le =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t(e) {
            var a, i
            return (
              l()(this, t),
              (a = n.call(this, e)),
              p()(s()(a), '_previousLeft', 0),
              p()(s()(a), '_previousTop', 0),
              p()(s()(a), '_panStyles', { top: 0, left: 0 }),
              p()(s()(a), '_shouldShowZoomControl', function () {
                return (!j.b.isMobileOS() || !A.a.isTouchSupported()) && a.props.withZoomControl
              }),
              p()(s()(a), '_renderControls', function () {
                var e = a.props,
                  n = e.image,
                  t = e.withAspectRatioOptions,
                  l = a.state.aspectRatio,
                  i = n.width / n.height,
                  r = a._shouldShowZoomControl()
                return t || r
                  ? f.a.createElement(
                      E.a,
                      { style: re.controlsContainer },
                      t
                        ? f.a.createElement(
                            E.a,
                            { style: re.ratioContainer },
                            f.a.createElement(h.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: l === i ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: f.a.createElement(U, null),
                              onPress: a._setAspectRatio(i),
                              size: 'medium',
                            }),
                            f.a.createElement(h.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: l === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
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
                              maxIcon: f.a.createElement(X, { style: re.icon }),
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
                  n = a.props.image.width / a.props.image.height,
                  t = a._getMaskDimensions(),
                  l = t.height,
                  i = t.width,
                  r = F.a.getCoverDimensions({ width: i, height: l }, n),
                  o = r.height
                return { width: r.width * Math.pow(2, e), height: o * Math.pow(2, e) }
              }),
              p()(s()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  n = e.aspectRatio,
                  t = e.containerHeight,
                  l = e.containerWidth,
                  i = F.a.getContainDimensions({ width: l - 50, height: t - 50 }, n),
                  r = i.height
                return { width: i.width, height: r }
              }),
              p()(s()(a), '_handleLayout', function (e) {
                var n = e.nativeEvent.layout,
                  t = n.height,
                  l = n.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: t, containerWidth: l })
                  : (a.setState({ containerHeight: t, containerWidth: l }), a._setDefaultCropData())
              }),
              p()(s()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  n = e.defaultCropData,
                  t = e.image
                if (n) {
                  var l = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    r = l / t.width,
                    o = le(i / (n.width * r))
                  a.setState({ imageScale: o })
                  var s = a._getUnscaledCropData(),
                    c = s.left,
                    u = s.top
                  ;(a._panStyles.top = u - n.top * r * Math.pow(2, o)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = c - n.left * r * Math.pow(2, o)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              p()(s()(a), '_handleWheel', function (e, n, t, l) {
                var i = (-1 * n) / 500
                a.setState(function (e) {
                  var n = e.imageScale,
                    r = Math.min(a._maxScale, Math.max(n + i, 0))
                  return (
                    (a._panStyles.left += t * (r - n)),
                    (a._panStyles.top += l * (r - n)),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: r }
                  )
                })
              }),
              p()(s()(a), '_handlePanMove', function (e, n) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + n),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              p()(s()(a), '_handlePanEnd', function (e, n) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              p()(s()(a), '_handlePinchMove', function (e, n, t, l, i) {
                var r = e / 200
                a.setState(function (e) {
                  var o = e.imageScale,
                    s = Math.min(a._maxScale, Math.max(o + r, 0))
                  return (
                    (a._panStyles.left += n * (s - o) + l),
                    (a._panStyles.top += t * (s - o) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: s }
                  )
                })
              }),
              p()(s()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  n = a._getImageDimensions(),
                  t = e.left,
                  l = e.top,
                  i = e.left + e.width - n.width,
                  r = e.top + e.height - n.height,
                  o = !1
                t < 0 && ((o = !0), (a._panStyles.left += t), (a._previousLeft += t)),
                  l < 0 && ((o = !0), (a._panStyles.top += l), (a._previousTop += l)),
                  i > 0 && ((o = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  r > 0 && ((o = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  o && a._updateNativeStyles()
              }),
              p()(s()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  n = e.left,
                  t = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(n, 'px, ').concat(t, 'px, 0') }] },
                  })
              }),
              p()(s()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  n = e.height,
                  t = e.width,
                  l = a._getMaskDimensions(),
                  i = l.height,
                  r = l.width,
                  o = a._panStyles,
                  s = o.left
                return { top: (n - i) / 2 - o.top, left: (t - r) / 2 - s, width: r, height: i }
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
            r()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.circle,
                    t = e.image,
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
                              source: { uri: t.src, width: r, height: i },
                              style: re.image,
                            }),
                            f.a.createElement(S, { circle: n, height: s, width: c }),
                          )
                        : null,
                    ),
                    u ? this._renderControls() : null,
                  )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, n) {
                  this._updateNativeStyles(), this._adjustToInBounds()
                },
              },
              {
                key: 'getCropData',
                value: function () {
                  var e = this._getImageDimensions().width,
                    n = this.props.image.width / e,
                    t = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(n * t.top),
                    left: Math.round(n * t.left),
                    width: Math.round(n * t.width),
                    height: Math.round(n * t.height),
                  }
                },
              },
            ]),
            t
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
      n.a = ie
    },
    '21nk': function (e, n, t) {
      'use strict'
      var a = t('I9iR'),
        l = t('3KVO'),
        i = t('yLYC'),
        r = t('Ud88'),
        o = (t('/2Cm'), t('aQQo').useTrackLoadQueryInRender),
        s = (t('ERkP').useDebugValue, t('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, n, t) {
        o()
        var s,
          m = r(),
          d = n.fetchKey,
          y = n.fetchPolicy,
          p = n.source,
          g = n.variables,
          f = n.networkCacheConfig,
          h = i(e, g, f)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          h.request.node.params.name !== n.name && a(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: c(m, h.request.identifier, function () {
                return m === n.environment && null != p
                  ? m.executeWithSource({ operation: h, source: p })
                  : m.execute({ operation: h })
              }),
              fetchPolicy: y,
              query: h,
              renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(m, h)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && m === n.environment ? p.ifEmpty(b) : (n.environment, b),
            fetchKey: d,
            fetchPolicy: y,
            query: h,
            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
          }
        }
        return l(s)
      }
    },
    '23An': function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
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
    '2rr8': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (n.default = l)
    },
    '3JAx': function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        i = t('fyvP'),
        r = t('rHpw'),
        o = t('MWbm')
      n.a = function (e) {
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
    '5emT': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('Lsrn'),
        s = t('k/Ka'),
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
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    '7xtl': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(s.hash = '611e4e6390b7bb405821b13d8b63cd5d'), (n.default = s)
    },
    '8sFp': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return d
        })
      var a = t('ERkP'),
        l = t.n(a),
        i = t('3XMw'),
        r = t.n(i),
        o = t('mw9i'),
        s = t('FIs5'),
        c = t('rHpw'),
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
    '8vG3': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (n.default = l)
    },
    '9SqB': function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('yiKp')),
        l = t('ERkP'),
        i = t('Ud88'),
        r = t('K1lQ').commitMutation,
        o = l.useState,
        s = l.useEffect,
        c = l.useRef,
        u = l.useCallback,
        m = t('23An')
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          t = i(),
          l = m(),
          d = c(t),
          y = c(e),
          p = c(new Set()),
          g = o(!1),
          f = g[0],
          h = g[1],
          b = u(
            function (n) {
              d.current === t && y.current === e && (p.current.delete(n), l.current && h(p.current.size > 0))
            },
            [t, l, e],
          )
        s(
          function () {
            ;(d.current === t && y.current === e) ||
              ((p.current = new Set()), l.current && h(!1), (d.current = t), (y.current = e))
          },
          [t, l, e],
        )
        var v = u(
          function (i) {
            var r = n(
              t,
              (0, a.default)(
                (0, a.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    b(r), i.onCompleted && i.onCompleted(e, n)
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
          [b, n, t, l, e],
        )
        return [v, f]
      }
    },
    AfjF: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return d
      })
      var a = t('ERkP'),
        l = t.n(a),
        i = t('eb3s'),
        r = t('3XMw'),
        o = t.n(r),
        s = o.a.d45ae5e0,
        c = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var n = e.onCancel,
            t = e.onConfirm
          return l.a.createElement(i.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: s,
            onCancel: n,
            onConfirm: t,
            text: c,
          })
        }
    },
    BX8b: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (n.default = l)
    },
    C2fM: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = '994dfbaa33f6514fd6bf940e12397869'), (n.default = y)
    },
    DCZs: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'DV/y': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityInviteScreen', function () {
          return ae
        })
      var a = t('KEM+'),
        l = t.n(a),
        i = t('yiKp'),
        r = t.n(i),
        o = t('ddV6'),
        s = t.n(o),
        c = (t('KqXw'), t('WNMA'), t('LW0h'), t('7x/C'), t('z84I'), t('1Iuc'), t('ERkP')),
        u = t.n(c),
        m = t('+Kfv'),
        d = t('eSoz'),
        y = t('rxPX'),
        p = t('0KEI'),
        g = function (e, n) {
          var t = n.match.params.communityId
          return t ? d.c.select(e, t) : void 0
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
        h = t('jHSc'),
        b = t('3XMw'),
        v = t.n(b),
        _ = t('/yvb'),
        k = (t('2G9S'), t('KhuB')),
        E = t('li/m'),
        C = function (e, n) {
          return n.communityId && n.userId ? k.b.select(e, ''.concat(n.communityId, '_').concat(n.userId)) : void 0
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
        K = 'primaryFilled',
        T = { viewType: 'invite' }
      var M = S(function (e) {
          var n = e.communityId,
            t = e.createLocalApiErrorHandler,
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
              if (!e || 'UserCommunityInviteAction' === e.__typename) return K
              switch (e.reason) {
                case 'UserIsMember':
                  return K
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
                  behavioralEventContext: T,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      l(n, o)
                        .then(function () {
                          return i && i(o)
                        })
                        .catch(t())
                  },
                  size: 'small',
                  type: m,
                },
                c,
              )
        }),
        x = t('5FtR'),
        L = t('4e/K'),
        R = t('MWbm'),
        O = t('4zmP'),
        A = t('t62R'),
        j = t('FIs5'),
        P = t('rHpw'),
        D = t('GZwR'),
        B = v.a.b139b549,
        H = v.a.dfddd842,
        N = v.a.cf4898a0,
        U = v.a.a3b3939a,
        z = v.a.db4f0cc9,
        V = v.a.h252ede6,
        q = v.a.a5cd93f9,
        W = v.a.ba5a88e3,
        Q = v.a.i6568549,
        X = v.a.b772cd65,
        J = v.a.b4f16d00,
        G = v.a.ja1387a7,
        Y = v.a.b92a21d8,
        Z = v.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        ne = [D.a.CommunityUsers],
        te = { viewType: 'community' }
      function ae(e) {
        var n = e.community,
          t = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          i = (n || {}).invites_result,
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
            o && a(o).catch(t())
          },
          [o, t, a],
        )
        var F,
          I,
          w = u.a.useMemo(
            function () {
              return y.length > 0 || !n
                ? ee
                : 'CommunityInvites' === i.__typename
                ? i.users_to_invite_slice.items.map(D.g).filter(Boolean)
                : ee
            },
            [n, i, y.length],
          ),
          K = u.a.useCallback(
            function (e, n) {
              v(function (t) {
                return r()(r()({}, t), {}, l()({}, e, n))
              })
            },
            [v],
          ),
          T = u.a.useCallback(
            function (e) {
              S(function (n) {
                return r()(r()({}, n), {}, l()({}, e, !0))
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
            X,
          )
        return 'CommunityInvitesUnavailable' === (null == i ? void 0 : i.__typename)
          ? P
          : u.a.createElement(
              m.a,
              { behavioralEventContext: te },
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
                    u.a.createElement(O.a, { text: Q({ remaining_invite_count: F }) }),
                  )),
                u.a.createElement(L.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: ne,
                  getItemDisabledMessage: function (e) {
                    var n
                    if ('user' === e.type) {
                      var t = e.data,
                        a = t.id_str,
                        l = t.screen_name,
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
                            return null !== (n = i.message) && void 0 !== n ? n : q({ screen_name: l })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var n = e.data.id_str,
                        t = b[n]
                      return !C[n] && 'UserCommunityInviteAction' !== (null == t ? void 0 : t.__typename)
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
                    var n = e.userId
                    return u.a.createElement(M, {
                      communityId: o,
                      onInvite: T,
                      onInviteActionResultChange: K,
                      userId: n,
                      viewerInvited: C[n],
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
      n.default = ie
    },
    DVIF: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(C.hash = 'c848c1bd320716d294b5f3f2b34ed1a8'), (n.default = C)
    },
    'Dm5+': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = 'cccb7f84865368f471eb927f82edccec'), (n.default = y)
    },
    EPsT: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return v
      })
      var a = t('VrFO'),
        l = t.n(a),
        i = t('Y9Ll'),
        r = t.n(i),
        o = t('1Pcy'),
        s = t.n(o),
        c = t('5Yy7'),
        u = t.n(c),
        m = t('2VqO'),
        d = t.n(m),
        y = t('KEM+'),
        p = t.n(y),
        g = t('ERkP'),
        f = t.n(g),
        h = t('jtO7'),
        b = t('eb3s'),
        v = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t(e) {
            var a
            return (
              l()(this, t),
              (a = n.call(this, e)),
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
            r()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.align,
                    t = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    l = e.confirmationSheetConfirmButtonType,
                    i = e.confirmationSheetHeadline,
                    r = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(h.a, { align: n, color: t, label: o, onPress: this._handleClick }),
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
            t
          )
        })(f.a.Component)
      p()(v, 'defaultProps', { color: 'red500', align: 'center' })
    },
    EeFI: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        i = t('VrFO'),
        r = t.n(i),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('5Yy7'),
        u = t.n(c),
        m = t('2VqO'),
        d = t.n(m),
        y = t('ERkP'),
        p = t.n(y),
        g = t('3XMw'),
        f = t.n(g),
        h = t('MWbm'),
        b = t('Qwev'),
        v = t('21U8'),
        _ = t('rHpw'),
        k = t('1auM'),
        E = t('eYns'),
        C = f.a.gff1f69e,
        S = (function (e) {
          u()(t, e)
          var n = d()(t)
          function t(e) {
            var a
            return r()(this, t), ((a = n.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            s()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    n = (this.props.media || {}).originalMediaFile,
                    t = void 0 === n ? {} : n
                  t &&
                    t instanceof k.a &&
                    Object(E.b)(t).then(function (n) {
                      return new k.a(n).withDimensionsAndOrientation().then(function (n) {
                        e.setState({ orientedImage: n })
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
                    n = e.cropperRef,
                    t = e.defaultAspectRatio,
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
                          defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || t,
                          defaultCropData: a || c,
                          image: { src: o.url, width: m.width, height: m.height },
                          ref: n,
                          withAspectRatioOptions: i,
                          withZoomControl: r,
                        }),
                      )
                    : null
                },
              },
            ]),
            t
          )
        })(p.a.Component),
        F = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      n.a = p.a.forwardRef(function (e, n) {
        return p.a.createElement(S, l()({}, e, { cropperRef: n }))
      })
    },
    Eh7u: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(m.hash = '97ecd7a2189f93a563b3695f898d77ab'), (n.default = m)
    },
    FSMj: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'ToolsPeopleScreen', function () {
          return C
        })
      var a = t('ddV6'),
        l = t.n(a),
        i = (t('vrRf'), t('ERkP')),
        r = t.n(i),
        o = t('LgBi'),
        s = t('UZ0O'),
        c = t('rxPX'),
        u = Object(c.a)().withAnalytics({ page: 'communities', section: 'people' }),
        m = t('3XMw'),
        d = t.n(m),
        y = t('gDCe'),
        p = t('yoO3'),
        g = t('k/OQ'),
        f = t('mWs5'),
        h = t('MWbm'),
        b = t('krnS'),
        v = t('zCf4'),
        _ = d.a.dc6ce7b4,
        k = d.a.f8321d82,
        E = d.a.ga2aa43c,
        C = function (e) {
          var n = e.community,
            t = e.communityId,
            a = e.location,
            i = r.a.useState(!1),
            c = l()(i, 2),
            u = c[0],
            m = c[1],
            d = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            C = d ? k : E,
            S = r.a.useMemo(
              function () {
                var e = t
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(t, '/tools/members'), state: a.state },
                        label: k,
                        key: k,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(t, '/tools/moderators'), state: a.state },
                        label: E,
                        key: E,
                      },
                    ]
                  : []
                return r.a.createElement(g.a, { accessibilityLabel: C, links: e })
              },
              [t, C, a],
            )
          return r.a.createElement(
            p.a,
            null,
            r.a.createElement(
              f.a,
              {
                communityId: n.id_str,
                rightControl: d ? r.a.createElement(o.a, { communityId: t }) : void 0,
                title: _,
              },
              r.a.createElement(
                h.a,
                null,
                r.a.createElement(s.a, { community: n, communityId: t, onIsSearchingChange: m }),
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
                          { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/members') },
                          r.a.createElement(b.b, {
                            communityId: n.id_str,
                            mode: b.a.Members,
                            userRole: null == n ? void 0 : n.role,
                          }),
                        ),
                        r.a.createElement(
                          v.b,
                          { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/moderators') },
                          r.a.createElement(y.a, { community: n }),
                          r.a.createElement(b.b, {
                            communityId: n.id_str,
                            mode: b.a.Moderators,
                            userRole: null == n ? void 0 : n.role,
                          }),
                        ),
                      ),
                    ),
              ),
            ),
          )
        }
      n.default = u(C)
    },
    'Fq/Z': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'FeedbackType', function () {
          return X
        }),
        t.d(n, 'CommunityFeedbackScreen', function () {
          return J
        })
      var a = t('97Jx'),
        l = t.n(a),
        i = t('m3Bd'),
        r = t.n(i),
        o = (t('yH/f'), t('KqXw'), t('WNMA'), t('ERkP')),
        s = t.n(o),
        c = t('v6aA'),
        u = t('+Kfv'),
        m = t('es0u'),
        d = (t('ZVkB'), t('ulNE'), t('urw/'), t('jQ3i'), t('x4t0'), t('eSoz')),
        y = t('XOJV'),
        p = t('G6rE'),
        g = t('rxPX'),
        f = function (e, n) {
          var t = n.match.params.tweetId
          return t ? y.a.selectHydrated(e, t) : void 0
        },
        h = function (e, n) {
          var t = n.match.params
          return Object.entries(t).flat().includes('tweetId') ? X.HiddenTweet : X.RemovedMember
        },
        b = function (e, n) {
          if (h(0, n) === X.HiddenTweet) {
            var t,
              a = n.match.params.tweetId,
              l = a ? y.a.selectHydrated(e, a) : void 0,
              i = null == l || null === (t = l.community_relationship) || void 0 === t ? void 0 : t.community
            return i ? d.c.select(e, i) : void 0
          }
          var r = n.match.params.communityId
          return r ? d.c.select(e, r) : void 0
        },
        v = function (e, n) {
          if (h(0, n) === X.HiddenTweet) {
            var t = n.match.params.tweetId
            return t ? y.a.selectFetchStatus(e, t) : void 0
          }
          var a = n.match.params.communityId
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
        k = (t('ho0z'), t('PKbs')),
        E = t('egQk'),
        C = t('3XMw'),
        S = t.n(C),
        F = t('/de5'),
        I = t('b5s6'),
        w = t('MWbm'),
        K = t('X00g'),
        T = t('t62R'),
        M = t('4zmP'),
        x = t('0yYu'),
        L = t('6vad'),
        R = t('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        P = S.a.icc32e3d,
        D = K.a.getCommunityTheme('Default'),
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
          var n,
            t = e.community,
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
                (n = (function (e) {
                  switch (e) {
                    case X.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case X.RemovedMember:
                      return null == t ? void 0 : t.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === n
                ? void 0
                : n.name) || '',
            y = null == t ? void 0 : t.name,
            p = null == t ? void 0 : t.rules,
            g = (null == t ? void 0 : t.theme) || D,
            f = K.a.getCommunityUIColorName(g),
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
                      case X.HiddenTweet:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            T.b,
                            { color: f, size: 'subtext1', style: B.communityTitle, weight: 'bold' },
                            y,
                          ),
                          s.a.createElement(
                            T.b,
                            { size: 'headline1', style: [B.titleText, B.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          s.a.createElement(I.a, {
                            style: B.tweetContainer,
                            tweetId: null == r ? void 0 : r.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          s.a.createElement(M.a, { headline: A, text: d }),
                          s.a.createElement(T.b, { style: B.helpText }, j),
                        )
                      case X.RemovedMember:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            T.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            P({ communityName: y }),
                          ),
                          s.a.createElement(
                            w.a,
                            { style: B.removedMemberReason },
                            s.a.createElement(T.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                s.a.createElement(x.a, null),
                s.a.createElement(L.b, { text: h }),
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
        N = t('G1WX'),
        U = t('yoO3'),
        z = t('VS6U'),
        V = t('0KEI'),
        q = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        W = S.a.jf99d610,
        Q = { viewType: 'community' },
        X = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function J(e) {
        var n = s.a.useContext(c.a).featureSwitches.isTrue('c9s_enabled'),
          t = (e.analytics, e.community),
          a = e.fetchCommunity,
          i = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          g = r()(e, q),
          f = function (e) {
            var n, a
            switch (e) {
              case X.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == y ? void 0 : y.user.id_str)),
                  _handleRetry: E,
                  shouldRenderFeedback: Boolean(
                    null == y || null === (n = y.community_relationship) || void 0 === n
                      ? void 0
                      : n.moderation_state.rule,
                  ),
                }
              case X.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == t ? void 0 : t.viewerViolatedRule)),
                  _handleRetry: C,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == t || null === (a = t.viewer_relationship) || void 0 === a
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
            var t = f(p),
              a = t.BEHAVIORAL_EVENT_VIEW_TYPE,
              i = t.isAuthorizedViewer,
              r = t.shouldRenderFeedback
            return i && n
              ? s.a.createElement(
                  u.a,
                  { behavioralEventContext: Q },
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
      n.default = G
    },
    'I/KZ': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return l
      }),
        t.d(n, 'b', function () {
          return i
        }),
        t.d(n, 'd', function () {
          return v
        }),
        t.d(n, 'e', function () {
          return w
        }),
        t.d(n, 'c', function () {
          return K
        })
      t('yH/f')
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
        r = t('ERkP'),
        o = t.n(r),
        s = t('3XMw'),
        c = t.n(s),
        u = t('t62R'),
        m = t('3JAx'),
        d = t('e0ey'),
        y = t('rHpw'),
        p = [
          { label: c.a.fd00a769, value: l.Open, helpText: c.a.a0a16d37 },
          { label: c.a.ce0523a8, value: l.Restricted, helpText: c.a.i1aad6eb },
        ],
        g = c.a.c85960a0,
        f = c.a.ca373cd2,
        h = c.a.j7f554f5,
        b = function (e) {
          var n = e.state,
            t = n.access,
            a = n.invitesPolicy,
            r = e.setters,
            s = r.setAccess,
            c = r.setInvitesPolicy,
            y = !e.hideInvitePolicy,
            b = o.a.useCallback(
              function (e, n) {
                s(n)
              },
              [s],
            ),
            v = o.a.useCallback(
              function (e, n) {
                c(n ? i.Member : i.Moderator)
              },
              [c],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: _.settingsItem }, h),
            o.a.createElement(m.a, { name: 'membershipSetting', onChange: b, options: p, value: t }),
            y &&
              t === l.Restricted &&
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
        k = t('ddV6'),
        E = t.n(k),
        C = t('KEM+'),
        S = t.n(C),
        F = ((a = {}), S()(a, l.Open, i.Member), S()(a, l.Restricted, i.Moderator), a),
        I = { access: l.Restricted, invitesPolicy: F[l.Restricted] }
      function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          n = o.a.useState(e.access),
          t = E()(n, 2),
          a = t[0],
          l = t[1],
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
      function K(e) {
        var n, t
        switch (e.access) {
          case l.Open:
            n = 'Open'
            break
          case l.Restricted:
          default:
            n = 'RestrictedJoinRequestsDisabled'
        }
        switch (e.invitesPolicy) {
          case i.Moderator:
            t = 'ModeratorInvitesAllowed'
            break
          case i.Member:
            t = 'MemberInvitesAllowed'
            break
          case i.None:
          default:
            t = 'NoInvitesAllowed'
        }
        return { joinPolicy: n, invitesPolicy: t }
      }
    },
    JAeQ: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return g
      })
      var a = t('yiKp'),
        l = t.n(a),
        i = t('ddV6'),
        r = t.n(i),
        o = (t('yH/f'), t('kH1Z'), t('6U7i'), t('ERkP')),
        s = t.n(o),
        c = t('3XMw'),
        u = t.n(c),
        m = t('fS8x'),
        d = u.a.b7fb6bd9,
        y = u.a.e71cdf4d,
        p = Object.freeze({ NotStarted: 'not_started', Started: 'started', Completed: 'completed' })
      function g(e) {
        var n = e.aspectRatio,
          t = e.media,
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
              I === p.Completed && t.id !== F && g({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, t, F],
        )
        var w = s.a.useCallback(
            function () {
              v(!1), g({ status: p.Completed, croppedMediaId: t.id }), a()
            },
            [a, t],
          ),
          K = s.a.useCallback(function () {
            v(!1), C(!0)
          }, []),
          T = s.a.useCallback(function () {
            C(!1), v(!0)
          }, []),
          M = s.a.useCallback(function () {
            C(!1)
          }, []),
          x = s.a.useCallback(
            function (e) {
              g({ status: p.Completed, croppedMediaId: t.id }), null == i || i(e)
            },
            [i, t],
          ),
          L = l()(l()({}, t), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 })
        return s.a.createElement(
          s.a.Fragment,
          null,
          b ? s.a.createElement(m.a, { defaultAspectRatio: n, media: t, onCancel: w, onDone: K, title: d }) : null,
          E
            ? s.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: L,
                onCancel: T,
                onCropDone: x,
                onDone: M,
                title: y,
              })
            : null,
        )
      }
    },
    Jt8P: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    KQzH: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        i = (t('hBvt'), t('ERkP')),
        r = t.n(i),
        o = t('BUB3'),
        s = t('shC7'),
        c = t('csss'),
        u = t('t62R')
      n.a = function (e) {
        return r.a.createElement(o.a, { exact: !0, path: e.link }, function (n) {
          var t = s.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return r.a.createElement(c.a, l()({ isActive: n }, e, { label: r.a.createElement(u.b, { dir: t }, e.label) }))
        })
      }
    },
    L47s: function (e, n, t) {
      'use strict'
      var a = t('ddV6'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('+Kfv'),
        s = t('3XMw'),
        c = t.n(s),
        u = t('feu+'),
        m = t('ii+P'),
        d = c.a.j24c37b2,
        y = function (e) {
          var n = e.Content,
            t = e.actionLabel,
            a = void 0 === t ? d : t,
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
            r.a.createElement(n, null),
          )
          return y ? r.a.createElement(o.a, { behavioralEventContext: y }, v) : v
        }
      n.a = r.a.memo(y)
    },
    LgBi: function (e, n, t) {
      'use strict'
      var a,
        l = t('97Jx'),
        i = t.n(l),
        r = t('m3Bd'),
        o = t.n(r),
        s = t('ERkP'),
        c = t.n(s),
        u = t('ogGF'),
        m = (t('enFi'), t('Fr3L')),
        d = t('IAZG'),
        y = ['communityId'],
        p = { context: 'CommunityInviteButtonQuery' },
        g = void 0 !== a ? a : (a = t('zakg')),
        f = function (e) {
          var n = e.communityId,
            t = o()(e, y),
            a = Object(d.a)(g, { communityId: n })
          return c.a.createElement(u.a, i()({ community: a.community }, t))
        },
        h = function (e) {
          return c.a.createElement(
            m.a,
            { errorConfig: p },
            c.a.createElement(f, i()({ communityId: e.communityId }, e)),
          )
        }
      n.a = c.a.memo(h)
    },
    M2mT: function (e, n, t) {
      'use strict'
      var a = t('m3Bd'),
        l = t.n(a),
        i = t('VrFO'),
        r = t.n(i),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        m = t('5Yy7'),
        d = t.n(m),
        y = t('2VqO'),
        p = t.n(y),
        g = t('KEM+'),
        f = t.n(g),
        h = (t('2G9S'), t('i4UL'), t('+/5o')),
        b = t('ERkP'),
        v = t.n(b),
        _ = t('HPNB'),
        k = t('VAZu'),
        E = t('wiP2'),
        C = t('Es6L'),
        S = t('yiKp'),
        F = t.n(S),
        I = t('rHpw'),
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
        K = t('MWbm'),
        T = t('yw4N'),
        M = t('TnY3'),
        x = t('cHvH'),
        L = t('3xLC'),
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
          d()(t, e)
          var n = p()(t)
          function t() {
            var e
            r()(this, t)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_renderChildren', function () {
                var n = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      K.a,
                      { style: w.fill },
                      v.a.createElement(
                        T.a,
                        { style: w.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        n,
                      ),
                    )
                  : n
              }),
              e
            )
          }
          return (
            s()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(x.a, null, function (n) {
                    var t = n.windowWidth
                    return _.a.isTwoColumnLayout(t) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    n = e.children,
                    t =
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
                      : v.a.createElement(E.a.Configure, t),
                    n,
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
                  var n = e.isTwoColumnLayout,
                    t = this.props,
                    a = t.SideNavButton,
                    l = t.TabBar,
                    i = t.TeamsSwitcher,
                    r = t.backLocation,
                    o = t.documentTitle,
                    s = t.headerless,
                    c = t.history,
                    u = t.leftControl,
                    m = t.middleControl,
                    d = t.onBackClick,
                    y = t.rightControl,
                    p = t.screenType,
                    g = t.searchBoxOptions,
                    f = t.secondaryBar,
                    b = t.showSubtitleOnRoot,
                    _ = t.showSubtitleOnWideDetail,
                    C = t.subtitle,
                    S = t.title,
                    F = t.titleIconCell,
                    I = t.titleIconCellSize,
                    T = t.withDetailOpen,
                    M = t.withSearchBox,
                    x = t.withTweetButton,
                    L = 'root' === p,
                    R = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && _) || (L && b),
                    j = L || (O && n),
                    P = L ? h.c : O ? h.a : void 0,
                    D = v.a.createElement(
                      K.a,
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
                      L || (R && T)
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
                            withSearchBox: M,
                            withTweetButton: x,
                          })
                  return v.a.createElement(v.a.Fragment, null, B, D)
                },
              },
            ]),
            t
          )
        })(v.a.Component)
      f()(O, 'contextType', L.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      n.a = Object(M.a)(O)
    },
    MCGW: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityRulesScreen', function () {
          return C
        })
      var a = t('yiKp'),
        l = t.n(a),
        i = t('97Jx'),
        r = t.n(i),
        o = (t('KqXw'), t('WNMA'), t('ho0z'), t('uFXj'), t('ERkP')),
        s = t.n(o),
        c = t('v6aA'),
        u = t('es0u'),
        m = t('PKbs'),
        d = t('egQk'),
        y = t('1Idg'),
        p = t('eSoz'),
        g = t('rxPX'),
        f = t('0KEI'),
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
        b = t('MDbM'),
        v = t('/de5'),
        _ = t('5FtR'),
        k = t('VS6U'),
        E = t('rHpw'),
        C = function (e) {
          var n = s.a.useContext(c.a).featureSwitches,
            t = e.community,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            g = e.location,
            f = e.match,
            h = f.params.communityId,
            E = n.isTrue('c9s_participation_enabled')
          s.a.useEffect(
            function () {
              h && !t && o !== b.a.LOADED && i(h).catch(a())
            },
            [h, t, a, o, i],
          )
          var C = s.a.useMemo(
            function () {
              return { selectedCommunityId: h || '', defaultText: '' }
            },
            [h],
          )
          if (t && h) {
            var S = t.name,
              I = t.rules,
              w = t.theme,
              K = {
                composeOptions: C,
                history: y,
                sidebarContent: s.a.createElement(u.a, null),
                title: (null == t ? void 0 : t.name) || null,
                withTweetButton: E && p,
              }
            if (I.length > 0) {
              var T = s.a.createElement(m.b, {
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
                r()({}, K, {
                  backLocation: '/i/communities/'.concat(h),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: T,
                }),
              )
            }
            var M = l()(l()({}, K), {}, { title: null }),
              x = s.a.createElement(v.b, { history: y, location: g, match: f })
            return s.a.createElement(k.a, r()({}, M, { primaryContent: x }))
          }
          return o === b.a.LOADED || o === b.a.FAILED ? s.a.createElement(_.a, { to: '/' }) : null
        },
        S = h(C),
        F =
          ((n.default = S),
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
    MjKK: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return p
      })
      t('z84I')
      var a,
        l,
        i,
        r,
        o = t('ERkP'),
        s = t.n(o),
        c = t('cHTv'),
        u = (t('enFi'), t('jAXQ')),
        m = t.n(u),
        d = function (e) {
          var n,
            l = m()(void 0 !== a ? a : (a = t('atLU')), e)
          return s.a.useMemo(
            function () {
              var e,
                n,
                t = null == l || null === (e = l.custom_banner_media) || void 0 === e ? void 0 : e.media_info
              if (
                null != t &&
                t.original_img_url &&
                null != t &&
                t.original_img_height &&
                null != t &&
                t.original_img_width &&
                null != t &&
                null !== (n = t.color_info) &&
                void 0 !== n &&
                n.palette
              ) {
                var a = t.color_info.palette
                return {
                  url: t.original_img_url,
                  height: t.original_img_height,
                  width: t.original_img_width,
                  palette: a.map(function (e) {
                    var n = e.percentage,
                      t = e.rgb
                    return { percentage: n, rgb: { blue: t.blue, red: t.red, green: t.green } }
                  }),
                }
              }
            },
            [null == l || null === (n = l.custom_banner_media) || void 0 === n ? void 0 : n.media_info],
          )
        },
        y = function (e) {
          var n,
            a = m()(void 0 !== l ? l : (l = t('xvEL')), e)
          return s.a.useMemo(
            function () {
              var e,
                n = null == a || null === (e = a.default_banner_media) || void 0 === e ? void 0 : e.media_info,
                t = null == n ? void 0 : n.original_img_url,
                l = null == n ? void 0 : n.original_img_height,
                i = null == n ? void 0 : n.original_img_width
              if (t && l && i) return { url: t, height: l, width: i }
            },
            [null == a || null === (n = a.default_banner_media) || void 0 === n ? void 0 : n.media_info],
          )
        }
      n.a = function (e) {
        var n = m()(void 0 !== i ? i : (i = t('dMLx')), e),
          a = d(n),
          l = y(n)
        return a || l || c.c
      }
      var p = function (e) {
          var n,
            a,
            l,
            i,
            o = m()(void 0 !== r ? r : (r = t('N5wd')), e),
            u = d(o),
            p = y(o)
          return s.a.useMemo(
            function () {
              if (u) {
                var e,
                  n,
                  t =
                    null === (e = o.custom_banner_media) || void 0 === e || null === (n = e.media_info) || void 0 === n
                      ? void 0
                      : n.salient_rect
                return { image: u, crop: g(t) }
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
              null === (n = o.custom_banner_media) || void 0 === n || null === (a = n.media_info) || void 0 === a
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
          var n = e.height
          return [{ x: e.left, y: e.top, w: e.width, h: n }]
        }
    },
    N5wd: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = 'bda649c5a293882e2d130676e026a4d7'), (n.default = l)
    },
    OBBW: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    OOKO: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return o
      })
      t('uFXj')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('rHpw'),
        r = t('MWbm')
      function o(e) {
        var n = e.spacing
        return l.a.createElement(r.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != n ? i.a.theme.spaces[n] : void 0 }],
        })
      }
      var s = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    OUEC: function (e, n, t) {
      'use strict'
      var a = t('KEM+'),
        l = t.n(a),
        i = t('yiKp'),
        r = t.n(i),
        o = t('ezF+'),
        s =
          (t('lTEL'),
          t('7x/C'),
          t('JtPf'),
          t('87if'),
          t('kYxP'),
          {
            loader: function () {
              return t.e(200).then(t.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: t('XBtf').a.Critical,
          }),
        c = o.e(s),
        u = t('QIgh'),
        m = t('8UdT')
      n.a = r()(r()({}, u.b), {}, l()({}, m.b.Community, c))
    },
    OwKm: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return C
      })
      var a = t('ddV6'),
        l = t.n(a),
        i = (t('1t7P'), t('jQ/y'), t('ho0z'), t('ERkP')),
        r = t.n(i),
        o = t('v6aA'),
        s = t('3XMw'),
        c = t.n(s),
        u = t('Nh1N'),
        m = t('MWbm'),
        d = t('Ig1G'),
        y = t('4zmP'),
        p = t('p+r5'),
        g = t('rHpw'),
        f = c.a.c66769a3,
        h = c.a.ef02695a,
        b = c.a.ef02695a,
        v = c.a.c824202f,
        _ = c.a.d32cf5e6,
        k = c.a.f8fa00c7,
        E = c.a.fc2a5c92,
        C = function (e) {
          var n = r.a.useContext(o.a).featureSwitches,
            t = n.getNumberValue('c9s_max_rule_name_length', 50),
            a = n.getNumberValue('c9s_max_rule_description_length', 160),
            i = e.description,
            s = e.errorText,
            c = e.name,
            g = e.onChange,
            C = r.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 3, t)
              },
              [t],
            ),
            F = r.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 0, a)
              },
              [a],
            ),
            I = r.a.useState(c),
            w = l()(I, 2),
            K = w[0],
            T = w[1],
            M = r.a.useState(C(c)),
            x = l()(M, 2),
            L = x[0],
            R = x[1],
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
            Q = l()(W, 2),
            X = Q[0],
            J = Q[1],
            G = r.a.useState('' !== c),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = r.a.useCallback(
              function (e) {
                var n = !1,
                  a = e.target.value
                C(a) && ((n = !0), P(b({ minCharacterCount: 3, maxCharacterCount: t }))),
                  $(!0),
                  R(n),
                  T(a),
                  g({ description: H, name: a, valid: !n && !V })
              },
              [t, H, g, V, C],
            ),
            ne = r.a.useCallback(
              function (e) {
                var n = !1,
                  t = e.target.value
                F(t) && ((n = !0), J(k({ maxCharacterCount: a }))),
                  q(n),
                  N(t),
                  g({ name: K, description: t, valid: !n && !L })
              },
              [a, K, g, L, F],
            ),
            te = L && j ? void 0 : h({ minCharacterCount: 3, maxCharacterCount: t }),
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
              helperText: te,
              invalid: L && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: t,
              value: K,
            }),
            r.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: X,
              helperText: ae,
              invalid: V,
              label: v,
              name: 'typedRuleDescription',
              onChange: ne,
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
    PMbW: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (n.default = l)
    },
    PbB6: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(i.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (n.default = i)
    },
    Phky: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e) {
          for (var n = [], t = (0, l.default)(e), a = 0; a < t.length; a++) {
            var i = t[a].screenName
            n.push(i)
          }
          return n
        })
      var l = a(t('GiKA'))
      e.exports = n.default
    },
    QRqA: function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        i = t('v6aA'),
        r = t('xZGM'),
        o = t('L47s'),
        s = t('3XMw'),
        c = t.n(s),
        u = t('MWbm'),
        m = t('X00g'),
        d = t('h0NW'),
        y = t('rHpw'),
        p = t('r9x5'),
        g = t('cOhU'),
        f = t('uCrx'),
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
          var n = e.forSingleCommunity,
            t = l.a.useContext(i.a).featureSwitches,
            a = l.a.useCallback(
              function () {
                var e = t.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
                  a = [K.decorationContainer, e && { color: m.a.getCommunityUIColor(e) }],
                  i = l.a.createElement(p.a, { style: a }),
                  r = l.a.createElement(g.a, { style: a }),
                  o = l.a.createElement(f.a, { style: a })
                return l.a.createElement(
                  u.a,
                  { style: K.infoItemsContainer },
                  l.a.createElement(d.a, {
                    containerStyle: K.itemContainer,
                    items: [
                      { label: _, description: k, decoration: i },
                      { label: E, description: C, decoration: r },
                      { label: S, description: F, decoration: o },
                    ],
                  }),
                )
              },
              [t, n],
            )
          return !1 === (null == n ? void 0 : n.canJoinCommunity)
            ? null
            : l.a.createElement(o.a, {
                Content: a,
                actionLabel: h,
                behavioralEventContext: I,
                flag: r.j,
                headline: b,
                subtext: v,
                withCloseButton: !n,
              })
        }),
        K = y.a.create(function (e) {
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
      n.a = w
    },
    R0yc: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(E.hash = '90ab0e63de690e9ae88ff94c2bcc61d6'), (n.default = E)
    },
    R5kW: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return d
      }),
        t.d(n, 'c', function () {
          return y
        }),
        t.d(n, 'a', function () {
          return f
        })
      var a = t('KEM+'),
        l = t.n(a),
        i = t('yiKp'),
        r = t.n(i),
        o = (t('yH/f'), t('oEOe')),
        s = t('kGix'),
        c = t('Ssj5'),
        u = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, n) {
          return e[u][n]
        },
        y = function (e, n) {
          var t
          return null !== (t = e[u].fetchStatus[n]) && void 0 !== t ? t : s.a.NONE
        },
        p = Object.freeze({ fetchStatus: {} })
      function g(e) {
        return e.meta.communityId
      }
      var f = function (e) {
        return function (n, t, a) {
          var l = a.api
          return o.b(n, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      c.a.register(
        l()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case m.REQUEST:
              return r()(r()({}, e), {}, { fetchStatus: r()(r()({}, e.fetchStatus), {}, l()({}, g(n), s.a.LOADING)) })
            case m.FAILURE:
              return r()(
                r()({}, e),
                {},
                { fetchStatus: r()(r()({}, e.fetchStatus), {}, l()({}, g(n), s.a.FAILED)), error: n.payload },
              )
            case m.SUCCESS:
              var t
              if (n.payload)
                return r()(
                  r()({}, e),
                  {},
                  ((t = {}),
                  l()(t, g(n), n.payload),
                  l()(t, 'fetchStatus', r()(r()({}, e.fetchStatus), {}, l()({}, g(n), s.a.LOADED))),
                  l()(t, 'error', null),
                  t),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    ROT1: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return _
      })
      var a = t('ddV6'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('v6aA'),
        s = t('p+r5'),
        c = t('3XMw'),
        u = t.n(c),
        m = t('Ig1G'),
        d = t('nmVb'),
        y = t.n(d),
        p = t('Phky'),
        g = t.n(p),
        f = u.a.h3e55b40,
        h = u.a.dd71d9c9,
        b = u.a.cf65e56a,
        v = u.a.d936eeca,
        _ = function (e) {
          var n = e.autoFocus,
            t = void 0 !== n && n,
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
                var n = e.target.value,
                  t = !1
                Object(m.h)(n, 3, F)
                  ? (y()(n).length > 0 || g()(n).length > 0) && ((t = !0), S(v))
                  : ((t = !0), S(b({ minCharacterCount: 3, maxCharacterCount: F }))),
                  _(t),
                  i(n, t)
              },
              [F, i, S],
            ),
            w = h({ minCharacterCount: 3, maxCharacterCount: F })
          return r.a.createElement(s.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: t,
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
    Rqga: function (e, n, t) {
      var a = t('ax0f'),
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
    'S+H3': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('Lsrn'),
        s = t('k/Ka'),
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
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    S91Q: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(l.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (n.default = l)
    },
    SNyS: function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('Lsrn'),
        s = t('k/Ka'),
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
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
    },
    SyZD: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityRulesRouter', function () {
          return Y
        })
      var a = t('97Jx'),
        l = t.n(a),
        i = (t('KqXw'), t('WNMA'), t('2G9S'), t('ERkP')),
        r = t.n(i),
        o = t('v6aA'),
        s = t('Ig1G'),
        c = t('rxPX'),
        u = Object(c.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = t('3XMw'),
        d = t.n(m),
        y = t('yoO3'),
        p = t('5FtR'),
        g = t('ddV6'),
        f = t.n(g),
        h = (t('z84I'), t('/yvb')),
        b = t('eSoz'),
        v = t('0KEI'),
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
        k = t('rHpw'),
        E = k.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        C = t('mWs5'),
        S = t('PKbs'),
        F = d.a.b772cd65,
        I = d.a.gfca5254
      var w = _(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.explanation,
            l = e.history,
            i = e.reorderRules,
            o = n.id_str,
            s = n.rules,
            c = n.theme,
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
                var e = t({}),
                  n = d.map(function (e) {
                    return e.rest_id
                  })
                i(o, { ruleIds: n })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, i, l, t],
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
        K = t('xZGM'),
        T = t('L47s'),
        M = t('MWbm'),
        x = t('t62R'),
        L = d.a.a9ba79c0,
        R = [d.a.h5482c79, d.a.d5033a7a, d.a.ee8c43af],
        O = d.a.j24c37b2,
        A = function () {
          return r.a.createElement(
            M.a,
            { style: P.content },
            R.map(function (e) {
              return r.a.createElement(x.b, { color: 'gray700', key: e, size: 'body', style: P.item }, e)
            }),
          )
        },
        j = function () {
          return r.a.createElement(T.a, { Content: A, actionLabel: O, flag: K.i, headline: L, subtext: '' })
        },
        P = k.a.create(function (e) {
          return {
            content: { marginTop: '-'.concat(e.spaces.space48), marginBottom: e.spaces.space32 },
            item: { paddingTop: e.spaces.space16 },
          }
        }),
        D = r.a.memo(j),
        B = t('mjJ+'),
        H = t('iY63'),
        N = t('ACHU'),
        U = t('zCf4'),
        z = d.a.gfca5254,
        V = d.a.d94edeb4,
        q = d.a.j560c8ea,
        W = d.a.ab8089ea,
        Q = d.a.h63a5c3b,
        X = r.a.createElement(H.a, null),
        J = r.a.createElement(N.a, null),
        G = { viewType: 'add' },
        Y = function (e) {
          var n = r.a.useContext(o.a).featureSwitches,
            t = n.isTrue('c9s_rule_creation_enabled'),
            a = n.isTrue('c9s_rule_editing_enabled'),
            i = n.isTrue('c9s_rule_reordering_enabled'),
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
              t && _
                ? r.a.createElement(h.a, {
                    accessibilityLabel: q,
                    behavioralEventContext: G,
                    icon: X,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            F = f.length > 1,
            I =
              i && _ && F
                ? r.a.createElement(h.a, {
                    accessibilityLabel: Q,
                    icon: J,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var n = [{ text: W, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return r.a.createElement(B.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: Z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            K = r.a.createElement(M.a, { style: Z.rightControlStyle }, k, I),
            T = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            _ &&
              a &&
              ((T.displayType = S.a.Pivot),
              (T.getPivotLink = function (e) {
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
                    { communityId: d, rightControl: K, screenType: 'primaryDetail', title: z },
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
                        T,
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
      n.default = u(Y)
    },
    TcEn: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'getTweetButtonLocationState', function () {
          return vl
        }),
        t.d(n, 'CommunityScreen', function () {
          return _l
        })
      var a = t('yiKp'),
        l = t.n(a),
        i = (t('ho0z'), t('ERkP')),
        r = t.n(i),
        o = t('+Kfv'),
        s = t('es0u'),
        c = t('v6aA'),
        u = t('rxPX'),
        m = t('0KEI'),
        d = t('R5kW'),
        y = function (e, n) {
          var t = Object(d.b)(e, n.communityId) || {},
            a = t.pending_join_request_count,
            l = void 0 === a ? 0 : a,
            i = t.tweet_case_count
          return { pending_join_request_count: l, tweet_case_count: void 0 === i ? 0 : i }
        },
        p = function (e, n) {
          return Object(d.c)(e, n.communityId)
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
        f = t('kGix'),
        h = t('TnY3'),
        b = t('Ig1G'),
        v = t('3XMw'),
        _ = t.n(v),
        k = t('MWbm'),
        E = t('mjJ+'),
        C = t('/yvb'),
        S = t('Znyr'),
        F = t('rHpw'),
        I = t('zIWA'),
        w = t('SNyS'),
        K = t('Lsrn'),
        T = t('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
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
      M.metadata = { width: 24, height: 24 }
      var x = M,
        L = t('ACHU'),
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
          var n = e.canModerate,
            t = e.communityId,
            a = e.count,
            l = void 0 === a ? 0 : a,
            i = (e.history, e.userRole),
            o = r.a.useContext(c.a).featureSwitches,
            s = o.isTrue('c9s_settings_enabled'),
            u = o.isTrue('c9s_report_community_enabled'),
            m = o.isTrue('c9s_moderation_enabled') && n,
            d = s && n,
            y = u && !n,
            p = r.a.useCallback(
              function (e) {
                var n = []
                return (
                  m &&
                    n.push({
                      text: A,
                      subText: j({ count: l }),
                      Icon: I.a,
                      link: '/i/communities/'.concat(t, '/moderation/reported_tweets'),
                    }),
                  y &&
                    n.push({
                      text: P,
                      Icon: I.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  n.push({ text: D, Icon: w.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  r.a.createElement(E.a, { items: n, onCloseRequested: e })
                )
              },
              [t, l, m, y],
            ),
            g = n ? x : L.a,
            f = n ? (i === b.a.Admin ? H : N) : B
          return r.a.createElement(
            k.a,
            { style: z.root },
            r.a.createElement(C.a, {
              accessibilityLabel: f,
              behavioralEventContext: U,
              hoverLabel: { label: f },
              icon: r.a.createElement(g, null),
              link: d ? '/i/communities/'.concat(t, '/tools') : void 0,
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
        Q,
        X,
        J = g(function (e) {
          var n = r.a.useContext(c.a).featureSwitches.isTrue('c9s_request_to_join_enabled'),
            t = e.canModerate,
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
                s === f.a.NONE && t && o(a).catch(i())
              },
              [i, o, s, a, t],
            ),
            r.a.createElement(V, { canModerate: t, communityId: a, count: n ? m + d : d, userRole: u })
          )
        }),
        G = t('m3Bd'),
        Y = t.n(G),
        Z = t('1Idg'),
        $ = t('eSoz'),
        ee = t('G6rE'),
        ne = t('o3oN'),
        te = t('/ekK'),
        ae = ['loggedInUser'],
        le = function (e, n) {
          var t = Z.c(e, n)
          return !t || Object(te.a)(e, t, 'mod_education_flag')
        },
        ie = Object(u.a)()
          .propsFromState(function () {
            return {
              communityId: Z.c,
              community: Z.a,
              communityTheme: Z.f,
              fetchStatus: Z.b,
              hasShownModEducation: le,
              membershipsFetchStatus: ne.d,
              isCommunityMember: Z.g,
              loggedInUser: ee.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              t = Y()(e, ae)
            return l()({ screenName: n ? n.screen_name : void 0 }, t)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: $.c.fetchOneIfNeeded,
              fetchCommunityMemberships: ne.a,
              setFlag: te.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        re = t('feu+'),
        oe = (t('yH/f'), t('WpDa')),
        se = t('ZNT5'),
        ce = (t('1t7P'), t('jQ/y'), t('jV+4')),
        ue = t('t62R'),
        me = (t('enFi'), t('jAXQ')),
        de = t.n(me),
        ye = function (e) {
          var n,
            a = de()(void 0 !== q ? q : (q = t('pChJ')), e.community),
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
                var e, n, t
                if ('User' === (null === (e = a.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return r.a.createElement(ce.a, {
                    isVerified:
                      (null === (n = a.creator_results.result.legacy) || void 0 === n ? void 0 : n.verified) || !1,
                    screenName:
                      (null === (t = a.creator_results.result.legacy) || void 0 === t ? void 0 : t.screen_name) || '',
                    withLink: !0,
                  })
              },
              [a],
            )
          return a.creator_results &&
            'User' === (null === (n = a.creator_results.result) || void 0 === n ? void 0 : n.__typename)
            ? r.a.createElement(
                ue.b,
                { color: 'gray700' },
                r.a.createElement(_.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, i),
              )
            : null
        },
        pe = r.a.memo(ye),
        ge = t('s8G+'),
        fe = t('6vad'),
        he = t('csss'),
        be = t('h0NW'),
        ve = t('0yYu'),
        _e = t('cOhU'),
        ke = t('DlMI'),
        Ee = t('Lxak'),
        Ce = t('a5gf'),
        Se = r.a.createElement(ue.b, { weight: 'bold' }),
        Fe = _.a.af7c11a9,
        Ie = _.a.db1b9462,
        we = _.a.ea49402d,
        Ke = r.a.createElement(_.a.I18NFormatMessage, { $i18n: 'he99cc29' }, r.a.cloneElement(Se, null, _.a.gedb877c)),
        Te = _.a.fcef2921,
        Me = _.a.c93dd2c8,
        xe = function (e) {
          var n = de()(void 0 !== W ? W : (W = t('1rMX')), e.community),
            a = Object(ge.a)('c9s_request_to_join_enabled'),
            l = r.a.useMemo(
              function () {
                var e,
                  t = function (e) {
                    return r.a.createElement(ue.b, null, e)
                  },
                  l = r.a.createElement(pe, { community: n }),
                  i = n.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: Re, label: t(Ie) },
                    CommunityOpenMembershipEducation: { decoration: Oe, label: Ke, description: Te },
                    CommunityRestrictedMembershipEducation: { decoration: je, label: Ke, description: Me },
                    CommunityVisibilityEducation: { decoration: Oe, label: t(we) },
                    OriginationAttributionEducation: { decoration: Ae, label: l },
                  },
                  s = [o.CommunityMemberAllowedActions]
                return (
                  a
                    ? ('CommunityRestrictedMembershipSettings' === i &&
                        s.push(o.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === i && s.push(o.CommunityOpenMembershipEducation))
                    : s.push(o.CommunityVisibilityEducation),
                  'User' === (null === (e = n.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    s.push(o.OriginationAttributionEducation),
                  s
                )
              },
              [n, a],
            )
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(fe.b, { text: Fe }),
            Object(b.g)(n.role) && n.description ? r.a.createElement(he.a, { label: n.description }) : null,
            r.a.createElement(be.a, { containerStyle: Le.containerStyle, items: l }),
            r.a.createElement(ve.a, null),
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
        Re = r.a.createElement(_e.a, { style: Le.icon }),
        Oe = r.a.createElement(ke.a, { style: Le.icon }),
        Ae = r.a.createElement(Ee.a, { style: Le.icon }),
        je = r.a.createElement(Ce.a, { style: Le.icon }),
        Pe = r.a.memo(xe),
        De = t('fTQJ'),
        Be = (t('z84I'), t('PKbs')),
        He = t('1Xyu'),
        Ne = t('rC8y'),
        Ue = void 0 !== Q ? Q : (Q = t('BX8b')),
        ze = _.a.gfca5254,
        Ve = _.a.ffd9cfe6,
        qe = function (e) {
          var n = e.community,
            t = de()(Ue, n),
            a = t.rules,
            l = Object(He.a)(t),
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
                      r.a.createElement(Ne.a, { link: '/i/communities/'.concat(t.rest_id, '/rules'), text: Ve }),
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
        Qe = r.a.memo(qe),
        Xe = _.a.i9028824,
        Je = _.a.cc683fb9,
        Ge = function (e) {
          var n = de()(void 0 !== X ? X : (X = t('+BRr')), e.community),
            a = r.a.useMemo(
              function () {
                return (
                  (e = n.rest_id),
                  Object(se.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (n) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: oe.a,
                  })
                )
                var e
              },
              [n.rest_id],
            )
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(Pe, { community: n }),
            r.a.createElement(Qe, { community: n }),
            r.a.createElement(De.a, { loadingAccessibilityLabel: Xe, module: a, title: Je }),
          )
        },
        Ye = r.a.memo(Ge),
        Ze = (t('LW0h'), t('7x/C'), t('tVqn'), t('uFXj'), t('97Jx')),
        $e = t.n(Ze),
        en = t('ddV6'),
        nn = t.n(en),
        tn = (t('7xRU'), t('KqXw'), t('WNMA'), t('egQk')),
        an = t('li/m'),
        ln = function (e, n) {
          var t
          return (null === (t = n.location.state) || void 0 === t ? void 0 : t.community) || Z.a(e, n)
        },
        rn = Object(u.a)()
          .propsFromState(function () {
            return { community: ln, fetchStatus: Z.b, isCommunityMember: Z.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: an.b,
              requestToJoin: $.c.requestToJoin,
              fetchCommunityIfNeeded: $.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        on = t('MDbM'),
        sn = t('jHSc'),
        cn = t('5FtR'),
        un = _.a.h4fbfa57,
        mn = _.a.ea8cfb1d,
        dn = _.a.dc1b14a1,
        yn = { viewType: 'community' },
        pn = rn(function (e) {
          var n,
            t = e.community,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            i = e.fetchStatus,
            s = e.isCommunityMember,
            c = e.join,
            u = e.match,
            m = e.onCommunityMembershipChange,
            d = e.onDismiss,
            y = e.requestToJoin,
            p = u.params.communityId,
            g =
              'ViewerRequestRequired' ===
              (null == t || null === (n = t.actions.join_action_result) || void 0 === n ? void 0 : n.reason)
          r.a.useEffect(function () {
            p && !t && i !== on.a.LOADED && l(p).catch(a())
          })
          var f = r.a.useCallback(function (e) {
              return r.a.createElement(ue.b, { size: 'title4', weight: 'bold' }, dn({ communityName: e }))
            }, []),
            h = g ? mn : un,
            b = r.a.useCallback(
              function () {
                if (t) {
                  var e = t.id_str
                  if (g) return void y(e).then(d).catch(a())
                  c(e).then(m).then(d).catch(a())
                }
              },
              [t, a, c, m, g, d, y],
            ),
            v = r.a.useCallback(
              function () {
                return r.a.createElement(C.a, { onPress: b, size: 'small', type: 'brandFilled' }, h)
              },
              [h, b],
            )
          if (t) {
            var _ = t.name,
              k = t.rules,
              E = t.theme
            return k && k.length && !s
              ? r.a.createElement(
                  o.a,
                  { behavioralEventContext: yn },
                  r.a.createElement(
                    sn.b,
                    {
                      behavioralEventViewType: 'rules',
                      onBackClick: d,
                      rightControl: v(),
                      title: Object(tn.a)({ communityName: _ }),
                    },
                    r.a.createElement(Be.b, {
                      badgeStyle: gn.badgeStyle,
                      headerContainerStyle: gn.containerStyle,
                      headerExplanationStyle: gn.headerExplanationStyle,
                      heading: f(_),
                      rules: k,
                      theme: E,
                    }),
                  ),
                )
              : r.a.createElement(cn.a, { to: '/i/communities/'.concat(t.id_str) })
          }
          return i === on.a.LOADED ? r.a.createElement(cn.a, { to: '/' }) : null
        }),
        gn = F.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space16 },
            headerExplanationStyle: { marginTop: e.spaces.space8 },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        fn = ['loggedInUser'],
        hn = Object(u.a)()
          .propsFromState(function () {
            return { community: Z.a, loggedInUser: ee.e.selectLoggedInUser, joinActionResultType: Z.h }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              t = Y()(e, fn)
            return l()({ isProtectedUser: null == n ? void 0 : n.protected }, t)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: an.b,
              requestToJoin: $.c.requestToJoin,
              leave: an.c,
            }
          }),
        bn = (t('ssJ/'), t('X8FW')),
        vn = t('cHvH'),
        _n = t('sgih'),
        kn = r.a.memo(function (e) {
          var n = Object(vn.b)().windowWidth,
            t = e.children
          return n > F.a.theme.breakpoints.medium
            ? r.a.createElement(bn.b, { modalSize: bn.a.fixed }, t)
            : r.a.createElement(_n.a, { type: 'full' }, t)
        }),
        En = t('CGyZ'),
        Cn = _.a.fad95333,
        Sn = function (e) {
          var n = e.offendingRule
          return r.a.createElement(
            k.a,
            null,
            n
              ? r.a.createElement(
                  k.a,
                  { style: Fn.offendingRule },
                  (function (e) {
                    return r.a.createElement(
                      _.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      r.a.createElement(ue.b, { weight: 'bold' }, _.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(n),
                )
              : null,
            r.a.createElement(ue.b, null, Cn),
          )
        },
        Fn = F.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        In = _.a.hafa07f2,
        wn = _.a.fa94c9da,
        Kn = _.a.c15bee31,
        Tn = _.a.i859676b,
        Mn = r.a.createElement(
          _.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          r.a.createElement(ue.b, { link: '/settings/audience_and_tagging' }, _.a.e77dfaf0),
        ),
        xn = _.a.fc2a5c92,
        Ln = _.a.bf7bdb60,
        Rn = _.a.h27d695f,
        On = _.a.b02360f5,
        An = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        jn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        Pn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Dn,
        Bn,
        Hn = t('zCf4'),
        Nn = ['community', 'communityId', 'match'],
        Un = _.a.e6057013,
        zn = _.a.b533478f,
        Vn = { follow: _.a.b171d7c4, following: _.a.aa7ae3f6, unfollow: _.a.bb1d57b6 },
        qn = _.a.j24c37b2,
        Wn = function (e) {
          var n = r.a.useState(void 0),
            t = nn()(n, 2),
            a = t[0],
            i = t[1],
            o = r.a.useState(!1),
            s = nn()(o, 2),
            c = s[0],
            u = s[1],
            m = { history: Object(Hn.f)(), location: Object(Hn.g)(), match: Object(Hn.i)() },
            d = Object(ge.a)('c9s_request_to_join_enabled'),
            y = e.community,
            p = e.createLocalApiErrorHandler,
            g = e.isProtectedUser,
            f = e.join,
            h = e.leave,
            v = e.onCommunityMembershipChange,
            _ = e.requestToJoin,
            E = y.actions,
            S = E.join_action_result,
            F = E.leave_action_result,
            I = y.id_str,
            w = y.name,
            K = y.role,
            T = Object(b.g)(K),
            M = S.reason === Pn.ViewerJoinRequestRequired && d,
            x = S.reason === Pn.ViewerRequestPending && d,
            L = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !T } },
            R = r.a.useCallback(
              function () {
                var e = y.rules,
                  n = y.viewerViolatedRule,
                  t = (function (e, n, t, a) {
                    var l = e.__typename,
                      i = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      s = function (e) {
                        return { canAction: !1, message: e }
                      },
                      c = s({ headline: xn, text: Ln })
                    switch (l) {
                      case An.joinAvailable:
                        return o()
                      case An.joinUnavailable:
                        switch (i) {
                          case Pn.ViewerIsRemoved:
                            return s({
                              headline: Kn,
                              text: r.a.createElement(Sn, { offendingRule: null == t ? void 0 : t.name }),
                            })
                          case Pn.ViewerNotInvited:
                            return s({ headline: In, text: wn })
                          case Pn.ViewerIsProtected:
                            return n ? s({ headline: Tn, text: Mn }) : o()
                          case Pn.ViewerJoinRequestRequired:
                            return a ? o() : c
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(S, g, n, d),
                  a = t.canAction,
                  l = t.message
                !a && l && i(l), a && (e && e.length > 0 ? u(!0) : M ? _(I).catch(p({})) : f(I).then(v).catch(p({})))
              },
              [y, I, p, g, d, f, M, S, _, v],
            ),
            O = r.a.useCallback(
              function () {
                var e = (function (e) {
                    var n,
                      t = e.__typename,
                      a = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      i = l({ headline: xn, text: Ln })
                    switch (t) {
                      case An.leaveAvailable:
                        return { canAction: !0, message: n }
                      case An.leaveUnavailable:
                        switch (a) {
                          case jn.ViewerIsSoleAdmin:
                            return l({ headline: Rn, text: On })
                          default:
                            return i
                        }
                      default:
                        return i
                    }
                  })(F),
                  n = e.canAction,
                  t = e.message
                !n && t && i(t), n && h(I).then(v).catch(p({}))
              },
              [I, p, h, F, v],
            ),
            A = r.a.useCallback(function () {
              i(void 0)
            }, []),
            j = r.a.useCallback(function () {
              u(!1)
            }, []),
            P = r.a.useMemo(
              function () {
                return M ? l()(l()({}, Vn), {}, { follow: Un }) : Vn
              },
              [M],
            )
          return r.a.createElement(
            k.a,
            { style: Qn.button },
            c
              ? r.a.createElement(
                  kn,
                  null,
                  r.a.createElement(pn, $e()({ communityId: I, onCommunityMembershipChange: v, onDismiss: j }, m)),
                )
              : null,
            x
              ? r.a.createElement(C.a, { disabled: !0, type: 'onMediaOutlined' }, zn)
              : r.a.createElement(En.a, {
                  behavioralEventContext: L,
                  buttonText: P,
                  isFollowing: T,
                  name: w,
                  onFollow: R,
                  onUnfollow: O,
                  type: 'community',
                }),
            a
              ? r.a.createElement(re.a, {
                  actionLabel: qn,
                  graphicDisplayMode: 'none',
                  headline: a.headline,
                  onAction: A,
                  onClose: A,
                  subtext: a.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        Qn = F.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        Xn = hn(function (e) {
          var n = e.community,
            t = (e.communityId, e.match, Y()(e, Nn))
          return n ? r.a.createElement(Wn, $e()({ community: n }, t)) : null
        }),
        Jn = t('YeIG'),
        Gn = t('MjKK'),
        Yn = t('TIdA'),
        Zn = t('A91F'),
        $n = t('9Xij'),
        et = void 0 !== Dn ? Dn : (Dn = t('fK4d')),
        nt = function (e) {
          var n = de()(et, e.community),
            t = Object(Gn.a)(n),
            a = F.a.theme.aspectRatios.communityBanner
          return t && !Object(Jn.a)(t)
            ? r.a.createElement(
                k.a,
                null,
                r.a.createElement(Yn.a, {
                  accessibilityLabel: '',
                  aspectMode: Zn.a.exact(a),
                  backgroundColor: F.a.theme.colors.gray300,
                  image: t,
                }),
              )
            : r.a.createElement($n.a, { ratio: a }, r.a.createElement(k.a, { style: tt.placeholderImageContainer }))
        },
        tt = F.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        at = r.a.memo(nt),
        lt = t('K1iM'),
        it = t.n(lt),
        rt = (t('2G9S'), t('X00g')),
        ot = t('n4Eu'),
        st = { red: 0, green: 0, blue: 0 },
        ct = '10px',
        ut = F.a.create(function (e) {
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
        mt = function (e) {
          var n = e.children,
            a = e.community,
            l = de()(void 0 !== Bn ? Bn : (Bn = t('OBBW')), a),
            i = Object(He.a)(l),
            o = Object(Gn.a)(l).palette,
            s = []
          if (o) {
            var c,
              u = it()(o)
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
            r.a.createElement(k.a, { style: ut.descriptionContainer }, n),
            r.a.createElement(k.a, { style: [F.a.absoluteFill, ut.backgroundColorWhite] }),
            r.a.createElement(k.a, {
              style: [
                F.a.absoluteFill,
                ut.backgroundColor,
                (function (e, n) {
                  if (d) return rt.a.getCommunityGradientStyle(n, ct)
                  var t = e && ot.a.get(e),
                    a = t ? (null == t ? void 0 : t.rgb) : st,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    i = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(ct, ', ')
                      .concat(i, ' ')
                      .concat(ct, ' 100%)'),
                  }
                })(s, i),
              ],
            }),
          )
        },
        dt = t('ogGF'),
        yt = t('CaKu'),
        pt = t('1YZw'),
        gt = Object(u.a)().propsFromActions(function () {
          return { addToast: pt.b }
        }),
        ft = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
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
      ft.metadata = { width: 24, height: 24 }
      var ht,
        bt,
        vt,
        _t,
        kt,
        Et = ft,
        Ct = t('I/9y'),
        St = t('pwey'),
        Ft = _.a.bec3b8f9,
        It = { viewType: 'share_community' },
        wt = _.a.f88553c8,
        Kt = { viewType: 'copy_link' },
        Tt = { viewType: 'invite_members' },
        Mt = _.a.b139b549,
        xt = _.a.e05c00b4,
        Lt = r.a.createElement(Et, null),
        Rt = F.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        Ot = gt(function (e) {
          var n = de()(void 0 !== ht ? ht : (ht = t('X/n0')), e.community),
            a = e.addToast,
            l = n.rest_id,
            i = n.role,
            o = Object(b.g)(i),
            s = r.a.useCallback(
              function (e) {
                yt.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), a({ text: wt })
              },
              [a, l],
            ),
            c = r.a.useMemo(
              function () {
                return function (e) {
                  var n = []
                  return (
                    n.push({ behavioralEventContext: Kt, text: xt, Icon: Ct.a, onClick: s }),
                    o &&
                      n.push({
                        behavioralEventContext: Tt,
                        text: Mt,
                        Icon: St.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    r.a.createElement(E.a, { items: n, onCloseRequested: e })
                  )
                }
              },
              [o, l, s],
            )
          return r.a.createElement(C.a, {
            accessibilityLabel: Ft,
            behavioralEventContext: It,
            icon: Lt,
            renderMenu: c,
            style: Rt.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        At = r.a.memo(Ot),
        jt = _.a.hb9400db,
        Pt = function (e) {
          var n = e.community,
            a = de()(void 0 !== bt ? bt : (bt = t('ldL/')), n),
            l = a.description,
            i = a.role,
            o = r.a.useState(!1),
            s = nn()(o, 2),
            c = s[0],
            u = s[1],
            m = r.a.useState(!1),
            d = nn()(m, 2),
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
                { style: Dt.description },
                r.a.createElement(ue.b, { color: 'white', getTextOverflow: p, numberOfLines: c ? void 0 : 2 }, l),
                !c && y ? r.a.createElement(ue.b, { color: 'white', onPress: g, weight: 'bold' }, jt) : null,
              )
        },
        Dt = F.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Bt = r.a.memo(Pt),
        Ht = t('ja7Y'),
        Nt = t('MtXG'),
        Ut = _.a.d58baa7e,
        zt = function (e) {
          var n = e.community,
            a = de()(void 0 !== vt ? vt : (vt = t('WuQQ')), n).member_count,
            l = void 0 === a ? 0 : a,
            i = Ut(l)
          return r.a.createElement(
            Nt.a.Group,
            null,
            r.a.createElement(
              Nt.a,
              { onMedia: !0 },
              r.a.createElement(
                ue.b,
                { color: 'white' },
                r.a.createElement(
                  _.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  r.a.createElement(Nt.a.Value, null, _.a.ibd0106d({ formattedCount: i })),
                  r.a.createElement(Nt.a.Label, null, _.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        Vt = t('cm6r'),
        qt = t('I4+6').a.generate({
          backgroundColor: F.a.theme.colors.transparent,
          color: F.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Wt = F.a.create(function (e) {
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
        Qt = function (e) {
          var n = e.community,
            a = de()(void 0 !== _t ? _t : (_t = t('weg/')), n),
            l = a.rest_id
          return r.a.createElement(
            Vt.a,
            { interactiveStyles: qt, link: '/i/communities/'.concat(l, '/members'), style: Wt.membersContainer },
            r.a.createElement(Ht.a, { community: a, style: Wt.rightSpace }),
            r.a.createElement(zt, { community: a }),
          )
        },
        Xt = t('yoO3'),
        Jt = t('k/OQ'),
        Gt = _.a.a0e3ece4,
        Yt = _.a.ha8209bb,
        Zt = _.a.d601fc2f,
        $t = _.a.b721eb37,
        ea = { viewType: 'description' },
        na = { viewType: 'facepiles_with_count' },
        ta = function (e) {
          var n = de()(void 0 !== kt ? kt : (kt = t('+BRT')), e.community),
            a = n.rest_id,
            l = Object(ge.a)('c9s_participation_enabled'),
            i = Object(ge.a)('c9s_timelines_ranking_enabled'),
            s = Object(ge.a)('c9s_share_community_enabled'),
            c = Object(Hn.i)(),
            u = r.a.useMemo(
              function () {
                var e = [
                  { to: '/i/communities/'.concat(a), label: Yt, key: Yt },
                  { to: '/i/communities/'.concat(a, '/latest'), label: Zt, key: Zt },
                  { to: '/i/communities/'.concat(a, '/about'), label: $t, key: $t },
                ]
                return r.a.createElement(Jt.a, {
                  accessibilityLabel: Gt,
                  links: i
                    ? e
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== Zt
                        })
                      })(e),
                })
              },
              [a, i],
            )
          return r.a.createElement(
            Xt.a,
            { behavioralEventViewType: 'timeline' },
            r.a.createElement(
              k.a,
              { style: aa.container },
              r.a.createElement(
                k.a,
                null,
                r.a.createElement(at, { community: n }),
                r.a.createElement(
                  o.a,
                  { behavioralEventContext: ea },
                  r.a.createElement(
                    mt,
                    { community: n },
                    r.a.createElement(
                      ue.b,
                      { color: 'white', size: 'title2', style: aa.name, weight: 'bold' },
                      n.name.trim(),
                    ),
                    r.a.createElement(Bt, { community: n }),
                    r.a.createElement(
                      o.a,
                      { behavioralEventContext: na },
                      r.a.createElement(
                        k.a,
                        { style: aa.bottomContainer },
                        r.a.createElement(Qt, { community: n }),
                        r.a.createElement(
                          k.a,
                          { style: aa.buttons },
                          s
                            ? r.a.createElement(At, { community: n })
                            : r.a.createElement(dt.a, {
                                community: n,
                                style: aa.inviteButton,
                                type: 'onMediaOutlined',
                              }),
                          l
                            ? r.a.createElement(Xn, {
                                communityId: a,
                                match: c,
                                onCommunityMembershipChange: e.onCommunityMembershipChange,
                              })
                            : null,
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
        la = r.a.memo(ta),
        ia = t('/de5')
      function ra() {
        var e = Object(Hn.f)(),
          n = Object(Hn.g)(),
          t = Object(Hn.i)()
        return r.a.createElement(ia.b, { history: e, location: n, match: t })
      }
      var oa = t('FIs5'),
        sa = t('EUHl'),
        ca = t('7BdX'),
        ua = _.a.c18e3a3e,
        ma = _.a.d68146c0,
        da = _.a.h5245afa,
        ya = _.a.f05dbeff,
        pa = function (e) {
          var n = e.module,
            t = r.a.useCallback(function () {
              return r.a.createElement(oa.a, { buttonType: 'brandOutlined', header: ua, message: ma })
            }, [])
          return r.a.createElement(
            Xt.a,
            { behavioralEventViewType: 'tweets' },
            r.a.createElement(De.a, {
              loadingAccessibilityLabel: ya,
              module: n,
              newTweetsPillMode: sa.a.CLIENT,
              prerollDisplayLocation: ca.c.OTHER,
              refreshControl: null,
              renderEmptyState: t,
              title: da,
            }),
          )
        },
        ga = t('mw9i'),
        fa =
          (t('MvUL'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(T.a)(
              'svg',
              l()(
                l()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [K.a.root, e.style],
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
      fa.metadata = { width: 24, height: 24 }
      var ha,
        ba = fa,
        va = t('wpLu'),
        _a = _.a.bf359e0d,
        ka = _.a.e8fcdd3a,
        Ea = _.a.b37d580e,
        Ca = _.a.cafca4b2,
        Sa = _.a.ea3b38fa,
        Fa = _.a.jd667130,
        Ia = _.a.ca7eeabf,
        wa = _.a.acae4034,
        Ka = _.a.e2186ee2,
        Ta = _.a.j24c37b2,
        Ma = function (e) {
          var n = de()(void 0 !== ha ? ha : (ha = t('2rr8')), e.community),
            a = Object(Hn.f)(),
            l = r.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(n.rest_id, '/'))
              },
              [a, n.rest_id],
            ),
            i = r.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: xa.rulesContainer },
              n.rules.map(function (e) {
                return r.a.createElement(
                  ue.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: xa.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === n.access,
            s = o ? Sa : Ea,
            c = o ? Fa : Ca
          return r.a.createElement(
            re.a,
            {
              actionLabel: Ta,
              graphicDisplayMode: 'none',
              headline: _a,
              isFullHeightOnMobile: !0,
              onAction: l,
              subtext: ka,
            },
            r.a.createElement(
              k.a,
              { style: xa.infoItemsContainer },
              r.a.createElement(be.a, {
                containerStyle: xa.itemContainer,
                items: [
                  { label: s, description: c, decoration: r.a.createElement(ba, { style: xa.decorationContainer }) },
                  { label: Ia, decoration: r.a.createElement(va.a, { style: xa.decorationContainer }), description: i },
                  { label: wa, description: Ka, decoration: r.a.createElement(x, { style: xa.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        xa = F.a.create(function (e) {
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
        La = r.a.memo(Ma),
        Ra = t('dwig'),
        Oa = t('0+qk'),
        Aa = t('L/9f'),
        ja = t('3G7m'),
        Pa = t('7JQg'),
        Da =
          (t('FtFR'),
          t('hBvt'),
          Object(u.a)()
            .propsFromState(function () {
              return { flags: te.b }
            })
            .propsFromActions(function () {
              return { setFlag: te.c }
            })),
        Ba = t('hOZg'),
        Ha = t('WtWS'),
        Na = t('0ULw'),
        Ua = _.a.c66b37f9,
        za = _.a.g2768d0e,
        Va = _.a.b192b58b,
        qa = _.a.gd30278f,
        Wa = _.a.cbdddb09,
        Qa = _.a.h5890b1a,
        Xa = [
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
                  text: ''.concat(qa, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        Ja = r.a.memo(function (e) {
          var n = e.communityId,
            t = e.flags,
            a = e.setFlag,
            l = r.a.useContext(c.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            i = Object(Hn.f)(),
            o = r.a.useCallback(
              function () {
                a(n, 'setup_show_checklist', !1)
              },
              [n, a],
            )
          if (!t.setup_show_checklist || !l) return null
          var s = function (e) {
              a(n, e.flag, !0).then(function () {
                i.push(e.link(n))
              })
            },
            u = function (e, n) {
              13 === n.keyCode && s(e)
            }
          return r.a.createElement(
            k.a,
            { style: Ga.wrapper },
            r.a.createElement(
              k.a,
              { style: Ga.header },
              r.a.createElement(ue.b, { size: 'title3', weight: 'bold' }, Ua),
              r.a.createElement(C.a, {
                accessibilityLabel: Va,
                icon: r.a.createElement(Ba.a, { style: Ga.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: Ga.dismiss,
                type: 'brandText',
              }),
            ),
            r.a.createElement(ue.b, { style: Ga.subtext }, za),
            r.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: Ga.list },
              Xa.map(function (e) {
                var n = Boolean(t[e.flag])
                return r.a.createElement(
                  k.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !n,
                    key: e.flag,
                    onClick: n ? void 0 : s.bind(null, e),
                    onKeyPress: n ? void 0 : u.bind(null, e),
                    style: [Ga.entry, n ? Ga.completedEntry : Ga.uncompletedEntry],
                  },
                  r.a.createElement(ue.b, { weight: 'bold' }, e.title),
                  n
                    ? r.a.createElement(Ha.a, { accessibilityLabel: Wa, style: Ga.iconCompleted })
                    : r.a.createElement(Na.a, { accessibilityLabel: Qa, style: Ga.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        Ga = F.a.create(function (e) {
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
        Ya = Da(Ja),
        Za = (t('jQ3i'), t('x4t0'), t('8Lfv')),
        $a = t('uDfI'),
        el = t('LI/a')
      function nl(e) {
        var n = Object($a.c)(),
          t = Object(m.useCreateLocalApiErrorHandler)('COMMUNITIES_TWEETS'),
          a = Object(ge.a)('c9s_timelines_ranking_enabled'),
          l = r.a.useMemo(
            function () {
              return Object(el.a)(e)
            },
            [e],
          ),
          i = r.a.useMemo(
            function () {
              return a ? Object(el.b)(e) : l
            },
            [l, a, e],
          ),
          o = (function (e) {
            var n,
              t = 'PUSH' === Object(Hn.f)().action,
              a = Object(Hn.g)().pathname,
              l = r.a.useRef(),
              i =
                (null == a ? void 0 : a.includes(e)) &&
                (null === (n = l.current) || void 0 === n ? void 0 : n.includes(e))
            return (l.current = a), t && !i
          })(e),
          s = r.a.useCallback(
            function () {
              a && n(Object(Za.a)(i)).catch(t({})), n(Object(Za.a)(l)).catch(t({}))
            },
            [a, i, l, t, n],
          )
        return (
          r.a.useEffect(
            function () {
              o && s()
            },
            [o, s],
          ),
          r.a.useMemo(
            function () {
              return { homeModule: i, latestModule: l, refreshModules: s }
            },
            [i, l, s],
          )
        )
      }
      var tl,
        al = t('IAZG'),
        ll = t('QRqA'),
        il = (Object.freeze({ Home: 'home', Latest: 'latest' }), { page: 'community', section: 'home' }),
        rl = { page: 'community', section: 'latest' },
        ol = { page: 'community', section: 'tweets' },
        sl = void 0 !== tl ? tl : (tl = t('R0yc')),
        cl = function (e) {
          var n = e.communityId,
            t = e.composeOptions,
            a = Object(al.a)(sl, { communityId: n }).community,
            l = Object(ge.a)('c9s_participation_enabled'),
            i = nl(n),
            o = i.homeModule,
            s = i.latestModule,
            c = i.refreshModules,
            u = Object(ge.a)('c9s_timelines_ranking_enabled'),
            m = Object(Hn.f)(),
            d = Object(Hn.g)(),
            y = a.role === b.a.Admin && void 0 !== d.query.show_creation_summary,
            p = Object(b.g)(a.role) && l,
            g = Object(He.a)(a),
            f = r.a.useMemo(
              function () {
                return { canJoinCommunity: 'CommunityJoinAction' === a.actions.join_action_result.__typename, theme: g }
              },
              [g, a.actions.join_action_result],
            ),
            h = r.a.useMemo(
              function () {
                return p
                  ? r.a.createElement(Oa.a, {
                      getLocationState: function () {
                        return t
                      },
                      history: m,
                    })
                  : null
              },
              [p, m, t],
            )
          return r.a.createElement(
            Ra.a,
            { component: ga.a, fab: h },
            r.a.createElement(ll.a, { forSingleCommunity: f }),
            y && r.a.createElement(La, { community: a }),
            r.a.createElement(la, { community: a, onCommunityMembershipChange: c }),
            r.a.createElement(
              Hn.d,
              null,
              r.a.createElement(
                Hn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/') },
                r.a.createElement(Ya, { communityId: n }),
                r.a.createElement(Pa.c, { namespace: u ? il : ol }, r.a.createElement(pa, { module: o })),
              ),
              r.a.createElement(
                Hn.b,
                { path: '/i/communities/'.concat(n, '/latest') },
                r.a.createElement(Ya, { communityId: n }),
                r.a.createElement(Pa.c, { namespace: u ? rl : ol }, r.a.createElement(pa, { module: s })),
              ),
              r.a.createElement(
                Hn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/about') },
                r.a.createElement(Ye, { community: a }),
              ),
            ),
          )
        },
        ul = { page: 'community', section: 'primaryContent' },
        ml = {
          type: 'CustomRetry',
          content: function () {
            return r.a.createElement(ra, null)
          },
        },
        dl = function (e) {
          return r.a.createElement(
            Pa.c,
            { namespace: ul },
            r.a.createElement(
              Xt.a,
              { behavioralEventViewType: 'Community' },
              r.a.createElement(
                Aa.a,
                { errorConfig: { context: 'CommunityScreen' }, fallback: ml },
                r.a.createElement(ja.a, null, r.a.createElement(cl, e)),
              ),
            ),
          )
        },
        yl = t('VS6U'),
        pl = { type: 'serversideContextKey', serversideContextType: 'community' },
        gl = _.a.a7c2e06c,
        fl = _.a.j24c37b2,
        hl = _.a.a94092a1,
        bl = _.a.i1fda797,
        vl = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        _l = function (e) {
          var n = e.community,
            t = e.communityId,
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
                t && i(t).catch(a({})), y === f.a.NONE && c().catch(a())
              },
              [y, i, t, c, a],
            )
          r.a.useEffect(
            function () {
              _()
            },
            [_],
          )
          var k = r.a.useCallback(
              function () {
                t && g(t, 'mod_education_flag', !0)
              },
              [t, g],
            ),
            E = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, pl), {}, { serversideContextId: t || '' }), viewType: 'community' }
              },
              [t],
            ),
            C = r.a.useMemo(
              function () {
                return vl(t)
              },
              [t],
            ),
            S = null == n ? void 0 : n.name,
            F = null == n ? void 0 : n.role,
            I = !!d && h,
            w = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            K = v && F === b.a.Moderator && !u,
            T = r.a.useMemo(
              function () {
                return r.a.createElement(J, { canModerate: Object(b.c)(F), communityId: t || '', userRole: F })
              },
              [F, t],
            ),
            M = r.a.useMemo(
              function () {
                return r.a.createElement(s.a, { communityId: t || '', withCommunityRules: w })
              },
              [t, w],
            ),
            x = r.a.useMemo(
              function () {
                return r.a.createElement(dl, { communityId: t || '', composeOptions: C })
              },
              [t, C],
            )
          return t
            ? r.a.createElement(
                o.a,
                { behavioralEventContext: E },
                r.a.createElement(yl.a, {
                  backLocation: p && '/'.concat(p, '/communities'),
                  composeOptions: C,
                  documentTitle: S ? gl({ communityName: S }) : '',
                  history: m,
                  primaryContent: x,
                  rightControl: T,
                  sidebarContent: M,
                  title: S || null,
                  withTweetButton: I,
                }),
                K
                  ? r.a.createElement(re.a, {
                      actionLabel: fl,
                      graphicDisplayMode: 'none',
                      headline: hl,
                      onAction: k,
                      onClose: k,
                      subtext: bl,
                      withCloseButton: !0,
                    })
                  : null,
              )
            : null
        },
        kl = ie(_l)
      n.default = kl
    },
    U0Qk: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return g
      })
      var a = t('ddV6'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('v6aA'),
        s = t('p+r5'),
        c = t('3XMw'),
        u = t.n(c),
        m = t('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        p = u.a.e988475f,
        g = function (e) {
          var n = e.autoFocus,
            t = void 0 !== n && n,
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
                var n = e.target.value,
                  t = !Object(m.h)(n, 3, k)
                t && f(p({ minCharacterCount: 3, maxCharacterCount: k })), _(t), i(n, t)
              },
              [k, f, i],
            )
          return r.a.createElement(s.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: t,
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
    U3Z9: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CreateCommunityModal', function () {
          return A
        })
      var a = t('yiKp'),
        l = t.n(a),
        i = t('ddV6'),
        r = t.n(i),
        o = (t('KqXw'), t('MvUL'), t('ERkP')),
        s = t.n(o),
        c = t('+Kfv'),
        u = t('ROT1'),
        m = t('U0Qk'),
        d = t('eSoz'),
        y = t('RqPI'),
        p = t('rxPX'),
        g = Object(p.a)()
          .propsFromState(function () {
            return { communitiesActions: y.f }
          })
          .propsFromActions(function () {
            return { createCommunity: d.b }
          }),
        f = t('jHSc'),
        h = t('3XMw'),
        b = t.n(h),
        v = t('0weh'),
        _ = t('5FtR'),
        k = t('s8G+'),
        E = t('MWbm'),
        C = t('/yvb'),
        S = t('4zmP'),
        F = t('t62R'),
        I = t('rHpw'),
        w = t('I/KZ'),
        K = b.a.i6e7e298,
        T = b.a.a226497c,
        M = b.a.c9d56b71,
        x = b.a.fc2a5c92,
        L = b.a.c1ad5a11,
        R = b.a.f713fbd1,
        O = { viewType: 'community' },
        A = s.a.memo(function (e) {
          var n = e.communitiesActions,
            t = e.createCommunity,
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
            Q = W[0],
            X = W[1],
            J = s.a.useCallback(function (e, n) {
              H(e), p(n)
            }, []),
            G = s.a.useCallback(function (e, n) {
              V(e), 0 === e.length ? I(!1) : I(n)
            }, []),
            Y = Object(w.e)(),
            Z = r()(Y, 2),
            $ = Z[0],
            ee = Z[1],
            ne = s.a.useCallback(
              function () {
                return i ? l()({ description: z }, Object(w.c)($)) : { description: z }
              },
              [z, i, $],
            ),
            te = s.a.useCallback(
              function () {
                X(null),
                  t(B, ne())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var n = null == e ? void 0 : e.normalized.result
                        'string' == typeof n && a.replace('/i/communities/'.concat(n, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && X(e)
                    })
                    .catch(function (e) {
                      X({ error: 'GraphQL error', reason: e })
                    })
              },
              [B, t, ne, a],
            )
          if (null == n || !n.create) return s.a.createElement(_.a, { to: '/home' })
          var ae = s.a.createElement(C.a, { disabled: A, onClick: te, size: 'small', type: 'brandFilled' }, K),
            le = Q
              ? s.a.createElement(
                  E.a,
                  { style: j.error },
                  s.a.createElement(S.a, { Icon: v.a, headline: x, text: L, type: 'danger' }),
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
                title: T,
              },
              s.a.createElement(
                s.a.Fragment,
                null,
                le,
                s.a.createElement(F.b, { color: 'gray700', style: j.text }, M),
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
      n.default = P
    },
    UZ0O: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return F
      })
      var a = t('KEM+'),
        l = t.n(a),
        i = t('yiKp'),
        r = t.n(i),
        o = t('ddV6'),
        s = t.n(o),
        c = t('ERkP'),
        u = t.n(c),
        m = t('v6aA'),
        d = t('3XMw'),
        y = t.n(d),
        p = t('rHpw'),
        g = t('xvzJ'),
        f = (t('2G9S'), t('CxAY')),
        h = t('rxPX'),
        b = function (e, n) {
          return n.communityId && n.userId ? f.b.select(e, ''.concat(n.communityId, '_').concat(n.userId)) : void 0
        }
      var v = Object(h.a)().propsFromState(function () {
          return { userCommunityRoleRelationship: b }
        })(function (e) {
          var n = e.communityId,
            t = e.onCommunityRoleChange,
            a = e.userCommunityRoleRelationship,
            l = e.userId
          if (
            (u.a.useEffect(
              function () {
                a && t(l, a)
              },
              [a, l, t],
            ),
            !a)
          )
            return null
          var i = a.role,
            r = a.user,
            o = r.id,
            s = r.screen_name
          return u.a.createElement(g.a, { communityId: n, communityRole: i, recordId: o, screenName: s, userId: l })
        }),
        _ = t('4e/K'),
        k = t('Ig1G'),
        E = t('GZwR'),
        C = y.a.cf4898a0,
        S = [E.a.CommunityMembers]
      function F(e) {
        var n = u.a.useContext(m.a).featureSwitches.isTrue('c9s_members_list_search_enabled'),
          t = e.community,
          a = e.communityId,
          i = e.onIsSearchingChange,
          o = (null == t ? void 0 : t.role) === k.a.Admin,
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
          K = w[0],
          T = w[1],
          M = u.a.useCallback(
            function (e, n) {
              T(function (t) {
                return r()(r()({}, t), {}, l()({}, e, n))
              })
            },
            [T],
          ),
          x = u.a.useCallback(
            function () {
              p(!0), i(!0)
            },
            [i],
          ),
          L = u.a.useCallback(
            function (e) {
              b(e)
              var n = !!e
              i(n), p(n)
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
        return n && o
          ? u.a.createElement(_.default, {
              alwaysOpen: y,
              communityId: a,
              filter: S,
              getUserDisplayNameLabel: function (e) {
                if ('user' === e.type) {
                  var n = e.data.id_str,
                    t = K[n]
                  if (t) return Object(k.d)(t.role)
                }
              },
              inputStyle: I.textInput,
              isModal: !0,
              onDismiss: R,
              onFocus: x,
              onQueryChange: L,
              placeholder: C,
              renderUserDecoration: function (e) {
                var n = e.userId
                return u.a.createElement(v, { communityId: a, onCommunityRoleChange: M, userId: n })
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
    WWTc: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(r.hash = '9b955902020d0baa1431bc7848010386'), (n.default = r)
    },
    WuQQ: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'X/n0': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    atLU: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    b5s6: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        i = t('m3Bd'),
        r = t.n(i),
        o = t('ERkP'),
        s = t.n(o),
        c = t('v6aA'),
        u = t('XOJV'),
        m = t('eSoz'),
        d = t('rxPX'),
        y = t('0KEI'),
        p = function (e, n) {
          return n.tweetId
        },
        g = function (e, n) {
          var t = n.tweetId,
            a = t && u.a.select(e, t)
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
        h = t('YeIG'),
        b = t('uCxL'),
        v = t('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = f(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            o = (e.tweetId, r()(e, _)),
            u = s.a.useContext(c.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              y && Object(h.a)(n) && a(y).catch(t())
            },
            [n, y, t, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            g = i && Object(v.f)(i, d, n),
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
      n.a = k
    },
    bCEw: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('K1iM')),
        l = t('23An'),
        i = t('Ud88'),
        r = t('aQQo'),
        o = r.loadQuery,
        s = r.useTrackLoadQueryInRender,
        c = t('ERkP'),
        u = c.useCallback,
        m = c.useEffect,
        d = c.useRef,
        y = c.useState,
        p = t('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var t = null != n ? n : g,
          r = i()
        s()
        var c = l(),
          p = d(new Set([t])),
          h = y(function () {
            return t
          }),
          b = h[0],
          v = h[1],
          _ = y(function () {
            return t
          }),
          k = _[0],
          E = _[1]
        t !== k && (p.current.add(t), E(t), v(t))
        var C = u(
            function () {
              c.current && (p.current.add(g), v(g))
            },
            [c],
          ),
          S = u(
            function (n, t) {
              var a =
                null != t && t.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: t.fetchPolicy,
                      networkCacheConfig: t.networkCacheConfig,
                      __nameForWarning: t.__nameForWarning,
                    }
                  : t
              if (c.current) {
                var l,
                  i = o(null !== (l = null == t ? void 0 : t.__environment) && void 0 !== l ? l : r, e, n, a)
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
              var n = p.current
              if (c.current) {
                var t,
                  l = (0, a.default)(n)
                try {
                  for (l.s(); !(t = l.n()).done; ) {
                    var i = t.value
                    if (i === b) break
                    n.delete(i),
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
                var n,
                  t = (0, a.default)(p.current)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var l = n.value
                    'NullQueryReference' !== l.kind &&
                      (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  t.e(i)
                } finally {
                  t.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, S, C]
        )
      }
    },
    cI4y: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(u.hash = 'd5eb23d40bcb19e36e32afc95695f334'), (n.default = u)
    },
    cL2e: function (e, n, t) {
      'use strict'
      t.d(n, 'c', function () {
        return x
      }),
        t.d(n, 'a', function () {
          return H
        }),
        t.d(n, 'b', function () {
          return V
        })
      var a,
        l,
        i = t('ERkP'),
        r = t.n(i),
        o = t('FIs5'),
        s = (t('enFi'), t('3XMw')),
        c = t.n(s),
        u = t('TEoO'),
        m = t('Fr3L'),
        d = (t('ho0z'), t('j57/')),
        y = t('ja7Y'),
        p = t('rHpw'),
        g = t('MjKK'),
        f = t('jAXQ'),
        h = t.n(f),
        b = function (e) {
          var n = e.item,
            l = h()(void 0 !== a ? a : (a = t('08/x')), n),
            i = Object(g.b)(l)
          return r.a.createElement(d.a, {
            communityId: l.rest_id,
            media: i,
            memberCount: l.member_count,
            membersFacepile: r.a.createElement(y.a, { community: l, shouldUseThemeColor: !1, style: v.facepile }),
            name: l.name,
          })
        },
        v = p.a.create(function (e) {
          return { facepile: { justifyContent: 'flex-start' } }
        }),
        _ = r.a.memo(b),
        k = t('s8G+'),
        E = t('DQzJ'),
        C = { context: 'CommunitiesSearchQuery' },
        S = c.a.c170a564,
        F = c.a.ae111c99,
        I = function (e) {
          return e.__id
        },
        w = void 0 !== l ? l : (l = t('DVIF')),
        K = function (e) {
          return r.a.createElement(_, { item: e })
        },
        T = function (e) {
          var n,
            t = e.query,
            a = void 0 === t ? '' : t,
            l = Object(E.a)(w, { query: a }),
            i = l.data,
            s = l.fetchNext,
            c = null == i || null === (n = i.communities_search_slice) || void 0 === n ? void 0 : n.items
          return 0 === c.length
            ? r.a.createElement(o.a, { header: F({ query: a }), message: S })
            : r.a.createElement(u.a, {
                cacheKey: 'CommunitiesSearch',
                identityFunction: I,
                items: c,
                onNearEnd: s,
                renderer: K,
              })
        },
        M = function (e) {
          var n = e.query
          return Object(k.a)('c9s_communities_search_enabled') && n
            ? r.a.createElement(m.a, { errorConfig: C }, r.a.createElement(T, { query: n }))
            : null
        },
        x = r.a.memo(M),
        L = t('ddV6'),
        R = t.n(L),
        O = (t('KqXw'), t('MvUL'), t('VY6S')),
        A = t('6OUF'),
        j = t('VwDm'),
        P = t('zCf4'),
        D = c.a.fbf01e51,
        B = function (e) {
          var n = e.initialValue,
            t = void 0 === n ? '' : n,
            a = r.a.useRef(!1)
          r.a.useEffect(function () {
            return (
              (a.current = !0),
              function () {
                a.current = !1
              }
            )
          }, [])
          var l = r.a.useState(t),
            i = R()(l, 2),
            o = i[0],
            s = i[1],
            c = Object(P.f)(),
            u = r.a.useCallback(
              function () {
                s(''), c.replace('/i/communities/suggested')
              },
              [c],
            ),
            m = r.a.useMemo(
              function () {
                return Object(O.a)(function (e) {
                  a.current && (e.length > 0 ? c.replace('/i/communities/suggested?q='.concat(e)) : u())
                }, 1e3)
              },
              [u, c],
            ),
            d = r.a.useCallback(
              function (e) {
                var n = e.target.value
                s(n), m(n)
              },
              [m],
            )
          return r.a.createElement(A.a, {
            Icon: j.a,
            autoComplete: 'off',
            isCompact: !0,
            onChange: d,
            onClear: u,
            placeholder: D,
            value: o,
            withClearButton: !0,
          })
        },
        H = r.a.memo(B),
        N = t('/yvb'),
        U = c.a.fbf01e51,
        z = function (e) {
          return Object(k.a)('c9s_communities_search_enabled')
            ? r.a.createElement(N.a, {
                icon: r.a.createElement(j.a, { accessibilityLabel: U, style: q.searchButton }),
                link: '/i/communities/suggested',
                size: 'medium',
                type: 'brandText',
              })
            : null
        },
        V = r.a.memo(z),
        q = p.a.create(function (e) {
          return { searchButton: { color: e.colors.text } }
        })
    },
    'cd+Z': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'cz/h': function (e, n, t) {
      'use strict'
      t.r(n)
      t('lTEL'), t('7x/C'), t('87if'), t('kYxP'), t('KrtT'), t('KqXw'), t('LJOr')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('es0u'),
        r = t('WpDa'),
        o = t('ZNT5'),
        s = Object(o.a)({
          timelineId: 'communitiesDiscoveryTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunityDiscoveryTimeline
          },
          getEndpointParams: function (e) {
            var n = e.count,
              t = e.cursor
            return { count: n, cursor: 'string' == typeof t ? t : void 0 }
          },
          context: 'FETCH_COMMUNITIES_DISCOVERY_TIMELINE',
          perfKey: 'communitiesDiscoveryTimeline',
          formatResponse: r.a,
        }),
        c = t('OUEC'),
        u = t('3XMw'),
        m = t.n(u),
        d = t('6vad'),
        y = t('yoO3'),
        p = t('fTQJ'),
        g = t('VS6U'),
        f = t('s8G+'),
        h = t('cL2e'),
        b = t('zCf4'),
        v = m.a.cb6adb1f,
        _ = function (e) {
          var n = Object(b.f)(),
            t = Object(b.g)(),
            a = Object(f.a)('c9s_communities_search_enabled'),
            r = l.a.useCallback(function () {
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(d.b, { text: v }),
                l.a.createElement(p.a, { entryConfiguration: c.a, module: s, refreshControl: null, title: '' }),
              )
            }, []),
            o = l.a.useMemo(
              function () {
                var e
                return null !== (e = new URLSearchParams(t.search).get('q')) && void 0 !== e ? e : void 0
              },
              [t.search],
            ),
            u = l.a.useCallback(
              function () {
                return o ? l.a.createElement(h.c, { query: o }) : r()
              },
              [r, o],
            ),
            m = a ? u() : r()
          return l.a.createElement(
            y.a,
            { behavioralEventViewType: 'discover' },
            l.a.createElement(g.a, {
              backLocation: '/',
              customSearchBox: a ? l.a.createElement(h.a, { initialValue: o }) : null,
              history: n,
              primaryContent: m,
              sidebarContent: l.a.createElement(i.a, { withSearchBox: !1 }),
              title: v,
              withSearchBox: a,
            }),
          )
        }
      n.default = l.a.memo(_)
    },
    dMLx: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    fK4d: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    fS8x: function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        i = t('VrFO'),
        r = t.n(i),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        m = t('5Yy7'),
        d = t.n(m),
        y = t('2VqO'),
        p = t.n(y),
        g = t('KEM+'),
        f = t.n(g),
        h = t('/NU0'),
        b = t('rxPX'),
        v = t('AspN'),
        _ = function (e, n) {
          return n.media ? n.media : Object(h.a)(n.mediaId) ? Object(v.k)(e, n.mediaId)[0] : void 0
        },
        k = function (e, n) {
          return void 0 !== n.mediaId ? n.mediaId : n.media ? n.media.id : null
        },
        E = Object(b.a)()
          .propsFromState(function () {
            return { media: _, mediaId: k }
          })
          .propsFromActions(function () {
            return { processMedia: v.f, updateMediaUpload: v.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = t('jHSc'),
        S = t('3XMw'),
        F = t.n(S),
        I = t('EeFI'),
        w = 'applyButton',
        K = t('/yvb'),
        T = t('rHpw'),
        M = F.a.gd80afba,
        x = F.a.a753a87f,
        L = (function (e) {
          d()(t, e)
          var n = p()(t)
          function t(e) {
            var a
            return (
              r()(this, t),
              (a = n.call(this, e)),
              f()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              f()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return l.a.createElement(
                  K.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: w, type: 'primaryFilled' },
                  x,
                )
              }),
              f()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  n = e.analytics,
                  t = e.onCancel
                n.scribe({ action: 'cancel' }), t && t()
              }),
              f()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  n = a._cropper.current
                if (n) {
                  var t = a.props,
                    l = t.analytics,
                    i = t.media,
                    r = t.mediaId,
                    o = t.onDone,
                    s = t.processMedia,
                    c = t.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = n.getCropData(),
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
            s()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.defaultAspectRatio,
                    t = e.history,
                    a = e.title,
                    i = e.withAspectRatioOptions,
                    r = e.withZoomControl,
                    o = this._getMedia()
                  return l.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: R.root,
                      documentTitle: a || M,
                      history: t,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || M,
                    },
                    l.a.createElement(I.a, {
                      defaultAspectRatio: n,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: i,
                      withZoomControl: r,
                    }),
                  )
                },
              },
            ]),
            t
          )
        })(l.a.Component),
        R = T.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(L),
        A = t('X8FW'),
        j = T.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      n.a = function (e) {
        return l.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: j.modal },
          l.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(m.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (n.default = m)
    },
    gDCe: function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        i = t('v6aA'),
        r = t('Ig1G'),
        o = t('3XMw'),
        s = t.n(o),
        c = t('Nh1N'),
        u = t('MWbm'),
        m = t('4zmP'),
        d = t('rHpw'),
        y = s.a.b6e22e15,
        p = s.a.d17c10d9,
        g = s.a.a1ecaf33,
        f = l.a.memo(function (e) {
          var n,
            t = e.community,
            a = l.a.useContext(i.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !t || t.role !== r.a.Admin || a
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
                          ((n = t.id_str),
                          'Hi, my community is (https://twitter.com/i/communities/'.concat(
                            n,
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
      n.a = f
    },
    'i/x0': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'ii+P': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return r
      })
      t('FtFR')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('wtru')
      function r(e) {
        var n = Object(i.b)()
        return [
          !!n && !n.flags[e],
          l.a.useCallback(
            function () {
              null == n || n.addFlag(e)
            },
            [n, e],
          ),
        ]
      }
    },
    'j57/': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        i = (t('ho0z'), t('ERkP')),
        r = t.n(i),
        o = t('+Kfv'),
        s = t('zCf4'),
        c = t('MWbm'),
        u = t('TIdA'),
        m = t('A91F'),
        d = t('rHpw'),
        y = t('MtXG'),
        p = t('t62R'),
        g = t('htQn'),
        f = t('MAI/'),
        h = t('3XMw'),
        b = t.n(h),
        v = b.a.d58baa7e,
        _ = { type: 'serversideContextKey', serversideContextType: 'community' },
        k = function (e) {
          var n = e.crop,
            t = e.image
          return r.a.createElement(
            c.a,
            { style: S.thumbnailContainer },
            r.a.createElement(u.a, {
              accessibilityLabel: '',
              aspectMode: m.a.SQUARE,
              backgroundColor: d.a.theme.colors.gray300,
              cropCandidates: n,
              image: t,
            }),
          )
        },
        E = function (e) {
          var n = e.communityId,
            t = e.count,
            a = v(t),
            l = '/i/communities/'.concat(n, '/members'),
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
                  r.a.createElement(y.a.Label, null, b.a.cface2d0({ count: t })),
                ),
              ),
            ),
          )
        },
        C = function (e) {
          var n = e.communityId,
            t = e.media,
            a = e.memberCount,
            i = e.membersFacepile,
            s = e.name,
            u = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, _), {}, { serversideContextId: n }), viewType: 'community_cell' }
              },
              [n],
            ),
            m = '/i/communities/'.concat(n)
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
                  t ? r.a.createElement(k, t) : null,
                  r.a.createElement(
                    c.a,
                    { style: S.attribution },
                    r.a.createElement(
                      c.a,
                      { style: S.name },
                      r.a.createElement(p.b, { numberOfLines: 1, weight: 'bold' }, s),
                    ),
                    r.a.createElement(E, { communityId: n, count: a }),
                    Array.isArray(i)
                      ? r.a.createElement(f.a, { style: S.facepile, userAvatarSize: 'large', userAvatarUrls: i })
                      : i,
                  ),
                ),
              ),
            ),
          )
        }
      n.a = r.a.memo(C)
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
    ja7Y: function (e, n, t) {
      'use strict'
      t('KOtZ'), t('7x/C')
      var a,
        l = t('ERkP'),
        i = t.n(l),
        r = t('1Xyu'),
        o = t('s8G+'),
        s = t('X00g'),
        c = t('MAI/'),
        u = (t('enFi'), t('jAXQ')),
        m = t.n(u)
      n.a = function (e) {
        var n = e.community,
          l = e.shouldUseThemeColor,
          u = void 0 === l || l,
          d = e.style,
          y = m()(void 0 !== a ? a : (a = t('Eh7u')), n),
          p = Object(o.a)('c9s_ui_colors_enabled_rweb') && u,
          g = (function (e) {
            return e.reduce(function (e, n) {
              var t = n.result
              if ('User' === (null == t ? void 0 : t.__typename)) {
                var a,
                  l = null === (a = t.legacy) || void 0 === a ? void 0 : a.profile_image_url_https
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
    jtO7: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        i = t('m3Bd'),
        r = t.n(i),
        o = t('ERkP'),
        s = t.n(o),
        c = t('t62R'),
        u = t('I4+6'),
        m = t('cm6r'),
        d = t('rHpw'),
        y = t('MWbm'),
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
      n.a = function (e) {
        var n = e.align,
          t = void 0 === n ? 'center' : n,
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
            s.a.createElement(c.b, { align: t, color: a }, i),
          ),
        )
      }
    },
    krnS: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return H
      })
      var a,
        l,
        i,
        r = t('ERkP'),
        o = t.n(r),
        s = t('v6aA'),
        c = t('WpDa'),
        u = t('ZNT5'),
        m = t('Ig1G'),
        d = t('FIs5'),
        y = t('3XMw'),
        p = t.n(y),
        g = (t('enFi'), t('TEoO')),
        f = t('Fr3L'),
        h = (t('ho0z'), t('xvzJ')),
        b = t('IMA+'),
        v = t('jAXQ'),
        _ = t.n(v),
        k = function (e) {
          var n = e.communityId,
            l = e.userResult,
            i = _()(void 0 !== a ? a : (a = t('tgdH')), l).result
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
            E = o.a.createElement(h.a, { communityId: n, communityRole: r, recordId: s, screenName: f, userId: u })
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
        E = t('DQzJ'),
        C = { context: 'members' },
        S = void 0 !== l ? l : (l = t('cI4y')),
        F = function (e) {
          return e.__id
        },
        I = function (e) {
          var n = e.communityId,
            t = e.renderEmptyState,
            a = Object(E.a)(S, { communityId: n }),
            l = a.data,
            i = a.fetchNext,
            r = l.community.members_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(n),
            identityFunction: F,
            items: r,
            noItemsRenderer: t,
            onNearEnd: i,
            renderer: function (e) {
              return o.a.createElement(k, { communityId: n, userResult: e })
            },
          })
        },
        w = function (e) {
          return o.a.createElement(f.a, { errorConfig: C }, o.a.createElement(I, e))
        },
        K = t('oQhu'),
        T = { context: 'members' },
        M = void 0 !== i ? i : (i = t('w9f9')),
        x = function (e) {
          return e.__id
        },
        L = function (e) {
          var n = e.communityId,
            t = e.renderEmptyState,
            a = Object(E.a)(M, { communityId: n }),
            l = a.data,
            i = a.fetchNext,
            r = l.community.moderators_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(n),
            identityFunction: x,
            items: r,
            noItemsRenderer: t,
            onNearEnd: i,
            renderer: function (e) {
              return o.a.createElement(k, { communityId: n, userResult: e })
            },
          })
        },
        R = function (e) {
          return o.a.createElement(f.a, { errorConfig: T }, o.a.createElement(L, e))
        },
        O = t('fTQJ'),
        A = p.a.cdd87523,
        j = p.a.cca5191f,
        P = p.a.e442bbb4,
        D = p.a.e9488b0d,
        B = p.a.j43fea20,
        H = { Moderators: 'Moderators', Members: 'Members' },
        N = Object(K.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityMembers-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityMembers
              },
              getEndpointParams: function (n) {
                var t = n.count,
                  a = n.cursor
                return { count: t, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MEMBERS_TIMELINE',
              perfKey: 'communityMembers',
              formatResponse: c.a,
            })
          })(e)
        }),
        U = Object(K.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityModerators-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityModerators
              },
              getEndpointParams: function (n) {
                var t = n.count,
                  a = n.cursor
                return { count: t, cursor: 'string' == typeof a ? a : void 0, communityId: e }
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
      n.b = function (e) {
        var n = o.a.useContext(s.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          t = e.communityId,
          a = e.mode,
          l = e.userRole,
          i = a === H.Moderators
        if (n && l === m.a.Admin)
          return i
            ? o.a.createElement(R, { communityId: t, renderEmptyState: z })
            : o.a.createElement(w, { communityId: t, renderEmptyState: z })
        var r = i ? U(t) : N(t),
          c = i ? D : B
        return o.a.createElement(O.a, { loadingAccessibilityLabel: c, module: r, renderEmptyState: z, title: P })
      }
    },
    l3Hs: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityToolsScreen', function () {
          return we
        })
      t('KqXw'), t('WNMA')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('v6aA'),
        r = t('Ig1G'),
        o = t('EPsT'),
        s = t('eSoz'),
        c = t('rxPX'),
        u = t('0KEI'),
        m = t('R5kW'),
        d = function (e, n) {
          var t,
            a = Object(m.b)(e, n.communityId)
          return null !== (t = null == a ? void 0 : a.tweet_case_count) && void 0 !== t ? t : 0
        },
        y = function (e, n) {
          return Object(m.c)(e, n.communityId)
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
        g = t('kGix'),
        f = t('3XMw'),
        h = t.n(f),
        b = (t('enFi'), t('yiKp')),
        v = t.n(b),
        _ = t('Lsrn'),
        k = t('k/Ka'),
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
        F = t('KQzH'),
        I = t('s8G+'),
        w = t('jAXQ'),
        K = t.n(w),
        T = t('Znyr'),
        M = t('rHpw'),
        x = h.a.gfccba44,
        L = h.a.h6beb5fa,
        R = h.a.dde5f322,
        O = void 0 !== C ? C : (C = t('cd+Z'))
      function A(e) {
        var n = e.community,
          t = Object(I.a)('c9s_request_to_join_enabled'),
          a = K()(O, n),
          i = a.communityId,
          r = a.join_requests_result,
          o = 'CommunityJoinRequests' === r.__typename,
          s = l.a.useCallback(
            function () {
              var e = r.pending_join_request_count,
                n = void 0 === e ? 0 : e
              return n > 0
                ? l.a.createElement(T.a, {
                    count: n,
                    standalone: !0,
                    truncatedCountFormatter: L,
                    unreadCountLabel: R,
                    withBorder: !1,
                  })
                : null
            },
            [r],
          )
        return t && o
          ? l.a.createElement(F.a, {
              label: x,
              link: '/i/communities/'.concat(i, '/moderation/member_requests'),
              renderRightContent: s,
              thumbnail: B,
            })
          : null
      }
      var j,
        P = l.a.memo(A),
        D = M.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        B = l.a.createElement(S, { style: D.thumbnail }),
        H = t('Fr3L'),
        N = t('IAZG'),
        U = { context: 'MemberRequestsPivotContainerQuery' },
        z = void 0 !== j ? j : (j = t('WWTc')),
        V = function (e) {
          var n = e.communityId,
            t = Object(N.a)(z, { communityId: n })
          return l.a.createElement(P, { community: t.community })
        },
        q = function (e) {
          return l.a.createElement(H.a, { errorConfig: U }, l.a.createElement(V, { communityId: e.communityId }))
        },
        W = l.a.memo(q),
        Q = t('yoO3'),
        X = t('mWs5'),
        J = t('MWbm'),
        G = t('6vad'),
        Y = t('csss'),
        Z = t('OOKO'),
        $ = t('zIWA'),
        ee = t('M2x3'),
        ne = t('SNyS'),
        te = t('S+H3'),
        ae = t('PU7B'),
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
        ke = M.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        Ee = l.a.createElement($.a, { style: ke.thumbnail }),
        Ce = l.a.createElement(ee.a, { style: ke.thumbnail }),
        Se = l.a.createElement(ne.a, { style: ke.thumbnail }),
        Fe = l.a.createElement(te.a, { style: ke.thumbnail }),
        Ie = l.a.createElement(ae.a, { style: ke.thumbnail }),
        we = function (e) {
          var n = l.a.useContext(i.a),
            t = n.featureSwitches,
            a = n.loggedInUserId,
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
            v = t.isTrue('c9s_moderation_enabled'),
            _ = t.isTrue('c9s_rule_management_enabled'),
            k = t.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              f === g.a.NONE && v && d(c).catch(b)
            },
            [b, c, d, f, v],
          )
          var E = l.a.useCallback(
              function () {
                return v && u > 0
                  ? l.a.createElement(T.a, {
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
            Q.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              X.a,
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
        Ke = p(we)
      n.default = Ke
    },
    'ldL/': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    m0MN: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitiesModerationContainer', function () {
          return Xn
        })
      var a,
        l,
        i,
        r = t('97Jx'),
        o = t.n(r),
        s = t('m3Bd'),
        c = t.n(s),
        u = (t('KqXw'), t('WNMA'), t('ERkP')),
        m = t.n(u),
        d = t('v6aA'),
        y = t('+Kfv'),
        p = t('Ig1G'),
        g = t('1Idg'),
        f = t('eSoz'),
        h = t('rxPX'),
        b = t('0KEI'),
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
        _ = t('G1WX'),
        k = (t('ho0z'), t('es0u')),
        E = t('3XMw'),
        C = t.n(E),
        S = t('VTxf'),
        F = t('yoO3'),
        I = t('Fr3L'),
        w = t('FIs5'),
        K = t('TEoO'),
        T = (t('1t7P'), t('jQ/y'), t('ddV6')),
        M = t.n(T),
        x = t('1YZw'),
        L = t('uDfI'),
        R = t('MWbm'),
        O = t('/yvb'),
        A = t('rHpw'),
        j = (t('enFi'), t('jAXQ')),
        P = t.n(j),
        D = (t('7x/C'), t('JtPf'), t('849X'), t('TJCb'), t('9SqB')),
        B = t.n(D)
      void 0 !== a || (a = t('i/x0'))
      var H,
        N,
        U,
        z,
        V = void 0 !== l ? l : (l = t('Dm5+')),
        q = void 0 !== i ? i : (i = t('C2fM')),
        W = C.a.i22835dd,
        Q = C.a.cb59a0fd,
        X = C.a.ic7db4ea,
        J = void 0 !== H ? H : (H = t('PMbW')),
        G = function (e) {
          var n = e.communityId,
            t = e.communityJoinRequestActions,
            a = e.userId,
            l = P()(J, t),
            i = l.join_request_approve_action_result,
            r = l.join_request_deny_action_result,
            o = (function () {
              var e = B()(V),
                n = M()(e, 2),
                t = n[0],
                a = n[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var n = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          t({
                            variables: { communityId: n, userId: l },
                            onCompleted: function (n) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [t, a],
                ),
                a,
              ]
            })(),
            s = M()(o, 2),
            c = s[0],
            u = s[1],
            d = (function () {
              var e = B()(q),
                n = M()(e, 2),
                t = n[0],
                a = n[1]
              return [
                m.a.useCallback(
                  function (e) {
                    var n = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          t({
                            variables: { communityId: n, userId: l },
                            onCompleted: function (n) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [t, a],
                ),
                a,
              ]
            })(),
            y = M()(d, 2),
            p = y[0],
            g = y[1],
            f = Object(L.c)(),
            h = u || g,
            b = 'CommunityJoinRequestDenyAction' === (null == r ? void 0 : r.__typename),
            v = 'CommunityJoinRequestApproveAction' === (null == i ? void 0 : i.__typename),
            _ = m.a.useCallback(
              function () {
                p({ communityId: n, userId: a }).catch(function () {
                  f(Object(x.b)({ text: X }))
                })
              },
              [f, p, n, a],
            ),
            k = m.a.useCallback(
              function () {
                c({ communityId: n, userId: a }).catch(function () {
                  f(Object(x.b)({ text: X }))
                })
              },
              [f, c, n, a],
            )
          return m.a.createElement(
            R.a,
            { style: Y.buttons },
            m.a.createElement(O.a, { disabled: !b || h, onPress: _, style: Y.button, type: 'destructiveOutlined' }, Q),
            m.a.createElement(O.a, { disabled: !v || h, onPress: k, style: Y.button, type: 'primaryOutlined' }, W),
          )
        },
        Y = A.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        Z = t('tocL'),
        $ = t('h0NW'),
        ee = t('t62R'),
        ne = t('0yYu'),
        te = t('IMA+'),
        ae = t('GBcw'),
        le = t('6Rrp'),
        ie = t('5oT/'),
        re = void 0 !== N ? N : (N = t('8vG3')),
        oe = C.a.d7f13fb8,
        se = C.a.a340df66,
        ce = function (e) {
          var n = e.icon,
            t = e.label
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement($.a, {
              containerStyle: pe.container,
              items: [{ label: m.a.createElement(ee.b, null, t), decoration: n }],
            }),
            m.a.createElement(ne.a, null),
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
          var n = e.communityJoinRequest,
            t = P()(re, n),
            a = t.user_relationship.community.id_str,
            l = t.user_relationship.user_results.result,
            i = t.state
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
          var h = t.created_at,
            b = (function (e) {
              var n = e.following,
                t = e.isFollowedBy
              return n && t ? me.mutual : n ? me.following : t ? me.followedBy : void 0
            })({ isFollowedBy: u, following: d }),
            v = (function (e) {
              var n = e.blocking,
                t = e.muting
              return n ? ue.blocking : t ? ue.muting : void 0
            })({ blocking: s, muting: y }),
            _ = m.a.createElement(
              R.a,
              null,
              v && m.a.createElement(ee.b, { color: 'red500', style: pe.bottomText }, v),
              m.a.createElement(G, { communityId: a, communityJoinRequestActions: t.actions, userId: r }),
            )
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(te.a, {
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
            m.a.createElement(ne.a, null),
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
        ve = void 0 !== U ? U : (U = t('Jt8P')),
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
          var n = e.communityJoinRequests,
            t = e.fetchNext,
            a = P()(ve, n).items
          return m.a.createElement(K.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: _e,
            items: a,
            noItemsRenderer: Ee,
            onNearEnd: t,
            renderer: ke,
          })
        },
        Se = t('VS6U'),
        Fe = t('zCf4'),
        Ie = t('DQzJ'),
        we = C.a.gfccba44,
        Ke = 'member_requests',
        Te = { context: Ke },
        Me = void 0 !== z ? z : (z = t('gAl+')),
        xe = function (e) {
          var n = Object(Fe.f)(),
            t = e.communityId,
            a = Object(Ie.a)(Me, { communityId: t }),
            l = a.data,
            i = a.fetchNext,
            r = l.community,
            o = r.join_requests_result,
            s = r.name
          if ('CommunityJoinRequests' === o.__typename) {
            var c = o.pending_join_requests_slice,
              u = m.a.createElement(k.a, {
                communityId: t,
                withCommunityRules: !0,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              d = m.a.createElement(Ce, { communityJoinRequests: c, fetchNext: i })
            return m.a.createElement(
              F.a,
              { behavioralEventViewType: Ke },
              m.a.createElement(Se.a, {
                backLocation: '/i/communities/'.concat(t, '/tools'),
                history: n,
                primaryContent: d,
                sidebarContent: u,
                subtitle: s,
                title: we,
              }),
            )
          }
          return m.a.createElement(S.a, null)
        },
        Le = function (e) {
          var n = e.communityId
          return m.a.createElement(I.a, { errorConfig: Te }, m.a.createElement(xe, { communityId: n }))
        },
        Re = t('/de5'),
        Oe = t('yiKp'),
        Ae = t.n(Oe),
        je = (t('2G9S'), t('uFXj'), t('z84I'), t('3zvM')),
        Pe = t('lMB6'),
        De = Object(je.e)({ namespace: 'communityReports' }),
        Be = Pe.a.register(De),
        He = t('G6rE'),
        Ne = function (e, n) {
          var t,
            a = null === (t = n.tweetCase) || void 0 === t ? void 0 : t.reports
          return (a ? Be.selectMany(e, a) : []).map(function (n) {
            var t = n.user
            return Ae()(Ae()({}, n), {}, { reporter: He.e.select(e, t) })
          })
        },
        Ue = Object(h.a)().propsFromState(function () {
          return { reports: Ne }
        }),
        ze = t('855f'),
        Ve = t('cHvH'),
        qe = t('5mJL'),
        We = t('efqG'),
        Qe = t('21zW'),
        Xe = function (e) {
          return (function (e) {
            var n = e.count,
              t = e.formattedCount
            return m.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              m.a.createElement(ee.b, { color: 'primary' }, C.a.ff0f7429({ count: n, formattedCount: t })),
            )
          })({ count: e, formattedCount: ze.a.getFormattedCount(e) })
        },
        Je = function (e) {
          var n = e.report,
            t = e.withBottomBorder,
            a = n.created_at,
            l = n.reporter,
            i = m.a.createElement(ae.a, { timestamp: a })
          return l
            ? m.a.createElement(Ve.a, null, function (e) {
                var a = e.windowWidth
                return m.a.createElement(
                  R.a,
                  { style: t ? Ye.bottomBorder : null },
                  m.a.createElement(te.a, {
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
                    m.a.createElement(ee.b, { color: 'gray700', size: 'subtext2', style: Ye.rule }, n.rule.name),
                  ),
                )
              })
            : null
        },
        Ge = Ue(function (e) {
          var n = m.a.useState(!1),
            t = M()(n, 2),
            a = t[0],
            l = t[1],
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
                    i.map(function (e, n) {
                      return m.a.createElement(Je, { key: e.id_str, report: e, withBottomBorder: n < i.length - 1 })
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
                Xe(o),
              ),
            ),
            m.a.createElement(Qe.a, null),
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
        Ze = t('9EWH'),
        $e = Object(je.e)({ namespace: 'communityCases' }),
        en = {
          keepTweet: Object(je.c)($e, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var t = n.meta.entityId
              return Object(Ze.a)(e, function (e) {
                e.entities[t].isKept = !0
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
            reducer: function (e, n) {
              var t = n.meta.entityId
              return Object(Ze.a)(e, function (e) {
                e.entities[t].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        nn = Ae()(Ae()({}, $e), en),
        tn = Pe.a.register(nn),
        an = t('XOJV'),
        ln = function (e, n) {
          var t = n.tweetId
          return t ? an.a.selectHydrated(e, t) : void 0
        },
        rn = function (e, n) {
          var t = n.tweetId
          return tn.select(e, t)
        },
        on = function (e, n) {
          var t = ln(e, n)
          return !!t && Object(f.h)(e, t)
        },
        sn = Object(h.a)()
          .propsFromState(function () {
            return { tweet: ln, tweetCase: rn, disableRemoveFromCommunity: on }
          })
          .propsFromActions(function () {
            return { keep: tn.keepTweet, dismiss: tn.dismissTweet }
          }),
        cn = t('b5s6'),
        un = t('mjJ+'),
        mn = t('IG7M'),
        dn = t('boUI'),
        yn = t('zIWA'),
        pn = t('fz3c'),
        gn = (t('yH/f'), t('n5fo')),
        fn = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        hn = C.a.ad10c66d,
        bn = C.a.c6caed9c,
        vn = function (e) {
          return m.a.createElement(ee.b, null, e)
        },
        _n = function (e) {
          var n = e.screenName
          switch (e.type) {
            case fn.Hidden:
              var t = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(n),
                a = [{ label: vn(t), decoration: En }]
              return m.a.createElement($.a, { accessibilityLabel: hn, containerStyle: kn.container, items: a })
            case fn.Kept:
              var l = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(n),
                i = [{ label: vn(l), decoration: Cn }]
              return m.a.createElement($.a, { accessibilityLabel: bn, containerStyle: kn.container, items: i })
            default:
              return null
          }
        },
        kn = A.a.create(function (e) {
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
        En = m.a.createElement(gn.a, { style: kn.icon }),
        Cn = m.a.createElement(le.a, { style: kn.icon }),
        Sn = { page: 'reported_tweets', component: 'tweet' },
        Fn = { viewType: 'tweet_moderation_case' },
        In = C.a.f1d9930c,
        wn = C.a.a219e217,
        Kn = C.a.fa524057,
        Tn = C.a.g30bc699,
        Mn = C.a.f0306107,
        xn = C.a.b99364a5,
        Ln = sn(function (e) {
          var n,
            t = m.a.useContext(d.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            l = e.keep,
            i = e.tweet,
            r = e.tweetCase,
            o = e.tweetId,
            s = null == i || null === (n = i.user) || void 0 === n ? void 0 : n.screen_name,
            c = m.a.useCallback(
              function (n) {
                if (i && s) {
                  var a = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: Tn({ screenName: s }),
                      Icon: dn.a,
                      link: '/'.concat(s),
                    },
                    {
                      text: Mn,
                      Icon: yn.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(pn.a.Tweet, '/').concat(i.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: Sn },
                      },
                      onClick: function () {
                        n()
                      },
                    },
                  ]
                  return (
                    t &&
                      !e.disableRemoveFromCommunity &&
                      a.push({
                        text: xn({ screenName: s }),
                        Icon: ie.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(pn.a.RemoveCommunityMember, '/').concat(i.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Sn },
                        },
                        onClick: function () {
                          n()
                        },
                      }),
                    m.a.createElement(un.a, { items: a, onCloseRequested: n })
                  )
                }
                return null
              },
              [i, s, t, e.disableRemoveFromCommunity],
            ),
            u = function () {
              l(o)
            },
            p = function () {
              a(o)
            }
          if (s && (null == i ? void 0 : i.reportingVisibility) === pn.b.HiddenCommunityTweet)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(_n, { screenName: s, type: fn.Hidden }),
              m.a.createElement(ne.a, null),
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
              m.a.createElement(_n, { screenName: s, type: fn.Kept }),
              m.a.createElement(ne.a, null),
            )
          if (!r) return null
          return m.a.createElement(
            y.a,
            { behavioralEventContext: Fn },
            m.a.createElement(
              R.a,
              { style: Rn.container },
              m.a.createElement(
                R.a,
                { style: Rn.reportsBar },
                m.a.createElement(Ge, { tweetCase: r }),
                m.a.createElement(mn.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: c,
                  style: Rn.menu,
                }),
              ),
              m.a.createElement(cn.a, { tweetId: o }),
              i
                ? m.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var n = e.windowWidth <= A.a.theme.breakpoints.small
                    return m.a.createElement(
                      R.a,
                      { style: [Rn.buttons, n && Rn.buttonsMobile] },
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(pn.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Ae()(Ae()({}, Sn), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Rn.button, n && Rn.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        In,
                      ),
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [Rn.button, n && Rn.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Kn,
                      ),
                    )
                  })
                : m.a.createElement(
                    R.a,
                    { style: Rn.buttons },
                    m.a.createElement(
                      O.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: p,
                        style: Rn.button,
                        type: 'primaryOutlined',
                      },
                      wn,
                    ),
                  ),
            ),
            m.a.createElement(ne.a, null),
          )
        }),
        Rn = A.a.create(function (e) {
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
        On = t('hqKg'),
        An = t('wAC9'),
        jn = function (e, n) {
          var t = n.community
          return t ? t.id_str : void 0
        },
        Pn = function () {
          return Object(On.createSelector)(jn, function (e) {
            return e
              ? (function (e) {
                  return Object(An.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (n) {
                      return Ae()(Ae()({}, n), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Dn = Object(h.a)()
          .propsFromState(function () {
            return { sliceModule: Pn() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Bn = t('FS1z'),
        Hn = C.a.c045c7b6,
        Nn = C.a.dffb0774,
        Un = C.a.cbb2a93c,
        zn = Dn(function (e) {
          var n = m.a.useContext(d.a).featureSwitches,
            t = e.community,
            a = e.history,
            l = e.sliceModule,
            i = t.id_str,
            r = t.name,
            o = (t || []).rules,
            s = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
            c = n.isTrue('responsive_web_communities_slices_enabled'),
            u = l
              ? m.a.createElement(Bn.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return m.a.createElement(w.a, { header: Nn, message: Un })
                  },
                  renderer: function (e) {
                    return m.a.createElement(Ln, { tweetId: e })
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
              title: Hn,
            }),
          )
        }),
        Vn = ['analytics', 'community'],
        qn = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        Wn = { viewType: 'community' }
      function Qn(e) {
        var n = m.a.useContext(d.a).featureSwitches,
          t = (e.analytics, e.community),
          a = c()(e, Vn),
          l = a.match.path,
          i = n.isTrue('c9s_request_to_join_enabled')
        return Object(p.c)(t.role)
          ? m.a.createElement(
              y.a,
              { behavioralEventContext: Wn },
              m.a.createElement(
                Fe.d,
                null,
                m.a.createElement(
                  Fe.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  m.a.createElement(zn, o()({}, a, { community: t })),
                ),
                i
                  ? m.a.createElement(
                      Fe.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      m.a.createElement(Le, { communityId: t.id_str }),
                    )
                  : null,
                m.a.createElement(Fe.b, null, m.a.createElement(Re.b, a)),
              ),
            )
          : m.a.createElement(Re.b, a)
      }
      function Xn(e) {
        var n = e.community,
          t = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          i = c()(e, qn),
          r = i.match.params.communityId,
          s = m.a.useCallback(
            function () {
              r && a(r).catch(t())
            },
            [r, t, a],
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
              return n ? m.a.createElement(Qn, o()({}, i, { community: n })) : null
            },
          })
        )
      }
      n.default = v(Xn)
    },
    mWs5: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return g
      })
      t('KqXw'), t('MvUL'), t('2G9S')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('3XMw'),
        r = t.n(i),
        o = t('M2mT'),
        s = t('zCf4'),
        c = t('MWbm'),
        u = t('mw9i'),
        m = t('0yYu'),
        d = t('/yvb'),
        y = t('rHpw'),
        p = r.a.i2209530
      function g(e) {
        var n = e.children,
          t = e.communityId,
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
          C = '/i/communities/'.concat(t),
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
            l.a.createElement(c.a, { style: f.chilrenRoot }, n),
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
    mys5: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'EditRuleScreen', function () {
          return P
        })
      var a = t('ddV6'),
        l = t.n(a),
        i = (t('1t7P'), t('jQ/y'), t('ho0z'), t('ERkP')),
        r = t.n(i),
        o = t('v6aA'),
        s = t('eSoz'),
        c = t('xZGM'),
        u = t('rxPX'),
        m = t('0KEI'),
        d = t('1Idg'),
        y = function (e, n) {
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
        g = t('k49u'),
        f = t('jHSc'),
        h = t('3XMw'),
        b = t.n(h),
        v = t('5FtR'),
        _ = t('OwKm'),
        k = t('AfjF'),
        E = t('MWbm'),
        C = t('/yvb'),
        S = t('jtO7'),
        F = t('4zmP'),
        I = t('eb3s'),
        w = t('rHpw'),
        K = b.a.h99020ef,
        T = b.a.i2209530,
        M = b.a.a1c93d73,
        x = b.a.f74a5adb,
        L = b.a.fbb0ed91,
        R = b.a.gea6cc19,
        O = b.a.hed35471,
        A = b.a.c8677445,
        j = b.a.c3a0d44e
      function P(e) {
        var n = r.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          t = e.addRuleInformEducationFlag,
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
          Q = q[1],
          X = r.a.useState(''),
          J = l()(X, 2),
          G = J[0],
          Y = J[1],
          Z = r.a.useState(!1),
          $ = l()(Z, 2),
          ee = $[0],
          ne = $[1],
          te = r.a.useState(!1),
          ae = l()(te, 2),
          le = ae[0],
          ie = ae[1],
          re = r.a.useCallback(
            function (e) {
              var n = e.description,
                t = e.name,
                a = e.valid
              B(t), z(n), Q(a)
            },
            [B, z, Q],
          ),
          oe = r.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    t = n.code === g.a.GenericBadRequest && n.message ? n.message : M
                  return Y(t), Q(!1), []
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
                  var n = l()(e.errors, 1)[0],
                    t = n.code === g.a.GenericBadRequest && n.message ? n.message : M
                  return Y(t), ne(!1), []
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
            T,
          ),
          de = 1 === h.length,
          ye = n
            ? r.a.createElement(
                E.a,
                { style: D.delete },
                r.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: L,
                  onPress: function () {
                    ne(!0)
                  },
                }),
              )
            : void 0,
          pe = de ? r.a.createElement(E.a, { style: D.callout }, r.a.createElement(F.a, { text: x })) : void 0,
          ge = ee
            ? r.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: R,
                onCancel: function () {
                  ne(!1)
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
                  t(), oe(), ie(!1)
                },
              })
            : void 0
        return r.a.createElement(
          f.b,
          { behavioralEventViewType: 'rules', history: c, rightControl: me, title: K },
          pe,
          r.a.createElement(_.a, { description: ce || '', errorText: G, name: ue, onChange: re }),
          ye,
          ge,
          fe,
        )
      }
      n.default = p(P)
      var D = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return P
      })
      var a = t('ddV6'),
        l = t.n(a),
        i = t('VrFO'),
        r = t.n(i),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        m = t('5Yy7'),
        d = t.n(m),
        y = t('2VqO'),
        p = t.n(y),
        g = t('KEM+'),
        f = t.n(g),
        h = (t('2G9S'), t('lTEL'), t('7x/C'), t('87if'), t('ZUdG'), t('kYxP'), t('ERkP')),
        b = t.n(h),
        v = t('pXBW'),
        _ = t('6/RC'),
        k = t('UIzd'),
        E = t.n(k),
        C = t('kGix')
      t.d(n, 'a', function () {
        return C.a
      })
      var S = t('fs1G'),
        F = t('0KEI'),
        I = t('lU4h'),
        w = t.n(I),
        K = t('21nk'),
        T = t.n(K),
        M = t('bCEw'),
        x = t.n(M),
        L = t('Ud88'),
        R = t.n(L),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(t, e)
          var n = p()(t)
          function t() {
            var e
            r()(this, t)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (e = n.call.apply(n, [this].concat(l))), f()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              t,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, n) {
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
            t
          )
        })(b.a.Component),
        j = function (e) {
          var n = e.query,
            t = e.queryRef,
            a = e.render,
            l = T()(n, t)
          return a({ fetchStatus: C.a.LOADED, data: l, error: null, retry: S.a })
        },
        P = function (e, n) {
          if (_.canUseDOM)
            return function (t) {
              var a = t.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                r = t.render,
                o = t.variables,
                s = x()(e),
                c = l()(s, 2),
                u = c[0],
                m = c[1],
                d = Object(F.useCreateLocalApiErrorHandler)(n.errorConfig.context),
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
                        { errorHandler: d(n.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (n, t) {
                          return n
                            ? r({ fetchStatus: C.a.FAILED, error: n, data: null, retry: t })
                            : b.a.createElement(j, { query: e, queryRef: u, render: r })
                        },
                      ),
                    )
                  : null
              )
            }
          var t = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var i = a.render,
              r = a.variables,
              o = R()(),
              s = Object(F.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              c = w()(r),
              u = l()(c, 1)[0],
              m = t.get(o)
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
                      ? (s(n.errorConfig.options || {})(e),
                        i({ fetchStatus: C.a.FAILED, data: null, error: e, retry: S.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: t.set(o, e).get.bind(t, o) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'AddRuleScreen', function () {
          return K
        })
      var a = t('ddV6'),
        l = t.n(a),
        i = (t('1t7P'), t('jQ/y'), t('ho0z'), t('ERkP')),
        r = t.n(i),
        o = t('v6aA'),
        s = t('eSoz'),
        c = t('xZGM'),
        u = t('rxPX'),
        m = t('0KEI'),
        d = function (e, n) {
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
        p = t('k49u'),
        g = t('jHSc'),
        f = t('3XMw'),
        h = t.n(f),
        b = t('OwKm'),
        v = t('AfjF'),
        _ = t('/yvb'),
        k = t('eb3s'),
        E = h.a.j560c8ea,
        C = h.a.i2209530,
        S = h.a.gaa3239a,
        F = h.a.a67445d5,
        I = h.a.fcbe0992,
        w = h.a.j24c37b2
      function K(e) {
        var n = r.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          t = e.addRuleInformEducationFlag,
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
          K = f[1],
          T = r.a.useState(''),
          M = l()(T, 2),
          x = M[0],
          L = M[1],
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
          Q = W[0],
          X = W[1],
          J = r.a.useCallback(
            function (e) {
              var n = e.description,
                t = e.name,
                a = e.valid
              V(''), K(t), L(n), j(a)
            },
            [K, L, j],
          ),
          G = r.a.useCallback(
            function () {
              H(!0)
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    t = n.code === p.a.GenericBadRequest && n.message ? n.message : S
                  return V(t), j(!1), []
                },
              })
              s(m, { name: h, description: x })
                .then(function () {
                  c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, h, x, s, c, i],
          ),
          Y = r.a.useCallback(
            function () {
              u ? X(!0) : G()
            },
            [G, u],
          ),
          Z = r.a.createElement(_.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= n,
          ee = r.a.createElement(k.a, {
            confirmButtonLabel: w,
            headline: F,
            onConfirm: function () {
              c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: n }),
            withCancelButton: !1,
          }),
          ne = Q
            ? r.a.createElement(v.a, {
                onCancel: function () {
                  X(!1)
                },
                onConfirm: function () {
                  t(), G(), X(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : r.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: c, rightControl: Z, title: E },
              r.a.createElement(b.a, { description: '', errorText: z, name: '', onChange: J }),
              ne,
            )
      }
      n.default = y(K)
    },
    nmVb: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function (e) {
          for (var n = [], t = (0, l.default)(e), a = 0; a < t.length; a++) n.push(t[a].hashtag)
          return n
        })
      var l = a(t('yyPN'))
      e.exports = n.default
    },
    ogGF: function (e, n, t) {
      'use strict'
      var a,
        l = t('97Jx'),
        i = t.n(l),
        r = t('m3Bd'),
        o = t.n(r),
        s = t('ERkP'),
        c = t.n(s),
        u = t('/yvb'),
        m = t('3XMw'),
        d = t.n(m),
        y = t('pwey'),
        p = (t('enFi'), t('jAXQ')),
        g = t.n(p),
        f = ['community'],
        h = d.a.b139b549,
        b = c.a.createElement(y.a, null),
        v = function (e) {
          var n = e.community,
            l = o()(e, f),
            r = g()(void 0 !== a ? a : (a = t('qre1')), n)
          if (!r || 'CommunityInvitesUnavailable' === r.invites_result.__typename) return null
          var s = '/i/communities/'.concat(r.rest_id, '/invite')
          return c.a.createElement(u.a, i()({ accessibilityLabel: h, icon: b, link: s, type: 'primaryText' }, l))
        }
      n.a = c.a.memo(v)
    },
    'p+r5': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return z
      })
      t('yiKp')
      var a = t('97Jx'),
        l = t.n(a),
        i = t('m3Bd'),
        r = t.n(i),
        o = t('VrFO'),
        s = t.n(o),
        c = t('Y9Ll'),
        u = t.n(c),
        m = t('1Pcy'),
        d = t.n(m),
        y = t('5Yy7'),
        p = t.n(y),
        g = t('2VqO'),
        f = t.n(g),
        h = t('KEM+'),
        b = t.n(h),
        v = (t('2G9S'), t('ERkP')),
        _ = t.n(v),
        k = t('38/B'),
        E = t('t62R'),
        C = t('/yvb'),
        S = t('piX5'),
        F = t('3XMw'),
        I = t.n(F),
        w = t('tI3i'),
        K = t.n(w),
        T = t('oQhu'),
        M = t('rHpw'),
        x = t('aITJ'),
        L = t('MWbm'),
        R = t('n5fo'),
        O = t('5emT'),
        A = t('Oib4'),
        j = t('WtWS'),
        P = t('ioan'),
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
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B
          return n(e)
        },
        N = I.a.de540c32,
        U = I.a.b4abfdb3,
        z = (function (e) {
          p()(t, e)
          var n = f()(t)
          function t(e) {
            var a
            s()(this, t),
              (a = n.call(this, e)),
              b()(d()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(d()(a), '_isLabelLarge', function () {
                var e = a.state,
                  n = e.actualCount,
                  t = e.isFocused
                return !n && !t
              }),
              b()(
                d()(a),
                '_getTextInputStyle',
                Object(T.a)(function (e) {
                  return [V.root, !e && V.disabled]
                }),
              ),
              b()(d()(a), '_getTextInputType', function () {
                var e = a.props,
                  n = e.showPasswordVisibilityIcon,
                  t = e.type,
                  l = a.state.isPasswordRevealed
                return 'password' === t && n ? (l ? 'text' : 'password') : t
              }),
              b()(d()(a), '_calculateLength', function (e) {
                return H(e, a.props.calculateLength)
              }),
              b()(d()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  n = a._isFormInvalid()
                return Boolean((e || n) && a._getMaxDisplayCount())
              }),
              b()(d()(a), '_isInvalidNumber', function () {
                var e,
                  n,
                  t,
                  l,
                  i,
                  r = a.props.type,
                  o =
                    null === (e = a._textInput) || void 0 === e || null === (n = e.textInputNode) || void 0 === n
                      ? void 0
                      : n.value,
                  s =
                    null === (t = a._textInput) ||
                    void 0 === t ||
                    null === (l = t.textInputNode) ||
                    void 0 === l ||
                    null === (i = l.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === r && '' === o && !0 === s
              }),
              b()(d()(a), '_getActualCount', function (e) {
                var n = e.length
                return a._isInvalidNumber() && (n = 1), n
              }),
              b()(d()(a), '_handleBlur', function (e) {
                var n = a.props.onBlur,
                  t = e.currentTarget.value,
                  l = a._calculateLength(t),
                  i = a._getActualCount(t)
                a.setState({ isFocused: !1, displayCount: l, actualCount: i }), n && n(e)
              }),
              b()(d()(a), '_handleChange', function (e) {
                var n = a.props.onChange,
                  t = a.state.previousValue,
                  l = e.currentTarget.value,
                  i = a._calculateLength(l),
                  r = a._getActualCount(l),
                  o = a._getAdjustedMaxLength()
                void 0 !== o && l.length > o && t.length < l.length
                  ? (e.currentTarget.value = t)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: r,
                      previousValue: e.currentTarget.value,
                    }),
                    n && n(e))
              }),
              b()(d()(a), '_handleFocus', function () {
                var e = a.props.onFocus
                a.setState({ isFocused: !0 }), e && e()
              }),
              b()(d()(a), '_handleKeyPress', function (e) {
                var n = a.props,
                  t = n.multiline,
                  l = n.onKeyPress,
                  i = n.onSubmitEditing
                l && l(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || t || !i || (e.preventDefault(), i(e))
              }),
              b()(d()(a), '_handleKeyDown', function (e) {
                var n = a.props.onKeyDown,
                  t = 0 === a.state.displayCount
                x.b.isKaiOS() && 'Backspace' === e.key && t ? (a._blurOnBackspaceKeyUpForKaiOS = t) : n && n(e)
              }),
              b()(d()(a), '_handleKeyUp', function (e) {
                var n = a.props.onKeyUp
                x.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  n && n(e)
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
                var n = e.defaultValue,
                  t = e.maxLength,
                  a = e.onChange,
                  l = e.validLength,
                  i = !!a,
                  r = 'string' == typeof e.value,
                  o = 'string' == typeof n
                K()(
                  !(!o && r && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  K()(!(t && l && l > t), 'Max length should be equal or greater than valid length.'),
                  K()(
                    !((void 0 !== t && t <= 0) || (void 0 !== l && l <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(d()(a), '_exceedsValidLength', function (e) {
                var n = a._getMaxDisplayCount()
                return !!n && e > n
              }),
              b()(d()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              b()(d()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  n = a.getValue(),
                  t = a._calculateLength(n)
                return e ? e + n.length - t : void 0
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
              t,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var n = this.props,
                      t = n.maxLength,
                      a = n.onChange,
                      l = n.validLength,
                      i = n.value,
                      r = e.maxLength,
                      o = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === l && t === r && !!a === !!o && ('string' == typeof i) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = e.accessibilityLabel,
                      t = e.editable,
                      a = e.errorText,
                      l = e.helperText,
                      i = e.style,
                      r = this.state.isFocused,
                      o = this._isFormInvalid()
                    return _.a.createElement(
                      L.a,
                      { style: [q.root, i] },
                      _.a.createElement(
                        L.a,
                        {
                          accessibilityLabel: n,
                          accessibilityRole: 'label',
                          style: [
                            S.a.border,
                            q.textInputFormStyle,
                            o && S.a.invalidBorderColor,
                            r && o && S.a.focusedBorderInvalid,
                            r && !o && S.a.focusedBorderValid,
                            !t && S.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          L.a,
                          { style: q.textInputFormWrapper },
                          _.a.createElement(
                            L.a,
                            { style: q.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        L.a,
                        { style: [q.sidePadding, q.underTextInputForm] },
                        _.a.createElement(
                          L.a,
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
                      n = this.state.isFocused ? 'primary' : 'gray700',
                      t = this._isFormInvalid() ? 'red500' : n,
                      a = this._isLabelLarge()
                    return _.a.createElement(
                      E.b,
                      {
                        color: a ? 'gray700' : t,
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
                      n = e.Icon,
                      t = (e.accessibilityLabel, e.calculateLength, e.editable),
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
                      L.a,
                      { style: V.container },
                      n && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        E.b,
                        { size: 'headline1', style: V.wrapper },
                        _.a.createElement(
                          P.a,
                          l()({}, i, {
                            editable: t,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(t),
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
                      n = e.showPasswordVisibilityIcon,
                      t = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === t && n
                      ? _.a.createElement(
                          L.a,
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
                      L.a,
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
                      L.a,
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
                      n = this._getMaxDisplayCount(),
                      t = this._exceedsValidLength(e),
                      a = n && I.a.ia24dc8c(n),
                      l = I.a.ia24dc8c(e)
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite', style: [q.textInputHeaderItem, q.displayCount] },
                      _.a.createElement(
                        E.b,
                        { color: t ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(l, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      n = this.state.isFocused,
                      t = [q.icon, n && q.focusedIcon]
                    return e && _.a.createElement(e, { style: t })
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
                      n = this._calculateLength(e)
                    return !this._exceedsValidLength(n)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, n) {
                    var t = e.calculateLength,
                      a = e.value,
                      l = 'string' == typeof a ? H(a, t) : 0
                    return 'string' == typeof a && l !== n.displayCount
                      ? { displayCount: l, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            t
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
    pChJ: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    'pd/v': function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (n.default = y)
    },
    piX5: function (e, n, t) {
      'use strict'
      t('uFXj'), t('2G9S')
      var a = t('rHpw').a.create(function (e) {
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
      n.a = a
    },
    qre1: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    's8G+': function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        i = t('v6aA')
      n.a = function (e) {
        var n = l.a.useContext(i.a).featureSwitches
        return l.a.useMemo(
          function () {
            return n.isTrue(e)
          },
          [e, n],
        )
      }
    },
    tFuX: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(y.hash = 'ea1908fb41cb57016d070125122b615d'), (n.default = y)
    },
    tgdH: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    tnnC: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      n.default = a
    },
    tot2: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityPeopleScreen', function () {
          return x
        })
      var a = t('ddV6'),
        l = t.n(a),
        i = (t('vrRf'), t('ERkP')),
        r = t.n(i),
        o = t('+Kfv'),
        s = t('es0u'),
        c = t('LgBi'),
        u = t('UZ0O'),
        m = t('1Idg'),
        d = t('eSoz'),
        y = t('rxPX'),
        p = t('0KEI'),
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
        f = t('3XMw'),
        h = t.n(f),
        b = t('gDCe'),
        v = t('yoO3'),
        _ = t('VS6U'),
        k = t('k/OQ'),
        E = t('krnS'),
        C = t('zCf4'),
        S = h.a.h5245afa,
        F = h.a.dc6ce7b4,
        I = h.a.f8321d82,
        w = h.a.ga2aa43c,
        K = { viewType: 'community' },
        T = { viewType: 'all' },
        M = { viewType: 'moderators' },
        x = r.a.memo(function (e) {
          var n = e.community,
            t = e.communityId,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            m = e.history,
            d = e.location
          r.a.useEffect(
            function () {
              t && i(t).catch(a())
            },
            [t, a, i],
          )
          var y = r.a.useState(!1),
            p = l()(y, 2),
            g = p[0],
            f = p[1],
            h = (null == d ? void 0 : d.pathname) && d.pathname.indexOf('members') > 0,
            x = h ? F : w,
            L = r.a.useMemo(
              function () {
                return t
                  ? [
                      { to: { pathname: '/i/communities/'.concat(t, '/members'), state: d.state }, label: I, key: I },
                      {
                        to: { pathname: '/i/communities/'.concat(t, '/moderators'), state: d.state },
                        label: w,
                        key: w,
                      },
                    ]
                  : []
              },
              [t, d.state],
            ),
            R = t
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, { community: n, communityId: t, onIsSearchingChange: f }),
                  g
                    ? null
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(k.a, { accessibilityLabel: x, links: L }),
                        r.a.createElement(
                          C.d,
                          null,
                          r.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(t, '/members') },
                            r.a.createElement(
                              o.a,
                              { behavioralEventContext: T },
                              r.a.createElement(E.b, {
                                communityId: t,
                                mode: E.a.Members,
                                userRole: null == n ? void 0 : n.role,
                              }),
                            ),
                          ),
                          r.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(t, '/moderators') },
                            r.a.createElement(
                              o.a,
                              { behavioralEventContext: M },
                              r.a.createElement(b.a, { community: n }),
                              r.a.createElement(E.b, {
                                communityId: t,
                                mode: E.a.Moderators,
                                userRole: null == n ? void 0 : n.role,
                              }),
                            ),
                          ),
                        ),
                      ),
                )
              : null
          return r.a.createElement(
            o.a,
            { behavioralEventContext: K },
            r.a.createElement(
              v.a,
              { behavioralEventViewType: 'members' },
              r.a.createElement(_.a, {
                backLocation: t ? '/i/communities/'.concat(t, '/') : '/',
                documentTitle: S,
                history: m,
                primaryContent: R,
                rightControl: h && t ? r.a.createElement(c.a, { communityId: t }) : null,
                sidebarContent: r.a.createElement(s.a, null),
                title: F,
              }),
            ),
          )
        }),
        L = g(x)
      n.default = L
    },
    u0MR: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitiesScreen', function () {
          return en
        })
      var a,
        l,
        i = t('VrFO'),
        r = t.n(i),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        m = t('5Yy7'),
        d = t.n(m),
        y = t('2VqO'),
        p = t.n(y),
        g = t('KEM+'),
        f = t.n(g),
        h = (t('2G9S'), t('vrRf'), t('ERkP')),
        b = t.n(h),
        v = t('+Kfv'),
        _ = t('es0u'),
        k = t('cL2e'),
        E = t('1Idg'),
        C = t('li/m'),
        S = t('G6rE'),
        F = t('rxPX'),
        I = t('0KEI'),
        w = function (e, n) {
          var t = E.i(e, n)
          if (t) return S.e.selectByScreenName(e, t)
        },
        K = Object(F.a)()
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
        T = t('3XMw'),
        M = t.n(T),
        x = t('5oT/'),
        L = t('/yvb'),
        R = t('rHpw'),
        O = (t('enFi'), t('jAXQ')),
        A = t.n(O),
        j = M.a.a226497c,
        P = b.a.memo(function (e) {
          return 'CommunityCreateAction' !== A()(void 0 !== a ? a : (a = t('zum0')), e.createActionResult).__typename
            ? null
            : b.a.createElement(L.a, {
                icon: b.a.createElement(x.a, { accessibilityLabel: j, style: D.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        D = R.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        B = b.a.memo(P),
        H = t('Fr3L'),
        N = t('IAZG'),
        U = { context: 'CommunityCreateButton' },
        z = void 0 !== l ? l : (l = t('S91Q')),
        V = function (e) {
          var n,
            t =
              null === (n = Object(N.a)(z, {}, { fetchPolicy: 'store-and-network' }).viewer) || void 0 === n
                ? void 0
                : n.create_community_action_result
          return t ? b.a.createElement(B, { createActionResult: t }) : null
        },
        q = function (e) {
          return b.a.createElement(H.a, { errorConfig: U }, b.a.createElement(V, null))
        },
        W = b.a.memo(q),
        Q = t('GOQE'),
        X = (t('z84I'), t('M+/F'), t('yiKp')),
        J = t.n(X),
        G = (t('ho0z'), t('tVqn'), t('uFXj'), t('v6aA')),
        Y = t('YeIG'),
        Z = 'community-thumbnail-image',
        $ = 'community-thumbnail-name-container',
        ee = t('MWbm'),
        ne = t('X00g'),
        te = t('htQn'),
        ae = t('9Xij'),
        le = t('TIdA'),
        ie = t('A91F'),
        re = t('t62R'),
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
          var n = b.a.useContext(G.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            t = e.community,
            a = t.id_str,
            l = t.media,
            i = t.name,
            r = t.theme,
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
            m = n ? ne.a.getCommunityBackgroundColor(r) : R.a.theme.colors.translucentBlack77
          return s
            ? b.a.createElement(
                v.a,
                { behavioralEventContext: o },
                b.a.createElement(
                  te.a,
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
        ue = t('eSoz'),
        me = t('o3oN'),
        de = function (e) {
          var n = Object(me.c)(e)
          return ue.c.selectMany(e, n)
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
        pe = t('kGix'),
        ge = t('6iuV'),
        fe = t('rC8y'),
        he = M.a.d228a9a0,
        be = b.a.memo(function (e) {
          var n = e.communities,
            t = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            l = e.fetchStatus,
            i = e.location.pathname
          b.a.useEffect(
            function () {
              l === pe.a.NONE && a().catch(t())
            },
            [t, a, l],
          )
          var r = b.a.useMemo(
            function () {
              return n.slice(0, 10).map(function (e) {
                return b.a.createElement(ce, { community: e, key: e.id_str })
              })
            },
            [n],
          )
          return Object(Y.a)(n)
            ? null
            : b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(ge.a, { style: [ve.paddingHorizontal, ve.bottomBorder] }, r),
                n.length > 10 &&
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
        ke = t('WpDa'),
        Ee = t('ZNT5'),
        Ce = Object(Ee.a)({
          timelineId: 'communitiesMainTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMainTimeline
          },
          getEndpointParams: function (e) {
            var n = e.count,
              t = e.cursor
            return { count: n, cursor: 'string' == typeof t ? t : void 0 }
          },
          context: 'FETCH_COMMUNITIES_MAIN_TIMELINE',
          perfKey: 'communitiesMainTimeline',
          formatResponse: ke.a,
        }),
        Se = t('OUEC'),
        Fe = t('dwig'),
        Ie = t('0+qk'),
        we = t('oQhu'),
        Ke = t('7BdX'),
        Te = t('fTQJ'),
        Me = t('QRqA'),
        xe = t('FIs5'),
        Le = t('mw9i'),
        Re = M.a.c63602d3,
        Oe = M.a.d7346631,
        Ae = M.a.fbd12fea,
        je = (function (e) {
          d()(t, e)
          var n = p()(t)
          function t() {
            var e
            r()(this, t)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(l))),
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
            s()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.hasCommunityMemberships,
                    t = e.history,
                    a = e.isLoggedInUser,
                    l = e.location,
                    i = this._getModule(),
                    r = this._c9sParticipationEnabled && n ? b.a.createElement(Ie.a, { history: t }) : null
                  return a && i
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(Me.a, null),
                        b.a.createElement(
                          Fe.a,
                          { container: Le.a, fab: r },
                          b.a.createElement(_e, { location: l }),
                          b.a.createElement(Te.a, {
                            entryConfiguration: Se.a,
                            module: i,
                            prerollDisplayLocation: Ke.c.OTHER,
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
            t
          )
        })(b.a.Component)
      f()(je, 'contextType', G.a)
      var Pe = je,
        De = t('hqKg'),
        Be = function (e, n) {
          var t = n.user
          return t ? t.id_str : void 0
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
                    getEndpointParams: function (n) {
                      var t = n.cursor
                      return { cursor: 'string' == typeof t ? t : void 0, userId: e }
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
        Ue = t('yoO3'),
        ze = M.a.c63602d3,
        Ve = M.a.d7346631,
        qe = M.a.hb01fe46,
        We = Ne(
          (function (e) {
            d()(t, e)
            var n = p()(t)
            function t() {
              var e
              r()(this, t)
              for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
              return (
                (e = n.call.apply(n, [this].concat(l))),
                f()(u()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? b.a.createElement(xe.a, { header: Ve, message: qe }) : null
                }),
                e
              )
            }
            return (
              s()(t, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.urtModule
                    return e
                      ? b.a.createElement(
                          Ue.a,
                          { behavioralEventViewType: 'all' },
                          b.a.createElement(Te.a, {
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
              t
            )
          })(b.a.Component),
        ),
        Qe = t('5FtR'),
        Xe = t('Y6L+'),
        Je = t('VS6U'),
        Ge = t('zCf4'),
        Ye = M.a.h02a6fe5,
        Ze = M.a.c63602d3,
        $e = { viewType: 'communities' },
        en = (function (e) {
          d()(t, e)
          var n = p()(t)
          function t() {
            var e
            r()(this, t)
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i]
            return (
              (e = n.call.apply(n, [this].concat(l))),
              f()(u()(e), '_renderRightControl', function () {
                return b.a.createElement(
                  ee.a,
                  { style: nn.rightControl },
                  b.a.createElement(k.b, null),
                  b.a.createElement(W, null),
                )
              }),
              f()(u()(e), '_renderPrimaryContent', function () {
                var n = e.props,
                  t = n.hasCommunityMemberships,
                  a = n.history,
                  l = n.location,
                  i = n.user,
                  r = e._isLoggedInUser()
                return b.a.createElement(
                  Ge.d,
                  null,
                  b.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Xe.J, '/communities') },
                    b.a.createElement(Pe, { hasCommunityMemberships: t, history: a, isLoggedInUser: r, location: l }),
                  ),
                  b.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Xe.J, '/communities/memberships') },
                    b.a.createElement(We, { isLoggedInUser: r, user: i }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (n) {
                var t = n || e.props,
                  a = t.createLocalApiErrorHandler,
                  l = t.fetchOneUserByScreenNameIfNeeded,
                  i = t.screenName
                i && l(i).catch(a(Q.a))
              }),
              e
            )
          }
          return (
            s()(t, [
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
                    n = this.context.loggedInUserId
                  return (null == e ? void 0 : e.id_str) === n
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
                    var n = this._isMembershipsView() ? Ze : Ye
                    return b.a.createElement(
                      v.a,
                      { behavioralEventContext: $e },
                      b.a.createElement(Je.a, {
                        backLocation: '/',
                        history: e,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: b.a.createElement(_.a, null),
                        title: n,
                      }),
                    )
                  }
                  return b.a.createElement(Qe.a, { to: '/' })
                },
              },
            ]),
            t
          )
        })(b.a.Component)
      f()(en, 'contextType', G.a)
      var nn = R.a.create(function (e) {
          return { rightControl: { color: e.colors.text, display: 'flex', flexDirection: 'row' } }
        }),
        tn = K(en)
      n.default = tn
    },
    uI9t: function (e, n, t) {
      'use strict'
      var a = t('VrFO'),
        l = t.n(a),
        i = t('Y9Ll'),
        r = t.n(i),
        o = t('5Yy7'),
        s = t.n(o),
        c = t('2VqO'),
        u = t.n(c),
        m = t('KEM+'),
        d = t.n(m),
        y = (t('z84I'), t('ERkP')),
        p = t.n(y),
        g = t('yiKp'),
        f = t.n(g),
        h = t('1Pcy'),
        b = t.n(h),
        v = (t('2G9S'), t('ho0z'), t('I4+6')),
        _ = t('cm6r'),
        k = t('rHpw'),
        E = t('k/Ka'),
        C = t('MWbm'),
        S = t('x0mb'),
        F = t('IMYl'),
        I = (function (e) {
          s()(t, e)
          var n = u()(t)
          function t() {
            var e
            l()(this, t)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (e = n.call.apply(n, [this].concat(i))),
              d()(b()(e), '_radioRef', p.a.createRef()),
              d()(b()(e), '_handleChange', function () {
                var n = e.props,
                  t = n.colorName
                ;(0, n.onChange)(t)
              }),
              e
            )
          }
          return (
            r()(t, [
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
                    n = e.accessibilityLabel,
                    t = e.colorName,
                    a = e.isSelected,
                    l = e.name,
                    i = e.style,
                    r = k.a.theme.colors[t],
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
                        accessibilityLabel: n,
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
            t
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
        K = I,
        T = 1,
        M = (function (e) {
          s()(t, e)
          var n = u()(t)
          function t() {
            var e
            return l()(this, t), ((e = n.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(T, '_LABEL')), (T += 1), e
          }
          return (
            r()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    n = this.props,
                    t = n.accessibilityLabel,
                    a = n.autoFocus,
                    l = n.layout,
                    i = n.onChange,
                    r = n.options,
                    o = n.value,
                    s = 'two-rows' === l,
                    c = [x.root, s && x.flexWrap],
                    u = s ? { width: ''.concat((2 / r.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    C.a,
                    { accessibilityLabel: t, accessibilityRole: 'radiogroup', style: c },
                    r.map(function (n) {
                      var t = n.accessibilityLabel,
                        l = n.colorName
                      return p.a.createElement(K, {
                        accessibilityLabel: t,
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
            t
          )
        })(p.a.Component)
      d()(M, 'defaultProps', { layout: 'one-row' })
      var x = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      n.a = M
    },
    w9f9: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (n.default = u)
    },
    'weg/': function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    xPe1: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitySettingsRouter', function () {
          return an
        })
      t('KqXw'), t('WNMA'), t('1t7P'), t('jQ/y'), t('ho0z')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('v6aA'),
        r = t('rxPX'),
        o = Object(r.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        s = t('ddV6'),
        c = t.n(s),
        u = t('jTgF'),
        m = t('AspN'),
        d = t('eSoz'),
        y = t('0KEI'),
        p = function (e, n) {
          var t = n.localMediaId,
            a = t && isFinite(t) ? m.k(e, t) : []
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
        f = t('3XMw'),
        h = t.n(f),
        b = t('Nh1N'),
        v = t('JAeQ'),
        _ = (t('lTEL'), t('7x/C'), t('JtPf'), t('87if'), t('kYxP'), t('zb92')),
        k = Object(_.a)({
          loader: function () {
            return Promise.all([t.e(0), t.e(3), t.e(6), t.e(9), t.e(177)]).then(t.bind(null, 'P68U'))
          },
        }),
        E = t('eyty'),
        C = t('MWbm'),
        S = t('rHpw'),
        F = t('TIdA'),
        I = t('A91F'),
        w = t('4zmP'),
        K = t('eb3s'),
        T = h.a.a49f884d,
        M = h.a.ea965b81,
        x = h.a.gea6cc19,
        L = h.a.cfd2f35d,
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
          var n = e.addLocalMediaId,
            t = e.communityId,
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
            Q = W[0],
            X = W[1],
            J = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return V(!1), X(Boolean(e)), e ? n(t, e) : y(t)
            },
            $ = J ? l.a.createElement(F.a, { accessibilityLabel: T, aspectMode: I.a.exact(G), image: J }) : null
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
              accessibilityLabel: M,
              aspectRatio: G,
              currentContent: $,
              location: E.d.CommunityBanner,
              mediaItem: z ? o : void 0,
              onChange: function (e) {
                var n = c()(e, 1)[0]
                B(!1), Z(n)
              },
              onFailure: function () {
                B(j), y(t)
              },
              onRemove:
                r || z
                  ? function () {
                      Z(), h(!0)
                    }
                  : void 0,
            }),
            Q && o
              ? l.a.createElement(v.a, {
                  aspectRatio: G,
                  media: o,
                  onCancel: Z,
                  onCropDone: function (e) {
                    X(!1),
                      s
                        ? (V(!0),
                          i(t, { mediaId: s, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(j) : Y(e)
                          }))
                        : B(j)
                  },
                })
              : null,
            f
              ? l.a.createElement(K.a, {
                  cancelButtonLabel: L,
                  confirmButtonLabel: R,
                  confirmButtonType: 'destructiveFilled',
                  headline: x,
                  onCancel: function () {
                    h(!1)
                  },
                  onConfirm: function () {
                    d(t).catch(Y), h(!1)
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
        z = t('yoO3'),
        V = t('mWs5'),
        q = t('3JAx'),
        W = h.a.f713fbd1,
        Q = [
          { label: h.a.fd00a769, value: 'Public', helpText: h.a.d0784408 },
          { label: h.a.ce0523a8, value: 'Closed', helpText: h.a.ccfafe8c },
        ],
        X = U(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.editAccess,
            i = e.history,
            r = n.id_str,
            o = l.a.useState(n.access),
            s = c()(o, 2),
            u = s[0],
            m = s[1],
            d = l.a.useCallback(
              function () {
                a(r, { access: u })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(r, '/tools/settings') })
                  })
                  .catch(t({ showToast: !0 }))
              },
              [r, u, a, i, t],
            ),
            y = u !== n.access
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
                  onChange: function (e, n) {
                    m(n)
                  },
                  options: Q,
                  value: u,
                }),
              ),
            ),
          )
        }),
        J = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        G = t('n0Rl'),
        Y = t('k49u'),
        Z = (t('849X'), t('TJCb'), t('uDfI')),
        $ = (t('yH/f'), t('I/KZ')),
        ee = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        ne = (t('enFi'), t('9SqB')),
        te = t.n(ne),
        ae = void 0 !== P ? P : (P = t('tFuX')),
        le = void 0 !== D ? D : (D = t('pd/v')),
        ie = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var n
            switch (e.membership_settings.__typename) {
              case $.a.Open:
                n = { __typename: $.a.Open }
                break
              case $.a.Restricted:
                n = {
                  __typename: $.a.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: n }
          }
        },
        re = t('zCf4'),
        oe = t('Hsf0'),
        se = t.n(oe),
        ce = void 0 !== B ? B : (B = t('tnnC'))
      var ue,
        me,
        de = t('jAXQ'),
        ye = t.n(de),
        pe = h.a.f713fbd1,
        ge = h.a.c5d1634d,
        fe = h.a.b983f9e0,
        he = h.a.fc2a5c92,
        be = h.a.a1c93d73,
        ve = void 0 !== ue ? ue : (ue = t('1tGk')),
        _e = function (e) {
          var n,
            t,
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
              var n = se()(ce, e)
              switch (n.__typename) {
                case $.a.Restricted:
                  return { access: $.a.Restricted, invitesPolicy: n.invites_policy }
                case $.a.Open:
                  return { access: $.a.Open, invitesPolicy: $.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(n.__typename))
              }
            })(E),
            I = l.a.useState(),
            T = c()(I, 2),
            M = T[0],
            x = T[1],
            L =
              ((n = te()(ae)),
              (t = c()(n, 2)),
              (a = t[0]),
              (i = t[1]),
              (r = te()(le)),
              (o = c()(r, 2)),
              (s = o[0]),
              (u = o[1]),
              (m = Object(Z.c)()),
              l.a.useCallback(
                function (e, n) {
                  return i || u
                    ? Promise.reject(new Error('Already updating membership settings'))
                    : new Promise(function (t, l) {
                        var i = n.access,
                          r = n.invitesPolicy
                        i === $.a.Open
                          ? a({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var n = ie(e.community_membership_settings_open_update)
                                n && m(d.c.updateOne(n.id_str, n)), t()
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
                                var n = ie(e.community_membership_settings_restricted_update)
                                n && m(d.c.updateOne(n.id_str, n)), t()
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
                    var n = c()(e.errors, 1)[0],
                      t = n.code === Y.a.GenericBadRequest && n.message ? n.message : be
                    return P(t), []
                  },
                })
                L(S, N)
                  .then(function () {
                    R.goBack({ backLocation: '/i/communities/'.concat(S, '/tools/settings') })
                  })
                  .catch(e)
              },
              [S, D, R, N, L],
            ),
            q = l.a.useCallback(
              function () {
                var e = (function (e, n) {
                  if (e.access === $.a.Restricted && n.access === $.a.Open) return h.a.daedd9fa
                })(F, N)
                e ? x(e) : z()
              },
              [F, N, z],
            ),
            W = l.a.useCallback(function () {
              return x(void 0)
            }, []),
            Q =
              ((g = N),
              (f = (p = F).access !== g.access),
              (v = p.access === $.a.Restricted && p.invitesPolicy !== g.invitesPolicy),
              !(f || v)),
            X = j
              ? l.a.createElement(
                  C.a,
                  { style: ke.error },
                  l.a.createElement(w.a, { Icon: b.a, headline: he, text: j, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            V.a,
            { communityId: S, onSubmit: q, submitDisabled: Q, title: pe },
            X,
            l.a.createElement($.d, { setters: U, state: N }),
            M &&
              l.a.createElement(K.a, {
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
        Ee = t('v//M'),
        Ce = void 0 !== me ? me : (me = t('PbB6')),
        Se = Object(G.b)(Ce, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Fe = function (e) {
          var n = { communityId: e.communityId }
          return l.a.createElement(Se, {
            render: function (e) {
              var n = e.data,
                t = (e.error, e.fetchStatus),
                a = e.retry,
                i = null == n ? void 0 : n.community
              return l.a.createElement(Ee.a, {
                fetchStatus: t,
                onRequestRetry: a,
                render: function () {
                  return i ? l.a.createElement(_e, { community: i }) : null
                },
                retryable: !0,
              })
            },
            variables: n,
          })
        },
        Ie = t('ROT1'),
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
        Ke = h.a.h3c0f1a2,
        Te = h.a.fc2a5c92,
        Me = h.a.cb5e6510
      var xe = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Le = we(function (e) {
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.editName,
            i = e.history,
            r = n.id_str,
            o = n.name,
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
                var e = t({
                  customErrorHandler: function (e) {
                    var n = c()(e.errors, 1)[0],
                      t = n.code === Y.a.GenericBadRequest && n.message ? n.message : Me
                    return k(t), f(!0), []
                  },
                })
                a(r, { name: m })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(r, '/tools/settings') })
                  })
                  .catch(e)
              },
              [r, m, a, i, t],
            )
          return l.a.createElement(
            z.a,
            null,
            l.a.createElement(
              V.a,
              { communityId: r, onSubmit: E, submitDisabled: g, title: Ke },
              _
                ? l.a.createElement(
                    C.a,
                    { style: xe.error },
                    l.a.createElement(w.a, { Icon: b.a, headline: Te, text: _, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ie.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        Re = t('U0Qk'),
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
          var n = e.community,
            t = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            i = e.history,
            r = n.description,
            o = n.id_str,
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
                var e = t({
                  customErrorHandler: function (e) {
                    var n = c()(e.errors, 1)[0],
                      t = n.code === Y.a.GenericBadRequest && n.message ? n.message : Pe
                    return k(t), f(!0), []
                  },
                })
                a(o, { purpose: m })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, m, a, i, t],
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
                onChange: function (e, n) {
                  d(e), f(n)
                },
              }),
            ),
          )
        }),
        He = t('Ig1G'),
        Ne = t('x0mb'),
        Ue = t('5FtR'),
        ze = t('t62R'),
        Ve = t('X00g'),
        qe = t('6vad'),
        We = t('csss'),
        Qe = t('0yYu'),
        Xe = h.a.bb081ea1,
        Je = h.a.h3e55b40,
        Ge = h.a.j8af8ea9,
        Ye = h.a.d5f01115,
        Ze = h.a.c3c04b70,
        $e = { Closed: h.a.ce0523a8, Public: h.a.fd00a769 },
        en = h.a.f4a98e9e,
        nn = h.a.f713fbd1,
        tn = function (e) {
          var n = e.children
          return l.a.createElement(ze.b, { color: 'gray700', size: 'subtext2' }, n)
        },
        an = function (e) {
          var n = e.community,
            t = e.history,
            a = e.match,
            r = n.access,
            o = n.description,
            s = n.hasCustomMedia,
            c = n.id_str,
            u = n.localMediaId,
            m = n.media,
            d = n.membership_settings,
            y = n.name,
            p = n.theme,
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
            S = Object(He.e)(n),
            F = Ve.a.getCommunityThemeDisplayName(S),
            I = Ve.a.getCommunityBackgroundColor(p)
          return l.a.createElement(
            re.d,
            null,
            f
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(Le, { community: n, history: t }),
                )
              : null,
            h
              ? l.a.createElement(
                  re.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(Be, { community: n, history: t }),
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
                  l.a.createElement(X, { community: n, history: t }),
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
                  { communityId: c, screenType: 'primaryDetail', title: Xe },
                  _ ? l.a.createElement(N, { communityId: c, hasCustomMedia: s, localMediaId: u, media: m }) : null,
                  l.a.createElement(qe.b, { text: en }),
                  l.a.createElement(We.a, {
                    description: l.a.createElement(tn, null, y),
                    label: Je,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(We.a, {
                    description: o ? l.a.createElement(tn, null, o) : void 0,
                    label: Ye,
                    link: h ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(We.a, {
                        description: l.a.createElement(tn, null, F),
                        label: Ze,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(Ne.a, { style: [{ color: I }, ln.themeIcon] })
                        },
                      })
                    : null,
                  v || b
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(Qe.a, null),
                        l.a.createElement(qe.b, { text: nn }),
                        l.a.createElement(We.a, {
                          description: l.a.createElement(tn, null, C),
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
        ln =
          ((n.default = o(an)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    xvEL: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
    xvzJ: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        i = t('yiKp'),
        r = t.n(i),
        o = t('ddV6'),
        s = t.n(o),
        c = (t('yH/f'), t('2G9S'), t('ERkP')),
        u = t.n(c),
        m = t('1YZw'),
        d = t('v6aA'),
        y = t('Ig1G'),
        p = t('uDfI'),
        g = t('CxAY'),
        f = t('yrzJ'),
        h = t('mjJ+'),
        b = t('IG7M'),
        v = t('eb3s'),
        _ = (t('enFi'), t('9SqB')),
        k = t.n(_),
        E = t('3XMw'),
        C = t.n(E),
        S = t('Lsrn'),
        F = t('k/Ka'),
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
        K = function () {
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
      K.metadata = { width: 24, height: 24 }
      var T,
        M = K,
        x = t('boUI'),
        L = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
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
        W = void 0 !== T ? T : (T = t('7xtl'))
      n.a = function (e) {
        var n = u.a.useContext(d.a),
          t = n.featureSwitches,
          a = n.loggedInUserId,
          i = t.isTrue('c9s_edit_moderators_enabled'),
          o = e.communityId,
          c = e.communityRole,
          f = e.recordId,
          _ = e.screenName,
          E = e.userId,
          C = u.a.useState(null),
          S = s()(C, 2),
          F = S[0],
          I = S[1],
          K = Object(p.c)(),
          T = k()(W),
          A = s()(T, 2),
          j = A[0],
          H = A[1],
          N = u.a.useCallback(
            function (e) {
              var n = e.communityId,
                t = e.errorMessage,
                a = e.recordId,
                l = e.role,
                i = (e.screenName, e.successMessage),
                r = e.userId
              j({
                variables: { communityId: n, userId: r, role: l },
                updater: function (e) {
                  var t = e.get(a)
                  null == t || t.setValue(l, 'community_role(community_id:"'.concat(n, '")')),
                    K(g.b.updateOne(''.concat(n, '_').concat(r), { role: l }))
                },
                onCompleted: function () {
                  K(Object(m.b)({ text: i }))
                },
                onError: function () {
                  K(Object(m.b)({ text: t }))
                },
              })
            },
            [j, K],
          ),
          Q = u.a.useCallback(
            function (e) {
              var n,
                t,
                a,
                l,
                i = e.communityId,
                o = e.recordId,
                s = e.roleAction,
                c = e.screenName,
                u = e.userId
              switch (s) {
                case L.PromoteModerator:
                  ;(n = V), (a = y.a.Moderator), (l = P({ screenName: c })), (t = D({ screenName: c }))
                  break
                case L.DemoteModerator:
                  ;(n = q), (a = y.a.Member), (l = U({ screenName: c })), (t = z({ screenName: c }))
                  break
                default:
                  return
              }
              I(
                r()(
                  r()({}, n),
                  {},
                  {
                    text: n.text(c),
                    onConfirm: function () {
                      N({
                        communityId: i,
                        errorMessage: t,
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
          X = u.a.useCallback(
            function (e) {
              var n = []
              if (i)
                switch (c) {
                  case y.a.Moderator:
                    n.push({
                      behavioralEventContext: { viewType: 'remove_moderator' },
                      disabled: H,
                      text: B,
                      Icon: w,
                      onClick: function () {
                        return Q({
                          communityId: o,
                          recordId: f,
                          roleAction: L.DemoteModerator,
                          screenName: _,
                          userId: E,
                        })
                      },
                    })
                    break
                  case y.a.Member:
                    n.push({
                      behavioralEventContext: { viewType: 'add_moderator' },
                      disabled: H,
                      text: O,
                      Icon: M,
                      onClick: function () {
                        return Q({
                          communityId: o,
                          recordId: f,
                          roleAction: L.PromoteModerator,
                          screenName: _,
                          userId: E,
                        })
                      },
                    })
                }
              return (
                n.push({
                  behavioralEventContext: { viewType: 'view_profile' },
                  text: R({ screenName: _ }),
                  Icon: x.a,
                  link: '/'.concat(_),
                }),
                u.a.createElement(h.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
              )
            },
            [o, Q, i, f, c, H, _, E],
          )
        return E !== a
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(b.a, { renderActionMenu: X }),
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
    yUT0: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'EditThemeScreen', function () {
          return I
        })
      var a = t('ddV6'),
        l = t.n(a),
        i = (t('yH/f'), t('jwue'), t('7x/C'), t('+oxZ'), t('ERkP')),
        r = t.n(i),
        o = t('eSoz'),
        s = t('rxPX'),
        c = t('0KEI'),
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
        m = t('jHSc'),
        d = t('Ig1G'),
        y = t('3XMw'),
        p = t.n(y),
        g = t('MWbm'),
        f = t('X00g'),
        h = t('/yvb'),
        b = t('uI9t'),
        v = t('rHpw'),
        _ = p.a.dbda7beb,
        k = p.a.i2209530,
        E = p.a.hcf35d0c,
        C = p.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        F = {}
      function I(e) {
        var n = e.community,
          t = e.createLocalApiErrorHandler,
          a = e.editTheme,
          i = e.history,
          o = n.id_str,
          s = n.theme,
          c = f.a.getCommunityBackgroundColorName(s),
          u = r.a.useState(!1),
          y = l()(u, 2),
          p = y[0],
          v = y[1],
          I = r.a.useState(Object(d.e)(n)),
          K = l()(I, 2),
          T = K[0],
          M = K[1],
          x = r.a.useState(f.a.getCommunityThemeDisplayName(T)),
          L = l()(x, 2),
          R = L[0],
          O = L[1],
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
                S.forEach(function (n) {
                  var t = f.a.getCommunityTheme(n),
                    a = f.a.getCommunityBackgroundColorName(t)
                  ;(F[a] = n), e.push({ accessibilityLabel: f.a.getCommunityThemeDisplayName(n), colorName: a })
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
              a(o, { theme: T })
                .then(function () {
                  i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(t({ showToast: !0 }))
            },
            [o, T, a, i, t],
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
                var t = F[e],
                  a = t !== Object(d.e)(n)
                M(t), O(f.a.getCommunityThemeDisplayName(t)), D(e), v(a)
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
      n.default = u(I)
    },
    zakg: function (e, n, t) {
      'use strict'
      t.r(n)
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
      ;(r.hash = '9533cbfb5394a4601514cbc83020138b'), (n.default = r)
    },
    zum0: function (e, n, t) {
      'use strict'
      t.r(n)
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
      n.default = a
    },
  },
])
//# sourceMappingURL=WIPED
