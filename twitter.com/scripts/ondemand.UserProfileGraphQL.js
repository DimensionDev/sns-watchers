;(window.webpackJsonp = window.webpackJsonp || []).push([
  [238],
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
        o = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        u = o.fetchQueryDeduped,
        c = o.fetchQuery
      e.exports = function (e, l, a) {
        s()
        var o,
          d = i(),
          g = l.fetchKey,
          m = l.fetchPolicy,
          y = l.source,
          f = l.variables,
          p = l.networkCacheConfig,
          k = t(e, f, p)
        if ('PreloadedQuery_DEPRECATED' === l.kind)
          k.request.node.params.name !== l.name && n(!1),
            (o = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: g,
              fetchObservable: u(d, k.request.identifier, function () {
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
          o = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && d === l.environment ? y.ifEmpty(b) : (l.environment, b),
            fetchKey: g,
            fetchPolicy: m,
            query: k,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return r(o)
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
        o,
        u,
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
                          (u = {
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
                                  (o = { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null }),
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
                                  o,
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
                        selections: [c, u],
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
                            selections: [o],
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
                              o,
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
        o = i.useTrackLoadQueryInRender,
        u = a('ERkP'),
        c = u.useCallback,
        d = u.useEffect,
        g = u.useRef,
        m = u.useState,
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
        o()
        var u = r(),
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
              u.current && (y.current.add(f), _(f))
            },
            [u],
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
              if (u.current) {
                var r,
                  t = s(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : i, e, l, n)
                y.current.add(t), _(t)
              }
            },
            [i, e, _, u],
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
              if (u.current) {
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
            [b, u, K, e],
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
        return H
      })
      a('OZaJ')
      var n = a('ddV6'),
        r = a.n(n),
        t = a('VrFO'),
        i = a.n(t),
        s = a('Y9Ll'),
        o = a.n(s),
        u = a('1Pcy'),
        c = a.n(u),
        d = a('5Yy7'),
        g = a.n(d),
        m = a('N+ot'),
        y = a.n(m),
        f = a('AuHH'),
        p = a.n(f),
        k = a('KEM+'),
        b = a.n(k),
        _ = (a('2G9S'), a('ZUdG'), a('7x/C'), a('87if'), a('lTEL'), a('kYxP'), a('ERkP')),
        h = a.n(_),
        F = a('pXBW'),
        S = a('6/RC'),
        v = a('UIzd'),
        K = a.n(v),
        E = a('kGix')
      a.d(l, 'a', function () {
        return E.a
      })
      var w = a('fs1G'),
        U = a('0KEI'),
        P = a('lU4h'),
        L = a.n(P),
        T = a('21nk'),
        C = a.n(T),
        D = a('bCEw'),
        I = a.n(D),
        O = a('Ud88'),
        A = a.n(O)
      function R(e) {
        var l = (function () {
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
            n = p()(e)
          if (l) {
            var r = p()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return y()(this, a)
        }
      }
      var x = function (e) {
          return (0, e.render)({ fetchStatus: E.a.LOADING, data: null, error: null, retry: w.a })
        },
        B = (function (e) {
          g()(a, e)
          var l = R(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++) r[t] = arguments[t]
            return (e = l.call.apply(l, [this].concat(r))), b()(c()(e), 'state', { error: null }), e
          }
          return (
            o()(
              a,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, l) {
                    if (!(e instanceof F.a)) throw e
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
        })(h.a.Component),
        N = function (e) {
          var l = e.query,
            a = e.queryRef,
            n = e.render,
            r = C()(l, a)
          return n({ fetchStatus: E.a.LOADED, data: r, error: null, retry: w.a })
        },
        H = function (e, l) {
          if (S.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                t = void 0 === n ? 'store-or-network' : n,
                i = a.render,
                s = a.variables,
                o = I()(e),
                u = r()(o, 2),
                c = u[0],
                d = u[1],
                g = Object(U.useCreateLocalApiErrorHandler)(l.errorConfig.context),
                m = L()(s),
                y = r()(m, 1)[0],
                f = h.a.useCallback(
                  function () {
                    d(y, { fetchPolicy: 'network-only' })
                  },
                  [d, y],
                )
              return (
                h.a.useLayoutEffect(
                  function () {
                    d(y, { fetchPolicy: t })
                  },
                  [t, d, y],
                ),
                c
                  ? h.a.createElement(
                      h.a.Suspense,
                      { fallback: h.a.createElement(x, { render: i }) },
                      h.a.createElement(
                        B,
                        { errorHandler: g(l.errorConfig.options || {}), key: c.fetchKey, retry: f },
                        function (l, a) {
                          return l
                            ? i({ fetchStatus: E.a.FAILED, error: l, data: null, retry: a })
                            : h.a.createElement(N, { query: e, queryRef: c, render: i })
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
              s = A()(),
              o = Object(U.useCreateLocalApiErrorHandler)(l.errorConfig.context),
              u = L()(i),
              c = r()(u, 1)[0],
              d = a.get(s)
            if (d) return d
            var g = h.a.lazy(function () {
              return K()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return t({ fetchStatus: E.a.LOADED, data: e, error: null, retry: w.a })
                  },
                  function (e) {
                    return e instanceof F.a
                      ? (o(l.errorConfig.options || {})(e),
                        t({ fetchStatus: E.a.FAILED, data: null, error: e, retry: w.a }))
                      : h.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(s, e).get.bind(a, s) }
                })
            })
            return h.a.createElement(h.a.Suspense, null, h.a.createElement(g, null))
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
        t = a('ddV6'),
        i = a.n(t),
        s = a('ERkP'),
        o = a.n(s),
        u = a('GOQE'),
        c = a('rZeG'),
        d = a('txMZ'),
        g = a('kGix'),
        m = (a('7x/C'), a('lTEL'), a('kYxP'), a('5BYb'), a('ho0z'), a('jQ3i'), a('x4t0'), a('aeN7')),
        y = a('v6aA'),
        f = a('es0u'),
        p = (a('enFi'), a('Hsf0')),
        k = a.n(p),
        b = function (e) {
          var l,
            r,
            t,
            i = e.isOwnProfile,
            s = e.user,
            o = k()(void 0 !== n ? n : (n = a('yvH6')), s),
            u = null === (l = o.legacy) || void 0 === l ? void 0 : l.blocked_by,
            c =
              (null === (r = o.legacy) || void 0 === r ? void 0 : r.protected) &&
              !(null !== (t = o.legacy) && void 0 !== t && t.following)
          return i || (!c && !u)
        },
        _ = a('8UdT'),
        h = a('dwig'),
        F = a('v//M'),
        S = a('0+qk'),
        v = (a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('KEM+')),
        K = a.n(v),
        E = a('k49u'),
        w = a('1YZw'),
        U = a('G6rE'),
        P = a('rxPX'),
        L = a('0KEI'),
        T = Object(P.a)()
          .propsFromActions(function () {
            return {
              addToast: w.b,
              cancelPendingFollow: U.e.cancelPendingFollow,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'FOLLOW_USER_BUTTON_RELAY',
              ),
              follow: U.e.follow,
              unblock: U.e.unblock,
              unfollow: U.e.unfollow,
            }
          })
          .withAnalytics(),
        C = a('3XMw'),
        D = a.n(C),
        I = a('Tp1h'),
        O = a('Rp9C'),
        A = a('Jkc4'),
        R = a('WVvL'),
        x = a('u0B7'),
        B = a('tJZD'),
        N = a('Ty5D'),
        H = a('PSpH'),
        M = a('eb3s'),
        j = a('CGyZ'),
        Q = a('jAXQ'),
        W = a.n(Q)
      function q(e, l) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          l &&
            (n = n.filter(function (l) {
              return Object.getOwnPropertyDescriptor(e, l).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function V(e) {
        for (var l = 1; l < arguments.length; l++) {
          var a = null != arguments[l] ? arguments[l] : {}
          l % 2
            ? q(Object(a), !0).forEach(function (l) {
                K()(e, l, a[l])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : q(Object(a)).forEach(function (l) {
                Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l))
              })
        }
        return e
      }
      var G,
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
        se,
        oe,
        ue,
        ce,
        de,
        ge,
        me,
        ye,
        fe,
        pe,
        ke,
        be,
        _e,
        he,
        Fe,
        Se = D.a.hbe4feb4,
        ve = D.a.df4c86bf,
        Ke = D.a.bba40ffa,
        Ee = D.a.f558829d,
        we = D.a.a6941096,
        Ue = D.a.j24c37b2,
        Pe = D.a.if8cd2a3,
        Le = D.a.b597226f,
        Te = T(function (e) {
          var l = e.addToast,
            n = e.analytics,
            t = e.cancelPendingFollow,
            s = e.createLocalApiErrorHandler,
            u = e.follow,
            c = e.promotedContent,
            d = e.showRelationshipChangeConfirmation,
            g = e.size,
            m = e.style,
            f = e.unblock,
            p = e.unfollow,
            k = e.user,
            b = o.a.useState({ showDialog: !1 }),
            _ = i()(b, 2),
            h = _[0],
            F = _[1],
            S = Object(N.h)(),
            v = o.a.useMemo(function () {
              var e
              return V(
                V({}, H.a),
                {},
                ((e = {}),
                K()(e, E.a.UserMustBeAlcoholAgeScreened, {
                  customAction: function () {
                    F({ showDialog: !0, dialogText: Pe, dialogHeadline: Ke })
                  },
                }),
                K()(e, E.a.CannotFollowFromCountry, {
                  customAction: function () {
                    F({ showDialog: !0, dialogText: we, dialogHeadline: Ke })
                  },
                }),
                K()(e, E.a.BirthdateRequired, {
                  customAction: function () {
                    F({ showDialog: !0, dialogText: Ee, dialogHeadline: ve })
                  },
                }),
                e),
              )
            }, []),
            w = W()(void 0 !== r ? r : (r = a('P4CI')), k),
            U = w.legacy,
            P = U.blocking,
            L = U.follow_request_sent,
            T = U.followed_by,
            C = U.following,
            D = U.name,
            Q = U.screen_name,
            q = w.rest_id,
            G = w.smart_blocking,
            z = !!o.a.useContext(y.a).loggedInUserId,
            Y = Q ? '/'.concat(Q) : '',
            J = q
              ? {
                  follow: R.a.follow(q),
                  unfollow: R.a.unfollow(q),
                  cancel: R.a.cancel(q),
                  block: R.a.block(q),
                  unblock: R.a.unblock(q),
                }
              : void 0,
            Z = function (e) {
              var l = { id_str: q, name: e, following: C, followed_by: T },
                a = q ? [O.a.getUserItem(l, c)] : [],
                r = S.query && S.query.screen_name ? { items: a, context: 'profile_intent' } : { items: a }
              return n.scribe({ action: e, data: r })
            },
            X = o.a.useCallback(function () {
              F({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 })
            }, []),
            $ = function () {
              q && t(q).catch(s({ defaultToast: { text: Le }, showToast: !0 }))
            },
            ee = function () {
              q &&
                u(q, { promotedContent: c }).then(function () {
                  return w.legacy.protected && l({ text: Se({ screenName: Q }) }), Z('follow')
                }, s(V(V({}, v), {}, { showToast: !0 })))
            },
            le = function () {
              Z('follow_attempt')
            },
            ae = function () {
              q && f(q, { promotedContent: c }).catch(s(x.a))
            },
            ne = function () {
              if (q) return p(q, { promotedContent: c }).catch(s(B.a)), Z('unfollow')
            }
          return D && Q
            ? o.a.createElement(
                o.a.Fragment,
                null,
                h.showDialog
                  ? o.a.createElement(M.a, {
                      confirmButtonLabel: Ue,
                      headline: h.dialogHeadline,
                      onCancel: X,
                      onConfirm: X,
                      text: h.dialogText,
                      withCancelButton: !1,
                    })
                  : null,
                o.a.createElement(
                  A.a,
                  { displayMode: I.a.follow, postLoginPath: Y, userFullName: D, userId: q },
                  function (e) {
                    return o.a.createElement(j.a, {
                      isAutoblocking: !!G,
                      isBlocking: P,
                      isFollowRequestSent: L,
                      isFollowing: C,
                      name: Q,
                      onCancelPendingFollow: e($),
                      onFollow: e(ee, le),
                      onUnblock: e(ae),
                      onUnfollow: e(ne),
                      showRelationshipChangeConfirmation: z && d,
                      size: g,
                      style: m,
                      testIDs: J,
                      type: 'user',
                    })
                  },
                ),
              )
            : null
        }),
        Ce = Te,
        De = a('iFPY'),
        Ie = (a('jQ/y'), a('s4rk')),
        Oe = a('zI2C'),
        Ae = a('rJoH'),
        Re = D.a.d67658c0,
        xe = function (e) {
          var l = e.user,
            n = W()(void 0 !== G ? G : (G = a('vInD')), l),
            r = n ? 'twitter://user?screen_name='.concat(n.legacy.screen_name || '') : void 0,
            t = n ? 'https://twitter.com/'.concat(n.legacy.screen_name || '') : void 0,
            i = n ? Re({ fullName: n.legacy.name, screenName: n.legacy.screen_name }) : void 0
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(Ae.a, {
              canonical: t,
              description: (null == n ? void 0 : n.legacy.description) || '',
              image: (null == n ? void 0 : n.legacy.profile_image_url_https) || '',
              title: i,
              type: 'profile',
            }),
            o.a.createElement(Oe.a, { deepLink: r }),
            t ? o.a.createElement(Ie.a, { canonical: t }) : null,
          )
        },
        Be = a('jS2K'),
        Ne = a('IG4P'),
        He = a('VS6U'),
        Me = (a('vrRf'), a('2G9S'), a('Qayx')),
        je = 'likes',
        Qe = 'media',
        We = function (e) {
          var l = e.user,
            n = W()(void 0 !== z ? z : (z = a('D0zN')), l).legacy,
            r = (n.screen_name || '').toLowerCase(),
            t = location.pathname.toLowerCase()
          return t.indexOf('/'.concat(r, '/').concat(je)) > -1
            ? o.a.createElement(Me.a, { count: n.favourites_count, type: 'likes' })
            : t.indexOf('/'.concat(r, '/').concat(Qe)) > -1
            ? o.a.createElement(Me.a, { count: n.media_count, type: 'media' })
            : o.a.createElement(Me.a, { count: n.statuses_count, type: 'tweets' })
        },
        qe = a('jV+4'),
        Ve = function (e) {
          var l = e.user,
            n = W()(void 0 !== Y ? Y : (Y = a('66Bp')), l)
          return o.a.createElement(qe.a, {
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
          return o.a.createElement(Je.a, {
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
        el = D.a.ica87fde,
        ll = function (e) {
          var l = W()(void 0 !== J ? J : (J = a('sLDr')), e.user).legacy.screen_name
          Ye()('string' == typeof l, 'screenName must be defined')
          var n = o.a.createElement(
            D.a.I18NFormatMessage,
            { $i18n: 'ccade2e6', screenName: l },
            o.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/20172060' }, D.a.de078c23),
          )
          return o.a.createElement(Xe, { header: el, message: n })
        },
        al = D.a.eeab4adf,
        nl = D.a.e79ed125,
        rl = function (e) {
          var l = e.onShowBlockedTweets,
            n = W()(void 0 !== Z ? Z : (Z = a('eH5D')), e.user).legacy.screen_name
          Ye()('string' == typeof n, 'screenName must be a string')
          var r = nl({ screenName: n }),
            t = o.a.createElement(
              D.a.I18NFormatMessage,
              { $i18n: 'e645092a', screenName: n },
              o.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/117063' }, D.a.f6a72a2a),
            )
          return o.a.createElement(Xe, { buttonText: al, header: r, message: t, onButtonPress: l })
        },
        tl = a('97Jx'),
        il = a.n(tl),
        sl = (a('JtPf'), a('87if'), a('Y6L+')),
        ol = a('wytG'),
        ul = a('k/OQ'),
        cl = Object(ol.a)(function () {
          return Promise.all([a.e(0), a.e(238)]).then(a.bind(null, '8KtR'))
        }),
        dl = Object(ol.a)(function () {
          return Promise.all([a.e(0), a.e(238)]).then(a.bind(null, 'ivpD'))
        }),
        gl = Object(ol.a)(function () {
          return Promise.all([a.e(0), a.e(238)]).then(a.bind(null, 'ylAD'))
        }),
        ml = 'likes',
        yl = 'media',
        fl = 'with_replies',
        pl = D.a.a2811f96,
        kl = D.a.bab1f8b0,
        bl = D.a.a52b03a5,
        _l = D.a.add55c97,
        hl = D.a.d7b8eba9,
        Fl = function (e) {
          var l = e.onEntriesRendered,
            n = e.showBlockedTweets,
            r = W()(void 0 !== X ? X : (X = a('0pBG')), e.user),
            t = Object(N.h)(),
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
                  key: kl,
                  label: kl,
                },
                { to: { pathname: '/'.concat(g, '/').concat(fl), query: i }, key: bl, label: bl },
                { to: { pathname: '/'.concat(g, '/').concat(yl), query: i }, key: _l, label: _l, onClick: e() },
                { to: { pathname: '/'.concat(g, '/').concat(ml), query: i }, key: hl, label: hl, onClick: e() },
              ]
            },
            y = { displayBlocked: n, fullName: u, screenName: g, userId: d }
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(A.a, null, function (e) {
              return o.a.createElement(ul.a, { accessibilityLabel: pl, links: m(e) })
            }),
            o.a.createElement(
              N.e,
              null,
              o.a.createElement(N.c, { exact: !0, path: '/intent/follow' }, o.a.createElement(cl, y)),
              o.a.createElement(N.c, { exact: !0, path: '/intent/user' }, o.a.createElement(cl, y)),
              o.a.createElement(
                N.c,
                { exact: !0, path: '/'.concat(sl.J) },
                o.a.createElement(cl, il()({}, y, { onEntriesRendered: l })),
              ),
              o.a.createElement(
                N.c,
                { exact: !0, path: '/'.concat(sl.J, '/').concat(fl) },
                o.a.createElement(cl, il()({}, y, { withReplies: !0 })),
              ),
              o.a.createElement(N.c, { exact: !0, path: '/'.concat(sl.J, '/').concat(yl) }, o.a.createElement(gl, y)),
              o.a.createElement(N.c, { exact: !0, path: '/'.concat(sl.J, '/').concat(ml) }, o.a.createElement(dl, y)),
            ),
          )
        },
        Sl = a('drnk'),
        vl = a('Irs7'),
        Kl = D.a.d834ab9c,
        El = Object(vl.a)(
          function (e) {
            var l = e.analytics,
              n = e.onConfirmProfileInterstitial,
              r = W()(void 0 !== $ ? $ : ($ = a('dVIa')), e.user).legacy.profile_interstitial_type,
              t = Object(Sl.a)(r),
              i = t.header,
              s = t.message
            o.a.useEffect(
              function () {
                l.scribeAction('impression')
              },
              [l],
            )
            return o.a.createElement(Xe, {
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
            var l = k()(void 0 !== ee ? ee : (ee = a('ZNc3')), e)
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
        Cl = D.a.gbf342a4,
        Dl = function (e) {
          var l = e.onEntriesRendered,
            n = e.user,
            r = W()(void 0 !== le ? le : (le = a('E4Mm')), n),
            t = r.legacy,
            i = t.description,
            s = t.entities,
            u = r.rest_id,
            c = void 0 === u ? '' : u
          if (!i) return null
          var d = Pl.a.descriptionTextParts(i, wl(s))
          return o.a.createElement(
            Ul.a,
            null,
            o.a.createElement(
              Ul.a,
              { style: Il.withheldMessageRoot },
              o.a.createElement(
                Ge.b,
                { align: 'center', size: 'title4', style: Il.withheldMessageHeader, weight: 'bold' },
                Cl,
              ),
              o.a.createElement(
                Ge.b,
                { align: 'center', color: 'gray700', dir: 'auto' },
                d.map(function (e, l) {
                  return o.a.createElement(Ll.b, {
                    key: 'user_'.concat(c, '_textpart_').concat(l),
                    linkify: !0,
                    part: e,
                  })
                }),
              ),
            ),
            o.a.createElement(Tl.a, null),
            o.a.createElement(Fl, { onEntriesRendered: l, user: r }),
          )
        },
        Il = Ze.a.create(function (e) {
          return {
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        Ol = D.a.c9a1cb5d,
        Al = D.a.e7b201dd,
        Rl = function () {
          return o.a.createElement(Xe, { header: Ol, message: Al })
        },
        xl = D.a.d09e12c4,
        Bl = function (e) {
          var l = W()(void 0 !== ae ? ae : (ae = a('iN7L')), e.user).legacy.screen_name
          Ye()('string' == typeof l, 'screenName must be a string')
          var n = o.a.createElement(
            D.a.I18NFormatMessage,
            { $i18n: 'c97724c2', screenName: l },
            o.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/14016' }, D.a.a58c8a4e),
          )
          return o.a.createElement(Xe, { header: xl, message: n })
        },
        Nl = D.a.g8475f82,
        Hl = function () {
          var e = o.a.createElement(
            D.a.I18NFormatMessage,
            { $i18n: 'f6fa2033' },
            o.a.createElement(Ge.b, { link: 'https://support.twitter.com/articles/18311' }, D.a.f3b1bdc1),
          )
          return o.a.createElement(Xe, { header: Nl, message: e })
        },
        Ml = D.a.gbf342a4,
        jl = function (e) {
          var l = W()(void 0 !== ne ? ne : (ne = a('vJP1')), e.user),
            n = l.legacy,
            r = n.description,
            t = n.entities,
            i = l.rest_id
          if (!r) return null
          var s = Pl.a.descriptionTextParts(r, wl(t)),
            u = o.a.createElement(
              Ge.b,
              { align: 'center', color: 'gray700', dir: 'auto' },
              s.map(function (e, l) {
                return o.a.createElement(Ll.b, { key: 'user_'.concat(i, '_textpart_').concat(l), linkify: !0, part: e })
              }),
            )
          return o.a.createElement(Xe, { header: Ml, message: u })
        },
        Ql = function (e) {
          var l = e.isNotFound,
            n = e.isOwnProfile,
            r = e.isProtectedFromViewer,
            t = e.isSuspended,
            i = e.onConfirmProfileInterstitial,
            s = e.onEntriesRendered,
            u = e.onShowBlockedTweets,
            c = e.shouldShowProfileInterstitial,
            d = e.showBlockedTweets,
            g = e.user,
            m = W()(void 0 !== re ? re : (re = a('iIq9')), g),
            y = (null == m ? void 0 : m.legacy) || {},
            f = y.blocked_by,
            p = y.blocking,
            k = y.withheld_scope
          return t
            ? o.a.createElement(Hl, null)
            : l
            ? o.a.createElement(Rl, null)
            : m
            ? k && n
              ? o.a.createElement(Dl, { onEntriesRendered: s, user: m })
              : k
              ? o.a.createElement(jl, { user: m })
              : c
              ? o.a.createElement(El, { onConfirmProfileInterstitial: i, user: m })
              : f
              ? o.a.createElement(ll, { user: m })
              : p && !d
              ? o.a.createElement(rl, { onShowBlockedTweets: u, user: m })
              : r
              ? o.a.createElement(Bl, { user: m })
              : o.a.createElement(Fl, { onEntriesRendered: s, showBlockedTweets: d, user: m })
            : null
        },
        Wl = a('I/ms'),
        ql = a('TIdA'),
        Vl = a('cHvH'),
        Gl = a('jhWN'),
        zl = ql.a.createLayoutCache(),
        Yl = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = W()(void 0 !== te ? te : (te = a('kVSq')), r),
            i = !l && n,
            s = i || !t.legacy.profile_image_url_https ? void 0 : t.legacy.profile_image_url_https
          return o.a.createElement(Vl.a, null, function (e) {
            var l = e.windowWidth >= Ze.a.theme.breakpoints.medium
            return o.a.createElement(Gl.a, {
              borderColor: 'cellBackground',
              borderWidth: l ? 'medium' : 'large',
              imageLayoutCache: zl,
              link: i ? void 0 : { pathname: '/'.concat(t.legacy.screen_name || '', '/photo') },
              size: 'custom',
              style: Wl.a.avatar,
              uri: s || void 0,
            })
          })
        },
        Jl = a('RCZO'),
        Zl = a('n4Eu'),
        Xl = a('cm6r'),
        $l = a('A91F'),
        ea = a('9Xij'),
        la = ql.a.createLayoutCache(),
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
            t = W()(void 0 !== ie ? ie : (ie = a('+PaE')), r),
            i = !l && n,
            s = aa(t.legacy.profile_banner_extensions),
            u = s && Zl.a.get(s),
            c = u ? Object(Jl.g)(u) : Ze.a.theme.colors.gray200,
            d = t.legacy.profile_banner_url
          return !i && d
            ? o.a.createElement(
                Xl.a,
                { accessibilityHidden: !0, link: '/'.concat(t.legacy.screen_name || '', '/header_photo') },
                o.a.createElement(ql.a, {
                  accessibilityLabel: '',
                  aspectMode: $l.a.exact(Ze.a.theme.aspectRatios.profileBanner),
                  backgroundColor: c,
                  image: d,
                  layoutCache: la,
                }),
              )
            : o.a.createElement(
                Ul.a,
                { style: Wl.a.banner },
                o.a.createElement(ea.a, {
                  ratio: Ze.a.theme.aspectRatios.profileBanner,
                  style: { backgroundColor: c },
                }),
              )
        },
        ra = a('3nOA'),
        ta = a('I57f'),
        ia = a('SOvA'),
        sa = a('vYiB'),
        oa = a('Y49K'),
        ua = a('/yvb'),
        ca = a('ACHU'),
        da = a('rsoE'),
        ga = a('vMjK'),
        ma = D.a.h63a5c3b,
        ya = function (e) {
          var l = e.buttonStyle,
            n = e.promotedContent,
            r = e.user,
            t = W()(void 0 !== se ? se : (se = a('+uag')), r),
            i = o.a.useMemo(
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
          return o.a.createElement(ua.a, {
            accessibilityLabel: ma,
            hoverLabel: { label: ma },
            icon: o.a.createElement(ca.a, null),
            renderMenu: function (e) {
              return o.a.createElement(ga.b, { onClose: e, promotedContent: n, user: i, view: 'profile' })
            },
            style: l,
            testID: da.a.userActions,
            type: 'primaryOutlined',
          })
        },
        fa = D.a.g7088266,
        pa = D.a.gd7acb84,
        ka = D.a.b7636014,
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
            u = W()(void 0 !== oe ? oe : (oe = a('hCMu')), s),
            c = Object(vl.b)(),
            d = u.legacy,
            g = d.blocked_by,
            m = d.blocking,
            y = d.can_dm,
            f = d.default_profile_image,
            p = d.description,
            k = d.following,
            b = d.notifications,
            _ = d.profile_banner_url,
            h = u.rest_id,
            F = h === r,
            S = g,
            v = n && !F,
            K = y && r && !m && !S && !v,
            E = r && u && !F && !v,
            w = 'primaryOutlined',
            U = k && r && !m && !S && !n,
            P = f && !p && !_,
            L = o.a.useCallback(
              function () {
                c.scribe({ element: 'message', action: 'click' }), r && l.push('/messages/'.concat(Object(ra.a)(h, r)))
              },
              [c, r, h, l],
            )
          return o.a.createElement(
            Ul.a,
            { style: ba.buttons },
            r && F
              ? o.a.createElement(
                  ua.a,
                  { link: P ? '/i/flow/setup_profile' : '/settings/profile', style: ba.lastButton, type: w },
                  P ? pa : fa,
                )
              : null,
            E && o.a.createElement(ya, { buttonStyle: ba.button, promotedContent: i, user: u }),
            !F &&
              K &&
              o.a.createElement(ua.a, {
                accessibilityLabel: ka,
                hoverLabel: { label: ka },
                icon: o.a.createElement(ia.a, null),
                onPress: L,
                style: ba.button,
                testID: oa.a.sendDMFromProfile,
                type: w,
              }),
            !F &&
              U &&
              o.a.createElement(ta.a, {
                allowPromptForPush: !0,
                isFollowing: !!b,
                style: ba.button,
                userId: u.rest_id,
              }),
            !F &&
              !S &&
              !v &&
              o.a.createElement(
                sa.a,
                { onOffscreenChange: t },
                o.a.createElement(Ce, { promotedContent: i, style: ba.lastButton, user: u }),
              ),
          )
        },
        ha = a('tOzk'),
        Fa = a('YeIG'),
        Sa = a('Je1/'),
        va = a('WWyu'),
        Ka = a('YUdS'),
        Ea = a('EjKN'),
        wa = D.a.a1ea2f12,
        Ua = D.a.g8191e77,
        Pa = function (e) {
          var l = e.day,
            a = e.month
          if (l && a) {
            var n = new Date()
            return a === n.getMonth() + 1 && l === n.getDate()
          }
        },
        La = void 0 !== ue ? ue : (ue = a('BdHD')),
        Ta = function (e) {
          var l,
            a = e.isOwnProfile,
            n = e.user,
            r = null === (l = W()(La, n).legacy_extended_profile) || void 0 === l ? void 0 : l.birthdate,
            t = o.a.useRef(),
            i = o.a.useCallback(function () {
              t.current && t.current.launch()
            }, [])
          return !r ||
            Object(Fa.a)(r) ||
            (r.visibility && 'Self' === r.visibility && r.year_visibility && 'Self' === r.year_visibility)
            ? null
            : Pa(r)
            ? o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(Sa.a, { Icon: Ka.a, onPress: i }, a ? wa : Ua),
                o.a.createElement(ha.a, {
                  setRef: function (e) {
                    t.current = e
                  },
                }),
              )
            : o.a.createElement(Sa.a, { Icon: Ea.a }, o.a.createElement(va.a, { birthdate: r, withBornPrefixText: !0 }))
        },
        Ca = a('uLiA'),
        Da = a('EJJl'),
        Ia = void 0 !== ce ? ce : (ce = a('GQYZ')),
        Oa = Ze.a.create(function (e) {
          return { description: { display: 'block', marginBottom: e.spaces.space12 } }
        }),
        Aa = function (e) {
          var l = e.isTranslatable,
            a = e.user,
            n = W()(Ia, a),
            r = n.legacy
          return r.description
            ? o.a.createElement(
                Ul.a,
                { style: Oa.description },
                o.a.createElement(Da.a, {
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
        Ra = void 0 !== de ? de : (de = a('SXQl')),
        xa = function (e) {
          var l = e.user,
            a = W()(Ra, l)
          return o.a.createElement(Aa, { isTranslatable: a.is_profile_translatable, user: a })
        },
        Ba = a('LhSm'),
        Na = a('KrGU'),
        Ha = a('I/9y'),
        Ma = void 0 !== ge ? ge : (ge = a('nmzZ')),
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
            i = W()(Ma, t),
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
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              o.a.Suspense,
              { fallback: o.a.createElement(Aa, { user: i }) },
              o.a.createElement(xa, { user: i }),
            ),
            o.a.createElement(
              Ul.a,
              { style: ja.details },
              o.a.createElement(
                Ge.b,
                { style: ja.detailsText, testID: Ca.a.profileHeaderItems },
                s.location
                  ? o.a.createElement(Sa.a, { Icon: Na.a }, o.a.createElement(Ge.b, null, i.legacy.location))
                  : null,
                u && u.url
                  ? o.a.createElement(
                      Sa.a,
                      { Icon: Ha.a, link: { pathname: u.url, external: !0 } },
                      u.display_url || u.url,
                    )
                  : null,
                o.a.createElement(
                  o.a.Suspense,
                  { fallback: null },
                  o.a.createElement(Ta, { isOwnProfile: r, user: i }),
                ),
                i.legacy.created_at ? o.a.createElement(Ba.a, { joinDate: i.legacy.created_at }) : null,
              ),
            ),
          )
        },
        Wa = a('W27K'),
        qa = Object(P.a)().propsFromActions(function () {
          return {
            addToast: w.b,
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: U.e.unmute,
          }
        }),
        Va = a('8Usl'),
        Ga = a('P2xQ'),
        za = D.a.cef4e8cf,
        Ya = D.a.ec294e62,
        Ja = D.a.df422dfe,
        Za = qa(function (e) {
          var l = e.addToast,
            n = e.createLocalApiErrorHandler,
            r = e.unmute,
            t = e.user,
            s = W()(void 0 !== me ? me : (me = a('gNV4')), t),
            u = o.a.useState(!1),
            c = i()(u, 2),
            d = c[0],
            g = c[1],
            m = s.legacy.screen_name
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Ge.b,
              { color: 'gray700', style: Xa.mute },
              Ja,
              ' ',
              o.a.createElement(
                Ge.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    g(!0)
                  },
                  style: Xa.unmuteButton,
                  testID: Va.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                Ga.g,
              ),
            ),
            d
              ? o.a.createElement(M.a, {
                  confirmButtonLabel: Ga.g,
                  headline: za({ screenName: m }),
                  onCancel: function () {
                    g(!1)
                  },
                  onConfirm: function () {
                    g(!1),
                      r(s.rest_id).then(function () {
                        return l({ text: Object(Ga.d)(m || void 0) })
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
            n = W()(void 0 !== ye ? ye : (ye = a('jUuT')), l)
          return n.badge
            ? o.a.createElement($a.a, { label: { badge: n.badge, description: n.description, url: n.url || void 0 } })
            : null
        },
        ln = function (e) {
          var l = e.isOwnProfile,
            n = e.isWithheld,
            r = e.user,
            t = W()(void 0 !== fe ? fe : (fe = a('7COa')), r),
            i = t.affiliates_highlighted_label,
            s = t.legacy,
            u = !(!s.name || !s.screen_name || (n && !l)),
            c = u ? s.name || '' : '@'.concat(s.screen_name || '')
          return o.a.createElement(
            Ul.a,
            { style: Wl.a.names },
            o.a.createElement(qe.a, {
              badgeContext: 'account',
              isProtected: n ? void 0 : s.protected,
              isVerified: n ? void 0 : s.verified,
              name: c,
              nameSize: 'headline1',
              screenName: u ? s.screen_name || '' : void 0,
              translatorType: n ? void 0 : s.translator_type || void 0,
              weight: 'heavy',
              withFollowsYou: s.followed_by && !n,
              withNameWrap: !0,
              withStackedLayout: !0,
            }),
            i && i.label ? o.a.createElement(en, { label: i.label }) : null,
          )
        },
        an = a('z+ta'),
        nn = a('wCd/'),
        rn = function (e) {
          var l = e.isOwnProfile,
            n = (e.loggedInUserId, e.user),
            r = W()(void 0 !== pe ? pe : (pe = a('lFTA')), n),
            t = r.legacy,
            i = t.followers_count,
            s = t.friends_count,
            u = t.screen_name
          return o.a.createElement(A.a, null, function (e) {
            return o.a.createElement(nn.a, {
              followersCount: i,
              friendsCount: s,
              onPress: e(),
              screenName: u || '',
              withLink: b({ isOwnProfile: l, user: r }),
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
            s,
            u,
            c,
            d,
            g,
            m,
            y = e.history,
            f = e.isOwnProfile,
            p = e.loggedInUserId,
            k = e.onFollowButtonOffscreen,
            b = e.promotedContent,
            _ = e.user,
            h = W()(void 0 !== ke ? ke : (ke = a('aOg7')), _),
            F = o.a.useState(!1),
            S = i()(F, 2),
            v = S[0],
            K = S[1],
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
              (null === (u = h.legacy) || void 0 === u ? void 0 : u.blocked_by) ||
              E ||
              ((null === (c = h.legacy) || void 0 === c ? void 0 : c.protected) &&
                !(null !== (d = h.legacy) && void 0 !== d && d.following)),
            L = null === (g = h.legacy) || void 0 === g ? void 0 : g.following,
            T = o.a.useRef(L)
          o.a.useEffect(
            function () {
              L && !T.current && K(!0), (T.current = L)
            },
            [L],
          )
          var C = o.a.useCallback(function () {
            K(!1)
          }, [])
          return o.a.createElement(
            Ul.a,
            null,
            o.a.createElement(na, { isOwnProfile: f, isWithheld: E, user: h }),
            o.a.createElement(
              Ul.a,
              { style: [Wl.a.content, tn.content, w && Wl.a.withheld] },
              o.a.createElement(
                Ul.a,
                { style: tn.avatarAndButtons },
                o.a.createElement(Yl, { isOwnProfile: f, isWithheld: E, user: h }),
                o.a.createElement(_a, {
                  history: y,
                  isWithheld: E,
                  loggedInUserId: p,
                  onFollowButtonOffscreen: k,
                  promotedContent: b,
                  user: h,
                }),
              ),
              o.a.createElement(ln, { isOwnProfile: f, isWithheld: E, user: h }),
              w ? null : o.a.createElement(Qa, { isOwnProfile: f, user: h }),
              U ? null : o.a.createElement(rn, { isOwnProfile: f, loggedInUserId: p, user: h }),
              P
                ? null
                : o.a.createElement(
                    Ul.a,
                    { style: tn.marginTopXSmall },
                    o.a.createElement(Wa.a, {
                      userId: h.rest_id,
                      userScreenName: (null === (m = h.legacy) || void 0 === m ? void 0 : m.screen_name) || '',
                    }),
                  ),
              h.legacy.muting ? o.a.createElement(Za, { user: h }) : null,
            ),
            v ? o.a.createElement(an.a, { onRemoveClusterFollow: C, userId: h.rest_id }) : null,
          )
        },
        on = function (e) {
          var l = e.avatarAccessibilityLabel
          return o.a.createElement(Vl.a, null, function (e) {
            e.windowWidth
            return o.a.createElement(
              Ul.a,
              { accessibilityState: { hidden: !0 }, style: Wl.a.avatar },
              o.a.createElement(Gl.a, { accessibilityLabel: l, size: 'custom' }),
            )
          })
        },
        un = function (e) {
          var l,
            n = e.avatarAccessibilityLabel,
            r = e.fullUser,
            t = e.restrictedUser,
            i = e.shouldDisplayUserActionSheet,
            s = W()(void 0 !== be ? be : (be = a('kdCF')), r),
            u = (s && s.legacy) || t
          return (
            u.name && u.screen_name ? (l = u.name) : u.screen_name && (l = '@'.concat(u.screen_name)),
            o.a.createElement(
              Ul.a,
              null,
              o.a.createElement(
                Ul.a,
                { style: Wl.a.banner },
                o.a.createElement(ea.a, { ratio: Ze.a.theme.aspectRatios.profileBanner }),
              ),
              o.a.createElement(
                Ul.a,
                { style: [Wl.a.content, Wl.a.withheld] },
                o.a.createElement(
                  Ul.a,
                  { style: Wl.a.avatarAndButton },
                  o.a.createElement(on, { avatarAccessibilityLabel: n }),
                  i && s && o.a.createElement(ya, { buttonStyle: Wl.a.menuSheetButton, user: s }),
                ),
                o.a.createElement(
                  Ul.a,
                  { style: Wl.a.names },
                  o.a.createElement(qe.a, {
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
        cn = D.a.h1658541,
        dn = D.a.b5447710,
        gn = function (e) {
          var l = e.history,
            n = e.isNotFound,
            r = e.isOwnProfile,
            t = e.isSuspended,
            i = e.location,
            s = e.loggedInUserId,
            u = e.onFollowButtonOffscreen,
            c = e.promotedContent,
            d = e.screenName,
            g = e.shouldShowProfileInterstitial,
            m = e.user,
            y = W()(void 0 !== _e ? _e : (_e = a('Ge0p')), m)
          if (!r && (t || n || g)) {
            var f,
              p = (null == y || null === (f = y.legacy) || void 0 === f ? void 0 : f.name) || void 0,
              k = { name: p, screen_name: d || '' },
              b = n ? dn : t ? cn : p
            return o.a.createElement(un, {
              avatarAccessibilityLabel: b,
              fullUser: y,
              restrictedUser: k,
              shouldDisplayUserActionSheet: !t && !n,
            })
          }
          return y
            ? o.a.createElement(sn, {
                history: l,
                isOwnProfile: r,
                location: i,
                loggedInUserId: s,
                onFollowButtonOffscreen: u,
                promotedContent: c,
                user: y,
              })
            : null
        },
        mn = a('ipry'),
        yn = a('mw9i'),
        fn = a('zfvc'),
        pn = D.a.fa98627a,
        kn = D.a.c6ea308b,
        bn = D.a.ccc9153f,
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
          var o = !!i.legacy.withheld_scope,
            u = i.rest_id === r,
            c = n || a || (o && !u),
            d = !(!i.legacy.protected || u || i.legacy.following),
            g = !1
          if (i.legacy.profile_interstitial_type) {
            var m = i.legacy.blocking && !t,
              y = i.legacy.blocked_by,
              f =
                (i.legacy.profile_interstitial_type === mn.a.SensitiveMedia ||
                  i.legacy.profile_interstitial_type === mn.a.OffensiveProfileContent) &&
                (i.legacy.following || l)
            g = !(u || d || m || y || s || f)
          }
          return {
            isWithheld: o,
            isOwnProfile: u,
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
            ? o.a.createElement(
                fn.b,
                { animateMount: !0, show: n, type: 'fade' },
                o.a.createElement(Ce, { promotedContent: l, user: e }),
              )
            : void 0
        },
        vn = function (e, l, a, n, r) {
          if (e) {
            var t = !!(n || a || e.legacy.blocked_by || (e.legacy.blocking && !r))
            return o.a.createElement(Be.a, {
              hideMediaModule: t,
              userId: e.rest_id,
              userScreenName: e.legacy.screen_name || void 0,
              withTopicsToFollow: b({ user: e, isOwnProfile: l }),
            })
          }
          return o.a.createElement(f.a, null)
        },
        Kn = function (e) {
          var l = e.displaySensitiveMedia,
            n = e.fetchStatus,
            r = e.isNotFound,
            t = e.isRefreshing,
            s = e.isSuspended,
            u = e.onRefresh,
            c = e.onRetry,
            d = e.screenName,
            f = e.user,
            p = Object(N.g)(),
            k = Object(N.h)(),
            b = Fn(k),
            v = o.a.useRef(!0),
            K = o.a.useRef(!0),
            E = o.a.useContext(y.a).loggedInUserId,
            w = o.a.useState(!1),
            U = i()(w, 2),
            P = U[0],
            L = U[1],
            T = o.a.useState(!1),
            C = i()(T, 2),
            D = C[0],
            I = C[1],
            O = o.a.useState(!1),
            A = i()(O, 2),
            R = A[0],
            x = A[1],
            B = W()(void 0 !== he ? he : (he = a('kcMG')), f),
            H = _n({
              user: B,
              loggedInUserId: E,
              isSuspended: s,
              isNotFound: r,
              showBlockedTweets: P,
              displaySensitiveMedia: l,
              userProfileInterstitialDismissed: R,
            }),
            M = H.isInvalid,
            j = H.isOwnProfile,
            Q = H.isProtectedFromViewer,
            q = H.isWithheld,
            V = H.shouldShowProfileInterstitial,
            G = B && !B.legacy.blocking && !B.legacy.blocked_by && !j && !Q && !s && !r && !q && !V
          o.a.useEffect(
            function () {
              if (n === g.a.FAILED) K.current = !1
              else if (K.current && G) {
                m.d('profile', { source: 'graphql' }), (K.current = !1)
              }
            },
            [n, G],
          )
          var z = o.a.useCallback(function (e) {
              var l = e.entries
              if ((e.fetchStatus === g.a.FAILED && (v.current = !1), v.current && l.length)) {
                var a = l.some(function (e) {
                  return e.type === _.b.Tweet
                })
                if (((v.current = !1), a)) {
                  m.c('profile', { source: 'graphql' })
                }
              }
            }, []),
            Y = B ? kn({ screenName: B.legacy.screen_name, fullName: B.legacy.name }) : void 0,
            J = j ? '' : '@'.concat((null == B ? void 0 : B.legacy.screen_name) || d || '', ' '),
            Z = o.a.useMemo(
              function () {
                return function () {
                  return { defaultText: J }
                }
              },
              [J],
            ),
            X = M ? null : o.a.createElement(S.a, { getLocationState: Z, history: p }),
            $ = o.a.useCallback(function (e) {
              var l = e.isOffscreen
              I(l)
            }, []),
            ee = function () {
              x(!0)
            },
            le = function () {
              L(!0)
            },
            ae = o.a.useCallback(
              function () {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(gn, {
                    history: p,
                    isNotFound: r,
                    isOwnProfile: j,
                    isSuspended: s,
                    location: k,
                    loggedInUserId: E,
                    onFollowButtonOffscreen: $,
                    promotedContent: b,
                    screenName: d,
                    shouldShowProfileInterstitial: V,
                    user: B,
                  }),
                  o.a.createElement(Ql, {
                    isNotFound: r,
                    isOwnProfile: j,
                    isProtectedFromViewer: Q,
                    isSuspended: s,
                    onConfirmProfileInterstitial: ee,
                    onEntriesRendered: z,
                    onShowBlockedTweets: le,
                    shouldShowProfileInterstitial: V,
                    showBlockedTweets: P,
                    user: B,
                  }),
                )
              },
              [z, $, p, r, j, Q, s, k, E, b, d, V, P, B],
            ),
            ne = o.a.useCallback(
              function () {
                var e = s || r
                return o.a.createElement(
                  Ne.a,
                  { isRefreshing: t, onRefresh: u },
                  o.a.createElement(
                    Ul.a,
                    { style: En.containerGrow },
                    o.a.createElement(
                      yn.a,
                      null,
                      o.a.createElement(F.a, {
                        accessibilityLabel: bn({ screenName: d }),
                        fetchStatus: e ? g.a.LOADED : n,
                        onRequestRetry: c,
                        render: ae,
                      }),
                    ),
                  ),
                )
              },
              [d, t, s, r, n, u, c, ae],
            )
          return o.a.createElement(He.a, {
            backLocation: '/',
            composeOptions: { defaultText: J },
            documentTitle: Y,
            history: p,
            primaryContent: o.a.createElement(
              h.a,
              { fab: X },
              o.a.createElement(xe, { user: B }),
              o.a.createElement(F.a, {
                accessibilityLabel: bn({ screenName: d }),
                fetchStatus: B || M ? g.a.LOADED : n,
                onRequestRetry: c,
                render: ne,
              }),
              hn(k)
                ? o.a.createElement(De.a, { history: p, location: k, userId: null == B ? void 0 : B.rest_id })
                : null,
            ),
            rightControl: Sn(B, b, j, D),
            sidebarContent: vn(B, j, Q, V, P),
            subtitle: B && !M && n === g.a.LOADED ? o.a.createElement(We, { location: k, user: B }) : void 0,
            title: B && !M ? o.a.createElement(Ve, { user: B }) : pn,
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
        Cn = void 0 !== Fe ? Fe : (Fe = a('DRvb')),
        Dn = Object(wn.b)(Cn, { errorConfig: { context: 'USER_PROFILE_SCREEN', options: u.a } }),
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
            })({ location: Object(N.h)(), params: Object(N.i)() }),
            n = o.a.useState(!1),
            r = i()(n, 2),
            t = r[0],
            s = r[1],
            u = Tn()(),
            m = o.a.useMemo(
              function () {
                return { screenName: Object(c.a)(a) }
              },
              [a],
            ),
            y = function () {
              s(!0),
                Pn()(u, Cn, { screenName: a })
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
          return o.a.createElement(Dn, {
            render: function (e) {
              var n = e.data,
                r = e.error,
                i = e.fetchStatus,
                s = e.retry,
                u = null == n ? void 0 : n.user,
                c = !!r && Object(E.c)(r, E.a.OtherUserSuspended),
                m = !!r && Object(E.c)(r, E.a.GenericUserNotFound),
                f = function () {
                  s()
                }
              return o.a.createElement(d.a, { userId: null == u ? void 0 : u.rest_id }, function (e) {
                var n = e.scribeNamespace
                return o.a.createElement(Kn, {
                  displaySensitiveMedia: l,
                  fetchStatus: Object(g.b)(i, !!u),
                  isNotFound: m,
                  isRefreshing: t,
                  isSuspended: c,
                  onRefresh: y,
                  onRetry: f,
                  screenName: a,
                  scribeNamespace: n,
                  user: u || null,
                })
              })
            },
            variables: m,
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
