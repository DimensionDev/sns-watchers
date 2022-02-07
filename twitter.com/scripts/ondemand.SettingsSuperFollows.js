;(window.webpackJsonp = window.webpackJsonp || []).push([
  [233],
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
      var t = n('yiKp'),
        l = n.n(t),
        r = n('ERkP'),
        i = n.n(r),
        s = n('Lsrn'),
        o = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      ;(c.metadata = { width: 24, height: 24 }), (a.a = c)
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
    '5emT': function (e, a, n) {
      'use strict'
      var t = n('yiKp'),
        l = n.n(t),
        r = n('ERkP'),
        i = n.n(r),
        s = n('Lsrn'),
        o = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              i.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (a.a = c)
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
        l = n('ERkP'),
        r = n('Ud88'),
        i = n('K1lQ').commitMutation,
        s = l.useState,
        o = l.useEffect,
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
          f = s(!1),
          b = f[0],
          y = f[1],
          h = u(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), l.current && y(g.current.size > 0))
            },
            [n, l, e],
          )
        o(
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
        s,
        o,
        c = {
          fragment: {
            argumentDefinitions: [
              (t = { defaultValue: null, kind: 'LocalArgument', name: 'category' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'ethnicity' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'gender' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'platform' }),
              (s = { defaultValue: null, kind: 'LocalArgument', name: 'purpose' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            selections: (o = [
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
            argumentDefinitions: [t, i, s, l, r],
            kind: 'Operation',
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            selections: o,
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
                  { kind: 'Literal', name: 's', value: 22 },
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
        s,
        o = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (t = [{ kind: 'Literal', name: 's', value: 22 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                            selections: [l, { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_user' }],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_viewer' },
                ],
                storageKey: 'viewer_v2(s:22)',
              },
              {
                alias: null,
                args: t,
                concreteType: 'SuperFollowsPriceOfferings',
                kind: 'LinkedField',
                name: 'super_follows_price_offerings',
                plural: !1,
                selections: [l, { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_priceOfferings' }],
                storageKey: 'super_follows_price_offerings(s:22)',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null },
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
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'stripe_account_status',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_follows_application_status',
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
                                  (r = {
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
                                      (i = {
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
                                  (s = {
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
                        selections: [r, i, s],
                        storageKey: null,
                      },
                    ],
                  },
                ],
                storageKey: 'viewer_v2(s:22)',
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
                storageKey: 'super_follows_price_offerings(s:22)',
              },
            ],
          },
          params: {
            id: 'RIZTrnplE4rdTVsL6KmV_Q',
            metadata: {},
            name: 'SuperFollowsSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '59ab5118b2247c2e05bcaf23a5f58cf4'), (a.default = o)
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
        s = n('BedV'),
        o = n('yiKp'),
        c = n.n(o),
        u = (n('ho0z'), n('t62R')),
        d = n('IMYl'),
        p = n('py1r'),
        m = n('I4+6'),
        g = n('cm6r'),
        f = n('rHpw'),
        b = n('MWbm'),
        y = f.a.create(function (e) {
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
        h = c()(
          c()({}, f.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        _ = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            l = e.checked,
            r = e.disabled,
            s = e.helpText,
            o = e.label,
            c = e.name,
            _ = e.onChange,
            w = m.a.generate({
              backgroundColor: f.a.theme.colors.transparent,
              color: l ? f.a.theme.colors.primary : f.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return i.a.createElement(p.a, { disabled: r }, function (e) {
            return i.a.createElement(
              b.a,
              { style: y.root },
              i.a.createElement(
                b.a,
                { accessibilityRole: 'label', style: [y.base, y.border, !r && y.interactive] },
                i.a.createElement(
                  b.a,
                  { style: y.textContainer },
                  i.a.createElement(u.b, { weight: 'bold' }, o),
                  s && i.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: y.helpText }, s),
                ),
                i.a.createElement(
                  b.a,
                  { style: y.radioContainer },
                  i.a.createElement(
                    g.a,
                    { disabled: r, interactiveStyles: w, interactivityState: e, style: y.radioBackground },
                    i.a.createElement(
                      b.a,
                      {
                        style: [
                          y.circle,
                          l && y.circleActive,
                          r && y.circleDisabled,
                          l && r && y.circleCheckedAndDisabled,
                        ],
                      },
                      l ? i.a.createElement(d.a, { style: y.checkMark }) : null,
                    ),
                  ),
                  i.a.createElement('input', {
                    'aria-label': a,
                    'aria-posinset': n,
                    'aria-setsize': t,
                    checked: l,
                    disabled: r,
                    name: c,
                    onChange: l ? void 0 : _,
                    style: h,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      a.a = function (e) {
        return i.a.createElement(
          s.a,
          l()({}, e, {
            renderSelector: function (e) {
              return i.a.createElement(_, l()({}, e, { key: e.value }))
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
          return To
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return Q
        }),
        n.d(t, 'Arrow2x', function () {
          return X
        }),
        n.d(t, 'Arrow3x', function () {
          return J
        }),
        n.d(t, 'Bench', function () {
          return Z
        }),
        n.d(t, 'Bench2x', function () {
          return $
        }),
        n.d(t, 'Bench3x', function () {
          return Y
        }),
        n.d(t, 'Cat', function () {
          return ee
        }),
        n.d(t, 'Cat2x', function () {
          return ae
        }),
        n.d(t, 'Cat3x', function () {
          return ne
        }),
        n.d(t, 'Clipboard', function () {
          return te
        }),
        n.d(t, 'Clipboard2x', function () {
          return le
        }),
        n.d(t, 'Clipboard3x', function () {
          return re
        }),
        n.d(t, 'CoinStairs', function () {
          return ie
        }),
        n.d(t, 'CoinStairs2x', function () {
          return se
        }),
        n.d(t, 'CoinStairs3x', function () {
          return oe
        }),
        n.d(t, 'HandCoins', function () {
          return ce
        }),
        n.d(t, 'HandCoins2x', function () {
          return ue
        }),
        n.d(t, 'HandCoins3x', function () {
          return de
        }),
        n.d(t, 'OneFinger', function () {
          return pe
        }),
        n.d(t, 'OneFinger2x', function () {
          return me
        }),
        n.d(t, 'OneFinger3x', function () {
          return ge
        }),
        n.d(t, 'PaperAirplane', function () {
          return fe
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return be
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return ye
        }),
        n.d(t, 'Pricing', function () {
          return he
        }),
        n.d(t, 'Pricing2x', function () {
          return _e
        }),
        n.d(t, 'Pricing3x', function () {
          return we
        }),
        n.d(t, 'Puzzle', function () {
          return ve
        }),
        n.d(t, 'Puzzle2x', function () {
          return Se
        }),
        n.d(t, 'Puzzle3x', function () {
          return ke
        }),
        n.d(t, 'Thumbsup', function () {
          return Fe
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Ee
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Ce
        }),
        n.d(t, 'TrafficLight', function () {
          return xe
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Ke
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Te
        }),
        n.d(t, 'Uturn', function () {
          return Le
        }),
        n.d(t, 'Uturn2x', function () {
          return Oe
        }),
        n.d(t, 'Uturn3x', function () {
          return Pe
        })
      var l,
        r,
        i,
        s = n('ERkP'),
        o = n.n(s),
        c = n('v//M'),
        u = (n('enFi'), n('3XMw')),
        d = n.n(u),
        p = n('kGix'),
        m = n('97Jx'),
        g = n.n(m),
        f = n('m3Bd'),
        b = n.n(f),
        y = n('jHSc'),
        h = n('lUZE'),
        _ = n('/yvb'),
        w = 'https://help.twitter.com/using-twitter/super-follows-creator',
        v = n('6s7X'),
        S = function () {
          return o.a.createElement(_.a, { icon: o.a.createElement(v.a, null), link: w, type: 'primaryText' })
        },
        k = n('zCf4'),
        F = n('MWbm'),
        E = n('JYMr'),
        C = n('rHpw'),
        x = ['leftControlShouldClose', 'percentageComplete', 'rightControl', 'withCenteredLogo', 'withInfoButton'],
        K = d.a.a6777c1b,
        T = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            l = e.withCenteredLogo,
            r = e.withInfoButton,
            i = b()(e, x),
            s = Object(k.f)(),
            c = a ? 'close' : 'back',
            u = a ? '/settings/monetization' : void 0,
            d = l ? o.a.createElement(h.a, { style: L.iconTwitter }) : void 0,
            p = r ? o.a.createElement(F.a, { style: L.rightControl }, o.a.createElement(S, null), t) : t,
            m = n ? o.a.createElement(E.a, { progress: n }) : void 0
          return o.a.createElement(
            y.b,
            g()({}, i, {
              backButtonType: c,
              backLocation: u,
              centeredLogo: d,
              documentTitle: K,
              onBackClick: function () {
                a ? s.push('/settings/monetization') : s.goBack()
              },
              rightControl: p,
              secondaryBar: m,
            }),
          )
        },
        L = C.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        O = n('5FtR'),
        P = d.a.g92a2343,
        I = d.a.a91bb144,
        D = function () {
          var e = Object(k.f)(),
            a = o.a.createElement(
              _.a,
              {
                onPress: function () {
                  e.push('/settings/superfollows/application/submit')
                },
                type: 'primaryFilled',
              },
              I,
            )
          return o.a.createElement(T, { rightControl: a, title: P })
        },
        R = (n('jQ3i'), n('x4t0'), n('z84I'), n('KqXw'), n('3uku'), n('855f')),
        B = n('t62R'),
        V = n('WtWS'),
        A = n('0ULw'),
        z = function (e) {
          var a = e.items
          return o.a.createElement(
            F.a,
            { style: U.root },
            a.map(function (e) {
              return o.a.createElement(
                F.a,
                { key: e.label, style: U.item },
                o.a.createElement(B.b, { style: U.label, weight: 'bold' }, e.label),
                e.checked
                  ? o.a.createElement(V.a, { style: U.iconChecked })
                  : o.a.createElement(A.a, { style: U.iconUnchecked }),
              )
            }),
          )
        },
        U = C.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        M = function () {
          return o.a.createElement(
            B.b,
            { align: 'center', color: 'gray700' },
            o.a.createElement(
              d.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              o.a.createElement(
                B.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                d.a.ebc0cbbc,
              ),
            ),
          )
        },
        H = n('ddV6'),
        j = n.n(H),
        W = (n('7x/C'), n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        N = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            l = e.path,
            r = b()(e, W),
            i = Object(k.f)(),
            s = o.a.useState(!1),
            c = j()(s, 2),
            u = c[0],
            d = c[1],
            p = function () {
              i.push(l)
            }
          return o.a.createElement(
            _.a,
            g()({}, r, {
              disabled: u || a,
              onPress: function (e) {
                t
                  ? (d(!0),
                    t(e)
                      .then(p)
                      .finally(function () {
                        return d(!1)
                      }))
                  : p()
              },
            }),
            n,
          )
        },
        q = n('jAXQ'),
        G = n.n(q),
        Q = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        X = n.p + 'Arrow@2x.8af675c5.png',
        J = n.p + 'Arrow@3x.949d4365.png',
        Z = n.p + 'Bench.ed26a435.png',
        $ = n.p + 'Bench@2x.ef9fb7d5.png',
        Y = n.p + 'Bench@3x.a306fd55.png',
        ee = n.p + 'Cat.089435a5.png',
        ae = n.p + 'Cat@2x.bca70155.png',
        ne = n.p + 'Cat@3x.2b225ef5.png',
        te = n.p + 'Clipboard.540710d5.png',
        le = n.p + 'Clipboard@2x.72ca72e5.png',
        re = n.p + 'Clipboard@3x.1b952e95.png',
        ie = n.p + 'CoinStairs.8488b245.png',
        se = n.p + 'CoinStairs@2x.34fd5855.png',
        oe = n.p + 'CoinStairs@3x.1b706305.png',
        ce = n.p + 'HandCoins.fbd23965.png',
        ue = n.p + 'HandCoins@2x.c1b62b75.png',
        de = n.p + 'HandCoins@3x.7dd5f3d5.png',
        pe = n.p + 'OneFinger.6eb5d9c5.png',
        me = n.p + 'OneFinger@2x.a13e1ba5.png',
        ge = n.p + 'OneFinger@3x.7f22c175.png',
        fe = n.p + 'PaperAirplane.1ef48a05.png',
        be = n.p + 'PaperAirplane@2x.2923eb15.png',
        ye = n.p + 'PaperAirplane@3x.47e4b145.png',
        he = n.p + 'Pricing.ec5962d5.png',
        _e = n.p + 'Pricing@2x.f8284265.png',
        we = n.p + 'Pricing@3x.b6cf0185.png',
        ve = n.p + 'Puzzle.aa045515.png',
        Se = n.p + 'Puzzle@2x.5be7ab15.png',
        ke = n.p + 'Puzzle@3x.1796b225.png',
        Fe = n.p + 'Thumbsup.f5be79d5.png',
        Ee = n.p + 'Thumbsup@2x.6d106945.png',
        Ce = n.p + 'Thumbsup@3x.6a81e6d5.png',
        xe = n.p + 'TrafficLight.11644b65.png',
        Ke = n.p + 'TrafficLight@2x.5657de25.png',
        Te = n.p + 'TrafficLight@3x.a5a35335.png',
        Le = n.p + 'Uturn.c8267f55.png',
        Oe = n.p + 'Uturn@2x.db3f94d5.png',
        Pe = n.p + 'Uturn@3x.22f27905.png',
        Ie = n('tn7R'),
        De = n('TIdA'),
        Re = n('A91F'),
        Be = 400,
        Ve = [1, 2, 3],
        Ae = Object.freeze({
          Arrow: 'Arrow',
          Bench: 'Bench',
          Cat: 'Cat',
          Clipboard: 'Clipboard',
          CoinStairs: 'CoinStairs',
          HandCoins: 'HandCoins',
          OneFinger: 'OneFinger',
          PaperAirplane: 'PaperAirplane',
          Pricing: 'Pricing',
          Puzzle: 'Puzzle',
          Thumbsup: 'Thumbsup',
          TrafficLight: 'TrafficLight',
          Uturn: 'Uturn',
        }),
        ze = Object(Ie.a)(Ae).reduce(function (e, a) {
          var n = Math.max.apply(Math, Ve)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Be * n, height: 250 * n },
              customVariants: Ve.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Be * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        Ue = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Be : n,
            l = ze[a],
            r = l.aspectRatio,
            i = l.customVariants,
            s = l.image,
            c = { width: t, height: Math.round(t / r) }
          return o.a.createElement(
            F.a,
            { style: [Me.illustration, c] },
            o.a.createElement(De.a, {
              accessibilityLabel: '',
              aspectMode: Re.a.exact(r),
              customVariants: i,
              draggable: !1,
              image: s,
            }),
          )
        },
        Me = C.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        He = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            l = e.subtext
          return o.a.createElement(
            o.a.Fragment,
            null,
            t && o.a.createElement(Ue, { type: t, width: 311 }),
            o.a.createElement(
              B.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && je.headline,
                weight: 'heavy',
              },
              n,
            ),
            o.a.createElement(B.b, { align: a, color: 'gray700', style: je.subtext }, l),
          )
        },
        je = C.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space16 } }
        }),
        We = d.a.feb54b4f,
        Ne = d.a.bac156a6,
        qe = d.a.a3a20a10,
        Ge = d.a.b26ae507,
        Qe = d.a.a753a87f,
        Xe = d.a.abfaa527,
        Je = R.a.getTruncatedCount(1e4),
        Ze = d.a.fdd95737({ minFollowersCount: Je }),
        $e = R.a.getTruncatedCount(25),
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
            label: d.a.a0dcad86({ minTweetsCount: $e }),
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
            label: d.a.c27f57ac,
            test: function (e) {
              var a
              return !(null != e && null !== (a = e.super_following_eligibility) && void 0 !== a && a.includes('age'))
            },
          },
        ],
        ea = void 0 !== l ? l : (l = n('RLjm')),
        aa = function (e) {
          var a = e.user,
            n = G()(ea, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            l = t ? Ae.Arrow : Ae.TrafficLight,
            r = t ? We : qe,
            i = t ? Ne : Ge,
            s = Ye.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            })
          return o.a.createElement(
            T,
            { withInfoButton: !0 },
            o.a.createElement(He, { headline: r, illustration: l, subtext: i }),
            o.a.createElement(z, { items: s }),
            t && o.a.createElement(M, null),
            o.a.createElement(N, {
              disabled: !t,
              label: Qe,
              path: '/settings/superfollows/application/one_more_thing',
            }),
            o.a.createElement(N, { label: Xe, path: '/settings/superfollows/application/one_more_thing' }),
          )
        },
        na = n('9RkS'),
        ta = d.a.bbb89925,
        la = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            l = e.price,
            r = e.step,
            i = e.value,
            s = o.a.useState(i),
            c = j()(s, 2),
            u = c[0],
            p = c[1],
            m = Math.round(a * l * (u / 100))
          return o.a.createElement(
            F.a,
            { style: ra.container },
            o.a.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              o.a.createElement(
                d.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                o.a.createElement(B.b, { weight: 'bold' }, d.a.a7dd00ea),
                o.a.createElement(
                  B.b,
                  { style: ra.earnings, weight: 'heavy' },
                  d.a.c62c1d30({ earnings: '$'.concat(R.a.getTruncatedCount(m)) }),
                ),
                o.a.createElement(B.b, { color: 'green500', style: ra.asteriskLeft }, d.a.e0fb982b),
              ),
            ),
            o.a.createElement(
              F.a,
              { style: ra.slider },
              o.a.createElement(na.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: p,
                step: r,
                thumbLabel: ta({ percent: u }),
                value: u,
              }),
            ),
            o.a.createElement(
              B.b,
              { color: 'green500', size: 'subtext3', style: ra.footnote },
              o.a.createElement(
                d.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(l) },
                o.a.createElement(B.b, { style: ra.asteriskRight }, d.a.e263c38e),
              ),
            ),
          )
        },
        ra = C.a.create(function (e) {
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
        sa = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        oa = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return o.a.createElement(
            F.a,
            { style: ca.container },
            o.a.createElement(sa.a, { Icon: a, color: 'neutral' }),
            o.a.createElement(B.b, { size: 'headline2', style: ca.title, weight: 'bold' }, t),
            o.a.createElement(B.b, { color: 'gray700', style: ca.description }, n),
          )
        },
        ca = C.a.create(function (e) {
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
          { Icon: ua.a, title: d.a.d31c5997, description: d.a.hda1e780 },
          { Icon: da.a, title: d.a.d08d0bb2, description: d.a.cbd8b105 },
          { Icon: pa.a, title: d.a.becb4930, description: d.a.g743ef96 },
        ],
        ga = function () {
          return o.a.createElement(
            ia.a,
            null,
            ma.map(function (e) {
              return o.a.createElement(oa, g()({}, e, { key: e.title }))
            }),
          )
        },
        fa = d.a.a6777c1b,
        ba = d.a.j5dc36d7,
        ya = d.a.c45b2f06,
        ha = d.a.hb6b432e,
        _a = d.a.cd5cae15,
        wa = d.a.f7239f4c,
        va = d.a.g8cdf707,
        Sa = d.a.bff8472e,
        ka = d.a.e533715d,
        Fa = void 0 !== r ? r : (r = n('xd+q')),
        Ea = function (e) {
          var a = e.user,
            n = G()(Fa, a).legacy.followers_count
          return o.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            o.a.createElement(
              B.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              fa,
            ),
            o.a.createElement(B.b, null, ba),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ya,
            ),
            o.a.createElement(B.b, { color: 'gray700' }, ha),
            o.a.createElement(Ue, { type: Ae.HandCoins }),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            o.a.createElement(ga, null),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              wa,
            ),
            o.a.createElement(la, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              va,
            ),
            o.a.createElement(B.b, { color: 'gray700' }, Sa),
            o.a.createElement(N, {
              color: 'plum500',
              label: ka,
              path: '/settings/superfollows/application/eligibility',
            }),
          )
        },
        Ca = d.a.d0fc4890,
        xa = d.a.c64384b6,
        Ka = d.a.c3d89aca,
        Ta = function () {
          return o.a.createElement(
            T,
            { withInfoButton: !0 },
            o.a.createElement(He, { align: 'center', headline: Ca, illustration: Ae.OneFinger, subtext: xa }),
            o.a.createElement(N, { label: Ka, path: '/settings/superfollows/application/complete_profile' }),
          )
        },
        La = n('tI3i'),
        Oa = n.n(La),
        Pa = (n('2G9S'), n('Hsf0')),
        Ia = n.n(Pa),
        Da = 'super_follows_application_draft',
        Ra = 'super_follows_onboarding_draft',
        Ba = function (e) {
          return Ia()(void 0 !== i ? i : (i = n('PlkH')), e).__id
        },
        Va = function (e, a) {
          var n = Ba(a),
            t = e.get(n)
          return Oa()(t, 'viewer must be defined'), t
        },
        Aa = function (e, a) {
          return Va(e, a).getLinkedRecord(Da)
        },
        za = function (e, a) {
          return Va(e, a).getLinkedRecord(Ra)
        },
        Ua = n('HG4m'),
        Ma = n.n(Ua),
        Ha = n('Ud88'),
        ja = n.n(Ha)
      function Wa(e, a) {
        var n = ja()()
        o.a.useEffect(
          function () {
            Oa()(e, 'viewerRef must be defined'),
              Ma()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.content_category,
                    l = void 0 === t ? [] : t,
                    r = n.content_category_other,
                    i = void 0 === r ? null : r,
                    s = n.content_creation_platform,
                    o = void 0 === s ? [] : s,
                    c = n.content_creation_platform_other,
                    u = void 0 === c ? null : c,
                    d = n.ethnicity,
                    p = void 0 === d ? [] : d,
                    m = n.gender,
                    g = void 0 === m ? [] : m,
                    f = n.purpose,
                    b = void 0 === f ? null : f,
                    y = Ba(a),
                    h = Va(e, a)
                  if (!Aa(e, a)) {
                    var _ = e.create(''.concat(y, ':').concat(Da), 'SuperFollowsApplicationDraft')
                    _.setValue(l, 'content_category'),
                      _.setValue(i, 'content_category_other'),
                      _.setValue(o, 'content_creation_platform'),
                      _.setValue(u, 'content_creation_platform_other'),
                      _.setValue(b, 'purpose'),
                      _.setValue(p, 'ethnicity'),
                      _.setValue(g, 'gender'),
                      h.setLinkedRecord(_, Da)
                  }
                })(n, e, a)
              })
          },
          [a, n, e],
        )
      }
      function Na(e, a) {
        var n = ja()()
        o.a.useEffect(
          function () {
            Oa()(e, 'viewerRef must be defined'),
              Ma()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.creator_intro,
                    l = void 0 === t ? null : t,
                    r = n.description,
                    i = void 0 === r ? null : r,
                    s = n.selected_price,
                    o = void 0 === s ? null : s,
                    c = Ba(a),
                    u = Va(e, a)
                  if (!za(e, a)) {
                    var d = e.create(''.concat(c, ':').concat(Ra), 'SuperFollowsOnboardingDraft')
                    d.setValue(l, 'creator_intro'),
                      d.setValue(i, 'description'),
                      d.setValue(o, 'selected_price'),
                      u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                  }
                })(n, e, a)
              })
          },
          [n, a, e],
        )
      }
      function qa(e, a) {
        var n = ja()()
        return o.a.useCallback(
          function (t) {
            Oa()(e, 'viewerRef must be defined'),
              Ma()(n, function (n) {
                !(function (e, a, n, t) {
                  var l = Aa(e, a)
                  Oa()(l, 'applicationDraft must be defined'), l.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function Ga(e, a) {
        var n = ja()()
        return o.a.useCallback(
          function (t) {
            Oa()(e, 'viewerId must be defined'),
              Ma()(n, function (n) {
                !(function (e, a, n, t) {
                  var l = za(e, a)
                  Oa()(l, 'onboardingDraft must be defined'), l.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Qa,
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
        sn,
        on,
        cn,
        un,
        dn,
        pn,
        mn,
        gn,
        fn,
        bn,
        yn,
        hn,
        _n,
        wn,
        vn,
        Sn,
        kn,
        Fn,
        En,
        Cn,
        xn,
        Kn,
        Tn,
        Ln,
        On,
        Pn,
        In,
        Dn,
        Rn,
        Bn,
        Vn,
        An,
        zn,
        Un,
        Mn,
        Hn,
        jn,
        Wn = n('p+r5'),
        Nn = d.a.f7997b16,
        qn = d.a.fc00ab5b,
        Gn = d.a.c249167f,
        Qn = d.a.b772cd65,
        Xn = void 0 !== Qa ? Qa : (Qa = n('xhT1')),
        Jn = function (e) {
          var a,
            n,
            t = e.viewer,
            l = G()(Xn, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = qa(l, 'content_category_other')
          return o.a.createElement(
            T,
            { title: Nn },
            o.a.createElement(Wn.a, {
              helperText: Gn,
              label: qn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r,
            }),
            o.a.createElement(_.a, null, Qn),
          )
        },
        Zn = n('fyvP'),
        $n = n('csss'),
        Yn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            l = e.label,
            r = e.path,
            i = Object(k.f)()
          return o.a.createElement($n.a, {
            description: a,
            disabled: n,
            label: l,
            onPress: function () {
              ;(null != t ? t : i).push(r)
            },
          })
        },
        et = d.a.f7997b16,
        at = d.a.c144fa52,
        nt = [
          d.a.b1f2e8ce,
          d.a.jfec3aa0,
          d.a.e08a6e6f,
          d.a.b743702c,
          d.a.h2401e36,
          d.a.ed7e6675,
          d.a.fecc3791,
          d.a.d80b0f11,
          d.a.b29a93b1,
          d.a.c5d190c0,
          d.a.i6dfc494,
          d.a.ff2b68ca,
          d.a.e404203c,
          d.a.ab389321,
          d.a.a46fdec4,
          d.a.add55c97,
          d.a.f28d8b06,
          d.a.c8ee31da,
          d.a.e0234d02,
          d.a.h9d38a08,
          d.a.fe6841bd,
          d.a.e031e06a,
          d.a.i5cade16,
          d.a.e084f2af,
          d.a.a9db15b2,
          d.a.d27beb9e,
          d.a.a92db4a9,
          d.a.fc64990d,
          d.a.hb5f1d64,
        ],
        tt = d.a.c365dcc5,
        lt = d.a.bd44a8a8,
        rt = void 0 !== Xa ? Xa : (Xa = n('JB6R')),
        it = function (e) {
          var a,
            n,
            t = e.viewer,
            l = G()(rt, t),
            r =
              null !==
                (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = qa(l, 'content_category'),
            s = nt.map(function (e) {
              return { label: e, value: e }
            })
          return o.a.createElement(
            T,
            { title: et },
            o.a.createElement(Zn.a, {
              description: at,
              label: at,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
            o.a.createElement(Yn, {
              helpText: lt,
              label: tt,
              path: '/settings/superfollows/application/submit_categories_other',
            }),
          )
        },
        st = d.a.d94a9a17,
        ot = d.a.a35394b3,
        ct = [
          d.a.e375c2df,
          d.a.gf30371a,
          d.a.b3773d47,
          d.a.a45caf17,
          d.a.e5f515b8,
          d.a.e3b35497,
          d.a.i83206dc,
          d.a.a4ee9393,
          d.a.ab09972f,
          d.a.jafe3705,
        ],
        ut = void 0 !== Ja ? Ja : (Ja = n('H1we')),
        dt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = G()(ut, t),
            r =
              null !== (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = qa(l, 'ethnicity'),
            s = ct.map(function (e) {
              return { label: e, value: e }
            })
          return o.a.createElement(
            T,
            { title: st },
            o.a.createElement(Zn.a, {
              description: ot,
              label: ot,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
          )
        },
        pt = d.a.a8d0108d,
        mt = d.a.a35394b3,
        gt = [
          d.a.de32365f,
          d.a.b6ab31bd,
          d.a.ffc23188,
          d.a.h1cc7091,
          d.a.hca27829,
          d.a.b3af7344,
          d.a.he3f1435,
          d.a.c3c16abb,
        ],
        ft = void 0 !== Za ? Za : (Za = n('VG5i')),
        bt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = G()(ft, t),
            r =
              null !== (a = null === (n = l.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = qa(l, 'gender'),
            s = gt.map(function (e) {
              return { label: e, value: e }
            })
          return o.a.createElement(
            T,
            { title: pt },
            o.a.createElement(Zn.a, {
              description: mt,
              label: mt,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
          )
        },
        yt = d.a.da8ea7da,
        ht = d.a.d7081f91,
        _t = d.a.j349548f,
        wt = d.a.b772cd65,
        vt = void 0 !== $a ? $a : ($a = n('+OUG')),
        St = function (e) {
          var a,
            n,
            t = e.viewer,
            l = G()(vt, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = qa(l, 'content_creation_platform_other')
          return o.a.createElement(
            T,
            { title: yt },
            o.a.createElement(Wn.a, {
              helperText: _t,
              label: ht,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: r,
            }),
            o.a.createElement(_.a, null, wt),
          )
        },
        kt = d.a.da8ea7da,
        Ft = d.a.d4062c9a,
        Et = [d.a.a3021317, d.a.eb4a600d, d.a.d4d74bb3, d.a.fc738909, d.a.d8552c1a, d.a.ca07aa46],
        Ct = d.a.c365dcc5,
        xt = d.a.bd44a8a8,
        Kt = void 0 !== Ya ? Ya : (Ya = n('xnrs')),
        Tt = function (e) {
          var a,
            n,
            t = e.viewer,
            l = G()(Kt, t),
            r =
              null !==
                (a =
                  null === (n = l.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = qa(l, 'content_creation_platform'),
            s = Et.map(function (e) {
              return { label: e, value: e }
            })
          return o.a.createElement(
            T,
            { title: kt },
            o.a.createElement(Zn.a, {
              description: Ft,
              label: Ft,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: r[0],
            }),
            o.a.createElement(Yn, {
              helpText: xt,
              label: Ct,
              path: '/settings/superfollows/application/submit_platforms_other',
            }),
          )
        },
        Lt = (n('tVqn'), n('uFXj'), d.a.f4f4dd6f),
        Ot = d.a.f448cbcb,
        Pt = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            l = 'required' === n ? Lt : 'optional' === n ? Ot : void 0
          return o.a.createElement(
            F.a,
            { style: It.container },
            o.a.createElement(B.b, { size: 'headline1', weight: 'heavy' }, a),
            l && o.a.createElement(B.b, { color: t, size: 'subtext2', style: It.subtext }, l),
          )
        },
        It = C.a.create(function (e) {
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
        Dt = n('jV+4'),
        Rt = n('Xrkv'),
        Bt = n('9SqB'),
        Vt = n.n(Bt),
        At = d.a.e873f0ae,
        zt = d.a.f095a24a,
        Ut = d.a.i5f7b6b8,
        Mt = d.a.d1f6d336,
        Ht = d.a.f7997b16,
        jt = d.a.c144fa52,
        Wt = d.a.f1bf337d,
        Nt = d.a.da8ea7da,
        qt = d.a.d4062c9a,
        Gt = d.a.e963d587,
        Qt = d.a.ede0ac3e,
        Xt = d.a.ffb6cb88,
        Jt = d.a.b2159e8e,
        Zt = d.a.feacb49d,
        $t = d.a.je17c987,
        Yt = d.a.d94a9a17,
        el = d.a.a8d0108d,
        al = d.a.gfc80842,
        nl = void 0 !== en ? en : (en = n('pLb/')),
        tl = void 0 !== an ? an : (an = n('3qCL')),
        ll = void 0 !== nn ? nn : (nn = n('AyUU')),
        rl = function (e) {
          var a,
            n,
            t,
            l,
            r,
            i,
            s,
            c = e.user,
            u = e.viewer,
            d = G()(nl, c),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = G()(tl, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == g ? void 0 : g.content_category_other) && void 0 !== n ? n : [],
            ),
            b = (null !== (t = null == g ? void 0 : g.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (l = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== l ? l : [],
            ),
            y = null !== (r = null == g ? void 0 : g.purpose) && void 0 !== r ? r : '',
            h = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            _ = null !== (s = null == g ? void 0 : g.gender) && void 0 !== s ? s : [],
            w = f.length && b.length && y.trim(),
            v = qa(m, 'purpose'),
            S = Vt()(ll),
            k = j()(S, 2),
            F = k[0],
            E = k[1]
          return o.a.createElement(
            T,
            { withInfoButton: !0 },
            o.a.createElement(He, { headline: At, illustration: Ae.Clipboard, subtext: zt }),
            o.a.createElement(Pt, { title: Ut }),
            o.a.createElement(B.b, null, Mt),
            p && o.a.createElement(Dt.a, { screenName: p }),
            o.a.createElement(Pt, { title: Ht, type: 'required' }),
            o.a.createElement(B.b, { color: 'gray700' }, jt),
            o.a.createElement(Yn, {
              description: Object(Rt.a)(f, !0),
              label: Wt,
              path: '/settings/superfollows/application/submit_categories',
            }),
            o.a.createElement(Pt, { title: Nt, type: 'required' }),
            o.a.createElement(B.b, { color: 'gray700' }, qt),
            o.a.createElement(Yn, {
              description: Object(Rt.a)(b, !0),
              label: Gt,
              path: '/settings/superfollows/application/submit_platforms',
            }),
            o.a.createElement(Pt, { title: Qt, type: 'required' }),
            o.a.createElement(Wn.a, {
              helperText: Jt,
              label: Xt,
              name: 'plannedUsage',
              onChange: function (e) {
                v(e.currentTarget.value)
              },
              value: y,
            }),
            o.a.createElement(Pt, { title: Zt, type: 'optional' }),
            o.a.createElement(B.b, { color: 'gray700' }, $t),
            o.a.createElement(Yn, {
              description: Object(Rt.a)(h, !0),
              label: Yt,
              path: '/settings/superfollows/application/submit_ethnicities',
            }),
            o.a.createElement(Yn, {
              description: Object(Rt.a)(_, !0),
              label: el,
              path: '/settings/superfollows/application/submit_genders',
            }),
            o.a.createElement(M, null),
            o.a.createElement(N, {
              disabled: !w || E,
              label: al,
              onPress: function () {
                return new Promise(function (e, a) {
                  F({
                    variables: { category: f, platform: b, purpose: y, ethnicity: h, gender: _ },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: '/settings/superfollows/submitted',
            }),
          )
        },
        il = void 0 !== tn ? tn : (tn = n('o/nB')),
        sl = void 0 !== ln ? ln : (ln = n('lZLw')),
        ol = function (e) {
          var a = e.user,
            n = e.viewer,
            t = G()(il, a),
            l = G()(sl, n)
          return (
            Wa(l),
            o.a.createElement(
              k.d,
              null,
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/eligibility' },
                o.a.createElement(aa, { user: t }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/one_more_thing' },
                o.a.createElement(Ta, null),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/complete_profile' },
                o.a.createElement(D, null),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/submit' },
                o.a.createElement(rl, { user: t, viewer: l }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories' },
                o.a.createElement(it, { viewer: l }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories_other' },
                o.a.createElement(Jn, { viewer: l }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms' },
                o.a.createElement(Tt, { viewer: l }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms_other' },
                o.a.createElement(St, { viewer: l }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/submit_ethnicities' },
                o.a.createElement(dt, { viewer: l }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/application/submit_genders' },
                o.a.createElement(bt, { viewer: l }),
              ),
              o.a.createElement(
                k.b,
                { path: '/settings/superfollows/application' },
                o.a.createElement(Ea, { user: t }),
              ),
            )
          )
        },
        cl = (n('hBpG'), n('ho0z'), n('cHvH')),
        ul = function (e) {
          var a = e.children,
            n = e.style
          return o.a.createElement(
            F.a,
            { style: [ml.frame, n] },
            o.a.createElement(
              F.a,
              { style: ml.browserBar },
              o.a.createElement(
                F.a,
                { style: ml.browserBarButtons },
                o.a.createElement(F.a, { style: ml.browserBarButton }),
                o.a.createElement(F.a, { style: ml.browserBarButton }),
                o.a.createElement(F.a, { style: ml.browserBarButton }),
              ),
              o.a.createElement(
                F.a,
                { style: ml.browserBarUrlInputWrapper },
                o.a.createElement(F.a, { style: ml.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        dl = function (e) {
          var a = e.children,
            n = e.style
          return o.a.createElement(F.a, { style: n }, o.a.createElement(F.a, { style: ml.content }, a))
        },
        pl = function (e) {
          var a = e.children,
            n = e.style
          return Object(cl.b)().windowWidth > C.a.theme.breakpoints.medium
            ? o.a.createElement(ul, { style: n }, o.a.createElement(dl, { style: ml.contentWide }, a))
            : o.a.createElement(dl, { style: n }, a)
        },
        ml = C.a.create(function (e) {
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
        gl = n('MAc7'),
        fl = ['style'],
        bl = function (e, a) {
          var n = e.style,
            t = b()(e, fl)
          return o.a.createElement(pl, { style: n }, o.a.createElement(gl.a, g()({}, t, { ref: a })))
        },
        yl = o.a.forwardRef(bl),
        hl = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(cl.b)().windowWidth > C.a.theme.breakpoints.medium ? _l.marginWide : _l.marginNarrow
          return o.a.createElement(F.a, { style: [n, t] }, a)
        },
        _l = C.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        wl = ['label', 'path'],
        vl = function (e) {
          var a = e.label,
            n = e.path,
            t = b()(e, wl),
            l = Object(k.f)()
          return o.a.createElement(
            B.b,
            g()({}, t, {
              onPress: function () {
                l.push(n)
              },
              underlineWeight: 'heavy',
              weight: 'bold',
              withUnderline: !0,
            }),
            a,
          )
        },
        Sl = d.a.hf6f2913,
        kl = d.a.i859a9d3,
        Fl = C.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        El = function (e) {
          var a = e.path,
            n = e.style
          return o.a.createElement(
            F.a,
            { style: [Fl.root, n] },
            o.a.createElement(B.b, { size: 'headline2', weight: 'heavy' }, Sl),
            o.a.createElement(vl, { label: kl, path: a }),
          )
        },
        Cl = n('0yYu'),
        xl = d.a.iba08a94,
        Kl = d.a.bcb1e4e6,
        Tl = void 0 !== rn ? rn : (rn = n('JK1g')),
        Ll = void 0 !== sn ? sn : (sn = n('yqZQ')),
        Ol = function (e) {
          var a,
            n,
            t = e.user,
            l = e.viewer,
            r = G()(Tl, t),
            i = G()(Ll, l),
            s = r.legacy,
            c = s.name,
            u = s.profile_image_url_https,
            d =
              null !==
                (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : ''
          return (
            Oa()('string' == typeof u, 'imageUrl must be defined'),
            Oa()('string' == typeof c, 'name must be defined'),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(hl, { style: Pl.interstitial }, o.a.createElement(He, { headline: xl, subtext: Kl })),
              o.a.createElement(Cl.a, null),
              o.a.createElement(
                hl,
                { style: Pl.previewCallout },
                o.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
              ),
              o.a.createElement(yl, { imageUrl: u, name: c, style: Pl.preview, value: d }),
            )
          )
        },
        Pl = C.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Il = d.a.hf6f2913,
        Dl = void 0 !== on ? on : (on = n('MvEh')),
        Rl = void 0 !== cn ? cn : (cn = n('U5ka')),
        Bl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = G()(Dl, a),
            l = G()(Rl, n)
          return o.a.createElement(T, { title: Il, withInfoButton: !0 }, o.a.createElement(Ol, { user: t, viewer: l }))
        },
        Vl = d.a.j3253319,
        Al = d.a.h1e80993,
        zl = d.a.j679dcda,
        Ul = void 0 !== un ? un : (un = n('S3B+')),
        Ml = void 0 !== dn ? dn : (dn = n('qrhN')),
        Hl = function (e, a) {
          var n,
            t,
            l = e.user,
            r = e.viewer,
            i = G()(Ul, l),
            s = G()(Ml, r),
            c = i.legacy,
            u = c.name,
            d = c.profile_image_url_https,
            p =
              null !==
                (n = null === (t = s.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            m = Ga(s, 'creator_intro')
          return (
            Oa()('string' == typeof d, 'imageUrl must be defined'),
            Oa()('string' == typeof u, 'name must be defined'),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(hl, { style: Wl.interstitial }, o.a.createElement(He, { headline: Vl, subtext: Al })),
              o.a.createElement(
                hl,
                { style: Wl.examplesLink },
                o.a.createElement(vl, { label: zl, path: '/settings/superfollows/perks_intro_examples' }),
              ),
              o.a.createElement(Cl.a, null),
              o.a.createElement(
                hl,
                { style: Wl.previewCallout },
                o.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
              ),
              o.a.createElement(yl, {
                imageUrl: d,
                name: u,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                style: Wl.preview,
                value: p,
              }),
            )
          )
        },
        jl = o.a.forwardRef(Hl),
        Wl = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Nl = d.a.cd5cae15,
        ql = d.a.abd845fd,
        Gl = d.a.b772cd65,
        Ql = void 0 !== pn ? pn : (pn = n('oyMe')),
        Xl = void 0 !== mn ? mn : (mn = n('RL7R')),
        Jl = void 0 !== gn ? gn : (gn = n('VzX/')),
        Zl = C.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        $l = function (e) {
          var a,
            n,
            t,
            l = e.user,
            r = e.viewer,
            i = o.a.useRef(),
            s = G()(Ql, l),
            c = G()(Xl, r),
            u = null === (a = s.super_follow_creator_benefits) || void 0 === a ? void 0 : a.benefits_data,
            d =
              null !==
                (n = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            p = Vt()(Jl),
            m = j()(p, 2),
            g = m[0],
            f = m[1],
            b = !!d
          return o.a.createElement(
            T,
            { title: Nl },
            o.a.createElement(jl, { ref: i, user: s, viewer: c }),
            o.a.createElement(
              F.a,
              { style: Zl.buttonsWrapper },
              o.a.createElement(
                _.a,
                {
                  onClick: function () {
                    var e
                    null == i || null === (e = i.current) || void 0 === e || e.focus()
                  },
                  size: 'large',
                  type: 'primaryOutlined',
                },
                ql,
              ),
              o.a.createElement(N, {
                disabled: !b || f,
                label: Gl,
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
                path: '/settings/superfollows/management',
                size: 'large',
              }),
            ),
          )
        },
        Yl = n('fs1G'),
        er = n('9VLy'),
        ar = n('4zmP'),
        nr = ['$refType'],
        tr = d.a.a6777c1b,
        lr = d.a.b4a93a91,
        rr = d.a.c0348963,
        ir = d.a.d08d0bb2,
        sr = d.a.ea4c3496,
        or = d.a.ea92cfe3,
        cr = d.a.ia9c37c4,
        ur = d.a.hc2c5a8b,
        dr = d.a.be54a312,
        pr = d.a.bc6d85b3,
        mr = d.a.b7bc895e,
        gr = d.a.f3ce76c0,
        fr = d.a.e9e3b3f7,
        br = d.a.a79bf10a,
        yr = d.a.a3932653,
        hr = d.a.a1ef1964,
        _r = d.a.abd845fd,
        wr = d.a.c9f7c195,
        vr = d.a.g5925628,
        Sr = d.a.jfb2bf30,
        kr = d.a.a962b5d8,
        Fr = d.a.dba12b51,
        Er = void 0 !== fn ? fn : (fn = n('EM6u')),
        Cr = void 0 !== bn ? bn : (bn = n('oNwH')),
        xr = void 0 !== yn ? yn : (yn = n('qOMr')),
        Kr = function (e) {
          var a,
            n,
            t,
            l,
            r,
            i = e.priceOfferings,
            s = e.user,
            c = e.viewer,
            u = G()(Er, i),
            d = (u.$refType, b()(u, nr)),
            p = G()(Cr, s),
            m = G()(xr, c),
            g = null !== (a = p.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            f = null !== (n = p.legacy.screen_name) && void 0 !== n ? n : void 0,
            y = m.super_follows_onboarding_draft,
            h = null !== (t = null == y ? void 0 : y.creator_intro) && void 0 !== t ? t : '',
            v = null !== (l = null == y ? void 0 : y.description) && void 0 !== l ? l : '',
            S = null !== (r = null == y ? void 0 : y.selected_price) && void 0 !== r ? r : 'offer2'
          return o.a.createElement(
            T,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            o.a.createElement(
              B.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              tr,
            ),
            o.a.createElement(Cl.a, null),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              lr,
            ),
            o.a.createElement(N, {
              label: hr,
              path: '/settings/superfollows/management/perks_confirm',
              type: 'primaryText',
            }),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              rr,
            ),
            o.a.createElement(N, {
              label: _r,
              path: '/settings/superfollows/management/perks_intro',
              type: 'primaryOutlined',
            }),
            o.a.createElement(B.b, { color: 'gray700' }, h),
            o.a.createElement(er.a, { imageUrl: g, screenName: f }),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              ir,
            ),
            o.a.createElement(B.b, { color: 'gray700' }, v),
            o.a.createElement(er.a, { imageUrl: g, screenName: f }),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              sr,
            ),
            o.a.createElement(B.b, { color: 'gray700' }, or),
            o.a.createElement(Cl.a, null),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              cr,
            ),
            o.a.createElement(B.b, { color: 'gray700' }, ur),
            o.a.createElement(B.b, { size: 'headline2', weight: 'heavy' }, dr({ price: d[S] })),
            o.a.createElement(ar.a, { headline: pr, text: mr }),
            o.a.createElement(Cl.a, null),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              gr,
            ),
            o.a.createElement(B.b, { color: 'gray700' }, fr),
            o.a.createElement(_.a, { link: w, type: 'brandOutlined' }, wr),
            o.a.createElement(
              _.a,
              { link: 'https://help.twitter.com/forms/paid-features/superfollows', type: 'brandOutlined' },
              vr,
            ),
            o.a.createElement(Cl.a, null),
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              br,
            ),
            o.a.createElement(B.b, { color: 'gray700' }, yr),
            o.a.createElement(_.a, { link: 'https://t.co/jPqvg6tFrDJG', type: 'brandFilled' }, Sr),
            o.a.createElement(_.a, { link: 'https://t.co/RL2NN3bEVkes', type: 'brandOutlined' }, kr),
            o.a.createElement(Cl.a, null),
            o.a.createElement(_.a, { onPress: Yl.a, type: 'destructiveText' }, Fr),
          )
        },
        Tr = void 0 !== hn ? hn : (hn = n('MXCg')),
        Lr = void 0 !== _n ? _n : (_n = n('mEFY')),
        Or = void 0 !== wn ? wn : (wn = n('d8Sa')),
        Pr = function (e) {
          var a,
            n,
            t,
            l,
            r = e.priceOfferings,
            i = e.user,
            s = e.viewer,
            c = G()(Tr, r),
            u = G()(Lr, i),
            d = G()(Or, s),
            p = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            m = (
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
            Na(d, {
              creator_intro: p,
              description: null == m ? void 0 : m.description,
              selected_price:
                null === (l = u.super_follow_creator_price_metadata) || void 0 === l ? void 0 : l.selected_price,
            }),
            o.a.createElement(
              k.d,
              null,
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/management/perks_intro' },
                o.a.createElement($l, { user: u, viewer: d }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/management/perks_confirm' },
                o.a.createElement(Bl, { user: u, viewer: d }),
              ),
              o.a.createElement(
                k.b,
                { path: '/settings/superfollows/management' },
                o.a.createElement(Kr, { priceOfferings: c, user: u, viewer: d }),
              ),
            )
          )
        },
        Ir = (n('5BYb'), d.a.b422cb62),
        Dr = d.a.f08705e0,
        Rr = d.a.e2cd700f,
        Br = d.a.fbfd7397,
        Vr = d.a.c1df579e,
        Ar = d.a.d8637c96,
        zr = d.a.b92892dc,
        Ur = d.a.b123a502,
        Mr = [
          {
            label: Ar,
            test: function (e) {
              var a,
                n = null !== (a = e.viewer.super_follows_onboarding_draft) && void 0 !== a ? a : {},
                t = n.creator_intro,
                l = n.description
              return !!t && !!l
            },
          },
          {
            label: zr,
            test: function (e) {
              var a
              return !(null === (a = e.viewer.super_follows_onboarding_draft) || void 0 === a || !a.selected_price)
            },
          },
          {
            label: Ur,
            test: function (e) {
              return 'Completed' === e.user.stripe_account_status
            },
          },
        ],
        Hr = void 0 !== vn ? vn : (vn = n('wQp3')),
        jr = void 0 !== Sn ? Sn : (Sn = n('tfBr')),
        Wr = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            l = G()(Hr, n),
            r = G()(jr, t),
            i = Mr.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: l, viewer: r }) }
            }),
            s = i.some(function (e) {
              return e.checked
            }),
            c = o.a.createElement(N, {
              label: Vr,
              path: '/settings/superfollows/onboarding/perks_intro',
              size: 'small',
              type: 'primaryFilled',
            })
          return o.a.createElement(
            T,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: c,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            o.a.createElement(
              hl,
              { style: Nr.interstitial },
              o.a.createElement(He, {
                headline: s ? Rr : Ir,
                illustration: s ? Ae.Puzzle : Ae.Cat,
                subtext: s ? Br : Dr,
              }),
            ),
            o.a.createElement(hl, { style: Nr.checks }, o.a.createElement(z, { items: i })),
          )
        },
        Nr = C.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        qr = d.a.cda6bb6d,
        Gr = d.a.a15b98ec,
        Qr = function () {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(hl, { style: Xr.interstitial }, o.a.createElement(He, { headline: qr, subtext: Gr })),
            o.a.createElement(Cl.a, null),
            o.a.createElement(
              hl,
              { style: Xr.previewCallout },
              o.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
            ),
            o.a.createElement(pl, { style: Xr.preview }),
          )
        },
        Xr = C.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Jr = d.a.cd5cae15,
        Zr = d.a.ad4a92a2,
        $r = d.a.c1df579e,
        Yr = function (e) {
          var a = e.percentageComplete,
            n = { label: $r, path: '/settings/superfollows/onboarding/perks_confirm', type: 'primaryFilled' },
            t = o.a.createElement(N, n),
            l = o.a.createElement(N, g()({}, n, { size: 'small' }))
          return o.a.createElement(
            T,
            { percentageComplete: a, rightControl: l, subtitle: Zr, title: Jr },
            o.a.createElement(Qr, null),
            o.a.createElement(hl, { style: ei.buttons }, t),
          )
        },
        ei = C.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        ai = d.a.cd5cae15,
        ni = d.a.e18b7a71,
        ti = d.a.c1df579e,
        li = void 0 !== kn ? kn : (kn = n('Rthh')),
        ri = void 0 !== Fn ? Fn : (Fn = n('aREQ')),
        ii = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            l = G()(li, n),
            r = G()(ri, t),
            i = { label: ti, path: '/settings/superfollows/onboarding/pricing', type: 'primaryFilled' },
            s = o.a.createElement(N, i),
            c = o.a.createElement(N, g()({}, i, { size: 'small' }))
          return o.a.createElement(
            T,
            { percentageComplete: a, rightControl: c, subtitle: ni, title: ai },
            o.a.createElement(Ol, { user: l, viewer: r }),
            o.a.createElement(hl, { style: si.buttons }, s),
          )
        },
        si = C.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        oi = n('lD8l'),
        ci = (n('kH1Z'), n('6U7i'), n('6OUF')),
        ui = d.a.a329ce87,
        di = function (e, a) {
          var n = e.imageUrl,
            t = e.onChange,
            l = e.screenName,
            r = e.style,
            i = e.value
          return o.a.createElement(
            F.a,
            { style: [mi.root, r] },
            t
              ? o.a.createElement(ci.a, {
                  inputStyle: mi.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: t,
                  placeholder: ui,
                  ref: a,
                  style: mi.description,
                  value: i,
                })
              : o.a.createElement(B.b, { color: 'gray700', style: mi.description }, i),
            o.a.createElement(er.a, { imageUrl: n, screenName: l, style: [mi.signature, !i && mi.visibilityHidden] }),
          )
        },
        pi = o.a.forwardRef(di),
        mi = C.a.create(function (e) {
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
        gi = ['style'],
        fi = d.a.cbc8ce27,
        bi = function (e, a) {
          var n = e.style,
            t = b()(e, gi),
            l = Object(cl.b)().windowWidth > C.a.theme.breakpoints.medium
          return o.a.createElement(
            F.a,
            { style: [hi.root, l && hi.rootWide, n] },
            o.a.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              fi,
            ),
            o.a.createElement(pi, g()({}, t, { ref: a, style: hi.description })),
          )
        },
        yi = o.a.forwardRef(bi),
        hi = C.a.create(function (e) {
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
        _i = ['style'],
        wi = function (e, a) {
          var n = e.style,
            t = b()(e, _i)
          return o.a.createElement(
            pl,
            { style: n },
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(yi, g()({}, t, { ref: a })),
              o.a.createElement(oi.a, { style: Si.exclusiveDemoBonusContent }),
            ),
          )
        },
        vi = o.a.forwardRef(wi),
        Si = C.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        ki = d.a.gf32cca1,
        Fi = d.a.j8ba99b3,
        Ei = d.a.j679dcda,
        Ci = void 0 !== En ? En : (En = n('Th83')),
        xi = void 0 !== Cn ? Cn : (Cn = n('lVTh')),
        Ki = function (e, a) {
          var n,
            t,
            l = e.user,
            r = e.viewer,
            i = G()(Ci, l),
            s = G()(xi, r),
            c = i.legacy,
            u = c.name,
            d = c.profile_image_url_https,
            p =
              null !== (n = null === (t = s.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.description) &&
              void 0 !== n
                ? n
                : '',
            m = Ga(s, 'description')
          return (
            Oa()('string' == typeof d, 'imageUrl must be defined'),
            Oa()('string' == typeof u, 'name must be defined'),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(hl, { style: Li.interstitial }, o.a.createElement(He, { headline: ki, subtext: Fi })),
              o.a.createElement(
                hl,
                { style: Li.examplesLink },
                o.a.createElement(vl, { label: Ei, path: '/settings/superfollows/perks_description_examples' }),
              ),
              o.a.createElement(Cl.a, null),
              o.a.createElement(
                hl,
                { style: Li.previewCallout },
                o.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
              ),
              o.a.createElement(vi, {
                imageUrl: d,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                screenName: u,
                style: Li.preview,
                value: p,
              }),
            )
          )
        },
        Ti = o.a.forwardRef(Ki),
        Li = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Oi = d.a.cd5cae15,
        Pi = d.a.e36287c6,
        Ii = d.a.be76dc33,
        Di = d.a.c1df579e,
        Ri = void 0 !== xn ? xn : (xn = n('6rkJ')),
        Bi = void 0 !== Kn ? Kn : (Kn = n('tJ4s')),
        Vi = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            l = e.user,
            r = e.viewer,
            i = o.a.useRef(),
            s = G()(Bi, r),
            c = G()(Ri, l),
            u = !!(null !==
              (a = null === (n = s.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: Di,
              path: '/settings/superfollows/onboarding/perks_badges',
              type: 'primaryFilled',
            },
            p = o.a.createElement(N, d),
            m = o.a.createElement(N, g()({}, d, { size: 'small' })),
            f = {
              children: Ii,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            b = o.a.createElement(_.a, f),
            y = o.a.createElement(_.a, g()({}, f, { size: 'small' }))
          return o.a.createElement(
            T,
            { percentageComplete: t, rightControl: u ? m : y, subtitle: Pi, title: Oi },
            o.a.createElement(Ti, { ref: i, user: c, viewer: s }),
            o.a.createElement(hl, { style: Ai.buttons }, u ? p : b),
          )
        },
        Ai = C.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        zi = d.a.cd5cae15,
        Ui = d.a.c0348963,
        Mi = d.a.ef5406e3,
        Hi = d.a.c1df579e,
        ji = void 0 !== Tn ? Tn : (Tn = n('02qo')),
        Wi = void 0 !== Ln ? Ln : (Ln = n('TXsE')),
        Ni = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            l = e.user,
            r = e.viewer,
            i = o.a.useRef(),
            s = G()(ji, l),
            c = G()(Wi, r),
            u = !!(null !==
              (a = null === (n = c.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: Hi,
              path: '/settings/superfollows/onboarding/perks_description',
              type: 'primaryFilled',
            },
            p = o.a.createElement(N, d),
            m = o.a.createElement(N, g()({}, d, { size: 'small' })),
            f = {
              children: Mi,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            b = o.a.createElement(_.a, f),
            y = o.a.createElement(_.a, g()({}, f, { size: 'small' }))
          return o.a.createElement(
            T,
            { percentageComplete: t, rightControl: u ? m : y, subtitle: Ui, title: zi },
            o.a.createElement(jl, { ref: i, user: s, viewer: c }),
            o.a.createElement(hl, { style: qi.buttons }, u ? p : b),
          )
        },
        qi = C.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Gi = ['$refType'],
        Qi = d.a.ea8a3d2d,
        Xi = d.a.f77bb178,
        Ji = d.a.cd75a5d4,
        Zi = d.a.g9677c6d,
        $i = d.a.abd845fd,
        Yi = void 0 !== On ? On : (On = n('IeZm')),
        es = void 0 !== Pn ? Pn : (Pn = n('7ESn')),
        as = void 0 !== In ? In : (In = n('By/j')),
        ns = function (e) {
          var a,
            n,
            t,
            l = e.percentageComplete,
            r = e.priceOfferings,
            i = e.viewer,
            s = G()(Yi, r),
            c = (s.$refType, b()(s, Gi)),
            u = G()(es, i).super_follows_onboarding_draft,
            d = null !== (a = null == u ? void 0 : u.creator_intro) && void 0 !== a ? a : '',
            p = null !== (n = null == u ? void 0 : u.description) && void 0 !== n ? n : '',
            m = null !== (t = null == u ? void 0 : u.selected_price) && void 0 !== t ? t : c[0],
            g = Vt()(as),
            f = j()(g, 2),
            y = f[0],
            h = f[1]
          return o.a.createElement(
            T,
            { percentageComplete: l, title: Qi, withInfoButton: !0 },
            o.a.createElement(
              hl,
              { style: ts.interstitial },
              o.a.createElement(He, { headline: Xi({ price: c[m] }), illustration: Ae.Pricing, subtext: Ji }),
            ),
            o.a.createElement(
              hl,
              { style: ts.buttons },
              o.a.createElement(N, {
                disabled: h,
                label: Zi,
                onPress: function () {
                  return new Promise(function (e, a) {
                    y({
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
                path: '/settings/superfollows/onboarding/stripe_setup',
                type: 'primaryFilled',
              }),
              o.a.createElement(N, {
                disabled: h,
                label: $i,
                path: '/settings/superfollows/onboarding/pricing',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        ts = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        ls = (n('+KXO'), n('7xRU'), n('hznd')),
        rs = ['$refType'],
        is = d.a.ea8a3d2d,
        ss = d.a.ic9124bf,
        os = d.a.g5923869,
        cs = {
          offer1: [d.a.f025ab39, d.a.c5602dfd],
          offer2: [d.a.ib075804, d.a.j8a72f06],
          offer3: [d.a.c246656e, d.a.a92ab16c],
        },
        us = d.a.c1df579e,
        ds = void 0 !== Dn ? Dn : (Dn = n('5jO1')),
        ps = void 0 !== Rn ? Rn : (Rn = n('mKqc')),
        ms = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            l = G()(ds, n),
            r = (l.$refType, b()(l, rs)),
            i = G()(ps, t),
            s = i.super_follows_onboarding_draft,
            c = null == s ? void 0 : s.selected_price,
            u = Ga(i, 'selected_price'),
            p = o.a.createElement(
              d.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              o.a.createElement(B.b, { link: w }, d.a.c336b06a),
            ),
            m = Object.keys(r).map(function (e) {
              return { label: os({ price: r[e] }), value: e, helpText: cs[e].join(' ') }
            }),
            g = o.a.createElement(N, {
              disabled: !c,
              label: us,
              path: '/settings/superfollows/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return o.a.createElement(
            T,
            { percentageComplete: a, rightControl: g, title: is, withInfoButton: !0 },
            o.a.createElement(hl, { style: gs.interstitial }, o.a.createElement(He, { headline: ss, subtext: p })),
            o.a.createElement(
              hl,
              { style: gs.prices },
              o.a.createElement(ls.a, {
                accessibilityLabel: ss,
                name: 'selectedPrice',
                onChange: function (e, a) {
                  u(a)
                },
                options: m,
                value: c,
              }),
            ),
          )
        },
        gs = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        fs = d.a.f1cb36b8,
        bs = d.a.e20f6661,
        ys = d.a.a9ee1ecc,
        hs = d.a.b772cd65,
        _s = function (e) {
          var a = e.percentageComplete
          return o.a.createElement(
            T,
            { leftControlShouldClose: !0, percentageComplete: a, title: fs, withInfoButton: !0 },
            o.a.createElement(
              hl,
              { style: ws.interstitial },
              o.a.createElement(He, { headline: bs, illustration: Ae.Thumbsup, subtext: ys }),
            ),
            o.a.createElement(
              hl,
              { style: ws.buttons },
              o.a.createElement(N, { label: hs, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        ws = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        vs = d.a.e2cd700f,
        Ss = d.a.d6bfb60c,
        ks = d.a.b9cbb370,
        Fs = function () {
          return o.a.createElement(
            T,
            { withInfoButton: !0 },
            o.a.createElement(He, { headline: vs, illustration: Ae.Puzzle, subtext: Ss }),
            o.a.createElement(N, { label: ks, path: '/settings/superfollows/onboarding/stripe_setup' }),
          )
        },
        Es = n('8jkQ'),
        Cs = d.a.f1cb36b8,
        xs = d.a.ja884230,
        Ks = d.a.af1b808d,
        Ts = d.a.fe339750,
        Ls = d.a.j912510a,
        Os = void 0 !== Bn ? Bn : (Bn = n('xHLM')),
        Ps = function (e) {
          var a = e.percentageComplete,
            n = Vt()(Os),
            t = j()(n, 2),
            l = t[0],
            r = t[1],
            i = function () {
              l({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && Es.b.navigateTo(n)
                },
              })
            }
          return o.a.createElement(
            T,
            { percentageComplete: a, title: Cs, withInfoButton: !0 },
            o.a.createElement(
              hl,
              { style: Is.interstitial },
              o.a.createElement(He, { headline: xs, illustration: Ae.CoinStairs, subtext: Ks }),
            ),
            o.a.createElement(
              hl,
              { style: Is.buttons },
              o.a.createElement(_.a, { disabled: r, onPress: i, type: 'primaryFilled' }, Ts),
              o.a.createElement(_.a, { disabled: r, onPress: i, type: 'primaryOutlined' }, Ls),
            ),
          )
        },
        Is = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Ds = void 0 !== Vn ? Vn : (Vn = n('UNVS')),
        Rs = void 0 !== An ? An : (An = n('6byF')),
        Bs = void 0 !== zn ? zn : (zn = n('dNhZ')),
        Vs = function (e) {
          return e / 8
        },
        As = function (e) {
          var a,
            n,
            t,
            l,
            r = e.priceOfferings,
            i = e.user,
            s = e.viewer,
            c = G()(Ds, r),
            u = G()(Rs, i),
            d = G()(Bs, s),
            p = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            m = (
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
            Na(d, {
              creator_intro: p,
              description: null == m ? void 0 : m.description,
              selected_price:
                null === (l = u.super_follow_creator_price_metadata) || void 0 === l ? void 0 : l.selected_price,
            }),
            o.a.createElement(
              k.d,
              null,
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_intro' },
                o.a.createElement(Ni, { percentageComplete: Vs(1), user: u, viewer: d }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_description' },
                o.a.createElement(Vi, { percentageComplete: Vs(2), user: u, viewer: d }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_badges' },
                o.a.createElement(Yr, { percentageComplete: Vs(3) }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_confirm' },
                o.a.createElement(ii, { percentageComplete: Vs(4), user: u, viewer: d }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing' },
                o.a.createElement(ms, { percentageComplete: Vs(5), priceOfferings: c, viewer: d }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing_confirm' },
                o.a.createElement(ns, { percentageComplete: Vs(6), priceOfferings: c, viewer: d }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_setup' },
                o.a.createElement(Ps, { percentageComplete: Vs(7) }),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_incomplete' },
                o.a.createElement(Fs, null),
              ),
              o.a.createElement(
                k.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_completed' },
                o.a.createElement(_s, { percentageComplete: Vs(8) }),
              ),
              o.a.createElement(
                k.b,
                { path: '/settings/superfollows/onboarding' },
                o.a.createElement(Wr, { percentageComplete: Vs(0), user: u, viewer: d }),
              ),
            )
          )
        },
        zs = d.a.ebfb897c,
        Us = d.a.dc4feb19,
        Ms = d.a.c183d271,
        Hs = d.a.ic130fd5,
        js = d.a.dd913e24,
        Ws = d.a.h580543e,
        Ns = function () {
          return o.a.createElement(
            T,
            { title: zs },
            o.a.createElement(hl, { style: qs.interstitial }, o.a.createElement(He, { headline: Us, subtext: Ms })),
            o.a.createElement(
              hl,
              { style: qs.exampleDescriptions },
              o.a.createElement(Cl.a, null),
              o.a.createElement(pi, { value: Hs }),
              o.a.createElement(Cl.a, null),
              o.a.createElement(pi, { value: js }),
              o.a.createElement(Cl.a, null),
              o.a.createElement(pi, { value: Ws }),
            ),
          )
        },
        qs = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        Gs = n('JWc1'),
        Qs = d.a.ebfb897c,
        Xs = d.a.dc4feb19,
        Js = d.a.a0bb2076,
        Zs = d.a.ace46d40,
        $s = d.a.h2c4511f,
        Ys = d.a.hbe4f99e,
        eo = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        ao = function () {
          return o.a.createElement(
            T,
            { title: Qs },
            o.a.createElement(hl, { style: eo.interstitial }, o.a.createElement(He, { headline: Xs, subtext: Js })),
            o.a.createElement(
              hl,
              { style: eo.exampleIntros },
              o.a.createElement(Gs.a, { value: Zs }),
              o.a.createElement(Gs.a, { value: $s }),
              o.a.createElement(Gs.a, { value: Ys }),
            ),
          )
        },
        no = n('VTDR'),
        to = n('a2Fh'),
        lo = d.a.hf6f2913,
        ro = d.a.fb278c81,
        io = d.a.e6b60e94,
        so = C.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            preview: {
              marginBottom: e.spaces.space16,
              marginHorizontal: e.spaces.space16,
              marginTop: e.spaces.space40,
            },
            subheader: { marginTop: e.spaces.space8 },
          }
        }),
        oo = function () {
          return o.a.createElement(
            T,
            { title: lo },
            o.a.createElement(hl, { style: so.interstitial }, o.a.createElement(He, { headline: ro, subtext: io })),
            o.a.createElement(
              pl,
              { style: so.preview },
              o.a.createElement(
                no.a,
                null,
                o.a.createElement(to.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                o.a.createElement(to.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                o.a.createElement(to.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: so.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        co = d.a.aa7e35ed,
        uo = d.a.f67e69bf,
        po = function () {
          return o.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            o.a.createElement(
              hl,
              { style: mo.interstitial },
              o.a.createElement(He, { headline: co, illustration: Ae.Uturn, subtext: uo }),
            ),
          )
        },
        mo = C.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        go = d.a.d3d6c52c,
        fo = d.a.c53e9129,
        bo = function () {
          return o.a.createElement(
            T,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            o.a.createElement(
              hl,
              { style: yo.interstitial },
              o.a.createElement(He, { headline: go, illustration: Ae.PaperAirplane, subtext: fo }),
            ),
          )
        },
        yo = C.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        ho = d.a.j274e6aa,
        _o = d.a.d7f65127,
        wo = function () {
          return o.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            o.a.createElement(
              hl,
              { style: vo.interstitial },
              o.a.createElement(He, { headline: ho, illustration: Ae.Bench, subtext: _o }),
            ),
          )
        },
        vo = C.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        So = void 0 !== Un ? Un : (Un = n('nEN5')),
        ko = void 0 !== Mn ? Mn : (Mn = n('toKZ')),
        Fo = void 0 !== Hn ? Hn : (Hn = n('ucRr')),
        Eo = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            l = G()(So, a),
            r = G()(ko, n),
            i = G()(Fo, t),
            s = (function (e) {
              var a = e.isActiveCreator,
                n = e.stripeAccountStatus,
                t = e.superFollowsApplicationStatus
              if (a) return '/settings/superfollows/management'
              switch (t) {
                case 'Submitted':
                  return '/settings/superfollows/submitted'
                case 'Waitlisted':
                  return '/settings/superfollows/waitlisted'
                case 'Rejected':
                  return '/settings/superfollows/rejected'
                case 'Approved':
                  switch (n) {
                    case 'Incomplete':
                      return '/settings/superfollows/onboarding/stripe_incomplete'
                    case 'Completed':
                      return '/settings/superfollows/onboarding/stripe_completed'
                    default:
                      return '/settings/superfollows/onboarding'
                  }
                default:
                  return '/settings/superfollows/application'
              }
            })({
              isActiveCreator: !(null == i || !i.is_active_creator),
              superFollowsApplicationStatus: (null == r ? void 0 : r.super_follows_application_status) || 'NotStarted',
              stripeAccountStatus: (null == r ? void 0 : r.stripe_account_status) || 'NotStarted',
            })
          return o.a.createElement(
            k.d,
            null,
            o.a.createElement(
              k.b,
              { path: '/settings/superfollows/application' },
              o.a.createElement(ol, { user: r, viewer: i }),
            ),
            o.a.createElement(
              k.b,
              { path: '/settings/superfollows/onboarding' },
              o.a.createElement(As, { priceOfferings: l, user: r, viewer: i }),
            ),
            o.a.createElement(
              k.b,
              { path: '/settings/superfollows/management' },
              o.a.createElement(Pr, { priceOfferings: l, user: r, viewer: i }),
            ),
            o.a.createElement(
              k.b,
              { exact: !0, path: '/settings/superfollows/submitted' },
              o.a.createElement(bo, null),
            ),
            o.a.createElement(
              k.b,
              { exact: !0, path: '/settings/superfollows/waitlisted' },
              o.a.createElement(wo, null),
            ),
            o.a.createElement(k.b, { exact: !0, path: '/settings/superfollows/rejected' }, o.a.createElement(po, null)),
            o.a.createElement(
              k.b,
              { exact: !0, path: '/settings/superfollows/perks_intro_examples' },
              o.a.createElement(ao, null),
            ),
            o.a.createElement(
              k.b,
              { exact: !0, path: '/settings/superfollows/perks_description_examples' },
              o.a.createElement(Ns, null),
            ),
            o.a.createElement(
              k.b,
              { exact: !0, path: '/settings/superfollows/perks_preview' },
              o.a.createElement(oo, null),
            ),
            o.a.createElement(k.b, { exact: !0, path: '/settings/superfollows' }, o.a.createElement(O.a, { to: s })),
          )
        },
        Co = n('n0Rl'),
        xo = n('q9Zt'),
        Ko = d.a.hae1c933,
        To = void 0 !== jn ? jn : (jn = n('G8I5')),
        Lo = Object(Co.b)(To, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        Oo = C.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return o.a.createElement(Lo, {
          render: function (e) {
            var a,
              n,
              t = e.data,
              l = (e.error, e.fetchStatus),
              r = e.retry,
              i = null == t ? void 0 : t.super_follows_price_offerings,
              s =
                null == t || null === (a = t.viewer) || void 0 === a || null === (n = a.user_results) || void 0 === n
                  ? void 0
                  : n.result,
              u = null == t ? void 0 : t.viewer
            return o.a.createElement(c.a, {
              fetchStatus: Object(p.b)(l, null != i && 'User' === (null == s ? void 0 : s.__typename) && null != u),
              onRequestRetry: r,
              render: function () {
                return null == i || 'User' !== (null == s ? void 0 : s.__typename) || null == u
                  ? null
                  : o.a.createElement(Eo, { priceOfferings: i, user: s, viewer: u })
              },
              renderFailure: function () {
                return o.a.createElement(T, null, o.a.createElement(xo.a, { onRetry: r, style: Oo.error, title: Ko }))
              },
              retryable: !1,
            })
          },
          variables: {},
        })
      }
    },
    nEN5: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSwitch_priceOfferings',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_priceOfferings' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_priceOfferings' },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'c0b6c6ce2a6b19c031c93a3e40adfd6a',
      }
      a.default = t
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
    'p+r5': function (e, a, n) {
      'use strict'
      n.d(a, 'a', function () {
        return j
      })
      n('yiKp')
      var t = n('97Jx'),
        l = n.n(t),
        r = n('m3Bd'),
        i = n.n(r),
        s = n('VrFO'),
        o = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        g = n.n(m),
        f = n('2VqO'),
        b = n.n(f),
        y = n('KEM+'),
        h = n.n(y),
        _ = (n('2G9S'), n('ERkP')),
        w = n.n(_),
        v = n('38/B'),
        S = n('t62R'),
        k = n('/yvb'),
        F = n('piX5'),
        E = n('3XMw'),
        C = n.n(E),
        x = n('tI3i'),
        K = n.n(x),
        T = n('oQhu'),
        L = n('rHpw'),
        O = n('aITJ'),
        P = n('MWbm'),
        I = n('n5fo'),
        D = n('5emT'),
        R = n('Oib4'),
        B = n('WtWS'),
        V = n('ioan'),
        A = [
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
        z = function (e) {
          return e.length
        },
        U = function (e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z
          return a(e)
        },
        M = C.a.de540c32,
        H = C.a.b4abfdb3,
        j = (function (e) {
          g()(n, e)
          var a = b()(n)
          function n(e) {
            var t
            o()(this, n),
              (t = a.call(this, e)),
              h()(p()(t), '_blurOnBackspaceKeyUpForKaiOS', !1),
              h()(p()(t), '_isLabelLarge', function () {
                var e = t.state,
                  a = e.actualCount,
                  n = e.isFocused
                return !a && !n
              }),
              h()(
                p()(t),
                '_getTextInputStyle',
                Object(T.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              h()(p()(t), '_getTextInputType', function () {
                var e = t.props,
                  a = e.showPasswordVisibilityIcon,
                  n = e.type,
                  l = t.state.isPasswordRevealed
                return 'password' === n && a ? (l ? 'text' : 'password') : n
              }),
              h()(p()(t), '_calculateLength', function (e) {
                return U(e, t.props.calculateLength)
              }),
              h()(p()(t), '_shouldRenderDisplayCount', function () {
                var e = t.state.isFocused,
                  a = t._isFormInvalid()
                return Boolean((e || a) && t._getMaxDisplayCount())
              }),
              h()(p()(t), '_isInvalidNumber', function () {
                var e,
                  a,
                  n,
                  l,
                  r,
                  i = t.props.type,
                  s =
                    null === (e = t._textInput) || void 0 === e || null === (a = e.textInputNode) || void 0 === a
                      ? void 0
                      : a.value,
                  o =
                    null === (n = t._textInput) ||
                    void 0 === n ||
                    null === (l = n.textInputNode) ||
                    void 0 === l ||
                    null === (r = l.validity) ||
                    void 0 === r
                      ? void 0
                      : r.badInput
                return 'number' === i && '' === s && !0 === o
              }),
              h()(p()(t), '_getActualCount', function (e) {
                var a = e.length
                return t._isInvalidNumber() && (a = 1), a
              }),
              h()(p()(t), '_handleBlur', function (e) {
                var a = t.props.onBlur,
                  n = e.currentTarget.value,
                  l = t._calculateLength(n),
                  r = t._getActualCount(n)
                t.setState({ isFocused: !1, displayCount: l, actualCount: r }), a && a(e)
              }),
              h()(p()(t), '_handleChange', function (e) {
                var a = t.props.onChange,
                  n = t.state.previousValue,
                  l = e.currentTarget.value,
                  r = t._calculateLength(l),
                  i = t._getActualCount(l),
                  s = t._getAdjustedMaxLength()
                void 0 !== s && l.length > s && n.length < l.length
                  ? (e.currentTarget.value = n)
                  : (t.setState({
                      isFocused: !0,
                      displayCount: r,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    a && a(e))
              }),
              h()(p()(t), '_handleFocus', function (e) {
                var a = t.props.onFocus
                t.setState({ isFocused: !0 }), a && a(e)
              }),
              h()(p()(t), '_handleKeyPress', function (e) {
                var a = t.props,
                  n = a.multiline,
                  l = a.onKeyPress,
                  r = a.onSubmitEditing
                l && l(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !r || (e.preventDefault(), r(e))
              }),
              h()(p()(t), '_handleKeyDown', function (e) {
                var a = t.props.onKeyDown,
                  n = 0 === t.state.displayCount
                O.b.isKaiOS() && 'Backspace' === e.key && n ? (t._blurOnBackspaceKeyUpForKaiOS = n) : a && a(e)
              }),
              h()(p()(t), '_handleKeyUp', function (e) {
                var a = t.props.onKeyUp
                O.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  t._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), t.blur()),
                  a && a(e)
              }),
              h()(p()(t), '_handlePasswordVisibilityClick', function (e) {
                t.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              h()(p()(t), '_setTextInputRef', function (e) {
                t._textInput = e
              }),
              h()(p()(t), '_checkComponentPropsUsageCorrectness', function (e) {
                var a = e.defaultValue,
                  n = e.maxLength,
                  t = e.onChange,
                  l = e.validLength,
                  r = !!t,
                  i = 'string' == typeof e.value,
                  s = 'string' == typeof a
                K()(
                  !(!s && i && !r),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  K()(!(n && l && l > n), 'Max length should be equal or greater than valid length.'),
                  K()(
                    !((void 0 !== n && n <= 0) || (void 0 !== l && l <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              h()(p()(t), '_exceedsValidLength', function (e) {
                var a = t._getMaxDisplayCount()
                return !!a && e > a
              }),
              h()(p()(t), '_getMaxDisplayCount', function () {
                return t.props.validLength || t.props.maxLength
              }),
              h()(p()(t), '_getAdjustedMaxLength', function () {
                var e = t.props.maxLength,
                  a = t.getValue(),
                  n = t._calculateLength(a)
                return e ? e + a.length - n : void 0
              }),
              t._checkComponentPropsUsageCorrectness(e)
            var l = e.defaultValue,
              r = e.value || l || ''
            return (
              (t.state = {
                displayCount: t._calculateLength(r),
                actualCount: z(r),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: r,
              }),
              t
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var a = this.props,
                      n = a.maxLength,
                      t = a.onChange,
                      l = a.validLength,
                      r = a.value,
                      i = e.maxLength,
                      s = e.onChange,
                      o = e.validLength,
                      c = e.value
                    ;(o === l && n === i && !!t === !!s && ('string' == typeof r) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      a = e.accessibilityLabel,
                      n = e.editable,
                      t = e.errorText,
                      l = e.helperText,
                      r = e.style,
                      i = this.state.isFocused,
                      s = this._isFormInvalid()
                    return w.a.createElement(
                      P.a,
                      { style: [N.root, r] },
                      w.a.createElement(
                        P.a,
                        {
                          accessibilityLabel: a,
                          accessibilityRole: 'label',
                          style: [
                            F.a.border,
                            N.textInputFormStyle,
                            s && F.a.invalidBorderColor,
                            i && s && F.a.focusedBorderInvalid,
                            i && !s && F.a.focusedBorderValid,
                            !n && F.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          P.a,
                          { style: N.textInputFormWrapper },
                          w.a.createElement(
                            P.a,
                            { style: N.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        P.a,
                        { style: [N.sidePadding, N.underTextInputForm] },
                        w.a.createElement(
                          P.a,
                          { style: N.subtextWrapper },
                          l ? this._renderHelperText() : null,
                          s && t ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      a = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : a,
                      t = this._isLabelLarge()
                    return w.a.createElement(
                      S.b,
                      {
                        color: t ? 'gray700' : n,
                        numberOfLines: 1,
                        size: t ? 'headline1' : 'subtext2',
                        style: [
                          N.textInputHeaderItem,
                          t && N.placeholderText,
                          !v.a.reducedMotionEnabled && N.transition,
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
                      a = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      t =
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
                      r = (e.style, e.type, e.validLength, i()(e, A))
                    return w.a.createElement(
                      P.a,
                      { style: W.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        S.b,
                        { size: 'headline1', style: W.wrapper },
                        w.a.createElement(
                          V.a,
                          l()({}, r, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      t && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      a = e.showPasswordVisibilityIcon,
                      n = e.type,
                      t = this.state.isPasswordRevealed
                    return 'password' === n && a
                      ? w.a.createElement(
                          P.a,
                          { style: N.passwordVisibilityIconContainer },
                          w.a.createElement(k.a, {
                            accessibilityLabel: t ? H : M,
                            focusable: !0,
                            hoverLabel: { label: t ? H : M },
                            icon: t ? w.a.createElement(I.a, null) : w.a.createElement(D.a, null),
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
                    return w.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        S.b,
                        { color: 'gray700', size: 'subtext2', style: N.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        S.b,
                        { color: 'red500', size: 'subtext2', style: N.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      a = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      t = a && C.a.ia24dc8c(a),
                      l = C.a.ia24dc8c(e)
                    return w.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [N.textInputHeaderItem, N.displayCount] },
                      w.a.createElement(
                        S.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        t ? ''.concat(l, ' / ').concat(t) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      a = this.state.isFocused,
                      n = [N.icon, a && N.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(R.a, { style: [N.validationIcon, F.a.invalidColor] })
                      : w.a.createElement(B.a, { style: [N.validationIcon, F.a.validColor] })
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
                      a = this._calculateLength(e)
                    return !this._exceedsValidLength(a)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, a) {
                    var n = e.calculateLength,
                      t = e.value,
                      l = 'string' == typeof t ? U(t, n) : 0
                    return 'string' == typeof t && l !== a.displayCount
                      ? { displayCount: l, actualCount: t.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(w.a.Component)
      h()(j, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (j.propTypes = {})
      var W = L.a.create(function (e) {
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
        N = L.a.create(function (e) {
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
    piX5: function (e, a, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var t = n('rHpw').a.create(function (e) {
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
      a.a = t
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
    toKZ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSwitch_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'stripe_account_status', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_follows_application_status', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSwitch_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '0b75eda42bee495240f9a311b2c9dbd1',
      }
      a.default = t
    },
    ucRr: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSwitch_viewer',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSwitch_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'fd85d9f42c6887069474dcaa99102083',
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
                args: [{ kind: 'Literal', name: 's', value: 22 }],
                kind: 'ScalarField',
                name: 'stripe_account_create_onboarding_url',
                storageKey: 'stripe_account_create_onboarding_url(s:22)',
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
