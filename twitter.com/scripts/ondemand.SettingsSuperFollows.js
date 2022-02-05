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
        r = n.n(t),
        l = n('ERkP'),
        i = n.n(l),
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
                r()(e, a, n[a])
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
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'benefit_type', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
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
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null }],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingGetStartedScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '503826dc8b64be2554ee40c9e30c6968',
      }
      a.default = t
    },
    '6rkJ': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'f3182a9d2a439a1f08c62269241b3b13',
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
        r = n('ERkP'),
        l = n('Ud88'),
        i = n('K1lQ').commitMutation,
        o = r.useState,
        s = r.useEffect,
        c = r.useRef,
        u = r.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = l(),
          r = d(),
          p = c(n),
          m = c(e),
          g = c(new Set()),
          f = o(!1),
          b = f[0],
          y = f[1],
          _ = u(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), r.current && y(g.current.size > 0))
            },
            [n, r, e],
          )
        s(
          function () {
            ;(p.current === n && m.current === e) ||
              ((g.current = new Set()), r.current && y(!1), (p.current = n), (m.current = e))
          },
          [n, r, e],
        )
        var h = u(
          function (l) {
            var i = a(
              n,
              (0, t.default)(
                (0, t.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, a) {
                    _(i), l.onCompleted && l.onCompleted(e, a)
                  },
                  onError: function (e) {
                    _(i), l.onError && l.onError(e)
                  },
                  onUnsubscribe: function () {
                    _(i), l.onUnsubscribe && l.onUnsubscribe()
                  },
                },
              ),
            )
            return g.current.add(i), r.current && y(!0), i
          },
          [_, a, n, r, e],
        )
        return [h, b]
      }
    },
    AyUU: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r,
        l,
        i,
        o,
        s,
        c = {
          fragment: {
            argumentDefinitions: [
              (t = { defaultValue: null, kind: 'LocalArgument', name: 'category' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'ethnicity' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'gender' }),
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
            argumentDefinitions: [t, i, o, r, l],
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
        r,
        l = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
              { defaultValue: null, kind: 'LocalArgument', name: 'selected_price' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
            selections: (r = [
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
            selections: r,
          },
          params: {
            id: '_97mdj3S3wU106zmC8Wy3A',
            metadata: {},
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = 'c1a6db8f58f9e0b096f1a134ad2ef927'), (a.default = l)
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
        r,
        l,
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
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null }),
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
                              r,
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
                  r,
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
                  r,
                  l,
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
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'benefit_type',
                                        storageKey: null,
                                      },
                                      (c = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'description',
                                        storageKey: null,
                                      }),
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
                  r,
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
                ],
                storageKey: 'super_follows_price_offerings(s:21)',
              },
            ],
          },
          params: {
            id: 'oe_ynsTYnpcghX_F-F-skw',
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
    Th83: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionCore_user',
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
        hash: 'e338a9944e16075e40a5feaceea16b07',
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
        r,
        l = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
            selections: (r = [
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
            selections: r,
          },
          params: {
            id: '8qvi0MQ7inSOKFRwbQIfXg',
            metadata: {},
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = '5f9c7dfac83002ea4ec87405a6e13b8f'), (a.default = l)
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
        r = n.n(t),
        l = n('ERkP'),
        i = n.n(l),
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
        v = _(
          _({}, f.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        w = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            r = e.checked,
            l = e.disabled,
            o = e.helpText,
            s = e.label,
            c = e.name,
            y = e.onChange,
            _ = m.a.generate({
              backgroundColor: f.a.theme.colors.transparent,
              color: r ? f.a.theme.colors.primary : f.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return i.a.createElement(p.a, { disabled: l }, function (e) {
            return i.a.createElement(
              b.a,
              { style: h.root },
              i.a.createElement(
                b.a,
                { accessibilityRole: 'label', style: [h.base, h.border, !l && h.interactive] },
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
                    { disabled: l, interactiveStyles: _, interactivityState: e, style: h.radioBackground },
                    i.a.createElement(
                      b.a,
                      {
                        style: [
                          h.circle,
                          r && h.circleActive,
                          l && h.circleDisabled,
                          r && l && h.circleCheckedAndDisabled,
                        ],
                      },
                      r ? i.a.createElement(d.a, { style: h.checkMark }) : null,
                    ),
                  ),
                  i.a.createElement('input', {
                    'aria-label': a,
                    'aria-posinset': n,
                    'aria-setsize': t,
                    checked: r,
                    disabled: l,
                    name: c,
                    onChange: r ? void 0 : y,
                    style: v,
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
          r()({}, e, {
            renderSelector: function (e) {
              return i.a.createElement(w, r()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    lVTh: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionCore_viewer',
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
        hash: '53177f2bb928696df65f82afeba6a338',
      }
      a.default = t
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
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'benefit_type', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
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
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null }],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '85ad3649df87fa4c477030bc0b1b1181',
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
          return ns
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
          return re
        }),
        n.d(t, 'Clipboard', function () {
          return le
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
          return ve
        }),
        n.d(t, 'Puzzle2x', function () {
          return we
        }),
        n.d(t, 'Puzzle3x', function () {
          return ke
        }),
        n.d(t, 'Thumbsup', function () {
          return Se
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
          return Te
        }),
        n.d(t, 'Uturn3x', function () {
          return Le
        })
      var r,
        l,
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
        v = n('97Jx'),
        w = n.n(v),
        k = n('m3Bd'),
        S = n.n(k),
        F = n('jHSc'),
        E = n('lUZE'),
        C = 'https://help.twitter.com/using-twitter/super-follows-creator',
        x = n('6s7X'),
        K = function () {
          return s.a.createElement(h.a, { icon: s.a.createElement(x.a, null), link: C, type: 'primaryText' })
        },
        O = n('MWbm'),
        T = n('JYMr'),
        L = n('rHpw'),
        P = y.a.a6777c1b,
        D = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            r = e.withCenteredLogo,
            l = e.withInfoButton,
            i = S()(e, [
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
            m = r ? s.a.createElement(E.a, { style: R.iconTwitter }) : void 0,
            f = l ? s.a.createElement(O.a, { style: R.rightControl }, s.a.createElement(K, null), t) : t,
            b = n ? s.a.createElement(T.a, { progress: n }) : void 0
          return s.a.createElement(
            F.b,
            w()({}, i, {
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
        R = L.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        B = y.a.g92a2343,
        A = y.a.a91bb144,
        I = function () {
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
          return s.a.createElement(D, { rightControl: a, title: B })
        },
        V = (n('jQ3i'), n('x4t0'), n('z84I'), n('855f')),
        j = n('t62R'),
        z = n('WtWS'),
        U = n('0ULw'),
        M = function (e) {
          var a = e.items
          return s.a.createElement(
            O.a,
            { style: H.root },
            a.map(function (e) {
              return s.a.createElement(
                O.a,
                { key: e.label, style: H.item },
                s.a.createElement(j.b, { style: H.label, weight: 'bold' }, e.label),
                e.checked
                  ? s.a.createElement(z.a, { style: H.iconChecked })
                  : s.a.createElement(U.a, { style: H.iconUnchecked }),
              )
            }),
          )
        },
        H = L.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        N = function () {
          return s.a.createElement(
            j.b,
            { align: 'center', color: 'gray700' },
            s.a.createElement(
              y.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              s.a.createElement(
                j.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                y.a.ebc0cbbc,
              ),
            ),
          )
        },
        W = n('ddV6'),
        q = n.n(W),
        G =
          (n('Qavd'),
          n('JtPf'),
          n('7x/C'),
          function (e) {
            var a = e.disabled,
              n = e.history,
              t = e.label,
              r = e.onPress,
              l = e.path,
              i = S()(e, ['disabled', 'history', 'label', 'onPress', 'path']),
              o = Object(d.g)(),
              c = s.a.useState(!1),
              u = q()(c, 2),
              p = u[0],
              m = u[1],
              g = function () {
                ;(null != n ? n : o).push(l)
              }
            return s.a.createElement(
              h.a,
              w()({}, i, {
                disabled: p || a,
                onPress: function (e) {
                  r
                    ? (m(!0),
                      r(e)
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
        re = n.p + 'Cat@3x.2b225ef5.png',
        le = n.p + 'Clipboard.540710d5.png',
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
        ve = n.p + 'Puzzle.aa045515.png',
        we = n.p + 'Puzzle@2x.5be7ab15.png',
        ke = n.p + 'Puzzle@3x.1796b225.png',
        Se = n.p + 'Thumbsup.f5be79d5.png',
        Fe = n.p + 'Thumbsup@2x.6d106945.png',
        Ee = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Ce = n.p + 'TrafficLight.11644b65.png',
        xe = n.p + 'TrafficLight@2x.5657de25.png',
        Ke = n.p + 'TrafficLight@3x.a5a35335.png',
        Oe = n.p + 'Uturn.c8267f55.png',
        Te = n.p + 'Uturn@2x.db3f94d5.png',
        Le = n.p + 'Uturn@3x.22f27905.png',
        Pe = n('tn7R'),
        De = n('TIdA'),
        Re = n('A91F'),
        Be = 400,
        Ae = [1, 2, 3],
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
        Ve = Object(Pe.a)(Ie).reduce(function (e, a) {
          var n = Math.max.apply(Math, Ae)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Be * n, height: 250 * n },
              customVariants: Ae.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Be * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        je = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Be : n,
            r = Ve[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            c = { width: t, height: Math.round(t / l) }
          return s.a.createElement(
            O.a,
            { style: [ze.illustration, c] },
            s.a.createElement(De.a, {
              accessibilityLabel: '',
              aspectMode: Re.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        ze = L.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        Ue = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return s.a.createElement(
            s.a.Fragment,
            null,
            t && s.a.createElement(je, { type: t, width: 311 }),
            s.a.createElement(
              j.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && Me.headline,
                weight: 'heavy',
              },
              n,
            ),
            s.a.createElement(j.b, { align: a, color: 'gray700', style: Me.subtext }, r),
          )
        },
        Me = L.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space16 } }
        }),
        He = y.a.feb54b4f,
        Ne = y.a.bac156a6,
        We = y.a.a3a20a10,
        qe = y.a.b26ae507,
        Ge = y.a.a753a87f,
        Qe = y.a.abfaa527,
        Xe = V.a.getTruncatedCount(1e4),
        Je = y.a.fdd95737({ minFollowersCount: Xe }),
        Ze = V.a.getTruncatedCount(25),
        $e = [
          {
            label: Je,
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
            label: y.a.a0dcad86({ minTweetsCount: Ze }),
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
        Ye = void 0 !== r ? r : (r = n('RLjm')),
        ea = function (e) {
          var a = e.user,
            n = X()(Ye, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            r = t ? Ie.Arrow : Ie.TrafficLight,
            l = t ? He : We,
            i = t ? Ne : qe,
            o = $e.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            })
          return s.a.createElement(
            D,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { headline: l, illustration: r, subtext: i }),
            s.a.createElement(M, { items: o }),
            t && s.a.createElement(N, null),
            s.a.createElement(G, { disabled: !t, label: Ge, path: '/application/one_more_thing' }),
            s.a.createElement(G, { label: Qe, path: '/application/one_more_thing' }),
          )
        },
        aa = n('9RkS'),
        na = y.a.bbb89925,
        ta = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = s.a.useState(i),
            c = q()(o, 2),
            u = c[0],
            d = c[1],
            p = Math.round(a * r * (u / 100))
          return s.a.createElement(
            O.a,
            { style: ra.container },
            s.a.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              s.a.createElement(
                y.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                s.a.createElement(j.b, { weight: 'bold' }, y.a.a7dd00ea),
                s.a.createElement(
                  j.b,
                  { style: ra.earnings, weight: 'heavy' },
                  y.a.c62c1d30({ earnings: '$'.concat(V.a.getTruncatedCount(p)) }),
                ),
                s.a.createElement(j.b, { color: 'green500', style: ra.asteriskLeft }, y.a.e0fb982b),
              ),
            ),
            s.a.createElement(
              O.a,
              { style: ra.slider },
              s.a.createElement(aa.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: na({ percent: u }),
                value: u,
              }),
            ),
            s.a.createElement(
              j.b,
              { color: 'green500', size: 'subtext3', style: ra.footnote },
              s.a.createElement(
                y.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                s.a.createElement(j.b, { style: ra.asteriskRight }, y.a.e263c38e),
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
        la = n('6iuV'),
        ia = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        oa = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return s.a.createElement(
            O.a,
            { style: sa.container },
            s.a.createElement(ia.a, { Icon: a, color: 'neutral' }),
            s.a.createElement(j.b, { size: 'headline2', style: sa.title, weight: 'bold' }, t),
            s.a.createElement(j.b, { color: 'gray700', style: sa.description }, n),
          )
        },
        sa = L.a.create(function (e) {
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
        ua = n('witV'),
        da = n('ACHU'),
        pa = [
          { Icon: ca.a, title: y.a.d31c5997, description: y.a.hda1e780 },
          { Icon: ua.a, title: y.a.d08d0bb2, description: y.a.cbd8b105 },
          { Icon: da.a, title: y.a.becb4930, description: y.a.g743ef96 },
        ],
        ma = function () {
          return s.a.createElement(
            la.a,
            null,
            pa.map(function (e) {
              return s.a.createElement(oa, w()({}, e, { key: e.title }))
            }),
          )
        },
        ga = y.a.a6777c1b,
        fa = y.a.j5dc36d7,
        ba = y.a.c45b2f06,
        ya = y.a.hb6b432e,
        _a = y.a.cd5cae15,
        ha = y.a.f7239f4c,
        va = y.a.g8cdf707,
        wa = y.a.bff8472e,
        ka = y.a.e533715d,
        Sa = void 0 !== l ? l : (l = n('xd+q')),
        Fa = function (e) {
          var a = e.user,
            n = X()(Sa, a).legacy.followers_count
          return s.a.createElement(
            D,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            s.a.createElement(
              j.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ga,
            ),
            s.a.createElement(j.b, null, fa),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ba,
            ),
            s.a.createElement(j.b, { color: 'gray700' }, ya),
            s.a.createElement(je, { type: Ie.HandCoins }),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            s.a.createElement(ma, null),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ha,
            ),
            s.a.createElement(ta, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              va,
            ),
            s.a.createElement(j.b, { color: 'gray700' }, wa),
            s.a.createElement(G, { color: 'plum500', label: ka, path: '/application/eligibility' }),
          )
        },
        Ea = y.a.d0fc4890,
        Ca = y.a.c64384b6,
        xa = y.a.c3d89aca,
        Ka = function () {
          return s.a.createElement(
            D,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { align: 'center', headline: Ea, illustration: Ie.OneFinger, subtext: Ca }),
            s.a.createElement(G, { label: xa, path: '/application/complete_profile' }),
          )
        },
        Oa = (n('2G9S'), n('Hsf0')),
        Ta = n.n(Oa),
        La = 'super_follows_application_draft',
        Pa = 'super_follows_onboarding_draft',
        Da = function (e) {
          return Ta()(void 0 !== i ? i : (i = n('PlkH')), e).__id
        },
        Ra = function (e, a) {
          var n = Da(a),
            t = e.get(n)
          return u()(t, 'viewer must be defined'), t
        },
        Ba = function (e, a) {
          return Ra(e, a).getLinkedRecord(La)
        },
        Aa = function (e, a) {
          return Ra(e, a).getLinkedRecord(Pa)
        },
        Ia = n('HG4m'),
        Va = n.n(Ia),
        ja = n('Ud88'),
        za = n.n(ja)
      function Ua(e, a) {
        var n = za()()
        s.a.useEffect(
          function () {
            u()(e, 'viewerRef must be defined'),
              Va()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.content_category,
                    r = void 0 === t ? [] : t,
                    l = n.content_category_other,
                    i = void 0 === l ? null : l,
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
                    y = Da(a),
                    _ = Ra(e, a)
                  if (!Ba(e, a)) {
                    var h = e.create(''.concat(y, ':').concat(La), 'SuperFollowsApplicationDraft')
                    h.setValue(r, 'content_category'),
                      h.setValue(i, 'content_category_other'),
                      h.setValue(s, 'content_creation_platform'),
                      h.setValue(u, 'content_creation_platform_other'),
                      h.setValue(b, 'purpose'),
                      h.setValue(p, 'ethnicity'),
                      h.setValue(g, 'gender'),
                      _.setLinkedRecord(h, La)
                  }
                })(n, e, a)
              })
          },
          [a, n, e],
        )
      }
      function Ma(e, a) {
        var n = za()()
        s.a.useEffect(
          function () {
            u()(e, 'viewerRef must be defined'),
              Va()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.creator_intro,
                    r = void 0 === t ? null : t,
                    l = n.description,
                    i = void 0 === l ? null : l,
                    o = n.selected_price,
                    s = void 0 === o ? null : o,
                    c = Da(a),
                    u = Ra(e, a)
                  if (!Aa(e, a)) {
                    var d = e.create(''.concat(c, ':').concat(Pa), 'SuperFollowsOnboardingDraft')
                    d.setValue(r, 'creator_intro'),
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
      function Ha(e, a) {
        var n = za()()
        return s.a.useCallback(
          function (t) {
            u()(e, 'viewerRef must be defined'),
              Va()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ba(e, a)
                  u()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function Na(e, a) {
        var n = za()()
        return s.a.useCallback(
          function (t) {
            u()(e, 'viewerId must be defined'),
              Va()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Aa(e, a)
                  u()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Wa,
        qa,
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
        rn,
        ln,
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
        vn,
        wn,
        kn,
        Sn,
        Fn,
        En,
        Cn,
        xn,
        Kn,
        On,
        Tn,
        Ln,
        Pn,
        Dn,
        Rn,
        Bn,
        An,
        In,
        Vn = n('p+r5'),
        jn = y.a.f7997b16,
        zn = y.a.fc00ab5b,
        Un = y.a.c249167f,
        Mn = y.a.b772cd65,
        Hn = void 0 !== Wa ? Wa : (Wa = n('xhT1')),
        Nn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(Hn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Ha(r, 'content_category_other')
          return s.a.createElement(
            D,
            { title: jn },
            s.a.createElement(Vn.a, {
              helperText: Un,
              label: zn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            s.a.createElement(h.a, null, Mn),
          )
        },
        Wn = n('fyvP'),
        qn = n('csss'),
        Gn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(d.g)()
          return s.a.createElement(qn.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        Qn = y.a.f7997b16,
        Xn = y.a.c144fa52,
        Jn = [
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
        Zn = y.a.c365dcc5,
        $n = y.a.bd44a8a8,
        Yn = void 0 !== qa ? qa : (qa = n('JB6R')),
        et = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(Yn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Ha(r, 'content_category'),
            o = Jn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            D,
            { title: Qn },
            s.a.createElement(Wn.a, {
              description: Xn,
              label: Xn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            s.a.createElement(Gn, { helpText: $n, label: Zn, path: '/application/submit_categories_other' }),
          )
        },
        at = y.a.d94a9a17,
        nt = y.a.a35394b3,
        tt = [
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
        rt = void 0 !== Ga ? Ga : (Ga = n('H1we')),
        lt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(rt, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Ha(r, 'ethnicity'),
            o = tt.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            D,
            { title: at },
            s.a.createElement(Wn.a, {
              description: nt,
              label: nt,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        it = y.a.a8d0108d,
        ot = y.a.a35394b3,
        st = [
          y.a.de32365f,
          y.a.b6ab31bd,
          y.a.ffc23188,
          y.a.h1cc7091,
          y.a.hca27829,
          y.a.b3af7344,
          y.a.he3f1435,
          y.a.c3c16abb,
        ],
        ct = void 0 !== Qa ? Qa : (Qa = n('VG5i')),
        ut = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(ct, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Ha(r, 'gender'),
            o = st.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            D,
            { title: it },
            s.a.createElement(Wn.a, {
              description: ot,
              label: ot,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        dt = y.a.da8ea7da,
        pt = y.a.d7081f91,
        mt = y.a.j349548f,
        gt = y.a.b772cd65,
        ft = void 0 !== Xa ? Xa : (Xa = n('+OUG')),
        bt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(ft, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Ha(r, 'content_creation_platform_other')
          return s.a.createElement(
            D,
            { title: dt },
            s.a.createElement(Vn.a, {
              helperText: mt,
              label: pt,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            s.a.createElement(h.a, null, gt),
          )
        },
        yt = y.a.da8ea7da,
        _t = y.a.d4062c9a,
        ht = [y.a.a3021317, y.a.eb4a600d, y.a.d4d74bb3, y.a.fc738909, y.a.d8552c1a, y.a.ca07aa46],
        vt = y.a.c365dcc5,
        wt = y.a.bd44a8a8,
        kt = void 0 !== Ja ? Ja : (Ja = n('xnrs')),
        St = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(kt, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Ha(r, 'content_creation_platform'),
            o = ht.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            D,
            { title: yt },
            s.a.createElement(Wn.a, {
              description: _t,
              label: _t,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            s.a.createElement(Gn, { helpText: wt, label: vt, path: '/application/submit_platforms_other' }),
          )
        },
        Ft = (n('tVqn'), n('uFXj'), y.a.f4f4dd6f),
        Et = y.a.f448cbcb,
        Ct = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? Ft : 'optional' === n ? Et : void 0
          return s.a.createElement(
            O.a,
            { style: xt.container },
            s.a.createElement(j.b, { size: 'headline1', weight: 'heavy' }, a),
            r && s.a.createElement(j.b, { color: t, size: 'subtext2', style: xt.subtext }, r),
          )
        },
        xt = L.a.create(function (e) {
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
        Kt = n('jV+4'),
        Ot = n('Xrkv'),
        Tt = n('9SqB'),
        Lt = n.n(Tt),
        Pt = y.a.e873f0ae,
        Dt = y.a.f095a24a,
        Rt = y.a.i5f7b6b8,
        Bt = y.a.d1f6d336,
        At = y.a.f7997b16,
        It = y.a.c144fa52,
        Vt = y.a.f1bf337d,
        jt = y.a.da8ea7da,
        zt = y.a.d4062c9a,
        Ut = y.a.e963d587,
        Mt = y.a.ede0ac3e,
        Ht = y.a.ffb6cb88,
        Nt = y.a.b2159e8e,
        Wt = y.a.feacb49d,
        qt = y.a.je17c987,
        Gt = y.a.d94a9a17,
        Qt = y.a.a8d0108d,
        Xt = y.a.gfc80842,
        Jt = void 0 !== Za ? Za : (Za = n('pLb/')),
        Zt = void 0 !== $a ? $a : ($a = n('3qCL')),
        $t = void 0 !== Ya ? Ya : (Ya = n('AyUU')),
        Yt = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            c = e.user,
            u = e.viewer,
            d = X()(Jt, c),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = X()(Zt, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == g ? void 0 : g.content_category_other) && void 0 !== n ? n : [],
            ),
            b = (null !== (t = null == g ? void 0 : g.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            y = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            _ = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            h = null !== (o = null == g ? void 0 : g.gender) && void 0 !== o ? o : [],
            v = f.length && b.length && y.trim(),
            w = Ha(m, 'purpose'),
            k = Lt()($t),
            S = q()(k, 2),
            F = S[0],
            E = S[1]
          return s.a.createElement(
            D,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { headline: Pt, illustration: Ie.Clipboard, subtext: Dt }),
            s.a.createElement(Ct, { title: Rt }),
            s.a.createElement(j.b, null, Bt),
            p && s.a.createElement(Kt.a, { screenName: p }),
            s.a.createElement(Ct, { title: At, type: 'required' }),
            s.a.createElement(j.b, { color: 'gray700' }, It),
            s.a.createElement(Gn, {
              description: Object(Ot.a)(f, !0),
              label: Vt,
              path: '/application/submit_categories',
            }),
            s.a.createElement(Ct, { title: jt, type: 'required' }),
            s.a.createElement(j.b, { color: 'gray700' }, zt),
            s.a.createElement(Gn, {
              description: Object(Ot.a)(b, !0),
              label: Ut,
              path: '/application/submit_platforms',
            }),
            s.a.createElement(Ct, { title: Mt, type: 'required' }),
            s.a.createElement(Vn.a, {
              helperText: Nt,
              label: Ht,
              name: 'plannedUsage',
              onChange: function (e) {
                w(e.currentTarget.value)
              },
              value: y,
            }),
            s.a.createElement(Ct, { title: Wt, type: 'optional' }),
            s.a.createElement(j.b, { color: 'gray700' }, qt),
            s.a.createElement(Gn, {
              description: Object(Ot.a)(_, !0),
              label: Gt,
              path: '/application/submit_ethnicities',
            }),
            s.a.createElement(Gn, { description: Object(Ot.a)(h, !0), label: Qt, path: '/application/submit_genders' }),
            s.a.createElement(N, null),
            s.a.createElement(G, {
              disabled: !v || E,
              label: Xt,
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
        er = void 0 !== en ? en : (en = n('o/nB')),
        ar = void 0 !== an ? an : (an = n('lZLw')),
        nr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(er, a),
            r = X()(ar, n)
          return (
            Ua(r),
            s.a.createElement(
              d.e,
              null,
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/eligibility' },
                s.a.createElement(ea, { user: t }),
              ),
              s.a.createElement(d.c, { exact: !0, path: '/application/one_more_thing' }, s.a.createElement(Ka, null)),
              s.a.createElement(d.c, { exact: !0, path: '/application/complete_profile' }, s.a.createElement(I, null)),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit' },
                s.a.createElement(Yt, { user: t, viewer: r }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_categories' },
                s.a.createElement(et, { viewer: r }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_categories_other' },
                s.a.createElement(Nn, { viewer: r }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_platforms' },
                s.a.createElement(St, { viewer: r }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_platforms_other' },
                s.a.createElement(bt, { viewer: r }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_ethnicities' },
                s.a.createElement(lt, { viewer: r }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/application/submit_genders' },
                s.a.createElement(ut, { viewer: r }),
              ),
              s.a.createElement(d.c, { path: '/application' }, s.a.createElement(Fa, { user: t })),
            )
          )
        },
        tr = (n('hBpG'), n('ho0z'), n('cHvH')),
        rr = function (e) {
          var a = e.children,
            n = e.style
          return s.a.createElement(
            O.a,
            { style: [or.frame, n] },
            s.a.createElement(
              O.a,
              { style: or.browserBar },
              s.a.createElement(
                O.a,
                { style: or.browserBarButtons },
                s.a.createElement(O.a, { style: or.browserBarButton }),
                s.a.createElement(O.a, { style: or.browserBarButton }),
                s.a.createElement(O.a, { style: or.browserBarButton }),
              ),
              s.a.createElement(
                O.a,
                { style: or.browserBarUrlInputWrapper },
                s.a.createElement(O.a, { style: or.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        lr = function (e) {
          var a = e.children,
            n = e.style
          return s.a.createElement(O.a, { style: n }, s.a.createElement(O.a, { style: or.content }, a))
        },
        ir = function (e) {
          var a = e.children,
            n = e.style
          return Object(tr.b)().windowWidth > L.a.theme.breakpoints.medium
            ? s.a.createElement(rr, { style: n }, s.a.createElement(lr, { style: or.contentWide }, a))
            : s.a.createElement(lr, { style: n }, a)
        },
        or = L.a.create(function (e) {
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
        sr = n('MAc7'),
        cr = function (e, a) {
          var n = e.style,
            t = S()(e, ['style'])
          return s.a.createElement(ir, { style: n }, s.a.createElement(sr.a, w()({}, t, { ref: a })))
        },
        ur = s.a.forwardRef(cr),
        dr = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(tr.b)().windowWidth > L.a.theme.breakpoints.medium ? pr.marginWide : pr.marginNarrow
          return s.a.createElement(O.a, { style: [n, t] }, a)
        },
        pr = L.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        mr = function (e) {
          var a = e.history,
            n = e.label,
            t = e.path,
            r = S()(e, ['history', 'label', 'path']),
            l = Object(d.g)()
          return s.a.createElement(
            j.b,
            w()({}, r, {
              onPress: function () {
                ;(null != a ? a : l).push(t)
              },
              underlineWeight: 'heavy',
              weight: 'bold',
              withUnderline: !0,
            }),
            n,
          )
        },
        gr = y.a.hf6f2913,
        fr = y.a.i859a9d3,
        br = L.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        yr = function (e) {
          var a = e.path,
            n = e.style
          return s.a.createElement(
            O.a,
            { style: [br.root, n] },
            s.a.createElement(j.b, { size: 'headline2', weight: 'heavy' }, gr),
            s.a.createElement(mr, { label: fr, path: a }),
          )
        },
        _r = n('0yYu'),
        hr = y.a.iba08a94,
        vr = y.a.bcb1e4e6,
        wr = void 0 !== nn ? nn : (nn = n('JK1g')),
        kr = void 0 !== tn ? tn : (tn = n('yqZQ')),
        Sr = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = X()(wr, t),
            i = X()(kr, r),
            o = l.legacy,
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
              s.a.createElement(dr, { style: Fr.interstitial }, s.a.createElement(Ue, { headline: hr, subtext: vr })),
              s.a.createElement(_r.a, null),
              s.a.createElement(
                dr,
                { style: Fr.previewCallout },
                s.a.createElement(yr, { path: '/onboarding/perks_intro_examples' }),
              ),
              s.a.createElement(ur, { imageUrl: d, name: c, style: Fr.preview, value: p }),
            )
          )
        },
        Fr = L.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Er = y.a.hf6f2913,
        Cr = void 0 !== rn ? rn : (rn = n('MvEh')),
        xr = void 0 !== ln ? ln : (ln = n('U5ka')),
        Kr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(Cr, a),
            r = X()(xr, n)
          return s.a.createElement(D, { title: Er, withInfoButton: !0 }, s.a.createElement(Sr, { user: t, viewer: r }))
        },
        Or = y.a.j3253319,
        Tr = y.a.h1e80993,
        Lr = y.a.j679dcda,
        Pr = void 0 !== on ? on : (on = n('S3B+')),
        Dr = void 0 !== sn ? sn : (sn = n('qrhN')),
        Rr = function (e, a) {
          var n,
            t,
            r = e.user,
            l = e.viewer,
            i = X()(Pr, r),
            o = X()(Dr, l),
            c = i.legacy,
            d = c.name,
            p = c.profile_image_url_https,
            m =
              null !==
                (n = null === (t = o.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            g = Na(o, 'creator_intro')
          return (
            u()('string' == typeof p, 'imageUrl must be defined'),
            u()('string' == typeof d, 'name must be defined'),
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(dr, { style: Ar.interstitial }, s.a.createElement(Ue, { headline: Or, subtext: Tr })),
              s.a.createElement(
                dr,
                { style: Ar.examplesLink },
                s.a.createElement(mr, { label: Lr, path: '/onboarding/perks_intro_examples' }),
              ),
              s.a.createElement(_r.a, null),
              s.a.createElement(
                dr,
                { style: Ar.previewCallout },
                s.a.createElement(yr, { path: '/onboarding/perks_intro_examples' }),
              ),
              s.a.createElement(ur, {
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                style: Ar.preview,
                value: m,
              }),
            )
          )
        },
        Br = s.a.forwardRef(Rr),
        Ar = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Ir = y.a.cd5cae15,
        Vr = y.a.abd845fd,
        jr = y.a.b772cd65,
        zr = void 0 !== cn ? cn : (cn = n('oyMe')),
        Ur = void 0 !== un ? un : (un = n('RL7R')),
        Mr = void 0 !== dn ? dn : (dn = n('VzX/')),
        Hr = L.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        Nr = function (e) {
          var a,
            n,
            t,
            r = e.user,
            l = e.viewer,
            i = s.a.useRef(),
            o = X()(zr, r),
            c = X()(Ur, l),
            u = null === (a = o.super_follow_creator_benefits) || void 0 === a ? void 0 : a.benefits_data,
            d =
              null !==
                (n = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            p = Lt()(Mr),
            m = q()(p, 2),
            g = m[0],
            f = m[1],
            b = !!d
          return s.a.createElement(
            D,
            { title: Ir },
            s.a.createElement(Br, { ref: i, user: o, viewer: c }),
            s.a.createElement(
              O.a,
              { style: Hr.buttonsWrapper },
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
                Vr,
              ),
              s.a.createElement(G, {
                disabled: !b || f,
                label: jr,
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
        Wr = n('fs1G'),
        qr = n('9VLy'),
        Gr = n('4zmP'),
        Qr = y.a.a6777c1b,
        Xr = y.a.b4a93a91,
        Jr = y.a.c0348963,
        Zr = y.a.d08d0bb2,
        $r = y.a.ea4c3496,
        Yr = y.a.ea92cfe3,
        el = y.a.ia9c37c4,
        al = y.a.hc2c5a8b,
        nl = y.a.be54a312,
        tl = y.a.bc6d85b3,
        rl = y.a.b7bc895e,
        ll = y.a.f3ce76c0,
        il = y.a.e9e3b3f7,
        ol = y.a.a79bf10a,
        sl = y.a.a3932653,
        cl = y.a.a1ef1964,
        ul = y.a.abd845fd,
        dl = y.a.c9f7c195,
        pl = y.a.g5925628,
        ml = y.a.jfb2bf30,
        gl = y.a.a962b5d8,
        fl = y.a.dba12b51,
        bl = void 0 !== pn ? pn : (pn = n('EM6u')),
        yl = void 0 !== mn ? mn : (mn = n('oNwH')),
        _l = void 0 !== gn ? gn : (gn = n('qOMr')),
        hl = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i = e.priceOfferings,
            o = e.user,
            c = e.viewer,
            u = X()(bl, i),
            d = (u.$refType, S()(u, ['$refType'])),
            p = X()(yl, o),
            m = X()(_l, c),
            g = null !== (a = p.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            f = null !== (n = p.legacy.screen_name) && void 0 !== n ? n : void 0,
            b = m.super_follows_onboarding_draft,
            y = null !== (t = null == b ? void 0 : b.creator_intro) && void 0 !== t ? t : '',
            _ = null !== (r = null == b ? void 0 : b.description) && void 0 !== r ? r : '',
            v = null !== (l = null == b ? void 0 : b.selected_price) && void 0 !== l ? l : 'offer2'
          return s.a.createElement(
            D,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            s.a.createElement(
              j.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Qr,
            ),
            s.a.createElement(_r.a, null),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Xr,
            ),
            s.a.createElement(G, { label: cl, path: '/management/perks_confirm', type: 'primaryText' }),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Jr,
            ),
            s.a.createElement(G, { label: ul, path: '/management/perks_intro', type: 'primaryOutlined' }),
            s.a.createElement(j.b, { color: 'gray700' }, y),
            s.a.createElement(qr.a, { imageUrl: g, screenName: f }),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Zr,
            ),
            s.a.createElement(j.b, { color: 'gray700' }, _),
            s.a.createElement(qr.a, { imageUrl: g, screenName: f }),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              $r,
            ),
            s.a.createElement(j.b, { color: 'gray700' }, Yr),
            s.a.createElement(_r.a, null),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              el,
            ),
            s.a.createElement(j.b, { color: 'gray700' }, al),
            s.a.createElement(j.b, { size: 'headline2', weight: 'heavy' }, nl({ price: d[v] })),
            s.a.createElement(Gr.a, { headline: tl, text: rl }),
            s.a.createElement(_r.a, null),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ll,
            ),
            s.a.createElement(j.b, { color: 'gray700' }, il),
            s.a.createElement(h.a, { link: C, type: 'brandOutlined' }, dl),
            s.a.createElement(
              h.a,
              { link: 'https://help.twitter.com/forms/paid-features/superfollows', type: 'brandOutlined' },
              pl,
            ),
            s.a.createElement(_r.a, null),
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ol,
            ),
            s.a.createElement(j.b, { color: 'gray700' }, sl),
            s.a.createElement(h.a, { link: 'https://t.co/jPqvg6tFrDJG', type: 'brandFilled' }, ml),
            s.a.createElement(h.a, { link: 'https://t.co/RL2NN3bEVkes', type: 'brandOutlined' }, gl),
            s.a.createElement(_r.a, null),
            s.a.createElement(h.a, { onPress: Wr.a, type: 'destructiveText' }, fl),
          )
        },
        vl = void 0 !== fn ? fn : (fn = n('MXCg')),
        wl = void 0 !== bn ? bn : (bn = n('mEFY')),
        kl = void 0 !== yn ? yn : (yn = n('d8Sa')),
        Sl = function (e) {
          var a,
            n,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            c = X()(vl, l),
            u = X()(wl, i),
            p = X()(kl, o),
            m = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            g = (
              null !==
                (n =
                  null == u || null === (t = u.super_follow_creator_benefits) || void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== n
                ? n
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          return (
            Ma(p, {
              creator_intro: m,
              description: null == g ? void 0 : g.description,
              selected_price:
                null === (r = u.super_follow_creator_price_metadata) || void 0 === r ? void 0 : r.selected_price,
            }),
            s.a.createElement(
              d.e,
              null,
              s.a.createElement(
                d.c,
                { exact: !0, path: '/management/perks_intro' },
                s.a.createElement(Nr, { user: u, viewer: p }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/management/perks_confirm' },
                s.a.createElement(Kr, { user: u, viewer: p }),
              ),
              s.a.createElement(
                d.c,
                { path: '/management' },
                s.a.createElement(hl, { priceOfferings: c, user: u, viewer: p }),
              ),
            )
          )
        },
        Fl = (n('5BYb'), y.a.b422cb62),
        El = y.a.f08705e0,
        Cl = y.a.e2cd700f,
        xl = y.a.fbfd7397,
        Kl = y.a.c1df579e,
        Ol = [
          {
            label: y.a.d8637c96,
            test: function (e) {
              var a,
                n = null !== (a = e.viewer.super_follows_onboarding_draft) && void 0 !== a ? a : {},
                t = n.creator_intro,
                r = n.description
              return !!t && !!r
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
        Tl = void 0 !== _n ? _n : (_n = n('wQp3')),
        Ll = void 0 !== hn ? hn : (hn = n('tfBr')),
        Pl = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = X()(Tl, n),
            l = X()(Ll, t),
            i = Ol.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: r, viewer: l }) }
            }),
            o = i.some(function (e) {
              return e.checked
            }),
            c = s.a.createElement(G, {
              label: Kl,
              path: '/onboarding/perks_intro',
              size: 'small',
              type: 'primaryFilled',
            })
          return s.a.createElement(
            D,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: c,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            s.a.createElement(
              dr,
              { style: Dl.interstitial },
              s.a.createElement(Ue, {
                headline: o ? Cl : Fl,
                illustration: o ? Ie.Puzzle : Ie.Cat,
                subtext: o ? xl : El,
              }),
            ),
            s.a.createElement(dr, { style: Dl.checks }, s.a.createElement(M, { items: i })),
          )
        },
        Dl = L.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        Rl = y.a.cda6bb6d,
        Bl = y.a.a15b98ec,
        Al = function () {
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(dr, { style: Il.interstitial }, s.a.createElement(Ue, { headline: Rl, subtext: Bl })),
            s.a.createElement(_r.a, null),
            s.a.createElement(
              dr,
              { style: Il.previewCallout },
              s.a.createElement(yr, { path: '/onboarding/perks_intro_examples' }),
            ),
            s.a.createElement(ir, { style: Il.preview }),
          )
        },
        Il = L.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Vl = y.a.cd5cae15,
        jl = y.a.ad4a92a2,
        zl = y.a.c1df579e,
        Ul = function (e) {
          var a = e.percentageComplete,
            n = { label: zl, path: '/onboarding/perks_confirm', type: 'primaryFilled' },
            t = s.a.createElement(G, n),
            r = s.a.createElement(G, w()({}, n, { size: 'small' }))
          return s.a.createElement(
            D,
            { percentageComplete: a, rightControl: r, subtitle: jl, title: Vl },
            s.a.createElement(Al, null),
            s.a.createElement(dr, { style: Ml.buttons }, t),
          )
        },
        Ml = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Hl = y.a.cd5cae15,
        Nl = y.a.e18b7a71,
        Wl = y.a.c1df579e,
        ql = void 0 !== vn ? vn : (vn = n('Rthh')),
        Gl = void 0 !== wn ? wn : (wn = n('aREQ')),
        Ql = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = X()(ql, n),
            l = X()(Gl, t),
            i = { label: Wl, path: '/onboarding/pricing', type: 'primaryFilled' },
            o = s.a.createElement(G, i),
            c = s.a.createElement(G, w()({}, i, { size: 'small' }))
          return s.a.createElement(
            D,
            { percentageComplete: a, rightControl: c, subtitle: Nl, title: Hl },
            s.a.createElement(Sr, { user: r, viewer: l }),
            s.a.createElement(dr, { style: Xl.buttons }, o),
          )
        },
        Xl = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Jl = (n('kH1Z'), n('6U7i'), n('6OUF')),
        Zl = y.a.a329ce87,
        $l = function (e, a) {
          var n = e.imageUrl,
            t = e.onChange,
            r = e.screenName,
            l = e.style,
            i = e.value
          return s.a.createElement(
            O.a,
            { style: [ei.root, l] },
            t
              ? s.a.createElement(Jl.a, {
                  inputStyle: ei.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: t,
                  placeholder: Zl,
                  ref: a,
                  style: ei.description,
                  value: i,
                })
              : s.a.createElement(j.b, { color: 'gray700', style: ei.description }, i),
            s.a.createElement(qr.a, { imageUrl: n, screenName: r, style: [ei.signature, !i && ei.visibilityHidden] }),
          )
        },
        Yl = s.a.forwardRef($l),
        ei = L.a.create(function (e) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'column' },
            description: { borderRadius: 0, borderColor: 'transparent', minHeight: 0, width: '100%' },
            descriptionInput: {
              color: e.colors.gray700,
              minHeight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
            },
            signature: { marginTop: e.spaces.space12 },
            visibilityHidden: { visibility: 'hidden' },
          }
        }),
        ai = y.a.ebfb897c,
        ni = y.a.dc4feb19,
        ti = y.a.c183d271,
        ri = y.a.ic130fd5,
        li = y.a.dd913e24,
        ii = y.a.h580543e,
        oi = function () {
          return s.a.createElement(
            D,
            { title: ai },
            s.a.createElement(dr, { style: si.interstitial }, s.a.createElement(Ue, { headline: ni, subtext: ti })),
            s.a.createElement(
              dr,
              { style: si.exampleDescriptions },
              s.a.createElement(_r.a, null),
              s.a.createElement(Yl, { value: ri }),
              s.a.createElement(_r.a, null),
              s.a.createElement(Yl, { value: li }),
              s.a.createElement(_r.a, null),
              s.a.createElement(Yl, { value: ii }),
            ),
          )
        },
        si = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        ci = n('lD8l'),
        ui = y.a.cbc8ce27,
        di = function (e, a) {
          var n = e.style,
            t = S()(e, ['style']),
            r = Object(tr.b)().windowWidth > L.a.theme.breakpoints.medium
          return s.a.createElement(
            O.a,
            { style: [mi.root, r && mi.rootWide, n] },
            s.a.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ui,
            ),
            s.a.createElement(Yl, w()({}, t, { ref: a, style: mi.description })),
          )
        },
        pi = s.a.forwardRef(di),
        mi = L.a.create(function (e) {
          return {
            root: {
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
            description: { marginTop: e.spaces.space8 },
          }
        }),
        gi = function (e, a) {
          var n = e.style,
            t = S()(e, ['style'])
          return s.a.createElement(
            ir,
            { style: n },
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(pi, w()({}, t, { ref: a })),
              s.a.createElement(ci.a, { style: bi.exclusiveDemoBonusContent }),
            ),
          )
        },
        fi = s.a.forwardRef(gi),
        bi = L.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        yi = y.a.gf32cca1,
        _i = y.a.j8ba99b3,
        hi = y.a.j679dcda,
        vi = void 0 !== kn ? kn : (kn = n('Th83')),
        wi = void 0 !== Sn ? Sn : (Sn = n('lVTh')),
        ki = function (e, a) {
          var n,
            t,
            r = e.user,
            l = e.viewer,
            i = X()(vi, r),
            o = X()(wi, l),
            c = i.legacy,
            d = c.name,
            p = c.profile_image_url_https,
            m =
              null !== (n = null === (t = o.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.description) &&
              void 0 !== n
                ? n
                : '',
            g = Na(o, 'description')
          return (
            u()('string' == typeof p, 'imageUrl must be defined'),
            u()('string' == typeof d, 'name must be defined'),
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(dr, { style: Fi.interstitial }, s.a.createElement(Ue, { headline: yi, subtext: _i })),
              s.a.createElement(
                dr,
                { style: Fi.examplesLink },
                s.a.createElement(mr, { label: hi, path: '/onboarding/perks_description_examples' }),
              ),
              s.a.createElement(_r.a, null),
              s.a.createElement(
                dr,
                { style: Fi.previewCallout },
                s.a.createElement(yr, { path: '/onboarding/perks_description_examples' }),
              ),
              s.a.createElement(fi, {
                imageUrl: p,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                screenName: d,
                style: Fi.preview,
                value: m,
              }),
            )
          )
        },
        Si = s.a.forwardRef(ki),
        Fi = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Ei = y.a.cd5cae15,
        Ci = y.a.e36287c6,
        xi = y.a.be76dc33,
        Ki = y.a.c1df579e,
        Oi = void 0 !== Fn ? Fn : (Fn = n('6rkJ')),
        Ti = void 0 !== En ? En : (En = n('tJ4s')),
        Li = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = s.a.useRef(),
            o = X()(Ti, l),
            c = X()(Oi, r),
            u = !!(null !==
              (a = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
            void 0 !== a
              ? a
              : ''),
            d = { disabled: !u, label: Ki, path: '/onboarding/perks_badges', type: 'primaryFilled' },
            p = s.a.createElement(G, d),
            m = s.a.createElement(G, w()({}, d, { size: 'small' })),
            g = {
              children: xi,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = s.a.createElement(h.a, g),
            b = s.a.createElement(h.a, w()({}, g, { size: 'small' }))
          return s.a.createElement(
            D,
            { percentageComplete: t, rightControl: u ? m : b, subtitle: Ci, title: Ei },
            s.a.createElement(Si, { ref: i, user: c, viewer: o }),
            s.a.createElement(dr, { style: Pi.buttons }, u ? p : f),
          )
        },
        Pi = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Di = n('JWc1'),
        Ri = y.a.ebfb897c,
        Bi = y.a.dc4feb19,
        Ai = y.a.a0bb2076,
        Ii = y.a.ace46d40,
        Vi = y.a.h2c4511f,
        ji = y.a.hbe4f99e,
        zi = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        Ui = function () {
          return s.a.createElement(
            D,
            { title: Ri },
            s.a.createElement(dr, { style: zi.interstitial }, s.a.createElement(Ue, { headline: Bi, subtext: Ai })),
            s.a.createElement(
              dr,
              { style: zi.exampleIntros },
              s.a.createElement(Di.a, { value: Ii }),
              s.a.createElement(Di.a, { value: Vi }),
              s.a.createElement(Di.a, { value: ji }),
            ),
          )
        },
        Mi = y.a.cd5cae15,
        Hi = y.a.c0348963,
        Ni = y.a.ef5406e3,
        Wi = y.a.c1df579e,
        qi = void 0 !== Cn ? Cn : (Cn = n('02qo')),
        Gi = void 0 !== xn ? xn : (xn = n('TXsE')),
        Qi = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = s.a.useRef(),
            o = X()(qi, r),
            c = X()(Gi, l),
            u = !!(null !==
              (a = null === (n = c.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
            void 0 !== a
              ? a
              : ''),
            d = { disabled: !u, label: Wi, path: '/onboarding/perks_description', type: 'primaryFilled' },
            p = s.a.createElement(G, d),
            m = s.a.createElement(G, w()({}, d, { size: 'small' })),
            g = {
              children: Ni,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = s.a.createElement(h.a, g),
            b = s.a.createElement(h.a, w()({}, g, { size: 'small' }))
          return s.a.createElement(
            D,
            { percentageComplete: t, rightControl: u ? m : b, subtitle: Hi, title: Mi },
            s.a.createElement(Br, { ref: i, user: o, viewer: c }),
            s.a.createElement(dr, { style: Xi.buttons }, u ? p : f),
          )
        },
        Xi = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Ji = y.a.ea8a3d2d,
        Zi = y.a.f77bb178,
        $i = y.a.cd75a5d4,
        Yi = y.a.g9677c6d,
        eo = y.a.abd845fd,
        ao = void 0 !== Kn ? Kn : (Kn = n('IeZm')),
        no = void 0 !== On ? On : (On = n('7ESn')),
        to = void 0 !== Tn ? Tn : (Tn = n('By/j')),
        ro = function (e) {
          var a,
            n,
            t,
            r = e.percentageComplete,
            l = e.priceOfferings,
            i = e.viewer,
            o = X()(ao, l),
            c = (o.$refType, S()(o, ['$refType'])),
            u = X()(no, i).super_follows_onboarding_draft,
            d = null !== (a = null == u ? void 0 : u.creator_intro) && void 0 !== a ? a : '',
            p = null !== (n = null == u ? void 0 : u.description) && void 0 !== n ? n : '',
            m = null !== (t = null == u ? void 0 : u.selected_price) && void 0 !== t ? t : c[0],
            g = Lt()(to),
            f = q()(g, 2),
            b = f[0],
            y = f[1]
          return s.a.createElement(
            D,
            { percentageComplete: r, title: Ji, withInfoButton: !0 },
            s.a.createElement(
              dr,
              { style: lo.interstitial },
              s.a.createElement(Ue, { headline: Zi({ price: c[m] }), subtext: $i }),
            ),
            s.a.createElement(
              dr,
              { style: lo.buttons },
              s.a.createElement(G, {
                disabled: y,
                label: Yi,
                onPress: function () {
                  return new Promise(function (e, a) {
                    b({
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
                type: 'primaryFilled',
              }),
              s.a.createElement(G, { disabled: y, label: eo, path: '/onboarding/pricing', type: 'primaryOutlined' }),
            ),
          )
        },
        lo = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        io = (n('+KXO'), n('7xRU'), n('hznd')),
        oo = y.a.ea8a3d2d,
        so = y.a.ic9124bf,
        co = y.a.g5923869,
        uo = {
          offer1: [y.a.f025ab39, y.a.c5602dfd],
          offer2: [y.a.ib075804, y.a.j8a72f06],
          offer3: [y.a.c246656e, y.a.a92ab16c],
        },
        po = y.a.c1df579e,
        mo = void 0 !== Ln ? Ln : (Ln = n('5jO1')),
        go = void 0 !== Pn ? Pn : (Pn = n('mKqc')),
        fo = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = X()(mo, n),
            l = (r.$refType, S()(r, ['$refType'])),
            i = X()(go, t),
            o = i.super_follows_onboarding_draft,
            c = null == o ? void 0 : o.selected_price,
            u = Na(i, 'selected_price'),
            d = s.a.createElement(
              y.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              s.a.createElement(j.b, { link: C }, y.a.c336b06a),
            ),
            p = Object.keys(l).map(function (e) {
              return { label: co({ price: l[e] }), value: e, helpText: uo[e].join(' ') }
            }),
            m = s.a.createElement(G, {
              disabled: !c,
              label: po,
              path: '/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return s.a.createElement(
            D,
            { percentageComplete: a, rightControl: m, title: oo, withInfoButton: !0 },
            s.a.createElement(dr, { style: bo.interstitial }, s.a.createElement(Ue, { headline: so, subtext: d })),
            s.a.createElement(
              dr,
              { style: bo.prices },
              s.a.createElement(io.a, {
                accessibilityLabel: so,
                name: 'selectedPrice',
                onChange: function (e, a) {
                  u(a)
                },
                options: p,
                value: c,
              }),
            ),
          )
        },
        bo = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        yo = y.a.f1cb36b8,
        _o = y.a.e20f6661,
        ho = y.a.a9ee1ecc,
        vo = y.a.b772cd65,
        wo = function (e) {
          var a = e.percentageComplete,
            n = g()
          return s.a.createElement(
            D,
            { leftControlShouldClose: !0, percentageComplete: a, title: yo, withInfoButton: !0 },
            s.a.createElement(
              dr,
              { style: ko.interstitial },
              s.a.createElement(Ue, { headline: _o, illustration: Ie.Thumbsup, subtext: ho }),
            ),
            s.a.createElement(
              dr,
              { style: ko.buttons },
              s.a.createElement(G, { history: n, label: vo, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        ko = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        So = y.a.e2cd700f,
        Fo = y.a.d6bfb60c,
        Eo = y.a.b9cbb370,
        Co = function () {
          return s.a.createElement(
            D,
            { withInfoButton: !0 },
            s.a.createElement(Ue, { headline: So, illustration: Ie.Puzzle, subtext: Fo }),
            s.a.createElement(G, { label: Eo, path: '/onboarding/stripe_setup' }),
          )
        },
        xo = n('8jkQ'),
        Ko = y.a.f1cb36b8,
        Oo = y.a.ja884230,
        To = y.a.af1b808d,
        Lo = y.a.fe339750,
        Po = y.a.j912510a,
        Do = void 0 !== Dn ? Dn : (Dn = n('xHLM')),
        Ro = function (e) {
          var a = e.percentageComplete,
            n = Lt()(Do),
            t = q()(n, 2),
            r = t[0],
            l = t[1],
            i = function () {
              r({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && xo.b.navigateTo(n)
                },
              })
            }
          return s.a.createElement(
            D,
            { percentageComplete: a, title: Ko, withInfoButton: !0 },
            s.a.createElement(
              dr,
              { style: Bo.interstitial },
              s.a.createElement(Ue, { headline: Oo, illustration: Ie.CoinStairs, subtext: To }),
            ),
            s.a.createElement(
              dr,
              { style: Bo.buttons },
              s.a.createElement(h.a, { disabled: l, onPress: i, type: 'primaryFilled' }, Lo),
              s.a.createElement(h.a, { disabled: l, onPress: i, type: 'primaryOutlined' }, Po),
            ),
          )
        },
        Bo = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Ao = void 0 !== Rn ? Rn : (Rn = n('UNVS')),
        Io = void 0 !== Bn ? Bn : (Bn = n('6byF')),
        Vo = void 0 !== An ? An : (An = n('dNhZ')),
        jo = function (e) {
          return e / 8
        },
        zo = function (e) {
          var a,
            n,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            c = X()(Ao, l),
            u = X()(Io, i),
            p = X()(Vo, o),
            m = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            g = (
              null !==
                (n =
                  null == u || null === (t = u.super_follow_creator_benefits) || void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== n
                ? n
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          return (
            Ma(p, {
              creator_intro: m,
              description: null == g ? void 0 : g.description,
              selected_price:
                null === (r = u.super_follow_creator_price_metadata) || void 0 === r ? void 0 : r.selected_price,
            }),
            s.a.createElement(
              d.e,
              null,
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_intro' },
                s.a.createElement(Qi, { percentageComplete: jo(1), user: u, viewer: p }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_intro_examples' },
                s.a.createElement(Ui, null),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_description' },
                s.a.createElement(Li, { percentageComplete: jo(2), user: u, viewer: p }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_description_examples' },
                s.a.createElement(oi, null),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_badges' },
                s.a.createElement(Ul, { percentageComplete: jo(3) }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/perks_confirm' },
                s.a.createElement(Ql, { percentageComplete: jo(4), user: u, viewer: p }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/pricing' },
                s.a.createElement(fo, { percentageComplete: jo(5), priceOfferings: c, viewer: p }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/pricing_confirm' },
                s.a.createElement(ro, { percentageComplete: jo(6), priceOfferings: c, viewer: p }),
              ),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/stripe_setup' },
                s.a.createElement(Ro, { percentageComplete: jo(7) }),
              ),
              s.a.createElement(d.c, { exact: !0, path: '/onboarding/stripe_incomplete' }, s.a.createElement(Co, null)),
              s.a.createElement(
                d.c,
                { exact: !0, path: '/onboarding/stripe_completed' },
                s.a.createElement(wo, { percentageComplete: jo(8) }),
              ),
              s.a.createElement(
                d.c,
                { path: '/onboarding' },
                s.a.createElement(Pl, { percentageComplete: jo(0), user: u, viewer: p }),
              ),
            )
          )
        },
        Uo = y.a.aa7e35ed,
        Mo = y.a.f67e69bf,
        Ho = function () {
          return s.a.createElement(
            D,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(
              dr,
              { style: No.interstitial },
              s.a.createElement(Ue, { headline: Uo, illustration: Ie.Uturn, subtext: Mo }),
            ),
          )
        },
        No = L.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Wo = y.a.d3d6c52c,
        qo = y.a.c53e9129,
        Go = function () {
          return s.a.createElement(
            D,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            s.a.createElement(
              dr,
              { style: Qo.interstitial },
              s.a.createElement(Ue, { headline: Wo, illustration: Ie.PaperAirplane, subtext: qo }),
            ),
          )
        },
        Qo = L.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Xo = y.a.j274e6aa,
        Jo = y.a.d7f65127,
        Zo = function () {
          return s.a.createElement(
            D,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(
              dr,
              { style: $o.interstitial },
              s.a.createElement(Ue, { headline: Xo, illustration: Ie.Bench, subtext: Jo }),
            ),
          )
        },
        $o = L.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Yo = n('n0Rl'),
        es = n('q9Zt'),
        as = y.a.hae1c933,
        ns = void 0 !== In ? In : (In = n('G8I5')),
        ts = Object(Yo.b)(ns, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        rs = L.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return s.a.createElement(ts, {
          render: function (e) {
            var a,
              n,
              t = e.data,
              r = e.error,
              l = e.fetchStatus,
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
                isActiveCreator: !r && !(null == u || !u.is_active_creator),
                superFollowsApplicationStatus:
                  (!r && (null == c ? void 0 : c.super_follows_application_status)) || 'NotStarted',
                stripeAccountStatus: (!r && (null == c ? void 0 : c.stripe_account_status)) || 'NotStarted',
              })
            return s.a.createElement(f.a, {
              fetchStatus: Object(_.b)(l, null != o && 'User' === (null == c ? void 0 : c.__typename) && null != u),
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
                            s.a.createElement(nr, { user: c, viewer: u }),
                          ),
                          s.a.createElement(d.c, { exact: !0, path: '/submitted' }, s.a.createElement(Go, null)),
                          s.a.createElement(d.c, { exact: !0, path: '/waitlisted' }, s.a.createElement(Zo, null)),
                          s.a.createElement(d.c, { exact: !0, path: '/rejected' }, s.a.createElement(Ho, null)),
                          s.a.createElement(
                            d.c,
                            { path: '/onboarding' },
                            s.a.createElement(zo, { priceOfferings: o, user: c, viewer: u }),
                          ),
                          s.a.createElement(
                            d.c,
                            { path: '/management' },
                            s.a.createElement(Sl, { priceOfferings: o, user: c, viewer: u }),
                          ),
                        ),
                      ),
                    )
              },
              renderFailure: function () {
                return s.a.createElement(es.a, { onRetry: i, style: rs.error, title: as })
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
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '2d06deed679112f45baf7c4342ba484e',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionCore_viewer' },
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
        hash: '3d3372c54b0649c12cf9cfe8f72330be',
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
        r = {
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
      ;(r.hash = '8e42f33fe72435124b83c69d58590c08'), (a.default = r)
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
