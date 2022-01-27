;(window.webpackJsonp = window.webpackJsonp || []).push([
  [227],
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
        i = n('Lsrn'),
        o = n('k/Ka')
      function s(e, a) {
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
      function c(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? s(Object(n), !0).forEach(function (a) {
                r()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(o.a)(
          'svg',
          c(
            c({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.createElement(
            'g',
            null,
            l.createElement('path', {
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '381382024db1c0f7658c552063d30331',
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
          h = u(
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
        var _ = u(
          function (l) {
            var i = a(
              n,
              (0, t.default)(
                (0, t.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, a) {
                    h(i), l.onCompleted && l.onCompleted(e, a)
                  },
                  onError: function (e) {
                    h(i), l.onError && l.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(i), l.onUnsubscribe && l.onUnsubscribe()
                  },
                },
              ),
            )
            return g.current.add(i), r.current && y(!0), i
          },
          [h, a, n, r, e],
        )
        return [_, b]
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
            id: 'mH6wS7n2bcXQa7zgd4OixQ',
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
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: '1065a967d0ebd03f88788bad448193e0',
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
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '67e559561325b6b54fd989969ab3a7a9',
      }
      a.default = t
    },
    hznd: function (e, a, n) {
      'use strict'
      var t = n('97Jx'),
        r = n.n(t),
        l = n('ERkP'),
        i = n('BedV'),
        o = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        s = n.n(o),
        c = (n('ho0z'), n('t62R')),
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
                s()(e, a, n[a])
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
        w = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            r = e.checked,
            i = e.disabled,
            o = e.helpText,
            s = e.label,
            b = e.name,
            y = e.onChange,
            w = p.a.generate({
              backgroundColor: g.a.theme.colors.transparent,
              color: r ? g.a.theme.colors.primary : g.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return l.createElement(d.a, { disabled: i }, function (e) {
            return l.createElement(
              f.a,
              { style: h.root },
              l.createElement(
                f.a,
                { accessibilityRole: 'label', style: [h.base, h.border, !i && h.interactive] },
                l.createElement(
                  f.a,
                  { style: h.textContainer },
                  l.createElement(c.b, { weight: 'bold' }, s),
                  o && l.createElement(c.b, { color: 'gray700', size: 'subtext2', style: h.helpText }, o),
                ),
                l.createElement(
                  f.a,
                  { style: h.radioContainer },
                  l.createElement(
                    m.a,
                    { disabled: i, interactiveStyles: w, interactivityState: e, style: h.radioBackground },
                    l.createElement(
                      f.a,
                      {
                        style: [
                          h.circle,
                          r && h.circleActive,
                          i && h.circleDisabled,
                          r && i && h.circleCheckedAndDisabled,
                        ],
                      },
                      r ? l.createElement(u.a, { style: h.checkMark }) : null,
                    ),
                  ),
                  l.createElement('input', {
                    'aria-label': a,
                    'aria-posinset': n,
                    'aria-setsize': t,
                    checked: r,
                    disabled: i,
                    name: b,
                    onChange: r ? void 0 : y,
                    style: _,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      a.a = function (e) {
        return l.createElement(
          i.a,
          r()({}, e, {
            renderSelector: function (e) {
              return l.createElement(w, r()({}, e, { key: e.value }))
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
          return yo
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return X
        }),
        n.d(t, 'Arrow2x', function () {
          return J
        }),
        n.d(t, 'Arrow3x', function () {
          return Z
        }),
        n.d(t, 'Bench', function () {
          return $
        }),
        n.d(t, 'Bench2x', function () {
          return Y
        }),
        n.d(t, 'Bench3x', function () {
          return ee
        }),
        n.d(t, 'Cat', function () {
          return ae
        }),
        n.d(t, 'Cat2x', function () {
          return ne
        }),
        n.d(t, 'Cat3x', function () {
          return te
        }),
        n.d(t, 'Clipboard', function () {
          return re
        }),
        n.d(t, 'Clipboard2x', function () {
          return le
        }),
        n.d(t, 'Clipboard3x', function () {
          return ie
        }),
        n.d(t, 'CoinStairs', function () {
          return oe
        }),
        n.d(t, 'CoinStairs2x', function () {
          return se
        }),
        n.d(t, 'CoinStairs3x', function () {
          return ce
        }),
        n.d(t, 'HandCoins', function () {
          return ue
        }),
        n.d(t, 'HandCoins2x', function () {
          return de
        }),
        n.d(t, 'HandCoins3x', function () {
          return pe
        }),
        n.d(t, 'OneFinger', function () {
          return me
        }),
        n.d(t, 'OneFinger2x', function () {
          return ge
        }),
        n.d(t, 'OneFinger3x', function () {
          return fe
        }),
        n.d(t, 'PaperAirplane', function () {
          return be
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return ye
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return he
        }),
        n.d(t, 'Puzzle', function () {
          return _e
        }),
        n.d(t, 'Puzzle2x', function () {
          return we
        }),
        n.d(t, 'Puzzle3x', function () {
          return ve
        }),
        n.d(t, 'Thumbsup', function () {
          return Se
        }),
        n.d(t, 'Thumbsup2x', function () {
          return ke
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Fe
        }),
        n.d(t, 'TrafficLight', function () {
          return Ee
        }),
        n.d(t, 'TrafficLight2x', function () {
          return xe
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Ce
        }),
        n.d(t, 'Uturn', function () {
          return Ke
        }),
        n.d(t, 'Uturn2x', function () {
          return Oe
        }),
        n.d(t, 'Uturn3x', function () {
          return Le
        })
      var r,
        l,
        i,
        o = n('ERkP'),
        s = n('tI3i'),
        c = n.n(s),
        u = n('Ty5D'),
        d = o.createContext(),
        p = function (e) {
          var a = e.children
          return o.createElement(d.Provider, { value: Object(u.g)() }, a)
        },
        m = function () {
          var e = o.useContext(d)
          return c()(!!e, 'history must be defined'), e
        },
        g = n('v//M'),
        f = (n('enFi'), n('3XMw')),
        b = n.n(f),
        y = n('kGix'),
        h = n('/yvb'),
        _ = n('97Jx'),
        w = n.n(_),
        v = n('m3Bd'),
        S = n.n(v),
        k = n('jHSc'),
        F = n('lUZE'),
        E = 'https://help.twitter.com/using-twitter/super-follows-creator',
        x = n('6s7X'),
        C = function () {
          return o.createElement(h.a, { icon: o.createElement(x.a, null), link: E, pullLeft: !0, type: 'primaryText' })
        },
        K = n('JYMr'),
        O = n('rHpw'),
        L = b.a.a6777c1b,
        P = function (e) {
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
            s = m(),
            c = Object(u.g)(),
            d = a ? 'close' : 'back',
            p = a ? '/settings/monetization' : void 0,
            g = r ? o.createElement(F.a, { style: T.iconTwitter }) : void 0,
            f = l ? o.createElement(o.Fragment, null, o.createElement(C, null), t) : t,
            b = n ? o.createElement(K.a, { progress: n }) : void 0
          return o.createElement(
            k.b,
            w()({}, i, {
              backButtonType: d,
              backLocation: p,
              centeredLogo: g,
              documentTitle: L,
              onBackClick: function () {
                a ? s.push('/settings/monetization') : c.goBack()
              },
              rightControl: f,
              secondaryBar: b,
            }),
          )
        },
        T = O.a.create(function (e) {
          return { iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' } }
        }),
        D = b.a.g92a2343,
        R = b.a.a91bb144,
        B = function () {
          var e = Object(u.g)(),
            a = o.createElement(
              h.a,
              {
                onPress: function () {
                  e.push('/application/submit')
                },
                type: 'primaryFilled',
              },
              R,
            )
          return o.createElement(P, { rightControl: a, title: D })
        },
        A = (n('jQ3i'), n('x4t0'), n('z84I'), n('855f')),
        I = n('MWbm'),
        j = n('t62R'),
        M = n('WtWS'),
        z = n('0ULw'),
        V = function (e) {
          return e.items.map(function (e) {
            return o.createElement(
              I.a,
              { key: e.label, style: U.item },
              o.createElement(j.b, { style: U.label, weight: 'bold' }, e.label),
              e.checked
                ? o.createElement(M.a, { style: U.iconChecked })
                : o.createElement(z.a, { style: U.iconUnchecked }),
            )
          })
        },
        U = O.a.create(function (e) {
          return {
            iconChecked: { color: e.colors.primary },
            iconUnchecked: { color: e.colors.gray700 },
            item: { flexDirection: 'row', marginVertical: e.spaces.space12 },
            label: { flex: 1 },
          }
        }),
        W = function () {
          return o.createElement(
            j.b,
            { align: 'center', color: 'gray700' },
            o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              o.createElement(
                j.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                b.a.ebc0cbbc,
              ),
            ),
          )
        },
        H = n('ddV6'),
        q = n.n(H),
        N =
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
              s = Object(u.g)(),
              c = o.useState(!1),
              d = q()(c, 2),
              p = d[0],
              m = d[1],
              g = function () {
                ;(null != n ? n : s).push(l)
              }
            return o.createElement(
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
        G = n('jAXQ'),
        Q = n.n(G),
        X = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        J = n.p + 'Arrow@2x.8af675c5.png',
        Z = n.p + 'Arrow@3x.949d4365.png',
        $ = n.p + 'Bench.ed26a435.png',
        Y = n.p + 'Bench@2x.ef9fb7d5.png',
        ee = n.p + 'Bench@3x.a306fd55.png',
        ae = n.p + 'Cat.089435a5.png',
        ne = n.p + 'Cat@2x.bca70155.png',
        te = n.p + 'Cat@3x.2b225ef5.png',
        re = n.p + 'Clipboard.540710d5.png',
        le = n.p + 'Clipboard@2x.72ca72e5.png',
        ie = n.p + 'Clipboard@3x.1b952e95.png',
        oe = n.p + 'CoinStairs.8488b245.png',
        se = n.p + 'CoinStairs@2x.34fd5855.png',
        ce = n.p + 'CoinStairs@3x.1b706305.png',
        ue = n.p + 'HandCoins.fbd23965.png',
        de = n.p + 'HandCoins@2x.c1b62b75.png',
        pe = n.p + 'HandCoins@3x.7dd5f3d5.png',
        me = n.p + 'OneFinger.6eb5d9c5.png',
        ge = n.p + 'OneFinger@2x.a13e1ba5.png',
        fe = n.p + 'OneFinger@3x.7f22c175.png',
        be = n.p + 'PaperAirplane.1ef48a05.png',
        ye = n.p + 'PaperAirplane@2x.2923eb15.png',
        he = n.p + 'PaperAirplane@3x.47e4b145.png',
        _e = n.p + 'Puzzle.aa045515.png',
        we = n.p + 'Puzzle@2x.5be7ab15.png',
        ve = n.p + 'Puzzle@3x.1796b225.png',
        Se = n.p + 'Thumbsup.f5be79d5.png',
        ke = n.p + 'Thumbsup@2x.6d106945.png',
        Fe = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Ee = n.p + 'TrafficLight.11644b65.png',
        xe = n.p + 'TrafficLight@2x.5657de25.png',
        Ce = n.p + 'TrafficLight@3x.a5a35335.png',
        Ke = n.p + 'Uturn.c8267f55.png',
        Oe = n.p + 'Uturn@2x.db3f94d5.png',
        Le = n.p + 'Uturn@3x.22f27905.png',
        Pe = n('tn7R'),
        Te = n('TIdA'),
        De = n('A91F'),
        Re = 400,
        Be = 250,
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
        je = Object(Pe.a)(Ie).reduce(function (e, a) {
          var n = Math.max.apply(Math, Ae)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Re * n, height: Be * n },
              customVariants: Ae.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Re * e, height: Be * e }
              }),
            }),
            e
          )
        }, {}),
        Me = function (e) {
          var a = e.type,
            n = je[a],
            t = n.aspectRatio,
            r = n.customVariants,
            l = n.image
          return o.createElement(
            I.a,
            { style: ze.illustration },
            o.createElement(Te.a, {
              accessibilityLabel: '',
              aspectMode: De.a.exact(t),
              customVariants: r,
              draggable: !1,
              image: l,
            }),
          )
        },
        ze = O.a.create(function (e) {
          return { illustration: { alignSelf: 'center', width: Re, height: Be } }
        }),
        Ve = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return o.createElement(
            o.Fragment,
            null,
            t && o.createElement(Me, { type: t }),
            o.createElement(
              j.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title4',
                style: t && Ue.headline,
                weight: 'heavy',
              },
              n,
            ),
            o.createElement(j.b, { align: a, color: 'gray700', style: Ue.subtext }, r),
          )
        },
        Ue = O.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space48 }, subtext: { marginVertical: e.spaces.space12 } }
        }),
        We = b.a.feb54b4f,
        He = b.a.bac156a6,
        qe = b.a.a3a20a10,
        Ne = b.a.b26ae507,
        Ge = b.a.a753a87f,
        Qe = b.a.abfaa527,
        Xe = A.a.getTruncatedCount(1e4),
        Je = b.a.fdd95737({ minFollowersCount: Xe }),
        Ze = A.a.getTruncatedCount(25),
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
            label: b.a.a0dcad86({ minTweetsCount: Ze }),
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
        Ye = void 0 !== r ? r : (r = n('RLjm')),
        ea = function (e) {
          var a = e.user,
            n = Q()(Ye, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            r = t ? Ie.Arrow : Ie.TrafficLight,
            l = t ? We : qe,
            i = t ? He : Ne,
            s = $e.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            })
          return o.createElement(
            P,
            { withInfoButton: !0 },
            o.createElement(Ve, { headline: l, illustration: r, subtext: i }),
            o.createElement(V, { items: s }),
            t && o.createElement(W, null),
            o.createElement(N, { disabled: !t, label: Ge, path: '/application/one_more_thing' }),
            o.createElement(N, { label: Qe, path: '/application/one_more_thing' }),
          )
        },
        aa = n('9RkS'),
        na = b.a.bbb89925,
        ta = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            s = o.useState(i),
            c = q()(s, 2),
            u = c[0],
            d = c[1],
            p = Math.round(a * r * (u / 100))
          return o.createElement(
            I.a,
            { style: ra.container },
            o.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                o.createElement(j.b, { weight: 'bold' }, b.a.a7dd00ea),
                o.createElement(
                  j.b,
                  { style: ra.earnings, weight: 'heavy' },
                  b.a.c62c1d30({ earnings: '$'.concat(A.a.getTruncatedCount(p)) }),
                ),
                o.createElement(j.b, { color: 'green500', style: ra.asteriskLeft }, b.a.e0fb982b),
              ),
            ),
            o.createElement(
              I.a,
              { style: ra.slider },
              o.createElement(aa.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: na({ percent: u }),
                value: u,
              }),
            ),
            o.createElement(
              j.b,
              { color: 'green500', size: 'subtext3', style: ra.footnote },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                o.createElement(j.b, { style: ra.asteriskRight }, b.a.e263c38e),
              ),
            ),
          )
        },
        ra = O.a.create(function (e) {
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
          return o.createElement(
            I.a,
            { style: sa.container },
            o.createElement(ia.a, { Icon: a, color: 'neutral' }),
            o.createElement(j.b, { size: 'headline2', style: sa.title, weight: 'bold' }, t),
            o.createElement(j.b, { color: 'gray700', style: sa.description }, n),
          )
        },
        sa = O.a.create(function (e) {
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
          { Icon: ca.a, title: b.a.d31c5997, description: b.a.hda1e780 },
          { Icon: ua.a, title: b.a.d08d0bb2, description: b.a.cbd8b105 },
          { Icon: da.a, title: b.a.becb4930, description: b.a.g743ef96 },
        ],
        ma = function () {
          return o.createElement(
            la.a,
            null,
            pa.map(function (e) {
              return o.createElement(oa, w()({}, e, { key: e.title }))
            }),
          )
        },
        ga = b.a.a6777c1b,
        fa = b.a.j5dc36d7,
        ba = b.a.c45b2f06,
        ya = b.a.hb6b432e,
        ha = b.a.cd5cae15,
        _a = b.a.f7239f4c,
        wa = b.a.g8cdf707,
        va = b.a.bff8472e,
        Sa = b.a.e533715d,
        ka = void 0 !== l ? l : (l = n('xd+q')),
        Fa = function (e) {
          var a = e.user,
            n = Q()(ka, a).legacy.followers_count
          return o.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            o.createElement(
              j.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ga,
            ),
            o.createElement(j.b, null, fa),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ba,
            ),
            o.createElement(j.b, { color: 'gray700' }, ya),
            o.createElement(Me, { type: Ie.HandCoins }),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ha,
            ),
            o.createElement(ma, null),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            o.createElement(ta, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              wa,
            ),
            o.createElement(j.b, { color: 'gray700' }, va),
            o.createElement(N, { color: 'plum500', label: Sa, path: '/application/eligibility' }),
          )
        },
        Ea = b.a.d0fc4890,
        xa = b.a.c64384b6,
        Ca = b.a.c3d89aca,
        Ka = function () {
          return o.createElement(
            P,
            { withInfoButton: !0 },
            o.createElement(Ve, { align: 'center', headline: Ea, illustration: Ie.OneFinger, subtext: xa }),
            o.createElement(N, { label: Ca, path: '/application/complete_profile' }),
          )
        },
        Oa = (n('2G9S'), n('Hsf0')),
        La = n.n(Oa),
        Pa = 'super_follows_application_draft',
        Ta = 'super_follows_onboarding_draft',
        Da = function (e) {
          return La()(void 0 !== i ? i : (i = n('PlkH')), e).__id
        },
        Ra = function (e, a) {
          var n = Da(a),
            t = e.get(n)
          return c()(t, 'viewer must be defined'), t
        },
        Ba = function (e, a) {
          return Ra(e, a).getLinkedRecord(Pa)
        },
        Aa = function (e, a) {
          return Ra(e, a).getLinkedRecord(Ta)
        },
        Ia = n('HG4m'),
        ja = n.n(Ia),
        Ma = n('Ud88'),
        za = n.n(Ma)
      function Va(e, a) {
        var n = za()()
        o.useEffect(
          function () {
            c()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
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
                    h = Ra(e, a)
                  if (!Ba(e, a)) {
                    var _ = e.create(''.concat(y, ':').concat(Pa), 'SuperFollowsApplicationDraft')
                    _.setValue(r, 'content_category'),
                      _.setValue(i, 'content_category_other'),
                      _.setValue(s, 'content_creation_platform'),
                      _.setValue(u, 'content_creation_platform_other'),
                      _.setValue(b, 'purpose'),
                      _.setValue(p, 'ethnicity'),
                      _.setValue(g, 'gender'),
                      h.setLinkedRecord(_, Pa)
                  }
                })(n, e, a)
              })
          },
          [a, n, e],
        )
      }
      function Ua(e, a) {
        var n = za()()
        o.useEffect(
          function () {
            c()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
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
                    var d = e.create(''.concat(c, ':').concat(Ta), 'SuperFollowsOnboardingDraft')
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
      function Wa(e, a) {
        var n = za()()
        return o.useCallback(
          function (t) {
            c()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ba(e, a)
                  c()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function Ha(e, a) {
        var n = za()()
        return o.useCallback(
          function (t) {
            c()(e, 'viewerId must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Aa(e, a)
                  c()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var qa,
        Na,
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
        hn,
        _n,
        wn,
        vn,
        Sn,
        kn = n('p+r5'),
        Fn = b.a.f7997b16,
        En = b.a.fc00ab5b,
        xn = b.a.c249167f,
        Cn = b.a.b772cd65,
        Kn = void 0 !== qa ? qa : (qa = n('xhT1')),
        On = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Q()(Kn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Wa(r, 'content_category_other')
          return o.createElement(
            P,
            { title: Fn },
            o.createElement(kn.a, {
              helperText: xn,
              label: En,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(h.a, null, Cn),
          )
        },
        Ln = n('fyvP'),
        Pn = n('csss'),
        Tn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(u.g)()
          return o.createElement(Pn.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        Dn = b.a.f7997b16,
        Rn = b.a.c144fa52,
        Bn = [
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
        An = b.a.c365dcc5,
        In = b.a.bd44a8a8,
        jn = void 0 !== Na ? Na : (Na = n('JB6R')),
        Mn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Q()(jn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Wa(r, 'content_category'),
            s = Bn.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            P,
            { title: Dn },
            o.createElement(Ln.a, {
              description: Rn,
              label: Rn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Tn, { helpText: In, label: An, path: '/application/submit_categories_other' }),
          )
        },
        zn = b.a.d94a9a17,
        Vn = b.a.a35394b3,
        Un = [
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
        Wn = void 0 !== Ga ? Ga : (Ga = n('H1we')),
        Hn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Q()(Wn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Wa(r, 'ethnicity'),
            s = Un.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            P,
            { title: zn },
            o.createElement(Ln.a, {
              description: Vn,
              label: Vn,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: l[0],
            }),
          )
        },
        qn = b.a.a8d0108d,
        Nn = b.a.a35394b3,
        Gn = [
          b.a.de32365f,
          b.a.b6ab31bd,
          b.a.ffc23188,
          b.a.h1cc7091,
          b.a.hca27829,
          b.a.b3af7344,
          b.a.he3f1435,
          b.a.c3c16abb,
        ],
        Qn = void 0 !== Qa ? Qa : (Qa = n('VG5i')),
        Xn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Q()(Qn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Wa(r, 'gender'),
            s = Gn.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            P,
            { title: qn },
            o.createElement(Ln.a, {
              description: Nn,
              label: Nn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: l[0],
            }),
          )
        },
        Jn = b.a.da8ea7da,
        Zn = b.a.d7081f91,
        $n = b.a.j349548f,
        Yn = b.a.b772cd65,
        et = void 0 !== Xa ? Xa : (Xa = n('+OUG')),
        at = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Q()(et, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Wa(r, 'content_creation_platform_other')
          return o.createElement(
            P,
            { title: Jn },
            o.createElement(kn.a, {
              helperText: $n,
              label: Zn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(h.a, null, Yn),
          )
        },
        nt = b.a.da8ea7da,
        tt = b.a.d4062c9a,
        rt = [b.a.a3021317, b.a.eb4a600d, b.a.d4d74bb3, b.a.fc738909, b.a.d8552c1a, b.a.ca07aa46],
        lt = b.a.c365dcc5,
        it = b.a.bd44a8a8,
        ot = void 0 !== Ja ? Ja : (Ja = n('xnrs')),
        st = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Q()(ot, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Wa(r, 'content_creation_platform'),
            s = rt.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            P,
            { title: nt },
            o.createElement(Ln.a, {
              description: tt,
              label: tt,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Tn, { helpText: it, label: lt, path: '/application/submit_platforms_other' }),
          )
        },
        ct = (n('tVqn'), n('uFXj'), b.a.f4f4dd6f),
        ut = b.a.f448cbcb,
        dt = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? ct : 'optional' === n ? ut : void 0
          return o.createElement(
            I.a,
            { style: pt.container },
            o.createElement(j.b, { size: 'headline1', weight: 'heavy' }, a),
            r && o.createElement(j.b, { color: t, size: 'subtext2', style: pt.subtext }, r),
          )
        },
        pt = O.a.create(function (e) {
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
        mt = n('jV+4'),
        gt = n('Xrkv'),
        ft = n('9SqB'),
        bt = n.n(ft),
        yt = b.a.e873f0ae,
        ht = b.a.f095a24a,
        _t = b.a.i5f7b6b8,
        wt = b.a.d1f6d336,
        vt = b.a.f7997b16,
        St = b.a.c144fa52,
        kt = b.a.f1bf337d,
        Ft = b.a.da8ea7da,
        Et = b.a.d4062c9a,
        xt = b.a.e963d587,
        Ct = b.a.ede0ac3e,
        Kt = b.a.ffb6cb88,
        Ot = b.a.b2159e8e,
        Lt = b.a.feacb49d,
        Pt = b.a.je17c987,
        Tt = b.a.d94a9a17,
        Dt = b.a.a8d0108d,
        Rt = b.a.gfc80842,
        Bt = void 0 !== Za ? Za : (Za = n('pLb/')),
        At = void 0 !== $a ? $a : ($a = n('3qCL')),
        It = void 0 !== Ya ? Ya : (Ya = n('AyUU')),
        jt = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            s,
            c = e.user,
            u = e.viewer,
            d = Q()(Bt, c),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = Q()(At, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == g ? void 0 : g.content_category_other) && void 0 !== n ? n : [],
            ),
            b = (null !== (t = null == g ? void 0 : g.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            y = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            h = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            _ = null !== (s = null == g ? void 0 : g.gender) && void 0 !== s ? s : [],
            w = f.length && b.length && y.trim(),
            v = Wa(m, 'purpose'),
            S = bt()(It),
            k = q()(S, 2),
            F = k[0],
            E = k[1]
          return o.createElement(
            P,
            { withInfoButton: !0 },
            o.createElement(Ve, { headline: yt, illustration: Ie.Clipboard, subtext: ht }),
            o.createElement(dt, { title: _t }),
            o.createElement(j.b, null, wt),
            p && o.createElement(mt.a, { screenName: p }),
            o.createElement(dt, { title: vt, type: 'required' }),
            o.createElement(j.b, { color: 'gray700' }, St),
            o.createElement(Tn, {
              description: Object(gt.a)(f, !0),
              label: kt,
              path: '/application/submit_categories',
            }),
            o.createElement(dt, { title: Ft, type: 'required' }),
            o.createElement(j.b, { color: 'gray700' }, Et),
            o.createElement(Tn, { description: Object(gt.a)(b, !0), label: xt, path: '/application/submit_platforms' }),
            o.createElement(dt, { title: Ct, type: 'required' }),
            o.createElement(kn.a, {
              helperText: Ot,
              label: Kt,
              name: 'plannedUsage',
              onChange: function (e) {
                v(e.currentTarget.value)
              },
              value: y,
            }),
            o.createElement(dt, { title: Lt, type: 'optional' }),
            o.createElement(j.b, { color: 'gray700' }, Pt),
            o.createElement(Tn, {
              description: Object(gt.a)(h, !0),
              label: Tt,
              path: '/application/submit_ethnicities',
            }),
            o.createElement(Tn, { description: Object(gt.a)(_, !0), label: Dt, path: '/application/submit_genders' }),
            o.createElement(W, null),
            o.createElement(N, {
              disabled: !w || E,
              label: Rt,
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
              path: '/submitted',
            }),
          )
        },
        Mt = void 0 !== en ? en : (en = n('o/nB')),
        zt = void 0 !== an ? an : (an = n('lZLw')),
        Vt = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Q()(Mt, a),
            r = Q()(zt, n)
          return (
            Va(r),
            o.createElement(
              u.e,
              null,
              o.createElement(u.c, { exact: !0, path: '/application/eligibility' }, o.createElement(ea, { user: t })),
              o.createElement(u.c, { exact: !0, path: '/application/one_more_thing' }, o.createElement(Ka, null)),
              o.createElement(u.c, { exact: !0, path: '/application/complete_profile' }, o.createElement(B, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit' },
                o.createElement(jt, { user: t, viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories' },
                o.createElement(Mn, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories_other' },
                o.createElement(On, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms' },
                o.createElement(st, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms_other' },
                o.createElement(at, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_ethnicities' },
                o.createElement(Hn, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_genders' },
                o.createElement(Xn, { viewer: r }),
              ),
              o.createElement(u.c, { path: '/application' }, o.createElement(Fa, { user: t })),
            )
          )
        },
        Ut = (n('ho0z'), n('cHvH')),
        Wt = function (e) {
          var a = e.children,
            n = e.style
          return o.createElement(Ut.a, null, function (e) {
            var t = e.windowWidth > O.a.theme.breakpoints.small
            return o.createElement(
              I.a,
              { style: [Ht.root, n] },
              o.createElement(
                I.a,
                { style: Ht.browserBar },
                o.createElement(
                  I.a,
                  { style: Ht.browserBarButtons },
                  o.createElement(I.a, { style: Ht.browserBarButton }),
                  o.createElement(I.a, { style: Ht.browserBarButton }),
                  o.createElement(I.a, { style: Ht.browserBarButton }),
                ),
                o.createElement(
                  I.a,
                  { style: Ht.browserBarUrlInputWrapper },
                  o.createElement(I.a, { style: Ht.browserBarUrlInput }),
                ),
              ),
              o.createElement(
                I.a,
                { style: [Ht.contentWrapper, t && Ht.contentWrapperWideMargins] },
                o.createElement(I.a, { style: Ht.content }, a),
              ),
            )
          })
        },
        Ht = O.a.create(function (e) {
          return {
            root: {
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
            contentWrapper: {
              borderBottomLeftRadius: e.borderRadii.medium,
              borderBottomRightRadius: e.borderRadii.medium,
              paddingBottom: e.spaces.space24,
              paddingHorizontal: e.spaces.space16,
              paddingTop: e.spaces.space16,
            },
            contentWrapperWideMargins: { paddingHorizontal: e.spaces.space32 },
            content: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.medium,
              minHeight: 400,
              overflow: 'hidden',
            },
          }
        }),
        qt = n('VTDR'),
        Nt = n('MAc7'),
        Gt = o.forwardRef(function (e, a) {
          return o.createElement(
            Wt,
            { style: Qt.mockBrowserWindow },
            o.createElement(
              I.a,
              { style: Qt.mockBrowserWindowContent },
              o.createElement(qt.a, null),
              o.createElement(Nt.a, w()({}, e, { ref: a })),
            ),
          )
        }),
        Qt = O.a.create(function (e) {
          return {
            mockBrowserWindow: { marginVertical: e.spaces.space24, maxWidth: '600px' },
            mockBrowserWindowContent: { padding: e.spaces.space24 },
          }
        }),
        Xt = b.a.iba08a94,
        Jt = b.a.bcb1e4e6,
        Zt = void 0 !== nn ? nn : (nn = n('JK1g')),
        $t = void 0 !== tn ? tn : (tn = n('yqZQ')),
        Yt = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = Q()(Zt, t),
            i = Q()($t, r),
            s = l.legacy,
            u = s.name,
            d = s.profile_image_url_https,
            p =
              null !==
                (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : ''
          return (
            c()('string' == typeof d, 'imageUrl must be defined'),
            c()('string' == typeof u, 'name must be defined'),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(Ve, { headline: Xt, subtext: Jt }),
              o.createElement(Gt, { imageUrl: d, name: u, value: p }),
            )
          )
        },
        er = b.a.hf6f2913,
        ar = void 0 !== rn ? rn : (rn = n('MvEh')),
        nr = void 0 !== ln ? ln : (ln = n('U5ka')),
        tr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Q()(ar, a),
            r = Q()(nr, n)
          return o.createElement(P, { title: er, withInfoButton: !0 }, o.createElement(Yt, { user: t, viewer: r }))
        },
        rr = n('efqG'),
        lr = n('5emT'),
        ir = b.a.ab793af9,
        or = b.a.fb278c81,
        sr = b.a.e6b60e94,
        cr = b.a.j24c37b2,
        ur = O.a.create(function (e) {
          return {
            root: { margin: e.spaces.space32 },
            triggerLabel: { marginRight: e.spaces.space8 },
            headlineText: { marginVertical: e.spaces.space16 },
            triggerIcon: { color: e.colors.gray700 },
            paragraphText: { marginBottom: e.spaces.space20 },
            triggerContentWrapper: { alignSelf: 'center', flexDirection: 'row' },
          }
        }),
        dr = function () {
          return o.createElement(
            rr.a,
            {
              renderContent: function (e) {
                return o.createElement(
                  I.a,
                  { style: ur.root },
                  o.createElement(ia.a, { Icon: lr.a, color: 'neutral', size: 'xxxLarge' }),
                  o.createElement(j.b, { size: 'title3', style: ur.headlineText, weight: 'heavy' }, or),
                  o.createElement(j.b, { color: 'gray700', style: ur.paragraphText }, sr),
                  o.createElement(h.a, { onClick: e, size: 'xLarge', type: 'primaryFilled' }, cr),
                )
              },
            },
            o.createElement(
              I.a,
              { accessibilityRole: 'button', style: ur.triggerContentWrapper },
              o.createElement(j.b, { color: 'gray700', style: ur.triggerLabel }, ir),
              o.createElement(x.a, { style: ur.triggerIcon }),
            ),
          )
        },
        pr = b.a.j3253319,
        mr = b.a.h1e80993,
        gr = b.a.j679dcda,
        fr = void 0 !== on ? on : (on = n('S3B+')),
        br = void 0 !== sn ? sn : (sn = n('qrhN')),
        yr = o.forwardRef(function (e, a) {
          var n,
            t,
            r = e.user,
            l = e.viewer,
            i = Q()(fr, r),
            s = Q()(br, l),
            u = i.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m =
              null !==
                (n = null === (t = s.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            g = Ha(s, 'creator_intro')
          return (
            c()('string' == typeof p, 'image must be defined'),
            c()('string' == typeof d, 'name must be defined'),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(Ve, { headline: pr, subtext: mr }),
              o.createElement(N, {
                label: gr,
                path: '/onboarding/perks_intro_examples',
                style: hr.examplesLink,
                type: 'primaryText',
              }),
              o.createElement(dr, null),
              o.createElement(Gt, {
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
        }),
        hr = O.a.create(function (e) {
          return { examplesLink: { alignSelf: 'center', marginBottom: e.spaces.space12 } }
        }),
        _r = yr,
        wr = b.a.cd5cae15,
        vr = b.a.abd845fd,
        Sr = b.a.b772cd65,
        kr = void 0 !== cn ? cn : (cn = n('oyMe')),
        Fr = void 0 !== un ? un : (un = n('RL7R')),
        Er = void 0 !== dn ? dn : (dn = n('VzX/')),
        xr = O.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        Cr = function (e) {
          var a,
            n,
            t,
            r = e.user,
            l = e.viewer,
            i = o.useRef(),
            s = Q()(kr, r),
            c = Q()(Fr, l),
            u = null === (a = s.super_follow_creator_benefits) || void 0 === a ? void 0 : a.benefits_data,
            d =
              null !==
                (n = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            p = bt()(Er),
            m = q()(p, 2),
            g = m[0],
            f = m[1],
            b = !!d
          return o.createElement(
            P,
            { title: wr },
            o.createElement(_r, { ref: i, user: s, viewer: c }),
            o.createElement(
              I.a,
              { style: xr.buttonsWrapper },
              o.createElement(
                h.a,
                {
                  onClick: function () {
                    var e
                    null == i || null === (e = i.current) || void 0 === e || e.focus()
                  },
                  size: 'large',
                  type: 'primaryOutlined',
                },
                vr,
              ),
              o.createElement(N, {
                disabled: !b || f,
                label: Sr,
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
        Kr = n('fs1G'),
        Or = n('9VLy'),
        Lr = n('0yYu'),
        Pr = n('4zmP'),
        Tr = b.a.a6777c1b,
        Dr = b.a.b4a93a91,
        Rr = b.a.c0348963,
        Br = b.a.d08d0bb2,
        Ar = b.a.ea4c3496,
        Ir = b.a.ea92cfe3,
        jr = b.a.ia9c37c4,
        Mr = b.a.hc2c5a8b,
        zr = b.a.be54a312,
        Vr = b.a.bc6d85b3,
        Ur = b.a.b7bc895e,
        Wr = b.a.f3ce76c0,
        Hr = b.a.e9e3b3f7,
        qr = b.a.a79bf10a,
        Nr = b.a.a3932653,
        Gr = b.a.a1ef1964,
        Qr = b.a.abd845fd,
        Xr = b.a.c9f7c195,
        Jr = b.a.g5925628,
        Zr = b.a.jfb2bf30,
        $r = b.a.a962b5d8,
        Yr = b.a.dba12b51,
        el = void 0 !== pn ? pn : (pn = n('EM6u')),
        al = void 0 !== mn ? mn : (mn = n('oNwH')),
        nl = void 0 !== gn ? gn : (gn = n('qOMr')),
        tl = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = e.viewer,
            s = Q()(el, r),
            c = (s.$refType, S()(s, ['$refType'])),
            u = Q()(al, l),
            d = Q()(nl, i).super_follows_onboarding_draft,
            p = null !== (a = null == d ? void 0 : d.creator_intro) && void 0 !== a ? a : '',
            m = null !== (n = null == d ? void 0 : d.description) && void 0 !== n ? n : '',
            g = null !== (t = null == d ? void 0 : d.selected_price) && void 0 !== t ? t : 'offer2'
          return o.createElement(
            P,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            o.createElement(
              j.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Tr,
            ),
            o.createElement(Lr.a, null),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Dr,
            ),
            o.createElement(N, { label: Gr, path: '/management/perks_confirm', type: 'primaryText' }),
            o.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Rr,
            ),
            o.createElement(N, { label: Qr, path: '/management/perks_intro', type: 'primaryOutlined' }),
            o.createElement(j.b, { color: 'gray700' }, p),
            o.createElement(Or.a, { user: u }),
            o.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Br,
            ),
            o.createElement(j.b, { color: 'gray700' }, m),
            o.createElement(Or.a, { user: u }),
            o.createElement(
              j.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Ar,
            ),
            o.createElement(j.b, { color: 'gray700' }, Ir),
            o.createElement(Lr.a, null),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              jr,
            ),
            o.createElement(j.b, { color: 'gray700' }, Mr),
            o.createElement(j.b, { size: 'headline2', weight: 'heavy' }, zr({ price: c[g] })),
            o.createElement(Pr.a, { headline: Vr, text: Ur }),
            o.createElement(Lr.a, null),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Wr,
            ),
            o.createElement(j.b, { color: 'gray700' }, Hr),
            o.createElement(h.a, { link: E, type: 'brandOutlined' }, Xr),
            o.createElement(
              h.a,
              { link: 'https://help.twitter.com/forms/paid-features/superfollows', type: 'brandOutlined' },
              Jr,
            ),
            o.createElement(Lr.a, null),
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              qr,
            ),
            o.createElement(j.b, { color: 'gray700' }, Nr),
            o.createElement(h.a, { link: 'https://t.co/jPqvg6tFrDJG', type: 'brandFilled' }, Zr),
            o.createElement(h.a, { link: 'https://t.co/RL2NN3bEVkes', type: 'brandOutlined' }, $r),
            o.createElement(Lr.a, null),
            o.createElement(h.a, { onPress: Kr.a, type: 'destructiveText' }, Yr),
          )
        },
        rl = void 0 !== fn ? fn : (fn = n('MXCg')),
        ll = void 0 !== bn ? bn : (bn = n('mEFY')),
        il = void 0 !== yn ? yn : (yn = n('d8Sa')),
        ol = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            r = e.user,
            l = e.viewer,
            i = Q()(rl, t),
            s = Q()(ll, r),
            c = Q()(il, l),
            d = null !== (a = s.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ua(c, {
              creator_intro: d.creator_intro,
              description: q()(m, 1)[0].description,
              selected_price: (null !== (n = s.super_follow_creator_price_metadata) && void 0 !== n ? n : {})
                .selected_price,
            }),
            o.createElement(
              u.e,
              null,
              o.createElement(
                u.c,
                { exact: !0, path: '/management/perks_intro' },
                o.createElement(Cr, { user: s, viewer: c }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/management/perks_confirm' },
                o.createElement(tr, { user: s, viewer: c }),
              ),
              o.createElement(
                u.c,
                { path: '/management' },
                o.createElement(tl, { priceOfferings: i, user: s, viewer: c }),
              ),
            )
          )
        },
        sl = (n('5BYb'), b.a.b422cb62),
        cl = b.a.f08705e0,
        ul = b.a.fc5bfd95,
        dl = b.a.e2cd700f,
        pl = b.a.fbfd7397,
        ml = b.a.c3d89aca,
        gl = [
          {
            label: b.a.d8637c96,
            test: function (e) {
              var a,
                n = null !== (a = e.viewer.super_follows_onboarding_draft) && void 0 !== a ? a : {},
                t = n.creator_intro,
                r = n.description
              return !!t && !!r
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
        fl = void 0 !== hn ? hn : (hn = n('wQp3')),
        bl = void 0 !== _n ? _n : (_n = n('tfBr')),
        yl = O.a.create(function (e) {
          return { navigationButton: { marginHorizontal: e.spaces.space80, marginVertical: e.spaces.space24 } }
        }),
        hl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Q()(fl, a),
            r = Q()(bl, n),
            l = gl.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: t, viewer: r }) }
            }),
            i = l.some(function (e) {
              return e.checked
            }),
            s = o.createElement(N, {
              label: i ? ml : ul,
              path: '/onboarding/perks_intro',
              size: 'xLarge',
              style: yl.navigationButton,
              type: 'primaryFilled',
            })
          return o.createElement(
            P,
            { bottomBar: s, leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            o.createElement(Ve, { headline: i ? dl : sl, illustration: i ? Ie.Puzzle : Ie.Cat, subtext: i ? pl : cl }),
            o.createElement(V, { items: l }),
          )
        },
        _l = b.a.cd5cae15,
        wl = b.a.b83662ac,
        vl = b.a.cda6bb6d,
        Sl = b.a.a15b98ec,
        kl = b.a.c1df579e,
        Fl = function () {
          return o.createElement(
            P,
            { subtitle: wl, title: _l, withInfoButton: !0 },
            o.createElement(Ve, { headline: vl, subtext: Sl }),
            o.createElement(dr, null),
            o.createElement(N, { label: kl, path: '/onboarding/perks_confirm' }),
          )
        },
        El = b.a.d94d5707,
        xl = void 0 !== wn ? wn : (wn = n('Rthh')),
        Cl = void 0 !== vn ? vn : (vn = n('aREQ')),
        Kl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Q()(xl, a),
            r = Q()(Cl, n)
          return o.createElement(P, { title: El, withInfoButton: !0 }, o.createElement(Yt, { user: t, viewer: r }))
        },
        Ol = b.a.ebfb897c,
        Ll = b.a.dc4feb19,
        Pl = b.a.c183d271,
        Tl = b.a.ic130fd5,
        Dl = b.a.dd913e24,
        Rl = b.a.h580543e,
        Bl = function () {
          return o.createElement(
            P,
            { title: Ol },
            o.createElement(
              j.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ll,
            ),
            o.createElement(j.b, { color: 'gray700' }, Pl),
            o.createElement(j.b, null, Tl),
            o.createElement(j.b, null, Dl),
            o.createElement(j.b, null, Rl),
          )
        },
        Al = b.a.cd5cae15,
        Il = b.a.d80af370,
        jl = b.a.gf32cca1,
        Ml = b.a.j8ba99b3,
        zl = b.a.j679dcda,
        Vl = b.a.a329ce87,
        Ul = b.a.be76dc33,
        Wl = b.a.abd845fd,
        Hl = b.a.c1df579e,
        ql = void 0 !== Sn ? Sn : (Sn = n('tJ4s')),
        Nl = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Q()(ql, t),
            l =
              null !== (a = null === (n = r.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== a
                ? a
                : '',
            i = Ha(r, 'description')
          return o.createElement(
            P,
            { subtitle: Il, title: Al, withInfoButton: !0 },
            o.createElement(Ve, { headline: jl, subtext: Ml }),
            o.createElement(N, { label: zl, path: '/onboarding/perks_description_examples', type: 'primaryText' }),
            o.createElement(dr, null),
            o.createElement(kn.a, {
              label: Vl,
              name: 'description',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l || '',
            }),
            o.createElement(h.a, { type: 'primaryFilled' }, Ul),
            o.createElement(h.a, { type: 'primaryOutlined' }, Wl),
            o.createElement(N, { disabled: !l, label: Hl, path: '/onboarding/perks_badges' }),
          )
        },
        Gl = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        Ql = n.n(Gl),
        Xl = n('Lsrn'),
        Jl = n('k/Ka')
      function Zl(e, a) {
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
      function $l(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? Zl(Object(n), !0).forEach(function (a) {
                Ql()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zl(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var Yl = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Jl.a)(
          'svg',
          $l(
            $l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Xl.a.root, e.style], viewBox: '0 0 24 24' },
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
      Yl.metadata = { width: 24, height: 24 }
      var ei,
        ai,
        ni,
        ti,
        ri,
        li,
        ii,
        oi,
        si,
        ci,
        ui = Yl,
        di = n('JWc1'),
        pi = b.a.ebfb897c,
        mi = b.a.dc4feb19,
        gi = b.a.a0bb2076,
        fi = b.a.ace46d40,
        bi = b.a.h2c4511f,
        yi = b.a.hbe4f99e,
        hi = O.a.create(function (e) {
          return {
            exampleIntros: { marginLeft: e.spaces.space36 },
            headlineWrapper: { flexDirection: 'row', marginBottom: e.spaces.space12 },
            headline: { marginLeft: e.spaces.space8 },
            subtext: { marginLeft: e.spaces.space36 },
          }
        }),
        _i = function () {
          return o.createElement(
            P,
            { title: pi },
            o.createElement(
              I.a,
              { style: hi.headlineWrapper },
              o.createElement(ia.a, { Icon: ui, color: 'neutral', size: 'large' }),
              o.createElement(
                j.b,
                {
                  accessibilityLevel: 2,
                  accessibilityRole: 'heading',
                  size: 'title4',
                  style: hi.headline,
                  weight: 'heavy',
                },
                mi,
              ),
            ),
            o.createElement(j.b, { color: 'gray700', style: hi.subtext }, gi),
            o.createElement(
              I.a,
              { style: hi.exampleIntros },
              o.createElement(di.a, { value: fi }),
              o.createElement(di.a, { value: bi }),
              o.createElement(di.a, { value: yi }),
            ),
          )
        },
        wi = b.a.cd5cae15,
        vi = b.a.ef08a890,
        Si = b.a.b16680ff,
        ki = b.a.abd845fd,
        Fi = b.a.c1df579e,
        Ei = void 0 !== ei ? ei : (ei = n('02qo')),
        xi = void 0 !== ai ? ai : (ai = n('TXsE')),
        Ci = O.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        Ki = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = o.useRef(),
            i = Q()(Ei, t),
            s = Q()(xi, r),
            c = !!(null !==
              (a = null === (n = s.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
            void 0 !== a
              ? a
              : '')
          return o.createElement(
            P,
            { subtitle: vi, title: wi },
            o.createElement(_r, { ref: l, user: i, viewer: s }),
            o.createElement(
              I.a,
              { style: Ci.buttonsWrapper },
              o.createElement(
                h.a,
                {
                  onClick: function () {
                    var e
                    null == l || null === (e = l.current) || void 0 === e || e.focus()
                  },
                  size: 'large',
                  type: 'primaryOutlined',
                },
                c ? ki : Si,
              ),
              o.createElement(N, { disabled: !c, label: Fi, path: '/onboarding/perks_description', size: 'large' }),
            ),
          )
        },
        Oi = (n('7xRU'), n('hznd')),
        Li = b.a.ea8a3d2d,
        Pi = b.a.ic9124bf,
        Ti = b.a.g5923869,
        Di = {
          offer1: [b.a.f025ab39, b.a.c5602dfd],
          offer2: [b.a.ib075804, b.a.j8a72f06],
          offer3: [b.a.c246656e, b.a.a92ab16c],
        },
        Ri = b.a.c1df579e,
        Bi = void 0 !== ni ? ni : (ni = n('5jO1')),
        Ai = void 0 !== ti ? ti : (ti = n('mKqc')),
        Ii = void 0 !== ri ? ri : (ri = n('p785')),
        ji = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            r = e.viewer,
            l = Q()(Bi, t),
            i = (l.$refType, S()(l, ['$refType'])),
            s = Q()(Ai, r),
            c = s.super_follows_onboarding_draft,
            u = null !== (a = null == c ? void 0 : c.creator_intro) && void 0 !== a ? a : '',
            d = null !== (n = null == c ? void 0 : c.description) && void 0 !== n ? n : '',
            p = null == c ? void 0 : c.selected_price,
            m = Ha(s, 'selected_price'),
            g = bt()(Ii),
            f = q()(g, 2),
            y = f[0],
            h = f[1],
            _ = o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              o.createElement(j.b, { link: E }, b.a.c336b06a),
            ),
            w = Object.keys(i).map(function (e) {
              return { label: Ti({ price: i[e] }), value: e, helpText: Di[e].join(' ') }
            })
          return o.createElement(
            P,
            { title: Li, withInfoButton: !0 },
            o.createElement(Ve, { headline: Pi, subtext: _ }),
            o.createElement(Oi.a, {
              label: Pi,
              name: 'selectedPrice',
              onChange: function (e, a) {
                m(a)
              },
              options: w,
              value: p,
            }),
            o.createElement(N, {
              disabled: !p || h,
              label: Ri,
              onPress: function () {
                return new Promise(function (e, a) {
                  if (!p) return a(new Error('No price selected'))
                  y({
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
            }),
          )
        },
        Mi = b.a.e20f6661,
        zi = b.a.a9ee1ecc,
        Vi = b.a.j24c37b2,
        Ui = function () {
          var e = m()
          return o.createElement(
            P,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            o.createElement(Ve, { headline: Mi, illustration: Ie.Thumbsup, subtext: zi }),
            o.createElement(N, { history: e, label: Vi, path: '/settings/monetization' }),
          )
        },
        Wi = b.a.e2cd700f,
        Hi = b.a.d6bfb60c,
        qi = b.a.b9cbb370,
        Ni = function () {
          return o.createElement(
            P,
            { withInfoButton: !0 },
            o.createElement(Ve, { headline: Wi, illustration: Ie.Puzzle, subtext: Hi }),
            o.createElement(N, { label: qi, path: '/onboarding/stripe_setup' }),
          )
        },
        Gi = n('8jkQ'),
        Qi = b.a.ja884230,
        Xi = b.a.af1b808d,
        Ji = b.a.fe339750,
        Zi = b.a.j912510a,
        $i = void 0 !== li ? li : (li = n('xHLM')),
        Yi = function () {
          var e = bt()($i),
            a = q()(e, 2),
            n = a[0],
            t = a[1],
            r = function () {
              n({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && Gi.b.navigateTo(n)
                },
              })
            }
          return o.createElement(
            P,
            { withInfoButton: !0 },
            o.createElement(Ve, { headline: Qi, illustration: Ie.CoinStairs, subtext: Xi }),
            o.createElement(h.a, { disabled: t, onPress: r, type: 'primaryFilled' }, Ji),
            o.createElement(h.a, { disabled: t, onPress: r, type: 'primaryOutlined' }, Zi),
          )
        },
        eo = void 0 !== ii ? ii : (ii = n('UNVS')),
        ao = void 0 !== oi ? oi : (oi = n('6byF')),
        no = void 0 !== si ? si : (si = n('dNhZ')),
        to = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            r = e.user,
            l = e.viewer,
            i = Q()(eo, t),
            s = Q()(ao, r),
            c = Q()(no, l),
            d = null !== (a = s.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ua(c, {
              creator_intro: d.creator_intro,
              description: q()(m, 1)[0].description,
              selected_price: (null !== (n = s.super_follow_creator_price_metadata) && void 0 !== n ? n : {})
                .selected_price,
            }),
            o.createElement(
              u.e,
              null,
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_intro' },
                o.createElement(Ki, { user: s, viewer: c }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_intro_examples' }, o.createElement(_i, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description' },
                o.createElement(Nl, { viewer: c }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description_examples' },
                o.createElement(Bl, null),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_badges' }, o.createElement(Fl, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_confirm' },
                o.createElement(Kl, { user: s, viewer: c }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/pricing' },
                o.createElement(ji, { priceOfferings: i, viewer: c }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_setup' }, o.createElement(Yi, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_incomplete' }, o.createElement(Ni, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_completed' }, o.createElement(Ui, null)),
              o.createElement(u.c, { path: '/onboarding' }, o.createElement(hl, { user: s, viewer: c })),
            )
          )
        },
        ro = b.a.aa7e35ed,
        lo = b.a.f67e69bf,
        io = function () {
          return o.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            o.createElement(Ve, { headline: ro, illustration: Ie.Uturn, subtext: lo }),
          )
        },
        oo = b.a.d3d6c52c,
        so = b.a.c53e9129,
        co = function () {
          return o.createElement(
            P,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            o.createElement(Ve, { headline: oo, illustration: Ie.PaperAirplane, subtext: so }),
          )
        },
        uo = b.a.j274e6aa,
        po = b.a.d7f65127,
        mo = function () {
          return o.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            o.createElement(Ve, { headline: uo, illustration: Ie.Bench, subtext: po }),
          )
        },
        go = n('n0Rl'),
        fo = n('q9Zt'),
        bo = b.a.hae1c933,
        yo = void 0 !== ci ? ci : (ci = n('G8I5')),
        ho = Object(go.b)(yo, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        _o = O.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return o.createElement(ho, {
          render: function (e) {
            var a,
              n,
              t = e.data,
              r = e.error,
              l = e.fetchStatus,
              i = e.retry,
              s = null == t ? void 0 : t.super_follows_price_offerings,
              c =
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
                isActiveCreator: !r && !(null == d || !d.is_active_creator),
                superFollowsApplicationStatus:
                  (!r && (null == c ? void 0 : c.super_follows_application_status)) || 'NotStarted',
                stripeAccountStatus: (!r && (null == c ? void 0 : c.stripe_account_status)) || 'NotStarted',
              })
            return o.createElement(g.a, {
              fetchStatus: Object(y.b)(l, null != s && 'User' === (null == c ? void 0 : c.__typename) && null != d),
              onRequestRetry: i,
              render: function () {
                return null == s || 'User' !== (null == c ? void 0 : c.__typename) || null == d
                  ? null
                  : o.createElement(
                      p,
                      null,
                      o.createElement(
                        u.a,
                        { initialEntries: [m] },
                        o.createElement(
                          u.e,
                          null,
                          o.createElement(u.c, { path: '/application' }, o.createElement(Vt, { user: c, viewer: d })),
                          o.createElement(u.c, { exact: !0, path: '/submitted' }, o.createElement(co, null)),
                          o.createElement(u.c, { exact: !0, path: '/waitlisted' }, o.createElement(mo, null)),
                          o.createElement(u.c, { exact: !0, path: '/rejected' }, o.createElement(io, null)),
                          o.createElement(
                            u.c,
                            { path: '/onboarding' },
                            o.createElement(to, { priceOfferings: s, user: c, viewer: d }),
                          ),
                          o.createElement(
                            u.c,
                            { path: '/management' },
                            o.createElement(ol, { priceOfferings: s, user: c, viewer: d }),
                          ),
                        ),
                      ),
                    )
              },
              renderFailure: function () {
                return o.createElement(fo.a, { onRetry: i, style: _o.error, title: bo })
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
    p785: function (e, a, n) {
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
            name: 'SuperFollowsOnboardingPricingScreenMutation',
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
            name: 'SuperFollowsOnboardingPricingScreenMutation',
            selections: r,
          },
          params: {
            id: 'o3ZwgYsS8tpbI8ct4e27ng',
            metadata: {},
            name: 'SuperFollowsOnboardingPricingScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = '6760a9c38cb958dabf2178d9c4d7df42'), (a.default = l)
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
