;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    '+BRT': function (e, n, t) {
      'use strict'
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
      e.exports = a
    },
    '+BRr': function (e, n, t) {
      'use strict'
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
      e.exports = a
    },
    '+R/6': function (e, n, t) {
      'use strict'
      t('ho0z')
      var a,
        l = t('ERkP'),
        i = t.n(l),
        r = t('v6aA'),
        o = t('xvzJ'),
        s = t('OROh'),
        c = t('IMA+'),
        u = t('Ig1G'),
        m = (t('YWiL'), t('CVPS')),
        d = t.n(m)
      n.a = function (e) {
        var n = e.communityId,
          l = e.userResult,
          m = e.viewerRole,
          y = i.a.useContext(r.a),
          p = y.featureSwitches,
          g = y.loggedInUserId,
          f = p.isTrue('c9s_remove_member_list_enabled'),
          h = d()(void 0 !== a ? a : (a = t('tgdH')), l).result
        if (!h || 'User' !== h.__typename || !h.legacy) return null
        var b = h.community_role,
          v = h.id,
          _ = h.legacy,
          k = _.id_str,
          E = _.name,
          C = void 0 === E ? '' : E,
          S = _.profile_image_url_https,
          F = _.protected,
          I = _.screen_name,
          w = _.verified
        if (!I || !S || !C) return null
        var K = Object(u.d)(b),
          T = m === u.a.Admin || (f && m === u.a.Moderator)
        return i.a.createElement(c.a, {
          avatarUri: S,
          decoration: T
            ? i.a.createElement(o.a, {
                communityId: n,
                communityRole: b,
                recordId: v,
                screenName: I,
                userId: k,
                viewerRole: m,
              })
            : g !== k
            ? i.a.createElement(s.a, { user: h })
            : null,
          displayMode: 'UserCompact',
          displayNameLabel: K,
          isProtected: F,
          isVerified: w,
          name: C,
          screenName: I,
          userId: k,
        })
      }
    },
    '08/x': function (e, n, t) {
      'use strict'
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
      e.exports = a
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
        o = (t('YWiL'), t('CVPS')),
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
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (e.exports = l)
    },
    '1tGk': function (e, n, t) {
      'use strict'
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
      ;(l.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (e.exports = l)
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
        x = t('CHgo'),
        R = t('7ep7'),
        L = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        M = (function (e) {
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
                  ;(l || t || i) && (a._removeTouchMoveToScrollListener = Object(x.a)(e, a._preventDefaultEvent, !1)),
                    r && (a._removeScrollToScaleListener = Object(x.b)(e, a._preventDefaultEvent, !1))
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
              (a._panResponder = R.a.create({
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
        P = t('aITJ'),
        j = t('yiKp'),
        H = t.n(j),
        D = t('Lsrn'),
        B = t('k/Ka'),
        N = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            H()(
              H()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
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
          return Object(B.a)(
            'svg',
            H()(
              H()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
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
          return Object(B.a)(
            'svg',
            H()(
              H()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
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
          return Object(B.a)(
            'svg',
            H()(
              H()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
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
          return Object(B.a)(
            'svg',
            H()(
              H()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [D.a.root, e.style],
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
                return (!P.b.isMobileOS() || !A.a.isTouchSupported()) && a.props.withZoomControl
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
                              maxIcon: f.a.createElement(J, { style: re.icon }),
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
                      M,
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
    '2rr8': function (e, n, t) {
      'use strict'
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
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (e.exports = l)
    },
    '35hZ': function (e, n, t) {
      'use strict'
      var a = t('EORa').useTrackLoadQueryInRender,
        l = t('h2Du'),
        i = t('6zvL'),
        r = t('PJTX'),
        o = t('I9iR'),
        s = (t('ERkP').useDebugValue, t('e1/f').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      t('/2Cm')
      e.exports = function (e, n, t) {
        a()
        var s,
          m = r(),
          d = n.fetchKey,
          y = n.fetchPolicy,
          p = n.source,
          g = n.variables,
          f = n.networkCacheConfig,
          h = i(e, g, f)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          h.request.node.params.name !== n.name && o(!1),
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
    '6vad': function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return y
      })
      t('yH/f')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('t62R'),
        r = t('EHV7'),
        o = t('rHpw'),
        s = o.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        c = t('7Mjr'),
        u = t('I4+6'),
        m = t('cm6r'),
        d = t('MWbm'),
        y = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var p = o.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      n.b = function (e) {
        var n = e.icon,
          t = e.landingUrl,
          a = e.nativeID,
          g = e.rightControl,
          f = e.style,
          h = e.subtext,
          b = e.testID,
          v = e.text,
          _ = (function (e) {
            switch (e) {
              case y.TopicFilled:
                return l.a.createElement(r.a, { style: s.icon })
              default:
                return null
            }
          })(n),
          k = h ? null : p.withSubtext,
          E = u.a.generate({
            backgroundColor: o.a.theme.colors.gray0,
            color: o.a.theme.colors.cellBackground,
            customFocusBackgroundColor: o.a.theme.colors.gray0,
            customHoverBackgroundColor: o.a.theme.colors.gray0,
            customPressedBackgroundColor: o.a.theme.colors.gray0,
          })
        return l.a.createElement(
          m.a,
          {
            interactiveStyles: t ? E : null,
            link: null == t ? void 0 : t.url,
            nativeID: a,
            style: [p.root, f],
            testID: b,
          },
          l.a.createElement(
            d.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: p.mainContent },
            l.a.createElement(d.a, { style: p.icon }, _),
            l.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: k, weight: 'heavy', withHashflags: !0 },
              v,
            ),
            l.a.createElement(
              d.a,
              { style: p.rightControlGroup },
              t ? l.a.createElement(d.a, { style: k }, l.a.createElement(c.a, { style: p.iconArrow })) : null,
              g ? l.a.createElement(d.a, null, g) : null,
            ),
          ),
          h
            ? l.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: p.subtext, withHashflags: !0 },
                h,
              )
            : null,
        )
      }
    },
    '7xtl': function (e, n, t) {
      'use strict'
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
      ;(s.hash = '611e4e6390b7bb405821b13d8b63cd5d'), (e.exports = s)
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
                              kind: 'RequiredField',
                              field: {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  {
                                    kind: 'RequiredField',
                                    field: {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'blocking',
                                      storageKey: null,
                                    },
                                    action: 'THROW',
                                    path: 'user_relationship.user_results.result.legacy.blocking',
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'description',
                                    storageKey: null,
                                  },
                                  {
                                    kind: 'RequiredField',
                                    field: {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'followed_by',
                                      storageKey: null,
                                    },
                                    action: 'THROW',
                                    path: 'user_relationship.user_results.result.legacy.followed_by',
                                  },
                                  {
                                    kind: 'RequiredField',
                                    field: {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'following',
                                      storageKey: null,
                                    },
                                    action: 'THROW',
                                    path: 'user_relationship.user_results.result.legacy.following',
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
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
                                    name: 'screen_name',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              action: 'THROW',
                              path: 'user_relationship.user_results.result.legacy',
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
      ;(l.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (e.exports = l)
    },
    '9Jxp': function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        l = t.n(a),
        i = t('ERkP'),
        r = t.n(i),
        o = t('CXUS'),
        s = t('rHpw'),
        c = t('MWbm'),
        u = s.a.create(function () {
          return { hidden: { opacity: 0 } }
        })
      n.a = function (e) {
        var n = e.children,
          t = e.draggableId,
          a = e.fromVirtualList,
          i = e.index,
          s = e.isBeingDragged,
          m = e.isDragDisabled
        return a && s
          ? r.a.createElement(c.a, { style: u.hidden }, n)
          : r.a.createElement(o.b, { draggableId: t, index: i, isDragDisabled: m }, function (e) {
              return r.a.createElement('div', l()({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps), n)
            })
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
      ;(l.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (e.exports = l)
    },
    C2fM: function (e, n, t) {
      'use strict'
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
                              {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'user',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'result',
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
      ;(y.hash = '994dfbaa33f6514fd6bf940e12397869'), (e.exports = y)
    },
    DCZs: function (e, n, t) {
      'use strict'
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
      e.exports = a
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
      var x = S(function (e) {
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
        R = t('5FtR'),
        L = t('4e/K'),
        M = t('MWbm'),
        O = t('4zmP'),
        A = t('t62R'),
        P = t('FIs5'),
        j = t('rHpw'),
        H = t('GZwR'),
        D = v.a.b139b549,
        B = v.a.dfddd842,
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
        ne = [H.a.CommunityUsers],
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
                ? i.users_to_invite_slice.items.map(H.g).filter(Boolean)
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
          j = o
            ? u.a.createElement(R.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(R.a, { to: '/' }),
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
        return 'CommunityInvitesUnavailable' === (null == i ? void 0 : i.__typename)
          ? j
          : u.a.createElement(
              m.a,
              { behavioralEventContext: te },
              u.a.createElement(
                h.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: B, title: D },
                ((F = (null == i ? void 0 : i.remaining_invite_count) || 0),
                (I = F > 999),
                'CommunityInvites' === (null == i ? void 0 : i.__typename) &&
                  !I &&
                  u.a.createElement(
                    M.a,
                    { style: le.callout },
                    u.a.createElement(O.a, { text: X({ remaining_invite_count: F }) }),
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
                    return u.a.createElement(P.a, { header: Q, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        M.a,
                        { style: le.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, W),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return u.a.createElement(P.a, { header: Y({ query: y }), message: Z })
                  },
                  renderUserDecoration: function (e) {
                    var n = e.userId
                    return u.a.createElement(x, {
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
                  source: H.d.CommunityInvites,
                  style: le.input,
                }),
              ),
            )
      }
      var le = j.a.create(function (e) {
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
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: (k = [
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
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: 'TimelineRichTextUser',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  v,
                                                  {
                                                    alias: 'mention_results',
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: k,
                                                    storageKey: null,
                                                  },
                                                ],
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
                          {
                            alias: null,
                            args: null,
                            filters: null,
                            handle: 'user',
                            key: '',
                            kind: 'LinkedHandle',
                            name: 'result',
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
            id: 'lU0PYlIaM_s-u55xlzsRtA',
            metadata: { sliceInfoPath: ['communities_search_slice', 'slice_info'] },
            name: 'CommunitiesSearchQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(C.hash = 'c848c1bd320716d294b5f3f2b34ed1a8'), (e.exports = C)
    },
    'Dm5+': function (e, n, t) {
      'use strict'
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
                              {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'user',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'result',
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
      ;(y.hash = 'cccb7f84865368f471eb927f82edccec'), (e.exports = y)
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
                          kind: 'RequiredField',
                          field: {
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
                          action: 'THROW',
                          path: 'members_facepile_results.result.legacy',
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
                                                a,
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    {
                                                      kind: 'RequiredField',
                                                      field: (c = {
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
                                                      }),
                                                      action: 'THROW',
                                                      path: 'members_facepile_results.result.unavailable_message.entities.ref.user_results.result.legacy',
                                                    },
                                                    (u = {
                                                      alias: null,
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'rest_id',
                                                      storageKey: null,
                                                    }),
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                (d = {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    (m = {
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
                                                }),
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: 'TimelineRichTextUser',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        s,
                                        {
                                          alias: 'mention_results',
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
                                                      kind: 'RequiredField',
                                                      field: c,
                                                      action: 'THROW',
                                                      path: 'members_facepile_results.result.unavailable_message.entities.ref.mention_results.result.legacy',
                                                    },
                                                    u,
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                d,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
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
                        m,
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
      ;(y.hash = '97ecd7a2189f93a563b3695f898d77ab'), (e.exports = y)
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
                            viewerRole: null == n ? void 0 : n.role,
                          }),
                        ),
                        r.a.createElement(
                          v.b,
                          { exact: !0, path: '/i/communities/'.concat(n.id_str, '/tools/moderators') },
                          r.a.createElement(y.a, { community: n }),
                          r.a.createElement(b.b, {
                            communityId: n.id_str,
                            mode: b.a.Moderators,
                            viewerRole: null == n ? void 0 : n.role,
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
          return J
        }),
        t.d(n, 'CommunityFeedbackScreen', function () {
          return Q
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
          return Object.entries(t).flat().includes('tweetId') ? J.HiddenTweet : J.RemovedMember
        },
        b = function (e, n) {
          if (h(0, n) === J.HiddenTweet) {
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
          if (h(0, n) === J.HiddenTweet) {
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
        x = t('4zmP'),
        R = t('0yYu'),
        L = t('6vad'),
        M = t('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        P = S.a.a5baa7d1,
        j = S.a.icc32e3d,
        H = K.a.getCommunityTheme('Default'),
        D = M.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: M.a.theme.colors.gray50,
              borderRadius: M.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: M.a.theme.spacesPx.space16,
              marginBottom: M.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: M.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        B = function (e) {
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
                    case J.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case J.RemovedMember:
                      return null == t ? void 0 : t.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === n
                ? void 0
                : n.name) || '',
            y = null == t ? void 0 : t.name,
            p = null == t ? void 0 : t.rules,
            g = (null == t ? void 0 : t.theme) || H,
            f = K.a.getCommunityUIColorName(g),
            h = Object(E.a)({ communityName: y })
          return g && null != p && p.length
            ? s.a.createElement(
                w.a,
                { style: D.tweetInfo },
                s.a.createElement(
                  w.a,
                  { style: D.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case J.HiddenTweet:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            T.b,
                            { color: f, size: 'subtext1', style: D.communityTitle, weight: 'bold' },
                            y,
                          ),
                          s.a.createElement(
                            T.b,
                            { size: 'headline1', style: [D.titleText, D.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          s.a.createElement(I.a, {
                            style: D.tweetContainer,
                            tweetId: null == r ? void 0 : r.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          s.a.createElement(x.a, { headline: A, text: d }),
                          s.a.createElement(T.b, { style: D.helpText }, P),
                        )
                      case J.RemovedMember:
                        return s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            T.b,
                            { size: 'headline1', style: D.titleText, weight: 'heavy' },
                            j({ communityName: y }),
                          ),
                          s.a.createElement(
                            w.a,
                            { style: D.removedMemberReason },
                            s.a.createElement(T.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                s.a.createElement(R.a, null),
                s.a.createElement(L.b, { text: h }),
                s.a.createElement(k.b, {
                  badgeStyle: D.badges,
                  ruleContainerStyle: D.rules,
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
        X = { viewType: 'community' },
        J = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function Q(e) {
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
              case J.HiddenTweet:
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
              case J.RemovedMember:
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
                  { behavioralEventContext: X },
                  r
                    ? s.a.createElement(
                        U.a,
                        { behavioralEventViewType: a },
                        s.a.createElement(z.a, {
                          backLocation: '/notifications',
                          history: g.history,
                          primaryContent: s.a.createElement(B, l()({}, e, { type: p })),
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
      var G = _(Q)
      n.default = G
    },
    HNLm: function (e, n, t) {
      'use strict'
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityAppBarButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'CommunityModeration',
            kind: 'LinkedField',
            name: 'moderation',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'tweet_case_count', storageKey: null }],
            storageKey: null,
          },
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
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'cc25ec38f36e432d996afa31f65dc350',
      }
      e.exports = a
    },
    HvW7: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('yiKp')),
        l = t('XiYe'),
        i = t('PJTX'),
        r = t('ERkP'),
        o = t('e1/f').commitMutation,
        s = r.useState,
        c = r.useEffect,
        u = r.useRef,
        m = r.useCallback
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          t = i(),
          r = l(),
          d = u(t),
          y = u(e),
          p = u(new Set()),
          g = s(!1),
          f = g[0],
          h = g[1],
          b = m(
            function (n) {
              d.current === t && y.current === e && (p.current.delete(n), r.current && h(p.current.size > 0))
            },
            [t, r, e],
          )
        c(
          function () {
            ;(d.current === t && y.current === e) ||
              ((p.current = new Set()), r.current && h(!1), (d.current = t), (y.current = e))
          },
          [t, r, e],
        )
        var v = m(
          function (l) {
            var i = n(
              t,
              (0, a.default)(
                (0, a.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    var t
                    b(i), null === (t = l.onCompleted) || void 0 === t || t.call(l, e, n)
                  },
                  onError: function (e) {
                    var n
                    b(i), null === (n = l.onError) || void 0 === n || n.call(l, e)
                  },
                  onUnsubscribe: function () {
                    var e
                    b(i), null === (e = l.onUnsubscribe) || void 0 === e || e.call(l)
                  },
                  onNext: function () {
                    var e
                    null === (e = l.onNext) || void 0 === e || e.call(l)
                  },
                },
              ),
            )
            return p.current.add(i), r.current && h(!0), i
          },
          [b, n, t, r, e],
        )
        return [v, f]
      }
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
          x = s.a.useCallback(function () {
            C(!1)
          }, []),
          R = s.a.useCallback(
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
                onCropDone: R,
                onDone: x,
                title: y,
              })
            : null,
        )
      }
    },
    Jt8P: function (e, n, t) {
      'use strict'
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
      e.exports = a
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
            g = Object(m.b)(i),
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
        m = (t('YWiL'), t('Fr3L')),
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
    LtQU: function (e, n, t) {
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
                d: 'M19 10H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (n.a = c)
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
        x = t('TnY3'),
        R = t('cHvH'),
        L = t('3xLC'),
        M = [
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
                  return v.a.createElement(R.a, null, function (n) {
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
                      l()(e, M))
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
                    x = t.withSearchBox,
                    R = t.withTweetButton,
                    L = 'root' === p,
                    M = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && _) || (L && b),
                    P = L || (O && n),
                    j = L ? h.c : O ? h.a : void 0,
                    H = v.a.createElement(
                      K.a,
                      { style: w.appBarContainer },
                      v.a.createElement(k.a, {
                        backLocation: r,
                        fixed: !1,
                        hideBackButton: P,
                        history: c,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: y,
                        secondaryBar: f,
                        subtitle: A ? C : void 0,
                        title: S,
                        titleDomId: j,
                        titleIconCell: F,
                        titleIconCellSize: I,
                      }),
                    ),
                    D =
                      L || (M && T)
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
                            withSearchBox: x,
                            withTweetButton: R,
                          })
                  return v.a.createElement(v.a.Fragment, null, D, H)
                },
              },
            ]),
            t
          )
        })(v.a.Component)
      f()(O, 'contextType', L.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      n.a = Object(x.a)(O)
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
            var x = l()(l()({}, K), {}, { title: null }),
              R = s.a.createElement(v.b, { history: y, location: g, match: f })
            return s.a.createElement(k.a, r()({}, x, { primaryContent: R }))
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
        u = (t('YWiL'), t('CVPS')),
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
      var a,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useCommunityBannerImageThumbnail_community',
          selections: [
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageDefault_community' },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImageCustom_community' },
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
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = 'bda649c5a293882e2d130676e026a4d7'), (e.exports = l)
    },
    OBBW: function (e, n, t) {
      'use strict'
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
      e.exports = a
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
    OROh: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return p
      })
      var a,
        l = t('97Jx'),
        i = t.n(l),
        r = t('m3Bd'),
        o = t.n(r),
        s = (t('ho0z'), t('ERkP')),
        c = t.n(s),
        u = t('uIZp'),
        m = (t('YWiL'), t('CVPS')),
        d = t.n(m),
        y = ['user']
      function p(e) {
        var n,
          l = e.user,
          r = o()(e, y),
          s = d()(void 0 !== a ? a : (a = t('P4CI')), l),
          m = c.a.useMemo(
            function () {
              var e, n, t, a, l, i, r, o
              return s
                ? {
                    id_str: s.rest_id,
                    screen_name: (null === (e = s.legacy) || void 0 === e ? void 0 : e.screen_name) || '',
                    name: (null === (n = s.legacy) || void 0 === n ? void 0 : n.name) || '',
                    follow_request_sent:
                      (null === (t = s.legacy) || void 0 === t ? void 0 : t.follow_request_sent) || !1,
                    protected: (null === (a = s.legacy) || void 0 === a ? void 0 : a.protected) || !1,
                    following: (null === (l = s.legacy) || void 0 === l ? void 0 : l.following) || !1,
                    followed_by: (null === (i = s.legacy) || void 0 === i ? void 0 : i.followed_by) || !1,
                    super_following: s.super_following || void 0,
                    super_follow_eligible: s.super_follow_eligible || void 0,
                    super_followed_by: s.super_followed_by || void 0,
                    smart_blocking: s.smart_blocking || void 0,
                    blocking: (null === (r = s.legacy) || void 0 === r ? void 0 : r.blocking) || void 0,
                    highlightedLabel:
                      null !== (o = s.affiliates_highlighted_label) && void 0 !== o && o.label
                        ? { userLabelType: s.affiliates_highlighted_label.label.user_label_type || void 0 }
                        : void 0,
                  }
                : void 0
            },
            [s],
          )
        return c.a.createElement(
          u.a,
          i()({}, r, {
            isRelay: !0,
            user: m,
            userId: null !== (n = null == s ? void 0 : s.rest_id) && void 0 !== n ? n : '',
          }),
        )
      }
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
              return t.e(199).then(t.bind(null, 'V5fj'))
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
            x = r.a.useState(C(c)),
            R = l()(x, 2),
            L = R[0],
            M = R[1],
            O = r.a.useState(void 0),
            A = l()(O, 2),
            P = A[0],
            j = A[1],
            H = r.a.useState(i),
            D = l()(H, 2),
            B = D[0],
            N = D[1],
            U = r.a.useState(F(i)),
            z = l()(U, 2),
            V = z[0],
            q = z[1],
            W = r.a.useState(void 0),
            X = l()(W, 2),
            J = X[0],
            Q = X[1],
            G = r.a.useState('' !== c),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = r.a.useCallback(
              function (e) {
                var n = !1,
                  a = e.target.value
                C(a) && ((n = !0), j(b({ minCharacterCount: 3, maxCharacterCount: t }))),
                  $(!0),
                  M(n),
                  T(a),
                  g({ description: B, name: a, valid: !n && !V })
              },
              [t, B, g, V, C],
            ),
            ne = r.a.useCallback(
              function (e) {
                var n = !1,
                  t = e.target.value
                F(t) && ((n = !0), Q(k({ maxCharacterCount: a }))),
                  q(n),
                  N(t),
                  g({ name: K, description: t, valid: !n && !L })
              },
              [a, K, g, L, F],
            ),
            te = L && P ? void 0 : h({ minCharacterCount: 3, maxCharacterCount: t }),
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
              errorText: P,
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
              errorText: J,
              helperText: ae,
              invalid: V,
              label: v,
              name: 'typedRuleDescription',
              onChange: ne,
              spellCheck: 'false',
              validLength: a,
              value: B,
            }),
          )
        },
        S = g.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    P4CI: function (e, n, t) {
      'use strict'
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'FollowUserButtonRelay_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'follow_request_sent',
                    storageKey: null,
                  },
                  action: 'THROW',
                  path: 'legacy.follow_request_sent',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.following',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followed_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocking',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_following', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_follow_eligible', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_followed_by', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'smart_blocking', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'HighlightedUserLabelResponse',
            kind: 'LinkedField',
            name: 'affiliates_highlighted_label',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'HighlightedUserLabel',
                kind: 'LinkedField',
                name: 'label',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'user_label_type', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: 'ClientExtension',
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '54d1810ed4d3744bd91e137b61b3642a',
      }
      e.exports = a
    },
    PKbs: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return K
      })
      t('yH/f'), t('M+/F'), t('z84I'), t('ho0z'), t('1t7P'), t('jQ/y')
      var a = t('ERkP'),
        l = t.n(a),
        i = t('v6aA'),
        r = t('t62R'),
        o = t('3XMw'),
        s = t.n(o),
        c = t('MWbm'),
        u = l.a.createElement(
          s.a.I18NFormatMessage,
          { $i18n: 'i5ba24f4' },
          l.a.createElement(
            r.b,
            { link: 'https://help.twitter.com/en/rules-and-policies/twitter-rules', withInteractiveStyling: !1 },
            s.a.b154b059,
          ),
        ),
        m = function (e) {
          var n = e.containerStyle,
            t = e.explanation,
            a = e.explanationStyle,
            i = e.heading
          return l.a.createElement(c.a, { style: n }, i, l.a.createElement(r.b, { color: 'gray700', style: a }, t || u))
        },
        d = t('csss'),
        y = function (e) {
          var n = e.getPivotLink,
            t = e.renderBadge,
            a = e.rules
          return l.a.createElement(
            l.a.Fragment,
            null,
            a.map(function (e, a) {
              var i = e.description,
                o = e.name,
                s = e.rest_id,
                c = n(e),
                u = t(a + 1),
                m = l.a.createElement(r.b, { weight: 'bold' }, o)
              return l.a.createElement(d.a, { description: i, key: s, label: m, link: c, thumbnail: u })
            }),
          )
        },
        p = t('97Jx'),
        g = t.n(p),
        f = t('ddV6'),
        h = t.n(f),
        b = (t('hCOa'), t('87if'), t('Ee2X'), t('9Jxp')),
        v = t('LtQU'),
        _ = t('rHpw'),
        k = _.a.create(function (e) {
          return { icon: { color: e.colors.gray300, flexShrink: 0, paddingLeft: e.spaces.space12 } }
        }),
        E = function (e) {
          var n = e.badge,
            t = e.rule,
            a = t.description,
            i = t.name,
            o = l.a.createElement(r.b, { weight: 'bold' }, i)
          return l.a.createElement(d.a, {
            description: a,
            label: o,
            renderRightContent: function () {
              return l.a.createElement(v.a, { style: k.icon })
            },
            thumbnail: n,
          })
        },
        C = t('CXUS'),
        S = function (e) {
          var n = e.onReorder,
            t = e.renderBadge,
            a = e.rules
          return l.a.createElement(
            C.a,
            {
              onDragEnd: function (e) {
                if (e.destination) {
                  var t = (function (e, n, t) {
                    var a = Array.from(e),
                      l = a.splice(n, 1),
                      i = h()(l, 1)[0]
                    return a.splice(t, 0, i), a
                  })(a, e.source.index, e.destination.index)
                  n(t)
                }
              },
            },
            l.a.createElement(C.c, { droppableId: 'droppable' }, function (e, n) {
              return l.a.createElement(
                'div',
                g()({}, e.droppableProps, { ref: e.innerRef }),
                a.map(function (e, a) {
                  var i = e.rest_id
                  return l.a.createElement(
                    b.a,
                    { draggableId: i, index: a, isBeingDragged: n.draggingFromThisWith === i, key: i },
                    l.a.createElement(E, { badge: t(a + 1), rule: e }),
                  )
                }),
                e.placeholder,
              )
            }),
          )
        },
        F = t('C6f5'),
        I = t('X00g'),
        w = t('h0NW'),
        K = Object.freeze({ Default: 'Default', Pivot: 'Pivot', Reorder: 'Reorder' }),
        T = function (e, n) {
          var t = n.badgeStyle,
            a = n.enabled,
            i = n.theme,
            o = I.a.getCommunityUIColor(i)
          return l.a.createElement(
            c.a,
            { style: [x.badge, a && { backgroundColor: o }, t] },
            l.a.createElement(r.b, { align: 'center', color: 'white', weight: 'bold' }, e),
          )
        },
        x = _.a.create(function (e) {
          return {
            badge: {
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.infinite,
              justifyContent: 'center',
              overflow: 'hidden',
              height: e.spaces.space32,
              width: e.spaces.space32,
            },
            bottomMargin: { marginBottom: F.a },
          }
        })
      n.b = function (e) {
        var n = e.badgeStyle,
          t = e.displayType,
          a = void 0 === t ? K.Default : t,
          r = e.explanation,
          o = e.getPivotLink,
          s = e.headerContainerStyle,
          u = e.headerExplanationStyle,
          d = e.heading,
          p = e.limit,
          g = e.onReorder,
          f = e.ruleContainerStyle,
          h = e.rules,
          b = e.theme,
          v = e.withBottomMargin,
          _ = void 0 !== v && v,
          k = e.withHeader,
          E = void 0 === k || k,
          C = {
            theme: b,
            enabled: l.a.useContext(i.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            badgeStyle: n,
          },
          F = (function (e, n, t) {
            return (n ? e.slice(0, n) : e).map(function (e, n) {
              return { label: e.name, description: e.description, decoration: T(n + 1, t) }
            })
          })(h, p, C),
          I = function (e) {
            return T(e, C)
          }
        return F.length > 0
          ? l.a.createElement(
              c.a,
              { style: _ ? x.bottomMargin : null },
              E ? l.a.createElement(m, { containerStyle: s, explanation: r, explanationStyle: u, heading: d }) : null,
              a === K.Pivot && o
                ? l.a.createElement(y, { getPivotLink: o, renderBadge: I, rules: h })
                : a === K.Reorder && g
                ? l.a.createElement(S, { onReorder: g, renderBadge: I, rules: h })
                : l.a.createElement(w.a, { containerStyle: f, items: F }),
            )
          : null
      }
    },
    PMbW: function (e, n, t) {
      'use strict'
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
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (e.exports = l)
    },
    PbB6: function (e, n, t) {
      'use strict'
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
      ;(i.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (e.exports = i)
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
                      (p = {
                        alias: null,
                        args: null,
                        filters: null,
                        handle: 'user',
                        key: '',
                        kind: 'LinkedHandle',
                        name: 'result',
                      }),
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
                      (g = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                      u,
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
                  g,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'custom_banner_media',
                    plural: !1,
                    selections: (f = [
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
                    selections: f,
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
                              (h = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
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
                                            selections: (v = [
                                              (b = {
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
                                              (_ = {
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
                                            selections: v,
                                            type: 'TimelineRichTextHashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              _,
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
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'user_results',
                                                plural: !1,
                                                selections: (E = [
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
                                                          (k = {
                                                            alias: 'reason',
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'unavailable_reason',
                                                            storageKey: null,
                                                          }),
                                                          h,
                                                        ],
                                                        type: 'UserUnavailable',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ]),
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'TimelineRichTextUser',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              d,
                                              {
                                                alias: 'mention_results',
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'user_results',
                                                plural: !1,
                                                selections: E,
                                                storageKey: null,
                                              },
                                            ],
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
                                  b,
                                ],
                                storageKey: null,
                              },
                              k,
                            ],
                            type: 'UserUnavailable',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      p,
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
            id: 'fnFzFBvI9wbO88fLLL4J8Q',
            metadata: {},
            name: 'PrimaryContentQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(C.hash = '90ab0e63de690e9ae88ff94c2bcc61d6'), (e.exports = C)
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
      ;(l.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (e.exports = l)
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
        x = t('MWbm'),
        R = t('t62R'),
        L = d.a.a9ba79c0,
        M = [d.a.h5482c79, d.a.d5033a7a, d.a.ee8c43af],
        O = d.a.j24c37b2,
        A = function () {
          return r.a.createElement(
            x.a,
            { style: j.content },
            M.map(function (e) {
              return r.a.createElement(R.b, { color: 'gray700', key: e, size: 'body', style: j.item }, e)
            }),
          )
        },
        P = function () {
          return r.a.createElement(T.a, { Content: A, actionLabel: O, flag: K.i, headline: L, subtext: '' })
        },
        j = k.a.create(function (e) {
          return {
            content: { marginTop: '-'.concat(e.spaces.space48), marginBottom: e.spaces.space32 },
            item: { paddingTop: e.spaces.space16 },
          }
        }),
        H = r.a.memo(P),
        D = t('mjJ+'),
        B = t('iY63'),
        N = t('ACHU'),
        U = t('zCf4'),
        z = d.a.gfca5254,
        V = d.a.d94edeb4,
        q = d.a.j560c8ea,
        W = d.a.ab8089ea,
        X = d.a.h63a5c3b,
        J = r.a.createElement(B.a, null),
        Q = r.a.createElement(N.a, null),
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
                    icon: J,
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
                    icon: Q,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var n = [{ text: W, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return r.a.createElement(D.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: Z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            K = r.a.createElement(x.a, { style: Z.rightControlStyle }, k, I),
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
                    _ ? r.a.createElement(H, null) : null,
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
          return wl
        }),
        t.d(n, 'CommunityScreen', function () {
          return Kl
        })
      var a = t('yiKp'),
        l = t.n(a),
        i = (t('ho0z'), t('ERkP')),
        r = t.n(i),
        o = t('+Kfv'),
        s = t('v6aA'),
        c = t('/yvb'),
        u = t('Lsrn'),
        m = t('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(m.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [u.a.root, e.style],
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
      d.metadata = { width: 24, height: 24 }
      var y,
        p,
        g,
        f,
        h,
        b,
        v = d,
        _ = function (e) {
          var n = e.accessibilityLabel,
            t = e.behavioralEventContext,
            a = e.communityId,
            l = v
          return r.a.createElement(c.a, {
            accessibilityLabel: n,
            behavioralEventContext: t,
            hoverLabel: { label: n },
            icon: r.a.createElement(l, null),
            link: '/i/communities/'.concat(a, '/tools'),
            size: 'large',
            type: 'primaryText',
          })
        },
        k = r.a.memo(_),
        E = t('3XMw'),
        C = t.n(E),
        S = t('mjJ+'),
        F = t('zIWA'),
        I = t('SNyS'),
        w = t('ACHU'),
        K = C.a.e2429f56,
        T = C.a.df15d5b7,
        x = C.a.e48fbb01,
        R = C.a.c8c6c4e9,
        L = function (e) {
          var n = e.accessibilityLabel,
            t = e.behavioralEventContext,
            a = e.communityId,
            l = e.count,
            i = e.viewerHasModeratorAccess,
            o = r.a.useContext(s.a).featureSwitches.isTrue('c9s_report_community_enabled'),
            u = r.a.useCallback(
              function (e) {
                var n = []
                return (
                  i &&
                    n.push({
                      text: K,
                      subText: T({ count: l }),
                      Icon: F.a,
                      link: '/i/communities/'.concat(a, '/moderation/reported_tweets'),
                    }),
                  o &&
                    !i &&
                    n.push({
                      text: x,
                      Icon: F.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  n.push({ text: R, Icon: I.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  r.a.createElement(S.a, { items: n, onCloseRequested: e })
                )
              },
              [a, l, o, i],
            ),
            m = i ? v : w.a
          return r.a.createElement(c.a, {
            accessibilityLabel: n,
            behavioralEventContext: t,
            hoverLabel: { label: n },
            icon: r.a.createElement(m, null),
            renderMenu: u,
            size: 'large',
            type: 'primaryText',
          })
        },
        M = r.a.memo(L),
        O = (t('YWiL'), t('CVPS')),
        A = t.n(O),
        P = t('MWbm'),
        j = t('Znyr'),
        H = t('rHpw'),
        D = t('Ig1G'),
        B = C.a.h6beb5fa,
        N = C.a.e3f04700,
        U = C.a.h63a5c3b,
        z = C.a.dce5e1b3,
        V = C.a.c5d8c93d,
        q = { viewType: 'app_bar_button' },
        W = void 0 !== y ? y : (y = t('HNLm')),
        X = function (e) {
          var n = A()(W, e.community),
            t = n.join_requests_result,
            a = n.moderation,
            l = n.rest_id,
            i = n.role,
            o = 0
          'CommunityJoinRequests' === t.__typename && (o += t.pending_join_request_count),
            a && (o += a.tweet_case_count)
          var c = Object(D.c)(i),
            u = r.a.useContext(s.a).featureSwitches,
            m = u.isTrue('c9s_settings_enabled'),
            d = u.isTrue('c9s_moderation_enabled') && c,
            y = m && c,
            p = c ? (i === D.a.Admin ? z : V) : U,
            g = y
              ? r.a.createElement(k, { accessibilityLabel: p, behavioralEventContext: q, communityId: l })
              : r.a.createElement(M, {
                  accessibilityLabel: p,
                  behavioralEventContext: q,
                  communityId: l,
                  count: o,
                  viewerHasModeratorAccess: c,
                })
          return r.a.createElement(
            P.a,
            { style: Q.root },
            g,
            d && o > 0
              ? r.a.createElement(j.a, {
                  count: o,
                  style: Q.menuControlBadge,
                  truncatedCountFormatter: B,
                  unreadCountLabel: N,
                  withBorder: !1,
                })
              : null,
          )
        },
        J = r.a.memo(X),
        Q = H.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        G = t('Fr3L'),
        Y = t('IAZG'),
        Z = { context: 'CommunityAppBarButtonQuery' },
        $ = void 0 !== p ? p : (p = t('tSWT')),
        ee = function (e) {
          var n = e.communityId,
            t = Object(Y.a)($, { communityId: n })
          return r.a.createElement(J, { community: t.community })
        },
        ne = function (e) {
          return r.a.createElement(G.a, { errorConfig: Z }, r.a.createElement(ee, { communityId: e.communityId }))
        },
        te = r.a.memo(ne),
        ae = t('c/iP'),
        le = t('m3Bd'),
        ie = t.n(le),
        re = t('1Idg'),
        oe = t('eSoz'),
        se = t('G6rE'),
        ce = t('rxPX'),
        ue = t('0KEI'),
        me = t('o3oN'),
        de = t('/ekK'),
        ye = ['loggedInUser'],
        pe = function (e, n) {
          var t = re.c(e, n)
          return !t || Object(de.a)(e, t, 'mod_education_flag')
        },
        ge = Object(ce.a)()
          .propsFromState(function () {
            return {
              communityId: re.c,
              community: re.a,
              communityTheme: re.f,
              fetchStatus: re.b,
              hasShownModEducation: pe,
              membershipsFetchStatus: me.d,
              isCommunityMember: re.g,
              loggedInUser: se.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              t = ie()(e, ye)
            return l()({ screenName: n ? n.screen_name : void 0 }, t)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: oe.c.fetchOneIfNeeded,
              fetchCommunityMemberships: me.a,
              setFlag: de.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        fe = t('kGix'),
        he = t('feu+'),
        be = (t('yH/f'), t('WpDa')),
        ve = t('ZNT5'),
        _e = (t('1t7P'), t('jQ/y'), t('jV+4')),
        ke = t('t62R'),
        Ee = function (e) {
          var n,
            a = A()(void 0 !== g ? g : (g = t('pChJ')), e.community),
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
                  return r.a.createElement(_e.a, {
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
                ke.b,
                { color: 'gray700' },
                r.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, i),
              )
            : null
        },
        Ce = r.a.memo(Ee),
        Se = t('s8G+'),
        Fe = t('6vad'),
        Ie = t('csss'),
        we = t('h0NW'),
        Ke = t('0yYu'),
        Te = t('cOhU'),
        xe = t('DlMI'),
        Re = t('Lxak'),
        Le = t('a5gf'),
        Me = r.a.createElement(ke.b, { weight: 'bold' }),
        Oe = C.a.af7c11a9,
        Ae = C.a.db1b9462,
        Pe = C.a.ea49402d,
        je = r.a.createElement(C.a.I18NFormatMessage, { $i18n: 'he99cc29' }, r.a.cloneElement(Me, null, C.a.gedb877c)),
        He = C.a.fcef2921,
        De = C.a.c93dd2c8,
        Be = function (e) {
          var n = A()(void 0 !== f ? f : (f = t('1rMX')), e.community),
            a = Object(Se.a)('c9s_request_to_join_enabled'),
            l = r.a.useMemo(
              function () {
                var e,
                  t = function (e) {
                    return r.a.createElement(ke.b, null, e)
                  },
                  l = r.a.createElement(Ce, { community: n }),
                  i = n.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: Ue, label: t(Ae) },
                    CommunityOpenMembershipEducation: { decoration: ze, label: je, description: He },
                    CommunityRestrictedMembershipEducation: { decoration: qe, label: je, description: De },
                    CommunityVisibilityEducation: { decoration: ze, label: t(Pe) },
                    OriginationAttributionEducation: { decoration: Ve, label: l },
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
            r.a.createElement(Fe.b, { text: Oe }),
            Object(D.g)(n.role) && n.description ? r.a.createElement(Ie.a, { label: n.description }) : null,
            r.a.createElement(we.a, { containerStyle: Ne.containerStyle, items: l }),
            r.a.createElement(Ke.a, null),
          )
        },
        Ne = H.a.create(function (e) {
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
        Ue = r.a.createElement(Te.a, { style: Ne.icon }),
        ze = r.a.createElement(xe.a, { style: Ne.icon }),
        Ve = r.a.createElement(Re.a, { style: Ne.icon }),
        qe = r.a.createElement(Le.a, { style: Ne.icon }),
        We = r.a.memo(Be),
        Xe = t('fTQJ'),
        Je = (t('z84I'), t('PKbs')),
        Qe = t('1Xyu'),
        Ge = t('rC8y'),
        Ye = void 0 !== h ? h : (h = t('BX8b')),
        Ze = C.a.gfca5254,
        $e = C.a.ffd9cfe6,
        en = function (e) {
          var n = e.community,
            t = A()(Ye, n),
            a = t.rules,
            l = Object(Qe.a)(t),
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
                r.a.createElement(Fe.b, { text: Ze }),
                r.a.createElement(Je.b, {
                  badgeStyle: nn.badgeStyle,
                  headerContainerStyle: [nn.containerStyle, nn.headingContainerStyle],
                  headerExplanationStyle: nn.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: nn.ruleContainerStyle,
                  rules: i,
                  theme: l,
                }),
                a.length > 5
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(Ge.a, { link: '/i/communities/'.concat(t.rest_id, '/rules'), text: $e }),
                      ' ',
                      r.a.createElement(Ke.a, null),
                    )
                  : null,
              )
        },
        nn = H.a.create(function (e) {
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
        tn = r.a.memo(en),
        an = C.a.i9028824,
        ln = C.a.cc683fb9,
        rn = function (e) {
          var n = A()(void 0 !== b ? b : (b = t('+BRr')), e.community),
            a = r.a.useMemo(
              function () {
                return (
                  (e = n.rest_id),
                  Object(ve.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (n) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: be.a,
                  })
                )
                var e
              },
              [n.rest_id],
            )
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(We, { community: n }),
            r.a.createElement(tn, { community: n }),
            r.a.createElement(Xe.a, { loadingAccessibilityLabel: an, module: a, title: ln }),
          )
        },
        on = r.a.memo(rn),
        sn = (t('LW0h'), t('7x/C'), t('tVqn'), t('uFXj'), t('97Jx')),
        cn = t.n(sn),
        un = t('ddV6'),
        mn = t.n(un),
        dn = (t('7xRU'), t('KqXw'), t('WNMA'), t('egQk')),
        yn = t('li/m'),
        pn = function (e, n) {
          var t
          return (null === (t = n.location.state) || void 0 === t ? void 0 : t.community) || re.a(e, n)
        },
        gn = Object(ce.a)()
          .propsFromState(function () {
            return { community: pn, fetchStatus: re.b, isCommunityMember: re.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: yn.b,
              requestToJoin: oe.c.requestToJoin,
              fetchCommunityIfNeeded: oe.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        fn = t('MDbM'),
        hn = t('jHSc'),
        bn = t('5FtR'),
        vn = C.a.h4fbfa57,
        _n = C.a.ea8cfb1d,
        kn = C.a.dc1b14a1,
        En = { viewType: 'community' },
        Cn = gn(function (e) {
          var n,
            t = e.community,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            i = e.fetchStatus,
            s = e.isCommunityMember,
            u = e.join,
            m = e.match,
            d = e.onCommunityMembershipChange,
            y = e.onDismiss,
            p = e.requestToJoin,
            g = m.params.communityId,
            f =
              'ViewerRequestRequired' ===
              (null == t || null === (n = t.actions.join_action_result) || void 0 === n ? void 0 : n.reason)
          r.a.useEffect(function () {
            g && !t && i !== fn.a.LOADED && l(g).catch(a())
          })
          var h = r.a.useCallback(function (e) {
              return r.a.createElement(ke.b, { size: 'title4', weight: 'bold' }, kn({ communityName: e }))
            }, []),
            b = f ? _n : vn,
            v = r.a.useCallback(
              function () {
                if (t) {
                  var e = t.id_str
                  if (f) return void p(e).then(y).catch(a())
                  u(e).then(d).then(y).catch(a())
                }
              },
              [t, a, u, d, f, y, p],
            ),
            _ = r.a.useCallback(
              function () {
                return r.a.createElement(c.a, { onPress: v, size: 'small', type: 'brandFilled' }, b)
              },
              [b, v],
            )
          if (t) {
            var k = t.name,
              E = t.rules,
              C = t.theme
            return E && E.length && !s
              ? r.a.createElement(
                  o.a,
                  { behavioralEventContext: En },
                  r.a.createElement(
                    hn.b,
                    {
                      behavioralEventViewType: 'rules',
                      onBackClick: y,
                      rightControl: _(),
                      title: Object(dn.a)({ communityName: k }),
                    },
                    r.a.createElement(Je.b, {
                      badgeStyle: Sn.badgeStyle,
                      headerContainerStyle: Sn.containerStyle,
                      headerExplanationStyle: Sn.headerExplanationStyle,
                      heading: h(k),
                      rules: E,
                      theme: C,
                    }),
                  ),
                )
              : r.a.createElement(bn.a, { to: '/i/communities/'.concat(t.id_str) })
          }
          return i === fn.a.LOADED ? r.a.createElement(bn.a, { to: '/' }) : null
        }),
        Sn = H.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space16 },
            headerExplanationStyle: { marginTop: e.spaces.space8 },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        Fn = ['loggedInUser'],
        In = Object(ce.a)()
          .propsFromState(function () {
            return { community: re.a, loggedInUser: se.e.selectLoggedInUser, joinActionResultType: re.h }
          })
          .adjustStateProps(function (e) {
            var n = e.loggedInUser,
              t = ie()(e, Fn)
            return l()({ isProtectedUser: null == n ? void 0 : n.protected }, t)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: yn.b,
              requestToJoin: oe.c.requestToJoin,
              leave: yn.c,
            }
          }),
        wn = (t('ssJ/'), t('X8FW')),
        Kn = t('cHvH'),
        Tn = t('sgih'),
        xn = r.a.memo(function (e) {
          var n = Object(Kn.b)().windowWidth,
            t = e.children
          return n > H.a.theme.breakpoints.medium
            ? r.a.createElement(wn.b, { modalSize: wn.a.fixed }, t)
            : r.a.createElement(Tn.a, { type: 'full' }, t)
        }),
        Rn = t('CGyZ'),
        Ln = C.a.fad95333,
        Mn = function (e) {
          var n = e.offendingRule
          return r.a.createElement(
            P.a,
            null,
            n
              ? r.a.createElement(
                  P.a,
                  { style: On.offendingRule },
                  (function (e) {
                    return r.a.createElement(
                      C.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      r.a.createElement(ke.b, { weight: 'bold' }, C.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(n),
                )
              : null,
            r.a.createElement(ke.b, null, Ln),
          )
        },
        On = H.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        An = C.a.hafa07f2,
        Pn = C.a.fa94c9da,
        jn = C.a.c15bee31,
        Hn = C.a.i859676b,
        Dn = r.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          r.a.createElement(ke.b, { link: '/settings/audience_and_tagging' }, C.a.e77dfaf0),
        ),
        Bn = C.a.fc2a5c92,
        Nn = C.a.bf7bdb60,
        Un = C.a.h27d695f,
        zn = C.a.b02360f5,
        Vn = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        qn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        Wn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var Xn,
        Jn,
        Qn = t('zCf4'),
        Gn = ['community', 'communityId', 'match'],
        Yn = C.a.e6057013,
        Zn = C.a.b533478f,
        $n = { follow: C.a.b171d7c4, following: C.a.aa7ae3f6, unfollow: C.a.bb1d57b6 },
        et = C.a.j24c37b2,
        nt = function (e) {
          var n = r.a.useState(void 0),
            t = mn()(n, 2),
            a = t[0],
            i = t[1],
            o = r.a.useState(!1),
            s = mn()(o, 2),
            u = s[0],
            m = s[1],
            d = { history: Object(Qn.f)(), location: Object(Qn.g)(), match: Object(Qn.i)() },
            y = Object(Se.a)('c9s_request_to_join_enabled'),
            p = e.community,
            g = e.createLocalApiErrorHandler,
            f = e.isProtectedUser,
            h = e.join,
            b = e.leave,
            v = e.onCommunityMembershipChange,
            _ = e.requestToJoin,
            k = p.actions,
            E = k.join_action_result,
            C = k.leave_action_result,
            S = p.id_str,
            F = p.name,
            I = p.role,
            w = Object(D.g)(I),
            K = E.reason === Wn.ViewerJoinRequestRequired && y,
            T = E.reason === Wn.ViewerRequestPending && y,
            x = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !w } },
            R = r.a.useCallback(
              function () {
                var e = p.rules,
                  n = p.viewerViolatedRule,
                  t = (function (e, n, t, a) {
                    var l = e.__typename,
                      i = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      s = function (e) {
                        return { canAction: !1, message: e }
                      },
                      c = s({ headline: Bn, text: Nn })
                    switch (l) {
                      case Vn.joinAvailable:
                        return o()
                      case Vn.joinUnavailable:
                        switch (i) {
                          case Wn.ViewerIsRemoved:
                            return s({
                              headline: jn,
                              text: r.a.createElement(Mn, { offendingRule: null == t ? void 0 : t.name }),
                            })
                          case Wn.ViewerNotInvited:
                            return s({ headline: An, text: Pn })
                          case Wn.ViewerIsProtected:
                            return n ? s({ headline: Hn, text: Dn }) : o()
                          case Wn.ViewerJoinRequestRequired:
                            return a ? o() : c
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(E, f, n, y),
                  a = t.canAction,
                  l = t.message
                !a && l && i(l), a && (e && e.length > 0 ? m(!0) : K ? _(S).catch(g({})) : h(S).then(v).catch(g({})))
              },
              [p, S, g, f, y, h, K, E, _, v],
            ),
            L = r.a.useCallback(
              function () {
                var e = (function (e) {
                    var n,
                      t = e.__typename,
                      a = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      i = l({ headline: Bn, text: Nn })
                    switch (t) {
                      case Vn.leaveAvailable:
                        return { canAction: !0, message: n }
                      case Vn.leaveUnavailable:
                        switch (a) {
                          case qn.ViewerIsSoleAdmin:
                            return l({ headline: Un, text: zn })
                          default:
                            return i
                        }
                      default:
                        return i
                    }
                  })(C),
                  n = e.canAction,
                  t = e.message
                !n && t && i(t), n && b(S).then(v).catch(g({}))
              },
              [S, g, b, C, v],
            ),
            M = r.a.useCallback(function () {
              i(void 0)
            }, []),
            O = r.a.useCallback(function () {
              m(!1)
            }, []),
            A = r.a.useMemo(
              function () {
                return K ? l()(l()({}, $n), {}, { follow: Yn }) : $n
              },
              [K],
            )
          return r.a.createElement(
            P.a,
            { style: tt.button },
            u
              ? r.a.createElement(
                  xn,
                  null,
                  r.a.createElement(Cn, cn()({ communityId: S, onCommunityMembershipChange: v, onDismiss: O }, d)),
                )
              : null,
            T
              ? r.a.createElement(c.a, { disabled: !0, type: 'onMediaOutlined' }, Zn)
              : r.a.createElement(Rn.a, {
                  behavioralEventContext: x,
                  buttonText: A,
                  isFollowing: w,
                  name: F,
                  onFollow: R,
                  onUnfollow: L,
                  type: 'community',
                }),
            a
              ? r.a.createElement(he.a, {
                  actionLabel: et,
                  graphicDisplayMode: 'none',
                  headline: a.headline,
                  onAction: M,
                  onClose: M,
                  subtext: a.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        tt = H.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        at = In(function (e) {
          var n = e.community,
            t = (e.communityId, e.match, ie()(e, Gn))
          return n ? r.a.createElement(nt, cn()({ community: n }, t)) : null
        }),
        lt = t('YeIG'),
        it = t('MjKK'),
        rt = t('TIdA'),
        ot = t('A91F'),
        st = t('9Xij'),
        ct = void 0 !== Xn ? Xn : (Xn = t('fK4d')),
        ut = function (e) {
          var n = A()(ct, e.community),
            t = Object(it.a)(n),
            a = H.a.theme.aspectRatios.communityBanner
          return t && !Object(lt.a)(t)
            ? r.a.createElement(
                P.a,
                null,
                r.a.createElement(rt.a, {
                  accessibilityLabel: '',
                  aspectMode: ot.a.exact(a),
                  backgroundColor: H.a.theme.colors.gray300,
                  image: t,
                }),
              )
            : r.a.createElement(st.a, { ratio: a }, r.a.createElement(P.a, { style: mt.placeholderImageContainer }))
        },
        mt = H.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        dt = r.a.memo(ut),
        yt = t('K1iM'),
        pt = t.n(yt),
        gt = (t('2G9S'), t('X00g')),
        ft = t('n4Eu'),
        ht = { red: 0, green: 0, blue: 0 },
        bt = '10px',
        vt = H.a.create(function (e) {
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
        _t = function (e) {
          var n = e.children,
            a = e.community,
            l = A()(void 0 !== Jn ? Jn : (Jn = t('OBBW')), a),
            i = Object(Qe.a)(l),
            o = Object(it.a)(l).palette,
            s = []
          if (o) {
            var c,
              u = pt()(o)
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
          var d = Object(Se.a)('c9s_ui_colors_enabled_rweb')
          return r.a.createElement(
            P.a,
            null,
            r.a.createElement(P.a, { style: vt.descriptionContainer }, n),
            r.a.createElement(P.a, { style: [H.a.absoluteFill, vt.backgroundColorWhite] }),
            r.a.createElement(P.a, {
              style: [
                H.a.absoluteFill,
                vt.backgroundColor,
                (function (e, n) {
                  if (d) return gt.a.getCommunityGradientStyle(n, bt)
                  var t = e && ft.a.get(e),
                    a = t ? (null == t ? void 0 : t.rgb) : ht,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    i = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(bt, ', ')
                      .concat(i, ' ')
                      .concat(bt, ' 100%)'),
                  }
                })(s, i),
              ],
            }),
          )
        },
        kt = t('ogGF'),
        Et = t('CaKu'),
        Ct = t('1YZw'),
        St = Object(ce.a)().propsFromActions(function () {
          return { addToast: Ct.b }
        }),
        Ft = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(m.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [u.a.root, e.style],
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
      Ft.metadata = { width: 24, height: 24 }
      var It,
        wt,
        Kt,
        Tt,
        xt,
        Rt = Ft,
        Lt = t('I/9y'),
        Mt = t('pwey'),
        Ot = C.a.bec3b8f9,
        At = { viewType: 'share_community' },
        Pt = C.a.f88553c8,
        jt = { viewType: 'copy_link' },
        Ht = { viewType: 'invite_members' },
        Dt = C.a.b139b549,
        Bt = C.a.e05c00b4,
        Nt = r.a.createElement(Rt, null),
        Ut = H.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        zt = St(function (e) {
          var n = A()(void 0 !== It ? It : (It = t('X/n0')), e.community),
            a = e.addToast,
            l = n.rest_id,
            i = n.role,
            o = Object(D.g)(i),
            s = r.a.useCallback(
              function (e) {
                Et.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), a({ text: Pt })
              },
              [a, l],
            ),
            u = r.a.useMemo(
              function () {
                return function (e) {
                  var n = []
                  return (
                    n.push({ behavioralEventContext: jt, text: Bt, Icon: Lt.a, onClick: s }),
                    o &&
                      n.push({
                        behavioralEventContext: Ht,
                        text: Dt,
                        Icon: Mt.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    r.a.createElement(S.a, { items: n, onCloseRequested: e })
                  )
                }
              },
              [o, l, s],
            )
          return r.a.createElement(c.a, {
            accessibilityLabel: Ot,
            behavioralEventContext: At,
            icon: Nt,
            renderMenu: u,
            style: Ut.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        Vt = r.a.memo(zt),
        qt = C.a.hb9400db,
        Wt = function (e) {
          var n = e.community,
            a = A()(void 0 !== wt ? wt : (wt = t('ldL/')), n),
            l = a.description,
            i = a.role,
            o = r.a.useState(!1),
            s = mn()(o, 2),
            c = s[0],
            u = s[1],
            m = r.a.useState(!1),
            d = mn()(m, 2),
            y = d[0],
            p = d[1],
            g = r.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), u(!c)
              },
              [c],
            )
          return !l || Object(D.g)(i)
            ? null
            : r.a.createElement(
                P.a,
                { style: Xt.description },
                r.a.createElement(ke.b, { color: 'white', getTextOverflow: p, numberOfLines: c ? void 0 : 2 }, l),
                !c && y ? r.a.createElement(ke.b, { color: 'white', onPress: g, weight: 'bold' }, qt) : null,
              )
        },
        Xt = H.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Jt = r.a.memo(Wt),
        Qt = t('ja7Y'),
        Gt = t('MtXG'),
        Yt = C.a.d58baa7e,
        Zt = function (e) {
          var n = e.community,
            a = A()(void 0 !== Kt ? Kt : (Kt = t('WuQQ')), n).member_count,
            l = void 0 === a ? 0 : a,
            i = Yt(l)
          return r.a.createElement(
            Gt.a.Group,
            null,
            r.a.createElement(
              Gt.a,
              { onMedia: !0 },
              r.a.createElement(
                ke.b,
                { color: 'white' },
                r.a.createElement(
                  C.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  r.a.createElement(Gt.a.Value, null, C.a.ibd0106d({ formattedCount: i })),
                  r.a.createElement(Gt.a.Label, null, C.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        $t = t('cm6r'),
        ea = t('I4+6').a.generate({
          backgroundColor: H.a.theme.colors.transparent,
          color: H.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        na = H.a.create(function (e) {
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
        ta = function (e) {
          var n = e.community,
            a = A()(void 0 !== Tt ? Tt : (Tt = t('weg/')), n),
            l = a.rest_id
          return r.a.createElement(
            $t.a,
            { interactiveStyles: ea, link: '/i/communities/'.concat(l, '/members'), style: na.membersContainer },
            r.a.createElement(Qt.a, { community: a, style: na.rightSpace }),
            r.a.createElement(Zt, { community: a }),
          )
        },
        aa = t('yoO3'),
        la = t('k/OQ'),
        ia = C.a.a0e3ece4,
        ra = C.a.ha8209bb,
        oa = C.a.d601fc2f,
        sa = C.a.b721eb37,
        ca = { viewType: 'description' },
        ua = { viewType: 'facepiles_with_count' },
        ma = function (e) {
          var n = A()(void 0 !== xt ? xt : (xt = t('+BRT')), e.community),
            a = n.rest_id,
            l = Object(Se.a)('c9s_participation_enabled'),
            i = Object(Se.a)('c9s_timelines_ranking_enabled'),
            s = Object(Se.a)('c9s_share_community_enabled'),
            c = Object(Qn.i)(),
            u = r.a.useMemo(
              function () {
                var e = [
                  { to: '/i/communities/'.concat(a), label: ra, key: ra },
                  { to: '/i/communities/'.concat(a, '/latest'), label: oa, key: oa },
                  { to: '/i/communities/'.concat(a, '/about'), label: sa, key: sa },
                ]
                return r.a.createElement(la.a, {
                  accessibilityLabel: ia,
                  links: i
                    ? e
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== oa
                        })
                      })(e),
                })
              },
              [a, i],
            )
          return r.a.createElement(
            aa.a,
            { behavioralEventViewType: 'timeline' },
            r.a.createElement(
              P.a,
              { style: da.container },
              r.a.createElement(
                P.a,
                null,
                r.a.createElement(dt, { community: n }),
                r.a.createElement(
                  o.a,
                  { behavioralEventContext: ca },
                  r.a.createElement(
                    _t,
                    { community: n },
                    r.a.createElement(
                      ke.b,
                      { color: 'white', size: 'title2', style: da.name, weight: 'bold' },
                      n.name.trim(),
                    ),
                    r.a.createElement(Jt, { community: n }),
                    r.a.createElement(
                      o.a,
                      { behavioralEventContext: ua },
                      r.a.createElement(
                        P.a,
                        { style: da.bottomContainer },
                        r.a.createElement(ta, { community: n }),
                        r.a.createElement(
                          P.a,
                          { style: da.buttons },
                          s
                            ? r.a.createElement(Vt, { community: n })
                            : r.a.createElement(kt.a, {
                                community: n,
                                style: da.inviteButton,
                                type: 'onMediaOutlined',
                              }),
                          l
                            ? r.a.createElement(at, {
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
        da = H.a.create(function (e) {
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
        ya = r.a.memo(ma),
        pa = t('/de5')
      function ga() {
        var e = Object(Qn.f)(),
          n = Object(Qn.g)(),
          t = Object(Qn.i)()
        return r.a.createElement(pa.b, { history: e, location: n, match: t })
      }
      var fa = t('FIs5'),
        ha = t('EUHl'),
        ba = t('7BdX'),
        va = C.a.c18e3a3e,
        _a = C.a.d68146c0,
        ka = C.a.h5245afa,
        Ea = C.a.f05dbeff,
        Ca = function (e) {
          var n = e.module,
            t = r.a.useCallback(function () {
              return r.a.createElement(fa.a, { buttonType: 'brandOutlined', header: va, message: _a })
            }, [])
          return r.a.createElement(
            aa.a,
            { behavioralEventViewType: 'tweets' },
            r.a.createElement(Xe.a, {
              loadingAccessibilityLabel: Ea,
              module: n,
              newTweetsPillMode: ha.a.CLIENT,
              prerollDisplayLocation: ba.c.OTHER,
              refreshControl: null,
              renderEmptyState: t,
              title: ka,
            }),
          )
        },
        Sa = t('mw9i'),
        Fa =
          (t('MvUL'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(m.a)(
              'svg',
              l()(
                l()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [u.a.root, e.style],
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
      Fa.metadata = { width: 24, height: 24 }
      var Ia,
        wa = Fa,
        Ka = t('wpLu'),
        Ta = C.a.bf359e0d,
        xa = C.a.e8fcdd3a,
        Ra = C.a.b37d580e,
        La = C.a.cafca4b2,
        Ma = C.a.ea3b38fa,
        Oa = C.a.jd667130,
        Aa = C.a.ca7eeabf,
        Pa = C.a.acae4034,
        ja = C.a.e2186ee2,
        Ha = C.a.j24c37b2,
        Da = function (e) {
          var n = A()(void 0 !== Ia ? Ia : (Ia = t('2rr8')), e.community),
            a = Object(Qn.f)(),
            l = r.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(n.rest_id, '/'))
              },
              [a, n.rest_id],
            ),
            i = r.a.createElement(
              P.a,
              { accessibilityRole: 'list', style: Ba.rulesContainer },
              n.rules.map(function (e) {
                return r.a.createElement(
                  ke.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Ba.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === n.access,
            s = o ? Ma : Ra,
            c = o ? Oa : La
          return r.a.createElement(
            he.a,
            {
              actionLabel: Ha,
              graphicDisplayMode: 'none',
              headline: Ta,
              isFullHeightOnMobile: !0,
              onAction: l,
              subtext: xa,
            },
            r.a.createElement(
              P.a,
              { style: Ba.infoItemsContainer },
              r.a.createElement(we.a, {
                containerStyle: Ba.itemContainer,
                items: [
                  { label: s, description: c, decoration: r.a.createElement(wa, { style: Ba.decorationContainer }) },
                  { label: Aa, decoration: r.a.createElement(Ka.a, { style: Ba.decorationContainer }), description: i },
                  { label: Pa, description: ja, decoration: r.a.createElement(v, { style: Ba.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        Ba = H.a.create(function (e) {
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
        Na = r.a.memo(Da),
        Ua = t('dwig'),
        za = t('0+qk'),
        Va = t('L/9f'),
        qa = t('3G7m'),
        Wa = t('7JQg'),
        Xa =
          (t('FtFR'),
          t('hBvt'),
          Object(ce.a)()
            .propsFromState(function () {
              return { flags: de.b }
            })
            .propsFromActions(function () {
              return { setFlag: de.c }
            })),
        Ja = t('hOZg'),
        Qa = t('WtWS'),
        Ga = t('0ULw'),
        Ya = C.a.c66b37f9,
        Za = C.a.g2768d0e,
        $a = C.a.b192b58b,
        el = C.a.gd30278f,
        nl = C.a.cbdddb09,
        tl = C.a.h5890b1a,
        al = [
          {
            flag: 'setup_clicked_rules',
            title: C.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: C.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: C.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: C.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(el, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        ll = r.a.memo(function (e) {
          var n = e.communityId,
            t = e.flags,
            a = e.setFlag,
            l = r.a.useContext(s.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            i = Object(Qn.f)(),
            o = r.a.useCallback(
              function () {
                a(n, 'setup_show_checklist', !1)
              },
              [n, a],
            )
          if (!t.setup_show_checklist || !l) return null
          var u = function (e) {
              a(n, e.flag, !0).then(function () {
                i.push(e.link(n))
              })
            },
            m = function (e, n) {
              13 === n.keyCode && u(e)
            }
          return r.a.createElement(
            P.a,
            { style: il.wrapper },
            r.a.createElement(
              P.a,
              { style: il.header },
              r.a.createElement(ke.b, { size: 'title3', weight: 'bold' }, Ya),
              r.a.createElement(c.a, {
                accessibilityLabel: $a,
                icon: r.a.createElement(Ja.a, { style: il.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: il.dismiss,
                type: 'brandText',
              }),
            ),
            r.a.createElement(ke.b, { style: il.subtext }, Za),
            r.a.createElement(
              P.a,
              { accessibilityRole: 'list', style: il.list },
              al.map(function (e) {
                var n = Boolean(t[e.flag])
                return r.a.createElement(
                  P.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !n,
                    key: e.flag,
                    onClick: n ? void 0 : u.bind(null, e),
                    onKeyPress: n ? void 0 : m.bind(null, e),
                    style: [il.entry, n ? il.completedEntry : il.uncompletedEntry],
                  },
                  r.a.createElement(ke.b, { weight: 'bold' }, e.title),
                  n
                    ? r.a.createElement(Qa.a, { accessibilityLabel: nl, style: il.iconCompleted })
                    : r.a.createElement(Ga.a, { accessibilityLabel: tl, style: il.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        il = H.a.create(function (e) {
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
        rl = Xa(ll),
        ol = (t('jQ3i'), t('x4t0'), t('8Lfv')),
        sl = t('uDfI'),
        cl = t('LI/a')
      function ul(e) {
        var n = Object(sl.c)(),
          t = Object(ue.useCreateLocalApiErrorHandler)('COMMUNITIES_TWEETS'),
          a = Object(Se.a)('c9s_timelines_ranking_enabled'),
          l = r.a.useMemo(
            function () {
              return Object(cl.a)(e)
            },
            [e],
          ),
          i = r.a.useMemo(
            function () {
              return a ? Object(cl.b)(e) : l
            },
            [l, a, e],
          ),
          o = (function (e) {
            var n,
              t = 'PUSH' === Object(Qn.f)().action,
              a = Object(Qn.g)().pathname,
              l = r.a.useRef(),
              i =
                (null == a ? void 0 : a.includes(e)) &&
                (null === (n = l.current) || void 0 === n ? void 0 : n.includes(e))
            return (l.current = a), t && !i
          })(e),
          s = r.a.useCallback(
            function () {
              a && n(Object(ol.a)(i)).catch(t({})), n(Object(ol.a)(l)).catch(t({}))
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
      var ml,
        dl = t('QRqA'),
        yl = (Object.freeze({ Home: 'home', Latest: 'latest' }), { page: 'community', section: 'home' }),
        pl = { page: 'community', section: 'latest' },
        gl = { page: 'community', section: 'tweets' },
        fl = void 0 !== ml ? ml : (ml = t('R0yc')),
        hl = function (e) {
          var n = e.communityId,
            t = e.composeOptions,
            a = Object(Y.a)(fl, { communityId: n }).community,
            l = Object(Se.a)('c9s_participation_enabled'),
            i = ul(n),
            o = i.homeModule,
            s = i.latestModule,
            c = i.refreshModules,
            u = Object(Se.a)('c9s_timelines_ranking_enabled'),
            m = Object(Qn.f)(),
            d = Object(Qn.g)(),
            y = a.role === D.a.Admin && void 0 !== d.query.show_creation_summary,
            p = Object(D.g)(a.role) && l,
            g = Object(Qe.a)(a),
            f = r.a.useMemo(
              function () {
                return { canJoinCommunity: 'CommunityJoinAction' === a.actions.join_action_result.__typename, theme: g }
              },
              [g, a.actions.join_action_result],
            ),
            h = r.a.useMemo(
              function () {
                return p
                  ? r.a.createElement(za.a, {
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
            Ua.a,
            { component: Sa.a, fab: h },
            r.a.createElement(dl.a, { forSingleCommunity: f }),
            y && r.a.createElement(Na, { community: a }),
            r.a.createElement(ya, { community: a, onCommunityMembershipChange: c }),
            r.a.createElement(
              Qn.d,
              null,
              r.a.createElement(
                Qn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/') },
                r.a.createElement(rl, { communityId: n }),
                r.a.createElement(Wa.c, { namespace: u ? yl : gl }, r.a.createElement(Ca, { module: o })),
              ),
              r.a.createElement(
                Qn.b,
                { path: '/i/communities/'.concat(n, '/latest') },
                r.a.createElement(rl, { communityId: n }),
                r.a.createElement(Wa.c, { namespace: u ? pl : gl }, r.a.createElement(Ca, { module: s })),
              ),
              r.a.createElement(
                Qn.b,
                { exact: !0, path: '/i/communities/'.concat(n, '/about') },
                r.a.createElement(on, { community: a }),
              ),
            ),
          )
        },
        bl = { page: 'community', section: 'primaryContent' },
        vl = {
          type: 'CustomRetry',
          content: function () {
            return r.a.createElement(ga, null)
          },
        },
        _l = function (e) {
          return r.a.createElement(
            Wa.c,
            { namespace: bl },
            r.a.createElement(
              aa.a,
              { behavioralEventViewType: 'Community' },
              r.a.createElement(
                Va.a,
                { errorConfig: { context: 'CommunityScreen' }, fallback: vl },
                r.a.createElement(qa.a, null, r.a.createElement(hl, e)),
              ),
            ),
          )
        },
        kl = t('VS6U'),
        El = { type: 'serversideContextKey', serversideContextType: 'community' },
        Cl = C.a.a7c2e06c,
        Sl = C.a.j24c37b2,
        Fl = C.a.a94092a1,
        Il = C.a.i1fda797,
        wl = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        Kl = function (e) {
          var n = e.community,
            t = e.communityId,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            s = e.fetchCommunityMemberships,
            c = e.hasShownModEducation,
            u = e.history,
            m = e.isCommunityMember,
            d = e.membershipsFetchStatus,
            y = e.screenName,
            p = e.setFlag,
            g = Object(Se.a)('c9s_participation_enabled'),
            f = Object(Se.a)('c9s_edit_moderators_enabled'),
            h = r.a.useCallback(
              function () {
                t && i(t).catch(a({})), d === fe.a.NONE && s().catch(a())
              },
              [d, i, t, s, a],
            )
          r.a.useEffect(
            function () {
              h()
            },
            [h],
          )
          var b = r.a.useCallback(
              function () {
                t && p(t, 'mod_education_flag', !0)
              },
              [t, p],
            ),
            v = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, El), {}, { serversideContextId: t || '' }), viewType: 'community' }
              },
              [t],
            ),
            _ = r.a.useMemo(
              function () {
                return wl(t)
              },
              [t],
            ),
            k = null == n ? void 0 : n.name,
            E = null == n ? void 0 : n.role,
            C = !!m && g,
            S = f && E === D.a.Moderator && !c,
            F = r.a.useMemo(
              function () {
                return r.a.createElement(te, { communityId: t || '' })
              },
              [t],
            ),
            I = r.a.useMemo(
              function () {
                return r.a.createElement(ae.a, { communityId: t || '' })
              },
              [t],
            ),
            w = r.a.useMemo(
              function () {
                return r.a.createElement(_l, { communityId: t || '', composeOptions: _ })
              },
              [t, _],
            )
          return t
            ? r.a.createElement(
                o.a,
                { behavioralEventContext: v },
                r.a.createElement(kl.a, {
                  backLocation: y && '/'.concat(y, '/communities'),
                  composeOptions: _,
                  documentTitle: k ? Cl({ communityName: k }) : '',
                  history: u,
                  primaryContent: w,
                  rightControl: F,
                  sidebarContent: I,
                  title: k || null,
                  withTweetButton: C,
                }),
                S
                  ? r.a.createElement(he.a, {
                      actionLabel: Sl,
                      graphicDisplayMode: 'none',
                      headline: Fl,
                      onAction: b,
                      onClose: b,
                      subtext: Il,
                      withCloseButton: !0,
                    })
                  : null,
              )
            : null
        },
        Tl = ge(Kl)
      n.default = Tl
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
        x = b.a.c9d56b71,
        R = b.a.fc2a5c92,
        L = b.a.c1ad5a11,
        M = b.a.f713fbd1,
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
            j = s.a.useState(''),
            H = r()(j, 2),
            D = H[0],
            B = H[1],
            N = s.a.useState(''),
            U = r()(N, 2),
            z = U[0],
            V = U[1],
            q = s.a.useState(null),
            W = r()(q, 2),
            X = W[0],
            J = W[1],
            Q = s.a.useCallback(function (e, n) {
              B(e), p(n)
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
                J(null),
                  t(D, ne())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var n = null == e ? void 0 : e.normalized.result
                        'string' == typeof n && a.replace('/i/communities/'.concat(n, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && J(e)
                    })
                    .catch(function (e) {
                      J({ error: 'GraphQL error', reason: e })
                    })
              },
              [D, t, ne, a],
            )
          if (null == n || !n.create) return s.a.createElement(_.a, { to: '/home' })
          var ae = s.a.createElement(C.a, { disabled: A, onClick: te, size: 'small', type: 'brandFilled' }, K),
            le = X
              ? s.a.createElement(
                  E.a,
                  { style: P.error },
                  s.a.createElement(S.a, { Icon: v.a, headline: R, text: L, type: 'danger' }),
                )
              : void 0
          return s.a.createElement(
            c.a,
            { behavioralEventContext: O },
            s.a.createElement(
              f.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: P.root,
                history: a,
                rightControl: ae,
                title: T,
              },
              s.a.createElement(
                s.a.Fragment,
                null,
                le,
                s.a.createElement(F.b, { color: 'gray700', style: P.text }, x),
                s.a.createElement(u.a, { autoFocus: !0, communityName: D, onChange: Q }),
                s.a.createElement(m.a, { communityPurpose: z, onChange: G }),
                i
                  ? s.a.createElement(
                      s.a.Fragment,
                      null,
                      s.a.createElement(F.b, { size: 'headline2', style: P.membership, weight: 'bold' }, M),
                      s.a.createElement(w.d, { hideInvitePolicy: !0, setters: ee, state: $ }),
                    )
                  : null,
              ),
            ),
          )
        }),
        P = I.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
            membership: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 },
          }
        }),
        j = g(A)
      n.default = j
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
            l = e.userId,
            i = e.viewerRole
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
          var r = a.role,
            o = a.user,
            s = o.id,
            c = o.screen_name
          return u.a.createElement(g.a, {
            communityId: n,
            communityRole: r,
            recordId: s,
            screenName: c,
            userId: l,
            viewerRole: i,
          })
        }),
        _ = t('4e/K'),
        k = t('Ig1G'),
        E = t('GZwR'),
        C = y.a.cf4898a0,
        S = [E.a.CommunityMembers]
      function F(e) {
        var n = u.a.useContext(m.a).featureSwitches,
          t = n.isTrue('c9s_members_list_search_enabled'),
          a = n.isTrue('c9s_remove_member_list_enabled'),
          i = e.community,
          o = e.communityId,
          c = e.onIsSearchingChange,
          d = null == i ? void 0 : i.role,
          y = u.a.useState(!1),
          p = s()(y, 2),
          g = p[0],
          f = p[1],
          h = u.a.useState(''),
          b = s()(h, 2),
          F = b[0],
          w = b[1],
          K = u.a.useState({}),
          T = s()(K, 2),
          x = T[0],
          R = T[1],
          L = u.a.useCallback(
            function (e, n) {
              R(function (t) {
                return r()(r()({}, t), {}, l()({}, e, n))
              })
            },
            [R],
          ),
          M = u.a.useCallback(
            function () {
              f(!0), c(!0)
            },
            [c],
          ),
          O = u.a.useCallback(
            function (e) {
              w(e)
              var n = !!e
              c(n), f(n)
            },
            [c],
          ),
          A = u.a.useCallback(
            function () {
              F || (c(!1), f(!1))
            },
            [c, F],
          )
        if (!o) return null
        return t && (d === k.a.Admin || (a && d === k.a.Moderator))
          ? u.a.createElement(_.default, {
              alwaysOpen: g,
              communityId: o,
              filter: S,
              getUserDisplayNameLabel: function (e) {
                if ('user' === e.type) {
                  var n = e.data.id_str,
                    t = x[n]
                  if (t) return Object(k.d)(t.role)
                }
              },
              inputStyle: I.textInput,
              isModal: !0,
              onDismiss: A,
              onFocus: M,
              onQueryChange: O,
              placeholder: C,
              renderUserDecoration: function (e) {
                var n = e.userId
                return d
                  ? u.a.createElement(v, { communityId: o, onCommunityRoleChange: L, userId: n, viewerRole: d })
                  : null
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
    VeiK: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return y
      })
      var a,
        l = t('ERkP'),
        i = t.n(l),
        r = t('oUUt'),
        o = (t('YWiL'), t('TEoO')),
        s = t('Fr3L'),
        c = t('+R/6'),
        u = t('DQzJ'),
        m = { context: 'members' },
        d = void 0 !== a ? a : (a = t('cI4y')),
        y = function (e) {
          return e && Object(r.d)(e, 'CommunityMembers_Query_members_slice', { count: 20 })
        },
        p = function (e) {
          return e.__id
        },
        g = function (e) {
          var n = e.communityId,
            t = e.renderEmptyState,
            a = e.viewerRole,
            l = Object(u.a)(d, { communityId: n }),
            r = l.data,
            s = l.fetchNext,
            m = r.community.members_slice.items_results
          return i.a.createElement(o.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(n),
            identityFunction: p,
            items: m,
            noItemsRenderer: t,
            onNearEnd: s,
            renderer: function (e) {
              return i.a.createElement(c.a, { communityId: n, userResult: e, viewerRole: a })
            },
          })
        }
      n.a = function (e) {
        return i.a.createElement(s.a, { errorConfig: m }, i.a.createElement(g, e))
      }
    },
    Vnwa: function (e, n, t) {
      'use strict'
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
              { defaultValue: null, kind: 'LocalArgument', name: 'invitesPolicy' },
              { defaultValue: null, kind: 'LocalArgument', name: 'joinPolicy' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_membershipSettings_Mutation',
            selections: [
              {
                alias: null,
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'invites_policy', variableName: 'invitesPolicy' },
                  { kind: 'Variable', name: 'join_policy', variableName: 'joinPolicy' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_put',
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
                      { args: null, kind: 'FragmentSpread', name: 'MemberRequestsPivot_community' },
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
                    type: 'CommunityMembershipSettingsPutError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsPutActionUnavailable',
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
            name: 'edit_membershipSettings_Mutation',
            selections: [
              {
                alias: null,
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_put',
                plural: !1,
                selections: [
                  i,
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
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          c,
                        ],
                        storageKey: null,
                      },
                      { alias: 'communityId', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
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
                                kind: 'ScalarField',
                                name: 'pending_join_request_count',
                                storageKey: null,
                              },
                              r,
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
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'QNRnHKALhstff-midG3p7Q',
            metadata: {},
            name: 'edit_membershipSettings_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '56906dfa2208affeb53fdbba7a29773d'), (e.exports = y)
    },
    WWTc: function (e, n, t) {
      'use strict'
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
      ;(r.hash = '9b955902020d0baa1431bc7848010386'), (e.exports = r)
    },
    WuQQ: function (e, n, t) {
      'use strict'
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
      e.exports = a
    },
    'X/n0': function (e, n, t) {
      'use strict'
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
      e.exports = a
    },
    XiYe: function (e, n, t) {
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
    atLU: function (e, n, t) {
      'use strict'
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
      e.exports = a
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
    'c/iP': function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        l = t.n(a),
        i = t('es0u'),
        r = t('VrFO'),
        o = t.n(r),
        s = t('Y9Ll'),
        c = t.n(s),
        u = t('5Yy7'),
        m = t.n(u),
        d = t('2VqO'),
        y = t.n(d),
        p = (t('ho0z'), t('PKbs')),
        g = t('egQk'),
        f = t('eSoz'),
        h = t('rxPX'),
        b = t('0KEI'),
        v = function (e, n) {
          var t = n.communityId
          return t ? f.c.select(e, t) : void 0
        },
        _ = Object(h.a)()
          .propsFromState(function () {
            return { community: v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: f.c.fetchOneIfNeeded,
            }
          }),
        k = t('3XMw'),
        E = t.n(k),
        C = t('MWbm'),
        S = t('6vad'),
        F = t('rC8y'),
        I = t('rHpw'),
        w = E.a.d228a9a0,
        K = (function (e) {
          m()(t, e)
          var n = y()(t)
          function t() {
            return o()(this, t), n.apply(this, arguments)
          }
          return (
            c()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    n = e.communityId,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchCommunityIfNeeded)(n).catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    n = e.community,
                    t = e.communityId,
                    a = e.moderatorArea
                  if (!n || 0 === n.rules.length) return null
                  var i = n.name,
                    r = n.rules,
                    o = a ? r.length : 5
                  return l.a.createElement(
                    C.a,
                    null,
                    l.a.createElement(S.b, { text: Object(g.a)({ communityName: i }) }),
                    l.a.createElement(p.b, {
                      badgeStyle: T.badgeStyle,
                      limit: o,
                      ruleContainerStyle: T.ruleContainerStyle,
                      rules: r,
                      theme: n.theme,
                      withHeader: !1,
                    }),
                    r.length > o &&
                      l.a.createElement(F.a, {
                        link: '/i/communities/'.concat(t, '/rules'),
                        text: w,
                        withBottomRadius: !0,
                      }),
                  )
                },
              },
            ]),
            t
          )
        })(l.a.Component),
        T = I.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space12 },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: 'normal' },
          }
        }),
        x = _(K)
      n.a = function (e) {
        var n = e.moderatorArea,
          t = (function (e) {
            return { withTopicsToFollow: !e, withTrends: !e, withWhoToFollow: !e }
          })(void 0 !== n && n)
        return l.a.createElement(i.a, t, l.a.createElement(x, e))
      }
    },
    cI4y: function (e, n, t) {
      'use strict'
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
                    args: [(i = { kind: 'Literal', name: 'count', value: 20 })],
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
                    storageKey: '__CommunityMembers_Query_members_slice_slice(count:20)',
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
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'follow_request_sent',
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
                                        name: 'blocking',
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
                                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_following',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_follow_eligible',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_followed_by',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'smart_blocking',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'HighlightedUserLabelResponse',
                                    kind: 'LinkedField',
                                    name: 'affiliates_highlighted_label',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'HighlightedUserLabel',
                                        kind: 'LinkedField',
                                        name: 'label',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'user_label_type',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  r,
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            filters: null,
                            handle: 'user',
                            key: '',
                            kind: 'LinkedHandle',
                            name: 'result',
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
            id: 'DsO3D4rira8XTkJhaaSAqQ',
            metadata: { sliceInfoPath: ['community', 'members_slice', 'slice_info'] },
            name: 'membersSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'a115c0b85e2e9e5e448d24fc5644abcd'), (e.exports = u)
    },
    cL2e: function (e, n, t) {
      'use strict'
      t.d(n, 'c', function () {
        return R
      }),
        t.d(n, 'a', function () {
          return B
        }),
        t.d(n, 'b', function () {
          return V
        })
      var a,
        l,
        i = t('ERkP'),
        r = t.n(i),
        o = t('FIs5'),
        s = (t('YWiL'), t('3XMw')),
        c = t.n(s),
        u = t('TEoO'),
        m = t('Fr3L'),
        d = (t('ho0z'), t('j57/')),
        y = t('ja7Y'),
        p = t('rHpw'),
        g = t('MjKK'),
        f = t('CVPS'),
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
        x = function (e) {
          var n = e.query
          return Object(k.a)('c9s_communities_search_enabled') && n
            ? r.a.createElement(m.a, { errorConfig: C }, r.a.createElement(T, { query: n }))
            : null
        },
        R = r.a.memo(x),
        L = t('ddV6'),
        M = t.n(L),
        O = (t('KqXw'), t('MvUL'), t('VY6S')),
        A = t('6OUF'),
        P = t('VwDm'),
        j = t('zCf4'),
        H = c.a.fbf01e51,
        D = function (e) {
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
            i = M()(l, 2),
            o = i[0],
            s = i[1],
            c = Object(j.f)(),
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
            Icon: P.a,
            autoComplete: 'off',
            isCompact: !0,
            onChange: d,
            onClear: u,
            placeholder: H,
            value: o,
            withClearButton: !0,
          })
        },
        B = r.a.memo(D),
        N = t('/yvb'),
        U = c.a.fbf01e51,
        z = function (e) {
          return Object(k.a)('c9s_communities_search_enabled')
            ? r.a.createElement(N.a, {
                icon: r.a.createElement(P.a, { accessibilityLabel: U, style: q.searchButton }),
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
      e.exports = a
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
      e.exports = a
    },
    egQk: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return l
      })
      var a = t('3XMw'),
        l = t.n(a).a.c00c234e
    },
    fK4d: function (e, n, t) {
      'use strict'
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
      e.exports = a
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
        x = F.a.gd80afba,
        R = F.a.a753a87f,
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
                  R,
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
                      containerStyle: M.root,
                      documentTitle: a || x,
                      history: t,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || x,
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
        M = T.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(L),
        A = t('X8FW'),
        P = T.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      n.a = function (e) {
        return l.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: P.modal },
          l.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, n, t) {
      'use strict'
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
                              { args: null, kind: 'FragmentSpread', name: 'list_communityJoinRequestsSlice' },
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
                                          {
                                            alias: null,
                                            args: null,
                                            filters: null,
                                            handle: 'user',
                                            key: '',
                                            kind: 'LinkedHandle',
                                            name: 'result',
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
                            filters: null,
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
      ;(m.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (e.exports = m)
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
      e.exports = a
    },
    'ii+P': function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
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
      n.a = r
    },
    'j57/': function (e, n, t) {
      'use strict'
      var a = t('yiKp'),
        l = t.n(a),
        i = (t('ho0z'), t('ERkP')),
        r = t.n(i),
        o = t('+Kfv'),
        s = t('MWbm'),
        c = t('TIdA'),
        u = t('A91F'),
        m = t('rHpw'),
        d = t('MtXG'),
        y = t('t62R'),
        p = t('htQn'),
        g = t('MAI/'),
        f = t('3XMw'),
        h = t.n(f),
        b = h.a.d58baa7e,
        v = { type: 'serversideContextKey', serversideContextType: 'community' },
        _ = function (e) {
          var n = e.crop,
            t = e.image
          return r.a.createElement(
            s.a,
            { style: C.thumbnailContainer },
            r.a.createElement(c.a, {
              accessibilityLabel: '',
              aspectMode: u.a.SQUARE,
              backgroundColor: m.a.theme.colors.gray300,
              cropCandidates: n,
              image: t,
            }),
          )
        },
        k = function (e) {
          e.communityId
          var n = e.count,
            t = b(n)
          return r.a.createElement(
            d.a.Group,
            null,
            r.a.createElement(
              d.a,
              null,
              r.a.createElement(
                y.b,
                { color: 'gray700' },
                r.a.createElement(
                  h.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  r.a.createElement(d.a.Value, null, h.a.ibd0106d({ formattedCount: t })),
                  r.a.createElement(d.a.Label, null, h.a.cface2d0({ count: n })),
                ),
              ),
            ),
          )
        },
        E = function (e) {
          var n = e.communityId,
            t = e.media,
            a = e.memberCount,
            i = e.membersFacepile,
            c = e.name,
            u = r.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, v), {}, { serversideContextId: n }), viewType: 'community_cell' }
              },
              [n],
            ),
            m = '/i/communities/'.concat(n)
          return r.a.createElement(
            o.a,
            { behavioralEventContext: u },
            r.a.createElement(
              p.a,
              { link: m, style: C.root },
              r.a.createElement(
                s.a,
                { style: C.container },
                r.a.createElement(
                  s.a,
                  { style: C.leftColumn },
                  t ? r.a.createElement(_, t) : null,
                  r.a.createElement(
                    s.a,
                    { style: C.attribution },
                    r.a.createElement(
                      s.a,
                      { style: C.name },
                      r.a.createElement(y.b, { numberOfLines: 1, weight: 'bold' }, c),
                    ),
                    r.a.createElement(k, { communityId: n, count: a }),
                    Array.isArray(i)
                      ? r.a.createElement(g.a, { style: C.facepile, userAvatarSize: 'large', userAvatarUrls: i })
                      : i,
                  ),
                ),
              ),
            ),
          )
        }
      n.a = r.a.memo(E)
      var C = m.a.create(function (e) {
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
        u = (t('YWiL'), t('CVPS')),
        m = t.n(u),
        d = void 0 !== a ? a : (a = t('Eh7u'))
      n.a = function (e) {
        var n = e.community,
          t = e.shouldUseThemeColor,
          a = void 0 === t || t,
          l = e.style,
          u = m()(d, n),
          y = Object(o.a)('c9s_ui_colors_enabled_rweb') && a,
          p = (function (e) {
            return e.reduce(function (e, n) {
              var t = n.result
              if ('User' === (null == t ? void 0 : t.__typename)) {
                var a,
                  l = null === (a = t.legacy) || void 0 === a ? void 0 : a.profile_image_url_https
                l && e.push(l)
              }
              return e
            }, [])
          })(u.members_facepile_results),
          g = Object(r.b)(u),
          f = y ? s.a.getCommunityBackgroundColorName(g) : void 0
        return p.length > 0
          ? i.a.createElement(c.a, { borderColor: f, style: l, userAvatarSize: 'large', userAvatarUrls: p })
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
    k5o5: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('K1iM')),
        l = t('EORa'),
        i = l.loadQuery,
        r = l.useTrackLoadQueryInRender,
        o = t('XiYe'),
        s = t('PJTX'),
        c = t('ERkP'),
        u = c.useCallback,
        m = c.useEffect,
        d = c.useRef,
        y = c.useState,
        p = t('e1/f').getRequest,
        g = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var t = null != n ? n : g,
          l = s()
        r()
        var c = o(),
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
                var r,
                  o = i(null !== (r = null == t ? void 0 : t.__environment) && void 0 !== r ? r : l, e, n, a)
                p.current.add(o), v(o)
              }
            },
            [l, e, v, c],
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
    krnS: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return k
      })
      var a,
        l = t('ERkP'),
        i = t.n(l),
        r = t('FIs5'),
        o = t('3XMw'),
        s = t.n(o),
        c = t('VeiK'),
        u = (t('YWiL'), t('TEoO')),
        m = t('Fr3L'),
        d = t('+R/6'),
        y = t('DQzJ'),
        p = { context: 'members' },
        g = void 0 !== a ? a : (a = t('w9f9')),
        f = function (e) {
          return e.__id
        },
        h = function (e) {
          var n = e.communityId,
            t = e.renderEmptyState,
            a = e.viewerRole,
            l = Object(y.a)(g, { communityId: n }),
            r = l.data,
            o = l.fetchNext,
            s = r.community.moderators_slice.items_results
          return i.a.createElement(u.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(n),
            identityFunction: f,
            items: s,
            noItemsRenderer: t,
            onNearEnd: o,
            renderer: function (e) {
              return i.a.createElement(d.a, { communityId: n, userResult: e, viewerRole: a })
            },
          })
        },
        b = function (e) {
          return i.a.createElement(m.a, { errorConfig: p }, i.a.createElement(h, e))
        },
        v = s.a.cdd87523,
        _ = s.a.cca5191f,
        k = { Moderators: 'Moderators', Members: 'Members' },
        E = function () {
          return i.a.createElement(r.a, { header: v, message: _ })
        }
      n.b = function (e) {
        var n = e.communityId,
          t = e.mode,
          a = e.viewerRole,
          l = t === k.Moderators
        return a
          ? l
            ? i.a.createElement(b, { communityId: n, renderEmptyState: E, viewerRole: a })
            : i.a.createElement(c.a, { communityId: n, renderEmptyState: E, viewerRole: a })
          : null
      }
    },
    l3Hs: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityToolsScreen', function () {
          return Ae
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
        m = t('KEM+'),
        d = t.n(m),
        y = t('yiKp'),
        p = t.n(y),
        g = (t('yH/f'), t('oEOe')),
        f = t('kGix'),
        h = t('Ssj5'),
        b = 'communityModeration',
        v = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        _ = Object.freeze({ fetchStatus: {} })
      function k(e) {
        return e.meta.communityId
      }
      var E = function (e) {
        return function (n, t, a) {
          var l = a.api
          return g.b(n, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: v,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      h.a.register(
        d()({}, b, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case v.REQUEST:
              return p()(p()({}, e), {}, { fetchStatus: p()(p()({}, e.fetchStatus), {}, d()({}, k(n), f.a.LOADING)) })
            case v.FAILURE:
              return p()(
                p()({}, e),
                {},
                { fetchStatus: p()(p()({}, e.fetchStatus), {}, d()({}, k(n), f.a.FAILED)), error: n.payload },
              )
            case v.SUCCESS:
              var t
              if (n.payload)
                return p()(
                  p()({}, e),
                  {},
                  ((t = {}),
                  d()(t, k(n), n.payload),
                  d()(t, 'fetchStatus', p()(p()({}, e.fetchStatus), {}, d()({}, k(n), f.a.LOADED))),
                  d()(t, 'error', null),
                  t),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
      var C = function (e, n) {
          var t,
            a = (function (e, n) {
              return e[b][n]
            })(e, n.communityId)
          return null !== (t = null == a ? void 0 : a.tweet_case_count) && void 0 !== t ? t : 0
        },
        S = function (e, n) {
          return (function (e, n) {
            var t
            return null !== (t = e[b].fetchStatus[n]) && void 0 !== t ? t : f.a.NONE
          })(e, n.communityId)
        },
        F = Object(c.a)()
          .propsFromState(function () {
            return { count: C, moderationFetchStatus: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              updateModeratorRole: s.c.updateRole,
              fetchCommunityModerationData: E,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        I = t('3XMw'),
        w = t.n(I),
        K = (t('YWiL'), t('Lsrn')),
        T = t('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            p()(
              p()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
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
      x.metadata = { width: 24, height: 24 }
      var R,
        L = x,
        M = t('KQzH'),
        O = t('s8G+'),
        A = t('CVPS'),
        P = t.n(A),
        j = t('Znyr'),
        H = t('rHpw'),
        D = w.a.gfccba44,
        B = w.a.h6beb5fa,
        N = w.a.dde5f322,
        U = void 0 !== R ? R : (R = t('cd+Z'))
      function z(e) {
        var n = e.community,
          t = Object(O.a)('c9s_request_to_join_enabled'),
          a = P()(U, n),
          i = a.communityId,
          r = a.join_requests_result,
          o = 'CommunityJoinRequests' === r.__typename,
          s = l.a.useCallback(
            function () {
              var e = r.pending_join_request_count,
                n = void 0 === e ? 0 : e
              return n > 0
                ? l.a.createElement(j.a, {
                    count: n,
                    standalone: !0,
                    truncatedCountFormatter: B,
                    unreadCountLabel: N,
                    withBorder: !1,
                  })
                : null
            },
            [r],
          )
        return t && o
          ? l.a.createElement(M.a, {
              label: D,
              link: '/i/communities/'.concat(i, '/moderation/member_requests'),
              renderRightContent: s,
              thumbnail: X,
            })
          : null
      }
      var V,
        q = l.a.memo(z),
        W = H.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        X = l.a.createElement(L, { style: W.thumbnail }),
        J = t('Fr3L'),
        Q = t('IAZG'),
        G = { context: 'MemberRequestsPivotContainerQuery' },
        Y = void 0 !== V ? V : (V = t('WWTc')),
        Z = function (e) {
          var n = e.communityId,
            t = Object(Q.a)(Y, { communityId: n })
          return l.a.createElement(q, { community: t.community })
        },
        $ = function (e) {
          return l.a.createElement(J.a, { errorConfig: G }, l.a.createElement(Z, { communityId: e.communityId }))
        },
        ee = l.a.memo($),
        ne = t('yoO3'),
        te = t('mWs5'),
        ae = t('MWbm'),
        le = t('6vad'),
        ie = t('csss'),
        re = t('OOKO'),
        oe = t('zIWA'),
        se = t('M2x3'),
        ce = t('SNyS'),
        ue = t('S+H3'),
        me = t('PU7B'),
        de = w.a.dce5e1b3,
        ye = w.a.c5d8c93d,
        pe = w.a.c8c7f9fc,
        ge = w.a.c045c7b6,
        fe = w.a.a87df2ee,
        he = w.a.dc6ce7b4,
        be = w.a.gfca5254,
        ve = w.a.bb081ea1,
        _e = w.a.h6beb5fa,
        ke = w.a.e3f04700,
        Ee = w.a.efc26607,
        Ce = w.a.adfcc3cd,
        Se = w.a.d0330d9c,
        Fe = w.a.fd67f7c8,
        Ie = w.a.gc00d212,
        we = w.a.a997eca0,
        Ke = { label: w.a.c6ea29a1, header: w.a.a6e13fac, text: w.a.e538848b, confirmButtonLabel: w.a.j49e6aa2 },
        Te = H.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        xe = l.a.createElement(oe.a, { style: Te.thumbnail }),
        Re = l.a.createElement(se.a, { style: Te.thumbnail }),
        Le = l.a.createElement(ce.a, { style: Te.thumbnail }),
        Me = l.a.createElement(ue.a, { style: Te.thumbnail }),
        Oe = l.a.createElement(me.a, { style: Te.thumbnail }),
        Ae = function (e) {
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
            g = e.moderationFetchStatus,
            h = e.updateModeratorRole,
            b = m(),
            v = t.isTrue('c9s_moderation_enabled'),
            _ = t.isTrue('c9s_rule_management_enabled'),
            k = t.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              g === f.a.NONE && v && d(c).catch(b)
            },
            [b, c, d, g, v],
          )
          var E = l.a.useCallback(
              function () {
                return v && u > 0
                  ? l.a.createElement(j.a, {
                      count: u,
                      standalone: !0,
                      truncatedCountFormatter: _e,
                      unreadCountLabel: ke,
                      withBorder: !1,
                    })
                  : null
              },
              [u, v],
            ),
            C = s.role,
            S = C === r.a.Admin ? de : ye,
            F = C === r.a.Admin ? Ce : Se,
            I = !p.isExact
          return l.a.createElement(
            ne.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              te.a,
              { communityId: c, screenType: 'secondaryRoot', title: S, withDetailOpen: I },
              l.a.createElement(
                ae.a,
                null,
                v
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(le.b, { text: pe }),
                      l.a.createElement(M.a, {
                        label: ge,
                        link: '/i/communities/'.concat(c, '/moderation/reported_tweets'),
                        renderRightContent: E,
                        thumbnail: xe,
                      }),
                    )
                  : null,
                l.a.createElement(ee, { communityId: c }),
                l.a.createElement(le.b, { text: fe }),
                l.a.createElement(M.a, {
                  description: Ee({ memberCount: s.member_count }),
                  label: he,
                  link: '/i/communities/'.concat(c, '/tools/members'),
                  thumbnail: Me,
                }),
                _
                  ? l.a.createElement(M.a, {
                      description: F,
                      label: be,
                      link: '/i/communities/'.concat(c, '/tools/rules'),
                      thumbnail: Oe,
                    })
                  : null,
                C === r.a.Admin
                  ? l.a.createElement(M.a, {
                      description: Fe,
                      label: ve,
                      link: '/i/communities/'.concat(c, '/tools/settings'),
                      thumbnail: Re,
                    })
                  : null,
                l.a.createElement(ie.a, {
                  description: we,
                  label: Ie,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: Le,
                }),
                C === r.a.Moderator && k
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(re.a, { spacing: 'space1' }),
                      l.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: Ke.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: Ke.header,
                        confirmationSheetText: Ke.text,
                        label: Ke.label,
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
        Pe = F(Ae)
      n.default = Pe
    },
    'ldL/': function (e, n, t) {
      'use strict'
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
      e.exports = a
    },
    m0MN: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitiesModerationContainer', function () {
          return Qn
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
        k = (t('ho0z'), t('c/iP')),
        E = (t('YWiL'), t('3XMw')),
        C = t.n(E),
        S = t('VTxf'),
        F = t('yoO3'),
        I = t('Fr3L'),
        w = t('FIs5'),
        K = t('TEoO'),
        T = (t('1t7P'), t('jQ/y'), t('ddV6')),
        x = t.n(T),
        R = t('1YZw'),
        L = t('uDfI'),
        M = t('MWbm'),
        O = t('/yvb'),
        A = t('rHpw'),
        P = t('CVPS'),
        j = t.n(P),
        H = (t('7x/C'), t('JtPf'), t('849X'), t('TJCb'), t('VeiK')),
        D = t('HvW7'),
        B = t.n(D)
      void 0 !== a || (a = t('i/x0'))
      var N,
        U,
        z,
        V,
        q = void 0 !== l ? l : (l = t('Dm5+')),
        W = void 0 !== i ? i : (i = t('C2fM')),
        X = C.a.i22835dd,
        J = C.a.cb59a0fd,
        Q = C.a.ic7db4ea,
        G = void 0 !== N ? N : (N = t('PMbW')),
        Y = function (e) {
          var n = e.communityId,
            t = e.communityJoinRequestActions,
            a = e.userId,
            l = j()(G, t),
            i = l.join_request_approve_action_result,
            r = l.join_request_deny_action_result,
            o = (function () {
              var e = B()(q),
                n = x()(e, 2),
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
                            updater: function (e, n) {
                              if (
                                'CommunityJoinRequest' ===
                                (null == n ? void 0 : n.community_join_request_approve.__typename)
                              ) {
                                var t,
                                  a,
                                  l =
                                    null === (t = e.getRootField('community_join_request_approve')) ||
                                    void 0 === t ||
                                    null === (a = t.getLinkedRecord('user_relationship')) ||
                                    void 0 === a
                                      ? void 0
                                      : a.getLinkedRecord('community'),
                                  i = Object(H.b)(l)
                                null == i || i.invalidateRecord()
                              }
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
            s = x()(o, 2),
            c = s[0],
            u = s[1],
            d = (function () {
              var e = B()(W),
                n = x()(e, 2),
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
            y = x()(d, 2),
            p = y[0],
            g = y[1],
            f = Object(L.c)(),
            h = u || g,
            b = 'CommunityJoinRequestDenyAction' === (null == r ? void 0 : r.__typename),
            v = 'CommunityJoinRequestApproveAction' === (null == i ? void 0 : i.__typename),
            _ = m.a.useCallback(
              function () {
                p({ communityId: n, userId: a }).catch(function () {
                  f(Object(R.b)({ text: Q }))
                })
              },
              [f, p, n, a],
            ),
            k = m.a.useCallback(
              function () {
                c({ communityId: n, userId: a }).catch(function () {
                  f(Object(R.b)({ text: Q }))
                })
              },
              [f, c, n, a],
            )
          return m.a.createElement(
            M.a,
            { style: Z.buttons },
            m.a.createElement(O.a, { disabled: !b || h, onPress: _, style: Z.button, type: 'destructiveOutlined' }, J),
            m.a.createElement(O.a, { disabled: !v || h, onPress: k, style: Z.button, type: 'primaryOutlined' }, X),
          )
        },
        Z = A.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        $ = t('tocL'),
        ee = t('h0NW'),
        ne = t('t62R'),
        te = t('0yYu'),
        ae = t('IMA+'),
        le = t('GBcw'),
        ie = t('6Rrp'),
        re = t('5oT/'),
        oe = void 0 !== U ? U : (U = t('8vG3')),
        se = C.a.d7f13fb8,
        ce = C.a.a340df66,
        ue = function (e) {
          var n = e.icon,
            t = e.label
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(ee.a, {
              containerStyle: ge.container,
              items: [{ label: m.a.createElement(ne.b, null, t), decoration: n }],
            }),
            m.a.createElement(te.a, null),
          )
        },
        me = { blocking: C.a.g8907fde, muting: C.a.f69c2298 },
        de = {
          mutual: { contextType: $.a.FollowMutual, text: C.a.ae2205d1 },
          following: { contextType: $.a.FollowFollowing, text: C.a.d960b55b },
          followedBy: { contextType: $.a.FollowFollowed, text: C.a.b7f1e58a },
        },
        ye = {},
        pe = function (e) {
          var n = e.communityJoinRequest,
            t = j()(oe, n),
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
              return m.a.createElement(ue, { icon: fe, label: se({ screenName: f }) })
            case 'Denied':
              return m.a.createElement(ue, { icon: he, label: ce({ screenName: f }) })
            case 'Invalid':
              return null
          }
          var h = t.created_at,
            b = (function (e) {
              var n = e.following,
                t = e.isFollowedBy
              return n && t ? de.mutual : n ? de.following : t ? de.followedBy : void 0
            })({ isFollowedBy: u, following: d }),
            v = (function (e) {
              var n = e.blocking,
                t = e.muting
              return n ? me.blocking : t ? me.muting : void 0
            })({ blocking: s, muting: y }),
            _ = m.a.createElement(
              M.a,
              null,
              v && m.a.createElement(ne.b, { color: 'red500', style: ge.bottomText }, v),
              m.a.createElement(Y, { communityId: a, communityJoinRequestActions: t.actions, userId: r }),
            )
          return m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(ae.a, {
              avatarUri: g,
              bottomControl: _,
              description: c || void 0,
              displayMode: 'UserDetailed',
              entities: ye,
              name: p,
              screenName: f,
              screenNameSuffix: m.a.createElement(le.a, { color: 'gray700', timestamp: h }),
              socialContext: b,
              userId: r,
            }),
            m.a.createElement(te.a, null),
          )
        },
        ge = A.a.create(function (e) {
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
        fe = m.a.createElement(ie.a, { style: ge.icon }),
        he = m.a.createElement(re.a, { style: ge.icon }),
        be = C.a.addbb11e,
        ve = C.a.c38131de,
        _e = void 0 !== z ? z : (z = t('Jt8P')),
        ke = function (e) {
          return e.id
        },
        Ee = function (e) {
          return m.a.createElement(pe, { communityJoinRequest: e })
        },
        Ce = function () {
          return m.a.createElement(w.a, { header: be, message: ve })
        },
        Se = function (e) {
          var n = e.communityJoinRequests,
            t = e.fetchNext,
            a = j()(_e, n).items
          return m.a.createElement(K.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: ke,
            items: a,
            noItemsRenderer: Ce,
            onNearEnd: t,
            renderer: Ee,
          })
        },
        Fe = t('VS6U'),
        Ie = t('zCf4'),
        we = t('DQzJ'),
        Ke = C.a.gfccba44,
        Te = 'member_requests',
        xe = { context: Te },
        Re = void 0 !== V ? V : (V = t('gAl+')),
        Le = function (e) {
          var n = Object(Ie.f)(),
            t = e.communityId,
            a = Object(we.a)(Re, { communityId: t }),
            l = a.data,
            i = a.fetchNext,
            r = l.community,
            o = r.join_requests_result,
            s = r.name
          if ('CommunityJoinRequests' === o.__typename) {
            var c = o.pending_join_requests_slice,
              u = m.a.createElement(k.a, { communityId: t, moderatorArea: !0 }),
              d = m.a.createElement(Se, { communityJoinRequests: c, fetchNext: i })
            return m.a.createElement(
              F.a,
              { behavioralEventViewType: Te },
              m.a.createElement(Fe.a, {
                backLocation: '/i/communities/'.concat(t, '/tools'),
                history: n,
                primaryContent: d,
                sidebarContent: u,
                subtitle: s,
                title: Ke,
              }),
            )
          }
          return m.a.createElement(S.a, null)
        },
        Me = function (e) {
          var n = e.communityId
          return m.a.createElement(I.a, { errorConfig: xe }, m.a.createElement(Le, { communityId: n }))
        },
        Oe = t('/de5'),
        Ae = t('yiKp'),
        Pe = t.n(Ae),
        je = (t('2G9S'), t('uFXj'), t('z84I'), t('3zvM')),
        He = t('lMB6'),
        De = Object(je.e)({ namespace: 'communityReports' }),
        Be = He.a.register(De),
        Ne = t('G6rE'),
        Ue = function (e, n) {
          var t,
            a = null === (t = n.tweetCase) || void 0 === t ? void 0 : t.reports
          return (a ? Be.selectMany(e, a) : []).map(function (n) {
            var t = n.user
            return Pe()(Pe()({}, n), {}, { reporter: Ne.e.select(e, t) })
          })
        },
        ze = Object(h.a)().propsFromState(function () {
          return { reports: Ue }
        }),
        Ve = t('855f'),
        qe = t('cHvH'),
        We = t('5mJL'),
        Xe = t('efqG'),
        Je = t('21zW'),
        Qe = function (e) {
          return (function (e) {
            var n = e.count,
              t = e.formattedCount
            return m.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              m.a.createElement(ne.b, { color: 'primary' }, C.a.ff0f7429({ count: n, formattedCount: t })),
            )
          })({ count: e, formattedCount: Ve.a.getFormattedCount(e) })
        },
        Ge = function (e) {
          var n = e.report,
            t = e.withBottomBorder,
            a = n.created_at,
            l = n.reporter,
            i = m.a.createElement(le.a, { timestamp: a })
          return l
            ? m.a.createElement(qe.a, null, function (e) {
                var a = e.windowWidth
                return m.a.createElement(
                  M.a,
                  { style: t ? Ze.bottomBorder : null },
                  m.a.createElement(ae.a, {
                    avatarUri: l.profile_image_url_https,
                    decoration: i,
                    displayMode: 'UserCompact',
                    isProtected: l.protected,
                    isVerified: l.verified,
                    name: l.name,
                    screenName: l.screen_name,
                    style: a > A.a.theme.breakpoints.small ? Ze.userCell : void 0,
                    userId: l.id_str,
                  }),
                  m.a.createElement(
                    We.a,
                    { avatarCell: null },
                    m.a.createElement(ne.b, { color: 'gray700', size: 'subtext2', style: Ze.rule }, n.rule.name),
                  ),
                )
              })
            : null
        },
        Ye = ze(function (e) {
          var n = m.a.useState(!1),
            t = x()(n, 2),
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
              Xe.a,
              {
                contentStyle: Ze.popover,
                onDismiss: function () {
                  l(!1)
                },
                renderContent: function () {
                  return m.a.createElement(
                    M.a,
                    { style: Ze.contentContainer },
                    i.map(function (e, n) {
                      return m.a.createElement(Ge, { key: e.id_str, report: e, withBottomBorder: n < i.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              m.a.createElement(
                ne.b,
                {
                  onPress: function () {
                    l(!0)
                  },
                },
                Qe(o),
              ),
            ),
            m.a.createElement(Je.a, null),
            m.a.createElement(le.a, { timestamp: s }),
          )
        }),
        Ze = A.a.create(function (e) {
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
        $e = t('9EWH'),
        en = Object(je.e)({ namespace: 'communityCases' }),
        nn = {
          keepTweet: Object(je.c)(en, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var t = n.meta.entityId
              return Object($e.a)(e, function (e) {
                e.entities[t].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(je.c)(en, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, n) {
              var t = n.meta.entityId
              return Object($e.a)(e, function (e) {
                e.entities[t].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        tn = Pe()(Pe()({}, en), nn),
        an = He.a.register(tn),
        ln = t('XOJV'),
        rn = function (e, n) {
          var t = n.tweetId
          return t ? ln.a.selectHydrated(e, t) : void 0
        },
        on = function (e, n) {
          var t = n.tweetId
          return an.select(e, t)
        },
        sn = function (e, n) {
          var t = rn(e, n)
          return !!t && Object(f.h)(e, t)
        },
        cn = Object(h.a)()
          .propsFromState(function () {
            return { tweet: rn, tweetCase: on, disableRemoveFromCommunity: sn }
          })
          .propsFromActions(function () {
            return { keep: an.keepTweet, dismiss: an.dismissTweet }
          }),
        un = t('b5s6'),
        mn = t('mjJ+'),
        dn = t('IG7M'),
        yn = t('boUI'),
        pn = t('zIWA'),
        gn = t('fz3c'),
        fn = (t('yH/f'), t('n5fo')),
        hn = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        bn = C.a.ad10c66d,
        vn = C.a.c6caed9c,
        _n = function (e) {
          return m.a.createElement(ne.b, null, e)
        },
        kn = function (e) {
          var n = e.screenName
          switch (e.type) {
            case hn.Hidden:
              var t = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(n),
                a = [{ label: _n(t), decoration: Cn }]
              return m.a.createElement(ee.a, { accessibilityLabel: bn, containerStyle: En.container, items: a })
            case hn.Kept:
              var l = (function (e) {
                  return m.a.createElement(C.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(n),
                i = [{ label: _n(l), decoration: Sn }]
              return m.a.createElement(ee.a, { accessibilityLabel: vn, containerStyle: En.container, items: i })
            default:
              return null
          }
        },
        En = A.a.create(function (e) {
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
        Cn = m.a.createElement(fn.a, { style: En.icon }),
        Sn = m.a.createElement(ie.a, { style: En.icon }),
        Fn = { page: 'reported_tweets', component: 'tweet' },
        In = { viewType: 'tweet_moderation_case' },
        wn = C.a.f1d9930c,
        Kn = C.a.a219e217,
        Tn = C.a.fa524057,
        xn = C.a.g30bc699,
        Rn = C.a.f0306107,
        Ln = C.a.b99364a5,
        Mn = cn(function (e) {
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
                        text: xn({ screenName: s }),
                        Icon: yn.a,
                        link: '/'.concat(s),
                      },
                      {
                        text: Rn,
                        Icon: pn.a,
                        behavioralEventContext: { viewType: 'report_tweet' },
                        link: {
                          pathname: '/i/report/'.concat(gn.a.Tweet, '/').concat(i.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Fn },
                        },
                        onClick: function () {
                          n()
                        },
                      },
                    ],
                    l = i.community_id_str,
                    r = i.user,
                    o = null == r ? void 0 : r.id_str
                  return (
                    t &&
                      !e.disableRemoveFromCommunity &&
                      o &&
                      l &&
                      a.push({
                        text: Ln({ screenName: s }),
                        Icon: re.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'
                            .concat(gn.a.RemoveCommunityMember, '/')
                            .concat(o, '?community_id=')
                            .concat(l),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Fn },
                        },
                        onClick: function () {
                          n()
                        },
                      }),
                    m.a.createElement(mn.a, { items: a, onCloseRequested: n })
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
          if (s && (null == i ? void 0 : i.reportingVisibility) === gn.b.HiddenCommunityTweet)
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(kn, { screenName: s, type: hn.Hidden }),
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
              m.a.createElement(kn, { screenName: s, type: hn.Kept }),
              m.a.createElement(te.a, null),
            )
          if (!r) return null
          return m.a.createElement(
            y.a,
            { behavioralEventContext: In },
            m.a.createElement(
              M.a,
              { style: On.container },
              m.a.createElement(
                M.a,
                { style: On.reportsBar },
                m.a.createElement(Ye, { tweetCase: r }),
                m.a.createElement(dn.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: c,
                  style: On.menu,
                }),
              ),
              m.a.createElement(un.a, { tweetId: o }),
              i
                ? m.a.createElement(qe.a, null, function (e) {
                    e.windowHeight
                    var n = e.windowWidth <= A.a.theme.breakpoints.small
                    return m.a.createElement(
                      M.a,
                      { style: [On.buttons, n && On.buttonsMobile] },
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(gn.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Pe()(Pe()({}, Fn), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [On.button, n && On.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        wn,
                      ),
                      m.a.createElement(
                        O.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [On.button, n && On.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        Tn,
                      ),
                    )
                  })
                : m.a.createElement(
                    M.a,
                    { style: On.buttons },
                    m.a.createElement(
                      O.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: p,
                        style: On.button,
                        type: 'primaryOutlined',
                      },
                      Kn,
                    ),
                  ),
            ),
            m.a.createElement(te.a, null),
          )
        }),
        On = A.a.create(function (e) {
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
        An = t('hqKg'),
        Pn = t('wAC9'),
        jn = function (e, n) {
          var t = n.community
          return t ? t.id_str : void 0
        },
        Hn = function () {
          return Object(An.createSelector)(jn, function (e) {
            return e
              ? (function (e) {
                  return Object(Pn.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (n) {
                      return Pe()(Pe()({}, n), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Dn = Object(h.a)()
          .propsFromState(function () {
            return { sliceModule: Hn() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Bn = t('FS1z'),
        Nn = C.a.c045c7b6,
        Un = C.a.dffb0774,
        zn = C.a.cbb2a93c,
        Vn = Dn(function (e) {
          var n = m.a.useContext(d.a).featureSwitches,
            t = e.community,
            a = e.history,
            l = e.sliceModule,
            i = t.id_str,
            r = t.name,
            o = n.isTrue('responsive_web_communities_slices_enabled'),
            s = l
              ? m.a.createElement(Bn.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return m.a.createElement(w.a, { header: Un, message: zn })
                  },
                  renderer: function (e) {
                    return m.a.createElement(Mn, { tweetId: e })
                  },
                })
              : null
          return m.a.createElement(
            F.a,
            { behavioralEventViewType: 'reported_tweets' },
            m.a.createElement(Fe.a, {
              backLocation: '/i/communities/'.concat(i),
              history: a,
              primaryContent: o ? s : null,
              sidebarContent: m.a.createElement(k.a, { communityId: i, moderatorArea: !0 }),
              subtitle: r,
              title: Nn,
            }),
          )
        }),
        qn = ['analytics', 'community'],
        Wn = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        Xn = { viewType: 'community' }
      function Jn(e) {
        var n = m.a.useContext(d.a).featureSwitches,
          t = (e.analytics, e.community),
          a = c()(e, qn),
          l = a.match.path,
          i = n.isTrue('c9s_request_to_join_enabled')
        return Object(p.c)(t.role)
          ? m.a.createElement(
              y.a,
              { behavioralEventContext: Xn },
              m.a.createElement(
                Ie.d,
                null,
                m.a.createElement(
                  Ie.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  m.a.createElement(Vn, o()({}, a, { community: t })),
                ),
                i
                  ? m.a.createElement(
                      Ie.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      m.a.createElement(Me, { communityId: t.id_str }),
                    )
                  : null,
                m.a.createElement(Ie.b, null, m.a.createElement(Oe.b, a)),
              ),
            )
          : m.a.createElement(Oe.b, a)
      }
      function Qn(e) {
        var n = e.community,
          t = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          i = c()(e, Wn),
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
              return n ? m.a.createElement(Jn, o()({}, i, { community: n })) : null
            },
          })
        )
      }
      n.default = v(Qn)
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
          return j
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
          return Object(c.D)(e, c.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: y }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.z)(c.h)
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
        x = b.a.a1c93d73,
        R = b.a.f74a5adb,
        L = b.a.fbb0ed91,
        M = b.a.gea6cc19,
        O = b.a.hed35471,
        A = b.a.c8677445,
        P = b.a.c3a0d44e
      function j(e) {
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
          j = w[0],
          D = w[1],
          B = r.a.useState(''),
          N = l()(B, 2),
          U = N[0],
          z = N[1],
          V = r.a.useState(!1),
          q = l()(V, 2),
          W = q[0],
          X = q[1],
          J = r.a.useState(''),
          Q = l()(J, 2),
          G = Q[0],
          Y = Q[1],
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
              D(t), z(n), X(a)
            },
            [D, z, X],
          ),
          oe = r.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    t = n.code === g.a.GenericBadRequest && n.message ? n.message : x
                  return Y(t), X(!1), []
                },
              })
              'string' == typeof d &&
                s(p, { ruleId: d, name: j, description: U })
                  .then(function () {
                    c.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, j, U, d, s, c, i],
          ),
          se = r.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    t = n.code === g.a.GenericBadRequest && n.message ? n.message : x
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
                { style: H.delete },
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
          pe = de ? r.a.createElement(E.a, { style: H.callout }, r.a.createElement(F.a, { text: R })) : void 0,
          ge = ee
            ? r.a.createElement(I.a, {
                cancelButtonLabel: P,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: M,
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
      n.default = p(j)
      var H = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return D
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
        k = t('P74S'),
        E = t.n(k),
        C = t('kGix')
      t.d(n, 'a', function () {
        return C.a
      })
      var S = t('tI3i'),
        F = t.n(S),
        I = t('fs1G'),
        w = t('0KEI'),
        K = t('VYI2'),
        T = t.n(K),
        x = t('35hZ'),
        R = t.n(x),
        L = t('k5o5'),
        M = t.n(L),
        O = t('PJTX'),
        A = t.n(O),
        P = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: I.a })
        },
        j = (function (e) {
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
        H = function (e) {
          var n = e.query,
            t = e.queryRef,
            a = e.render,
            l = R()(n, t)
          return a({ fetchStatus: C.a.LOADED, data: l, error: null, retry: I.a })
        },
        D = function (e, n) {
          if (_.canUseDOM)
            return function (t) {
              var a = t.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                r = t.render,
                o = t.variables,
                s = M()(e),
                c = l()(s, 2),
                u = c[0],
                m = c[1],
                d = Object(w.useCreateLocalApiErrorHandler)(n.errorConfig.context),
                y = T()(o),
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
                      { fallback: b.a.createElement(P, { render: r }) },
                      b.a.createElement(
                        j,
                        { errorHandler: d(n.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (n, t) {
                          return n
                            ? r({ fetchStatus: C.a.FAILED, error: n, data: null, retry: t })
                            : b.a.createElement(H, { query: e, queryRef: u, render: r })
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
              o = A()(),
              s = Object(w.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              c = T()(r),
              u = l()(c, 1)[0],
              m = t.get(o)
            if (m) return m
            var d = b.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      F()(e, 'Fetch query returned empty data'),
                      i({ fetchStatus: C.a.LOADED, data: e, error: null, retry: I.a })
                    )
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(n.errorConfig.options || {})(e),
                        i({ fetchStatus: C.a.FAILED, data: null, error: e, retry: I.a }))
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
          return Object(c.D)(e, c.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(c.z)(c.h)
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
          x = l()(T, 2),
          R = x[0],
          L = x[1],
          M = r.a.useState(!1),
          O = l()(M, 2),
          A = O[0],
          P = O[1],
          j = r.a.useState(!1),
          H = l()(j, 2),
          D = H[0],
          B = H[1],
          N = r.a.useState(''),
          U = l()(N, 2),
          z = U[0],
          V = U[1],
          q = r.a.useState(!1),
          W = l()(q, 2),
          X = W[0],
          J = W[1],
          Q = r.a.useCallback(
            function (e) {
              var n = e.description,
                t = e.name,
                a = e.valid
              V(''), K(t), L(n), P(a)
            },
            [K, L, P],
          ),
          G = r.a.useCallback(
            function () {
              B(!0)
              var e = i({
                customErrorHandler: function (e) {
                  var n = l()(e.errors, 1)[0],
                    t = n.code === p.a.GenericBadRequest && n.message ? n.message : S
                  return V(t), P(!1), []
                },
              })
              s(m, { name: h, description: R })
                .then(function () {
                  c.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, h, R, s, c, i],
          ),
          Y = r.a.useCallback(
            function () {
              u ? J(!0) : G()
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
          ne = X
            ? r.a.createElement(v.a, {
                onCancel: function () {
                  J(!1)
                },
                onConfirm: function () {
                  t(), G(), J(!1)
                },
              })
            : void 0
        return $ && !D
          ? ee
          : r.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: c, rightControl: Z, title: E },
              r.a.createElement(b.a, { description: '', errorText: z, name: '', onChange: Q }),
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
        p = (t('YWiL'), t('CVPS')),
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
        x = t('rHpw'),
        R = t('aITJ'),
        L = t('MWbm'),
        M = t('n5fo'),
        O = t('5emT'),
        A = t('Oib4'),
        P = t('WtWS'),
        j = t('ioan'),
        H = [
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
        D = function (e) {
          return e.length
        },
        B = function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D
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
                return B(e, a.props.calculateLength)
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
              b()(d()(a), '_handleBlur', function () {
                var e,
                  n = a.props.onBlur,
                  t = (null === (e = a._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  l = a._calculateLength(t),
                  i = a._getActualCount(t)
                a.setState({ isFocused: !1, displayCount: l, actualCount: i }), n && n()
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
                R.b.isKaiOS() && 'Backspace' === e.key && t ? (a._blurOnBackspaceKeyUpForKaiOS = t) : n && n(e)
              }),
              b()(d()(a), '_handleKeyUp', function (e) {
                var n = a.props.onKeyUp
                R.b.isKaiOS() &&
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
                actualCount: D(i),
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
                      i = (e.style, e.type, e.validLength, r()(e, H))
                    return _.a.createElement(
                      L.a,
                      { style: V.container },
                      n && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        E.b,
                        { size: 'headline1', style: V.wrapper },
                        _.a.createElement(
                          j.a,
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
                            icon: a ? _.a.createElement(M.a, null) : _.a.createElement(O.a, null),
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
                      : _.a.createElement(P.a, { style: [q.validationIcon, S.a.validColor] })
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
                      l = 'string' == typeof a ? B(a, t) : 0
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
      var V = x.a.create(function (e) {
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
        q = x.a.create(function (e) {
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
                        kind: 'RequiredField',
                        field: {
                          alias: null,
                          args: null,
                          concreteType: 'ApiUser',
                          kind: 'LinkedField',
                          name: 'legacy',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                            {
                              kind: 'RequiredField',
                              field: {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'verified',
                                storageKey: null,
                              },
                              action: 'THROW',
                              path: 'creator_results.result.legacy.verified',
                            },
                          ],
                          storageKey: null,
                        },
                        action: 'THROW',
                        path: 'creator_results.result.legacy',
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
      e.exports = a
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
      e.exports = a
    },
    rC8y: function (e, n, t) {
      'use strict'
      t('hBvt')
      var a = t('SV7d'),
        l = t('ERkP'),
        i = t.n(l),
        r = t('t62R'),
        o = t('htQn'),
        s = t('rHpw'),
        c = { viewType: 'module_footer' }
      var u = s.a.create(function (e) {
        return {
          root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          withBottomRadius: {
            borderBottomLeftRadius: e.borderRadii.xLarge,
            borderBottomRightRadius: e.borderRadii.xLarge,
          },
        }
      })
      n.a = function (e) {
        var n = e.align,
          t = e.link,
          l = e.onPress,
          s = e.text,
          m = e.weight,
          d = e.withBottomRadius,
          y = e.withDarkerInteractiveBackground
        return i.a.createElement(
          a.a,
          { behavioralEventContext: c },
          i.a.createElement(
            o.a,
            { link: t, onPress: l, style: [u.root, d && u.withBottomRadius], withDarkerInteractiveBackground: y },
            i.a.createElement(r.b, { align: n, color: 'primary', weight: m }, s),
          ),
        )
      }
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
    tSWT: function (e, n, t) {
      'use strict'
      var a,
        l,
        i,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityAppBarButtonQuery',
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
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityAppBarButton_community' }],
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
            name: 'CommunityAppBarButtonQuery',
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
                    concreteType: 'CommunityModeration',
                    kind: 'LinkedField',
                    name: 'moderation',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'tweet_case_count', storageKey: null },
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
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
                          i,
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
                  i,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'UokEXDYuJSjzYA3oK6gLOw',
            metadata: {},
            name: 'CommunityAppBarButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '6c6f9de5ca51845b9c1588ecf7cab696'), (e.exports = r)
    },
    tgdH: function (e, n, t) {
      'use strict'
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
                    kind: 'RequiredField',
                    field: {
                      alias: null,
                      args: null,
                      concreteType: 'ApiUser',
                      kind: 'LinkedField',
                      name: 'legacy',
                      plural: !1,
                      selections: [
                        { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                        {
                          kind: 'RequiredField',
                          field: {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'followed_by',
                            storageKey: null,
                          },
                          action: 'THROW',
                          path: 'result.legacy.followed_by',
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
                          kind: 'RequiredField',
                          field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                          action: 'THROW',
                          path: 'result.legacy.protected',
                        },
                        { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                        {
                          kind: 'RequiredField',
                          field: { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                          action: 'THROW',
                          path: 'result.legacy.verified',
                        },
                      ],
                      storageKey: null,
                    },
                    action: 'THROW',
                    path: 'result.legacy',
                  },
                  { args: null, kind: 'FragmentSpread', name: 'FollowUserButtonRelay_user' },
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
        hash: '92044cec0424752d2ed5f23018915c46',
      }
      e.exports = a
    },
    tnnC: function (e, n, t) {
      'use strict'
      var a = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      e.exports = a
    },
    tot2: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunityPeopleScreen', function () {
          return R
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
        x = { viewType: 'moderators' },
        R = r.a.memo(function (e) {
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
            R = h ? F : w,
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
            M = t
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(u.a, { community: n, communityId: t, onIsSearchingChange: f }),
                  g
                    ? null
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(k.a, { accessibilityLabel: R, links: L }),
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
                                viewerRole: null == n ? void 0 : n.role,
                              }),
                            ),
                          ),
                          r.a.createElement(
                            C.b,
                            { exact: !0, path: '/i/communities/'.concat(t, '/moderators') },
                            r.a.createElement(
                              o.a,
                              { behavioralEventContext: x },
                              r.a.createElement(b.a, { community: n }),
                              r.a.createElement(E.b, {
                                communityId: t,
                                mode: E.a.Moderators,
                                viewerRole: null == n ? void 0 : n.role,
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
                primaryContent: M,
                rightControl: h && t ? r.a.createElement(c.a, { communityId: t }) : null,
                sidebarContent: r.a.createElement(s.a, null),
                title: F,
              }),
            ),
          )
        }),
        L = g(R)
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
        x = t.n(T),
        R = t('5oT/'),
        L = t('/yvb'),
        M = t('rHpw'),
        O = (t('YWiL'), t('CVPS')),
        A = t.n(O),
        P = x.a.a226497c,
        j = b.a.memo(function (e) {
          return 'CommunityCreateAction' !== A()(void 0 !== a ? a : (a = t('zum0')), e.createActionResult).__typename
            ? null
            : b.a.createElement(L.a, {
                icon: b.a.createElement(R.a, { accessibilityLabel: P, style: H.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        H = M.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        D = b.a.memo(j),
        B = t('Fr3L'),
        N = t('IAZG'),
        U = { context: 'CommunityCreateButton' },
        z = void 0 !== l ? l : (l = t('S91Q')),
        V = function (e) {
          var n,
            t =
              null === (n = Object(N.a)(z, {}, { fetchPolicy: 'store-and-network' }).viewer) || void 0 === n
                ? void 0
                : n.create_community_action_result
          return t ? b.a.createElement(D, { createActionResult: t }) : null
        },
        q = function (e) {
          return b.a.createElement(B.a, { errorConfig: U }, b.a.createElement(V, null))
        },
        W = b.a.memo(q),
        X = t('GOQE'),
        J = (t('z84I'), t('M+/F'), t('yiKp')),
        Q = t.n(J),
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
        se = M.a.create(function (e) {
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
              width: 'calc(('.concat(M.a.theme.spaces.space36, ' * 3) + ').concat(M.a.theme.spaces.space24, ')'),
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
                return { clientEntity: Q()(Q()({}, oe), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(Y.a)(null == l ? void 0 : l.image) || !i) return null
          var s = null == l ? void 0 : l.image,
            c = null == l ? void 0 : l.crop,
            u = M.a.theme.aspectRatios.communityBanner,
            m = n ? ne.a.getCommunityBackgroundColor(r) : M.a.theme.colors.translucentBlack77
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
                        backgroundColor: M.a.theme.colors.gray300,
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
        he = x.a.d228a9a0,
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
        ve = M.a.create(function (e) {
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
        xe = t('QRqA'),
        Re = t('FIs5'),
        Le = t('mw9i'),
        Me = x.a.c63602d3,
        Oe = x.a.d7346631,
        Ae = x.a.fbd12fea,
        Pe = (function (e) {
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
                return b.a.createElement(Re.a, { header: Oe, message: Ae })
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
                        b.a.createElement(xe.a, null),
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
                            title: Me,
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
      f()(Pe, 'contextType', G.a)
      var je = Pe,
        He = t('hqKg'),
        De = function (e, n) {
          var t = n.user
          return t ? t.id_str : void 0
        },
        Be = function () {
          return Object(He.createSelector)(De, function (e) {
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
            return { urtModule: Be() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        Ue = t('yoO3'),
        ze = x.a.c63602d3,
        Ve = x.a.d7346631,
        qe = x.a.hb01fe46,
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
                  return e.props.isLoggedInUser ? b.a.createElement(Re.a, { header: Ve, message: qe }) : null
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
        Xe = t('5FtR'),
        Je = t('Y6L+'),
        Qe = t('VS6U'),
        Ge = t('zCf4'),
        Ye = x.a.h02a6fe5,
        Ze = x.a.c63602d3,
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
                    { exact: !0, path: '/'.concat(Je.J, '/communities') },
                    b.a.createElement(je, { hasCommunityMemberships: t, history: a, isLoggedInUser: r, location: l }),
                  ),
                  b.a.createElement(
                    Ge.b,
                    { exact: !0, path: '/'.concat(Je.J, '/communities/memberships') },
                    b.a.createElement(We, { isLoggedInUser: r, user: i }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (n) {
                var t = n || e.props,
                  a = t.createLocalApiErrorHandler,
                  l = t.fetchOneUserByScreenNameIfNeeded,
                  i = t.screenName
                i && l(i).catch(a(X.a))
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
                      b.a.createElement(Qe.a, {
                        backLocation: '/',
                        history: e,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: b.a.createElement(_.a, null),
                        title: n,
                      }),
                    )
                  }
                  return b.a.createElement(Xe.a, { to: '/' })
                },
              },
            ]),
            t
          )
        })(b.a.Component)
      f()(en, 'contextType', G.a)
      var nn = M.a.create(function (e) {
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
        x = (function (e) {
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
                    c = [R.root, s && R.flexWrap],
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
      d()(x, 'defaultProps', { layout: 'one-row' })
      var R = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      n.a = x
    },
    w9f9: function (e, n, t) {
      'use strict'
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
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'follow_request_sent',
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
                                        name: 'blocking',
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
                                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_following',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_follow_eligible',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'super_followed_by',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'smart_blocking',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'HighlightedUserLabelResponse',
                                    kind: 'LinkedField',
                                    name: 'affiliates_highlighted_label',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'HighlightedUserLabel',
                                        kind: 'LinkedField',
                                        name: 'label',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'user_label_type',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  r,
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            filters: null,
                            handle: 'user',
                            key: '',
                            kind: 'LinkedHandle',
                            name: 'result',
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
            id: '1W9nsM7w6WRAP-FAHkrXig',
            metadata: { sliceInfoPath: ['community', 'moderators_slice', 'slice_info'] },
            name: 'moderatorsSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (e.exports = u)
    },
    'weg/': function (e, n, t) {
      'use strict'
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
      e.exports = a
    },
    xPe1: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'CommunitySettingsRouter', function () {
          return nn
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
            return Promise.all([t.e(0), t.e(3), t.e(7), t.e(11), t.e(176)]).then(t.bind(null, 'P68U'))
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
        x = h.a.ea965b81,
        R = h.a.gea6cc19,
        L = h.a.cfd2f35d,
        M = h.a.j35d3ad6,
        O = h.a.f1e8fb21,
        A = h.a.fc2a5c92,
        P = h.a.e405ec21
      var j,
        H,
        D = S.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        B = g(function (e) {
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
            j = c()(_, 2),
            H = j[0],
            B = j[1],
            N = l.a.useState(!1),
            U = c()(N, 2),
            z = U[0],
            V = U[1],
            q = l.a.useState(!1),
            W = c()(q, 2),
            X = W[0],
            J = W[1],
            Q = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(P), []
              },
            }),
            Z = function (e) {
              return V(!1), J(Boolean(e)), e ? n(t, e) : y(t)
            },
            $ = Q ? l.a.createElement(F.a, { accessibilityLabel: T, aspectMode: I.a.exact(G), image: Q }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            H
              ? l.a.createElement(
                  C.a,
                  { style: D.error },
                  l.a.createElement(w.a, { Icon: b.a, headline: A, text: H, type: 'danger' }),
                )
              : null,
            l.a.createElement(k, {
              accessibilityLabel: x,
              aspectRatio: G,
              currentContent: $,
              location: E.d.CommunityBanner,
              mediaItem: z ? o : void 0,
              onChange: function (e) {
                var n = c()(e, 1)[0]
                B(!1), Z(n)
              },
              onFailure: function () {
                B(P), y(t)
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
                    J(!1),
                      s
                        ? (V(!0),
                          i(t, { mediaId: s, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(P) : Y(e)
                          }))
                        : B(P)
                  },
                })
              : null,
            f
              ? l.a.createElement(K.a, {
                  cancelButtonLabel: L,
                  confirmButtonLabel: M,
                  confirmButtonType: 'destructiveFilled',
                  headline: R,
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
        N = Object(r.a)()
          .propsFromActions(function () {
            return {
              editAccess: d.c.editAccess,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        U = t('yoO3'),
        z = t('mWs5'),
        V = t('3JAx'),
        q = h.a.f713fbd1,
        W = [
          { label: h.a.fd00a769, value: 'Public', helpText: h.a.d0784408 },
          { label: h.a.ce0523a8, value: 'Closed', helpText: h.a.ccfafe8c },
        ],
        X = N(function (e) {
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
            U.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: r, onSubmit: d, submitDisabled: !y, title: q },
              l.a.createElement(
                C.a,
                { style: J.root },
                l.a.createElement(V.a, {
                  name: 'membershipSetting',
                  onChange: function (e, n) {
                    m(n)
                  },
                  options: W,
                  value: u,
                }),
              ),
            ),
          )
        }),
        J = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        Q = t('n0Rl'),
        G = t('k49u'),
        Y = (t('849X'), t('TJCb'), t('uDfI')),
        Z = (t('yH/f'), t('I/KZ')),
        $ =
          (Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
          Object.freeze({ Open: 'Open', RequireModeratorApproval: 'RestrictedJoinRequestsRequireModeratorApproval' })),
        ee = (t('YWiL'), t('HvW7')),
        ne = t.n(ee),
        te = void 0 !== j ? j : (j = t('Vnwa')),
        ae = function () {
          var e = ne()(te),
            n = c()(e, 2),
            t = n[0],
            a = n[1],
            i = Object(Y.c)()
          return l.a.useCallback(
            function (e, n) {
              return a
                ? Promise.reject(new Error('Already updating membership settings'))
                : new Promise(function (a, l) {
                    var r = n.access,
                      o = n.invitesPolicy
                    t({
                      variables: {
                        communityId: e,
                        invitesPolicy: o,
                        joinPolicy: r === Z.a.Open ? $.Open : $.RequireModeratorApproval,
                      },
                      onCompleted: function (e) {
                        var n = (function (e) {
                          if (e && 'Community' === e.__typename) {
                            var n
                            switch (e.membership_settings.__typename) {
                              case Z.a.Open:
                                n = { __typename: Z.a.Open }
                                break
                              case Z.a.Restricted:
                                n = {
                                  __typename: Z.a.Restricted,
                                  invites_policy: e.membership_settings.invites_policy,
                                  join_approval_policy: e.membership_settings.join_approval_policy,
                                }
                            }
                            return { id_str: e.id_str, access: e.access, membership_settings: n }
                          }
                        })(e.community_membership_settings_put)
                        n && i(d.c.updateOne(n.id_str, n)), a()
                      },
                      onError: l,
                    })
                  })
            },
            [t, i, a],
          )
        },
        le = t('zCf4'),
        ie = t('wxEq'),
        re = t.n(ie),
        oe = void 0 !== H ? H : (H = t('tnnC'))
      var se,
        ce,
        ue = t('CVPS'),
        me = t.n(ue),
        de = h.a.f713fbd1,
        ye = h.a.c5d1634d,
        pe = h.a.b983f9e0,
        ge = h.a.fc2a5c92,
        fe = h.a.a1c93d73,
        he = void 0 !== se ? se : (se = t('1tGk')),
        be = function (e) {
          var n,
            t,
            a,
            i,
            r = e.community,
            o = me()(he, r),
            s = o.membership_settings,
            u = o.rest_id,
            m = (function (e) {
              var n = re()(oe, e)
              switch (n.__typename) {
                case Z.a.Restricted:
                  return { access: Z.a.Restricted, invitesPolicy: n.invites_policy }
                case Z.a.Open:
                  return { access: Z.a.Open, invitesPolicy: Z.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(n.__typename))
              }
            })(s),
            d = l.a.useState(),
            p = c()(d, 2),
            g = p[0],
            f = p[1],
            v = ae(),
            _ = Object(le.f)(),
            k = l.a.useState(),
            E = c()(k, 2),
            S = E[0],
            F = E[1],
            I = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            T = Object(Z.e)(m),
            x = c()(T, 2),
            R = x[0],
            L = x[1],
            M = l.a.useCallback(
              function () {
                var e = I({
                  customErrorHandler: function (e) {
                    var n = c()(e.errors, 1)[0],
                      t = n.code === G.a.GenericBadRequest && n.message ? n.message : fe
                    return F(t), []
                  },
                })
                v(u, R)
                  .then(function () {
                    _.goBack({ backLocation: '/i/communities/'.concat(u, '/tools/settings') })
                  })
                  .catch(e)
              },
              [u, I, _, R, v],
            ),
            O = l.a.useCallback(
              function () {
                var e = (function (e, n) {
                  if (e.access === Z.a.Restricted && n.access === Z.a.Open) return h.a.daedd9fa
                })(m, R)
                e ? f(e) : M()
              },
              [m, R, M],
            ),
            A = l.a.useCallback(function () {
              return f(void 0)
            }, []),
            P =
              ((t = R),
              (a = (n = m).access !== t.access),
              (i = n.access === Z.a.Restricted && n.invitesPolicy !== t.invitesPolicy),
              !(a || i)),
            j = S
              ? l.a.createElement(
                  C.a,
                  { style: ve.error },
                  l.a.createElement(w.a, { Icon: b.a, headline: ge, text: S, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            z.a,
            { communityId: u, onSubmit: O, submitDisabled: P, title: de },
            j,
            l.a.createElement(Z.d, { setters: L, state: R }),
            g &&
              l.a.createElement(K.a, {
                confirmButtonLabel: ye,
                confirmButtonType: 'primary',
                headline: pe,
                onCancel: A,
                onConfirm: M,
                text: g,
              }),
          )
        },
        ve = S.a.create(function (e) {
          return { error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        _e = t('v//M'),
        ke = void 0 !== ce ? ce : (ce = t('PbB6')),
        Ee = Object(Q.b)(ke, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Ce = function (e) {
          var n = { communityId: e.communityId }
          return l.a.createElement(Ee, {
            render: function (e) {
              var n = e.data,
                t = (e.error, e.fetchStatus),
                a = e.retry,
                i = null == n ? void 0 : n.community
              return l.a.createElement(_e.a, {
                fetchStatus: t,
                onRequestRetry: a,
                render: function () {
                  return i ? l.a.createElement(be, { community: i }) : null
                },
                retryable: !0,
              })
            },
            variables: n,
          })
        },
        Se = t('ROT1'),
        Fe = Object(r.a)()
          .propsFromActions(function () {
            return {
              editName: d.c.editName,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Ie = h.a.h3c0f1a2,
        we = h.a.fc2a5c92,
        Ke = h.a.cb5e6510
      var Te = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        xe = Fe(function (e) {
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
                      t = n.code === G.a.GenericBadRequest && n.message ? n.message : Ke
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
            U.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: r, onSubmit: E, submitDisabled: g, title: Ie },
              _
                ? l.a.createElement(
                    C.a,
                    { style: Te.error },
                    l.a.createElement(w.a, { Icon: b.a, headline: we, text: _, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Se.a, {
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
        Le = Object(r.a)()
          .propsFromActions(function () {
            return {
              editPurpose: d.c.editPurpose,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        Me = h.a.a895549f,
        Oe = h.a.fc2a5c92,
        Ae = h.a.ced22929
      var Pe = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        je = Le(function (e) {
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
                      t = n.code === G.a.GenericBadRequest && n.message ? n.message : Ae
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
            U.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: o, onSubmit: E, submitDisabled: g, title: Me },
              _
                ? l.a.createElement(
                    C.a,
                    { style: Pe.error },
                    l.a.createElement(w.a, { Icon: b.a, headline: Oe, text: _, type: 'danger' }),
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
        De = t('x0mb'),
        Be = t('5FtR'),
        Ne = t('t62R'),
        Ue = t('X00g'),
        ze = t('6vad'),
        Ve = t('csss'),
        qe = t('0yYu'),
        We = h.a.bb081ea1,
        Xe = h.a.h3e55b40,
        Je = h.a.j8af8ea9,
        Qe = h.a.d5f01115,
        Ge = h.a.c3c04b70,
        Ye = { Closed: h.a.ce0523a8, Public: h.a.fd00a769 },
        Ze = h.a.f4a98e9e,
        $e = h.a.f713fbd1,
        en = function (e) {
          var n = e.children
          return l.a.createElement(Ne.b, { color: 'gray700', size: 'subtext2' }, n)
        },
        nn = function (e) {
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
                return v ? (d.__typename === Z.a.Open ? Ye.Public : Ye.Closed) : Ye[r]
              },
              [r, v, d.__typename],
            ),
            S = Object(He.e)(n),
            F = Ue.a.getCommunityThemeDisplayName(S),
            I = Ue.a.getCommunityBackgroundColor(p)
          return l.a.createElement(
            le.d,
            null,
            f
              ? l.a.createElement(
                  le.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(xe, { community: n, history: t }),
                )
              : null,
            h
              ? l.a.createElement(
                  le.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(je, { community: n, history: t }),
                )
              : null,
            v
              ? l.a.createElement(
                  le.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Ce, { communityId: c }),
                )
              : b
              ? l.a.createElement(
                  le.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(X, { community: n, history: t }),
                )
              : null,
            l.a.createElement(
              le.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                U.a,
                null,
                l.a.createElement(
                  z.a,
                  { communityId: c, screenType: 'primaryDetail', title: We },
                  _ ? l.a.createElement(B, { communityId: c, hasCustomMedia: s, localMediaId: u, media: m }) : null,
                  l.a.createElement(ze.b, { text: Ze }),
                  l.a.createElement(Ve.a, {
                    description: l.a.createElement(en, null, y),
                    label: Xe,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(Ve.a, {
                    description: o ? l.a.createElement(en, null, o) : void 0,
                    label: Qe,
                    link: h ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(Ve.a, {
                        description: l.a.createElement(en, null, F),
                        label: Ge,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(De.a, { style: [{ color: I }, tn.themeIcon] })
                        },
                      })
                    : null,
                  v || b
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(qe.a, null),
                        l.a.createElement(ze.b, { text: $e }),
                        l.a.createElement(Ve.a, {
                          description: l.a.createElement(en, null, C),
                          label: Je,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            l.a.createElement(le.b, null, l.a.createElement(Be.a, { to: ''.concat(E, '/') })),
          )
        },
        tn =
          ((n.default = o(nn)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    xvEL: function (e, n, t) {
      'use strict'
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
      e.exports = a
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
        p = t('fz3c'),
        g = t('uDfI'),
        f = t('CxAY'),
        h = t('yrzJ'),
        b = t('mjJ+'),
        v = t('IG7M'),
        _ = t('eb3s'),
        k = (t('YWiL'), t('HvW7')),
        E = t.n(k),
        C = t('3XMw'),
        S = t.n(C),
        F = t('Lsrn'),
        I = t('k/Ka'),
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(I.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
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
      w.metadata = { width: 24, height: 24 }
      var K = w,
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(I.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
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
      var x,
        R = T,
        L = t('5oT/'),
        M = t('boUI'),
        O = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        A = S.a.g30bc699,
        P = S.a.e585d844,
        j = S.a.cab7c6f8,
        H = S.a.af40a8ef,
        D = S.a.e96d5254,
        B = S.a.f348a395,
        N = S.a.c3a1aebd,
        U = S.a.c273c8a6,
        z = S.a.e68b09b4,
        V = S.a.c0eb2a52,
        q = S.a.a5808125,
        W = S.a.b99364a5,
        X = {
          confirmButtonLabel: H,
          headline: j,
          text: function (e) {
            return u.a.createElement(
              S.a.I18NFormatMessage,
              { $i18n: 'd46c6e8f' },
              u.a.createElement(h.a, { screenName: e }),
            )
          },
        },
        J = {
          confirmButtonLabel: z,
          headline: U,
          text: function (e) {
            return u.a.createElement(
              S.a.I18NFormatMessage,
              { $i18n: 'c3a1f2be' },
              u.a.createElement(h.a, { screenName: e }),
            )
          },
        },
        Q = void 0 !== x ? x : (x = t('7xtl'))
      n.a = function (e) {
        var n = u.a.useContext(d.a),
          t = n.featureSwitches,
          a = n.loggedInUserId,
          i = t.isTrue('c9s_edit_moderators_enabled'),
          o = t.isTrue('c9s_remove_member_list_enabled'),
          c = e.communityId,
          h = e.communityRole,
          k = e.recordId,
          C = e.screenName,
          S = e.userId,
          F = e.viewerRole,
          I = u.a.useState(null),
          w = s()(I, 2),
          T = w[0],
          x = w[1],
          j = Object(g.c)(),
          H = E()(Q),
          U = s()(H, 2),
          z = U[0],
          G = U[1],
          Y = u.a.useCallback(
            function (e) {
              var n = e.communityId,
                t = e.errorMessage,
                a = e.recordId,
                l = e.role,
                i = (e.screenName, e.successMessage),
                r = e.userId
              z({
                variables: { communityId: n, userId: r, role: l },
                updater: function (e) {
                  var t = e.get(a)
                  null == t || t.setValue(l, 'community_role(community_id:"'.concat(n, '")')),
                    j(f.b.updateOne(''.concat(n, '_').concat(r), { role: l }))
                },
                onCompleted: function () {
                  j(Object(m.b)({ text: i }))
                },
                onError: function () {
                  j(Object(m.b)({ text: t }))
                },
              })
            },
            [z, j],
          ),
          Z = u.a.useCallback(
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
                case O.PromoteModerator:
                  ;(n = X), (a = y.a.Moderator), (l = D({ screenName: c })), (t = B({ screenName: c }))
                  break
                case O.DemoteModerator:
                  ;(n = J), (a = y.a.Member), (l = V({ screenName: c })), (t = q({ screenName: c }))
                  break
                default:
                  return
              }
              x(
                r()(
                  r()({}, n),
                  {},
                  {
                    text: n.text(c),
                    onConfirm: function () {
                      Y({
                        communityId: i,
                        errorMessage: t,
                        recordId: o,
                        role: a,
                        screenName: c,
                        successMessage: l,
                        userId: u,
                      }),
                        x(null)
                    },
                    onCancel: function () {
                      x(null)
                    },
                  },
                ),
              )
            },
            [Y],
          ),
          $ = u.a.useCallback(
            function (e) {
              var n = []
              if (i && F === y.a.Admin)
                switch (h) {
                  case y.a.Moderator:
                    n.push({
                      behavioralEventContext: { viewType: 'remove_moderator' },
                      disabled: G,
                      text: N,
                      Icon: K,
                      onClick: function () {
                        return Z({
                          communityId: c,
                          recordId: k,
                          roleAction: O.DemoteModerator,
                          screenName: C,
                          userId: S,
                        })
                      },
                    })
                    break
                  case y.a.Member:
                    n.push({
                      behavioralEventContext: { viewType: 'add_moderator' },
                      disabled: G,
                      text: P,
                      Icon: R,
                      onClick: function () {
                        return Z({
                          communityId: c,
                          recordId: k,
                          roleAction: O.PromoteModerator,
                          screenName: C,
                          userId: S,
                        })
                      },
                    })
                }
              return (
                o &&
                  h === y.a.Member &&
                  n.push({
                    text: W({ screenName: C }),
                    Icon: L.a,
                    behavioralEventContext: { viewType: 'remove_user' },
                    link: {
                      pathname: '/i/report/'
                        .concat(p.a.RemoveCommunityMember, '/')
                        .concat(S, '?community_id=')
                        .concat(c),
                      state: {
                        clientReferer: window.location.pathname,
                        scribeNamespace: { page: 'community', section: 'people', component: 'member' },
                      },
                    },
                  }),
                n.push({
                  behavioralEventContext: { viewType: 'view_profile' },
                  text: A({ screenName: C }),
                  Icon: M.a,
                  link: '/'.concat(C),
                }),
                u.a.createElement(b.a, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
              )
            },
            [c, Z, i, o, k, h, G, C, S, F],
          )
        return S !== a
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(v.a, { renderActionMenu: $ }),
              T
                ? u.a.createElement(
                    _.a,
                    l()(
                      {
                        confirmButtonType: 'primary',
                        onCancel: function () {
                          x(null)
                        },
                      },
                      T,
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
          x = K[1],
          R = r.a.useState(f.a.getCommunityThemeDisplayName(T)),
          L = l()(R, 2),
          M = L[0],
          O = L[1],
          A = r.a.useState(c),
          P = l()(A, 2),
          j = P[0],
          H = P[1],
          D = r.a.useState([]),
          B = l()(D, 2),
          N = B[0],
          U = B[1]
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
            { accessibilityLabel: E({ themeName: M }), disabled: !p, onPress: z, size: 'small', type: 'brandFilled' },
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
                x(t), O(f.a.getCommunityThemeDisplayName(t)), H(e), v(a)
              },
              options: N,
              value: j,
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
      ;(r.hash = '9533cbfb5394a4601514cbc83020138b'), (e.exports = r)
    },
    zum0: function (e, n, t) {
      'use strict'
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
      e.exports = a
    },
  },
])
//# sourceMappingURL=WIPED
