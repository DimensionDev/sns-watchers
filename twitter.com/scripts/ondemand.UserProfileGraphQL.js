;(window.webpackJsonp = window.webpackJsonp || []).push([
  [239],
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
          var b = c(d, k)
          u = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && d === l.environment ? y.ifEmpty(b) : (l.environment, b),
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
            id: 'm_O8T_EteIeNmdNbH_YO2g',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'follow_request_sent', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
          { alias: null, args: null, kind: 'ScalarField', name: 'smart_blocking', storageKey: null },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'b923252e0f5ed7b06e14b064fba80df8',
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
          b = k[0],
          _ = k[1],
          h = m(function () {
            return a
          }),
          F = h[0],
          S = h[1]
        a !== F && (y.current.add(a), S(a), _(a))
        var v = c(
            function () {
              o.current && (y.current.add(f), _(f))
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
                y.current.add(t), _(t)
              }
            },
            [i, e, _, o],
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
                    'NullQueryReference' !== b.kind &&
                    K(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var l = y.current
              if (o.current) {
                var a,
                  r = (0, n.default)(l)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var t = a.value
                    if (t === b) break
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
            [b, o, K, e],
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
          ['NullQueryReference' === b.kind ? null : b, K, v]
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
        return R
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
        b = a.n(k),
        _ = a('pXBW'),
        h = a('6/RC'),
        F = a('UIzd'),
        S = a.n(F),
        v = a('kGix')
      a.d(l, 'a', function () {
        return v.a
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
          return (0, e.render)({ fetchStatus: v.a.LOADING, data: null, error: null, retry: K.a })
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
        })(b.a.Component),
        x = function (e) {
          var l = e.query,
            a = e.queryRef,
            n = e.render,
            r = L()(l, a)
          return n({ fetchStatus: v.a.LOADED, data: r, error: null, retry: K.a })
        },
        R = function (e, l) {
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
                f = b.a.useCallback(
                  function () {
                    d(y, { fetchPolicy: 'network-only' })
                  },
                  [d, y],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    d(y, { fetchPolicy: t })
                  },
                  [t, d, y],
                ),
                c
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(A, { render: i }) },
                      b.a.createElement(
                        O,
                        { errorHandler: g(l.errorConfig.options || {}), key: c.fetchKey, retry: f },
                        function (l, a) {
                          return l
                            ? i({ fetchStatus: v.a.FAILED, error: l, data: null, retry: a })
                            : b.a.createElement(x, { query: e, queryRef: c, render: i })
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
            var g = b.a.lazy(function () {
              return S()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return t({ fetchStatus: v.a.LOADED, data: e, error: null, retry: K.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (u(l.errorConfig.options || {})(e),
                        t({ fetchStatus: v.a.FAILED, data: null, error: e, retry: K.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(s, e).get.bind(a, s) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(g, null))
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
          return Cn
        }),
        a.d(l, 'UserProfileQueryRenderer', function () {
          return Dn
        }),
        a.d(l, 'UserProfileScreenContainer', function () {
          return In
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
        b,
        _,
        h,
        F,
        S,
        v,
        K,
        E,
        w,
        U,
        P,
        L,
        T,
        C,
        D,
        I,
        A = a('ddV6'),
        O = a.n(A),
        x = a('ERkP'),
        R = a.n(x),
        B = a('GOQE'),
        N = a('rZeG'),
        H = a('txMZ'),
        M = a('kGix'),
        j = (a('lTEL'), a('7x/C'), a('kYxP'), a('5BYb'), a('ho0z'), a('jQ3i'), a('x4t0'), a('aeN7')),
        Q = a('v6aA'),
        q = a('es0u'),
        W = (a('enFi'), a('Hsf0')),
        V = a.n(W),
        G = function (e) {
          var l,
            r,
            t,
            i = e.isOwnProfile,
            s = e.user,
            u = V()(void 0 !== n ? n : (n = a('yvH6')), s),
            o = null === (l = u.legacy) || void 0 === l ? void 0 : l.blocked_by,
            c =
              (null === (r = u.legacy) || void 0 === r ? void 0 : r.protected) &&
              !(null !== (t = u.legacy) && void 0 !== t && t.following)
          return i || (!c && !o)
        },
        z = a('8UdT'),
        Y = a('dwig'),
        J = a('v//M'),
        Z = a('0+qk'),
        X = a('KEM+'),
        $ = a.n(X),
        ee = a('yiKp'),
        le = a.n(ee),
        ae = a('k49u'),
        ne = a('1YZw'),
        re = a('G6rE'),
        te = a('rxPX'),
        ie = a('0KEI'),
        se = Object(te.a)()
          .propsFromActions(function () {
            return {
              addToast: ne.b,
              cancelPendingFollow: re.e.cancelPendingFollow,
              createLocalApiErrorHandler: Object(ie.createLocalApiErrorHandlerWithContextFactory)(
                'FOLLOW_USER_BUTTON_RELAY',
              ),
              follow: re.e.follow,
              unblock: re.e.unblock,
              unfollow: re.e.unfollow,
            }
          })
          .withAnalytics(),
        ue = a('3XMw'),
        oe = a.n(ue),
        ce = a('Tp1h'),
        de = a('Rp9C'),
        ge = a('Jkc4'),
        me = a('WVvL'),
        ye = a('u0B7'),
        fe = a('tJZD'),
        pe = a('zCf4'),
        ke = a('PSpH'),
        be = a('eb3s'),
        _e = a('CGyZ'),
        he = a('jAXQ'),
        Fe = a.n(he),
        Se = oe.a.hbe4feb4,
        ve = oe.a.df4c86bf,
        Ke = oe.a.bba40ffa,
        Ee = oe.a.f558829d,
        we = oe.a.a6941096,
        Ue = oe.a.j24c37b2,
        Pe = oe.a.if8cd2a3,
        Le = oe.a.b597226f,
        Te = se(function (e) {
          var l = e.addToast,
            n = e.analytics,
            t = e.cancelPendingFollow,
            i = e.createLocalApiErrorHandler,
            s = e.follow,
            u = e.promotedContent,
            o = e.showRelationshipChangeConfirmation,
            c = e.size,
            d = e.style,
            g = e.unblock,
            m = e.unfollow,
            y = e.user,
            f = R.a.useState({ showDialog: !1 }),
            p = O()(f, 2),
            k = p[0],
            b = p[1],
            _ = Object(pe.g)(),
            h = R.a.useMemo(function () {
              var e
              return le()(
                le()({}, ke.a),
                {},
                ((e = {}),
                $()(e, ae.a.UserMustBeAlcoholAgeScreened, {
                  customAction: function () {
                    b({ showDialog: !0, dialogText: Pe, dialogHeadline: Ke })
                  },
                }),
                $()(e, ae.a.CannotFollowFromCountry, {
                  customAction: function () {
                    b({ showDialog: !0, dialogText: we, dialogHeadline: Ke })
                  },
                }),
                $()(e, ae.a.BirthdateRequired, {
                  customAction: function () {
                    b({ showDialog: !0, dialogText: Ee, dialogHeadline: ve })
                  },
                }),
                e),
              )
            }, []),
            F = Fe()(void 0 !== r ? r : (r = a('P4CI')), y),
            S = F.legacy,
            v = S.blocking,
            K = S.follow_request_sent,
            E = S.followed_by,
            w = S.following,
            U = S.name,
            P = S.screen_name,
            L = F.rest_id,
            T = F.smart_blocking,
            C = !!R.a.useContext(Q.a).loggedInUserId,
            D = P ? '/'.concat(P) : '',
            I = L
              ? {
                  follow: me.a.follow(L),
                  unfollow: me.a.unfollow(L),
                  cancel: me.a.cancel(L),
                  block: me.a.block(L),
                  unblock: me.a.unblock(L),
                }
              : void 0,
            A = function (e) {
              var l = { id_str: L, name: e, following: w, followed_by: E },
                a = L ? [de.a.getUserItem(l, u)] : [],
                r = _.query && _.query.screen_name ? { items: a, context: 'profile_intent' } : { items: a }
              return n.scribe({ action: e, data: r })
            },
            x = R.a.useCallback(function () {
              b({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 })
            }, []),
            B = function () {
              L && t(L).catch(i({ defaultToast: { text: Le }, showToast: !0 }))
            },
            N = function () {
              L &&
                s(L, { promotedContent: u }).then(function () {
                  return F.legacy.protected && l({ text: Se({ screenName: P }) }), A('follow')
                }, i(le()(le()({}, h), {}, { showToast: !0 })))
            },
            H = function () {
              A('follow_attempt')
            },
            M = function () {
              L && g(L, { promotedContent: u }).catch(i(ye.a))
            },
            j = function () {
              if (L) return m(L, { promotedContent: u }).catch(i(fe.a)), A('unfollow')
            }
          return U && P
            ? R.a.createElement(
                R.a.Fragment,
                null,
                k.showDialog
                  ? R.a.createElement(be.a, {
                      confirmButtonLabel: Ue,
                      headline: k.dialogHeadline,
                      onCancel: x,
                      onConfirm: x,
                      text: k.dialogText,
                      withCancelButton: !1,
                    })
                  : null,
                R.a.createElement(
                  ge.a,
                  { displayMode: ce.a.follow, postLoginPath: D, userFullName: U, userId: L },
                  function (e) {
                    return R.a.createElement(_e.a, {
                      isAutoblocking: !!T,
                      isBlocking: v,
                      isFollowRequestSent: K,
                      isFollowing: w,
                      name: P,
                      onCancelPendingFollow: e(B),
                      onFollow: e(N, H),
                      onUnblock: e(M),
                      onUnfollow: e(j),
                      showRelationshipChangeConfirmation: C && o,
                      size: c,
                      style: d,
                      testIDs: I,
                      type: 'user',
                    })
                  },
                ),
              )
            : null
        }),
        Ce = Te,
        De = a('iFPY'),
        Ie = (a('1t7P'), a('jQ/y'), a('s4rk')),
        Ae = a('zI2C'),
        Oe = a('rJoH'),
        xe = oe.a.d67658c0,
        Re = function (e) {
          var l = e.user,
            n = Fe()(void 0 !== t ? t : (t = a('vInD')), l),
            r = n ? 'twitter://user?screen_name='.concat(n.legacy.screen_name || '') : void 0,
            i = n ? 'https://twitter.com/'.concat(n.legacy.screen_name || '') : void 0,
            s = n ? xe({ fullName: n.legacy.name, screenName: n.legacy.screen_name }) : void 0
          return R.a.createElement(
            R.a.Fragment,
            null,
            R.a.createElement(Oe.a, {
              canonical: i,
              description: (null == n ? void 0 : n.legacy.description) || '',
              image: (null == n ? void 0 : n.legacy.profile_image_url_https) || '',
              title: s,
              type: 'profile',
            }),
            R.a.createElement(Ae.a, { deepLink: r }),
            i ? R.a.createElement(Ie.a, { canonical: i }) : null,
          )
        },
        Be = a('jS2K'),
        Ne = a('IG4P'),
        He = a('VS6U'),
        Me = (a('vrRf'), a('2G9S'), a('Qayx')),
        je = 'likes',
        Qe = 'media',
        qe = function (e) {
          var l = e.user,
            n = Fe()(void 0 !== i ? i : (i = a('D0zN')), l).legacy,
            r = (n.screen_name || '').toLowerCase(),
            t = location.pathname.toLowerCase()
          return t.indexOf('/'.concat(r, '/').concat(je)) > -1
            ? R.a.createElement(Me.a, { count: n.favourites_count, type: 'likes' })
            : t.indexOf('/'.concat(r, '/').concat(Qe)) > -1
            ? R.a.createElement(Me.a, { count: n.media_count, type: 'media' })
            : R.a.createElement(Me.a, { count: n.statuses_count, type: 'tweets' })
        },
        We = a('jV+4'),
        Ve = function (e) {
          var l = e.user,
            n = Fe()(void 0 !== s ? s : (s = a('66Bp')), l)
          return R.a.createElement(We.a, {
            isProtected: n.legacy.protected,
            isVerified: n.legacy.verified,
            name: n.legacy.name || void 0,
            screenName: n.legacy.screen_name || void 0,
            weight: 'heavy',
            withScreenName: !1,
          })
        },
        Ge = a('t62R'),
        ze = a('tI3i'),
        Ye = a.n(ze),
        Je = a('FIs5'),
        Ze = a('rHpw'),
        Xe = function (e) {
          var l = e.buttonText,
            a = e.header,
            n = e.message,
            r = e.onButtonPress
          return R.a.createElement(Je.a, {
            buttonText: l,
            buttonType: 'brandOutlined',
            header: a,
            message: n,
            onButtonPress: r,
            style: $e.root,
          })
        },
        $e = Ze.a.create(function (e) {
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
        el = oe.a.ica87fde,
        ll = function (e) {
          var l = Fe()(void 0 !== u ? u : (u = a('sLDr')), e.user).legacy.screen_name
          Ye()('string' == typeof l, 'screenName must be defined')
          var n = R.a.createElement(
            oe.a.I18NFormatMessage,
            { $i18n: 'ccade2e6', screenName: l },
            R.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/20172060' }, oe.a.de078c23),
          )
          return R.a.createElement(Xe, { header: el, message: n })
        },
        al = oe.a.eeab4adf,
        nl = oe.a.e79ed125,
        rl = function (e) {
          var l = e.onShowBlockedTweets,
            n = Fe()(void 0 !== o ? o : (o = a('eH5D')), e.user).legacy.screen_name
          Ye()('string' == typeof n, 'screenName must be a string')
          var r = nl({ screenName: n }),
            t = R.a.createElement(
              oe.a.I18NFormatMessage,
              { $i18n: 'e645092a', screenName: n },
              R.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/117063' }, oe.a.f6a72a2a),
            )
          return R.a.createElement(Xe, { buttonText: al, header: r, message: t, onButtonPress: l })
        },
        tl = a('97Jx'),
        il = a.n(tl),
        sl = (a('JtPf'), a('87if'), a('Y6L+')),
        ul = a('wytG'),
        ol = a('k/OQ'),
        cl = Object(ul.a)(function () {
          return Promise.all([a.e(0), a.e(239)]).then(a.bind(null, '8KtR'))
        }),
        dl = Object(ul.a)(function () {
          return Promise.all([a.e(0), a.e(239)]).then(a.bind(null, 'ivpD'))
        }),
        gl = Object(ul.a)(function () {
          return Promise.all([a.e(0), a.e(239)]).then(a.bind(null, 'ylAD'))
        }),
        ml = 'likes',
        yl = 'media',
        fl = 'with_replies',
        pl = oe.a.a2811f96,
        kl = oe.a.bab1f8b0,
        bl = oe.a.a52b03a5,
        _l = oe.a.add55c97,
        hl = oe.a.d7b8eba9,
        Fl = function (e) {
          var l = e.onEntriesRendered,
            n = e.showBlockedTweets,
            r = Fe()(void 0 !== c ? c : (c = a('0pBG')), e.user),
            t = Object(pe.g)(),
            i = t.query,
            s = r.legacy,
            u = s.name,
            o = s.screen_name,
            d = r.rest_id,
            g = o || '',
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
                  key: kl,
                  label: kl,
                },
                { to: { pathname: '/'.concat(g, '/').concat(fl), query: i }, key: bl, label: bl },
                { to: { pathname: '/'.concat(g, '/').concat(yl), query: i }, key: _l, label: _l, onClick: e() },
                { to: { pathname: '/'.concat(g, '/').concat(ml), query: i }, key: hl, label: hl, onClick: e() },
              ]
            },
            y = { displayBlocked: n, fullName: u, screenName: g, userId: d }
          return R.a.createElement(
            R.a.Fragment,
            null,
            R.a.createElement(ge.a, null, function (e) {
              return R.a.createElement(ol.a, { accessibilityLabel: pl, links: m(e) })
            }),
            R.a.createElement(
              pe.d,
              null,
              R.a.createElement(pe.b, { exact: !0, path: '/intent/follow' }, R.a.createElement(cl, y)),
              R.a.createElement(pe.b, { exact: !0, path: '/intent/user' }, R.a.createElement(cl, y)),
              R.a.createElement(
                pe.b,
                { exact: !0, path: '/'.concat(sl.J) },
                R.a.createElement(cl, il()({}, y, { onEntriesRendered: l })),
              ),
              R.a.createElement(
                pe.b,
                { exact: !0, path: '/'.concat(sl.J, '/').concat(fl) },
                R.a.createElement(cl, il()({}, y, { withReplies: !0 })),
              ),
              R.a.createElement(pe.b, { exact: !0, path: '/'.concat(sl.J, '/').concat(yl) }, R.a.createElement(gl, y)),
              R.a.createElement(pe.b, { exact: !0, path: '/'.concat(sl.J, '/').concat(ml) }, R.a.createElement(dl, y)),
            ),
          )
        },
        Sl = a('drnk'),
        vl = a('Irs7'),
        Kl = oe.a.d834ab9c,
        El = Object(vl.a)(
          function (e) {
            var l = e.analytics,
              n = e.onConfirmProfileInterstitial,
              r = Fe()(void 0 !== d ? d : (d = a('dVIa')), e.user).legacy.profile_interstitial_type,
              t = Object(Sl.a)(r),
              i = t.header,
              s = t.message
            R.a.useEffect(
              function () {
                l.scribeAction('impression')
              },
              [l],
            )
            return R.a.createElement(Xe, {
              buttonText: Kl,
              header: i,
              message: s,
              onButtonPress: function () {
                n(), l.scribeAction('click')
              },
            })
          },
          { section: 'profile_interstitial' },
        ),
        wl =
          (a('z84I'),
          a('M+/F'),
          function (e) {
            var l = V()(void 0 !== g ? g : (g = a('ZNc3')), e)
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
        Ul = a('MWbm'),
        Pl = a('Q0VY'),
        Ll = a('FiRh'),
        Tl = a('0yYu'),
        Cl = oe.a.gbf342a4,
        Dl = function (e) {
          var l = e.onEntriesRendered,
            n = e.user,
            r = Fe()(void 0 !== m ? m : (m = a('E4Mm')), n),
            t = r.legacy,
            i = t.description,
            s = t.entities,
            u = r.rest_id,
            o = void 0 === u ? '' : u
          if (!i) return null
          var c = Pl.a.descriptionTextParts(i, wl(s))
          return R.a.createElement(
            Ul.a,
            null,
            R.a.createElement(
              Ul.a,
              { style: Il.withheldMessageRoot },
              R.a.createElement(
                Ge.b,
                { align: 'center', size: 'title4', style: Il.withheldMessageHeader, weight: 'bold' },
                Cl,
              ),
              R.a.createElement(
                Ge.b,
                { align: 'center', color: 'gray700', dir: 'auto' },
                c.map(function (e, l) {
                  return R.a.createElement(Ll.b, {
                    key: 'user_'.concat(o, '_textpart_').concat(l),
                    linkify: !0,
                    part: e,
                  })
                }),
              ),
            ),
            R.a.createElement(Tl.a, null),
            R.a.createElement(Fl, { onEntriesRendered: l, user: r }),
          )
        },
        Il = Ze.a.create(function (e) {
          return {
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        Al = oe.a.c9a1cb5d,
        Ol = oe.a.e7b201dd,
        xl = function () {
          return R.a.createElement(Xe, { header: Al, message: Ol })
        },
        Rl = oe.a.d09e12c4,
        Bl = function (e) {
          var l = Fe()(void 0 !== y ? y : (y = a('iN7L')), e.user).legacy.screen_name
          Ye()('string' == typeof l, 'screenName must be a string')
          var n = R.a.createElement(
            oe.a.I18NFormatMessage,
            { $i18n: 'c97724c2', screenName: l },
            R.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/14016' }, oe.a.a58c8a4e),
          )
          return R.a.createElement(Xe, { header: Rl, message: n })
        },
        Nl = oe.a.g8475f82,
        Hl = function () {
          var e = R.a.createElement(
            oe.a.I18NFormatMessage,
            { $i18n: 'f6fa2033' },
            R.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/18311' }, oe.a.f3b1bdc1),
          )
          return R.a.createElement(Xe, { header: Nl, message: e })
        },
        Ml = oe.a.gbf342a4,
        jl = function (e) {
          var l = Fe()(void 0 !== f ? f : (f = a('vJP1')), e.user),
            n = l.legacy,
            r = n.description,
            t = n.entities,
            i = l.rest_id
          if (!r) return null
          var s = Pl.a.descriptionTextParts(r, wl(t)),
            u = R.a.createElement(
              Ge.b,
              { align: 'center', color: 'gray700', dir: 'auto' },
              s.map(function (e, l) {
                return R.a.createElement(Ll.b, { key: 'user_'.concat(i, '_textpart_').concat(l), linkify: !0, part: e })
              }),
            )
          return R.a.createElement(Xe, { header: Ml, message: u })
        },
        Ql = function (e) {
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
            g = Fe()(void 0 !== p ? p : (p = a('iIq9')), d),
            m = (null == g ? void 0 : g.legacy) || {},
            y = m.blocked_by,
            f = m.blocking,
            k = m.withheld_scope
          return t
            ? R.a.createElement(Hl, null)
            : l
            ? R.a.createElement(xl, null)
            : g
            ? k && n
              ? R.a.createElement(Dl, { onEntriesRendered: s, user: g })
              : k
              ? R.a.createElement(jl, { user: g })
              : o
              ? R.a.createElement(El, { onConfirmProfileInterstitial: i, user: g })
              : y
              ? R.a.createElement(ll, { user: g })
              : f && !c
              ? R.a.createElement(rl, { onShowBlockedTweets: u, user: g })
              : r
              ? R.a.createElement(Bl, { user: g })
              : R.a.createElement(Fl, { onEntriesRendered: s, showBlockedTweets: c, user: g })
            : null
        },
        ql = a('I/ms'),
        Wl = a('TIdA'),
        Vl = a('cHvH'),
        Gl = a('jhWN'),
        zl = Wl.a.createLayoutCache(),
        Yl = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = Fe()(void 0 !== k ? k : (k = a('kVSq')), r),
            i = !l && n,
            s = i || !t.legacy.profile_image_url_https ? void 0 : t.legacy.profile_image_url_https
          return R.a.createElement(Vl.a, null, function (e) {
            var l = e.windowWidth >= Ze.a.theme.breakpoints.medium
            return R.a.createElement(Gl.a, {
              borderColor: 'cellBackground',
              borderWidth: l ? 'medium' : 'large',
              imageLayoutCache: zl,
              link: i ? void 0 : { pathname: '/'.concat(t.legacy.screen_name || '', '/photo') },
              size: 'custom',
              style: ql.a.avatar,
              uri: s || void 0,
            })
          })
        },
        Jl = a('RCZO'),
        Zl = a('n4Eu'),
        Xl = a('cm6r'),
        $l = a('A91F'),
        ea = a('9Xij'),
        la = Wl.a.createLayoutCache(),
        aa = function (e) {
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
        na = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = Fe()(void 0 !== b ? b : (b = a('+PaE')), r),
            i = !l && n,
            s = aa(t.legacy.profile_banner_extensions),
            u = s && Zl.a.get(s),
            o = u ? Object(Jl.g)(u) : Ze.a.theme.colors.gray200,
            c = t.legacy.profile_banner_url
          return !i && c
            ? R.a.createElement(
                Xl.a,
                { accessibilityHidden: !0, link: '/'.concat(t.legacy.screen_name || '', '/header_photo') },
                R.a.createElement(Wl.a, {
                  accessibilityLabel: '',
                  aspectMode: $l.a.exact(Ze.a.theme.aspectRatios.profileBanner),
                  backgroundColor: o,
                  image: c,
                  layoutCache: la,
                }),
              )
            : R.a.createElement(
                Ul.a,
                { style: ql.a.banner },
                R.a.createElement(ea.a, {
                  ratio: Ze.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: o },
                }),
              )
        },
        ra = a('3nOA'),
        ta = a('I57f'),
        ia = a('SOvA'),
        sa = a('vYiB'),
        ua = a('Y49K'),
        oa = a('/yvb'),
        ca = a('ACHU'),
        da = a('rsoE'),
        ga = a('vMjK'),
        ma = oe.a.h63a5c3b,
        ya = function (e) {
          var l = e.buttonStyle,
            n = e.promotedContent,
            r = e.user,
            t = Fe()(void 0 !== _ ? _ : (_ = a('+uag')), r),
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
          return R.a.createElement(oa.a, {
            accessibilityLabel: ma,
            hoverLabel: { label: ma },
            icon: R.a.createElement(ca.a, null),
            renderMenu: function (e) {
              return R.a.createElement(ga.b, { onClose: e, promotedContent: n, user: i, view: 'profile' })
            },
            style: l,
            testID: da.a.userActions,
            type: 'primaryOutlined',
          })
        },
        fa = oe.a.g7088266,
        pa = oe.a.gd7acb84,
        ka = oe.a.b7636014,
        ba = Ze.a.create(function (e) {
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
        _a = function (e) {
          var l = e.history,
            n = e.isWithheld,
            r = e.loggedInUserId,
            t = e.onFollowButtonOffscreen,
            i = e.promotedContent,
            s = e.user,
            u = Fe()(void 0 !== h ? h : (h = a('hCMu')), s),
            o = Object(vl.b)(),
            c = u.legacy,
            d = c.blocked_by,
            g = c.blocking,
            m = c.can_dm,
            y = c.default_profile_image,
            f = c.description,
            p = c.following,
            k = c.notifications,
            b = c.profile_banner_url,
            _ = u.rest_id,
            F = _ === r,
            S = d,
            v = n && !F,
            K = m && r && !g && !S && !v,
            E = r && u && !F && !v,
            w = 'primaryOutlined',
            U = p && r && !g && !S && !n,
            P = y && !f && !b,
            L = R.a.useCallback(
              function () {
                o.scribe({ element: 'message', action: 'click' }), r && l.push('/messages/'.concat(Object(ra.a)(_, r)))
              },
              [o, r, _, l],
            )
          return R.a.createElement(
            Ul.a,
            { style: ba.buttons },
            r && F
              ? R.a.createElement(
                  oa.a,
                  { link: P ? '/i/flow/setup_profile' : '/settings/profile', style: ba.lastButton, type: w },
                  P ? pa : fa,
                )
              : null,
            E && R.a.createElement(ya, { buttonStyle: ba.button, promotedContent: i, user: u }),
            !F &&
              K &&
              R.a.createElement(oa.a, {
                accessibilityLabel: ka,
                hoverLabel: { label: ka },
                icon: R.a.createElement(ia.a, null),
                onPress: L,
                style: ba.button,
                testID: ua.a.sendDMFromProfile,
                type: w,
              }),
            !F &&
              U &&
              R.a.createElement(ta.a, {
                allowPromptForPush: !0,
                isFollowing: !!k,
                style: ba.button,
                userId: u.rest_id,
              }),
            !F &&
              !S &&
              !v &&
              R.a.createElement(
                sa.a,
                { onOffscreenChange: t },
                R.a.createElement(Ce, { promotedContent: i, style: ba.lastButton, user: u }),
              ),
          )
        },
        ha = a('tOzk'),
        Fa = a('YeIG'),
        Sa = a('Je1/'),
        va = a('WWyu'),
        Ka = a('YUdS'),
        Ea = a('EjKN'),
        wa = oe.a.a1ea2f12,
        Ua = oe.a.g8191e77,
        Pa = function (e) {
          var l = e.day,
            a = e.month
          if (l && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && l === n.getDate()
          }
        },
        La = void 0 !== F ? F : (F = a('BdHD')),
        Ta = function (e) {
          var l,
            a = e.isOwnProfile,
            n = e.user,
            r = null === (l = Fe()(La, n).legacy_extended_profile) || void 0 === l ? void 0 : l.birthdate,
            t = R.a.useRef(),
            i = R.a.useCallback(function () {
              t.current && t.current.launch()
            }, [])
          return !r ||
            Object(Fa.a)(r) ||
            (r.visibility && 'Self' === r.visibility && r.year_visibility && 'Self' === r.year_visibility)
            ? null
            : Pa(r)
            ? R.a.createElement(
                R.a.Fragment,
                null,
                R.a.createElement(Sa.a, { Icon: Ka.a, onPress: i }, a ? wa : Ua),
                R.a.createElement(ha.a, {
                  setRef: function (e) {
                    t.current = e
                  },
                }),
              )
            : R.a.createElement(Sa.a, { Icon: Ea.a }, R.a.createElement(va.a, { birthdate: r, withBornPrefixText: !0 }))
        },
        Ca = a('uLiA'),
        Da = a('EJJl'),
        Ia = void 0 !== S ? S : (S = a('GQYZ')),
        Aa = Ze.a.create(function (e) {
          return { description: { display: 'block', marginBottom: e.spaces.space12 } }
        }),
        Oa = function (e) {
          var l = e.isTranslatable,
            a = e.user,
            n = Fe()(Ia, a),
            r = n.legacy
          return r.description
            ? R.a.createElement(
                Ul.a,
                { style: Aa.description },
                R.a.createElement(Da.a, {
                  description: r.description || '',
                  disableTranslation: !l,
                  entities: wl(r.entities),
                  testID: Ca.a.userDescription,
                  userId: n.rest_id,
                  withheldDescription: r.withheld_description || void 0,
                  withheldEntities: wl(r.withheld_entities),
                }),
              )
            : null
        },
        xa = void 0 !== v ? v : (v = a('SXQl')),
        Ra = function (e) {
          var l = e.user,
            a = Fe()(xa, l)
          return R.a.createElement(Oa, { isTranslatable: a.is_profile_translatable, user: a })
        },
        Ba = a('LhSm'),
        Na = a('KrGU'),
        Ha = a('I/9y'),
        Ma = void 0 !== K ? K : (K = a('nmzZ')),
        ja = Ze.a.create(function (e) {
          return {
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
          }
        }),
        Qa = function (e) {
          var l,
            a,
            n,
            r = e.isOwnProfile,
            t = e.user,
            i = Fe()(Ma, t),
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
              { fallback: R.a.createElement(Oa, { user: i }) },
              R.a.createElement(Ra, { user: i }),
            ),
            R.a.createElement(
              Ul.a,
              { style: ja.details },
              R.a.createElement(
                Ge.b,
                { style: ja.detailsText, testID: Ca.a.profileHeaderItems },
                s.location
                  ? R.a.createElement(Sa.a, { Icon: Na.a }, R.a.createElement(Ge.b, null, i.legacy.location))
                  : null,
                u && u.url
                  ? R.a.createElement(
                      Sa.a,
                      { Icon: Ha.a, link: { pathname: u.url, external: !0 } },
                      u.display_url || u.url,
                    )
                  : null,
                R.a.createElement(
                  R.a.Suspense,
                  { fallback: null },
                  R.a.createElement(Ta, { isOwnProfile: r, user: i }),
                ),
                i.legacy.created_at ? R.a.createElement(Ba.a, { joinDate: i.legacy.created_at }) : null,
              ),
            ),
          )
        },
        qa = a('W27K'),
        Wa = Object(te.a)().propsFromActions(function () {
          return {
            addToast: ne.b,
            createLocalApiErrorHandler: Object(ie.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: re.e.unmute,
          }
        }),
        Va = a('8Usl'),
        Ga = a('P2xQ'),
        za = oe.a.cef4e8cf,
        Ya = oe.a.ec294e62,
        Ja = oe.a.df422dfe,
        Za = Wa(function (e) {
          var l = e.addToast,
            n = e.createLocalApiErrorHandler,
            r = e.unmute,
            t = e.user,
            i = Fe()(void 0 !== E ? E : (E = a('gNV4')), t),
            s = R.a.useState(!1),
            u = O()(s, 2),
            o = u[0],
            c = u[1],
            d = i.legacy.screen_name
          return R.a.createElement(
            R.a.Fragment,
            null,
            R.a.createElement(
              Ge.b,
              { color: 'gray700', style: Xa.mute },
              Ja,
              ' ',
              R.a.createElement(
                Ge.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    c(!0)
                  },
                  style: Xa.unmuteButton,
                  testID: Va.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                Ga.g,
              ),
            ),
            o
              ? R.a.createElement(be.a, {
                  confirmButtonLabel: Ga.g,
                  headline: za({ screenName: d }),
                  onCancel: function () {
                    c(!1)
                  },
                  onConfirm: function () {
                    c(!1),
                      r(i.rest_id).then(function () {
                        return l({ text: Object(Ga.d)(d || void 0) })
                      }, n({ showToast: !0 }))
                  },
                  text: Ya,
                })
              : null,
          )
        }),
        Xa = Ze.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        $a = a('ir4X'),
        en = function (e) {
          var l = e.label,
            n = Fe()(void 0 !== w ? w : (w = a('jUuT')), l)
          return n.badge
            ? R.a.createElement($a.a, { label: { badge: n.badge, description: n.description, url: n.url || void 0 } })
            : null
        },
        ln = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = Fe()(void 0 !== U ? U : (U = a('7COa')), r),
            i = t.affiliates_highlighted_label,
            s = t.legacy,
            u = !(!s.name || !s.screen_name || (n && !l)),
            o = u ? s.name || '' : '@'.concat(s.screen_name || '')
          return R.a.createElement(
            Ul.a,
            { style: ql.a.names },
            R.a.createElement(We.a, {
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
            i && i.label ? R.a.createElement(en, { label: i.label }) : null,
          )
        },
        an = a('z+ta'),
        nn = a('wCd/'),
        rn = function (e) {
          var l = e.isOwnProfile,
            n = (e.loggedInUserId, e.user),
            r = Fe()(void 0 !== P ? P : (P = a('lFTA')), n),
            t = r.legacy,
            i = t.followers_count,
            s = t.friends_count,
            u = t.screen_name
          return R.a.createElement(ge.a, null, function (e) {
            return R.a.createElement(nn.a, {
              followersCount: i,
              friendsCount: s,
              onPress: e(),
              screenName: u || '',
              withLink: G({ isOwnProfile: l, user: r }),
            })
          })
        },
        tn = Ze.a.create(function (e) {
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
        sn = function (e) {
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
            b = Fe()(void 0 !== L ? L : (L = a('aOg7')), k),
            _ = R.a.useState(!1),
            h = O()(_, 2),
            F = h[0],
            S = h[1],
            v = !(null === (l = b.legacy) || void 0 === l || !l.withheld_scope),
            K =
              !m &&
              ((null === (n = b.legacy) || void 0 === n ? void 0 : n.blocking) ||
                (null === (r = b.legacy) || void 0 === r ? void 0 : r.blocked_by) ||
                v),
            E = !m && ((null === (t = b.legacy) || void 0 === t ? void 0 : t.blocked_by) || v),
            w =
              !y ||
              m ||
              (null === (i = b.legacy) || void 0 === i ? void 0 : i.blocking) ||
              (null === (s = b.legacy) || void 0 === s ? void 0 : s.blocked_by) ||
              v ||
              ((null === (u = b.legacy) || void 0 === u ? void 0 : u.protected) &&
                !(null !== (o = b.legacy) && void 0 !== o && o.following)),
            U = null === (c = b.legacy) || void 0 === c ? void 0 : c.following,
            P = R.a.useRef(U)
          R.a.useEffect(
            function () {
              U && !P.current && S(!0), (P.current = U)
            },
            [U],
          )
          var T = R.a.useCallback(function () {
            S(!1)
          }, [])
          return R.a.createElement(
            Ul.a,
            null,
            R.a.createElement(na, { isOwnProfile: m, isWithheld: v, user: b }),
            R.a.createElement(
              Ul.a,
              { style: [ql.a.content, tn.content, K && ql.a.withheld] },
              R.a.createElement(
                Ul.a,
                { style: tn.avatarAndButtons },
                R.a.createElement(Yl, { isOwnProfile: m, isWithheld: v, user: b }),
                R.a.createElement(_a, {
                  history: g,
                  isWithheld: v,
                  loggedInUserId: y,
                  onFollowButtonOffscreen: f,
                  promotedContent: p,
                  user: b,
                }),
              ),
              R.a.createElement(ln, { isOwnProfile: m, isWithheld: v, user: b }),
              K ? null : R.a.createElement(Qa, { isOwnProfile: m, user: b }),
              E ? null : R.a.createElement(rn, { isOwnProfile: m, loggedInUserId: y, user: b }),
              w
                ? null
                : R.a.createElement(
                    Ul.a,
                    { style: tn.marginTopXSmall },
                    R.a.createElement(qa.a, {
                      userId: b.rest_id,
                      userScreenName: (null === (d = b.legacy) || void 0 === d ? void 0 : d.screen_name) || '',
                    }),
                  ),
              b.legacy.muting ? R.a.createElement(Za, { user: b }) : null,
            ),
            F ? R.a.createElement(an.a, { onRemoveClusterFollow: T, userId: b.rest_id }) : null,
          )
        },
        un = function (e) {
          var l = e.avatarAccessibilityLabel
          return R.a.createElement(Vl.a, null, function (e) {
            e.windowWidth
            return R.a.createElement(
              Ul.a,
              { accessibilityState: { hidden: !0 }, style: ql.a.avatar },
              R.a.createElement(Gl.a, { accessibilityLabel: l, size: 'custom' }),
            )
          })
        },
        on = function (e) {
          var l,
            n = e.avatarAccessibilityLabel,
            r = e.fullUser,
            t = e.restrictedUser,
            i = e.shouldDisplayUserActionSheet,
            s = Fe()(void 0 !== T ? T : (T = a('kdCF')), r),
            u = (s && s.legacy) || t
          return (
            u.name && u.screen_name ? (l = u.name) : u.screen_name && (l = '@'.concat(u.screen_name)),
            R.a.createElement(
              Ul.a,
              null,
              R.a.createElement(
                Ul.a,
                { style: ql.a.banner },
                R.a.createElement(ea.a, { ratio: Ze.a.theme.aspectRatios.profileBanner }),
              ),
              R.a.createElement(
                Ul.a,
                { style: [ql.a.content, ql.a.withheld] },
                R.a.createElement(
                  Ul.a,
                  { style: ql.a.avatarAndButton },
                  R.a.createElement(un, { avatarAccessibilityLabel: n }),
                  i && s && R.a.createElement(ya, { buttonStyle: ql.a.menuSheetButton, user: s }),
                ),
                R.a.createElement(
                  Ul.a,
                  { style: ql.a.names },
                  R.a.createElement(We.a, {
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
        cn = oe.a.h1658541,
        dn = oe.a.b5447710,
        gn = function (e) {
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
            m = Fe()(void 0 !== C ? C : (C = a('Ge0p')), g)
          if (!r && (t || n || d)) {
            var y,
              f = (null == m || null === (y = m.legacy) || void 0 === y ? void 0 : y.name) || void 0,
              p = { name: f, screen_name: c || '' },
              k = n ? dn : t ? cn : f
            return R.a.createElement(on, {
              avatarAccessibilityLabel: k,
              fullUser: m,
              restrictedUser: p,
              shouldDisplayUserActionSheet: !t && !n,
            })
          }
          return m
            ? R.a.createElement(sn, {
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
        mn = a('ipry'),
        yn = a('mw9i'),
        fn = a('zfvc'),
        pn = oe.a.fa98627a,
        kn = oe.a.c6ea308b,
        bn = oe.a.ccc9153f,
        _n = function (e) {
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
                (i.legacy.profile_interstitial_type === mn.a.SensitiveMedia ||
                  i.legacy.profile_interstitial_type === mn.a.OffensiveProfileContent) &&
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
        hn = function (e) {
          return e.pathname.includes('/intent/')
        },
        Fn = function (e) {
          return ((e && e.state) || {}).promotedTweetState
        },
        Sn = function (e, l, a, n) {
          return e && !a
            ? R.a.createElement(
                fn.b,
                { animateMount: !0, show: n, type: 'fade' },
                R.a.createElement(Ce, { promotedContent: l, user: e }),
              )
            : void 0
        },
        vn = function (e, l, a, n, r) {
          if (e) {
            var t = !!(n || a || e.legacy.blocked_by || (e.legacy.blocking && !r))
            return R.a.createElement(Be.a, {
              hideMediaModule: t,
              userId: e.rest_id,
              userScreenName: e.legacy.screen_name || void 0,
              withTopicsToFollow: G({ user: e, isOwnProfile: l }),
            })
          }
          return R.a.createElement(q.a, null)
        },
        Kn = function (e) {
          var l = e.displaySensitiveMedia,
            n = e.fetchStatus,
            r = e.isNotFound,
            t = e.isRefreshing,
            i = e.isSuspended,
            s = e.onRefresh,
            u = e.onRetry,
            o = e.screenName,
            c = e.user,
            d = Object(pe.f)(),
            g = Object(pe.g)(),
            m = Fn(g),
            y = R.a.useRef(!0),
            f = R.a.useRef(!0),
            p = R.a.useContext(Q.a).loggedInUserId,
            k = R.a.useState(!1),
            b = O()(k, 2),
            _ = b[0],
            h = b[1],
            F = R.a.useState(!1),
            S = O()(F, 2),
            v = S[0],
            K = S[1],
            E = R.a.useState(!1),
            w = O()(E, 2),
            U = w[0],
            P = w[1],
            L = Fe()(void 0 !== D ? D : (D = a('kcMG')), c),
            T = _n({
              user: L,
              loggedInUserId: p,
              isSuspended: i,
              isNotFound: r,
              showBlockedTweets: _,
              displaySensitiveMedia: l,
              userProfileInterstitialDismissed: U,
            }),
            C = T.isInvalid,
            I = T.isOwnProfile,
            A = T.isProtectedFromViewer,
            x = T.isWithheld,
            B = T.shouldShowProfileInterstitial,
            N = L && !L.legacy.blocking && !L.legacy.blocked_by && !I && !A && !i && !r && !x && !B
          R.a.useEffect(
            function () {
              if (n === M.a.FAILED) f.current = !1
              else if (f.current && N) {
                j.d('profile', { source: 'graphql' }), (f.current = !1)
              }
            },
            [n, N],
          )
          var H = R.a.useCallback(function (e) {
              var l = e.entries
              if ((e.fetchStatus === M.a.FAILED && (y.current = !1), y.current && l.length)) {
                var a = l.some(function (e) {
                  return e.type === z.b.Tweet
                })
                if (((y.current = !1), a)) {
                  j.c('profile', { source: 'graphql' })
                }
              }
            }, []),
            q = L ? kn({ screenName: L.legacy.screen_name, fullName: L.legacy.name }) : void 0,
            W = I ? '' : '@'.concat((null == L ? void 0 : L.legacy.screen_name) || o || '', ' '),
            V = R.a.useMemo(
              function () {
                return function () {
                  return { defaultText: W }
                }
              },
              [W],
            ),
            G = C ? null : R.a.createElement(Z.a, { getLocationState: V, history: d }),
            X = R.a.useCallback(function (e) {
              var l = e.isOffscreen
              K(l)
            }, []),
            $ = function () {
              P(!0)
            },
            ee = function () {
              h(!0)
            },
            le = R.a.useCallback(
              function () {
                return R.a.createElement(
                  R.a.Fragment,
                  null,
                  R.a.createElement(gn, {
                    history: d,
                    isNotFound: r,
                    isOwnProfile: I,
                    isSuspended: i,
                    location: g,
                    loggedInUserId: p,
                    onFollowButtonOffscreen: X,
                    promotedContent: m,
                    screenName: o,
                    shouldShowProfileInterstitial: B,
                    user: L,
                  }),
                  R.a.createElement(Ql, {
                    isNotFound: r,
                    isOwnProfile: I,
                    isProtectedFromViewer: A,
                    isSuspended: i,
                    onConfirmProfileInterstitial: $,
                    onEntriesRendered: H,
                    onShowBlockedTweets: ee,
                    shouldShowProfileInterstitial: B,
                    showBlockedTweets: _,
                    user: L,
                  }),
                )
              },
              [H, X, d, r, I, A, i, g, p, m, o, B, _, L],
            ),
            ae = R.a.useCallback(
              function () {
                var e = i || r
                return R.a.createElement(
                  Ne.a,
                  { isRefreshing: t, onRefresh: s },
                  R.a.createElement(
                    Ul.a,
                    { style: En.containerGrow },
                    R.a.createElement(
                      yn.a,
                      null,
                      R.a.createElement(J.a, {
                        accessibilityLabel: bn({ screenName: o }),
                        fetchStatus: e ? M.a.LOADED : n,
                        onRequestRetry: u,
                        render: le,
                      }),
                    ),
                  ),
                )
              },
              [o, t, i, r, n, s, u, le],
            )
          return R.a.createElement(He.a, {
            backLocation: '/',
            composeOptions: { defaultText: W },
            documentTitle: q,
            history: d,
            primaryContent: R.a.createElement(
              Y.a,
              { fab: G },
              R.a.createElement(Re, { user: L }),
              R.a.createElement(J.a, {
                accessibilityLabel: bn({ screenName: o }),
                fetchStatus: L || C ? M.a.LOADED : n,
                onRequestRetry: u,
                render: ae,
              }),
              hn(g)
                ? R.a.createElement(De.a, { history: d, location: g, userId: null == L ? void 0 : L.rest_id })
                : null,
            ),
            rightControl: Sn(L, m, I, v),
            sidebarContent: vn(L, I, A, B, _),
            subtitle: L && !C && n === M.a.LOADED ? R.a.createElement(qe, { location: g, user: L }) : void 0,
            title: L && !C ? R.a.createElement(Ve, { user: L }) : pn,
          })
        },
        En = Ze.a.create(function (e) {
          return { containerGrow: { flexGrow: 1 } }
        }),
        wn = a('n0Rl'),
        Un = a('UIzd'),
        Pn = a.n(Un),
        Ln = a('Ud88'),
        Tn = a.n(Ln),
        Cn = void 0 !== I ? I : (I = a('DRvb')),
        Dn = Object(wn.b)(Cn, { errorConfig: { context: 'USER_PROFILE_SCREEN', options: B.a } }),
        In = function (e) {
          var l = e.displaySensitiveMedia,
            a = (function (e) {
              var l = e.location,
                a = e.params
              return a && a.screenName
                ? a.screenName
                : l && l.query && l.query.screen_name && 'string' == typeof l.query.screen_name
                ? l.query.screen_name
                : ''
            })({ location: Object(pe.g)(), params: Object(pe.h)() }),
            n = R.a.useState(!1),
            r = O()(n, 2),
            t = r[0],
            i = r[1],
            s = Tn()(),
            u = R.a.useMemo(
              function () {
                return { screenName: Object(N.a)(a) }
              },
              [a],
            ),
            o = function () {
              i(!0),
                Pn()(s, Cn, { screenName: a })
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
          return R.a.createElement(Dn, {
            render: function (e) {
              var n = e.data,
                r = e.error,
                i = e.fetchStatus,
                s = e.retry,
                u = null == n ? void 0 : n.user,
                c = !!r && Object(ae.c)(r, ae.a.OtherUserSuspended),
                d = !!r && Object(ae.c)(r, ae.a.GenericUserNotFound),
                g = function () {
                  s()
                }
              return R.a.createElement(H.a, { userId: null == u ? void 0 : u.rest_id }, function (e) {
                var n = e.scribeNamespace
                return R.a.createElement(Kn, {
                  displaySensitiveMedia: l,
                  fetchStatus: Object(M.b)(i, !!u),
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
      l.default = In
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
