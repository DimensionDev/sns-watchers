;(window.webpackJsonp = window.webpackJsonp || []).push([
  [113],
  {
    '+wNI': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlight_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'LocationSpotlight_user' },
          { args: null, kind: 'FragmentSpread', name: 'NewsletterSpotlight_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7e2f09ace0ad4340858c70599e47c369',
      }
      t.default = n
    },
    '0zj1': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NewsletterSummary_revueModule',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'RevueModuleData',
            kind: 'LinkedField',
            name: 'data',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'RevueUserAnalytics',
                kind: 'LinkedField',
                name: 'account_analytics',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'subscriber_count', storageKey: null },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'RevueAccountProfile',
                kind: 'LinkedField',
                name: 'revue_account',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'RevueNewsletterInfo',
                    kind: 'LinkedField',
                    name: 'newsletter_info',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'RevueProfileInfo',
                    kind: 'LinkedField',
                    name: 'profile_info',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'RevueImage',
                        kind: 'LinkedField',
                        name: 'profile_image',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'RevueImageInfo',
                            kind: 'LinkedField',
                            name: 'original_image',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: 'height', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'width', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'RevueModule',
        abstractKey: null,
        hash: '98aaee62d729fcd064941e40e06721c3',
      }
      t.default = n
    },
    M8le: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlights_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'UserBusinessModulesResponse',
            kind: 'LinkedField',
            name: 'profilemodules',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'UserBusinessModuleResponseV1',
                kind: 'LinkedField',
                name: 'v1',
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'profile_module',
                    plural: !1,
                    selections: [{ args: null, kind: 'FragmentSpread', name: 'ProfileSpotlight_profileSpotlight' }],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'ProfileSpotlight_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '22374cd757dd88b876f7fae791fed3af',
      }
      t.default = n
    },
    NAj4: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'LocationSpotlightDescription_aboutModule',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'AboutModuleData',
              kind: 'LinkedField',
              name: 'data',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'BusinessAddressResponse',
                  kind: 'LinkedField',
                  name: 'address',
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: 'ScalarField', name: 'formatted_address', storageKey: null },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'ApiShortenedUrl',
                  kind: 'LinkedField',
                  name: 'website',
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: 'ScalarField', name: 'display', storageKey: null },
                    { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'BusinessOpenTimesResponse',
                  kind: 'LinkedField',
                  name: 'open_times',
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: 'ScalarField', name: 'open_times_type', storageKey: null },
                    { alias: null, args: null, kind: 'ScalarField', name: 'is_open', storageKey: null },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'OpenCloseTimeNext',
                      kind: 'LinkedField',
                      name: 'opens',
                      plural: !1,
                      selections: (n = [
                        { alias: null, args: null, kind: 'ScalarField', name: 'day', storageKey: null },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'HourMinute',
                          kind: 'LinkedField',
                          name: 'time',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'hour', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'minute', storageKey: null },
                          ],
                          storageKey: null,
                        },
                      ]),
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'OpenCloseTimeNext',
                      kind: 'LinkedField',
                      name: 'closes',
                      plural: !1,
                      selections: n,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'AboutModule',
          abstractKey: null,
        }
      ;(r.hash = 'ac8d69b626cd4dcc79a77d7f088495c7'), (t.default = r)
    },
    S97D: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r,
        l,
        i,
        o,
        s = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'screen_name' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ProfileSpotlightsQuery',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Literal', name: 's', value: 50 },
                  { kind: 'Variable', name: 'screen_name', variableName: 'screen_name' },
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
                      {
                        kind: 'InlineFragment',
                        selections: [{ args: null, kind: 'FragmentSpread', name: 'ProfileSpotlights_user' }],
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
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: n,
            kind: 'Operation',
            name: 'ProfileSpotlightsQuery',
            selections: [
              {
                alias: null,
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
                      (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'withheld_scope',
                                storageKey: null,
                              },
                              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
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
                          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserBusinessModulesResponse',
                            kind: 'LinkedField',
                            name: 'profilemodules',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UserBusinessModuleResponseV1',
                                kind: 'LinkedField',
                                name: 'v1',
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'profile_module',
                                    plural: !1,
                                    selections: [
                                      l,
                                      { kind: 'TypeDiscriminator', abstractKey: '__isProfileModule' },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'AboutModuleData',
                                            kind: 'LinkedField',
                                            name: 'data',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'BusinessAddressResponse',
                                                kind: 'LinkedField',
                                                name: 'address',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'formatted_address',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ApiShortenedUrl',
                                                kind: 'LinkedField',
                                                name: 'website',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'display',
                                                    storageKey: null,
                                                  },
                                                  (i = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'url',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'BusinessOpenTimesResponse',
                                                kind: 'LinkedField',
                                                name: 'open_times',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'open_times_type',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'is_open',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'OpenCloseTimeNext',
                                                    kind: 'LinkedField',
                                                    name: 'opens',
                                                    plural: !1,
                                                    selections: (o = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'day',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: 'HourMinute',
                                                        kind: 'LinkedField',
                                                        name: 'time',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'hour',
                                                            storageKey: null,
                                                          },
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'minute',
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'OpenCloseTimeNext',
                                                    kind: 'LinkedField',
                                                    name: 'closes',
                                                    plural: !1,
                                                    selections: o,
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'AboutModule',
                                        abstractKey: null,
                                      },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'RevueModuleData',
                                            kind: 'LinkedField',
                                            name: 'data',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'RevueUserAnalytics',
                                                kind: 'LinkedField',
                                                name: 'account_analytics',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'subscriber_count',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'RevueAccountProfile',
                                                kind: 'LinkedField',
                                                name: 'revue_account',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'RevueNewsletterInfo',
                                                    kind: 'LinkedField',
                                                    name: 'newsletter_info',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'description',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'title',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'RevueProfileInfo',
                                                    kind: 'LinkedField',
                                                    name: 'profile_info',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: 'RevueImage',
                                                        kind: 'LinkedField',
                                                        name: 'profile_image',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: 'RevueImageInfo',
                                                            kind: 'LinkedField',
                                                            name: 'original_image',
                                                            plural: !1,
                                                            selections: [
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'height',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'width',
                                                                storageKey: null,
                                                              },
                                                              i,
                                                            ],
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'profile_url',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'RevueAccountSettings',
                                                    kind: 'LinkedField',
                                                    name: 'account_settings',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'twitter_profile_subscriptions_enabled',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'RevueModuleConfig',
                                            kind: 'LinkedField',
                                            name: 'config',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'revue_account_id',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'RevueModuleContext',
                                            kind: 'LinkedField',
                                            name: 'context',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'user_subscription_status',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'RevueModule',
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
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
          },
          params: {
            id: '_dFqblUCyLCdU_aP5s6oJA',
            metadata: {},
            name: 'ProfileSpotlightsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(s.hash = '63e29ef0bb520445ada0b0d42a1ef0b2'), (t.default = s)
    },
    'Xcj+': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlight_profileSpotlight',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
          {
            kind: 'InlineFragment',
            selections: [{ args: null, kind: 'FragmentSpread', name: 'LocationSpotlight_aboutModule' }],
            type: 'AboutModule',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [{ args: null, kind: 'FragmentSpread', name: 'NewsletterSpotlight_revueModule' }],
            type: 'RevueModule',
            abstractKey: null,
          },
        ],
        type: 'ProfileModule',
        abstractKey: '__isProfileModule',
        hash: 'ffac94bbd7ca630091456fe09086886b',
      }
      t.default = n
    },
    bu6k: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NewsletterSpotlight_revueModule',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'RevueModuleConfig',
            kind: 'LinkedField',
            name: 'config',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'revue_account_id', storageKey: null }],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'RevueModuleContext',
            kind: 'LinkedField',
            name: 'context',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'user_subscription_status', storageKey: null },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'RevueModuleData',
            kind: 'LinkedField',
            name: 'data',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'RevueAccountProfile',
                kind: 'LinkedField',
                name: 'revue_account',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'RevueProfileInfo',
                    kind: 'LinkedField',
                    name: 'profile_info',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'profile_url', storageKey: null },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'RevueAccountSettings',
                    kind: 'LinkedField',
                    name: 'account_settings',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'twitter_profile_subscriptions_enabled',
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'NewsletterSummary_revueModule' },
        ],
        type: 'RevueModule',
        abstractKey: null,
        hash: '56cd2f5b7f96b0662c25700e8a271ce6',
      }
      t.default = n
    },
    cFl3: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserTwitterArticlesScreen', function () {
          return f
        })
      var n = a('ERkP'),
        r = a.n(n),
        l = a('v6aA'),
        i = a('v//M'),
        o = a('3XMw'),
        s = a.n(o),
        c = a('5FtR'),
        u = a('rHpw'),
        d = a('c6pJ'),
        m = a('MWbm'),
        p = s.a.i9028824,
        f = function (e) {
          var t = r.a.useContext(l.a).featureSwitches,
            a = e.hasTwitterArticles,
            n = e.screenName,
            o = e.twitterArticlesFetchStatus,
            s = e.userId,
            u = t.isTrue('responsive_web_twitter_article_view_enabled'),
            f = r.a.createElement(c.a, { to: '/'.concat(n) })
          return u
            ? r.a.createElement(i.a, {
                accessibilityLabel: p,
                fetchStatus: o,
                render: function () {
                  return a
                    ? r.a.createElement(
                        m.a,
                        { style: g.container },
                        r.a.createElement(d.a, { linkToEditScreen: !1, publishedOnly: !0, userId: s }),
                      )
                    : f
                },
              })
            : f
        },
        g = u.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        })
      t.default = f
    },
    hRT2: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NewsletterSpotlight_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '77582fe18d57576dc8cb577dcb920757',
      }
      t.default = n
    },
    hyc7: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'LocationSpotlight_aboutModule',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AboutModuleData',
            kind: 'LinkedField',
            name: 'data',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'BusinessAddressResponse',
                kind: 'LinkedField',
                name: 'address',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'formatted_address', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'LocationSpotlightDescription_aboutModule' },
        ],
        type: 'AboutModule',
        abstractKey: null,
        hash: '3ff9fd0a1b8f8b76e820d6c38e4a9730',
      }
      t.default = n
    },
    'll/Q': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserProfileScreenContainer', function () {
          return _l
        })
      var n = a('97Jx'),
        r = a.n(n),
        l = a('ERkP'),
        i = a.n(l),
        o = (a('KqXw'), a('WNMA'), a('jQ3i'), a('x4t0'), a('P1r1')),
        s = a('hqKg'),
        c = a('kGix'),
        u = a('zh9S'),
        d = a('pIB9'),
        m = a('0KEI'),
        p = a('oEGd'),
        f = a('RqPI'),
        g = a('G6rE'),
        h = function (e, t) {
          var a = t.location,
            n = t.match
          return n && n.params && n.params.screenName
            ? n.params.screenName
            : a && a.query && a.query.screen_name && 'string' == typeof a.query.screen_name
            ? a.query.screen_name
            : ''
        },
        b = function (e, t) {
          return g.e.selectByScreenName(e, h(0, t))
        },
        y = Object(g.g)([g.a]),
        _ = Object(s.createSelector)(
          o.k,
          function (e, t) {
            return y(e, h(0, t))
          },
          function (e, t) {
            var a = g.e.selectIdByScreenName(e, h(0, t))
            return (a ? d.a.selectTwitterArticles(e, a, !0) : []).length > 0
          },
          f.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return g.e.selectIsUserNotFound(e, h(0, t))
          },
          function (e, t) {
            var a = b(e, t)
            return !!a && g.e.selectIsLoading(e, a.id_str)
          },
          function (e, t) {
            return g.e.selectIsUserSuspended(e, h(0, t))
          },
          function (e, t) {
            return g.e.selectUserSuspendMessage(e, h(0, t))
          },
          function (e, t) {
            return g.e.selectIsUserWithheld(e, h(0, t))
          },
          function (e, t) {
            var a = t.location,
              n = ((a && a.state) || {}).promotedTweetState,
              r = b(e, t)
            return n || (r && r.promoted_content)
          },
          h,
          f.y,
          function (e, t) {
            var a = g.e.selectIdByScreenName(e, h(0, t))
            return a ? d.a.selectFetchStatus(e, a, !0) : c.a.NONE
          },
          b,
          function (e, t) {
            var a = b(e, t)
            return a && a.profile_interstitial_type ? a.profile_interstitial_type : null
          },
          f.p,
          function (e, t, a, n, r, l, i, o, s, c, u, d, m, p, f, g, h) {
            return {
              displaySensitiveMedia: e,
              fetchStatus: t,
              hasTwitterArticles: a,
              isActiveCreator: n,
              isIntentRoute: r,
              isNotFound: l,
              isRefreshing: i,
              isSuspended: o,
              suspendMessage: s,
              isWithheld: c,
              promotedContent: u,
              screenName: d,
              superFollowersCount: m,
              twitterArticlesFetchStatus: p,
              user: f,
              userProfileInterstitialType: g,
              userLanguage: h,
            }
          },
        ),
        v = {
          createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_SCREEN'),
          fetchOneUser: g.e.fetchOne,
          fetchOneByScreenNameWithExtraFieldsIfNeeded: g.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
            g.a,
            g.b,
            g.c,
            g.d,
          ]),
          fetchSettingsIfNeeded: o.f,
          fetchTwitterArticlesIfNeeded: d.a.fetchIfNeeded,
          scribeAction: u.c,
        },
        w = Object(p.f)(_, v),
        k = a('txMZ'),
        E = a('yiKp'),
        S = a.n(E),
        F = a('VrFO'),
        C = a.n(F),
        T = a('Y9Ll'),
        I = a.n(T),
        L = a('1Pcy'),
        P = a.n(L),
        x = a('5Yy7'),
        M = a.n(x),
        R = a('2VqO'),
        N = a.n(R),
        B = a('KEM+'),
        A = a.n(B),
        O =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('5BYb'),
          a('Blm6'),
          a('ho0z'),
          a('1t7P'),
          a('jQ/y'),
          a('vrRf'),
          a('2G9S'),
          a('z84I'),
          a('aeN7')),
        K = a('mC9n'),
        U = a('s4rk'),
        D = a('zI2C'),
        H = a('6ZtA'),
        z = a('es0u'),
        j = (a('hBvt'), a('v6aA')),
        W = a('I/ms'),
        V = a('rxPX'),
        q = a('M0jS'),
        G = function (e, t) {
          return Object(q.c)(e, t.user.id_str)
        },
        J = function (e, t) {
          var a = q.b.select(e, t.user.id_str)
          return null != a && a.refresh_delay_secs ? 1e3 * a.refresh_delay_secs : 1e3 * q.a
        },
        $ = Object(V.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('SELECT_SPACE'),
              fetchUsersPresence: q.b.fetchManyIfNeeded,
            }
          })
          .propsFromState(function () {
            return { userPresencePollingInterval: J, userSpace: G }
          })
          .withAnalytics(),
        Q = a('3XMw'),
        X = a.n(Q),
        Y = a('FGLp'),
        Z = a('B5iK')
      var ee = a('TIdA'),
        te = a('rHpw'),
        ae = a('1I0O'),
        ne = a('jhWN'),
        re = a('cHvH'),
        le = ee.a.createLayoutCache(),
        ie = $(function (e) {
          var t,
            a,
            n,
            l,
            o,
            s = e.analytics,
            c = e.createLocalApiErrorHandler,
            u = e.fetchUsersPresence,
            d = e.isOwnProfile,
            m = e.isWithheld,
            p = e.user,
            f = e.userPresencePollingInterval,
            g = e.userSpace,
            h = i.a.useContext(j.a),
            b = h.featureSwitches,
            y = h.loggedInUserId,
            _ = !d && m,
            v = _ || !p.profile_image_url_https ? void 0 : p.profile_image_url_https,
            w =
              y &&
              (b.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ||
                b.isTrue('voice_rooms_typeahead_audiospace_ring_enabled')),
            k = p.has_nft_avatar && b.isTrue('responsive_web_nft_avatar'),
            E = g && w,
            S = i.a.useCallback(
              function () {
                var e
                w && (null === (e = u([p.id_str])) || void 0 === e || e.catch(c({})))
              },
              [p.id_str, w, u, c],
            )
          i.a.useEffect(
            function () {
              return S()
            },
            [S],
          ),
            Object(Y.a)(function () {
              k && s.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            (t = function () {
              return S()
            }),
            (a = w ? f : void 0),
            (n = i.a.useRef()),
            i.a.useEffect(
              function () {
                n.current = t
              },
              [t],
            ),
            i.a.useEffect(
              function () {
                if (n.current && a) {
                  var e = new Z.b(a).interval(n.current)
                  return (
                    e.start(),
                    function () {
                      return e.stop()
                    }
                  )
                }
              },
              [a],
            ),
            g && E
              ? ((o = g.accessibilityLabel), (l = g.link))
              : _ ||
                (k
                  ? ((o = oe.opensNFTDetails), (l = { pathname: '/'.concat(p.screen_name, '/nft') }))
                  : ((o = oe.opensProfilePhoto), (l = { pathname: '/'.concat(p.screen_name, '/photo') })))
          var F = function (e) {
              s.scribe({ element: k ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            C = function (e) {
              var t = e.windowWidth >= te.a.theme.breakpoints.medium,
                a = {
                  accessibilityLabel: o,
                  imageLayoutCache: le,
                  link: l,
                  onClick: F,
                  size: 'custom',
                  uri: v,
                  screenName: p.screen_name,
                }
              return g && E
                ? i.a.createElement(ae.a, r()({}, a, { presenceRingType: g.presenceRingType, style: W.a.avatar }))
                : i.a.createElement(
                    ne.a,
                    r()({}, a, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: W.a.avatar,
                    }),
                  )
            }
          return i.a.createElement(re.a, null, C)
        }),
        oe = { opensProfilePhoto: X.a.f30795df, opensNFTDetails: X.a.a270100c },
        se = a('RCZO'),
        ce = a('MWbm'),
        ue = a('n4Eu'),
        de = a('cm6r'),
        me = a('A91F'),
        pe = a('9Xij'),
        fe = ee.a.createLayoutCache(),
        ge = function (e) {
          var t = e.isOwnProfile,
            a = e.isWithheld,
            n = e.user,
            r = !t && a,
            l = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            o = l && ue.a.get(l),
            s = o ? Object(se.g)(o) : te.a.theme.colors.gray200
          return !r && n.profile_banner_url
            ? i.a.createElement(
                de.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                i.a.createElement(ee.a, {
                  accessibilityLabel: '',
                  aspectMode: me.a.exact(te.a.theme.aspectRatios.profileBanner),
                  backgroundColor: s,
                  image: n.profile_banner_url,
                  layoutCache: fe,
                }),
              )
            : i.a.createElement(
                ce.a,
                { style: W.a.banner },
                i.a.createElement(pe.a, {
                  ratio: te.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: s },
                }),
              )
        },
        he = a('3nOA'),
        be = a('I57f'),
        ye = a('uIZp'),
        _e = a('SOvA'),
        ve = a('vYiB'),
        we = a('Y49K'),
        ke = a('Irs7'),
        Ee = a('/yvb'),
        Se = a('ACHU'),
        Fe = a('rsoE'),
        Ce = a('vMjK'),
        Te = X.a.h63a5c3b,
        Ie = i.a.createElement(Se.a, null),
        Le = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a() {
            var e
            C()(this, a)
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              A()(P()(e), '_renderUserMenu', function (t) {
                var a = e.props,
                  n = a.promotedContent,
                  r = a.user
                return i.a.createElement(Ce.b, { onClose: t, promotedContent: n, user: r, view: 'profile' })
              }),
              e
            )
          }
          return (
            I()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.buttonStyle
                  return i.a.createElement(Ee.a, {
                    accessibilityLabel: Te,
                    hoverLabel: { label: Te },
                    icon: Ie,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: Fe.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            a
          )
        })(i.a.PureComponent),
        Pe = a('pHkl'),
        xe = X.a.g7088266,
        Me = X.a.gd7acb84,
        Re = X.a.b7636014,
        Ne = i.a.createElement(_e.a, null),
        Be = te.a.create(function (e) {
          return {
            buttons: {
              maxWidth: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            },
            button: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 },
            lastButton: { marginBottom: e.spaces.space12 },
          }
        }),
        Ae = function (e) {
          var t = e.history,
            a = e.isWithheld,
            n = e.loggedInUserId,
            r = e.onFollowButtonOffscreen,
            l = e.promotedContent,
            o = e.user,
            s = Object(ke.b)(),
            c = o.id_str === n,
            u = o.blocked_by,
            d = o.blocking,
            m = a && !c,
            p = o.can_dm && n && !d && !u && !m,
            f = n && o && !c && !m,
            g = o.following && n && !d && !u && !a,
            h = o.default_profile_image && !o.description && !o.profile_banner_url
          return i.a.createElement(
            ce.a,
            { style: Be.buttons },
            n && c
              ? i.a.createElement(
                  Ee.a,
                  {
                    link: h ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Be.lastButton,
                    testID: we.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  h ? Me : xe,
                )
              : null,
            f && i.a.createElement(Le, { buttonStyle: Be.button, promotedContent: l, user: o }),
            !c &&
              p &&
              i.a.createElement(Ee.a, {
                accessibilityLabel: Re,
                hoverLabel: { label: Re },
                icon: Ne,
                onPress: function () {
                  if (n) {
                    var e = Object(he.a)(o.id_str, n)
                    s.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Pe.i.ONE_TO_ONE,
                        inbox_type: Pe.d.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Be.button,
                testID: we.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              g &&
              i.a.createElement(be.a, {
                allowPromptForPush: !0,
                isFollowing: o.notifications,
                style: Be.button,
                userId: o.id_str,
              }),
            !c &&
              !u &&
              !m &&
              i.a.createElement(
                ve.a,
                { onOffscreenChange: r },
                i.a.createElement(ye.a, { promotedContent: l, style: Be.lastButton, userId: o.id_str }),
              ),
          )
        },
        Oe = a('tOzk'),
        Ke = a('YeIG'),
        Ue = a('Je1/'),
        De = a('uLiA'),
        He = a('EJJl'),
        ze = a('WWyu'),
        je = a('LhSm'),
        We = a('t62R'),
        Ve = a('GWvE'),
        qe = a('Lsrn'),
        Ge = a('k/Ka'),
        Je = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19.75 6.357h-2.426V4.73c0-1.23-1.01-2.23-2.25-2.23H8.927c-1.24 0-2.25 1-2.25 2.23v1.627H4.25c-1.24 0-2.25 1-2.25 2.23V19.27c0 1.23 1.01 2.23 2.25 2.23h15.5c1.24 0 2.25-1 2.25-2.23V8.587c.002-1.23-1.008-2.23-2.25-2.23zM8.176 4.73c0-.41.337-.744.75-.744h6.144c.414 0 .75.333.75.743v1.627H8.178V4.73zM4.25 7.842h15.5c.413 0 .75.333.75.743v3h-17v-3c0-.41.337-.743.75-.743zm15.5 12.17H4.25c-.413 0-.75-.333-.75-.742v-6.197h17v6.198c0 .41-.338.744-.75.744z',
              }),
            ),
          )
        }
      Je.metadata = { width: 24, height: 24 }
      var $e = Je,
        Qe = a('KrGU'),
        Xe = a('I/9y'),
        Ye = a('YUdS'),
        Ze = a('EjKN'),
        et = X.a.a1ea2f12,
        tt = X.a.g8191e77,
        at = function (e) {
          var t = e.day,
            a = e.month
          if (t && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && t === n.getDate()
          }
        },
        nt = te.a.create(function (e) {
          return {
            description: { display: 'block', marginBottom: e.spaces.space12 },
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
            noCursor: { cursor: 'inherit' },
          }
        }),
        rt = function (e) {
          var t,
            a,
            n,
            r = e.isOwnProfile,
            l = e.professionalCategoryName,
            o = e.user,
            s = i.a.useRef(),
            c = Object(ke.b)(),
            u = r ? { page: 'me' } : { page: 'profile' },
            d =
              null === (t = o.entities) ||
              void 0 === t ||
              null === (a = t.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            m = o.birthdate
          return i.a.createElement(
            i.a.Fragment,
            null,
            o.description
              ? i.a.createElement(
                  ce.a,
                  { style: nt.description },
                  i.a.createElement(He.a, {
                    description: o.description,
                    disableTranslation: !o.is_profile_translatable,
                    entities: o.entities,
                    testID: De.a.userDescription,
                    userId: o.id_str,
                    withheldDescription: o.withheld_description,
                    withheldEntities: o.withheld_entities,
                  }),
                )
              : null,
            i.a.createElement(
              ce.a,
              { style: nt.details },
              i.a.createElement(
                We.b,
                { style: nt.detailsText, testID: De.a.profileHeaderItems },
                l
                  ? i.a.createElement(
                      Ue.a,
                      {
                        Icon: $e,
                        onPress: function () {
                          c.scribe(S()(S()({}, u), K.b()))
                        },
                        style: nt.noCursor,
                        testID: De.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      i.a.createElement(We.b, null, l),
                    )
                  : null,
                o.location && !Object(Ve.a)(o.location)
                  ? i.a.createElement(
                      Ue.a,
                      { Icon: Qe.a, testID: De.a.userLocation },
                      i.a.createElement(We.b, null, o.location),
                    )
                  : null,
                d && d.url
                  ? i.a.createElement(
                      Ue.a,
                      { Icon: Xe.a, link: { pathname: d.url, external: !0 }, testID: De.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !m ||
                  Object(Ke.a)(m) ||
                  (m.visibility &&
                    'self' === m.visibility.toLowerCase() &&
                    m.year_visibility &&
                    'self' === m.year_visibility.toLowerCase())
                  ? null
                  : at(m)
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        Ue.a,
                        {
                          Icon: Ye.a,
                          onPress: function () {
                            s.current && s.current.launch()
                          },
                        },
                        r ? et : tt,
                      ),
                      i.a.createElement(Oe.a, {
                        setRef: function (e) {
                          s.current = e
                        },
                      }),
                    )
                  : i.a.createElement(
                      Ue.a,
                      { Icon: Ze.a, testID: De.a.userBirthdate },
                      i.a.createElement(ze.a, { birthdate: m, withBornPrefixText: !0 }),
                    ),
                i.a.createElement(je.a, { joinDate: o.created_at }),
              ),
            ),
          )
        },
        lt = a('mN6z'),
        it = a('W27K'),
        ot = a('ddV6'),
        st = a.n(ot),
        ct = a('1YZw'),
        ut = Object(V.a)().propsFromActions(function () {
          return {
            addToast: ct.b,
            createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: g.e.unmute,
          }
        }),
        dt = a('8Usl'),
        mt = a('eb3s'),
        pt = a('P2xQ'),
        ft = X.a.cef4e8cf,
        gt = X.a.ec294e62,
        ht = X.a.df422dfe,
        bt = te.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        yt = ut(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            n = e.unmute,
            r = e.user,
            l = i.a.useState(!1),
            o = st()(l, 2),
            s = o[0],
            c = o[1],
            u = r.screen_name
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              We.b,
              { color: 'gray700', style: bt.mute },
              ht,
              ' ',
              i.a.createElement(
                We.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: bt.unmuteButton,
                  testID: dt.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                pt.g,
              ),
            ),
            s
              ? i.a.createElement(mt.a, {
                  confirmButtonLabel: pt.g,
                  headline: ft({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(r.id_str).then(function () {
                        return t({ text: Object(pt.d)(r.screen_name) })
                      }, a({ showToast: !0 }))
                  },
                  text: gt,
                })
              : null,
          )
        }),
        _t = a('RgK2'),
        vt = a.n(_t),
        wt = a('rcen'),
        kt = 'UserName',
        Et = a('X04g'),
        St = a('A7Fw'),
        Ft = X.a.e839db39,
        Ct = X.a.b74bd6c6,
        Tt = X.a.f15bfdb3,
        It = X.a.i859a9d3,
        Lt = te.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        Pt = function (e) {
          var t = e.dismiss,
            a = e.type,
            n = Object(ke.b)()
          i.a.useEffect(
            function () {
              n.scribe({ component: 'blue_badge_education_context', action: 'show' })
            },
            [n],
          )
          var r = i.a.useCallback(
            function () {
              n.scribe({ component: 'blue_badge_education_context', element: 'support_url', action: 'click' })
            },
            [n],
          )
          return i.a.createElement(
            ce.a,
            { style: Lt.content },
            i.a.createElement(St.a, { style: Lt.icon }),
            i.a.createElement(We.b, { size: 'title4', style: Lt.text, weight: 'bold' }, Tt),
            i.a.createElement(
              We.b,
              { color: 'gray700', style: Lt.text },
              Ct,
              ' ',
              i.a.createElement(
                We.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: r },
                It,
              ),
            ),
            'sheet' === a
              ? i.a.createElement(Ee.a, { onClick: t, style: Lt.button, type: 'primaryOutlined' }, Ft)
              : null,
          )
        },
        xt = a('jV+4'),
        Mt = a('ir4X'),
        Rt = function (e) {
          var t,
            a = e.isOwnProfile,
            n = e.isWithheld,
            l = e.namespace,
            o = e.user,
            s = Object(ke.b)(),
            c = i.a.useContext(j.a).featureSwitches,
            u = n ? vt.a : { isProtected: !!o.protected, isVerified: !!o.verified, translatorType: o.translator_type },
            d = o.name && o.screen_name && !(n && !a),
            m = d ? o.name : '@'.concat(o.screen_name),
            p = i.a.useCallback(function (e, t) {
              return i.a.createElement(Pt, { dismiss: e, type: t })
            }, []),
            f = c.isTrue('identity_verification_educational_prompt_enabled'),
            g = c.isTrue('account_taxonomy_automated_label_enabled'),
            h = o.highlightedLabel
          if ('AutomatedLabel' === (null === (t = o.highlightedLabel) || void 0 === t ? void 0 : t.userLabelType)) {
            var b,
              y,
              _,
              v =
                null !== (b = o.highlightedLabel) &&
                void 0 !== b &&
                null !== (y = b.longDescription) &&
                void 0 !== y &&
                y.entities
                  ? i.a.createElement(wt.a, {
                      entities: o.highlightedLabel.longDescription.entities,
                      onEntityClick: function () {
                        var e = { items: [{ id: o.id_str, name: o.screen_name, item_type: Et.a.ItemType.USER }] }
                        s.scribe(S()(S()({}, l), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: o.highlightedLabel.longDescription.text,
                    })
                  : (null === (_ = o.highlightedLabel) || void 0 === _ ? void 0 : _.description) || null
            h = g ? S()(S()({}, o.highlightedLabel), {}, { description: v }) : null
          }
          return i.a.createElement(
            ce.a,
            { style: W.a.names, testID: kt },
            i.a.createElement(
              xt.a,
              r()({}, u, {
                badgeContext: 'account',
                name: m,
                nameSize: 'headline1',
                renderVerifiedBadgeContext: f ? p : void 0,
                screenName: d ? o.screen_name : void 0,
                weight: 'heavy',
                withFollowsYou: o.followed_by && !n,
                withNameWrap: !0,
                withStackedLayout: !0,
              }),
            ),
            h ? i.a.createElement(Mt.a, { isIconLarge: !0, label: h }) : null,
          )
        },
        Nt = (a('uFXj'), a('W55q')),
        Bt = a('YeSc'),
        At = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Ot = Object(V.a)()
          .propsFromState(function () {
            return { newsletter: Bt.f }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n = e.newsletter,
              r =
                null == n || null === (t = n.data) || void 0 === t
                  ? void 0
                  : t.revue_account.account_settings.twitter_profile_subscriptions_enabled
            return {
              isSubscribed:
                (null == n || null === (a = n.context) || void 0 === a ? void 0 : a.user_subscription_status) ===
                Nt.c.Subscribed,
              profileUrl: null == n ? void 0 : n.data.revue_account.profile_info.profile_url,
              revueAccountId: null == n ? void 0 : n.config.revue_account_id,
              showNewsletterSubscription: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_PROFILE_HEADER',
              ),
              fetchUserBizProfileIfNeeded: Bt.c,
            }
          })
          .withAnalytics(At),
        Kt = Object(V.a)()
          .propsFromState(function () {
            return { newsletter: Bt.f }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n,
              r,
              l,
              i,
              o,
              s,
              c,
              u,
              d,
              m,
              p,
              f,
              g,
              h,
              b,
              y = e.newsletter,
              _ =
                null == y ||
                null === (t = y.data) ||
                void 0 === t ||
                null === (a = t.revue_account) ||
                void 0 === a ||
                null === (n = a.profile_info) ||
                void 0 === n ||
                null === (r = n.profile_image) ||
                void 0 === r ||
                null === (l = r.image_variants) ||
                void 0 === l
                  ? void 0
                  : l.map(function (e) {
                      return { height: e.height, uri: e.url, width: e.width }
                    })
            return {
              description:
                null == y ||
                null === (i = y.data) ||
                void 0 === i ||
                null === (o = i.revue_account) ||
                void 0 === o ||
                null === (s = o.newsletter_info) ||
                void 0 === s
                  ? void 0
                  : s.description,
              imageVariants: _,
              originalImage:
                null == y ||
                null === (c = y.data) ||
                void 0 === c ||
                null === (u = c.revue_account) ||
                void 0 === u ||
                null === (d = u.profile_info) ||
                void 0 === d ||
                null === (m = d.profile_image) ||
                void 0 === m
                  ? void 0
                  : m.original_image,
              title:
                null == y ||
                null === (p = y.data) ||
                void 0 === p ||
                null === (f = p.revue_account) ||
                void 0 === f ||
                null === (g = f.newsletter_info) ||
                void 0 === g
                  ? void 0
                  : g.title,
              subscriberCount:
                null == y || null === (h = y.data) || void 0 === h || null === (b = h.account_analytics) || void 0 === b
                  ? void 0
                  : b.subscriber_count,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        Ut = a('855f'),
        Dt = a('vbJ7'),
        Ht = function (e) {
          var t = e.description,
            a = e.isMobileLayout,
            n = e.originalImage,
            r = e.subscriberCount,
            l = e.title,
            o = e.withThumbnail,
            s = parseInt(r, 10) || 0,
            c = Ut.a.getTruncatedCount(s),
            u = a ? 'subtext2' : 'body'
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              ce.a,
              { style: Yt.contentContainer },
              o && n
                ? i.a.createElement(
                    ce.a,
                    { style: [Yt.newsletterImageContainer, a ? Yt.newsletterImageContainerMobile : void 0] },
                    i.a.createElement(
                      pe.a,
                      { ratio: 1 },
                      i.a.createElement(ee.a, { accessibilityLabel: t || '', aspectMode: me.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              i.a.createElement(
                ce.a,
                { style: [Yt.newsletterInfoContainer, a ? Yt.mobileNewsletterInfoContainer : void 0] },
                i.a.createElement(
                  We.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: a ? Yt.newsletterFieldMobile : Yt.newsletterField,
                    weight: 'bold',
                  },
                  l,
                ),
                i.a.createElement(
                  We.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [Yt.newsletterDescription, a ? Yt.newsletterFieldMobile : Yt.newsletterField],
                  },
                  t,
                ),
                r
                  ? i.a.createElement(
                      We.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: a ? Yt.newsletterFieldMobile : Yt.newsletterField,
                      },
                      i.a.createElement(X.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: s }),
                    )
                  : null,
              ),
            ),
          )
        }
      Ht.defaultProps = { withThumbnail: !0 }
      var zt,
        jt,
        Wt,
        Vt,
        qt,
        Gt,
        Jt,
        $t,
        Qt,
        Xt,
        Yt = te.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Dt.a.hexToCss(te.a.theme.colors.borderColor, 0.7),
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              height: 'calc('.concat(e.spaces.space48, ' * 2)'),
              overflow: 'hidden',
              width: 'calc('.concat(e.spaces.space48, ' * 2)'),
            },
            newsletterImageContainerMobile: {
              height: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
              width: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
            },
            newsletterInfoContainer: {
              flex: 6,
              paddingLeft: e.spaces.space12,
              paddingRight: e.spaces.space8,
              paddingTop: e.spaces.space8,
              textAlign: 'left',
            },
            mobileNewsletterInfoContainer: { paddingLeft: e.spaces.space8, paddingRight: e.spaces.space4 },
            newsletterDescription: { overflow: 'hidden' },
            newsletterField: { lineHeight: e.spaces.space20 },
            newsletterFieldMobile: { lineHeight: 'calc('.concat(e.spaces.space16, ' + ').concat(e.spaces.space1, ')') },
          }
        }),
        Zt = Kt(Ht),
        ea = a('Rp9C'),
        ta = a('I4+6'),
        aa = X.a.d834aec4,
        na = X.a.ab0deccf,
        ra = X.a.caeab0f7,
        la = te.a.create(function (e) {
          return {
            actionButton: { margin: 'auto' },
            buttonContainer: {
              alignItems: 'stretch',
              display: 'flex',
              height: 'calc('
                .concat(e.spaces.space40, ' + ')
                .concat(e.spaces.space12, ' - ')
                .concat(e.spaces.space1, ')'),
              width: '100%',
            },
            contentContainer: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4 },
            darkModeBackground: { backgroundColor: e.colors.gray0 },
            defaultBackground: { backgroundColor: e.colors.cellBackground },
            moduleContainer: {
              borderRadius: e.borderRadii.xLarge,
              boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.1)',
              marginBottom: e.spaces.space16,
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              overflow: 'hidden',
            },
            mobileButtonContainer: { height: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space4, ')') },
            moduleLabel: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginBottom: e.spaces.space8 },
            summaryContainer: { borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50 },
          }
        }),
        ia = Ot(function (e) {
          var t = i.a.useContext(j.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
            a = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.fetchUserBizProfileIfNeeded,
            l = e.isSubscribed,
            o = e.profileUrl,
            s = e.revueAccountId,
            c = e.screenName,
            u = e.showNewsletterSubscription,
            d = e.user,
            m = e.userId,
            p = t && u,
            f = i.a.useCallback(
              function (e) {
                if (p) {
                  var t = ea.a.getUserItem(d),
                    n = t.is_user_follows_viewer,
                    r = t.is_viewer_follows_user,
                    i = [{ id: s, is_viewer_follows_user: r, is_user_follows_viewer: n }]
                  a.scribe({ action: e, element: l ? 'start_reading_btn' : 'subscribe_btn', data: { items: i } })
                }
              },
              [a, l, s, p, d],
            )
          i.a.useEffect(
            function () {
              t && r(m).catch(n())
            },
            [n, r, t, m],
          ),
            i.a.useEffect(
              function () {
                f('impression')
              },
              [p],
            )
          var g = function (e) {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                ce.a,
                { style: la.moduleLabel },
                i.a.createElement(We.b, { size: 'body', weight: 'bold' }, aa),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  a = l ? o : t,
                  n = l ? ra : na,
                  r = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
                  s = ta.a.generate({
                    backgroundColor: te.a.theme.colors.transparent,
                    color: te.a.theme.colors.primary,
                    customFocusBackgroundColor: r,
                    customHoverBackgroundColor: r,
                    customPressedBackgroundColor: r,
                  })
                return i.a.createElement(
                  de.a,
                  {
                    interactiveStyles: s,
                    link: a,
                    onPress: function () {
                      return f('click')
                    },
                    style: [la.moduleContainer, te.a.isDarkMode() ? la.darkModeBackground : la.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: [la.contentContainer, la.summaryContainer] },
                      i.a.createElement(Zt, { isMobileLayout: e, userId: m, withThumbnail: !0 }),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [la.buttonContainer, e ? la.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        We.b,
                        {
                          align: 'center',
                          link: a,
                          size: 'body',
                          style: la.actionButton,
                          weight: 'bold',
                          withInteractiveStyling: !1,
                        },
                        n,
                      ),
                    ),
                  ),
                )
              })(e),
            )
          }
          return p
            ? i.a.createElement(re.a, null, function (e) {
                var t = e.windowWidth <= te.a.theme.breakpoints.small
                return g(t)
              })
            : null
        }),
        oa = a('z+ta'),
        sa = (a('enFi'), a('yH/f'), X.a.b44c0204),
        ca = X.a.de1123f4,
        ua = function (e, t, a) {
          var n = (function (e, t) {
            var a = new Date()
            return a.setHours(e), a.setMinutes(t), (0, X.a.d725a288)(a)
          })(t, a)
          return (function (e) {
            return new Date().toLocaleString('en-US', { weekday: 'long' }) === e
          })(e)
            ? ca({ time: n })
            : sa({ day: e, time: n })
        },
        da = a('jAXQ'),
        ma = a.n(da),
        pa = X.a.e2a5bd5f,
        fa = X.a.e41a0dc1,
        ga = X.a.e0d7da6b,
        ha = X.a.fd00a769,
        ba = X.a.i7059f55,
        ya = X.a.a7391347,
        _a = void 0 !== zt ? zt : (zt = a('NAj4')),
        va = te.a.create(function (e) {
          return { openHoursText: { flexDirection: 'row' }, text: { marginVertical: e.spaces.space2 } }
        }),
        wa = function (e) {
          var t,
            a,
            n,
            r,
            l,
            o = e.aboutModuleRef,
            s = ma()(_a, o),
            c = function () {
              return i.a.createElement(We.b, { color: 'gray700', style: va.text }, ya)
            },
            u = function () {
              return i.a.createElement(We.b, { color: 'green700', style: va.text }, pa)
            },
            d = function (e) {
              var t = null == e ? void 0 : e.is_open
              if (null == t) return null
              var a = t ? (null == e ? void 0 : e.closes) : null == e ? void 0 : e.opens
              return null == a
                ? null
                : i.a.createElement(
                    ce.a,
                    { style: va.openHoursText },
                    i.a.createElement(We.b, { color: t ? 'green500' : 'red500', style: va.text }, t ? ha : fa),
                    i.a.createElement(We.b, { color: 'gray700', style: va.text }, ' · '),
                    i.a.createElement(
                      We.b,
                      { color: 'gray700', style: va.text },
                      ''.concat(t ? ga : ba, ' ').concat(ua(a.day, a.time.hour, a.time.minute)),
                    ),
                  )
            }
          return i.a.createElement(
            i.a.Fragment,
            null,
            ((n = s.data.website),
            (r = null == n ? void 0 : n.url),
            (l = null == n ? void 0 : n.display),
            r && l ? i.a.createElement(We.b, { link: { pathname: r, external: !0 }, style: va.text }, l) : null),
            (a = null === (t = s.data.address) || void 0 === t ? void 0 : t.formatted_address)
              ? i.a.createElement(We.b, { color: 'gray700', style: va.text }, a)
              : null,
            (function () {
              var e = s.data.open_times
              if (null == e) return null
              var t = e.open_times_type
              return t && 'AlwaysOpen' === t ? u() : t && 'RegularHours' === t ? d(e) : c()
            })(),
          )
        },
        ka = a('EfHu'),
        Ea = te.a.create(function (e) {
          return {
            icon: { color: e.colors.alwaysBaseGray1100, height: e.spaces.space32 },
            image: {
              alignItems: 'center',
              backgroundColor: e.colors.gray200,
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
            },
          }
        }),
        Sa = function () {
          return i.a.createElement(ce.a, { style: Ea.image }, i.a.createElement(ka.a, { style: Ea.icon }))
        },
        Fa = te.a.create(function (e) {
          return { buttonText: { margin: 'auto' }, button: { cursor: 'pointer', flexGrow: 1, height: 'auto' } }
        }),
        Ca = function (e) {
          var t = e.label,
            a = e.link,
            n = e.onPress,
            r = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
            l = ta.a.generate({
              backgroundColor: te.a.theme.colors.transparent,
              color: te.a.theme.colors.primary,
              customFocusBackgroundColor: r,
              customHoverBackgroundColor: r,
              customPressedBackgroundColor: r,
            })
          return i.a.createElement(
            de.a,
            { interactiveStyles: l, link: a, onPress: n, style: Fa.button },
            i.a.createElement(
              We.b,
              {
                align: 'center',
                color: 'link',
                size: 'body',
                style: Fa.buttonText,
                weight: 'bold',
                withInteractiveStyling: !1,
              },
              t,
            ),
          )
        },
        Ta = te.a.create(function (e) {
          return {
            container: {
              borderColor: e.colors.gray50,
              borderTopWidth: e.borderWidths.small,
              display: 'flex',
              flexDirection: 'row',
              height: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space2, ')'),
              width: '100%',
            },
          }
        }),
        Ia = function (e) {
          var t = e.children
          return i.a.createElement(ce.a, { style: Ta.container }, t)
        },
        La = te.a.create(function (e) {
          return { separator: { borderColor: e.colors.gray50, borderRightWidth: e.borderWidths.small } }
        }),
        Pa = function () {
          return i.a.createElement(ce.a, { style: La.separator })
        },
        xa = te.a.create(function (e) {
          return {
            container: {
              borderRadius: e.borderRadii.xLarge,
              boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.1)',
              marginBottom: e.spaces.space16,
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              overflow: 'hidden',
            },
            darkModeBackground: { backgroundColor: e.colors.gray0 },
            defaultBackground: { backgroundColor: e.colors.cellBackground },
          }
        }),
        Ma = function (e) {
          var t = e.children
          return i.a.createElement(
            ce.a,
            { style: [xa.container, te.a.isDarkMode() ? xa.darkModeBackground : xa.defaultBackground] },
            t,
          )
        },
        Ra = te.a.create(function (e) {
          return {
            container: { flexDirection: 'row', paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4 },
          }
        }),
        Na = function (e) {
          var t = e.children
          return i.a.createElement(ce.a, { style: Ra.container }, t)
        },
        Ba = te.a.create(function (e) {
          return {
            container: {
              flex: 6,
              paddingHorizontal: e.spaces.space12,
              paddingVertical: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')'),
              textAlign: 'left',
            },
            mobileContainer: { paddingHorizontal: e.spaces.space8 },
          }
        }),
        Aa = function (e) {
          var t = e.children,
            a = e.isMobileLayout
          return i.a.createElement(ce.a, { style: [Ba.container, a ? Ba.mobileContainer : void 0] }, t)
        },
        Oa = te.a.create(function (e) {
          return {
            container: {
              borderColor: Dt.a.hexToCss(te.a.theme.colors.borderColor, 0.7),
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              height: 'calc('.concat(e.spaces.space48, ' * 2)'),
              overflow: 'hidden',
              width: 'calc('.concat(e.spaces.space48, ' * 2)'),
            },
            mobileContainer: {
              height: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
              width: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
            },
          }
        }),
        Ka = function (e) {
          var t = e.children,
            a = e.isMobileLayout
          return i.a.createElement(ce.a, { style: [Oa.container, a ? Oa.mobileContainer : void 0] }, t)
        },
        Ua = te.a.create(function (e) {
          return {
            moduleLabel: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginBottom: e.spaces.space8 },
          }
        }),
        Da = function (e) {
          var t = e.label
          return i.a.createElement(
            ce.a,
            { style: Ua.moduleLabel },
            i.a.createElement(We.b, { size: 'body', weight: 'bold' }, t),
          )
        },
        Ha = X.a.jaaa8984,
        za = X.a.c2059c9f,
        ja = X.a.e2acb642,
        Wa = void 0 !== jt ? jt : (jt = a('nUER')),
        Va = void 0 !== Wt ? Wt : (Wt = a('hyc7')),
        qa = function (e) {
          var t,
            a = e.profileSpotlightRef,
            n = e.userRef,
            r = i.a.useContext(j.a).featureSwitches.isTrue('responsive_web_location_spotlight_v1_display')
          ma()(Wa, n)
          var l = ma()(Va, a),
            o = null === (t = l.data.address) || void 0 === t ? void 0 : t.formatted_address
          return r
            ? i.a.createElement(re.a, null, function (e) {
                var t = e.windowWidth <= te.a.theme.breakpoints.small
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(Da, { label: Ha }),
                  (function (e) {
                    return i.a.createElement(
                      Ma,
                      null,
                      i.a.createElement(
                        Na,
                        null,
                        i.a.createElement(Ka, { isMobileLayout: e }, i.a.createElement(Sa, null)),
                        i.a.createElement(Aa, null, i.a.createElement(wa, { aboutModuleRef: l })),
                      ),
                      i.a.createElement(
                        Ia,
                        null,
                        o &&
                          i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(Ca, {
                              label: za,
                              link: 'https://www.google.com/maps/search/?api=1&query='.concat(encodeURIComponent(o)),
                              onPress: function () {},
                            }),
                            i.a.createElement(Pa, null),
                          ),
                        i.a.createElement(Ca, { label: ja, link: 'dummy_contact_link', onPress: function () {} }),
                      ),
                    )
                  })(t),
                )
              })
            : null
        },
        Ga = a('tI3i'),
        Ja = a.n(Ga),
        $a = X.a.d58baa7e,
        Qa = void 0 !== Vt ? Vt : (Vt = a('0zj1')),
        Xa = te.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Dt.a.hexToCss(te.a.theme.colors.borderColor, 0.7),
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              height: 'calc('.concat(e.spaces.space48, ' * 2)'),
              overflow: 'hidden',
              width: 'calc('.concat(e.spaces.space48, ' * 2)'),
            },
            newsletterImageContainerMobile: {
              height: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
              width: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space4, ')'),
            },
            newsletterInfoContainer: {
              flex: 6,
              paddingLeft: e.spaces.space12,
              paddingRight: e.spaces.space8,
              paddingTop: e.spaces.space8,
              textAlign: 'left',
            },
            mobileNewsletterInfoContainer: { paddingLeft: e.spaces.space8, paddingRight: e.spaces.space4 },
            newsletterDescription: { overflow: 'hidden' },
            newsletterField: { lineHeight: e.spaces.space20 },
            newsletterFieldMobile: { lineHeight: 'calc('.concat(e.spaces.space16, ' + ').concat(e.spaces.space1, ')') },
          }
        }),
        Ya = function (e) {
          var t,
            a,
            n,
            r,
            l,
            o,
            s,
            c,
            u,
            d,
            m,
            p,
            f = e.isMobileLayout,
            g = e.revueModuleRef,
            h = ma()(Qa, g),
            b =
              null == h ||
              null === (t = h.data) ||
              void 0 === t ||
              null === (a = t.revue_account) ||
              void 0 === a ||
              null === (n = a.newsletter_info) ||
              void 0 === n
                ? void 0
                : n.description,
            y =
              null == h ||
              null === (r = h.data) ||
              void 0 === r ||
              null === (l = r.revue_account) ||
              void 0 === l ||
              null === (o = l.profile_info) ||
              void 0 === o ||
              null === (s = o.profile_image) ||
              void 0 === s
                ? void 0
                : s.original_image,
            _ =
              null == h ||
              null === (c = h.data) ||
              void 0 === c ||
              null === (u = c.revue_account) ||
              void 0 === u ||
              null === (d = u.newsletter_info) ||
              void 0 === d
                ? void 0
                : d.title,
            v =
              null == h || null === (m = h.data) || void 0 === m || null === (p = m.account_analytics) || void 0 === p
                ? void 0
                : p.subscriber_count,
            w = parseInt(v, 10) || 0,
            k = $a(w),
            E = f ? 'subtext2' : 'body'
          return i.a.createElement(
            ce.a,
            { style: Xa.contentContainer },
            y
              ? i.a.createElement(
                  ce.a,
                  { style: [Xa.newsletterImageContainer, f ? Xa.newsletterImageContainerMobile : void 0] },
                  i.a.createElement(
                    pe.a,
                    { ratio: 1 },
                    i.a.createElement(ee.a, { accessibilityLabel: b || '', aspectMode: me.a.SQUARE, image: y }),
                  ),
                )
              : null,
            i.a.createElement(
              ce.a,
              { style: [Xa.newsletterInfoContainer, f ? Xa.mobileNewsletterInfoContainer : void 0] },
              i.a.createElement(
                We.b,
                {
                  align: 'left',
                  numberOfLines: 1,
                  size: E,
                  style: f ? Xa.newsletterFieldMobile : Xa.newsletterField,
                  weight: 'bold',
                },
                _,
              ),
              i.a.createElement(
                We.b,
                {
                  align: 'left',
                  color: 'gray700',
                  numberOfLines: 2,
                  size: E,
                  style: [Xa.newsletterDescription, f ? Xa.newsletterFieldMobile : Xa.newsletterField],
                },
                b,
              ),
              v
                ? i.a.createElement(
                    We.b,
                    {
                      align: 'left',
                      color: 'gray700',
                      size: E,
                      style: f ? Xa.newsletterFieldMobile : Xa.newsletterField,
                    },
                    i.a.createElement(X.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: k, count: w }),
                  )
                : null,
            ),
          )
        },
        Za = X.a.d834aec4,
        en = X.a.ab0deccf,
        tn = X.a.caeab0f7,
        an = void 0 !== qt ? qt : (qt = a('hRT2')),
        nn = void 0 !== Gt ? Gt : (Gt = a('bu6k')),
        rn = te.a.create(function (e) {
          return {
            actionButton: { margin: 'auto' },
            buttonContainer: {
              alignItems: 'stretch',
              display: 'flex',
              height: 'calc('
                .concat(e.spaces.space40, ' + ')
                .concat(e.spaces.space12, ' - ')
                .concat(e.spaces.space1, ')'),
              width: '100%',
            },
            contentContainer: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4 },
            darkModeBackground: { backgroundColor: e.colors.gray0 },
            defaultBackground: { backgroundColor: e.colors.cellBackground },
            moduleContainer: {
              borderRadius: e.borderRadii.xLarge,
              boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.1)',
              marginBottom: e.spaces.space16,
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              overflow: 'hidden',
            },
            mobileButtonContainer: { height: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space4, ')') },
            moduleLabel: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginBottom: e.spaces.space8 },
            summaryContainer: { borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50 },
          }
        }),
        ln = function (e) {
          var t,
            a,
            n = e.profileSpotlightRef,
            r = e.userRef,
            l = i.a.useContext(j.a).featureSwitches,
            o = Object(ke.b)(),
            s = ma()(an, r),
            c = ma()(nn, n),
            u = null == c ? void 0 : c.config.revue_account_id,
            d = null == c ? void 0 : c.data.revue_account.profile_info.profile_url,
            m =
              (null == c || null === (t = c.context) || void 0 === t ? void 0 : t.user_subscription_status) ===
              Nt.c.Subscribed,
            p =
              null == c || null === (a = c.data) || void 0 === a
                ? void 0
                : a.revue_account.account_settings.twitter_profile_subscriptions_enabled,
            f = l.isTrue('responsive_web_newsletters_profile_subscribe_enabled') && p,
            g = i.a.useCallback(
              function (e) {
                if (f) {
                  var t,
                    a = ea.a.getUserItem({
                      id_str: s.rest_id,
                      name: null !== (t = s.legacy.name) && void 0 !== t ? t : '',
                      following: s.legacy.following,
                      followed_by: s.legacy.followed_by,
                    }),
                    n = a.is_user_follows_viewer,
                    r = a.is_viewer_follows_user,
                    l = [{ id: u, is_viewer_follows_user: r, is_user_follows_viewer: n }]
                  o.scribe({
                    action: e,
                    component: 'newsletter_module',
                    element: m ? 'start_reading_btn' : 'subscribe_btn',
                    data: { items: l },
                  })
                }
              },
              [o, m, u, f, s],
            )
          i.a.useEffect(
            function () {
              g('impression')
            },
            [f],
          )
          var h = function (e) {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                ce.a,
                { style: rn.moduleLabel },
                i.a.createElement(We.b, { size: 'body', weight: 'bold' }, Za),
              ),
              (function (e) {
                var t
                Ja()(s.legacy.screen_name, 'user.legacy.screen_name is undefined')
                var a = '/i/newsletters/subscribe/'.concat(s.legacy.screen_name),
                  n = null !== (t = m ? d : a) && void 0 !== t ? t : void 0,
                  r = m ? tn : en,
                  l = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
                  o = ta.a.generate({
                    backgroundColor: te.a.theme.colors.transparent,
                    color: te.a.theme.colors.primary,
                    customFocusBackgroundColor: l,
                    customHoverBackgroundColor: l,
                    customPressedBackgroundColor: l,
                  })
                return i.a.createElement(
                  de.a,
                  {
                    interactiveStyles: o,
                    link: n,
                    onPress: function () {
                      return g('click')
                    },
                    style: [rn.moduleContainer, te.a.isDarkMode() ? rn.darkModeBackground : rn.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: [rn.contentContainer, rn.summaryContainer] },
                      i.a.createElement(Ya, { isMobileLayout: e, revueModuleRef: c }),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [rn.buttonContainer, e ? rn.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        We.b,
                        {
                          align: 'center',
                          color: 'link',
                          size: 'body',
                          style: rn.actionButton,
                          weight: 'bold',
                          withInteractiveStyling: !1,
                        },
                        r,
                      ),
                    ),
                  ),
                )
              })(e),
            )
          }
          return f
            ? i.a.createElement(re.a, null, function (e) {
                var t = e.windowWidth <= te.a.theme.breakpoints.small
                return h(t)
              })
            : null
        },
        on = void 0 !== Jt ? Jt : (Jt = a('+wNI')),
        sn = void 0 !== $t ? $t : ($t = a('Xcj+')),
        cn = Object.freeze({ Location: 'AboutModule', Newsletter: 'RevueModule' }),
        un = function (e) {
          var t = e.profileSpotlightRef,
            a = e.userRef,
            n = i.a.useContext(j.a).loggedInUserId,
            r = ma()(on, a),
            l = ma()(sn, t),
            o =
              !n ||
              r.legacy.blocking ||
              r.legacy.blocked_by ||
              !!r.legacy.withheld_scope ||
              (r.legacy.protected && !r.legacy.following)
          switch (l.__typename) {
            case cn.Location:
              return i.a.createElement(qa, { profileSpotlightRef: l, userRef: r })
            case cn.Newsletter:
              return o ? null : i.a.createElement(ln, { profileSpotlightRef: l, userRef: r })
            default:
              return null
          }
        },
        dn = void 0 !== Qt ? Qt : (Qt = a('M8le')),
        mn = function (e) {
          var t,
            a,
            n,
            r = e.userRef,
            l = ma()(dn, r),
            o =
              null === (t = l.profilemodules) ||
              void 0 === t ||
              null === (a = t.v1) ||
              void 0 === a ||
              null === (n = a[0]) ||
              void 0 === n
                ? void 0
                : n.profile_module
          return o ? i.a.createElement(un, { profileSpotlightRef: o, userRef: l }) : null
        },
        pn = a('Fr3L'),
        fn = a('IAZG'),
        gn = void 0 !== Xt ? Xt : (Xt = a('S97D')),
        hn = function (e) {
          var t,
            a = e.userScreenName,
            n = Object(fn.a)(gn, { screen_name: a }),
            r = null == n || null === (t = n.user_result_by_screen_name) || void 0 === t ? void 0 : t.result
          return r ? i.a.createElement(mn, { userRef: r }) : null
        },
        bn = function (e) {
          var t = e.userScreenName
          return i.a.createElement(
            pn.a,
            { errorConfig: { context: 'PROFILE_SPOTLIGHTS' } },
            i.a.createElement(hn, { userScreenName: t }),
          )
        },
        yn = a('7JQg'),
        _n = a('7wqI'),
        vn = a('Jkc4'),
        wn = a('wCd/'),
        kn = function (e) {
          var t = e.isActiveCreator,
            a = e.isOwnProfile,
            n = e.superFollowersCount,
            r = e.user,
            l = r.followers_count,
            o = r.friends_count,
            s = r.screen_name
          return i.a.createElement(vn.a, null, function (e) {
            return i.a.createElement(wn.a, {
              followersCount: l,
              friendsCount: o,
              onPress: e(),
              screenName: s,
              superFollowersCount: t && a ? n : void 0,
              withLink: Object(_n.b)({ isOwnProfile: a, user: r }),
            })
          })
        },
        En = { page: 'profile', section: 'header' },
        Sn = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a(e, n) {
            var r
            return (
              C()(this, a),
              (r = t.call(this, e, n)),
              A()(
                P()(r),
                '_shouldUseProfileSpotlightRendering',
                r.context.featureSwitches.isTrue('responsive_web_profile_spotlight_v0_display'),
              ),
              A()(P()(r), '_handleRemoveClusterFollow', function () {
                r.setState({ shouldShowClusterFollow: !1 })
              }),
              (r.state = { shouldShowClusterFollow: !1 }),
              r
            )
          }
          return (
            I()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(lt.a)(t, this.state) || !Object(lt.a)(e, this.props)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  !0 === this.props.user.following &&
                    !1 === e.user.following &&
                    this.setState({ shouldShowClusterFollow: !0 }),
                    this.props.user.id_str !== e.user.id_str && this.setState({ shouldShowClusterFollow: !1 })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActiveCreator,
                    a = e.isWithheld,
                    n = e.loggedInUserId,
                    r = e.professionalCategoryName,
                    l = e.superFollowersCount,
                    o = e.user,
                    s = this._isOwnProfile(),
                    c = !s && (o.blocking || o.blocked_by || a),
                    u = !s && (o.blocked_by || a),
                    d = !n || s || o.blocking || o.blocked_by || a || (o.protected && !o.following),
                    m = !n || o.blocking || o.blocked_by || a || (o.protected && !o.following)
                  return i.a.createElement(
                    yn.c,
                    { namespace: En },
                    i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(ge, { isOwnProfile: s, isWithheld: a, user: o }),
                      i.a.createElement(
                        ce.a,
                        { style: [W.a.content, Fn.content, c && W.a.withheld] },
                        i.a.createElement(
                          ce.a,
                          { style: W.a.avatarAndButton },
                          i.a.createElement(ie, { isOwnProfile: s, isWithheld: a, user: o }),
                          i.a.createElement(Ae, {
                            history: this.props.history,
                            isWithheld: a,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: o,
                          }),
                        ),
                        i.a.createElement(Rt, { isOwnProfile: s, isWithheld: a, namespace: En, user: o }),
                        c ? null : i.a.createElement(rt, { isOwnProfile: s, professionalCategoryName: r, user: o }),
                        u
                          ? null
                          : i.a.createElement(kn, {
                              isActiveCreator: t,
                              isOwnProfile: s,
                              superFollowersCount: l,
                              user: o,
                            }),
                        d
                          ? null
                          : i.a.createElement(
                              ce.a,
                              { style: Fn.marginTopXSmall },
                              i.a.createElement(it.a, { userId: o.id_str, userScreenName: o.screen_name }),
                            ),
                        o.muting ? i.a.createElement(yt, { user: o }) : null,
                      ),
                      this._shouldUseProfileSpotlightRendering
                        ? i.a.createElement(bn, { userScreenName: o.screen_name })
                        : m
                        ? null
                        : i.a.createElement(ia, { screenName: o.screen_name, user: o, userId: o.id_str }),
                      this.state.shouldShowClusterFollow ? this._renderProfileClusterFollow() : null,
                    ),
                  )
                },
              },
              {
                key: '_isOwnProfile',
                value: function () {
                  var e = this.props
                  return e.loggedInUserId === e.user.id_str
                },
              },
              {
                key: '_renderProfileClusterFollow',
                value: function () {
                  var e = this.props.user
                  return i.a.createElement(oa.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            a
          )
        })(i.a.Component)
      A()(Sn, 'contextType', j.a)
      var Fn = te.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        Cn = Sn,
        Tn = a('8UdT'),
        In = a('dwig'),
        Ln = a('GOQE'),
        Pn = a('v//M'),
        xn = a('0+qk'),
        Mn = a('drnk'),
        Rn = a('9Bb1'),
        Nn = a('iFPY'),
        Bn = a('5S/X'),
        An = a('oQhu'),
        On = a('xZGM'),
        Kn = function (e, t) {
          return Object(On.D)(e, On.y)
        },
        Un = Object(V.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Kn, isLoggedIn: f.n }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(On.z)(On.y)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        Dn = a.p + 'nft_education_graphic.72be3745.png',
        Hn = a('Wms4'),
        zn = a('feu+'),
        jn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.65 9.69c-.29-2.19-1.64-3.5-3.61-3.5S8.72 7.5 8.43 9.69c-.21 1.54 0 2.65.64 3.38.76.88 1.93 1 2.97 1 1.04 0 2.21-.12 2.97-1 .48-.55.72-1.31.72-2.31 0-.33-.03-.69-.08-1.07zm-1.77 2.4c-.29.33-.84.48-1.84.48s-1.55-.15-1.85-.48c-.33-.38-.42-1.12-.28-2.2.14-1 .61-2.2 2.13-2.2 1.51 0 1.99 1.2 2.13 2.19.14 1.09.05 1.83-.29 2.21z',
              }),
              i.a.createElement('path', {
                d: 'M22.95 10.87l-4.5-7.75C18.05 2.43 17.3 2 16.5 2h-9c-.8 0-1.55.43-1.95 1.12l-4.5 7.75c-.4.7-.4 1.56 0 2.26l4.5 7.75C5.95 21.57 6.7 22 7.5 22h9c.8 0 1.55-.43 1.95-1.12l4.5-7.75c.4-.7.4-1.56 0-2.26zM16.5 20.5h-9c-.46 0-.37-.18-.37-.18.7-2.05 2.66-3.42 4.9-3.42 2.23 0 4.2 1.37 4.89 3.42 0 0 .12.19-.42.18zm5.15-8.12l-3.75 6.46c-1.14-2.1-3.38-3.44-5.87-3.44-2.52 0-4.77 1.36-5.91 3.48l-3.77-6.5c-.13-.24-.13-.52 0-.76l4.5-7.75c.13-.23.38-.37.65-.37h9c.27 0 .52.14.65.37l4.5 7.75c.13.24.13.52 0 .76z',
              }),
            ),
          )
        }
      jn.metadata = { width: 24, height: 24 }
      var Wn = jn,
        Vn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ge.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M2.4 16.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L7 10.2c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.2 5.2c-.2.1-.3.1-.5.1zm.3 6.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l5.4-5.4c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-5.4 5.4c-.2.1-.4.2-.6.2zm6.9-.6c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l4.8-4.8c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-4.8 4.8c-.2.1-.4.2-.6.2z',
              }),
              i.a.createElement('path', {
                d: 'M22.384 6.56c-.118-.368-.46-.62-.848-.62h-4.464l-1.51-4.427c-.125-.358-.462-.602-.844-.602-.383 0-.72.243-.843.603l-1.51 4.426H7.9c-.387 0-.73.25-.85.617-.117.37.017.77.333.993l3.566 2.528-1.52 4.45c-.125.363 0 .767.312.996.313.23.73.233 1.047.012l3.93-2.79 3.93 2.79c.155.11.336.164.517.164.188 0 .374-.06.53-.175.31-.23.436-.633.31-.997L18.49 10.08l3.566-2.527c.31-.226.446-.625.328-.994z',
              }),
            ),
          )
        }
      Vn.metadata = { width: 24, height: 24 }
      var qn = Vn,
        Gn = X.a.ebf5ec25,
        Jn = X.a.c405ac8d,
        $n = X.a.a893d601,
        Qn = X.a.eb023c93,
        Xn = X.a.gc65c0a9,
        Yn = X.a.d17e8aa3,
        Zn = X.a.ff9c6943,
        er = te.a.create(function (e) {
          return {
            heading: { marginTop: e.spaces.space16, marginBottom: e.spaces.space12 },
            iconContainer: { flexDirection: 'row', marginVertical: e.spaces.space12 },
            noMarginTop: { marginTop: 0 },
            reducedMarginBottom: { marginBottom: e.spaces.space4 },
            icon: {
              color: e.colors.teal300,
              marginRight: e.spaces.space12,
              fontSize: e.spaces.space24,
              minWidth: e.spaces.space24,
            },
            label: {
              backgroundColor: e.colors.gray50,
              paddingHorizontal: e.spaces.space8,
              paddingVertical: e.spaces.space12,
            },
            labelIcon: { color: e.colors.teal500, marginRight: e.spaces.space4 },
            image: { width: '100%' },
            interstitialContent: { marginBottom: e.spaces.space16 },
          }
        }),
        tr = Un(function (e) {
          var t = e.addEducationFlag,
            a = e.analytics,
            n = e.isLoggedIn,
            r = e.onEducationSheetDismiss,
            l = e.shouldShowEducation,
            o = i.a.useContext(j.a).featureSwitches,
            s = l && n && !0 === o.getValueWithoutScribeImpression('responsive_web_nft_avatar'),
            c =
              (s && o.getStringValue('responsive_web_nft_avatar_help_link')) ||
              'https://help.twitter.com/managing-your-account/nfts-on-twitter',
            u = function () {
              r(), t()
            }
          i.a.useEffect(
            function () {
              return s && a.scribe({ action: 'impression' }), u
            },
            [s],
          )
          var d = i.a.createElement(
            X.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            i.a.createElement(
              We.b,
              {
                color: 'primary',
                link: c,
                onPress: function () {
                  a.scribe({ element: 'learn_more', action: 'click' })
                },
                testID: 'learnMore',
              },
              X.a.d8af538e,
            ),
          )
          return s
            ? i.a.createElement(zn.a, {
                accessibilityRole: 'dialog',
                actionLabel: $n,
                contentStyle: er.interstitialContent,
                graphic: function () {
                  return i.a.createElement(
                    ce.a,
                    { style: er.image },
                    i.a.createElement(ee.a, { accessibilityLabel: '', aspectMode: me.a.exact(2.5), image: Dn }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: Jn,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  a.scribe({ element: 'ok_button', action: 'click' }), u()
                },
                onClose: u,
                subtext: i.a.createElement(
                  ce.a,
                  null,
                  i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(We.b, { size: 'headline2', style: er.heading, weight: 'bold' }, Qn),
                    i.a.createElement(We.b, null, d),
                  ),
                  i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(We.b, { size: 'headline2', style: er.heading, weight: 'bold' }, Xn),
                    i.a.createElement(
                      ce.a,
                      { style: er.iconContainer },
                      i.a.createElement(Wn, { style: er.icon }),
                      i.a.createElement(We.b, null, Zn),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [er.iconContainer, er.reducedMarginBottom] },
                      i.a.createElement(Xe.a, { style: er.icon }),
                      i.a.createElement(We.b, null, Yn),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [er.iconContainer, er.noMarginTop] },
                      i.a.createElement(ce.a, { style: er.icon }),
                      i.a.createElement(
                        Hn.a,
                        { style: er.label },
                        i.a.createElement(qn, { style: er.labelIcon }),
                        i.a.createElement(We.b, { weight: 'bold' }, Gn),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        ar = a('AJXH'),
        nr = a('rJoH'),
        rr = a('Y6L+'),
        lr = a('jS2K'),
        ir = a('IG4P'),
        or = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a() {
            return C()(this, a), t.apply(this, arguments)
          }
          return (
            I()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(lt.a)(e, this.props)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.shouldDisplayUserActionSheet
                  return i.a.createElement(
                    ce.a,
                    null,
                    this._renderBanner(),
                    i.a.createElement(
                      ce.a,
                      { style: [W.a.content, W.a.withheld] },
                      i.a.createElement(
                        ce.a,
                        { style: W.a.avatarAndButton },
                        this._renderAvatar(),
                        i.a.createElement(ce.a, { style: W.a.buttonAffordance }),
                        a && t && i.a.createElement(Le, { buttonStyle: W.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return i.a.createElement(re.a, null, function (e) {
                    var t = e.windowWidth >= te.a.theme.breakpoints.medium
                    return i.a.createElement(
                      ce.a,
                      { accessibilityState: { hidden: !0 }, style: W.a.avatar },
                      i.a.createElement(ne.a, {
                        accessibilityHidden: !0,
                        borderColor: 'cellBackground',
                        borderWidth: t ? 'large' : 'medium',
                        focusable: !1,
                        size: 'custom',
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderBanner',
                value: function () {
                  return i.a.createElement(
                    ce.a,
                    { style: W.a.banner },
                    i.a.createElement(pe.a, { ratio: te.a.theme.aspectRatios.profileBanner }),
                  )
                },
              },
              {
                key: '_renderNames',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.restrictedUser,
                    n = t || a,
                    r = n.name && n.screen_name,
                    l = r ? n.name : '@'.concat(n.screen_name)
                  return i.a.createElement(
                    ce.a,
                    { style: W.a.names },
                    i.a.createElement(xt.a, {
                      name: l,
                      nameSize: 'headline1',
                      screenName: r ? n.screen_name : void 0,
                      withStackedLayout: !0,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(i.a.Component),
        sr = a('wytG'),
        cr = a('VS6U'),
        ur = (a('0zG9'), a('muX9')),
        dr = function (e) {
          var t = e.screenName,
            a = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return i.a.createElement(ur.a, { script: [{ type: 'application/ld+json', innerHTML: a }] })
        },
        mr = a('ipry'),
        pr = a('E4zi'),
        fr = function (e) {
          var t,
            a,
            n,
            r = e.user,
            l =
              null === (t = r.entities) ||
              void 0 === t ||
              null === (a = t.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            o = {
              '@context': 'http://schema.org',
              '@type': 'ProfilePage',
              dateCreated: r.created_at,
              author: Object(pr.a)(r),
            }
          return (
            l && (o.relatedLink = [l.url, l.expanded_url]),
            i.a.createElement(ur.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(o, null, 2) }],
            })
          )
        },
        gr = a('Qayx'),
        hr = a('G8HL'),
        br = a('mw9i'),
        yr = a('zfvc'),
        _r = a('FIs5'),
        vr = a('Q0VY'),
        wr = a('FiRh'),
        kr = a('0yYu'),
        Er = a('k/OQ'),
        Sr = a('zCf4'),
        Fr = X.a.fa98627a,
        Cr = X.a.a2811f96,
        Tr = X.a.c6ea308b,
        Ir = X.a.d67658c0,
        Lr = X.a.ccc9153f,
        Pr = X.a.bab1f8b0,
        xr = X.a.a52b03a5,
        Mr = X.a.cc3c6989,
        Rr = 'Twitter Articles',
        Nr = X.a.add55c97,
        Br = X.a.d7b8eba9,
        Ar = X.a.c0098d49,
        Or = X.a.b721eb37,
        Kr = X.a.c4af3561,
        Ur = X.a.dbcaaab5,
        Dr = X.a.hf162fb6,
        Hr = X.a.ad7b2b38,
        zr = X.a.f19b4073,
        jr = X.a.ha62da97,
        Wr = X.a.ica87fde,
        Vr = X.a.e79ed125,
        qr = X.a.g8475f82,
        Gr = X.a.c9a1cb5d,
        Jr = X.a.e7b201dd,
        $r = X.a.d09e12c4,
        Qr = X.a.gbf342a4,
        Xr = X.a.eeab4adf,
        Yr = X.a.i144ee20,
        Zr = X.a.j58e7b00,
        el = X.a.d834ab9c,
        tl = { section: 'profile_interstitial' },
        al = Object(sr.a)(function () {
          return Promise.all([a.e(0), a.e(113)]).then(a.bind(null, '8KtR'))
        }),
        nl = Object(sr.a)(function () {
          return Promise.all([a.e(0), a.e(113)]).then(a.bind(null, 'cFl3'))
        }),
        rl = Object(sr.a)(function () {
          return Promise.all([a.e(0), a.e(113)]).then(a.bind(null, 'ivpD'))
        }),
        ll = Object(sr.a)(function () {
          return Promise.all([a.e(0), a.e(113)]).then(a.bind(null, 'ylAD'))
        }),
        il = 'about',
        ol = 'likes',
        sl = 'media',
        cl = 'reactions',
        ul = 'superfollows',
        dl = 'twitter-articles',
        ml = 'with_replies',
        pl = 36e5,
        fl = Object(An.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        gl = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a(e, n) {
            var r
            return (
              C()(this, a),
              (r = t.call(this, e, n)),
              A()(
                P()(r),
                '_safetyModeViolatorExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              A()(
                P()(r),
                '_safetyModeUserExperienceEnabled',
                r.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              A()(
                P()(r),
                '_shouldEnableProfessionalCategoryLabelViewing',
                r.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              A()(
                P()(r),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                r.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              A()(
                P()(r),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                r.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              A()(
                P()(r),
                '_canViewTwitterArticles',
                r.context.featureSwitches.isTrue('responsive_web_twitter_article_view_enabled'),
              ),
              A()(P()(r), '_renderContainer', function () {
                var e = r.props,
                  t = e.fetchStatus,
                  a = e.isNotFound,
                  n = e.isRefreshing,
                  l = e.isSuspended,
                  o = e.screenName,
                  s = l || a
                return i.a.createElement(
                  ir.a,
                  { isRefreshing: n, onRefresh: r._handlePullToRefresh },
                  i.a.createElement(
                    ce.a,
                    { style: bl.containerGrow },
                    i.a.createElement(
                      br.a,
                      null,
                      i.a.createElement(Pn.a, {
                        accessibilityLabel: Lr({ screenName: o }),
                        fetchStatus: s ? c.a.LOADED : t,
                        onRequestRetry: r._handleRequestRetry,
                        render: r._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              A()(P()(r), '_renderHeaderAndContent', function () {
                var e = r.state.showNftAvatarEducation
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  e && i.a.createElement(tr, { onEducationSheetDismiss: r._handleOnDismissNftAvatarEducation }),
                  r._renderHeader(),
                  r._renderContent(),
                )
              }),
              A()(P()(r), '_renderContent', function () {
                var e = r.props,
                  t = e.isNotFound,
                  a = e.isSuspended,
                  n = e.isWithheld,
                  l = e.user,
                  i = r.state.showBlockedTweets,
                  o = r._isViewingOwnProfile()
                return a
                  ? r._renderUserProfileSuspended()
                  : t
                  ? r._renderUserNotFound()
                  : n && o
                  ? r._renderLoggedInUserProfileWithheld()
                  : n
                  ? r._renderUserProfileWithheld()
                  : r._shouldShowProfileInterstitial()
                  ? r._renderUserProfileInterstitialed()
                  : l && l.smart_blocked_by && r._safetyModeViolatorExperienceEnabled
                  ? r._renderUserProfileAutoblockedBy()
                  : l && l.blocked_by
                  ? r._renderUserProfileBlockedBy()
                  : l && l.smart_blocking && !i && r._safetyModeUserExperienceEnabled
                  ? r._renderUserProfileSmartBlocking()
                  : l && l.blocking && !i
                  ? r._renderUserProfileBlocking()
                  : r._isProtectedFromViewer()
                  ? r._renderUserProfileProtected()
                  : r._renderUserProfileDefault()
              }),
              A()(P()(r), '_isViewingOwnProfile', function () {
                var e = r.context.loggedInUserId,
                  t = r.props.user
                return t && e === t.id_str
              }),
              A()(P()(r), '_shouldShowProfileInterstitial', function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : r.props.userProfileInterstitialType,
                  t = r.props,
                  a = t.displaySensitiveMedia,
                  n = t.user
                if (!n || !e) return !1
                var l = r.state,
                  i = l.showBlockedTweets,
                  o = l.userProfileInterstitialDismissed,
                  s = n.blocking && !i,
                  c = n.blocked_by,
                  u = e === mr.a.SensitiveMedia || e === mr.a.OffensiveProfileContent,
                  d = u && (n.following || a || Bn.b)
                return !(r._isViewingOwnProfile() || r._isProtectedFromViewer() || s || c || o || d)
              }),
              A()(P()(r), '_isProtectedFromViewer', function () {
                var e = r.props.user
                return e && e.protected && !r._isViewingOwnProfile() && !e.following
              }),
              A()(P()(r), '_handleRequestRetry', function () {
                r._fetchOneUserIfNeeded(r.props)
              }),
              A()(P()(r), '_handlePullToRefresh', function () {
                var e = r.props.user
                e ? r._fetchOneUser(e.id_str) : r._fetchOneUserIfNeeded(r.props)
              }),
              A()(P()(r), '_handleShowActionedTweets', function () {
                var e = r.props,
                  t = e.history,
                  a = e.user
                a && t.push('/settings/safety_mode/actioned_tweets/'.concat(a.id_str))
              }),
              A()(P()(r), '_handleShowBlockedTweets', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace,
                  n = e.user
                r.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    r._safetyModeUserExperienceEnabled &&
                    t(S()(S()({}, a), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              A()(P()(r), '_handleOnConfirmProfileInterstitial', function () {
                var e = r.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace
                r.setState({ userProfileInterstitialDismissed: !0 }),
                  t(S()(S()(S()({}, a), tl), {}, { action: 'click' }))
              }),
              A()(P()(r), '_handleOnDismissNftAvatarEducation', function () {
                r.setState({ showNftAvatarEducation: !1 })
              }),
              A()(P()(r), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  a = e.fetchStatus,
                  n = r.props.recordTTFL
                if ((a === c.a.FAILED && (r._shouldRecordTTFL = !1), r._shouldRecordTTFL && t.length)) {
                  var l = t.some(function (e) {
                    return e.type === Tn.b.Tweet
                  })
                  r._shouldRecordTTFL = !1
                  l && n('profile', { source: 'graphql' })
                }
              }),
              A()(P()(r), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                r.setState({ showFollowButtonRightControl: t })
              }),
              A()(P()(r), '_getSmartBlockEndTimeSentence', function () {
                var e = r.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    a = parseInt(e.smart_blocking_expiration, 10),
                    n = a > t ? a - t : 0
                  if (n <= 72e5) return Ur
                  var l = Math.floor(n / pl),
                    i = Math.floor(l / 24),
                    o = l % 24
                  return 0 === i
                    ? zr({ hourCount: o })
                    : 0 === o
                    ? Hr({ dayCount: i })
                    : Dr({ dayCount: i, hourCount: o })
                }
                return ''
              }),
              A()(P()(r), '_getProfessionalCategory', function () {
                var e,
                  t,
                  a = r.props.user
                return null == a ||
                  null === (e = a.professional) ||
                  void 0 === e ||
                  null === (t = e.category) ||
                  void 0 === t
                  ? void 0
                  : t[0]
              }),
              A()(P()(r), '_shouldDisplayProfessionalCategoryLabel', function () {
                var e = r._isViewingOwnProfile()
                if (r._shouldEnableProfessionalCategoryLabelHoldback && !e) return !1
                if (
                  (!e && r._shouldEnableProfessionalCategoryLabelViewing) ||
                  (e && r._shouldEnableProfessionalCategoryLabelDisplaySwitch)
                ) {
                  var t,
                    a = r._getProfessionalCategory()
                  return !!a && (null === (t = null == a ? void 0 : a.display) || void 0 === t || t)
                }
              }),
              A()(P()(r), '_getProfessionalCategoryNameIfDisplayable', function () {
                var e
                return r._shouldDisplayProfessionalCategoryLabel()
                  ? null === (e = r._getProfessionalCategory()) || void 0 === e
                    ? void 0
                    : e.name
                  : void 0
              }),
              (r._shouldRecordTTFL = !0),
              (r._shouldRecordTTFMC = !0),
              (r.state = {
                userProfileInterstitialDismissed: !1,
                showBlockedTweets: !1,
                showFollowButtonRightControl: !1,
                showNftAvatarEducation: !1,
              }),
              r
            )
          }
          return (
            I()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    n = t.fetchSettingsIfNeeded,
                    r = t.fetchTwitterArticlesIfNeeded,
                    l = t.scribeAction,
                    i = t.scribeNamespace,
                    o = t.user
                  this._fetchOneUserIfNeeded(this.props).then(function () {
                    e._isUserAutoblocked() &&
                      l(
                        S()(S()({}, i), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' }),
                      ),
                      e._isUserAutoblocking() &&
                        l(
                          S()(
                            S()({}, i),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && l(S()(S()({}, i), K.c())),
                    n()
                      .catch(a())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && l(S()(S()(S()({}, i), tl), {}, { action: 'impression' }))
                      }),
                    this._canViewTwitterArticles && null != o && o.id_str && r(o.id_str, !0).catch(a())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t,
                    a = this.props,
                    n = a.createLocalApiErrorHandler,
                    r = a.fetchStatus,
                    l = a.fetchTwitterArticlesIfNeeded,
                    i = a.recordTTFMC,
                    o = a.user
                  if (e.fetchStatus !== r && r === c.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (
                    this._shouldRecordTTFMC &&
                    e.fetchStatus !== r &&
                    r === c.a.LOADED &&
                    this._isValidProfile()
                  ) {
                    i('profile', { source: 'graphql' }), (this._shouldRecordTTFMC = !1)
                  }
                  e.user &&
                    !e.user.blocking &&
                    this.props.user &&
                    this.props.user.blocking &&
                    (window.scrollTo(0, 0), this.setState({ showBlockedTweets: !1 })),
                    this._canViewTwitterArticles &&
                      o &&
                      o.id_str !== (null === (t = e.user) || void 0 === t ? void 0 : t.id_str) &&
                      l(o.id_str, !0).catch(n())
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props,
                    a = t.screenName,
                    n = t.scribeAction,
                    r = t.scribeNamespace,
                    l = t.userProfileInterstitialType
                  e.screenName !== a
                    ? (this._fetchOneUserIfNeeded(e), this.setState({ userProfileInterstitialDismissed: !1 }))
                    : !l &&
                      this._shouldShowProfileInterstitial(e.userProfileInterstitialType) &&
                      n(S()(S()(S()({}, r), tl), {}, { action: 'impression' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    a = t.fetchStatus,
                    n = t.history,
                    r = t.isIntentRoute,
                    l = t.isNotFound,
                    o = t.isSuspended,
                    s = t.isWithheld,
                    u = t.location,
                    d = t.screenName,
                    m = t.user,
                    p = t.userLanguage,
                    f = this._isViewingOwnProfile(),
                    g = o || l || (s && !f),
                    h = m ? Tr({ screenName: m.screen_name, fullName: m.name }) : void 0,
                    b = f ? '' : '@'.concat((m && m.screen_name) || d || '', ' '),
                    y = g ? null : i.a.createElement(xn.a, { getLocationState: fl(b), history: n }),
                    _ =
                      m && !g
                        ? i.a.createElement(xt.a, {
                            isProtected: m.protected,
                            isVerified: m.verified,
                            name: m.name,
                            screenName: m.screen_name,
                            withScreenName: !1,
                          })
                        : Fr,
                    v = m && !g && a === c.a.LOADED ? this._renderSubtitle(m) : void 0,
                    w = m && 'twitter://user?screen_name='.concat(m.screen_name),
                    k = m && 'https://twitter.com/'.concat(m.screen_name || ''),
                    E = m && Ir({ fullName: m.name, screenName: m.screen_name })
                  return i.a.createElement(cr.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: b },
                    documentTitle: h,
                    history: n,
                    primaryContent: i.a.createElement(
                      In.a,
                      { fab: y },
                      i.a.createElement(nr.a, {
                        canonical: k,
                        description: null == m ? void 0 : m.description,
                        image: null == m ? void 0 : m.profile_image_url_https,
                        title: E,
                        type: 'profile',
                      }),
                      Bn.b && m
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(fr, { user: m }),
                            i.a.createElement(Rn.a, { description: null == m ? void 0 : m.description }),
                          )
                        : null,
                      i.a.createElement(D.a, { deepLink: w }),
                      i.a.createElement(H.a, {
                        featureSwitches: this.context.featureSwitches,
                        loggedInUserId: e,
                        pageType: 'profile',
                        userLanguage: p,
                      }),
                      k ? i.a.createElement(U.a, { canonical: k }) : null,
                      i.a.createElement(Pn.a, {
                        accessibilityLabel: Lr({ screenName: d }),
                        fetchStatus: m || g ? c.a.LOADED : a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      r
                        ? i.a.createElement(Nn.a, { history: n, location: u, userId: null == m ? void 0 : m.id_str })
                        : null,
                    ),
                    rightControl: this._renderRightControl(),
                    sidebarContent: this._renderSidebarContent(),
                    subtitle: v,
                    title: _,
                  })
                },
              },
              {
                key: '_renderRightControl',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    a = e.user,
                    n = this.state.showFollowButtonRightControl
                  return a && !this._isViewingOwnProfile()
                    ? i.a.createElement(
                        yr.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        i.a.createElement(ye.a, { promotedContent: t, userId: a.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    a = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(a, '/').concat(ol)) > -1
                    ? i.a.createElement(gr.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(a, '/').concat(cl)) > -1
                    ? i.a.createElement(gr.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(a, '/').concat(sl)) > -1
                    ? i.a.createElement(gr.a, { count: e.media_count, type: 'media' })
                    : i.a.createElement(gr.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? i.a.createElement(lr.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(_n.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : i.a.createElement(z.a, null)
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    a = t.history,
                    n = t.isActiveCreator,
                    r = t.isNotFound,
                    l = t.isSuspended,
                    i = t.isWithheld,
                    o = t.profileHeaderRenderer,
                    s = t.promotedContent,
                    c = t.restrictedProfileHeaderRenderer,
                    u = t.screenName,
                    d = t.superFollowersCount,
                    m = t.user,
                    p = this._shouldShowProfileInterstitial(),
                    f = !this._isViewingOwnProfile() && (l || r || p),
                    g = this._getProfessionalCategoryNameIfDisplayable()
                  return f
                    ? c({
                        shouldDisplayUserActionSheet: !l && !r,
                        fullUser: m,
                        restrictedUser: { name: (m || {}).name, screen_name: u || '' },
                      })
                    : m
                    ? o({
                        history: a,
                        loggedInUserId: e,
                        isActiveCreator: n,
                        isWithheld: i,
                        onFollowButtonOffscreen: this._handleFollowButtonOffscreen,
                        promotedContent: s,
                        superFollowersCount: d,
                        user: m,
                        professionalCategoryName: g,
                      })
                    : null
                },
              },
              {
                key: '_renderEmptyState',
                value: function (e) {
                  var t = e.buttonText,
                    a = e.buttonType,
                    n = e.header,
                    r = e.message,
                    l = e.onButtonPress,
                    o = e.onSecondaryButtonPress,
                    s = e.secondaryButtonText,
                    c = e.secondaryButtonType,
                    u = this.props,
                    d = u.isSuspended,
                    m = u.screenName
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    Bn.b && d && m
                      ? i.a.createElement(dr, { screenName: m })
                      : Bn.b
                      ? i.a.createElement(ar.a, null)
                      : null,
                    i.a.createElement(_r.a, {
                      buttonText: t,
                      buttonType: a,
                      header: n,
                      message: r,
                      onButtonPress: l,
                      onSecondaryButtonPress: o,
                      secondaryButtonText: s,
                      secondaryButtonType: c,
                      style: yl.root,
                    }),
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(Mn.a)(e),
                    a = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: el,
                    onButtonPress: this._handleOnConfirmProfileInterstitial,
                  })
                },
              },
              {
                key: '_renderUserProfileBlocking',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = Vr({ screenName: t }),
                    n = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      i.a.createElement(We.b, { link: 'https://support.twitter.com/articles/117063' }, X.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: Xr,
                    onButtonPress: this._handleShowBlockedTweets,
                  })
                },
              },
              {
                key: '_renderUserProfileSmartBlocking',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = this._getSmartBlockEndTimeSentence(),
                    a = e.screen_name,
                    n = jr({ screenName: a }),
                    r = i.a.createElement(We.b, { color: 'gray700', weight: 'bold' }),
                    l = i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(
                        We.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space20 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          i.a.cloneElement(r, null, X.a.g6645d94({ screenName: a })),
                        ),
                      ),
                      i.a.createElement(
                        We.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space8 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          i.a.cloneElement(r, null, X.a.g08eceae({ screenName: a })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: l,
                    buttonText: Yr,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: Zr,
                    secondaryButtonType: 'primaryOutlined',
                    onButtonPress: this._handleShowActionedTweets,
                    onSecondaryButtonPress: this._handleShowBlockedTweets,
                  })
                },
              },
              {
                key: '_renderUserProfileBlockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      i.a.createElement(We.b, { link: 'https://support.twitter.com/articles/20172060' }, X.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Wr, message: a })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(We.b, { style: { paddingBottom: te.a.theme.spaces.space20 } }),
                    n = i.a.createElement(We.b, { weight: 'bold' }),
                    r = i.a.createElement(We.b, { style: { paddingBottom: te.a.theme.spaces.space4 }, weight: 'bold' }),
                    l = i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(
                        We.b,
                        { style: { paddingBottom: te.a.theme.spaces.space20 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'a496f1c8' },
                          i.a.cloneElement(n, null, X.a.e8bc24ae({ screenName: t })),
                        ),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'd0271e51' },
                        i.a.cloneElement(a, null, X.a.ff050532),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        i.a.createElement(
                          We.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: te.a.theme.spaces.space20 },
                          },
                          X.a.b48bd8bf,
                        ),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'h9bd2805' },
                        i.a.cloneElement(a, null, X.a.ia457a19),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        i.a.cloneElement(r, null, X.a.f5531a44),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        i.a.cloneElement(a, null, X.a.h173a610),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        i.a.cloneElement(r, null, X.a.ha985c95),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        i.a.cloneElement(a, null, X.a.d5d82dd3),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        i.a.cloneElement(r, null, X.a.i4b9b3d0),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        i.a.cloneElement(a, null, X.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: Kr, message: l })
                },
              },
              {
                key: '_renderUserProfileSuspended',
                value: function () {
                  var e,
                    t = this.props.suspendMessage
                  return (
                    (e = t
                      ? i.a.createElement(wt.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                      : i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'f6fa2033' },
                          i.a.createElement(We.b, { link: 'https://support.twitter.com/articles/18311' }, X.a.f3b1bdc1),
                        )),
                    this._renderEmptyState({ header: qr, message: e })
                  )
                },
              },
              {
                key: '_renderUserProfileWithheld',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.description,
                    a = e.entities,
                    n = e.id_str
                  if (!t) return null
                  var r = vr.a.descriptionTextParts(t, a),
                    l = i.a.createElement(
                      We.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      r.map(function (e, t) {
                        return i.a.createElement(wr.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: Qr, message: l })
                },
              },
              {
                key: '_renderLoggedInUserProfileWithheld',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.description,
                    a = e.entities,
                    n = e.id_str
                  if (!t) return null
                  var r = vr.a.descriptionTextParts(t, a)
                  return i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: bl.withheldMessageRoot },
                      i.a.createElement(
                        We.b,
                        { align: 'center', size: 'title4', style: bl.withheldMessageHeader, weight: 'bold' },
                        Qr,
                      ),
                      i.a.createElement(
                        We.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        r.map(function (e, t) {
                          return i.a.createElement(wr.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    i.a.createElement(kr.a, null),
                    this._renderUserProfileDefault(),
                  )
                },
              },
              {
                key: '_renderUserProfileProtected',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      i.a.createElement(We.b, { link: 'https://support.twitter.com/articles/14016' }, X.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: $r, message: a })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Gr, message: Jr })
                },
              },
              {
                key: '_renderUserProfileDefault',
                value: function () {
                  var e = this.props,
                    t = e.hasTwitterArticles,
                    a = e.history.location,
                    n = e.isActiveCreator,
                    l = e.twitterArticlesFetchStatus,
                    o = e.user
                  if (!o) return null
                  var s = o.screen_name,
                    c = this.state.showBlockedTweets,
                    u = a.query,
                    d = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    m = (this._isViewingOwnProfile() && n) || o.super_following,
                    p = this.context.featureSwitches.isTrue('profile_foundations_about_tab_enabled'),
                    f = this._canViewTwitterArticles && t,
                    g = function (e) {
                      var t = d ? Ar : Br
                      return [
                        p
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(il), query: u },
                              key: Or,
                              label: Or,
                              onClick: e(),
                            }
                          : void 0,
                        {
                          isActive: function () {
                            return (
                              a.pathname.toLowerCase() === '/'.concat(s).toLowerCase() ||
                              a.pathname.toLowerCase() === '/'.concat(s, '/').toLowerCase() ||
                              a.pathname.indexOf('/intent/follow') > -1 ||
                              a.pathname.indexOf('/intent/user') > -1
                            )
                          },
                          to: { pathname: '/'.concat(s), query: u },
                          key: Pr,
                          label: Pr,
                        },
                        { to: { pathname: '/'.concat(s, '/').concat(ml), query: u }, key: xr, label: xr },
                        m
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(ul), query: u },
                              key: Mr,
                              label: Mr,
                              color: 'plum500',
                            }
                          : void 0,
                        f
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(dl), query: u },
                              key: Rr,
                              label: Rr,
                              onClick: e(),
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(s, '/').concat(sl), query: u }, key: Nr, label: Nr, onClick: e() },
                        {
                          to: { pathname: '/'.concat(s, '/').concat(d ? cl : ol), query: u },
                          key: t,
                          label: t,
                          onClick: e(),
                        },
                      ]
                    },
                    h = { displayBlocked: c, fullName: o.name, screenName: o.screen_name, userId: o.id_str },
                    b = { isActiveCreator: n, isSuperFollowing: o.super_following }
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(vn.a, null, function (e) {
                      return i.a.createElement(Er.a, { accessibilityLabel: Cr, links: g(e) })
                    }),
                    i.a.createElement(
                      Sr.d,
                      null,
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/intent/follow' },
                        i.a.createElement(al, r()({}, h, b)),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/intent/user' },
                        i.a.createElement(al, r()({}, h, b)),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/'.concat(rr.J) },
                        i.a.createElement(al, r()({}, h, b, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/'.concat(rr.J, '/').concat(ml) },
                        i.a.createElement(al, r()({}, h, b, { mode: 'with_replies' })),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/'.concat(rr.J, '/').concat(ul) },
                        i.a.createElement(al, r()({}, h, b, { mode: 'superfollows' })),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/'.concat(rr.J, '/').concat(dl) },
                        i.a.createElement(nl, r()({}, h, { hasTwitterArticles: t, twitterArticlesFetchStatus: l })),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/'.concat(rr.J, '/').concat(sl) },
                        i.a.createElement(ll, h),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/'.concat(rr.J, '/(').concat(ol, '|').concat(cl, ')') },
                        i.a.createElement(rl, h),
                      ),
                      i.a.createElement(
                        Sr.b,
                        { exact: !0, path: '/'.concat(rr.J, '/').concat(il) },
                        i.a.createElement(al, r()({}, h, b, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_fetchOneUserIfNeeded',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    a = e.fetchOneByScreenNameWithExtraFieldsIfNeeded,
                    n = e.screenName
                  return n ? a(n).catch(t(Ln.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(a(Ln.a))
                },
              },
              {
                key: '_isUserAvatarVerified',
                value: function () {
                  var e = this.props.user
                  return null == e ? void 0 : e.has_nft_avatar
                },
              },
              {
                key: '_isUserAutoblocked',
                value: function () {
                  var e = this.props.user
                  return (null == e ? void 0 : e.smart_blocked_by) && this._safetyModeViolatorExperienceEnabled
                },
              },
              {
                key: '_isUserAutoblocking',
                value: function () {
                  var e = this.props.user
                  return (null == e ? void 0 : e.smart_blocking) && this._safetyModeUserExperienceEnabled
                },
              },
              {
                key: '_shouldHideMediaModule',
                value: function () {
                  var e = this.props.user
                  return (
                    this._shouldShowProfileInterstitial() ||
                    this._isProtectedFromViewer() ||
                    (e && (e.blocked_by || (e.blocking && !this.state.showBlockedTweets)))
                  )
                },
              },
              {
                key: '_isValidProfile',
                value: function () {
                  var e = this.props,
                    t = e.isNotFound,
                    a = e.isSuspended,
                    n = e.isWithheld,
                    r = e.user
                  return (
                    r &&
                    !r.blocking &&
                    !r.smart_blocking &&
                    !r.smart_blocked_by &&
                    !r.blocked_by &&
                    !this._isViewingOwnProfile() &&
                    !this._isProtectedFromViewer() &&
                    !a &&
                    !t &&
                    !n &&
                    !this._shouldShowProfileInterstitial()
                  )
                },
              },
            ]),
            a
          )
        })(i.a.Component)
      A()(gl, 'contextType', j.a),
        A()(gl, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return i.a.createElement(Cn, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return i.a.createElement(or, e)
          },
          recordTTFL: O.c,
          recordTTFMC: O.d,
        })
      var hl = Object(hr.a)(gl),
        bl = te.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        yl = te.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
            },
          }
        }),
        _l = function (e) {
          return i.a.createElement(k.a, { userId: e.user && e.user.id_str }, function (t) {
            var a = t.scribeNamespace
            return i.a.createElement(hl, r()({}, e, { scribeNamespace: a }))
          })
        }
      t.default = w(_l)
    },
    nUER: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'LocationSpotlight_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '9c8dfb09cccf9c8338bfa02a25fe4c6b',
      }
      t.default = n
    },
  },
])
//# sourceMappingURL=WIPED
