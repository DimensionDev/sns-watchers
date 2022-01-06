;(window.webpackJsonp = window.webpackJsonp || []).push([
  [222],
  {
    '+OUG': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    '02qo': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    '0ULw': function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        l = a('ERkP'),
        i = a('Lsrn'),
        o = a('k/Ka')
      function c(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    '21nk': function (e, t, a) {
      'use strict'
      var n = a('I9iR'),
        r = a('3KVO'),
        l = a('yLYC'),
        i = a('Ud88'),
        o = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        c = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, a) {
        o()
        var c,
          d = i(),
          p = t.fetchKey,
          m = t.fetchPolicy,
          f = t.source,
          g = t.variables,
          b = t.networkCacheConfig,
          y = l(e, g, b)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          y.request.node.params.name !== t.name && n(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: s(d, y.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: y, source: f })
                  : d.execute({ operation: y })
              }),
              fetchPolicy: m,
              query: y,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(d, y)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(h) : (t.environment, h),
            fetchKey: p,
            fetchPolicy: m,
            query: y,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return r(c)
      }
    },
    '23An': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = n.useEffect,
        l = n.useRef
      e.exports = function () {
        var e = l(!0)
        return (
          r(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '3qCL': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    '5jO1': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    '6byF': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    AyUU: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r,
        l,
        i,
        o,
        c,
        s = {
          fragment: {
            argumentDefinitions: [
              (n = { defaultValue: null, kind: 'LocalArgument', name: 'category' }),
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
            argumentDefinitions: [n, i, o, r, l],
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
      ;(s.hash = '38de90823c3fb6770d441acfd7d6c0d5'), (t.default = s)
    },
    FEMQ: function (e, t, a) {
      'use strict'
      a('ho0z'), a('uFXj')
      var n = a('ERkP'),
        r = a('tI3i'),
        l = a.n(r),
        i = a('JWc1'),
        o = a('t62R'),
        c = a('rHpw'),
        s = a('3XMw'),
        u = a.n(s),
        d = u.a.dc71aee7,
        p = c.a.create(function (e) {
          return {
            subheader: { paddingTop: e.spaces.space8 },
            creatorIntro: {
              display: 'inline-flex',
              alignItems: 'start',
              flexDirection: 'row',
              gap: e.spaces.space12,
              marginTop: e.spaces.space32,
            },
            creatorIntroBubble: {
              backgroundColor: e.colors.cellBackground,
              borderBottomLeftRadius: e.borderRadii.large,
              borderBottomRightRadius: e.borderRadii.large,
              borderTopLeftRadius: 0,
              borderTopRightRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.small,
              padding: e.spaces.space24,
              userSelect: 'none',
              width: '100%',
            },
            creatorIntroInput: { border: 'none', padding: 0 },
          }
        })
      t.a = function (e) {
        var t = e.creatorIntro,
          a = e.creatorIntroInputRef,
          r = e.creatorIntroInputValue,
          c = e.image,
          s = e.name,
          m = e.onInputChange,
          f = e.withInput
        return (
          l()('string' == typeof s, 'name must be a string'),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              o.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              n.createElement(u.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: s }, n.createElement('br', null)),
            ),
            n.createElement(o.b, { size: 'headline2', style: p.subheader }, d),
            c
              ? n.createElement(i.a, {
                  creatorIntro: t,
                  image: c,
                  inputRef: a,
                  inputValue: r,
                  onInputChange: m,
                  withInput: f,
                })
              : null,
          )
        )
      }
    },
    G8I5: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r,
        l,
        i,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (n = [{ kind: 'Literal', name: 's', value: 21 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                              (l = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'stripe_account_status',
                                storageKey: null,
                              }),
                              (i = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_follows_application_status',
                                storageKey: null,
                              }),
                              { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSwitch_user' },
                              { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_user' },
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
                ],
                storageKey: 'viewer_v2(s:21)',
              },
              {
                alias: null,
                args: n,
                concreteType: 'SuperFollowsPriceOfferings',
                kind: 'LinkedField',
                name: 'super_follows_price_offerings',
                plural: !1,
                selections: [
                  r,
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_priceOfferings' },
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
                args: n,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
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
                          r,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              l,
                              i,
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
                                  (o = {
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
                        selections: [o, c, s],
                        storageKey: null,
                      },
                    ],
                  },
                ],
                storageKey: 'viewer_v2(s:21)',
              },
              {
                alias: null,
                args: n,
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
            id: '6-h9ZZr8dzczoBy0zgH5dA',
            metadata: {},
            name: 'SuperFollowsSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'd0f692159553a3f746e5519cbc1f0901'), (t.default = u)
    },
    ID86: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a('MWbm'),
        l = a('rHpw'),
        i = a('+Eiw')
      t.a = function () {
        return n.createElement(r.a, { style: o.blob })
      }
      var o = l.a.create(function (e) {
        return {
          blob: {
            backgroundImage: i.a.getBackgroundImage(),
            clipPath: 'ellipse(450px 320px at 33% 0%)',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 320,
            zIndex: -1,
          },
        }
      })
    },
    JB6R: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    JWc1: function (e, t, a) {
      'use strict'
      a('uFXj')
      var n = a('ERkP'),
        r = a('3XMw'),
        l = a.n(r),
        i = a('MWbm'),
        o = a('j7Bv'),
        c = a('jhWN'),
        s = a('6OUF'),
        u = a('t62R'),
        d = a('rHpw'),
        p = l.a.a4ed9071
      var m = d.a.create(function (e) {
        return {
          root: {
            display: 'inline-flex',
            alignItems: 'start',
            flexDirection: 'row',
            gap: e.spaces.space12,
            marginTop: e.spaces.space32,
          },
          creatorIntroBubble: {
            backgroundColor: e.colors.cellBackground,
            borderBottomLeftRadius: e.borderRadii.large,
            borderBottomRightRadius: e.borderRadii.large,
            borderTopLeftRadius: 0,
            borderTopRightRadius: e.borderRadii.large,
            boxShadow: e.boxShadows.small,
            padding: e.spaces.space24,
            userSelect: 'none',
            width: '100%',
          },
          creatorIntroInputBubble: { padding: e.spaces.space12 },
        }
      })
      t.a = function (e) {
        var t = e.Icon,
          a = e.creatorIntro,
          r = e.image,
          l = e.inputRef,
          d = e.inputValue,
          f = e.onInputChange,
          g = e.withInput
        return n.createElement(
          i.a,
          { style: m.root },
          t ? n.createElement(o.a, { Icon: t }) : n.createElement(c.a, { size: 'xxxLarge', uri: r }),
          g && f
            ? n.createElement(s.a, {
                isCompact: !0,
                leftAligned: !0,
                name: 'Creator Intro',
                onChange: f,
                placeholder: p,
                ref: l,
                style: [m.creatorIntroBubble, m.creatorIntroInputBubble],
                value: d,
              })
            : n.createElement(u.b, { style: m.creatorIntroBubble }, a),
        )
      }
    },
    K6KJ: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    LiCP: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    PlkH: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = { kind: 'InlineDataFragment', name: 'clientOnlyState_viewer', hash: '339dd7e582bd34b9ab5ab7f2f43bfa62' }
      t.default = n
    },
    RLjm: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    TXsE: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    UNVS: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    bCEw: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        r = a('23An'),
        l = a('Ud88'),
        i = a('aQQo'),
        o = i.loadQuery,
        c = i.useTrackLoadQueryInRender,
        s = a('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        p = s.useRef,
        m = s.useState,
        f = a('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function b(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var a = null != t ? t : g,
          i = l()
        c()
        var s = r(),
          f = p(new Set([a])),
          y = m(function () {
            return a
          }),
          h = y[0],
          v = y[1],
          _ = m(function () {
            return a
          }),
          w = _[0],
          E = _[1]
        a !== w && (f.current.add(a), E(a), v(a))
        var k = u(
            function () {
              s.current && (f.current.add(g), v(g))
            },
            [s],
          ),
          S = u(
            function (t, a) {
              var n =
                null != a && a.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: a.fetchPolicy,
                      networkCacheConfig: a.networkCacheConfig,
                      __nameForWarning: a.__nameForWarning,
                    }
                  : a
              if (s.current) {
                var r,
                  l = o(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : i, e, t, n)
                f.current.add(l), v(l)
              }
            },
            [i, e, v, s],
          ),
          F = p(!1)
        return (
          d(function () {
            return function () {
              F.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === F.current)
                return (
                  (F.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    S(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = f.current
              if (s.current) {
                var a,
                  r = (0, n.default)(t)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var l = a.value
                    if (l === h) break
                    t.delete(l),
                      'NullQueryReference' !== l.kind &&
                        (b(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [h, s, S, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  a = (0, n.default)(f.current)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (b(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (l) {
                  a.e(l)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, S, k]
        )
      }
    },
    dNhZ: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    hznd: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        l = a('ERkP'),
        i = a('BedV'),
        o = (a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('KEM+')),
        c = a.n(o),
        s = (a('ho0z'), a('t62R')),
        u = a('IMYl'),
        d = a('py1r'),
        p = a('I4+6'),
        m = a('cm6r'),
        f = a('rHpw'),
        g = a('MWbm')
      function b(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(a), !0).forEach(function (t) {
                c()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : b(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
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
        v = y(
          y({}, f.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        _ = function (e) {
          var t = e.accessibilityLabel,
            a = e.accessibilityPosInSet,
            n = e.accessibilitySetSize,
            r = e.checked,
            i = e.disabled,
            o = e.helpText,
            c = e.label,
            b = e.name,
            y = e.onChange,
            _ = p.a.generate({
              backgroundColor: f.a.theme.colors.transparent,
              color: r ? f.a.theme.colors.primary : f.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return l.createElement(d.a, { disabled: i }, function (e) {
            return l.createElement(
              g.a,
              { style: h.root },
              l.createElement(
                g.a,
                { accessibilityRole: 'label', style: [h.base, h.border, !i && h.interactive] },
                l.createElement(
                  g.a,
                  { style: h.textContainer },
                  l.createElement(s.b, { weight: 'bold' }, c),
                  o && l.createElement(s.b, { color: 'gray700', size: 'subtext2', style: h.helpText }, o),
                ),
                l.createElement(
                  g.a,
                  { style: h.radioContainer },
                  l.createElement(
                    m.a,
                    { disabled: i, interactiveStyles: _, interactivityState: e, style: h.radioBackground },
                    l.createElement(
                      g.a,
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
                    'aria-label': t,
                    'aria-posinset': a,
                    'aria-setsize': n,
                    checked: r,
                    disabled: i,
                    name: b,
                    onChange: r ? void 0 : y,
                    style: v,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      t.a = function (e) {
        return l.createElement(
          i.a,
          r()({}, e, {
            renderSelector: function (e) {
              return l.createElement(_, r()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    lZLw: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    mKqc: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    n0Rl: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return z
      })
      a('OZaJ')
      var n = a('ddV6'),
        r = a.n(n),
        l = a('VrFO'),
        i = a.n(l),
        o = a('Y9Ll'),
        c = a.n(o),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        p = a.n(d),
        m = a('N+ot'),
        f = a.n(m),
        g = a('AuHH'),
        b = a.n(g),
        y = a('KEM+'),
        h = a.n(y),
        v = (a('2G9S'), a('ZUdG'), a('7x/C'), a('87if'), a('lTEL'), a('kYxP'), a('ERkP')),
        _ = a('pXBW'),
        w = a('6/RC'),
        E = a('UIzd'),
        k = a.n(E),
        S = a('kGix')
      a.d(t, 'a', function () {
        return S.a
      })
      var F = a('fs1G'),
        x = a('0KEI'),
        C = a('lU4h'),
        O = a.n(C),
        K = a('21nk'),
        R = a.n(K),
        L = a('bCEw'),
        P = a.n(L),
        B = a('Ud88'),
        T = a.n(B)
      function I(e) {
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
          var a,
            n = b()(e)
          if (t) {
            var r = b()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return f()(this, a)
        }
      }
      var A = function (e) {
          return (0, e.render)({ fetchStatus: S.a.LOADING, data: null, error: null, retry: F.a })
        },
        D = (function (e) {
          p()(a, e)
          var t = I(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
            return (e = t.call.apply(t, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              a,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof _.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            a
          )
        })(v.Component),
        j = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            r = R()(t, a)
          return n({ fetchStatus: S.a.LOADED, data: r, error: null, retry: F.a })
        },
        z = function (e, t) {
          if (w.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                l = void 0 === n ? 'store-or-network' : n,
                i = a.render,
                o = a.variables,
                c = P()(e),
                s = r()(c, 2),
                u = s[0],
                d = s[1],
                p = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = O()(o),
                f = r()(m, 1)[0],
                g = v.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                v.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: l })
                  },
                  [l, d, f],
                ),
                u
                  ? v.createElement(
                      v.Suspense,
                      { fallback: v.createElement(A, { render: i }) },
                      v.createElement(
                        D,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, a) {
                          return t
                            ? i({ fetchStatus: S.a.FAILED, error: t, data: null, retry: a })
                            : v.createElement(j, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var l = n.render,
              i = n.variables,
              o = T()(),
              c = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = O()(i),
              u = r()(s, 1)[0],
              d = a.get(o)
            if (d) return d
            var p = v.lazy(function () {
              return k()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return l({ fetchStatus: S.a.LOADED, data: e, error: null, retry: F.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (c(t.errorConfig.options || {})(e),
                        l({ fetchStatus: S.a.FAILED, data: null, error: e, retry: F.a }))
                      : v.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(o, e).get.bind(a, o) }
                })
            })
            return v.createElement(v.Suspense, null, v.createElement(p, null))
          }
        }
    },
    nAiE: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'superFollowsSettingsQuery', function () {
          return Gl
        })
      var n = {}
      a.r(n),
        a.d(n, 'Arrow', function () {
          return Q
        }),
        a.d(n, 'Arrow2x', function () {
          return N
        }),
        a.d(n, 'Arrow3x', function () {
          return q
        }),
        a.d(n, 'Bench', function () {
          return G
        }),
        a.d(n, 'Bench2x', function () {
          return J
        }),
        a.d(n, 'Bench3x', function () {
          return X
        }),
        a.d(n, 'Cat', function () {
          return Z
        }),
        a.d(n, 'Cat2x', function () {
          return $
        }),
        a.d(n, 'Cat3x', function () {
          return Y
        }),
        a.d(n, 'Clipboard', function () {
          return ee
        }),
        a.d(n, 'Clipboard2x', function () {
          return te
        }),
        a.d(n, 'Clipboard3x', function () {
          return ae
        }),
        a.d(n, 'CoinStairs', function () {
          return ne
        }),
        a.d(n, 'CoinStairs2x', function () {
          return re
        }),
        a.d(n, 'CoinStairs3x', function () {
          return le
        }),
        a.d(n, 'HandCoins', function () {
          return ie
        }),
        a.d(n, 'HandCoins2x', function () {
          return oe
        }),
        a.d(n, 'HandCoins3x', function () {
          return ce
        }),
        a.d(n, 'OneFinger', function () {
          return se
        }),
        a.d(n, 'OneFinger2x', function () {
          return ue
        }),
        a.d(n, 'OneFinger3x', function () {
          return de
        }),
        a.d(n, 'PaperAirplane', function () {
          return pe
        }),
        a.d(n, 'PaperAirplane2x', function () {
          return me
        }),
        a.d(n, 'PaperAirplane3x', function () {
          return fe
        }),
        a.d(n, 'Puzzle', function () {
          return ge
        }),
        a.d(n, 'Puzzle2x', function () {
          return be
        }),
        a.d(n, 'Puzzle3x', function () {
          return ye
        }),
        a.d(n, 'Thumbsup', function () {
          return he
        }),
        a.d(n, 'Thumbsup2x', function () {
          return ve
        }),
        a.d(n, 'Thumbsup3x', function () {
          return _e
        }),
        a.d(n, 'TrafficLight', function () {
          return we
        }),
        a.d(n, 'TrafficLight2x', function () {
          return Ee
        }),
        a.d(n, 'TrafficLight3x', function () {
          return ke
        }),
        a.d(n, 'Uturn', function () {
          return Se
        }),
        a.d(n, 'Uturn2x', function () {
          return Fe
        }),
        a.d(n, 'Uturn3x', function () {
          return xe
        })
      var r,
        l,
        i,
        o = a('ERkP'),
        c = a('tI3i'),
        s = a.n(c),
        u = a('Ty5D'),
        d = o.createContext(),
        p = function (e) {
          var t = e.children
          return o.createElement(d.Provider, { value: Object(u.g)() }, t)
        },
        m = function () {
          var e = o.useContext(d)
          return s()(!!e, 'history must be defined'), e
        },
        f = a('v//M'),
        g = (a('enFi'), a('3XMw')),
        b = a.n(g),
        y = a('yoO3'),
        h = a('kGix'),
        v = a('/yvb'),
        _ = a('xKuM'),
        w = a('5Vk4'),
        E = function (e) {
          var t = e.shouldClose,
            a = Object(u.g)(),
            n = m()
          return o.createElement(w.a, {
            backButtonType: 'back',
            onClick: function () {
              t ? n.push('/settings/monetization') : a.goBack()
            },
          })
        },
        k = function (e) {
          var t = e.leftControlShouldClose,
            a = e.rightControl,
            n = e.subtitle,
            r = e.title
          return o.createElement(_.a, {
            leftControl: o.createElement(E, { shouldClose: t }),
            rightControl: a,
            subtitle: n,
            title: r,
            withBottomBorder: !0,
          })
        },
        S = a('rHpw'),
        F = a('MWbm'),
        x = function (e) {
          var t = e.appBar,
            a = e.children
          return o.createElement(o.Fragment, null, t, o.createElement(F.a, { style: C.container }, a))
        },
        C = S.a.create(function (e) {
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
        R = function () {
          var e = Object(u.g)(),
            t = o.createElement(
              v.a,
              {
                onPress: function () {
                  e.push('/application/submit')
                },
                type: 'primaryFilled',
              },
              K,
            ),
            a = o.createElement(k, { rightControl: t, title: O })
          return o.createElement(x, { appBar: a })
        },
        L = (a('jQ3i'), a('x4t0'), a('z84I'), a('855f')),
        P = a('6s7X'),
        B = function () {
          return o.createElement(v.a, {
            icon: o.createElement(P.a, null),
            link: 'https://help.twitter.com/using-twitter/super-follows-creator',
            pullLeft: !0,
            type: 'primaryText',
          })
        },
        T = a('t62R'),
        I = a('WtWS'),
        A = a('0ULw'),
        D = function (e) {
          return e.items.map(function (e) {
            return o.createElement(
              F.a,
              { key: e.label, style: j.item },
              o.createElement(T.b, { style: j.label, weight: 'bold' }, e.label),
              e.checked
                ? o.createElement(I.a, { style: j.iconChecked })
                : o.createElement(A.a, { style: j.iconUnchecked }),
            )
          })
        },
        j = S.a.create(function (e) {
          return {
            iconChecked: { color: e.colors.primary },
            iconUnchecked: { color: e.colors.gray700 },
            item: { flexDirection: 'row', marginVertical: e.spaces.space12 },
            label: { flex: 1 },
          }
        }),
        z = function () {
          return o.createElement(
            T.b,
            { align: 'center', color: 'gray700' },
            o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              o.createElement(
                T.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                b.a.ebc0cbbc,
              ),
            ),
          )
        },
        V = a('ddV6'),
        U = a.n(V),
        M =
          (a('Qavd'),
          a('JtPf'),
          a('7x/C'),
          function (e) {
            var t = e.color,
              a = e.disabled,
              n = e.history,
              r = e.label,
              l = e.onPress,
              i = e.path,
              c = e.size,
              s = e.style,
              d = e.type,
              p = void 0 === d ? 'primaryFilled' : d,
              m = Object(u.g)(),
              f = o.useState(!1),
              g = U()(f, 2),
              b = g[0],
              y = g[1],
              h = function () {
                ;(null != n ? n : m).push(i)
              }
            return o.createElement(
              v.a,
              {
                color: t,
                disabled: b || a,
                onPress: function (e) {
                  l
                    ? (y(!0),
                      l(e)
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
              r,
            )
          }),
        H = a('jAXQ'),
        W = a.n(H),
        Q = (a('yH/f'), a('KOtZ'), a.p + 'Arrow.e8910965.png'),
        N = a.p + 'Arrow@2x.8af675c5.png',
        q = a.p + 'Arrow@3x.949d4365.png',
        G = a.p + 'Bench.ed26a435.png',
        J = a.p + 'Bench@2x.ef9fb7d5.png',
        X = a.p + 'Bench@3x.a306fd55.png',
        Z = a.p + 'Cat.089435a5.png',
        $ = a.p + 'Cat@2x.bca70155.png',
        Y = a.p + 'Cat@3x.2b225ef5.png',
        ee = a.p + 'Clipboard.540710d5.png',
        te = a.p + 'Clipboard@2x.72ca72e5.png',
        ae = a.p + 'Clipboard@3x.1b952e95.png',
        ne = a.p + 'CoinStairs.8488b245.png',
        re = a.p + 'CoinStairs@2x.34fd5855.png',
        le = a.p + 'CoinStairs@3x.1b706305.png',
        ie = a.p + 'HandCoins.fbd23965.png',
        oe = a.p + 'HandCoins@2x.c1b62b75.png',
        ce = a.p + 'HandCoins@3x.7dd5f3d5.png',
        se = a.p + 'OneFinger.6eb5d9c5.png',
        ue = a.p + 'OneFinger@2x.a13e1ba5.png',
        de = a.p + 'OneFinger@3x.7f22c175.png',
        pe = a.p + 'PaperAirplane.1ef48a05.png',
        me = a.p + 'PaperAirplane@2x.2923eb15.png',
        fe = a.p + 'PaperAirplane@3x.47e4b145.png',
        ge = a.p + 'Puzzle.aa045515.png',
        be = a.p + 'Puzzle@2x.5be7ab15.png',
        ye = a.p + 'Puzzle@3x.1796b225.png',
        he = a.p + 'Thumbsup.f5be79d5.png',
        ve = a.p + 'Thumbsup@2x.6d106945.png',
        _e = a.p + 'Thumbsup@3x.6a81e6d5.png',
        we = a.p + 'TrafficLight.11644b65.png',
        Ee = a.p + 'TrafficLight@2x.5657de25.png',
        ke = a.p + 'TrafficLight@3x.a5a35335.png',
        Se = a.p + 'Uturn.c8267f55.png',
        Fe = a.p + 'Uturn@2x.db3f94d5.png',
        xe = a.p + 'Uturn@3x.22f27905.png',
        Ce = a('tn7R'),
        Oe = a('TIdA'),
        Ke = a('A91F'),
        Re = 400,
        Le = 250,
        Pe = [1, 2, 3],
        Be = Object.freeze({
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
        Te = Object(Ce.a)(Be).reduce(function (e, t) {
          var a = Math.max.apply(Math, Pe)
          return (
            (e[t] = {
              aspectRatio: 1.6,
              image: { url: n[t], width: Re * a, height: Le * a },
              customVariants: Pe.map(function (e) {
                return { uri: n[t + (1 !== e ? ''.concat(e, 'x') : '')], width: Re * e, height: Le * e }
              }),
            }),
            e
          )
        }, {}),
        Ie = function (e) {
          var t = e.type,
            a = Te[t],
            n = a.aspectRatio,
            r = a.customVariants,
            l = a.image
          return o.createElement(
            F.a,
            { style: Ae.illustration },
            o.createElement(Oe.a, {
              accessibilityLabel: '',
              aspectMode: Ke.a.exact(n),
              customVariants: r,
              draggable: !1,
              image: l,
            }),
          )
        },
        Ae = S.a.create(function (e) {
          return { illustration: { alignSelf: 'center', width: Re, height: Le } }
        }),
        De = function (e) {
          var t = e.align,
            a = e.headline,
            n = e.illustration,
            r = e.subtext
          return o.createElement(
            o.Fragment,
            null,
            n && o.createElement(Ie, { type: n }),
            o.createElement(
              T.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: t,
                size: 'title4',
                style: n && je.headline,
                weight: 'heavy',
              },
              a,
            ),
            o.createElement(T.b, { align: t, color: 'gray700', style: je.subtext }, r),
          )
        },
        je = S.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space48 }, subtext: { marginVertical: e.spaces.space12 } }
        }),
        ze = b.a.feb54b4f,
        Ve = b.a.bac156a6,
        Ue = b.a.a3a20a10,
        Me = b.a.b26ae507,
        He = b.a.a753a87f,
        We = b.a.abfaa527,
        Qe = L.a.getTruncatedCount(1e4),
        Ne = b.a.fdd95737({ minFollowersCount: Qe }),
        qe = L.a.getTruncatedCount(25),
        Ge = [
          {
            label: Ne,
            test: function (e) {
              var t
              return !(
                null != e &&
                null !== (t = e.super_following_eligibility) &&
                void 0 !== t &&
                t.includes('followers')
              )
            },
          },
          {
            label: b.a.a0dcad86({ minTweetsCount: qe }),
            test: function (e) {
              var t
              return !(
                null != e &&
                null !== (t = e.super_following_eligibility) &&
                void 0 !== t &&
                t.includes('tweets')
              )
            },
          },
          {
            label: b.a.c27f57ac,
            test: function (e) {
              var t
              return !(null != e && null !== (t = e.super_following_eligibility) && void 0 !== t && t.includes('age'))
            },
          },
        ],
        Je = void 0 !== r ? r : (r = a('RLjm')),
        Xe = function (e) {
          var t = e.user,
            a = W()(Je, t),
            n = 0 === ((null == a ? void 0 : a.super_following_eligibility) || []).length,
            r = n ? Be.Arrow : Be.TrafficLight,
            l = n ? ze : Ue,
            i = n ? Ve : Me,
            c = Ge.map(function (e) {
              return { label: e.label, checked: (0, e.test)(a) }
            }),
            s = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: s },
            o.createElement(De, { headline: l, illustration: r, subtext: i }),
            o.createElement(D, { items: c }),
            n && o.createElement(z, null),
            o.createElement(M, { disabled: !n, label: He, path: '/application/one_more_thing' }),
            o.createElement(M, { label: We, path: '/application/one_more_thing' }),
          )
        },
        Ze = a('9RkS'),
        $e = b.a.bbb89925,
        Ye = function (e) {
          var t = e.followersCount,
            a = e.max,
            n = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            c = o.useState(i),
            s = U()(c, 2),
            u = s[0],
            d = s[1],
            p = Math.round(t * r * (u / 100))
          return o.createElement(
            F.a,
            { style: et.container },
            o.createElement(
              T.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                o.createElement(T.b, { weight: 'bold' }, b.a.a7dd00ea),
                o.createElement(
                  T.b,
                  { style: et.earnings, weight: 'heavy' },
                  b.a.c62c1d30({ earnings: '$'.concat(L.a.getTruncatedCount(p)) }),
                ),
                o.createElement(T.b, { color: 'green500', style: et.asteriskLeft }, b.a.e0fb982b),
              ),
            ),
            o.createElement(
              F.a,
              { style: et.slider },
              o.createElement(Ze.a, {
                accessibilityLabel: '',
                max: a,
                min: n,
                onChange: d,
                step: l,
                thumbLabel: $e({ percent: u }),
                value: u,
              }),
            ),
            o.createElement(
              T.b,
              { color: 'green500', size: 'subtext3', style: et.footnote },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                o.createElement(T.b, { style: et.asteriskRight }, b.a.e263c38e),
              ),
            ),
          )
        },
        et = S.a.create(function (e) {
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
        tt = a('97Jx'),
        at = a.n(tt),
        nt = a('6iuV'),
        rt = (a('1t7P'), a('jQ/y'), a('j7Bv')),
        lt = function (e) {
          var t = e.Icon,
            a = e.description,
            n = e.title
          return o.createElement(
            F.a,
            { style: it.container },
            o.createElement(rt.a, { Icon: t, color: 'neutral' }),
            o.createElement(T.b, { size: 'headline2', style: it.title, weight: 'bold' }, n),
            o.createElement(T.b, { color: 'gray700', style: it.description }, a),
          )
        },
        it = S.a.create(function (e) {
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
        ot = a('sUoZ'),
        ct = a('witV'),
        st = a('ACHU'),
        ut = [
          { Icon: ot.a, title: b.a.d31c5997, description: b.a.hda1e780 },
          { Icon: ct.a, title: b.a.d08d0bb2, description: b.a.cbd8b105 },
          { Icon: st.a, title: b.a.becb4930, description: b.a.g743ef96 },
        ],
        dt = function () {
          return o.createElement(
            nt.a,
            null,
            ut.map(function (e) {
              return o.createElement(lt, at()({}, e, { key: e.title }))
            }),
          )
        },
        pt = b.a.a6777c1b,
        mt = b.a.j5dc36d7,
        ft = b.a.c45b2f06,
        gt = b.a.hb6b432e,
        bt = b.a.cd5cae15,
        yt = b.a.f7239f4c,
        ht = b.a.g8cdf707,
        vt = b.a.bff8472e,
        _t = b.a.e533715d,
        wt = void 0 !== l ? l : (l = a('xd+q')),
        Et = function (e) {
          var t = e.user,
            a = W()(wt, t).legacy.followers_count,
            n = o.createElement(k, { leftControlShouldClose: !0 })
          return o.createElement(
            x,
            { appBar: n },
            o.createElement(
              T.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              pt,
            ),
            o.createElement(T.b, null, mt),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ft,
            ),
            o.createElement(T.b, { color: 'gray700' }, gt),
            o.createElement(Ie, { type: Be.HandCoins }),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              bt,
            ),
            o.createElement(dt, null),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              yt,
            ),
            o.createElement(Ye, { followersCount: a, max: 10, min: 1, price: 4.99, value: 2 }),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ht,
            ),
            o.createElement(T.b, { color: 'gray700' }, vt),
            o.createElement(M, { color: 'plum500', label: _t, path: '/application/eligibility' }),
          )
        },
        kt = b.a.d0fc4890,
        St = b.a.c64384b6,
        Ft = b.a.c3d89aca,
        xt = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { align: 'center', headline: kt, illustration: Be.OneFinger, subtext: St }),
            o.createElement(M, { label: Ft, path: '/application/complete_profile' }),
          )
        },
        Ct = (a('2G9S'), a('tVqn'), a('1lx9')),
        Ot = a.n(Ct),
        Kt = a('csss'),
        Rt = function (e) {
          var t = e.description,
            a = e.disabled,
            n = e.history,
            r = e.label,
            l = e.path,
            i = Object(u.g)()
          return o.createElement(Kt.a, {
            description: t,
            disabled: a,
            label: r,
            onPress: function () {
              ;(null != n ? n : i).push(l)
            },
          })
        },
        Lt = (a('uFXj'), b.a.f4f4dd6f),
        Pt = b.a.f448cbcb,
        Bt = function (e) {
          var t = e.title,
            a = e.type,
            n = 'required' === a ? 'red500' : 'optional' === a ? 'gray700' : void 0,
            r = 'required' === a ? Lt : 'optional' === a ? Pt : void 0
          return o.createElement(
            F.a,
            { style: Tt.container },
            o.createElement(T.b, { size: 'headline1', weight: 'heavy' }, t),
            r && o.createElement(T.b, { color: n, size: 'subtext2', style: Tt.subtext }, r),
          )
        },
        Tt = S.a.create(function (e) {
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
        It = a('Hsf0'),
        At = a.n(It),
        Dt = 'super_follows_application_draft',
        jt = 'super_follows_onboarding_draft',
        zt = function (e) {
          return At()(void 0 !== i ? i : (i = a('PlkH')), e).__id
        },
        Vt = function (e, t) {
          var a = zt(t),
            n = e.get(a)
          return s()(n, 'viewer must be defined'), n
        },
        Ut = function (e, t) {
          return Vt(e, t).getLinkedRecord(Dt)
        },
        Mt = function (e, t) {
          return Vt(e, t).getLinkedRecord(jt)
        },
        Ht = a('HG4m'),
        Wt = a.n(Ht),
        Qt = a('Ud88'),
        Nt = a.n(Qt)
      function qt(e, t) {
        var a = Nt()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              Wt()(a, function (a) {
                !(function (e, t) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = a.content_category,
                    r = void 0 === n ? [] : n,
                    l = a.content_category_other,
                    i = void 0 === l ? null : l,
                    o = a.content_creation_platform,
                    c = void 0 === o ? [] : o,
                    s = a.content_creation_platform_other,
                    u = void 0 === s ? null : s,
                    d = a.ethnicity,
                    p = void 0 === d ? [] : d,
                    m = a.gender,
                    f = void 0 === m ? [] : m,
                    g = a.purpose,
                    b = void 0 === g ? null : g,
                    y = zt(t),
                    h = Vt(e, t)
                  if (!Ut(e, t)) {
                    var v = e.create(''.concat(y, ':').concat(Dt), 'SuperFollowsApplicationDraft')
                    v.setValue(r, 'content_category'),
                      v.setValue(i, 'content_category_other'),
                      v.setValue(c, 'content_creation_platform'),
                      v.setValue(u, 'content_creation_platform_other'),
                      v.setValue(b, 'purpose'),
                      v.setValue(p, 'ethnicity'),
                      v.setValue(f, 'gender'),
                      h.setLinkedRecord(v, Dt)
                  }
                })(a, e, t)
              })
          },
          [t, a, e],
        )
      }
      function Gt(e, t) {
        var a = Nt()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              Wt()(a, function (a) {
                !(function (e, t) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = a.creator_intro,
                    r = void 0 === n ? null : n,
                    l = a.description,
                    i = void 0 === l ? null : l,
                    o = a.selected_price,
                    c = void 0 === o ? null : o,
                    s = zt(t),
                    u = Vt(e, t)
                  if (!Mt(e, t)) {
                    var d = e.create(''.concat(s, ':').concat(jt), 'SuperFollowsOnboardingDraft')
                    d.setValue(r, 'creator_intro'),
                      d.setValue(i, 'description'),
                      d.setValue(c, 'selected_price'),
                      u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                  }
                })(a, e, t)
              })
          },
          [a, t, e],
        )
      }
      function Jt(e, t) {
        var a = Nt()()
        return o.useCallback(
          function (n) {
            s()(e, 'viewerRef must be defined'),
              Wt()(a, function (a) {
                !(function (e, t, a, n) {
                  var r = Ut(e, t)
                  s()(r, 'applicationDraft must be defined'), r.setValue(n, a)
                })(a, e, t, n)
              })
          },
          [a, t, e],
        )
      }
      function Xt(e, t) {
        var a = Nt()()
        return o.useCallback(
          function (n) {
            s()(e, 'viewerId must be defined'),
              Wt()(a, function (a) {
                !(function (e, t, a, n) {
                  var r = Mt(e, t)
                  s()(r, 'onboardingDraft must be defined'), r.setValue(n, a)
                })(a, e, t, n)
              })
          },
          [a, t, e],
        )
      }
      var Zt,
        $t,
        Yt,
        ea,
        ta,
        aa,
        na,
        ra,
        la,
        ia,
        oa,
        ca,
        sa,
        ua,
        da = a('jV+4'),
        pa = a('Xrkv'),
        ma = a('p+r5'),
        fa = b.a.e873f0ae,
        ga = b.a.f095a24a,
        ba = b.a.i5f7b6b8,
        ya = b.a.d1f6d336,
        ha = b.a.f7997b16,
        va = b.a.c144fa52,
        _a = b.a.f1bf337d,
        wa = b.a.da8ea7da,
        Ea = b.a.d4062c9a,
        ka = b.a.e963d587,
        Sa = b.a.ede0ac3e,
        Fa = b.a.ffb6cb88,
        xa = b.a.b2159e8e,
        Ca = b.a.feacb49d,
        Oa = b.a.je17c987,
        Ka = b.a.d94a9a17,
        Ra = b.a.a8d0108d,
        La = b.a.gfc80842,
        Pa = void 0 !== Zt ? Zt : (Zt = a('pLb/')),
        Ba = void 0 !== $t ? $t : ($t = a('3qCL')),
        Ta = void 0 !== Yt ? Yt : (Yt = a('AyUU')),
        Ia = function (e) {
          var t,
            a,
            n,
            r,
            l,
            i,
            c,
            s = e.user,
            u = e.viewer,
            d = Nt()(),
            p = W()(Pa, s),
            m = null == p ? void 0 : p.legacy.screen_name,
            f = W()(Ba, u),
            g = f.super_follows_application_draft,
            b = (null !== (t = null == g ? void 0 : g.content_category) && void 0 !== t ? t : []).concat(
              null !== (a = null == g ? void 0 : g.content_category_other) && void 0 !== a ? a : [],
            ),
            y = (null !== (n = null == g ? void 0 : g.content_creation_platform) && void 0 !== n ? n : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            h = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            v = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            _ = null !== (c = null == g ? void 0 : g.gender) && void 0 !== c ? c : [],
            w = b.length && y.length && h.trim(),
            E = Jt(f, 'purpose'),
            S = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: S },
            o.createElement(De, { headline: fa, illustration: Be.Clipboard, subtext: ga }),
            o.createElement(Bt, { title: ba }),
            o.createElement(T.b, null, ya),
            m && o.createElement(da.a, { screenName: m }),
            o.createElement(Bt, { title: ha, type: 'required' }),
            o.createElement(T.b, { color: 'gray700' }, va),
            o.createElement(Rt, {
              description: Object(pa.a)(b, !0),
              label: _a,
              path: '/application/submit_categories',
            }),
            o.createElement(Bt, { title: wa, type: 'required' }),
            o.createElement(T.b, { color: 'gray700' }, Ea),
            o.createElement(Rt, { description: Object(pa.a)(y, !0), label: ka, path: '/application/submit_platforms' }),
            o.createElement(Bt, { title: Sa, type: 'required' }),
            o.createElement(ma.a, {
              helperText: xa,
              label: Fa,
              name: 'plannedUsage',
              onChange: function (e) {
                E(e.currentTarget.value)
              },
              value: h,
            }),
            o.createElement(Bt, { title: Ca, type: 'optional' }),
            o.createElement(T.b, { color: 'gray700' }, Oa),
            o.createElement(Rt, {
              description: Object(pa.a)(v, !0),
              label: Ka,
              path: '/application/submit_ethnicities',
            }),
            o.createElement(Rt, { description: Object(pa.a)(_, !0), label: Ra, path: '/application/submit_genders' }),
            o.createElement(z, null),
            o.createElement(M, {
              disabled: !w,
              label: La,
              onPress: function () {
                return new Promise(function (e, t) {
                  Ot()(d, {
                    mutation: Ta,
                    variables: { category: b, platform: y, purpose: h, ethnicity: v, gender: _ },
                    onCompleted: function (t, a) {
                      return e()
                    },
                    onError: t,
                  })
                })
              },
              path: '/submitted',
            }),
          )
        },
        Aa = a('fyvP'),
        Da = b.a.f7997b16,
        ja = b.a.c144fa52,
        za = [
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
        Va = b.a.c365dcc5,
        Ua = b.a.bd44a8a8,
        Ma = void 0 !== ea ? ea : (ea = a('JB6R')),
        Ha = function (e) {
          var t,
            a,
            n = e.viewer,
            r = W()(Ma, n),
            l =
              null !==
                (t = null === (a = r.super_follows_application_draft) || void 0 === a ? void 0 : a.content_category) &&
              void 0 !== t
                ? t
                : [],
            i = Jt(r, 'content_category'),
            c = o.createElement(k, { title: Da }),
            s = za.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Aa.a, {
              description: ja,
              label: ja,
              name: 'categories',
              onChange: function (e, t) {
                i([t])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Rt, { helpText: Ua, label: Va, path: '/application/submit_categories_other' }),
          )
        },
        Wa = b.a.f7997b16,
        Qa = b.a.fc00ab5b,
        Na = b.a.c249167f,
        qa = b.a.b772cd65,
        Ga = void 0 !== ta ? ta : (ta = a('xhT1')),
        Ja = function (e) {
          var t,
            a,
            n = e.viewer,
            r = W()(Ga, n),
            l =
              null !==
                (t =
                  null === (a = r.super_follows_application_draft) || void 0 === a
                    ? void 0
                    : a.content_category_other) && void 0 !== t
                ? t
                : '',
            i = Jt(r, 'content_category_other'),
            c = o.createElement(k, { title: Wa })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ma.a, {
              helperText: Na,
              label: Qa,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(v.a, null, qa),
          )
        },
        Xa = b.a.d94a9a17,
        Za = b.a.a35394b3,
        $a = [
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
        Ya = void 0 !== aa ? aa : (aa = a('LiCP')),
        en = function (e) {
          var t,
            a,
            n = e.viewer,
            r = W()(Ya, n),
            l =
              null !== (t = null === (a = r.super_follows_application_draft) || void 0 === a ? void 0 : a.ethnicity) &&
              void 0 !== t
                ? t
                : [],
            i = Jt(r, 'ethnicity'),
            c = o.createElement(k, { title: Xa }),
            s = $a.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Aa.a, {
              description: Za,
              label: Za,
              name: 'ethnicities',
              onChange: function (e, t) {
                i([t])
              },
              options: s,
              value: l[0],
            }),
          )
        },
        tn = b.a.a8d0108d,
        an = b.a.a35394b3,
        nn = [
          b.a.de32365f,
          b.a.b6ab31bd,
          b.a.ffc23188,
          b.a.h1cc7091,
          b.a.hca27829,
          b.a.b3af7344,
          b.a.he3f1435,
          b.a.c3c16abb,
        ],
        rn = void 0 !== na ? na : (na = a('K6KJ')),
        ln = function (e) {
          var t,
            a,
            n = e.viewer,
            r = W()(rn, n),
            l =
              null !== (t = null === (a = r.super_follows_application_draft) || void 0 === a ? void 0 : a.gender) &&
              void 0 !== t
                ? t
                : [],
            i = Jt(r, 'gender'),
            c = o.createElement(k, { title: tn }),
            s = nn.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Aa.a, {
              description: an,
              label: an,
              name: 'genders',
              onChange: function (e, t) {
                i([t])
              },
              options: s,
              value: l[0],
            }),
          )
        },
        on = b.a.da8ea7da,
        cn = b.a.d4062c9a,
        sn = [b.a.a3021317, b.a.eb4a600d, b.a.d4d74bb3, b.a.fc738909, b.a.d8552c1a, b.a.ca07aa46],
        un = b.a.c365dcc5,
        dn = b.a.bd44a8a8,
        pn = void 0 !== ra ? ra : (ra = a('xnrs')),
        mn = function (e) {
          var t,
            a,
            n = e.viewer,
            r = W()(pn, n),
            l =
              null !==
                (t =
                  null === (a = r.super_follows_application_draft) || void 0 === a
                    ? void 0
                    : a.content_creation_platform) && void 0 !== t
                ? t
                : [],
            i = Jt(r, 'content_creation_platform'),
            c = o.createElement(k, { title: on }),
            s = sn.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Aa.a, {
              description: cn,
              label: cn,
              name: 'platforms',
              onChange: function (e, t) {
                i([t])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Rt, { helpText: dn, label: un, path: '/application/submit_platforms_other' }),
          )
        },
        fn = b.a.da8ea7da,
        gn = b.a.d7081f91,
        bn = b.a.j349548f,
        yn = b.a.b772cd65,
        hn = void 0 !== la ? la : (la = a('+OUG')),
        vn = function (e) {
          var t,
            a,
            n = e.viewer,
            r = W()(hn, n),
            l =
              null !==
                (t =
                  null === (a = r.super_follows_application_draft) || void 0 === a
                    ? void 0
                    : a.content_creation_platform_other) && void 0 !== t
                ? t
                : '',
            i = Jt(r, 'content_creation_platform_other'),
            c = o.createElement(k, { title: fn })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ma.a, {
              helperText: bn,
              label: gn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(v.a, null, yn),
          )
        },
        _n = void 0 !== ia ? ia : (ia = a('o/nB')),
        wn = void 0 !== oa ? oa : (oa = a('lZLw')),
        En = function (e) {
          var t = e.user,
            a = e.viewer,
            n = W()(_n, t),
            r = W()(wn, a)
          return (
            qt(r),
            o.createElement(
              u.e,
              null,
              o.createElement(u.c, { exact: !0, path: '/application/eligibility' }, o.createElement(Xe, { user: n })),
              o.createElement(u.c, { exact: !0, path: '/application/one_more_thing' }, o.createElement(xt, null)),
              o.createElement(u.c, { exact: !0, path: '/application/complete_profile' }, o.createElement(R, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit' },
                o.createElement(Ia, { user: n, viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories' },
                o.createElement(Ha, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories_other' },
                o.createElement(Ja, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms' },
                o.createElement(mn, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms_other' },
                o.createElement(vn, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_ethnicities' },
                o.createElement(en, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_genders' },
                o.createElement(ln, { viewer: r }),
              ),
              o.createElement(u.c, { path: '/application' }, o.createElement(Et, { user: n })),
            )
          )
        },
        kn = (a('5BYb'), b.a.b422cb62),
        Sn = b.a.f08705e0,
        Fn = b.a.fc5bfd95,
        xn = b.a.e2cd700f,
        Cn = b.a.fbfd7397,
        On = b.a.c3d89aca,
        Kn = [
          {
            label: b.a.d8637c96,
            test: function (e) {
              var t,
                a = null !== (t = e.viewer.super_follows_onboarding_draft) && void 0 !== t ? t : {},
                n = a.creator_intro,
                r = a.description
              return !!n && !!r
            },
          },
          {
            label: b.a.b92892dc,
            test: function (e) {
              var t
              return !(null === (t = e.viewer.super_follows_onboarding_draft) || void 0 === t || !t.selected_price)
            },
          },
          {
            label: b.a.b123a502,
            test: function (e) {
              return 'Completed' === e.user.stripe_account_status
            },
          },
        ],
        Rn = void 0 !== ca ? ca : (ca = a('wQp3')),
        Ln = void 0 !== sa ? sa : (sa = a('tfBr')),
        Pn = S.a.create(function (e) {
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
        Bn = function (e) {
          var t = e.user,
            a = e.viewer,
            n = W()(Rn, t),
            r = W()(Ln, a),
            l = Kn.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: n, viewer: r }) }
            }),
            i = l.some(function (e) {
              return e.checked
            }),
            c = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(De, { headline: i ? xn : kn, illustration: i ? Be.Puzzle : Be.Cat, subtext: i ? Cn : Sn }),
            o.createElement(D, { items: l }),
            o.createElement(M, {
              label: i ? On : Fn,
              path: '/onboarding/perks_intro',
              size: 'xLarge',
              style: Pn.button,
              type: 'brandFilled',
            }),
          )
        },
        Tn = a('efqG'),
        In = a('5emT'),
        An = b.a.ab793af9,
        Dn = b.a.fb278c81,
        jn = b.a.e6b60e94,
        zn = b.a.j24c37b2,
        Vn = S.a.create(function (e) {
          return {
            root: { margin: e.spaces.space32 },
            triggerLabel: { marginRight: e.spaces.space8 },
            headlineText: { marginVertical: e.spaces.space16 },
            triggerIcon: { color: e.colors.gray700 },
            paragraphText: { marginBottom: e.spaces.space20 },
            triggerContentWrapper: { alignSelf: 'center', flexDirection: 'row' },
          }
        }),
        Un = function () {
          return o.createElement(
            Tn.a,
            {
              renderContent: function (e) {
                return o.createElement(
                  F.a,
                  { style: Vn.root },
                  o.createElement(rt.a, { Icon: In.a, color: 'neutral', size: 'xxxLarge' }),
                  o.createElement(T.b, { size: 'title3', style: Vn.headlineText, weight: 'heavy' }, Dn),
                  o.createElement(T.b, { color: 'gray700', style: Vn.paragraphText }, jn),
                  o.createElement(v.a, { onClick: e, size: 'xLarge', type: 'primaryFilled' }, zn),
                )
              },
            },
            o.createElement(
              F.a,
              { accessibilityRole: 'button', style: Vn.triggerContentWrapper },
              o.createElement(T.b, { color: 'gray700', style: Vn.triggerLabel }, An),
              o.createElement(P.a, { style: Vn.triggerIcon }),
            ),
          )
        },
        Mn = b.a.cd5cae15,
        Hn = b.a.b83662ac,
        Wn = b.a.cda6bb6d,
        Qn = b.a.a15b98ec,
        Nn = b.a.c1df579e,
        qn = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null), subtitle: Hn, title: Mn })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { headline: Wn, subtext: Qn }),
            o.createElement(Un, null),
            o.createElement(M, { label: Nn, path: '/onboarding/perks_confirm' }),
          )
        },
        Gn = b.a.d94d5707,
        Jn = b.a.iba08a94,
        Xn = b.a.aa6db82c,
        Zn = b.a.c1df579e,
        $n = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null), title: Gn })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { headline: Jn, subtext: Xn }),
            o.createElement(Un, null),
            o.createElement(M, { label: Zn, path: '/onboarding/pricing' }),
          )
        },
        Yn = b.a.cd5cae15,
        er = b.a.d80af370,
        tr = b.a.gf32cca1,
        ar = b.a.j8ba99b3,
        nr = b.a.j679dcda,
        rr = b.a.a329ce87,
        lr = b.a.be76dc33,
        ir = b.a.abd845fd,
        or = b.a.c1df579e,
        cr = void 0 !== ua ? ua : (ua = a('tJ4s')),
        sr = function (e) {
          var t,
            a,
            n = e.viewer,
            r = W()(cr, n),
            l =
              null !== (t = null === (a = r.super_follows_onboarding_draft) || void 0 === a ? void 0 : a.description) &&
              void 0 !== t
                ? t
                : '',
            i = Xt(r, 'description'),
            c = o.createElement(k, { rightControl: o.createElement(B, null), subtitle: er, title: Yn })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(De, { headline: tr, subtext: ar }),
            o.createElement(M, { label: nr, path: '/onboarding/perks_description_examples', type: 'primaryText' }),
            o.createElement(Un, null),
            o.createElement(ma.a, {
              label: rr,
              name: 'description',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l || '',
            }),
            o.createElement(v.a, { type: 'primaryFilled' }, lr),
            o.createElement(v.a, { type: 'primaryOutlined' }, ir),
            o.createElement(M, { disabled: !l, label: or, path: '/onboarding/perks_badges' }),
          )
        },
        ur = b.a.ebfb897c,
        dr = b.a.dc4feb19,
        pr = b.a.c183d271,
        mr = b.a.ic130fd5,
        fr = b.a.dd913e24,
        gr = b.a.h580543e,
        br = function () {
          var e = o.createElement(k, { title: ur })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              dr,
            ),
            o.createElement(T.b, { color: 'gray700' }, pr),
            o.createElement(T.b, null, mr),
            o.createElement(T.b, null, fr),
            o.createElement(T.b, null, gr),
          )
        },
        yr = (a('ho0z'), a('cHvH'))
      var hr,
        vr,
        _r = S.a.create(function (e) {
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
        wr = function (e) {
          var t = e.children
          return o.createElement(yr.a, null, function (e) {
            var a = e.windowWidth > S.a.theme.breakpoints.small
            return o.createElement(
              F.a,
              { style: _r.root },
              o.createElement(
                F.a,
                { style: _r.browserBar },
                o.createElement(
                  F.a,
                  { style: _r.browserBarControls },
                  o.createElement(F.a, { style: _r.browserBarButton }),
                  o.createElement(F.a, { style: [_r.browserBarButton, _r.browserBarButtonMarginLeft] }),
                  o.createElement(F.a, { style: [_r.browserBarButton, _r.browserBarButtonMarginLeft] }),
                ),
                o.createElement(
                  F.a,
                  { style: _r.browserBarUrlInputArea },
                  o.createElement(F.a, { style: _r.browserBarUrlInput }),
                ),
              ),
              o.createElement(F.a, { style: [_r.content, a && _r.contentWideMargins] }, t),
            )
          })
        },
        Er = a('FEMQ'),
        kr = a('ID86'),
        Sr = b.a.cd5cae15,
        Fr = b.a.ef08a890,
        xr = b.a.j3253319,
        Cr = b.a.h1e80993,
        Or = b.a.j679dcda,
        Kr = b.a.b16680ff,
        Rr = b.a.abd845fd,
        Lr = b.a.c1df579e,
        Pr = void 0 !== hr ? hr : (hr = a('02qo')),
        Br = void 0 !== vr ? vr : (vr = a('TXsE')),
        Tr = S.a.create(function (e) {
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
        Ir = function (e) {
          var t,
            a,
            n = e.user,
            r = e.viewer,
            l = o.useRef(null),
            i = W()(Pr, n),
            c = W()(Br, r),
            u = i.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m =
              null !==
                (t = null === (a = c.super_follows_onboarding_draft) || void 0 === a ? void 0 : a.creator_intro) &&
              void 0 !== t
                ? t
                : '',
            f = Xt(c, 'creator_intro'),
            g = o.createElement(k, { subtitle: Fr, title: Sr })
          s()('string' == typeof d, 'name must be defined'), s()('string' == typeof p, 'image must be defined')
          var b = !!m
          return o.createElement(
            x,
            { appBar: g },
            o.createElement(De, { headline: xr, subtext: Cr }),
            o.createElement(M, {
              label: Or,
              path: '/onboarding/perks_intro_examples',
              style: Tr.examplesLink,
              type: 'primaryText',
            }),
            o.createElement(Un, null),
            o.createElement(
              wr,
              null,
              o.createElement(
                F.a,
                { style: Tr.mockSubscribeModal },
                o.createElement(kr.a, null),
                o.createElement(Er.a, {
                  creatorIntroInputRef: l,
                  creatorIntroInputValue: m,
                  image: p,
                  name: d,
                  onInputChange: function (e) {
                    f(e.currentTarget.value)
                  },
                  withInput: !0,
                }),
              ),
            ),
            o.createElement(
              F.a,
              { style: Tr.buttonsWrapper },
              o.createElement(
                v.a,
                {
                  onClick: function () {
                    var e
                    null == l || null === (e = l.current) || void 0 === e || e.focus()
                  },
                  size: 'large',
                  style: Tr.button,
                  type: 'primaryOutlined',
                },
                b ? Rr : Kr,
              ),
              o.createElement(M, { disabled: !b, label: Lr, path: '/onboarding/perks_description', size: 'large' }),
            ),
          )
        },
        Ar = a('JWc1'),
        Dr = (a('+KXO'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('KEM+')),
        jr = a.n(Dr),
        zr = a('Lsrn'),
        Vr = a('k/Ka')
      function Ur(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function Mr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ur(Object(a), !0).forEach(function (t) {
                jr()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Ur(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Hr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Vr.a)(
          'svg',
          Mr(
            Mr({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [zr.a.root, e.style], viewBox: '0 0 24 24' },
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
      Hr.metadata = { width: 24, height: 24 }
      var Wr,
        Qr,
        Nr,
        qr,
        Gr,
        Jr,
        Xr,
        Zr = Hr,
        $r = a('lUZE'),
        Yr = b.a.ebfb897c,
        el = b.a.dc4feb19,
        tl = b.a.a0bb2076,
        al = b.a.ace46d40,
        nl = b.a.h2c4511f,
        rl = b.a.hbe4f99e,
        ll = S.a.create(function (e) {
          return {
            exampleIntros: { marginLeft: e.spaces.space36 },
            headlineWrapper: { flexDirection: 'row', marginBottom: e.spaces.space12 },
            headline: { marginLeft: e.spaces.space8 },
            subtext: { marginLeft: e.spaces.space36 },
          }
        }),
        il = function () {
          var e = o.createElement(k, { title: Yr })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(
              F.a,
              { style: ll.headlineWrapper },
              o.createElement(rt.a, { Icon: Zr, color: 'neutral', size: 'large' }),
              o.createElement(
                T.b,
                {
                  accessibilityLevel: 2,
                  accessibilityRole: 'heading',
                  size: 'title4',
                  style: ll.headline,
                  weight: 'heavy',
                },
                el,
              ),
            ),
            o.createElement(T.b, { color: 'gray700', style: ll.subtext }, tl),
            o.createElement(
              F.a,
              { style: ll.exampleIntros },
              o.createElement(Ar.a, { Icon: $r.a, creatorIntro: al }),
              o.createElement(Ar.a, { Icon: $r.a, creatorIntro: nl }),
              o.createElement(Ar.a, { Icon: $r.a, creatorIntro: rl }),
            ),
          )
        },
        ol = a('m3Bd'),
        cl = a.n(ol),
        sl = (a('7xRU'), a('hznd')),
        ul = b.a.ea8a3d2d,
        dl = b.a.ic9124bf,
        pl = b.a.g5923869,
        ml = {
          offer1: [b.a.f025ab39, b.a.c5602dfd],
          offer2: [b.a.ib075804, b.a.j8a72f06],
          offer3: [b.a.c246656e, b.a.a92ab16c],
        },
        fl = b.a.c1df579e,
        gl = void 0 !== Wr ? Wr : (Wr = a('5jO1')),
        bl = void 0 !== Qr ? Qr : (Qr = a('mKqc')),
        yl = void 0 !== Nr ? Nr : (Nr = a('p785')),
        hl = function (e) {
          var t,
            a,
            n = e.priceOfferings,
            r = e.viewer,
            l = Nt()(),
            i = W()(gl, n),
            c = (i.$refType, cl()(i, ['$refType'])),
            s = W()(bl, r),
            u = s.super_follows_onboarding_draft,
            d = null !== (t = null == u ? void 0 : u.creator_intro) && void 0 !== t ? t : '',
            p = null !== (a = null == u ? void 0 : u.description) && void 0 !== a ? a : '',
            m = null == u ? void 0 : u.selected_price,
            f = Xt(s, 'selected_price'),
            g = o.createElement(k, { rightControl: o.createElement(B, null), title: ul }),
            y = o.createElement(
              b.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              o.createElement(
                T.b,
                { link: 'https://help.twitter.com/using-twitter/super-follows-creator' },
                b.a.c336b06a,
              ),
            ),
            h = Object.keys(c).map(function (e) {
              return { label: pl({ price: c[e] }), value: e, helpText: ml[e].join(' ') }
            })
          return o.createElement(
            x,
            { appBar: g },
            o.createElement(De, { headline: dl, subtext: y }),
            o.createElement(sl.a, {
              label: dl,
              name: 'selectedPrice',
              onChange: function (e, t) {
                f(t)
              },
              options: h,
              value: m,
            }),
            o.createElement(M, {
              disabled: !m,
              label: fl,
              onPress: function () {
                return new Promise(function (e, t) {
                  if (!m) return t(new Error('No price selected'))
                  Ot()(l, {
                    mutation: yl,
                    variables: {
                      creator_intro: d,
                      benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: p }],
                      selected_price: m,
                    },
                    onCompleted: function (t, a) {
                      return e()
                    },
                    onError: t,
                  })
                })
              },
              path: '/onboarding/stripe_setup',
            }),
          )
        },
        vl = b.a.e20f6661,
        _l = b.a.a9ee1ecc,
        wl = b.a.j24c37b2,
        El = function () {
          var e = m(),
            t = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: t },
            o.createElement(De, { headline: vl, illustration: Be.Thumbsup, subtext: _l }),
            o.createElement(M, { history: e, label: wl, path: '/settings/monetization' }),
          )
        },
        kl = b.a.e2cd700f,
        Sl = b.a.d6bfb60c,
        Fl = b.a.b9cbb370,
        xl = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { headline: kl, illustration: Be.Puzzle, subtext: Sl }),
            o.createElement(M, { label: Fl, path: '/onboarding/stripe_completed' }),
          )
        },
        Cl = b.a.ja884230,
        Ol = b.a.af1b808d,
        Kl = b.a.fe339750,
        Rl = b.a.j912510a,
        Ll = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { headline: Cl, illustration: Be.CoinStairs, subtext: Ol }),
            o.createElement(M, { label: Kl, path: '/onboarding/stripe_completed' }),
            o.createElement(M, { label: Rl, path: '/onboarding/stripe_completed', type: 'primaryOutlined' }),
          )
        },
        Pl = void 0 !== qr ? qr : (qr = a('UNVS')),
        Bl = void 0 !== Gr ? Gr : (Gr = a('6byF')),
        Tl = void 0 !== Jr ? Jr : (Jr = a('dNhZ')),
        Il = function (e) {
          var t,
            a,
            n = e.priceOfferings,
            r = e.user,
            l = e.viewer,
            i = W()(Pl, n),
            c = W()(Bl, r),
            s = W()(Tl, l),
            d = null !== (t = c.super_follow_creator_benefits) && void 0 !== t ? t : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Gt(s, {
              creator_intro: d.creator_intro,
              description: U()(m, 1)[0].description,
              selected_price: (null !== (a = c.super_follow_creator_price_metadata) && void 0 !== a ? a : {})
                .selected_price,
            }),
            o.createElement(
              u.e,
              null,
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_intro' },
                o.createElement(Ir, { user: c, viewer: s }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_intro_examples' }, o.createElement(il, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description' },
                o.createElement(sr, { viewer: s }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/perks_description_examples' },
                o.createElement(br, null),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_badges' }, o.createElement(qn, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_confirm' }, o.createElement($n, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/pricing' },
                o.createElement(hl, { priceOfferings: i, viewer: s }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_setup' }, o.createElement(Ll, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_incomplete' }, o.createElement(xl, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_completed' }, o.createElement(El, null)),
              o.createElement(u.c, { path: '/onboarding' }, o.createElement(Bn, { user: c, viewer: s })),
            )
          )
        },
        Al = b.a.aa7e35ed,
        Dl = b.a.f67e69bf,
        jl = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { headline: Al, illustration: Be.Uturn, subtext: Dl }),
          )
        },
        zl = b.a.d3d6c52c,
        Vl = b.a.c53e9129,
        Ul = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { headline: zl, illustration: Be.PaperAirplane, subtext: Vl }),
          )
        },
        Ml = b.a.j274e6aa,
        Hl = b.a.d7f65127,
        Wl = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(De, { headline: Ml, illustration: Be.Bench, subtext: Hl }),
          )
        },
        Ql = a('n0Rl'),
        Nl = a('q9Zt'),
        ql = b.a.hae1c933,
        Gl = void 0 !== Xr ? Xr : (Xr = a('G8I5')),
        Jl = Object(Ql.b)(Gl, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        Xl = S.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      t.default = function () {
        return o.createElement(Jl, {
          render: function (e) {
            var t,
              a,
              n = e.data,
              r = e.error,
              l = e.fetchStatus,
              i = e.retry,
              c = null == n ? void 0 : n.super_follows_price_offerings,
              s =
                null == n || null === (t = n.viewer) || void 0 === t || null === (a = t.user_results) || void 0 === a
                  ? void 0
                  : a.result,
              d = null == n ? void 0 : n.viewer,
              m = (function (e) {
                var t = e.stripeAccountStatus
                switch (e.superFollowsApplicationStatus) {
                  case 'Submitted':
                    return '/submitted'
                  case 'Waitlisted':
                    return '/waitlisted'
                  case 'Rejected':
                    return '/rejected'
                  case 'Approved':
                    switch (t) {
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
                superFollowsApplicationStatus:
                  (!r && (null == s ? void 0 : s.super_follows_application_status)) || 'NotStarted',
                stripeAccountStatus: (!r && (null == s ? void 0 : s.stripe_account_status)) || 'NotStarted',
              })
            return o.createElement(f.a, {
              fetchStatus: Object(h.b)(l, null != c && 'User' === (null == s ? void 0 : s.__typename) && null != d),
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
                            o.createElement(u.c, { path: '/application' }, o.createElement(En, { user: s, viewer: d })),
                            o.createElement(u.c, { exact: !0, path: '/submitted' }, o.createElement(Ul, null)),
                            o.createElement(u.c, { exact: !0, path: '/waitlisted' }, o.createElement(Wl, null)),
                            o.createElement(u.c, { exact: !0, path: '/rejected' }, o.createElement(jl, null)),
                            o.createElement(
                              u.c,
                              { path: '/onboarding' },
                              o.createElement(Il, { priceOfferings: c, user: s, viewer: d }),
                            ),
                          ),
                        ),
                      ),
                    )
              },
              renderFailure: function () {
                return o.createElement(Nl.a, { onRetry: i, style: Xl.error, title: ql })
              },
              retryable: !1,
            })
          },
          variables: {},
        })
      }
    },
    'o/nB': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    p785: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r,
        l = {
          fragment: {
            argumentDefinitions: (n = [
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
            argumentDefinitions: n,
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
      ;(l.hash = '6760a9c38cb958dabf2178d9c4d7df42'), (t.default = l)
    },
    'pLb/': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    tJ4s: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    tfBr: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    wQp3: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingGetStartedScreen_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'stripe_account_status', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '89d53e7f51d77e01d95fe5e756509ce9',
      }
      t.default = n
    },
    'xd+q': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    xhT1: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
    xnrs: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
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
      t.default = n
    },
  },
])
//# sourceMappingURL=WIPED
