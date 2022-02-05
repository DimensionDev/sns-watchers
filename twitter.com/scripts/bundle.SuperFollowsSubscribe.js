;(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
    '9RBu': function (e, a, l) {
      'use strict'
      l.r(a),
        l.d(a, 'superFollowsSubscribeQuery', function () {
          return Y
        })
      var n,
        t = l('ERkP'),
        r = l.n(t),
        i = (l('enFi'), l('rZeG')),
        s = l('kGix'),
        o = (l('ho0z'), l('hBpG'), l('1t7P'), l('jQ/y'), l('uFXj'), l('lD8l')),
        c = l('MWbm'),
        u = l('jhWN'),
        d = l('jV+4'),
        m = l('9VO7'),
        p = l('a2Fh'),
        g = l('9Xij'),
        y = l('rHpw'),
        k = l('jAXQ'),
        f = l.n(k),
        b = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        w = void 0 !== n ? n : (n = l('ahKC'))
      function v(e) {
        var a = e.wordWidths
        return r.a.createElement(
          c.a,
          { style: T.root },
          r.a.createElement(g.a, { ratio: 1, style: T.mockUserAvatar }),
          r.a.createElement(
            c.a,
            { style: T.mockTweetContent },
            r.a.createElement(
              c.a,
              { style: T.mockUserNameContainer },
              r.a.createElement(p.a, {
                color: 'text',
                maxWidthPx: 18,
                style: T.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              r.a.createElement(p.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            r.a.createElement(p.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: a }),
          ),
        )
      }
      var h,
        F,
        _,
        S = y.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              maxWidth: '327px',
              paddingHorizontal: e.spaces.space56,
              position: 'relative',
              userSelect: 'none',
              width: '100%',
            },
            mockBackgroundTweets: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              height: '260px',
              justifyContent: 'space-between',
              width: '100%',
            },
            mockBodyCopy: { marginTop: e.spaces.space12 },
            mockFocalTweet: {
              display: 'flex',
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              height: '104px',
              padding: e.spaces.space16,
              width: '100%',
            },
            mockFocalTweetContainer: {
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            },
            mockFocalTweetContent: { flex: 1, paddingBottom: e.spaces.space4, paddingLeft: e.spaces.space12 },
            superFollowIndicatorContainer: {
              alignSelf: 'flex-start',
              marginTop: e.spaces.space8,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        T = y.a.create(function (e) {
          return {
            root: { flexDirection: 'row', marginBottom: e.spaces.space8, padding: e.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: e.colors.gray300,
              borderRadius: e.borderRadii.infinite,
              height: y.a.theme.spaces.space40,
              width: y.a.theme.spaces.space40,
            },
            mockTweetContent: {
              flexGrow: 1,
              justifyContent: 'space-between',
              marginLeft: e.spaces.space12,
              marginTop: e.spaces.space12,
            },
            mockUserNameContainer: { flexDirection: 'row', justifyContent: 'flex-start' },
            mockUserNameMarginRight: { marginRight: e.spaces.space4 },
          }
        }),
        E = function (e) {
          var a = e.style,
            l = e.viewer,
            n = f()(w, l),
            t = (null == n ? void 0 : n.legacy) || {},
            i = t.name,
            s = t.profile_image_url_https,
            o = t.protected,
            g = t.screen_name,
            y = t.verified
          return i && g && s
            ? r.a.createElement(
                c.a,
                { style: [S.root, a] },
                r.a.createElement(
                  c.a,
                  { style: S.mockBackgroundTweets },
                  r.a.createElement(v, { wordWidths: b.backgroundTopTweet }),
                  r.a.createElement(v, { wordWidths: b.backgroundBottomTweet }),
                ),
                r.a.createElement(
                  c.a,
                  { style: S.mockFocalTweetContainer },
                  r.a.createElement(
                    c.a,
                    { style: S.mockFocalTweet },
                    r.a.createElement(c.a, null, r.a.createElement(u.a, { focusable: !1, size: 'xLarge', uri: s })),
                    r.a.createElement(
                      c.a,
                      { style: S.mockFocalTweetContent },
                      r.a.createElement(d.a, {
                        isProtected: o,
                        isVerified: y,
                        name: i,
                        nameSize: 'body',
                        screenName: g,
                        screenNameSize: 'body',
                      }),
                      r.a.createElement(
                        c.a,
                        { style: S.superFollowIndicatorContainer },
                        r.a.createElement(m.a, { type: 'superFollower' }),
                      ),
                      r.a.createElement(p.a, {
                        style: S.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: b.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        },
        K = l('v//M'),
        x = l('3XMw'),
        R = l.n(x),
        C = l('VTDR'),
        L = l('MAc7'),
        B = l('9VLy'),
        U = l('t62R'),
        P = function (e) {
          var a = e.style
          return r.a.createElement(
            U.b,
            { color: 'gray700', style: a },
            r.a.createElement(
              R.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              r.a.createElement(
                U.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                R.a.d822ae43,
              ),
            ),
          )
        },
        D = function (e) {
          var a = e.description,
            l = e.style,
            n = e.title
          return r.a.createElement(
            c.a,
            { style: l },
            r.a.createElement(
              U.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              n,
            ),
            a && r.a.createElement(U.b, { color: 'gray700', style: N.description }, a),
          )
        },
        N = y.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        }),
        j = l('Ty5D'),
        W = l('/yvb'),
        I = l('cHvH'),
        A = l('sgih'),
        H = R.a.cbc8ce27,
        V = R.a.b600eb88,
        M = R.a.b08bbeb4,
        O = R.a.d2613122,
        z = R.a.g61ed8a4,
        Q = R.a.c3d23f10,
        X = R.a.d338f53e,
        G = void 0 !== h ? h : (h = l('l62v')),
        q = void 0 !== F ? F : (F = l('E0zt')),
        J = y.a.create(function (e) {
          return {
            sheet: {
              backgroundColor: e.colors.cellBackground,
              minHeight: '480px',
              paddingBottom: e.spaces.space40,
              paddingTop: e.spaces.space64,
              position: 'relative',
            },
            demoTweet: { alignSelf: 'center', marginTop: e.spaces.space16 },
            demoVIPTweetMarginTop: { marginTop: e.spaces.space48 },
            titleDescription: { marginTop: e.spaces.space72 },
            signature: { marginTop: e.spaces.space8 },
            disclaimer: { marginTop: e.spaces.space64 },
            subscribeButtonContainer: { alignItems: 'center', flexGrow: 1, marginTop: e.spaces.space24 },
            subscribeButton: { width: '100%' },
            errorTitleDescription: { marginTop: 296 },
            errorButton: { marginTop: e.spaces.space24 },
            narrow: { paddingHorizontal: e.spaces.space32 },
            wide: { maxHeight: '600px', paddingHorizontal: e.spaces.space64 },
          }
        }),
        $ = function (e) {
          var a = e.fetchStatus,
            l = e.onRetry,
            n = e.screenName,
            t = e.user,
            i = e.viewer,
            s = f()(G, t),
            u = f()(q, i),
            d = Object(j.g)(),
            m = function () {
              d.push('/'.concat(n, '/superfollows'))
            },
            p = function () {
              var e,
                a,
                l,
                n,
                t,
                i,
                d,
                p,
                g,
                y = null !== (e = null == s ? void 0 : s.legacy.name) && void 0 !== e ? e : void 0,
                k = null !== (a = null == s ? void 0 : s.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
                f = null !== (l = null == s ? void 0 : s.legacy.screen_name) && void 0 !== l ? l : void 0,
                b =
                  null !==
                    (n =
                      null == s || null === (t = s.super_follow_creator_benefits) || void 0 === t
                        ? void 0
                        : t.creator_intro) && void 0 !== n
                    ? n
                    : void 0,
                w = (
                  null !==
                    (i =
                      null == s || null === (d = s.super_follow_creator_benefits) || void 0 === d
                        ? void 0
                        : d.benefits_data) && void 0 !== i
                    ? i
                    : []
                ).find(function (e) {
                  return 'ExclusiveContent' === e.benefit_type
                }),
                v = null !== (p = null == w ? void 0 : w.title) && void 0 !== p ? p : H,
                h = null !== (g = null == w ? void 0 : w.description) && void 0 !== g ? g : void 0
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(L.a, { imageUrl: k, name: y, value: b }),
                r.a.createElement(D, { description: h, style: J.titleDescription, title: v }),
                r.a.createElement(B.a, { imageUrl: k, screenName: f, style: J.signature }),
                r.a.createElement(o.a, { style: J.demoTweet }),
                r.a.createElement(D, { description: M, style: J.titleDescription, title: V }),
                u ? r.a.createElement(E, { style: [J.demoTweet, J.demoVIPTweetMarginTop], viewer: u }) : null,
                r.a.createElement(P, { style: J.disclaimer }),
                r.a.createElement(
                  c.a,
                  { style: J.subscribeButtonContainer },
                  r.a.createElement(
                    W.a,
                    {
                      backgroundColor: 'plum500',
                      borderColor: 'transparent',
                      color: 'white',
                      disabled: !0,
                      onPress: m,
                      style: J.subscribeButton,
                    },
                    O({ price: '$X.XX' }),
                  ),
                ),
              )
            },
            g = function () {
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(D, { description: Q, style: J.errorTitleDescription, title: z }),
                r.a.createElement(W.a, { onPress: l, style: J.errorButton, type: 'brandFilled' }, X),
              )
            }
          return r.a.createElement(I.a, null, function (e) {
            var n = e.windowWidth > y.a.theme.breakpoints.small
            return r.a.createElement(
              A.a,
              {
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: m,
                style: [J.sheet, n ? J.wide : J.narrow],
                type: 'full',
                withMask: !0,
              },
              r.a.createElement(C.a, null),
              r.a.createElement(K.a, { fetchStatus: a, onRequestRetry: l, render: p, renderFailure: g, retryable: !1 }),
            )
          })
        },
        Z = l('n0Rl'),
        Y = void 0 !== _ ? _ : (_ = l('kbWR')),
        ee = Object(Z.b)(Y, { errorConfig: { context: 'SUPER_FOLLOWS_SUBSCRIPTION_SCREEN' } })
      a.default = function () {
        var e = Object(j.i)().screenName || '',
          a = { screenName: Object(i.a)(e) }
        return r.a.createElement(ee, {
          render: function (a) {
            var l,
              n,
              t,
              i = a.data,
              o = a.fetchStatus,
              c = a.retry,
              u = null == i || null === (l = i.user) || void 0 === l ? void 0 : l.result,
              d =
                null == i || null === (n = i.viewer) || void 0 === n || null === (t = n.user_results) || void 0 === t
                  ? void 0
                  : t.result
            return r.a.createElement($, {
              fetchStatus: Object(s.b)(
                o,
                'User' === (null == u ? void 0 : u.__typename) && 'User' === (null == d ? void 0 : d.__typename),
              ),
              onRetry: c,
              screenName: e,
              user: u || void 0,
              viewer: d || void 0,
            })
          },
          variables: a,
        })
      }
    },
    E0zt: function (e, a, l) {
      'use strict'
      l.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ExclusiveDemoVIPContent_viewer' }],
        type: 'User',
        abstractKey: null,
        hash: 'fe467192df543b45c5ba1f84fd9d3c94',
      }
      a.default = n
    },
    ahKC: function (e, a, l) {
      'use strict'
      l.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ExclusiveDemoVIPContent_viewer',
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
        hash: '4d9f2616539f76e98b06b36a7f2ca18a',
      }
      a.default = n
    },
    kbWR: function (e, a, l) {
      'use strict'
      l.r(a)
      var n,
        t,
        r,
        i,
        s,
        o,
        c,
        u,
        d = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: (t = [
                  { kind: 'Literal', name: 's', value: 45 },
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
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_user' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: 'viewer',
                args: (i = [{ kind: 'Literal', name: 's', value: 21 }]),
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
                          r,
                          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_viewer' },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:21)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: n,
            kind: 'Operation',
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: t,
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
                                name: 'profile_image_url_https',
                                storageKey: null,
                              }),
                              (o = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                              (c = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'screen_name',
                                storageKey: null,
                              }),
                            ],
                            storageKey: null,
                          },
                          (u = {
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
                                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
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
                args: i,
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
                                  s,
                                  { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                  o,
                                  c,
                                ],
                                storageKey: null,
                              },
                              u,
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
                storageKey: 'viewer_v2(s:21)',
              },
            ],
          },
          params: {
            id: 'g6C_poFBLH_FXmCORGNnrQ',
            metadata: {},
            name: 'SuperFollowsSubscribeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = '36f9c29d7da37ccc152178fe9dd49f46'), (a.default = d)
    },
    l62v: function (e, a, l) {
      'use strict'
      l.r(a)
      var n = {
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
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
        hash: '01019dce27a8b6dc98a95bff2b7f896c',
      }
      a.default = n
    },
  },
])
//# sourceMappingURL=WIPED
