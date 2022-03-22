;(window.webpackJsonp = window.webpackJsonp || []).push([
  [248],
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
            id: 'WPTccfv-rlpDt98hl8vjig',
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
        d = (a('enFi'), a('jAXQ')),
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
    bGqR: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'determineIsAllowedToViewRelay_useIsAllowedToViewSubProfilePages_user',
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
        type: 'User',
        abstractKey: null,
        hash: 'eb4b04cd5440e8d3ff44d65b7f40c2a7',
      }
      l.default = n
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
      var n = {
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
              { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'withheld_scope', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
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
            args: null,
            kind: 'FragmentSpread',
            name: 'determineIsAllowedToViewRelay_useIsAllowedToViewSubProfilePages_user',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f22ed37627e13a74389e7c0084584434',
      }
      l.default = n
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
            args: null,
            kind: 'FragmentSpread',
            name: 'determineIsAllowedToViewRelay_useIsAllowedToViewSubProfilePages_user',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '17c2f74eefe1798506266a2c09f64b86',
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
          return on
        }),
        a.d(l, 'UserProfileQueryRenderer', function () {
          return cn
        }),
        a.d(l, 'UserProfileScreenContainer', function () {
          return dn
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
        b,
        h,
        F,
        v,
        S,
        K,
        E,
        w,
        U,
        P,
        L,
        T,
        C,
        D,
        I = a('ddV6'),
        A = a.n(I),
        O = a('ERkP'),
        R = a.n(O),
        x = a('GOQE'),
        B = a('rZeG'),
        N = a('txMZ'),
        H = a('kGix'),
        M = (a('lTEL'), a('7x/C'), a('kYxP'), a('5BYb'), a('ho0z'), a('jQ3i'), a('x4t0'), a('aeN7')),
        Q = a('v6aA'),
        j = a('es0u'),
        q = a('8UdT'),
        W = a('dwig'),
        V = a('v//M'),
        G = a('0+qk'),
        z = a('OROh'),
        Y = a('3XMw'),
        J = a.n(Y),
        Z = a('iFPY'),
        X = (a('1t7P'), a('jQ/y'), a('s4rk')),
        $ = a('zI2C'),
        ee = a('rJoH'),
        le = (a('enFi'), a('jAXQ')),
        ae = a.n(le),
        ne = J.a.d67658c0,
        re = function (e) {
          var l = e.user,
            r = ae()(void 0 !== n ? n : (n = a('vInD')), l),
            t = r ? 'twitter://user?screen_name='.concat(r.legacy.screen_name || '') : void 0,
            i = r ? 'https://twitter.com/'.concat(r.legacy.screen_name || '') : void 0,
            s = r ? ne({ fullName: r.legacy.name, screenName: r.legacy.screen_name }) : void 0
          return R.a.createElement(
            R.a.Fragment,
            null,
            R.a.createElement(ee.a, {
              canonical: i,
              description: (null == r ? void 0 : r.legacy.description) || '',
              image: (null == r ? void 0 : r.legacy.profile_image_url_https) || '',
              title: s,
              type: 'profile',
            }),
            R.a.createElement($.a, { deepLink: t }),
            i ? R.a.createElement(X.a, { canonical: i }) : null,
          )
        },
        te = a('jS2K'),
        ie = a('IG4P'),
        se = a('VS6U'),
        ue = (a('vrRf'), a('2G9S'), a('Qayx')),
        oe = 'likes',
        ce = 'media',
        de = function (e) {
          var l = e.user,
            n = ae()(void 0 !== r ? r : (r = a('D0zN')), l).legacy,
            t = (n.screen_name || '').toLowerCase(),
            i = location.pathname.toLowerCase()
          return i.indexOf('/'.concat(t, '/').concat(oe)) > -1
            ? R.a.createElement(ue.a, { count: n.favourites_count, type: 'likes' })
            : i.indexOf('/'.concat(t, '/').concat(ce)) > -1
            ? R.a.createElement(ue.a, { count: n.media_count, type: 'media' })
            : R.a.createElement(ue.a, { count: n.statuses_count, type: 'tweets' })
        },
        ge = a('jV+4'),
        me = function (e) {
          var l = e.user,
            n = ae()(void 0 !== t ? t : (t = a('66Bp')), l)
          return R.a.createElement(ge.a, {
            isProtected: n.legacy.protected,
            isVerified: n.legacy.verified,
            name: n.legacy.name || void 0,
            screenName: n.legacy.screen_name || void 0,
            weight: 'heavy',
            withScreenName: !1,
          })
        },
        ye = function (e) {
          var l,
            n,
            r,
            t = e.isOwnProfile,
            s = e.user,
            u = ae()(void 0 !== i ? i : (i = a('bGqR')), s)
          if (!u) return !1
          var o = null === (l = u.legacy) || void 0 === l ? void 0 : l.blocked_by,
            c =
              (null === (n = u.legacy) || void 0 === n ? void 0 : n.protected) &&
              !(null !== (r = u.legacy) && void 0 !== r && r.following)
          return t || (!c && !o)
        },
        fe = a('t62R'),
        pe = a('tI3i'),
        ke = a.n(pe),
        _e = a('FIs5'),
        be = a('rHpw'),
        he = function (e) {
          var l = e.buttonText,
            a = e.header,
            n = e.message,
            r = e.onButtonPress
          return R.a.createElement(_e.a, {
            buttonText: l,
            buttonType: 'brandOutlined',
            header: a,
            message: n,
            onButtonPress: r,
            style: Fe.root,
          })
        },
        Fe = be.a.create(function (e) {
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
        ve = J.a.ica87fde,
        Se = function (e) {
          var l = ae()(void 0 !== s ? s : (s = a('sLDr')), e.user).legacy.screen_name
          ke()('string' == typeof l, 'screenName must be defined')
          var n = R.a.createElement(
            J.a.I18NFormatMessage,
            { $i18n: 'ccade2e6', screenName: l },
            R.a.createElement(fe.b, { link: 'https://support.twitter.com/articles/20172060' }, J.a.de078c23),
          )
          return R.a.createElement(he, { header: ve, message: n })
        },
        Ke = J.a.eeab4adf,
        Ee = J.a.e79ed125,
        we = function (e) {
          var l = e.onShowBlockedTweets,
            n = ae()(void 0 !== u ? u : (u = a('eH5D')), e.user).legacy.screen_name
          ke()('string' == typeof n, 'screenName must be a string')
          var r = Ee({ screenName: n }),
            t = R.a.createElement(
              J.a.I18NFormatMessage,
              { $i18n: 'e645092a', screenName: n },
              R.a.createElement(fe.b, { link: 'https://support.twitter.com/articles/117063' }, J.a.f6a72a2a),
            )
          return R.a.createElement(he, { buttonText: Ke, header: r, message: t, onButtonPress: l })
        },
        Ue = a('97Jx'),
        Pe = a.n(Ue),
        Le = (a('JtPf'), a('87if'), a('Y6L+')),
        Te = a('wytG'),
        Ce = a('Jkc4'),
        De = a('k/OQ'),
        Ie = a('zCf4'),
        Ae = Object(Te.a)(function () {
          return Promise.all([a.e(0), a.e(248)]).then(a.bind(null, '8KtR'))
        }),
        Oe = Object(Te.a)(function () {
          return Promise.all([a.e(0), a.e(248)]).then(a.bind(null, 'ivpD'))
        }),
        Re = Object(Te.a)(function () {
          return Promise.all([a.e(0), a.e(248)]).then(a.bind(null, 'ylAD'))
        }),
        xe = 'likes',
        Be = 'media',
        Ne = 'with_replies',
        He = J.a.a2811f96,
        Me = J.a.bab1f8b0,
        Qe = J.a.a52b03a5,
        je = J.a.add55c97,
        qe = J.a.d7b8eba9,
        We = function (e) {
          var l = e.onEntriesRendered,
            n = e.showBlockedTweets,
            r = ae()(void 0 !== o ? o : (o = a('0pBG')), e.user),
            t = Object(Ie.g)(),
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
                  key: Me,
                  label: Me,
                },
                { to: { pathname: '/'.concat(g, '/').concat(Ne), query: i }, key: Qe, label: Qe },
                { to: { pathname: '/'.concat(g, '/').concat(Be), query: i }, key: je, label: je, onClick: e() },
                { to: { pathname: '/'.concat(g, '/').concat(xe), query: i }, key: qe, label: qe, onClick: e() },
              ]
            },
            y = { displayBlocked: n, fullName: u, screenName: g, userId: d }
          return R.a.createElement(
            R.a.Fragment,
            null,
            R.a.createElement(Ce.a, null, function (e) {
              return R.a.createElement(De.a, { accessibilityLabel: He, links: m(e) })
            }),
            R.a.createElement(
              Ie.d,
              null,
              R.a.createElement(Ie.b, { exact: !0, path: '/intent/follow' }, R.a.createElement(Ae, y)),
              R.a.createElement(Ie.b, { exact: !0, path: '/intent/user' }, R.a.createElement(Ae, y)),
              R.a.createElement(
                Ie.b,
                { exact: !0, path: '/'.concat(Le.J) },
                R.a.createElement(Ae, Pe()({}, y, { onEntriesRendered: l })),
              ),
              R.a.createElement(
                Ie.b,
                { exact: !0, path: '/'.concat(Le.J, '/').concat(Ne) },
                R.a.createElement(Ae, Pe()({}, y, { withReplies: !0 })),
              ),
              R.a.createElement(Ie.b, { exact: !0, path: '/'.concat(Le.J, '/').concat(Be) }, R.a.createElement(Re, y)),
              R.a.createElement(Ie.b, { exact: !0, path: '/'.concat(Le.J, '/').concat(xe) }, R.a.createElement(Oe, y)),
            ),
          )
        },
        Ve = a('drnk'),
        Ge = a('Irs7'),
        ze = J.a.d834ab9c,
        Ye = Object(Ge.a)(
          function (e) {
            var l = e.analytics,
              n = e.onConfirmProfileInterstitial,
              r = ae()(void 0 !== c ? c : (c = a('dVIa')), e.user).legacy.profile_interstitial_type,
              t = Object(Ve.a)(r),
              i = t.header,
              s = t.message
            R.a.useEffect(
              function () {
                l.scribeAction('impression')
              },
              [l],
            )
            return R.a.createElement(he, {
              buttonText: ze,
              header: i,
              message: s,
              onButtonPress: function () {
                n(), l.scribeAction('click')
              },
            })
          },
          { section: 'profile_interstitial' },
        ),
        Je = (a('z84I'), a('M+/F'), a('Hsf0')),
        Ze = a.n(Je),
        Xe = function (e) {
          var l = Ze()(void 0 !== d ? d : (d = a('ZNc3')), e)
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
        $e = a('MWbm'),
        el = a('Q0VY'),
        ll = a('FiRh'),
        al = a('0yYu'),
        nl = J.a.gbf342a4,
        rl = function (e) {
          var l = e.onEntriesRendered,
            n = e.user,
            r = ae()(void 0 !== g ? g : (g = a('E4Mm')), n),
            t = r.legacy,
            i = t.description,
            s = t.entities,
            u = r.rest_id,
            o = void 0 === u ? '' : u
          if (!i) return null
          var c = el.a.descriptionTextParts(i, Xe(s))
          return R.a.createElement(
            $e.a,
            null,
            R.a.createElement(
              $e.a,
              { style: tl.withheldMessageRoot },
              R.a.createElement(
                fe.b,
                { align: 'center', size: 'title4', style: tl.withheldMessageHeader, weight: 'bold' },
                nl,
              ),
              R.a.createElement(
                fe.b,
                { align: 'center', color: 'gray700', dir: 'auto' },
                c.map(function (e, l) {
                  return R.a.createElement(ll.b, {
                    key: 'user_'.concat(o, '_textpart_').concat(l),
                    linkify: !0,
                    part: e,
                  })
                }),
              ),
            ),
            R.a.createElement(al.a, null),
            R.a.createElement(We, { onEntriesRendered: l, user: r }),
          )
        },
        tl = be.a.create(function (e) {
          return {
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        il = J.a.c9a1cb5d,
        sl = J.a.e7b201dd,
        ul = function () {
          return R.a.createElement(he, { header: il, message: sl })
        },
        ol = J.a.d09e12c4,
        cl = function (e) {
          var l = ae()(void 0 !== m ? m : (m = a('iN7L')), e.user).legacy.screen_name
          ke()('string' == typeof l, 'screenName must be a string')
          var n = R.a.createElement(
            J.a.I18NFormatMessage,
            { $i18n: 'c97724c2', screenName: l },
            R.a.createElement(fe.b, { link: 'https://support.twitter.com/articles/14016' }, J.a.a58c8a4e),
          )
          return R.a.createElement(he, { header: ol, message: n })
        },
        dl = J.a.g8475f82,
        gl = function () {
          var e = R.a.createElement(
            J.a.I18NFormatMessage,
            { $i18n: 'f6fa2033' },
            R.a.createElement(fe.b, { link: 'https://support.twitter.com/articles/18311' }, J.a.f3b1bdc1),
          )
          return R.a.createElement(he, { header: dl, message: e })
        },
        ml = J.a.gbf342a4,
        yl = function (e) {
          var l = ae()(void 0 !== y ? y : (y = a('vJP1')), e.user),
            n = l.legacy,
            r = n.description,
            t = n.entities,
            i = l.rest_id
          if (!r) return null
          var s = el.a.descriptionTextParts(r, Xe(t)),
            u = R.a.createElement(
              fe.b,
              { align: 'center', color: 'gray700', dir: 'auto' },
              s.map(function (e, l) {
                return R.a.createElement(ll.b, { key: 'user_'.concat(i, '_textpart_').concat(l), linkify: !0, part: e })
              }),
            )
          return R.a.createElement(he, { header: ml, message: u })
        },
        fl = function (e) {
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
            g = ae()(void 0 !== f ? f : (f = a('iIq9')), d),
            m = (null == g ? void 0 : g.legacy) || {},
            y = m.blocked_by,
            p = m.blocking,
            k = m.withheld_scope
          return t
            ? R.a.createElement(gl, null)
            : l
            ? R.a.createElement(ul, null)
            : g
            ? k && n
              ? R.a.createElement(rl, { onEntriesRendered: s, user: g })
              : k
              ? R.a.createElement(yl, { user: g })
              : o
              ? R.a.createElement(Ye, { onConfirmProfileInterstitial: i, user: g })
              : y
              ? R.a.createElement(Se, { user: g })
              : p && !c
              ? R.a.createElement(we, { onShowBlockedTweets: u, user: g })
              : r
              ? R.a.createElement(cl, { user: g })
              : R.a.createElement(We, { onEntriesRendered: s, showBlockedTweets: c, user: g })
            : null
        },
        pl = a('I/ms'),
        kl = a('TIdA'),
        _l = a('cHvH'),
        bl = a('jhWN'),
        hl = kl.a.createLayoutCache(),
        Fl = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = ae()(void 0 !== p ? p : (p = a('kVSq')), r),
            i = !l && n,
            s = i || !t.legacy.profile_image_url_https ? void 0 : t.legacy.profile_image_url_https
          return R.a.createElement(_l.a, null, function (e) {
            var l = e.windowWidth >= be.a.theme.breakpoints.medium
            return R.a.createElement(bl.a, {
              borderColor: 'cellBackground',
              borderWidth: l ? 'medium' : 'large',
              imageLayoutCache: hl,
              link: i ? void 0 : { pathname: '/'.concat(t.legacy.screen_name || '', '/photo') },
              size: 'custom',
              style: pl.a.avatar,
              uri: s || void 0,
            })
          })
        },
        vl = a('RCZO'),
        Sl = a('n4Eu'),
        Kl = a('cm6r'),
        El = a('A91F'),
        wl = a('9Xij'),
        Ul = kl.a.createLayoutCache(),
        Pl = function (e) {
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
        Ll = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = ae()(void 0 !== k ? k : (k = a('+PaE')), r),
            i = !l && n,
            s = Pl(t.legacy.profile_banner_extensions),
            u = s && Sl.a.get(s),
            o = u ? Object(vl.g)(u) : be.a.theme.colors.gray200,
            c = t.legacy.profile_banner_url
          return !i && c
            ? R.a.createElement(
                Kl.a,
                { accessibilityHidden: !0, link: '/'.concat(t.legacy.screen_name || '', '/header_photo') },
                R.a.createElement(kl.a, {
                  accessibilityLabel: '',
                  aspectMode: El.a.exact(be.a.theme.aspectRatios.profileBanner),
                  backgroundColor: o,
                  image: c,
                  layoutCache: Ul,
                }),
              )
            : R.a.createElement(
                $e.a,
                { style: pl.a.banner },
                R.a.createElement(wl.a, {
                  ratio: be.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: o },
                }),
              )
        },
        Tl = a('3nOA'),
        Cl = a('I57f'),
        Dl = a('SOvA'),
        Il = a('vYiB'),
        Al = a('Y49K'),
        Ol = a('/yvb'),
        Rl = a('ACHU'),
        xl = a('rsoE'),
        Bl = a('vMjK'),
        Nl = J.a.h63a5c3b,
        Hl = function (e) {
          var l = e.buttonStyle,
            n = e.promotedContent,
            r = e.user,
            t = ae()(void 0 !== _ ? _ : (_ = a('+uag')), r),
            i = R.a.useMemo(
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
          return R.a.createElement(Ol.a, {
            accessibilityLabel: Nl,
            hoverLabel: { label: Nl },
            icon: R.a.createElement(Rl.a, null),
            renderMenu: function (e) {
              return R.a.createElement(Bl.b, { onClose: e, promotedContent: n, user: i, view: 'profile' })
            },
            style: l,
            testID: xl.a.userActions,
            type: 'primaryOutlined',
          })
        },
        Ml = J.a.g7088266,
        Ql = J.a.gd7acb84,
        jl = J.a.b7636014,
        ql = be.a.create(function (e) {
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
        Wl = function (e) {
          var l = e.history,
            n = e.isWithheld,
            r = e.loggedInUserId,
            t = e.onFollowButtonOffscreen,
            i = e.promotedContent,
            s = e.user,
            u = ae()(void 0 !== b ? b : (b = a('hCMu')), s),
            o = Object(Ge.b)(),
            c = u.legacy,
            d = c.blocked_by,
            g = c.blocking,
            m = c.can_dm,
            y = c.default_profile_image,
            f = c.description,
            p = c.following,
            k = c.notifications,
            _ = c.profile_banner_url,
            h = u.rest_id,
            F = h === r,
            v = d,
            S = n && !F,
            K = m && r && !g && !v && !S,
            E = r && u && !F && !S,
            w = 'primaryOutlined',
            U = p && r && !g && !v && !n,
            P = y && !f && !_,
            L = R.a.useCallback(
              function () {
                o.scribe({ element: 'message', action: 'click' }), r && l.push('/messages/'.concat(Object(Tl.a)(h, r)))
              },
              [o, r, h, l],
            )
          return R.a.createElement(
            $e.a,
            { style: ql.buttons },
            r && F
              ? R.a.createElement(
                  Ol.a,
                  { link: P ? '/i/flow/setup_profile' : '/settings/profile', style: ql.lastButton, type: w },
                  P ? Ql : Ml,
                )
              : null,
            E && R.a.createElement(Hl, { buttonStyle: ql.button, promotedContent: i, user: u }),
            !F &&
              K &&
              R.a.createElement(Ol.a, {
                accessibilityLabel: jl,
                hoverLabel: { label: jl },
                icon: R.a.createElement(Dl.a, null),
                onPress: L,
                style: ql.button,
                testID: Al.a.sendDMFromProfile,
                type: w,
              }),
            !F &&
              U &&
              R.a.createElement(Cl.a, {
                allowPromptForPush: !0,
                isFollowing: !!k,
                style: ql.button,
                userId: u.rest_id,
              }),
            !F &&
              !v &&
              !S &&
              R.a.createElement(
                Il.a,
                { onOffscreenChange: t },
                R.a.createElement(z.a, { promotedContent: i, style: ql.lastButton, user: u }),
              ),
          )
        },
        Vl = a('tOzk'),
        Gl = a('YeIG'),
        zl = a('Je1/'),
        Yl = a('WWyu'),
        Jl = a('YUdS'),
        Zl = a('EjKN'),
        Xl = J.a.a1ea2f12,
        $l = J.a.g8191e77,
        ea = function (e) {
          var l = e.day,
            a = e.month
          if (l && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && l === n.getDate()
          }
        },
        la = void 0 !== h ? h : (h = a('BdHD')),
        aa = function (e) {
          var l,
            a = e.isOwnProfile,
            n = e.user,
            r = null === (l = ae()(la, n).legacy_extended_profile) || void 0 === l ? void 0 : l.birthdate,
            t = R.a.useRef(),
            i = R.a.useCallback(function () {
              t.current && t.current.launch()
            }, [])
          return !r ||
            Object(Gl.a)(r) ||
            (r.visibility && 'Self' === r.visibility && r.year_visibility && 'Self' === r.year_visibility)
            ? null
            : ea(r)
            ? R.a.createElement(
                R.a.Fragment,
                null,
                R.a.createElement(zl.a, { Icon: Jl.a, onPress: i }, a ? Xl : $l),
                R.a.createElement(Vl.a, {
                  setRef: function (e) {
                    t.current = e
                  },
                }),
              )
            : R.a.createElement(zl.a, { Icon: Zl.a }, R.a.createElement(Yl.a, { birthdate: r, withBornPrefixText: !0 }))
        },
        na = a('uLiA'),
        ra = a('EJJl'),
        ta = void 0 !== F ? F : (F = a('GQYZ')),
        ia = be.a.create(function (e) {
          return { description: { display: 'block', marginBottom: e.spaces.space12 } }
        }),
        sa = function (e) {
          var l = e.isTranslatable,
            a = e.user,
            n = ae()(ta, a),
            r = n.legacy
          return r.description
            ? R.a.createElement(
                $e.a,
                { style: ia.description },
                R.a.createElement(ra.a, {
                  description: r.description || '',
                  disableTranslation: !l,
                  entities: Xe(r.entities),
                  testID: na.a.userDescription,
                  userId: n.rest_id,
                  withheldDescription: r.withheld_description || void 0,
                  withheldEntities: Xe(r.withheld_entities),
                }),
              )
            : null
        },
        ua = void 0 !== v ? v : (v = a('SXQl')),
        oa = function (e) {
          var l = e.user,
            a = ae()(ua, l)
          return R.a.createElement(sa, { isTranslatable: a.is_profile_translatable, user: a })
        },
        ca = a('LhSm'),
        da = a('KrGU'),
        ga = a('I/9y'),
        ma = void 0 !== S ? S : (S = a('nmzZ')),
        ya = be.a.create(function (e) {
          return {
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
          }
        }),
        fa = function (e) {
          var l,
            a,
            n,
            r = e.isOwnProfile,
            t = e.user,
            i = ae()(ma, t),
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
          return R.a.createElement(
            R.a.Fragment,
            null,
            R.a.createElement(
              R.a.Suspense,
              { fallback: R.a.createElement(sa, { user: i }) },
              R.a.createElement(oa, { user: i }),
            ),
            R.a.createElement(
              $e.a,
              { style: ya.details },
              R.a.createElement(
                fe.b,
                { style: ya.detailsText, testID: na.a.profileHeaderItems },
                s.location
                  ? R.a.createElement(zl.a, { Icon: da.a }, R.a.createElement(fe.b, null, i.legacy.location))
                  : null,
                u && u.url
                  ? R.a.createElement(
                      zl.a,
                      { Icon: ga.a, link: { pathname: u.url, external: !0 } },
                      u.display_url || u.url,
                    )
                  : null,
                R.a.createElement(
                  R.a.Suspense,
                  { fallback: null },
                  R.a.createElement(aa, { isOwnProfile: r, user: i }),
                ),
                i.legacy.created_at ? R.a.createElement(ca.a, { joinDate: i.legacy.created_at }) : null,
              ),
            ),
          )
        },
        pa = a('W27K'),
        ka = a('1YZw'),
        _a = a('G6rE'),
        ba = a('rxPX'),
        ha = a('0KEI'),
        Fa = Object(ba.a)().propsFromActions(function () {
          return {
            addToast: ka.b,
            createLocalApiErrorHandler: Object(ha.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: _a.e.unmute,
          }
        }),
        va = a('8Usl'),
        Sa = a('eb3s'),
        Ka = a('P2xQ'),
        Ea = J.a.cef4e8cf,
        wa = J.a.ec294e62,
        Ua = J.a.df422dfe,
        Pa = Fa(function (e) {
          var l = e.addToast,
            n = e.createLocalApiErrorHandler,
            r = e.unmute,
            t = e.user,
            i = ae()(void 0 !== K ? K : (K = a('gNV4')), t),
            s = R.a.useState(!1),
            u = A()(s, 2),
            o = u[0],
            c = u[1],
            d = i.legacy.screen_name
          return R.a.createElement(
            R.a.Fragment,
            null,
            R.a.createElement(
              fe.b,
              { color: 'gray700', style: La.mute },
              Ua,
              ' ',
              R.a.createElement(
                fe.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: La.unmuteButton,
                  testID: va.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                Ka.g,
              ),
            ),
            o
              ? R.a.createElement(Sa.a, {
                  confirmButtonLabel: Ka.g,
                  headline: Ea({ screenName: d }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      r(i.rest_id).then(function () {
                        return l({ text: Object(Ka.d)(d || void 0) })
                      }, n({ showToast: !0 }))
                  },
                  text: wa,
                })
              : null,
          )
        }),
        La = be.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        Ta = a('ir4X'),
        Ca = function (e) {
          var l = e.label,
            n = ae()(void 0 !== E ? E : (E = a('jUuT')), l)
          return n.badge
            ? R.a.createElement(Ta.a, { label: { badge: n.badge, description: n.description, url: n.url || void 0 } })
            : null
        },
        Da = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = ae()(void 0 !== w ? w : (w = a('7COa')), r),
            i = t.affiliates_highlighted_label,
            s = t.legacy,
            u = !(!s.name || !s.screen_name || (n && !l)),
            o = u ? s.name || '' : '@'.concat(s.screen_name || '')
          return R.a.createElement(
            $e.a,
            { style: pl.a.names },
            R.a.createElement(ge.a, {
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
            i && i.label ? R.a.createElement(Ca, { label: i.label }) : null,
          )
        },
        Ia = a('z+ta'),
        Aa = a('wCd/'),
        Oa = function (e) {
          var l = e.isOwnProfile,
            n = (e.loggedInUserId, e.user),
            r = ae()(void 0 !== U ? U : (U = a('lFTA')), n),
            t = r.legacy,
            i = t.followers_count,
            s = t.friends_count,
            u = t.screen_name,
            o = ye({ isOwnProfile: l, user: r })
          return R.a.createElement(Ce.a, null, function (e) {
            return R.a.createElement(Aa.a, {
              followersCount: i,
              friendsCount: s,
              onPress: e(),
              screenName: u || '',
              withLink: o,
            })
          })
        },
        Ra = be.a.create(function (e) {
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
        xa = function (e) {
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
            _ = ae()(void 0 !== P ? P : (P = a('aOg7')), k),
            b = R.a.useState(!1),
            h = A()(b, 2),
            F = h[0],
            v = h[1],
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
            U = null === (c = _.legacy) || void 0 === c ? void 0 : c.following,
            L = R.a.useRef(U)
          R.a.useEffect(
            function () {
              U && !L.current && v(!0), (L.current = U)
            },
            [U],
          )
          var T = R.a.useCallback(function () {
            v(!1)
          }, [])
          return R.a.createElement(
            $e.a,
            null,
            R.a.createElement(Ll, { isOwnProfile: m, isWithheld: S, user: _ }),
            R.a.createElement(
              $e.a,
              { style: [pl.a.content, Ra.content, K && pl.a.withheld] },
              R.a.createElement(
                $e.a,
                { style: Ra.avatarAndButtons },
                R.a.createElement(Fl, { isOwnProfile: m, isWithheld: S, user: _ }),
                R.a.createElement(Wl, {
                  history: g,
                  isWithheld: S,
                  loggedInUserId: y,
                  onFollowButtonOffscreen: f,
                  promotedContent: p,
                  user: _,
                }),
              ),
              R.a.createElement(Da, { isOwnProfile: m, isWithheld: S, user: _ }),
              K ? null : R.a.createElement(fa, { isOwnProfile: m, user: _ }),
              E ? null : R.a.createElement(Oa, { isOwnProfile: m, loggedInUserId: y, user: _ }),
              w
                ? null
                : R.a.createElement(
                    $e.a,
                    { style: Ra.marginTopXSmall },
                    R.a.createElement(pa.a, {
                      userId: _.rest_id,
                      userScreenName: (null === (d = _.legacy) || void 0 === d ? void 0 : d.screen_name) || '',
                    }),
                  ),
              _.legacy.muting ? R.a.createElement(Pa, { user: _ }) : null,
            ),
            F ? R.a.createElement(Ia.a, { onRemoveClusterFollow: T, userId: _.rest_id }) : null,
          )
        },
        Ba = function (e) {
          var l = e.avatarAccessibilityLabel
          return R.a.createElement(_l.a, null, function (e) {
            e.windowWidth
            return R.a.createElement(
              $e.a,
              { accessibilityState: { hidden: !0 }, style: pl.a.avatar },
              R.a.createElement(bl.a, { accessibilityLabel: l, size: 'custom' }),
            )
          })
        },
        Na = function (e) {
          var l,
            n = e.avatarAccessibilityLabel,
            r = e.fullUser,
            t = e.restrictedUser,
            i = e.shouldDisplayUserActionSheet,
            s = ae()(void 0 !== L ? L : (L = a('kdCF')), r),
            u = (s && s.legacy) || t
          return (
            u.name && u.screen_name ? (l = u.name) : u.screen_name && (l = '@'.concat(u.screen_name)),
            R.a.createElement(
              $e.a,
              null,
              R.a.createElement(
                $e.a,
                { style: pl.a.banner },
                R.a.createElement(wl.a, { ratio: be.a.theme.aspectRatios.profileBanner }),
              ),
              R.a.createElement(
                $e.a,
                { style: [pl.a.content, pl.a.withheld] },
                R.a.createElement(
                  $e.a,
                  { style: pl.a.avatarAndButton },
                  R.a.createElement(Ba, { avatarAccessibilityLabel: n }),
                  i && s && R.a.createElement(Hl, { buttonStyle: pl.a.menuSheetButton, user: s }),
                ),
                R.a.createElement(
                  $e.a,
                  { style: pl.a.names },
                  R.a.createElement(ge.a, {
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
        Ha = J.a.h1658541,
        Ma = J.a.b5447710,
        Qa = function (e) {
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
            m = ae()(void 0 !== T ? T : (T = a('Ge0p')), g)
          if (!r && (t || n || d)) {
            var y,
              f = (null == m || null === (y = m.legacy) || void 0 === y ? void 0 : y.name) || void 0,
              p = { name: f, screen_name: c || '' },
              k = n ? Ma : t ? Ha : f
            return R.a.createElement(Na, {
              avatarAccessibilityLabel: k,
              fullUser: m,
              restrictedUser: p,
              shouldDisplayUserActionSheet: !t && !n,
            })
          }
          return m
            ? R.a.createElement(xa, {
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
        ja = a('ipry'),
        qa = a('mw9i'),
        Wa = a('zfvc'),
        Va = J.a.fa98627a,
        Ga = J.a.c6ea308b,
        za = J.a.ccc9153f,
        Ya = function (e) {
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
                (i.legacy.profile_interstitial_type === ja.a.SensitiveMedia ||
                  i.legacy.profile_interstitial_type === ja.a.OffensiveProfileContent) &&
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
        Ja = function (e) {
          return e.pathname.includes('/intent/')
        },
        Za = function (e) {
          return ((e && e.state) || {}).promotedTweetState
        },
        Xa = function (e, l, a, n) {
          return e && !a
            ? R.a.createElement(
                Wa.b,
                { animateMount: !0, show: n, type: 'fade' },
                R.a.createElement(z.a, { promotedContent: l, user: e }),
              )
            : void 0
        },
        $a = function (e, l, a, n, r) {
          if (e) {
            var t = !!(n || a || e.legacy.blocked_by || (e.legacy.blocking && !r))
            return R.a.createElement(te.a, {
              hideMediaModule: t,
              userId: e.rest_id,
              userScreenName: e.legacy.screen_name || void 0,
              withTopicsToFollow: l,
            })
          }
          return R.a.createElement(j.a, null)
        },
        en = function (e) {
          var l = e.displaySensitiveMedia,
            n = e.fetchStatus,
            r = e.isNotFound,
            t = e.isRefreshing,
            i = e.isSuspended,
            s = e.onRefresh,
            u = e.onRetry,
            o = e.screenName,
            c = e.user,
            d = Object(Ie.f)(),
            g = Object(Ie.g)(),
            m = Za(g),
            y = R.a.useRef(!0),
            f = R.a.useRef(!0),
            p = R.a.useContext(Q.a).loggedInUserId,
            k = R.a.useState(!1),
            _ = A()(k, 2),
            b = _[0],
            h = _[1],
            F = R.a.useState(!1),
            v = A()(F, 2),
            S = v[0],
            K = v[1],
            E = R.a.useState(!1),
            w = A()(E, 2),
            U = w[0],
            P = w[1],
            L = ae()(void 0 !== C ? C : (C = a('kcMG')), c),
            T = Ya({
              user: L,
              loggedInUserId: p,
              isSuspended: i,
              isNotFound: r,
              showBlockedTweets: b,
              displaySensitiveMedia: l,
              userProfileInterstitialDismissed: U,
            }),
            D = T.isInvalid,
            I = T.isOwnProfile,
            O = T.isProtectedFromViewer,
            x = T.isWithheld,
            B = T.shouldShowProfileInterstitial,
            N = ye({ isOwnProfile: I, user: L }),
            j = L && !L.legacy.blocking && !L.legacy.blocked_by && !I && !O && !i && !r && !x && !B
          R.a.useEffect(
            function () {
              if (n === H.a.FAILED) f.current = !1
              else if (f.current && j) {
                M.d('profile', { source: 'graphql' }), (f.current = !1)
              }
            },
            [n, j],
          )
          var z = R.a.useCallback(function (e) {
              var l = e.entries
              if ((e.fetchStatus === H.a.FAILED && (y.current = !1), y.current && l.length)) {
                var a = l.some(function (e) {
                  return e.type === q.b.Tweet
                })
                if (((y.current = !1), a)) {
                  M.c('profile', { source: 'graphql' })
                }
              }
            }, []),
            Y = L ? Ga({ screenName: L.legacy.screen_name, fullName: L.legacy.name }) : void 0,
            J = I ? '' : '@'.concat((null == L ? void 0 : L.legacy.screen_name) || o || '', ' '),
            X = R.a.useMemo(
              function () {
                return function () {
                  return { defaultText: J }
                }
              },
              [J],
            ),
            $ = D ? null : R.a.createElement(G.a, { getLocationState: X, history: d }),
            ee = R.a.useCallback(function (e) {
              var l = e.isOffscreen
              K(l)
            }, []),
            le = function () {
              P(!0)
            },
            ne = function () {
              h(!0)
            },
            te = R.a.useCallback(
              function () {
                return R.a.createElement(
                  R.a.Fragment,
                  null,
                  R.a.createElement(Qa, {
                    history: d,
                    isNotFound: r,
                    isOwnProfile: I,
                    isSuspended: i,
                    location: g,
                    loggedInUserId: p,
                    onFollowButtonOffscreen: ee,
                    promotedContent: m,
                    screenName: o,
                    shouldShowProfileInterstitial: B,
                    user: L,
                  }),
                  R.a.createElement(fl, {
                    isNotFound: r,
                    isOwnProfile: I,
                    isProtectedFromViewer: O,
                    isSuspended: i,
                    onConfirmProfileInterstitial: le,
                    onEntriesRendered: z,
                    onShowBlockedTweets: ne,
                    shouldShowProfileInterstitial: B,
                    showBlockedTweets: b,
                    user: L,
                  }),
                )
              },
              [z, ee, d, r, I, O, i, g, p, m, o, B, b, L],
            ),
            ue = R.a.useCallback(
              function () {
                var e = i || r
                return R.a.createElement(
                  ie.a,
                  { isRefreshing: t, onRefresh: s },
                  R.a.createElement(
                    $e.a,
                    { style: ln.containerGrow },
                    R.a.createElement(
                      qa.a,
                      null,
                      R.a.createElement(V.a, {
                        accessibilityLabel: za({ screenName: o }),
                        fetchStatus: e ? H.a.LOADED : n,
                        onRequestRetry: u,
                        render: te,
                      }),
                    ),
                  ),
                )
              },
              [o, t, i, r, n, s, u, te],
            )
          return R.a.createElement(se.a, {
            backLocation: '/',
            composeOptions: { defaultText: J },
            documentTitle: Y,
            history: d,
            primaryContent: R.a.createElement(
              W.a,
              { fab: $ },
              R.a.createElement(re, { user: L }),
              R.a.createElement(V.a, {
                accessibilityLabel: za({ screenName: o }),
                fetchStatus: L || D ? H.a.LOADED : n,
                onRequestRetry: u,
                render: ue,
              }),
              Ja(g)
                ? R.a.createElement(Z.a, { history: d, location: g, userId: null == L ? void 0 : L.rest_id })
                : null,
            ),
            rightControl: Xa(L, m, I, S),
            sidebarContent: $a(L, N, O, B, b),
            subtitle: L && !D && n === H.a.LOADED ? R.a.createElement(de, { location: g, user: L }) : void 0,
            title: L && !D ? R.a.createElement(me, { user: L }) : Va,
          })
        },
        ln = be.a.create(function (e) {
          return { containerGrow: { flexGrow: 1 } }
        }),
        an = a('k49u'),
        nn = a('n0Rl'),
        rn = a('UIzd'),
        tn = a.n(rn),
        sn = a('Ud88'),
        un = a.n(sn),
        on = void 0 !== D ? D : (D = a('DRvb')),
        cn = Object(nn.b)(on, { errorConfig: { context: 'USER_PROFILE_SCREEN', options: x.a } }),
        dn = function (e) {
          var l = e.displaySensitiveMedia,
            a = (function (e) {
              var l = e.location,
                a = e.params
              return a && a.screenName
                ? a.screenName
                : l && l.query && l.query.screen_name && 'string' == typeof l.query.screen_name
                ? l.query.screen_name
                : ''
            })({ location: Object(Ie.g)(), params: Object(Ie.h)() }),
            n = R.a.useState(!1),
            r = A()(n, 2),
            t = r[0],
            i = r[1],
            s = un()(),
            u = R.a.useMemo(
              function () {
                return { screenName: Object(B.a)(a) }
              },
              [a],
            ),
            o = function () {
              i(!0),
                tn()(s, on, { screenName: a })
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
          return R.a.createElement(cn, {
            render: function (e) {
              var n = e.data,
                r = e.error,
                i = e.fetchStatus,
                s = e.retry,
                u = null == n ? void 0 : n.user,
                c = !!r && Object(an.c)(r, an.a.OtherUserSuspended),
                d = !!r && Object(an.c)(r, an.a.GenericUserNotFound),
                g = function () {
                  s()
                }
              return R.a.createElement(N.a, { userId: null == u ? void 0 : u.rest_id }, function (e) {
                var n = e.scribeNamespace
                return R.a.createElement(en, {
                  displaySensitiveMedia: l,
                  fetchStatus: Object(H.b)(i, !!u),
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
      l.default = dn
    },
  },
])
//# sourceMappingURL=WIPED
