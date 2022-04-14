;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    '2qZs': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M2.264 22.983c-.322 0-.638-.126-.88-.368-.374-.374-.473-.926-.25-1.405L2.8 17.58c-1.017-1.7-1.55-3.62-1.55-5.58C1.25 6.072 6.072 1.25 12 1.25S22.75 6.072 22.75 12 17.928 22.75 12 22.75c-1.957 0-3.876-.533-5.55-1.54l-3.66 1.657c-.17.078-.35.116-.526.116zm4.158-3.286c.278 0 .558.077.807.23 1.434.864 3.085 1.323 4.77 1.323 5.1 0 9.25-4.15 9.25-9.25S17.1 2.75 12 2.75 2.75 6.9 2.75 12c0 1.688.458 3.338 1.326 4.774.266.44.298.977.086 1.434l-1.384 3.014 3.016-1.386c.2-.093.413-.14.628-.14z',
              }),
              r.a.createElement('path', {
                d: 'M12 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25zm0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25z',
              }),
              r.a.createElement('path', {
                d: 'M14.5 12.75c-.414 0-.75-.336-.75-.75 0-.965-.785-1.75-1.75-1.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.792 0 3.25 1.458 3.25 3.25 0 .414-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '45lU': function (e, t, n) {
      'use strict'
      var a = n('rHpw').a.create(function (e) {
        return {
          backgroundArea: { backgroundColor: e.colors.activeBlack },
          drawer: { maxWidth: '70%' },
          wrapper: {
            alignSelf: 'flex-start',
            backgroundColor: e.colors.navigationBackground,
            boxShadow: e.boxShadows.medium,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
          },
          header: { flexGrow: 0, flexShrink: 0 },
          scrollableItems: {
            overflow: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            flexGrow: 1,
            flexShrink: 1,
          },
          scrollableContentPadding: { paddingBottom: '44px' },
          item: {
            paddingVertical: e.spaces.space16,
            paddingHorizontal: e.spaces.space16,
            flexDirection: 'row',
            flexGrow: 1,
          },
          itemAccount: {
            paddingBottom: 0,
            paddingTop: e.spaces.space12,
            backgroundClip: 'content-box',
            backgroundColor: e.colors.navigationBackground,
            flexDirection: 'row',
            alignItems: 'center',
          },
          avatarWrapper: { flexGrow: 1 },
          itemProfileStats: { paddingVertical: e.spaces.space12 },
          icon: { color: e.colors.text, flexShrink: 0, marginRight: e.spaces.space12 },
          link: { flexGrow: 1, maxWidth: '100%' },
          linkFollowers: { display: 'flex', width: '100%' },
          linkProfileStats: { color: e.colors.gray700 },
          linkProfileStatsLeft: { marginRight: e.spaces.space12 },
          dashMenuItem: { alignItems: 'center', flexDirection: 'row' },
          itemLabel: { flexGrow: 1 },
          itemAccessory: { flexShrink: 1, marginLeft: e.spaces.space20, marginRight: e.spaces.space16 },
          multiAccountLink: { marginRight: e.spaces.space4 },
          userNames: { display: 'flex', flexDirection: 'column', paddingVertical: e.spaces.space12 },
          menuContentWidth: { width: 'calc('.concat(e.spaces.space64, ' * 4.25)') },
        }
      })
      t.a = a
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('2G9S')
      var a = n('1YZw'),
        i = n('pXBW'),
        l = n('3XMw'),
        r = n.n(l),
        c = n('SrIh'),
        o = r.a.a5d4fda0,
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var l = n.context
              return (
                !n instanceof i.a && (n.message = 'Strato error occurred in '.concat(l.id, ': ').concat(l.action)),
                Object(c.a)(n, { extra: { context: l, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '4BrD': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
              }),
              r.a.createElement('path', {
                d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '9qNn': function (e, t, n) {
      'use strict'
      t.a = { logout: 'logout', switcher: 'switcher', settings: 'settings', help: 'help' }
    },
    Cp2k: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12.341 20.5H23V22H10.842l1.088-1.088zm-9.265 1.248h-.073a.75.75 0 01-.746-.823l.543-5.562a2.745 2.745 0 01.8-1.676l11.155-11.16a2.385 2.385 0 013.182 0l3.535 3.536a2.248 2.248 0 010 3.18L10.313 20.407a2.756 2.756 0 01-1.675.792zM14.667 4.736l4.6 4.6 1.151-1.151a.747.747 0 000-1.06l-3.542-3.538a.81.81 0 00-1.061 0zM3.839 20.165l4.652-.459a1.253 1.253 0 00.762-.36l.555-.555 8.394-8.4-4.6-4.6-8.946 8.957a1.251 1.251 0 00-.36.761z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    Drq4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              r.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              r.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('uFXj')
      var a = n('ERkP'),
        i = n.n(a),
        l = n('rHpw'),
        r = n('MWbm')
      function c(e) {
        var t = e.spacing
        return i.a.createElement(r.a, {
          accessibilityRole: 'separator',
          style: [o.divider, { marginVertical: null != t ? l.a.theme.spaces[t] : void 0 }],
        })
      }
      var o = l.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    Q3sg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    VN5n: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('VrFO'),
        r = n.n(l),
        c = n('Y9Ll'),
        o = n.n(c),
        s = n('1Pcy'),
        d = n.n(s),
        m = n('5Yy7'),
        h = n.n(m),
        u = n('2VqO'),
        _ = n.n(u),
        b = n('KEM+'),
        v = n.n(b),
        p = (n('2G9S'), n('ERkP')),
        k = n.n(p),
        f = n('xQWt'),
        w = n('RqPI'),
        g = n('P1r1'),
        C = n('li/m'),
        y = n('G6rE'),
        E = n('rxPX'),
        I = n('0KEI'),
        M = Object(E.a)()
          .propsFromState(function () {
            return {
              communitiesActions: w.f,
              hasCommunityMemberships: C.d,
              pendingFollowersInfo: f.f,
              loggedInUser: y.e.selectLoggedInUser,
              userFeatures: w.q,
              settings: g.g,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.communitiesActions,
              n = e.hasCommunityMemberships,
              a = e.loggedInUser,
              i = e.pendingFollowersInfo,
              l = e.settings,
              r = e.userFeatures,
              c = i.acceptedIds,
              o = i.ids
            return {
              communitiesActions: t,
              acceptedFollowerCount: c.length,
              hasCommunityMemberships: n,
              loggedInUser: a,
              pendingFollowerCount: o.length - c.length,
              settings: l,
              isMediaStudioLinkVisible: !(!r || !r.mediatool_studio_library),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('DASH_MENU_CONTAINER'),
              fetchPendingFollowersIfNeeded: f.d,
              updateDataSaverMode: g.K,
            }
          })
          .withAnalytics(),
        S = n('45mF'),
        x = (n('hBvt'), n('3XMw')),
        z = n.n(x),
        L = n('45lU'),
        T = n('MWbm'),
        A = n('htQn'),
        H = n('t62R'),
        B = n('Znyr'),
        O = z.a.d86bbf0f,
        D = z.a.h6beb5fa,
        P = function (e) {
          var t = e.badgeCount,
            n = e.icon,
            a = e.iconColor,
            i = e.label,
            l = e.link,
            r = e.onClick,
            c = e.rightControl,
            o = e.testID
          return k.a.createElement(
            T.a,
            { style: L.a.dashMenuItem },
            k.a.createElement(
              A.a,
              { link: l, onClick: r, style: L.a.link, testID: o },
              k.a.createElement(
                T.a,
                { style: L.a.item },
                n ? k.a.createElement(n, { style: a ? [L.a.icon, { color: a }] : L.a.icon }) : null,
                k.a.createElement(H.b, { numberOfLines: 1, style: L.a.itemLabel }, i),
                t
                  ? k.a.createElement(
                      T.a,
                      { style: L.a.itemAccessory },
                      k.a.createElement(B.a, {
                        count: t,
                        standalone: !0,
                        truncatedCountFormatter: D,
                        unreadCountLabel: O,
                      }),
                    )
                  : null,
              ),
            ),
            c,
          )
        },
        F = n('3Wr5'),
        V = n('Ig1G'),
        R = n('rHpw'),
        K = n('Lsrn'),
        j = n('k/Ka'),
        N = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
              }),
              k.a.createElement('path', {
                d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
              }),
            ),
          )
        }
      N.metadata = { width: 24, height: 24 }
      var q = N,
        W = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z',
              }),
            ),
          )
        }
      W.metadata = { width: 24, height: 24 }
      var U = W,
        G = R.a.create(function (e) {
          return { bristles: { color: e.colors.primary, position: 'absolute', top: 0, left: 0 } }
        }),
        Z = function (e) {
          var t = e.style
          return k.a.createElement(
            T.a,
            { accessibilityRole: 'none' },
            k.a.createElement(q, { style: t }),
            k.a.createElement(U, { style: [t, G.bristles] }),
          )
        },
        X = n('fs1G'),
        Y = n('Es6L'),
        Q = n('9qNn'),
        J = n('aITJ'),
        $ = n('TnY3'),
        ee = n('v6aA'),
        te = n('CK8+'),
        ne = n('OOKO'),
        ae = n('boUI'),
        ie = n('+1/s'),
        le = n('EweD'),
        re = n('sUoZ'),
        ce = n('/WPq'),
        oe = n('OGrp'),
        se = n('5VjN'),
        de = n('2lds'),
        me = n('78ol'),
        he = n('Q3sg'),
        ue = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M20.333 4.6H3.667a1.706 1.706 0 00-1.623 1.776v11.247A1.706 1.706 0 003.667 19.4h16.666a1.706 1.706 0 001.623-1.772V6.377A1.706 1.706 0 0020.333 4.6zM3.443 17.624V6.368a.5.5 0 01.072-.257l.013-.018A.2.2 0 013.667 6h4.514v12H3.667c-.093 0-.224-.144-.224-.376zm6.2.38V6h4.71v12zM20.557 6.376v11.256a.5.5 0 01-.072.257l-.013.018a.2.2 0 01-.137.1h-4.516V6h4.514c.093 0 .224.144.224.376z',
              }),
              k.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            ),
          )
        }
      ue.metadata = { width: 24, height: 24 }
      var _e = ue,
        be = n('PU7B'),
        ve = n('Cp2k'),
        pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M6.016 16.97l-1.53 1.53c-.15.14-.34.22-.53.22s-.38-.08-.53-.22c-.29-.29-.29-.77 0-1.06l1.53-1.54c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.07zm2.12 2.12l-3.64 3.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06l3.64-3.64c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06z',
              }),
              k.a.createElement('path', {
                d: 'M22.306 1.49c-.28-.28-.66-.44-1.06-.44 0 0-.09 0-.13.01-4.31.38-8.37 2.32-11.4 5.45h-.01c-2.68.54-5.12 1.86-7.09 3.84l-.93.93c-.46.47-.57 1.18-.27 1.76.27.5.78.8 1.33.8.09 0 .18-.01.27-.03l3.98-.73c.59.97 2.26 2.87 3.82 3.78l-.73 4.05c-.12.64.2 1.29.78 1.59.22.12.46.17.69.17.4 0 .78-.15 1.07-.44l.94-.94c1.96-1.99 3.27-4.48 3.8-7.21l.07-.06c0-.01.04-.04.04-.05 3.01-3.03 4.88-7.04 5.27-11.29.04-.44-.12-.88-.44-1.19zm-5.89 11.43c-.15.14-.3.28-.44.42v.02c-.41 2.6-1.63 5-3.48 6.87l-.93.94.88-4.89c.04-.22-.08-.42-.28-.52-1.03-.5-3.65-2.87-4.12-3.97-.09-.23-.32-.37-.56-.33l-4.74.88.93-.94c1.85-1.85 4.23-3.09 6.79-3.5.14-.17.3-.33.46-.48 2.88-2.9 6.55-4.53 10.32-4.87-.34 3.77-1.95 7.47-4.83 10.37z',
              }),
              k.a.createElement('path', {
                d: 'M17.546 6.36c-.88-.88-2.3-.88-3.18 0s-.88 2.31 0 3.18c.88.88 2.3.88 3.18 0 .88-.87.88-2.3 0-3.18zm-1.06 2.12c-.29.3-.77.3-1.06 0-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0s.29.77 0 1.06z',
              }),
            ),
          )
        }
      pe.metadata = { width: 24, height: 24 }
      var ke = pe,
        fe = n('2qZs'),
        we = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      we.metadata = { width: 24, height: 24 }
      var ge = we,
        Ce = n('4BrD'),
        ye = n('xrkw'),
        Ee = n('nV1z'),
        Ie = n('M2x3'),
        Me = n('SNyS'),
        Se = n('Drq4'),
        xe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M20.602 17.158l-7.85-5.546V2c0-.418-.295-.75-.76-.752-1.705 0-3.41.417-4.935 1.206C1.793 5.18-.27 11.68 2.454 16.944c1.91 3.688 5.672 5.805 9.564 5.805 1.663 0 3.35-.39 4.925-1.205 1.527-.79 2.854-1.947 3.84-3.343.238-.338.157-.807-.18-1.045zm1.06-1.823c-.064 0-.13-.008-.195-.026-.4-.11-.637-.52-.53-.92.175-.655.28-1.328.307-2.004.018-.414.376-.736.78-.718.415.016.736.366.72.78-.034.786-.154 1.57-.358 2.33-.09.334-.393.555-.724.555zm-.327-6.17c-.302 0-.586-.185-.7-.483-.243-.633-.555-1.24-.928-1.8-.23-.346-.135-.812.21-1.04.345-.23.81-.136 1.04.21.434.653.797 1.357 1.08 2.093.147.387-.047.82-.434.97-.088.033-.178.05-.268.05zm-3.888-4.8c-.14 0-.282-.04-.408-.122-.57-.37-1.18-.676-1.813-.912-.388-.143-.585-.575-.44-.963.145-.388.578-.585.965-.44.736.275 1.443.63 2.103 1.06.348.225.446.69.22 1.037-.143.22-.384.34-.63.34z',
              }),
            ),
          )
        }
      xe.metadata = { width: 24, height: 24 }
      var ze = xe,
        Le = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M20.602 17.158l-7.85-5.546V2c0-.418-.295-.75-.76-.752-1.705 0-3.41.417-4.935 1.206C1.793 5.18-.27 11.68 2.454 16.944c1.91 3.688 5.672 5.805 9.564 5.805 1.663 0 3.35-.39 4.925-1.205 1.527-.79 2.854-1.947 3.84-3.343.238-.338.157-.807-.18-1.045zm-4.348 3.056c-4.53 2.346-10.122.57-12.468-3.96-2.345-4.53-.57-10.122 3.96-12.468 1.11-.575 2.27-.92 3.505-1.004V12c0 .253.126.476.318.612l7.52 5.313c-.782.94-1.726 1.715-2.833 2.29zm5.408-4.88c-.064 0-.13-.007-.195-.025-.4-.11-.637-.52-.53-.92.175-.655.28-1.328.307-2.004.018-.414.376-.736.78-.718.415.016.736.366.72.78-.034.786-.154 1.57-.358 2.33-.09.334-.393.555-.724.555zm-.327-6.17c-.302 0-.586-.184-.7-.482-.243-.633-.555-1.24-.928-1.8-.23-.346-.135-.812.21-1.04.345-.23.81-.136 1.04.21.434.653.797 1.357 1.08 2.093.147.387-.047.82-.434.97-.088.033-.178.05-.268.05zm-3.888-4.8c-.14 0-.282-.04-.408-.12-.57-.37-1.18-.677-1.813-.913-.388-.143-.585-.575-.44-.963.145-.388.578-.585.965-.44.736.275 1.443.63 2.103 1.06.348.225.446.69.22 1.037-.143.22-.384.34-.63.34z',
              }),
            ),
          )
        }
      Le.metadata = { width: 24, height: 24 }
      var Te = Le,
        Ae = z.a.c818c60c,
        He = z.a.b5711f09,
        Be = z.a.i3145aa0,
        Oe = z.a.b5298d91,
        De = z.a.a57a341b,
        Pe = z.a.i83d4f13,
        Fe = 'Collaborate',
        Ve = z.a.f66d24be,
        Re = z.a.c4881c66,
        Ke = z.a.h54e6137,
        je = z.a.ae1bbb26,
        Ne = z.a.a58e0e51,
        qe = z.a.deaf7e0a,
        We = z.a.b4af8c6a,
        Ue = z.a.ed21f885,
        Ge = z.a.i1d35d73,
        Ze = z.a.d0a51fb1,
        Xe = 'Write',
        Ye = z.a.fa98627a,
        Qe = z.a.fd442790,
        Je = z.a.b8533bac,
        $e = z.a.b0041756,
        et = z.a.h02a6fe5,
        tt = z.a.b7fa0cfd,
        nt = z.a.ab38b896,
        at = z.a.c9d41313,
        it = (function (e) {
          h()(n, e)
          var t = _()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              v()(
                d()(e),
                '_collaborateEnabled',
                e.context.featureSwitches.isTrue('responsive_web_gaggle_site_enabled'),
              ),
              v()(
                d()(e),
                '_leftNavRefreshConnectEnabled',
                e.context.featureSwitches.isTrue('responsive_web_left_nav_refresh_connect_enabled'),
              ),
              v()(
                d()(e),
                '_leftNavRefreshTopicsEnabled',
                e.context.featureSwitches.isTrue('responsive_web_left_nav_refresh_topics_enabled'),
              ),
              v()(
                d()(e),
                '_momentMakerEnabled',
                e.context.featureSwitches.isTrue('responsive_web_moment_maker_enabled'),
              ),
              v()(
                d()(e),
                '_newslettersEnabled',
                e.context.featureSwitches.isTrue('responsive_web_newsletters_menu_enabled'),
              ),
              v()(
                d()(e),
                '_twitterForProfessionalsEnabled',
                e.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              v()(
                d()(e),
                '_birdwatchEnabled',
                e.context.featureSwitches.isTrue('responsive_web_birdwatch_history_enabled'),
              ),
              v()(
                d()(e),
                '_twitterArticlesComposeEnabled',
                e.context.featureSwitches.isTrue('responsive_web_twitter_article_compose_enabled'),
              ),
              v()(
                d()(e),
                '_shouldRenderTweetDeck',
                e.context.featureSwitches.isTrue('responsive_web_tweetdeck_menu_item_enabled'),
              ),
              v()(d()(e), '_renderProfileItem', function (t) {
                return t
                  ? k.a.createElement(P, { icon: ae.a, label: Ye, link: '/'.concat(t), onClick: e._handleProfileClick })
                  : null
              }),
              v()(d()(e), '_renderTopicsItem', function (t) {
                return t
                  ? k.a.createElement(P, {
                      icon: ie.a,
                      label: Je,
                      link: '/'.concat(t, '/topics'),
                      onClick: e._handleTopicsClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderConnectItem', function () {
                return k.a.createElement(P, {
                  icon: le.a,
                  label: Oe,
                  link: '/i/connect_people',
                  onClick: e._handleConnectClick,
                })
              }),
              v()(d()(e), '_renderCollaborateItem', function () {
                return e._collaborateEnabled
                  ? k.a.createElement(P, {
                      icon: re.a,
                      label: Fe,
                      link: {
                        external: !0,
                        pathname: '/i/collaborate/home',
                        query: { enable_filtered_bundle: 'bundle.Collaborate' },
                      },
                    })
                  : null
              }),
              v()(d()(e), '_renderListsItem', function (t) {
                return t
                  ? k.a.createElement(P, {
                      icon: ce.a,
                      label: $e,
                      link: '/'.concat(t, '/lists'),
                      onClick: e._handleListsClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderCommunitiesItem', function (t) {
                return t
                  ? k.a.createElement(P, {
                      icon: oe.a,
                      label: et,
                      link: '/'.concat(t, '/communities'),
                      onClick: e._handleCommunitiesClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderTopArticlesItem', function () {
                return k.a.createElement(P, {
                  icon: se.a,
                  label: tt,
                  link: '/i/articles',
                  onClick: e._handleTopArticlesClick,
                })
              }),
              v()(d()(e), '_renderBookmarksItem', function () {
                return k.a.createElement(P, {
                  icon: de.a,
                  label: Be,
                  link: '/i/bookmarks',
                  onClick: e._handleBookmarksClick,
                })
              }),
              v()(d()(e), '_renderMomentsItem', function (t) {
                var n = e._momentMakerEnabled ? '/i/moment_maker' : t ? '/'.concat(t, '/moments') : void 0
                return n
                  ? k.a.createElement(P, { icon: me.a, label: We, link: n, onClick: e._handleMomentsClick })
                  : null
              }),
              v()(d()(e), '_renderTwitterBlueItem', function () {
                var t = e.context.userClaims.isTwitterBlueSubscriber()
                if (e.context.featureSwitches.isTrue('subscriptions_sign_up_enabled') || t) {
                  var n = t ? '/settings/twitter_blue' : '/i/twitter_blue_sign_up'
                  return k.a.createElement(P, {
                    icon: he.a,
                    iconColor: R.a.theme.colors.brandColor,
                    label: Ue,
                    link: n,
                    onClick: e._handleTwitterBlueClick,
                  })
                }
                return null
              }),
              v()(d()(e), '_renderTweetDeckItem', function () {
                return k.a.createElement(P, {
                  icon: _e,
                  label: Ge,
                  link: 'https://tweetdeck.twitter.com',
                  onClick: e._handleTweetDeckClick,
                })
              }),
              v()(d()(e), '_renderNewslettersItem', function () {
                return e._newslettersEnabled
                  ? k.a.createElement(P, {
                      icon: be.a,
                      label: Ze,
                      link: '/i/newsletters',
                      onClick: e._handleNewslettersClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderTwitterArticlesItem', function () {
                return e._twitterArticlesComposeEnabled
                  ? k.a.createElement(P, {
                      icon: ve.a,
                      label: Xe,
                      link: '/i/twitter-article-composer',
                      onClick: e._handleTwitterArticlesClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderTwitterForProfessionalsItem', function () {
                return e._twitterForProfessionalsEnabled
                  ? k.a.createElement(P, {
                      icon: ke,
                      label: at,
                      link: {
                        pathname: '/i/flow/convert_to_professional',
                        state: { input: { requested_variant: 'navdrawer' } },
                        method: 'push',
                      },
                      onClick: e._handleTwitterForProfessionalsClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderBirdwatchItem', function () {
                return e._birdwatchEnabled
                  ? k.a.createElement(P, {
                      icon: fe.a,
                      label: He,
                      link: '/i/birdwatch',
                      onClick: e._handleBirdwatchClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderFollowerCountsItem', function () {
                var t = e.props,
                  n = t.acceptedFollowerCount,
                  a = t.pendingFollowerCount
                return a || n
                  ? k.a.createElement(P, {
                      badgeCount: a,
                      icon: ge,
                      label: Pe,
                      link: '/follower_requests',
                      onClick: e._handleFollowerRequestsClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderTwitterAdsItem', function () {
                return k.a.createElement(P, {
                  icon: Ce.a,
                  label: nt,
                  link: 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads-rweb',
                  onClick: e._handleTwitterAdsClick,
                })
              }),
              v()(d()(e), '_renderAnalyticsItem', function () {
                return k.a.createElement(P, {
                  icon: ye.a,
                  label: Ae,
                  link: 'https://analytics.twitter.com/',
                  onClick: e._handleAnalyticsClick,
                })
              }),
              v()(d()(e), '_renderMediaStudioItem', function () {
                return e.props.isMediaStudioLinkVisible
                  ? k.a.createElement(P, {
                      icon: Ee.a,
                      label: qe,
                      link: 'https://studio.twitter.com/?ref=dotcom',
                      onClick: e._handleMediaStudioClick,
                    })
                  : null
              }),
              v()(d()(e), '_renderSettingsItem', function () {
                return k.a.createElement(P, {
                  icon: Ie.a,
                  label: Qe,
                  link: '/settings',
                  onClick: e._handleSettingsClick,
                  testID: Q.a.settings,
                })
              }),
              v()(d()(e), '_renderHelpCenterItem', function () {
                return k.a.createElement(P, {
                  icon: Me.a,
                  label: Ve,
                  link: 'https://support.twitter.com/',
                  onClick: e._handleHelpClick,
                  testID: Q.a.help,
                })
              }),
              v()(d()(e), '_renderDisplayItem', function () {
                return k.a.createElement(P, { icon: Z, label: Re, link: '/i/display', onClick: e._handleDisplayClick })
              }),
              v()(d()(e), '_renderKeyboardShortcuts', function () {
                return J.b.isDesktopOS()
                  ? k.a.createElement(P, {
                      icon: Se.a,
                      label: Ke,
                      link: '/i/keyboard_shortcuts',
                      onClick: e._handleMenuItemClick('keyboard_shortcuts_overflow_item'),
                    })
                  : null
              }),
              v()(d()(e), '_renderLabsItem', function () {
                return null
              }),
              v()(d()(e), '_renderLogoutItem', function (t) {
                return t
                  ? k.a.createElement(P, {
                      label: Object(F.a)().hasMultiAccountCookie ? Ne({ screenName: t }) : je,
                      link: '/logout',
                      onClick: e._handleLogoutScribingClick,
                      testID: Q.a.logout,
                    })
                  : null
              }),
              v()(d()(e), '_renderDataSaverItem', function () {
                var t = e.props.settings,
                  n = t.dataSaverMode ? ze : Te
                return k.a.createElement(P, {
                  icon: n,
                  label: De,
                  link: '/settings/data',
                  onClick: e._handleDataSaverClick,
                  rightControl: k.a.createElement(te.a, {
                    accessibilityLabel: De,
                    onValueChange: e._handleDataSaverChanged,
                    style: L.a.itemAccessory,
                    value: t.dataSaverMode,
                  }),
                })
              }),
              v()(d()(e), '_handleDataSaverChanged', function (t) {
                var n = e.props,
                  a = n.analytics,
                  l = n.createLocalApiErrorHandler,
                  r = n.updateDataSaverMode
                a.scribe({ element: 'dataSaverMode', action: t ? 'on' : 'off' }),
                  r({ enabled: t }).catch(l(i()(i()({}, Object(S.a)()), {}, { showToast: !0 })))
              }),
              v()(d()(e), '_handleMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    i = n.onClose
                  t && a.scribe({ section: 'overflow_menu', element: t, action: 'click' }), i && i()
                }
              }),
              v()(d()(e), '_handleDataSaverClick', e._handleMenuItemClick('data_saver_overflow_item')),
              v()(d()(e), '_handleProfileClick', e._handleMenuItemClick('profile_overflow_item')),
              v()(d()(e), '_handleTopicsClick', e._handleMenuItemClick('topics_overflow_item')),
              v()(d()(e), '_handleConnectClick', e._handleMenuItemClick('connect_overflow_item')),
              v()(d()(e), '_handleFollowerRequestsClick', e._handleMenuItemClick('follower_requests_overflow_item')),
              v()(d()(e), '_handleListsClick', e._handleMenuItemClick('lists_overflow_item')),
              v()(d()(e), '_handleCommunitiesClick', e._handleMenuItemClick('communities_overflow_item')),
              v()(d()(e), '_handleTopArticlesClick', e._handleMenuItemClick('top_articles_overflow_item')),
              v()(d()(e), '_handleBookmarksClick', e._handleMenuItemClick('bookmarks_overflow_item')),
              v()(d()(e), '_handleMomentsClick', e._handleMenuItemClick('moments_overflow_item')),
              v()(d()(e), '_handleTwitterBlueClick', e._handleMenuItemClick('twitter_blue_overflow_item')),
              v()(d()(e), '_handleTweetDeckClick', e._handleMenuItemClick('tweetdeck_overflow_item')),
              v()(d()(e), '_handleSettingsClick', e._handleMenuItemClick('settings_overflow_item')),
              v()(d()(e), '_handleSimpleClick', e._handleMenuItemClick()),
              v()(d()(e), '_handleHelpClick', e._handleMenuItemClick('help_overflow_item')),
              v()(d()(e), '_handleDisplayClick', e._handleMenuItemClick('display_overflow_item')),
              v()(d()(e), '_handleLogoutScribingClick', e._handleMenuItemClick('logout_overflow_item')),
              v()(d()(e), '_handleTwitterAdsClick', e._handleMenuItemClick('twitter_ads_item')),
              v()(d()(e), '_handleAnalyticsClick', e._handleMenuItemClick('analytics_item')),
              v()(d()(e), '_handleMediaStudioClick', e._handleMenuItemClick('media_studio')),
              v()(d()(e), '_handleNewslettersClick', e._handleMenuItemClick('newsletters')),
              v()(d()(e), '_handleTwitterArticlesClick', e._handleMenuItemClick('twitter_articles')),
              v()(d()(e), '_handleTwitterForProfessionalsClick', e._handleMenuItemClick('twitter_for_professionals')),
              v()(d()(e), '_handleBirdwatchClick', e._handleMenuItemClick('birdwatch')),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props,
                    t = e.fetchPendingFollowersIfNeeded,
                    n = e.loggedInUser
                  n && n.protected && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.communitiesActions,
                    n = e.hasCommunityMemberships,
                    a = e.loggedInUser,
                    i = e.withMoreSideNavOverflow,
                    l = a && a.screen_name,
                    r = this.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                    c = Object(V.f)({
                      featureSwitches: this.context.featureSwitches,
                      communitiesActions: t,
                      hasCommunityMemberships: n,
                    })
                  return k.a.createElement(
                    k.a.Fragment,
                    null,
                    Object(Y.a)()
                      ? k.a.createElement(
                          k.a.Fragment,
                          null,
                          this._renderFollowerCountsItem(),
                          i || this._leftNavRefreshConnectEnabled || this._leftNavRefreshTopicsEnabled
                            ? this._renderBookmarksItem()
                            : null,
                          c && r ? this._renderCommunitiesItem(l) : null,
                          c || r || i ? this._renderListsItem(l) : null,
                          this._leftNavRefreshConnectEnabled && i ? this._renderConnectItem() : null,
                          this._leftNavRefreshTopicsEnabled && !i ? null : this._renderTopicsItem(l),
                          this._renderMomentsItem(l),
                          this._renderCollaborateItem(),
                          this._renderTwitterBlueItem(),
                          this._shouldRenderTweetDeck && this._renderTweetDeckItem(),
                          this._twitterArticlesComposeEnabled
                            ? this._renderTwitterArticlesItem()
                            : this._renderNewslettersItem(),
                          this._renderTwitterForProfessionalsItem(),
                          this._renderTwitterAdsItem(),
                          this._renderAnalyticsItem(),
                          this._renderMediaStudioItem(),
                          this._renderBirdwatchItem(),
                          k.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderSettingsItem(),
                          this._renderHelpCenterItem(),
                          this._renderDisplayItem(),
                          this._renderKeyboardShortcuts(),
                        )
                      : k.a.createElement(
                          k.a.Fragment,
                          null,
                          this._renderProfileItem(l),
                          r ? this._renderTopArticlesItem() : null,
                          this._renderListsItem(l),
                          this._renderTopicsItem(l),
                          this._renderBookmarksItem(),
                          this._renderMomentsItem(l),
                          this._renderCollaborateItem(),
                          this._renderTwitterBlueItem(),
                          this._shouldRenderTweetDeck && this._renderTweetDeckItem(),
                          this._twitterArticlesComposeEnabled
                            ? this._renderTwitterArticlesItem()
                            : this._renderNewslettersItem(),
                          this._renderFollowerCountsItem(),
                          k.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderTwitterForProfessionalsItem(),
                          this._renderTwitterAdsItem(),
                          this._renderAnalyticsItem(),
                          this._renderMediaStudioItem(),
                          this._renderBirdwatchItem(),
                          k.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderSettingsItem(),
                          this._renderHelpCenterItem(),
                          this._renderLabsItem(),
                          k.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderDataSaverItem(),
                          this._renderDisplayItem(),
                          this._renderKeyboardShortcuts(),
                          k.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderLogoutItem(l),
                        ),
                  )
                },
              },
            ]),
            n
          )
        })(k.a.Component)
      v()(it, 'contextType', ee.a), v()(it, 'defaultProps', { onClose: X.a })
      t.a = Object($.a)(M(it))
    },
    nV1z: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    xrkw: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        l = n('ERkP'),
        r = n.n(l),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
