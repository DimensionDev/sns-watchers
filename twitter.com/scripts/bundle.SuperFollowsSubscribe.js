;(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    '9RBu': function (e, l, a) {
      'use strict'
      a.r(l),
        a.d(l, 'superFollowsSubscribeQuery', function () {
          return P
        })
      var n,
        r,
        t,
        i = a('ERkP'),
        s = a.n(i),
        u = (a('enFi'), a('rZeG')),
        o = a('kGix'),
        c = (a('ho0z'), a('hBpG'), a('7x/C'), a('1t7P'), a('jQ/y'), a('uFXj'), a('lD8l')),
        d = a('+7VC'),
        m = a('v//M'),
        p = a('3XMw'),
        g = a.n(p),
        y = a('VTDR'),
        k = a('MAc7'),
        b = a('9VLy'),
        f = a('t62R'),
        v = function (e) {
          var l = e.style
          return s.a.createElement(
            f.b,
            { color: 'gray700', style: l },
            s.a.createElement(
              g.a.I18NFormatMessage,
              { $i18n: 'fce78785' },
              s.a.createElement(
                f.b,
                { color: 'plum500', link: 'https://legal.twitter.com/en/purchaser-terms.html' },
                g.a.d822ae43,
              ),
            ),
          )
        },
        _ = a('1k08'),
        F = a('zCf4'),
        w = a('MWbm'),
        S = a('/yvb'),
        K = a('cHvH'),
        T = a('rHpw'),
        h = a('sgih'),
        E = a('jAXQ'),
        L = a.n(E),
        R = g.a.cbc8ce27,
        U = g.a.b600eb88,
        B = g.a.b08bbeb4,
        D = g.a.d2613122,
        C = g.a.g61ed8a4,
        N = g.a.c3d23f10,
        I = g.a.d338f53e,
        M = void 0 !== n ? n : (n = a('l62v')),
        x = void 0 !== r ? r : (r = a('E0zt')),
        A = T.a.create(function (e) {
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
        V = function (e) {
          var l = e.fetchStatus,
            a = e.onRetry,
            n = e.screenName,
            r = e.user,
            t = e.viewer,
            i = L()(M, r),
            u = L()(x, t),
            o = Object(F.f)(),
            p = function () {
              o.push('/'.concat(n, '/superfollows'))
            },
            g = function () {
              var e,
                l,
                a,
                n,
                r,
                t,
                o,
                m,
                g,
                y = null !== (e = null == i ? void 0 : i.legacy.name) && void 0 !== e ? e : void 0,
                f = null !== (l = null == i ? void 0 : i.legacy.profile_image_url_https) && void 0 !== l ? l : void 0,
                F = null !== (a = null == i ? void 0 : i.legacy.screen_name) && void 0 !== a ? a : void 0,
                K =
                  null !==
                    (n =
                      null == i || null === (r = i.super_follow_creator_benefits) || void 0 === r
                        ? void 0
                        : r.creator_intro) && void 0 !== n
                    ? n
                    : void 0,
                T = (
                  null !==
                    (t =
                      null == i || null === (o = i.super_follow_creator_benefits) || void 0 === o
                        ? void 0
                        : o.benefits_data) && void 0 !== t
                    ? t
                    : []
                ).find(function (e) {
                  return 'ExclusiveContent' === e.benefit_type
                }),
                h = null !== (m = null == T ? void 0 : T.title) && void 0 !== m ? m : R,
                E = null !== (g = null == T ? void 0 : T.description) && void 0 !== g ? g : void 0
              return s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(k.a, { imageUrl: f, name: y, value: K }),
                s.a.createElement(_.a, { description: E, style: A.titleDescription, title: h }),
                s.a.createElement(b.a, { imageUrl: f, screenName: F, style: A.signature }),
                s.a.createElement(c.a, { style: A.demoTweet }),
                s.a.createElement(_.a, { description: B, style: A.titleDescription, title: U }),
                u ? s.a.createElement(d.a, { style: [A.demoTweet, A.demoVIPTweetMarginTop], user: u }) : null,
                s.a.createElement(v, { style: A.disclaimer }),
                s.a.createElement(
                  w.a,
                  { style: A.subscribeButtonContainer },
                  s.a.createElement(
                    S.a,
                    {
                      backgroundColor: 'plum500',
                      borderColor: 'transparent',
                      color: 'white',
                      disabled: !0,
                      onPress: p,
                      style: A.subscribeButton,
                    },
                    D({ price: '$X.XX' }),
                  ),
                ),
              )
            },
            f = function () {
              return s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(_.a, { description: N, style: A.errorTitleDescription, title: C }),
                s.a.createElement(S.a, { onPress: a, style: A.errorButton, type: 'brandFilled' }, I),
              )
            }
          return s.a.createElement(K.a, null, function (e) {
            var n = e.windowWidth > T.a.theme.breakpoints.small
            return s.a.createElement(
              h.a,
              {
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: p,
                style: [A.sheet, n ? A.wide : A.narrow],
                type: 'full',
                withMask: !0,
              },
              s.a.createElement(y.a, null),
              s.a.createElement(m.a, { fetchStatus: l, onRequestRetry: a, render: g, renderFailure: f, retryable: !1 }),
            )
          })
        },
        O = a('n0Rl'),
        P = void 0 !== t ? t : (t = a('kbWR')),
        j = Object(O.b)(P, { errorConfig: { context: 'SUPER_FOLLOWS_SUBSCRIPTION_SCREEN' } })
      l.default = function () {
        var e = Object(F.h)().screenName || '',
          l = { screenName: Object(u.a)(e) }
        return s.a.createElement(j, {
          render: function (l) {
            var a,
              n,
              r,
              t = l.data,
              i = l.fetchStatus,
              u = l.retry,
              c = null == t || null === (a = t.user) || void 0 === a ? void 0 : a.result,
              d =
                null == t || null === (n = t.viewer) || void 0 === n || null === (r = n.user_results) || void 0 === r
                  ? void 0
                  : r.result
            return s.a.createElement(V, {
              fetchStatus: Object(o.b)(
                i,
                'User' === (null == c ? void 0 : c.__typename) && 'User' === (null == d ? void 0 : d.__typename),
              ),
              onRetry: u,
              screenName: e,
              user: c || void 0,
              viewer: d || void 0,
            })
          },
          variables: l,
        })
      }
    },
    E0zt: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSubscribeScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ExclusiveDemoVIPContent_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'fbdb22bbceb6934ff7a3400ee96f706c',
      }
      l.default = n
    },
    kbWR: function (e, l, a) {
      'use strict'
      a.r(l)
      var n,
        r,
        t,
        i,
        s,
        u,
        o,
        c,
        d,
        m = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSubscribeQuery',
            selections: [
              {
                alias: 'user',
                args: (r = [
                  { kind: 'Literal', name: 's', value: 49 },
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
                      (t = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSubscribeScreen_user' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: 'viewer',
                args: (i = [{ kind: 'Literal', name: 's', value: 23 }]),
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
                          t,
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
            argumentDefinitions: n,
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
                      t,
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
                          t,
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
            id: 'Y3qpvJNk_0iKIdtMmiG0Dg',
            metadata: {},
            name: 'SuperFollowsSubscribeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(m.hash = '36f9c29d7da37ccc152178fe9dd49f46'), (l.default = m)
    },
    l62v: function (e, l, a) {
      'use strict'
      a.r(l)
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
      l.default = n
    },
  },
])
//# sourceMappingURL=WIPED
