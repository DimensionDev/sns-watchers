;(window.webpackJsonp = window.webpackJsonp || []).push([
  [226],
  {
    '+OUG': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitPlatformsOtherScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'content_creation_platform_other',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '55cd0beb19747f9f51eb603808953534',
      }
      a.default = t
    },
    '02qo': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksIntroScreen_user',
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
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '1a18726328adda6b0b67b371384ad265',
      }
      a.default = t
    },
    '0ULw': function (e, a, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var t = n('KEM+'),
        l = n.n(t),
        r = n('ERkP'),
        i = n('Lsrn'),
        o = n('k/Ka')
      function c(e, a) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, t)
        }
        return n
      }
      function s(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? c(Object(n), !0).forEach(function (a) {
                l()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(o.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          r.createElement(
            'g',
            null,
            r.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (a.a = u)
    },
    '3qCL': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category_other', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_creation_platform', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'content_creation_platform_other',
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'purpose', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'ethnicity', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'gender', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '01c6511cbc1b8fc1f300b50bd8bec34f',
      }
      a.default = t
    },
    '5jO1': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingScreen_priceOfferings',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'c8b5422e4768462695d5eb3442ab3a34',
      }
      a.default = t
    },
    '6byF': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingSwitch_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
              {
                alias: null,
                args: null,
                concreteType: 'AudienceRewardsBenefitInfo',
                kind: 'LinkedField',
                name: 'benefits_data',
                plural: !0,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'SuperFollowsSelectedPrice',
            kind: 'LinkedField',
            name: 'super_follow_creator_price_metadata',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null }],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingGetStartedScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '78d697b9eac5cfd70105fd9ee29e310e',
      }
      a.default = t
    },
    '9SqB': function (e, a, n) {
      'use strict'
      var t = n('IGGJ')(n('yiKp')),
        l = n('ERkP'),
        r = n('Ud88'),
        i = n('K1lQ').commitMutation,
        o = l.useState,
        c = l.useEffect,
        s = l.useRef,
        u = l.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = r(),
          l = d(),
          p = s(n),
          m = s(e),
          g = s(new Set()),
          f = o(!1),
          b = f[0],
          y = f[1],
          h = u(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), l.current && y(g.current.size > 0))
            },
            [n, l, e],
          )
        c(
          function () {
            ;(p.current === n && m.current === e) ||
              ((g.current = new Set()), l.current && y(!1), (p.current = n), (m.current = e))
          },
          [n, l, e],
        )
        var _ = u(
          function (r) {
            var i = a(
              n,
              (0, t.default)(
                (0, t.default)({}, r),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, a) {
                    h(i), r.onCompleted && r.onCompleted(e, a)
                  },
                  onError: function (e) {
                    h(i), r.onError && r.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(i), r.onUnsubscribe && r.onUnsubscribe()
                  },
                },
              ),
            )
            return g.current.add(i), l.current && y(!0), i
          },
          [h, a, n, l, e],
        )
        return [_, b]
      }
    },
    AyUU: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l,
        r,
        i,
        o,
        c,
        s = {
          fragment: {
            argumentDefinitions: [
              (t = { defaultValue: null, kind: 'LocalArgument', name: 'category' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'ethnicity' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'gender' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'platform' }),
              (o = { defaultValue: null, kind: 'LocalArgument', name: 'purpose' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            selections: (c = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'content_category', variableName: 'category' },
                  { kind: 'Variable', name: 'content_creation_platform', variableName: 'platform' },
                  { kind: 'Variable', name: 'ethnicity', variableName: 'ethnicity' },
                  { kind: 'Variable', name: 'gender', variableName: 'gender' },
                  { kind: 'Variable', name: 'purpose', variableName: 'purpose' },
                  { kind: 'Literal', name: 'track', value: 'SuperFollows' },
                ],
                kind: 'ScalarField',
                name: 'seller_application_put',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [t, i, o, l, r],
            kind: 'Operation',
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            selections: c,
          },
          params: {
            id: 'xAwoXB0xodQu-Yma6pR2Lw',
            metadata: {},
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(s.hash = '38de90823c3fb6770d441acfd7d6c0d5'), (a.default = s)
    },
    EM6u: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_priceOfferings',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'c8327c06a912f18626acb4cfe69bc035',
      }
      a.default = t
    },
    G8I5: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l,
        r,
        i,
        o,
        c,
        s,
        u,
        d = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (t = [{ kind: 'Literal', name: 's', value: 21 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null }),
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
                          {
                            kind: 'InlineFragment',
                            selections: [
                              l,
                              (i = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'stripe_account_status',
                                storageKey: null,
                              }),
                              (o = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_follows_application_status',
                                storageKey: null,
                              }),
                              { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSwitch_user' },
                              { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_user' },
                              { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_user' },
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
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSwitch_viewer' },
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_viewer' },
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_viewer' },
                ],
                storageKey: 'viewer_v2(s:21)',
              },
              {
                alias: null,
                args: t,
                concreteType: 'SuperFollowsPriceOfferings',
                kind: 'LinkedField',
                name: 'super_follows_price_offerings',
                plural: !1,
                selections: [
                  l,
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_priceOfferings' },
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_priceOfferings' },
                ],
                storageKey: 'super_follows_price_offerings(s:21)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'SuperFollowsSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: t,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  l,
                  r,
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
                              i,
                              o,
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
                                    name: 'followers_count',
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
                                    name: 'profile_image_url_https',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
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
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_following_eligibility',
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
                                  (c = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'creator_intro',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'AudienceRewardsBenefitInfo',
                                    kind: 'LinkedField',
                                    name: 'benefits_data',
                                    plural: !0,
                                    selections: [
                                      (s = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'description',
                                        storageKey: null,
                                      }),
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'SuperFollowsSelectedPrice',
                                kind: 'LinkedField',
                                name: 'super_follow_creator_price_metadata',
                                plural: !1,
                                selections: [
                                  (u = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'selected_price',
                                    storageKey: null,
                                  }),
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
                    kind: 'ClientExtension',
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'SuperFollowsApplicationDraft',
                        kind: 'LinkedField',
                        name: 'super_follows_application_draft',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'content_category', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'content_category_other',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'content_creation_platform',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'content_creation_platform_other',
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: 'ScalarField', name: 'purpose', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'ethnicity', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'gender', storageKey: null },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'SuperFollowsOnboardingDraft',
                        kind: 'LinkedField',
                        name: 'super_follows_onboarding_draft',
                        plural: !1,
                        selections: [c, s, u],
                        storageKey: null,
                      },
                    ],
                  },
                ],
                storageKey: 'viewer_v2(s:21)',
              },
              {
                alias: null,
                args: t,
                concreteType: 'SuperFollowsPriceOfferings',
                kind: 'LinkedField',
                name: 'super_follows_price_offerings',
                plural: !1,
                selections: [
                  l,
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
                ],
                storageKey: 'super_follows_price_offerings(s:21)',
              },
            ],
          },
          params: {
            id: 'gCWBV_EBUy7eGCRcMk9WzQ',
            metadata: {},
            name: 'SuperFollowsSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = '3da900384593caeb85c2db0e941846eb'), (a.default = d)
    },
    JB6R: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitCategoriesScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '63ef624d384eef22524153c672b8543c',
      }
      a.default = t
    },
    K6KJ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitGenderScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'gender', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '1ecc848d6faae9a6dabc5fbb0751bcca',
      }
      a.default = t
    },
    LiCP: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitEthnicityScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'ethnicity', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '386a11cf1a5dace4ad08d9cb79a3752a',
      }
      a.default = t
    },
    MXCg: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSwitch_priceOfferings',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_priceOfferings' },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'bece66f9ce665e1562f02db458398326',
      }
      a.default = t
    },
    PlkH: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = { kind: 'InlineDataFragment', name: 'clientOnlyState_viewer', hash: '339dd7e582bd34b9ab5ab7f2f43bfa62' }
      a.default = t
    },
    RLjm: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationEligibilityScreen_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'super_following_eligibility', storageKey: null },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'ad902c8bf33468dccb33365e2b5ae866',
      }
      a.default = t
    },
    TXsE: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksIntroScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '07da2d42eb7968bbef288ee117771bc7',
      }
      a.default = t
    },
    UNVS: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingSwitch_priceOfferings',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingScreen_priceOfferings' },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: '1065a967d0ebd03f88788bad448193e0',
      }
      a.default = t
    },
    d8Sa: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSwitch_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'ccd84cdd887e87834b205ff89a6e63e1',
      }
      a.default = t
    },
    dNhZ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingSwitch_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingGetStartedScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'a9929d6b19c545f3daf3d487eab738ee',
      }
      a.default = t
    },
    hznd: function (e, a, n) {
      'use strict'
      var t = n('97Jx'),
        l = n.n(t),
        r = n('ERkP'),
        i = n('BedV'),
        o = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        c = n.n(o),
        s = (n('ho0z'), n('t62R')),
        u = n('IMYl'),
        d = n('py1r'),
        p = n('I4+6'),
        m = n('cm6r'),
        g = n('rHpw'),
        f = n('MWbm')
      function b(e, a) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, t)
        }
        return n
      }
      function y(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? b(Object(n), !0).forEach(function (a) {
                c()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var h = g.a.create(function (e) {
          return {
            root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: 'hidden' },
            base: {
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexGrow: 1,
            },
            border: {
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.medium,
            },
            containerClicked: { backgroundColor: e.colors.primary },
            interactive: { cursor: 'pointer' },
            radioBackground: {
              borderRadius: e.borderRadii.infinite,
              margin: '-'.concat(e.spaces.space8),
              padding: e.spaces.space8,
            },
            textContainer: { margin: e.spaces.space12, flexShrink: 1 },
            radioContainer: { userSelect: 'none', marginRight: e.spaces.space12, marginTop: e.spaces.space12 },
            helpText: { marginTop: e.spaces.space8 },
            tileStyle: { height: 'inherit' },
            mainContainer: { padding: e.spaces.space4 },
            circleDisabled: { borderColor: e.colors.gray200 },
            circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 },
            circle: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.gray700,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
              borderRadius: e.spaces.space32,
              height: e.spaces.space20,
              justifyContent: 'center',
              width: e.spaces.space20,
            },
            circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
            checkMark: { width: '18px', height: '18px', color: e.colors.whiteOnColor },
          }
        }),
        _ = y(
          y({}, g.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        v = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            l = e.checked,
            i = e.disabled,
            o = e.helpText,
            c = e.label,
            b = e.name,
            y = e.onChange,
            v = p.a.generate({
              backgroundColor: g.a.theme.colors.transparent,
              color: l ? g.a.theme.colors.primary : g.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return r.createElement(d.a, { disabled: i }, function (e) {
            return r.createElement(
              f.a,
              { style: h.root },
              r.createElement(
                f.a,
                { accessibilityRole: 'label', style: [h.base, h.border, !i && h.interactive] },
                r.createElement(
                  f.a,
                  { style: h.textContainer },
                  r.createElement(s.b, { weight: 'bold' }, c),
                  o && r.createElement(s.b, { color: 'gray700', size: 'subtext2', style: h.helpText }, o),
                ),
                r.createElement(
                  f.a,
                  { style: h.radioContainer },
                  r.createElement(
                    m.a,
                    { disabled: i, interactiveStyles: v, interactivityState: e, style: h.radioBackground },
                    r.createElement(
                      f.a,
                      {
                        style: [
                          h.circle,
                          l && h.circleActive,
                          i && h.circleDisabled,
                          l && i && h.circleCheckedAndDisabled,
                        ],
                      },
                      l ? r.createElement(u.a, { style: h.checkMark }) : null,
                    ),
                  ),
                  r.createElement('input', {
                    'aria-label': a,
                    'aria-posinset': n,
                    'aria-setsize': t,
                    checked: l,
                    disabled: i,
                    name: b,
                    onChange: l ? void 0 : y,
                    style: _,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      a.a = function (e) {
        return r.createElement(
          i.a,
          l()({}, e, {
            renderSelector: function (e) {
              return r.createElement(v, l()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    lZLw: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSwitch_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitCategoriesScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitCategoriesOtherScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitPlatformsScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitPlatformsOtherScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitEthnicityScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitGenderScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '592e02827303ceead6400dce8880e3ef',
      }
      a.default = t
    },
    mEFY: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSwitch_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
              {
                alias: null,
                args: null,
                concreteType: 'AudienceRewardsBenefitInfo',
                kind: 'LinkedField',
                name: 'benefits_data',
                plural: !0,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'SuperFollowsSelectedPrice',
            kind: 'LinkedField',
            name: 'super_follow_creator_price_metadata',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null }],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '1e4acea3a8348dd6417f3650af3da449',
      }
      a.default = t
    },
    mKqc: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'b29562560d47f8557404c3ace0d1a09c',
      }
      a.default = t
    },
    nAiE: function (e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'superFollowsSettingsQuery', function () {
          return zi
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return N
        }),
        n.d(t, 'Arrow2x', function () {
          return G
        }),
        n.d(t, 'Arrow3x', function () {
          return Q
        }),
        n.d(t, 'Bench', function () {
          return J
        }),
        n.d(t, 'Bench2x', function () {
          return X
        }),
        n.d(t, 'Bench3x', function () {
          return Z
        }),
        n.d(t, 'Cat', function () {
          return $
        }),
        n.d(t, 'Cat2x', function () {
          return Y
        }),
        n.d(t, 'Cat3x', function () {
          return ee
        }),
        n.d(t, 'Clipboard', function () {
          return ae
        }),
        n.d(t, 'Clipboard2x', function () {
          return ne
        }),
        n.d(t, 'Clipboard3x', function () {
          return te
        }),
        n.d(t, 'CoinStairs', function () {
          return le
        }),
        n.d(t, 'CoinStairs2x', function () {
          return re
        }),
        n.d(t, 'CoinStairs3x', function () {
          return ie
        }),
        n.d(t, 'HandCoins', function () {
          return oe
        }),
        n.d(t, 'HandCoins2x', function () {
          return ce
        }),
        n.d(t, 'HandCoins3x', function () {
          return se
        }),
        n.d(t, 'OneFinger', function () {
          return ue
        }),
        n.d(t, 'OneFinger2x', function () {
          return de
        }),
        n.d(t, 'OneFinger3x', function () {
          return pe
        }),
        n.d(t, 'PaperAirplane', function () {
          return me
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return ge
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return fe
        }),
        n.d(t, 'Puzzle', function () {
          return be
        }),
        n.d(t, 'Puzzle2x', function () {
          return ye
        }),
        n.d(t, 'Puzzle3x', function () {
          return he
        }),
        n.d(t, 'Thumbsup', function () {
          return _e
        }),
        n.d(t, 'Thumbsup2x', function () {
          return ve
        }),
        n.d(t, 'Thumbsup3x', function () {
          return we
        }),
        n.d(t, 'TrafficLight', function () {
          return Se
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Ee
        }),
        n.d(t, 'TrafficLight3x', function () {
          return ke
        }),
        n.d(t, 'Uturn', function () {
          return Fe
        }),
        n.d(t, 'Uturn2x', function () {
          return xe
        }),
        n.d(t, 'Uturn3x', function () {
          return Ce
        })
      var l,
        r,
        i,
        o = n('ERkP'),
        c = n('tI3i'),
        s = n.n(c),
        u = n('Ty5D'),
        d = o.createContext(),
        p = function (e) {
          var a = e.children
          return o.createElement(d.Provider, { value: Object(u.g)() }, a)
        },
        m = function () {
          var e = o.useContext(d)
          return s()(!!e, 'history must be defined'), e
        },
        g = n('v//M'),
        f = (n('enFi'), n('3XMw')),
        b = n.n(f),
        y = n('yoO3'),
        h = n('kGix'),
        _ = n('/yvb'),
        v = n('xKuM'),
        w = n('5Vk4'),
        S = function (e) {
          var a = e.shouldClose,
            n = Object(u.g)(),
            t = m()
          return o.createElement(w.a, {
            backButtonType: 'back',
            onClick: function () {
              a ? t.push('/settings/monetization') : n.goBack()
            },
          })
        },
        E = function (e) {
          var a = e.leftControlShouldClose,
            n = e.rightControl,
            t = e.subtitle,
            l = e.title
          return o.createElement(v.a, {
            leftControl: o.createElement(S, { shouldClose: a }),
            rightControl: n,
            subtitle: t,
            title: l,
            withBottomBorder: !0,
          })
        },
        k = n('rHpw'),
        F = n('MWbm'),
        x = function (e) {
          var a = e.appBar,
            n = e.children
          return o.createElement(o.Fragment, null, a, o.createElement(F.a, { style: C.container }, n))
        },
        C = k.a.create(function (e) {
          return {
            container: {
              marginTop: e.spaces.space24,
              marginHorizontal: e.spaces.space20,
              marginBottom: e.spaces.space56,
            },
          }
        }),
        O = b.a.g92a2343,
        K = b.a.a91bb144,
        L = function () {
          var e = Object(u.g)(),
            a = o.createElement(
              _.a,
              {
                onPress: function () {
                  e.push('/application/submit')
                },
                type: 'primaryFilled',
              },
              K,
            ),
            n = o.createElement(E, { rightControl: a, title: O })
          return o.createElement(x, { appBar: n })
        },
        T = (n('jQ3i'), n('x4t0'), n('z84I'), n('855f')),
        B = 'https://help.twitter.com/using-twitter/super-follows-creator',
        R = n('6s7X'),
        P = function () {
          return o.createElement(_.a, { icon: o.createElement(R.a, null), link: B, pullLeft: !0, type: 'primaryText' })
        },
        D = n('t62R'),
        A = n('WtWS'),
        j = n('0ULw'),
        z = function (e) {
          return e.items.map(function (e) {
            return o.createElement(
              F.a,
              { key: e.label, style: I.item },
              o.createElement(D.b, { style: I.label, weight: 'bold' }, e.label),
              e.checked
                ? o.createElement(A.a, { style: I.iconChecked })
                : o.createElement(j.a, { style: I.iconUnchecked }),
            )
          })
        },
        I = k.a.create(function (e) {
          return {
            iconChecked: { color: e.colors.primary },
            iconUnchecked: { color: e.colors.gray700 },
            item: { flexDirection: 'row', marginVertical: e.spaces.space12 },
            label: { flex: 1 },
          }
        }),
        M = function () {
          return o.createElement(
            D.b,
            { align: 'center', color: 'gray700' },
            o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              o.createElement(
                D.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                b.a.ebc0cbbc,
              ),
            ),
          )
        },
        V = n('ddV6'),
        U = n.n(V),
        H =
          (n('Qavd'),
          n('JtPf'),
          n('7x/C'),
          function (e) {
            var a = e.color,
              n = e.disabled,
              t = e.history,
              l = e.label,
              r = e.onPress,
              i = e.path,
              c = e.size,
              s = e.style,
              d = e.type,
              p = void 0 === d ? 'primaryFilled' : d,
              m = Object(u.g)(),
              g = o.useState(!1),
              f = U()(g, 2),
              b = f[0],
              y = f[1],
              h = function () {
                ;(null != t ? t : m).push(i)
              }
            return o.createElement(
              _.a,
              {
                color: a,
                disabled: b || n,
                onPress: function (e) {
                  r
                    ? (y(!0),
                      r(e)
                        .then(h)
                        .finally(function () {
                          return y(!1)
                        }))
                    : h()
                },
                size: c,
                style: s,
                type: p,
              },
              l,
            )
          }),
        W = n('jAXQ'),
        q = n.n(W),
        N = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        G = n.p + 'Arrow@2x.8af675c5.png',
        Q = n.p + 'Arrow@3x.949d4365.png',
        J = n.p + 'Bench.ed26a435.png',
        X = n.p + 'Bench@2x.ef9fb7d5.png',
        Z = n.p + 'Bench@3x.a306fd55.png',
        $ = n.p + 'Cat.089435a5.png',
        Y = n.p + 'Cat@2x.bca70155.png',
        ee = n.p + 'Cat@3x.2b225ef5.png',
        ae = n.p + 'Clipboard.540710d5.png',
        ne = n.p + 'Clipboard@2x.72ca72e5.png',
        te = n.p + 'Clipboard@3x.1b952e95.png',
        le = n.p + 'CoinStairs.8488b245.png',
        re = n.p + 'CoinStairs@2x.34fd5855.png',
        ie = n.p + 'CoinStairs@3x.1b706305.png',
        oe = n.p + 'HandCoins.fbd23965.png',
        ce = n.p + 'HandCoins@2x.c1b62b75.png',
        se = n.p + 'HandCoins@3x.7dd5f3d5.png',
        ue = n.p + 'OneFinger.6eb5d9c5.png',
        de = n.p + 'OneFinger@2x.a13e1ba5.png',
        pe = n.p + 'OneFinger@3x.7f22c175.png',
        me = n.p + 'PaperAirplane.1ef48a05.png',
        ge = n.p + 'PaperAirplane@2x.2923eb15.png',
        fe = n.p + 'PaperAirplane@3x.47e4b145.png',
        be = n.p + 'Puzzle.aa045515.png',
        ye = n.p + 'Puzzle@2x.5be7ab15.png',
        he = n.p + 'Puzzle@3x.1796b225.png',
        _e = n.p + 'Thumbsup.f5be79d5.png',
        ve = n.p + 'Thumbsup@2x.6d106945.png',
        we = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Se = n.p + 'TrafficLight.11644b65.png',
        Ee = n.p + 'TrafficLight@2x.5657de25.png',
        ke = n.p + 'TrafficLight@3x.a5a35335.png',
        Fe = n.p + 'Uturn.c8267f55.png',
        xe = n.p + 'Uturn@2x.db3f94d5.png',
        Ce = n.p + 'Uturn@3x.22f27905.png',
        Oe = n('tn7R'),
        Ke = n('TIdA'),
        Le = n('A91F'),
        Te = 400,
        Be = 250,
        Re = [1, 2, 3],
        Pe = Object.freeze({
          Arrow: 'Arrow',
          Bench: 'Bench',
          Cat: 'Cat',
          Clipboard: 'Clipboard',
          CoinStairs: 'CoinStairs',
          HandCoins: 'HandCoins',
          OneFinger: 'OneFinger',
          PaperAirplane: 'PaperAirplane',
          Puzzle: 'Puzzle',
          Thumbsup: 'Thumbsup',
          TrafficLight: 'TrafficLight',
          Uturn: 'Uturn',
        }),
        De = Object(Oe.a)(Pe).reduce(function (e, a) {
          var n = Math.max.apply(Math, Re)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Te * n, height: Be * n },
              customVariants: Re.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Te * e, height: Be * e }
              }),
            }),
            e
          )
        }, {}),
        Ae = function (e) {
          var a = e.type,
            n = De[a],
            t = n.aspectRatio,
            l = n.customVariants,
            r = n.image
          return o.createElement(
            F.a,
            { style: je.illustration },
            o.createElement(Ke.a, {
              accessibilityLabel: '',
              aspectMode: Le.a.exact(t),
              customVariants: l,
              draggable: !1,
              image: r,
            }),
          )
        },
        je = k.a.create(function (e) {
          return { illustration: { alignSelf: 'center', width: Te, height: Be } }
        }),
        ze = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            l = e.subtext
          return o.createElement(
            o.Fragment,
            null,
            t && o.createElement(Ae, { type: t }),
            o.createElement(
              D.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title4',
                style: t && Ie.headline,
                weight: 'heavy',
              },
              n,
            ),
            o.createElement(D.b, { align: a, color: 'gray700', style: Ie.subtext }, l),
          )
        },
        Ie = k.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space48 }, subtext: { marginVertical: e.spaces.space12 } }
        }),
        Me = b.a.feb54b4f,
        Ve = b.a.bac156a6,
        Ue = b.a.a3a20a10,
        He = b.a.b26ae507,
        We = b.a.a753a87f,
        qe = b.a.abfaa527,
        Ne = T.a.getTruncatedCount(1e4),
        Ge = b.a.fdd95737({ minFollowersCount: Ne }),
        Qe = T.a.getTruncatedCount(25),
        Je = [
          {
            label: Ge,
            test: function (e) {
              var a
              return !(
                null != e &&
                null !== (a = e.super_following_eligibility) &&
                void 0 !== a &&
                a.includes('followers')
              )
            },
          },
          {
            label: b.a.a0dcad86({ minTweetsCount: Qe }),
            test: function (e) {
              var a
              return !(
                null != e &&
                null !== (a = e.super_following_eligibility) &&
                void 0 !== a &&
                a.includes('tweets')
              )
            },
          },
          {
            label: b.a.c27f57ac,
            test: function (e) {
              var a
              return !(null != e && null !== (a = e.super_following_eligibility) && void 0 !== a && a.includes('age'))
            },
          },
        ],
        Xe = void 0 !== l ? l : (l = n('RLjm')),
        Ze = function (e) {
          var a = e.user,
            n = q()(Xe, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            l = t ? Pe.Arrow : Pe.TrafficLight,
            r = t ? Me : Ue,
            i = t ? Ve : He,
            c = Je.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            }),
            s = o.createElement(E, { rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: s },
            o.createElement(ze, { headline: r, illustration: l, subtext: i }),
            o.createElement(z, { items: c }),
            t && o.createElement(M, null),
            o.createElement(H, { disabled: !t, label: We, path: '/application/one_more_thing' }),
            o.createElement(H, { label: qe, path: '/application/one_more_thing' }),
          )
        },
        $e = n('9RkS'),
        Ye = b.a.bbb89925,
        ea = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            l = e.price,
            r = e.step,
            i = e.value,
            c = o.useState(i),
            s = U()(c, 2),
            u = s[0],
            d = s[1],
            p = Math.round(a * l * (u / 100))
          return o.createElement(
            F.a,
            { style: aa.container },
            o.createElement(
              D.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                o.createElement(D.b, { weight: 'bold' }, b.a.a7dd00ea),
                o.createElement(
                  D.b,
                  { style: aa.earnings, weight: 'heavy' },
                  b.a.c62c1d30({ earnings: '$'.concat(T.a.getTruncatedCount(p)) }),
                ),
                o.createElement(D.b, { color: 'green500', style: aa.asteriskLeft }, b.a.e0fb982b),
              ),
            ),
            o.createElement(
              F.a,
              { style: aa.slider },
              o.createElement($e.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: r,
                thumbLabel: Ye({ percent: u }),
                value: u,
              }),
            ),
            o.createElement(
              D.b,
              { color: 'green500', size: 'subtext3', style: aa.footnote },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(l) },
                o.createElement(D.b, { style: aa.asteriskRight }, b.a.e263c38e),
              ),
            ),
          )
        },
        aa = k.a.create(function (e) {
          return {
            container: {
              backgroundColor: e.colors.green50,
              paddingHorizontal: e.spaces.space56,
              paddingVertical: e.spaces.space32,
            },
            earnings: {
              display: 'block',
              lineHeight: '70px',
              fontSize: '60px',
              marginTop: e.spaces.space12,
              marginBottom: e.spaces.space2,
            },
            slider: { marginTop: e.spaces.space24 },
            asteriskLeft: { marginLeft: e.spaces.space2 },
            asteriskRight: { marginRight: e.spaces.space2 },
            footnote: { marginTop: e.spaces.space24 },
          }
        }),
        na = n('97Jx'),
        ta = n.n(na),
        la = n('6iuV'),
        ra = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        ia = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return o.createElement(
            F.a,
            { style: oa.container },
            o.createElement(ra.a, { Icon: a, color: 'neutral' }),
            o.createElement(D.b, { size: 'headline2', style: oa.title, weight: 'bold' }, t),
            o.createElement(D.b, { color: 'gray700', style: oa.description }, n),
          )
        },
        oa = k.a.create(function (e) {
          return {
            container: {
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.xSmall,
              width: 224,
              margin: e.spaces.space12,
              padding: e.spaces.space24,
            },
            title: { marginTop: e.spaces.space12 },
            description: { marginTop: e.spaces.space4 },
          }
        }),
        ca = n('sUoZ'),
        sa = n('witV'),
        ua = n('ACHU'),
        da = [
          { Icon: ca.a, title: b.a.d31c5997, description: b.a.hda1e780 },
          { Icon: sa.a, title: b.a.d08d0bb2, description: b.a.cbd8b105 },
          { Icon: ua.a, title: b.a.becb4930, description: b.a.g743ef96 },
        ],
        pa = function () {
          return o.createElement(
            la.a,
            null,
            da.map(function (e) {
              return o.createElement(ia, ta()({}, e, { key: e.title }))
            }),
          )
        },
        ma = b.a.a6777c1b,
        ga = b.a.j5dc36d7,
        fa = b.a.c45b2f06,
        ba = b.a.hb6b432e,
        ya = b.a.cd5cae15,
        ha = b.a.f7239f4c,
        _a = b.a.g8cdf707,
        va = b.a.bff8472e,
        wa = b.a.e533715d,
        Sa = void 0 !== r ? r : (r = n('xd+q')),
        Ea = function (e) {
          var a = e.user,
            n = q()(Sa, a).legacy.followers_count,
            t = o.createElement(E, { leftControlShouldClose: !0 })
          return o.createElement(
            x,
            { appBar: t },
            o.createElement(
              D.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ma,
            ),
            o.createElement(D.b, null, ga),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              fa,
            ),
            o.createElement(D.b, { color: 'gray700' }, ba),
            o.createElement(Ae, { type: Pe.HandCoins }),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ya,
            ),
            o.createElement(pa, null),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ha,
            ),
            o.createElement(ea, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            o.createElement(D.b, { color: 'gray700' }, va),
            o.createElement(H, { color: 'plum500', label: wa, path: '/application/eligibility' }),
          )
        },
        ka = b.a.d0fc4890,
        Fa = b.a.c64384b6,
        xa = b.a.c3d89aca,
        Ca = function () {
          var e = o.createElement(E, { rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { align: 'center', headline: ka, illustration: Pe.OneFinger, subtext: Fa }),
            o.createElement(H, { label: xa, path: '/application/complete_profile' }),
          )
        },
        Oa = (n('2G9S'), n('tVqn'), n('1lx9')),
        Ka = n.n(Oa),
        La = n('csss'),
        Ta = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            l = e.label,
            r = e.path,
            i = Object(u.g)()
          return o.createElement(La.a, {
            description: a,
            disabled: n,
            label: l,
            onPress: function () {
              ;(null != t ? t : i).push(r)
            },
          })
        },
        Ba = (n('uFXj'), b.a.f4f4dd6f),
        Ra = b.a.f448cbcb,
        Pa = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            l = 'required' === n ? Ba : 'optional' === n ? Ra : void 0
          return o.createElement(
            F.a,
            { style: Da.container },
            o.createElement(D.b, { size: 'headline1', weight: 'heavy' }, a),
            l && o.createElement(D.b, { color: t, size: 'subtext2', style: Da.subtext }, l),
          )
        },
        Da = k.a.create(function (e) {
          return {
            container: {
              borderColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomWidth: e.borderWidths.small,
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
            },
            subtext: { marginTop: e.spaces.space2 },
          }
        }),
        Aa = n('Hsf0'),
        ja = n.n(Aa),
        za = 'super_follows_application_draft',
        Ia = 'super_follows_onboarding_draft',
        Ma = function (e) {
          return ja()(void 0 !== i ? i : (i = n('PlkH')), e).__id
        },
        Va = function (e, a) {
          var n = Ma(a),
            t = e.get(n)
          return s()(t, 'viewer must be defined'), t
        },
        Ua = function (e, a) {
          return Va(e, a).getLinkedRecord(za)
        },
        Ha = function (e, a) {
          return Va(e, a).getLinkedRecord(Ia)
        },
        Wa = n('HG4m'),
        qa = n.n(Wa),
        Na = n('Ud88'),
        Ga = n.n(Na)
      function Qa(e, a) {
        var n = Ga()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              qa()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.content_category,
                    l = void 0 === t ? [] : t,
                    r = n.content_category_other,
                    i = void 0 === r ? null : r,
                    o = n.content_creation_platform,
                    c = void 0 === o ? [] : o,
                    s = n.content_creation_platform_other,
                    u = void 0 === s ? null : s,
                    d = n.ethnicity,
                    p = void 0 === d ? [] : d,
                    m = n.gender,
                    g = void 0 === m ? [] : m,
                    f = n.purpose,
                    b = void 0 === f ? null : f,
                    y = Ma(a),
                    h = Va(e, a)
                  if (!Ua(e, a)) {
                    var _ = e.create(''.concat(y, ':').concat(za), 'SuperFollowsApplicationDraft')
                    _.setValue(l, 'content_category'),
                      _.setValue(i, 'content_category_other'),
                      _.setValue(c, 'content_creation_platform'),
                      _.setValue(u, 'content_creation_platform_other'),
                      _.setValue(b, 'purpose'),
                      _.setValue(p, 'ethnicity'),
                      _.setValue(g, 'gender'),
                      h.setLinkedRecord(_, za)
                  }
                })(n, e, a)
              })
          },
          [a, n, e],
        )
      }
      function Ja(e, a) {
        var n = Ga()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              qa()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.creator_intro,
                    l = void 0 === t ? null : t,
                    r = n.description,
                    i = void 0 === r ? null : r,
                    o = n.selected_price,
                    c = void 0 === o ? null : o,
                    s = Ma(a),
                    u = Va(e, a)
                  if (!Ha(e, a)) {
                    var d = e.create(''.concat(s, ':').concat(Ia), 'SuperFollowsOnboardingDraft')
                    d.setValue(l, 'creator_intro'),
                      d.setValue(i, 'description'),
                      d.setValue(c, 'selected_price'),
                      u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                  }
                })(n, e, a)
              })
          },
          [n, a, e],
        )
      }
      function Xa(e, a) {
        var n = Ga()()
        return o.useCallback(
          function (t) {
            s()(e, 'viewerRef must be defined'),
              qa()(n, function (n) {
                !(function (e, a, n, t) {
                  var l = Ua(e, a)
                  s()(l, 'applicationDraft must be defined'), l.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function Za(e, a) {
        var n = Ga()()
        return o.useCallback(
          function (t) {
            s()(e, 'viewerId must be defined'),
              qa()(n, function (n) {
                !(function (e, a, n, t) {
                  var l = Ha(e, a)
                  s()(l, 'onboardingDraft must be defined'), l.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var $a,
        Ya,
        en,
        an,
        nn,
        tn,
        ln,
        rn,
        on,
        cn,
        sn,
        un,
        dn,
        pn,
        mn,
        gn,
        fn,
        bn,
        yn,
        hn,
        _n = n('jV+4'),
        vn = n('Xrkv'),
        wn = n('p+r5'),
        Sn = b.a.e873f0ae,
        En = b.a.f095a24a,
        kn = b.a.i5f7b6b8,
        Fn = b.a.d1f6d336,
        xn = b.a.f7997b16,
        Cn = b.a.c144fa52,
        On = b.a.f1bf337d,
        Kn = b.a.da8ea7da,
        Ln = b.a.d4062c9a,
        Tn = b.a.e963d587,
        Bn = b.a.ede0ac3e,
        Rn = b.a.ffb6cb88,
        Pn = b.a.b2159e8e,
        Dn = b.a.feacb49d,
        An = b.a.je17c987,
        jn = b.a.d94a9a17,
        zn = b.a.a8d0108d,
        In = b.a.gfc80842,
        Mn = void 0 !== $a ? $a : ($a = n('pLb/')),
        Vn = void 0 !== Ya ? Ya : (Ya = n('3qCL')),
        Un = void 0 !== en ? en : (en = n('AyUU')),
        Hn = function (e) {
          var a,
            n,
            t,
            l,
            r,
            i,
            c,
            s = e.user,
            u = e.viewer,
            d = Ga()(),
            p = q()(Mn, s),
            m = null == p ? void 0 : p.legacy.screen_name,
            g = q()(Vn, u),
            f = g.super_follows_application_draft,
            b = (null !== (a = null == f ? void 0 : f.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == f ? void 0 : f.content_category_other) && void 0 !== n ? n : [],
            ),
            y = (null !== (t = null == f ? void 0 : f.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (l = null == f ? void 0 : f.content_creation_platform_other) && void 0 !== l ? l : [],
            ),
            h = null !== (r = null == f ? void 0 : f.purpose) && void 0 !== r ? r : '',
            _ = null !== (i = null == f ? void 0 : f.ethnicity) && void 0 !== i ? i : [],
            v = null !== (c = null == f ? void 0 : f.gender) && void 0 !== c ? c : [],
            w = b.length && y.length && h.trim(),
            S = Xa(g, 'purpose'),
            k = o.createElement(E, { rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: k },
            o.createElement(ze, { headline: Sn, illustration: Pe.Clipboard, subtext: En }),
            o.createElement(Pa, { title: kn }),
            o.createElement(D.b, null, Fn),
            m && o.createElement(_n.a, { screenName: m }),
            o.createElement(Pa, { title: xn, type: 'required' }),
            o.createElement(D.b, { color: 'gray700' }, Cn),
            o.createElement(Ta, {
              description: Object(vn.a)(b, !0),
              label: On,
              path: '/application/submit_categories',
            }),
            o.createElement(Pa, { title: Kn, type: 'required' }),
            o.createElement(D.b, { color: 'gray700' }, Ln),
            o.createElement(Ta, { description: Object(vn.a)(y, !0), label: Tn, path: '/application/submit_platforms' }),
            o.createElement(Pa, { title: Bn, type: 'required' }),
            o.createElement(wn.a, {
              helperText: Pn,
              label: Rn,
              name: 'plannedUsage',
              onChange: function (e) {
                S(e.currentTarget.value)
              },
              value: h,
            }),
            o.createElement(Pa, { title: Dn, type: 'optional' }),
            o.createElement(D.b, { color: 'gray700' }, An),
            o.createElement(Ta, {
              description: Object(vn.a)(_, !0),
              label: jn,
              path: '/application/submit_ethnicities',
            }),
            o.createElement(Ta, { description: Object(vn.a)(v, !0), label: zn, path: '/application/submit_genders' }),
            o.createElement(M, null),
            o.createElement(H, {
              disabled: !w,
              label: In,
              onPress: function () {
                return new Promise(function (e, a) {
                  Ka()(d, {
                    mutation: Un,
                    variables: { category: b, platform: y, purpose: h, ethnicity: _, gender: v },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: '/submitted',
            }),
          )
        },
        Wn = n('fyvP'),
        qn = b.a.f7997b16,
        Nn = b.a.c144fa52,
        Gn = [
          b.a.b1f2e8ce,
          b.a.jfec3aa0,
          b.a.e08a6e6f,
          b.a.b743702c,
          b.a.h2401e36,
          b.a.ed7e6675,
          b.a.fecc3791,
          b.a.d80b0f11,
          b.a.b29a93b1,
          b.a.c5d190c0,
          b.a.i6dfc494,
          b.a.ff2b68ca,
          b.a.e404203c,
          b.a.ab389321,
          b.a.a46fdec4,
          b.a.add55c97,
          b.a.f28d8b06,
          b.a.c8ee31da,
          b.a.e0234d02,
          b.a.h9d38a08,
          b.a.fe6841bd,
          b.a.e031e06a,
          b.a.i5cade16,
          b.a.e084f2af,
          b.a.a9db15b2,
          b.a.d27beb9e,
          b.a.a92db4a9,
          b.a.fc64990d,
          b.a.hb5f1d64,
        ],
        Qn = b.a.c365dcc5,
        Jn = b.a.bd44a8a8,
        Xn = void 0 !== an ? an : (an = n('JB6R')),
        Zn = function (e) {
          var a,
            n,
            t = e.viewer,
            l = q()(Xn, t),
            r =
              null !==
                (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Xa(l, 'content_category'),
            c = o.createElement(E, { title: qn }),
            s = Gn.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Wn.a, {
              description: Nn,
              label: Nn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
            o.createElement(Ta, { helpText: Jn, label: Qn, path: '/application/submit_categories_other' }),
          )
        },
        $n = b.a.f7997b16,
        Yn = b.a.fc00ab5b,
        et = b.a.c249167f,
        at = b.a.b772cd65,
        nt = void 0 !== nn ? nn : (nn = n('xhT1')),
        tt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = q()(nt, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Xa(l, 'content_category_other'),
            c = o.createElement(E, { title: $n })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(wn.a, {
              helperText: et,
              label: Yn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r,
            }),
            o.createElement(_.a, null, at),
          )
        },
        lt = b.a.d94a9a17,
        rt = b.a.a35394b3,
        it = [
          b.a.e375c2df,
          b.a.gf30371a,
          b.a.b3773d47,
          b.a.a45caf17,
          b.a.e5f515b8,
          b.a.e3b35497,
          b.a.i83206dc,
          b.a.a4ee9393,
          b.a.ab09972f,
          b.a.jafe3705,
        ],
        ot = void 0 !== tn ? tn : (tn = n('LiCP')),
        ct = function (e) {
          var a,
            n,
            t = e.viewer,
            l = q()(ot, t),
            r =
              null !== (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Xa(l, 'ethnicity'),
            c = o.createElement(E, { title: lt }),
            s = it.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Wn.a, {
              description: rt,
              label: rt,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
          )
        },
        st = b.a.a8d0108d,
        ut = b.a.a35394b3,
        dt = [
          b.a.de32365f,
          b.a.b6ab31bd,
          b.a.ffc23188,
          b.a.h1cc7091,
          b.a.hca27829,
          b.a.b3af7344,
          b.a.he3f1435,
          b.a.c3c16abb,
        ],
        pt = void 0 !== ln ? ln : (ln = n('K6KJ')),
        mt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = q()(pt, t),
            r =
              null !== (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Xa(l, 'gender'),
            c = o.createElement(E, { title: st }),
            s = dt.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Wn.a, {
              description: ut,
              label: ut,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
          )
        },
        gt = b.a.da8ea7da,
        ft = b.a.d4062c9a,
        bt = [b.a.a3021317, b.a.eb4a600d, b.a.d4d74bb3, b.a.fc738909, b.a.d8552c1a, b.a.ca07aa46],
        yt = b.a.c365dcc5,
        ht = b.a.bd44a8a8,
        _t = void 0 !== rn ? rn : (rn = n('xnrs')),
        vt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = q()(_t, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Xa(l, 'content_creation_platform'),
            c = o.createElement(E, { title: gt }),
            s = bt.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Wn.a, {
              description: ft,
              label: ft,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
            o.createElement(Ta, { helpText: ht, label: yt, path: '/application/submit_platforms_other' }),
          )
        },
        wt = b.a.da8ea7da,
        St = b.a.d7081f91,
        Et = b.a.j349548f,
        kt = b.a.b772cd65,
        Ft = void 0 !== on ? on : (on = n('+OUG')),
        xt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = q()(Ft, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Xa(l, 'content_creation_platform_other'),
            c = o.createElement(E, { title: wt })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(wn.a, {
              helperText: Et,
              label: St,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r,
            }),
            o.createElement(_.a, null, kt),
          )
        },
        Ct = void 0 !== cn ? cn : (cn = n('o/nB')),
        Ot = void 0 !== sn ? sn : (sn = n('lZLw')),
        Kt = function (e) {
          var a = e.user,
            n = e.viewer,
            t = q()(Ct, a),
            l = q()(Ot, n)
          return (
            Qa(l),
            o.createElement(
              u.e,
              null,
              o.createElement(u.c, { exact: !0, path: '/application/eligibility' }, o.createElement(Ze, { user: t })),
              o.createElement(u.c, { exact: !0, path: '/application/one_more_thing' }, o.createElement(Ca, null)),
              o.createElement(u.c, { exact: !0, path: '/application/complete_profile' }, o.createElement(L, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit' },
                o.createElement(Hn, { user: t, viewer: l }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories' },
                o.createElement(Zn, { viewer: l }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories_other' },
                o.createElement(tt, { viewer: l }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms' },
                o.createElement(vt, { viewer: l }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms_other' },
                o.createElement(xt, { viewer: l }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_ethnicities' },
                o.createElement(ct, { viewer: l }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_genders' },
                o.createElement(mt, { viewer: l }),
              ),
              o.createElement(u.c, { path: '/application' }, o.createElement(Ea, { user: t })),
            )
          )
        },
        Lt = n('m3Bd'),
        Tt = n.n(Lt),
        Bt = n('fs1G'),
        Rt = n('9VLy'),
        Pt = n('0yYu'),
        Dt = n('4zmP'),
        At = b.a.a6777c1b,
        jt = b.a.b4a93a91,
        zt = b.a.c0348963,
        It = b.a.d08d0bb2,
        Mt = b.a.ea4c3496,
        Vt = b.a.ea92cfe3,
        Ut = b.a.ia9c37c4,
        Ht = b.a.hc2c5a8b,
        Wt = b.a.be54a312,
        qt = b.a.bc6d85b3,
        Nt = b.a.b7bc895e,
        Gt = b.a.f3ce76c0,
        Qt = b.a.e9e3b3f7,
        Jt = b.a.a79bf10a,
        Xt = b.a.a3932653,
        Zt = b.a.c9f7c195,
        $t = b.a.g5925628,
        Yt = b.a.jfb2bf30,
        el = b.a.a962b5d8,
        al = b.a.dba12b51,
        nl = void 0 !== un ? un : (un = n('EM6u')),
        tl = void 0 !== dn ? dn : (dn = n('oNwH')),
        ll = void 0 !== pn ? pn : (pn = n('qOMr')),
        rl = function (e) {
          var a,
            n,
            t,
            l = e.priceOfferings,
            r = e.user,
            i = e.viewer,
            c = q()(nl, l),
            s = (c.$refType, Tt()(c, ['$refType'])),
            u = q()(tl, r),
            d = q()(ll, i).super_follows_onboarding_draft,
            p = null !== (a = null == d ? void 0 : d.creator_intro) && void 0 !== a ? a : '',
            m = null !== (n = null == d ? void 0 : d.description) && void 0 !== n ? n : '',
            g = null !== (t = null == d ? void 0 : d.selected_price) && void 0 !== t ? t : 'offer2',
            f = o.createElement(E, { leftControlShouldClose: !0, rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: f },
            o.createElement(
              D.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              At,
            ),
            o.createElement(Pt.a, null),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              jt,
            ),
            o.createElement(
              D.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              zt,
            ),
            o.createElement(D.b, { color: 'gray700' }, p),
            o.createElement(Rt.a, { user: u }),
            o.createElement(
              D.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              It,
            ),
            o.createElement(D.b, { color: 'gray700' }, m),
            o.createElement(Rt.a, { user: u }),
            o.createElement(
              D.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Mt,
            ),
            o.createElement(D.b, { color: 'gray700' }, Vt),
            o.createElement(Pt.a, null),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ut,
            ),
            o.createElement(D.b, { color: 'gray700' }, Ht),
            o.createElement(D.b, { size: 'headline2', weight: 'heavy' }, Wt({ price: s[g] })),
            o.createElement(Dt.a, { headline: qt, text: Nt }),
            o.createElement(Pt.a, null),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Gt,
            ),
            o.createElement(D.b, { color: 'gray700' }, Qt),
            o.createElement(_.a, { link: B, type: 'brandOutlined' }, Zt),
            o.createElement(
              _.a,
              { link: 'https://help.twitter.com/forms/paid-features/superfollows', type: 'brandOutlined' },
              $t,
            ),
            o.createElement(Pt.a, null),
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Jt,
            ),
            o.createElement(D.b, { color: 'gray700' }, Xt),
            o.createElement(_.a, { link: 'https://t.co/jPqvg6tFrDJG', type: 'brandFilled' }, Yt),
            o.createElement(_.a, { link: 'https://t.co/RL2NN3bEVkes', type: 'brandOutlined' }, el),
            o.createElement(Pt.a, null),
            o.createElement(_.a, { onPress: Bt.a, type: 'destructiveText' }, al),
          )
        },
        il = void 0 !== mn ? mn : (mn = n('MXCg')),
        ol = void 0 !== gn ? gn : (gn = n('mEFY')),
        cl = void 0 !== fn ? fn : (fn = n('d8Sa')),
        sl = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            l = e.user,
            r = e.viewer,
            i = q()(il, t),
            c = q()(ol, l),
            s = q()(cl, r),
            d = null !== (a = c.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ja(s, {
              creator_intro: d.creator_intro,
              description: U()(m, 1)[0].description,
              selected_price: (null !== (n = c.super_follow_creator_price_metadata) && void 0 !== n ? n : {})
                .selected_price,
            }),
            o.createElement(
              u.e,
              null,
              o.createElement(
                u.c,
                { path: '/management' },
                o.createElement(rl, { priceOfferings: i, user: c, viewer: s }),
              ),
            )
          )
        },
        ul = (n('5BYb'), b.a.b422cb62),
        dl = b.a.f08705e0,
        pl = b.a.fc5bfd95,
        ml = b.a.e2cd700f,
        gl = b.a.fbfd7397,
        fl = b.a.c3d89aca,
        bl = [
          {
            label: b.a.d8637c96,
            test: function (e) {
              var a,
                n = null !== (a = e.viewer.super_follows_onboarding_draft) && void 0 !== a ? a : {},
                t = n.creator_intro,
                l = n.description
              return !!t && !!l
            },
          },
          {
            label: b.a.b92892dc,
            test: function (e) {
              var a
              return !(null === (a = e.viewer.super_follows_onboarding_draft) || void 0 === a || !a.selected_price)
            },
          },
          {
            label: b.a.b123a502,
            test: function (e) {
              return 'Completed' === e.user.stripe_account_status
            },
          },
        ],
        yl = void 0 !== bn ? bn : (bn = n('wQp3')),
        hl = void 0 !== yn ? yn : (yn = n('tfBr')),
        _l = k.a.create(function (e) {
          return {
            button: {
              alignSelf: 'center',
              marginTop: e.spaces.space48,
              marginHorizontal: e.spaces.space8,
              maxWidth: '360px',
              width: '100%',
            },
          }
        }),
        vl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = q()(yl, a),
            l = q()(hl, n),
            r = bl.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: t, viewer: l }) }
            }),
            i = r.some(function (e) {
              return e.checked
            }),
            c = o.createElement(E, { leftControlShouldClose: !0, rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ze, { headline: i ? ml : ul, illustration: i ? Pe.Puzzle : Pe.Cat, subtext: i ? gl : dl }),
            o.createElement(z, { items: r }),
            o.createElement(H, {
              label: i ? fl : pl,
              path: '/onboarding/perks_intro',
              size: 'xLarge',
              style: _l.button,
              type: 'brandFilled',
            }),
          )
        },
        wl = n('efqG'),
        Sl = n('5emT'),
        El = b.a.ab793af9,
        kl = b.a.fb278c81,
        Fl = b.a.e6b60e94,
        xl = b.a.j24c37b2,
        Cl = k.a.create(function (e) {
          return {
            root: { margin: e.spaces.space32 },
            triggerLabel: { marginRight: e.spaces.space8 },
            headlineText: { marginVertical: e.spaces.space16 },
            triggerIcon: { color: e.colors.gray700 },
            paragraphText: { marginBottom: e.spaces.space20 },
            triggerContentWrapper: { alignSelf: 'center', flexDirection: 'row' },
          }
        }),
        Ol = function () {
          return o.createElement(
            wl.a,
            {
              renderContent: function (e) {
                return o.createElement(
                  F.a,
                  { style: Cl.root },
                  o.createElement(ra.a, { Icon: Sl.a, color: 'neutral', size: 'xxxLarge' }),
                  o.createElement(D.b, { size: 'title3', style: Cl.headlineText, weight: 'heavy' }, kl),
                  o.createElement(D.b, { color: 'gray700', style: Cl.paragraphText }, Fl),
                  o.createElement(_.a, { onClick: e, size: 'xLarge', type: 'primaryFilled' }, xl),
                )
              },
            },
            o.createElement(
              F.a,
              { accessibilityRole: 'button', style: Cl.triggerContentWrapper },
              o.createElement(D.b, { color: 'gray700', style: Cl.triggerLabel }, El),
              o.createElement(R.a, { style: Cl.triggerIcon }),
            ),
          )
        },
        Kl = b.a.cd5cae15,
        Ll = b.a.b83662ac,
        Tl = b.a.cda6bb6d,
        Bl = b.a.a15b98ec,
        Rl = b.a.c1df579e,
        Pl = function () {
          var e = o.createElement(E, { rightControl: o.createElement(P, null), subtitle: Ll, title: Kl })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: Tl, subtext: Bl }),
            o.createElement(Ol, null),
            o.createElement(H, { label: Rl, path: '/onboarding/perks_confirm' }),
          )
        },
        Dl = b.a.d94d5707,
        Al = b.a.iba08a94,
        jl = b.a.aa6db82c,
        zl = b.a.c1df579e,
        Il = function () {
          var e = o.createElement(E, { rightControl: o.createElement(P, null), title: Dl })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: Al, subtext: jl }),
            o.createElement(Ol, null),
            o.createElement(H, { label: zl, path: '/onboarding/pricing' }),
          )
        },
        Ml = b.a.cd5cae15,
        Vl = b.a.d80af370,
        Ul = b.a.gf32cca1,
        Hl = b.a.j8ba99b3,
        Wl = b.a.j679dcda,
        ql = b.a.a329ce87,
        Nl = b.a.be76dc33,
        Gl = b.a.abd845fd,
        Ql = b.a.c1df579e,
        Jl = void 0 !== hn ? hn : (hn = n('tJ4s')),
        Xl = function (e) {
          var a,
            n,
            t = e.viewer,
            l = q()(Jl, t),
            r =
              null !== (a = null === (n = l.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== a
                ? a
                : '',
            i = Za(l, 'description'),
            c = o.createElement(E, { rightControl: o.createElement(P, null), subtitle: Vl, title: Ml })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ze, { headline: Ul, subtext: Hl }),
            o.createElement(H, { label: Wl, path: '/onboarding/perks_description_examples', type: 'primaryText' }),
            o.createElement(Ol, null),
            o.createElement(wn.a, {
              label: ql,
              name: 'description',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r || '',
            }),
            o.createElement(_.a, { type: 'primaryFilled' }, Nl),
            o.createElement(_.a, { type: 'primaryOutlined' }, Gl),
            o.createElement(H, { disabled: !r, label: Ql, path: '/onboarding/perks_badges' }),
          )
        },
        Zl = b.a.ebfb897c,
        $l = b.a.dc4feb19,
        Yl = b.a.c183d271,
        er = b.a.ic130fd5,
        ar = b.a.dd913e24,
        nr = b.a.h580543e,
        tr = function () {
          var e = o.createElement(E, { title: Zl })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(
              D.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              $l,
            ),
            o.createElement(D.b, { color: 'gray700' }, Yl),
            o.createElement(D.b, null, er),
            o.createElement(D.b, null, ar),
            o.createElement(D.b, null, nr),
          )
        },
        lr = (n('ho0z'), n('cHvH'))
      var rr,
        ir,
        or = k.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.gray50,
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.medium,
              marginVertical: e.spaces.space24,
            },
            browserBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              borderTopLeftRadius: e.borderRadii.medium,
              borderTopRightRadius: e.borderRadii.medium,
              borderBottomWidth: e.spaces.space1,
              borderBottomColor: e.colors.gray200,
              flexDirection: 'row',
              height: e.spaces.space40,
              justifyContent: 'space-between',
              width: '100%',
            },
            browserBarButton: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space12,
              width: e.spaces.space12,
            },
            browserBarButtonMarginLeft: { marginLeft: e.spaces.space8 },
            browserBarControls: {
              alignItems: 'center',
              flexDirection: 'row',
              height: e.spaces.space40,
              justifyContent: 'center',
              width: '20%',
            },
            browserBarUrlInput: {
              backgroundColor: e.colors.gray50,
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space28,
              width: '95%',
            },
            browserBarUrlInputArea: { height: e.spaces.space40, justifyContent: 'center', width: '80%' },
            content: {
              borderBottomLeftRadius: e.borderRadii.medium,
              borderBottomRightRadius: e.borderRadii.medium,
              flex: 1,
              paddingHorizontal: e.spaces.space12,
              paddingVertical: e.spaces.space16,
            },
            contentWideMargins: { paddingHorizontal: e.spaces.space28 },
            mockSubscribeModal: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.large,
              flex: 1,
              overflow: 'hidden',
              padding: e.spaces.space32,
            },
          }
        }),
        cr = function (e) {
          var a = e.children
          return o.createElement(lr.a, null, function (e) {
            var n = e.windowWidth > k.a.theme.breakpoints.small
            return o.createElement(
              F.a,
              { style: or.root },
              o.createElement(
                F.a,
                { style: or.browserBar },
                o.createElement(
                  F.a,
                  { style: or.browserBarControls },
                  o.createElement(F.a, { style: or.browserBarButton }),
                  o.createElement(F.a, { style: [or.browserBarButton, or.browserBarButtonMarginLeft] }),
                  o.createElement(F.a, { style: [or.browserBarButton, or.browserBarButtonMarginLeft] }),
                ),
                o.createElement(
                  F.a,
                  { style: or.browserBarUrlInputArea },
                  o.createElement(F.a, { style: or.browserBarUrlInput }),
                ),
              ),
              o.createElement(F.a, { style: [or.content, n && or.contentWideMargins] }, a),
            )
          })
        },
        sr = n('FEMQ'),
        ur = n('ID86'),
        dr = b.a.cd5cae15,
        pr = b.a.ef08a890,
        mr = b.a.j3253319,
        gr = b.a.h1e80993,
        fr = b.a.j679dcda,
        br = b.a.b16680ff,
        yr = b.a.abd845fd,
        hr = b.a.c1df579e,
        _r = void 0 !== rr ? rr : (rr = n('02qo')),
        vr = void 0 !== ir ? ir : (ir = n('TXsE')),
        wr = k.a.create(function (e) {
          return {
            button: { cursor: 'pointer', flex: 1 },
            buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 },
            examplesLink: { alignSelf: 'center', marginBottom: e.spaces.space12, width: 200 },
            mockSubscribeModal: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.large,
              flex: 1,
              minHeight: 400,
              overflow: 'hidden',
              padding: e.spaces.space32,
            },
          }
        }),
        Sr = function (e) {
          var a,
            n,
            t = e.user,
            l = e.viewer,
            r = o.useRef(null),
            i = q()(_r, t),
            c = q()(vr, l),
            u = i.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m =
              null !==
                (a = null === (n = c.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : '',
            g = Za(c, 'creator_intro'),
            f = o.createElement(E, { subtitle: pr, title: dr })
          s()('string' == typeof d, 'name must be defined'), s()('string' == typeof p, 'image must be defined')
          var b = !!m
          return o.createElement(
            x,
            { appBar: f },
            o.createElement(ze, { headline: mr, subtext: gr }),
            o.createElement(H, {
              label: fr,
              path: '/onboarding/perks_intro_examples',
              style: wr.examplesLink,
              type: 'primaryText',
            }),
            o.createElement(Ol, null),
            o.createElement(
              cr,
              null,
              o.createElement(
                F.a,
                { style: wr.mockSubscribeModal },
                o.createElement(ur.a, null),
                o.createElement(sr.a, {
                  creatorIntroInputRef: r,
                  creatorIntroInputValue: m,
                  image: p,
                  name: d,
                  onInputChange: function (e) {
                    g(e.currentTarget.value)
                  },
                  withInput: !0,
                }),
              ),
            ),
            o.createElement(
              F.a,
              { style: wr.buttonsWrapper },
              o.createElement(
                _.a,
                {
                  onClick: function () {
                    var e
                    null == r || null === (e = r.current) || void 0 === e || e.focus()
                  },
                  size: 'large',
                  style: wr.button,
                  type: 'primaryOutlined',
                },
                b ? yr : br,
              ),
              o.createElement(H, { disabled: !b, label: hr, path: '/onboarding/perks_description', size: 'large' }),
            ),
          )
        },
        Er = n('JWc1'),
        kr = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        Fr = n.n(kr),
        xr = n('Lsrn'),
        Cr = n('k/Ka')
      function Or(e, a) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, t)
        }
        return n
      }
      function Kr(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? Or(Object(n), !0).forEach(function (a) {
                Fr()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Or(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var Lr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Cr.a)(
          'svg',
          Kr(
            Kr({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [xr.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M21.43 11.277c0 4.335-4.223 7.85-9.43 7.85-.66 0-1.3-.057-1.92-.164-.537-.092-1.092-.008-1.554.28-.003 0-.008.004-.01.005-.595.37-1.767.953-1.767.953-.428.174-.715.15-.867.11-.066-.02-.092-.1-.05-.157l1.11-1.4c.07-.096.1-.208.106-.327.007-.283-.156-.544-.4-.685-2.465-1.416-4.08-3.783-4.08-6.463 0-4.335 4.222-7.85 9.43-7.85 5.207 0 9.43 3.515 9.43 7.85z',
            }),
          ),
        )
      }
      Lr.metadata = { width: 24, height: 24 }
      var Tr,
        Br,
        Rr,
        Pr,
        Dr,
        Ar,
        jr,
        zr,
        Ir = Lr,
        Mr = n('lUZE'),
        Vr = b.a.ebfb897c,
        Ur = b.a.dc4feb19,
        Hr = b.a.a0bb2076,
        Wr = b.a.ace46d40,
        qr = b.a.h2c4511f,
        Nr = b.a.hbe4f99e,
        Gr = k.a.create(function (e) {
          return {
            exampleIntros: { marginLeft: e.spaces.space36 },
            headlineWrapper: { flexDirection: 'row', marginBottom: e.spaces.space12 },
            headline: { marginLeft: e.spaces.space8 },
            subtext: { marginLeft: e.spaces.space36 },
          }
        }),
        Qr = function () {
          var e = o.createElement(E, { title: Vr })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(
              F.a,
              { style: Gr.headlineWrapper },
              o.createElement(ra.a, { Icon: Ir, color: 'neutral', size: 'large' }),
              o.createElement(
                D.b,
                {
                  accessibilityLevel: 2,
                  accessibilityRole: 'heading',
                  size: 'title4',
                  style: Gr.headline,
                  weight: 'heavy',
                },
                Ur,
              ),
            ),
            o.createElement(D.b, { color: 'gray700', style: Gr.subtext }, Hr),
            o.createElement(
              F.a,
              { style: Gr.exampleIntros },
              o.createElement(Er.a, { Icon: Mr.a, creatorIntro: Wr }),
              o.createElement(Er.a, { Icon: Mr.a, creatorIntro: qr }),
              o.createElement(Er.a, { Icon: Mr.a, creatorIntro: Nr }),
            ),
          )
        },
        Jr = (n('7xRU'), n('hznd')),
        Xr = b.a.ea8a3d2d,
        Zr = b.a.ic9124bf,
        $r = b.a.g5923869,
        Yr = {
          offer1: [b.a.f025ab39, b.a.c5602dfd],
          offer2: [b.a.ib075804, b.a.j8a72f06],
          offer3: [b.a.c246656e, b.a.a92ab16c],
        },
        ei = b.a.c1df579e,
        ai = void 0 !== Tr ? Tr : (Tr = n('5jO1')),
        ni = void 0 !== Br ? Br : (Br = n('mKqc')),
        ti = void 0 !== Rr ? Rr : (Rr = n('p785')),
        li = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            l = e.viewer,
            r = Ga()(),
            i = q()(ai, t),
            c = (i.$refType, Tt()(i, ['$refType'])),
            s = q()(ni, l),
            u = s.super_follows_onboarding_draft,
            d = null !== (a = null == u ? void 0 : u.creator_intro) && void 0 !== a ? a : '',
            p = null !== (n = null == u ? void 0 : u.description) && void 0 !== n ? n : '',
            m = null == u ? void 0 : u.selected_price,
            g = Za(s, 'selected_price'),
            f = o.createElement(E, { rightControl: o.createElement(P, null), title: Xr }),
            y = o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              o.createElement(D.b, { link: B }, b.a.c336b06a),
            ),
            h = Object.keys(c).map(function (e) {
              return { label: $r({ price: c[e] }), value: e, helpText: Yr[e].join(' ') }
            })
          return o.createElement(
            x,
            { appBar: f },
            o.createElement(ze, { headline: Zr, subtext: y }),
            o.createElement(Jr.a, {
              label: Zr,
              name: 'selectedPrice',
              onChange: function (e, a) {
                g(a)
              },
              options: h,
              value: m,
            }),
            o.createElement(H, {
              disabled: !m,
              label: ei,
              onPress: function () {
                return new Promise(function (e, a) {
                  if (!m) return a(new Error('No price selected'))
                  Ka()(r, {
                    mutation: ti,
                    variables: {
                      creator_intro: d,
                      benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: p }],
                      selected_price: m,
                    },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: '/onboarding/stripe_setup',
            }),
          )
        },
        ri = b.a.e20f6661,
        ii = b.a.a9ee1ecc,
        oi = b.a.j24c37b2,
        ci = function () {
          var e = m(),
            a = o.createElement(E, { leftControlShouldClose: !0, rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: a },
            o.createElement(ze, { headline: ri, illustration: Pe.Thumbsup, subtext: ii }),
            o.createElement(H, { history: e, label: oi, path: '/settings/monetization' }),
          )
        },
        si = b.a.e2cd700f,
        ui = b.a.d6bfb60c,
        di = b.a.b9cbb370,
        pi = function () {
          var e = o.createElement(E, { rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: si, illustration: Pe.Puzzle, subtext: ui }),
            o.createElement(H, { label: di, path: '/onboarding/stripe_setup' }),
          )
        },
        mi = n('8jkQ'),
        gi = n('9SqB'),
        fi = n.n(gi),
        bi = b.a.ja884230,
        yi = b.a.af1b808d,
        hi = b.a.fe339750,
        _i = b.a.j912510a,
        vi = void 0 !== Pr ? Pr : (Pr = n('xHLM')),
        wi = function () {
          var e = fi()(vi),
            a = U()(e, 2),
            n = a[0],
            t = a[1],
            l = function () {
              n({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && mi.b.navigateTo(n)
                },
              })
            },
            r = o.createElement(E, { rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: r },
            o.createElement(ze, { headline: bi, illustration: Pe.CoinStairs, subtext: yi }),
            o.createElement(_.a, { disabled: t, onPress: l, type: 'primaryFilled' }, hi),
            o.createElement(_.a, { disabled: t, onPress: l, type: 'primaryOutlined' }, _i),
          )
        },
        Si = void 0 !== Dr ? Dr : (Dr = n('UNVS')),
        Ei = void 0 !== Ar ? Ar : (Ar = n('6byF')),
        ki = void 0 !== jr ? jr : (jr = n('dNhZ')),
        Fi = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            l = e.user,
            r = e.viewer,
            i = q()(Si, t),
            c = q()(Ei, l),
            s = q()(ki, r),
            d = null !== (a = c.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ja(s, {
              creator_intro: d.creator_intro,
              description: U()(m, 1)[0].description,
              selected_price: (null !== (n = c.super_follow_creator_price_metadata) && void 0 !== n ? n : {})
                .selected_price,
            }),
            o.createElement(
              u.e,
              null,
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_intro' },
                o.createElement(Sr, { user: c, viewer: s }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_intro_examples' }, o.createElement(Qr, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description' },
                o.createElement(Xl, { viewer: s }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description_examples' },
                o.createElement(tr, null),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_badges' }, o.createElement(Pl, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_confirm' }, o.createElement(Il, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/pricing' },
                o.createElement(li, { priceOfferings: i, viewer: s }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_setup' }, o.createElement(wi, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_incomplete' }, o.createElement(pi, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_completed' }, o.createElement(ci, null)),
              o.createElement(u.c, { path: '/onboarding' }, o.createElement(vl, { user: c, viewer: s })),
            )
          )
        },
        xi = b.a.aa7e35ed,
        Ci = b.a.f67e69bf,
        Oi = function () {
          var e = o.createElement(E, { leftControlShouldClose: !0, rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: xi, illustration: Pe.Uturn, subtext: Ci }),
          )
        },
        Ki = b.a.d3d6c52c,
        Li = b.a.c53e9129,
        Ti = function () {
          var e = o.createElement(E, { leftControlShouldClose: !0, rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: Ki, illustration: Pe.PaperAirplane, subtext: Li }),
          )
        },
        Bi = b.a.j274e6aa,
        Ri = b.a.d7f65127,
        Pi = function () {
          var e = o.createElement(E, { leftControlShouldClose: !0, rightControl: o.createElement(P, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: Bi, illustration: Pe.Bench, subtext: Ri }),
          )
        },
        Di = n('n0Rl'),
        Ai = n('q9Zt'),
        ji = b.a.hae1c933,
        zi = void 0 !== zr ? zr : (zr = n('G8I5')),
        Ii = Object(Di.b)(zi, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        Mi = k.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return o.createElement(Ii, {
          render: function (e) {
            var a,
              n,
              t = e.data,
              l = e.error,
              r = e.fetchStatus,
              i = e.retry,
              c = null == t ? void 0 : t.super_follows_price_offerings,
              s =
                null == t || null === (a = t.viewer) || void 0 === a || null === (n = a.user_results) || void 0 === n
                  ? void 0
                  : n.result,
              d = null == t ? void 0 : t.viewer,
              m = (function (e) {
                var a = e.isActiveCreator,
                  n = e.stripeAccountStatus,
                  t = e.superFollowsApplicationStatus
                if (a) return '/management'
                switch (t) {
                  case 'Submitted':
                    return '/submitted'
                  case 'Waitlisted':
                    return '/waitlisted'
                  case 'Rejected':
                    return '/rejected'
                  case 'Approved':
                    switch (n) {
                      case 'Incomplete':
                        return '/onboarding/stripe_incomplete'
                      case 'Completed':
                        return '/onboarding/stripe_completed'
                      default:
                        return '/onboarding'
                    }
                  default:
                    return '/application'
                }
              })({
                isActiveCreator: !l && !(null == d || !d.is_active_creator),
                superFollowsApplicationStatus:
                  (!l && (null == s ? void 0 : s.super_follows_application_status)) || 'NotStarted',
                stripeAccountStatus: (!l && (null == s ? void 0 : s.stripe_account_status)) || 'NotStarted',
              })
            return o.createElement(g.a, {
              fetchStatus: Object(h.b)(r, null != c && 'User' === (null == s ? void 0 : s.__typename) && null != d),
              onRequestRetry: i,
              render: function () {
                return null == c || 'User' !== (null == s ? void 0 : s.__typename) || null == d
                  ? null
                  : o.createElement(
                      y.a,
                      null,
                      o.createElement(
                        p,
                        null,
                        o.createElement(
                          u.a,
                          { initialEntries: [m] },
                          o.createElement(
                            u.e,
                            null,
                            o.createElement(u.c, { path: '/application' }, o.createElement(Kt, { user: s, viewer: d })),
                            o.createElement(u.c, { exact: !0, path: '/submitted' }, o.createElement(Ti, null)),
                            o.createElement(u.c, { exact: !0, path: '/waitlisted' }, o.createElement(Pi, null)),
                            o.createElement(u.c, { exact: !0, path: '/rejected' }, o.createElement(Oi, null)),
                            o.createElement(
                              u.c,
                              { path: '/onboarding' },
                              o.createElement(Fi, { priceOfferings: c, user: s, viewer: d }),
                            ),
                            o.createElement(
                              u.c,
                              { path: '/management' },
                              o.createElement(sl, { priceOfferings: c, user: s, viewer: d }),
                            ),
                          ),
                        ),
                      ),
                    )
              },
              renderFailure: function () {
                return o.createElement(Ai.a, { onRetry: i, style: Mi.error, title: ji })
              },
              retryable: !1,
            })
          },
          variables: {},
        })
      }
    },
    'o/nB': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSwitch_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationMarketingScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationEligibilityScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '6d66e65030535b15a01bfd34ce1eba73',
      }
      a.default = t
    },
    oNwH: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsSignature_user' }],
        type: 'User',
        abstractKey: null,
        hash: '82ec659bf761210bd7c8ebe5f01409ac',
      }
      a.default = t
    },
    p785: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l,
        r = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
              { defaultValue: null, kind: 'LocalArgument', name: 'selected_price' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingPricingScreenMutation',
            selections: (l = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'benefits_data', variableName: 'benefits_data' },
                  { kind: 'Variable', name: 'creator_intro', variableName: 'creator_intro' },
                ],
                kind: 'ScalarField',
                name: 'set_creator_benefits_put',
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  { kind: 'Literal', name: 's', value: 21 },
                  { kind: 'Variable', name: 'selected_price', variableName: 'selected_price' },
                ],
                kind: 'ScalarField',
                name: 'set_creator_price_metadata',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'SuperFollowsOnboardingPricingScreenMutation',
            selections: l,
          },
          params: {
            id: 'o3ZwgYsS8tpbI8ct4e27ng',
            metadata: {},
            name: 'SuperFollowsOnboardingPricingScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(r.hash = '6760a9c38cb958dabf2178d9c4d7df42'), (a.default = r)
    },
    'pLb/': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitScreen_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '891cd330d47f73923bd3ce7dad37df31',
      }
      a.default = t
    },
    qOMr: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_viewer',
        selections: [
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'fb25c5185caf6f59e863f1c2f8071cf8',
      }
      a.default = t
    },
    tJ4s: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'a4bbf2e8cecc7660805934bcbd994224',
      }
      a.default = t
    },
    tfBr: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingGetStartedScreen_viewer',
        selections: [
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'edc848fe657e8dd7b1c0f47d400a82d7',
      }
      a.default = t
    },
    wQp3: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingGetStartedScreen_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'stripe_account_status', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '89d53e7f51d77e01d95fe5e756509ce9',
      }
      a.default = t
    },
    xHLM: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: (t = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 21 }],
                kind: 'ScalarField',
                name: 'stripe_account_create_onboarding_url',
                storageKey: 'stripe_account_create_onboarding_url(s:21)',
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: t,
          },
          params: {
            id: 'nRB8N1tre2yDNBjO6rLziw',
            metadata: {},
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = '8e42f33fe72435124b83c69d58590c08'), (a.default = l)
    },
    'xd+q': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationMarketingScreen_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'followers_count', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f9d66c36366fcbae31378fec6edbd005',
      }
      a.default = t
    },
    xhT1: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitCategoriesOtherScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category_other', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '3abdf03b827490342dcb1cd466cb6120',
      }
      a.default = t
    },
    xnrs: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitPlatformsScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_creation_platform', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'b499e804fb129a1620e7d1f71e30ebc8',
      }
      a.default = t
    },
  },
])
//# sourceMappingURL=WIPED
