;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    '+hxm': function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        t,
        r,
        i,
        s,
        u,
        o,
        c,
        d,
        m,
        g,
        y,
        p = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'reportId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ReportDetailQuery',
            selections: [
              {
                alias: null,
                args: (t = [{ kind: 'Literal', name: 's', value: 5 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
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
                              {
                                alias: null,
                                args: (r = [
                                  { kind: 'Variable', name: 'report_notification_id', variableName: 'reportId' },
                                ]),
                                concreteType: 'ReportDetail',
                                kind: 'LinkedField',
                                name: 'submitted_report',
                                plural: !1,
                                selections: [
                                  (i = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'create_time',
                                    storageKey: null,
                                  }),
                                  (s = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'follow_up_text',
                                    storageKey: null,
                                  }),
                                  (u = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'header',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'report_entities_results',
                                    plural: !0,
                                    selections: [
                                      {
                                        args: null,
                                        kind: 'FragmentSpread',
                                        name: 'ReportEntityList_reportEntityResults',
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
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:5)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'ReportDetailQuery',
            selections: [
              {
                alias: null,
                args: t,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
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
                          (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: r,
                                concreteType: 'ReportDetail',
                                kind: 'LinkedField',
                                name: 'submitted_report',
                                plural: !1,
                                selections: [
                                  i,
                                  s,
                                  u,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: 'LinkedField',
                                    name: 'report_entities_results',
                                    plural: !0,
                                    selections: [
                                      o,
                                      { kind: 'TypeDiscriminator', abstractKey: '__isReportEntityResults' },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: 'LinkedField',
                                            name: 'result',
                                            plural: !1,
                                            selections: [
                                              o,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'Tweet',
                                                    kind: 'LinkedField',
                                                    name: 'tweet',
                                                    plural: !1,
                                                    selections: (y = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: 'TweetCore',
                                                        kind: 'LinkedField',
                                                        name: 'core',
                                                        plural: !1,
                                                        selections: [
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
                                                                  o,
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
                                                                          (c = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'description',
                                                                            storageKey: null,
                                                                          }),
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'profile_image_url_https',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'protected',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'screen_name',
                                                                            storageKey: null,
                                                                          },
                                                                          (d = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'name',
                                                                            storageKey: null,
                                                                          }),
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'url',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'verified',
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      (m = {
                                                                        alias: null,
                                                                        args: null,
                                                                        filters: null,
                                                                        handle: 'defaultScalars',
                                                                        key: '',
                                                                        kind: 'LinkedHandle',
                                                                        name: 'legacy',
                                                                      }),
                                                                      (g = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'id',
                                                                        storageKey: null,
                                                                      }),
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
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: 'LegacyTweet',
                                                        kind: 'LinkedField',
                                                        name: 'legacy',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'created_at',
                                                            storageKey: null,
                                                          },
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'display_text_range',
                                                            storageKey: null,
                                                          },
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'full_text',
                                                            storageKey: null,
                                                          },
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'id_str',
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                      m,
                                                      g,
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: 'TweetWithVisibilityResults',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: y,
                                                type: 'Tweet',
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'TweetResults',
                                        abstractKey: null,
                                      },
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: 'LinkedField',
                                            name: 'result',
                                            plural: !1,
                                            selections: [
                                              o,
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
                                                    selections: [d, c],
                                                    storageKey: null,
                                                  },
                                                  m,
                                                  g,
                                                ],
                                                type: 'User',
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        type: 'UserResults',
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              g,
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
                storageKey: 'viewer_v2(s:5)',
              },
            ],
          },
          params: {
            id: 'RfIZsqztZlfVJKEmkVkPwg',
            metadata: {},
            name: 'ReportDetailQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(p.hash = 'a6d24222c1869199e6c00d8d9cd2f20a'), (l.default = p)
    },
    '2MR/': function (e, l, n) {
      'use strict'
      var a = n('ddV6'),
        t = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        s = n('3XMw'),
        u = n.n(s),
        o = n('v302'),
        c = u.a.b05a39b2,
        d = u.a.c566d3a5,
        m = function (e) {
          return i.a.createElement(o.a, e)
        },
        g = function (e) {
          var l = e.children,
            n = e.hideLabel,
            a = void 0 === n ? d : n,
            r = e.label,
            s = e.lang,
            u = e.render,
            o = void 0 === u ? m : u,
            g = e.revealLabel,
            y = void 0 === g ? c : g,
            p = i.a.useState(!1),
            _ = t()(p, 2),
            k = _[0],
            f = _[1]
          return o({
            actionText: k ? a : y,
            children: k ? l : r,
            lang: s,
            onActionClick: function () {
              return f(!k)
            },
          })
        }
      ;(g.displayName = 'TweetDisclosure'), (l.a = g)
    },
    '6mUz': function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: { plural: !0 },
        name: 'ReportEntityList_reportEntityResults',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ReportEntity_reportEntityResults' }],
        type: 'ReportEntityResults',
        abstractKey: '__isReportEntityResults',
        hash: 'b18415d0f89c2df57f81abcb4600f199',
      }
      l.default = a
    },
    Gi4s: function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        t,
        r,
        i = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'ReportEntityTweet_tweetResults',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                    a,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Tweet',
                      kind: 'LinkedField',
                      name: 'tweet',
                      plural: !1,
                      selections: [
                        (t = {
                          alias: null,
                          args: null,
                          concreteType: 'TweetCore',
                          kind: 'LinkedField',
                          name: 'core',
                          plural: !1,
                          selections: [
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
                                              name: 'description',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'profile_image_url_https',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'protected',
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
                                              name: 'name',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'url',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'verified',
                                              storageKey: null,
                                            },
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
                          ],
                          storageKey: null,
                        }),
                        (r = {
                          alias: null,
                          args: null,
                          concreteType: 'LegacyTweet',
                          kind: 'LinkedField',
                          name: 'legacy',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'display_text_range',
                              storageKey: null,
                            },
                            { alias: null, args: null, kind: 'ScalarField', name: 'full_text', storageKey: null },
                            { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                          ],
                          storageKey: null,
                        }),
                        { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: 'TweetWithVisibilityResults',
                  abstractKey: null,
                },
                { kind: 'InlineFragment', selections: [t, r], type: 'Tweet', abstractKey: null },
              ],
              storageKey: null,
            },
          ],
          type: 'TweetResults',
          abstractKey: null,
        }
      ;(i.hash = '7f71f3b7eba1f3557c37027057803ab1'), (l.default = i)
    },
    'r/Jf': function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ReportEntityUser_userResults',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
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
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiUser',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
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
        type: 'UserResults',
        abstractKey: null,
        hash: 'e905ec0e6e9e70201856a135fa2a1b48',
      }
      l.default = a
    },
    sjuR: function (e, l, n) {
      'use strict'
      n.r(l)
      n('Blm6'), n('2G9S')
      var a,
        t,
        r,
        i,
        s,
        u = n('ERkP'),
        o = n.n(u),
        c = n('lnti'),
        d = n('jHSc'),
        m = (n('enFi'), n('3XMw')),
        g = n.n(m),
        y = n('Fr3L'),
        p = n.p + 'report-detail-ear.0518acc5.png',
        _ = (n('z84I'), n('yiKp')),
        k = n.n(_),
        f = n('97Jx'),
        F = n.n(f),
        b = (n('1t7P'), n('jQ/y'), n('ho0z'), n('uFXj'), n('MWbm')),
        K = n('jAXQ'),
        w = n.n(K),
        v = n('7N4s'),
        h = n('2MR/'),
        R = n('v302'),
        T = n('r7g+'),
        S = n('rHpw'),
        E = g.a.a098fa3c,
        L = {
          display_text_range: [0, 24],
          favorite_count: 0,
          favorited: !1,
          id: 0,
          lang: 'en',
          permalink: '',
          reply_count: 0,
          retweet_count: 0,
          retweeted: !1,
        },
        x = {
          created_at: '',
          default_profile: !1,
          default_profile_image: !1,
          fast_followers_count: 0,
          favourites_count: 0,
          follow_request_sent: !1,
          has_custom_timelines: !1,
          id: 0,
          listed_count: 0,
          location: '',
          media_count: 0,
          normal_followers_count: 0,
          notifications: !1,
          profile_banner_url: '',
          show_all_inline_media: !1,
          statuses_count: 0,
          time_zone: '',
          url: '',
          utc_offset: 0,
          withheld_in_countries: [],
          entities: {},
          followed_by: !1,
          followers_count: 0,
          following: !1,
          friends_count: 0,
          id_str: '0',
          is_translator: !1,
          translator_type: 'none',
          withheld_scope: '',
        },
        I = function (e) {
          var l,
            t,
            r,
            i = e.tweet_results,
            s = w()(void 0 !== a ? a : (a = n('Gi4s')), i),
            u = o.a.useContext(v.b).isModal,
            c =
              'TweetWithVisibilityResults' ===
              (null == s || null === (l = s.result) || void 0 === l ? void 0 : l.__typename)
                ? null === (t = s.result) || void 0 === t
                  ? void 0
                  : t.tweet
                : s.result,
            d = null == c || null === (r = c.legacy) || void 0 === r ? void 0 : r.full_text,
            m = o.a.useCallback(
              function () {
                return o.a.createElement(
                  h.a,
                  {
                    label: E,
                    render: function (e) {
                      return o.a.createElement(R.a, F()({}, e, { style: C.tombstone }))
                    },
                  },
                  d || '',
                )
              },
              [d],
            )
          return (function (e) {
            var l, n
            if (
              null != e &&
              null !== (l = e.core) &&
              void 0 !== l &&
              null !== (n = l.user_results.result) &&
              void 0 !== n &&
              n.legacy &&
              e.legacy
            ) {
              var a = e.core.user_results.result.legacy,
                t = {
                  tweet: k()(
                    k()({}, L),
                    {},
                    {
                      id_str: e.legacy.id_str || '',
                      created_at: e.legacy.created_at || '',
                      text: e.legacy.full_text || '',
                      tombstoneInfo: {
                        richText: { text: 'abc', entities: [] },
                        richRevealText: { rtl: !1, text: 'View', entities: [] },
                        text: 'abc',
                      },
                      user: k()(
                        k()({}, x),
                        {},
                        {
                          description: a.description || '',
                          profile_image_url_https: a.profile_image_url_https || '',
                          protected: a.protected || !1,
                          screen_name: a.screen_name || '',
                          name: a.name || '',
                          url: a.url || '',
                          verified: a.verified || !1,
                        },
                      ),
                    },
                  ),
                }
              return o.a.createElement(
                b.a,
                { style: [C.tweet, u && C.wideScreen] },
                o.a.createElement(
                  T.a,
                  F()({}, t, {
                    renderActionsBar: function () {
                      return null
                    },
                    renderTombstone: m,
                  }),
                ),
              )
            }
            return null
          })(c)
        },
        U = o.a.memo(I),
        C = S.a.create(function (e) {
          return {
            tweet: {
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray100,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.xLarge,
              marginVertical: e.spaces.space4,
            },
            tombstone: { border: 'none', marginVertical: e.spaces.space8 },
            wideScreen: { marginHorizontal: e.spaces.space32 },
          }
        }),
        D = n('t62R'),
        z = function (e) {
          var l = e.user_results,
            a = w()(void 0 !== t ? t : (t = n('r/Jf')), l)
          return o.a.createElement(D.b, null, a.__typename)
        },
        V = function (e) {
          var l = e.report_entity_results,
            a = w()(void 0 !== r ? r : (r = n('xYG4')), l)
          switch (a.__typename) {
            case 'TweetResults':
              return o.a.createElement(U, { tweet_results: a })
            case 'UserResults':
              return o.a.createElement(z, { user_results: a })
            default:
              return null
          }
        },
        B = function (e) {
          var l = e.report,
            a = w()(void 0 !== i ? i : (i = n('6mUz')), l)
          return o.a.createElement(
            b.a,
            { style: j.entityList },
            a.map(function (e, l) {
              return o.a.createElement(V, { key: l, report_entity_results: e })
            }),
          )
        },
        j = S.a.create(function (e) {
          return { entityList: { marginVertical: e.spaces.space32 } }
        }),
        A = n('IAZG'),
        G = n('/yvb'),
        H = n('pjBI'),
        M = n('3rX5'),
        O = n('zCf4'),
        P = g.a.e37836f8,
        J = g.a.ccf2f24e,
        Q = g.a.e238c59f,
        W = g.a.b772cd65,
        X = 'gray700',
        q = void 0 !== s ? s : (s = n('+hxm')),
        N = function (e) {
          return o.a.createElement(
            G.a,
            {
              disabled: !1,
              onPress: function () {
                return e.goBack()
              },
              size: 'small',
              type: 'primaryFilled',
            },
            W,
          )
        },
        Z = function () {
          var e,
            l,
            n,
            a = Object(O.h)(),
            t = Object(A.a)(q, { reportId: a.reportId || '' }),
            r =
              null == t ||
              null === (e = t.viewer_v2) ||
              void 0 === e ||
              null === (l = e.user_results) ||
              void 0 === l ||
              null === (n = l.result) ||
              void 0 === n
                ? void 0
                : n.submitted_report,
            i = new Date(parseInt(null == r ? void 0 : r.create_time, 10) || 0).toLocaleDateString(void 0, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            s = null == r ? void 0 : r.header,
            u = null == r ? void 0 : r.follow_up_text,
            d = null == r ? void 0 : r.report_entities_results
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              H.a,
              { color: X },
              o.a.createElement(D.b, { color: X, weight: 'bold' }, J),
              o.a.createElement(D.b, { color: X }, i),
            ),
            o.a.createElement(D.b, { size: 'title3', weight: 'heavy' }, s),
            d ? o.a.createElement(B, { report: Object(c.a)(d) }) : null,
            o.a.createElement(D.b, { size: 'headline2', style: Y.headline, weight: 'heavy' }, Q),
            o.a.createElement(D.b, { color: X, size: 'subtext2', weight: 'normal' }, u),
          )
        },
        Y =
          ((l.default = function () {
            var e = Object(O.f)(),
              l = o.a.useContext(v.b).isModal
            return o.a.createElement(
              d.b,
              {
                backButtonType: 'close',
                containerStyle: Y.root,
                documentTitle: P,
                history: e,
                rightControl: N(e),
                title: P,
              },
              o.a.createElement(
                b.a,
                { style: Y.parentContainer },
                o.a.createElement(
                  b.a,
                  { style: Y.imageContainer },
                  o.a.createElement(M.a, { accessibilityLabel: '', source: p, style: Y.image }),
                ),
                o.a.createElement(
                  b.a,
                  { style: [Y.innerContainer, l ? Y.wideScreen : Y.narrowScreen] },
                  o.a.createElement(y.a, { errorConfig: { context: 'REPORT_DETAIL' } }, o.a.createElement(Z, null)),
                ),
              ),
            )
          }),
          S.a.create(function (e) {
            return {
              root: { flexShrink: 1, flexGrow: 1, paddingBottom: e.spaces.space32 },
              parentContainer: { alignItems: 'center' },
              innerContainer: { alignItems: 'left' },
              headline: { marginBottom: e.spaces.space12 },
              image: { height: '100%', width: '100%' },
              imageContainer: { height: '150px', width: '150px', marginBottom: e.spaces.space12 },
              wideScreen: { marginBottom: e.spaces.space48, marginHorizontal: e.spaces.space72 },
              narrowScreen: {
                marginBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(S.a.iPhoneOffsetBottom, ')'),
                marginHorizontal: e.spaces.space32,
              },
              tombstone: { border: 'none', marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 },
            }
          }))
    },
    xYG4: function (e, l, n) {
      'use strict'
      n.r(l)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ReportEntity_reportEntityResults',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'ReportEntityTweet_tweetResults' },
          { args: null, kind: 'FragmentSpread', name: 'ReportEntityUser_userResults' },
        ],
        type: 'ReportEntityResults',
        abstractKey: '__isReportEntityResults',
        hash: '5341a800b22c6e54bfa4fe619fd32529',
      }
      l.default = a
    },
  },
])
//# sourceMappingURL=WIPED
