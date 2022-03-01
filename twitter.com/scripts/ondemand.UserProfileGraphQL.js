;(window.webpackJsonp = window.webpackJsonp || []).push([
  [246],
  {
    '+PaE': function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Banner_DefaultUserProfileHeader_user',
        selections: [
          {
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
                                      { alias: null, args: null, kind: 'ScalarField', name: 'green', storageKey: null },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'blue', storageKey: null },
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
        ],
        type: 'User',
        abstractKey: null,
        hash: '97c26a93f91e1f207d4c007b693b51f8',
      }
      l.default = n
    },
    '+uag': function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserActionSheetButton_user',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
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
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'want_retweets', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '12003db17f550621a9bebb150fceeab7',
      }
      l.default = n
    },
    '0pBG': function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Default_UserProfileContent_user',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '666d8ef5f619c54b2c3bf8c32be1a45a',
      }
      l.default = n
    },
    '21nk': function (e, l, a) {
      'use strict'
      var n = a('I9iR'),
        r = a('3KVO'),
        t = a('yLYC'),
        i = a('Ud88'),
        s = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        u = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        o = u.fetchQueryDeduped,
        c = u.fetchQuery
      e.exports = function (e, l, a) {
        s()
        var u,
          d = i(),
          g = l.fetchKey,
          m = l.fetchPolicy,
          y = l.source,
          f = l.variables,
          p = l.networkCacheConfig,
          k = t(e, f, p)
        if ('PreloadedQuery_DEPRECATED' === l.kind)
          k.request.node.params.name !== l.name && n(!1),
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
    '23An': function (e, l, a) {
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
    '66Bp': function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileTitle_user',
        selections: [
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
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '8c550eef6cce06eaa97e4946a4053e9b',
      }
      l.default = n
    },
    '7COa': function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Names_DefaultUserProfileHeader_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'translator_type', storageKey: null },
            ],
            storageKey: null,
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
      l.default = n
    },
    BdHD: function (e, l, a) {
      'use strict'
      a.r(l)
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
      l.default = n
    },
    D0zN: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileSubtitle_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'favourites_count', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'media_count', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'statuses_count', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7c5f2e26bf309d58fdfb771d3251d14a',
      }
      l.default = n
    },
    DRvb: function (e, l, a) {
      'use strict'
      a.r(l)
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
                  {
                    kind: 'ClientExtension',
                    selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
                  },
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
            id: '30YJdqTwJsF33NHV_ygZew',
            metadata: {},
            name: 'UserProfileQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = 'aea4fe65f61450e7dedd0595be4a239c'), (l.default = d)
    },
    E4Mm: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'LoggedInWithheld_UserProfileContent_user',
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
                              { alias: null, args: null, kind: 'ScalarField', name: 'expanded_url', storageKey: null },
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
          { args: null, kind: 'FragmentSpread', name: 'Default_UserProfileContent_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '66cc550f10eb15dd76576e8250782aac',
      }
      l.default = n
    },
    GQYZ: function (e, l, a) {
      'use strict'
      a.r(l)
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
                            (n = {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'display_url',
                              storageKey: null,
                            }),
                            (r = { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null }),
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
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
                                n,
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'expanded_url',
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'indices', storageKey: null },
                                r,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
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
          ],
          type: 'User',
          abstractKey: null,
        }
      ;(i.hash = 'bfbe95bc38d4f0d979f685ec6718a931'), (l.default = i)
    },
    Ge0p: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileHeader_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'RestrictedUserProfileHeader_fullUser' },
          { args: null, kind: 'FragmentSpread', name: 'DefaultUserProfileHeader_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '9b449b976f91f725c95883f90b077abb',
      }
      l.default = n
    },
    P4CI: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'FollowUserButtonRelay_user',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'follow_request_sent', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
            ],
            storageKey: null,
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
      l.default = n
    },
    SXQl: function (e, l, a) {
      'use strict'
      a.r(l)
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
      l.default = n
    },
    ZNc3: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        kind: 'InlineDataFragment',
        name: 'formatUserEntities_entities',
        hash: '37b1b21c4aa1743040c79e7b121cf759',
      }
      l.default = n
    },
    aOg7: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'DefaultUserProfileHeader_user',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
            ],
            storageKey: null,
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
      l.default = n
    },
    bCEw: function (e, l, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        r = a('23An'),
        t = a('Ud88'),
        i = a('aQQo'),
        s = i.loadQuery,
        u = i.useTrackLoadQueryInRender,
        o = a('ERkP'),
        c = o.useCallback,
        d = o.useEffect,
        g = o.useRef,
        m = o.useState,
        y = a('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function p(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== y(e).params.metadata.live
      }
      e.exports = function (e, l) {
        var a = null != l ? l : f,
          i = t()
        u()
        var o = r(),
          y = g(new Set([a])),
          k = m(function () {
            return a
          }),
          _ = k[0],
          b = k[1],
          h = m(function () {
            return a
          }),
          F = h[0],
          v = h[1]
        a !== F && (y.current.add(a), v(a), b(a))
        var S = c(
            function () {
              o.current && (y.current.add(f), b(f))
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
                var r,
                  t = s(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : i, e, l, n)
                y.current.add(t), b(t)
              }
            },
            [i, e, b, o],
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
    dVIa: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Interstitialed_UserProfileContent_user',
        selections: [
          {
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
        ],
        type: 'User',
        abstractKey: null,
        hash: '3ea15cd52879521808e7b2e7211e2e45',
      }
      l.default = n
    },
    eH5D: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Blocking_UserProfileContent_user',
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
        hash: '05a025471bcc0333ef38d2a275f3d337',
      }
      l.default = n
    },
    gNV4: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Mute_DefaultUserProfileHeader_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
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
        hash: 'ef9252aba605f912c58f559ad7b94456',
      }
      l.default = n
    },
    hCMu: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Buttons_DefaultUserProfileHeader_user',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'can_dm', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'default_profile_image', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'notifications', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_banner_url', storageKey: null },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'UserActionSheetButton_user' },
          { args: null, kind: 'FragmentSpread', name: 'FollowUserButtonRelay_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'fc2450b2938394c8f684ee332a127560',
      }
      l.default = n
    },
    iIq9: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileContent_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
            ],
            storageKey: null,
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
      l.default = n
    },
    iN7L: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Protected_UserProfileContent_user',
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
        hash: 'd6415707c1b7306f49197be368867957',
      }
      l.default = n
    },
    jUuT: function (e, l, a) {
      'use strict'
      a.r(l)
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
      ;(r.hash = '771c8f366e4c2e2fa28739a713386507'), (l.default = r)
    },
    kVSq: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Avatar_DefaultUserProfileHeader_user',
        selections: [
          {
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
        ],
        type: 'User',
        abstractKey: null,
        hash: 'cfdc403c7e0ccbc8ac941def79fb3a5f',
      }
      l.default = n
    },
    kcMG: function (e, l, a) {
      'use strict'
      a.r(l)
      var n,
        r,
        t,
        i = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'UserProfileScreen_user',
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
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                (n = { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null }),
                { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
                (r = { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null }),
                (t = { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null }),
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_interstitial_type', storageKey: null },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'UserProfileMetaTags_user' },
            { args: null, kind: 'FragmentSpread', name: 'UserProfileTitle_user' },
            { args: null, kind: 'FragmentSpread', name: 'UserProfileSubtitle_user' },
            { args: null, kind: 'FragmentSpread', name: 'UserProfileHeader_user' },
            { args: null, kind: 'FragmentSpread', name: 'UserProfileContent_user' },
            { args: null, kind: 'FragmentSpread', name: 'FollowUserButtonRelay_user' },
            {
              kind: 'InlineDataFragmentSpread',
              name: 'determineIsAllowedToViewRelay_determineIsAllowedToViewSubProfilePages_user',
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'ApiUser',
                  kind: 'LinkedField',
                  name: 'legacy',
                  plural: !1,
                  selections: [n, t, r],
                  storageKey: null,
                },
              ],
            },
          ],
          type: 'User',
          abstractKey: null,
        }
      ;(i.hash = '7f88e47394938b691de5b72d354fd5a1'), (l.default = i)
    },
    kdCF: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'RestrictedUserProfileHeader_fullUser',
        selections: [
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
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'UserActionSheetButton_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'c41e24645a31cac68dae74c8534c051f',
      }
      l.default = n
    },
    lFTA: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Stats_DefaultUserProfileHeader_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'followers_count', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'friends_count', storageKey: null },
            ],
            storageKey: null,
          },
          {
            kind: 'InlineDataFragmentSpread',
            name: 'determineIsAllowedToViewRelay_determineIsAllowedToViewSubProfilePages_user',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'ApiUser',
                kind: 'LinkedField',
                name: 'legacy',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '24a87755df121e2c0625fe2d7a37a175',
      }
      l.default = n
    },
    n0Rl: function (e, l, a) {
      'use strict'
      a.d(l, 'b', function () {
        return x
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
        b = a('pXBW'),
        h = a('6/RC'),
        F = a('UIzd'),
        v = a.n(F),
        S = a('kGix')
      a.d(l, 'a', function () {
        return S.a
      })
      var K = a('fs1G'),
        E = a('0KEI'),
        w = a('lU4h'),
        U = a.n(w),
        P = a('21nk'),
        L = a.n(P),
        T = a('bCEw'),
        C = a.n(T),
        D = a('Ud88'),
        I = a.n(D),
        A = function (e) {
          return (0, e.render)({ fetchStatus: S.a.LOADING, data: null, error: null, retry: K.a })
        },
        O = (function (e) {
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
                    if (!(e instanceof b.a)) throw e
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
        R = function (e) {
          var l = e.query,
            a = e.queryRef,
            n = e.render,
            r = L()(l, a)
          return n({ fetchStatus: S.a.LOADED, data: r, error: null, retry: K.a })
        },
        x = function (e, l) {
          if (h.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                t = void 0 === n ? 'store-or-network' : n,
                i = a.render,
                s = a.variables,
                u = C()(e),
                o = r()(u, 2),
                c = o[0],
                d = o[1],
                g = Object(E.useCreateLocalApiErrorHandler)(l.errorConfig.context),
                m = U()(s),
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
                      { fallback: _.a.createElement(A, { render: i }) },
                      _.a.createElement(
                        O,
                        { errorHandler: g(l.errorConfig.options || {}), key: c.fetchKey, retry: f },
                        function (l, a) {
                          return l
                            ? i({ fetchStatus: S.a.FAILED, error: l, data: null, retry: a })
                            : _.a.createElement(R, { query: e, queryRef: c, render: i })
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
              s = I()(),
              u = Object(E.useCreateLocalApiErrorHandler)(l.errorConfig.context),
              o = U()(i),
              c = r()(o, 1)[0],
              d = a.get(s)
            if (d) return d
            var g = _.a.lazy(function () {
              return v()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return t({ fetchStatus: S.a.LOADED, data: e, error: null, retry: K.a })
                  },
                  function (e) {
                    return e instanceof b.a
                      ? (u(l.errorConfig.options || {})(e),
                        t({ fetchStatus: S.a.FAILED, data: null, error: e, retry: K.a }))
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
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Details_DefaultUserProfileHeader_user',
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
          { args: null, kind: 'FragmentSpread', name: 'Description_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'TranslatableDescription_DefaultUserProfileHeader_user' },
          { args: null, kind: 'FragmentSpread', name: 'BirthdateItem_DefaultUserProfileHeader_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '9cacf8baae2de63bba0d8da09131d6dc',
      }
      l.default = n
    },
    sLDr: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'BlockedBy_UserProfileContent_user',
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
        hash: 'e3dbbfc0872d7f6d8fbb1167c29c062c',
      }
      l.default = n
    },
    vInD: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'UserProfileMetaTags_user',
        selections: [
          {
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
        ],
        type: 'User',
        abstractKey: null,
        hash: '6609a390631ec9409a99ba3e8813d44c',
      }
      l.default = n
    },
    vJP1: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'Withheld_UserProfileContent_user',
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
                              { alias: null, args: null, kind: 'ScalarField', name: 'expanded_url', storageKey: null },
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
        ],
        type: 'User',
        abstractKey: null,
        hash: '8ce1140c9e6d4c10136ca755976b064b',
      }
      l.default = n
    },
    x3bd: function (e, l, a) {
      'use strict'
      a.r(l),
        a.d(l, 'userProfileQuery', function () {
          return yn
        }),
        a.d(l, 'UserProfileQueryRenderer', function () {
          return fn
        }),
        a.d(l, 'UserProfileScreenContainer', function () {
          return pn
        })
      var n,
        r,
        t = a('ddV6'),
        i = a.n(t),
        s = a('ERkP'),
        u = a.n(s),
        o = a('GOQE'),
        c = a('rZeG'),
        d = a('txMZ'),
        g = a('kGix'),
        m = (a('lTEL'), a('7x/C'), a('kYxP'), a('5BYb'), a('ho0z'), a('jQ3i'), a('x4t0'), a('aeN7')),
        y = a('v6aA'),
        f = a('es0u'),
        p = (a('enFi'), a('Hsf0')),
        k = a.n(p),
        _ = function (e) {
          var l,
            r,
            t,
            i = e.isOwnProfile,
            s = e.user,
            u = k()(void 0 !== n ? n : (n = a('yvH6')), s),
            o = null === (l = u.legacy) || void 0 === l ? void 0 : l.blocked_by,
            c =
              (null === (r = u.legacy) || void 0 === r ? void 0 : r.protected) &&
              !(null !== (t = u.legacy) && void 0 !== t && t.following)
          return i || (!c && !o)
        },
        b = a('8UdT'),
        h = a('dwig'),
        F = a('v//M'),
        v = a('0+qk'),
        S = a('97Jx'),
        K = a.n(S),
        E = a('m3Bd'),
        w = a.n(E),
        U = a('uIZp'),
        P = a('jAXQ'),
        L = a.n(P),
        T = ['user']
      function C(e) {
        var l,
          n = e.user,
          t = w()(e, T),
          i = L()(void 0 !== r ? r : (r = a('P4CI')), n),
          s = u.a.useMemo(
            function () {
              var e, l, a, n, r, t, s, u
              return i
                ? {
                    id_str: i.rest_id,
                    screen_name: (null === (e = i.legacy) || void 0 === e ? void 0 : e.screen_name) || '',
                    name: (null === (l = i.legacy) || void 0 === l ? void 0 : l.name) || '',
                    follow_request_sent:
                      (null === (a = i.legacy) || void 0 === a ? void 0 : a.follow_request_sent) || !1,
                    protected: (null === (n = i.legacy) || void 0 === n ? void 0 : n.protected) || !1,
                    following: (null === (r = i.legacy) || void 0 === r ? void 0 : r.following) || !1,
                    followed_by: (null === (t = i.legacy) || void 0 === t ? void 0 : t.followed_by) || !1,
                    super_following: i.super_following || void 0,
                    super_follow_eligible: i.super_follow_eligible || void 0,
                    super_followed_by: i.super_followed_by || void 0,
                    smart_blocking: i.smart_blocking || void 0,
                    blocking: (null === (s = i.legacy) || void 0 === s ? void 0 : s.blocking) || void 0,
                    highlightedLabel:
                      null !== (u = i.affiliates_highlighted_label) && void 0 !== u && u.label
                        ? { userLabelType: i.affiliates_highlighted_label.label.user_label_type || void 0 }
                        : void 0,
                  }
                : void 0
            },
            [i],
          )
        return u.a.createElement(
          U.a,
          K()({}, t, {
            isRelay: !0,
            user: s,
            userId: null !== (l = null == i ? void 0 : i.rest_id) && void 0 !== l ? l : '',
          }),
        )
      }
      var D,
        I,
        A,
        O,
        R,
        x,
        B,
        N,
        H,
        M,
        Q,
        j,
        q,
        V,
        W,
        G,
        z,
        Y,
        J,
        Z,
        X,
        $,
        ee,
        le,
        ae,
        ne,
        re,
        te,
        ie,
        se = a('3XMw'),
        ue = a.n(se),
        oe = a('iFPY'),
        ce = (a('1t7P'), a('jQ/y'), a('s4rk')),
        de = a('zI2C'),
        ge = a('rJoH'),
        me = ue.a.d67658c0,
        ye = function (e) {
          var l = e.user,
            n = L()(void 0 !== D ? D : (D = a('vInD')), l),
            r = n ? 'twitter://user?screen_name='.concat(n.legacy.screen_name || '') : void 0,
            t = n ? 'https://twitter.com/'.concat(n.legacy.screen_name || '') : void 0,
            i = n ? me({ fullName: n.legacy.name, screenName: n.legacy.screen_name }) : void 0
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(ge.a, {
              canonical: t,
              description: (null == n ? void 0 : n.legacy.description) || '',
              image: (null == n ? void 0 : n.legacy.profile_image_url_https) || '',
              title: i,
              type: 'profile',
            }),
            u.a.createElement(de.a, { deepLink: r }),
            t ? u.a.createElement(ce.a, { canonical: t }) : null,
          )
        },
        fe = a('jS2K'),
        pe = a('IG4P'),
        ke = a('VS6U'),
        _e = (a('vrRf'), a('2G9S'), a('Qayx')),
        be = 'likes',
        he = 'media',
        Fe = function (e) {
          var l = e.user,
            n = L()(void 0 !== I ? I : (I = a('D0zN')), l).legacy,
            r = (n.screen_name || '').toLowerCase(),
            t = location.pathname.toLowerCase()
          return t.indexOf('/'.concat(r, '/').concat(be)) > -1
            ? u.a.createElement(_e.a, { count: n.favourites_count, type: 'likes' })
            : t.indexOf('/'.concat(r, '/').concat(he)) > -1
            ? u.a.createElement(_e.a, { count: n.media_count, type: 'media' })
            : u.a.createElement(_e.a, { count: n.statuses_count, type: 'tweets' })
        },
        ve = a('jV+4'),
        Se = function (e) {
          var l = e.user,
            n = L()(void 0 !== A ? A : (A = a('66Bp')), l)
          return u.a.createElement(ve.a, {
            isProtected: n.legacy.protected,
            isVerified: n.legacy.verified,
            name: n.legacy.name || void 0,
            screenName: n.legacy.screen_name || void 0,
            weight: 'heavy',
            withScreenName: !1,
          })
        },
        Ke = a('t62R'),
        Ee = a('tI3i'),
        we = a.n(Ee),
        Ue = a('FIs5'),
        Pe = a('rHpw'),
        Le = function (e) {
          var l = e.buttonText,
            a = e.header,
            n = e.message,
            r = e.onButtonPress
          return u.a.createElement(Ue.a, {
            buttonText: l,
            buttonType: 'brandOutlined',
            header: a,
            message: n,
            onButtonPress: r,
            style: Te.root,
          })
        },
        Te = Pe.a.create(function (e) {
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
        Ce = ue.a.ica87fde,
        De = function (e) {
          var l = L()(void 0 !== O ? O : (O = a('sLDr')), e.user).legacy.screen_name
          we()('string' == typeof l, 'screenName must be defined')
          var n = u.a.createElement(
            ue.a.I18NFormatMessage,
            { $i18n: 'ccade2e6', screenName: l },
            u.a.createElement(Ke.b, { link: 'https://support.twitter.com/articles/20172060' }, ue.a.de078c23),
          )
          return u.a.createElement(Le, { header: Ce, message: n })
        },
        Ie = ue.a.eeab4adf,
        Ae = ue.a.e79ed125,
        Oe = function (e) {
          var l = e.onShowBlockedTweets,
            n = L()(void 0 !== R ? R : (R = a('eH5D')), e.user).legacy.screen_name
          we()('string' == typeof n, 'screenName must be a string')
          var r = Ae({ screenName: n }),
            t = u.a.createElement(
              ue.a.I18NFormatMessage,
              { $i18n: 'e645092a', screenName: n },
              u.a.createElement(Ke.b, { link: 'https://support.twitter.com/articles/117063' }, ue.a.f6a72a2a),
            )
          return u.a.createElement(Le, { buttonText: Ie, header: r, message: t, onButtonPress: l })
        },
        Re = (a('JtPf'), a('87if'), a('Y6L+')),
        xe = a('wytG'),
        Be = a('Jkc4'),
        Ne = a('k/OQ'),
        He = a('zCf4'),
        Me = Object(xe.a)(function () {
          return Promise.all([a.e(0), a.e(246)]).then(a.bind(null, '8KtR'))
        }),
        Qe = Object(xe.a)(function () {
          return Promise.all([a.e(0), a.e(246)]).then(a.bind(null, 'ivpD'))
        }),
        je = Object(xe.a)(function () {
          return Promise.all([a.e(0), a.e(246)]).then(a.bind(null, 'ylAD'))
        }),
        qe = 'likes',
        Ve = 'media',
        We = 'with_replies',
        Ge = ue.a.a2811f96,
        ze = ue.a.bab1f8b0,
        Ye = ue.a.a52b03a5,
        Je = ue.a.add55c97,
        Ze = ue.a.d7b8eba9,
        Xe = function (e) {
          var l = e.onEntriesRendered,
            n = e.showBlockedTweets,
            r = L()(void 0 !== x ? x : (x = a('0pBG')), e.user),
            t = Object(He.g)(),
            i = t.query,
            s = r.legacy,
            o = s.name,
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
                  key: ze,
                  label: ze,
                },
                { to: { pathname: '/'.concat(g, '/').concat(We), query: i }, key: Ye, label: Ye },
                { to: { pathname: '/'.concat(g, '/').concat(Ve), query: i }, key: Je, label: Je, onClick: e() },
                { to: { pathname: '/'.concat(g, '/').concat(qe), query: i }, key: Ze, label: Ze, onClick: e() },
              ]
            },
            y = { displayBlocked: n, fullName: o, screenName: g, userId: d }
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(Be.a, null, function (e) {
              return u.a.createElement(Ne.a, { accessibilityLabel: Ge, links: m(e) })
            }),
            u.a.createElement(
              He.d,
              null,
              u.a.createElement(He.b, { exact: !0, path: '/intent/follow' }, u.a.createElement(Me, y)),
              u.a.createElement(He.b, { exact: !0, path: '/intent/user' }, u.a.createElement(Me, y)),
              u.a.createElement(
                He.b,
                { exact: !0, path: '/'.concat(Re.J) },
                u.a.createElement(Me, K()({}, y, { onEntriesRendered: l })),
              ),
              u.a.createElement(
                He.b,
                { exact: !0, path: '/'.concat(Re.J, '/').concat(We) },
                u.a.createElement(Me, K()({}, y, { withReplies: !0 })),
              ),
              u.a.createElement(He.b, { exact: !0, path: '/'.concat(Re.J, '/').concat(Ve) }, u.a.createElement(je, y)),
              u.a.createElement(He.b, { exact: !0, path: '/'.concat(Re.J, '/').concat(qe) }, u.a.createElement(Qe, y)),
            ),
          )
        },
        $e = a('drnk'),
        el = a('Irs7'),
        ll = ue.a.d834ab9c,
        al = Object(el.a)(
          function (e) {
            var l = e.analytics,
              n = e.onConfirmProfileInterstitial,
              r = L()(void 0 !== B ? B : (B = a('dVIa')), e.user).legacy.profile_interstitial_type,
              t = Object($e.a)(r),
              i = t.header,
              s = t.message
            u.a.useEffect(
              function () {
                l.scribeAction('impression')
              },
              [l],
            )
            return u.a.createElement(Le, {
              buttonText: ll,
              header: i,
              message: s,
              onButtonPress: function () {
                n(), l.scribeAction('click')
              },
            })
          },
          { section: 'profile_interstitial' },
        ),
        nl =
          (a('z84I'),
          a('M+/F'),
          function (e) {
            var l = k()(void 0 !== N ? N : (N = a('ZNc3')), e)
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
          }),
        rl = a('MWbm'),
        tl = a('Q0VY'),
        il = a('FiRh'),
        sl = a('0yYu'),
        ul = ue.a.gbf342a4,
        ol = function (e) {
          var l = e.onEntriesRendered,
            n = e.user,
            r = L()(void 0 !== H ? H : (H = a('E4Mm')), n),
            t = r.legacy,
            i = t.description,
            s = t.entities,
            o = r.rest_id,
            c = void 0 === o ? '' : o
          if (!i) return null
          var d = tl.a.descriptionTextParts(i, nl(s))
          return u.a.createElement(
            rl.a,
            null,
            u.a.createElement(
              rl.a,
              { style: cl.withheldMessageRoot },
              u.a.createElement(
                Ke.b,
                { align: 'center', size: 'title4', style: cl.withheldMessageHeader, weight: 'bold' },
                ul,
              ),
              u.a.createElement(
                Ke.b,
                { align: 'center', color: 'gray700', dir: 'auto' },
                d.map(function (e, l) {
                  return u.a.createElement(il.c, {
                    key: 'user_'.concat(c, '_textpart_').concat(l),
                    linkify: !0,
                    part: e,
                  })
                }),
              ),
            ),
            u.a.createElement(sl.a, null),
            u.a.createElement(Xe, { onEntriesRendered: l, user: r }),
          )
        },
        cl = Pe.a.create(function (e) {
          return {
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        dl = ue.a.c9a1cb5d,
        gl = ue.a.e7b201dd,
        ml = function () {
          return u.a.createElement(Le, { header: dl, message: gl })
        },
        yl = ue.a.d09e12c4,
        fl = function (e) {
          var l = L()(void 0 !== M ? M : (M = a('iN7L')), e.user).legacy.screen_name
          we()('string' == typeof l, 'screenName must be a string')
          var n = u.a.createElement(
            ue.a.I18NFormatMessage,
            { $i18n: 'c97724c2', screenName: l },
            u.a.createElement(Ke.b, { link: 'https://support.twitter.com/articles/14016' }, ue.a.a58c8a4e),
          )
          return u.a.createElement(Le, { header: yl, message: n })
        },
        pl = ue.a.g8475f82,
        kl = function () {
          var e = u.a.createElement(
            ue.a.I18NFormatMessage,
            { $i18n: 'f6fa2033' },
            u.a.createElement(Ke.b, { link: 'https://support.twitter.com/articles/18311' }, ue.a.f3b1bdc1),
          )
          return u.a.createElement(Le, { header: pl, message: e })
        },
        _l = ue.a.gbf342a4,
        bl = function (e) {
          var l = L()(void 0 !== Q ? Q : (Q = a('vJP1')), e.user),
            n = l.legacy,
            r = n.description,
            t = n.entities,
            i = l.rest_id
          if (!r) return null
          var s = tl.a.descriptionTextParts(r, nl(t)),
            o = u.a.createElement(
              Ke.b,
              { align: 'center', color: 'gray700', dir: 'auto' },
              s.map(function (e, l) {
                return u.a.createElement(il.c, { key: 'user_'.concat(i, '_textpart_').concat(l), linkify: !0, part: e })
              }),
            )
          return u.a.createElement(Le, { header: _l, message: o })
        },
        hl = function (e) {
          var l = e.isNotFound,
            n = e.isOwnProfile,
            r = e.isProtectedFromViewer,
            t = e.isSuspended,
            i = e.onConfirmProfileInterstitial,
            s = e.onEntriesRendered,
            o = e.onShowBlockedTweets,
            c = e.shouldShowProfileInterstitial,
            d = e.showBlockedTweets,
            g = e.user,
            m = L()(void 0 !== j ? j : (j = a('iIq9')), g),
            y = (null == m ? void 0 : m.legacy) || {},
            f = y.blocked_by,
            p = y.blocking,
            k = y.withheld_scope
          return t
            ? u.a.createElement(kl, null)
            : l
            ? u.a.createElement(ml, null)
            : m
            ? k && n
              ? u.a.createElement(ol, { onEntriesRendered: s, user: m })
              : k
              ? u.a.createElement(bl, { user: m })
              : c
              ? u.a.createElement(al, { onConfirmProfileInterstitial: i, user: m })
              : f
              ? u.a.createElement(De, { user: m })
              : p && !d
              ? u.a.createElement(Oe, { onShowBlockedTweets: o, user: m })
              : r
              ? u.a.createElement(fl, { user: m })
              : u.a.createElement(Xe, { onEntriesRendered: s, showBlockedTweets: d, user: m })
            : null
        },
        Fl = a('I/ms'),
        vl = a('TIdA'),
        Sl = a('cHvH'),
        Kl = a('jhWN'),
        El = vl.a.createLayoutCache(),
        wl = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = L()(void 0 !== q ? q : (q = a('kVSq')), r),
            i = !l && n,
            s = i || !t.legacy.profile_image_url_https ? void 0 : t.legacy.profile_image_url_https
          return u.a.createElement(Sl.a, null, function (e) {
            var l = e.windowWidth >= Pe.a.theme.breakpoints.medium
            return u.a.createElement(Kl.a, {
              borderColor: 'cellBackground',
              borderWidth: l ? 'medium' : 'large',
              imageLayoutCache: El,
              link: i ? void 0 : { pathname: '/'.concat(t.legacy.screen_name || '', '/photo') },
              size: 'custom',
              style: Fl.a.avatar,
              uri: s || void 0,
            })
          })
        },
        Ul = a('RCZO'),
        Pl = a('n4Eu'),
        Ll = a('cm6r'),
        Tl = a('A91F'),
        Cl = a('9Xij'),
        Dl = vl.a.createLayoutCache(),
        Il = function (e) {
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
        Al = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = L()(void 0 !== V ? V : (V = a('+PaE')), r),
            i = !l && n,
            s = Il(t.legacy.profile_banner_extensions),
            o = s && Pl.a.get(s),
            c = o ? Object(Ul.g)(o) : Pe.a.theme.colors.gray200,
            d = t.legacy.profile_banner_url
          return !i && d
            ? u.a.createElement(
                Ll.a,
                { accessibilityHidden: !0, link: '/'.concat(t.legacy.screen_name || '', '/header_photo') },
                u.a.createElement(vl.a, {
                  accessibilityLabel: '',
                  aspectMode: Tl.a.exact(Pe.a.theme.aspectRatios.profileBanner),
                  backgroundColor: c,
                  image: d,
                  layoutCache: Dl,
                }),
              )
            : u.a.createElement(
                rl.a,
                { style: Fl.a.banner },
                u.a.createElement(Cl.a, {
                  ratio: Pe.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: c },
                }),
              )
        },
        Ol = a('3nOA'),
        Rl = a('I57f'),
        xl = a('SOvA'),
        Bl = a('vYiB'),
        Nl = a('Y49K'),
        Hl = a('/yvb'),
        Ml = a('ACHU'),
        Ql = a('rsoE'),
        jl = a('vMjK'),
        ql = ue.a.h63a5c3b,
        Vl = function (e) {
          var l = e.buttonStyle,
            n = e.promotedContent,
            r = e.user,
            t = L()(void 0 !== W ? W : (W = a('+uag')), r),
            i = u.a.useMemo(
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
          return u.a.createElement(Hl.a, {
            accessibilityLabel: ql,
            hoverLabel: { label: ql },
            icon: u.a.createElement(Ml.a, null),
            renderMenu: function (e) {
              return u.a.createElement(jl.b, { onClose: e, promotedContent: n, user: i, view: 'profile' })
            },
            style: l,
            testID: Ql.a.userActions,
            type: 'primaryOutlined',
          })
        },
        Wl = ue.a.g7088266,
        Gl = ue.a.gd7acb84,
        zl = ue.a.b7636014,
        Yl = Pe.a.create(function (e) {
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
            o = L()(void 0 !== G ? G : (G = a('hCMu')), s),
            c = Object(el.b)(),
            d = o.legacy,
            g = d.blocked_by,
            m = d.blocking,
            y = d.can_dm,
            f = d.default_profile_image,
            p = d.description,
            k = d.following,
            _ = d.notifications,
            b = d.profile_banner_url,
            h = o.rest_id,
            F = h === r,
            v = g,
            S = n && !F,
            K = y && r && !m && !v && !S,
            E = r && o && !F && !S,
            w = 'primaryOutlined',
            U = k && r && !m && !v && !n,
            P = f && !p && !b,
            T = u.a.useCallback(
              function () {
                c.scribe({ element: 'message', action: 'click' }), r && l.push('/messages/'.concat(Object(Ol.a)(h, r)))
              },
              [c, r, h, l],
            )
          return u.a.createElement(
            rl.a,
            { style: Yl.buttons },
            r && F
              ? u.a.createElement(
                  Hl.a,
                  { link: P ? '/i/flow/setup_profile' : '/settings/profile', style: Yl.lastButton, type: w },
                  P ? Gl : Wl,
                )
              : null,
            E && u.a.createElement(Vl, { buttonStyle: Yl.button, promotedContent: i, user: o }),
            !F &&
              K &&
              u.a.createElement(Hl.a, {
                accessibilityLabel: zl,
                hoverLabel: { label: zl },
                icon: u.a.createElement(xl.a, null),
                onPress: T,
                style: Yl.button,
                testID: Nl.a.sendDMFromProfile,
                type: w,
              }),
            !F &&
              U &&
              u.a.createElement(Rl.a, {
                allowPromptForPush: !0,
                isFollowing: !!_,
                style: Yl.button,
                userId: o.rest_id,
              }),
            !F &&
              !v &&
              !S &&
              u.a.createElement(
                Bl.a,
                { onOffscreenChange: t },
                u.a.createElement(C, { promotedContent: i, style: Yl.lastButton, user: o }),
              ),
          )
        },
        Zl = a('tOzk'),
        Xl = a('YeIG'),
        $l = a('Je1/'),
        ea = a('WWyu'),
        la = a('YUdS'),
        aa = a('EjKN'),
        na = ue.a.a1ea2f12,
        ra = ue.a.g8191e77,
        ta = function (e) {
          var l = e.day,
            a = e.month
          if (l && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && l === n.getDate()
          }
        },
        ia = void 0 !== z ? z : (z = a('BdHD')),
        sa = function (e) {
          var l,
            a = e.isOwnProfile,
            n = e.user,
            r = null === (l = L()(ia, n).legacy_extended_profile) || void 0 === l ? void 0 : l.birthdate,
            t = u.a.useRef(),
            i = u.a.useCallback(function () {
              t.current && t.current.launch()
            }, [])
          return !r ||
            Object(Xl.a)(r) ||
            (r.visibility && 'Self' === r.visibility && r.year_visibility && 'Self' === r.year_visibility)
            ? null
            : ta(r)
            ? u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement($l.a, { Icon: la.a, onPress: i }, a ? na : ra),
                u.a.createElement(Zl.a, {
                  setRef: function (e) {
                    t.current = e
                  },
                }),
              )
            : u.a.createElement($l.a, { Icon: aa.a }, u.a.createElement(ea.a, { birthdate: r, withBornPrefixText: !0 }))
        },
        ua = a('uLiA'),
        oa = a('EJJl'),
        ca = void 0 !== Y ? Y : (Y = a('GQYZ')),
        da = Pe.a.create(function (e) {
          return { description: { display: 'block', marginBottom: e.spaces.space12 } }
        }),
        ga = function (e) {
          var l = e.isTranslatable,
            a = e.user,
            n = L()(ca, a),
            r = n.legacy
          return r.description
            ? u.a.createElement(
                rl.a,
                { style: da.description },
                u.a.createElement(oa.a, {
                  description: r.description || '',
                  disableTranslation: !l,
                  entities: nl(r.entities),
                  testID: ua.a.userDescription,
                  userId: n.rest_id,
                  withheldDescription: r.withheld_description || void 0,
                  withheldEntities: nl(r.withheld_entities),
                }),
              )
            : null
        },
        ma = void 0 !== J ? J : (J = a('SXQl')),
        ya = function (e) {
          var l = e.user,
            a = L()(ma, l)
          return u.a.createElement(ga, { isTranslatable: a.is_profile_translatable, user: a })
        },
        fa = a('LhSm'),
        pa = a('KrGU'),
        ka = a('I/9y'),
        _a = void 0 !== Z ? Z : (Z = a('nmzZ')),
        ba = Pe.a.create(function (e) {
          return {
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
          }
        }),
        ha = function (e) {
          var l,
            a,
            n,
            r = e.isOwnProfile,
            t = e.user,
            i = L()(_a, t),
            s = i.legacy,
            o =
              null === (l = s.entities) ||
              void 0 === l ||
              null === (a = l.url) ||
              void 0 === a ||
              null === (n = a.urls) ||
              void 0 === n
                ? void 0
                : n[0]
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              u.a.Suspense,
              { fallback: u.a.createElement(ga, { user: i }) },
              u.a.createElement(ya, { user: i }),
            ),
            u.a.createElement(
              rl.a,
              { style: ba.details },
              u.a.createElement(
                Ke.b,
                { style: ba.detailsText, testID: ua.a.profileHeaderItems },
                s.location
                  ? u.a.createElement($l.a, { Icon: pa.a }, u.a.createElement(Ke.b, null, i.legacy.location))
                  : null,
                o && o.url
                  ? u.a.createElement(
                      $l.a,
                      { Icon: ka.a, link: { pathname: o.url, external: !0 } },
                      o.display_url || o.url,
                    )
                  : null,
                u.a.createElement(
                  u.a.Suspense,
                  { fallback: null },
                  u.a.createElement(sa, { isOwnProfile: r, user: i }),
                ),
                i.legacy.created_at ? u.a.createElement(fa.a, { joinDate: i.legacy.created_at }) : null,
              ),
            ),
          )
        },
        Fa = a('W27K'),
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
        Ua = a('8Usl'),
        Pa = a('eb3s'),
        La = a('P2xQ'),
        Ta = ue.a.cef4e8cf,
        Ca = ue.a.ec294e62,
        Da = ue.a.df422dfe,
        Ia = wa(function (e) {
          var l = e.addToast,
            n = e.createLocalApiErrorHandler,
            r = e.unmute,
            t = e.user,
            s = L()(void 0 !== X ? X : (X = a('gNV4')), t),
            o = u.a.useState(!1),
            c = i()(o, 2),
            d = c[0],
            g = c[1],
            m = s.legacy.screen_name
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              Ke.b,
              { color: 'gray700', style: Aa.mute },
              Da,
              ' ',
              u.a.createElement(
                Ke.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    g(!0)
                  },
                  style: Aa.unmuteButton,
                  testID: Ua.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                La.g,
              ),
            ),
            d
              ? u.a.createElement(Pa.a, {
                  confirmButtonLabel: La.g,
                  headline: Ta({ screenName: m }),
                  onCancel: function () {
                    g(!1)
                  },
                  onConfirm: function () {
                    g(!1),
                      r(s.rest_id).then(function () {
                        return l({ text: Object(La.d)(m || void 0) })
                      }, n({ showToast: !0 }))
                  },
                  text: Ca,
                })
              : null,
          )
        }),
        Aa = Pe.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        Oa = a('ir4X'),
        Ra = function (e) {
          var l = e.label,
            n = L()(void 0 !== $ ? $ : ($ = a('jUuT')), l)
          return n.badge
            ? u.a.createElement(Oa.a, { label: { badge: n.badge, description: n.description, url: n.url || void 0 } })
            : null
        },
        xa = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = L()(void 0 !== ee ? ee : (ee = a('7COa')), r),
            i = t.affiliates_highlighted_label,
            s = t.legacy,
            o = !(!s.name || !s.screen_name || (n && !l)),
            c = o ? s.name || '' : '@'.concat(s.screen_name || '')
          return u.a.createElement(
            rl.a,
            { style: Fl.a.names },
            u.a.createElement(ve.a, {
              badgeContext: 'account',
              isProtected: n ? void 0 : s.protected,
              isVerified: n ? void 0 : s.verified,
              name: c,
              nameSize: 'headline1',
              screenName: o ? s.screen_name || '' : void 0,
              translatorType: n ? void 0 : s.translator_type || void 0,
              weight: 'heavy',
              withFollowsYou: s.followed_by && !n,
              withNameWrap: !0,
              withStackedLayout: !0,
            }),
            i && i.label ? u.a.createElement(Ra, { label: i.label }) : null,
          )
        },
        Ba = a('z+ta'),
        Na = a('wCd/'),
        Ha = function (e) {
          var l = e.isOwnProfile,
            n = (e.loggedInUserId, e.user),
            r = L()(void 0 !== le ? le : (le = a('lFTA')), n),
            t = r.legacy,
            i = t.followers_count,
            s = t.friends_count,
            o = t.screen_name
          return u.a.createElement(Be.a, null, function (e) {
            return u.a.createElement(Na.a, {
              followersCount: i,
              friendsCount: s,
              onPress: e(),
              screenName: o || '',
              withLink: _({ isOwnProfile: l, user: r }),
            })
          })
        },
        Ma = Pe.a.create(function (e) {
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
        Qa = function (e) {
          var l,
            n,
            r,
            t,
            s,
            o,
            c,
            d,
            g,
            m,
            y = e.history,
            f = e.isOwnProfile,
            p = e.loggedInUserId,
            k = e.onFollowButtonOffscreen,
            _ = e.promotedContent,
            b = e.user,
            h = L()(void 0 !== ae ? ae : (ae = a('aOg7')), b),
            F = u.a.useState(!1),
            v = i()(F, 2),
            S = v[0],
            K = v[1],
            E = !(null === (l = h.legacy) || void 0 === l || !l.withheld_scope),
            w =
              !f &&
              ((null === (n = h.legacy) || void 0 === n ? void 0 : n.blocking) ||
                (null === (r = h.legacy) || void 0 === r ? void 0 : r.blocked_by) ||
                E),
            U = !f && ((null === (t = h.legacy) || void 0 === t ? void 0 : t.blocked_by) || E),
            P =
              !p ||
              f ||
              (null === (s = h.legacy) || void 0 === s ? void 0 : s.blocking) ||
              (null === (o = h.legacy) || void 0 === o ? void 0 : o.blocked_by) ||
              E ||
              ((null === (c = h.legacy) || void 0 === c ? void 0 : c.protected) &&
                !(null !== (d = h.legacy) && void 0 !== d && d.following)),
            T = null === (g = h.legacy) || void 0 === g ? void 0 : g.following,
            C = u.a.useRef(T)
          u.a.useEffect(
            function () {
              T && !C.current && K(!0), (C.current = T)
            },
            [T],
          )
          var D = u.a.useCallback(function () {
            K(!1)
          }, [])
          return u.a.createElement(
            rl.a,
            null,
            u.a.createElement(Al, { isOwnProfile: f, isWithheld: E, user: h }),
            u.a.createElement(
              rl.a,
              { style: [Fl.a.content, Ma.content, w && Fl.a.withheld] },
              u.a.createElement(
                rl.a,
                { style: Ma.avatarAndButtons },
                u.a.createElement(wl, { isOwnProfile: f, isWithheld: E, user: h }),
                u.a.createElement(Jl, {
                  history: y,
                  isWithheld: E,
                  loggedInUserId: p,
                  onFollowButtonOffscreen: k,
                  promotedContent: _,
                  user: h,
                }),
              ),
              u.a.createElement(xa, { isOwnProfile: f, isWithheld: E, user: h }),
              w ? null : u.a.createElement(ha, { isOwnProfile: f, user: h }),
              U ? null : u.a.createElement(Ha, { isOwnProfile: f, loggedInUserId: p, user: h }),
              P
                ? null
                : u.a.createElement(
                    rl.a,
                    { style: Ma.marginTopXSmall },
                    u.a.createElement(Fa.a, {
                      userId: h.rest_id,
                      userScreenName: (null === (m = h.legacy) || void 0 === m ? void 0 : m.screen_name) || '',
                    }),
                  ),
              h.legacy.muting ? u.a.createElement(Ia, { user: h }) : null,
            ),
            S ? u.a.createElement(Ba.a, { onRemoveClusterFollow: D, userId: h.rest_id }) : null,
          )
        },
        ja = function (e) {
          var l = e.avatarAccessibilityLabel
          return u.a.createElement(Sl.a, null, function (e) {
            e.windowWidth
            return u.a.createElement(
              rl.a,
              { accessibilityState: { hidden: !0 }, style: Fl.a.avatar },
              u.a.createElement(Kl.a, { accessibilityLabel: l, size: 'custom' }),
            )
          })
        },
        qa = function (e) {
          var l,
            n = e.avatarAccessibilityLabel,
            r = e.fullUser,
            t = e.restrictedUser,
            i = e.shouldDisplayUserActionSheet,
            s = L()(void 0 !== ne ? ne : (ne = a('kdCF')), r),
            o = (s && s.legacy) || t
          return (
            o.name && o.screen_name ? (l = o.name) : o.screen_name && (l = '@'.concat(o.screen_name)),
            u.a.createElement(
              rl.a,
              null,
              u.a.createElement(
                rl.a,
                { style: Fl.a.banner },
                u.a.createElement(Cl.a, { ratio: Pe.a.theme.aspectRatios.profileBanner }),
              ),
              u.a.createElement(
                rl.a,
                { style: [Fl.a.content, Fl.a.withheld] },
                u.a.createElement(
                  rl.a,
                  { style: Fl.a.avatarAndButton },
                  u.a.createElement(ja, { avatarAccessibilityLabel: n }),
                  i && s && u.a.createElement(Vl, { buttonStyle: Fl.a.menuSheetButton, user: s }),
                ),
                u.a.createElement(
                  rl.a,
                  { style: Fl.a.names },
                  u.a.createElement(ve.a, {
                    name: l,
                    nameSize: 'headline1',
                    screenName: o.name && o.screen_name ? o.screen_name : void 0,
                    withStackedLayout: !0,
                  }),
                ),
              ),
            )
          )
        },
        Va = ue.a.h1658541,
        Wa = ue.a.b5447710,
        Ga = function (e) {
          var l = e.history,
            n = e.isNotFound,
            r = e.isOwnProfile,
            t = e.isSuspended,
            i = e.location,
            s = e.loggedInUserId,
            o = e.onFollowButtonOffscreen,
            c = e.promotedContent,
            d = e.screenName,
            g = e.shouldShowProfileInterstitial,
            m = e.user,
            y = L()(void 0 !== re ? re : (re = a('Ge0p')), m)
          if (!r && (t || n || g)) {
            var f,
              p = (null == y || null === (f = y.legacy) || void 0 === f ? void 0 : f.name) || void 0,
              k = { name: p, screen_name: d || '' },
              _ = n ? Wa : t ? Va : p
            return u.a.createElement(qa, {
              avatarAccessibilityLabel: _,
              fullUser: y,
              restrictedUser: k,
              shouldDisplayUserActionSheet: !t && !n,
            })
          }
          return y
            ? u.a.createElement(Qa, {
                history: l,
                isOwnProfile: r,
                location: i,
                loggedInUserId: s,
                onFollowButtonOffscreen: o,
                promotedContent: c,
                user: y,
              })
            : null
        },
        za = a('ipry'),
        Ya = a('mw9i'),
        Ja = a('zfvc'),
        Za = ue.a.fa98627a,
        Xa = ue.a.c6ea308b,
        $a = ue.a.ccc9153f,
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
                (i.legacy.profile_interstitial_type === za.a.SensitiveMedia ||
                  i.legacy.profile_interstitial_type === za.a.OffensiveProfileContent) &&
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
            ? u.a.createElement(
                Ja.b,
                { animateMount: !0, show: n, type: 'fade' },
                u.a.createElement(C, { promotedContent: l, user: e }),
              )
            : void 0
        },
        rn = function (e, l, a, n, r) {
          if (e) {
            var t = !!(n || a || e.legacy.blocked_by || (e.legacy.blocking && !r))
            return u.a.createElement(fe.a, {
              hideMediaModule: t,
              userId: e.rest_id,
              userScreenName: e.legacy.screen_name || void 0,
              withTopicsToFollow: _({ user: e, isOwnProfile: l }),
            })
          }
          return u.a.createElement(f.a, null)
        },
        tn = function (e) {
          var l = e.displaySensitiveMedia,
            n = e.fetchStatus,
            r = e.isNotFound,
            t = e.isRefreshing,
            s = e.isSuspended,
            o = e.onRefresh,
            c = e.onRetry,
            d = e.screenName,
            f = e.user,
            p = Object(He.f)(),
            k = Object(He.g)(),
            _ = an(k),
            S = u.a.useRef(!0),
            K = u.a.useRef(!0),
            E = u.a.useContext(y.a).loggedInUserId,
            w = u.a.useState(!1),
            U = i()(w, 2),
            P = U[0],
            T = U[1],
            C = u.a.useState(!1),
            D = i()(C, 2),
            I = D[0],
            A = D[1],
            O = u.a.useState(!1),
            R = i()(O, 2),
            x = R[0],
            B = R[1],
            N = L()(void 0 !== te ? te : (te = a('kcMG')), f),
            H = en({
              user: N,
              loggedInUserId: E,
              isSuspended: s,
              isNotFound: r,
              showBlockedTweets: P,
              displaySensitiveMedia: l,
              userProfileInterstitialDismissed: x,
            }),
            M = H.isInvalid,
            Q = H.isOwnProfile,
            j = H.isProtectedFromViewer,
            q = H.isWithheld,
            V = H.shouldShowProfileInterstitial,
            W = N && !N.legacy.blocking && !N.legacy.blocked_by && !Q && !j && !s && !r && !q && !V
          u.a.useEffect(
            function () {
              if (n === g.a.FAILED) K.current = !1
              else if (K.current && W) {
                m.d('profile', { source: 'graphql' }), (K.current = !1)
              }
            },
            [n, W],
          )
          var G = u.a.useCallback(function (e) {
              var l = e.entries
              if ((e.fetchStatus === g.a.FAILED && (S.current = !1), S.current && l.length)) {
                var a = l.some(function (e) {
                  return e.type === b.b.Tweet
                })
                if (((S.current = !1), a)) {
                  m.c('profile', { source: 'graphql' })
                }
              }
            }, []),
            z = N ? Xa({ screenName: N.legacy.screen_name, fullName: N.legacy.name }) : void 0,
            Y = Q ? '' : '@'.concat((null == N ? void 0 : N.legacy.screen_name) || d || '', ' '),
            J = u.a.useMemo(
              function () {
                return function () {
                  return { defaultText: Y }
                }
              },
              [Y],
            ),
            Z = M ? null : u.a.createElement(v.a, { getLocationState: J, history: p }),
            X = u.a.useCallback(function (e) {
              var l = e.isOffscreen
              A(l)
            }, []),
            $ = function () {
              B(!0)
            },
            ee = function () {
              T(!0)
            },
            le = u.a.useCallback(
              function () {
                return u.a.createElement(
                  u.a.Fragment,
                  null,
                  u.a.createElement(Ga, {
                    history: p,
                    isNotFound: r,
                    isOwnProfile: Q,
                    isSuspended: s,
                    location: k,
                    loggedInUserId: E,
                    onFollowButtonOffscreen: X,
                    promotedContent: _,
                    screenName: d,
                    shouldShowProfileInterstitial: V,
                    user: N,
                  }),
                  u.a.createElement(hl, {
                    isNotFound: r,
                    isOwnProfile: Q,
                    isProtectedFromViewer: j,
                    isSuspended: s,
                    onConfirmProfileInterstitial: $,
                    onEntriesRendered: G,
                    onShowBlockedTweets: ee,
                    shouldShowProfileInterstitial: V,
                    showBlockedTweets: P,
                    user: N,
                  }),
                )
              },
              [G, X, p, r, Q, j, s, k, E, _, d, V, P, N],
            ),
            ae = u.a.useCallback(
              function () {
                var e = s || r
                return u.a.createElement(
                  pe.a,
                  { isRefreshing: t, onRefresh: o },
                  u.a.createElement(
                    rl.a,
                    { style: sn.containerGrow },
                    u.a.createElement(
                      Ya.a,
                      null,
                      u.a.createElement(F.a, {
                        accessibilityLabel: $a({ screenName: d }),
                        fetchStatus: e ? g.a.LOADED : n,
                        onRequestRetry: c,
                        render: le,
                      }),
                    ),
                  ),
                )
              },
              [d, t, s, r, n, o, c, le],
            )
          return u.a.createElement(ke.a, {
            backLocation: '/',
            composeOptions: { defaultText: Y },
            documentTitle: z,
            history: p,
            primaryContent: u.a.createElement(
              h.a,
              { fab: Z },
              u.a.createElement(ye, { user: N }),
              u.a.createElement(F.a, {
                accessibilityLabel: $a({ screenName: d }),
                fetchStatus: N || M ? g.a.LOADED : n,
                onRequestRetry: c,
                render: ae,
              }),
              ln(k)
                ? u.a.createElement(oe.a, { history: p, location: k, userId: null == N ? void 0 : N.rest_id })
                : null,
            ),
            rightControl: nn(N, _, Q, I),
            sidebarContent: rn(N, Q, j, V, P),
            subtitle: N && !M && n === g.a.LOADED ? u.a.createElement(Fe, { location: k, user: N }) : void 0,
            title: N && !M ? u.a.createElement(Se, { user: N }) : Za,
          })
        },
        sn = Pe.a.create(function (e) {
          return { containerGrow: { flexGrow: 1 } }
        }),
        un = a('k49u'),
        on = a('n0Rl'),
        cn = a('UIzd'),
        dn = a.n(cn),
        gn = a('Ud88'),
        mn = a.n(gn),
        yn = void 0 !== ie ? ie : (ie = a('DRvb')),
        fn = Object(on.b)(yn, { errorConfig: { context: 'USER_PROFILE_SCREEN', options: o.a } }),
        pn = function (e) {
          var l = e.displaySensitiveMedia,
            a = (function (e) {
              var l = e.location,
                a = e.params
              return a && a.screenName
                ? a.screenName
                : l && l.query && l.query.screen_name && 'string' == typeof l.query.screen_name
                ? l.query.screen_name
                : ''
            })({ location: Object(He.g)(), params: Object(He.h)() }),
            n = u.a.useState(!1),
            r = i()(n, 2),
            t = r[0],
            s = r[1],
            o = mn()(),
            m = u.a.useMemo(
              function () {
                return { screenName: Object(c.a)(a) }
              },
              [a],
            ),
            y = function () {
              s(!0),
                dn()(o, yn, { screenName: a })
                  .toPromise()
                  .then(
                    function () {
                      return s(!1)
                    },
                    function () {
                      return s(!1)
                    },
                  )
            }
          return u.a.createElement(fn, {
            render: function (e) {
              var n = e.data,
                r = e.error,
                i = e.fetchStatus,
                s = e.retry,
                o = null == n ? void 0 : n.user,
                c = !!r && Object(un.c)(r, un.a.OtherUserSuspended),
                m = !!r && Object(un.c)(r, un.a.GenericUserNotFound),
                f = function () {
                  s()
                }
              return u.a.createElement(d.a, { userId: null == o ? void 0 : o.rest_id }, function (e) {
                var n = e.scribeNamespace
                return u.a.createElement(tn, {
                  displaySensitiveMedia: l,
                  fetchStatus: Object(g.b)(i, !!o),
                  isNotFound: m,
                  isRefreshing: t,
                  isSuspended: c,
                  onRefresh: y,
                  onRetry: f,
                  screenName: a,
                  scribeNamespace: n,
                  user: o || null,
                })
              })
            },
            variables: m,
          })
        }
      l.default = pn
    },
    yvH6: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        kind: 'InlineDataFragment',
        name: 'determineIsAllowedToViewRelay_determineIsAllowedToViewSubProfilePages_user',
        hash: 'f68541a03432b6580b3a625b1b1124b7',
      }
      l.default = n
    },
  },
])
//# sourceMappingURL=WIPED
