;(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    '9RBu': function (e, l, n) {
      'use strict'
      n.r(l),
        n.d(l, 'superFollowsSubscribeQuery', function () {
          return N
        })
      var a,
        r,
        i,
        s = n('ERkP'),
        t = n.n(s),
        u = (n('enFi'), n('3XMw')),
        o = n.n(u),
        c = n('rZeG'),
        d = n('L/9f'),
        m = n('3G7m'),
        g = (n('ho0z'), n('hBpG'), n('7x/C'), n('1t7P'), n('jQ/y'), n('uFXj'), n('jHSc')),
        p = n('2fsM'),
        y = n('t62R'),
        k = function (e) {
          var l = e.style
          return t.a.createElement(
            y.b,
            { color: 'gray700', style: l },
            t.a.createElement(
              o.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              t.a.createElement(
                y.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                o.a.d822ae43,
              ),
            ),
          )
        },
        b = n('zCf4'),
        v = n('MWbm'),
        f = n('cHvH'),
        _ = n('rHpw'),
        F = n('/yvb'),
        S = n('jAXQ'),
        w = n.n(S),
        K = o.a.d2613122,
        h = void 0 !== a ? a : (a = n('l62v')),
        T = void 0 !== r ? r : (r = n('E0zt')),
        L = _.a.create(function (e) {
          return {
            disclaimer: { marginTop: e.spaces.space48, marginBottom: e.spaces.space16 },
            subscribeButtonContainer: {
              alignItems: 'center',
              flexGrow: 1,
              marginBottom: e.spaces.space40,
              marginTop: e.spaces.space24,
              paddingHorizontal: e.spaces.space32,
            },
            subscribeButtonContainerWide: { paddingHorizontal: e.spaces.space48 },
            subscribeButton: { width: '100%' },
          }
        }),
        E = function (e) {
          var l,
            n,
            a,
            r,
            i,
            s,
            u,
            o,
            c,
            d,
            m,
            y,
            S,
            E = e.screenName,
            B = e.user,
            U = e.viewer,
            R = w()(h, B),
            C = w()(T, U),
            A = Object(b.f)(),
            N = function () {
              A.push('/'.concat(E, '/superfollows'))
            },
            j = null !== (l = null == R ? void 0 : R.legacy.name) && void 0 !== l ? l : void 0,
            D = null !== (n = null == R ? void 0 : R.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
            I = null !== (a = null == R ? void 0 : R.legacy.screen_name) && void 0 !== a ? a : void 0,
            V =
              null !==
                (r =
                  null == R || null === (i = R.super_follow_creator_benefits) || void 0 === i
                    ? void 0
                    : i.creator_intro) && void 0 !== r
                ? r
                : void 0,
            H = (
              null !==
                (s =
                  null == R || null === (u = R.super_follow_creator_benefits) || void 0 === u
                    ? void 0
                    : u.benefits_data) && void 0 !== s
                ? s
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            }),
            Q = null !== (o = null == H ? void 0 : H.description) && void 0 !== o ? o : void 0,
            z = null !== (c = null == C ? void 0 : C.legacy.profile_image_url_https) && void 0 !== c ? c : void 0,
            G = null !== (d = null == C ? void 0 : C.legacy.name) && void 0 !== d ? d : void 0,
            P = null !== (m = null == C ? void 0 : C.legacy.screen_name) && void 0 !== m ? m : void 0,
            W = null !== (y = null == C ? void 0 : C.legacy.protected) && void 0 !== y ? y : void 0,
            X = null !== (S = null == C ? void 0 : C.legacy.verified) && void 0 !== S ? S : void 0
          return t.a.createElement(f.a, null, function (e) {
            var l = e.windowWidth > _.a.theme.breakpoints.small
            return t.a.createElement(
              g.b,
              { backButtonType: 'back', backLocation: '/'.concat(E, '/superfollows'), history: A },
              t.a.createElement(p.a, {
                badgeImageUrl: z,
                badgeName: G,
                badgeScreenName: P,
                descriptionValue: Q,
                imageUrl: D,
                introValue: V,
                isProtected: W,
                isVerified: X,
                name: j,
                screenName: I,
              }),
              t.a.createElement(
                v.a,
                { style: [L.subscribeButtonContainer, l && L.subscribeButtonContainerWide] },
                t.a.createElement(k, { style: L.disclaimer }),
                t.a.createElement(
                  F.a,
                  {
                    backgroundColor: 'plum500',
                    borderColor: 'transparent',
                    color: 'white',
                    disabled: !0,
                    onPress: N,
                    style: L.subscribeButton,
                  },
                  K({ price: '$X.XX' }),
                ),
              ),
            )
          })
        },
        B = n('1k08'),
        U = n('IAZG'),
        R = o.a.g61ed8a4,
        C = o.a.c3d23f10,
        A = o.a.d338f53e,
        N = void 0 !== i ? i : (i = n('kbWR')),
        j = { context: 'SuperFollowsSubscription' },
        D = function () {
          var e,
            l,
            n,
            a = Object(b.h)().screenName || '',
            r = { screenName: Object(c.a)(a) },
            i = Object(U.a)(N, r),
            s = null == i || null === (e = i.user) || void 0 === e ? void 0 : e.result,
            u =
              null == i || null === (l = i.viewer) || void 0 === l || null === (n = l.user_results) || void 0 === n
                ? void 0
                : n.result
          return t.a.createElement(E, { screenName: a, user: null != s ? s : void 0, viewer: null != u ? u : void 0 })
        },
        I = function () {
          var e = t.a.useMemo(function () {
            return {
              type: 'CustomRetry',
              content: function (e) {
                return t.a.createElement(
                  t.a.Fragment,
                  null,
                  t.a.createElement(B.a, { description: C, style: V.errorTitleDescription, title: R }),
                  t.a.createElement(F.a, { onPress: e, style: V.errorButton, type: 'brandFilled' }, A),
                )
              },
            }
          }, [])
          return t.a.createElement(
            d.a,
            { errorConfig: j, fallback: e },
            t.a.createElement(m.a, null, t.a.createElement(D, null)),
          )
        },
        V =
          ((l.default = t.a.memo(I)),
          _.a.create(function (e) {
            return { errorTitleDescription: { marginTop: 296 }, errorButton: { marginTop: e.spaces.space24 } }
          }))
    },
    E0zt: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_viewer',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'b8bb6765b1b8587c879b79e59eb08e0a',
      }
      l.default = a
    },
    kbWR: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        r,
        i,
        s,
        t,
        u,
        o,
        c,
        d,
        m = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: (r = [
                  { kind: 'Literal', name: 's', value: 50 },
                  { kind: 'Variable', name: 'screen_name', variableName: 'screenName' },
                ]),
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_screen_name',
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
                      (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_user' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: 'viewer',
                args: (s = [{ kind: 'Literal', name: 's', value: 23 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
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
                          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_viewer' },
                        ],
                        storageKey: null,
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: r,
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_screen_name',
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
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ApiUser',
                            kind: 'LinkedField',
                            name: 'legacy',
                            plural: !1,
                            selections: [
                              (t = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'profile_image_url_https',
                                storageKey: null,
                              }),
                              (u = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                              (o = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'screen_name',
                                storageKey: null,
                              }),
                            ],
                            storageKey: null,
                          },
                          (c = {
                            alias: null,
                            args: null,
                            filters: null,
                            handle: 'defaultScalars',
                            key: '',
                            kind: 'LinkedHandle',
                            name: 'legacy',
                          }),
                          {
                            alias: null,
                            args: null,
                            concreteType: 'AudienceRewardsBenefitsData',
                            kind: 'LinkedField',
                            name: 'super_follow_creator_benefits',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'AudienceRewardsBenefitInfo',
                                kind: 'LinkedField',
                                name: 'benefits_data',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'benefit_type',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'description',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                            ],
                            storageKey: null,
                          },
                          (d = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                alias: 'viewer',
                args: s,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
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
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  t,
                                  { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                  u,
                                  o,
                                ],
                                storageKey: null,
                              },
                              c,
                              d,
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
                storageKey: 'viewer_v2(s:23)',
              },
            ],
          },
          params: {
            id: 'Uc_t9SCU-P0G3YaSK2V5-w',
            metadata: {},
            name: 'SuperFollowsSubscribeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(m.hash = '36f9c29d7da37ccc152178fe9dd49f46'), (l.default = m)
    },
    l62v: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'AudienceRewardsBenefitInfo',
                kind: 'LinkedField',
                name: 'benefits_data',
                plural: !0,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'benefit_type', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                ],
                storageKey: null,
              },
              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f588db2f47fcadc650368f72a5bbc60a',
      }
      l.default = a
    },
  },
])
//# sourceMappingURL=WIPED
