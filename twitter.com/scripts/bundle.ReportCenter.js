;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    '+hxm': function (e, l, a) {
      'use strict'
      a.r(l)
      var n,
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
        p,
        y,
        _,
        k = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'reportId' }]),
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
            argumentDefinitions: n,
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
                                                    selections: (_ = [
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
                                                                          (d = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'profile_image_url_https',
                                                                            storageKey: null,
                                                                          }),
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'protected',
                                                                            storageKey: null,
                                                                          },
                                                                          (m = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'screen_name',
                                                                            storageKey: null,
                                                                          }),
                                                                          (g = {
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
                                                                            name: 'verified',
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      (p = {
                                                                        alias: null,
                                                                        args: null,
                                                                        filters: null,
                                                                        handle: 'defaultScalars',
                                                                        key: '',
                                                                        kind: 'LinkedHandle',
                                                                        name: 'legacy',
                                                                      }),
                                                                      (y = {
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
                                                      p,
                                                      y,
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: 'TweetWithVisibilityResults',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: _,
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
                                                    selections: [
                                                      c,
                                                      {
                                                        alias: 'idStr',
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'id_str',
                                                        storageKey: null,
                                                      },
                                                      g,
                                                      d,
                                                      m,
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  p,
                                                  y,
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
                              y,
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
            id: '_g_y5D5OkBCYzWu4oD-YSg',
            metadata: {},
            name: 'ReportDetailQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(k.hash = 'a6d24222c1869199e6c00d8d9cd2f20a'), (l.default = k)
    },
    '2MR/': function (e, l, a) {
      'use strict'
      var n = a('ddV6'),
        t = a.n(n),
        r = a('ERkP'),
        i = a.n(r),
        s = a('3XMw'),
        u = a.n(s),
        o = a('v302'),
        c = u.a.b05a39b2,
        d = u.a.c566d3a5,
        m = function (e) {
          return i.a.createElement(o.a, e)
        },
        g = function (e) {
          var l = e.children,
            a = e.hideLabel,
            n = void 0 === a ? d : a,
            r = e.label,
            s = e.lang,
            u = e.render,
            o = void 0 === u ? m : u,
            g = e.revealLabel,
            p = void 0 === g ? c : g,
            y = i.a.useState(!1),
            _ = t()(y, 2),
            k = _[0],
            f = _[1]
          return o({
            actionText: k ? n : p,
            children: k ? l : r,
            lang: s,
            onActionClick: function () {
              return f(!k)
            },
          })
        }
      ;(g.displayName = 'TweetDisclosure'), (l.a = g)
    },
    '6mUz': function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: { plural: !0 },
        name: 'ReportEntityList_reportEntityResults',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ReportEntity_reportEntityResults' }],
        type: 'ReportEntityResults',
        abstractKey: '__isReportEntityResults',
        hash: 'b18415d0f89c2df57f81abcb4600f199',
      }
      l.default = n
    },
    Gi4s: function (e, l, a) {
      'use strict'
      a.r(l)
      var n,
        t,
        r,
        i = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'ReportEntityTweet_tweetResults',
          selections: [
            (n = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                    n,
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
      ;(i.hash = '1aead3da6c12e083450a2f87e779a5f8'), (l.default = i)
    },
    'r/Jf': function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
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
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                      { alias: 'idStr', args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'profile_image_url_https',
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
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
        hash: 'fd6bd3ce65fc643c13eaf27668e8d085',
      }
      l.default = n
    },
    sjuR: function (e, l, a) {
      'use strict'
      a.r(l)
      a('Blm6'), a('2G9S')
      var n,
        t,
        r,
        i,
        s,
        u = a('ERkP'),
        o = a.n(u),
        c = a('lnti'),
        d = a('jHSc'),
        m = (a('enFi'), a('3XMw')),
        g = a.n(m),
        p = a('Fr3L'),
        y = a.p + 'report-detail-ear.0518acc5.png',
        _ = (a('z84I'), a('yiKp')),
        k = a.n(_),
        f = a('97Jx'),
        F = a.n(f),
        b = (a('1t7P'), a('jQ/y'), a('ho0z'), a('uFXj'), a('MWbm')),
        K = a('jAXQ'),
        v = a.n(K),
        w = a('7N4s'),
        h = a('2MR/'),
        R = a('v302'),
        S = a('r7g+'),
        T = a('rHpw'),
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
            s = v()(void 0 !== n ? n : (n = a('Gi4s')), i),
            u = o.a.useContext(w.b).isModal,
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
            var l, a
            if (
              null != e &&
              null !== (l = e.core) &&
              void 0 !== l &&
              null !== (a = l.user_results.result) &&
              void 0 !== a &&
              a.legacy &&
              e.legacy
            ) {
              var n = e.core.user_results.result.legacy,
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
                          description: n.description || '',
                          profile_image_url_https: n.profile_image_url_https || '',
                          protected: n.protected || !1,
                          screen_name: n.screen_name || '',
                          name: n.name || '',
                          verified: n.verified || !1,
                        },
                      ),
                    },
                  ),
                }
              return o.a.createElement(
                b.a,
                { style: [C.tweet, u && C.wideScreen] },
                o.a.createElement(
                  S.a,
                  F()({}, t, {
                    renderActionsBar: function () {
                      return null
                    },
                    renderTimestamp: function (e) {
                      return o.a.createElement(S.a.Timestamp, F()({}, e, { link: void 0 }))
                    },
                    renderTombstone: m,
                    staticLinkConfig: null,
                  }),
                ),
              )
            }
            return null
          })(c)
        },
        U = o.a.memo(I),
        C = T.a.create(function (e) {
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
        D = a('IMA+'),
        z = function (e) {
          var l,
            n = e.userResults,
            r = v()(void 0 !== t ? t : (t = a('r/Jf')), n),
            i = o.a.useContext(w.b).isModal,
            s = null == r || null === (l = r.result) || void 0 === l ? void 0 : l.legacy,
            u = (null == s ? void 0 : s.idStr) || '',
            c = (null == s ? void 0 : s.description) || '',
            d = (null == s ? void 0 : s.name) || '',
            m = (null == s ? void 0 : s.profile_image_url_https) || '',
            g = (null == s ? void 0 : s.screen_name) || ''
          return u
            ? o.a.createElement(
                b.a,
                { style: [B.userCellContainer, i && B.wideScreen] },
                o.a.createElement(D.a, {
                  avatarUri: m,
                  description: c,
                  displayMode: 'UserDetailed',
                  entities: {},
                  name: d,
                  screenName: g,
                  userId: u,
                }),
              )
            : null
        },
        B = T.a.create(function (e) {
          return {
            userCellContainer: {
              marginTop: e.spaces.space12,
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray100,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.xLarge,
            },
            wideScreen: { marginHorizontal: e.spaces.space32 },
          }
        }),
        V = function (e) {
          var l = e.report_entity_results,
            n = v()(void 0 !== r ? r : (r = a('xYG4')), l)
          switch (n.__typename) {
            case 'TweetResults':
              return o.a.createElement(U, { tweet_results: n })
            case 'UserResults':
              return o.a.createElement(z, { userResults: n })
            default:
              return null
          }
        },
        j = function (e) {
          var l = e.report,
            n = v()(void 0 !== i ? i : (i = a('6mUz')), l)
          return o.a.createElement(
            b.a,
            { style: A.entityList },
            n.map(function (e, l) {
              return o.a.createElement(V, { key: l, report_entity_results: e })
            }),
          )
        },
        A = T.a.create(function (e) {
          return { entityList: { marginVertical: e.spaces.space32 } }
        }),
        H = a('IAZG'),
        M = a('Irs7'),
        O = a('pjBI'),
        W = a('t62R'),
        G = a('3rX5'),
        Q = a('zCf4'),
        J = g.a.e37836f8,
        P = g.a.ccf2f24e,
        X = g.a.e238c59f,
        N = 'gray700',
        Y = void 0 !== s ? s : (s = a('+hxm')),
        q = function () {
          var e,
            l,
            a,
            n,
            t,
            r,
            i = Object(Q.h)(),
            s = Object(H.a)(Y, { reportId: i.reportId || '' }),
            u =
              null == s ||
              null === (e = s.viewer_v2) ||
              void 0 === e ||
              null === (l = e.user_results) ||
              void 0 === l ||
              null === (a = l.result) ||
              void 0 === a
                ? void 0
                : a.submitted_report,
            d =
              null != u && u.create_time
                ? ((n = null == u ? void 0 : u.create_time), (t = g.a.ba2e82a1), (r = parseInt(n, 10)), t(new Date(r)))
                : '',
            m = null == u ? void 0 : u.header,
            p = null == u ? void 0 : u.follow_up_text,
            y = null == u ? void 0 : u.report_entities_results
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              O.a,
              { color: N },
              o.a.createElement(W.b, { color: N, weight: 'bold' }, P),
              o.a.createElement(W.b, { color: N }, d),
            ),
            o.a.createElement(W.b, { size: 'title3', weight: 'heavy' }, m),
            y ? o.a.createElement(j, { report: Object(c.a)(y) }) : null,
            o.a.createElement(W.b, { size: 'headline2', style: Z.headline, weight: 'heavy' }, X),
            o.a.createElement(W.b, { color: N, size: 'subtext2', weight: 'normal' }, p),
          )
        },
        Z =
          ((l.default = Object(M.a)(
            function () {
              var e = Object(Q.f)(),
                l = o.a.useContext(w.b).isModal
              return o.a.createElement(
                d.b,
                { backButtonType: 'close', containerStyle: Z.root, documentTitle: J, history: e, title: J },
                o.a.createElement(
                  b.a,
                  { style: Z.parentContainer },
                  o.a.createElement(
                    b.a,
                    { style: Z.contentHeader },
                    o.a.createElement(
                      b.a,
                      { style: Z.imageContainer },
                      o.a.createElement(G.a, { accessibilityLabel: '', source: y, style: Z.image }),
                    ),
                  ),
                  o.a.createElement(
                    b.a,
                    { style: [Z.contentBody, l ? Z.wideScreen : Z.narrowScreen] },
                    o.a.createElement(p.a, { errorConfig: { context: 'REPORT_DETAIL' } }, o.a.createElement(q, null)),
                  ),
                ),
              )
            },
            { page: 'report_center', component: 'report_detail' },
          )),
          T.a.create(function (e) {
            return {
              root: { flexShrink: 1, flexGrow: 1, paddingBottom: e.spaces.space32 },
              parentContainer: { alignItems: 'left' },
              contentHeader: { alignItems: 'center' },
              contentBody: { alignItems: 'left' },
              headline: { marginBottom: e.spaces.space12 },
              image: { height: '100%', width: '100%' },
              imageContainer: { height: '150px', width: '150px', marginBottom: e.spaces.space12 },
              wideScreen: { marginBottom: e.spaces.space48, marginHorizontal: e.spaces.space72 },
              narrowScreen: {
                marginBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(T.a.iPhoneOffsetBottom, ')'),
                marginHorizontal: e.spaces.space32,
              },
              tombstone: { border: 'none', marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 },
            }
          }))
    },
    xYG4: function (e, l, a) {
      'use strict'
      a.r(l)
      var n = {
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
      l.default = n
    },
  },
])
//# sourceMappingURL=WIPED
