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
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(o.a)(
          'svg',
          s(
            s({}, e),
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
        c = r.useEffect,
        s = r.useRef,
        u = r.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = l(),
          r = d(),
          p = s(n),
          m = s(e),
          g = s(new Set()),
          f = o(!1),
          b = f[0],
          y = f[1],
          _ = u(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), r.current && y(g.current.size > 0))
            },
            [n, r, e],
          )
        c(
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
        c,
        s = {
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
            argumentDefinitions: [t, i, o, r, l],
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
        r,
        l,
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
      var _ = g.a.create(function (e) {
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
        h = y(
          y({}, g.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        v = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            r = e.checked,
            i = e.disabled,
            o = e.helpText,
            c = e.label,
            b = e.name,
            y = e.onChange,
            v = p.a.generate({
              backgroundColor: g.a.theme.colors.transparent,
              color: r ? g.a.theme.colors.primary : g.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return l.createElement(d.a, { disabled: i }, function (e) {
            return l.createElement(
              f.a,
              { style: _.root },
              l.createElement(
                f.a,
                { accessibilityRole: 'label', style: [_.base, _.border, !i && _.interactive] },
                l.createElement(
                  f.a,
                  { style: _.textContainer },
                  l.createElement(s.b, { weight: 'bold' }, c),
                  o && l.createElement(s.b, { color: 'gray700', size: 'subtext2', style: _.helpText }, o),
                ),
                l.createElement(
                  f.a,
                  { style: _.radioContainer },
                  l.createElement(
                    m.a,
                    { disabled: i, interactiveStyles: v, interactivityState: e, style: _.radioBackground },
                    l.createElement(
                      f.a,
                      {
                        style: [
                          _.circle,
                          r && _.circleActive,
                          i && _.circleDisabled,
                          r && i && _.circleCheckedAndDisabled,
                        ],
                      },
                      r ? l.createElement(u.a, { style: _.checkMark }) : null,
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
                    style: h,
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
              return l.createElement(v, r()({}, e, { key: e.value }))
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
          return _o
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return N
        }),
        n.d(t, 'Arrow2x', function () {
          return Q
        }),
        n.d(t, 'Arrow3x', function () {
          return G
        }),
        n.d(t, 'Bench', function () {
          return X
        }),
        n.d(t, 'Bench2x', function () {
          return J
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
          return re
        }),
        n.d(t, 'CoinStairs2x', function () {
          return le
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
          return _e
        }),
        n.d(t, 'Thumbsup', function () {
          return he
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
          return ke
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Ee
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
      var r,
        l,
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
        _ = n('kGix'),
        h = n('/yvb'),
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
        k = function (e) {
          var a = e.leftControlShouldClose,
            n = e.rightControl,
            t = e.subtitle,
            r = e.title
          return o.createElement(v.a, {
            leftControl: o.createElement(S, { shouldClose: a }),
            rightControl: n,
            subtitle: t,
            title: r,
            withBottomBorder: !0,
          })
        },
        E = n('rHpw'),
        F = n('MWbm'),
        x = function (e) {
          var a = e.appBar,
            n = e.children
          return o.createElement(o.Fragment, null, a, o.createElement(F.a, { style: C.container }, n))
        },
        C = E.a.create(function (e) {
          return {
            container: {
              marginTop: e.spaces.space24,
              marginHorizontal: e.spaces.space20,
              marginBottom: e.spaces.space56,
            },
          }
        }),
        K = b.a.g92a2343,
        O = b.a.a91bb144,
        L = function () {
          var e = Object(u.g)(),
            a = o.createElement(
              h.a,
              {
                onPress: function () {
                  e.push('/application/submit')
                },
                type: 'primaryFilled',
              },
              O,
            ),
            n = o.createElement(k, { rightControl: a, title: K })
          return o.createElement(x, { appBar: n })
        },
        P = (n('jQ3i'), n('x4t0'), n('z84I'), n('855f')),
        T = 'https://help.twitter.com/using-twitter/super-follows-creator',
        D = n('6s7X'),
        R = function () {
          return o.createElement(h.a, { icon: o.createElement(D.a, null), link: T, pullLeft: !0, type: 'primaryText' })
        },
        B = n('t62R'),
        A = n('WtWS'),
        j = n('0ULw'),
        z = function (e) {
          return e.items.map(function (e) {
            return o.createElement(
              F.a,
              { key: e.label, style: M.item },
              o.createElement(B.b, { style: M.label, weight: 'bold' }, e.label),
              e.checked
                ? o.createElement(A.a, { style: M.iconChecked })
                : o.createElement(j.a, { style: M.iconUnchecked }),
            )
          })
        },
        M = E.a.create(function (e) {
          return {
            iconChecked: { color: e.colors.primary },
            iconUnchecked: { color: e.colors.gray700 },
            item: { flexDirection: 'row', marginVertical: e.spaces.space12 },
            label: { flex: 1 },
          }
        }),
        V = function () {
          return o.createElement(
            B.b,
            { align: 'center', color: 'gray700' },
            o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              o.createElement(
                B.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                b.a.ebc0cbbc,
              ),
            ),
          )
        },
        I = n('ddV6'),
        U = n.n(I),
        W =
          (n('Qavd'),
          n('JtPf'),
          n('7x/C'),
          function (e) {
            var a = e.color,
              n = e.disabled,
              t = e.history,
              r = e.label,
              l = e.onPress,
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
              _ = function () {
                ;(null != t ? t : m).push(i)
              }
            return o.createElement(
              h.a,
              {
                color: a,
                disabled: b || n,
                onPress: function (e) {
                  l
                    ? (y(!0),
                      l(e)
                        .then(_)
                        .finally(function () {
                          return y(!1)
                        }))
                    : _()
                },
                size: c,
                style: s,
                type: p,
              },
              r,
            )
          }),
        H = n('jAXQ'),
        q = n.n(H),
        N = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        Q = n.p + 'Arrow@2x.8af675c5.png',
        G = n.p + 'Arrow@3x.949d4365.png',
        X = n.p + 'Bench.ed26a435.png',
        J = n.p + 'Bench@2x.ef9fb7d5.png',
        Z = n.p + 'Bench@3x.a306fd55.png',
        $ = n.p + 'Cat.089435a5.png',
        Y = n.p + 'Cat@2x.bca70155.png',
        ee = n.p + 'Cat@3x.2b225ef5.png',
        ae = n.p + 'Clipboard.540710d5.png',
        ne = n.p + 'Clipboard@2x.72ca72e5.png',
        te = n.p + 'Clipboard@3x.1b952e95.png',
        re = n.p + 'CoinStairs.8488b245.png',
        le = n.p + 'CoinStairs@2x.34fd5855.png',
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
        _e = n.p + 'Puzzle@3x.1796b225.png',
        he = n.p + 'Thumbsup.f5be79d5.png',
        ve = n.p + 'Thumbsup@2x.6d106945.png',
        we = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Se = n.p + 'TrafficLight.11644b65.png',
        ke = n.p + 'TrafficLight@2x.5657de25.png',
        Ee = n.p + 'TrafficLight@3x.a5a35335.png',
        Fe = n.p + 'Uturn.c8267f55.png',
        xe = n.p + 'Uturn@2x.db3f94d5.png',
        Ce = n.p + 'Uturn@3x.22f27905.png',
        Ke = n('tn7R'),
        Oe = n('TIdA'),
        Le = n('A91F'),
        Pe = 400,
        Te = 250,
        De = [1, 2, 3],
        Re = Object.freeze({
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
        Be = Object(Ke.a)(Re).reduce(function (e, a) {
          var n = Math.max.apply(Math, De)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Pe * n, height: Te * n },
              customVariants: De.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Pe * e, height: Te * e }
              }),
            }),
            e
          )
        }, {}),
        Ae = function (e) {
          var a = e.type,
            n = Be[a],
            t = n.aspectRatio,
            r = n.customVariants,
            l = n.image
          return o.createElement(
            F.a,
            { style: je.illustration },
            o.createElement(Oe.a, {
              accessibilityLabel: '',
              aspectMode: Le.a.exact(t),
              customVariants: r,
              draggable: !1,
              image: l,
            }),
          )
        },
        je = E.a.create(function (e) {
          return { illustration: { alignSelf: 'center', width: Pe, height: Te } }
        }),
        ze = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return o.createElement(
            o.Fragment,
            null,
            t && o.createElement(Ae, { type: t }),
            o.createElement(
              B.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title4',
                style: t && Me.headline,
                weight: 'heavy',
              },
              n,
            ),
            o.createElement(B.b, { align: a, color: 'gray700', style: Me.subtext }, r),
          )
        },
        Me = E.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space48 }, subtext: { marginVertical: e.spaces.space12 } }
        }),
        Ve = b.a.feb54b4f,
        Ie = b.a.bac156a6,
        Ue = b.a.a3a20a10,
        We = b.a.b26ae507,
        He = b.a.a753a87f,
        qe = b.a.abfaa527,
        Ne = P.a.getTruncatedCount(1e4),
        Qe = b.a.fdd95737({ minFollowersCount: Ne }),
        Ge = P.a.getTruncatedCount(25),
        Xe = [
          {
            label: Qe,
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
            label: b.a.a0dcad86({ minTweetsCount: Ge }),
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
        Je = void 0 !== r ? r : (r = n('RLjm')),
        Ze = function (e) {
          var a = e.user,
            n = q()(Je, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            r = t ? Re.Arrow : Re.TrafficLight,
            l = t ? Ve : Ue,
            i = t ? Ie : We,
            c = Xe.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            }),
            s = o.createElement(k, { rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: s },
            o.createElement(ze, { headline: l, illustration: r, subtext: i }),
            o.createElement(z, { items: c }),
            t && o.createElement(V, null),
            o.createElement(W, { disabled: !t, label: He, path: '/application/one_more_thing' }),
            o.createElement(W, { label: qe, path: '/application/one_more_thing' }),
          )
        },
        $e = n('9RkS'),
        Ye = b.a.bbb89925,
        ea = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            c = o.useState(i),
            s = U()(c, 2),
            u = s[0],
            d = s[1],
            p = Math.round(a * r * (u / 100))
          return o.createElement(
            F.a,
            { style: aa.container },
            o.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                o.createElement(B.b, { weight: 'bold' }, b.a.a7dd00ea),
                o.createElement(
                  B.b,
                  { style: aa.earnings, weight: 'heavy' },
                  b.a.c62c1d30({ earnings: '$'.concat(P.a.getTruncatedCount(p)) }),
                ),
                o.createElement(B.b, { color: 'green500', style: aa.asteriskLeft }, b.a.e0fb982b),
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
                step: l,
                thumbLabel: Ye({ percent: u }),
                value: u,
              }),
            ),
            o.createElement(
              B.b,
              { color: 'green500', size: 'subtext3', style: aa.footnote },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                o.createElement(B.b, { style: aa.asteriskRight }, b.a.e263c38e),
              ),
            ),
          )
        },
        aa = E.a.create(function (e) {
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
        ra = n('6iuV'),
        la = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        ia = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return o.createElement(
            F.a,
            { style: oa.container },
            o.createElement(la.a, { Icon: a, color: 'neutral' }),
            o.createElement(B.b, { size: 'headline2', style: oa.title, weight: 'bold' }, t),
            o.createElement(B.b, { color: 'gray700', style: oa.description }, n),
          )
        },
        oa = E.a.create(function (e) {
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
            ra.a,
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
        _a = b.a.f7239f4c,
        ha = b.a.g8cdf707,
        va = b.a.bff8472e,
        wa = b.a.e533715d,
        Sa = void 0 !== l ? l : (l = n('xd+q')),
        ka = function (e) {
          var a = e.user,
            n = q()(Sa, a).legacy.followers_count,
            t = o.createElement(k, { leftControlShouldClose: !0 })
          return o.createElement(
            x,
            { appBar: t },
            o.createElement(
              B.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ma,
            ),
            o.createElement(B.b, null, ga),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              fa,
            ),
            o.createElement(B.b, { color: 'gray700' }, ba),
            o.createElement(Ae, { type: Re.HandCoins }),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ya,
            ),
            o.createElement(pa, null),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            o.createElement(ea, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ha,
            ),
            o.createElement(B.b, { color: 'gray700' }, va),
            o.createElement(W, { color: 'plum500', label: wa, path: '/application/eligibility' }),
          )
        },
        Ea = b.a.d0fc4890,
        Fa = b.a.c64384b6,
        xa = b.a.c3d89aca,
        Ca = function () {
          var e = o.createElement(k, { rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { align: 'center', headline: Ea, illustration: Re.OneFinger, subtext: Fa }),
            o.createElement(W, { label: xa, path: '/application/complete_profile' }),
          )
        },
        Ka = (n('2G9S'), n('Hsf0')),
        Oa = n.n(Ka),
        La = 'super_follows_application_draft',
        Pa = 'super_follows_onboarding_draft',
        Ta = function (e) {
          return Oa()(void 0 !== i ? i : (i = n('PlkH')), e).__id
        },
        Da = function (e, a) {
          var n = Ta(a),
            t = e.get(n)
          return s()(t, 'viewer must be defined'), t
        },
        Ra = function (e, a) {
          return Da(e, a).getLinkedRecord(La)
        },
        Ba = function (e, a) {
          return Da(e, a).getLinkedRecord(Pa)
        },
        Aa = n('HG4m'),
        ja = n.n(Aa),
        za = n('Ud88'),
        Ma = n.n(za)
      function Va(e, a) {
        var n = Ma()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.content_category,
                    r = void 0 === t ? [] : t,
                    l = n.content_category_other,
                    i = void 0 === l ? null : l,
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
                    y = Ta(a),
                    _ = Da(e, a)
                  if (!Ra(e, a)) {
                    var h = e.create(''.concat(y, ':').concat(La), 'SuperFollowsApplicationDraft')
                    h.setValue(r, 'content_category'),
                      h.setValue(i, 'content_category_other'),
                      h.setValue(c, 'content_creation_platform'),
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
      function Ia(e, a) {
        var n = Ma()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.creator_intro,
                    r = void 0 === t ? null : t,
                    l = n.description,
                    i = void 0 === l ? null : l,
                    o = n.selected_price,
                    c = void 0 === o ? null : o,
                    s = Ta(a),
                    u = Da(e, a)
                  if (!Ba(e, a)) {
                    var d = e.create(''.concat(s, ':').concat(Pa), 'SuperFollowsOnboardingDraft')
                    d.setValue(r, 'creator_intro'),
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
      function Ua(e, a) {
        var n = Ma()()
        return o.useCallback(
          function (t) {
            s()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ra(e, a)
                  s()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function Wa(e, a) {
        var n = Ma()()
        return o.useCallback(
          function (t) {
            s()(e, 'viewerId must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ba(e, a)
                  s()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Ha,
        qa,
        Na,
        Qa,
        Ga,
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
        _n,
        hn,
        vn,
        wn,
        Sn = n('p+r5'),
        kn = b.a.f7997b16,
        En = b.a.fc00ab5b,
        Fn = b.a.c249167f,
        xn = b.a.b772cd65,
        Cn = void 0 !== Ha ? Ha : (Ha = n('xhT1')),
        Kn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = q()(Cn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Ua(r, 'content_category_other'),
            c = o.createElement(k, { title: kn })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Sn.a, {
              helperText: Fn,
              label: En,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(h.a, null, xn),
          )
        },
        On = n('fyvP'),
        Ln = n('csss'),
        Pn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(u.g)()
          return o.createElement(Ln.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        Tn = b.a.f7997b16,
        Dn = b.a.c144fa52,
        Rn = [
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
        Bn = b.a.c365dcc5,
        An = b.a.bd44a8a8,
        jn = void 0 !== qa ? qa : (qa = n('JB6R')),
        zn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = q()(jn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Ua(r, 'content_category'),
            c = o.createElement(k, { title: Tn }),
            s = Rn.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(On.a, {
              description: Dn,
              label: Dn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Pn, { helpText: An, label: Bn, path: '/application/submit_categories_other' }),
          )
        },
        Mn = b.a.d94a9a17,
        Vn = b.a.a35394b3,
        In = [
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
        Un = void 0 !== Na ? Na : (Na = n('H1we')),
        Wn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = q()(Un, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Ua(r, 'ethnicity'),
            c = o.createElement(k, { title: Mn }),
            s = In.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(On.a, {
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
        Hn = b.a.a8d0108d,
        qn = b.a.a35394b3,
        Nn = [
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
        Gn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = q()(Qn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Ua(r, 'gender'),
            c = o.createElement(k, { title: Hn }),
            s = Nn.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(On.a, {
              description: qn,
              label: qn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: l[0],
            }),
          )
        },
        Xn = b.a.da8ea7da,
        Jn = b.a.d7081f91,
        Zn = b.a.j349548f,
        $n = b.a.b772cd65,
        Yn = void 0 !== Ga ? Ga : (Ga = n('+OUG')),
        et = function (e) {
          var a,
            n,
            t = e.viewer,
            r = q()(Yn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Ua(r, 'content_creation_platform_other'),
            c = o.createElement(k, { title: Xn })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Sn.a, {
              helperText: Zn,
              label: Jn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(h.a, null, $n),
          )
        },
        at = b.a.da8ea7da,
        nt = b.a.d4062c9a,
        tt = [b.a.a3021317, b.a.eb4a600d, b.a.d4d74bb3, b.a.fc738909, b.a.d8552c1a, b.a.ca07aa46],
        rt = b.a.c365dcc5,
        lt = b.a.bd44a8a8,
        it = void 0 !== Xa ? Xa : (Xa = n('xnrs')),
        ot = function (e) {
          var a,
            n,
            t = e.viewer,
            r = q()(it, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Ua(r, 'content_creation_platform'),
            c = o.createElement(k, { title: at }),
            s = tt.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(On.a, {
              description: nt,
              label: nt,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Pn, { helpText: lt, label: rt, path: '/application/submit_platforms_other' }),
          )
        },
        ct = (n('tVqn'), n('uFXj'), b.a.f4f4dd6f),
        st = b.a.f448cbcb,
        ut = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? ct : 'optional' === n ? st : void 0
          return o.createElement(
            F.a,
            { style: dt.container },
            o.createElement(B.b, { size: 'headline1', weight: 'heavy' }, a),
            r && o.createElement(B.b, { color: t, size: 'subtext2', style: dt.subtext }, r),
          )
        },
        dt = E.a.create(function (e) {
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
        pt = n('jV+4'),
        mt = n('Xrkv'),
        gt = n('9SqB'),
        ft = n.n(gt),
        bt = b.a.e873f0ae,
        yt = b.a.f095a24a,
        _t = b.a.i5f7b6b8,
        ht = b.a.d1f6d336,
        vt = b.a.f7997b16,
        wt = b.a.c144fa52,
        St = b.a.f1bf337d,
        kt = b.a.da8ea7da,
        Et = b.a.d4062c9a,
        Ft = b.a.e963d587,
        xt = b.a.ede0ac3e,
        Ct = b.a.ffb6cb88,
        Kt = b.a.b2159e8e,
        Ot = b.a.feacb49d,
        Lt = b.a.je17c987,
        Pt = b.a.d94a9a17,
        Tt = b.a.a8d0108d,
        Dt = b.a.gfc80842,
        Rt = void 0 !== Ja ? Ja : (Ja = n('pLb/')),
        Bt = void 0 !== Za ? Za : (Za = n('3qCL')),
        At = void 0 !== $a ? $a : ($a = n('AyUU')),
        jt = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            c,
            s = e.user,
            u = e.viewer,
            d = q()(Rt, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = q()(Bt, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == g ? void 0 : g.content_category_other) && void 0 !== n ? n : [],
            ),
            b = (null !== (t = null == g ? void 0 : g.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            y = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            _ = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            h = null !== (c = null == g ? void 0 : g.gender) && void 0 !== c ? c : [],
            v = f.length && b.length && y.trim(),
            w = Ua(m, 'purpose'),
            S = ft()(At),
            E = U()(S, 2),
            F = E[0],
            C = E[1],
            K = o.createElement(k, { rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: K },
            o.createElement(ze, { headline: bt, illustration: Re.Clipboard, subtext: yt }),
            o.createElement(ut, { title: _t }),
            o.createElement(B.b, null, ht),
            p && o.createElement(pt.a, { screenName: p }),
            o.createElement(ut, { title: vt, type: 'required' }),
            o.createElement(B.b, { color: 'gray700' }, wt),
            o.createElement(Pn, {
              description: Object(mt.a)(f, !0),
              label: St,
              path: '/application/submit_categories',
            }),
            o.createElement(ut, { title: kt, type: 'required' }),
            o.createElement(B.b, { color: 'gray700' }, Et),
            o.createElement(Pn, { description: Object(mt.a)(b, !0), label: Ft, path: '/application/submit_platforms' }),
            o.createElement(ut, { title: xt, type: 'required' }),
            o.createElement(Sn.a, {
              helperText: Kt,
              label: Ct,
              name: 'plannedUsage',
              onChange: function (e) {
                w(e.currentTarget.value)
              },
              value: y,
            }),
            o.createElement(ut, { title: Ot, type: 'optional' }),
            o.createElement(B.b, { color: 'gray700' }, Lt),
            o.createElement(Pn, {
              description: Object(mt.a)(_, !0),
              label: Pt,
              path: '/application/submit_ethnicities',
            }),
            o.createElement(Pn, { description: Object(mt.a)(h, !0), label: Tt, path: '/application/submit_genders' }),
            o.createElement(V, null),
            o.createElement(W, {
              disabled: !v || C,
              label: Dt,
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
        zt = void 0 !== Ya ? Ya : (Ya = n('o/nB')),
        Mt = void 0 !== en ? en : (en = n('lZLw')),
        Vt = function (e) {
          var a = e.user,
            n = e.viewer,
            t = q()(zt, a),
            r = q()(Mt, n)
          return (
            Va(r),
            o.createElement(
              u.e,
              null,
              o.createElement(u.c, { exact: !0, path: '/application/eligibility' }, o.createElement(Ze, { user: t })),
              o.createElement(u.c, { exact: !0, path: '/application/one_more_thing' }, o.createElement(Ca, null)),
              o.createElement(u.c, { exact: !0, path: '/application/complete_profile' }, o.createElement(L, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit' },
                o.createElement(jt, { user: t, viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories' },
                o.createElement(zn, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories_other' },
                o.createElement(Kn, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms' },
                o.createElement(ot, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms_other' },
                o.createElement(et, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_ethnicities' },
                o.createElement(Wn, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_genders' },
                o.createElement(Gn, { viewer: r }),
              ),
              o.createElement(u.c, { path: '/application' }, o.createElement(ka, { user: t })),
            )
          )
        },
        It = (n('ho0z'), n('cHvH')),
        Ut = function (e) {
          var a = e.children,
            n = e.style
          return o.createElement(It.a, null, function (e) {
            var t = e.windowWidth > E.a.theme.breakpoints.small
            return o.createElement(
              F.a,
              { style: [Wt.root, n] },
              o.createElement(
                F.a,
                { style: Wt.browserBar },
                o.createElement(
                  F.a,
                  { style: Wt.browserBarButtons },
                  o.createElement(F.a, { style: Wt.browserBarButton }),
                  o.createElement(F.a, { style: Wt.browserBarButton }),
                  o.createElement(F.a, { style: Wt.browserBarButton }),
                ),
                o.createElement(
                  F.a,
                  { style: Wt.browserBarUrlInputWrapper },
                  o.createElement(F.a, { style: Wt.browserBarUrlInput }),
                ),
              ),
              o.createElement(
                F.a,
                { style: [Wt.contentWrapper, t && Wt.contentWrapperWideMargins] },
                o.createElement(F.a, { style: Wt.content }, a),
              ),
            )
          })
        },
        Wt = E.a.create(function (e) {
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
        Ht = n('VTDR'),
        qt = n('FEMQ'),
        Nt = o.forwardRef(function (e, a) {
          return o.createElement(
            Ut,
            { style: Qt.mockBrowserWindow },
            o.createElement(
              F.a,
              { style: Qt.mockBrowserWindowContent },
              o.createElement(Ht.a, null),
              o.createElement(qt.a, ta()({}, e, { ref: a })),
            ),
          )
        }),
        Qt = E.a.create(function (e) {
          return {
            mockBrowserWindow: { marginVertical: e.spaces.space24, maxWidth: '600px' },
            mockBrowserWindowContent: { padding: e.spaces.space24 },
          }
        }),
        Gt = b.a.iba08a94,
        Xt = b.a.bcb1e4e6,
        Jt = void 0 !== an ? an : (an = n('JK1g')),
        Zt = void 0 !== nn ? nn : (nn = n('yqZQ')),
        $t = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = q()(Jt, t),
            i = q()(Zt, r),
            c = l.legacy,
            u = c.name,
            d = c.profile_image_url_https,
            p =
              null !==
                (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : ''
          return (
            s()('string' == typeof d, 'imageUrl must be defined'),
            s()('string' == typeof u, 'name must be defined'),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(ze, { headline: Gt, subtext: Xt }),
              o.createElement(Nt, { imageUrl: d, name: u, value: p }),
            )
          )
        },
        Yt = b.a.hf6f2913,
        er = void 0 !== tn ? tn : (tn = n('MvEh')),
        ar = void 0 !== rn ? rn : (rn = n('U5ka')),
        nr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = q()(er, a),
            r = q()(ar, n),
            l = o.createElement(k, { rightControl: o.createElement(R, null), title: Yt })
          return o.createElement(x, { appBar: l }, o.createElement($t, { user: t, viewer: r }))
        },
        tr = n('efqG'),
        rr = n('5emT'),
        lr = b.a.ab793af9,
        ir = b.a.fb278c81,
        or = b.a.e6b60e94,
        cr = b.a.j24c37b2,
        sr = E.a.create(function (e) {
          return {
            root: { margin: e.spaces.space32 },
            triggerLabel: { marginRight: e.spaces.space8 },
            headlineText: { marginVertical: e.spaces.space16 },
            triggerIcon: { color: e.colors.gray700 },
            paragraphText: { marginBottom: e.spaces.space20 },
            triggerContentWrapper: { alignSelf: 'center', flexDirection: 'row' },
          }
        }),
        ur = function () {
          return o.createElement(
            tr.a,
            {
              renderContent: function (e) {
                return o.createElement(
                  F.a,
                  { style: sr.root },
                  o.createElement(la.a, { Icon: rr.a, color: 'neutral', size: 'xxxLarge' }),
                  o.createElement(B.b, { size: 'title3', style: sr.headlineText, weight: 'heavy' }, ir),
                  o.createElement(B.b, { color: 'gray700', style: sr.paragraphText }, or),
                  o.createElement(h.a, { onClick: e, size: 'xLarge', type: 'primaryFilled' }, cr),
                )
              },
            },
            o.createElement(
              F.a,
              { accessibilityRole: 'button', style: sr.triggerContentWrapper },
              o.createElement(B.b, { color: 'gray700', style: sr.triggerLabel }, lr),
              o.createElement(D.a, { style: sr.triggerIcon }),
            ),
          )
        },
        dr = b.a.j3253319,
        pr = b.a.h1e80993,
        mr = b.a.j679dcda,
        gr = void 0 !== ln ? ln : (ln = n('S3B+')),
        fr = void 0 !== on ? on : (on = n('qrhN')),
        br = o.forwardRef(function (e, a) {
          var n,
            t,
            r = e.user,
            l = e.viewer,
            i = q()(gr, r),
            c = q()(fr, l),
            u = i.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m =
              null !==
                (n = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            g = Wa(c, 'creator_intro')
          return (
            s()('string' == typeof p, 'image must be defined'),
            s()('string' == typeof d, 'name must be defined'),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(ze, { headline: dr, subtext: pr }),
              o.createElement(W, {
                label: mr,
                path: '/onboarding/perks_intro_examples',
                style: yr.examplesLink,
                type: 'primaryText',
              }),
              o.createElement(ur, null),
              o.createElement(Nt, {
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
        yr = E.a.create(function (e) {
          return { examplesLink: { alignSelf: 'center', marginBottom: e.spaces.space12 } }
        }),
        _r = br,
        hr = b.a.cd5cae15,
        vr = b.a.abd845fd,
        wr = b.a.b772cd65,
        Sr = void 0 !== cn ? cn : (cn = n('oyMe')),
        kr = void 0 !== sn ? sn : (sn = n('RL7R')),
        Er = void 0 !== un ? un : (un = n('VzX/')),
        Fr = E.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        xr = function (e) {
          var a,
            n,
            t,
            r = e.user,
            l = e.viewer,
            i = o.useRef(),
            c = q()(Sr, r),
            s = q()(kr, l),
            u = null === (a = c.super_follow_creator_benefits) || void 0 === a ? void 0 : a.benefits_data,
            d =
              null !==
                (n = null === (t = s.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            p = ft()(Er),
            m = U()(p, 2),
            g = m[0],
            f = m[1],
            b = o.createElement(k, { title: hr }),
            y = !!d
          return o.createElement(
            x,
            { appBar: b },
            o.createElement(_r, { ref: i, user: c, viewer: s }),
            o.createElement(
              F.a,
              { style: Fr.buttonsWrapper },
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
              o.createElement(W, {
                disabled: !y || f,
                label: wr,
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
        Cr = n('m3Bd'),
        Kr = n.n(Cr),
        Or = n('fs1G'),
        Lr = n('9VLy'),
        Pr = n('0yYu'),
        Tr = n('4zmP'),
        Dr = b.a.a6777c1b,
        Rr = b.a.b4a93a91,
        Br = b.a.c0348963,
        Ar = b.a.d08d0bb2,
        jr = b.a.ea4c3496,
        zr = b.a.ea92cfe3,
        Mr = b.a.ia9c37c4,
        Vr = b.a.hc2c5a8b,
        Ir = b.a.be54a312,
        Ur = b.a.bc6d85b3,
        Wr = b.a.b7bc895e,
        Hr = b.a.f3ce76c0,
        qr = b.a.e9e3b3f7,
        Nr = b.a.a79bf10a,
        Qr = b.a.a3932653,
        Gr = b.a.a1ef1964,
        Xr = b.a.abd845fd,
        Jr = b.a.c9f7c195,
        Zr = b.a.g5925628,
        $r = b.a.jfb2bf30,
        Yr = b.a.a962b5d8,
        el = b.a.dba12b51,
        al = void 0 !== dn ? dn : (dn = n('EM6u')),
        nl = void 0 !== pn ? pn : (pn = n('oNwH')),
        tl = void 0 !== mn ? mn : (mn = n('qOMr')),
        rl = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = e.viewer,
            c = q()(al, r),
            s = (c.$refType, Kr()(c, ['$refType'])),
            u = q()(nl, l),
            d = q()(tl, i).super_follows_onboarding_draft,
            p = null !== (a = null == d ? void 0 : d.creator_intro) && void 0 !== a ? a : '',
            m = null !== (n = null == d ? void 0 : d.description) && void 0 !== n ? n : '',
            g = null !== (t = null == d ? void 0 : d.selected_price) && void 0 !== t ? t : 'offer2',
            f = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: f },
            o.createElement(
              B.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Dr,
            ),
            o.createElement(Pr.a, null),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Rr,
            ),
            o.createElement(W, { label: Gr, path: '/management/perks_confirm', type: 'primaryText' }),
            o.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Br,
            ),
            o.createElement(W, { label: Xr, path: '/management/perks_intro', type: 'primaryOutlined' }),
            o.createElement(B.b, { color: 'gray700' }, p),
            o.createElement(Lr.a, { user: u }),
            o.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              Ar,
            ),
            o.createElement(B.b, { color: 'gray700' }, m),
            o.createElement(Lr.a, { user: u }),
            o.createElement(
              B.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              jr,
            ),
            o.createElement(B.b, { color: 'gray700' }, zr),
            o.createElement(Pr.a, null),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Mr,
            ),
            o.createElement(B.b, { color: 'gray700' }, Vr),
            o.createElement(B.b, { size: 'headline2', weight: 'heavy' }, Ir({ price: s[g] })),
            o.createElement(Tr.a, { headline: Ur, text: Wr }),
            o.createElement(Pr.a, null),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Hr,
            ),
            o.createElement(B.b, { color: 'gray700' }, qr),
            o.createElement(h.a, { link: T, type: 'brandOutlined' }, Jr),
            o.createElement(
              h.a,
              { link: 'https://help.twitter.com/forms/paid-features/superfollows', type: 'brandOutlined' },
              Zr,
            ),
            o.createElement(Pr.a, null),
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Nr,
            ),
            o.createElement(B.b, { color: 'gray700' }, Qr),
            o.createElement(h.a, { link: 'https://t.co/jPqvg6tFrDJG', type: 'brandFilled' }, $r),
            o.createElement(h.a, { link: 'https://t.co/RL2NN3bEVkes', type: 'brandOutlined' }, Yr),
            o.createElement(Pr.a, null),
            o.createElement(h.a, { onPress: Or.a, type: 'destructiveText' }, el),
          )
        },
        ll = void 0 !== gn ? gn : (gn = n('MXCg')),
        il = void 0 !== fn ? fn : (fn = n('mEFY')),
        ol = void 0 !== bn ? bn : (bn = n('d8Sa')),
        cl = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            r = e.user,
            l = e.viewer,
            i = q()(ll, t),
            c = q()(il, r),
            s = q()(ol, l),
            d = null !== (a = c.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ia(s, {
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
                { exact: !0, path: '/management/perks_intro' },
                o.createElement(xr, { user: c, viewer: s }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/management/perks_confirm' },
                o.createElement(nr, { user: c, viewer: s }),
              ),
              o.createElement(
                u.c,
                { path: '/management' },
                o.createElement(rl, { priceOfferings: i, user: c, viewer: s }),
              ),
            )
          )
        },
        sl = (n('5BYb'), b.a.b422cb62),
        ul = b.a.f08705e0,
        dl = b.a.fc5bfd95,
        pl = b.a.e2cd700f,
        ml = b.a.fbfd7397,
        gl = b.a.c3d89aca,
        fl = [
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
        bl = void 0 !== yn ? yn : (yn = n('wQp3')),
        yl = void 0 !== _n ? _n : (_n = n('tfBr')),
        _l = E.a.create(function (e) {
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
        hl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = q()(bl, a),
            r = q()(yl, n),
            l = fl.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: t, viewer: r }) }
            }),
            i = l.some(function (e) {
              return e.checked
            }),
            c = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ze, { headline: i ? pl : sl, illustration: i ? Re.Puzzle : Re.Cat, subtext: i ? ml : ul }),
            o.createElement(z, { items: l }),
            o.createElement(W, {
              label: i ? gl : dl,
              path: '/onboarding/perks_intro',
              size: 'xLarge',
              style: _l.button,
              type: 'brandFilled',
            }),
          )
        },
        vl = b.a.cd5cae15,
        wl = b.a.b83662ac,
        Sl = b.a.cda6bb6d,
        kl = b.a.a15b98ec,
        El = b.a.c1df579e,
        Fl = function () {
          var e = o.createElement(k, { rightControl: o.createElement(R, null), subtitle: wl, title: vl })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: Sl, subtext: kl }),
            o.createElement(ur, null),
            o.createElement(W, { label: El, path: '/onboarding/perks_confirm' }),
          )
        },
        xl = b.a.d94d5707,
        Cl = void 0 !== hn ? hn : (hn = n('Rthh')),
        Kl = void 0 !== vn ? vn : (vn = n('aREQ')),
        Ol = function (e) {
          var a = e.user,
            n = e.viewer,
            t = q()(Cl, a),
            r = q()(Kl, n),
            l = o.createElement(k, { rightControl: o.createElement(R, null), title: xl })
          return o.createElement(x, { appBar: l }, o.createElement($t, { user: t, viewer: r }))
        },
        Ll = b.a.ebfb897c,
        Pl = b.a.dc4feb19,
        Tl = b.a.c183d271,
        Dl = b.a.ic130fd5,
        Rl = b.a.dd913e24,
        Bl = b.a.h580543e,
        Al = function () {
          var e = o.createElement(k, { title: Ll })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(
              B.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Pl,
            ),
            o.createElement(B.b, { color: 'gray700' }, Tl),
            o.createElement(B.b, null, Dl),
            o.createElement(B.b, null, Rl),
            o.createElement(B.b, null, Bl),
          )
        },
        jl = b.a.cd5cae15,
        zl = b.a.d80af370,
        Ml = b.a.gf32cca1,
        Vl = b.a.j8ba99b3,
        Il = b.a.j679dcda,
        Ul = b.a.a329ce87,
        Wl = b.a.be76dc33,
        Hl = b.a.abd845fd,
        ql = b.a.c1df579e,
        Nl = void 0 !== wn ? wn : (wn = n('tJ4s')),
        Ql = function (e) {
          var a,
            n,
            t = e.viewer,
            r = q()(Nl, t),
            l =
              null !== (a = null === (n = r.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== a
                ? a
                : '',
            i = Wa(r, 'description'),
            c = o.createElement(k, { rightControl: o.createElement(R, null), subtitle: zl, title: jl })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ze, { headline: Ml, subtext: Vl }),
            o.createElement(W, { label: Il, path: '/onboarding/perks_description_examples', type: 'primaryText' }),
            o.createElement(ur, null),
            o.createElement(Sn.a, {
              label: Ul,
              name: 'description',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l || '',
            }),
            o.createElement(h.a, { type: 'primaryFilled' }, Wl),
            o.createElement(h.a, { type: 'primaryOutlined' }, Hl),
            o.createElement(W, { disabled: !l, label: ql, path: '/onboarding/perks_badges' }),
          )
        },
        Gl = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        Xl = n.n(Gl),
        Jl = n('Lsrn'),
        Zl = n('k/Ka')
      function $l(e, a) {
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
      function Yl(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? $l(Object(n), !0).forEach(function (a) {
                Xl()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $l(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var ei = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Zl.a)(
          'svg',
          Yl(
            Yl({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Jl.a.root, e.style], viewBox: '0 0 24 24' },
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
      ei.metadata = { width: 24, height: 24 }
      var ai,
        ni,
        ti,
        ri,
        li,
        ii,
        oi,
        ci,
        si,
        ui,
        di = ei,
        pi = n('JWc1'),
        mi = b.a.ebfb897c,
        gi = b.a.dc4feb19,
        fi = b.a.a0bb2076,
        bi = b.a.ace46d40,
        yi = b.a.h2c4511f,
        _i = b.a.hbe4f99e,
        hi = E.a.create(function (e) {
          return {
            exampleIntros: { marginLeft: e.spaces.space36 },
            headlineWrapper: { flexDirection: 'row', marginBottom: e.spaces.space12 },
            headline: { marginLeft: e.spaces.space8 },
            subtext: { marginLeft: e.spaces.space36 },
          }
        }),
        vi = function () {
          var e = o.createElement(k, { title: mi })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(
              F.a,
              { style: hi.headlineWrapper },
              o.createElement(la.a, { Icon: di, color: 'neutral', size: 'large' }),
              o.createElement(
                B.b,
                {
                  accessibilityLevel: 2,
                  accessibilityRole: 'heading',
                  size: 'title4',
                  style: hi.headline,
                  weight: 'heavy',
                },
                gi,
              ),
            ),
            o.createElement(B.b, { color: 'gray700', style: hi.subtext }, fi),
            o.createElement(
              F.a,
              { style: hi.exampleIntros },
              o.createElement(pi.a, { value: bi }),
              o.createElement(pi.a, { value: yi }),
              o.createElement(pi.a, { value: _i }),
            ),
          )
        },
        wi = b.a.cd5cae15,
        Si = b.a.ef08a890,
        ki = b.a.b16680ff,
        Ei = b.a.abd845fd,
        Fi = b.a.c1df579e,
        xi = void 0 !== ai ? ai : (ai = n('02qo')),
        Ci = void 0 !== ni ? ni : (ni = n('TXsE')),
        Ki = E.a.create(function (e) {
          return { buttonsWrapper: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: e.spaces.space16 } }
        }),
        Oi = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = o.useRef(),
            i = q()(xi, t),
            c = q()(Ci, r),
            s =
              null !==
                (a = null === (n = c.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : '',
            u = o.createElement(k, { subtitle: Si, title: wi }),
            d = !!s
          return o.createElement(
            x,
            { appBar: u },
            o.createElement(_r, { ref: l, user: i, viewer: c }),
            o.createElement(
              F.a,
              { style: Ki.buttonsWrapper },
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
                d ? Ei : ki,
              ),
              o.createElement(W, { disabled: !d, label: Fi, path: '/onboarding/perks_description', size: 'large' }),
            ),
          )
        },
        Li = (n('7xRU'), n('hznd')),
        Pi = b.a.ea8a3d2d,
        Ti = b.a.ic9124bf,
        Di = b.a.g5923869,
        Ri = {
          offer1: [b.a.f025ab39, b.a.c5602dfd],
          offer2: [b.a.ib075804, b.a.j8a72f06],
          offer3: [b.a.c246656e, b.a.a92ab16c],
        },
        Bi = b.a.c1df579e,
        Ai = void 0 !== ti ? ti : (ti = n('5jO1')),
        ji = void 0 !== ri ? ri : (ri = n('mKqc')),
        zi = void 0 !== li ? li : (li = n('p785')),
        Mi = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            r = e.viewer,
            l = q()(Ai, t),
            i = (l.$refType, Kr()(l, ['$refType'])),
            c = q()(ji, r),
            s = c.super_follows_onboarding_draft,
            u = null !== (a = null == s ? void 0 : s.creator_intro) && void 0 !== a ? a : '',
            d = null !== (n = null == s ? void 0 : s.description) && void 0 !== n ? n : '',
            p = null == s ? void 0 : s.selected_price,
            m = Wa(c, 'selected_price'),
            g = ft()(zi),
            f = U()(g, 2),
            y = f[0],
            _ = f[1],
            h = o.createElement(k, { rightControl: o.createElement(R, null), title: Pi }),
            v = o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              o.createElement(B.b, { link: T }, b.a.c336b06a),
            ),
            w = Object.keys(i).map(function (e) {
              return { label: Di({ price: i[e] }), value: e, helpText: Ri[e].join(' ') }
            })
          return o.createElement(
            x,
            { appBar: h },
            o.createElement(ze, { headline: Ti, subtext: v }),
            o.createElement(Li.a, {
              label: Ti,
              name: 'selectedPrice',
              onChange: function (e, a) {
                m(a)
              },
              options: w,
              value: p,
            }),
            o.createElement(W, {
              disabled: !p || _,
              label: Bi,
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
        Vi = b.a.e20f6661,
        Ii = b.a.a9ee1ecc,
        Ui = b.a.j24c37b2,
        Wi = function () {
          var e = m(),
            a = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: a },
            o.createElement(ze, { headline: Vi, illustration: Re.Thumbsup, subtext: Ii }),
            o.createElement(W, { history: e, label: Ui, path: '/settings/monetization' }),
          )
        },
        Hi = b.a.e2cd700f,
        qi = b.a.d6bfb60c,
        Ni = b.a.b9cbb370,
        Qi = function () {
          var e = o.createElement(k, { rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: Hi, illustration: Re.Puzzle, subtext: qi }),
            o.createElement(W, { label: Ni, path: '/onboarding/stripe_setup' }),
          )
        },
        Gi = n('8jkQ'),
        Xi = b.a.ja884230,
        Ji = b.a.af1b808d,
        Zi = b.a.fe339750,
        $i = b.a.j912510a,
        Yi = void 0 !== ii ? ii : (ii = n('xHLM')),
        eo = function () {
          var e = ft()(Yi),
            a = U()(e, 2),
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
            },
            l = o.createElement(k, { rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: l },
            o.createElement(ze, { headline: Xi, illustration: Re.CoinStairs, subtext: Ji }),
            o.createElement(h.a, { disabled: t, onPress: r, type: 'primaryFilled' }, Zi),
            o.createElement(h.a, { disabled: t, onPress: r, type: 'primaryOutlined' }, $i),
          )
        },
        ao = void 0 !== oi ? oi : (oi = n('UNVS')),
        no = void 0 !== ci ? ci : (ci = n('6byF')),
        to = void 0 !== si ? si : (si = n('dNhZ')),
        ro = function (e) {
          var a,
            n,
            t = e.priceOfferings,
            r = e.user,
            l = e.viewer,
            i = q()(ao, t),
            c = q()(no, r),
            s = q()(to, l),
            d = null !== (a = c.super_follow_creator_benefits) && void 0 !== a ? a : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Ia(s, {
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
                o.createElement(Oi, { user: c, viewer: s }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_intro_examples' }, o.createElement(vi, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description' },
                o.createElement(Ql, { viewer: s }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description_examples' },
                o.createElement(Al, null),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_badges' }, o.createElement(Fl, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_confirm' },
                o.createElement(Ol, { user: c, viewer: s }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/pricing' },
                o.createElement(Mi, { priceOfferings: i, viewer: s }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_setup' }, o.createElement(eo, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_incomplete' }, o.createElement(Qi, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_completed' }, o.createElement(Wi, null)),
              o.createElement(u.c, { path: '/onboarding' }, o.createElement(hl, { user: c, viewer: s })),
            )
          )
        },
        lo = b.a.aa7e35ed,
        io = b.a.f67e69bf,
        oo = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: lo, illustration: Re.Uturn, subtext: io }),
          )
        },
        co = b.a.d3d6c52c,
        so = b.a.c53e9129,
        uo = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: co, illustration: Re.PaperAirplane, subtext: so }),
          )
        },
        po = b.a.j274e6aa,
        mo = b.a.d7f65127,
        go = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(R, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(ze, { headline: po, illustration: Re.Bench, subtext: mo }),
          )
        },
        fo = n('n0Rl'),
        bo = n('q9Zt'),
        yo = b.a.hae1c933,
        _o = void 0 !== ui ? ui : (ui = n('G8I5')),
        ho = Object(fo.b)(_o, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        vo = E.a.create(function (e) {
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
                isActiveCreator: !r && !(null == d || !d.is_active_creator),
                superFollowsApplicationStatus:
                  (!r && (null == s ? void 0 : s.super_follows_application_status)) || 'NotStarted',
                stripeAccountStatus: (!r && (null == s ? void 0 : s.stripe_account_status)) || 'NotStarted',
              })
            return o.createElement(g.a, {
              fetchStatus: Object(_.b)(l, null != c && 'User' === (null == s ? void 0 : s.__typename) && null != d),
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
                            o.createElement(u.c, { path: '/application' }, o.createElement(Vt, { user: s, viewer: d })),
                            o.createElement(u.c, { exact: !0, path: '/submitted' }, o.createElement(uo, null)),
                            o.createElement(u.c, { exact: !0, path: '/waitlisted' }, o.createElement(go, null)),
                            o.createElement(u.c, { exact: !0, path: '/rejected' }, o.createElement(oo, null)),
                            o.createElement(
                              u.c,
                              { path: '/onboarding' },
                              o.createElement(ro, { priceOfferings: c, user: s, viewer: d }),
                            ),
                            o.createElement(
                              u.c,
                              { path: '/management' },
                              o.createElement(cl, { priceOfferings: c, user: s, viewer: d }),
                            ),
                          ),
                        ),
                      ),
                    )
              },
              renderFailure: function () {
                return o.createElement(bo.a, { onRetry: i, style: vo.error, title: yo })
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
