;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    '+PaE': function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    '+uag': function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    '0pBG': function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    '21nk': function (e, l, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        t = n('yLYC'),
        i = n('Ud88'),
        s = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        o = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        u = o.fetchQueryDeduped,
        c = o.fetchQuery
      e.exports = function (e, l, n) {
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
          k.request.node.params.name !== l.name && a(!1),
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
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = c(d, k)
          o = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && d === l.environment ? y.ifEmpty(b) : (l.environment, b),
            fetchKey: g,
            fetchPolicy: m,
            query: k,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(o)
      }
    },
    '23An': function (e, l, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        t = a.useRef
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
    '66Bp': function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    '7COa': function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    BdHD: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    D0zN: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    DRvb: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        r,
        t,
        i,
        s,
        o,
        u,
        c,
        d = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
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
            argumentDefinitions: a,
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
    E4Mm: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    GQYZ: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
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
                            (a = {
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
                                a,
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
    Ge0p: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    P4CI: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    SXQl: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    ZNc3: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        kind: 'InlineDataFragment',
        name: 'formatUserEntities_entities',
        hash: '37b1b21c4aa1743040c79e7b121cf759',
      }
      l.default = a
    },
    aOg7: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    bCEw: function (e, l, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        t = n('Ud88'),
        i = n('aQQo'),
        s = i.loadQuery,
        o = i.useTrackLoadQueryInRender,
        u = n('ERkP'),
        c = u.useCallback,
        d = u.useEffect,
        g = u.useRef,
        m = u.useState,
        y = n('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function p(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== y(e).params.metadata.live
      }
      e.exports = function (e, l) {
        var n = null != l ? l : f,
          i = t()
        o()
        var u = r(),
          y = g(new Set([n])),
          k = m(function () {
            return n
          }),
          b = k[0],
          _ = k[1],
          h = m(function () {
            return n
          }),
          F = h[0],
          S = h[1]
        n !== F && (y.current.add(n), S(n), _(n))
        var v = c(
            function () {
              u.current && (y.current.add(f), _(f))
            },
            [u],
          ),
          K = c(
            function (l, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (u.current) {
                var r,
                  t = s(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : i, e, l, a)
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
                var n,
                  r = (0, a.default)(l)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var t = n.value
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
                  n = (0, a.default)(y.current)
                try {
                  for (n.s(); !(l = n.n()).done; ) {
                    var r = l.value
                    'NullQueryReference' !== r.kind &&
                      (p(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (t) {
                  n.e(t)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, K, v]
        )
      }
    },
    dVIa: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    eH5D: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    gNV4: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    hCMu: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    iIq9: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    iN7L: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    jUuT: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
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
              selections: [(a = { alias: null, args: null, kind: 'ScalarField', name: 'url', storageKey: null })],
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
                a,
              ],
              storageKey: null,
            },
          ],
          type: 'HighlightedUserLabel',
          abstractKey: null,
        }
      ;(r.hash = '771c8f366e4c2e2fa28739a713386507'), (l.default = r)
    },
    kVSq: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    kcMG: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
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
                (a = { alias: null, args: null, kind: 'ScalarField', name: 'blocked_by', storageKey: null }),
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
                  selections: [a, t, r],
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
    kdCF: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    lFTA: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    n0Rl: function (e, l, n) {
      'use strict'
      n.d(l, 'b', function () {
        return N
      })
      n('OZaJ')
      var a = n('ddV6'),
        r = n.n(a),
        t = n('VrFO'),
        i = n.n(t),
        s = n('Y9Ll'),
        o = n.n(s),
        u = n('1Pcy'),
        c = n.n(u),
        d = n('5Yy7'),
        g = n.n(d),
        m = n('N+ot'),
        y = n.n(m),
        f = n('AuHH'),
        p = n.n(f),
        k = n('KEM+'),
        b = n.n(k),
        _ = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        h = n('pXBW'),
        F = n('6/RC'),
        S = n('UIzd'),
        v = n.n(S),
        K = n('kGix')
      n.d(l, 'a', function () {
        return K.a
      })
      var E = n('fs1G'),
        w = n('0KEI'),
        U = n('lU4h'),
        P = n.n(U),
        L = n('21nk'),
        T = n.n(L),
        C = n('bCEw'),
        D = n.n(C),
        I = n('Ud88'),
        O = n.n(I)
      function A(e) {
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
          var n,
            a = p()(e)
          if (l) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return y()(this, n)
        }
      }
      var R = function (e) {
          return (0, e.render)({ fetchStatus: K.a.LOADING, data: null, error: null, retry: E.a })
        },
        x = (function (e) {
          g()(n, e)
          var l = A(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), t = 0; t < a; t++) r[t] = arguments[t]
            return (e = l.call.apply(l, [this].concat(r))), b()(c()(e), 'state', { error: null }), e
          }
          return (
            o()(
              n,
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
            n
          )
        })(_.Component),
        B = function (e) {
          var l = e.query,
            n = e.queryRef,
            a = e.render,
            r = T()(l, n)
          return a({ fetchStatus: K.a.LOADED, data: r, error: null, retry: E.a })
        },
        N = function (e, l) {
          if (F.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                t = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                s = n.variables,
                o = D()(e),
                u = r()(o, 2),
                c = u[0],
                d = u[1],
                g = Object(w.useCreateLocalApiErrorHandler)(l.errorConfig.context),
                m = P()(s),
                y = r()(m, 1)[0],
                f = _.useCallback(
                  function () {
                    d(y, { fetchPolicy: 'network-only' })
                  },
                  [d, y],
                )
              return (
                _.useLayoutEffect(
                  function () {
                    d(y, { fetchPolicy: t })
                  },
                  [t, d, y],
                ),
                c
                  ? _.createElement(
                      _.Suspense,
                      { fallback: _.createElement(R, { render: i }) },
                      _.createElement(
                        x,
                        { errorHandler: g(l.errorConfig.options || {}), key: c.fetchKey, retry: f },
                        function (l, n) {
                          return l
                            ? i({ fetchStatus: K.a.FAILED, error: l, data: null, retry: n })
                            : _.createElement(B, { query: e, queryRef: c, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var t = a.render,
              i = a.variables,
              s = O()(),
              o = Object(w.useCreateLocalApiErrorHandler)(l.errorConfig.context),
              u = P()(i),
              c = r()(u, 1)[0],
              d = n.get(s)
            if (d) return d
            var g = _.lazy(function () {
              return v()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return t({ fetchStatus: K.a.LOADED, data: e, error: null, retry: E.a })
                  },
                  function (e) {
                    return e instanceof h.a
                      ? (o(l.errorConfig.options || {})(e),
                        t({ fetchStatus: K.a.FAILED, data: null, error: e, retry: E.a }))
                      : _.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(s, e).get.bind(n, s) }
                })
            })
            return _.createElement(_.Suspense, null, _.createElement(g, null))
          }
        }
    },
    nmzZ: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    sLDr: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    vInD: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    vJP1: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
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
      l.default = a
    },
    x3bd: function (e, l, n) {
      'use strict'
      n.r(l),
        n.d(l, 'userProfileQuery', function () {
          return Ta
        }),
        n.d(l, 'UserProfileQueryRenderer', function () {
          return Ca
        }),
        n.d(l, 'UserProfileScreenContainer', function () {
          return Da
        })
      var a,
        r,
        t = n('ddV6'),
        i = n.n(t),
        s = n('ERkP'),
        o = n('GOQE'),
        u = n('rZeG'),
        c = n('txMZ'),
        d = n('kGix'),
        g = (n('7x/C'), n('lTEL'), n('kYxP'), n('5BYb'), n('ho0z'), n('jQ3i'), n('x4t0'), n('aeN7')),
        m = n('v6aA'),
        y = n('es0u'),
        f = (n('enFi'), n('Hsf0')),
        p = n.n(f),
        k = function (e) {
          var l,
            r,
            t,
            i = e.isOwnProfile,
            s = e.user,
            o = p()(void 0 !== a ? a : (a = n('yvH6')), s),
            u = null === (l = o.legacy) || void 0 === l ? void 0 : l.blocked_by,
            c =
              (null === (r = o.legacy) || void 0 === r ? void 0 : r.protected) &&
              !(null !== (t = o.legacy) && void 0 !== t && t.following)
          return i || (!c && !u)
        },
        b = n('8UdT'),
        _ = n('dwig'),
        h = n('v//M'),
        F = n('0+qk'),
        S = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        v = n.n(S),
        K = n('k49u'),
        E = n('1YZw'),
        w = n('G6rE'),
        U = n('rxPX'),
        P = n('0KEI'),
        L = Object(U.a)()
          .propsFromActions(function () {
            return {
              addToast: E.b,
              cancelPendingFollow: w.e.cancelPendingFollow,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'FOLLOW_USER_BUTTON_RELAY',
              ),
              follow: w.e.follow,
              unblock: w.e.unblock,
              unfollow: w.e.unfollow,
            }
          })
          .withAnalytics(),
        T = n('3XMw'),
        C = n.n(T),
        D = n('Tp1h'),
        I = n('Rp9C'),
        O = n('Jkc4'),
        A = n('WVvL'),
        R = n('u0B7'),
        x = n('tJZD'),
        B = n('Ty5D'),
        N = n('PSpH'),
        H = n('eb3s'),
        M = n('CGyZ'),
        j = n('jAXQ'),
        Q = n.n(j)
      function W(e, l) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          l &&
            (a = a.filter(function (l) {
              return Object.getOwnPropertyDescriptor(e, l).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function q(e) {
        for (var l = 1; l < arguments.length; l++) {
          var n = null != arguments[l] ? arguments[l] : {}
          l % 2
            ? W(Object(n), !0).forEach(function (l) {
                v()(e, l, n[l])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (l) {
                Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l))
              })
        }
        return e
      }
      var V,
        G,
        z,
        Y,
        Z,
        J,
        X,
        $,
        ee,
        le,
        ne,
        ae,
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
        Fe = C.a.hbe4feb4,
        Se = C.a.df4c86bf,
        ve = C.a.bba40ffa,
        Ke = C.a.f558829d,
        Ee = C.a.a6941096,
        we = C.a.j24c37b2,
        Ue = C.a.if8cd2a3,
        Pe = C.a.b597226f,
        Le = L(function (e) {
          var l = e.addToast,
            a = e.analytics,
            t = e.cancelPendingFollow,
            o = e.createLocalApiErrorHandler,
            u = e.follow,
            c = e.promotedContent,
            d = e.showRelationshipChangeConfirmation,
            g = e.size,
            y = e.style,
            f = e.unblock,
            p = e.unfollow,
            k = e.user,
            b = s.useState({ showDialog: !1 }),
            _ = i()(b, 2),
            h = _[0],
            F = _[1],
            S = Object(B.h)(),
            E = s.useMemo(function () {
              var e
              return q(
                q({}, N.a),
                {},
                ((e = {}),
                v()(e, K.a.UserMustBeAlcoholAgeScreened, {
                  customAction: function () {
                    F({ showDialog: !0, dialogText: Ue, dialogHeadline: ve })
                  },
                }),
                v()(e, K.a.CannotFollowFromCountry, {
                  customAction: function () {
                    F({ showDialog: !0, dialogText: Ee, dialogHeadline: ve })
                  },
                }),
                v()(e, K.a.BirthdateRequired, {
                  customAction: function () {
                    F({ showDialog: !0, dialogText: Ke, dialogHeadline: Se })
                  },
                }),
                e),
              )
            }, []),
            w = Q()(void 0 !== r ? r : (r = n('P4CI')), k),
            U = w.legacy,
            P = U.blocking,
            L = U.follow_request_sent,
            T = U.followed_by,
            C = U.following,
            j = U.name,
            W = U.screen_name,
            V = w.rest_id,
            G = w.smart_blocking,
            z = !!s.useContext(m.a).loggedInUserId,
            Y = W ? '/'.concat(W) : '',
            Z = V
              ? {
                  follow: A.a.follow(V),
                  unfollow: A.a.unfollow(V),
                  cancel: A.a.cancel(V),
                  block: A.a.block(V),
                  unblock: A.a.unblock(V),
                }
              : void 0,
            J = function (e) {
              var l = { id_str: V, name: e, following: C, followed_by: T },
                n = V ? [I.a.getUserItem(l, c)] : [],
                r = S.query && S.query.screen_name ? { items: n, context: 'profile_intent' } : { items: n }
              return a.scribe({ action: e, data: r })
            },
            X = s.useCallback(function () {
              F({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 })
            }, []),
            $ = function () {
              V && t(V).catch(o({ defaultToast: { text: Pe }, showToast: !0 }))
            },
            ee = function () {
              V &&
                u(V, { promotedContent: c }).then(function () {
                  return w.legacy.protected && l({ text: Fe({ screenName: W }) }), J('follow')
                }, o(q(q({}, E), {}, { showToast: !0 })))
            },
            le = function () {
              J('follow_attempt')
            },
            ne = function () {
              V && f(V, { promotedContent: c }).catch(o(R.a))
            },
            ae = function () {
              if (V) return p(V, { promotedContent: c }).catch(o(x.a)), J('unfollow')
            }
          return j && W
            ? s.createElement(
                s.Fragment,
                null,
                h.showDialog
                  ? s.createElement(H.a, {
                      confirmButtonLabel: we,
                      headline: h.dialogHeadline,
                      onCancel: X,
                      onConfirm: X,
                      text: h.dialogText,
                      withCancelButton: !1,
                    })
                  : null,
                s.createElement(
                  O.a,
                  { displayMode: D.a.follow, postLoginPath: Y, userFullName: j, userId: V },
                  function (e) {
                    return s.createElement(M.a, {
                      isAutoblocking: !!G,
                      isBlocking: P,
                      isFollowRequestSent: L,
                      isFollowing: C,
                      name: W,
                      onCancelPendingFollow: e($),
                      onFollow: e(ee, le),
                      onUnblock: e(ne),
                      onUnfollow: e(ae),
                      showRelationshipChangeConfirmation: z && d,
                      size: g,
                      style: y,
                      testIDs: Z,
                      type: 'user',
                    })
                  },
                ),
              )
            : null
        }),
        Te = Le,
        Ce = n('iFPY'),
        De = (n('jQ/y'), n('s4rk')),
        Ie = n('zI2C'),
        Oe = n('rJoH'),
        Ae = C.a.d67658c0,
        Re = function (e) {
          var l = e.user,
            a = Q()(void 0 !== V ? V : (V = n('vInD')), l),
            r = a ? 'twitter://user?screen_name='.concat(a.legacy.screen_name || '') : void 0,
            t = a ? 'https://twitter.com/'.concat(a.legacy.screen_name || '') : void 0,
            i = a ? Ae({ fullName: a.legacy.name, screenName: a.legacy.screen_name }) : void 0
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(Oe.a, {
              canonical: t,
              description: (null == a ? void 0 : a.legacy.description) || '',
              image: (null == a ? void 0 : a.legacy.profile_image_url_https) || '',
              title: i,
              type: 'profile',
            }),
            s.createElement(Ie.a, { deepLink: r }),
            t ? s.createElement(De.a, { canonical: t }) : null,
          )
        },
        xe = n('jS2K'),
        Be = n('IG4P'),
        Ne = n('VS6U'),
        He = (n('vrRf'), n('2G9S'), n('Qayx')),
        Me = 'likes',
        je = 'media',
        Qe = function (e) {
          var l = e.user,
            a = Q()(void 0 !== G ? G : (G = n('D0zN')), l).legacy,
            r = (a.screen_name || '').toLowerCase(),
            t = location.pathname.toLowerCase()
          return t.indexOf('/'.concat(r, '/').concat(Me)) > -1
            ? s.createElement(He.a, { count: a.favourites_count, type: 'likes' })
            : t.indexOf('/'.concat(r, '/').concat(je)) > -1
            ? s.createElement(He.a, { count: a.media_count, type: 'media' })
            : s.createElement(He.a, { count: a.statuses_count, type: 'tweets' })
        },
        We = n('jV+4'),
        qe = function (e) {
          var l = e.user,
            a = Q()(void 0 !== z ? z : (z = n('66Bp')), l)
          return s.createElement(We.a, {
            isProtected: a.legacy.protected,
            isVerified: a.legacy.verified,
            name: a.legacy.name || void 0,
            screenName: a.legacy.screen_name || void 0,
            weight: 'heavy',
            withScreenName: !1,
          })
        },
        Ve = n('t62R'),
        Ge = n('tI3i'),
        ze = n.n(Ge),
        Ye = n('FIs5'),
        Ze = n('rHpw'),
        Je = function (e) {
          var l = e.buttonText,
            n = e.header,
            a = e.message,
            r = e.onButtonPress
          return s.createElement(Ye.a, {
            buttonText: l,
            buttonType: 'brandOutlined',
            header: n,
            message: a,
            onButtonPress: r,
            style: Xe.root,
          })
        },
        Xe = Ze.a.create(function (e) {
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
        $e = C.a.ica87fde,
        el = function (e) {
          var l = Q()(void 0 !== Y ? Y : (Y = n('sLDr')), e.user).legacy.screen_name
          ze()('string' == typeof l, 'screenName must be defined')
          var a = s.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'ccade2e6', screenName: l },
            s.createElement(Ve.b, { link: 'https://support.twitter.com/articles/20172060' }, C.a.de078c23),
          )
          return s.createElement(Je, { header: $e, message: a })
        },
        ll = C.a.eeab4adf,
        nl = C.a.e79ed125,
        al = function (e) {
          var l = e.onShowBlockedTweets,
            a = Q()(void 0 !== Z ? Z : (Z = n('eH5D')), e.user).legacy.screen_name
          ze()('string' == typeof a, 'screenName must be a string')
          var r = nl({ screenName: a }),
            t = s.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'e645092a', screenName: a },
              s.createElement(Ve.b, { link: 'https://support.twitter.com/articles/117063' }, C.a.f6a72a2a),
            )
          return s.createElement(Je, { buttonText: ll, header: r, message: t, onButtonPress: l })
        },
        rl = n('97Jx'),
        tl = n.n(rl),
        il = (n('JtPf'), n('87if'), n('Y6L+')),
        sl = n('wytG'),
        ol = n('k/OQ'),
        ul = Object(sl.a)(function () {
          return Promise.all([n.e(0), n.e(234)]).then(n.bind(null, '8KtR'))
        }),
        cl = Object(sl.a)(function () {
          return Promise.all([n.e(0), n.e(234)]).then(n.bind(null, 'ivpD'))
        }),
        dl = Object(sl.a)(function () {
          return Promise.all([n.e(0), n.e(234)]).then(n.bind(null, 'ylAD'))
        }),
        gl = 'likes',
        ml = 'media',
        yl = 'with_replies',
        fl = C.a.a2811f96,
        pl = C.a.bab1f8b0,
        kl = C.a.a52b03a5,
        bl = C.a.add55c97,
        _l = C.a.d7b8eba9,
        hl = function (e) {
          var l = e.onEntriesRendered,
            a = e.showBlockedTweets,
            r = Q()(void 0 !== J ? J : (J = n('0pBG')), e.user),
            t = Object(B.h)(),
            i = t.query,
            o = r.legacy,
            u = o.name,
            c = o.screen_name,
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
                  key: pl,
                  label: pl,
                },
                { to: { pathname: '/'.concat(g, '/').concat(yl), query: i }, key: kl, label: kl },
                { to: { pathname: '/'.concat(g, '/').concat(ml), query: i }, key: bl, label: bl, onClick: e() },
                { to: { pathname: '/'.concat(g, '/').concat(gl), query: i }, key: _l, label: _l, onClick: e() },
              ]
            },
            y = { displayBlocked: a, fullName: u, screenName: g, userId: d }
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(O.a, null, function (e) {
              return s.createElement(ol.a, { accessibilityLabel: fl, links: m(e) })
            }),
            s.createElement(
              B.e,
              null,
              s.createElement(B.c, { exact: !0, path: '/intent/follow' }, s.createElement(ul, y)),
              s.createElement(B.c, { exact: !0, path: '/intent/user' }, s.createElement(ul, y)),
              s.createElement(
                B.c,
                { exact: !0, path: '/'.concat(il.I) },
                s.createElement(ul, tl()({}, y, { onEntriesRendered: l })),
              ),
              s.createElement(
                B.c,
                { exact: !0, path: '/'.concat(il.I, '/').concat(yl) },
                s.createElement(ul, tl()({}, y, { withReplies: !0 })),
              ),
              s.createElement(B.c, { exact: !0, path: '/'.concat(il.I, '/').concat(ml) }, s.createElement(dl, y)),
              s.createElement(B.c, { exact: !0, path: '/'.concat(il.I, '/').concat(gl) }, s.createElement(cl, y)),
            ),
          )
        },
        Fl = n('drnk'),
        Sl = n('Irs7'),
        vl = C.a.d834ab9c,
        Kl = Object(Sl.a)(
          function (e) {
            var l = e.analytics,
              a = e.onConfirmProfileInterstitial,
              r = Q()(void 0 !== X ? X : (X = n('dVIa')), e.user).legacy.profile_interstitial_type,
              t = Object(Fl.a)(r),
              i = t.header,
              o = t.message
            s.useEffect(
              function () {
                l.scribeAction('impression')
              },
              [l],
            )
            return s.createElement(Je, {
              buttonText: vl,
              header: i,
              message: o,
              onButtonPress: function () {
                a(), l.scribeAction('click')
              },
            })
          },
          { section: 'profile_interstitial' },
        ),
        El =
          (n('z84I'),
          n('M+/F'),
          function (e) {
            var l = p()(void 0 !== $ ? $ : ($ = n('ZNc3')), e)
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
        wl = n('MWbm'),
        Ul = n('Q0VY'),
        Pl = n('FiRh'),
        Ll = n('0yYu'),
        Tl = C.a.gbf342a4,
        Cl = function (e) {
          var l = e.onEntriesRendered,
            a = e.user,
            r = Q()(void 0 !== ee ? ee : (ee = n('E4Mm')), a),
            t = r.legacy,
            i = t.description,
            o = t.entities,
            u = r.rest_id,
            c = void 0 === u ? '' : u
          if (!i) return null
          var d = Ul.a.descriptionTextParts(i, El(o))
          return s.createElement(
            wl.a,
            null,
            s.createElement(
              wl.a,
              { style: Dl.withheldMessageRoot },
              s.createElement(
                Ve.b,
                { align: 'center', size: 'title4', style: Dl.withheldMessageHeader, weight: 'bold' },
                Tl,
              ),
              s.createElement(
                Ve.b,
                { align: 'center', color: 'gray700', dir: 'auto' },
                d.map(function (e, l) {
                  return s.createElement(Pl.b, { key: 'user_'.concat(c, '_textpart_').concat(l), linkify: !0, part: e })
                }),
              ),
            ),
            s.createElement(Ll.a, null),
            s.createElement(hl, { onEntriesRendered: l, user: r }),
          )
        },
        Dl = Ze.a.create(function (e) {
          return {
            withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 },
            withheldMessageHeader: { paddingBottom: e.spaces.space4 },
          }
        }),
        Il = C.a.c9a1cb5d,
        Ol = C.a.e7b201dd,
        Al = function () {
          return s.createElement(Je, { header: Il, message: Ol })
        },
        Rl = C.a.d09e12c4,
        xl = function (e) {
          var l = Q()(void 0 !== le ? le : (le = n('iN7L')), e.user).legacy.screen_name
          ze()('string' == typeof l, 'screenName must be a string')
          var a = s.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'c97724c2', screenName: l },
            s.createElement(Ve.b, { link: 'https://support.twitter.com/articles/14016' }, C.a.a58c8a4e),
          )
          return s.createElement(Je, { header: Rl, message: a })
        },
        Bl = C.a.g8475f82,
        Nl = function () {
          var e = s.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'f6fa2033' },
            s.createElement(Ve.b, { link: 'https://support.twitter.com/articles/18311' }, C.a.f3b1bdc1),
          )
          return s.createElement(Je, { header: Bl, message: e })
        },
        Hl = C.a.gbf342a4,
        Ml = function (e) {
          var l = Q()(void 0 !== ne ? ne : (ne = n('vJP1')), e.user),
            a = l.legacy,
            r = a.description,
            t = a.entities,
            i = l.rest_id
          if (!r) return null
          var o = Ul.a.descriptionTextParts(r, El(t)),
            u = s.createElement(
              Ve.b,
              { align: 'center', color: 'gray700', dir: 'auto' },
              o.map(function (e, l) {
                return s.createElement(Pl.b, { key: 'user_'.concat(i, '_textpart_').concat(l), linkify: !0, part: e })
              }),
            )
          return s.createElement(Je, { header: Hl, message: u })
        },
        jl = function (e) {
          var l = e.isNotFound,
            a = e.isOwnProfile,
            r = e.isProtectedFromViewer,
            t = e.isSuspended,
            i = e.onConfirmProfileInterstitial,
            o = e.onEntriesRendered,
            u = e.onShowBlockedTweets,
            c = e.shouldShowProfileInterstitial,
            d = e.showBlockedTweets,
            g = e.user,
            m = Q()(void 0 !== ae ? ae : (ae = n('iIq9')), g),
            y = (null == m ? void 0 : m.legacy) || {},
            f = y.blocked_by,
            p = y.blocking,
            k = y.withheld_scope
          return t
            ? s.createElement(Nl, null)
            : l
            ? s.createElement(Al, null)
            : m
            ? k && a
              ? s.createElement(Cl, { onEntriesRendered: o, user: m })
              : k
              ? s.createElement(Ml, { user: m })
              : c
              ? s.createElement(Kl, { onConfirmProfileInterstitial: i, user: m })
              : f
              ? s.createElement(el, { user: m })
              : p && !d
              ? s.createElement(al, { onShowBlockedTweets: u, user: m })
              : r
              ? s.createElement(xl, { user: m })
              : s.createElement(hl, { onEntriesRendered: o, showBlockedTweets: d, user: m })
            : null
        },
        Ql = n('I/ms'),
        Wl = n('TIdA'),
        ql = n('cHvH'),
        Vl = n('jhWN'),
        Gl = Wl.a.createLayoutCache(),
        zl = function (e) {
          var l = e.isOwnProfile,
            a = e.isWithheld,
            r = e.user,
            t = Q()(void 0 !== re ? re : (re = n('kVSq')), r),
            i = !l && a,
            o = i || !t.legacy.profile_image_url_https ? void 0 : t.legacy.profile_image_url_https
          return s.createElement(ql.a, null, function (e) {
            var l = e.windowWidth >= Ze.a.theme.breakpoints.medium
            return s.createElement(Vl.a, {
              borderColor: 'cellBackground',
              borderWidth: l ? 'medium' : 'large',
              imageLayoutCache: Gl,
              link: i ? void 0 : { pathname: '/'.concat(t.legacy.screen_name || '', '/photo') },
              size: 'custom',
              style: Ql.a.avatar,
              uri: o || void 0,
            })
          })
        },
        Yl = n('RCZO'),
        Zl = n('n4Eu'),
        Jl = n('cm6r'),
        Xl = n('A91F'),
        $l = n('9Xij'),
        en = Wl.a.createLayoutCache(),
        ln = function (e) {
          var l, n, a
          return null == e ||
            null === (l = e.mediaColor) ||
            void 0 === l ||
            null === (n = l.r) ||
            void 0 === n ||
            null === (a = n.ok) ||
            void 0 === a
            ? void 0
            : a.palette
        },
        nn = function (e) {
          var l = e.isOwnProfile,
            a = e.isWithheld,
            r = e.user,
            t = Q()(void 0 !== te ? te : (te = n('+PaE')), r),
            i = !l && a,
            o = ln(t.legacy.profile_banner_extensions),
            u = o && Zl.a.get(o),
            c = u ? Object(Yl.g)(u) : Ze.a.theme.colors.gray200,
            d = t.legacy.profile_banner_url
          return !i && d
            ? s.createElement(
                Jl.a,
                { accessibilityHidden: !0, link: '/'.concat(t.legacy.screen_name || '', '/header_photo') },
                s.createElement(Wl.a, {
                  accessibilityLabel: '',
                  aspectMode: Xl.a.exact(Ze.a.theme.aspectRatios.profileBanner),
                  backgroundColor: c,
                  image: d,
                  layoutCache: en,
                }),
              )
            : s.createElement(
                wl.a,
                { style: Ql.a.banner },
                s.createElement($l.a, { ratio: Ze.a.theme.aspectRatios.profileBanner, style: { backgroundColor: c } }),
              )
        },
        an = n('3nOA'),
        rn = n('I57f'),
        tn = n('SOvA'),
        sn = n('vYiB'),
        on = n('Y49K'),
        un = n('/yvb'),
        cn = n('ACHU'),
        dn = n('rsoE'),
        gn = n('vMjK'),
        mn = C.a.h63a5c3b,
        yn = function (e) {
          var l = e.buttonStyle,
            a = e.promotedContent,
            r = e.user,
            t = Q()(void 0 !== ie ? ie : (ie = n('+uag')), r),
            i = s.useMemo(
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
          return s.createElement(un.a, {
            accessibilityLabel: mn,
            hoverLabel: { label: mn },
            icon: s.createElement(cn.a, null),
            renderMenu: function (e) {
              return s.createElement(gn.b, { onClose: e, promotedContent: a, user: i, view: 'profile' })
            },
            style: l,
            testID: dn.a.userActions,
            type: 'primaryOutlined',
          })
        },
        fn = C.a.g7088266,
        pn = C.a.gd7acb84,
        kn = C.a.b7636014,
        bn = Ze.a.create(function (e) {
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
        _n = function (e) {
          var l = e.history,
            a = e.isWithheld,
            r = e.loggedInUserId,
            t = e.onFollowButtonOffscreen,
            i = e.promotedContent,
            o = e.user,
            u = Q()(void 0 !== se ? se : (se = n('hCMu')), o),
            c = Object(Sl.b)(),
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
            v = a && !F,
            K = y && r && !m && !S && !v,
            E = r && u && !F && !v,
            w = 'primaryOutlined',
            U = k && r && !m && !S && !a,
            P = f && !p && !_,
            L = s.useCallback(
              function () {
                c.scribe({ element: 'message', action: 'click' }), r && l.push('/messages/'.concat(Object(an.a)(h, r)))
              },
              [c, r, h, l],
            )
          return s.createElement(
            wl.a,
            { style: bn.buttons },
            r && F
              ? s.createElement(
                  un.a,
                  { link: P ? '/i/flow/setup_profile' : '/settings/profile', style: bn.lastButton, type: w },
                  P ? pn : fn,
                )
              : null,
            E && s.createElement(yn, { buttonStyle: bn.button, promotedContent: i, user: u }),
            !F &&
              K &&
              s.createElement(un.a, {
                accessibilityLabel: kn,
                hoverLabel: { label: kn },
                icon: s.createElement(tn.a, null),
                onPress: L,
                style: bn.button,
                testID: on.a.sendDMFromProfile,
                type: w,
              }),
            !F &&
              U &&
              s.createElement(rn.a, { allowPromptForPush: !0, isFollowing: !!b, style: bn.button, userId: u.rest_id }),
            !F &&
              !S &&
              !v &&
              s.createElement(
                sn.a,
                { onOffscreenChange: t },
                s.createElement(Te, { promotedContent: i, style: bn.lastButton, user: u }),
              ),
          )
        },
        hn = n('tOzk'),
        Fn = n('YeIG'),
        Sn = n('Je1/'),
        vn = n('WWyu'),
        Kn = n('YUdS'),
        En = n('EjKN'),
        wn = C.a.a1ea2f12,
        Un = C.a.g8191e77,
        Pn = function (e) {
          var l = e.day,
            n = e.month
          if (l && n) {
            var a = new Date()
            return n === a.getMonth() + 1 && l === a.getDate()
          }
        },
        Ln = void 0 !== oe ? oe : (oe = n('BdHD')),
        Tn = function (e) {
          var l,
            n = e.isOwnProfile,
            a = e.user,
            r = null === (l = Q()(Ln, a).legacy_extended_profile) || void 0 === l ? void 0 : l.birthdate,
            t = s.useRef(),
            i = s.useCallback(function () {
              t.current && t.current.launch()
            }, [])
          return !r ||
            Object(Fn.a)(r) ||
            (r.visibility && 'Self' === r.visibility && r.year_visibility && 'Self' === r.year_visibility)
            ? null
            : Pn(r)
            ? s.createElement(
                s.Fragment,
                null,
                s.createElement(Sn.a, { Icon: Kn.a, onPress: i }, n ? wn : Un),
                s.createElement(hn.a, {
                  setRef: function (e) {
                    t.current = e
                  },
                }),
              )
            : s.createElement(Sn.a, { Icon: En.a }, s.createElement(vn.a, { birthdate: r, withBornPrefixText: !0 }))
        },
        Cn = n('uLiA'),
        Dn = n('EJJl'),
        In = void 0 !== ue ? ue : (ue = n('GQYZ')),
        On = Ze.a.create(function (e) {
          return { description: { display: 'block', marginBottom: e.spaces.space12 } }
        }),
        An = function (e) {
          var l = e.isTranslatable,
            n = e.user,
            a = Q()(In, n),
            r = a.legacy
          return r.description
            ? s.createElement(
                wl.a,
                { style: On.description },
                s.createElement(Dn.a, {
                  description: r.description || '',
                  disableTranslation: !l,
                  entities: El(r.entities),
                  testID: Cn.a.userDescription,
                  userId: a.rest_id,
                  withheldDescription: r.withheld_description || void 0,
                  withheldEntities: El(r.withheld_entities),
                }),
              )
            : null
        },
        Rn = void 0 !== ce ? ce : (ce = n('SXQl')),
        xn = function (e) {
          var l = e.user,
            n = Q()(Rn, l)
          return s.createElement(An, { isTranslatable: n.is_profile_translatable, user: n })
        },
        Bn = n('LhSm'),
        Nn = n('KrGU'),
        Hn = n('I/9y'),
        Mn = void 0 !== de ? de : (de = n('nmzZ')),
        jn = Ze.a.create(function (e) {
          return {
            details: { display: 'block', marginBottom: e.spaces.space12 },
            detailsText: { lineHeight: e.spaces.space12 },
          }
        }),
        Qn = function (e) {
          var l,
            n,
            a,
            r = e.isOwnProfile,
            t = e.user,
            i = Q()(Mn, t),
            o = i.legacy,
            u =
              null === (l = o.entities) ||
              void 0 === l ||
              null === (n = l.url) ||
              void 0 === n ||
              null === (a = n.urls) ||
              void 0 === a
                ? void 0
                : a[0]
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              s.Suspense,
              { fallback: s.createElement(An, { user: i }) },
              s.createElement(xn, { user: i }),
            ),
            s.createElement(
              wl.a,
              { style: jn.details },
              s.createElement(
                Ve.b,
                { style: jn.detailsText, testID: Cn.a.profileHeaderItems },
                o.location
                  ? s.createElement(Sn.a, { Icon: Nn.a }, s.createElement(Ve.b, null, i.legacy.location))
                  : null,
                u && u.url
                  ? s.createElement(
                      Sn.a,
                      { Icon: Hn.a, link: { pathname: u.url, external: !0 } },
                      u.display_url || u.url,
                    )
                  : null,
                s.createElement(s.Suspense, { fallback: null }, s.createElement(Tn, { isOwnProfile: r, user: i })),
                i.legacy.created_at ? s.createElement(Bn.a, { joinDate: i.legacy.created_at }) : null,
              ),
            ),
          )
        },
        Wn = n('W27K'),
        qn = Object(U.a)().propsFromActions(function () {
          return {
            addToast: E.b,
            createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('USER_PROFILE_HEADER'),
            unmute: w.e.unmute,
          }
        }),
        Vn = n('8Usl'),
        Gn = n('P2xQ'),
        zn = C.a.cef4e8cf,
        Yn = C.a.ec294e62,
        Zn = C.a.df422dfe,
        Jn = qn(function (e) {
          var l = e.addToast,
            a = e.createLocalApiErrorHandler,
            r = e.unmute,
            t = e.user,
            o = Q()(void 0 !== ge ? ge : (ge = n('gNV4')), t),
            u = s.useState(!1),
            c = i()(u, 2),
            d = c[0],
            g = c[1],
            m = o.legacy.screen_name
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              Ve.b,
              { color: 'gray700', style: Xn.mute },
              Zn,
              ' ',
              s.createElement(
                Ve.b,
                {
                  accessibilityRole: 'button',
                  color: 'link',
                  onPress: function () {
                    g(!0)
                  },
                  style: Xn.unmuteButton,
                  testID: Vn.a.unmuteLink,
                  withInteractiveStyling: !0,
                },
                Gn.g,
              ),
            ),
            d
              ? s.createElement(H.a, {
                  confirmButtonLabel: Gn.g,
                  headline: zn({ screenName: m }),
                  onCancel: function () {
                    g(!1)
                  },
                  onConfirm: function () {
                    g(!1),
                      r(o.rest_id).then(function () {
                        return l({ text: Object(Gn.d)(m || void 0) })
                      }, a({ showToast: !0 }))
                  },
                  text: Yn,
                })
              : null,
          )
        }),
        Xn = Ze.a.create(function (e) {
          return { mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: 'pointer' } }
        }),
        $n = n('ir4X'),
        ea = function (e) {
          var l = e.label,
            a = Q()(void 0 !== me ? me : (me = n('jUuT')), l)
          return a.badge
            ? s.createElement($n.a, { label: { badge: a.badge, description: a.description, url: a.url || void 0 } })
            : null
        },
        la = function (e) {
          var l = e.isOwnProfile,
            a = e.isWithheld,
            r = e.user,
            t = Q()(void 0 !== ye ? ye : (ye = n('7COa')), r),
            i = t.affiliates_highlighted_label,
            o = t.legacy,
            u = !(!o.name || !o.screen_name || (a && !l)),
            c = u ? o.name || '' : '@'.concat(o.screen_name || '')
          return s.createElement(
            wl.a,
            { style: Ql.a.names },
            s.createElement(We.a, {
              badgeContext: 'account',
              isProtected: a ? void 0 : o.protected,
              isVerified: a ? void 0 : o.verified,
              name: c,
              nameSize: 'headline1',
              screenName: u ? o.screen_name || '' : void 0,
              translatorType: a ? void 0 : o.translator_type || void 0,
              weight: 'heavy',
              withFollowsYou: o.followed_by && !a,
              withNameWrap: !0,
              withStackedLayout: !0,
            }),
            i && i.label ? s.createElement(ea, { label: i.label }) : null,
          )
        },
        na = n('z+ta'),
        aa = n('wCd/'),
        ra = function (e) {
          var l = e.isOwnProfile,
            a = (e.loggedInUserId, e.user),
            r = Q()(void 0 !== fe ? fe : (fe = n('lFTA')), a),
            t = r.legacy,
            i = t.followers_count,
            o = t.friends_count,
            u = t.screen_name
          return s.createElement(O.a, null, function (e) {
            return s.createElement(aa.a, {
              followersCount: i,
              friendsCount: o,
              onPress: e(),
              screenName: u || '',
              withLink: k({ isOwnProfile: l, user: r }),
            })
          })
        },
        ta = Ze.a.create(function (e) {
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
        ia = function (e) {
          var l,
            a,
            r,
            t,
            o,
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
            h = Q()(void 0 !== pe ? pe : (pe = n('aOg7')), _),
            F = s.useState(!1),
            S = i()(F, 2),
            v = S[0],
            K = S[1],
            E = !(null === (l = h.legacy) || void 0 === l || !l.withheld_scope),
            w =
              !f &&
              ((null === (a = h.legacy) || void 0 === a ? void 0 : a.blocking) ||
                (null === (r = h.legacy) || void 0 === r ? void 0 : r.blocked_by) ||
                E),
            U = !f && ((null === (t = h.legacy) || void 0 === t ? void 0 : t.blocked_by) || E),
            P =
              !p ||
              f ||
              (null === (o = h.legacy) || void 0 === o ? void 0 : o.blocking) ||
              (null === (u = h.legacy) || void 0 === u ? void 0 : u.blocked_by) ||
              E ||
              ((null === (c = h.legacy) || void 0 === c ? void 0 : c.protected) &&
                !(null !== (d = h.legacy) && void 0 !== d && d.following)),
            L = null === (g = h.legacy) || void 0 === g ? void 0 : g.following,
            T = s.useRef(L)
          s.useEffect(
            function () {
              L && !T.current && K(!0), (T.current = L)
            },
            [L],
          )
          var C = s.useCallback(function () {
            K(!1)
          }, [])
          return s.createElement(
            wl.a,
            null,
            s.createElement(nn, { isOwnProfile: f, isWithheld: E, user: h }),
            s.createElement(
              wl.a,
              { style: [Ql.a.content, ta.content, w && Ql.a.withheld] },
              s.createElement(
                wl.a,
                { style: ta.avatarAndButtons },
                s.createElement(zl, { isOwnProfile: f, isWithheld: E, user: h }),
                s.createElement(_n, {
                  history: y,
                  isWithheld: E,
                  loggedInUserId: p,
                  onFollowButtonOffscreen: k,
                  promotedContent: b,
                  user: h,
                }),
              ),
              s.createElement(la, { isOwnProfile: f, isWithheld: E, user: h }),
              w ? null : s.createElement(Qn, { isOwnProfile: f, user: h }),
              U ? null : s.createElement(ra, { isOwnProfile: f, loggedInUserId: p, user: h }),
              P
                ? null
                : s.createElement(
                    wl.a,
                    { style: ta.marginTopXSmall },
                    s.createElement(Wn.a, {
                      userId: h.rest_id,
                      userScreenName: (null === (m = h.legacy) || void 0 === m ? void 0 : m.screen_name) || '',
                    }),
                  ),
              h.legacy.muting ? s.createElement(Jn, { user: h }) : null,
            ),
            v ? s.createElement(na.a, { onRemoveClusterFollow: C, userId: h.rest_id }) : null,
          )
        },
        sa = function (e) {
          var l = e.avatarAccessibilityLabel
          return s.createElement(ql.a, null, function (e) {
            e.windowWidth
            return s.createElement(
              wl.a,
              { accessibilityState: { hidden: !0 }, style: Ql.a.avatar },
              s.createElement(Vl.a, { accessibilityLabel: l, size: 'custom' }),
            )
          })
        },
        oa = function (e) {
          var l,
            a = e.avatarAccessibilityLabel,
            r = e.fullUser,
            t = e.restrictedUser,
            i = e.shouldDisplayUserActionSheet,
            o = Q()(void 0 !== ke ? ke : (ke = n('kdCF')), r),
            u = (o && o.legacy) || t
          return (
            u.name && u.screen_name ? (l = u.name) : u.screen_name && (l = '@'.concat(u.screen_name)),
            s.createElement(
              wl.a,
              null,
              s.createElement(
                wl.a,
                { style: Ql.a.banner },
                s.createElement($l.a, { ratio: Ze.a.theme.aspectRatios.profileBanner }),
              ),
              s.createElement(
                wl.a,
                { style: [Ql.a.content, Ql.a.withheld] },
                s.createElement(
                  wl.a,
                  { style: Ql.a.avatarAndButton },
                  s.createElement(sa, { avatarAccessibilityLabel: a }),
                  i && o && s.createElement(yn, { buttonStyle: Ql.a.menuSheetButton, user: o }),
                ),
                s.createElement(
                  wl.a,
                  { style: Ql.a.names },
                  s.createElement(We.a, {
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
        ua = C.a.h1658541,
        ca = C.a.b5447710,
        da = function (e) {
          var l = e.history,
            a = e.isNotFound,
            r = e.isOwnProfile,
            t = e.isSuspended,
            i = e.location,
            o = e.loggedInUserId,
            u = e.onFollowButtonOffscreen,
            c = e.promotedContent,
            d = e.screenName,
            g = e.shouldShowProfileInterstitial,
            m = e.user,
            y = Q()(void 0 !== be ? be : (be = n('Ge0p')), m)
          if (!r && (t || a || g)) {
            var f,
              p = (null == y || null === (f = y.legacy) || void 0 === f ? void 0 : f.name) || void 0,
              k = { name: p, screen_name: d || '' },
              b = a ? ca : t ? ua : p
            return s.createElement(oa, {
              avatarAccessibilityLabel: b,
              fullUser: y,
              restrictedUser: k,
              shouldDisplayUserActionSheet: !t && !a,
            })
          }
          return y
            ? s.createElement(ia, {
                history: l,
                isOwnProfile: r,
                location: i,
                loggedInUserId: o,
                onFollowButtonOffscreen: u,
                promotedContent: c,
                user: y,
              })
            : null
        },
        ga = n('ipry'),
        ma = n('mw9i'),
        ya = n('zfvc'),
        fa = C.a.fa98627a,
        pa = C.a.c6ea308b,
        ka = C.a.ccc9153f,
        ba = function (e) {
          var l = e.displaySensitiveMedia,
            n = e.isNotFound,
            a = e.isSuspended,
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
              isInvalid: a || n,
            }
          var o = !!i.legacy.withheld_scope,
            u = i.rest_id === r,
            c = a || n || (o && !u),
            d = !(!i.legacy.protected || u || i.legacy.following),
            g = !1
          if (i.legacy.profile_interstitial_type) {
            var m = i.legacy.blocking && !t,
              y = i.legacy.blocked_by,
              f =
                (i.legacy.profile_interstitial_type === ga.a.SensitiveMedia ||
                  i.legacy.profile_interstitial_type === ga.a.OffensiveProfileContent) &&
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
        _a = function (e) {
          return e.pathname.includes('/intent/')
        },
        ha = function (e) {
          return ((e && e.state) || {}).promotedTweetState
        },
        Fa = function (e, l, n, a) {
          return e && !n
            ? s.createElement(
                ya.b,
                { animateMount: !0, show: a, type: 'fade' },
                s.createElement(Te, { promotedContent: l, user: e }),
              )
            : void 0
        },
        Sa = function (e, l, n, a, r) {
          if (e) {
            var t = !!(a || n || e.legacy.blocked_by || (e.legacy.blocking && !r))
            return s.createElement(xe.a, {
              hideMediaModule: t,
              userId: e.rest_id,
              userScreenName: e.legacy.screen_name || void 0,
              withTopicsToFollow: k({ user: e, isOwnProfile: l }),
            })
          }
          return s.createElement(y.a, null)
        },
        va = function (e) {
          var l = e.displaySensitiveMedia,
            a = e.fetchStatus,
            r = e.isNotFound,
            t = e.isRefreshing,
            o = e.isSuspended,
            u = e.onRefresh,
            c = e.onRetry,
            y = e.screenName,
            f = e.user,
            p = Object(B.g)(),
            k = Object(B.h)(),
            S = ha(k),
            v = s.useRef(!0),
            K = s.useRef(!0),
            E = s.useContext(m.a).loggedInUserId,
            w = s.useState(!1),
            U = i()(w, 2),
            P = U[0],
            L = U[1],
            T = s.useState(!1),
            C = i()(T, 2),
            D = C[0],
            I = C[1],
            O = s.useState(!1),
            A = i()(O, 2),
            R = A[0],
            x = A[1],
            N = Q()(void 0 !== _e ? _e : (_e = n('kcMG')), f),
            H = ba({
              user: N,
              loggedInUserId: E,
              isSuspended: o,
              isNotFound: r,
              showBlockedTweets: P,
              displaySensitiveMedia: l,
              userProfileInterstitialDismissed: R,
            }),
            M = H.isInvalid,
            j = H.isOwnProfile,
            W = H.isProtectedFromViewer,
            q = H.isWithheld,
            V = H.shouldShowProfileInterstitial,
            G = N && !N.legacy.blocking && !N.legacy.blocked_by && !j && !W && !o && !r && !q && !V
          s.useEffect(
            function () {
              if (a === d.a.FAILED) K.current = !1
              else if (K.current && G) {
                g.d('profile', { source: 'graphql' }), (K.current = !1)
              }
            },
            [a, G],
          )
          var z = s.useCallback(function (e) {
              var l = e.entries
              if ((e.fetchStatus === d.a.FAILED && (v.current = !1), v.current && l.length)) {
                var n = l.some(function (e) {
                  return e.type === b.b.Tweet
                })
                if (((v.current = !1), n)) {
                  g.c('profile', { source: 'graphql' })
                }
              }
            }, []),
            Y = N ? pa({ screenName: N.legacy.screen_name, fullName: N.legacy.name }) : void 0,
            Z = j ? '' : '@'.concat((null == N ? void 0 : N.legacy.screen_name) || y || '', ' '),
            J = s.useMemo(
              function () {
                return function () {
                  return { defaultText: Z }
                }
              },
              [Z],
            ),
            X = M ? null : s.createElement(F.a, { getLocationState: J, history: p }),
            $ = s.useCallback(function (e) {
              var l = e.isOffscreen
              I(l)
            }, []),
            ee = function () {
              x(!0)
            },
            le = function () {
              L(!0)
            },
            ne = s.useCallback(
              function () {
                return s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(da, {
                    history: p,
                    isNotFound: r,
                    isOwnProfile: j,
                    isSuspended: o,
                    location: k,
                    loggedInUserId: E,
                    onFollowButtonOffscreen: $,
                    promotedContent: S,
                    screenName: y,
                    shouldShowProfileInterstitial: V,
                    user: N,
                  }),
                  s.createElement(jl, {
                    isNotFound: r,
                    isOwnProfile: j,
                    isProtectedFromViewer: W,
                    isSuspended: o,
                    onConfirmProfileInterstitial: ee,
                    onEntriesRendered: z,
                    onShowBlockedTweets: le,
                    shouldShowProfileInterstitial: V,
                    showBlockedTweets: P,
                    user: N,
                  }),
                )
              },
              [z, $, p, r, j, W, o, k, E, S, y, V, P, N],
            ),
            ae = s.useCallback(
              function () {
                var e = o || r
                return s.createElement(
                  Be.a,
                  { isRefreshing: t, onRefresh: u },
                  s.createElement(
                    wl.a,
                    { style: Ka.containerGrow },
                    s.createElement(
                      ma.a,
                      null,
                      s.createElement(h.a, {
                        accessibilityLabel: ka({ screenName: y }),
                        fetchStatus: e ? d.a.LOADED : a,
                        onRequestRetry: c,
                        render: ne,
                      }),
                    ),
                  ),
                )
              },
              [y, t, o, r, a, u, c, ne],
            )
          return s.createElement(Ne.a, {
            backLocation: '/',
            composeOptions: { defaultText: Z },
            documentTitle: Y,
            history: p,
            primaryContent: s.createElement(
              _.a,
              { fab: X },
              s.createElement(Re, { user: N }),
              s.createElement(h.a, {
                accessibilityLabel: ka({ screenName: y }),
                fetchStatus: N || M ? d.a.LOADED : a,
                onRequestRetry: c,
                render: ae,
              }),
              _a(k) ? s.createElement(Ce.a, { history: p, location: k, userId: null == N ? void 0 : N.rest_id }) : null,
            ),
            rightControl: Fa(N, S, j, D),
            sidebarContent: Sa(N, j, W, V, P),
            subtitle: N && !M && a === d.a.LOADED ? s.createElement(Qe, { location: k, user: N }) : void 0,
            title: N && !M ? s.createElement(qe, { user: N }) : fa,
          })
        },
        Ka = Ze.a.create(function (e) {
          return { containerGrow: { flexGrow: 1 } }
        }),
        Ea = n('n0Rl'),
        wa = n('UIzd'),
        Ua = n.n(wa),
        Pa = n('Ud88'),
        La = n.n(Pa),
        Ta = void 0 !== he ? he : (he = n('DRvb')),
        Ca = Object(Ea.b)(Ta, { errorConfig: { context: 'USER_PROFILE_SCREEN', options: o.a } }),
        Da = function (e) {
          var l = e.displaySensitiveMedia,
            n = (function (e) {
              var l = e.location,
                n = e.params
              return n && n.screenName
                ? n.screenName
                : l && l.query && l.query.screen_name && 'string' == typeof l.query.screen_name
                ? l.query.screen_name
                : ''
            })({ location: Object(B.h)(), params: Object(B.i)() }),
            a = s.useState(!1),
            r = i()(a, 2),
            t = r[0],
            o = r[1],
            g = La()(),
            m = s.useMemo(
              function () {
                return { screenName: Object(u.a)(n) }
              },
              [n],
            ),
            y = function () {
              o(!0),
                Ua()(g, Ta, { screenName: n })
                  .toPromise()
                  .then(
                    function () {
                      return o(!1)
                    },
                    function () {
                      return o(!1)
                    },
                  )
            }
          return s.createElement(Ca, {
            render: function (e) {
              var a = e.data,
                r = e.error,
                i = e.fetchStatus,
                o = e.retry,
                u = null == a ? void 0 : a.user,
                g = !!r && Object(K.c)(r, K.a.OtherUserSuspended),
                m = !!r && Object(K.c)(r, K.a.GenericUserNotFound),
                f = function () {
                  o()
                }
              return s.createElement(c.a, { userId: null == u ? void 0 : u.rest_id }, function (e) {
                var a = e.scribeNamespace
                return s.createElement(va, {
                  displaySensitiveMedia: l,
                  fetchStatus: Object(d.b)(i, !!u),
                  isNotFound: m,
                  isRefreshing: t,
                  isSuspended: g,
                  onRefresh: y,
                  onRetry: f,
                  screenName: n,
                  scribeNamespace: a,
                  user: u || null,
                })
              })
            },
            variables: m,
          })
        }
      l.default = Da
    },
    yvH6: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        kind: 'InlineDataFragment',
        name: 'determineIsAllowedToViewRelay_determineIsAllowedToViewSubProfilePages_user',
        hash: 'f68541a03432b6580b3a625b1b1124b7',
      }
      l.default = a
    },
  },
])
//# sourceMappingURL=WIPED
