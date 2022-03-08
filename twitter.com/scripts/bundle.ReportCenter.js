;(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    '+hxm': function (e, l, n) {
      'use strict'
      n.r(l)
      var a,
        t,
        i,
        r,
        s,
        u,
        o,
        c,
        d,
        m,
        g,
        y,
        p,
        k,
        _,
        F,
        K,
        f = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'reportId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'ReportDetailQuery',
            selections: [
              {
                alias: null,
                args: (t = [{ kind: 'Literal', name: 's', value: 32 }]),
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
                                args: (i = [
                                  { kind: 'Variable', name: 'report_notification_id', variableName: 'reportId' },
                                ]),
                                concreteType: 'ReportDetail',
                                kind: 'LinkedField',
                                name: 'submitted_report',
                                plural: !1,
                                selections: [
                                  (r = {
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
                storageKey: 'viewer_v2(s:32)',
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
                                args: i,
                                concreteType: 'ReportDetail',
                                kind: 'LinkedField',
                                name: 'submitted_report',
                                plural: !1,
                                selections: [
                                  r,
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
                                                    selections: (k = [
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
                                                                      (y = {
                                                                        alias: null,
                                                                        args: null,
                                                                        filters: null,
                                                                        handle: 'defaultScalars',
                                                                        key: '',
                                                                        kind: 'LinkedHandle',
                                                                        name: 'legacy',
                                                                      }),
                                                                      (p = {
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
                                                      y,
                                                      p,
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: 'TweetWithVisibilityResults',
                                                abstractKey: null,
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                selections: k,
                                                type: 'Tweet',
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
                                                    name: 'tombstone',
                                                    plural: !1,
                                                    selections: [
                                                      o,
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: 'TimelineRichText',
                                                            kind: 'LinkedField',
                                                            name: 'text',
                                                            plural: !1,
                                                            selections: [
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'rtl',
                                                                storageKey: null,
                                                              },
                                                              (_ = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'text',
                                                                storageKey: null,
                                                              }),
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'alignment',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'TimelineRichTextEntity',
                                                                kind: 'LinkedField',
                                                                name: 'entities',
                                                                plural: !0,
                                                                selections: [
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'format',
                                                                    storageKey: null,
                                                                  },
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'from_index',
                                                                    storageKey: null,
                                                                  },
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: null,
                                                                    kind: 'LinkedField',
                                                                    name: 'ref',
                                                                    plural: !1,
                                                                    selections: [
                                                                      o,
                                                                      {
                                                                        kind: 'TypeDiscriminator',
                                                                        abstractKey: '__isTimelineReferenceObject',
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: (F = [_]),
                                                                        type: 'TimelineRichTextCashtag',
                                                                        abstractKey: null,
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: [
                                                                          p,
                                                                          (K = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'url',
                                                                            storageKey: null,
                                                                          }),
                                                                        ],
                                                                        type: 'TimelineRichTextList',
                                                                        abstractKey: null,
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: F,
                                                                        type: 'TimelineRichTextHashtag',
                                                                        abstractKey: null,
                                                                      },
                                                                      {
                                                                        kind: 'InlineFragment',
                                                                        selections: [
                                                                          K,
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'url_type',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'TimelineUrtEndpointOptions',
                                                                            kind: 'LinkedField',
                                                                            name: 'urt_endpoint_options',
                                                                            plural: !1,
                                                                            selections: [
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'cache_id',
                                                                                storageKey: null,
                                                                              },
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'RequestParamsEntry',
                                                                                kind: 'LinkedField',
                                                                                name: 'request_params',
                                                                                plural: !0,
                                                                                selections: [
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'key',
                                                                                    storageKey: null,
                                                                                  },
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'value',
                                                                                    storageKey: null,
                                                                                  },
                                                                                ],
                                                                                storageKey: null,
                                                                              },
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'subtitle',
                                                                                storageKey: null,
                                                                              },
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'TimelineWithContext',
                                                                                kind: 'LinkedField',
                                                                                name: 'timeline_with_context',
                                                                                plural: !1,
                                                                                selections: [
                                                                                  p,
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'context',
                                                                                    storageKey: null,
                                                                                  },
                                                                                ],
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
                                                                        ],
                                                                        type: 'TimelineUrl',
                                                                        abstractKey: null,
                                                                      },
                                                                    ],
                                                                    storageKey: null,
                                                                  },
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'to_index',
                                                                    storageKey: null,
                                                                  },
                                                                ],
                                                                storageKey: null,
                                                              },
                                                            ],
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        type: 'TextTombstone',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: 'TweetTombstone',
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
                                                  y,
                                                  p,
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
                              p,
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
                storageKey: 'viewer_v2(s:32)',
              },
            ],
          },
          params: {
            id: 'JNzwO5n6gVDbcM4uP7S44g',
            metadata: {},
            name: 'ReportDetailQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(f.hash = '693703bbfa133fb16b00c3592d68e184'), (l.default = f)
    },
    '2MR/': function (e, l, n) {
      'use strict'
      var a = n('ddV6'),
        t = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        s = n('3XMw'),
        u = n.n(s),
        o = n('v302'),
        c = u.a.b05a39b2,
        d = u.a.c566d3a5,
        m = function (e) {
          return r.a.createElement(o.a, e)
        },
        g = function (e) {
          var l = e.children,
            n = e.hideLabel,
            a = void 0 === n ? d : n,
            i = e.label,
            s = e.lang,
            u = e.render,
            o = void 0 === u ? m : u,
            g = e.revealLabel,
            y = void 0 === g ? c : g,
            p = r.a.useState(!1),
            k = t()(p, 2),
            _ = k[0],
            F = k[1]
          return o({
            actionText: _ ? a : y,
            children: _ ? l : i,
            lang: s,
            onActionClick: function () {
              return F(!_)
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
        i,
        r,
        s,
        u,
        o,
        c = {
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
                        (i = {
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
                        (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      ],
                      storageKey: null,
                    },
                  ],
                  type: 'TweetWithVisibilityResults',
                  abstractKey: null,
                },
                { kind: 'InlineFragment', selections: [t, i], type: 'Tweet', abstractKey: null },
                {
                  kind: 'InlineFragment',
                  selections: [
                    a,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'tombstone',
                      plural: !1,
                      selections: [
                        {
                          kind: 'InlineFragment',
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'TimelineRichText',
                              kind: 'LinkedField',
                              name: 'text',
                              plural: !1,
                              selections: [
                                {
                                  kind: 'InlineDataFragmentSpread',
                                  name: 'formatRichText_timelineRichText',
                                  selections: [
                                    { alias: null, args: null, kind: 'ScalarField', name: 'rtl', storageKey: null },
                                    (s = {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'text',
                                      storageKey: null,
                                    }),
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'alignment',
                                      storageKey: null,
                                    },
                                    {
                                      kind: 'InlineDataFragmentSpread',
                                      name: 'formatRichText_updateRelayEntities_timelineRichText',
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: 'TimelineRichTextEntity',
                                          kind: 'LinkedField',
                                          name: 'entities',
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'format',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'from_index',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: 'LinkedField',
                                              name: 'ref',
                                              plural: !1,
                                              selections: [
                                                {
                                                  kind: 'InlineDataFragmentSpread',
                                                  name: 'formatRichText_timelineReferenceObject',
                                                  selections: [
                                                    a,
                                                    {
                                                      kind: 'InlineFragment',
                                                      selections: (u = [s]),
                                                      type: 'TimelineRichTextCashtag',
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: 'InlineFragment',
                                                      selections: [
                                                        r,
                                                        (o = {
                                                          alias: null,
                                                          args: null,
                                                          kind: 'ScalarField',
                                                          name: 'url',
                                                          storageKey: null,
                                                        }),
                                                      ],
                                                      type: 'TimelineRichTextList',
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: 'InlineFragment',
                                                      selections: u,
                                                      type: 'TimelineRichTextHashtag',
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: 'InlineDataFragmentSpread',
                                                      name: 'formatUrl_timelineUrl',
                                                      selections: [
                                                        {
                                                          kind: 'InlineFragment',
                                                          selections: [
                                                            o,
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: 'ScalarField',
                                                              name: 'url_type',
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType: 'TimelineUrtEndpointOptions',
                                                              kind: 'LinkedField',
                                                              name: 'urt_endpoint_options',
                                                              plural: !1,
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: 'ScalarField',
                                                                  name: 'cache_id',
                                                                  storageKey: null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType: 'RequestParamsEntry',
                                                                  kind: 'LinkedField',
                                                                  name: 'request_params',
                                                                  plural: !0,
                                                                  selections: [
                                                                    {
                                                                      alias: null,
                                                                      args: null,
                                                                      kind: 'ScalarField',
                                                                      name: 'key',
                                                                      storageKey: null,
                                                                    },
                                                                    {
                                                                      alias: null,
                                                                      args: null,
                                                                      kind: 'ScalarField',
                                                                      name: 'value',
                                                                      storageKey: null,
                                                                    },
                                                                  ],
                                                                  storageKey: null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: 'ScalarField',
                                                                  name: 'subtitle',
                                                                  storageKey: null,
                                                                },
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType: 'TimelineWithContext',
                                                                  kind: 'LinkedField',
                                                                  name: 'timeline_with_context',
                                                                  plural: !1,
                                                                  selections: [
                                                                    r,
                                                                    {
                                                                      alias: null,
                                                                      args: null,
                                                                      kind: 'ScalarField',
                                                                      name: 'context',
                                                                      storageKey: null,
                                                                    },
                                                                  ],
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
                                                          ],
                                                          type: 'TimelineUrl',
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'to_index',
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: 'TextTombstone',
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: 'TweetTombstone',
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'TweetResults',
          abstractKey: null,
        }
      ;(c.hash = 'f748b4df0285b0469a6fb31d17cb0d5b'), (l.default = c)
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
      l.default = a
    },
    sjuR: function (e, l, n) {
      'use strict'
      n.r(l)
      n('Blm6'), n('2G9S')
      var a,
        t,
        i,
        r,
        s,
        u = n('ERkP'),
        o = n.n(u),
        c = n('lnti'),
        d = n('jHSc'),
        m = (n('enFi'), n('3XMw')),
        g = n.n(m),
        y = n('Fr3L'),
        p = n.p + 'report-detail-ear.0518acc5.png',
        k = (n('z84I'), n('yiKp')),
        _ = n.n(k),
        F = n('97Jx'),
        K = n.n(F),
        f = (n('1t7P'), n('jQ/y'), n('ho0z'), n('uFXj'), n('axvi')),
        b = n('MWbm'),
        T = n('jAXQ'),
        S = n.n(T),
        h = n('7N4s'),
        v = n('2MR/'),
        w = n('v302'),
        R = n('WLAg'),
        x = n('tLTi'),
        L = n('r7g+'),
        E = n('rHpw'),
        I = g.a.a098fa3c,
        U = {
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
        C = {
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
        D = function (e) {
          var l,
            t,
            i,
            r,
            s,
            u,
            c,
            d = e.tweet_results,
            m = S()(void 0 !== a ? a : (a = n('Gi4s')), d),
            g = o.a.useContext(h.b).isModal,
            y = null == m || null === (l = m.result) || void 0 === l ? void 0 : l.__typename,
            p =
              'TweetWithVisibilityResults' === y
                ? null === (t = m.result) || void 0 === t
                  ? void 0
                  : t.tweet
                : m.result,
            k = null == p || null === (i = p.legacy) || void 0 === i ? void 0 : i.full_text,
            F = o.a.useCallback(
              function () {
                return o.a.createElement(
                  v.a,
                  {
                    label: I,
                    render: function (e) {
                      return o.a.createElement(w.a, K()({}, e, { style: j.tombstone }))
                    },
                  },
                  k || '',
                )
              },
              [k],
            ),
            T = o.a.useMemo(
              function () {
                if ('TweetTombstone' === y) {
                  var e,
                    l,
                    n =
                      null === (e = m.result) || void 0 === e || null === (l = e.tombstone) || void 0 === l
                        ? void 0
                        : l.text
                  if (n) return Object(f.b)(n)
                }
              },
              [
                null === (r = m.result) || void 0 === r || null === (s = r.tombstone) || void 0 === s ? void 0 : s.text,
                y,
              ],
            )
          if (
            'TweetTombstone' === y &&
            (null === (u = m.result) || void 0 === u || null === (c = u.tombstone) || void 0 === c ? void 0 : c.text)
          )
            return T
              ? o.a.createElement(
                  R.a,
                  null,
                  o.a.createElement(x.a, { align: T.rtl ? 'right' : 'left', entities: T.entities, text: T.text }),
                )
              : null
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
                  tweet: _()(
                    _()({}, U),
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
                      user: _()(
                        _()({}, C),
                        {},
                        {
                          description: a.description || '',
                          profile_image_url_https: a.profile_image_url_https || '',
                          protected: a.protected || !1,
                          screen_name: a.screen_name || '',
                          name: a.name || '',
                          verified: a.verified || !1,
                        },
                      ),
                    },
                  ),
                }
              return o.a.createElement(
                b.a,
                { style: [j.tweet, g && j.wideScreen] },
                o.a.createElement(
                  L.a,
                  K()({}, t, {
                    renderActionsBar: function () {
                      return null
                    },
                    renderTimestamp: function (e) {
                      return o.a.createElement(L.a.Timestamp, K()({}, e, { link: void 0 }))
                    },
                    renderTombstone: F,
                    staticLinkConfig: null,
                  }),
                ),
              )
            }
            return null
          })(p)
        },
        z = o.a.memo(D),
        j = E.a.create(function (e) {
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
        O = n('IMA+'),
        V = function (e) {
          var l,
            a = e.userResults,
            i = S()(void 0 !== t ? t : (t = n('r/Jf')), a),
            r = o.a.useContext(h.b).isModal,
            s = null == i || null === (l = i.result) || void 0 === l ? void 0 : l.legacy,
            u = (null == s ? void 0 : s.idStr) || '',
            c = (null == s ? void 0 : s.description) || '',
            d = (null == s ? void 0 : s.name) || '',
            m = (null == s ? void 0 : s.profile_image_url_https) || '',
            g = (null == s ? void 0 : s.screen_name) || ''
          return u
            ? o.a.createElement(
                b.a,
                { style: [A.userCellContainer, r && A.wideScreen] },
                o.a.createElement(O.a, {
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
        A = E.a.create(function (e) {
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
        B = function (e) {
          var l = e.report_entity_results,
            a = S()(void 0 !== i ? i : (i = n('xYG4')), l)
          switch (a.__typename) {
            case 'TweetResults':
              return o.a.createElement(z, { tweet_results: a })
            case 'UserResults':
              return o.a.createElement(V, { userResults: a })
            default:
              return null
          }
        },
        H = function (e) {
          var l = e.report,
            a = S()(void 0 !== r ? r : (r = n('6mUz')), l)
          return o.a.createElement(
            b.a,
            { style: M.entityList },
            a.map(function (e, l) {
              return o.a.createElement(B, { key: l, report_entity_results: e })
            }),
          )
        },
        M = E.a.create(function (e) {
          return { entityList: { marginVertical: e.spaces.space32 } }
        }),
        W = n('IAZG'),
        P = n('Irs7'),
        q = n('pjBI'),
        G = n('t62R'),
        J = n('3rX5'),
        Q = n('zCf4'),
        N = g.a.e37836f8,
        X = g.a.ccf2f24e,
        Y = g.a.e238c59f,
        Z = 'gray700',
        $ = void 0 !== s ? s : (s = n('+hxm')),
        ee = function () {
          var e,
            l,
            n,
            a,
            t,
            i,
            r = Object(Q.h)(),
            s = Object(W.a)($, { reportId: r.reportId || '' }),
            u =
              null == s ||
              null === (e = s.viewer_v2) ||
              void 0 === e ||
              null === (l = e.user_results) ||
              void 0 === l ||
              null === (n = l.result) ||
              void 0 === n
                ? void 0
                : n.submitted_report,
            d =
              null != u && u.create_time
                ? ((a = null == u ? void 0 : u.create_time), (t = g.a.ba2e82a1), (i = parseInt(a, 10)), t(new Date(i)))
                : '',
            m = null == u ? void 0 : u.header,
            y = null == u ? void 0 : u.follow_up_text,
            p = null == u ? void 0 : u.report_entities_results
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              q.a,
              { color: Z },
              o.a.createElement(G.b, { color: Z, weight: 'bold' }, X),
              o.a.createElement(G.b, { color: Z }, d),
            ),
            o.a.createElement(G.b, { size: 'title3', weight: 'heavy' }, m),
            p ? o.a.createElement(H, { report: Object(c.a)(p) }) : null,
            o.a.createElement(G.b, { size: 'headline2', style: le.headline, weight: 'heavy' }, Y),
            o.a.createElement(G.b, { color: Z, size: 'subtext2', weight: 'normal' }, y),
          )
        },
        le =
          ((l.default = Object(P.a)(
            function () {
              var e = Object(Q.f)(),
                l = o.a.useContext(h.b).isModal
              return o.a.createElement(
                d.b,
                { backButtonType: 'close', containerStyle: le.root, documentTitle: N, history: e, title: N },
                o.a.createElement(
                  b.a,
                  { style: le.parentContainer },
                  o.a.createElement(
                    b.a,
                    { style: le.contentHeader },
                    o.a.createElement(
                      b.a,
                      { style: le.imageContainer },
                      o.a.createElement(J.a, { accessibilityLabel: '', source: p, style: le.image }),
                    ),
                  ),
                  o.a.createElement(
                    b.a,
                    { style: [le.contentBody, l ? le.wideScreen : le.narrowScreen] },
                    o.a.createElement(y.a, { errorConfig: { context: 'REPORT_DETAIL' } }, o.a.createElement(ee, null)),
                  ),
                ),
              )
            },
            { page: 'report_center', component: 'report_detail' },
          )),
          E.a.create(function (e) {
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
                marginBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(E.a.iPhoneOffsetBottom, ')'),
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
