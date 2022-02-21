;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
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
        l = n('pXBW'),
        i = n('3XMw'),
        r = n.n(i),
        c = n('SrIh'),
        o = r.a.a5d4fda0,
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var i = n.context
              return (
                !n instanceof l.a && (n.message = 'Strato error occurred in '.concat(i.id, ': ').concat(i.action)),
                Object(c.a)(n, { extra: { context: i, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '4BrD': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
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
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
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
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
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
    Q3sg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
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
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
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
        l = n.n(a),
        i = n('VrFO'),
        r = n.n(i),
        c = n('Y9Ll'),
        o = n.n(c),
        s = n('1Pcy'),
        d = n.n(s),
        m = n('5Yy7'),
        u = n.n(m),
        h = n('2VqO'),
        _ = n.n(h),
        b = n('KEM+'),
        p = n.n(b),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        k = n('xQWt'),
        w = n('RqPI'),
        C = n('P1r1'),
        g = n('li/m'),
        I = n('G6rE'),
        y = n('rxPX'),
        E = n('0KEI'),
        M = Object(y.a)()
          .propsFromState(function () {
            return {
              communitiesActions: w.f,
              hasCommunityMemberships: g.d,
              pendingFollowersInfo: k.f,
              loggedInUser: I.e.selectLoggedInUser,
              userFeatures: w.p,
              settings: C.g,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.communitiesActions,
              n = e.hasCommunityMemberships,
              a = e.loggedInUser,
              l = e.pendingFollowersInfo,
              i = e.settings,
              r = e.userFeatures,
              c = l.acceptedIds,
              o = l.ids
            return {
              communitiesActions: t,
              acceptedFollowerCount: c.length,
              hasCommunityMemberships: n,
              loggedInUser: a,
              pendingFollowerCount: o.length - c.length,
              settings: i,
              isMediaStudioLinkVisible: !(!r || !r.mediatool_studio_library),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('DASH_MENU_CONTAINER'),
              fetchPendingFollowersIfNeeded: k.d,
              updateDataSaverMode: C.L,
            }
          })
          .withAnalytics(),
        S = n('45mF'),
        x = (n('hBvt'), n('3XMw')),
        z = n.n(x),
        L = n('45lU'),
        T = n('MWbm'),
        A = n('htQn'),
        B = n('t62R'),
        H = n('Znyr'),
        F = z.a.d86bbf0f,
        O = z.a.h6beb5fa,
        P = function (e) {
          var t = e.badgeCount,
            n = e.icon,
            a = e.iconColor,
            l = e.label,
            i = e.link,
            r = e.onClick,
            c = e.rightControl,
            o = e.testID
          return v.a.createElement(
            T.a,
            { style: L.a.dashMenuItem },
            v.a.createElement(
              A.a,
              { link: i, onClick: r, style: L.a.link, testID: o },
              v.a.createElement(
                T.a,
                { style: L.a.item },
                n ? v.a.createElement(n, { style: a ? [L.a.icon, { color: a }] : L.a.icon }) : null,
                v.a.createElement(B.b, { color: 'normal', numberOfLines: 1, style: L.a.itemLabel }, l),
                t
                  ? v.a.createElement(
                      T.a,
                      { style: L.a.itemAccessory },
                      v.a.createElement(H.a, {
                        count: t,
                        standalone: !0,
                        truncatedCountFormatter: O,
                        unreadCountLabel: F,
                      }),
                    )
                  : null,
              ),
            ),
            c,
          )
        },
        D = n('3Wr5'),
        N = n('Ig1G'),
        j = n('rHpw'),
        R = n('Lsrn'),
        V = n('k/Ka'),
        K = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
              }),
              v.a.createElement('path', {
                d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
              }),
            ),
          )
        }
      K.metadata = { width: 24, height: 24 }
      var q = K,
        W = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z',
              }),
            ),
          )
        }
      W.metadata = { width: 24, height: 24 }
      var U = W,
        G = j.a.create(function (e) {
          return { bristles: { color: e.colors.primary, position: 'absolute', top: 0, left: 0 } }
        }),
        Y = function (e) {
          var t = e.style
          return v.a.createElement(
            T.a,
            { accessibilityRole: 'none' },
            v.a.createElement(q, { style: t }),
            v.a.createElement(U, { style: [t, G.bristles] }),
          )
        },
        Q = n('fs1G'),
        X = n('Es6L'),
        Z = n('9qNn'),
        J = n('aITJ'),
        $ = n('TnY3'),
        ee = n('v6aA'),
        te = n('CK8+'),
        ne = n('OOKO'),
        ae = n('boUI'),
        le = n('+1/s'),
        ie = n('EweD'),
        re = n('sUoZ'),
        ce = n('/WPq'),
        oe = n('OGrp'),
        se = n('5VjN'),
        de = n('2lds'),
        me = n('78ol'),
        ue = n('Q3sg'),
        he = n('PU7B'),
        _e = n('Cp2k'),
        be = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M6.016 16.97l-1.53 1.53c-.15.14-.34.22-.53.22s-.38-.08-.53-.22c-.29-.29-.29-.77 0-1.06l1.53-1.54c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.07zm2.12 2.12l-3.64 3.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06l3.64-3.64c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06z',
              }),
              v.a.createElement('path', {
                d: 'M22.306 1.49c-.28-.28-.66-.44-1.06-.44 0 0-.09 0-.13.01-4.31.38-8.37 2.32-11.4 5.45h-.01c-2.68.54-5.12 1.86-7.09 3.84l-.93.93c-.46.47-.57 1.18-.27 1.76.27.5.78.8 1.33.8.09 0 .18-.01.27-.03l3.98-.73c.59.97 2.26 2.87 3.82 3.78l-.73 4.05c-.12.64.2 1.29.78 1.59.22.12.46.17.69.17.4 0 .78-.15 1.07-.44l.94-.94c1.96-1.99 3.27-4.48 3.8-7.21l.07-.06c0-.01.04-.04.04-.05 3.01-3.03 4.88-7.04 5.27-11.29.04-.44-.12-.88-.44-1.19zm-5.89 11.43c-.15.14-.3.28-.44.42v.02c-.41 2.6-1.63 5-3.48 6.87l-.93.94.88-4.89c.04-.22-.08-.42-.28-.52-1.03-.5-3.65-2.87-4.12-3.97-.09-.23-.32-.37-.56-.33l-4.74.88.93-.94c1.85-1.85 4.23-3.09 6.79-3.5.14-.17.3-.33.46-.48 2.88-2.9 6.55-4.53 10.32-4.87-.34 3.77-1.95 7.47-4.83 10.37z',
              }),
              v.a.createElement('path', {
                d: 'M17.546 6.36c-.88-.88-2.3-.88-3.18 0s-.88 2.31 0 3.18c.88.88 2.3.88 3.18 0 .88-.87.88-2.3 0-3.18zm-1.06 2.12c-.29.3-.77.3-1.06 0-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0s.29.77 0 1.06z',
              }),
            ),
          )
        }
      be.metadata = { width: 24, height: 24 }
      var pe = be,
        fe = n('2qZs'),
        ve = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      ve.metadata = { width: 24, height: 24 }
      var ke = ve,
        we = n('4BrD'),
        Ce = n('xrkw'),
        ge = n('nV1z'),
        Ie = n('M2x3'),
        ye = n('SNyS'),
        Ee = n('Drq4'),
        Me = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M20.602 17.158l-7.85-5.546V2c0-.418-.295-.75-.76-.752-1.705 0-3.41.417-4.935 1.206C1.793 5.18-.27 11.68 2.454 16.944c1.91 3.688 5.672 5.805 9.564 5.805 1.663 0 3.35-.39 4.925-1.205 1.527-.79 2.854-1.947 3.84-3.343.238-.338.157-.807-.18-1.045zm1.06-1.823c-.064 0-.13-.008-.195-.026-.4-.11-.637-.52-.53-.92.175-.655.28-1.328.307-2.004.018-.414.376-.736.78-.718.415.016.736.366.72.78-.034.786-.154 1.57-.358 2.33-.09.334-.393.555-.724.555zm-.327-6.17c-.302 0-.586-.185-.7-.483-.243-.633-.555-1.24-.928-1.8-.23-.346-.135-.812.21-1.04.345-.23.81-.136 1.04.21.434.653.797 1.357 1.08 2.093.147.387-.047.82-.434.97-.088.033-.178.05-.268.05zm-3.888-4.8c-.14 0-.282-.04-.408-.122-.57-.37-1.18-.676-1.813-.912-.388-.143-.585-.575-.44-.963.145-.388.578-.585.965-.44.736.275 1.443.63 2.103 1.06.348.225.446.69.22 1.037-.143.22-.384.34-.63.34z',
              }),
            ),
          )
        }
      Me.metadata = { width: 24, height: 24 }
      var Se = Me,
        xe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(V.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M20.602 17.158l-7.85-5.546V2c0-.418-.295-.75-.76-.752-1.705 0-3.41.417-4.935 1.206C1.793 5.18-.27 11.68 2.454 16.944c1.91 3.688 5.672 5.805 9.564 5.805 1.663 0 3.35-.39 4.925-1.205 1.527-.79 2.854-1.947 3.84-3.343.238-.338.157-.807-.18-1.045zm-4.348 3.056c-4.53 2.346-10.122.57-12.468-3.96-2.345-4.53-.57-10.122 3.96-12.468 1.11-.575 2.27-.92 3.505-1.004V12c0 .253.126.476.318.612l7.52 5.313c-.782.94-1.726 1.715-2.833 2.29zm5.408-4.88c-.064 0-.13-.007-.195-.025-.4-.11-.637-.52-.53-.92.175-.655.28-1.328.307-2.004.018-.414.376-.736.78-.718.415.016.736.366.72.78-.034.786-.154 1.57-.358 2.33-.09.334-.393.555-.724.555zm-.327-6.17c-.302 0-.586-.184-.7-.482-.243-.633-.555-1.24-.928-1.8-.23-.346-.135-.812.21-1.04.345-.23.81-.136 1.04.21.434.653.797 1.357 1.08 2.093.147.387-.047.82-.434.97-.088.033-.178.05-.268.05zm-3.888-4.8c-.14 0-.282-.04-.408-.12-.57-.37-1.18-.677-1.813-.913-.388-.143-.585-.575-.44-.963.145-.388.578-.585.965-.44.736.275 1.443.63 2.103 1.06.348.225.446.69.22 1.037-.143.22-.384.34-.63.34z',
              }),
            ),
          )
        }
      xe.metadata = { width: 24, height: 24 }
      var ze = xe,
        Le = z.a.c818c60c,
        Te = z.a.b5711f09,
        Ae = z.a.i3145aa0,
        Be = z.a.b5298d91,
        He = z.a.a57a341b,
        Fe = z.a.i83d4f13,
        Oe = 'Collaborate',
        Pe = z.a.f66d24be,
        De = z.a.c4881c66,
        Ne = z.a.h54e6137,
        je = z.a.ae1bbb26,
        Re = z.a.a58e0e51,
        Ve = z.a.deaf7e0a,
        Ke = z.a.b4af8c6a,
        qe = z.a.ed21f885,
        We = z.a.d0a51fb1,
        Ue = 'Write',
        Ge = z.a.fa98627a,
        Ye = z.a.fd442790,
        Qe = z.a.b8533bac,
        Xe = z.a.b0041756,
        Ze = z.a.h02a6fe5,
        Je = z.a.b7fa0cfd,
        $e = z.a.ab38b896,
        et = z.a.c9d41313,
        tt = (function (e) {
          u()(n, e)
          var t = _()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(
                d()(e),
                '_collaborateEnabled',
                e.context.featureSwitches.isTrue('responsive_web_gaggle_site_enabled'),
              ),
              p()(
                d()(e),
                '_leftNavRefreshConnectEnabled',
                e.context.featureSwitches.isTrue('responsive_web_left_nav_refresh_connect_enabled'),
              ),
              p()(
                d()(e),
                '_leftNavRefreshTopicsEnabled',
                e.context.featureSwitches.isTrue('responsive_web_left_nav_refresh_topics_enabled'),
              ),
              p()(
                d()(e),
                '_momentMakerEnabled',
                e.context.featureSwitches.isTrue('responsive_web_moment_maker_enabled'),
              ),
              p()(
                d()(e),
                '_newslettersEnabled',
                e.context.featureSwitches.isTrue('responsive_web_newsletters_menu_enabled'),
              ),
              p()(
                d()(e),
                '_twitterForProfessionalsEnabled',
                e.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              p()(
                d()(e),
                '_birdwatchEnabled',
                e.context.featureSwitches.isTrue('responsive_web_birdwatch_history_enabled'),
              ),
              p()(
                d()(e),
                '_twitterArticlesComposeEnabled',
                e.context.featureSwitches.isTrue('responsive_web_twitter_article_compose_enabled'),
              ),
              p()(d()(e), '_renderProfileItem', function (t) {
                return t
                  ? v.a.createElement(P, { icon: ae.a, label: Ge, link: '/'.concat(t), onClick: e._handleProfileClick })
                  : null
              }),
              p()(d()(e), '_renderTopicsItem', function (t) {
                return t
                  ? v.a.createElement(P, {
                      icon: le.a,
                      label: Qe,
                      link: '/'.concat(t, '/topics'),
                      onClick: e._handleTopicsClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderConnectItem', function () {
                return v.a.createElement(P, {
                  icon: ie.a,
                  label: Be,
                  link: '/i/connect_people',
                  onClick: e._handleConnectClick,
                })
              }),
              p()(d()(e), '_renderCollaborateItem', function () {
                return e._collaborateEnabled
                  ? v.a.createElement(P, {
                      icon: re.a,
                      label: Oe,
                      link: {
                        external: !0,
                        pathname: '/i/collaborate/home',
                        query: { enable_filtered_bundle: 'bundle.Collaborate' },
                      },
                    })
                  : null
              }),
              p()(d()(e), '_renderListsItem', function (t) {
                return t
                  ? v.a.createElement(P, {
                      icon: ce.a,
                      label: Xe,
                      link: '/'.concat(t, '/lists'),
                      onClick: e._handleListsClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderCommunitiesItem', function (t) {
                return t
                  ? v.a.createElement(P, {
                      icon: oe.a,
                      label: Ze,
                      link: '/'.concat(t, '/communities'),
                      onClick: e._handleCommunitiesClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderTopArticlesItem', function () {
                return v.a.createElement(P, {
                  icon: se.a,
                  label: Je,
                  link: '/i/articles',
                  onClick: e._handleTopArticlesClick,
                })
              }),
              p()(d()(e), '_renderBookmarksItem', function () {
                return v.a.createElement(P, {
                  icon: de.a,
                  label: Ae,
                  link: '/i/bookmarks',
                  onClick: e._handleBookmarksClick,
                })
              }),
              p()(d()(e), '_renderMomentsItem', function (t) {
                var n = e._momentMakerEnabled ? '/i/moment_maker' : t ? '/'.concat(t, '/moments') : void 0
                return n
                  ? v.a.createElement(P, { icon: me.a, label: Ke, link: n, onClick: e._handleMomentsClick })
                  : null
              }),
              p()(d()(e), '_renderTwitterBlueItem', function () {
                var t = e.context.userClaims.isTwitterBlueSubscriber()
                if (e.context.featureSwitches.isTrue('subscriptions_sign_up_enabled') || t) {
                  var n = t ? '/settings/twitter_blue' : '/i/twitter_blue_sign_up'
                  return v.a.createElement(P, {
                    icon: ue.a,
                    iconColor: j.a.theme.colors.brandColor,
                    label: qe,
                    link: n,
                    onClick: e._handleTwitterBlueClick,
                  })
                }
                return null
              }),
              p()(d()(e), '_renderNewslettersItem', function () {
                return e._newslettersEnabled
                  ? v.a.createElement(P, {
                      icon: he.a,
                      label: We,
                      link: '/i/newsletters',
                      onClick: e._handleNewslettersClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderTwitterArticlesItem', function () {
                return e._twitterArticlesComposeEnabled
                  ? v.a.createElement(P, {
                      icon: _e.a,
                      label: Ue,
                      link: '/i/twitter-article-composer',
                      onClick: e._handleTwitterArticlesClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderTwitterForProfessionalsItem', function () {
                return e._twitterForProfessionalsEnabled
                  ? v.a.createElement(P, {
                      icon: pe,
                      label: et,
                      link: {
                        pathname: '/i/flow/convert_to_professional',
                        state: { input: { requested_variant: 'navdrawer' } },
                        method: 'push',
                      },
                      onClick: e._handleTwitterForProfessionalsClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderBirdwatchItem', function () {
                return e._birdwatchEnabled
                  ? v.a.createElement(P, {
                      icon: fe.a,
                      label: Te,
                      link: '/i/birdwatch',
                      onClick: e._handleBirdwatchClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderFollowerCountsItem', function () {
                var t = e.props,
                  n = t.acceptedFollowerCount,
                  a = t.pendingFollowerCount
                return a || n
                  ? v.a.createElement(P, {
                      badgeCount: a,
                      icon: ke,
                      label: Fe,
                      link: '/follower_requests',
                      onClick: e._handleFollowerRequestsClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderTwitterAdsItem', function () {
                return v.a.createElement(P, {
                  icon: we.a,
                  label: $e,
                  link: 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads-rweb',
                  onClick: e._handleTwitterAdsClick,
                })
              }),
              p()(d()(e), '_renderAnalyticsItem', function () {
                return v.a.createElement(P, {
                  icon: Ce.a,
                  label: Le,
                  link: 'https://analytics.twitter.com/',
                  onClick: e._handleAnalyticsClick,
                })
              }),
              p()(d()(e), '_renderMediaStudioItem', function () {
                return e.props.isMediaStudioLinkVisible
                  ? v.a.createElement(P, {
                      icon: ge.a,
                      label: Ve,
                      link: 'https://studio.twitter.com/?ref=dotcom',
                      onClick: e._handleMediaStudioClick,
                    })
                  : null
              }),
              p()(d()(e), '_renderSettingsItem', function () {
                return v.a.createElement(P, {
                  icon: Ie.a,
                  label: Ye,
                  link: '/settings',
                  onClick: e._handleSettingsClick,
                  testID: Z.a.settings,
                })
              }),
              p()(d()(e), '_renderHelpCenterItem', function () {
                return v.a.createElement(P, {
                  icon: ye.a,
                  label: Pe,
                  link: 'https://support.twitter.com/',
                  onClick: e._handleHelpClick,
                  testID: Z.a.help,
                })
              }),
              p()(d()(e), '_renderDisplayItem', function () {
                return v.a.createElement(P, { icon: Y, label: De, link: '/i/display', onClick: e._handleDisplayClick })
              }),
              p()(d()(e), '_renderKeyboardShortcuts', function () {
                return J.b.isDesktopOS()
                  ? v.a.createElement(P, {
                      icon: Ee.a,
                      label: Ne,
                      link: '/i/keyboard_shortcuts',
                      onClick: e._handleMenuItemClick('keyboard_shortcuts_overflow_item'),
                    })
                  : null
              }),
              p()(d()(e), '_renderLabsItem', function () {
                return null
              }),
              p()(d()(e), '_renderLogoutItem', function (t) {
                return t
                  ? v.a.createElement(P, {
                      label: Object(D.a)().hasMultiAccountCookie ? Re({ screenName: t }) : je,
                      link: '/logout',
                      onClick: e._handleLogoutScribingClick,
                      testID: Z.a.logout,
                    })
                  : null
              }),
              p()(d()(e), '_renderDataSaverItem', function () {
                var t = e.props.settings,
                  n = t.dataSaverMode ? Se : ze
                return v.a.createElement(P, {
                  icon: n,
                  label: He,
                  link: '/settings/data',
                  onClick: e._handleDataSaverClick,
                  rightControl: v.a.createElement(te.a, {
                    accessibilityLabel: He,
                    onValueChange: e._handleDataSaverChanged,
                    style: L.a.itemAccessory,
                    value: t.dataSaverMode,
                  }),
                })
              }),
              p()(d()(e), '_handleDataSaverChanged', function (t) {
                var n = e.props,
                  a = n.analytics,
                  i = n.createLocalApiErrorHandler,
                  r = n.updateDataSaverMode
                a.scribe({ element: 'dataSaverMode', action: t ? 'on' : 'off' }),
                  r({ enabled: t }).catch(i(l()(l()({}, Object(S.a)()), {}, { showToast: !0 })))
              }),
              p()(d()(e), '_handleMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    l = n.onClose
                  t && a.scribe({ section: 'overflow_menu', element: t, action: 'click' }), l && l()
                }
              }),
              p()(d()(e), '_handleDataSaverClick', e._handleMenuItemClick('data_saver_overflow_item')),
              p()(d()(e), '_handleProfileClick', e._handleMenuItemClick('profile_overflow_item')),
              p()(d()(e), '_handleTopicsClick', e._handleMenuItemClick('topics_overflow_item')),
              p()(d()(e), '_handleConnectClick', e._handleMenuItemClick('connect_overflow_item')),
              p()(d()(e), '_handleFollowerRequestsClick', e._handleMenuItemClick('follower_requests_overflow_item')),
              p()(d()(e), '_handleListsClick', e._handleMenuItemClick('lists_overflow_item')),
              p()(d()(e), '_handleCommunitiesClick', e._handleMenuItemClick('communities_overflow_item')),
              p()(d()(e), '_handleTopArticlesClick', e._handleMenuItemClick('top_articles_overflow_item')),
              p()(d()(e), '_handleBookmarksClick', e._handleMenuItemClick('bookmarks_overflow_item')),
              p()(d()(e), '_handleMomentsClick', e._handleMenuItemClick('moments_overflow_item')),
              p()(d()(e), '_handleTwitterBlueClick', e._handleMenuItemClick('twitter_blue_overflow_item')),
              p()(d()(e), '_handleSettingsClick', e._handleMenuItemClick('settings_overflow_item')),
              p()(d()(e), '_handleSimpleClick', e._handleMenuItemClick()),
              p()(d()(e), '_handleHelpClick', e._handleMenuItemClick('help_overflow_item')),
              p()(d()(e), '_handleDisplayClick', e._handleMenuItemClick('display_overflow_item')),
              p()(d()(e), '_handleLogoutScribingClick', e._handleMenuItemClick('logout_overflow_item')),
              p()(d()(e), '_handleTwitterAdsClick', e._handleMenuItemClick('twitter_ads_item')),
              p()(d()(e), '_handleAnalyticsClick', e._handleMenuItemClick('analytics_item')),
              p()(d()(e), '_handleMediaStudioClick', e._handleMenuItemClick('media_studio')),
              p()(d()(e), '_handleNewslettersClick', e._handleMenuItemClick('newsletters')),
              p()(d()(e), '_handleTwitterArticlesClick', e._handleMenuItemClick('twitter_articles')),
              p()(d()(e), '_handleTwitterForProfessionalsClick', e._handleMenuItemClick('twitter_for_professionals')),
              p()(d()(e), '_handleBirdwatchClick', e._handleMenuItemClick('birdwatch')),
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
                    l = e.withMoreSideNavOverflow,
                    i = a && a.screen_name,
                    r = this.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                    c = Object(N.e)({
                      featureSwitches: this.context.featureSwitches,
                      communitiesActions: t,
                      hasCommunityMemberships: n,
                    })
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(X.a)()
                      ? v.a.createElement(
                          v.a.Fragment,
                          null,
                          this._renderFollowerCountsItem(),
                          l || this._leftNavRefreshConnectEnabled || this._leftNavRefreshTopicsEnabled
                            ? this._renderBookmarksItem()
                            : null,
                          c && r ? this._renderCommunitiesItem(i) : null,
                          c || r || l ? this._renderListsItem(i) : null,
                          this._leftNavRefreshConnectEnabled && l ? this._renderConnectItem() : null,
                          this._leftNavRefreshTopicsEnabled && !l ? null : this._renderTopicsItem(i),
                          this._renderMomentsItem(i),
                          this._renderCollaborateItem(),
                          this._renderTwitterBlueItem(),
                          this._twitterArticlesComposeEnabled
                            ? this._renderTwitterArticlesItem()
                            : this._renderNewslettersItem(),
                          this._renderTwitterForProfessionalsItem(),
                          this._renderTwitterAdsItem(),
                          this._renderAnalyticsItem(),
                          this._renderMediaStudioItem(),
                          this._renderBirdwatchItem(),
                          v.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderSettingsItem(),
                          this._renderHelpCenterItem(),
                          this._renderDisplayItem(),
                          this._renderKeyboardShortcuts(),
                        )
                      : v.a.createElement(
                          v.a.Fragment,
                          null,
                          this._renderProfileItem(i),
                          r ? this._renderTopArticlesItem() : null,
                          this._renderListsItem(i),
                          this._renderTopicsItem(i),
                          this._renderBookmarksItem(),
                          this._renderMomentsItem(i),
                          this._renderCollaborateItem(),
                          this._renderTwitterBlueItem(),
                          this._twitterArticlesComposeEnabled
                            ? this._renderTwitterArticlesItem()
                            : this._renderNewslettersItem(),
                          this._renderFollowerCountsItem(),
                          v.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderTwitterForProfessionalsItem(),
                          this._renderTwitterAdsItem(),
                          this._renderAnalyticsItem(),
                          this._renderMediaStudioItem(),
                          this._renderBirdwatchItem(),
                          v.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderSettingsItem(),
                          this._renderHelpCenterItem(),
                          this._renderLabsItem(),
                          v.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderDataSaverItem(),
                          this._renderDisplayItem(),
                          this._renderKeyboardShortcuts(),
                          v.a.createElement(ne.a, { spacing: 'space2' }),
                          this._renderLogoutItem(i),
                        ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      p()(tt, 'contextType', ee.a), p()(tt, 'defaultProps', { onClose: Q.a })
      t.a = Object($.a)(M(tt))
    },
    nV1z: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        o = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
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
  },
])
//# sourceMappingURL=WIPED
