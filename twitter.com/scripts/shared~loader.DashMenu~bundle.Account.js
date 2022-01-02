;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    '45lU': function (e, t, r) {
      'use strict'
      var n = r('rHpw').a.create(function (e) {
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
      t.a = n
    },
    '45mF': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return s
      })
      r('2G9S')
      var n = r('1YZw'),
        c = r('pXBW'),
        i = r('3XMw'),
        o = r.n(i),
        a = r('SrIh'),
        l = o.a.a5d4fda0,
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (r) {
              var i = r.context
              return (
                !r instanceof c.a && (r.message = 'Strato error occurred in '.concat(i.id, ': ').concat(i.action)),
                Object(a.a)(r, { extra: { context: i, isStrato: !0 } }),
                t ? Object(n.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '4BrD': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        i = r('ERkP'),
        o = r('Lsrn'),
        a = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(a.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
            }),
            i.createElement('path', {
              d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    '9qNn': function (e, t, r) {
      'use strict'
      t.a = { logout: 'logout', switcher: 'switcher', settings: 'settings', help: 'help' }
    },
    Drq4: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        i = r('ERkP'),
        o = r('Lsrn'),
        a = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(a.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
            i.createElement('path', {
              d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
            }),
            i.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    Q3sg: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        i = r('ERkP'),
        o = r('Lsrn'),
        a = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(a.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.853-.225 3.917-.72 1.048-.482 1.865-1.147 2.38-2.025.49-.833.733-1.75.733-2.732 0-1.25-.357-2.336-1.128-3.184-.317-.348-.69-.636-1.113-.868.302-.21.573-.455.809-.737.675-.806 1.014-1.755 1.014-2.814 0-1.49-.605-2.721-1.786-3.625C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.499-.059.973-.189 1.414-.381l-.001.001c-.33.486-.747.912-1.228 1.254.005.104.008.21.008.313 0 3.203-2.476 6.895-7.006 6.895-1.39 0-2.683-.4-3.773-1.089.193.023.389.034.588.034 1.153 0 2.215-.387 3.058-1.038-1.078-.018-1.987-.72-2.3-1.682.15.028.304.043.463.043.224 0 .441-.03.648-.085-1.126-.222-1.974-1.202-1.974-2.376v-.031c.331.181.71.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.121-.86.333-1.219 1.214 1.466 3.027 2.431 5.074 2.533-.041-.178-.063-.362-.063-.552 0-1.339 1.102-2.424 2.462-2.424.708 0 1.347.295 1.796.765.561-.108 1.088-.31 1.564-.588-.184.566-.574 1.042-1.083 1.341z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    SNyS: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        i = r('ERkP'),
        o = r('Lsrn'),
        a = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(a.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
            }),
            i.createElement('path', {
              d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    VN5n: function (e, t, r) {
      'use strict'
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        c = r.n(n),
        i = r('Y9Ll'),
        o = r.n(i),
        a = r('1Pcy'),
        l = r.n(a),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        h = r.n(d),
        m = r('AuHH'),
        b = r.n(m),
        p = r('KEM+'),
        f = r.n(p),
        _ = (r('2G9S'), r('ERkP')),
        v = r('xQWt'),
        y = r('RqPI'),
        O = r('P1r1'),
        w = r('G6rE'),
        g = r('rxPX'),
        k = r('0KEI'),
        j = Object(g.a)()
          .propsFromState(function () {
            return {
              communitiesActions: y.e,
              hasCommunityMemberships: y.j,
              pendingFollowersInfo: v.f,
              loggedInUser: w.e.selectLoggedInUser,
              userFeatures: y.o,
              settings: O.g,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.communitiesActions,
              r = e.hasCommunityMemberships,
              n = e.loggedInUser,
              c = e.pendingFollowersInfo,
              i = e.settings,
              o = e.userFeatures,
              a = c.acceptedIds,
              l = c.ids
            return {
              communitiesActions: t,
              acceptedFollowerCount: a.length,
              hasCommunityMemberships: Boolean(r),
              loggedInUser: n,
              pendingFollowerCount: l.length - a.length,
              settings: i,
              isMediaStudioLinkVisible: !(!o || !o.mediatool_studio_library),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('DASH_MENU_CONTAINER'),
              fetchPendingFollowersIfNeeded: v.d,
              updateDataSaverMode: O.J,
            }
          })
          .withAnalytics(),
        C = r('45mF'),
        E = (r('hBvt'), r('3XMw')),
        P = r.n(E),
        I = r('45lU'),
        S = r('MWbm'),
        M = r('htQn'),
        D = r('t62R'),
        x = r('Znyr'),
        L = P.a.d86bbf0f,
        z = P.a.h6beb5fa,
        H = function (e) {
          var t = e.badgeCount,
            r = e.icon,
            n = e.iconColor,
            c = e.label,
            i = e.link,
            o = e.onClick,
            a = e.rightControl,
            l = e.testID
          return _.createElement(
            S.a,
            { style: I.a.dashMenuItem },
            _.createElement(
              M.a,
              { link: i, onClick: o, style: I.a.link, testID: l },
              _.createElement(
                S.a,
                { style: I.a.item },
                r ? _.createElement(r, { style: n ? [I.a.icon, { color: n }] : I.a.icon }) : null,
                _.createElement(D.b, { color: 'normal', numberOfLines: 1, style: I.a.itemLabel }, c),
                t
                  ? _.createElement(
                      S.a,
                      { style: I.a.itemAccessory },
                      _.createElement(x.a, {
                        count: t,
                        standalone: !0,
                        truncatedCountFormatter: z,
                        unreadCountLabel: L,
                      }),
                    )
                  : null,
              ),
            ),
            a,
          )
        },
        T = r('3Wr5'),
        B = r('Ig1G'),
        F = r('rHpw'),
        A = r('Lsrn'),
        R = r('k/Ka')
      function N(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var V = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          K(
            K({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [A.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.createElement(
            'g',
            null,
            _.createElement('path', {
              d: 'M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z',
            }),
            _.createElement('path', {
              d: 'M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z',
            }),
          ),
        )
      }
      V.metadata = { width: 24, height: 24 }
      var W = V
      function q(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var G = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          U(
            U({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [A.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.createElement(
            'g',
            null,
            _.createElement('path', {
              d: 'M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z',
            }),
          ),
        )
      }
      G.metadata = { width: 24, height: 24 }
      var Z = G,
        X = F.a.create(function (e) {
          return { bristles: { color: e.colors.primary, position: 'absolute', top: 0, left: 0 } }
        }),
        J = function (e) {
          var t = e.style
          return _.createElement(
            S.a,
            { accessibilityRole: 'none' },
            _.createElement(W, { style: t }),
            _.createElement(Z, { style: [t, X.bristles] }),
          )
        },
        Y = r('fs1G'),
        Q = r('Es6L'),
        $ = r('9qNn'),
        ee = r('aITJ'),
        te = r('TnY3'),
        re = r('v6aA'),
        ne = r('CK8+'),
        ce = r('OOKO'),
        ie = r('boUI'),
        oe = r('+1/s'),
        ae = r('EweD'),
        le = r('sUoZ'),
        se = r('/WPq'),
        ue = r('OGrp'),
        de = r('5VjN'),
        he = r('2lds'),
        me = r('78ol'),
        be = r('Q3sg'),
        pe = r('PU7B')
      function fe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : fe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ve = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          _e(
            _e({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [A.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.createElement(
            'g',
            null,
            _.createElement('path', {
              d: 'M6.016 16.97l-1.53 1.53c-.15.14-.34.22-.53.22s-.38-.08-.53-.22c-.29-.29-.29-.77 0-1.06l1.53-1.54c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.07zm2.12 2.12l-3.64 3.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06l3.64-3.64c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06z',
            }),
            _.createElement('path', {
              d: 'M22.306 1.49c-.28-.28-.66-.44-1.06-.44 0 0-.09 0-.13.01-4.31.38-8.37 2.32-11.4 5.45h-.01c-2.68.54-5.12 1.86-7.09 3.84l-.93.93c-.46.47-.57 1.18-.27 1.76.27.5.78.8 1.33.8.09 0 .18-.01.27-.03l3.98-.73c.59.97 2.26 2.87 3.82 3.78l-.73 4.05c-.12.64.2 1.29.78 1.59.22.12.46.17.69.17.4 0 .78-.15 1.07-.44l.94-.94c1.96-1.99 3.27-4.48 3.8-7.21l.07-.06c0-.01.04-.04.04-.05 3.01-3.03 4.88-7.04 5.27-11.29.04-.44-.12-.88-.44-1.19zm-5.89 11.43c-.15.14-.3.28-.44.42v.02c-.41 2.6-1.63 5-3.48 6.87l-.93.94.88-4.89c.04-.22-.08-.42-.28-.52-1.03-.5-3.65-2.87-4.12-3.97-.09-.23-.32-.37-.56-.33l-4.74.88.93-.94c1.85-1.85 4.23-3.09 6.79-3.5.14-.17.3-.33.46-.48 2.88-2.9 6.55-4.53 10.32-4.87-.34 3.77-1.95 7.47-4.83 10.37z',
            }),
            _.createElement('path', {
              d: 'M17.546 6.36c-.88-.88-2.3-.88-3.18 0s-.88 2.31 0 3.18c.88.88 2.3.88 3.18 0 .88-.87.88-2.3 0-3.18zm-1.06 2.12c-.29.3-.77.3-1.06 0-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0s.29.77 0 1.06z',
            }),
          ),
        )
      }
      ve.metadata = { width: 24, height: 24 }
      var ye = ve,
        Oe = r('2qZs')
      function we(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? we(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : we(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ke = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          ge(
            ge({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [A.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.createElement(
            'g',
            null,
            _.createElement('path', {
              d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
            }),
          ),
        )
      }
      ke.metadata = { width: 24, height: 24 }
      var je = ke,
        Ce = r('4BrD'),
        Ee = r('xrkw'),
        Pe = r('nV1z'),
        Ie = r('M2x3'),
        Se = r('SNyS'),
        Me = r('Drq4')
      function De(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : De(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Le = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          xe(
            xe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [A.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.createElement(
            'g',
            null,
            _.createElement('path', {
              d: 'M20.602 17.158l-7.85-5.546V2c0-.418-.295-.75-.76-.752-1.705 0-3.41.417-4.935 1.206C1.793 5.18-.27 11.68 2.454 16.944c1.91 3.688 5.672 5.805 9.564 5.805 1.663 0 3.35-.39 4.925-1.205 1.527-.79 2.854-1.947 3.84-3.343.238-.338.157-.807-.18-1.045zm1.06-1.823c-.064 0-.13-.008-.195-.026-.4-.11-.637-.52-.53-.92.175-.655.28-1.328.307-2.004.018-.414.376-.736.78-.718.415.016.736.366.72.78-.034.786-.154 1.57-.358 2.33-.09.334-.393.555-.724.555zm-.327-6.17c-.302 0-.586-.185-.7-.483-.243-.633-.555-1.24-.928-1.8-.23-.346-.135-.812.21-1.04.345-.23.81-.136 1.04.21.434.653.797 1.357 1.08 2.093.147.387-.047.82-.434.97-.088.033-.178.05-.268.05zm-3.888-4.8c-.14 0-.282-.04-.408-.122-.57-.37-1.18-.676-1.813-.912-.388-.143-.585-.575-.44-.963.145-.388.578-.585.965-.44.736.275 1.443.63 2.103 1.06.348.225.446.69.22 1.037-.143.22-.384.34-.63.34z',
            }),
          ),
        )
      }
      Le.metadata = { width: 24, height: 24 }
      var ze = Le
      function He(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? He(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : He(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Be = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          Te(
            Te({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [A.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.createElement(
            'g',
            null,
            _.createElement('path', {
              d: 'M20.602 17.158l-7.85-5.546V2c0-.418-.295-.75-.76-.752-1.705 0-3.41.417-4.935 1.206C1.793 5.18-.27 11.68 2.454 16.944c1.91 3.688 5.672 5.805 9.564 5.805 1.663 0 3.35-.39 4.925-1.205 1.527-.79 2.854-1.947 3.84-3.343.238-.338.157-.807-.18-1.045zm-4.348 3.056c-4.53 2.346-10.122.57-12.468-3.96-2.345-4.53-.57-10.122 3.96-12.468 1.11-.575 2.27-.92 3.505-1.004V12c0 .253.126.476.318.612l7.52 5.313c-.782.94-1.726 1.715-2.833 2.29zm5.408-4.88c-.064 0-.13-.007-.195-.025-.4-.11-.637-.52-.53-.92.175-.655.28-1.328.307-2.004.018-.414.376-.736.78-.718.415.016.736.366.72.78-.034.786-.154 1.57-.358 2.33-.09.334-.393.555-.724.555zm-.327-6.17c-.302 0-.586-.184-.7-.482-.243-.633-.555-1.24-.928-1.8-.23-.346-.135-.812.21-1.04.345-.23.81-.136 1.04.21.434.653.797 1.357 1.08 2.093.147.387-.047.82-.434.97-.088.033-.178.05-.268.05zm-3.888-4.8c-.14 0-.282-.04-.408-.12-.57-.37-1.18-.677-1.813-.913-.388-.143-.585-.575-.44-.963.145-.388.578-.585.965-.44.736.275 1.443.63 2.103 1.06.348.225.446.69.22 1.037-.143.22-.384.34-.63.34z',
            }),
          ),
        )
      }
      Be.metadata = { width: 24, height: 24 }
      var Fe = Be
      function Ae(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ae(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ae(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function Ne(e) {
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
          var r,
            n = b()(e)
          if (t) {
            var c = b()(this).constructor
            r = Reflect.construct(n, arguments, c)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var Ke = P.a.c818c60c,
        Ve = P.a.b5711f09,
        We = P.a.i3145aa0,
        qe = P.a.b5298d91,
        Ue = P.a.a57a341b,
        Ge = P.a.i83d4f13,
        Ze = 'Collaborate',
        Xe = P.a.f66d24be,
        Je = P.a.c4881c66,
        Ye = P.a.h54e6137,
        Qe = P.a.ae1bbb26,
        $e = P.a.a58e0e51,
        et = P.a.deaf7e0a,
        tt = P.a.b4af8c6a,
        rt = P.a.ed21f885,
        nt = P.a.d0a51fb1,
        ct = P.a.fa98627a,
        it = P.a.fd442790,
        ot = P.a.b8533bac,
        at = P.a.b0041756,
        lt = P.a.h02a6fe5,
        st = P.a.b7fa0cfd,
        ut = P.a.ab38b896,
        dt = P.a.c9d41313,
        ht = (function (e) {
          u()(r, e)
          var t = Ne(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(
                l()(e),
                '_collaborateEnabled',
                e.context.featureSwitches.isTrue('responsive_web_gaggle_site_enabled'),
              ),
              f()(
                l()(e),
                '_leftNavRefreshConnectEnabled',
                e.context.featureSwitches.isTrue('responsive_web_left_nav_refresh_connect_enabled'),
              ),
              f()(
                l()(e),
                '_leftNavRefreshTopicsEnabled',
                e.context.featureSwitches.isTrue('responsive_web_left_nav_refresh_topics_enabled'),
              ),
              f()(
                l()(e),
                '_momentMakerEnabled',
                e.context.featureSwitches.isTrue('responsive_web_moment_maker_enabled'),
              ),
              f()(
                l()(e),
                '_newslettersEnabled',
                e.context.featureSwitches.isTrue('responsive_web_newsletters_menu_enabled'),
              ),
              f()(
                l()(e),
                '_twitterForProfessionalsEnabled',
                e.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              f()(
                l()(e),
                '_birdwatchEnabled',
                e.context.featureSwitches.isTrue('responsive_web_birdwatch_history_enabled'),
              ),
              f()(l()(e), '_renderProfileItem', function (t) {
                return t
                  ? _.createElement(H, { icon: ie.a, label: ct, link: '/'.concat(t), onClick: e._handleProfileClick })
                  : null
              }),
              f()(l()(e), '_renderTopicsItem', function (t) {
                return t
                  ? _.createElement(H, {
                      icon: oe.a,
                      label: ot,
                      link: '/'.concat(t, '/topics'),
                      onClick: e._handleTopicsClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderConnectItem', function () {
                return _.createElement(H, {
                  icon: ae.a,
                  label: qe,
                  link: '/i/connect_people',
                  onClick: e._handleConnectClick,
                })
              }),
              f()(l()(e), '_renderCollaborateItem', function () {
                return e._collaborateEnabled
                  ? _.createElement(H, {
                      icon: le.a,
                      label: Ze,
                      link: {
                        external: !0,
                        pathname: '/i/collaborate/home',
                        query: { enable_filtered_bundle: 'bundle.Collaborate' },
                      },
                    })
                  : null
              }),
              f()(l()(e), '_renderListsItem', function (t) {
                return t
                  ? _.createElement(H, {
                      icon: se.a,
                      label: at,
                      link: '/'.concat(t, '/lists'),
                      onClick: e._handleListsClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderCommunitiesItem', function (t) {
                return t
                  ? _.createElement(H, {
                      icon: ue.a,
                      label: lt,
                      link: '/'.concat(t, '/communities'),
                      onClick: e._handleCommunitiesClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderTopArticlesItem', function () {
                return _.createElement(H, {
                  icon: de.a,
                  label: st,
                  link: '/i/articles',
                  onClick: e._handleTopArticlesClick,
                })
              }),
              f()(l()(e), '_renderBookmarksItem', function () {
                return _.createElement(H, {
                  icon: he.a,
                  label: We,
                  link: '/i/bookmarks',
                  onClick: e._handleBookmarksClick,
                })
              }),
              f()(l()(e), '_renderMomentsItem', function (t) {
                var r = e._momentMakerEnabled ? '/i/moment_maker' : t ? '/'.concat(t, '/moments') : void 0
                return r ? _.createElement(H, { icon: me.a, label: tt, link: r, onClick: e._handleMomentsClick }) : null
              }),
              f()(l()(e), '_renderTwitterBlueItem', function () {
                var t = e.context.userClaims.isTwitterBlueSubscriber()
                if (e.context.featureSwitches.isTrue('subscriptions_sign_up_enabled') || t) {
                  var r = t ? '/settings/twitter_blue' : '/i/twitter_blue_sign_up'
                  return _.createElement(H, {
                    icon: be.a,
                    iconColor: F.a.theme.colors.brandColor,
                    label: rt,
                    link: r,
                    onClick: e._handleTwitterBlueClick,
                  })
                }
                return null
              }),
              f()(l()(e), '_renderNewslettersItem', function () {
                return e._newslettersEnabled
                  ? _.createElement(H, {
                      icon: pe.a,
                      label: nt,
                      link: '/i/newsletters',
                      onClick: e._handleNewslettersClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderTwitterForProfessionalsItem', function () {
                return e._twitterForProfessionalsEnabled
                  ? _.createElement(H, {
                      icon: ye,
                      label: dt,
                      link: {
                        pathname: '/i/flow/convert_to_professional',
                        state: { input: { requested_variant: 'navdrawer' } },
                        method: 'push',
                      },
                      onClick: e._handleTwitterForProfessionalsClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderBirdwatchItem', function () {
                return e._birdwatchEnabled
                  ? _.createElement(H, {
                      icon: Oe.a,
                      label: Ve,
                      link: '/i/birdwatch',
                      onClick: e._handleBirdwatchClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderFollowerCountsItem', function () {
                var t = e.props,
                  r = t.acceptedFollowerCount,
                  n = t.pendingFollowerCount
                return n || r
                  ? _.createElement(H, {
                      badgeCount: n,
                      icon: je,
                      label: Ge,
                      link: '/follower_requests',
                      onClick: e._handleFollowerRequestsClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderTwitterAdsItem', function () {
                return _.createElement(H, {
                  icon: Ce.a,
                  label: ut,
                  link: 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads-rweb',
                  onClick: e._handleTwitterAdsClick,
                })
              }),
              f()(l()(e), '_renderAnalyticsItem', function () {
                return _.createElement(H, {
                  icon: Ee.a,
                  label: Ke,
                  link: 'https://analytics.twitter.com/',
                  onClick: e._handleAnalyticsClick,
                })
              }),
              f()(l()(e), '_renderMediaStudioItem', function () {
                return e.props.isMediaStudioLinkVisible
                  ? _.createElement(H, {
                      icon: Pe.a,
                      label: et,
                      link: 'https://studio.twitter.com/?ref=dotcom',
                      onClick: e._handleMediaStudioClick,
                    })
                  : null
              }),
              f()(l()(e), '_renderSettingsItem', function () {
                return _.createElement(H, {
                  icon: Ie.a,
                  label: it,
                  link: '/settings',
                  onClick: e._handleSettingsClick,
                  testID: $.a.settings,
                })
              }),
              f()(l()(e), '_renderHelpCenterItem', function () {
                return _.createElement(H, {
                  icon: Se.a,
                  label: Xe,
                  link: 'https://support.twitter.com/',
                  onClick: e._handleHelpClick,
                  testID: $.a.help,
                })
              }),
              f()(l()(e), '_renderDisplayItem', function () {
                return _.createElement(H, { icon: J, label: Je, link: '/i/display', onClick: e._handleDisplayClick })
              }),
              f()(l()(e), '_renderKeyboardShortcuts', function () {
                return ee.b.isDesktopOS()
                  ? _.createElement(H, {
                      icon: Me.a,
                      label: Ye,
                      link: '/i/keyboard_shortcuts',
                      onClick: e._handleMenuItemClick('keyboard_shortcuts_overflow_item'),
                    })
                  : null
              }),
              f()(l()(e), '_renderLabsItem', function () {
                return null
              }),
              f()(l()(e), '_renderLogoutItem', function (t) {
                return t
                  ? _.createElement(H, {
                      label: Object(T.a)().hasMultiAccountCookie ? $e({ screenName: t }) : Qe,
                      link: '/logout',
                      onClick: e._handleLogoutScribingClick,
                      testID: $.a.logout,
                    })
                  : null
              }),
              f()(l()(e), '_renderDataSaverItem', function () {
                var t = e.props.settings,
                  r = t.dataSaverMode ? ze : Fe
                return _.createElement(H, {
                  icon: r,
                  label: Ue,
                  link: '/settings/data',
                  onClick: e._handleDataSaverClick,
                  rightControl: _.createElement(ne.a, {
                    accessibilityLabel: Ue,
                    onValueChange: e._handleDataSaverChanged,
                    style: I.a.itemAccessory,
                    value: t.dataSaverMode,
                  }),
                })
              }),
              f()(l()(e), '_handleDataSaverChanged', function (t) {
                var r = e.props,
                  n = r.analytics,
                  c = r.createLocalApiErrorHandler,
                  i = r.updateDataSaverMode
                n.scribe({ element: 'dataSaverMode', action: t ? 'on' : 'off' }),
                  i({ enabled: t }).catch(c(Re(Re({}, Object(C.a)()), {}, { showToast: !0 })))
              }),
              f()(l()(e), '_handleMenuItemClick', function (t) {
                return function () {
                  var r = e.props,
                    n = r.analytics,
                    c = r.onClose
                  t && n.scribe({ section: 'overflow_menu', element: t, action: 'click' }), c && c()
                }
              }),
              f()(l()(e), '_handleDataSaverClick', e._handleMenuItemClick('data_saver_overflow_item')),
              f()(l()(e), '_handleProfileClick', e._handleMenuItemClick('profile_overflow_item')),
              f()(l()(e), '_handleTopicsClick', e._handleMenuItemClick('topics_overflow_item')),
              f()(l()(e), '_handleConnectClick', e._handleMenuItemClick('connect_overflow_item')),
              f()(l()(e), '_handleFollowerRequestsClick', e._handleMenuItemClick('follower_requests_overflow_item')),
              f()(l()(e), '_handleListsClick', e._handleMenuItemClick('lists_overflow_item')),
              f()(l()(e), '_handleCommunitiesClick', e._handleMenuItemClick('communities_overflow_item')),
              f()(l()(e), '_handleTopArticlesClick', e._handleMenuItemClick('top_articles_overflow_item')),
              f()(l()(e), '_handleBookmarksClick', e._handleMenuItemClick('bookmarks_overflow_item')),
              f()(l()(e), '_handleMomentsClick', e._handleMenuItemClick('moments_overflow_item')),
              f()(l()(e), '_handleTwitterBlueClick', e._handleMenuItemClick('twitter_blue_overflow_item')),
              f()(l()(e), '_handleSettingsClick', e._handleMenuItemClick('settings_overflow_item')),
              f()(l()(e), '_handleSimpleClick', e._handleMenuItemClick()),
              f()(l()(e), '_handleHelpClick', e._handleMenuItemClick('help_overflow_item')),
              f()(l()(e), '_handleDisplayClick', e._handleMenuItemClick('display_overflow_item')),
              f()(l()(e), '_handleLogoutScribingClick', e._handleMenuItemClick('logout_overflow_item')),
              f()(l()(e), '_handleTwitterAdsClick', e._handleMenuItemClick('twitter_ads_item')),
              f()(l()(e), '_handleAnalyticsClick', e._handleMenuItemClick('analytics_item')),
              f()(l()(e), '_handleMediaStudioClick', e._handleMenuItemClick('media_studio')),
              f()(l()(e), '_handleNewslettersClick', e._handleMenuItemClick('newsletters')),
              f()(l()(e), '_handleTwitterForProfessionalsClick', e._handleMenuItemClick('twitter_for_professionals')),
              f()(l()(e), '_handleBirdwatchClick', e._handleMenuItemClick('birdwatch')),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props,
                    t = e.fetchPendingFollowersIfNeeded,
                    r = e.loggedInUser
                  r && r.protected && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.communitiesActions,
                    r = e.hasCommunityMemberships,
                    n = e.loggedInUser,
                    c = e.withMoreSideNavOverflow,
                    i = n && n.screen_name,
                    o = this.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                    a = Object(B.f)({
                      featureSwitches: this.context.featureSwitches,
                      communitiesActions: t,
                      hasCommunityMemberships: r,
                    })
                  return _.createElement(
                    _.Fragment,
                    null,
                    Object(Q.a)()
                      ? _.createElement(
                          _.Fragment,
                          null,
                          this._renderFollowerCountsItem(),
                          c || this._leftNavRefreshConnectEnabled || this._leftNavRefreshTopicsEnabled
                            ? this._renderBookmarksItem()
                            : null,
                          a && o ? this._renderCommunitiesItem(i) : null,
                          a || o || c ? this._renderListsItem(i) : null,
                          this._leftNavRefreshConnectEnabled && c ? this._renderConnectItem() : null,
                          this._leftNavRefreshTopicsEnabled && !c ? null : this._renderTopicsItem(i),
                          this._renderMomentsItem(i),
                          this._renderCollaborateItem(),
                          this._renderTwitterBlueItem(),
                          this._renderNewslettersItem(),
                          this._renderTwitterForProfessionalsItem(),
                          this._renderTwitterAdsItem(),
                          this._renderAnalyticsItem(),
                          this._renderMediaStudioItem(),
                          this._renderBirdwatchItem(),
                          _.createElement(ce.a, { spacing: 'space2' }),
                          this._renderSettingsItem(),
                          this._renderHelpCenterItem(),
                          this._renderDisplayItem(),
                          this._renderKeyboardShortcuts(),
                        )
                      : _.createElement(
                          _.Fragment,
                          null,
                          this._renderProfileItem(i),
                          o ? this._renderTopArticlesItem() : null,
                          this._renderListsItem(i),
                          this._renderTopicsItem(i),
                          this._renderBookmarksItem(),
                          this._renderMomentsItem(i),
                          this._renderCollaborateItem(),
                          this._renderTwitterBlueItem(),
                          this._renderNewslettersItem(),
                          this._renderFollowerCountsItem(),
                          _.createElement(ce.a, { spacing: 'space2' }),
                          this._renderTwitterForProfessionalsItem(),
                          this._renderTwitterAdsItem(),
                          this._renderAnalyticsItem(),
                          this._renderMediaStudioItem(),
                          this._renderBirdwatchItem(),
                          _.createElement(ce.a, { spacing: 'space2' }),
                          this._renderSettingsItem(),
                          this._renderHelpCenterItem(),
                          this._renderLabsItem(),
                          _.createElement(ce.a, { spacing: 'space2' }),
                          this._renderDataSaverItem(),
                          this._renderDisplayItem(),
                          this._renderKeyboardShortcuts(),
                          _.createElement(ce.a, { spacing: 'space2' }),
                          this._renderLogoutItem(i),
                        ),
                  )
                },
              },
            ]),
            r
          )
        })(_.Component)
      f()(ht, 'contextType', re.a), f()(ht, 'defaultProps', { onClose: Y.a })
      t.a = Object(te.a)(j(ht))
    },
    nV1z: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        i = r('ERkP'),
        o = r('Lsrn'),
        a = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(a.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
  },
])
//# sourceMappingURL=WIPED
