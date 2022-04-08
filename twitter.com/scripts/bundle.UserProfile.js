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
          return g
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
        m = a('fn8Q'),
        p = a('MWbm'),
        f = s.a.i9028824,
        g = function (e) {
          var t = l.a.useContext(r.a).featureSwitches,
            a = e.hasTwitterArticles,
            n = e.screenName,
            o = e.twitterArticlesFetchStatus,
            s = e.userId,
            u = t.isTrue('responsive_web_twitter_article_view_enabled'),
            g = l.a.createElement(c.a, { to: '/'.concat(n) })
          return u
            ? l.a.createElement(i.a, {
                accessibilityLabel: f,
                fetchStatus: o,
                render: function () {
                  return a
                    ? l.a.createElement(
                        p.a,
                        { style: h.container },
                        l.a.createElement(d.a, { linkToEditScreen: !1, userId: s, visibility: m.e.PUBLISHED }),
                      )
                    : g
                },
              })
            : g
        },
        h = u.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        })
      t.default = g
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
          return ur
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
        m = a('fn8Q'),
        p = a('0KEI'),
        f = a('oEGd'),
        g = a('RqPI'),
        h = a('G6rE'),
        y = function (e, t) {
          var a = t.location,
            n = t.match
          return n && n.params && n.params.screenName
            ? n.params.screenName
            : a && a.query && a.query.screen_name && 'string' == typeof a.query.screen_name
            ? a.query.screen_name
            : ''
        },
        b = function (e, t) {
          return h.e.selectByScreenName(e, y(0, t))
        },
        _ = Object(h.g)([h.a]),
        v = Object(s.createSelector)(
          o.k,
          function (e, t) {
            return _(e, y(0, t))
          },
          function (e, t) {
            var a = h.e.selectIdByScreenName(e, y(0, t))
            return (a ? d.a.selectTwitterArticles(e, a, m.e.PUBLISHED) : []).length > 0
          },
          g.l,
          function (e, t) {
            return t.location.pathname.includes('/intent/')
          },
          function (e, t) {
            return h.e.selectIsUserNotFound(e, y(0, t))
          },
          function (e, t) {
            var a = b(e, t)
            return !!a && h.e.selectIsLoading(e, a.id_str)
          },
          function (e, t) {
            return h.e.selectIsUserSuspended(e, y(0, t))
          },
          function (e, t) {
            return h.e.selectUserSuspendMessage(e, y(0, t))
          },
          function (e, t) {
            return h.e.selectIsUserWithheld(e, y(0, t))
          },
          function (e, t) {
            var a = t.location,
              n = ((a && a.state) || {}).promotedTweetState,
              l = b(e, t)
            return n || (l && l.promoted_content)
          },
          y,
          g.y,
          function (e, t) {
            var a = h.e.selectIdByScreenName(e, y(0, t))
            return a ? d.a.selectFetchStatus(e, a, m.e.PUBLISHED) : c.a.NONE
          },
          b,
          function (e, t) {
            var a = b(e, t)
            return a && a.profile_interstitial_type ? a.profile_interstitial_type : null
          },
          g.p,
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
        w = {
          createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_SCREEN'),
          fetchOneUser: h.e.fetchOne,
          fetchOneByScreenNameWithExtraFieldsIfNeeded: h.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
            h.a,
            h.b,
            h.c,
            h.d,
          ]),
          fetchSettingsIfNeeded: o.f,
          fetchTwitterArticlesIfNeeded: d.a.fetchIfNeeded,
          scribeAction: u.scribeAction,
        },
        k = Object(f.f)(v, w),
        E = a('txMZ'),
        S = a('yiKp'),
        F = a.n(S),
        C = a('VrFO'),
        T = a.n(C),
        I = a('Y9Ll'),
        L = a.n(I),
        P = a('1Pcy'),
        x = a.n(P),
        R = a('5Yy7'),
        M = a.n(R),
        B = a('2VqO'),
        N = a.n(B),
        O = a('KEM+'),
        A = a.n(O),
        K =
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
        U = a('mC9n'),
        D = a('s4rk'),
        H = a('zI2C'),
        W = a('6ZtA'),
        j = a('es0u'),
        z = (a('hBvt'), a('v6aA')),
        V = a('I/ms'),
        q = a('rxPX'),
        G = a('M0jS'),
        J = function (e, t) {
          return Object(G.c)(e, t.user.id_str)
        },
        $ = function (e, t) {
          var a = G.b.select(e, t.user.id_str)
          return null != a && a.refresh_delay_secs ? 1e3 * a.refresh_delay_secs : 1e3 * G.a
        },
        Q = Object(q.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('SELECT_SPACE'),
              fetchUsersPresence: G.b.fetchManyIfNeeded,
            }
          })
          .propsFromState(function () {
            return { userPresencePollingInterval: $, userSpace: J }
          })
          .withAnalytics(),
        Y = a('3XMw'),
        X = a.n(Y),
        Z = a('FGLp'),
        ee = a('B5iK')
      var te = a('TIdA'),
        ae = a('rHpw'),
        ne = a('1I0O'),
        le = a('oSwX'),
        re = a('cHvH'),
        ie = te.a.createLayoutCache(),
        oe = Q(function (e) {
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
            h = i.a.useContext(z.a),
            y = h.featureSwitches,
            b = h.loggedInUserId,
            _ = !d && m,
            v = _ || !p.profile_image_url_https ? void 0 : p.profile_image_url_https,
            w =
              b &&
              (y.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ||
                y.isTrue('voice_rooms_typeahead_audiospace_ring_enabled')),
            k = p.has_nft_avatar && y.isTrue('responsive_web_nft_avatar'),
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
            Object(Z.a)(function () {
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
                  var e = new ee.b(a).interval(n.current)
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
                  ? ((o = se.opensNFTDetails), (r = { pathname: '/'.concat(p.screen_name, '/nft') }))
                  : ((o = se.opensProfilePhoto), (r = { pathname: '/'.concat(p.screen_name, '/photo') })))
          var F = function (e) {
              s.scribe({ element: k ? 'nft_avatar' : 'avatar', action: 'click' })
            },
            C = function (e) {
              var t = e.windowWidth >= ae.a.theme.breakpoints.medium,
                a = {
                  accessibilityLabel: o,
                  imageLayoutCache: ie,
                  link: r,
                  onClick: F,
                  size: 'custom',
                  uri: v,
                  screenName: p.screen_name,
                }
              return g && E
                ? i.a.createElement(ne.a, l()({}, a, { presenceRingType: g.presenceRingType, style: V.a.avatar }))
                : i.a.createElement(
                    le.default,
                    l()({}, a, {
                      borderColor: 'cellBackground',
                      borderWidth: t ? 'large' : 'medium',
                      style: V.a.avatar,
                    }),
                  )
            }
          return i.a.createElement(re.a, null, C)
        }),
        se = { opensProfilePhoto: X.a.f30795df, opensNFTDetails: X.a.a270100c },
        ce = a('RCZO'),
        ue = a('MWbm'),
        de = a('n4Eu'),
        me = a('cm6r'),
        pe = a('A91F'),
        fe = a('9Xij'),
        ge = te.a.createLayoutCache(),
        he = function (e) {
          var t = e.isOwnProfile,
            a = e.isWithheld,
            n = e.user,
            l = !t && a,
            r = n.profile_banner_extensions_media_color && n.profile_banner_extensions_media_color.palette,
            o = r && de.a.get(r),
            s = o ? Object(ce.g)(o) : ae.a.theme.colors.gray200
          return !l && n.profile_banner_url
            ? i.a.createElement(
                me.a,
                { accessibilityHidden: !0, link: '/'.concat(n.screen_name, '/header_photo') },
                i.a.createElement(te.a, {
                  accessibilityLabel: '',
                  aspectMode: pe.a.exact(ae.a.theme.aspectRatios.profileBanner),
                  backgroundColor: s,
                  image: n.profile_banner_url,
                  layoutCache: ge,
                }),
              )
            : i.a.createElement(
                ue.a,
                { style: V.a.banner },
                i.a.createElement(fe.a, {
                  ratio: ae.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: s },
                }),
              )
        },
        ye = a('3nOA'),
        be = a('I57f'),
        _e = a('uIZp'),
        ve = a('SOvA'),
        we = a('vYiB'),
        ke = a('Y49K'),
        Ee = a('Irs7'),
        Se = a('/yvb'),
        Fe = a('ACHU'),
        Ce = a('rsoE'),
        Te = a('vMjK'),
        Ie = X.a.h63a5c3b,
        Le = i.a.createElement(Fe.a, null),
        Pe = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a() {
            var e
            T()(this, a)
            for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              A()(x()(e), '_renderUserMenu', function (t) {
                var a = e.props,
                  n = a.promotedContent,
                  l = a.user
                return i.a.createElement(Te.b, { onClose: t, promotedContent: n, user: l, view: 'profile' })
              }),
              e
            )
          }
          return (
            L()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.buttonStyle
                  return i.a.createElement(Se.a, {
                    accessibilityLabel: Ie,
                    hoverLabel: { label: Ie },
                    icon: Le,
                    renderMenu: this._renderUserMenu,
                    style: e,
                    testID: Ce.a.userActions,
                    type: 'primaryOutlined',
                  })
                },
              },
            ]),
            a
          )
        })(i.a.PureComponent),
        xe = a('pHkl'),
        Re = X.a.g7088266,
        Me = X.a.gd7acb84,
        Be = X.a.b7636014,
        Ne = i.a.createElement(ve.a, null),
        Oe = ae.a.create(function (e) {
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
            l = e.onFollowButtonOffscreen,
            r = e.promotedContent,
            o = e.user,
            s = Object(Ee.b)(),
            c = o.id_str === n,
            u = o.blocked_by,
            d = o.blocking,
            m = a && !c,
            p = o.can_dm && n && !d && !u && !m,
            f = n && o && !c && !m,
            g = o.following && n && !d && !u && !a,
            h = o.default_profile_image && !o.description && !o.profile_banner_url
          return i.a.createElement(
            ue.a,
            { style: Oe.buttons },
            n && c
              ? i.a.createElement(
                  Se.a,
                  {
                    link: h ? '/i/flow/setup_profile' : '/settings/profile',
                    style: Oe.lastButton,
                    testID: ke.a.editProfileButton,
                    type: 'primaryOutlined',
                  },
                  h ? Me : Re,
                )
              : null,
            f && i.a.createElement(Pe, { buttonStyle: Oe.button, promotedContent: r, user: o }),
            !c &&
              p &&
              i.a.createElement(Se.a, {
                accessibilityLabel: Be,
                hoverLabel: { label: Be },
                icon: Ne,
                onPress: function () {
                  if (n) {
                    var e = Object(ye.a)(o.id_str, n)
                    s.scribe({
                      element: 'message',
                      action: 'click',
                      data: {
                        conversation_id: e,
                        conversation_participant_count: 2,
                        conversation_type: xe.j.ONE_TO_ONE,
                        inbox_type: xe.e.NOT_AVAILABLE,
                      },
                    }),
                      t.push('/messages/'.concat(e))
                  }
                },
                style: Oe.button,
                testID: ke.a.sendDMFromProfile,
                type: 'primaryOutlined',
              }),
            !c &&
              g &&
              i.a.createElement(be.a, {
                allowPromptForPush: !0,
                isFollowing: o.notifications,
                style: Oe.button,
                userId: o.id_str,
              }),
            !c &&
              !u &&
              !m &&
              i.a.createElement(
                we.a,
                { onOffscreenChange: l },
                i.a.createElement(_e.a, { promotedContent: r, style: Oe.lastButton, userId: o.id_str }),
              ),
          )
        },
        Ke = a('tOzk'),
        Ue = a('YeIG'),
        De = a('Je1/'),
        He = a('uLiA'),
        We = a('EJJl'),
        je = a('WWyu'),
        ze = a('LhSm'),
        Ve = a('t62R'),
        qe = a('GWvE'),
        Ge = a('Lsrn'),
        Je = a('k/Ka'),
        $e = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Je.a)(
            'svg',
            F()(
              F()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ge.a.root, e.style],
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
      $e.metadata = { width: 24, height: 24 }
      var Qe = $e,
        Ye = a('KrGU'),
        Xe = a('I/9y'),
        Ze = a('YUdS'),
        et = a('EjKN'),
        tt = X.a.a1ea2f12,
        at = X.a.g8191e77,
        nt = function (e) {
          var t = e.day,
            a = e.month
          if (t && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && t === n.getDate()
          }
        },
        lt = ae.a.create(function (e) {
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
            l = e.isOwnProfile,
            r = e.professionalCategoryName,
            o = e.user,
            s = i.a.useRef(),
            c = Object(Ee.b)(),
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
                  ue.a,
                  { style: lt.description },
                  i.a.createElement(We.a, {
                    description: o.description,
                    disableTranslation: !o.is_profile_translatable,
                    entities: o.entities,
                    testID: He.a.userDescription,
                    userId: o.id_str,
                    withheldDescription: o.withheld_description,
                    withheldEntities: o.withheld_entities,
                  }),
                )
              : null,
            i.a.createElement(
              ue.a,
              { style: lt.details },
              i.a.createElement(
                Ve.b,
                { style: lt.detailsText, testID: He.a.profileHeaderItems },
                r
                  ? i.a.createElement(
                      De.a,
                      {
                        Icon: Qe,
                        onPress: function () {
                          c.scribe(F()(F()({}, u), U.b()))
                        },
                        style: lt.noCursor,
                        testID: He.a.userProfessionalCategory,
                        withInteractiveStyling: !1,
                      },
                      i.a.createElement(Ve.b, null, r),
                    )
                  : null,
                o.location && !Object(qe.a)(o.location)
                  ? i.a.createElement(
                      De.a,
                      { Icon: Ye.a, testID: He.a.userLocation },
                      i.a.createElement(Ve.b, null, o.location),
                    )
                  : null,
                d && d.url
                  ? i.a.createElement(
                      De.a,
                      { Icon: Xe.a, link: { pathname: d.url, external: !0 }, testID: He.a.userUrl },
                      d.display_url || d.url,
                    )
                  : null,
                !m ||
                  Object(Ue.a)(m) ||
                  (m.visibility &&
                    'self' === m.visibility.toLowerCase() &&
                    m.year_visibility &&
                    'self' === m.year_visibility.toLowerCase())
                  ? null
                  : nt(m)
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        De.a,
                        {
                          Icon: Ze.a,
                          onPress: function () {
                            s.current && s.current.launch()
                          },
                        },
                        l ? tt : at,
                      ),
                      i.a.createElement(Ke.a, {
                        setRef: function (e) {
                          s.current = e
                        },
                      }),
                    )
                  : i.a.createElement(
                      De.a,
                      { Icon: et.a, testID: He.a.userBirthdate },
                      i.a.createElement(je.a, { birthdate: m, withBornPrefixText: !0 }),
                    ),
                i.a.createElement(ze.a, { joinDate: o.created_at }),
              ),
            ),
          )
        },
        it = a('mN6z'),
        ot = a('W27K'),
        st = a('ddV6'),
        ct = a.n(st),
        ut = a('1YZw'),
        dt = Object(q.a)().propsFromActions(function () {
          return {
            addToast: ut.b,
            createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: h.e.unmute,
          }
        }),
        mt = a('8Usl'),
        pt = a('eb3s'),
        ft = a('P2xQ'),
        gt = X.a.cef4e8cf,
        ht = X.a.ec294e62,
        yt = X.a.df422dfe,
        bt = ae.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        _t = dt(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            n = e.unmute,
            l = e.user,
            r = i.a.useState(!1),
            o = ct()(r, 2),
            s = o[0],
            c = o[1],
            u = l.screen_name
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              Ve.b,
              { color: 'gray700', style: bt.mute },
              yt,
              ' ',
              i.a.createElement(
                Ve.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: bt.unmuteButton,
                  testID: mt.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                ft.g,
              ),
            ),
            s
              ? i.a.createElement(pt.a, {
                  confirmButtonLabel: ft.g,
                  headline: gt({ screenName: u }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      n(l.id_str).then(function () {
                        return t({ text: Object(ft.d)(l.screen_name) })
                      }, a({ showToast: !0 }))
                  },
                  text: ht,
                })
              : null,
          )
        }),
        vt = a('RgK2'),
        wt = a.n(vt),
        kt = a('rcen'),
        Et = 'UserName',
        St = a('X04g'),
        Ft = a('A7Fw'),
        Ct = X.a.e839db39,
        Tt = X.a.b74bd6c6,
        It = X.a.f15bfdb3,
        Lt = X.a.i859a9d3,
        Pt = ae.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            icon: { color: e.colors.badgeColor, fontSize: e.fontSizes.title2 },
            button: { marginTop: e.spaces.space32 },
            text: { marginTop: e.spaces.space12, textAlign: 'center' },
          }
        }),
        xt = function (e) {
          var t = e.dismiss,
            a = e.type,
            n = Object(Ee.b)()
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
            ue.a,
            { style: Pt.content },
            i.a.createElement(Ft.a, { style: Pt.icon }),
            i.a.createElement(Ve.b, { size: 'title4', style: Pt.text, weight: 'bold' }, It),
            i.a.createElement(
              Ve.b,
              { color: 'gray700', style: Pt.text },
              Tt,
              ' ',
              i.a.createElement(
                Ve.b,
                { link: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts', onClick: l },
                Lt,
              ),
            ),
            'sheet' === a
              ? i.a.createElement(Se.a, { onClick: t, style: Pt.button, type: 'primaryOutlined' }, Ct)
              : null,
          )
        },
        Rt = a('jV+4'),
        Mt = a('ir4X'),
        Bt = function (e) {
          var t,
            a = e.isOwnProfile,
            n = e.isWithheld,
            r = e.namespace,
            o = e.user,
            s = Object(Ee.b)(),
            c = i.a.useContext(z.a).featureSwitches,
            u = n ? wt.a : { isProtected: !!o.protected, isVerified: !!o.verified, translatorType: o.translator_type },
            d = o.name && o.screen_name && !(n && !a),
            m = d ? o.name : '@'.concat(o.screen_name),
            p = i.a.useCallback(function (e, t) {
              return i.a.createElement(xt, { dismiss: e, type: t })
            }, []),
            f = c.isTrue('identity_verification_educational_prompt_enabled'),
            g = c.isTrue('account_taxonomy_automated_label_enabled'),
            h = o.highlightedLabel
          if ('AutomatedLabel' === (null === (t = o.highlightedLabel) || void 0 === t ? void 0 : t.userLabelType)) {
            var y,
              b,
              _,
              v =
                null !== (y = o.highlightedLabel) &&
                void 0 !== y &&
                null !== (b = y.longDescription) &&
                void 0 !== b &&
                b.entities
                  ? i.a.createElement(kt.a, {
                      entities: o.highlightedLabel.longDescription.entities,
                      forceAutoTextDirection: !0,
                      onEntityClick: function () {
                        var e = { items: [{ id: o.id_str, name: o.screen_name, item_type: St.a.ItemType.USER }] }
                        s.scribe(F()(F()({}, r), {}, { element: 'automated_label', action: 'click', data: e }))
                      },
                      text: o.highlightedLabel.longDescription.text,
                    })
                  : (null === (_ = o.highlightedLabel) || void 0 === _ ? void 0 : _.description) || null
            h = g ? F()(F()({}, o.highlightedLabel), {}, { description: v }) : null
          }
          return i.a.createElement(
            ue.a,
            { style: V.a.names, testID: Et },
            i.a.createElement(
              Rt.a,
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
            h ? i.a.createElement(Mt.a, { isIconLarge: !0, label: h }) : null,
          )
        },
        Nt = (a('uFXj'), a('W55q')),
        Ot = a('YeSc'),
        At = { page: 'profile', section: void 0, component: 'newsletter_module' },
        Kt = Object(q.a)()
          .propsFromState(function () {
            return { newsletter: Ot.f }
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
                Nt.c.Subscribed,
              profileUrl: null == n ? void 0 : n.data.revue_account.profile_info.profile_url,
              revueAccountId: null == n ? void 0 : n.config.revue_account_id,
              showNewsletterSubscription: l,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_PROFILE_HEADER',
              ),
              fetchUserBizProfileIfNeeded: Ot.c,
            }
          })
          .withAnalytics(At),
        Ut = Object(q.a)()
          .propsFromState(function () {
            return { newsletter: Ot.f }
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
              y,
              b = e.newsletter,
              _ =
                null == b ||
                null === (t = b.data) ||
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
                null == b ||
                null === (i = b.data) ||
                void 0 === i ||
                null === (o = i.revue_account) ||
                void 0 === o ||
                null === (s = o.newsletter_info) ||
                void 0 === s
                  ? void 0
                  : s.description,
              imageVariants: _,
              originalImage:
                null == b ||
                null === (c = b.data) ||
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
                null == b ||
                null === (p = b.data) ||
                void 0 === p ||
                null === (f = p.revue_account) ||
                void 0 === f ||
                null === (g = f.newsletter_info) ||
                void 0 === g
                  ? void 0
                  : g.title,
              subscriberCount:
                null == b || null === (h = b.data) || void 0 === h || null === (y = h.account_analytics) || void 0 === y
                  ? void 0
                  : y.subscriber_count,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('NEWSLETTER_SUMMARY'),
            }
          }),
        Dt = a('855f'),
        Ht = a('vbJ7'),
        Wt = function (e) {
          var t = e.description,
            a = e.isMobileLayout,
            n = e.originalImage,
            l = e.subscriberCount,
            r = e.title,
            o = e.withThumbnail,
            s = parseInt(l, 10) || 0,
            c = Dt.a.getTruncatedCount(s),
            u = a ? 'subtext2' : 'body'
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              ue.a,
              { style: Yt.contentContainer },
              o && n
                ? i.a.createElement(
                    ue.a,
                    { style: [Yt.newsletterImageContainer, a ? Yt.newsletterImageContainerMobile : void 0] },
                    i.a.createElement(
                      fe.a,
                      { ratio: 1 },
                      i.a.createElement(te.a, { accessibilityLabel: t || '', aspectMode: pe.a.SQUARE, image: n }),
                    ),
                  )
                : null,
              i.a.createElement(
                ue.a,
                { style: [Yt.newsletterInfoContainer, a ? Yt.mobileNewsletterInfoContainer : void 0] },
                i.a.createElement(
                  Ve.b,
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
                  Ve.b,
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
                      Ve.b,
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
      Wt.defaultProps = { withThumbnail: !0 }
      var jt,
        zt,
        Vt,
        qt,
        Gt,
        Jt,
        $t,
        Qt,
        Yt = ae.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Ht.a.hexToCss(ae.a.theme.colors.borderColor, 0.7),
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
        Xt = Ut(Wt),
        Zt = a('Rp9C'),
        ea = a('I4+6'),
        ta = X.a.d834aec4,
        aa = X.a.ab0deccf,
        na = X.a.caeab0f7,
        la = ae.a.create(function (e) {
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
        ra = Kt(function (e) {
          var t = i.a.useContext(z.a).featureSwitches.isTrue('responsive_web_newsletters_profile_subscribe_enabled'),
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
                  var t = Zt.a.getUserItem(d),
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
                ue.a,
                { style: la.moduleLabel },
                i.a.createElement(Ve.b, { size: 'body', weight: 'bold' }, ta),
              ),
              (function (e) {
                var t = '/i/newsletters/subscribe/'.concat(c),
                  a = r ? o : t,
                  n = r ? na : aa,
                  l = ae.a.isDarkMode() ? ae.a.theme.colors.gray50 : ae.a.theme.colors.gray0,
                  s = ea.a.generate({
                    backgroundColor: ae.a.theme.colors.transparent,
                    color: ae.a.theme.colors.primary,
                    customFocusBackgroundColor: l,
                    customHoverBackgroundColor: l,
                    customPressedBackgroundColor: l,
                  })
                return i.a.createElement(
                  me.a,
                  {
                    interactiveStyles: s,
                    link: a,
                    onPress: function () {
                      return f('click')
                    },
                    style: [la.moduleContainer, ae.a.isDarkMode() ? la.darkModeBackground : la.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ue.a,
                      { style: [la.contentContainer, la.summaryContainer] },
                      i.a.createElement(Xt, { isMobileLayout: e, userId: m, withThumbnail: !0 }),
                    ),
                    i.a.createElement(
                      ue.a,
                      { style: [la.buttonContainer, e ? la.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        Ve.b,
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
                var t = e.windowWidth <= ae.a.theme.breakpoints.small
                return g(t)
              })
            : null
        }),
        ia = a('z+ta'),
        oa = (a('YWiL'), a('yH/f'), X.a.b44c0204),
        sa = X.a.de1123f4,
        ca = function (e, t, a) {
          var n = (function (e, t) {
            var a = new Date()
            return a.setHours(e), a.setMinutes(t), (0, X.a.d725a288)(a)
          })(t, a)
          return (function (e) {
            return new Date().toLocaleString('en-US', { weekday: 'long' }) === e
          })(e)
            ? sa({ time: n })
            : oa({ day: e, time: n })
        },
        ua = a('EfHu'),
        da = ae.a.create(function (e) {
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
        ma = function () {
          return i.a.createElement(ue.a, { style: da.image }, i.a.createElement(ua.a, { style: da.icon }))
        },
        pa = function (e) {
          var t = e.label,
            a = e.link,
            n = e.onPress,
            l = ae.a.isDarkMode() ? ae.a.theme.colors.gray50 : ae.a.theme.colors.gray0,
            r = ea.a.generate({
              backgroundColor: ae.a.theme.colors.transparent,
              color: ae.a.theme.colors.primary,
              customFocusBackgroundColor: l,
              customHoverBackgroundColor: l,
              customPressedBackgroundColor: l,
            })
          return i.a.createElement(
            me.a,
            { interactiveStyles: r, link: a, onPress: n, style: fa.button },
            i.a.createElement(
              Ve.b,
              { align: 'center', size: 'body', style: fa.buttonText, weight: 'bold', withInteractiveStyling: !1 },
              t,
            ),
          )
        },
        fa = ae.a.create(function (e) {
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
        ga = function (e) {
          var t = e.actions
          return t && t.length > 0
            ? i.a.createElement(
                ue.a,
                { style: fa.actionBar },
                t.map(function (e, t) {
                  return i.a.createElement(
                    i.a.Fragment,
                    { key: t },
                    0 !== t ? i.a.createElement(ue.a, { style: fa.separator }) : null,
                    i.a.createElement(pa, e),
                  )
                }),
              )
            : null
        },
        ha = ae.a.create(function (e) {
          return {
            body: { justifyContent: 'center', flex: 1, padding: e.spaces.space12, textAlign: 'left' },
            bodyLine: { display: 'flex', flexDirection: 'row', marginVertical: e.spaces.space2 },
          }
        }),
        ya = function (e) {
          var t = e.headline,
            a = e.isMobileLayout,
            n = e.lines
          return i.a.createElement(
            ue.a,
            { style: ha.body },
            t && i.a.createElement(Ve.b, { size: 'body', weight: 'bold' }, t),
            n.map(function (e, t) {
              return i.a.createElement(
                ue.a,
                { key: t, style: ha.bodyLine },
                null == e
                  ? void 0
                  : e.elements.map(function (e, t) {
                      var n
                      return (
                        e &&
                        i.a.createElement(
                          Ve.b,
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
          return i.a.createElement(Ve.b, { size: t ? 'subtext1' : 'body', weight: 'bold' }, a)
        },
        _a = ae.a.create(function (e) {
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
        va = function (e) {
          var t = e.children,
            a = e.isMobileLayout
          return i.a.createElement(ue.a, { style: [_a.container, a ? _a.mobileContainer : void 0] }, t)
        },
        wa = ae.a.create(function (e) {
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
        ka = function (e) {
          var t = e.actions,
            a = e.bodyElements,
            n = e.headline,
            l = e.label,
            r = e.media
          return i.a.createElement(re.a, null, function (e) {
            var o = e.windowWidth <= ae.a.theme.breakpoints.small
            return i.a.createElement(
              ue.a,
              { style: wa.spotlight },
              i.a.createElement(ba, { isMobileLayout: o, label: l }),
              i.a.createElement(
                ue.a,
                { style: [wa.spotlightCard, ae.a.isDarkMode() ? wa.darkModeContentBackground : wa.contentBackground] },
                i.a.createElement(
                  ue.a,
                  { style: wa.spotlightContent },
                  i.a.createElement(va, { children: r, isMobileLayout: o }),
                  i.a.createElement(ya, { headline: n, isMobileLayout: o, lines: a }),
                ),
                t && i.a.createElement(ga, { actions: t }),
              ),
            )
          })
        },
        Ea = a('CVPS'),
        Sa = a.n(Ea),
        Fa = X.a.jaaa8984,
        Ca = X.a.c2059c9f,
        Ta = X.a.e2acb642,
        Ia = X.a.e2a5bd5f,
        La = X.a.e41a0dc1,
        Pa = X.a.e0d7da6b,
        xa = X.a.fd00a769,
        Ra = X.a.i7059f55,
        Ma = X.a.a7391347,
        Ba = void 0 !== jt ? jt : (jt = a('hyc7')),
        Na = function (e) {
          var t,
            a,
            n,
            l,
            r,
            o,
            s,
            c = e.profileSpotlightRef,
            u = i.a.useContext(z.a).featureSwitches.isTrue('responsive_web_location_spotlight_v1_display'),
            d = Sa()(Ba, c),
            m = null === (t = d.data.address) || void 0 === t ? void 0 : t.formatted_address,
            p = function () {
              return { elements: [{ text: Ia, color: 'green500' }] }
            },
            f = function (e) {
              var t = null == e ? void 0 : e.is_open
              if (null == t) return null
              var a = t ? (null == e ? void 0 : e.closes) : null == e ? void 0 : e.opens
              return null == a
                ? null
                : {
                    elements: [
                      { text: t ? xa : La, color: t ? 'green500' : 'red500' },
                      { text: ' · ' },
                      { text: ''.concat(t ? Pa : Ra, ' ').concat(ca(a.day, a.time.hour, a.time.minute)) },
                    ],
                  }
            },
            g = function () {
              return { elements: [{ text: Ma }] }
            }
          return u
            ? i.a.createElement(ka, {
                actions:
                  ((s = []),
                  m &&
                    s.push({
                      label: Ca,
                      link: 'https://www.google.com/maps/search/?api=1&query='.concat(encodeURIComponent(m)),
                    }),
                  s.push({ label: Ta, link: 'dummy_contact_link' }),
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
                label: Fa,
                media: i.a.createElement(ma, null),
              })
            : null
        },
        Oa = a('tI3i'),
        Aa = a.n(Oa),
        Ka = X.a.d58baa7e,
        Ua = void 0 !== zt ? zt : (zt = a('0zj1')),
        Da = ae.a.create(function (e) {
          return {
            contentContainer: { flexDirection: 'row' },
            newsletterImageContainer: {
              borderColor: Ht.a.hexToCss(ae.a.theme.colors.borderColor, 0.7),
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
        Ha = function (e) {
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
            h = Sa()(Ua, g),
            y =
              null == h ||
              null === (t = h.data) ||
              void 0 === t ||
              null === (a = t.revue_account) ||
              void 0 === a ||
              null === (n = a.newsletter_info) ||
              void 0 === n
                ? void 0
                : n.description,
            b =
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
            k = Ka(w),
            E = f ? 'subtext2' : 'body'
          return i.a.createElement(
            ue.a,
            { style: Da.contentContainer },
            b
              ? i.a.createElement(
                  ue.a,
                  { style: [Da.newsletterImageContainer, f ? Da.newsletterImageContainerMobile : void 0] },
                  i.a.createElement(
                    fe.a,
                    { ratio: 1 },
                    i.a.createElement(te.a, { accessibilityLabel: y || '', aspectMode: pe.a.SQUARE, image: b }),
                  ),
                )
              : null,
            i.a.createElement(
              ue.a,
              { style: [Da.newsletterInfoContainer, f ? Da.mobileNewsletterInfoContainer : void 0] },
              i.a.createElement(
                Ve.b,
                {
                  align: 'left',
                  numberOfLines: 1,
                  size: E,
                  style: f ? Da.newsletterFieldMobile : Da.newsletterField,
                  weight: 'bold',
                },
                _,
              ),
              i.a.createElement(
                Ve.b,
                {
                  align: 'left',
                  color: 'gray700',
                  numberOfLines: 2,
                  size: E,
                  style: [Da.newsletterDescription, f ? Da.newsletterFieldMobile : Da.newsletterField],
                },
                y,
              ),
              v
                ? i.a.createElement(
                    Ve.b,
                    {
                      align: 'left',
                      color: 'gray700',
                      size: E,
                      style: f ? Da.newsletterFieldMobile : Da.newsletterField,
                    },
                    i.a.createElement(X.a.I18NFormatMessage, { $i18n: 'ee512b37', formattedCount: k, count: w }),
                  )
                : null,
            ),
          )
        },
        Wa = X.a.d834aec4,
        ja = X.a.ab0deccf,
        za = X.a.caeab0f7,
        Va = void 0 !== Vt ? Vt : (Vt = a('hRT2')),
        qa = void 0 !== qt ? qt : (qt = a('bu6k')),
        Ga = ae.a.create(function (e) {
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
        Ja = function (e) {
          var t,
            a,
            n = e.profileSpotlightRef,
            l = e.userRef,
            r = i.a.useContext(z.a).featureSwitches,
            o = Object(Ee.b)(),
            s = Sa()(Va, l),
            c = Sa()(qa, n),
            u = null == c ? void 0 : c.config.revue_account_id,
            d = null == c ? void 0 : c.data.revue_account.profile_info.profile_url,
            m =
              (null == c || null === (t = c.context) || void 0 === t ? void 0 : t.user_subscription_status) ===
              Nt.c.Subscribed,
            p =
              null == c || null === (a = c.data) || void 0 === a
                ? void 0
                : a.revue_account.account_settings.twitter_profile_subscriptions_enabled,
            f = r.isTrue('responsive_web_newsletters_profile_subscribe_enabled') && p,
            g = i.a.useCallback(
              function (e) {
                if (f) {
                  var t,
                    a = Zt.a.getUserItem({
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
                ue.a,
                { style: Ga.moduleLabel },
                i.a.createElement(Ve.b, { size: 'body', weight: 'bold' }, Wa),
              ),
              (function (e) {
                var t
                Aa()(s.legacy.screen_name, 'user.legacy.screen_name is undefined')
                var a = '/i/newsletters/subscribe/'.concat(s.legacy.screen_name),
                  n = null !== (t = m ? d : a) && void 0 !== t ? t : void 0,
                  l = m ? za : ja,
                  r = ae.a.isDarkMode() ? ae.a.theme.colors.gray50 : ae.a.theme.colors.gray0,
                  o = ea.a.generate({
                    backgroundColor: ae.a.theme.colors.transparent,
                    color: ae.a.theme.colors.primary,
                    customFocusBackgroundColor: r,
                    customHoverBackgroundColor: r,
                    customPressedBackgroundColor: r,
                  })
                return i.a.createElement(
                  me.a,
                  {
                    interactiveStyles: o,
                    link: n,
                    onPress: function () {
                      return g('click')
                    },
                    style: [Ga.moduleContainer, ae.a.isDarkMode() ? Ga.darkModeBackground : Ga.defaultBackground],
                  },
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ue.a,
                      { style: [Ga.contentContainer, Ga.summaryContainer] },
                      i.a.createElement(Ha, { isMobileLayout: e, revueModuleRef: c }),
                    ),
                    i.a.createElement(
                      ue.a,
                      { style: [Ga.buttonContainer, e ? Ga.mobileButtonContainer : void 0] },
                      i.a.createElement(
                        Ve.b,
                        {
                          align: 'center',
                          color: 'link',
                          size: 'body',
                          style: Ga.actionButton,
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
            ? i.a.createElement(re.a, null, function (e) {
                var t = e.windowWidth <= ae.a.theme.breakpoints.small
                return h(t)
              })
            : null
        },
        $a = void 0 !== Gt ? Gt : (Gt = a('+wNI')),
        Qa = void 0 !== Jt ? Jt : (Jt = a('Xcj+')),
        Ya = Object.freeze({ Location: 'AboutModule', Newsletter: 'RevueModule' }),
        Xa = function (e) {
          var t = e.profileSpotlightRef,
            a = e.userRef,
            n = i.a.useContext(z.a).loggedInUserId,
            l = Sa()($a, a),
            r = Sa()(Qa, t),
            o =
              !n ||
              l.legacy.blocking ||
              l.legacy.blocked_by ||
              !!l.legacy.withheld_scope ||
              (l.legacy.protected && !l.legacy.following)
          switch (r.__typename) {
            case Ya.Location:
              return i.a.createElement(Na, { profileSpotlightRef: r })
            case Ya.Newsletter:
              return o ? null : i.a.createElement(Ja, { profileSpotlightRef: r, userRef: l })
            default:
              return null
          }
        },
        Za = void 0 !== $t ? $t : ($t = a('M8le')),
        en = ae.a.create(function (e) {
          return { container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        tn = function (e) {
          var t,
            a,
            n,
            l = e.userRef,
            r = Sa()(Za, l),
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
                ue.a,
                { style: en.container },
                i.a.createElement(Xa, { profileSpotlightRef: o, userRef: r }),
              )
            : null
        },
        an = a('Fr3L'),
        nn = a('IAZG'),
        ln = void 0 !== Qt ? Qt : (Qt = a('S97D')),
        rn = function (e) {
          var t,
            a = e.userScreenName,
            n = Object(nn.a)(ln, { screen_name: a }),
            l = null == n || null === (t = n.user_result_by_screen_name) || void 0 === t ? void 0 : t.result
          return l ? i.a.createElement(tn, { userRef: l }) : null
        },
        on = function (e) {
          var t = e.userScreenName
          return i.a.createElement(
            an.a,
            { errorConfig: { context: 'PROFILE_SPOTLIGHTS' } },
            i.a.createElement(rn, { userScreenName: t }),
          )
        },
        sn = a('7JQg'),
        cn = a('7wqI'),
        un = a('Jkc4'),
        dn = a('wCd/'),
        mn = function (e) {
          var t = e.isActiveCreator,
            a = e.isOwnProfile,
            n = e.superFollowersCount,
            l = e.user,
            r = l.followers_count,
            o = l.friends_count,
            s = l.screen_name
          return i.a.createElement(un.a, null, function (e) {
            return i.a.createElement(dn.a, {
              followersCount: r,
              friendsCount: o,
              onPress: e(),
              screenName: s,
              superFollowersCount: t && a ? n : void 0,
              withLink: Object(cn.b)({ isOwnProfile: a, user: l }),
            })
          })
        },
        pn = { page: 'profile', section: 'header' },
        fn = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a(e, n) {
            var l
            return (
              T()(this, a),
              (l = t.call(this, e, n)),
              A()(
                x()(l),
                '_shouldUseProfileSpotlightRendering',
                l.context.featureSwitches.isTrue('responsive_web_profile_spotlight_v0_display'),
              ),
              A()(x()(l), '_handleRemoveClusterFollow', function () {
                l.setState({ shouldShowClusterFollow: !1 })
              }),
              (l.state = { shouldShowClusterFollow: !1 }),
              l
            )
          }
          return (
            L()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(it.a)(t, this.state) || !Object(it.a)(e, this.props)
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
                    sn.c,
                    { namespace: pn },
                    i.a.createElement(
                      ue.a,
                      null,
                      i.a.createElement(he, { isOwnProfile: s, isWithheld: a, user: o }),
                      i.a.createElement(
                        ue.a,
                        { style: [V.a.content, gn.content, c && V.a.withheld] },
                        i.a.createElement(
                          ue.a,
                          { style: V.a.avatarAndButton },
                          i.a.createElement(oe, { isOwnProfile: s, isWithheld: a, user: o }),
                          i.a.createElement(Ae, {
                            history: this.props.history,
                            isWithheld: a,
                            loggedInUserId: n,
                            onFollowButtonOffscreen: this.props.onFollowButtonOffscreen,
                            promotedContent: this.props.promotedContent,
                            user: o,
                          }),
                        ),
                        i.a.createElement(Bt, { isOwnProfile: s, isWithheld: a, namespace: pn, user: o }),
                        c ? null : i.a.createElement(rt, { isOwnProfile: s, professionalCategoryName: l, user: o }),
                        u
                          ? null
                          : i.a.createElement(mn, {
                              isActiveCreator: t,
                              isOwnProfile: s,
                              superFollowersCount: r,
                              user: o,
                            }),
                        d
                          ? null
                          : i.a.createElement(
                              ue.a,
                              { style: gn.marginTopXSmall },
                              i.a.createElement(ot.a, { userId: o.id_str, userScreenName: o.screen_name }),
                            ),
                        o.muting ? i.a.createElement(_t, { user: o }) : null,
                      ),
                      this._shouldUseProfileSpotlightRendering
                        ? i.a.createElement(on, { userScreenName: o.screen_name })
                        : m
                        ? null
                        : i.a.createElement(ra, { screenName: o.screen_name, user: o, userId: o.id_str }),
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
                  return i.a.createElement(ia.a, {
                    onRemoveClusterFollow: this._handleRemoveClusterFollow,
                    userId: e.id_str,
                  })
                },
              },
            ]),
            a
          )
        })(i.a.Component)
      A()(fn, 'contextType', z.a)
      var gn = ae.a.create(function (e) {
          return { content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } }
        }),
        hn = fn,
        yn = a('8UdT'),
        bn = a('dwig'),
        _n = a('GOQE'),
        vn = a('v//M'),
        wn = a('0+qk'),
        kn = a('drnk'),
        En = a('9Bb1'),
        Sn = a('iFPY'),
        Fn = a('5S/X'),
        Cn = a('oQhu'),
        Tn = a('xZGM'),
        In = function (e, t) {
          return Object(Tn.D)(e, Tn.y)
        },
        Ln = Object(q.a)()
          .propsFromState(function () {
            return { shouldShowEducation: In, isLoggedIn: g.n }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Tn.z)(Tn.y)
              },
            }
          })
          .withAnalytics({ section: 'nft_nux_consumption' }),
        Pn = a.p + 'nft_education_graphic.72be3745.png',
        xn = a('Wms4'),
        Rn = a('feu+'),
        Mn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Je.a)(
            'svg',
            F()(
              F()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ge.a.root, e.style],
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
      Mn.metadata = { width: 24, height: 24 }
      var Bn = Mn,
        Nn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Je.a)(
            'svg',
            F()(
              F()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ge.a.root, e.style],
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
      Nn.metadata = { width: 24, height: 24 }
      var On = Nn,
        An = X.a.ebf5ec25,
        Kn = X.a.c405ac8d,
        Un = X.a.a893d601,
        Dn = X.a.eb023c93,
        Hn = X.a.gc65c0a9,
        Wn = X.a.d17e8aa3,
        jn = X.a.ff9c6943,
        zn = ae.a.create(function (e) {
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
        Vn = Ln(function (e) {
          var t = e.addEducationFlag,
            a = e.analytics,
            n = e.isLoggedIn,
            l = e.onEducationSheetDismiss,
            r = e.shouldShowEducation,
            o = i.a.useContext(z.a).featureSwitches,
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
            X.a.I18NFormatMessage,
            { $i18n: 'fa13e739' },
            i.a.createElement(
              Ve.b,
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
            ? i.a.createElement(Rn.a, {
                accessibilityRole: 'dialog',
                actionLabel: Un,
                contentStyle: zn.interstitialContent,
                graphic: function () {
                  return i.a.createElement(
                    ue.a,
                    { style: zn.image },
                    i.a.createElement(te.a, { accessibilityLabel: '', aspectMode: pe.a.exact(2.5), image: Pn }),
                  )
                },
                graphicDisplayMode: 'illustrationFullWidth',
                headline: Kn,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  a.scribe({ element: 'ok_button', action: 'click' }), u()
                },
                onClose: u,
                subtext: i.a.createElement(
                  ue.a,
                  null,
                  i.a.createElement(
                    ue.a,
                    null,
                    i.a.createElement(Ve.b, { size: 'headline2', style: zn.heading, weight: 'bold' }, Dn),
                    i.a.createElement(Ve.b, null, d),
                  ),
                  i.a.createElement(
                    ue.a,
                    null,
                    i.a.createElement(Ve.b, { size: 'headline2', style: zn.heading, weight: 'bold' }, Hn),
                    i.a.createElement(
                      ue.a,
                      { style: zn.iconContainer },
                      i.a.createElement(Bn, { style: zn.icon }),
                      i.a.createElement(Ve.b, null, jn),
                    ),
                    i.a.createElement(
                      ue.a,
                      { style: [zn.iconContainer, zn.reducedMarginBottom] },
                      i.a.createElement(Xe.a, { style: zn.icon }),
                      i.a.createElement(Ve.b, null, Wn),
                    ),
                    i.a.createElement(
                      ue.a,
                      { style: [zn.iconContainer, zn.noMarginTop] },
                      i.a.createElement(ue.a, { style: zn.icon }),
                      i.a.createElement(
                        xn.a,
                        { style: zn.label },
                        i.a.createElement(On, { style: zn.labelIcon }),
                        i.a.createElement(Ve.b, { weight: 'bold' }, An),
                      ),
                    ),
                  ),
                ),
                useBrandedActionButtons: !1,
                withCloseButton: !0,
              })
            : null
        }),
        qn = a('AJXH'),
        Gn = a('rJoH'),
        Jn = a('Y6L+'),
        $n = a('jS2K'),
        Qn = a('IG4P'),
        Yn = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a() {
            return T()(this, a), t.apply(this, arguments)
          }
          return (
            L()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(it.a)(e, this.props)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fullUser,
                    a = e.shouldDisplayUserActionSheet
                  return i.a.createElement(
                    ue.a,
                    null,
                    this._renderBanner(),
                    i.a.createElement(
                      ue.a,
                      { style: [V.a.content, V.a.withheld] },
                      i.a.createElement(
                        ue.a,
                        { style: V.a.avatarAndButton },
                        this._renderAvatar(),
                        i.a.createElement(ue.a, { style: V.a.buttonAffordance }),
                        a && t && i.a.createElement(Pe, { buttonStyle: V.a.menuSheetButton, user: t }),
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
                    var t = e.windowWidth >= ae.a.theme.breakpoints.medium
                    return i.a.createElement(
                      ue.a,
                      { accessibilityState: { hidden: !0 }, style: V.a.avatar },
                      i.a.createElement(le.default, {
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
                    ue.a,
                    { style: V.a.banner },
                    i.a.createElement(fe.a, { ratio: ae.a.theme.aspectRatios.profileBanner }),
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
                    ue.a,
                    { style: V.a.names },
                    i.a.createElement(Rt.a, {
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
        Xn = a('wytG'),
        Zn = a('VS6U'),
        el = (a('0zG9'), a('muX9')),
        tl = function (e) {
          var t = e.screenName,
            a = JSON.stringify(
              { '@context': 'http://schema.org', '@type': 'ProfilePage', name: t, creativeWorkStatus: 'Suspended' },
              null,
              2,
            )
          return i.a.createElement(el.a, { script: [{ type: 'application/ld+json', innerHTML: a }] })
        },
        al = a('2V3d'),
        nl = a('ipry'),
        ll = a('E4zi'),
        rl = function (e) {
          var t,
            a,
            n,
            l,
            r,
            o = e.user,
            s =
              null === (t = o.entities) ||
              void 0 === t ||
              null === (a = t.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0],
            c = {
              '@context': 'http://schema.org',
              '@type': 'ProfilePage',
              dateCreated: o.created_at,
              author: Object(ll.a)(o),
              contentRating:
                ((l = o),
                (r = l.profile_interstitial_type),
                ['offensive_profile_content', 'sensitive_media'].includes(r) ? 'Possibly Adult' : ''),
            }
          return (
            s && (c.relatedLink = [s.url, s.expanded_url]),
            i.a.createElement(el.a, {
              script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(c, null, 2) }],
            })
          )
        },
        il = a('Qayx'),
        ol = a('G8HL'),
        sl = a('mw9i'),
        cl = a('zfvc'),
        ul = a('FIs5'),
        dl = a('Q0VY'),
        ml = a('FiRh'),
        pl = a('0yYu'),
        fl = a('k/OQ'),
        gl = a('zCf4'),
        hl = X.a.fa98627a,
        yl = X.a.a2811f96,
        bl = X.a.c6ea308b,
        _l = X.a.d67658c0,
        vl = X.a.ccc9153f,
        wl = X.a.bab1f8b0,
        kl = X.a.a52b03a5,
        El = X.a.cc3c6989,
        Sl = 'Twitter Articles',
        Fl = X.a.add55c97,
        Cl = X.a.d7b8eba9,
        Tl = X.a.c0098d49,
        Il = X.a.b721eb37,
        Ll = X.a.c4af3561,
        Pl = X.a.dbcaaab5,
        xl = X.a.hf162fb6,
        Rl = X.a.ad7b2b38,
        Ml = X.a.f19b4073,
        Bl = X.a.ha62da97,
        Nl = X.a.ica87fde,
        Ol = X.a.e79ed125,
        Al = X.a.g8475f82,
        Kl = X.a.c9a1cb5d,
        Ul = X.a.e7b201dd,
        Dl = X.a.d09e12c4,
        Hl = X.a.gbf342a4,
        Wl = X.a.eeab4adf,
        jl = X.a.i144ee20,
        zl = X.a.j58e7b00,
        Vl = X.a.d834ab9c,
        ql = { section: 'profile_interstitial' },
        Gl = Object(Xn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, '8KtR'))
        }),
        Jl = Object(Xn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'cFl3'))
        }),
        $l = Object(Xn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ivpD'))
        }),
        Ql = Object(Xn.a)(function () {
          return Promise.all([a.e(0), a.e(112)]).then(a.bind(null, 'ylAD'))
        }),
        Yl = 'about',
        Xl = 'likes',
        Zl = 'media',
        er = 'reactions',
        tr = 'superfollows',
        ar = 'twitter-articles',
        nr = 'with_replies',
        lr = 36e5,
        rr = Object(Cn.a)(function (e) {
          return function () {
            return { defaultText: e }
          }
        }),
        ir = (function (e) {
          M()(a, e)
          var t = N()(a)
          function a(e, n) {
            var l
            return (
              T()(this, a),
              (l = t.call(this, e, n)),
              A()(
                x()(l),
                '_safetyModeViolatorExperienceEnabled',
                l.context.featureSwitches.isTrue('rito_safety_mode_blocked_profile_enabled'),
              ),
              A()(
                x()(l),
                '_safetyModeUserExperienceEnabled',
                l.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              A()(
                x()(l),
                '_shouldEnableProfessionalCategoryLabelViewing',
                l.context.featureSwitches.isTrue('responsive_web_category_label_viewing_enabled'),
              ),
              A()(
                x()(l),
                '_shouldEnableProfessionalCategoryLabelHoldback',
                l.context.featureSwitches.isTrue('responsive_web_professional_journeys_holdback_enabled'),
              ),
              A()(
                x()(l),
                '_shouldEnableProfessionalCategoryLabelDisplaySwitch',
                l.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              A()(
                x()(l),
                '_canViewTwitterArticles',
                l.context.featureSwitches.isTrue('responsive_web_twitter_article_view_enabled'),
              ),
              A()(x()(l), '_renderContainer', function () {
                var e = l.props,
                  t = e.fetchStatus,
                  a = e.isNotFound,
                  n = e.isRefreshing,
                  r = e.isSuspended,
                  o = e.screenName,
                  s = r || a
                return i.a.createElement(
                  Qn.a,
                  { isRefreshing: n, onRefresh: l._handlePullToRefresh },
                  i.a.createElement(
                    ue.a,
                    { style: sr.containerGrow },
                    i.a.createElement(
                      sl.a,
                      null,
                      i.a.createElement(vn.a, {
                        accessibilityLabel: vl({ screenName: o }),
                        fetchStatus: s ? c.a.LOADED : t,
                        onRequestRetry: l._handleRequestRetry,
                        render: l._renderHeaderAndContent,
                      }),
                    ),
                  ),
                )
              }),
              A()(x()(l), '_renderHeaderAndContent', function () {
                var e = l.state.showNftAvatarEducation
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  e && i.a.createElement(Vn, { onEducationSheetDismiss: l._handleOnDismissNftAvatarEducation }),
                  l._renderHeader(),
                  l._renderContent(),
                )
              }),
              A()(x()(l), '_renderContent', function () {
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
              A()(x()(l), '_isViewingOwnProfile', function () {
                var e = l.context.loggedInUserId,
                  t = l.props.user
                return t && e === t.id_str
              }),
              A()(x()(l), '_shouldShowProfileInterstitial', function () {
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
                  u = e === nl.a.SensitiveMedia || e === nl.a.OffensiveProfileContent,
                  d = u && (n.following || a || Fn.b)
                return !(l._isViewingOwnProfile() || l._isProtectedFromViewer() || s || c || o || d)
              }),
              A()(x()(l), '_isProtectedFromViewer', function () {
                var e = l.props.user
                return e && e.protected && !l._isViewingOwnProfile() && !e.following
              }),
              A()(x()(l), '_handleRequestRetry', function () {
                l._fetchOneUserIfNeeded(l.props)
              }),
              A()(x()(l), '_handlePullToRefresh', function () {
                var e = l.props.user
                e ? l._fetchOneUser(e.id_str) : l._fetchOneUserIfNeeded(l.props)
              }),
              A()(x()(l), '_handleShowActionedTweets', function () {
                var e = l.props,
                  t = e.history,
                  a = e.user
                a && t.push('/settings/safety_mode/actioned_tweets/'.concat(a.id_str))
              }),
              A()(x()(l), '_handleShowBlockedTweets', function () {
                var e = l.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace,
                  n = e.user
                l.setState({ showBlockedTweets: !0 }),
                  null != n &&
                    n.smart_blocking &&
                    l._safetyModeUserExperienceEnabled &&
                    t(F()(F()({}, a), {}, { page: 'auto_blocking_profile', section: 'profile', action: 'click' }))
              }),
              A()(x()(l), '_handleOnConfirmProfileInterstitial', function () {
                var e = l.props,
                  t = e.scribeAction,
                  a = e.scribeNamespace
                l.setState({ userProfileInterstitialDismissed: !0 }),
                  t(F()(F()(F()({}, a), ql), {}, { action: 'click' }))
              }),
              A()(x()(l), '_handleOnDismissNftAvatarEducation', function () {
                l.setState({ showNftAvatarEducation: !1 })
              }),
              A()(x()(l), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  a = e.fetchStatus,
                  n = l.props.recordTTFL
                if ((a === c.a.FAILED && (l._shouldRecordTTFL = !1), l._shouldRecordTTFL && t.length)) {
                  var r = t.some(function (e) {
                    return e.type === yn.b.Tweet
                  })
                  l._shouldRecordTTFL = !1
                  r && n('profile', { source: 'graphql' })
                }
              }),
              A()(x()(l), '_handleDismissTwitterToolboxUpsell', function () {
                l.setState({ showTwitterToolboxUpsell: !1 })
              }),
              A()(x()(l), '_handleFollowButtonOffscreen', function (e) {
                var t = e.isOffscreen
                l.setState({ showFollowButtonRightControl: t })
              }),
              A()(x()(l), '_getSmartBlockEndTimeSentence', function () {
                var e = l.props.user
                if (null != e && e.smart_blocking_expiration) {
                  var t = Date.now(),
                    a = parseInt(e.smart_blocking_expiration, 10),
                    n = a > t ? a - t : 0
                  if (n <= 72e5) return Pl
                  var r = Math.floor(n / lr),
                    i = Math.floor(r / 24),
                    o = r % 24
                  return 0 === i
                    ? Ml({ hourCount: o })
                    : 0 === o
                    ? Rl({ dayCount: i })
                    : xl({ dayCount: i, hourCount: o })
                }
                return ''
              }),
              A()(x()(l), '_getProfessionalCategory', function () {
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
              A()(x()(l), '_shouldDisplayProfessionalCategoryLabel', function () {
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
              A()(x()(l), '_getProfessionalCategoryNameIfDisplayable', function () {
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
            L()(a, [
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
                        F()(F()({}, i), {}, { page: 'auto_blocked_profile', section: 'profile', action: 'impression' }),
                      ),
                      e._isUserAutoblocking() &&
                        r(
                          F()(
                            F()({}, i),
                            {},
                            { page: 'auto_blocking_profile', section: 'profile', action: 'impression' },
                          ),
                        ),
                      e._isUserAvatarVerified() && e.setState({ showNftAvatarEducation: !0 })
                  }),
                    this._shouldDisplayProfessionalCategoryLabel() && r(F()(F()({}, i), U.c())),
                    n()
                      .catch(a())
                      .then(function () {
                        e._shouldShowProfileInterstitial() && r(F()(F()(F()({}, i), ql), {}, { action: 'impression' }))
                      }),
                    this._canViewTwitterArticles && null != o && o.id_str && l(o.id_str, m.e.PUBLISHED).catch(a())
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
                      r(o.id_str, m.e.PUBLISHED).catch(n())
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
                      n(F()(F()(F()({}, l), ql), {}, { action: 'impression' }))
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
                    y = f ? '' : '@'.concat((m && m.screen_name) || d || '', ' '),
                    b = g ? null : i.a.createElement(wn.a, { getLocationState: rr(y), history: n }),
                    _ =
                      m && !g
                        ? i.a.createElement(Rt.a, {
                            isProtected: m.protected,
                            isVerified: m.verified,
                            name: m.name,
                            screenName: m.screen_name,
                            withScreenName: !1,
                          })
                        : hl,
                    v = m && !g && a === c.a.LOADED ? this._renderSubtitle(m) : void 0,
                    w = m && 'twitter://user?screen_name='.concat(m.screen_name),
                    k = m && 'https://twitter.com/'.concat(m.screen_name || ''),
                    E = m && _l({ fullName: m.name, screenName: m.screen_name })
                  return i.a.createElement(Zn.a, {
                    backLocation: '/',
                    composeOptions: { defaultText: y },
                    documentTitle: h,
                    history: n,
                    primaryContent: i.a.createElement(
                      bn.a,
                      { fab: b },
                      i.a.createElement(Gn.a, {
                        canonical: k,
                        description: null == m ? void 0 : m.description,
                        image: null == m ? void 0 : m.profile_image_url_https,
                        title: E,
                        type: 'profile',
                      }),
                      Fn.b && m
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(rl, { user: m }),
                            i.a.createElement(En.a, { description: null == m ? void 0 : m.description }),
                          )
                        : null,
                      i.a.createElement(H.a, { deepLink: w }),
                      i.a.createElement(W.a, {
                        featureSwitches: this.context.featureSwitches,
                        loggedInUserId: e,
                        pageType: 'profile',
                        userLanguage: p,
                      }),
                      k ? i.a.createElement(D.a, { canonical: k }) : null,
                      i.a.createElement(vn.a, {
                        accessibilityLabel: vl({ screenName: d }),
                        fetchStatus: m || g ? c.a.LOADED : a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._renderContainer,
                      }),
                      l
                        ? i.a.createElement(Sn.a, { history: n, location: u, userId: null == m ? void 0 : m.id_str })
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
                        cl.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        i.a.createElement(_e.a, { promotedContent: t, userId: a.id_str }),
                      )
                    : void 0
                },
              },
              {
                key: '_renderSubtitle',
                value: function (e) {
                  var t = this.props.location.pathname.toLowerCase(),
                    a = e.screen_name.toLowerCase()
                  return t.indexOf('/'.concat(a, '/').concat(Xl)) > -1
                    ? i.a.createElement(il.a, { count: e.favourites_count, type: 'likes' })
                    : t.indexOf('/'.concat(a, '/').concat(er)) > -1
                    ? i.a.createElement(il.a, { count: e.favourites_count, type: 'reactions' })
                    : t.indexOf('/'.concat(a, '/').concat(Zl)) > -1
                    ? i.a.createElement(il.a, { count: e.media_count, type: 'media' })
                    : i.a.createElement(il.a, { count: e.statuses_count, type: 'tweets' })
                },
              },
              {
                key: '_renderSidebarContent',
                value: function () {
                  var e = this.props.user
                  return e
                    ? i.a.createElement($n.a, {
                        hideMediaModule: this._shouldHideMediaModule(),
                        userId: e.id_str,
                        userScreenName: e.screen_name,
                        withTopicsToFollow: Object(cn.b)({ user: e, isOwnProfile: this._isViewingOwnProfile() || !1 }),
                      })
                    : i.a.createElement(j.a, null)
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
                    Fn.b && d && m
                      ? i.a.createElement(tl, { screenName: m })
                      : Fn.b
                      ? i.a.createElement(qn.a, null)
                      : null,
                    i.a.createElement(ul.a, {
                      buttonText: t,
                      buttonType: a,
                      header: n,
                      message: l,
                      onButtonPress: r,
                      onSecondaryButtonPress: o,
                      secondaryButtonText: s,
                      secondaryButtonType: c,
                      style: [cr.root, g ? cr.verticalPaddingWithUpsell : cr.verticalPadding],
                    }),
                    g && f ? i.a.createElement(al.a, { onDismiss: this._handleDismissTwitterToolboxUpsell }) : null,
                  )
                },
              },
              {
                key: '_renderUserProfileInterstitialed',
                value: function () {
                  var e = this.props.userProfileInterstitialType,
                    t = Object(kn.a)(e),
                    a = t.header,
                    n = t.message
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: Vl,
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
                    a = Ol({ screenName: t }),
                    n = i.a.createElement(
                      X.a.I18NFormatMessage,
                      { $i18n: 'e645092a', screenName: t },
                      i.a.createElement(Ve.b, { link: 'https://support.twitter.com/articles/117063' }, X.a.f6a72a2a),
                    )
                  return this._renderEmptyState({
                    header: a,
                    message: n,
                    buttonText: Wl,
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
                    n = Bl({ screenName: a }),
                    l = i.a.createElement(Ve.b, { color: 'gray700', weight: 'bold' }),
                    r = i.a.createElement(
                      ue.a,
                      null,
                      i.a.createElement(
                        Ve.b,
                        { color: 'gray700', style: { paddingBottom: ae.a.theme.spaces.space20 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'dd7d4939', smartBlockEndTimeSentence: t },
                          i.a.cloneElement(l, null, X.a.g6645d94({ screenName: a })),
                        ),
                      ),
                      i.a.createElement(
                        Ve.b,
                        { color: 'gray700', style: { paddingBottom: ae.a.theme.spaces.space8 } },
                        i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'ef0a76ab' },
                          i.a.cloneElement(l, null, X.a.g08eceae({ screenName: a })),
                        ),
                      ),
                    )
                  return this._renderEmptyState({
                    header: n,
                    message: r,
                    buttonText: jl,
                    buttonType: 'primaryFilled',
                    secondaryButtonText: zl,
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
                      i.a.createElement(Ve.b, { link: 'https://support.twitter.com/articles/20172060' }, X.a.de078c23),
                    )
                  return this._renderEmptyState({ header: Nl, message: a })
                },
              },
              {
                key: '_renderUserProfileAutoblockedBy',
                value: function () {
                  var e = this.props.user
                  if (!e) return null
                  var t = e.screen_name,
                    a = i.a.createElement(Ve.b, { style: { paddingBottom: ae.a.theme.spaces.space20 } }),
                    n = i.a.createElement(Ve.b, { weight: 'bold' }),
                    l = i.a.createElement(Ve.b, { style: { paddingBottom: ae.a.theme.spaces.space4 }, weight: 'bold' }),
                    r = i.a.createElement(
                      ue.a,
                      null,
                      i.a.createElement(
                        Ve.b,
                        { style: { paddingBottom: ae.a.theme.spaces.space20 } },
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
                          Ve.b,
                          {
                            link: 'https://help.twitter.com/safety-and-security/autoblock',
                            style: { paddingBottom: ae.a.theme.spaces.space20 },
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
                        i.a.cloneElement(l, null, X.a.f5531a44),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hafa5308' },
                        i.a.cloneElement(a, null, X.a.h173a610),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'hd184fd6' },
                        i.a.cloneElement(l, null, X.a.ha985c95),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'bae036f9' },
                        i.a.cloneElement(a, null, X.a.d5d82dd3),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'aec2e702' },
                        i.a.cloneElement(l, null, X.a.i4b9b3d0),
                      ),
                      i.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f0dc3226' },
                        i.a.cloneElement(a, null, X.a.dbb6ccd4),
                      ),
                    )
                  return this._renderEmptyState({ header: Ll, message: r })
                },
              },
              {
                key: '_renderUserProfileSuspended',
                value: function () {
                  var e,
                    t = this.props.suspendMessage
                  return (
                    (e = t
                      ? i.a.createElement(kt.a, { entities: t.entities, rtl: t.rtl, text: t.text })
                      : i.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'f6fa2033' },
                          i.a.createElement(Ve.b, { link: 'https://support.twitter.com/articles/18311' }, X.a.f3b1bdc1),
                        )),
                    this._renderEmptyState({ header: Al, message: e })
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
                  var l = dl.a.descriptionTextParts(t, a),
                    r = i.a.createElement(
                      Ve.b,
                      { align: 'center', color: 'gray700', dir: 'auto' },
                      l.map(function (e, t) {
                        return i.a.createElement(ml.b, {
                          key: 'user_'.concat(n, '_textpart_').concat(t),
                          linkify: !0,
                          part: e,
                        })
                      }),
                    )
                  return this._renderEmptyState({ header: Hl, message: r })
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
                  var l = dl.a.descriptionTextParts(t, a)
                  return i.a.createElement(
                    ue.a,
                    null,
                    i.a.createElement(
                      ue.a,
                      { style: sr.withheldMessageRoot },
                      i.a.createElement(
                        Ve.b,
                        { align: 'center', size: 'title4', style: sr.withheldMessageHeader, weight: 'bold' },
                        Hl,
                      ),
                      i.a.createElement(
                        Ve.b,
                        { align: 'center', color: 'gray700', dir: 'auto' },
                        l.map(function (e, t) {
                          return i.a.createElement(ml.b, {
                            key: 'user_'.concat(n, '_textpart_').concat(t),
                            linkify: !0,
                            part: e,
                          })
                        }),
                      ),
                    ),
                    i.a.createElement(pl.a, null),
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
                      i.a.createElement(Ve.b, { link: 'https://support.twitter.com/articles/14016' }, X.a.a58c8a4e),
                    )
                  return this._renderEmptyState({ header: Dl, message: a })
                },
              },
              {
                key: '_renderUserNotFound',
                value: function () {
                  return this._renderEmptyState({ header: Kl, message: Ul })
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
                      var t = d ? Tl : Cl
                      return [
                        p
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(Yl), query: u },
                              key: Il,
                              label: Il,
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
                          key: wl,
                          label: wl,
                        },
                        { to: { pathname: '/'.concat(s, '/').concat(nr), query: u }, key: kl, label: kl },
                        m
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(tr), query: u },
                              key: El,
                              label: El,
                              color: 'plum500',
                            }
                          : void 0,
                        f
                          ? {
                              to: { pathname: '/'.concat(s, '/').concat(ar), query: u },
                              key: Sl,
                              label: Sl,
                              onClick: e(),
                            }
                          : void 0,
                        { to: { pathname: '/'.concat(s, '/').concat(Zl), query: u }, key: Fl, label: Fl, onClick: e() },
                        {
                          to: { pathname: '/'.concat(s, '/').concat(d ? er : Xl), query: u },
                          key: t,
                          label: t,
                          onClick: e(),
                        },
                      ]
                    },
                    h = { displayBlocked: c, fullName: o.name, screenName: o.screen_name, userId: o.id_str },
                    y = { isActiveCreator: n, isSuperFollowing: o.super_following }
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(un.a, null, function (e) {
                      return i.a.createElement(fl.a, { accessibilityLabel: yl, links: g(e) })
                    }),
                    i.a.createElement(
                      gl.d,
                      null,
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/intent/follow' },
                        i.a.createElement(Gl, l()({}, h, y)),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/intent/user' },
                        i.a.createElement(Gl, l()({}, h, y)),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/'.concat(Jn.J) },
                        i.a.createElement(Gl, l()({}, h, y, { onEntriesRendered: this._handleEntriesRendered })),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/'.concat(Jn.J, '/').concat(nr) },
                        i.a.createElement(Gl, l()({}, h, y, { mode: 'with_replies' })),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/'.concat(Jn.J, '/').concat(tr) },
                        i.a.createElement(Gl, l()({}, h, y, { mode: 'superfollows' })),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/'.concat(Jn.J, '/').concat(ar) },
                        i.a.createElement(Jl, l()({}, h, { hasTwitterArticles: t, twitterArticlesFetchStatus: r })),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/'.concat(Jn.J, '/').concat(Zl) },
                        i.a.createElement(Ql, h),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/'.concat(Jn.J, '/(').concat(Xl, '|').concat(er, ')') },
                        i.a.createElement($l, h),
                      ),
                      i.a.createElement(
                        gl.b,
                        { exact: !0, path: '/'.concat(Jn.J, '/').concat(Yl) },
                        i.a.createElement(Gl, l()({}, h, y, { onEntriesRendered: this._handleEntriesRendered })),
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
                  return n ? a(n).catch(t(_n.a)) : Promise.resolve()
                },
              },
              {
                key: '_fetchOneUser',
                value: function (e) {
                  var t = this.props,
                    a = t.createLocalApiErrorHandler
                  return (0, t.fetchOneUser)(e).catch(a(_n.a))
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
      A()(ir, 'contextType', z.a),
        A()(ir, 'defaultProps', {
          profileHeaderRenderer: function (e) {
            return i.a.createElement(hn, e)
          },
          restrictedProfileHeaderRenderer: function (e) {
            return i.a.createElement(Yn, e)
          },
          recordTTFL: K.c,
          recordTTFMC: K.d,
        })
      var or = Object(ol.a)(ir),
        sr = ae.a.create(function (e) {
          return {
            containerGrow: { flexGrow: 1 },
            rightControlContainer: { flexDirection: 'row', flexGrow: 1 },
            interstitialedProfile: { height: '100%', position: 'fixed', width: '100%', filter: 'blur(10px)' },
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        cr = ae.a.create(function (e) {
          return {
            root: { backgroundColor: ae.a.theme.colors.cellBackground, paddingHorizontal: ae.a.theme.spaces.space20 },
            verticalPadding: { paddingVertical: ae.a.theme.spaces.space40 },
            verticalPaddingWithUpsell: { paddingBottom: ae.a.theme.spaces.space28 },
          }
        }),
        ur = function (e) {
          return i.a.createElement(E.a, { userId: e.user && e.user.id_str }, function (t) {
            var a = t.scribeNamespace
            return i.a.createElement(or, l()({}, e, { scribeNamespace: a }))
          })
        }
      t.default = k(ur)
    },
  },
])
//# sourceMappingURL=WIPED
