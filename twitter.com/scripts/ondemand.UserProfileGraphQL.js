;(window.webpackJsonp = window.webpackJsonp || []).push([
  [247],
  {
    '+PaE': function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Banner_DefaultUserProfileHeader_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_banner_url', storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: 'ApiMediaExtensions',
                  kind: 'LinkedField',
                  name: 'profile_banner_extensions',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'ApiMediaColorExtension',
                      kind: 'LinkedField',
                      name: 'mediaColor',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'ApiMediaColorExtensionR',
                          kind: 'LinkedField',
                          name: 'r',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'ApiMediaEntityColorPalette',
                              kind: 'LinkedField',
                              name: 'ok',
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'ApiMediaEntityColorPaletteColor',
                                  kind: 'LinkedField',
                                  name: 'palette',
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'ApiMediaEntityColor',
                                      kind: 'LinkedField',
                                      name: 'rgb',
                                      plural: !1,
                                      selections: [
                                        { alias: null, args: null, kind: 'ScalarField', name: 'red', storageKey: null },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'green',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'blue',
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'percentage',
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
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '97c26a93f91e1f207d4c007b693b51f8',
      }
      e.exports = n
    },
    '+uag': function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserActionSheetButton_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.following',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followed_by',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: 'ApiUserPromotedContent',
                  kind: 'LinkedField',
                  name: 'promoted_content',
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: 'ScalarField', name: 'impression_id', storageKey: null },
                    { alias: null, args: null, kind: 'ScalarField', name: 'disclosure_type', storageKey: null },
                  ],
                  storageKey: null,
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'want_retweets', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '12003db17f550621a9bebb150fceeab7',
      }
      e.exports = n
    },
    '0pBG': function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Default_UserProfileContent_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '666d8ef5f619c54b2c3bf8c32be1a45a',
      }
      e.exports = n
    },
    '35hZ': function (e, l, a) {
      'use strict'
      var n = a('EORa').useTrackLoadQueryInRender,
        r = a('h2Du'),
        t = a('6zvL'),
        i = a('PJTX'),
        s = a('I9iR'),
        u = (a('ERkP').useDebugValue, a('e1/f').__internal),
        o = u.fetchQueryDeduped,
        c = u.fetchQuery
      a('/2Cm')
      e.exports = function (e, l, a) {
        n()
        var u,
          d = i(),
          g = l.fetchKey,
          m = l.fetchPolicy,
          y = l.source,
          f = l.variables,
          p = l.networkCacheConfig,
          k = t(e, f, p)
        if ('PreloadedQuery_DEPRECATED' === l.kind)
          k.request.node.params.name !== l.name && s(!1),
            (u = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: g,
              fetchObservable: o(d, k.request.identifier, function () {
                return d === l.environment && null != y
                  ? d.executeWithSource({ operation: k, source: y })
                  : d.execute({ operation: k })
              }),
              fetchPolicy: m,
              query: k,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var _ = c(d, k)
          u = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && d === l.environment ? y.ifEmpty(_) : (l.environment, _),
            fetchKey: g,
            fetchPolicy: m,
            query: k,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return r(u)
      }
    },
    '66Bp': function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileTitle_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.verified',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '8c550eef6cce06eaa97e4946a4053e9b',
      }
      e.exports = n
    },
    '7COa': function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Names_DefaultUserProfileHeader_user',
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
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followed_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.verified',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'translator_type', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          {
            alias: null,
            args: null,
            concreteType: 'HighlightedUserLabelResponse',
            kind: 'LinkedField',
            name: 'affiliates_highlighted_label',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'HighlightedUserLabel',
                kind: 'LinkedField',
                name: 'label',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'HighlightedUserLabelRelay_label' }],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'd28c362bc082bf43eaabbdc780301f2a',
      }
      e.exports = n
    },
    BdHD: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'BirthdateItem_DefaultUserProfileHeader_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'LegacyExtendedUserProfile',
            kind: 'LinkedField',
            name: 'legacy_extended_profile',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'LegacyExtendedBirthDate',
                kind: 'LinkedField',
                name: 'birthdate',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'month', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'day', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'year', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'visibility', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'year_visibility', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '42ccf87753db946a42c4c08e8e1773a5',
      }
      e.exports = n
    },
    D0zN: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileSubtitle_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'favourites_count', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.favourites_count',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'media_count', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.media_count',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'statuses_count', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.statuses_count',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7c5f2e26bf309d58fdfb771d3251d14a',
      }
      e.exports = n
    },
    DRvb: function (e, l, a) {
      'use strict'
      var n,
        r,
        t,
        i,
        s,
        u,
        o,
        c,
        d = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'UserProfileQuery',
            selections: [
              {
                alias: 'user',
                args: (r = [{ kind: 'Variable', name: 'screen_name', variableName: 'screenName' }]),
                concreteType: 'User',
                kind: 'LinkedField',
                name: 'user_by_screen_name',
                plural: !1,
                selections: [
                  (t = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  { args: null, kind: 'FragmentSpread', name: 'UserProfileScreen_user' },
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
            name: 'UserProfileQuery',
            selections: [
              {
                alias: 'user',
                args: r,
                concreteType: 'User',
                kind: 'LinkedField',
                name: 'user_by_screen_name',
                plural: !1,
                selections: [
                  t,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiUser',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'profile_interstitial_type',
                        storageKey: null,
                      },
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'profile_image_url_https',
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'favourites_count', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'media_count', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'statuses_count', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiUserPromotedContent',
                        kind: 'LinkedField',
                        name: 'promoted_content',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'impression_id', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'disclosure_type', storageKey: null },
                        ],
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'want_retweets', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'profile_banner_url', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiMediaExtensions',
                        kind: 'LinkedField',
                        name: 'profile_banner_extensions',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ApiMediaColorExtension',
                            kind: 'LinkedField',
                            name: 'mediaColor',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiMediaColorExtensionR',
                                kind: 'LinkedField',
                                name: 'r',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiMediaEntityColorPalette',
                                    kind: 'LinkedField',
                                    name: 'ok',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'ApiMediaEntityColorPaletteColor',
                                        kind: 'LinkedField',
                                        name: 'palette',
                                        plural: !0,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ApiMediaEntityColor',
                                            kind: 'LinkedField',
                                            name: 'rgb',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'red',
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'green',
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'blue',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'percentage',
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
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'can_dm', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'default_profile_image', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'notifications', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'follow_request_sent', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'translator_type', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'followers_count', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'friends_count', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserEntities',
                        kind: 'LinkedField',
                        name: 'entities',
                        plural: !1,
                        selections: [
                          (o = {
                            alias: null,
                            args: null,
                            concreteType: 'EntitySet',
                            kind: 'LinkedField',
                            name: 'url',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UrlsEntity',
                                kind: 'LinkedField',
                                name: 'urls',
                                plural: !0,
                                selections: [
                                  (s = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'display_url',
                                    storageKey: null,
                                  }),
                                  (u = { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null }),
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          }),
                          (c = {
                            alias: null,
                            args: null,
                            concreteType: 'EntitySet',
                            kind: 'LinkedField',
                            name: 'description',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UrlsEntity',
                                kind: 'LinkedField',
                                name: 'urls',
                                plural: !0,
                                selections: [
                                  s,
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'expanded_url',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'indices', storageKey: null },
                                  u,
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'location', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'withheld_description', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserEntities',
                        kind: 'LinkedField',
                        name: 'withheld_entities',
                        plural: !1,
                        selections: [c, o],
                        storageKey: null,
                      },
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'super_following', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'super_follow_eligible', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'super_followed_by', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'smart_blocking', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'HighlightedUserLabelResponse',
                    kind: 'LinkedField',
                    name: 'affiliates_highlighted_label',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'HighlightedUserLabel',
                        kind: 'LinkedField',
                        name: 'label',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'user_label_type', storageKey: null },
                          i,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'BadgeInfo',
                            kind: 'LinkedField',
                            name: 'badge',
                            plural: !1,
                            selections: [u],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'TimelineUrl',
                            kind: 'LinkedField',
                            name: 'url',
                            plural: !1,
                            selections: [
                              { alias: 'urlType', args: null, kind: 'ScalarField', name: 'url_type', storageKey: null },
                              u,
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
                    kind: 'ClientExtension',
                    selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'is_profile_translatable', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'LegacyExtendedUserProfile',
                    kind: 'LinkedField',
                    name: 'legacy_extended_profile',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'LegacyExtendedBirthDate',
                        kind: 'LinkedField',
                        name: 'birthdate',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'month', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'day', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'year', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'visibility', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'year_visibility', storageKey: null },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
              {
                alias: 'user',
                args: r,
                filters: null,
                handle: 'user',
                key: '',
                kind: 'LinkedHandle',
                name: 'user_by_screen_name',
              },
            ],
          },
          params: {
            id: 'WPTccfv-rlpDt98hl8vjig',
            metadata: {},
            name: 'UserProfileQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = 'aea4fe65f61450e7dedd0595be4a239c'), (e.exports = d)
    },
    E4Mm: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'LoggedInWithheld_UserProfileContent_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: 'UserEntities',
                  kind: 'LinkedField',
                  name: 'entities',
                  plural: !1,
                  selections: [
                    {
                      kind: 'InlineDataFragmentSpread',
                      name: 'formatUserEntities_entities',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'EntitySet',
                          kind: 'LinkedField',
                          name: 'description',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'UrlsEntity',
                              kind: 'LinkedField',
                              name: 'urls',
                              plural: !0,
                              selections: [
                                { alias: null, args: null, kind: 'ScalarField', name: 'display_url', storageKey: null },
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'expanded_url',
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'indices', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'Default_UserProfileContent_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '66cc550f10eb15dd76576e8250782aac',
      }
      e.exports = n
    },
    GQYZ: function (e, l, a) {
      'use strict'
      var n,
        r,
        t,
        i = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'Description_DefaultUserProfileHeader_user',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'withheld_description', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserEntities',
                    kind: 'LinkedField',
                    name: 'entities',
                    plural: !1,
                    selections: (t = [
                      {
                        kind: 'InlineDataFragmentSpread',
                        name: 'formatUserEntities_entities',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'EntitySet',
                            kind: 'LinkedField',
                            name: 'description',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'UrlsEntity',
                                kind: 'LinkedField',
                                name: 'urls',
                                plural: !0,
                                selections: [
                                  (n = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'display_url',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'expanded_url',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'indices', storageKey: null },
                                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null }),
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'EntitySet',
                        kind: 'LinkedField',
                        name: 'url',
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UrlsEntity',
                            kind: 'LinkedField',
                            name: 'urls',
                            plural: !0,
                            selections: [n, r],
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
                    concreteType: 'UserEntities',
                    kind: 'LinkedField',
                    name: 'withheld_entities',
                    plural: !1,
                    selections: t,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              action: 'THROW',
              path: 'legacy',
            },
          ],
          type: 'User',
          abstractKey: null,
        }
      ;(i.hash = 'bfbe95bc38d4f0d979f685ec6718a931'), (e.exports = i)
    },
    Ge0p: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileHeader_user',
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
              selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'RestrictedUserProfileHeader_fullUser' },
          { args: null, kind: 'FragmentSpread', name: 'DefaultUserProfileHeader_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '9b449b976f91f725c95883f90b077abb',
      }
      e.exports = n
    },
    OROh: function (e, l, a) {
      'use strict'
      a.d(l, 'a', function () {
        return y
      })
      var n,
        r = a('97Jx'),
        t = a.n(r),
        i = a('m3Bd'),
        s = a.n(i),
        u = (a('ho0z'), a('ERkP')),
        o = a.n(u),
        c = a('uIZp'),
        d = (a('YWiL'), a('CVPS')),
        g = a.n(d),
        m = ['user']
      function y(e) {
        var l,
          r = e.user,
          i = s()(e, m),
          u = g()(void 0 !== n ? n : (n = a('P4CI')), r),
          d = o.a.useMemo(
            function () {
              var e, l, a, n, r, t, i, s
              return u
                ? {
                    id_str: u.rest_id,
                    screen_name: (null === (e = u.legacy) || void 0 === e ? void 0 : e.screen_name) || '',
                    name: (null === (l = u.legacy) || void 0 === l ? void 0 : l.name) || '',
                    follow_request_sent:
                      (null === (a = u.legacy) || void 0 === a ? void 0 : a.follow_request_sent) || !1,
                    protected: (null === (n = u.legacy) || void 0 === n ? void 0 : n.protected) || !1,
                    following: (null === (r = u.legacy) || void 0 === r ? void 0 : r.following) || !1,
                    followed_by: (null === (t = u.legacy) || void 0 === t ? void 0 : t.followed_by) || !1,
                    super_following: u.super_following || void 0,
                    super_follow_eligible: u.super_follow_eligible || void 0,
                    super_followed_by: u.super_followed_by || void 0,
                    smart_blocking: u.smart_blocking || void 0,
                    blocking: (null === (i = u.legacy) || void 0 === i ? void 0 : i.blocking) || void 0,
                    highlightedLabel:
                      null !== (s = u.affiliates_highlighted_label) && void 0 !== s && s.label
                        ? { userLabelType: u.affiliates_highlighted_label.label.user_label_type || void 0 }
                        : void 0,
                  }
                : void 0
            },
            [u],
          )
        return o.a.createElement(
          c.a,
          t()({}, i, {
            isRelay: !0,
            user: d,
            userId: null !== (l = null == u ? void 0 : u.rest_id) && void 0 !== l ? l : '',
          }),
        )
      }
    },
    P4CI: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'FollowUserButtonRelay_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'follow_request_sent',
                    storageKey: null,
                  },
                  action: 'THROW',
                  path: 'legacy.follow_request_sent',
                },
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
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followed_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocking',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_following', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_follow_eligible', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_followed_by', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'smart_blocking', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'HighlightedUserLabelResponse',
            kind: 'LinkedField',
            name: 'affiliates_highlighted_label',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'HighlightedUserLabel',
                kind: 'LinkedField',
                name: 'label',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'user_label_type', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: 'ClientExtension',
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '54d1810ed4d3744bd91e137b61b3642a',
      }
      e.exports = n
    },
    SXQl: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'TranslatableDescription_DefaultUserProfileHeader_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'is_profile_translatable', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'Description_DefaultUserProfileHeader_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'c4025cf745df62abe68d53fcd62983f7',
      }
      e.exports = n
    },
    XiYe: function (e, l, a) {
      'use strict'
      var n = a('ERkP'),
        r = n.useEffect,
        t = n.useRef
      e.exports = function () {
        var e = t(!0)
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
    ZNc3: function (e, l, a) {
      'use strict'
      var n = {
        kind: 'InlineDataFragment',
        name: 'formatUserEntities_entities',
        hash: '37b1b21c4aa1743040c79e7b121cf759',
      }
      e.exports = n
    },
    aOg7: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'DefaultUserProfileHeader_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
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
                { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'Banner_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'Avatar_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'Buttons_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'Names_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'Stats_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'Details_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'Mute_DefaultUserProfileHeader_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '8774143637230513bd8a078afef227fe',
      }
      e.exports = n
    },
    bGqR: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'determineIsAllowedToViewRelay_useIsAllowedToViewSubProfilePages_user',
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
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocked_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.following',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'eb4b04cd5440e8d3ff44d65b7f40c2a7',
      }
      e.exports = n
    },
    dVIa: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Interstitialed_UserProfileContent_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_interstitial_type', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '3ea15cd52879521808e7b2e7211e2e45',
      }
      e.exports = n
    },
    eH5D: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Blocking_UserProfileContent_user',
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
              selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null }],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '05a025471bcc0333ef38d2a275f3d337',
      }
      e.exports = n
    },
    gNV4: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Mute_DefaultUserProfileHeader_user',
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
              selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null }],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'ef9252aba605f912c58f559ad7b94456',
      }
      e.exports = n
    },
    hCMu: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Buttons_DefaultUserProfileHeader_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'can_dm', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'default_profile_image', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.following',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'notifications', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_banner_url', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'UserActionSheetButton_user' },
          { args: null, kind: 'FragmentSpread', name: 'FollowUserButtonRelay_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'fc2450b2938394c8f684ee332a127560',
      }
      e.exports = n
    },
    iIq9: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileContent_user',
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
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocked_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocking',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'LoggedInWithheld_UserProfileContent_user' },
          { args: null, kind: 'FragmentSpread', name: 'Withheld_UserProfileContent_user' },
          { args: null, kind: 'FragmentSpread', name: 'BlockedBy_UserProfileContent_user' },
          { args: null, kind: 'FragmentSpread', name: 'Blocking_UserProfileContent_user' },
          { args: null, kind: 'FragmentSpread', name: 'Interstitialed_UserProfileContent_user' },
          { args: null, kind: 'FragmentSpread', name: 'Protected_UserProfileContent_user' },
          { args: null, kind: 'FragmentSpread', name: 'Default_UserProfileContent_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '1b6c7aa144ee04850c72d4fcfb338a25',
      }
      e.exports = n
    },
    iN7L: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Protected_UserProfileContent_user',
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
              selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null }],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'd6415707c1b7306f49197be368867957',
      }
      e.exports = n
    },
    jUuT: function (e, l, a) {
      'use strict'
      var n,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'HighlightedUserLabelRelay_label',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'BadgeInfo',
              kind: 'LinkedField',
              name: 'badge',
              plural: !1,
              selections: [(n = { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null })],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'TimelineUrl',
              kind: 'LinkedField',
              name: 'url',
              plural: !1,
              selections: [
                { alias: 'urlType', args: null, kind: 'ScalarField', name: 'url_type', storageKey: null },
                n,
              ],
              storageKey: null,
            },
          ],
          type: 'HighlightedUserLabel',
          abstractKey: null,
        }
      ;(r.hash = '771c8f366e4c2e2fa28739a713386507'), (e.exports = r)
    },
    k5o5: function (e, l, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        r = a('EORa'),
        t = r.loadQuery,
        i = r.useTrackLoadQueryInRender,
        s = a('XiYe'),
        u = a('PJTX'),
        o = a('ERkP'),
        c = o.useCallback,
        d = o.useEffect,
        g = o.useRef,
        m = o.useState,
        y = a('e1/f').getRequest,
        f = { kind: 'NullQueryReference' }
      function p(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== y(e).params.metadata.live
      }
      e.exports = function (e, l) {
        var a = null != l ? l : f,
          r = u()
        i()
        var o = s(),
          y = g(new Set([a])),
          k = m(function () {
            return a
          }),
          _ = k[0],
          h = k[1],
          F = m(function () {
            return a
          }),
          b = F[0],
          v = F[1]
        a !== b && (y.current.add(a), v(a), h(a))
        var S = c(
            function () {
              o.current && (y.current.add(f), h(f))
            },
            [o],
          ),
          K = c(
            function (l, a) {
              var n =
                null != a && a.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: a.fetchPolicy,
                      networkCacheConfig: a.networkCacheConfig,
                      __nameForWarning: a.__nameForWarning,
                    }
                  : a
              if (o.current) {
                var i,
                  s = t(null !== (i = null == a ? void 0 : a.__environment) && void 0 !== i ? i : r, e, l, n)
                y.current.add(s), h(s)
              }
            },
            [r, e, h, o],
          ),
          E = g(!1)
        return (
          d(function () {
            return function () {
              E.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === E.current)
                return (
                  (E.current = !1),
                  void (
                    'NullQueryReference' !== _.kind &&
                    K(_.variables, { fetchPolicy: _.fetchPolicy, networkCacheConfig: _.networkCacheConfig })
                  )
                )
              var l = y.current
              if (o.current) {
                var a,
                  r = (0, n.default)(l)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var t = a.value
                    if (t === _) break
                    l.delete(t),
                      'NullQueryReference' !== t.kind &&
                        (p(e) ? t.dispose && t.dispose() : t.releaseQuery && t.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [_, o, K, e],
          ),
          d(
            function () {
              return function () {
                var l,
                  a = (0, n.default)(y.current)
                try {
                  for (a.s(); !(l = a.n()).done; ) {
                    var r = l.value
                    'NullQueryReference' !== r.kind &&
                      (p(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (t) {
                  a.e(t)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === _.kind ? null : _, K, S]
        )
      }
    },
    kVSq: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Avatar_DefaultUserProfileHeader_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'cfdc403c7e0ccbc8ac941def79fb3a5f',
      }
      e.exports = n
    },
    kcMG: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileScreen_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocked_by',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.blocking',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_interstitial_type', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'UserProfileMetaTags_user' },
          { args: null, kind: 'FragmentSpread', name: 'UserProfileTitle_user' },
          { args: null, kind: 'FragmentSpread', name: 'UserProfileSubtitle_user' },
          { args: null, kind: 'FragmentSpread', name: 'UserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'UserProfileContent_user' },
          { args: null, kind: 'FragmentSpread', name: 'FollowUserButtonRelay_user' },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'determineIsAllowedToViewRelay_useIsAllowedToViewSubProfilePages_user',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f22ed37627e13a74389e7c0084584434',
      }
      e.exports = n
    },
    kdCF: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'RestrictedUserProfileHeader_fullUser',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'UserActionSheetButton_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'c41e24645a31cac68dae74c8534c051f',
      }
      e.exports = n
    },
    lFTA: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Stats_DefaultUserProfileHeader_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followers_count', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followers_count',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'friends_count', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.friends_count',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'determineIsAllowedToViewRelay_useIsAllowedToViewSubProfilePages_user',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '17c2f74eefe1798506266a2c09f64b86',
      }
      e.exports = n
    },
    n0Rl: function (e, l, a) {
      'use strict'
      a.d(l, 'b', function () {
        return W
      })
      var n = a('ddV6'),
        r = a.n(n),
        t = a('VrFO'),
        i = a.n(t),
        s = a('Y9Ll'),
        u = a.n(s),
        o = a('1Pcy'),
        c = a.n(o),
        d = a('5Yy7'),
        g = a.n(d),
        m = a('2VqO'),
        y = a.n(m),
        f = a('KEM+'),
        p = a.n(f),
        k = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        _ = a.n(k),
        h = a('pXBW'),
        F = a('6/RC'),
        b = a('P74S'),
        v = a.n(b),
        S = a('kGix')
      a.d(l, 'a', function () {
        return S.a
      })
      var K = a('tI3i'),
        E = a.n(K),
        w = a('fs1G'),
        R = a('0KEI'),
        T = a('VYI2'),
        P = a.n(T),
        U = a('35hZ'),
        L = a.n(U),
        O = a('k5o5'),
        C = a.n(O),
        D = a('PJTX'),
        H = a.n(D),
        x = function (e) {
          return (0, e.render)({ fetchStatus: S.a.LOADING, data: null, error: null, retry: w.a })
        },
        I = (function (e) {
          g()(a, e)
          var l = y()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++) r[t] = arguments[t]
            return (e = l.call.apply(l, [this].concat(r))), p()(c()(e), 'state', { error: null }), e
          }
          return (
            u()(
              a,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, l) {
                    if (!(e instanceof h.a)) throw e
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
        })(_.a.Component),
        q = function (e) {
          var l = e.query,
            a = e.queryRef,
            n = e.render,
            r = L()(l, a)
          return n({ fetchStatus: S.a.LOADED, data: r, error: null, retry: w.a })
        },
        W = function (e, l) {
          if (F.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                t = void 0 === n ? 'store-or-network' : n,
                i = a.render,
                s = a.variables,
                u = C()(e),
                o = r()(u, 2),
                c = o[0],
                d = o[1],
                g = Object(R.useCreateLocalApiErrorHandler)(l.errorConfig.context),
                m = P()(s),
                y = r()(m, 1)[0],
                f = _.a.useCallback(
                  function () {
                    d(y, { fetchPolicy: 'network-only' })
                  },
                  [d, y],
                )
              return (
                _.a.useLayoutEffect(
                  function () {
                    d(y, { fetchPolicy: t })
                  },
                  [t, d, y],
                ),
                c
                  ? _.a.createElement(
                      _.a.Suspense,
                      { fallback: _.a.createElement(x, { render: i }) },
                      _.a.createElement(
                        I,
                        { errorHandler: g(l.errorConfig.options || {}), key: c.fetchKey, retry: f },
                        function (l, a) {
                          return l
                            ? i({ fetchStatus: S.a.FAILED, error: l, data: null, retry: a })
                            : _.a.createElement(q, { query: e, queryRef: c, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var t = n.render,
              i = n.variables,
              s = H()(),
              u = Object(R.useCreateLocalApiErrorHandler)(l.errorConfig.context),
              o = P()(i),
              c = r()(o, 1)[0],
              d = a.get(s)
            if (d) return d
            var g = _.a.lazy(function () {
              return v()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      E()(e, 'Fetch query returned empty data'),
                      t({ fetchStatus: S.a.LOADED, data: e, error: null, retry: w.a })
                    )
                  },
                  function (e) {
                    return e instanceof h.a
                      ? (u(l.errorConfig.options || {})(e),
                        t({ fetchStatus: S.a.FAILED, data: null, error: e, retry: w.a }))
                      : _.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(s, e).get.bind(a, s) }
                })
            })
            return _.a.createElement(_.a.Suspense, null, _.a.createElement(g, null))
          }
        }
    },
    nmzZ: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Details_DefaultUserProfileHeader_user',
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
                  alias: null,
                  args: null,
                  concreteType: 'UserEntities',
                  kind: 'LinkedField',
                  name: 'entities',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'EntitySet',
                      kind: 'LinkedField',
                      name: 'url',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'UrlsEntity',
                          kind: 'LinkedField',
                          name: 'urls',
                          plural: !0,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'display_url', storageKey: null },
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
                { alias: null, args: null, kind: 'ScalarField', name: 'location', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
          { args: null, kind: 'FragmentSpread', name: 'Description_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'TranslatableDescription_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'BirthdateItem_DefaultUserProfileHeader_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '9cacf8baae2de63bba0d8da09131d6dc',
      }
      e.exports = n
    },
    sLDr: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'BlockedBy_UserProfileContent_user',
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
              selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null }],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'e3dbbfc0872d7f6d8fbb1167c29c062c',
      }
      e.exports = n
    },
    vInD: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileMetaTags_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '6609a390631ec9409a99ba3e8813d44c',
      }
      e.exports = n
    },
    vJP1: function (e, l, a) {
      'use strict'
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Withheld_UserProfileContent_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: 'UserEntities',
                  kind: 'LinkedField',
                  name: 'entities',
                  plural: !1,
                  selections: [
                    {
                      kind: 'InlineDataFragmentSpread',
                      name: 'formatUserEntities_entities',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'EntitySet',
                          kind: 'LinkedField',
                          name: 'description',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'UrlsEntity',
                              kind: 'LinkedField',
                              name: 'urls',
                              plural: !0,
                              selections: [
                                { alias: null, args: null, kind: 'ScalarField', name: 'display_url', storageKey: null },
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'expanded_url',
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'indices', storageKey: null },
                                { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '8ce1140c9e6d4c10136ca755976b064b',
      }
      e.exports = n
    },
    x3bd: function (e, l, a) {
      'use strict'
      a.r(l),
        a.d(l, 'userProfileQuery', function () {
          return gn
        }),
        a.d(l, 'UserProfileQueryRenderer', function () {
          return mn
        }),
        a.d(l, 'UserProfileScreenContainer', function () {
          return yn
        })
      var n,
        r,
        t,
        i,
        s,
        u,
        o,
        c,
        d,
        g,
        m,
        y,
        f,
        p,
        k,
        _,
        h,
        F,
        b,
        v,
        S,
        K,
        E,
        w,
        R,
        T,
        P,
        U,
        L,
        O,
        C = a('ddV6'),
        D = a.n(C),
        H = a('ERkP'),
        x = a.n(H),
        I = a('GOQE'),
        q = a('P74S'),
        W = a.n(q),
        A = a('rZeG'),
        B = a('txMZ'),
        N = a('kGix'),
        M = (a('lTEL'), a('7x/C'), a('kYxP'), a('5BYb'), a('ho0z'), a('jQ3i'), a('x4t0'), a('aeN7')),
        j = a('v6aA'),
        V = a('es0u'),
        Q = a('8UdT'),
        G = a('dwig'),
        Y = a('v//M'),
        z = a('0+qk'),
        J = a('OROh'),
        X = a('3XMw'),
        Z = a.n(X),
        $ = a('iFPY'),
        ee = (a('1t7P'), a('jQ/y'), a('s4rk')),
        le = a('zI2C'),
        ae = a('rJoH'),
        ne = (a('YWiL'), a('CVPS')),
        re = a.n(ne),
        te = Z.a.d67658c0,
        ie = void 0 !== n ? n : (n = a('vInD')),
        se = function (e) {
          var l = e.user,
            a = re()(ie, l),
            n = a ? 'twitter://user?screen_name='.concat(a.legacy.screen_name || '') : void 0,
            r = a ? 'https://twitter.com/'.concat(a.legacy.screen_name || '') : void 0,
            t = a ? te({ fullName: a.legacy.name, screenName: a.legacy.screen_name }) : void 0
          return x.a.createElement(
            x.a.Fragment,
            null,
            x.a.createElement(ae.a, {
              canonical: r,
              description: (null == a ? void 0 : a.legacy.description) || '',
              image: (null == a ? void 0 : a.legacy.profile_image_url_https) || '',
              title: t,
              type: 'profile',
            }),
            x.a.createElement(le.a, { deepLink: n }),
            r ? x.a.createElement(ee.a, { canonical: r }) : null,
          )
        },
        ue = a('jS2K'),
        oe = a('IG4P'),
        ce = a('VS6U'),
        de = (a('vrRf'), a('2G9S'), a('Qayx')),
        ge = 'likes',
        me = 'media',
        ye = function (e) {
          var l = e.user,
            n = re()(void 0 !== r ? r : (r = a('D0zN')), l).legacy,
            t = (n.screen_name || '').toLowerCase(),
            i = location.pathname.toLowerCase()
          return i.indexOf('/'.concat(t, '/').concat(ge)) > -1
            ? x.a.createElement(de.a, { count: n.favourites_count, type: 'likes' })
            : i.indexOf('/'.concat(t, '/').concat(me)) > -1
            ? x.a.createElement(de.a, { count: n.media_count, type: 'media' })
            : x.a.createElement(de.a, { count: n.statuses_count, type: 'tweets' })
        },
        fe = a('jV+4'),
        pe = function (e) {
          var l = e.user,
            n = re()(void 0 !== t ? t : (t = a('66Bp')), l)
          return x.a.createElement(fe.a, {
            isProtected: n.legacy.protected,
            isVerified: n.legacy.verified,
            name: n.legacy.name || void 0,
            screenName: n.legacy.screen_name || void 0,
            weight: 'heavy',
            withScreenName: !1,
          })
        },
        ke = function (e) {
          var l,
            n,
            r,
            t = e.isOwnProfile,
            s = e.user,
            u = re()(void 0 !== i ? i : (i = a('bGqR')), s)
          if (!u) return !1
          var o = null === (l = u.legacy) || void 0 === l ? void 0 : l.blocked_by,
            c =
              (null === (n = u.legacy) || void 0 === n ? void 0 : n.protected) &&
              !(null !== (r = u.legacy) && void 0 !== r && r.following)
          return t || (!c && !o)
        },
        _e = a('t62R'),
        he = a('tI3i'),
        Fe = a.n(he),
        be = a('FIs5'),
        ve = a('rHpw'),
        Se = function (e) {
          var l = e.buttonText,
            a = e.header,
            n = e.message,
            r = e.onButtonPress
          return x.a.createElement(be.a, {
            buttonText: l,
            buttonType: 'brandOutlined',
            header: a,
            message: n,
            onButtonPress: r,
            style: Ke.root,
          })
        },
        Ke = ve.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderTopWidth: 1,
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
              paddingVertical: e.spaces.space40,
              paddingHorizontal: e.spaces.space20,
              width: '100%',
            },
          }
        }),
        Ee = Z.a.ica87fde,
        we = function (e) {
          var l = re()(void 0 !== s ? s : (s = a('sLDr')), e.user).legacy.screen_name
          Fe()('string' == typeof l, 'screenName must be defined')
          var n = x.a.createElement(
            Z.a.I18NFormatMessage,
            { $i18n: 'ccade2e6', screenName: l },
            x.a.createElement(_e.b, { link: 'https://support.twitter.com/articles/20172060' }, Z.a.de078c23),
          )
          return x.a.createElement(Se, { header: Ee, message: n })
        },
        Re = Z.a.eeab4adf,
        Te = Z.a.e79ed125,
        Pe = function (e) {
          var l = e.onShowBlockedTweets,
            n = re()(void 0 !== u ? u : (u = a('eH5D')), e.user).legacy.screen_name
          Fe()('string' == typeof n, 'screenName must be a string')
          var r = Te({ screenName: n }),
            t = x.a.createElement(
              Z.a.I18NFormatMessage,
              { $i18n: 'e645092a', screenName: n },
              x.a.createElement(_e.b, { link: 'https://support.twitter.com/articles/117063' }, Z.a.f6a72a2a),
            )
          return x.a.createElement(Se, { buttonText: Re, header: r, message: t, onButtonPress: l })
        },
        Ue = a('97Jx'),
        Le = a.n(Ue),
        Oe = (a('JtPf'), a('87if'), a('Y6L+')),
        Ce = a('wytG'),
        De = a('Jkc4'),
        He = a('k/OQ'),
        xe = a('zCf4'),
        Ie = Object(Ce.a)(function () {
          return Promise.all([a.e(0), a.e(247)]).then(a.bind(null, '8KtR'))
        }),
        qe = Object(Ce.a)(function () {
          return Promise.all([a.e(0), a.e(247)]).then(a.bind(null, 'ivpD'))
        }),
        We = Object(Ce.a)(function () {
          return Promise.all([a.e(0), a.e(247)]).then(a.bind(null, 'ylAD'))
        }),
        Ae = 'likes',
        Be = 'media',
        Ne = 'with_replies',
        Me = Z.a.a2811f96,
        je = Z.a.bab1f8b0,
        Ve = Z.a.a52b03a5,
        Qe = Z.a.add55c97,
        Ge = Z.a.d7b8eba9,
        Ye = function (e) {
          var l = e.onEntriesRendered,
            n = e.showBlockedTweets,
            r = re()(void 0 !== o ? o : (o = a('0pBG')), e.user),
            t = Object(xe.g)(),
            i = t.query,
            s = r.legacy,
            u = s.name,
            c = s.screen_name,
            d = r.rest_id,
            g = c || '',
            m = function (e) {
              return [
                {
                  isActive: function () {
                    return (
                      t.pathname.toLowerCase() === '/'.concat(g).toLowerCase() ||
                      t.pathname.toLowerCase() === '/'.concat(g, '/').toLowerCase() ||
                      t.pathname.indexOf('/intent/follow') > -1 ||
                      t.pathname.indexOf('/intent/user') > -1
                    )
                  },
                  to: { pathname: '/'.concat(g), query: i },
                  key: je,
                  label: je,
                },
                { to: { pathname: '/'.concat(g, '/').concat(Ne), query: i }, key: Ve, label: Ve },
                { to: { pathname: '/'.concat(g, '/').concat(Be), query: i }, key: Qe, label: Qe, onClick: e() },
                { to: { pathname: '/'.concat(g, '/').concat(Ae), query: i }, key: Ge, label: Ge, onClick: e() },
              ]
            },
            y = { displayBlocked: n, fullName: u, screenName: g, userId: d }
          return x.a.createElement(
            x.a.Fragment,
            null,
            x.a.createElement(De.a, null, function (e) {
              return x.a.createElement(He.a, { accessibilityLabel: Me, links: m(e) })
            }),
            x.a.createElement(
              xe.d,
              null,
              x.a.createElement(xe.b, { exact: !0, path: '/intent/follow' }, x.a.createElement(Ie, y)),
              x.a.createElement(xe.b, { exact: !0, path: '/intent/user' }, x.a.createElement(Ie, y)),
              x.a.createElement(
                xe.b,
                { exact: !0, path: '/'.concat(Oe.J) },
                x.a.createElement(Ie, Le()({}, y, { onEntriesRendered: l })),
              ),
              x.a.createElement(
                xe.b,
                { exact: !0, path: '/'.concat(Oe.J, '/').concat(Ne) },
                x.a.createElement(Ie, Le()({}, y, { withReplies: !0 })),
              ),
              x.a.createElement(xe.b, { exact: !0, path: '/'.concat(Oe.J, '/').concat(Be) }, x.a.createElement(We, y)),
              x.a.createElement(xe.b, { exact: !0, path: '/'.concat(Oe.J, '/').concat(Ae) }, x.a.createElement(qe, y)),
            ),
          )
        },
        ze = a('drnk'),
        Je = a('Irs7'),
        Xe = Z.a.d834ab9c,
        Ze = void 0 !== c ? c : (c = a('dVIa')),
        $e = Object(Je.a)(
          function (e) {
            var l = e.analytics,
              a = e.onConfirmProfileInterstitial,
              n = re()(Ze, e.user).legacy.profile_interstitial_type,
              r = Object(ze.a)(n),
              t = r.header,
              i = r.message
            x.a.useEffect(
              function () {
                l.scribeAction('impression')
              },
              [l],
            )
            return x.a.createElement(Se, {
              buttonText: Xe,
              header: t,
              message: i,
              onButtonPress: function () {
                a(), l.scribeAction('click')
              },
            })
          },
          { section: 'profile_interstitial' },
        ),
        el = (a('z84I'), a('M+/F'), a('wxEq')),
        ll = a.n(el),
        al = function (e) {
          var l = ll()(void 0 !== d ? d : (d = a('ZNc3')), e)
          return l
            ? {
                description: l.description
                  ? {
                      urls: l.description.urls
                        ? l.description.urls.map(function (e) {
                            return {
                              display_url: e.display_url || '',
                              expanded_url: e.expanded_url || '',
                              indices: e.indices ? e.indices.slice() : [],
                              url: e.url || '',
                            }
                          })
                        : [],
                    }
                  : {},
              }
            : {}
        },
        nl = a('MWbm'),
        rl = a('Q0VY'),
        tl = a('FiRh'),
        il = a('0yYu'),
        sl = Z.a.gbf342a4,
        ul = function (e) {
          var l = e.onEntriesRendered,
            n = e.user,
            r = re()(void 0 !== g ? g : (g = a('E4Mm')), n),
            t = r.legacy,
            i = t.description,
            s = t.entities,
            u = r.rest_id,
            o = void 0 === u ? '' : u
          if (!i) return null
          var c = rl.a.descriptionTextParts(i, al(s))
          return x.a.createElement(
            nl.a,
            null,
            x.a.createElement(
              nl.a,
              { style: ol.withheldMessageRoot },
              x.a.createElement(
                _e.b,
                { align: 'center', size: 'title4', style: ol.withheldMessageHeader, weight: 'bold' },
                sl,
              ),
              x.a.createElement(
                _e.b,
                { align: 'center', color: 'gray700', dir: 'auto' },
                c.map(function (e, l) {
                  return x.a.createElement(tl.b, {
                    key: 'user_'.concat(o, '_textpart_').concat(l),
                    linkify: !0,
                    part: e,
                  })
                }),
              ),
            ),
            x.a.createElement(il.a, null),
            x.a.createElement(Ye, { onEntriesRendered: l, user: r }),
          )
        },
        ol = ve.a.create(function (e) {
          return {
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        cl = Z.a.c9a1cb5d,
        dl = Z.a.e7b201dd,
        gl = function () {
          return x.a.createElement(Se, { header: cl, message: dl })
        },
        ml = Z.a.d09e12c4,
        yl = function (e) {
          var l = re()(void 0 !== m ? m : (m = a('iN7L')), e.user).legacy.screen_name
          Fe()('string' == typeof l, 'screenName must be a string')
          var n = x.a.createElement(
            Z.a.I18NFormatMessage,
            { $i18n: 'c97724c2', screenName: l },
            x.a.createElement(_e.b, { link: 'https://support.twitter.com/articles/14016' }, Z.a.a58c8a4e),
          )
          return x.a.createElement(Se, { header: ml, message: n })
        },
        fl = Z.a.g8475f82,
        pl = function () {
          var e = x.a.createElement(
            Z.a.I18NFormatMessage,
            { $i18n: 'f6fa2033' },
            x.a.createElement(_e.b, { link: 'https://support.twitter.com/articles/18311' }, Z.a.f3b1bdc1),
          )
          return x.a.createElement(Se, { header: fl, message: e })
        },
        kl = Z.a.gbf342a4,
        _l = function (e) {
          var l = re()(void 0 !== y ? y : (y = a('vJP1')), e.user),
            n = l.legacy,
            r = n.description,
            t = n.entities,
            i = l.rest_id
          if (!r) return null
          var s = rl.a.descriptionTextParts(r, al(t)),
            u = x.a.createElement(
              _e.b,
              { align: 'center', color: 'gray700', dir: 'auto' },
              s.map(function (e, l) {
                return x.a.createElement(tl.b, { key: 'user_'.concat(i, '_textpart_').concat(l), linkify: !0, part: e })
              }),
            )
          return x.a.createElement(Se, { header: kl, message: u })
        },
        hl = function (e) {
          var l = e.isNotFound,
            n = e.isOwnProfile,
            r = e.isProtectedFromViewer,
            t = e.isSuspended,
            i = e.onConfirmProfileInterstitial,
            s = e.onEntriesRendered,
            u = e.onShowBlockedTweets,
            o = e.shouldShowProfileInterstitial,
            c = e.showBlockedTweets,
            d = e.user,
            g = re()(void 0 !== f ? f : (f = a('iIq9')), d),
            m = (null == g ? void 0 : g.legacy) || {},
            y = m.blocked_by,
            p = m.blocking,
            k = m.withheld_scope
          return t
            ? x.a.createElement(pl, null)
            : l
            ? x.a.createElement(gl, null)
            : g
            ? k && n
              ? x.a.createElement(ul, { onEntriesRendered: s, user: g })
              : k
              ? x.a.createElement(_l, { user: g })
              : o
              ? x.a.createElement($e, { onConfirmProfileInterstitial: i, user: g })
              : y
              ? x.a.createElement(we, { user: g })
              : p && !c
              ? x.a.createElement(Pe, { onShowBlockedTweets: u, user: g })
              : r
              ? x.a.createElement(yl, { user: g })
              : x.a.createElement(Ye, { onEntriesRendered: s, showBlockedTweets: c, user: g })
            : null
        },
        Fl = a('I/ms'),
        bl = a('TIdA'),
        vl = a('cHvH'),
        Sl = a('oSwX'),
        Kl = bl.a.createLayoutCache(),
        El = void 0 !== p ? p : (p = a('kVSq')),
        wl = function (e) {
          var l = e.isOwnProfile,
            a = e.isWithheld,
            n = e.user,
            r = re()(El, n),
            t = !l && a,
            i = t || !r.legacy.profile_image_url_https ? void 0 : r.legacy.profile_image_url_https
          return x.a.createElement(vl.a, null, function (e) {
            var l = e.windowWidth >= ve.a.theme.breakpoints.medium
            return x.a.createElement(Sl.default, {
              borderColor: 'cellBackground',
              borderWidth: l ? 'medium' : 'large',
              imageLayoutCache: Kl,
              link: t ? void 0 : { pathname: '/'.concat(r.legacy.screen_name || '', '/photo') },
              size: 'custom',
              style: Fl.a.avatar,
              uri: i || void 0,
            })
          })
        },
        Rl = a('RCZO'),
        Tl = a('n4Eu'),
        Pl = a('cm6r'),
        Ul = a('A91F'),
        Ll = a('9Xij'),
        Ol = bl.a.createLayoutCache(),
        Cl = function (e) {
          var l, a, n
          return null == e ||
            null === (l = e.mediaColor) ||
            void 0 === l ||
            null === (a = l.r) ||
            void 0 === a ||
            null === (n = a.ok) ||
            void 0 === n
            ? void 0
            : n.palette
        },
        Dl = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = re()(void 0 !== k ? k : (k = a('+PaE')), r),
            i = !l && n,
            s = Cl(t.legacy.profile_banner_extensions),
            u = s && Tl.a.get(s),
            o = u ? Object(Rl.g)(u) : ve.a.theme.colors.gray200,
            c = t.legacy.profile_banner_url
          return !i && c
            ? x.a.createElement(
                Pl.a,
                { accessibilityHidden: !0, link: '/'.concat(t.legacy.screen_name || '', '/header_photo') },
                x.a.createElement(bl.a, {
                  accessibilityLabel: '',
                  aspectMode: Ul.a.exact(ve.a.theme.aspectRatios.profileBanner),
                  backgroundColor: o,
                  image: c,
                  layoutCache: Ol,
                }),
              )
            : x.a.createElement(
                nl.a,
                { style: Fl.a.banner },
                x.a.createElement(Ll.a, {
                  ratio: ve.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: o },
                }),
              )
        },
        Hl = a('3nOA'),
        xl = a('I57f'),
        Il = a('SOvA'),
        ql = a('vYiB'),
        Wl = a('Y49K'),
        Al = a('/yvb'),
        Bl = a('ACHU'),
        Nl = a('rsoE'),
        Ml = a('vMjK'),
        jl = Z.a.h63a5c3b,
        Vl = function (e) {
          var l = e.buttonStyle,
            n = e.promotedContent,
            r = e.user,
            t = re()(void 0 !== _ ? _ : (_ = a('+uag')), r),
            i = x.a.useMemo(
              function () {
                var e = t.legacy
                return {
                  id_str: t.rest_id,
                  blocking: e.blocking,
                  blocked_by: e.blocked_by,
                  description: e.description || '',
                  following: e.following,
                  followed_by: e.followed_by,
                  muting: e.muting || void 0,
                  name: e.name || '',
                  profile_image_url_https: e.profile_image_url_https || '',
                  promoted_content: e.promoted_content
                    ? {
                        impression_id: e.promoted_content.impression_id || void 0,
                        disclosure_type: e.promoted_content.disclosure_type || void 0,
                      }
                    : void 0,
                  protected: e.protected,
                  screen_name: e.screen_name || '',
                  want_retweets: e.want_retweets || void 0,
                }
              },
              [t],
            )
          return x.a.createElement(Al.a, {
            accessibilityLabel: jl,
            hoverLabel: { label: jl },
            icon: x.a.createElement(Bl.a, null),
            renderMenu: function (e) {
              return x.a.createElement(Ml.b, { onClose: e, promotedContent: n, user: i, view: 'profile' })
            },
            style: l,
            testID: Nl.a.userActions,
            type: 'primaryOutlined',
          })
        },
        Ql = Z.a.g7088266,
        Gl = Z.a.gd7acb84,
        Yl = Z.a.b7636014,
        zl = ve.a.create(function (e) {
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
        Jl = function (e) {
          var l = e.history,
            n = e.isWithheld,
            r = e.loggedInUserId,
            t = e.onFollowButtonOffscreen,
            i = e.promotedContent,
            s = e.user,
            u = re()(void 0 !== h ? h : (h = a('hCMu')), s),
            o = Object(Je.b)(),
            c = u.legacy,
            d = c.blocked_by,
            g = c.blocking,
            m = c.can_dm,
            y = c.default_profile_image,
            f = c.description,
            p = c.following,
            k = c.notifications,
            _ = c.profile_banner_url,
            F = u.rest_id,
            b = F === r,
            v = d,
            S = n && !b,
            K = m && r && !g && !v && !S,
            E = r && u && !b && !S,
            w = 'primaryOutlined',
            R = p && r && !g && !v && !n,
            T = y && !f && !_,
            P = x.a.useCallback(
              function () {
                o.scribe({ element: 'message', action: 'click' }), r && l.push('/messages/'.concat(Object(Hl.a)(F, r)))
              },
              [o, r, F, l],
            )
          return x.a.createElement(
            nl.a,
            { style: zl.buttons },
            r && b
              ? x.a.createElement(
                  Al.a,
                  { link: T ? '/i/flow/setup_profile' : '/settings/profile', style: zl.lastButton, type: w },
                  T ? Gl : Ql,
                )
              : null,
            E && x.a.createElement(Vl, { buttonStyle: zl.button, promotedContent: i, user: u }),
            !b &&
              K &&
              x.a.createElement(Al.a, {
                accessibilityLabel: Yl,
                hoverLabel: { label: Yl },
                icon: x.a.createElement(Il.a, null),
                onPress: P,
                style: zl.button,
                testID: Wl.a.sendDMFromProfile,
                type: w,
              }),
            !b &&
              R &&
              x.a.createElement(xl.a, {
                allowPromptForPush: !0,
                isFollowing: !!k,
                style: zl.button,
                userId: u.rest_id,
              }),
            !b &&
              !v &&
              !S &&
              x.a.createElement(
                ql.a,
                { onOffscreenChange: t },
                x.a.createElement(J.a, { promotedContent: i, style: zl.lastButton, user: u }),
              ),
          )
        },
        Xl = a('tOzk'),
        Zl = a('YeIG'),
        $l = a('Je1/'),
        ea = a('WWyu'),
        la = a('YUdS'),
        aa = a('EjKN'),
        na = Z.a.a1ea2f12,
        ra = Z.a.g8191e77,
        ta = function (e) {
          var l = e.day,
            a = e.month
          if (l && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && l === n.getDate()
          }
        },
        ia = void 0 !== F ? F : (F = a('BdHD')),
        sa = function (e) {
          var l,
            a = e.isOwnProfile,
            n = e.user,
            r = null === (l = re()(ia, n).legacy_extended_profile) || void 0 === l ? void 0 : l.birthdate,
            t = x.a.useRef(),
            i = x.a.useCallback(function () {
              t.current && t.current.launch()
            }, [])
          return !r ||
            Object(Zl.a)(r) ||
            (r.visibility && 'Self' === r.visibility && r.year_visibility && 'Self' === r.year_visibility)
            ? null
            : ta(r)
            ? x.a.createElement(
                x.a.Fragment,
                null,
                x.a.createElement($l.a, { Icon: la.a, onPress: i }, a ? na : ra),
                x.a.createElement(Xl.a, {
                  setRef: function (e) {
                    t.current = e
                  },
                }),
              )
            : x.a.createElement($l.a, { Icon: aa.a }, x.a.createElement(ea.a, { birthdate: r, withBornPrefixText: !0 }))
        },
        ua = a('uLiA'),
        oa = a('EJJl'),
        ca = void 0 !== b ? b : (b = a('GQYZ')),
        da = ve.a.create(function (e) {
          return { description: { display: 'block', marginBottom: e.spaces.space12 } }
        }),
        ga = function (e) {
          var l = e.isTranslatable,
            a = e.user,
            n = re()(ca, a),
            r = n.legacy
          return r.description
            ? x.a.createElement(
                nl.a,
                { style: da.description },
                x.a.createElement(oa.a, {
                  description: r.description || '',
                  disableTranslation: !l,
                  entities: al(r.entities),
                  testID: ua.a.userDescription,
                  userId: n.rest_id,
                  withheldDescription: r.withheld_description || void 0,
                  withheldEntities: al(r.withheld_entities),
                }),
              )
            : null
        },
        ma = void 0 !== v ? v : (v = a('SXQl')),
        ya = function (e) {
          var l = e.user,
            a = re()(ma, l)
          return x.a.createElement(ga, { isTranslatable: a.is_profile_translatable, user: a })
        },
        fa = a('LhSm'),
        pa = a('KrGU'),
        ka = a('I/9y'),
        _a = void 0 !== S ? S : (S = a('nmzZ')),
        ha = ve.a.create(function (e) {
          return {
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
          }
        }),
        Fa = function (e) {
          var l,
            a,
            n,
            r = e.isOwnProfile,
            t = e.user,
            i = re()(_a, t),
            s = i.legacy,
            u =
              null === (l = s.entities) ||
              void 0 === l ||
              null === (a = l.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0]
          return x.a.createElement(
            x.a.Fragment,
            null,
            x.a.createElement(
              x.a.Suspense,
              { fallback: x.a.createElement(ga, { user: i }) },
              x.a.createElement(ya, { user: i }),
            ),
            x.a.createElement(
              nl.a,
              { style: ha.details },
              x.a.createElement(
                _e.b,
                { style: ha.detailsText, testID: ua.a.profileHeaderItems },
                s.location
                  ? x.a.createElement($l.a, { Icon: pa.a }, x.a.createElement(_e.b, null, i.legacy.location))
                  : null,
                u && u.url
                  ? x.a.createElement(
                      $l.a,
                      { Icon: ka.a, link: { pathname: u.url, external: !0 } },
                      u.display_url || u.url,
                    )
                  : null,
                x.a.createElement(
                  x.a.Suspense,
                  { fallback: null },
                  x.a.createElement(sa, { isOwnProfile: r, user: i }),
                ),
                i.legacy.created_at ? x.a.createElement(fa.a, { joinDate: i.legacy.created_at }) : null,
              ),
            ),
          )
        },
        ba = a('W27K'),
        va = a('1YZw'),
        Sa = a('G6rE'),
        Ka = a('rxPX'),
        Ea = a('0KEI'),
        wa = Object(Ka.a)().propsFromActions(function () {
          return {
            addToast: va.b,
            createLocalApiErrorHandler: Object(Ea.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: Sa.e.unmute,
          }
        }),
        Ra = a('8Usl'),
        Ta = a('eb3s'),
        Pa = a('P2xQ'),
        Ua = Z.a.cef4e8cf,
        La = Z.a.ec294e62,
        Oa = Z.a.df422dfe,
        Ca = wa(function (e) {
          var l = e.addToast,
            n = e.createLocalApiErrorHandler,
            r = e.unmute,
            t = e.user,
            i = re()(void 0 !== K ? K : (K = a('gNV4')), t),
            s = x.a.useState(!1),
            u = D()(s, 2),
            o = u[0],
            c = u[1],
            d = i.legacy.screen_name
          return x.a.createElement(
            x.a.Fragment,
            null,
            x.a.createElement(
              _e.b,
              { color: 'gray700', style: Da.mute },
              Oa,
              ' ',
              x.a.createElement(
                _e.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: Da.unmuteButton,
                  testID: Ra.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                Pa.g,
              ),
            ),
            o
              ? x.a.createElement(Ta.a, {
                  confirmButtonLabel: Pa.g,
                  headline: Ua({ screenName: d }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      r(i.rest_id).then(function () {
                        return l({ text: Object(Pa.d)(d || void 0) })
                      }, n({ showToast: !0 }))
                  },
                  text: La,
                })
              : null,
          )
        }),
        Da = ve.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        Ha = a('ir4X'),
        xa = function (e) {
          var l = e.label,
            n = re()(void 0 !== E ? E : (E = a('jUuT')), l)
          return n.badge
            ? x.a.createElement(Ha.a, { label: { badge: n.badge, description: n.description, url: n.url || void 0 } })
            : null
        },
        Ia = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = re()(void 0 !== w ? w : (w = a('7COa')), r),
            i = t.affiliates_highlighted_label,
            s = t.legacy,
            u = !(!s.name || !s.screen_name || (n && !l)),
            o = u ? s.name || '' : '@'.concat(s.screen_name || '')
          return x.a.createElement(
            nl.a,
            { style: Fl.a.names },
            x.a.createElement(fe.a, {
              badgeContext: 'account',
              isProtected: n ? void 0 : s.protected,
              isVerified: n ? void 0 : s.verified,
              name: o,
              nameSize: 'headline1',
              screenName: u ? s.screen_name || '' : void 0,
              translatorType: n ? void 0 : s.translator_type || void 0,
              weight: 'heavy',
              withFollowsYou: s.followed_by && !n,
              withNameWrap: !0,
              withStackedLayout: !0,
            }),
            i && i.label ? x.a.createElement(xa, { label: i.label }) : null,
          )
        },
        qa = a('z+ta'),
        Wa = a('wCd/'),
        Aa = function (e) {
          var l = e.isOwnProfile,
            n = (e.loggedInUserId, e.user),
            r = re()(void 0 !== R ? R : (R = a('lFTA')), n),
            t = r.legacy,
            i = t.followers_count,
            s = t.friends_count,
            u = t.screen_name,
            o = ke({ isOwnProfile: l, user: r })
          return x.a.createElement(De.a, null, function (e) {
            return x.a.createElement(Wa.a, {
              followersCount: i,
              friendsCount: s,
              onPress: e(),
              screenName: u || '',
              withLink: o,
            })
          })
        },
        Ba = ve.a.create(function (e) {
          return {
            avatarAndButtons: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            },
            content: { marginBottom: e.spaces.space16 },
            marginTopXSmall: { marginTop: e.spaces.space12 },
          }
        }),
        Na = function (e) {
          var l,
            n,
            r,
            t,
            i,
            s,
            u,
            o,
            c,
            d,
            g = e.history,
            m = e.isOwnProfile,
            y = e.loggedInUserId,
            f = e.onFollowButtonOffscreen,
            p = e.promotedContent,
            k = e.user,
            _ = re()(void 0 !== T ? T : (T = a('aOg7')), k),
            h = x.a.useState(!1),
            F = D()(h, 2),
            b = F[0],
            v = F[1],
            S = !(null === (l = _.legacy) || void 0 === l || !l.withheld_scope),
            K =
              !m &&
              ((null === (n = _.legacy) || void 0 === n ? void 0 : n.blocking) ||
                (null === (r = _.legacy) || void 0 === r ? void 0 : r.blocked_by) ||
                S),
            E = !m && ((null === (t = _.legacy) || void 0 === t ? void 0 : t.blocked_by) || S),
            w =
              !y ||
              m ||
              (null === (i = _.legacy) || void 0 === i ? void 0 : i.blocking) ||
              (null === (s = _.legacy) || void 0 === s ? void 0 : s.blocked_by) ||
              S ||
              ((null === (u = _.legacy) || void 0 === u ? void 0 : u.protected) &&
                !(null !== (o = _.legacy) && void 0 !== o && o.following)),
            R = null === (c = _.legacy) || void 0 === c ? void 0 : c.following,
            P = x.a.useRef(R)
          x.a.useEffect(
            function () {
              R && !P.current && v(!0), (P.current = R)
            },
            [R],
          )
          var U = x.a.useCallback(function () {
            v(!1)
          }, [])
          return x.a.createElement(
            nl.a,
            null,
            x.a.createElement(Dl, { isOwnProfile: m, isWithheld: S, user: _ }),
            x.a.createElement(
              nl.a,
              { style: [Fl.a.content, Ba.content, K && Fl.a.withheld] },
              x.a.createElement(
                nl.a,
                { style: Ba.avatarAndButtons },
                x.a.createElement(wl, { isOwnProfile: m, isWithheld: S, user: _ }),
                x.a.createElement(Jl, {
                  history: g,
                  isWithheld: S,
                  loggedInUserId: y,
                  onFollowButtonOffscreen: f,
                  promotedContent: p,
                  user: _,
                }),
              ),
              x.a.createElement(Ia, { isOwnProfile: m, isWithheld: S, user: _ }),
              K ? null : x.a.createElement(Fa, { isOwnProfile: m, user: _ }),
              E ? null : x.a.createElement(Aa, { isOwnProfile: m, loggedInUserId: y, user: _ }),
              w
                ? null
                : x.a.createElement(
                    nl.a,
                    { style: Ba.marginTopXSmall },
                    x.a.createElement(ba.a, {
                      userId: _.rest_id,
                      userScreenName: (null === (d = _.legacy) || void 0 === d ? void 0 : d.screen_name) || '',
                    }),
                  ),
              _.legacy.muting ? x.a.createElement(Ca, { user: _ }) : null,
            ),
            b ? x.a.createElement(qa.a, { onRemoveClusterFollow: U, userId: _.rest_id }) : null,
          )
        },
        Ma = function (e) {
          var l = e.avatarAccessibilityLabel
          return x.a.createElement(vl.a, null, function (e) {
            e.windowWidth
            return x.a.createElement(
              nl.a,
              { accessibilityState: { hidden: !0 }, style: Fl.a.avatar },
              x.a.createElement(Sl.default, { accessibilityLabel: l, size: 'custom' }),
            )
          })
        },
        ja = function (e) {
          var l,
            n = e.avatarAccessibilityLabel,
            r = e.fullUser,
            t = e.restrictedUser,
            i = e.shouldDisplayUserActionSheet,
            s = re()(void 0 !== P ? P : (P = a('kdCF')), r),
            u = (s && s.legacy) || t
          return (
            u.name && u.screen_name ? (l = u.name) : u.screen_name && (l = '@'.concat(u.screen_name)),
            x.a.createElement(
              nl.a,
              null,
              x.a.createElement(
                nl.a,
                { style: Fl.a.banner },
                x.a.createElement(Ll.a, { ratio: ve.a.theme.aspectRatios.profileBanner }),
              ),
              x.a.createElement(
                nl.a,
                { style: [Fl.a.content, Fl.a.withheld] },
                x.a.createElement(
                  nl.a,
                  { style: Fl.a.avatarAndButton },
                  x.a.createElement(Ma, { avatarAccessibilityLabel: n }),
                  i && s && x.a.createElement(Vl, { buttonStyle: Fl.a.menuSheetButton, user: s }),
                ),
                x.a.createElement(
                  nl.a,
                  { style: Fl.a.names },
                  x.a.createElement(fe.a, {
                    name: l,
                    nameSize: 'headline1',
                    screenName: u.name && u.screen_name ? u.screen_name : void 0,
                    withStackedLayout: !0,
                  }),
                ),
              ),
            )
          )
        },
        Va = Z.a.h1658541,
        Qa = Z.a.b5447710,
        Ga = function (e) {
          var l = e.history,
            n = e.isNotFound,
            r = e.isOwnProfile,
            t = e.isSuspended,
            i = e.location,
            s = e.loggedInUserId,
            u = e.onFollowButtonOffscreen,
            o = e.promotedContent,
            c = e.screenName,
            d = e.shouldShowProfileInterstitial,
            g = e.user,
            m = re()(void 0 !== U ? U : (U = a('Ge0p')), g)
          if (!r && (t || n || d)) {
            var y,
              f = (null == m || null === (y = m.legacy) || void 0 === y ? void 0 : y.name) || void 0,
              p = { name: f, screen_name: c || '' },
              k = n ? Qa : t ? Va : f
            return x.a.createElement(ja, {
              avatarAccessibilityLabel: k,
              fullUser: m,
              restrictedUser: p,
              shouldDisplayUserActionSheet: !t && !n,
            })
          }
          return m
            ? x.a.createElement(Na, {
                history: l,
                isOwnProfile: r,
                location: i,
                loggedInUserId: s,
                onFollowButtonOffscreen: u,
                promotedContent: o,
                user: m,
              })
            : null
        },
        Ya = a('ipry'),
        za = a('mw9i'),
        Ja = a('zfvc'),
        Xa = Z.a.fa98627a,
        Za = Z.a.c6ea308b,
        $a = Z.a.ccc9153f,
        en = function (e) {
          var l = e.displaySensitiveMedia,
            a = e.isNotFound,
            n = e.isSuspended,
            r = e.loggedInUserId,
            t = e.showBlockedTweets,
            i = e.user,
            s = e.userProfileInterstitialDismissed
          if (!i)
            return {
              isWithheld: !1,
              isOwnProfile: !1,
              isProtectedFromViewer: !1,
              shouldShowProfileInterstitial: !1,
              isInvalid: n || a,
            }
          var u = !!i.legacy.withheld_scope,
            o = i.rest_id === r,
            c = n || a || (u && !o),
            d = !(!i.legacy.protected || o || i.legacy.following),
            g = !1
          if (i.legacy.profile_interstitial_type) {
            var m = i.legacy.blocking && !t,
              y = i.legacy.blocked_by,
              f =
                (i.legacy.profile_interstitial_type === Ya.a.SensitiveMedia ||
                  i.legacy.profile_interstitial_type === Ya.a.OffensiveProfileContent) &&
                (i.legacy.following || l)
            g = !(o || d || m || y || s || f)
          }
          return {
            isWithheld: u,
            isOwnProfile: o,
            isInvalid: c,
            isProtectedFromViewer: d,
            shouldShowProfileInterstitial: g,
          }
        },
        ln = function (e) {
          return e.pathname.includes('/intent/')
        },
        an = function (e) {
          return ((e && e.state) || {}).promotedTweetState
        },
        nn = function (e, l, a, n) {
          return e && !a
            ? x.a.createElement(
                Ja.b,
                { animateMount: !0, show: n, type: 'fade' },
                x.a.createElement(J.a, { promotedContent: l, user: e }),
              )
            : void 0
        },
        rn = function (e, l, a, n, r) {
          if (e) {
            var t = !!(n || a || e.legacy.blocked_by || (e.legacy.blocking && !r))
            return x.a.createElement(ue.a, {
              hideMediaModule: t,
              userId: e.rest_id,
              userScreenName: e.legacy.screen_name || void 0,
              withTopicsToFollow: l,
            })
          }
          return x.a.createElement(V.a, null)
        },
        tn = function (e) {
          var l = e.displaySensitiveMedia,
            n = e.fetchStatus,
            r = e.isNotFound,
            t = e.isRefreshing,
            i = e.isSuspended,
            s = e.onRefresh,
            u = e.onRetry,
            o = e.screenName,
            c = e.user,
            d = Object(xe.f)(),
            g = Object(xe.g)(),
            m = an(g),
            y = x.a.useRef(!0),
            f = x.a.useRef(!0),
            p = x.a.useContext(j.a).loggedInUserId,
            k = x.a.useState(!1),
            _ = D()(k, 2),
            h = _[0],
            F = _[1],
            b = x.a.useState(!1),
            v = D()(b, 2),
            S = v[0],
            K = v[1],
            E = x.a.useState(!1),
            w = D()(E, 2),
            R = w[0],
            T = w[1],
            P = re()(void 0 !== L ? L : (L = a('kcMG')), c),
            U = en({
              user: P,
              loggedInUserId: p,
              isSuspended: i,
              isNotFound: r,
              showBlockedTweets: h,
              displaySensitiveMedia: l,
              userProfileInterstitialDismissed: R,
            }),
            O = U.isInvalid,
            C = U.isOwnProfile,
            H = U.isProtectedFromViewer,
            I = U.isWithheld,
            q = U.shouldShowProfileInterstitial,
            W = ke({ isOwnProfile: C, user: P }),
            A = P && !P.legacy.blocking && !P.legacy.blocked_by && !C && !H && !i && !r && !I && !q
          x.a.useEffect(
            function () {
              if (n === N.a.FAILED) f.current = !1
              else if (f.current && A) {
                M.d('profile', { source: 'graphql' }), (f.current = !1)
              }
            },
            [n, A],
          )
          var B = x.a.useCallback(function (e) {
              var l = e.entries
              if ((e.fetchStatus === N.a.FAILED && (y.current = !1), y.current && l.length)) {
                var a = l.some(function (e) {
                  return e.type === Q.b.Tweet
                })
                if (((y.current = !1), a)) {
                  M.c('profile', { source: 'graphql' })
                }
              }
            }, []),
            V = P ? Za({ screenName: P.legacy.screen_name, fullName: P.legacy.name }) : void 0,
            J = C ? '' : '@'.concat((null == P ? void 0 : P.legacy.screen_name) || o || '', ' '),
            X = x.a.useMemo(
              function () {
                return function () {
                  return { defaultText: J }
                }
              },
              [J],
            ),
            Z = O ? null : x.a.createElement(z.a, { getLocationState: X, history: d }),
            ee = x.a.useCallback(function (e) {
              var l = e.isOffscreen
              K(l)
            }, []),
            le = function () {
              T(!0)
            },
            ae = function () {
              F(!0)
            },
            ne = x.a.useCallback(
              function () {
                return x.a.createElement(
                  x.a.Fragment,
                  null,
                  x.a.createElement(Ga, {
                    history: d,
                    isNotFound: r,
                    isOwnProfile: C,
                    isSuspended: i,
                    location: g,
                    loggedInUserId: p,
                    onFollowButtonOffscreen: ee,
                    promotedContent: m,
                    screenName: o,
                    shouldShowProfileInterstitial: q,
                    user: P,
                  }),
                  x.a.createElement(hl, {
                    isNotFound: r,
                    isOwnProfile: C,
                    isProtectedFromViewer: H,
                    isSuspended: i,
                    onConfirmProfileInterstitial: le,
                    onEntriesRendered: B,
                    onShowBlockedTweets: ae,
                    shouldShowProfileInterstitial: q,
                    showBlockedTweets: h,
                    user: P,
                  }),
                )
              },
              [B, ee, d, r, C, H, i, g, p, m, o, q, h, P],
            ),
            te = x.a.useCallback(
              function () {
                var e = i || r
                return x.a.createElement(
                  oe.a,
                  { isRefreshing: t, onRefresh: s },
                  x.a.createElement(
                    nl.a,
                    { style: sn.containerGrow },
                    x.a.createElement(
                      za.a,
                      null,
                      x.a.createElement(Y.a, {
                        accessibilityLabel: $a({ screenName: o }),
                        fetchStatus: e ? N.a.LOADED : n,
                        onRequestRetry: u,
                        render: ne,
                      }),
                    ),
                  ),
                )
              },
              [o, t, i, r, n, s, u, ne],
            )
          return x.a.createElement(ce.a, {
            backLocation: '/',
            composeOptions: { defaultText: J },
            documentTitle: V,
            history: d,
            primaryContent: x.a.createElement(
              G.a,
              { fab: Z },
              x.a.createElement(se, { user: P }),
              x.a.createElement(Y.a, {
                accessibilityLabel: $a({ screenName: o }),
                fetchStatus: P || O ? N.a.LOADED : n,
                onRequestRetry: u,
                render: te,
              }),
              ln(g)
                ? x.a.createElement($.a, { history: d, location: g, userId: null == P ? void 0 : P.rest_id })
                : null,
            ),
            rightControl: nn(P, m, C, S),
            sidebarContent: rn(P, W, H, q, h),
            subtitle: P && !O && n === N.a.LOADED ? x.a.createElement(ye, { location: g, user: P }) : void 0,
            title: P && !O ? x.a.createElement(pe, { user: P }) : Xa,
          })
        },
        sn = ve.a.create(function (e) {
          return { containerGrow: { flexGrow: 1 } }
        }),
        un = a('k49u'),
        on = a('n0Rl'),
        cn = a('PJTX'),
        dn = a.n(cn),
        gn = void 0 !== O ? O : (O = a('DRvb')),
        mn = Object(on.b)(gn, { errorConfig: { context: 'USER_PROFILE_SCREEN', options: I.a } }),
        yn = function (e) {
          var l = e.displaySensitiveMedia,
            a = (function (e) {
              var l = e.location,
                a = e.params
              return a && a.screenName
                ? a.screenName
                : l && l.query && l.query.screen_name && 'string' == typeof l.query.screen_name
                ? l.query.screen_name
                : ''
            })({ location: Object(xe.g)(), params: Object(xe.h)() }),
            n = x.a.useState(!1),
            r = D()(n, 2),
            t = r[0],
            i = r[1],
            s = dn()(),
            u = x.a.useMemo(
              function () {
                return { screenName: Object(A.a)(a) }
              },
              [a],
            ),
            o = function () {
              i(!0),
                W()(s, gn, { screenName: a })
                  .toPromise()
                  .then(
                    function () {
                      return i(!1)
                    },
                    function () {
                      return i(!1)
                    },
                  )
            }
          return x.a.createElement(mn, {
            render: function (e) {
              var n = e.data,
                r = e.error,
                i = e.fetchStatus,
                s = e.retry,
                u = null == n ? void 0 : n.user,
                c = !!r && Object(un.c)(r, un.a.OtherUserSuspended),
                d = !!r && Object(un.c)(r, un.a.GenericUserNotFound),
                g = function () {
                  s()
                }
              return x.a.createElement(B.a, { userId: null == u ? void 0 : u.rest_id }, function (e) {
                var n = e.scribeNamespace
                return x.a.createElement(tn, {
                  displaySensitiveMedia: l,
                  fetchStatus: Object(N.b)(i, !!u),
                  isNotFound: d,
                  isRefreshing: t,
                  isSuspended: c,
                  onRefresh: o,
                  onRetry: g,
                  screenName: a,
                  scribeNamespace: n,
                  user: u || null,
                })
              })
            },
            variables: u,
          })
        }
      l.default = yn
    },
  },
])
//# sourceMappingURL=WIPED
