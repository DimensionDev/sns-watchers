;(window.webpackJsonp = window.webpackJsonp || []).push([
  [223],
  {
    '+OUG': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    '02qo': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    '0ULw': function (e, n, t) {
      'use strict'
      t('+KXO'), t('1t7P'), t('LW0h'), t('daRM'), t('jwue'), t('+oxZ'), t('FtHn')
      var a = t('KEM+'),
        r = t.n(a),
        l = t('ERkP'),
        i = t('Lsrn'),
        o = t('k/Ka')
      function c(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function s(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? c(Object(t), !0).forEach(function (n) {
                r()(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
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
      ;(u.metadata = { width: 24, height: 24 }), (n.a = u)
    },
    '21nk': function (e, n, t) {
      'use strict'
      var a = t('I9iR'),
        r = t('3KVO'),
        l = t('yLYC'),
        i = t('Ud88'),
        o = (t('/2Cm'), t('aQQo').useTrackLoadQueryInRender),
        c = (t('ERkP').useDebugValue, t('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, n, t) {
        o()
        var c,
          d = i(),
          p = n.fetchKey,
          m = n.fetchPolicy,
          f = n.source,
          g = n.variables,
          b = n.networkCacheConfig,
          y = l(e, g, b)
        if ('PreloadedQuery_DEPRECATED' === n.kind)
          y.request.node.params.name !== n.name && a(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: s(d, y.request.identifier, function () {
                return d === n.environment && null != f
                  ? d.executeWithSource({ operation: y, source: f })
                  : d.execute({ operation: y })
              }),
              fetchPolicy: m,
              query: y,
              renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(d, y)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === n.environment ? f.ifEmpty(h) : (n.environment, h),
            fetchKey: p,
            fetchPolicy: m,
            query: y,
            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
          }
        }
        return r(c)
      }
    },
    '23An': function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        r = a.useEffect,
        l = a.useRef
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
    '3qCL': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    '5jO1': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    '6byF': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    '9SqB': function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('yiKp')),
        r = t('ERkP'),
        l = t('Ud88'),
        i = t('K1lQ').commitMutation,
        o = r.useState,
        c = r.useEffect,
        s = r.useRef,
        u = r.useCallback,
        d = t('23An')
      e.exports = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          t = l(),
          r = d(),
          p = s(t),
          m = s(e),
          f = s(new Set()),
          g = o(!1),
          b = g[0],
          y = g[1],
          h = u(
            function (n) {
              p.current === t && m.current === e && (f.current.delete(n), r.current && y(f.current.size > 0))
            },
            [t, r, e],
          )
        c(
          function () {
            ;(p.current === t && m.current === e) ||
              ((f.current = new Set()), r.current && y(!1), (p.current = t), (m.current = e))
          },
          [t, r, e],
        )
        var v = u(
          function (l) {
            var i = n(
              t,
              (0, a.default)(
                (0, a.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, n) {
                    h(i), l.onCompleted && l.onCompleted(e, n)
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
            return f.current.add(i), r.current && y(!0), i
          },
          [h, n, t, r, e],
        )
        return [v, b]
      }
    },
    AyUU: function (e, n, t) {
      'use strict'
      t.r(n)
      var a,
        r,
        l,
        i,
        o,
        c,
        s = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'category' }),
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
            argumentDefinitions: [a, i, o, r, l],
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
      ;(s.hash = '38de90823c3fb6770d441acfd7d6c0d5'), (n.default = s)
    },
    FEMQ: function (e, n, t) {
      'use strict'
      t('ho0z'), t('uFXj')
      var a = t('ERkP'),
        r = t('tI3i'),
        l = t.n(r),
        i = t('JWc1'),
        o = t('t62R'),
        c = t('rHpw'),
        s = t('3XMw'),
        u = t.n(s),
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
      n.a = function (e) {
        var n = e.creatorIntro,
          t = e.creatorIntroInputRef,
          r = e.creatorIntroInputValue,
          c = e.image,
          s = e.name,
          m = e.onInputChange,
          f = e.withInput
        return (
          l()('string' == typeof s, 'name must be a string'),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              o.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title2', weight: 'heavy' },
              a.createElement(u.a.I18NFormatMessage, { $i18n: 'f402ebd1', name: s }, a.createElement('br', null)),
            ),
            a.createElement(o.b, { size: 'headline2', style: p.subheader }, d),
            c
              ? a.createElement(i.a, {
                  creatorIntro: n,
                  image: c,
                  inputRef: t,
                  inputValue: r,
                  onInputChange: m,
                  withInput: f,
                })
              : null,
          )
        )
      }
    },
    G8I5: function (e, n, t) {
      'use strict'
      t.r(n)
      var a,
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
                args: (a = [{ kind: 'Literal', name: 's', value: 21 }]),
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
                args: a,
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
                args: a,
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
                args: a,
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
      ;(u.hash = 'd0f692159553a3f746e5519cbc1f0901'), (n.default = u)
    },
    ID86: function (e, n, t) {
      'use strict'
      var a = t('ERkP'),
        r = t('MWbm'),
        l = t('rHpw'),
        i = t('+Eiw')
      n.a = function () {
        return a.createElement(r.a, { style: o.blob })
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
    JB6R: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    JWc1: function (e, n, t) {
      'use strict'
      t('uFXj')
      var a = t('ERkP'),
        r = t('3XMw'),
        l = t.n(r),
        i = t('MWbm'),
        o = t('j7Bv'),
        c = t('jhWN'),
        s = t('6OUF'),
        u = t('t62R'),
        d = t('rHpw'),
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
      n.a = function (e) {
        var n = e.Icon,
          t = e.creatorIntro,
          r = e.image,
          l = e.inputRef,
          d = e.inputValue,
          f = e.onInputChange,
          g = e.withInput
        return a.createElement(
          i.a,
          { style: m.root },
          n ? a.createElement(o.a, { Icon: n }) : a.createElement(c.a, { size: 'xxxLarge', uri: r }),
          g && f
            ? a.createElement(s.a, {
                isCompact: !0,
                leftAligned: !0,
                name: 'Creator Intro',
                onChange: f,
                placeholder: p,
                ref: l,
                style: [m.creatorIntroBubble, m.creatorIntroInputBubble],
                value: d,
              })
            : a.createElement(u.b, { style: m.creatorIntroBubble }, t),
        )
      }
    },
    K6KJ: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    LiCP: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    PlkH: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = { kind: 'InlineDataFragment', name: 'clientOnlyState_viewer', hash: '339dd7e582bd34b9ab5ab7f2f43bfa62' }
      n.default = a
    },
    RLjm: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    TXsE: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    UNVS: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    bCEw: function (e, n, t) {
      'use strict'
      var a = t('IGGJ')(t('K1iM')),
        r = t('23An'),
        l = t('Ud88'),
        i = t('aQQo'),
        o = i.loadQuery,
        c = i.useTrackLoadQueryInRender,
        s = t('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        p = s.useRef,
        m = s.useState,
        f = t('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function b(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, n) {
        var t = null != n ? n : g,
          i = l()
        c()
        var s = r(),
          f = p(new Set([t])),
          y = m(function () {
            return t
          }),
          h = y[0],
          v = y[1],
          _ = m(function () {
            return t
          }),
          w = _[0],
          E = _[1]
        t !== w && (f.current.add(t), E(t), v(t))
        var k = u(
            function () {
              s.current && (f.current.add(g), v(g))
            },
            [s],
          ),
          S = u(
            function (n, t) {
              var a =
                null != t && t.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: t.fetchPolicy,
                      networkCacheConfig: t.networkCacheConfig,
                      __nameForWarning: t.__nameForWarning,
                    }
                  : t
              if (s.current) {
                var r,
                  l = o(null !== (r = null == t ? void 0 : t.__environment) && void 0 !== r ? r : i, e, n, a)
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
              var n = f.current
              if (s.current) {
                var t,
                  r = (0, a.default)(n)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var l = t.value
                    if (l === h) break
                    n.delete(l),
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
                var n,
                  t = (0, a.default)(f.current)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var r = n.value
                    'NullQueryReference' !== r.kind &&
                      (b(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (l) {
                  t.e(l)
                } finally {
                  t.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, S, k]
        )
      }
    },
    dNhZ: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    hznd: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        r = t.n(a),
        l = t('ERkP'),
        i = t('BedV'),
        o = (t('+KXO'), t('1t7P'), t('LW0h'), t('daRM'), t('jwue'), t('+oxZ'), t('FtHn'), t('KEM+')),
        c = t.n(o),
        s = (t('ho0z'), t('t62R')),
        u = t('IMYl'),
        d = t('py1r'),
        p = t('I4+6'),
        m = t('cm6r'),
        f = t('rHpw'),
        g = t('MWbm')
      function b(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function y(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? b(Object(t), !0).forEach(function (n) {
                c()(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
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
          var n = e.accessibilityLabel,
            t = e.accessibilityPosInSet,
            a = e.accessibilitySetSize,
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
                    'aria-label': n,
                    'aria-posinset': t,
                    'aria-setsize': a,
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
      n.a = function (e) {
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
    lZLw: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    mKqc: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    n0Rl: function (e, n, t) {
      'use strict'
      t.d(n, 'b', function () {
        return z
      })
      t('OZaJ')
      var a = t('ddV6'),
        r = t.n(a),
        l = t('VrFO'),
        i = t.n(l),
        o = t('Y9Ll'),
        c = t.n(o),
        s = t('1Pcy'),
        u = t.n(s),
        d = t('5Yy7'),
        p = t.n(d),
        m = t('N+ot'),
        f = t.n(m),
        g = t('AuHH'),
        b = t.n(g),
        y = t('KEM+'),
        h = t.n(y),
        v = (t('2G9S'), t('ZUdG'), t('7x/C'), t('87if'), t('lTEL'), t('kYxP'), t('ERkP')),
        _ = t('pXBW'),
        w = t('6/RC'),
        E = t('UIzd'),
        k = t.n(E),
        S = t('kGix')
      t.d(n, 'a', function () {
        return S.a
      })
      var F = t('fs1G'),
        x = t('0KEI'),
        C = t('lU4h'),
        O = t.n(C),
        K = t('21nk'),
        R = t.n(K),
        L = t('bCEw'),
        P = t.n(L),
        B = t('Ud88'),
        T = t.n(B)
      function I(e) {
        var n = (function () {
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
          var t,
            a = b()(e)
          if (n) {
            var r = b()(this).constructor
            t = Reflect.construct(a, arguments, r)
          } else t = a.apply(this, arguments)
          return f()(this, t)
        }
      }
      var D = function (e) {
          return (0, e.render)({ fetchStatus: S.a.LOADING, data: null, error: null, retry: F.a })
        },
        A = (function (e) {
          p()(t, e)
          var n = I(t)
          function t() {
            var e
            i()(this, t)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (e = n.call.apply(n, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              t,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, n) {
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
            t
          )
        })(v.Component),
        j = function (e) {
          var n = e.query,
            t = e.queryRef,
            a = e.render,
            r = R()(n, t)
          return a({ fetchStatus: S.a.LOADED, data: r, error: null, retry: F.a })
        },
        z = function (e, n) {
          if (w.canUseDOM)
            return function (t) {
              var a = t.fetchPolicy,
                l = void 0 === a ? 'store-or-network' : a,
                i = t.render,
                o = t.variables,
                c = P()(e),
                s = r()(c, 2),
                u = s[0],
                d = s[1],
                p = Object(x.useCreateLocalApiErrorHandler)(n.errorConfig.context),
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
                      { fallback: v.createElement(D, { render: i }) },
                      v.createElement(
                        A,
                        { errorHandler: p(n.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (n, t) {
                          return n
                            ? i({ fetchStatus: S.a.FAILED, error: n, data: null, retry: t })
                            : v.createElement(j, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var t = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var l = a.render,
              i = a.variables,
              o = T()(),
              c = Object(x.useCreateLocalApiErrorHandler)(n.errorConfig.context),
              s = O()(i),
              u = r()(s, 1)[0],
              d = t.get(o)
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
                      ? (c(n.errorConfig.options || {})(e),
                        l({ fetchStatus: S.a.FAILED, data: null, error: e, retry: F.a }))
                      : v.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: t.set(o, e).get.bind(t, o) }
                })
            })
            return v.createElement(v.Suspense, null, v.createElement(p, null))
          }
        }
    },
    nAiE: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'superFollowsSettingsQuery', function () {
          return Yl
        })
      var a = {}
      t.r(a),
        t.d(a, 'Arrow', function () {
          return Q
        }),
        t.d(a, 'Arrow2x', function () {
          return N
        }),
        t.d(a, 'Arrow3x', function () {
          return q
        }),
        t.d(a, 'Bench', function () {
          return G
        }),
        t.d(a, 'Bench2x', function () {
          return J
        }),
        t.d(a, 'Bench3x', function () {
          return X
        }),
        t.d(a, 'Cat', function () {
          return Z
        }),
        t.d(a, 'Cat2x', function () {
          return $
        }),
        t.d(a, 'Cat3x', function () {
          return Y
        }),
        t.d(a, 'Clipboard', function () {
          return ee
        }),
        t.d(a, 'Clipboard2x', function () {
          return ne
        }),
        t.d(a, 'Clipboard3x', function () {
          return te
        }),
        t.d(a, 'CoinStairs', function () {
          return ae
        }),
        t.d(a, 'CoinStairs2x', function () {
          return re
        }),
        t.d(a, 'CoinStairs3x', function () {
          return le
        }),
        t.d(a, 'HandCoins', function () {
          return ie
        }),
        t.d(a, 'HandCoins2x', function () {
          return oe
        }),
        t.d(a, 'HandCoins3x', function () {
          return ce
        }),
        t.d(a, 'OneFinger', function () {
          return se
        }),
        t.d(a, 'OneFinger2x', function () {
          return ue
        }),
        t.d(a, 'OneFinger3x', function () {
          return de
        }),
        t.d(a, 'PaperAirplane', function () {
          return pe
        }),
        t.d(a, 'PaperAirplane2x', function () {
          return me
        }),
        t.d(a, 'PaperAirplane3x', function () {
          return fe
        }),
        t.d(a, 'Puzzle', function () {
          return ge
        }),
        t.d(a, 'Puzzle2x', function () {
          return be
        }),
        t.d(a, 'Puzzle3x', function () {
          return ye
        }),
        t.d(a, 'Thumbsup', function () {
          return he
        }),
        t.d(a, 'Thumbsup2x', function () {
          return ve
        }),
        t.d(a, 'Thumbsup3x', function () {
          return _e
        }),
        t.d(a, 'TrafficLight', function () {
          return we
        }),
        t.d(a, 'TrafficLight2x', function () {
          return Ee
        }),
        t.d(a, 'TrafficLight3x', function () {
          return ke
        }),
        t.d(a, 'Uturn', function () {
          return Se
        }),
        t.d(a, 'Uturn2x', function () {
          return Fe
        }),
        t.d(a, 'Uturn3x', function () {
          return xe
        })
      var r,
        l,
        i,
        o = t('ERkP'),
        c = t('tI3i'),
        s = t.n(c),
        u = t('Ty5D'),
        d = o.createContext(),
        p = function (e) {
          var n = e.children
          return o.createElement(d.Provider, { value: Object(u.g)() }, n)
        },
        m = function () {
          var e = o.useContext(d)
          return s()(!!e, 'history must be defined'), e
        },
        f = t('v//M'),
        g = (t('enFi'), t('3XMw')),
        b = t.n(g),
        y = t('yoO3'),
        h = t('kGix'),
        v = t('/yvb'),
        _ = t('xKuM'),
        w = t('5Vk4'),
        E = function (e) {
          var n = e.shouldClose,
            t = Object(u.g)(),
            a = m()
          return o.createElement(w.a, {
            backButtonType: 'back',
            onClick: function () {
              n ? a.push('/settings/monetization') : t.goBack()
            },
          })
        },
        k = function (e) {
          var n = e.leftControlShouldClose,
            t = e.rightControl,
            a = e.subtitle,
            r = e.title
          return o.createElement(_.a, {
            leftControl: o.createElement(E, { shouldClose: n }),
            rightControl: t,
            subtitle: a,
            title: r,
            withBottomBorder: !0,
          })
        },
        S = t('rHpw'),
        F = t('MWbm'),
        x = function (e) {
          var n = e.appBar,
            t = e.children
          return o.createElement(o.Fragment, null, n, o.createElement(F.a, { style: C.container }, t))
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
            n = o.createElement(
              v.a,
              {
                onPress: function () {
                  e.push('/application/submit')
                },
                type: 'primaryFilled',
              },
              K,
            ),
            t = o.createElement(k, { rightControl: n, title: O })
          return o.createElement(x, { appBar: t })
        },
        L = (t('jQ3i'), t('x4t0'), t('z84I'), t('855f')),
        P = t('6s7X'),
        B = function () {
          return o.createElement(v.a, {
            icon: o.createElement(P.a, null),
            link: 'https://help.twitter.com/using-twitter/super-follows-creator',
            pullLeft: !0,
            type: 'primaryText',
          })
        },
        T = t('t62R'),
        I = t('WtWS'),
        D = t('0ULw'),
        A = function (e) {
          return e.items.map(function (e) {
            return o.createElement(
              F.a,
              { key: e.label, style: j.item },
              o.createElement(T.b, { style: j.label, weight: 'bold' }, e.label),
              e.checked
                ? o.createElement(I.a, { style: j.iconChecked })
                : o.createElement(D.a, { style: j.iconUnchecked }),
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
        V = t('ddV6'),
        U = t.n(V),
        M =
          (t('Qavd'),
          t('JtPf'),
          t('7x/C'),
          function (e) {
            var n = e.color,
              t = e.disabled,
              a = e.history,
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
                ;(null != a ? a : m).push(i)
              }
            return o.createElement(
              v.a,
              {
                color: n,
                disabled: b || t,
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
        H = t('jAXQ'),
        W = t.n(H),
        Q = (t('yH/f'), t('KOtZ'), t.p + 'Arrow.e8910965.png'),
        N = t.p + 'Arrow@2x.8af675c5.png',
        q = t.p + 'Arrow@3x.949d4365.png',
        G = t.p + 'Bench.ed26a435.png',
        J = t.p + 'Bench@2x.ef9fb7d5.png',
        X = t.p + 'Bench@3x.a306fd55.png',
        Z = t.p + 'Cat.089435a5.png',
        $ = t.p + 'Cat@2x.bca70155.png',
        Y = t.p + 'Cat@3x.2b225ef5.png',
        ee = t.p + 'Clipboard.540710d5.png',
        ne = t.p + 'Clipboard@2x.72ca72e5.png',
        te = t.p + 'Clipboard@3x.1b952e95.png',
        ae = t.p + 'CoinStairs.8488b245.png',
        re = t.p + 'CoinStairs@2x.34fd5855.png',
        le = t.p + 'CoinStairs@3x.1b706305.png',
        ie = t.p + 'HandCoins.fbd23965.png',
        oe = t.p + 'HandCoins@2x.c1b62b75.png',
        ce = t.p + 'HandCoins@3x.7dd5f3d5.png',
        se = t.p + 'OneFinger.6eb5d9c5.png',
        ue = t.p + 'OneFinger@2x.a13e1ba5.png',
        de = t.p + 'OneFinger@3x.7f22c175.png',
        pe = t.p + 'PaperAirplane.1ef48a05.png',
        me = t.p + 'PaperAirplane@2x.2923eb15.png',
        fe = t.p + 'PaperAirplane@3x.47e4b145.png',
        ge = t.p + 'Puzzle.aa045515.png',
        be = t.p + 'Puzzle@2x.5be7ab15.png',
        ye = t.p + 'Puzzle@3x.1796b225.png',
        he = t.p + 'Thumbsup.f5be79d5.png',
        ve = t.p + 'Thumbsup@2x.6d106945.png',
        _e = t.p + 'Thumbsup@3x.6a81e6d5.png',
        we = t.p + 'TrafficLight.11644b65.png',
        Ee = t.p + 'TrafficLight@2x.5657de25.png',
        ke = t.p + 'TrafficLight@3x.a5a35335.png',
        Se = t.p + 'Uturn.c8267f55.png',
        Fe = t.p + 'Uturn@2x.db3f94d5.png',
        xe = t.p + 'Uturn@3x.22f27905.png',
        Ce = t('tn7R'),
        Oe = t('TIdA'),
        Ke = t('A91F'),
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
        Te = Object(Ce.a)(Be).reduce(function (e, n) {
          var t = Math.max.apply(Math, Pe)
          return (
            (e[n] = {
              aspectRatio: 1.6,
              image: { url: a[n], width: Re * t, height: Le * t },
              customVariants: Pe.map(function (e) {
                return { uri: a[n + (1 !== e ? ''.concat(e, 'x') : '')], width: Re * e, height: Le * e }
              }),
            }),
            e
          )
        }, {}),
        Ie = function (e) {
          var n = e.type,
            t = Te[n],
            a = t.aspectRatio,
            r = t.customVariants,
            l = t.image
          return o.createElement(
            F.a,
            { style: De.illustration },
            o.createElement(Oe.a, {
              accessibilityLabel: '',
              aspectMode: Ke.a.exact(a),
              customVariants: r,
              draggable: !1,
              image: l,
            }),
          )
        },
        De = S.a.create(function (e) {
          return { illustration: { alignSelf: 'center', width: Re, height: Le } }
        }),
        Ae = function (e) {
          var n = e.align,
            t = e.headline,
            a = e.illustration,
            r = e.subtext
          return o.createElement(
            o.Fragment,
            null,
            a && o.createElement(Ie, { type: a }),
            o.createElement(
              T.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: n,
                size: 'title4',
                style: a && je.headline,
                weight: 'heavy',
              },
              t,
            ),
            o.createElement(T.b, { align: n, color: 'gray700', style: je.subtext }, r),
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
              var n
              return !(
                null != e &&
                null !== (n = e.super_following_eligibility) &&
                void 0 !== n &&
                n.includes('followers')
              )
            },
          },
          {
            label: b.a.a0dcad86({ minTweetsCount: qe }),
            test: function (e) {
              var n
              return !(
                null != e &&
                null !== (n = e.super_following_eligibility) &&
                void 0 !== n &&
                n.includes('tweets')
              )
            },
          },
          {
            label: b.a.c27f57ac,
            test: function (e) {
              var n
              return !(null != e && null !== (n = e.super_following_eligibility) && void 0 !== n && n.includes('age'))
            },
          },
        ],
        Je = void 0 !== r ? r : (r = t('RLjm')),
        Xe = function (e) {
          var n = e.user,
            t = W()(Je, n),
            a = 0 === ((null == t ? void 0 : t.super_following_eligibility) || []).length,
            r = a ? Be.Arrow : Be.TrafficLight,
            l = a ? ze : Ue,
            i = a ? Ve : Me,
            c = Ge.map(function (e) {
              return { label: e.label, checked: (0, e.test)(t) }
            }),
            s = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: s },
            o.createElement(Ae, { headline: l, illustration: r, subtext: i }),
            o.createElement(A, { items: c }),
            a && o.createElement(z, null),
            o.createElement(M, { disabled: !a, label: He, path: '/application/one_more_thing' }),
            o.createElement(M, { label: We, path: '/application/one_more_thing' }),
          )
        },
        Ze = t('9RkS'),
        $e = b.a.bbb89925,
        Ye = function (e) {
          var n = e.followersCount,
            t = e.max,
            a = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            c = o.useState(i),
            s = U()(c, 2),
            u = s[0],
            d = s[1],
            p = Math.round(n * r * (u / 100))
          return o.createElement(
            F.a,
            { style: en.container },
            o.createElement(
              T.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                o.createElement(T.b, { weight: 'bold' }, b.a.a7dd00ea),
                o.createElement(
                  T.b,
                  { style: en.earnings, weight: 'heavy' },
                  b.a.c62c1d30({ earnings: '$'.concat(L.a.getTruncatedCount(p)) }),
                ),
                o.createElement(T.b, { color: 'green500', style: en.asteriskLeft }, b.a.e0fb982b),
              ),
            ),
            o.createElement(
              F.a,
              { style: en.slider },
              o.createElement(Ze.a, {
                accessibilityLabel: '',
                max: t,
                min: a,
                onChange: d,
                step: l,
                thumbLabel: $e({ percent: u }),
                value: u,
              }),
            ),
            o.createElement(
              T.b,
              { color: 'green500', size: 'subtext3', style: en.footnote },
              o.createElement(
                b.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                o.createElement(T.b, { style: en.asteriskRight }, b.a.e263c38e),
              ),
            ),
          )
        },
        en = S.a.create(function (e) {
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
        nn = t('97Jx'),
        tn = t.n(nn),
        an = t('6iuV'),
        rn = (t('1t7P'), t('jQ/y'), t('j7Bv')),
        ln = function (e) {
          var n = e.Icon,
            t = e.description,
            a = e.title
          return o.createElement(
            F.a,
            { style: on.container },
            o.createElement(rn.a, { Icon: n, color: 'neutral' }),
            o.createElement(T.b, { size: 'headline2', style: on.title, weight: 'bold' }, a),
            o.createElement(T.b, { color: 'gray700', style: on.description }, t),
          )
        },
        on = S.a.create(function (e) {
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
        cn = t('sUoZ'),
        sn = t('witV'),
        un = t('ACHU'),
        dn = [
          { Icon: cn.a, title: b.a.d31c5997, description: b.a.hda1e780 },
          { Icon: sn.a, title: b.a.d08d0bb2, description: b.a.cbd8b105 },
          { Icon: un.a, title: b.a.becb4930, description: b.a.g743ef96 },
        ],
        pn = function () {
          return o.createElement(
            an.a,
            null,
            dn.map(function (e) {
              return o.createElement(ln, tn()({}, e, { key: e.title }))
            }),
          )
        },
        mn = b.a.a6777c1b,
        fn = b.a.j5dc36d7,
        gn = b.a.c45b2f06,
        bn = b.a.hb6b432e,
        yn = b.a.cd5cae15,
        hn = b.a.f7239f4c,
        vn = b.a.g8cdf707,
        _n = b.a.bff8472e,
        wn = b.a.e533715d,
        En = void 0 !== l ? l : (l = t('xd+q')),
        kn = function (e) {
          var n = e.user,
            t = W()(En, n).legacy.followers_count,
            a = o.createElement(k, { leftControlShouldClose: !0 })
          return o.createElement(
            x,
            { appBar: a },
            o.createElement(
              T.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              mn,
            ),
            o.createElement(T.b, null, fn),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              gn,
            ),
            o.createElement(T.b, { color: 'gray700' }, bn),
            o.createElement(Ie, { type: Be.HandCoins }),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              yn,
            ),
            o.createElement(pn, null),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              hn,
            ),
            o.createElement(Ye, { followersCount: t, max: 10, min: 1, price: 4.99, value: 2 }),
            o.createElement(
              T.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              vn,
            ),
            o.createElement(T.b, { color: 'gray700' }, _n),
            o.createElement(M, { color: 'plum500', label: wn, path: '/application/eligibility' }),
          )
        },
        Sn = b.a.d0fc4890,
        Fn = b.a.c64384b6,
        xn = b.a.c3d89aca,
        Cn = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(Ae, { align: 'center', headline: Sn, illustration: Be.OneFinger, subtext: Fn }),
            o.createElement(M, { label: xn, path: '/application/complete_profile' }),
          )
        },
        On = (t('2G9S'), t('tVqn'), t('1lx9')),
        Kn = t.n(On),
        Rn = t('csss'),
        Ln = function (e) {
          var n = e.description,
            t = e.disabled,
            a = e.history,
            r = e.label,
            l = e.path,
            i = Object(u.g)()
          return o.createElement(Rn.a, {
            description: n,
            disabled: t,
            label: r,
            onPress: function () {
              ;(null != a ? a : i).push(l)
            },
          })
        },
        Pn = (t('uFXj'), b.a.f4f4dd6f),
        Bn = b.a.f448cbcb,
        Tn = function (e) {
          var n = e.title,
            t = e.type,
            a = 'required' === t ? 'red500' : 'optional' === t ? 'gray700' : void 0,
            r = 'required' === t ? Pn : 'optional' === t ? Bn : void 0
          return o.createElement(
            F.a,
            { style: In.container },
            o.createElement(T.b, { size: 'headline1', weight: 'heavy' }, n),
            r && o.createElement(T.b, { color: a, size: 'subtext2', style: In.subtext }, r),
          )
        },
        In = S.a.create(function (e) {
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
        Dn = t('Hsf0'),
        An = t.n(Dn),
        jn = 'super_follows_application_draft',
        zn = 'super_follows_onboarding_draft',
        Vn = function (e) {
          return An()(void 0 !== i ? i : (i = t('PlkH')), e).__id
        },
        Un = function (e, n) {
          var t = Vn(n),
            a = e.get(t)
          return s()(a, 'viewer must be defined'), a
        },
        Mn = function (e, n) {
          return Un(e, n).getLinkedRecord(jn)
        },
        Hn = function (e, n) {
          return Un(e, n).getLinkedRecord(zn)
        },
        Wn = t('HG4m'),
        Qn = t.n(Wn),
        Nn = t('Ud88'),
        qn = t.n(Nn)
      function Gn(e, n) {
        var t = qn()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              Qn()(t, function (t) {
                !(function (e, n) {
                  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = t.content_category,
                    r = void 0 === a ? [] : a,
                    l = t.content_category_other,
                    i = void 0 === l ? null : l,
                    o = t.content_creation_platform,
                    c = void 0 === o ? [] : o,
                    s = t.content_creation_platform_other,
                    u = void 0 === s ? null : s,
                    d = t.ethnicity,
                    p = void 0 === d ? [] : d,
                    m = t.gender,
                    f = void 0 === m ? [] : m,
                    g = t.purpose,
                    b = void 0 === g ? null : g,
                    y = Vn(n),
                    h = Un(e, n)
                  if (!Mn(e, n)) {
                    var v = e.create(''.concat(y, ':').concat(jn), 'SuperFollowsApplicationDraft')
                    v.setValue(r, 'content_category'),
                      v.setValue(i, 'content_category_other'),
                      v.setValue(c, 'content_creation_platform'),
                      v.setValue(u, 'content_creation_platform_other'),
                      v.setValue(b, 'purpose'),
                      v.setValue(p, 'ethnicity'),
                      v.setValue(f, 'gender'),
                      h.setLinkedRecord(v, jn)
                  }
                })(t, e, n)
              })
          },
          [n, t, e],
        )
      }
      function Jn(e, n) {
        var t = qn()()
        o.useEffect(
          function () {
            s()(e, 'viewerRef must be defined'),
              Qn()(t, function (t) {
                !(function (e, n) {
                  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = t.creator_intro,
                    r = void 0 === a ? null : a,
                    l = t.description,
                    i = void 0 === l ? null : l,
                    o = t.selected_price,
                    c = void 0 === o ? null : o,
                    s = Vn(n),
                    u = Un(e, n)
                  if (!Hn(e, n)) {
                    var d = e.create(''.concat(s, ':').concat(zn), 'SuperFollowsOnboardingDraft')
                    d.setValue(r, 'creator_intro'),
                      d.setValue(i, 'description'),
                      d.setValue(c, 'selected_price'),
                      u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                  }
                })(t, e, n)
              })
          },
          [t, n, e],
        )
      }
      function Xn(e, n) {
        var t = qn()()
        return o.useCallback(
          function (a) {
            s()(e, 'viewerRef must be defined'),
              Qn()(t, function (t) {
                !(function (e, n, t, a) {
                  var r = Mn(e, n)
                  s()(r, 'applicationDraft must be defined'), r.setValue(a, t)
                })(t, e, n, a)
              })
          },
          [t, n, e],
        )
      }
      function Zn(e, n) {
        var t = qn()()
        return o.useCallback(
          function (a) {
            s()(e, 'viewerId must be defined'),
              Qn()(t, function (t) {
                !(function (e, n, t, a) {
                  var r = Hn(e, n)
                  s()(r, 'onboardingDraft must be defined'), r.setValue(a, t)
                })(t, e, n, a)
              })
          },
          [t, n, e],
        )
      }
      var $n,
        Yn,
        et,
        nt,
        tt,
        at,
        rt,
        lt,
        it,
        ot,
        ct,
        st,
        ut,
        dt,
        pt = t('jV+4'),
        mt = t('Xrkv'),
        ft = t('p+r5'),
        gt = b.a.e873f0ae,
        bt = b.a.f095a24a,
        yt = b.a.i5f7b6b8,
        ht = b.a.d1f6d336,
        vt = b.a.f7997b16,
        _t = b.a.c144fa52,
        wt = b.a.f1bf337d,
        Et = b.a.da8ea7da,
        kt = b.a.d4062c9a,
        St = b.a.e963d587,
        Ft = b.a.ede0ac3e,
        xt = b.a.ffb6cb88,
        Ct = b.a.b2159e8e,
        Ot = b.a.feacb49d,
        Kt = b.a.je17c987,
        Rt = b.a.d94a9a17,
        Lt = b.a.a8d0108d,
        Pt = b.a.gfc80842,
        Bt = void 0 !== $n ? $n : ($n = t('pLb/')),
        Tt = void 0 !== Yn ? Yn : (Yn = t('3qCL')),
        It = void 0 !== et ? et : (et = t('AyUU')),
        Dt = function (e) {
          var n,
            t,
            a,
            r,
            l,
            i,
            c,
            s = e.user,
            u = e.viewer,
            d = qn()(),
            p = W()(Bt, s),
            m = null == p ? void 0 : p.legacy.screen_name,
            f = W()(Tt, u),
            g = f.super_follows_application_draft,
            b = (null !== (n = null == g ? void 0 : g.content_category) && void 0 !== n ? n : []).concat(
              null !== (t = null == g ? void 0 : g.content_category_other) && void 0 !== t ? t : [],
            ),
            y = (null !== (a = null == g ? void 0 : g.content_creation_platform) && void 0 !== a ? a : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            h = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            v = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            _ = null !== (c = null == g ? void 0 : g.gender) && void 0 !== c ? c : [],
            w = b.length && y.length && h.trim(),
            E = Xn(f, 'purpose'),
            S = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: S },
            o.createElement(Ae, { headline: gt, illustration: Be.Clipboard, subtext: bt }),
            o.createElement(Tn, { title: yt }),
            o.createElement(T.b, null, ht),
            m && o.createElement(pt.a, { screenName: m }),
            o.createElement(Tn, { title: vt, type: 'required' }),
            o.createElement(T.b, { color: 'gray700' }, _t),
            o.createElement(Ln, {
              description: Object(mt.a)(b, !0),
              label: wt,
              path: '/application/submit_categories',
            }),
            o.createElement(Tn, { title: Et, type: 'required' }),
            o.createElement(T.b, { color: 'gray700' }, kt),
            o.createElement(Ln, { description: Object(mt.a)(y, !0), label: St, path: '/application/submit_platforms' }),
            o.createElement(Tn, { title: Ft, type: 'required' }),
            o.createElement(ft.a, {
              helperText: Ct,
              label: xt,
              name: 'plannedUsage',
              onChange: function (e) {
                E(e.currentTarget.value)
              },
              value: h,
            }),
            o.createElement(Tn, { title: Ot, type: 'optional' }),
            o.createElement(T.b, { color: 'gray700' }, Kt),
            o.createElement(Ln, {
              description: Object(mt.a)(v, !0),
              label: Rt,
              path: '/application/submit_ethnicities',
            }),
            o.createElement(Ln, { description: Object(mt.a)(_, !0), label: Lt, path: '/application/submit_genders' }),
            o.createElement(z, null),
            o.createElement(M, {
              disabled: !w,
              label: Pt,
              onPress: function () {
                return new Promise(function (e, n) {
                  Kn()(d, {
                    mutation: It,
                    variables: { category: b, platform: y, purpose: h, ethnicity: v, gender: _ },
                    onCompleted: function (n, t) {
                      return e()
                    },
                    onError: n,
                  })
                })
              },
              path: '/submitted',
            }),
          )
        },
        At = t('fyvP'),
        jt = b.a.f7997b16,
        zt = b.a.c144fa52,
        Vt = [
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
        Ut = b.a.c365dcc5,
        Mt = b.a.bd44a8a8,
        Ht = void 0 !== nt ? nt : (nt = t('JB6R')),
        Wt = function (e) {
          var n,
            t,
            a = e.viewer,
            r = W()(Ht, a),
            l =
              null !==
                (n = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.content_category) &&
              void 0 !== n
                ? n
                : [],
            i = Xn(r, 'content_category'),
            c = o.createElement(k, { title: jt }),
            s = Vt.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(At.a, {
              description: zt,
              label: zt,
              name: 'categories',
              onChange: function (e, n) {
                i([n])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Ln, { helpText: Mt, label: Ut, path: '/application/submit_categories_other' }),
          )
        },
        Qt = b.a.f7997b16,
        Nt = b.a.fc00ab5b,
        qt = b.a.c249167f,
        Gt = b.a.b772cd65,
        Jt = void 0 !== tt ? tt : (tt = t('xhT1')),
        Xt = function (e) {
          var n,
            t,
            a = e.viewer,
            r = W()(Jt, a),
            l =
              null !==
                (n =
                  null === (t = r.super_follows_application_draft) || void 0 === t
                    ? void 0
                    : t.content_category_other) && void 0 !== n
                ? n
                : '',
            i = Xn(r, 'content_category_other'),
            c = o.createElement(k, { title: Qt })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ft.a, {
              helperText: qt,
              label: Nt,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(v.a, null, Gt),
          )
        },
        Zt = b.a.d94a9a17,
        $t = b.a.a35394b3,
        Yt = [
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
        ea = void 0 !== at ? at : (at = t('LiCP')),
        na = function (e) {
          var n,
            t,
            a = e.viewer,
            r = W()(ea, a),
            l =
              null !== (n = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.ethnicity) &&
              void 0 !== n
                ? n
                : [],
            i = Xn(r, 'ethnicity'),
            c = o.createElement(k, { title: Zt }),
            s = Yt.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(At.a, {
              description: $t,
              label: $t,
              name: 'ethnicities',
              onChange: function (e, n) {
                i([n])
              },
              options: s,
              value: l[0],
            }),
          )
        },
        ta = b.a.a8d0108d,
        aa = b.a.a35394b3,
        ra = [
          b.a.de32365f,
          b.a.b6ab31bd,
          b.a.ffc23188,
          b.a.h1cc7091,
          b.a.hca27829,
          b.a.b3af7344,
          b.a.he3f1435,
          b.a.c3c16abb,
        ],
        la = void 0 !== rt ? rt : (rt = t('K6KJ')),
        ia = function (e) {
          var n,
            t,
            a = e.viewer,
            r = W()(la, a),
            l =
              null !== (n = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.gender) &&
              void 0 !== n
                ? n
                : [],
            i = Xn(r, 'gender'),
            c = o.createElement(k, { title: ta }),
            s = ra.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(At.a, {
              description: aa,
              label: aa,
              name: 'genders',
              onChange: function (e, n) {
                i([n])
              },
              options: s,
              value: l[0],
            }),
          )
        },
        oa = b.a.da8ea7da,
        ca = b.a.d4062c9a,
        sa = [b.a.a3021317, b.a.eb4a600d, b.a.d4d74bb3, b.a.fc738909, b.a.d8552c1a, b.a.ca07aa46],
        ua = b.a.c365dcc5,
        da = b.a.bd44a8a8,
        pa = void 0 !== lt ? lt : (lt = t('xnrs')),
        ma = function (e) {
          var n,
            t,
            a = e.viewer,
            r = W()(pa, a),
            l =
              null !==
                (n =
                  null === (t = r.super_follows_application_draft) || void 0 === t
                    ? void 0
                    : t.content_creation_platform) && void 0 !== n
                ? n
                : [],
            i = Xn(r, 'content_creation_platform'),
            c = o.createElement(k, { title: oa }),
            s = sa.map(function (e) {
              return { label: e, value: e }
            })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(At.a, {
              description: ca,
              label: ca,
              name: 'platforms',
              onChange: function (e, n) {
                i([n])
              },
              options: s,
              value: l[0],
            }),
            o.createElement(Ln, { helpText: da, label: ua, path: '/application/submit_platforms_other' }),
          )
        },
        fa = b.a.da8ea7da,
        ga = b.a.d7081f91,
        ba = b.a.j349548f,
        ya = b.a.b772cd65,
        ha = void 0 !== it ? it : (it = t('+OUG')),
        va = function (e) {
          var n,
            t,
            a = e.viewer,
            r = W()(ha, a),
            l =
              null !==
                (n =
                  null === (t = r.super_follows_application_draft) || void 0 === t
                    ? void 0
                    : t.content_creation_platform_other) && void 0 !== n
                ? n
                : '',
            i = Xn(r, 'content_creation_platform_other'),
            c = o.createElement(k, { title: fa })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(ft.a, {
              helperText: ba,
              label: ga,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            o.createElement(v.a, null, ya),
          )
        },
        _a = void 0 !== ot ? ot : (ot = t('o/nB')),
        wa = void 0 !== ct ? ct : (ct = t('lZLw')),
        Ea = function (e) {
          var n = e.user,
            t = e.viewer,
            a = W()(_a, n),
            r = W()(wa, t)
          return (
            Gn(r),
            o.createElement(
              u.e,
              null,
              o.createElement(u.c, { exact: !0, path: '/application/eligibility' }, o.createElement(Xe, { user: a })),
              o.createElement(u.c, { exact: !0, path: '/application/one_more_thing' }, o.createElement(Cn, null)),
              o.createElement(u.c, { exact: !0, path: '/application/complete_profile' }, o.createElement(R, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit' },
                o.createElement(Dt, { user: a, viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories' },
                o.createElement(Wt, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_categories_other' },
                o.createElement(Xt, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms' },
                o.createElement(ma, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_platforms_other' },
                o.createElement(va, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_ethnicities' },
                o.createElement(na, { viewer: r }),
              ),
              o.createElement(
                u.c,
                { exact: !0, path: '/application/submit_genders' },
                o.createElement(ia, { viewer: r }),
              ),
              o.createElement(u.c, { path: '/application' }, o.createElement(kn, { user: a })),
            )
          )
        },
        ka = (t('5BYb'), b.a.b422cb62),
        Sa = b.a.f08705e0,
        Fa = b.a.fc5bfd95,
        xa = b.a.e2cd700f,
        Ca = b.a.fbfd7397,
        Oa = b.a.c3d89aca,
        Ka = [
          {
            label: b.a.d8637c96,
            test: function (e) {
              var n,
                t = null !== (n = e.viewer.super_follows_onboarding_draft) && void 0 !== n ? n : {},
                a = t.creator_intro,
                r = t.description
              return !!a && !!r
            },
          },
          {
            label: b.a.b92892dc,
            test: function (e) {
              var n
              return !(null === (n = e.viewer.super_follows_onboarding_draft) || void 0 === n || !n.selected_price)
            },
          },
          {
            label: b.a.b123a502,
            test: function (e) {
              return 'Completed' === e.user.stripe_account_status
            },
          },
        ],
        Ra = void 0 !== st ? st : (st = t('wQp3')),
        La = void 0 !== ut ? ut : (ut = t('tfBr')),
        Pa = S.a.create(function (e) {
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
        Ba = function (e) {
          var n = e.user,
            t = e.viewer,
            a = W()(Ra, n),
            r = W()(La, t),
            l = Ka.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: a, viewer: r }) }
            }),
            i = l.some(function (e) {
              return e.checked
            }),
            c = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Ae, { headline: i ? xa : ka, illustration: i ? Be.Puzzle : Be.Cat, subtext: i ? Ca : Sa }),
            o.createElement(A, { items: l }),
            o.createElement(M, {
              label: i ? Oa : Fa,
              path: '/onboarding/perks_intro',
              size: 'xLarge',
              style: Pa.button,
              type: 'brandFilled',
            }),
          )
        },
        Ta = t('efqG'),
        Ia = t('5emT'),
        Da = b.a.ab793af9,
        Aa = b.a.fb278c81,
        ja = b.a.e6b60e94,
        za = b.a.j24c37b2,
        Va = S.a.create(function (e) {
          return {
            root: { margin: e.spaces.space32 },
            triggerLabel: { marginRight: e.spaces.space8 },
            headlineText: { marginVertical: e.spaces.space16 },
            triggerIcon: { color: e.colors.gray700 },
            paragraphText: { marginBottom: e.spaces.space20 },
            triggerContentWrapper: { alignSelf: 'center', flexDirection: 'row' },
          }
        }),
        Ua = function () {
          return o.createElement(
            Ta.a,
            {
              renderContent: function (e) {
                return o.createElement(
                  F.a,
                  { style: Va.root },
                  o.createElement(rn.a, { Icon: Ia.a, color: 'neutral', size: 'xxxLarge' }),
                  o.createElement(T.b, { size: 'title3', style: Va.headlineText, weight: 'heavy' }, Aa),
                  o.createElement(T.b, { color: 'gray700', style: Va.paragraphText }, ja),
                  o.createElement(v.a, { onClick: e, size: 'xLarge', type: 'primaryFilled' }, za),
                )
              },
            },
            o.createElement(
              F.a,
              { accessibilityRole: 'button', style: Va.triggerContentWrapper },
              o.createElement(T.b, { color: 'gray700', style: Va.triggerLabel }, Da),
              o.createElement(P.a, { style: Va.triggerIcon }),
            ),
          )
        },
        Ma = b.a.cd5cae15,
        Ha = b.a.b83662ac,
        Wa = b.a.cda6bb6d,
        Qa = b.a.a15b98ec,
        Na = b.a.c1df579e,
        qa = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null), subtitle: Ha, title: Ma })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(Ae, { headline: Wa, subtext: Qa }),
            o.createElement(Ua, null),
            o.createElement(M, { label: Na, path: '/onboarding/perks_confirm' }),
          )
        },
        Ga = b.a.d94d5707,
        Ja = b.a.iba08a94,
        Xa = b.a.aa6db82c,
        Za = b.a.c1df579e,
        $a = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null), title: Ga })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(Ae, { headline: Ja, subtext: Xa }),
            o.createElement(Ua, null),
            o.createElement(M, { label: Za, path: '/onboarding/pricing' }),
          )
        },
        Ya = b.a.cd5cae15,
        er = b.a.d80af370,
        nr = b.a.gf32cca1,
        tr = b.a.j8ba99b3,
        ar = b.a.j679dcda,
        rr = b.a.a329ce87,
        lr = b.a.be76dc33,
        ir = b.a.abd845fd,
        or = b.a.c1df579e,
        cr = void 0 !== dt ? dt : (dt = t('tJ4s')),
        sr = function (e) {
          var n,
            t,
            a = e.viewer,
            r = W()(cr, a),
            l =
              null !== (n = null === (t = r.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.description) &&
              void 0 !== n
                ? n
                : '',
            i = Zn(r, 'description'),
            c = o.createElement(k, { rightControl: o.createElement(B, null), subtitle: er, title: Ya })
          return o.createElement(
            x,
            { appBar: c },
            o.createElement(Ae, { headline: nr, subtext: tr }),
            o.createElement(M, { label: ar, path: '/onboarding/perks_description_examples', type: 'primaryText' }),
            o.createElement(Ua, null),
            o.createElement(ft.a, {
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
        yr = (t('ho0z'), t('cHvH'))
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
          var n = e.children
          return o.createElement(yr.a, null, function (e) {
            var t = e.windowWidth > S.a.theme.breakpoints.small
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
              o.createElement(F.a, { style: [_r.content, t && _r.contentWideMargins] }, n),
            )
          })
        },
        Er = t('FEMQ'),
        kr = t('ID86'),
        Sr = b.a.cd5cae15,
        Fr = b.a.ef08a890,
        xr = b.a.j3253319,
        Cr = b.a.h1e80993,
        Or = b.a.j679dcda,
        Kr = b.a.b16680ff,
        Rr = b.a.abd845fd,
        Lr = b.a.c1df579e,
        Pr = void 0 !== hr ? hr : (hr = t('02qo')),
        Br = void 0 !== vr ? vr : (vr = t('TXsE')),
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
          var n,
            t,
            a = e.user,
            r = e.viewer,
            l = o.useRef(null),
            i = W()(Pr, a),
            c = W()(Br, r),
            u = i.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m =
              null !==
                (n = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            f = Zn(c, 'creator_intro'),
            g = o.createElement(k, { subtitle: Fr, title: Sr })
          s()('string' == typeof d, 'name must be defined'), s()('string' == typeof p, 'image must be defined')
          var b = !!m
          return o.createElement(
            x,
            { appBar: g },
            o.createElement(Ae, { headline: xr, subtext: Cr }),
            o.createElement(M, {
              label: Or,
              path: '/onboarding/perks_intro_examples',
              style: Tr.examplesLink,
              type: 'primaryText',
            }),
            o.createElement(Ua, null),
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
        Dr = t('JWc1'),
        Ar = (t('+KXO'), t('LW0h'), t('daRM'), t('jwue'), t('+oxZ'), t('FtHn'), t('KEM+')),
        jr = t.n(Ar),
        zr = t('Lsrn'),
        Vr = t('k/Ka')
      function Ur(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function Mr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? Ur(Object(t), !0).forEach(function (n) {
                jr()(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ur(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
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
        Zr,
        $r = Hr,
        Yr = t('lUZE'),
        el = b.a.ebfb897c,
        nl = b.a.dc4feb19,
        tl = b.a.a0bb2076,
        al = b.a.ace46d40,
        rl = b.a.h2c4511f,
        ll = b.a.hbe4f99e,
        il = S.a.create(function (e) {
          return {
            exampleIntros: { marginLeft: e.spaces.space36 },
            headlineWrapper: { flexDirection: 'row', marginBottom: e.spaces.space12 },
            headline: { marginLeft: e.spaces.space8 },
            subtext: { marginLeft: e.spaces.space36 },
          }
        }),
        ol = function () {
          var e = o.createElement(k, { title: el })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(
              F.a,
              { style: il.headlineWrapper },
              o.createElement(rn.a, { Icon: $r, color: 'neutral', size: 'large' }),
              o.createElement(
                T.b,
                {
                  accessibilityLevel: 2,
                  accessibilityRole: 'heading',
                  size: 'title4',
                  style: il.headline,
                  weight: 'heavy',
                },
                nl,
              ),
            ),
            o.createElement(T.b, { color: 'gray700', style: il.subtext }, tl),
            o.createElement(
              F.a,
              { style: il.exampleIntros },
              o.createElement(Dr.a, { Icon: Yr.a, creatorIntro: al }),
              o.createElement(Dr.a, { Icon: Yr.a, creatorIntro: rl }),
              o.createElement(Dr.a, { Icon: Yr.a, creatorIntro: ll }),
            ),
          )
        },
        cl = t('m3Bd'),
        sl = t.n(cl),
        ul = (t('7xRU'), t('hznd')),
        dl = b.a.ea8a3d2d,
        pl = b.a.ic9124bf,
        ml = b.a.g5923869,
        fl = {
          offer1: [b.a.f025ab39, b.a.c5602dfd],
          offer2: [b.a.ib075804, b.a.j8a72f06],
          offer3: [b.a.c246656e, b.a.a92ab16c],
        },
        gl = b.a.c1df579e,
        bl = void 0 !== Wr ? Wr : (Wr = t('5jO1')),
        yl = void 0 !== Qr ? Qr : (Qr = t('mKqc')),
        hl = void 0 !== Nr ? Nr : (Nr = t('p785')),
        vl = function (e) {
          var n,
            t,
            a = e.priceOfferings,
            r = e.viewer,
            l = qn()(),
            i = W()(bl, a),
            c = (i.$refType, sl()(i, ['$refType'])),
            s = W()(yl, r),
            u = s.super_follows_onboarding_draft,
            d = null !== (n = null == u ? void 0 : u.creator_intro) && void 0 !== n ? n : '',
            p = null !== (t = null == u ? void 0 : u.description) && void 0 !== t ? t : '',
            m = null == u ? void 0 : u.selected_price,
            f = Zn(s, 'selected_price'),
            g = o.createElement(k, { rightControl: o.createElement(B, null), title: dl }),
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
              return { label: ml({ price: c[e] }), value: e, helpText: fl[e].join(' ') }
            })
          return o.createElement(
            x,
            { appBar: g },
            o.createElement(Ae, { headline: pl, subtext: y }),
            o.createElement(ul.a, {
              label: pl,
              name: 'selectedPrice',
              onChange: function (e, n) {
                f(n)
              },
              options: h,
              value: m,
            }),
            o.createElement(M, {
              disabled: !m,
              label: gl,
              onPress: function () {
                return new Promise(function (e, n) {
                  if (!m) return n(new Error('No price selected'))
                  Kn()(l, {
                    mutation: hl,
                    variables: {
                      creator_intro: d,
                      benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: p }],
                      selected_price: m,
                    },
                    onCompleted: function (n, t) {
                      return e()
                    },
                    onError: n,
                  })
                })
              },
              path: '/onboarding/stripe_setup',
            }),
          )
        },
        _l = b.a.e20f6661,
        wl = b.a.a9ee1ecc,
        El = b.a.j24c37b2,
        kl = function () {
          var e = m(),
            n = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: n },
            o.createElement(Ae, { headline: _l, illustration: Be.Thumbsup, subtext: wl }),
            o.createElement(M, { history: e, label: El, path: '/settings/monetization' }),
          )
        },
        Sl = b.a.e2cd700f,
        Fl = b.a.d6bfb60c,
        xl = b.a.b9cbb370,
        Cl = function () {
          var e = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(Ae, { headline: Sl, illustration: Be.Puzzle, subtext: Fl }),
            o.createElement(M, { label: xl, path: '/onboarding/stripe_setup' }),
          )
        },
        Ol = t('8jkQ'),
        Kl = t('9SqB'),
        Rl = t.n(Kl),
        Ll = b.a.ja884230,
        Pl = b.a.af1b808d,
        Bl = b.a.fe339750,
        Tl = b.a.j912510a,
        Il = void 0 !== qr ? qr : (qr = t('xHLM')),
        Dl = function () {
          var e = Rl()(Il),
            n = U()(e, 2),
            t = n[0],
            a = n[1],
            r = function () {
              t({
                variables: {},
                onCompleted: function (e, n) {
                  var t = e.stripe_account_create_onboarding_url
                  t && Ol.b.navigateTo(t)
                },
              })
            },
            l = o.createElement(k, { rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: l },
            o.createElement(Ae, { headline: Ll, illustration: Be.CoinStairs, subtext: Pl }),
            o.createElement(v.a, { disabled: a, onPress: r, type: 'primaryFilled' }, Bl),
            o.createElement(v.a, { disabled: a, onPress: r, type: 'primaryOutlined' }, Tl),
          )
        },
        Al = void 0 !== Gr ? Gr : (Gr = t('UNVS')),
        jl = void 0 !== Jr ? Jr : (Jr = t('6byF')),
        zl = void 0 !== Xr ? Xr : (Xr = t('dNhZ')),
        Vl = function (e) {
          var n,
            t,
            a = e.priceOfferings,
            r = e.user,
            l = e.viewer,
            i = W()(Al, a),
            c = W()(jl, r),
            s = W()(zl, l),
            d = null !== (n = c.super_follow_creator_benefits) && void 0 !== n ? n : {},
            p = d.benefits_data,
            m = null != p ? p : [{}]
          return (
            Jn(s, {
              creator_intro: d.creator_intro,
              description: U()(m, 1)[0].description,
              selected_price: (null !== (t = c.super_follow_creator_price_metadata) && void 0 !== t ? t : {})
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
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_intro_examples' }, o.createElement(ol, null)),
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
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_badges' }, o.createElement(qa, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/perks_confirm' }, o.createElement($a, null)),
              o.createElement(
                u.c,
                { exact: !0, path: '/onboarding/pricing' },
                o.createElement(vl, { priceOfferings: i, viewer: s }),
              ),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_setup' }, o.createElement(Dl, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_incomplete' }, o.createElement(Cl, null)),
              o.createElement(u.c, { exact: !0, path: '/onboarding/stripe_completed' }, o.createElement(kl, null)),
              o.createElement(u.c, { path: '/onboarding' }, o.createElement(Ba, { user: c, viewer: s })),
            )
          )
        },
        Ul = b.a.aa7e35ed,
        Ml = b.a.f67e69bf,
        Hl = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(Ae, { headline: Ul, illustration: Be.Uturn, subtext: Ml }),
          )
        },
        Wl = b.a.d3d6c52c,
        Ql = b.a.c53e9129,
        Nl = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(Ae, { headline: Wl, illustration: Be.PaperAirplane, subtext: Ql }),
          )
        },
        ql = b.a.j274e6aa,
        Gl = b.a.d7f65127,
        Jl = function () {
          var e = o.createElement(k, { leftControlShouldClose: !0, rightControl: o.createElement(B, null) })
          return o.createElement(
            x,
            { appBar: e },
            o.createElement(Ae, { headline: ql, illustration: Be.Bench, subtext: Gl }),
          )
        },
        Xl = t('n0Rl'),
        Zl = t('q9Zt'),
        $l = b.a.hae1c933,
        Yl = void 0 !== Zr ? Zr : (Zr = t('G8I5')),
        ei = Object(Xl.b)(Yl, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        ni = S.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      n.default = function () {
        return o.createElement(ei, {
          render: function (e) {
            var n,
              t,
              a = e.data,
              r = e.error,
              l = e.fetchStatus,
              i = e.retry,
              c = null == a ? void 0 : a.super_follows_price_offerings,
              s =
                null == a || null === (n = a.viewer) || void 0 === n || null === (t = n.user_results) || void 0 === t
                  ? void 0
                  : t.result,
              d = null == a ? void 0 : a.viewer,
              m = (function (e) {
                var n = e.stripeAccountStatus
                switch (e.superFollowsApplicationStatus) {
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
                            o.createElement(u.c, { path: '/application' }, o.createElement(Ea, { user: s, viewer: d })),
                            o.createElement(u.c, { exact: !0, path: '/submitted' }, o.createElement(Nl, null)),
                            o.createElement(u.c, { exact: !0, path: '/waitlisted' }, o.createElement(Jl, null)),
                            o.createElement(u.c, { exact: !0, path: '/rejected' }, o.createElement(Hl, null)),
                            o.createElement(
                              u.c,
                              { path: '/onboarding' },
                              o.createElement(Vl, { priceOfferings: c, user: s, viewer: d }),
                            ),
                          ),
                        ),
                      ),
                    )
              },
              renderFailure: function () {
                return o.createElement(Zl.a, { onRetry: i, style: ni.error, title: $l })
              },
              retryable: !1,
            })
          },
          variables: {},
        })
      }
    },
    'o/nB': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    p785: function (e, n, t) {
      'use strict'
      t.r(n)
      var a,
        r,
        l = {
          fragment: {
            argumentDefinitions: (a = [
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
            argumentDefinitions: a,
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
      ;(l.hash = '6760a9c38cb958dabf2178d9c4d7df42'), (n.default = l)
    },
    'pLb/': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    tJ4s: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    tfBr: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    wQp3: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingGetStartedScreen_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'stripe_account_status', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '89d53e7f51d77e01d95fe5e756509ce9',
      }
      n.default = a
    },
    xHLM: function (e, n, t) {
      'use strict'
      t.r(n)
      var a,
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: (a = [
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
            selections: a,
          },
          params: {
            id: 'nRB8N1tre2yDNBjO6rLziw',
            metadata: {},
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(r.hash = '8e42f33fe72435124b83c69d58590c08'), (n.default = r)
    },
    'xd+q': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    xhT1: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
    xnrs: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = {
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
      n.default = a
    },
  },
])
//# sourceMappingURL=WIPED
