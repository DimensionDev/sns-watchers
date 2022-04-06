;(window.webpackJsonp = window.webpackJsonp || []).push([
  [112],
  {
    '+wNI': function (e, t, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlight_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocking',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocked_by',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.following',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'NewsletterSpotlight_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'd3fe5f39133b70486d5ac648188277f1',
      }
      e.exports = n
    },
    '0zj1': function (e, t, a) {
      'use strict'
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
      e.exports = n
    },
    M8le: function (e, t, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ProfileSpotlights_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'ProfileSpotlight_user' },
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
        ],
        type: 'User',
        abstractKey: null,
        hash: '22374cd757dd88b876f7fae791fed3af',
      }
      e.exports = n
    },
    S97D: function (e, t, a) {
      'use strict'
      var n,
        l,
        r,
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
                args: (l = [
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
                args: l,
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
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                      r,
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
                  {
                    alias: null,
                    args: null,
                    filters: null,
                    handle: 'user',
                    key: '',
                    kind: 'LinkedHandle',
                    name: 'result',
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '5s4wPDT21f_PGsSCLP5Vrw',
            metadata: {},
            name: 'ProfileSpotlightsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(s.hash = '63e29ef0bb520445ada0b0d42a1ef0b2'), (e.exports = s)
    },
    'Xcj+': function (e, t, a) {
      'use strict'
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
      e.exports = n
    },
    bu6k: function (e, t, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NewsletterSpotlight_revueModule',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'NewsletterSummary_revueModule' },
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
        ],
        type: 'RevueModule',
        abstractKey: null,
        hash: '56cd2f5b7f96b0662c25700e8a271ce6',
      }
      e.exports = n
    },
    cFl3: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserTwitterArticlesScreen', function () {
          return f
        })
      var n = a('ERkP'),
        l = a.n(n),
        r = a('v6aA'),
        i = a('v//M'),
        o = a('3XMw'),
        s = a.n(o),
        c = a('5FtR'),
        u = a('rHpw'),
        d = a('c6pJ'),
        m = a('MWbm'),
        p = s.a.i9028824,
        f = function (e) {
          var t = l.a.useContext(r.a).featureSwitches,
            a = e.hasTwitterArticles,
            n = e.screenName,
            o = e.twitterArticlesFetchStatus,
            s = e.userId,
            u = t.isTrue('responsive_web_twitter_article_view_enabled'),
            f = l.a.createElement(c.a, { to: '/'.concat(n) })
          return u
            ? l.a.createElement(i.a, {
                accessibilityLabel: p,
                fetchStatus: o,
                render: function () {
                  return a
                    ? l.a.createElement(
                        m.a,
                        { style: g.container },
                        l.a.createElement(d.a, { linkToEditScreen: !1, publishedOnly: !0, userId: s }),
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
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NewsletterSpotlight_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followed_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.following',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '77582fe18d57576dc8cb577dcb920757',
      }
      e.exports = n
    },
    hyc7: function (e, t, a) {
      'use strict'
      var n,
        l = {
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
      ;(l.hash = '6c1b219d8c7a7d1ed5760493b1003276'), (e.exports = l)
    },
    'll/Q': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UserProfileScreenContainer', function () {
          return cr
        })
      var n = a('97Jx'),
        l = a.n(n),
        r = a('ERkP'),
        i = a.n(r),
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
              l = b(e, t)
            return n || (l && l.promoted_content)
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
          function (e, t, a, n, l, r, i, o, s, c, u, d, m, p, f, g, h) {
            return {
              displaySensitiveMedia: e,
              fetchStatus: t,
              hasTwitterArticles: a,
              isActiveCreator: n,
              isIntentRoute: l,
              isNotFound: r,
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
          scribeAction: u.scribeAction,
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
        R = a.n(x),
        M = a('2VqO'),
        B = a.n(M),
        N = a('KEM+'),
        O = a.n(N),
        A =
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
        W = a('es0u'),
        j = (a('hBvt'), a('v6aA')),
        z = a('I/ms'),
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
        Y = a('3XMw'),
        Q = a.n(Y),
        X = a('FGLp'),
        Z = a('B5iK')
      var ee = a('TIdA'),
        te = a('rHpw'),
        ae = a('1I0O'),
        ne = a('jhWN'),
        le = a('cHvH'),
        re = ee.a.createLayoutCache(),
        ie = $(function (e) {
          var t,
            a,
            n,
            r,
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
            Object(X.a)(function () {
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
              ? ((o = g.accessibilityLabel), (r = g.link))
              : _ ||
                (k
                  ? ((o = oe.opensNFTDetails), (r = { pathname: '/'.concat(p.screen_name, '/nft') }))
                  : ((o = oe.opensProfilePhoto), (r = { pathname: '/'.concat(p.screen_name, '/photo') })))
          var F = function (e) {
              s.scribe({ element: k ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            C = function (e) {
              var t = e.windowWidth >= te.a.theme.breakpoints.medium,
                a = {
                  accessibilityLabel: o,
                  imageLayoutCache: re,
                  link: r,
                  onClick: F,
                  size: 'custom',
                  uri: v,
                  screenName: p.screen_name,
                }
              return g && E
                ? i.a.createElement(ae.a, l()({}, a, { presenceRingType: g.presenceRingType, style: z.a.avatar }))
                : i.a.createElement(
                    ne.a,
                    l()({}, a, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: z.a.avatar,
                    }),
                  )
            }
          return i.a.createElement(le.a, null, C)
        }),
        oe = { opensProfilePhoto: Q.a.f30795df, opensNFTDetails: Q.a.a270100c },
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
            l = !t && a,
            r = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            o = r && ue.a.get(r),
            s = o ? Object(se.g)(o) : te.a.theme.colors.gray200
          return !l && n.profile_banner_url
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
                { style: z.a.banner },
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
        Te = Q.a.h63a5c3b,
        Ie = i.a.createElement(Se.a, null),
        Le = (function (e) {
          R()(a, e)
          var t = B()(a)
          function a() {
            var e
            C()(this, a)
            for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              O()(P()(e), '_renderUserMenu', function (t) {
                var a = e.props,
                  n = a.promotedContent,
                  l = a.user
                return i.a.createElement(Ce.b, { onClose: t, promotedContent: n, user: l, view: 'profile' })
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
        xe = Q.a.g7088266,
        Re = Q.a.gd7acb84,
        Me = Q.a.b7636014,
        Be = i.a.createElement(_e.a, null),
        Ne = te.a.create(function (e) {
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
        Oe = function (e) {
          var t = e.history,
            a = e.isWithheld,
            n = e.loggedInUserId,
            l = e.onFollowButtonOffscreen,
            r = e.promotedContent,
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
            { style: Ne.buttons },
            n && c
              ? i.a.createElement(
                  Ee.a,
                  {
                    link: h ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Ne.lastButton,
                    testID: we.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  h ? Re : xe,
                )
              : null,
            f && i.a.createElement(Le, { buttonStyle: Ne.button, promotedContent: r, user: o }),
            !c &&
              p &&
              i.a.createElement(Ee.a, {
                accessibilityLabel: Me,
                hoverLabel: { label: Me },
                icon: Be,
                onPress: function () {
                  if (n) {
                    var e = Object(he.a)(o.id_str, n)
                    s.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: Pe.j.ONE_TO_ONE,
                        inbox_type: Pe.e.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Ne.button,
                testID: we.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              g &&
              i.a.createElement(be.a, {
                allowPromptForPush: !0,
                isFollowing: o.notifications,
                style: Ne.button,
                userId: o.id_str,
              }),
            !c &&
              !u &&
              !m &&
              i.a.createElement(
                ve.a,
                { onOffscreenChange: l },
                i.a.createElement(ye.a, { promotedContent: r, style: Ne.lastButton, userId: o.id_str }),
              ),
          )
        },
        Ae = a('tOzk'),
        Ke = a('YeIG'),
        Ue = a('Je1/'),
        De = a('uLiA'),
        He = a('EJJl'),
        We = a('WWyu'),
        je = a('LhSm'),
        ze = a('t62R'),
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
        Ye = a('KrGU'),
        Qe = a('I/9y'),
        Xe = a('YUdS'),
        Ze = a('EjKN'),
        et = Q.a.a1ea2f12,
        tt = Q.a.g8191e77,
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
        lt = function (e) {
          var t,
            a,
            n,
            l = e.isOwnProfile,
            r = e.professionalCategoryName,
            o = e.user,
            s = i.a.useRef(),
            c = Object(ke.b)(),
            u = l ? { page: 'me' } : { page: 'profile' },
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
                ze.b,
                { style: nt.detailsText, testID: De.a.profileHeaderItems },
                r
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
                      i.a.createElement(ze.b, null, r),
                    )
                  : null,
                o.location && !Object(Ve.a)(o.location)
                  ? i.a.createElement(
                      Ue.a,
                      { Icon: Ye.a, testID: De.a.userLocation },
                      i.a.createElement(ze.b, null, o.location),
                    )
                  : null,
                d && d.url
                  ? i.a.createElement(
                      Ue.a,
                      { Icon: Qe.a, link: { pathname: d.url, external: !0 }, testID: De.a.userUrl },
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
                          Icon: Xe.a,
                          onPress: function () {
                            s.current && s.current.launch()
                          },
                        },
                        l ? et : tt,
                      ),
                      i.a.createElement(Ae.a, {
                        setRef: function (e) {
                          s.current = e
                        },
                      }),
                    )
                  : i.a.createElement(
                      Ue.a,
                      { Icon: Ze.a, testID: De.a.userBirthdate },
                      i.a.createElement(We.a, { birthdate: m, withBornPrefixText: !0 }),
                    ),
                i.a.createElement(je.a, { joinDate: o.created_at }),
              ),
            ),
          )
        },
        rt = a('mN6z'),
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
        ft = Q.a.cef4e8cf,
        gt = Q.a.ec294e62,
        ht = Q.a.df422dfe,
        bt = te.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        yt = ut(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            n = e.unmute,
            l = e.user,
            r = i.a.useState(!1),
            o = st()(r, 2),
            s = o[0],
            c = o[1],
            u = l.screen_name
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              ze.b,
              { color: 'gray700', style: bt.mute },
              ht,
              ' ',
              i.a.createElement(
                ze.b,
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
                      n(l.id_str).then(function () {
                        return t({ text: Object(pt.d)(l.screen_name) })
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
        Ft = Q.a.e839db39,
        Ct = Q.a.b74bd6c6,
        Tt = Q.a.f15bfdb3,
        It = Q.a.i859a9d3,
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
          var l = i.a.useCallback(
            function () {
              n.scribe({ component: 'blue_badge_education_context', element: 'support_url', action: 'click' })
            },
            [n],
          )
          return i.a.createElement(
            ce.a,
            { style: Lt.content },
            i.a.createElement(St.a, { style: Lt.icon }),
            i.a.createElement(ze.b, { size: 'title4', style: Lt.text, weight: 'bold' }, Tt),
            i.a.createElement(
              ze.b,
              { color: 'gray700', style: Lt.text },
              Ct,
              ' ',
              i.a.createElement(
                ze.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: l },
                It,
              ),
            ),
            'sheet' === a
              ? i.a.createElement(Ee.a, { onClick: t, style: Lt.button, type: 'primaryOutlined' }, Ft)
              : null,
          )
        },
        xt = a('jV+4'),
        Rt = a('ir4X'),
        Mt = function (e) {
          var t,
            a = e.isOwnProfile,
            n = e.isWithheld,
            r = e.namespace,
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
                        s.scribe(S()(S()({}, r), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: o.highlightedLabel.longDescription.text,
                    })
                  : (null === (_ = o.highlightedLabel) || void 0 === _ ? void 0 : _.description) || null
            h = g ? S()(S()({}, o.highlightedLabel), {}, { description: v }) : null
          }
          return i.a.createElement(
            ce.a,
            { style: z.a.names, testID: kt },
            i.a.createElement(
              xt.a,
              l()({}, u, {
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
            h ? i.a.createElement(Rt.a, { isIconLarge: !0, label: h }) : null,
          )
        },
        Bt = (a('uFXj'), a('W55q')),
        Nt = a('YeSc'),
        Ot = { page: 'profile', section: void 0, component: 'newsletter_module' },
        At = Object(V.a)()
          .propsFromState(function () {
            return { newsletter: Nt.f }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n = e.newsletter,
              l =
                null == n || null === (t = n.data) || void 0 === t
                  ? void 0
                  : t.revue_account.account_settings.twitter_profile_subscriptions_enabled
            return {
              isSubscribed:
                (null == n || null === (a = n.context) || void 0 === a ? void 0 : a.user_subscription_status) ===
                Bt.c.Subscribed,
              profileUrl: null == n ? void 0 : n.data.revue_account.profile_info.profile_url,
              revueAccountId: null == n ? void 0 : n.config.revue_account_id,
              showNewsletterSubscription: l,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_PROFILE_HEADER',
              ),
              fetchUserBizProfileIfNeeded: Nt.c,
            }
          })
          .withAnalytics(Ot),
        Kt = Object(V.a)()
          .propsFromState(function () {
            return { newsletter: Nt.f }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              n,
              l,
              r,
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
                null === (l = n.profile_image) ||
                void 0 === l ||
                null === (r = l.image_variants) ||
                void 0 === r
                  ? void 0
                  : r.map(function (e) {
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
            l = e.subscriberCount,
            r = e.title,
            o = e.withThumbnail,
            s = parseInt(l, 10) || 0,
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
                  ze.b,
                  {
                    align: 'left',
                    numberOfLines: 1,
                    size: u,
                    style: a ? Yt.newsletterFieldMobile : Yt.newsletterField,
                    weight: 'bold',
                  },
                  r,
                ),
                i.a.createElement(
                  ze.b,
                  {
                    align: 'left',
                    color: 'gray700',
                    numberOfLines: 2,
                    size: u,
                    style: [Yt.newsletterDescription, a ? Yt.newsletterFieldMobile : Yt.newsletterField],
                  },
                  t,
                ),
                l
                  ? i.a.createElement(
                      ze.b,
                      {
                        align: 'left',
                        color: 'gray700',
                        size: u,
                        style: a ? Yt.newsletterFieldMobile : Yt.newsletterField,
                      },
                      i.a.createElement(Q.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: c, count: s }),
                    )
                  : null,
              ),
            ),
          )
        }
      Ht.defaultProps = { withThumbnail: !0 }
      var Wt,
        jt,
        zt,
        Vt,
        qt,
        Gt,
        Jt,
        $t,
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
        Qt = Kt(Ht),
        Xt = a('Rp9C'),
        Zt = a('I4+6'),
        ea = Q.a.d834aec4,
        ta = Q.a.ab0deccf,
        aa = Q.a.caeab0f7,
        na = te.a.create(function (e) {
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
        la = At(function (e) {
          var t = i.a.useContext(j.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
            a = e.analytics,
            n = e.createLocalApiErrorHandler,
            l = e.fetchUserBizProfileIfNeeded,
            r = e.isSubscribed,
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
                  var t = Xt.a.getUserItem(d),
                    n = t.is_user_follows_viewer,
                    l = t.is_viewer_follows_user,
                    i = [{ id: s, is_viewer_follows_user: l, is_user_follows_viewer: n }]
                  a.scribe({ action: e, element: r ? 'start_reading_btn' : 'subscribe_btn', data: { items: i } })
                }
              },
              [a, r, s, p, d],
            )
          i.a.useEffect(
            function () {
              t && l(m).catch(n())
            },
            [n, l, t, m],
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
                { style: na.moduleLabel },
                i.a.createElement(ze.b, { size: 'body', weight: 'bold' }, ea),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  a = r ? o : t,
                  n = r ? aa : ta,
                  l = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
                  s = Zt.a.generate({
                    backgroundColor: te.a.theme.colors.transparent,
                    color: te.a.theme.colors.primary,
                    customFocusBackgroundColor: l,
                    customHoverBackgroundColor: l,
                    customPressedBackgroundColor: l,
                  })
                return i.a.createElement(
                  de.a,
                  {
                    interactiveStyles: s,
                    link: a,
                    onPress: function () {
                      return f('click')
                    },
                    style: [na.moduleContainer, te.a.isDarkMode() ? na.darkModeBackground : na.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: [na.contentContainer, na.summaryContainer] },
                      i.a.createElement(Qt, { isMobileLayout: e, userId: m, withThumbnail: !0 }),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [na.buttonContainer, e ? na.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        ze.b,
                        {
                          align: 'center',
                          link: a,
                          size: 'body',
                          style: na.actionButton,
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
            ? i.a.createElement(le.a, null, function (e) {
                var t = e.windowWidth <= te.a.theme.breakpoints.small
                return g(t)
              })
            : null
        }),
        ra = a('z+ta'),
        ia = (a('YWiL'), a('yH/f'), Q.a.b44c0204),
        oa = Q.a.de1123f4,
        sa = function (e, t, a) {
          var n = (function (e, t) {
            var a = new Date()
            return a.setHours(e), a.setMinutes(t), (0, Q.a.d725a288)(a)
          })(t, a)
          return (function (e) {
            return new Date().toLocaleString('en-US', { weekday: 'long' }) === e
          })(e)
            ? oa({ time: n })
            : ia({ day: e, time: n })
        },
        ca = a('EfHu'),
        ua = te.a.create(function (e) {
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
        da = function () {
          return i.a.createElement(ce.a, { style: ua.image }, i.a.createElement(ca.a, { style: ua.icon }))
        },
        ma = function (e) {
          var t = e.label,
            a = e.link,
            n = e.onPress,
            l = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
            r = Zt.a.generate({
              backgroundColor: te.a.theme.colors.transparent,
              color: te.a.theme.colors.primary,
              customFocusBackgroundColor: l,
              customHoverBackgroundColor: l,
              customPressedBackgroundColor: l,
            })
          return i.a.createElement(
            de.a,
            { interactiveStyles: r, link: a, onPress: n, style: pa.button },
            i.a.createElement(
              ze.b,
              { align: 'center', size: 'body', style: pa.buttonText, weight: 'bold', withInteractiveStyling: !1 },
              t,
            ),
          )
        },
        pa = te.a.create(function (e) {
          return {
            actionBar: {
              borderColor: e.colors.gray50,
              borderTopWidth: e.borderWidths.small,
              display: 'flex',
              flexDirection: 'row',
              height: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space4, ')'),
              width: '100%',
            },
            buttonText: { margin: 'auto' },
            button: { cursor: 'pointer', flexGrow: 1, height: 'auto' },
            separator: { borderColor: e.colors.gray50, borderRightWidth: e.borderWidths.small },
          }
        }),
        fa = function (e) {
          var t = e.actions
          return t && t.length > 0
            ? i.a.createElement(
                ce.a,
                { style: pa.actionBar },
                t.map(function (e, t) {
                  return i.a.createElement(
                    i.a.Fragment,
                    { key: t },
                    0 !== t ? i.a.createElement(ce.a, { style: pa.separator }) : null,
                    i.a.createElement(ma, e),
                  )
                }),
              )
            : null
        },
        ga = te.a.create(function (e) {
          return {
            body: { justifyContent: 'center', flex: 1, padding: e.spaces.space12, textAlign: 'left' },
            bodyLine: { display: 'flex', flexDirection: 'row', marginVertical: e.spaces.space2 },
          }
        }),
        ha = function (e) {
          var t = e.headline,
            a = e.isMobileLayout,
            n = e.lines
          return i.a.createElement(
            ce.a,
            { style: ga.body },
            t && i.a.createElement(ze.b, { size: 'body', weight: 'bold' }, t),
            n.map(function (e, t) {
              return i.a.createElement(
                ce.a,
                { key: t, style: ga.bodyLine },
                null == e
                  ? void 0
                  : e.elements.map(function (e, t) {
                      var n
                      return (
                        e &&
                        i.a.createElement(
                          ze.b,
                          {
                            color: null !== (n = e.color) && void 0 !== n ? n : e.link ? void 0 : 'gray700',
                            key: t,
                            link: e.link,
                            onPress: e.onPress,
                            size: a ? 'subtext1' : 'body',
                          },
                          e.text,
                        )
                      )
                    }),
              )
            }),
          )
        },
        ba = function (e) {
          var t = e.isMobileLayout,
            a = e.label
          return i.a.createElement(ze.b, { size: t ? 'subtext1' : 'body', weight: 'bold' }, a)
        },
        ya = te.a.create(function (e) {
          return {
            container: {
              borderRadius: e.borderRadii.medium,
              height: 'calc('.concat(e.spaces.space48, ' * 2)'),
              marginLeft: e.spaces.space4,
              marginVertical: e.spaces.space4,
              overflow: 'hidden',
              width: 'calc('.concat(e.spaces.space48, ' * 2)'),
            },
            mobileContainer: {
              height: 'calc(('.concat(e.spaces.space40, ' + ').concat(e.spaces.space4, ') * 2)'),
              width: 'calc(('.concat(e.spaces.space40, ' + ').concat(e.spaces.space4, ') * 2)'),
            },
          }
        }),
        _a = function (e) {
          var t = e.children,
            a = e.isMobileLayout
          return i.a.createElement(ce.a, { style: [ya.container, a ? ya.mobileContainer : void 0] }, t)
        },
        va = te.a.create(function (e) {
          return {
            contentBackground: { backgroundColor: e.colors.cellBackground },
            darkModeContentBackground: { backgroundColor: e.colors.gray0 },
            spotlight: { marginVertical: e.spaces.space16 },
            spotlightCard: {
              borderRadius: e.borderRadii.large,
              boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.1)',
              marginTop: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')'),
              overflow: 'hidden',
            },
            spotlightContent: { flexDirection: 'row' },
          }
        }),
        wa = function (e) {
          var t = e.actions,
            a = e.bodyElements,
            n = e.headline,
            l = e.label,
            r = e.media
          return i.a.createElement(le.a, null, function (e) {
            var o = e.windowWidth <= te.a.theme.breakpoints.small
            return i.a.createElement(
              ce.a,
              { style: va.spotlight },
              i.a.createElement(ba, { isMobileLayout: o, label: l }),
              i.a.createElement(
                ce.a,
                { style: [va.spotlightCard, te.a.isDarkMode() ? va.darkModeContentBackground : va.contentBackground] },
                i.a.createElement(
                  ce.a,
                  { style: va.spotlightContent },
                  i.a.createElement(_a, { children: r, isMobileLayout: o }),
                  i.a.createElement(ha, { headline: n, isMobileLayout: o, lines: a }),
                ),
                t && i.a.createElement(fa, { actions: t }),
              ),
            )
          })
        },
        ka = a('CVPS'),
        Ea = a.n(ka),
        Sa = Q.a.jaaa8984,
        Fa = Q.a.c2059c9f,
        Ca = Q.a.e2acb642,
        Ta = Q.a.e2a5bd5f,
        Ia = Q.a.e41a0dc1,
        La = Q.a.e0d7da6b,
        Pa = Q.a.fd00a769,
        xa = Q.a.i7059f55,
        Ra = Q.a.a7391347,
        Ma = void 0 !== Wt ? Wt : (Wt = a('hyc7')),
        Ba = function (e) {
          var t,
            a,
            n,
            l,
            r,
            o,
            s,
            c = e.profileSpotlightRef,
            u = i.a.useContext(j.a).featureSwitches.isTrue('responsive_web_location_spotlight_v1_display'),
            d = Ea()(Ma, c),
            m = null === (t = d.data.address) || void 0 === t ? void 0 : t.formatted_address,
            p = function () {
              return { elements: [{ text: Ta, color: 'green500' }] }
            },
            f = function (e) {
              var t = null == e ? void 0 : e.is_open
              if (null == t) return null
              var a = t ? (null == e ? void 0 : e.closes) : null == e ? void 0 : e.opens
              return null == a
                ? null
                : {
                    elements: [
                      { text: t ? Pa : Ia, color: t ? 'green500' : 'red500' },
                      { text: ' · ' },
                      { text: ''.concat(t ? La : xa, ' ').concat(sa(a.day, a.time.hour, a.time.minute)) },
                    ],
                  }
            },
            g = function () {
              return { elements: [{ text: Ra }] }
            }
          return u
            ? i.a.createElement(wa, {
                actions:
                  ((s = []),
                  m &&
                    s.push({
                      label: Fa,
                      link: 'https://www.google.com/maps/search/?api=1&query='.concat(encodeURIComponent(m)),
                    }),
                  s.push({ label: Ca, link: 'dummy_contact_link' }),
                  s),
                bodyElements: [
                  ((l = d.data.website),
                  (r = null == l ? void 0 : l.url),
                  (o = null == l ? void 0 : l.display),
                  r && o ? { elements: [{ text: o, link: { pathname: r, external: !0 } }] } : null),
                  ((n = null === (a = d.data.address) || void 0 === a ? void 0 : a.formatted_address),
                  n ? { elements: [{ text: n }] } : null),
                  (function () {
                    var e = d.data.open_times
                    if (null == e) return null
                    var t = e.open_times_type
                    return t && 'AlwaysOpen' === t ? p() : t && 'RegularHours' === t ? f(e) : g()
                  })(),
                ],
                label: Sa,
                media: i.a.createElement(da, null),
              })
            : null
        },
        Na = a('tI3i'),
        Oa = a.n(Na),
        Aa = Q.a.d58baa7e,
        Ka = void 0 !== jt ? jt : (jt = a('0zj1')),
        Ua = te.a.create(function (e) {
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
        Da = function (e) {
          var t,
            a,
            n,
            l,
            r,
            o,
            s,
            c,
            u,
            d,
            m,
            p,
            f = e.isMobileLayout,
            g = e.revueModuleRef,
            h = Ea()(Ka, g),
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
              null === (l = h.data) ||
              void 0 === l ||
              null === (r = l.revue_account) ||
              void 0 === r ||
              null === (o = r.profile_info) ||
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
            k = Aa(w),
            E = f ? 'subtext2' : 'body'
          return i.a.createElement(
            ce.a,
            { style: Ua.contentContainer },
            y
              ? i.a.createElement(
                  ce.a,
                  { style: [Ua.newsletterImageContainer, f ? Ua.newsletterImageContainerMobile : void 0] },
                  i.a.createElement(
                    pe.a,
                    { ratio: 1 },
                    i.a.createElement(ee.a, { accessibilityLabel: b || '', aspectMode: me.a.SQUARE, image: y }),
                  ),
                )
              : null,
            i.a.createElement(
              ce.a,
              { style: [Ua.newsletterInfoContainer, f ? Ua.mobileNewsletterInfoContainer : void 0] },
              i.a.createElement(
                ze.b,
                {
                  align: 'left',
                  numberOfLines: 1,
                  size: E,
                  style: f ? Ua.newsletterFieldMobile : Ua.newsletterField,
                  weight: 'bold',
                },
                _,
              ),
              i.a.createElement(
                ze.b,
                {
                  align: 'left',
                  color: 'gray700',
                  numberOfLines: 2,
                  size: E,
                  style: [Ua.newsletterDescription, f ? Ua.newsletterFieldMobile : Ua.newsletterField],
                },
                b,
              ),
              v
                ? i.a.createElement(
                    ze.b,
                    {
                      align: 'left',
                      color: 'gray700',
                      size: E,
                      style: f ? Ua.newsletterFieldMobile : Ua.newsletterField,
                    },
                    i.a.createElement(Q.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: k, count: w }),
                  )
                : null,
            ),
          )
        },
        Ha = Q.a.d834aec4,
        Wa = Q.a.ab0deccf,
        ja = Q.a.caeab0f7,
        za = void 0 !== zt ? zt : (zt = a('hRT2')),
        Va = void 0 !== Vt ? Vt : (Vt = a('bu6k')),
        qa = te.a.create(function (e) {
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
        Ga = function (e) {
          var t,
            a,
            n = e.profileSpotlightRef,
            l = e.userRef,
            r = i.a.useContext(j.a).featureSwitches,
            o = Object(ke.b)(),
            s = Ea()(za, l),
            c = Ea()(Va, n),
            u = null == c ? void 0 : c.config.revue_account_id,
            d = null == c ? void 0 : c.data.revue_account.profile_info.profile_url,
            m =
              (null == c || null === (t = c.context) || void 0 === t ? void 0 : t.user_subscription_status) ===
              Bt.c.Subscribed,
            p =
              null == c || null === (a = c.data) || void 0 === a
                ? void 0
                : a.revue_account.account_settings.twitter_profile_subscriptions_enabled,
            f = r.isTrue('responsive_web_newsletters_profile_subscribe_enabled') && p,
            g = i.a.useCallback(
              function (e) {
                if (f) {
                  var t,
                    a = Xt.a.getUserItem({
                      id_str: s.rest_id,
                      name: null !== (t = s.legacy.name) && void 0 !== t ? t : '',
                      following: s.legacy.following,
                      followed_by: s.legacy.followed_by,
                    }),
                    n = a.is_user_follows_viewer,
                    l = a.is_viewer_follows_user,
                    r = [{ id: u, is_viewer_follows_user: l, is_user_follows_viewer: n }]
                  o.scribe({
                    action: e,
                    component: 'newsletter_module',
                    element: m ? 'start_reading_btn' : 'subscribe_btn',
                    data: { items: r },
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
                { style: qa.moduleLabel },
                i.a.createElement(ze.b, { size: 'body', weight: 'bold' }, Ha),
              ),
              (function (e) {
                var t
                Oa()(s.legacy.screen_name, 'user.legacy.screen_name is undefined')
                var a = '/i/newsletters/subscribe/'.concat(s.legacy.screen_name),
                  n = null !== (t = m ? d : a) && void 0 !== t ? t : void 0,
                  l = m ? ja : Wa,
                  r = te.a.isDarkMode() ? te.a.theme.colors.gray50 : te.a.theme.colors.gray0,
                  o = Zt.a.generate({
                    backgroundColor: te.a.theme.colors.transparent,
                    color: te.a.theme.colors.primary,
                    customFocusBackgroundColor: r,
                    customHoverBackgroundColor: r,
                    customPressedBackgroundColor: r,
                  })
                return i.a.createElement(
                  de.a,
                  {
                    interactiveStyles: o,
                    link: n,
                    onPress: function () {
                      return g('click')
                    },
                    style: [qa.moduleContainer, te.a.isDarkMode() ? qa.darkModeBackground : qa.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: [qa.contentContainer, qa.summaryContainer] },
                      i.a.createElement(Da, { isMobileLayout: e, revueModuleRef: c }),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [qa.buttonContainer, e ? qa.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        ze.b,
                        {
                          align: 'center',
                          color: 'link',
                          size: 'body',
                          style: qa.actionButton,
                          weight: 'bold',
                          withInteractiveStyling: !1,
                        },
                        l,
                      ),
                    ),
                  ),
                )
              })(e),
            )
          }
          return f
            ? i.a.createElement(le.a, null, function (e) {
                var t = e.windowWidth <= te.a.theme.breakpoints.small
                return h(t)
              })
            : null
        },
        Ja = void 0 !== qt ? qt : (qt = a('+wNI')),
        $a = void 0 !== Gt ? Gt : (Gt = a('Xcj+')),
        Ya = Object.freeze({ Location: 'AboutModule', Newsletter: 'RevueModule' }),
        Qa = function (e) {
          var t = e.profileSpotlightRef,
            a = e.userRef,
            n = i.a.useContext(j.a).loggedInUserId,
            l = Ea()(Ja, a),
            r = Ea()($a, t),
            o =
              !n ||
              l.legacy.blocking ||
              l.legacy.blocked_by ||
              !!l.legacy.withheld_scope ||
              (l.legacy.protected && !l.legacy.following)
          switch (r.__typename) {
            case Ya.Location:
              return i.a.createElement(Ba, { profileSpotlightRef: r })
            case Ya.Newsletter:
              return o ? null : i.a.createElement(Ga, { profileSpotlightRef: r, userRef: l })
            default:
              return null
          }
        },
        Xa = void 0 !== Jt ? Jt : (Jt = a('M8le')),
        Za = te.a.create(function (e) {
          return { container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        en = function (e) {
          var t,
            a,
            n,
            l = e.userRef,
            r = Ea()(Xa, l),
            o =
              null === (t = r.profilemodules) ||
              void 0 === t ||
              null === (a = t.v1) ||
              void 0 === a ||
              null === (n = a[0]) ||
              void 0 === n
                ? void 0
                : n.profile_module
          return o
            ? i.a.createElement(
                ce.a,
                { style: Za.container },
                i.a.createElement(Qa, { profileSpotlightRef: o, userRef: r }),
              )
            : null
        },
        tn = a('Fr3L'),
        an = a('IAZG'),
        nn = void 0 !== $t ? $t : ($t = a('S97D')),
        ln = function (e) {
          var t,
            a = e.userScreenName,
            n = Object(an.a)(nn, { screen_name: a }),
            l = null == n || null === (t = n.user_result_by_screen_name) || void 0 === t ? void 0 : t.result
          return l ? i.a.createElement(en, { userRef: l }) : null
        },
        rn = function (e) {
          var t = e.userScreenName
          return i.a.createElement(
            tn.a,
            { errorConfig: { context: 'PROFILE_SPOTLIGHTS' } },
            i.a.createElement(ln, { userScreenName: t }),
          )
        },
        on = a('7JQg'),
        sn = a('7wqI'),
        cn = a('Jkc4'),
        un = a('wCd/'),
        dn = function (e) {
          var t = e.isActiveCreator,
            a = e.isOwnProfile,
            n = e.superFollowersCount,
            l = e.user,
            r = l.followers_count,
            o = l.friends_count,
            s = l.screen_name
          return i.a.createElement(cn.a, null, function (e) {
            return i.a.createElement(un.a, {
              followersCount: r,
              friendsCount: o,
              onPress: e(),
              screenName: s,
              superFollowersCount: t && a ? n : void 0,
              withLink: Object(sn.b)({ isOwnProfile: a, user: l }),
            })
          })
        },
        mn = { page: 'profile', section: 'header' },
        pn = (function (e) {
          R()(a, e)
          var t = B()(a)
          function a(e, n) {
            var l
            return (
              C()(this, a),
              (l = t.call(this, e, n)),
              O()(
                P()(l),
                '_shouldUseProfileSpotlightRendering',
                l.context.featureSwitches.isTrue('responsive_web_profile_spotlight_v0_display'),
              ),
              O()(P()(l), '_handleRemoveClusterFollow', function () {
                l.setState({ shouldShowClusterFollow: !1 })
              }),
              (l.state = { shouldShowClusterFollow: !1 }),
              l
            )
          }
          return (
            I()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(rt.a)(t, this.state) || !Object(rt.a)(e, this.props)
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
                    l = e.professionalCategoryName,
                    r = e.superFollowersCount,
                    o = e.user,
                    s = this._isOwnProfile(),
                    c = !s && (o.blocking || o.blocked_by || a),
                    u = !s && (o.blocked_by || a),
                    d = !n || s || o.blocking || o.blocked_by || a || (o.protected && !o.following),
                    m = !n || o.blocking || o.blocked_by || a || (o.protected && !o.following)
                  return i.a.createElement(
                    on.c,
                    { namespace: mn },
                    i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(ge, { isOwnProfile: s, isWithheld: a, user: o }),
                      i.a.createElement(
                        ce.a,
                        { style: [z.a.content, fn.content, c && z.a.withheld] },
                        i.a.createElement(
                          ce.a,
                          { style: z.a.avatarAndButton },
                          i.a.createElement(ie, { isOwnProfile: s, isWithheld: a, user: o }),
                          i.a.createElement(Oe, {
                            history: this.props.history,
                            isWithheld: a,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: o,
                          }),
                        ),
                        i.a.createElement(Mt, { isOwnProfile: s, isWithheld: a, namespace: mn, user: o }),
                        c ? null : i.a.createElement(lt, { isOwnProfile: s, professionalCategoryName: l, user: o }),
                        u
                          ? null
                          : i.a.createElement(dn, {
                              isActiveCreator: t,
                              isOwnProfile: s,
                              superFollowersCount: r,
                              user: o,
                            }),
                        d
                          ? null
                          : i.a.createElement(
                              ce.a,
                              { style: fn.marginTopXSmall },
                              i.a.createElement(it.a, { userId: o.id_str, userScreenName: o.screen_name }),
                            ),
                        o.muting ? i.a.createElement(yt, { user: o }) : null,
                      ),
                      this._shouldUseProfileSpotlightRendering
                        ? i.a.createElement(rn, { userScreenName: o.screen_name })
                        : m
                        ? null
                        : i.a.createElement(la, { screenName: o.screen_name, user: o, userId: o.id_str }),
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
                  return i.a.createElement(ra.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            a
          )
        })(i.a.Component)
      O()(pn, 'contextType', j.a)
      var fn = te.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        gn = pn,
        hn = a('8UdT'),
        bn = a('dwig'),
        yn = a('GOQE'),
        _n = a('v//M'),
        vn = a('0+qk'),
        wn = a('drnk'),
        kn = a('9Bb1'),
        En = a('iFPY'),
        Sn = a('5S/X'),
        Fn = a('oQhu'),
        Cn = a('xZGM'),
        Tn = function (e, t) {
          return Object(Cn.D)(e, Cn.y)
        },
        In = Object(V.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Tn, isLoggedIn: f.n }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Cn.z)(Cn.y)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        Ln = a.p + 'nft_education_graphic.72be3745.png',
        Pn = a('Wms4'),
        xn = a('feu+'),
        Rn = function () {
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
      Rn.metadata = { width: 24, height: 24 }
      var Mn = Rn,
        Bn = function () {
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
      Bn.metadata = { width: 24, height: 24 }
      var Nn = Bn,
        On = Q.a.ebf5ec25,
        An = Q.a.c405ac8d,
        Kn = Q.a.a893d601,
        Un = Q.a.eb023c93,
        Dn = Q.a.gc65c0a9,
        Hn = Q.a.d17e8aa3,
        Wn = Q.a.ff9c6943,
        jn = te.a.create(function (e) {
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
        zn = In(function (e) {
          var t = e.addEducationFlag,
            a = e.analytics,
            n = e.isLoggedIn,
            l = e.onEducationSheetDismiss,
            r = e.shouldShowEducation,
            o = i.a.useContext(j.a).featureSwitches,
            s = r && n && !0 === o.getValueWithoutScribeImpression('responsive_web_nft_avatar'),
            c =
              (s && o.getStringValue('responsive_web_nft_avatar_help_link')) ||
              'https://help.twitter.com/managing-your-account/nfts-on-twitter',
            u = function () {
              l(), t()
            }
          i.a.useEffect(
            function () {
              return s && a.scribe({ action: 'impression' }), u
            },
            [s],
          )
          var d = i.a.createElement(
            Q.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            i.a.createElement(
              ze.b,
              {
                color: 'primary',
                link: c,
                onPress: function () {
                  a.scribe({ element: 'learn_more', action: 'click' })
                },
                testID: 'learnMore',
              },
              Q.a.d8af538e,
            ),
          )
          return s
            ? i.a.createElement(xn.a, {
                accessibilityRole: 'dialog',
                actionLabel: Kn,
                contentStyle: jn.interstitialContent,
                graphic: function () {
                  return i.a.createElement(
                    ce.a,
                    { style: jn.image },
                    i.a.createElement(ee.a, { accessibilityLabel: '', aspectMode: me.a.exact(2.5), image: Ln }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: An,
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
                    i.a.createElement(ze.b, { size: 'headline2', style: jn.heading, weight: 'bold' }, Un),
                    i.a.createElement(ze.b, null, d),
                  ),
                  i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(ze.b, { size: 'headline2', style: jn.heading, weight: 'bold' }, Dn),
                    i.a.createElement(
                      ce.a,
                      { style: jn.iconContainer },
                      i.a.createElement(Mn, { style: jn.icon }),
                      i.a.createElement(ze.b, null, Wn),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [jn.iconContainer, jn.reducedMarginBottom] },
                      i.a.createElement(Qe.a, { style: jn.icon }),
                      i.a.createElement(ze.b, null, Hn),
                    ),
                    i.a.createElement(
                      ce.a,
                      { style: [jn.iconContainer, jn.noMarginTop] },
                      i.a.createElement(ce.a, { style: jn.icon }),
                      i.a.createElement(
                        Pn.a,
                        { style: jn.label },
                        i.a.createElement(Nn, { style: jn.labelIcon }),
                        i.a.createElement(ze.b, { weight: 'bold' }, On),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        Vn = a('AJXH'),
        qn = a('rJoH'),
        Gn = a('Y6L+'),
        Jn = a('jS2K'),
        $n = a('IG4P'),
        Yn = (function (e) {
          R()(a, e)
          var t = B()(a)
          function a() {
            return C()(this, a), t.apply(this, arguments)
          }
          return (
            I()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(rt.a)(e, this.props)
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
                      { style: [z.a.content, z.a.withheld] },
                      i.a.createElement(
                        ce.a,
                        { style: z.a.avatarAndButton },
                        this._renderAvatar(),
                        i.a.createElement(ce.a, { style: z.a.buttonAffordance }),
                        a && t && i.a.createElement(Le, { buttonStyle: z.a.menuSheetButton, user: t }),
                      ),
                      this._renderNames(),
                    ),
                  )
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  return i.a.createElement(le.a, null, function (e) {
                    var t = e.windowWidth >= te.a.theme.breakpoints.medium
                    return i.a.createElement(
                      ce.a,
                      { accessibilityState: { hidden: !0 }, style: z.a.avatar },
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
                    { style: z.a.banner },
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
                    l = n.name && n.screen_name,
                    r = l ? n.name : '@'.concat(n.screen_name)
                  return i.a.createElement(
                    ce.a,
                    { style: z.a.names },
                    i.a.createElement(xt.a, {
                      name: r,
                      nameSize: 'headline1',
                      screenName: l ? n.screen_name : void 0,
                      withStackedLayout: !0,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(i.a.Component),
        Qn = a('wytG'),
        Xn = a('VS6U'),
        Zn = (a('0zG9'), a('muX9')),
        el = function (e) {
          var t = e.screenName,
            a = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return i.a.createElement(Zn.a, { script: [{ type: 'application/ld+json', innerHTML: a }] })
        },
        tl = a('2V3d'),
        al = a('ipry'),
        nl = a('E4zi'),
        ll = function (e) {
          var t,
            a,
            n,
            l = e.user,
            r =
              null === (t = l.entities) ||
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
              dateCreated: l.created_at,
              author: Object(nl.a)(l),
            }
          return (
            r && (o.relatedLink = [r.url, r.expanded_url]),
            i.a.createElement(Zn.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(o, null, 2) }],
            })
          )
        },
        rl = a('Qayx'),
        il = a('G8HL'),
        ol = a('mw9i'),
        sl = a('zfvc'),
        cl = a('FIs5'),
        ul = a('Q0VY'),
        dl = a('FiRh'),
        ml = a('0yYu'),
        pl = a('k/OQ'),
        fl = a('zCf4'),
        gl = Q.a.fa98627a,
        hl = Q.a.a2811f96,
        bl = Q.a.c6ea308b,
        yl = Q.a.d67658c0,
        _l = Q.a.ccc9153f,
        vl = Q.a.bab1f8b0,
        wl = Q.a.a52b03a5,
        kl = Q.a.cc3c6989,
        El = 'Twitter Articles',
        Sl = Q.a.add55c97,
        Fl = Q.a.d7b8eba9,
        Cl = Q.a.c0098d49,
        Tl = Q.a.b721eb37,
        Il = Q.a.c4af3561,
        Ll = Q.a.dbcaaab5,
        Pl = Q.a.hf162fb6,
        xl = Q.a.ad7b2b38,
        Rl = Q.a.f19b4073,
        Ml = Q.a.ha62da97,
        Bl = Q.a.ica87fde,
        Nl = Q.a.e79ed125,
        Ol = Q.a.g8475f82,
        Al = Q.a.c9a1cb5d,
        Kl = Q.a.e7b201dd,
        Ul = Q.a.d09e12c4,
        Dl = Q.a.gbf342a4,
        Hl = Q.a.eeab4adf,
        Wl = Q.a.i144ee20,
        jl = Q.a.j58e7b00,
        zl = Q.a.d834ab9c,
        Vl = { section: 'profile_interstitial' },
        ql = Object(Qn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, '8KtR'))
        }),
        Gl = Object(Qn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'cFl3'))
        }),
        Jl = Object(Qn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ivpD'))
        }),
        $l = Object(Qn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ylAD'))
        }),
        Yl = 'about',
        Ql = 'likes',
        Xl = 'media',
        Zl = 'reactions',
        er = 'superfollows',
        tr = 'twitter-articles',
        ar = 'with_replies',
        nr = 36e5,
        lr = Object(Fn.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        rr = (function (e) {
          R()(a, e)
          var t = B()(a)
          function a(e, n) {
            var l
            return (
              C()(this, a),
              (l = t.call(this, e, n)),
              O()(
                P()(l),
                '_safetyModeViolatorExperienceEnabled',
                l.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              O()(
                P()(l),
                '_safetyModeUserExperienceEnabled',
                l.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              O()(
                P()(l),
                '_shouldEnableProfessionalCategoryLabelViewing',
                l.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              O()(
                P()(l),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                l.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              O()(
                P()(l),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                l.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              O()(
                P()(l),
                '_canViewTwitterArticles',
                l.context.featureSwitches.isTrue('responsive_web_twitter_article_view_enabled'),
              ),
              O()(P()(l), '_renderContainer', function () {
                var e = l.props,
                  t = e.fetchStatus,
                  a = e.isNotFound,
                  n = e.isRefreshing,
                  r = e.isSuspended,
                  o = e.screenName,
                  s = r || a
                return i.a.createElement(
                  $n.a,
                  { isRefreshing: n, onRefresh: l._handlePullToRefresh },
                  i.a.createElement(
                    ce.a,
                    { style: or.containerGrow },
                    i.a.createElement(
                      ol.a,
                      null,
                      i.a.createElement(_n.a, {
                        accessibilityLabel: _l({ screenName: o }),
                        fetchStatus: s ? c.a.LOADED : t,
                        onRequestRetry: l._handleRequestRetry,
                        render: l._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              O()(P()(l), '_renderHeaderAndContent', function () {
                var e = l.state.showNftAvatarEducation
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  e && i.a.createElement(zn, { onEducationSheetDismiss: l._handleOnDismissNftAvatarEducation }),
                  l._renderHeader(),
                  l._renderContent(),
                )
              }),
              O()(P()(l), '_renderContent', function () {
                var e = l.props,
                  t = e.isNotFound,
                  a = e.isSuspended,
                  n = e.isWithheld,
                  r = e.user,
                  i = l.state.showBlockedTweets,
                  o = l._isViewingOwnProfile()
                return a
                  ? l._renderUserProfileSuspended()
                  : t
                  ? l._renderUserNotFound()
                  : n && o
                  ? l._renderLoggedInUserProfileWithheld()
                  : n
                  ? l._renderUserProfileWithheld()
                  : l._shouldShowProfileInterstitial()
                  ? l._renderUserProfileInterstitialed()
                  : r && r.smart_blocked_by && l._safetyModeViolatorExperienceEnabled
                  ? l._renderUserProfileAutoblockedBy()
                  : r && r.blocked_by
                  ? l._renderUserProfileBlockedBy()
                  : r && r.smart_blocking && !i && l._safetyModeUserExperienceEnabled
                  ? l._renderUserProfileSmartBlocking()
                  : r && r.blocking && !i
                  ? l._renderUserProfileBlocking()
                  : l._isProtectedFromViewer()
                  ? l._renderUserProfileProtected()
                  : l._renderUserProfileDefault()
              }),
              O()(P()(l), '_isViewingOwnProfile', function () {
                var e = l.context.loggedInUserId,
                  t = l.props.user
                return t && e === t.id_str
              }),
              O()(P()(l), '_shouldShowProfileInterstitial', function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : l.props.userProfileInterstitialType,
                  t = l.props,
                  a = t.displaySensitiveMedia,
                  n = t.user
                if (!n || !e) return !1
                var r = l.state,
                  i = r.showBlockedTweets,
                  o = r.userProfileInterstitialDismissed,
                  s = n.blocking && !i,
                  c = n.blocked_by,
                  u = e === al.a.SensitiveMedia || e === al.a.OffensiveProfileContent,
                  d = u && (n.following || a || Sn.b)
                return !(l._isViewingOwnProfile() || l._isProtectedFromViewer() || s || c || o || d)
              }),
              O()(P()(l), '_isProtectedFromViewer', function () {
                var e = l.props.user
                return e && e.protected && !l._isViewingOwnProfile() && !e.following
              }),
              O()(P()(l), '_handleRequestRetry', function () {
                l._fetchOneUserIfNeeded(l.props)
              }),
              O()(P()(l), '_handlePullToRefresh', function () {
                var e = l.props.user
                e ? l._fetchOneUser(e.id_str) : l._fetchOneUserIfNeeded(l.props)
              }),
              O()(P()(l), '_handleShowActionedTweets', function () {
                var e = l.props,
                  t = e.history,
                  a = e.user
                a && t.push('/settings/safety_mode/actioned_tweets/'.concat(a.id_str))
              }),
              O()(P()(l), '_handleShowBlockedTweets', function () {
                var e = l.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace,
                  n = e.user
                l.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    l._safetyModeUserExperienceEnabled &&
                    t(S()(S()({}, a), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              O()(P()(l), '_handleOnConfirmProfileInterstitial', function () {
                var e = l.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace
                l.setState({ userProfileInterstitialDismissed: !0 }),
                  t(S()(S()(S()({}, a), Vl), {}, { action: 'click' }))
              }),
              O()(P()(l), '_handleOnDismissNftAvatarEducation', function () {
                l.setState({ showNftAvatarEducation: !1 })
              }),
              O()(P()(l), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  a = e.fetchStatus,
                  n = l.props.recordTTFL
                if ((a === c.a.FAILED && (l._shouldRecordTTFL = !1), l._shouldRecordTTFL && t.length)) {
                  var r = t.some(function (e) {
                    return e.type === hn.b.Tweet
                  })
                  l._shouldRecordTTFL = !1
                  r && n('profile', { source: 'graphql' })
                }
              }),
              O()(P()(l), '_handleDismissTwitterToolboxUpsell', function () {
                l.setState({ showTwitterToolboxUpsell: !1 })
              }),
              O()(P()(l), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                l.setState({ showFollowButtonRightControl: t })
              }),
              O()(P()(l), '_getSmartBlockEndTimeSentence', function () {
                var e = l.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    a = parseInt(e.smart_blocking_expiration, 10),
                    n = a > t ? a - t : 0
                  if (n <= 72e5) return Ll
                  var r = Math.floor(n / nr),
                    i = Math.floor(r / 24),
                    o = r % 24
                  return 0 === i
                    ? Rl({ hourCount: o })
                    : 0 === o
                    ? xl({ dayCount: i })
                    : Pl({ dayCount: i, hourCount: o })
                }
                return ''
              }),
              O()(P()(l), '_getProfessionalCategory', function () {
                var e,
                  t,
                  a = l.props.user
                return null == a ||
                  null === (e = a.professional) ||
                  void 0 === e ||
                  null === (t = e.category) ||
                  void 0 === t
                  ? void 0
                  : t[0]
              }),
              O()(P()(l), '_shouldDisplayProfessionalCategoryLabel', function () {
                var e = l._isViewingOwnProfile()
                if (l._shouldEnableProfessionalCategoryLabelHoldback && !e) return !1
                if (
                  (!e && l._shouldEnableProfessionalCategoryLabelViewing) ||
                  (e && l._shouldEnableProfessionalCategoryLabelDisplaySwitch)
                ) {
                  var t,
                    a = l._getProfessionalCategory()
                  return !!a && (null === (t = null == a ? void 0 : a.display) || void 0 === t || t)
                }
              }),
              O()(P()(l), '_getProfessionalCategoryNameIfDisplayable', function () {
                var e
                return l._shouldDisplayProfessionalCategoryLabel()
                  ? null === (e = l._getProfessionalCategory()) || void 0 === e
                    ? void 0
                    : e.name
                  : void 0
              }),
              (l._shouldRecordTTFL = !0),
              (l._shouldRecordTTFMC = !0),
              (l.state = {
                userProfileInterstitialDismissed: !1,
                showBlockedTweets: !1,
                showFollowButtonRightControl: !1,
                showNftAvatarEducation: !1,
                showTwitterToolboxUpsell: !0,
              }),
              l
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
                    l = t.fetchTwitterArticlesIfNeeded,
                    r = t.scribeAction,
                    i = t.scribeNamespace,
                    o = t.user
                  this._fetchOneUserIfNeeded(this.props).then(function () {
                    e._isUserAutoblocked() &&
                      r(
                        S()(S()({}, i), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' }),
                      ),
                      e._isUserAutoblocking() &&
                        r(
                          S()(
                            S()({}, i),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && r(S()(S()({}, i), K.c())),
                    n()
                      .catch(a())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && r(S()(S()(S()({}, i), Vl), {}, { action: 'impression' }))
                      }),
                    this._canViewTwitterArticles && null != o && o.id_str && l(o.id_str, !0).catch(a())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t,
                    a = this.props,
                    n = a.createLocalApiErrorHandler,
                    l = a.fetchStatus,
                    r = a.fetchTwitterArticlesIfNeeded,
                    i = a.recordTTFMC,
                    o = a.user
                  if (e.fetchStatus !== l && l === c.a.FAILED) this._shouldRecordTTFMC = !1
                  else if (
                    this._shouldRecordTTFMC &&
                    e.fetchStatus !== l &&
                    l === c.a.LOADED &&
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
                      r(o.id_str, !0).catch(n())
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props,
                    a = t.screenName,
                    n = t.scribeAction,
                    l = t.scribeNamespace,
                    r = t.userProfileInterstitialType
                  e.screenName !== a
                    ? (this._fetchOneUserIfNeeded(e), this.setState({ userProfileInterstitialDismissed: !1 }))
                    : !r &&
                      this._shouldShowProfileInterstitial(e.userProfileInterstitialType) &&
                      n(S()(S()(S()({}, l), Vl), {}, { action: 'impression' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    a = t.fetchStatus,
                    n = t.history,
                    l = t.isIntentRoute,
                    r = t.isNotFound,
                    o = t.isSuspended,
                    s = t.isWithheld,
                    u = t.location,
                    d = t.screenName,
                    m = t.user,
                    p = t.userLanguage,
                    f = this._isViewingOwnProfile(),
                    g = o || r || (s && !f),
                    h = m ? bl({ screenName: m.screen_name, fullName: m.name }) : void 0,
                    b = f ? '' : '@'.concat((m && m.screen_name) || d || '', ' '),
                    y = g ? null : i.a.createElement(vn.a, { getLocationState: lr(b), history: n }),
                    _ =
                      m && !g
                        ? i.a.createElement(xt.a, {
                            isProtected: m.protected,
                            isVerified: m.verified,
                            name: m.name,
                            screenName: m.screen_name,
                            withScreenName: !1,
                          })
                        : gl,
                    v = m && !g && a === c.a.LOADED ? this._renderSubtitle(m) : void 0,
                    w = m && 'twitter://user?screen_name='.concat(m.screen_name),
                    k = m && 'https://twitter.com/'.concat(m.screen_name || ''),
                    E = m && yl({ fullName: m.name, screenName: m.screen_name })
                  return i.a.createElement(Xn.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: b },
                    documentTitle: h,
                    history: n,
                    primaryContent: i.a.createElement(
                      bn.a,
                      { fab: y },
                      i.a.createElement(qn.a, {
                        canonical: k,
                        description: null == m ? void 0 : m.description,
                        image: null == m ? void 0 : m.profile_image_url_https,
                        title: E,
                        type: 'profile',
                      }),
                      Sn.b && m
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(ll, { user: m }),
                            i.a.createElement(kn.a, { description: null == m ? void 0 : m.description }),
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
                      i.a.createElement(_n.a, {
                        accessibilityLabel: _l({ screenName: d }),
                        fetchStatus: m || g ? c.a.LOADED : a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      l
                        ? i.a.createElement(En.a, { history: n, location: u, userId: null == m ? void 0 : m.id_str })
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
                        sl.b,
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
                  return t.indexOf('/'.concat(a, '/').concat(Ql)) > -1
                    ? i.a.createElement(rl.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(a, '/').concat(Zl)) > -1
                    ? i.a.createElement(rl.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(a, '/').concat(Xl)) > -1
                    ? i.a.createElement(rl.a, { count: e.media_count, type: 'media' })
                    : i.a.createElement(rl.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? i.a.createElement(Jn.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(sn.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : i.a.createElement(W.a, null)
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    a = t.history,
                    n = t.isActiveCreator,
                    l = t.isNotFound,
                    r = t.isSuspended,
                    i = t.isWithheld,
                    o = t.profileHeaderRenderer,
                    s = t.promotedContent,
                    c = t.restrictedProfileHeaderRenderer,
                    u = t.screenName,
                    d = t.superFollowersCount,
                    m = t.user,
                    p = this._shouldShowProfileInterstitial(),
                    f = !this._isViewingOwnProfile() && (r || l || p),
                    g = this._getProfessionalCategoryNameIfDisplayable()
                  return f
                    ? c({
                        shouldDisplayUserActionSheet: !r && !l,
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
                    l = e.message,
                    r = e.onButtonPress,
                    o = e.onSecondaryButtonPress,
                    s = e.secondaryButtonText,
                    c = e.secondaryButtonType,
                    u = this.props,
                    d = u.isSuspended,
                    m = u.screenName,
                    p = u.user,
                    f = this.state.showTwitterToolboxUpsell,
                    g =
                      (null == p ? void 0 : p.blocking) &&
                      this.context.featureSwitches.isTrue('responsive_web_drew_profile_block_enabled')
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    Sn.b && d && m
                      ? i.a.createElement(el, { screenName: m })
                      : Sn.b
                      ? i.a.createElement(Vn.a, null)
                      : null,
                    i.a.createElement(cl.a, {
                      buttonText: t,
                      buttonType: a,
                      header: n,
                      message: l,
                      onButtonPress: r,
                      onSecondaryButtonPress: o,
                      secondaryButtonText: s,
                      secondaryButtonType: c,
                      style: [sr.root, g ? sr.verticalPaddingWithUpsell : sr.verticalPadding],
                    }),
                    g && f ? i.a.createElement(tl.a, { onDismiss: this._handleDismissTwitterToolboxUpsell }) : null,
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(wn.a)(e),
                    a = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: zl,
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
                    a = Nl({ screenName: t }),
                    n = i.a.createElement(
                      Q.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      i.a.createElement(ze.b, { link: 'https://support.twitter.com/articles/117063' }, Q.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: Hl,
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
                    n = Ml({ screenName: a }),
                    l = i.a.createElement(ze.b, { color: 'gray700', weight: 'bold' }),
                    r = i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(
                        ze.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space20 } },
                        i.a.createElement(
                          Q.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          i.a.cloneElement(l, null, Q.a.g6645d94({ screenName: a })),
                        ),
                      ),
                      i.a.createElement(
                        ze.b,
                        { color: 'gray700', style: { paddingBottom: te.a.theme.spaces.space8 } },
                        i.a.createElement(
                          Q.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          i.a.cloneElement(l, null, Q.a.g08eceae({ screenName: a })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: r,
                    buttonText: Wl,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: jl,
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
                      Q.a.I18NFormatMessage,
                      { $i18n: 'ccade2e6', screenName: t },
                      i.a.createElement(ze.b, { link: 'https://support.twitter.com/articles/20172060' }, Q.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Bl, message: a })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(ze.b, { style: { paddingBottom: te.a.theme.spaces.space20 } }),
                    n = i.a.createElement(ze.b, { weight: 'bold' }),
                    l = i.a.createElement(ze.b, { style: { paddingBottom: te.a.theme.spaces.space4 }, weight: 'bold' }),
                    r = i.a.createElement(
                      ce.a,
                      null,
                      i.a.createElement(
                        ze.b,
                        { style: { paddingBottom: te.a.theme.spaces.space20 } },
                        i.a.createElement(
                          Q.a.I18NFormatMessage,
                          { $i18n: 'a496f1c8' },
                          i.a.cloneElement(n, null, Q.a.e8bc24ae({ screenName: t })),
                        ),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'd0271e51' },
                        i.a.cloneElement(a, null, Q.a.ff050532),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'ed219b4a' },
                        i.a.createElement(
                          ze.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: te.a.theme.spaces.space20 },
                          },
                          Q.a.b48bd8bf,
                        ),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'h9bd2805' },
                        i.a.cloneElement(a, null, Q.a.ia457a19),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'cc487b37' },
                        i.a.cloneElement(l, null, Q.a.f5531a44),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        i.a.cloneElement(a, null, Q.a.h173a610),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        i.a.cloneElement(l, null, Q.a.ha985c95),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        i.a.cloneElement(a, null, Q.a.d5d82dd3),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        i.a.cloneElement(l, null, Q.a.i4b9b3d0),
                      ),
                      i.a.createElement(
                        Q.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        i.a.cloneElement(a, null, Q.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: Il, message: r })
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
                          Q.a.I18NFormatMessage,
                          { $i18n: 'f6fa2033' },
                          i.a.createElement(ze.b, { link: 'https://support.twitter.com/articles/18311' }, Q.a.f3b1bdc1),
                        )),
                    this._renderEmptyState({ header: Ol, message: e })
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
                  var l = ul.a.descriptionTextParts(t, a),
                    r = i.a.createElement(
                      ze.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      l.map(function (e, t) {
                        return i.a.createElement(dl.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: Dl, message: r })
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
                  var l = ul.a.descriptionTextParts(t, a)
                  return i.a.createElement(
                    ce.a,
                    null,
                    i.a.createElement(
                      ce.a,
                      { style: or.withheldMessageRoot },
                      i.a.createElement(
                        ze.b,
                        { align: 'center', size: 'title4', style: or.withheldMessageHeader, weight: 'bold' },
                        Dl,
                      ),
                      i.a.createElement(
                        ze.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        l.map(function (e, t) {
                          return i.a.createElement(dl.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    i.a.createElement(ml.a, null),
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
                      Q.a.I18NFormatMessage,
                      { $i18n: 'c97724c2', screenName: t },
                      i.a.createElement(ze.b, { link: 'https://support.twitter.com/articles/14016' }, Q.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: Ul, message: a })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Al, message: Kl })
                },
              },
              {
                key: '_renderUserProfileDefault',
                value: function () {
                  var e = this.props,
                    t = e.hasTwitterArticles,
                    a = e.history.location,
                    n = e.isActiveCreator,
                    r = e.twitterArticlesFetchStatus,
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
                      var t = d ? Cl : Fl
                      return [
                        p
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(Yl), query: u },
                              key: Tl,
                              label: Tl,
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
                          key: vl,
                          label: vl,
                        },
                        { to: { pathname: '/'.concat(s, '/').concat(ar), query: u }, key: wl, label: wl },
                        m
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(er), query: u },
                              key: kl,
                              label: kl,
                              color: 'plum500',
                            }
                          : void 0,
                        f
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(tr), query: u },
                              key: El,
                              label: El,
                              onClick: e(),
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(s, '/').concat(Xl), query: u }, key: Sl, label: Sl, onClick: e() },
                        {
                          to: { pathname: '/'.concat(s, '/').concat(d ? Zl : Ql), query: u },
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
                    i.a.createElement(cn.a, null, function (e) {
                      return i.a.createElement(pl.a, { accessibilityLabel: hl, links: g(e) })
                    }),
                    i.a.createElement(
                      fl.d,
                      null,
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/intent/follow' },
                        i.a.createElement(ql, l()({}, h, b)),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/intent/user' },
                        i.a.createElement(ql, l()({}, h, b)),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/'.concat(Gn.J) },
                        i.a.createElement(ql, l()({}, h, b, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/'.concat(Gn.J, '/').concat(ar) },
                        i.a.createElement(ql, l()({}, h, b, { mode: 'with_replies' })),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/'.concat(Gn.J, '/').concat(er) },
                        i.a.createElement(ql, l()({}, h, b, { mode: 'superfollows' })),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/'.concat(Gn.J, '/').concat(tr) },
                        i.a.createElement(Gl, l()({}, h, { hasTwitterArticles: t, twitterArticlesFetchStatus: r })),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/'.concat(Gn.J, '/').concat(Xl) },
                        i.a.createElement($l, h),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/'.concat(Gn.J, '/(').concat(Ql, '|').concat(Zl, ')') },
                        i.a.createElement(Jl, h),
                      ),
                      i.a.createElement(
                        fl.b,
                        { exact: !0, path: '/'.concat(Gn.J, '/').concat(Yl) },
                        i.a.createElement(ql, l()({}, h, b, { onEntriesRendered: this._handleEntriesRendered })),
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
                  return n ? a(n).catch(t(yn.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(a(yn.a))
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
                    l = e.user
                  return (
                    l &&
                    !l.blocking &&
                    !l.smart_blocking &&
                    !l.smart_blocked_by &&
                    !l.blocked_by &&
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
      O()(rr, 'contextType', j.a),
        O()(rr, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return i.a.createElement(gn, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return i.a.createElement(Yn, e)
          },
          recordTTFL: A.c,
          recordTTFMC: A.d,
        })
      var ir = Object(il.a)(rr),
        or = te.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        sr = te.a.create(function (e) {
          return {
            root: { backgroundColor: te.a.theme.colors.cellBackground, paddingHorizontal: te.a.theme.spaces.space20 },
            verticalPadding: { paddingVertical: te.a.theme.spaces.space40 },
            verticalPaddingWithUpsell: { paddingBottom: te.a.theme.spaces.space28 },
          }
        }),
        cr = function (e) {
          return i.a.createElement(k.a, { userId: e.user && e.user.id_str }, function (t) {
            var a = t.scribeNamespace
            return i.a.createElement(ir, l()({}, e, { scribeNamespace: a }))
          })
        }
      t.default = w(cr)
    },
  },
])
//# sourceMappingURL=WIPED
