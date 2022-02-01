;(window.webpackJsonp = window.webpackJsonp || []).push([
  [231],
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
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'b85a166acfc5fe2160e97c85d8fb40b2',
      }
      a.default = t
    },
    '0ULw': function (e, a, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var t = n('KEM+'),
        l = n.n(t),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        s = n('k/Ka')
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
      function u(e) {
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (a.a = d)
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '381382024db1c0f7658c552063d30331',
      }
      a.default = t
    },
    '7ESn': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingConfirmScreen_viewer',
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
        hash: '12548aff81a962bdc47dabcad89df823',
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
        s = l.useEffect,
        c = l.useRef,
        u = l.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = r(),
          l = d(),
          p = c(n),
          m = c(e),
          g = c(new Set()),
          f = o(!1),
          b = f[0],
          y = f[1],
          _ = u(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), l.current && y(g.current.size > 0))
            },
            [n, l, e],
          )
        s(
          function () {
            ;(p.current === n && m.current === e) ||
              ((g.current = new Set()), l.current && y(!1), (p.current = n), (m.current = e))
          },
          [n, l, e],
        )
        var h = u(
          function (r) {
            var i = a(
              n,
              (0, t.default)(
                (0, t.default)({}, r),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, a) {
                    _(i), r.onCompleted && r.onCompleted(e, a)
                  },
                  onError: function (e) {
                    _(i), r.onError && r.onError(e)
                  },
                  onUnsubscribe: function () {
                    _(i), r.onUnsubscribe && r.onUnsubscribe()
                  },
                },
              ),
            )
            return g.current.add(i), l.current && y(!0), i
          },
          [_, a, n, l, e],
        )
        return [h, b]
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
        s,
        c = {
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
            selections: (s = [
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
            selections: s,
          },
          params: {
            id: 'xAwoXB0xodQu-Yma6pR2Lw',
            metadata: {},
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(c.hash = '38de90823c3fb6770d441acfd7d6c0d5'), (a.default = c)
    },
    'By/j': function (e, a, n) {
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
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
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
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
            selections: l,
          },
          params: {
            id: '_97mdj3S3wU106zmC8Wy3A',
            metadata: {},
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(r.hash = 'c1a6db8f58f9e0b096f1a134ad2ef927'), (a.default = r)
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
        s,
        c,
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
                                  (s = {
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
                                      (c = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'description',
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'benefit_type',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
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
                        selections: [s, c, u],
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
            id: 'kD9VNg4s9q9dueKKS3tMvw',
            metadata: {},
            name: 'SuperFollowsSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = '3da900384593caeb85c2db0e941846eb'), (a.default = d)
    },
    H1we: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitEthnicitiesScreen_viewer',
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
        hash: '12221550738bb9a9e2d43bc4ad78d9c0',
      }
      a.default = t
    },
    IeZm: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingConfirmScreen_priceOfferings',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: '02dfb83cd097503a0c0b2c04ef04119e',
      }
      a.default = t
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
    JK1g: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmCore_user',
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
        hash: '499e109ac3eb7bd39b038af5c857b769',
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
    MvEh: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksConfirmScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: '1c1ba7983b192cc8ca76b8ac6fd43359',
      }
      a.default = t
    },
    PlkH: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = { kind: 'InlineDataFragment', name: 'clientOnlyState_viewer', hash: '339dd7e582bd34b9ab5ab7f2f43bfa62' }
      a.default = t
    },
    RL7R: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksIntroScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroCore_viewer' },
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
        hash: '1d69189e8c3d99aac778492bd1872891',
      }
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
    Rthh: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'f993d824fbb9ce099c3907de36fa465b',
      }
      a.default = t
    },
    'S3B+': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksIntroCore_user',
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
        hash: '38f4042bc48fa6b87f99997561150ea1',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroCore_viewer' },
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
        hash: 'a66954b0cb409dd560f93fbca0ec69b3',
      }
      a.default = t
    },
    U5ka: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksConfirmScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmCore_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '9c8fa7b287a44e38f10bdedb3a0183bf',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingConfirmScreen_priceOfferings' },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'abcc7b8bb494dcd3849da219de5ae4ad',
      }
      a.default = t
    },
    VG5i: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitGendersScreen_viewer',
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
        hash: '852624662798db5d799e10a2aaf34c6b',
      }
      a.default = t
    },
    'VzX/': function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l,
        r = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
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
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
            selections: l,
          },
          params: {
            id: '8qvi0MQ7inSOKFRwbQIfXg',
            metadata: {},
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(r.hash = '5f9c7dfac83002ea4ec87405a6e13b8f'), (a.default = r)
    },
    aREQ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmCore_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: 'ec6660ce4ea3a4973e56e03329dbb2b2',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '8ed8a4341194aa4c355eea57e4d6b18d',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingConfirmScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'b139f549587e1adaf9eaa44f4db4e390',
      }
      a.default = t
    },
    hznd: function (e, a, n) {
      'use strict'
      var t = n('97Jx'),
        l = n.n(t),
        r = n('ERkP'),
        i = n.n(r),
        o = n('BedV'),
        s = n('KEM+'),
        c = n.n(s),
        u = (n('ho0z'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('t62R')),
        d = n('IMYl'),
        p = n('py1r'),
        m = n('I4+6'),
        g = n('cm6r'),
        f = n('rHpw'),
        b = n('MWbm')
      function y(e, a) {
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
      function _(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? y(Object(n), !0).forEach(function (a) {
                c()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var h = f.a.create(function (e) {
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
        w = _(
          _({}, f.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        v = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            l = e.checked,
            r = e.disabled,
            o = e.helpText,
            s = e.label,
            c = e.name,
            y = e.onChange,
            _ = m.a.generate({
              backgroundColor: f.a.theme.colors.transparent,
              color: l ? f.a.theme.colors.primary : f.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return i.a.createElement(p.a, { disabled: r }, function (e) {
            return i.a.createElement(
              b.a,
              { style: h.root },
              i.a.createElement(
                b.a,
                { accessibilityRole: 'label', style: [h.base, h.border, !r && h.interactive] },
                i.a.createElement(
                  b.a,
                  { style: h.textContainer },
                  i.a.createElement(u.b, { weight: 'bold' }, s),
                  o && i.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: h.helpText }, o),
                ),
                i.a.createElement(
                  b.a,
                  { style: h.radioContainer },
                  i.a.createElement(
                    g.a,
                    { disabled: r, interactiveStyles: _, interactivityState: e, style: h.radioBackground },
                    i.a.createElement(
                      b.a,
                      {
                        style: [
                          h.circle,
                          l && h.circleActive,
                          r && h.circleDisabled,
                          l && r && h.circleCheckedAndDisabled,
                        ],
                      },
                      l ? i.a.createElement(d.a, { style: h.checkMark }) : null,
                    ),
                  ),
                  i.a.createElement('input', {
                    'aria-label': a,
                    'aria-posinset': n,
                    'aria-setsize': t,
                    checked: l,
                    disabled: r,
                    name: c,
                    onChange: l ? void 0 : y,
                    style: w,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      a.a = function (e) {
        return i.a.createElement(
          o.a,
          l()({}, e, {
            renderSelector: function (e) {
              return i.a.createElement(v, l()({}, e, { key: e.value }))
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitEthnicitiesScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitGendersScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '538ad0d6c6e4fd3b239bde44abe8a547',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '81dd9f9d76f9eaf05e91a58057ad8ad3',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '539c7296bcbf0532a3a4975dc3fdf47a',
      }
      a.default = t
    },
    nAiE: function (e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'superFollowsSettingsQuery', function () {
          return Lo
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return J
        }),
        n.d(t, 'Arrow2x', function () {
          return Z
        }),
        n.d(t, 'Arrow3x', function () {
          return $
        }),
        n.d(t, 'Bench', function () {
          return Y
        }),
        n.d(t, 'Bench2x', function () {
          return ee
        }),
        n.d(t, 'Bench3x', function () {
          return ae
        }),
        n.d(t, 'Cat', function () {
          return ne
        }),
        n.d(t, 'Cat2x', function () {
          return te
        }),
        n.d(t, 'Cat3x', function () {
          return le
        }),
        n.d(t, 'Clipboard', function () {
          return re
        }),
        n.d(t, 'Clipboard2x', function () {
          return ie
        }),
        n.d(t, 'Clipboard3x', function () {
          return oe
        }),
        n.d(t, 'CoinStairs', function () {
          return se
        }),
        n.d(t, 'CoinStairs2x', function () {
          return ce
        }),
        n.d(t, 'CoinStairs3x', function () {
          return ue
        }),
        n.d(t, 'HandCoins', function () {
          return de
        }),
        n.d(t, 'HandCoins2x', function () {
          return pe
        }),
        n.d(t, 'HandCoins3x', function () {
          return me
        }),
        n.d(t, 'OneFinger', function () {
          return ge
        }),
        n.d(t, 'OneFinger2x', function () {
          return fe
        }),
        n.d(t, 'OneFinger3x', function () {
          return be
        }),
        n.d(t, 'PaperAirplane', function () {
          return ye
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return _e
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return he
        }),
        n.d(t, 'Puzzle', function () {
          return we
        }),
        n.d(t, 'Puzzle2x', function () {
          return ve
        }),
        n.d(t, 'Puzzle3x', function () {
          return Se
        }),
        n.d(t, 'Thumbsup', function () {
          return ke
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Fe
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Ee
        }),
        n.d(t, 'TrafficLight', function () {
          return Ce
        }),
        n.d(t, 'TrafficLight2x', function () {
          return xe
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Ke
        }),
        n.d(t, 'Uturn', function () {
          return Oe
        }),
        n.d(t, 'Uturn2x', function () {
          return Le
        }),
        n.d(t, 'Uturn3x', function () {
          return Pe
        })
      var l,
        r,
        i,
        o = n('ERkP'),
        s = n.n(o),
        c = n('tI3i'),
        u = n.n(c),
        d = n('Ty5D'),
        p = s.a.createContext(),
        m = function (e) {
          var a = e.children
          return s.a.createElement(p.Provider, { value: Object(d.g)() }, a)
        },
        g = function () {
          var e = s.a.useContext(p)
          return u()(!!e, 'history must be defined'), e
        },
        f = n('v//M'),
        b = (n('enFi'), n('3XMw')),
        y = n.n(b),
        _ = n('kGix'),
        h = n('/yvb'),
        w = n('97Jx'),
        v = n.n(w),
        S = n('m3Bd'),
        k = n.n(S),
        F = n('jHSc'),
        E = n('lUZE'),
        C = 'https://help.twitter.com/using-twitter/super-follows-creator',
        x = n('6s7X'),
        K = function () {
          return s.a.createElement(h.a, {
            icon: s.a.createElement(x.a, null),
            link: C,
            pullLeft: !0,
            type: 'primaryText',
          })
        },
        O = n('JYMr'),
        L = n('rHpw'),
        P = y.a.a6777c1b,
        T = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            l = e.withCenteredLogo,
            r = e.withInfoButton,
            i = k()(e, [
              'leftControlShouldClose',
              'percentageComplete',
              'rightControl',
              'withCenteredLogo',
              'withInfoButton',
            ]),
            o = g(),
            c = Object(d.g)(),
            u = a ? 'close' : 'back',
            p = a ? '/settings/monetization' : void 0,
            m = l ? s.a.createElement(E.a, { style: D.iconTwitter }) : void 0,
            f = r ? s.a.createElement(s.a.Fragment, null, s.a.createElement(K, null), t) : t,
            b = n ? s.a.createElement(O.a, { progress: n }) : void 0
          return s.a.createElement(
            F.b,
            v()({}, i, {
              backButtonType: u,
              backLocation: p,
              centeredLogo: m,
              documentTitle: P,
              onBackClick: function () {
                a ? o.push('/settings/monetization') : c.goBack()
              },
              rightControl: f,
              secondaryBar: b,
            }),
          )
        },
        D = L.a.create(function (e) {
          return { iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' } }
        }),
        R = y.a.g92a2343,
        A = y.a.a91bb144,
        B = function () {
          var e = Object(d.g)(),
            a = s.a.createElement(
              h.a,
              {
                onPress: function () {
                  e.push('/application/submit')
                },
                type: 'primaryFilled',
              },
              A,
            )
          return s.a.createElement(T, { rightControl: a, title: R })
        },
        j = (n('jQ3i'), n('x4t0'), n('z84I'), n('855f')),
        I = n('MWbm'),
        z = n('t62R'),
        M = n('WtWS'),
        V = n('0ULw'),
        U = function (e) {
          return e.items.map(function (e) {
            return s.a.createElement(
              I.a,
              { key: e.label, style: H.item },
              s.a.createElement(z.b, { style: H.label, weight: 'bold' }, e.label),
              e.checked
                ? s.a.createElement(M.a, { style: H.iconChecked })
                : s.a.createElement(V.a, { style: H.iconUnchecked }),
            )
          })
        },
        H = L.a.create(function (e) {
          return {
            iconChecked: { color: e.colors.primary },
            iconUnchecked: { color: e.colors.gray700 },
            item: { flexDirection: 'row', marginVertical: e.spaces.space12 },
            label: { flex: 1 },
          }
        }),
        W = function () {
          return s.a.createElement(
            z.b,
            { align: 'center', color: 'gray700' },
            s.a.createElement(
              y.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              s.a.createElement(
                z.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                y.a.ebc0cbbc,
              ),
            ),
          )
        },
        q = n('ddV6'),
        N = n.n(q),
        G =
          (n('Qavd'),
          n('JtPf'),
          n('7x/C'),
          function (e) {
            var a = e.disabled,
              n = e.history,
              t = e.label,
              l = e.onPress,
              r = e.path,
              i = k()(e, ['disabled', 'history', 'label', 'onPress', 'path']),
              o = Object(d.g)(),
              c = s.a.useState(!1),
              u = N()(c, 2),
              p = u[0],
              m = u[1],
              g = function () {
                ;(null != n ? n : o).push(r)
              }
            return s.a.createElement(
              h.a,
              v()({}, i, {
                disabled: p || a,
                onPress: function (e) {
                  l
                    ? (m(!0),
                      l(e)
                        .then(g)
                        .finally(function () {
                          return m(!1)
                        }))
                    : g()
                },
              }),
              t,
            )
          }),
        Q = n('jAXQ'),
        X = n.n(Q),
        J = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        Z = n.p + 'Arrow@2x.8af675c5.png',
        $ = n.p + 'Arrow@3x.949d4365.png',
        Y = n.p + 'Bench.ed26a435.png',
        ee = n.p + 'Bench@2x.ef9fb7d5.png',
        ae = n.p + 'Bench@3x.a306fd55.png',
        ne = n.p + 'Cat.089435a5.png',
        te = n.p + 'Cat@2x.bca70155.png',
        le = n.p + 'Cat@3x.2b225ef5.png',
        re = n.p + 'Clipboard.540710d5.png',
        ie = n.p + 'Clipboard@2x.72ca72e5.png',
        oe = n.p + 'Clipboard@3x.1b952e95.png',
        se = n.p + 'CoinStairs.8488b245.png',
        ce = n.p + 'CoinStairs@2x.34fd5855.png',
        ue = n.p + 'CoinStairs@3x.1b706305.png',
        de = n.p + 'HandCoins.fbd23965.png',
        pe = n.p + 'HandCoins@2x.c1b62b75.png',
        me = n.p + 'HandCoins@3x.7dd5f3d5.png',
        ge = n.p + 'OneFinger.6eb5d9c5.png',
        fe = n.p + 'OneFinger@2x.a13e1ba5.png',
        be = n.p + 'OneFinger@3x.7f22c175.png',
        ye = n.p + 'PaperAirplane.1ef48a05.png',
        _e = n.p + 'PaperAirplane@2x.2923eb15.png',
        he = n.p + 'PaperAirplane@3x.47e4b145.png',
        we = n.p + 'Puzzle.aa045515.png',
        ve = n.p + 'Puzzle@2x.5be7ab15.png',
        Se = n.p + 'Puzzle@3x.1796b225.png',
        ke = n.p + 'Thumbsup.f5be79d5.png',
        Fe = n.p + 'Thumbsup@2x.6d106945.png',
        Ee = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Ce = n.p + 'TrafficLight.11644b65.png',
        xe = n.p + 'TrafficLight@2x.5657de25.png',
        Ke = n.p + 'TrafficLight@3x.a5a35335.png',
        Oe = n.p + 'Uturn.c8267f55.png',
        Le = n.p + 'Uturn@2x.db3f94d5.png',
        Pe = n.p + 'Uturn@3x.22f27905.png',
        Te = n('tn7R'),
        De = n('TIdA'),
        Re = n('A91F'),
        Ae = 400,
        Be = 250,
        je = [1, 2, 3],
        Ie = Object.freeze({
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
        ze = Object(Te.a)(Ie).reduce(function (e, a) {
          var n = Math.max.apply(Math, je)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Ae * n, height: Be * n },
              customVariants: je.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Ae * e, height: Be * e }
              }),
            }),
            e
          )
        }, {}),
        Me = function (e) {
          var a = e.type,
            n = ze[a],
            t = n.aspectRatio,
            l = n.customVariants,
            r = n.image
          return s.a.createElement(
            I.a,
            { style: Ve.illustration },
            s.a.createElement(De.a, {
              accessibilityLabel: '',
              aspectMode: Re.a.exact(t),
              customVariants: l,
              draggable: !1,
              image: r,
            }),
          )
        },
        Ve = L.a.create(function (e) {
          return { illustration: { alignSelf: 'center', width: Ae, height: Be } }
        }),
        Ue = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            l = e.subtext
          return s.a.createElement(
            s.a.Fragment,
            null,
            t && s.a.createElement(Me, { type: t }),
            s.a.createElement(
              z.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title4',
                style: t && He.headline,
                weight: 'heavy',
              },
              n,
            ),
            s.a.createElement(z.b, { align: a, color: 'gray700', style: He.subtext }, l),
          )
        },
        He = L.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space48 }, subtext: { marginVertical: e.spaces.space12 } }
        }),
        We = y.a.feb54b4f,
        qe = y.a.bac156a6,
        Ne = y.a.a3a20a10,
        Ge = y.a.b26ae507,
        Qe = y.a.a753a87f,
        Xe = y.a.abfaa527,
        Je = j.a.getTruncatedCount(1e4),
        Ze = y.a.fdd95737({ minFollowersCount: Je }),
        $e = j.a.getTruncatedCount(25),
        Ye = [
          {
            label: Ze,
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
            label: y.a.a0dcad86({ minTweetsCount: $e }),
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
            label: y.a.c27f57ac,
            test: function (e) {
              var a
              return !(null != e && null !== (a = e.super_following_eligibility) && void 0 !== a && a.includes('age'))
            },
          },
        ],
        ea = void 0 !== l ? l : (l = n('RLjm')),
        aa = function (e) {
          var a = e.user,
            n = X()(ea, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            l = t ? Ie.Arrow : Ie.TrafficLight,
            r = t ? We : Ne,
            i = t ? qe : Ge,
            o = Ye.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            })
          return s.a.createElement(
            T,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { headline: r, illustration: l, subtext: i }),
            s.a.createElement(U, { items: o }),
            t && s.a.createElement(W, null),
            s.a.createElement(G, { disabled: !t, label: Qe, path: '/application/one_more_thing' }),
            s.a.createElement(G, { label: Xe, path: '/application/one_more_thing' }),
          )
        },
        na = n('9RkS'),
        ta = y.a.bbb89925,
        la = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            l = e.price,
            r = e.step,
            i = e.value,
            o = s.a.useState(i),
            c = N()(o, 2),
            u = c[0],
            d = c[1],
            p = Math.round(a * l * (u / 100))
          return s.a.createElement(
            I.a,
            { style: ra.container },
            s.a.createElement(
              z.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              s.a.createElement(
                y.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                s.a.createElement(z.b, { weight: 'bold' }, y.a.a7dd00ea),
                s.a.createElement(
                  z.b,
                  { style: ra.earnings, weight: 'heavy' },
                  y.a.c62c1d30({ earnings: '$'.concat(j.a.getTruncatedCount(p)) }),
                ),
                s.a.createElement(z.b, { color: 'green500', style: ra.asteriskLeft }, y.a.e0fb982b),
              ),
            ),
            s.a.createElement(
              I.a,
              { style: ra.slider },
              s.a.createElement(na.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: r,
                thumbLabel: ta({ percent: u }),
                value: u,
              }),
            ),
            s.a.createElement(
              z.b,
              { color: 'green500', size: 'subtext3', style: ra.footnote },
              s.a.createElement(
                y.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(l) },
                s.a.createElement(z.b, { style: ra.asteriskRight }, y.a.e263c38e),
              ),
            ),
          )
        },
        ra = L.a.create(function (e) {
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
        ia = n('6iuV'),
        oa = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        sa = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return s.a.createElement(
            I.a,
            { style: ca.container },
            s.a.createElement(oa.a, { Icon: a, color: 'neutral' }),
            s.a.createElement(z.b, { size: 'headline2', style: ca.title, weight: 'bold' }, t),
            s.a.createElement(z.b, { color: 'gray700', style: ca.description }, n),
          )
        },
        ca = L.a.create(function (e) {
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
        ua = n('sUoZ'),
        da = n('witV'),
        pa = n('ACHU'),
        ma = [
          { Icon: ua.a, title: y.a.d31c5997, description: y.a.hda1e780 },
          { Icon: da.a, title: y.a.d08d0bb2, description: y.a.cbd8b105 },
          { Icon: pa.a, title: y.a.becb4930, description: y.a.g743ef96 },
        ],
        ga = function () {
          return s.a.createElement(
            ia.a,
            null,
            ma.map(function (e) {
              return s.a.createElement(sa, v()({}, e, { key: e.title }))
            }),
          )
        },
        fa = y.a.a6777c1b,
        ba = y.a.j5dc36d7,
        ya = y.a.c45b2f06,
        _a = y.a.hb6b432e,
        ha = y.a.cd5cae15,
        wa = y.a.f7239f4c,
        va = y.a.g8cdf707,
        Sa = y.a.bff8472e,
        ka = y.a.e533715d,
        Fa = void 0 !== r ? r : (r = n('xd+q')),
        Ea = function (e) {
          var a = e.user,
            n = X()(Fa, a).legacy.followers_count
          return s.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            s.a.createElement(
              z.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              fa,
            ),
            s.a.createElement(z.b, null, ba),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ya,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, _a),
            s.a.createElement(Me, { type: Ie.HandCoins }),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ha,
            ),
            s.a.createElement(ga, null),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              wa,
            ),
            s.a.createElement(la, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              va,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, Sa),
            s.a.createElement(G, { color: 'plum500', label: ka, path: '/application/eligibility' }),
          )
        },
        Ca = y.a.d0fc4890,
        xa = y.a.c64384b6,
        Ka = y.a.c3d89aca,
        Oa = function () {
          return s.a.createElement(
            T,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { align: 'center', headline: Ca, illustration: Ie.OneFinger, subtext: xa }),
            s.a.createElement(G, { label: Ka, path: '/application/complete_profile' }),
          )
        },
        La = (n('2G9S'), n('Hsf0')),
        Pa = n.n(La),
        Ta = 'super_follows_application_draft',
        Da = 'super_follows_onboarding_draft',
        Ra = function (e) {
          return Pa()(void 0 !== i ? i : (i = n('PlkH')), e).__id
        },
        Aa = function (e, a) {
          var n = Ra(a),
            t = e.get(n)
          return u()(t, 'viewer must be defined'), t
        },
        Ba = function (e, a) {
          return Aa(e, a).getLinkedRecord(Ta)
        },
        ja = function (e, a) {
          return Aa(e, a).getLinkedRecord(Da)
        },
        Ia = n('HG4m'),
        za = n.n(Ia),
        Ma = n('Ud88'),
        Va = n.n(Ma)
      function Ua(e, a) {
        var n = Va()()
        s.a.useEffect(
          function () {
            u()(e, 'viewerRef must be defined'),
              za()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.content_category,
                    l = void 0 === t ? [] : t,
                    r = n.content_category_other,
                    i = void 0 === r ? null : r,
                    o = n.content_creation_platform,
                    s = void 0 === o ? [] : o,
                    c = n.content_creation_platform_other,
                    u = void 0 === c ? null : c,
                    d = n.ethnicity,
                    p = void 0 === d ? [] : d,
                    m = n.gender,
                    g = void 0 === m ? [] : m,
                    f = n.purpose,
                    b = void 0 === f ? null : f,
                    y = Ra(a),
                    _ = Aa(e, a)
                  if (!Ba(e, a)) {
                    var h = e.create(''.concat(y, ':').concat(Ta), 'SuperFollowsApplicationDraft')
                    h.setValue(l, 'content_category'),
                      h.setValue(i, 'content_category_other'),
                      h.setValue(s, 'content_creation_platform'),
                      h.setValue(u, 'content_creation_platform_other'),
                      h.setValue(b, 'purpose'),
                      h.setValue(p, 'ethnicity'),
                      h.setValue(g, 'gender'),
                      _.setLinkedRecord(h, Ta)
                  }
                })(n, e, a)
              })
          },
          [a, n, e],
        )
      }
      function Ha(e, a) {
        var n = Va()()
        s.a.useEffect(
          function () {
            u()(e, 'viewerRef must be defined'),
              za()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.creator_intro,
                    l = void 0 === t ? null : t,
                    r = n.description,
                    i = void 0 === r ? null : r,
                    o = n.selected_price,
                    s = void 0 === o ? null : o,
                    c = Ra(a),
                    u = Aa(e, a)
                  if (!ja(e, a)) {
                    var d = e.create(''.concat(c, ':').concat(Da), 'SuperFollowsOnboardingDraft')
                    d.setValue(l, 'creator_intro'),
                      d.setValue(i, 'description'),
                      d.setValue(s, 'selected_price'),
                      u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                  }
                })(n, e, a)
              })
          },
          [n, a, e],
        )
      }
      function Wa(e, a) {
        var n = Va()()
        return s.a.useCallback(
          function (t) {
            u()(e, 'viewerRef must be defined'),
              za()(n, function (n) {
                !(function (e, a, n, t) {
                  var l = Ba(e, a)
                  u()(l, 'applicationDraft must be defined'), l.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function qa(e, a) {
        var n = Va()()
        return s.a.useCallback(
          function (t) {
            u()(e, 'viewerId must be defined'),
              za()(n, function (n) {
                !(function (e, a, n, t) {
                  var l = ja(e, a)
                  u()(l, 'onboardingDraft must be defined'), l.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Na,
        Ga,
        Qa,
        Xa,
        Ja,
        Za,
        $a,
        Ya,
        en,
        an,
        nn,
        tn,
        ln,
        rn,
        on,
        sn,
        cn,
        un,
        dn,
        pn,
        mn,
        gn,
        fn,
        bn,
        yn,
        _n,
        hn,
        wn,
        vn,
        Sn,
        kn,
        Fn = n('p+r5'),
        En = y.a.f7997b16,
        Cn = y.a.fc00ab5b,
        xn = y.a.c249167f,
        Kn = y.a.b772cd65,
        On = void 0 !== Na ? Na : (Na = n('xhT1')),
        Ln = function (e) {
          var a,
            n,
            t = e.viewer,
            l = X()(On, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Wa(l, 'content_category_other')
          return s.a.createElement(
            T,
            { title: En },
            s.a.createElement(Fn.a, {
              helperText: xn,
              label: Cn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r,
            }),
            s.a.createElement(h.a, null, Kn),
          )
        },
        Pn = n('fyvP'),
        Tn = n('csss'),
        Dn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            l = e.label,
            r = e.path,
            i = Object(d.g)()
          return s.a.createElement(Tn.a, {
            description: a,
            disabled: n,
            label: l,
            onPress: function () {
              ;(null != t ? t : i).push(r)
            },
          })
        },
        Rn = y.a.f7997b16,
        An = y.a.c144fa52,
        Bn = [
          y.a.b1f2e8ce,
          y.a.jfec3aa0,
          y.a.e08a6e6f,
          y.a.b743702c,
          y.a.h2401e36,
          y.a.ed7e6675,
          y.a.fecc3791,
          y.a.d80b0f11,
          y.a.b29a93b1,
          y.a.c5d190c0,
          y.a.i6dfc494,
          y.a.ff2b68ca,
          y.a.e404203c,
          y.a.ab389321,
          y.a.a46fdec4,
          y.a.add55c97,
          y.a.f28d8b06,
          y.a.c8ee31da,
          y.a.e0234d02,
          y.a.h9d38a08,
          y.a.fe6841bd,
          y.a.e031e06a,
          y.a.i5cade16,
          y.a.e084f2af,
          y.a.a9db15b2,
          y.a.d27beb9e,
          y.a.a92db4a9,
          y.a.fc64990d,
          y.a.hb5f1d64,
        ],
        jn = y.a.c365dcc5,
        In = y.a.bd44a8a8,
        zn = void 0 !== Ga ? Ga : (Ga = n('JB6R')),
        Mn = function (e) {
          var a,
            n,
            t = e.viewer,
            l = X()(zn, t),
            r =
              null !==
                (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Wa(l, 'content_category'),
            o = Bn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            T,
            { title: Rn },
            s.a.createElement(Pn.a, {
              description: An,
              label: An,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: r[0],
            }),
            s.a.createElement(Dn, { helpText: In, label: jn, path: '/application/submit_categories_other' }),
          )
        },
        Vn = y.a.d94a9a17,
        Un = y.a.a35394b3,
        Hn = [
          y.a.e375c2df,
          y.a.gf30371a,
          y.a.b3773d47,
          y.a.a45caf17,
          y.a.e5f515b8,
          y.a.e3b35497,
          y.a.i83206dc,
          y.a.a4ee9393,
          y.a.ab09972f,
          y.a.jafe3705,
        ],
        Wn = void 0 !== Qa ? Qa : (Qa = n('H1we')),
        qn = function (e) {
          var a,
            n,
            t = e.viewer,
            l = X()(Wn, t),
            r =
              null !== (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Wa(l, 'ethnicity'),
            o = Hn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            T,
            { title: Vn },
            s.a.createElement(Pn.a, {
              description: Un,
              label: Un,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: r[0],
            }),
          )
        },
        Nn = y.a.a8d0108d,
        Gn = y.a.a35394b3,
        Qn = [
          y.a.de32365f,
          y.a.b6ab31bd,
          y.a.ffc23188,
          y.a.h1cc7091,
          y.a.hca27829,
          y.a.b3af7344,
          y.a.he3f1435,
          y.a.c3c16abb,
        ],
        Xn = void 0 !== Xa ? Xa : (Xa = n('VG5i')),
        Jn = function (e) {
          var a,
            n,
            t = e.viewer,
            l = X()(Xn, t),
            r =
              null !== (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Wa(l, 'gender'),
            o = Qn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            T,
            { title: Nn },
            s.a.createElement(Pn.a, {
              description: Gn,
              label: Gn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: r[0],
            }),
          )
        },
        Zn = y.a.da8ea7da,
        $n = y.a.d7081f91,
        Yn = y.a.j349548f,
        et = y.a.b772cd65,
        at = void 0 !== Ja ? Ja : (Ja = n('+OUG')),
        nt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = X()(at, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Wa(l, 'content_creation_platform_other')
          return s.a.createElement(
            T,
            { title: Zn },
            s.a.createElement(Fn.a, {
              helperText: Yn,
              label: $n,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r,
            }),
            s.a.createElement(h.a, null, et),
          )
        },
        tt = y.a.da8ea7da,
        lt = y.a.d4062c9a,
        rt = [y.a.a3021317, y.a.eb4a600d, y.a.d4d74bb3, y.a.fc738909, y.a.d8552c1a, y.a.ca07aa46],
        it = y.a.c365dcc5,
        ot = y.a.bd44a8a8,
        st = void 0 !== Za ? Za : (Za = n('xnrs')),
        ct = function (e) {
          var a,
            n,
            t = e.viewer,
            l = X()(st, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Wa(l, 'content_creation_platform'),
            o = rt.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            T,
            { title: tt },
            s.a.createElement(Pn.a, {
              description: lt,
              label: lt,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: r[0],
            }),
            s.a.createElement(Dn, { helpText: ot, label: it, path: '/application/submit_platforms_other' }),
          )
        },
        ut = (n('tVqn'), n('uFXj'), y.a.f4f4dd6f),
        dt = y.a.f448cbcb,
        pt = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            l = 'required' === n ? ut : 'optional' === n ? dt : void 0
          return s.a.createElement(
            I.a,
            { style: mt.container },
            s.a.createElement(z.b, { size: 'headline1', weight: 'heavy' }, a),
            l && s.a.createElement(z.b, { color: t, size: 'subtext2', style: mt.subtext }, l),
          )
        },
        mt = L.a.create(function (e) {
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
        gt = n('jV+4'),
        ft = n('Xrkv'),
        bt = n('9SqB'),
        yt = n.n(bt),
        _t = y.a.e873f0ae,
        ht = y.a.f095a24a,
        wt = y.a.i5f7b6b8,
        vt = y.a.d1f6d336,
        St = y.a.f7997b16,
        kt = y.a.c144fa52,
        Ft = y.a.f1bf337d,
        Et = y.a.da8ea7da,
        Ct = y.a.d4062c9a,
        xt = y.a.e963d587,
        Kt = y.a.ede0ac3e,
        Ot = y.a.ffb6cb88,
        Lt = y.a.b2159e8e,
        Pt = y.a.feacb49d,
        Tt = y.a.je17c987,
        Dt = y.a.d94a9a17,
        Rt = y.a.a8d0108d,
        At = y.a.gfc80842,
        Bt = void 0 !== $a ? $a : ($a = n('pLb/')),
        jt = void 0 !== Ya ? Ya : (Ya = n('3qCL')),
        It = void 0 !== en ? en : (en = n('AyUU')),
        zt = function (e) {
          var a,
            n,
            t,
            l,
            r,
            i,
            o,
            c = e.user,
            u = e.viewer,
            d = X()(Bt, c),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = X()(jt, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == g ? void 0 : g.content_category_other) && void 0 !== n ? n : [],
            ),
            b = (null !== (t = null == g ? void 0 : g.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (l = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== l ? l : [],
            ),
            y = null !== (r = null == g ? void 0 : g.purpose) && void 0 !== r ? r : '',
            _ = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            h = null !== (o = null == g ? void 0 : g.gender) && void 0 !== o ? o : [],
            w = f.length && b.length && y.trim(),
            v = Wa(m, 'purpose'),
            S = yt()(It),
            k = N()(S, 2),
            F = k[0],
            E = k[1]
          return s.a.createElement(
            T,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { headline: _t, illustration: Ie.Clipboard, subtext: ht }),
            s.a.createElement(pt, { title: wt }),
            s.a.createElement(z.b, null, vt),
            p && s.a.createElement(gt.a, { screenName: p }),
            s.a.createElement(pt, { title: St, type: 'required' }),
            s.a.createElement(z.b, { color: 'gray700' }, kt),
            s.a.createElement(Dn, {
              description: Object(ft.a)(f, !0),
              label: Ft,
              path: '/application/submit_categories',
            }),
            s.a.createElement(pt, { title: Et, type: 'required' }),
            s.a.createElement(z.b, { color: 'gray700' }, Ct),
            s.a.createElement(Dn, {
              description: Object(ft.a)(b, !0),
              label: xt,
              path: '/application/submit_platforms',
            }),
            s.a.createElement(pt, { title: Kt, type: 'required' }),
            s.a.createElement(Fn.a, {
              helperText: Lt,
              label: Ot,
              name: 'plannedUsage',
              onChange: function (e) {
                v(e.currentTarget.value)
              },
              value: y,
            }),
            s.a.createElement(pt, { title: Pt, type: 'optional' }),
            s.a.createElement(z.b, { color: 'gray700' }, Tt),
            s.a.createElement(Dn, {
              description: Object(ft.a)(_, !0),
              label: Dt,
              path: '/application/submit_ethnicities',
            }),
            s.a.createElement(Dn, { description: Object(ft.a)(h, !0), label: Rt, path: '/application/submit_genders' }),
            s.a.createElement(W, null),
            s.a.createElement(G, {
              disabled: !w || E,
              label: At,
              onPress: function () {
                return new Promise(function (e, a) {
                  F({
                    variables: { category: f, platform: b, purpose: y, ethnicity: _, gender: h },
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
        Mt = void 0 !== an ? an : (an = n('o/nB')),
        Vt = void 0 !== nn ? nn : (nn = n('lZLw')),
        Ut = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(Mt, a),
            l = X()(Vt, n)
          return (
            Ua(l),
            s.a.createElement(
              d.e,
              null,
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/eligibility' },
                s.a.createElement(aa, { user: t }),
              ),
              s.a.createElement(d.c, { exact: !0, path: '/application/one_more_thing' }, s.a.createElement(Oa, null)),
              s.a.createElement(d.c, { exact: !0, path: '/application/complete_profile' }, s.a.createElement(B, null)),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit' },
                s.a.createElement(zt, { user: t, viewer: l }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_categories' },
                s.a.createElement(Mn, { viewer: l }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_categories_other' },
                s.a.createElement(Ln, { viewer: l }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_platforms' },
                s.a.createElement(ct, { viewer: l }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_platforms_other' },
                s.a.createElement(nt, { viewer: l }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_ethnicities' },
                s.a.createElement(qn, { viewer: l }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_genders' },
                s.a.createElement(Jn, { viewer: l }),
              ),
              s.a.createElement(d.c, { path: '/application' }, s.a.createElement(Ea, { user: t })),
            )
          )
        },
        Ht = (n('ho0z'), n('cHvH')),
        Wt = function (e) {
          var a = e.children,
            n = e.style
          return s.a.createElement(
            I.a,
            { style: [Gt.frame, n] },
            s.a.createElement(
              I.a,
              { style: Gt.browserBar },
              s.a.createElement(
                I.a,
                { style: Gt.browserBarButtons },
                s.a.createElement(I.a, { style: Gt.browserBarButton }),
                s.a.createElement(I.a, { style: Gt.browserBarButton }),
                s.a.createElement(I.a, { style: Gt.browserBarButton }),
              ),
              s.a.createElement(
                I.a,
                { style: Gt.browserBarUrlInputWrapper },
                s.a.createElement(I.a, { style: Gt.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        qt = function (e) {
          var a = e.children,
            n = e.style
          return s.a.createElement(I.a, { style: n }, s.a.createElement(I.a, { style: Gt.content }, a))
        },
        Nt = function (e) {
          var a = e.children,
            n = e.style
          return Object(Ht.b)().windowWidth > L.a.theme.breakpoints.medium
            ? s.a.createElement(Wt, { style: n }, s.a.createElement(qt, { style: Gt.contentWide }, a))
            : s.a.createElement(qt, { style: n }, a)
        },
        Gt = L.a.create(function (e) {
          return {
            frame: {
              backgroundColor: e.colors.gray50,
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.medium,
            },
            browserBar: {
              backgroundColor: e.colors.cellBackground,
              borderTopLeftRadius: e.borderRadii.medium,
              borderTopRightRadius: e.borderRadii.medium,
              borderBottomWidth: e.spaces.space1,
              borderBottomColor: e.colors.gray200,
              display: 'inline-flex',
              flexDirection: 'row',
              gap: e.spaces.space36,
              paddingHorizontal: e.spaces.space20,
            },
            browserBarButtons: {
              alignItems: 'center',
              display: 'inline-flex',
              flexDirection: 'row',
              gap: e.spaces.space8,
              height: e.spaces.space40,
            },
            browserBarButton: {
              backgroundColor: e.colors.gray200,
              borderColor: e.colors.gray400,
              borderRadius: e.borderRadii.infinite,
              borderWidth: e.borderWidths.small,
              height: e.spaces.space12,
              width: e.spaces.space12,
            },
            browserBarUrlInputWrapper: { flex: 1, height: e.spaces.space40, justifyContent: 'center' },
            browserBarUrlInput: {
              backgroundColor: e.colors.gray50,
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space28,
            },
            contentWide: {
              paddingBottom: e.spaces.space24,
              paddingHorizontal: e.spaces.space40,
              paddingTop: e.spaces.space12,
            },
            content: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.medium,
              minHeight: 358,
              overflow: 'hidden',
            },
          }
        }),
        Qt = n('MAc7'),
        Xt = function (e, a) {
          var n = e.style,
            t = k()(e, ['style'])
          return s.a.createElement(Nt, { style: n }, s.a.createElement(Qt.a, v()({}, t, { ref: a })))
        },
        Jt = s.a.forwardRef(Xt),
        Zt = y.a.iba08a94,
        $t = y.a.bcb1e4e6,
        Yt = void 0 !== tn ? tn : (tn = n('JK1g')),
        el = void 0 !== ln ? ln : (ln = n('yqZQ')),
        al = function (e) {
          var a,
            n,
            t = e.user,
            l = e.viewer,
            r = X()(Yt, t),
            i = X()(el, l),
            o = r.legacy,
            c = o.name,
            d = o.profile_image_url_https,
            p =
              null !==
                (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : ''
          return (
            u()('string' == typeof d, 'imageUrl must be defined'),
            u()('string' == typeof c, 'name must be defined'),
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(Ue, { headline: Zt, subtext: $t }),
              s.a.createElement(Jt, { imageUrl: d, name: c, value: p }),
            )
          )
        },
        nl = y.a.hf6f2913,
        tl = void 0 !== rn ? rn : (rn = n('MvEh')),
        ll = void 0 !== on ? on : (on = n('U5ka')),
        rl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(tl, a),
            l = X()(ll, n)
          return s.a.createElement(T, { title: nl, withInfoButton: !0 }, s.a.createElement(al, { user: t, viewer: l }))
        },
        il = n('efqG'),
        ol = n('5emT'),
        sl = y.a.ab793af9,
        cl = y.a.fb278c81,
        ul = y.a.e6b60e94,
        dl = y.a.j24c37b2,
        pl = L.a.create(function (e) {
          return {
            root: { margin: e.spaces.space32 },
            triggerLabel: { marginRight: e.spaces.space8 },
            headlineText: { marginVertical: e.spaces.space16 },
            triggerIcon: { color: e.colors.gray700 },
            paragraphText: { marginBottom: e.spaces.space20 },
            triggerContentWrapper: { alignSelf: 'center', flexDirection: 'row' },
          }
        }),
        ml = function () {
          return s.a.createElement(
            il.a,
            {
              renderContent: function (e) {
                return s.a.createElement(
                  I.a,
                  { style: pl.root },
                  s.a.createElement(oa.a, { Icon: ol.a, color: 'neutral', size: 'xxxLarge' }),
                  s.a.createElement(z.b, { size: 'title3', style: pl.headlineText, weight: 'heavy' }, cl),
                  s.a.createElement(z.b, { color: 'gray700', style: pl.paragraphText }, ul),
                  s.a.createElement(h.a, { onClick: e, size: 'xLarge', type: 'primaryFilled' }, dl),
                )
              },
            },
            s.a.createElement(
              I.a,
              { accessibilityRole: 'button', style: pl.triggerContentWrapper },
              s.a.createElement(z.b, { color: 'gray700', style: pl.triggerLabel }, sl),
              s.a.createElement(x.a, { style: pl.triggerIcon }),
            ),
          )
        },
        gl = y.a.j3253319,
        fl = y.a.h1e80993,
        bl = y.a.j679dcda,
        yl = void 0 !== sn ? sn : (sn = n('S3B+')),
        _l = void 0 !== cn ? cn : (cn = n('qrhN')),
        hl = function (e, a) {
          var n,
            t,
            l = e.user,
            r = e.viewer,
            i = X()(yl, l),
            o = X()(_l, r),
            c = i.legacy,
            d = c.name,
            p = c.profile_image_url_https,
            m =
              null !==
                (n = null === (t = o.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            g = qa(o, 'creator_intro')
          return (
            u()('string' == typeof p, 'image must be defined'),
            u()('string' == typeof d, 'name must be defined'),
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(Ue, { headline: gl, subtext: fl }),
              s.a.createElement(G, {
                label: bl,
                path: '/onboarding/perks_intro_examples',
                style: wl.examplesLink,
                type: 'primaryText',
              }),
              s.a.createElement(ml, null),
              s.a.createElement(Jt, {
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                value: m,
              }),
            )
          )
        },
        wl = L.a.create(function (e) {
          return { examplesLink: { alignSelf: 'center', marginBottom: e.spaces.space12 } }
        }),
        vl = s.a.forwardRef(hl),
        Sl = y.a.cd5cae15,
        kl = y.a.abd845fd,
        Fl = y.a.b772cd65,
        El = void 0 !== un ? un : (un = n('oyMe')),
        Cl = void 0 !== dn ? dn : (dn = n('RL7R')),
        xl = void 0 !== pn ? pn : (pn = n('VzX/')),
        Kl = L.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        Ol = function (e) {
          var a,
            n,
            t,
            l = e.user,
            r = e.viewer,
            i = s.a.useRef(),
            o = X()(El, l),
            c = X()(Cl, r),
            u = null === (a = o.super_follow_creator_benefits) || void 0 === a ? void 0 : a.benefits_data,
            d =
              null !==
                (n = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            p = yt()(xl),
            m = N()(p, 2),
            g = m[0],
            f = m[1],
            b = !!d
          return s.a.createElement(
            T,
            { title: Sl },
            s.a.createElement(vl, { ref: i, user: o, viewer: c }),
            s.a.createElement(
              I.a,
              { style: Kl.buttonsWrapper },
              s.a.createElement(
                h.a,
                {
                  onClick: function () {
                    var e
                    null == i || null === (e = i.current) || void 0 === e || e.focus()
                  },
                  size: 'large',
                  type: 'primaryOutlined',
                },
                kl,
              ),
              s.a.createElement(G, {
                disabled: !b || f,
                label: Fl,
                onPress: function () {
                  return new Promise(function (e, a) {
                    g({
                      variables: { benefits_data: u, creator_intro: d },
                      onCompleted: function (a, n) {
                        return e()
                      },
                      onError: a,
                    })
                  })
                },
                path: '/management',
                size: 'large',
              }),
            ),
          )
        },
        Ll = n('fs1G'),
        Pl = n('9VLy'),
        Tl = n('0yYu'),
        Dl = n('4zmP'),
        Rl = y.a.a6777c1b,
        Al = y.a.b4a93a91,
        Bl = y.a.c0348963,
        jl = y.a.d08d0bb2,
        Il = y.a.ea4c3496,
        zl = y.a.ea92cfe3,
        Ml = y.a.ia9c37c4,
        Vl = y.a.hc2c5a8b,
        Ul = y.a.be54a312,
        Hl = y.a.bc6d85b3,
        Wl = y.a.b7bc895e,
        ql = y.a.f3ce76c0,
        Nl = y.a.e9e3b3f7,
        Gl = y.a.a79bf10a,
        Ql = y.a.a3932653,
        Xl = y.a.a1ef1964,
        Jl = y.a.abd845fd,
        Zl = y.a.c9f7c195,
        $l = y.a.g5925628,
        Yl = y.a.jfb2bf30,
        er = y.a.a962b5d8,
        ar = y.a.dba12b51,
        nr = void 0 !== mn ? mn : (mn = n('EM6u')),
        tr = void 0 !== gn ? gn : (gn = n('oNwH')),
        lr = void 0 !== fn ? fn : (fn = n('qOMr')),
        rr = function (e) {
          var a,
            n,
            t,
            l = e.priceOfferings,
            r = e.user,
            i = e.viewer,
            o = X()(nr, l),
            c = (o.$refType, k()(o, ['$refType'])),
            u = X()(tr, r),
            d = X()(lr, i).super_follows_onboarding_draft,
            p = null !== (a = null == d ? void 0 : d.creator_intro) && void 0 !== a ? a : '',
            m = null !== (n = null == d ? void 0 : d.description) && void 0 !== n ? n : '',
            g = null !== (t = null == d ? void 0 : d.selected_price) && void 0 !== t ? t : 'offer2'
          return s.a.createElement(
            T,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            s.a.createElement(
              z.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Rl,
            ),
            s.a.createElement(Tl.a, null),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Al,
            ),
            s.a.createElement(G, { label: Xl, path: '/management/perks_confirm', type: 'primaryText' }),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Bl,
            ),
            s.a.createElement(G, { label: Jl, path: '/management/perks_intro', type: 'primaryOutlined' }),
            s.a.createElement(z.b, { color: 'gray700' }, p),
            s.a.createElement(Pl.a, { user: u }),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              jl,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, m),
            s.a.createElement(Pl.a, { user: u }),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Il,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, zl),
            s.a.createElement(Tl.a, null),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ml,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, Vl),
            s.a.createElement(z.b, { size: 'headline2', weight: 'heavy' }, Ul({ price: c[g] })),
            s.a.createElement(Dl.a, { headline: Hl, text: Wl }),
            s.a.createElement(Tl.a, null),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ql,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, Nl),
            s.a.createElement(h.a, { link: C, type: 'brandOutlined' }, Zl),
            s.a.createElement(
              h.a,
              { link: 'https://help.twitter.com/forms/paid-features/superfollows', type: 'brandOutlined' },
              $l,
            ),
            s.a.createElement(Tl.a, null),
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Gl,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, Ql),
            s.a.createElement(h.a, { link: 'https://t.co/jPqvg6tFrDJG', type: 'brandFilled' }, Yl),
            s.a.createElement(h.a, { link: 'https://t.co/RL2NN3bEVkes', type: 'brandOutlined' }, er),
            s.a.createElement(Tl.a, null),
            s.a.createElement(h.a, { onPress: Ll.a, type: 'destructiveText' }, ar),
          )
        },
        ir = void 0 !== bn ? bn : (bn = n('MXCg')),
        or = void 0 !== yn ? yn : (yn = n('mEFY')),
        sr = void 0 !== _n ? _n : (_n = n('d8Sa')),
        cr = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            l = e.user,
            r = e.viewer,
            i = X()(ir, t),
            o = X()(or, l),
            c = X()(sr, r),
            u = null !== (a = o.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = u.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ha(c, {
              creator_intro: u.creator_intro,
              description: N()(m, 1)[0].description,
              selected_price: (null !== (n = o.super_follow_creator_price_metadata) && void 0 !== n ? n : {})
                .selected_price,
            }),
            s.a.createElement(
              d.e,
              null,
              s.a.createElement(
                d.c,
                { exact: !0, path: '/management/perks_intro' },
                s.a.createElement(Ol, { user: o, viewer: c }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/management/perks_confirm' },
                s.a.createElement(rl, { user: o, viewer: c }),
              ),
              s.a.createElement(
                d.c,
                { path: '/management' },
                s.a.createElement(rr, { priceOfferings: i, user: o, viewer: c }),
              ),
            )
          )
        },
        ur = (n('5BYb'), y.a.b422cb62),
        dr = y.a.f08705e0,
        pr = y.a.fc5bfd95,
        mr = y.a.e2cd700f,
        gr = y.a.fbfd7397,
        fr = y.a.c3d89aca,
        br = [
          {
            label: y.a.d8637c96,
            test: function (e) {
              var a,
                n = null !== (a = e.viewer.super_follows_onboarding_draft) && void 0 !== a ? a : {},
                t = n.creator_intro,
                l = n.description
              return !!t && !!l
            },
          },
          {
            label: y.a.b92892dc,
            test: function (e) {
              var a
              return !(null === (a = e.viewer.super_follows_onboarding_draft) || void 0 === a || !a.selected_price)
            },
          },
          {
            label: y.a.b123a502,
            test: function (e) {
              return 'Completed' === e.user.stripe_account_status
            },
          },
        ],
        yr = void 0 !== hn ? hn : (hn = n('wQp3')),
        _r = void 0 !== wn ? wn : (wn = n('tfBr')),
        hr = L.a.create(function (e) {
          return { navigationButton: { marginHorizontal: e.spaces.space80, marginVertical: e.spaces.space24 } }
        }),
        wr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(yr, a),
            l = X()(_r, n),
            r = br.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: t, viewer: l }) }
            }),
            i = r.some(function (e) {
              return e.checked
            }),
            o = s.a.createElement(G, {
              label: i ? fr : pr,
              path: '/onboarding/perks_intro',
              size: 'xLarge',
              style: hr.navigationButton,
              type: 'primaryFilled',
            })
          return s.a.createElement(
            T,
            { bottomBar: o, leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(Ue, {
              headline: i ? mr : ur,
              illustration: i ? Ie.Puzzle : Ie.Cat,
              subtext: i ? gr : dr,
            }),
            s.a.createElement(U, { items: r }),
          )
        },
        vr = y.a.cd5cae15,
        Sr = y.a.b83662ac,
        kr = y.a.cda6bb6d,
        Fr = y.a.a15b98ec,
        Er = y.a.c1df579e,
        Cr = function () {
          return s.a.createElement(
            T,
            { subtitle: Sr, title: vr, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: kr, subtext: Fr }),
            s.a.createElement(ml, null),
            s.a.createElement(G, { label: Er, path: '/onboarding/perks_confirm' }),
          )
        },
        xr = y.a.cd5cae15,
        Kr = y.a.c1df579e,
        Or = void 0 !== vn ? vn : (vn = n('Rthh')),
        Lr = void 0 !== Sn ? Sn : (Sn = n('aREQ')),
        Pr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(Or, a),
            l = X()(Lr, n),
            r = s.a.createElement(G, { label: Kr, path: '/onboarding/pricing', size: 'small', type: 'primaryFilled' })
          return s.a.createElement(
            T,
            { rightControl: r, title: xr, withInfoButton: !0 },
            s.a.createElement(al, { user: t, viewer: l }),
          )
        },
        Tr = y.a.ebfb897c,
        Dr = y.a.dc4feb19,
        Rr = y.a.c183d271,
        Ar = y.a.ic130fd5,
        Br = y.a.dd913e24,
        jr = y.a.h580543e,
        Ir = function () {
          return s.a.createElement(
            T,
            { title: Tr },
            s.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Dr,
            ),
            s.a.createElement(z.b, { color: 'gray700' }, Rr),
            s.a.createElement(z.b, null, Ar),
            s.a.createElement(z.b, null, Br),
            s.a.createElement(z.b, null, jr),
          )
        },
        zr = y.a.cd5cae15,
        Mr = y.a.d80af370,
        Vr = y.a.gf32cca1,
        Ur = y.a.j8ba99b3,
        Hr = y.a.j679dcda,
        Wr = y.a.a329ce87,
        qr = y.a.be76dc33,
        Nr = y.a.abd845fd,
        Gr = y.a.c1df579e,
        Qr = void 0 !== kn ? kn : (kn = n('tJ4s')),
        Xr = function (e) {
          var a,
            n,
            t = e.viewer,
            l = X()(Qr, t),
            r =
              null !== (a = null === (n = l.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== a
                ? a
                : '',
            i = qa(l, 'description')
          return s.a.createElement(
            T,
            { subtitle: Mr, title: zr, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: Vr, subtext: Ur }),
            s.a.createElement(G, { label: Hr, path: '/onboarding/perks_description_examples', type: 'primaryText' }),
            s.a.createElement(ml, null),
            s.a.createElement(Fn.a, {
              label: Wr,
              name: 'description',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r || '',
            }),
            s.a.createElement(h.a, { type: 'primaryFilled' }, qr),
            s.a.createElement(h.a, { type: 'primaryOutlined' }, Nr),
            s.a.createElement(G, { disabled: !r, label: Gr, path: '/onboarding/perks_badges' }),
          )
        },
        Jr = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        Zr = n.n(Jr),
        $r = n('Lsrn'),
        Yr = n('k/Ka')
      function ei(e, a) {
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
      function ai(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? ei(Object(n), !0).forEach(function (a) {
                Zr()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ei(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var ni = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Yr.a)(
          'svg',
          ai(
            ai({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [$r.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          s.a.createElement(
            'g',
            null,
            s.a.createElement('path', {
              d: 'M21.43 11.277c0 4.335-4.223 7.85-9.43 7.85-.66 0-1.3-.057-1.92-.164-.537-.092-1.092-.008-1.554.28-.003 0-.008.004-.01.005-.595.37-1.767.953-1.767.953-.428.174-.715.15-.867.11-.066-.02-.092-.1-.05-.157l1.11-1.4c.07-.096.1-.208.106-.327.007-.283-.156-.544-.4-.685-2.465-1.416-4.08-3.783-4.08-6.463 0-4.335 4.222-7.85 9.43-7.85 5.207 0 9.43 3.515 9.43 7.85z',
            }),
          ),
        )
      }
      ni.metadata = { width: 24, height: 24 }
      var ti,
        li,
        ri,
        ii,
        oi,
        si,
        ci,
        ui,
        di,
        pi,
        mi,
        gi,
        fi = ni,
        bi = n('JWc1'),
        yi = y.a.ebfb897c,
        _i = y.a.dc4feb19,
        hi = y.a.a0bb2076,
        wi = y.a.ace46d40,
        vi = y.a.h2c4511f,
        Si = y.a.hbe4f99e,
        ki = L.a.create(function (e) {
          return {
            exampleIntros: { marginLeft: e.spaces.space36 },
            headlineWrapper: { flexDirection: 'row', marginBottom: e.spaces.space12 },
            headline: { marginLeft: e.spaces.space8 },
            subtext: { marginLeft: e.spaces.space36 },
          }
        }),
        Fi = function () {
          return s.a.createElement(
            T,
            { title: yi },
            s.a.createElement(
              I.a,
              { style: ki.headlineWrapper },
              s.a.createElement(oa.a, { Icon: fi, color: 'neutral', size: 'large' }),
              s.a.createElement(
                z.b,
                {
                  accessibilityLevel: 2,
                  accessibilityRole: 'heading',
                  size: 'title4',
                  style: ki.headline,
                  weight: 'heavy',
                },
                _i,
              ),
            ),
            s.a.createElement(z.b, { color: 'gray700', style: ki.subtext }, hi),
            s.a.createElement(
              I.a,
              { style: ki.exampleIntros },
              s.a.createElement(bi.a, { value: wi }),
              s.a.createElement(bi.a, { value: vi }),
              s.a.createElement(bi.a, { value: Si }),
            ),
          )
        },
        Ei = y.a.cd5cae15,
        Ci = y.a.ef08a890,
        xi = y.a.b16680ff,
        Ki = y.a.abd845fd,
        Oi = y.a.c1df579e,
        Li = void 0 !== ti ? ti : (ti = n('02qo')),
        Pi = void 0 !== li ? li : (li = n('TXsE')),
        Ti = L.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        Di = function (e) {
          var a,
            n,
            t = e.user,
            l = e.viewer,
            r = s.a.useRef(),
            i = X()(Li, t),
            o = X()(Pi, l),
            c = !!(null !==
              (a = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
            void 0 !== a
              ? a
              : '')
          return s.a.createElement(
            T,
            { subtitle: Ci, title: Ei },
            s.a.createElement(vl, { ref: r, user: i, viewer: o }),
            s.a.createElement(
              I.a,
              { style: Ti.buttonsWrapper },
              s.a.createElement(
                h.a,
                {
                  onClick: function () {
                    var e
                    null == r || null === (e = r.current) || void 0 === e || e.focus()
                  },
                  size: 'large',
                  type: 'primaryOutlined',
                },
                c ? Ki : xi,
              ),
              s.a.createElement(G, { disabled: !c, label: Oi, path: '/onboarding/perks_description', size: 'large' }),
            ),
          )
        },
        Ri = y.a.ea8a3d2d,
        Ai = y.a.f77bb178,
        Bi = y.a.cd75a5d4,
        ji = y.a.g9677c6d,
        Ii = y.a.abd845fd,
        zi = void 0 !== ri ? ri : (ri = n('IeZm')),
        Mi = void 0 !== ii ? ii : (ii = n('7ESn')),
        Vi = void 0 !== oi ? oi : (oi = n('By/j')),
        Ui = function (e) {
          var a,
            n,
            t,
            l = e.priceOfferings,
            r = e.viewer,
            i = X()(zi, l),
            o = (i.$refType, k()(i, ['$refType'])),
            c = X()(Mi, r).super_follows_onboarding_draft,
            u = null !== (a = null == c ? void 0 : c.creator_intro) && void 0 !== a ? a : '',
            d = null !== (n = null == c ? void 0 : c.description) && void 0 !== n ? n : '',
            p = null !== (t = null == c ? void 0 : c.selected_price) && void 0 !== t ? t : o[0],
            m = yt()(Vi),
            g = N()(m, 2),
            f = g[0],
            b = g[1]
          return s.a.createElement(
            T,
            { title: Ri, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: Ai({ price: o[p] }), subtext: Bi }),
            s.a.createElement(G, {
              disabled: b,
              label: ji,
              onPress: function () {
                return new Promise(function (e, a) {
                  f({
                    variables: {
                      creator_intro: u,
                      benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: d }],
                      selected_price: p,
                    },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: '/onboarding/stripe_setup',
              size: 'small',
              type: 'primaryFilled',
            }),
            s.a.createElement(G, {
              disabled: b,
              label: Ii,
              path: '/onboarding/pricing',
              size: 'small',
              type: 'primaryOutlined',
            }),
          )
        },
        Hi = (n('7xRU'), n('hznd')),
        Wi = y.a.ea8a3d2d,
        qi = y.a.ic9124bf,
        Ni = y.a.g5923869,
        Gi = {
          offer1: [y.a.f025ab39, y.a.c5602dfd],
          offer2: [y.a.ib075804, y.a.j8a72f06],
          offer3: [y.a.c246656e, y.a.a92ab16c],
        },
        Qi = y.a.c1df579e,
        Xi = void 0 !== si ? si : (si = n('5jO1')),
        Ji = void 0 !== ci ? ci : (ci = n('mKqc')),
        Zi = function (e) {
          var a = e.priceOfferings,
            n = e.viewer,
            t = X()(Xi, a),
            l = (t.$refType, k()(t, ['$refType'])),
            r = X()(Ji, n),
            i = r.super_follows_onboarding_draft,
            o = null == i ? void 0 : i.selected_price,
            c = qa(r, 'selected_price'),
            u = s.a.createElement(
              y.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              s.a.createElement(z.b, { link: C }, y.a.c336b06a),
            ),
            d = Object.keys(l).map(function (e) {
              return { label: Ni({ price: l[e] }), value: e, helpText: Gi[e].join(' ') }
            }),
            p = s.a.createElement(G, {
              disabled: !o,
              label: Qi,
              path: '/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return s.a.createElement(
            T,
            { rightControl: p, title: Wi, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: qi, subtext: u }),
            s.a.createElement(Hi.a, {
              label: qi,
              name: 'selectedPrice',
              onChange: function (e, a) {
                c(a)
              },
              options: d,
              value: o,
            }),
          )
        },
        $i = y.a.e20f6661,
        Yi = y.a.a9ee1ecc,
        eo = y.a.j24c37b2,
        ao = function () {
          var e = g()
          return s.a.createElement(
            T,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: $i, illustration: Ie.Thumbsup, subtext: Yi }),
            s.a.createElement(G, { history: e, label: eo, path: '/settings/monetization' }),
          )
        },
        no = y.a.e2cd700f,
        to = y.a.d6bfb60c,
        lo = y.a.b9cbb370,
        ro = function () {
          return s.a.createElement(
            T,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { headline: no, illustration: Ie.Puzzle, subtext: to }),
            s.a.createElement(G, { label: lo, path: '/onboarding/stripe_setup' }),
          )
        },
        io = n('8jkQ'),
        oo = y.a.ja884230,
        so = y.a.af1b808d,
        co = y.a.fe339750,
        uo = y.a.j912510a,
        po = void 0 !== ui ? ui : (ui = n('xHLM')),
        mo = function () {
          var e = yt()(po),
            a = N()(e, 2),
            n = a[0],
            t = a[1],
            l = function () {
              n({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && io.b.navigateTo(n)
                },
              })
            }
          return s.a.createElement(
            T,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { headline: oo, illustration: Ie.CoinStairs, subtext: so }),
            s.a.createElement(h.a, { disabled: t, onPress: l, type: 'primaryFilled' }, co),
            s.a.createElement(h.a, { disabled: t, onPress: l, type: 'primaryOutlined' }, uo),
          )
        },
        go = void 0 !== di ? di : (di = n('UNVS')),
        fo = void 0 !== pi ? pi : (pi = n('6byF')),
        bo = void 0 !== mi ? mi : (mi = n('dNhZ')),
        yo = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            l = e.user,
            r = e.viewer,
            i = X()(go, t),
            o = X()(fo, l),
            c = X()(bo, r),
            u = null !== (a = o.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = u.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ha(c, {
              creator_intro: u.creator_intro,
              description: N()(m, 1)[0].description,
              selected_price: (null !== (n = o.super_follow_creator_price_metadata) && void 0 !== n ? n : {})
                .selected_price,
            }),
            s.a.createElement(
              d.e,
              null,
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_intro' },
                s.a.createElement(Di, { user: o, viewer: c }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_intro_examples' },
                s.a.createElement(Fi, null),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_description' },
                s.a.createElement(Xr, { viewer: c }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_description_examples' },
                s.a.createElement(Ir, null),
              ),
              s.a.createElement(d.c, { exact: !0, path: '/onboarding/perks_badges' }, s.a.createElement(Cr, null)),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_confirm' },
                s.a.createElement(Pr, { user: o, viewer: c }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/pricing' },
                s.a.createElement(Zi, { priceOfferings: i, viewer: c }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/pricing_confirm' },
                s.a.createElement(Ui, { priceOfferings: i, viewer: c }),
              ),
              s.a.createElement(d.c, { exact: !0, path: '/onboarding/stripe_setup' }, s.a.createElement(mo, null)),
              s.a.createElement(d.c, { exact: !0, path: '/onboarding/stripe_incomplete' }, s.a.createElement(ro, null)),
              s.a.createElement(d.c, { exact: !0, path: '/onboarding/stripe_completed' }, s.a.createElement(ao, null)),
              s.a.createElement(d.c, { path: '/onboarding' }, s.a.createElement(wr, { user: o, viewer: c })),
            )
          )
        },
        _o = y.a.aa7e35ed,
        ho = y.a.f67e69bf,
        wo = function () {
          return s.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: _o, illustration: Ie.Uturn, subtext: ho }),
          )
        },
        vo = y.a.d3d6c52c,
        So = y.a.c53e9129,
        ko = function () {
          return s.a.createElement(
            T,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: vo, illustration: Ie.PaperAirplane, subtext: So }),
          )
        },
        Fo = y.a.j274e6aa,
        Eo = y.a.d7f65127,
        Co = function () {
          return s.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(Ue, { headline: Fo, illustration: Ie.Bench, subtext: Eo }),
          )
        },
        xo = n('n0Rl'),
        Ko = n('q9Zt'),
        Oo = y.a.hae1c933,
        Lo = void 0 !== gi ? gi : (gi = n('G8I5')),
        Po = Object(xo.b)(Lo, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        To = L.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return s.a.createElement(Po, {
          render: function (e) {
            var a,
              n,
              t = e.data,
              l = e.error,
              r = e.fetchStatus,
              i = e.retry,
              o = null == t ? void 0 : t.super_follows_price_offerings,
              c =
                null == t || null === (a = t.viewer) || void 0 === a || null === (n = a.user_results) || void 0 === n
                  ? void 0
                  : n.result,
              u = null == t ? void 0 : t.viewer,
              p = (function (e) {
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
                isActiveCreator: !l && !(null == u || !u.is_active_creator),
                superFollowsApplicationStatus:
                  (!l && (null == c ? void 0 : c.super_follows_application_status)) || 'NotStarted',
                stripeAccountStatus: (!l && (null == c ? void 0 : c.stripe_account_status)) || 'NotStarted',
              })
            return s.a.createElement(f.a, {
              fetchStatus: Object(_.b)(r, null != o && 'User' === (null == c ? void 0 : c.__typename) && null != u),
              onRequestRetry: i,
              render: function () {
                return null == o || 'User' !== (null == c ? void 0 : c.__typename) || null == u
                  ? null
                  : s.a.createElement(
                      m,
                      null,
                      s.a.createElement(
                        d.a,
                        { initialEntries: [p] },
                        s.a.createElement(
                          d.e,
                          null,
                          s.a.createElement(
                            d.c,
                            { path: '/application' },
                            s.a.createElement(Ut, { user: c, viewer: u }),
                          ),
                          s.a.createElement(d.c, { exact: !0, path: '/submitted' }, s.a.createElement(ko, null)),
                          s.a.createElement(d.c, { exact: !0, path: '/waitlisted' }, s.a.createElement(Co, null)),
                          s.a.createElement(d.c, { exact: !0, path: '/rejected' }, s.a.createElement(wo, null)),
                          s.a.createElement(
                            d.c,
                            { path: '/onboarding' },
                            s.a.createElement(yo, { priceOfferings: o, user: c, viewer: u }),
                          ),
                          s.a.createElement(
                            d.c,
                            { path: '/management' },
                            s.a.createElement(cr, { priceOfferings: o, user: c, viewer: u }),
                          ),
                        ),
                      ),
                    )
              },
              renderFailure: function () {
                return s.a.createElement(Ko.a, { onRetry: i, style: To.error, title: Oo })
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
    oyMe: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksIntroScreen_user',
        selections: [
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
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroCore_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '6815e0555274b6e98491c71a8ea84e62',
      }
      a.default = t
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
    qrhN: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksIntroCore_viewer',
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
        hash: '11ca42b990f6acae3c5d30d3d2cc1035',
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
    yqZQ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmCore_viewer',
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
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '54aff4f18422d9bff7854d6432c65673',
      }
      a.default = t
    },
  },
])
//# sourceMappingURL=WIPED
